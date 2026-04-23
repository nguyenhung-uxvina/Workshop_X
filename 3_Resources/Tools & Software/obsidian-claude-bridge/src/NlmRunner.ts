import { spawn, ChildProcess } from "child_process";
import { EventEmitter } from "events";
import treeKill from "tree-kill";

export interface NlmRunnerConfig {
  nlmPath: string;
  cwd: string;
  timeout: number;
}

/**
 * Spawns nlm-cli commands and streams plain text output.
 * Unlike CommandRunner (which parses stream-json from claude),
 * NlmRunner handles simple text stdout from nlm notebook commands.
 */
export class NlmRunner extends EventEmitter {
  private process: ChildProcess | null = null;
  private timeoutHandle: ReturnType<typeof setTimeout> | null = null;
  private output = "";
  private startTime = 0;

  get isRunning(): boolean {
    return this.process !== null;
  }

  getOutput(): string {
    return this.output;
  }

  getLastNotebookIds(): string[] {
    return [...this.lastNotebookIds];
  }

  getLastCommand(): string {
    return this.lastCommand;
  }

  // Store query metadata for output formatting
  private lastQuery = "";
  private lastCommand = "";
  private lastNotebookIds: string[] = [];

  /**
   * Run: nlm notebook <command> <notebookId> "<query>"
   */
  runQuery(
    command: string,
    notebookIds: string[],
    query: string,
    config: NlmRunnerConfig
  ): void {
    this.abort();
    this.output = "";
    this.startTime = Date.now();
    this.lastQuery = query;
    this.lastCommand = command;
    this.lastNotebookIds = [...notebookIds];

    const nlmPath = config.nlmPath || "nlm";

    // Escape double quotes in query for shell
    const escapedQuery = query.replace(/"/g, '\\"');

    // Cross-query: run sequential queries, not a single command
    if (command === "cross-query" && notebookIds.length > 1) {
      this.runCrossQuery(notebookIds, query, config);
      return;
    }

    // Build command string (shell:true on Windows needs manual quoting)
    let cmdString: string;
    switch (command) {
      case "query":
      case "cross-query": // single notebook fallback
        cmdString = `${nlmPath} notebook query ${notebookIds[0]} "${escapedQuery}"`;
        break;

      case "sources":
        cmdString = `${nlmPath} source list ${notebookIds[0]}`;
        break;

      default:
        this.emit("error", `Unknown NLM command: ${command}`);
        this.emit("done", 1);
        return;
    }

    this.emit("progress", `Running: ${cmdString.slice(0, 80)}...`);

    this.process = spawn(cmdString, [], {
      cwd: config.cwd,
      shell: true,
      env: {
        ...process.env,
        NO_COLOR: "1",
        PYTHONIOENCODING: "utf-8",
      },
    });

    // Capture stdout as plain text
    this.process.stdout?.on("data", (chunk: Buffer) => {
      const text = chunk.toString("utf-8");
      this.output += text;
      this.emit("output", text);
    });

    // Stderr — show errors
    this.process.stderr?.on("data", (chunk: Buffer) => {
      const text = chunk.toString("utf-8").trim();
      if (text) {
        this.emit("error", text);
      }
    });

    this.process.on("close", (code: number | null) => {
      this.clearTimeout();
      this.process = null;
      const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);
      if (code === 0) {
        this.emit("progress", `Done (${elapsed}s)`);
      } else {
        this.emit("progress", `Exited with code ${code} (${elapsed}s)`);
      }

      // Format output with query header + follow-up suggestions
      const formatted = this.formatOutput(this.output, elapsed);
      this.emit("result", formatted);
      this.emit("done", code ?? 1);
    });

    this.process.on("error", (err: Error) => {
      this.clearTimeout();
      this.process = null;
      this.emit("error", `Failed to start nlm: ${err.message}`);
      this.emit("done", 1);
    });

    this.timeoutHandle = setTimeout(() => {
      if (this.process) {
        this.emit("error", `NLM command timed out after ${config.timeout}s`);
        this.abort();
      }
    }, config.timeout * 1000);
  }

  /**
   * Cross-query: run the same query against multiple notebooks sequentially,
   * then merge results. This is not a native nlm command.
   */
  private async runCrossQuery(
    notebookIds: string[],
    query: string,
    config: NlmRunnerConfig
  ): Promise<void> {
    const nlmPath = config.nlmPath || "nlm";
    const escapedQuery = query.replace(/"/g, '\\"');
    const results: { notebook: string; output: string }[] = [];

    this.emit("progress", `Cross-query: ${notebookIds.length} notebooks...`);

    for (let i = 0; i < notebookIds.length; i++) {
      const nbId = notebookIds[i];
      this.emit("progress", `Querying ${nbId} (${i + 1}/${notebookIds.length})...`);

      try {
        const output = await this.runSingleQuery(
          nlmPath,
          nbId,
          escapedQuery,
          config
        );
        results.push({ notebook: nbId, output });
      } catch (err: any) {
        results.push({ notebook: nbId, output: `Error: ${err.message || err}` });
      }
    }

    // Merge results
    this.output = results
      .map((r) => `### ${r.notebook}\n\n${r.output}`)
      .join("\n\n---\n\n");

    const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);
    this.emit("progress", `Done (${elapsed}s)`);

    const formatted = this.formatOutput(this.output, elapsed);
    this.emit("result", formatted);
    this.emit("done", 0);
  }

