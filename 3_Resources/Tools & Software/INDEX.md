---
type: prompt-library-index
version: 8.5
created: 2026-02-20
updated: 2026-03-04
total_prompts: 70
total_files: 11
---

# Prompt Library — Master Index

> **S1 AI Literacy** × Pahl & Beitz Engineering Design Framework + ODI + Systems Thinking + D-M-I-R
> All prompts use standardized structure — see Field Schema v3.0 below (6 required + 2 recommended + 7 optional).

---

## FIELD SCHEMA (v3.0 — Workshop X Enhanced)

> **v3.0 changelog:** 5 structural lessons from Workshop X delegation pattern.
> Backward compatible — v2.0 prompts still valid, upgrade incrementally.

```
REQUIRED FIELDS (6):
  TASK:            Specific action verb + specific object. NOT vague.
  CONTEXT:         Domain parameters — product, phase, inputs, environment, standards
  CONSTRAINTS:     3 explicit sub-types (v3.0 — Workshop X Lesson 1):
    hard_limits:         Numeric thresholds, ranges, maximums
    reject_conditions:   When to abort/refuse the task entirely []
    prohibited_actions:  What AI must NEVER do during execution []
  TOOLS_ALLOWED:   Explicit whitelist — only listed tools may be used
  HITL_CHECKPOINT: Trigger matrix (v3.0 — Workshop X Lesson 2):
    format: { condition: true/false/"IMMEDIATE" }
    Must reason about operator fatigue (when NOT to trigger)
    "IMMEDIATE" = drop everything, alert — for safety flags
  SAFETY_OVERRIDE: Critical stop condition — always flag, never override

RECOMMENDED FIELDS (2 — new in v3.0):
  SUCCESS_CRITERIA:   Quantified output quality metrics (Workshop X Lesson 3)
    format: { metric_name: "operator value" }
    Defines "good output" — separate from CONSTRAINTS ("not-rejected")
    Example: { detection_rate: ">= 0.95", consistency: "±1 per volley" }
  FALLBACK_PROTOCOL:  Per-failure-mode response mapping (Workshop X Lesson 4)
    format: { failure_mode: "specific_response" }
    MUST include: unknown_error → SAFE_STATE action (catch-all)
    Replaces single-string FALLBACK from v2.0

OPTIONAL FIELDS (use when needed):
  OUTPUT_FORMAT:    table / markdown / JSON / report
  ITERATION_MAX:    Max retry cycles before escalating to human
  UNCERTAINTY_FLAG: true = tag every unverified value as [ASSUMPTION]
  EVIDENCE_REQUIRED:true = cite source for every factual claim
  TIMEOUT:          Per-task timeout in seconds (Workshop X Lesson 5)
  VERSION:          Software/prompt version for traceability
  LOG_LEVEL:        minimal / standard / detailed (audit trail depth)
```

---

## DCTRS DELEGATION FRAMEWORK

> **Origin:** Workshop X Delegation Pattern Library. Every delegation MUST have all 5 components.
> DCTRS maps directly to v3.0 schema fields — use this as a mental checklist before any delegation.

```
D — DELEGATE    → TASK + CONTEXT
    What to do + all domain parameters needed to do it correctly.
    "Score bullet impacts on target #3" not "handle the data."

C — CONSTRAIN   → CONSTRAINTS (hard_limits + reject_conditions + prohibited_actions) + TOOLS_ALLOWED
    Numeric limits + when to abort + what's forbidden + only whitelisted tools.
    Constraints PREVENT bad output. Without them, AI improvises.

T — TEST        → SUCCESS_CRITERIA
    Quantified metrics that define "good output" — separate from "not-rejected."
    "Detection rate >= 0.95" not just "make it work."

R — REVIEW      → HITL_CHECKPOINT + SAFETY_OVERRIDE
    When human reviews + what stops everything.
    Reason about operator fatigue — when NOT to trigger is as important as when to trigger.

S — SPECIFY     → FALLBACK_PROTOCOL + TIMEOUT + VERSION + LOG_LEVEL
    What happens when things fail. Every failure mode → specific response.
    MUST include: unknown_error → SAFE_STATE. Never fail silently.
```

