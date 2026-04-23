---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active]
method: HOQ (House of Quality) — ODI-derived
source: FORGE_Job_Map_v1.0.md §7
pipeline: forge-job-map → ICDM Step 1.5 input
version: 1.0
---

# FORGE HOQ Design Parameters — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Source:** FORGE Job Map v1.0 (63 ODI outcomes, 15 top underserved)
**Purpose:** Standalone reference for ICDM Step 1.5 input validation + Phase 2 concept evaluation weights
**Strategy:** DIFFERENTIATED — target top 15 underserved outcomes (Opp 7.4-8.4)

---

## 1. DESIGN PARAMETERS (12 DPs)

> Derived from 63 Desired Outcome Statements via affinity grouping.
> Each DP maps to a cluster of related outcomes.

| DP# | Design Parameter | Source Outcomes | Type | Variant |
|-----|-----------------|----------------|------|---------|
| DP1 | Ballistic Fidelity | O-29, O-30, O-37 | Performance | All |
| DP2 | Target AI Realism | O-33, O-35, O-36, O-43 | Performance | All |
| DP3 | Ship Motion Fidelity | O-34, O-39 | Performance | LITE, FULL |
| DP4 | Haptic Fidelity (recoil + resistance) | O-26, O-27, O-38 | Performance | All |
| DP5 | Visual Immersion | O-31, O-42, O-32 | Performance | All |
| DP6 | Instructor Observability | O-44, O-45, O-46, O-47, O-48 | Usability | All |
| DP7 | Assessment Depth | O-55, O-56, O-57, O-58, O-59, O-61, O-62 | Value | All |
| DP8 | Scenario Flexibility | O-16, O-17, O-18, O-19, O-50, O-51, O-53 | Usability | All |
| DP9 | Logistics Independence | O-08, O-09, O-10, O-13, O-14 | Value | All |
| DP10 | Crew Coordination | O-22, O-40, O-41, O-54 | Performance | FULL, CORTEX |
| DP11 | Multi-Site Joint Ops | O-23, O-49 | Performance | CORTEX only |
| DP12 | Weapon Modularity | O-05, O-12, O-52 | Flexibility | All |

**Coverage:** 63/63 outcomes mapped to 12 DPs. No orphan outcomes.

---

## 2. HOQ MATRIX — Outcomes × Design Parameters

> Relationship strength: A=9 (strong), B=5 (moderate), C=3 (weak)
> Only top 15 outcomes shown (Opp ≥ 7.4). Full matrix in Job Map §7.

```
                      DP1  DP2  DP3  DP4  DP5  DP6  DP7  DP8  DP9  DP10 DP11 DP12
                      Ball Tgt  Ship Hapt Vis  Inst Asmt Scen Logi Crew Jnt  Wpn
Outcomes       Imp    Fid  AI   Mot  Fid  Imm  Obs  Dpth Flex Ind  Coor Ops  Mod
─────────────────────────────────────────────────────────────────────────────────────
O-29 Ballistic  4.8    A                        C         C
O-30 Hit/miss   4.8    A    C                             C
O-36 Swarm      4.7         A                        C    A              C
O-10 Weather    4.5                                            A
O-34 Ship mot   4.5              A         C
O-33 FPV track  4.8         A              C
O-43 Mixed atk  4.6         A                        C    A              C
O-39 Lead angle 4.5    B         A
O-14 Cost/hr    4.5                                            A
O-59 AAR        4.3                             C    A
O-44 Aim trace  4.3                        C    A
O-42 Night      4.3              C         A              C
O-18 Swarm sim  4.5         A                        C    A
O-35 Variety    4.2         A                             A
O-40 Crew coord 4.5                                                 A
─────────────────────────────────────────────────────────────────────────────────────
```

---

## 3. DESIGN PARAMETER WEIGHTS

> W_TP = Σ (Importance_i × Relationship_ij) for each DP_j
> R_j = W_TP_j / Σ W_TP (normalized to 100%)

| DP# | Design Parameter | W_TP | R_j (%) | Weight (0-1) | Priority |
|-----|-----------------|:----:|:-------:|:------------:|:--------:|
| DP2 | Target AI Realism | 165.6 | **18.2%** | 0.182 | **HIGH** |
| DP1 | Ballistic Fidelity | 129.0 | **14.2%** | 0.142 | **HIGH** |
| DP7 | Assessment Depth | 100.8 | **11.1%** | 0.111 | **HIGH** |
| DP8 | Scenario Flexibility | 97.5 | **10.7%** | 0.107 | HIGH |
| DP9 | Logistics Independence | 81.0 | **8.9%** | 0.089 | MED |
| DP5 | Visual Immersion | 76.2 | 8.4% | 0.084 | MED |
| DP3 | Ship Motion Fidelity | 72.0 | 7.9% | 0.079 | MED |
| DP6 | Instructor Observability | 64.8 | 7.1% | 0.071 | MED |
| DP10 | Crew Coordination | 40.5 | 4.5% | 0.045 | MED (FULL+) |
| DP4 | Haptic Fidelity | 38.5 | 4.2% | 0.042 | LOW |
| DP12 | Weapon Modularity | 27.0 | 3.0% | 0.030 | LOW |
| DP11 | Multi-Site Joint Ops | 16.2 | 1.8% | 0.018 | LOW (CORTEX) |
| | **TOTAL** | **909.1** | **100%** | **1.000** | |

