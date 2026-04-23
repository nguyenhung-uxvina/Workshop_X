---
skill: S1 — AI Literacy × ODI Innovation
phase: 0a — Outcome-Driven Innovation
framework: ODI (Tony Ulwick) — Desired-Important-Measurable
slash_commands: /odi · /jobs · /outcomes · /opp · /seg
type: prompt-library
version: 2.0
created: 2026-02-20
updated: 2026-03-04
changelog: |
  v1.1 — 4 fixes from P28 validation (Bugs 01/02/03/05)
  v1.2 — 3 fixes from P28 validation (Bugs 04/06/07: segment scoring, stability col, fill guides)
  v1.3 — 3 fixes from P29 validation (P29-01/02/03: job gate, SAFETY_OVERRIDE, Source col)
  v1.4 — 11 fixes from P30/P31/P32 validation (P30-01/02/03; P31-01/02/03/04; P32-01/02/03)
  v2.0 — Schema v3.0 upgrade: CONSTRAINTS 3-tier (hard_limits/reject_conditions/prohibited_actions),
          HITL trigger matrix (per_output: false, on_safety_flag: IMMEDIATE),
          SUCCESS_CRITERIA + FALLBACK_PROTOCOL added to all 5 prompts (2026-03-04)
---

# Phase 0a — ODI (Outcome-Driven Innovation) Prompts

> **Why Phase 0 before Phase 1:** Pahl & Beitz Phase 1 builds the requirements list — but WHAT requirements?
> ODI answers this. Without it, requirements reflect engineer assumptions, not customer unmet needs.
> ODI success rate: **70-86%** vs 17% for traditional approaches.
>
> **Output:** Prioritized opportunity landscape → feeds Phase 1 requirements weighting + VDI 2225 criteria weights.

---

## PROMPT INDEX

| # | Command | Name | Use When |
|---|---------|------|----------|
| P28 | `/odi` | Full ODI Process | Complete customer discovery for a new product |
| P29 | `/jobs` | Jobs-to-be-Done Analysis | Identify what job customers are trying to get done |
| P30 | `/outcomes` | Desired Outcome Mapping | Map DIM outcomes per job step |
| P31 | `/opp` | Opportunity Score Calculation | Prioritize which outcomes to target |
| P32 | `/seg` | Customer Segmentation | Find under-served segments |

---

### P28 — Full ODI Process (`/odi`)
**Use when:** Starting any new product — complete customer discovery in one session
**Why it works:** Runs the full ODI sequence in structured order: Jobs → Outcomes → Opportunity → Segment → Strategy.

