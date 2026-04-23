import {
  ItemView,
  WorkspaceLeaf,
  MarkdownRenderer,
  setIcon,
  Modal,
  Setting,
} from "obsidian";
import type ClaudeBridgePlugin from "../main";
import { NlmModal, NlmModalResult, NlmModalPrefill } from "./NlmModal";

export const VIEW_TYPE = "claude-bridge-sidebar";

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

/**
 * Sidebar panel with command buttons, live output, and save-to-vault action.
 */
export class SidebarView extends ItemView {
  private plugin: ClaudeBridgePlugin;
  private progressEl: HTMLElement | null = null;
  private outputEl: HTMLElement | null = null;
  private actionBar: HTMLElement | null = null;
  private statusDot: HTMLElement | null = null;
  private autoScroll = true;
  private lastCommandId = "";
  private lastCommandName = "";
  private lastSaveTarget = "";
  private nlmAccumulatedOutput = "";

  constructor(leaf: WorkspaceLeaf, plugin: ClaudeBridgePlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE;
  }

  getDisplayText(): string {
    return "Claude Bridge";
  }

  getIcon(): string {
    return "terminal";
  }

  async onOpen(): Promise<void> {
    const container = this.containerEl.children[1] as HTMLElement;
    container.empty();
    container.addClass("claude-bridge-container");

    // Header
    const header = container.createDiv("claude-bridge-header");
    header.createSpan({ text: "Claude Bridge" });
    this.statusDot = header.createSpan("claude-bridge-status-dot");
    this.statusDot.addClass("idle");

    // Command buttons grouped
    const commands = this.plugin.commands;
    const groups = this.plugin.groups;

    // Sort groups by order
    const sortedGroups = Object.entries(groups).sort(
      ([, a], [, b]) => a.order - b.order
    );

    for (const [groupId, groupDef] of sortedGroups) {
      const groupCmds = commands.filter((c) => c.group === groupId);
      if (groupCmds.length === 0) continue;

      const groupEl = container.createDiv("claude-bridge-group");
      const groupHeader = groupEl.createDiv("claude-bridge-group-header");
      const chevron = groupHeader.createSpan("claude-bridge-chevron");
      setIcon(chevron, "chevron-right");
      groupHeader.createSpan({ text: groupDef.label });

      const groupBody = groupEl.createDiv("claude-bridge-group-body");
      groupBody.addClass("collapsed");

      // Toggle collapse
      groupHeader.addEventListener("click", () => {
        groupBody.toggleClass("collapsed", !groupBody.hasClass("collapsed"));
        setIcon(
          chevron,
          groupBody.hasClass("collapsed") ? "chevron-right" : "chevron-down"
        );
      });

      for (const cmd of groupCmds) {
        const btn = groupBody.createDiv("claude-bridge-cmd-btn");
        const iconEl = btn.createSpan("claude-bridge-cmd-icon");
        setIcon(iconEl, cmd.icon);
        btn.createSpan({ text: cmd.name });

        btn.addEventListener("click", () => this.runCommand(cmd));
      }
    }

    // ── NLM Section ──
    if (this.plugin.nlmConfig.notebooks.length > 0) {
      const nlmGroup = container.createDiv("claude-bridge-group");
      const nlmHeader = nlmGroup.createDiv("claude-bridge-group-header");
      const nlmChevron = nlmHeader.createSpan("claude-bridge-chevron");
      setIcon(nlmChevron, "chevron-right");
      nlmHeader.createSpan({ text: "NLM Notebooks" });

      const nlmBody = nlmGroup.createDiv("claude-bridge-group-body");
      nlmBody.addClass("collapsed");

      nlmHeader.addEventListener("click", () => {
        nlmBody.toggleClass("collapsed", !nlmBody.hasClass("collapsed"));
        setIcon(
          nlmChevron,
          nlmBody.hasClass("collapsed") ? "chevron-right" : "chevron-down"
        );
      });

      const nlmBtn = nlmBody.createDiv("claude-bridge-cmd-btn");
      const nlmIcon = nlmBtn.createSpan("claude-bridge-cmd-icon");
      setIcon(nlmIcon, "message-square");
      nlmBtn.createSpan({ text: "Query Notebook" });
      nlmBtn.addEventListener("click", () => this.openNlmModal());
    }

    // Progress area (shows current step)
    this.progressEl = container.createDiv("claude-bridge-progress");

    // Output divider
    container.createDiv("claude-bridge-divider").createSpan({
      text: "Output",
    });

    // Output pane
    this.outputEl = container.createDiv("claude-bridge-output");
    this.outputEl.addEventListener("scroll", () => {
      if (!this.outputEl) return;
      const { scrollTop, scrollHeight, clientHeight } = this.outputEl;
      // If user scrolled up more than 50px from bottom, pause auto-scroll
      this.autoScroll = scrollHeight - scrollTop - clientHeight < 50;
    });

    // Action bar
    this.actionBar = container.createDiv("claude-bridge-actions");
    this.renderActionBar(false);

    // Wire up runner events
    this.plugin.runner.on("progress", (step: string) => {
      this.setProgress(step);
    });
    this.plugin.runner.on("output", (chunk: string) => {
      this.appendOutput(chunk);
    });
    this.plugin.runner.on("result", (text: string) => {
      // Replace streaming output with final result
      if (this.outputEl) {
        this.outputEl.empty();
        this.outputEl.removeAttribute("data-raw");
      }
      this.appendOutput(text);
    });
    this.plugin.runner.on("error", (msg: string) => {
      this.setProgress(`Error: ${msg}`);
    });
    this.plugin.runner.on("done", (_code: number) => {
      this.setRunningState(false);
    });

    // Wire up NLM runner events (same output pane)
    // NLM supports append mode: follow-up queries append to existing output
    this.plugin.nlmRunner.on("progress", (step: string) => {
      this.setProgress(step);
    });
    this.plugin.nlmRunner.on("output", (chunk: string) => {
      this.appendOutput(chunk);
    });
    this.plugin.nlmRunner.on("result", (text: string) => {
      if (this.nlmAccumulatedOutput) {
        // Append mode: prepend accumulated conversation
        if (this.outputEl) {
          this.outputEl.empty();
          this.outputEl.removeAttribute("data-raw");
        }
        this.appendOutput(this.nlmAccumulatedOutput + text);
        this.nlmAccumulatedOutput = "";
      } else {
        // Fresh query: replace output
        if (this.outputEl) {
          this.outputEl.empty();
          this.outputEl.removeAttribute("data-raw");
        }
        this.appendOutput(text);
      }
    });
    this.plugin.nlmRunner.on("error", (msg: string) => {
      this.setProgress(`Error: ${msg}`);
    });
    this.plugin.nlmRunner.on("done", (_code: number) => {
      this.setRunningState(false);
    });
  }

