---
skill: S1 — AI Literacy × Engineering Design
phase: 3 — Embodiment Design
framework: Pahl & Beitz Sections 7.1–7.8, DfX Guidelines
slash_commands: /layout · /dfx · /mat · /tol · /opt · /gate
type: prompt-library
version: 4.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v3.0 — P54/P55 added (tolerance stack-up, design optimization)
  v4.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to all 8 prompts
          (P22/P23/P24/P54/P25/P55/P26/P27) (2026-03-04)
---

# Phase 3 — Embodiment Design Prompts

> **Goal:** Selected concept → complete physical design (layout, materials, DfX, FMEA) ready for detail design.
> **Gate to Phase 4:** All 6 embodiment principles addressed · DfX avg ≥3/5 · FMEA RPN≥100 mitigated · local content ≥60% · cost on target.

---

## PROMPT INDEX

| # | Name | Use When |
|---|------|----------|
| P22 | Embodiment Task Clarification | Opening Phase 3 — interface inventory + design sequence |
| P23 | Layout Design Review | After first layout draft — 6 principles check |
| P24 | Material Selection | For each critical component |
| P54 | Tolerance Stack-up Analysis | After layout — critical dimension chains |
| P25 | DfX Analysis (12 categories) | Mid-Phase 3 quality check |
| P55 | Design Optimization Review (`/opt`) | After DfX — iterate before FMEA |
| P26 | FMEA | Before gate review |
| P27 | Phase 3 Gate Review | Formal gate to Phase 4 |

---

### P22 — Embodiment Task Clarification
**Use when:** Phase 3 start — translate selected concept into actionable design task
**Why it works:** Missing interface definitions cause expensive late-stage redesigns.

```
TASK: Clarify embodiment design task for {{product_name}} ({{VN-XXX-XXX}})
  Define all interfaces, audit production capability, plan design sequence, and map weak spot mitigations.
  Return: interface table + production map + design sequence + mitigation plan.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3 — start
  selected_concept: {{paste from P21}}
  weak_spots_to_address: {{paste from P21 weak spot analysis}}
  inputs:
    - Phase 2 gate approval: {{confirmed}}
    - VDI selected concept: {{Concept X, Rt = ___}}

CONSTRAINTS:
  hard_limits:
    - Interface inventory must include all 4 types: mechanical + electrical + data + thermal (no partial lists)
    - Fixed interfaces (connections to existing systems) are locked constraints, not design variables
    - Design sequence must follow dependency order: structure/frame → mechanisms → electronics → housings
    - Every Phase 2 weak spot must map to an explicit embodiment design approach (0 unmapped allowed)
  reject_conditions:
    - Phase 2 gate approval not provided — cannot open Phase 3 without Phase 2 gate confirm
    - Selected concept not specified — cannot plan embodiment for an unselected concept
    - No weak spots documented when P21 lists them — reject incomplete mitigation plan input
  prohibited_actions:
    - Do NOT begin layout design before interface inventory is reviewed at HITL gate
    - Do NOT treat flexible interfaces as fixed — over-constraining increases redesign risk
    - Do NOT reopen Phase 2 concept selection — embodiment builds on selected concept only

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete all 4 tables first, then single review
  on_design_sequence: true — present before layout begins; wrong sequence forces expensive rework;
    most consequential output of this prompt
  on_safety_flag: "IMMEDIATE" — [SAFETY-INTERFACE] detected; any interface connecting to weapons
    system, fire control, or safety interlock; pause all embodiment planning; dedicated safety
    analysis required before design proceeds

SAFETY_OVERRIDE: "If any interface connects to a weapons system, fire control, or safety interlock — tag [SAFETY-INTERFACE]. These interfaces require dedicated safety analysis before design proceeds."

SUCCESS_CRITERIA:
  interface_completeness: "All 4 interface types listed (0 types missing)"
  production_coverage: "All 7 standard Vietnamese processes assessed: CNC, sheet metal, welding, PCB
    assembly, casting, injection molding, surface treatment"
  sequence_logic: "Each step has explicit dependency reason; structure/frame is always Step 1"
  mitigation_coverage: "All Phase 2 weak spots mapped to an embodiment approach (0 unmapped)"

FALLBACK_PROTOCOL:
  missing_phase2_output: "Cannot define design sequence without weak spot list from P21. Request
    P21 output before proceeding. Output partial interface table only with [PENDING: weak spots]."
  conflicting_interfaces: "Flag [INTERFACE-CONFLICT]; document both competing requirements; present
    to human for resolution; do not choose arbitrarily"
  vietnamese_process_unavailable: "Flag [IMPORT-PROCESS] for any required process not available
    domestically; escalate to human — may affect concept viability or require import tooling"
  unknown_error: "SAFE_STATE — output completed tables with explicit [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: 4 tables (interface table + production capability + design sequence + mitigation plan)

--- CLARIFICATION SECTIONS ---

1. INTERFACE INVENTORY
   | Interface | Connected To | Type (mech/elec/data/thermal) | Fixed or Flexible? | Standard/Protocol |

2. PRODUCTION CAPABILITY AUDIT
   | Process | Available in Vietnam? | Cost level | Tolerance capability |
   Include: CNC machining, sheet metal, welding (TIG/MIG), PCB assembly, casting, injection molding, surface treatment

3. DESIGN SEQUENCE (dependency-driven)
   1. {{Structure/frame}} — reason: everything mounts to it
   2. {{Critical mechanisms}} — reason: determines mounting space
   3. {{Electronics/sensors}} — reason: fit within envelope
   4. {{Covers/housings}} — reason: designed around internals

4. WEAK SPOT MITIGATION PLAN
   | Phase 2 Weak Spot | Embodiment Design Approach | Success Criterion |
```

---

### P23 — Layout Design Review
**Use when:** First layout draft complete — before committing to dimensions
**Why it works:** Applying 6 Pahl & Beitz principles at layout stage prevents costly late redesigns.

