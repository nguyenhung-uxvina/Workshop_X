---
project: IRONMESH — Workshop X
type: orchestration-design (S2 practice — third application, most complex)
scope: Full methodology orchestration — D-M-I-R × ODI × Engineering Design Framework
       across multiple projects, 9 skills, 25h/week constraint, learning feedback loop
version: 1.1
created: 2026-02-20
updated: 2026-02-20
changes_v1.1: FR-01 session-opening protocol + state files / FR-02 FROZEN-ARCHIVED defined /
              FR-05 QC override audit trail / FR-06 A-SYSTEMS structural trigger /
              FR-07 2-week trigger / FR-08 mid-phase PAUSED states / FR-09 Knowledge Recovery
skill_target: S2 Multi-Agent Orchestration — workflow orchestration pattern (Pattern 3)
key_insight: The priority plan says "orchestrate your own skill deployment the way
             IRONMESH orchestrates AI agents." This document makes that explicit.
pattern_3: Workflow Orchestration — multi-framework, multi-project, learning loop
           (contrast: Pattern 1 = pipeline / Pattern 2 = state machine)
source_priority: Agentic_Skills_Mastery_Priority.md — L2 meta-intervention
---

# IRONMESH — Framework Orchestration Design v1.0
## D-M-I-R × ODI × Engineering Design: Master Agent × 10 Sub-Agents × 3 HITL Types

---

## SECTION 0: THE THREE S2 PATTERNS — WHERE THIS FITS

Three S2 applications, three fundamentally different architectures. Same master-clone framework.

```
PATTERN 1: LINEAR PIPELINE          PATTERN 2: STATE MACHINE
VN-RANGE-001 Deployment             V-SMASH-L Engagement
────────────────────────            ────────────────────────
A → B → C → D                       STANDBY ⇄ ALERT ⇄ LOCKED
Sequential, one direction            Cyclic, real-time
Hours per step                       Milliseconds per cycle
Admin agents                         Inference agents
HITL: sign documents                 HITL: hold trigger
"Uncertain" → retry → KN            "Uncertain" → operator now
Fallback: escalate to KN            Fallback: manual mode
One project, one process             One engagement, one cycle

PATTERN 3: WORKFLOW ORCHESTRATION ← THIS DOCUMENT
D-M-I-R × ODI × Engineering Design
────────────────────────────────────────────────────────────────
Multi-framework, multi-project, resource-constrained, learning loop
Weeks to months per cycle
Framework agents (ODI, design phases, QC, learning, portfolio)
HITL: strategic judgment (gate review, allocation, quality review)
"Uncertain" → run /cld or /archetype to model → then decide
Fallback: pause project, protect buffer, reroute capacity
Multiple projects in different phases simultaneously
D-M-I-R feedback loop improves the orchestration itself
```

**Why Pattern 3 is the hardest S2 design:**
1. Multiple projects simultaneously — Master must track state across all
2. Multiple frameworks intersecting — ODI feeds Phase 1; QC gate crosses all phases
3. Resources constrained and shared — 25h/week across 9 skills, all projects
4. The orchestration improves itself — D-M-I-R output reconfigures next week's routing
5. HITL requires strategic judgment — not a document signature or a trigger press

---

## SECTION 1: DESIGN PRINCIPLES (Pattern 3 specific)

### P1 — Frameworks Are Dependency-Ordered, Not Sequential

```
WRONG: ODI → Planning → Phase 1 → Phase 2 → Phase 3 → Phase 4 (for every project, always)
RIGHT: Master checks dependencies per project. ODI must precede Phase 1.
       But a project can pause at any gate and another project advances.
       Multiple projects live at different phases simultaneously.
```

### P2 — Resource Constraint Is an Architectural Constraint

```
25h/week is not a preference — it is a hard system boundary.
Every work order from Master must check: does this fit the allocation?
A-PORTFOLIO enforces the freeze order.
A-SKILL tracks actual vs planned hours.
Master cannot route work to a frozen project or an over-budget skill.
```

### P3 — Cross-Cutting Agents Run on Every Output, No Exceptions

```
A-QC (QC Gate): runs on ALL AI outputs before KN acts on them. No opt-out.
A-DMIR (D-M-I-R): runs WEEKLY on Friday. Not optional, not skippable.
A-PORTFOLIO (Portfolio review): runs MONTHLY + at every allocation decision.
These are not phases — they are always-on infrastructure.
```

### P4 — D-M-I-R Feedback Is the System's Self-Improvement Mechanism

```
Most orchestration systems are static: design → deploy → forget.
This system is adaptive: weekly reflection → constraint identified →
allocation adjusted → next week's routing changed.
The orchestration gets smarter over time.
This IS the R1 (AI Amplification) reinforcing loop applied to the methodology itself.
```

---

## SECTION 2: CONSEQUENCE MAP (Workflow Orchestration)

> "What fails if AI gets this wrong?" — applied to framework orchestration outputs.

