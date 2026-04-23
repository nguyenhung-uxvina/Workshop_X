import { Modal, Setting, DropdownComponent, TextAreaComponent, Notice } from "obsidian";

interface NotebookEntry {
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

export interface NlmModalResult {
  command: string;
  notebookIds: string[];
  query: string;
}

export interface NlmModalPrefill {
  query?: string;
  command?: string;
  notebookIds?: string[];
}

/**
 * Modal for NLM notebook interactions.
 * Provides: notebook selector, command type, query input.
 */
export class NlmModal extends Modal {
  private notebooks: NotebookEntry[];
  private nlmCommands: NlmCommandEntry[];
  private onSubmit: (result: NlmModalResult | null) => void;

  private selectedCommand = "query";
  private selectedNotebooks: string[] = [];
  private queryText = "";

  // UI elements that need dynamic updates
  private queryContainer: HTMLElement | null = null;
  private notebookContainer: HTMLElement | null = null;
  private extraNotebookContainer: HTMLElement | null = null;

  constructor(
    app: any,
    notebooks: NotebookEntry[],
    nlmCommands: NlmCommandEntry[],
    onSubmit: (result: NlmModalResult | null) => void,
    prefill?: NlmModalPrefill
  ) {
    super(app);
    this.notebooks = notebooks;
    this.nlmCommands = nlmCommands;
    this.onSubmit = onSubmit;

    // Apply prefill values or defaults
    if (prefill?.query) {
      this.queryText = prefill.query;
    }
    if (prefill?.command) {
      this.selectedCommand = prefill.command;
    }
    if (prefill?.notebookIds && prefill.notebookIds.length > 0) {
      this.selectedNotebooks = [...prefill.notebookIds];
    } else if (notebooks.length > 0) {
      this.selectedNotebooks = [notebooks[0].alias];
    }
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.addClass("nlm-modal");
    contentEl.createEl("h3", { text: "NLM Notebook Query" });

    // ── Command selector ──
    new Setting(contentEl)
      .setName("Lệnh")
      .setDesc("Chọn loại lệnh NLM")
      .addDropdown((dropdown: DropdownComponent) => {
        for (const cmd of this.nlmCommands) {
          dropdown.addOption(cmd.id, `${cmd.name} — ${cmd.description}`);
        }
        dropdown.setValue(this.selectedCommand);
        dropdown.onChange((value: string) => {
          this.selectedCommand = value;
          this.updateUI();
        });
      });

    // ── Notebook selector (primary) ──
    this.notebookContainer = contentEl.createDiv();
    this.renderNotebookSelector();

    // ── Extra notebooks for cross-query ──
    this.extraNotebookContainer = contentEl.createDiv();

    // ── Query input ──
    this.queryContainer = contentEl.createDiv();
    this.renderQueryInput();

    // ── Buttons ──
    new Setting(contentEl)
      .addButton((btn) => {
        btn
          .setButtonText("Chạy")
          .setCta()
          .onClick(() => {
            if (!this.validate()) return;
            this.close();
          });
      })
      .addButton((btn) => {
        btn.setButtonText("Hủy").onClick(() => {
          this.selectedCommand = "";
          this.close();
        });
      });

    this.updateUI();
  }

  private renderNotebookSelector(): void {
    if (!this.notebookContainer) return;
    this.notebookContainer.empty();

    new Setting(this.notebookContainer)
      .setName("Notebook")
      .setDesc("Chọn notebook NLM")
      .addDropdown((dropdown: DropdownComponent) => {
        for (const nb of this.notebooks) {
          dropdown.addOption(nb.alias, `${nb.alias} — ${nb.name}`);
        }
        dropdown.setValue(this.selectedNotebooks[0] || "");
        dropdown.onChange((value: string) => {
          this.selectedNotebooks[0] = value;
        });
      });
  }

  private renderExtraNotebooks(): void {
    if (!this.extraNotebookContainer) return;
    this.extraNotebookContainer.empty();

    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (!cmd?.multiNotebook) return;

    const maxExtra = (cmd.maxNotebooks || 3) - 1; // -1 for primary

    for (let i = 0; i < maxExtra; i++) {
      const idx = i + 1;
      new Setting(this.extraNotebookContainer)
        .setName(`Notebook ${idx + 1}`)
        .setDesc(i === 0 ? "Thêm notebook cho cross-query" : "")
        .addDropdown((dropdown: DropdownComponent) => {
          dropdown.addOption("", "(không chọn)");
          for (const nb of this.notebooks) {
            dropdown.addOption(nb.alias, `${nb.alias} — ${nb.name}`);
          }
          dropdown.setValue(this.selectedNotebooks[idx] || "");
          dropdown.onChange((value: string) => {
            this.selectedNotebooks[idx] = value;
          });
        });
    }
  }

  private renderQueryInput(): void {
    if (!this.queryContainer) return;
    this.queryContainer.empty();

    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (!cmd?.requiresQuery) return;

    const setting = new Setting(this.queryContainer)
      .setName("Query")
      .setDesc("Nhập câu hỏi cho notebook");

    setting.addTextArea((textArea: TextAreaComponent) => {
      textArea.setPlaceholder(
        "Ví dụ: Summarize Chapter 2. What are the 7 types of interrelationships?"
      );
      textArea.setValue(this.queryText);
      textArea.onChange((value: string) => {
        this.queryText = value;
      });

      // Make textarea larger
      textArea.inputEl.rows = 4;
      textArea.inputEl.style.width = "100%";
      textArea.inputEl.style.minHeight = "100px";

      // Submit on Ctrl+Enter
      textArea.inputEl.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
          if (this.validate()) {
            this.close();
          }
        }
      });

      // Focus
      setTimeout(() => textArea.inputEl.focus(), 50);
    });
  }

  private updateUI(): void {
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);

    // Show/hide query based on command
    if (this.queryContainer) {
      this.queryContainer.empty();
      if (cmd?.requiresQuery) {
        this.renderQueryInput();
      }
    }

    // Show/hide extra notebooks for cross-query
    if (this.extraNotebookContainer) {
      this.extraNotebookContainer.empty();
      if (cmd?.multiNotebook) {
        this.renderExtraNotebooks();
      }
    }
  }

  private validate(): boolean {
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);

    if (cmd?.requiresQuery && !this.queryText.trim()) {
      new Notice("Vui lòng nhập query");
      return false;
    }

    if (this.selectedNotebooks.length === 0 || !this.selectedNotebooks[0]) {
      new Notice("Vui lòng chọn notebook");
      return false;
    }

    // For cross-query, need at least 2 notebooks
    if (cmd?.multiNotebook) {
      const validNbs = this.selectedNotebooks.filter((n) => n);
      if (validNbs.length < 2) {
        new Notice("Cross-query cần ít nhất 2 notebooks");
        return false;
      }
    }

    return true;
  }

  onClose(): void {
    if (!this.selectedCommand) {
      this.onSubmit(null);
    } else {
      this.onSubmit({
        command: this.selectedCommand,
        notebookIds: this.selectedNotebooks.filter((n) => n),
        query: this.queryText.trim(),
      });
    }
    this.contentEl.empty();
  }
}
