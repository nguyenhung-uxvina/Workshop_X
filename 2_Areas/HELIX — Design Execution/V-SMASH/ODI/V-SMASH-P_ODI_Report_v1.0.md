---
project: V-SMASH-P
phase: 0
type: odi-report-delta
prompt: P28 (delta)
version: 1.0
created: 2026-02-21
status: draft
data_confidence: LOW (~80% ASSUMPTION)
family: V-SMASH
base_odi: V-SMASH-L_ODI_Report_v1.0.md
inherits: O01-O22 (with modifications noted)
---

# V-SMASH-P (PRO) — ODI Report (Delta from V-L)

> **Base:** V-SMASH-L ODI Report v1.1 (22 outcomes). V-P shares V-L's core job — this is a **Delta ODI** documenting what changes.
> **Delta identity:** V-P = V-L + thermal 24/7 + IMM tracking + C4I networking. Same job, expanded capability envelope.

---

## 1. Job-to-be-Done

### Core Functional Job (SAME as V-L, extended context)

**"Detect, track, and engage unauthorized low-altitude drone threats in ALL lighting and weather conditions, achieving first-shot neutralization of maneuvering targets while maintaining human decision authority and sharing targeting data with the squad."**

**Delta from V-L:**
- V-L: "...in daylight conditions, achieving first-shot neutralization..."
- V-P adds: "ALL lighting and weather conditions", "maneuvering targets", "sharing targeting data"

The job is the SAME — kill drones with AI assistance. V-P extends the CONTEXT (night, agile drones, networked ops).

### Additional Emotional Jobs (V-P specific)

| Job | Description |
|-----|-------------|
| **Feel effective at night** | "I can engage drones at 3 AM the same as 3 PM" — eliminates 12-hour capability gap. |
| **Trust against agile drones** | "Even if it jinks, the AI keeps tracking" — IMM handles 3g maneuvers that defeat V-L's Kalman. |

---

## 2. Inherited Outcomes (V-L O01–O22)

| V-L ID | Outcome | V-P Applicability | Modification |
|--------|---------|-------------------|--------------|
| O01 | Minimize detection time | **SAME** | — |
| O02 | Minimize misclassification | **MODIFIED** | Thermal adds classification channel. Night misclassification risk different (heat blobs vs visual shapes). |
| O03 | Maximize detection range (day) | **SAME** | Same ≥300m daylight target |
| O04 | Maximize AI confidence accuracy | **MODIFIED** | Fusion of CMOS + thermal confidence scores. Weighted blend requires new calibration. |
| O05 | Minimize system latency | **SAME** | ≤100ms target maintained |
| O06 | Maximize tracking accuracy | **MODIFIED** | IMM filter replaces Kalman. 3g maneuver tracking (V-L: 1.5g). Significant upgrade. |
| O07 | Maximize shot timing accuracy | **SAME** | Same fire gate mechanism |
| O08 | Minimize engagement cycle time | **SAME** | — |
| O09 | Maximize target handoff speed | **MODIFIED** | C4I (CoT/UDP) enables squad-level electronic handoff. V-L: verbal only. |
| O10 | Maximize HITL safety | **SAME** | Same fire gate, same HITL principles |
| O11 | Minimize battery drain | **MODIFIED** | Thermal adds ~30% power draw. Battery life 6h (V-L: 8h). Higher importance. |
| O12 | Maximize ruggedization | **MODIFIED** | IP67 (V-L: IP65). Lens heater for anti-fog. Higher environmental envelope. |
| O13 | Maximize first-shot hit probability | **MODIFIED** | Day ≥70% (V-L: ≥60%). Night ≥55% (new). IMM + thermal improve Pk. |
| O14 | Minimize engagement time | **SAME** | — |
| O15 | Maximize multi-target tracking | **MODIFIED** | Hungarian algorithm for data association (V-L: nearest-neighbor). Handles crossing targets. |
| O16 | Maximize training effectiveness | **SAME** | — |
| O17 | Minimize unit cost vs import | **MODIFIED** | $1,920 cost / $5,000 price vs $18K import. Still 72% cheaper but 2.5× V-L cost. |
| O18 | Maximize local content | **MODIFIED** | **31% (lowest in family)**. Thermal sensor dominates BOM. Improvement plan: 31→45→55→60%+. |
| O19 | Maximize field maintainability | **SAME** | — |
| O20 | Minimize training time for operators | **MODIFIED** | Thermal adds complexity. Operator must understand CMOS/thermal switching, fusion modes. |
| O21 | Maximize data capture for AAR | **MODIFIED** | Thermal imagery + C4I network adds richer engagement data. |
| O22 | Maximize ammo efficiency | **SAME** | — |

**Summary: 10 SAME, 12 MODIFIED, 0 N/A.** All V-L outcomes apply to V-P — V-P is a superset.

---

