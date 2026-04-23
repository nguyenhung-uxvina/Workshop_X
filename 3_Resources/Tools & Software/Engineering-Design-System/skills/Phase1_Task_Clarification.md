---
skill: S1 — AI Literacy × Engineering Design
phase: 1 — Task Clarification
framework: Pahl & Beitz Sections 5.1–5.4
slash_commands: /req · /check · /mil · /std · /stake · /gate
type: prompt-library
version: 4.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v3.0 — P51 added (Standards Compliance Mapping)
  v4.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to all 5 prompts (2026-03-04)
---

# Phase 1 — Task Clarification Prompts

> **Goal:** Vague product idea → complete, quantified requirements list.
> **Gate to Phase 2:** Score ≥3.5/4.0 · ≥80% quantified · all stakeholders agreed.

---

## PROMPT INDEX

| # | Name | Use When |
|---|------|----------|
| P12 | Stakeholder Analysis | Always first step of Phase 1 |
| P13 | Requirements List Generation | Main Phase 1 deliverable — 16 categories |
| P14 | D/W Classification & Quantification Audit | After first draft |
| P51 | Standards Compliance Mapping | After requirements — map to MIL-STD + TCVN |
| P15 | Phase 1 Gate Review | Before proceeding to Phase 2 |

---

### P12 — Stakeholder Analysis
**Use when:** Starting Phase 1 — map all stakeholders before writing any requirements
**Why it works:** Different stakeholders impose conflicting requirements. Map first, or you'll resolve conflicts wrong.

```
TASK: Conduct stakeholder analysis for {{product_name}} ({{VN-XXX-XXX}})
  Map all stakeholders, their interests, requirements, and conflicts.
  Return: stakeholder table + conflict log + information gap list.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 1 — Task Clarification
  inputs: Product Proposal from Phase 0 (P11 output)
  domain: Vietnamese defense — {{specific branch/unit if known}}

CONSTRAINTS:
  hard_limits:
    - Minimum 6 stakeholders (customer, end-user, maintainer, safety officer,
      regulator, Workshop X production)
    - Every conflict must have a documented resolution approach
    - Every information gap must have "who to ask" + "by when" action
    - Output: stakeholder table + conflict log + gap list, max 2 pages
  reject_conditions:
    - Product code/name not provided — cannot map stakeholders without product context
    - Phase 0 Product Proposal not available — run P09/P11 first
  prohibited_actions:
    - Do NOT skip safety officer stakeholder — always include for defense products
    - Do NOT resolve safety-conflict in favor of customer requirements — always elevate safety
    - Do NOT leave any conflict without resolution approach or decision authority assigned

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_stakeholder: false — map all stakeholders first, then single review
  on_conflict_log: true — present conflict log before proceeding; conflict resolution
    is a design decision requiring human judgment
  on_safety_conflict: "IMMEDIATE" — [SAFETY-CONFLICT] detected between safety officer
    and customer requirements; escalate before any resolution

SAFETY_OVERRIDE: "If safety officer requirements conflict with customer requirements —
  always elevate safety requirement. Flag [SAFETY-CONFLICT] and escalate before resolution."

SUCCESS_CRITERIA:
  stakeholder_count: "≥6 distinct stakeholders with non-duplicate interests"
  conflict_coverage: "100% of conflicts have resolution approach documented"
  gap_action_completeness: "every gap has specific person/role + deadline (not 'TBD')"
  safety_sources_identified: "all [SAFETY-CRITICAL] requirement sources flagged"

FALLBACK_PROTOCOL:
  unknown_regulatory_body: "Include Vietnamese MoD + applicable TCVN body as placeholder;
    flag as [VERIFY: confirm correct regulatory contact] in gap table"
  irresolvable_conflict: "Document as [ESCALATE-TO: decision authority]; do not resolve
    unilaterally; present to user with specific options"
  safety_conflict_detected: "IMMEDIATE — flag [SAFETY-CONFLICT]; present both requirements
    side by side; await explicit human resolution before proceeding"
  unknown_error: "SAFE_STATE — output partial stakeholder table; flag unanalyzed stakeholders;
    await direction"

OUTPUT_FORMAT: Markdown tables (stakeholder table + conflict table + gap table)

--- STAKEHOLDER MAPPING ---

For each stakeholder:
| Stakeholder | Role | Primary Interest | Key Requirements They'll Impose | Conflict Risk |

Stakeholders to address (add/remove as appropriate):
  1. Customer — who signs the procurement contract
  2. End User — soldier/operator who uses it daily
  3. Maintainer — who services and repairs it in field
  4. Transporter — who moves it to location
  5. Commander — who evaluates training outcomes
  6. Safety Officer — who approves for live-fire use
  7. Vietnamese regulatory body — TCVN, Ministry of Defence
  8. Workshop X production — what we can actually manufacture

CONFLICT ANALYSIS:
For each conflict pair:
  - Conflict: {{what the conflict is}}
  - Resolution approach: {{weighted objectives / hierarchy / design trade}}
  - Decision authority: {{who decides if unresolvable}}

INFORMATION GAPS:
  | Gap | Why needed | Who to ask | By when |
```

