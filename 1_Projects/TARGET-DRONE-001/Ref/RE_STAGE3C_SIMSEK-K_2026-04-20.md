---
created: 2026-04-20
type: re-concept-evaluation
source: /reverse-engineering --mode mecha --stage 3C
project: TARGET-DRONE-001
product: V5-JET-VN
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
winner: Concept D (Phased Sovereignty)
tags: [#type/re-report, #status/completed]
---

# RE STAGE 3C: VDI 2225 CONCEPT EVALUATION — V5-JET-VN
## Formal Concept Selection | 2026-04-20

---

## EVALUATION CRITERIA (Defense RE Weights)

| # | Criterion | Weight | Sub-Criteria |
|---|-----------|--------|-------------|
| 1 | Technical Performance | 35% | T1 Aero/Kin (10%), T2 Signature (10%), T3 Control (10%), T4 Recovery (5%) |
| 2 | Manufacturability | 25% | M1 Airframe (10%), M2 Propulsion (10%), M3 Electronics (5%) |
| 3 | Sovereignty | 20% | S1 ITAR/EUC (8%), S2 Datalink (6%), S3 Software IP (6%) |
| 4 | Time to IOC | 10% | TM1 Months to operational |
| 5 | Cost | 10% | Economic value (Re axis) |

---

## SCORING MATRIX (0-4 scale)

| Sub-Criterion (Weight) | A: Sovereignty | B: Expendable | C: Rapid | D: Phased |
|------------------------|:-:|:-:|:-:|:-:|
| T1 Aero/Kin (10%) | 3 | 2 | 3 | 3 |
| T2 Signature (10%) | 4 | 2 | 3 | 3 |
| T3 Control (10%) | 3 | **1** | 3 | **4** |
| T4 Recovery (5%) | 3 | **0** | 3 | 3 |
| M1 Airframe (10%) | 3 | 4 | 2 | 3 |
| M2 Propulsion (10%) | 2 | **1** | 3 | 3 |
| M3 Electronics (5%) | 3 | 3 | **1** | 2 |
| S1 ITAR/EUC (8%) | 3 | 4 | **1** | 2 |
| S2 Datalink (6%) | 4 | 4 | **1** | 3 |
| S3 Software IP (6%) | 4 | 3 | 2 | 4 |
| TM1 Time (10%) | **1** | 3 | 4 | 3 |

---

## VDI 2225 RESULTS

### Technical Value (Rt)
| Concept | Weighted Score | Rt (%) |
|---------|--------------|--------|
| **D: Phased Sovereignty** | **2.73 / 3.60** | **75.8%** |
| A: Sovereignty-First | 2.62 / 3.60 | 72.7% |
| C: Rapid Fielding | 2.26 / 3.60 | 62.7% |
| B: Balanced Expendable | 2.19 / 3.60 | 60.8% |

### Economic Value (Re)
| Concept | Unit Cost (midpoint) | Re |
|---------|---------------------|-----|
| B: Expendable | $42.5K | **1.00** |
| A: Sovereignty | $72.5K | 0.58 |
| D: Phased | $72.5K (→$62.5K mature) | 0.58 |
| C: Rapid | $97.5K | 0.43 |

### S-Diagram Position
```
Rt ↑
1.0 |
    |
0.8 |          ★ D (0.76, 0.58)
    |        ★ A (0.73, 0.58)
0.7 |
    |     ★ C (0.63, 0.43)        ★ B (0.61, 1.00)
0.6 |.........VIABILITY THRESHOLD...........
    |
0.0 +────────────────────────────────→ Re
    0.0        0.5        1.0
```

**Concept D occupies the optimal "Balanced Value" zone** (highest Rt, acceptable Re).
Concept B is cheapest but dangerously close to viability threshold (0.608 < 0.65 recommended).

---

## SENSITIVITY ANALYSIS (3 Scenarios)

| Scenario | A | B | C | D | Winner |
|----------|---|---|---|---|--------|
| **Baseline** (35/25/20/10/10) | 2nd | 3rd | 4th | **1st** | D |
| **Tech-First** (50/20/10/10/10) | 2nd | 4th | 3rd | **1st** | D |
| **Sovereignty-First** (20/20/40/10/10) | **1st** | 3rd | 4th | 2nd | A |
| **Cost-First** (20/20/10/40/10) | 3rd | **1st** | 4th | 2nd | B |

**Robustness: Concept D wins 2/4, 2nd in remaining 2.** Most robust overall.

---

## WEAK SPOTS (Scores 0-1)

| Concept | Weak Spot | Score | Severity | Mitigation |
|---------|-----------|-------|----------|-----------|
| A | Time to IOC | 1 | HIGH | Adopt D's phased approach |
| B | Recovery system | **0** | FATAL | No recovery = no peacetime reusability |
| B | Control latency | **1** | HIGH | KingTech FADEC fails under MIL EMI/vibration |
| B | Propulsion integration | **1** | HIGH | Commercial ECU + ArduPilot = compressor stall risk |
| C | Electronics assembly | 1 | MEDIUM | Zero domestic PCB learning |
| C | ITAR/EUC freedom | **1** | HIGH | European EUC dependency |
| C | Datalink autonomy | **1** | HIGH | Microhard import = no sovereignty |

**Concept B has 3 critical weak spots (one FATAL). Not viable for reusable target role.**
Concept B may survive ONLY as separate expendable/kamikaze-only variant (different product).

---

## SOLUTION-DETERMINING SUB-FUNCTION

**SF-09: Flight Control Software Architecture (PX4 vs ArduPilot)**
coupled with **SF-02: FADEC CAN-Bus Integration**

**Why this determines the winner:**
- PX4 (POSIX on FreeRTOS) = isolated proprietary modules for VN kamikaze logic
- ArduPilot (monolithic ChibiOS) = harder to isolate domestic IP from GPL
- FADEC integration latency (<10ms) separates viable from non-viable concepts
- Concept D's PX4 + PBS TJ40 (aerospace-grade ECU) = lowest integration risk

---

## FINAL RANKING

| Rank | Concept | Rt | Re | Robustness | Recommendation |
|------|---------|----|----|-----------|---------------|
| **1** | **D: Phased Sovereignty** | 0.758 | 0.58 | 2 wins, 2 × 2nd | **SELECT** |
| 2 | A: Sovereignty-First | 0.727 | 0.58 | 1 win, 2 × 2nd | Final target state (=D at maturity) |
| 3 | B: Balanced Expendable | 0.608 | 1.00 | 1 win (cost-only) | Separate expendable variant only |
| 4 | C: Rapid Fielding | 0.627 | 0.43 | 0 wins | Eliminated |

---

## CONCEPT D ARCHITECTURE SUMMARY

**V5-JET-VN-D "Phased Sovereignty"**

| Phase | Timeline | Engine | FCC | Datalink | Airframe | Domestic % | Unit Cost |
|-------|----------|--------|-----|----------|----------|-----------|-----------|
| Phase 1 (IOC) | Mo 0-18 | TEI-TJ90 (TAI import) | Pixhawk 6X / PX4 | Microhard (import) | VARTM composite (VN) | 40% | $85-95K |
| Phase 2 (Transition) | Mo 18-36 | TEI-TJ90 (TAI assembly in VN) | VN custom FCC / PX4 | VN SDR v1.0 | VARTM (optimized) | 60% | $70-80K |
| Phase 3 (Sovereign) | Mo 36-60 | PBS TJ40 or TEI-TJ90 (VN assembly) | VN FCC / PX4 | VN SDR v2.0 (anti-jam) | VARTM (production) | 80% | $55-70K |

**Aligns perfectly with COMPARE mode Option 3 Hybrid decision + TAI partnership roadmap.**

---

## CEO DECISION REQUIRED (Core — non-delegable)

```
SELECT CONCEPT: D (Phased Sovereignty)
  □ APPROVED — proceed to Stage 3D (Divergence Map)
  □ MODIFY — specify changes
  □ REQUEST — additional concepts or analysis
```
