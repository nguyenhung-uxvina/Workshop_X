---
skill: S1 — AI Literacy × Engineering Design
phase: 2 — Conceptual Design
framework: Pahl & Beitz Sections 6.1–6.6, VDI 2225
slash_commands: /abs · /fn · /wp · /morpho · /eval · /vs · /gate2
type: prompt-library
version: 4.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v3.0 — P50/P52/P53 added (reuse analysis, working principles search, Phase 2 gate)
  v4.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to P16/P17/P52/P18/P19/P20/P21/P53;
          P50 already v3.0 — unchanged (2026-03-04)
---

# Phase 2 — Conceptual Design Prompts

> **Goal:** Generate 3-5 viable concept variants → select best using VDI 2225.
> **Gate to Phase 3:** Selected concept Rt ≥0.70, no weak spots on critical criteria.
> **Critical rule:** Stay solution-neutral during function analysis. Hardware bias = wrong concepts.

---

## PROMPT INDEX

| # | Name | Use When |
|---|------|----------|
| P16 | Problem Abstraction | Opening Phase 2 — remove solution bias |
| P17 | Function Structure Generation | Decompose overall function into sub-functions |
| P52 | Working Principles Search (`/wp`) | Systematic search for solution principles per sub-function |
| P18 | Morphological Matrix | Systematic concept generation |
| P19 | Concept Sketch Review | Pre-evaluation quality check |
| P20 | Selection Chart (Elimination) | Eliminate unviable concepts |
| P21 | VDI 2225 Evaluation | Score surviving concepts — final selection |
| P50 | Component Reuse Analysis | Cross-product reuse before embodiment locks choices |
| P53 | Phase 2 Gate Review (`/gate2`) | Formal gate to Phase 3 — concept selection confirmed |

---

### P16 — Problem Abstraction
**Use when:** Opening Phase 2 — removes solution bias before concept generation
**Why it works:** Defense engineers default to known solutions. Abstraction forces discovery of better working principles.

```
TASK: Abstract the essential design problem for {{product_name}} ({{VN-XXX-XXX}})
  Remove solution-biased language from requirements. Identify essential function.
  Return: abstracted requirements, essential function statement, constraints, degrees of freedom.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2 — opening step
  inputs: Requirements List from Phase 1 (P13/P14 output)
  top_requirements: {{paste top 10 most important requirements}}

CONSTRAINTS:
  hard_limits:
    - Essential function format: "verb + input + into/to + output/goal" — no technology named
    - Maximum 5 hard constraints (if >5, examine whether each is truly non-negotiable)
    - Minimum 3 degrees of freedom (areas where design space is genuinely open)
  reject_conditions:
    - Requirements list (P13/P14) not provided — cannot abstract without requirements input
    - Proposed essential function still names a specific technology — reject; re-abstract
  prohibited_actions:
    - Do NOT name specific technologies in the essential function statement
    - Do NOT remove safety constraints during abstraction — if abstraction strips a safety
      boundary, flag [SAFETY-CONSTRAINT-REMOVED] and re-add as hard constraint
    - Do NOT finalize essential function without explicit human confirmation at HITL gate

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_requirement: false — abstract all requirements first, then single review
  on_essential_function: true — present before proceeding; wrong function at this stage
    means all downstream concepts will be wrong; most critical output of this prompt
  on_safety_removal: "IMMEDIATE" — [SAFETY-CONSTRAINT-REMOVED] detected; abstraction
    removed a safety boundary; alert before continuing any abstraction

SAFETY_OVERRIDE: "If abstraction removes a safety constraint (e.g., 'electric motor' →
  'convert energy' removes explosion risk exclusion) — flag [SAFETY-CONSTRAINT-REMOVED].
  Re-add as hard constraint before proceeding."

SUCCESS_CRITERIA:
  abstraction_quality: "0 technology names in essential function statement"
  constraint_count: "≤5 hard constraints, each justified as truly non-negotiable"
  freedom_count: "≥3 degrees of freedom documented"
  abstraction_coverage: "all solution-biased language from top requirements flagged and abstracted"

FALLBACK_PROTOCOL:
  technology_locked_requirements: "Identify underlying function; present original + abstracted
    pair; ask human which safety-critical constraints must remain technology-specific"
  too_many_hard_constraints: "Present all claimed constraints; challenge each with 'Is there
    any solution that doesn't need this?'; aim for ≤5; document removed constraints as WISH"
  safety_constraint_removed: "IMMEDIATE — re-add as hard constraint; flag
    [SAFETY-CONSTRAINT-RESTORED]; document why this cannot be abstracted away"
  unknown_error: "SAFE_STATE — output partial abstraction with explicit level markers;
    flag uncompleted sections; await direction"

OUTPUT_FORMAT: 4 sections (abstracted reqs table + essential function + constraints list + degrees of freedom)

--- ABSTRACTION LEVELS ---

LEVEL 1: FLAG AND ABSTRACT SOLUTION-BIASED LANGUAGE
  For each requirement naming a solution:
  Original: {{solution-specific text}}
  Abstracted: {{function-neutral version}}
  Example: "Use electric motor" → "Convert electrical energy to rotational motion"
  Example: "12.7mm barrel" → "Deliver kinetic energy to target at {{range}}"

LEVEL 2: IDENTIFY ESSENTIAL FUNCTION (1 sentence)
  Format: "{{Transform/Transfer/Store/Control}} {{input}} into {{output}} to {{achieve goal}}"
  Verify: Does this describe WHAT, not HOW? (No specific technology named)

LEVEL 3: HARD CONSTRAINTS (max 5)
  What MUST be true about ANY solution?
  Source: physics laws, regulations, customer non-negotiables

LEVEL 4: DEGREES OF FREEDOM (3-5 areas)
  What is NOT constrained — where can we genuinely innovate?
```