| Framework Output | What AI Could Get Wrong | Consequence | Severity | Who Decides |
|-----------------|------------------------|-------------|----------|-------------|
| ODI opportunity scores | Wrong scores → wrong strategy (ATTACK when should DEFEND) | 6-12 months wasted on wrong product direction | CRITICAL | KN reviews + validates with market evidence |
| Phase 1 requirements | Vague, unquantified requirements pass to Phase 2 | Wrong concept selected → redesign at Phase 3 (10× cost) | HIGH | HITL at Gate 1: ≥80% quantified or redo |
| Phase 2 concept selection | Low VDI 2225 score selected (subjective bias) | Poor-quality concept enters embodiment → late-stage failure | HIGH | HITL at Gate 2: score ≥70 required |
| Phase 3 DfX violations | Design misses corrosion/thermal/environmental spec | Field failure → trust destroyed, recall | CRITICAL | HITL at Gate 3: all DfX checks pass |
| QC Gate false negative | AI output passes QC but has dangerous error | KN acts on wrong data → design decision compromised | CRITICAL | Gate calibration log tracks misses; improve gate |
| QC Gate false positive | Correct output flagged → KN wastes review time | Time wasted; KN ignores future flags | MEDIUM | Tune gate thresholds iteratively |
| D-M-I-R reflection | Symptom identified as constraint (not root cause) | Wrong intervention → same problem next month | HIGH | 5-Why in Section 2 of retrospective; structural vs parameter |
| Allocation decision | Over-invest in high-scoring skill (S1/S2) vs bottleneck | B3 skill depletion loop activates | HIGH | HITL: Friday allocation review; name constraint in <1 min |
| Portfolio freeze violation | Frozen product receives work hours | B1 complexity ceiling re-activates | HIGH | A-PORTFOLIO enforces; Master blocks routing to frozen |
| Systems thinking diagnosis | Wrong archetype selected → wrong intervention | Fix wrong leverage point | HIGH | A-SYSTEMS presents multiple archetypes; KN selects |

**Gradient:** ODI strategy and DfX field failures are CRITICAL.
Allocation errors and false QC results are HIGH but recoverable.
No equivalent of V-SMASH-L's fratricide risk — but 6-month wasted effort = real cost.

---

## SECTION 3: AGENT ARCHITECTURE

### 3.1 Master Agent — IRONMESH Design Orchestrator

```
┌────────────────────────────────────────────────────────────────────┐
│  MASTER: IRONMESH Design Orchestrator                              │
│                                                                    │
│  State held (externalized to files — NOT session memory):          │
│  ├── projects[]: progress.md                                       │
│  ├── allocation: IRONMESH_Weekly_Allocation_Tracker.md             │
│  ├── weekly_constraint: dmir_log.md (last row)                     │
│  ├── qc_calibration: Defense_AI_QC_Gate.md (calibration log)       │
│  └── dmir_log[]: dmir_log.md (append-only)                         │
│                                                                    │
│  ⚠ STATE PERSISTENCE: Master state is session-bound (Claude Code). │
│  At session start, read these files BEFORE routing any work.       │
│  Operating without reading these files = unknown state = HALT.    │
│                                                                    │
│  SESSION-OPENING PROTOCOL (mandatory, ~5 min):                     │
│  Step 1: Read progress.md → current project phases + status        │
│  Step 2: Read dmir_log.md (last 4 rows) → current constraint       │
│  Step 3: Read IRONMESH_Weekly_Allocation_Tracker.md → budget       │
│  Step 4: Read IRONMESH_Product_Freeze_Order_v1.0.md → freeze list  │
│  Step 5: Read Defense_AI_QC_Gate.md (calibration log) → QC state  │
│  Only after all 5 steps: Master has valid state. Proceed with work.│
│                                                                    │
│  Responsibilities:                                                 │
│  ├── Routes work requests to correct framework agent + phase       │
│  ├── Enforces framework dependency order (ODI before Phase 1)      │
│  ├── Enforces portfolio freeze (no routing to frozen projects)     │
│  ├── Enforces allocation budget (no routing if skill over-budget)  │
│  ├── Enforces critical-path priority (VNR-001 critical path first) │
│  ├── Triggers A-QC on every sub-agent output before KN sees it     │
│  ├── Triggers A-DMIR weekly (Friday)                               │
│  └── Appends D-M-I-R output to dmir_log.md → reconfigures routing │
│                                                                    │
│  NEVER:                                                            │
│  ├── Auto-approves a gate (A/B/C/D must come from KN)              │
│  ├── Routes to a frozen project                                    │
│  ├── Skips QC Gate on any AI output                                │
│  ├── Ignores D-M-I-R constraint identification                     │
│  └── Routes work without reading session-opening files first       │
└────────────────────────────────────────────────────────────────────┘
```

### 3.2 Sub-Agent Roster — Framework Agents

| Agent | Framework | Commands | Phase | Output to Master |
|-------|-----------|----------|-------|-----------------|
| **A-ODI** | ODI (Phase 0a) | /odi /jobs /outcomes /opp /seg | Before Phase 1 | ODI report: opportunity scores, strategy, target segment |
| **A-REQ** | Requirements (Phase 1) | /req /validate /mil /stake | Phase 1 | Requirements list: count, quantification %, conflicts |
| **A-CONCEPT** | Conceptual Design (Phase 2) | /abs /fn /morpho /eval /vs | Phase 2 | Concept comparison: VDI 2225 scores, selected concept |
| **A-EMBODY** | Embodiment Design (Phase 3) | /layout /dfx /mat /tol /lc | Phase 3 | Layout + DfX results, local content %, cost estimate |
| **A-DETAIL** | Detail Design (Phase 4) | /bom /verify /cost | Phase 4 | BOM, verification plan, unit cost + LCC |

### 3.3 Sub-Agent Roster — Cross-Cutting Agents