```
FILL GUIDE (complete before running):
  {{product_domain}}:       2–5 words. E.g.: "counter-UAS smart sight"
  {{customer_segment}}:     Specific unit type. E.g.: "Vietnamese Army infantry battalion"
  {{existing_solutions}}:   1–3 sentences. What they use today + why it's insufficient.
  {{domain}}:               One of: training / surveillance / engagement / logistics / maritime
  {{company}}:              Leave as "Workshop X — ACH philosophy, IRONMESH" unless changed.

TASK: Run full ODI process for {{product_domain}} targeting {{customer_segment}}
  Identify the job-to-be-done, map desired outcomes, calculate opportunity scores,
  segment by unmet needs, recommend strategy.
  Return: ODI summary report with top 5 opportunities ranked.

CONTEXT:
  domain: {{training / maritime security / engagement / specific product area}}
  customer_segment: {{Vietnamese Army / Navy / Air Force / training unit}}
  existing_solutions: {{what customers use today — import products, manual methods, etc.}}
  company: Workshop X — ACH philosophy, IRONMESH, defense AI products

CONSTRAINTS:
  hard_limits:
    - ≥10 desired outcomes per job map required for meaningful opportunity landscape
    - Opportunity threshold: score ≥10 = underserved (high priority for innovation)
    - ≥2 distinct customer segments must be identified before strategy recommendation
    - Evidence hierarchy must be applied — L1-L3 anchors required for ≥1 outcome per job step
  reject_conditions:
    - Customer segment is "everyone" or "all Vietnamese military" — too broad; ask to narrow
    - No existing solution data provided — cannot estimate satisfaction baseline; ask for input
    - Core job defined at product feature level — reject and redefine at functional level
  prohibited_actions:
    - Do NOT name specific products or brands in outcome statements (solution-neutral required)
    - Do NOT auto-proceed past Section 1 job gate without explicit human confirmation
    - Do NOT calculate opportunity scores when all I/S values are [L5: ASSUMPTION] — flag LOW
      CONFIDENCE and surface validation plan before proceeding
    - Do NOT auto-select target segment in Section 5 — present options, await human decision

TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]

OUTPUT_DESTINATION: "Agentic_Skills_Mastery/projects/{{project_name}}/PHASE_0/{{PROJECT_NAME}}_ODI_Report_v1.0.md"
  Naming rule: always prefix filename with project/product name (e.g. V-SMASH-L_ODI_Report_v1.0.md)
  Frontmatter required: project, phase, type, version, created, status, data_confidence

HITL_CHECKPOINT:
  per_output: false — do NOT trigger for each individual outcome (prevent operator fatigue on 10+ items)
  on_job_gate: true — after Section 1 job statement; wrong job definition invalidates all downstream work
  on_opportunity_scores: true — after top 5 ranked; present before strategic direction; wait for confirmation
  on_safety_flag: "IMMEDIATE" — [ETHICAL-REVIEW-REQUIRED] — drop everything, alert before continuing

SAFETY_OVERRIDE: "If any outcome describes AI system autonomously SELECTING AND ENGAGING a target
  without human confirmation — tag [ETHICAL-REVIEW-REQUIRED]. Do not proceed without authorization.
  HITL systems (human initiates trigger; AI only gates timing) do NOT require this flag.
  Test: 'Does this outcome require a human to press trigger?' Yes → permitted. No → flag."

SUCCESS_CRITERIA:
  outcomes_count: "≥10 desired outcomes across job map"
  opportunity_coverage: "≥3 outcomes with score ≥10 (UNDERSERVED zone populated)"
  evidence_quality: "≥50% of outcomes sourced at L1–L3 (not all L5 assumptions)"
  handoff_completeness: "MUST requirements list extracted, ready to feed P13"
  strategy_clarity: "1 strategy recommendation (DIFFERENTIATE/DOMINATE/DISRUPT) with rationale"

FALLBACK_PROTOCOL:
  insufficient_customer_data: "Proceed with L5 [ASSUMPTION] tags + validation plan per outcome;
    flag overall confidence as LOW in report frontmatter"
  wrong_job_level: "Return to SECTION 1 gate; present 3 alternative job levels (narrow/correct/broad);
    ask human to select before continuing"
  no_underserved_opportunities: "If all scores <10 — expand job map to adjacent job areas OR
    present findings and recommend revisiting product concept; do NOT auto-recommend strategy"
  hitl_mandatory_missed: "Re-scan all outcomes for safety-critical items; apply MAINTAIN-QUALITY
    retroactively; do not change score — change tag only"
  unknown_error: "SAFE_STATE — stop; output partial results with explicit section markers;
    flag error; await human direction. Never fail silently."

OUTPUT_FORMAT: Structured ODI report (5 sections)
EVIDENCE_REQUIRED: true — tag each insight with its evidence level:
  Level 1: Direct interview / field observation with target user
  Level 2: Field exercise reports / AAR documents
  Level 3: Published doctrine, training manuals, MIL-STD, TCVN standards
  Level 4: Competitive product analysis
  Level 5: [ASSUMPTION] — engineer hypothesis, flag and plan validation step

--- ODI SEQUENCE ---

SECTION 1: JOB-TO-BE-DONE
  Core question: "What is the customer trying to accomplish?"
  Output from P29 (run if not already done)

  ⚠️ GATE: After defining core job — STOP. Present job statement to user.
  Proceed to Section 2 ONLY after explicit confirmation.
  Wrong job definition at Section 1 invalidates all downstream ODI work.

SECTION 2: JOB MAP (8 Steps)
  Decompose job into universal steps — fill for YOUR product, not the example:
  1. DEFINE: Set goals, plan the approach
  2. LOCATE: Find inputs, information, resources needed
  3. PREPARE: Set up environment, organize
  4. CONFIRM: Verify readiness before execution
  5. EXECUTE: Carry out the core task
  6. MONITOR: Check progress during execution
  7. MODIFY: Adjust based on monitoring
  8. CONCLUDE: Finish, evaluate, wrap up

  OUTPUT FORMAT (do not copy content — describe what YOUR customer does at each step):
  | Step | Job Step | What Customer Does | Current Pain Points | Current Tools |
  |------|----------|--------------------|---------------------|---------------|
  | 1 | DEFINE | [fill for your job] | [pain points] | [current tools] |
  | 2 | LOCATE | ... | ... | ... |
  | 3–8 | ... | ... | ... | ... |

SECTION 3: DESIRED OUTCOMES PER JOB STEP
  Output from P30 (run if not already done)

SECTION 4: OPPORTUNITY SCORES
  Output from P31 (run if not already done)

SECTION 5: STRATEGIC RECOMMENDATION
  Based on opportunity landscape:
  - DIFFERENTIATE: Serve over/under-served markets uniquely
  - DOMINATE: Win under-served markets with full solution
  - DISRUPT: Enter over-served market with simpler, cheaper solution
  - No recommendation: Generate more customer insights first

  Recommend: {{strategy}} because {{top 3 opportunity areas}}
  Feed into Phase 1: These outcomes → highest-weight requirements
```

