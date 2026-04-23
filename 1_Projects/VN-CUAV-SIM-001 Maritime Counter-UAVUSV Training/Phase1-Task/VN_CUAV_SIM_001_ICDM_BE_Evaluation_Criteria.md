---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — Concept Evaluation Criteria
mode: RETROACTIVE
pipeline: helix-task-clarify v3.2 --icdm
block: BE
---

# BE ICDM: Concept Evaluation Criteria — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE — compiled from B0→BD outputs
**Purpose:** Formal deliverable for Phase 2 concept evaluation (Pugh screening + VDI 2225)

---

## 1. GROUP A CRITERIA — Pugh Screening (79.4% weight)

> **Use:** Eliminate concepts that fundamentally cannot meet core customer value.
> A concept that scores "worse" on ANY Group A criterion vs reference is **eliminated**.

| # | Criterion | DP | Weight | Target (100% CSR) | Kill Threshold (0%) | CSR Shape |
|---|----------|:--:|:------:|:------------------:|:-------------------:|:---------:|
| A1 | Target AI Realism | DP2 | **18.2%** | ≥5 UAV + ≥3 USV profiles | 1 profile | STEP |
| A2 | Ballistic Fidelity | DP1 | **14.2%** | ≤5% error vs TM tables | >15% error | LINEAR |
| A3 | Assessment Depth | DP7 | **11.1%** | ≥95% hit detect, ≥5 scoring criteria | <80% hit detect | LINEAR |
| A4 | Scenario Flexibility | DP8 | **10.7%** | ≥10 scenarios, no coding required | <3 scenarios | LINEAR |
| A5 | Logistics Independence | DP9 | **8.9%** | ≤$18K BOM, 6×8m room, ≤$5/h | >$40K BOM | LINEAR |
| A6 | Visual Immersion | DP5 | **8.4%** | ≤50ms latency, ≥150° FOV, ≥60fps | >100ms or <60° FOV | CLIFF |
| A7 | Ship Motion Fidelity | DP3 | **7.9%** | Roll ±12°, pitch ±8°, JONSWAP | No motion at all | LINEAR |

### Pugh Reference Concept

**PA-2 LITE (STANDARD)** = reference (score 0 on all criteria). Other concepts scored as +/−/S relative to PA-2.

### Pugh Status (from existing Phase 2 work)

| Concept | Status | Note |
|---------|:------:|------|
| PA-2 LITE | **SELECTED** | Reference concept, Gate 1 approved |
| PA-6 FULL | Variant | Scores + on A1 (more targets), A7 (shared deck), − on A5 (higher cost) |
| PA-8 FIXED | Variant | Scores S on A1-A4, − on A7 (no motion), + on A5 (simpler install) |
| PA-9 CORTEX | Variant | Scores + on A1, + on assessment (joint), − on A5 (high cost) |

**Note:** Concept selection already done (VDI 2225, CEO approved). ICDM criteria formalize the evaluation basis retroactively. These criteria will be used for future variant evaluation and design trade-offs in Phase 3.

---

## 2. GROUP B CRITERIA — Final Evaluation (98.2% weight)

> **Use:** Fine-grained scoring for VDI 2225 concept evaluation or Phase 3 trade studies.
> Group B = Group A + 4 additional criteria.

| # | Criterion | DP | Weight | Target | CSR Shape |
|---|----------|:--:|:------:|:------:|:---------:|
| A1-A7 | *(Group A above)* | | 79.4% | | |
| B1 | Instructor Observability | DP6 | **7.1%** | Aim trace 10Hz, inject ≤1s, pause | LINEAR |
| B2 | Crew Coordination | DP10 | **4.5%** | ≥4 stations, sector handoff | STEP |
| B3 | Haptic Fidelity | DP4 | **8%** (CEO) | **≥25N recoil**, trigger 1.5-4kg | LINEAR |
| B4 | Weapon Modularity | DP12 | **3.0%** | ≤5min swap, NFC auto-ID | LINEAR |
| | **Subtotal** | | **102.0%** | | |

**Note:** Total >100% because CEO overrides DP4 weight from 4.2%→8% (+3.8%). For DQM calculation, normalize to 100% or use raw weights with note. The override reflects CEO judgment that recoil ≥25N is more important than HOQ data suggests.

**Excluded:** DP11 Multi-Site Joint Ops (1.8%) — CORTEX-only, evaluated separately.

---

## 3. CSR FUNCTION REFERENCE

> Quick-reference for all 10 CSR functions. Full details in BB ICDM.

| Criterion | EC | Target | Shape | Key Note |
|----------|:--:|:------:|:-----:|----------|
| Target AI | EC-12 | ≥5 UAV profiles | STEP | #1 HOQ priority |
| Ballistic | EC-02 | ≤5% error | LINEAR | SC-3 sacred |
| Assessment | EC-14 | ≥95% hit detect | LINEAR | SW-only cost |
| Scenario | EC-12+06 | ≥10 scenarios | LINEAR | No coding = Essential |
| Logistics | EC-20 | ≤$18K BOM | LINEAR | SC-4 sacred |
| Visual | EC-01 | ≤50ms latency | **CLIFF** | **DD-1 zero margin** |
| Ship Motion | EC-09 | Roll ±12° | LINEAR | FIXED = exception (no motion) |
| Instructor | — | Aim trace 10Hz | LINEAR | — |
| Crew | S-08 | ≥4 stations | STEP | FULL+ only |
| Haptic | EC-04 | **≥25N recoil** | LINEAR | **CEO override 8%** (was 4.2%). Solution TBD Phase 2. |

