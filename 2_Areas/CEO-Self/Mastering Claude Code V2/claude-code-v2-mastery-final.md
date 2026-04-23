# Claude Code V2 Power User Mastery Plan
## Skills Mastery System × Hamza Khalid's Cheatsheet (600K Views Edition)

> **Source**: Claude Code Power User Guide V2 by Hamza Khalid (2026)
> **Skill**: All 15 Power User Checklist items → Top 1% status
> **Constraints**: 2-4h evening sessions, existing CC + MCP foundation, active defense projects
> **Target**: Complete all 15 items in 14 days
> **Method**: Systems-based leverage point analysis, bottom-up layer mastery

---

## System Map

```
YOUR CURRENT STATE                    TARGET STATE (Day 14)
┌──────────────────┐                 ┌──────────────────────────┐
│ Core Layer only   │                │ 3-Layer Architecture      │
│ Single sessions   │    ────▶       │ Parallel orchestration    │
│ Manual workflows  │                │ Auto-skills + Hooks       │
│ ~1x velocity      │                │ ~5x velocity, 50% cost    │
└──────────────────┘                 └──────────────────────────┘

THE 3-LAYER COST MODEL (from cheatsheet Section 7):
┌─────────────────────────────────────────────────────┐
│  TOP     │ CORE — You + Opus — Orchestrate           │
│  TIER    │ Opus $2+ | Pro $20 | Max $100 | Max $200  │
├──────────┼───────────────────────────────────────────┤
│  MIDDLE  │ DELEGATION — Subagents                     │
│  TIER    │ Haiku/Sonnet — Heavy lifting               │
│          │ Sonnet $0.50 | Haiku $0.10 per session     │
├──────────┼───────────────────────────────────────────┤
│  BOTTOM  │ EXTENSION — MCP + Hooks                    │
│  TIER    │ Zero token cost                            │
└──────────┴───────────────────────────────────────────┘

Power users push everything DOWN to cheaper layers.
```

---

## The 10 Sections — Mapped to 14 Days

| # | Section | Cheatsheet Content | Your Day |
|---|---------|-------------------|----------|
| 1 | 7 Building Blocks | CLAUDE.md, Commands, Skills, Hooks, Subagents, Agent Teams, Plugins | Days 1-6 |
| 2 | CLAUDE.md Masterclass | What to PUT IN vs DON'T, 4-level hierarchy, keep root <15KB | Day 1 |
| 3 | Context Window Mastery | 200K tokens, Killers vs Savers, AUTOCOMPACT_PCT=80 | Day 1 |
| 4 | 14 Hook Events | Session, Tools, Agents, Other — 14 lifecycle events | Days 2-3 |
| 5 | Subagents vs Agent Teams | Parallel workers vs peer communication | Days 4-6 |
| 6 | Top 10 MCP Servers | GitHub, PostgreSQL, Notion, Slack, File System, Playwright, Memory, SQLite, Sentry, Linear | Day 2 |
| 7 | 3-Layer Cost Model | Core/Delegation/Extension tiers | Day 7 (review) |
| 8 | Keyboard Shortcuts & CLI | 7 shortcuts, 3 thinking modes, CLI piping | Day 1 |
| 9 | Headless & CI/CD | `claude -p`, piping, GitHub Actions, permissions flags | Day 11 |
| 10 | Power User Checklist V2 | All 15 items | Days 1-14 |

---

## Leverage Point Analysis

