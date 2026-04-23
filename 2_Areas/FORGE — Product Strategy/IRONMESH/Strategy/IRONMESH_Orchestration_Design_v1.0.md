---
project: IRONMESH — Workshop X
type: orchestration-design (S2 practice deliverable)
scope: VN-RANGE-001 deployment — master agent + 7 sub-agents × 18 steps
version: 1.0
created: 2026-02-20
skill_target: S2 Multi-Agent Orchestration — SYSTEMATIZE phase
method: 5-step practice (Consequence Map → Agent Roles → Conditional Edges → HITL Architecture → Pattern Documentation)
reuse: pattern template in Section 7 applies to any IRONMESH product deployment
---

# IRONMESH — Orchestration Design v1.0
## VN-RANGE-001 Deployment: Master Agent × 7 Sub-Agents × 14 HITL Checkpoints

---

## SECTION 0: PROCUREMENT NARRATIVE

> *For military and procurement audiences. Written at General-ready level.*

IRONMESH does not replace Vietnamese military officers. It gives them a tireless staff officer — one who handles administrative tasks, prepares structured briefings, and surfaces anomalies — while leaving every decision that matters to the officer.

The orchestration design follows three rules that Vietnamese military structure already understands:

**1. Clear chain of command.** One Master Agent holds all state and issues orders. Sub-agents execute scoped tasks and report back. No sub-agent acts outside its domain. Exactly like a battalion headquarters: the CO directs, the staff executes, the CO decides.

**2. Accountability at every gate.** Before accountability transfers — from pre-deployment to installation, from installation to commissioning, from commissioning to operations — a human officer signs. The AI never transfers accountability on its own. Three formal gates, three human signatures.

**3. Expert judgment stays human.** Calibration confirmation, training pass/fail assessment, go-live authorization — these require domain knowledge, tactical context, and accountability that no AI can bear. The AI prepares the data. The officer decides.

**What the military gets:** A system that compresses the administrative burden of a 3–4 week deployment from 40+ hours of coordination into ~5 hours of structured human decisions — while ensuring every safety-critical and accountability-critical decision remains with the officer.

---

## SECTION 1: DESIGN PRINCIPLES

These three principles are encoded in every part of this design. Violating any one of them breaks the orchestration.

### P1 — Master-Clone, Not Rigid Pipeline

```
WRONG: Survey Agent → Config Agent → Deploy Agent (fixed sequence, brittle)
RIGHT: Master Agent holds state, issues Task() calls based on CURRENT results,
       routes dynamically when anomalies occur
```

A fixed 3-agent pipeline assumes everything goes right. Defense deployments have edge cases. The Master Agent is the router because it has full context. Sub-agents have none.

### P2 — Consequence Drives Automation Percentage

```
Consequence ↑  →  Automation ↓  →  HITL required
```

Administrative tasks (document generation, checklist execution, software deploy): high automation, AI owns.
Accuracy-critical tasks (sensor config, integration test): medium automation, AI assists, human confirms.
Safety-critical / accountability tasks (gates, calibration, go-live): 0% automation, human owns entirely.

### P3 — Fallbacks Are First-Class, Not Afterthoughts

Every automated step has an explicit fallback defined BEFORE implementation. If no fallback exists, the step is NOT automated. The fallback is part of the design, not recovery documentation written after the first failure.

---

## SECTION 2: AGENT ARCHITECTURE

### 2.1 Master Agent

```
┌──────────────────────────────────────────────────────────────────┐
│  MASTER: IRONMESH Deployment Orchestrator                        │
│                                                                  │
│  State held: current_step, completed_steps[], flags[], gates[]   │
│              deployment_config, anomaly_log, HITL_pending        │
│                                                                  │
│  Responsibilities:                                               │
│  ├── Issues all Task() calls to sub-agents                       │
│  ├── Receives sub-agent results, evaluates against criteria      │
│  ├── Routes dynamically based on result (not on fixed sequence)  │
│  ├── Escalates to human at HITL checkpoints                      │
│  ├── Logs every decision and its reason                          │
│  └── Halts entire pipeline on CRITICAL flag or safety violation  │
│                                                                  │
│  NEVER:                                                          │
│  ├── Pre-commits to a route before seeing sub-agent output       │
│  ├── Delegates gate decisions (B11, C15, C18)                    │
│  ├── Auto-approves a HITL checkpoint (waits indefinitely)        │
│  └── Clears a safety halt without KN authorization               │
└──────────────────────────────────────────────────────────────────┘
```

### 2.2 Sub-Agent Roster

