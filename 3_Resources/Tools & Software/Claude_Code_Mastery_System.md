# Claude Code Mastery System
### Systems-Based Skill Acceleration Plan for KN Nguyen

**Skill**: Master Claude Code as a full-stack agentic development platform  
**Target Outcome**: Build autonomous multi-agent pipelines for defense engineering projects within 30 days  
**Constraints**: 2-4 hours/evening (Vietnam time), existing Claude Code + MCP infrastructure, defense engineering context  
**Current Level**: Intermediate (24+ custom skills, Clawdbot running, MCP integrations working)

---

## 0. CLAUDE CODE TEAM'S 10 POWER PATTERNS (Source: Boris Cherny's Team)

These 10 patterns come directly from the Claude Code team's internal workflow. Each is mapped to a leverage point and an implementation priority for your defense engineering context.

### Pattern Map

| # | Pattern | Leverage Point | Your Priority | Implementation |
|---|---------|---------------|---------------|----------------|
| **1** | **Parallel Sessions (Git Worktrees)** — Run 3-5 CC sessions simultaneously across worktrees. Shell aliases (za, zb, zc) for instant switching. | L10: Stock-flow structure | **HIGH** — Run BB-01 firmware + V-SMASH docs + TDR ISR in parallel | Day 8: Set up 3 git worktrees for your 3 active defense projects. Create shell aliases. Each worktree = one CC session = one product stream. |
| **2** | **Plan Mode for Complex Tasks** — Claude 1 writes plan, Claude 2 reviews as staff engineer. If sideways → re-plan. Also use plan mode for *verification*, not just building. | L6: Information flows | **HIGH** — Every defense design decision needs plan-then-review | Day 3: On next complex task, start with "plan this first, don't code yet." Then open second session to review the plan. Use plan mode for DfX verification. |
| **3** | **CLAUDE.md as Memory System** — After EVERY correction: "Update CLAUDE.md so you don't make that mistake again." Ruthlessly edit. Mistake rates actually drop over time. | L7: Reinforcing loop | **CRITICAL** — This IS your compound learning loop applied to CC | Day 1: Start doing this immediately. Every time Claude makes a mistake, say those exact words. Track mistake-rate drop over 2 weeks. This is the single highest-ROI habit. |
| **4** | **Turn Repeat Work into Skills** — If you do it >1x/day, make it a skill or command. Examples: /techdebt, sync Slack+GDrive+Asana+GitHub in one context, analytics agents. | L4: Self-organization | **MEDIUM** — You already have 24+ skills; audit for gaps | Day 5: List your 5 most frequent manual tasks this week. Convert top 2 into skills/commands. You know the pattern — your skill library is already strong. |
| **5** | **Autonomous Bug Fixing** — Paste Slack bug thread → say "fix". Point at failing CI tests. Point at Docker logs. Let Claude work autonomously. | L9: Delays (compress to near-zero) | **HIGH** — Defense firmware bugs currently block gate passage | Day 10: Next bug on BB-01 or MTB-20, paste the error thread + logs and say "fix this." Time it vs. manual debugging. |
| **6** | **Harsh Reviewer ("Grill Master")** — Prompts: "Grill me on these changes." "Prove this works." "Scrap this and implement the elegant version." Demand rigorous review before any PR. | L8: Balancing loops (strengthen) | **HIGH** — Maps directly to Workshop X Gate reviews | Day 4: Before your next commit, tell Claude: "Review my changes like a senior defense engineer. Grill me. Don't approve until I pass." Use for G2 DfX reviews. |
| **7** | **Terminal Setup Matters** — Ghostty terminal, /statusline (context usage + branch), color-coded tabs per worktree, voice dictation (~3x faster than typing). | L12: Parameters | **LOW** — Optimize after core patterns are working | Day 14+: Install Ghostty if not using it. Set up /statusline. Test voice dictation for Vietnamese + English prompts. |
| **8** | **Use Subagents** — Say "use subagents" for more compute. Offload narrow tasks to keep context clean. Route permission checks to Opus via hooks. | L4: Self-organization | **HIGH** — Core to your multi-agent pipeline goal | Day 6: On a complex task, explicitly add "use subagents for research tasks" to your prompt. Observe how CC delegates. Then build custom subagents in Week 2. |
| **9** | **Claude for Analytics** — BigQuery CLI skill. Works with any DB that has CLI/MCP/API. One engineer hasn't written SQL in 6+ months. | L6: Information flows | **MEDIUM** — Useful for Airtable analytics on gate data | Day 12: Create an analytics skill that queries your Airtable project data via MCP. Generate gate passage reports automatically. |
| **10** | **Learn WITH Claude** — Enable "Explanatory" output in /config. Generate HTML presentations. ASCII diagrams of protocols. Build spaced-repetition skill: explain understanding → Claude fills gaps → stores result. | L2: Mental model | **HIGH** — Accelerates your Pahl-Beitz + defense learning | Day 2: Run `/config` and enable Explanatory output. Next time you encounter unfamiliar code/protocol, ask Claude to draw ASCII diagram + explain. You already have engineering-feynman skill — combine with this. |

