---
type: prompt-validation-notes
prompt: P28 (/odi) — Phase0_ODI.md v1.0
test_project: V-SMASH-L (counter-UAS smart sight)
tested_by: KN Nguyen
date: 2026-02-20
verdict: USABLE with 7 fixes needed
---

# P28 Prompt Validation — V-SMASH-L Test Run

> Run P28 end-to-end on V-SMASH-L. Note every point where the prompt breaks,
> is ambiguous, or produces wrong output. Fix prompt after each session.

---

## Overall Verdict

**The prompt works. The structure holds.** ODI analysis produced 22 outcomes, 14 UNDERSERVED,
and a clear DOMINATE strategy — exactly what Phase 1 should need. No structural failures.

**7 specific fixes needed.** All are edge cases for defense weapons products.
None are fatal to the prompt — they degrade output quality, not correctness.

---

## Bug Log

### BUG 01 — Section 2 Job Map is training-biased
**Severity:** HIGH
**Where:** SECTION 2: JOB MAP (8 Steps) — the pre-filled example
**Problem:** The embedded job map example fills in all 8 steps specifically for a "defense training product":
```
1. DEFINE: Plan training exercise, set objectives, select scenarios
2. LOCATE: Identify range, targets, equipment, personnel
...
8. CONCLUDE: Debrief, record results, generate reports
```
For V-SMASH-L (a combat engagement tool, not training), this pre-fill caused momentary confusion —
the steps describe range management, not drone engagement. A user running P28 for the first time
would likely copy these examples instead of replacing them.

**Fix:** Remove the pre-filled training-specific example. Replace with format guide only:
```
# EXAMPLE FORMAT ONLY (do not copy content — fill for your product):
| Step | Job Step | What Customer Does | Current Pain Points | Current Tools |
|------|-----------|--------------------|---------------------|---------------|
| 1 | DEFINE | [describe define step for your job] | [pain points] | [tools] |
```
Add one line: "Do not use example content — it is for FORMAT illustration only."

**Status:** ✅ FIXED in Phase0_ODI.md v1.1

---

### BUG 02 — SAFETY_OVERRIDE is too broad for defense weapons
**Severity:** HIGH
**Where:** `SAFETY_OVERRIDE` field in P28
**Problem:**
```
SAFETY_OVERRIDE: "If customer outcomes involve autonomous weapons use, target engagement,
or lethal force decisions — tag [ETHICAL-REVIEW-REQUIRED]."
```
"Target engagement" and "lethal force decisions" describe **every** outcome for a combat weapon.
This means the override fires on O13 (first-shot hit probability) and O14 (reaction time) —
which are valid HITL-compliant outcomes, not ethical violations.

The override is so broad that it loses its signal. Running P28 on V-SMASH-L would technically
require flagging every outcome.

**Fix:** Narrow the trigger to *autonomous* lethal action without human decision:
```
SAFETY_OVERRIDE: "If any outcome describes AI system autonomously SELECTING AND ENGAGING a target
  without human confirmation — tag [ETHICAL-REVIEW-REQUIRED].
  HITL systems (human initiates trigger; AI only gates timing) do NOT require this flag.
  Test: 'Does this outcome require a human to press trigger?' Yes → permitted. No → flag."
```

**Status:** ✅ FIXED in Phase0_ODI.md v1.1

---

### BUG 03 — EVIDENCE_REQUIRED is impossible in Vietnamese defense context
**Severity:** MEDIUM
**Where:** `EVIDENCE_REQUIRED: true` field
**Problem:**
```
EVIDENCE_REQUIRED: true — all customer insights must be sourced
  (interview, observation, field data, or [ASSUMPTION: needs validation])
```
For defense procurement in Vietnam, direct customer interviews (QĐND soldiers, MoD officers)
are essentially impossible for a private company during product development.
The prompt provides no guidance on what alternative evidence is acceptable.

Result in practice: every outcome was tagged [ASSUMPTION], degrading confidence rating to MEDIUM
even though competitive analysis, doctrine docs, and field exercise reports are available.

**Fix:** Add accepted evidence hierarchy for defense:
```
EVIDENCE_HIERARCHY (use highest available):
  Level 1 (strongest): Direct interview / field observation with target user
  Level 2: Field exercise reports / AAR documents
  Level 3: Published doctrine, training manuals, official standards (MIL-STD, TCVN)
  Level 4: Competitive product analysis (what existing solutions solve/don't solve)
  Level 5 [ASSUMPTION]: Engineer hypothesis — flag and plan validation step
```