---

## 4. WEIGHT TRACEABILITY

```
Customer Outcomes (63)
  ↓ ODI Opportunity Score (Imp × Sat)
Design Parameters (12 DPs)
  ↓ HOQ Matrix (A=9, B=5, C=3)
DP Weights (W_TP normalized)
  ↓ Group A/B split (≥70% / ≥95%)
Evaluation Criteria (7 Group A + 4 Group B)
  ↓ CSR Functions (target → % satisfaction)
DQM Score per concept
```

**Traceability chain is complete.** Every criterion weight traces back to customer outcomes through the HOQ matrix.

---

## 5. DQM FRAMEWORK — Ready for Phase 2/3

### How to Calculate DQM Score

For each concept variant:

```
DQM = Σ (Weight_j × CSR_j(achieved_value_j))
     j=1..11

Where:
  Weight_j = Group B weight for criterion j (from §2)
  CSR_j()  = Customer Satisfaction Rating function (from BB ICDM §3)
  achieved_value_j = what the concept achieves for criterion j
```

### Example: PA-2 LITE (reference)

| Criterion | Weight | Target | Achieved | CSR | Weighted |
|----------|:------:|:------:|:--------:|:---:|:--------:|
| A1 Target AI | 18.2% | ≥5 UAV | 5 UAV (planned) | 100% | 18.2% |
| A2 Ballistic | 14.2% | ≤5% | ≤5% (V-SMASH) | 100% | 14.2% |
| A3 Assessment | 11.1% | ≥95% | ≥95% (ray-trace) | 100% | 11.1% |
| A4 Scenario | 10.7% | ≥10 | ≥10 (planned) | 100% | 10.7% |
| A5 Logistics | 8.9% | ≤$18K | $12.5-17.5K | 100% | 8.9% |
| A6 Visual | 8.4% | ≤50ms | ≤50ms (target) | 100% | 8.4% |
| A7 Ship Motion | 7.9% | ±12°/±8° | ±12°/±8° (2-DOF) | 100% | 7.9% |
| B1 Instructor | 7.1% | 10Hz trace | Planned | 100% | 7.1% |
| B2 Crew | 4.5% | ≥4 stn | 1 station | 22% | 1.0% |
| B3 Haptic | 8% (CEO) | ≥25N | TBD (solution Phase 2) | TBD | TBD |
| B4 Weapon Mod | 3.0% | ≤5min | ≤5min (NFC) | 100% | 3.0% |
| **DQM** | **102.0%** | | | | **~91.5%** (excl B3 TBD) |

**PA-2 LITE DQM = ~91.5%** (excluding B3 haptic, pending recoil solution selection Phase 2).
- Loses 3.5% on B2 crew coordination (single station = 22% CSR) — expected, FULL+ feature.
- B3 haptic TBD — ≥25N solution not yet selected. DQM will update after Phase 2 recoil trade study.

---

## 6. ICDM PIPELINE COMPLETION STATUS

| Block | Deliverable | Status | File |
|:-----:|-----------|:------:|------|
| B0 | Innovation Context (WTP, innovation level, creativity) | ✅ | `ICDM_B0_Innovation_Context.md` |
| BA | EQFD (18 CN, 22 EC, benchmarking, TVDT) | ✅ v1.1 | `ICDM_BA_EQFD.md` |
| BB | WTP Classification (102 reqs) + CSR Functions (10) | ✅ | `ICDM_BB_WTP_CSR.md` |
| BC | Solution-Free Verification | ✅ PASS | `ICDM_BC_Solution_Free.md` |
| BD | Platform & Innovation Flows | ✅ | `ICDM_BD_Platform_Innovation.md` |
| BE | Concept Evaluation Criteria (this doc) | ✅ | `ICDM_BE_Evaluation_Criteria.md` |

### ICDM Pipeline: **COMPLETE**

All 6 blocks (B0→BE) executed. ICDM overlay applied retroactively to existing Phase 1 deliverables. The ICDM outputs are additive — they enrich, not replace, the standard P&B Phase 1 artifacts.

---

## 7. DOWNSTREAM ROUTING

```
ICDM Pipeline (B0→BE) FEEDS:
│
├── Phase 2 Concept Evaluation
│   ├── Group A (7 criteria) → Pugh screening (already done for PA-2/6/8/9)
│   ├── Group B (11 criteria) → VDI 2225 final (already done)
│   └── CSR functions → future trade-study calculations
│
├── Phase 3 Embodiment Design
│   ├── WTP tags → cost allocation (Essential 60% / Beneficial 30% / Luxurious 10%)
│   ├── CSR functions → DfX trade-off decisions
│   ├── SA constraints (DD-1→DD-7) → layout constraints
│   └── Platform commonality (90%) → module boundary decisions
│
├── Gate 2 Review
│   ├── ICDM completion = Gate 2 input requirement
│   ├── DQM score → concept maturity metric
│   └── IRL (3.4) → innovation risk assessment
│
└── FORGE
    ├── forge-validate → CSR targets as V&V criteria
    ├── forge-trust → DQM scores as customer evidence
    └── forge-flywheel → Innovation Flow (7th flow) as data pipeline spec
```

---

*ICDM Pipeline COMPLETE. Ready for Gate 2 review.*
