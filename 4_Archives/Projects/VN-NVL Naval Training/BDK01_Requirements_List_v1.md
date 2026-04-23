# REQUIREMENTS LIST - BĐK-01 "SÔNG HỒNG"
## High-Speed Remote-Controlled Surface Target
### Phiên bản Huấn luyện Chống Đổ bộ Đường biển

---

| **Document** | Requirements List v1.0 |
|--------------|------------------------|
| **Project** | BĐK-01 High-Speed RCST |
| **Application** | Anti-Landing Defense Training & Weapon Acceptance |
| **Date** | 10/01/2026 |
| **Status** | FOR APPROVAL |
| **Framework** | D-M-I-R × ODI × Systems Thinking |

---

## PHẦN I: TỔNG QUAN DỰ ÁN

### 1.1 Mục đích sử dụng

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MỤC ĐÍCH SỬ DỤNG BĐK-01                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  PRIMARY ROLES:                                                     │
│  ══════════════                                                     │
│                                                                     │
│  1. HUẤN LUYỆN CHỐNG ĐỔ BỘ (Anti-Landing Training)                 │
│     ├── Mô phỏng xuồng/tàu đổ bộ cơ động                           │
│     ├── Bắn pháo hạm 25mm-76mm                                     │
│     ├── Radar tracking + FLIR engagement                           │
│     ├── Điều kiện ngày và đêm                                      │
│     └── Cự ly 200-2,500m                                           │
│                                                                     │
│  2. NGHIỆM THU VŨ KHÍ (Weapon Acceptance)                          │
│     ├── Target cho pháo 12.7mm, 14.5mm, 25mm, 40mm, 57mm, 76mm    │
│     ├── FC Radar tracking validation                               │
│     ├── FLIR/EO sensor testing                                     │
│     └── Cự ly 500-2,500m                                           │
│                                                                     │
│  3. TÀU KÉO BIA (Tow Vessel)                                       │
│     ├── Kéo banner target cho live fire                            │
│     ├── Kéo hard target cho 25mm-76mm                              │
│     └── Tow distance: 200-500m                                     │
│                                                                     │
│  SECONDARY ROLES:                                                   │
│  ════════════════                                                   │
│  • Multi-target coordinated scenarios (fleet of 3+)                │
│  • Radar calibration target                                        │
│  • FLIR/EO tracking exercises                                      │
│  • Combined arms training (with VN-UAV-001)                        │
│  • Integration with VN-LVC-001 for AAR                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.2 Jobs-to-be-Done Analysis (ODI Framework)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    JOBS-TO-BE-DONE ANALYSIS                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  CORE FUNCTIONAL JOB:                                               │
│  ═══════════════════                                                │
│  "Cung cấp mục tiêu cơ động đa chữ ký cho huấn luyện bắn đạn thật  │
│   trên biển, đảm bảo an toàn và hiệu quả huấn luyện"               │
│                                                                     │
│  RELATED JOBS:                                                      │
│  ─────────────                                                      │
│  • Nghiệm thu vũ khí pháo hạm (12.7-76mm)                          │
│  • Huấn luyện sử dụng radar/FLIR trên tàu chiến                    │
│  • Mô phỏng đội hình xuồng/tàu đổ bộ đối phương                    │
│  • Đánh giá năng lực tác chiến đơn vị                              │
│                                                                     │
│  CONSUMPTION CHAIN JOBS:                                            │
│  ──────────────────────                                             │
│  • Vận chuyển, triển khai hệ thống ra biển                         │
│  • Bảo dưỡng, sửa chữa định kỳ                                     │
│  • Nạp nguồn, chuẩn bị trước nhiệm vụ                              │
│  • Thu hồi sau bài bắn                                             │
│                                                                     │
│  EMOTIONAL JOBS:                                                    │
│  ─────────────                                                      │
│  • Feel confident: "Biết huấn luyện sát thực tế"                   │
│  • Feel safe: "Không lo mất an toàn nhân sự"                       │
│  • Feel proud: "Tự chủ công nghệ quốc phòng"                       │
│                                                                     │
│  SOCIAL JOBS:                                                       │
│  ────────────                                                       │
│  • Be recognized: "Đơn vị hiện đại hóa thành công"                 │
│  • Be seen as leader: "Đi đầu áp dụng công nghệ mới"               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.3 Opportunity Analysis (ODI Algorithm)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    OPPORTUNITY ANALYSIS                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FORMULA: Opportunity = Importance + MAX(Importance - Satisfaction, 0)
│                                                                     │
│  ┌────────────────────────────────────┬─────┬─────┬───────┬───────┐│
│  │ Outcome                            │ Imp │ Sat │  Opp  │ Prior ││
│  ├────────────────────────────────────┼─────┼─────┼───────┼───────┤│
│  │ Minimize personnel risk            │ 9.5 │ 3.0 │ 16.0  │ ★★★★★││
│  │ Minimize foreign dependency        │ 8.5 │ 3.5 │ 13.5  │ ★★★★☆││
│  │ Maximize signature realism         │ 9.0 │ 5.0 │ 13.0  │ ★★★★☆││
│  │ Minimize deployment time           │ 8.5 │ 4.0 │ 13.0  │ ★★★★☆││
│  │ Maximize target maneuverability    │ 8.5 │ 5.0 │ 12.0  │ ★★★★☆││
│  │ Minimize operational cost          │ 8.0 │ 4.5 │ 11.5  │ ★★★☆☆││
│  │ Maximize integration capability    │ 7.5 │ 4.0 │ 11.0  │ ★★★☆☆││
│  │ Minimize maintenance complexity    │ 7.0 │ 5.0 │  9.0  │ ★★☆☆☆││
│  └────────────────────────────────────┴─────┴─────┴───────┴───────┘│
│                                                                     │
│  TOP OPPORTUNITIES:                                                 │
│  ═════════════════                                                  │
│  1. Personnel safety (16.0) → RCST eliminates manned tow boats     │
│  2. Foreign dependency (13.5) → Indigenous development             │
│  3. Signature realism (13.0) → Multi-signature ISTU                │
│  4. Deployment time (13.0) → Autonomous waypoint navigation        │
│  5. Maneuverability (12.0) → High-speed maneuvering capability     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.4 System Context

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SYSTEM CONTEXT DIAGRAM                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                         WARSHIP UNDER TEST                          │
│                        ┌─────────────────────┐                      │
│                        │  • 25mm-76mm guns   │                      │
│                        │  • FC Radar         │                      │
│                        │  • FLIR/EO          │                      │
│                        │  • FCS integration  │                      │
│                        └──────────┬──────────┘                      │
│                                   │                                 │
│                         Engages / Tracks                            │
│                                   │                                 │
│                                   ▼                                 │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                                                             │   │
│  │                    BĐK-01 "SÔNG HỒNG"                       │   │
│  │              High-Speed Target Platform                     │   │
│  │                                                             │   │
│  │   ┌─────────────────────────────────────────────────────┐   │   │
│  │   │               ISTU (Integrated Target)              │   │   │
│  │   │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐  │   │   │
│  │   │  │ Visual  │ │  Radar  │ │   IR    │ │  Night   │  │   │   │
│  │   │  │ Target  │ │   RCS   │ │  +80°C  │ │   LED    │  │   │   │
│  │   │  │ Bia 18  │ │ 10-100  │ │  800W   │ │ Strobe   │  │   │   │
│  │   │  │ Bia 18b │ │   m²    │ │ Heater  │ │          │  │   │   │
│  │   │  └─────────┘ └─────────┘ └─────────┘ └──────────┘  │   │   │
│  │   └─────────────────────────────────────────────────────┘   │   │
│  │                           │                                 │   │
│  │   ┌───────────────────────┴───────────────────────────┐     │   │
│  │   │              USV PLATFORM                         │     │   │
│  │   │  Hull │ Propulsion │ Control │ Power │ Tow System│     │   │
│  │   │  5-7kW│ 15-20km/h  │ WP+RTH  │ 9.6kWh│ 500kg    │     │   │
│  │   └───────────────────────────────────────────────────┘     │   │
│  │                           │                                 │   │
│  └───────────────────────────┼─────────────────────────────────┘   │
│                              │                                      │
│               Radio Link (5-10 km LOS)                             │
│                              │                                      │
│                              ▼                                      │
│                 ┌─────────────────────────┐                        │
│                 │  GROUND CONTROL STATION │                        │
│                 │  • Manual control       │                        │
│                 │  • Waypoint navigation  │                        │
│                 │  • Signature control    │                        │
│                 │  • Tow management       │                        │
│                 │  • Mission logging      │                        │
│                 └───────────┬─────────────┘                        │
│                             │                                       │
│              ┌──────────────┼──────────────┐                       │
│              │              │              │                        │
│              ▼              ▼              ▼                        │
│     ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│     │ VN-LVC-001 │  │ VN-NGS-001 │  │ VN-CPX-001 │                 │
│     │ Integration│  │ Gunnery Sim│  │ Command    │                 │
│     └────────────┘  └────────────┘  └────────────┘                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.5 Leverage Points Analysis (Systems Thinking)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    LEVERAGE POINTS ANALYSIS                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MEADOWS L1-L12 APPLIED TO BĐK-01:                                 │
│  ═════════════════════════════════                                  │
│                                                                     │
│  ┌──────┬─────────────────────────────────────────────┬──────────┐ │
│  │Level │ Leverage Point Application                   │ Impact   │ │
│  ├──────┼─────────────────────────────────────────────┼──────────┤ │
│  │ L3   │ Goal: "Tự chủ công nghệ" vs "mua tốt nhất"  │ ★★★★★    │ │
│  │ L5   │ Rules: TCKT-BĐK-01 do VN xây dựng          │ ★★★★☆    │ │
│  │ L6   │ Info: Real-time target data, mission log    │ ★★★★☆    │ │
│  │ L7   │ R-Loop: Training effectiveness spiral       │ ★★★★☆    │ │
│  │ L10  │ Structure: Platform cho dòng RCST family   │ ★★★★★    │ │
│  │ L11  │ Buffers: Inventory spare parts, fleet      │ ★★★☆☆    │ │
│  └──────┴─────────────────────────────────────────────┴──────────┘ │
│                                                                     │
│  SYSTEM ARCHETYPE ADDRESSED:                                        │
│  ─────────────────────────────                                      │
│  "Shifting the Burden" - BĐK-01 phá vỡ vòng lặp phụ thuộc RCST    │
│  nước ngoài bằng giải pháp fundamental (indigenous development)    │
│                                                                     │
│  INTERVENTION CASCADE:                                              │
│  ─────────────────────                                              │
│  Phase 1 (Month 1-3): L6 + L10 (Info + Structure)                  │
│  Phase 2 (Month 4-8): L5 + L7 (Rules + R-Loop)                     │
│  Phase 3 (Month 9-18): L3 (Goal → Platform transformation)         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN II: REQUIREMENTS LIST