### Critical Insight: The Compound Memory Loop (Pattern #3)

This is the most important pattern from the whiteboard. It creates a self-improving reinforcing loop:

```
CORRECTION (Mistake Made)
        │
        ▼
Tell Claude: "Update CLAUDE.md
so you don't make that mistake again"
        │
        ▼
CLAUDE.md (Memory System)
        │
        ▼
MISTAKE RATE DROPS ──→ Ruthlessly Edit ──→ Even better CLAUDE.md
        │
        └──→ Compounds over weeks/months into near-zero error rates
```

This is an L7 reinforcing loop that, combined with your compound-engineering skill, creates the exact "agent logs → CLAUDE.md improvements → better agents" flywheel described in Phase 3. Start this on Day 1 — it compounds from the moment you begin.

---

## 1. SYSTEM ANALYSIS

### Skill as a System

```
INPUTS                    THROUGHPUTS                    OUTPUTS
─────────────────────    ────────────────────────       ──────────────────────
• Evening sessions       • Mental model formation       • Autonomous agents
  (2-4 hrs)             • Pattern recognition           • Multi-agent pipelines  
• Resources (below)     • Hands-on building             • Defense product velocity
• Existing infra        • Feedback from real use         • Compound learning loops
• Defense projects      • D-M-I-R reflection            • Self-improving systems
```

### Current Feedback Loops

**Reinforcing (accelerate these)**:
- R1: Build → Use in real project → See results → Build more (already active)
- R2: Skills create → Skills compound → New capabilities emerge (active via 24+ skills)
- R3: CLAUDE.md improves → Claude performs better → Better CLAUDE.md (needs strengthening)

**Balancing (remove these)**:
- B1: Information overload from 30+ resources → Analysis paralysis → No implementation
- B2: Perfectionist agent design → Slow iteration → Stale agents
- B3: Context rot in long sessions → Diminishing returns → Frustration

### True vs. Perceived Constraints

| Constraint | Type | Binding? | Intervention |
|-----------|------|----------|-------------|
| 2-4 hrs/evening | True | Yes | Design micro-practice units (30-min blocks) |
| "Need to read all resources first" | Perceived | No | Deploy-to-learn: build first, reference just-in-time |
| Vietnamese defense context is unique | Partially true | No | Claude Code is domain-agnostic; your skills bridge the gap |
| "Multi-agent is complex" | Perceived | No | You already run 2-agent PoCs; scale incrementally |

---

## 2. LEVERAGE POINT INTERVENTIONS

