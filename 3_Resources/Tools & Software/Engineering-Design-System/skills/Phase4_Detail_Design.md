---
skill: S1 — AI Literacy × Engineering Design
phase: 4 — Detail Design
framework: Pahl & Beitz Section 8 + Production Readiness
slash_commands: /bom · /verify · /cost · /close
type: prompt-library
version: 3.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v2.0 — P57 added (Phase 4 gate review & project close)
  v3.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to all 4 prompts
          (P33/P34/P35/P57) (2026-03-04)
---

# Phase 4 — Detail Design Prompts

> **Goal:** Embodiment layout → production-ready documentation: BOM, drawings, verification plan, cost analysis.
> **Gate to Production:** All drawings issued · BOM complete · verification plan approved · cost within target.
> **Duration:** 25-30% of total project timeline.

---

## PROMPT INDEX

| # | Command | Name | Use When |
|---|---------|------|----------|
| P33 | `/bom` | Bill of Materials Generation | Convert embodiment layout to structured BOM |
| P34 | `/verify` | Verification Plan | Map requirements to test/inspection methods |
| P35 | `/cost` | Cost Analysis | Detailed unit cost breakdown + LCC estimate |
| P57 | `/close` | Phase 4 Gate Review & Project Close | Formal gate to production + project archive |

---

### P33 — Bill of Materials Generation (`/bom`)
**Use when:** After Gate 3 approval — first step of Phase 4
**Why it works:** Forces complete part-level enumeration. Exposes missing design decisions before drawing work begins.

```
TASK: Generate Bill of Materials for {{product_name}} ({{VN-XXX-XXX}})
  Build structured BOM from embodiment design — all assemblies, sub-assemblies, parts.
  Flag all import-dependent items. Calculate preliminary local content %.
  Return: BOM table (indented structure) + local content summary + procurement flags.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 4
  inputs:
    - Embodiment layout (Phase 3 output): {{reference}}
    - Material selections (P24 outputs): {{reference}}
    - Local content analysis (P25 DfLC): {{reference}}
  BOM_depth: Assembly → Sub-assembly → Part (minimum 3 levels)

CONSTRAINTS:
  hard_limits:
    - Part numbering: VN-XXX-XXX-YYYY format — product code + sequential; locked after BOM approval
    - Every part requires material designation (grade + standard): no "TBD" material specs permitted
    - Every part flagged LOCAL or IMPORT; import items need country + estimated lead time
    - Local content ≥60% by value: calculate explicitly and flag if below target
    - Standard parts: use Vietnamese-standard equivalent where available (fasteners, bearings, seals)
  reject_conditions:
    - Any assembly with no parts listed — incomplete BOM cannot be released for drawing work
    - Any part without material spec — manufacturing process cannot be specified without material
    - Phase 3 gate approval not confirmed — BOM cannot begin without gate 3 passing
  prohibited_actions:
    - Do NOT assign final part numbers without human BOM approval — numbers lock after approval
    - Do NOT list assemblies without parts beneath them — minimum BOM depth is 3 levels
    - Do NOT tag dual-use or export-controlled materials as LOCAL without export classification check

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete full BOM first, then single review
  on_bom_complete: true — present before drawing release begins; part number assignment and
    assembly structure lock after BOM approval; most consequential output of this prompt
  on_safety_flag: "IMMEDIATE" — [EXPORT-REVIEW] item identified (dual-use or classified material);
    halt part number assignment; flag immediately; await clearance

SAFETY_OVERRIDE: "Any part with dual-use classification (export-controlled material, classified component) — tag [EXPORT-REVIEW]. Do not assign part numbers to controlled items without clearance."

UNCERTAINTY_FLAG: true — any part without confirmed source = [TBD: supplier needed]

SUCCESS_CRITERIA:
  depth_coverage: "All assemblies decomposed to ≥3 levels (end item → assembly → sub-assembly → part)"
  material_completeness: "100% of parts have material designation (grade + standard); 0 TBD"
  sourcing_completeness: "100% of parts tagged LOCAL or IMPORT with source and lead time"
  local_content_calculated: "Explicit % calculation shown: local value / total BOM value × 100"

FALLBACK_PROTOCOL:
  missing_design_data: "Flag [BOM-PARTIAL]; list assemblies/sub-assemblies that cannot be
    decomposed yet; note that incomplete BOM cannot be released for drawing work"
  local_source_not_confirmed: "Flag [SOURCE-UNCONFIRMED]; use best available knowledge; mark
    as [TBD: supplier needed]; escalate to procurement for verification"
  export_controlled_item: "IMMEDIATE — flag [EXPORT-REVIEW]; do not assign part number; document
    item, classification concern, and required action before proceeding"
  unknown_error: "SAFE_STATE — output completed BOM levels with [INCOMPLETE] markers;
    flag uncompleted assemblies; await direction"

OUTPUT_FORMAT: Indented BOM table (Excel-compatible) + local content pie chart data + procurement flag list

--- BOM STRUCTURE ---

LEVEL STRUCTURE:
  Level 0: End Item (product)
  Level 1: Major Assemblies
  Level 2: Sub-assemblies
  Level 3: Parts / Standard Parts / Purchased Items

BOM TABLE COLUMNS:
| Level | Item # | Part Number | Description | Qty | Unit | Material | Process | Source | Unit Cost Est. | Extended Cost | Local/Import | Lead Time | Notes |

PROCUREMENT FLAGS (report separately):
  IMPORT: {{part}} — source: {{country}} — lead time: {{weeks}} — risk: HIGH/MED/LOW
  SINGLE-SOURCE: {{part}} — only one known supplier — risk: HIGH
  LONG-LEAD: {{part}} — lead time >12 weeks — flag for early order

LOCAL CONTENT CALCULATION:
  Total BOM cost estimate: $X
  Local parts value: $Y ({{Y/X × 100}}%)
  Import parts value: $Z
  If local% <60%: flag which import items have local alternatives to investigate

PHASE 4 MILESTONE: BOM approved = drawing release can begin
```