```
TASK: Review layout design for {{product_name}} ({{VN-XXX-XXX}}) against 6 embodiment design principles.
  Score each principle PASS/FAIL/IMPROVE. List critical violations.
  Return: assessment per principle + proceed/revise recommendation.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3
  layout_reference: {{file or description of key assemblies}}
  function_structure: {{reference P17}}
  safety_critical_functions: {{list from Phase 1/2}}

CONSTRAINTS:
  hard_limits:
    - Principles 1 (Force Transmission) and 5 (Fault-Free): any FAIL = stop before proceeding
    - Proceed threshold: ≥4/6 PASS AND zero critical violations
    - Every IMPROVE rating must include a specific, actionable design change (not generic advice)
    - All 6 principles must be assessed — partial review is invalid
  reject_conditions:
    - Layout not provided or described — cannot assess principles without a design reference
    - Function structure (P17) not referenced — Division of Tasks (Principle 2) cannot be verified
  prohibited_actions:
    - Do NOT downgrade a critical violation to IMPROVE — Principles 1 and 5 failures are FAIL
    - Do NOT proceed to next design step if Principle 5 reveals an unresolved single-point safety failure
    - Do NOT omit any of the 6 principles — partial review accepted by user may hide critical flaws

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete all 6 principles first, then single review
  on_critical_violation: true — any FAIL on Principles 1 or 5; present before any design revision begins;
    layout revisions affect all downstream work
  on_safety_flag: "IMMEDIATE" — Principle 5 reveals [SAFETY-CRITICAL] single-point failure; halt
    all layout work; non-negotiable; present immediately

SAFETY_OVERRIDE: "If Principle 5 (Fault-Free Design) reveals a single-point failure on a [SAFETY-CRITICAL] function — STOP. Do not continue until resolved. Safety single-points are non-negotiable."

SUCCESS_CRITERIA:
  principle_coverage: "All 6 principles assessed (0 skipped)"
  violation_clarity: "Every FAIL states specifically what fails and what the design consequence is"
  improve_specificity: "Every IMPROVE provides a named design change (not 'consider improving X')"
  proceed_decision: "Explicit PROCEED or REVISE verdict with threshold reasoning stated"

FALLBACK_PROTOCOL:
  insufficient_design_detail: "List what specific data is needed per principle (load path, CAD, assembly
    sequence). Do not guess ratings. Mark incomplete principles [INSUFFICIENT-DATA]."
  multiple_critical_violations: "Present all violations together in priority order; flag [LAYOUT-BLOCK];
    recommend REVISE; do not assess PROCEED/REVISE until violations listed are resolved"
  unknown_principle_application: "Flag [UNCERTAIN: Principle N — insufficient data]; describe what
    data would enable assessment; present as open question to human"
  unknown_error: "SAFE_STATE — output completed principles with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Principle-by-principle assessment + overall verdict

--- 6 PRINCIPLES REVIEW ---

PRINCIPLE 1: FORCE TRANSMISSION
  - Primary load path: clear and direct?
  - Unnecessary redirections? (each = friction + deformation loss)
  - Stress concentrations? (notches, holes, sharp corners under load)
  - Cross-section optimized (material where stress is highest)?
  Assessment: PASS / FAIL / IMPROVE — {{reason + design change if IMPROVE}}

PRINCIPLE 2: DIVISION OF TASKS
  - Each assembly has ONE primary function?
  - Assemblies unnecessarily coupled?
  - Sub-assemblies removable independently for maintenance?
  - Interfaces between modules clean and minimal?
  Assessment: PASS / FAIL / IMPROVE — {{}}

PRINCIPLE 3: SELF-HELP MECHANISMS
  - Active components (motors, solenoids) where passive would work?
  - Gravity used for automatic return to neutral?
  - Self-centering / self-aligning features at interfaces?
  - Fail-safe default if power lost?
  Assessment: PASS / FAIL / IMPROVE — {{}}

PRINCIPLE 4: STABILITY & BI-STABILITY
  - Center of gravity below support point (where applicable)?
  - Positive mechanical stops used (not relying on friction)?
  - Vibration-sensitive components on damped mounts?
  - Moving parts have detents at operational positions?
  Assessment: PASS / FAIL / IMPROVE — {{}}

PRINCIPLE 5: FAULT-FREE DESIGN
  - Stress concentrations at fatigue-critical locations?
  - Corrosion-prone material pairs in contact (galvanic couple)?
  - Wear surfaces accessible for inspection?
  - Single-point failures on safety-critical functions?
  Assessment: PASS / FAIL / IMPROVE — {{}}

PRINCIPLE 6: DESIGN FOR X (DfX preview)
  - DfM: Machinable/fabricable with available processes?
  - DfA: Clear logical assembly sequence, no trapped parts?
  - DfMaint: Most likely failure point accessible for field replacement?
  - Fasteners minimized?
  Assessment: PASS / FAIL / IMPROVE — {{}}

OVERALL:
  Principles passed: __/6
  Critical violations (must fix): {{list}}
  Improvement opportunities: {{list}}
  PROCEED if: ≥4/6 PASS AND no critical violations
```

---

### P24 — Material Selection
**Use when:** Selecting material for any critical or safety-critical component
**Why it works:** Systematic decision tree prevents "what we always use" bias. Forces local content check.