  async onClose(): Promise<void> {
    this.plugin.runner.removeAllListeners();
    this.plugin.nlmRunner.removeAllListeners();
  }

  private openNlmModal(): void {
    const config = this.plugin.nlmConfig;
    const modal = new NlmModal(
      this.app,
      config.notebooks,
      config.commands,
      (result: NlmModalResult | null) => {
        if (!result) return;

        // Clear output
        if (this.outputEl) {
          this.outputEl.empty();
          this.outputEl.removeAttribute("data-raw");
        }
        if (this.progressEl) {
          this.progressEl.empty();
        }
        this.autoScroll = true;
        this.setRunningState(true);

        this.lastCommandId = `nlm-${result.command}`;
        this.lastCommandName = `NLM ${result.command}`;
        this.lastSaveTarget = "_meta/";

        const vaultPath = this.plugin.getVaultPath();

        this.plugin.nlmRunner.runQuery(
          result.command,
          result.notebookIds,
          result.query,
          {
            nlmPath: this.plugin.settings.nlmPath,
            cwd: this.plugin.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
            timeout: this.plugin.settings.timeout,
          }
        );
      }
    );
    modal.open();
  }

  private async runCommand(cmd: CommandDef): Promise<void> {
    let skillArgs = cmd.skillArgs || "";

    // Handle promptForArgs
    if (cmd.promptForArgs) {
      const userInput = await this.promptForInput(
        cmd.name,
        cmd.argsPlaceholder || "Enter arguments..."
      );
      if (userInput === null) return; // User cancelled
      skillArgs = skillArgs ? `${skillArgs} ${userInput}` : userInput;
    }

    this.lastCommandId = cmd.id;
    this.lastCommandName = cmd.name;
    this.lastSaveTarget = cmd.saveTarget;

    // Clear output and progress
    if (this.outputEl) {
      this.outputEl.empty();
      this.outputEl.removeAttribute("data-raw");
    }
    if (this.progressEl) {
      this.progressEl.empty();
    }
    this.autoScroll = true;
    this.setRunningState(true);

    const settings = this.plugin.settings;
    const vaultPath = (this.app.vault.adapter as any).basePath || "";

    this.plugin.runner.runSkill(cmd.skillFile, skillArgs, {
      claudePath: settings.claudePath,
      cwd: settings.vaultAsWorkdir ? vaultPath : process.cwd(),
      timeout: cmd.timeout || settings.timeout,
    });
  }

