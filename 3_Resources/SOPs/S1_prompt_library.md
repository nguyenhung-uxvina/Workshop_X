---
skill: S1 — AI Literacy
type: prompt-library
version: 5.1
created: 2026-02-20
updated: 2026-03-07
capture-rule: After every session, add 1 prompt that worked. Delete prompts unused for 30 days.
schema: v3.0 (Workshop X Enhanced)
changelog: |
  v4.0 — P45-P47 (software dev), P49 (governance) added from Workshop X gap analysis
  v5.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to P02/P03/P04/P05/P06/P07/P08;
          P01/P44/P45/P46/P47/P49 already v3.0 — unchanged (2026-03-04)
  v5.1 — Maritime/LARS domain expansion (2026-03-07):
          P03 updated with maritime design context (hull, LARS, stability);
          P08 updated with shipyard procurement context;
          P50 (Stability Check), P51 (Weight Estimate), P52 (SOP Update),
          P53 (ICD Generation) added — all v3.0 schema
---

# S1 Prompt Library — Claude Code Delegation Templates

> **Schema v3.0 — Workshop X Enhanced (2026-02-21)**
> **Required (6):** `TASK` · `CONTEXT` · `CONSTRAINTS` (hard_limits + reject_conditions + prohibited_actions) · `TOOLS_ALLOWED` · `HITL_CHECKPOINT` (trigger matrix) · `SAFETY_OVERRIDE`
> **Recommended (2):** `SUCCESS_CRITERIA` · `FALLBACK_PROTOCOL`
> **Optional (7):** `OUTPUT_FORMAT` · `ITERATION_MAX` · `UNCERTAINTY_FLAG` · `EVIDENCE_REQUIRED` · `TIMEOUT` · `VERSION` · `LOG_LEVEL`

---

## PROMPT INDEX

| # | Name | Domain | Use When |
|---|------|--------|----------|
| P01 | Structured Defense Task Delegation | Any | Master template — all defense AI tasks |
| P02 | Defense AI QC Review Gate | Any product | Before accepting AI-generated technical content |
| P03 | Engineering Document Generation | Documentation | Specs, BOMs, requirements |
| P04 | TCVN Compliance Check | S5/QC | Before submitting any spec |
| P05 | Physics Plausibility Check | Critical QC | Ballistics, acoustics, optics outputs |
| P06 | Context Window Scoping | Any long task | Multi-file or multi-step tasks |
| P07 | Sensor Fusion Design Review | IRONMESH | VN-LOMAH, VN-CAM, VN-SMASH integration |
| P08 | Procurement Narrative Draft | B-NS support | Military demo and briefing materials |
| P44 | Runtime Edge AI Delegation | Edge inference | Delegate task to edge AI (VN-CAM, VN-LOMAH) — Workshop X pattern |
| P45 | Boilerplate Code Generation | Software dev | Routine code modules — config, data models, drivers, API scaffolds |
| P46 | Algorithm Implementation | Software dev | Known algorithm from paper/spec — TDOA, Kalman, image pipeline |
| P47 | PLAUSIBLE Code Review Protocol | Code QC | 9-check defense-grade code review before integration |
| P49 | Governance Document Generation | S5/Deployment | System limitations, accountability chains, audit trail specs |
| P50 | Preliminary Stability Check | Maritime | Parametric GM/trim check from weight estimate |
| P51 | Weight Estimate (Bottom-Up) | Maritime/Mech | Bottom-up weight breakdown for vessel or vehicle |
| P52 | SOP Update from Design Decisions | Any | Batch update SOPs when Phase 2+ decisions change baseline |
| P53 | ICD Template Generation | Integration | Create/update Interface Control Document for OEM data collection |

---

## FIELD SCHEMA (v3.0 — Workshop X Enhanced)

```
REQUIRED (6):
  TASK:             Specific action verb + specific object. NOT vague.
  CONTEXT:          Domain parameters — product, environment, standard
  CONSTRAINTS:      3 sub-types (v3.0):
    hard_limits:         Numeric thresholds, ranges, maximums
    reject_conditions:   When to abort/refuse entirely []
    prohibited_actions:  What AI must NEVER do during execution []
  TOOLS_ALLOWED:    Explicit whitelist — only listed tools can be used
  HITL_CHECKPOINT:  Trigger matrix (v3.0):
    { condition: true/false/"IMMEDIATE" }
    Reason about when NOT to trigger (operator fatigue)
  SAFETY_OVERRIDE:  Critical stop condition — always flag, never override

RECOMMENDED (2 — new in v3.0):
  SUCCESS_CRITERIA:   { metric: "operator value" } — what "good output" looks like
  FALLBACK_PROTOCOL:  { failure_mode: "specific_response" } — per-failure-mode mapping
    MUST include: unknown_error → SAFE_STATE

OPTIONAL (7):
  OUTPUT_FORMAT:    Table / Markdown / JSON / Report
  ITERATION_MAX:    Max retry cycles before escalating to human
  UNCERTAINTY_FLAG: true = tag every unverified value as [ASSUMPTION]
  EVIDENCE_REQUIRED:true = cite source for every factual claim
  TIMEOUT:          Per-task timeout in seconds
  VERSION:          Software/prompt version for traceability
  LOG_LEVEL:        minimal / standard / detailed (audit trail depth)
```

---

## TEMPLATES

---

### P01 — Structured Defense Task Delegation (v3.0)
**Use when:** Delegating any engineering or analysis task to Claude Code or edge AI
**Why it works:** Forces precision upfront. 3-type CONSTRAINTS prevent both false confidence and silent failures. SUCCESS_CRITERIA define "good" separately from "not-rejected". FALLBACK_PROTOCOL eliminates undefined failure states.

```
TASK: {{specific_action_verb}} {{specific_object}}
  ✓ Example: "Score marksmanship hits on target #3 during qualification exercise"
  ✗ NOT: "Handle the training data"

CONTEXT:
  product: {{VN-LOMAH / VN-CAM / VN-SMASH / etc.}}
  weapon_type: {{e.g., 12.7mm HMG}}
  range_meters: {{e.g., 800}}
  target_spec: {{e.g., 1x2m NATO E-type}}
  exercise_type: {{qualification / training / zeroing}}
  scoring_standard: {{TCVN_RANGE_2026_v2 / MIL-STD-XXX}}
  environmental: {
    wind_kph: {{value}},
    wind_direction: {{crosswind_left / headwind / etc.}},
    lighting: {{clear / overcast / night}},
    sea_state: {{null for land range}}
  }

CONSTRAINTS:
  hard_limits:
    confidence_floor: {{e.g., 0.85}}        — below this → route to human
    false_positive_max: {{e.g., 0.02}}       — max false positive rate
    processing_latency_max_ms: {{e.g., 100}} — must complete within limit
    output_length: {{lines / table rows}}
  reject_conditions: [
    "{{condition that aborts processing — e.g., no_target_in_frame}}",
    "{{confidence_below_floor}}",
    "{{frame_blur_exceeds_threshold}}"
  ]
  prohibited_actions: [
    "modify_scoring_standard",    — NEVER let AI change rules
    "override_safety_flags",      — NEVER let AI bypass safety
    "communicate_to_shooter",     — NEVER let AI talk to end user directly
    "access_other_target_data"    — isolation between targets/tasks
  ]

TOOLS_ALLOWED: ["{{tool_1}}", "{{tool_2}}"]
  — Whitelist, not blacklist. Unlisted tools = forbidden.

HITL_CHECKPOINT:
  per_output: {{false — prevent operator fatigue on high-volume tasks}}
  on_conflict: {{true — when multiple sources disagree}}
  on_low_confidence: {{true — below confidence_floor}}
  on_completion: {{true — summary review before final acceptance}}
  on_safety_flag: "IMMEDIATE"  — drop everything, alert officer

SAFETY_OVERRIDE: "Always flag if {{safety_critical_condition}}. Stop and report — do not proceed."

SUCCESS_CRITERIA:
  {{primary_metric}}: "{{operator value — e.g., >= 0.95}}"
  {{secondary_metric}}: "{{operator value — e.g., <= 0.02}}"
  {{consistency_metric}}: "{{e.g., score matches manual count within ±1}}"

FALLBACK_PROTOCOL:
  {{failure_mode_1}}: "{{specific_response}}"
  {{failure_mode_2}}: "{{specific_response}}"
  {{partial_degradation}}: "{{continue with reduced capability + flag}}"
  unknown_error: "SAFE_STATE — {{freeze outputs, alert operator}}"

OUTPUT_FORMAT: {{table / markdown / JSON}}
UNCERTAINTY_FLAG: true
TIMEOUT: {{seconds}}
VERSION: "{{exact software/prompt version for traceability}}"
LOG_LEVEL: {{detailed — full audit trail for defense}}
```

**Learned variations:**
- Pure analysis (no tool calls): remove `TOOLS_ALLOWED`, add `EVIDENCE_REQUIRED: true`
- Iterative design tasks: add `ITERATION_MAX: 3`
- Edge inference (real-time): add TIMEOUT + max_retries, set per_output HITL to false
- Design-time Claude delegation: SUCCESS_CRITERIA = document quality metrics (≥80% quantified, etc.)

---

### P02 — Defense AI QC Review Gate
**Use when:** Before accepting ANY AI-generated technical content
**Why it works:** Converts S3 (9/10 critical reasoning) into automated pre-filter. Catches 80% of errors before manual review.