## 3. V-P-Specific Outcomes (NEW — not in V-L)

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OP01 | Maximize the night detection range using thermal imaging | 9 | 1 | [ASSUMPTION] ≥200m target. No current night C-UAS exists. Zero satisfaction. |
| OP02 | Maximize the sensor fusion accuracy (CMOS + thermal weighted blend) | 9 | 1 | [ASSUMPTION] Auto α-switching based on ambient light. Transition must be seamless — no tracking dropout during switch. |
| OP03 | Maximize the maneuver tracking capability against high-g drones (≥3g sustained) | 9 | 2 | [ASSUMPTION] IMM filter: CV+CA+CT models. V-L Kalman limited to 1.5g. 3g = evasive commercial drones. |
| OP04 | Maximize the squad-level target sharing quality via C4I (CoT/UDP) | 8 | 1 | [ASSUMPTION] Multiple V-P operators share target tracks. No current squad-level C-UAS networking exists. |
| OP05 | Minimize the local content gap vs TCVN 60% requirement | 10 | 1 | [ASSUMPTION] **CRITICAL.** 31% local is below 60% threshold. Procurement blocker. 3-phase improvement plan required. |
| OP06 | Minimize the night Pk gap vs daylight Pk | 8 | 1 | [ASSUMPTION] Day Pk ≥70%, Night Pk ≥55%. Gap of 15pp. Thermal resolution is the limiting factor. Thermal model tuning reduces gap. |

**Total: V-L 22 (inherited) + 6 new = 28 outcomes.**

---

## 4. Combined Opportunity Scores

### V-P-Specific Outcomes (ranked)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OP05** | Minimize local content gap vs TCVN | 10 | 1 | **19** | 🔴 UNDERSERVED |
| 2 | **OP01** | Maximize night detection range | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 3 | **OP02** | Maximize sensor fusion accuracy | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 4 | **OP03** | Maximize 3g maneuver tracking | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 5 | **OP04** | Maximize C4I target sharing | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 6 | **OP06** | Minimize night vs day Pk gap | 8 | 1 | **15** | 🔴 UNDERSERVED |

### Modified V-L Outcomes (re-scored for V-P context)

Key re-scored outcomes where V-P changes importance or satisfaction:

| V-L ID | Outcome | V-L Opp | V-P Opp | Change Reason |
|--------|---------|---------|---------|---------------|
| O13 | Hit probability | 18 | **18** | Same priority — now split day (70%)/night (55%) |
| O18 | Local content | 12 | **19** | **Jumped to #1** — V-P at 31% is a procurement blocker |
| O06 | Tracking accuracy | 16 | **16** | IMM addresses this — same priority, different solution |
| O11 | Battery drain | 13 | **15** | Higher importance — thermal draws 30% more power |
| O12 | Ruggedization | 13 | **15** | IP67 + lens heater = higher spec |

### Top 5 Combined (V-P)

| Rank | ID | Outcome | Opp |
|------|----|---------|----|
| 1 | OP05 / O18 | Local content gap | **19** |
| 2 | O13 | Hit probability (day+night) | **18** |
| 3 | OP01 | Night detection range | **17** |
| 4 | OP02 | Sensor fusion accuracy | **17** |
| 5 | O02 | Misclassification (day+night) | **16** |

---

## 5. Strategic Recommendation

### Strategy: **DOMINATE (24/7 premium C-UAS)**

**Rationale:** V-P is the capability leader — it directly competes with $18K imported SMASH 2000+ Thermal at $5K (72% cheaper). The strategy is to DOMINATE the premium C-UAS segment with equivalent capability at dramatically lower cost.

**Critical constraint:** OP05 (local content, Opp 19) is the top opportunity — but it's a **procurement blocker**, not a customer need. The customer doesn't care about local content; the procurement system does. The 3-phase improvement plan (31→45→55→60%+) must be executed or V-P cannot be sold to Vietnamese military.

### Positioning in Family

| Dimension | V-P | V-L | V-NV |
|-----------|-----|-----|------|
| **Night capability** | Full (thermal fusion, IMM) | None | Partial (thermal only, Kalman) |
| **Tracking** | IMM + Hungarian (3g) | Kalman (1.5g) | Kalman (1.5g) |
| **C4I** | CoT/UDP, TAK-compatible | Standalone | Standalone |
| **Local content** | 31% (waiver) | 70% | 55-60% |
| **Price** | $5,000 | $3,000 | $4,500 |
| **Strategy** | DOMINATE | DOMINATE | DOMINATE |

V-NV exists because V-P's local content is a procurement risk. V-NV provides TCVN-compliant night capability while V-P improves.

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes:** OP05, O13, OP01, OP02, O02
- **Kill condition:** Night Pk < 35% at 200m after thermal v2. Local content < 45% at launch.
- **Validation needed:** OP02 (sensor fusion) requires bench test with calibrated thermal target. OP05 (local content) requires supplier quotes for Phase 1 improvement actions.

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (base, Sections 1-5) | V-SMASH-P_Product_Proposal_v1.0.md (P11)*
