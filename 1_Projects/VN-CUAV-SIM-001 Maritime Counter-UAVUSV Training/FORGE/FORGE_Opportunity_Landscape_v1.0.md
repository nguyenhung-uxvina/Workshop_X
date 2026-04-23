---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active]
method: ODI (Outcome-Driven Innovation)
source: FORGE_Job_Map_v1.0.md §4-§5
pipeline: forge-job-map → ICDM Step 1.5 input
version: 1.0
---

# FORGE Opportunity Landscape — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Source:** FORGE Job Map v1.0 §4-§5 (extracted to standalone)
**Method:** Opp Score = Importance + MAX(Importance - Satisfaction, 0)
**Baseline:** "Current solution" = bắn thật trên trường bắn + no simulator
**Validation:** AI-estimated — CEO MUST validate with 3-5 operator interviews

---

## 1. FULL OPPORTUNITY RANKING (37 scored outcomes)

| Rank | ID | Outcome (abbreviated) | Step | Imp | Sat | Opp Score |
|:----:|:--:|----------------------|:----:|:---:|:---:|:---------:|
| 1 | O-29 | Ballistic trajectory accuracy | 5 | 4.8 | 1.2 | **8.4** |
| 2 | O-36 | Swarm simultaneous targets | 5 | 4.7 | 1.0 | **8.4** |
| 3 | O-30 | Hit/miss classification accuracy | 5 | 4.8 | 1.5 | **8.1** |
| 4 | O-10 | Independence from weather | 2 | 4.5 | 1.0 | **8.0** |
| 5 | O-34 | Ship motion effect on shooting | 5 | 4.5 | 1.0 | **8.0** |
| 6 | O-33 | Track fast small targets (FPV) | 5 | 4.8 | 1.8 | **7.8** |
| 7 | O-43 | Mixed UAV+USV attack defense | 5 | 4.6 | 1.2 | **7.8** |
| 8 | O-39 | Lead angle under ship motion | 5 | 4.5 | 1.2 | **7.8** |
| 9 | O-14 | Cost per training hour | 2 | 4.5 | 1.3 | **7.7** |
| 10 | O-59 | AAR replay | 8 | 4.3 | 1.0 | **7.6** |
| 11 | O-44 | Instructor aim visibility | 6 | 4.3 | 1.0 | **7.6** |
| 12 | O-42 | Night engagement | 5 | 4.3 | 1.0 | **7.6** |
| 13 | O-18 | Simulate swarm behavior | 3 | 4.5 | 1.5 | **7.5** |
| 14 | O-13 | Range independence | 2 | 4.2 | 1.0 | **7.4** |
| 15 | O-35 | Target behavior variety | 5 | 4.2 | 1.0 | **7.4** |
| 16 | O-40 | Crew sector coordination | 5 | 4.5 | 1.8 | 7.2 |
| 17 | O-56 | Objective scoring | 8 | 4.2 | 1.2 | 7.2 |
| 18 | O-47 | Pause for coaching | 6 | 4.0 | 1.0 | 7.0 |
| 19 | O-57 | Compare vs previous performance | 8 | 4.0 | 1.0 | 7.0 |
| 20 | O-58 | Identify weakest skill | 8 | 4.0 | 1.0 | 7.0 |
| 21 | O-38 | Recoil feedback realism | 5 | 4.2 | 1.5 | 6.9 |
| 22 | O-41 | IFF under stress | 5 | 4.0 | 1.2 | 6.8 |
| 23 | O-09 | Admin overhead reduction | 2 | 3.8 | 1.0 | 6.6 |
| 24 | O-45 | Detect systematic errors | 6 | 3.8 | 1.0 | 6.6 |
| 25 | O-32 | Latency trigger→feedback | 5 | 4.8 | 3.0 | 6.6 |
| 26 | O-37 | Avoid bad habits from sim | 5 | 4.5 | 2.5 | 6.5 |
| 27 | O-55 | Generate perf report | 8 | 3.8 | 1.2 | 6.4 |
| 28 | O-01 | Assess skill level fast | 1 | 3.8 | 1.5 | 6.1 |
| 29 | O-31 | Visual maritime environment | 5 | 4.0 | 2.0 | 6.0 |
| 30 | O-62 | Track long-term progress | 8 | 3.5 | 1.0 | 6.0 |
| 31 | O-16 | Create scenario fast | 3 | 3.5 | 1.2 | 5.8 |
| 32 | O-26 | Weapon mockup feel | 4 | 4.0 | 2.5 | 5.5 |
| 33 | O-17 | No coding for instructor | 3 | 3.5 | 1.5 | 5.5 |
| 34 | O-51 | Adapt to weakness | 7 | 3.5 | 1.5 | 5.5 |
| 35 | O-50 | Change difficulty mid-ex | 7 | 3.2 | 1.2 | 5.2 |
| 36 | O-24 | Boot to ready time | 4 | 3.3 | 1.5 | 5.1 |
| 37 | O-52 | Swap weapon modules | 7 | 3.0 | 1.5 | 4.5 |
| 38 | O-27 | Traverse resistance feel | 4 | 3.5 | 2.5 | 4.5 |
| 39 | O-08 | Decision to ready time | 2 | 3.0 | 1.5 | 4.5 |
| 40 | O-11 | Number of prep personnel | 2 | 2.8 | 2.0 | 3.6 |
| 41 | O-25 | Calibration steps | 4 | 2.5 | 2.0 | 3.0 |
| 42 | O-15 | Equipment damage risk | 2 | 2.5 | 3.0 | 2.5 |

