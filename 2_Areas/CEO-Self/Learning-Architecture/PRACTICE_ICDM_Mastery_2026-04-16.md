---
created: 2026-04-16
updated: 2026-04-16
type: practice-plan
status: active
tags: [#type/sop, #status/active, #pahl, #meta]
method: ICDM (Hari & Weiss, Technion/RAFAEL 1996)
duration: 6 weeks (2026-04-16 → 2026-05-28)
hours: ~14h total (~2.3h/week, 3 sessions/week)
anchor-project: VN-CUAV-SIM-001 LITE-PA2
physical-gate: 2026-05-07 (SS1 PoC bench test)
---

# ICDM Mastery — 6-Week Practice Plan

> **Anchor:** VN-CUAV-SIM-001 LITE-PA2 (just completed ICDM pipeline B0→BE)
> **Reference:** `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_ICDM_Conceptual_Design_Method_2026-03-26.md`
> **NLM notebook:** `icdm` (11 sources, 80% Tier S/A)
> **Galaxy notes:** [[Two-Stage Evaluation Law]] · [[DSO Pre-Ranking]]

---

## Proficiency Baseline (2026-04-16)

| Step | Name | Proficiency | Target |
|---|---|:-:|:-:|
| 1 | Identify Customers & Needs | 🟢 4/5 | 4/5 |
| 2 | VOC → Product Definition (EQFD+CSR+TVDT) | 🟢 3.5/5 | 4.5/5 |
| 3 | Abstraction & Functional Analysis | 🟢 4/5 | 4/5 |
| 4 | Create Solution Principles (TRIZ+Morpho) | 🟢 4/5 | 4/5 |
| 5 | Select Evaluation Criteria (Group A/B) | 🟡 3/5 | **4/5** |
| 6 | Synthesize Primary Concepts (**DSO**) | 🔴 2/5 | **4/5** |
| 7 | Evaluate Primary Concepts (Pugh Group A) | 🟡 3/5 | **4/5** |
| 8 | Design-Arch-Analyze-Improve (**CFMA/CDTC/RTA/Roobustool**) | 🔴 2/5 | **4/5** |
| 9 | Final Concept Selection (**DQM**) | 🟡 3/5 | **4/5** |
| 10 | Project Launch (presentation) | 🔴 1/5 | **3/5** |

---

## 3 Topics

| Topic | Steps | Focus |
|---|---|---|
| **A** — DSO + Two-Stage Evaluation | 5-6-7 | Group A/B criteria, DSO pre-ranking, Pugh with CSR |
| **B** — Step 8 Full Tool Suite | 8 | CFMA (deepen) + CDTC + RTA + Roobustool |
| **C** — DQM + Project Launch | 9-10 | DQM quantitative scoring + management presentation |

---

## Schedule

### Week 1 (2026-04-16 → 2026-04-22) — Foundation + Separation

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **A1 — DSO Pre-Ranking on SS1 Morpho** | 30m | ☐ | /5 | Rank WPs: Performance×Risk, re-sort, check C4 prediction |
| Wed | **B1 — Roobustool Checklist on LITE C4** | 20m | ☐ | /5 | 5Q illegitimate use + 5Q upgrade. 1-page assessment |
| Fri | **C1 — CSR Function Construction** | 25m | ☐ | /3 | Draw 3 CSR curves (A1,A2,A3) from scratch, compare to ICDM BB |

### Week 2 (2026-04-23 → 2026-04-29) — Foundation (variation)

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **C1v — CSR on 3 NEW criteria (A4-A6)** | 25m | ☐ | /3 | Swap time, Noise, Maintainability |
| Wed | **A1v — DSO on SS2 Visual Display morpho** | 30m | ☐ | /5 | Different subsystem, same method |
| Fri | **B1v — Roobustool on C3 Upgrade concept** | 20m | ☐ | /5 | Compare robustness C3 vs C4 |

**🔧 PHYSICAL (Week 2):** Order solenoid (Ledex STA-12 or equiv) — real vendor quote validates CDTC

### Week 3 (2026-04-30 → 2026-05-06) — Application

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **A2 — Full DSO + Pugh on FIXED-PA8** | 45m | ☐ | Y/N | Define Group A for FIXED, DSO pre-rank, Pugh screen |
| Wed | **B2 — CDTC on LITE C4** | 35m | ☐ | Y/N | Pareto 80/20, top 3 cost drivers, confidence intervals |
| Fri | **C2 — DQM Full Scoring (no peeking)** | 40m | ☐ | Y/N | 4 concepts, linear + threshold CSR, compare to BC |

**🔧 PHYSICAL (Week 3):** Bench-test solenoid pulse with oscilloscope — real force curve → validates CSR-1

### Week 4 (2026-05-07 → 2026-05-13) — Application + Cross-Connection

⚠️ **2026-05-07 = Physical gate SS1 PoC** — bench data feeds DQM practice

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **B3 — RTA on LITE C4** | 35m | ☐ | Y/N | Info gap 0-5 per SS, design cycles, time-to-market |
| Wed | **C2v — DQM on FIXED variant** | 40m | ☐ | Y/N | New variant, same DQM method |
| Fri | **A2v — DSO + Pugh on FULL-PA6** | 45m | ☐ | Y/N | Hardest variant — 360° multi-station |

**🔧 PHYSICAL (Week 4):** CNC cradle prototype start at PX2 — validates CDTC mfg cost

### Week 5 (2026-05-14 → 2026-05-20) — Integration

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **A3 — Gate Review Defense (no notes, 30m timer)** | 45m | ☐ | Y/N | Defend C4 over C2 to skeptical engineer |
| Wed | **B4 — Full Step 8 Suite on FULL-PA6** | 60m | ☐ | Y/N | CFMA + CDTC + RTA + Roobustool in 1 report |
| Fri | **C3 — Step 10 Project Launch Presentation** | 60m | ☐ | Y/N | 10-slide deck for LITE C4 → could present to Viettel? |

**🔧 PHYSICAL (Week 5):** Elastomer bumper test (Shore 60A sample) — validates C4 R3 pulse tail

### Week 6 (2026-05-21 → 2026-05-28) — Integration (no new content)

| Day | Drill | Time | Status | Score | Notes |
|---|---|:-:|:-:|:-:|---|
| Mon | **Review weakest topic** from Weeks 1-5 | 30m | ☐ | | Re-do lowest-scored drill |
| Wed | **Full ICDM Steps 5-10 on VN-USV-SS-001** | 90m | ☐ | Y/N | Real upcoming project — immediate application |
| Fri | **Galaxy note extraction** | 30m | ☐ | +N notes | What changed in thinking? 3-question gate |

---

## Scoring Legend

- Foundation drills: numerical score (matches / total)
- Application drills: Y/N (completed correctly in time?)
- Integration drills: Y/N (could you defend it to a skeptical engineer?)
- Physical drills: ✅ done / ❌ skipped (track convergence with SS1 PoC gate)

---

## Physical × Analytical Convergence

| Physical Milestone | Date | Feeds Drill | ICDM Step |
|---|---|---|---|
| Solenoid procurement | Wk 2 | B2 CDTC (real quote) | Step 8 |
| Bench-test solenoid pulse | Wk 3 | C2 DQM (real CSR-1 data) | Step 9 |
| CNC cradle prototype | Wk 4 | B2 CDTC (real mfg cost) | Step 8 |
| Elastomer bumper test | Wk 5 | B4 Roobustool (real robustness) | Step 8 |
| **SS1 PoC physical gate** | **2026-05-07** | **All drills get real data** | **Steps 7-9** |

---

## Weekly Reflection (fill after Friday session)

### Week 1
- What I practiced:
- What I got wrong:
- What surprised me:
- Galaxy candidate?

### Week 2
- What I practiced:
- What I got wrong:
- What surprised me:
- Galaxy candidate?

### Week 3
- What I practiced:
- What I got wrong:
- What surprised me:
- Galaxy candidate?

### Week 4
- What I practiced:
- What I got wrong:
- What surprised me:
- Physical gate result:
- Galaxy candidate?

### Week 5
- What I practiced:
- What I got wrong:
- What surprised me:
- Galaxy candidate?

### Week 6
- What I practiced:
- Weakest topic identified:
- VN-USV-SS-001 application result:
- Galaxy notes created:

---

## Post-Plan Assessment (fill after Week 6)

| Step | Before | After | Δ |
|---|:-:|:-:|:-:|
| 5 Select Eval Criteria | 3/5 | /5 | |
| 6 DSO Synthesis | 2/5 | /5 | |
| 7 Pugh Group A | 3/5 | /5 | |
| 8 CFMA/CDTC/RTA/Roobustool | 2/5 | /5 | |
| 9 DQM | 3/5 | /5 | |
| 10 Project Launch | 1/5 | /5 | |

**Target:** All ≥4/5 except Step 10 (≥3/5).
**Next:** If target met → apply ICDM to VN-USV-SS-001 Phase 2 for real. If not → repeat weak drills for 2 more weeks.
