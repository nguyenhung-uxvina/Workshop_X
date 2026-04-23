# PreToolUse Hook — Blocking Flow (Sequence Diagram)

## Excalidraw Link
https://excalidraw.com/#json=5DRDF1LElEEGOxa0Q75B8,ohwy-TF-W6cEA505Vr-YRQ

## What This Shows

A UML sequence diagram with 4 actors: **User → Claude Code → Hook Script → Tool**

### Scenario 1: BLOCKED (exit 2)
1. User asks Claude to `Write to .env`
2. Claude Code fires **PreToolUse** event before executing
3. Hook script (`security-guard.ps1`) checks file extension → `.env` matches deny list
4. Hook returns **exit 2** + reason string → tool is **blocked**, never executes
5. Claude reports the block back to user

### Scenario 2: ALLOWED (exit 0)
1. User asks Claude to `Write output.md`
2. Same PreToolUse event fires
3. Hook checks `.md` → safe, returns **exit 0**
4. Tool executes normally, result flows back to user

## Exit Code Reference
| Code | Meaning | Tool Runs? |
|------|---------|------------|
| 0 | Allow | Yes |
| 1 | Hook error | Yes (hook failure doesn't block) |
| 2 | **BLOCK** | **No** — tool never executes |

## What I Learned
- PreToolUse hooks act as **gatekeepers** — they intercept tool calls *before* execution
- Exit code 2 is the **only** way to block; exit 1 (error) still allows the tool to run
- The hook receives the tool name and input as JSON on stdin, enabling pattern matching on file paths, content, etc.
- This is the architectural basis for the `security-guard.ps1` hook configured in this project
