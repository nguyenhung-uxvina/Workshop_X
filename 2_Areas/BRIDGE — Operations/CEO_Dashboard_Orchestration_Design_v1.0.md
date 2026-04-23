---
project: Workshop X — CEO Operating System
type: orchestration-design (Pattern 3 — workflow orchestration)
scope: CEO Pulse Dashboard automation — weekly/monthly/quarterly review cycles
       across 3 frameworks, 30 skills, 5 active projects, learning feedback loop
version: 1.0
created: 2026-03-07
pattern_3: Workflow Orchestration — multi-framework, multi-cadence, learning loop
           (same pattern as IRONMESH Framework Orchestration Design v1.0)
key_insight: The CEO Dashboard is not a document to read — it is a state machine
             that runs on 3 cadences (weekly/monthly/quarterly), collects 7 metrics
             from sub-agents, and surfaces only alerts + 1 action to CEO.
contrast: IRONMESH orchestrates DESIGN work across projects.
          This orchestrates MANAGEMENT work across frameworks.
---

# CEO Dashboard — Orchestration Design v1.0
## BRIDGE x FORGE x HELIX: Master Agent x 7 Sub-Agents x 4 HITL Checkpoints

---

## SECTION 0: WHY THIS IS A DIFFERENT PATTERN 3 PROBLEM

IRONMESH orchestrates engineering design across multiple projects and phases.
CEO Dashboard orchestrates organizational health across multiple frameworks and cadences.

| Dimension | IRONMESH | CEO Dashboard |
|-----------|----------|---------------|
| Process structure | Multi-project, phase-gated | Multi-framework, cadence-gated |
| Time scale per cycle | Weeks (design phases) | Week / Month / Quarter |
| Agent types | Design agents (ODI, REQ, CONCEPT) | Metric collectors + analyzers |
| Human role at HITL | Gate reviewer (A/B/C/D) | Judgment: constraint naming, action selection |
| "I'm not sure" response | Retry → escalate to KN | Surface as "?" — missing data IS the signal |
| Fallback type | Pause project, reroute capacity | Show "?" + flag "no Status.md updated" |
| State persistence | Per-project phase state | Per-metric trend (weekly rolling) |
| Highest consequence | Wrong concept selected → 10x rework | Wrong constraint named → month wasted on non-bottleneck |

**The forcing function:** CEO has 5 minutes Monday morning. The orchestration must collect, analyze, and compress 30 skills x 5 projects x 3 frameworks into 7 numbers + 0-3 alerts + 1 action. Everything else is noise.

---

## SECTION 1: DESIGN PRINCIPLES

### P1 — Metrics Are Collected, Not Invented

```
WRONG: AI generates scores based on "assessment" of project state
RIGHT: AI reads state files (Status.md, Galaxy/, ICD logs) and COUNTS
       dP/dt = count physical iterations in Status.md
       Galaxy growth = count files in 5_Galaxy/
       Integration Debt = count open items in ICD tracking
If no state file exists → metric = "?" → that IS the alert
```

### P2 — Alerts Are Consequences, Not Observations

```
WRONG: Alert: "dP/dt = 0"  (observation, CEO already knows)
RIGHT: Alert: "dP/dt = 0 for 2+ weeks. AST-MSL-001 gate in 28d.
        At current rate: gate will be missed." (consequence)
Alert generation requires: metric value + trend + deadline → consequence
```

### P3 — One Action Means One Action

```
WRONG: "Priorities this week: confirm Q1+Q3, send ICD, run /forge-shift,
        decide XUONG-UUV tier, delete legacy skills"
RIGHT: "Action: Confirm Q1 (bolted) + Q3 (35 kg/m3) for AST-MSL-001.
        This unblocks BOM generation → sourcing → physical gate."
CEO constraint: attention is finite. One action = one constraint addressed.
Master selects action by: which metric is RED + which has highest unblock value.
```

### P4 — Cadence Gates Are Not Optional

```
Weekly:    Monday morning. 5 min. Pulse update.
Monthly:   First Monday of month. 15 min. Score update + constraint review.
Quarterly: First Monday of quarter. 60 min. Trajectory + portfolio + identity.

If CEO skips a weekly → next session: Master forces Pulse update BEFORE any work.
If CEO skips a monthly → composite health scores go stale → decisions drift.
Cadence is the heartbeat. No heartbeat = dead system.
```

### P5 — Decision Log Is Append-Only

```
Master appends to Decision Log after every CEO decision captured in session.
CEO does NOT need to manually log — Master extracts and appends.
Rolling 4-week window in Pulse Dashboard. Full history in separate log file.
Pattern detection happens at quarterly review: Master surfaces recurring themes.
```

