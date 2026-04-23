---
created: 2026-04-16
updated: 2026-04-16
type: phase2-develop
variant: LITE-PA2
block: BC
pipeline: helix-concept-generate --icdm
---

# Block BC — Develop: Firming-Up + VDI 2225 + ICDM DQM (LITE-PA2)

**Input:** 4 concept variants from BB (C1 Baseline, C2 Fidelity, C3 Upgrade, C4 Cost-Optimized).

---

## Stage A — Pugh Screening (ICDM Group A Criteria, 7 criteria, 79.4% weight)

**Group A criteria** (from portfolio ICDM BE, re-scoped for LITE):

| ID | Criterion | Weight (LITE) | CSR curve |
|---|---|:-:|---|
| A1 | Training-transfer fidelity (recoil jolt) | 22% | Linear above 50% peak; step at 70% threshold |
| A2 | Unit cost ≤ LITE cap | 18% | Linear 100%@$50K → 0%@$100K |
| A3 | Response latency trigger→cue | 14% | Step: <50ms = 100%, >80ms = 0% |
| A4 | Weapon swap time | 10% | Linear 100%@<5s → 0%@60s |
| A5 | Compressor/noise envelope | 8% | Step: <70 dB = 100%, >85 dB = 0% |
| A6 | Maintainability (field) | 4% | Qualitative 1-5 |
| A7 | Safety envelope | 3.4% | Binary: pass/fail |
| **Total** | | **79.4%** | |

**Datum concept:** C1 (LITE Baseline).

### Pugh Matrix (+/-/S vs C1)

| Criterion | C1 (Datum) | C2 Fidelity | C3 Upgrade | C4 Cost-Opt |
|---|:-:|:-:|:-:|:-:|
| A1 Fidelity (22%) | S | **++** | **+** | + |
| A2 Cost (18%) | S | **- -** | - | **+** |
| A3 Latency (14%) | S | - | - | S |
| A4 Swap time (10%) | S | **++** | **++** | S |
| A5 Noise (8%) | S | **- -** | - | S |
| A6 Maintain (4%) | S | - | - | + |
| A7 Safety (3.4%) | S | - | S | S |
| **Σ+ (weighted)** | 0 | +54 | +42 | +22 |
| **Σ- (weighted)** | 0 | -55 | -34 | -4 |
| **Net** | **0** | **-1** | **+8** | **+18** |

**Pugh Result:**
- **C4 Cost-Optimized wins on paper** — cheapest + small fidelity lift, no swap penalty
- **C3 Upgrade close second** — fidelity lift + fast swap, modest cost
- **C2 Fidelity ties with C1** — fidelity wins cancelled by cost + noise penalties
- **C1 Baseline holds** — reference datum, no standout weakness

**Screening decision:** **All 4 concepts survive** — Pugh is too coarse for the fidelity/cost trade. Proceed to VDI 2225 with full scoring.

---

## Stage B — Firming-Up (CRUMPLE-S Method Selection per Concept)

Per P&B Firming-Up, for each surviving concept identify info gaps and apply methods.

### Gap Analysis

| Concept | Critical Info Gap | Method | Effort |
|---|---|---|:-:|
| C1 Baseline | Solenoid pulse-shape parameters (peak force × duration × decay) | **Bench calculation** + SPICE sim | L |
| C2 Fidelity | Compressor noise spectrum, air routing feasibility on small boat, duty cycle under sustained fire | **Rough layout sketch** + acoustic model + **vendor data Festo/SMC** | H |
| C3 Upgrade | Inertial hammer travel dynamics, return spring k, stopper wear rate | **Rough calc** + **prototype kit bench** | M |
| C4 Cost-Opt | Elastomer Shore hardness vs pulse reshape effect, aging curve | **Material datasheet** + tiny bench rig | L |

### Firming-Up Actions (BC-completed, low-effort items)

**C1 — Solenoid pulse calc:**
- Target: 40N peak, 25ms pulse, <5ms rise
- Ledex STA-12 series: 45N @ 24VDC, rise 3ms, decay 8ms → **PASS analytic**
- Capacitor bank: 1000µF @ 24V supplies pulse energy, recharge <50ms
- **Verdict:** C1 parameters feasible with COTS hardware

**C4 — Elastomer datasheet:**
- Shore 60A silicone, 10mm thick → pulse tail extension ~15ms, peak reduction ~8% (marginal — good)
- Aging: 2-3 yr at 25°C, <1 yr at >50°C cabin temperature
- **Verdict:** C4 feasible, elastomer replacement entered service manual

**C3 — Inertial hammer rough calc:**
- 0.5 kg mass, 50mm stroke, 3 m/s target → KE 2.25 J, impulse 1.5 Ns
- Solenoid driver: 100W peak, 15ms accel window → **borderline, needs bench test**
- Return spring: k=80 N/m, return time 80ms → **duty cycle 2 Hz max** (below 3 shots/sec target)
- **Verdict:** C3 parameters marginal — spring return limits firing cadence