---

### P13 — Requirements List Generation (16 Categories)
**Use when:** After stakeholder analysis (P12) — main Phase 1 deliverable
**Why it works:** 16-category framework prevents blind spots. Every category generates at minimum 2 requirements.

```
TASK: Generate requirements list for {{product_name}} ({{VN-XXX-XXX}})
  Cover all 16 Pahl & Beitz categories. Minimum 2 requirements per category.
  Return: formatted requirements table, ready for D/W audit (P14).

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 1 — Task Clarification
  inputs:
    - Product Proposal (P11): {{reference}}
    - Stakeholder Analysis (P12): {{reference}}
    - Customer brief: {{paste key customer requirements}}
    - Applicable standards: {{TCVN_XX, MIL-STD-XXX — list all known}}

CONSTRAINTS:
  hard_limits:
    - Every requirement must have numeric value with units, or flag as [ESTIMATE: needs verification]
    - Minimum 2 requirements per category (16 categories = 32 minimum requirements total)
    - [SAFETY-CRITICAL] tag mandatory for all life-safety requirements
    - Forbidden terms: ["adequate", "sufficient", "good", "robust", "appropriate"]
  reject_conditions:
    - Phase 0 Product Proposal (P11) not provided — requirements cannot be generated without this
    - Stakeholder analysis (P12) not done — proceed but flag all stakeholder-derived rows as [ASSUMPTION]
  prohibited_actions:
    - Do NOT write any requirement using the forbidden qualitative terms list
    - Do NOT leave [SAFETY-CRITICAL] requirements without a T or D verification method
    - Do NOT downgrade a [SAFETY-CRITICAL] tag without explicit human instruction
    - Do NOT create requirements for features not traceable to customer brief or standards

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_requirement: false — too granular; causes review fatigue on 50-300 item lists
  on_draft_complete: true — present full draft; human reviews [ESTIMATE] and
    [SAFETY-CRITICAL] tags before D/W audit begins
  on_weapons_requirement: "IMMEDIATE" — requirement involves weapons, munitions, live-fire;
    auto-apply [SAFETY-CRITICAL] tag; human confirms classification before continuing

SAFETY_OVERRIDE: "For any requirement involving weapons, munitions, or live-fire operations —
  tag [SAFETY-CRITICAL] by default. Never downgrade without explicit instruction."

SUCCESS_CRITERIA:
  category_coverage: "all 16 categories present with ≥2 requirements each"
  quantification_rate: "≥80% of requirements have numeric values with units (before HITL review)"
  safety_tagging: "100% of life-safety requirements tagged [SAFETY-CRITICAL]"
  verification_coverage: "100% of requirements have A/I/T/D method assigned"
  source_coverage: "100% of requirements have source column populated"

FALLBACK_PROTOCOL:
  missing_stakeholder_data: "Generate from P11 + standards; mark all stakeholder-derived rows
    as [ASSUMPTION: verify with stakeholder]; proceed with explicit confidence caveat"
  category_under_specified: "Generate placeholder requirements for sparse categories; tag as
    [PLACEHOLDER: needs domain expert input]; present gap list to user"
  forbidden_term_found: "Rewrite requirement with quantified version; present original +
    rewrite to user; ask for confirmation that rewrite is acceptable"
  unknown_error: "SAFE_STATE — output partial requirements table; mark incomplete categories;
    await direction before completing"

UNCERTAINTY_FLAG: true — [ASSUMPTION: source needed] for all unverified numbers
EVIDENCE_REQUIRED: true — source column mandatory in output table
OUTPUT_FORMAT: Markdown table: | Req ID | Category | Requirement | Value/Limit | D/W | Verify | Source | Status |

--- 16 CATEGORIES — generate ≥2 requirements each ---

1. GEOMETRY — size (L×W×H max), weight limit, interface dimensions, storage volume
2. KINEMATICS — motion type, velocity/angular velocity, acceleration, range of motion
3. FORCES — static + dynamic loads (MIL-STD-810 refs), load direction, safety factor
4. ENERGY — power source, consumption limit, efficiency target, runtime
5. MATERIAL — prohibited materials, required properties, temperature range, VN availability
6. SIGNALS — input signals (sensors, controls), output (display, data, comms), protocols, latency
7. SAFETY — fail-safe requirements, interlocks, operator protection, HITL requirements
8. ERGONOMICS — operator training time, physical effort, cognitive load, environmental comfort
9. PRODUCTION — available local processes, tooling limits, batch size, inspection capability
10. QUALITY CONTROL — acceptance criteria, inspection methods, verification procedures, defect rate
11. ASSEMBLY — sequence constraints, field assembly requirements, tool requirements, disassembly time
12. TRANSPORT — vehicle compatibility, packaging, G-limits during transport, export control
13. OPERATION — environment (T/H/salt/dust), hours/day, operating modes, weather limits
14. MAINTENANCE — 3-level structure (operator/depot/factory), MTBF target, MTTR, spare parts
15. COSTS — unit cost target, development budget ceiling, lifecycle cost, local content ≥60%
16. SCHEDULES — gate milestones (G1/G2/G3/G4), first article date, regulatory approval, production ramp

--- VERIFICATION METHOD (Verify column) ---

A = Analysis: calculation, FEA, simulation — assign to physics-based requirements (stress, thermal, EM)
I = Inspection: dimensional, visual, measurement — assign to geometry, workmanship, documentation
T = Test: functional, performance, environmental (MIL-STD-810H method number) — assign to performance, environmental
D = Demonstration: operational use — assign to ergonomic, usability, operator task requirements
Rule: prefer A/I over T/D (lower cost). Safety-critical requirements MUST use T or D (never A alone).

--- MINIMUM REQUIREMENT COUNTS (by system complexity) ---

Simple component/accessory: 50–80 requirements total
Subsystem (sensor unit, control module): 100–150 requirements total
Full system (weapon system, UxV platform): 200–300+ requirements total
Flag if count falls below lower bound — indicates under-specification.
```

