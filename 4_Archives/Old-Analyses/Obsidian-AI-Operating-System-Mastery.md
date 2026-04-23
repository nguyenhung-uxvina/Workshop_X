# Obsidian AI Operating System — Skills Mastery System

> **Skill**: Build & operate an Obsidian vault as a 3-layer AI operating system (Knowledge → Behavior → Action)
> **Target Outcome**: Fully operational vault where Claude Code reads your notes in context, follows your CLAUDE.md behavior rules, and executes skills/CLI actions — all without leaving Obsidian
> **Constraints**: 2–4 hours evening availability, existing Obsidian vault, Claude Code / Max subscription
> **Framework**: Skills Mastery System (Leverage Points + Systems Thinking)

---

## 1. SYSTEM MAP — The 3-Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    OBSIDIAN AI OS                            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  LAYER 3: ACTION (Skills + CLI)                     │    │
│  │  Claude Code skills, slash commands, bash,          │    │
│  │  MCP servers, hooks, agents                         │    │
│  │  "What the agent CAN DO"                            │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         │ reads                              │
│  ┌──────────────────────▼──────────────────────────────┐    │
│  │  LAYER 2: BEHAVIOR (CLAUDE.md + Rules)              │    │
│  │  System prompt, personality, constraints,           │    │
│  │  path-specific rules, output styles                 │    │
│  │  "HOW the agent should WORK"                        │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         │ references                         │
│  ┌──────────────────────▼──────────────────────────────┐    │
│  │  LAYER 1: KNOWLEDGE (Vault Notes)                   │    │
│  │  Notes, SOPs, research, frameworks, daily logs,     │    │
│  │  templates, project docs                            │    │
│  │  "What the agent KNOWS"                             │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  INTERFACE: Terminal plugin / Claudian / Agent Client        │
│  inside Obsidian sidebar                                    │
└─────────────────────────────────────────────────────────────┘
```

### Stock-Flow Model

| Stock | Inflow | Outflow | Key Dynamic |
|-------|--------|---------|-------------|
| **Vault Knowledge** (notes, SOPs, research) | Daily captures, research, Web Clipper, agent-generated notes | Archival, pruning, staleness | Grows via R1 (Agent Research Loop) |
| **Agent Capability** (skills, commands, hooks) | New skills created, MCP servers connected | Skill rot, broken configs | Grows via R2 (Skill Composition Loop) |
| **Behavior Precision** (CLAUDE.md quality) | Reflection → rule updates, compound learnings | Drift, contradictions, bloat | Grows via R3 (Behavior Refinement Loop) |
| **Session Throughput** (tasks completed/session) | Better skills + knowledge = faster work | Context switching, setup friction | Emerges from all three stocks compounding |

### Feedback Loops

- **R1 — Agent Research Loop** (Reinforcing): Agent reads vault → finds gaps → researches → creates notes → vault grows → agent gets smarter → finds deeper gaps
- **R2 — Skill Composition Loop** (Reinforcing): Build skill → use it → discover edge case → improve skill → compose with other skills → capability compounds
- **R3 — Behavior Refinement Loop** (Reinforcing): Agent does task → output quality observed → CLAUDE.md updated → next task better → more trust → harder tasks delegated
- **B1 — Complexity Brake** (Balancing): More skills + rules → longer context → slower responses → debugging overhead → desire to simplify
- **B2 — Maintenance Drag** (Balancing): More vault notes → more staleness → more pruning needed → less time building → growth slows

---

## 2. LEVERAGE POINT ANALYSIS — Ranked Interventions

| Rank | Leverage Point | Surgical Change | Expected Multiplier | Monitoring Plan (7-day) | Pilot Actions (Week 1) |
|------|----------------|-----------------|---------------------|-------------------------|------------------------|
| **1** | **Mental Model** (L2) | Shift from "Obsidian = passive notes" → "Obsidian = live operating system that the agent reads, writes, and acts on" | **20x** — Removes ceiling on what you delegate; every note becomes an instruction, not just storage | 1. Count tasks delegated to agent vs done manually 2. Track notes agent reads per session 3. Observe: do you open browser/terminal outside Obsidian? | 1. Install Terminal plugin + run Claude Code from vault root tonight 2. Create one SOP note and have Claude Code read it → execute a task from it 3. Write in daily note: "What did I do manually that the agent could have done?" |
| **2** | **Information Flow** (L6) | Install Kepano's obsidian-skills so Claude Code understands Obsidian file formats natively (markdown, bases, canvas) — agent stops generating broken links/frontmatter | **10x** — Eliminates 80% of "fix the formatting" back-and-forth; agent output drops directly into vault without edits | 1. Count agent-generated notes that need manual fixes (target: 0) 2. Track wikilinks created correctly vs broken 3. Time from "agent creates note" to "note is usable" | 1. `git clone https://github.com/kepano/obsidian-skills.git` and copy `.claude/` folder into vault root 2. Run `/init` to generate CLAUDE.md 3. Test: ask Claude to create a note with frontmatter, wikilinks, tags — verify in Obsidian |
| **3** | **System Structure** (L4) | Create the 3-folder skeleton: `.claude/skills/`, `.claude/rules/`, `CLAUDE.md` — this installs the behavior+action layers that turn passive vault into active OS | **8x** — Transforms vault from read-only knowledge base to read-write operating environment; enables all downstream skills | 1. Does `.claude/` folder exist with skills + rules? (binary) 2. Count custom skills created (target: ≥3 by day 7) 3. Does CLAUDE.md have project-specific instructions? (binary) | 1. Create `.claude/skills/` and `.claude/rules/` directories 2. Write CLAUDE.md with vault navigation map, note conventions, and project context 3. Create first custom skill: a research-to-note pipeline that reads a URL → creates structured Obsidian note |
| **4** | **Reinforcing Loop** (L5) | Install compound learning hook: every Claude Code session auto-appends learnings to a `_meta/learnings.md` file → next session reads it → agent gets smarter without you repeating context | **6x** — Each session compounds on the last; eliminates "re-explain the project" overhead; builds organizational memory | 1. Learnings file growing? (count entries) 2. Did agent reference a previous learning unprompted? (binary) 3. Time spent re-explaining context to agent (target: trending to 0) | 1. Create `_meta/learnings.md` with format: date, session, insight, action 2. Add to CLAUDE.md: "After every task, append what you learned to `_meta/learnings.md`" 3. Start next session by asking agent to read learnings file first |
| **5** | **Feedback Compression** (L9) | Connect MCP server (Obsidian Claude Code MCP or Claudesidian) so agent has live vault context without manual `@file` references — reduces feedback delay from "copy-paste context" to instant | **5x** — Agent sees your current open note, recent edits, vault structure in real-time; eliminates the "which file?" conversation | 1. Is MCP server running and connected? (binary) 2. Count times agent correctly references current file without being told 3. Time from question → useful answer (should drop 50%+) | 1. Install obsidian-claude-code MCP plugin from community plugins 2. Configure port (default 22360), verify Claude Code auto-discovers vault 3. Test: open a project note → ask agent a question about it → verify it reads the note without `@` mention |

