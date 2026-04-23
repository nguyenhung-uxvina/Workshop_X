---
created: 2026-04-17
source: research-pipeline-v3-quick
notebook: eqfd + icdm
topic: "CSR Function (Customer Satisfaction Rating) in ICDM Conceptual Design"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #pahl]
source_quality:
  tier_s: 2
  tier_a: 3
  tier_b: 1
  tier_c: 0
  pro_ratio: "83%"
sources_analyzed:
  - title: "Extension of Pahl & Beitz Systematic Method — Weiss & Hari 2015"
    tier: S
    url: "https://www.sciencedirect.com/science/article/pii/S2212827115002073"
  - title: "Application of ICDM for Conceptual Design — Hari & Weiss 2004"
    tier: S
    url: "https://www.designsociety.org/publication/29631/application_of_icdm_for_the_conceptual_design_of_a_new_product"
  - title: "ICDM Integrated Methodology — Academia.edu"
    tier: A
    url: "https://www.academia.edu/59514794/ICDM_an_Integrated_Methodology_for_the_Conceptual_Design_of_New_Systems"
  - title: "Systems Engineering with ICDM — Herscovitz 2002"
    tier: A
    url: "https://incose.onlinelibrary.wiley.com/doi/10.1002/j.2334-5837.2002.tb02565.x"
  - title: "Kano Model — ASQ"
    tier: A
    url: "https://asq.org/quality-resources/kano-model"
  - title: "NLM eqfd notebook (19 sources)"
    tier: S
    url: "nlm://eqfd"
---

# CSR Function (Customer Satisfaction Rating) in ICDM — Quick Research

## 1. Core Definition ★★★

**CSR function** = hàm ánh xạ giá trị thực tế đạt được của Product Characteristic (PC) → mức độ hài lòng khách hàng (0-100%).

- Source: Weiss & Hari 2015, Tier S
- Confidence: ★★★ HIGH — defined by method creators themselves
- Cross-validated by: NLM eqfd notebook (2 independent sources confirm)

**Key property:** CSR function is defined FOR EACH PC selected from QFD. The QFD team + customer representatives jointly determine the curve shape.

## 2. Three Foundational Rules ★★★

All CSR functions must obey:

1. **TV = 100%:** Achieving Target Value = 100% satisfaction. Beyond TV does NOT improve CSR.
2. **Poorest end = baseline:** Worst acceptable value gets low CSR (not necessarily 0%). Below worst = same baseline.
3. **Distribution between TV and poorest end:** Agreed upon during QFD with customer.

- Source: Weiss & Hari 2015 (direct quote from paper), Tier S
- Confidence: ★★★ HIGH

## 3. Curve Types ★★★

Weiss & Hari define several CSR function types:

| Type | Description | Example |
|---|---|---|
| **Continuous linear** | Straight line from poorest → TV | Weight: 240g→60g = 40%→100% |
| **Continuous non-linear** | Curved, often steeper at one end | Cost: $110 TV, $195 actual → CSR 10% |
| **Step type** | Discrete jumps at thresholds | Pass/fail criteria |
| **Multi-dimensional** | CSR depends on >1 variable | When one PC's value depends on another |
| **Window/peak** | Both too-high and too-low are bad | Alarm volume: 54-62 dB = peak, <38 or >70 = 0% |

- Source: Weiss & Hari 2015 + NLM eqfd, Tier S
- Confidence: ★★★ HIGH

## 4. Concrete Examples From Papers ★★★

### Flashlight Weight (linear)
- TV = 60g → CSR = 100%
- Below 60g → still 100% (lighter is not penalized)
- 240g → CSR = 40%
- Linear decrease between 60g-240g

### Flashlight Cost (non-linear)
- TV = $110 → CSR = 100%
- $195 → CSR = **10%** (dramatic drop — non-linear penalizes overshoot heavily)
- W = 12% → contributes only 1.2 points to DQM

### Alarm Volume (window/peak)
- TV ≈ 60 dB, peak at 54-62 dB = 100%
- Below 38 dB → CSR = 0%
- Above 70 dB → CSR = 0%

### Mission Reliability (threshold-like)
- TV = 95% → CSR = 100%
- Linear decrease to 0% at 85%

## 5. DQM Integration Formula ★★★

```
DQM = Σᵢ (Wᵢ × CSRᵢ)
```

Where:
- Wᵢ = relative importance weight from QFD (total ≈ 100%)
- CSRᵢ = satisfaction percentage from CSR function for concept's actual value

Group A criteria (≥70% coverage) used for Pugh screening (Step 7).
Group B criteria (≥95% coverage) used for final DQM (Step 9).

- Source: Weiss & Hari 2015 + Herscovitz 2002, Tier S+A
- Confidence: ★★★ HIGH

## 6. Kano Model Connection ★★

Kano categories suggest natural CSR curve shapes:
- **Must-be** → step function (below threshold = collapse)
- **One-dimensional** → linear
- **Attractive** → non-linear concave (bonus territory)
- **Reverse** → window function

- Source: ASQ Kano reference + synthesis, Tier A
- Confidence: ★★ MED — connection is synthesized, not in original ICDM papers

## 7. WX-Specific Insight: Linear CSR Trap ★★★

From LITE-PA2 pipeline (Session 72): linear CSR-1 (fidelity) almost masked the 70% training-transfer threshold. Step/S-curve CSR would have correctly penalized sub-threshold concepts.

**Law candidate:** "Linear CSR che giấu threshold → khi có sacred constraint, PHẢI dùng step hoặc S-curve CSR."

- Source: WX internal (LITE-PA2 BC_Develop.md), validated by Weiss & Hari curve type taxonomy
- Confidence: ★★★ HIGH — empirically validated in WX pipeline

---

## Galaxy Candidates (THỊNH H — Hóa)

### ★★★ — Ready for Promotion
1. "CSR Linear Trap — Linear curve che giấu threshold effects"
   - Cluster: G (Pahl-Beitz Technical)
   - Links to: [[VDI 2225 Sensitivity]], [[Physical-World Interface]]
   - Source: WX empirical (LITE-PA2) + Weiss & Hari curve types
   - Confidence: ★★★
   - **Note:** May be combined with existing LITE-PA2 session insight. CEO decides.

### ★★ — Needs CEO Judgment
2. "Kano→CSR Shape Mapping — Kano category predicts optimal CSR curve shape"
   - Cluster: G (Pahl-Beitz Technical)
   - Potential: saves curve-shape decision time in future ICDM runs
   - Missing: original ICDM papers don't explicitly reference Kano mapping — this is synthesized

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources analyzed | 6 |
| Tier S (Standards/Primary) | 2 (+ NLM eqfd as equivalent) |
| Tier A (Authority) | 3 |
| Tier B (Professional) | 1 |
| Tier C (Community) | 0 |
| Pro ratio (S+A/total) | 83% |
| Insights extracted | 7 |
| ★★★ HIGH confidence | 6 |
| ★★ MED confidence | 1 |
| Galaxy candidates | 1 ready, 1 needs judgment |

### Coverage Gaps
- **Original 1996 paper** (Hari & Weiss, "Measurement of Design Quality with Customer Satisfaction Rating") — listed as "Paper in preparation" in 2004, never published separately. All CSR detail comes from 2015 Procedia CIRP paper and INCOSE case study instead.
- **Mathematical formulas** — no closed-form CSR equations in any source. Construction is graphical/tabular, decided by team + customer.

### NLM Status
- NLM notebook `eqfd`: ✅ queried successfully — best CSR detail source
- NLM notebook `icdm`: ✅ queried — limited CSR specifics, better on ICDM overview
