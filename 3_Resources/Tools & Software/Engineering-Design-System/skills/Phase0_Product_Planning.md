---
skill: S1 — AI Literacy × Engineering Design
phase: 0 — Product Planning
framework: Pahl & Beitz Section 3.1
slash_commands: /gate0, /tnkct
type: prompt-library
version: 4.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v3.1 — P63 added (TNKCT — Vietnamese military council format)
  v4.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier, HITL trigger matrix,
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to P09/P10/P11/P56;
          P63 HITL upgraded to trigger matrix + SUCCESS_CRITERIA + FALLBACK_PROTOCOL (2026-03-04)
---

# Phase 0 — Product Planning Prompts

> **When to use Phase 0:** Before starting any new product or major upgrade.
> **Output:** Product Proposal document — preliminary requirements and cost targets.

---

## PROMPT INDEX

| # | Name | Use When |
|---|------|----------|
| P09 | Product Situation Analysis | Starting new product — understand the landscape |
| P10 | Product Idea Generation | Generate product concepts before designing |
| P11 | Product Proposal Compilation | Ready to commit to a product direction |
| P56 | Phase 0 Gate Review (`/gate0`) | Before proceeding to Phase 1 — formal gate |
| P63 | Bản Tính năng Kỹ chiến thuật (`/tnkct`) | Vietnamese military council review — tactical-technical performance spec |

---

### P09 — Product Situation Analysis
**Use when:** Starting any new product or major upgrade decision
**Why it works:** Forces strategic thinking BEFORE engineering. Prevents building the wrong product correctly.

```
TASK: Conduct product situation analysis for {{product_name_or_concept}}
  Assess lifecycle phase, market position, company fit, technology readiness, and competition.
  Return: situation table + recommendation (PROCEED / REDESIGN SCOPE / DEFER / ABANDON).

CONTEXT:
  product_concept: {{product_name_or_concept}}
  portfolio_position: {{new product / upgrade to existing / replacement}}
  domain: {{Vietnamese defense / dual-use / export}}
  budget_envelope: {{rough order of magnitude}}
  company: Workshop X — ACH philosophy, Claude Code, IRONMESH, Hailo-8

CONSTRAINTS:
  hard_limits:
    - PROCEED only when: TRL ≥4 AND local_content_possible ≥40% AND competitive_advantage_clear
    - Flag as RISKY if: TRL <4 OR delivery >3 years OR no clear Vietnamese market
    - Output: summary table + max 1 page recommendation
  reject_conditions:
    - IP conflict confirmed — reject immediately; do not assess further
    - Regulatory prohibition confirmed — reject immediately
    - Product concept is undefined (<5 words) — ask for clarification before analysis
  prohibited_actions:
    - Do NOT recommend PROCEED without meeting all 3 PROCEED conditions simultaneously
    - Do NOT assess controlled technology (ITAR/EAR/dual-use) further without flagging first
    - Do NOT include supplier pricing, procurement terms, or contract details in output

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — single table, single review
  on_situation_table: true — present situation table before writing recommendation;
    wait for confirmation of facts before proceeding
  on_controlled_tech: "IMMEDIATE" — [ITAR/EAR/DUAL-USE] detected; flag and stop
    all further analysis until clearance confirmed

SAFETY_OVERRIDE: "If product involves controlled technology (ITAR, EAR, dual-use weapons) —
  flag immediately. Do not assess further without clearance."

SUCCESS_CRITERIA:
  analysis_coverage: "all 5 sections complete (lifecycle, market matrix, competence, TRL, competition)"
  trl_per_technology: "TRL assessed individually for every key technology in product"
  recommendation_clarity: "PROCEED / REDESIGN SCOPE / DEFER / ABANDON with ≥3 specific reasons"
  stale_data_flagged: "all market data >12 months old tagged [STALE: verify]"

FALLBACK_PROTOCOL:
  insufficient_market_data: "Complete analysis with [STALE] or [ASSUMPTION] tags; flag confidence
    as LOW; recommend validation step before committing resources"
  trl_unclear: "List all key technologies; rate each separately; flag any at TRL boundary as
    [TRL-ESTIMATE: verify with prototype test]"
  controlled_tech_detected: "STOP all further analysis; present [ITAR/EAR/DUAL-USE] flag;
    await explicit clearance confirmation before resuming"
  unknown_error: "SAFE_STATE — output partial analysis with explicit section markers; await direction"

UNCERTAINTY_FLAG: true — tag any market data over 12 months old as [STALE: verify]
OUTPUT_FORMAT: Summary table + recommendation paragraph

--- ANALYSIS SECTIONS ---

1. LIFECYCLE PHASE
   - Technology maturity: mature / emerging / frontier?
   - Product type: new (high R&D) / upgrade (medium) / variant (low)?
   - Expected product life: {{years}}

2. PRODUCT-MARKET MATRIX
   - Existing product + Existing market → MARKET PENETRATION (lowest risk)
   - Existing product + New market → MARKET DEVELOPMENT
   - New product + Existing market → PRODUCT DEVELOPMENT
   - New product + New market → DIVERSIFICATION (highest risk)

3. COMPANY COMPETENCE MATCH
   - Workshop X advantage in this domain: {{specific capabilities}}
   - Existing assets to leverage: Claude Code / IRONMESH / Hailo-8 / domain expertise
   - Must-acquire capabilities: → flag as risk

4. TECHNOLOGY READINESS LEVEL (TRL)
   - TRL 1-3: Basic research → NOT suitable (too early)
   - TRL 4-6: Lab/prototype validated → 2-3 year development
   - TRL 7-9: Operational proven → 6-18 month integration
   - Assess each key technology in this product

5. COMPETITIVE LANDSCAPE
   - Vietnamese competitors: {{known / unknown}}
   - Import alternatives: {{foreign products}}
   - Our advantage: ACH philosophy, local support, IRONMESH integration
   - Patent/IP: {{known concerns or "not assessed"}}
```