| Agent | Framework | Commands | When Active | Output to Master |
|-------|-----------|----------|------------|-----------------|
| **A-QC** | QC Gate (P44) | /qc | After EVERY AI output | {check_id: PASS/FLAG/FAIL}[] — gate decision |
| **A-DMIR** | D-M-I-R Learning | /reflect /mastery /ll /log | Weekly + on-demand | {constraint, intervention, allocation_delta, insight} |
| **A-SYSTEMS** | Systems Thinking | /cld /loops /leverage /archetype | On diagnosis trigger | {archetype, leverage_points[], intervention_options[]} |
| **A-PORTFOLIO** | Portfolio Mgmt | /pf /pri /alloc /rm | Weekly + on routing | {active_projects[], frozen_list, allocation_actual} |
| **A-SKILL** | Skill Tracker | reads tracker | Friday close | {skill → actual_h, delta, constraint_id} |

**Total: Master + 10 sub-agents. Each scoped to one framework domain.**

---

## SECTION 4: FRAMEWORK DEPENDENCY GRAPH

> This is the core architecture decision — which frameworks feed which.
> Violate these dependencies and the orchestration produces wrong outputs.

```
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 0: ALWAYS ACTIVE (cannot be disabled)                        │
│                                                                     │
│  A-PORTFOLIO ──── enforces freeze order, tracks allocation          │
│  A-QC ──────────── gates every AI output before KN acts            │
│  A-DMIR ───────── runs weekly, feeds back to all layers            │
└─────────────────────────────────────────────────────────────────────┘
                              ↕ feeds / calibrates
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 1: DISCOVERY (Phase 0a)                                      │
│                                                                     │
│  A-ODI ─────────── /odi → /jobs → /outcomes → /opp → /seg         │
│                                                                     │
│  Output: ODI report {opportunity_scores, strategy, segment}         │
│  Feeds:  A-REQ (requirements must reflect top UNDERSERVED outcomes) │
│  HITL:   KN reviews strategy recommendation before committing       │
│  Gate:   ODI report approved → project moves to Phase 1            │
│  Block:  No A-REQ work until ODI report exists for that project     │
└─────────────────────────────────────────────────────────────────────┘
                              ↓ ODI report → context for A-REQ
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 2: REQUIREMENTS (Phase 1)                                    │
│                                                                     │
│  A-REQ ────────── /req → /validate → /mil → /stake                 │
│                                                                     │
│  ODI feeds: top outcomes → translated to quantified requirements    │
│  Output: requirements list {count, quantification_%, conflicts[]}   │
│  Gate criteria: ≥80% quantified, no conflicts, stakeholder sign-off │
│  HITL: Gate 1 review — KN decides A/B/C/D                          │
│  Block: No A-CONCEPT work until Gate 1 APPROVED                    │
└─────────────────────────────────────────────────────────────────────┘
                              ↓ requirements list → context for A-CONCEPT
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 3: CONCEPTUAL DESIGN (Phase 2)                               │
│                                                                     │
│  A-CONCEPT ────── /abs → /fn → /morpho → /eval → /vs              │
│                                                                     │
│  Requirements feed: evaluation criteria for VDI 2225 scoring       │
│  Output: concept comparison {scores, selected_concept, rationale}  │
│  Gate criteria: ≥3 concepts, winning score ≥70, rationale documented│
│  HITL: Gate 2 review — KN decides A/B/C/D                          │
│  Block: No A-EMBODY work until Gate 2 APPROVED                     │
└─────────────────────────────────────────────────────────────────────┘
                              ↓ selected concept → context for A-EMBODY
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 4: EMBODIMENT DESIGN (Phase 3)                               │
│                                                                     │
│  A-EMBODY ─────── /layout → /dfx → /mat → /tol → /lc              │
│                                                                     │
│  Concept feeds: physical realization of the selected concept        │
│  Output: layout + DfX audit {violations[], local_%, cost_estimate}  │
│  Gate criteria: DfX pass, local content ≥60%, cost ≤70% import     │
│  HITL: Gate 3 review — KN decides A/B/C/D                          │
│  Block: No A-DETAIL work until Gate 3 APPROVED                     │
└─────────────────────────────────────────────────────────────────────┘
                              ↓ validated layout → context for A-DETAIL
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER 5: DETAIL DESIGN (Phase 4)                                   │
│                                                                     │
│  A-DETAIL ─────── /bom → /verify → /cost                          │
│                                                                     │
│  Embodiment feeds: BOM from layout, verification plan from reqs     │
│  Output: {BOM, verification_plan, unit_cost, LCC}                  │
│  Gate criteria: all requirements have T or D verification (not A)   │
│  HITL: Gate 4 review — KN decides A/B/C/D                          │
│  Block: No deployment until Gate 4 APPROVED                        │
└─────────────────────────────────────────────────────────────────────┘

CROSS-CUTTING (runs in parallel with all layers):
┌─────────────────────────────────────────────────────────────────────┐
│  A-QC: Every agent output → /qc → {PROCEED/REVIEW/BLOCKED}         │
│         KN only sees output after QC gate decision                  │
│         BLOCKED = halt, KN notified immediately                     │
│         REVIEW = flagged items presented to KN for judgment         │
│         PROCEED = output delivered with gate log attached           │
│                                                                     │
│  A-SYSTEMS: triggered when Master detects persistent problem        │
│  (same blocker appearing >2 weeks) → /cld /loops /leverage          │
│  Output feeds back to D-M-I-R (model why it's happening)           │
│                                                                     │
│  A-DMIR: every Friday → /reflect → outputs:                         │
│  {constraint, intervention, allocation_delta}                       │
│  Master consumes → reconfigures routing for next week               │
└─────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 5: PROJECT STATE MACHINE

> Each project has its own state. Master tracks all projects simultaneously.
> Portfolio freeze determines whether a project can receive work orders.

```
FROZEN ──────────────────────────────────────────────────────────────┐
(Clawdbot handles: status queries, doc updates, standard responses)   │
(Master will NOT route work orders to FROZEN projects)               │
(Unfreeze trigger: defined in Freeze Order — VN-RANGE-001 deployed)  │
(Use when: resource-constrained pause. IP preserved. Revival possible)│
                                                                      │
