---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
tags: [#type/project, #status/active]
---

# TARGET-DRONE VTOL Variant — Pre-Study (from RE: Stallion VTOL)

## Origin
RE pipeline v3.0 (MECHA + ICDM) on Flightory Stallion VTOL, 2026-04-20.
Purpose: military scaling of VTOL fixed-wing concept for TARGET-DRONE family.

## RE Conclusion
- **Architecture selected:** C2-QUAD (Quadplane) — VDI 2225 winner 4/5 scenarios
- **NOT Stallion's tilt tricopter** — RE Paradox: study complex, build simple
- Conditional GO (3 conditions: demand validation, composite capability, EMC compliance)

## Key Specifications (from RE TVDT)
| Parameter | Target |
|-----------|--------|
| MTOW | ≤25 kg |
| Wingspan | 1800-2200 mm |
| Cruise endurance | ≥60 min |
| Hover T/W | ≥1.8:1 |
| Wind resistance | Bft 5 (30-40 km/h) |
| RCS augmentation | Configurable ±5 dBsm |
| Datalink range | ≥10 km BLOS |
| Reuse | ≥20 flight cycles |
| BOM cost | ≤$15,000 |
| Qualification | MIL-STD-810G |

## Blocking Conditions (must resolve before Phase 1)
1. **VN Navy demand validation** — run /bd-pulse or direct engagement
2. **Composite wing tooling pilot** — $20-40K investment decision
3. **EMC pre-compliance** — 5 BLDC motors vs GPS/datalink coexistence test

## RE Deliverables Available
- RE Dossier (16 files across 5 stages)
- 53 requirements (17 P&B categories, 37D/16W)
- TVDT (15 parameters with military targets)
- 6-flow function structure (16 SFs)
- Morphological matrix (4 architectures × 16 SFs)
- VDI 2225 evaluation (5-scenario sensitivity)
- V&V plan (35 tests, MIL-STD-810G)
- 6 design patterns + 7 heuristics

## Next Steps
1. `/forge-pre-study "TARGET-DRONE VTOL"` — validate demand (PRESTUDY 7-question)
2. `/bd-pulse` — log VN Navy touchpoint re: VTOL target drone need
3. Buy Stallion STL/STEP pack ($30-80) — hands-on tilt mechanism study
4. Build 1 Stallion-scale tilt prototype — learning exercise (audit mitigation)

## Galaxy Notes Created
- [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]]
- [[VTOL Architecture Selection Law — Motor Count x Mechanism Complexity = Constant]]
- [[Military Scaling Discontinuity Law — 10x Mass = New Product]]
