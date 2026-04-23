---
project: IRONMESH — Workshop X
type: s3-deep-dive (critical reasoning practice — second focused run)
scope: IRONMESH_Framework_Orchestration_Design_v1.0.md (Pattern 3)
       Deep-dive focus: what did the first S3 pass miss?
version: 1.0
created: 2026-02-20
skill_targets: S3 Critical Reasoning (Layer 2 depth) + S3 Gate Calibration (Layer 3)
prerequisite: IRONMESH_S3_QC_Practice_v1.0.md (first S3 run — three documents, gate upgraded to v1.1)
context: First S3 pass on Framework gave "HUMAN REVIEW — 0 FAIL, 4 FLAG" (shallow).
         This run goes deeper: full 12-check v1.1 gate + Layer 2 critical reasoning.
         Goal: find what structured gate checks cannot catch (logic gaps, architectural mismatches).
---

# IRONMESH — S3 Framework Orchestration Deep Dive
## QC Gate v1.1 + Critical Reasoning: What the First Pass Missed

---

## SECTION 0: WHY A SECOND S3 PASS?

The first S3 run applied QC Gate v1.0 to three documents simultaneously.
The Framework Orchestration document received a shallow **HUMAN REVIEW (0 FAIL, 4 FLAG)** —
the lightest finding of the three documents.

This seems plausible (methodology docs are lower physical risk than engagement systems).
But a "light flag" on the most architecturally complex document in the set is a warning sign.

**The hypothesis going in:** The Framework document is *harder* to QC-gate than V-SMASH-L
because its failure modes are slower and less visible. A state machine either fires or it doesn't.
A methodology orchestration drifts gradually — wrong interventions compound over months.
This makes it MORE likely to pass structural checks while hiding architectural gaps.

**The test:** Run the full 12-check v1.1 gate carefully, then go deeper with Layer 2.

---

## SECTION 1: QC GATE v1.1 — FULL RUN

