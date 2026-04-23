# PHÂN TÍCH TOÀN DIỆN: MỤC TIÊU CỐ ĐỊNH TRÊN BIỂN (FIXED SEA TARGETS)
## Phục vụ Thử nghiệm Nghiệm thu Tên lửa Hải quân

**Framework Integration:** D-M-I-R × ODI × Systems Thinking × Meta-Learning
**Ngày:** 14/01/2026
**Phiên bản:** 1.0

---

## MỤC LỤC

1. [Executive Summary](#1-executive-summary)
2. [Phần 1: Tìm hiểu các loại Mục tiêu Cố định](#2-phần-1-các-loại-mục-tiêu-cố-định)
3. [Phần 2: Thông số Kỹ thuật - RCS, Kích thước, Vật liệu](#3-phần-2-thông-số-kỹ-thuật)
4. [Phần 3: Tiêu chuẩn và Quy trình Bắn Nghiệm thu](#4-phần-3-tiêu-chuẩn-quy-trình)
5. [Phần 4: Thiết bị Đo lường và Ghi nhận Kết quả](#5-phần-4-thiết-bị-đo-lường)
6. [Phần 5: An toàn, Triển khai và Neo đậu](#6-phần-5-an-toàn-triển-khai)
7. [D-M-I-R Analysis](#7-dmir-analysis)
8. [Systems Thinking Analysis](#8-systems-thinking-analysis)
9. [ODI Opportunity Analysis](#9-odi-opportunity-analysis)
10. [Meta-Learning Framework](#10-meta-learning-framework)
11. [Use Cases & Recommendations](#11-use-cases-recommendations)

---

## 1. EXECUTIVE SUMMARY

### Bối cảnh Nghiên cứu

**Fixed Sea Targets (Mục tiêu cố định trên biển)** là các kết cấu nổi hoặc bán chìm được neo đậu tại vị trí cố định trên biển, phục vụ mục đích:
- Thử nghiệm nghiệm thu tên lửa chống hạm (Anti-Ship Missile - ASM)
- Hiệu chuẩn hệ thống vũ khí hải quân
- Đánh giá độ chính xác và hiệu quả tác chiến
- Huấn luyện tác xạ đạn thật cho kíp chiến đấu

### Tổng hợp Phát hiện Chính

| Khía cạnh | Phát hiện Quan trọng |
|-----------|---------------------|
| **Loại mục tiêu** | 4 loại chính: Hulk (tàu hết hạn), Barge kéo, Bia nổi cố định, Phao mục tiêu có phản xạ |
| **RCS** | 13-36 dBsm cho tàu 200-500 tấn; Corner reflector có thể tăng tới >25 dBsm |
| **Tiêu chuẩn** | SINKEX: >1,000 fathoms (6,000 ft), >50 nm từ bờ |
| **Thiết bị đo** | Radar scoring, Camera tốc độ cao, Telemetry, Hydrophone, GPS tracking |
| **Neo đậu** | Mushroom anchor, Deadweight block, Helix anchor; Scope = 2× độ sâu |

---

## 2. PHẦN 1: CÁC LOẠI MỤC TIÊU CỐ ĐỊNH

### 2.1 Taxonomy của Seaborne Targets

```
                        SEABORNE TARGETS
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
    POWERED              TOWED/FIXED           EXPENDABLE
         │                    │                    │
    ┌────┴────┐          ┌────┴────┐         ┌────┴────┐
    │         │          │         │         │         │
  MST      SEPTAR     LCMT      FIXED      HULK    INFLATABLE
Mobile    Remote    Modular    Barge     Decom-    Killer
Ship      Control   Combo      with      missioned Tomato
Target    Boat      Target     Reflector  Ship     /Lemon
```

### 2.2 Mô tả Chi tiết Từng Loại

#### 2.2.1 Target Hulk (Tàu hết hạn sử dụng)

**Định nghĩa:** Tàu chiến đã ngừng hoạt động được dọn sạch và sử dụng làm mục tiêu bắn đạn thật.

**Ví dụ thực tế:**
- **USS Rodney M. Davis (FFG-60):** Oliver Hazard Perry-class, chìm RIMPAC 2022
- **USS Tarawa (LHA-1):** Tàu đổ bộ tấn công, chìm RIMPAC 2024
- **Ex-USS Cleveland (LPD-7):** Mục tiêu PrSM SINKEX 2024

**Ưu điểm:**
- RCS chân thực như tàu chiến thật
- Đánh giá toàn diện khả năng tiêu diệt
- Chi phí thấp (tận dụng tàu hết hạn)

**Nhược điểm:**
- Chỉ sử dụng một lần
- Yêu cầu dọn sạch chất độc hại
- Phải chìm ở độ sâu >6,000 ft

**Quy trình Chuẩn bị (EPA Compliance):**
1. Loại bỏ PCBs, transformers, capacitors
2. Tháo dỡ asbestos, mercury, fluorocarbon
3. Làm sạch petroleum từ tanks, piping
4. Kiểm tra bởi Navy Environmental Manager
5. Tow ra vị trí >50 nm từ bờ

#### 2.2.2 Towed Target Barge (Sà lan kéo)

**Định nghĩa:** Kết cấu nổi được kéo sau tàu kéo hoặc tàu mục tiêu có động cơ.

**Các loại phổ biến:**
| Loại | Mô tả | Ứng dụng |
|------|-------|----------|
| **LCMT** (Low Cost Modular Target) | Modular pontoons + scaffolding | Gunnery, Hellfire, HARM, Harpoon |
| **ISTT** (Improved Surface Tow Target) | Direct fire target | Medium caliber guns |
| **Williams Sled** | Missile and gunnery target | Multi-purpose |
| **HARM Barge** | Fighter jet-launched missile | HARM testing |

**Đặc điểm LCMT:**
- Cấu tạo từ pontoons và giàn giáo dễ thay thế
- Kits chuyên dụng cho gunnery, Hellfire, HARM, Harpoon
- Kéo sau HSMST để cải thiện survivability

**Tow Distance:**
- Tiêu chuẩn: 150 ft (45m) phía sau tàu kéo
- Mục đích: Bảo vệ tàu kéo khỏi "overs"

#### 2.2.3 Fixed Moored Target (Mục tiêu neo cố định)

**Định nghĩa:** Kết cấu nổi được neo đậu tại vị trí cố định, không di chuyển.

**Ví dụ lịch sử:**
- **SS James Longstreet:** Liberty ship tại Cape Cod Bay, 3.5 miles offshore, sử dụng từ 1944 đến Vietnam War

**Cấu tạo điển hình:**
- Hull (thép/nhôm/composite)
- Superstructure mô phỏng (có thể tháo rời)
- Radar reflector array
- IR enhancement devices
- Mooring system (anchor + chain + buoy)

#### 2.2.4 Radar Enhancement Targets

**Corner Reflector Arrays:**
Mảng phản xạ góc được lắp đặt trên barge hoặc mục tiêu để tăng cường RCS.

**Công thức RCS Corner Reflector:**
```
σ = (4πA²eff) / λ²

Trong đó:
- σ: Radar Cross Section (m²)
- Aeff: Diện tích hiệu dụng của reflector (m²)
- λ: Bước sóng radar (m)

Cho Trihedral Corner Reflector:
σ = (12π × a⁴) / λ²

Trong đó a = cạnh của reflector
```

**Peak RCS cho các loại Trihedral:**

| Loại | Góc hữu dụng | Peak RCS Formula |
|------|-------------|------------------|
| **Triangular** | 32° cone | σ = (4π × a⁴) / (3λ²) |
| **Square** | 23° cone | σ = (12π × a⁴) / λ² |
| **Circular** | ~40° cone | σ ≈ (15.6 × a⁴) / λ² |

---

## 3. PHẦN 2: THÔNG SỐ KỸ THUẬT

### 3.1 Diện tích Phản xạ Radar (RCS)

#### 3.1.1 RCS Điển hình của Tàu

**Công thức Thực nghiệm (Naval Research Laboratory):**
```
σaverage = 52 × f^0.5 × D^1.5 (m²)

Trong đó:
- f: Tần số radar (GHz)
- D: Displacement (kilo-tons)
```

**Bảng RCS Tham khảo:**

| Loại tàu | Tonnage | RCS (dBsm) tại X-band |
|----------|---------|----------------------|
| Tàu nhỏ | 200-500 t | 13-36 dBsm |
| Corvette | 1,000-2,000 t | 30-40 dBsm |
| Frigate | 3,000-4,500 t | 35-45 dBsm |
| Destroyer | 6,000-9,000 t | 40-50 dBsm |
| Carrier | 80,000-100,000 t | 55-65 dBsm |

**Lưu ý:**
- RCS biến thiên theo góc (cardinal points có RCS cao nhất)
- Tàu tàng hình có RCS thấp hơn 10-20 dB

#### 3.1.2 Corner Reflector Specifications

**Bảng RCS Corner Reflector theo kích thước:**

| Edge Length (a) | Freq (GHz) | RCS Square (dBsm) | RCS Triangle (dBsm) |
|-----------------|------------|-------------------|---------------------|
| 0.3 m | 10 (X-band) | 17.18 | 12.42 |
| 0.5 m | 10 | 25.16 | 20.40 |
| 0.7 m | 10 | 31.08 | 26.32 |
| 1.0 m | 10 | 38.02 | 33.26 |
| 1.5 m | 10 | 45.54 | 40.78 |

**Yêu cầu thiết kế:**
- Góc giữa các mặt phản xạ: Chính xác 90° ± 0.5°
- Vật liệu: Aluminum hoặc steel dẫn điện tốt
- Bề mặt: Phẳng, không gỉ, không gấp nếp

### 3.2 Kích thước Hình học

#### 3.2.1 Target Silhouette Requirements

**Mô phỏng Corvette (1,000-2,000t):**
| Thông số | Giá trị | Mục đích |
|----------|---------|----------|
| Chiều dài tổng thể | 60-80 m | Freeboard profile |
| Chiều rộng | 10-12 m | Beam simulation |
| Chiều cao (waterline to masthead) | 15-25 m | Radar/IR target height |
| Freeboard | 3-5 m | Visual target area |

**Cấu trúc thượng tầng mô phỏng:**
- Bridge structure (5-8m height)
- Mast array (antennas, radar domes)
- Funnel/stack (IR signature source)
- Deck equipment silhouette

#### 3.2.2 Modular Target Design

**Concept: Scalable Target Simulation**
```
┌─────────────────────────────────────────┐
│           MODULAR TARGET BARGE          │
├─────────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐    │
│  │Mast │  │Bridge│  │Stack│  │Mast │    │
│  └──┬──┘  └──┬──┘  └──┬──┘  └──┬──┘    │
│     │       │        │        │        │
│  ╔══╧═══════╧════════╧════════╧══╗     │
│  ║      SUPERSTRUCTURE MODULE     ║     │
│  ╠════════════════════════════════╣     │
│  ║     CORNER REFLECTOR ARRAY     ║     │
│  ╠════════════════════════════════╣     │
│  ║       FLOTATION PONTOONS       ║     │
│  ╚════════════════════════════════╝     │
│           (Modular steel frame)         │
└─────────────────────────────────────────┘
```

### 3.3 Vật liệu Chế tạo

#### 3.3.1 Hull Materials

| Vật liệu | Ưu điểm | Nhược điểm | Ứng dụng |
|----------|---------|------------|----------|
| **Steel (Marine grade)** | Bền, dễ hàn, RCS cao | Nặng, gỉ sét | Hulk targets, large barges |
| **Aluminum 5083** | Nhẹ, chống ăn mòn | Đắt hơn steel | Naval-grade targets |
| **Fiberglass/GRP** | Nhẹ, không gỉ | RCS thấp cần augmentation | Recoverable targets |
| **HDPE Pontoons** | Rất nhẹ, không chìm | Yếu với va đập | Flotation elements |

#### 3.3.2 Reflector Materials

| Vật liệu | Dẫn điện | Trọng lượng | Chi phí |
|----------|----------|-------------|---------|
| **Aluminum sheet** | Tốt | Nhẹ | Trung bình |
| **Steel galvanized** | Tốt | Nặng | Thấp |
| **Aluminum mesh** | Tốt (> λ/10) | Rất nhẹ | Cao |
| **Carbon fiber coated** | Tốt | Rất nhẹ | Rất cao |

#### 3.3.3 IR Enhancement Materials

| Phương pháp | Nhiệt độ | Thời gian đáp ứng | Công suất |
|-------------|----------|-------------------|-----------|
| **Resistive heaters** | 200-800°C | 5-30s | 100-500W |
| **Propane burners** | 400-1000°C | Instant | N/A (fuel) |
| **IR panels (electric)** | 100-400°C | 1-5s | 200-1000W |
| **Engine exhaust** | 300-600°C | N/A | Engine-dependent |

---

## 4. PHẦN 3: TIÊU CHUẨN VÀ QUY TRÌNH

### 4.1 Tiêu chuẩn Quân sự Liên quan

#### 4.1.1 U.S. Navy Standards

| Tiêu chuẩn | Nội dung | Áp dụng |
|------------|----------|---------|
| **SINKEX Regulations** | >1,000 fathoms depth, >50 nm from land | Target hulk sinking |
| **DA PAM 385-63** | Range Safety for guided missiles | Missile testing procedures |
| **MIL-STD-810** | Environmental testing | Target equipment durability |
| **MIL-STD-461G** | EMI/EMC requirements | Radar augmentation |
| **MIL-S-901D** | Shock testing for shipboard equipment | On-target instrumentation |

#### 4.1.2 NAVSEA Testing Requirements

**Stages of Weapons Testing:**
| Stage | Mô tả | Yêu cầu |
|-------|-------|---------|
| Stage 1-6 | Land-based and dock tests | Pre-deployment verification |
| **Stage 7** | Sea Trials Tests | Builder's Trials, Acceptance Trials, Final Contract Trials |

**Acceptance Trials (AT):**
- Witnessed by INSURV (Board of Inspection and Survey)
- Combat system detect-to-engage sequence verification
- Propulsion and electrical systems testing

### 4.2 Quy trình Tổ chức Bắn Nghiệm thu

#### 4.2.1 Giai đoạn Chuẩn bị (T-30 to T-0)

```
TIMELINE: BẮN NGHIỆM THU TÊN LỬA
═══════════════════════════════════════════════════

T-30 ngày │ Lập kế hoạch, phê duyệt vùng biển
          │ Thông báo NOTAM/NOTMAR
          │
T-14 ngày │ Kiểm tra mục tiêu, lắp đặt thiết bị đo
          │ Calibration radar reflectors
          │
T-7 ngày  │ Tow/deploy mục tiêu đến vị trí
          │ Neo đậu, kiểm tra GPS position
          │
T-3 ngày  │ Pre-exercise survey (marine mammals)
          │ Final safety check
          │
T-1 ngày  │ Vessel safety briefing
          │ Weather assessment GO/NO-GO
          │
T-0       │ EXERCISE EXECUTION
          │ Real-time range safety
          │
T+1 ngày  │ Damage assessment
          │ Data recovery
          │
T+7 ngày  │ Post-exercise analysis
          │ Scoring report
═══════════════════════════════════════════════════
```

#### 4.2.2 Quy trình An toàn Bắn

**Pre-Fire Checklist:**
- [ ] Target position confirmed via GPS
- [ ] Exclusion zone clear (radar/visual sweep)
- [ ] Marine mammal survey complete (aircraft/observers)
- [ ] Communications established (all parties)
- [ ] Weather within limits (sea state, visibility)
- [ ] Firing solution verified
- [ ] Safety officer authorization

**During Fire:**
- Continuous tracking of missile trajectory
- Real-time telemetry monitoring
- Ready for immediate cease-fire if unsafe condition

**Post-Fire:**
- Battle damage assessment (BDA)
- Target stability check
- Recovery operations (if applicable)

### 4.3 Vùng An toàn (Safety Zones)

#### 4.3.1 Surface Danger Zone

**Công thức xác định SDZ:**
```
SDZ Radius = Max missile range + Error margin + Debris scatter

Ví dụ cho Harpoon (124km range):
SDZ = 124 + 10 + 5 = ~140 km radius
```

**Các vùng quan tâm:**
| Vùng | Bán kính | Yêu cầu |
|------|----------|---------|
| **Firing Arc** | Full missile range | No vessels/aircraft |
| **Impact Zone** | 5-10 km từ target | Monitoring only |
| **Exclusion Zone** | 50 nm từ bờ (SINKEX) | EPA regulation |
| **Debris Zone** | 1-3 km từ impact | Post-fire clearance |

---

## 5. PHẦN 4: THIẾT BỊ ĐO LƯỜNG

### 5.1 Hệ thống Ghi nhận Tham số Đường đạn

#### 5.1.1 Radar Tracking Systems

**Loại Radar sử dụng:**
| Loại | Tần số | Chức năng | Độ chính xác |
|------|--------|-----------|--------------|
| **Metric Radar** | L, S, C band | Trajectory tracking | ±5m |
| **Signature Radar** | X, Ku band | RCS measurement | ±1 dBsm |
| **Precision Tracking** | Ka, W band | Miss distance | ±0.5m |

**Ronald Reagan Test Site (RTS) Capabilities:**
- High-fidelity metric and signature radars
- Multiple radar frequencies
- Telemetry receiving stations
- 6,500 miles remote control capability (ROC-H)

#### 5.1.2 Missile Scoring Systems

**Meggitt/Parker Defense Systems:**

| System | Ứng dụng | Công nghệ |
|--------|----------|-----------|
| **VSS** (Vector Scoring System) | Full-scale aerial targets (QF-16) | Non-cooperative radar |
| **SVDOPS** | Sub-scale aerial targets | Compact radar unit |
| **ProTrak** | Projectile tracking | Configurable hardware |
| **AWSS** | Air-to-ground weapons | Hellfire scoring |

**Imago 100 Miss-Distance Analysis:**
- Dual video-camera tracking
- PC-based image processing
- Triangulation algorithms
- ±1m accuracy for miss distance

### 5.2 Camera và Hệ thống Quang học

#### 5.2.1 High-Speed Camera Systems

| Loại | Tốc độ | Độ phân giải | Ứng dụng |
|------|--------|--------------|----------|
| **Streak Camera** | >1 million fps | Limited | Impact dynamics |
| **High-speed Video** | 10,000-100,000 fps | 1080p | Terminal approach |
| **HD Video** | 60 fps | 4K | Overall recording |

**LLNL LIDSS (Independent Diagnostic Scoring System):**
- GPS-based positioning rafts
- High-speed cameras
- Streak cameras
- Hydrophones
- Telemetry equipment

**Captured Parameters:**
- Height of burst
- Reentry angle
- Impact location relative to target
- Terminal trajectory

#### 5.2.2 Electro-Optical Tracking

**Types:**
- Visible light cameras (day operation)
- Infrared cameras (all conditions)
- Laser rangefinders (precision distance)
- Video tracker with auto-follow

### 5.3 Telemetry Systems

#### 5.3.1 Missile Telemetry

**Telemetry Data Collected:**
| Tham số | Mô tả | Tần suất |
|---------|-------|----------|
| Position (GPS/INS) | XYZ coordinates | 100 Hz |
| Velocity | 3-axis speed | 100 Hz |
| Attitude | Roll/Pitch/Yaw | 200 Hz |
| Seeker data | Target lock status | 50 Hz |
| Engine status | Thrust, fuel | 10 Hz |
| Fusing | Arming, proximity | Event-based |

**Ground Station Processing:**
- Real-time demodulation
- 2D/3D trajectory visualization
- Strip chart recording
- Post-mission analysis

#### 5.3.2 Target Telemetry

**On-Target Instrumentation:**
| Sensor | Chức năng | Survival |
|--------|-----------|----------|
| **GPS beacon** | Position tracking | Pre-impact only |
| **Accelerometers** | Impact detection | Destroyed on hit |
| **Strain gauges** | Structural response | Near-miss analysis |
| **Temperature sensors** | IR signature verification | Pre-impact |
| **RF transmitter** | Real-time data link | Pre-impact |

### 5.4 Thiết bị Ghi nhận Trúng đích

#### 5.4.1 Impact Detection

**Methods:**
| Phương pháp | Mô tả | Độ chính xác |
|-------------|-------|--------------|
| **Radar scoring** | Track missile until impact | ±1m |
| **Acoustic scoring** | Sound signature analysis | ±2m |
| **Visual scoring** | Camera analysis | ±0.5m |
| **Telemetry cutoff** | Last known position | ±5m |

#### 5.4.2 Miss Distance Indicator (MDI)

**Acoustic MDI System:**
- 12-sector angular resolution
- ±1m linear accuracy
- Real-time telemetry
- Ground scoring station display

**Kwajalein Missile Impact Scoring System:**
- Precision radar tracking
- Terminal trajectory reconstruction
- CEP (Circular Error Probable) calculation
- Within 2 hours: Preliminary score
- Detailed report: 2-4 weeks post-mission

---

## 6. PHẦN 5: AN TOÀN, TRIỂN KHAI VÀ NEO ĐẬU

### 6.1 Phương án Bảo đảm An toàn

#### 6.1.1 Environmental Safety (EPA Compliance)

**SINKEX Requirements:**
| Yêu cầu | Giá trị | Lý do |
|---------|---------|-------|
| Minimum depth | 1,000 fathoms (6,000 ft) | Prevent wreck hazard |
| Distance from land | ≥50 nautical miles | Environmental protection |
| Marine mammal survey | Required before exercise | Species protection |
| PCB removal | 100% | Toxic material |
| Petroleum cleaning | All tanks, piping | Water pollution |

**Pre-SINKEX Cleaning Process:**
1. Remove liquid PCBs from transformers
2. Remove all capacitors (large and small)
3. Remove trash and floatable materials
4. Remove mercury-containing materials
5. Remove fluorocarbon materials
6. Clean petroleum from all systems
7. Environmental inspection and certification

#### 6.1.2 Personnel Safety

**Exclusion Zones:**
```
┌────────────────────────────────────────┐
│           SAFETY ZONE DIAGRAM          │
│                                        │
│    ┌─────────────────────────────┐    │
│    │  OUTER EXCLUSION ZONE       │    │
│    │  (Missile max range + 10%)  │    │
│    │   ┌─────────────────────┐   │    │
│    │   │ INNER DANGER ZONE   │   │    │
│    │   │ (Direct impact area)│   │    │
│    │   │   ┌─────────────┐   │   │    │
│    │   │   │   TARGET    │   │   │    │
│    │   │   │   (center)  │   │   │    │
│    │   │   └─────────────┘   │   │    │
│    │   │      5-10 km        │   │    │
│    │   └─────────────────────┘   │    │
│    │         50-100 km           │    │
│    └─────────────────────────────┘    │
│          Full missile range          │
└────────────────────────────────────────┘
```

**Safety Personnel:**
| Vai trò | Trách nhiệm |
|---------|-------------|
| **Range Safety Officer** | Overall safety authority |
| **Flight Safety** | Missile trajectory monitoring |
| **Environmental Officer** | EPA compliance |
| **Medical Officer** | Emergency response |
| **Communications Officer** | All-party coordination |

### 6.2 Triển khai Mục tiêu

#### 6.2.1 Transport and Deployment

**Tow Operations:**
| Phương pháp | Khoảng cách | Tốc độ kéo | Lưu ý |
|-------------|-------------|-----------|-------|
| **Ocean tug** | >100 nm | 5-8 knots | Large targets |
| **Target boat** | <50 nm | 10-15 knots | Barges |
| **Self-propelled** | Any | 10-20 knots | Powered targets |

**Deployment Sequence:**
1. Pre-deployment inspection at port
2. Load instrumentation and verify operation
3. Tow to designated position
4. Position verification (GPS)
5. Deploy mooring system
6. Anchor set and tension verification
7. Final systems check
8. Depart exclusion zone

#### 6.2.2 Positioning Requirements

**GPS-Based Positioning:**
| Parameter | Requirement |
|-----------|-------------|
| Position accuracy | ±10m CEP |
| Update rate | 1 Hz minimum |
| Station-keeping | ±50m drift allowance |
| Time synchronization | UTC ±1 ms |

### 6.3 Hệ thống Neo đậu

#### 6.3.1 Anchor Types

**Phân loại Neo cho Mục tiêu Biển:**

| Loại Neo | Holding Power | Đáy biển phù hợp | Chi phí |
|----------|---------------|------------------|---------|
| **Mushroom Anchor** | 3-5× weight | Mud, sand | Thấp |
| **Deadweight Block** | 1× weight | Any | Rất thấp |
| **Helix Anchor** | 10-15× weight | Sand, clay | Cao |
| **Danforth/Fluke** | 5-10× weight | Sand, mud | Trung bình |
| **Pyramid (Dor-Mor)** | 7-10× weight | Compact areas | Cao |

**Holding Power Estimates:**
```
Mushroom: 500 lb anchor → 2,000-3,000 lb holding
Helix (8" diameter): → 12,000+ lb holding (tested)
Deadweight: 2,000 lb concrete → 2,000 lb holding
```

#### 6.3.2 Mooring System Components

**System Architecture:**
```
┌─────────────────────────────────────────┐
│         MOORING SYSTEM DIAGRAM          │
│                                         │
│        ○ TARGET BUOY (surface)          │
│        │                                │
│        │ ← Pickup line/pennant          │
│        │                                │
│       ◇ MOORING BALL                    │
│        │                                │
│        │ ← Rode (chain + rope)          │
│        │   Scope = 2× depth             │
│        │                                │
│     ▼▼▼▼▼ (seafloor)                   │
│        │                                │
│       ⊕ ANCHOR                          │
│                                         │
└─────────────────────────────────────────┘
```

**Component Specifications:**

| Component | Vật liệu | Kích thước | Chức năng |
|-----------|----------|------------|-----------|
| **Anchor** | Steel/Concrete | Based on target weight | Seabed holding |
| **Ground chain** | Galvanized steel | 3/4" - 1" | Near-bottom wear |
| **Rode** | Chain + Nylon | Scope = 2× depth | Force absorption |
| **Swivel** | Galvanized steel | Rated for chain | Prevent twist |
| **Shackles** | Galvanized steel | Match larger chain | Connections |
| **Mooring ball** | Foam-filled | Based on rode weight | Surface marker |
| **Pennant** | Nylon with chafe | 1" - 1.5" diameter | Boat attachment |

#### 6.3.3 Scope Calculation

**Định nghĩa:** Scope = Tổng chiều dài dây neo / Độ sâu nước

**Recommended Scope:**
| Điều kiện | Scope | Lý do |
|-----------|-------|-------|
| Calm conditions | 3:1 | Minimum for holding |
| Moderate weather | 5:1 | Standard practice |
| Heavy weather | 7:1 - 10:1 | Storm conditions |
| **Fixed target** | 2:1 minimum | Reduce swing circle |

**Calculation Example:**
```
Độ sâu: 30m
Scope yêu cầu: 2:1 (fixed target)
Chiều dài rode = 30 × 2 = 60m

Composition:
- Ground chain: 10m (heavy)
- Upper chain: 20m (medium)
- Rope: 30m (buoyancy)
```

#### 6.3.4 Station-Keeping trong Điều kiện Biển

**Factors Affecting Station:**
| Factor | Impact | Mitigation |
|--------|--------|------------|
| **Wave action** | Vertical oscillation | Syntactic foam floats |
| **Current** | Horizontal drift | Heavier anchor, longer scope |
| **Wind** | Surface drift | Low-profile superstructure |
| **Tide** | Vertical change | Adequate scope for tidal range |

**Swing Circle Calculation:**
```
Swing Radius = Rode Length × cos(Catenary Angle)

Ví dụ:
Rode = 60m
Catenary Angle = 30°
Swing Radius = 60 × cos(30°) = 52m

→ Target có thể di chuyển trong vòng tròn đường kính 104m
```

---

## 7. D-M-I-R ANALYSIS

### 7.1 DIAGNOSIS Phase

**Vấn đề Hiện tại:**
Việt Nam thiếu hệ thống mục tiêu cố định tiêu chuẩn để thử nghiệm tên lửa chống hạm nội địa.

**Root Cause Analysis:**

```
┌────────────────────────────────────────────────────────┐
│               ISHIKAWA (FISHBONE) DIAGRAM              │
├────────────────────────────────────────────────────────┤
│                                                        │
│  PEOPLE                METHODS                         │
│    │                     │                             │
│    ├─Thiếu chuyên gia    ├─Chưa có quy trình chuẩn    │
│    │  về target design   │                             │
│    ├─Kinh nghiệm hạn     ├─Phụ thuộc nước ngoài       │
│    │  chế về SINKEX      │  cho thử nghiệm            │
│    │                     │                             │
│ ───┴─────────────────────┴───────────────┬─────────── │
│                                          │             │
│                    LACK OF INDIGENOUS    │             │
│                    TARGET CAPABILITY ────┘             │
│                                          │             │
│ ───┬─────────────────────┬───────────────┴─────────── │
│    │                     │                             │
│    ├─Chưa có RCS         ├─Thiếu vốn đầu tư          │
│    │  measurement        │                             │
│    │  capability         ├─Chi phí import cao         │
│    │                     │                             │
│  EQUIPMENT            RESOURCES                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**Constraint Identification:**
| Constraint | Loại | Impact |
|------------|------|--------|
| Vốn đầu tư hạn chế | Resource | Limits target complexity |
| Thiếu vùng biển thử nghiệm | Regulatory | Limits live-fire testing |
| Năng lực chế tạo reflector | Technical | Limits RCS accuracy |
| Thiếu scoring system | Technical | Cannot verify accuracy |

### 7.2 MODELING Phase

**Stock-Flow Model:**

```
                    KNOWLEDGE
   ┌──────────────────────┐
   │   International      │
   │   Experience         │◄────────────────────┐
   │   (Limited Access)   │                     │
   └──────────┬───────────┘                     │
              │ Learning                        │
              ▼                                 │
   ┌──────────────────────┐                     │
   │   Indigenous         │                     │
   │   Capability         │──────► Forgetting   │
   │   (Growing)          │        (if unused)  │
   └──────────┬───────────┘                     │
              │ Application                     │
              ▼                                 │
   ┌──────────────────────┐                     │
   │   Operational        │                     │
   │   Readiness          │─────────────────────┘
   │   (Target)           │      Feedback
   └──────────────────────┘
```

**Key Flows:**
- **Inflow:** Technology transfer, training, R&D investment
- **Outflow:** Personnel turnover, technology obsolescence
- **Control:** Budget allocation, policy priorities

### 7.3 INTERVENTION Phase

**Leverage Points (Meadows L1-L12):**

| Level | Leverage Point | Intervention |
|-------|---------------|--------------|
| L12 | Parameters | Tăng budget cho R&D target |
| L10 | Structure | Thành lập trung tâm thử nghiệm quốc gia |
| L9 | Delays | Rút ngắn thời gian approval |
| L6 | Information | Xây dựng database RCS requirements |
| L5 | Rules | Ban hành tiêu chuẩn Việt Nam về sea targets |
| L3 | Goals | Từ "mua sẵn" → "tự chủ sản xuất" |

**Recommended Actions:**

| Priority | Action | Timeline | Cost Est. |
|----------|--------|----------|-----------|
| HIGH | Develop VN-FST-001 fixed target barge | 12 months | $100K |
| HIGH | Acquire corner reflector fabrication | 6 months | $20K |
| MEDIUM | Partner với quốc tế cho scoring system | 18 months | $200K |
| MEDIUM | Xây dựng tiêu chuẩn QCVN về sea targets | 12 months | $10K |
| LOW | Develop recoverable target capability | 24 months | $300K |

### 7.4 REFLECTION Phase

**Success Metrics:**

| Metric | Baseline | Target | Timeline |
|--------|----------|--------|----------|
| Indigenous target capability | 0% | 70% | 3 years |
| RCS simulation accuracy | N/A | ±3 dBsm | 2 years |
| Cost per test (vs. import) | 100% | 40% | 3 years |
| Scoring system capability | Manual | Automated | 2 years |

**Lessons Learned Framework:**
- Quarterly review of target performance
- Post-exercise debriefs with firing units
- Comparison with international benchmarks
- Continuous improvement cycle

---

## 8. SYSTEMS THINKING ANALYSIS

### 8.1 Stock-Flow Mapping

**Primary Stocks:**

| Stock | Current Level | Desired Level | Gap |
|-------|--------------|---------------|-----|
| Target fleet inventory | 0 units | 5 units | -5 |
| Technical expertise | Low | High | Large |
| Testing infrastructure | Minimal | Adequate | Significant |
| Documentation/Standards | Sparse | Complete | Large |

**Critical Flows:**

```
INFLOWS                    STOCKS                    OUTFLOWS
─────────                 ───────                   ─────────
                         
Production ──────────►   Target Fleet   ──────────► Consumption
(2 units/year target)    Inventory       (destroyed in tests)
                         
Training ────────────►   Technical      ──────────► Turnover
(courses, OJT)           Expertise       (retirement, transfer)
                         
Investment ──────────►   Infrastructure ──────────► Obsolescence
(CapEx)                  Capability      (technology aging)
```

### 8.2 Feedback Loop Detection

**Reinforcing Loop R1: Capability Building**
```
More Testing → More Experience → Better Designs → More Successful Tests
     ↑                                                    │
     └────────────────────────────────────────────────────┘
```

**Balancing Loop B1: Resource Constraint**
```
More Testing → Higher Costs → Budget Pressure → Reduced Testing
     ↑                                              │
     └──────────────────────────────────────────────┘
```

**Archetype Identified: "Limits to Growth"**
- R1 drives initial success
- B1 kicks in when budget is exhausted
- Solution: Increase budget ceiling (L5) or reduce cost per test (L12)

### 8.3 Leverage Point Analysis

**High-Leverage Interventions:**

| Leverage Level | Intervention | Expected Impact |
|----------------|--------------|-----------------|
| L6 (Information) | Real-time RCS measurement system | 10x improvement in design accuracy |
| L5 (Rules) | Mandatory indigenous content | Long-term capability building |
| L10 (Structure) | Joint civil-military testing facility | Shared costs, expanded capability |

---

## 9. ODI OPPORTUNITY ANALYSIS

### 9.1 Jobs-to-be-Done

**Core Functional Job:**
> "Khi thực hiện thử nghiệm nghiệm thu tên lửa chống hạm, tôi muốn CÓ MỤC TIÊU MÔ PHỎNG CHÍNH XÁC ĐẶC TÍNH TÀU CHIẾN ĐỐI PHƯƠNG để có thể ĐÁNH GIÁ HIỆU QUẢ THỰC TẾ CỦA HỆ THỐNG VŨ KHÍ."

**Related Jobs:**
- Xác nhận khả năng phát hiện mục tiêu của seeker
- Đánh giá độ chính xác CEP
- Huấn luyện kíp chiến đấu với mục tiêu thực
- Đảm bảo an toàn trong thử nghiệm

### 9.2 Desired Outcomes

| ID | Outcome Statement | Importance | Satisfaction | Opportunity |
|----|-------------------|------------|--------------|-------------|
| O1 | Minimize the likelihood that target RCS differs from actual ship | 9 | 3 | 15 |
| O2 | Minimize the time required to deploy target to position | 7 | 5 | 9 |
| O3 | Minimize the cost per test engagement | 8 | 4 | 12 |
| O4 | Minimize the likelihood of miss distance measurement error | 9 | 3 | 15 |
| O5 | Minimize environmental impact of testing | 6 | 5 | 7 |
| O6 | Minimize the likelihood of target drift from position | 8 | 4 | 12 |

**Opportunity Score Formula:**
```
Opportunity = Importance + max(Importance - Satisfaction, 0)
```

**Top Underserved Outcomes:**
1. **O1 & O4 (Score 15):** RCS accuracy và miss distance measurement
2. **O3 & O6 (Score 12):** Cost effectiveness và position stability

### 9.3 Constraints Analysis

| Constraint | Type | Impact on Solution |
|------------|------|-------------------|
| Budget < $500K for development | Financial | Limits technology choices |
| No local RCS measurement facility | Technical | Must estimate or outsource |
| Limited deep water test areas | Regulatory | Restricts live-fire frequency |
| Lack of scoring radar | Technical | Manual observation only |

---

## 10. META-LEARNING FRAMEWORK

### 10.1 Chunking Breakdown

**Learning Progression:**

| Chunk | Topic | Duration | Prerequisites |
|-------|-------|----------|---------------|
| 1 | Target types overview | 2 hrs | None |
| 2 | RCS fundamentals | 3 hrs | Basic physics |
| 3 | Corner reflector design | 4 hrs | Chunk 2 |
| 4 | Mooring systems | 3 hrs | Naval architecture |
| 5 | Scoring systems | 4 hrs | Radar basics |
| 6 | Safety procedures | 2 hrs | None |
| 7 | Integration exercise | 4 hrs | All above |

**Total Learning Time:** ~22 hours

### 10.2 Feynman Technique Application

**Simple Explanation: Corner Reflector**

> "Một corner reflector giống như góc của một căn phòng có gương. Khi bạn ném một quả bóng vào góc phòng, nó bật lại thẳng về phía bạn. Tương tự, khi sóng radar đập vào corner reflector (3 mặt kim loại vuông góc), nó bật ngược lại về radar, tạo ra tín hiệu rất mạnh - mạnh hơn nhiều so với một tấm kim loại phẳng cùng kích thước."

**Simple Explanation: Why Fixed Target?**

> "Thử nghiệm tên lửa vào mục tiêu di động rất khó vì tên lửa cần 'học' cách theo dõi mục tiêu. Mục tiêu cố định như một 'bài kiểm tra đầu vào' - nếu tên lửa không thể trúng mục tiêu đứng yên, nó chắc chắn không thể trúng mục tiêu di chuyển. Đây là bước đầu tiên để verify accuracy."

### 10.3 Mnemonic Devices

**ANCHOR - Các bước triển khai mục tiêu:**
- **A**ssess site conditions (khảo sát vị trí)
- **N**avigate to position (điều hướng đến vị trí)
- **C**heck depth & bottom (kiểm tra độ sâu và đáy)
- **H**old with proper scope (neo với scope phù hợp)
- **O**bserve drift pattern (quan sát độ trôi)
- **R**eport position to range (báo cáo vị trí)

**RCS-3 - Các yếu tố ảnh hưởng RCS:**
- **R**eflector geometry (hình dạng phản xạ)
- **C**onductivity of material (độ dẫn điện)
- **S**ize relative to wavelength (kích thước so với bước sóng)

### 10.4 Self-Assessment Rubric

**Competency: Fixed Sea Target Design**

| Level | Description | Evidence |
|-------|-------------|----------|
| **Novice (1)** | Biết các loại target cơ bản | Liệt kê được 4 loại |
| **Beginner (2)** | Hiểu RCS concepts | Giải thích được công thức |
| **Intermediate (3)** | Có thể thiết kế reflector array | Tính được RCS yêu cầu |
| **Advanced (4)** | Có thể thiết kế complete system | Bản vẽ thiết kế hoàn chỉnh |
| **Expert (5)** | Có thể optimize và innovate | Cải tiến vượt benchmark |

---

## 11. USE CASES & RECOMMENDATIONS

### 11.1 Áp dụng cho Portfolio Sản phẩm Việt Nam

**VN-TGT-SEA-001: Fixed Sea Target Barge**

| Thông số | Specification | Rationale |
|----------|---------------|-----------|
| **Type** | Modular towed barge | Cost-effective, reusable |
| **Dimensions** | 15m L × 6m W × 3m H | Simulate patrol boat |
| **RCS** | 20-30 dBsm adjustable | Match small combatant |
| **IR** | 300-500°C equivalent | Simulate engine exhaust |
| **Mooring** | Helix anchor, 3:1 scope | High holding, small footprint |
| **Scoring** | GPS tracking + optical | Within budget |
| **Cost target** | <$100,000 | Affordable for multiple units |

### 11.2 Integration với Existing Products

**Synergies với VN-TARGET-DRONE-001:**
- Shared scoring system
- Common mooring technology
- Combined sea trial events

**Synergies với Naval Weapon Simulator:**
- Virtual-live integration
- Pre-fire simulation training
- Post-fire data for model validation

### 11.3 Development Roadmap

```
ROADMAP: VN FIXED SEA TARGET CAPABILITY
════════════════════════════════════════════════════

2026 Q1-Q2 │ Phase 1: Basic Target Barge
           │ - Simple pontoon structure
           │ - Manual RCS reflectors
           │ - GPS tracking only
           │ Cost: $50K
           │
2026 Q3-Q4 │ Phase 2: Enhanced Signature
           │ - Adjustable corner reflectors
           │ - IR enhancement panels
           │ - Improved mooring system
           │ Cost: $30K additional
           │
2027 Q1-Q2 │ Phase 3: Scoring Integration
           │ - Optical scoring system
           │ - Telemetry capability
           │ - Real-time tracking display
           │ Cost: $100K
           │
2027 Q3-Q4 │ Phase 4: Full Capability
           │ - Multiple target variants
           │ - Automated scoring
           │ - Database integration
           │ Cost: $70K
           │
           │ TOTAL: ~$250K for indigenous capability
════════════════════════════════════════════════════
```

### 11.4 Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| RCS không đạt specification | Medium | High | Prototype testing, iteration |
| Mooring failure trong test | Low | Very High | Over-design, redundancy |
| Budget overrun | Medium | Medium | Phased development |
| Scoring system inaccurate | Medium | High | Cross-validation with optical |
| Weather delays | High | Low | Flexible scheduling |

---

## 12. APPENDICES

### Appendix A: RCS Calculation Examples

**Example 1: Square Trihedral Corner Reflector**

Given:
- Edge length a = 0.5m
- Frequency f = 10 GHz (X-band)
- Wavelength λ = c/f = 0.03m

Calculation:
```
σ = (12π × a⁴) / λ²
σ = (12 × 3.14159 × 0.5⁴) / 0.03²
σ = (37.7 × 0.0625) / 0.0009
σ = 2.356 / 0.0009
σ = 2,618 m²
σ(dBsm) = 10 × log₁₀(2,618) = 34.2 dBsm
```

**Example 2: Ship RCS Estimation**

Given:
- Displacement D = 1 kilo-ton (corvette)
- Frequency f = 10 GHz

Calculation:
```
σaverage = 52 × f^0.5 × D^1.5
σaverage = 52 × 10^0.5 × 1^1.5
σaverage = 52 × 3.16 × 1
σaverage = 164 m²
σ(dBsm) = 10 × log₁₀(164) = 22.1 dBsm
```

### Appendix B: Mooring Calculation Example

**Given:**
- Target mass: 5 tons
- Water depth: 25m
- Expected conditions: Moderate (wind 15 kts, 1m waves)
- Bottom type: Mud/sand

**Anchor Selection:**
```
Required holding = Target mass × Safety factor × Drag coefficient
Required holding = 5,000 kg × 3 × 1.5 = 22,500 kg

Option 1: Mushroom Anchor
Weight needed = 22,500 / 4 (mud) = 5,625 kg → 6 ton anchor

Option 2: Helix Anchor
Weight needed = 22,500 / 12 = 1,875 kg → 2 ton class

Selected: Helix anchor (lighter, higher holding)
```

**Rode Calculation:**
```
Depth = 25m
Scope = 3:1 (moderate weather)
Total rode = 25 × 3 = 75m

Configuration:
- Ground chain: 15m × 1" galvanized
- Upper chain: 20m × 3/4" galvanized
- Nylon rope: 40m × 1.5" three-strand
```

### Appendix C: Glossary

| Term | Definition |
|------|------------|
| **CEP** | Circular Error Probable - radius within which 50% of shots fall |
| **CIWS** | Close-In Weapon System |
| **dBsm** | Decibels relative to one square meter (RCS unit) |
| **LCMT** | Low Cost Modular Target |
| **MDI** | Miss Distance Indicator |
| **RCS** | Radar Cross Section |
| **SINKEX** | Sinking Exercise |
| **SEPTAR** | Seaborne Powered Target |

---

**Tài liệu này được tạo theo framework D-M-I-R × ODI × Systems Thinking × Meta-Learning phục vụ phát triển năng lực mục tiêu cố định trên biển cho Hải quân Việt Nam.**

*Phiên bản: 1.0 | Ngày: 14/01/2026*