---

### P10 — Product Idea Generation
**Use when:** Confirmed opportunity exists — need systematic concept generation before Phase 1
**Why it works:** 3-dimension matrix prevents fixation on first idea. Covers full solution space.

```
TASK: Generate product concept ideas for opportunity: {{opportunity_description}}
  Use 3-dimension matrix (Function × Working Principle × Embodiment).
  Return: idea table sorted by feasibility × impact.

CONTEXT:
  opportunity: {{opportunity_description}}
  customer_segment: {{Vietnamese Army / Navy / Air Force / Police / Dual-use}}
  budget_target: {{cost range}}
  timeline_target: {{months to first delivery}}
  domain: Vietnamese defense training / IRONMESH ecosystem

CONSTRAINTS:
  hard_limits:
    - ≥2 ideas per dimension combination (3×3 matrix = minimum 9 ideas before screening)
    - Local content target: ≥60% by value — flag ideas below this threshold
    - Flag as RISKY: TRL <4 OR delivery >3 years
    - Flag as IMPORT-DEPENDENT: local_content_possible <40%
    - Minimum 6 viable ideas required after screening
  reject_conditions:
    - No P09 situation analysis provided — without context, ideas may target the wrong problem
    - opportunity_description is <10 words — too vague; ask to clarify before generating
  prohibited_actions:
    - Do NOT pre-filter ideas during generation — screen only after matrix is fully populated
    - Do NOT include ideas requiring ITAR/EAR components without [EXPORT-REVIEW] tag
    - Do NOT proceed to P11 without explicit user selection of 2-3 ideas

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — review full matrix after generation, not cell by cell
  on_table_complete: true — after idea table generated; user selects 2-3 ideas;
    do not proceed to P11 without explicit selection
  on_ethical_flag: "IMMEDIATE" — [ETHICAL-REVIEW-REQUIRED] — idea involves autonomous
    lethal decision-making; stop and flag before adding to table

SAFETY_OVERRIDE: "If any idea involves autonomous lethal decision-making — flag as
  [ETHICAL-REVIEW-REQUIRED] and do not proceed without explicit authorization."

SUCCESS_CRITERIA:
  matrix_coverage: "≥3 dimension combinations covered (Function × Principle × Embodiment)"
  idea_count: "≥9 ideas generated before screening, ≥6 viable after screening"
  ach_assessed: "every idea has explicit ACH potential note"
  local_content_estimated: "every idea has % estimate (even if [ASSUMPTION])"

FALLBACK_PROTOCOL:
  insufficient_viable_ideas_round1: "Generate second round using different analogies
    (biomimicry, cross-industry transfer); max 2 rounds per ITERATION_MAX before escalating"
  all_ideas_import_dependent: "Flag all as [IMPORT-DEPENDENT]; add ACH compensation note per idea;
    do not silently exclude — import dependency is a constraint to design around, not a disqualifier"
  ethical_flag_triggered: "STOP; present [ETHICAL-REVIEW-REQUIRED] idea with specific concern;
    do not add to table without explicit authorization"
  unknown_error: "SAFE_STATE — output partial matrix with row markers; await human direction"

OUTPUT_FORMAT: Idea table + screening results
ITERATION_MAX: 2 — if first round generates <6 viable ideas, generate second round using different analogies

--- 3-DIMENSION IDEA MATRIX ---

DIMENSION 1 — FUNCTION:
  a) Same function as existing product, new form
  b) Extended function (current + new capability)
  c) Entirely new function

DIMENSION 2 — WORKING PRINCIPLE:
  a) Same physics as current Vietnamese approaches
  b) Different physics (e.g., acoustic → optical sensing)
  c) Combined physics (AI sensor fusion)

DIMENSION 3 — EMBODIMENT:
  a) Same form factor, new internals
  b) Miniaturized version
  c) Integrated / IRONMESH embedded

FOR EACH IDEA:
  - 1-sentence description
  - Primary function (solution-neutral)
  - Key technology dependency + TRL
  - Feasibility: EASY / MEDIUM / HARD
  - ACH potential: Can AI compensate hardware limits? Specify HOW.
  - Local content estimate: {{%}}

SCREENING TABLE (apply after generation):
  | Idea | TRL | Local% | Delivery | Feasibility | Screen result |
```