---

### P34 — Verification Plan (`/verify`)
**Use when:** BOM approved — map every requirement to a verification method
**Why it works:** Prevents the common failure of designing a product that can't be tested or that fails tests.

```
TASK: Generate verification plan for {{product_name}} ({{VN-XXX-XXX}})
  Map every MUST requirement to a verification method (A/I/T/D).
  Define pass/fail criteria, test conditions, sequence, and cost estimate.
  Return: verification matrix + test plan outline.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 4
  inputs:
    - Requirements List (Phase 1, final): {{reference}}
    - Selected concept + embodiment design: {{reference}}
  applicable_standards: {{MIL-STD-810H, TCVN_XX, etc.}}
  test_environment: {{lab / field range / naval / factory}}
  test_budget_constraint: {{rough estimate available}}

CONSTRAINTS:
  hard_limits:
    - 100% of MUST requirements must have a verification method (A/I/T/D) assigned — no gaps
    - WISH requirements: include if time/budget allows; flag as optional; do not block gate
    - Verification methods: only A/I/T/D are valid; hybrid methods require written justification
    - Sequence logic: A/I before T/D — never test what can be calculated or inspected
    - MIL-STD-810H environmental tests: method number required (e.g., Method 514.8 for vibration)
    - Safety-critical requirements: T or D mandatory — A-only verification is insufficient
  reject_conditions:
    - Requirements list (Phase 1 final) not provided — cannot map requirements without source
    - BOM not approved — verification plan cannot be sequenced without knowing what will be built
    - Applicable standards not specified — MIL-STD-810H method numbers cannot be assigned
  prohibited_actions:
    - Do NOT assign A-only verification to any [SAFETY-CRITICAL] requirement
    - Do NOT propose any T or D method without defining explicit pass/fail criteria
    - Do NOT omit cost estimate for any T or D method — test cost is a resource commitment

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete full verification matrix first, then single review
  on_safety_critical_a_only: true — any [SAFETY-CRITICAL] requirement assigned A-only verification;
    flag before finalizing; present alternative T or D method
  on_safety_flag: "IMMEDIATE" — [SAFETY-CRITICAL] requirement with no viable verification method;
    halt; escalate immediately; non-negotiable gate blocker

SAFETY_OVERRIDE: "Any requirement tagged [SAFETY-CRITICAL] must be verified by T (Test) or D (Demonstration). Analysis alone (A) insufficient for safety-critical verification. Flag if A-only was assigned."

SUCCESS_CRITERIA:
  coverage_completeness: "100% of MUST requirements have a method assigned (0 gaps in verification matrix)"
  safety_verification: "All [SAFETY-CRITICAL] requirements assigned T or D (0 A-only on safety reqs)"
  mil_std_compliance: "All environmental tests reference MIL-STD-810H method number (format: Method NNN.N)"
  cost_estimate: "All T and D methods have cost estimate (not 'TBD')"

FALLBACK_PROTOCOL:
  no_affordable_test_method: "Flag [VERIFY-GAP]; present 3 options: (1) accept risk with documented
    rationale, (2) redesign to enable cheaper verification, (3) customer waiver with sign-off;
    present to human for decision"
  safety_critical_a_only: "STOP — [SAFETY-CRITICAL] requirement cannot be verified by analysis alone.
    Propose T or D method. If T not feasible, flag [VERIFY-CRITICAL-GAP] and escalate."
  mil_std_method_unknown: "Flag [MIL-STD-UNKNOWN]; use closest known method with note 'verify method
    number before FAT'; do not leave method number blank"
  unknown_error: "SAFE_STATE — output completed matrix rows with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Verification matrix + test plan outline + cost estimate

--- VERIFICATION METHOD DEFINITIONS ---

A — ANALYSIS: Calculation, simulation, FEA, modeling
  When to use: Physics-based requirements (stress, thermal, electrical)
  Output: Engineering calculation document with pass/fail result
  Cost: Lowest — hours of engineering time

I — INSPECTION: Visual check, measurement, dimensional verification
  When to use: Geometric, workmanship, documentation requirements
  Output: Inspection record with measured values vs. limits
  Cost: Low — minutes to hours per item

T — TEST: Functional, performance, environmental, reliability testing
  When to use: Performance, environmental, reliability requirements
  MIL-STD-810H test methods: specify Method XXX.Y for each environmental test
  Output: Test report with raw data + pass/fail verdict
  Cost: Highest — equipment, time, potentially destructive

D — DEMONSTRATION: Operational use in intended environment
  When to use: Ergonomic, operational, usability requirements
  Output: Demonstration record, operator assessment
  Cost: Medium — field time + operator

--- VERIFICATION MATRIX ---

| Req ID | Requirement Summary | Value/Limit | Type (MUST/WISH) | Method (A/I/T/D) | Test Standard | Pass Criteria | Seq | Cost Est. | Status |
|--------|---------------------|-------------|-----------------|-----------------|---------------|---------------|-----|-----------|--------|

VERIFICATION SEQUENCE PLAN:
  Phase A: Pre-build analysis (all A methods) — {{weeks}} — engineering calculations
  Phase B: Incoming inspection (all I methods) — {{days}} — at goods receipt
  Phase C: Functional test (T methods — functional) — {{weeks}} — after assembly
  Phase D: Environmental test (T methods — MIL-STD-810) — {{weeks}} — specialized lab
  Phase E: Field demonstration (D methods) — {{weeks}} — customer site

COST ESTIMATE SUMMARY:
  Analysis: {{N}} items × avg {{hours}} = {{cost}}
  Inspection: {{N}} items × avg {{cost/item}} = {{cost}}
  Testing (functional): {{N}} tests × avg {{cost/test}} = {{cost}}
  Testing (environmental): {{N}} tests × avg {{cost/test}} = {{cost}}
  Demonstration: {{N}} demos × avg {{cost/demo}} = {{cost}}
  TOTAL VERIFICATION COST: {{$X}} — as % of product cost: {{%}}

OPEN VERIFICATION ITEMS (flag for decision):
  - Req {{ID}}: No affordable verification method → accept risk / redesign / waive
```

