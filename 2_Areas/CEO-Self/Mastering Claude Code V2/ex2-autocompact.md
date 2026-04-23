# Exercise 2 — AUTOCOMPACT_PCT

## Verified setting
`~/.claude/settings.json` → `"AUTOCOMPACT_PCT": "80"` ✅

## What it does
At 80% context window usage, Claude Code auto-runs /compact without prompting.
Frees context, preserves a dense summary, continues the session.

## Tradeoff analysis

| Value | Triggers at | Good | Bad |
|-------|-------------|------|-----|
| "50"  | Half full   | Max fresh context | Too early — wastes half the window, frequent interruptions |
| "80"  | 80% full ✅ | Efficient use + safe headroom | — |
| "95"  | Near limit  | Max context per session | May hit limit mid-task before compact fires |
| unset | Never       | No interruptions | Silent context loss — old messages silently dropped |

## Why 80 is correct
- 80% used = efficient (didn't waste the window)
- 20% remaining = enough headroom for the summary + next task setup
- Analogy: refuel at 20% remaining, not at 0% (stranded) or 80% (wasteful)

## Manual /compact vs auto-compact
Auto-compact is the safety net.
Manual /compact is the proactive habit — run it:
- Before a long agentic task (start clean)
- After completing a major milestone (clean slate)
- When Claude starts repeating itself (early warning sign of context saturation)
