---
created: 2026-04-12
type: rta-knowledge-gaps
block: BD
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "ICDM RTA (Risk and Time to Market Analysis) + CDTC (Hari & Weiss)"
status: COMPLETE
concepts_analyzed: 2 (A, B)
feeds_to:
  - VN_MGM_V5_ICDM_Final_Selection.md (BE)
---

# BD RTA + CDTC — VN-MGM V5-MOTORIZED (ICDM)

## 1. CDTC — Conceptual Design To Cost (Pareto Analysis)

### 1.1 Top 20% Cost Factors (driving ~80% of BOM)

| # | Cost Factor | % of BOM | Concept A ($) | Concept B ($) | Target |
|---|------------|:--------:|:------------:|:------------:|:------:|
| 1 | V1 base mount (structure + ring + bearing) | 35-40% | $2,500-4,000 | $2,500-4,000 | Same |
| 2 | Motors ×2 (BLDC 200W) | 8-12% | $300-600 | $300-600 | Same |
| 3 | Gearboxes (A: ×1 az worm. B: ×2 worm) | 5-10% | $150-250 | **$300-450** | B: +$150 |
| 4 | Controller box (STM32 + drives + enclosure) | 8-12% | $300-500 | $300-500 | Same |
| 5 | Brackets + machining (CNC) | 5-8% | $200-400 | **$300-500** | B: +$100 (sector) |

**Pareto total (top 5): ~70-80% of BOM.**

### 1.2 Cost Comparison vs Target

| Metric | Concept A | Concept B | Target (CO-01) |
|--------|:---------:|:---------:|:--------------:|
| BOM estimate (mid) | **$7,000** | **$8,000** | ≤$10,000 |
| ICDM overhead (IM-03) | ~$300 | ~$300 | ≤$500 |
| BOM vs target | **-30%** ✅ | **-20%** ✅ | — |
| Sell price (mid) | $12,000 | $13,000 | $10-18K |
| Gross margin | **42%** | **38%** | ≥40% target |

**Both concepts within cost target.** A has higher margin. B marginal at 38% (below 40% target, but acceptable given production simplification advantage).

### 1.3 ICDM Innovation Cost (IM-03 Budget: ≤$500)

| ICDM Feature | Cost | Both A & B |
|-------------|:----:|:----------:|
| Data port connectors (RS485 + CAN) | $20-30 | ✅ |
| Key switch (FD-06) | $10-15 | ✅ |
| SD card slot + card | $5-10 | ✅ |
| LiFePO4 UPS battery | $30-50 | ✅ |
| Reserved GPIO + UART (IX-05) | $0 (PCB layout only) | ✅ |
| Power headroom (520W vs 400W PSU) | $30-50 | ✅ |
| Mechanical M8 expansion mounts (IX-04) | $5-10 | ✅ |
| **ICDM Total** | **$100-165** | **Well under $500** |

**ICDM features cost $100-165, significantly under $500 budget.** Platform architecture adds minimal cost to V5.

---

## 2. RTA — Risk and Time to Market Analysis

### 2.1 Knowledge Gaps (KG) Inventory

| KG# | Knowledge Gap | Concept A | Concept B | Type | Closing Method |
|-----|-------------|:---------:|:---------:|:----:|---------------|
| KG-1 | Elastomer bushing recoil attenuation ≥40% at 50 kN | ✅ Both | ✅ Both | Physics | **Phase A bench test** — mount motor+gearbox on V1, fire 50 rounds, measure shock at motor shaft |
| KG-2 | Recoil recovery time ≤0.5s (motor PID) | ✅ Both | ✅ Both | Control | **Phase A bench test** — same test, measure time to return to aim |
| KG-3 | V1 worm shaft ratio + extension feasibility | ✅ A only | — | Mechanical | **Measure V1 worm housing** — disassemble 1 unit, measure shaft, design extension cap |
| KG-4 | Sector gear recoil clamp force adequacy | — | ✅ B only | Structural | **FEA analysis** + physical clamp test with shock loading |
| KG-5 | Sector gear tooth stress at 50 kN | — | ✅ B only | Structural | **FEA analysis** + tooth hardness verification |
| KG-6 | WX servo control capability (STM32 + BLDC PID) | ✅ Both | ✅ Both | Team skill | **Phase A bench test** — first-ever WX servo motor project. CEO IRL = 2/5 for servo. |
| KG-7 | EM clutch residual drag in released state | ✅ Both | ✅ Both | Physics | **Phase A bench test** — measure manual effort with clutch released vs V1 baseline |