---

### P11 — Product Proposal Compilation
**Use when:** 2-3 ideas selected from P10 — ready to formalize before Phase 1
**Why it works:** Creates the foundation document that all downstream design decisions reference.

```
TASK: Compile Product Proposal document for {{product_name}} based on selected idea from P10.
  Output: 1-2 page Markdown document with YAML frontmatter, ready to save as project file.

CONTEXT:
  product_name: {{product_name}}
  product_code: {{VN-XXX-XXX format}}
  selected_idea: {{paste idea description from P10}}
  situation_analysis: {{reference P09 output}}
  company: Workshop X — IRONMESH ecosystem

CONSTRAINTS:
  hard_limits:
    - All performance targets must be quantified with numeric values and units
    - Working principle options: 3 maximum (Phase 2 selects — not locked at this stage)
    - Risk items: ≥1 per category (technical / schedule / market)
    - Output length: 1-2 pages maximum
  reject_conditions:
    - No P10 idea selected — cannot compile proposal without a selected concept
    - Product code not provided in VN-XXX-XXX format — request before creating document
    - All performance targets are qualitative only — cannot create valid proposal without numbers
  prohibited_actions:
    - Do NOT include pricing, supplier quotes, or contractual commitments without explicit instruction
    - Do NOT reference specific military unit designations or classified programs
    - Do NOT finalize document without explicit human confirmation of product code and targets

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — single document, single review
  on_draft_complete: true — present full draft before saving; user confirms product code
    and all performance targets before file is written
  on_classified_reference: "IMMEDIATE" — classified program reference detected; stop and flag

SAFETY_OVERRIDE: "Do not include pricing or contractual commitments in any Product Proposal
  without explicit instruction. Flag any reference to specific military units or classified programs."

SUCCESS_CRITERIA:
  quantification_rate: "100% of performance targets have numeric values with units"
  structure_completeness: "all 6 sections present with no remaining {{placeholder}} text"
  risk_coverage: "≥1 specific risk item per category (technical / schedule / market)"
  kill_condition_defined: "1 specific kill condition stated in Section 5"

FALLBACK_PROTOCOL:
  vague_targets: "Flag each as [NEEDS QUANTIFICATION]; propose plausible range with [ASSUMPTION]
    tag; ask user to confirm or correct before document is final"
  missing_product_code: "Halt document creation; ask for VN-XXX-XXX code; do not invent a code"
  all_working_principles_import_dependent: "Flag each as [IMPORT-DEPENDENT]; add mitigation
    strategy to Section 4; do not silently omit from proposal"
  unknown_error: "SAFE_STATE — output partial document with all 6 section headers; flag
    incomplete sections; await direction"

UNCERTAINTY_FLAG: true — tag every number without a verified source as [ASSUMPTION: needs verification]
OUTPUT_FORMAT: Markdown with YAML frontmatter (project, phase, type, version, created, status: draft)

--- DOCUMENT STRUCTURE ---

1. PRODUCT SUMMARY
   - Product name + code (VN-XXX-XXX)
   - Primary function (solution-neutral, 1 sentence)
   - Customer (who buys) vs. end-user (who uses) — distinguish
   - Target market: {{specific Vietnamese military unit or branch}}

2. STRATEGIC FIT
   - Which Workshop X capability does this leverage?
   - IRONMESH integration pathway (how does R2 loop benefit?)
   - Local content strategy: what is made locally vs. imported?

3. PRELIMINARY REQUIREMENTS (Phase 1 will quantify fully)
   - Top 3 performance targets (quantified):
   - Cost target: ≤{{X}}% of import equivalent
   - Delivery target: First unit by {{quarter/year}}
   - Key constraint (single most important boundary):

4. WORKING PRINCIPLE OPTIONS (3 max — Phase 2 selects)
   - Option A: {{brief description}}
   - Option B: {{brief description}}
   - Option C: {{brief description}}

5. RISK ASSESSMENT
   - Technical: HIGH/MEDIUM/LOW — top concern: {{specific}}
   - Schedule: HIGH/MEDIUM/LOW — top concern: {{specific}}
   - Market: HIGH/MEDIUM/LOW — top concern: {{specific}}
   - Kill condition: {{what single scenario kills this product}}

6. NEXT STEP
   - If proceed: Begin Phase 1 Task Clarification
   - If pause: {{condition to resume}}
```

