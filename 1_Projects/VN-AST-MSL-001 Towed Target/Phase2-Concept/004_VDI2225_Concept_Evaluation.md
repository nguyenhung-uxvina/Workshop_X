---
created: 2026-03-08
updated: 2026-03-08
type: concept-evaluation
status: draft
document-id: VN-AST-MSL-001-CE-001
version: "1.0"
tags: [#type/project, #status/active]
---

# VDI 2225 CONCEPT EVALUATION — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Phase** | 2 — Conceptual Design |
| **Date** | 2026-03-08 |
| **Status** | Draft — awaiting CEO concept selection |
| **Method** | VDI 2225 weighted scoring (0-4 scale) with sensitivity analysis |
| **CEO Trade-off Inputs** | Robustness > min cost; simplicity > stability margin; compartmentation OK for R-B04; 60% local content = acceptable risk |

---

## 1. Evaluation Criteria

Derived from Requirements List v1.3 (77 requirements, 46 Demands). Weighted by CEO priorities.

| # | Criterion | Source Requirements | Weight (w) | Rationale |
|:--|:----------|:-------------------|:----------:|:----------|
| K1 | **RCS performance** (≥ 1,000 m², ≥ 330° azimuth) | R-A01, R-A02, R-A05, R-A06 | 0.15 | Core function — reason for existence |
| K2 | **Survivability at sea** (SS 5-6 survival, unsinkable) | R-C05, R-B04, R-I02, R-B03 | 0.15 | Operating environment is unforgiving |
| K3 | **Tow-out integrity** (SS 5, RCS intact, stable) | R-J01→J05, R-J08, R-J12 | 0.15 | Design driver (SF-13 ★) |
| K4 | **Mooring reliability** (125 kN, ≥ 50m depth, ≥ 24h) | R-D01→D08 | 0.10 | Must hold position for live fire |
| K5 | **Structural durability** (5 yr life, corrosion, UV) | R-B01, R-F03, R-F05, R-F08 | 0.10 | Investment protection |
| K6 | **Fabrication simplicity** (≤ 8 wks, local skills) | R-H02, R-H04, R-H05 | 0.10 | Workshop X capability match |
| K7 | **Transport & deployment** (xe tải, ≤ 5T crane, ≤ 6 người) | R-G01→G07, R-B05 | 0.08 | Logistics constraint |
| K8 | **Local content** (≥ 60%) | R-H03 | 0.07 | Defense procurement requirement |
| K9 | **Cost** (≤ 2,000M VND) | R-H01 | 0.05 | Budget is 10x — all pass, differentiation low |
| K10 | **Operational simplicity** (maintenance, field repair) | R-F09, R-I06 | 0.05 | CEO: simplicity > complexity |
| | **Total** | | **1.00** | |

**Weight rationale:**
- K1+K2+K3 = 0.45 → technical performance dominates (RCS + survivability + tow = the product)
- K4+K5 = 0.20 → operational reliability
- K6+K7+K8 = 0.25 → manufacturability + logistics
- K9+K10 = 0.10 → cost is low priority (10x budget), simplicity per CEO

---

## 2. Scoring Guide (VDI 2225 Scale)

| Score | Meaning | Description |
|:-----:|:--------|:------------|
| 0 | Unsatisfactory | Does not meet requirement |
| 1 | Just tolerable | Barely meets minimum, high risk |
| 2 | Adequate | Meets requirement with limitations |
| 3 | Good | Meets requirement well, minor weaknesses |
| 4 | Very good (ideal) | Exceeds requirement, no weaknesses |

---

## 3. Scoring Matrix

| Criterion | w | C1 TRÒN HDPE | C2 THÉP HỘP | C3 HYBRID | C4 NHÔM GỌN | Scoring Notes |
|:----------|:--:|:--:|:--:|:--:|:--:|:------|
| K1 RCS performance | 0.15 | 4 | 4 | 4 | 4 | All use trihedral/dihedral → all achieve ≥ 1,000 m² |
| K2 Survivability | 0.15 | 4 | 3 | 4 | 4 | C2: compartments OK (CEO) but no foam = score 3 not 4 |
| K3 Tow-out integrity | 0.15 | 3 | 2 | 3 | 4 | C1: blunt D=6m hull → high drag, OK but marginal. C2: heaviest, highest drag ~20 kN, stability uncertain with flat face. C3: outriggers fold OK but arms exposed to wave slam. C4: smallest, lightest, lowest drag ~12 kN → best tow behavior |
| K4 Mooring reliability | 0.10 | 3 | 4 | 3 | 2 | C2: steel handles 125 kN natively, all-chain OK (heavy is fine for steel). C4: helix anchor needs equipment, soil-dependent → score 2. C1/C3: hybrid chain/nylon = good but less proven → score 3 |
| K5 Structural durability | 0.10 | 3 | 4 | 3 | 4 | C2/C4: metal → known fatigue properties, weld certification standards. C1/C3: HDPE creep + UV degradation → needs additives + monitoring |
| K6 Fabrication simplicity | 0.10 | 3 | 3 | 2 | 2 | C1: HDPE welding = specialty but learnable. C2: standard steel fabrication. C3: mixed materials + hinges = complex. C4: TIG aluminum = specialized |
| K7 Transport & deployment | 0.08 | 3 | 2 | 3 | 4 | C2: heaviest (5T), 2 halves still ~2.5T each. C4: lightest (2T), easiest. C1/C3: moderate weight, 3 modules |
| K8 Local content | 0.07 | 4 | 4 | 3 | 2 | C1: ≥85%. C2: ≥95%. C3: ≥75%. C4: ~60% (aluminum imported) |
| K9 Cost | 0.05 | 4 | 3 | 3 | 2 | C1: 600-900M (lowest). C2: 800-1,200M. C3: 700-1,100M. C4: 1,000-1,500M (highest) |
| K10 Operational simplicity | 0.05 | 4 | 3 | 2 | 3 | C1: no moving parts, foam = no flooding worry. C2: corrosion maintenance. C3: hinges = maintenance (CEO: penalize). C4: less corrosion but specialized repair |

---

## 4. Weighted Score Calculation

### C1: TRÒN HDPE
```
Σ(w × s) = 0.15×4 + 0.15×4 + 0.15×3 + 0.10×3 + 0.10×3 + 0.10×3 + 0.08×3 + 0.07×4 + 0.05×4 + 0.05×4
         = 0.60  + 0.60  + 0.45  + 0.30  + 0.30  + 0.30  + 0.24  + 0.28  + 0.20  + 0.20
         = 3.47

Technical Value = 3.47 / 4.00 = 86.8%
```

### C2: THÉP HỘP
```
Σ(w × s) = 0.15×4 + 0.15×3 + 0.15×2 + 0.10×4 + 0.10×4 + 0.10×3 + 0.08×2 + 0.07×4 + 0.05×3 + 0.05×3
         = 0.60  + 0.45  + 0.30  + 0.40  + 0.40  + 0.30  + 0.16  + 0.28  + 0.15  + 0.15
         = 3.19

Technical Value = 3.19 / 4.00 = 79.8%
```

### C3: HYBRID HDPE+OUTRIGGER
```
Σ(w × s) = 0.15×4 + 0.15×4 + 0.15×3 + 0.10×3 + 0.10×3 + 0.10×2 + 0.08×3 + 0.07×3 + 0.05×3 + 0.05×2
         = 0.60  + 0.60  + 0.45  + 0.30  + 0.30  + 0.20  + 0.24  + 0.21  + 0.15  + 0.10
         = 3.15

Technical Value = 3.15 / 4.00 = 78.8%
```

### C4: NHÔM GỌN
```
Σ(w × s) = 0.15×4 + 0.15×4 + 0.15×4 + 0.10×2 + 0.10×4 + 0.10×2 + 0.08×4 + 0.07×2 + 0.05×2 + 0.05×3
         = 0.60  + 0.60  + 0.60  + 0.20  + 0.40  + 0.20  + 0.32  + 0.14  + 0.10  + 0.15
         = 3.31

Technical Value = 3.31 / 4.00 = 82.8%
```

---

## 5. Ranking

| Rank | Concept | Weighted Score | Technical Value | Key Strength | Key Weakness |
|:----:|:--------|:--------------:|:---------------:|:-------------|:-------------|
| **1** | **C1 TRÒN HDPE** | **3.47** | **86.8%** | Balanced — no score below 3 | Tow drag (blunt hull) |
| 2 | C4 NHÔM GỌN | 3.31 | 82.8% | Best tow performance | Mooring (helix), local content, cost |
| 3 | C2 THÉP HỘP | 3.19 | 79.8% | Mooring + durability | Tow-out (heaviest, most drag) |
| 4 | C3 HYBRID | 3.15 | 78.8% | Highest stability | Complexity (hinges, mixed materials) |

---

## 6. Value Profile (Radar Chart — Text Representation)

```
                        K1 RCS
                         4
                        ╱│╲
                  K10 ╱  │  ╲ K2
                   4╱  ──┤──  ╲4
                  ╱ ╱    │    ╲ ╲
            K9  ╱ ╱  C1  │      ╲ ╲  K3
              4╱ ╱───────┤─ 3 ────╲ ╲3
              │╱         │         ╲│
         K8 4─┤──── 3 ───┤─── 3 ────┤ K4  3
              │╲         │         ╱│
              3╲ ╲───────┤─ 3 ────╱ ╱3
            K7  ╲ ╲      │      ╱ ╱  K5
                  ╲ ╲ ───┤── ╱ ╱
                   3 ╲   │  ╱ 3
                      ╲  │ ╱
                        ╲│╱
                         3
                        K6

C1 TRÒN HDPE: No score below 3 — balanced profile
```

**Weak Spot Analysis per concept:**

| Concept | Scores = 2 | Implication |
|---------|:----------:|-------------|
| C1 TRÒN HDPE | **None** | No critical weakness — robust |
| C2 THÉP HỘP | K3=2, K7=2 | Tow-out + transport = structural concerns |
| C3 HYBRID | K6=2, K10=2 | Fabrication + operations = complexity tax |
| C4 NHÔM GỌN | K4=2, K6=2, K8=2, K9=2 | Four weak spots — fragile ranking |

**Key insight:** C1 is the only concept with **zero scores below 3**. C4 has the best tow performance but 4 weak spots → fragile if any criterion weight increases.

---

## 7. Sensitivity Analysis

Testing robustness by varying top-3 criteria weights ±20%.

### Test 1: K3 (Tow-out) weight +20% (0.15 → 0.18)
Redistribute -0.03 from K9 (0.05→0.02).

| Concept | Original | Adjusted | Δ | Rank Change |
|---------|:--------:|:--------:|:-:|:-----------:|
| C1 | 3.47 | 3.47 | 0.00 | — |
| C2 | 3.19 | 3.13 | -0.06 | — |
| C3 | 3.15 | 3.12 | -0.03 | — |
| C4 | 3.31 | 3.37 | +0.06 | — |

**Result:** Ranking unchanged. C4 closes gap but C1 still leads.

### Test 2: K2 (Survivability) weight +20% (0.15 → 0.18)
Redistribute -0.03 from K9 (0.05→0.02).

| Concept | Original | Adjusted | Δ | Rank Change |
|---------|:--------:|:--------:|:-:|:-----------:|
| C1 | 3.47 | 3.50 | +0.03 | — |
| C2 | 3.19 | 3.16 | -0.03 | — |
| C3 | 3.15 | 3.18 | +0.03 | — |
| C4 | 3.31 | 3.34 | +0.03 | — |

**Result:** Ranking unchanged. C1 widens lead slightly.

### Test 3: K1 (RCS) weight +20% (0.15 → 0.18)
Redistribute -0.03 from K6 (0.10→0.07).

| Concept | Original | Adjusted | Δ | Rank Change |
|---------|:--------:|:--------:|:-:|:-----------:|
| C1 | 3.47 | 3.50 | +0.03 | — |
| C2 | 3.19 | 3.22 | +0.03 | — |
| C3 | 3.15 | 3.21 | +0.06 | C3 passes C2 |
| C4 | 3.31 | 3.37 | +0.06 | — |

**Result:** C1 still #1. C3 and C2 swap at #3/#4. Top-2 unchanged.

### Test 4: K6 (Fabrication) weight +20% (0.10 → 0.12)
Redistribute -0.02 from K3 (0.15→0.13).

| Concept | Original | Adjusted | Δ | Rank Change |
|---------|:--------:|:--------:|:-:|:-----------:|
| C1 | 3.47 | 3.47 | 0.00 | — |
| C2 | 3.19 | 3.21 | +0.02 | — |
| C3 | 3.15 | 3.13 | -0.02 | — |
| C4 | 3.31 | 3.27 | -0.04 | — |

**Result:** Ranking unchanged. C4 drops further.

### Test 5: Extreme — K3 weight ×2 (0.15 → 0.30)
Redistribute -0.15 from K4+K5 (each -0.075).

| Concept | Original | Adjusted | Δ | Rank Change |
|---------|:--------:|:--------:|:-:|:-----------:|
| C1 | 3.47 | 3.47 | 0.00 | — |
| C2 | 3.19 | 2.98 | -0.21 | — |
| C3 | 3.15 | 3.10 | -0.05 | C3 passes C2 |
| **C4** | **3.31** | **3.52** | **+0.21** | **C4 overtakes C1** |

**Result:** Only under EXTREME tow emphasis (weight doubled) does C4 beat C1. This scenario implies tow performance matters more than everything else combined — unlikely for a stationary target platform.

---

## 8. Sensitivity Summary

```
                    C1 wins in all scenarios except extreme K3 doubling
                    ┌──────────────────────────────────────────────┐
                    │  Sensitivity Test        C1    C4    Winner  │
                    ├──────────────────────────────────────────────┤
                    │  Baseline               3.47  3.31   C1     │
                    │  K3 Tow +20%            3.47  3.37   C1     │
                    │  K2 Survive +20%        3.50  3.34   C1     │
                    │  K1 RCS +20%            3.50  3.37   C1     │
                    │  K6 Fabrication +20%    3.47  3.27   C1     │
                    │  K3 Tow EXTREME (×2)    3.47  3.52   C4 ←   │
                    └──────────────────────────────────────────────┘

    C1 TRÒN HDPE is ROBUST — ranking stable under all reasonable weight variations.
    C4 NHÔM GỌN is the only challenger, but only under extreme tow bias.
```

---

## 9. Risk Register — Top 5 Risks per Concept

### C1: TRÒN HDPE (Rank #1)

| # | Risk | Likelihood | Impact | Mitigation |
|:--|:-----|:----------:|:------:|:-----------|
| R1 | HDPE butt-fusion weld quality inconsistent | Medium | High | Welder certification, test coupons before production, NDE inspection |
| R2 | Blunt hull tow drag exceeds 17 kN estimate | Low | Medium | Tow trial at reduced speed first; component drag method ±50% acknowledged |
| R3 | Foam degradation (water absorption over 5 yr) | Low | Medium | Specify closed-cell polyurethane ≥ 95% closed cells, annual inspection |
| R4 | Reflector mounting loosens under tow vibration SS 5 | Medium | High | Bolted + lock-wired mounts, tow trial with accelerometers |
| R5 | HDPE UV degradation despite stabilizers | Low | Low | UV-stabilized grade PE100, can apply marine paint if needed |

### C2: THÉP HỘP (Rank #3)

| # | Risk | Likelihood | Impact | Mitigation |
|:--|:-----|:----------:|:------:|:-----------|
| R1 | Corrosion breakthrough within 3 years | Medium | High | Hot-dip galv + marine epoxy, annual inspection, anode protection |
| R2 | Weight exceeds 5,000 kg → transport crane limit | Medium | Medium | Detailed weight budget in Phase 3, design to ≤ 4,500 kg |
| R3 | Tow drag ~20 kN exceeds tug 100 HP capability | Medium | High | Reduce speed to 3-4 kt; R-J10 says 100 HP minimum |
| R4 | Compartment flooding goes undetected | Low | High | Bilge alarm sensors, inspection ports |
| R5 | Welding distortion affects reflector alignment | Low | Medium | Jig welding, post-weld measurement |

### C3: HYBRID (Rank #4)

| # | Risk | Likelihood | Impact | Mitigation |
|:--|:-----|:----------:|:------:|:-----------|
| R1 | Outrigger hinge corrosion/seizure | High | High | Marine-grade stainless hinges, greasing schedule — but still highest-risk item |
| R2 | Wave slam on outrigger arms during tow (even folded) | Medium | High | Design fold position to be above WL; sacrificial bumpers |
| R3 | Mixed material galvanic corrosion (HDPE is non-issue but steel-to-steel is) | Medium | Medium | Isolation gaskets, same-grade steel throughout |
| R4 | Assembly time exceeds 4 hrs due to outrigger deployment | Medium | Low | Practice drill; pin/clevis quick-connect design |
| R5 | Outrigger pontoon loss at sea | Low | Medium | Safety lanyards; carry spares |

### C4: NHÔM GỌN (Rank #2)

| # | Risk | Likelihood | Impact | Mitigation |
|:--|:-----|:----------:|:------:|:-----------|
| R1 | TIG welding quality — limited qualified welders in VN | High | High | Pre-qualify welders, weld procedure spec (WPS), 100% inspection |
| R2 | Aluminum 5083 plate supply — import lead time | Medium | High | Pre-order material, buffer stock |
| R3 | Helix anchor installation needs specialized equipment | Medium | Medium | Survey seabed first; fallback to drag anchor if soil unsuitable |
| R4 | Local content falls below 60% threshold | Medium | Medium | Source aluminum from domestic suppliers if available (VIMICO?) |
| R5 | Aluminum fatigue at weld joints (lower fatigue strength than base metal) | Low | High | Design to S-N curve, conservative stress concentration factors |

---

## 10. CEO Decision Required

| | C1 TRÒN HDPE | C4 NHÔM GỌN | C2 THÉP HỘP | C3 HYBRID |
|:--|:-:|:-:|:-:|:-:|
| **Technical Value** | **86.8%** | 82.8% | 79.8% | 78.8% |
| **Weak spots (score ≤ 2)** | **0** | 4 | 2 | 2 |
| **Sensitivity** | **Robust** | Fragile | Stable low | Stable low |
| **Top risk** | HDPE weld QC | TIG welder availability | Corrosion | Hinge seizure |

**AI recommendation: C1 TRÒN HDPE** — highest score, zero weak spots, robust under sensitivity, lowest risk profile, highest local content, lowest cost. Only weakness is tow drag (blunt hull) but within 17 kN estimate and 100 HP tug capability.

**C4 NHÔM GỌN as reserve concept** — best tow performance, lightest, but fragile ranking and supply chain risk.

**CEO selects concept. AI does NOT auto-select.**

---

*VDI 2225 Concept Evaluation v1.0 | VN-AST-MSL-001 | HELIX Phase 2*
