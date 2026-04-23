---
project: V-SMASH
phase: 0
type: family-odi-report
version: 1.0
created: 2026-02-20
updated: 2026-02-21
status: draft
prompt_used: P28 (/odi) — Phase0_ODI.md v1.0
data_confidence: MEDIUM — based on product docs + competitive analysis + [ASSUMPTION] where noted
validation_needed: Field interviews with QĐND infantry, base security, and training units
products: V-L, V-M, V-D, V-T, V-R, V-P, V-NV, V-X
total_outcomes: 163
---

# V-SMASH Family — ODI Report
## AI-Powered Fire Control Ecosystem for Counter-UAS (8 Products)

> **Scope:** This is the **family-level** ODI report covering cross-product outcome landscape, segment analysis, and strategic positioning.
> **Per-product reports:** See individual files listed in Section 5 (Outcome Registry).
> **History:** Originally combined with V-L ODI in a single file. Separated to cleanly distinguish family strategy from product-level outcomes.

---

## SECTION 1: FAMILY JOB TAXONOMY

| Product | Core Functional Job | Customer Segment | Autonomy Level |
|---------|--------------------|--------------------|---------------|
| **V-L** | Detect, track, and engage drone threats with AI-gated first-shot kill | Specialist C-UAS operators | AI gates fire timing; human presses trigger |
| **V-M** | Detect and track drone threats, providing AI lead indicator for manual aiming | Mass infantry riflemen (non-specialist) | AI shows where to aim; human aims and fires manually |
| **V-D** | Monitor assigned airspace and alert on drone intrusions — no weapon | Base security / perimeter guards | AI detects and alerts; human decides response |
| **V-T** | Score and debrief live-fire/laser training against drone targets | Training unit cadre | AI scores; human evaluates training performance |
| **V-R** | Detect, track, and engage from vehicle-mounted weapon station | Vehicle crews (MTB-20, patrol boats) | AI stabilizes + gates; human authorizes via dead-man switch |
| **V-P** | Detect, track, and engage at extended range with multi-target tracking (24/7) | Professional marksmen / designated shooters | AI manages multiple targets; human selects and engages |
| **V-NV** | Same as V-L extended to night/thermal conditions | Night operations forces | Same as V-L + thermal |
| **V-X** | Same as V-L (downgraded for export) | Export military customers (ASEAN) | Same as V-L with reduced capability |

**Key insight:** V-M, V-D, V-T, and V-R have **fundamentally different jobs** from V-L. They are not "cheaper V-L" — they serve different customers doing different things. V-P, V-NV, and V-X share V-L's core job with modifications (capability extension or restriction).

---

## SECTION 2: OUTCOME DISTRIBUTION MATRIX

Maps V-L's 22 base outcomes (O01-O22) across all 8 products. **FULL** = outcome fully addressed. **PARTIAL** = subset addressed. **N/A** = outcome not relevant.