```
TASK: Select material for {{component_name}} in {{product_name}} ({{VN-XXX-XXX}})
  Apply 6-step decision tree: load case → strength → fatigue → corrosion → local content → specification.
  Return: selected material + surface treatment + sourcing + verification test.

CONTEXT:
  product: {{VN-XXX-XXX}}
  component: {{component_name}}
  component_function: {{1 sentence}}
  load_case: {{tensile / compressive / shear / bending / fatigue / impact / thermal / corrosive}}
  operating_environment: {{temperature range, humidity, salt, UV, chemicals}}
  operating_environment_class: {{C1=dry indoor / C2=mild outdoor / C3=moderate / C4=harsh marine}}

CONSTRAINTS:
  hard_limits:
    - Safety factor: ≥1.5 standard components, ≥2.0 safety-critical components (per MIL-STD — no exceptions)
    - All imported materials must have documented dependency note + cost premium %
    - Verification/acceptance test must be defined before any material is specified for procurement
    - All property values from unverified sources must carry [ASSUMPTION: datasheet not verified] flag
  reject_conditions:
    - Component function not stated — cannot select material without knowing what it must do
    - Load case not specified — Step 2 (strength verification) cannot be completed
    - Operating environment not defined — Step 4 (corrosion assessment) cannot be completed
  prohibited_actions:
    - Do NOT specify a material with safety factor < minimum without explicit human approval
    - Do NOT claim local sourcing without confirming Vietnamese availability (Hoa Phat steel, domestic Al suppliers)
    - Do NOT skip fatigue check (Step 3) for any component under cyclic loading

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete all 6 steps first, then single review
  on_safety_critical: true — any component tagged [SAFETY-CRITICAL]; present material selection
    before specifying; safety-critical material decisions require explicit human confirmation
  on_safety_flag: "IMMEDIATE" — inadequate safety factor detected (calculated margin < minimum);
    halt material specification; report gap; request guidance before continuing

SAFETY_OVERRIDE: "If selected material cannot meet stated safety factor under all operating conditions — STOP. Do NOT specify a material with insufficient margin. Report gap and request guidance."

UNCERTAINTY_FLAG: true — [ASSUMPTION: datasheet not verified] for any property value not from traceable source

SUCCESS_CRITERIA:
  step_completion: "All 6 steps completed with values (blank cells only where NA with written justification)"
  margin_documented: "Safety factor ratio explicitly stated (σ_yield / σ_applied = X.X ≥ SF)"
  sourcing_confirmed: "Every material has LOCAL or IMPORT + supplier name + lead time"
  verification_defined: "Incoming inspection method stated for every material selected"

FALLBACK_PROTOCOL:
  insufficient_datasheet_data: "Flag [ASSUMPTION: datasheet not verified] on all property values;
    identify minimum 1 traceable source needed before specifying; proceed with conservative estimate"
  local_source_not_found: "Identify closest Vietnamese-available equivalent; state performance
    difference; flag [IMPORT-DEPENDENCY] with lead time and cost premium"
  safety_factor_gap: "STOP — state required vs achievable margin; propose 3 options:
    (1) geometry change to reduce stress, (2) material upgrade, (3) load reduction;
    await human decision before specifying"
  unknown_error: "SAFE_STATE — output completed steps with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Step-by-step decision log + final specification table

--- 6-STEP DECISION TREE ---

STEP 1: PRIMARY LOAD CASE → initial material class
  Tensile/compressive static → structural steel or 6061 Al
  Cyclic fatigue >10^6 → fatigue-grade steel, check S-N curve
  Impact/shock → tough steel (medium carbon, normalized)
  Corrosion + stress → 316 SS or Al + treatment
  Thermal >150°C → high-temp steel or ceramic coating
  Wear (sliding) → hardened steel or UHMWPE
  Initial class: {{}}

STEP 2: STRENGTH VERIFICATION
  Applied stress σ = F/A (or M/Z for bending) = {{value}} MPa
  Required yield: σ_yield ≥ σ × SF = {{value}} MPa
  Selected material σ_yield = {{value from datasheet}} MPa
  Margin: {{ratio}} — PASS if ≥SF AND margin not excessive (>3× = over-designed)

STEP 3: FATIGUE CHECK (if cyclic loading)
  Stress amplitude σ_a = {{value}} MPa | Cycles N = {{value}}
  Endurance limit S_e = {{value}} MPa
  Surface finish correction K_f = {{0.7-0.9 for machined}}
  S_e_corrected = {{value}} MPa
  PASS if S_e_corrected ≥ σ_a

STEP 4: CORROSION ASSESSMENT
  Environment class: C1 / C2 / C3 / C4 — Vietnam typically C3-C4
  Treatment options:
  | Material + Treatment | Salt spray (ASTM B117) | Cost | Local? |
  | Steel + 2-part epoxy | 500-1000h | Low | Yes |
  | Steel + hot-dip galvanize | 1000-2000h | Low | Yes |
  | Al 6061 + hard anodize | 1000h | Medium | Limited |
  | 316 SS bare | >2000h | High | Import |
  Selected treatment: {{}}

STEP 5: LOCAL CONTENT CHECK
  Material local source: ✓ Available (Hoa Phat steel, domestic Al) / ⚠ Limited / ✗ Import
  If import: document dependency + cost premium {{%}}

STEP 6: FINAL SPECIFICATION
  Material: {{designation — e.g., AISI 4140 or AA6061-T6}}
  Min σ_yield: {{value}} MPa | Min σ_UTS: {{value}} MPa | Hardness: {{value}} HRC/HB
  Surface treatment: {{coating + thickness + standard reference}}
  Procurement source: {{Vietnamese supplier or import source}}
  Verification test: {{incoming inspection method}}
```

---

### P54 — Tolerance Stack-up Analysis (`/tol`)
**Use when:** After layout and material selection — before DfX review. Analyze critical dimension chains.
**Why it works:** P&B §7.5: Tolerance accumulation is the #1 cause of assembly failures in defense products. Over-tight tolerances increase cost 2-5×; too-loose tolerances cause functional failures. This prompt forces systematic analysis of the chains that matter most.

