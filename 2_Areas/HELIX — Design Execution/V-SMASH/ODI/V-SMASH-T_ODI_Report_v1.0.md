---
project: V-SMASH-T
phase: 0
type: odi-report
prompt: P28
version: 1.0
created: 2026-02-21
status: draft
data_confidence: LOW (~80% ASSUMPTION)
family: V-SMASH
parent_odi: V-SMASH-L_ODI_Report_v1.0.md
---

# V-SMASH-T (Trainer) — ODI Report

> **Family position:** Training ecosystem — recurring SW revenue via IRONMESH.
> **Base reference:** V-SMASH-L ODI Report v1.1. V-T has a **completely different job** from V-L — training, not engagement. Standalone ODI.

---

## 1. Job-to-be-Done

### Core Functional Job

**"Train infantry soldiers to effectively engage drone targets using AI-scored simulated engagements, progressively improving their proficiency without expending ammunition or requiring a dedicated drone target range."**

V-T's job is fundamentally different from all other V-SMASH products: it is about **learning**, not **fighting**. The drone is not a threat — it is a training aid. The AI is not aiming — it is coaching.

### Emotional Jobs

| Job | Description |
|-----|-------------|
| **Feel prepared for real engagement** | "When a real drone comes, I'll know what to do" — confidence transfer from training to operations. |
| **See measurable progress** | "I'm getting better each session" — scoring and coaching create visible improvement trajectory. |
| **Not waste training resources** | "No ammo, no drone target, no range booking" — V-T makes training cheap and accessible. |

### Consumption Chain Jobs

| Job | Description |
|-----|-------------|
| **Set up training anywhere** | No dedicated range needed. Open field + V-T + drone target (physical or virtual). |
| **Run high-throughput sessions** | ≥10 simulated engagements per hour. A platoon of 30 soldiers trains in one afternoon. |
| **Generate qualification records** | IRONMESH records every session → qualification pass/fail, proficiency tracking, unit readiness reporting. |

---

## 2. Job Map

**Executor (trainee):** Infantry soldier (same profile as V-M user — basic rifleman)
**Executor (instructor):** Gunnery instructor or unit training NCO
**Context:** Training field, barracks area, or existing range. Instructor supervises, V-T scores.

| Step | Job Step | What Happens | Current Pain Points | Current Tools |
|------|----------|-------------|---------------------|---------------|
| **1. DEFINE** | Set up training scenario | Instructor selects scenario: difficulty level, engagement range, drone speed, scoring mode (point/qualification/free). V-T configures. | No C-UAS training scenarios exist in Vietnamese military. Soldiers train against static targets only. | Paper targets, basic marksmanship range |
| **2. LOCATE** | Trainee acquires drone target | Trainee scans sky, acquires drone target (physical silhouette on motorized cable OR real micro-drone). V-T detects and begins tracking. | No moving aerial targets. Soldiers have never practiced leading a moving target in the sky. | None |
| **3. PREPARE** | V-T computes ideal engagement | V-T AI calculates optimal lead, timing, and burst. This is the REFERENCE SOLUTION — the "perfect answer" against which the trainee's attempt is scored. | No reference solution exists. Instructor can demonstrate but cannot quantify what "correct" looks like. | Instructor demonstration |
| **4. CONFIRM** | Trainee aims and waits for shot opportunity | Trainee places sight on target, adjusts for lead. V-T records aiming point trajectory in real time. | No feedback on aiming quality BEFORE firing. Trainee doesn't know if they're on target. | Visual judgment only |
| **5. EXECUTE** | Trainee fires (laser) | Trainee pulls trigger. V-T emits eye-safe laser pulse. Scoring system detects laser impact point relative to target. | Live fire = expensive, dangerous, limited attempts. No scoring unless using expensive instrumented range. | Live ammunition (limited, expensive, safety constraints) |
| **6. MONITOR** | V-T scores the engagement | V-T computes: angular error, timing error, lead accuracy, target intercept probability. Displays score immediately. | No objective scoring. Instructor's verbal "good/bad" judgment, subjective, inconsistent between instructors. | Instructor judgment |
| **7. MODIFY** | AI coaching feedback | V-T identifies specific weakness: "You fired 120ms early" or "Lead was 0.8 mrad left." Suggests corrective drill. | No quantitative feedback. Instructor says "aim more to the right" without numbers. | Verbal coaching |
| **8. CONCLUDE** | Record session, track progress | Session data uploaded to IRONMESH. Trainee sees progress over time. Instructor sees unit proficiency dashboard. Qualification recorded. | No longitudinal training data. Cannot track improvement across sessions. No unit-level readiness metrics. | Paper log (if any) |

---

## 3. Desired Outcomes

