# Exercise 5 — 3-Worktree Design

## Scenario: BB-01 (LOMAH) Gate 2 Preparation

Gate 2 requires three parallel streams of work that are independent
but must converge before the gate review. Perfect worktree use case.

## Design

```
../bb-01/                          [master]          Sonnet/Opus
../bb-01-requirements/             [feature/req-v2]  Haiku
../bb-01-dfx/                      [feature/dfx]     Haiku
```

### Worktree 1 — Main (master)
```bash
git worktree add ../bb-01-requirements feature/req-v2
git worktree add ../bb-01-dfx feature/dfx
```

| Property | Value |
|----------|-------|
| Directory | `../bb-01/` (main) |
| Branch | `master` |
| Model | Opus |
| Task | Gate 2 review, arbitration, final approval |
| Claude does | Reads outputs from WT2 + WT3, runs /gate, makes go/no-go |

### Worktree 2 — Requirements (feature/req-v2)
| Property | Value |
|----------|-------|
| Directory | `../bb-01-requirements/` |
| Branch | `feature/req-v2` |
| Model | Haiku |
| Task | Quantify vague requirements, add MIL-STD mappings, hit ≥80% quantified |
| Claude does | Edits requirements_list.md only — no overlap with WT3 |

### Worktree 3 — DfX Review (feature/dfx)
| Property | Value |
|----------|-------|
| Directory | `../bb-01-dfx/` |
| Branch | `feature/dfx` |
| Model | Haiku |
| Task | Run /dfx-all, flag corrosion/thermal/wear issues, write dfx_review.md |
| Claude does | Reads layout files, writes dfx_review.md only — no overlap with WT2 |

## Setup commands
```bash
cd ~/projects/bb-01

# Create worktrees
git worktree add ../bb-01-requirements -b feature/req-v2
git worktree add ../bb-01-dfx -b feature/dfx

# Terminal 1 — Gate lead
cd ~/projects/bb-01 && claude

# Terminal 2 — Requirements Haiku
cd ~/projects/bb-01-requirements && claude --model haiku

# Terminal 3 — DfX Haiku
cd ~/projects/bb-01-dfx && claude --model haiku
```

## Merge sequence (after all streams complete)
```bash
cd ~/projects/bb-01
git merge feature/req-v2   # pull in quantified requirements
git merge feature/dfx      # pull in DfX report
# Now run /gate — all inputs present in master
git worktree remove ../bb-01-requirements
git worktree remove ../bb-01-dfx
git branch -d feature/req-v2 feature/dfx
```

## Why this works
- WT2 and WT3 touch **different files** — no merge conflicts
- Haiku handles mechanical tasks (quantifying, checking checklists)
- Opus in main handles judgment (gate decision, arbitration)
- All three sessions run simultaneously — Gate 2 prep in parallel not serial
- `.git` is shared — commits from WT2/WT3 immediately visible to main after merge

## File ownership map (no conflicts)
| File | Owner |
|------|-------|
| `vault/projects/VN-XXX/requirements_list.md` | WT2 only |
| `vault/projects/VN-XXX/dfx_review.md` | WT3 only |
| `vault/projects/VN-XXX/gate2_report.md` | WT1 (main) only |
| `CLAUDE.md` | shared read-only — all worktrees inherit same config |