ARCHIVED ────────────────────────────────────────────────────────────┐
(Work stopped permanently. IP captured then removed from workspace)   │
(No Clawdbot maintenance. No routing. No unfreeze path.)             │
(Transition from FROZEN or CANCEL requires Knowledge Recovery first)  │
(Use when: technical dead-end, market invalidated, product superseded)│
                                                                      │
                                                                      │
NOT_STARTED                                                           │
    │ KN initiates project (names it, writes one-paragraph purpose)  │
    ▼                                                                 │
ODI_PENDING                                                           │
    │ A-ODI: /odi → /jobs → /outcomes → /opp → /seg                 │
    │ A-QC: runs on each ODI output                                  │
    │ HITL: KN reviews strategy recommendation                       │
    ▼                                                                 │
PLANNING (Phase 0b)                                                   │
    │ Product planning: scope, market, timeline                      │
    │ Optional phase — can merge with ODI for small products         │
    ▼                                                                 │
PHASE_1 (Requirements)                                                │
    │ A-REQ: /req → /validate → /mil → /stake                       │
    │ A-QC: runs on requirements list                                │
    │ Block condition: ODI report must exist for this project        │
    ▼                                                                 │
GATE_1_REVIEW ← HITL: KN decides A/B/C/D                            │
    ├── A: APPROVED → PHASE_2                                        │
    ├── B: REVISE → back to PHASE_1                                  │
    ├── C: PAUSE → PHASE_1_PAUSED (resources reallocated)            │
    └── D: CANCEL → run Knowledge Recovery → FROZEN or ARCHIVED      │
         Knowledge Recovery (30 min): archive deliverables to         │
         vault/archives/{project_id}/, write cancel summary, log to  │
         vault/learning-journal/cancelled_projects.md                │
                                                                      │
PHASE_2 (Conceptual Design)                                           │
    │ A-CONCEPT: /abs → /fn → /morpho → /eval → /vs                 │
    │ A-QC: runs on each concept output                              │
    │ MID-PHASE PAUSE: A-PORTFOLIO → PHASE_2_PAUSED (FR-08 fix)     │
    │   Trigger: resource reallocation, external dependency          │
    │   State: {phase: "PHASE_2", status: "PAUSED", paused_at: X,   │
    │           resume_condition: "VN-RANGE-001 deployed"}           │
    ▼                                                                 │
GATE_2_REVIEW ← HITL: KN decides A/B/C/D                            │
    ├── A: APPROVED (VDI 2225 ≥70) → PHASE_3                        │
    ├── B: REVISE (below threshold) → back to PHASE_2               │
    ├── C: PAUSE → PHASE_2_PAUSED (resources reallocated)            │
    └── D: CANCEL → Knowledge Recovery → FROZEN or ARCHIVED          │
                                                                      │
PHASE_3 (Embodiment Design)                                           │
    │ A-EMBODY: /layout → /dfx → /mat → /tol → /lc                 │
    │ A-QC: runs on DfX output, local content calc                  │
    │ MID-PHASE PAUSE: A-PORTFOLIO → PHASE_3_PAUSED (FR-08 fix)     │
    ▼                                                                 │
GATE_3_REVIEW ← HITL: KN decides A/B/C/D                            │
    ├── A: APPROVED (DfX pass + local ≥60% + cost ≤70%) → PHASE_4  │
    ├── B: REVISE → back to PHASE_3                                  │
    ├── C: PAUSE → PHASE_3_PAUSED (resources reallocated)            │
    └── D: CANCEL → Knowledge Recovery → FROZEN or ARCHIVED          │
                                                                      │
PHASE_4 (Detail Design)                                               │
    │ A-DETAIL: /bom → /verify → /cost                               │
    │ Safety check: all safety-critical reqs have T or D verify     │
    │ MID-PHASE PAUSE: A-PORTFOLIO → PHASE_4_PAUSED (FR-08 fix)     │
    ▼                                                                 │
GATE_4_REVIEW ← HITL: KN decides A/B/C/D                            │
    ├── A: APPROVED → DEPLOYMENT                                     │
    ├── B: REVISE → back to PHASE_4                                  │
    ├── C: PAUSE → PHASE_4_PAUSED                                    │
    └── D: CANCEL → Knowledge Recovery → FROZEN or ARCHIVED          │
                                                                      │
DEPLOYMENT                                                            │
    │ S4 deployment process (VN-RANGE-001 pattern)                  │
    │ R2 loop activation trigger                                     │
    ▼                                                                 │
DEPLOYED ─────────────────────────────────────────────────────────────┘
    Transition criteria: FAT signed by client + range officer.        │
    R2 trigger: first paid operational session logged. (FR-12 fix)   │
    (Clawdbot handles maintenance. Freeze Order updated.)            │