---

### P35 — Cost Analysis (`/cost`)
**Use when:** BOM complete — detailed cost breakdown for business case and pricing
**Why it works:** Forces explicit cost accounting before production commits. Reveals cost drivers early.

```
TASK: Generate detailed cost analysis for {{product_name}} ({{VN-XXX-XXX}})
  Build bottom-up unit cost from BOM. Calculate at target quantities.
  Compare to import equivalent. Estimate lifecycle cost.
  Return: cost breakdown table + unit cost summary + import comparison + LCC.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 4
  inputs:
    - BOM with unit cost estimates (P33): {{reference}}
    - Production quantities: {{units in Year 1 / Year 2 / Year 3}}
  import_equivalent_price: {{known or estimated price of imported equivalent}}
  cost_target: ≤70% of import equivalent (Vietnamese defense target)
  local_wage_rate: {{VND/hour — current Vietnamese manufacturing rate}}

CONSTRAINTS:
  hard_limits:
    - All 4 cost components required: material + labor + overhead + margin (no single-line estimates)
    - Apply 85-90% learning curve to labor for any production volume >10 units
    - Quantity sensitivity: calculate cost at 10 / 50 / 100 units minimum (3 data points mandatory)
    - LCC horizon: {{5 / 10 / 15 years}} — must include spares + maintenance + disposal
    - Flag immediately if unit cost at target quantity >70% of import equivalent
  reject_conditions:
    - BOM (P33) not complete — material cost cannot be calculated without part-level cost data
    - Production quantity not specified — learning curve and overhead allocation cannot be calculated
    - Import equivalent price not provided or estimable — cost position comparison cannot be made
  prohibited_actions:
    - Do NOT produce a single-number unit cost without the 4-component breakdown
    - Do NOT include supplier pricing obtained under NDA or confidentiality in this document
    - Do NOT omit uncertainty flags on any estimate not backed by a supplier quote

TOOLS_ALLOWED: ["read_file", "calculate", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete full cost model first, then single review
  on_cost_overrun: true — unit cost at target quantity >70% of import equivalent; flag before
    any external sharing; present top 3 cost reduction actions
  on_safety_flag: "IMMEDIATE" — cost model includes classified program costs or NDA-restricted
    pricing; halt; alert immediately; remove before any distribution

SAFETY_OVERRIDE: "Do not include classified program costs or contractually confidential pricing in this document without authorization. Flag any cost data from restricted sources."

UNCERTAINTY_FLAG: true — any cost estimate without supplier quote = [ESTIMATE: ±{{%}} uncertainty]

SUCCESS_CRITERIA:
  four_component_breakdown: "Material + labor + overhead + margin all explicitly calculated (no merged lines)"
  learning_curve_applied: "85-90% learning curve applied and quantified for any volume >10 units"
  quantity_sensitivity: "Cost explicitly shown at ≥3 quantities (10/50/100 or equivalent)"
  import_comparison: "% below/above import equivalent explicitly calculated and stated at target quantity"

FALLBACK_PROTOCOL:
  missing_bom_costs: "Flag all items as [ESTIMATE ±30%]; proceed with range estimate; note that
    quote-based re-run is required before business case is finalized or submitted"
  labor_rate_unavailable: "Use Vietnamese manufacturing rate range as reference; flag as [ESTIMATE];
    note to confirm with production team before committing to pricing"
  learning_curve_data_absent: "Apply 85% curve as conservative default; flag [LEARNING-CURVE-ASSUMED];
    document assumption for review and replacement with actual data"
  unknown_error: "SAFE_STATE — output completed sections with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Cost breakdown table + sensitivity analysis + import comparison + LCC table

--- COST STRUCTURE ---

UNIT COST BREAKDOWN (at {{target quantity}} units):

MATERIAL COST:
  | BOM Item | Qty | Unit Material Cost | Total | Source | Confidence |
  Material subtotal: $X

LABOR COST:
  | Assembly Step | Hours | Labor Rate $/hr | Cost | Skill Level |
  Labor subtotal: $Y
  Learning curve adjustment (at {{N}} units): ×{{0.85-0.90}} = $Y_adj

OVERHEAD COST:
  Factory overhead ({{%}} of labor): $Z1
  Engineering overhead ({{%}} of material+labor): $Z2
  Quality ({{%}} of material+labor): $Z3
  Overhead subtotal: $Z

MARGIN:
  Target margin: {{%}}
  Margin amount: $M

UNIT PRICE: Material + Labor_adj + Overhead + Margin = $TOTAL

QUANTITY SENSITIVITY:
  | Quantity | Material | Labor (w/ learning) | Overhead | Margin | Unit Price | vs Import |
  | 10 | | | | | | {{%}} |
  | 50 | | | | | | {{%}} |
  | 100 | | | | | | {{%}} |

IMPORT COMPARISON:
  Import equivalent price: ${{import}}
  Our price at target qty: ${{our_price}}
  Advantage: {{%}} below import OR {{%}} ABOVE import → FLAG if above

LIFECYCLE COST (LCC) OVER {{N}} YEARS at {{M}} units:
  | Year | Unit Cost | Quantity | Spares ({{%}}) | Maintenance | Training | Total Year |
  LCC Total: ${{}}
  LCC per unit per year: ${{}}
  TCO advantage vs import: ${{savings}} ({{%}})

COST REDUCTION OPPORTUNITIES (top 3):
  1. {{Highest cost item}} — potential saving: {{%}} if {{action}}
  2. {{Second cost driver}} — potential saving: {{%}} if {{action}}
  3. {{Third}} — potential saving: {{%}} if {{action}}
```

