import { ItemView, MarkdownRenderer, setIcon, Modal, Setting, } from "obsidian";
import { NlmModal } from "./NlmModal";
export const VIEW_TYPE = "claude-bridge-sidebar";
/**
 * Sidebar panel with command buttons, live output, and save-to-vault action.
 */
export class SidebarView extends ItemView {
    constructor(leaf, plugin) {
        super(leaf);
        this.progressEl = null;
        this.outputEl = null;
        this.actionBar = null;
        this.statusDot = null;
        this.autoScroll = true;
        this.lastCommandId = "";
        this.lastCommandName = "";
        this.lastSaveTarget = "";
        this.nlmAccumulatedOutput = "";
        this.plugin = plugin;
    }
    getViewType() {
        return VIEW_TYPE;
    }
    getDisplayText() {
        return "Claude Bridge";
    }
    getIcon() {
        return "terminal";
    }
    async onOpen() {
        const container = this.containerEl.children[1];
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
        const sortedGroups = Object.entries(groups).sort(([, a], [, b]) => a.order - b.order);
        for (const [groupId, groupDef] of sortedGroups) {
            const groupCmds = commands.filter((c) => c.group === groupId);
            if (groupCmds.length === 0)
                continue;
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
                setIcon(chevron, groupBody.hasClass("collapsed") ? "chevron-right" : "chevron-down");
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
                setIcon(nlmChevron, nlmBody.hasClass("collapsed") ? "chevron-right" : "chevron-down");
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
            if (!this.outputEl)
                return;
            const { scrollTop, scrollHeight, clientHeight } = this.outputEl;
            // If user scrolled up more than 50px from bottom, pause auto-scroll
            this.autoScroll = scrollHeight - scrollTop - clientHeight < 50;
        });
        // Action bar
        this.actionBar = container.createDiv("claude-bridge-actions");
        this.renderActionBar(false);
        // Wire up runner events
        this.plugin.runner.on("progress", (step) => {
            this.setProgress(step);
        });
        this.plugin.runner.on("output", (chunk) => {
            this.appendOutput(chunk);
        });
        this.plugin.runner.on("result", (text) => {
            // Replace streaming output with final result
            if (this.outputEl) {
                this.outputEl.empty();
                this.outputEl.removeAttribute("data-raw");
            }
            this.appendOutput(text);
        });
        this.plugin.runner.on("error", (msg) => {
            this.setProgress(`Error: ${msg}`);
        });
        this.plugin.runner.on("done", (_code) => {
            this.setRunningState(false);
        });
        // Wire up NLM runner events (same output pane)
        // NLM supports append mode: follow-up queries append to existing output
        this.plugin.nlmRunner.on("progress", (step) => {
            this.setProgress(step);
        });
        this.plugin.nlmRunner.on("output", (chunk) => {
            this.appendOutput(chunk);
        });
        this.plugin.nlmRunner.on("result", (text) => {
            if (this.nlmAccumulatedOutput) {
                // Append mode: prepend accumulated conversation
                if (this.outputEl) {
                    this.outputEl.empty();
                    this.outputEl.removeAttribute("data-raw");
                }
                this.appendOutput(this.nlmAccumulatedOutput + text);
                this.nlmAccumulatedOutput = "";
            }
            else {
                // Fresh query: replace output
                if (this.outputEl) {
                    this.outputEl.empty();
                    this.outputEl.removeAttribute("data-raw");
                }
                this.appendOutput(text);
            }
        });
        this.plugin.nlmRunner.on("error", (msg) => {
            this.setProgress(`Error: ${msg}`);
        });
        this.plugin.nlmRunner.on("done", (_code) => {
            this.setRunningState(false);
        });
    }
    async onClose() {
        this.plugin.runner.removeAllListeners();
        this.plugin.nlmRunner.removeAllListeners();
    }
    openNlmModal() {
        const config = this.plugin.nlmConfig;
        const modal = new NlmModal(this.app, config.notebooks, config.commands, (result) => {
            if (!result)
                return;
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
            this.plugin.nlmRunner.runQuery(result.command, result.notebookIds, result.query, {
                nlmPath: this.plugin.settings.nlmPath,
                cwd: this.plugin.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
                timeout: this.plugin.settings.timeout,
            });
        });
        modal.open();
    }
    async runCommand(cmd) {
        let skillArgs = cmd.skillArgs || "";
        // Handle promptForArgs
        if (cmd.promptForArgs) {
            const userInput = await this.promptForInput(cmd.name, cmd.argsPlaceholder || "Enter arguments...");
            if (userInput === null)
                return; // User cancelled
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
        const vaultPath = this.app.vault.adapter.basePath || "";
        this.plugin.runner.runSkill(cmd.skillFile, skillArgs, {
            claudePath: settings.claudePath,
            cwd: settings.vaultAsWorkdir ? vaultPath : process.cwd(),
            timeout: cmd.timeout || settings.timeout,
        });
    }
    promptForInput(title, placeholder) {
        return new Promise((resolve) => {
            const modal = new ArgsInputModal(this.app, title, placeholder, (result) => {
                resolve(result);
            });
            modal.open();
        });
    }
    setProgress(step) {
        if (!this.progressEl)
            return;
        this.progressEl.empty();
        const line = this.progressEl.createDiv("claude-bridge-progress-line");
        if (step.startsWith("Done")) {
            line.createSpan({ text: "✅ ", cls: "claude-bridge-progress-icon" });
        }
        else if (step.startsWith("Error")) {
            line.createSpan({ text: "❌ ", cls: "claude-bridge-progress-icon" });
        }
        else {
            line.createSpan({ text: "⏳ ", cls: "claude-bridge-progress-icon" });
        }
        line.createSpan({ text: step });
    }
    appendOutput(text) {
        if (!this.outputEl)
            return;
        // Append raw text, then re-render as markdown
        const existing = this.outputEl.getAttribute("data-raw") || "";
        const updated = existing + text;
        this.outputEl.setAttribute("data-raw", updated);
        // Re-render markdown
        this.outputEl.empty();
        MarkdownRenderer.render(this.app, updated, this.outputEl, "", this.plugin);
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
    attachNlmFollowUpHandlers() {
        if (!this.outputEl)
            return;
        const links = this.outputEl.querySelectorAll("a.nlm-followup");
        links.forEach((link) => {
            const el = link;
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
            el.addEventListener("click", (e) => {
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
    openNlmModalPrefilled(prefill) {
        const config = this.plugin.nlmConfig;
        const modal = new NlmModal(this.app, config.notebooks, config.commands, (result) => {
            if (!result)
                return;
            // Save current output as accumulated (conversation continues)
            // Remove the old follow-up suggestions section before appending
            if (this.outputEl) {
                const currentRaw = this.outputEl.getAttribute("data-raw") || "";
                // Strip the old "Gợi ý tiếp theo" section (everything after last ---)
                const lastSepIdx = currentRaw.lastIndexOf("\n---\n");
                const hasFollowUps = currentRaw.includes("nlm-followup");
                if (lastSepIdx > 0 && hasFollowUps) {
                    this.nlmAccumulatedOutput = currentRaw.slice(0, lastSepIdx);
                }
                else {
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
            this.plugin.nlmRunner.runQuery(result.command, result.notebookIds, result.query, {
                nlmPath: this.plugin.settings.nlmPath,
                cwd: this.plugin.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
                timeout: this.plugin.settings.timeout,
            });
        }, prefill);
        modal.open();
    }
    setRunningState(running) {
        if (this.statusDot) {
            this.statusDot.removeClass("idle", "running");
            this.statusDot.addClass(running ? "running" : "idle");
        }
        // Dim/undim buttons
        const buttons = this.containerEl.querySelectorAll(".claude-bridge-cmd-btn");
        buttons.forEach((btn) => {
            btn.toggleClass("dimmed", running);
        });
        this.renderActionBar(running);
    }
    renderActionBar(running) {
        if (!this.actionBar)
            return;
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
        const hasOutput = this.plugin.runner.getOutput().length > 0 ||
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
    constructor(app, title, placeholder, onSubmit) {
        super(app);
        this.result = null;
        this.title = title;
        this.placeholder = placeholder;
        this.onSubmit = onSubmit;
    }
    onOpen() {
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
    onClose() {
        this.onSubmit(this.result);
        this.contentEl.empty();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhclZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaWRlYmFyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsUUFBUSxFQUVSLGdCQUFnQixFQUNoQixPQUFPLEVBQ1AsS0FBSyxFQUNMLE9BQU8sR0FDUixNQUFNLFVBQVUsQ0FBQztBQUVsQixPQUFPLEVBQUUsUUFBUSxFQUFtQyxNQUFNLFlBQVksQ0FBQztBQUV2RSxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsdUJBQXVCLENBQUM7QUFvQmpEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFdBQVksU0FBUSxRQUFRO0lBWXZDLFlBQVksSUFBbUIsRUFBRSxNQUEwQjtRQUN6RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFYTixlQUFVLEdBQXVCLElBQUksQ0FBQztRQUN0QyxhQUFRLEdBQXVCLElBQUksQ0FBQztRQUNwQyxjQUFTLEdBQXVCLElBQUksQ0FBQztRQUNyQyxjQUFTLEdBQXVCLElBQUksQ0FBQztRQUNyQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDOUQsU0FBUyxDQUFDLEtBQUssRUFBRSxD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RSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJdGVtVmlldyxcclxuICBXb3Jrc3BhY2VMZWFmLFxyXG4gIE1hcmtkb3duUmVuZGVyZXIsXHJcbiAgc2V0SWNvbixcclxuICBNb2RhbCxcclxuICBTZXR0aW5nLFxyXG59IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgdHlwZSBDbGF1ZGVCcmlkZ2VQbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcclxuaW1wb3J0IHsgTmxtTW9kYWwsIE5sbU1vZGFsUmVzdWx0LCBObG1Nb2RhbFByZWZpbGwgfSBmcm9tIFwiLi9ObG1Nb2RhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRSA9IFwiY2xhdWRlLWJyaWRnZS1zaWRlYmFyXCI7XHJcblxyXG5pbnRlcmZhY2UgQ29tbWFuZERlZiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ3JvdXA6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgc2tpbGxGaWxlOiBzdHJpbmc7XHJcbiAgc2tpbGxBcmdzPzogc3RyaW5nO1xyXG4gIHNhdmVUYXJnZXQ6IHN0cmluZztcclxuICB0aW1lb3V0PzogbnVtYmVyO1xyXG4gIHByb21wdEZvckFyZ3M/OiBib29sZWFuO1xyXG4gIGFyZ3NQbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEdyb3VwRGVmIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG9yZGVyOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTaWRlYmFyIHBhbmVsIHdpdGggY29tbWFuZCBidXR0b25zLCBsaXZlIG91dHB1dCwgYW5kIHNhdmUtdG8tdmF1bHQgYWN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG4gIHByaXZhdGUgcGx1Z2luOiBDbGF1ZGVCcmlkZ2VQbHVnaW47XHJcbiAgcHJpdmF0ZSBwcm9ncmVzc0VsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgb3V0cHV0RWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBhY3Rpb25CYXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzdGF0dXNEb3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBhdXRvU2Nyb2xsID0gdHJ1ZTtcclxuICBwcml2YXRlIGxhc3RDb21tYW5kSWQgPSBcIlwiO1xyXG4gIHByaXZhdGUgbGFzdENvbW1hbmROYW1lID0gXCJcIjtcclxuICBwcml2YXRlIGxhc3RTYXZlVGFyZ2V0ID0gXCJcIjtcclxuICBwcml2YXRlIG5sbUFjY3VtdWxhdGVkT3V0cHV0ID0gXCJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBDbGF1ZGVCcmlkZ2VQbHVnaW4pIHtcclxuICAgIHN1cGVyKGxlYWYpO1xyXG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFZJRVdfVFlQRTtcclxuICB9XHJcblxyXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJDbGF1ZGUgQnJpZGdlXCI7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJ0ZXJtaW5hbFwiO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbC5jaGlsZHJlblsxXSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xyXG4gICAgY29udGFpbmVyLmFkZENsYXNzKFwiY2xhdWRlLWJyaWRnZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KFwiY2xhdWRlLWJyaWRnZS1oZWFkZXJcIik7XHJcbiAgICBoZWFkZXIuY3JlYXRlU3Bhbih7IHRleHQ6IFwiQ2xhdWRlIEJyaWRnZVwiIH0pO1xyXG4gICAgdGhpcy5zdGF0dXNEb3QgPSBoZWFkZXIuY3JlYXRlU3BhbihcImNsYXVkZS1icmlkZ2Utc3RhdHVzLWRvdFwiKTtcclxuICAgIHRoaXMuc3RhdHVzRG90LmFkZENsYXNzKFwiaWRsZVwiKTtcclxuXHJcbiAgICAvLyBDb21tYW5kIGJ1dHRvbnMgZ3JvdXBlZFxyXG4gICAgY29uc3QgY29tbWFuZHMgPSB0aGlzLnBsdWdpbi5jb21tYW5kcztcclxuICAgIGNvbnN0IGdyb3VwcyA9IHRoaXMucGx1Z2luLmdyb3VwcztcclxuXHJcbiAgICAvLyBTb3J0IGdyb3VwcyBieSBvcmRlclxyXG4gICAgY29uc3Qgc29ydGVkR3JvdXBzID0gT2JqZWN0LmVudHJpZXMoZ3JvdXBzKS5zb3J0KFxyXG4gICAgICAoWywgYV0sIFssIGJdKSA9PiBhLm9yZGVyIC0gYi5vcmRlclxyXG4gICAgKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtncm91cElkLCBncm91cERlZl0gb2Ygc29ydGVkR3JvdXBzKSB7XHJcbiAgICAgIGNvbnN0IGdyb3VwQ21kcyA9IGNvbW1hbmRzLmZpbHRlcigoYykgPT4gYy5ncm91cCA9PT0gZ3JvdXBJZCk7XHJcbiAgICAgIGlmIChncm91cENtZHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KFwiY2xhdWRlLWJyaWRnZS1ncm91cFwiKTtcclxuICAgICAgY29uc3QgZ3JvdXBIZWFkZXIgPSBncm91cEVsLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtZ3JvdXAtaGVhZGVyXCIpO1xyXG4gICAgICBjb25zdCBjaGV2cm9uID0gZ3JvdXBIZWFkZXIuY3JlYXRlU3BhbihcImNsYXVkZS1icmlkZ2UtY2hldnJvblwiKTtcclxuICAgICAgc2V0SWNvbihjaGV2cm9uLCBcImNoZXZyb24tcmlnaHRcIik7XHJcbiAgICAgIGdyb3VwSGVhZGVyLmNyZWF0ZVNwYW4oeyB0ZXh0OiBncm91cERlZi5sYWJlbCB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwQm9keSA9IGdyb3VwRWwuY3JlYXRlRGl2KFwiY2xhdWRlLWJyaWRnZS1ncm91cC1ib2R5XCIpO1xyXG4gICAgICBncm91cEJvZHkuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAvLyBUb2dnbGUgY29sbGFwc2VcclxuICAgICAgZ3JvdXBIZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBncm91cEJvZHkudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwgIWdyb3VwQm9keS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKSk7XHJcbiAgICAgICAgc2V0SWNvbihcclxuICAgICAgICAgIGNoZXZyb24sXHJcbiAgICAgICAgICBncm91cEJvZHkuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIikgPyBcImNoZXZyb24tcmlnaHRcIiA6IFwiY2hldnJvbi1kb3duXCJcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgY21kIG9mIGdyb3VwQ21kcykge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGdyb3VwQm9keS5jcmVhdGVEaXYoXCJjbGF1ZGUtYnJpZGdlLWNtZC1idG5cIik7XHJcbiAgICAgICAgY29uc3QgaWNvbkVsID0gYnRuLmNyZWF0ZVNwYW4oXCJjbGF1ZGUtYnJpZGdlLWNtZC1pY29uXCIpO1xyXG4gICAgICAgIHNldEljb24oaWNvbkVsLCBjbWQuaWNvbik7XHJcbiAgICAgICAgYnRuLmNyZWF0ZVNwYW4oeyB0ZXh0OiBjbWQubmFtZSB9KTtcclxuXHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJ1bkNvbW1hbmQoY21kKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDilIDilIAgTkxNIFNlY3Rpb24g4pSA4pSAXHJcbiAgICBpZiAodGhpcy5wbHVnaW4ubmxtQ29uZmlnLm5vdGVib29rcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IG5sbUdyb3VwID0gY29udGFpbmVyLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtZ3JvdXBcIik7XHJcbiAgICAgIGNvbnN0IG5sbUhlYWRlciA9IG5sbUdyb3VwLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtZ3JvdXAtaGVhZGVyXCIpO1xyXG4gICAgICBjb25zdCBubG1DaGV2cm9uID0gbmxtSGVhZGVyLmNyZWF0ZVNwYW4oXCJjbGF1ZGUtYnJpZGdlLWNoZXZyb25cIik7XHJcbiAgICAgIHNldEljb24obmxtQ2hldnJvbiwgXCJjaGV2cm9uLXJpZ2h0XCIpO1xyXG4gICAgICBubG1IZWFkZXIuY3JlYXRlU3Bhbih7IHRleHQ6IFwiTkxNIE5vdGVib29rc1wiIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmxtQm9keSA9IG5sbUdyb3VwLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtZ3JvdXAtYm9keVwiKTtcclxuICAgICAgbmxtQm9keS5hZGRDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgIG5sbUhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIG5sbUJvZHkudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwgIW5sbUJvZHkuaGFzQ2xhc3MoXCJjb2xsYXBzZWRcIikpO1xyXG4gICAgICAgIHNldEljb24oXHJcbiAgICAgICAgICBubG1DaGV2cm9uLFxyXG4gICAgICAgICAgbmxtQm9keS5oYXNDbGFzcyhcImNvbGxhcHNlZFwiKSA/IFwiY2hldnJvbi1yaWdodFwiIDogXCJjaGV2cm9uLWRvd25cIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgbmxtQnRuID0gbmxtQm9keS5jcmVhdGVEaXYoXCJjbGF1ZGUtYnJpZGdlLWNtZC1idG5cIik7XHJcbiAgICAgIGNvbnN0IG5sbUljb24gPSBubG1CdG4uY3JlYXRlU3BhbihcImNsYXVkZS1icmlkZ2UtY21kLWljb25cIik7XHJcbiAgICAgIHNldEljb24obmxtSWNvbiwgXCJtZXNzYWdlLXNxdWFyZVwiKTtcclxuICAgICAgbmxtQnRuLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIlF1ZXJ5IE5vdGVib29rXCIgfSk7XHJcbiAgICAgIG5sbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5vcGVuTmxtTW9kYWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvZ3Jlc3MgYXJlYSAoc2hvd3MgY3VycmVudCBzdGVwKVxyXG4gICAgdGhpcy5wcm9ncmVzc0VsID0gY29udGFpbmVyLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtcHJvZ3Jlc3NcIik7XHJcblxyXG4gICAgLy8gT3V0cHV0IGRpdmlkZXJcclxuICAgIGNvbnRhaW5lci5jcmVhdGVEaXYoXCJjbGF1ZGUtYnJpZGdlLWRpdmlkZXJcIikuY3JlYXRlU3Bhbih7XHJcbiAgICAgIHRleHQ6IFwiT3V0cHV0XCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPdXRwdXQgcGFuZVxyXG4gICAgdGhpcy5vdXRwdXRFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoXCJjbGF1ZGUtYnJpZGdlLW91dHB1dFwiKTtcclxuICAgIHRoaXMub3V0cHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5vdXRwdXRFbCkgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSA9IHRoaXMub3V0cHV0RWw7XHJcbiAgICAgIC8vIElmIHVzZXIgc2Nyb2xsZWQgdXAgbW9yZSB0aGFuIDUwcHggZnJvbSBib3R0b20sIHBhdXNlIGF1dG8tc2Nyb2xsXHJcbiAgICAgIHRoaXMuYXV0b1Njcm9sbCA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIGNsaWVudEhlaWdodCA8IDUwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWN0aW9uIGJhclxyXG4gICAgdGhpcy5hY3Rpb25CYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KFwiY2xhdWRlLWJyaWRnZS1hY3Rpb25zXCIpO1xyXG4gICAgdGhpcy5yZW5kZXJBY3Rpb25CYXIoZmFsc2UpO1xyXG5cclxuICAgIC8vIFdpcmUgdXAgcnVubmVyIGV2ZW50c1xyXG4gICAgdGhpcy5wbHVnaW4ucnVubmVyLm9uKFwicHJvZ3Jlc3NcIiwgKHN0ZXA6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLnNldFByb2dyZXNzKHN0ZXApO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsdWdpbi5ydW5uZXIub24oXCJvdXRwdXRcIiwgKGNodW5rOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5hcHBlbmRPdXRwdXQoY2h1bmspO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnBsdWdpbi5ydW5uZXIub24oXCJyZXN1bHRcIiwgKHRleHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAvLyBSZXBsYWNlIHN0cmVhbWluZyBvdXRwdXQgd2l0aCBmaW5hbCByZXN1bHRcclxuICAgICAgaWYgKHRoaXMub3V0cHV0RWwpIHtcclxuICAgICAgICB0aGlzLm91dHB1dEVsLmVtcHR5KCk7XHJcbiAgICAgICAgdGhpcy5vdXRwdXRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXJhd1wiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFwcGVuZE91dHB1dCh0ZXh0KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVnaW4ucnVubmVyLm9uKFwiZXJyb3JcIiwgKG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoYEVycm9yOiAke21zZ31gKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVnaW4ucnVubmVyLm9uKFwiZG9uZVwiLCAoX2NvZGU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNldFJ1bm5pbmdTdGF0ZShmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBXaXJlIHVwIE5MTSBydW5uZXIgZXZlbnRzIChzYW1lIG91dHB1dCBwYW5lKVxyXG4gICAgLy8gTkxNIHN1cHBvcnRzIGFwcGVuZCBtb2RlOiBmb2xsb3ctdXAgcXVlcmllcyBhcHBlbmQgdG8gZXhpc3Rpbmcgb3V0cHV0XHJcbiAgICB0aGlzLnBsdWdpbi5ubG1SdW5uZXIub24oXCJwcm9ncmVzc1wiLCAoc3RlcDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0UHJvZ3Jlc3Moc3RlcCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGx1Z2luLm5sbVJ1bm5lci5vbihcIm91dHB1dFwiLCAoY2h1bms6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmFwcGVuZE91dHB1dChjaHVuayk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucGx1Z2luLm5sbVJ1bm5lci5vbihcInJlc3VsdFwiLCAodGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm5sbUFjY3VtdWxhdGVkT3V0cHV0KSB7XHJcbiAgICAgICAgLy8gQXBwZW5kIG1vZGU6IHByZXBlbmQgYWNjdW11bGF0ZWQgY29udmVyc2F0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMub3V0cHV0RWwpIHtcclxuICAgICAgICAgIHRoaXMub3V0cHV0RWwuZW1wdHkoKTtcclxuICAgICAgICAgIHRoaXMub3V0cHV0RWwucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1yYXdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwZW5kT3V0cHV0KHRoaXMubmxtQWNjdW11bGF0ZWRPdXRwdXQgKyB0ZXh0KTtcclxuICAgICAgICB0aGlzLm5sbUFjY3VtdWxhdGVkT3V0cHV0ID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGcmVzaCBxdWVyeTogcmVwbGFjZSBvdXRwdXRcclxuICAgICAgICBpZiAodGhpcy5vdXRwdXRFbCkge1xyXG4gICAgICAgICAgdGhpcy5vdXRwdXRFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgdGhpcy5vdXRwdXRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXJhd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHBlbmRPdXRwdXQodGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVnaW4ubmxtUnVubmVyLm9uKFwiZXJyb3JcIiwgKG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0UHJvZ3Jlc3MoYEVycm9yOiAke21zZ31gKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wbHVnaW4ubmxtUnVubmVyLm9uKFwiZG9uZVwiLCAoX2NvZGU6IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnNldFJ1bm5pbmdTdGF0ZShmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnBsdWdpbi5ydW5uZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnBsdWdpbi5ubG1SdW5uZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5ObG1Nb2RhbCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucGx1Z2luLm5sbUNvbmZpZztcclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE5sbU1vZGFsKFxyXG4gICAgICB0aGlzLmFwcCxcclxuICAgICAgY29uZmlnLm5vdGVib29rcyxcclxuICAgICAgY29uZmlnLmNvbW1hbmRzLFxyXG4gICAgICAocmVzdWx0OiBObG1Nb2RhbFJlc3VsdCB8IG51bGwpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBvdXRwdXRcclxuICAgICAgICBpZiAodGhpcy5vdXRwdXRFbCkge1xyXG4gICAgICAgICAgdGhpcy5vdXRwdXRFbC5lbXB0eSgpO1xyXG4gICAgICAgICAgdGhpcy5vdXRwdXRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXJhd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NFbCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0VsLmVtcHR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0b1Njcm9sbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdENvbW1hbmRJZCA9IGBubG0tJHtyZXN1bHQuY29tbWFuZH1gO1xyXG4gICAgICAgIHRoaXMubGFzdENvbW1hbmROYW1lID0gYE5MTSAke3Jlc3VsdC5jb21tYW5kfWA7XHJcbiAgICAgICAgdGhpcy5sYXN0U2F2ZVRhcmdldCA9IFwiX21ldGEvXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhdWx0UGF0aCA9IHRoaXMucGx1Z2luLmdldFZhdWx0UGF0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBsdWdpbi5ubG1SdW5uZXIucnVuUXVlcnkoXHJcbiAgICAgICAgICByZXN1bHQuY29tbWFuZCxcclxuICAgICAgICAgIHJlc3VsdC5ub3RlYm9va0lkcyxcclxuICAgICAgICAgIHJlc3VsdC5xdWVyeSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmxtUGF0aDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubmxtUGF0aCxcclxuICAgICAgICAgICAgY3dkOiB0aGlzLnBsdWdpbi5zZXR0aW5ncy52YXVsdEFzV29ya2RpciA/IHZhdWx0UGF0aCA6IHByb2Nlc3MuY3dkKCksXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMucGx1Z2luLnNldHRpbmdzLnRpbWVvdXQsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIG1vZGFsLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcnVuQ29tbWFuZChjbWQ6IENvbW1hbmREZWYpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGxldCBza2lsbEFyZ3MgPSBjbWQuc2tpbGxBcmdzIHx8IFwiXCI7XHJcblxyXG4gICAgLy8gSGFuZGxlIHByb21wdEZvckFyZ3NcclxuICAgIGlmIChjbWQucHJvbXB0Rm9yQXJncykge1xyXG4gICAgICBjb25zdCB1c2VySW5wdXQgPSBhd2FpdCB0aGlzLnByb21wdEZvcklucHV0KFxyXG4gICAgICAgIGNtZC5uYW1lLFxyXG4gICAgICAgIGNtZC5hcmdzUGxhY2Vob2xkZXIgfHwgXCJFbnRlciBhcmd1bWVudHMuLi5cIlxyXG4gICAgICApO1xyXG4gICAgICBpZiAodXNlcklucHV0ID09PSBudWxsKSByZXR1cm47IC8vIFVzZXIgY2FuY2VsbGVkXHJcbiAgICAgIHNraWxsQXJncyA9IHNraWxsQXJncyA/IGAke3NraWxsQXJnc30gJHt1c2VySW5wdXR9YCA6IHVzZXJJbnB1dDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RDb21tYW5kSWQgPSBjbWQuaWQ7XHJcbiAgICB0aGlzLmxhc3RDb21tYW5kTmFtZSA9IGNtZC5uYW1lO1xyXG4gICAgdGhpcy5sYXN0U2F2ZVRhcmdldCA9IGNtZC5zYXZlVGFyZ2V0O1xyXG5cclxuICAgIC8vIENsZWFyIG91dHB1dCBhbmQgcHJvZ3Jlc3NcclxuICAgIGlmICh0aGlzLm91dHB1dEVsKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0RWwuZW1wdHkoKTtcclxuICAgICAgdGhpcy5vdXRwdXRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXJhd1wiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb2dyZXNzRWwpIHtcclxuICAgICAgdGhpcy5wcm9ncmVzc0VsLmVtcHR5KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmF1dG9TY3JvbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5zZXRSdW5uaW5nU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcclxuICAgIGNvbnN0IHZhdWx0UGF0aCA9ICh0aGlzLmFwcC52YXVsdC5hZGFwdGVyIGFzIGFueSkuYmFzZVBhdGggfHwgXCJcIjtcclxuXHJcbiAgICB0aGlzLnBsdWdpbi5ydW5uZXIucnVuU2tpbGwoY21kLnNraWxsRmlsZSwgc2tpbGxBcmdzLCB7XHJcbiAgICAgIGNsYXVkZVBhdGg6IHNldHRpbmdzLmNsYXVkZVBhdGgsXHJcbiAgICAgIGN3ZDogc2V0dGluZ3MudmF1bHRBc1dvcmtkaXIgPyB2YXVsdFBhdGggOiBwcm9jZXNzLmN3ZCgpLFxyXG4gICAgICB0aW1lb3V0OiBjbWQudGltZW91dCB8fCBzZXR0aW5ncy50aW1lb3V0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb21wdEZvcklucHV0KFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmdcclxuICApOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IG5ldyBBcmdzSW5wdXRNb2RhbChcclxuICAgICAgICB0aGlzLmFwcCxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBwbGFjZWhvbGRlcixcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UHJvZ3Jlc3Moc3RlcDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucHJvZ3Jlc3NFbCkgcmV0dXJuO1xyXG4gICAgdGhpcy5wcm9ncmVzc0VsLmVtcHR5KCk7XHJcbiAgICBjb25zdCBsaW5lID0gdGhpcy5wcm9ncmVzc0VsLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtcHJvZ3Jlc3MtbGluZVwiKTtcclxuICAgIGlmIChzdGVwLnN0YXJ0c1dpdGgoXCJEb25lXCIpKSB7XHJcbiAgICAgIGxpbmUuY3JlYXRlU3Bhbih7IHRleHQ6IFwi4pyFIFwiLCBjbHM6IFwiY2xhdWRlLWJyaWRnZS1wcm9ncmVzcy1pY29uXCIgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHN0ZXAuc3RhcnRzV2l0aChcIkVycm9yXCIpKSB7XHJcbiAgICAgIGxpbmUuY3JlYXRlU3Bhbih7IHRleHQ6IFwi4p2MIFwiLCBjbHM6IFwiY2xhdWRlLWJyaWRnZS1wcm9ncmVzcy1pY29uXCIgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaW5lLmNyZWF0ZVNwYW4oeyB0ZXh0OiBcIuKPsyBcIiwgY2xzOiBcImNsYXVkZS1icmlkZ2UtcHJvZ3Jlc3MtaWNvblwiIH0pO1xyXG4gICAgfVxyXG4gICAgbGluZS5jcmVhdGVTcGFuKHsgdGV4dDogc3RlcCB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXBwZW5kT3V0cHV0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm91dHB1dEVsKSByZXR1cm47XHJcblxyXG4gICAgLy8gQXBwZW5kIHJhdyB0ZXh0LCB0aGVuIHJlLXJlbmRlciBhcyBtYXJrZG93blxyXG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLm91dHB1dEVsLmdldEF0dHJpYnV0ZShcImRhdGEtcmF3XCIpIHx8IFwiXCI7XHJcbiAgICBjb25zdCB1cGRhdGVkID0gZXhpc3RpbmcgKyB0ZXh0O1xyXG4gICAgdGhpcy5vdXRwdXRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJhd1wiLCB1cGRhdGVkKTtcclxuXHJcbiAgICAvLyBSZS1yZW5kZXIgbWFya2Rvd25cclxuICAgIHRoaXMub3V0cHV0RWwuZW1wdHkoKTtcclxuICAgIE1hcmtkb3duUmVuZGVyZXIucmVuZGVyKFxyXG4gICAgICB0aGlzLmFwcCxcclxuICAgICAgdXBkYXRlZCxcclxuICAgICAgdGhpcy5vdXRwdXRFbCxcclxuICAgICAgXCJcIixcclxuICAgICAgdGhpcy5wbHVnaW5cclxuICAgICk7XHJcblxyXG4gICAgLy8gQXR0YWNoIGNsaWNrIGhhbmRsZXJzIHRvIE5MTSBmb2xsb3ctdXAgc3VnZ2VzdGlvbiBsaW5rc1xyXG4gICAgdGhpcy5hdHRhY2hObG1Gb2xsb3dVcEhhbmRsZXJzKCk7XHJcblxyXG4gICAgLy8gQXV0by1zY3JvbGxcclxuICAgIGlmICh0aGlzLmF1dG9TY3JvbGwpIHtcclxuICAgICAgdGhpcy5vdXRwdXRFbC5zY3JvbGxUb3AgPSB0aGlzLm91dHB1dEVsLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgYWxsIC5ubG0tZm9sbG93dXAgbGlua3MgaW4gdGhlIG91dHB1dCBhbmQgYXR0YWNoIGNsaWNrIGhhbmRsZXJzLlxyXG4gICAqIENsaWNraW5nIG9wZW5zIE5sbU1vZGFsIHByZS1maWxsZWQgd2l0aCB0aGUgc3VnZ2VzdGlvbiBxdWVyeS5cclxuICAgKi9cclxuICBwcml2YXRlIGF0dGFjaE5sbUZvbGxvd1VwSGFuZGxlcnMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3V0cHV0RWwpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsaW5rcyA9IHRoaXMub3V0cHV0RWwucXVlcnlTZWxlY3RvckFsbChcImEubmxtLWZvbGxvd3VwXCIpO1xyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICBjb25zdCBlbCA9IGxpbmsgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIC8vIFN0eWxlIGFzIGNsaWNrYWJsZSBidXR0b25cclxuICAgICAgZWwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjRweCA4cHhcIjtcclxuICAgICAgZWwuc3R5bGUubWFyZ2luID0gXCI0cHggMFwiO1xyXG4gICAgICBlbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjRweFwiO1xyXG4gICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcilcIjtcclxuICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSlcIjtcclxuICAgICAgZWwuc3R5bGUuY29sb3IgPSBcInZhcigtLXRleHQtbm9ybWFsKVwiO1xyXG4gICAgICBlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBlbC5zdHlsZS5mb250U2l6ZSA9IFwiMC45ZW1cIjtcclxuXHJcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBsaW5rIGJlaGF2aW9yXHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5sbS1xdWVyeVwiKSB8fCBcIlwiO1xyXG4gICAgICAgIGNvbnN0IG5vdGVib29rcyA9IChlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5sbS1ub3RlYm9va3NcIikgfHwgXCJcIikuc3BsaXQoXCIsXCIpLmZpbHRlcihuID0+IG4pO1xyXG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5sbS1jb21tYW5kXCIpIHx8IFwicXVlcnlcIjtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuTmxtTW9kYWxQcmVmaWxsZWQoe1xyXG4gICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICBjb21tYW5kLFxyXG4gICAgICAgICAgbm90ZWJvb2tJZHM6IG5vdGVib29rcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gTkxNIG1vZGFsIHByZS1maWxsZWQgd2l0aCBhIGZvbGxvdy11cCBzdWdnZXN0aW9uLlxyXG4gICAqIE5ldyByZXN1bHRzIGFyZSBBUFBFTkRFRCB0byBleGlzdGluZyBvdXRwdXQgKGNvbnZlcnNhdGlvbiBtb2RlKS5cclxuICAgKi9cclxuICBwcml2YXRlIG9wZW5ObG1Nb2RhbFByZWZpbGxlZChwcmVmaWxsOiBObG1Nb2RhbFByZWZpbGwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucGx1Z2luLm5sbUNvbmZpZztcclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE5sbU1vZGFsKFxyXG4gICAgICB0aGlzLmFwcCxcclxuICAgICAgY29uZmlnLm5vdGVib29rcyxcclxuICAgICAgY29uZmlnLmNvbW1hbmRzLFxyXG4gICAgICAocmVzdWx0OiBObG1Nb2RhbFJlc3VsdCB8IG51bGwpID0+IHtcclxuICAgICAgICBpZiAoIXJlc3VsdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTYXZlIGN1cnJlbnQgb3V0cHV0IGFzIGFjY3VtdWxhdGVkIChjb252ZXJzYXRpb24gY29udGludWVzKVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgb2xkIGZvbGxvdy11cCBzdWdnZXN0aW9ucyBzZWN0aW9uIGJlZm9yZSBhcHBlbmRpbmdcclxuICAgICAgICBpZiAodGhpcy5vdXRwdXRFbCkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFJhdyA9IHRoaXMub3V0cHV0RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yYXdcIikgfHwgXCJcIjtcclxuICAgICAgICAgIC8vIFN0cmlwIHRoZSBvbGQgXCJH4bujaSDDvSB0aeG6v3AgdGhlb1wiIHNlY3Rpb24gKGV2ZXJ5dGhpbmcgYWZ0ZXIgbGFzdCAtLS0pXHJcbiAgICAgICAgICBjb25zdCBsYXN0U2VwSWR4ID0gY3VycmVudFJhdy5sYXN0SW5kZXhPZihcIlxcbi0tLVxcblwiKTtcclxuICAgICAgICAgIGNvbnN0IGhhc0ZvbGxvd1VwcyA9IGN1cnJlbnRSYXcuaW5jbHVkZXMoXCJubG0tZm9sbG93dXBcIik7XHJcbiAgICAgICAgICBpZiAobGFzdFNlcElkeCA+IDAgJiYgaGFzRm9sbG93VXBzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmxtQWNjdW11bGF0ZWRPdXRwdXQgPSBjdXJyZW50UmF3LnNsaWNlKDAsIGxhc3RTZXBJZHgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ubG1BY2N1bXVsYXRlZE91dHB1dCA9IGN1cnJlbnRSYXc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBTZXQgYSBzZXBhcmF0b3IgZm9yIHRoZSBuZXcgcXVlcnlcclxuICAgICAgICAgIHRoaXMubmxtQWNjdW11bGF0ZWRPdXRwdXQgKz0gXCJcXG5cXG4tLS1cXG5cXG5cIjtcclxuICAgICAgICAgIHRoaXMub3V0cHV0RWwuc2V0QXR0cmlidXRlKFwiZGF0YS1yYXdcIiwgdGhpcy5ubG1BY2N1bXVsYXRlZE91dHB1dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF1dG9TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2V0UnVubmluZ1N0YXRlKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RDb21tYW5kSWQgPSBgbmxtLSR7cmVzdWx0LmNvbW1hbmR9YDtcclxuICAgICAgICB0aGlzLmxhc3RDb21tYW5kTmFtZSA9IGBOTE0gJHtyZXN1bHQuY29tbWFuZH1gO1xyXG4gICAgICAgIHRoaXMubGFzdFNhdmVUYXJnZXQgPSBcIl9tZXRhL1wiO1xyXG5cclxuICAgICAgICBjb25zdCB2YXVsdFBhdGggPSB0aGlzLnBsdWdpbi5nZXRWYXVsdFBhdGgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbHVnaW4ubmxtUnVubmVyLnJ1blF1ZXJ5KFxyXG4gICAgICAgICAgcmVzdWx0LmNvbW1hbmQsXHJcbiAgICAgICAgICByZXN1bHQubm90ZWJvb2tJZHMsXHJcbiAgICAgICAgICByZXN1bHQucXVlcnksXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5sbVBhdGg6IHRoaXMucGx1Z2luLnNldHRpbmdzLm5sbVBhdGgsXHJcbiAgICAgICAgICAgIGN3ZDogdGhpcy5wbHVnaW4uc2V0dGluZ3MudmF1bHRBc1dvcmtkaXIgPyB2YXVsdFBhdGggOiBwcm9jZXNzLmN3ZCgpLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aW1lb3V0LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZWZpbGxcclxuICAgICk7XHJcbiAgICBtb2RhbC5vcGVuKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJ1bm5pbmdTdGF0ZShydW5uaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zdGF0dXNEb3QpIHtcclxuICAgICAgdGhpcy5zdGF0dXNEb3QucmVtb3ZlQ2xhc3MoXCJpZGxlXCIsIFwicnVubmluZ1wiKTtcclxuICAgICAgdGhpcy5zdGF0dXNEb3QuYWRkQ2xhc3MocnVubmluZyA/IFwicnVubmluZ1wiIDogXCJpZGxlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERpbS91bmRpbSBidXR0b25zXHJcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsYXVkZS1icmlkZ2UtY21kLWJ0blwiKTtcclxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIChidG4gYXMgSFRNTEVsZW1lbnQpLnRvZ2dsZUNsYXNzKFwiZGltbWVkXCIsIHJ1bm5pbmcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJBY3Rpb25CYXIocnVubmluZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlckFjdGlvbkJhcihydW5uaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuYWN0aW9uQmFyKSByZXR1cm47XHJcbiAgICB0aGlzLmFjdGlvbkJhci5lbXB0eSgpO1xyXG5cclxuICAgIGlmIChydW5uaW5nKSB7XHJcbiAgICAgIGNvbnN0IHN0b3BCdG4gPSB0aGlzLmFjdGlvbkJhci5jcmVhdGVEaXYoXCJjbGF1ZGUtYnJpZGdlLWFjdGlvbi1idG4gc3RvcFwiKTtcclxuICAgICAgc2V0SWNvbihzdG9wQnRuLmNyZWF0ZVNwYW4oKSwgXCJzcXVhcmVcIik7XHJcbiAgICAgIHN0b3BCdG4uY3JlYXRlU3Bhbih7IHRleHQ6IFwiU3RvcFwiIH0pO1xyXG4gICAgICBzdG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4ucnVubmVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4ubmxtUnVubmVyLmFib3J0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRSdW5uaW5nU3RhdGUoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNPdXRwdXQgPVxyXG4gICAgICB0aGlzLnBsdWdpbi5ydW5uZXIuZ2V0T3V0cHV0KCkubGVuZ3RoID4gMCB8fFxyXG4gICAgICB0aGlzLnBsdWdpbi5ubG1SdW5uZXIuZ2V0T3V0cHV0KCkubGVuZ3RoID4gMDtcclxuICAgIGlmIChoYXNPdXRwdXQgJiYgIXJ1bm5pbmcpIHtcclxuICAgICAgY29uc3Qgc2F2ZUJ0biA9IHRoaXMuYWN0aW9uQmFyLmNyZWF0ZURpdihcImNsYXVkZS1icmlkZ2UtYWN0aW9uLWJ0biBzYXZlXCIpO1xyXG4gICAgICBzZXRJY29uKHNhdmVCdG4uY3JlYXRlU3BhbigpLCBcInNhdmVcIik7XHJcbiAgICAgIHNhdmVCdG4uY3JlYXRlU3Bhbih7IHRleHQ6IFwiU2F2ZSB0byBWYXVsdFwiIH0pO1xyXG4gICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW4udmF1bHRXcml0ZXIuc2F2ZSh7XHJcbiAgICAgICAgICBjb21tYW5kSWQ6IHRoaXMubGFzdENvbW1hbmRJZCxcclxuICAgICAgICAgIGNvbW1hbmROYW1lOiB0aGlzLmxhc3RDb21tYW5kTmFtZSxcclxuICAgICAgICAgIG91dHB1dDogdGhpcy5wbHVnaW4ucnVubmVyLmdldE91dHB1dCgpIHx8IHRoaXMucGx1Z2luLm5sbVJ1bm5lci5nZXRPdXRwdXQoKSxcclxuICAgICAgICAgIHNhdmVUYXJnZXQ6IHRoaXMubGFzdFNhdmVUYXJnZXQsXHJcbiAgICAgICAgICBkZWZhdWx0U2F2ZUZvbGRlcjogdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVmYXVsdFNhdmVGb2xkZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFNpbXBsZSBtb2RhbCBmb3IgY29sbGVjdGluZyBjb21tYW5kIGFyZ3VtZW50cy5cclxuICovXHJcbmNsYXNzIEFyZ3NJbnB1dE1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gIHByaXZhdGUgcmVzdWx0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIG9uU3VibWl0OiAocmVzdWx0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgdGl0bGU6IHN0cmluZztcclxuICBwcml2YXRlIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgYXBwOiBhbnksXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcclxuICAgIG9uU3VibWl0OiAocmVzdWx0OiBzdHJpbmcgfCBudWxsKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBzdXBlcihhcHApO1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xyXG4gICAgdGhpcy5vblN1Ym1pdCA9IG9uU3VibWl0O1xyXG4gIH1cclxuXHJcbiAgb25PcGVuKCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XHJcbiAgICBjb250ZW50RWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IHRoaXMudGl0bGUgfSk7XHJcblxyXG4gICAgbGV0IGlucHV0VmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIG5ldyBTZXR0aW5nKGNvbnRlbnRFbCkuc2V0TmFtZShcIkFyZ3VtZW50c1wiKS5hZGRUZXh0KCh0ZXh0KSA9PiB7XHJcbiAgICAgIHRleHQuc2V0UGxhY2Vob2xkZXIodGhpcy5wbGFjZWhvbGRlcik7XHJcbiAgICAgIHRleHQub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gU3VibWl0IG9uIEVudGVyXHJcbiAgICAgIHRleHQuaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IGlucHV0VmFsdWU7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gRm9jdXNcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0ZXh0LmlucHV0RWwuZm9jdXMoKSwgNTApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IFNldHRpbmcoY29udGVudEVsKVxyXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+IHtcclxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJ1blwiKS5zZXRDdGEoKS5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gaW5wdXRWYWx1ZTtcclxuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJDYW5jZWxcIikub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25TdWJtaXQodGhpcy5yZXN1bHQpO1xyXG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcclxuICB9XHJcbn1cclxuIl19