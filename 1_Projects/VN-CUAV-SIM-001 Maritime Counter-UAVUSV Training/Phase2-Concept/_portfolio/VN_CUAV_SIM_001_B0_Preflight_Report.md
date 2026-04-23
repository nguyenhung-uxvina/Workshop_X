---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: B0
method: Pahl & Beitz §6.1-6.3.3 + ICDM B0 + VDI 2206 System-Arch check
---

# B0 PREFLIGHT REPORT — VN-CUAV-SIM-001
## Phase 2 Conceptual Design — Input Verification & Design Type Classification

**Ngày:** 2026-04-14
**Pipeline:** helix-concept-generate --icdm
**Mode:** ICDM-enhanced (retroactive — Phase 2 work exists)

---

## 1. PHASE 1 INPUT VERIFICATION

### 1.1 Required Inputs — ✅ ALL FOUND

| Input | File | Version | Status |
|-------|------|:-------:|:------:|
| Requirements List | `Phase1-Task/VN_CUAV_SIM_001_Requirements_List_v2.md` | v2.1 | ✅ 102 reqs (74D+28W) |
| Essential Problem / IFR | Embedded in Requirements_List_v2 §0 | v2.1 | ✅ IFR + 5 Sacred Constraints |
| Function Structure | `Phase1-Task/VN_CUAV_SIM_001_Function_Structure_6Flow_v1.0.md` | v1.0 | ✅ 7 L1 + 41 L2, 101/101 traced |
| Design Type | In Requirements_List_v2 + ICDM B0 | — | ✅ ADAPTIVE (3.3) |
| TVDT | In Requirements_List_v2 §TVDT | v2.1 | ✅ 8 value decompositions |
| Gate 1 | In Requirements_List_v2 §Audit | — | ✅ **3.70/4.0 APPROVE** |

### 1.2 ICDM Inputs — ✅ ALL FOUND

| Input                       | File                                                         |                   Status                    |
| --------------------------- | ------------------------------------------------------------ | :-----------------------------------------: |
| ICDM B0 Innovation Context  | `Phase1-Task/VN_CUAV_SIM_001_ICDM_B0_Innovation_Context.md`  | ✅ WTP 3-cat, Innovation 3.3, Creativity 3.3 |
| ICDM BA EQFD                | `Phase1-Task/VN_CUAV_SIM_001_ICDM_BA_EQFD.md`                |    ✅ v1.1 — 18 CN, 22 EC, HOQ cross-ref     |
| ICDM BB WTP + CSR           | `Phase1-Task/VN_CUAV_SIM_001_ICDM_BB_WTP_CSR.md`             |       ✅ 72E/21B/9L, 10 CSR functions        |
| ICDM BC Solution-Free       | `Phase1-Task/VN_CUAV_SIM_001_ICDM_BC_Solution_Free.md`       |             ✅ PASS all 4 checks             |
| ICDM BD Platform Innovation | `Phase1-Task/VN_CUAV_SIM_001_ICDM_BD_Platform_Innovation.md` |         ✅ 90% commonality, IRL 3.4          |
| ICDM BE Evaluation Criteria | `Phase1-Task/VN_CUAV_SIM_001_ICDM_BE_Evaluation_Criteria.md` |   ✅ Group A 7 (79.4%), Group B 11 (98.2%)   |

### 1.3 FORGE Inputs — ✅ ALL FOUND (9/9)

| Input | Key Data |
|-------|----------|
| FORGE Job Map | 63 outcomes, Opp Algorithm, 12 DPs, DIFFERENTIATED strategy |
| FORGE HOQ Design Parameters | 12 DPs, weights, TRIZ contradictions, CDTC |
| FORGE SHIFT Assessment | 6/6 PASS, ACH GO UNCONDITIONAL |
| FORGE Cost Analysis | 4-variant, 76% avg margin, break-even < 6mo |
| FORGE Opportunity Landscape | Top 15 underserved (Opp 7.4-8.4) |
| FORGE Validation Plan | 4-stage, 80+ tests |
| FORGE Fallback Architecture | Level 2, 9 FMs, instructor override |
| FORGE ACH Opportunity Scan | 7 ACH layers, 12 candidates |
| FORGE Desired Outcomes | 63 outcomes, 37 scored |

### 1.4 System Architecture (VDI 2206) — ✅ FOUND

| Input | Status |
|-------|:------:|
| `System-Arch/SA_System_Architecture.md` | ✅ M34%+E27%+SW46% |
| `System-Arch/SA_ICD_v1.5.md` | ✅ 22 interface definitions |
| `System-Arch/SA_Domain_Budgets.md` | ✅ Power, latency, reliability |
| `System-Arch/SA_Architecture_Review.md` | ✅ **SA APPROVE 3.60/4.0** |