---

### P17 — Function Structure Generation
**Use when:** After problem abstraction — decompose overall function into sub-functions
**Why it works:** Explicit function structure prevents missing sub-functions during concept generation.

```
TASK: Generate function structure for {{product_name}} ({{VN-XXX-XXX}})
  Decompose essential function into 5-8 solution-neutral sub-functions.
  Arrange in logical sequence. Run completeness check.
  Return: sub-function list + ASCII flow diagram + completeness check results.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2
  essential_function: {{paste from P16}}
  hard_constraints: {{paste from P16}}
  inputs: {{energy/material/signal entering the system}}
  outputs: {{energy/material/signal leaving the system}}

CONSTRAINTS:
  hard_limits:
    - Sub-function count: 5–8 (more → group related; fewer → check completeness)
    - Format: "verb + subject + to achieve goal"
    - Allowed verbs: [Convert, Transform, Transfer, Store, Regulate, Guide, Support,
      Protect, Indicate, Connect]
    - Each sub-function must be: necessary AND verifiable AND solution-neutral
  reject_conditions:
    - Essential function (P16) not provided — cannot decompose without it
    - Sub-function names a specific technology — reject and rewrite before including
  prohibited_actions:
    - Do NOT include technology names in any sub-function statement
    - Do NOT mark [HITL-MANDATORY] sub-functions as automatable — engagement/weapons
      sub-functions are always human-authorized
    - Do NOT finalize structure without human review — missing sub-functions often only
      appear when considering failure modes

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_sub_function: false — generate full structure first, then single review
  on_structure_complete: true — present for review; common failure: missing sub-functions
    that only appear when analyzing failure modes or edge cases
  on_hitl_mandatory: "IMMEDIATE" — weapons release, engagement authorization, or lethal
    target classification sub-function identified; tag [HITL-MANDATORY]; alert before continuing

SAFETY_OVERRIDE: "If any sub-function involves weapons release, engagement authorization,
  or target lethal classification — tag [HITL-MANDATORY]. Cannot be automated."

SUCCESS_CRITERIA:
  count_range: "5–8 sub-functions (not over-decomposed or under-decomposed)"
  solution_neutrality: "0 technology names in any sub-function label"
  completeness: "completeness check table: all sub-functions pass all 5 checks
    (necessary, sufficient, solution-neutral, sequence logical, interface defined)"
  flow_diagram: "ASCII diagram shows energy/material/signal path from input to output"

FALLBACK_PROTOCOL:
  too_many_sub_functions: "Group related sub-functions; present grouping rationale; maintain
    5–8 count by combining where interfaces are trivial"
  missing_sub_function: "Identify gap from failure-mode perspective; propose candidate SF;
    tag as [CANDIDATE: review in completeness check]; present to human"
  interface_undefined: "Flag sub-function pair as [INTERFACE-GAP]; propose candidate
    interface type (energy/material/signal); ask human to confirm"
  unknown_error: "SAFE_STATE — output partial function structure with numbered SF slots;
    flag incomplete entries; await direction"

OUTPUT_FORMAT: Numbered sub-function list + ASCII flow diagram + completeness check table

--- COMPLETENESS CHECK (run for each sub-function) ---

| Sub-function | Necessary? | Sufficient? | Solution-neutral? | Sequence logical? | Interface defined? |
|-------------|-----------|------------|-------------------|-------------------|-------------------|

FLOW DIAGRAM FORMAT:
  [Input: energy/material/signal]
  → SF1: {{sub-function}}
  → SF2: {{sub-function}}
  ⟹ [parallel SFx + SFy]
  → SFn: {{sub-function}}
  → [Output: energy/material/signal]
```

---

### P52 — Working Principles Search (`/wp`)
**Use when:** After function structure (P17) — before building morphological matrix (P18)
**Why it works:** P&B §6.3: The quality of concept variants depends entirely on the breadth of working principles found. Without systematic search, morpho matrix defaults to "what we already know" and misses better solutions. This is the core creative step of Phase 2.