```
TASK: Conduct tolerance stack-up analysis for {{product_name}} ({{VN-XXX-XXX}})
  Identify critical dimension chains. Calculate worst-case and statistical stack-ups.
  Recommend tolerance allocation. Flag chains requiring tighter control.
  Return: critical chain table + stack-up calculations + tolerance allocation recommendation.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3
  layout_reference: {{current design / drawing reference}}
  critical_functions: {{which functions are sensitive to dimensional variation — alignment, fit, seal, motion}}
  manufacturing_capability: {{Vietnamese CNC: ±0.05mm / Sheet metal: ±0.1mm / Welding: ±0.5mm / PCB: ±0.1mm}}
  assembly_method: {{manual / semi-auto / field assembly}}

CONSTRAINTS:
  hard_limits:
    - Safety-critical dimension chains: worst-case method only (RSS not permitted for these)
    - General chains: RSS method acceptable; document assumed process capability distribution
    - Analyze ≥3 critical chains minimum; add more if additional dimension-sensitive functions exist
    - Every specified tolerance must be achievable by a named Vietnamese manufacturing process
  reject_conditions:
    - Layout not finalized — stack-up analysis on a changing layout produces invalid results
    - Fewer than 3 critical functions identified as dimension-sensitive — likely incomplete scope
    - Manufacturing processes not specified — tolerance achievability cannot be verified
  prohibited_actions:
    - Do NOT use RSS method on safety-critical chains — worst-case is mandatory for these
    - Do NOT specify tolerances tighter than required (over-tolerance adds cost with no function benefit)
    - Do NOT declare a chain PASS without confirming manufacturing process achievability

TOOLS_ALLOWED: ["read_file", "calculate", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete all 4 steps first, then single review
  on_chain_failure: true — any chain with inadequate margin; review before tolerance allocation
    decision; tolerance decisions affect both manufacturing cost and product function
  on_safety_flag: "IMMEDIATE" — [SAFETY-TOLERANCE] detected on safety-critical function;
    halt; present failing chain immediately; do not proceed

SAFETY_OVERRIDE: "If any safety-critical function (weapons alignment, safety interlock clearance, pressure seal) has inadequate tolerance margin — flag [SAFETY-TOLERANCE]. Do not proceed without positive margin demonstrated."

SUCCESS_CRITERIA:
  chain_coverage: "≥3 critical chains analyzed; each linked to a specific dimension-sensitive function"
  method_correctness: "Safety-critical chains use worst-case; general chains use RSS with σᵢ documented"
  manufacturing_verification: "Every tolerance has process achievability confirmed (✓ standard / flag HIGH cost)"
  allocation_decision: "Every failing chain has recommended strategy from the 4-option list (d>b>a>c)"

FALLBACK_PROTOCOL:
  layout_still_changing: "Flag [STACK-UP-PENDING]; identify which dimensions are stable and can be
    analyzed now; defer analysis of volatile dimensions; document deferred chains"
  manufacturing_data_unavailable: "Use conservative estimates: CNC ±0.05mm, sheet metal ±0.1mm,
    welding ±0.5mm; flag all as [ESTIMATE]; note precision machining may be required if margins tight"
  chain_with_no_clear_strategy: "Present gap magnitude; list all 4 strategies with estimated cost impact;
    flag [DECISION-REQUIRED]; await human selection"
  unknown_error: "SAFE_STATE — output completed chains with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Critical chain table + stack-up calculations + allocation recommendations

--- TOLERANCE ANALYSIS FRAMEWORK ---

STEP 1: IDENTIFY CRITICAL DIMENSION CHAINS
  For each function sensitive to dimensional variation:
  | Chain ID | Function Affected | Components in Chain | Functional Requirement |
  |---------|------------------|--------------------|-----------------------|
  | TC-01 | {{e.g., optical alignment}} | Part A + Part B + Part C | ±{{value}}mm |
  | TC-02 | {{e.g., seal compression}} | Housing + O-ring + Cover | {{min-max}} compression |

STEP 2: CALCULATE STACK-UP (per chain)

  Worst-case method (for safety-critical):
    Gap_min = Nominal - Σ(positive tolerances)
    Gap_max = Nominal + Σ(positive tolerances)
    Pass if: Gap_min ≥ minimum functional requirement

  RSS method (for general):
    σ_total = √(Σ σᵢ²)    where σᵢ = Tol_i / 3 (for ±3σ process)
    Gap_RSS = Nominal ± 3 × σ_total
    Pass if: 99.73% of assemblies meet functional requirement

  | Chain | Method | Nominal | Worst-case Min | Worst-case Max | RSS ±3σ | Functional Limit | Result |
  |-------|--------|---------|---------------|---------------|---------|------------------|--------|

STEP 3: TOLERANCE ALLOCATION
  For chains that FAIL:
  | Chain | Component | Current Tol | Required Tol | Process Needed | Cost Impact |
  |-------|-----------|------------|-------------|----------------|------------|

  Allocation strategies:
  a) Tighten most-contributing dimension (highest sensitivity coefficient)
  b) Add adjustment feature (shim, set screw — absorbs variation)
  c) Selective assembly (match parts — requires extra inspection)
  d) Redesign chain (reduce number of contributors)

  Preference: (d) > (b) > (a) > (c)  — redesign > adjust > tighten > sort

STEP 4: MANUFACTURING PROCESS VERIFICATION
  | Tolerance | Required by | Process | Achievable? | Cost Class |
  |-----------|-----------|---------|-------------|-----------|
  | ±0.02mm | TC-01 | CNC turning | ✓ Standard | Normal |
  | ±0.01mm | TC-02 | Grinding | ✓ But expensive | HIGH |
  | ±0.5mm | TC-03 | TIG welding | ✓ With fixture | Normal |

  Vietnamese manufacturing capability quick reference:
    CNC milling/turning: ±0.02-0.05mm (standard), ±0.01mm (precision)
    Sheet metal: ±0.1-0.3mm (bending), ±0.05mm (laser cutting)
    Welding (TIG): ±0.3-1.0mm (with fixture)
    Casting: ±0.5-1.0mm (investment), ±1-3mm (sand)
    PCB assembly: ±0.1mm (SMT), ±0.3mm (through-hole)

SUMMARY:
  Chains analyzed: N
  Pass (no change needed): N
  Marginal (adjustment recommended): N
  Fail (redesign or tight tolerance required): N
  Safety-critical chains: all pass? YES / NO
```

