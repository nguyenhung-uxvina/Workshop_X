---
created: 2026-03-17
updated: 2026-03-17
type: project
status: active
deadline: 2027-03-17
area: "[[2_Areas/HELIX — Design Execution/_Area_Dashboard]]"
tags: [#type/project, #status/active, #topic/technology]
---

# VN-USV-SS-001 — Xuồng Không Người Lái Bán Ngầm (Semi-Submersible USV)

## Tổng Quan

| | |
|--|--|
| **Bắt đầu** | 2026-03-17 |
| **Deadline** | 2027-03-17 (12 tháng — xem roadmap 5 phases) |
| **Area** | [[2_Areas/HELIX — Design Execution/_Area_Dashboard]] |
| **Tier** | 2 — Product Development |
| **Khách hàng mục tiêu** | Bộ đội Biên phòng Việt Nam |
| **ACH** | YES — COTS hardware + AI navigation compensation |
| **Methodology** | Pahl-Beitz Systematic Design + D-M-I-R + Triple Helix |

## Mô Tả Sản Phẩm

Xuồng không người lái kiểu hở bán ngầm (Open-Hull Semi-Submersible USV) — di chuyển tự chủ hoặc điều khiển từ xa trên/dưới mặt biển với đặc tính quan sát thấp (low-observable), mang tải trọng nhiệm vụ (ISR, decoy, relay), truyền dữ liệu về trạm điều khiển.

**Paradigm shift:** "USV phải nhanh" → "USV phải dai dẳng và khó phát hiện"

## Mục Tiêu & Tiêu Chí Hoàn Thành

> Dự án HOÀN THÀNH khi: prototype full-scale hoạt động tự chủ waypoint following với controllable depth (surface vs. semi-submerged) trong SS 3, endurance ≥ 12h, verified tại biển thực tế.

- [ ] Lab demonstrator ($140) chứng minh concept bán ngầm (30 ngày)
- [ ] Requirements list ≥ 80 items, ≥ 80% quantified
- [ ] Concept evaluation VDI 2225 (≥ 3 variants)
- [ ] Full-scale prototype built và integrated
- [ ] Autonomous waypoint following + depth hold ± 50mm
- [ ] Sea trial sheltered waters — SS 2
- [ ] Open water sea trial — SS 3
- [ ] Indigenous content ≥ 50% (prototype), target 75% (production)

## Ràng Buộc Kỹ Thuật (Hard Constraints)

| HC | Constraint | Source |
|---|-----------|--------|
| HC-1 | Low-observable: RCS tối thiểu, chỉ mast nhô trên mặt nước | Mission requirement |
| HC-2 | Auto-surface on fault: ballast NC valve = fail-safe surface | Safety — MIL-STD-882E |
| HC-3 | Endurance ≥ 12h cruise (3 kts) | Biên phòng patrol requirement |
| HC-4 | Indigenous content ≥ 50% prototype | Defense procurement policy |
| HC-5 | Sea State 3 operational, SS 5 survival | Biển Đông conditions |
| HC-6 | Autonomy Level 2-3 (waypoint + supervised) | Initial deployment target |

## Thông Số Sơ Bộ (từ Technical Stack TS-001)

| Parameter | Value | Confidence |
|-----------|-------|:----------:|
| LOA | 2.5 – 4.0 m | [L5] |
| Đường kính thân chính | 300 – 500 mm | [L5] |
| Trọng lượng rỗng | 30 – 80 kg | [L5] |
| Tải trọng hữu ích | 15 – 40 kg | [L5] |
| Tốc độ cruise | 3 kts (~200W) | [L4] |
| Tốc độ transit | 6 kts (~600W) | [L4] |
| Pin | LiFePO4 48V, 50-100 Ah | [L4] |
| Chi phí prototype | $2,900 – $6,500 | [L5] |
| Chi phí sản xuất (×10+) | $2,000 – $4,000/unit | [L5] |

## Technical Stack (7 Layers)

1. **Hull & Structure:** HDPE torpedo-form + open-frame nhôm 6061 + mast carbon fiber
2. **Propulsion & Power:** Dual BLDC thruster + ballast pump + LiFePO4 48V
3. **Navigation & Autonomy:** Pixhawk 6X (ArduSub) + GPS + IMU + depth sensor
4. **Communication:** LoRa (range) + 4G (bandwidth) + optional Iridium
5. **Payload:** ISR camera (baseline), decoy/relay (modular)
6. **C2 Software:** ROS2 + MAVROS + ArduSub + AI inference (Jetson optional)
7. **GCS:** QGroundControl + custom overlay

Chi tiết: [[Phase0-Init/VN-USV-SS-TS-001_Technical_Stack.md]]

## Domains (Triple Helix)

| Domain | Scope | Lead |
|--------|-------|------|
| Cơ khí (Co) | Hull, ballast, mast, mounting, structural | CEO (TBD hire) |
| Điện tử (Dien) | Power system, sensors, ESC, wiring, BMS | CEO (TBD hire) |
| AI/Software (AI) | ArduSub, ROS2, navigation, C2, payload SW | CEO (TBD hire) |

## Sản Phẩm Tương Tự (FORGE Library)

| Product | Reuse Potential | Notes |
|---------|:--------------:|-------|
| VN-XUONG-UUV | Medium | Marine engineering experience, HDPE, LARS concepts |
| VN-AST-MSL-001 | Low | Towed target — different mission nhưng chia sẻ marine environment |
| BB-01 LOMAH | Low | Sensor signal chain có thể tham khảo cho payload |

## Kanban

### Done
- [x] Technical Stack TS-001 v1.0 drafted (2026-03-16)
- [x] Project initialized in IPARAG (2026-03-17)

### To Do
- [ ] Lab demonstrator 30-day ($140) — physical gate
- [ ] Phase 1 Task Clarification (/helix-task-clarify)
- [ ] Forge-shift ACH assessment
- [ ] Stakeholder engagement Biên phòng

## Tài Liệu Liên Quan

- [[0_Inbox/VN-USV-SS-TS-001_Technical_Stack_Semi_Submersible_USV.md]] — Technical Stack gốc
- [[5_Galaxy/Physical-World Interface]] — validation anchor
- [[5_Galaxy/RCS Scaling Law — Diện Tích Phản Xạ Tỷ Lệ Với Kích Thước Vật Lý]] — RCS design