---

## SECTION 2: CONSEQUENCE MAP

> "What fails if AI gets this wrong?" — applied to CEO Dashboard outputs.

| Dashboard Output | What AI Could Get Wrong | Consequence | Severity | Who Decides |
|-----------------|------------------------|-------------|----------|-------------|
| dP/dt count | Counts planning docs as "physical iteration" | False positive → CEO thinks progress exists | HIGH | KN defines "physical" = prototype/test/build only |
| Days to gate | Wrong date or wrong project identified as nearest | CEO focuses on wrong project | HIGH | Master reads Status.md dates; KN confirms |
| Blocking constraint | Names symptom, not root cause | CEO intervenes at wrong level | CRITICAL | KN validates; A-SYSTEMS triggered if same constraint 3+ weeks |
| Galaxy count | Counts non-permanent notes (MOCs, READMEs) | Inflated growth metric | LOW | Master counts only files in 5_Galaxy/ excluding README/ROADMAP |
| AI Dependency Ratio | Miscategorizes C/O/D | CEO overestimates own judgment contribution | MEDIUM | KN self-reports; Master can flag if O-tasks dominate sessions |
| Integration Debt trend | Misses new debt from untracked interfaces | False "stable" signal | HIGH | Master checks ICD files + project Status.md for unresolved items |
| Composite Health scores | AI adjusts scores without evidence | CEO thinks system is improving | CRITICAL | Scores updated ONLY at monthly cadence with explicit evidence per dimension |
| Alert generation | False alarm on non-critical metric | CEO attention wasted; alert fatigue | MEDIUM | Max 3 alerts. RED = consequence within 30 days. YELLOW = trend worsening. |
| Action selection | Selects easy action instead of highest-leverage | Analyst Trap: busy but not progressing | HIGH | Master ranks by: RED metric x unblock value. KN confirms or overrides. |
| Decision Log extraction | Misquotes CEO decision or rationale | Pattern detection corrupted downstream | MEDIUM | CEO reviews Decision Log at quarterly review |

**Gradient:** Blocking constraint misidentification and score inflation are CRITICAL — they corrupt the steering mechanism. False alerts and miscounts are recoverable within one cycle.

---

## SECTION 3: AGENT ARCHITECTURE

### 3.1 Master Agent — CEO Dashboard Orchestrator

```
+----------------------------------------------------------------------+
|  MASTER: CEO Dashboard Orchestrator                                    |
|                                                                        |
|  State held (externalized to files -- NOT session memory):             |
|  +-- pulse: CEO_Pulse_Dashboard.md (7 metrics, alerts, action, log)   |
|  +-- projects[]: 1_Projects/*/Status.md                                |
|  +-- galaxy: 5_Galaxy/ file listing                                    |
|  +-- scores: archived dashboard v1 (monthly reference)                 |
|  +-- decisions: Decision Log section in Pulse Dashboard                |
|                                                                        |
|  SESSION-OPENING PROTOCOL (mandatory, ~2 min):                         |
|  Step 1: Read CEO_Pulse_Dashboard.md --> last week's metrics + alerts  |
|  Step 2: Read progress.md --> current project state                    |
|  Step 3: Check calendar cadence: is today Monday? First-of-month?     |
|  Step 4: If Monday --> trigger WEEKLY cycle                            |
|          If first Monday of month --> trigger MONTHLY cycle first      |
|          If first Monday of quarter --> trigger QUARTERLY cycle first  |
|          If not Monday --> skip pulse update, proceed with work         |
|                                                                        |
|  Responsibilities:                                                     |
|  +-- Routes metric collection to correct sub-agent                     |
|  +-- Runs alert generation after all metrics collected                 |
|  +-- Selects ONE action from alerts (highest-leverage)                 |
|  +-- Appends decisions to Decision Log when CEO decides in session     |
|  +-- Enforces cadence: no work until Pulse updated (if overdue)        |
|  +-- Triggers A-SYSTEMS if same constraint appears 3+ weeks            |
|                                                                        |
|  NEVER:                                                                |
|  +-- Invents metric values without reading source files                 |
|  +-- Generates more than 3 alerts (forces prioritization)              |
|  +-- Suggests more than 1 action (TOC discipline)                      |
|  +-- Updates Composite Health scores outside monthly cadence            |
|  +-- Skips alert when metric = "?" (missing data IS an alert)          |
+----------------------------------------------------------------------+
```

### 3.2 Sub-Agent Roster — Metric Collectors