---

### P25 — DfX Analysis (12 Categories)
**Use when:** Design ~60% complete — before finalizing for Gate 3
**Why it works:** Each DfX failure caught here costs 10× less than after manufacturing begins.

```
TASK: Conduct DfX (Design for Excellence) analysis for {{product_name}} ({{VN-XXX-XXX}})
  Score all 12 DfX categories (1-5). List specific issues for scores ≤2.
  Return: scorecard + priority action list + proceed/revise recommendation.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3
  design_reference: {{current design description or drawing reference}}
  production_volume: {{units/month}}
  maintenance_levels: Operator (L1) / Depot (L2) / Factory (L3)
  local_content_target: ≥60% by value

CONSTRAINTS:
  hard_limits:
    - Score scale: 1=poor · 2=below standard · 3=acceptable · 4=good · 5=excellent (no alternative scale)
    - Mandatory minimum: DfS, DfR, DfStd, DfLC must all score ≥3; any ≤2 = mandatory revision before gate
    - Proceed threshold: ≥3.0 average across all 12 AND mandatory minimums met
    - Every score ≤3 must have a named specific issue and a concrete fix action
  reject_conditions:
    - Design ≤40% complete — scoring before ~60% completion produces unreliable results
    - Production volume not specified — DfPV cannot be scored
    - Maintenance levels not specified — DfMaint cannot be scored
  prohibited_actions:
    - Do NOT assign DfS score ≥3 without explicitly verifying each of the 5 DfS sub-criteria
    - Do NOT assign ≥3 to any category with unresolved specific issues
    - Do NOT estimate DfLC score — local content % must be calculated from BOM cost data

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete all 12 categories first, then single review
  on_mandatory_fail: true — any mandatory category (DfS/DfR/DfStd/DfLC) scores ≤2;
    present before proceeding to gate; mandatory revision required
  on_safety_flag: "IMMEDIATE" — DfS scores ≤2; halt; non-negotiable safety design block;
    gate cannot proceed

SAFETY_OVERRIDE: "DfS (Design for Safety) score ≤2 = STOP. Do not proceed to gate regardless of other scores. Safety design is non-negotiable."

SUCCESS_CRITERIA:
  category_coverage: "All 12 DfX categories scored (0 skipped)"
  issue_specificity: "Every score ≤3 has a named issue and a specific fix action (not 'needs improvement')"
  local_content_calculated: "DfLC shows calculated % value from cost data, not just a score"
  scorecard_actionable: "Priority action list has ≤5 items ordered by impact"

FALLBACK_PROTOCOL:
  insufficient_design_detail: "Flag [DFX-PARTIAL]; score categories with sufficient data; mark others
    [INSUFFICIENT-DATA: need X]; document what information is needed to complete scoring"
  dfs_score_boundary_uncertain: "Present each DfS sub-criterion individually; flag uncertainty on
    borderline items; present to human for judgment on final score"
  local_content_data_missing: "Request BOM cost breakdown; cannot calculate DfLC score without cost
    data; mark DfLC as [TBD: BOM needed]; flag as gating item for gate review"
  unknown_error: "SAFE_STATE — output completed categories with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: 12-row scorecard table + priority action list

--- 12 DFX CATEGORIES ---

DfM (Design for Manufacture): standard processes / avoids complex geometry / minimized steps / achievable tolerances
DfA (Design for Assembly): clear sequence / no trapped parts / minimized fasteners / standard sizes / 2-person field assembly
DfMaint (Design for Maintenance): L1 most-likely-failure accessible / LRUs defined / MTBF achievable / MTTR achievable / diagnostics present
DfR (Design for Reliability): FMEA planned / RPN≥100 mitigated / redundancy for safety-critical / fail-safe defined / burn-in plan
DfS (Design for Safety): hazard energy guarded / inadvertent activation prevented / electrical isolation / mechanical stops / TCVN safety addressed
DfErg (Design for Ergonomics): reach envelope 5th-95th percentile VN soldier / ≤7 steps cognitive / readable in sunlight / weight distribution / training time ≤target
DfPV (Design for Production Volume): suitable for {{units/month}} rate / scalable / tooling justified / parallel sub-assembly possible
DfCorr (Design for Corrosion): no dissimilar metal contact without barrier / drainage paths / no moisture traps / C3/C4 treatment / sacrificial anodes where needed
DfTherm (Design for Thermal): heat paths to ambient / thermal stress at joints / electronics within Tmax / thermal interface materials
DfRD (Design for Recycling/Disposal): materials separable / no hazardous waste / % recyclable identified / military disposal protocol
DfStd (Design for Standards): TCVN listed and checked / MIL-STD-810 addressed / MIL-STD-461 if electronic / procurement compliance
DfLC (Design for Local Content):
  | Component | Local? | % of total value |
  Calculate total local content % — Target ≥60%
  Score 5:≥70% | Score 3:60-69% | Score 1:<60%

SCORECARD:
| Category | Score /5 | Pass? | Specific Issue | Fix Action |
|----------|---------|-------|----------------|------------|

AVERAGE: ___/5
PROCEED IF: average ≥3.0 AND DfS/DfR/DfStd/DfLC all ≥3
```

---

### P55 — Design Optimization Review (`/opt`)
**Use when:** After DfX analysis (P25) — iterate on design before finalizing for FMEA and gate
**Why it works:** P&B §7.7 (OCP step O): Between the first embodiment layout and the final FMEA, there should be a deliberate optimization pass. Without it, the design goes to gate with known inefficiencies that could have been resolved. This prompt systematically addresses weight, cost, part count, and performance trade-offs.