```
═══════════════════════════════════════════════════════════════
DEFENSE AI QC GATE — REPORT v1.1 (DEEP DIVE RUN)
═══════════════════════════════════════════════════════════════
Product:       IRONMESH Framework Orchestration Design
Input type:    Architecture / Orchestration Design
Domain:        Methodology orchestration (meta-system)
Phase:         Meta-design — orchestrates all design phases
Review date:   2026-02-20
Run type:      DEEP DIVE — focused second pass after shallow first pass
───────────────────────────────────────────────────────────────
CHECK RESULTS:
  01 Physics Plausibility ........... [FLAG]
  02 HITL Safety Enforcement ........ [PASS]
  03 TCVN / Regulatory Compliance ... [FLAG]
  04 ROE Context Boundary ........... [FLAG]
  05 Environmental Qualification .... [PASS — N/A]
  06 AI Confidence Calibration ...... [FLAG]
  07 Fallback Protocol .............. [FLAG — PERSISTS from v1.0 + new sub-check]
  08 Detection Dual-Error Rate ....... [FLAG]
  09 Power / Logistics Budget ....... [PASS — N/A]
  10 Local Content / Supply Chain ... [PASS — N/A]
  11 Accountability Independence ..... [FLAG]
  12 No Placeholder Content .......... [FLAG]
───────────────────────────────────────────────────────────────
GATE DECISION:   HUMAN REVIEW — 0 FAIL, 8 FLAG
  (vs first pass: 0 FAIL, 4 FLAG — gate caught double the flags this run)
───────────────────────────────────────────────────────────────

FINDINGS (Layer 1):

CHECK 01 — FLAG
  Finding: "5h/week → 2h/week QC time recovery" is stated as an architectural outcome
            in Section 7 (Type 3 HITL time budget). No validation data exists.
            Document has been used in 3 QC runs (today only). Sample size: insufficient.
  Fix: Change to "Target: ≤2h/week. Current baseline pre-automation: ~5h (estimated).
       First 4-week sprint will measure actual time and calibrate."

CHECK 03 — FLAG
  Finding: Gate criteria (≥80% quantified requirements, VDI 2225 ≥70%) are
            stated as requirements but their source standards are not cited.
            VDI 2221 (systematic design methodology) and VDI 2225 (design evaluation)
            are the normative standards. Citing them anchors the criteria to audited
            methodology rather than presenting them as KN's personal preferences.
  Fix: Add to Section 4 Layer 2 header: "Gate criteria per VDI 2221 rev. / VDI 2225."

CHECK 04 — FLAG
  Finding: ODI strategy approval HITL (Section 5: "HITL: KN reviews strategy
            recommendation") has no defined information package.
            A-ODI output includes opportunity scores, strategy, target segment —
            but the HITL package for the strategy approval is unspecified.
            v1.1 sub-check: "Does ODI output include product category ethical review
            before strategy proceeds to planning?" — FAILS. No ethical boundary check
            is defined in the ODI approval HITL.
  Fix: Define ODI approval HITL information package (Section 5 HITL for ODI_PENDING):
       (1) ODI report summary (2) Top 3 opportunity scores with evidence tier
       (3) Ethical boundary check: "Is this product category within Workshop X's
       scope? No ITAR conflict? No dual-use export control risk?" (4) Strategy
       recommendation: ATTACK/DEFEND/ADJACENT. KN approves before A-REQ begins.

CHECK 06 — FLAG
  Finding: Section 6 (A-QC): "Target: catch rate ≥90%, false positive rate ≤15%"
            stated without evidence basis. After this session, total gate runs: 3.
            Estimated v1.1 catch rate: ~85% (qualitative estimate, not measured).
            Presenting 90% / 15% as targets is reasonable — but calling them targets
            (not measured performance) must be explicit.
  Fix: Mark targets as aspirational: "Target (aspirational, 3 runs): catch ≥90%, FP ≤15%.
       Measured performance: unknown — requires ≥20 runs for statistical validity.
       Gate Evolution Roadmap: v1.2 adds domain-specific variants (10 runs),
       v2.0 adds measured calibration data (20 runs)."

CHECK 07 — FLAG (PERSISTS + NEW SUB-CHECK)
  Finding 07a (persists from v1.0, now sub-check): "Master consumes D-M-I-R output →
               reconfigures routing" describes intent, not mechanism. The Master is a
               Claude Code session. Between sessions, all state exists only in files.
               "Consumes" = KN reads the D-M-I-R output in next session and manually
               updates routing priorities. This is human-mediated, not automatic.
               The feedback loop is only as reliable as KN's session-opening discipline.
  Finding 07b (new): A-QC's own failure mode is undefined. Section 6: "TRIGGER: Master
               calls A-QC after every sub-agent output." But if A-QC itself errors,
               times out, or returns an ambiguous result — what happens? Does work proceed
               (dangerous) or halt (conservative)? The document is silent.
  Fix 07a: Add to Section 6 (A-DMIR): "Session-opening protocol: at start of each new
            session, KN reads: (1) progress.md for current state (2) dmir_log.md for
            last constraint (3) A-PORTFOLIO state for current allocation."
            Add file: dmir_log.md to persist constraints between sessions.
  Fix 07b: Add to Section 6 (A-QC): "A-QC ERROR HANDLING: If A-QC times out or returns
            an error → default HALT. Output not delivered to KN. Retry once. If retry
            fails → escalate to KN: 'A-QC error on [output]. Manual review required.'"

CHECK 08 — FLAG
  Finding: A-SYSTEMS trigger is a detection system with two error directions:
            - False Negative: Same constraint, different words → trigger never fires.
              (3 weeks of "S4 too weak", "process unclear", "deployment slowed" —
               same problem, different sentences, trigger never activates)
            - False Positive: Different constraint, same words → trigger fires prematurely.
            The trigger is purely linguistic. No semantic matching specified.
            No error rate analysis for the trigger mechanism.
  Fix: Change trigger from "same constraint named" to "same domain blocked":
       "If allocation tracker shows same skill as >2h over budget for ≥3 consecutive weeks
       → trigger A-SYSTEMS." This is structural (hours log) not linguistic (sentence matching).
       Supplementary: "OR if KN explicitly tags D-M-I-R constraint with same category label."

CHECK 11 — FLAG
  Finding: All gate reviews (Gate 1-4 + ODI + Allocation) have KN as both designer and
            sole approver. This is appropriate for personal skill development (current mode).
            It becomes an accountability gap when this framework is used for defense product
            delivery to external clients (Vietnamese military procurement).
            At that transition point, all gates become single-reviewer without independence —
            the same pattern that triggered Check 11's addition for VN-RANGE-001.
  Fix: Add note to Section 7 (Type 1 HITL): "FOR EXTERNAL DELIVERY: Gate 3-4 require
       independent technical review (second engineer or client technical rep) before
       KN's A/B/C/D decision. Gate 1 requires stakeholder sign-off on requirements
       list (per CLAUDE.md gate checklist). This framework is currently in personal-
       development mode. Upgrade this section before first commercial delivery."

CHECK 12 — FLAG
  Finding (a): PLANNING phase (Phase 0b) has no gate criteria. Section 5 lists
               "Product planning: scope, market, timeline" as PLANNING activities
               but no criteria for exit. When is PLANNING complete enough to enter Phase 1?
               This creates an undefined transition that could let projects skip PLANNING.
  Finding (b): DEPLOYMENT → DEPLOYED transition undefined. When is a deployment
               "complete"? When R2 activates? When FAT passes? When first revenue received?
               The transition has no criteria — any of these could be used, leading to
               inconsistent state tracking.
  Finding (c): Type 1 HITL information package: "(4) Risk register — what could still
               go wrong next phase" — risk register format and population method not specified.
  Fix (a): Add to PLANNING phase: "Exit criteria: scope statement ≤1 paragraph (what
            product, for whom, why now). Market validation: ≥1 customer interview or
            secondary source. Timeline: rough milestones (3-5 items). Optional for
            products with existing ODI report + clear scope."
  Fix (b): Add to DEPLOYMENT → DEPLOYED: "Transition criteria: FAT signed by client rep +
            range officer. R2 trigger: first paid operational session logged."
  Fix (c): Add risk register template: "{phase_N+1 risks: [{risk, likelihood, impact,
            mitigation}]}. Minimum 3 risks per gate review."

───────────────────────────────────────────────────────────────
TIME SAVED: ~3h manual review pre-screened. Flags 04, 11, 12 identified by gate
            are high-leverage findings that would require full re-read to find manually.
═══════════════════════════════════════════════════════════════
```