**Status:** ✅ FIXED in Phase0_ODI.md v1.1

---

### BUG 04 — Segment size has no effect on strategy recommendation
**Severity:** MEDIUM
**Where:** P32 (`/seg`) — `STEP 3: SELECT PRIMARY TARGET`
**Problem:** The segmentation framework says "recommend primary segment" but gives no weighting
for segment size. For V-SMASH-L:
- Segment A (infantry): ~50,000 relevant personnel
- Segment B (infrastructure security): ~5,000
- Segment C (special ops): ~2,000

A 10:1 size ratio should heavily favor Segment A, but nothing in the prompt forces this.
A naive run could select Segment C (special ops) purely because their unmet outcomes are more
concentrated — ignoring volume entirely.

**Fix:** Add segment scoring to P32:
```
SEGMENT SCORING (weighted):
  Opportunity concentration: 40% — which segment has highest opp scores?
  Segment size:              30% — estimate unit count or budget size
  Adoption speed:            20% — how quickly can they buy/adopt?
  Strategic fit:             10% — IRONMESH leverage, local content advantage
Recommend segment with highest weighted score. Show calculation.
```

**Status:** ⏳ Pending — next session

---

### BUG 05 — No output file path specified
**Severity:** LOW
**Where:** `TOOLS_ALLOWED: ["read_file", "search_knowledge_base", "write_file"]`
**Problem:** `write_file` is listed as allowed but there's no instruction on WHERE to write the output.
In the V-SMASH-L test, I had to decide independently to create `00_ODI_Phase/ODI_Report_v1.0.md`.
A less experienced user would either skip writing, or write to wrong location.

**Fix:** Add output destination:
```
OUTPUT_DESTINATION: "Agentic_Skills_Mastery/projects/{{project_name}}/PHASE_0/{{project_name}}_ODI_Report_v1.0.md"
  Filename prefix: always start with project/product name
  Frontmatter required: project, phase, type, version, created, status, data_confidence
```

**Status:** ✅ FIXED in Phase0_ODI.md v1.1 (path updated in next step)

---

### BUG 06 — Outcome temporal stability not captured
**Severity:** LOW
**Where:** P30 outcomes table
**Problem:** For a counter-UAS product, drone technology evolves fast. An outcome like
"Maximize effective detection range at low altitude" will remain valid for 5+ years.
But "Minimize time to classify FPV vs quadcopter" may become obsolete as drone types converge.

Temporal stability affects whether an outcome should be hard-engineered (stable) or handled
by software updates (volatile). The current prompt doesn't capture this.

**Fix:** Add optional column to P30 outcomes table:
```
| Job Step | Desired Outcome | Importance | Satisfaction | Stability | Source |
|         |                 |            |              | H/M/L 3yr |        |
```
H = stable for 3+ years (structural design target)
M = may shift (implement in software, design for upgrade)
L = likely obsolete in 3 years (implement minimally, plan for pivot)

**Status:** ⏳ Pending — next session

---

### BUG 07 — {{placeholder}} density with no fill guide
**Severity:** LOW
**Where:** Entire P28 prompt — 15+ {{}} placeholders
**Problem:** P28 has 15+ `{{}}` placeholders. No guidance on expected length or detail level.
First-time users don't know if "existing_solutions" should be 1 line or 1 paragraph.
In the V-SMASH-L test, I had to make judgment calls throughout.

**Fix:** Add a `FILL GUIDE` block at the top of P28 (already partially done in v1.1):
```
FILL GUIDE (before running):
  {{product_domain}}:         2–5 words. E.g.: "counter-UAS smart sight"
  {{customer_segment}}:       Specific unit type. E.g.: "Vietnamese Army infantry battalion"
  {{existing_solutions}}:     1–3 sentences. What they use today + why it's insufficient.
  {{domain}}:                 Match one of: training / surveillance / engagement / logistics
  {{company}}:                Leave as "Workshop X — ACH philosophy, IRONMESH" unless changed.
  All other {{}}:             Fill inline or reference earlier section output.
```

**Status:** ✅ Partially fixed (FILL GUIDE added); remaining {{}} guidance → next session

---

## What Worked Well

