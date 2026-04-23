---
project: V-SMASH-NV
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

# V-SMASH-NV (Night Vision) — ODI Report (Delta from V-L)

> **Base:** V-SMASH-L ODI Report v1.1 (22 outcomes). V-NV shares V-L's core job — this is a **Delta ODI**.
> **Delta identity:** V-NV = V-L + thermal sensor for 24/7 ops. Same fire gate, same Kalman tracking. Simpler than V-P (no IMM, no C4I).

---

## 1. Job-to-be-Done

### Core Functional Job (SAME as V-L, extended to night)

**"Detect, track, and engage unauthorized low-altitude drone threats in daylight AND darkness, achieving first-shot neutralization while maintaining human decision authority."**

**Delta from V-L:** Adds "AND darkness." V-NV is V-L that works at night — nothing else changes.

**Delta from V-P:** V-NV is SIMPLER than V-P. No IMM (still Kalman), no C4I, no Hungarian. V-NV is "V-L + eyes in the dark." V-P is "V-L + everything upgraded."

---

## 2. Inherited Outcomes (V-L O01–O22)

| V-L ID | Outcome | V-NV Applicability | Modification |
|--------|---------|-------------------|--------------|
| O01 | Minimize detection time | **SAME** | — |
| O02 | Minimize misclassification | **MODIFIED** | Night: thermal blobs harder to classify than visual shapes. FP risk higher at night. |
| O03 | Maximize detection range (day) | **SAME** | ≥300m maintained |
| O04 | Maximize AI confidence accuracy | **MODIFIED** | Dual-mode confidence: CMOS (day) vs thermal (night). Auto-switching threshold critical. |
| O05 | Minimize system latency | **SAME** | ≤100ms |
| O06 | Maximize tracking accuracy | **SAME** | Still Kalman (not IMM like V-P). 1.5g limit maintained. |
| O07 | Maximize shot timing accuracy | **SAME** | Same fire gate |
| O08-O10 | Engagement cycle, handoff, HITL | **SAME** | — |
| O11 | Minimize battery drain | **MODIFIED** | 6h (V-L: 8h). Thermal power draw ~0.5W additional. |
| O12 | Maximize ruggedization | **SAME** | IP65 maintained (not IP67 like V-P) |
| O13 | Maximize first-shot Pk | **MODIFIED** | Day ≥60% (same), Night ≥45% (new, lower). Night thermal limited resolution. |
| O14-O16 | Engagement time, multi-target, training | **SAME** | — |
| O17 | Minimize unit cost vs import | **MODIFIED** | $1,400 cost / $4,500 price. 1.5× V-L but still 75% cheaper than import. |
| O18 | Maximize local content | **MODIFIED** | 55-60% (V-L: 70%). Thermal import reduces %. Still above TCVN 60% threshold (borderline). |
| O19-O22 | Maintainability, training, data, ammo | **SAME** | — |

**Summary: 16 SAME, 6 MODIFIED, 0 N/A.** V-NV is the most conservative V-L extension.

---

## 3. V-NV-Specific Outcomes (NEW)

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| ONV01 | Maximize the night drone detection range using uncooled thermal | 9 | 1 | [ASSUMPTION] ≥200m at night. Currently zero night C-UAS capability. |
| ONV02 | Maximize the accuracy of thermal-based drone classification at night | 8 | 1 | [ASSUMPTION] Thermal sees heat, not shape. Classification model needs ≥2,000 labeled thermal images. Drone vs bird thermal signature overlap is high. |
| ONV03 | Minimize the CMOS↔thermal switching latency and tracking dropout | 8 | 1 | [ASSUMPTION] Auto-switch at dusk/dawn. Must be seamless — no tracking loss during transition. If soldier loses target during switch, trust is broken. |
| ONV04 | Maximize the thermal sensor supply chain resilience (dual-source) | 9 | 2 | [ASSUMPTION] FLIR Lepton sole-source is HIGH risk. Infiray T2S is alternative. Must qualify both or risk production halt. |
| ONV05 | Minimize the night Pk gap vs daylight Pk | 8 | 1 | [ASSUMPTION] Day ≥60%, Night ≥45%. 15pp gap. Thermal resolution (160×120) limits night classification accuracy. Gap may narrow with better thermal model training. |

**Total: V-L 22 (inherited) + 5 new = 27 outcomes.**

---

## 4. Combined Opportunity Scores

### V-NV-Specific Outcomes (ranked)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **ONV01** | Maximize night detection range | 9 | 1 | **17** | 🔴 UNDERSERVED |
| 2 | **ONV04** | Maximize thermal supply chain resilience | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 3 | **ONV02** | Maximize night classification accuracy | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 4 | **ONV03** | Minimize CMOS↔thermal switching dropout | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 5 | **ONV05** | Minimize night vs day Pk gap | 8 | 1 | **15** | 🔴 UNDERSERVED |

### Modified V-L Outcomes (re-scored for V-NV)

| V-L ID | Outcome | V-L Opp | V-NV Opp | Change Reason |
|--------|---------|---------|----------|---------------|
| O13 | Hit probability | 18 | **18** | Still top — now includes night Pk target |
| O02 | Misclassification | 16 | **18** | **Increased** — night thermal classification is harder, FP risk is higher |
| O11 | Battery drain | 13 | **15** | Thermal power draw reduces battery life |
| O18 | Local content | 12 | **14** | Reduced to 55-60%, borderline TCVN |

### Top 5 Combined (V-NV)

| Rank | ID | Outcome | Opp |
|------|----|---------|----|
| 1 | O13 | Hit probability (day+night) | **18** |
| 2 | O02 | Misclassification (night risk) | **18** |
| 3 | ONV01 | Night detection range | **17** |
| 4 | ONV04 | Thermal supply chain resilience | **16** |
| 5 | O06 | Tracking accuracy | **16** |

---

## 5. Strategic Recommendation

### Strategy: **DOMINATE (night C-UAS, TCVN-compliant alternative to V-P)**

**Rationale:** V-NV exists because V-P's 31% local content is a procurement risk. V-NV at 55-60% provides TCVN-compliant night capability. V-NV is the PRAGMATIC choice; V-P is the CAPABILITY choice.

### Positioning in Family

| Dimension | V-NV | V-L | V-P |
|-----------|------|-----|-----|
| **Night** | Yes (thermal) | No | Yes (thermal + fusion) |
| **Tracking** | Kalman (1.5g) | Kalman (1.5g) | IMM (3g) |
| **C4I** | No | No | Yes |
| **Local content** | 55-60% (TCVN borderline) | 70% | 31% (waiver) |
| **Price** | $4,500 | $3,000 | $5,000 |
| **Customer choice** | Night + TCVN | Day only | Night + premium |

**V-NV customer logic:** "I need night capability AND I need TCVN compliance. V-P is better but can't pass procurement. V-NV can."

### Thermal R&D Reuse Opportunity

V-NV's thermal integration (sensor mount, fusion algorithm, thermal AI model) is reusable by V-P. This is **opportunity, not dependency** — either product can do thermal first and the other benefits.

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes:** O13, O02, ONV01, ONV04, ONV02
- **Kill condition:** Night detection accuracy < 80% after thermal model v2 (2,000+ images). Thermal resolution insufficient for drone classification at 200m.
- **Validation needed:** ONV02 (thermal classification) requires labeled thermal drone images. ONV04 (supply chain) requires parallel evaluation of FLIR Lepton 3.5 and Infiray T2S.

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (base, Sections 1-5) | V-SMASH-NV_Product_Proposal_v1.0.md (P11)*