```
TASK: Search for working principles for each sub-function of {{product_name}} ({{VN-XXX-XXX}})
  For each sub-function from P17: find 3-5 working principles from diverse sources.
  Document physical effect, maturity, advantages/disadvantages, and defense applicability.
  Return: working principles table per sub-function, ready to populate morphological matrix (P18).

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2
  sub_functions: {{paste SF list from P17}}
  hard_constraints: {{paste from P16}}
  domain: {{training / maritime / engagement / surveillance / logistics}}
  existing_technologies: Workshop X assets — {{Hailo-8, acoustic sensors, IRONMESH, VN-CAM, etc.}}

CONSTRAINTS:
  hard_limits:
    - Minimum 3 working principles per sub-function (1–2 options = no real comparison)
    - Minimum 3 different source types used from the 6-source list
    - TRL estimate required for every principle
    - Local content assessment required for every principle (✓/⚠/✗)
  reject_conditions:
    - Function structure (P17) not provided — cannot search principles without sub-functions
    - Sub-functions are still technology-specific — run P16/P17 first
  prohibited_actions:
    - Do NOT include specific product brand names as "working principles" — describe physical effect
    - Do NOT include principles with TRL <3 without [EARLY-STAGE] risk tag
    - Do NOT include autonomous weapons-release principles without [ETHICAL-REVIEW-REQUIRED] tag
    - Do NOT proceed to P18 without explicit human review at HITL gate

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_sub_function: false — complete all sub-functions, then single review
  on_table_complete: true — after generating full principles table; flag any SF with <3 viable
    principles; missing principles here = missing concepts in P18
  on_ethical_flag: "IMMEDIATE" — [ETHICAL-REVIEW-REQUIRED] — autonomous weapons-release
    principle identified; stop; alert before adding to table

SAFETY_OVERRIDE: "If any working principle involves autonomous weapons release, self-modifying
  engagement rules, or unsupervised lethal action — tag [ETHICAL-REVIEW-REQUIRED]. Do not
  include in morpho matrix without authorization."

SUCCESS_CRITERIA:
  principles_per_sf: "≥3 viable principles per sub-function"
  source_diversity: "≥3 different source types used across the full search"
  trl_coverage: "100% of principles have TRL estimate (with [TRL-ESTIMATE] tag if unverified)"
  ach_coverage: "100% of principles have ACH potential note"
  local_content_coverage: "100% of principles have ✓/⚠/✗ local content flag"

FALLBACK_PROTOCOL:
  insufficient_principles_sf: "Try sources 5 (biomimicry) + 6 (TRIZ) for the sparse SF;
    document which sources were tried; if still <3 viable, present to human with explanation"
  all_principles_import_dependent: "Flag all as ⚠; add ACH compensation note per principle;
    do not silently exclude — import dependency is a constraint to address, not a disqualifier"
  high_trl_uncertainty: "Tag all uncertain estimates as [TRL-ESTIMATE]; propose validation
    method (literature search, lab test, supplier query)"
  unknown_error: "SAFE_STATE — output partial table; mark unanalyzed SF rows; await direction"

UNCERTAINTY_FLAG: true — tag TRL estimates without test data as [TRL-ESTIMATE]
OUTPUT_FORMAT: Working principles table per sub-function + source summary

--- SEARCH SOURCES (use ≥3 different types) ---

1. PHYSICAL EFFECTS CATALOGS
   → What physical phenomena can achieve this sub-function?
   → Mechanical, electrical, optical, acoustic, thermal, magnetic, chemical, nuclear (if applicable)

2. SOLUTION CATALOGS / DESIGN HANDBOOKS
   → Known mechanisms for this type of function (Pahl & Beitz catalogs, machine design textbooks)
   → Standard machine elements (bearings, gears, springs, cams, linkages)

3. LITERATURE / PATENTS
   → Published papers, patent databases, defense technology reports
   → Key question: "Who else has solved this sub-function?"

4. COMPETITOR ANALYSIS
   → How do imported products solve this sub-function?
   → What are their known weaknesses? (opportunity for ACH improvement)

5. BIOMIMICRY / CROSS-DOMAIN ANALOGIES
   → Nature-inspired solutions, cross-industry transfer
   → Example: echolocation → acoustic detection; gecko feet → adhesion

6. BRAINSTORMING / TRIZ
   → Inventive principles, contradiction matrix
   → Team-based creative exploration (even solo, apply TRIZ contradiction analysis)

--- WORKING PRINCIPLES TABLE (per sub-function) ---

| SF | Principle Name | Physical Effect | Source | TRL | Advantages | Disadvantages | Local Content | ACH Potential |
|----|---------------|----------------|--------|-----|-----------|--------------|--------------|--------------|
| SF1 | {{name}} | {{effect}} | {{1-6}} | {{1-9}} | {{list}} | {{list}} | ✓/⚠/✗ | {{how AI compensates}} |
| SF1 | {{name}} | {{effect}} | {{1-6}} | {{1-9}} | {{list}} | {{list}} | ✓/⚠/✗ | {{}} |
| SF1 | {{name}} | {{effect}} | {{1-6}} | {{1-9}} | {{list}} | {{list}} | ✓/⚠/✗ | {{}} |
| SF2 | ... | ... | ... | ... | ... | ... | ... | ... |

SOURCE SUMMARY:
  Sources used: {{list which of 1-6 were used}}
  Sources NOT used: {{list which were skipped — explain why or flag for future search}}
  Confidence level: HIGH (≥4 sources) / MEDIUM (3 sources) / LOW (<3 sources)

FEED TO P18: This table becomes the rows and columns of the morphological matrix.
  Each sub-function = one row. Each working principle = one column option.
```

---

### P18 — Morphological Matrix
**Use when:** Function structure approved — systematic concept generation
**Why it works:** Prevents fixation on first idea. Generates systematic variants covering the solution space.