| Agent | Metric | Source Files | Skill Commands | Output |
|-------|--------|-------------|----------------|--------|
| **A-PHYSICAL** | dP/dt | `1_Projects/*/Status.md` | `/sprint` | `{count: N, items: ["built X", "tested Y"]}` |
| **A-GATE** | Days to next physical gate | `1_Projects/*/Status.md`, `_Project_Brief.md` | `/sprint` | `{project, gate_date, days_remaining}` |
| **A-CONSTRAINT** | Blocking constraint | Last week's Pulse + A-PHYSICAL + A-GATE output | `/constraint` | `{constraint: "1 sentence", severity: RED/YELLOW}` |
| **A-GALAXY** | Galaxy growth | `5_Galaxy/` file listing | (file count) | `{total: N, new_this_week: N, names: []}` |
| **A-DEBT** | Integration Debt trend | ICD files, `1_Projects/*/Status.md` | `/icd` | `{open_items: N, trend: UP/DOWN/STABLE}` |

### 3.3 Sub-Agent Roster — Analysis Agents

| Agent | Role | Trigger | Skill Commands | Output |
|-------|------|---------|----------------|--------|
| **A-ALERT** | Generate 0-3 consequence alerts | After all metrics collected | `/risk` | `{alerts: [{severity, text, source_metric}], max 3}` |
| **A-ACTION** | Select 1 highest-leverage action | After alerts generated | `/constraint`, `/leverage` | `{action, owner, deadline, unblock_value}` |

### 3.4 Cross-Cutting — Cadence Agents

| Agent | Cadence | Trigger | Skill Commands | Output |
|-------|---------|---------|----------------|--------|
| **A-SCORE** | Monthly | First Monday of month | `/bridge-dashboard`, `/forge-portfolio` | Updated B/F/H scores with evidence |
| **A-PATTERN** | Quarterly | First Monday of quarter | `/reflect`, `/archetype` | Decision patterns, recurring themes, constraint trajectory |

**Total: Master + 7 sub-agents + 2 cadence agents. Scoped to metric collection, alert generation, and cadence enforcement.**

---

## SECTION 4: CADENCE STATE MACHINE

```
IDLE (no pulse due)
    | Monday detected OR pulse overdue
    v
COLLECTING
    | A-PHYSICAL reads Status.md files --> dP/dt
    | A-GATE reads Status.md + Brief --> days to gate
    | A-GALAXY counts 5_Galaxy/ files --> growth
    | A-DEBT reads ICD files --> debt trend
    | (CEO self-reports AI Dependency Ratio)
    | All 4 automated metrics collected in parallel
    v
ANALYZING
    | A-CONSTRAINT synthesizes metrics --> 1 blocking constraint
    | A-ALERT generates 0-3 consequence alerts from metrics + trends
    | A-ACTION selects 1 action from alerts (highest unblock value)
    v
PRESENTING (HITL-1: CEO reviews pulse)
    | Master presents: 7 metrics table + alerts + proposed action
    | CEO confirms or overrides action
    | If CEO overrides --> Master logs override rationale to Decision Log
    v
UPDATED
    | Master writes updated CEO_Pulse_Dashboard.md
    | Master appends any decisions from session to Decision Log
    | Return to IDLE until next Monday
    v
IDLE

=== MONTHLY EXTENSION (first Monday of month) ===

UPDATED --> MONTHLY_SCORING
    | A-SCORE runs /bridge-dashboard --> BRIDGE score with evidence
    | A-SCORE runs /forge-portfolio --> FORGE scores per product
    | A-SCORE reads HELIX project states --> HELIX score
    v
MONTHLY_REVIEW (HITL-2: CEO reviews scores)
    | Master presents: score deltas, constraint comparison to last month
    | CEO decides: same constraint or shifted? (progress signal)
    | CEO names next month's #1 priority framework
    | Master updates Metric #7 (Composite Health) in Pulse Dashboard
    v
IDLE

=== QUARTERLY EXTENSION (first Monday of quarter) ===

MONTHLY_REVIEW --> QUARTERLY_ANALYSIS
    | A-PATTERN analyzes 12-week Decision Log --> recurring themes
    | A-PATTERN runs /archetype on persistent patterns
    | A-PATTERN calculates: score trajectory, time-to-BUILDING estimate
    v
QUARTERLY_REVIEW (HITL-3: CEO deep review)
    | Master presents: trajectory, decision patterns, constraint evolution
    | CEO reviews: identity check, portfolio FORGE scores, moat assessment
    | CEO sets: next quarter's 3 priorities + resource allocation changes
    | Master archives quarterly snapshot
    v
IDLE

=== DECISION CAPTURE (always on, any session) ===

CEO makes decision in any session
    | Master detects decision (explicit statement or gate review outcome)
    | Master extracts: {date, decision, rationale, framework}
    | Master appends to Decision Log in Pulse Dashboard (rolling 4 weeks)
    | Full history appended to 2_Areas/BRIDGE -- Operations/CEO_Decision_Log.md
```

