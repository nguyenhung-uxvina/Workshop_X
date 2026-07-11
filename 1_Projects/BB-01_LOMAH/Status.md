---
created: 2026-03-05
updated: 2026-07-10
type: project
status: active
tags: [#type/project, #status/active]
tier: 2-product-dev
conditional_until: 2026-08-10
auto_freeze_condition: "Piezo bench test PHẢI có kết quả (force-time curve trên bàn thử) trước 2026-08-10. Không đạt → tự động on-hold, vòng ecosystem 8/8 chấp nhận lùi sang 2027. CEO decision 2026-07-10 (Delete Pass v2)."
---

# BB-01 LOMAH — Status

## ⏰ 30-DAY CLOCK (CEO decision 2026-07-10 — Delete Pass v2)
- **Điều kiện giữ active:** piezo bench test có kết quả **trước 2026-08-10**. Không đạt → AUTO-FREEZE.
- ✅ **Components ĐÃ ĐẶT MUA** (CEO xác nhận 2026-07-10) — clock đang chạy, chờ hàng về → dựng bench test.
- **dP/dt note:** đây là dP/dt test của cả portfolio — 91 ngày zero physical activity tính đến delete pass.

## 🔀 ABSORBED: VN-TGT-F Module-PROTO (2026-07-10)
BB-01 giờ là **nền tảng hit-detection chung** cho 2 dòng sản phẩm:
1. **BB-01 LOMAH** — miss/hit trên bia LOMAH (scope gốc, KHÔNG đổi hard constraints)
2. **VN-TGT-F bia BQP** — 13 SKU bia nổi/cố định (catalog tại `1_Projects/VN-TGT-F/`), dùng chung piezo + ESP32 + LoRa stack
- 1 bench test validate cả hai. TGT-F SKU kích hoạt khi có đơn hàng.
- COTS order gộp: piezo, ESP32, LoRa (nguyên list TGT-F PROTO).

## Current Phase
**Phase 1: Task Clarification** (Week 1, started 2026-03-05)

## Pahl-Beitz Progress
- [x] Phase 0: Gate Review + **Product Planning v2.0** + **Portfolio Planning v1.0** (2026-04-09, 6 variants, $570K/5yr)
- [ ] Phase 1: Task Clarification (IN PROGRESS)
- [ ] Phase 2: Conceptual Design
- [ ] Phase 3: Embodiment Design
- [ ] Phase 4: Detail Design

## Physical Validation
- **dP/dt this month:** 0 (project just started)
- **Next physical milestone:** Piezo sensor bench test
- **Next physical gate date:** TBD (after Phase 2 concept selected)
- **Hardware on hand:** None yet

## Blocking Constraints
1. Piezo CONTACT sensors sourcing (NOT MEMS) — need supplier quote
2. Op-amp availability: LM358, TL072 (Vietnam market)
3. Solo engineer, 25h/week — BB-01 is #1 priority in Musk Sequence

## Key Decisions Pending
- Piezo element selection (disc vs. plate, diameter, material)
- ADC selection (internal STM32 vs. external)
- Target panel material and mounting method

## Portfolio Planning (2026-04-09)
- [x] **Portfolio Planning v1.1** — 8 variants + lead (Musk+Hwang --ex applied)
- Sequence: V2→V5→V4→V3→V6→N7→N6→V7
- +N7-SENSOR-KIT (consumable, recurring) + N6-NODE (OEM platform module)
- 5 rejected: APP-ONLY (infeasible), SPORT/AIRSOFT (off-brand), SHM (too far), CHRONO (low priority)
- 5-year projection: $609K [L5-ASSUMPTION]
- Cross-product: V5-NAVAL × VN-AST-MSL-001, V7-BRIDGE × VN-CUAV-SIM HYBRID-BRIDGE
- Platform ROI: **393%**

## Deadline
**2026-09-05** — Working prototype detecting hit/miss on real target