| # | Outcome (abbreviated) | V-L | V-M | V-D | V-T | V-R | V-P | V-NV | V-X |
|---|----------------------|-----|-----|-----|-----|-----|-----|------|-----|
| O01 | Time to classify threat | FULL | PARTIAL | FULL | N/A | FULL | FULL | FULL | FULL |
| O02 | Minimize misclassification | FULL | PARTIAL | FULL | N/A | FULL | FULL | FULL | FULL |
| O03 | ROE scenario briefing | FULL | FULL | N/A | PARTIAL | FULL | FULL | FULL | FULL |
| O04 | Detection range (low alt) | FULL | PARTIAL | FULL | PARTIAL | FULL | FULL | FULL | FULL |
| O05 | Alert -> target in sight | FULL | FULL | N/A | PARTIAL | FULL | FULL | FULL | FULL |
| O06 | Track in clutter | FULL | PARTIAL | FULL | PARTIAL | FULL | FULL | FULL | FULL |
| O07 | Standby -> AI-ready time | FULL | FULL | FULL | FULL | FULL | FULL | FULL | FULL |
| O08 | Config steps before ready | FULL | FULL | N/A | FULL | FULL | FULL | FULL | FULL |
| O09 | Mount compatibility | FULL | FULL | N/A | FULL | N/A | FULL | FULL | FULL |
| O10 | No AI unintended trigger | FULL | N/A | N/A | N/A | FULL | FULL | FULL | FULL |
| O11 | Operator confidence | FULL | FULL | PARTIAL | PARTIAL | FULL | FULL | FULL | FULL |
| O12 | Safe zone verification | FULL | N/A | N/A | N/A | FULL | FULL | FULL | FULL |
| O13 | First-shot hit probability | FULL | PARTIAL | N/A | PARTIAL | FULL | FULL | FULL | FULL |
| O14 | Lock -> fire window speed | FULL | N/A | N/A | N/A | FULL | FULL | FULL | FULL |
| O15 | Rounds to neutralize | FULL | PARTIAL | N/A | N/A | FULL | FULL | FULL | FULL |
| O16 | Hit/miss feedback | FULL | PARTIAL | N/A | FULL | FULL | FULL | FULL | FULL |
| O17 | Time to confirm neutral. | FULL | PARTIAL | N/A | N/A | FULL | FULL | FULL | FULL |
| O18 | Thermal failure prevention | FULL | FULL | FULL | FULL | FULL | FULL | FULL | FULL |
| O19 | Re-acquire after miss | FULL | PARTIAL | N/A | N/A | FULL | FULL | FULL | FULL |
| O20 | Ammo over multi-shot | FULL | PARTIAL | N/A | N/A | FULL | FULL | FULL | FULL |
| O21 | Report generation time | FULL | PARTIAL | FULL | FULL | FULL | FULL | FULL | FULL |
| O22 | Engagement data complete | FULL | PARTIAL | FULL | FULL | FULL | FULL | FULL | FULL |

**Notes:**
1. V-M smaller optic -> >=200m (vs V-L >=500m)
2. V-D fixed mount, larger optic -> >=500m daylight (exceeds V-L for detection)
3. V-D has no "sight picture" — it alerts, doesn't aim
4. V-D "always on" — no standby->ready transition, continuous monitoring
5. V-M clip-on = highest mount compatibility requirement in family
6. V-M has NO fire gate -> O10 not applicable (human timing, not AI timing)
7. V-M provides lead indicator only -> improves hit probability but less than AI-gated fire
8. V-M has no fire gate -> no "firing window" concept — human decides timing

**Coverage summary:** V-L outcomes fully address V-X, V-NV, V-P (same job, different embodiment/constraints). V-R shares most but has vehicle-specific outcomes. V-M covers 15/22 (PARTIAL on engagement outcomes). V-D covers 9/22 (detection-only job). V-T covers 10/22 (training-specific job).

---

## SECTION 3: FAMILY SEGMENT ANALYSIS

| Segment | Primary Products | Size (units) | Top Unmet Outcomes | Strategy |
|---------|-----------------|-------------|-------------------|----------|
| **A: Specialist C-UAS** | V-L, V-NV, V-P | ~500 units | O13, O02, O14 (engagement performance) | **DOMINATE** — full solution, high price |
| **B: Mass Infantry** | V-M | ~5,000-10,000 units | OM14, OM01, OM03 (cost + simplicity) | **DISRUPT** — simpler, cheaper, "good enough" |
| **C: Base Security** | V-D | ~1,000 units (x3 per perimeter) | OD12, OD01, OD03 (reliability + low FP) | **CREATE new market** — no existing solution |
| **D: Training Units** | V-T | ~200 units | OT11, OT01, OT15 (coaching + realism) | **DIFFERENTIATE** — IRONMESH platform value |
| **E: Vehicle Crews** | V-R | ~50 units | OR04, OR09, OR01 (stability + safety) | **DOMINATE** — bundled with MTB-20 program |
| **F: Export Military** | V-X | Market-dependent | OX01, OX02 (export license + competitiveness) | **DISRUPT export market** — import substitute |

### Cannibalization Analysis: V-M vs V-L