---

## SECTION 5: HITL CHECKPOINT DESIGN

### HITL-1: Weekly Pulse Review (5 min, every Monday)

```
TRIGGER: Master presents updated Pulse Dashboard
CEO ROLE: Confirm or override

What CEO CONFIRMS:
  - Are the 7 metric values correct? (especially dP/dt -- did physical work happen?)
  - Is the blocking constraint correctly identified?
  - Is the proposed action the right one?

What CEO OVERRIDES:
  - "The constraint is actually X, not Y" --> Master updates, logs override
  - "The action should be Z instead" --> Master updates, logs rationale
  - AI Dependency Ratio (self-reported, not collected by agent)

FALLBACK: If CEO has no time for review --> metrics still collected,
          but action stays as "Confirm Pulse (overdue)" until reviewed.
          Master blocks suggesting new project work until Pulse reviewed.
```

### HITL-2: Monthly Score Review (15 min, first Monday of month)

```
TRIGGER: A-SCORE presents updated framework scores
CEO ROLE: Validate scores + decide priority

What CEO VALIDATES:
  - Score changes have evidence (not AI opinion)
  - Constraint comparison: same as last month? If yes --> intervention failed
  - Cross-framework health: is HELIX still the bottleneck?

What CEO DECIDES:
  - Next month's #1 priority framework
  - Any new constraint emerging?
  - Any law violated this month? (9 Laws reference)

FALLBACK: If monthly review skipped --> Composite Health shows "STALE (N weeks)"
          instead of a number. Score anxiety > no score.
```

### HITL-3: Quarterly Strategy Review (60 min, first Monday of quarter)

```
TRIGGER: A-PATTERN presents trajectory analysis
CEO ROLE: Strategic judgment -- direction, identity, portfolio

What CEO REVIEWS:
  - Decision Log patterns: am I always choosing the fast option? (Shifting the Burden)
  - Score trajectory: at this rate, when do we reach BUILDING (45/90)?
  - Portfolio: which products improved FORGE scores? Which stalled?
  - Identity: "Workshop X la ___" -- closer to "defense AI company" or "co khi"?

What CEO DECIDES:
  - Next quarter's 3 priorities (one per framework)
  - Resource allocation changes needed?
  - Any project to archive or unfreeze?

FALLBACK: If quarterly review skipped --> Master flags RED alert:
          "Quarterly review overdue. Strategic drift risk."
```

### HITL-4: Decision Capture (always on)

```
TRIGGER: CEO makes a decision during any session
CEO ROLE: Passive -- Master captures automatically

EXTRACTION RULES:
  - CEO says "let's do X" or "I decide Y" --> capture
  - Gate review outcome (A/B/C/D) --> capture
  - Constraint naming --> capture
  - Resource allocation change --> capture

FORMAT: {date, decision_text, rationale, framework: BRIDGE/FORGE/HELIX}

CEO REVIEW: At quarterly analysis, CEO reads 12-week log.
            "Do these decisions look like mine? Any pattern I should change?"
```

---

## SECTION 6: SKILL MAPPING — 30 Skills to 9 Agents

### Metric Collectors