```
TASK: Conduct design optimization review for {{product_name}} ({{VN-XXX-XXX}})
  Identify top 5 optimization opportunities across weight, cost, part count, and performance.
  For each: quantify improvement potential and trade-off.
  Return: optimization table + recommended changes + before/after comparison.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3 — post-DfX, pre-FMEA
  design_reference: {{current embodiment layout}}
  dfx_results: {{reference P25 — which categories scored ≤3?}}
  cost_estimate: {{current estimate vs target}}
  weight_estimate: {{current vs target}}
  part_count: {{current total}}
  local_content: {{current % vs 60% target}}

CONSTRAINTS:
  hard_limits:
    - Identify ≥5 optimization opportunities; rank by quantified improvement potential (%, kg, or $)
    - Every optimization must state what gets WORSE — trade-off is mandatory (no free lunches)
    - Optimizations must not degrade [SAFETY-CRITICAL] functions; flag any that approach safety margins
    - Local content must not drop below 60% after all proposed optimizations implemented
    - Flag any optimization with <2% improvement: diminishing returns, may not justify implementation risk
  reject_conditions:
    - DfX results (P25) not provided — cannot target known weak spots without scoring data
    - Current cost, weight, and part count not provided — optimization baseline requires these inputs
    - BOM or design not sufficiently defined — optimization of undefined design is speculative
  prohibited_actions:
    - Do NOT propose optimizations that reduce safety factor on safety-critical components without [SAFETY-TRADE-OFF]
    - Do NOT omit trade-off for any proposed optimization — "no downside" is not an acceptable entry
    - Do NOT rank by implementation ease — rank by quantified impact on cost/weight/function

TOOLS_ALLOWED: ["read_file", "calculate", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete all 5 categories first, then single review
  on_safety_trade_off: true — any optimization flagged [SAFETY-TRADE-OFF]; present individually
    with margin analysis before including in recommendations
  on_safety_flag: "IMMEDIATE" — optimization would reduce safety factor below minimum threshold;
    halt; flag [SAFETY-TRADE-OFF]; do not include in recommendations without human approval

SAFETY_OVERRIDE: "If any optimization reduces safety margin (material downgrade on safety-critical part, removal of redundancy, reduced safety factor) — flag [SAFETY-TRADE-OFF]. Do not implement without explicit approval with margin analysis."

SUCCESS_CRITERIA:
  opportunity_count: "≥5 opportunities identified across ≥3 different categories"
  trade_off_documented: "Every optimization has a named trade-off (not 'none' or blank)"
  quantified_improvement: "Every optimization has %, kg, or $ improvement estimate (not 'significant')"
  before_after_comparison: "Before/after table shows impact on all 5 metrics: weight, cost, parts, DfX, LC"

FALLBACK_PROTOCOL:
  insufficient_dfx_data: "Run DfX analysis (P25) first; optimization targeting requires known weak
    spots. Cannot complete Category 4 (Performance Optimization) without P25 scores."
  no_viable_local_alternatives: "Flag [LOCAL-CONTENT-RISK]; document current import items; propose
    design geometry changes that enable local alternatives rather than direct material swap"
  safety_trade_off_rejected: "Remove optimization from recommendation list; document rejected
    optimization with reason; check if alternative approach achieves same improvement without
    safety compromise"
  unknown_error: "SAFE_STATE — output completed categories with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Optimization opportunity table + recommended actions + before/after summary

--- OPTIMIZATION FRAMEWORK ---

CATEGORY 1: WEIGHT OPTIMIZATION
  Current weight: {{kg}} vs target: {{kg}} — delta: {{kg}} ({{%}})
  Opportunities:
  | Component | Current | Proposed Change | Weight Saved | Trade-off |
  Methods: material substitution (steel→Al), topology (remove low-stress material), consolidation

CATEGORY 2: COST OPTIMIZATION
  Current cost estimate: ${{}} vs target: ${{}} — delta: {{%}}
  Top cost drivers (from P24/BOM):
  | Component | Current Cost | Proposed Change | Saving | Trade-off |
  Methods: material downgrade (where margin allows), process change (casting vs machining), standard parts

CATEGORY 3: PART COUNT REDUCTION
  Current: {{N}} parts → Target: reduce by {{%}}
  Candidates for consolidation:
  | Parts to Combine | Current Count | New Count | Saving | Trade-off |
  Methods: multi-function parts, integral features, adhesive vs fasteners, casting consolidation
  Rule: Every part eliminated = one fewer interface, one fewer failure mode, one fewer QC step

CATEGORY 4: PERFORMANCE OPTIMIZATION
  DfX weak spots (scores ≤3 from P25):
  | DfX Category | Score | Issue | Optimization | New Score |
  Methods: geometry change, feature addition, material upgrade (targeted — not blanket)

CATEGORY 5: LOCAL CONTENT OPTIMIZATION
  Current: {{%}} — target: ≥60%
  Import items with local alternative:
  | Import Item | Import Cost | Local Alternative | Local Cost | Quality Trade-off |

--- OPTIMIZATION DECISION TABLE (top 5) ---

| # | Optimization | Category | Improvement | Trade-off | Net Impact | Implement? |
|---|-------------|---------|------------|-----------|------------|-----------|
| 1 | {{}} | Weight/Cost/Parts/Perf/LC | {{quantified}} | {{what gets worse}} | {{positive/negative}} | HITL decision |
| 2 | ... | ... | ... | ... | ... | |

BEFORE/AFTER SUMMARY:
  | Metric | Before | After (if all implemented) | Target | Status |
  |--------|--------|---------------------------|--------|--------|
  | Weight | {{kg}} | {{kg}} | {{kg}} | ✅/⚠/✗ |
  | Cost | ${{}} | ${{}} | ${{}} | ✅/⚠/✗ |
  | Part count | {{N}} | {{N}} | — | reduced by {{%}} |
  | Local content | {{%}} | {{%}} | ≥60% | ✅/⚠/✗ |
  | DfX average | {{/5}} | {{/5}} | ≥3.0 | ✅/⚠/✗ |
```

