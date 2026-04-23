import { spawn } from "child_process";
import { EventEmitter } from "events";
import { readFileSync } from "fs";
import { join } from "path";
// tree-kill for Windows process tree cleanup
import treeKill from "tree-kill";
/**
 * Resolves the skill commands directory (~/.claude/commands/).
 */
function getSkillsDir() {
    const home = process.env.HOME || process.env.USERPROFILE || "";
    return join(home, ".claude", "commands");
}
/**
 * Reads a skill file and returns its content as a prompt string.
 */
export function readSkillFile(filename) {
    const skillsDir = getSkillsDir();
    // Try direct path first
    try {
        return readFileSync(join(skillsDir, filename), "utf-8");
    }
    catch {
        // Not found directly
    }
    // Try subdirectory pattern: command-name/SKILL.md
    const baseName = filename.replace(/\.md$/, "");
    try {
        return readFileSync(join(skillsDir, baseName, "SKILL.md"), "utf-8");
    }
    catch {
        // Not found
    }
    return null;
}
/**
 * Parse a stream-json line from claude CLI and extract display info.
 */
function parseStreamEvent(line) {
    let data;
    try {
        data = JSON.parse(line);
    }
    catch {
        return null;
    }
    // Tool use → progress indicator
    if (data.type === "assistant" && data.message?.content) {
        const content = data.message.content;
        if (Array.isArray(content)) {
            for (const block of content) {
                if (block.type === "tool_use") {
                    const toolName = block.name || "unknown";
                    // Friendly tool names
                    const friendly = {
                        Glob: "Searching files",
                        Grep: "Searching content",
                        Read: "Reading file",
                        Edit: "Editing file",
                        Write: "Writing file",
                        Bash: "Running command",
                        WebSearch: "Searching web",
                        WebFetch: "Fetching page",
                        Agent: "Running sub-agent",
                        Skill: "Loading skill",
                        TodoWrite: "Updating tasks",
                    };
                    const label = friendly[toolName] || `Using ${toolName}`;
                    return { type: "progress", content: label };
                }
                if (block.type === "text" && block.text) {
                    return { type: "text", content: block.text };
                }
            }
        }
    }
    // Final result
    if (data.type === "result") {
        const resultText = data.result || "";
        const duration = data.duration_ms
            ? `${(data.duration_ms / 1000).toFixed(1)}s`
            : "";
        const cost = data.total_cost_usd
            ? `$${data.total_cost_usd.toFixed(3)}`
            : "";
        return {
            type: "result",
            content: resultText || `Done${duration ? ` (${duration})` : ""}${cost ? ` | ${cost}` : ""}`,
        };
    }
    return null;
}
/**
 * Spawns the claude CLI as a child process and streams output.
 * Uses stream-json format for real-time progress events.
 * One command at a time.
 */