### Chú thích

| Ký hiệu | Ý nghĩa |
|---------|---------|
| **D** | Demand (MUST) - Yêu cầu bắt buộc |
| **W** | Wish (SHOULD) - Yêu cầu mong muốn |
| **[ODI]** | Từ ODI Opportunity Analysis |
| **[SYS]** | Từ Systems Thinking Analysis |

---

### 2.1 MISSION PROFILE (MP)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | MP.01 | Bài bắn huấn luyện chống đổ bộ | Có | - | Review | Per Điều lệnh |
| D | MP.02 | Cự ly bắn tối thiểu | 200 | m | Sea trial | Safety zone |
| D | MP.03 | Cự ly bắn tối đa (huấn luyện) | 2,000 | m | Sea trial | |
| D | MP.04 | Cự ly bắn tối đa (nghiệm thu) | 2,500 | m | Sea trial | For 76mm |
| D | MP.05 | Điều kiện hoạt động ngày | Có | - | Demo | |
| D | MP.06 | Điều kiện hoạt động đêm | Có | - | Night trial | |
| D | MP.07 | Số lượng mục tiêu hỗ trợ | 2 | loại | Inspection | Bia 18, 18b |
| D | MP.08 | Hỗ trợ FC Radar tracking | Có | - | Radar test | |
| D | MP.09 | Hỗ trợ FLIR/EO tracking | Có | - | FLIR test | |
| D | MP.10 | Khả năng kéo bia | Có | - | Tow test | 300-500m |
| W | MP.11 | [ODI] Multi-target coordination | 3+ | units | Fleet test | Future |
| W | MP.12 | [SYS] VN-LVC-001 integration | Có | - | Interface test | L6 Info |