| Rank | Leverage Point | Intervention | Expected Multiplier | Monitoring (3 Metrics) | Pilot Actions (First 7 Days) |
|------|---------------|-------------|---------------------|----------------------|------------------------------|
| 1 | **Mental Model** (L2) | "Work in Core Layer" → "Push everything DOWN to cheaper layers" | **25x** cost efficiency | 1. % tasks on Haiku vs Opus<br>2. `/cost` per session<br>3. Completed tasks/evening | Day 1: Set `SUBAGENT_MODEL = haiku` globally<br>Day 2: Route all file reading to subagents<br>Day 4: First Agent Team on BB-01 |
| 2 | **System Structure** (L4) | Single session → 3-Layer with delegation + hooks | **10x** throughput | 1. Active layers used (target: 3)<br>2. Hook executions/day<br>3. Parallel tasks running | Day 1: PostToolUse auto-format hook<br>Day 3: Create 2 subagent commands<br>Day 5: Git worktrees + parallel CC |
| 3 | **Information Flow** (L6) | Ad-hoc prompting → CLAUDE.md hierarchy as persistent memory | **8x** context efficiency | 1. Lines in CLAUDE.md<br>2. Re-explanations needed (target: 0)<br>3. Session startup time | Day 1: Global + BB-01 CLAUDE.md<br>Day 2: V-SMASH CLAUDE.md<br>Day 3: MTB-20 CLAUDE.md |
| 4 | **Reinforcing Loop** (L7) | Manual repetition → Auto-activating skills by context | **6x** workflow speed | 1. Skills created<br>2. Auto-activations observed<br>3. Manual steps eliminated | Day 3: DfX review skill<br>Day 5: Gate report skill<br>Day 7: Technical doc skill |
| 5 | **Delays** (L9) | Context rot → `/compact` habit + `AUTOCOMPACT_PCT=80` | **4x** session quality | 1. `/compact` usage/session<br>2. Context warnings seen<br>3. Response quality late-session | Day 1: Set AUTOCOMPACT_PCT=80<br>Day 1: `/cost` as first command habit<br>Day 3: Git worktrees for parallel |

---

## SECTION-BY-SECTION MASTERY GUIDE

---

### ■ 1. The 7 Building Blocks

The spectrum from the cheatsheet:

```
Manual → Automatic → Guaranteed → Delegated → Orchestrated

CLAUDE.md   → Project memory. Read first every time.
Commands    → / to trigger, you decide when.
Skills      → Auto-activate by context. Claude decides.
Hooks       → Guaranteed shell execution at lifecycle events.
Subagents   → Parallel isolated workers.
Agent Teams → NEW. Peer communication. Discuss. (experimental)
Plugins     → Bundle + share via npm.
```

**Key mental model**: Each building block moves you RIGHT on the spectrum. Your goal is to push every repeating task as far right as possible.

**Your existing foundation**:
- ✅ CLAUDE.md (partial — needs hierarchy)
- ✅ MCP servers (Airtable, GitHub, Filesystem, Memory, Sequential Thinking)
- ✅ Custom skills (24+ in your skill system)
- ⬜ Hooks (new)
- ⬜ Agent Teams (new)
- ⬜ Plugins (new)

---

### ■ 2. CLAUDE.md Masterclass (Day 1)

**The 4-level hierarchy** (from cheatsheet):

```
~/.claude/CLAUDE.md          ← Global (all projects)
  └── ./CLAUDE.md            ← Project root
       └── ./src/CLAUDE.md   ← Folder-level
            └── ./src/auth/CLAUDE.md  ← Deep/module-level
```

**⚠️ Keep root under 15KB** — this is loaded every single turn.

**✓ PUT IN**:
- Architecture overview
- How to run tests
- Code style rules
- Git conventions
- Common pitfalls

**✗ DON'T**:
- Generic coding advice
- Full library docs
- Secrets / API keys
- Task-specific rules (use skills instead)

**Day 1 Action — Create Global CLAUDE.md**:

```markdown
# ~/.claude/CLAUDE.md

## Identity
Defense engineer at Workshop X, Vietnam.
Products: BB-01 (LOMAH), V-SMASH, MTB-20, TDR.

## Standards
- Pahl-Beitz systematic design methodology
- 3-Gate Quality System (G1→G2→G3)
- MIL-STD compliance for defense procurement
- Vietnamese for internal docs, English for code

## Rules
- NEVER commit directly to main
- ALWAYS run tests before PR
- Metric units exclusively
- No classified data in prompts
- No supplier pricing in context

## Cost Management
- Subagents on Haiku for file reading, docs, tests
- Opus for architecture, gate reviews, system design
- /cost check every 30 minutes
- /compact at 80% context usage

## Git Conventions
- Feature branches: feature/[project]-[description]
- Commit format: [PROJECT] Brief description
- Always create PR, never direct push to main
```

**Day 1 Action — Create BB-01 Project CLAUDE.md**:

```markdown
# ./CLAUDE.md (BB-01 LOMAH project root)

## Project
BB-01 Acoustic Naval Target Detection System.
Current phase: Approaching Gate 2 (DfX Review).
Customer: Vietnamese Navy procurement.

## Architecture
Hydrophone array → DSP pipeline → Detection algorithm → Alert system
Operating environment: South China Sea, shallow water conditions.

## How to Run Tests
pytest tests/ -v --tb=short
pytest tests/signal/ -k "shallow_water" for acoustic-specific

## Key Directories
- src/acoustic/ — Core DSP pipeline
- src/detection/ — Target classification
- docs/requirements/ — MIL-STD requirements
- tests/ — Unit and integration tests

## Common Pitfalls
- Shallow water multipath causes false positives — always test with realistic channel models
- Nhật Tảo hydrophone specs differ from datasheet — use calibrated values in src/sensors/calibration.py
- Gate 2 requires DfM verification with local CNC capability constraints
```

---

### ■ 3. Context Window Mastery (Day 1)

**The problem** (from cheatsheet): 200K token context. Waste it and Claude gets dumb.

**Context Killers ⚠️**:
- Too many MCPs (keep under 10 MCPs + 80 tools total)
- No `/compact` between tasks
- Exploring in main thread (use subagents instead)

**Context Savers ✓**:
- `/compact "keep X only"` — targeted compaction
- `/clear` = fresh start between unrelated tasks
- Subagents for research (don't pollute main context)
- `AUTOCOMPACT_PCT = 80` — auto-compact at 80%

**Day 1 Action — Set config**:

```json
// ~/.claude/settings.json
{
  "env": {
    "AUTOCOMPACT_PCT": "80",
    "MAX_OUTPUT_TOKENS": "64000",
    "SUBAGENT_MODEL": "haiku"
  }
}
```

**Habit to install**: Every session starts with `/cost`. Every 30 min: `/cost` then `/compact` if needed. Between unrelated tasks: `/clear`.

---

### ■ 4. The 14 Hook Events (Days 2-3)

The cheatsheet shows 14 events across 4 categories:

```
SESSION:  SessionStart, SessionEnd
TOOLS:    PreToolUse, PostToolUse, PostToolUseFailure
AGENTS:   SubagentStart, SubagentStop, TeammateIdle, TaskCompleted
OTHER:    PreCompact (save state!!), Stop, Notification,
          UserPromptSubmit, PermissionRequest
```

**Critical insight from the cheatsheet**:
> PreToolUse = highest priority control. Overrides ALL permissions.
> PostToolUse: auto-run eslint after every edit

**3 Hook handler types** (from latest docs):
1. `command` — Shell script (deterministic, zero token cost)
2. `prompt` — Send to Haiku for LLM judgment (cheap tokens)
3. `agent` — Spawn sub-agent for deep verification (more tokens)

**CLAUDE.md is a suggestion. Hooks are GUARANTEED.**

**Day 2 Action — PostToolUse Auto-Format Hook**:

```json
// .claude/settings.json (project-level, BB-01)
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs -I{} sh -c 'if echo \"{}\" | grep -q \"\\.py$\"; then black \"{}\" 2>/dev/null; fi'; exit 0"
          }
        ]
      }
    ]
  }
}
```

**Day 2 Action — PreToolUse Security Guard** (block sensitive files):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write|Edit|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/security-guard.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# .claude/hooks/security-guard.sh
HOOK_INPUT=$(cat)
FILE_PATH=$(echo "$HOOK_INPUT" | jq -r '.tool_input.file_path // empty' 2>/dev/null || echo "")
[[ -z "$FILE_PATH" ]] && exit 0

# Block classified/sensitive files
FILENAME=$(basename "$FILE_PATH")
if echo "$FILENAME" | grep -qiE '^\.env$|\.pem$|\.key$|classified|secret'; then
  echo "⛔ Blocked: Cannot modify sensitive file: $FILENAME" >&2
  exit 2  # exit 2 = blocking error, feeds back to Claude
fi
exit 0
```

```bash
chmod +x .claude/hooks/security-guard.sh
```

**Day 3 Action — PreCompact State Saver** (critical — save state before compaction!):

```json
{
  "hooks": {
    "PreCompact": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "mkdir -p .claude/backups && cp -r src/ .claude/backups/pre-compact-$(date +%Y%m%d-%H%M%S)/ 2>/dev/null; exit 0",
            "async": true
          }
        ]
      }
    ]
  }
}
```

**Day 3 Action — Notification Hook** (alert via Telegram/Clawdbot):

```json
{
  "hooks": {
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "INPUT=$(cat); MSG=$(echo $INPUT | jq -r '.message // \"Task update\"'); curl -s -X POST 'https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage' -d chat_id=${TELEGRAM_CHAT_ID} -d text=\"🤖 Claude Code: $MSG\" > /dev/null; exit 0",
            "async": true
          }
        ]
      }
    ]
  }
}
```

---

### ■ 5. Subagents vs Agent Teams (Days 4-6)

From the cheatsheet:

```
SUBAGENTS                          AGENT TEAMS
┌──────┐                          ┌──────┐
│ Main │                          │ Lead │
└──┬───┘                          └──┬───┘
   │                                 │