| Agent | Primary Skill | Secondary Skills | Notes |
|-------|--------------|-----------------|-------|
| A-PHYSICAL | `helix-design-journal` | `helix-quality-gate` | Reads Status.md; counts only physical iterations |
| A-GATE | `helix-project-init` | (reads _Project_Brief.md) | Extracts gate dates from project structure |
| A-CONSTRAINT | `bridge-judgment` | `bridge-signal-extract` | Synthesizes across metrics; 1-sentence output |
| A-GALAXY | (file system count) | — | No skill needed; glob 5_Galaxy/*.md minus README/ROADMAP |
| A-DEBT | `helix-integration-debt` | `helix-sync-protocol` | Reads ICD tracking files |

### Analysis Agents

| Agent | Primary Skill | Secondary Skills | Notes |
|-------|--------------|-----------------|-------|
| A-ALERT | `bridge-risk-radar` | `bridge-signal-extract` | Consequence-driven alerts, max 3 |
| A-ACTION | `bridge-judgment` | — | Selects 1 action by unblock value |

### Cadence Agents

| Agent | Primary Skill | Secondary Skills | Notes |
|-------|--------------|-----------------|-------|
| A-SCORE | `bridge-dashboard`, `forge-portfolio` | `forge-cost` | Monthly scoring with evidence |
| A-PATTERN | `bridge-cross-learn`, `bridge-flywheel` | — | Quarterly pattern detection |

### Skills NOT Used by Dashboard Orchestration

The remaining 21 skills (HELIX design phases, FORGE product tools, analysis engine) are **not sub-agents of this orchestration**. They are the tools CEO uses AFTER the dashboard tells them what to work on. The dashboard orchestrates measurement, not execution.

```
Dashboard says: "dP/dt = 0. Action: generate BOM for AST-MSL-001."
CEO then invokes: /helix-detail-finalize (BOM generation)
That skill is NOT part of dashboard orchestration -- it is the WORK.
```

---

## SECTION 7: STATE FILES

| File | Purpose | Updated by | Cadence |
|------|---------|-----------|---------|
| `CEO_Pulse_Dashboard.md` | Live dashboard — 7 metrics, alerts, action, decision log | Master | Weekly |
| `CEO_Decision_Log.md` | Full decision history (append-only) | Master | Every session |
| `1_Projects/*/Status.md` | Per-project state, phase, gate dates | CEO / project skills | As needed |
| `5_Galaxy/` | Galaxy notes (file count = growth metric) | CEO | As needed |
| `progress.md` | Session checkpoint — current work state | Master | Every session |
| Archived dashboard v1 | 22 loops, 9 laws, 10 constraints, timeline | Reference only | Quarterly |

---

## SECTION 8: ANTI-PATTERNS AND DETECTION

| Anti-Pattern | Detection | Master Response |
|-------------|-----------|----------------|
| **Analyst Trap** | dP/dt = 0 for 2+ weeks while Galaxy or skill count grows | RED alert: "Building tools, not products" |
| **Score Inflation** | Composite Health increases without physical evidence | Master rejects score change; flags for HITL-2 |
| **Alert Fatigue** | CEO overrides action 3+ weeks in a row | Master asks: "Are alerts calibrated? Should we change thresholds?" |
| **Constraint Stagnation** | Same blocking constraint 3+ weeks | Trigger A-SYSTEMS: run /archetype to diagnose structural cause |
| **Cadence Drift** | Pulse not updated for 2+ Mondays | Master forces Pulse update before any other work; logs gap |
| **Decision Amnesia** | Quarterly review shows contradictory decisions | A-PATTERN flags: "Week 3 decided X, Week 7 decided not-X" |
| **Shifting the Burden** | CEO repeatedly chooses easy action over hard one | A-PATTERN detects at quarterly: "80% actions were O-type, 20% were C-type" |

---

## SECTION 9: SESSION-OPENING PROTOCOL

```
Every Claude Code session in Workshop X vault:

Step 1: Read CEO_Pulse_Dashboard.md              (~30 sec)
        --> Know current state: metrics, alerts, action
Step 2: Read progress.md                          (~30 sec)
        --> Know what was done last session
Step 3: Check cadence                             (~10 sec)
        --> Is Pulse overdue? Is monthly/quarterly due?
Step 4: If Pulse overdue --> run COLLECTING cycle BEFORE any other work
        If Pulse current --> proceed with CEO's request

Total: ~1 min cold start. Not 5 min like IRONMESH (fewer state files).
```

---

## SECTION 10: REUSABLE PATTERN — CEO OPERATING SYSTEM ORCHESTRATION

```yaml
pattern: CEO_OPERATING_SYSTEM_ORCHESTRATION
type: Pattern 3 (Workflow Orchestration)
distinguishing_features:
  - Multi-cadence (weekly/monthly/quarterly) not multi-phase
  - Metric collection not artifact generation
  - Alert-driven not gate-driven
  - 1-action constraint (TOC) not task list
  - Decision capture always-on (passive HITL)
  - Anti-pattern detection built into cadence agents

applicable_when:
  - Organization has multiple frameworks/domains to monitor
  - CEO attention is the binding constraint (not compute or staff)
  - Decisions compound over time (decision log has value)
  - System health degrades silently without metrics

not_applicable_when:
  - Single-project, single-domain work
  - Real-time system (use Pattern 2 state machine)
  - Linear deployment process (use Pattern 1 pipeline)

contrast_with_ironmesh:
  IRONMESH: "What should I DESIGN next?" --> routes to design agents
  CEO Dashboard: "What should I DECIDE next?" --> surfaces constraint + action
```

---

*Orchestration Design v1.0. Pattern 3 applied to organizational health measurement.
9 sub-agents, 4 HITL checkpoints, 3 cadences, 7 metrics, 1 action.*
