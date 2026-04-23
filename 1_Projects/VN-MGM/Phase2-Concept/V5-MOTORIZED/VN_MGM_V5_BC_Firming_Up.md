---
created: 2026-04-12
updated: 2026-04-12
type: firming-up
block: BC2
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
method: "CRUMPLE-S Method-Guided Firming Up (P&B 6.5.1)"
iteration: 1st
status: PARTIAL — Offload tasks complete, Core tasks pending (bench test)
concepts: 3 (A "Pinion-Worm", B "Pinion-Sector", C "Pinion+LinAct")
tasks_total: 11
tasks_offload_complete: 6
tasks_core_pending: 3 (L-001, R-001, U-001)
feeds_to:
  - VN_MGM_V5_VDI_2225_Evaluation.md (BC4)
---

# BC2 Firming-Up Results — VN-MGM V5-MOTORIZED (Iteration 1)

## Method Applied

CRUMPLE-S method-guided firming up per P&B 6.5.1. Gap diagnosis → method selection → task briefs → COD assignment → execution.

**Offload tasks (AI):** 6 complete (C-001 to C-005, E-001)
**Core tasks (CEO):** 3 pending (L-001: V1 worm measurement, R-001: envelope sketch, U-001: Phase A bench test)

---

## Firming-Up Results Table

| Property | Concept A "Pinion-Worm" | Concept B "Pinion-Sector" | Concept C "Pinion+LinAct" | Method | Confidence |
|----------|:-----------------------:|:------------------------:|:------------------------:|:------:|:----------:|
| **T1. Traverse speed** | 90°/s (calc) | 90°/s (same) | 90°/s az; el TBD | C (calc) | H |
| **T2. Reliability (MTBF)** | HIGH (worm proven in V1) | LOW (sector = untested in recoil) | AVERAGE (actuator proven, not in recoil) | L (benchmark) | M |
| **T3. Recoil survival 50 kN** | **PENDING** — calc: EPDM 60-80% attenuation (feasible) | **PENDING** — same EPDM + sector tooth SF=0.88 FAIL | **PENDING** — same EPDM + actuator recoil unknown | C+U (calc done, test pending) | L |
| **T4. Recoil recovery ≤0.5s** | **PENDING** — bench test KG-2 | **PENDING** — same | **PENDING** — same | U (test pending) | — |
| **E1. Size envelope** | **PENDING** — R-001 sketch | **PENDING** | **PENDING** | R (pending) | — |
| **E2. Weight** | **112 kg** total | **119 kg** total (+7 vs A) | **113 kg** total | C (BOM sum) | M (±15%) |
| **E3. Service life** | HIGH (worm = V1 proven) | **LOW** — sector SF=0.88 → fatigue risk | AVERAGE (actuator rated cycles) | C+L | M |
| **S1. Safety (fallback)** | EM clutch concept OK; drag TBD (KG-7) | Same as A | **573 N back-drive = 11× target** ❌ | C (calc) | H |
| **S2. Manual feel** | **PENDING** — bench test KG-7 | **PENDING** | FAILS — calc confirms > 50 N | U+C | M-H |
| **S3. Production** | COTS + standard CNC | Custom sector gear CNC (specialty) | COTS actuator + custom clutch adapter | L+E | H |
| **M1. Unit cost** | $7,000 (CDTC) | $8,000 (CDTC) | $6,500-8,000 (actuator $150-800) | E+C | M |
| **M2. Dev cost (NRE)** | $3-5K | $5-8K (+sector tooling) | $4-6K (est) | E | M |
| **V1. VN mfg** | HIGH (standard) | LOW (sector = specialty CNC) | HIGH (COTS assembly) | L | H |
| **V2. Supply chain** | HIGH (BLDC + NMRV = available) | AVERAGE (+ custom sector) | AVERAGE (actuator import 2-8 wk) | E | H |

### Value Format Note (P&B 6.5.2)
- Numbers used where data is reliable (weight, cost)
- Verbal estimates (HIGH/AVG/LOW) used where uncertain (reliability, service life)
- Pending items marked explicitly — bench test required

---

## Key Findings from Firming-Up

### Concept C — SHOW-STOPPER FOUND