---

## 3. STEP-BY-STEP SETUP — Phased Implementation

### Phase 0: Prerequisites (15 min)

**You need:**
- Obsidian desktop app (v1.12+ for CLI support)
- Claude Code installed (`curl -fsSL https://claude.ai/install.sh | bash`)
- Node.js (for Claude Agent SDK)
- Claude Max subscription OR Anthropic API key

**Verify:**
```bash
obsidian --version    # Should show 1.12+
claude --version      # Should show Claude Code installed
node --version        # Should show v18+
```

### Phase 1: Knowledge Layer — Vault Structure (Evening 1, ~90 min)

**Goal**: Organize vault so the agent can navigate it without you explaining where things are.

**Step 1.1 — Audit your current vault**

Open your vault root in terminal. Run:
```bash
claude "Analyze my Obsidian vault structure. List all top-level folders, count notes in each, and suggest a clean navigation map for an AI agent."
```

**Step 1.2 — Establish folder conventions**

Your vault should have clear zones the agent can reference:

```
YourVault/
├── CLAUDE.md                    # Behavior layer (root)
├── .claude/                     # Action layer
│   ├── skills/                  # Custom skills
│   ├── rules/                   # Path-specific rules
│   ├── hooks/                   # Auto-triggers
│   ├── agents/                  # Specialized sub-agents
│   └── settings.json            # Permissions config
├── 00-Inbox/                    # Uncategorized captures
├── 01-Projects/                 # Active project folders
│   ├── BB-01-LOMAH/
│   ├── MTB-20/
│   └── ...
├── 02-Areas/                    # Ongoing responsibilities
│   ├── Defense-Engineering/
│   ├── AI-Infrastructure/
│   └── Consulting/
├── 03-Resources/                # Reference material
│   ├── SOPs/
│   ├── Frameworks/
│   ├── Research/
│   └── Templates/
├── 04-Archive/                  # Completed/inactive
├── _meta/                       # System files
│   ├── learnings.md             # Compound learning log
│   ├── decisions.md             # Decision log
│   └── vault-map.md             # Auto-generated nav
└── Daily/                       # Daily notes
```