---

## 2. UNDERSERVED TOP 15 — Innovation Targets

| Rank | ID | Outcome | Step | Opp | Variant Impact | Design Response |
|:----:|:--:|---------|:----:|:---:|---------------|----------------|
| 1 | O-29 | Ballistic trajectory accuracy | EXECUTE | **8.4** | All | V-SMASH 6DOF engine |
| 2 | O-36 | Swarm simultaneous targets | EXECUTE | **8.4** | All | 4-8 (LITE) → 50 (CORTEX) |
| 3 | O-30 | Hit/miss classification | EXECUTE | **8.1** | All | Collision volume 95%+ |
| 4 | O-10 | Weather independence | LOCATE | **8.0** | All | Indoor 24/7 |
| 5 | O-34 | Ship motion on shooting | EXECUTE | **8.0** | LITE/FULL | 2-DOF / shared deck |
| 6 | O-33 | Track fast FPV targets | EXECUTE | **7.8** | All | Scenario library |
| 7 | O-43 | Mixed UAV+USV defense | EXECUTE | **7.8** | All | Multi-target scenarios |
| 8 | O-39 | Lead angle + ship motion | EXECUTE | **7.8** | LITE/FULL | 6DOF ballistics |
| 9 | O-14 | Cost per training hour | LOCATE | **7.7** | All | ≤$5/h vs $250-1500/h |
| 10 | O-59 | AAR replay | CONCLUDE | **7.6** | All | 3D replay engine |
| 11 | O-44 | Instructor aim visibility | MONITOR | **7.6** | All | 10Hz aim trace |
| 12 | O-42 | Night engagement | EXECUTE | **7.6** | All | Day/dusk/night modes |
| 13 | O-18 | Simulate swarm behavior | PREPARE | **7.5** | FULL/CORTEX | 12-50 targets |
| 14 | O-13 | Range independence | LOCATE | **7.4** | All | No range needed |
| 15 | O-35 | Target behavior variety | EXECUTE | **7.4** | All | 5 UAV + 3 USV profiles |

### Distribution by Job Step