---

### P14 — D/W Classification & Quantification Audit
**Use when:** After requirements list draft (P13) — quality check before gate
**Why it works:** AI drafts miss D/W nuance and quantification gaps. This audit enforces the "Death if missing" test systematically.

```
TASK: Audit requirements list for {{product_name}} ({{VN-XXX-XXX}})
  Run 4 audit tasks: D/W check, quantification check, conflict check, coverage check.
  Return: revised table + audit summary with proceed/revise recommendation.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 1 — post-draft audit
  inputs: Requirements list from P13 (paste or reference)
  quantification_target: ≥80% of requirements have numeric values with units

CONSTRAINTS:
  hard_limits:
    - D/W test: "If requirement NOT met → product fails purpose? YES = D, NO = W"
    - Over-constraint check: "Could product still function without this D? YES → reclassify W"
    - Quantification target: ≥80% of requirements have numeric values with units
    - Any direct numerical contradiction = must resolve before gate
    - Category with <2 requirements → flag for expansion
  reject_conditions:
    - Requirements list not provided — cannot audit without input; run P13 first
    - Requirements list has <20 requirements — likely severely incomplete; flag before auditing
  prohibited_actions:
    - Do NOT reclassify [SAFETY-CRITICAL] requirements from D to W — ever
    - Do NOT reclassify W→D or D→W without presenting rationale to human for confirmation
    - Do NOT mark audit as PROCEED if unresolved conflicts exist
    - Do NOT propose quantified values for safety-critical requirements without source citation

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_reclassification: true — present rationale for every D→W or W→D change;
    human confirms before saving; reclassification is a design decision
  on_conflict_found: true — present conflicting requirements immediately; do not
    continue audit until conflict is acknowledged by human
  on_safety_downgrade_attempt: "IMMEDIATE" — attempt to reclassify [SAFETY-CRITICAL]
    from D to W; STOP; flag; await human direction

SAFETY_OVERRIDE: "Any requirement tagged [SAFETY-CRITICAL] must remain D. Do not
  reclassify safety requirements to W regardless of D/W test result."

SUCCESS_CRITERIA:
  audit_completeness: "all 4 audit tasks completed (D/W, quantification, conflict, coverage)"
  quantification_rate: "≥80% of requirements quantified after audit"
  conflict_resolution: "0 unresolved conflicts in final audit summary"
  safety_integrity: "0 [SAFETY-CRITICAL] requirements reclassified to W"
  coverage_completeness: "all 16 categories have ≥2 requirements after expansion"

FALLBACK_PROTOCOL:
  high_dw_disagreement: "Present every reclassification with explicit D/W test applied;
    allow user to override with documented reason"
  safety_reclassification_requested: "Present safety argument both ways; recommend maintaining
    D classification; escalate to safety officer if user insists on W"
  irresolvable_conflict: "Flag as [CONFLICT-UNRESOLVED]; document both requirements; present
    to human as blocking item for gate; do not proceed without resolution"
  unknown_error: "SAFE_STATE — output partial audit results; mark unaudited rows; await direction"

OUTPUT_FORMAT: 4 output tables + audit summary paragraph

--- AUDIT TASKS ---

AUDIT 1 — D/W CLASSIFICATION CHECK:
  For each W: apply "Death if missing" test → reclassify to D if yes
  For each D: apply "Could function without?" → consider reclassifying to W if yes
  Output: | Req ID | Current D/W | Test Result | Revised D/W | Reason |

AUDIT 2 — QUANTIFICATION CHECK:
  ✓ PASS: Specific numeric value with unit
  ⚠ PARTIAL: Direction but no number (e.g., "minimize weight")
  ✗ FAIL: Qualitative only (e.g., "user-friendly")
  For each PARTIAL/FAIL: propose quantified version + source or [ASSUMPTION]

AUDIT 3 — CONFLICT CHECK:
  Scan for: Req-A demands X > N but Req-B demands X < M where M < N
  Report: [Req ID A] conflicts with [Req ID B] — resolution needed

AUDIT 4 — COVERAGE CHECK:
  Which of 16 categories have <2 requirements?
  Flag: "Category {{X}} under-specified — suggest: {{specific addition}}"

AUDIT SUMMARY:
  Total requirements: N
  D: N_D ({{%}}) | W: N_W ({{%}})
  Quantified: N_Q/N_total ({{%}}) — Target: ≥80%
  Conflicts: N | Under-specified categories: {{list}}
  PROCEED if: ≥80% quantified AND 0 unresolved conflicts AND all 16 categories covered
```