**Step 1.3 — Create vault-map.md**

This is the agent's "filesystem README". Create `_meta/vault-map.md`:

```markdown
# Vault Navigation Map

## Folder Purpose
- `00-Inbox/` — Uncategorized captures. Process daily.
- `01-Projects/` — Active projects. Each has its own CLAUDE.md.
- `02-Areas/` — Ongoing domains (defense, AI, consulting).
- `03-Resources/SOPs/` — Standard operating procedures.
- `03-Resources/Frameworks/` — D-M-I-R, Pahl-Beitz, etc.
- `03-Resources/Templates/` — Note templates.
- `_meta/` — System files for agent learning.

## Naming Conventions
- Notes: `kebab-case.md`
- Projects: `PROJECT-NAME/` with internal `README.md`
- Daily: `YYYY-MM-DD.md`
- Tags: `#status/active`, `#type/sop`, `#project/bb-01`

## Linking Rules
- Use `[[wikilinks]]` for internal references
- Use `[[note|display text]]` for custom display
- Use `#tags` in frontmatter YAML block
```

### Phase 2: Behavior Layer — CLAUDE.md (Evening 1–2, ~60 min)

**Goal**: The agent reads CLAUDE.md at session start and knows how to behave in your vault.

**Step 2.1 — Create root CLAUDE.md**

This is the most important file in the system. Place at vault root:

```markdown
# CLAUDE.md — Agent Behavior Configuration

## Identity
You are operating inside KN's Obsidian vault, which serves as the knowledge
layer of a defense engineering + AI infrastructure operation.

## Navigation
Read `_meta/vault-map.md` for folder structure and conventions.

## Note Creation Rules
- Always use YAML frontmatter: title, date, tags, status
- Use [[wikilinks]] for all internal references
- Follow templates in `03-Resources/Templates/`
- Vietnamese for internal docs, English for technical content
- Never create files outside the vault structure

## Behavior Principles
- Deploy-to-learn: ship something operational every session
- Binding constraint first: diagnose before intervening
- Compound learning: after every task, append insight to `_meta/learnings.md`
- Security: never expose defense project details to external services

## Active Projects
- BB-01 LOMAH: Gate 2 DfX Review approaching
- MTB-20: Naval surface target drone
- TDR: Tethered ISR drone system
- See `01-Projects/` for current status of each

## When Uncertain
1. Search the vault first (grep/glob)
2. Read related notes for context
3. Ask me — don't guess on defense specifications
```

**Step 2.2 — Create path-specific rules**

In `.claude/rules/`:

```markdown
# .claude/rules/projects.md
# Applied when working in 01-Projects/

- Always check for existing CLAUDE.md in the project folder
- Follow Pahl-Beitz phase structure when relevant
- Link decisions to `_meta/decisions.md`
- Tag with #project/<name> and #gate/<current-gate>
```

```markdown
# .claude/rules/research.md
# Applied when working in 03-Resources/Research/