  /**
   * Run a single nlm notebook query and return the output as a promise.
   */
  private runSingleQuery(
    nlmPath: string,
    notebookId: string,
    escapedQuery: string,
    config: NlmRunnerConfig
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const cmdString = `${nlmPath} notebook query ${notebookId} "${escapedQuery}"`;
      let output = "";

      const proc = spawn(cmdString, [], {
        cwd: config.cwd,
        shell: true,
        env: {
          ...process.env,
          NO_COLOR: "1",
          PYTHONIOENCODING: "utf-8",
        },
      });

      proc.stdout?.on("data", (chunk: Buffer) => {
        output += chunk.toString("utf-8");
      });

      proc.stderr?.on("data", (chunk: Buffer) => {
        const text = chunk.toString("utf-8").trim();
        if (text) {
          this.emit("error", text);
        }
      });

      proc.on("close", (code: number | null) => {
        if (code === 0) {
          resolve(output);
        } else {
          resolve(output || `Exited with code ${code}`);
        }
      });

      proc.on("error", (err: Error) => {
        reject(err);
      });
    });
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

  /**
   * Format final output with query header and follow-up suggestions.
   */
  private formatOutput(rawOutput: string, elapsed: string): string {
    const parts: string[] = [];

    // Header: show what was queried
    if (this.lastQuery && this.lastCommand === "query" || this.lastCommand === "cross-query") {
      const notebooks = this.lastNotebookIds.join(", ");
      parts.push(`> **Query:** ${this.lastQuery}`);
      parts.push(`> **Notebook:** ${notebooks} | ${elapsed}s`);
      parts.push("");
      parts.push("---");
      parts.push("");
    }

    // Body: NLM response (strip trailing conversation ID line)
    const cleaned = rawOutput
      .replace(/\nConversation ID: [a-f0-9-]+\n?/g, "")
      .replace(/\nUse --conversation-id for follow-up questions\n?/g, "")
      .trim();
    parts.push(cleaned);

    // Footer: follow-up suggestions as clickable HTML links (only for query/cross-query)
    if (this.lastQuery && (this.lastCommand === "query" || this.lastCommand === "cross-query")) {
      const followUps = this.generateFollowUps(this.lastQuery, cleaned);
      const notebookData = this.lastNotebookIds.join(",");
      parts.push("");
      parts.push("---");
      parts.push("");
      parts.push("**Gợi ý tiếp theo:**");
      for (const suggestion of followUps) {
        // Encode as HTML link with data attributes for SidebarView to intercept
        const encoded = suggestion.replace(/"/g, "&quot;");
        parts.push(`<a class="nlm-followup" data-nlm-query="${encoded}" data-nlm-notebooks="${notebookData}" data-nlm-command="${this.lastCommand}">${suggestion}</a>\n`);
      }
    }

    return parts.join("\n");
  }

  /**
   * Generate 3 follow-up question suggestions based on query and response.
   * Extracts key concepts from the response to create relevant follow-ups.
   */
  private generateFollowUps(query: string, response: string): string[] {
    const suggestions: string[] = [];

    // Extract key terms from response (words that appear in headers or bold)
    const headerTerms = response.match(/#{1,3}\s+(.+)/g)?.map(h => h.replace(/#{1,3}\s+/, "").trim()) || [];
    const boldTerms = response.match(/\*\*([^*]+)\*\*/g)?.map(b => b.replace(/\*\*/g, "").trim()) || [];
    const keyTerms = [...new Set([...headerTerms, ...boldTerms])].filter(t => t.length > 3 && t.length < 60);

    // Strategy 1: "Tell me more about [key concept from response]"
    if (keyTerms.length > 0) {
      const term = keyTerms[Math.floor(keyTerms.length / 2)]; // pick middle term
      suggestions.push(`Giải thích chi tiết hơn về "${term}" với ví dụ cụ thể?`);
    } else {
      suggestions.push(`Giải thích chi tiết hơn với ví dụ cụ thể từ thực tế?`);
    }

    // Strategy 2: "How does this apply to [defense/VN context]"
    if (query.toLowerCase().includes("chapter") || query.toLowerCase().includes("section")) {
      suggestions.push(`Áp dụng nội dung này cho thiết kế hệ thống huấn luyện quân sự như thế nào?`);
    } else if (keyTerms.length > 1) {
      const term2 = keyTerms[0];
      suggestions.push(`Mối quan hệ giữa "${term2}" và các khái niệm khác trong chương này?`);
    } else {
      suggestions.push(`So sánh với các phương pháp thiết kế khác (VDI 2221, Agile)?`);
    }

    // Strategy 3: "What are common mistakes / pitfalls"
    if (keyTerms.length > 2) {
      const term3 = keyTerms[keyTerms.length - 1];
      suggestions.push(`Những sai lầm phổ biến khi áp dụng "${term3}" trong thực tế?`);
    } else {
      suggestions.push(`Những sai lầm phổ biến và cách tránh khi áp dụng trong thực tế?`);
    }

    return suggestions;
  }

  private clearTimeout(): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = null;
    }
  }
}
