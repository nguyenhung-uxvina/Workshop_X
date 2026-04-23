---
created: 2026-02-20
updated: 2026-04-09
type: project
status: active
tags: [#type/project, #status/active]
tier: governance-artifact
disposition: recommend-move-to-areas-forge
reactivated: 2026-04-09
reactivated_from: 2_Areas/FORGE — Product Strategy/IRONMESH
freeze_order_superseded: true
---

# IRONMESH — Status

## Tier
**Tier 2 — Product Dev** (reactivated 2026-04-09. Freeze Order v1.0 superseded by CEO decision.)

## Current Phase
**Platform Planning COMPLETE** — Product-First approach. Ecosystem Map + Extraction Triggers defined.

## /plan Output (2026-04-09)
- `Phase0-Plan/IRONMESH_Platform_Planning_v1.0.md` — Master planning document
- `Phase0-Plan/IRONMESH_Ecosystem_Map_v1.0.md` — Cross-product connections + extraction triggers
- **Approach:** Product-First — platform code extracted FROM working products, not built separately
- **Governance:** Quarterly extraction trigger review, interface spec ownership per product
- **7 modules tracked:** CDM, Scoring, AAR, V-SMASH, 3D Viz, Fire Control, C2
- **Recommendation:** Move IRONMESH from Projects → Areas/FORGE (governance artifact, not project)

## Freeze Order Status
**SUPERSEDED** (2026-04-09). Original Freeze Order (2026-02-20) no longer applies. All 15 products unfrozen for evaluation.

## Original 15 Products → Current Reality Mapping

| # | Original Product | Status | Current Reality |
|---|-----------------|--------|-----------------|
| 1 | VN-RANGE-001 | → **ABSORBED** | = BB-01 CORTEX-RANGE (V6) + VN-CUAV-SIM ecosystem |
| 2 | BB-01 | → **ACTIVE** | = BB-01 LOMAH (Tier 2, Phase 1, 9 variants) |
| 3 | VN-LOMAH | → **ABSORBED** | = BB-01 STANDARD (V1) — same product, renamed |
| 4 | VN-CAM | → **EVALUATE** | AI camera — possibly VN-AICAM (archived) or new scope |
| 5 | VN-TRN | → **ABSORBED** | = VN-CUAV-SIM AAR-SaaS + BB-01 CORTEX-RANGE analytics |
| 6 | VN-SMASH | → **ABSORBED** | = V-SMASH ballistic engine inside VN-CUAV-SIM (Layer 0) |
| 7 | VN-MGM | → **EVALUATE** | Mount/gimbal system — could serve VN-CUAV-SIM WEAPON-MOD |
| 8 | RCWS-127-NAVAL | → **EVALUATE** | Naval RCWS — related to VN-CUAV-SIM weapon training scope |
| 9 | Target USV | → **EVALUATE** | Maritime target — related to VN-AST-MSL-001 |
| 10 | Towed Target (Sea) | → **ABSORBED** | = VN-AST-MSL-001 "THANH TRI" (Tier 2, Phase 2 done) |
| 11 | Training Grenade | → **EVALUATE** | Training consumable — standalone niche |
| 12 | UAV Catapult | → **ARCHIVED** | = 4_Archives/Projects/UAV Catapult |
| 13 | Tethered Drone | → **EVALUATE** | Surveillance drone — could be VN-CUAV-SIM live target |
| 14 | TARGET-DRONE-001 | → **EVALUATE** | Air target drone — VN-CUAV-SIM live training complement |
| 15 | VN-CUA | → **EVALUATE** | Perimeter security — related to VN-AICAM scope |
| + | CORTEX | → **DISTRIBUTED** | = VN-AICC (Tier 2) + BB-01 CORTEX-RANGE + CUAV-SIM CORTEX |

## CEO Evaluation Results (2026-04-09)

| # | Product | CEO Decision | Action |
|---|---------|-------------|--------|
| 1 | VN-RANGE-001 | ABSORBED | → BB-01 CORTEX-RANGE + VN-CUAV-SIM ecosystem |
| 2 | BB-01 | ACTIVE | Already in 1_Projects/ (Tier 2) |
| 3 | VN-LOMAH | ABSORBED | → BB-01 STANDARD |
| 4 | VN-CAM | **ARCHIVE** | → VN-AICAM (already archived) |
| 5 | VN-TRN | ABSORBED | → VN-CUAV-SIM AAR-SaaS + BB-01 analytics |
| 6 | VN-SMASH | ABSORBED | → V-SMASH engine inside VN-CUAV-SIM |
| 7 | VN-MGM | **ACTIVATE** (standalone) | → New project, mount/gimbal system |
| 8 | RCWS-127-NAVAL | **ARCHIVE** | New product concept, not now |
| 9 | Target USV | **ARCHIVE** | Different from VN-AST, not now |
| 10 | Towed Target | ABSORBED | → VN-AST-MSL-001 |
| 11 | Training Grenade | **ARCHIVE** | Standalone niche, not now |
| 12 | UAV Catapult | ARCHIVED | Already in 4_Archives/ |
| 13 | Tethered Drone | **ARCHIVE** | Not now |
| 14 | TARGET-DRONE-001 | **ACTIVATE** (new product) | → New project, air target drone |
| 15 | VN-CUA | **ARCHIVE** | New product concept, not now |
| + | CORTEX | DISTRIBUTED | → VN-AICC + product-specific CORTEX variants |

## Summary

| Category | Count | Products |
|----------|-------|---------|
| **ABSORBED** (by current lines) | 5 | VN-RANGE-001, VN-LOMAH, VN-TRN, VN-SMASH, Towed Target |
| **ACTIVE** (existing projects) | 1 | BB-01 |
| **DISTRIBUTED** | 1 | CORTEX |
| **ACTIVATE** (new projects) | 2 | **VN-MGM**, **TARGET-DRONE-001** |
| **ARCHIVE** | 6 | VN-CAM, RCWS-127, Target USV, Training Grenade, Tethered Drone, VN-CUA |
| **Already archived** | 1 | UAV Catapult |

## Next Steps
1. **CEO Decision:** Move IRONMESH to `2_Areas/FORGE — Product Strategy/IRONMESH/`? (recommended)
2. **Quarterly review Q3 2026:** Check extraction trigger log (especially CTF / 3D Viz approaching threshold)
3. **Interface specs:** Define as products reach triggering phases (see Ecosystem Map §5)

## Key Metrics to Track
- Extraction triggers fired: 0/7 (CTF approaching)
- Interface specs defined: 0/8
- Products in production: 0/7
- Actual reuse %: TBD (post-deployment)