```
TASK: Build morphological matrix for {{product_name}} ({{VN-XXX-XXX}})
  Generate 3-5 working principle options per sub-function.
  Apply compatibility pre-filter. Identify 3-5 viable concept paths.
  Return: matrix table + compatibility map + selected concept paths.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2
  sub_functions: {{paste SF list from P17}}
  hard_constraints: {{paste from P16}}
  preferred_technologies: Workshop X assets (Hailo-8, acoustic sensors, IRONMESH)
  local_content_priority: high — Vietnamese-producible options preferred

CONSTRAINTS:
  hard_limits:
    - 3–5 working principle options per sub-function row (min 3 to ensure real choice)
    - 3–5 viable concept paths selected (minimum 2 for meaningful VDI comparison)
    - Compatibility rule: energy/material/signal interfaces must match between adjacent SFs
    - Incompatible combinations must be crossed out before concept path selection
  reject_conditions:
    - Working principles (P52) not provided — cannot build matrix without principles per SF
    - Function structure (P17) not provided — cannot structure the matrix rows
    - <2 viable concept paths after compatibility filter — return to P52 for more principles
  prohibited_actions:
    - Do NOT include incompatible option combinations in concept paths
    - Do NOT include principles tagged [HITL-REQUIRED] without explicit authorization
    - Do NOT auto-select concept paths — present to human for selection
    - Do NOT pre-filter during generation — populate all dimensions first, compatibility after

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

HITL_CHECKPOINT:
  per_row: false — complete the full matrix first, then single review
  on_concept_paths: true — after identifying viable concept paths; human selects which
    proceed to sketching; flag any promising combination that may have been missed
  on_hitl_required: "IMMEDIATE" — working principle with [HITL-REQUIRED] tag in a
    concept path; flag before including in path selection

SAFETY_OVERRIDE: "If any working principle option involves uncontrolled autonomous action
  (no HITL) on safety-critical sub-function — mark [HITL-REQUIRED]. Do not include in
  concept paths without explicit authorization."

SUCCESS_CRITERIA:
  matrix_completeness: "all sub-functions from P17 have ≥3 options per row"
  compatibility_transparency: "incompatible combinations explicitly marked with ✗ + reason"
  concept_count: "3–5 viable concept paths with selection rationale"
  diversity: "concept paths cover meaningfully different combinations (not Option A throughout)"

FALLBACK_PROTOCOL:
  too_few_viable_paths: "Generate additional options for rows with <3 non-crossed options
    (round 2); if still <3 paths after round 2 → escalate to human; max ITERATION_MAX: 2"
  all_paths_import_dependent: "Flag all as [IMPORT-DEPENDENT]; ask whether Workshop X can
    accept this for prototype; do not silently exclude from concept evaluation"
  zero_viable_paths: "Return to P16 — hard constraint set may be over-specified;
    present specific blocking constraint to human before re-run"
  unknown_error: "SAFE_STATE — output partial matrix; mark incomplete rows; await direction"

OUTPUT_FORMAT: Matrix table + compatibility notes + concept path descriptions
ITERATION_MAX: 2 — if <3 viable paths after compatibility filter, generate additional options before second filter pass

--- MATRIX STRUCTURE ---

| Sub-Function | Option A | Option B | Option C | Option D | Option E |
|--------------|----------|----------|----------|----------|----------|
| SF1: ...     | sketch/principle | ... | ... | | |

COMPATIBILITY PRE-FILTER:
  For each adjacent SF pair: do outputs/inputs match?
  ✗ INCOMPATIBLE: mark cell with ✗ + reason
  ✓ COMPATIBLE: valid combination
  ? BRIDGE-NEEDED: possible with adapter — flag for cost assessment

CONCEPT PATHS:
  Concept A: [SF1-OptionX] → [SF2-OptionY] → ... selection rationale: {{}}
  Concept B: ...

COMBINATION COUNT: m₁ × m₂ × ... = N total
  If N >1000: confirm selected paths cover diversity of solution space
```

---

### P19 — Concept Sketch Review
**Use when:** Concepts sketched — before formal VDI evaluation
**Why it works:** Catches non-viability before spending time on detailed scoring.

```
TASK: Review {{N}} concept sketches for {{product_name}} ({{VN-XXX-XXX}})
  Check completeness, physics, local content, detail equivalence, and Workshop X feasibility.
  Return: review table + proceed/revise/eliminate recommendation per concept.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2
  concepts: {{A, B, C — descriptions or references}}
  function_structure: {{reference P17}}
  requirements_key: {{range / energy / force requirements from Phase 1}}

CONSTRAINTS:
  hard_limits:
    - All concepts must be at equivalent description depth before VDI scoring
    - Minimum 2 concepts must proceed to VDI evaluation for meaningful comparison
    - Local content preliminary estimate: flag any concept requiring >60% import by value
  reject_conditions:
    - No concepts provided from P18 — cannot review without concept descriptions
    - Only 1 concept available — VDI comparison is meaningless; return to P18 for alternatives
  prohibited_actions:
    - Do NOT eliminate a concept without presenting finding and reason to human first
    - Do NOT proceed to VDI with only 1 surviving concept — always return to P18 first
    - Do NOT approve any concept sketch with single-point weapons control without
      [SAFETY-REVIEW-REQUIRED] flag and explicit human confirmation

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_concept: false — review all concepts, then single decision
  on_elimination_candidate: true — before eliminating any concept; present finding + reason;
    elimination at this stage is significant and not easily reversed
  on_safety_review: "IMMEDIATE" — [SAFETY-REVIEW-REQUIRED] — single-point weapons control
    detected; flag before approving concept for VDI scoring

SAFETY_OVERRIDE: "If any concept sketch relies on single-point control of weapons system
  without redundant override — flag [SAFETY-REVIEW-REQUIRED]. Do not approve for VDI
  without safety review."

SUCCESS_CRITERIA:
  completeness_check: "all sub-functions from P17 addressed in each surviving concept"
  physics_validation: "all principles verified against product parameters (range/energy/force)"
  detail_equivalence: "all surviving concepts at same description depth before P20/P21"
  minimum_survivors: "≥2 concepts proceed to P20 (Selection Chart)"

FALLBACK_PROTOCOL:
  concept_incomplete: "Flag missing sub-functions per concept; ask whether to expand concept
    or eliminate; do not silently reduce evaluation scope"
  physics_uncertain: "Tag as [PHYSICS-UNCERTAIN: verify at these parameters]; propose
    validation method (calculation, simulation, or prototype test)"
  only_one_survivor: "Present finding to human; recommend returning to P18 with different
    working principle combinations; do not proceed to VDI with single concept"
  unknown_error: "SAFE_STATE — output partial review table; flag unreviewed concepts; await direction"

OUTPUT_FORMAT: Review summary table per concept

--- REVIEW CHECKLIST (per concept) ---

1. COMPLETENESS: All sub-functions from P17 addressed?
2. PHYSICS: Principle works at these parameters? (check range/energy/force from requirements)
3. LOCAL CONTENT: Estimated % by value producible in Vietnam?
4. DETAIL EQUIVALENCE: Same depth as other concepts? (if not, note what's missing)
5. WORKSHOP X FEASIBILITY: Can we build this? What needs to be acquired?
6. ACH POTENTIAL: Can AI compensate for hardware limitations? How?

REVIEW TABLE:
| Concept | Complete? | Physics OK? | Local% est. | Equiv. Detail? | WX Feasible? | Decision |
|---------|-----------|------------|-------------|----------------|--------------|---------|
| A | | | | | | Proceed/Revise/Eliminate |
```

