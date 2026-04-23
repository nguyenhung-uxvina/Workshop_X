---
project: V-SMASH-M
phase: 3
type: system-architecture
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
classification: KHÔNG MẬT (UNCLASSIFIED)
inputs:
  - V-SMASH-M_TNKCT_v1.0.md (TNKCT)
  - V-SMASH-M_Function_Structure_v1.0.md (P17)
  - V-SMASH-M_Embodiment_Task_Clarification_v1.0.md (P22)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (P23)
  - V-SMASH-M_Material_Selection_v1.0.md (P24)
  - V-SMASH-M_FMEA_v1.0.md (P26)
  - V-SMASH-M_BOM_v1.0.md (Phase 4)
  - V-SMASH-SW-ICD_v1.0.md (ICD)
  - V-SMASH-SW-FW_SAD_v1.0.md (FW SAD)
  - V-SMASH-SW-AI_SAD_v1.0.md (AI SAD)
  - V-SMASH-SW-BAL_SAD_v1.0.md (BAL SAD)
  - V-SMASH-SW-COM_SAD_v1.0.md (COM SAD)
  - V-SMASH_Orchestration_Design_v1.0.md
---

# KIẾN TRÚC TỔNG THỂ HỆ THỐNG V-SMASH-M
# V-SMASH-M System Architecture

> **Mục đích:** Tài liệu tham chiếu duy nhất (single source of truth) mô tả kiến trúc tích hợp phần cứng — phần mềm — vận hành của hệ thống V-SMASH-M. Tổng hợp từ 47 sản phẩm thiết kế Phase 0→4.
>
> **Đối tượng sử dụng:** Nhóm sản xuất, kỹ sư kiểm định, nhà phát triển phần mềm nhúng, Hội đồng KH&CN.

---

## MỤC LỤC