### 1.5 Variant Requirements — ✅ JUST CREATED

| Variant | File | Reqs |
|---------|------|:----:|
| LITE PA-2 | `Phase2-Concept/VN_CUAV_SIM_001_LITE_PA2_Requirements_v1.0.md` | 105 (76D+29W) |
| FIXED PA-8 | `Phase2-Concept/VN_CUAV_SIM_001_FIXED_PA8_Requirements_v1.0.md` | 109 (82D+27W) |
| FULL PA-6 | `Phase2-Concept/VN_CUAV_SIM_001_FULL_PA6_Requirements_v1.0.md` | 122 (95D+27W) |
| CORTEX PA-9 | `Phase2-Concept/VN_CUAV_SIM_001_CORTEX_PA9_Requirements_v1.0.md` | 127 (97D+30W) |

**INPUT VERIFICATION: ✅ COMPLETE — tất cả required + recommended inputs đều có.**

---

## 2. ABSTRACTION QUALITY CHECK (P&B §6.1-6.2)

### 2.1 IFR — Solution-Free Verification

> *"Xạ thủ đạt kỹ năng bắn C-UAV/USV tương đương bắn thực, ZERO chi phí đạn, ZERO rủi ro, ZERO cần ra biển, phòng 6×8m + 220V + 1 instructor."*

| Check | Result |
|-------|:------:|
| Outcome-based (no technology specified)? | ✅ |
| Contradiction-free? | ✅ |
| Testable? | ✅ (T-08: ≥20% live-fire improvement after 40h sim) |
| ICDM BC solution-free verification | ✅ PASS all 4 checks |

### 2.2 Constraint Classification (§6.2 — Genuine vs Fictitious)

| Constraint | Type | Justification | Phase 2 Implication |
|-----------|:----:|---------------|---------------------|
| SC-1: ZERO đạn thật | **Genuine** | Product definition — physics boundary | Cannot be relaxed |
| SC-2: ≤50ms latency | **Genuine** | Human perceptual threshold (negative training transfer if exceeded) | Hard engineering limit |
| SC-3: Ballistic ±5% TM | **Genuine** | Training validity — physics requirement | Must validate per weapon |
| SC-4: ≤$70K LITE | **Genuine** | Market — customer WTP ceiling (payback <1yr vs $102K/yr live) | Cost drives BOM decisions |
| SC-5: On-premise, no foreign server | **Genuine** | VN defense sovereignty — non-negotiable | Unity standalone, no telemetry |
| G-01: 6×8m room | **Fictitious** → **Contextual** | VN naval base typical room size, but not physics-driven | May relax for FULL (10×10m) ✅ already done |
| M-04: Nhôm 40×40mm profile | **Fictitious** | VN manufacturing convenience, not functional requirement | Don't limit concept search to aluminum profiles |
| P-02: Gia công tại Workshop X | **Fictitious** | Internal capability preference, not customer requirement | Accept outsource if needed |

**CEO note:** 3 fictitious constraints identified. Phase 2 search (BB) should NOT eliminate WPs solely because of M-04 or P-02.

### 2.3 Essential Problem (5-Step Abstraction)

```
Step 1 (Concrete): Build a 12.7mm anti-drone shooting simulator
Step 2: Train gunners to shoot drones/USVs from ships using simulation
Step 3: Develop motor skills for engaging fast aerial/surface targets at sea
Step 4: Transfer weapon handling muscle memory without live ammunition
Step 5 (Abstract): Create realistic sensory-motor training transfer for maritime anti-threat engagement

Essential Problem: "How to achieve positive training transfer for maritime weapon engagement
                    within the constraints of indoor simulation (no live fire, no sea)?"
```

**Solution-determining question:** What sensory channels must be stimulated, and to what fidelity, to achieve training transfer equivalent to live fire?

---

## 3. FUNCTION STRUCTURE VALIDATION (11 P&B Guidelines)

