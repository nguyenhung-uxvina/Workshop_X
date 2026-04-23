# Exercise 3 — Background Agent

## What happened
- Spawned a background Explore/Haiku agent with `run_in_background: true`
- Agent task: scan all exercises/ dirs and produce a summary report
- Main thread continued writing THIS file while agent ran

## Key mechanics
- `run_in_background: true` → Task tool returns immediately with `agentId` and `output_file` path
- Main agent is NOT blocked — can do parallel work
- Output written to: `C:\Users\ADMIN\AppData\Local\Temp\claude\...\tasks\<agentId>.output`
- Check progress: `Read output_file` or `Bash tail output_file`
- When done: system notifies automatically

## When to use background agents
- Long-running scans or builds
- Fire-and-forget logging or archiving
- Any task where you don't need the result before your next step

## Agent output

| Day | Files | Practice Topic |
|-----|-------|----------------|
| Day 1 | README.md | CLAUDE.md hierarchy, config, habits |
| Day 2 | README.md | Slash commands + auto-activating skills |
| Day 3 | README.md, hook_demo.py | Hooks: PostToolUse, PreToolUse, PreCompact, Notification |
| Day 4 | README.md + 11 files | MCP servers, diagrams, excalidraw integration |
| Day 5 | README.md | Subagents, Task tool, parallelization |

**Totals:** 5 dirs, 19 files