### DEFINE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT01 | Minimize the time to set up a training scenario (instructor configures, trainee ready to engage) | 7 | 3 | [ASSUMPTION] ≤5 minutes from "start training" to first engagement. Current range setup = 30-60 min. |
| OT02 | Maximize the variety of training scenarios available (difficulty, range, speed, weather, multi-drone) | 8 | 1 | [ASSUMPTION] Currently ZERO scenarios. Any is improvement. Progressive difficulty is key for learning. |

### LOCATE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT03 | Minimize the cost of the drone target system per engagement | 8 | 2 | [ASSUMPTION] Physical drone target (motorized cable) vs real micro-drone. Cable: $0/engagement. Micro-drone: $5-10 amortized. |

### PREPARE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT04 | Maximize the accuracy of the reference solution (AI's "perfect answer") | 9 | 2 | [ASSUMPTION] If reference is wrong, all scoring is wrong. Must match V-L ballistic model ≤0.5 mrad. |

### CONFIRM Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT05 | Maximize the real-time aiming feedback quality (before trigger pull) | 7 | 1 | [ASSUMPTION] V-T could show "you're close" or "too far left" BEFORE firing. This is a training-unique capability. |

### EXECUTE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT06 | Maximize the shot scoring accuracy (angular error, timing error) | 9 | 2 | [ASSUMPTION] ≤0.5 mrad scoring resolution at 200m. Must distinguish "near miss" from "clean miss." |
| OT07 | Maximize the engagement throughput per training hour | 8 | 2 | [ASSUMPTION] ≥10 engagements/hour vs live fire: 3-5 engagements (ammo reload, safety checks). |
| OT08 | Minimize the safety risk during training (eye-safe laser, no live rounds) | 10 | 5 | [ASSUMPTION] Class 1 laser is inherently safe (IEC 60825-1). No ammunition. This is one area where current satisfaction is nonzero because live fire training already has safety protocols — but V-T eliminates the risk entirely. |

### MONITOR Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT09 | Maximize the objectivity and consistency of scoring across instructors and sessions | 9 | 1 | [ASSUMPTION] AI scoring is consistent — same engagement = same score regardless of instructor. Eliminates subjectivity. |
| OT10 | Maximize the instructor's multi-trainee monitoring capability | 7 | 1 | [ASSUMPTION] Instructor dashboard: see all trainees' scores in real time. Currently instructor can only watch one at a time. |

### MODIFY Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT11 | Maximize the specificity of AI coaching feedback (what went wrong, how to fix it) | 9 | 1 | [ASSUMPTION] "You fired 120ms early, lead was 0.8 mrad left" vs "aim more right." Quantified feedback accelerates learning. |
| OT12 | Maximize the measurable Pk improvement per training cycle | 9 | 2 | [ASSUMPTION] **Kill condition depends on this.** If AI coaching shows no Pk improvement (p > 0.05) after 100 sessions → product fails. |

### CONCLUDE Step

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT13 | Maximize the quality of longitudinal training records (progress tracking over time) | 8 | 1 | [ASSUMPTION] IRONMESH stores every session. Trainee progress curve visible. Unit readiness dashboard. |
| OT14 | Maximize the usefulness of qualification records for unit readiness reporting | 8 | 1 | [ASSUMPTION] Training command needs pass/fail data by unit. Currently no standardized C-UAS qualification exists. |
| OT15 | Minimize the total training cost per soldier per qualification cycle | 9 | 2 | [ASSUMPTION] V-T: $0 ammo + $50 laser wear + $25 target amortized = $75/cycle. Live fire: $200-500 ammo + range fees. |

### Cross-Cutting

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OT16 | Minimize the IRONMESH subscription cost relative to training value delivered | 8 | 2 | [ASSUMPTION] $500-1,500/yr. Military procurement may resist subscription model. Must demonstrate ROI. |
| OT17 | Maximize the skill transfer from V-T training to real V-L/V-M engagements | 9 | 2 | [ASSUMPTION] **Most critical outcome for STRATEGY.** If V-T training doesn't transfer to real weapons, the product is a game, not a trainer. V-T must use same AI core, same optics, same weight. |

**Total: 17 outcomes across 8 job steps + cross-cutting.**

---

## 4. Opportunity Scores

**Formula:** Opp = Importance + max(Importance − Satisfaction, 0)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OT11** | Maximize AI coaching specificity | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 2 | **OT09** | Maximize scoring objectivity/consistency | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 3 | **OT12** | Maximize measurable Pk improvement | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 4 | **OT17** | Maximize skill transfer to real engagements | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 5 | **OT04** | Maximize reference solution accuracy | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 6 | **OT06** | Maximize shot scoring accuracy | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 7 | **OT15** | Minimize training cost per qualification | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 8 | **OT02** | Maximize scenario variety | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 9 | **OT13** | Maximize longitudinal training records | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 10 | **OT14** | Maximize qualification record usefulness | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 11 | **OT07** | Maximize engagement throughput | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 12 | **OT03** | Minimize drone target cost per engagement | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 13 | **OT16** | Minimize IRONMESH subscription cost vs value | 8 | 2 | **14** | 🔴 UNDERSERVED |
| 14 | **OT10** | Maximize multi-trainee monitoring | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 15 | **OT05** | Maximize pre-shot aiming feedback | 7 | 1 | **13** | 🔴 UNDERSERVED |
| 16 | **OT01** | Minimize scenario setup time | 7 | 3 | **11** | 🟡 UNDERSERVED |
| 17 | **OT08** | Minimize safety risk | 10 | 5 | **15** | 🔴 UNDERSERVED |