| Factor | V-L Risk | V-M Risk | Mitigation |
|--------|---------|---------|-----------|
| **Price** | V-M at $500 vs V-L at $3,000 -> "why pay 6x?" | V-M is "good enough" for 80% of users | **Segment clearly**: V-M = volume equipping (every rifleman), V-L = specialist C-UAS (designated shooters) |
| **Performance** | V-L delivers 4x hit probability vs V-M | V-M "follow the dot" is 2x improvement over nothing | **Performance tier**: V-M >=40% Pk vs V-L >=80% Pk (manual vs gated firing) |
| **Procurement** | MoD buys V-M instead of V-L | V-M opens budget for V-L add-on later | **Land-and-expand**: V-M proves AI concept to military, V-L upsells to designated shooters |
| **Fire gate** | V-L's key differentiator is AI-gated fire timing | V-M lacks fire gate — that's the product boundary | **Hard boundary**: V-M NEVER gets fire gate. If V-M needs fire gate -> buy V-L. |

**Strategic verdict:** V-M parallel development is justified because:
1. Segments A and B are genuinely different customers (specialist vs mass infantry)
2. V-M opens a 10x larger addressable market (5,000-10,000 vs 500 units)
3. V-M drives IRONMESH device count (data flywheel for all products)
4. The "fire gate" hard boundary prevents feature creep into V-L territory
5. V-M's OM14 (Opp=19) is the highest opportunity score in the entire family — unaddressed by V-L

---

## SECTION 4: FAMILY STRATEGIC RECOMMENDATION

| Product Tier | Strategy | Key Outcomes | Revenue Model |
|-------------|----------|-------------|--------------|
| V-M (entry) | **DISRUPT** — simpler, 6x cheaper, "good enough" | OM14, OM01, OM03 | Volume HW + IRONMESH LITE |
| V-L (standard) | **DOMINATE** — full solution, unmatched performance | O13, O02, O14 | Premium HW one-time |
| V-NV (standard+night) | **DOMINATE** — TCVN-compliant night capability | O13, O02, ONV01 | Premium HW one-time |
| V-P (pro) | **DOMINATE** — 24/7 premium C-UAS | OP05, O13, OP01 | Premium HW one-time |
| V-D (adjacent) | **CREATE new market** — no existing solution at this price | OD12, OD01, OD03 | HW + IRONMESH recurring ($500-1K/yr) |
| V-T (ecosystem) | **DIFFERENTIATE** — IRONMESH platform lock-in | OT11, OT01, OT15 | Recurring platform fees |
| V-R (platform) | **DOMINATE** — bundled with MTB-20 vehicle program | OR04, OR09, OR01 | Defense contract pricing |
| V-X (export) | **DISRUPT export market** — import substitute | OX01, OX02, O13 | Export premium pricing |

**Family top 3 opportunities (across all products):**

| Rank | ID | Product | Outcome | Opp Score |
|------|-----|---------|---------|-----------|
| 1 | OM14 | V-M | Mass procurement cost ($500 threshold) | **19** |
| 2 | OD12 | V-D | Silent failure risk (watchdog heartbeat) | **19** |
| 3 | OP05 | V-P | Local content gap vs TCVN 60% | **19** |
| 3 | OR04 | V-R | Stabilization accuracy (gyro) | **19** |
| 3 | OX01 | V-X | Export license timeline | **19** |

**Primary segment:** Segment B (V-M mass infantry) — 10x larger addressable market than Segment A. V-M opens the market; V-L/V-P/V-NV upsell within it.

---

## SECTION 5: FAMILY OUTCOME REGISTRY