| Rank | Leverage Point | Change | Expected Multiplier | Monitoring Plan (3 Metrics) | Pilot Actions (First 7 Days) |
|------|---------------|--------|--------------------|-----------------------------|------------------------------|
| 1 | **L2: Mental Model** — "Claude Code is a coding tool" → "Claude Code is an operating system layer" | Aakash Gupta nails it: "CC transforms AI from a chat tool into an operating system layer that runs across your entire workflow." Stop thinking terminal-first. Think: CLAUDE.md = constitution, Skills = auto-loaded expertise, Hooks = deterministic gates, Subagents = delegation, MCP = USB-C for AI (one protocol, 200+ connections). Your 24 skills already prove this. Now architect the full system. | **20x** — Unlocks entire feature stack instead of subset. Every session becomes system-building, not task-completing. | 1. Count of features actively used (target: 7/7 core features by Day 7) 2. Time spent building vs. researching (target: 80/20) 3. Number of "I didn't know CC could do this" moments per session | - Day 1: Read Aakash Gupta cheatsheet + alexop.dev full-stack guide + Shrivu's feature post - Day 2: Map YOUR current CC usage against the full feature stack (identify gaps) - Day 3: Implement ONE new feature you haven't used (e.g., hooks or agent teams) |
| 2 | **L6: Information Flow** — Compress feedback from "build → test later" to "build → instant validation" | Install hooks that auto-validate on every tool use. PostToolUse hooks run linters/tests. PreToolUse hooks gate dangerous operations. Session_start hooks inject fresh context. You get instant feedback on every agent action. | **15x** — 30x more iterations per session × 0.5 (setup cost) = 15x effective improvement over manual validation | 1. Hook count installed and active (target: 5+ by Day 7) 2. Errors caught by hooks vs. caught manually 3. Time-to-feedback after each code change (target: <5 sec) | - Day 1: Run `/hooks` in Claude Code, explore the interface - Day 2: Install PostToolUse hook for auto-linting Python files - Day 3: Install session_start hook that loads git status + project context - Day 4: Study disler/claude-code-hooks-mastery repo, adapt 2 more hooks |
| 3 | **L7: Reinforcing Loop** — Install "Build → Document → Compound → Build Better" loop | After each session, Claude Code extracts learnings into CLAUDE.md and skill files automatically. Use your existing compound-engineering skill. Each session makes the next session more effective. This is YOUR proven pattern — now apply it specifically to CC mastery. | **10x** — Compound over 30 days: each session 5% better × 30 sessions = 4.3x from compounding alone, plus cascade effects on all projects | 1. CLAUDE.md growth rate (lines added per session) 2. Skill files created or updated per week 3. Subjective "Claude got it right first try" rate (target: increase 10%/week) | - Day 1: Create a CC-specific CLAUDE.md section for your defense projects - Day 2: Set up end-of-session /compound command that extracts learnings - Day 3: Run first full compound cycle; review what it captured |
| 4 | **L4: Self-Organization** — Build subagent pipeline for defense engineering workflow | Create a 3-stage pipeline: spec-writer → architect-reviewer → implementer-tester, modeled after the PubNub pattern but adapted for Workshop X's 3-Gate system. Each gate becomes a subagent checkpoint. Your D-M-I-R framework maps directly. | **8x** — Automates 60% of repetitive engineering documentation; frees you for high-leverage design decisions | 1. Number of subagents operational (target: 3 by Day 14) 2. Tasks delegated to subagents per session (target: 2+) 3. Quality of subagent output (self-assessed 1-5 scale) | - Day 5: Create first subagent (start with a simple code-reviewer) - Day 6: Create defense-doc-generator subagent using your CAD documentation skill - Day 7: Wire subagents together with a slash command pipeline |
| 5 | **L9: Delays** — Reduce context-loading delay from "re-explain every session" to "instant recall" | Master CLAUDE.md architecture + memory features. Claude Code now auto-records memories. Structure your CLAUDE.md as: project context (static) → coding standards → architecture → active tasks (dynamic). Use `--resume` and `--continue` for session continuity. | **5x** — Eliminates 15-20 min context re-loading per session × daily = 2+ hrs/week recovered | 1. Time from session start to productive work (target: <2 min) 2. Number of times you re-explain context to Claude (target: 0) 3. CLAUDE.md structure quality (rated against best practices) | - Day 1: Audit your current CLAUDE.md against Shrivu's 13KB structure - Day 3: Restructure CLAUDE.md with clear sections - Day 5: Test `claude --resume` workflow for multi-day projects |

---

## 3. PHASED LEARNING ARCHITECTURE

### Phase 1: Foundation Lock-In (Days 1-7)
**Goal**: Master the 7 core building blocks  
**Time**: 30 min learning + 90 min building per evening

**The 7 Building Blocks** (learn in this order):