#### LEARNED_VARIATIONS — P28 (from V-SMASH-L run, 2026-02-20)

**V1 — Design gap detection (most valuable finding):**
Running ODI retrospectively on a completed design (V-SMASH-L v1.1) revealed 2 requirements
missing from Phase 1: IFF confidence threshold spec + ammo expenditure limit. Both were
UNDERSERVED outcomes (opp ≥13) that had no corresponding requirement. This confirms: ODI
before Phase 1 prevents silent requirement omissions that only surface at integration testing.
→ **Rule:** If ODI is run after Phase 1, explicitly cross-check every UNDERSERVED outcome (≥10)
against the existing requirements list and flag any gap.

**V2 — HITL product SAFETY_OVERRIDE calibration:**
Original prompt flagged every combat outcome as ETHICAL-REVIEW-REQUIRED. This made the entire
EXECUTE/ENGAGE job step un-analysable. Fix: narrow SAFETY_OVERRIDE to "AI selects AND engages
without human trigger press." HITL systems (human presses trigger; AI gates timing only) are
permitted. Test: "Must a human press the trigger?" Yes → permitted. No → flag.
→ **Rule:** Calibrate SAFETY_OVERRIDE to the product's actual autonomy level before running.

**V3 — HITL-mandatory outcomes need MAINTAIN-QUALITY, not OVERSERVED:**
O10 (AI unintended trigger) scored Importance=10, Satisfaction=6, Opp=14. A naive reading says
"high opp = invest more." But for HITL safety: current design ALREADY satisfies this by
principle — investing more here is correct, but the framing should be MAINTAIN-QUALITY (protect
existing safeguard) not a growth opportunity. High importance + any reduction in satisfaction =
critical failure.
→ **Rule:** For HITL-mandatory and safety-critical outcomes, add MAINTAIN-QUALITY tag regardless
of opportunity score. Never deprioritize these.

**V4 — Evidence levels change strategic confidence significantly:**
Without the 5-level evidence hierarchy, L4 (competitive analysis) and L5 ([ASSUMPTION]) looked
equal. V-SMASH-L had ~65% of outcomes at L4/L5. Surfacing this meant the strategy
recommendation came with a clear confidence qualifier: "DOMINATE — MEDIUM confidence; validate
L5 items with field interviews before committing architecture." Without evidence levels,
confidence is hidden.
→ **Rule:** Always complete the Source column with evidence level before calculating opportunity
scores. An L5 outcome with Opp=18 has lower commitment weight than an L1 outcome with Opp=14.

---

### P29 — Jobs-to-be-Done Analysis (`/jobs`)
**Use when:** First step of ODI — understand what job customers are hiring products to do
**Why it works:** Forces focus on the customer's goal, not on product features.