| Product | ODI Type | Outcomes | Top Opp (ID / Score) | Strategy | Report File |
|---------|----------|----------|---------------------|----------|-------------|
| **V-L** | Full (base) | O01-O22 (22) | O13 / 18 | DOMINATE | `V-SMASH-L_ODI_Report_v1.0.md` |
| **V-M** | Full | OM01-OM17 (17) | OM14 / 19 | DISRUPT | `V-SMASH-M_ODI_Report_v1.0.md` |
| **V-D** | Full | OD01-OD19 (19) | OD12 / 19 | CREATE | `V-SMASH-D_ODI_Report_v1.0.md` |
| **V-T** | Full | OT01-OT17 (17) | OT11 / 17 | DIFFERENTIATE | `V-SMASH-T_ODI_Report_v1.0.md` |
| **V-R** | Full | OR01-OR17 (17) | OR04 / 19 | DOMINATE | `V-SMASH-R_ODI_Report_v1.0.md` |
| **V-P** | Delta (V-L +6) | O01-O22 + OP01-OP06 (28) | OP05 / 19 | DOMINATE | `V-SMASH-P_ODI_Report_v1.0.md` |
| **V-NV** | Delta (V-L +5) | O01-O22 + ONV01-ONV05 (27) | ONV01 / 17 | DOMINATE | `V-SMASH-NV_ODI_Report_v1.0.md` |
| **V-X** | Delta (V-L +4) | O01-O22 + OX01-OX04 (26) | OX01 / 19 | DISRUPT | `V-SMASH-X_ODI_Report_v1.0.md` |
| **TOTAL** | — | **163 unique outcomes** | — | — | 8 files |

### Outcome ID Namespace (no collisions)

```
O01-O22    -> V-L (base, shared by delta products V-P, V-NV, V-X)
OM01-OM17  -> V-M (Micro)
OD01-OD19  -> V-D (Detector)
OT01-OT17  -> V-T (Trainer)
OR01-OR17  -> V-R (RWS)
OP01-OP06  -> V-P (PRO, delta-specific)
ONV01-ONV05-> V-NV (Night Vision, delta-specific)
OX01-OX04  -> V-X (Export, delta-specific)
```

---

## CAPTURE PROTOCOL

```
Product domain:      AI-powered fire control ecosystem — 8-product family (entry->platform tier)
Customer segments:   A: Specialist C-UAS (V-L) | B: Mass Infantry (V-M) | C: Base Security (V-D)
                     D: Training (V-T) | E: Vehicle (V-R) | F: Export (V-X)
Core jobs:           V-L: AI-gated first-shot kill | V-M: AI lead indicator for manual aiming |
                     V-D: 24/7 autonomous drone detection + alert | V-T: AI-scored training |
                     V-R: Vehicle-mounted stabilized AI fire control
Top 3 family opps:   OM14 Mass procurement cost (19) | OD12 Silent failure (19) | O13 First-shot hit (18)
Primary segment:     Segment B (V-M mass infantry) — 10x larger addressable market than Segment A
Strategic mix:       V-M DISRUPT | V-L/V-NV/V-P DOMINATE | V-D CREATE | V-T DIFFERENTIATE | V-X DISRUPT export
Data confidence:     MEDIUM — design docs + competitive analysis; ~65-80% [ASSUMPTION]
Validation needed:   1) Field interview: QĐND infantry drone engagement experience (V-L + V-M segments)
                     2) Base security unit: current drone watch procedures + pain points (V-D segment)
                     3) MoD procurement officer: willingness to procure V-M at battalion scale
                     4) Training unit: what drone drills currently exist? (V-T segment)
```

---

## ODI -> PHASE 1 HANDOFF CHECKLIST

### V-L (`V-SMASH-L_ODI_Report_v1.0.md`)
- [x] Core job-to-be-done defined (1 clear statement)
- [x] >=10 desired outcomes mapped (22 outcomes across 8 job steps)
- [x] Opportunity scores calculated for all outcomes
- [x] Top 5 opportunities identified (scores 15-18, all UNDERSERVED)
- [ ] Primary target segment selected — **Segment A (specialist C-UAS)** <- HITL: confirm before Phase 1
- [x] UNDERSERVED outcomes -> MUST requirements (O13, O02, O14, O04, O06, O19)
- [x] SERVED outcomes -> WISH requirements (O03, O21)
- [x] Strategy: **DOMINATE**

