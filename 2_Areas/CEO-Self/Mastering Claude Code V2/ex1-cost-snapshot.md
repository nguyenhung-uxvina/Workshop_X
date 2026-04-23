# Exercise 1 — /cost Snapshot

## Output
```
You are currently using your subscription to power your Claude Code usage
```

## What this means
On a Claude Pro/Max subscription, `/cost` does NOT show per-token dollar amounts.
It shows subscription usage, not API billing.

Per-token cost tracking (`$0.XX`) only appears when using Claude Code
via an **API key** (pay-per-token billing), not a subscription plan.

## What /cost still gives you (subscription)
- Confirmation of which account/plan is active
- A habit checkpoint — forces you to think "am I being efficient?"
- On API billing: session tokens, cache hit %, estimated $ spend

## The habit still matters
Even without dollar numbers, the `/cost` habit trains you to:
1. Pause and assess before launching expensive operations
2. Notice when context is bloated (many messages = high token usage)
3. Decide: is this task worth a fresh /compact first?

## Workaround: measure token efficiency instead
Since $ cost isn't visible, track *task efficiency* instead:
- Subagent token counts (shown in Task tool return: `total_tokens`)
- Duration per task
- Tool calls per task (fewer = more efficient prompting)

From Day 5 exercises:
| Task | Tokens | Tool calls | Duration |
|------|--------|------------|----------|
| Haiku file search | 43k | 2 | 14s |
| Parallel x2 Haiku | 45k total | 2+2 | ~30s |
| Background scan | 36k | 6 | 18s |
| Resume follow-up | 37k | 0 | 3s |
| Haiku summary | 23k | 1 | 5.6s |
| Sonnet summary | 23k | 1 | 11.7s |
