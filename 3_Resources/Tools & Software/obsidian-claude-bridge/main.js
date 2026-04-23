var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tree-kill/index.js
var require_tree_kill = __commonJS({
  "node_modules/tree-kill/index.js"(exports2, module2) {
    "use strict";
    var childProcess = require("child_process");
    var spawn3 = childProcess.spawn;
    var exec = childProcess.exec;
    module2.exports = function(pid, signal, callback) {
      if (typeof signal === "function" && callback === void 0) {
        callback = signal;
        signal = void 0;
      }
      pid = parseInt(pid);
      if (Number.isNaN(pid)) {
        if (callback) {
          return callback(new Error("pid must be a number"));
        } else {
          throw new Error("pid must be a number");
        }
      }
      var tree = {};
      var pidsToProcess = {};
      tree[pid] = [];
      pidsToProcess[pid] = 1;
      switch (process.platform) {
        case "win32":
          exec("taskkill /pid " + pid + " /T /F", callback);
          break;
        case "darwin":
          buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
            return spawn3("pgrep", ["-P", parentPid]);
          }, function() {
            killAll(tree, signal, callback);
          });
          break;
        default:
          buildProcessTree(pid, tree, pidsToProcess, function(parentPid) {
            return spawn3("ps", ["-o", "pid", "--no-headers", "--ppid", parentPid]);
          }, function() {
            killAll(tree, signal, callback);
          });
          break;
      }
    };
    function killAll(tree, signal, callback) {
      var killed = {};
      try {
        Object.keys(tree).forEach(function(pid) {
          tree[pid].forEach(function(pidpid) {
            if (!killed[pidpid]) {
              killPid(pidpid, signal);
              killed[pidpid] = 1;
            }
          });
          if (!killed[pid]) {
            killPid(pid, signal);
            killed[pid] = 1;
          }
        });
      } catch (err) {
        if (callback) {
          return callback(err);
        } else {
          throw err;
        }
      }
      if (callback) {
        return callback();
      }
    }
    function killPid(pid, signal) {
      try {
        process.kill(parseInt(pid, 10), signal);
      } catch (err) {
        if (err.code !== "ESRCH") throw err;
      }
    }
    function buildProcessTree(parentPid, tree, pidsToProcess, spawnChildProcessesList, cb) {
      var ps = spawnChildProcessesList(parentPid);
      var allData = "";
      ps.stdout.on("data", function(data) {
        var data = data.toString("ascii");
        allData += data;
      });
      var onClose = function(code) {
        delete pidsToProcess[parentPid];
        if (code != 0) {
          if (Object.keys(pidsToProcess).length == 0) {
            cb();
          }
          return;
        }
        allData.match(/\d+/g).forEach(function(pid) {
          pid = parseInt(pid, 10);
          tree[parentPid].push(pid);
          tree[pid] = [];
          pidsToProcess[pid] = 1;
          buildProcessTree(pid, tree, pidsToProcess, spawnChildProcessesList, cb);
        });
      };
      ps.on("close", onClose);
    }
  }
});

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ClaudeBridgePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian4 = require("obsidian");