### V-M (`V-SMASH-M_ODI_Report_v1.0.md`)
- [x] Core job differentiated from V-L (lead indicator, not fire gate)
- [x] Full 8-step job map (infantry rifleman workflow)
- [x] 17 outcomes mapped (OM01-OM17)
- [x] Top opportunity: OM14 (mass procurement cost, Opp=19) — **highest in family**
- [ ] Primary target segment selected — **Segment B (mass infantry)** <- HITL: confirm
- [x] Cannibalization vs V-L analyzed — hard boundary: no fire gate for V-M
- [x] Strategy: **DISRUPT**

### V-D (`V-SMASH-D_ODI_Report_v1.0.md`)
- [x] Core job differentiated from V-L (detect+alert, no weapon)
- [x] Full 8-step job map (autonomous sentry -> watch officer alert)
- [x] 19 outcomes mapped (OD01-OD19)
- [x] Top opportunity: OD12 (silent failure, Opp=19) — **MAINTAIN-QUALITY tag**
- [ ] Primary target segment selected — **Segment C (base security)** <- HITL: confirm
- [x] Dual-use market identified (military + critical infrastructure)
- [x] Strategy: **CREATE new market**

### V-T (`V-SMASH-T_ODI_Report_v1.0.md`)
- [x] Core job: simulate + score + coach C-UAS gunnery training
- [x] Full 8-step job map (instructor-supervised, AI-scored)
- [x] 17 outcomes mapped (OT01-OT17)
- [x] Top opportunity: OT11 (coaching specificity, Opp=17)
- [ ] Primary target segment selected — **Segment D (training units)** <- HITL: confirm
- [x] IRONMESH entry drug role documented (data flywheel)
- [x] Strategy: **DIFFERENTIATE**

### V-R (`V-SMASH-R_ODI_Report_v1.0.md`)
- [x] Core job: vehicle-mounted stabilized AI fire control
- [x] Full 8-step job map (remote operator via RCU)
- [x] 17 outcomes mapped (OR01-OR17)
- [x] Top opportunity: OR04 (stabilization, Opp=19)
- [ ] Primary target segment selected — **Segment E (vehicle crews)** <- HITL: confirm
- [x] SAFETY_OVERRIDE: dead-man (OR09), cable-cut (OR14), autonomous zone boundary
- [x] Strategy: **DOMINATE**

### V-P (`V-SMASH-P_ODI_Report_v1.0.md`)
- [x] Inherits V-L O01-O22 (10 SAME, 12 MODIFIED)
- [x] 6 V-P-specific outcomes (OP01-OP06)
- [x] Top opportunity: OP05 (local content gap, Opp=19) — **procurement blocker**
- [x] 3-phase local content improvement plan (31->45->55->60%+)
- [x] Strategy: **DOMINATE (24/7 premium)**

### V-NV (`V-SMASH-NV_ODI_Report_v1.0.md`)
- [x] Inherits V-L O01-O22 (16 SAME, 6 MODIFIED)
- [x] 5 V-NV-specific outcomes (ONV01-ONV05)
- [x] Top opportunity: ONV01 (night detection range, Opp=17)
- [x] Thermal supply chain dual-source need flagged (ONV04)
- [x] Strategy: **DOMINATE (TCVN-compliant night alternative to V-P)**

### V-X (`V-SMASH-X_ODI_Report_v1.0.md`)
- [x] Inherits V-L O01-O22 (12 SAME, 10 MODIFIED — all degraded)
- [x] 4 V-X-specific outcomes (OX01-OX04)
- [x] Top opportunity: OX01 (export license timeline, Opp=19) — **existential risk**
- [x] ASEAN market positioning documented
- [x] Strategy: **DISRUPT (export)**

---

*V-SMASH Family ODI Report v1.0 | 2026-02-21*
*Separated from combined V-L+Family report. V-L product ODI now in V-SMASH-L_ODI_Report_v1.0.md.*
*163 unique outcomes across 8 products (4 Full + 3 Delta + 1 Family synthesis). No ID collisions.*
*Prompt: P28 from Phase0_ODI.md | Framework: ODI (Tony Ulwick)*