──────────────────────────────────────────────────────────────────────
KNOWLEDGE RECOVERY PROTOCOL (run before any CANCEL → ARCHIVED):      │
  1. Archive deliverables to vault/archives/{project_id}/            │
  2. Write {project_id}_cancel_summary.md:                           │
     - Phase at cancellation, best concept variant, top 3 lessons    │
     - Reuse flag: "ODI report reusable for [similar product]"       │
  3. Append to vault/learning-journal/cancelled_projects.md          │
  4. Remove from active projects[] in progress.md                    │
  Time budget: 30 min. IP from 40h+ of design work is worth 30 min. │
──────────────────────────────────────────────────────────────────────
```

---

## SECTION 6: CROSS-CUTTING AGENT BEHAVIOR

### A-QC — Quality Control Gate (always on)

```
TRIGGER: Master calls A-QC after every sub-agent output
         before that output reaches KN

INPUT:  {agent_id, output_content, project_id, phase}

PROCESS: Run P44 — 10 checks:
  01 Physics Plausibility     06 AI Confidence Calibration
  02 HITL Safety Enforcement  07 Fallback Protocol
  03 TCVN Compliance          08 Detection Dual-Error Rate
  04 ROE Context Boundary     09 Power/Logistics Budget
  05 Environmental Qual.      10 Local Content/Supply Chain

OUTPUT: {
  gate_decision: PROCEED / HUMAN_REVIEW / BLOCKED,
  flags: [{check_id, severity, detail}],
  calibration_log_entry: {check_id, caught: bool}
}

MASTER ROUTING:
  BLOCKED  → halt that work stream, notify KN immediately, log miss
  REVIEW   → present flagged items to KN with gate log
  PROCEED  → deliver output + gate log (KN sees gate passed)

A-QC ERROR HANDLING (added v1.1 — FR-01/Check 07b):
  If A-QC times out or returns an error → default HALT (not PROCEED)
  Retry once. If retry fails → escalate: "A-QC error on [output]. Manual review required."
  Rationale: default PROCEED on QC error = silent failure. HALT is conservative but safe.

OVERRIDE PROTOCOL (added v1.1 — FR-05):
  Override of BLOCKED requires:
    (1) Rationale appended to dmir_log.md: "[QC OVERRIDE: Check X — reason — risk accepted]"
    (2) Output carries visible tag: "[QC OVERRIDE: Check X]"
    (3) Flagged for next Friday D-M-I-R review
  Override frequency limit: >2 overrides of same check in 1 month →
    trigger A-SYSTEMS: "Check [X] overridden [N] times — miscalibrated or risk accepted silently"
  Check 2 (HITL Safety): NO override. Ever. Halt is absolute.

CALIBRATION LOOP:
  Every week: A-DMIR reviews QC gate calibration log
  Checks that miss → tune thresholds or add new checks
  Target (aspirational, 3 runs): catch ≥90%, FP ≤15%
  Measured performance: requires ≥20 runs for statistical validity
```

### A-DMIR — Learning Loop (weekly)

```
TRIGGER: Every Friday close session (mandatory, ~60 min)
         Also triggered: after any project gate review

INPUT:  {week_N, allocation_tracker, deliverables, constraint_from_last_week}

PROCESS: Run P36 (/reflect) + P37 (/mastery) as needed
  Step 1: Diagnose — what actually happened? (time log, deliverables)
  Step 2: Model — why did it happen? (5-Why to structural cause)
  Step 3: Intervene — one structural change for next week
  Step 4: Reflect — what changed about how KN orchestrates?

OUTPUT: {
  constraint: "one sentence — what's blocking everything else",
  structural_cause: "5-Why root cause",
  intervention: "one specific change to rules/structure",
  allocation_delta: {skill → new_planned_h},
  insight: "one sentence carried forward"
}

MASTER CONSUMES:
  allocation_delta → updates A-PORTFOLIO planned hours for next week
  constraint → informs which projects and skills get priority routing
  If same constraint appears 3 weeks running → trigger A-SYSTEMS diagnosis
```

### A-SYSTEMS — Systems Thinking (on diagnosis trigger)

```
TRIGGER (Primary — structural, FR-06 fix):
  Check IRONMESH_Weekly_Allocation_Tracker.md:
  If same skill ≥2h over budget for ≥2 consecutive weeks → trigger A-SYSTEMS on that skill.
  Rationale: structural signal (hours log) not linguistic (sentence matching).

TRIGGER (Secondary — tagged):
  If dmir_log.md shows same `constraint_tag` for ≥2 consecutive weeks → trigger A-SYSTEMS.
  Rationale: consistent tagging enables detection without verbatim repetition (FR-06 fix).

TRIGGER (Manual): KN invokes /archetype at any time.

NOTE: Previous rule "same constraint named ≥3 weeks" REMOVED (FR-06 + FR-07).
      Linguistic matching is unreliable in natural language. 3 weeks is too long.
      New threshold: ≥2 weeks (FR-07: 75h wait → 50h max before structural diagnosis).

INPUT:  {persistent_problem, constraint_history[], current_state}

PROCESS: Run /cld → /loops → /leverage → /archetype
  /cld: draw causal loop diagram of the problem system
  /loops: identify which loops are dominant (R or B)
  /leverage: rank Meadows points L1-L12 for this specific problem
  /archetype: identify which Senge archetype is operating

OUTPUT: {
  dominant_loop: {name, type, current_state},
  archetype: {name, description, standard_intervention},
  leverage_points: [{L_level, description, intervention_option}],
  recommended_intervention: "highest-leverage structural change"
}