### When NOT to Delegate (do yourself)

| Task Type | Why | AI Role |
|-----------|-----|---------|
| Architectural decisions | AI misses operational context | Generate options, YOU choose |
| Safety-critical validation | AI cannot be accountable | AI pre-checks, YOU validate |
| Vietnamese military context | Zero AI training data | YOU provide data, AI formats |
| Hardware debugging | AI has no physical sensors | AI suggests approaches, YOU debug |
| Cross-boundary integration | AI cannot see the whole system | AI handles pieces, YOU integrate |
| Procurement negotiation | Relationship, trust, face-saving | AI prepares briefs, YOU negotiate |

---

## LIBRARY FILES

| File | Phase | Prompts | When to Load |
|------|-------|---------|--------------|
| `S1_prompt_library.md` | Cross-cutting | P01–P08, P44–P47, P49 (13) | Defense AI tasks, QC, code gen/review, governance, edge delegation — **schema v3.0** |
| `Phase0_ODI.md` | Phase 0a — ODI | P28–P32 (5) | Customer discovery before any design — **schema v3.0** |
| `Phase0_Product_Planning.md` | Phase 0b — Planning | P09–P11, P56, P63 (5) | Starting new product or major upgrade + Phase 0 gate + TNKCT — **schema v3.0** |
| `Phase1_Task_Clarification.md` | Phase 1 | P12–P15, P51 (5) | Requirements, standards mapping, and gate review — **schema v3.0** |
| `Phase2_Conceptual_Design.md` | Phase 2 | P16–P21, P50, P52–P53 (9) | Function structures, working principles, morpho, VDI 2225, reuse, gate — **schema v3.0** |
| `Phase3_Embodiment_Design.md` | Phase 3 | P22–P27, P54–P55 (8) | Layout, tolerance, DfX, optimization, FMEA, Gate 3 — **schema v3.0** |
| `Phase4_Detail_Design.md` | Phase 4 | P33–P35, P57 (4) | BOM, verification plan, cost analysis, gate/close — **schema v3.0** |
| `Phase5_ANQP_Vietnam.md` | Phase 0-7 — ANQP | P58–P61, P64–P67 (8 templates, 26 artifacts) | Vietnamese military acceptance: pre-entry → testing → nghiệm thu → series "0" — **schema v3.0** |
| `ANQP_B3_Process_Plan.md` | ANQP B3 deep-dive | P62 (1 template + S1-S5 framework) | Manufacturing process plan: orchestration, QC gate, automation, governance — **schema v3.0** |
| `Software_SDLC.md` | SW Sub-Projects | P68–P70 (3) | Software audit, decomposition, proposal, QC batch — parallel to P&B hardware — **schema v3.0** |
| `CrossCutting_Systems_DMIR.md` | Cross-cutting | P36–P43, P48 (9) | D-M-I-R reflection, systems thinking, strategic review — **schema v3.0** |

---

## FULL PROMPT INDEX

### S1 — AI Literacy (Cross-Phase)

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P01 | Structured Defense Task Delegation | — | Master template for any Claude task |
| P02 | Defense AI QC Review Gate | — | QC check before accepting AI output |
| P03 | Engineering Document Generation | — | Requirements, specs, BOMs |
| P04 | TCVN Compliance Check | — | Standards audit |
| P05 | Physics Plausibility Check | — | Ballistics, acoustics, optics |
| P06 | Context Window Scoping | — | Before long multi-step tasks |
| P07 | Sensor Fusion Design Review | — | IRONMESH subsystem integration |
| P08 | Procurement Narrative Draft | — | Military-facing communications |
| P44 | Runtime Edge AI Delegation | — | Delegate inference task to edge AI (VN-CAM, VN-LOMAH) — Workshop X pattern |
| P45 | Boilerplate Code Generation | — | Routine code modules — config, data models, drivers, API scaffolds |
| P46 | Algorithm Implementation | — | Known algorithm from paper/spec — TDOA, Kalman, image pipeline |
| P47 | PLAUSIBLE Code Review Protocol | — | 9-check defense-grade code review before integration |
| P49 | Governance Document Generation | — | System limitations, accountability chains, audit trail specs |