### Weight Tiers

| Tier | DPs | Combined Weight | Implication |
|------|-----|:---------------:|-------------|
| **HIGH** (>10%) | DP2, DP1, DP7, DP8 | **54.2%** | Must-win. Over-engineer if needed. |
| **MED** (4-10%) | DP9, DP5, DP3, DP6, DP10 | **36.8%** | Meet spec. No gold-plating. |
| **LOW** (<4%) | DP4, DP12, DP11 | **9.0%** | Good enough. Cost-optimize. |

**Key Insight:** Top 3 DPs (Target AI + Ballistic + Assessment) = 43% of weight. These are SOFTWARE-driven, not hardware-driven. Confirms ACH thesis: SW creates value, HW is commodity.

---

## 4. CORRELATION ROOF — Contradictions

| Pair | DP-A | DP-B | Correlation | Nature |
|------|------|------|:-----------:|--------|
| S1 | DP1 Ballistic | DP2 Target AI | **++** | Better ballistics + better AI = synergy (shared physics engine) |
| S2 | DP1 Ballistic | DP3 Ship Motion | **+** | Ship motion makes ballistics more relevant |
| S3 | DP2 Target AI | DP5 Visual | **+** | Better visuals make AI targets more effective |
| S4 | DP2 Target AI | DP8 Scenario | **++** | More AI behaviors = more scenario combinations |
| K1 | DP3 Ship Motion | DP9 Logistics | **-** | Motion platform = heavy/complex vs portable indoor |
| K2 | DP4 Haptic | DP9 Logistics | **-** | Realistic recoil = more complex vs simple setup |
| K3 | DP5 Visual | DP9 Logistics | **-** | More projectors/larger screen = more space/cost vs compact |

### TRIZ Resolution Directions

| # | Contradiction | TRIZ Principle | Resolution |
|---|--------------|----------------|------------|
| K1 | Ship Motion vs Logistics | #1 Segmentation | Modular deck — LITE has 2-DOF seat, FULL has shared deck. Remove for FIXED. |
| K2 | Haptic vs Logistics | #35 Parameter changes | Adjustable solenoid force via PWM. One mechanism, tunable per weapon. |
| K3 | Visual vs Logistics | #17 Another dimension | VR fallback for LITE (optional), projection for FIXED/FULL. Space trades with immersion. |

---

## 5. CDTC — Cost Deployment via WTP

### WTP Category → Budget Allocation