---

### 2.2 PLATFORM - HULL (PH)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | PH.01 | Loại thân | Monohull | - | Inspection | |
| D | PH.02 | Vật liệu thân | Aluminum 5083 | - | Material cert | Marine grade |
| D | PH.03 | Chiều dài tổng thể (LOA) | 3,500 ± 100 | mm | Measure | |
| D | PH.04 | Chiều rộng (beam) | 1,200 ± 50 | mm | Measure | |
| D | PH.05 | Chiều cao mạn (freeboard) | ≥250 | mm | Measure | Loaded |
| D | PH.06 | Mớn nước (draft) | ≤300 | mm | Measure | Loaded |
| D | PH.07 | Trọng lượng khô (dry) | ≤350 | kg | Weigh | |
| W | PH.08 | Trọng lượng khô (target) | ≤300 | kg | Weigh | |
| D | PH.09 | Tải trọng hữu ích | ≥150 | kg | Load test | ISTU + tow |
| D | PH.10 | Độ nổi dương (positive buoyancy) | Có | - | Flood test | Foam-filled |
| D | PH.11 | Khả năng tự phục hồi | Có | - | Capsize test | Self-righting |
| D | PH.12 | Điểm neo cáp kéo (tow point) | Có | - | Inspection | Stern mount |
| D | PH.13 | Tải trọng điểm kéo | ≥500 | kg | Pull test | Safety factor |
| D | PH.14 | [ODI] Màu thân | Hi-vis Orange | - | Visual | Safety priority |

**Hull Design Rationale:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    HULL DESIGN - BĐK-01                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  MATERIAL: Aluminum 5083-H116                                       │
│  ═══════════════════════════                                        │
│  • Excellent marine corrosion resistance                            │
│  • High strength-to-weight ratio                                    │
│  • Proven in naval applications                                     │
│  • Weldable, field-repairable                                      │
│                                                                     │
│  SELF-RIGHTING CAPABILITY:                                          │
│  ═══════════════════════════                                        │
│                                                                     │
│        Normal Position              Capsized               Recovered│
│       ┌─────────────┐            ┌─────────────┐        ┌──────────┐│
│       │    ▲ ISTU   │            │             │        │    ▲     ││
│       │   /|\       │            │   ────────  │        │   /|\    ││
│       │ ┌─┴─┴─┐     │    Roll    │   Battery   │  Auto  │ ┌─┴─┴─┐  ││
│       │ │     │     │   ───►     │   (heavy)   │ ◄───   │ │     │  ││
│       └─┴─────┴─────┘            └─────────────┘  right └─┴─────┴──┘│
│        ~~~~water~~~~              ~~~~water~~~~         ~~~~water~~ │
│                                                                     │
│  Key: Low center of gravity + foam buoyancy = automatic recovery   │
│                                                                     │
│  STRUCTURAL ZONES:                                                  │
│  ═════════════════                                                  │
│                                                                     │
│       ┌─────────────────────── 3500mm ────────────────────────┐    │
│       │   BOW      │     MIDSHIP      │      STERN            │    │
│       │            │                  │                       │    │
│       │  • Sealed  │  • Battery bay   │  • Motor well         │    │
│       │  • Foam    │  • Control box   │  • Tow point          │    │
│       │  • Anchor  │  • ISTU mount    │  • Winch mount        │    │
│       │            │                  │                       │    │
│       └────────────┴──────────────────┴───────────────────────┘    │
│                          1200mm (beam)                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 2.3 PROPULSION SYSTEM (PR)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | PR.01 | Loại động cơ | Electric outboard | - | Inspection | |
| D | PR.02 | Công suất động cơ | ≥5,000 | W | Spec sheet | |
| W | PR.03 | Công suất động cơ (target) | ≥7,000 | W | Spec sheet | For towing |
| D | PR.04 | Điện áp động cơ | 48 | VDC | Measure | |
| D | PR.05 | Tốc độ tối đa (không kéo) | ≥15 | km/h | GPS test | ~8 knots |
| W | PR.06 | Tốc độ tối đa (target) | ≥20 | km/h | GPS test | ~11 knots |
| D | PR.07 | Tốc độ khi kéo bia vải | ≥10 | km/h | GPS test | ~5 knots |
| D | PR.08 | Tốc độ khi kéo bia cứng | ≥8 | km/h | GPS test | ~4 knots |
| D | PR.09 | Tốc độ station-keeping | 0-5 | km/h | GPS test | Drift correct |
| D | PR.10 | Mức ồn | ≤75 | dB(A) @ 1m | Sound meter | |
| D | PR.11 | Bảo vệ quá nhiệt | Có | - | Test | Auto shutoff |
| D | PR.12 | [ODI] Prop guard | Có | - | Inspection | Safety |

---

### 2.4 ENDURANCE & RANGE (ER)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | ER.01 | Thời gian hoạt động liên tục | ≥4 | hours | Endurance test | @ cruise |
| W | ER.02 | Thời gian hoạt động (target) | ≥6 | hours | Endurance test | |
| D | ER.03 | Phạm vi hoạt động | ≥30 | km | GPS track | |
| W | ER.04 | Phạm vi hoạt động (target) | ≥50 | km | GPS track | |
| D | ER.05 | Thời gian kéo bia liên tục | ≥3 | hours | Tow test | |
| D | ER.06 | Thời gian sạc đầy | ≤8 | hours | Charge test | Overnight |
| D | ER.07 | [ODI] Missions per charge | ≥2 | sessions | Ops test | Cost/mission |

---