| Agent ID | Name | Domain | Steps | Scope Boundary |
|----------|------|--------|-------|----------------|
| **A-SURVEY** | Site Survey Agent | Data collection | A1, B7 (diagram) | Collect + structure data only. No config decisions. |
| **A-DOC** | Document Agent (Clawdbot) | Document generation | A2, C13, C17 | Generate from templates only. No signing, no approval. |
| **A-CONFIG** | Configuration Agent | System configuration | A3, A5, C12 (adjust) | Generate config files only. Output goes to HITL before use. |
| **A-TEST** | Test Agent | Automated testing | B6, B8 (checklist), B9 (partial), B10 (prep), C12 (protocol) | Testing and result reporting only. Master interprets results. |
| **A-DEPLOY** | Software Deploy Agent | Deployment execution | B9 | Fixed-playbook deploy only. No creative decisions. Rollback on FAIL. |
| **A-TRAIN** | Training Agent | Training delivery | C14, C16 (materials) | Configuration + content delivery only. Pass/fail graded by human. |
| **A-REPORT** | Validation Report Agent | Report generation | C13 | Generate from calibration + test data only. KN reviews before issue. |

**Design rule:** Sub-agents are **stateless**. They receive a scoped task, execute it, return a structured result. The Master Agent holds all state. If a sub-agent fails, the Master re-issues the Task with corrected parameters — the sub-agent has no memory of the previous attempt.

---

## SECTION 3: DEPLOYMENT GRAPH — TASK() DELEGATION

> Full 18-step Task() call map. Master Agent executes this graph, routing dynamically at each result.

### Phase A — Pre-Deployment (Steps 1–5)

```
A1: Master → Task(A-SURVEY, "Deliver site survey to [POC]")
    ├── PASS (complete) → HITL: A1-H (KN review) → A2
    ├── INCOMPLETE attempt 1 → Task(A-SURVEY, "Follow up: [fields]") → retry
    └── INCOMPLETE attempt 2 → HALT → ESCALATE: "Schedule video call"

A2: Master → Task(A-DOC, "Generate BOM + contract from approved survey")
    ├── Generated → HITL: A2-H (KN review + send)
    └── Customer signs → A3
    └── Contract stalled ≥5 days → ESCALATE: "Offer trial option"

A3: Master → Task(A-CONFIG, "Generate equipment config from signed BOM")
    ├── Generated → HITL: A3-H (KN verify)
    └── APPROVE → A4

A4: Master → HITL: A4-H (KN physical FAT, on-site)
    ├── FAT PASS → A5
    ├── FAT FAIL attempt 1 → Task(A-CONFIG, "Revise for defects: [list]") → loop A3
    └── FAT FAIL attempt 2 → ESCALATE CRITICAL: "Repeated FAT failure"

A5: Master → Task(A-CONFIG, "Generate packing list from BOM")
    └── Complete → log, no HITL → Phase B
```

### Phase B — Installation (Steps 6–11)

```
B6: Master → Task(A-TEST, "Run prerequisites checklist for [site]")
    ├── All PASS → proceed
    └── Any FAIL → HALT → ESCALATE: "Prerequisite [X] failed. Resolve before dispatch."

B7: Master → Task(A-SURVEY, "Generate sensor placement diagram from config")
    → Diagram issued to technician for physical installation
    → After mounting: HITL: B7-H (technician confirms angles)
    └── DEVIATION → log deviation, ESCALATE if delta > tolerance

B8: Master → Task(A-TEST, "Generate network validation checklist for [site config]")
    → Technician executes checklist
    → HITL: B8-H (network officer confirms connectivity)
    └── ISSUE → ESCALATE: "Network config issue at [node]"

B9: Master → Task(A-DEPLOY, "Deploy CORTEX RANGE v[X.Y.Z] to [target IP]")
    ├── SUCCESS + health check PASS → B10
    ├── FAIL attempt 1 → Task(A-DEPLOY, "Retry deploy")
    ├── FAIL attempt 2 → Task(A-DEPLOY, "Execute rollback to v[X.Y.Z-1]")
    │   ├── Rollback SUCCESS → ESCALATE: "Rolled back. KN: investigate v[X.Y.Z] failure."
    │   └── Rollback FAIL → HALT ALL → ESCALATE CRITICAL: "On-site intervention required."
    └── (no further auto-retry after rollback)

B10: Master → Task(A-TEST, "Run integration test battery")
     → Result: shot_count_match, confidence_avg, anomalies[]
     → HITL: B10-H (RSO validates against physical count)
     ├── COUNT MATCH → B11
     ├── MISMATCH delta ≤ 2 → ESCALATE: "RSO: manual count required"
     └── MISMATCH delta > 2 → HALT → ESCALATE CRITICAL → reroute to B7

B11 ★ GATE: Master → HITL: B11-H (KN + Commander sign installation gate)
     ├── SIGNED → Phase C
     └── REJECTED → parse reason → reroute to specific B-step → retry from B10
```