### Phase 0a — ODI (Outcome-Driven Innovation)

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P28 | Full ODI Process | `/odi` | Complete customer discovery in one session |
| P29 | Jobs-to-be-Done Analysis | `/jobs` | Identify core functional job |
| P30 | Desired Outcome Mapping | `/outcomes` | DIM outcomes per job step |
| P31 | Opportunity Score Calculation | `/opp` | Prioritize outcomes (score ≥10 = underserved) |
| P32 | Customer Segmentation | `/seg` | Find target segment by unmet needs |

### Phase 0b — Product Planning

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P09 | Product Situation Analysis | — | Strategic landscape before designing |
| P10 | Product Idea Generation | — | Systematic ideation (3-dimension matrix) |
| P11 | Product Proposal Compilation | — | Formalizing product direction |
| P56 | Phase 0 Gate Review | `/gate0` | Formal gate before Phase 1 |
| P63 | Bản Tính năng Kỹ chiến thuật | `/tnkct` | Vietnamese military council tactical-technical performance spec |

### Phase 1 — Task Clarification

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P12 | Stakeholder Analysis | — | Map all stakeholders and conflicts |
| P13 | Requirements List Generation | — | 16-category requirements + A/I/T/D verify |
| P14 | D/W Classification & Quantification Audit | — | Quality check — ≥80% quantified |
| P51 | Standards Compliance Mapping | `/mil`, `/std` | Map requirements to MIL-STD + TCVN |
| P15 | Phase 1 Gate Review | `/gate` | Formal gate to Phase 2 |

### Phase 2 — Conceptual Design

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P16 | Problem Abstraction | `/abs` | Remove solution bias |
| P17 | Function Structure Generation | `/fn` | Black-box → sub-functions |
| P52 | Working Principles Search | `/wp` | Systematic search for solution principles per sub-function |
| P18 | Morphological Matrix | `/morpho` | Systematic concept generation |
| P19 | Concept Sketch Review | — | Pre-evaluation quality check |
| P20 | Selection Chart (Binary Elimination) | `/vs` | Eliminate unviable concepts |
| P21 | VDI 2225 Evaluation | `/eval` | Score and select best concept (Rt ≥0.70) |
| P50 | Component Reuse Analysis | — | Cross-product reuse before embodiment locks choices |
| P53 | Phase 2 Gate Review | `/gate2` | Formal gate to Phase 3 |

### Phase 3 — Embodiment Design

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P22 | Embodiment Task Clarification | — | Interface inventory, design sequence |
| P23 | Layout Design Review | `/layout` | 6 Pahl & Beitz principles check |
| P24 | Material Selection | `/mat` | Systematic material decision + local content |
| P54 | Tolerance Stack-up Analysis | `/tol` | Critical dimension chains — worst-case + RSS |
| P25 | DfX Analysis (12 categories) | `/dfx` | Lifecycle quality check |
| P55 | Design Optimization Review | `/opt` | Weight, cost, part count optimization pass |
| P26 | FMEA | — | Failure mode identification and mitigation |
| P27 | Phase 3 Gate Review | `/gate` | Formal gate to Phase 4 |

### Phase 4 — Detail Design

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P33 | Bill of Materials Generation | `/bom` | Structured BOM from embodiment layout |
| P34 | Verification Plan | `/verify` | Map every MUST requirement to A/I/T/D method |
| P35 | Cost Analysis | `/cost` | Bottom-up unit cost + LCC estimate |
| P57 | Phase 4 Gate Review & Project Close | `/close` | Formal gate to production + project archive |