**Result: 17/17 outcomes UNDERSERVED (Opp ≥10).** Zero C-UAS training solutions exist in Vietnam — every outcome is unmet.

### Strategic Quadrant

| Quadrant | Outcomes | Action |
|----------|----------|--------|
| **UNDERSERVED (Opp ≥10, Imp ≥8)** | OT11, OT09, OT12, OT17, OT04, OT06, OT15, OT02, OT13, OT14, OT07, OT03, OT16, OT08 | **Address — product core** |
| **UNDERSERVED (Opp ≥10, Imp <8)** | OT10, OT05, OT01 | **Address — secondary** |
| **MAINTAIN-QUALITY** | OT08 (safety — laser must remain Class 1 under all conditions) | **Never degrade** |
| **OVERSERVED** | None | — |

> **SAFETY_OVERRIDE:** OT08 (laser safety) is the only safety-critical outcome. V-T uses an eye-safe Class 1 laser (IEC 60825-1) — inherently safe. No weapon lethality. No engagement autonomy. No HITL override needed. However, laser classification must be verified under all operating conditions (dust, rain, reflective surfaces).

---

## 5. Strategic Recommendation

### Strategy: **DIFFERENTIATE**

**Rationale:** V-T enters a market with zero competitors — but it's a **training** market, not a **weapon** market. The differentiation is against alternative training methods (live fire, no training at all), not other products. V-T must prove that AI-scored laser training produces measurably better soldiers than traditional methods.

1. **Coaching quality** (OT11 = Opp 17, OT09 = Opp 17) — the top 2 outcomes are about **AI coaching replacing instructor subjectivity.** V-T's value is quantified, consistent, progressive feedback that no human instructor can match at scale.

2. **Skill transfer** (OT17 = Opp 16) — V-T must use the SAME AI core, SAME optics, SAME form factor as V-L/V-M. If training doesn't transfer to operational weapons, V-T is a game. Same hardware ensures muscle memory transfer.

3. **Cost disruption** (OT15 = Opp 16) — $75/qualification cycle vs $200-500 live fire. A 100-unit V-T fleet trains a brigade at 70% cost reduction. Ammo savings alone justify the subscription.

### Top 3 Opportunity Areas

| Priority | Area | Top Outcome | Product Response |
|----------|------|-------------|------------------|
| 1 | **AI Coaching** | OT11 (Opp 17) | Quantified per-engagement feedback: timing error (ms), lead error (mrad), corrective drill |
| 2 | **Scoring Objectivity** | OT09 (Opp 17) | AI scoring = same result regardless of instructor, time, location. Standardizes C-UAS qualification. |
| 3 | **Measurable Improvement** | OT12 (Opp 16) | Kill condition: Pk must improve (p < 0.05) after 100 sessions. This is provable with IRONMESH data. |

### V-T as IRONMESH Entry Drug

V-T's strategic role transcends training:

| Role | Mechanism |
|------|-----------|
| **IRONMESH adoption** | V-T is the easiest IRONMESH product to buy (training, not weapon). Units adopt IRONMESH for training → platform is already installed → upsell V-L/V-D for operations. |
| **Data generation** | 100 V-T units × 10 sessions/day × 10 engagements/session = 10,000 engagement records/day. This trains the AI for V-L/V-M/V-D. V-T is the data flywheel. |
| **Recurring revenue** | $500-1,500/unit/yr × 200 units × 10 years = $1M-3M. Exceeds entire V-L HW revenue. |

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes for V-T Phase 1 requirements:** OT11, OT09, OT12, OT17, OT04
- **Kill condition (from P11):** No measurable Pk improvement (p > 0.05) after 100 sessions across 3 units → KILL. Also kill if subscription uptake < 25% after 12 months.
- **Validation needed:** OT17 (skill transfer) requires controlled study — V-T-trained vs non-V-T-trained soldiers, then test on V-L. Pre/post Pk comparison.
- **Segment D validation:** Interview 3-5 gunnery instructors on: current C-UAS training gaps, willingness to use AI scoring, subscription model acceptability.

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (Section 6, V-T coverage) | V-SMASH-T_Product_Proposal_v1.0.md (P11)*