### Phase C — Commissioning (Steps 12–18)

```
C12: Master → Task(A-TEST, "Generate calibration protocol for [range config]")
     → HITL: C12-H (RSO executes 3-shot calibration)
     ├── COUNT MATCH → C13
     ├── MISMATCH attempt 1 → Task(A-CONFIG, "Adjust threshold: delta=[X]") → repeat C12
     ├── MISMATCH attempt 2 → Task(A-CONFIG, "Adjust threshold") → repeat C12
     └── MISMATCH attempt 3 → HALT → ESCALATE CRITICAL: "Hardware fault in VN-LOMAH likely."

C13: Master → Task(A-REPORT, "Generate validation report from B10 + C12 data")
     → HITL: C13-H (KN review)
     ├── APPROVE → issue report → C14
     └── REVISE → Task(A-REPORT, "Revise: [section]") → repeat C13-H

C14: Master → Task(A-TRAIN, "Configure PULSE dashboard for [commander role]")
     → HITL: C14-H (commander confirms dashboard view)
     ├── CONFIRMED → C15
     ├── INCORRECT attempt 1 → Task(A-TRAIN, "Reconfigure: [mismatch]") → repeat C14-H
     └── INCORRECT attempt 2 → ESCALATE: "Dashboard conflict. KN: on-site with commander."

C15 ★ GATE: Master → HITL: C15-H (KN + Range Command sign system validation gate)
     ├── SIGNED → C16
     └── REJECTED → parse reason → reroute to specific C-step → regenerate C13 → retry C15

C16: Master → Task(A-TRAIN, "Deliver training materials + Clawdbot access to [officer]")
     → Physical training session
     → HITL: C16-H (KN assesses practical test)
     ├── PASS → C17
     ├── FAIL attempt 1 → Task(A-TRAIN, "Prepare remedial: [weak areas]") → repeat C16-H
     └── FAIL attempt 2 → ESCALATE: "KN: assess officer designation."

C17: Master → Task(A-DOC, "Generate handover document — system state + ownership transfer")
     → HITL: C17-H (commander signs to accept)
     ├── SIGNED → C18
     └── DECLINED → ESCALATE: "Handover declined. KN: direct conversation required."

C18 ★ GATE: Master → HITL: C18-H (commander authorizes go-live — sole authority)
     ├── AUTHORIZED → Master logs: deployment_complete=TRUE, timestamp, signatories
     │   → Task(A-DOC, "Generate deployment completion certificate")
     │   → DEPLOYMENT COMPLETE
     └── HOLD → log reason + timestamp → wait ≥24h before re-presenting
         → ESCALATE: "Go-live held. KN: address [reason]."
```

---

## SECTION 4: CONDITIONAL EDGE LOGIC

> Full routing table — what Master does when things go wrong. Grouped by edge type.

### Retry Edges (MAX = 2 retries → then escalate)

| Trigger | Retry Action | After MAX_RETRY |
|---------|-------------|-----------------|
| Survey incomplete | Re-issue with missing fields flagged | Escalate: schedule video call |
| Config conflicts | Re-issue with conflict resolution rules | Escalate to KN |
| FAT fail | Revise config for defects, reschedule FAT | CRITICAL: physical inspection |
| Deploy fail | Retry same version | Rollback → escalate |
| Calibration mismatch | Adjust acoustic threshold, repeat sequence | CRITICAL: hardware fault |
| PULSE mismatch | Reconfigure for specific error | Escalate: KN on-site |
| Training fail | Remedial session for weak areas | Escalate: officer designation |

### Reroute Edges (jump to earlier step based on fault classification)

| Gate Rejected | Fault Classification | Reroute Target |
|---------------|---------------------|----------------|
| B11 | Power issue | B6 (prerequisites) |
| B11 | Sensor angle | B7 (mounting) |
| B11 | Network | B8 (network config) |
| B11 | Software version | B9 (deploy) |
| B11 | Test results unclear | B10 (integration test) |
| C15 | Scoring not accurate | C12 (recalibration) |
| C15 | Dashboard incorrect | C14 (PULSE config) |
| C15 | Report incomplete | C13 (validation report) |
| Count mismatch delta > 2 | Sensor placement | B7 (re-check mounting) |
| Confidence avg < 0.85 × 3 | Config, not test | A3 (config adjustment) |