```
TASK: Run QC gate on AI-generated output for {{product_name}}
  Check for physics errors, standard non-compliance, and safety flags.
  Return PASS / REVISE / REJECT with specific findings.

CONTEXT:
  product: {{product_name}}
  document_type: {{spec / calculation / design / test_plan}}
  applicable_standard: {{TCVN_XX / MIL-STD-XXX}}
  operating_environment: {{Vietnam coastal / jungle / urban}}

CONSTRAINTS:
  hard_limits:
    - Check sequence: sequential 1→5 — stop at first REJECT, report all issues found before stop
    - confidence_max_accept: 0.90 — flag any AI confidence >90% under non-standard conditions
    - Report format: one line per check + OVERALL verdict (not narrative)
  reject_conditions:
    - Document type not provided — cannot run QC without knowing what kind of output is being reviewed
    - Applicable standard not specified — CHECK 2 (standard compliance) cannot be run
  prohibited_actions:
    - Do NOT skip any of the 5 checks — partial QC is invalid
    - Do NOT auto-approve based on high confidence score alone
    - Do NOT override SAFETY_OVERRIDE with any confidence-based reasoning

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — run all 5 checks first, then present full report
  on_any_reject: true — any single CHECK returns REJECT; pause, present finding, wait for decision
  on_safety_flag: "IMMEDIATE" — ROE conflict, weapons range exceedance, or IFF ambiguity detected;
    stop immediately; flag and escalate; never auto-proceed

SAFETY_OVERRIDE: "If any ROE conflict, weapons range exceedance, or IFF ambiguity detected — STOP immediately. Flag and escalate. Never auto-proceed."

SUCCESS_CRITERIA:
  check_completeness: "All 5 checks assessed (0 skipped)"
  finding_specificity: "Every REVISE/REJECT cites specific issue in the output being reviewed"
  verdict_clarity: "OVERALL verdict (ACCEPT/REVISE/REJECT) with unambiguous reasoning"
  safety_catch: "Any safety-relevant content triggers CHECK 4 regardless of document type"

FALLBACK_PROTOCOL:
  standard_not_in_knowledge: "Flag [STANDARD-UNKNOWN: verify clause manually]; continue remaining checks; note limitation in report"
  document_type_ambiguous: "Apply most rigorous applicable check set; flag [DOCUMENT-TYPE-ASSUMED: verify]"
  physics_domain_outside_scope: "Flag [PHYSICS-CHECK-LIMITED: specialist required]; do not guess on domain-specific physics"
  unknown_error: "SAFE_STATE — output partial QC report with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Structured report — one line per check + OVERALL verdict

--- EXECUTE THESE CHECKS IN ORDER ---

CHECK 1: PHYSICS PLAUSIBILITY
  - Are all numerical values within physically plausible ranges?
  - Specific: {{range_limit / velocity_limit / energy_limit for this product}}
  - Flag if: value exceeds theoretical maximum OR is suspiciously round

CHECK 2: STANDARD COMPLIANCE
  - Does output comply with {{TCVN_XX / MIL-STD-XXX}}?
  - Flag if: standard cited but not verified, OR required standard absent

CHECK 3: ENVIRONMENTAL VALIDITY
  - Are Vietnam operating conditions accounted for? (heat, humidity, salt, rain)
  - Flag if: output assumes ideal/lab conditions

CHECK 4: ROE / SAFETY FLAG
  - Does output involve engagement decisions, target classification, weapon parameters?
  - If YES: flag for human review regardless of confidence score
  - Hard stop if: output recommends ENGAGE without IFF confirmation

CHECK 5: CONFIDENCE CALIBRATION
  - Is AI confidence score justified by evidence quality?
  - Flag if: confidence >90% AND conditions are non-standard

REPORT FORMAT:
  Check 1: [PASS/REVISE/REJECT] — {{reason}}
  Check 2: [PASS/REVISE/REJECT] — {{reason}}
  Check 3: [PASS/REVISE/REJECT] — {{reason}}
  Check 4: [PASS/REVISE/REJECT] — {{reason}}
  Check 5: [PASS/REVISE/REJECT] — {{reason}}
  OVERALL: [ACCEPT / REVISE / REJECT]
  If REVISE: {{specific corrections needed}}
  If REJECT: {{which check failed and exact reason}}
```

---

### P03 — Engineering Document Generation
**Use when:** Generating requirements, specs, BOMs, system descriptions
**Why it works:** `UNCERTAINTY_FLAG` and `must_cite` prevent hallucinated parameters.

```
TASK: Generate {{document_type}} for {{product_name}}, Phase {{1/2/3}}
  Sections to include: {{list}}
  Sections to exclude: {{list}}

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: {{1 / 2 / 3}}
  framework: Pahl & Beitz VDI 2221
  applicable_standards: {{TCVN_XX, MIL-STD-XXX}}
  local_content_target: ≥60% by value
  domain: {{land_range / maritime / airborne}}
  # Maritime-specific (if domain = maritime):
  vessel_type: {{work boat / patrol / RIB}}
  hull_material: {{aluminum 5083 / steel / FRP}}
  classification_society: {{VR / DNV / Lloyd's / none}}
  sea_state_design: {{SS 2 / SS 3 / SS 4}}

CONSTRAINTS:
  hard_limits:
    - Quantification target: ≥80% of requirements must have measurable acceptance criteria
    - Every technical parameter must have a traceable source (no unsourced values)
    - Output format: Markdown with YAML frontmatter (project, phase, type, version, created, status)
  reject_conditions:
    - Phase not specified — document structure changes significantly by phase; cannot proceed
    - Product code (VN-XXX-XXX) not provided — frontmatter and context cannot be completed
    - Applicable standards not listed — standards compliance section cannot be populated
  prohibited_actions:
    - Do NOT use forbidden terms: "adequate", "sufficient", "good", "robust" — replace with numbers
    - Do NOT write a safety-critical requirement without [SAFETY-CRITICAL] tag
    - Do NOT write to disk without presenting draft for human review first

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_output: false — draft complete document first
  on_completion: true — present full draft before writing to disk; document quality affects all downstream phases
  on_safety_flag: "IMMEDIATE" — any unknown safety-critical parameter; do NOT estimate; flag immediately;
    write [UNKNOWN: requires verification from {{source}}]

SAFETY_OVERRIDE: "If any safety-critical parameter is unknown — do NOT estimate. Write [UNKNOWN: requires verification from {{source}}] and flag."

SUCCESS_CRITERIA:
  quantification_rate: "≥80% of requirements have measurable acceptance criteria (A/I/T/D method column)"
  parameter_citation: "100% of technical parameters have traceable source (0 unsourced values)"
  safety_tagging: "All life-safety requirements tagged [SAFETY-CRITICAL]"
  structure_completeness: "All requested sections populated; none missing or skipped"

FALLBACK_PROTOCOL:
  unknown_parameter: "Write [UNKNOWN: requires verification from {{source}}]; never estimate; flag as open item"
  standard_not_available: "Write [STANDARD-TBD: clause needed from {{standard name}}]; do not fabricate clause numbers"
  insufficient_context: "List specific questions needed to complete each incomplete section; do not guess"
  unknown_error: "SAFE_STATE — output partial document with [INCOMPLETE: reason] markers; halt; await direction"

OUTPUT_FORMAT: Markdown with YAML frontmatter (project, phase, type, version, created, status)
UNCERTAINTY_FLAG: true  — tag every unverified value as [ASSUMPTION: source needed]
EVIDENCE_REQUIRED: true — cite source for every technical parameter
```

**Learned variations:**
- Maritime design docs: add `data_confidence` frontmatter field (HIGH/MEDIUM/LOW + L1-L5 breakdown)
- Weight estimates: add `changelog` with Author column (AI/Human) per Orchestration Design protocol
- ICD templates: bilingual (EN + VN) with parameter codes preserved across translations
- Phase 2 docs: include benchmark comparison table (reference design vs. VN design)

---

### P04 — TCVN Compliance Check
**Use when:** Before submitting any product specification or safety assessment
**Why it works:** Forces explicit standard citation. AI knows TCVN at ~7/10 — this prompt catches the 30% it would otherwise guess.