---

### P51 — Standards Compliance Mapping (`/mil`, `/std`)
**Use when:** After requirements list draft (P13) and audit (P14) — map every requirement to applicable standards
**Why it works:** Defense products must comply with MIL-STD and TCVN. Mapping standards DURING Phase 1 prevents discovering compliance gaps in Phase 3/4 when redesign cost is 10×.

```
TASK: Map requirements for {{product_name}} ({{VN-XXX-XXX}}) to applicable defense standards
  For each applicable standard: identify relevant requirements, specify compliance approach,
  flag gaps where no requirement exists but standard demands one.
  Return: standards compliance matrix + gap list + verification approach per standard.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 1 — post-requirements audit
  inputs:
    - Requirements List (from P13/P14): {{reference}}
    - Known applicable standards: {{list all known — MIL-STD-810H, MIL-STD-461G, MIL-STD-882E, TCVN-XX}}
  operating_environment: {{land / naval / airborne / indoor range / outdoor range}}
  product_type: {{weapon system / sensor / training system / communications / UxV}}

CONSTRAINTS:
  hard_limits:
    - Minimum ≥3 applicable standards mapped (MIL-STD-810H almost always applies)
    - Every gap must have "add requirement" or "request waiver" recommendation
    - Every standard section must have A/I/T/D verification approach assigned
    - MIL-STD: cite specific method/procedure numbers (e.g., Method 514.8, not just "MIL-STD-810")
  reject_conditions:
    - Requirements list not provided — cannot map standards without requirements; run P13/P14 first
    - Product type undefined — cannot determine applicable standards without domain context
  prohibited_actions:
    - Do NOT cite TCVN numbers without [TCVN-VERIFY] tag if not confirmed from official source
    - Do NOT cite MIL-STD without edition number (use MIL-STD-810H not MIL-STD-810)
    - Do NOT omit MIL-STD-882E (System Safety) — always applicable for defense products

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_standard: false — map all standards first, then single gap review
  on_gap_list_complete: true — present standards compliance gaps; Phase 1 gaps are cheap to
    address; Phase 3/4 gaps cause redesign; await human acknowledgment
  on_safety_standard_missing: "IMMEDIATE" — MIL-STD-882E absent from applicable list;
    add and flag before proceeding with any other mapping

SAFETY_OVERRIDE: "MIL-STD-882E (System Safety) sections are always applicable for defense
  products. If not included in input standards list — add it. Safety standard mapping is not optional."

SUCCESS_CRITERIA:
  standards_count: "≥3 standards mapped with section-level detail"
  gap_coverage: "100% of gaps have 'add requirement' or 'request waiver' recommendation"
  verification_coverage: "100% of mapped standard sections have A/I/T/D method assigned"
  tcvn_honesty: "all TCVN references tagged [TCVN-VERIFY] unless from confirmed official source"
  safety_standard: "MIL-STD-882E included regardless of whether it was in the input list"

FALLBACK_PROTOCOL:
  unknown_applicable_standards: "Start with core 4 (810H, 461G, 882E, 1472H); flag product-specific
    gaps as [STANDARD-GAP: domain expert review needed]; do not generate fictional standards"
  tcvn_clause_unverifiable: "Tag as [TCVN-VERIFY: clause may not exist]; add to verification
    summary as 'requires official TCVN document review'"
  all_gaps_critical: "Flag as HIGH COMPLIANCE RISK in gap table; recommend Phase 1 extension
    to resolve before Phase 2 begins; present to human as potential gate blocker"
  unknown_error: "SAFE_STATE — output partial matrix; mark unmapped standard rows; await direction"

UNCERTAINTY_FLAG: true — tag any standard reference not verified against current edition as [EDITION-VERIFY]
EVIDENCE_REQUIRED: true — cite standard edition (e.g., MIL-STD-810H, not just MIL-STD-810)
OUTPUT_FORMAT: Standards compliance matrix + gap table + verification summary

--- STANDARDS MAPPING FRAMEWORK ---

STEP 1: IDENTIFY APPLICABLE STANDARDS (expand from input list)

  Core standards for Vietnamese defense products:
  | Standard | Full Title | Applies When |
  |----------|-----------|-------------|
  | MIL-STD-810H | Environmental Engineering | Almost always — temperature, humidity, shock, vibration |
  | MIL-STD-461G | EMC Requirements | Any product with electronics |
  | MIL-STD-882E | System Safety | Always for defense products |
  | MIL-STD-1472H | Human Engineering | Products with operator interface |
  | MIL-STD-1553 | Digital Data Bus | Products connecting to military data systems |
  | MIL-HDBK-217 | Reliability Prediction | Products with reliability (MTBF) requirements |
  | TCVN {{XX}} | Vietnamese National Standards | Product-specific — must verify clause exists |

STEP 2: MAP STANDARD SECTIONS TO REQUIREMENTS

  | Standard | Section/Method | Requirement IDs Mapped | Compliance Approach | Verification (A/I/T/D) | Status |
  |----------|---------------|----------------------|---------------------|----------------------|--------|
  | MIL-STD-810H | Method 501.7 High Temp | OPR-001, OPR-003 | Design + Test | T (MIL-STD-810H) | Mapped |
  | MIL-STD-810H | Method 514.8 Vibration | FOR-002, FOR-005 | Analysis + Test | A+T | Mapped |
  | MIL-STD-461G | RE102 Radiated Emissions | SIG-003 | Shielding + Test | T | Mapped |
  | ... | ... | ... | ... | ... | ... |

STEP 3: GAP ANALYSIS — standards requirements NOT in current requirements list

  | Standard | Section | Required By Standard | Current Status | Recommendation |
  |----------|---------|---------------------|----------------|----------------|
  | MIL-STD-882E | 4.3 | System Safety Analysis | NO requirement exists | ADD: SAF-0XX |
  | MIL-STD-810H | Method 509.7 | Salt Fog Testing | NOT specified | ADD if naval/coastal |

STEP 4: VERIFICATION SUMMARY

  | Verification Type | Standard References | Estimated Tests | Cost Class |
  |------------------|-------------------|-----------------|-----------|
  | Environmental (T) | MIL-STD-810H Methods {{list}} | {{N}} tests | HIGH |
  | EMC (T) | MIL-STD-461G {{sections}} | {{N}} tests | HIGH |
  | Safety (A+T) | MIL-STD-882E | FMEA + {{N}} tests | MEDIUM |
  | Human Factors (D) | MIL-STD-1472H | {{N}} demos | LOW |

  Rule: Standards verification planning in Phase 1 prevents test cost surprises in Phase 4.
```