---

### P26 — FMEA (Failure Mode & Effects Analysis)
**Use when:** Design complete enough to identify failure modes — before gate review
**Why it works:** Defense systems have lethal failure consequences. FMEA is mandatory, not optional.

```
TASK: Conduct FMEA for {{product_name}} ({{VN-XXX-XXX}})
  For each sub-assembly: identify failure modes, score S×O×D, calculate RPN.
  For all RPN≥100: define mitigation and recalculate.
  Return: FMEA table + summary + open items before gate.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3
  sub_assemblies: {{list from design or BOM}}
  design_reference: {{current design}}
  RPN_critical_threshold: 300 (stop + redesign)
  RPN_high_threshold: 100 (mitigation mandatory)

CONSTRAINTS:
  hard_limits:
    - All sub-assemblies must be addressed — no gaps permitted in coverage
    - All items with Severity ≥8 require individual human review; table entry alone is insufficient
    - Mitigation mandatory for all RPN≥100
    - RPN must be recalculated after every mitigation applied (post-mitigation score is mandatory)
    - Gate condition: 0 open RPN≥300 AND 0 RPN≥100 without documented mitigation
  reject_conditions:
    - Sub-assembly list not provided — cannot assess failure modes without knowing what assemblies exist
    - Design not sufficiently defined to identify failure modes — premature FMEA produces incomplete results
  prohibited_actions:
    - Do NOT continue FMEA past any item with S=10 (death/serious injury) without human review
    - Do NOT assign mitigation as "improve design" without specifying the exact design change
    - Do NOT skip re-scoring after mitigation — post-mitigation RPN is mandatory for gate clearance

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete all sub-assemblies first, then single review
  on_severity_8_plus: true — every failure mode with S≥8; pause and present individually;
    S≥8 items require explicit human review before FMEA continues
  on_safety_flag: "IMMEDIATE" — S=10 detected (death/serious injury); halt FMEA; present
    immediately; do not continue until mitigation approach is approved by human

SAFETY_OVERRIDE: "Any failure mode with S=10 (death/serious injury potential) — STOP. Present immediately. Do not continue FMEA until this item has a mitigation plan approved by me."

SUCCESS_CRITERIA:
  coverage_complete: "All named sub-assemblies have ≥2 failure modes analyzed (0 sub-assemblies skipped)"
  rpn_mitigated: "All RPN≥100 have documented mitigation AND recalculated post-mitigation RPN"
  severity_reviewed: "All S≥8 items have individual review note (not just table entry)"
  gate_clearance: "0 open RPN≥300 AND 0 open RPN≥100 without mitigation"

FALLBACK_PROTOCOL:
  sub_assembly_undefined: "Request sub-assembly list from BOM or design before proceeding.
    Output empty FMEA template with [PENDING: sub-assembly definition] marker."
  mitigation_not_effective: "If mitigated RPN still ≥100: escalate to [REDESIGN-REQUIRED];
    document why mitigation insufficient; present design change options to human"
  s10_item_found: "IMMEDIATE — present: component, failure mode, effect on system.
    Provide 3 candidate mitigations with estimated new RPN. Do not proceed until human
    approves mitigation approach."
  unknown_error: "SAFE_STATE — output completed FMEA rows with [INCOMPLETE] markers;
    flag uncompleted sub-assemblies; await direction"

OUTPUT_FORMAT: FMEA table + mitigation table + summary

--- FMEA FRAMEWORK ---

FMEA TABLE:
| ID | Sub-assembly | Component | Failure Mode | Effect on System | S | Cause | O | Detection Method | D | RPN |

SEVERITY SCALE (S 1-10):
  10: Death or serious injury
  8-9: Product fails completely / mission fails
  6-7: Major performance degradation
  4-5: Moderate degradation, workaround exists
  2-3: Minor / annoying
  1: Negligible

OCCURRENCE SCALE (O 1-10):
  10: Expected in normal service
  8-9: Frequent in service
  6-7: Expected in service life
  4-5: Uncommon
  2-3: Unlikely in service life
  1: Only under extreme abuse

DETECTION SCALE (D 1-10):
  10: No detection possible — hidden failure
  8-9: Requires specialist equipment
  6-7: Requires inspection tool
  4-5: Operator can detect with check
  2-3: Obvious symptom, operator notices
  1: System self-detects and alerts

PRIORITY THRESHOLDS:
  RPN ≥300: CRITICAL — stop and redesign
  RPN 100-299: HIGH — mitigation mandatory before Gate 3
  RPN 50-99: MEDIUM — mitigation recommended
  RPN <50: LOW — accept and monitor

MITIGATION TABLE (for all RPN≥100):
| ID | Mitigation Action | New S | New O | New D | New RPN |

Mitigation preference order:
  1. Design out (change geometry / material / process)
  2. Redundancy (backup system)
  3. Add detection (sensor / indicator / maintenance check)
  4. Reduce occurrence (better material / tighter tolerance)
  5. Reduce severity (fail-safe / energy limiting)

FMEA SUMMARY:
  Total failure modes: N
  RPN≥300 (critical, open): N — {{list}} — [must be 0 before gate]
  RPN 100-299 (high, open): N — {{list}} — [must be 0 before gate]
  All S≥8 individually reviewed: YES / NO
  Open items: {{list any unresolved}}
```

---

### P27 — Phase 3 Gate Review
**Use when:** Embodiment design complete — formal gate to Phase 4 Detail Design
**Why it works:** Explicit scored gate prevents expensive Phase 4 work on an incomplete design.