```
FILL GUIDE (complete before running P29):
  {{customer_segment}}:    Specific unit type. E.g.: "Vietnamese Army infantry platoon"
  {{domain}}:              One of: training / surveillance / engagement / logistics / maritime
  {{observation_data}}:    Paste field notes, or write [ASSUMPTION] + describe what you believe.
                           Even 2–3 sentences of context improves job definition accuracy.
  {{existing_solutions}}:  What they use today. E.g.: "iron sights + manual tracking, no AI"

TASK: Identify and map Jobs-to-be-Done for {{customer_segment}} in {{domain}}
  Find core functional job, emotional jobs, and consumption chain jobs.
  Return: Job map with all 8 universal job steps.

CONTEXT:
  customer_segment: {{Vietnamese Army / Navy / Air Force / training unit}}
  domain: {{training / surveillance / maritime security / etc.}}
  observation_data: {{field interviews, observations, existing briefs — paste or reference}}
  existing_solutions: {{what they use today}}

CONSTRAINTS:
  hard_limits:
    - Job statement format: "verb + object + contextual clarifier"
    - Minimum output: 1 core functional job + 1 emotional dimension + 2 consumption chain jobs
    - All 8 job map steps must be populated (no blank rows)
  reject_conditions:
    - Customer segment is "everyone" or broader than a specific branch/role — ask to narrow
    - Core job is defined as a product feature ("use the app", "read the sensor") — redefine
      at functional level before continuing
    - Core job is at societal level ("win the war", "improve military readiness") — too broad;
      decompose to operational level
  prohibited_actions:
    - Do NOT include product or solution names in job statements
    - Do NOT define job at product feature level (solution bias)
    - Do NOT proceed to outcomes mapping without explicit HITL confirmation of job statement

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — do NOT trigger per job step (too granular, causes fatigue)
  on_job_statement: true — after identifying core functional job; wrong definition at this
    stage invalidates all downstream ODI work; present and wait for explicit confirmation
  on_safety_flag: "IMMEDIATE" — [ETHICAL-REVIEW-REQUIRED] — alert before any further analysis

SAFETY_OVERRIDE: "If core functional job requires AI to SELECT AND INITIATE engagement without
  human authorization — flag [ETHICAL-REVIEW-REQUIRED]. Do not continue.
  Jobs where human decides target + authorizes trigger (AI assists timing only) → permitted.
  Test: 'Does completing this job require AI to fire without human pressing trigger?' Yes → flag."

SUCCESS_CRITERIA:
  job_statement_clarity: "1 unambiguous job statement agreed by human at HITL gate"
  job_map_coverage: "all 8 steps populated — zero blank cells"
  solution_neutrality: "zero product names or solution references in any job step description"
  source_coverage: "every job step has ≥1 source tag (interview/observation/doc/[ASSUMPTION])"
  job_types_complete: "core functional + ≥1 emotional + ≥2 consumption chain jobs documented"

FALLBACK_PROTOCOL:
  ambiguous_job_level: "Present 3 alternative job statements (narrow/correct/broad) with rationale;
    ask human to select one before continuing"
  missing_observation_data: "Proceed with [ASSUMPTION] tags; generate 3 specific validation questions
    the user can verify via field visit or customer brief"
  blank_job_step: "Flag the specific step as [DATA GAP]; propose plausible hypothesis with
    [ASSUMPTION] tag; ask human to confirm or correct before outcome mapping"
  unknown_error: "SAFE_STATE — output partial job map with explicit row markers for incomplete
    steps; flag error; await human direction"

OUTPUT_FORMAT: Job statement + job map table (8 steps)
EVIDENCE_REQUIRED: true — each job insight needs source: interview / observation / field data / [ASSUMPTION]

--- JOB ANALYSIS FRAMEWORK ---

CORE FUNCTIONAL JOB (what they're trying to accomplish):
  Format: "{{verb}} + {{object}} + {{context}}"
  ✓ Example: "Assess marksmanship performance of individual soldiers during live-fire training"
  ✗ Too broad: "Improve military effectiveness"
  ✗ Too narrow: "Read sensor data from impact detector"

EMOTIONAL JOBS (how they want to feel / be perceived):
  Personal: "Feel confident the training data is accurate"
  Social: "Demonstrate to command that training program meets standards"

CONSUMPTION CHAIN JOBS (adjacent jobs around the core job):
  Before: "Plan and design the training program"
  During: "Document training outcomes for qualification records"
  After: "Report training status to command"

JOB MAP (8 Universal Steps):
| Step | Job Step Name | What Customer Does | Current Pain Points | Current Tools | Source |
|------|--------------|---------------------|---------------------|---------------|--------|
| 1 | DEFINE | | | | |
| 2 | LOCATE | | | | |
| 3 | PREPARE | | | | |
| 4 | CONFIRM | | | | |
| 5 | EXECUTE | | | | |
| 6 | MONITOR | | | | |
| 7 | MODIFY | | | | |
| 8 | CONCLUDE | | | | |
```

---

### P30 — Desired Outcome Mapping (`/outcomes`)
**Use when:** After job map (P29) — map what customers want to achieve at each step
**Why it works:** Outcomes are stable even when technology changes. They define the real design target.