---

### P56 — Phase 0 Gate Review (`/gate0`)
**Use when:** After Product Proposal (P11) — formal gate before Phase 1 Task Clarification
**Why it works:** Prevents engineering resources being spent on products that lack strategic justification, customer insight, or feasible scope. Catches "solution looking for a problem" before Phase 1 commits 10-15% of project time.

```
TASK: Conduct Phase 0 Gate Review for {{product_name}} ({{VN-XXX-XXX}})
  Assess whether product has sufficient strategic justification, customer insight, and scope
  definition to begin Phase 1 Task Clarification.
  Score 5 criteria (weighted). Present gate decision options A/B/C/D.
  WAIT for explicit approval before Phase 1 begins.

CONTEXT:
  product: {{VN-XXX-XXX}}
  inputs:
    - Situation Analysis (P09): {{reference}}
    - Idea Generation (P10): {{reference — selected idea}}
    - Product Proposal (P11): {{reference}}
    - ODI Report (P28, if completed): {{reference or "not done"}}
  gate_target: weighted total ≥3.0/4.0

CONSTRAINTS:
  hard_limits:
    - Score each criterion independently before calculating weighted total
    - Gate target: weighted total ≥3.0/4.0
    - Score 0 on any criterion blocks APPROVE regardless of total
    - If ODI not done: flag as risk to Criterion B (Customer Insight) — but don't auto-reject
  reject_conditions:
    - Product Proposal (P11) not provided — cannot conduct gate without this input
    - Controlled technology without export clearance documented — gate must be PAUSE
  prohibited_actions:
    - Do NOT auto-proceed to Phase 1 — WAIT for explicit human gate decision
    - Do NOT round up weighted total — show exact calculation
    - Do NOT present fewer than 4 options (A/B/C/D must all be shown)

TOOLS_ALLOWED: ["read_file", "calculate"]

HITL_CHECKPOINT:
  per_criterion: false — score all criteria first, then single review
  on_score_complete: true — present scores + weighted total + all 4 options;
    WAIT for explicit gate decision before Phase 1 begins
  on_controlled_tech: "IMMEDIATE" — export clearance not documented; gate must PAUSE;
    flag before presenting any scores

SAFETY_OVERRIDE: "If product involves controlled technology (ITAR, EAR, dual-use weapons)
  without export clearance documented — gate must be PAUSE until clearance obtained."

SUCCESS_CRITERIA:
  scoring_completeness: "all 5 criteria scored with ≥1 justification sentence per score"
  calculation_transparency: "weighted total shown with explicit formula"
  decision_options: "all 4 options (A/B/C/D) presented with threshold conditions"
  gate_neutrality: "recommendation aligns with score — not with preferred answer"

FALLBACK_PROTOCOL:
  missing_inputs: "Score available criteria; mark criteria requiring missing inputs as
    [DATA-MISSING: score after review]; present partial gate with explanation"
  controlled_tech_detected: "Set gate to PAUSE; present [EXPORT-REVIEW-REQUIRED] flag;
    do not score further until clearance documented"
  all_criteria_zero: "CANCEL recommendation; present specific blocking issues per criterion;
    state what must change before re-review"
  unknown_error: "SAFE_STATE — output partial scores; mark unscored criteria; await direction"

OUTPUT_FORMAT: Scored checklist table + weighted total + gate decision recommendation

--- GATE CRITERIA (score 0-4 each) ---

Scale: 4=Excellent | 3=Good | 2=Adequate | 1=Barely adequate | 0=Fail (blocks proceed)

A. STRATEGIC FIT (weight: 25%)
   - Aligns with Workshop X capabilities and IRONMESH ecosystem?
   - Clear competitive advantage over import alternatives?
   - R2 revenue loop contribution identified?
   Score A: ___/4

B. CUSTOMER INSIGHT (weight: 25%)
   - Target customer segment identified (not just "Vietnamese military")?
   - Key unmet needs documented (ODI outcomes or customer brief)?
   - Customer willingness to adopt assessed?
   Score B: ___/4

C. SCOPE CLARITY (weight: 20%)
   - Primary function defined (solution-neutral)?
   - Top 3 performance targets quantified?
   - Cost target set (≤70% of import equivalent)?
   Score C: ___/4

D. FEASIBILITY (weight: 20%)
   - TRL ≥4 for key technologies?
   - Local content ≥40% appears achievable?
   - Timeline realistic given 25h/week capacity?
   Score D: ___/4

E. RISK AWARENESS (weight: 10%)
   - Technical, schedule, and market risks identified?
   - Kill condition defined (what single scenario kills this product)?
   - No show-stopping regulatory or IP conflicts?
   Score E: ___/4

WEIGHTED TOTAL:
  = (0.25×A + 0.25×B + 0.20×C + 0.20×D + 0.10×E)
  Target: ≥3.0/4.0

GATE DECISION OPTIONS:
  A) ✅ APPROVE (≥3.0, no 0-scores) — proceed to Phase 1 Task Clarification
  B) 🔄 REVISE (2.0-2.9) — address specific items, re-review
  C) ⏸️ PAUSE — external information needed (customer input, export clearance, etc.)
  D) ❌ CANCEL — insufficient strategic fit or feasibility

PRESENT scores + total + recommendation. WAIT. Do NOT proceed without explicit response.
```

