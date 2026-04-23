---
created: 2026-04-12
type: pugh-screening
block: BC
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "ICDM Step 7 — Group A Pugh Screening (Hari & Weiss)"
status: COMPLETE
concepts_in: 4 (A, B, C, D)
concepts_out: 3 (A, B, C — D eliminated)
feeds_to:
  - VN_MGM_V5_VDI_2225_Evaluation.md
  - VN_MGM_V5_ICDM_CSR_Evaluation.md
---

# BC Pugh Screening — VN-MGM V5-MOTORIZED (ICDM Group A)

## Method

ICDM Step 7: Screen using **Group A criteria only** (6 criteria, 71.2% weight). All Essential WTP.
Datum = **Concept A** (highest left-path DSO score, max N12 commonality).

**Score:** +1 (better than A), 0 (same), -1 (worse).
**Elimination rule:** Net negative AND any C8 (manual fallback) = -1 → ELIMINATE.

---

## Group A Criteria

| # | Criterion | Weight | CSR Type | Target | Datum (A) Baseline |
|---|----------|:------:|:--------:|:------:|-------------------|
| C1 | Motor traverse speed | 17.5% | LINEAR | 90°/s | 90°/s (BLDC 200W + 1:80 worm + Ø30mm pinion) |
| C2 | First hit accuracy | 14.9% | EXPONENTIAL | ±0.5° | ±0.5° (encoder 4096 CPR + worm self-lock) |
| C3 | Corrosion endurance | 14.0% | STEP | ≥500h | ≥500h (IP65 motor + marine coatings) |
| C4 | Elevation precision | 10.8% | LINEAR | 45°/s | 45°/s (BLDC + V1 worm ~1:40-80) |
| C8 | Manual fallback | 8.0% | EXPONENTIAL | ≤1s auto | ≤1s (EM NC clutch ×2, auto-release) |
| C10 | Unit cost | 6.0% | LINEAR | ≤$10K BOM | ~$5-7K |

---

## Pugh Matrix

| Criterion | Weight | A "Pinion-Worm" (DATUM) | B "Pinion-Sector" | C "Pinion+LinAct" | D "Integrated Drive" |
|-----------|:------:|:-----------------------:|:-----------------:|:-----------------:|:-------------------:|
| **C1 Motor traverse speed** | 17.5% | **0** | 0 (same motor+gearbox+pinion) | 0 (same az; el speed depends on actuator) | 0 (integrated drive same or slower; worm in ring efficiency ~45%) |
| **C2 First hit accuracy** | 14.9% | **0** | -1 (sector gear backlash > worm self-lock; clamp can shift under recoil) | 0 (az same; el actuator self-locks = good) | 0 (COTS drive has own backlash spec, similar to worm) |
| **C3 Corrosion endurance** | 14.0% | **0** | 0 (same materials, same IP65) | 0 (same) | -1 (integrated drive: COTS unit not designed for 1000h salt fog. Seal spec unknown. Requires custom coating/modification.) |
| **C4 Elevation precision** | 10.8% | **0** | -1 (sector gear mesh has higher backlash than worm; limited arc 120°) | 0 (actuator ball screw = good precision) | 0 (same el mechanism as A) |
| **C8 Manual fallback** | 8.0% | **0** | 0 (same EM clutch, same release path) | -1 (actuator clutch is non-standard; disconnect path: clutch releases but screw may resist back-drive even disengaged → operator must overcome friction) | 0 (same el as A; az clutch in integrated drive = feasible) |
| **C10 Unit cost** | 6.0% | **0** | -1 (sector gear = custom machined $200-400; adds gearbox for el = +$150-200) | -1 (COTS actuator $200-400 + special clutch adapter + 2 bracket points) | -1 (integrated slewing drive = $500-1500 COTS; replaces V1 ring so V1 mount cost changes) |
| | | | | | |
| **Σ(+)** | | **0** | 0 | 0 | 0 |
| **Σ(0)** | | **6** | 2 | 3 | 3 |
| **Σ(-)** | | **0** | **3** | **2** | **2** |
| **Net** | | **0** | **-3** | **-2** | **-2** |

---

## Weighted Pugh Score

| Criterion | Weight | A | B Score | B W×S | C Score | C W×S | D Score | D W×S |
|-----------|:------:|:-:|:------:|:-----:|:------:|:-----:|:------:|:-----:|
| C1 | 17.5% | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| C2 | 14.9% | 0 | -1 | -14.9% | 0 | 0 | 0 | 0 |
| C3 | 14.0% | 0 | 0 | 0 | 0 | 0 | -1 | -14.0% |
| C4 | 10.8% | 0 | -1 | -10.8% | 0 | 0 | 0 | 0 |
| C8 | 8.0% | 0 | 0 | 0 | -1 | -8.0% | 0 | 0 |
| C10 | 6.0% | 0 | -1 | -6.0% | -1 | -6.0% | -1 | -6.0% |
| **Total** | | **0** | | **-31.7%** | | **-14.0%** | | **-20.0%** |

---

## Analysis & Decisions

### Concept D — ELIMINATE

| Factor | Assessment |
|--------|-----------|
| Pugh net | -2 (tied with C) |
| Weighted | -20.0% |
| C8 (fallback) | 0 (pass) — not eliminated by C8 rule |
| BUT additional: | |
| PC Score | **2.5/6** — worst commonality. Breaks N12 sharing. |
| Recoil risk | COTS slewing drive NOT designed for 50 kN weapon recoil. Would require expensive validation or custom modification. |
| V1 interface | Changes pedestal bolt pattern → not backward-compatible with 300 V1 mounts. |

**Decision: ELIMINATE Concept D.** Negative on Group A + worst ICDM commonality + highest technical risk. No compensating advantage justifies keeping it.

### Concept B — RETAIN (marginal)

| Factor | Assessment |
|--------|-----------|
| Pugh net | -3 (worst) |
| Weighted | -31.7% (worst) |
| C8 | 0 (pass) |
| Reason to retain | Maximum PARTS commonality (identical motor module both axes). If sector gear backlash and cost issues can be resolved in firming-up, B could improve. |

**Decision: RETAIN Concept B for CSR evaluation** — but flagged as weakest. The "identical module both axes" advantage is strategically valuable for production simplification.

### Concept C — RETAIN

| Factor | Assessment |
|--------|-----------|
| Pugh net | -2 |
| Weighted | -14.0% |
| C8 | -1 ⚠️ (flagged — actuator manual fallback is worse than A) |
| Reason to retain | Independent of V1 elevation mechanism. Proven in other domains. If clutch integration is solved, C is robust. |

**Decision: RETAIN Concept C for CSR evaluation** — C8 risk must be addressed in firming-up.

### Concept A — DATUM (strongest)

**Concept A dominates on all Group A criteria.** Zero negatives. Highest N12 commonality. Lowest estimated BOM.

---

## Pugh Summary

| Concept | Net Score | Weighted | Status |
|---------|:---------:|:--------:|:------:|
| **A "Pinion-Worm"** | **0 (datum)** | **0** | ✅ **PROCEED** |
| B "Pinion-Sector" | -3 | -31.7% | ⚠️ PROCEED (weakest) |
| C "Pinion+LinAct" | -2 | -14.0% | ⚠️ PROCEED (C8 risk) |
| D "Integrated Drive" | -2 | -20.0% | ❌ **ELIMINATED** |

**3 concepts proceed to firming-up and CSR-weighted Group B evaluation.**

---

*BC Pugh Screening | ICDM Group A | 4→3 concepts | helix-concept-generate v3.1 | 2026-04-12*