  private promptForInput(
    title: string,
    placeholder: string
  ): Promise<string | null> {
    return new Promise((resolve) => {
      const modal = new ArgsInputModal(
        this.app,
        title,
        placeholder,
        (result) => {
          resolve(result);
        }
      );
      modal.open();
    });
  }

  private setProgress(step: string): void {
    if (!this.progressEl) return;
    this.progressEl.empty();
    const line = this.progressEl.createDiv("claude-bridge-progress-line");
    if (step.startsWith("Done")) {
      line.createSpan({ text: "✅ ", cls: "claude-bridge-progress-icon" });
    } else if (step.startsWith("Error")) {
      line.createSpan({ text: "❌ ", cls: "claude-bridge-progress-icon" });
    } else {
      line.createSpan({ text: "⏳ ", cls: "claude-bridge-progress-icon" });
    }
    line.createSpan({ text: step });
  }

  private appendOutput(text: string): void {
    if (!this.outputEl) return;

    // Append raw text, then re-render as markdown
    const existing = this.outputEl.getAttribute("data-raw") || "";
    const updated = existing + text;
    this.outputEl.setAttribute("data-raw", updated);

    // Re-render markdown
    this.outputEl.empty();
    MarkdownRenderer.render(
      this.app,
      updated,
      this.outputEl,
      "",
      this.plugin
    );

    // Attach click handlers to NLM follow-up suggestion links
    this.attachNlmFollowUpHandlers();

    // Auto-scroll
    if (this.autoScroll) {
      this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }
  }

  /**
   * Find all .nlm-followup links in the output and attach click handlers.
   * Clicking opens NlmModal pre-filled with the suggestion query.
   */
  private attachNlmFollowUpHandlers(): void {
    if (!this.outputEl) return;

    const links = this.outputEl.querySelectorAll("a.nlm-followup");
    links.forEach((link) => {
      const el = link as HTMLElement;
      // Style as clickable button
      el.style.cursor = "pointer";
      el.style.display = "block";
      el.style.padding = "4px 8px";
      el.style.margin = "4px 0";
      el.style.borderRadius = "4px";
      el.style.border = "1px solid var(--background-modifier-border)";
      el.style.backgroundColor = "var(--background-secondary)";
      el.style.color = "var(--text-normal)";
      el.style.textDecoration = "none";
      el.style.fontSize = "0.9em";

      // Prevent default link behavior
      el.addEventListener("click", (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        const query = el.getAttribute("data-nlm-query") || "";
        const notebooks = (el.getAttribute("data-nlm-notebooks") || "").split(",").filter(n => n);
        const command = el.getAttribute("data-nlm-command") || "query";

        this.openNlmModalPrefilled({
          query,
          command,
          notebookIds: notebooks,
        });
      });
    });
  }