---

### P63 — Bản Tính năng Kỹ chiến thuật — TNKCT (`/tnkct`)
**Use when:** Product Proposal (P11) approved — need Vietnamese military format tactical-technical performance spec for Hội đồng KH&CN (Science & Technology Council) review
**Why it works:** Vietnamese military councils review products through TNKCT format, not engineering requirements lists. This bridges the gap between internal P11 Product Proposal and the military's expected document format. Placed in Phase 0 because council approval is required before committing engineering resources.

```
TASK: Generate Bản Tính năng Kỹ chiến thuật (TNKCT) for {{product_name}}
  Compile tactical purpose, key technical parameters, and military context
  into the Vietnamese defense council review format.
  Return: bilingual (Vietnamese primary / English technical terms) Markdown document.

CONTEXT:
  product_name: {{product_name}}
  product_code: {{VM-XXXX or VN-XXX-XXX}}
  family: {{product family if applicable}}
  domain: {{engagement / training / surveillance / maritime / logistics}}
  inputs:
    - Product Proposal (P11): {{reference}}
    - ODI Report (P28): {{reference}}
    - B1 YCKT (P58, if exists): {{reference or "not yet created"}}
    - Any Phase 1-3 artifacts available: {{list or "none"}}
  target_audience: Hội đồng Khoa học & Công nghệ (S&T Council) — military decision-makers,
    not engineers. They need: what it does tactically, key numbers, comparison, feasibility.

CONSTRAINTS:
  hard_limits:
    - All performance targets must have specific numerical values (no "high performance")
    - Comparison table must include ≥2 existing alternatives + 1 family sibling (if applicable)
    - Local content % must be estimated with component-level breakdown
    - Safety-critical items must be marked with ⚠
  reject_conditions:
    - If no Product Proposal (P11) exists — reject; run P11 first
    - If product involves autonomous lethal decision-making without HITL — reject
  prohibited_actions:
    - Do NOT classify targets as hostile/friendly (ROE is human judgment)
    - Do NOT claim IFF capability unless architecturally verified
    - Do NOT state Pk without [ƯỚC TÍNH] tag unless backed by test data (L1/L2 evidence)
    - Do NOT cite TCVN numbers without verifying they exist in TCVN Compliance Matrix

TOOLS_ALLOWED: ["read_file", "write_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_section: false — review full document; 8 sections is too many for per-output triggering
  on_document_complete: true — present for QC Gate (/qc) + human review;
    do NOT finalize without explicit APPROVE
  on_autonomous_engagement: "IMMEDIATE" — [SAFETY-CRITICAL] autonomous engagement capability
    detected in any section; stop all generation; alert before continuing

SAFETY_OVERRIDE: "If any section describes autonomous engagement capability without
  HITL enforcement — STOP. Flag [SAFETY-CRITICAL] and do not proceed."

SUCCESS_CRITERIA:
  section_completeness: "all 8 sections + 2 appendices present and populated"
  quantification_rate: "100% of technical parameters have numeric values (no 'high performance')"
  comparison_coverage: "≥2 existing alternatives + this product in comparison table"
  hitl_declaration: "Section I explicitly states HITL status"
  evidence_tagging: "[ƯỚC TÍNH] applied to estimates; source doc cited for test-backed claims"

FALLBACK_PROTOCOL:
  missing_p11: "STOP; reject; request P11 be run first; do not generate partial TNKCT"
  missing_technical_specs: "Flag [DATA-GAP] per missing parameter; propose plausible range
    with [ƯỚC TÍNH] tag; document assumption source in Phụ lục B"
  tcvn_clause_unverifiable: "Tag as [TCVN-VERIFY: clause may not exist]; do not cite as
    confirmed; list in Phụ lục B with verification status"
  unknown_error: "SAFE_STATE — output partial document with all 8 section headers;
    flag incomplete sections with [INCOMPLETE]; await direction"

OUTPUT_FORMAT: Markdown with YAML frontmatter
UNCERTAINTY_FLAG: true — tag estimates as [ƯỚC TÍNH] or [L5 — ASSUMPTION]
EVIDENCE_REQUIRED: true — performance claims reference source document

--- DOCUMENT STRUCTURE (8 sections + appendices) ---

I. THÔNG TIN CHUNG (General Information)
   - Product name (VN + EN), code, classification
   - Developer, intended user (branch + unit type)
   - Security classification
   - Family position (if applicable)
   - Product description paragraph: what it does, operating principle, key distinguishing features
   - CRITICAL: State HITL status — "KHÔNG có khả năng tự động [action]" if applicable

II. ĐẶC TÍNH CHIẾN THUẬT (Tactical Characteristics)
   II.1 — Nhiệm vụ chiến thuật: primary mission, secondary missions, tactical scenarios
   II.2 — Ưu thế chiến thuật: ≥4 advantages vs current capability (quantified where possible)
   II.3 — Cách thức sử dụng: tactical employment diagram (who does what — AI vs human)
   II.4 — Đối tượng sử dụng: user profiles with training requirements per level

III. TÍNH NĂNG KỸ THUẬT CHỦ YẾU (Key Technical Performance)
   Extract from B1 YCKT (if exists) or P11 preliminary requirements.
   Organize by sub-sections:
   III.1 — Hình học & Khối lượng (dimensions, weight, interface)
   III.2 — Tính năng chính (core performance — detection, accuracy, speed, etc.)
   III.3 — Năng lượng (battery, power, charge)
   III.4 — Sẵn sàng chiến đấu (startup time, controls, display)
   III.5 — Độ bền môi trường (temperature, IP, shock, vibration, EMC — with TCVN refs)
   III.6 — Độ tin cậy & Bảo trì (MTBF, MTTR, calibration, maintenance levels)
   III.7 — An toàn (safety-critical items with ⚠ markers)

IV. SO SÁNH VỚI CÁC GIẢI PHÁP HIỆN CÓ (Comparison)
   Table: ≥3 columns (this product + ≥2 alternatives)
   Rows: core function, target type, weight, cost, training, deployment level, Pk estimate,
     local content
   Conclusion paragraph: what gap this product fills

V. ĐIỀU KIỆN KHÍ HẬU — THỦY VĂN (Vietnamese Climate Mapping)
   Table: ≥4 Vietnamese climate zones → product design feature mapping
   Conclusion: operating envelope covers Vietnamese conditions (Y/N + margin)

VI. SẢN XUẤT & NỘI ĐỊA HÓA (Production & Local Content)
   - Unit cost target, NRE, production rate
   - Component-level local/import breakdown with % values
   - Flag ⚠ SINGLE-SOURCE, EXPORT-REVIEW, LONG-LEAD items
   - If local content < 60%: state mitigation strategy

VII. TIẾN ĐỘ DỰ KIẾN (Schedule)
   - T/I/A/B milestones (Vietnamese production stage stamps)
   - Key delivery dates

VIII. KẾT LUẬN VÀ KIẾN NGHỊ (Conclusion & Recommendation)
   - ≤5 highlight bullets
   - Specific request to Hội đồng KH&CN (approve, fund, timeline)

PHỤ LỤC A — BẢNG VIẾT TẮT (bilingual abbreviation table)
PHỤ LỤC B — TÀI LIỆU THAM CHIẾU (source document table with file locations)
```

---

## CAPTURE PROTOCOL

```
After Phase 0:
Product: {{VN-XXX-XXX}}
Gate 0 score: ___/4.0
Prompt used: P09 / P10 / P11 / P56
What worked: {{specific element}}
What needed adjustment: {{specific}}
Action: update / new entry / no change
```
