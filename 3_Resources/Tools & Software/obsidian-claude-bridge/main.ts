import { Plugin, WorkspaceLeaf, Notice, TFile, debounce } from "obsidian";
import { CommandRunner } from "./src/CommandRunner";
import { NlmRunner } from "./src/NlmRunner";
import { SidebarView, VIEW_TYPE } from "./src/SidebarView";
import { VaultWriter } from "./src/VaultWriter";

interface CommandDef {
  id: string;
  name: string;
  group: string;
  icon: string;
  skillFile: string;
  skillArgs?: string;
  saveTarget: string;
  timeout?: number;
  promptForArgs?: boolean;
  argsPlaceholder?: string;
}

interface GroupDef {
  label: string;
  order: number;
}

interface CommandsConfig {
  commands: CommandDef[];
  groups: Record<string, GroupDef>;
}

interface NlmNotebookEntry {
  alias: string;
  id: string;
  name: string;
}

interface NlmCommandEntry {
  id: string;
  name: string;
  description: string;
  requiresQuery: boolean;
  multiNotebook?: boolean;
  maxNotebooks?: number;
}

interface NlmConfig {
  notebooks: NlmNotebookEntry[];
  commands: NlmCommandEntry[];
}

interface ClaudeBridgeSettings {
  claudePath: string;
  nlmPath: string;
  vaultAsWorkdir: boolean;
  defaultSaveFolder: string;
  timeout: number;
  galaxyWatcherEnabled: boolean;
  lastAnalystTrapRatio: string;
  lastAnalystTrapDate: string;
}

const DEFAULT_SETTINGS: ClaudeBridgeSettings = {
  claudePath: "claude",
  nlmPath: "nlm",
  vaultAsWorkdir: true,
  defaultSaveFolder: "",
  timeout: 120,
  galaxyWatcherEnabled: true,
  lastAnalystTrapRatio: "",
  lastAnalystTrapDate: "",
};

export default class ClaudeBridgePlugin extends Plugin {
  settings: ClaudeBridgeSettings = DEFAULT_SETTINGS;
  runner: CommandRunner = new CommandRunner();
  nlmRunner: NlmRunner = new NlmRunner();
  vaultWriter: VaultWriter = new VaultWriter(this.app);
  commands: CommandDef[] = [];
  groups: Record<string, GroupDef> = {};
  nlmConfig: NlmConfig = { notebooks: [], commands: [] };
  private statusBarEl: HTMLElement | null = null;

  async onload(): Promise<void> {
    await this.loadSettings();
    await this.loadCommands();
    await this.loadNlmConfig();

    // Register sidebar view
    this.registerView(VIEW_TYPE, (leaf) => new SidebarView(leaf, this));

    // Ribbon icon to toggle sidebar
    this.addRibbonIcon("terminal", "Claude Bridge", () => {
      this.activateView();
    });

    // Register each command in Obsidian's command palette
    for (const cmd of this.commands) {
      this.addCommand({
        id: `claude-${cmd.id}`,
        name: `Claude: ${cmd.name}`,
        callback: () => {
          this.activateView().then(() => {
            const view = this.getView();
            if (view) {
              view.containerEl.dispatchEvent(
                new CustomEvent("claude-run-command", { detail: cmd })
              );
            }
          });
        },
      });
    }

    // Command to reload commands.json
    this.addCommand({
      id: "claude-reload-commands",
      name: "Claude: Reload Commands",
      callback: async () => {
        await this.loadCommands();
        new Notice(`Loaded ${this.commands.length} commands`);
      },
    });

    // ── v3: Galaxy Vault Watcher ──
    this.setupGalaxyWatcher();

    // ── v3: Status Bar Widget ──
    this.setupStatusBar();

    // Listen for analyst-trap results to update status bar
    this.runner.on("result", (text: string) => {
      this.tryUpdateAnalystTrapRatio(text);
    });
  }

  onunload(): void {
    this.runner.abort();
    this.runner.removeAllListeners();
    this.nlmRunner.abort();
    this.nlmRunner.removeAllListeners();
  }

  // ── Galaxy Vault Watcher ──
  // Watches for new files in 5_Galaxy/ and prompts to run galaxy-gate

  private setupGalaxyWatcher(): void {
    // Debounce to avoid multiple triggers for rapid file operations
    const onFileCreate = debounce(
      (file: TFile) => {
        if (!this.settings.galaxyWatcherEnabled) return;
        if (!file.path.startsWith("5_Galaxy/")) return;
        if (!file.path.endsWith(".md")) return;

        // Show notice with action button
        const notice = new Notice("", 10000);
        const container = notice.noticeEl;
        container.empty();

        const msg = container.createDiv();
        msg.createEl("strong", { text: "New Galaxy note detected" });
        msg.createEl("br");
        msg.createSpan({
          text: file.basename,
          cls: "claude-bridge-notice-file",
        });

        const btnRow = container.createDiv({
          cls: "claude-bridge-notice-actions",
        });

        const runBtn = btnRow.createEl("button", {
          text: "Run Galaxy Gate",
          cls: "mod-cta",
        });
        runBtn.addEventListener("click", () => {
          notice.hide();
          this.runGalaxyGate(file.basename);
        });

        const dismissBtn = btnRow.createEl("button", { text: "Dismiss" });
        dismissBtn.addEventListener("click", () => {
          notice.hide();
        });
      },
      1000,
      true
    );

    this.registerEvent(this.app.vault.on("create", (file) => {
      if (file instanceof TFile) {
        onFileCreate(file);
      }
    }));
  }