```
FILL GUIDE (complete before running P30):
  {{customer}}:                     Copy from P29 customer_segment.
  {{reference P29 output}}:         Paste or link the job map table from P29. Do not skip —
                                    outcomes must trace back to specific job steps.
  {{product domain}}:               2–5 words. Same as P28/P29 domain.
  {{interviews / observations...}}: Source for your Importance + Satisfaction estimates.
                                    Use evidence hierarchy: interview > AAR docs > doctrine > competitor > [ASSUMPTION]

TASK: Map desired outcomes for each step of the job map for {{customer_segment}}
  For each job step: identify 2-5 desired outcomes in DIM format.
  Return: outcomes table (job step × desired outcome × importance × satisfaction estimate).

CONTEXT:
  customer_segment: {{customer}}
  job_map: {{reference P29 output}}
  domain: {{product domain}}
  current_satisfaction_source: {{interviews / observations / comparison with import products}}

CONSTRAINTS:
  hard_limits:
    - Minimum 2 outcomes per job step (16 outcomes total for 8-step map)
    - Importance scale: 1–10 (10 = absolutely critical to job success)
    - Satisfaction scale: 1–10 (10 = fully satisfied with current solution)
    - DIM check: every outcome must be Desired, Important, and Measurable
  reject_conditions:
    - P29 job map not provided — cannot map outcomes without defined job steps; run P29 first
    - Outcome describes a feature or solution ("Use AI to...", "Have a mobile app...") — rewrite
      to result format before adding to table
  prohibited_actions:
    - Do NOT include product/brand names or solution references in outcome statements
    - Do NOT skip the Stability column — required for Phase 1 investment type assignment
    - Do NOT skip the Source column — I/S without evidence level = invalid for opportunity scoring
    - Do NOT write outcomes at the "how" level — only "what result" and "under what context"

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — do NOT trigger per individual outcome (10–40 outcomes → fatigue risk)
  on_table_complete: true — after full table mapped; present for validation before opportunity scoring;
    importance and satisfaction estimates need human review for calibration
  on_safety_flag: "IMMEDIATE" — [HITL-MANDATORY] outcome identified → alert; do not auto-classify

SAFETY_OVERRIDE: "If any outcome implies AI has authority to INITIATE FIRE without human press of
  trigger — tag [HITL-MANDATORY] and stop. Outcomes about engagement speed, accuracy, or hit
  probability for human-initiated fire do NOT require this flag.
  Test: 'Is the human still pressing the trigger to fire?' Yes → no flag needed."

SUCCESS_CRITERIA:
  total_outcomes: "≥16 outcomes (≥2 per step × 8 steps)"
  DIM_compliance: "100% — every outcome passes Desired/Important/Measurable check"
  source_coverage: "100% — no blank Source cells; all estimates tagged with evidence level"
  stability_coverage: "100% — H/M/L assigned to every outcome"
  solution_neutrality: "zero product names or 'how' statements in outcome column"

FALLBACK_PROTOCOL:
  solution_biased_outcome: "Rewrite to remove solution reference; present original + rewrite
    pair to human; ask for confirmation before adding rewritten version to table"
  missing_satisfaction_data: "Assign [L5: ASSUMPTION] tag; propose 1 specific validation method
    per unsupported estimate (e.g., 'compare against import product spec sheet')"
  blank_job_step: "Flag as [DATA GAP]; propose 2 candidate outcomes with [ASSUMPTION] tags;
    ask human to confirm before scoring"
  unknown_error: "SAFE_STATE — output partial table; mark incomplete rows with [INCOMPLETE];
    await human direction before proceeding to P31"

UNCERTAINTY_FLAG: true — tag I and S estimates without direct customer data as:
  [L4: competitive analysis] or [L5: ASSUMPTION — validate with field interview]
  Using evidence hierarchy from FILL GUIDE (same levels as P28 EVIDENCE_REQUIRED).
OUTPUT_FORMAT: Outcomes table per job step

--- OUTCOME FORMAT (DIM) ---

"Minimize/Maximize the [unit of measure] of [subject] when [context]"

✓ ENGAGEMENT examples:
  "Maximize the probability of first-shot hit on a moving target at 50–300m under time pressure"
  "Minimize the time from target detection to confirmed engagement-ready state"
✓ TRAINING examples:
  "Minimize the time required to generate performance report after each exercise session"
  "Maximize the accuracy of shot location measurement during live-fire assessment"
✓ SURVEILLANCE examples:
  "Maximize the detection range of low-altitude objects in cluttered backgrounds"
(Use examples matching your product domain — do not mix domains in the same outcomes table)

✗ NOT outcomes (solution-biased):
  "Use AI to score hits" (solution, not outcome)
  "Have a mobile app" (solution)
  "Provide real-time data" (what, not why)

OUTCOMES TABLE:
| Job Step | Desired Outcome | Importance (1-10) | Satisfaction (1-10) | Stability | Source |
|----------|----------------|-------------------|---------------------|-----------|--------|

STABILITY COLUMN (optional but recommended for defense products with fast-evolving threats):
  H = outcome stable ≥3 years → hard-engineer into structure/hardware
  M = outcome may shift in 1–3 years → implement in software, design for upgrade
  L = outcome likely obsolete <3 years → implement minimally, plan for pivot
  Examples for counter-UAS: "detection range" = H (physics doesn't change);
    "classify FPV vs quadcopter" = M (drone convergence likely); "defeat swarm" = L (still emerging)

PHASE 1 FEED: High-importance outcomes → MUST requirements
              Low-satisfaction outcomes → highest-weight requirements
              Stability H → hard requirement (structural); Stability L → software requirement only
              This table directly informs P13 (Requirements Generation) weighting
```

---

### P31 — Opportunity Score Calculation (`/opp`)
**Use when:** After outcomes table (P30) — prioritize which outcomes to address
**Why it works:** Opportunity score = Importance + max(Importance - Satisfaction, 0). Reveals where customers are UNDERSERVED.