---

### P20 — Selection Chart (Binary Elimination)
**Use when:** After concept sketch review — quick elimination before detailed VDI scoring
**Why it works:** Saves VDI effort by eliminating obvious failures on 6 binary criteria.

```
TASK: Apply Selection Chart to {{N}} concepts for {{product_name}} ({{VN-XXX-XXX}})
  Apply 6 criteria: mark +/−/? per concept per criterion.
  Eliminate concepts with any − on A/B/C. Return surviving concepts for VDI.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2
  concepts: {{A, B, C, D, E — from P19}}
  requirements_list: {{reference P13/P14}}
  cost_ceiling: {{from requirements}}

CONSTRAINTS:
  hard_limits:
    - Mandatory fail criteria (A, B, C): any single − eliminates the concept — non-negotiable
    - Conditional fail criteria (D, E, F): − triggers revise option before eliminate
    - Criterion E (Safety) treated as mandatory fail — any − eliminates regardless of others
    - ? entries must be resolved before VDI — cannot score uncertain criteria as pass
    - Minimum 2 survivors for VDI comparison
  reject_conditions:
    - No concepts from P19 provided — cannot apply selection chart without concept descriptions
    - Only 1 concept provided — chart is meaningless; return to P18 for alternatives
  prohibited_actions:
    - Do NOT eliminate a concept without presenting finding and reason to human
    - Do NOT treat ? as pass — ? means information must be gathered first
    - Do NOT proceed to VDI with <2 survivors — return to P18 first

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_elimination: true — present finding and reason before each concept elimination;
    elimination is effectively irreversible at this stage without major rework
  on_zero_survivors: "IMMEDIATE" — all concepts eliminated; fundamental scope/constraint
    problem; present to human before returning to P16

SAFETY_OVERRIDE: "Criterion E (Safety) is treated as mandatory fail — any − on safety
  eliminates concept regardless of other scores."

SUCCESS_CRITERIA:
  chart_completeness: "all 6 criteria scored for all concepts (no blank cells)"
  elimination_documented: "eliminated concepts have criterion + reason logged"
  question_marks_resolved: "0 unresolved ? entries before proceeding to VDI"
  minimum_survivors: "≥2 concepts pass to P21 (VDI)"

FALLBACK_PROTOCOL:
  question_marks_unresolvable: "Flag as [INFORMATION-GAP]; note what is needed and from whom;
    treat as − (conservative) until resolved; present to human"
  zero_survivors: "Present all elimination findings; identify the most blocking criterion;
    recommend specific constraint relaxation or new concept generation direction;
    return to P16 or P18 depending on root cause"
  safety_fail_disputed: "Maintain − on Criterion E regardless; present [SAFETY-BLOCKER]
    to human; discuss mitigation options before reconsidering the concept"
  unknown_error: "SAFE_STATE — output partial chart; mark unscored rows; await direction"

OUTPUT_FORMAT: Selection chart table + elimination log + survivors list

SELECTION CHART:
| Criterion | Concept A | Concept B | Concept C | Notes |
|-----------|-----------|-----------|-----------|-------|
| A: Compatible with all requirements? | | | | Cross-check Phase 1 list |
| B: Fulfills all DEMANDS (D)? | | | | Every D-classified requirement |
| C: Technically realizable? | | | | WX skills + budget + timeline |
| D: Cost within budget? | | | | ≤ {{cost ceiling}} |
| E: Safety measures adequate? | | | | All [SAFETY-CRITICAL] requirements |
| F: Fits Workshop X capabilities? | | | | Manufacturing, testing, support |

RESULT:
  ELIMINATED: {{Concept X}} — criterion failed: {{A/B/C/D/E/F}} — reason: {{}}
  REVISED: {{Concept Y}} — change: {{specific}} — re-check before VDI
  SURVIVING FOR VDI: {{Concept A, C, ...}}
```

---

### P21 — VDI 2225 Evaluation
**Use when:** 2-5 concepts passed Selection Chart — final concept selection
**Why it works:** Structured scoring prevents gut-feel selection. Value profiles reveal weak spots before committing to embodiment.