| Element | Assessment |
|---------|-----------|
| 5-section structure | Excellent — logical flow, nothing skipped |
| DIM outcome format | Works cleanly; "Minimize/Maximize + metric + context" held throughout all 22 outcomes |
| Opportunity score formula | Simple, effective, unambiguous |
| HITL checkpoint placement | Correct — after job map and after opportunity scores are natural pause points |
| ODI → Phase 1 handoff checklist | Best part of the prompt — directly feeds VDI 2225 weights |
| Solution-neutral constraint | Enforced well — caught myself writing "use AI to detect" and corrected to "maximize detection range" |
| UNCERTAINTY_FLAG | Valuable — made [ASSUMPTION] tagging natural, not burdensome |

---

## Design Alignment Check (retrospective)

Did V-SMASH-L's existing design address the top ODI opportunities?

| Opp Rank | Outcome | V-SMASH-L Design Response | Aligned? |
|----------|---------|------------------------------|---------|
| #1 (18) | First-shot hit probability | YOLOv8-nano + TensorRT + Kalman tracking; ≥95% detection rate target | ✅ |
| #2 (17) | Hostile/civilian misclassification | AI confidence threshold; HITL principle; operator override | ⚠️ Partial — no explicit IFF spec found |
| #3 (16) | Reaction time lock → window | <500ms latency target; TensorRT INT8 | ✅ |
| #4 (16) | Detection range | 50–500m spec | ✅ |
| #5 (15) | Time from alert to acquisition | Not explicitly specified as a requirement | ❌ Gap found |
| #6 (15) | Rounds to neutralize | Not specified — no ammo expenditure requirement | ❌ Gap found |
| #7 (14) | HITL safety (O10) | Core design principle; trigger gate architecture | ✅ |
| #8 (14) | Track stability in clutter | YOLOv8-nano + Kalman — addressed in SW design | ✅ |

**Gaps found by retroactive ODI:**
- **O02 (misclassification):** No explicit IFF confidence threshold spec in requirements list
- **O05 (alert → acquisition time):** No requirement → should be: "<5 seconds from alert to sight picture"
- **O15 (rounds to neutralize):** No requirement → should be: "≤3 rounds at 100m"

**Conclusion:** ODI retroactively found 2 missing requirements in a completed design.
Running ODI BEFORE Phase 1 would have caught these gaps proactively.

---

## Recommended Prompt Fixes — P28

| # | Bug | Severity | Status |
|---|-----|----------|--------|
| 01 | Training-biased job map example | HIGH | ✅ Fixed v1.1 |
| 02 | SAFETY_OVERRIDE too broad | HIGH | ✅ Fixed v1.1 |
| 03 | EVIDENCE_REQUIRED impossible for defense | MEDIUM | ✅ Fixed v1.1 |
| 04 | Segment size not weighted | MEDIUM | ✅ Fixed v1.2 |
| 05 | No output file path | LOW | ✅ Fixed v1.1 |
| 06 | Outcome temporal stability | LOW | ✅ Fixed v1.2 |
| 07 | {{placeholder}} fill guide | LOW | ✅ Fixed v1.2 |

---

## P29 Validation — V-SMASH-L (`/jobs`) — Standalone Run

**Date:** 2026-02-20 | **Verdict:** USABLE — 3 additional bugs found

**What standalone P29 reveals (vs P29 embedded inside P28):**
- Running P29 alone correctly fires the HITL checkpoint after core job definition
- When P28 calls P29 as sub-routine, this HITL is silently skipped — dangerous for wrong job definition

### BUG P29-01 — HITL in P29 skipped when called from P28
**Severity:** HIGH
**Problem:** P28 instructs "run P29 if not already done" as a sub-routine. P29's own HITL checkpoint
("after identifying core functional job — present for validation") is never surfaced because P28 only
pauses after Section 4 (opportunity scores). A wrong job definition at Section 1 invalidates all
downstream ODI work — but P28 doesn't stop to verify it.

**Fix:** Add explicit validation gate in P28 SECTION 1:
```
SECTION 1: JOB-TO-BE-DONE
  After defining core job: STOP. Present job statement to user.
  ✅ Proceed only after explicit confirmation: "Is this the right job?"
  ❌ If job is wrong → restart P29, do not proceed to job map.
  This is the highest-leverage checkpoint in ODI — wrong job = wrong everything.
```
**Status:** ⏳ Pending — fix in Phase0_ODI.md v1.3

---