┌──┴──┐ ┌──┴──┐ ┌──┴──┐      ┌──┴──┐ ┌──┴──┐ ┌──┴──┐
│Sub1 │ │Sub2 │ │Sub3 │      │ T1  │↔│ T2  │↔│ T3  │
└─────┘ └─────┘ └─────┘      └─────┘ └─────┘ └─────┘

Report BACK only.              Peers. Discuss. Challenge.
No cross-talk.

Decision rule:
• Only result matters? → Subagent
• Need discussion?     → Agent Team

⚠️ Agent Teams = 7x token cost. Use sparingly.
```

**Day 4 — Create Subagent Slash Commands**:

```markdown
# .claude/commands/research.md
---
description: Research files/topics using Haiku subagent (cheap)
---
Launch a subagent (model: haiku) to:
1. Read all files matching $ARGUMENTS
2. Extract key findings into structured summary
3. Return findings only — do NOT modify anything

Example: /project:research src/acoustic/*.py
```

```markdown
# .claude/commands/gen-tests.md
---
description: Generate unit tests using Haiku subagent
---
Launch a subagent (model: haiku) to:
1. Read the source file $ARGUMENTS
2. Generate comprehensive pytest unit tests
3. Run the tests and fix any failures
4. Return test coverage report

Example: /project:gen-tests src/detection/classifier.py
```

```markdown
# .claude/commands/gen-doc.md
---
description: Generate technical documentation using Haiku subagent
---
Launch a subagent (model: haiku) to:
1. Read source files for $ARGUMENTS
2. Generate technical documentation in MIL-STD format
3. Include: purpose, interfaces, parameters, constraints
4. Output to docs/ directory
5. Return summary of generated docs

Example: /project:gen-doc acoustic-processor
```

**Day 5 — Git Worktrees for Parallel Sessions**:

```bash
# Set up worktrees for BB-01
cd ~/projects/bb-01
git worktree add ../bb-01-tests feature/tests
git worktree add ../bb-01-docs feature/docs

# Terminal 1: Main development (Opus)
cd ~/projects/bb-01 && claude

# Terminal 2: Test generation (Haiku — cheap)
cd ~/projects/bb-01-tests && claude --model haiku

# Terminal 3: Documentation (Haiku — cheap)
cd ~/projects/bb-01-docs && claude --model haiku
```

**Day 6 — First Agent Team** (experimental):

```bash
# Enable Agent Teams
# In ~/.claude/settings.json:
# { "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }

# Then in Claude Code, prompt:
# "Create a team of 3 to work on BB-01 Gate 2 preparation:
#  - Teammate 1 (DfM Reviewer): Analyze src/ for manufacturing feasibility
#  - Teammate 2 (Doc Writer): Generate Gate 2 documentation from docs/requirements/
#  - Teammate 3 (Test Validator): Run all tests, report coverage gaps
#  Each teammate works in their own directory. No shared file edits."
```

**⚠️ Agent Team Gotchas**:
- 5-7x token cost — reserve for tasks that genuinely need discussion
- Teammates inherit lead's permission settings
- No session resumption for in-progress teammates
- Separate file ownership per teammate to avoid conflicts
- Use `Shift+Tab` (Delegate mode) so lead doesn't do the work itself

---

### ■ 6. Top 10 MCP Servers (Day 2)

From the cheatsheet:

| # | Server | Purpose | Your Status |
|---|--------|---------|-------------|
| 1 | GitHub | PRs, issues, CI/CD | ✅ Have |
| 2 | PostgreSQL | Natural language DB | ⬜ Not needed yet |
| 3 | Notion | Docs, pages, databases | ⬜ Consider |
| 4 | Slack | Channels, messages | ⬜ Consider |
| 5 | File System | Advanced file ops | ✅ Have |
| 6 | Playwright | Browser automation | 🆕 Install |
| 7 | Memory | Persistent knowledge | ✅ Have |
| 8 | SQLite | Local database | ⬜ Consider |
| 9 | Sentry | Error tracking | ⬜ Not needed yet |
| 10 | Linear | Project management | ⬜ Not needed yet |

**⚠️ Under 10 MCPs + 80 tools. More = context killer.**

You already have 5+ MCPs. Add 1-2 strategically:

```bash
# Install Playwright for browser automation (supplier catalog scraping)
claude mcp add playwright -- npx -y @anthropic/mcp-playwright

# That's it. You're at 6-7 MCPs. Stay under 10.
```

---

### ■ 7. 3-Layer Cost Model (Ongoing)

Already covered in the system map above. The key configuration:

```json
// ~/.claude/settings.json
{
  "env": {
    "SUBAGENT_MODEL": "haiku",
    "AUTOCOMPACT_PCT": "80",
    "MAX_OUTPUT_TOKENS": "64000"
  }
}
```

**Decision framework**:
- **Extension Layer** (zero cost): Hooks auto-format, auto-test, auto-backup, security guards
- **Delegation Layer** (cheap): Subagents on Haiku for research, docs, tests
- **Core Layer** (expensive): You + Opus for architecture, gate reviews, ultrathink decisions

---

### ■ 8. Keyboard Shortcuts & CLI (Day 1)

From the cheatsheet:

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Cancel current generation |
| `Ctrl+B` | Background (send to background) |
| `Ctrl+R` | Search command history |
| `Esc×2` | Undo (rewind to last checkpoint) |
| `Shift+↑↓` | Navigate teammate messages |
| `!` | Run bash command directly (`!git status`) |
| `@` | File reference (`@src/processor.py`) |
| `/` | Slash commands |

**3 Thinking Modes**:

| Mode | Trigger | Budget | When to Use |
|------|---------|--------|------------|
| Think | "think" | Small | Simple edits, quick fixes |
| Think harder | "think harder" | Medium | Multi-file refactoring, bug diagnosis |
| **Ultrathink** | **"ultrathink"** | **Maximum** | **Architecture, Gate reviews, system design** |

**CLI Piping** (headless one-liners):

```bash
# Pipe file content for analysis
cat error.log | claude -p "Find root cause"

# Summarize git log
git log --oneline -20 | claude -p "summarize recent changes"

# Quick code review
cat src/detector.py | claude -p "Review for bugs" --output-format json
```

---

### ■ 9. Headless & CI/CD (Day 11)

From the cheatsheet:

```bash
# One-off headless command
claude -p "Explain this project" --output-format json

# Pipe input
cat error.log | claude -p "Find root cause"

# CI/CD integration
claude -p "Review PR for security" --output-format json
```

**GitHub Actions integration**:

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Claude Security Review
        run: |
          claude -p "Review this PR for security vulnerabilities" \
            --output-format json \
            --allowedTools "Read,Glob,Grep"
```

**Permission flags**:
- `--allowedTools` — whitelist specific tools
- `--disallowedTools` — blacklist dangerous tools

---

### ■ 10. Power User Checklist V2 — Complete Tracking

```
EXTENSION LAYER (Zero token cost)
  [ ] 1.  CLAUDE.md in every project ............... Day 1
  [ ] 2.  Global ~/.claude/CLAUDE.md ............... Day 1
  [ ] 3.  3+ custom slash commands used daily ...... Day 2
  [ ] 4.  2+ MCP servers installed ................. Day 2
  [ ] 5.  1 PostToolUse hook (auto-format) ......... Day 2
  [ ] 6.  2+ auto-activating skills ................ Day 3
  [ ] 7.  @ file refs (no copy-paste) .............. Day 1

DELEGATION LAYER (Haiku $0.10/session)
  [ ] 8.  1 custom subagent ........................ Day 4
  [ ] 9.  Haiku for cheap, Opus for hard ........... Day 4
  [ ] 10. Agent Teams on 1 task .................... Day 6
  [ ] 11. Git worktrees for parallel work .......... Day 5

CORE LAYER (Opus — orchestration only)
  [ ] 12. /compact at 80% ......................... Day 1 (habit)
  [ ] 13. /cost every session ...................... Day 1 (habit)
  [ ] 14. "Ultrathink" for architecture ............ Day 8
  [ ] 15. Headless in CI/CD ........................ Day 11
```

**Complete all 15 = Top 1% of Claude Code users.**

---

## 14-Day Execution Calendar

### WEEK 1: Build the Machine

| Day | Session Focus | Checklist Items | Layer |
|-----|--------------|----------------|-------|
| **1** | CLAUDE.md hierarchy + Config + Shortcuts | ☑1 ☑2 ☑7 ☑12 ☑13 | Extension + habits |
| **2** | Hooks + MCP + Slash Commands | ☑3 ☑4 ☑5 | Extension |
| **3** | Auto-activating Skills + PreCompact hook | ☑6 | Extension |
| **4** | First Subagents (research + gen-tests) | ☑8 ☑9 | Delegation |
| **5** | Git Worktrees + Parallel Sessions | ☑11 | Delegation |
| **6** | Agent Team on BB-01 Gate 2 prep | ☑10 | Delegation |
| **7** | Cost Review: `/cost` analysis across week | Review all | All 3 layers |

### WEEK 2: Deploy the Machine

| Day | Session Focus | Checklist Items | Real Project |
|-----|--------------|----------------|-------------|
| **8** | Ultrathink architecture session | ☑14 | BB-01 system design review |
| **9** | Full Gate 2 doc set via delegation | — | BB-01 Gate 2 preparation |
| **10** | Apply full stack to V-SMASH | — | V-SMASH project setup |
| **11** | Headless CI/CD in GitHub Actions | ☑15 | Auto-review pipeline |
| **12** | Cross-project application | — | MTB-20 or TDR |
| **13** | Gap analysis + compound review | — | Fill any missing items |
| **14** | **Verify: all 15 items checked** | **ALL 15** | **Top 1% achieved** |

---

## Anti-Patterns to Avoid

1. **"Learn all 7 building blocks before using any"**
   → Deploy each one the day you learn it on BB-01 or V-SMASH

2. **"Perfect CLAUDE.md before starting"**
   → Start with 10 lines. Iterate daily. Keep under 15KB.

3. **"Agent Teams for everything"**
   → 7x token cost. Only use when teammates need to discuss/challenge.
   → Default: Subagents (cheap) → Hooks (free) → Agent Teams (expensive)

4. **"Read all MCP server docs"**
   → Install, use immediately, read docs only when stuck

5. **"Separate learning from project work"**
   → Every new feature deploys to a real defense project. Zero tutorial time.

---

## Expected Compound Effect

```
Day 0  (now):   1x velocity  │ 100% Core Layer │ $X/session
Day 7  (Week 1): 3x velocity  │ 60% cost drop   │ Hooks + Haiku delegation active
Day 14 (Week 2): 5x velocity  │ 75% cost drop   │ Full 3-Layer architecture
Day 28 (Week 4): 8x velocity  │ Compound across  │ All 4 defense projects optimized
                               │ all projects     │
```

**The V2 insight**: The spectrum runs **Manual → Automatic → Guaranteed → Delegated → Orchestrated**. Push every repeating task as far RIGHT as possible. Every task that moves right frees your Opus tokens for the decisions that actually matter: architecture, gate reviews, strategic design.

---

*Generated via Skills Mastery System — Leverage Point Analysis applied to Claude Code V2 Power User Guide by Hamza Khalid*
