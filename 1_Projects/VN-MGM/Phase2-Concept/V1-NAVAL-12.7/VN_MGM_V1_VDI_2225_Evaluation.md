---
created: 2026-04-10
type: vdi-2225-evaluation
block: BC
pipeline: helix-concept-generate v3.1
project: VN-MGM V1-NAVAL-12.7
mode: quick (retroactive validation)
method: "VDI 2225 8-step (Weiss & Hari 2015) with HOQ-derived weights"
status: COMPLETE
---

# BC VDI 2225 Evaluation — VN-MGM V1-NAVAL-12.7

## Purpose

Retroactive validation: Does V1's proven concept score well against customer-outcome-weighted criteria (HOQ)? This replaces the archive's ad-hoc weights with FORGE-derived weights.

## Step 1: Criteria from HOQ Design Parameters

| # | Criterion (from HOQ DP) | Weight (g_i) | Physical Meaning |
|---|------------------------|:------------:|------------------|
| C1 | Traverse Speed (DP1) | **0.175** | °/s achievable |
| C2 | First Hit Efficiency (DP7) | **0.149** | Rounds per hit |
| C3 | Corrosion Endurance (DP5) | **0.140** | Months to degradation |
| C4 | Elevation Precision (DP3) | **0.108** | mrad under motion |
| C5 | Night Operability (DP4) | **0.104** | Capability in <1 lux |
| C6 | Maintenance Burden (DP6) | **0.100** | Man-hours per 1,000 rds |
| C7 | Condition Observability (DP10) | **0.087** | Health assessment ability |
| C8 | Traverse Effort (DP2) | **0.058** | N·m at handle |
| C9 | Mounting Speed (DP8) | **0.047** | Seconds in adverse conditions |
| C10 | Hot Barrel Safety (DP9) | **0.040** | Clearance + temp protection |
| | **TOTAL** | **1.008** → **1.000** | (normalized) |

## Step 2: Scoring Scale (VDI 2225, 0-4)

| Score | Meaning |
|:-----:|---------|
| 0 | Unacceptable — does not satisfy |
| 1 | Just tolerable — barely meets minimum |
| 2 | Adequate — meets requirement |
| 3 | Good — exceeds requirement |
| 4 | Excellent — ideal solution |

## Step 3: Evaluate V1 "Proven Naval" Concept

| # | Criterion | g_i | V1 Score | Evidence | Weighted |
|---|----------|:---:|:--------:|----------|:--------:|
| C1 | Traverse Speed | 0.175 | **3** | 30°/s proven (≥20°/s spec). Not 4: manual limit ~30°/s, fast targets need motor. | 0.525 |
| C2 | First Hit Efficiency | 0.149 | **2** | ~8 rounds/hit [L4]. Adequate for manual. No fire control aid → not 3. | 0.298 |
| C3 | Corrosion Endurance | 0.140 | **3** | 1,000h salt fog proven. 6-9 months without maintenance. Not 4: needs grease to prevent seizure. | 0.420 |
| C4 | Elevation Precision | 0.108 | **2** | Worm gear smooth, self-locking. Not 3: no stabilization, operator compensates waves. ~10-15 mrad on sea state 2. | 0.216 |
| C5 | Night Operability | 0.104 | **1** | Picatinny rail available. But NO integral night solution. Operator must supply NVG. Nearly blind without it. | 0.104 |
| C6 | Maintenance Burden | 0.100 | **2** | ~1.0 man-hr/1,000 rds. Adequate but crews skip → degradation. Not 3: needs post-fire wash+grease. | 0.200 |
| C7 | Condition Observability | 0.087 | **1** | Manual feel only. No objective indicator. Cannot assess after 3-month storage. | 0.087 |
| C8 | Traverse Effort | 0.058 | **3** | ~40 N·m proven (≤49 N·m spec). Good for short engagements. Not 4: fatiguing >30 min. | 0.174 |
| C9 | Mounting Speed | 0.047 | **2** | 45-90s daylight. Not 3: 180-300s in dark/rough sea. | 0.094 |
| C10 | Hot Barrel Safety | 0.040 | **3** | 30mm clearance. Guard exists. Not 4: still needs heat glove. | 0.120 |
| | **TOTAL** | **1.000** | | | **2.238** |