1. **CLAUDE.md** — Your agent's constitution
   - Read: Shrivu Shankar's post on CLAUDE.md (blog.sshh.io)
   - Do: Restructure your CLAUDE.md with project context, coding standards, architecture sections
   - Verify: Start new session, check if Claude "just knows" your project

2. **Slash Commands** — Repeatable workflows
   - Read: alexop.dev slash commands guide
   - Do: Create `/start-session`, `/end-session`, `/compound` commands
   - Verify: Run each command 3x, confirm consistency

3. **Skills** — Auto-invoked expertise (you already have 24+)
   - Read: Official skills documentation
   - Do: Audit your 24 skills — which ones actually trigger? Fix descriptions of non-triggering ones
   - Verify: Give Claude a task that SHOULD trigger a skill, confirm it loads

4. **Hooks** — Deterministic control points
   - Read: disler/claude-code-hooks-mastery on GitHub
   - Do: Install 3 hooks (session_start, PostToolUse linter, notification)
   - Verify: Trigger each hook, confirm it fires

5. **Subagents** — Delegated specialists
   - Read: PubNub best practices guide + official docs
   - Do: Create one subagent with scoped tools and custom system prompt
   - Verify: Delegate a real task, evaluate output quality

6. **MCP Servers** — "USB-C for AI" (you already have Airtable, GitHub, etc.)
   - Context: Aakash Gupta maps the MCP ecosystem across 4 categories. Your defense context needs:
   
   | Category | Available MCPs | Your Defense Use Case |
   |----------|---------------|---------------------|
   | Developer Tools | GitHub, GitLab | BB-01/V-SMASH firmware repos, PR automation |
   | Productivity | Notion, Slack | Team communication, project documentation |
   | Data & Research | PostgreSQL, Filesystem | Sensor data analysis, CAD file management |
   | Communication | Gmail, Buffer | Supplier communication, gate review notifications |
   
   - Quick add: `claude mcp add --transport http notion https://mcp.notion.com/mcp`
   - Do: Audit which MCP servers are active, which consume excessive context
   - Do: Enable Tool Search if not already active (85% context reduction!)
   - Verify: Check context usage before/after optimization

7. **Agent Teams** — Multi-agent collaboration (experimental)
   - Read: Official agent teams docs (requires CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1)
   - Do: Set environment variable, test basic 2-agent team
   - Verify: Confirm agents can hand off and collaborate

### Phase 2: Pipeline Construction (Days 8-14)
**Goal**: Build a working defense engineering pipeline  
**Time**: Focus on building, reference resources just-in-time

**Pipeline Architecture** (adapted from PubNub pattern for Workshop X):

```
[/start-feature] ──→ [spec-writer agent] ──→ [architect-reviewer agent]
                           │                         │
                     reads: requirements       validates: DfX, 3-Gate
                     writes: spec.md           writes: review.md
                           │                         │
                           ▼                         ▼
                  [READY_FOR_REVIEW]        [READY_FOR_BUILD]
                           │                         │
                           └──────────┬──────────────┘
                                      ▼
                          [implementer-tester agent]
                                      │
                              writes: code + tests
                              runs: validation hooks
                                      │
                                      ▼
                               [READY_FOR_GATE]
```

**Daily Build Tasks**:
- Day 8: Create spec-writer subagent (reads BB-01/V-SMASH requirements, outputs structured specs)
- Day 9: Create architect-reviewer subagent (validates against DfX criteria, Vietnamese MIL-STDs)
- Day 10: Create implementer-tester subagent (generates code + documentation)
- Day 11: Wire pipeline with hooks (queue file tracks state transitions)
- Day 12: Test full pipeline on a real BB-01 task
- Day 13: Debug and iterate based on real results
- Day 14: Document pipeline in CLAUDE.md, create /run-pipeline command

### Phase 3: Compound & Scale (Days 15-30)
**Goal**: Self-improving autonomous workflows  
**Time**: Shift from learning to operating; compound learning loops take over

**Week 3 Focus — Autonomous Operations**:
- Set up overnight autonomous runs using Claude Code on web (no local setup needed)
- Create /overnight command that queues tasks for batch processing
- Install pre_compact hook to preserve transcripts before context compaction
- Use `claude --resume` to review overnight agent work each morning