### 2.5 CONTROL SYSTEM (CS)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | CS.01 | Chế độ điều khiển tay | Có | - | Demo | Joystick |
| D | CS.02 | Chế độ waypoint | Có | - | Demo | Programmable |
| D | CS.03 | Số điểm waypoint | ≥20 | points | Demo | |
| D | CS.04 | Chức năng station-keeping | Có | - | GPS test | Hold position |
| D | CS.05 | Chức năng Return-to-Home | Có | - | Demo | Fail-safe |
| D | CS.06 | Cự ly điều khiển tối thiểu | ≥5 | km | Range test | LOS |
| W | CS.07 | Cự ly điều khiển (target) | ≥10 | km | Range test | LOS |
| D | CS.08 | Tần số điều khiển chính | 2.4 | GHz | Spec | |
| D | CS.09 | Tần số điều khiển backup | UHF (400-470) | MHz | Spec | Redundancy |
| D | CS.10 | Độ trễ điều khiển | ≤200 | ms | Latency test | |
| D | CS.11 | Fail-safe khi mất tín hiệu | Có | - | Demo | RTH or stop |
| D | CS.12 | Điều khiển hệ thống kéo | Có | - | Demo | Winch |
| D | CS.13 | Cảnh báo căng cáp | Có | - | Test | Overload |
| W | CS.14 | [SYS] API cho VN-LVC-001 | Có | - | Interface test | L6 Info |

---

### 2.6 TARGET PRESENTATION SYSTEM (TP)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | TP.01 | Bia số 18 (xuồng - bow view) | 250 × 130 | cm × mm | Measure | Per Điều lệnh |
| D | TP.02 | Bia số 18b (tàu - side view) | 340 × 90 | cm × mm | Measure | Per Điều lệnh |
| D | TP.03 | Màu sắc bia | Đen mờ | - | Visual | Non-reflective |
| D | TP.04 | Thời gian thay đổi module | ≤15 | minutes | Timing | 2 persons |
| W | TP.05 | Thời gian thay đổi (target) | ≤10 | minutes | Timing | |
| D | TP.06 | Vật liệu bề mặt bia | Composite/Plywood | - | Inspection | Replaceable |
| D | TP.07 | Đèn LED viền (ban đêm) | Có | - | Night demo | |
| D | TP.08 | Đèn strobe (ban đêm) | Có | - | Night demo | 1-2 Hz |
| D | TP.09 | Tầm nhìn đèn ban đêm | ≥1,000 | m | Observer | |
| D | TP.10 | Điều khiển đèn từ xa | Có | - | Demo | On/Off/Dim |

---

### 2.7 SIGNATURE AUGMENTATION - RADAR (SR)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SR.01 | Loại reflector | Trihedral corner | - | Inspection | Passive |
| D | SR.02 | Vật liệu reflector | Aluminum (polished) | - | Inspection | Marine |
| D | SR.03 | RCS tối thiểu | ≥10 | m² | Radar test | Small boat |
| D | SR.04 | RCS tối đa | ≥100 | m² | Radar test | Larger vessel |
| W | SR.05 | RCS tối đa (target) | ≥150 | m² | Radar test | Extended |
| D | SR.06 | Số kích thước reflector | ≥3 | sizes | Inspection | S/M/L |
| D | SR.07 | Chiều cao cột | 0.5 - 2.0 | m | Measure | Telescopic |
| D | SR.08 | Thay đổi không dụng cụ | Có | - | Demo | Quick-change |
| D | SR.09 | Phát hiện bởi FC Radar | ≥5,000 | m | Radar test | |

---

### 2.8 SIGNATURE AUGMENTATION - INFRARED (SI)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SI.01 | Loại heater | Silicone heater mat | - | Inspection | |
| D | SI.02 | Công suất heater | ≥800 | W | Spec | |
| D | SI.03 | Điện áp hoạt động | 48 | VDC | Measure | Direct |
| D | SI.04 | Nhiệt độ tối thiểu | +30 | °C above | Thermal cam | |
| D | SI.05 | Nhiệt độ tối đa | +80 | °C above | Thermal cam | |
| W | SI.06 | Nhiệt độ (extended) | +100 | °C above | Thermal cam | |
| D | SI.07 | Điều chỉnh nhiệt độ | PWM remote | - | Demo | From GCS |
| D | SI.08 | Số bước điều chỉnh | ≥10 | steps | Demo | Fine control |
| D | SI.09 | Thời gian đạt +30°C | ≤10 | minutes | Timing | Cold start |
| D | SI.10 | Thời gian đạt +80°C | ≤25 | minutes | Timing | Cold start |
| D | SI.11 | Bảo vệ quá nhiệt | Có | - | Test | Auto cutoff |
| D | SI.12 | Nhiệt độ cutoff | 120 | °C | Test | Safety |
| D | SI.13 | Cách nhiệt mặt sau | ≥50 | mm | Measure | Ceramic fiber |
| D | SI.14 | R-value cách nhiệt | ≥2.0 | m²K/W | Spec | |
| D | SI.15 | Diện tích phát nhiệt | ≥2,400 | cm² | Measure | 60×40 cm |
| D | SI.16 | Phát hiện bởi FLIR | ≥3,000 | m | FLIR test | |
| W | SI.17 | Phát hiện FLIR (target) | ≥5,000 | m | FLIR test | |

**IR System Detail:**