### CRITICAL / Safety Halt Edges (immediate, no retry)

| Trigger | Action |
|---------|--------|
| Safety fan violation at any step | HALT ALL AGENTS — ESCALATE CRITICAL — only KN clears |
| Deploy + rollback both fail | HALT ALL — ESCALATE CRITICAL: on-site intervention |
| Calibration fails 3× | HALT ALL — ESCALATE CRITICAL: hardware fault |
| Conflicting gate decisions from two humans | HALT — ESCALATE: KN resolves, never Master |
| HITL no response ≥ 4h | Reminder to primary contact |
| HITL no response ≥ 8h | Escalate to secondary contact. Master waits — never auto-approves. |

---

## SECTION 5: HITL CHECKPOINT REGISTER

> 14 checkpoints. For each: type, authority, information package, decision format, time budget.

| ID | Step | Type | Authority | Time | Decision Format |
|----|------|------|-----------|------|-----------------|
| A1-H | Survey review | R | KN | 15 min | `APPROVE` / `REVISE: [field]=[value]` |
| A2-H | BOM + contract review | R | KN | 20 min | `APPROVE+SEND` / `REVISE: [section]` / `HOLD` |
| A3-H | Config verification | R | KN | 15 min | `APPROVE→FAT` / `REVISE: [param]=[value]` |
| A4-H | Factory acceptance test | P | KN on-site | 2–4h | `FAT PASS` / `FAT FAIL: [defect_list]` |
| B7-H | Sensor mounting confirmation | P | Technician | 30 min | `CONFIRMED` / `DEVIATION: sensor [N], delta [X]°` |
| B8-H | Network validation | P | Network officer | 20 min | `NETWORK CONFIRMED` / `ISSUE: [node], [latency]` |
| B10-H | Integration test — RSO | E | RSO | 30 min | `PHYSICAL COUNT: [N] / SYSTEM COUNT: [N] — MATCH/MISMATCH` |
| B11-H ★ | Installation gate | G | KN + Commander | 30 min | `SIGNED` / `REJECTED: [reason]` |
| C12-H | Live-fire calibration | E | RSO | 45 min | `CALIBRATION CONFIRMED` / `MISMATCH: delta [N], [over/under]` |
| C13-H | Validation report review | R | KN | 20 min | `APPROVE—issue` / `REVISE: [section]` |
| C14-H | PULSE dashboard confirm | R | Range Commander | 15 min | `CONFIRMED` / `INCORRECT: [what's wrong]` |
| C15-H ★ | System validation gate | G | KN + Range Command | 45 min | `SIGNED` / `REJECTED: [reason]` |
| C16-H | Range officer practical test | E | KN | 30 min | `PASS — [name] certified` / `FAIL: [weak areas]` |
| C17-H | Handover signing | G | Commander | 15 min | `SIGNED — ownership accepted` / `DECLINED: [reason]` |
| C18-H ★ | Go-live authorization | G | Commander (sole) | 10 min | `AUTHORIZED` / `HOLD: [reason], revisit [date]` |

**Type key:** R = Review & Approve | P = Physical Verify | E = Expert Judgment | G = Gate ★

**Total human time:** ~5h across 3–4 weeks. All other time is Master + sub-agent execution.

**Information package rule:** Master prepares a structured 1-page briefing for every HITL checkpoint. Never raw data. Never > 4 items. One clear question at the end.

---

## SECTION 6: LOOP PREVENTION RULES

| Rule | Limit | Rationale |
|------|-------|-----------|
| MAX_RETRY any sub-agent | 2 | 3rd failure = structural problem, not parameter problem |
| MAX_CALIBRATION_ATTEMPTS | 3 | Hardware fault threshold — retrying doesn't fix hardware |
| MIN_WAIT between gate re-presentations | 24h | Respect human decision cycles — don't pressure officers |
| HITL auto-approve | NEVER | Humans are not a bottleneck to route around |
| Safety halt clearance | KN only | No sub-agent can resume a halted safety pipeline |
| Conflicting human decisions | Master halts | Master never resolves human conflict autonomously |

---

## SECTION 7: REUSABLE PATTERN TEMPLATE

> This section abstracts the VN-RANGE-001 design into a pattern applicable to any IRONMESH product deployment. When deploying a new product, fill in the blanks.

### Template: IRONMESH Deployment Orchestration Pattern v1.0

