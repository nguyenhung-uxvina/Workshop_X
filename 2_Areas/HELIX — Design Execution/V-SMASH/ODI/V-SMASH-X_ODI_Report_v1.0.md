---
project: V-SMASH-X
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

# V-SMASH-X (Export) — ODI Report (Delta from V-L)

> **Base:** V-SMASH-L ODI Report v1.1 (22 outcomes). V-X shares V-L's core job — this is a **Delta ODI**.
> **Delta identity:** V-X = V-L − features. Same job, REDUCED capability for export compliance. Feature removal, not addition.

---

## 1. Job-to-be-Done

### Core Functional Job (SAME as V-L, different market)

**"Detect, track, and engage unauthorized low-altitude drone threats achieving first-shot neutralization while maintaining human decision authority."**

**Delta from V-L:** The JOB is identical. What changes is the MARKET (ASEAN, not Vietnam) and the CONSTRAINTS (export compliance, reduced AI model, no IRONMESH).

### Different Customer Context

| Dimension | V-L (Domestic) | V-X (Export) |
|-----------|----------------|--------------|
| **Customer** | Vietnamese Army | ASEAN militaries |
| **Procurement** | Vietnamese MoD process | Foreign military sales |
| **Data sovereignty** | IRONMESH fleet (VN data stays in VN) | No IRONMESH (no data leaves device) |
| **AI model** | YOLOv8-nano (full) | YOLOv8-pico (reduced, 3 classes max) |
| **Support** | Workshop X direct | In-country distributor |

---

## 2. Inherited Outcomes (V-L O01–O22)

| V-L ID | Outcome | V-X Applicability | Modification |
|--------|---------|-------------------|--------------|
| O01 | Minimize detection time | **SAME** | — |
| O02 | Minimize misclassification | **MODIFIED** | Reduced AI model (pico) = slightly higher FP risk. Different drone types in ASEAN (DJI prevalence varies by country). |
| O03 | Maximize detection range (day) | **MODIFIED** | ≥250m (V-L: ≥300m). Smaller model = reduced range. |
| O04 | Maximize AI confidence accuracy | **MODIFIED** | Pico model confidence calibration may differ from nano. Needs per-model calibration. |
| O05 | Minimize system latency | **MODIFIED** | ≤120ms (V-L: ≤100ms). Relaxed — pico model runs faster but output less precise. |
| O06 | Maximize tracking accuracy | **SAME** | Same Kalman filter |
| O07 | Maximize shot timing accuracy | **SAME** | Same fire gate |
| O08-O10 | Engagement cycle, handoff, HITL | **SAME** | — |
| O11 | Minimize battery drain | **SAME** | Slightly better (no wireless module) |
| O12 | Maximize ruggedization | **SAME** | — |
| O13 | Maximize first-shot Pk | **MODIFIED** | ≥50% (V-L: ≥60%). Reduced AI model accuracy = lower Pk. |
| O14 | Minimize engagement time | **SAME** | — |
| O15 | Maximize multi-target tracking | **MODIFIED** | 3 simultaneous targets (V-L: 5). Reduced track pool for export. |
| O16 | Maximize training effectiveness | **SAME** | — |
| O17 | Minimize unit cost vs import | **MODIFIED** | $700 cost / $2,500 price. Lower than V-L ($784/$3,000). Competes with Chinese alternatives at $1,500-5,000. |
| O18 | Maximize local content | **MODIFIED** | 75% (higher than V-L at 70% — no IRONMESH SW module reduces import fraction). |
| O19 | Maximize field maintainability | **MODIFIED** | Export markets may lack Workshop X support. Must be field-maintainable by distributor with basic tools. |
| O20 | Minimize training time | **SAME** | — |
| O21 | Maximize data capture | **MODIFIED** | microSD local log only (no wireless). No IRONMESH. Data stays on device. |
| O22 | Maximize ammo efficiency | **SAME** | — |

**Summary: 12 SAME, 10 MODIFIED, 0 N/A.** All V-L outcomes apply, but 10 are degraded (reduced capability) or changed (different market context).

---

## 3. V-X-Specific Outcomes (NEW)