```
┌─────────────────────────────────────────────────────────────────────┐
│              IR HEATER SYSTEM - BĐK-01                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  CONSTRUCTION:                                                      │
│  ═════════════                                                      │
│                                                                     │
│       ┌─────────────────────────────────────────────┐              │
│       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ Target       │
│       │                 (6mm composite)             │ surface      │
│       ├─────────────────────────────────────────────┤              │
│       │           AIR GAP (30mm)                    │ Convection   │
│       ├─────────────────────────────────────────────┤              │
│       │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ HEATER       │
│       │▓▓▓▓▓▓▓ Silicone mat 800W (48VDC) ▓▓▓▓▓▓▓▓▓▓│ PANEL        │
│       │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ (3mm Al)     │
│       ├─────────────────────────────────────────────┤              │
│       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│ INSULATION   │
│       │▒▒▒▒▒▒ Ceramic fiber blanket (50mm) ▒▒▒▒▒▒▒▒│ R=2.0        │
│       │▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│              │
│       ├─────────────────────────────────────────────┤              │
│       │████████████████████████████████████████████│ BACK PLATE   │
│       │                 (3mm Aluminum)              │ (structural) │
│       └─────────────────────────────────────────────┘              │
│                                                                     │
│  SPECIFICATIONS:                                                    │
│  ══════════════                                                     │
│  • Power: 800W @ 48VDC (17A max)                                   │
│  • Area: 600 × 400 mm (2,400 cm²)                                  │
│  • Watt density: 0.33 W/cm² (safe level)                           │
│  • Range: Ambient to +80°C above                                   │
│  • Control: PWM, 10 steps, remote                                  │
│  • Sensor: K-type thermocouple                                     │
│  • Protection: 120°C thermal cutoff                                │
│  • Emissivity: 0.85-0.95                                           │
│                                                                     │
│  DETECTION RANGE vs TEMPERATURE:                                    │
│  ════════════════════════════════                                   │
│  ┌─────────────┬─────────────────┬─────────────────┐               │
│  │ Temperature │ Detection Range │ Application     │               │
│  ├─────────────┼─────────────────┼─────────────────┤               │
│  │ +30°C       │ ~2,000 m        │ Basic training  │               │
│  │ +50°C       │ ~3,500 m        │ Standard        │               │
│  │ +80°C       │ ~5,000+ m       │ Full acceptance │               │
│  └─────────────┴─────────────────┴─────────────────┘               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 2.9 SIGNATURE AUGMENTATION - VISUAL (SV)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SV.01 | Màu thân tàu (ngày) | Hi-vis Orange | - | Visual | Safety |
| D | SV.02 | Băng phản quang | Có | - | Inspection | SOLAS |
| D | SV.03 | LED edge lighting | IP67, SMD 5050 | - | Spec | |
| D | SV.04 | Độ sáng LED | ≥1,200 | lm/m | Spec | |
| D | SV.05 | Chiều dài LED strip | ≥8 | m | Measure | Perimeter |
| D | SV.06 | Màu LED | White (5000K) | - | Visual | + red option |
| D | SV.07 | Strobe lights | 4 | units | Count | Corners |
| D | SV.08 | Tần số strobe | 1-2 | Hz | Measure | Adjustable |
| D | SV.09 | Tầm nhìn strobe | ≥2,000 | m | Observer | Clear night |
| W | SV.10 | Smoke generator | Optional | - | - | Future |

---

### 2.10 TOW SYSTEM (TS)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | TS.01 | Loại tời | Electric winch | - | Inspection | |
| D | TS.02 | Sức kéo tời | ≥500 | kg | Load test | |
| D | TS.03 | Chiều dài cáp | ≥500 | m | Measure | |
| D | TS.04 | Vật liệu cáp | Dyneema (HMPE) | - | Spec | |
| D | TS.05 | Đường kính cáp | 12 | mm | Measure | |
| D | TS.06 | Tải trọng đứt cáp | ≥10,000 | kg | Cert | Safety |
| D | TS.07 | Cáp nổi trên nước | Có | - | Test | Buoyant |
| D | TS.08 | Tốc độ thu cáp | ≥0.5 | m/s | Timing | |
| D | TS.09 | Tốc độ thả cáp | ≥0.5 | m/s | Timing | Controlled |
| D | TS.10 | Quick-connect | Có | - | Inspection | Snap shackle |
| D | TS.11 | Cảm biến sức căng | Có | - | Test | Load cell |
| D | TS.12 | Ngưỡng cảnh báo | 300 | kg | Calibration | 60% limit |
| D | TS.13 | Điều khiển từ GCS | Có | - | Demo | Pay-out/reel |
| D | TS.14 | Vị trí lắp tời | Stern | - | Inspection | Centerline |

**Tow System Integration:**

```
┌─────────────────────────────────────────────────────────────────────┐
│              TOW SYSTEM CONFIGURATION - BĐK-01                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  LAYOUT:                                                            │
│  ═══════                                                            │
│                                                                     │
│                    BĐK-01                                          │
│       ┌───────────────────────────────────┐                        │
│       │      BOW                          │                        │
│       │       ▲                           │                        │
│       │       │                           │                        │
│       │   ┌───┴───┐                       │                        │
│       │   │ ISTU  │                       │                        │
│       │   │ Mount │                       │                        │
│       │   └───────┘                       │                        │
│       │                                   │                        │
│       │              STERN                │                        │
│       │           ┌─────────┐             │                        │
│       │           │ WINCH   │◄── Electric winch                    │
│       │           │ 500kg   │    (centerline mount)                │
│       │           └────┬────┘             │                        │
│       └────────────────┼──────────────────┘                        │
│                        │                                            │
│                   TOW POINT                                         │
│                   (500kg rated)                                     │
│                        │                                            │
│                        │ Dyneema 12mm                              │
│                        │ 500m, buoyant                             │
│                        │                                            │
│           ┌────────────┴────────────┐                              │
│           │    200-500m spacing     │                              │
│           └────────────┬────────────┘                              │
│                        │                                            │
│                        ▼                                            │
│                ┌───────────────┐                                   │
│                │  TOWED TARGET │                                   │
│                │  (Banner/Hard)│                                   │
│                └───────────────┘                                   │
│                                                                     │
│  OPERATING MODES:                                                   │
│  ════════════════                                                   │
│  • Banner tow (light): 10 km/h, 300m spacing                       │
│  • Hard target tow: 8 km/h, 200m spacing                           │
│  • Station-keeping with tow: 0-5 km/h                              │
│                                                                     │
│  TENSION MONITORING:                                                │
│  ═══════════════════                                                │
│  • Load cell: 0-500 kg range                                       │
│  • Warning: 300 kg (60%)                                           │
│  • Critical: 400 kg (80%)                                          │
│  • Display: GCS real-time                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 2.11 POWER SYSTEM (PS)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | PS.01 | Loại pin | LiFePO4 | - | Spec | Safety |
| D | PS.02 | Điện áp danh định | 48 | VDC | Measure | |
| D | PS.03 | Dung lượng | ≥200 | Ah | Spec | |
| D | PS.04 | Năng lượng | ≥9.6 | kWh | Calculate | |
| D | PS.05 | Hệ thống BMS | Có | - | Inspection | |
| D | PS.06 | Bảo vệ quá sạc | Có | - | Test | BMS |
| D | PS.07 | Bảo vệ quá xả | Có | - | Test | BMS |
| D | PS.08 | Bảo vệ ngắn mạch | Có | - | Test | BMS |
| D | PS.09 | Cân bằng cell | Có | - | Test | BMS |
| D | PS.10 | Thời gian sạc | ≤8 | hours | Charge test | 0-100% |
| D | PS.11 | Dòng sạc tối đa | ≤50 | A | Spec | |
| W | PS.12 | Pin có thể thay nóng | Có | - | Demo | Field swap |

