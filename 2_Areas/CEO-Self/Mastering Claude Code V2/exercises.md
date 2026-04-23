# CC-Mastery-V2 Exercises Documentation

**Version:** 1.0
**Last Updated:** 2026-02-25
**Context:** Learning workspace for Claude Code power user mastery

---

## Overview

The `exercises/` directory contains a structured 14-day skill acquisition program designed to master the Claude Code Power User Checklist. This directory is the **practical learning hub** for the CC-Mastery-V2 project, containing hands-on tasks, real exercises, and step-by-step guidance for developing expertise across three key layers:

- **Extension Layer**: CLAUDE.md, Commands, Skills, Hooks, MCP servers
- **Delegation Layer**: Subagents, Agent Teams, Git Worktrees
- **Core Layer**: /compact, /cost, Ultrathink, Headless CI/CD

Each day's exercises build incrementally on prior knowledge, following a proven methodology for rapid skill acquisition (D-M-I-R framework: Discover → Master → Integrate → Reflect).

**Purpose**: Hands-on practice combined with conceptual learning to transform Claude Code usage from basic to expert level in 14 days.

---

## Directory Structure

```
exercises/
├── CLAUDE.md              ← Exercise context rules (isolates practice from main project)
├── day-01/
│   └── README.md          ← Day 1: CLAUDE.md Hierarchy + Config + Habits
├── day-02/
│   └── README.md          ← Day 2: Commands + Skills
├── day-03/                ← (Planned) Hooks
├── ...
├── day-14/                ← (Planned) Integration + Capstone
└── [outputs]/             ← Practice results saved here (auto-generated during exercises)
```

### Directory Purpose

| Location | Purpose |
|----------|---------|
| `exercises/CLAUDE.md` | Context-level rules ensuring exercises don't modify files outside this directory |
| `exercises/day-NN/` | Each day contains a `README.md` with theory, exercises, and completion checklists |
| `exercises/day-NN/outputs/` | Learner saves practice outputs here (commands, skills, test results) |

---

## Per-Exercise Documentation

### Day 1: CLAUDE.md Hierarchy + Config + Habits

**File**: `d:\UxV\engineering-projects\CC-Mastery-V2\exercises\day-01\README.md`

#### Purpose & Learning Objective

Master the foundational layer of Claude Code customization: understanding how CLAUDE.md files cascade across project hierarchy, configuring essential settings (autocompact, subagent model, token limits), and establishing first-day habits (cost tracking, context management).

**Key Objectives**:
1. Understand 4-level CLAUDE.md hierarchy (global → project → subdirectory → module)
2. Configure settings.json for cost efficiency and context management
3. Establish daily habits: `/cost` first command, `/compact` for context cleanup
4. Learn file reference syntax (@) to eliminate copy-paste workflow

#### Tasks/Activities

| # | Exercise | Duration | Deliverable |
|---|----------|----------|-------------|
| 1 | Understand CLAUDE.md Hierarchy | 10 min | Demonstrate all 4 CLAUDE.md levels visible to Claude; create `exercises/CLAUDE.md` |
| 2 | Master @ File References | 5 min | Use `@filename`, `@directory/`, `@CLAUDE.md` in three separate prompts |
| 3 | /cost and /compact Habits | 5 min | Practice `/cost` check and `/compact` context reduction in single session |
| 4 | Keyboard Shortcuts | 5 min | Master 7 shortcuts: Esc×2, Ctrl+C, !, @, /, Ctrl+R, Shift+Tab |
| 5 | Thinking Modes | 5 min | Test `think`, `think harder`, and `ultrathink` modes; understand 90-9-1 distribution |

#### Dependencies

- Claude Code installed and configured
- Global `~/.claude/CLAUDE.md` already created
- Project `CC-Mastery-V2/CLAUDE.md` already in place
- Basic familiarity with terminal

#### Expected Outputs

- [ ] 3 CLAUDE.md files visible (global + project + exercises/)
- [ ] At least 3 @ reference prompts executed successfully
- [ ] `/cost` tracked and `/compact` reduction demonstrated
- [ ] 7 keyboard shortcuts verified working
- [ ] Understanding of when to use each thinking mode (90% normal, 9% think, 1% ultrathink)

#### Completion Checklist (from Day 1 README)

```
[x] ☑1  CLAUDE.md in project (CC-Mastery-V2/CLAUDE.md)
[x] ☑2  Global ~/.claude/CLAUDE.md
[x] ☑7  Practiced @ file refs (no copy-paste rule installed)
[x] ☑12 AUTOCOMPACT_PCT=80 configured, /compact practiced
[x] ☑13 /cost habit — first command every session
```

