---
created: 2026-04-09
updated: 2026-07-10
type: project
status: on-hold
tags: [#type/project, #status/on-hold]
tier: 2-product-dev
origin: IRONMESH portfolio (unfrozen 2026-04-09)
deferred: 2026-07-10
deferred_reason: "Delete Pass v2 (barbell): RE pipeline blocked by TAI ITAR-free cert (ngoài tầm kiểm soát), V5-JET là sản phẩm 2028+. Vùng giữa barbell — không đủ safe (chưa có khách V5), không đủ lồi (RE catch-up ≠ moat). Production drone simple KHÔNG bị ảnh hưởng."
resume_condition: "TAI trả lời ITAR-free cert, HOẶC khách hàng đặt V5-JET/V4-FULL, HOẶC CUAV-SIM Phase 3 ship xong giải phóng bandwidth."
---

# TARGET-DRONE-001 — Air Target Drone — Status

## ⏸️ ON HOLD (2026-07-10 — Delete Pass v2)
**RE pipeline (Simsek-K) FROZEN tại Stage 3.** Blocking: ITAR-free certification từ TAI (Stage 1M condition #1) — ngoài tầm kiểm soát WX. Production line drone simple (200 shipped, TRL 9) tiếp tục bình thường — không thuộc scope dự án này.

## Tier
**Tier 2 — Product Dev** (complements VN-CUAV-SIM live training capability)

## Current Phase
**Phase 0: Product Planning COMPLETE** — /init + /plan --portfolio done.
**RE Pipeline: Stage 3 COMPLETE** — Concept D "Phased Sovereignty" selected (Rt=0.758, VDI 2225 winner).

## Reverse Engineering — Simsek-K (V5-JET-STANDARD)
- [x] COMPARE mode — 4 candidates evaluated, Simsek-K selected (MCDA 7.03/10)
- [x] Stage 0: IP & Legal Gate — CONDITIONAL GO (2026-04-19)
- [x] Stage 1M: MECHA Deconstruction — 4 reports (1A+1B+1C+1M) complete (2026-04-19)
- [x] Stage 2M: Decode — 76 requirements reconstructed + 19 solution-neutral SFs (2026-04-20)
- [x] Stage 3: Reconstruct — Concept D "Phased Sovereignty" selected, VDI 2225 Rt=0.758 (2026-04-20)
- [ ] Stage 3P: Partnership — TAI Acquisition Strategy
- [ ] Stage 4M: Deploy — V&V + Audit
- [ ] Stage 5: Knowledge Capture

**Conditions for Stage 1M:**
1. ITAR-free certification from TAI (BLOCKING)
2. TURKPATENT search (due diligence)
3. Clean-room protocol active
4. Software RE limited to L1-L2

## Pahl-Beitz Progress
- [x] Phase 0: Product Planning (/plan --portfolio)
- [ ] Phase 1: Task Clarification (/req)
- [ ] Phase 2: Conceptual Design (/morpho + /eval)
- [ ] Phase 3: Embodiment Design
- [ ] Phase 4: Detail Design

## Phase 0 Planning (2026-04-09)
- [x] /init — folder structure created
- [x] Product Planning v1.0 — Steps 1-8, Gate 0 PASS
- [x] Product Proposal v1.0 — solution-neutral, SIGNATURE-CENTERED paradigm
- [x] **Portfolio Planning v1.0** — 5 variants
- [x] **Portfolio Planning v1.1 (--ex)** — 5→11 variants (+MICRO, TOWED, EW-TARGET, CALIBRATION, PLATFORM, NAVAL-LAUNCH)
- Reframed: "Target Drone" → "Configurable Airspace Detectability System"
- Sequence: V1→V2→N10→V3→N6→V4→N7→N9→N8→V5→N11
- **$4.56M / 5yr** revenue [L5-ASSUMPTION] (was $3.06M, +49%)
- Platform ROI: **480%** (was 300%)
- Design paradigm: **SIGNATURE-CENTERED** (CHỮ-HIỆN-CHẤM)
- Lead: V1-PROP-BASIC (Class A propeller, reusable, $8-15K)
- Unique products: N10-MICRO ($200-500 foam), V2-MDI (standalone scoring), N8-EW (electronic warfare)

## Portfolio Summary (11 products)

| # | Variant | Price | Type |
|---|---|---|---|
| V1 | PROP-BASIC | $8-15K | Reusable propeller, RCS only |
| V2 | MDI-MODULE | $5-10K | Standalone scoring payload |
| N10 | MICRO | $200-500 | Foam disposable, visual drill |
| V3 | SWARM-EXPEND | $2-5K | Expendable FPV-size |
| N6 | TOWED | $3-8K | Towed by aircraft, no autopilot |
| V4 | PROP-FULL | $25-40K | Full signature + MDI |
| N7 | PLATFORM | $5-12K | Bare UAV, non-target market |
| N9 | CALIBRATION | $10-20K | Radar calibration, precision RCS |
| N8 | EW-TARGET | $15-30K | Electronic warfare training |
| V5 | JET-STANDARD | $50-80K | Turbojet Class B |
| N11 | NAVAL-LAUNCH | $20-45K | Ship-deck launched, marine |

## Portfolio Synergy
- **VN-CUAV-SIM** — sim trains virtually, TARGET-DRONE trains live
- **BB-01 LOMAH** — scoring system (V2-MDI-MODULE shares acoustic expertise)
- **VN-AST-MSL-001** — sea + air target pair, shared RCS tech
- **HYBRID-BRIDGE** — live engagement data feeds into CUAV-SIM AAR
- **VN-AICC** — target operations console (V3-TAC)

## Blocking Constraints
1. CEO bandwidth allocation (Tier 2 — behind T1 projects)
2. Airframe configuration TBD (Phase 2 decision)
3. VN military drone regulations for target operations

## Next Steps
1. **RE Stage 1M:** /reverse-engineering "Simsek-K" --mode mecha --stage 1 (NLM notebook + OSINT deconstruction)
2. **Parallel:** Request ITAR-free certification from TAI via BD channel
3. **Phase 1: /req** for V1-PROP-BASIC when CEO allocates bandwidth
4. Prior research available: Phase 1 Deep Dive + MetaLearning Ch6.6.2e in vault

## Deadline
V1-PROP-BASIC prototype: Q1 2027 [L5-ASSUMPTION — depends on start date]