**Power Budget Analysis:**

```
┌─────────────────────────────────────────────────────────────────────┐
│              POWER BUDGET - BĐK-01                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  CONSUMERS:                          TYPICAL (W)      MAX (W)       │
│  ──────────────────────────────────────────────────────────────    │
│  Propulsion motor                      2,500           7,000        │
│  IR Heater                               500             800        │
│  LED lighting                            120             160        │
│  Strobe lights                            40              40        │
│  Control system                           50              80        │
│  Communication                            20              30        │
│  Tow winch                                 0             500        │
│  ──────────────────────────────────────────────────────────────    │
│  TOTAL                                 3,230           8,610        │
│                                                                     │
│  BATTERY: 48V × 200Ah = 9,600 Wh = 9.6 kWh                        │
│                                                                     │
│  ENDURANCE ESTIMATES:                                               │
│  ─────────────────────                                              │
│  • Cruise only (3.2kW):           9,600 / 3,230 = 3.0 hours       │
│  • Cruise + IR + LED (4.2kW):     9,600 / 4,200 = 2.3 hours       │
│  • Station-keeping + IR (1.5kW):  9,600 / 1,500 = 6.4 hours       │
│  • High-speed (7kW):              9,600 / 7,000 = 1.4 hours       │
│  • Towing + IR (5.0kW):           9,600 / 5,000 = 1.9 hours       │
│                                                                     │
│  MISSION PROFILES:                                                  │
│  ─────────────────                                                  │
│  • Training (4h): 1h transit + 2h exercise + 1h return = OK        │
│  • Acceptance (3h): 30min deploy + 2h test + 30min recover = OK   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

### 2.12 ENVIRONMENTAL (EV)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | EV.01 | Sea State hoạt động | ≥3 | Douglas | Sea trial | 0.5-1.25m |
| W | EV.02 | Sea State (target) | ≥4 | Douglas | Sea trial | 1.25-2.5m |
| D | EV.03 | Gió hoạt động | ≤Beaufort 5 | - | Sea trial | 8-10.8 m/s |
| D | EV.04 | IP rating (electronics) | ≥IP65 | - | Test | |
| W | EV.05 | IP rating (target) | ≥IP67 | - | Test | |
| D | EV.06 | Nhiệt độ hoạt động | 0 - 50 | °C | Spec | |
| D | EV.07 | Độ ẩm hoạt động | 0 - 95 | %RH | Spec | Non-condensing |
| D | EV.08 | Chống ăn mòn muối | 96 | hours | Salt spray | ASTM B117 |
| D | EV.09 | Chống tia UV | Có | - | Spec | Outdoor |

---

### 2.13 SAFETY (SF)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | SF.01 | Nút dừng khẩn cấp (E-stop) | Có | - | Demo | Physical + remote |
| D | SF.02 | Đèn hàng hải | Có | - | Inspection | COLREGS |
| D | SF.03 | Độ nổi dương khi ngập | Có | - | Flood test | Foam |
| D | SF.04 | Màu sắc cảnh báo | Hi-vis Orange | - | Visual | |
| D | SF.05 | Băng phản quang | SOLAS grade | - | Inspection | |
| D | SF.06 | Cờ cảnh báo | Có | - | Inspection | Range flag |
| D | SF.07 | Bảo vệ chân vịt | Có | - | Inspection | Prop guard |
| D | SF.08 | Cảnh báo căng cáp kéo | Có | - | Test | Visual + audible |
| D | SF.09 | [ODI] Personnel risk mitigation | Có | - | Design review | Priority #1 |

---

### 2.14 GROUND CONTROL STATION (GC)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | GC.01 | Loại máy tính | Ruggedized laptop | - | Inspection | MIL-spec |
| D | GC.02 | Màn hình chính | ≥15 | inch | Measure | Sunlight readable |
| D | GC.03 | Joystick điều khiển | Có | - | Inspection | USB |
| D | GC.04 | Hiển thị bản đồ | Có | - | Demo | GPS overlay |
| D | GC.05 | Hiển thị telemetry | Có | - | Demo | Real-time |
| D | GC.06 | Lập trình waypoint | Có | - | Demo | Mission planner |
| D | GC.07 | Điều khiển signature | Có | - | Demo | IR, LED, RCS |
| D | GC.08 | Điều khiển tời | Có | - | Demo | Pay-out/reel |
| D | GC.09 | Hiển thị sức căng cáp | Có | - | Demo | Real-time |
| D | GC.10 | Ghi dữ liệu (logging) | Có | - | Demo | Mission data |
| D | GC.11 | Antenna gain | ≥12 | dBi | Spec | Directional |
| D | GC.12 | Hộp vận chuyển | Pelican-style | - | Inspection | IP67 |
| W | GC.13 | [SYS] Export to VN-LVC-001 | Có | - | Interface test | AAR |

---

### 2.15 LOGISTICS & TRANSPORT (LG)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | LG.01 | Phương thức vận chuyển | Trailer | - | Demo | Road |
| D | LG.02 | Kích thước vận chuyển | ≤4.0 × 1.5 × 1.5 | m | Measure | L×W×H |
| D | LG.03 | Thời gian triển khai | ≤30 | minutes | Timing | Ready to operate |
| W | LG.04 | Thời gian triển khai (target) | ≤20 | minutes | Timing | |
| D | LG.05 | Số người triển khai | 3-4 | persons | Demo | |
| D | LG.06 | Thiết bị hạ thủy | Crane hoặc ramp | - | Demo | |
| D | LG.07 | Trọng lượng nâng | ≤500 | kg | Weigh | With ISTU |
| D | LG.08 | Vận chuyển bia kéo | Có | - | Demo | On trailer |

---

### 2.16 MAINTENANCE & RELIABILITY (MT)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | MT.01 | MTBF (Mean Time Between Failures) | ≥500 | hours | Analysis | |
| W | MT.02 | MTBF (target) | ≥1,000 | hours | Analysis | |
| D | MT.03 | MTTR (Mean Time To Repair) | ≤4 | hours | Demo | Field repair |
| D | MT.04 | Tỷ lệ linh kiện nội địa | ≥60 | % | BOM review | [ODI] |
| W | MT.05 | Tỷ lệ nội địa (target) | ≥70 | % | BOM review | |
| D | MT.06 | Bảo trì định kỳ | ≤50 | hours interval | Manual | |
| D | MT.07 | Công cụ bảo trì | Standard tools | - | Manual | No special |
| D | MT.08 | Khả năng sửa chữa hiện trường | Có | - | Demo | Module swap |

---

### 2.17 INTEGRATION (IN)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| W | IN.01 | [SYS] VN-LVC-001 compatibility | Có | - | Interface test | L6 Info |
| W | IN.02 | [SYS] VN-NGS-001 scenario link | Có | - | Demo | Pre-training |
| W | IN.03 | [SYS] VN-CPX-001 multi-target | Có | - | Fleet test | Fleet ctrl |
| W | IN.04 | Fleet coordination (3+ units) | Có | - | Demo | Future |
| W | IN.05 | Real-time position broadcast | Có | - | Spec | For AAR |
| W | IN.06 | DIS/HLA compatibility | Có | - | Spec | LVC standard |

---

### 2.18 COST (CO)

| D/W | ID | Requirement | Value | Unit | Verification | Notes |
|-----|-----|-------------|-------|------|--------------|-------|
| D | CO.01 | Chi phí prototype | ≤2,500 | M VND | BOM | ~$100K |
| W | CO.02 | Chi phí prototype (target) | ≤2,200 | M VND | BOM | ~$88K |
| D | CO.03 | Chi phí sản xuất đơn vị | ≤1,600 | M VND | Estimate | ~$64K |
| W | CO.04 | Chi phí SX (target) | ≤1,400 | M VND | Estimate | ~$56K |
| D | CO.05 | Chi phí vận hành/năm | ≤120 | M VND | Estimate | Excl. consumables |
| D | CO.06 | [ODI] Cost per training session | ≤5 | M VND | Ops analysis | Target |

---

## PHẦN III: SPECIFICATIONS SUMMARY

### 3.1 Key Parameters

```
┌─────────────────────────────────────────────────────────────────────┐
│              BĐK-01 "SÔNG HỒNG" - KEY SPECIFICATIONS                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  PARAMETER                          DEMAND          WISH            │
│  ═══════════════════════════════════════════════════════════════   │
│                                                                     │
│  PLATFORM:                                                          │
│  • Hull material                    Al 5083         -               │
│  • Length overall                   3.5m            -               │
│  • Beam                             1.2m            -               │
│  • Dry weight                       ≤350 kg         ≤300 kg         │
│  • Payload                          ≥150 kg         -               │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  PERFORMANCE:                                                       │
│  • Max speed                        ≥15 km/h        ≥20 km/h        │
│  • Tow speed (banner)               ≥10 km/h        -               │
│  • Tow speed (hard)                 ≥8 km/h         -               │
│  • Endurance                        ≥4 hours        ≥6 hours        │
│  • Range                            ≥30 km          ≥50 km          │
│  • Control range                    ≥5 km           ≥10 km          │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  SIGNATURES:                                                        │
│  • Radar RCS                        10-100 m²       10-150 m²       │
│  • IR signature                     +30 to +80°C    +30 to +100°C   │
│  • FLIR detection range             ≥3,000 m        ≥5,000 m        │
│  • FC Radar detection               ≥5,000 m        -               │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  POWER:                                                             │
│  • Battery                          48V/200Ah       -               │
│  • Energy                           9.6 kWh         -               │
│  • Charge time                      ≤8 hours        -               │
│  • Motor power                      ≥5 kW           ≥7 kW           │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  TOW SYSTEM:                                                        │
│  • Winch capacity                   ≥500 kg         -               │
│  • Cable length                     ≥500 m          -               │
│  • Cable material                   Dyneema 12mm    -               │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  ENVIRONMENT:                                                       │
│  • Sea State                        ≥3              ≥4              │
│  • IP rating                        ≥IP65           ≥IP67           │
│  ─────────────────────────────────────────────────────────────     │
│                                                                     │
│  COST:                                                              │
│  • Prototype                        ≤2,500M VND     ≤2,200M VND     │
│  • Production                       ≤1,600M VND     ≤1,400M VND     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Customer Value Summary (ODI)