#### Key Concepts

- **CLAUDE.md Cascade**: Global → Project → Directory → Module (folder-level overrides project-level)
- **@ References**: Better than copy-paste; Claude reads file directly without token overhead
- **Context Management**: Track context usage every 30 minutes with `/cost`; auto-compact at 80% threshold
- **Thinking Modes Distribution**: 90% standard responses, 9% "think/think harder" for complex logic, 1% "ultrathink" for architecture decisions

---

### Day 2: Commands + Skills

**File**: `d:\UxV\engineering-projects\CC-Mastery-V2\exercises\day-02\README.md`

#### Purpose & Learning Objective

Build the automation layer by mastering slash commands (manual trigger) and auto-activating skills (context-triggered). Understand the spectrum from manual CLAUDE.md instructions → manually-triggered commands → automatically-triggered skills → guaranteed hooks.

**Key Objectives**:
1. Distinguish between commands (you trigger) vs. skills (Claude auto-detects)
2. Use pre-built commands: `/project:research`, `/project:review`, `/project:gen-tests`, `/project:gen-doc`
3. Test pre-built skills: DfX Review, Gate Review (auto-trigger on specific keywords)
4. Create custom command with `$ARGUMENTS` parameter substitution
5. Create custom skill with trigger keywords and auto-activating behavior

#### Tasks/Activities

| # | Exercise | Duration | Deliverable |
|---|----------|----------|-------------|
| 1 | Use Slash Commands | 10 min | Execute 4 commands; observe file reading and analysis format |
| 2 | Understand Command Anatomy | 5 min | Analyze `.claude/commands/research.md`; document YAML + body structure |
| 3 | Create Custom Command | 10 min | Build `/project:explain` command with $ARGUMENTS substitution |
| 4 | Test Auto-Activating Skills | 10 min | Trigger DfX Review and Gate Review skills via context matching |
| 5 | Create Custom Skill | 15 min | Build "Code Pattern Explainer" skill with 3 trigger keywords |

#### Dependencies

- Day 1 completed (CLAUDE.md + habits established)
- `.claude/commands/` directory structure in place
- `.claude/skills/` directory structure in place
- 4 pre-built commands available (research, gen-tests, gen-doc, review)
- 2 pre-built skills available (dfx-review, gate-review)

#### Expected Outputs

- [ ] All 4 pre-built commands verified working
- [ ] Custom `/project:explain` command created and tested
- [ ] DfX Review skill triggers on manufacturability context
- [ ] Gate Review skill triggers on gate review context
- [ ] "Code Pattern Explainer" skill auto-activates on pattern keywords (singleton, observer, factory, strategy)
- [ ] Understanding of commands vs. skills decision matrix

#### Completion Checklist (from Day 2 README)

```
[x] ☑3  3+ slash commands created (research, gen-tests, gen-doc, review = 4!)
[x] ☑6  2+ auto-activating skills (dfx-review, gate-review)
[ ] Practiced /project:research command
[ ] Practiced /project:review command
[ ] Created own command (explain.md)
[ ] Tested skill auto-activation (DfX trigger)
[ ] Tested skill auto-activation (Gate trigger)
[ ] Created own skill (pattern-explainer.md)
```

#### Key Concepts

- **Commands vs. Skills Spectrum**:
  ```
  CLAUDE.md → Commands → Skills → Hooks
  Manual     Manual      AUTO     GUARANTEED
  ```

- **Command Anatomy**:
  ```markdown
  ---
  description: One-liner shown in / menu
  ---
  Prompt body with $ARGUMENTS placeholder
  ```

- **Skill Auto-Triggers**: Context keywords cause Claude to automatically inject skill instructions
  - Trigger specificity matters (avoid broad keywords)
  - Skill 4 auto-activates when relevant context detected

- **Commands Decision Matrix**:
  - Use if: prompt typed > 3 times in a session
  - Benefit: Save token overhead by offloading to .claude/

- **Skills Decision Matrix**:
  - Use if: always want special formatting for topic X
  - Benefit: Zero effort — Claude auto-detects and applies

#### Advanced Concepts

From Day 2 Pro Tips:

> 1. **Commands vs Skills decision**: If you use same prompt > 3 times → make a command. If you always want format for topic X → make a skill.
>
> 2. **$ARGUMENTS magic**: Can pass multiple args (`/project:research src/*.py docs/*.md`) or questions (`/project:explain "Why async?"`)
>
> 3. **Skill trigger design**: Triggers must be SPECIFIC (avoid false positives). "DfM" ✅, "design" ❌