```
TASK: Review {{document_name}} against Vietnamese technical standards for {{product_name}}
  Return compliance matrix: section-by-section Compliant / Gap / Unknown / Conflict

CONTEXT:
  product: {{product_name}} — {{VN-XXX-XXX}}
  document_type: {{spec / test_plan / safety_assessment / BOM}}
  primary_standard: {{TCVN_XXXX:YYYY}}
  secondary_standard: {{MIL-STD equivalent if applicable}}
  procurement_context: Vietnamese Ministry of Defence requirements

CONSTRAINTS:
  hard_limits:
    - Use [UNKNOWN] for any standard not verified — never assume compliance
    - Top 3 procurement-blocking gaps must be explicitly highlighted
    - Output: compliance matrix table + summary paragraph (not narrative only)
  reject_conditions:
    - Primary standard not specified — cannot check compliance without knowing which standard applies
    - Document not provided or described — cannot check what isn't presented
  prohibited_actions:
    - Do NOT assume compliance for any section where standard is not explicitly verified
    - Do NOT fabricate TCVN clause numbers — use [TCVN-UNKNOWN: verify] if clause is uncertain
    - Do NOT soften a CONFLICT finding to GAP — report what was found

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full matrix first
  on_conflict: true — any CONFLICT found (document contradicts standard); pause before continuing
  on_safety_flag: "IMMEDIATE" — any safety-critical section shows GAP or CONFLICT; flag [SAFETY-GAP];
    halt; do not mark as compliant under any assumption

SAFETY_OVERRIDE: "If any safety-critical section shows GAP or CONFLICT — flag as [SAFETY-GAP]. Do not mark as compliant under any assumption."

SUCCESS_CRITERIA:
  coverage_completeness: "Every document section has a compliance status (no blanks)"
  unknown_minimized: "All [UNKNOWN] items include a note on how to verify (not just flagged)"
  priority_identified: "Top 3 procurement-blocking gaps explicitly named with section reference"
  standard_traceability: "Every compliance claim cites specific standard clause or [TCVN-UNKNOWN]"

FALLBACK_PROTOCOL:
  tcvn_clause_not_in_knowledge: "Flag [TCVN-UNKNOWN: requires verification]; proceed with remaining sections; note as gating item for procurement submission"
  multiple_standards_conflict: "Present both conflicting requirements; flag [STANDARD-CONFLICT]; await human resolution before proceeding"
  document_section_unclear: "Flag [SECTION-AMBIGUOUS]; note which interpretation was used; recommend clarification before submission"
  unknown_error: "SAFE_STATE — output completed rows with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT:
  Table: Section | Standard Requirement | Document Status | Gap/Action
  Summary: X% compliant, Y gaps, Z unknowns
  Priority gaps: top 3 blocking procurement approval
```

---

### P05 — Physics Plausibility Check
**Use when:** AI has produced ballistics, acoustics, optics, or structural calculations
**Why it works:** AI confidently produces wrong numbers. Self-verification against first principles catches the most dangerous errors.

```
TASK: Verify physical plausibility of {{calculation_type}} for {{product_name}}
  Run 5 verification steps. Report PASS/FAIL/UNCERTAIN with reason for each.
  If FAIL: provide correct calculation.

CONTEXT:
  product: {{VN-SMASH / VN-LOMAH / VN-CAM / etc.}}
  physics_domain: {{ballistics / acoustics / optics / structural}}
  operating_environment: {{sea / land / airborne}}
  input_values: {{paste AI output to be verified}}

CONSTRAINTS:
  hard_limits:
    - All 5 checks must run — partial check is invalid
    - If FAIL found: provide correct calculation showing the error (not just flag)
    - UNCERTAIN on safety-critical values: treat as potential FAIL; escalate
  reject_conditions:
    - Input values not provided — cannot check plausibility without numbers to verify
    - Physics domain not specified — check criteria differ by domain; cannot proceed
  prohibited_actions:
    - Do NOT rate UNCERTAIN on safety-critical values — escalate to potential FAIL
    - Do NOT accept values that violate conservation laws regardless of source confidence
    - Do NOT skip environmental adjustment check (Check 5) for Vietnam operating conditions

TOOLS_ALLOWED: ["calculate", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete all 5 checks first
  on_any_fail: true — any CHECK returns FAIL; pause, present correct calculation, wait for decision
  on_safety_flag: "IMMEDIATE" — calculation relates to weapons engagement parameters or safety margins;
    any UNCERTAIN becomes potential FAIL; halt

SAFETY_OVERRIDE: "If calculation relates to weapons engagement parameters or safety margins — flag every UNCERTAIN as potential FAIL. Do not accept partial confidence on safety-critical values."

SUCCESS_CRITERIA:
  check_coverage: "All 5 checks assessed (0 skipped)"
  correction_provided: "Every FAIL has correct calculation shown (not just flagged)"
  confidence_calibrated: "OVERALL confidence (LOW/MEDIUM/HIGH) justified with specific evidence"
  environmental_addressed: "Vietnam conditions (25-45°C, 40-100% humidity, salt air) explicitly addressed in Check 5"

FALLBACK_PROTOCOL:
  reference_value_unavailable: "State what reference value is needed; provide theoretical range from first principles; flag [ESTIMATE: reference needed]"
  physics_domain_edge_case: "Flag [PHYSICS-UNCERTAIN: specialist check recommended]; state the specific uncertainty; do not guess"
  calculation_exceeds_scope: "Flag [OUT-OF-SCOPE]; define what check CAN be done; state what requires specialist review"
  unknown_error: "SAFE_STATE — output completed checks with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: One line per check + OVERALL confidence rating

--- EXECUTE CHECKS ---

CHECK 1: UNIT CONSISTENCY — all units match, conversions correct
CHECK 2: ORDER OF MAGNITUDE — result in right ballpark for this class of system
CHECK 3: BOUNDARY CONDITIONS — min/max inputs produce physical results
CHECK 4: ENERGY/MOMENTUM CONSERVATION — no conservation law violated
CHECK 5: ENVIRONMENTAL ADJUSTMENT — {{sea state/humidity/temperature}} accounted for

REPORT:
  Each check: PASS / FAIL / UNCERTAIN + reason
  If FAIL: correct calculation shown
  If UNCERTAIN: what additional data is needed
  OVERALL confidence: LOW / MEDIUM / HIGH + justification
```

---

### P06 — Context Window Scoping
**Use when:** Task involves multiple large files or multi-step workflows
**Why it works:** Prevents mid-task context overflow. Forces upfront chunking decision.

```
TASK: Scope {{task_description}} to fit within context limits
  Recommend chunking strategy. Present options A/B/C. Wait for my selection.

CONTEXT:
  files_involved: {{list all files}}
  estimated_total_length: {{rough estimate}}
  number_of_steps: {{N}}
  checkpoint_format: {{where to save intermediate results}}

CONSTRAINTS:
  hard_limits:
    - Maximum single chunk: 3-4 large files or equivalent
    - Intermediate save required: true — save outputs between chunks, not only at end
    - Present A/B/C options before starting; wait for human selection
  reject_conditions:
    - No files or task listed — cannot scope without knowing what needs to be processed
    - No checkpoint format specified — cannot plan intermediate saves without knowing where
  prohibited_actions:
    - Do NOT start processing before presenting and getting approval for chunking plan
    - Do NOT attempt all-at-once if estimated total exceeds safe context limit
    - Do NOT lose state mid-task without saving a checkpoint

TOOLS_ALLOWED: ["read_file", "write_file", "list_files"]

HITL_CHECKPOINT:
  per_output: false — present options table, then wait
  on_plan_complete: true — present A/B/C options and wait for human selection before any processing begins
  on_safety_flag: "IMMEDIATE" — context near limit mid-task; stop immediately; save state; report progress

SAFETY_OVERRIDE: "If context appears near limit mid-task — STOP. Save current state. Report progress. Request guidance before continuing."

SUCCESS_CRITERIA:
  options_presented: "A/B/C options with clear trade-offs before any processing starts"
  checkpoint_defined: "Intermediate save points specified for multi-chunk approach"
  risk_communicated: "Context overflow risk explicitly stated for option A (all at once)"
  human_decision: "Human selection confirmed before processing begins"

FALLBACK_PROTOCOL:
  context_overflow_mid_task: "STOP — save current state to file; note stopping point; report progress achieved; request resume instruction"
  file_list_too_large: "Split into logical groups; present revised chunking plan; await approval before proceeding"
  checkpoint_format_unclear: "Ask specifically: 'Where should I save intermediate results?'; do not guess or skip"
  unknown_error: "SAFE_STATE — save any output produced to date; document task state; await direction"

OUTPUT_FORMAT: Option table (A/B/C) with trade-offs

OPTION ANALYSIS:
  A) Process all at once — risk: {{high/low}} — suitable if: {{condition}}
  B) Chunk by {{logical_division}} — N chunks — manageable: {{yes/no}}
  C) Key excerpts only — which sections are truly necessary?
```

---

### P07 — Sensor Fusion Design Review
**Use when:** Designing or reviewing IRONMESH subsystem integration
**Why it works:** Forces explicit discrepancy and failure mode treatment — the most common failure points in fusion systems.