MASTER ROUTES: output to A-DMIR for next weekly reflection
               Archetype diagnosis becomes the "model" in D-M-I-R
```

### A-PORTFOLIO — Portfolio Management (weekly + on routing)

```
TRIGGER: Every routing request (Master checks before issuing work order)
         Weekly: updates allocation actual vs planned
         Monthly: full portfolio review

INPUT:  {project_id, work_request} on routing check
        {weekly_tracker} on allocation update

PROCESS:
  On routing: check projects[project_id].freeze = FALSE before allowing
  On routing: check allocation[skill].actual_h < planned_h before allowing
  Weekly: compare actual vs planned per skill, flag over/under budget
  Monthly: full freeze order review (criteria met to unfreeze?)

OUTPUT (routing): ALLOW / BLOCK_FROZEN / BLOCK_BUDGET
OUTPUT (weekly):  {allocation_status, over_budget_skills[], under_budget_skills[]}
OUTPUT (monthly): {freeze_order_status, criteria_met: bool, recommendation}

FREEZE ENFORCEMENT:
  If project.freeze = TRUE → BLOCK_FROZEN → Master does not route
  No exceptions for "quick fixes" — if >5 min = context switch = blocked
  Unfreeze only when: VN-RANGE-001 deployed + QC time ≤2h + no violations
```

---

## SECTION 7: HITL ARCHITECTURE — THREE TYPES

> Unlike V-SMASH-L (1-5 sec trigger) or VN-RANGE-001 (20 min signature),
> this system has three distinct HITL modes requiring different cognitive loads.

### Type 1 — Gate Review HITL (at phase boundaries)

| Field | Detail |
|-------|--------|
| **When** | End of each design phase (Gate 1–4 + ODI review) |
| **Time budget** | 30–60 min (not negotiable — lightweight gate still requires 3 min minimum) |
| **Information package** | (1) All deliverables summary — one page per phase (2) Gate checklist: criteria with ✅/❌ (3) QC Gate log — all outputs that passed/flagged (4) Risk register — what could still go wrong next phase |
| **Decision format** | A) APPROVE → next phase / B) REVISE → iterate / C) PAUSE → hold / D) CANCEL → freeze |
| **Master behavior** | Present gate package. Wait. Do NOT auto-proceed. Accept only A/B/C/D. |
| **Consequence if skipped** | Wrong concept enters embodiment → 10× redesign cost. DfX violation enters production → field failure. |

### Type 2 — Strategic Judgment HITL (weekly allocation + constraint naming)

| Field | Detail |
|-------|--------|
| **When** | Friday close (mandatory, 60 min). Month-end retrospective (90 min). |
| **Time budget** | 60 min weekly, 90 min monthly |
| **Information package** | (1) Actual vs planned hours per skill (from A-SKILL) (2) Deliverables completed this week (3) Constraint identification prompt: "if one thing, what makes everything faster?" (4) D-M-I-R output — constraint, cause, intervention (5) Allocation delta recommendation from A-DMIR |
| **Decision format** | (1) Name the constraint — one sentence, <1 min (2) Approve/modify allocation delta (3) Approve/modify D-M-I-R intervention for next week |
| **Master behavior** | Present strategic package. Apply allocation delta to routing for next week. Log constraint in dmir_log[]. |
| **Consequence if skipped** | B3 Skill Depletion loop activates. Constraint goes unidentified. Same problem next month. |

### Type 3 — Quality Review HITL (QC Gate output review)

| Field | Detail |
|-------|--------|
| **When** | Continuously — triggered when A-QC returns REVIEW or BLOCKED |
| **Time budget** | Target: ≤2h/week total (3h recovered from pre-automation 5h) |
| **Information package** | (1) Gate decision: PROCEED / REVIEW / BLOCKED (2) For REVIEW: flagged items only — not full output (3) For each flag: check_id, what failed, why it matters, recommended action (4) Calibration context: has this check flagged correctly before? |
| **Decision format** | For BLOCKED: "KN: this output cannot be used. [reason]. Recommended action: [X]." → KN decides to redo or override with rationale. For REVIEW: KN marks each flag as ACCEPT / REJECT / NOTED. |
| **Master behavior** | BLOCKED items halt the work stream. REVIEW items queued for KN's next review session (batched, not interrupt-driven). PROCEED items delivered with gate log. |
| **Consequence if wrong** | False negative (missed bad output) → KN acts on wrong data. False positive (good output flagged) → review time wasted. Calibration log tracks both. |

### HITL Cognitive Load Mapping

```
TYPE 1 — GATE REVIEW        TYPE 2 — STRATEGIC          TYPE 3 — QUALITY REVIEW
─────────────────────────   ─────────────────────────   ─────────────────────────
Design judgment             System orchestration         Quality judgment
30-60 min, structured       60 min, reflective           2h/week, batched
Phase checklist             5-Why diagnosis              Flag-by-flag review
A/B/C/D decision            Allocation + intervention    ACCEPT/REJECT per flag
Once per phase              Once per week               Continuous, batched
Consequence: wrong concept  Consequence: wrong skill     Consequence: bad data acts
```

---

## SECTION 8: D-M-I-R FEEDBACK LOOP — SELF-IMPROVING ORCHESTRATION

> This is the feature that distinguishes Pattern 3 from Patterns 1 and 2.
> The orchestration reconfigures itself weekly based on what it learns.

```
WEEK N:
Master routes work → sub-agents execute → A-QC gates outputs →
KN acts on gate-approved outputs → deliverables produced