export class CommandRunner extends EventEmitter {
    constructor() {
        super(...arguments);
        this.process = null;
        this.timeoutHandle = null;
        this.output = "";
        this.resultText = "";
        this.lineBuffer = "";
        this.startTime = 0;
    }
    get isRunning() {
        return this.process !== null;
    }
    getOutput() {
        return this.resultText || this.output;
    }
    /**
     * Run a command by reading the skill file and passing its content
     * as the prompt to `claude -p`.
     */
    runSkill(skillFile, skillArgs, config) {
        const content = readSkillFile(skillFile);
        if (!content) {
            this.emit("error", `Skill file not found: ${skillFile}\nLooked in ~/.claude/commands/`);
            this.emit("done", 1);
            return;
        }
        let prompt = content.trim();
        if (skillArgs) {
            prompt += `\n\nArguments: ${skillArgs}`;
        }
        this.run(prompt, config);
    }
    /**
     * Run claude -p with a raw prompt string.
     * Uses --output-format stream-json --verbose for progress tracking.
     */
    run(prompt, config) {
        this.abort();
        this.output = "";
        this.resultText = "";
        this.lineBuffer = "";
        this.startTime = Date.now();
        const claudePath = config.claudePath || "claude";
        // stream-json + verbose gives us tool calls, text chunks, and result
        this.process = spawn(claudePath, [
            "-p",
            "--permission-mode",
            "acceptEdits",
            "--output-format",
            "stream-json",
            "--verbose",
        ], {
            cwd: config.cwd,
            shell: true,
            env: { ...process.env, NO_COLOR: "1" },
        });
        // Write prompt to stdin
        if (this.process.stdin) {
            this.process.stdin.write(prompt, "utf-8");
            this.process.stdin.end();
        }
        // Emit initial progress
        this.emit("progress", "Starting...");
        // Parse stream-json lines from stdout
        this.process.stdout?.on("data", (chunk) => {
            const text = chunk.toString("utf-8");
            this.lineBuffer += text;
            // Process complete lines
            const lines = this.lineBuffer.split("\n");
            // Keep the last incomplete line in the buffer
            this.lineBuffer = lines.pop() || "";
            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed)
                    continue;
                const event = parseStreamEvent(trimmed);
                if (!event)
                    continue;
                switch (event.type) {
                    case "progress":
                        this.emit("progress", event.content);
                        break;
                    case "text":
                        this.output += event.content;
                        this.emit("output", event.content);
                        break;
                    case "result":
                        // If result has the actual text, use that
                        if (event.content && !event.content.startsWith("Done")) {
                            this.resultText = event.content;
                            this.emit("result", event.content);
                        }
                        else {
                            // Use accumulated text output as the result
                            this.resultText = this.output;
                        }
                        const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);
                        this.emit("progress", `Done (${elapsed}s)`);
                        break;
                }
            }
        });
        // Stderr — mostly noise from stream-json mode, filter aggressively
        this.process.stderr?.on("data", (chunk) => {
            const text = chunk.toString("utf-8").trim();
            // Only show actual errors, not verbose logging
            if (text.includes("Error") ||
                text.includes("error") ||
                text.includes("ENOENT")) {
                this.emit("error", text);
            }
        });
        this.process.on("close", (code) => {
            // Process any remaining buffer
            if (this.lineBuffer.trim()) {
                const event = parseStreamEvent(this.lineBuffer.trim());
                if (event?.type === "result" && event.content) {
                    this.resultText = event.content;
                    this.emit("result", event.content);
                }
            }
            this.clearTimeout();
            this.process = null;
            this.emit("done", code ?? 1);
        });
        this.process.on("error", (err) => {
            this.clearTimeout();
            this.process = null;
            this.emit("error", `Failed to start claude: ${err.message}`);
            this.emit("done", 1);
        });
        this.timeoutHandle = setTimeout(() => {
            if (this.process) {
                this.emit("error", `Command timed out after ${config.timeout}s`);
                this.abort();
            }
        }, config.timeout * 1000);
    }
    abort() {
        this.clearTimeout();
        if (this.process && this.process.pid) {
            try {
                treeKill(this.process.pid);
            }
            catch {
                try {
                    this.process.kill();
                }
                catch {
                    // Process already dead
                }
            }
            this.process = null;
        }
    }
    clearTimeout() {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
            this.timeoutHandle = null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZFJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbW1hbmRSdW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN0QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFNUIsNkNBQTZDO0FBQzdDLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQVFqQzs7R0FFRztBQUNILFNBQVMsWUFBWTtJQUNuQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLFFBQWdCO0lBQzVDLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO0lBRWpDLHdCQUF3QjtJQUN4QixJQUFJLENBQUM7UUFDSCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxxQkFBcUI7SUFDdkIsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQyxJQUFJLENBQUM7UUFDSCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQUMsTUFBTSxDQUFDO1FBQ1AsWUFBWTtJQUNkLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZ0JBQWdCLENBQUMsSUFBWTtJQUlwQyxJQUFJLElBQVMsQ0FBQztJQUNkLElBQUksQ0FBQztRQUNILElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFBQyxNQUFNLENBQUM7UUFDUCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3ZELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzNCLEtBQUssTUFBTSxLQUFLLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQzVCLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUUsQ0FBQztvQkFDOUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUM7b0JBQ3pDLHNCQUFzQjtvQkFDdEIsTUFBTSxRQUFRLEdBQTJCO3dCQUN2QyxJQUFJLEVBQUUsaUJBQWlCO3dCQUN2QixJQUFJLEVBQUUsbUJBQW1CO3dCQUN6QixJQUFJLEVBQUUsY0FBYzt3QkFDcEIsSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLEtBQUssRUFBRSxjQUFjO3dCQUNyQixJQUFJLEVBQUUsaUJBQWlCO3dCQUN2QixTQUFTLEVBQUUsZUFBZTt3QkFDMUIsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLEtBQUssRUFBRSxtQkFBbUI7d0JBQzFCLEtBQUssRUFBRSxlQUFlO3dCQUN0QixTQUFTLEVBQUUsZ0JBQWdCO3FCQUM1QixDQUFDO29CQUNGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLFFBQVEsRUFBRSxDQUFDO29CQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0JBQzlDLENBQUM7Z0JBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQy9DLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO0lBQ2YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQy9CLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjO1lBQzlCLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPO1lBQ0wsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7U0FDNUYsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLGFBQWMsU0FBUSxZQUFZO0lBQS9DOztRQUNVLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3BDLGtCQUFhLEdBQXlDLElBQUksQ0FBQztRQUMzRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFzTHhCLENBQUM7SUFwTEMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRLENBQ04sU0FBaUIsRUFDakIsU0FBaUIsRUFDakIsTUFBMkI7UUFFM0IsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLENBQ1AsT0FBTyxFQUNQLHlCQUF5QixTQUFTLGlDQUFpQyxDQUNwRSxDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLE1BQU0sSUFBSSxrQkFBa0IsU0FBUyxFQUFFLENBQUM7UUFDMUMsQ0FBQztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHLENBQUMsTUFBYyxFQUFFLE1BQTJCO1FBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO1FBRWpELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FDbEIsVUFBVSxFQUNWO1lBQ0UsSUFBSTtZQUNKLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixXQUFXO1NBQ1osRUFDRDtZQUNFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztZQUNmLEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7U0FDdkMsQ0FDRixDQUFDO1FBRUYsd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFckMsc0NBQXNDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNoRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDO1lBRXhCLHlCQUF5QjtZQUN6QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1lBRXBDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLE9BQU87b0JBQUUsU0FBUztnQkFFdkIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLO29CQUFFLFNBQVM7Z0JBRXJCLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixLQUFLLFVBQVU7d0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQyxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFDUixLQUFLLFFBQVE7d0JBQ1gsMENBQTBDO3dCQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDOzRCQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDckMsQ0FBQzs2QkFBTSxDQUFDOzRCQUNOLDRDQUE0Qzs0QkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUNoQyxDQUFDO3dCQUNELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxPQUFPLElBQUksQ0FBQyxDQUFDO3dCQUM1QyxNQUFNO2dCQUNWLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQ2hELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUMsK0NBQStDO1lBQy9DLElBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixDQUFDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQW1CLEVBQUUsRUFBRTtZQUMvQywrQkFBK0I7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxLQUFLLEVBQUUsSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsMkJBQTJCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSwyQkFBMkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUFDLE1BQU0sQ0FBQztnQkFDUCxJQUFJLENBQUM7b0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFBQyxNQUFNLENBQUM7b0JBQ1AsdUJBQXVCO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzcGF3biwgQ2hpbGRQcm9jZXNzIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG4vLyB0cmVlLWtpbGwgZm9yIFdpbmRvd3MgcHJvY2VzcyB0cmVlIGNsZWFudXBcclxuaW1wb3J0IHRyZWVLaWxsIGZyb20gXCJ0cmVlLWtpbGxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFJ1bm5lckNvbmZpZyB7XHJcbiAgY2xhdWRlUGF0aDogc3RyaW5nO1xyXG4gIGN3ZDogc3RyaW5nO1xyXG4gIHRpbWVvdXQ6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlc29sdmVzIHRoZSBza2lsbCBjb21tYW5kcyBkaXJlY3RvcnkgKH4vLmNsYXVkZS9jb21tYW5kcy8pLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U2tpbGxzRGlyKCk6IHN0cmluZyB7XHJcbiAgY29uc3QgaG9tZSA9IHByb2Nlc3MuZW52LkhPTUUgfHwgcHJvY2Vzcy5lbnYuVVNFUlBST0ZJTEUgfHwgXCJcIjtcclxuICByZXR1cm4gam9pbihob21lLCBcIi5jbGF1ZGVcIiwgXCJjb21tYW5kc1wiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlYWRzIGEgc2tpbGwgZmlsZSBhbmQgcmV0dXJucyBpdHMgY29udGVudCBhcyBhIHByb21wdCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVhZFNraWxsRmlsZShmaWxlbmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgY29uc3Qgc2tpbGxzRGlyID0gZ2V0U2tpbGxzRGlyKCk7XHJcblxyXG4gIC8vIFRyeSBkaXJlY3QgcGF0aCBmaXJzdFxyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gcmVhZEZpbGVTeW5jKGpvaW4oc2tpbGxzRGlyLCBmaWxlbmFtZSksIFwidXRmLThcIik7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICAvLyBOb3QgZm91bmQgZGlyZWN0bHlcclxuICB9XHJcblxyXG4gIC8vIFRyeSBzdWJkaXJlY3RvcnkgcGF0dGVybjogY29tbWFuZC1uYW1lL1NLSUxMLm1kXHJcbiAgY29uc3QgYmFzZU5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKTtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHJlYWRGaWxlU3luYyhqb2luKHNraWxsc0RpciwgYmFzZU5hbWUsIFwiU0tJTEwubWRcIiksIFwidXRmLThcIik7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICAvLyBOb3QgZm91bmRcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyc2UgYSBzdHJlYW0tanNvbiBsaW5lIGZyb20gY2xhdWRlIENMSSBhbmQgZXh0cmFjdCBkaXNwbGF5IGluZm8uXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZVN0cmVhbUV2ZW50KGxpbmU6IHN0cmluZyk6IHtcclxuICB0eXBlOiBcInByb2dyZXNzXCIgfCBcInRleHRcIiB8IFwicmVzdWx0XCIgfCBcImlnbm9yZVwiO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxufSB8IG51bGwge1xyXG4gIGxldCBkYXRhOiBhbnk7XHJcbiAgdHJ5IHtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGxpbmUpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBUb29sIHVzZSDihpIgcHJvZ3Jlc3MgaW5kaWNhdG9yXHJcbiAgaWYgKGRhdGEudHlwZSA9PT0gXCJhc3Npc3RhbnRcIiAmJiBkYXRhLm1lc3NhZ2U/LmNvbnRlbnQpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkYXRhLm1lc3NhZ2UuY29udGVudDtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XHJcbiAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29udGVudCkge1xyXG4gICAgICAgIGlmIChibG9jay50eXBlID09PSBcInRvb2xfdXNlXCIpIHtcclxuICAgICAgICAgIGNvbnN0IHRvb2xOYW1lID0gYmxvY2submFtZSB8fCBcInVua25vd25cIjtcclxuICAgICAgICAgIC8vIEZyaWVuZGx5IHRvb2wgbmFtZXNcclxuICAgICAgICAgIGNvbnN0IGZyaWVuZGx5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgICAgICAgICBHbG9iOiBcIlNlYXJjaGluZyBmaWxlc1wiLFxyXG4gICAgICAgICAgICBHcmVwOiBcIlNlYXJjaGluZyBjb250ZW50XCIsXHJcbiAgICAgICAgICAgIFJlYWQ6IFwiUmVhZGluZyBmaWxlXCIsXHJcbiAgICAgICAgICAgIEVkaXQ6IFwiRWRpdGluZyBmaWxlXCIsXHJcbiAgICAgICAgICAgIFdyaXRlOiBcIldyaXRpbmcgZmlsZVwiLFxyXG4gICAgICAgICAgICBCYXNoOiBcIlJ1bm5pbmcgY29tbWFuZFwiLFxyXG4gICAgICAgICAgICBXZWJTZWFyY2g6IFwiU2VhcmNoaW5nIHdlYlwiLFxyXG4gICAgICAgICAgICBXZWJGZXRjaDogXCJGZXRjaGluZyBwYWdlXCIsXHJcbiAgICAgICAgICAgIEFnZW50OiBcIlJ1bm5pbmcgc3ViLWFnZW50XCIsXHJcbiAgICAgICAgICAgIFNraWxsOiBcIkxvYWRpbmcgc2tpbGxcIixcclxuICAgICAgICAgICAgVG9kb1dyaXRlOiBcIlVwZGF0aW5nIHRhc2tzXCIsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBmcmllbmRseVt0b29sTmFtZV0gfHwgYFVzaW5nICR7dG9vbE5hbWV9YDtcclxuICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwicHJvZ3Jlc3NcIiwgY29udGVudDogbGFiZWwgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09IFwidGV4dFwiICYmIGJsb2NrLnRleHQpIHtcclxuICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwidGV4dFwiLCBjb250ZW50OiBibG9jay50ZXh0IH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGaW5hbCByZXN1bHRcclxuICBpZiAoZGF0YS50eXBlID09PSBcInJlc3VsdFwiKSB7XHJcbiAgICBjb25zdCByZXN1bHRUZXh0ID0gZGF0YS5yZXN1bHQgfHwgXCJcIjtcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbl9tc1xyXG4gICAgICA/IGAkeyhkYXRhLmR1cmF0aW9uX21zIC8gMTAwMCkudG9GaXhlZCgxKX1zYFxyXG4gICAgICA6IFwiXCI7XHJcbiAgICBjb25zdCBjb3N0ID0gZGF0YS50b3RhbF9jb3N0X3VzZFxyXG4gICAgICA/IGAkJHtkYXRhLnRvdGFsX2Nvc3RfdXNkLnRvRml4ZWQoMyl9YFxyXG4gICAgICA6IFwiXCI7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBcInJlc3VsdFwiLFxyXG4gICAgICBjb250ZW50OiByZXN1bHRUZXh0IHx8IGBEb25lJHtkdXJhdGlvbiA/IGAgKCR7ZHVyYXRpb259KWAgOiBcIlwifSR7Y29zdCA/IGAgfCAke2Nvc3R9YCA6IFwiXCJ9YCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNwYXducyB0aGUgY2xhdWRlIENMSSBhcyBhIGNoaWxkIHByb2Nlc3MgYW5kIHN0cmVhbXMgb3V0cHV0LlxyXG4gKiBVc2VzIHN0cmVhbS1qc29uIGZvcm1hdCBmb3IgcmVhbC10aW1lIHByb2dyZXNzIGV2ZW50cy5cclxuICogT25lIGNvbW1hbmQgYXQgYSB0aW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbW1hbmRSdW5uZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIHByaXZhdGUgcHJvY2VzczogQ2hpbGRQcm9jZXNzIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSB0aW1lb3V0SGFuZGxlOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgb3V0cHV0ID0gXCJcIjtcclxuICBwcml2YXRlIHJlc3VsdFRleHQgPSBcIlwiO1xyXG4gIHByaXZhdGUgbGluZUJ1ZmZlciA9IFwiXCI7XHJcbiAgcHJpdmF0ZSBzdGFydFRpbWUgPSAwO1xyXG5cclxuICBnZXQgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcyAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldE91dHB1dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0VGV4dCB8fCB0aGlzLm91dHB1dDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1biBhIGNvbW1hbmQgYnkgcmVhZGluZyB0aGUgc2tpbGwgZmlsZSBhbmQgcGFzc2luZyBpdHMgY29udGVudFxyXG4gICAqIGFzIHRoZSBwcm9tcHQgdG8gYGNsYXVkZSAtcGAuXHJcbiAgICovXHJcbiAgcnVuU2tpbGwoXHJcbiAgICBza2lsbEZpbGU6IHN0cmluZyxcclxuICAgIHNraWxsQXJnczogc3RyaW5nLFxyXG4gICAgY29uZmlnOiBDb21tYW5kUnVubmVyQ29uZmlnXHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZFNraWxsRmlsZShza2lsbEZpbGUpO1xyXG4gICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdChcclxuICAgICAgICBcImVycm9yXCIsXHJcbiAgICAgICAgYFNraWxsIGZpbGUgbm90IGZvdW5kOiAke3NraWxsRmlsZX1cXG5Mb29rZWQgaW4gfi8uY2xhdWRlL2NvbW1hbmRzL2BcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5lbWl0KFwiZG9uZVwiLCAxKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9tcHQgPSBjb250ZW50LnRyaW0oKTtcclxuICAgIGlmIChza2lsbEFyZ3MpIHtcclxuICAgICAgcHJvbXB0ICs9IGBcXG5cXG5Bcmd1bWVudHM6ICR7c2tpbGxBcmdzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ydW4ocHJvbXB0LCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUnVuIGNsYXVkZSAtcCB3aXRoIGEgcmF3IHByb21wdCBzdHJpbmcuXHJcbiAgICogVXNlcyAtLW91dHB1dC1mb3JtYXQgc3RyZWFtLWpzb24gLS12ZXJib3NlIGZvciBwcm9ncmVzcyB0cmFja2luZy5cclxuICAgKi9cclxuICBydW4ocHJvbXB0OiBzdHJpbmcsIGNvbmZpZzogQ29tbWFuZFJ1bm5lckNvbmZpZyk6IHZvaWQge1xyXG4gICAgdGhpcy5hYm9ydCgpO1xyXG4gICAgdGhpcy5vdXRwdXQgPSBcIlwiO1xyXG4gICAgdGhpcy5yZXN1bHRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMubGluZUJ1ZmZlciA9IFwiXCI7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcblxyXG4gICAgY29uc3QgY2xhdWRlUGF0aCA9IGNvbmZpZy5jbGF1ZGVQYXRoIHx8IFwiY2xhdWRlXCI7XHJcblxyXG4gICAgLy8gc3RyZWFtLWpzb24gKyB2ZXJib3NlIGdpdmVzIHVzIHRvb2wgY2FsbHMsIHRleHQgY2h1bmtzLCBhbmQgcmVzdWx0XHJcbiAgICB0aGlzLnByb2Nlc3MgPSBzcGF3bihcclxuICAgICAgY2xhdWRlUGF0aCxcclxuICAgICAgW1xyXG4gICAgICAgIFwiLXBcIixcclxuICAgICAgICBcIi0tcGVybWlzc2lvbi1tb2RlXCIsXHJcbiAgICAgICAgXCJhY2NlcHRFZGl0c1wiLFxyXG4gICAgICAgIFwiLS1vdXRwdXQtZm9ybWF0XCIsXHJcbiAgICAgICAgXCJzdHJlYW0tanNvblwiLFxyXG4gICAgICAgIFwiLS12ZXJib3NlXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIHtcclxuICAgICAgICBjd2Q6IGNvbmZpZy5jd2QsXHJcbiAgICAgICAgc2hlbGw6IHRydWUsXHJcbiAgICAgICAgZW52OiB7IC4uLnByb2Nlc3MuZW52LCBOT19DT0xPUjogXCIxXCIgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBXcml0ZSBwcm9tcHQgdG8gc3RkaW5cclxuICAgIGlmICh0aGlzLnByb2Nlc3Muc3RkaW4pIHtcclxuICAgICAgdGhpcy5wcm9jZXNzLnN0ZGluLndyaXRlKHByb21wdCwgXCJ1dGYtOFwiKTtcclxuICAgICAgdGhpcy5wcm9jZXNzLnN0ZGluLmVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtaXQgaW5pdGlhbCBwcm9ncmVzc1xyXG4gICAgdGhpcy5lbWl0KFwicHJvZ3Jlc3NcIiwgXCJTdGFydGluZy4uLlwiKTtcclxuXHJcbiAgICAvLyBQYXJzZSBzdHJlYW0tanNvbiBsaW5lcyBmcm9tIHN0ZG91dFxyXG4gICAgdGhpcy5wcm9jZXNzLnN0ZG91dD8ub24oXCJkYXRhXCIsIChjaHVuazogQnVmZmVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRleHQgPSBjaHVuay50b1N0cmluZyhcInV0Zi04XCIpO1xyXG4gICAgICB0aGlzLmxpbmVCdWZmZXIgKz0gdGV4dDtcclxuXHJcbiAgICAgIC8vIFByb2Nlc3MgY29tcGxldGUgbGluZXNcclxuICAgICAgY29uc3QgbGluZXMgPSB0aGlzLmxpbmVCdWZmZXIuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIC8vIEtlZXAgdGhlIGxhc3QgaW5jb21wbGV0ZSBsaW5lIGluIHRoZSBidWZmZXJcclxuICAgICAgdGhpcy5saW5lQnVmZmVyID0gbGluZXMucG9wKCkgfHwgXCJcIjtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xyXG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXRyaW1tZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudCA9IHBhcnNlU3RyZWFtRXZlbnQodHJpbW1lZCk7XHJcbiAgICAgICAgaWYgKCFldmVudCkgY29udGludWU7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBcInByb2dyZXNzXCI6XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInByb2dyZXNzXCIsIGV2ZW50LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0ICs9IGV2ZW50LmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcIm91dHB1dFwiLCBldmVudC5jb250ZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwicmVzdWx0XCI6XHJcbiAgICAgICAgICAgIC8vIElmIHJlc3VsdCBoYXMgdGhlIGFjdHVhbCB0ZXh0LCB1c2UgdGhhdFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29udGVudCAmJiAhZXZlbnQuY29udGVudC5zdGFydHNXaXRoKFwiRG9uZVwiKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVzdWx0VGV4dCA9IGV2ZW50LmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5lbWl0KFwicmVzdWx0XCIsIGV2ZW50LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFVzZSBhY2N1bXVsYXRlZCB0ZXh0IG91dHB1dCBhcyB0aGUgcmVzdWx0XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXN1bHRUZXh0ID0gdGhpcy5vdXRwdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9ICgoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDApLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInByb2dyZXNzXCIsIGBEb25lICgke2VsYXBzZWR9cylgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdGRlcnIg4oCUIG1vc3RseSBub2lzZSBmcm9tIHN0cmVhbS1qc29uIG1vZGUsIGZpbHRlciBhZ2dyZXNzaXZlbHlcclxuICAgIHRoaXMucHJvY2Vzcy5zdGRlcnI/Lm9uKFwiZGF0YVwiLCAoY2h1bms6IEJ1ZmZlcikgPT4ge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gY2h1bmsudG9TdHJpbmcoXCJ1dGYtOFwiKS50cmltKCk7XHJcbiAgICAgIC8vIE9ubHkgc2hvdyBhY3R1YWwgZXJyb3JzLCBub3QgdmVyYm9zZSBsb2dnaW5nXHJcbiAgICAgIGlmIChcclxuICAgICAgICB0ZXh0LmluY2x1ZGVzKFwiRXJyb3JcIikgfHxcclxuICAgICAgICB0ZXh0LmluY2x1ZGVzKFwiZXJyb3JcIikgfHxcclxuICAgICAgICB0ZXh0LmluY2x1ZGVzKFwiRU5PRU5UXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIHRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3Mub24oXCJjbG9zZVwiLCAoY29kZTogbnVtYmVyIHwgbnVsbCkgPT4ge1xyXG4gICAgICAvLyBQcm9jZXNzIGFueSByZW1haW5pbmcgYnVmZmVyXHJcbiAgICAgIGlmICh0aGlzLmxpbmVCdWZmZXIudHJpbSgpKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBwYXJzZVN0cmVhbUV2ZW50KHRoaXMubGluZUJ1ZmZlci50cmltKCkpO1xyXG4gICAgICAgIGlmIChldmVudD8udHlwZSA9PT0gXCJyZXN1bHRcIiAmJiBldmVudC5jb250ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnJlc3VsdFRleHQgPSBldmVudC5jb250ZW50O1xyXG4gICAgICAgICAgdGhpcy5lbWl0KFwicmVzdWx0XCIsIGV2ZW50LmNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICB0aGlzLnByb2Nlc3MgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXQoXCJkb25lXCIsIGNvZGUgPz8gMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3Mub24oXCJlcnJvclwiLCAoZXJyOiBFcnJvcikgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xyXG4gICAgICB0aGlzLnByb2Nlc3MgPSBudWxsO1xyXG4gICAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBgRmFpbGVkIHRvIHN0YXJ0IGNsYXVkZTogJHtlcnIubWVzc2FnZX1gKTtcclxuICAgICAgdGhpcy5lbWl0KFwiZG9uZVwiLCAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5wcm9jZXNzKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgYENvbW1hbmQgdGltZWQgb3V0IGFmdGVyICR7Y29uZmlnLnRpbWVvdXR9c2ApO1xyXG4gICAgICAgIHRoaXMuYWJvcnQoKTtcclxuICAgICAgfVxyXG4gICAgfSwgY29uZmlnLnRpbWVvdXQgKiAxMDAwKTtcclxuICB9XHJcblxyXG4gIGFib3J0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcclxuICAgIGlmICh0aGlzLnByb2Nlc3MgJiYgdGhpcy5wcm9jZXNzLnBpZCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRyZWVLaWxsKHRoaXMucHJvY2Vzcy5waWQpO1xyXG4gICAgICB9IGNhdGNoIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgdGhpcy5wcm9jZXNzLmtpbGwoKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgIC8vIFByb2Nlc3MgYWxyZWFkeSBkZWFkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucHJvY2VzcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyVGltZW91dCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRpbWVvdXRIYW5kbGUpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEhhbmRsZSk7XHJcbiAgICAgIHRoaXMudGltZW91dEhhbmRsZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==