| # | Guideline (P&B §6.3.3) | Result | Evidence |
|---|------------------------|:------:|----------|
| G1 | Function at appropriate abstraction | ✅ | L1 functions are outcome-oriented (Sense, Simulate, Display, Motion, Evaluate, Control, Swap) |
| G2 | Inputs and outputs clearly defined | ✅ | 6-flow model: E, M, S, D, C, T for each SF |
| G3 | Sub-functions traceable to requirements | ✅ | 101/101 requirements traced to L2 sub-functions |
| G4 | No redundant sub-functions | ✅ | 41 L2 SFs, each unique purpose |
| G5 | Sub-functions at same abstraction level | ⚠️ | F7 (Swap Weapon) mixes mechanical (F7.1 quick-release) with digital (F7.4 auto-config). Acceptable for MWI architecture. |
| G6 | Clear boundaries between sub-functions | ✅ | Interface flows documented in coupling matrix |
| G7 | **Solution-determining SFs identified** | ✅ | **F1.6 Recoil** (TBD), **F2.3 Target AI**, **F2.5 Ballistic**, **F7.3-F7.4 MWI** |
| G8 | Main flow identified | ✅ | S (Signal) is dominant flow — encoder→ballistic→render→display |
| G9 | Alternative structures considered (CARS) | ⚠️ | Single structure presented. BA should generate ≥2 CARS variants. |
| G10 | Coupling matrix assessed | ✅ | S↔C, C↔D, C↔T, D↔T strongest couplings identified |
| G11 | **All SFs appear as morpho rows** | ✅ | SS1-SS5 morphological matrices cover all 41 L2 SFs |

**G9 flag:** Function structure has 1 variant only. BA (Frame) block should produce ≥2 CARS alternatives before morphological search. However, given existing Phase 2 work with 4 product variants (LITE/FIXED/FULL/CORTEX), the architectural exploration has been done at product-line level rather than function-structure level.

---

## 4. DESIGN TYPE CLASSIFICATION

| Dimension | Assessment | Score |
|-----------|-----------|:-----:|
| Technology novelty | COTS core (projection, encoders, Unity). Novel integration: MWI + C-UAV AI + solenoid recoil + ray-trace scoring | 3/5 |
| Market novelty | VN has ZERO maritime C-UAV simulators. First-mover. | 4/5 |
| Function structure novelty | 6-flow extension of known simulator architecture (3-flow → 6-flow). | 3/5 |
| Manufacturing novelty | WX CNC + welding = proven. Unity SW = new for team. | 3/5 |
| **Overall** | **ADAPTIVE INNOVATION (3.3/5)** | |

### Design Type → Pipeline Calibration

| Design Type | Pipeline Depth | Applicable to CUAV-SIM |
|-------------|---------------|:----------------------:|
| Original (4-5) | Full depth — extensive search, many variants | |
| **Adaptive (3-3.9)** | **Moderate depth — focused search on novel SFs, reuse known solutions for rest** | ✅ |
| Variant (1-2.9) | Shallow — known solutions, minimal search | |

**Calibration decision:** 
- **Deep search** on: F1.6 Recoil (solution TBD), F2.3 Target AI (differentiation), F7.3-F7.4 MWI (platform lynchpin)
- **Shallow search** on: F2.5 Ballistic (V-SMASH reuse), F3.1 Display (COTS projectors), F4 Motion (proven 2-DOF)
- **Per-variant depth:** LITE = moderate, FIXED = shallow (LITE minus motion), FULL = deep (shared deck novel), CORTEX = deep (WAN/C2 novel)

---

## 5. ICDM B0: EQFD INPUT VERIFICATION

| Check | Required | Found | Status |
|-------|----------|-------|:------:|
| CSR functions (satisfaction graphs) per top needs | 10 CSR functions | ICDM BB | ✅ |
| WTP classification (Essential/Beneficial/Luxurious) | 102 reqs tagged | ICDM BB: 72E/21B/9L | ✅ |
| Group A criteria (≥70% weight) | 7 criteria, 79.4% | ICDM BE | ✅ |
| Group B criteria (≥95% weight) | 11 criteria, 98.2% | ICDM BE | ✅ |
| Cost target (CDTC) | LITE $50-70K, WTP-derived | FORGE Cost | ✅ |
| Innovation level | 3.3 (Adaptive) | ICDM B0 | ✅ |
| IRL score | 3.4 | ICDM BD | ✅ |
| Platform commonality | 90% | ICDM BD | ✅ |

**ICDM INPUT VERIFICATION: ✅ COMPLETE — all EQFD/CSR/WTP/Group A-B ready for Phase 2 evaluation.**

---

## 6. EXISTING PHASE 2 WORK ASSESSMENT

Phase 2 has significant organic work already completed. Pipeline blocks will **consolidate and formalize**, not overwrite.

| Existing Deliverable | Pipeline Block | Action |
|---------------------|:--------------:|--------|
| 4× Morpho SS1-SS5 | BB (Search) | **Consolidate** into unified morphological matrix with DSO scores |
| 4× Concept Descriptions | BB (Variants) | **Reference** — concepts already defined |
| 5× TNKCT | BB+BC | **Reference** — technical specs documented |
| Product Line Architecture v1.2 | BA (Frame) | **Reference** — platform architecture locked |
| Reverse Morphological Chart v1.0 | BB (Search) | **Reference** — competitor design space mapped |
| VDI 2225 Concept Evaluation | BC (Develop) | **Enhance** with ICDM CSR-weighted DQM evaluation |
| 4× Variant Requirements | New (S70) | **Input** — use as basis for variant-specific evaluation |