## Step 4: Technical Value (Rt)

```
Rt = Σ(g_i × score_i) / max_possible = 2.238 / 4.000 = 0.560
```

**Rt = 0.560** (56.0%)

## Step 5: Economic Value (Re)

| Parameter | V1 | Reference (imported mount) |
|-----------|-----|--------------------------|
| Unit cost (BOM) | $2,500 | $15,000 (imported, defense-grade) |
| Sell price | $4,000 | $18,000 |
| LCC (10yr) | $7,670 | $25,000+ |

```
Re = 1 - (Cost_V1 / Cost_ref) = 1 - (2,500 / 15,000) = 0.833
```

**Re = 0.833** (83.3%)

## Step 6: S-Diagram Position

```
Re (economic)
1.0 ┤
    │                    ★ IDEAL
0.8 ┤─ ─ ─ ─ ─ ─ ─●─V1─ ─ ─ ─ ─ ─ ─
    │             /
0.6 ┤           /
    │         /  ← "good value" line (Rt = Re)
0.4 ┤       /
    │     /
0.2 ┤   /
    │ /
0.0 ├──┬──┬──┬──┬──┬──┬──┬──┬──┬──→ Rt (technical)
    0  0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0

V1 position: Rt=0.56, Re=0.83
  → ABOVE the value line → ECONOMIC VALUE EXCEEDS TECHNICAL VALUE
  → This is the correct position for a "disruptive" product:
    cheaper than incumbent, adequate (not best) technical performance
```

## Step 7: Interpretation

| Metric | Value | Interpretation |
|--------|-------|---------------|
| Rt | 0.560 | ADEQUATE — meets all basic requirements but gaps in night/condition/precision |
| Re | 0.833 | EXCELLENT — 83% cost advantage vs imported alternative |
| Rt/Re ratio | 0.67 | Economic value significantly exceeds technical — classic "good enough + cheap" |

### Weak Spots (Rt < 2 on individual criteria)

| Criterion | Score | Gap | Resolution Path |
|----------|:-----:|-----|-----------------|
| **C5: Night Operability** | **1** | No integral night solution | SF-C thermal overlay (ACH GO) → V5 add-on |
| **C7: Condition Observability** | **1** | No objective health indicator | SF-B vibration sensor (ACH GO) → N10-M |

### Strong Points (Rt ≥ 3)

| Criterion | Score | Strength |
|----------|:-----:|----------|
| C1: Traverse Speed | 3 | 30°/s exceeds 20°/s spec |
| C3: Corrosion Endurance | 3 | 1,000h salt fog proven |
| C8: Traverse Effort | 3 | 40 N·m well within 49 N·m spec |
| C10: Hot Barrel Safety | 3 | 30mm clearance + guard |

## Step 8: Comparison with Archive VDI 2225

| Metric | Archive (ad-hoc weights) | This (HOQ weights) | Delta |
|--------|--------------------------|---------------------|-------|
| V1 weighted score | 3.25 (Variant B proxy) | 2.238 | Lower — HOQ penalizes night/condition gaps |
| Best criterion | Corrosion (4) | Traverse Speed (3) | Different top priority |
| Worst criterion | Setup time (3) | Night Operability (1) | HOQ reveals hidden gap |

**Key insight:** Archive's ad-hoc weights MISSED the night engagement gap (O-40, Opp 8.5 = #1 underserved outcome). HOQ weights expose this because they're derived from CUSTOMER OUTCOMES, not engineer assumptions. This validates running FORGE before Phase 2.

---

*Archive weights = engineer judgment. HOQ weights = customer outcome data. The difference reveals where V1 serves well (structural) and where it fails customers (information/night).*