```
TASK: Review sensor fusion design for IRONMESH {{subsystem_name}}
  Check discrepancy handling, failure modes, timing, confidence aggregation, and conditional edges.
  Return checklist results + updated design spec.

CONTEXT:
  subsystem: {{IRONMESH RANGE / CORTEX / specific integration}}
  sensor_primary: {{sensor_1}} — measures {{measurement_1}}
  sensor_secondary: {{sensor_2}} — measures {{measurement_2}}
  sensor_optional: {{sensor_3}} — measures {{measurement_3}}
  acceptable_disagreement_threshold: {{value + units}}
  min_fusion_confidence: {{threshold for automated output}}

CONSTRAINTS:
  hard_limits:
    - Any count mismatch between sensors: HITL review required — not auto-resolve (non-negotiable)
    - Timing skew max: {{value_ms}} — must be specified; cannot review timing without threshold
    - Fallback required for every sensor dropout — explicit fallback is mandatory
  reject_conditions:
    - No fallback defined for any sensor — fusion design cannot be approved with undefined dropout behavior
    - Timing alignment unspecified — cannot review timing behavior
    - Subsystem specification not provided — cannot review integration without knowing what is being integrated
  prohibited_actions:
    - Do NOT auto-resolve sensor discrepancy — discrepancy is always a HITL trigger
    - Do NOT guess on architecture decisions when design intent is unclear — flag and wait
    - Do NOT approve a fusion design without checking all 5 checklist items

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete all 5 checklist items, then present
  on_architecture_ambiguity: true — if unclear how discrepancy is resolved or where module fits; flag and wait
  on_safety_flag: "IMMEDIATE" — safety_fan_violation or friendly-fire risk detected in any conditional edge;
    stop; escalate immediately; never auto-resolve safety routing

SAFETY_OVERRIDE: "If safety_fan_violation or friendly-fire risk detected in any conditional edge — STOP. Escalate immediately. Never auto-resolve safety routing."

SUCCESS_CRITERIA:
  checklist_coverage: "All 5 items assessed: discrepancy handling, failure modes, timing, confidence, conditional edges"
  fallback_completeness: "Every sensor has explicit fallback defined for its dropout scenario"
  discrepancy_rule_explicit: "Discrepancy threshold AND HITL trigger condition clearly defined"
  conditional_edges_listed: "All IF→THEN rules for automated actions enumerated (no implicit actions)"

FALLBACK_PROTOCOL:
  subsystem_spec_missing: "List specific spec sections needed before review can proceed; do not guess architecture"
  discrepancy_threshold_unspecified: "Flag [THRESHOLD-UNDEFINED]; recommend conservative default; note this is required before deployment"
  conditional_edge_incomplete: "Flag [CONDITIONAL-INCOMPLETE: missing case]; list known missing cases; recommend exhaustive enumeration review"
  unknown_error: "SAFE_STATE — output completed checklist items with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Checklist results table + updated design spec section

--- REVIEW CHECKLIST ---

1. DISCREPANCY HANDLING
   - What happens when primary ≠ secondary?
   - Acceptable threshold defined? HITL trigger defined?

2. FAILURE MODE ANALYSIS
   - Fallback if primary drops: {{}}
   - Fallback if secondary drops: {{}}
   - Minimum viable configuration (partial sensor set)?

3. TIMING ALIGNMENT
   - All streams time-synchronized?
   - Skew >{{threshold_ms}} → what happens?

4. CONFIDENCE AGGREGATION
   - Formula: {{weighted_average / Bayesian / min / custom}}
   - Min acceptable fusion confidence: {{threshold}}

5. CONDITIONAL EDGES (IF → THEN rules — list all)
   - IF {{condition}} → THEN {{automated action}}
   - IF {{condition}} → THEN {{escalate to human}}
```

---

### P08 — Procurement Narrative Draft
**Use when:** Preparing any military-facing communication or shipyard/supplier briefing
**Why it works:** Prevents over-technical or promotional language. Feynman test ensures a non-technical officer can brief it accurately. Shipyard variant ensures design intent is communicated without over-specifying.

```
TASK: Draft {{document_type}} for {{product_name}}
  Target audience: {{Vietnamese Army / Navy / Air Force}} {{rank/role}}
  Length: {{30-second verbal / 1-page / 5-slide brief}}

CONTEXT:
  product: {{VN-XXX-XXX}}
  audience_technical_level: {{low / medium / high}}
  audience_decision_authority: {{decision_maker / technical_evaluator / budget_holder}}
  audience_primary_concern: {{cost / reliability / local_content / training_effectiveness}}
  call_to_action: {{schedule_demo / request_proposal / approve_trial}}
  # Shipyard/supplier variant (if applicable):
  procurement_type: {{new_build / modification / equipment_supply}}
  shipyard_context: {{local_VN / regional / international}}
  key_specs_to_communicate: {{LOA, displacement, speed, payload, LARS type}}

CONSTRAINTS:
  hard_limits:
    - Required elements: problem_statement + 3 quantified performance metrics + local_content callout + call_to_action
    - All 3 performance metrics must have traceable source
    - Tone: professional + factual — zero superlatives
    - Required phrase: "operated and maintained by Vietnamese personnel" (non-negotiable)
  reject_conditions:
    - Product performance data not provided — cannot draft quantified narrative with no numbers
    - Target audience not specified — tone and technical depth change significantly by role/rank
    - Call to action not defined — narrative cannot close without knowing desired response
  prohibited_actions:
    - Do NOT use forbidden terms: "AI-powered", "machine learning", "neural network", "revolutionary", "cutting-edge"
    - Do NOT use language implying autonomous engagement capability
    - Do NOT include classified specs, actual range data from live exercises, or unit-specific deployment info
    - Do NOT release for external use without human review and sign-off

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full draft first
  on_completion: true — present for review before ANY external use; all procurement narratives require sign-off
  on_safety_flag: "IMMEDIATE" — draft includes classified specifications or restricted data; halt; flag immediately

SAFETY_OVERRIDE: "Do not include any classified specifications, actual range data from live exercises, or unit-specific deployment information without explicit clearance."

SUCCESS_CRITERIA:
  feynman_test: "A non-technical officer could brief this accurately to their commander (no misrepresentation)"
  metric_sourced: "All 3 performance metrics have traceable source (or [DATA PENDING] with explicit gap noted)"
  required_elements: "All 4 required elements present: problem + metrics×3 + local content + call to action"
  forbidden_terms_absent: "Zero forbidden terms in final draft"

FALLBACK_PROTOCOL:
  performance_data_unavailable: "Use [DATA PENDING] placeholder; note which metrics need source before external use; do not fabricate"
  audience_profile_unclear: "Default to lowest technical level (NCO/operator); flag [AUDIENCE-ASSUMED]; recommend verification"
  feynman_test_fails: "Identify specific unclear section; simplify one level; re-run test; repeat until pass"
  unknown_error: "SAFE_STATE — output partial draft with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: {{verbal script / 1-page memo / slide outline}}
EVIDENCE_REQUIRED: true — all 3 performance metrics must have source

FEYNMAN TEST (run after drafting):
  Q: Could a non-technical officer brief this to their commander without misrepresenting the system?
  If NO: Simplify the unclear section. Repeat until YES.
```

**Learned variations:**
- Shipyard RFQ: replace call_to_action with "quote_request"; add key specs table (LOA, beam, displacement, speed, payload); include delivery timeline
- Navy procurement: add "operated and maintained by Vietnamese personnel" + local content % + TCVN compliance statement
- Maritime platform: emphasize sea state rating, crew size, operational endurance — not electronics specs
- Supplier ICD cover letter: brief context of what data is needed + why + timeline for response

---

### P44 — Runtime Edge AI Delegation (Workshop X Pattern)
**Use when:** Delegating a real-time inference task to edge AI (VN-CAM, VN-LOMAH, CORTEX) during range operations
**Why it works:** Codifies the Workshop X delegation pattern — every runtime AI task gets explicit boundaries, per-failure-mode fallbacks, quantified success criteria, and a mandatory safe state. Prevents the 3 deadliest edge failures: silent data loss, unconstrained AI decisions, and undefined error states.

> **Origin:** VN-CAM bullet impact detection task, 12.7mm qualification exercise, 2026-02-21
> **Schema:** v3.0 full — all 6 required + 2 recommended + 5 optional fields

```
TASK: {{specific_detection_or_scoring_action}} on {{target_id}}
  ✓ "Detect and locate bullet impacts on Target #3"
  ✗ "Process the camera feed" (too vague — what decision, what output?)

CONTEXT:
  product: {{VN-CAM / VN-LOMAH / CORTEX subsystem}}
  weapon: {{e.g., 12.7mm DShK HMG}}
  range_meters: {{e.g., 800}}
  target_spec: {{e.g., 1x2m NATO E-type silhouette}}
  exercise_type: {{qualification / training / zeroing / system_test}}
  scoring_standard: {{TCVN_RANGE_2026_v2}}
  environmental: {
    wind_kph: {{value}},
    wind_direction: {{crosswind_left / headwind / tailwind / calm}},
    lighting: {{clear_0900h / overcast_1400h / dusk / night_IR}},
    sea_state: {{null for land range / 1-5 scale for naval}}
  }

CONSTRAINTS:
  hard_limits:
    confidence_floor: 0.85           — below this → route to human
    false_positive_max: 0.02         — max 2% false positive rate
    processing_latency_max_ms: 100   — must score within 100ms per frame
  reject_conditions: [
    "no_target_in_frame",            — camera misaligned or obstructed
    "confidence_below_floor",        — uncertain → don't guess
    "multiple_simultaneous_impacts", — too complex for auto-scoring
    "frame_blur_exceeds_threshold"   — motion/vibration artifact
  ]
  prohibited_actions: [
    "modify_scoring_standard",       — NEVER let AI change rules mid-exercise
    "override_safety_flags",         — NEVER let AI bypass safety systems
    "communicate_to_shooter",        — NEVER let AI talk to shooter directly
    "access_other_target_data"       — target isolation (no cross-contamination)
  ]

TOOLS_ALLOWED: [
  "hailo8_inference",         — object detection on edge TPU
  "frame_capture",            — camera frame access
  "acoustic_correlation",     — cross-check with LOMAH acoustic data
  "score_database_write"      — log results to scoring database
]
  — Whitelist only. Any tool not listed = forbidden.
  — No network access, no external API calls during live exercise.

HITL_CHECKPOINT:
  per_shot: false              — too frequent, causes operator fatigue
  on_conflict: true            — when acoustic ≠ visual (sensor disagreement)
  on_low_confidence: true      — below 0.85 confidence floor
  end_of_exercise: true        — summary review before qualification result accepted
  on_safety_flag: "IMMEDIATE"  — drop everything, alert range safety officer

SAFETY_OVERRIDE: "If any safety flag detected (ceasefire violation, shooter in danger zone,
  system malfunction affecting range safety) — STOP ALL SCORING. Alert range safety officer.
  Do not resume until explicit human clearance."

SUCCESS_CRITERIA:
  detection_rate: ">= 0.95"     — catch 95%+ of actual impacts
  false_positive: "<= 0.02"     — no more than 2% false alerts
  latency_p99: "<= 100ms"       — 99th percentile under 100ms
  consistency: "score matches manual count within ±1 per volley"

FALLBACK_PROTOCOL:
  hailo8_overtemp: "reduce_inference_rate_50pct — flag reduced accuracy"
  camera_obstruction: "alert_operator — switch to acoustic_only mode"
  acoustic_offline: "continue visual_only — flag reduced accuracy in log"
  all_sensors_fail: "PAUSE exercise — switch to MANUAL scoring mode"
  database_write_fail: "buffer scores in local memory — retry on recovery"
  unknown_error: "SAFE_STATE — freeze all scores, alert operator, log full state dump"

TIMEOUT: 5                    — per-shot processing timeout (seconds)
ITERATION_MAX: 2              — retry inference on transient failure
LOG_LEVEL: detailed           — full audit trail for defense qualification
VERSION: "{{VN-CAM-vX.Y.Z}}" — exact software version for traceability
```