// src/CommandRunner.ts
var import_child_process = require("child_process");
var import_events = require("events");
var import_fs = require("fs");
var import_path = require("path");
var import_tree_kill = __toESM(require_tree_kill());
function getSkillsDir() {
  const home = process.env.HOME || process.env.USERPROFILE || "";
  return (0, import_path.join)(home, ".claude", "commands");
}
function readSkillFile(filename) {
  const skillsDir = getSkillsDir();
  try {
    return (0, import_fs.readFileSync)((0, import_path.join)(skillsDir, filename), "utf-8");
  } catch {
  }
  const baseName = filename.replace(/\.md$/, "");
  try {
    return (0, import_fs.readFileSync)((0, import_path.join)(skillsDir, baseName, "SKILL.md"), "utf-8");
  } catch {
  }
  return null;
}
function parseStreamEvent(line) {
  let data;
  try {
    data = JSON.parse(line);
  } catch {
    return null;
  }
  if (data.type === "assistant" && data.message?.content) {
    const content = data.message.content;
    if (Array.isArray(content)) {
      for (const block of content) {
        if (block.type === "tool_use") {
          const toolName = block.name || "unknown";
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
            TodoWrite: "Updating tasks"
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
  if (data.type === "result") {
    const resultText = data.result || "";
    const duration = data.duration_ms ? `${(data.duration_ms / 1e3).toFixed(1)}s` : "";
    const cost = data.total_cost_usd ? `$${data.total_cost_usd.toFixed(3)}` : "";
    return {
      type: "result",
      content: resultText || `Done${duration ? ` (${duration})` : ""}${cost ? ` | ${cost}` : ""}`
    };
  }
  return null;
}
var CommandRunner = class extends import_events.EventEmitter {
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
      this.emit(
        "error",
        `Skill file not found: ${skillFile}
Looked in ~/.claude/commands/`
      );
      this.emit("done", 1);
      return;
    }
    let prompt = content.trim();
    if (skillArgs) {
      prompt += `

Arguments: ${skillArgs}`;
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
    this.process = (0, import_child_process.spawn)(
      claudePath,
      [
        "-p",
        "--permission-mode",
        "acceptEdits",
        "--output-format",
        "stream-json",
        "--verbose"
      ],
      {
        cwd: config.cwd,
        shell: true,
        env: { ...process.env, NO_COLOR: "1" }
      }
    );
    if (this.process.stdin) {
      this.process.stdin.write(prompt, "utf-8");
      this.process.stdin.end();
    }
    this.emit("progress", "Starting...");
    this.process.stdout?.on("data", (chunk) => {
      const text = chunk.toString("utf-8");
      this.lineBuffer += text;
      const lines = this.lineBuffer.split("\n");
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
            if (event.content && !event.content.startsWith("Done")) {
              this.resultText = event.content;
              this.emit("result", event.content);
            } else {
              this.resultText = this.output;
            }
            const elapsed = ((Date.now() - this.startTime) / 1e3).toFixed(1);
            this.emit("progress", `Done (${elapsed}s)`);
            break;
        }
      }
    });
    this.process.stderr?.on("data", (chunk) => {
      const text = chunk.toString("utf-8").trim();
      if (text.includes("Error") || text.includes("error") || text.includes("ENOENT")) {
        this.emit("error", text);
      }
    });
    this.process.on("close", (code) => {
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
    }, config.timeout * 1e3);
  }
  abort() {
    this.clearTimeout();
    if (this.process && this.process.pid) {
      try {
        (0, import_tree_kill.default)(this.process.pid);
      } catch {
        try {
          this.process.kill();
        } catch {
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
};

// src/NlmRunner.ts
var import_child_process2 = require("child_process");
var import_events2 = require("events");
var import_tree_kill2 = __toESM(require_tree_kill());
var NlmRunner = class extends import_events2.EventEmitter {
  constructor() {
    super(...arguments);
    this.process = null;
    this.timeoutHandle = null;
    this.output = "";
    this.startTime = 0;
    // Store query metadata for output formatting
    this.lastQuery = "";
    this.lastCommand = "";
    this.lastNotebookIds = [];
  }
  get isRunning() {
    return this.process !== null;
  }
  getOutput() {
    return this.output;
  }
  getLastNotebookIds() {
    return [...this.lastNotebookIds];
  }
  getLastCommand() {
    return this.lastCommand;
  }
  /**
   * Run: nlm notebook <command> <notebookId> "<query>"
   */
  runQuery(command, notebookIds, query, config) {
    this.abort();
    this.output = "";
    this.startTime = Date.now();
    this.lastQuery = query;
    this.lastCommand = command;
    this.lastNotebookIds = [...notebookIds];
    const nlmPath = config.nlmPath || "nlm";
    const escapedQuery = query.replace(/"/g, '\\"');
    if (command === "cross-query" && notebookIds.length > 1) {
      this.runCrossQuery(notebookIds, query, config);
      return;
    }
    let cmdString;
    switch (command) {
      case "query":
      case "cross-query":
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
    this.process = (0, import_child_process2.spawn)(cmdString, [], {
      cwd: config.cwd,
      shell: true,
      env: {
        ...process.env,
        NO_COLOR: "1",
        PYTHONIOENCODING: "utf-8"
      }
    });
    this.process.stdout?.on("data", (chunk) => {
      const text = chunk.toString("utf-8");
      this.output += text;
      this.emit("output", text);
    });
    this.process.stderr?.on("data", (chunk) => {
      const text = chunk.toString("utf-8").trim();
      if (text) {
        this.emit("error", text);
      }
    });
    this.process.on("close", (code) => {
      this.clearTimeout();
      this.process = null;
      const elapsed = ((Date.now() - this.startTime) / 1e3).toFixed(1);
      if (code === 0) {
        this.emit("progress", `Done (${elapsed}s)`);
      } else {
        this.emit("progress", `Exited with code ${code} (${elapsed}s)`);
      }
      const formatted = this.formatOutput(this.output, elapsed);
      this.emit("result", formatted);
      this.emit("done", code ?? 1);
    });
    this.process.on("error", (err) => {
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
    }, config.timeout * 1e3);
  }
  /**
   * Cross-query: run the same query against multiple notebooks sequentially,
   * then merge results. This is not a native nlm command.
   */
  async runCrossQuery(notebookIds, query, config) {
    const nlmPath = config.nlmPath || "nlm";
    const escapedQuery = query.replace(/"/g, '\\"');
    const results = [];
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
      } catch (err) {
        results.push({ notebook: nbId, output: `Error: ${err.message || err}` });
      }
    }
    this.output = results.map((r) => `### ${r.notebook}

${r.output}`).join("\n\n---\n\n");
    const elapsed = ((Date.now() - this.startTime) / 1e3).toFixed(1);
    this.emit("progress", `Done (${elapsed}s)`);
    const formatted = this.formatOutput(this.output, elapsed);
    this.emit("result", formatted);
    this.emit("done", 0);
  }
  /**
   * Run a single nlm notebook query and return the output as a promise.
   */
  runSingleQuery(nlmPath, notebookId, escapedQuery, config) {
    return new Promise((resolve, reject) => {
      const cmdString = `${nlmPath} notebook query ${notebookId} "${escapedQuery}"`;
      let output = "";
      const proc = (0, import_child_process2.spawn)(cmdString, [], {
        cwd: config.cwd,
        shell: true,
        env: {
          ...process.env,
          NO_COLOR: "1",
          PYTHONIOENCODING: "utf-8"
        }
      });
      proc.stdout?.on("data", (chunk) => {
        output += chunk.toString("utf-8");
      });
      proc.stderr?.on("data", (chunk) => {
        const text = chunk.toString("utf-8").trim();
        if (text) {
          this.emit("error", text);
        }
      });
      proc.on("close", (code) => {
        if (code === 0) {
          resolve(output);
        } else {
          resolve(output || `Exited with code ${code}`);
        }
      });
      proc.on("error", (err) => {
        reject(err);
      });
    });
  }
  abort() {
    this.clearTimeout();
    if (this.process && this.process.pid) {
      try {
        (0, import_tree_kill2.default)(this.process.pid);
      } catch {
        try {
          this.process.kill();
        } catch {
        }
      }
      this.process = null;
    }
  }
  /**
   * Format final output with query header and follow-up suggestions.
   */
  formatOutput(rawOutput, elapsed) {
    const parts = [];
    if (this.lastQuery && this.lastCommand === "query" || this.lastCommand === "cross-query") {
      const notebooks = this.lastNotebookIds.join(", ");
      parts.push(`> **Query:** ${this.lastQuery}`);
      parts.push(`> **Notebook:** ${notebooks} | ${elapsed}s`);
      parts.push("");
      parts.push("---");
      parts.push("");
    }
    const cleaned = rawOutput.replace(/\nConversation ID: [a-f0-9-]+\n?/g, "").replace(/\nUse --conversation-id for follow-up questions\n?/g, "").trim();
    parts.push(cleaned);
    if (this.lastQuery && (this.lastCommand === "query" || this.lastCommand === "cross-query")) {
      const followUps = this.generateFollowUps(this.lastQuery, cleaned);
      const notebookData = this.lastNotebookIds.join(",");
      parts.push("");
      parts.push("---");
      parts.push("");
      parts.push("**G\u1EE3i \xFD ti\u1EBFp theo:**");
      for (const suggestion of followUps) {
        const encoded = suggestion.replace(/"/g, "&quot;");
        parts.push(`<a class="nlm-followup" data-nlm-query="${encoded}" data-nlm-notebooks="${notebookData}" data-nlm-command="${this.lastCommand}">${suggestion}</a>
`);
      }
    }
    return parts.join("\n");
  }
  /**
   * Generate 3 follow-up question suggestions based on query and response.
   * Extracts key concepts from the response to create relevant follow-ups.
   */
  generateFollowUps(query, response) {
    const suggestions = [];
    const headerTerms = response.match(/#{1,3}\s+(.+)/g)?.map((h) => h.replace(/#{1,3}\s+/, "").trim()) || [];
    const boldTerms = response.match(/\*\*([^*]+)\*\*/g)?.map((b) => b.replace(/\*\*/g, "").trim()) || [];
    const keyTerms = [.../* @__PURE__ */ new Set([...headerTerms, ...boldTerms])].filter((t) => t.length > 3 && t.length < 60);
    if (keyTerms.length > 0) {
      const term = keyTerms[Math.floor(keyTerms.length / 2)];
      suggestions.push(`Gi\u1EA3i th\xEDch chi ti\u1EBFt h\u01A1n v\u1EC1 "${term}" v\u1EDBi v\xED d\u1EE5 c\u1EE5 th\u1EC3?`);
    } else {
      suggestions.push(`Gi\u1EA3i th\xEDch chi ti\u1EBFt h\u01A1n v\u1EDBi v\xED d\u1EE5 c\u1EE5 th\u1EC3 t\u1EEB th\u1EF1c t\u1EBF?`);
    }
    if (query.toLowerCase().includes("chapter") || query.toLowerCase().includes("section")) {
      suggestions.push(`\xC1p d\u1EE5ng n\u1ED9i dung n\xE0y cho thi\u1EBFt k\u1EBF h\u1EC7 th\u1ED1ng hu\u1EA5n luy\u1EC7n qu\xE2n s\u1EF1 nh\u01B0 th\u1EBF n\xE0o?`);
    } else if (keyTerms.length > 1) {
      const term2 = keyTerms[0];
      suggestions.push(`M\u1ED1i quan h\u1EC7 gi\u1EEFa "${term2}" v\xE0 c\xE1c kh\xE1i ni\u1EC7m kh\xE1c trong ch\u01B0\u01A1ng n\xE0y?`);
    } else {
      suggestions.push(`So s\xE1nh v\u1EDBi c\xE1c ph\u01B0\u01A1ng ph\xE1p thi\u1EBFt k\u1EBF kh\xE1c (VDI 2221, Agile)?`);
    }
    if (keyTerms.length > 2) {
      const term3 = keyTerms[keyTerms.length - 1];
      suggestions.push(`Nh\u1EEFng sai l\u1EA7m ph\u1ED5 bi\u1EBFn khi \xE1p d\u1EE5ng "${term3}" trong th\u1EF1c t\u1EBF?`);
    } else {
      suggestions.push(`Nh\u1EEFng sai l\u1EA7m ph\u1ED5 bi\u1EBFn v\xE0 c\xE1ch tr\xE1nh khi \xE1p d\u1EE5ng trong th\u1EF1c t\u1EBF?`);
    }
    return suggestions;
  }
  clearTimeout() {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = null;
    }
  }
};

// src/SidebarView.ts
var import_obsidian2 = require("obsidian");

// src/NlmModal.ts
var import_obsidian = require("obsidian");
var NlmModal = class extends import_obsidian.Modal {
  constructor(app, notebooks, nlmCommands, onSubmit, prefill) {
    super(app);
    this.selectedCommand = "query";
    this.selectedNotebooks = [];
    this.queryText = "";
    // UI elements that need dynamic updates
    this.queryContainer = null;
    this.notebookContainer = null;
    this.extraNotebookContainer = null;
    this.notebooks = notebooks;
    this.nlmCommands = nlmCommands;
    this.onSubmit = onSubmit;
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
  onOpen() {
    const { contentEl } = this;
    contentEl.addClass("nlm-modal");
    contentEl.createEl("h3", { text: "NLM Notebook Query" });
    new import_obsidian.Setting(contentEl).setName("L\u1EC7nh").setDesc("Ch\u1ECDn lo\u1EA1i l\u1EC7nh NLM").addDropdown((dropdown) => {
      for (const cmd of this.nlmCommands) {
        dropdown.addOption(cmd.id, `${cmd.name} \u2014 ${cmd.description}`);
      }
      dropdown.setValue(this.selectedCommand);
      dropdown.onChange((value) => {
        this.selectedCommand = value;
        this.updateUI();
      });
    });
    this.notebookContainer = contentEl.createDiv();
    this.renderNotebookSelector();
    this.extraNotebookContainer = contentEl.createDiv();
    this.queryContainer = contentEl.createDiv();
    this.renderQueryInput();
    new import_obsidian.Setting(contentEl).addButton((btn) => {
      btn.setButtonText("Ch\u1EA1y").setCta().onClick(() => {
        if (!this.validate()) return;
        this.close();
      });
    }).addButton((btn) => {
      btn.setButtonText("H\u1EE7y").onClick(() => {
        this.selectedCommand = "";
        this.close();
      });
    });
    this.updateUI();
  }
  renderNotebookSelector() {
    if (!this.notebookContainer) return;
    this.notebookContainer.empty();
    new import_obsidian.Setting(this.notebookContainer).setName("Notebook").setDesc("Ch\u1ECDn notebook NLM").addDropdown((dropdown) => {
      for (const nb of this.notebooks) {
        dropdown.addOption(nb.alias, `${nb.alias} \u2014 ${nb.name}`);
      }
      dropdown.setValue(this.selectedNotebooks[0] || "");
      dropdown.onChange((value) => {
        this.selectedNotebooks[0] = value;
      });
    });
  }
  renderExtraNotebooks() {
    if (!this.extraNotebookContainer) return;
    this.extraNotebookContainer.empty();
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (!cmd?.multiNotebook) return;
    const maxExtra = (cmd.maxNotebooks || 3) - 1;
    for (let i = 0; i < maxExtra; i++) {
      const idx = i + 1;
      new import_obsidian.Setting(this.extraNotebookContainer).setName(`Notebook ${idx + 1}`).setDesc(i === 0 ? "Th\xEAm notebook cho cross-query" : "").addDropdown((dropdown) => {
        dropdown.addOption("", "(kh\xF4ng ch\u1ECDn)");
        for (const nb of this.notebooks) {
          dropdown.addOption(nb.alias, `${nb.alias} \u2014 ${nb.name}`);
        }
        dropdown.setValue(this.selectedNotebooks[idx] || "");
        dropdown.onChange((value) => {
          this.selectedNotebooks[idx] = value;
        });
      });
    }
  }
  renderQueryInput() {
    if (!this.queryContainer) return;
    this.queryContainer.empty();
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (!cmd?.requiresQuery) return;
    const setting = new import_obsidian.Setting(this.queryContainer).setName("Query").setDesc("Nh\u1EADp c\xE2u h\u1ECFi cho notebook");
    setting.addTextArea((textArea) => {
      textArea.setPlaceholder(
        "V\xED d\u1EE5: Summarize Chapter 2. What are the 7 types of interrelationships?"
      );
      textArea.setValue(this.queryText);
      textArea.onChange((value) => {
        this.queryText = value;
      });
      textArea.inputEl.rows = 4;
      textArea.inputEl.style.width = "100%";
      textArea.inputEl.style.minHeight = "100px";
      textArea.inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
          if (this.validate()) {
            this.close();
          }
        }
      });
      setTimeout(() => textArea.inputEl.focus(), 50);
    });
  }
  updateUI() {
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (this.queryContainer) {
      this.queryContainer.empty();
      if (cmd?.requiresQuery) {
        this.renderQueryInput();
      }
    }
    if (this.extraNotebookContainer) {
      this.extraNotebookContainer.empty();
      if (cmd?.multiNotebook) {
        this.renderExtraNotebooks();
      }
    }
  }
  validate() {
    const cmd = this.nlmCommands.find((c) => c.id === this.selectedCommand);
    if (cmd?.requiresQuery && !this.queryText.trim()) {
      new import_obsidian.Notice("Vui l\xF2ng nh\u1EADp query");
      return false;
    }
    if (this.selectedNotebooks.length === 0 || !this.selectedNotebooks[0]) {
      new import_obsidian.Notice("Vui l\xF2ng ch\u1ECDn notebook");
      return false;
    }
    if (cmd?.multiNotebook) {
      const validNbs = this.selectedNotebooks.filter((n) => n);
      if (validNbs.length < 2) {
        new import_obsidian.Notice("Cross-query c\u1EA7n \xEDt nh\u1EA5t 2 notebooks");
        return false;
      }
    }
    return true;
  }
  onClose() {
    if (!this.selectedCommand) {
      this.onSubmit(null);
    } else {
      this.onSubmit({
        command: this.selectedCommand,
        notebookIds: this.selectedNotebooks.filter((n) => n),
        query: this.queryText.trim()
      });
    }
    this.contentEl.empty();
  }
};

// src/SidebarView.ts
var VIEW_TYPE = "claude-bridge-sidebar";
var SidebarView = class extends import_obsidian2.ItemView {
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
    const header = container.createDiv("claude-bridge-header");
    header.createSpan({ text: "Claude Bridge" });
    this.statusDot = header.createSpan("claude-bridge-status-dot");
    this.statusDot.addClass("idle");
    const commands = this.plugin.commands;
    const groups = this.plugin.groups;
    const sortedGroups = Object.entries(groups).sort(
      ([, a], [, b]) => a.order - b.order
    );
    for (const [groupId, groupDef] of sortedGroups) {
      const groupCmds = commands.filter((c) => c.group === groupId);
      if (groupCmds.length === 0) continue;
      const groupEl = container.createDiv("claude-bridge-group");
      const groupHeader = groupEl.createDiv("claude-bridge-group-header");
      const chevron = groupHeader.createSpan("claude-bridge-chevron");
      (0, import_obsidian2.setIcon)(chevron, "chevron-right");
      groupHeader.createSpan({ text: groupDef.label });
      const groupBody = groupEl.createDiv("claude-bridge-group-body");
      groupBody.addClass("collapsed");
      groupHeader.addEventListener("click", () => {
        groupBody.toggleClass("collapsed", !groupBody.hasClass("collapsed"));
        (0, import_obsidian2.setIcon)(
          chevron,
          groupBody.hasClass("collapsed") ? "chevron-right" : "chevron-down"
        );
      });
      for (const cmd of groupCmds) {
        const btn = groupBody.createDiv("claude-bridge-cmd-btn");
        const iconEl = btn.createSpan("claude-bridge-cmd-icon");
        (0, import_obsidian2.setIcon)(iconEl, cmd.icon);
        btn.createSpan({ text: cmd.name });
        btn.addEventListener("click", () => this.runCommand(cmd));
      }
    }
    if (this.plugin.nlmConfig.notebooks.length > 0) {
      const nlmGroup = container.createDiv("claude-bridge-group");
      const nlmHeader = nlmGroup.createDiv("claude-bridge-group-header");
      const nlmChevron = nlmHeader.createSpan("claude-bridge-chevron");
      (0, import_obsidian2.setIcon)(nlmChevron, "chevron-right");
      nlmHeader.createSpan({ text: "NLM Notebooks" });
      const nlmBody = nlmGroup.createDiv("claude-bridge-group-body");
      nlmBody.addClass("collapsed");
      nlmHeader.addEventListener("click", () => {
        nlmBody.toggleClass("collapsed", !nlmBody.hasClass("collapsed"));
        (0, import_obsidian2.setIcon)(
          nlmChevron,
          nlmBody.hasClass("collapsed") ? "chevron-right" : "chevron-down"
        );
      });
      const nlmBtn = nlmBody.createDiv("claude-bridge-cmd-btn");
      const nlmIcon = nlmBtn.createSpan("claude-bridge-cmd-icon");
      (0, import_obsidian2.setIcon)(nlmIcon, "message-square");
      nlmBtn.createSpan({ text: "Query Notebook" });
      nlmBtn.addEventListener("click", () => this.openNlmModal());
    }
    this.progressEl = container.createDiv("claude-bridge-progress");
    container.createDiv("claude-bridge-divider").createSpan({
      text: "Output"
    });
    this.outputEl = container.createDiv("claude-bridge-output");
    this.outputEl.addEventListener("scroll", () => {
      if (!this.outputEl) return;
      const { scrollTop, scrollHeight, clientHeight } = this.outputEl;
      this.autoScroll = scrollHeight - scrollTop - clientHeight < 50;
    });
    this.actionBar = container.createDiv("claude-bridge-actions");
    this.renderActionBar(false);
    this.plugin.runner.on("progress", (step) => {
      this.setProgress(step);
    });
    this.plugin.runner.on("output", (chunk) => {
      this.appendOutput(chunk);
    });
    this.plugin.runner.on("result", (text) => {
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
    this.plugin.nlmRunner.on("progress", (step) => {
      this.setProgress(step);
    });
    this.plugin.nlmRunner.on("output", (chunk) => {
      this.appendOutput(chunk);
    });
    this.plugin.nlmRunner.on("result", (text) => {
      if (this.nlmAccumulatedOutput) {
        if (this.outputEl) {
          this.outputEl.empty();
          this.outputEl.removeAttribute("data-raw");
        }
        this.appendOutput(this.nlmAccumulatedOutput + text);
        this.nlmAccumulatedOutput = "";
      } else {
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
    const modal = new NlmModal(
      this.app,
      config.notebooks,
      config.commands,
      (result) => {
        if (!result) return;
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
            timeout: this.plugin.settings.timeout
          }
        );
      }
    );
    modal.open();
  }
  async runCommand(cmd) {
    let skillArgs = cmd.skillArgs || "";
    if (cmd.promptForArgs) {
      const userInput = await this.promptForInput(
        cmd.name,
        cmd.argsPlaceholder || "Enter arguments..."
      );
      if (userInput === null) return;
      skillArgs = skillArgs ? `${skillArgs} ${userInput}` : userInput;
    }
    this.lastCommandId = cmd.id;
    this.lastCommandName = cmd.name;
    this.lastSaveTarget = cmd.saveTarget;
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
      timeout: cmd.timeout || settings.timeout
    });
  }
  promptForInput(title, placeholder) {
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
  setProgress(step) {
    if (!this.progressEl) return;
    this.progressEl.empty();
    const line = this.progressEl.createDiv("claude-bridge-progress-line");
    if (step.startsWith("Done")) {
      line.createSpan({ text: "\u2705 ", cls: "claude-bridge-progress-icon" });
    } else if (step.startsWith("Error")) {
      line.createSpan({ text: "\u274C ", cls: "claude-bridge-progress-icon" });
    } else {
      line.createSpan({ text: "\u23F3 ", cls: "claude-bridge-progress-icon" });
    }
    line.createSpan({ text: step });
  }
  appendOutput(text) {
    if (!this.outputEl) return;
    const existing = this.outputEl.getAttribute("data-raw") || "";
    const updated = existing + text;
    this.outputEl.setAttribute("data-raw", updated);
    this.outputEl.empty();
    import_obsidian2.MarkdownRenderer.render(
      this.app,
      updated,
      this.outputEl,
      "",
      this.plugin
    );
    this.attachNlmFollowUpHandlers();
    if (this.autoScroll) {
      this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }
  }
  /**
   * Find all .nlm-followup links in the output and attach click handlers.
   * Clicking opens NlmModal pre-filled with the suggestion query.
   */
  attachNlmFollowUpHandlers() {
    if (!this.outputEl) return;
    const links = this.outputEl.querySelectorAll("a.nlm-followup");
    links.forEach((link) => {
      const el = link;
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
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const query = el.getAttribute("data-nlm-query") || "";
        const notebooks = (el.getAttribute("data-nlm-notebooks") || "").split(",").filter((n) => n);
        const command = el.getAttribute("data-nlm-command") || "query";
        this.openNlmModalPrefilled({
          query,
          command,
          notebookIds: notebooks
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
    const modal = new NlmModal(
      this.app,
      config.notebooks,
      config.commands,
      (result) => {
        if (!result) return;
        if (this.outputEl) {
          const currentRaw = this.outputEl.getAttribute("data-raw") || "";
          const lastSepIdx = currentRaw.lastIndexOf("\n---\n");
          const hasFollowUps = currentRaw.includes("nlm-followup");
          if (lastSepIdx > 0 && hasFollowUps) {
            this.nlmAccumulatedOutput = currentRaw.slice(0, lastSepIdx);
          } else {
            this.nlmAccumulatedOutput = currentRaw;
          }
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
            timeout: this.plugin.settings.timeout
          }
        );
      },
      prefill
    );
    modal.open();
  }
  setRunningState(running) {
    if (this.statusDot) {
      this.statusDot.removeClass("idle", "running");
      this.statusDot.addClass(running ? "running" : "idle");
    }
    const buttons = this.containerEl.querySelectorAll(".claude-bridge-cmd-btn");
    buttons.forEach((btn) => {
      btn.toggleClass("dimmed", running);
    });
    this.renderActionBar(running);
  }
  renderActionBar(running) {
    if (!this.actionBar) return;
    this.actionBar.empty();
    if (running) {
      const stopBtn = this.actionBar.createDiv("claude-bridge-action-btn stop");
      (0, import_obsidian2.setIcon)(stopBtn.createSpan(), "square");
      stopBtn.createSpan({ text: "Stop" });
      stopBtn.addEventListener("click", () => {
        this.plugin.runner.abort();
        this.plugin.nlmRunner.abort();
        this.setRunningState(false);
      });
    }
    const hasOutput = this.plugin.runner.getOutput().length > 0 || this.plugin.nlmRunner.getOutput().length > 0;
    if (hasOutput && !running) {
      const saveBtn = this.actionBar.createDiv("claude-bridge-action-btn save");
      (0, import_obsidian2.setIcon)(saveBtn.createSpan(), "save");
      saveBtn.createSpan({ text: "Save to Vault" });
      saveBtn.addEventListener("click", () => {
        this.plugin.vaultWriter.save({
          commandId: this.lastCommandId,
          commandName: this.lastCommandName,
          output: this.plugin.runner.getOutput() || this.plugin.nlmRunner.getOutput(),
          saveTarget: this.lastSaveTarget,
          defaultSaveFolder: this.plugin.settings.defaultSaveFolder
        });
      });
    }
  }
};
var ArgsInputModal = class extends import_obsidian2.Modal {
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
    new import_obsidian2.Setting(contentEl).setName("Arguments").addText((text) => {
      text.setPlaceholder(this.placeholder);
      text.onChange((value) => {
        inputValue = value;
      });
      text.inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.result = inputValue;
          this.close();
        }
      });
      setTimeout(() => text.inputEl.focus(), 50);
    });
    new import_obsidian2.Setting(contentEl).addButton((btn) => {
      btn.setButtonText("Run").setCta().onClick(() => {
        this.result = inputValue;
        this.close();
      });
    }).addButton((btn) => {
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
};

// src/VaultWriter.ts
var import_obsidian3 = require("obsidian");
var VaultWriter = class {
  constructor(app) {
    this.app = app;
  }
  async save(opts) {
    const { commandId, commandName, output, saveTarget, defaultSaveFolder } = opts;
    const folder = defaultSaveFolder || saveTarget;
    const dateStr = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    let filename = `${dateStr} Claude ${commandId}.md`;
    let filepath = (0, import_obsidian3.normalizePath)(`${folder}/${filename}`);
    let counter = 2;
    while (this.app.vault.getAbstractFileByPath(filepath)) {
      filename = `${dateStr} Claude ${commandId} (${counter}).md`;
      filepath = (0, import_obsidian3.normalizePath)(`${folder}/${filename}`);
      counter++;
    }
    const content = [
      "---",
      `created: ${dateStr}`,
      "type: claude-output",
      "source: obsidian-claude-bridge",
      `command: ${commandId}`,
      "---",
      "",
      `# ${commandName} \u2014 ${dateStr}`,
      "",
      output
    ].join("\n");
    try {
      const folderNorm = (0, import_obsidian3.normalizePath)(folder);
      if (!this.app.vault.getAbstractFileByPath(folderNorm)) {
        await this.app.vault.createFolder(folderNorm);
      }
      const file = await this.app.vault.create(filepath, content);
      await this.app.workspace.getLeaf(true).openFile(file);
      new import_obsidian3.Notice(`Saved to ${filepath}`);
      return filepath;
    } catch (err) {
      new import_obsidian3.Notice(`Failed to save: ${err}`);
      return null;
    }
  }
};

// main.ts
var DEFAULT_SETTINGS = {
  claudePath: "claude",
  nlmPath: "nlm",
  vaultAsWorkdir: true,
  defaultSaveFolder: "",
  timeout: 120,
  galaxyWatcherEnabled: true,
  lastAnalystTrapRatio: "",
  lastAnalystTrapDate: ""
};
var ClaudeBridgePlugin = class extends import_obsidian4.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.runner = new CommandRunner();
    this.nlmRunner = new NlmRunner();
    this.vaultWriter = new VaultWriter(this.app);
    this.commands = [];
    this.groups = {};
    this.nlmConfig = { notebooks: [], commands: [] };
    this.statusBarEl = null;
  }
  async onload() {
    await this.loadSettings();
    await this.loadCommands();
    await this.loadNlmConfig();
    this.registerView(VIEW_TYPE, (leaf) => new SidebarView(leaf, this));
    this.addRibbonIcon("terminal", "Claude Bridge", () => {
      this.activateView();
    });
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
        }
      });
    }
    this.addCommand({
      id: "claude-reload-commands",
      name: "Claude: Reload Commands",
      callback: async () => {
        await this.loadCommands();
        new import_obsidian4.Notice(`Loaded ${this.commands.length} commands`);
      }
    });
    this.setupGalaxyWatcher();
    this.setupStatusBar();
    this.runner.on("result", (text) => {
      this.tryUpdateAnalystTrapRatio(text);
    });
  }
  onunload() {
    this.runner.abort();
    this.runner.removeAllListeners();
    this.nlmRunner.abort();
    this.nlmRunner.removeAllListeners();
  }
  // ── Galaxy Vault Watcher ──
  // Watches for new files in 5_Galaxy/ and prompts to run galaxy-gate
  setupGalaxyWatcher() {
    const onFileCreate = (0, import_obsidian4.debounce)(
      (file) => {
        if (!this.settings.galaxyWatcherEnabled) return;
        if (!file.path.startsWith("5_Galaxy/")) return;
        if (!file.path.endsWith(".md")) return;
        const notice = new import_obsidian4.Notice("", 1e4);
        const container = notice.noticeEl;
        container.empty();
        const msg = container.createDiv();
        msg.createEl("strong", { text: "New Galaxy note detected" });
        msg.createEl("br");
        msg.createSpan({
          text: file.basename,
          cls: "claude-bridge-notice-file"
        });
        const btnRow = container.createDiv({
          cls: "claude-bridge-notice-actions"
        });
        const runBtn = btnRow.createEl("button", {
          text: "Run Galaxy Gate",
          cls: "mod-cta"
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
      1e3,
      true
    );
    this.registerEvent(this.app.vault.on("create", (file) => {
      if (file instanceof import_obsidian4.TFile) {
        onFileCreate(file);
      }
    }));
  }
  async runGalaxyGate(noteName) {
    await this.activateView();
    const galaxyGateCmd = this.commands.find((c) => c.id === "galaxy-gate");
    if (!galaxyGateCmd) {
      new import_obsidian4.Notice("Galaxy Gate command not found in commands.json");
      return;
    }
    const vaultPath = this.app.vault.adapter.basePath || "";
    this.runner.runSkill(
      galaxyGateCmd.skillFile,
      `Check this newly created note: ${noteName}`,
      {
        claudePath: this.settings.claudePath,
        cwd: this.settings.vaultAsWorkdir ? vaultPath : process.cwd(),
        timeout: galaxyGateCmd.timeout || this.settings.timeout
      }
    );
  }
  // ── Status Bar Widget ──
  // Shows last analyst-trap ratio in Obsidian's bottom status bar
  setupStatusBar() {
    this.statusBarEl = this.addStatusBarItem();
    this.statusBarEl.addClass("claude-bridge-statusbar");
    this.updateStatusBar();
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
  updateStatusBar() {
    if (!this.statusBarEl) return;
    const ratio = this.settings.lastAnalystTrapRatio;
    const date = this.settings.lastAnalystTrapDate;
    if (ratio) {
      this.statusBarEl.setText(`A:P ${ratio}`);
      this.statusBarEl.setAttribute(
        "aria-label",
        `Analyst:Physical ratio \u2014 ${date || "unknown date"}
Click to refresh`
      );
    } else {
      this.statusBarEl.setText("A:P \u2014");
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
  async tryUpdateAnalystTrapRatio(text) {
    const ratioMatch = text.match(/(\d+\.?\d*)\s*:\s*1/);
    if (!ratioMatch) return;
    const looksLikeAnalystTrap = text.toLowerCase().includes("analyst") || text.toLowerCase().includes("analytical") || text.toLowerCase().includes("physical") || text.toLowerCase().includes("ratio");
    if (!looksLikeAnalystTrap) return;
    this.settings.lastAnalystTrapRatio = `${ratioMatch[1]}:1`;
    this.settings.lastAnalystTrapDate = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    await this.saveSettings();
    this.updateStatusBar();
  }
  // ── View management ──
  async activateView() {
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
  getView() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE);
    if (leaves.length > 0) {
      return leaves[0].view;
    }
    return null;
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async loadCommands() {
    try {
      const pluginDir = this.manifest.dir;
      if (!pluginDir) {
        this.commands = [];
        this.groups = {};
        return;
      }
      const configPath = `${pluginDir}/commands.json`;
      const raw = await this.app.vault.adapter.read(configPath);
      const config = JSON.parse(raw);
      this.commands = config.commands || [];
      this.groups = config.groups || {};
    } catch (err) {
      console.error("Claude Bridge: Failed to load commands.json", err);
      new import_obsidian4.Notice("Claude Bridge: Failed to load commands.json");
      this.commands = [];
      this.groups = {};
    }
  }
  async loadNlmConfig() {
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
  getVaultPath() {
    return this.app.vault.adapter.basePath || "";
  }
};