### Phase 0-7 — Vietnamese Military Acceptance (ANQP) — 25 Artifacts

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P58 | Yêu cầu Kỹ thuật — YCKT (B1) | `/yckt` | Convert Phase 1 requirements to Vietnamese military format |
| P59 | Field Trial Protocol (C2) | `/fieldtrial` | Plan Thử nghiệm Thực địa for military acceptance |
| P60 | Acceptance Dossier (C7) | `/nghiemthu` | Compile Hồ sơ Nghiệm thu for state-level acceptance |
| P61 | AI Safety Assessment (C16) | `/aisafety` | Document AI behavior, limits, failure modes for S&T Council |
| P62 | Manufacturing Process Plan (B3) | `/qtcn` | S1-S5 integrated process plan with 4-agent orchestration — see ANQP_B3_Process_Plan.md |
| P64 | Danh mục Bản vẽ Thiết kế (B2) | `/banve` | Drawing package checklist with T/I/A/B stage checklists |
| P65 | Hướng dẫn Sử dụng (B4) | `/hdsd` | Bilingual user manual for military operators |
| P66 | Hướng dẫn Bảo trì (B5) | `/hdbt` | Bilingual maintenance manual (L2/L3) with FMEA cross-ref |
| P67 | Định mức KTKT (B6) | `/dmktkt` | Technical-economic norms for procurement pricing |
| — | + 17 artifact specs (A1-A4, C1, C3-C6, C8-C15) | — | See Phase5_ANQP_Vietnam.md for full pipeline |

### Software Sub-Project Lifecycle (SW-SDLC)

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P68 | Software Audit & Decomposition | `/sw-audit` | After Phase 3/4 — find hidden software, decompose into sub-projects |
| P69 | Software Sub-Project Proposal | `/sw-proposal` | Create SW-Phase 0 proposal per identified sub-project |
| P70 | Software QC Gate Batch | `/sw-qc` | Run QC Gate on all SW proposals — systemic gap analysis |

### Cross-Cutting — Systems Thinking + D-M-I-R

| ID | Prompt | Slash Command | Use Case |
|----|--------|---------------|----------|
| P36 | D-M-I-R Weekly Reflection | `/reflect` | Weekly learning synthesis |
| P37 | Competency Self-Assessment | `/mastery` | Skill level measurement with evidence |
| P38 | Lessons Learned Capture | `/lessons` | Pattern extraction from project events |
| P39 | Leverage Point Analysis | `/leverage` | Find highest-impact system intervention |
| P40 | Session Quick Log | `/log` | End-of-session capture (5 min) |
| P41 | Causal Loop Diagram | `/cld` | System structure mapping |
| P42 | Feedback Loop Analysis | `/loops` | Identify R/B loops driving behavior |
| P43 | System Archetype Detection | `/archetype` | Recognize recurring system patterns |
| P48 | Weekly Strategic Review | `/review` | Portfolio health, R2 loop status, constraint compliance |

---

## DESIGN WORKFLOW → PROMPT MAPPING

