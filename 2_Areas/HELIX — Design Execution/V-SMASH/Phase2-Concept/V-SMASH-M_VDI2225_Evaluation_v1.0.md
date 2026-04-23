---
project: V-SMASH-M
phase: 2
type: vdi-2225-evaluation
prompt: P21
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Selection_Chart_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md, V-SMASH-M_Problem_Abstraction_v1.0.md]
qc_run: 17 (2 FLAGs resolved — CHK-06 cascading error note, CHK-11 accountability note)
---

# V-SMASH-M (Micro-Sight) — VDI 2225 Evaluation (P21)

> **Purpose:** Score 3 surviving concepts on weighted criteria. Select concept for Phase 3 embodiment.
> **Threshold:** Rt ≥0.70. No weak spots on critical criteria.
> **Scale:** 0=Unsatisfactory · 1=Barely adequate · 2=Adequate · 3=Good · 4=Ideal
> **Weak spot:** Score ≤1 on criterion with weight ≥0.08

---

## Step 1: Evaluation Criteria (13 criteria)

| # | Criterion | Weight | Justification |
|---|-----------|--------|---------------|
| K1 | Detection performance (range, Pd, latency) | 0.12 | Core value proposition — "see the drone first." VM-O06, VM-O09, VM-S02. |
| K2 | Lead accuracy (angular precision) | 0.12 | Core value — "follow the dot hits." VM-S06. Opp score 16. |
| K3 | Safety / fail-safe behavior | 0.10 | [SAFETY-CRITICAL] VM-Y01-Y04. Non-negotiable in defense. |
| K4 | Environmental robustness (MIL-STD-810H) | 0.08 | HC-5. Field conditions are the operating norm, not the exception. |
| K5 | Ergonomics / operator usability | 0.08 | "Follow the dot" paradigm. VM-H01 (≤2h training), VM-H06 (zero menu). Opp 16. |
| K6 | Unit production cost vs target ($500) | 0.10 | HC-4. Volume play requires low unit cost. Opp score 19 (highest). |
| K7 | Local content potential (≥60% by value) | 0.08 | HC-6. Defense sovereignty requirement. D-classified. |
| K8 | Manufacturability (Workshop X) | 0.06 | S7 capability. Can WX produce at 100 units/month? |
| K9 | Development cost / NRE | 0.06 | VM-C03 (≤$50K NRE target). Resource constraint. |
| K10 | Development schedule vs Q4 2026 | 0.06 | VM-D04. First-mover advantage in VN C-UAS market. |
| K11 | Operational envelope (light conditions) | 0.05 | VM-O07 (low-light). Differentiator for extended use. |
| K12 | Platform reuse (V-SMASH family) | 0.05 | IRONMESH 70% reuse target. Shared AI stack across family. |
| K13 | Upgrade path (firmware, sensors) | 0.04 | Future-proofing. Can AI improve without hardware swap? |
| | **SUM** | **1.00** | |

---

## Step 2: Scoring (row by row — all concepts per criterion)

### K1: Detection performance (0.12)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | YOLOv8-nano proven at 30ms. Global shutter handles 30°/s. Detection range ≥200m with 2MP at 12° FOV. Pd ≥90% achievable with proper training data. Well-characterized performance. |
| **γ** | **3** | MobileNet-SSD: slightly less accurate than YOLO at range but ~20ms inference. Same sensor. Comparable detection performance. Difference is marginal at this level. |
| **δ** | **4** | Same as α in daylight PLUS NIR extends to dusk/dawn. Addresses VM-O07. Only concept with extended-light detection. Clear performance advantage in twilight conditions. |

### K2: Lead accuracy (0.12)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | Monocular size-based range: ±30% at 200m. For 7.62×39 at 200m, 30% range error → ~0.5 mrad lead error (within VM-S06 ≤1.0 mrad at 150m engagement). OLED sub-mrad display resolution. Good but not ideal. **[QC-RUN17, CHK-06 note]:** α's range error is correlated with SF3 classification error (wrong class → wrong physical size → wrong range → wrong lead). This is a cascading failure mode, bounded by SF5 bounds check. Phase 3 risk register should track this coupling. |
| **γ** | **3** | Operator range bands (50m steps): if correct band, lead error is dominated by 25m discretization → ~0.3 mrad error at 150m. Better than α IF operator selects correctly. Under stress, operator may select wrong band → worse than α. Average case: comparable. **[QC-RUN17, CHK-06 note]:** γ's range error is independent of SF3 (operator input, not AI-derived). Different failure mode from α — not cascading. Under stress performance is the key risk. |
| **δ** | **3** | Same size-based range as α. Identical lead accuracy in visible band. NIR doesn't improve range estimation. Same cascading error profile as α. |