```
TASK: Conduct VDI 2225 evaluation for {{product_name}} ({{VN-XXX-XXX}})
  Score {{N}} surviving concepts on 10-15 criteria.
  Calculate Rt per concept. Identify weak spots. Run sensitivity analysis.
  Present recommendation + rationale. WAIT for approval.

CONTEXT:
  product: {{VN-XXX-XXX}}
  phase: 2 — final selection
  surviving_concepts: {{A, C, E — from P20}}
  requirements_list: {{reference}}
  vdi_scale: 0=Unsatisfactory · 1=Barely adequate · 2=Adequate · 3=Good · 4=Ideal

CONSTRAINTS:
  hard_limits:
    - 10–15 criteria (independent — no double-counting between criteria)
    - Weights must sum to exactly 1.00
    - Score row by row: all concepts per criterion before moving to next (prevents anchoring bias)
    - Weak spot: score ≤1 on criterion with weight ≥0.08 = weak spot → must address
    - Sensitivity: vary top 3 weights ±20% — report if ranking changes
    - Gate threshold: Rt ≥0.70 for APPROVE; 0.60–0.69 requires sensitivity + discussion
  reject_conditions:
    - <2 concepts provided — VDI requires comparison; return to P18/P19
    - Weight sum ≠ 1.00 — recalculate before proceeding
  prohibited_actions:
    - Do NOT auto-select winning concept — present scores and WAIT for human gate decision
    - Do NOT bias weights toward preferred concept — derive from requirements list
    - Do NOT approve concept with unresolved weak spot on safety/reliability criteria
    - Do NOT skip sensitivity analysis — hiding sensitivity hides decision risk

TOOLS_ALLOWED: ["read_file", "calculate", "write_file"]

HITL_CHECKPOINT:
  per_criterion: false — score all criteria, all concepts, then review
  on_scored_table_complete: true — present full scored table + Rt + weak spots + sensitivity;
    WAIT for gate decision; NEVER auto-select concept
  on_safety_weak_spot: "IMMEDIATE" — weak spot (score ≤1) on safety or reliability criterion;
    flag before proceeding; present mitigation plan requirement

SAFETY_OVERRIDE: "If selected concept has weak spot on safety, reliability, or defense
  compliance criteria — do not mark as approved. Present mitigation plan first. Gate decision
  requires explicit safety confirmation."

SUCCESS_CRITERIA:
  criteria_independence: "no two criteria measure the same requirement (checked for overlap)"
  weight_sum: "exactly 1.00 (show calculation)"
  scoring_order: "scored row by row (all concepts per criterion) — order documented"
  sensitivity_complete: "top 3 weights varied ±20%; ranking change result reported"
  weak_spot_addressed: "all weak spots have documented mitigation plan or explicit human acceptance"

FALLBACK_PROTOCOL:
  weight_sum_error: "Recalculate; do NOT proceed with incorrect weights; flag as [WEIGHT-ERROR]"
  all_concepts_weak: "Rt <0.60 for all concepts — return to P18; present top 3 blocking
    criteria driving low scores; recommend specific concept generation focus for round 2"
  ranking_sensitive: "If sensitivity analysis changes ranking — present both scenarios clearly;
    recommend additional information gathering on the top 3 weight criteria before deciding"
  safety_weak_spot: "Present [SAFETY-WEAK-SPOT] with specific mitigation options; do not
    mark as APPROVED until mitigation is documented and human has acknowledged"
  unknown_error: "SAFE_STATE — output partial scored table; mark unscored rows; await direction"

OUTPUT_FORMAT: Scored table + Rt values + weak spot analysis + sensitivity results + recommendation
EVIDENCE_REQUIRED: true — justify every weight in 1 sentence

--- VDI 2225 EXECUTION ---

STEP 1: DERIVE CRITERIA (from requirements list)
  Template (adapt/add/remove for this product):
  1. Functional performance — primary function met quantitatively
  2. Reliability / MTBF
  3. Safety / fail-safe behavior
  4. Environmental robustness (MIL-STD-810)
  5. Ergonomics / operator usability
  6. Manufacturability
  7. Assembleability (field installation)
  8. Maintainability (MTTR, maintenance levels)
  9. Local content potential (% Vietnamese by value)
  10. Development cost vs. budget
  11. Unit production cost vs. target
  12. Development schedule vs. target date
  13. {{Product-specific criterion 1}}
  14. {{Product-specific criterion 2}}

STEP 2: ASSIGN WEIGHTS
  | Criterion | Weight | Justification (1 sentence) |
  Sum must = 1.00

STEP 3: SCORE (row by row — all concepts per criterion)
  | Criterion | Weight | Concept A | Concept C | Concept E |
  | ...       | 0.XX   | 0-4       | 0-4       | 0-4       |
  | Weighted sum | 1.00 | Σ(w×s) | Σ(w×s) | Σ(w×s) |
  | Rt = sum/4 | | /1.0 | /1.0 | /1.0 |

STEP 4: WEAK SPOT ANALYSIS
  Weak spot = score ≤1 AND weight ≥0.08
  For each: Can it be designed out in embodiment? Or fatal?

STEP 5: SENSITIVITY ANALYSIS
  Vary top 3 weights ±20%. Does ranking change?
  If YES: result is sensitive — flag for discussion

STEP 6: DECISION THRESHOLD
  Rt ≥0.70, no weak spots → SELECT
  Close (Rt 0.60-0.70) → Sensitivity analysis + discuss
  All weak (Rt <0.60) → Return to P18 — generate new concepts
```

---

### P50 — Cross-Product Component Reuse Analysis
**Use when:** After concept selection (P21) and before embodiment (Phase 3) — identifies which components can be shared across IRONMESH products to hit the 70% platform reuse target.
**Why it works:** IRONMESH's margin structure depends on platform commonality. Without systematic reuse analysis, each product gets designed in isolation and the platform fractures. This prompt forces the comparison BEFORE embodiment locks in component choices.

> **Origin:** Workshop X Template D2, upgraded to v3.0 schema