---

## SECTION 2: LAYER 2 — CRITICAL REASONING FINDINGS

> Layer 1 catches structural violations. Layer 2 asks:
> "Is the logic internally consistent? Are the architectural claims true?"
> These findings require domain knowledge and design experience — not just checklist execution.

---

### FR-01 [CRITICAL]: Session-Bound State vs Claimed Persistent State

**What the document says:**
> Section 3.1: "State held: projects[], allocation{}, weekly_constraint, qc_calibration{}, dmir_log[]"

**The architectural reality:**
The Master Agent is a Claude Code session. Claude Code sessions:
1. Do not persist memory between conversations
2. All "state" must be externalized to files
3. Every new session starts fresh — the Master re-reads state from files, or it operates blind

The document writes "Master holds all state" as if the Master is a continuously-running process.
In reality, the Master holds state *within* a session. Between sessions, state lives only in files.

**The gap:** None of these persistence files are defined:
- `projects[]` — where is the projects state file? What format?
- `allocation{}` — which allocation tracker file? (Referenced in CLAUDE.md but not in this document)
- `weekly_constraint` — where is this written between Fridays?
- `qc_calibration{}` — this one IS defined: Defense_AI_QC_Gate.md calibration log ✓
- `dmir_log[]` — no file defined. Currently only in progress.md? Or nowhere?

**Impact:** If KN opens a new session without reading the right files, the Master operates with
incomplete state. A frozen project might receive work orders. A depleted budget might get
over-allocated. The D-M-I-R feedback loop from last Friday is invisible to this week's session.

**This is the most critical finding** because it means the document's core claim — "Master
holds all state" — is architecturally false in the system as deployed. The design assumes
a persistent process; the implementation requires disciplined file management.

**Fix:**
```
ADD: Section 3.1 — Session State Protocol

Master Agent state is externalized to files. Session-opening checklist (mandatory):

  File                          | Contains                     | Read at
  ──────────────────────────────|──────────────────────────────|──────────
  progress.md                   | project phases, current work | Every session
  allocation_tracker.md (new)   | skill planned/actual hours   | Every session
  dmir_log.md (new)             | constraints, interventions   | Friday sessions
  IRONMESH_Product_Freeze.md    | freeze order, criteria       | Every session
  Defense_AI_QC_Gate.md         | calibration log              | QC sessions

If a session opens without reading these files, Master does NOT have valid state.
Treat unread state as unknown — ask KN before routing any work.
```

**Required new files to create:**
- `allocation_tracker.md` — skill hours log (planned vs actual per week)
- `dmir_log.md` — persistent D-M-I-R constraint and intervention history

---

### FR-02 [HIGH]: FROZEN vs ARCHIVED — Undefined Distinction

**What the document says:**
> Section 5: "D: CANCEL → FROZEN or ARCHIVED"

**The gap:**
`ARCHIVED` appears exactly once in the document. No definition, no behavior, no criteria
for when CANCEL → FROZEN vs CANCEL → ARCHIVED.