```
FILL GUIDE (complete before running P31):
  {{customer_segment}}:              Copy from P29/P30.
  {{reference or paste P30 output}}: Paste the FULL outcomes table — every row is a calculation
                                     input. Do not summarize or truncate.
  {{source: interview/...}}:         Describe overall data quality for I and S scores.
                                     Mixed sources? Note which outcomes have weak evidence.

TASK: Calculate opportunity scores for all desired outcomes for {{customer_segment}}
  Identify top opportunities (score ≥10), over-served areas (score <6).
  Return: ranked opportunity table + strategic quadrant map.

CONTEXT:
  customer_segment: {{customer}}
  outcomes_table: {{reference or paste P30 output}}
  importance_data: {{source: interview / estimate / [ASSUMPTION]}}
  satisfaction_data: {{source: field observation / competitor comparison / [ASSUMPTION]}}

CONSTRAINTS:
  hard_limits:
    - Formula: Opportunity Score = Importance + max(Importance - Satisfaction, 0)
    - Score interpretation:
        ≥10 = UNDERSERVED — high priority for innovation
        8–9 = SLIGHTLY UNDERSERVED — worth addressing
        6–7 = SERVED — normal product requirement
        <6  = OVERSERVED — do not over-invest (AI can handle efficiently)
    - Minimum 10 outcomes required for meaningful opportunity landscape
    - [HITL-MANDATORY] outcomes: always tag MAINTAIN-QUALITY regardless of calculated score
  reject_conditions:
    - P30 outcomes table not provided — cannot calculate without I/S data; run P30 first
    - All I/S scores are [L5: ASSUMPTION] without any L1–L3 anchors — flag as LOW CONFIDENCE
      and surface a validation plan; do NOT proceed to strategy without human acknowledgment
  prohibited_actions:
    - Do NOT apply SIMPLIFY/REDUCE or AI automation to any [HITL-MANDATORY] tagged outcome
    - Do NOT recommend full automation for UNDERSERVED safety-critical outcomes —
      automation opportunity ≠ automation is appropriate
    - Do NOT calculate multiple customer segments together — score separately if ≥2 segments

TOOLS_ALLOWED: ["calculate", "read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — do NOT trigger per score calculation (too granular)
  on_score_complete: true — after top 5 ranked; present before strategic recommendation;
    scores with [ASSUMPTION] data need validation plan review
  on_safety_flag: "IMMEDIATE" — [HUMAN-OVERRIDE-REQUIRED] — automation opportunity on
    safety-critical outcome → alert before any recommendation

SAFETY_OVERRIDE: "If top opportunities suggest fully automating safety-critical functions —
  flag [HUMAN-OVERRIDE-REQUIRED]. Automation opportunity ≠ automation is appropriate."

SUCCESS_CRITERIA:
  calculation_accuracy: "100% — formula applied correctly to all outcomes; show workings"
  opportunity_count: "≥3 outcomes with score ≥10 for a meaningful INNOVATE zone"
  investment_type_coverage: "100% — every outcome has STRUCTURAL/SOFTWARE/WATCH LIST/
    MAINTAIN assigned based on Priority × Stability matrix"
  confidence_flagging: "all [L5: ASSUMPTION] I/S scores explicitly flagged in ranked table"
  hitl_mandatory_protection: "every [HITL-MANDATORY] outcome tagged MAINTAIN-QUALITY
    regardless of opp score"

FALLBACK_PROTOCOL:
  all_scores_below_10: "No UNDERSERVED zone — expand to adjacent job areas OR present findings
    and recommend revisiting product concept scope; do NOT auto-recommend strategy"
  all_scores_above_8: "Suspiciously high landscape — check if satisfaction is underestimated
    or segment is too narrow; flag and ask human before proceeding"
  hitl_mandatory_missed: "Re-scan outcomes table for safety-critical items; apply
    MAINTAIN-QUALITY tag retroactively; do not change score, change tag only"
  low_confidence_landscape: "If >50% outcomes are [L5: ASSUMPTION] — output partial results
    with CONFIDENCE: LOW in header; propose specific data collection steps before strategy"
  unknown_error: "SAFE_STATE — output partial ranked table; flag error row; await human"

OUTPUT_FORMAT: Ranked table + quadrant map + top 5 summary
EVIDENCE_REQUIRED: true — document data source for each I and S score

--- CALCULATION ---

For each outcome:
  Opportunity = Importance + max(Importance - Satisfaction, 0)

RANKED OPPORTUNITY TABLE (carry Stability from P30):
| Rank | Outcome | Imp | Sat | Opp Score | Priority | Stability | Investment Type |
|------|---------|-----|-----|-----------|----------|-----------|-----------------|
| 1 | ... | 9 | 3 | 9+(9-3)=15 | UNDERSERVED | H | STRUCTURAL PRIORITY |
| 2 | ... | 8 | 4 | 8+(8-4)=12 | UNDERSERVED | M | SOFTWARE PRIORITY |
...

INVESTMENT TYPE (derived from Priority × Stability):
  UNDERSERVED + H → STRUCTURAL PRIORITY — design into hardware/structure
  UNDERSERVED + M → SOFTWARE PRIORITY — implement in firmware/SW, design for upgrade
  UNDERSERVED + L → WATCH LIST — minimum viable implementation, revisit in 12 months
  SERVED/OVERSERVED + any → MAINTAIN/MONITOR — no new investment

STRATEGIC QUADRANT:
  High Importance + Low Satisfaction  = UNDERSERVED → INNOVATE HERE
  High Importance + High Satisfaction = SERVED → MAINTAIN QUALITY
  Low Importance + Low Satisfaction   = NOT VALUED → IGNORE
  Low Importance + High Satisfaction  = OVERSERVED → SIMPLIFY/REDUCE
  ⚠️ EXCEPTION: Any outcome tagged [HITL-MANDATORY] in P30 → MAINTAIN QUALITY regardless of score.
     Never apply SIMPLIFY/REDUCE or AI automation to a safety-critical outcome.

PHASE 1 FEED:
  UNDERSERVED outcomes (score ≥10) → MUST requirements, highest weight in VDI 2225
  SERVED outcomes (score 6-9) → WISH requirements, moderate weight
  OVERSERVED outcomes (score <6) → AI automation candidates (S3/S4 skill apply here)
    EXCEPTION: [HITL-MANDATORY] outcomes → NEVER automate, regardless of opp score
```