```
TASK: Conduct Phase 3 Gate Review for {{product_name}} ({{VN-XXX-XXX}})
  Score 6 categories (weighted). Calculate total. Present gate decision options A/B/C/D.
  WAIT for explicit approval before Phase 4 begins.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 3 — gate review
  inputs:
    - Layout design: {{reference}}
    - DfX Analysis (P25): {{reference}}
    - FMEA (P26): {{reference}}
    - Material selections: {{reference}}
  gate_target: weighted total ≥3.0/4.0

CONSTRAINTS:
  hard_limits:
    - Any criterion scoring 0 must be resolved before gate regardless of total score
    - Category C (Risk Management): any open RPN≥300 = auto-REVISE; gate blocked
    - Present all four decision options A/B/C/D — do not pre-select or omit options
    - Gate target: weighted total ≥3.0/4.0
  reject_conditions:
    - FMEA (P26) not completed — Category C cannot be scored
    - DfX analysis (P25) not completed — Category B cannot be scored
    - Layout design review (P23) not completed — Category A cannot be fully scored
  prohibited_actions:
    - Do NOT auto-approve or suggest auto-approve — present scores and WAIT
    - Do NOT proceed to Phase 4 work without explicit human gate decision
    - Do NOT score higher than actual state — score what was done, not what was intended

TOOLS_ALLOWED: ["read_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete all 6 categories first, then single gate decision review
  on_safety_block: true — any [SAFETY-CRITICAL] requirement without verified embodiment;
    flag before scoring begins; present as pre-gate blocker
  on_safety_flag: "IMMEDIATE" — any open FMEA item with S≥8 without approved mitigation;
    present as gate blocker before scoring; gate cannot proceed

SAFETY_OVERRIDE: "If any open FMEA item has S≥8 without approved mitigation — gate decision must be REVISE or CANCEL. Present this as a blocker before proceeding to scoring."

SUCCESS_CRITERIA:
  category_coverage: "All 6 categories scored with supporting evidence cited (document or finding)"
  gate_recommendation: "Clear APPROVE/REVISE/PAUSE/CANCEL recommendation with reasoning"
  blocker_identified: "Any 0-score items explicitly listed as gate blockers before total shown"
  weighted_calculation: "Calculation explicitly shown: 0.25A + 0.25B + 0.20C + 0.15D + 0.10E + 0.05F"

FALLBACK_PROTOCOL:
  missing_gate_input: "Flag [GATE-INPUT-MISSING] for each missing document; score what is available;
    note gate cannot be completed until missing inputs are provided"
  ambiguous_scoring: "Present both score interpretations with supporting reasoning; flag [SCORE-UNCERTAIN];
    await human judgment on which score reflects actual state"
  borderline_gate_score: "If weighted total is 2.8-3.2: present individual category scores;
    highlight improvement path to ≥3.0; present REVISE as default recommendation"
  unknown_error: "SAFE_STATE — output completed categories with [INCOMPLETE] markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: Scored checklist + weighted total + gate decision recommendation

--- GATE CRITERIA (score 0-4 each) ---

Scale: 4=Excellent | 3=Good | 2=Adequate | 1=Barely adequate | 0=Fail (blocks gate)

A. EMBODIMENT COMPLETENESS (weight: 25%)
   - All sub-functions have physical embodiment?
   - All interfaces defined (mech/elec/data/thermal)?
   - All components identified at minimum list level?
   - Layout passes 6 principles review (P23)?
   Score A: ___/4

B. DFX QUALITY (weight: 25%)
   - All 12 DfX categories scored ≥3?
   - DfS / DfR / DfStd / DfLC all ≥3?
   - Local content ≥60% by value?
   - Assembly sequence documented and verified?
   Score B: ___/4

C. RISK MANAGEMENT (weight: 20%)
   - FMEA complete (all sub-assemblies)?
   - All RPN≥100 items have documented mitigations?
   - All S≥8 items individually reviewed?
   - Zero open RPN≥300 items?
   Score C: ___/4

D. MANUFACTURABILITY (weight: 15%)
   - All materials specified with sourcing?
   - All processes within Vietnamese capability?
   - Cost estimate within ±15% of Phase 2 estimate?
   - Lead time realistic (including imports)?
   Score D: ___/4

E. DRAWINGS & DOCUMENTATION (weight: 10%)
   - Assembly drawings ≥80% complete?
   - Can be issued to suppliers for quotation?
   - BOM draft complete?
   - Critical dimensions and tolerances defined?
   Score E: ___/4

F. DEFENSE COMPLIANCE (weight: 5%)
   - MIL-STD-810 environmental requirements addressed?
   - TCVN safety requirements addressed?
   - HITL checkpoints defined for safety-critical functions?
   - Design decisions documented with rationale?
   Score F: ___/4

WEIGHTED TOTAL:
  = 0.25A + 0.25B + 0.20C + 0.15D + 0.10E + 0.05F
  Target: ≥3.0/4.0

GATE DECISION OPTIONS:
  A) ✅ APPROVE (≥3.0, no 0-scores) — proceed to Phase 4 Detail Design
  B) 🔄 REVISE (2.0-2.9) — address items, re-review in {{days}}
  C) ⏸️ PAUSE — external constraints (procurement, funding, regulatory)
  D) ❌ CANCEL — fundamental design problem, return to Phase 2

PRESENT scores + total + recommendation. WAIT. Do NOT proceed without explicit response.
```

---

## CAPTURE PROTOCOL

```
After Phase 3 Gate:
Product: {{VN-XXX-XXX}}
Gate 3 score: ___/4.0
Open FMEA items at gate: N
DfX weakest category: {{which one + score}}
Surprise finding: {{something not anticipated in Phase 2}}
Most costly revision: {{what had to change and why}}
```