```
TASK: Analyze component reuse opportunities between {{product_A}} ({{VN-XXX-A}}) and {{product_B}} ({{VN-XXX-B}})
  Calculate reuse percentage. Recommend design changes to increase reuse.

CONTEXT:
  product_a: "{{VN-XXX-A}} — see {{design_doc_A_path}}"
  product_b: "{{VN-XXX-B}} — see {{design_doc_B_path}}"
  ironmesh_platform: "see IRONMESH CDM architecture doc"
  reuse_target: "70% component reuse across IRONMESH products"
  current_estimated_reuse: "{{estimated %}}"
  analysis_scope: "{{compute / sensing / comms / power / enclosure / software / all}}"

CONSTRAINTS:
  hard_limits:
    reuse_target: ">= 70% by component count across platform"
    analysis_categories: "6 mandatory — compute, sensing, comms, power, enclosure, software"
    recommendation_max: "5 design changes — highest-impact first"
  reject_conditions: [
    "product_specs_not_provided",             — cannot compare without specs
    "only_one_product_specified",             — reuse requires ≥2 products
    "products_have_no_functional_overlap"     — state this, don't force-fit reuse
  ]
  prohibited_actions: [
    "force_reuse_where_requirements_differ",  — reuse must not compromise performance
    "ignore_environmental_differences",        — naval vs land changes enclosure/materials
    "count_software_as_100%_reuse",           — only count modules with identical interface
    "ignore_export_control_differences"        — V-X restrictions affect component choice
  ]

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "calculate"]

HITL_CHECKPOINT:
  per_category: false             — review full analysis
  on_completion: true             — KN validates physical/environmental compatibility
  on_forced_reuse_concern: true   — if reuse would compromise product requirements
  on_export_control: "IMMEDIATE"  — any component with EAR/ITAR implications

SAFETY_OVERRIDE: "If reuse analysis suggests sharing safety-critical components across products with different safety profiles — flag [SAFETY-REUSE-REVIEW]. Each product must independently meet its safety requirements."

SUCCESS_CRITERIA:
  coverage: "all 6 component categories analyzed"
  quantified: "reuse % calculated per category AND overall"
  actionable: "each recommendation has effort estimate (hours) and impact (% reuse gain)"
  honest: "0% reuse categories explicitly stated, not hidden"

FALLBACK_PROTOCOL:
  specs_incomplete: "flag which specs needed, analyze available categories, mark gaps"
  no_reuse_possible: "state honestly — not every product pair shares components"
  reuse_compromises_performance: "quantify trade-off, present to KN for decision"
  unknown_error: "SAFE_STATE — output partial analysis, flag incomplete categories"

OUTPUT_FORMAT: Reuse analysis report — 6 sections

--- ANALYSIS STRUCTURE ---

STEP 1: COMPONENT INVENTORY
  | Category | Product A Components | Product B Components |
  | Compute | {{list}} | {{list}} |
  | Sensing | {{list}} | {{list}} |
  | Comms | {{list}} | {{list}} |
  | Power | {{list}} | {{list}} |
  | Enclosure | {{list}} | {{list}} |
  | Software | {{list}} | {{list}} |

STEP 2: REUSE CLASSIFICATION
  | Component | Product A | Product B | Reuse Level | Notes |
  Reuse levels:
    IDENTICAL (100%) — same part, same config
    VARIANT (80%+) — same part, different config/firmware
    SIMILAR (50-80%) — shared architecture, different implementation
    UNIQUE (0%) — product-specific, no sharing possible

STEP 3: REUSE PERCENTAGE
  | Category | Identical | Variant | Similar | Unique | Category Reuse % |
  | OVERALL | | | | | __% |
  vs. target: 70% → {{above / below by X%}}

STEP 4: DESIGN CHANGE RECOMMENDATIONS (top 5 by impact)
  | # | Change | Affects | Effort (h) | Reuse Gain (%) | Trade-off |
  | 1 | {{}} | {{which product(s)}} | {{}} | {{}} | {{}} |

STEP 5: PLATFORM REUSE ROADMAP
  Current: {{X}}% → After recommendations: {{Y}}% → Target: 70%
  Gap remaining: {{Z}}% — requires: {{what additional changes}}
```

**Learned variations:**
- Family analysis (V-SMASH 8 products): run pairwise on flagship first, then delta for variants
- Cross-family (V-SMASH vs VN-12.7MM-SIM): focus on compute + software + comms (most reuse potential)
- Export variant (V-X): add EAR/ITAR column to reuse classification

---

### P53 — Phase 2 Gate Review (`/gate2`)
**Use when:** Concept selected via VDI 2225 — formal gate before Phase 3 Embodiment Design
**Why it works:** Without a formal Phase 2 gate, teams drift into embodiment with unresolved concept weaknesses. This gate forces explicit confirmation that the selected concept is viable and that concept-level risks are acknowledged before committing embodiment resources.

