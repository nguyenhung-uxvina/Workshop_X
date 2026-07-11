---
created: 2026-04-09
updated: 2026-07-10
type: project
status: on-hold
tags: [#type/project, #status/on-hold]
tier: 3-strategic
origin: IRONMESH portfolio (unfrozen 2026-04-09)
deferred: 2026-07-10
deferred_reason: "Delete Pass v2 (barbell): V5-MOTORIZED ($50K NRE, 11-15 tuần, cần range access) = vùng giữa khi CEO không có bandwidth. V1 production (300 shipped) + N10-MAINT-KIT chuyển sang OPS/revenue line, không phải design project."
resume_condition: "Khách đặt V5/N12, HOẶC AICC fire-control sẵn sàng (pre-RCWS synergy), HOẶC bandwidth trống sau CUAV-SIM Phase 3."
---

# VN-MGM — Mount/Gimbal System — Status

## ⏸️ ON HOLD design work (2026-07-10 — Delete Pass v2)
- **V5-MOTORIZED FROZEN** (B0-BD done, BE deferred → bench test khi resume)
- **V1-NAVAL-12.7 production tiếp tục** (300 shipped, TRL 9) — ops, không phải design
- **🟢 N10-MAINT-KIT KÍCH HOẠT như REVENUE LINE** — consumable $200-500/unit/yr trên installed base. Đây là bước 1 của chiến lược MAINT-KIT $320K/yr toàn portfolio (xem decisions.md 2026-07-10). Vận hành qua ERP khi Phase 1 ERPNext chạy — không cần Pahl-Beitz pipeline.

## Tier
**Tier 3 — Strategic** (supporting hardware for weapon station products)

## Current Phase
**Phase 1: Task Clarification COMPLETE** — FORGE pipeline (4 skills) + helix-task-clarify (6 blocks) done.

## Pahl-Beitz Progress
- [x] Phase 0: Product Planning (/plan --portfolio)
- [x] Phase 0-Forge: FORGE pipeline (job-map, shift, cost, scout) — 8 files
- [x] Phase 1: Task Clarification (V1 retroactive, 72 req, 22 SFs, 6-flow) — 9 files
- [x] Phase 2: Conceptual Design (V1 retroactive, Rt=0.560, Re=0.833, "Proven Naval" confirmed) — 8 files
- [x] Phase 2: Conceptual Design (V5-MOTORIZED — B0-BD done, BE deferred → bench test)
- [ ] Phase 3: Embodiment Design
- [ ] Phase 4: Detail Design

## Phase 0 Planning (2026-04-09)
- [x] /init — folder structure created
- [x] Product Planning v1.0 — Steps 1-8, Gate 0 PASS
- [x] Product Proposal v1.0 — solution-neutral, FORCE-CENTERED paradigm
- [x] **Portfolio Planning v1.0** — 5 variants
- [x] **Portfolio Planning v1.1 (--ex)** — 5→12 variants (+MINI, SENSOR, OEM-BEARING, VEHICLE, MAINT-KIT, STABILIZED, RETROFIT)
- Reframed: "Gun Mount" → "Precision Heavy Pointing Platform"
- Sequence: **V1→N10→N12→V5→V3→N6→N8→V4→N7→N9→N11** (revised 2026-04-10: N12 before V5, V2-SIM deferred)
- **$1.83M / 5yr** revenue [L5-ASSUMPTION] (was $1.14M, +61%)
- Platform ROI: **192%** (was 131%)
- Design paradigm: **FORCE-CENTERED** (50 kN recoil + aiming under corrosion)
- Lead: V1-NAVAL-12.7 ($5-8K, 60% cheaper than imports)
- Strategic trajectory: manual mounts → ecosystem → motorization → **full indigenous RCWS**

## Portfolio Summary (12 products)

| # | Variant | Price | Type |
|---|---|---|---|
| V1 | NAVAL-12.7 | $5-8K | Manual pedestal, naval |
| V2 | SIM-CRADLE | $2-4K | Training cradle (CUAV-SIM) |
| N10 | MAINT-KIT | $200-500 | Annual consumable |
| V3 | ADAPTER-KIT | $1-3K | Weapon adapters |
| N6 | MINI | $1-2K | Small boat / camera |
| N8 | OEM-BEARING | $0.5-1.5K | Core bearing assembly |
| V4 | TRIPOD | $3-6K | Portable land |
| N7 | SENSOR-MOUNT | $2-5K | Camera/radar/light (civilian) |
| N9 | VEHICLE-TURRET | $4-8K | APC/truck roof ring |
| V5 | MOTORIZED | $10-18K | Servo-driven, pre-RCWS |
| N12 | RETROFIT-KIT | $3-6K | Manual→motorized upgrade |
| N11 | STABILIZED | $15-30K | Gyro-stabilized, premium |

## Portfolio Synergy
- **VN-CUAV-SIM** — V2-SIM-CRADLE = WEAPON-MOD weapon station
- **VN-AICC** — V5-MOTORIZED + AICC fire control = pre-RCWS
- **VN-AST-MSL-001** — same naval vessels, deck hardware commonality
- **BB-01 LOMAH** — target mounting accessories (V3 adapter concept)
- **Future RCWS** — V5 + optics + AICC = full indigenous RCWS system

## Blocking Constraints
1. CEO bandwidth (Tier 3 — behind T1/T2 projects)
2. Slewing ring bearing supplier selection
3. Recoil test requires military range access

## Archive Reference
VN-MGM-001A Deep Dive in `4_Archives/Projects/VN-RCWS/` — Phase 1 requirements, BOM, environment analysis. Use as V1 foundation.

## V5-MOTORIZED (Pre-RCWS) — /plan COMPLETE 2026-04-10
- Product Planning v1.0 + Operator Analysis v1.0 + **Reverse Engineering v1.0** (8 competitors × 12 sub-functions)
- **Gate 0: PROCEED**
- Scope: Option A (motor + clutch only, no optics/FC)
- **SC-V5-1: EM clutch mandatory fail-safe** (CEO confirmed)
- Delta: BLDC motor + worm gear + EM clutch + controller + joystick
- Development: 11-15 weeks, $10-16K prototype, $50K NRE
- Target: 5% of 300 V1 customers = 15 units × $14K = **$210K**
- Trắc thủ improvement: -43% engage time, +68% swarm defense, +3-5× endurance
- **Path: V5 → V5+optics → V5+AICC FC = full indigenous RCWS**

## V5-MOTORIZED Phase 1 — /helix-task-clarify --icdm COMPLETE 2026-04-11
- Requirements v1.0 (86 req) + ICDM extension (18) + failure-derived (6) = **110 requirements** (74D / 36W), 85% quantified, 19/19 categories
- Essential Problem: 4-pillar (track + fallback + survive + platform), 10 sub-problems
- Function Structure: **42 SFs** (22 V1 + 14 motor + 6 ICDM platform)
- Design Type: **ADAPTIVE** (V1 base + motor + platform delta)
- ICDM: 3 new categories (Modularity, Platform Commonality, Innovation Management)
- SC-V5-5 relaxed: recoil recovery 0.3s → **0.5s** (aligned with N12)
- P02 QC: **FULL PASS** | ICDM IRL: **4.7/5**
- **Gate 1: APPROVED** (CEO 2026-04-11)
- 11 [SAFETY-CRITICAL] items, 2 [TECHNOLOGY-GAP] (bench-testable)
- 11 deliverables + 7 supporting docs in Phase1-Task/V5-MOTORIZED/

## V5-MOTORIZED Phase 2 — /helix-concept-generate --icdm 2026-04-12
- **First real ICDM pipeline run with complete inputs (21/21)**
- B0-BD COMPLETE. BE DEFERRED (awaiting Phase A bench test).
- 16 morpho rows × 52 WPs. 4 concepts generated → Pugh screened → 2 survive:
  - **A "Pinion-Worm":** DQM 99%, BOM $7K, TTM 8wk, PC 6/6, IRL 4.2 ★ RECOMMENDED
  - **B "Pinion-Sector":** DQM 94.5%, BOM $8K, TTM 10-11wk, PC 6/6, IRL 3.6 (CONTINGENCY)
  - C eliminated (el speed, fallback, actuator recoil — 3 HIGH/CRIT)
  - D eliminated (breaks N12 commonality, COTS recoil risk)
- **KG-3 (V1 worm shaft) is the gating question:** shaft accessible → A. Not → B.
- CEO correction: F7.1 NOT confirmed for V5 (was N12 carry-over). P-05 = WISH not SC.
- Resume after bench test: `/helix-concept-generate VN-MGM V5-MOTORIZED --from BE`
- 8 deliverables in Phase2-Concept/V5-MOTORIZED/

## Sequence Change (CEO 2026-04-10)
**N12-RETROFIT-KIT TRƯỚC V5-MOTORIZED.**
- N12: $3-6K kit bolt-on lên 300 V1 existing → 15-25% conversion = 45-75 kits = $200-340K
- V5: $10-18K new mount cho khách mới → 5% conversion = 15 units = $210K
- N12 revenue funds V5 NRE ($50K)
- N12 field experience informs V5 design
- **Phase A bench test SERVES BOTH N12 and V5** (same motor + clutch + controller)

## V5-MOTORIZED Gate 1: **APPROVED** (CEO 2026-04-10)

## Phase A Bench Test — SOURCING (serves N12 + V5)
- **BOM:** $600-$1,500 (well within $3-5K budget)
- **Timeline:** 4 weeks (2 wk source + 2 wk test)
- **9 gate criteria** defined (GA-1 to GA-9)
- **Status:** P1 components ready to order (motors, gearboxes, EM clutches)

### Sourcing Checklist
- [ ] P1: Order motors (×2 BLDC 200W 48V) + gearboxes (×2 NMRV050 1:80) + EM clutches (×2 NC 24V)
- [ ] P2: Order servo drives (×2) + STM32 + joystick + encoders (×2)
- [ ] P3: Order E-stop + PSU + cables
- [ ] P4: CNC motor brackets + clutch adapters (WX in-house)
- [ ] P5: Source elastomer bushings locally

## N12-RETROFIT-KIT — /plan COMPLETE + Phase 1 COMPLETE 2026-04-10
- Phase 1: 63 req (38 N12 + 1 FMEA + 24 V1), 34 SFs, 3 solution-determining
- P02 QC: CONDITIONAL PASS (CEO D/W pending)
- Ready for: /helix-concept-generate VN-MGM N12-RETROFIT-KIT

## N12-RETROFIT-KIT — /plan COMPLETE 2026-04-10 (original)
- Product Planning v1.0 — Gate 0 PROCEED
- 28 N12-specific requirements + 72 inherited V1
- **SC-N12-4: NO welding/drilling on V1** (clamp-on design)
- **SC-N12-3: Fully removable ≤30 min**
- Target: 15-25% of 300 V1 = 45-75 kits = $200-340K
- NRE: $10-15K | Time to revenue: 8-10 weeks
- Development: Phase A (shared bench test) → Phase B (V1 fit) → Phase C (live fire) → Phase D (5 pilot kits)

## N10-MAINT-KIT — /plan COMPLETE 2026-04-10
- Product Planning v1.0 — Gate 0 PROCEED
- 2 variants: **N10-A** (12 tháng, $200-400) + **N10-B** (6 tháng, $100-200)
- Future: **N10-M** motor add-on for N12/V5 ($50-100)
- 12-point maintenance checklist = core IP
- NRE: **$1-2K** | ROI: **9,200%+** | Margin: 75-80%
- Development: **3 weeks** → 50 kits first batch
- Target: 300 installed × 50% adoption × $210 avg = **$32K/yr recurring**

## V3-ADAPTER-KIT — /plan COMPLETE 2026-04-10
- Product Planning v1.0 — Gate 0 PROCEED
- 3 kits: **V3-B** (NSV $800-1,500), **V3-C** (Type 54 $800-1,500), **V3-D** (KPVT $1,500-3,000)
- Approach: **B+C** (overlay for 300 existing, universal cradle for new production)
- V3-D (KPVT 14.5mm) restricted to pedestal/motorized only (80 kN too much for tripod)
- NRE: **$8K** | 4 weeks | Margin: 55-67%
- **Blocking dependency:** Weapon access for measurement + fit test (CEO coordinates military)

## Next Steps
1. **N10: Source kit materials** + design checklist card (3 weeks → first batch)
2. **V3: Coordinate weapon access** with military unit (NSV, Type 54, KPVT measurement)
3. **Order P1-P3 components** (AliExpress/Taobao) — serves both N12 + V5
2. **Start P4 CNC** (motor brackets + N12 clamp brackets) — while waiting for shipment
3. **Week 3:** Assemble bench test + first power-on
4. **Week 4:** V1 fit test (N12-specific) + live fire test (shared)
5. **After Phase A+B PASS → N12 pilot production (5 kits)**
6. **After N12 field success → V5-MOTORIZED Phase 2: /morpho**

## Deadline
Tier 3 — no hard deadline. V2-SIM-CRADLE demand driven by VN-CUAV-SIM timeline.