```
┌─────────────────────────────────────────────────────────────────────┐
│              CUSTOMER VALUE SUMMARY - BĐK-01                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  VALUE CREATED vs TRADITIONAL TARGETS:                              │
│  ═════════════════════════════════════                              │
│                                                                     │
│  ┌─────────────────────────────────┬──────────┬──────────┬────────┐│
│  │ Outcome                         │ Trad.    │ BĐK-01   │ Gain   ││
│  ├─────────────────────────────────┼──────────┼──────────┼────────┤│
│  │ Personnel safety                │ 3.0/10   │ 9.0/10   │ +200%  ││
│  │ Signature realism               │ 5.0/10   │ 8.5/10   │ +70%   ││
│  │ Target maneuverability          │ 2.0/10   │ 8.0/10   │ +300%  ││
│  │ Deployment time                 │ 4.0/10   │ 7.5/10   │ +88%   ││
│  │ Operational cost                │ 4.5/10   │ 7.5/10   │ +67%   ││
│  │ Foreign dependency              │ 3.5/10   │ 8.0/10   │ +129%  ││
│  └─────────────────────────────────┴──────────┴──────────┴────────┘│
│                                                                     │
│  CUSTOMER SCORECARD (per ODI methodology):                          │
│  ═════════════════════════════════════════                          │
│  Total Value Index = Σ(Δ Satisfaction × Importance) = 180.6        │
│                                                                     │
│  Decision: ✓ GO (Score > 100)                                      │
│                                                                     │
│  ROI PROJECTION:                                                    │
│  ═══════════════                                                    │
│  Investment (prototype):          2,500M VND                        │
│  Annual operating cost:           120M VND                          │
│  Sessions per year:               100+ sessions                     │
│  Cost per session:                ~2-5M VND                         │
│  vs. Traditional targets:         5-10M VND/session                 │
│  Annual savings:                  300-500M VND                      │
│  Payback period:                  5-7 years                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN IV: VERIFICATION MATRIX

### 4.1 Test Categories

```
┌─────────────────────────────────────────────────────────────────────┐
│              VERIFICATION MATRIX - BĐK-01                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TEST CATEGORY          │ FAT │ SAT │ OT  │ RESPONSIBLE            │
│  ═══════════════════════════════════════════════════════════════   │
│                         │     │     │     │                        │
│  Platform inspection    │  ✓  │     │     │ QC                     │
│  Dimensional check      │  ✓  │     │     │ QC                     │
│  Weight verification    │  ✓  │     │     │ QC                     │
│  Float test             │  ✓  │  ✓  │     │ Engineer               │
│  Self-righting test     │     │  ✓  │     │ Engineer               │
│  Speed test             │     │  ✓  │  ✓  │ Test team              │
│  Endurance test         │     │  ✓  │  ✓  │ Test team              │
│  Control range test     │     │  ✓  │  ✓  │ Test team              │
│  Waypoint navigation    │     │  ✓  │  ✓  │ Test team              │
│  Station-keeping        │     │  ✓  │  ✓  │ Test team              │
│  RTH function           │     │  ✓  │     │ Engineer               │
│  Fail-safe test         │     │  ✓  │     │ Engineer               │
│  IR signature test      │  ✓  │  ✓  │     │ Thermal cam            │
│  Radar RCS test         │     │  ✓  │     │ Radar specialist       │
│  Night lighting test    │     │  ✓  │     │ Observer               │
│  Tow system test        │  ✓  │  ✓  │  ✓  │ Test team              │
│  FLIR tracking test     │     │     │  ✓  │ Navy                   │
│  FC Radar tracking      │     │     │  ✓  │ Navy                   │
│  Sea State 3 ops        │     │     │  ✓  │ Test team              │
│  Sea State 4 ops        │     │     │  ✓  │ Test team (optional)   │
│  Multi-target coord     │     │     │  ✓  │ Test team (optional)   │
│                         │     │     │     │                        │
│  ═══════════════════════════════════════════════════════════════   │
│  FAT = Factory Acceptance Test (tại xưởng)                         │
│  SAT = Site Acceptance Test (vùng nước lặng)                       │
│  OT  = Operational Test (điều kiện thực tế)                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PHẦN V: APPROVAL

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DOCUMENT APPROVAL                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Requirements List: BĐK-01 v1.0                                    │
│  Project: High-Speed Remote-Controlled Surface Target              │
│  Application: Anti-Landing Defense Training & Weapon Acceptance    │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Role              │ Name        │ Signature   │ Date        │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────┤   │
│  │ Prepared by       │             │             │             │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────┤   │
│  │ Reviewed by       │             │             │             │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────┤   │
│  │ Approved by       │             │             │             │   │
│  │ (Naval Tech Inst.)│             │             │             │   │
│  └───────────────────┴─────────────┴─────────────┴─────────────┘   │
│                                                                     │
│  FRAMEWORK INTEGRATION:                                             │
│  ═══════════════════════                                            │
│  • D-M-I-R: Diagnosis complete, Modeling complete                  │
│  • ODI: Opportunity Analysis applied (8 outcomes scored)           │
│  • Systems Thinking: Leverage points L3, L5, L6, L10 identified   │
│  • Meta-Learning: WAVES mnemonic, interleaving schedule created   │
│                                                                     │
│  REVISION HISTORY:                                                  │
│  ═════════════════                                                  │
│  v1.0 (Jan 2026): Initial requirements with D-M-I-R × ODI         │
│                   framework integration                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX A: RELATED PRODUCTS

