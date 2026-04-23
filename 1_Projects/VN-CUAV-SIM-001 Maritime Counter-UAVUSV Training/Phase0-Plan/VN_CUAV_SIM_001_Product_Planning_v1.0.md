---
created: 2026-04-09
updated: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-CUAV-SIM-001
mode: SOLO (retroactive — project initiated before /plan skill existed)
status: approved
gate0: PASS
review_plan: COMPLIANT (7 PASS + 1 accepted FLAG)
tags: [#type/project, #status/active]
---

# Product Planning — VN-CUAV-SIM-001 Maritime C-UAV/USV Training System

---

## 1. Stimulus Classification (Step 1)

| Source | Stimulus | Evidence |
|--------|----------|---------|
| **Environment** (primary) | FPV drone + explosive USV = new maritime threat (Ukraine-Russia, Red Sea, Houthi) | [RE: VN_CUAV_SIM_001_Reverse_Engineering.md §1.1] |
| **Market** (secondary) | Zero VN C-UAV/USV simulator. Bắn thực $250-1500/h vs sim $5/h | [RE: Competitor RE §9 Gap Analysis] |
| **Company** (tertiary) | WX có VN-12.7MM-SIM platform + V-SMASH ballistic engine + Unity dev | [WX: VN-12.7MM-SIM, V-SMASH] |

---

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase
Product category (C-UAV/USV training sim): **Introduction** globally. VN market: **zero sản phẩm nội địa** — first mover advantage.

### 2b. Product-Market Matrix (Ansoff)
**Product Development (MED risk)** — new product cho existing military customers. Risk giảm vì customer relationship + technology base proven.

### 2c. Company Competence Assessment

| Dimension | WX Current | Gap | Action |
|-----------|-----------|-----|--------|
| Technical | CNC ✓, Unity 3D ✓, electronics ✓, Hailo-8 AI ✓ | Maritime visual scene rendering | Unity asset store + custom dev |
| Market | HQ VN training systems ✓ | Chưa có mối HQ phòng không tầm thấp | BD campaign needed |
| Financial | Self-funded R&D, target margin ≥50% | OK | ✓ |
| Production | Small batch CNC + assembly | GPU + projectors = import-heavy | DfLC Phase 3 |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence |
|-----------|-----|---------|
| Weapon mockup (CNC aluminum) | 6 | VN-12.7MM-SIM prototype |
| Encoder + trigger electronics | 6 | VN-12.7MM-SIM proven |
| Recoil simulation (solenoid) | 5 | VN-12.7MM-SIM bench tested [L5] |
| Maritime visual scene (Unity) | 3 | Concept demo only |
| Ballistic model (12.7mm) | 5 | V-SMASH engine exists |
| UAV/USV target behavior AI | 3 | Concept only |
| 2-DOF seat motion platform | 4 | Off-the-shelf components identified |
| NFC modular weapon interface | 3 | Concept from FORGE |
| AAR scoring system | 4 | Architecture defined |

PROCEED gate: 6/9 ≥ TRL 4. 3 at TRL 3 (software — raiseable in 3-4mo).

---

## 3. Need-Strength Matrix (Step 3)

| Customer Need (priority) | Sensor Tech | Software/Unity | CNC Mechanical | AI/Edge |
|--------------------------|-------------|---------------|---------------|---------|
| Authentic weapon feel (HIGH) | ★ | ★ | ★★★ | ○ |
| Real-time UAV visual + scoring (HIGH) | ★ | ★★★ | ○ | ★★★ |
| Ship motion simulation (HIGH) | ○ | ★★ | ★★★ | ○ |
| Multiple weapons (MED) | ★★★ (MWI NFC) | ★★ | ★★ | ○ |
| AAR + analytics (MED) | ○ | ★★★ | ○ | ★★★ |

Preferred search fields (★★★): Weapon mockup × CNC, Software × UAV visual, AI × scoring.

---

## 4. Portfolio Assessment (Step 4)

| Product | Market Appeal | WX Strength | Score | Zone |
|---------|--------------|-------------|-------|------|
| **VN-CUAV-SIM-001** | **5** | **4** | **20** | **TARGET — Invest** |
| VN-12.7MM-SIM | 4 | 5 | 20 | TARGET |
| BB-01 LOMAH | 4 | 3 | 12 | DECISION |
| VN-AST-MSL-001 | 4 | 3 | 12 | DECISION |

Score 20 → TARGET zone. Highest market appeal in portfolio.

---

## 5a. §3.2 Knowledge Audit (Step 5a)

| Sub-Function | RE Competitor? | Research? | NLM? | WX Cross? | Status |
|-------------|---------------|-----------|------|-----------|--------|
| SS1 Weapon Station | ✅ Zen + 5 others | ✅ VN-12.7MM-SIM Competitive | ✅ 127sim | ✅ VN-12.7MM-SIM | Full |
| SS2 Visual Display | ✅ RE done | ✅ RESEARCH_MultiScreen_Projection | ✗ | ✗ | Full (post-research) |
| SS3 Motion Platform | ✅ RE done | ✅ RESEARCH_2DOF_Motion_Platform | ✗ | ✗ | Full (post-research) |
| SS4 Scenario/AI | ✅ RE done | ✅ RESEARCH_UAV_USV_Target_Behavior | ✗ | Partial V-SMASH | Full (post-research) |
| SS5 AAR/Scoring | ✅ RE done | ✅ RESEARCH_AAR_Scoring | ✗ | Partial VN-12.7MM | Full (post-research) |
| SS6 Ballistic | ✅ RE done | ✅ V-SMASH engine docs | ✅ 127sim | ✅ V-SMASH | Full |

**Coverage: 6/6 subsystems — all research-backed.** 4 gap research sessions completed (D2-D5, total 90 sources).

## 5b. Research Files (Step 5b)

| File | Sources | Pro Ratio | Key Finding |
|------|---------|-----------|-------------|
| RESEARCH_MultiScreen_Projection (SS2) | 16 | 50% | 30ppd threshold, Optoma ZU607TST, projection > VR |
| RESEARCH_2DOF_Motion_Platform (SS3) | 20 | 53% | 2-DOF validated, JONSWAP γ=2.0, $2.5-3.5K |
| RESEARCH_UAV_USV_Target_Behavior (SS4) | 27 | 63% | BT architecture, FPV/Houthi profiles, MARL evasion |
| RESEARCH_AAR_Scoring (SS5) | 27 | 70% | Lead angle error #1, InVeris patent FTO, adaptive difficulty |

## 5c. Idea Generation (Step 5c — research-informed)

| # | Dimension | Idea | Source |
|---|-----------|------|--------|
| 1 | Function: Core | C-UAV/USV shooting sim with ship motion | [RE: Zen FAC] |
| 2 | Function: Extended | Multi-station crew coordination | [RE: Elbit CGF] |
| 3 | Function: Extended | C2 hub multi-ship exercise | [RE: Elbit DIS/HLA] |
| 4 | Function: Complementary | Fixed-base island/platform defense trainer | [RE: gap analysis] |
| 5 | Principle: Alternative | AR overlay on real ocean view | [L5-ASSUMPTION] |
| 6 | Principle: Synergy | LOMAH hybrid (sim + live-fire AAR) | [WX: BB-01 LOMAH] |
| 7 | Embodiment: Portable | 20ft ISO container pre-configured | [RE: InVeris FATS portable] |
| 8 | Embodiment: Desktop | Monitor-based, no projection/motion | [RE: L3Harris basic] |

**Solution Finding Methods Used:**
- [x] D-M-I-R 4-layer RE → VN_CUAV_SIM_001_Reverse_Engineering (13 chapters)
- [x] Reverse Morphological Chart → VN_CUAV_SIM_001_Reverse_Morphological_Chart_v1.0
- [x] Literature/patent search → 4 RESEARCH files (90 sources)
- [x] NLM notebook → 127sim
- [x] WX cross-product → VN-12.7MM-SIM, V-SMASH, BB-01 LOMAH
- [x] CEO domain knowledge [L2]
- [x] `/research --deep` triggered for 4 gaps → D2-D5
- [x] **ALL gaps resolved before idea generation?** ✓

---

## 6. Idea Selection (Step 6)

### Pass 1: A-F Elimination

Ideas 1-4 → proceed (PA-2 LITE, PA-6 FULL, PA-9 CORTEX, PA-8 FIXED)
Ideas 5 (AR) → eliminated (TRL too low, cost unknown)
Ideas 7 (Container) → proceed
Ideas 8 (Desktop) → eliminated (doesn't meet core fidelity need)

### Pass 2: Weighted Selection (14 criteria, Table 3.1)

| Concept | Score | Rank |
|---------|-------|------|
| PA-2 LITE (1 station, 180°, $50-70K) | **3.81** | **#1** |
| PA-8 FIXED (2 stations, indoor, $55-80K) | 3.41 | #2 |
| PA-6 FULL (2-3 stations, 360°, $120-200K) | 3.21 | #3 |
| Container (portable, $80-120K) | 2.96 | #4 |

**PA-2 LITE selected** — CEO confirmed (2026-04-06, VDI 2225 evaluation consistent).

Product Line Architecture: 4 variants (LITE/FIXED/FULL/CORTEX) — xem `Phase2-Concept/VN_CUAV_SIM_001_Product_Line_Architecture_v1.0.md`

---

## 6.5. s-Diagram — Skip (PA-2 LITE clear winner, economic comparison done in FORGE Cost Analysis)

---

## 7. Product Proposal → Separate file

See: `Phase0-Plan/VN_CUAV_SIM_001_Product_Proposal_v1.0.md`

---

## 8. Gate 0 Quick Check

| Criterion | Result |
|-----------|--------|
| TRL ≥4 for key technologies? | 6/9 ≥ TRL 4. 3 at TRL 3 (SW) ⚠️ Conditional ✓ |
| Local content ≥40%? | ~62% total value ✓ |
| Competitive advantage clear? | First VN C-UAV/USV sim, 70-80% cheaper than Zen ✓ |
| Within WX financial capacity? | $18-28K NRE, self-funded ✓ |
| Aligns with portfolio? | Score 20 TARGET zone ✓ |
| No IP/regulatory blockers? | No ITAR/EAR issues ✓ |

**Gate 0: PASS** — CEO confirmed.

---

## 9. QC Gate Result

/qc run (2026-04-09): 5 PASS / 7 FLAG / 0 FAIL → HUMAN REVIEW
All 7 FLAGS subsequently resolved (standards verified, evidence tagged, risks with fallbacks, working principles populated).

---

## 10. /review-plan Result

/review-plan run (2026-04-09): **COMPLIANT** (7 PASS + 1 accepted FLAG)
- R6 minor FLAG: TVDT table references component names — accepted as analytical content.

---

## FORGE Pipeline Results (completed)

| Document | Version | Status |
|----------|---------|--------|
| FORGE_Job_Map | v1.0 | 63 outcomes, Opp Algorithm, HOQ 12 DPs |
| FORGE_SHIFT_Assessment | v1.0 | 6/6 PASS, ACH GO UNCONDITIONAL |
| FORGE_Cost_Analysis | v1.0 | 4-variant costing, 76% avg margin |
| FORGE_Validation_Plan | v1.0 | 4-stage, 80+ tests |
| FORGE_Fallback_Architecture | v1.0 | Level 2, 9 FMs, instructor override |

---

## CEO Decisions Record

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-06 | PA-2 STANDARD selected | VDI 2225 — best balance cost/capability |
| 2026-04-07 | Tier 1 Prototype | High urgency, portfolio synergy |
| 2026-04-07 | Modular Weapon Interface (MWI) | 5 weapon types, NFC auto-detect, multi-revenue |
| 2026-04-07 | ACH GO — UNCONDITIONAL | SHIFT 6/6 PASS, 7 ACH layers |
| 2026-04-07 | Product Line: 4 variants | LITE/FIXED/FULL/CORTEX |
| 2026-04-08 | Unity game engine | Sovereignty OK (runtime standalone) |
| 2026-04-08 | Visual cue assist >250m | TG-1: UAV <2px → subtle highlight |
| 2026-04-08 | Accept 5yr GPU lifecycle | Mid-life upgrade path |
| 2026-04-08 | Scheduled restart mỗi 4h | Unity memory management |
| 2026-04-08 | Gate 1 APPROVE (3.70/4.0) | Requirements v2.0 complete |
| 2026-04-09 | P-01 local content 70%→60% | HW-only ~18%, total incl SW ~62% |
| 2026-04-09 | Solenoid TRL accepted [L5] | Bench test before Phase 3 |
| 2026-04-09 | 4 deep research gaps filled | SS2 display, SS3 motion, SS4 UAV, SS5 AAR (90 sources) |
| 2026-04-09 | Reverse MC completed | 6 competitors × 5 subsystems |

---

## Appendix: Research Files (§3.2 Traceability)

| File | Location | Sources |
|------|----------|---------|
| Reverse Engineering (own product domain) | Phase1-Task/VN_CUAV_SIM_001_Reverse_Engineering.md | 13 chapters |
| Competitor RE | Phase1-Task/VN_CUAV_SIM_001_Competitor_Reverse_Engineering.md | 6 competitors |
| Reverse Morphological Chart | Phase2-Concept/VN_CUAV_SIM_001_Reverse_Morphological_Chart_v1.0.md | 6×9 grid |
| SS2 Display Research | DCA-Outputs/RESEARCH_MultiScreen_Projection_MilSim_Display_2026-04-09.md | 16 sources |
| SS3 Motion Research | DCA-Outputs/RESEARCH_2DOF_Motion_Platform_Naval_Training_2026-04-09.md | 20 sources |
| SS4 UAV Behavior Research | DCA-Outputs/RESEARCH_UAV_USV_Target_Behavior_Simulation_2026-04-09.md | 27 sources |
| SS5 AAR Research | DCA-Outputs/RESEARCH_AAR_Scoring_Weapon_Simulator_2026-04-09.md | 27 sources |
| VN-12.7MM Competitive | DCA-Outputs/RESEARCH_VN12.7MM_SIM_Competitive_Landscape_2026-03-23.md | — |

---

*Product Planning VN-CUAV-SIM-001 v1.0 — P&B §3.1-3.3 compliant*
*Pipeline: /plan → /review-plan (COMPLIANT) → /qc (HUMAN REVIEW → resolved) → /gate Phase 0 (PASS) → /gate Phase 1 (APPROVE 3.70)*