| ID | Desired Outcome (DIM format) | Imp | Sat | Source |
|----|------------------------------|-----|-----|--------|
| OX01 | Minimize the time to obtain Vietnam defense export license | 10 | 1 | [ASSUMPTION] **Kill condition depends on this.** First Workshop X export. Process unknown, timeline uncertain. >12 months delay = kill. |
| OX02 | Maximize the competitiveness vs Chinese C-UAS alternatives in ASEAN price range ($1,500-5,000) | 9 | 2 | [ASSUMPTION] V-X at $2,500 targets mid-range. Chinese at $1,500 are cheaper but unproven. V-X must differentiate on AI quality, not price. |
| OX03 | Maximize the distributor support capability (field service without WX presence) | 8 | 1 | [ASSUMPTION] ASEAN markets: WX cannot be on-site. Distributor must diagnose, repair, update. Needs service manual + diagnostic tool. |
| OX04 | Maximize the ASEAN country-specific regulatory compliance (import/export per country) | 8 | 1 | [ASSUMPTION] Philippines, Indonesia, Thailand, Myanmar each have different import regulations for defense equipment. Country-by-country compliance needed. |

**Total: V-L 22 (inherited) + 4 new = 26 outcomes.**

---

## 4. Combined Opportunity Scores

### V-X-Specific Outcomes (ranked)

| Rank | ID | Desired Outcome | Imp | Sat | Opp | Priority |
|------|----|----------------|-----|-----|-----|----------|
| 1 | **OX01** | Minimize export license timeline | 10 | 1 | **19** | 🔴 UNDERSERVED |
| 2 | **OX02** | Maximize competitiveness vs Chinese alternatives | 9 | 2 | **16** | 🔴 UNDERSERVED |
| 3 | **OX03** | Maximize distributor support capability | 8 | 1 | **15** | 🔴 UNDERSERVED |
| 4 | **OX04** | Maximize ASEAN regulatory compliance | 8 | 1 | **15** | 🔴 UNDERSERVED |

### Modified V-L Outcomes (re-scored for V-X)

| V-L ID | Outcome | V-L Opp | V-X Opp | Change Reason |
|--------|---------|---------|---------|---------------|
| O13 | Hit probability | 18 | **16** | Reduced to ≥50% (pico model). Still underserved but lower ceiling. |
| O03 | Detection range | 16 | **14** | Reduced to ≥250m. |
| O02 | Misclassification | 16 | **16** | Same priority — different drone fleet in ASEAN. |
| O17 | Unit cost | 14 | **16** | **Increased** — $2,500 price point critical for ASEAN procurement budgets. |

### Top 5 Combined (V-X)

| Rank | ID | Outcome | Opp |
|------|----|---------|----|
| 1 | OX01 | Export license timeline | **19** |
| 2 | O13 | Hit probability (reduced) | **16** |
| 3 | OX02 | Competitiveness vs Chinese | **16** |
| 4 | O02 | Misclassification | **16** |
| 5 | O17 | Unit cost (export pricing) | **16** |

---

## 5. Strategic Recommendation

### Strategy: **DISRUPT (ASEAN affordable C-UAS)**

**Rationale:** V-X enters the ASEAN market with a unique value proposition: AI-gated fire control at $2,500, from a regional (Vietnamese) manufacturer. This disrupts both expensive Western imports ($10K+) and unproven Chinese alternatives ($1,500-5,000).

**Critical constraint:** OX01 (export license, Opp 19) is the #1 outcome — and it's a **regulatory gate, not a product feature.** V-X can be technically perfect and still fail if Vietnam's defense export process takes too long. This is an existential risk that V-X cannot engineer around.

### Positioning

| Dimension | V-X | V-L | Chinese Alternative |
|-----------|-----|-----|---------------------|
| **Market** | ASEAN export | Vietnam domestic | ASEAN export |
| **Price** | $2,500 | $3,000 | $1,500-5,000 |
| **AI quality** | Good (pico, 90%) | Best (nano, 95%) | Unknown |
| **IRONMESH** | No (data stays local) | Yes | No |
| **Support** | Distributor | Direct WX | Manufacturer (often poor) |
| **Trust** | Vietnamese ally | — | Geopolitical concerns |

**V-X customer logic:** "I want affordable AI C-UAS. I don't want to buy Israeli ($18K) or depend on China. Vietnamese V-X is proven technology, regional ally, at $2,500."

---

## Capture Protocol

### Phase 1 Handoff

- **Top 5 outcomes:** OX01, O13, OX02, O02, O17
- **Kill condition:** Export license denied or delayed >12 months. Chinese competitor at <$1,500 enters before V-X.
- **Validation needed:** OX01 (export license) requires engagement with Vietnamese legal counsel immediately. OX02 (competitiveness) requires ASEAN market intelligence on current drone threats and procurement budgets.
- **Segment F validation:** Engage 2-3 ASEAN defense attachés in Hanoi on: drone threat perception, procurement budget range, supplier preference (Western/Chinese/regional).

---

*Cross-reference: V-SMASH-L_ODI_Report_v1.0.md (base, Sections 1-5) | V-SMASH-X_Product_Proposal_v1.0.md (P11)*
