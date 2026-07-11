---
created: 2026-03-05
updated: 2026-07-11
type: project
status: on-hold
tags: [#type/project, #status/on-hold]
tier: 2-product-dev
tier_changed: 2026-04-09
tier_change_reason: "CEO downgraded Tier 1 → Tier 2. VN-CUAV-SIM-001 lên Tier 1 thay thế."
deferred: 2026-07-11
deferred_reason: "Delete Pass v2 verdict (CEO 2026-07-11): on-hold chờ đơn hàng. Phase 2 done G2 3.85 = trạng thái dừng sạch. TRÒN là premium upgrade — 2 bộ đã deployed vẫn phục vụ khách. G3 target 04-05 + HDPE weld coupon gate 04-07 đã trôi không thực hiện."
resume_condition: "Có đơn hàng TRÒN/variant mới, HOẶC BB-01 V3-SCORED cần keystone integration, HOẶC bandwidth trống sau CUAV-SIM Phase 3."
---

# VN-AST-MSL-001 "THANH TRI" — Status

## ⏸️ ON HOLD (2026-07-11 — Delete Pass v2, CEO verdict)
Dừng tại điểm sạch: Phase 2 COMPLETE (G2 3.85/4.0, C1 TRÒN selected). Khi resume → vào thẳng Phase 3 với OI-1 (HDPE weld coupon) là việc đầu tiên. Catalog 10 variants giữ nguyên.

## Tier
**Tier 2 — Product Dev** (demoted from Tier 1 on 2026-04-09, CEO decision)

## Current Phase
**Phase 2: Conceptual Design — COMPLETE** — G2 PASSED, ready for Phase 3

## Selected Concept
**C1 TRÒN HDPE** — Circular HDPE foam-filled hull, trihedral reflector array, chain/nylon hybrid mooring, V-bridle towing.
- VDI 2225 score: 86.8% (#1 of 4 concepts)
- Reserve: C4 NHÔM GỌN (82.8%)
- Zero weak spots, robust under sensitivity analysis

## HELIX Progress
- [x] Phase 0: Project Init (Charter + ICD v0 + Sync Calendar) — 2026-03-08
- [x] Phase 1: Task Clarification (77 req v1.3, Essential Problem, 14 SF, S1, CONOPS) — 2026-03-08
- [x] Phase 2: Conceptual Design (FS v2.0, 26 WPs, 4 concepts, VDI 2225, G2 PASS) — 2026-03-08
- [ ] Phase 3: Embodiment Design (G3 target: 2026-04-05)
- [ ] Phase 4: Detail Design (G4 target: 2026-04-19)

## Physical Validation
- **dP/dt this month:** 0
- **Next physical milestone:** HDPE weld test coupon (OI-1 from G2)
- **Physical gate deadline:** 2026-04-07 (30 ngày)

## Artifacts
| Phase | Document | ID | Status |
|-------|----------|----|--------|
| 0 | Project Charter | VN-AST-MSL-001-CHR-001 v1.0 | Approved |
| 0 | ICD v0 | VN-AST-MSL-001-ICD-001 v0 | Approved |
| 0 | Sync Calendar | VN-AST-MSL-001-SYNC-001 v1.0 | Active |
| 1 | Requirements List | VN-AST-MSL-001-REQ-001 v1.3 | Approved (46D/19W1/12W2, 77 total) |
| 1 | Essential Problem | VN-AST-MSL-001-EP-001 v1.0 | Approved |
| 1 | Function Structure | VN-AST-MSL-001-FS-001 v1.1 | Approved (14 SF, +SF-13/14 Towing) |
| 1 | Sync S1 Record | VN-AST-MSL-001-S1-001 v1.1 | PASS |
| 2 | Function Structure v2.0 | VN-AST-MSL-001-FS-001 v2.0 | Approved (34 L2, 43 L3) |
| 2 | Working Principles Search | VN-AST-MSL-001-WP-001 v1.0 | Approved (26 WPs, 7 SFs) |
| 2 | Morphological Matrix | VN-AST-MSL-001-MM-001 v1.0 | Approved (4 concepts) |
| 2 | VDI 2225 Evaluation | VN-AST-MSL-001-CE-001 v1.0 | Approved (C1 selected 86.8%) |
| 2 | Gate Review G2 | VN-AST-MSL-001-G2-001 v1.0 | **APPROVED** (3.85/4.0, formal gate2) |
| 3 | F4 Mooring Hull Interface | VN-AST-MSL-001-F4-IF-001 v1.0 | Approved (Option E, OI-4 resolved) |
| 3 | OI-5 Transport Verification | VN-AST-MSL-001-TR-001 v1.0 | ⚠️ NCR — 3-segment corrective proposed |

## Phase 0 Planning (retroactive 2026-04-09)
- [x] **Portfolio Planning v1.0 (--ex)** — 10 variants (STANDARD→TOW→MAINT→MINI→SCORED→HULL→MARKER→IR→EXPORT→SONAR)
- Reframed: "Towed Target" → "Sea Surface Target Platform"
- Sequence: V1→V2→N10→N5→V3→N8→N7→N11→N9→N6
- **$4.82M / 5yr** revenue [L5-ASSUMPTION]
- Platform ROI: **205%**
- V3-SCORED = ecosystem keystone (BB-01 × HYBRID-BRIDGE integration)
- Export 2028+ via N9-EXPORT-LITE

## Next Step
**Phase 3: Embodiment Design** (`/embody`)
- Preliminary GA layout
- DfX review
- Structural sizing
- BOM v1
- ICD v1
- Physical gate: HDPE weld test coupon by 2026-04-07

## Gate History
| Gate | Score | Decision | Date |
|------|-------|----------|------|
| G1 | 3.525/4.0 | **PASS** | 2026-03-08 |
| G2 | 3.850/4.0 | **APPROVED** (A) | 2026-03-08 |

## Open Items from G2
| # | Item | Priority | Owner |
|:--|:-----|:--------:|:------|
| OI-1 | HDPE weld test coupons | **High** | CEO |
| ~~OI-2~~ | ~~Reflector RCS verification~~ **RESOLVED** — edge upgraded 0.9→**1.0m**, σ_peak=4,095m², min=1,024m² (derated), R-A01 PASS | ~~High~~ | ~~AI~~ |
| ~~OI-3~~ | ~~Stability calculation~~ **RESOLVED** — GM=12.234m, wind heel<1°, IMO 2008 PASS | ~~High~~ | ~~AI~~ |
| ~~OI-4~~ | ~~Mooring chain/nylon hybrid sizing~~ **RESOLVED** — Through-hull chain pipe (Option E) selected. SS316 pipe + flanges, HDPE compression tubes, UHMWPE wear pads. ESC risk = 0 (HDPE in compression only). Full research: 18 sources, /research v2.1 | ~~Medium~~ | ~~AI~~ |
| ~~OI-5~~ | ~~Transport module dimensions verification~~ **RESOLVED** — ⚠️ R-G03 NON-CONFORMANCE: 2-half split has 3.0m width > 2.4m limit. **Corrective: split ring into 3 segments (120° arcs) instead of 2 halves.** Bounding box 5.2×2.0×1.0m → R-G03 PASS. Cost impact +1.6M VND (< 0.2%). All R-G01–G06 PASS. CEO decision needed: 3 vs 4 segments. See `Phase3-Embodiment/OI5_Transport_Module_Verification_v1.0.md` | ~~Medium~~ | ~~AI~~ |
| OI-6 | ICD v0 → v1 update | Medium | AI |
| OI-7 | Tow trial planning | Low | CEO |

## Prior Work (DMIR Reference)
Dự án có Phase 2-3 artifacts từ bài tập DMIR reverse-engineering. Giữ nguyên làm reference, HELIX re-run là forward design độc lập.

## Key Specs
- **RCS:** σ_peak = 4,095 m², min = 1,024 m² (derated) @ X-band 9.4 GHz — 10× trihedral edge 1.0m
- Chi phí ≤ 2,000M VND (C1 estimate: 600-900M)
- Thời gian chế tạo ≤ 8 tuần
- Nội địa hoá ≥ 85% (C1)
- **Stability:** GM = 12.234 m (IMO min 0.15 m, 81× margin), wind heel < 1° @ Beaufort 10
- **Mooring hull interface:** Through-hull chain pipe (Option E) — SS316 pipe + flanges, HDPE compression tubes at bolt holes, UHMWPE wear pads, ESC risk = 0

## Deadline
Physical gate: 2026-04-07 | G4: 2026-04-19