### K3: Safety / fail-safe (0.10)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **4** | HC-1 enforced (no fire gate). SF4 threshold+temporal gate: conservative (requires 3 consecutive frames ≥70%). Safe power failure (blank display). Degraded modes defined (P17). Mature, well-understood safety architecture. |
| **γ** | **4** | Identical safety architecture to α. Same gate, same fail-safe. Rocker switch is passive (doesn't affect safety path). |
| **δ** | **3** | Same safety architecture. Bayesian gate is mathematically optimal but more complex — harder to verify safety properties. Running posterior has memory (past frames influence current decision) which could theoretically delay a suppress decision if prior was strongly positive. Needs careful implementation. |

### K4: Environmental robustness (0.08)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | Standard mil-rated components. IP67 achievable with PA6-GF30 housing. -10°C to +55°C with Jetson thermal management. 10,000G recoil: needs shock isolation but proven approaches exist. |
| **γ** | **3** | Same environmental profile as α. Different SoC (Hailo-8 vs Jetson) but similar thermal envelope. |
| **δ** | **3** | Same base environmental profile. NIR filter assembly adds one more optical element to seal/protect but not fundamentally different. |

### K5: Ergonomics / usability (0.08)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **4** | Pure "follow the dot." Zero controls during operation (power button only). ≤2h training. OLED see-through maintains natural shooting position. Ideal ergonomics for infantry mass deployment. |
| **γ** | **3** | Same OLED "follow the dot." BUT range rocker adds 1 control. Under stress, soldier must estimate range AND select band. Cognitive load is small (4 detents) but non-zero. VM-H06 tension (≤1 control). Training time may increase from 2h to 2.5h. |
| **δ** | **4** | Same as α — zero operator controls. NIR is automatic (sensor-level, not operator-level). Bayesian gate is transparent to user. |

### K6: Unit production cost (0.10)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | BOM $250-350. Midrange of $500 ceiling. Target $300 achievable. Good margin for procurement. |
| **γ** | **3** | BOM $230-320. Slightly cheaper than α (MobileNet SoC may be lower cost). Rocker switch is ~$1. Comparable to α. |
| **δ** | **2** | BOM $280-380. Higher end of range. NIR sensor +$15-20, larger battery +$2, filter assembly +$5. Still within $500 ceiling but less margin. Target $350 is tight. |

### K7: Local content (0.08)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | ~62% local. Meets HC-6 (≥60%). Housing, PCB, lens mount, assembly labor all local. Imports: sensor, SoC, OLED, BLE module. |
| **γ** | **3** | ~63% local. Similar to α. Hailo-8 may have different import cost structure but net effect is comparable. |
| **δ** | **3** | ~65% local [QC-RUN15 breakdown]. NIR sensor is imported but local filter assembly and larger local PCB partially offset. Achieves HC-6. |

### K8: Manufacturability (0.06)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | WX has V-L experience. OLED alignment jig is only new tooling (~$2K). SMT within capability. 100 units/month achievable. |
| **γ** | **3** | Similar to α. MobileNet training is simpler. Rocker adds 1 assembly step. Hailo-8 is different SoC but same PCB assembly process. |
| **δ** | **2** | NIR optical filter integration adds assembly complexity. NIR sensor alignment more critical than visible-only. Bayesian gate requires more rigorous software qualification. 100 units/month still achievable but ramp takes longer. |

### K9: Development cost / NRE (0.06)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | NRE ~$30-40K. Reuses V-L AI stack (YOLO model, training pipeline). New: housing design, OLED optical assembly, PCB layout. Within $50K target. |
| **γ** | **3** | NRE ~$30-40K. MobileNet training may be cheaper (less compute). Hailo-8 SDK is free. Rocker integration is trivial. |
| **δ** | **2** | NRE ~$45-55K. Additional costs: NIR training data collection (~$5K in drone flights), Bayesian gate algorithm development (~$5K in engineering time), NIR optical integration (~$3K). Borderline on $50K target. |

### K10: Development schedule (0.06)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **4** | Fastest path. V-L AI reuse saves 2-3 months. OLED integration is the only new development. Q4 2026 achievable with margin. |
| **γ** | **3** | Comparable to α. MobileNet requires new training pipeline (not reusing V-L YOLO directly). Hailo-8 integration adds 2-4 weeks. Q4 2026 achievable but tighter. |
| **δ** | **2** | +6-9 weeks vs α. NIR data collection (2-3 weeks), Bayesian gate (2-4 weeks), NIR optical integration (1-2 weeks). Q4 2026 is achievable but with zero schedule margin. |

### K11: Operational envelope (0.05)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **2** | Daylight only. Low-light performance degrades significantly below ~100 lux. VM-O07 (≥100m at dusk) unlikely without fast lens. |
| **γ** | **2** | Same as α — visible-only sensor. |
| **δ** | **4** | NIR extends to dusk/dawn (~1-50 lux). VM-O07 achievable. Only concept addressing the low-light gap. Clear differentiation. |

### K12: Platform reuse (0.05)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **4** | YOLO model shared with V-L, V-D, V-R (all use drone detection). Jetson SoC shared. BLE stack shared. Housing form factor is V-M specific but mount system reusable. Highest platform commonality. |
| **γ** | **2** | MobileNet is a DIFFERENT architecture from V-L's YOLO. Hailo-8 is different from V-L's Jetson. Creates a second AI stack in the family. Training pipeline diverges. Reduces platform reuse. |
| **δ** | **3** | Same YOLO + Jetson as α. NIR sensor is V-M/V-NV specific (not shared with V-L/V-D/V-R). Bayesian gate is software — can be shared with V-NV. Good reuse on compute, moderate on sensor. |

### K13: Upgrade path (0.04)

| Concept | Score | Rationale |
|---------|:-----:|-----------|
| **α** | **3** | Firmware updates at depot: improved YOLO model, refined ballistic tables, new drone classes. Hardware upgrade path: swap sensor module (if connector standardized). |
| **γ** | **3** | Same firmware upgrade path. MobileNet model can be updated. Range rocker could be augmented with AI-suggested range in future firmware (display recommended band). |
| **δ** | **4** | All α upgrade paths PLUS: NIR model improvements, Bayesian gate parameter tuning, potential active-IR illuminator add-on for full-dark operation. Widest upgrade envelope. |

---

## Step 3: Weighted Score Calculation

| # | Criterion | Weight | α Score | α Weighted | γ Score | γ Weighted | δ Score | δ Weighted |
|---|-----------|:------:|:-------:|:----------:|:-------:|:----------:|:-------:|:----------:|
| K1 | Detection performance | 0.12 | 3 | 0.36 | 3 | 0.36 | 4 | 0.48 |
| K2 | Lead accuracy | 0.12 | 3 | 0.36 | 3 | 0.36 | 3 | 0.36 |
| K3 | Safety / fail-safe | 0.10 | 4 | 0.40 | 4 | 0.40 | 3 | 0.30 |
| K4 | Environmental robustness | 0.08 | 3 | 0.24 | 3 | 0.24 | 3 | 0.24 |
| K5 | Ergonomics / usability | 0.08 | 4 | 0.32 | 3 | 0.24 | 4 | 0.32 |
| K6 | Unit cost | 0.10 | 3 | 0.30 | 3 | 0.30 | 2 | 0.20 |
| K7 | Local content | 0.08 | 3 | 0.24 | 3 | 0.24 | 3 | 0.24 |
| K8 | Manufacturability | 0.06 | 3 | 0.18 | 3 | 0.18 | 2 | 0.12 |
| K9 | NRE / dev cost | 0.06 | 3 | 0.18 | 3 | 0.18 | 2 | 0.12 |
| K10 | Dev schedule | 0.06 | 4 | 0.24 | 3 | 0.18 | 2 | 0.12 |
| K11 | Operational envelope | 0.05 | 2 | 0.10 | 2 | 0.10 | 4 | 0.20 |
| K12 | Platform reuse | 0.05 | 4 | 0.20 | 2 | 0.10 | 3 | 0.15 |
| K13 | Upgrade path | 0.04 | 3 | 0.12 | 3 | 0.12 | 4 | 0.16 |
| | **Weighted Sum** | **1.00** | | **3.24** | | **3.00** | | **3.01** |
| | **Rt = Sum/4** | | | **0.81** | | **0.75** | | **0.75** |

---

## Step 4: Weak Spot Analysis

**Weak spot rule:** Score ≤1 on criterion with weight ≥0.08

| Concept | Weak Spots Found | Details |
|---------|:----------------:|---------|
| **α** | **0** | No score below 2. Lowest score: K11 (operational envelope) = 2, weight 0.05 (below threshold). |
| **γ** | **0** | No score below 2. Lowest: K11 = 2 (w=0.05), K12 = 2 (w=0.05). Both below threshold. |
| **δ** | **0** | No score below 2. Lowest: K6 = 2 (w=0.10), K8 = 2 (w=0.06), K9 = 2 (w=0.06), K10 = 2 (w=0.06). K6 at weight 0.10 is notable but score=2 (adequate), not ≤1. |

**No weak spots on any concept.** All concepts are viable.

---

## Step 5: Sensitivity Analysis

### Test 1: Increase K1 (Detection) weight by 20% (0.12 → 0.144)

Compensate by reducing K6 (Cost) by 0.024 (0.10 → 0.076).

| Concept | Original Rt | Adjusted Rt | Rank Change? |
|---------|:-----------:|:-----------:|:------------:|
| α | 0.81 | 0.81 | No |
| γ | 0.75 | 0.75 | No |
| δ | 0.75 | 0.77 | No (but δ moves closer to α) |

**Result: Ranking unchanged.** δ benefits from detection emphasis but not enough to overtake α.

### Test 2: Increase K6 (Cost) weight by 20% (0.10 → 0.12)

Compensate by reducing K11 (Envelope) by 0.02 (0.05 → 0.03).

| Concept | Original Rt | Adjusted Rt | Rank Change? |
|---------|:-----------:|:-----------:|:------------:|
| α | 0.81 | 0.81 | No |
| γ | 0.75 | 0.76 | No |
| δ | 0.75 | 0.74 | No |

**Result: Ranking unchanged.** Cost emphasis slightly favors γ over δ but no rank change.

### Test 3: Increase K10 (Schedule) weight by 20% (0.06 → 0.072)

Compensate by reducing K13 (Upgrade) by 0.012 (0.04 → 0.028).

| Concept | Original Rt | Adjusted Rt | Rank Change? |
|---------|:-----------:|:-----------:|:------------:|
| α | 0.81 | 0.82 | No |
| γ | 0.75 | 0.75 | No |
| δ | 0.75 | 0.74 | No |

**Result: Ranking unchanged.** Schedule emphasis widens α's lead.

### Sensitivity Verdict

**Ranking is ROBUST.** α leads in all 3 sensitivity tests. γ and δ are tied at 0.75 across all tests with marginal shifts. No weight perturbation reverses the ranking.

---

## Step 6: Recommendation

### Selected Concept: **α — Proven Baseline**

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| **Rt** | **0.81** | ≥0.70 | ✅ EXCEEDS |
| Weak spots | 0 | 0 | ✅ NONE |
| Sensitivity | Robust | Stable | ✅ STABLE |

**Why α:**
1. **Highest Rt (0.81)** — clear leader, not a marginal win.
2. **Zero weak spots** — no criterion below adequate.
3. **Lowest risk** — proven components, V-L reuse, fastest schedule.
4. **Best platform reuse** — same YOLO + Jetson stack as V-L, V-D, V-R. Maintains IRONMESH 70% commonality target.
5. **Simplest ergonomics** — pure "follow the dot," zero operator controls beyond power.

**Why not γ (0.75):**
γ's operator range rocker adds cognitive load for marginal accuracy improvement. The size-based range in α (±30%) produces lead errors within VM-S06 tolerance at typical engagement ranges. γ introduces a second AI stack (MobileNet/Hailo-8) that fragments the V-SMASH family platform — scoring 2 on K12 vs α's 4. The cost savings ($20-30 BOM difference) don't justify the platform divergence.

**Why not δ (0.75):**
δ's NIR capability is genuinely valuable (only concept addressing VM-O07 dusk/dawn). But: higher cost, longer schedule, Bayesian gate complexity, and NIR training data risk. δ is the right concept for **V-SMASH-NV** (night vision variant in the family), not V-SMASH-M. Recommend: **carry δ's architecture as the V-NV concept in a separate Phase 2 cycle.** V-M should be the fast, cheap, daylight-first product.

### Value Profile

```
             α        γ        δ
K1  Det     ███      ███      ████     ← δ best (NIR)
K2  Lead    ███      ███      ███
K3  Safety  ████     ████     ███      ← α/γ best (simpler gate)
K4  Env     ███      ███      ███
K5  Ergo    ████     ███      ████     ← α/δ best (zero controls)
K6  Cost    ███      ███      ██       ← δ worst (NIR premium)
K7  Local   ███      ███      ███
K8  Mfg     ███      ███      ██
K9  NRE     ███      ███      ██
K10 Sched   ████     ███      ██       ← α best (fastest)
K11 Envel   ██       ██       ████     ← δ best (NIR)
K12 Reuse   ████     ██       ███      ← α best (YOLO/Jetson family)
K13 Upgrad  ███      ███      ████     ← δ best (widest envelope)

Rt:         0.81     0.75     0.75
```

---

## Gate 3 Decision

**Phase 2 → Phase 3 Gate Checklist:**

| # | Criterion | Status |
|---|-----------|--------|
| 1 | Function structure complete (P17) | ✅ 7 main + 3 supporting SFs, all interfaces defined |
| 2 | ≥3 concepts generated (P18) | ✅ 5 concepts generated, 3 survived to VDI |
| 3 | VDI 2225 score ≥0.70 for selected concept | ✅ α = 0.81 |
| 4 | No weak spots on selected concept | ✅ 0 weak spots |
| 5 | Sensitivity analysis: ranking robust | ✅ Stable across 3 perturbations |
| 6 | Rationale documented for selection and rejections | ✅ All decisions traced |
| 7 | QC Gate run on Phase 2 artifacts | ✅ Runs #13-16 (P16, P17, P18, P19) |

**All 7 criteria met.**

---

## HITL CHECKPOINT — GATE 3 DECISION

**Concept α — Proven Baseline selected. Rt = 0.81. Zero weak spots. Ranking robust.**

Options:
- A) APPROVE — Proceed to Phase 3 (Embodiment Design) with Concept α
- B) REVISE — Reconsider scoring or revisit concept paths
- C) PAUSE — Stop here, resume later
- D) CANCEL — Abandon this project