**Workshop X Structural Lessons (apply to ALL prompts):**

| # | Lesson | What changed |
|---|--------|-------------|
| 1 | **3-type CONSTRAINTS** | Split flat constraints into `hard_limits{}` + `reject_conditions[]` + `prohibited_actions[]` |
| 2 | **HITL trigger matrix** | Replace single trigger with condition matrix. Reason about when NOT to trigger (operator fatigue) |
| 3 | **SUCCESS_CRITERIA** | "Not-rejected" ≠ "good". Define quantified output quality separately from input limits |
| 4 | **FALLBACK_PROTOCOL** | Map EACH failure mode to SPECIFIC response. Always include `unknown_error → SAFE_STATE` |
| 5 | **Execution META** | TIMEOUT, VERSION, LOG_LEVEL — traceability is non-negotiable for defense |

**When to use P44 vs P01:**
- **P01:** Design-time Claude delegation (documents, analysis, reviews) — SUCCESS_CRITERIA = quality metrics
- **P44:** Runtime edge AI delegation (inference, scoring, detection) — SUCCESS_CRITERIA = performance metrics + latency

---

### P45 — Boilerplate Code Generation (Edge-First)
**Use when:** Generating routine code modules — config handlers, data models, API scaffolds, driver wrappers
**Why it works:** Eliminates 1-2h of repetitive coding per use. Hard constraints prevent the 3 most common AI coding mistakes in defense edge systems: hardcoded values, network assumptions, and missing type safety.

> **Origin:** Workshop X Template A1, upgraded to v3.0 schema

```
TASK: Generate {{component_type}} boilerplate for {{product}} ({{VN-XXX-XXX}})
  Component purpose: {{1-sentence description of what this module does}}
  Integration point: {{which existing module it connects to}}

CONTEXT:
  product: {{VN-LOMAH / VN-CAM / VN-SMASH / VN-TRN / CORTEX}}
  language: {{Python / C / C++ / Rust / JavaScript}}
  hardware_target: {{RPi5 / Hailo-8 / STM32H743 / FPGA iCE40 / x86 server}}
  architecture: "IRONMESH CDM pattern — see {{spec_file_path}}"
  existing_code: "Reference {{existing_module_path}} for style/conventions"
  os_environment: {{Linux ARM64 / RTOS / bare-metal / Docker}}

CONSTRAINTS:
  hard_limits:
    module_size: "<= 500 lines — split if larger"
    dependencies: "only libraries in requirements.txt / package.json"
    memory_budget: "{{MB available on target platform}}"
  reject_conditions: [
    "architecture_spec_not_provided",     — cannot generate without reference
    "target_platform_unclear",            — edge vs server changes everything
    "security_boundary_undefined"         — must know trust boundary before coding
  ]
  prohibited_actions: [
    "hardcode_thresholds_or_parameters",  — ALL constants → config file
    "make_external_api_calls",            — edge-first = no network dependency in core
    "hardcode_file_paths_or_IPs",         — must be configurable
    "skip_type_annotations",              — full type hints (Python) / strict types (C++)
    "import_unlisted_dependencies"        — only whitelisted libraries
  ]

TOOLS_ALLOWED: ["read_file", "write_file", "run_linter"]

HITL_CHECKPOINT:
  per_module: false              — routine code, automated checks sufficient
  on_architecture_ambiguity: true — if unclear where module fits, ASK
  on_security_boundary: true     — any code touching auth, crypto, or network perimeter
  on_completion: true            — present final module for review before integration

SAFETY_OVERRIDE: "If generating code that handles weapons data, engagement parameters, or safety-critical sensor input — flag [SAFETY-CRITICAL-CODE]. Require peer review before integration."

SUCCESS_CRITERIA:
  compiles_clean: "zero errors, zero warnings"
  linting: "pass flake8 / clang-tidy with zero warnings"
  type_complete: "100% type coverage on public interfaces"
  testable: "each public function independently unit-testable"
  documented: "docstring on every public function + module-level docstring"

FALLBACK_PROTOCOL:
  architecture_unclear: "output QUESTIONS listing specific unknowns — do not assume"
  style_conflict: "follow existing_module conventions, flag divergence for review"
  platform_limitation: "document limitation, suggest alternative approach"
  unknown_error: "SAFE_STATE — write partial output to file, document stopping point"

OUTPUT_FORMAT: Single .py / .c / .rs file with YAML config companion if needed
ITERATION_MAX: 2
```

**Learned variations:**
- Driver wrapper: add hardware register map to CONTEXT
- Config handler: add schema validation in SUCCESS_CRITERIA
- REST API scaffold: relax no_network for server-side modules, keep for edge

---

### P46 — Algorithm Implementation from Specification
**Use when:** Implementing a known algorithm (TDOA, Kalman filter, image processing pipeline) from a paper, spec, or textbook
**Why it works:** Forces explicit input/output contracts and physics constraints. Catches the 3 deadliest algorithm implementation errors: wrong units, wrong assumptions about sensor channels, and missing edge case handling.

> **Origin:** Workshop X Template A2, upgraded to v3.0 schema

```
TASK: Implement {{algorithm_name}} as described in {{reference_source}}
  For product: {{VN-XXX-XXX}}
  Purpose: {{what this algorithm does in the system}}

CONTEXT:
  reference: "{{paper / spec / textbook section — exact citation}}"
  product: {{VN-LOMAH / VN-CAM / VN-SMASH / etc.}}
  input_format: {
    data_type: "{{audio samples / video frames / coordinate data / IMU readings}}",
    sample_rate: "{{value + unit}}",
    channel_count: "{{number — e.g., 4 mics for LOMAH}}",
    precision: "{{8bit / 16bit / 32bit float / 64bit double}}"
  }
  output_format: {
    data_type: "{{detection events / coordinates / scores / trajectories}}",
    latency_requirement: "{{max ms from input to output}}",
    accuracy_requirement: "{{value + metric — e.g., ±5mm at 100m}}"
  }
  hardware_constraint: {
    platform: "{{RPi5 / Hailo-8 / STM32H743 / FPGA}}",
    memory_limit: "{{MB available}}",
    compute_budget: "{{TOPS / MFLOPS / CPU% budget}}"
  }

CONSTRAINTS:
  hard_limits:
    latency_max_ms: {{value}}
    memory_max_mb: {{value}}
    accuracy_min: "{{value + metric}}"
  reject_conditions: [
    "reference_spec_ambiguous_and_unresolvable",   — list interpretations and ASK
    "hardware_cannot_meet_latency_requirement",     — flag with profiling data
    "input_format_incompatible_with_algorithm"      — document mismatch
  ]
  prohibited_actions: [
    "assume_single_channel_audio",     — LOMAH has 4 mics, always parameterize
    "assume_stationary_platform",      — naval products move, always parameterize
    "assume_constant_lighting",        — VN-CAM outdoor, always handle variation
    "assume_continuous_network",       — edge-first, never depend on connectivity
    "hardcode_physical_constants",     — speed of sound varies 20-45°C, PARAMETERIZE
    "use_magic_numbers"                — every constant named + documented + configurable
  ]

TOOLS_ALLOWED: ["read_file", "write_file", "calculate", "run_test"]

HITL_CHECKPOINT:
  per_function: false             — review at module level, not function level
  on_spec_ambiguity: true         — if reference has multiple interpretations
  on_performance_miss: true       — if cannot meet latency/memory target
  on_completion: true             — full review before integration
  on_safety_relevance: "IMMEDIATE" — if algorithm output feeds safety-critical decision

SAFETY_OVERRIDE: "If algorithm output feeds weapons engagement, scoring decisions, or safety systems — flag [SAFETY-CRITICAL-ALGORITHM]. Apply PLAUSIBLE check (P47) before integration. No auto-merge."

SUCCESS_CRITERIA:
  correctness: "output matches reference values from {{known_test_vectors}}"
  latency: "p99 < {{latency_max_ms}}ms on target hardware"
  memory: "peak RSS < {{memory_max_mb}}MB"
  edge_cases: "null input, overflow, underflow, NaN, timeout all handled"
  unit_tests: "pytest/gtest coverage: normal + boundary + error cases"

FALLBACK_PROTOCOL:
  spec_ambiguous: "list ALL interpretations with pros/cons — ASK human to choose"
  performance_fail: "output profiling data + bottleneck analysis + 3 optimization options"
  hardware_mismatch: "suggest alternative algorithms that fit hardware budget"
  numerical_instability: "flag precision issue, suggest higher precision or algorithm variant"
  unknown_error: "SAFE_STATE — save partial implementation, document state, request guidance"

OUTPUT_FORMAT: Implementation file + unit test file + performance benchmark script
UNCERTAINTY_FLAG: true
EVIDENCE_REQUIRED: true — cite reference for every algorithmic choice
```