---

## Usage Guide

### How to Navigate Exercises

1. **Start with Day 1**: Complete all 5 exercises sequentially; do not skip to later days
2. **Read the README**: Each day's README.md contains theory, exercises, and checklists
3. **Follow Active Form Prompts**: Exercises use "do this now" language; follow exactly
4. **Test Immediately**: Run commands/skills as you create them; don't batch testing
5. **Save Outputs**: Store practice results in `exercises/day-NN/outputs/` subdirectory

### Recommended Daily Flow

```
1. Open Claude Code terminal in CC-Mastery-V2/
   $ claude

2. First action: Check token budget
   /cost

3. Read today's README
   Read @exercises/day-NN/README.md

4. Work through exercises sequentially
   (Estimated: 30-40 minutes per day)

5. Before closing session
   /cost                    # verify usage
   /compact                 # if > 80%
   /clear                   # if switching context
```

### Isolation & Safety

The `exercises/CLAUDE.md` file contains this critical rule:

> All files in this directory are practice exercises.
> Do NOT modify files outside exercises/ directory.

**This means**:
- All practice outputs stay isolated in `exercises/`
- Main project files remain untouched during learning
- Safe to experiment without breaking production code

### Command Invocation Examples

```bash
# List all available commands
/

# Use pre-built research command
/project:research CLAUDE.md

# Use pre-built review command
/project:review exercises/

# Use pre-built doc generation command
/project:gen-doc exercises/day-01/

# Use custom command with arguments
/project:explain "const x = useCallback(() => {...}, [dep])"

# Trigger skill manually (not typical — skills auto-trigger)
# Skills activate automatically when context matches keywords
```

---

## Relationships & Integration

### Connection to Project CLAUDE.md

The project `CLAUDE.md` file (`d:\UxV\engineering-projects\CC-Mastery-V2\CLAUDE.md`) defines:

- **Purpose**: This is a learning workspace for Claude Code power user mastery
- **Structure**: Includes exercises/, docs/, examples/ directories
- **Day Tracking**: Tracks which days have been completed
- **Behavior Overrides**: Emphasizes explanation over action; guides rather than auto-completes; uses Haiku subagents for efficiency
- **Output**: Practice results saved as markdown in `exercises/day-NN/`

**How Exercises Implement the Project Plan**:

| Project Plan Element | Exercise Implementation |
|----------------------|------------------------|
| 15 Power User Checklist items | 14 days × ~1 checklist per day |
| Extension Layer | Days 1-4 (CLAUDE.md, Commands, Skills, Hooks, MCP) |
| Delegation Layer | Days 5-7 (Subagents, Agent Teams, Git Worktrees) |
| Core Layer | Days 8-10 (/compact, /cost, Ultrathink, CI/CD) |
| Integration | Days 11-14 (Capstone project) |

### Connection to Master Plan

The master plan (`d:\UxV\engineering-projects\CC-Mastery-V2\claude-code-v2-mastery-final.md`) contains:

- Complete 15-item checklist with descriptions
- Resource links and reference material
- Architecture diagrams for each skill

**How Exercises Implement Master Plan**:
- Days 1-10 cover the foundational checklist items ☑1 through ☑10
- Days 11-14 integrate and validate all items
- Each exercise's checklist marks specific items as completed

### Skill Progression

```
Day 1:  Foundation (CLAUDE.md, /cost, @ refs)
  ↓
Day 2:  Automation (Commands, Skills)
  ↓
Day 3:  Guarantees (Hooks)
  ↓
Day 4:  External (MCP servers)
  ↓
Days 5-7: Delegation (Subagents, Teams, Worktrees)
  ↓
Days 8-10: Mastery (Compact, Cost, Ultrathink, CI/CD)
  ↓
Days 11-14: Integration (Capstone + Final Projects)
```

Each day builds on prior knowledge. Skipping days will create gaps; revisit earlier days if stuck.

### Files in This Documentation

This documentation (`docs/exercises.md`) serves as:

1. **Quick Reference**: Overview of all exercise structure
2. **Day Summaries**: What to expect from each day
3. **Completion Tracking**: Checklists for each day
4. **Relationship Mapping**: How exercises connect to project plan and master plan
5. **Usage Guide**: How to navigate and work through exercises

---

## Learning Framework: D-M-I-R

Exercises are designed following the **D-M-I-R (Discover → Master → Integrate → Reflect)** framework:

| Phase | In Exercises | Example (Day 1) |
|-------|---|---|
| **Discover** | Read theory section | Learn CLAUDE.md hierarchy (4 levels) |
| **Master** | Complete hands-on exercises | Create exercises/CLAUDE.md, test @ refs |
| **Integrate** | Apply to real project | Use @ refs in actual project code reviews |
| **Reflect** | Answer "what did you learn?" | Summary: "I can now use @ refs for any file" |

After completing exercises, add entries to `vault/learning-journal/` (from global CLAUDE.md) to lock in learning.

---

## Planned Days (3-14)

Based on `CLAUDE.md`, the following days are planned:

| Day | Focus | Estimated Items |
|-----|-------|-----------------|
| 3 | Hooks | ☑9 |
| 4 | MCP Servers | ☑10 |
| 5 | Subagents + Task Tool | ☑4, ☑5, ☑11 |
| 6 | Agent Teams | ☑8 |
| 7 | Git Worktrees | ☑14 |
| 8 | /compact + /cost | ☑12, ☑13 |
| 9 | Ultrathink | ☑15 |
| 10 | Headless CI/CD | ☑11 |
| 11-14 | Integration + Capstone | All items consolidated |

---

## Troubleshooting & FAQs

### Q: Should I complete all exercises before moving to the next day?

**A**: Yes. Each day builds on previous days' knowledge. Incomplete exercises create skill gaps. If time-constrained, do the Completion Checklist exercises first, then add bonus exercises later.

### Q: What if I don't understand an exercise?

**A**:
1. Re-read the theory section at the start of the day
2. Review related exercises from earlier days
3. Use `/project:research` to read related files
4. Ask Claude directly: "Explain Exercise X of Day Y"

### Q: Can I skip a day?

**A**: Not recommended. Skills in later days depend on earlier foundations:
- Days 1-2 are prerequisite for Days 3-4
- Days 3-4 are prerequisite for Days 5-7
- Days 5-10 provide context for Days 11-14

### Q: Where should I save outputs?

**A**: All practice outputs go in `exercises/day-NN/outputs/` subdirectory. The `exercises/CLAUDE.md` rule ensures nothing escapes this boundary.

### Q: What's the time commitment?

**A**: ~30-40 minutes per day × 14 days = ~7-9 hours total. Exercises can be done at your own pace.

### Q: Can I create exercises for Days 11-14?

**A**: Yes! Once Days 1-10 are complete, craft a capstone project using all prior skills. Document it as `exercises/day-11/capstone.md`.

---

## Quick Reference

### All Commands Available (Day 2)

```bash
/project:research FILE_OR_DIR     # Read and analyze
/project:review FILE_OR_DIR       # Code review
/project:gen-doc DIRECTORY        # Generate docs
/project:gen-tests MODULE         # Generate unit tests
/project:explain CODE_OR_FILE     # Explain in detail (custom)
```

### All Skills Available (Day 2)

```
Auto-trigger on keywords:
  - "DfM", "manufacturability" → DfX Review skill
  - "gate review", "G1", "G2", "G3" → Gate Review skill
  - "design pattern", "singleton", "observer" → Pattern Explainer (custom)
```

### Essential Keyboard Shortcuts (Day 1)

| Shortcut | Action |
|----------|--------|
| `Esc` × 2 | Undo to last checkpoint |
| `Ctrl+C` | Cancel generation |
| `!` | Run bash directly |
| `@` | Reference file |
| `/` | Show commands menu |
| `Ctrl+R` | Search history |
| `Shift+Tab` | Toggle Delegate mode |

### Session Habits (Day 1)

```
🔄 EVERY SESSION:
   → /cost (first command when opening)
   → Work on exercises
   → /cost (every 30 min)
   → /compact (if > 80%)
   → /clear (when changing context)
```

---

## Appendix: File Locations

All key files for exercises:

| File | Location | Purpose |
|------|----------|---------|
| Exercise context rules | `exercises/CLAUDE.md` | Isolation + safety |
| Day 1 exercises | `exercises/day-01/README.md` | CLAUDE.md + habits |
| Day 2 exercises | `exercises/day-02/README.md` | Commands + skills |
| Project config | `CLAUDE.md` | Project-level rules |
| Global config | `~/.claude/CLAUDE.md` | All-projects rules |
| Master plan | `claude-code-v2-mastery-final.md` | Full 14-day curriculum |
| This documentation | `docs/exercises.md` | Exercise reference (this file) |

---

**Version History**:
- v1.0 (2026-02-25): Initial documentation of Days 1-2; planned structure for Days 3-14