### BUG P29-02 — SAFETY_OVERRIDE functionally dead for HITL products
**Severity:** MEDIUM (same root cause as P28 Bug 02)
**Problem:** P29 SAFETY_OVERRIDE: "If job analysis reveals customer intent to use product for
unauthorized force or outside ROE — flag immediately."
For HITL-compliant counter-UAS products, every job step is inside ROE by design.
The flag never fires because engagement IS the job — or it fires incorrectly if "engagement job"
is interpreted as "outside ROE intent."

**Fix:** Align with P28 fix — same HITL-test formulation:
```
SAFETY_OVERRIDE: "If core functional job requires AI to SELECT AND INITIATE engagement without
  human authorization — flag [ETHICAL-REVIEW-REQUIRED].
  Jobs where human decides target + authorizes trigger (AI assists timing only) → permitted."
```
**Status:** ⏳ Pending — fix in Phase0_ODI.md v1.3

---

### BUG P29-03 — Job map table has no Source column
**Severity:** LOW
**Problem:** The P29 job map output table format:
```
| Step | Job Step Name | What Customer Does | Current Pain Points | Current Tools |
```
Has no Source column. During V-SMASH-L validation, a Source column was added manually
(e.g., "[ASSUMPTION: Level 3 — doctrine gap]"). Without it, evidence tracking breaks —
each job map row could be based on field data or pure assumption with no distinction.

**Fix:** Add Source column to P29 job map table:
```
| Step | Job Step Name | What Customer Does | Current Pain Points | Current Tools | Source |
```
**Status:** ⏳ Pending — fix in Phase0_ODI.md v1.3

---

## P29 — What Worked Well

| Element | Assessment |
|---------|-----------|
| Job granularity calibration examples | Excellent — "win the war" vs "press button X" calibration was genuinely useful |
| Core job format (verb + object + clarifier) | Works cleanly; format check catches too-broad and too-narrow instantly |
| HITL checkpoint (standalone) | Fires at exactly the right moment — after job definition, before job map |
| Emotional + Consumption chain job categories | Good structure; catches adjacent jobs that affect product adoption |

---

## Recommended Prompt Fixes — P29

| # | Bug | Severity | Status |
|---|-----|----------|--------|
| P29-01 | P28 skips P29's HITL when calling as sub-routine | HIGH | ✅ Fixed v1.3 |
| P29-02 | SAFETY_OVERRIDE functionally dead for HITL products | MEDIUM | ✅ Fixed v1.3 |
| P29-03 | Job map table missing Source column | LOW | ✅ Fixed v1.3 |

---

---

## P30 Validation — V-SMASH-L (`/outcomes`) — Standalone Run

**Date:** 2026-02-20 | **Input:** P29 job map (V-SMASH-L engagement job, 8 steps)
**Verdict:** USABLE — 4 bugs found

### BUG P30-01 — SAFETY_OVERRIDE fires on every combat outcome
**Severity:** HIGH
**Where:** `SAFETY_OVERRIDE` field in P30
**Problem:**
```
SAFETY_OVERRIDE: "If any outcome relates to real-time weapons engagement —
  tag [HITL-MANDATORY]. Cannot be fully automated."
```
For V-SMASH-L, ALL 22 outcomes relate to real-time weapons engagement — detection, tracking,
aiming, confirmation, engagement, re-engagement. Tagging every outcome [HITL-MANDATORY] makes
the tag meaningless (signal = noise) and buries the one truly critical constraint (O10 — HITL gate).

**Fix:** Narrow to outcomes that describe AUTONOMOUS fire authority:
```
SAFETY_OVERRIDE: "If any outcome implies AI has authority to initiate fire without human press
  of trigger — tag [HITL-MANDATORY] and stop. Outcomes about speed, accuracy, or probability
  of human-initiated engagement do NOT require this flag.
  Test: 'Is the human still pressing the trigger?' Yes → no flag needed."
```
**Status:** ✅ Fixed v1.4

---

### BUG P30-02 — DIM examples are training-biased
**Severity:** MEDIUM
**Where:** `✓ Examples:` block in P30
**Problem:** All three examples describe a training/range system, not an engagement product:
```
"Minimize the time required to generate a training performance report after each exercise session"
"Maximize the accuracy of shot location measurement when shooting from a moving platform"
"Minimize the likelihood of scoring errors when multiple shooters are active simultaneously"
```
For V-SMASH-L (combat engagement product), these examples caused no errors because the
DIM format itself is neutral — but a first-time user would likely produce outcomes that
read like training metrics ("minimize scoring errors") rather than combat metrics ("maximize hit probability").