---

### P32 — Customer Segmentation (`/seg`)
**Use when:** After opportunity scores — identify which customer segment to target first
**Why it works:** Different segments have different unmet needs. Targeting the right segment = 10x better product-market fit.

```
FILL GUIDE (complete before running P32):
  {{customer_group}}:          Broad group. E.g.: "Vietnamese defense forces"
  {{reference P31 output}}:    Reference or paste ranked opportunity table from P31.
  {{known_segments}}:          List sub-groups you already know. E.g.: "infantry platoons,
                               base security teams, special operations units"
                               Write [UNKNOWN] if no prior knowledge — infer from outcomes.

TASK: Segment {{customer_group}} by unmet needs based on opportunity landscape
  Find natural segments where groups of customers have similar high-opportunity outcomes.
  Return: segment profiles + recommended target segment for Phase 1.

CONTEXT:
  customer_group: {{Vietnamese Army / Navy / mixed defense / etc.}}
  opportunity_landscape: {{reference P31 output}}
  known_segments: {{any known sub-groups: infantry, special forces, naval gunnery, etc.}}
  VN_context: Segment by OPERATIONAL ROLE (infantry / SOF / logistics / base security) first,
    NOT by geography. Vietnamese coastal vs highland vs delta units face the same drone threats.
    Geography only relevant if environmental variation changes product requirements
    (e.g., saltwater corrosion for naval vs highland dust — then environment becomes a segment driver).

CONSTRAINTS:
  hard_limits:
    - Minimum 2 distinct segments to be meaningful
    - Each segment profile requires: size estimate, ≥3 key unmet outcomes (IDs from P31),
      willingness-to-adopt assessment, strategic priority rating
    - Weighted scoring: Opp concentration 40% + Size 30% + Adoption 20% + Strategic fit 10%
    - Show full calculation; do not present recommendation without visible weighted scores
  reject_conditions:
    - P31 opportunity landscape not provided — cannot segment by outcomes without scores; run P31 first
    - Proposed segment is "entire Vietnamese military" — too broad; must narrow to branch or role
  prohibited_actions:
    - Do NOT segment by demographics alone (age, rank, region) — use outcome-based clustering
    - Do NOT include export customers without explicit export compliance confirmation
    - Do NOT recommend primary target without showing full weighted scoring calculation
    - Do NOT select target segment autonomously — present scores, await human decision

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — do NOT trigger per segment profile (2–4 profiles expected)
  on_segment_profiles: true — after all profiles generated; present weighted scoring table
    before recommendation; target segment selection is a strategic decision requiring human judgment
  on_safety_flag: "IMMEDIATE" — export compliance flag → alert before any export customer added

SAFETY_OVERRIDE: "Do not include export customers without explicit confirmation of export
  compliance (ITAR, EAR, Vietnamese export law)."

SUCCESS_CRITERIA:
  segment_distinctness: "≥2 segments with meaningfully different top-3 unmet outcomes (IDs differ)"
  scoring_transparency: "weighted scoring table shown with all cell calculations visible"
  size_accuracy: "all size estimates include source or [ASSUMPTION] flag"
  phase1_feed_complete: "primary target segment's top unmet outcomes mapped to P13 requirements;
    secondary segment outcomes listed as WISH requirements or future variants"

FALLBACK_PROTOCOL:
  indistinguishable_segments: "All outcomes cluster together — report as single-segment market;
    note no further segmentation is warranted; proceed with unified requirements in P13"
  unknown_segment_sizes: "Use [ASSUMPTION] tag; propose 3 size estimation approaches
    (unit count from doctrine, procurement records, organizational chart); recommend validation"
  tied_weighted_scores: "Present tie clearly to human; list 2 tiebreaker factors AI cannot weigh
    (relationship priority, procurement timing, energy/motivation); await human decision"
  export_compliance_unconfirmed: "Remove export segment from analysis; flag [EXPORT-REVIEW-REQUIRED];
    do not re-add until compliance confirmed"
  unknown_error: "SAFE_STATE — output partial segment profiles; flag which profiles are incomplete;
    await human direction before target recommendation"

UNCERTAINTY_FLAG: true — segment size estimates without data = [ASSUMPTION: validate with market research]
OUTPUT_FORMAT: Segment profiles table + recommendation

--- SEGMENTATION FRAMEWORK ---

STEP 1: IDENTIFY OUTCOME CLUSTERS
  Which outcomes tend to be important together?
  Group outcomes that co-vary in importance across customer types.

STEP 2: DEFINE SEGMENTS (scores feed directly into STEP 3 weighted calculation)
  | Attribute                     | Segment A | Segment B | Segment C |
  |-------------------------------|-----------|-----------|-----------|
  | Name                          |           |           |           |
  | Who they are                  |           |           |           |
  | Size estimate (unit count)    |           |           |           |
  | Top 3 unmet outcomes (IDs)    |           |           |           |
  | Current solution              |           |           |           |
  | Opp concentration (0–10) ←40% |           |           |           |
  | Size score (0–10) ←30%        |           |           |           |
  | Adoption speed (0–10) ←20%    |           |           |           |
  | Strategic fit (0–10) ←10%     |           |           |           |

  Scoring guidance:
    Opp concentration: avg top-5 opp scores for this segment ÷ 2 (max opp ~20 → max score 10)
    Size score:        largest segment = 10; scale others proportionally
    Adoption speed:    10 = procurement decision <6 months; 5 = 6–18 months; 1 = >18 months
    Strategic fit:     10 = perfect IRONMESH fit + strong local content leverage; 5 = partial; 1 = none

STEP 3: SELECT PRIMARY TARGET (weighted scoring — show calculation)

  SCORING CRITERIA (weight each segment 0–10 on each dimension):
  | Criterion | Weight | Segment A | Segment B | Segment C |
  |-----------|--------|-----------|-----------|-----------|
  | Opportunity concentration | 40% | score/10 | score/10 | score/10 |
  | Segment size (unit count or budget) | 30% | score/10 | score/10 | score/10 |
  | Adoption speed (procurement cycle) | 20% | score/10 | score/10 | score/10 |
  | Strategic fit (IRONMESH leverage, local content) | 10% | score/10 | score/10 | score/10 |
  | **WEIGHTED TOTAL** | 100% | **calc** | **calc** | **calc** |

  Formula: Weighted Total = Σ (criterion score × weight)
  Recommend: segment with highest weighted total.

  ⚠️ Size matters: a 10:1 size ratio between segments (e.g. 50,000 vs 5,000 users)
  must reflect in the size score — do not select a smaller segment purely on
  outcome concentration without explicitly noting the volume trade-off.

PHASE 1 FEED:
  Primary target segment's top unmet outcomes → highest-priority requirements in P13
  Secondary segment's key outcomes → WISH requirements or Phase 2 product variants
```

---

## ODI → PHASE 1 TRANSITION PROTOCOL

After completing P28-P32, before starting Phase 1:

```
ODI HANDOFF CHECKLIST:
  [ ] Core job-to-be-done defined (1 clear statement)
  [ ] ≥10 desired outcomes mapped across 8 job steps
  [ ] Opportunity scores calculated for all outcomes
  [ ] Top 5 opportunities identified (score ≥10)
  [ ] Primary target segment selected
  [ ] UNDERSERVED outcomes → MUST requirements list (feed to P13)
  [ ] SERVED outcomes → WISH requirements list (feed to P13)
  [ ] VDI 2225 criteria weights pre-informed by opportunity scores
    (highest opportunity = highest weight in Phase 2 evaluation)
```

## CAPTURE PROTOCOL

```
After ODI phase:
Product domain: {{}}
Customer segment: {{}}
Core job: {{1 sentence}}
Top 3 opportunities: {{list with scores}}
Primary target segment: {{}}
Data confidence: HIGH / MEDIUM / LOW (based on [ASSUMPTION] count)
Validation needed: {{what to verify with actual customers}}
```