**C2 — Pneumatic rough sizing:**
- Cylinder 25mm bore × 20mm stroke × 8 bar → impulse 4.9 Ns, fidelity ~80% target
- Air consumption: ~0.4 L/shot free air @ 8 bar → 2L reservoir = 5 shots before refill
- Compressor 0.8 kW (Stanley, Bambi quiet type ~68 dB) — still >50 dB crew-comm limit
- **Acoustic showstopper check:** Bambi quiet compressor 48-55 dB @ 1m sustained, valve exhaust 75 dB per shot
- **Verdict:** C2 technically feasible; compressor noise manageable with quiet unit + enclosure; valve exhaust still loud (needs muffler)

---

## Stage C — VDI 2225 Full Evaluation (Technical + Economic)

Per P&B 6.4.2 — 8-step VDI 2225: scoring 0-4, technical + economic axes.

### Technical Rating (ct) — 8 criteria

| Criterion | Weight | C1 | C2 | C3 | C4 |
|---|:-:|:-:|:-:|:-:|:-:|
| T1 Recoil fidelity (to real 12.7mm) | 0.25 | 1.5 | **3.6** | 2.7 | 2.1 |
| T2 Response latency | 0.15 | **4.0** | 2.8 | 2.3 | 4.0 |
| T3 Duty cycle (shots/sec sustained) | 0.10 | **4.0** | 1.8 | 2.0 | 4.0 |
| T4 Swap time (MWI) | 0.10 | 1.5 | **4.0** | **4.0** | 2.0 |
| T5 Noise envelope | 0.10 | **3.8** | 1.0 | 2.8 | **3.8** |
| T6 Safety envelope | 0.10 | **4.0** | 2.5 | **4.0** | **4.0** |
| T7 Maintainability | 0.10 | **3.5** | 2.0 | 2.8 | 3.2 |
| T8 Interface simplicity (to SS2-SS5) | 0.10 | **3.8** | 2.0 | 3.0 | **3.8** |
| **ct = Σ(w·score)/4** | | **0.758** | **0.645** | **0.721** | **0.765** |

### Economic Rating (ce) — 4 criteria

| Criterion | Weight | C1 | C2 | C3 | C4 |
|---|:-:|:-:|:-:|:-:|:-:|
| E1 BOM cost (SS1 block) | 0.40 | 3.5 | 0.8 | 2.0 | **4.0** |
| E2 NRE (tooling, test rigs) | 0.25 | **3.5** | 1.5 | 2.5 | 3.3 |
| E3 Unit assembly time | 0.20 | **3.8** | 2.0 | 2.8 | 3.5 |
| E4 Service cost (lifecycle) | 0.15 | **3.5** | 1.8 | 2.8 | 3.0 |
| **ce = Σ(w·score)/4** | | **0.873** | **0.345** | **0.613** | **0.905** |

### VDI 2225 Diagram (S-diagram: ct vs ce)

```
ct ↑
1.0 |
    |           C4● ● C1       ← ideal zone
0.75|          /   /
    |         /  ● C3
0.50|        /
    |   ● C2
0.25|  /
    | /
0.0 +------→ ce
    0.0  0.5  1.0
    (ct/ce = 1.0 line = ideal)
```

| Concept | ct | ce | ct/ce ratio | Distance from ideal (1,1) |
|---|:-:|:-:|:-:|:-:|
| **C4 Cost-Opt** | **0.765** | **0.905** | 0.845 | **0.253** (best) |
| **C1 Baseline** | **0.758** | **0.873** | 0.868 | **0.277** |
| C3 Upgrade | 0.721 | 0.613 | 1.176 | 0.475 |
| C2 Fidelity | 0.645 | 0.345 | 1.870 | **0.730** (worst) |

**VDI 2225 Rank:** C4 > C1 > C3 > C2

---

## Stage D — ICDM DQM (Design Quality Measurement, Group A+B, 98.2% weight)

ICDM DQM uses CSR (Customer Satisfaction Rating) functions, weighted by Group A (79.4%) + Group B (extended, 18.8%).

### DQM Satisfaction Scoring (0-100% per CSR curve)

| CSR | Weight | C1 | C2 | C3 | C4 |
|---|:-:|:-:|:-:|:-:|:-:|
| CSR-1 Fidelity peak | 0.22 | 40% | **85%** | 65% | 50% |
| CSR-2 Unit cost fit | 0.18 | **95%** | 30% | 70% | **100%** |
| CSR-3 Latency | 0.14 | **100%** | 80% | 70% | **100%** |
| CSR-4 Swap time | 0.10 | 40% | **100%** | **100%** | 50% |
| CSR-5 Noise | 0.08 | **95%** | 40% | 75% | **95%** |
| CSR-6 Maintain | 0.04 | 85% | 55% | 70% | 80% |
| CSR-7 Safety | 0.034 | **100%** | 75% | **100%** | **100%** |
| Group A subtotal | 0.794 | **75.5%** | 68.3% | 73.2% | **82.0%** |
| CSR-8..11 (Group B ext) | 0.188 | 72% | 65% | 70% | 75% |
| **DQM Total (Group A+B, 98.2%)** | | **75.0%** | **67.7%** | **72.6%** | **80.7%** |