**Fix:** Replace with domain-neutral examples covering both training and engagement contexts:
```
✓ ENGAGEMENT examples:
  "Maximize the probability of first-shot hit on a moving target at 50–300m under time pressure"
  "Minimize the time from target detection to confirmed engagement-ready state"
✓ TRAINING examples:
  "Minimize the time required to generate performance report after each exercise session"
  "Maximize the accuracy of shot location measurement during live-fire assessment"
✓ SURVEILLANCE examples:
  "Maximize the detection range of low-altitude objects in cluttered backgrounds"
Use the examples matching your product domain.
```
**Status:** ✅ Fixed v1.4

---

### BUG P30-03 — UNCERTAINTY_FLAG uses old tag format
**Severity:** LOW
**Where:** `UNCERTAINTY_FLAG` field in P30
**Problem:**
```
UNCERTAINTY_FLAG: true — any estimated importance/satisfaction without customer data =
  [ASSUMPTION: validate with field interview]
```
v1.1 introduced a 5-level evidence hierarchy. The old tag `[ASSUMPTION: validate with field interview]`
doesn't map to any evidence level — it should be `[ASSUMPTION: Level 5]` to align with the hierarchy.
This inconsistency causes mixed tag formats across P28 (level-tagged) and P30 (untagged).

**Fix:** Align tag with evidence hierarchy:
```
UNCERTAINTY_FLAG: true — tag importance/satisfaction estimates without direct customer data as:
  [L4: competitive analysis] or [L5: ASSUMPTION — validate with field interview]
  using the same evidence hierarchy from P28/P30 FILL GUIDE.
```
**Status:** ✅ Fixed v1.4

---

### BUG P30-04 — `minimum_per_step: 2` forces artificial padding
**Severity:** LOW
**Where:** `CONSTRAINTS: minimum_per_step: 2 outcomes per job step`
**Problem:** Some job steps genuinely have 1 dominant outcome. For V-SMASH-L MODIFY step:
"Minimize re-acquisition time" is the overwhelming outcome — the second outcome added
("Minimize ammunition expenditure") is linked but weaker. The minimum forces artificial entries
that dilute the opportunity landscape with lower-signal outcomes.

**Fix:** Change to guidance, not hard constraint:
```
target_per_step: 2–5 outcomes per job step (aim for 2 minimum)
  Exception: if only 1 outcome dominates a step (Importance ≥9, gap from #2 ≥3 points),
  document the reason and proceed with 1 — forced padding degrades signal quality.
```
**Status:** ⏳ Deferred (low impact)

---

## P30 — What Worked Well

| Element | Assessment |
|---------|-----------|
| DIM format enforcement | Excellent — "Minimize/Maximize + metric + context" is robust; caught solution-biased phrasing every time |
| Stability column (new in v1.2) | High value — immediately obvious which outcomes to hard-engineer vs keep in software layer |
| PHASE 1 FEED guidance | Clear and actionable — Stability H → hard req, L → software-only is exactly the right Phase 1 bridge |
| FILL GUIDE (new in v1.2) | Removes friction significantly; reference to evidence hierarchy saves time |

---

## Recommended Prompt Fixes — P30

| # | Bug | Severity | Status |
|---|-----|----------|--------|
| P30-01 | SAFETY_OVERRIDE fires on all combat outcomes | HIGH | ✅ Fixed v1.4 |
| P30-02 | DIM examples training-biased | MEDIUM | ✅ Fixed v1.4 |
| P30-03 | UNCERTAINTY_FLAG uses old tag format | LOW | ✅ Fixed v1.4 |
| P30-04 | minimum_per_step forces artificial padding | LOW | ⏳ Deferred |

---

## P31 Validation — V-SMASH-L (`/opp`) — Standalone Run

**Date:** 2026-02-20 | **Input:** 22 outcomes from P30, I and S scores
**Verdict:** USABLE — 4 bugs found; formula and ranking work correctly

### BUG P31-01 — OVERSERVED rule applied to HITL safety outcome
**Severity:** HIGH
**Where:** `STRATEGIC QUADRANT` and `PHASE 1 FEED` in P31
**Problem:**
```
Low Importance + High Satisfaction = OVERSERVED → SIMPLIFY/REDUCE
OVERSERVED outcomes (score <6) → Opportunities for AI automation
```
For V-SMASH-L O10 (HITL safety — "Minimize likelihood of unintended trigger"):
- Importance = 10 (maximum — cannot be lower), Satisfaction = 6 (currently met by design)
- Opp Score = 10+(10-6) = 14 — actually UNDERSERVED, not overserved