```
CUSTOMER DISCOVERY (Phase 0a — ODI)
    │
    ▼
P28 Full ODI Process
    ├── P29 Jobs-to-be-Done (/jobs)
    ├── P30 Desired Outcomes (/outcomes)
    ├── P31 Opportunity Scores (/opp) → score ≥10 = underserved → MUST requirement
    └── P32 Customer Segmentation (/seg) → select primary target
    │
    ▼ ODI Handoff: UNDERSERVED outcomes → P13 MUST reqs | SERVED → WISH reqs
    │
PRODUCT PLANNING (Phase 0b)
    │
    ▼
P09 Situation Analysis
P10 Idea Generation (3-dimension matrix)
P11 Product Proposal
P63 Bản TNKCT (/tnkct) — Vietnamese military council format (optional, before/after gate)
P56 Phase 0 Gate Review (/gate0) (score ≥3.0/4.0)
    │
    ▼ Phase 0 Gate ✅
    │
TASK CLARIFICATION (Phase 1)
    │
    ▼
P12 Stakeholder Analysis
P13 Requirements List (16 categories + A/I/T/D verify column)
P14 D/W Audit (≥80% quantified)
P51 Standards Compliance Mapping (/mil)      ← NEW — MIL-STD + TCVN mapping
P15 Phase 1 Gate (score ≥3.5/4.0)
    │
    ▼ Phase 1 Gate ✅
    │
CONCEPTUAL DESIGN (Phase 2)
    │
    ▼
P16 Problem Abstraction
P17 Function Structure
P52 Working Principles Search (/wp) — systematic search for physical effects
P18 Morphological Matrix
P19 Concept Sketch Review
P20 Selection Chart (elimination)
P21 VDI 2225 (final selection, Rt ≥0.70)
P50 Component Reuse Analysis (cross-product, before embodiment locks choices)
P53 Phase 2 Gate Review (/gate2) (score ≥3.5/4.0)
    │
    ▼ Phase 2 Gate ✅
    │
EMBODIMENT DESIGN (Phase 3)
    │
    ▼
P22 Embodiment Task Clarification
P23 Layout Design Review (6 principles)
P24 Material Selection (per component)
P54 Tolerance Stack-up Analysis (/tol)       ← NEW — critical dimension chains
P25 DfX Analysis (12 categories, avg ≥3)
P55 Design Optimization Review (/opt) — weight/cost/parts/performance
P26 FMEA (all RPN ≥100 mitigated)
P27 Phase 3 Gate (score ≥3.0/4.0)
    │
    ▼ Phase 3 Gate ✅
    │
DETAIL DESIGN (Phase 4)
    │
    ▼
P33 BOM Generation (/bom) — part numbers locked after approval
P34 Verification Plan (/verify) — every MUST req → A/I/T/D method
P35 Cost Analysis (/cost) — unit cost ≤70% import equivalent
P57 Phase 4 Gate Review & Project Close      ← formal gate + /close
    │
    ├──────────────────────────────────────────────────────┐
    │                                                      │
    ▼ Phase 4 Gate → PRODUCTION ✅                         ▼
    │                                          SOFTWARE SUB-PROJECTS (parallel)
VIETNAMESE MILITARY ACCEPTANCE                      │
(ANQP — 25 artifacts across Phase 0-7)             ▼
    │                                          P68 /sw-audit — scan Phase 0→4 for hidden SW
    │                                          P69 /sw-proposal (×N) — one per sub-project
    │                                          P70 /sw-qc — batch QC + systemic gap analysis
    │                                              │
    │                                              ▼ SW-Phase 1→5 (SRS → Qualify)
    │                                              │  Foundation layer (FW) defines APIs first
    │                                              │  Synchronize at HW-SW integration test
    │                                              │
    └──────────────────────┬───────────────────────┘
                           │
                           ▼ HW + SW + ANQP converge at production gate
                           │
VIETNAMESE MILITARY ACCEPTANCE (ANQP — 25 artifacts across Phase 0-7)
    │
    ▼
ANQP Phase 0 — Pre-Entry: A1-A4 (Legal, QMS, Security, Contract)
    │
    ▼ Company authorized ✅
    │
ANQP Phase 1-4 ∥ — Parallel Vietnamese docs: B1-B6
    P58 B1 YCKT (/yckt) — bilingual requirements for military co-signature
    P64 B2 Danh mục Bản vẽ (/banve) — drawing package checklist + T/I/A/B checklists
    P62 B3 Quy trình CNSX (/qtcn) — manufacturing process plan (S1-S5 integrated)
    P65 B4 Hướng dẫn Sử dụng (/hdsd) — bilingual user manual
    P66 B5 Hướng dẫn Bảo trì (/hdbt) — bilingual maintenance manual (L2/L3)
    P67 B6 Định mức KTKT (/dmktkt) — technical-economic norms for procurement
    │
    ▼ Phase 4 Gate ✅
    │
ANQP Phase 5 — Testing: C1-C6, C16
    P59 C2 Field Trial Protocol (/fieldtrial) — Thử nghiệm Thực địa plan
    P61 C16 AI Safety Assessment (/aisafety) — AI documentation [conditional]
    C1/C3-C6: Factory results, field results, test minutes, env test, reliability
    │
    ▼ Tests complete ✅
    │
ANQP Phase 6 — Acceptance: C7-C10
    P60 C7 Acceptance Dossier (/nghiemthu) — Hồ sơ Nghiệm thu
    C8-C10: S&T Council review, certificate, state decision
    │
    ▼ Nghiệm thu (State Acceptance) ✅
    │
ANQP Phase 7 — Series "0": C11-C15
    C11-C14: Production plan, QA plan, test protocol, evaluation
    C15: Batch Production Authorization
    │
    ▼ Full-scale manufacturing ✅
    │
THROUGHOUT ALL PHASES (Cross-cutting)
    ├── P01-P08, P44 AI Literacy tools (QC, documents, standards, edge delegation)
    ├── P45-P47 Software development (boilerplate, algorithm, PLAUSIBLE code review)
    ├── P68-P70 SW sub-project lifecycle (audit, propose, QC batch) — after Phase 3/4
    ├── P49 Governance document generation (deployment gate)
    ├── P36 /reflect — weekly D-M-I-R
    ├── P37 /mastery — competency check
    ├── P38 /lessons — pattern capture
    ├── P39 /leverage — system intervention
    ├── P40 /log — end-of-session
    ├── P41 /cld — causal loop diagram
    ├── P42 /loops — feedback analysis
    ├── P43 /archetype — system pattern recognition
    └── P48 /review — weekly strategic review (portfolio + R2 loop + constraints)
```