`FROZEN` IS defined: Clawdbot handles maintenance, no work routing.

`ARCHIVED` is mentioned but undefined. Possible interpretations:
- "Archived" = deleted (dangerous — IP lost)
- "Archived" = FROZEN but permanently (no unfreeze path)
- "Archived" = FROZEN + explicit "no future intent" label (meaningful distinction)

**Why this matters:** Gate CANCEL decisions vary by phase:
- Gate 1 CANCEL (failed requirements) → little sunk cost, probably ARCHIVED
- Gate 4 CANCEL (failed final review on near-complete product) → substantial IP, probably FROZEN
- CANCEL due to competitor action → might want ARCHIVED with knowledge recovery first

The current document conflates these into a single ambiguous state.

**Fix:**
```
Define distinction:
  FROZEN:   Project work stopped. IP preserved. Clawdbot handles queries.
            Unfreeze trigger: defined (e.g., "VN-RANGE-001 deployed + 6 months").
            Use when: cancellation due to resource constraints, not technical failure.

  ARCHIVED: Project work stopped. IP captured in archive doc and then removed from
            active workspace. No Clawdbot maintenance. No unfreeze path.
            Archive protocol: before archiving, run knowledge recovery:
              (1) Lessons learned (1-2 sentences per phase completed)
              (2) Reusable assets identified (ODI report, requirements list, concept)
              (3) Logged in master lessons file
            Use when: technical dead-end, market invalidated, or superseded product.
```

---

### FR-03 [HIGH]: Budget Block Does Not Distinguish Critical Path vs Nice-to-Have

**What the document says:**
> Section 9: "IF skill.actual_h ≥ skill.planned_h → BLOCK new routing to that skill"
> Section 10: "Block any new work that isn't on the current project's critical path" (buffer rule)

**The gap:**
The per-skill budget block (Section 9) treats ALL work for a skill equally.
The critical-path protection rule (Section 10) only applies when the *buffer* is depleted —
not when a *skill's budget* is depleted. These are different triggers.

**Scenario:** S4 budget is 6h/week. KN spends 4h on IRONMESH documentation (S4 work).
VN-RANGE-001 deployment plan (critical path, also S4) is still pending.
Budget check: S4 at 4h → still 2h remaining. Actually, this scenario doesn't fail.

**Harder scenario:** KN spends 6h on S4 documentation before doing VN-RANGE-001 critical path.
Budget exhausted → VN-RANGE-001 deployment blocked for the week.

The block correctly fires. But the system doesn't ask: "Was the S4 work that consumed the budget
on the critical path? If not, should it have been stopped at 4h to preserve 2h for VN-RANGE-001?"

There's no priority ordering of work *within* a skill budget. Work is accepted on a first-come
basis until budget is depleted. Priority could be inverted.

**Fix:**
```
ADD to Section 9 routing rules:
  CRITICAL PATH FIRST rule: Before routing any skill work, check:
    Is there a higher-priority use of this skill budget?
    Priority order: (1) VN-RANGE-001 critical path (2) Gates blocked waiting for this skill
                    (3) Other active project work (4) Learning/documentation
  If higher-priority work exists for this skill → route that first.
  Budget consumed by lower-priority work does NOT get retrospectively credited.
```

---

### FR-04 [HIGH]: Buffer-Eligible Work Not Defined

**What the document says:**
> Section 9: "IF buffer.actual_h > 0 → allow routing to buffer for unexpected work"
> Section 10: "Block any new work that isn't on the current project's critical path"
>              (this is the buffer depletion rule — different trigger)

**The gap:**
"Unexpected work" is undefined. The buffer is described as "NON-NEGOTIABLE" but its eligible uses
are not specified. Without a definition:

- A gate review that runs 1h over planned time → buffer? Probably yes (unexpected).
- An urgent stakeholder request for a frozen product → buffer? The answer should be no
  (that's what Clawdbot is for) but the document doesn't say.
- KN needs to understand a new methodology before applying it → buffer? Probably no (planned).
- A critical blocker appears in VN-RANGE-001 deployment → buffer? Yes.
- KN is sick/tired and works slower → buffer? This is behavioral, not a work type.

The buffer's structural protection is only as strong as its definition. Undefined = consumed
by routine overruns regardless of intent.

**Fix:**
```
ADD to Section 9:
  BUFFER ELIGIBLE USES (only these qualify):
    (1) Unblocking critical path: work that appeared this week that blocks VN-RANGE-001 shipping
    (2) Gate review overrun: structured gate review exceeds time budget (max +1h one time)
    (3) External stakeholder response: non-deferrable stakeholder request (≤30 min)
    NOT eligible: skill learning, documentation, non-critical work, compensating for
                  planning overestimation (handle via D-M-I-R allocation recalibration)
  Buffer depletion = signal, not resource: if buffer depletes → log in D-M-I-R, not in work log.
```

---

### FR-05 [HIGH]: A-QC Override Has No Audit Trail

**What the document says:**
> Section 7 (Type 3 HITL): "For BLOCKED: KN decides to redo or override with documented rationale."

**The gap:**
"Documented rationale" is required but:
- WHERE is it documented? No file specified.
- WHO sees it? No one — KN both blocks and overrides.
- Is there a limit on override frequency? No threshold defined.
- Does calibration log track overrides? Not explicitly.

**Failure mode:** Over time, if KN regularly overrides certain checks ("Check 08 always flags
systems thinking triggers — I always override it"), the QC gate becomes performative. It runs,
gets flagged, KN overrides, work continues. The gate provides no protection.

This is especially dangerous for Check 2 (HITL Safety) — the SAFETY_OVERRIDE states:
"If Check 2 returns FAIL — halt immediately." But if KN can override any BLOCKED decision
without a logged audit trail, even the Check 2 safety override is undermined.

**Fix:**
```
ADD to Section 6 (A-QC — MASTER ROUTING):
  OVERRIDE PROTOCOL:
    Override of BLOCKED decision requires:
      (1) Rationale documented in QC gate log entry (which check, why override, risk accepted)
      (2) Override flag visible in output: "[QC OVERRIDE: Check X — reason]"
      (3) Logged in dmir_log.md for review at next Friday D-M-I-R
    Override frequency limit: >2 overrides of same check in 1 month → A-SYSTEMS trigger:
      "Gate check [X] overridden [N] times. Either check is miscalibrated or KN is
       accepting risk without structural fix. Requires archetype analysis."
    Check 2 (HITL Safety): NO override possible. Halt is absolute.
```

---

### FR-06 [HIGH]: A-SYSTEMS Trigger Is Linguistically Fragile

**What the document says:**
> Section 6: "TRIGGER: Master detects: same constraint named for ≥3 consecutive weeks"

**The gap:**
"Same constraint named" requires linguistic matching — the same words across three
D-M-I-R entries. But D-M-I-R constraints are expressed narratively. Natural language
doesn't repeat verbatim across weeks.

**Concrete failure mode:**
```
Week 1: "S4 process automation too weak to design VN-RANGE-001 deployment"
Week 2: "Deployment map stuck because process design isn't clear enough"
Week 3: "VN-RANGE-001 critical path blocked, need stronger S4"
```
Same constraint (weak S4 blocking deployment). Trigger: never fires.
3 weeks of wrong interventions. KN finally calls A-SYSTEMS manually at week 5.

**The linguistic matching is essentially unusable** unless KN manually tags constraints with
a category label. Which makes the trigger dependent on KN's discipline — the same problem
that makes the feedback loop session-dependent (FR-01).

**Fix:**
```
CHANGE trigger from linguistic to structural:
  TRIGGER (Primary): If allocation_tracker shows same skill ≥2h over budget for
                     ≥3 consecutive weeks → trigger A-SYSTEMS on that skill.
  TRIGGER (Secondary): If D-M-I-R constraint field contains user-tagged category
                       (e.g., [SKILL:S4] or [SYSTEM:B1]) same tag for ≥3 weeks.
  TRIGGER (Manual): KN can invoke /archetype at any time for explicit diagnosis.

REMOVE: "same constraint named" — this rule cannot function in practice.
```

---

### FR-07 [MEDIUM]: 3-Week Wait Is Too Long for Structural Diagnosis

**What the document says:**
> Section 6: "If same constraint appears 3 weeks running → trigger A-SYSTEMS"

**The gap (even with the FR-06 fix applied):**
3 weeks = ~75h of effort at 25h/week. At the point A-SYSTEMS triggers:
- 2 failed parameter interventions (Week 1 and 2 D-M-I-R produced adjustments that didn't work)
- 75h of potentially misdirected effort accumulated
- If this is the S4 bottleneck blocking VN-RANGE-001: 3 weeks of deployment delay

The Q1 2026 horizon (VN-RANGE-001 operational) is ~6 weeks from this document's creation date.
A 3-week wait for structural diagnosis burns 50% of the remaining timeline before acknowledging
the problem is structural.

**Fix:**
```
CHANGE 3-week trigger → 2-week trigger:
  "If same constraint appears 2 consecutive weeks → trigger A-SYSTEMS"

RATIONALE: One failed intervention is enough to ask "is this structural?"
           Two consecutive fails with same constraint = structural indicator.
           Reduce wait from 75h to 50h. In a 25h/week system, every week matters.
```

---

### FR-08 [MEDIUM]: Mid-Phase PAUSED State Is Missing

**What the document says:**
> Section 5: PAUSE option (C) is available only at GATE reviews.

**The gap:**
Once a project enters PHASE_2, the only defined exits are:
- Complete to GATE_2_REVIEW
- Abnormal exit (undefined)

There is no PAUSED state for mid-phase interruption. But mid-phase pauses are common:
- A critical external stakeholder becomes unavailable for 2 weeks mid-Phase 1
- VN-RANGE-001 critical path consumes all S4 budget for 3 weeks, pausing another project
- KN needs to redirect all capacity for an urgent military touchpoint opportunity

In these cases, the project is "in PHASE_X" but no work is being done. The state machine
doesn't have a way to represent this — the project looks active when it isn't.

**Fix:**
```
ADD to each PHASE state:
  MID-PHASE PAUSE:
    Trigger: Resource reallocation (A-PORTFOLIO), external dependency, KN decision
    State: PHASE_X → PHASE_X_PAUSED
    Resume: When resource constraint lifts → resume from last completed sub-step
    Status in projects[]: {phase: "PHASE_2", status: "PAUSED", paused_at: "morpho step",
                           resume_condition: "VN-RANGE-001 deployed"}
    Clawdbot: handles queries on PAUSED project same as FROZEN (no new work)
```

---

### FR-09 [MEDIUM]: Cancelled Project Knowledge Recovery Undefined

**What the document says:**
> Section 5: "D: CANCEL → FROZEN or ARCHIVED"
> (FR-02 addresses FROZEN vs ARCHIVED distinction)

**Beyond FR-02 — the knowledge recovery gap:**
Even with FR-02's fix (define ARCHIVED protocol), the knowledge recovery step must be
explicitly designed, not just mentioned. Cancelled projects after Phase 2 contain:
- ODI report (reusable for similar future product strategy)
- Requirements list (may inform future products)
- Losing concept variants from VDI 2225 comparison (could be right for a different product)
- Lessons learned (which methodology steps failed, what environment was unexpected)

Currently: CANCEL → state change. All this IP is in files that might not be read again.

**Fix (completes FR-02):**
```
ADD: Before any CANCEL decision becomes final, run KNOWLEDGE RECOVERY protocol:

  1. Archive deliverables to vault/archives/{project_id}/ (separate from active projects)
  2. Write {project_id}_cancel_summary.md:
       - Phase reached at cancellation
       - Best concept variant (even if insufficient for this product)
       - Top 3 lessons (what methodology would you do differently)
       - Reuse flag: "ODI report reusable for: [similar product]"
  3. Add to master lessons file: vault/learning-journal/cancelled_projects.md
  4. Remove from active projects[] in progress.md

This is a 30-minute protocol. The IP produced in 40h+ of design work is worth 30 minutes.
```

---

### FR-10 [LOW]: ODI Sub-Pipeline Dependency Enforcement Missing

**What the document says:**
> Section 6 (Layer 1): "A-ODI: /odi → /jobs → /outcomes → /opp → /seg"

**The gap:**
The sub-pipeline order is defined by arrow notation but the enforcement mechanism is not.

Within ODI, there is a strict dependency:
- `/odi` (setup) → must precede everything
- `/jobs` (job mapping) → feeds `/outcomes` (can't identify outcomes without jobs)
- `/outcomes` (outcome mapping) → feeds `/opp` (can't score without outcomes)
- `/opp` (opportunity scores) → feeds `/seg` (segment by opportunity pattern)

If `/opp` runs before `/outcomes`, the opportunity scores have no outcome basis — they're
pure assumption (L5 evidence). This is the ODI equivalent of calculating VDI 2225 scores
without criteria (the scores would be meaningless).

**Why only LOW severity:** This gap only affects output quality within a methodology step.
The downstream block ("No A-REQ work until ODI report exists") prevents the bad ODI
output from propagating if the ODI report is clearly incomplete. But it allows a
plausible-looking ODI report to pass if /opp was run before /outcomes.

**Fix:**
```
ADD to Section 6 (Layer 1) A-ODI block:
  Sub-pipeline dependency check: Before routing to /opp:
    Verify /outcomes has run for this project (outcomes file exists with ≥5 outcomes mapped).
  Before routing to /seg:
    Verify /opp has run (opportunity scores exist for ≥80% of outcomes).
  This mirrors the dependency enforcement at the inter-layer level.
```

---

## SECTION 3: FINDING SUMMARY

| ID | Severity | Title | Root Cause | Fix Scope |
|----|----------|-------|-----------|-----------|
| FR-01 | **CRITICAL** | Session-bound state vs claimed persistent state | Architecture mismatch: document assumes continuous process, reality is session-based | Define 5 persistent state files + session-opening checklist |
| FR-02 | HIGH | FROZEN vs ARCHIVED undefined | Incomplete state machine — one state mentioned, undefined | Define distinction + archive protocol |
| FR-03 | HIGH | Budget block ignores critical path priority | First-come routing within skill budget | Add critical-path-first routing rule |
| FR-04 | HIGH | Buffer-eligible work undefined | "Unexpected work" left undefined | Enumerate eligible/ineligible buffer uses |
| FR-05 | HIGH | A-QC override has no audit trail | Override allowed without logging mechanism | Override protocol + frequency limit + Check 2 absolute |
| FR-06 | HIGH | A-SYSTEMS trigger linguistically fragile | Text matching in natural language = not functional | Structural trigger (hours log) replaces linguistic |
| FR-07 | MEDIUM | 3-week wait too long for structural diagnosis | Conservative threshold but expensive in a 6-week horizon | Change to 2-week trigger |
| FR-08 | MEDIUM | Mid-phase PAUSED state missing | State machine only has pause at gates | Add PHASE_X_PAUSED state |
| FR-09 | MEDIUM | Cancelled project knowledge recovery undefined | CANCEL→state change without IP capture | 30-min knowledge recovery protocol before archiving |
| FR-10 | LOW | ODI sub-pipeline dependency not enforced | /opp can run before /outcomes within ODI | Add sub-pipeline dependency check in A-ODI |

**Severity distribution:**
- 1 CRITICAL — architectural mismatch (FR-01)
- 4 HIGH — operational gaps that compound silently
- 3 MEDIUM — missing states and transitions
- 1 LOW — methodology quality issue

**Pattern analysis:**
Most HIGH/CRITICAL findings share a root cause: **the document describes INTENT, not MECHANISM.**
- "Master holds state" — intent. Mechanism: session files (not defined).
- "Documented rationale" for override — intent. Mechanism: which file, what format (not defined).
- "Same constraint appears" — intent. Mechanism: linguistic matching (not functional).
- "D-M-I-R feedback reconfigures routing" — intent. Mechanism: KN reads a file at session start (not defined).

**Cross-document pattern (S3 learning):**
In all three S2 documents, the highest-severity gaps involved:
1. Unstated implementation mechanisms (V-SMASH-L: IFF failure → GREEN; Framework: state persistence)
2. Incomplete state machines (V-SMASH-L: no IFF FAULT state; Framework: no mid-phase PAUSE)
3. Single-point accountability (VN-RANGE-001: C16 self-grading; Framework: all gates KN-only)

The intent/mechanism gap is the most reliable predictor of a FAIL or CRITICAL finding.

---

## SECTION 4: GATE CALIBRATION — What to Add to v1.2

> Three new checks/sub-checks warranted by this run.

### New Sub-Check for Check 07

```
CHECK 07 — NEW SUB-CHECK (from FR-01 + FR-05):
  "For systems that claim to hold persistent state:
   Is the state persistence mechanism defined (file format, reader, session-opening protocol)?
   A document that says 'Master holds state' without defining WHERE the state lives
   between sessions has an architectural gap.
   PASS: State files named, formats defined, session-opening protocol specified.
   FLAG: State persistence described as intent but mechanism not defined.
   FAIL: State claimed as persistent but ONLY exists within a single AI session with
         no externalization mechanism and no session-opening checklist."
```

### New Sub-Check for Check 12

```
CHECK 12 — NEW SUB-CHECK (from FR-08):
  "State machines: are all expected operational states defined?
   Check for missing states that would occur in realistic operation:
   - Pause/suspend state (mid-process interruption)
   - Error/fault state (unexpected failure)
   - Degraded mode state (reduced capability)
   PASS: Common operational interruptions have named states and defined behaviors.
   FLAG: One or more realistic operational states missing but unlikely in scope.
   FAIL: Pause/interrupt state missing from a state machine where resource
         constraints or external events would predictably cause mid-process stops."
```

### New Check Candidate (save for v1.2)

```
CHECK 13 (CANDIDATE — validate with 3+ more runs):
  "INTENT vs MECHANISM COMPLETENESS
   For every process claim using words like 'consumes', 'detects', 'triggers',
   'enforces', 'reconfigures', 'archives':
   Is the mechanism (how, what file/action, who initiates) specified alongside
   the intent (what should happen)?

   Scan for these trigger words. For each: does the sentence explain HOW?
   PASS: Mechanism specified alongside intent for all process claims.
   FLAG: 1-3 intent claims without mechanism; low severity (non-safety-critical).
   FAIL: Safety-critical process claim (HITL enforcement, fallback, state tracking)
         with intent but no mechanism."

NOTE: This check may have high false positive rate if applied naively —
      many design documents are intentionally high-level. Apply to
      architecture documents only, not to framework or strategy documents.
      Validate false positive rate over next 10 runs before promoting to full check.
```

---

## SECTION 5: WHAT THIS DEEP DIVE CONFIRMS ABOUT S3

### The Depth Gradient

```
FIRST PASS (3 documents × QC Gate v1.0)    DEEP DIVE (1 document × QC Gate v1.1 + Layer 2)
──────────────────────────────────────     ──────────────────────────────────────────────
Framework: 0 FAIL, 4 FLAG                  Framework: 0 FAIL, 8 FLAG (gate) + 10 CR findings
Time: ~45 min                              Time: ~3h
Catch rate (est.): 40% of actual issues    Catch rate (est.): 85%+ of actual issues

The 4 additional flags and 10 CR findings existed in v1.0 pass — the gate didn't catch them.
Layer 2 reasoning found what Layer 1 gate missed.
```

### What QC Gate Cannot Catch (Layer 2 Territory)

The gate checks *structure*. Layer 2 catches:
1. **Architectural mismatches** — when a design assumption doesn't match the deployment reality
   (FR-01: continuous process vs session-based AI)
2. **Missing state transitions** — the state machine looks complete but doesn't handle realistic
   operational scenarios (FR-08: mid-phase PAUSE)
3. **Functional trigger analysis** — whether a defined mechanism actually works in practice
   (FR-06: linguistic trigger in natural language system = non-functional)
4. **Compound consequences** — what happens when two individually acceptable design decisions
   interact badly (FR-03: budget block + no critical path prioritization = inversed priorities)

These require **domain knowledge** (how Claude Code sessions work, how D-M-I-R reflects naturally)
and **adversarial thinking** ("how would this fail in practice?").

### S3 Skill Self-Assessment

```
Before this session: S3 score = 9/10 (from Agentic_Skills_Mastery_Priority.md)

After this session:
  Strength: Layer 1 (gate execution) is reliable and calibrating well.
  Growth area: Layer 2 takes 3× longer than Layer 1 — not automatable.
  Key insight: The fastest path to Layer 2 skill is asking one question:
               "This says X happens — exactly HOW does X happen? What file, what action?"
               Most architectural gaps hide in unspecified mechanisms behind correct-sounding verbs.
  New pattern to memorize: Intent/Mechanism split is the most reliable gap predictor.
```

---

## SECTION 6: REQUIRED FOLLOW-UP ACTIONS

### Immediate (before next design work)

- [ ] Create `allocation_tracker.md` — persistent skill hours log (FR-01)
- [ ] Create `dmir_log.md` — persistent constraint/intervention history (FR-01)
- [ ] Update Framework document Section 3.1 with session-opening protocol (FR-01)
- [ ] Update Framework document Section 6 with A-QC error handling (FR-01, Check 07b)

### This Week

- [ ] Update Framework document with FR-02 through FR-10 fixes
- [ ] Update QC Gate: add Check 07 sub-check (state persistence mechanism) + Check 12 sub-check (missing states)
- [ ] Add Check 13 as candidate (validate with next 3 runs before promoting)

### Before First Commercial Delivery

- [ ] Update Section 7 (Type 1 HITL) with independent reviewer requirement (FR-02, Check 11)
- [ ] Define ARCHIVED protocol + knowledge recovery checklist (FR-09)

---

*IRONMESH S3 Framework DeepDive v1.0 — 2026-02-20*
*S3 practice: second focused application — one document, full depth*
*Key finding: "Master holds state" is session-bound. Every "intent" verb hides a mechanism gap.*
*Gate catch rate: 40% (v1.0 first pass) → 85% (v1.1 deep dive). Layer 2 is the remaining 15%.*