**Learned variations:**
- Signal processing: add Nyquist check to reject_conditions
- Computer vision: add frame rate and resolution to input_format
- Navigation/tracking: add coordinate frame and datum to CONTEXT

---

### P47 — PLAUSIBLE Code Review Protocol
**Use when:** Reviewing ANY AI-generated code before integration — especially algorithm implementations (P46 output)
**Why it works:** 9-check systematic protocol catches errors at every layer. Converts 30-min raw code review into 5-min structured report review. Layer 1-3 automated, KN focuses on Layer 4-5 (physics + context).

> **Origin:** Workshop X Template A3 (PLAUSIBLE acronym), upgraded to v3.0 schema

```
TASK: Review {{code_file}} for defense-grade correctness using PLAUSIBLE protocol
  Product: {{VN-XXX-XXX}}
  Code purpose: {{what the code is supposed to do}}

CONTEXT:
  product: {{VN-LOMAH / VN-CAM / VN-SMASH / VN-TRN / CORTEX}}
  code_purpose: "{{specific description of what this code does}}"
  operating_environment: {
    physical: "{{indoor lab / outdoor range / naval vessel / vehicle-mounted}}",
    climate: "Vietnam tropical — 25-45°C, 40-100% humidity",
    power: "{{stable grid / military generator ±10% / battery / solar}}",
    network: "{{reliable LAN / intermittent WiFi / cellular / no network}}"
  }
  safety_criticality: "{{scoring / fire-control / flight-control / monitoring / logging}}"
  integration_target: "{{which IRONMESH subsystem this plugs into}}"

CONSTRAINTS:
  hard_limits:
    review_depth: "all 9 PLAUSIBLE checks — no skipping"
    finding_specificity: "every finding references exact line number"
    actionability: "every issue has recommended fix — no vague warnings"
  reject_conditions: [
    "code_purpose_not_stated",            — cannot review without knowing intent
    "operating_environment_not_specified", — environment changes what's correct
    "safety_criticality_unknown"          — determines review rigor
  ]
  prohibited_actions: [
    "mark_PASS_without_evidence",         — every PASS needs justification
    "skip_physics_check_for_SW_code",     — software implements physics, check it
    "assume_lab_conditions",              — always check against field conditions
    "ignore_concurrency_issues"           — edge systems are multi-threaded
  ]

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "calculate"]

HITL_CHECKPOINT:
  per_check: false                — review the full report, not check-by-check
  on_any_fail: true               — any FAIL → pause, present finding, wait for decision
  on_lethality_concern: "IMMEDIATE" — L-check finding = stop everything
  on_completion: true             — present full report for final review

SAFETY_OVERRIDE: "If L-check (Lethality) finds ANY scenario where incorrect code could cause physical harm — STOP. Flag [SAFETY-CRITICAL-DEFECT]. Do not continue review. Escalate immediately."

SUCCESS_CRITERIA:
  completeness: "all 9 PLAUSIBLE checks addressed"
  specificity: "every finding includes file:line reference"
  actionable: "every FAIL/FLAG has specific recommended fix"
  calibrated: "PASS rate consistent with code complexity (not always 9/9)"

FALLBACK_PROTOCOL:
  code_too_complex: "decompose into reviewable chunks, review each, flag cross-chunk issues"
  purpose_unclear: "ASK before reviewing — wrong mental model = wrong review"
  missing_test_vectors: "flag as [UNTESTABLE] — recommend test vectors needed"
  unknown_error: "SAFE_STATE — document partial review, flag unreviewed sections"

OUTPUT_FORMAT: Structured PLAUSIBLE report — one section per check

--- EXECUTE 9 PLAUSIBLE CHECKS ---

P — PHYSICS PLAUSIBILITY
  Does code obey physical laws in THIS operating environment?
  Check: speed of sound, projectile behavior, optical limits, thermal constraints
  For Vietnam: 25-45°C, 40-100% humidity, tropical rain, salt air (coastal)
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

L — LOGIC CORRECTNESS
  Does reasoning chain hold from input to output? Any logical gaps?
  Check: control flow, conditional completeness, loop invariants, return paths
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

A — ASSUMPTIONS AUDIT
  List ALL hidden assumptions found in code.
  Check: hardcoded values, implicit platform assumptions, assumed input ranges
  Each assumption: {{what}} — {{where (line)}} — {{valid? / needs parameterization}}
  Result: PASS / FLAG / FAIL — {{count of unvalidated assumptions}}

U — UNIT CONSISTENCY
  All units consistent throughout? Conversions correct at every boundary?
  Check: mils/degrees, m/mm/cm, seconds/milliseconds, Celsius/Kelvin/Fahrenheit
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

S — SCALE ROBUSTNESS
  Does code work at 0.1x AND 10x expected operating conditions?
  Check: 1 target vs 100 targets, 1 lane vs 50 lanes, 1 sensor vs 20 sensors
  Check: extremely fast/slow inputs, extremely large/small values
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

I — INTEGRATION COMPATIBILITY
  Compatible with IRONMESH CDM architecture? Interface contracts met?
  Check: data format, API contract, message schema, error propagation
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

B — BOUNDARY BEHAVIOR
  What happens at min/max/zero/null/overflow/underflow?
  Check: empty input, max input, negative values, NaN, infinity, timeout
  Each boundary: {{condition}} → {{actual behavior}} → {{correct? Y/N}}
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

L — LETHALITY CHECK
  If this code is WRONG, could someone get physically hurt?
  Check: engagement parameters, safety interlocks, scoring thresholds, override logic
  If safety_criticality = fire-control/flight-control: MANDATORY DEEP REVIEW
  Result: PASS / FLAG / FAIL — {{finding + line reference}}
  [SAFETY-CRITICAL-DEFECT] tag if any concern found.

E — ENDURANCE PROJECTION
  Will this code work reliably in 2 years? Memory leaks? Clock drift? Bit rot?
  Check: resource cleanup, file handle closure, connection pooling, log rotation
  Check: dependency freshness, deprecated API usage, EOL hardware support
  Result: PASS / FLAG / FAIL — {{finding + line reference}}

--- REPORT SUMMARY ---

| Check | Result | Key Finding | Line Ref |
|-------|--------|-------------|----------|
| P Physics | | | |
| L Logic | | | |
| A Assumptions | | | |
| U Units | | | |
| S Scale | | | |
| I Integration | | | |
| B Boundary | | | |
| L Lethality | | | |
| E Endurance | | | |

OVERALL: {{PASS / REVIEW / REJECT}}
  PASS: 0 FAIL, ≤2 FLAG — safe to integrate with noted caveats
  REVIEW: ≥3 FLAG or 1 FAIL on non-safety check — fix before integration
  REJECT: any FAIL on L(Lethality) or P(Physics) — do not integrate

RECOMMENDED ACTIONS:
  1. {{highest priority fix}}
  2. {{second priority}}
  3. {{third priority}}
```

**Learned variations:**
- Pure Python analysis code: relax E-check (endurance), strengthen A-check (assumptions)
- Real-time embedded: strengthen S-check (scale) and E-check (endurance), add memory profiling
- Config/infrastructure code: strengthen I-check (integration), add security check to A-check

---

### P49 — Governance Document Generation
**Use when:** Drafting system limitations, accountability chains, audit trail specs, operator override protocols, or incident response protocols for deployment preparation
**Why it works:** Governance documents are pre-deployment gates for defense AI. AI drafts the structure; KN validates against operational reality and military procedure. The safety hierarchy (SAFETY > COMPLIANCE > ACCURACY > SPEED) prevents optimization for the wrong objective.

> **Origin:** Workshop X Template B2, upgraded to v3.0 schema
> **Deployment gate:** These documents MUST exist before VN-RANGE-001 deploys

