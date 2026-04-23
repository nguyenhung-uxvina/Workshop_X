---
created: 2026-04-06
updated: 2026-04-15 (S72 — Phase2-Concept reorganized: variant subfolders + _portfolio/)
type: project-status
status: active
tier: 1
pahl-beitz-phase: 2
tags: [#type/project, #status/active]
---

# VN-CUAV-SIM-001 — Status

## Tổng Quan

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên dự án** | Maritime Counter-UAV/USV Shooting Training Simulation System |
| **Tier** | **1 — Prototype** |
| **Pahl-Beitz Phase** | **Phase 2 COMPLETE → Phase 3 Embodiment (Starting)** |
| **Selected Concept** | PA-2 STANDARD (3-screen 180° FOV, 12.7mm mockup, $50-70K/unit) |
| **Deadline** | TBD (chờ activation) |
| **Blocking Constraint** | Gate 1 APPROVED (3.70/4.0). **Gate 2 PASS (3.71/4.0, 2026-04-15)**. Physical gate: 2026-05-07 (SS1 PoC) |

## Phase Progress

| Phase | Status | Date | Ghi chú |
|-------|--------|------|---------|
| Phase 0: Product Planning | Done | — | Pre-study via reverse engineering |
| Phase 1: Task Clarification | **Done** | 2026-04-08 | RE + VDI 2225 + Requirements **v2.0** (102 reqs: 73D + 29W) + IFR + TVDT + Audit + Gate 1 APPROVE (**3.70**/4.0) |
| **System Architecture (VDI 2206)** | **Done (retro)** | **2026-04-14** | **FULL mechatronic (M34%+E27%+SW46%). ICD v1.5 (22 IFs). Domain budgets. V&V plan. SA APPROVE 3.60/4.0** |
| **ICDM Overlay (Hari & Weiss)** | **Done (retro, CEO reviewed)** | **2026-04-14** | **B0→BE complete + CEO approved all 6 blocks. 102 WTP (72E/22B/8L). 10 CSR. Group A (7, 79%) + B (11). IRL 3.4. 9-product platform (v1.1). CEO overrides: recoil ≥25N (D), EC-18 ≥4h, CN-15 E→B.** |
| **Phase 2: Conceptual Design** | **Done** | **2026-04-14** | **ICDM pipeline B0→BE complete. 4 variant requirements (LITE 105/FIXED 109/FULL 122/CORTEX 127). Unified morpho (31 SFs, DSO). TRIZ: 2 new recoil WPs. VDI 2225 + ICDM DQM (FULL 97.1%, FIXED 93.5%, LITE 93.2%). CFMA 10 FMs. RTA 7 KGs. P02 QC PASS. CEO SELECT: LITE lead → FIXED → FULL → CORTEX. 6 Excalidraw diagrams.** |
| **Phase 2 Gate 2** | **PASS** | **2026-04-15** | **3.71/4.0. A:8.5/9 S:3/4 H:3/3. 5 conditions. VnV/Gate2_Review_2026-04-15.md** |
| Phase 3: Embodiment Design | **Starting** | 2026-04-15 | LITE PA-2 lead variant |
| Phase 4: Detail Design | Not started | — | |

## Artifacts

| Document | Version | Status |
|----------|---------|--------|
| `_Project_Brief.md` | v1.0 | Current |
| `VN_CUAV_SIM_001_Reverse_Engineering.md` | v1.0 | DMIR × P&B Phase 1 |
| `VN_CUAV_SIM_001_Competitor_Reverse_Engineering.md` | v1.0 | Zen Technologies et al. |
| `VN_CUAV_SIM_001_Concept_Evaluation_VDI2225.md` | v1.0 | PA-2 confirmed |
| `VN_CUAV_SIM_001_Requirements_List_v1.md` | v1.0 | 101 requirements (71D + 30W) — baseline |
| `VN_CUAV_SIM_001_Requirements_List_v2.md` | **v2.0** | 102 requirements (73D + 29W) + IFR + TVDT + Audit + Gate 1 APPROVE |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Reverse_Morphological_Chart_v1.0.md` | **v1.0** | 6 competitors × 5 subsystems. Proven combos + uncontested gaps + blind spots |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Morpho_SS1_Weapon_Station.md` | v1.0 | SS1 complete — 9 SFs, ~$1,330 |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Morpho_SS2_Visual_Display.md` | v1.0 | SS2 complete — 8 SFs, ~$8.5-12.1K |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Morpho_SS3_Motion_Platform.md` | v1.0 | SS3 complete — 5 SFs, ~$1.6-2.4K |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Morpho_SS4_SS5_Scenario_Integration.md` | v1.0 | SS4+SS5 complete — 9 SFs, ~$1.2-1.7K |
| `Phase2-Concept/LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_Concept_Description_v1.0.md` | v1.0 | **LITE (PA-2)** — Concept Description xuồng nhỏ, 1 stn 180° |
| `Phase2-Concept/LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_TNKCT_v1.0.md` | v1.0 | Superseded by v1.1 |
| `Phase2-Concept/LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_TNKCT_v1.1.md` | **v1.1** | **LITE (PA-2)** — TNKCT xuồng nhỏ, 7 chương, modular weapon |
| `Phase2-Concept/FIXED-PA8/VN_CUAV_SIM_001_FIXED_PA8_Concept_Description_v1.0.md` | **v1.0** | **FIXED (PA-8)** — Concept Description đảo/giàn/cảng, 2 stn 240° |
| `Phase2-Concept/FIXED-PA8/VN_CUAV_SIM_001_FIXED_PA8_TNKCT_v1.0.md` | **v1.0** | **FIXED (PA-8)** — TNKCT đảo/giàn/cảng, 6 chương |
| `Phase2-Concept/FULL-PA6/VN_CUAV_SIM_001_FULL_PA6_Concept_Description_v1.0.md` | **v1.0** | **FULL (PA-6)** — Concept Description tàu chiến, 2-3 stn 360° shared deck |
| `Phase2-Concept/FULL-PA6/VN_CUAV_SIM_001_FULL_PA6_TNKCT_v1.0.md` | **v1.0** | **FULL (PA-6)** — TNKCT tàu chiến, crew coordination |
| `Phase2-Concept/CORTEX-PA9/VN_CUAV_SIM_001_CORTEX_PA9_Concept_Description_v1.0.md` | **v1.0** | **CORTEX (PA-9)** — Concept Description liên quân, multi-node WAN |
| `Phase2-Concept/CORTEX-PA9/VN_CUAV_SIM_001_CORTEX_PA9_TNKCT_v1.0.md` | **v1.0** | **CORTEX (PA-9)** — TNKCT liên quân, C2 Hub, shared battlespace |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Function_Structure_6Flow_v1.0.md` | v1.0 | 6-flow: 7 L1 functions, 41 L2 sub-functions, 101/101 req traced |
| `Phase2-Concept/_portfolio/VN_CUAV_SIM_001_Product_Line_Architecture_v1.0.md` | **v1.2** | 4 variants: LITE/FIXED/FULL/CORTEX, quy mô platform logic |
| `FORGE_Job_Map_v1.0.md` | **v1.0** | **FORGE** — 63 outcomes, Opp Algorithm, HOQ 12 DPs, Strategy: DIFFERENTIATED |
| `FORGE_SHIFT_Assessment_v1.0.md` | **v1.0** | **FORGE** — SHIFT 6/6 PASS, ACH GO UNCONDITIONAL, 7 ACH layers |
| `FORGE_Cost_Analysis_v1.0.md` | **v1.0** | **FORGE** — 4-variant costing, 76% avg margin, break-even < 6mo, 5yr $1.65M |
| `FORGE_Validation_Plan_v1.0.md` | **v1.0** | **FORGE** — 4-stage, 80+ tests, $230 infra, training transfer study 6wk |
| `FORGE_Fallback_Architecture_v1.0.md` | **v1.0** | **FORGE** — Level 2, 9 FMs, $0 HW, ~18h SW, instructor override panel |
| `FORGE_HOQ_Design_Parameters_v1.0.md` | **v1.0** | **FORGE** — 12 DPs, HOQ matrix, weights, TRIZ contradictions, CDTC |
| `FORGE_Desired_Outcomes_v1.0.md` | **v1.0** | **FORGE** — 63 outcomes, 37 scored, 8 Job Map steps |
| `FORGE_Opportunity_Landscape_v1.0.md` | **v1.0** | **FORGE** — Top 15 underserved (Opp 7.4-8.4), bottom 6 overserved |
| `FORGE_ACH_Opportunity_Scan_v1.0.md` | **v1.0** | **FORGE** — ACH GO UNCONDITIONAL, 7 layers, 12 candidates, IRL 3.2 |
| `VN_CUAV_SIM_001_ICDM_B0_Innovation_Context.md` | v1.0 | ICDM B0 — WTP 3-category, innovation 3.3, creativity 3.2 |
| `VN_CUAV_SIM_001_ICDM_BA_EQFD.md` | **v1.1** | ICDM BA — 18 CN, 22 EC + HOQ cross-ref + SA constraints |
| `VN_CUAV_SIM_001_ICDM_BB_WTP_CSR.md` | **v1.0** | ICDM BB — 102 WTP tags (72E/21B/9L), 10 CSR functions, Group A/B |
| `VN_CUAV_SIM_001_ICDM_BC_Solution_Free.md` | **v1.0** | ICDM BC — Solution-free verification PASS (all 4 checks) |
| `VN_CUAV_SIM_001_ICDM_BD_Platform_Innovation.md` | **v1.0** | ICDM BD — 7th innovation flow, 90% platform commonality, IRL 3.2 |
| `VN_CUAV_SIM_001_ICDM_BE_Evaluation_Criteria.md` | **v1.0** | ICDM BE — Group A (7, 79.4%), Group B (11, 98.2%), DQM framework |

## Portfolio Expansion (v1.1 — Musk + Hwang, 2026-04-09)

**Reframed:** "Human Motor Skill Training Platform with Visual Immersion + Performance Analytics"

**4→9 products.** 5 new: WEAPON-MOD, MOBILE, EXPORT-LITE, AAR-SaaS, HYBRID-BRIDGE.
ARMY merged into FIXED (Army Scenario Pack). DESKTOP eliminated.

**Sequence:** LITE → FIXED(+Army) → FULL → WEAPON-MOD → MOBILE → CORTEX → EXPORT → AAR → HYBRID

**Cross-product:**
- **CTF (Common Training Framework)** — shared Unity framework with VN-XUONG V9-TRAIN
- **HYBRID-BRIDGE** — BB-01 LOMAH sim↔live fire integration (unique WX moat)
- **VN-12.7MM-SIM** — scope ABSORBED by LITE MWI (5 weapon types)

**Revenue:** Conservative $4.1M / 5 years (v1.0 was $3.0M baseline). Recurring $225K/yr at steady state.

## Portfolio Synergy

- ~~VN-12.7MM-SIM~~ — **ABSORBED** (MWI covers all 12.7mm scope, project ON HOLD)
- **BB-01 LOMAH** — HYBRID-BRIDGE integration (sim + live fire scoring)
- **VN-XUONG-UUV V9-TRAIN** — CTF shared Unity framework
- **VN-AICAM-MDA-001** — AI camera cho live-sim hybrid
- **VANGUARD AIR "PHANTOM"** — target drone (live-fire)
- **VANGUARD SEA "TRITON"** — target USV (live-fire)

## Cost Summary (all subsystems)

| Subsystem | Hardware | Notes |
|-----------|----------|-------|
| SS1 Weapon Station | ~$1,330 | CNC nhôm + encoders + solenoid |
| SS2 Visual & Engine | ~$8,450-12,100 | 3 projectors + render PC + instructor PC |
| SS3 Motion Platform | ~$1,580-2,420 | 2-DOF electric + seat |
| SS4+SS5 Scenario + Integration | ~$1,200-1,700 | UPS + cases + rack |
| **HW subtotal** | **$12,560-17,550** | |
| SW development (~6 person-months) | $6,000-10,000 | Unity + ballistic + GUI |
| **TOTAL R&D** | **$18,560-27,550** | Target sell: $50-70K |

## Next Actions

1. [x] ~~Complete Morphological Matrix SS2-SS5~~ — DONE 2026-04-07
2. [x] ~~**Gate 1 formal review**~~ — **APPROVE 3.70/4.0** (CEO confirmed A, 2026-04-08)
3. [ ] **Define physical gate date** (≤30 ngày per Tier 1 requirement)
   - Đề xuất: weapon station mockup PoC (SS1 → CNC body + encoder + trigger)
4. [ ] Concept Description document (Doc 010 — consolidate all SS concepts)
5. [ ] Function Structure v1.0 — 6-flow diagram

## Physical Gate

**SS1 Weapon Station Mockup PoC**
- **Date: 2026-05-07** (28 days from 2026-04-09)
- **Scope:** CNC aluminum cradle + encoder + solenoid trigger + Unity integration
- **Cost:** ~$500-800

**Success Criteria (5/5 required):**
1. CNC cradle holds weapon mockup (weighted pipe) rigidly
2. Encoder reads azimuth ±0.5° and elevation ±0.5°
3. Unity receives encoder data at ≥30 Hz
4. Trigger solenoid fires on Unity command with ≤50ms latency
5. Solenoid recoil impulse is perceptible to operator (validates [L5] → [L2])
6. **[C2 COMPARE]** Measure peak recoil force (N). Target: ≥25N. If <15N → trigger pneumatic contingency (LITE+ per ICDM SC-2). Benchmark: Zen=electromech, Saab=OEM haptic, Elbit=real mount. WX solenoid at 8N scored 2/5 in COMPARE C2 — this is the ONLY gap that causes WX to lose in Training-First scenario

**Schedule:**
- Wk 1-2 (→ 2026-04-23): CNC cradle body + assembly
- Wk 2-3 (→ 2026-04-30): Encoder mount + wiring + solenoid
- Wk 3-4 (→ 2026-05-07): Unity integration test + criteria validation

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-06 | PA-2 STANDARD selected over PA-1 BASIC và PA-3 PREMIUM | VDI 2225 evaluation — best balance cost/capability/timeline |
| 2026-04-07 | Tier 1 Prototype classification | High urgency — maritime UAV/USV threat growing, synergy with existing portfolio |
| 2026-04-07 | **Modular Weapon Interface (MWI)** | Universal cradle + swappable weapon modules (NFC auto-detect). 5 loại: DSHK, NSV, KPVT, ZU-23-2, PKM. Swap < 5 phút. Multi-revenue stream. |
| 2026-04-07 | **ACH GO — UNCONDITIONAL** | SHIFT 6/6 PASS. 7 ACH layers. CEO confirmed GO. Break-even < 1 year. 12/15 top outcomes addressed. |
| 2026-04-08 | **Gate 1 APPROVE** (3.70/4.0) | Formal /gate review. A=4 B=4 C=4 D=3 E=3 F=3. CEO confirmed option A. Conditions: TCVN verify, source column upgrade, DfLC check Phase 3, O-10 trace. |
| 2026-04-08 | **Unity game engine** | CEO selected over Godot/Unreal. Runtime standalone OK for L-04 sovereignty. |
| 2026-04-08 | **Visual cue assist for UAV >250m** | TG-1 resolved: subtle highlight/blink when UAV <2px on screen. Avoids 4K×3 cost. |
| 2026-04-09 | **P-01 local content revised 70%→60%** | QC FLAG 10: HW-only ~18% local, total incl SW ~62%. 70% infeasible without VN projector/GPU (quality risk). 60% honest + achievable. |
| 2026-04-09 | **Solenoid TRL accepted as [L5-ASSUMPTION]** | QC FLAG 01: bench test data needed before Phase 3 embodiment. Added to Physical-Validation-Log backlog. |
| 2026-04-09 | **QC Gate 7 FLAGS resolved** | Standards: TCVN verified + MIL-STD-810H method numbers. Evidence: [L4-ESTIMATE] tags. Risks: 6 fallbacks added. WP: 12 options with advantage/risk populated. |
| 2026-04-09 | **§3.2 Deep Research — 4 subsystems** | D2 SS2 Display (16 src, 50% pro): Optoma ZU607TST recommended, 30ppd threshold, projection>VR for crew. D3 SS3 Motion (20 src, 53% pro): 2-DOF validated, JONSWAP γ=2.0, $2.5-3.5K. D4 SS4 UAV (27 src, 63% pro): BT architecture, FPV/Houthi profiles, MARL evasion. D5 SS5 AAR (27 src, 70% pro): Lead angle error=#1 metric, InVeris patent FTO, ray-trace scoring. |
| 2026-04-09 | **Reverse Morphological Chart** | 6 competitors × 5 subsystems. Proven: projection, form-fit weapon. WX unique: MWI NFC, solenoid recoil, C-UAV niche, $50-70K price, ray-trace scoring. |
| 2026-04-07 | **Product Line: 4 variants** | LITE (PA-2, 1stn 180° tàu, $50-70K) + FULL (PA-6/6+, 2-3stn 360° tàu, $120-200K) + FIXED (PA-8, 2stn 240° indoor no-motion, đảo/nhà giàn/cảng, $55-80K) + CORTEX (PA-9, multi-node liên quân, $300K+) |
| 2026-04-09 | **Physical gate: SS1 Weapon Station PoC** | Option A selected. CNC cradle + encoder + solenoid + Unity. 5 success criteria. Deadline: **2026-05-07**. |
| 2026-04-20 | **COMPARE C0-C4 COMPLETE** | 9 candidates → 5 shortlisted. WX LITE wins 5/6 scenarios (3.73/5.0 risk-adjusted). Primary threat: Zen FAC Sim (India). WX niche UNCONTESTED at $30-150K. Only gap: recoil fidelity (criterion #6 added to PoC). Window: 12-24 months before Zen could pivot. |
| 2026-04-20 | **~~Quarterly~~ MONTHLY competitive watch activated** | Monitor Zen Technologies (C-UAS pivot, ASEAN presence) + Elbit (VN Navy RCWS procurement). **UPGRADED to MONTHLY** after RE Stage 2 discovered Zen already has "Counter-UAS Simulation Solution" (I/ITSEC 2025). Sources: zentechnologies.com, Janes, IMDEX, defense press. |
| 2026-04-20 | **SS1 PoC criterion #6 added** | Measure peak recoil force (N). Target ≥25N. If <15N → pneumatic LITE+ contingency. Routed from COMPARE C2 finding: recoil = only gap causing WX to lose in Training-First scenario. |
