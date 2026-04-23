# TECHNICAL STACK — XUỒNG KHÔNG NGƯỜI LÁI KIỂU HỞ (BÁN NGẦM)
## Open-Hull Semi-Submersible Unmanned Surface Vessel (OH-SS-USV)

**Document ID:** VN-USV-SS-TS-001  
**Version:** 1.0  
**Date:** 2026-03-16  
**Classification:** RESTRICTED — Defense Technology Development  
**Framework:** Pahl & Beitz Systematic Design + D-M-I-R Unified Model  

---

## MỤC LỤC

1. [D-M-I-R Context & Strategic Positioning](#1-d-m-i-r-context--strategic-positioning)
2. [Overall Function & System Boundary](#2-overall-function--system-boundary)
3. [Technical Stack Architecture](#3-technical-stack-architecture)
4. [Layer 1: Hull & Structural Platform](#4-layer-1-hull--structural-platform)
5. [Layer 2: Propulsion & Power System](#5-layer-2-propulsion--power-system)
6. [Layer 3: Navigation & Autonomy](#6-layer-3-navigation--autonomy)
7. [Layer 4: Communication & Data Link](#7-layer-4-communication--data-link)
8. [Layer 5: Payload & Mission Systems](#8-layer-5-payload--mission-systems)
9. [Layer 6: Command & Control (C2) Software](#9-layer-6-command--control-c2-software)
10. [Layer 7: Ground Control Station (GCS)](#10-layer-7-ground-control-station-gcs)
11. [Morphological Matrix — Working Principles](#11-morphological-matrix--working-principles)
12. [Indigenous Content Analysis](#12-indigenous-content-analysis)
13. [Cost Architecture](#13-cost-architecture)
14. [Standards & Compliance](#14-standards--compliance)
15. [Development Roadmap](#15-development-roadmap)

---

## 1. D-M-I-R Context & Strategic Positioning

### 1.1 DIAGNOSIS — Tại sao Xuồng Bán Ngầm?

**Bối cảnh chiến lược:** Xu hướng quốc tế đang chuyển dịch từ USV mặt nước truyền thống sang các dạng bán ngầm (semi-submersible) vì ba lý do cốt lõi:

| Đặc tính | USV Truyền thống (Mặt nước) | USV Bán Ngầm (Kiểu hở) |
|:---|:---|:---|
| Chữ ký radar (RCS) | Cao — dễ phát hiện | Cực thấp — chỉ phần nhỏ nhô trên mặt nước |
| Chịu sóng biển | Bị va đập sóng (slamming) | Phần lớn thân chìm dưới nước, giảm tác động sóng |
| Tốc độ tối đa | Cao (>40 kts với planing hull) | Trung bình (8-15 kts) — chấp nhận đánh đổi |
| Endurance | Phụ thuộc nhiên liệu | Có thể tích hợp năng lượng tái tạo (solar/wind) |
| Survivability | Thấp — profile lớn | Cao — khó phát hiện, khó ngắm bắn |

**Kiểu hở (Open hull)** khác biệt với semi-submersible kín ở chỗ: phần trên mặt nước là cấu trúc khung hở (không có thân kín đóng hoàn toàn), cho phép sóng nước đi qua thay vì chống lại lực sóng. Điều này giảm tải cấu trúc và cho phép thiết kế nhẹ hơn.

**Leverage Point Analysis (Meadows Framework):**

- **L2 (Paradigm):** Chuyển từ "USV phải nhanh và trên mặt nước" → "USV cần sống sót và dai dẳng" — đây là paradigm shift quan trọng nhất
- **L5 (Rules):** Thiết kế theo nguyên tắc "low observable" thay vì "high performance"
- **L10 (Physical structure):** Thân bán ngầm thay đổi hoàn toàn physical structure so với hull thông thường

### 1.2 MODELING — Phân Tích Hệ Thống

**System Archetype nhận diện:** "Fixes That Fail" — nhiều chương trình USV trước đây cố gắng tăng tốc độ và tải trọng (fix trực tiếp) nhưng điều này tăng RCS, giảm survivability, và tăng chi phí (side effect ngược). Semi-submersible phá vỡ archetype này bằng cách đổi paradigm hoàn toàn.

**Stock-Flow Model:**
```
[Nhiên liệu/Pin] ──flow──▶ [Năng lượng khả dụng] ──flow──▶ [Chuyển động]
                                    │
                                    ▼
                          [Nhiệt thải / Chữ ký IR]  ← CẦN TỐI THIỂU
                          
[Tín hiệu C2] ──flow──▶ [Autonomous Decision] ──flow──▶ [Mission Execution]
                                    │
                                    ▼
                          [RF Emission / Chữ ký EM]  ← CẦN TỐI THIỂU
```

**Ràng buộc chính (TOC Constraint):** Khả năng tích hợp hệ thống (systems integration) — nút thắt là không phải phần cứng riêng lẻ mà là sự phối hợp giữa ballast control, propulsion, navigation, và communication trong điều kiện biển thực tế.

---

## 2. Overall Function & System Boundary

### 2.1 Overall Function Statement (Solution-Neutral — theo P&B)

> **"Di chuyển tự chủ hoặc điều khiển từ xa trên/dưới mặt biển với đặc tính quan sát thấp, mang tải trọng nhiệm vụ, truyền dữ liệu về trạm điều khiển, duy trì hoạt động trong thời gian dài với năng lực sản xuất nội địa Việt Nam"**

**Solution-Neutral Test:**
- ❌ "Dùng động cơ brushless với propeller" = Solution-specific
- ✅ "Tạo lực đẩy để di chuyển trong môi trường nước" = Solution-neutral
- ❌ "Dùng Pixhawk làm autopilot" = Solution-specific  
- ✅ "Điều hướng tự chủ đến waypoint" = Solution-neutral

### 2.2 System Boundary

```
INCLUDES (Trong phạm vi thiết kế):
├─ Thân xuồng bán ngầm (hull + buoyancy structure)
├─ Hệ thống ballast (điều chỉnh độ chìm)
├─ Hệ thống đẩy (propulsion)
├─ Nguồn năng lượng (power system)
├─ Hệ thống điều hướng (navigation + autopilot)
├─ Hệ thống thông tin liên lạc (communication)
├─ Hệ thống payload (mission-specific)
├─ Hệ thống giám sát sức khỏe (health monitoring)
└─ Phần mềm điều khiển onboard (embedded software)

EXCLUDES (Ngoài phạm vi — đã có hoặc riêng biệt):
├─ Ground Control Station hardware (thiết kế riêng)
├─ Cơ sở hạ tầng thông tin liên lạc (mạng 4G/5G, vệ tinh)
├─ Hệ thống hậu cần bảo trì (logistics)
└─ Vũ khí / hệ thống tấn công (nếu có, là module riêng)
```

### 2.3 Sub-function Decomposition (E-M-S Flow)

```
PRIMARY INPUT FLOWS:
├─ Energy:  Năng lượng điện từ pin / generator / solar
├─ Material: Nước biển (cho ballast), không khí (nổi/chìm)
└─ Signal:  Lệnh từ GCS, GPS, cảm biến môi trường

PRIMARY TRANSFORMATION:
├─ Điều chỉnh độ nổi/chìm (ballast control)
├─ Tạo lực đẩy và điều hướng
├─ Xử lý tín hiệu điều hướng (navigation processing)  
├─ Thực thi nhiệm vụ payload
├─ Giám sát trạng thái hệ thống
└─ Truyền/nhận dữ liệu với GCS

PRIMARY OUTPUT FLOWS:
├─ Energy:  Nhiệt thải, sóng âm (propeller noise)
├─ Material: Xuồng di chuyển qua nước đến vị trí nhiệm vụ
└─ Signal:  Telemetry, dữ liệu payload, trạng thái hệ thống
```

---

## 3. Technical Stack Architecture

### 3.1 Sơ Đồ 7 Layers

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 7: GROUND CONTROL STATION (GCS)                  │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Mission Planning │ Monitoring │ Override │ Replay    │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 6: COMMAND & CONTROL SOFTWARE (C2)                │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Autonomy Engine │ Mission Exec │ Safety Logic       │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 5: PAYLOAD & MISSION SYSTEMS                      │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ ISR Sensors │ EW Payload │ Signature Mgmt │ Cargo   │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 4: COMMUNICATION & DATA LINK                      │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ RF Radio │ Satellite │ Mesh Network │ Emergency Bcn │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 3: NAVIGATION & AUTONOMY                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ GPS/GNSS │ INS/IMU │ Autopilot │ Collision Avoid   │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 2: PROPULSION & POWER                             │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Motors │ Thruster │ Battery │ BMS │ Solar │ Ballast │ │
│  └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  LAYER 1: HULL & STRUCTURAL PLATFORM                     │
│  ┌─────────────────────────────────────────────────────┐ │
│  │ Semi-Sub Hull │ Buoyancy │ Mast/Snorkel │ Mounting  │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Nguyên Tắc Thiết Kế Technical Stack (P&B Basic Rules)

| Nguyên tắc P&B | Áp dụng cho Technical Stack |
|:---|:---|
| **Clear force transmission** | Load path từ payload → mast → hull rõ ràng, ngắn nhất |
| **Short & direct force paths** | Thruster mount trực tiếp vào hull chính, không qua intermediate frame |
| **Matched deformations** | Hull sections giãn nở nhiệt đồng đều, tránh stress concentration |
| **Balanced forces** | Thruster layout đối xứng, ballast tanks cân bằng |
| **Division of tasks** | Mỗi module/board đảm nhận 1 sub-function rõ ràng |
| **Self-help** | Auto-ballast tự cân bằng, auto-return khi mất liên lạc |
| **Fault-free design** | Redundancy cho critical paths (navigation, communication) |

---

## 4. Layer 1: Hull & Structural Platform

### 4.1 Working Principles (Morphological Analysis)

| Tiêu chí | WP-1: Torpedo-form HDPE | WP-2: Catamaran bán ngầm | WP-3: SWATH nhỏ | WP-4: Open-frame composite |
|:---|:---|:---|:---|:---|
| **Hình dáng** | Thân tròn dạng ngư lôi, mast nhô lên | 2 thân chìm + cầu nối hở | 2 thân ngầm nhỏ + strut | Khung mở, phao nổi modular |
| **Vật liệu** | HDPE roto-molded | HDPE ống + nhôm 5083 | GRP composite | Nhôm 6061 + HDPE phao |
| **RCS** | Rất thấp (chỉ mast) | Thấp (cầu nối nhỏ) | Rất thấp | Thấp-Trung bình |
| **Ổn định** | Thấp (cần ballast active) | Cao (catamaran) | Rất cao | Trung bình |
| **Khả năng sản xuất VN** | Cao — roto-mold nội địa | Cao — hàn ống HDPE | Trung bình — cần mold composite | Cao — gia công CNC nhôm |
| **Tải trọng** | Thấp (internal) | Trung bình | Trung bình-Cao | Cao (open deck) |
| **Chi phí ước tính** | $800-1,500 | $1,200-2,500 | $3,000-5,000 | $1,500-3,000 |

### 4.2 Đề Xuất Baseline: WP-1 × WP-4 Hybrid

**Concept:** Thân chính torpedo-form HDPE (chứa electronics + battery) với khung nhôm mở phía trên (mang payload), mast carbon fiber/nhôm cho antenna + GPS.

**Thông số sơ bộ:**

| Parameter | Value | Basis |
|:---|:---|:---|
| Chiều dài tổng (LOA) | 2.5 – 4.0 m | Phụ thuộc payload class |
| Đường kính thân chính | 300 – 500 mm | Chứa electronics bay |
| Draft (mớn nước) | 200 – 400 mm (có thể điều chỉnh) | Ballast-dependent |
| Freeboard (nổi tối đa) | 50 – 150 mm (chỉ mast + antenna) | Low-observable requirement |
| Trọng lượng rỗng | 30 – 80 kg | Material-dependent |
| Tải trọng hữu ích | 15 – 40 kg | Mission-dependent |
| Sức nổi dự trữ | ≥ 50% | Safety factor |

### 4.3 Structural Components

```
HULL ASSEMBLY:
├─ Main Body (torpedo section)
│   ├─ HDPE roto-molded cylinder Ø400mm × L2000mm
│   ├─ End caps: aluminum 5083, O-ring sealed (IP68)
│   ├─ Internal rails: aluminum T-slot for mounting electronics
│   └─ Ballast tank integrated (forward section)
│
├─ Superstructure Frame (open frame)
│   ├─ Aluminum 6061-T6 rectangular tube 40×20×2mm
│   ├─ Bolted connection to hull (4× M8 stainless)
│   └─ Payload mounting plate: aluminum 6mm
│
├─ Mast Assembly
│   ├─ Carbon fiber tube Ø30mm × H500mm (hoặc nhôm Ø25mm)
│   ├─ Antenna mount: GPS + Communication
│   ├─ Navigation light (LED, powered from main bus)
│   └─ Camera mount (nếu có ISR payload)
│
└─ Buoyancy Control
    ├─ Forward ballast tank: 5-15L capacity
    ├─ Ballast pump: 12V DC submersible (500 mL/min)
    ├─ Vent valve: solenoid-controlled
    └─ Level sensor: differential pressure (0-500mm H2O)
```

### 4.4 Vật Liệu & Nguồn Cung Nội Địa

| Component | Vật liệu | Nhà cung cấp VN | Tình trạng |
|:---|:---|:---|:---|
| Thân chính | HDPE SDR17 Ø400mm | Nhựa Bình Minh, Tiền Phong | ✅ Sẵn có |
| End caps | Nhôm 5083 CNC | Các xưởng CNC Bình Dương/TP.HCM | ✅ Sẵn có |
| Khung thượng tầng | Nhôm 6061-T6 profile | Nhôm Việt Pháp, Nhôm Xingfa | ✅ Sẵn có |
| Mast | Carbon fiber tube / nhôm ống | Nhập khẩu CF / nhôm nội địa | ⚠️ CF nhập, nhôm nội |
| Buoyancy foam | PU foam 35 kg/m³ | Foam Việt, Hùng Phát | ✅ Sẵn có |
| Sealant/gasket | Silicone marine grade | 3M / Dow (đại lý VN) | ✅ Sẵn có |
| Fasteners | Inox 316 marine | Bolton Việt Nam | ✅ Sẵn có |

---

## 5. Layer 2: Propulsion & Power System

### 5.1 Propulsion Working Principles

| Sub-function | WP-1 | WP-2 | WP-3 | WP-4 |
|:---|:---|:---|:---|:---|
| **Tạo lực đẩy** | Brushless DC + propeller | Brushless DC + waterjet | Thruster module (ROV-type) | Biomimetic (fish-tail) |
| **Điều hướng** | Differential thrust (2 motors) | Single motor + rudder | Vectored thrust (pod rotation) | Differential + vertical fin |
| **Điều chỉnh độ sâu** | Ballast pump + vent | Dive plane (cánh lặn) | Variable buoyancy engine | Combination ballast + plane |

### 5.2 Đề Xuất Baseline Propulsion

**Architecture: Dual brushless thruster + ballast pump**

```
PROPULSION SYSTEM:
├─ Main Thrusters (×2)
│   ├─ Motor: Brushless DC 500-1000W each
│   │   └─ Options: T200 BlueRobotics ($170) / Nội địa BLDC
│   ├─ ESC: 60A bidirectional, PWM input
│   ├─ Propeller: 3-blade, Ø150mm, plastic/bronze
│   ├─ Mounting: Through-hull or pod-mount
│   └─ Configuration: Differential thrust → no rudder needed
│
├─ Vertical Thruster (optional — for depth control assist)
│   ├─ Motor: Brushless DC 200-400W
│   └─ Purpose: Nhanh chóng thay đổi depth khi cần
│
├─ Ballast System
│   ├─ Pump: Bilge pump 12V, 2000 GPH
│   ├─ Tank: Internal HDPE, 10L capacity
│   ├─ Valve: Solenoid 12V NC (normally closed = safe surface)
│   ├─ Sensor: Pressure transducer (depth)
│   └─ Logic: PID control → target depth ± 50mm
│
└─ Depth Control Logic
    ├─ Mode 1: Surface — ballast empty, maximum freeboard
    ├─ Mode 2: Semi-submerged — ballast partial, only mast exposed
    ├─ Mode 3: Awash — ballast full, deck-wash level
    └─ Safety: Auto-surface on fault (ballast dump via NC valve)
```

### 5.3 Power System

```
POWER SYSTEM:
├─ Primary: Lithium Battery Pack
│   ├─ Chemistry: LiFePO4 (an toàn hơn cho maritime)
│   ├─ Voltage: 48V nominal (16S configuration)
│   ├─ Capacity: 50-100 Ah (2.4 - 4.8 kWh)
│   ├─ Weight: 15-30 kg
│   ├─ BMS: 16S balancing, overcharge/discharge protection
│   │   ├─ Options: Daly BMS / JBD BMS (China, ~$30-60)
│   │   └─ Monitoring: CAN bus output to main controller
│   └─ Housing: Sealed compartment, pressure-equalized
│
├─ Auxiliary: Solar Panel (optional, cho extended mission)
│   ├─ Type: Marine-grade flexible, 100-200W
│   ├─ MPPT: Victron SmartSolar 75/15 hoặc tương đương
│   ├─ Mounting: On mast top or deployable panel
│   └─ Constraint: Chỉ hiệu quả khi ở chế độ surface
│
├─ Power Distribution
│   ├─ Main Bus: 48V DC
│   ├─ 12V Rail: DC-DC converter (for sensors, radio)
│   ├─ 5V Rail: DC-DC converter (for computers, GPS)
│   ├─ Fusing: Per-device fuses + master kill switch
│   └─ Monitoring: INA226 current sensors on each rail
│
└─ Endurance Estimate
    ├─ Cruise speed 3 kts: ~200W → 12-24 hours
    ├─ Transit speed 6 kts: ~600W → 4-8 hours  
    ├─ Station-keeping: ~50W → 48-96 hours
    └─ Solar-assisted station-keeping: theoretically unlimited (daylight)
```

### 5.4 Power Budget

| Subsystem | Typical (W) | Peak (W) | Duty Cycle |
|:---|:---|:---|:---|
| Propulsion (2× thruster) | 200 | 1,500 | Variable |
| Ballast pump | 30 | 60 | 10% |
| Navigation computer | 10 | 15 | 100% |
| GPS/GNSS | 1 | 2 | 100% |
| IMU/INS | 2 | 3 | 100% |
| Communication radio | 5 | 25 | 20% TX |
| Payload (ISR camera) | 10 | 30 | 80% |
| Lights & safety | 3 | 10 | Variable |
| **TOTAL (cruise)** | **~260** | **~1,645** | — |

---

## 6. Layer 3: Navigation & Autonomy

### 6.1 Navigation Sensor Stack

```
NAVIGATION SYSTEM:
├─ Position (Where am I?)
│   ├─ Primary: Multi-band GNSS receiver
│   │   ├─ u-blox ZED-F9P (RTK capable, ±2cm) — ~$200
│   │   ├─ Or: u-blox NEO-M9N (standard, ±1.5m) — ~$30
│   │   └─ Antenna: Marine patch, mounted on mast top
│   │
│   └─ Backup: Dead reckoning via IMU + water speed
│
├─ Attitude (How am I oriented?)
│   ├─ IMU: 9-DOF (accel + gyro + mag)
│   │   ├─ ICM-42688-P + BMM350 (high-performance) — ~$15
│   │   ├─ Or: VectorNav VN-100 (industrial grade) — ~$800
│   │   └─ Update rate: ≥ 100 Hz
│   │
│   └─ Depth: Pressure sensor (MS5837-30BA) — ~$25
│       └─ Resolution: ±2mm, range 0-30m
│
├─ Environment (What's around me?)
│   ├─ Forward sonar: Ping360 scanning sonar — ~$2,500
│   │   └─ Or: Budget: Ping2 single-beam altimeter — ~$280
│   ├─ AIS receiver: dAISy AIS (ship traffic) — ~$65
│   ├─ Weather: BME280 (pressure/temp/humidity) — ~$5
│   └─ Water leak: Resistive sensor in each compartment — ~$2
│
└─ Speed
    ├─ GPS-derived SOG (Speed Over Ground)
    ├─ Or: Paddlewheel / doppler log (for current estimation)
    └─ Thruster RPM feedback → estimated speed through water
```

### 6.2 Autopilot & Computing Platform

```
COMPUTING PLATFORM:
├─ Main Flight Controller (MFC)
│   ├─ Option A: Pixhawk 6X (ArduSub/ArduBoat firmware)
│   │   ├─ Pro: Mature ecosystem, open-source, community support
│   │   ├─ Con: Limited AI capability onboard
│   │   └─ Cost: ~$300
│   │
│   ├─ Option B: NVIDIA Jetson Orin Nano + Pixhawk as co-processor
│   │   ├─ Pro: AI/ML capable (camera processing, COLREGS)
│   │   ├─ Con: Higher power, complexity
│   │   └─ Cost: ~$500 (Jetson) + $300 (Pixhawk) = $800
│   │
│   └─ Option C: Raspberry Pi 5 + Navio2/Custom HAT
│       ├─ Pro: Low cost, flexible
│       ├─ Con: Less real-time guarantee, lower reliability
│       └─ Cost: ~$120
│
├─ Firmware / Software Stack
│   ├─ Real-time control: ArduSub / ArduRover (PX4 alternative)
│   │   ├─ Waypoint navigation
│   │   ├─ Station-keeping
│   │   ├─ Depth hold (PID control ballast)
│   │   ├─ Return-to-home (fail-safe)
│   │   └─ Geofence enforcement
│   │
│   ├─ Mission computer (on Jetson/RPi):
│   │   ├─ ROS2 Humble (middleware)
│   │   ├─ MAVROS (ArduPilot ↔ ROS2 bridge)
│   │   ├─ Path planning (A* / RRT*)
│   │   ├─ COLREGS compliance (AI-based)
│   │   └─ Payload management
│   │
│   └─ AI Inference (on Jetson — nếu chọn Option B):
│       ├─ Object detection: YOLOv8 (ship/obstacle detection)
│       ├─ Semantic segmentation: water/sky/obstacle
│       └─ VinAI models (nếu có partnership)
│
└─ Autonomy Levels (NMEA/NATO STANAG classification)
    ├─ Level 1: Remote control (human drives every action)
    ├─ Level 2: Waypoint following (human plans, vessel executes)
    ├─ Level 3: Supervised autonomy (vessel plans, human approves)
    ├─ Level 4: Full autonomy with monitoring
    └─ Target: Level 2-3 for initial deployment
```

### 6.3 Navigation Software Architecture

```
┌────────────────────────────────────────────────┐
│              MISSION COMPUTER (ROS2)            │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐ │
│  │ Perception│  │ Planning │  │ Payload Mgmt │ │
│  │ (camera, │  │ (waypoint,│  │ (ISR, EW,    │ │
│  │  sonar,  │  │  obstacle │  │  signature)  │ │
│  │  AIS)    │  │  avoid)  │  │              │ │
│  └────┬─────┘  └────┬─────┘  └──────┬───────┘ │
│       │              │               │          │
│       └──────┬───────┘               │          │
│              ▼                       │          │
│  ┌────────────────────┐              │          │
│  │   MAVROS Bridge    │◀─────────────┘          │
│  └────────┬───────────┘                         │
└───────────┼─────────────────────────────────────┘
            │ MAVLink protocol
            ▼
┌───────────────────────────────────────────────────┐
│           FLIGHT CONTROLLER (ArduSub/Rover)        │
│  ┌─────────┐ ┌──────────┐ ┌───────────┐          │
│  │ EKF     │ │ PID Loops│ │ Fail-safe │          │
│  │ (sensor │ │ (heading,│ │ (RTH, geo │          │
│  │  fusion)│ │  depth,  │ │  fence,   │          │
│  │         │ │  speed)  │ │  surface) │          │
│  └─────────┘ └──────────┘ └───────────┘          │
│       │            │              │               │
│       ▼            ▼              ▼               │
│  ┌──────────────────────────────────────────┐     │
│  │        HARDWARE ABSTRACTION LAYER         │     │
│  │  GPS │ IMU │ Depth │ ESC │ Ballast │ Radio│     │
│  └──────────────────────────────────────────┘     │
└───────────────────────────────────────────────────┘
```

---

## 7. Layer 4: Communication & Data Link

### 7.1 Communication Stack

```
COMMUNICATION SYSTEM:
├─ Primary Link: Long-range radio
│   ├─ Option A: LoRa 868/915 MHz (>20km LOS, low bandwidth)
│   │   ├─ Module: RFM95W / SX1276
│   │   ├─ Bandwidth: 0.3-50 kbps
│   │   ├─ Use: Telemetry, commands, waypoints
│   │   └─ Cost: ~$15/module
│   │
│   ├─ Option B: 4G/LTE cellular modem (coastal operations)
│   │   ├─ Module: Quectel EC25 / SIMCom 7600
│   │   ├─ Bandwidth: Up to 150 Mbps
│   │   ├─ Use: Video streaming, high-bandwidth data
│   │   ├─ Range: Depends on cell coverage
│   │   └─ Cost: ~$40-80/module + SIM
│   │
│   └─ Option C: 5.8 GHz WiFi (short range, high bandwidth)
│       ├─ Use: Near-shore operations, firmware update
│       ├─ Range: 1-3 km with directional antenna
│       └─ Cost: ~$20
│
├─ Backup Link: Satellite (for beyond-LOS)
│   ├─ Option: Iridium SBD (Short Burst Data)
│   │   ├─ Module: RockBLOCK 9603
│   │   ├─ Bandwidth: 340 bytes/message
│   │   ├─ Use: Emergency position, critical commands
│   │   └─ Cost: ~$250 + $0.04/message
│   │
│   └─ Option: Starlink Mini (high bandwidth satellite)
│       ├─ For: Extended mission video/data
│       ├─ Power: ~40W
│       └─ Cost: ~$600 + monthly subscription
│
├─ Safety Systems
│   ├─ AIS transponder: Class B (vessel identification)
│   ├─ Emergency beacon: EPIRB-like (manual activation)
│   └─ Strobe light: LED, auto-activate at night
│
└─ Data Link Protocol
    ├─ MAVLink v2 (primary telemetry protocol)
    ├─ Encrypted overlay: AES-256 (for military operations)
    ├─ Heartbeat: 1 Hz (link health monitoring)
    └─ Lost-link procedure: Continue mission → RTH → Surface & beacon
```

### 7.2 Antenna Considerations (Semi-submersible specific)

**Thách thức đặc thù:** Khi ở chế độ bán ngầm, hầu hết thân chìm dưới nước → antenna phải trên mast, và mast phải tối thiểu chiều cao nhưng đủ để maintain RF link.

```
MAST ANTENNA LAYOUT:
        ▲ GPS antenna (top)
        │
    ┌───┤ Communication antenna (omni)
    │   │
    │   │ AIS antenna
    │   │
    │   │ Camera/sensor (nếu có)
    │   │
~~~~│~~~│~~~~ Mặt nước ~~~~~~~~~~~~~~~~~~~~
    │   │
    └───┘ Mast base (sealed through-hull)
    ┌───────────────────────────┐
    │     MAIN HULL (SUBMERGED)  │
    └───────────────────────────┘
    
Chiều cao mast: 300-600mm trên mặt nước
→ Ảnh hưởng: giảm RF range nhưng giảm RCS đáng kể
→ Compromise: Retractable mast (thụt vào khi không cần comms)
```

---

## 8. Layer 5: Payload & Mission Systems

### 8.1 Payload Configuration Matrix

**Nguyên tắc P&B "Division of Tasks":** Payload là module riêng biệt, không ảnh hưởng đến core platform.

| Mission Type | Payload Description | Weight (kg) | Power (W) | Cost Est. |
|:---|:---|:---|:---|:---|
| **ISR (Reconnaissance)** | Camera + recording system | 2-5 | 10-30 | $200-2,000 |
| **Hydrographic Survey** | Single-beam sonar + GPS RTK | 3-8 | 15-40 | $500-3,000 |
| **EW (Electronic Warfare)** | RF jammer / signal relay | 5-15 | 50-200 | $1,000-10,000 |
| **Decoy / Signature** | Radar reflector + IR emitter | 5-20 | 20-100 | $300-2,000 |
| **Cargo / Resupply** | Sealed container + release | 10-30 | 5 | $100-500 |
| **Mine / Obstacle** | Sensor array + MCM payload | 5-15 | 30-80 | $2,000-15,000 |
| **Communication Relay** | Radio repeater + antenna | 3-8 | 20-50 | $500-3,000 |
| **Sensor Deployment** | Sonobuoy / hydrophone dropper | 5-15 | 10-30 | $500-5,000 |

### 8.2 ISR Payload Stack (Baseline Configuration)

```
ISR PAYLOAD:
├─ Daytime Camera
│   ├─ Sensor: Sony IMX577 (12MP, 1/2.3")
│   ├─ Lens: M12 fixed focal, IP67
│   ├─ Processing: On Jetson (YOLO inference)
│   └─ Housing: Acrylic dome, waterproof
│
├─ Night/Thermal Camera (optional upgrade)
│   ├─ Sensor: FLIR Lepton 3.5 (160×120, LWIR)
│   ├─ Or: Seek Thermal CompactPRO (320×240)
│   └─ Cost: $200-500
│
├─ Recording
│   ├─ Storage: MicroSD 256GB (local recording)
│   ├─ Format: H.265 compressed
│   └─ Streaming: Via 4G/WiFi to GCS (when bandwidth available)
│
└─ Mounting
    ├─ Position: Mast-top (above waterline)
    ├─ Stabilization: 2-axis gimbal (roll + pitch compensation)
    └─ Wiper: Hydrophobic coating + occasional water jet clear
```

### 8.3 Decoy Payload Stack (Liên hệ THÀNH TRÌ)

**Kế thừa từ dự án THÀNH TRÌ:** Hệ thống bán ngầm có thể mang payload decoy để tạo chữ ký mô phỏng tàu lớn hơn.

```
DECOY PAYLOAD:
├─ Radar Signature Enhancement
│   ├─ Corner reflectors: Aluminum trihedral, cạnh 200mm (×4-8)
│   ├─ Deployable: Gập lại khi transit, mở ra khi on-station
│   ├─ RCS target: 10-50 m² (mô phỏng patrol boat)
│   └─ Nội địa: Nhôm 5052 cắt CNC + bản lề inox
│
├─ IR Signature
│   ├─ Emitter: Nichrome heating element (12V, 100W)
│   ├─ Or: Propane micro-burner (higher temp, limited duration)
│   ├─ Target: Equivalent to small vessel engine exhaust
│   └─ Control: On/off + intensity via main controller
│
└─ Acoustic (optional)
    ├─ Underwater speaker: Piezoelectric transducer
    ├─ Playback: Recorded ship engine noise
    └─ Purpose: Confuse sonar/hydrophone detection
```

---

## 9. Layer 6: Command & Control (C2) Software

### 9.1 Software Architecture

```
C2 SOFTWARE STACK:
├─ Operating System
│   ├─ Flight Controller: NuttX (real-time, on Pixhawk)
│   └─ Mission Computer: Ubuntu 22.04 LTS (on Jetson/RPi)
│
├─ Middleware
│   ├─ ROS2 Humble Hawksbill
│   ├─ MAVROS2 (ArduPilot ↔ ROS2 bridge)
│   └─ Custom ROS2 nodes for mission-specific logic
│
├─ Core Nodes (ROS2)
│   ├─ /navigation
│   │   ├─ waypoint_follower
│   │   ├─ station_keeper
│   │   ├─ depth_controller
│   │   └─ collision_avoidance
│   │
│   ├─ /perception
│   │   ├─ camera_processor (YOLO detection)
│   │   ├─ sonar_processor
│   │   ├─ ais_decoder
│   │   └─ environment_monitor
│   │
│   ├─ /communication
│   │   ├─ telemetry_manager
│   │   ├─ video_streamer
│   │   ├─ link_monitor
│   │   └─ encryption_handler
│   │
│   ├─ /payload
│   │   ├─ isr_controller
│   │   ├─ decoy_controller
│   │   └─ cargo_controller
│   │
│   └─ /safety
│       ├─ health_monitor
│       ├─ failsafe_manager
│       ├─ geofence_enforcer
│       └─ emergency_surface
│
├─ AI/ML Pipeline (on Jetson)
│   ├─ TensorRT optimized models
│   ├─ Object detection: YOLOv8-nano (15 FPS @ 640×480)
│   ├─ Ship classification: Custom CNN
│   └─ COLREGS decision: Rule-based + ML hybrid
│
└─ Data Logging
    ├─ Flight log: ArduPilot .bin format
    ├─ ROS2 bag: All topics recorded
    ├─ Mission log: JSON structured events
    └─ Storage: 256GB onboard, post-mission download
```

### 9.2 Fail-Safe Logic (Critical for Semi-submersible)

```
FAIL-SAFE DECISION TREE:

[Lost Communication]
    │ Timer: 30s → Hover/Station-keep
    │ Timer: 5min → Return to Home (RTH)
    │ Timer: 30min → Surface + Emergency Beacon
    │
[Low Battery]
    │ 30% → Warning, reduce speed
    │ 20% → Auto RTH
    │ 10% → Emergency Surface + Beacon
    │
[Water Leak Detected]
    │ Compartment A (electronics) → IMMEDIATE Surface + RTH
    │ Compartment B (battery) → IMMEDIATE Surface + Shutdown propulsion
    │ Ballast tank → Continue mission, monitor
    │
[Ballast System Failure]
    │ Pump fail → Emergency vent (NC valve opens without power = SURFACE)
    │ Valve fail (stuck closed) → Pump out ballast via alternate path
    │ Sensor fail → Assume surface mode, disable depth hold
    │
[Navigation Failure]
    │ GPS lost → Dead reckoning via IMU + speed
    │ IMU fail → GPS-only navigation (reduced accuracy)
    │ Both fail → Surface + Beacon + Drift
```

---

## 10. Layer 7: Ground Control Station (GCS)

### 10.1 GCS Architecture

```
GROUND CONTROL STATION:
├─ Hardware
│   ├─ Laptop: Ruggedized (Panasonic Toughbook hoặc tương đương VN)
│   ├─ Radio: Matching ground-side LoRa/4G
│   ├─ Antenna: Directional Yagi (for LoRa) + omni (for 4G)
│   ├─ Joystick: USB gamepad (manual override)
│   └─ Power: 12V from vehicle battery + solar charger
│
├─ Software
│   ├─ Primary: QGroundControl (open-source, MAVLink native)
│   │   ├─ Map display: OpenStreetMap / nautical charts
│   │   ├─ Waypoint planning
│   │   ├─ Telemetry dashboard
│   │   └─ Video stream display
│   │
│   ├─ Alternative: Mission Planner (ArduPilot native)
│   │
│   └─ Custom overlay (Qt/Python):
│       ├─ Depth profile display
│       ├─ Ballast status visualization
│       ├─ Payload controls
│       └─ Mission recording/replay
│
└─ Operational Modes
    ├─ Manual: Joystick direct control
    ├─ Semi-auto: Waypoint with human oversight
    ├─ Auto: Fully autonomous mission execution
    └─ Emergency: Override all → Surface + RTH
```

---

## 11. Morphological Matrix — Working Principles Summary

### 11.1 Complete Morphological Matrix

| Sub-function | WP-1 (Baseline) | WP-2 | WP-3 | WP-4 | WP-5 |
|:---|:---|:---|:---|:---|:---|
| **F1: Tạo lực nổi** | HDPE sealed cylinder | GRP composite hull | Aluminum sealed tube | Foam-filled frame | Inflatable bladder |
| **F2: Điều chỉnh depth** | Ballast pump + vent | Dive planes | Variable buoyancy engine | Piston ballast | Compressed air blow |
| **F3: Tạo lực đẩy** | Dual BLDC + prop | Single motor + rudder | Waterjet | ROV thruster pods | Biomimetic (wave glider) |
| **F4: Điều hướng** | GPS/INS + Pixhawk | GPS + custom MCU | Acoustic navigation | Celestial + GPS | Inertial-only |
| **F5: Cung cấp năng lượng** | LiFePO4 battery | Li-ion + solar | Diesel generator | Fuel cell (H2) | Wave energy harvester |
| **F6: Truyền thông** | LoRa + 4G | Satellite (Iridium) | Acoustic modem | Mesh radio | Optical (laser) |
| **F7: Mang payload** | Internal bay + mast | External pod | Towed array | Modular container | Drop deployment |
| **F8: Đảm bảo an toàn** | Auto-surface + beacon | Redundant systems | Armor plating | Self-destruct | Passive drift |

### 11.2 Selected Working Structure (Concept V1)

**Combination Path:** F1-WP1 × F2-WP1 × F3-WP1 × F4-WP1 × F5-WP1 × F6-(WP1+WP2) × F7-WP1 × F8-WP1

**Compatibility Assessment:**

| Pair | Compatible? | Notes |
|:---|:---|:---|
| F1-WP1 × F2-WP1 | ✅ | HDPE hull tích hợp ballast tank tự nhiên |
| F2-WP1 × F3-WP1 | ✅ | Ballast và thruster dùng chung nguồn 48V |
| F3-WP1 × F4-WP1 | ✅ | ArduSub native support differential thrust |
| F4-WP1 × F5-WP1 | ✅ | Pixhawk + LiFePO4 = standard combo |
| F5-WP1 × F6-WP1 | ✅ | 48V system powers LoRa/4G modules |
| F6-WP1 × F7-WP1 | ⚠️ | Mast height trade-off: comms range vs. RCS |
| F7-WP1 × F8-WP1 | ✅ | Internal payload protected, auto-surface safe |

---

## 12. Indigenous Content Analysis

### 12.1 Make vs Buy Assessment

| Component | Make (VN) | Buy (Import) | Indigenous % |
|:---|:---|:---|:---|
| Hull structure | ✅ HDPE + nhôm CNC | — | 100% |
| Frame/mast | ✅ Nhôm profile + gia công | Carbon fiber tube (import) | 80% |
| Ballast system | ✅ Pump + valve + tank | Pressure sensor (import) | 85% |
| Propulsion motors | — | ✅ BLDC thrusters (import) | 0% → 50%* |
| ESC | — | ✅ Import or COTS | 10% |
| Battery pack | ⚠️ Cell nhập, pack lắp VN | LiFePO4 cells (import) | 40% |
| BMS | — | ✅ BMS board (import) | 0% |
| Pixhawk/FC | — | ✅ Import (open-source HW) | 0% → 30%** |
| GPS module | — | ✅ u-blox (import) | 0% |
| IMU | — | ✅ Import | 0% |
| Radio (LoRa) | ⚠️ Module nhập, integration VN | Module (import) | 30% |
| 4G modem | — | ✅ Quectel/SIMCom | 0% |
| Camera | — | ✅ Import sensor | 0% |
| Software | ✅ Open-source + custom | — | 90% |
| Integration & test | ✅ 100% nội địa | — | 100% |
| Wiring/connectors | ✅ Available VN | Marine connectors (import) | 60% |

**\* Lộ trình nội địa hóa motor:** Hợp tác với các nhà sản xuất motor VN (Điện cơ Hà Nội, v.v.) để phát triển BLDC chuyên dụng marine  
**\*\* Lộ trình nội địa hóa FC:** PCB manufacturing VN (Viettel, FPT) có thể sản xuất board Pixhawk-compatible

### 12.2 Indigenous Content Summary

| Phase | Indigenous Content (%) | Target |
|:---|:---|:---|
| Prototype (Year 1) | 45-55% | Functional demonstration |
| Pre-production (Year 2) | 60-70% | Motor + BMS localization |
| Production (Year 3+) | 75-85% | FC board + sensor integration |

---

## 13. Cost Architecture

### 13.1 Bill of Materials (BOM) Estimate — Prototype Unit

| Layer | Major Components | Cost (USD) |
|:---|:---|:---|
| **L1: Hull** | HDPE hull, end caps, frame, mast, fasteners | $400-800 |
| **L2: Propulsion** | 2× BLDC thrusters, ESCs, ballast pump/valve | $500-1,000 |
| **L2: Power** | LiFePO4 48V 50Ah, BMS, DC-DC, wiring | $600-1,200 |
| **L3: Navigation** | Pixhawk 6X, GPS, IMU, depth sensor | $400-700 |
| **L4: Communication** | LoRa modules, 4G modem, antennas | $100-300 |
| **L5: Payload** | ISR camera, housing, gimbal | $200-500 |
| **L6: Software** | Open-source (free) + integration labor | $0 (SW) |
| **L7: GCS** | Laptop, radio, antenna, joystick | $500-1,500 |
| **Integration** | Wiring, connectors, sealant, testing | $200-500 |
| **TOTAL PROTOTYPE** | | **$2,900 - $6,500** |
| **TOTAL PRODUCTION (×10+)** | Volume pricing, no GCS per unit | **$2,000 - $4,000/unit** |

### 13.2 So Sánh Chi Phí Với Giải Pháp Nước Ngoài

| System                   | Origin       | Cost             | Notes                           |
| :----------------------- | :----------- | :--------------- | :------------------------------ |
| SubSeaSail HORUS         | Mỹ           | >$50,000         | Semi-sub, energy harvesting     |
| ECA Group Inspector      | Pháp         | >$100,000        | Military-grade USV              |
| BlueRobotics BlueROV2    | Mỹ           | $5,000-8,000     | ROV (không phải USV, tham khảo) |
| **VN-USV-SS (Proposed)** | **Việt Nam** | **$2,000-4,000** | **50-90% cost savings**         |

---

## 14. Standards & Compliance

### 14.1 Applicable Standards

| Standard | Application | Phase |
|:---|:---|:---|
| **MIL-STD-810H** | Environmental testing (salt fog, vibration, temp) | Embodiment → Detail |
| **MIL-STD-461G** | EMC (electromagnetic compatibility) | Detail Design |
| **MIL-STD-882E** | System safety | All phases |
| **IP67/IP68** | Waterproofing (hull penetrations, connectors) | Embodiment |
| **TCVN 6259** | VN ship classification (reference) | Task Clarification |
| **COLREGS** | International collision avoidance rules | Navigation software |
| **IEC 61508** | Functional safety (fail-safe logic) | Software design |
| **NATO STANAG 4586** | UAV/USV interoperability (target) | C2 interface |

### 14.2 Environmental Requirements

| Parameter | Requirement | Test Method |
|:---|:---|:---|
| Nhiệt độ hoạt động | +5°C to +50°C | MIL-STD-810H Method 501/502 |
| Độ ẩm | 95% RH non-condensing | MIL-STD-810H Method 507 |
| Salt fog | 720 hours minimum | MIL-STD-810H Method 509 |
| Sóng biển | Sea State 3 (hoạt động) / SS 5 (sống sót) | Sea trial verification |
| Độ sâu hoạt động | 0 - 2m (semi-submerged) | Pressure test 3× design depth |
| UV exposure | 1000 hours minimum | MIL-STD-810H Method 505 |

---

## 15. Development Roadmap

### 15.1 Phased Development (P&B Phases Mapped)

```
PHASE 1: TASK CLARIFICATION (Month 1-2)
├─ Requirements list hoàn chỉnh (MUST/WISH)
├─ Stakeholder alignment
├─ Mission profile definition
└─ Standards mapping

PHASE 2: CONCEPTUAL DESIGN (Month 2-4)
├─ Function structure finalized
├─ Morphological matrix expanded
├─ VDI 2225 concept evaluation
├─ Technical stack selection locked
└─ Principle solution documented

PHASE 3: EMBODIMENT DESIGN (Month 4-8)
├─ Detailed layout drawings
├─ FEA/CFD for hull form
├─ Prototype BOM finalized
├─ Supplier qualification
├─ DfM / DfA review
└─ 1:3 scale model test (towing tank)

PHASE 4: DETAIL DESIGN (Month 8-12)
├─ Production drawings
├─ Software v1.0 release
├─ Full-scale prototype build
├─ Integration test
└─ Sea trial (sheltered waters)

PHASE 5: VERIFICATION & VALIDATION (Month 12-18)
├─ MIL-STD environmental testing
├─ Open water sea trials
├─ Endurance testing (72-hour mission)
├─ User acceptance testing
└─ Production readiness review
```

### 15.2 Quick Win — 30-Day Lab Demonstrator

**Mục tiêu:** Chứng minh concept bán ngầm hoạt động được, không cần hoàn hảo.

| Item | Description | Cost |
|:---|:---|:---|
| Hull | Ống PVC Ø200mm, L=1m, sealed ends | $20 |
| Ballast | Syringe pump + servo valve | $15 |
| Motor | Brushless RC boat motor (×2) | $40 |
| Controller | Arduino Mega + GPS shield | $30 |
| Radio | nRF24L01 2.4GHz | $5 |
| Power | 3S LiPo 5000mAh | $30 |
| **TOTAL** | | **$140** |

**Success criteria:** Demonstrate autonomous waypoint following with controllable depth (surface vs. semi-submerged mode).

---

## REFLECTION (D-M-I-R Phase 4)

### Key Design Decisions & Rationale

| Decision | Rationale | Alternative Considered | Why Rejected |
|:---|:---|:---|:---|
| HDPE hull | Nội địa, rẻ, chịu va đập, dễ sửa | GRP composite | Tốn kém, cần khuôn, khó sửa tại hiện trường |
| LiFePO4 battery | An toàn cho maritime (no thermal runaway) | Li-ion NMC | Rủi ro cháy nổ trong môi trường nước mặn |
| ArduSub firmware | Open-source, mature, large community | Custom firmware | Thời gian phát triển quá lớn, rủi ro cao |
| Differential thrust | Không cần rudder, đơn giản cơ khí | Single motor + rudder | Thêm cơ cấu, điểm hỏng, bảo trì |
| LoRa + 4G dual link | Redundancy: LoRa cho range, 4G cho bandwidth | Satellite only | Chi phí quá cao cho prototype phase |
| Ballast pump (not dive planes) | Đơn giản hơn, ít moving parts exposed | Dive planes | Thêm drag, phức tạp cơ khí, dễ hỏng |

### Paradigm Shifts Identified (L2 Leverage)

1. **"USV phải nhanh" → "USV phải dai dẳng và khó phát hiện"** — Semi-submersible chấp nhận tốc độ thấp hơn để đổi lấy survivability
2. **"Phải mua hệ thống hoàn chỉnh từ nước ngoài" → "Tích hợp COTS modules với hull nội địa"** — Indigenous content 75%+ khả thi
3. **"Autonomous = phức tạp = đắt" → "Open-source autopilot + COTS sensors = accessible"** — ArduSub + Pixhawk đã democratize maritime autonomy

### Next D-M-I-R Cycle Target

**Cycle 2 Focus:** Optimize ballast control system (L10 → L7 — chuyển từ physical structure sang feedback optimization)

- Improve depth hold accuracy from ±50mm → ±10mm
- Add predictive depth control (wave anticipation)
- Integrate with COLREGS for automated depth-change when vessel approaches

---

**Document End**  
**Author:** D-M-I-R Defense Systems Engineering Framework  
**Review Status:** Draft — Awaiting stakeholder input  
**Next Action:** VDI 2225 evaluation of concept variants (V1 vs V2 vs V3)