- Create structured research notes with: source, key claims, implications, links
- Always add to MOC (Map of Content) if one exists for the topic
- Tag with #type/research and #topic/<domain>
```

### Phase 3: Action Layer — Skills + CLI (Evening 2–3, ~120 min)

**Goal**: Install skills so the agent can take action, not just read/write notes.

**Step 3.1 — Install Kepano's official Obsidian skills**

```bash
cd /path/to/your/vault
git clone https://github.com/kepano/obsidian-skills.git /tmp/obsidian-skills
cp -r /tmp/obsidian-skills/.claude/* .claude/
```

This gives Claude Code four foundational skills:
- **obsidian-markdown**: Correct wikilink syntax, frontmatter, tag formatting
- **obsidian-bases**: Database layer (`.base` files)
- **json-canvas**: Spatial note maps (`.canvas` files)
- **obsidian-cli**: Read, create, search, append notes via CLI commands

**Step 3.2 — Install Obsidian CLI**

The Obsidian CLI (built into Obsidian 1.12+) lets Claude Code interact with a running Obsidian instance:

```bash
# Verify CLI is available
obsidian help

# Key commands the agent will use:
obsidian read file="My Note"
obsidian create name="New Note" content="# Hello" template="Template" silent
obsidian search query="search term" limit=10
obsidian daily:read
obsidian daily:append content="- [ ] New task"
obsidian property:set name="status" value="done" file="My Note"
```

**Step 3.3 — Create your first custom skill**

Create `.claude/skills/research-pipeline/SKILL.md`:

```markdown
---
name: research-pipeline
description: Research a topic and create a structured Obsidian note.
  Use when asked to "research X", "look into X", or "create a research note on X".
---

# Research Pipeline Skill

## Process
1. Search the web for the given topic (use web_search or brave-search MCP)
2. Read the top 3–5 sources
3. Create a structured note in `03-Resources/Research/` with:
   - YAML frontmatter (title, date, tags, sources, status)
   - Summary (3–5 sentences)
   - Key Claims (numbered list with source attribution)
   - Implications for active projects (link to relevant project notes)
   - Open Questions
   - Related Notes (wikilinks to existing vault content)
4. Append to the relevant MOC if one exists
5. Log the research in `_meta/learnings.md`

## Output Format
```yaml
---
title: "Research: {topic}"
date: {YYYY-MM-DD}
tags: [type/research, topic/{domain}, status/active]
sources: [{url1}, {url2}]
---
```
```

**Step 3.4 — Create a daily review skill**

Create `.claude/skills/daily-review/SKILL.md`:

```markdown
---
name: daily-review
description: Run end-of-day review. Summarize what happened, log learnings,
  plan tomorrow. Use when asked for "daily review", "end of day", or "EOD".
---

# Daily Review Skill

## Process
1. Read today's daily note (`obsidian daily:read`)
2. Scan `01-Projects/` for any files modified today
3. Generate summary:
   - Tasks completed
   - Decisions made (append to `_meta/decisions.md`)
   - Learnings captured (append to `_meta/learnings.md`)
   - Blockers identified
4. Append "Tomorrow's Focus" section to today's daily note
5. Create tomorrow's daily note from template if it doesn't exist
```

### Phase 4: Interface — Embed Agent in Obsidian (Evening 3, ~60 min)

**Goal**: Talk to Claude Code without leaving Obsidian.

You have three plugin options. Pick ONE based on your needs:

**Option A: Terminal Plugin (Simplest — recommended to start)**

1. Install "Terminal" community plugin in Obsidian
2. Open terminal panel (ribbon icon or hotkey)
3. Run `claude` — Claude Code starts with your vault as working directory
4. It automatically reads CLAUDE.md and discovers `.claude/skills/`

Best for: getting started fast, plan mode support, full CLI access.

**Option B: Claudian Plugin (Deepest native integration)**

1. Install from GitHub: `https://github.com/YishenTu/claudian`
2. Configure API key or Max subscription token in settings
3. Features: sidebar chat, `@[[note]]` autocomplete, inline edit with diff preview, skill auto-loading, MCP support
4. Limitation: plan mode not yet supported

Best for: visual workers who want GUI chat, inline editing, image support.

**Option C: Agent Client Plugin (Multi-agent support)**

1. Install via BRAT: `https://github.com/RAIT-09/obsidian-agent-client`
2. Install ACP adapter: `npm install -g @zed-industries/claude-agent-acp`
3. Configure node path and adapter path in settings
4. Features: switch between Claude Code, Codex, Gemini CLI; multi-session; floating chat

Best for: people who want to use multiple AI agents in one vault.

### Phase 5: MCP Bridge — Live Context (Evening 4, ~45 min)

**Goal**: Agent sees vault context in real-time without manual `@file` references.

**Step 5.1 — Install Obsidian Claude Code MCP plugin**

1. Install `obsidian-claude-code` from community plugins (or GitHub)
2. Default port: 22360 (change in settings if conflicts)
3. Verify: Claude Code should auto-discover the vault via WebSocket

**Step 5.2 — Configure Claude Code MCP connection**

In your `~/.claude/settings.json` or vault's `.claude/settings.json`:
```json
{
  "mcpServers": {
    "obsidian": {
      "url": "http://localhost:22360/sse"
    }
  }
}
```

**Step 5.3 — Test the bridge**

1. Open a note in Obsidian
2. In Claude Code (terminal or plugin), ask: "What note do I have open right now?"
3. Agent should identify the current file without you specifying it
4. Ask: "Search my vault for notes about LOMAH" — agent should use MCP tools, not just grep

### Phase 6: Compound Learning System (Evening 4–5, ~60 min)

**Goal**: The system gets smarter every session without you manually maintaining it.

**Step 6.1 — Create the learning infrastructure**

```markdown
<!-- _meta/learnings.md -->
# Agent Learning Log

Format: `[YYYY-MM-DD] [session-topic] — [insight] → [action taken]`

---

<!-- Entries auto-appended by agent after each session -->
```

```markdown
<!-- _meta/decisions.md -->
# Decision Log

Format: `[YYYY-MM-DD] [decision] — [context] — [alternatives considered] — [rationale]`

---

<!-- Entries appended when significant choices are made -->
```

**Step 6.2 — Add compound learning hook**

Create `.claude/hooks/post-session.sh`:
```bash
#!/bin/bash
# Auto-runs after each Claude Code session
# Reminds the agent to log learnings

echo "Session complete. Checking if learnings were logged..."
grep -c "$(date +%Y-%m-%d)" _meta/learnings.md || echo "⚠️ No learnings logged today. Run: claude 'Log today's learnings'"
```

**Step 6.3 — CLAUDE.md auto-update pattern**

Add to CLAUDE.md:
```markdown
## Compound Learning Protocol
After completing any significant task:
1. Append insight to `_meta/learnings.md` with date and context
2. If a new pattern was discovered, consider creating a skill for it
3. If CLAUDE.md instructions were insufficient, suggest an update
4. Read `_meta/learnings.md` at session start to build on previous work
```

---

## 4. ANTI-PATTERNS — What Kills the System

| Anti-Pattern | Why It Fails | What to Do Instead |
|---|---|---|
| **Over-engineering CLAUDE.md on day 1** | You don't know what rules matter yet; rules become noise | Start with 10 lines. Add rules only when agent makes a mistake worth preventing. |
| **Installing all plugins at once** | Debugging becomes impossible; each plugin is a moving part | Terminal plugin only for week 1. Add MCP in week 2. Evaluate Claudian/Agent Client in week 3. |
| **Creating skills you don't use** | Skills rot; untested skills produce wrong output | Only create a skill after you've done the task manually ≥3 times and see the pattern. |
| **Treating vault as "done"** | Static vaults become graveyards; agent finds stale info | Weekly 15-min vault hygiene: archive completed projects, update status tags, prune inbox. |
| **Not reading learnings.md** | Compound loop breaks; agent repeats mistakes | Make "read learnings" the first instruction in every session. |
| **Storing everything in one CLAUDE.md** | Context window bloat; agent reads 2000 lines to find 1 rule | Split into root CLAUDE.md (navigation) + `.claude/rules/` (path-specific) + project-level CLAUDE.md files. |

---

## 5. 30-DAY MASTERY TIMELINE

### Week 1: Foundation (Layers 1 + 2)

| Day | Focus | Deliverable | Time |
|-----|-------|-------------|------|
| 1 | Install Terminal plugin, run Claude Code in vault | Working terminal in Obsidian sidebar | 45 min |
| 2 | Organize vault folders, create `_meta/vault-map.md` | Clean folder structure agent can navigate | 60 min |
| 3 | Write CLAUDE.md v1 (10–15 lines max) | Agent follows your conventions on first try | 30 min |
| 4 | Install Kepano's obsidian-skills | Agent creates proper Obsidian markdown/canvas/base files | 30 min |
| 5 | Test: ask agent to create 5 notes across different folders | All notes use correct frontmatter, wikilinks, tags | 45 min |
| 6 | Create path-specific rules for projects + research | Agent behavior changes by folder | 30 min |
| 7 | Weekly review: what worked? What did agent get wrong? Update CLAUDE.md | First iteration of behavior refinement | 30 min |

### Week 2: Action Layer (Layer 3)

| Day | Focus | Deliverable | Time |
|-----|-------|-------------|------|
| 8 | Create first custom skill (research-pipeline) | Agent researches topic → structured note in vault | 60 min |
| 9 | Create daily-review skill | End-of-day summary + tomorrow planning automated | 45 min |
| 10 | Set up `_meta/learnings.md` + compound learning protocol | Agent logs insights after every task | 30 min |
| 11 | Create project-specific skill (e.g., gate-review-prep for BB-01) | Defense workflow automated | 60 min |
| 12 | Test Obsidian CLI commands from Claude Code | Agent can read/create/search/append via CLI | 30 min |
| 13 | Compose skills: research → note → link to project | First multi-step automated workflow | 45 min |
| 14 | Weekly review: which skills got used? Which didn't? Prune. | Lean skill set, no dead weight | 30 min |

### Week 3: Live Context (MCP + Feedback Loops)

| Day | Focus | Deliverable | Time |
|-----|-------|-------------|------|
| 15 | Install MCP plugin, connect Claude Code to vault | Agent sees current note + vault structure in real-time | 60 min |
| 16 | Test context awareness: open note → ask question → verify agent reads it | Zero-friction context passing | 30 min |
| 17 | Install Web Clipper → test clip-to-vault → agent-summarize pipeline | Research capture from browser → vault → agent in one flow | 45 min |
| 18 | Create a "morning briefing" skill that reads daily note + project statuses | Start-of-session context loaded automatically | 45 min |
| 19 | Add decision log integration to CLAUDE.md | Significant decisions tracked with rationale | 30 min |
| 20 | Evaluate: Terminal vs Claudian vs Agent Client — try alternative? | Informed choice on interface plugin | 60 min |
| 21 | Weekly review: measure session throughput vs week 1 | Quantified improvement baseline | 30 min |

### Week 4: Compound + Optimize

| Day | Focus | Deliverable | Time |
|-----|-------|-------------|------|
| 22 | Audit `_meta/learnings.md` — extract top 5 patterns → create skills | Patterns converted to reusable capabilities | 60 min |
| 23 | Split CLAUDE.md into modular files if >50 lines | Clean, maintainable behavior configuration | 30 min |
| 24 | Create project-level CLAUDE.md files for top 2 active projects | Per-project agent behavior without global bloat | 45 min |
| 25 | Build a vault maintenance skill (archive completed, fix broken links) | Vault hygiene automated | 45 min |
| 26 | Test autonomous workflow: agent researches + creates note + links + logs learning without intervention | Full loop delegation achieved | 30 min |
| 27 | Measure: tasks delegated/session, notes created by agent, manual fixes needed | Hard metrics on system value | 30 min |
| 28 | Final review: update CLAUDE.md, archive unused skills, document the system | Operational playbook complete | 60 min |

---

## 6. MONITORING DASHBOARD — Track System Health

Track these weekly in a `_meta/system-health.md` note:

```markdown
# System Health — Week of {date}

## Leading Indicators
- [ ] Agent tasks delegated this week: ___
- [ ] Notes created by agent (no manual fix needed): ___
- [ ] Skills used this week: ___ / ___ total skills
- [ ] Learnings logged: ___

## Process Metrics
- [ ] Avg time from question → useful answer: ___ min
- [ ] Times re-explained context to agent: ___
- [ ] CLAUDE.md updates made: ___

## Lagging Indicators
- [ ] Session throughput (tasks completed / session): ___
- [ ] Vault staleness (notes not touched in 30+ days): ___ %
- [ ] "Did I leave Obsidian to do something the agent could do?": Y/N

## Diagnosis
What is the current binding constraint?
- [ ] Knowledge layer (vault disorganized, agent can't find things)
- [ ] Behavior layer (CLAUDE.md missing rules, agent misbehaves)
- [ ] Action layer (skills missing, agent can't execute)
- [ ] Interface (friction switching between notes and agent)
- [ ] Learning loop (agent repeats mistakes, no compound effect)
```

---

## 7. PLUGIN COMPARISON — Decision Matrix

| Criterion | Terminal + Claude Code | Claudian | Agent Client | Obsidian Claude Code MCP |
|---|---|---|---|---|
| **Setup complexity** | Low (1 plugin) | Medium (SDK config) | Medium (ACP adapter) | Medium (port config) |
| **Plan mode** | Yes | No (in progress) | Yes | N/A (bridge, not interface) |
| **Inline editing** | No (file-level) | Yes (word-level diff) | No | N/A |
| **Multi-agent** | No | No | Yes (Claude, Codex, Gemini) | N/A |
| **MCP support** | Via config | Built-in | Via agent | IS the MCP server |
| **Skill auto-load** | Yes (`.claude/skills/`) | Yes | Via agent | N/A |
| **`@note` references** | Manual (`@file`) | Autocomplete | `@notename` | Automatic (current file) |
| **Mobile** | No | No | No | No |
| **Best for** | Power users, plan mode fans | Visual workers, inline editors | Multi-model workflows | Adding live context to any setup |

**Recommended stack**: Terminal plugin (interface) + Obsidian Claude Code MCP (live context) + Kepano skills (file format knowledge). Add Claudian later when plan mode ships.

---

## 8. KEY MENTAL MODEL SHIFTS

These paradigm shifts (L2 leverage points) unlock the highest multipliers:

**Shift 1: Notes are instructions, not just storage**
- Old: "I write notes for myself to read later"
- New: "Every note is a potential instruction the agent can read and act on"
- Implication: Write notes with frontmatter, clear structure, and actionable language

**Shift 2: CLAUDE.md is a living contract, not a config file**
- Old: "Set it up once and forget it"
- New: "CLAUDE.md evolves weekly based on what the agent gets wrong"
- Implication: Every agent mistake is a CLAUDE.md improvement opportunity

**Shift 3: Skills are captured patterns, not pre-planned features**
- Old: "Plan all the skills I'll need upfront"
- New: "Do the task manually 3 times → see the pattern → capture it as a skill"
- Implication: Skills emerge from practice, not from architecture astronautics

**Shift 4: The vault is the agent's memory, not yours**
- Old: "I need to remember where everything is"
- New: "The agent searches the vault; I just need to ensure notes are findable"
- Implication: Invest in tags, frontmatter, and naming conventions over folder hierarchy

**Shift 5: Compound learning is the whole point**
- Old: "Each session is independent"
- New: "Each session builds on every previous session via learnings.md + CLAUDE.md updates"
- Implication: The 5 minutes spent logging learnings at session end is the highest-ROI activity

---

## 9. QUICK-START COMMAND SEQUENCE

If you want to get operational tonight in one session:

```bash
# 1. Navigate to vault
cd /path/to/your/obsidian/vault

# 2. Install Kepano's skills
git clone https://github.com/kepano/obsidian-skills.git /tmp/obs-skills
mkdir -p .claude/skills .claude/rules
cp -r /tmp/obs-skills/.claude/* .claude/

# 3. Create minimal CLAUDE.md
cat > CLAUDE.md << 'EOF'
# CLAUDE.md
You are operating inside my Obsidian vault.
- Read `_meta/vault-map.md` for navigation
- Use [[wikilinks]] for all internal links
- Always add YAML frontmatter to new notes
- After every task, append a learning to `_meta/learnings.md`
- Ask before modifying existing notes
EOF

# 4. Create meta folder
mkdir -p _meta
echo "# Vault Map\n\nSee folder structure for navigation." > _meta/vault-map.md
echo "# Learnings Log\n\n---" > _meta/learnings.md

# 5. Start Claude Code
claude
```

Then in Claude Code:
```
> Read CLAUDE.md and the vault structure. Tell me what you see and suggest 3 improvements.
```

You're now operating. Everything else is iteration.

---

*Generated using Skills Mastery System — Leverage Points × Systems Thinking*
*Constraint: 2–4 hr evening sessions | Target: Operational Obsidian AI OS in 7 days, mastery in 30*