| Product Code | Name | Relationship |
|--------------|------|--------------|
| BĐK-03 | Low-Speed Target | Sister product (training focus) |
| VN-NGS-001 | Naval Gunnery Simulator | Pre-training integration |
| VN-LVC-001 | LVC Integration Gateway | AAR and scenario link |
| VN-CPX-001 | Command Post Exercise | Multi-target control |
| VN-UAV-001 | UAV Operator Training | Combined arms |

---

## APPENDIX B: MNEMONIC REFERENCE

**WAVES - BĐK-01 Key Requirements:**

| Letter | Component | Specification |
|--------|-----------|---------------|
| **W** | Watercraft | Nhôm 5083, 3.5m, tự phục hồi |
| **A** | Autonomy | Waypoint, RTH, fail-safe |
| **V** | Vision | Bia 18/18b, LED, strobe |
| **E** | Emission | RCS 10-100m², IR +30-80°C |
| **S** | Stamina | 4-6 giờ, biển cấp 3-4 |

---

*Document prepared following Pahl & Beitz Systematic Design Methodology*
*Integrated with D-M-I-R × ODI × Systems Thinking × Meta-Learning Framework*
*Requirements List v1.0 - BĐK-01 "SÔNG HỒNG" High-Speed Target*
*Application: Anti-Landing Defense Training & Weapon Acceptance*

**END OF DOCUMENT**