| WTP Category | DPs Covered | Budget % | Implication |
|-------------|-------------|:--------:|-------------|
| **Essential** (must-have) | DP1, DP2 (core), DP5 (min), DP9, DP12 (core) | 60% | Customer walks if missing |
| **Beneficial** (nice-to-have) | DP3, DP7 (full), DP8 (full), DP6, DP4 | 30% | Customer pays $5-10K premium |
| **Luxurious** (won't pay extra) | DP10, DP11, advanced DP7 (AI coach) | 10% | Future upsell / CORTEX tier |

### Cost Pareto — LITE Variant (PA-2)

| # | Cost Factor | Est. Cost | % Total | Dominant DP |
|---|-----------|:---------:|:-------:|------------|
| 1 | SW Development (6pm) | $8,000 | 41% | DP1, DP2, DP7, DP8 |
| 2 | Projectors × 3 | $3,600 | 19% | DP5 |
| 3 | GPU + Render PC | $3,500 | 18% | DP5, DP2 |
| 4 | Motion Platform | $2,000 | 10% | DP3 |
| 5 | Weapon Station | $1,330 | 7% | DP4, DP12 |
| 6 | All rest (UPS, rack, cables) | $1,200 | 6% | DP9 |
| | **TOTAL R&D** | **$19,630** | 100% | |

**Strategic observation:** 41% cost is SW → serves 54% of weight (HIGH tier DPs). Cost-weight alignment is excellent. Hardware spend (59% cost) serves 46% of weight — slightly over-allocated but driven by Essential WTP (projectors, GPU = visual minimum).

---

## 6. DP → SUBSYSTEM MAPPING

> Links HOQ Design Parameters to Morphological Matrix subsystems.

| DP# | Design Parameter | Primary SS | Key Sub-Functions |
|-----|-----------------|-----------|-------------------|
| DP1 | Ballistic Fidelity | SS2 (Visual+Engine) | SF5 Ballistic Engine (6DOF V-SMASH) |
| DP2 | Target AI Realism | SS4 (Scenario) | SF3 Target Behavior AI, SF4 Scenario Manager |
| DP3 | Ship Motion Fidelity | SS3 (Motion) | SF1 Motion Generation, SF2 Wave Model |
| DP4 | Haptic Fidelity | SS1 (Weapon) | SF4 Recoil, SF3 Resistance |
| DP5 | Visual Immersion | SS2 (Visual+Engine) | SF1 Display, SF2 Render Engine, SF3 Environment |
| DP6 | Instructor Observability | SS5 (Integration) | SF2 Instructor Station, SF4 Aim Trace |
| DP7 | Assessment Depth | SS5 (Integration) | SF1 Scoring Engine, SF3 Report Generator |
| DP8 | Scenario Flexibility | SS4 (Scenario) | SF1 Editor, SF2 Library, SF5 Environment Control |
| DP9 | Logistics Independence | System Architecture | Indoor design, no ammo, offline SW |
| DP10 | Crew Coordination | SS5 (Integration) | SF5 Multi-station sync (FULL+) |
| DP11 | Multi-Site Joint Ops | SS5 (Integration) | SF6 WAN networking (CORTEX) |
| DP12 | Weapon Modularity | SS1 (Weapon) | SF1 Universal Cradle, SF2 NFC Module ID |

---

## 7. DP → REQUIREMENTS TRACEABILITY

> Links HOQ Design Parameters to Requirements List v2.0 categories.

| DP# | Design Parameter | Key Requirements (v2.0) | Coverage |
|-----|-----------------|------------------------|:--------:|
| DP1 | Ballistic Fidelity | T-03 (≤5% error), Q-01 (≤1mrad), S-07 (≥95% hit detect) | Complete |
| DP2 | Target AI Realism | T-05 (≥5 UAV profiles), T-06 (swarm ≥4), O-05→O-07 | Complete |
| DP3 | Ship Motion Fidelity | K-03 (roll ±12°), K-04 (pitch ±8°), T-04 (JONSWAP) | Complete |
| DP4 | Haptic Fidelity | F-01 (dimensions ±5%), F-05 (recoil perceptible), G-02 | Complete |
| DP5 | Visual Immersion | G-03 (FOV 180°), S-01 (latency ≤50ms), T-02 (UAV visible 250m) | Complete |
| DP6 | Instructor Observability | S-06 (instructor station), Er-04 (no IT skill needed) | Complete |
| DP7 | Assessment Depth | S-06 (auto-score), T-07 (replay), S-07 (≥95%) | Complete |
| DP8 | Scenario Flexibility | O-05→O-07 (≥3 scenarios), T-05 (UAV profiles), Er-04 | Complete |
| DP9 | Logistics Independence | G-01 (6×8m indoor), C-02 (≤$5/h), L-04 (offline) | Complete |
| DP10 | Crew Coordination | S-08 (≥4 stations) | **Partial** — needs FULL-specific reqs |
| DP11 | Multi-Site Joint Ops | — | **Missing** — needs CORTEX reqs |
| DP12 | Weapon Modularity | F-07 (MWI swap <5min) | Complete |

**Gaps:** DP10 and DP11 need additional requirements for FULL and CORTEX variants. Deferred to Requirements v3.0 when those variants enter active development.

---

## 8. DOWNSTREAM ROUTING

```
FORGE_HOQ_Design_Parameters_v1.0
│
├── ICDM Step 1.5 → Input validation (this doc = FORGE input)
│   "12 DPs with weights confirm what matters to customer"
│
├── ICDM BA EQFD → Cross-reference 22 ECs against 12 DPs
│   "EC weights should correlate with DP weights"
│
├── Phase 2 Concept Evaluation → Use DP weights for VDI 2225 criteria
│   "DP2 (18%) + DP1 (14%) + DP7 (11%) = top 3 evaluation axes"
│
├── Phase 3 DfX Review → CDTC budget allocation per DP
│   "Essential 60% / Beneficial 30% / Luxurious 10%"
│
├── Phase 3 BOM → Cost factors mapped to DP subsystems
│   "SW 41% → DP1+DP2+DP7+DP8. Projectors 19% → DP5"
│
└── Validation Plan → DP targets as V&V criteria
    "DP1: ballistic error ≤5%. DP2: 5+ UAV profiles. DP5: latency ≤50ms"
```

---

*Extracted from FORGE Job Map v1.0 §7. CEO-validated strategy: DIFFERENTIATED.*
*Next: ICDM Step 1.5 input validation → BA EQFD cross-reference.*