---

### P15 — Phase 1 Gate Review
**Use when:** Requirements list audited — formal gate before Phase 2
**Why it works:** Structured scoring prevents drifting into Phase 2 prematurely with under-specified requirements.

```
TASK: Conduct Phase 1 Gate Review for {{product_name}} ({{VN-XXX-XXX}})
  Score 6 criteria (weighted). Calculate total. Present gate decision options A/B/C/D.
  WAIT for explicit approval before Phase 2 begins.

CONTEXT:
  product: {{VN-XXX-XXX}}
  inputs:
    - Requirements List (final): {{reference}}
    - Stakeholder Analysis (P12): {{reference}}
    - Audit Results (P14): {{reference}}
  gate_target: weighted total ≥3.5/4.0

CONSTRAINTS:
  hard_limits:
    - Score each criterion independently before calculating weighted total
    - Gate target: weighted total ≥3.5/4.0
    - Score 0 on any criterion blocks APPROVE regardless of total
  reject_conditions:
    - Requirements list not provided — cannot conduct gate; run P13/P14 first
    - Audit results (P14) not available — Criterion B (Clarity) cannot be confirmed
      without quantification data; proceed but flag as [DATA-MISSING]
  prohibited_actions:
    - Do NOT auto-proceed to Phase 2 — WAIT for explicit human gate decision
    - Do NOT round up weighted total — show exact calculation
    - Do NOT recommend APPROVE if Criterion F (Defense Compliance) scores 0
    - Do NOT present fewer than 4 options (A/B/C/D must all be shown)

TOOLS_ALLOWED: ["read_file", "calculate"]

HITL_CHECKPOINT:
  per_criterion: false — score all criteria first, then single review
  on_score_complete: true — present scores + total + all 4 options;
    WAIT for explicit gate decision before Phase 2 begins
  on_safety_zero: "IMMEDIATE" — Criterion F scores 0; STOP; flag as gate blocker;
    present specific safety compliance gaps before any further scoring

SAFETY_OVERRIDE: "If Criterion F (Defense Compliance) scores 0 — STOP.
  Safety non-compliance is a blocker regardless of other scores."

SUCCESS_CRITERIA:
  scoring_completeness: "all 6 criteria scored with ≥1 justification sentence per score"
  calculation_transparency: "weighted total shown with explicit formula"
  decision_options: "all 4 options (A/B/C/D) presented with threshold conditions"
  gate_neutrality: "recommendation based on score — not on desired answer"

FALLBACK_PROTOCOL:
  missing_inputs: "Score available criteria; mark criteria requiring missing inputs as
    [DATA-MISSING: score pending input]; present partial gate with explanation"
  borderline_score: "If total is 3.4–3.5 — explicitly flag as borderline; list specific
    items to address; do not round up; let human decide APPROVE or REVISE"
  safety_zero: "STOP all other scoring; present Criterion F = 0 as gate blocker;
    list specific compliance gaps; recommend what must change before re-review"
  unknown_error: "SAFE_STATE — output partial scores; mark unscored criteria; await direction"

OUTPUT_FORMAT: Scored checklist table + weighted total + gate decision recommendation

--- GATE CRITERIA (score 0-4 each) ---

Scale: 4=Excellent | 3=Good | 2=Adequate | 1=Barely adequate | 0=Fail (blocks proceed)

A. COMPLETENESS (weight: 25%)
   - All 16 categories with ≥2 requirements?
   - All key stakeholders mapped?
   - No obvious missing requirements?
   Score A: ___/4

B. CLARITY (weight: 25%)
   - ≥80% requirements have numeric values with units?
   - Zero undefined terms ("adequate", "sufficient")?
   - All [ASSUMPTION] tags have verification plan?
   Score B: ___/4

C. CONSISTENCY (weight: 20%)
   - No numerical contradictions?
   - D/W classification consistent with product intent?
   - Requirements compatible with cost target?
   Score C: ___/4

D. TRACEABILITY (weight: 15%)
   - Every requirement has documented source?
   - Customer requirements traceable to list?
   - TCVN/MIL-STD references specific (not vague)?
   Score D: ___/4

E. FEASIBILITY (weight: 10%)
   - No requirements violating physics?
   - All requirements achievable within budget/skills/timeline?
   - Local content ≥60% appears achievable?
   Score E: ___/4

F. DEFENSE COMPLIANCE (weight: 5%)
   - All [SAFETY-CRITICAL] requirements have acceptance criteria?
   - MIL-STD-810 environmental requirements addressed?
   - HITL requirements defined for safety-critical functions?
   Score F: ___/4

WEIGHTED TOTAL:
  = (0.25×A + 0.25×B + 0.20×C + 0.15×D + 0.10×E + 0.05×F)
  Target: ≥3.5/4.0

GATE DECISION OPTIONS:
  A) ✅ APPROVE (≥3.5, no 0-scores) — proceed to Phase 2
  B) 🔄 REVISE (2.5-3.4) — address specific items, re-review in {{days}}
  C) ⏸️ PAUSE — external information needed
  D) ❌ CANCEL — fundamental scope/feasibility problem

PRESENT scores + total + recommendation. WAIT. Do NOT proceed without explicit response.
```

---

## CAPTURE PROTOCOL

```
After Phase 1:
Product: {{VN-XXX-XXX}}
Gate score: ___/4.0
Phase duration: {{days}}
Most common issue: {{e.g., "ergonomics under-specified"}}
Prompt adjustment: {{what to change for next time}}
```