---

### P57 — Phase 4 Gate Review & Project Close (`/close`)
**Use when:** BOM, verification plan, and cost analysis complete — final gate before production release
**Why it works:** P&B §8: The Phase 4 gate is the last checkpoint before committing manufacturing resources. Formal scoring prevents releasing incomplete documentation or unresolved cost overruns. Project close ensures lessons are captured for institutional learning.

```
TASK: Conduct Phase 4 Gate Review for {{product_name}} ({{VN-XXX-XXX}})
  Score 6 criteria (weighted). Calculate total. Present gate decision options A/B/C/D.
  If APPROVE: execute project close checklist.
  WAIT for explicit approval before production release.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 4 — final gate
  inputs:
    - BOM (P33): {{reference — part numbers assigned?}}
    - Verification Plan (P34): {{reference — all MUST reqs covered?}}
    - Cost Analysis (P35): {{reference — within target?}}
    - Production drawings: {{status — % complete, version-controlled?}}
    - Phase 3 Gate Results (P27): {{reference — what conditions were set?}}
  gate_target: weighted total ≥3.5/4.0
  production_quantity: {{target lot size}}

CONSTRAINTS:
  hard_limits:
    - Any criterion scoring 0: cannot release to production regardless of total score
    - Cost overrun block: unit cost >80% of import equivalent at target quantity → auto-REVISE
    - Safety block: any unresolved [SAFETY-CRITICAL] requirement without T or D verification → auto-REVISE
    - Gate target: weighted total ≥3.5/4.0
    - Present all four decision options A/B/C/D — do not pre-select or omit options
  reject_conditions:
    - BOM (P33) not approved — cannot gate without locked part numbers
    - Verification plan (P34) not complete — Category B cannot be scored
    - Cost analysis (P35) not complete — Category C cannot be scored
    - Phase 3 gate not approved — Phase 4 gate requires Phase 3 gate to have passed
  prohibited_actions:
    - Do NOT auto-approve or suggest release without explicit human decision
    - Do NOT execute project close checklist until gate decision A is explicitly confirmed
    - Do NOT include supplier pricing or classified cost data in this document without authorization

TOOLS_ALLOWED: ["read_file", "calculate", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete all 6 categories first, then single gate decision review
  on_safety_block: true — any [SAFETY-CRITICAL] requirement without T/D verification method;
    flag before scoring begins; present as pre-gate blocker; non-negotiable
  on_safety_flag: "IMMEDIATE" — export-controlled or classified cost data included in document;
    halt; alert immediately; remove before any distribution

SAFETY_OVERRIDE: "If any [SAFETY-CRITICAL] requirement lacks a completed verification method (T or D) — this is a non-negotiable blocker. Do not allow release regardless of other scores."

SUCCESS_CRITERIA:
  category_coverage: "All 6 categories scored with source document cited for each"
  gate_recommendation: "Clear APPROVE/REVISE/PAUSE/CANCEL recommendation with weighted total calculation shown"
  close_checklist_conditional: "Project close checklist executed only after confirmed gate A decision"
  lessons_captured: "D-M-I-R reflection and lessons learned references included in close checklist items"

FALLBACK_PROTOCOL:
  missing_gate_input: "Flag [GATE4-INPUT-MISSING] for each missing document; cannot complete
    scoring; list minimum inputs required before gate can proceed"
  cost_target_missed: "Flag [COST-OVERRUN]; present unit cost at target qty vs 70% threshold;
    propose top 3 cost reduction actions with estimated % savings; recommend REVISE"
  safety_verification_gap: "IMMEDIATE — [SAFETY-CRITICAL] requirement without T/D method is a
    non-negotiable gate blocker. Flag [SAFETY-GATE-BLOCK]. Do not present APPROVE option."
  unknown_error: "SAFE_STATE — output completed categories with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Scored checklist + weighted total + gate decision + close checklist if approved

--- GATE CRITERIA (score 0-4 each) ---

Scale: 4=Excellent | 3=Good | 2=Adequate | 1=Barely adequate | 0=Fail (blocks release)

A. DOCUMENTATION COMPLETENESS (weight: 25%)
   - All production drawings issued and version-controlled?
   - BOM complete with part numbers, materials, sources?
   - Assembly instructions documented?
   - All critical dimensions and tolerances specified?
   Score A: ___/4

B. VERIFICATION READINESS (weight: 25%)
   - 100% MUST requirements have verification method (A/I/T/D)?
   - Verification sequence planned (A/I before T/D)?
   - Test procedures written for all T and D methods?
   - MIL-STD-810H test methods specified (number, procedure)?
   Score B: ___/4

C. COST & BUSINESS CASE (weight: 20%)
   - Unit cost ≤70% of import equivalent at target quantity?
   - Material costs confirmed with supplier quotes (not estimates)?
   - Learning curve applied to labor costs?
   - Lifecycle cost (LCC) calculated and acceptable?
   Score C: ___/4

D. PRODUCTION READINESS (weight: 15%)
   - All materials sourceable (suppliers identified)?
   - Manufacturing processes within Vietnamese capability?
   - Lead times for import items documented and acceptable?
   - Quality inspection plan defined?
   Score D: ___/4

E. LOCAL CONTENT (weight: 10%)
   - Local content ≥60% by value?
   - Import dependencies documented with alternatives?
   - Single-source items identified with mitigation?
   Score E: ___/4

F. RISK CLOSURE (weight: 5%)
   - All Phase 3 FMEA items (RPN≥100) mitigated?
   - All Phase 2/3 weak spots addressed in design?
   - No open [SAFETY-CRITICAL] items without resolution?
   Score F: ___/4

WEIGHTED TOTAL:
  = (0.25×A + 0.25×B + 0.20×C + 0.15×D + 0.10×E + 0.05×F)
  Target: ≥3.5/4.0

GATE DECISION OPTIONS:
  A) ✅ RELEASE TO PRODUCTION (≥3.5, no 0-scores) — execute project close
  B) 🔄 REVISE (2.5-3.4) — address items, re-review before release
  C) ⏸️ PAUSE — external dependency (supplier, funding, regulatory approval)
  D) ❌ CANCEL — fundamental cost/quality problem, return to Phase 3

--- PROJECT CLOSE CHECKLIST (execute only after gate A approved) ---

  [ ] All production drawings issued and version-controlled
  [ ] BOM approved (P33) with part numbers locked
  [ ] Verification plan approved (P34) with schedule and budget
  [ ] Cost analysis approved (P35) — unit cost confirmed ≤70% of import
  [ ] All [SAFETY-CRITICAL] requirements have verified test methods
  [ ] Lessons learned extracted (/lessons — P38)
  [ ] D-M-I-R reflection completed (/reflect — P36)
  [ ] Project folder archived: projects/{{VN-XXX-XXX}}/PHASE_4/
  [ ] Portfolio updated (/pf) — project status: PRODUCTION
  [ ] Project summary report written (1 page: scope, cost, timeline actual vs plan)

PRESENT scores + total + recommendation. WAIT. Do NOT proceed without explicit response.
```

---

## CAPTURE PROTOCOL

```
After Phase 4:
Product: {{VN-XXX-XXX}}
Gate 4 score: ___/4.0
Final unit cost at target qty: ${{}} vs import ${{}} = {{%}}
Local content achieved: {{%}}
Verification cost as % of product: {{%}}
Most expensive test: {{which one + cost}}
Biggest cost surprise: {{what cost more than expected}}
Total project duration: {{weeks/months}}
Phases completed: 0 → 1 → 2 → 3 → 4
Key lesson for next project: {{1 sentence}}
```