**WAITING for explicit gate decision. Will NOT auto-proceed.**

---

## Capture Protocol

```
Product: V-SMASH-M
Selected concept: α — Proven Baseline
  SF1: Sony IMX global shutter (visible CMOS)
  SF2: YOLOv8-nano (on-device, INT8)
  SF3: Integrated CNN (YOLO classification head)
  SF4: Threshold + temporal filter (≥70% for 3 frames)
  SF5: Monocular size-based range + ballistic lookup
  SF6: See-through OLED micro-display (beam-splitter)
  SF7: BLE 5.0 to IRONMESH (optional)
Rt score: 0.81/1.0
Weak spots: None
Mitigation plan: N/A
Iterations needed: 1 (single P18 round, no iteration)
Reuse analysis done: NO — scheduled for post-concept, pre-embodiment (P50)
Carry-forward: δ architecture → V-SMASH-NV Phase 2 (separate cycle)
```

---

## QC Gate Run #17 — Amendments Applied

| Flag | Severity | Amendment |
|------|----------|-----------|
| CHK-06 | LOW | K2 scoring: added notes distinguishing α's SF3-correlated (cascading) range error from γ's independent (operator) range error. No score change — both remain 3 — but failure mode distinction documented for Phase 3 risk register. |
| CHK-11 | LOW | Accountability: KN is both designer and evaluator. Mitigated by documented rationale, sensitivity analysis, and QC gate cross-check. For production-intent Phase 3 gate, recommend independent reviewer. Current rigor acceptable at concept selection. |

**Gate result after amendments:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
