# Exercises 4 & 5 — Team Dynamics + Anti-Pattern

## Exercise 4 — Observing the Discussion Dynamic

### Setup
Team: `day6-review` with 2 Haiku/Explore teammates
- `auditor` — checks "What I Learned" sections
- `critic` — checks output file presence

### Observations (actual outcome)
**Teammates never reported back.** Root cause: `Task()` with `team_name` spawns agents
whose natural output channel is the Task return value — not `SendMessage`. The agents
likely completed their scans and returned results internally, but never sent them to the
team lead via `SendMessage` because that requires the agent to explicitly call the tool.

**The mismatch:**
- `Task()` subagents → results flow back through the Task return value (automatic)
- `Agent Team` teammates → results flow via `SendMessage` (must be explicitly called)

Asking a Task-spawned agent to "send via SendMessage" works only if the agent reliably
chooses to call that tool. Explore-type agents deprioritized it and went idle instead.

### Expected dynamic
These two teammates have **complementary, non-overlapping scope** — auditor owns
content quality, critic owns file presence. They are NOT debating each other.

This is a borderline case: the tasks are independent (could be parallel subagents),
but assigning them as a team allows the lead to coordinate both results in one
structured context rather than two disconnected Task returns.

**Verdict for this task:** Parallel subagents would have been equally effective and
cheaper. A true team pattern would have auditor and critic read the SAME days and
challenge each other's assessments.

---

## Exercise 5 — When NOT to Use Teams (Anti-Pattern)

### Attempted
Tried to create team `antipattern-demo` to run "find Python files" as a team.

### What happened
```
Error: Already leading team "day6-review". A leader can only manage one team at a time.
```

### Lessons learned

**Constraint discovered:** Lead agent can only manage ONE active team at a time.
This is a hard architectural limit — teams must be deleted before creating a new one.

**The anti-pattern (analytical):**
If the system had allowed it, running "find Python files" as a 2-teammate team would have:
- Created a team overhead (TeamCreate, spawn 2 agents, SendMessage coordination)
- Had teammates with nothing to discuss — file search is deterministic, no opinions needed
- Cost 5-7x more tokens than: `Task(subagent_type="Explore", model="haiku", ...)`
- Taken longer due to coordination latency vs a single agent reading directly

### The rule
```
Does the task produce better output when agents ARGUE about it?
  YES → Agent Team
  NO  → Subagent (always cheaper, often faster)
```

File search, test runs, summarization, formatting, linting = always subagents.
Architecture debate, PR review, design tradeoffs = agent team candidates.

### Bonus constraint learned
- One active team per lead at a time
- Team must be deleted (TeamDelete) before creating a new one
- While a team is active, the lead's context is "occupied" — plan team lifecycle carefully