But the principle creates a dangerous general rule: "if a safety outcome has high satisfaction,
treat it as overserved and automate it." A future product where HITL is WELL implemented
(satisfaction = 9) would score Opp = 10+(10-9) = 11 — still UNDERSERVED.
However, IF satisfaction rose to 10, opp score = 10 — SERVED. The guidance then says
"MAINTAIN QUALITY" which is correct. But "OVERSERVED → AI automation" with no exception
creates risk that a safety outcome scoring <6 on a non-defense product would be automated away.

**Fix:** Add explicit exception rule:
```
OVERSERVED guidance exception:
  SAFETY-CRITICAL outcomes (any outcome tagged [HITL-MANDATORY] in P30):
    NEVER recommend SIMPLIFY/REDUCE regardless of opp score.
    Low opp score = "well-implemented — maintain, do not reduce investment."
    NEVER recommend AI automation of a safety-critical function.
```
**Status:** ✅ Fixed v1.4

---

### BUG P31-02 — Stability column not carried into ranked table
**Severity:** MEDIUM
**Where:** `RANKED OPPORTUNITY TABLE` format in P31
**Problem:** P30 added a Stability column (H/M/L) to outcomes. P31's ranked table format:
```
| Rank | Outcome | Importance | Satisfaction | Opp Score | Priority |
```
Drops Stability. This loses the key investment decision dimension — two outcomes with the
same opp score (e.g., both = 15) but different stability (H vs L) require completely
different engineering responses: one needs structural design, one needs a software sprint.

**Fix:** Add Stability column to P31 ranked table + investment recommendation:
```
| Rank | Outcome | Imp | Sat | Opp | Priority | Stability | Investment Type |
|------|---------|-----|-----|-----|----------|-----------|-----------------|

INVESTMENT TYPE (derived from Priority × Stability):
  UNDERSERVED + H = STRUCTURAL PRIORITY — design into hardware/structure
  UNDERSERVED + M = SOFTWARE PRIORITY — implement in firmware/SW, design for upgrade
  UNDERSERVED + L = WATCH LIST — minimum viable implementation, revisit in 12 months
  SERVED/OVERSERVED + any = MAINTAIN/MONITOR — no new investment
```
**Status:** ✅ Fixed v1.4

---

### BUG P31-03 — No FILL GUIDE
**Severity:** LOW
**Where:** P31 placeholders: `{{customer_segment}}`, `{{reference or paste P30 output}}`, `{{source}}`
**Problem:** Same as P28 Bug 07 — no guidance on fill depth. {{reference or paste P30 output}}
is particularly unclear: paste the whole table (22 rows) or just reference it?

**Fix:** Add FILL GUIDE to P31:
```
FILL GUIDE (complete before running P31):
  {{customer_segment}}:              Copy from P29/P30.
  {{reference or paste P30 output}}: Paste full outcomes table. Do NOT summarize —
                                     every row is an individual calculation input.
  {{source: interview/...}}:         Describe your data quality for I and S scores.
                                     Affects confidence of opportunity landscape.
```
**Status:** ✅ Fixed v1.4

---

### BUG P31-04 — PHASE 1 FEED automates OVERSERVED without HITL exception
**Severity:** LOW
**Where:** `PHASE 1 FEED` in P31
**Problem:**
```
OVERSERVED outcomes (score <6) → Opportunities for AI automation (S3/S4 skill apply here)
```
Correct for non-safety outcomes. Dangerous if a safety outcome somehow scores <6 (e.g.,
if a user grossly over-estimates satisfaction). No exception stated.

**Fix:** Add one line:
```
OVERSERVED outcomes (score <6) → AI automation opportunities (S3/S4 skill apply here)
  EXCEPTION: if outcome is tagged [HITL-MANDATORY] → maintain human control regardless of score
```
**Status:** ✅ Fixed v1.4

---

## P31 — What Worked Well

| Element | Assessment |
|---------|-----------|
| Formula clarity | Perfect — `Importance + max(I-S, 0)` is unambiguous; calculated correctly for all 22 outcomes |
| Score interpretation thresholds | ≥10/8-9/6-7/<6 tiers work cleanly in practice |
| HITL checkpoint | Correct placement — after scores, before strategy. Catches assumption-heavy landscapes before commitment |
| Ranked table format | Clear and actionable; the worked example (9+6=15) in the template is genuinely useful |
| SAFETY_OVERRIDE | "Automation opportunity ≠ automation is appropriate" is the right framing — correct in principle |