```
TASK: Draft {{governance_document_type}} for {{product}} ({{VN-XXX-XXX}})
  Document type: {{System Limitations / Accountability Chain /
                   Audit Trail Spec / Operator Override Protocol /
                   Incident Response Protocol}}

CONTEXT:
  product: {{VN-LOMAH / VN-CAM / VN-SMASH / VN-TRN / CORTEX RANGE}}
  ai_components: [
    "{{list specific AI subsystems — e.g., VN-LOMAH scoring AI, VN-CAM inference}}"
  ]
  deployment_context: "{{first customer / operational unit / training center}}"
  regulatory_framework: "Vietnamese military procurement standards (TCVN)"
  source_data: [
    "{{product_brief_path}}",
    "{{conceptual_design_path}}",
    "{{orchestration_design_path}}"
  ]
  audience: "Vietnamese military procurement officers + technical evaluators"

CONSTRAINTS:
  hard_limits:
    readability: "NCO-level — no PhD required to understand any section"
    responsibility: "every responsibility has a NAMED ROLE, not 'someone' or 'the system'"
    audit_retention: ">= 5 years for all AI decision logs (defense minimum)"
  reject_conditions: [
    "source_data_not_provided",               — cannot draft without product specs
    "ai_components_not_listed",               — must know what AI is being governed
    "safety_criticality_undefined"            — determines rigor level
  ]
  prohibited_actions: [
    "claim_AI_is_safe",                       — claim: AI operates within DEFINED BOUNDS
    "promise_reliability_without_test_data",  — aspirational ≠ verified
    "reference_internal_Workshop_X_processes", — document is customer-facing
    "use_jargon_operator_wouldnt_know",       — NCO readability test
    "omit_human_override_mechanism"           — every AI function must be overridable
  ]

TOOLS_ALLOWED: ["read_file", "write_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_section: false              — review complete draft
  on_completion: true             — KN validates all claims against operational reality
  on_military_procedure: true     — any section referencing military SOP
  on_safety_claim: "IMMEDIATE"    — any claim about system safety bounds

SAFETY_OVERRIDE: "AI is TOOL. Human ALWAYS accountable for decisions. This principle must be explicit in every governance document. If any section implies AI autonomy over safety-critical decisions — STOP and flag."

SUCCESS_CRITERIA:
  completeness: "all sections populated for document type"
  clarity: "NCO-level readability throughout"
  actionable: "every responsibility assigned to named role"
  testable: "every claim verifiable through audit trail"
  hierarchy: "SAFETY > COMPLIANCE > ACCURACY > SPEED — visible in document structure"

FALLBACK_PROTOCOL:
  military_procedure_unknown: "mark [VERIFY WITH MILITARY] — do not guess Vietnamese SOP"
  tcvn_standard_uncertain: "mark [TCVN-TBD: clause needed] — do not fabricate clause numbers"
  safety_boundary_unclear: "mark [SAFETY-REVIEW-REQUIRED] — conservative default"
  unknown_error: "SAFE_STATE — output partial draft, flag incomplete sections, list data needed"

OUTPUT_FORMAT: Markdown with YAML frontmatter — structure depends on document_type

--- DOCUMENT TYPE STRUCTURES ---

SYSTEM LIMITATIONS:
  1. What AI CAN do (with confidence levels)
  2. What AI CANNOT do (explicit list — not implied)
  3. What HUMAN MUST do (non-delegatable responsibilities)
  4. Operator certification requirements
  5. Known failure modes and expected behavior

ACCOUNTABILITY CHAIN:
  1. Decision point inventory (every point where AI output influences human action)
  2. Responsible role at each decision point
  3. Escalation path for AI-flagged anomalies
  4. Override authority levels
  5. Post-incident review requirements

AUDIT TRAIL SPEC:
  1. What gets logged (ALL AI decisions + ALL human overrides)
  2. Log format (timestamped, tamper-evident, machine-readable)
  3. Retention period (minimum 5 years)
  4. Access control for audit data
  5. Audit review frequency and responsible party

OPERATOR OVERRIDE PROTOCOL:
  1. Override trigger conditions
  2. Override procedure (step-by-step)
  3. System behavior during override
  4. Return-to-normal procedure
  5. Override logging requirements

INCIDENT RESPONSE PROTOCOL:
  1. Incident classification (severity 1-4)
  2. Immediate response actions per severity
  3. Notification chain
  4. Evidence preservation requirements
  5. Post-incident review timeline and format
```

**Learned variations:**
- Pre-deployment (now): focus on System Limitations + Accountability Chain
- Post-first-deployment: add Incident Response from real operational data
- Export variant: add EAR/ITAR compliance section for V-X

---

### P50 — Preliminary Stability Check (v3.0)
**Use when:** Estimating transverse stability (GM) and trim from weight estimate, before hull lines exist
**Why it works:** Parametric method catches gross instability early. Beam sensitivity analysis determines if stability constrains hull geometry. Worst-case trim (heavy payload at stern) validates LARS operations concept.

> **Origin:** VN-XUONG-UUV Phase 2, Doc 009, 2026-03-07
> **Prerequisite:** Weight estimate (Doc 008 or equivalent) must exist

```
TASK: Run preliminary stability check for {{product_name}}
  Calculate GM for all loading conditions.
  Run beam sensitivity analysis.
  Check worst-case trim (payload at stern/bow extreme).

CONTEXT:
  product: {{VN-XXX-XXX}}
  vessel_type: {{work boat / patrol / RIB / barge}}
  hull_type: {{semi-planing V-hull / displacement / planing}}
  hull_material: {{aluminum 5083 / steel / FRP / HDPE}}
  weight_estimate_doc: {{path to Doc 008 or equivalent}}
  beam_range: {{min — max}} m (Phase 3 xác nhận)
  deadrise_midship: {{deg}} [L5]
  design_sea_state: {{SS 2 / SS 3 / SS 4}}
  gm_requirement: {{>= 0.5 m or per classification society}}

CONSTRAINTS:
  hard_limits:
    - GM minimum: {{0.5 m}} for all loading conditions
    - Freeboard minimum: {{0.3 m}} at worst-case trim
    - Must calculate ALL conditions: lightship, half load, full load, worst-case recovery
    - Beam sensitivity: calculate GM at B_min, B_working, B_max
  reject_conditions:
    - Weight estimate not available — cannot calculate without mass breakdown
    - Beam range not specified — cannot run sensitivity analysis
    - Hull type not specified — KB and BM formulas change by hull form
  prohibited_actions:
    - Do NOT claim "stable" without calculating GM numerically
    - Do NOT skip worst-case trim analysis (payload at extreme position)
    - Do NOT use GM from similar vessel without recalculating from this vessel's parameters

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete all calculations first
  on_completion: true — human verify VCG assumptions + trim conclusions
  on_gm_fail: "IMMEDIATE" — any condition GM < requirement
  on_freeboard_fail: "IMMEDIATE" — freeboard < minimum at worst case

SAFETY_OVERRIDE: "If GM < requirement at ANY loading condition — flag [STABILITY-FAIL]. Do NOT proceed to Phase 3 without resolution."

SUCCESS_CRITERIA:
  gm_all_pass: "GM >= requirement for all loading conditions"
  beam_sensitivity: "Minimum beam for GM pass identified"
  trim_assessed: "Worst-case trim calculated with freeboard check"
  vkg_breakdown: "Every subsystem has VCG with confidence level"
  risks_identified: "Phase 3 validation items explicitly listed"

FALLBACK_PROTOCOL:
  hull_geometry_unknown: "Use parametric estimates with [L5] tags; note assumptions; flag for Phase 3 update"
  gm_marginal: "Flag [STABILITY-MARGINAL: GM within 20% of requirement]; recommend beam increase or ballast study"
  vcg_uncertain: "Run ±15% KG sensitivity; report GM range instead of point estimate"
  unknown_error: "SAFE_STATE — output partial results with [INCOMPLETE]; halt; do not claim stable"

OUTPUT_FORMAT: Markdown with YAML frontmatter
  Sections: Inputs → Draft → KG breakdown → GM calc → Beam sensitivity → Trim analysis → Risk matrix
UNCERTAINTY_FLAG: true — all [L5] values tagged
EVIDENCE_REQUIRED: true — cite weight estimate source for every mass item
```

**Learned variations:**
- Aluminum workboat: C_b ≈ 0.45, C_w ≈ 0.72, KB ≈ 0.6T, deadrise 15-20°
- With stern LARS: always run worst-case trim with payload at ramp position
- UUV recovery: check transient condition (UUV half in water, half on ramp — buoyancy assist reduces effective weight)

---

### P51 — Weight Estimate (Bottom-Up) (v3.0)
**Use when:** Creating parametric weight breakdown for vessel, vehicle, or complex mechanical system
**Why it works:** Forces itemized breakdown with confidence levels per line item. Benchmark comparison prevents "creative" weight growth. 10% margin standard prevents optimistic bias.

> **Origin:** VN-XUONG-UUV Phase 2, Doc 008, 2026-03-07

```
TASK: Generate bottom-up weight estimate for {{product_name}}
  Break down into subsystems. Calculate lightship + deadweight + displacement.
  Benchmark against {{reference_design}}.

CONTEXT:
  product: {{VN-XXX-XXX}}
  system_type: {{vessel / vehicle / platform / equipment}}
  reference_design: {{name, lightship weight}}
  known_parameters: {{list confirmed specs — LOA, engines, payload, etc.}}
  phase: {{1 / 2 / 3}}

CONSTRAINTS:
  hard_limits:
    - Every line item must have confidence level [L1-L5]
    - Margin: 10% on subtotal (standard) or 15% (if >50% items are [L5])
    - Must include: lightship, deadweight, full load displacement
    - Must include: category breakdown (% of total)
    - Must include: benchmark comparison table
  reject_conditions:
    - No known parameters — cannot estimate without at least LOA + hull type + payload
    - No reference design — cannot benchmark (use "generic class benchmark" with [L4])
  prohibited_actions:
    - Do NOT round weights to nearest 100 kg — itemize to nearest 5 kg
    - Do NOT omit margin — always add 10% minimum
    - Do NOT claim weight as [L1] unless measured on a scale

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_output: false — complete full estimate first
  on_completion: true — human verifies top 3 heaviest items + total
  on_overweight: true — if total exceeds any SWL or capacity constraint

SAFETY_OVERRIDE: "If estimated weight exceeds any structural limit (crane SWL, trailer capacity, deck loading) — flag [OVERWEIGHT-RISK] immediately."

SUCCESS_CRITERIA:
  itemization: "No single 'miscellaneous' item > 5% of total"
  confidence_tagged: "100% of line items have [L1-L5] tag"
  benchmark_delta: "Delta vs reference explained (why heavier/lighter)"
  critical_checks: "SWL, speed, capacity checks performed against displacement"

FALLBACK_PROTOCOL:
  component_weight_unknown: "Use catalog weight [L3] or parametric estimate [L5]; flag for supplier confirmation"
  reference_design_unavailable: "Use generic class data [L4]; note wider uncertainty band"
  overweight_detected: "List weight reduction options with trade-offs; flag for design decision"
  unknown_error: "SAFE_STATE — output partial estimate with [INCOMPLETE]; halt"

OUTPUT_FORMAT: Markdown with YAML frontmatter + data_confidence field
UNCERTAINTY_FLAG: true
```