---

## HITL CHECKPOINT SUMMARY

```
NEVER AUTOMATE these decisions:
  ✗ Gate approvals — P56 (Phase 0), P15 (Phase 1), P53 (Phase 2), P27 (Phase 3), P57 (Phase 4→close)
  ✗ Concept selection (P21 outcome)
  ✗ ODI strategic direction (P28/P31 — top opportunities → strategy)
  ✗ Target segment selection (P32)
  ✗ Safety-critical requirement classification
  ✗ FMEA S≥8 items (severe consequence failures)
  ✗ Material selection for safety-critical components
  ✗ BOM part number assignment (P33 — locked after approval)
  ✗ Verification plan approval (P34)
  ✗ Cost data sharing with external parties (P35)
  ✗ Production release decision (P57 — commits manufacturing resources)
  ✗ Procurement narratives (any military-facing document)
  ✗ YCKT co-signature (P58 — legally binding with military customer)
  ✗ Field trial execution decisions (P59 — safety-critical, live environment)
  ✗ Acceptance dossier submission (P60 — commits to state review)
  ✗ AI safety assessment approval (P61 — defines trust contract with military)
  ✗ Scoring standard modification (P44 — never let AI change rules)
  ✗ Safety flag override (P44 — never let AI bypass safety)
  ✗ Direct communication to shooter/operator (P44 — never let AI talk to end user)

AUTOMATE with review:
  ✓ Requirements list drafting (P13) → review D/W, quantification, A/I/T/D
  ✓ Standards compliance mapping (P51) → verify TCVN numbers (AI hallucinates these)
  ✓ Working principles search (P52) → validate TRL and local content feasibility
  ✓ Morphological matrix generation (P18) → select concept paths
  ✓ Tolerance stack-up analysis (P54) → confirm critical chains and process capability
  ✓ Design optimization proposals (P55) → approve trade-offs before implementation
  ✓ DfX scoring (P25) → confirm scores and priority actions
  ✓ FMEA table population (P26) → review S≥8 items
  ✓ BOM table generation (P33) → confirm structure before part number lock
  ✓ Opportunity score calculation (P31) → validate I and S scores
  ✓ Document generation (P03) → review before any external use
  ✓ Edge inference scoring (P44) → per-shot auto, end-of-exercise human review
  ✓ Boilerplate code generation (P45) → automated lint/type check, skim review
  ✓ Algorithm implementation (P46) → PLAUSIBLE review (P47) before integration
  ✓ Component reuse analysis (P50) → validate physical/environmental compatibility
  ✓ SW audit & decomposition (P68) → approve sub-project split before proposals
  ✓ SW sub-project proposals (P69) → review each before QC gate
  ✓ SW QC gate batch (P70) → review systemic gaps, decide proceed/fix/deep-dive
  ✓ Weekly strategic review (P48) → KN reviews and adjusts next week's focus

HITL TRIGGER MATRIX (v3.0 — Workshop X):
  per_output: false (default) — prevent operator fatigue on high-volume tasks
  on_conflict: true — when multiple sources/sensors disagree
  on_low_confidence: true — below confidence_floor threshold
  on_completion: true — summary review before final acceptance
  on_safety_flag: "IMMEDIATE" — drop everything, alert responsible officer
  Reason about WHEN NOT to trigger — over-triggering degrades human attention

SAFETY-CRITICAL RULES (override all automation):
  [SAFETY-CRITICAL]: Never reclassify to W. Verification must be T or D, never A alone.
  [HITL-MANDATORY]: Cannot be automated. Tag = human decision required.
  [EXPORT-REVIEW]: Dual-use/controlled items. No part numbers assigned without clearance.
  [ETHICAL-REVIEW-REQUIRED]: Autonomous weapons use. Stop — do not proceed.
  [SAFE-STATE]: On unknown error → freeze outputs, alert operator. Never fail silently.
```