| Step | Count in Top 15 | % | Implication |
|------|:--------------:|:--:|-------------|
| EXECUTE | **9** | 60% | Core training realism = THE value driver |
| LOCATE | 3 | 20% | Logistics independence = strong secondary value |
| CONCLUDE | 1 | 7% | Assessment/AAR = emerging value |
| MONITOR | 1 | 7% | Instructor visibility |
| PREPARE | 1 | 7% | Swarm scenario creation |

---

## 3. OVERSERVED BOTTOM — Cost Reduction Candidates

| Rank | ID | Outcome | Step | Opp | Note |
|:----:|:--:|---------|:----:|:---:|------|
| 1 | O-15 | Equipment damage risk | LOCATE | **2.5** | Already low with sim |
| 2 | O-25 | Calibration steps | CONFIRM | **3.0** | NFC auto-detect solves |
| 3 | O-11 | Number of prep personnel | LOCATE | **3.6** | Already 1-2 people |
| 4 | O-27 | Traverse resistance feel | CONFIRM | **4.5** | Good enough with magnetic brake |
| 5 | O-52 | Swap weapon modules | MODIFY | **4.5** | < 5 min already acceptable |
| 6 | O-08 | Decision to ready time | LOCATE | **4.5** | Boot < 5 min fine |

**Insight:** Overserved outcomes are already well-addressed by the base simulator design. No over-engineering to cut — confirms clean architecture.

---

## 4. OPPORTUNITY MAP — Visual

```
                    IMPORTANCE
              LOW (2-3)    MED (3-4)    HIGH (4-5)
           ┌────────────┬────────────┬────────────┐
    LOW    │ O-15       │            │ O-37       │
   (2-3)   │ O-25       │            │ O-32       │
           │            │            │            │
SATISFACTION├────────────┼────────────┼────────────┤
    MED    │            │ O-26,O-27  │ O-31       │
   (1.5-2) │            │ O-16,O-17  │ O-33,O-38  │
           │            │ O-51       │ O-30       │
           ├────────────┼────────────┼────────────┤
    LOW    │ O-11       │ O-01,O-62  │★O-29,O-36 │
   (1-1.5) │            │ O-55,O-09  │★O-10,O-34 │
           │            │ O-50,O-24  │★O-43,O-39 │
           │            │ O-45       │★O-14,O-42 │
           │            │            │★O-59,O-44 │
           │            │            │★O-18,O-13 │
           │            │            │★O-35,O-40 │
           └────────────┴────────────┴────────────┘
                                     ↑ UNDERSERVED
                                       (innovate here)
```

**Sweet spot:** Bottom-right quadrant = HIGH importance + LOW satisfaction = maximum innovation opportunity. 15 outcomes clustered here — all addressable by simulation.

---

## 5. STRATEGIC IMPLICATIONS

### Strategy: DIFFERENTIATED

No competitor serves VN C-UAV/USV training at $50-70K. Top 15 underserved outcomes have Opp 7.4-8.4 because current alternative (live fire) **fundamentally CANNOT** serve them. Simulation is category-creating, not incremental.

### Innovation Target Groups (CEO-confirmed from Job Map §6)

| # | Target Group | Outcomes | DP Weight | Priority |
|---|-------------|----------|:---------:|:--------:|
| 1 | Ballistic accuracy + hit classification | O-29, O-30 | DP1 14.2% | **HIGH** |
| 2 | Swarm + mixed attack | O-36, O-43, O-18 | DP2 18.2% | **HIGH** |
| 3 | Ship motion effect | O-34, O-39 | DP3 7.9% | **MED** |
| 4 | Logistics independence | O-10, O-13, O-14 | DP9 8.9% | **MED** |
| 5 | Assessment + AAR | O-59, O-56, O-57 | DP7 11.1% | **HIGH** |

### Unscored Outcomes (26) — Assessment

26 outcomes lack Imp × Sat scores. These are lower-priority items not in the top opportunity landscape. Scoring deferred until customer validation interviews (3-5 instructor/gunner sessions).

---

*Extracted from FORGE Job Map v1.0 §4-§5. See HOQ Design Parameters for weight derivation.*
