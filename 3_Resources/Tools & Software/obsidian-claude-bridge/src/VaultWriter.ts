import { App, Notice, normalizePath } from "obsidian";

export interface SaveOptions {
  commandId: string;
  commandName: string;
  output: string;
  saveTarget: string;
  defaultSaveFolder: string;
}

/**
 * Saves command output to the vault as a markdown note.
 */
export class VaultWriter {
  constructor(private app: App) {}

  async save(opts: SaveOptions): Promise<string | null> {
    const { commandId, commandName, output, saveTarget, defaultSaveFolder } =
      opts;

    // Save folder precedence: global override > per-command
    const folder = defaultSaveFolder || saveTarget;
    const dateStr = new Date().toISOString().slice(0, 10);

    // Build filename
    let filename = `${dateStr} Claude ${commandId}.md`;
    let filepath = normalizePath(`${folder}/${filename}`);

    // Collision handling
    let counter = 2;
    while (this.app.vault.getAbstractFileByPath(filepath)) {
      filename = `${dateStr} Claude ${commandId} (${counter}).md`;
      filepath = normalizePath(`${folder}/${filename}`);
      counter++;
    }

    // Build content with frontmatter
    const content = [
      "---",
      `created: ${dateStr}`,
      "type: claude-output",
      "source: obsidian-claude-bridge",
      `command: ${commandId}`,
      "---",
      "",
      `# ${commandName} — ${dateStr}`,
      "",
      output,
    ].join("\n");

    try {
      // Ensure folder exists
      const folderNorm = normalizePath(folder);
      if (!this.app.vault.getAbstractFileByPath(folderNorm)) {
        await this.app.vault.createFolder(folderNorm);
      }

      const file = await this.app.vault.create(filepath, content);
      // Open the new note
      await this.app.workspace.getLeaf(true).openFile(file);
      new Notice(`Saved to ${filepath}`);
      return filepath;
    } catch (err) {
      new Notice(`Failed to save: ${err}`);
      return null;
    }
  }
}
