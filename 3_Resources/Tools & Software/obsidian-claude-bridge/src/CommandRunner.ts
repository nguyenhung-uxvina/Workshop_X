import { spawn, ChildProcess } from "child_process";
import { EventEmitter } from "events";
import { readFileSync } from "fs";
import { join } from "path";

// tree-kill for Windows process tree cleanup
import treeKill from "tree-kill";

export interface CommandRunnerConfig {
  claudePath: string;
  cwd: string;
  timeout: number;
}

/**
 * Resolves the skill commands directory (~/.claude/commands/).
 */
function getSkillsDir(): string {
  const home = process.env.HOME || process.env.USERPROFILE || "";
  return join(home, ".claude", "commands");
}

/**
 * Reads a skill file and returns its content as a prompt string.
 */
export function readSkillFile(filename: string): string | null {
  const skillsDir = getSkillsDir();

  // Try direct path first
  try {
    return readFileSync(join(skillsDir, filename), "utf-8");
  } catch {
    // Not found directly
  }

  // Try subdirectory pattern: command-name/SKILL.md
  const baseName = filename.replace(/\.md$/, "");
  try {
    return readFileSync(join(skillsDir, baseName, "SKILL.md"), "utf-8");
  } catch {
    // Not found
  }

  return null;
}

/**
 * Parse a stream-json line from claude CLI and extract display info.
 */
function parseStreamEvent(line: string): {
  type: "progress" | "text" | "result" | "ignore";
  content: string;
} | null {
  let data: any;
  try {
    data = JSON.parse(line);
  } catch {
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
          const friendly: Record<string, string> = {
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
  private process: ChildProcess | null = null;
  private timeoutHandle: ReturnType<typeof setTimeout> | null = null;
  private output = "";
  private resultText = "";
  private lineBuffer = "";
  private startTime = 0;

  get isRunning(): boolean {
    return this.process !== null;
  }

  getOutput(): string {
    return this.resultText || this.output;
  }

  /**
   * Run a command by reading the skill file and passing its content
   * as the prompt to `claude -p`.
   */
  runSkill(
    skillFile: string,
    skillArgs: string,
    config: CommandRunnerConfig
  ): void {
    const content = readSkillFile(skillFile);
    if (!content) {
      this.emit(
        "error",
        `Skill file not found: ${skillFile}\nLooked in ~/.claude/commands/`
      );
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
  run(prompt: string, config: CommandRunnerConfig): void {
    this.abort();
    this.output = "";
    this.resultText = "";
    this.lineBuffer = "";
    this.startTime = Date.now();

    const claudePath = config.claudePath || "claude";

    // stream-json + verbose gives us tool calls, text chunks, and result
    this.process = spawn(
      claudePath,
      [
        "-p",
        "--permission-mode",
        "acceptEdits",
        "--output-format",
        "stream-json",
        "--verbose",
      ],
      {
        cwd: config.cwd,
        shell: true,
        env: { ...process.env, NO_COLOR: "1" },
      }
    );

    // Write prompt to stdin
    if (this.process.stdin) {
      this.process.stdin.write(prompt, "utf-8");
      this.process.stdin.end();
    }

    // Emit initial progress
    this.emit("progress", "Starting...");

    // Parse stream-json lines from stdout
    this.process.stdout?.on("data", (chunk: Buffer) => {
      const text = chunk.toString("utf-8");
      this.lineBuffer += text;

      // Process complete lines
      const lines = this.lineBuffer.split("\n");
      // Keep the last incomplete line in the buffer
      this.lineBuffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;

        const event = parseStreamEvent(trimmed);
        if (!event) continue;

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
            } else {
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
    this.process.stderr?.on("data", (chunk: Buffer) => {
      const text = chunk.toString("utf-8").trim();
      // Only show actual errors, not verbose logging
      if (
        text.includes("Error") ||
        text.includes("error") ||
        text.includes("ENOENT")
      ) {
        this.emit("error", text);
      }
    });

    this.process.on("close", (code: number | null) => {
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

    this.process.on("error", (err: Error) => {
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

  abort(): void {
    this.clearTimeout();
    if (this.process && this.process.pid) {
      try {
        treeKill(this.process.pid);
      } catch {
        try {
          this.process.kill();
        } catch {
          // Process already dead
        }
      }
      this.process = null;
    }
  }

  private clearTimeout(): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = null;
    }
  }
}