**C-004 (ball screw back-drive) reveals fundamental C8 failure:**
- Back-drive force = 573 N — **11× the 50 N target** (S-06)
- Even with spring counterbalance: ~115 N — still 2× too high
- No COTS actuator solves this without accepting degraded manual mode
- This validates Pugh's -1 on C8 and ELEVATES it to a potential elimination

**Recommendation:** Concept C should be **eliminated or scored 0-1/4 on C8** in VDI 2225. The C8 weak spot is structural — cannot be "fixed" without changing the elevation WP entirely.

### Concept B — STRUCTURAL RISK CONFIRMED

**C-002 (sector tooth stress) reveals marginal-to-failing safety factor:**
- Lewis bending SF = 0.88 at 10 kN tangential — **below 1.0**
- Hertz contact SF = 0.9-1.1 — marginal
- Fix options exist (M3 module, wider face, harder steel) but each adds cost/weight/deviation from V1

**C-003 (sector clamp) is OK:** SF = 2.18 with 4× M8 10.9 bolts + Nordlock. Not the problem.

**Conclusion:** B's risk is in the TEETH, not the clamp. The production simplification advantage (identical modules) is offset by structural risk.

### Concept A — STRONGEST (confirmed by firming)

- EPDM attenuation feasible (60-80% predicted, needs bench test)
- Lightest (112 kg vs 119 for B)
- Lowest cost ($7K vs $8K for B)
- Fewest knowledge gaps (5 vs 7 for B)
- All remaining unknowns resolve in shared bench test (U-001)

---

## Remaining Unknowns

| Property | Concept(s) | Why unresolved | Impact on VDI 2225 | Closing method |
|----------|-----------|----------------|-------------------|---------------|
| T3. Recoil attenuation actual % | ALL | Needs physical test (EPDM + real recoil) | Can score 0-4 range estimated, but test confirms | U-001 bench test |
| T4. PID recovery time | ALL | Needs servo commissioning + tuning | Cannot score without data | U-001 bench test |
| S2. Manual feel (clutch drag) | A, B | Needs human test | Rough estimate possible (A/B OK, C fails) | U-001 bench test |
| E1. Envelope fit | ALL | Needs sketch/CAD layout | Probably OK but not confirmed | R-001 CEO sketch |
| KG-3: V1 worm ratio | A only | Needs physical measurement | Affects V1 worm extension design | L-001 CEO measurement |

### Iteration Decision

**ITERATION NEEDED? Conditional NO.**

- 5 gaps remain, all solvable by Phase A Bench Test (U-001) + 2 CEO tasks (L-001, R-001)
- VDI 2225 can proceed WITH the firmed data for differentiating concepts (C eliminated or scored low on C8, B scored low on tooth stress)
- Bench test results will UPDATE the VDI 2225 scores post-hoc (iteration within BC, not a separate F0 cycle)

---

## VDI 2225 Readiness Assessment

```
VDI 2225 READINESS CHECK:
- [x] All high-weight criteria can be scored (0-4) for all concepts
      C1 (speed): scoreable — all ~90°/s (tie)
      C2 (accuracy): scoreable — A=best, B=sector backlash, C=actuator OK
      C3 (corrosion): scoreable — all IP65 baseline (tie)
      C8 (fallback): NOW SCOREABLE — A=best, B=OK, C=FAIL (573N)
      C10 (cost): scoreable — A=$7K, B=$8K, C=$7K
- [x] Cost estimates available (±30% sufficient)
- [x] No safety-critical property is UNKNOWN
      → T3 (recoil) has calc estimate, bench test will validate
      → C8 (fallback) is quantified: C FAILS, A/B pass
- [x] Concepts are differentiable (NOT identical scores)
      → C eliminated or scored 0 on C8
      → B scored low on structural risk (tooth SF<1)
      → A dominates on all firmed dimensions

VERDICT: READY for VDI 2225 — proceed with caveats on T3/T4 pending bench test.
```

---

## NEW IDEAS LOG

(P&B 6.5.3: "a completely new idea for a working principle might emerge while making a rough layout")

- **No new WPs discovered** during Offload task execution
- Note: R-001 (CEO envelope sketch) and U-001 (bench test) may generate new ideas during physical work — log in design journal when they occur

---

*BC2 Firming-Up | CRUMPLE-S Method-Guided | 6 Offload complete, 3 Core pending | helix-p2-firmup v1.0 | 2026-04-12*