---

### P52 — SOP Update from Design Decisions (v3.0)
**Use when:** Phase 2+ design decisions change the baseline and existing SOPs need batch update
**Why it works:** Design decisions propagate to operational procedures. Batch updating prevents SOP drift — where documents describe a system that no longer matches the design.

> **Origin:** VN-XUONG-UUV Phase 2, SOP batch update session, 2026-03-07
> **Trigger:** Any time PD-x decisions are finalized or baseline concept changes

```
TASK: Update {{list of SOPs}} to reflect design decisions {{PD-1 to PD-N}}
  Replace obsolete references. Fill known values. Add revision history.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: {{2 / 3 / 4}}
  design_decisions: [
    "PD-1: {{decision — e.g., twin outboard 2x40-60 HP}}",
    "PD-2: {{decision — e.g., electric LARS (VFD + genset)}}",
    "PD-N: {{decision}}"
  ]
  known_values: {
    {{parameter}}: {{value}} {{unit}},
    {{parameter}}: {{value}} {{unit}}
  }
  sop_files: ["{{path1}}", "{{path2}}", "{{path3}}"]

CONSTRAINTS:
  hard_limits:
    - Every edit must be traceable to a specific PD-x or known value
    - Version bump + revision history entry for every SOP modified
    - Vietnamese diacritics (tiếng Việt có dấu) preserved throughout
    - Do NOT change section structure or numbering — only content within cells/steps
  reject_conditions:
    - Design decisions not listed — cannot update without knowing what changed
    - SOP files not provided — cannot edit what hasn't been read
  prohibited_actions:
    - Do NOT delete SOP steps — only modify content or mark as "LOẠI" with reason
    - Do NOT add new procedures — only update existing ones with new parameters
    - Do NOT change crew roles without explicit PD decision
    - Do NOT remove safety warnings or emergency procedures

TOOLS_ALLOWED: ["read_file", "edit_file", "search_file"]

HITL_CHECKPOINT:
  per_sop: false — update all SOPs, then present summary
  on_completion: true — human reviews all changes before baseline
  on_safety_step_change: true — any modification to emergency procedure
  on_role_change: "IMMEDIATE" — crew role reassignment affects training

SAFETY_OVERRIDE: "If design decision removes a safety feature or changes emergency procedure — flag [SAFETY-PROCEDURE-CHANGE]. Do not silently update."

SUCCESS_CRITERIA:
  traceability: "Every edit linked to PD-x or known value"
  completeness: "All SOPs updated — no partial batch"
  consistency: "No contradictions between updated SOPs"
  revision_history: "All modified SOPs have version bump + changelog entry"

FALLBACK_PROTOCOL:
  conflicting_decisions: "Flag [PD-CONFLICT: PD-x vs PD-y]; do not resolve — await human decision"
  sop_step_unclear: "Flag [SOP-AMBIGUOUS: step X]; update with best interpretation; note in revision history"
  value_not_in_decisions: "Leave as ___ (TBD); do not fabricate from context"
  unknown_error: "SAFE_STATE — output list of completed + incomplete edits; halt"

OUTPUT_FORMAT: Summary table of changes per SOP + diff highlights
```

**Learned variations:**
- Propulsion change (hydraulic → electric): propagates to power budget, maintenance SOPs, FAT/SAT criteria
- Crew reduction: propagates to role assignments, emergency procedures, training requirements
- Weight change (overweight): propagates to crane SOPs, towing procedures, stability checks
- TMS elimination (drum inside UUV): removes entire subsystem from SOPs — flag all TMS references

---

### P53 — ICD Template Generation (v3.0)
**Use when:** Creating or updating Interface Control Document for OEM/supplier data collection
**Why it works:** ICDs are the single most common blocking item in integration projects. A structured template with parameter codes forces OEM to provide quantified data instead of narrative descriptions.

> **Origin:** VN-XUONG-UUV Phase 1-2, ICD Template v1.0-v1.3, 2026-03-07
> **Critical path:** ICD response gates Phase 2 detailed analysis

```
TASK: Generate ICD template for {{interface_name}} between {{system_A}} and {{system_B}}
  Organize by sections: physical, electrical, environmental, operational, documentation.
  Include parameter codes (A1, B1, C1...) for traceability.

CONTEXT:
  product: {{VN-XXX-XXX}}
  interface: {{system_A}} ↔ {{system_B}}
  purpose: "Collect technical data from {{OEM/supplier}} to design {{our subsystem}}"
  language: {{EN / VN / bilingual}}
  known_values: {
    {{parameter}}: {{value}} {{unit}}
  }
  design_constraints_from_our_side: [
    "{{constraint_1 — e.g., cradle width 550-650 mm}}",
    "{{constraint_2 — e.g., ramp angle 15 deg}}"
  ]

CONSTRAINTS:
  hard_limits:
    - Every parameter must have: code, name, value field, unit, notes
    - Bold critical parameters (design-driving items)
    - Include Section for "Our parameters → OEM" (reverse data flow)
    - Include Documentation Request section (drawings, 3D models, manuals)
    - Include Sign-off block (OEM + Workshop X + User witness)
  reject_conditions:
    - Interface not defined — cannot create ICD without knowing what connects to what
    - Purpose not specified — template structure changes by use case
  prohibited_actions:
    - Do NOT fill OEM values — leave as ___ for OEM to complete
    - Do NOT include internal design rationale — ICD is external-facing
    - Do NOT include supplier pricing or commercial terms
    - Do NOT include classified operational parameters

TOOLS_ALLOWED: ["read_file", "write_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full template first
  on_completion: true — human reviews before sending to OEM
  on_classified_content: "IMMEDIATE" — any parameter that might be classified

SAFETY_OVERRIDE: "If any parameter could reveal classified operational capability — flag [CLASSIFIED-RISK]. Remove from template. Do not send to OEM."

SUCCESS_CRITERIA:
  completeness: "All interface aspects covered (physical, electrical, environmental, operational)"
  parameter_coded: "Every parameter has unique code (A1, B1, C1...)"
  critical_bolded: "Design-driving parameters visually distinguished"
  bidirectional: "Both OEM→WX and WX→OEM data flows included"
  signable: "Sign-off block present with all parties"

FALLBACK_PROTOCOL:
  interface_partially_defined: "Create template with known sections; mark unknown sections [TBD-SECTION]; list questions for human"
  bilingual_term_uncertain: "Keep technical term in English; add Vietnamese explanation in notes column"
  parameter_relevance_unclear: "Include with [OPTIONAL] tag; let OEM skip if not applicable"
  unknown_error: "SAFE_STATE — output partial template with [INCOMPLETE]; halt"

OUTPUT_FORMAT: Markdown with YAML frontmatter — tables with parameter codes
```

**Learned variations:**
- UUV ↔ LARS: heavy on handling limits (max acceleration, tilt, shock), tether cable specs, controller interface
- Sensor ↔ Platform: focus on mounting interface, FoV clearance, cable routing, EMI
- Bilingual (EN+VN): keep parameter codes identical, translate headers/notes, retain international technical terms (LARS, UHMWPE, VFD)
- Streamlining: remove verbose guidance notes and ASCII diagrams before sending to OEM — keep tables only

---

## CAPTURE PROTOCOL

```
Session: {{date}}
Task: {{what I was doing}}
Prompt used: {{P0X or "new"}}
What worked: {{specific element}}
What failed / needed manual correction: {{specific}}
Action: update existing / add new / no change
```

**New entry template (v3.0):**
```markdown
### PXX — {{Name}}
**Use when:** {{1 sentence}}
**Why it works:** {{1 sentence principle}}

TASK: {{}}
CONTEXT: {{}}
CONSTRAINTS:
  hard_limits: {{}}
  reject_conditions: [{{}}]
  prohibited_actions: [{{}}]
TOOLS_ALLOWED: [{{}}]
HITL_CHECKPOINT:
  {{ condition: true/false/"IMMEDIATE" }}
SAFETY_OVERRIDE: "{{critical stop condition}}"
SUCCESS_CRITERIA: { {{metric}}: "{{threshold}}" }
FALLBACK_PROTOCOL: { {{failure}}: "{{response}}", unknown_error: "SAFE_STATE — {{action}}" }

[optional: OUTPUT_FORMAT / ITERATION_MAX / UNCERTAINTY_FLAG / EVIDENCE_REQUIRED / TIMEOUT / VERSION / LOG_LEVEL]
```

---

## DELETION RULE

Prompt unused for **30 days** → mark `<!-- REVIEW: last used {{date}} -->` → delete at next library review.

*Library v5.0 — Schema v3.0 upgrade applied to P02/P03/P04/P05/P06/P07/P08. All 13 prompts now fully v3.0. 2026-03-04*