### 2.2 Gap Closing Plan — Concept A

```
CONCEPT A — GAP CLOSING TIMELINE

Week 0-2: SOURCE COMPONENTS (P1-P3 from Status.md)
  └─ Order: 2× BLDC 200W, 2× NMRV050, 2× EM clutch NC, 2× encoder
  └─ Order: STM32 dev board, 2× servo drives, joystick, E-stop, PSU
  └─ CNC: az bracket (welded on test pedestal), el bracket (bolted)
  
Week 2-4: PHASE A BENCH TEST (serves V5 + N12)
  └─ KG-1: Shock test → elastomer attenuation measurement
  └─ KG-2: PID tune → recoil recovery time measurement
  └─ KG-3: V1 worm disassembly → measure shaft → design extension
  └─ KG-6: First servo control → PID tuning → team skill building
  └─ KG-7: Manual effort test → clutch released drag measurement
  └─ Gate A: 9 criteria (GA-1 to GA-9 from Status.md)
  
Week 4-6: PHASE B INTEGRATION (V5-specific)
  └─ Mount motor modules on V1 mount
  └─ Full wiring + controller commissioning
  └─ Manual fallback test (clutch release, E-stop, cable-cut)
  
Week 6-8: V1 FIT TEST + ADJUSTMENTS
  └─ Verify weight ≤100 kg
  └─ Verify envelope (G-03 ≤1,350mm)
  └─ Verify manual mode feel ≥80% V1

TOTAL TTM (to prototype): 8 weeks from sourcing
TOTAL TTM (to pilot production): 11-15 weeks
```

### 2.3 Gap Closing Plan — Concept B (additional to A)

```
CONCEPT B — ADDITIONAL GAPS

Week 2-4 (parallel with bench test):
  └─ KG-4: FEA — sector clamp under 50 kN recoil (2-3 days)
  └─ KG-5: FEA — sector tooth stress (1-2 days)
  └─ Machine test sector gear (120° arc, M2.5 teeth) — 1 week CNC
  
Week 4-6:
  └─ Physical test: sector + clamp + recoil impact test
  └─ If clamp fails → fall back to through-bolt (needs V1 trunnion drilling)
  
ADDITIONAL TTM for B: +2-3 weeks (FEA + custom sector machining + test)
```

### 2.4 TTM Comparison

| Metric | Concept A | Concept B | Delta |
|--------|:---------:|:---------:|:-----:|
| Knowledge gaps (total) | 5 (KG-1,2,3,6,7) | 7 (KG-1,2,4,5,6,7) | B: +2 |
| Gap closing events | 5 (all in Phase A bench) | 7 (bench + FEA + sector test) | B: +2 |
| TTM to prototype | **8 weeks** | **10-11 weeks** | **B: +2-3 weeks** |
| TTM to pilot production | **11-15 weeks** | **13-18 weeks** | **B: +2-3 weeks** |
| NRE cost | ~$3-5K (bench test) | ~$5-8K (bench + sector tooling) | **B: +$2-3K** |
| Team skill gaps | 1 (servo control) | 2 (servo + sector gear FEA) | B: +1 |

**Concept A has shorter TTM, fewer KGs, and lower NRE.**

---

## 3. Coupling Analysis (Cross-Domain)

### 3.1 Mech × Elec × SW Coupling per Concept