```yaml
pattern: IRONMESH_DEPLOYMENT_ORCHESTRATION
version: 1.0
applies_to: Any IRONMESH product with [pre-deployment → installation → commissioning] phases

MASTER_AGENT:
  state: [deployment_config, step_status[], flags[], gate_status[]]
  routing: dynamic — based on sub-agent result, not pre-defined sequence
  escalation_trigger: [FAIL after MAX_RETRY] OR [safety violation] OR [HITL no-response ≥ 8h]

SUB_AGENT_PATTERN:
  scope: single domain only
  state: stateless — receives task, returns structured result
  fallback: defined BEFORE agent is built (no fallback = no automation)
  max_retry: 2 (configured in Master, not in sub-agent)

PHASE_PATTERN:
  pre_deployment:
    primary_agents: [survey, doc, config]
    HITL_type: Review & Approve
    consequence: HIGH (wrong config = systemic error in field)

  installation:
    primary_agents: [test, deploy]
    HITL_type: Physical Verify + Expert Judgment
    consequence: CRITICAL (latent defects surface during operations)
    gate: mandatory at phase end, both parties sign

  commissioning:
    primary_agents: [report, train]
    HITL_type: Expert Judgment + Gate
    consequence: CRITICAL (wrong calibration = wrong training data forever)
    gate: mandatory at phase end + final go-live authorization

GATE_PATTERN:
  required_signatories: [Workshop X representative] + [Customer authority]
  information_package: all prior results + open items + risk summary + accountability statement
  cannot_be_automated: ever
  re_presentation_minimum_wait: 24h

CONDITIONAL_EDGE_PATTERN:
  retry: issue same Task() with corrected parameters
  reroute: jump to step where root cause lives (not the step where symptom appeared)
  escalate: after MAX_RETRY — human decides, not Master
  halt: safety violation or CRITICAL — KN clears only

HITL_PACKAGE_RULE:
  max_items: 4
  format: summary → anomalies → one clear question
  human_time_budget: ≤ 20 min (average)
  never: raw data dumps, ambiguous questions, multiple decisions in one checkpoint
```

---

## SECTION 8: S2 PATTERN LIBRARY — KEY DECISIONS

> The design decisions that would take a new engineer months to learn. Documented here as institutional knowledge.

| Decision | What was chosen | What was rejected | Why |
|----------|----------------|-------------------|-----|
| Routing authority | Master Agent always | Sub-agents deciding their own next step | Defense edge cases require full context; sub-agents have none |
| Agent scope | Narrowly bounded (one domain) | General-purpose "deployment agent" | Prevents agents "solving" problems outside their competence |
| State location | Master holds all state | Shared state database | Single source of truth; no state synchronization failures |
| Retry logic | 2 retries → escalate | Unlimited retry | 3rd failure = structural problem; retrying wastes time and reveals nothing new |
| Gate authority | Human only, never Master | AI-assisted gate decision | Defense accountability cannot be delegated; Vietnamese military command culture requires officer signature |
| HITL trigger | Result + anomaly flag | Time-based (every N hours) | Anomaly-triggered HITL reduces interrupt frequency; officers respond to relevance, not schedules |
| Fallback timing | Defined before build | Defined after first failure | Post-failure fallback is recovery, not design; in defense, recovery is too late |
| Calibration owner | RSO (expert judgment) | A-TEST automated calibration | Acoustic calibration requires ground truth from physical rounds; AI cannot fire the weapon |
| Gate re-presentation | 24h minimum wait | Immediate re-presentation after fix | Officers need time to consider; immediate re-presentation signals "tick-box compliance" |

---

## SECTION 9: DEPLOYMENT METRICS

> How to know if this orchestration is working.

| Metric | Target | Source |
|--------|--------|--------|
| Total human time in deployment | ≤ 5h | HITL log |
| HITL checkpoint average response time | ≤ 20 min | Master log |
| Sub-agent retry rate | < 15% of Task() calls | Master log |
| Gate rejection rate | < 20% | Gate log |
| Calibration attempts to success | ≤ 2 | C12 log |
| Safety halt incidents | 0 (target) | Safety log |
| Deployment end-to-end time | ≤ 4 weeks | Timeline |

**S2 skill metric:** Can describe the routing logic for any anomaly in < 2 minutes without referencing this document. If not yet: review Section 4 and trace 3 edge cases from memory.

---

*IRONMESH Orchestration Design v1.0 — VN-RANGE-001 Deployment*
*Created: 2026-02-20 | S2 Multi-Agent Orchestration practice output*
*Pattern version: v1.0 — reuse for future IRONMESH product deployments*
*Next review: after first real deployment (update with observed edge cases)*