**Week 4 Focus — Multi-Agent Mission Control**:
- Scale from 3-agent pipeline to 5+ agents (add QA agent, documentation agent)
- Implement the "Master-Clone" architecture (main agent delegates to copies of itself)
- Connect to GitHub Actions for CI/CD integration
- Build feedback loop: agent logs → CLAUDE.md improvements → better agents

---

## 4. RESOURCE MAP (Priority-Ordered)

### Tier 1: Read FIRST (Days 1-3) — Mental Model Shifts
These resources change HOW you think about Claude Code:

| Resource | Why First | Time | Key Insight |
|----------|-----------|------|-------------|
| [Shrivu Shankar: How I Use Every CC Feature](https://blog.sshh.io/p/how-i-use-every-claude-code-feature) | Master-Clone architecture > custom subagents; CLAUDE.md is king | 30 min | "Give main agent context, let it self-orchestrate" |
| [alexop.dev: Full Stack Guide](https://alexop.dev/posts/understanding-claude-code-full-stack/) | Maps how ALL features connect as a system | 20 min | Features stack: MCP → CLAUDE.md → Commands → Skills → Subagents → Hooks |
| [alexop.dev: Customization Guide](https://alexop.dev/posts/claude-code-customization-guide-claudemd-skills-subagents/) | Practical "when to use what" decision framework | 20 min | Skills = auto, Commands = manual, Subagents = isolated, CLAUDE.md = always-on |
| [Aakash Gupta: Master Claude Code Complete Guide](https://lnkd.in/dcibJhzQ) | The single most comprehensive cheatsheet — covers all 9 sections from setup to scaling | 15 min | "From Assistant to Operating System" — CC transforms AI from chat to a system layer across your entire workflow |

### Tier 1.5: ESSENTIAL COMMANDS & WORKFLOW (Memorize in Week 1)

**The 4-Phase Power User Workflow** (from Aakash Gupta's guide):

```
ANALYZE & RESEARCH          PLAN & DECIDE             CREATE & EXECUTE         SCALE & REPEAT
──────────────────         ──────────────            ──────────────────       ────────────────
• Synthesize feedback      • Draft PRDs from notes   • Generate presentations • Recurring workflows
• Research competitors     • Create roadmap          • Write code/prototypes  • Connect tools via MCP
• Extract from documents   • Build decision          • Create reports & docs  • Create reusable skills
• Read & summarize files     frameworks              • Build dashboards       • Schedule batch tasks
```

**For your defense context, this maps to**:
- Analyze: Read MIL-STD requirements, competitor LOMAH systems, sensor datasheets
- Plan: Draft BB-01 specs, V-SMASH architecture decisions, Gate review prep
- Create: Generate CAD documentation, firmware code, test procedures
- Scale: Automate gate reporting via Airtable MCP, reusable DfX review skills

**Essential Commands Cheatsheet** (print this):

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| `/help` | Show all available commands (including your custom ones) | When you forget what's available |
| `/clear` | Reset context (use between tasks!) | Prevents context rot — use after each major task |
| `/compact` | Compress conversation to save tokens | When context gets heavy mid-session |
| `/model` | Switch between Opus/Sonnet/Haiku | Opus for planning, Sonnet for execution, Haiku for quick tasks |
| `/mcp` | Check MCP server connections | Debug when Airtable/GitHub MCP isn't responding |
| `/doctor` | Diagnose installation issues | When something breaks |
| `/config` | Open settings (enable Explanatory output here!) | Day 2 setup |
| `Esc` | Cancel/Stop current generation | When Claude goes sideways |
| `Esc twice` | Rewind to last checkpoint | **KEY PATTERN**: Rewind instead of re-prompting from scratch |
| `Ctrl+V` | Paste image (not Cmd+V on Mac!) | Paste screenshots of bugs, whiteboard designs, error messages |
| `!` prefix | Run shell command directly | `!git status`, `!npm test` without leaving CC |
| `@filename` | Reference specific file | `@report.csv`, `@data/` for directories |

**Pro Pattern: Checkpoint + Iterate** (from Aakash Gupta):

```
Step 1: "Plan this first, don't execute yet"
         │
         ▼
Step 2: Review the plan (yourself or via second CC session)
         │
         ▼
Step 3: "Execute the plan. Create checkpoints."
         │
         ▼
Step 4: IF something goes wrong → Esc twice (rewind to checkpoint)
         │
         ▼
Step 5: "Iterate with specific feedback: [exactly what was wrong]"
         │
         └──→ Repeat Step 3-5 until done
```

This maps directly to CC Team Pattern #2 (Plan Mode) and your Pahl-Beitz systematic design process. Plan → Review → Execute → Verify is the same structure as Task Clarification → Conceptual Design → Embodiment → Detail Design.

**CLAUDE.md Example Structure** (adapted from Aakash Gupta for defense engineering):

```markdown
# Project: BB-01 LOMAH Acoustic Detection System

## Key Commands
- npm run build
- npm test
- python scripts/acoustic_sim.py

## Style Guide
- Use Python for signal processing, C for firmware
- Follow Vietnamese MIL-STD naming conventions
- All documentation bilingual (Vietnamese primary, English secondary)

## Important Context
- Piezoelectric contact sensors (NOT MEMS — decided Sprint 3)
- Galvanized steel + marine paint system (NOT stainless)
- Gate 2 DfX Review deadline: [date]
- Deploy target: Workshop X production line

## Mistakes Not To Repeat
- Don't use MEMS microphones — SPL requirements exceed MEMS range
- Don't assume marine-grade = stainless steel in Vietnamese supply chain
- Always check Nhật Tảo availability before specifying components
```

### Tier 2: Build WITH (Days 4-7) — Hands-On References
Reference these while building:

| Resource | Use Case | Link |
|----------|----------|------|
| disler/claude-code-hooks-mastery | Hook implementation patterns for all 13 events | [GitHub](https://github.com/disler/claude-code-hooks-mastery) |
| PubNub: Best Practices for Subagents | Production subagent pipeline patterns | [pubnub.com](https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/) |
| Shipyard CLI Cheatsheet | Quick reference for all commands/flags | [shipyard.build](https://shipyard.build/blog/claude-code-cheat-sheet/) |
| hesreallyhim/awesome-claude-code | Curated tools, workflows, and community resources | [GitHub](https://github.com/hesreallyhim/awesome-claude-code) |

### Tier 3: Deep Dives (Days 8-14) — Expand When Needed

**Long Courses** (pick ONE, audit selectively):

| Course | Best For | Link |
|--------|----------|------|
| Claude Code: A Highly Agentic Coding Assistant | Structured beginner-to-intermediate | [Link](https://lnkd.in/dF6XyF4w) |
| Claude Code in Action | Practical project-based | [Link](https://lnkd.in/dCgmg2va) |
| Claude Code: Software Engineering with AI Agents | Advanced agent patterns | [Link](https://lnkd.in/dj5KPMUd) |

**YouTube** (watch at 2x while commuting/eating):

| Video | Why Watch | Link |
|-------|-----------|------|
| Claude Code Skills: Automate Everything You Do | Directly relevant to your 24+ skills | [Link](https://lnkd.in/d7ah3v6C) |
| Build with Multiple AI Agents using Claude Code | Multi-agent architecture patterns | [Link](https://lnkd.in/d-ez3kAH) |
| My Claude Code Workflow for 2026 | See a power user's daily workflow | [Link](https://lnkd.in/dVPdn3G6) |

### Tier 4: Follow for Continuous Learning (Ongoing)

**Newsletters** (subscribe, skim daily):
- THE CODE (160K+ community, daily pro-hacks) — [Link](https://lnkd.in/dYFtfK6U)
- Joe Njenga's newsletter — [Link](https://lnkd.in/diYv-GuA)

**Creators** (follow on X/LinkedIn):
- Boris Cherny (@bcherny) — Head of Claude Code, official source
- Thariq (@trq212) — Advanced patterns and techniques
- Alex Finn — [LinkedIn](https://lnkd.in/dhnN8arU)
- Ray Amjad — [LinkedIn](https://lnkd.in/dGpuZEBD)

**GitHub Repos** (star and reference):
- [awesome-claude-code](https://lnkd.in/dxUMKSPR) — Community curated skills
- [awesome-claude-code-subagents](https://lnkd.in/dwabN-VX) — Subagent patterns
- [awesome-mcp-servers](https://lnkd.in/dfqS3ZRp) — MCP server directory
- [claude-code-workflows](https://lnkd.in/dS7QFU4V) — Workflow patterns
- [claude-code-template](https://lnkd.in/dgmqrp5y) — Starter templates
- [vibe-coding-playbook](https://lnkd.in/d3xqXDZr) — Vibe coding patterns

---

## 5. ANTI-PATTERNS TO AVOID

| Anti-Pattern | Why It Fails | Do This Instead |
|-------------|-------------|-----------------|
| Read all 30+ resources before building | Analysis paralysis; resources go stale | Read Tier 1 (4 articles now), then BUILD. Reference Tier 2 just-in-time. |
| Copy expert CLAUDE.md verbatim | Their context ≠ your context; defense engineering has unique needs | Start with YOUR project context, evolve through compound learning |
| Create 10 subagents on Day 1 | Untested agents compound errors | Start with 1 subagent, validate, then add incrementally |
| Separate CSS/JS files for skills | Claude Code skills work best as single-file SKILL.md | Keep skills self-contained with inline instructions |
| Long uninterrupted Claude sessions | Context rot degrades quality after ~45 min of heavy tool use | Work in 30-min focused blocks. Use `/clear` between tasks, `/compact` mid-task. |
| Ignore hooks because "they're optional" | Missing the most powerful deterministic control mechanism | Install at least 3 hooks in Week 1 — they're your quality gates |
| Re-prompting from scratch when things go wrong | Wastes tokens and context rebuilding what was already known | Use **Esc twice** to rewind to checkpoint, then iterate with specific feedback |
| Using Opus for everything | Burns tokens on tasks that Sonnet/Haiku handle fine | `/model` to switch: Opus for planning/review, Sonnet for execution, Haiku for quick lookups |
| Not using `/clear` between tasks | Previous task context pollutes new task reasoning | `/clear` resets context between unrelated tasks — your sessions will be 2x cleaner |

---

## 6. DAILY PRACTICE PROTOCOL

### Evening Session Structure (2-4 hours)

```
[0:00-0:05]  Session Start
             └─ Run /start-session (loads context via hook)
             └─ Review CLAUDE.md changes from last session
             └─ Set 1-2 specific goals for tonight

[0:05-0:35]  Block 1: BUILD (primary task)
             └─ Work on current pipeline stage
             └─ Real defense project integration
             └─ Hooks validate in real-time

[0:35-0:40]  Micro-break + Quick Review
             └─ What worked? What surprised me?
             └─ Adjust approach if needed

[0:40-1:10]  Block 2: BUILD (continue or new task)
             └─ Continue primary task OR
             └─ Implement one new CC feature
             └─ Test with real project data

[1:10-1:15]  Micro-break

[1:15-1:45]  Block 3: LEARN + BUILD
             └─ Reference ONE Tier 2/3 resource
             └─ Immediately implement what you learned
             └─ No reading without building

[1:45-2:00]  Compound Cycle
             └─ Run /compound to extract session learnings
             └─ Update CLAUDE.md with new patterns
             └─ Update relevant skill files
             └─ Set tomorrow's starting point

[OPTIONAL 2:00-4:00]  Deep Build Session
             └─ Complex pipeline construction
             └─ Multi-agent testing
             └─ Overnight autonomous task setup
```

### Weekly Cadence

| Day | Focus | Deliverable |
|-----|-------|------------|
| Mon | Foundation feature (Phase 1) or Pipeline stage (Phase 2) | 1 new capability working |
| Tue | Hooks + validation | 1 new hook installed and tested |
| Wed | Subagent development | 1 subagent created or improved |
| Thu | Integration testing | Pipeline tested on real defense task |
| Fri | Compound review + planning | Updated CLAUDE.md, next week's priorities |
| Sat-Sun | Deep build or rest | Optional: overnight autonomous runs |

---

## 7. SUCCESS METRICS (30-Day Targets)

| Metric | Day 7 | Day 14 | Day 30 |
|--------|-------|--------|--------|
| CC features actively used | 5/7 | 7/7 | 7/7 + advanced patterns |
| Hooks installed | 3 | 5 | 8+ |
| Subagents operational | 1 | 3 | 5+ |
| Tasks delegated to agents/day | 1 | 3 | 5+ |
| CLAUDE.md size (lines) | 100+ | 200+ | 300+ (curated) |
| Time to productive session | <5 min | <2 min | <1 min |
| Defense tasks accelerated | 1 | 3 | 5+ |
| Overnight autonomous runs | 0 | 1 test | Regular |
| "First-try success" rate | 40% | 60% | 80% |

---

## 8. INTEGRATION WITH EXISTING SYSTEMS

### How Claude Code Mastery Compounds Your Current Stack

```
YOUR CURRENT SYSTEM                    CLAUDE CODE MASTERY ADDS
──────────────────────                 ────────────────────────
Clawdbot (Telegram bot)         ──→    Subagents handle what Clawdbot delegates
24 Custom Skills                ──→    Skills auto-invoke with better descriptions
MCP Servers (Airtable, GitHub)  ──→    Tool Search reduces context bloat by 85%
D-M-I-R Framework               ──→    Each D-M-I-R phase becomes a subagent stage
3-Gate Quality System            ──→    Hooks enforce gate passage automatically
Compound Learning Loops          ──→    /compound command + session_start hooks
BB-01/V-SMASH Projects          ──→    Pipeline generates docs, reviews, tests
```

### Specific Defense Engineering Applications

1. **BB-01 LOMAH**: Subagent generates acoustic detection algorithms, hooks validate against MIL-STD requirements
2. **V-SMASH**: Pipeline automates fire control documentation through 3-Gate system
3. **MTB-20**: Agent team manages naval drone firmware iterations with automatic testing
4. **TDR**: Subagents handle ISR data processing pipeline development

---

*Generated using Skills Mastery System — leverage point analysis applied to Claude Code skill acquisition*  
*Deploy to learn. Build first, reference just-in-time. Compound every session.*

---

## 9. QUICK-START: YOUR FIRST 7 DAYS (Priority Order)

Based on the CC Team's 10 patterns + leverage point analysis, here's the exact sequence:

| Day | Primary Action | CC Team Pattern | Time |
|-----|---------------|-----------------|------|
| **Day 1** | Start the CLAUDE.md memory loop. Every correction → "Update CLAUDE.md so you don't make that mistake again." This is Pattern #3 and it compounds from minute one. | #3 CLAUDE.md as Memory | 15 min setup, then ongoing |
| **Day 1** | Read Tier 1 articles (Shrivu + alexop.dev). Map your current CC usage vs full feature stack. | Mental model shift | 60 min |
| **Day 2** | Enable Explanatory output in `/config`. Use ASCII diagrams on your next unfamiliar system. Combine with your engineering-feynman skill. | #10 Learn with Claude | 30 min |
| **Day 3** | First plan-mode session: "Plan this first, don't code yet." Open second terminal to review the plan as staff engineer. Try on a real BB-01 or V-SMASH task. | #2 Plan Mode | 90 min |
| **Day 4** | Use Claude as Grill Master for your next code changes. "Review like a senior defense engineer. Don't approve until I pass." Apply to Gate 2 prep. | #6 Harsh Reviewer | 60 min |
| **Day 5** | Audit your top 5 repeated tasks. Convert 2 into skills or commands. Also: install 3 hooks (session_start, PostToolUse, notification). | #4 Skills + Hooks | 120 min |
| **Day 6** | Try "use subagents" on a complex task. Observe delegation patterns. Create your first custom subagent. | #8 Subagents | 90 min |
| **Day 7** | Full compound cycle: review everything built this week, update CLAUDE.md, update skill files, set Week 2 pipeline construction goals. | Compound loop | 60 min |

**After Day 7**: You'll have the mental model, the memory loop, hooks, a subagent, and reviewed code — everything needed to start building the defense engineering pipeline in Week 2.

**The one thing to do RIGHT NOW**: Open Claude Code and say "Update CLAUDE.md so you don't make that mistake again" after the very next correction. The compound memory loop starts today.
