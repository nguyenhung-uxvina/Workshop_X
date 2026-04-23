import { Notice, normalizePath } from "obsidian";
/**
 * Saves command output to the vault as a markdown note.
 */
export class VaultWriter {
    constructor(app) {
        this.app = app;
    }
    async save(opts) {
        const { commandId, commandName, output, saveTarget, defaultSaveFolder } = opts;
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
        }
        catch (err) {
            new Notice(`Failed to save: ${err}`);
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmF1bHRXcml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWYXVsdFdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQU8sTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVV0RDs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBQ3RCLFlBQW9CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQUcsQ0FBQztJQUVoQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQWlCO1FBQzFCLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsR0FDckUsSUFBSSxDQUFDO1FBRVAsd0RBQXdEO1FBQ3hELE1BQU0sTUFBTSxHQUFHLGlCQUFpQixJQUFJLFVBQVUsQ0FBQztRQUMvQyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEQsaUJBQWlCO1FBQ2pCLElBQUksUUFBUSxHQUFHLEdBQUcsT0FBTyxXQUFXLFNBQVMsS0FBSyxDQUFDO1FBQ25ELElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXRELHFCQUFxQjtRQUNyQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3RELFFBQVEsR0FBRyxHQUFHLE9BQU8sV0FBVyxTQUFTLEtBQUssT0FBTyxNQUFNLENBQUM7WUFDNUQsUUFBUSxHQUFHLGFBQWEsQ0FBQyxHQUFHLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVELGlDQUFpQztRQUNqQyxNQUFNLE9BQU8sR0FBRztZQUNkLEtBQUs7WUFDTCxZQUFZLE9BQU8sRUFBRTtZQUNyQixxQkFBcUI7WUFDckIsZ0NBQWdDO1lBQ2hDLFlBQVksU0FBUyxFQUFFO1lBQ3ZCLEtBQUs7WUFDTCxFQUFFO1lBQ0YsS0FBSyxXQUFXLE1BQU0sT0FBTyxFQUFFO1lBQy9CLEVBQUU7WUFDRixNQUFNO1NBQ1AsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUM7WUFDSCx1QkFBdUI7WUFDdkIsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN0RCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVELG9CQUFvQjtZQUNwQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxNQUFNLENBQUMsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsSUFBSSxNQUFNLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwLCBOb3RpY2UsIG5vcm1hbGl6ZVBhdGggfSBmcm9tIFwib2JzaWRpYW5cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZU9wdGlvbnMge1xyXG4gIGNvbW1hbmRJZDogc3RyaW5nO1xyXG4gIGNvbW1hbmROYW1lOiBzdHJpbmc7XHJcbiAgb3V0cHV0OiBzdHJpbmc7XHJcbiAgc2F2ZVRhcmdldDogc3RyaW5nO1xyXG4gIGRlZmF1bHRTYXZlRm9sZGVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTYXZlcyBjb21tYW5kIG91dHB1dCB0byB0aGUgdmF1bHQgYXMgYSBtYXJrZG93biBub3RlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhdWx0V3JpdGVyIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogQXBwKSB7fVxyXG5cclxuICBhc3luYyBzYXZlKG9wdHM6IFNhdmVPcHRpb25zKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICBjb25zdCB7IGNvbW1hbmRJZCwgY29tbWFuZE5hbWUsIG91dHB1dCwgc2F2ZVRhcmdldCwgZGVmYXVsdFNhdmVGb2xkZXIgfSA9XHJcbiAgICAgIG9wdHM7XHJcblxyXG4gICAgLy8gU2F2ZSBmb2xkZXIgcHJlY2VkZW5jZTogZ2xvYmFsIG92ZXJyaWRlID4gcGVyLWNvbW1hbmRcclxuICAgIGNvbnN0IGZvbGRlciA9IGRlZmF1bHRTYXZlRm9sZGVyIHx8IHNhdmVUYXJnZXQ7XHJcbiAgICBjb25zdCBkYXRlU3RyID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAvLyBCdWlsZCBmaWxlbmFtZVxyXG4gICAgbGV0IGZpbGVuYW1lID0gYCR7ZGF0ZVN0cn0gQ2xhdWRlICR7Y29tbWFuZElkfS5tZGA7XHJcbiAgICBsZXQgZmlsZXBhdGggPSBub3JtYWxpemVQYXRoKGAke2ZvbGRlcn0vJHtmaWxlbmFtZX1gKTtcclxuXHJcbiAgICAvLyBDb2xsaXNpb24gaGFuZGxpbmdcclxuICAgIGxldCBjb3VudGVyID0gMjtcclxuICAgIHdoaWxlICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZXBhdGgpKSB7XHJcbiAgICAgIGZpbGVuYW1lID0gYCR7ZGF0ZVN0cn0gQ2xhdWRlICR7Y29tbWFuZElkfSAoJHtjb3VudGVyfSkubWRgO1xyXG4gICAgICBmaWxlcGF0aCA9IG5vcm1hbGl6ZVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGVuYW1lfWApO1xyXG4gICAgICBjb3VudGVyKys7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQnVpbGQgY29udGVudCB3aXRoIGZyb250bWF0dGVyXHJcbiAgICBjb25zdCBjb250ZW50ID0gW1xyXG4gICAgICBcIi0tLVwiLFxyXG4gICAgICBgY3JlYXRlZDogJHtkYXRlU3RyfWAsXHJcbiAgICAgIFwidHlwZTogY2xhdWRlLW91dHB1dFwiLFxyXG4gICAgICBcInNvdXJjZTogb2JzaWRpYW4tY2xhdWRlLWJyaWRnZVwiLFxyXG4gICAgICBgY29tbWFuZDogJHtjb21tYW5kSWR9YCxcclxuICAgICAgXCItLS1cIixcclxuICAgICAgXCJcIixcclxuICAgICAgYCMgJHtjb21tYW5kTmFtZX0g4oCUICR7ZGF0ZVN0cn1gLFxyXG4gICAgICBcIlwiLFxyXG4gICAgICBvdXRwdXQsXHJcbiAgICBdLmpvaW4oXCJcXG5cIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcclxuICAgICAgY29uc3QgZm9sZGVyTm9ybSA9IG5vcm1hbGl6ZVBhdGgoZm9sZGVyKTtcclxuICAgICAgaWYgKCF0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyTm9ybSkpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyTm9ybSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZXBhdGgsIGNvbnRlbnQpO1xyXG4gICAgICAvLyBPcGVuIHRoZSBuZXcgbm90ZVxyXG4gICAgICBhd2FpdCB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhZih0cnVlKS5vcGVuRmlsZShmaWxlKTtcclxuICAgICAgbmV3IE5vdGljZShgU2F2ZWQgdG8gJHtmaWxlcGF0aH1gKTtcclxuICAgICAgcmV0dXJuIGZpbGVwYXRoO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIG5ldyBOb3RpY2UoYEZhaWxlZCB0byBzYXZlOiAke2Vycn1gKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==