  private async runGalaxyGate(noteName: string): Promise<void> {
    await this.activateView();
    const galaxyGateCmd = this.commands.find((c) => c.id === "galaxy-gate");
    if (!galaxyGateCmd) {
      new Notice("Galaxy Gate command not found in commands.json");
      return;
    }

    const vaultPath = (this.app.vault.adapter as any).basePath || "";
    this.runner.runSkill(
      galaxyGateCmd.skillFile,
      `Check this newly created note: ${noteName}`,
      {
        claudePath: this.settings.claudePath,
        cwd: this.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
        timeout: galaxyGateCmd.timeout || this.settings.timeout,
      }
    );
  }

  // ── Status Bar Widget ──
  // Shows last analyst-trap ratio in Obsidian's bottom status bar

  private setupStatusBar(): void {
    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.addClass("claude-bridge-statusbar");
    this.updateStatusBar();

    // Click to run analyst-trap
    this.statusBarEl.addEventListener("click", () => {
      this.activateView().then(() => {
        const view = this.getView();
        const cmd = this.commands.find((c) => c.id === "analyst-trap");
        if (view && cmd) {
          view.containerEl.dispatchEvent(
            new CustomEvent("claude-run-command", { detail: cmd })
          );
        }
      });
    });
  }

  private updateStatusBar(): void {
    if (!this.statusBarEl) return;
    const ratio = this.settings.lastAnalystTrapRatio;
    const date = this.settings.lastAnalystTrapDate;

    if (ratio) {
      this.statusBarEl.setText(`A:P ${ratio}`);
      this.statusBarEl.setAttribute(
        "aria-label",
        `Analyst:Physical ratio — ${date || "unknown date"}\nClick to refresh`
      );
    } else {
      this.statusBarEl.setText("A:P —");
      this.statusBarEl.setAttribute(
        "aria-label",
        "No analyst-trap data yet. Click to run."
      );
    }
  }

  /**
   * Parse analyst-trap output for ratio and save it.
   * Looks for patterns like "2.1:1" or "Ratio: 3.0:1"
   */
  private async tryUpdateAnalystTrapRatio(text: string): Promise<void> {
    // Match patterns like "2.1:1", "1.5 : 1", "ratio: 3.0:1"
    const ratioMatch = text.match(/(\d+\.?\d*)\s*:\s*1/);
    if (!ratioMatch) return;

    // Only update if the text looks like an analyst-trap result
    const looksLikeAnalystTrap =
      text.toLowerCase().includes("analyst") ||
      text.toLowerCase().includes("analytical") ||
      text.toLowerCase().includes("physical") ||
      text.toLowerCase().includes("ratio");

    if (!looksLikeAnalystTrap) return;

    this.settings.lastAnalystTrapRatio = `${ratioMatch[1]}:1`;
    this.settings.lastAnalystTrapDate = new Date().toISOString().slice(0, 10);
    await this.saveSettings();
    this.updateStatusBar();
  }

  // ── View management ──

  async activateView(): Promise<void> {
    const existing = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (existing.length > 0) {
      this.app.workspace.revealLeaf(existing[0]);
      return;
    }

    const leaf = this.app.workspace.getRightLeaf(false);
    if (leaf) {
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
      this.app.workspace.revealLeaf(leaf);
    }
  }

  getView(): SidebarView | null {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length > 0) {
      return leaves[0].view as SidebarView;
    }
    return null;
  }

  async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  async loadCommands(): Promise<void> {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) {
        this.commands = [];
        this.groups = {};
        return;
      }

      const configPath = `${pluginDir}/commands.json`;
      const raw = await this.app.vault.adapter.read(configPath);
      const config: CommandsConfig = JSON.parse(raw);

      this.commands = config.commands || [];
      this.groups = config.groups || {};
    } catch (err) {
      console.error("Claude Bridge: Failed to load commands.json", err);
      new Notice("Claude Bridge: Failed to load commands.json");
      this.commands = [];
      this.groups = {};
    }
  }

  async loadNlmConfig(): Promise<void> {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) {
        this.nlmConfig = { notebooks: [], commands: [] };
        return;
      }

      const configPath = `${pluginDir}/nlm-notebooks.json`;
      const raw = await this.app.vault.adapter.read(configPath);
      this.nlmConfig = JSON.parse(raw);
    } catch (err) {
      console.error("Claude Bridge: Failed to load nlm-notebooks.json", err);
      this.nlmConfig = { notebooks: [], commands: [] };
    }
  }

  getVaultPath(): string {
    return (this.app.vault.adapter as any).basePath || "";
  }
}