```
TASK: Conduct Phase 2 Gate Review for {{product_name}} ({{VN-XXX-XXX}})
  Score 6 criteria (weighted). Calculate total. Present gate decision options A/B/C/D.
  WAIT for explicit approval before Phase 3 begins.

CONTEXT:
  product: {{VN-XXX-XXX}}
  inputs:
    - Problem Abstraction (P16): {{reference}}
    - Function Structure (P17): {{reference}}
    - Working Principles Search (P52): {{reference}}
    - Morphological Matrix (P18): {{reference — N concepts generated}}
    - Concept Sketch Review (P19): {{reference}}
    - Selection Chart (P20): {{reference — N concepts survived}}
    - VDI 2225 Evaluation (P21): {{reference — selected concept + Rt score}}
    - Reuse Analysis (P50, if done): {{reference or "not done"}}
  gate_target: weighted total ≥3.5/4.0

CONSTRAINTS:
  hard_limits:
    - Score each criterion independently before calculating weighted total
    - Gate target: weighted total ≥3.5/4.0
    - Score 0 on any criterion blocks APPROVE regardless of total
    - Any VDI 2225 weak spot (score ≤1, weight ≥0.08) not addressed = blocks gate
    - Minimum 3 concepts evaluated in VDI 2225 — if <3, Criterion A (Diversity) max score = 2
  reject_conditions:
    - VDI 2225 evaluation (P21) not provided — cannot conduct Phase 2 gate without this
    - No selected concept — gate cannot be APPROVE without an identified winning concept
  prohibited_actions:
    - Do NOT auto-proceed to Phase 3 — WAIT for explicit human gate decision
    - Do NOT approve if unresolved weak spots exist on safety or reliability criteria
    - Do NOT present fewer than 4 options (A/B/C/D must all be shown)
    - Do NOT round up weighted total — show exact calculation

TOOLS_ALLOWED: ["read_file", "calculate"]

HITL_CHECKPOINT:
  per_criterion: false — score all criteria first, then single review
  on_score_complete: true — present scores + total + all 4 options; concept selection is
    the most consequential design decision; WAIT for explicit gate decision
  on_safety_weak_spot: "IMMEDIATE" — unresolved safety/reliability weak spot found;
    flag as gate blocker; do not proceed to recommendation without mitigation plan

SAFETY_OVERRIDE: "If selected concept has unresolved weak spot on safety or reliability
  criteria — do not mark as APPROVE. Safety weak spots are blockers regardless of total score."

SUCCESS_CRITERIA:
  scoring_completeness: "all 6 criteria scored with ≥1 justification sentence per score"
  calculation_transparency: "weighted total shown with explicit formula"
  weak_spot_status: "all VDI 2225 weak spots accounted for (resolved or mitigation documented)"
  decision_options: "all 4 options (A/B/C/D) presented with threshold conditions"

FALLBACK_PROTOCOL:
  missing_p21: "Cannot score B (Evaluation Rigor) or C (Concept Quality) — present partial
    gate with [DATA-MISSING] on affected criteria; recommend running P21 before completing"
  weak_spots_unresolved: "Present [WEAK-SPOT-BLOCKER] for each unresolved item; recommend
    either addressing in embodiment sketch or explicitly accepting technical risk in writing"
  borderline_score: "If total is 3.4–3.5 — explicitly flag as borderline; list specific items
    to address; do not round up; let human decide APPROVE or REVISE"
  unknown_error: "SAFE_STATE — output partial scores; mark unscored criteria; await direction"

OUTPUT_FORMAT: Scored checklist table + weighted total + gate decision recommendation

--- GATE CRITERIA (score 0-4 each) ---

Scale: 4=Excellent | 3=Good | 2=Adequate | 1=Barely adequate | 0=Fail (blocks proceed)

A. CONCEPT DIVERSITY (weight: 15%)
   - ≥3 substantially different concepts evaluated?
   - Solution space adequately explored (P52 sources ≥3 types)?
   - Not all concepts from same working principle family?
   Score A: ___/4

B. EVALUATION RIGOR (weight: 25%)
   - VDI 2225 criteria independent and complete?
   - Weights justified (not biased toward preferred concept)?
   - Sensitivity analysis performed (top 3 weights ±20%)?
   - Score row-by-row (all concepts per criterion)?
   Score B: ___/4

C. SELECTED CONCEPT QUALITY (weight: 25%)
   - Rt ≥0.70 for selected concept?
   - No weak spots (score ≤1 on criterion weight ≥0.08)?
   - If weak spots exist: mitigation plan documented?
   - Selected concept addresses top ODI opportunities (if ODI done)?
   Score C: ___/4

D. FUNCTION COVERAGE (weight: 15%)
   - All sub-functions from P17 have working principle assigned?
   - Interfaces between sub-functions compatible?
   - No sub-function relies on unproven technology (TRL <4) without risk plan?
   Score D: ___/4

E. FEASIBILITY CHECK (weight: 15%)
   - Local content ≥40% appears achievable at concept level?
   - Cost estimate within reasonable range of target (±30% at this stage)?
   - Workshop X can build a prototype?
   Score E: ___/4

F. DOCUMENTATION (weight: 5%)
   - Selection rationale documented (not just numbers — WHY this concept)?
   - Eliminated concepts documented with reasons (for future reference)?
   - Fallback concept identified (if primary fails in Phase 3)?
   Score F: ___/4

WEIGHTED TOTAL:
  = (0.15×A + 0.25×B + 0.25×C + 0.15×D + 0.15×E + 0.05×F)
  Target: ≥3.5/4.0

GATE DECISION OPTIONS:
  A) ✅ APPROVE (≥3.5, no 0-scores, no unresolved weak spots) — proceed to Phase 3
  B) 🔄 REVISE (2.5-3.4 OR unresolved weak spots) — address items, re-review
  C) ⏸️ PAUSE — need additional information (customer input, technology validation)
  D) ❌ CANCEL — no viable concept found, return to Phase 0/1 to re-scope

PRESENT scores + total + recommendation. WAIT. Do NOT proceed without explicit response.
```

---

## CAPTURE PROTOCOL

```
After Phase 2:
Product: {{VN-XXX-XXX}}
Gate 2 score: ___/4.0
Selected concept: {{letter + name}}
Rt score: ___/1.0
Weak spots: {{list}}
Mitigation plan: {{yes/no + what}}
Iterations needed (how many P18 rounds): N
Working principles search sources used: {{list of 1-6}}
Reuse analysis done: YES / NO — if YES: reuse %: ___
```