---

## Recommended Prompt Fixes — P31

| # | Bug | Severity | Status |
|---|-----|----------|--------|
| P31-01 | OVERSERVED rule applied to HITL safety without exception | HIGH | ✅ Fixed v1.4 |
| P31-02 | Stability column dropped in ranked table | MEDIUM | ✅ Fixed v1.4 |
| P31-03 | No FILL GUIDE | LOW | ✅ Fixed v1.4 |
| P31-04 | PHASE 1 FEED automates OVERSERVED without HITL exception | LOW | ✅ Fixed v1.4 |

---

## P32 Validation — V-SMASH-L (`/seg`) — Standalone Run

**Date:** 2026-02-20 | **Input:** P31 opportunity landscape (22 outcomes, 14 UNDERSERVED)
**Verdict:** USABLE — 3 bugs found; weighted scoring (new in v1.2) works well

### BUG P32-01 — STEP 2 qualitative → STEP 3 quantitative mismatch
**Severity:** HIGH
**Where:** STEP 2 `DEFINE SEGMENTS` table → STEP 3 weighted scoring table
**Problem:** STEP 2 fills qualitative:
```
| Adoption likelihood | High/Med/Low | | |
| Strategic priority  | High/Med/Low | | |
```
STEP 3 weighted scoring (added in v1.2) expects numeric 0–10 scores:
```
| Adoption speed (procurement cycle) | 20% | score/10 | ...
| Strategic fit (IRONMESH leverage)  | 10% | score/10 | ...
```
There's no conversion bridge. A user filling STEP 2 has "High/Med/Low" but STEP 3 needs
"score/10". Result: either user skips STEP 2 and goes straight to STEP 3, or
re-does STEP 2 numerically. Duplicate work, inconsistency risk.

**Fix:** Replace STEP 2 qualitative with numeric fields that directly feed STEP 3:
```
STEP 2: DEFINE SEGMENTS
  | Attribute                  | Segment A | Segment B | Segment C |
  |----------------------------|-----------|-----------|-----------|
  | Name                       |           |           |           |
  | Who they are               |           |           |           |
  | Size estimate (unit count) |           |           |           |
  | Top 3 unmet outcomes       |           |           |           |
  | Current solution           |           |           |           |
  | Opp concentration (0–10)   |           |           |           | ← feeds STEP 3 (40%)
  | Size score (0–10)          |           |           |           | ← feeds STEP 3 (30%)
  | Adoption speed (0–10)      |           |           |           | ← feeds STEP 3 (20%)
  | Strategic fit (0–10)       |           |           |           | ← feeds STEP 3 (10%)

  Scoring guidance:
    Opp concentration: avg opp score of segment's top 5 outcomes ÷ 2 (max opp ~20 → max score 10)
    Size: 0–10 relative to other segments (largest segment = 10)
    Adoption speed: 10=procurement decision <6 months; 5=6-18 months; 1=>18 months
    Strategic fit: 10=perfect IRONMESH fit + local content leverage; 5=partial; 1=no fit
```
**Status:** ✅ Fixed v1.4

---

### BUG P32-02 — VN_context encourages geographic segmentation
**Severity:** MEDIUM
**Where:** `CONTEXT: VN_context` in P32
**Problem:**
```
VN_context: Vietnamese military operates in tropical, coastal, and highland environments
```
For V-SMASH-L validation, this framing created pull toward geographic segments:
"coastal units" vs "highland units" — which are demographic/geographic, not outcome-based.
The CONSTRAINTS say "group by OUTCOMES" but the VN_context field subtly contradicts this.

For counter-UAS, coastal vs highland units face the same drone threat — outcome profiles
are nearly identical across environments. Geographic segmentation would create artificial
distinctions with no product differentiation implications.

**Fix:** Reframe VN_context to emphasize operational role over geography:
```
VN_context: Vietnamese military customer context —
  Prioritize segmentation by OPERATIONAL ROLE (infantry / SOF / logistics / base security)
  not by geography (coastal / highland / delta). Same environment, different jobs.
  Geographic context only relevant if environmental variation changes product requirements
  (e.g., saltwater corrosion for naval vs dry highland for infantry — then segment by environment).
```
**Status:** ✅ Fixed v1.4