**DQM Rank:** C4 (80.7%) > C1 (75.0%) > C3 (72.6%) > C2 (67.7%)

---

## Stage E — Weak-Spot Analysis & TRIZ Improvement

Per P&B 6.4 — identify weak spots in top concept(s), try TRIZ lifts.

### C4 (leader) weak spots

| Weak spot | TRIZ? | Lift available? |
|---|:-:|:-:|
| Fidelity only 50% (below 70% threshold if strict) | TRIZ-1 Segmentation, TRIZ-25 Self-service | **Try:** Add auto-tune routine that adapts pulse-shape per weapon type. Can lift CSR-1 to ~60-65%. |
| Swap time 50% (M3 taper+cam at 30s) | — | Already simple; no TRIZ lift without cost increase. |

### C1 weak spots
- Fidelity 40% — hardest structural limit (solenoid force ceiling)
- TRIZ-35 Parameter change: pulse shape already applied in C4/R3 (elastomer). No further pure-solenoid lift.

### **Key insight — C4 fidelity remains the binding issue**

C4's 50% fidelity is **below the 70% SC-2 training-transfer threshold**. Neither C1 nor C4 can cross this threshold with solenoid physics alone. **Only C2 (pneumatic) clears 70% convincingly.** C3 (inertial hammer) is marginal at 65%.

**This is the CEO decision point:** Is the 70% threshold a **hard sacred constraint** (SC-2), or is it aspirational?
- If **hard** → C2 wins on fidelity necessity, cost flex justified. DQM is misleading because CSR-1 linear curve doesn't capture the threshold step.
- If **soft** → C4 wins on DQM + VDI 2225 composite score.

**Proposed CSR-1 revision (CEO decision):**

Current CSR-1 = linear above 50%. Revised CSR-1 with **step at 70%**:
- Below 50%: 0%
- 50-70%: 30-60% satisfaction (linear)
- **Step: above 70% = 90-100% satisfaction**

With revised CSR-1:
| Concept | Revised CSR-1 score | DQM recalc |
|---|:-:|:-:|
| C1 | 15% (below 50%) | ↓ to 70.0% |
| C2 | **95% (above 70%)** | **↑ to 70.9%** |
| C3 | 55% (60% peak, below 70%) | ↓ to 70.4% |
| C4 | 30% (50%, at floor) | ↓ to 76.7% |

**With threshold CSR:** C4 (76.7%) still leads on composite DQM, but C2 (70.9%) closes the gap. The binding question becomes: does CEO trust the DQM or the SC-2 threshold?

---

## Stage F — 4-Concept Handoff Summary

| Concept | VDI Rank | DQM (linear) | DQM (threshold) | Binding Risk |
|---|:-:|:-:|:-:|---|
| **C4 Cost-Opt** (R3+M3) | **1** | **80.7%** | **76.7%** | Fidelity 50% below threshold |
| **C1 Baseline** (R1+M1) | 2 | 75.0% | 70.0% | Fidelity 40% far below threshold; swap time 60s |
| **C3 Upgrade** (R2+M2) | 3 | 72.6% | 70.4% | Fidelity 65% marginal; duty cycle limited |
| **C2 Fidelity** (R4+M2) | 4 | 67.7% | **70.9%** | **Only one clearing 70% threshold**; cost flex; noise/pressure cert |

---

## 4. Key Findings

1. **VDI 2225 ranks C4 > C1 > C3 > C2** on composite technical+economic (C2 hit hard by cost + noise).
2. **ICDM DQM (linear) ranks C4 > C1 > C3 > C2** — same order.
3. **Under threshold CSR (SC-2 at 70%), C2 is the ONLY concept that clears the training-transfer threshold.**
4. **Binding CEO question:** Is SC-2 70% hard or soft?
   - Hard → **C2 Fidelity (pneumatic)** wins by necessity, cost flex justified
   - Soft → **C4 Cost-Optimized** wins on composite DQM
5. **Physical gate 2026-05-07 must bench-test solenoid fidelity** to provide empirical floor — without it, this decision is assumption-based.
6. **Recommended pre-BE action:** Bench-test C1 baseline solenoid IMMEDIATELY (parallel to Phase 3 kickoff) to discriminate C1/C3/C4 fidelity reality. If all solenoid paths <60% measured, CEO should commit to C2.