| Coupling | A "Pinion-Worm" | B "Pinion-Sector" |
|----------|:---------------:|:-----------------:|
| Mech→Elec: Bracket affects motor alignment | MEDIUM (bracket tolerance → pinion mesh) | HIGH (sector clamp tolerance → mesh + recoil) |
| Mech→SW: Gearbox ratio affects PID tuning | LOW (known V1 worm ratio) | MEDIUM (sector ratio different from az → 2 PID tunes) |
| Elec→Mech: Motor heat affects elastomer | LOW (motor 50°C → EPDM rated 80°C) | LOW (same) |
| Elec→SW: Encoder resolution affects control | LOW (4096 CPR >> needed) | LOW (same) |
| SW→Mech: PID overshoot affects recoil recovery | MEDIUM (tune on bench) | MEDIUM (same) |
| **Overall coupling** | **LOW-MEDIUM** | **MEDIUM-HIGH** |

### 3.2 Assumption Register

| # | Assumption | Concept | Domain | Shadow? | Validation |
|---|-----------|:-------:|:------:|:-------:|-----------|
| AS-1 | V1 worm ratio is 1:40-1:80 (not measured) | A | Mech | No | KG-3: measure V1 worm |
| AS-2 | EPDM 60A provides ≥40% attenuation at 50 kN | A, B | Mech | No | KG-1: bench test |
| AS-3 | STM32 + BLDC drive PID can hold ±0.5° under recoil | A, B | SW | **Yes** | KG-2: bench test |
| AS-4 | Sector clamp survives 50K recoil cycles without loosening | B only | Mech | **Yes** | KG-4: FEA + physical test |
| AS-5 | Cable spiral lasts ≥100K cycles in marine environment | A, B | Elec | No | Datasheet + inspection interval |
| AS-6 | EM clutch residual drag ≤0.1 N·m (manual feel ≥80% V1) | A, B | Mech/Elec | No | KG-7: bench test |
| AS-7 | COTS BLDC motor IP65 survives 500h salt fog | A, B | Elec | No | Datasheet + environmental test |

**Shadow assumptions (AS-3, AS-4):** These are cross-domain — SW team assumes Mech delivers within tolerance, and vice versa. Must validate at bench test.

---

## 4. Sensitivity Analysis

### What-if: VDI 2225 weight variation (±5% per criterion)

| Scenario | A DQM | B DQM | Winner Change? |
|----------|:-----:|:-----:|:--------------:|
| Baseline | 99.0% | 94.5% | A wins |
| C2 (accuracy) weight +5% | 99.0% | 93.8% | A wins (wider gap) |
| C10 (cost) weight +5% | 98.0% | 92.5% | A wins |
| C4 (el precision) weight +5% | 99.0% | 94.5% | A wins (no change — both 100% on C4) |
| C8 (fallback) weight +5% | 99.0% | 94.1% | A wins |
| **All weights perturbed ±5% randomly** | **97-99%** | **91-95%** | **A always wins** |

**Ranking is ROBUST.** A dominates B under all reasonable weight perturbations. The gap (4.5%) is larger than any single criterion weight perturbation effect.

---

## 5. BD Summary — Risk Comparison

| Metric | A "Pinion-Worm" | B "Pinion-Sector" |
|--------|:---------------:|:-----------------:|
| **CFMA Rev SFD** | **111** | **173** |
| **CFMA max single** | 20 | **28** (sector clamp) |
| **CDTC cost vs target** | **-30%** | -20% |
| **CDTC margin** | **42%** | 38% |
| **RTA knowledge gaps** | **5** | 7 |
| **RTA TTM (prototype)** | **8 weeks** | 10-11 weeks |
| **RTA NRE** | **$3-5K** | $5-8K |
| **Robustool** | **✅ PASS** | ⚠️ CONDITIONAL |
| **Coupling** | **LOW-MED** | MED-HIGH |
| **Sensitivity** | **Robust** | Robust |
| **Shadow assumptions** | 1 (AS-3: PID) | **2** (AS-3 + AS-4: sector clamp) |

**Concept A dominates on ALL risk dimensions.** B is viable but higher risk, higher cost, longer TTM, with no compensating advantage that A doesn't also have.

---

*BD CFMA + CDTC + RTA + Robustool + Coupling + Sensitivity | Concepts A & B | helix-concept-generate v3.1 (ICDM) | 2026-04-12*