---

### BUG P32-03 — No FILL GUIDE
**Severity:** LOW
**Where:** P32 placeholders: `{{customer_group}}`, `{{reference P31 output}}`, `{{known_segments}}`
**Problem:** Same pattern as P29/P30/P31 before fixes.

**Fix:** Add FILL GUIDE to P32:
```
FILL GUIDE (complete before running P32):
  {{customer_group}}:          Broad group. E.g.: "Vietnamese defense forces"
  {{reference P31 output}}:    Reference or paste the ranked opportunity table from P31.
  {{known_segments}}:          List any sub-groups you already know exist.
                               E.g.: "infantry platoons, base security teams, special ops"
                               Write [UNKNOWN] if no prior knowledge — model will infer from outcomes.
```
**Status:** ✅ Fixed v1.4

---

## P32 — What Worked Well

| Element | Assessment |
|---------|-----------|
| Weighted segment scoring (new v1.2) | Strong addition — forces explicit trade-off between opp concentration and segment size |
| segment_basis: group by OUTCOMES constraint | Critical and correct; prevented geographic drift in this test |
| HITL checkpoint | Strategic decision gate is well-placed — segment selection has major downstream implications |
| Phase 1 Feed | Clean handoff — primary segment outcomes → highest-priority P13 requirements |

---

## Recommended Prompt Fixes — P32

| # | Bug | Severity | Status |
|---|-----|----------|--------|
| P32-01 | STEP 2 qualitative / STEP 3 quantitative mismatch | HIGH | ✅ Fixed v1.4 |
| P32-02 | VN_context encourages geographic segmentation | MEDIUM | ✅ Fixed v1.4 |
| P32-03 | No FILL GUIDE | LOW | ✅ Fixed v1.4 |

---

## Full Bug Register — Phase0_ODI.md

| ID | Prompt | Bug | Severity | Status |
|----|--------|-----|----------|--------|
| 01 | P28 | Training-biased job map example | HIGH | ✅ v1.1 |
| 02 | P28 | SAFETY_OVERRIDE too broad | HIGH | ✅ v1.1 |
| 03 | P28 | EVIDENCE_REQUIRED no defense alternative | MEDIUM | ✅ v1.1 |
| 04 | P28/P32 | Segment size has no weight | MEDIUM | ✅ v1.2 |
| 05 | P28 | No output file path | LOW | ✅ v1.1 |
| 06 | P30 | Outcome stability not captured | LOW | ✅ v1.2 |
| 07 | P28-P30 | {{placeholder}} no fill guide | LOW | ✅ v1.2 |
| P29-01 | P28 | P28 skips P29 HITL gate | HIGH | ✅ v1.3 |
| P29-02 | P29 | SAFETY_OVERRIDE dead for HITL products | MEDIUM | ✅ v1.3 |
| P29-03 | P29 | Job map missing Source column | LOW | ✅ v1.3 |
| P30-01 | P30 | SAFETY_OVERRIDE fires on all combat outcomes | HIGH | ✅ v1.4 |
| P30-02 | P30 | DIM examples training-biased | MEDIUM | ✅ v1.4 |
| P30-03 | P30 | UNCERTAINTY_FLAG old tag format | LOW | ✅ v1.4 |
| P30-04 | P30 | minimum_per_step forces padding | LOW | ⏳ Deferred |
| P31-01 | P31 | OVERSERVED rule applied to HITL safety | HIGH | ✅ v1.4 |
| P31-02 | P31 | Stability dropped in ranked table | MEDIUM | ✅ v1.4 |
| P31-03 | P31 | No FILL GUIDE | LOW | ✅ v1.4 |
| P31-04 | P31 | PHASE 1 FEED automates OVERSERVED no exception | LOW | ✅ v1.4 |
| P32-01 | P32 | STEP 2 qualitative / STEP 3 quantitative mismatch | HIGH | ✅ v1.4 |
| P32-02 | P32 | VN_context encourages geographic segmentation | MEDIUM | ✅ v1.4 |
| P32-03 | P32 | No FILL GUIDE | LOW | ✅ v1.4 |

**Total: 21 bugs logged | 20 fixed | 1 deferred**

---

*Validation Notes v1.2 | P28–P32 (/odi /jobs /outcomes /opp /seg) | V-SMASH-L | 2026-02-20*