  /**
   * Open NLM modal pre-filled with a follow-up suggestion.
   * New results are APPENDED to existing output (conversation mode).
   */
  private openNlmModalPrefilled(prefill: NlmModalPrefill): void {
    const config = this.plugin.nlmConfig;
    const modal = new NlmModal(
      this.app,
      config.notebooks,
      config.commands,
      (result: NlmModalResult | null) => {
        if (!result) return;

        // Save current output as accumulated (conversation continues)
        // Remove the old follow-up suggestions section before appending
        if (this.outputEl) {
          const currentRaw = this.outputEl.getAttribute("data-raw") || "";
          // Strip the old "Gợi ý tiếp theo" section (everything after last ---)
          const lastSepIdx = currentRaw.lastIndexOf("\n---\n");
          const hasFollowUps = currentRaw.includes("nlm-followup");
          if (lastSepIdx > 0 && hasFollowUps) {
            this.nlmAccumulatedOutput = currentRaw.slice(0, lastSepIdx);
          } else {
            this.nlmAccumulatedOutput = currentRaw;
          }
          // Set a separator for the new query
          this.nlmAccumulatedOutput += "\n\n---\n\n";
          this.outputEl.setAttribute("data-raw", this.nlmAccumulatedOutput);
        }

        this.autoScroll = true;
        this.setRunningState(true);

        this.lastCommandId = `nlm-${result.command}`;
        this.lastCommandName = `NLM ${result.command}`;
        this.lastSaveTarget = "_meta/";

        const vaultPath = this.plugin.getVaultPath();

        this.plugin.nlmRunner.runQuery(
          result.command,
          result.notebookIds,
          result.query,
          {
            nlmPath: this.plugin.settings.nlmPath,
            cwd: this.plugin.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
            timeout: this.plugin.settings.timeout,
          }
        );
      },
      prefill
    );
    modal.open();
  }

  private setRunningState(running: boolean): void {
    if (this.statusDot) {
      this.statusDot.removeClass("idle", "running");
      this.statusDot.addClass(running ? "running" : "idle");
    }

    // Dim/undim buttons
    const buttons = this.containerEl.querySelectorAll(".claude-bridge-cmd-btn");
    buttons.forEach((btn) => {
      (btn as HTMLElement).toggleClass("dimmed", running);
    });

    this.renderActionBar(running);
  }

  private renderActionBar(running: boolean): void {
    if (!this.actionBar) return;
    this.actionBar.empty();

    if (running) {
      const stopBtn = this.actionBar.createDiv("claude-bridge-action-btn stop");
      setIcon(stopBtn.createSpan(), "square");
      stopBtn.createSpan({ text: "Stop" });
      stopBtn.addEventListener("click", () => {
        this.plugin.runner.abort();
        this.plugin.nlmRunner.abort();
        this.setRunningState(false);
      });
    }

    const hasOutput =
      this.plugin.runner.getOutput().length > 0 ||
      this.plugin.nlmRunner.getOutput().length > 0;
    if (hasOutput && !running) {
      const saveBtn = this.actionBar.createDiv("claude-bridge-action-btn save");
      setIcon(saveBtn.createSpan(), "save");
      saveBtn.createSpan({ text: "Save to Vault" });
      saveBtn.addEventListener("click", () => {
        this.plugin.vaultWriter.save({
          commandId: this.lastCommandId,
          commandName: this.lastCommandName,
          output: this.plugin.runner.getOutput() || this.plugin.nlmRunner.getOutput(),
          saveTarget: this.lastSaveTarget,
          defaultSaveFolder: this.plugin.settings.defaultSaveFolder,
        });
      });
    }
  }
}

/**
 * Simple modal for collecting command arguments.
 */
class ArgsInputModal extends Modal {
  private result: string | null = null;
  private onSubmit: (result: string | null) => void;
  private title: string;
  private placeholder: string;

  constructor(
    app: any,
    title: string,
    placeholder: string,
    onSubmit: (result: string | null) => void
  ) {
    super(app);
    this.title = title;
    this.placeholder = placeholder;
    this.onSubmit = onSubmit;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: this.title });

    let inputValue = "";

    new Setting(contentEl).setName("Arguments").addText((text) => {
      text.setPlaceholder(this.placeholder);
      text.onChange((value) => {
        inputValue = value;
      });
      // Submit on Enter
      text.inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.result = inputValue;
          this.close();
        }
      });
      // Focus
      setTimeout(() => text.inputEl.focus(), 50);
    });

    new Setting(contentEl)
      .addButton((btn) => {
        btn.setButtonText("Run").setCta().onClick(() => {
          this.result = inputValue;
          this.close();
        });
      })
      .addButton((btn) => {
        btn.setButtonText("Cancel").onClick(() => {
          this.result = null;
          this.close();
        });
      });
  }

  onClose(): void {
    this.onSubmit(this.result);
    this.contentEl.empty();
  }
}