---

## DELEGATION ANTI-PATTERNS (from Workshop X)

> Before delegating, ask: **"Is this ROUTINE or AMBIGUOUS?"** Routine → use template. Ambiguous → do yourself, use AI for sub-questions only.

```
ANTI-PATTERN 1: "Handle it" Delegation
  ✗ "Generate the VN-LOMAH scoring module"
  ✓ Use P46 with full CONTEXT, CONSTRAINTS, and HITL gate
  Why: No context = AI produces code that compiles but doesn't work at range

ANTI-PATTERN 2: Delegating Ambiguous Work
  ✗ "Debug why VN-CAM drops to 12fps after 45 minutes"
  ✓ DO the debugging yourself. Use AI for specific sub-questions only.
  Why: Hardware debugging requires physical sensors AI doesn't have

ANTI-PATTERN 3: Trusting AI on Vietnamese Military Context
  ✗ "Draft TCVN compliance matrix for VN-RANGE-001"
  ✓ YOU provide the TCVN standards list. AI fills in the matrix format.
  Why: AI will hallucinate TCVN numbers that don't exist

ANTI-PATTERN 4: Skipping Review on "Simple" Output
  ✗ AI generates config file → "Looks simple, ship it"
  ✓ EVERY output gets minimum review — even 2-min scan
  Why: "Simple" is where complacency creates security vulnerabilities

ANTI-PATTERN 5: Using AI to Avoid Difficult Decisions
  ✗ "Which product should we prioritize next?"
  ✓ Use P39 for ANALYSIS. Make the DECISION yourself.
  Why: AI cannot weight military relationships, procurement timing, or energy/motivation
```

---

## VERIFICATION METHODS QUICK REFERENCE

```
A = Analysis     Calculation, FEA, simulation       Lowest cost  Physics-based requirements
I = Inspection   Dimensional, visual, measurement   Low cost     Geometry, workmanship
T = Test         Functional, environmental          Highest cost Performance, MIL-STD-810H
D = Demonstration Operational use in environment   Medium cost  Ergonomic, usability

Rule: A/I before T/D (sequence logic — don't test what can be calculated)
Rule: Safety-critical → MUST be T or D (A alone insufficient)
MIL-STD-810H: always specify Method number for environmental tests (e.g., Method 514.8)
```

---

## MAINTENANCE RULES

- **Add:** After any session where a new prompt worked — add to appropriate file
- **Update:** After 3+ uses of any prompt — add "Learned variations" to entry
- **Delete:** Any prompt unused for 30 days → mark `<!-- REVIEW: last used {{date}} -->`
- **Version bump:** After ≥3 prompt changes in any file → increment version in frontmatter

*Last updated: 2026-03-04 | Total prompts: 70 (9 DCTRS + 17 artifact specs in ANQP) | Total files: 11 | Schema v3.0 + DCTRS framework | INDEX v8.5 — **70/70 prompts now v3.0 compliant** — ALL files upgraded: Phase 0a/0b, Phase 1, Phase 2, Phase 3, Phase 4, S1, CrossCutting, Phase5 ANQP, ANQP_B3, Software SDLC | Schema upgrade project COMPLETE*