1. [Giới thiệu & Phạm vi](#1-giới-thiệu--phạm-vi)
2. [Tổng quan hệ thống](#2-tổng-quan-hệ-thống)
3. [Kiến trúc chức năng](#3-kiến-trúc-chức-năng)
4. [Kiến trúc vật lý](#4-kiến-trúc-vật-lý)
5. [Kiến trúc phần mềm](#5-kiến-trúc-phần-mềm)
6. [Kiến trúc giao diện](#6-kiến-trúc-giao-diện)
7. [Chế độ vận hành & Máy trạng thái](#7-chế-độ-vận-hành--máy-trạng-thái)
8. [Kiến trúc an toàn](#8-kiến-trúc-an-toàn)
9. [Ngân sách thời gian & Hiệu năng](#9-ngân-sách-thời-gian--hiệu-năng)
10. [Ngân sách công suất & Nhiệt](#10-ngân-sách-công-suất--nhiệt)
11. [Độ tin cậy & Bảo trì](#11-độ-tin-cậy--bảo-trì)
12. [Ma trận biến thể họ V-SMASH](#12-ma-trận-biến-thể-họ-v-smash)
13. [Tuân thủ tiêu chuẩn](#13-tuân-thủ-tiêu-chuẩn)
A. [Truy vết yêu cầu → kiến trúc](#a-truy-vết-yêu-cầu--kiến-trúc)
B. [Bảng viết tắt](#b-bảng-viết-tắt)

---

## 1. GIỚI THIỆU & PHẠM VI

### 1.1 Mục đích tài liệu

Tài liệu này mô tả kiến trúc tổng thể hệ thống V-SMASH-M (Micro AI Weapon Sight) — thiết bị hỗ trợ ngắm bắn AI dạng clip-on chống thiết bị bay không người lái cỡ nhỏ (C-UAS). Nội dung tích hợp ba tầng kiến trúc:

1. **Tầng vật lý** — cụm cơ khí, quang học, điện tử (từ Phase 2–4)
2. **Tầng phần mềm** — 4 module nhúng trên Jetson + BLE co-processor (từ SW-Phase 1–2)
3. **Tầng vận hành** — máy trạng thái giao chiến, tương tác người-máy (từ TNKCT + Orchestration)

### 1.2 Hệ thống tài liệu

```
TNKCT (Tính năng KC) ──→ Yêu cầu (78 req) ──→ Kiến trúc hệ thống (TÀI LIỆU NÀY)
                                                       │
Phase 2: Chức năng (P17) ─────────────────────────────→│
Phase 3: Embodiment (P22–P27) ────────────────────────→│
Phase 4: BOM, Verification, DCTRS (B1–B6) ───────────→│
SW: ICD + 4× SAD + Integration Test Plan ─────────────→│
```

---

## 2. TỔNG QUAN HỆ THỐNG

### 2.1 Chức năng thiết yếu (Essential Function)

> *"Biến đổi thông tin cảnh quan thị giác thành tham chiếu ngắm bắn không gian, cho phép xạ thủ bộ binh giao chiến hiệu quả với mục tiêu bay nhỏ, cơ động."*

### 2.2 Sơ đồ ngữ cảnh hệ thống

```
                         ┌──────────────────────────────┐
     Ánh sáng            │        V-SMASH-M             │         Chỉ thị ngắm
     môi trường ────────►│  ┌─────┐  ┌─────┐  ┌─────┐  │────────► (lead dot
     (cảnh drone)        │  │Sensor│→ │ SoC │→ │ OLED│  │          + confidence)
                         │  └─────┘  └──┬──┘  └─────┘  │
                         │              │               │
     Sốc giật lùi ◄────►│  ┌──────────┴──────────┐    │         BLE (tùy chọn)
     (10.000G)           │  │  Kẹp ray Picatinny  │    │────────► IRONMESH
                         │  └─────────────────────┘    │          gateway
                         │              │               │
     Pin 21700 ─────────►│  ┌───────┐  ┌──────────┐   │
                         │  │Battery│→ │Power Reg. │   │
                         │  └───────┘  └──────────┘   │
                         └──────────────────────────────┘
                                        │
                                        ▼
                              XẠ THỦ (quyết định
                              khai hỏa — MANUAL)
```

**Ranh giới hệ thống:** V-SMASH-M KHÔNG kết nối điện với cò súng. Mọi quyết định khai hỏa thuộc về xạ thủ.

### 2.3 Thông số hiệu năng chủ yếu

| Thông số | Chỉ tiêu | Req ID |
|----------|----------|--------|
| Tầm phát hiện (ban ngày, sải cánh ≥30 cm) | ≥200 m | VM-S01 |
| Độ chính xác chỉ thị ngắm | ≤1,0 mrad @ 150 m | VM-S06 |
| Độ trễ toàn tuyến | ≤150 ms | VM-S02 |
| Tần suất cập nhật | ≥30 Hz | VM-S03 |
| Khối lượng (kể cả pin) | ≤0,50 kg | VM-G02 |
| Kích thước (D×R×C) | ≤120 × 50 × 60 mm | VM-G01 |
| Thời gian sử dụng (25°C) | ≥8 giờ | VM-E01 |
| Bật nguồn → sẵn sàng | ≤3 giây | VM-P04 |
| Chịu sốc giật lùi | ≥10.000 G | VM-F01 |
| Chống nước / bụi | IP67 | VM-O05 |
| Giá thành sản xuất | ≤$500 (mục tiêu $200) | VM-C01 |

---

## 3. KIẾN TRÚC CHỨC NĂNG

### 3.1 Cấu trúc chức năng (Function Structure — P17)

**7 chức năng chính + 3 chức năng hỗ trợ:**

| # | Chức năng | Mô tả | Feeds |
|---|-----------|-------|-------|
| SF1 | Thu nhận cảnh vật | Chuyển đổi ánh sáng → dữ liệu ảnh số | → SF2 |
| SF2 | Phát hiện vật thể bay | Xác định vùng quan tâm chứa mục tiêu di động | → SF3 |
| SF3 | Phân loại loại mục tiêu | Drone cánh quạt / cánh cố định / chim / không xác định | → SF4 |
| SF4 | Cổng tin cậy (confidence gate) | Chặn chỉ thị ngắm khi confidence <70% **[SAFETY-CRITICAL: VM-Y03]** | → SF5/SF6 |
| SF5 | Tính toán đạn đạo (ballistic lead) | Góc ngắm bù = f(vận tốc mục tiêu, đạn đạo, cự ly ước tính) | → SF6 |
| SF6 | Hiển thị tham chiếu ngắm | Lead dot + mức tin cậy + trạng thái trên OLED | → Xạ thủ |
| SF7 | Lưu trữ & truyền dữ liệu | Ghi log giao chiến, truyền BLE đến IRONMESH (tùy chọn) | → Bên ngoài |
| SFS1 | Điều tiết năng lượng | Chuyển đổi DC, quản lý nhiệt, chỉ thị pin | Tất cả SF |
| SFS2 | Bảo vệ bên trong | IP67, chịu sốc, chịu nhiệt | Tất cả SF |
| SFS3 | Giao tiếp vũ khí | Kẹp Picatinny, duy trì căn chỉnh quang dưới giật lùi | SF1, SF6 |

### 3.2 Sơ đồ luồng tín hiệu

```
[Ánh sáng môi trường]
        │
        ▼
  SF1: Thu nhận cảnh ──── SFS3: Giao tiếp vũ khí (giữ căn chỉnh quang)
        │
        ▼
  SF2: Phát hiện mục tiêu
        │  (bounding box + tracks + angular size)
        ▼
  SF3: Phân loại mục tiêu
        │  (class + confidence + physical size)
        ▼
  SF4: Cổng tin cậy ─────── [SAFETY INTERLOCK: VM-Y03]
        │          │
   (≥70%)    (<70%: CHẶN lead)
        ▼          ▼
  SF5: Tính đạn đạo    SF6: Hiển thị trạng thái
        │                    (ĐỎ, không dot)
        ├── Bounds check
        │   (>5°/frame jump
        │    → "COMPUTE FAULT")
        ▼
  SF6: Hiển thị lead dot
        │       │
        ▼       ▼
  SF7: Lưu log  [XẠ THỦ: tự quyết định khai hỏa]
        │
        ▼
  [BLE → IRONMESH (tùy chọn)]

═══ Xuyên suốt ═══
  SFS1: Pin 21700 → Regulator → DC rails (5V/3.3V/1.8V)
  SFS2: Vỏ IP67, chịu sốc, đường dẫn nhiệt
```

### 3.3 Ma trận phân bổ chức năng → cụm vật lý

| Chức năng | SA-01 Sensor | SA-02 Compute | SA-03 Display | SA-04 PCB | SA-05 Housing | SA-06 Battery |
|-----------|:---:|:---:|:---:|:---:|:---:|:---:|
| SF1 Capture | **●** | | | | | |
| SF2 Detect | | **●** | | | | |
| SF3 Classify | | **●** | | | | |
| SF4 Gate | | **●** | | | | |
| SF5 Ballistics | | **●** | | | | |
| SF6 Display | | | **●** | | | |
| SF7 Data/BLE | | | | **●** | | |
| SFS1 Power | | | | **●** | | **●** |
| SFS2 Protect | | | | | **●** | |
| SFS3 Weapon IF | | | | | **●** | |

---

## 4. KIẾN TRÚC VẬT LÝ

### 4.1 Phân rã cụm lắp ráp (Sub-Assembly Decomposition)

```
V-SMASH-M (≤500g, 120×50×60mm)
├── SA-01: Sensor Module (~35g, $28)
│   ├── CMOS global shutter sensor (Sony IMX series)
│   ├── Lens assembly (f/1.8, 12° FOV)
│   ├── IR-cut filter
│   └── Flex cable (MIPI CSI-2)
│
├── SA-02: Compute Module (~15g, $47)
│   ├── Jetson Orin Nano (6-core ARM A78, 8-core GPU)
│   ├── eMMC 32 GB
│   └── Thermal pad → heat spreader
│
├── SA-03: Display Module (~25g, $39)
│   ├── OLED micro-display (640×480, ≥1000 nits)
│   ├── Beam-splitter (BK7, 15×15×1.5mm)
│   ├── Relay lens
│   └── Exit window (polycarbonate, hardcoated)
│
├── SA-04: Main PCB (~30g, $25)
│   ├── Power regulation (boost 3.7V→5V + buck 3.7V→3.3V/1.8V)
│   ├── BLE module (nRF52840)
│   ├── USB-C port (charge + data)
│   ├── Power button
│   └── Connectors (CSI-2, SPI, UART, I2C)
│
├── SA-05: Housing Assembly (~200g, $17)
│   ├── Upper shell (PA6-GF30, injection molded)
│   ├── Lower shell (PA6-GF30)
│   ├── Optical bench insert (AA7075-T6, 5mm)
│   ├── Heat spreader (AA6061-T6, 2mm)
│   ├── Picatinny clamp (AA7075-T6 + MoS₂ lug)
│   ├── Battery door (PA6-GF30, over-center latch ≥5N)
│   ├── O-ring seals (IP67)
│   └── Fasteners (A2-70 SS + nylon isolating washers)
│
└── SA-06: Battery Pack (~70g, $9)
    ├── 21700 Li-ion cell (5000 mAh, 3.7V = 18.5 Wh)
    ├── Protection circuit (OVP/OCP/UVP)
    └── Spring contacts
```

### 4.2 Sơ đồ khối phần cứng

```
                    ┌──────────────────────────────────────────────┐
                    │              SA-05: HOUSING (IP67)            │
                    │                                              │
   ┌────────┐       │  ┌─────────┐  MIPI CSI-2  ┌──────────────┐  │
   │ SCENE  │──────►│  │ SA-01   │─────────────►│   SA-02       │  │
   │(light) │       │  │ Sensor  │              │   Compute     │  │
   └────────┘       │  │ Module  │              │   (Jetson     │  │
                    │  └─────────┘              │   Orin Nano)  │  │
                    │                           │               │  │
   ┌────────┐       │  ┌─────────┐  SPI (40MHz) │   AI+BAL+FW  │  │
   │ EYE    │◄──────│  │ SA-03   │◄─────────────│   threads     │  │
   │(oper.) │       │  │ Display │              └──────┬───────┘  │
   └────────┘       │  │ Module  │                     │          │
                    │  └─────────┘              ┌──────┴───────┐  │
                    │                           │   SA-04       │  │
   ┌────────┐       │  ┌─────────┐   SPI 8MHz   │   Main PCB    │  │
   │IRONMESH│◄─BLE──│  │ nRF52840│◄─────────────│   Power Reg.  │  │
   │gateway │       │  │ (on PCB)│              │   Connectors  │  │
   └────────┘       │  └─────────┘              └──────┬───────┘  │
                    │                                  │          │
   ┌────────┐       │  ┌─────────┐    3.0–4.2V DC     │          │
   │USB-C   │◄──────│  │ SA-06   │─────────────────────┘          │
   │charger │       │  │ Battery │                                │
   └────────┘       │  └─────────┘                                │
                    │                                              │
   ┌────────┐       │  ┌─────────────────────────────┐            │
   │WEAPON  │◄──────│  │ Picatinny Clamp (MIL-1913)  │            │
   │ rail   │       │  └─────────────────────────────┘            │
   └────────┘       └──────────────────────────────────────────────┘
```

### 4.3 Vật liệu chủ yếu

| Cụm | Vật liệu | Ứng suất chảy | Xử lý bề mặt | Nội địa |
|-----|----------|---------------|---------------|---------|
| Optical bench | AA7075-T6 (5 mm) | 503 MPa | Hard anodize MIL-A-8625 Type III ≥50μm | 60% |
| Picatinny clamp | AA7075-T6 + MoS₂ lug | 503 MPa | Hard anodize + dry film lube | 55% |
| Housing shells | PA6-GF30 (UV-stabilized) | 55 MPa (cond.) | Matte paint + pad print | 100% |
| Heat spreader | AA6061-T6 (2 mm) | 276 MPa | None (internal) | 100% |
| Beam-splitter | BK7 optical glass | — | MIL-C-675 coating | 30% |
| Fasteners | A2-70 SS (AISI 304) | 450 MPa | None (inherent) | 95% |

### 4.4 Tóm tắt BOM

| Cụm | Số chi tiết | Khối lượng | Chi phí | % Chi phí |
|-----|-------------|------------|---------|-----------|
| SA-01 Sensor | 6 | ~35 g | $28 | 13,9% |
| SA-02 Compute | 4 | ~15 g | $47 | 23,3% |
| SA-03 Display | 8 | ~25 g | $39 | 19,3% |
| SA-04 Main PCB | 14 | ~30 g | $25 | 12,4% |
| SA-05 Housing | 18 | ~200 g | $17 | 8,4% |
| SA-06 Battery | 5 | ~70 g | $9 | 4,5% |
| ACC + Assembly + Overhead | 16 | ~5 g | $37 | 18,3% |
| **Tổng** | **71** | **~380 g** | **$202** | 100% |

**Tỷ lệ nội địa hóa:** Baseline 50,6% theo giá trị (dưới mục tiêu 60%). Với mitigations M1–M4 (nội địa PCB passives, pin, quang học, FPC): đạt 62,6%. Chi tiết tại V-SMASH-M_Cost_Analysis_v1.0.md.

---

## 5. KIẾN TRÚC PHẦN MỀM

### 5.1 Kiến trúc 4-module + BLE co-processor

```
┌─────────────────────── Jetson Orin Nano (Linux) ────────────────────────┐
│                                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │   SW-FW      │  │   SW-AI      │  │   SW-BAL     │  │  SW-COM    │  │
│  │   Firmware    │  │   AI Pipeline│  │   Ballistics │  │  Comms     │  │
│  │              │  │              │  │              │  │            │  │
│  │  • HAL       │  │  • INFER     │  │  • Range est │  │  • SPI→nRF │  │
│  │  • FSM       │  │  • TRACK     │  │  • Kalman    │  │  • Logging │  │
│  │  • Power     │  │  • GATE      │  │  • LUT lead  │  │  • OTA     │  │
│  │  • Thermal   │  │  • COORD     │  │  • Bounds    │  │  • Diag    │  │
│  │  • Watchdog  │  │              │  │              │  │            │  │
│  │  • Boot      │  │              │  │              │  │            │  │
│  │              │  │              │  │              │  │            │  │
│  │ Safety: B    │  │ Safety: C    │  │ Safety: B    │  │ Safety: A  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
│                                                                         │
│  Synchronization: lock-free (atomics, double-buffer, SPSC queues)       │
│  No mutexes on real-time paths                                          │
└─────────────┬───────────────────────────────────────────────────────────┘
              │ SPI 8 MHz (CRC-16/CCITT)
              ▼
┌─────────────────────────────┐
│     nRF52840 (Zephyr RTOS)  │
│     BLE 5.0 + GATT service  │
│     OTA partition manager   │
│     Safety: A               │
└─────────────────────────────┘
```

### 5.2 Mô hình luồng (Thread Model)

| Luồng | Tên | Ưu tiên | Chu kỳ | WCET | Nhiệm vụ |
|--------|-----|---------|--------|------|-----------|
| T1 | `fw_sensor_thread` | 90 (FIFO) | 33 ms (30 Hz) | ≤6 ms | Capture frame, swap double-buffer, trigger AI |
| T2 | `fw_display_thread` | 85 (FIFO) | 16.7 ms (60 Hz) | ≤4 ms | Render overlay → SPI DMA → OLED |
| T3 | `fw_monitor_thread` | 80 (FIFO) | 100 ms (10 Hz) | ≤2 ms | FSM, power, thermal, watchdog scan |
| T4 | `fw_safe_isr` | HW IRQ | Aperiodic | ≤100 µs | Power-fail → blank display |
| T5 | `fw_background_thread` | 20 (OTHER) | Event-driven | — | Diagnostics, logging |

**AI & BAL thực thi đồng bộ trong pipeline T1:**

```
T1 captures frame (≤5 ms)
  → AI-INFER: YOLOv8-nano inference (≤80 ms)
  → AI-GATE: confidence check (<1 ms)
  → bal_compute(): Kalman + LUT (≤2 ms)
  → overlay assembly → SPSC queue → T2 render
```

### 5.3 Đồng bộ hóa (Lock-Free Primitives)

| Tài nguyên | Cơ chế | Producer | Consumer | Ghi chú |
|-------------|--------|----------|----------|---------|
| `fsm_state` | `atomic<uint8_t>` | T3 | T1, T2, T5, API | Single-writer |
| `thermal_state` | `atomic<uint8_t>` | T3 | API readers | Single-writer |
| `frame_buffer` | Double buffer (ping-pong) | T1 | SW-AI | Zero-copy, atomic swap |
| `overlay_slot` | SPSC queue (depth 2) | AI-COORD | T2 | Latest-wins |
| `engagement_queue` | SPSC queue | AI-COORD | T-COM | Ordered, never drops |
| `wdg_table[4]` | `atomic<uint64_t>` per slot | Modules | T3 | Timestamp check |

### 5.4 Kiểu dữ liệu chia sẻ (từ ICD)

| Struct | Kích thước | Mục đích | Safety |
|--------|------------|----------|--------|
| `frame_buffer_t` | 32 B (+ 3.1 MB pixel) | Sensor → AI | B |
| `ai_output_t` | 48 B packed | Gated detection → BAL | C→B |
| `ai_frame_output_t` | 492 B packed | Mảng detection (max 10) | C→B |
| `bal_output_t` | 36 B packed | Lead solution → Coordinator | B |
| `overlay_t` | 270 B packed | Display overlay → FW-T2 | B |
| `engagement_log_record_t` | 64 B | Log event → eMMC + BLE | A |
| `ai_health_stats_t` | 44 B packed | Telemetry (60s publish) | A |
| `system_event_record_t` | 32 B | System events | A |

Tất cả struct sử dụng `__attribute__((packed))` với `_Static_assert` kiểm tra kích thước tại compile time.

### 5.5 Cấu hình biến thể V-M

```c
// hal_config.h — V-SMASH-M variant
#if defined(VARIANT_VM)
  #define HAL_PLATFORM_JETSON_ORIN_NANO
  #define HAL_MIPI_WIDTH         1920
  #define HAL_MIPI_HEIGHT        1080
  #define HAL_MIPI_FPS           30
  #define HAL_SPI_CLOCK_HZ       40000000   // OLED SPI
  // V-M: Không có fire gate, không CAN, không thermal sensor ngoài
#endif
// Build: cmake -DVARIANT=VM -DPLATFORM=jetson_orin_nano
```

---

## 6. KIẾN TRÚC GIAO DIỆN

### 6.1 Giao diện ngoài (External Interfaces)

| # | Giao diện | Kết nối | Loại | Tiêu chuẩn | Safety? |
|---|-----------|---------|------|------------|---------|
| EI-01 | Kẹp ray Picatinny | Thanh ray vũ khí | Cơ khí | MIL-STD-1913 (21,2 ± 0,1 mm) | — |
| EI-02 | Giao diện mắt xạ thủ | Mắt người (tư thế bắn) | Quang | Eye relief 25–75 mm, ≥1000 nits | — |
| EI-03 | Nút nguồn | Ngón tay (găng tay) | Cơ khí | ≤20 N, 1 nút duy nhất | — |
| EI-04 | Cổng USB-C | Sạc / laptop depot | Điện + dữ liệu | USB-C PD 5V/2A, USB 2.0 | — |
| EI-05 | BLE antenna (RF) | IRONMESH gateway | RF 2,4 GHz | BLE 5.0 | — |
| EI-06 | Cửa pin | Xạ thủ (thay pin) | Cơ khí | Tool-free, 1 tay, ≤60 s | — |
| EI-07 | Đầu vào ánh sáng | Cảnh (drone, bầu trời) | Quang | FOV 8–15°, f/≤2.0 | — |
| EI-08 | Sốc/rung | Giật lùi vũ khí | Cơ khí | 10.000 G, 0,5 ms | **[SAFETY]** |
| EI-09 | Môi trường RF (EMC) | Radio VHF/UHF ≤1 m | RF | 3 V/m 80 MHz–2,7 GHz | — |

### 6.2 Giao diện trong (Internal Interfaces)

| #     | Giao diện                 | Từ → Đến                           | Loại       | Thông số chính                     |
| ----- | ------------------------- | ---------------------------------- | ---------- | ---------------------------------- |
| II-01 | Dữ liệu cảm biến          | CMOS → SoC                         | MIPI CSI-2 | 2-lane, ≥30 fps                    |
| II-02 | Tín hiệu OLED             | SoC → OLED                         | SPI 40 MHz | ≥60 Hz refresh                     |
| II-03 | Liên kết BLE              | SoC → nRF52840                     | SPI 8 MHz  | CRC-16/CCITT framing               |
| II-04 | Phân phối nguồn           | Pin → Regulator → All              | Điện       | 3,0–4,2 V → 5V/3,3V/1,8V           |
| II-05 | Đường quang (cảnh→sensor) | Lens → CMOS                        | Quang      | 12° FOV, f/1.8, back focal ≤0,1 mm |
| II-06 | Đường quang (OLED→mắt)    | OLED → beam-splitter → Eye         | Quang      | RSS error ≤0,51 mrad (49% margin)  |
| II-07 | Đường nhiệt               | SoC → pad → heatsink → housing     | Nhiệt      | R_θ ≤15°C/W                        |
| II-08 | Gá PCB                    | PCB → housing bosses               | Cơ khí     | 4× M2.5 standoffs                  |
| II-09 | Gá sensor                 | CMOS+lens → optical bench          | Cơ khí     | ≤0,1 mm, H7/g6 register bore       |
| II-10 | Gá OLED                   | OLED+beam-splitter → optical bench | Cơ khí     | ≤0,2 mrad, UV-cure lock            |
| II-11 | Seal housing              | Top ↔ bottom shell                 | Cơ khí     | IP67 O-ring, 4× T10 Torx           |
| II-12 | Seal battery door         | Door ↔ housing                     | Cơ khí     | IP65 silicone gasket               |
| II-13 | Chống sốc SoC             | PCB/sensor → housing               | Cơ khí     | Potting hoặc elastomeric           |

### 6.3 Giao thức SPI (Jetson ↔ nRF52840)

```
Frame: [SOF 0x7E] [LEN] [CMD/EVT] [PAYLOAD ≤251 B] [CRC-16] [EOF 0x7F]
Clock: 8 MHz, Mode 0
Max frame: 257 bytes
IRQ: nRF → Jetson khi có dữ liệu (BLE event, heartbeat response)
```

| Lệnh | Mã | Mô tả |
|-------|----|-------|
| `SPI_SET_ADV_DATA` | 0x01 | Push GATT characteristic data |
| `SPI_SEND_NOTIFY` | 0x02 | Trigger BLE notification |
| `SPI_HEARTBEAT_PING` | 0x10 | Health check (5 s interval) |
| `SPI_HEARTBEAT_PONG` | 0x90 | nRF response |
| `SPI_OTA_*` | 0x03–0x05 | Firmware update commands |

### 6.4 BLE GATT Service

**Service UUID:** `56534D41-5348-4001-8000-00805F9B34FB`

| Characteristic | UUID Suffix | Thuộc tính | Kích thước | Mục đích |
|----------------|-------------|-----------|------------|---------|
| COM-META | 0x0001 | Read | 32 B | Device metadata |
| COM-DATA | 0x0002 | Read, Notify | 15 B | Last engagement (core fields) |
| COM-STATUS | 0x0003 | Read, Notify | 48 B | Health + FSM + battery |
| COM-DIAG | 0x0004 | Write | ≤244 B | Diagnostic command |
| COM-CONFIG | 0x0006 | Read, Write | 16 B | Confidence threshold, temps |

---

## 7. CHẾ ĐỘ VẬN HÀNH & MÁY TRẠNG THÁI

### 7.1 Máy trạng thái giao chiến (Engagement FSM)

V-SMASH-M sử dụng máy trạng thái 10 trạng thái (shared với họ V-SMASH) nhưng **không kích hoạt fire gate** — xạ thủ tự quyết định thời điểm khai hỏa.

```
              ┌─────────────────────────────────────────────────┐
              │                                                 │
   ┌──────┐  boot_done  ┌───────┐  target_detect  ┌──────────┐│
   │ INIT │────────────►│ READY │────────────────►│ DETECTED ││
   └──────┘             └───┬───┘◄────────────────└────┬─────┘│
                            │     target_lost           │      │
                            │                     shot_complete│
                            │                           ▼      │
                            │                    ┌───────────┐ │
                            │                    │ POST_SHOT │ │
                            │                    └─────┬─────┘ │
                            │                    timeout│      │
                            │◄──────────────────────────┘      │
              ┌─────────────┼──────────────────────────────────┘
    low_batt  │   tj_95     │   sensor_fail / ai_timeout / bal_fault
              ▼             ▼             ▼
   ┌──────────┐   ┌────────┐   ┌──────────────────┐
   │LOW_BATT  │   │OVERHEAT│   │ FAULT / SENSOR / │
   │"LOW BATT"│   │"THERMAL│   │ AI_FAULT         │
   └──────────┘   └────────┘   └──────────────────┘
              │             │             │
    batt_crit │   tj_100    │   (all fault entries)
              ▼             ▼             ▼
              ┌─────────────────────────────┐
              │         SHUTDOWN            │
              │    Display BLANKED          │
              │    Threads halted           │
              └─────────────────────────────┘
```

**Bất biến an toàn (Safety Invariant):** Mọi hành động vào trạng thái lỗi (a5–a9) gọi `suppress_combat_indicators()` nguyên tử. T2 kiểm tra cờ này trước khi render — đảm bảo không hiển thị lead dot cũ ngay cả khi FSM và display lệch pha.

### 7.2 Luồng tác chiến điển hình

```
THỜI GIAN    TRẠNG THÁI      XẠ THỦ              V-SMASH-M
─────────    ──────────      ──────              ──────────
t=0          INIT            Bật nguồn (1 nút)   Boot, "STARTING"
t≤3s         READY           Quan sát             OLED clear, LED xanh
t=x          DETECTED        Thấy lead dot        AI phát hiện drone
                             Kiểm tra màu:        Confidence gate:
                             XANH ≥90%            GREEN dot + lead
                             VÀNG 70-89%          YELLOW dot + lead
                             ĐỎ <70%              No dot (suppressed)
t=y          DETECTED        "Theo chấm mà bắn"   Cập nhật lead 30 Hz
t=z          POST_SHOT       Khai hỏa (manual)    Ghi log giao chiến
t=z+200ms    DETECTED/READY  Quan sát kết quả     Tái bám ≤200 ms
```

### 7.3 Điều tiết nhiệt (Thermal Throttling)

| Trạng thái | AI Frame Rate | Ngưỡng Tj | Hysteresis |
|-------------|---------------|-----------|-----------|
| `THERMAL_NORMAL` | 30 Hz | Tj < 85°C | — |
| `THERMAL_THROTTLE_15` | 15 Hz | Tj ≥ 85°C | Clear @ <80°C |
| `THERMAL_THROTTLE_10` | 10 Hz | Tj ≥ 90°C | Clear @ <85°C |
| `THERMAL_THROTTLE_5` | 5 Hz | Tj ≥ 95°C | Clear @ <90°C |
| `THERMAL_SHUTDOWN` | 0 Hz (halt) | Tj ≥ 100°C | Clear @ <80°C |

**Lưu ý thiết kế:** Tại nhiệt độ môi trường ≥45°C, firmware thermal throttle là **bắt buộc** (không tùy chọn). AI chỉ chạy 30 Hz khi T_ambient < 45°C (rủi ro NR-02 đã nâng lên HIGH).

### 7.4 Chế độ công suất

| Chế độ | Mô tả | Công suất | Kích hoạt |
|--------|-------|-----------|-----------|
| Active (AI 30 Hz) | Inference liên tục | ~2,5 W avg | FSM = READY/DETECTED |
| Active (throttled) | Inference giảm | ~1,7 W | Thermal throttle |
| Idle | Display on, no inference | ~0,9 W | Không có mục tiêu >30 s |
| Shutdown | Tắt hoàn toàn | 0 W | Tj ≥100°C hoặc SoC ≤5% |

---

## 8. KIẾN TRÚC AN TOÀN

### 8.1 Yêu cầu an toàn trọng yếu (Safety-Critical Requirements)

| ID | Yêu cầu | Phương pháp thực hiện | Xác nhận |
|----|---------|----------------------|----------|
| **VM-Y01** | Không kết nối điện V-M ↔ cò súng | Sơ đồ dây: 0 trace qua ranh giới vũ khí. Chỉ EI-01 (cơ khí) | I+T |
| **VM-Y02** | Mất điện = không chỉ thị tồn dư | T4 ISR blanks OLED ≤200 ms. OLED off-state = tối hoàn toàn | T |
| **VM-Y03** | Confidence <70% = chặn lead dot | SF4 gate logic. `dot_color_t = DOT_COLOR_NONE` khi <0,70 | D |
| **VM-Y04** | Tỷ lệ dương tính giả AI ≤2% | YOLOv8-nano @ confidence ≥0,90 → FPR ≤2%. Field validation | T |

### 8.2 Phân loại an toàn theo module

| Module | Safety Class | Lý do | Hậu quả lỗi |
|--------|-------------|-------|-------------|
| SW-FW | **B** | Điều khiển hiển thị giao chiến | Stale lead → xạ thủ ngắm sai |
| SW-AI | **C** | AI gate quyết định hiển thị combat indicators | Missed detection → mất hỗ trợ ngắm |
| SW-BAL | **B** | Tính toán lead trực tiếp ảnh hưởng điểm ngắm | Lead sai → bắn trượt |
| SW-COM | **A** | BLE + logging — không ảnh hưởng giao chiến | Mất dữ liệu telemetry |
| nRF52840 | **A** | BLE stack — hệ thống hoạt động đầy đủ khi không có BLE | Mất kết nối IRONMESH |

### 8.3 Kiến trúc HITL (Human-in-the-Loop)

```
PHÁT HIỆN (AI)  →  PHÂN LOẠI (AI)  →  GATE (AI)  →  BẮN (NGƯỜI)
   tự động           tự động          tự động        HOÀN TOÀN thủ công
                                         │
                                    Confidence:
                                    XANH ≥90% → lead dot
                                    VÀNG 70-89% → lead dot (cảnh báo)
                                    ĐỎ <70% → CHẶN dot

NGUYÊN TẮC: AI hỗ trợ nhận thức (perception). AI KHÔNG hỗ trợ quyết định (decision).
           Xạ thủ luôn là người quyết định: bắn / không bắn / mục tiêu nào.
```

**V-SMASH-M không có fire gate:** Khác với V-SMASH-L (có cửa sổ bắn tự động), V-M chỉ hiển thị lead dot — xạ thủ tự chọn thời điểm khai hỏa. Đây là ranh giới cứng giữa V-M và V-L.

### 8.4 Phát hiện lỗi & Phản hồi

| Lỗi | Phát hiện | Thời gian | Phản hồi | Hiển thị |
|-----|-----------|-----------|----------|----------|
| Sensor failure | MIPI CSI-2 timeout (100 ms) | ≤200 ms | FSM → SENSOR_FAULT | "SENSOR FAULT" |
| AI hang | Watchdog timeout (500 ms) | ≤710 ms (worst) | FSM → AI_FAULT | "AI FAULT" |
| BAL bounds violation | SF5 bounds check (>5°/frame) | <1 ms | Suppress indicator | "COMPUTE FAULT" |
| SPI nRF52840 lost | Heartbeat timeout (5 s) | ≤10 s | Flag COM_FAULT | "NO LINK" |
| Thermal exceed | T3 Tj monitor (10 Hz) | ≤200 ms | Throttle / shutdown | "THERMAL" |
| Low battery | T3 I2C read (10 Hz) | ≤200 ms | Warning / shutdown | "LOW BATT" |
| Power fail | T4 GPIO ISR | ≤100 µs | Blank display | (blank) |

### 8.5 Watchdog Cascade

```
Module gọi: fw_register_watchdog(MODULE_AI, 500 ms)
     ↓ (tối đa 4 module)
Module heartbeat: fw_watchdog_heartbeat(handle) mỗi ~30 ms
     ↓ (không heartbeat trong 500 ms)
T3 quét wdg_table[4] tại 10 Hz
     ↓ (phát hiện timeout)
fw_report_fault(FAULT_AI) → FSM → suppress indicators ≤100 ms
```

---

## 9. NGÂN SÁCH THỜI GIAN & HIỆU NĂNG

### 9.1 Pipeline chính (30 Hz loop)

```
┌───────────┬──────────┬──────────┬──────────┬───────────┐
│ Capture   │ AI Infer │ AI Gate  │ BAL Comp │ Render    │
│ T1: ≤5ms  │ ≤80ms    │ <1ms     │ ≤2ms     │ T2: ≤4ms  │
└───────────┴──────────┴──────────┴──────────┴───────────┘
|←──────────── ≤150 ms (VM-S02) ──────────────────────────|
|←── Frame budget: 33.3 ms @ 30 Hz ──→|
```

**Ghi chú:** AI inference (80 ms) vượt frame budget 33 ms — pipeline hoạt động kiểu pipelined: frame N được AI xử lý trong khi frame N+1 đang capture. Latency end-to-end = 1 capture + 1 inference + 1 render = ~90 ms typical, ≤150 ms worst case.

### 9.2 Timing an toàn trọng yếu

| Sự kiện | Yêu cầu | Cơ chế | Budget |
|---------|---------|--------|--------|
| FSM → suppress indicators | ≤100 ms | T3 scan (100 ms) + atomic flag | 100 ms |
| Power fail → display blank | ≤200 ms | T4 ISR (≤100 µs) + SPI command | 200 ms |
| AI watchdog → fault | ≤710 ms | 500 ms timeout + 100 ms scan + 10 ms FSM + 100 ms display | 710 ms |
| Bật nguồn → sẵn sàng | ≤3000 ms | HAL init + camera + model load | 3000 ms |
| Tái bám sau phát bắn | ≤200 ms | SF2 reacquire + SF5 recompute | 200 ms |

---

## 10. NGÂN SÁCH CÔNG SUẤT & NHIỆT

### 10.1 Cây công suất

```
SA-06: Battery 21700 (18,5 Wh @ 3,7V nominal, 3,0–4,2V)
  │
  └─► SA-04: Power Regulation
        ├─► Boost 3,7V→5V (η≈88%) ──► Jetson Orin Nano (~2,0 W load)
        ├─► Buck 3,7V→3,3V (η≈92%) ─► nRF52840 (~50 mW)
        │                              ├─► OLED driver (~30 mW)
        │                              └─► I2C peripherals (~10 mW)
        └─► Buck 3,7V→1,8V (η≈90%) ─► CMOS sensor (~150 mW)
```

**Ngân sách công suất (load-side vs battery-side):**

| Hạng mục | Load-side | Regulator η | Battery-side |
|----------|-----------|-------------|-------------|
| 5V rail (Jetson) | 2,00 W | 88% (boost) | 2,27 W |
| 3,3V rail (BLE+OLED+I2C) | 0,09 W | 92% (buck) | 0,10 W |
| 1,8V rail (CMOS) | 0,15 W | 90% (buck) | 0,17 W |
| **Tổng** | **2,24 W** | — | **2,54 W** |

```
Battery-side average: ~2,5 W (active, 30 Hz AI)  [QC-RUN30 CHK-01]
                      ~4,5 W peak (burst AI inference)
                      ~0,9 W idle (display on, no inference)
```

> **⚠ Lưu ý QC-RUN30:** Giá trị 2,5 W battery-side thay cho 2,3 W load-side ban đầu. Ảnh hưởng đến thời lượng pin — xem §10.2.

### 10.2 Thời lượng pin

| Điều kiện | Công suất avg (battery-side) | Pin (Wh) | Thời lượng |
|-----------|-------------------------------|----------|-----------|
| 25°C, active 30 Hz | 2,5 W | 18,5 | **7,4 giờ** ⚠ (VM-E01 ≥8h — thiếu 0,6h) |
| 25°C, duty cycle 50% (active/idle) | 1,7 W | 18,5 | 10,9 giờ |
| -10°C, active (capacity -30%) | 2,5 W | 13,0 | **5,2 giờ** ✅ (VM-E02 ≥5h) |
| 55°C, throttled 15 Hz | 1,7 W | 18,5 | 10,9 giờ |

> **⚠ VM-E01 deficit (QC-RUN30 CHK-09):** Battery-side 2,5 W × 8h = 20 Wh > 18,5 Wh capacity. Cần 1 trong các giải pháp:
> 1. Pin dung lượng lớn hơn (Samsung 50S: 5000 mAh, 18,5 Wh → Samsung 50E: 5000 mAh, 18,5 Wh — cùng cell, không giúp)
> 2. Jetson direct 3,7V input (bỏ boost, tiết kiệm ~12% → 2,2 W battery-side → 8,4h ✅) — **ưu tiên**
> 3. Aggressive idle duty cycling (AI sleep khi không có mục tiêu >10 s thay vì 30 s)

### 10.3 Chuỗi nhiệt trở

```
SoC junction (Tj)
  │  R_jc = 2,5 °C/W (Jetson datasheet)
  ▼
Thermal pad
  │  R_pad = 1,5 °C/W (0,5mm graphite)
  ▼
Heat spreader (AA6061-T6, 2mm)
  │  R_spread ≈ 0,5 °C/W
  ▼
Housing wall (PA6-GF30 + external fins)
  │  R_wall = 3,0 °C/W (with fins)
  ▼
Ambient air (natural convection)
  │  R_conv = 7,5 °C/W (with HD-04 fins)
  ▼
Total: R_θ_total ≈ 15,0 °C/W

At 2,5 W: ΔT = 37,5°C → Tj = T_amb + 37,5°C   [QC-RUN30 corrected]
  @ 25°C ambient: Tj = 62,5°C ✅ (well below 95°C)
  @ 45°C ambient: Tj = 82,5°C ✅ (below 85°C throttle, margin 2,5°C)
  @ 55°C ambient: Tj = 92,5°C ⚠ (between throttle 85°C and limit 95°C)
```

**Kết luận:** Tại T_ambient > 45°C, firmware throttle được kích hoạt tự động (margin chỉ 2,5°C tại 45°C). V-SMASH-M hoạt động 30 Hz toàn thời gian khi T_ambient < 45°C — bao phủ >95% thời gian vận hành tại Việt Nam. Nếu triển khai Jetson direct 3,7V (xem §10.2), ΔT giảm về 33°C, mở rộng ngưỡng throttle lên ~52°C.

---

## 11. ĐỘ TIN CẬY & BẢO TRÌ

### 11.1 Phân bổ MTBF

| Cụm | MTBF ước tính | Cơ sở | Ghi chú |
|-----|---------------|-------|---------|
| SA-01 Sensor (CMOS + lens) | 30.000 h | Component datasheet | Passive optics + sealed |
| SA-02 Compute (Jetson) | 50.000 h | NVIDIA reliability data | Derated for shock |
| SA-03 Display (OLED) | 20.000 h | OLED MTTF typical | Giới hạn tuổi thọ hệ thống |
| SA-04 Main PCB | 40.000 h | IPC-9592B prediction | Conformal coated |
| SA-06 Battery | 500 cycles | Li-ion cycle life | ~4.000 h @ 1 cycle/day |
| **Hệ thống** | **~1.800 h** | Series model | **≥1.500 h** ✅ (VM-R01) |

### 11.2 Khái niệm bảo trì 3 bậc

| Bậc | Người thực hiện | Vị trí | Công việc | Công cụ |
|-----|----------------|--------|-----------|---------|
| **L1** (Xạ thủ) | Xạ thủ bộ binh | Thực địa | Thay pin (≤60 s), lau kính, bật/tắt | Không |
| **L2** (Kỹ thuật viên) | Kỹ thuật viên đại đội | Đơn vị | Kiểm tra bore-sight, firmware update, thay cụm battery | Chìa T10, USB-C cable |
| **L3** (Kho) | Kỹ thuật viên kho | Depot | Thay sensor, OLED re-align, PCB swap, full test | PR-05/PR-10/PR-11 jigs |

### 11.3 Top 5 rủi ro FMEA

| ID | Failure Mode | S | O | D | RPN | Giảm thiểu |
|----|-------------|---|---|---|-----|-----------|
| F07 | Missed detection (AI) | 7 | 4 | 10 | 280 | Residual — inherent to AI detection. Offset by confidence gate |
| F03 | Lens-sensor misalignment | 9 | 3 | 7 | 189→72 | H7/g6 register bore + PR-05 jig + depot bore-sight check |
| F11 | OLED-sensor misalignment | 9 | 3 | 6 | 162→72 | PR-11 alignment jig + UV-cure lock + thermal cycling qual |
| F18 | Clamp shift (zero lost) | 9 | 2 | 5 | 90 | Loctite 243 + anti-seize + witness mark paint |
| F21 | Li-ion thermal runaway | 10 | 1 | 3 | 30 | Grade A cells only + protection circuit + venting |

---

## 12. MA TRẬN BIẾN THỂ HỌ V-SMASH

### 12.1 So sánh V-M và V-L

| Đặc tính | V-SMASH-M (Micro) | V-SMASH-L (LITE) |
|----------|-------------------|-------------------|
| **Nhiệm vụ** | Entry-level C-UAS | Infantry C-UAS |
| **Fire gate** | **KHÔNG** — xạ thủ bắn thủ công | **CÓ** — cửa sổ bắn AI |
| **Tầm phát hiện** | ≥200 m | ≥400 m |
| **Lead accuracy** | ≤1,0 mrad | ≤0,5 mrad |
| **Khối lượng** | ≤0,5 kg | ~1,2 kg |
| **Giá thành** | ~$200 | ~$3.000 |
| **FSM** | 10 states (no fire gate) | 10+ states (fire gate) |
| **Optics** | 12° FOV, f/1.8 | 8° FOV, f/1.4 |
| **Thermal sensor** | Không | Có (tùy chọn) |
| **Thị trường** | 5.000–10.000 units/yr | 100–500 units/yr |

### 12.2 Thành phần chia sẻ

| Thành phần | Chia sẻ V-M / V-L | Ghi chú |
|-----------|-------------------|---------|
| YOLOv8-nano AI core | ✅ Shared | Cùng model, cùng dataset 16K+ images |
| Kalman filter (angular) | ✅ Shared | Cùng thuật toán, khác tuning params |
| 3DOF ballistic model | ✅ Shared | Cùng LUT, khác phạm vi đạn |
| BLE stack (nRF52840) | ✅ Shared | Cùng Zephyr firmware |
| ICD struct definitions | ✅ Shared | Cùng `v_smash_sw_types.h` |
| FSM framework | ✅ Shared | V-M disable fire gate states |
| Housing design | ❌ Different | V-M nhỏ hơn, nhẹ hơn |
| Optics (lens + OLED) | ❌ Different | V-M FOV rộng hơn, f-number lớn hơn |
| Fire gate logic | ❌ V-L only | V-M không có — ranh giới cứng |

### 12.3 Vai trò chiến lược trong họ sản phẩm

```
         V-P (PRO)        ▲ Giá / Khả năng
         V-NV (Night)     │
         V-R (RWS)        │
         V-T (Trainer)    │
         V-X (Export)     │
         V-L (LITE)       │
    ►►►  V-M (MICRO)  ◄◄◄ │ ← VOLUME DRIVER (5K–10K units/yr)
    ─────────────────────────────────────────────► Số lượng
```

V-M là **anchor sản lượng** — mỗi V-M là 1 node IRONMESH, tạo dữ liệu thực chiến cải thiện AI toàn bộ họ sản phẩm.

---

## 13. TUÂN THỦ TIÊU CHUẨN

| Tiêu chuẩn | Áp dụng cho | Yêu cầu | Trạng thái |
|------------|-------------|---------|-----------|
| MIL-STD-1913 | SA-05 (clamp) | 21,2 ± 0,1 mm + recoil lug | Phase 4 kiểm tra |
| MIL-STD-810H Method 516.8 | All | Shock 10.000 G, 0,5 ms | Phase 4 test |
| MIL-STD-810H Method 514.8 | SA-05, SA-06 | Vibration random 10–500 Hz | Phase 4 test |
| MIL-STD-810H Method 501/502 | All | -10°C to +55°C | Phase 4 thermal |
| MIL-STD-810H Method 507.6 | All | 95% RH @ 40°C | Phase 4 humidity |
| MIL-A-8625 Type III | Optical bench, clamp | Hard anodize ≥50 μm | Incoming inspect |
| IEC 60529 | SA-05 | IP67 body, IP65 battery door | Phase 4 immersion |
| IEC 61000-4-3 | SA-04 | Radiated immunity 3 V/m | Phase 4 EMC lab |
| CISPR 32 Class B | SA-04 | Radiated emissions | Phase 4 EMC lab |
| IPC-CC-830 Class 2 | SA-04 | Conformal coating | Phase 4 inspect |
| MIL-C-675 | SA-03 (beam-splitter) | Coating adhesion | Incoming inspect |
| BLE 5.0 (Bluetooth SIG) | SA-04 (nRF52840) | Protocol compliance | Module certified |
| UN 38.3 | SA-06 (Li-ion) | Transport safety | Cell manufacturer cert |
| IEC 60825-1 | System | Laser safety Class 1 (V-M: no laser) | N/A |
| MIL-STD-882E | SW (AI safety) | System safety program | Analysis (Phase 3) |

---

## PHỤ LỤC A: TRUY VẾT YÊU CẦU → KIẾN TRÚC

| Req ID | Yêu cầu | Thành phần kiến trúc | Xác nhận |
|--------|---------|---------------------|----------|
| VM-S01 | Tầm phát hiện ≥200 m | SA-01 (CMOS + lens 12° FOV) + SA-02 (YOLOv8-nano) | T |
| VM-S02 | Latency ≤150 ms | Pipeline: T1(5ms) + AI(80ms) + BAL(2ms) + T2(4ms) | T |
| VM-S03 | Update ≥30 Hz | T1 @ 33 ms cycle | T |
| VM-S06 | Lead accuracy ≤1,0 mrad | II-06 RSS error budget (0,51 mrad, 49% margin) | T |
| VM-G01 | ≤120×50×60 mm | SA-05 housing envelope | I |
| VM-G02 | ≤0,50 kg | BOM total ~380 g (24% margin) | I |
| VM-E01 | ≥8 giờ @ 25°C | SA-06 (18,5 Wh) / 2,5 W = 7,4 h ⚠ — xem §10.2 mitigation | A+T |
| VM-P04 | Boot ≤3 s | FW boot sequence (HAL + camera + model load) | T |
| VM-F01 | ≥10.000 G | SA-05 (AA7075-T6 optical bench, SF ≥2.0) | T |
| VM-O05 | IP67 | SA-05 (O-ring seal + T10 Torx closure) | T |
| VM-Y01 | No trigger connection | System boundary: 0 electrical traces to weapon | I+T |
| VM-Y02 | No residual on power fail | T4 ISR → OLED blank ≤200 ms | T |
| VM-Y03 | Confidence <70% = no dot | SF4 gate logic (AI-GATE module) | D |
| VM-Y04 | FPR ≤2% | YOLOv8-nano @ 90% threshold | T |
| VM-C01 | ≤$500 unit cost | BOM $202 (60% below target) | A |
| VM-R01 | MTBF ≥1.500 h | Series model: ~1.800 h | A |
| VM-H04 | OLED ≥1.000 nits | SA-03 OLED spec | I |
| VM-A01 | Battery swap ≤60 s | SA-06 tool-free door (EI-06) | D |
| VM-S05 | BLE to IRONMESH | SA-04 nRF52840 + GATT service | D |
| VM-O10 | EMC immunity 3 V/m | SA-04 PCB design + shielding | T |

---

## PHỤ LỤC B: BẢNG VIẾT TẮT

| Viết tắt | Tiếng Anh | Tiếng Việt |
|----------|-----------|-----------|
| AI | Artificial Intelligence | Trí tuệ nhân tạo |
| BAL | Ballistics | Đạn đạo |
| BLE | Bluetooth Low Energy | — |
| BOM | Bill of Materials | Bảng kê vật tư |
| C-UAS | Counter-Unmanned Aerial Systems | Chống TBKNG |
| COM | Communications | Truyền thông |
| CMOS | Complementary Metal-Oxide Semiconductor | — |
| DMA | Direct Memory Access | — |
| EMC | Electromagnetic Compatibility | Tương thích điện từ |
| FMEA | Failure Mode & Effects Analysis | Phân tích chế độ & hậu quả lỗi |
| FOV | Field of View | Trường nhìn |
| FPR | False Positive Rate | Tỷ lệ dương tính giả |
| FSM | Finite State Machine | Máy trạng thái |
| FW | Firmware | Phần mềm nhúng |
| GATT | Generic Attribute Profile | — |
| HITL | Human-in-the-Loop | Người trong vòng lặp |
| ICD | Interface Control Document | Tài liệu kiểm soát giao diện |
| ISR | Interrupt Service Routine | — |
| LUT | Lookup Table | Bảng tra |
| MTBF | Mean Time Between Failures | Thời gian TB giữa lỗi |
| OLED | Organic Light-Emitting Diode | — |
| PCB | Printed Circuit Board | Mạch in |
| Pd | Probability of Detection | Xác suất phát hiện |
| ROE | Rules of Engagement | Quy tắc giao chiến |
| RPN | Risk Priority Number | Số ưu tiên rủi ro |
| SAD | Software Architecture Document | Tài liệu kiến trúc phần mềm |
| SoC | System on Chip | — |
| SPI | Serial Peripheral Interface | — |
| SPSC | Single-Producer Single-Consumer | — |
| SRS | Software Requirements Specification | — |
| TCVN | Tiêu chuẩn Việt Nam | Vietnamese National Standards |
| TNKCT | Tính năng kỹ chiến thuật | Tactical-Technical Performance Spec |
| WCET | Worst-Case Execution Time | Thời gian thực thi xấu nhất |

---

*Tài liệu được tạo từ 47 sản phẩm thiết kế Phase 0–4 của dự án V-SMASH-M.*
*Phiên bản: 1.0 | Ngày: 2026-03-02 | Phân loại: KHÔNG MẬT*