FRIDAY (Week N):
A-DMIR: /reflect → produces:
  constraint_N: "QC review time still 4h — gate tuning not done"
  structural_cause_N: "Checking everything manually even after PROCEED"
  intervention_N: "Only read REVIEW flags. Skip PROCEED outputs entirely."
  allocation_delta_N: {S3: -1h, B-NS: +1h}

Master consumes D-M-I-R output:
  → updates A-PORTFOLIO planned hours
  → updates routing priority (B-NS gets +1h next week)
  → logs constraint_N in dmir_log[]

WEEK N+1:
Master routes differently — B-NS gets routing priority, S3 budget reduced
A-QC calibrated: PROCEED = skip review, REVIEW = read, BLOCKED = halt

If constraint_tag_N = constraint_tag_{N-1} (same tag, 2 consecutive weeks):
  → trigger A-SYSTEMS: "Persistent constraint [tag] — run archetype analysis"
  → A-SYSTEMS output feeds into Week N+1 D-M-I-R as the "model" section
  (FR-06: structural trigger replaces linguistic. FR-07: 2 weeks, not 3.)

CUMULATIVE EFFECT:
Week 1: Constraint named, first intervention
Week 4: Retrospective — did interventions work? (Month 1 data)
Month 2: Allocation rebuilt on evidence, not assumptions
Quarter: Pattern of constraints → structural redesign of the system
```

**The R1 Reinforcing Loop:**
```
Better D-M-I-R reflection
    → Better constraint identification
        → Better intervention selection
            → Better allocation calibration
                → Better output quality
                    → More to reflect on
                        → Better D-M-I-R reflection (↑)
```

---

## SECTION 9: RESOURCE ALLOCATION INTEGRATION

> The 25h/week constraint is not a preference. It is an architectural boundary.
> Master enforces it the same way a circuit breaker enforces current limits.

```
ALLOCATION STATE (managed by A-PORTFOLIO + A-SKILL):

Skill          Planned  Actual  Delta  Budget remaining  Priority
─────────────────────────────────────────────────────────────────
S1 AI Literacy    2h      ?      ?      2h                maintain
S2 Orchestration  6h      ?      ?      6h                document
S3 QC/Reasoning   2h      ?      ?      2h                automate
S4 Process Design 6h      ?      ?      6h                VN-RANGE-001
S5 Governance     2h      ?      ?      2h                TCVN matrix
B-NS Negotiation  2h      ?      ?      2h                briefing practice
Strategic/Meta    2h      ?      ?      2h                D-M-I-R
Buffer            3h      ?      ?      3h                NON-NEGOTIABLE
─────────────────────────────────────────────────────────────────
TOTAL            25h

ROUTING RULES (Master enforces):
  IF skill.actual_h ≥ skill.planned_h → BLOCK new routing to that skill
  IF buffer.actual_h > 0 → allow routing to buffer for unexpected work
  IF buffer.actual_h = 0 → WARNING: zero slack. Protect next week's buffer.
  IF buffer depleted 2 consecutive weeks → ESCALATE to D-M-I-R: B3 depletion risk

FREEZE ENFORCEMENT (A-PORTFOLIO enforces):
  IF project.freeze = TRUE → BLOCK all routing (≥5 min threshold)
  Clawdbot handles maintenance of frozen projects without touching budget
  Procurement inquiry for frozen product → acknowledge, defer, no design work
```

---

## SECTION 10: CONDITIONAL EDGE LOGIC (Pattern 3)

> Pattern 3 edges are mostly about dependency violations and resource constraints.
> Not about sensor failures or survey incompleteness.

```
DEPENDENCY VIOLATION EDGES:

If work requested for Phase 1 with no ODI report:
→ BLOCK: "ODI required before Phase 1. Run /odi first."
→ Route to A-ODI to start the process

If Gate review requested when checklist criteria not met (≥80% quantified):
→ BLOCK gate from being presented
→ Route back to A-REQ: "X% of requirements unquantified. Minimum 80% required."

If Phase 2 concept VDI 2225 score < 70:
→ Gate 2 cannot pass with A-grade
→ Route back to A-CONCEPT: "Highest-scoring concept at [X]%. Minimum 70% required."

RESOURCE CONSTRAINT EDGES:

If skill budget exhausted for the week:
→ BLOCK routing to that skill until next week
→ ESCALATE: "S[X] budget consumed. KN: defer or reallocate from buffer?"

If buffer consumed:
→ WARNING displayed every session
→ Block any new work that isn't on the current project's critical path
→ Route to A-DMIR: "Buffer depleted — add to Friday reflection."

QUALITY GATE EDGES:

If A-QC returns BLOCKED:
→ Halt work stream
→ ESCALATE immediately: "QC BLOCKED: [check_id]. Output cannot proceed."
→ KN decides: redo or override with documented rationale

If A-QC returns REVIEW:
→ Queue flagged items for KN's next Type 3 HITL session
→ Work stream continues on non-flagged items
→ REVIEW items not acted on until KN clears them

LEARNING LOOP EDGES:

If D-M-I-R constraint unchanged for 3 consecutive weeks:
→ Trigger A-SYSTEMS: persistent structural problem
→ "Same constraint [X] named 3 weeks running. Archetype analysis needed."

If skill actual far exceeds planned (>2h over):
→ ESCALATE to next Friday's D-M-I-R
→ "S[X] overrun by [N]h. Model why. Adjust allocation next week."