### What Pipeline Will ADD (not yet existing):

| Deliverable | Block | Value Added |
|-------------|:-----:|-------------|
| Problem Frame + CARS variants | BA | Formal solution-determining SF analysis + TRIZ contradictions |
| Unified Morpho Matrix + DSO scores | BB | DSO pre-ranking, ICDM WTP filter, commonality flags |
| Pugh Screening (Group A) | BC | Formal ICDM elimination using CSR thresholds |
| ICDM CSR Evaluation + DQM | BC | Quantitative customer-satisfaction-weighted scoring |
| CFMA (function-level) | BD | Conceptual failure mode analysis per concept |
| CDTC (design-to-cost) | BD | Pareto cost model per concept vs WTP target |
| RTA Knowledge Gaps | BD | Risk & TTM per concept |
| Robustool | BD | Misuse/upgrade/overload analysis |
| Sensitivity Analysis | BD | VDI 2225 weight variation stability |
| Formal Concept Selection + DQM comparison | BE | CEO non-delegable decision with full evidence |
| Handoff Package | BE | Structured Phase 3 transition |

---

## 7. SOLUTION-DETERMINING SUB-FUNCTIONS

**Ranked by impact × uncertainty (cascade × breadth scoring):**

| Rank | Sub-Function                         |                           Impact                            |                           Uncertainty                           | Phase 2 Action                           |
| :--: | ------------------------------------ | :---------------------------------------------------------: | :-------------------------------------------------------------: | ---------------------------------------- |
|  1   | **F1.6 Recoil (≥25N)**               |     HIGH — affects training transfer, weapon feel, cost     | HIGH — solution TBD (solenoid/pneumatic/electromagnetic/hybrid) | **Deep search + trade study in BB/BC**   |
|  2   | **F2.3 Target AI**                   | HIGH — differentiation vs competitors (Zen: scripted only)  |              MEDIUM — behavior model approach TBD               | **TRIZ in BA, creative WP search in BB** |
|  3   | **F7.3-F7.4 MWI auto-detect/config** | HIGH — platform modularity lynchpin, enables 5 weapon types |        MEDIUM — NFC protocol + ballistic table switching        | **Architecture decision in BA**          |
|  4   | F3.1 Display (360° for FULL)         |          MEDIUM — 6-projector cylindrical is novel          |                MEDIUM — calibration, GPU budget                 | **FULL-specific search in BB**           |
|  5   | F4.1-4.3 Shared Deck (FULL)          |            MEDIUM — no competitor offers <$200K             |            MEDIUM — structural + control engineering            | **FULL-specific search in BB**           |

---

## 8. PREFLIGHT VERDICT

```
╔═══════════════════════════════════════════════════╗
║          B0 PREFLIGHT — VN-CUAV-SIM-001            ║
╠═══════════════════════════════════════════════════╣
║                                                    ║
║  Phase 1 Inputs:      ✅ COMPLETE (102 reqs)       ║
║  ICDM Inputs:         ✅ COMPLETE (B0→BE)          ║
║  FORGE Inputs:        ✅ COMPLETE (9/9)             ║
║  System Architecture: ✅ APPROVE (3.60/4.0)        ║
║  Gate 1:              ✅ APPROVE (3.70/4.0)         ║
║  Function Structure:  ✅ 7 L1 + 41 L2 (G11 pass)   ║
║  Solution-Free:       ✅ PASS (ICDM BC)             ║
║  Design Type:         ADAPTIVE (3.3/5)              ║
║  Variant Requirements:✅ 4/4 created                ║
║                                                    ║
║  Flags:                                            ║
║  ⚠️ G9: 1 function structure only (CARS needed)    ║
║  ⚠️ F1.6 Recoil: solution TBD — top priority       ║
║  ⚠️ VOC: 0/5 interviews (post-PoC)                 ║
║  ⚠️ 3 fictitious constraints identified             ║
║                                                    ║
║  Existing Phase 2 work: 15 files                   ║
║  Pipeline mode: CONSOLIDATE + ICDM ENHANCE         ║
║                                                    ║
║  ▶️ VERDICT: READY FOR BA (FRAME)                   ║
╚═══════════════════════════════════════════════════╝
```

---

*B0 Preflight complete. Ready for Block BA: Problem Frame.*