If deliverable not completed in planned timeframe:
→ Do not compensate by cutting buffer
→ Log in D-M-I-R: "What structural barrier prevented delivery?"
```

---

## SECTION 11: PATTERN 3 REUSABLE TEMPLATE

```yaml
pattern: IRONMESH_WORKFLOW_ORCHESTRATION
version: 1.0
applies_to: Multi-framework knowledge work with multiple projects,
            resource constraints, and a learning feedback loop

MASTER_AGENT:
  state: [projects[], allocation{}, weekly_constraint, qc_calibration{}, dmir_log[]]
  routing_rules:
    - check freeze order before routing (BLOCK if frozen)
    - check budget before routing (BLOCK if skill over-budget)
    - call A-QC after every sub-agent output (no exceptions)
    - consume D-M-I-R output weekly to reconfigure routing
  HITL: at every gate, every allocation review, every QC BLOCKED event

FRAMEWORK_AGENTS:
  type: sequential pipeline per project phase
  dependency_order: enforced (ODI before Phase 1, Phase 1 before Phase 2, etc.)
  state: stateless per invocation (Master holds project state)

CROSS_CUTTING_AGENTS:
  A-QC: runs on every output — no opt-out, no skip
  A-DMIR: runs weekly — mandatory, not optional
  A-PORTFOLIO: gates every routing decision
  A-SYSTEMS: triggered on persistent constraints (≥3 weeks same problem)

HITL_TYPES:
  gate_review: A/B/C/D per phase — 30-60 min, structured checklist
  strategic_judgment: weekly/monthly — 60-90 min, D-M-I-R format
  quality_review: continuous, batched — 2h/week, REVIEW flags only

FEEDBACK_LOOP:
  D-M-I-R output → Master reconfigures allocation → next week's routing changes
  QC calibration log → gate tuned weekly → fewer false positives/negatives
  Archetype analysis → structural intervention → constraint resolved

RESOURCE_CONSTRAINT:
  hard_limit: 25h/week total
  buffer: 3h/week NON-NEGOTIABLE (prevents B3 depletion)
  routing_block: if skill over-budget → defer to next week
  buffer_alert: if buffer depleted 2 consecutive weeks → D-M-I-R intervention

FAILURE_MODE_PREVENTION:
  B1 Complexity Ceiling: freeze order enforced by A-PORTFOLIO
  B3 Skill Depletion: buffer protected by routing rules
  Wrong intervention: 5-Why in D-M-I-R, archetype analysis on persistence
  Gate drift: lightweight gate (3 min minimum) enforced, never auto-approved
```

---

## SECTION 12: THE THREE PATTERNS — COMPLETE TAXONOMY

```
IRONMESH S2 ORCHESTRATION PATTERN LIBRARY
══════════════════════════════════════════════════════════════════════

PATTERN 1: LINEAR PIPELINE (VN-RANGE-001 Deployment)
Purpose:   Execute a defined multi-step process to completion
Structure: A → B → C → D (sequential, phases don't cycle)
Agents:    Administrative (doc, config, test, deploy)
Time:      Hours to days per step
HITL:      Review documents, sign gates (20-45 min)
Fallback:  Retry (2×) → escalate to KN
Uniqueness: Gate decisions require both parties to sign
Use when:  Complex deployment with ordered dependencies, human-in-loop at gates

PATTERN 2: STATE MACHINE (V-SMASH-L Engagement)
Purpose:   Manage a real-time cyclic process with operator in the loop
Structure: States ⇄ States (cyclic, driven by sensor data)
Agents:    Real-time inference (detect, track, IFF, fire control)
Time:      Milliseconds to seconds per cycle
HITL:      One-glance signals, physical action (1-5 sec)
Fallback:  Instant → manual mode (no time for retry)
Uniqueness: "Uncertain" routes to operator NOW; IFF GREEN blocks gate always
Use when:  Real-time sensor-driven system, human is the actor not the reviewer

PATTERN 3: WORKFLOW ORCHESTRATION (Framework System)
Purpose:   Coordinate multiple frameworks, projects, skills under constraint
Structure: Dependency graph with cycles (D-M-I-R loop reconfigures routing)
Agents:    Framework agents (ODI, design phases) + cross-cutting (QC, learning)
Time:      Weeks to months per project cycle
HITL:      3 types: gate review (30-60 min), strategic judgment (1-2h), quality review (2h/week)
Fallback:  Pause project, protect buffer, reroute capacity
Uniqueness: D-M-I-R feedback loop reconfigures the orchestration itself
Use when:  Multi-project, multi-skill knowledge work with explicit learning requirement

══════════════════════════════════════════════════════════════════════
SELECTION RULE:
  Is the process: sequential, order-dependent, hours/days? → Pattern 1
  Is the process: cyclic, real-time, sensor-driven? → Pattern 2
  Is the process: multi-project, multi-framework, with learning loop? → Pattern 3
══════════════════════════════════════════════════════════════════════
```

---

*IRONMESH Framework Orchestration Design v1.1 — 2026-02-20*
*S2 practice: third application — completes the three-pattern taxonomy*
*Pattern 3 is the meta-system: it orchestrates the orchestration methodology itself*
*v1.0 → v1.1: S3 deep dive found 10 critical reasoning gaps. 7 addressed in this version.*
*Key fix: "Master holds state" is session-bound. State is now externalized to 5 files.*
*Pending (FR-03, FR-04, FR-10): budget critical-path priority, buffer eligibility, ODI sub-pipeline.*
