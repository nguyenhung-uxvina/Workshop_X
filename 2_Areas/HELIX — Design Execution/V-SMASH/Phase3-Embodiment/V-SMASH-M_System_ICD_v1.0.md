---
project: V-SMASH-M
phase: 3
type: system-icd
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
classification: KHÔNG MẬT (UNCLASSIFIED)
scope: All HW-level interfaces (HW-HW, HW-SW, HW-environment, HW-operator)
sw_icd_ref: V-SMASH-SW-ICD_v1.0.md (SW-SW boundaries — separate document)
config_authority: System Engineering / KN Nguyen
inputs:
  - V-SMASH-M_System_Architecture_v1.0.md (§6 Interface Architecture)
  - V-SMASH-M_Embodiment_Task_Clarification_v1.0.md (P22)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (P23)
  - V-SMASH-M_Material_Selection_v1.0.md (P24)
  - V-SMASH-M_FMEA_v1.0.md (P26)
  - V-SMASH-SW-ICD_v1.0.md (SW-SW boundaries, cross-reference only)
---

# TÀI LIỆU KIỂM SOÁT GIAO DIỆN HỆ THỐNG V-SMASH-M
# V-SMASH-M System Interface Control Document

> **Mục đích:** Tài liệu kiểm soát cấu hình duy nhất (single source of truth) cho tất cả 22 giao diện phần cứng của V-SMASH-M: 9 giao diện ngoài (EI) và 13 giao diện trong (II). Bao gồm chi tiết mức pin, trình tự cấp nguồn, tiêu chí nghiệm thu sản xuất, và truy vết FMEA.
>
> **Phạm vi loại trừ:** Giao diện phần mềm-phần mềm (SW-SW) được quản lý bởi V-SMASH-SW-ICD_v1.0.md. Tài liệu này KHÔNG sao chép nội dung SW-ICD.
>
> **Quy tắc ưu tiên:** Nếu thông số giao diện trong tài liệu này khác với System Architecture §6, tài liệu này là chuẩn.

---

## MỤC LỤC

1. [Mục đích & Phạm vi](#1-mục-đích--phạm-vi)
2. [Kiến trúc giao diện](#2-kiến-trúc-giao-diện)
3. [Ranh giới vũ khí — Nhóm A](#3-ranh-giới-vũ-khí--nhóm-a)
4. [Ranh giới người dùng — Nhóm B](#4-ranh-giới-người-dùng--nhóm-b)
5. [Ranh giới RF/Dữ liệu — Nhóm C](#5-ranh-giới-rfdữ-liệu--nhóm-c)
6. [Giao diện điện nội bộ — Nhóm D](#6-giao-diện-điện-nội-bộ--nhóm-d)
7. [Đường quang học nội bộ — Nhóm E](#7-đường-quang-học-nội-bộ--nhóm-e)
8. [Cơ khí & nhiệt nội bộ — Nhóm F](#8-cơ-khí--nhiệt-nội-bộ--nhóm-f)
9. [Kiểm soát cấu hình](#9-kiểm-soát-cấu-hình)
A. [Bảng chân GPIO tổng hợp](#a-bảng-chân-gpio-tổng-hợp)
B. [Trình tự cấp nguồn chi tiết](#b-trình-tự-cấp-nguồn-chi-tiết)
C. [Bảng đầu nối & giắc cắm](#c-bảng-đầu-nối--giắc-cắm)
D. [Ma trận giao diện × FMEA](#d-ma-trận-giao-diện--fmea)

---

## 1. MỤC ĐÍCH & PHẠM VI

### 1.1 Mục đích tài liệu

Tài liệu này định nghĩa thông số kỹ thuật kiểm soát cấu hình cho **tất cả 22 giao diện phần cứng** của V-SMASH-M (Micro AI Weapon Sight). Nội dung bao gồm:

- **Chi tiết mức pin** — bảng chân GPIO, pinout đầu nối, mức logic
- **Trình tự cấp nguồn** — thứ tự bật/tắt các rail với dung sai thời gian
- **Tiêu chí nghiệm thu sản xuất** — pass/fail cho từng giao diện tại nhà máy
- **Truy vết FMEA** — mỗi giao diện ánh xạ đến mode hỏng và biện pháp giảm thiểu
- **Quy tắc thay đổi** — ai có quyền thay đổi, cần xác minh lại gì

### 1.2 Phạm vi

| Trong phạm vi | Ngoài phạm vi |
|---------------|---------------|
| 9 giao diện ngoài (EI-01 → EI-09) | Giao diện SW-SW (ICD-01 → ICD-09) |
| 13 giao diện trong (II-01 → II-13) | Giao thức SPI framing (→ SW-ICD §10) |
| HW-HW, HW-SW, HW-môi trường, HW-người | BLE GATT profile (→ SW-ICD §11) |
| Pin assignment, power sequencing | SW API (→ SW-ICD Appendix A/B) |

### 1.3 Hệ thống tài liệu

```
System Architecture (§6) ── tổng quan giao diện (bảng tóm tắt)
        │
        ▼
System ICD (TÀI LIỆU NÀY) ── chi tiết mức pin, tiêu chí nghiệm thu
        │                       (22 giao diện HW-level)
        │
        ├──► SW-ICD ── giao thức phần mềm (9 ranh giới SW-SW)
        │               framing, structs, API, stubs
        │
        └──► 4× SAD ── thiết kế chi tiết từng module SW
                        (FW, AI, BAL, COM)
```

**Quy tắc ưu tiên:**
- System ICD > System Architecture §6 (nếu khác nhau về thông số giao diện)
- System ICD governs GPIO state; SW-ICD governs software response
- Thay đổi tài liệu này yêu cầu System Engineering sign-off + tăng version

---

## 2. KIẾN TRÚC GIAO DIỆN

### 2.1 Sơ đồ tổng thể (22 giao diện)

```
              EI-07                                    EI-02
            (ánh sáng)                              (mắt xạ thủ)
                ↓                                       ↑
 ┌──────────────────────────────────────────────────────────────────┐
 │                        V-SMASH-M                                 │
 │                                                                  │
 │  II-05      ┌──────┐  II-01   ┌──────────┐  II-02  ┌──────┐    │
 │ (quang)────►│SA-01 │────────►│  SA-02    │────────►│SA-03 │    │
 │             │Sensor│  MIPI   │  Compute  │  SPI    │ OLED │    │
 │             └──────┘  CSI-2  │  (Jetson) │  40MHz  └──────┘    │
 │                              │           │    II-06 (quang)──────┤
 │                              │     ↕     │                       │
 │                              │  II-03    │         EI-09         │
 │                              │  SPI 8MHz │◄────── (EMC/RF) ─────┤
 │                              │     ↕     │                       │
 │             ┌────────────────┤  nRF52840 ├──── EI-05 (BLE) ─────┤
 │             │                └──────────┘                        │
 │  II-04      │  ┌──────────┐        │                             │
 │ (nguồn)     │  │  SA-04   │        │                             │
 │ ┌──────┐    │  │ Main PCB │  EI-04 (USB-C) ─────────────────────┤
 │ │SA-06 │────┤  │ Power Reg│                                      │
 │ │ Pin  │    │  └──────────┘  II-07 (nhiệt: SoC→housing)        │
 │ └──────┘    │        │                                           │
 │  II-12      │  II-08 (gá PCB)   II-09 (gá sensor)               │
 │ (seal door) │  II-13 (cách sốc) II-10 (gá OLED)                 │
 │             │                                                    │
 │  EI-06 ─────┤  ┌────────────────────────────────────┐           │
 │ (cửa pin)   │  │ SA-05 Housing (II-11 seal)         │           │
 │             │  │    EI-01 (kẹp Picatinny) ──────────┤── RAY VŨ KHÍ
 │             │  │    EI-03 (nút nguồn) ──────────────┤── XẠ THỦ
 │             │  │    EI-08 (sốc 10.000G) ◄───────────┤── GIẬT LÙI
 │             │  └────────────────────────────────────┘           │
 └──────────────────────────────────────────────────────────────────┘
```

### 2.2 Bảng tổng hợp giao diện

| ID | Tên | Nhóm | Loại | An toàn | Phức tạp | FMEA | Mục |
|----|-----|------|------|---------|----------|------|-----|
| EI-01 | Kẹp ray Picatinny | A | Cơ khí | — | HIGH | F18, F19 | §3.1 |
| EI-02 | Giao diện mắt xạ thủ | B | Quang | — | MED | — | §4.2 |
| EI-03 | Nút nguồn | B | Cơ khí | — | COMPACT | — | §4.3 |
| EI-04 | Cổng USB-C | C | Điện+DL | — | HIGH | — | §5.1 |
| EI-05 | Ăng-ten BLE | C | RF | — | MED | — | §5.2 |
| EI-06 | Cửa pin | A | Cơ khí | — | MED | F21 | §3.2 |
| EI-07 | Đầu vào ánh sáng | B | Quang | — | HIGH | F07 | §4.1 |
| EI-08 | Sốc/rung vũ khí | A | Cơ khí | **[SAFETY]** | HIGH | F03,F11,F18,F19 | §3.3 |
| EI-09 | Môi trường RF (EMC) | C | RF | — | HIGH | — | §5.3 |
| II-01 | MIPI CSI-2 | D | Điện | — | FULL | F01 | §6.1 |
| II-02 | SPI OLED | D | Điện | — | FULL | — | §6.2 |
| II-03 | SPI BLE link | D | Điện | — | HIGH | — | §6.3 |
| II-04 | Phân phối nguồn | D | Điện | — | FULL | F12, F21 | §6.4 |
| II-05 | Quang: cảnh→sensor | E | Quang | — | FULL | F03 | §7.1 |
| II-06 | Quang: OLED→mắt | E | Quang | — | FULL | F08, F11 | §7.2 |
| II-07 | Đường nhiệt | F | Nhiệt | — | MED | F05, F15 | §8.1 |
| II-08 | Gá PCB | F | Cơ khí | — | COMPACT | — | §8.4 |
| II-09 | Gá sensor | F | Cơ khí | — | MED | F03, F19 | §8.2 |
| II-10 | Gá OLED | F | Cơ khí | — | MED | F11 | §8.3 |
| II-11 | Seal vỏ máy | F | Cơ khí | — | COMPACT | F16 | §8.5 |
| II-12 | Seal cửa pin | F | Cơ khí | — | COMPACT | — | §8.6 |
| II-13 | Cách ly sốc | F | Cơ khí | — | MED | F01 | §8.7 |

---

## 3. RANH GIỚI VŨ KHÍ — NHÓM A

*Giao diện thuộc SA-05 (housing), kết nối V-SMASH-M với hệ thống vũ khí.*

### 3.1 EI-01 — Kẹp ray Picatinny (Picatinny Rail Clamp)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Tiêu chuẩn | MIL-STD-1913 |
| Rãnh ray | 21,2 ± 0,1 mm |
| Vật liệu kẹp | AA7075-T6, hard anodize MIL-A-8625 Type III ≥50 µm |
| Lug chống xoay | MoS₂ lug engagement |
| Bu-lông khóa | M6, A2-70 SS, Loctite 243 |
| Mô-men xiết | 12 ± 2 Nm |
| Bạc lót chống mài mòn | Flanged SS bushing tại lỗ bu-lông (P23 IMP-06) |
| Cách ly điện hóa | Nylon isolating washers (P23 IMP-04) |
| Dấu chứng | Witness mark paint trên bu-lông sau xiết |
| FMEA | F18 (S=9, RPN=135→54), F19 (S=9, RPN=126→45) |

**Hình học mặt cắt:**

```
     ┌─────────────────────────────────┐
     │        SA-05 Housing             │
     │   ┌───────────────────────┐     │
     │   │   Optical bench (HD-01)│     │
     │   │   AA7075-T6, 5mm      │     │
     │   └───────────────────────┘     │
     │          ↕ shock load path       │
     │   ┌───────────┐                  │
     │   │ Anti-rot.  │  ← MoS₂ lug    │
     │   │   lug      │                 │
     ├───┴───────────┴──────────────────┤
     │ ╔══════════════════════╗        │ ← 21,2 ± 0,1 mm slot
     │ ║    Picatinny rail    ║        │
     │ ╚══════════════════════╝        │
     │         ↑                        │
     │    M6 cross-bolt + Loctite 243   │
     │    [nylon washer] [SS bushing]   │
     └─────────────────────────────────┘
```

**Đường truyền lực sốc:** Rail → cross-bolt → housing body → optical bench → sensor mount (II-09) / OLED mount (II-10). Bu-lông M6 là nút thắt — loosening mất zero quang.

**Nghiệm thu sản xuất:**

| Hạng mục | Phương pháp | Chấp nhận |
|----------|-------------|-----------|
| Mô-men xiết | Torque wrench, recorded | 12 ± 2 Nm |
| Anti-seize | Visual check thread exit | Present |
| Witness mark | Visual check bolt head | Present, no rotation |
| MIL-STD-1913 gauge | Go/no-go slot gauge | Pass |
| Nylon washer | Visual inspection | Installed, no crack |

**Kiểm định:** T01 (500-round shock test), post-T01 alignment ≤0,5 mrad drift.

**Kiểm soát thay đổi:** Bất kỳ thay đổi hình học kẹp hoặc bu-lông → chạy lại T01 + đánh giá lại FMEA F18/F19.

---

### 3.2 EI-06 — Cửa pin (Battery Door)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| IP rating | IP65 (IEC 60529) |
| Cơ cấu chốt | Over-center latch, detent ≥5 N (P23 IMP-03) |
| Lực mở/đóng | ≤20 N (găng tay, VM-G05) |
| Thời gian thay pin | ≤60 s, 1 tay (VM-A01) |
| Gioăng | Silicone Shore A 40–50, compression 20–30% |
| Giữ khi sốc | Không mở trong T01 (500-round test) |
| FMEA | F21 (S=10, battery thermal runaway — venting direction) |

**Yêu cầu thông hơi (F21 mitigation):** Khí thoát từ pin thermal runaway phải thoát về phía ray (rail side), **không hướng về mặt xạ thủ** (cheek weld side). Khe thông hơi hoặc van xả áp tích hợp trong thiết kế cửa pin — Phase 4 chi tiết.

**Nghiệm thu sản xuất:**

| Hạng mục | Phương pháp | Chấp nhận |
|----------|-------------|-----------|
| Lực chốt | Force gauge tại 5 mẫu | ≥5 N detent |
| Lực mở | Force gauge, găng tay | ≤20 N |
| Thời gian thay | Operator test, găng tay | ≤60 s |
| Compression gioăng | Feeler gauge 4 góc | 20–30% |

**Kiểm định:** T05 (IP65 phun nước), T06 (IP65 sau sốc).

---

### 3.3 EI-08 — Sốc/Rung động vũ khí [SAFETY-INTERFACE]

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Gia tốc đỉnh | 10.000 G |
| Thời gian xung | 0,5 ms |
| Dạng sóng | Half-sine |
| Hướng | 6 hướng (±X, ±Y, ±Z) |
| Tiêu chuẩn thử | MIL-STD-810H Method 516.8 Procedure I |
| Rung ngẫu nhiên | 10–500 Hz theo MIL-STD-810H Method 514.8 |
| Phân loại | **SAFETY-INTERFACE** — ảnh hưởng trực tiếp đến độ chính xác ngắm |
| FMEA | F03 (S=9), F11 (S=9), F18 (S=9), F19 (S=9) |

**⚠ Đây là giao diện ngoài duy nhất ảnh hưởng an toàn.** 10.000G giật lùi là điều kiện vận hành bắt buộc — không giảm thiểu được tải, chỉ giảm thiểu được hậu quả.

**Chuỗi truyền sốc:**

```
EI-08: 10.000G từ ray vũ khí
  │
  ├──► EI-01 (kẹp) ──► SA-05 housing body
  │                         │
  │                    ┌────┴────┐
  │                    ↓         ↓
  │               II-09       II-10
  │            (gá sensor)  (gá OLED)
  │               ↓            ↓
  │          SA-01 CMOS    SA-03 OLED+BS
  │           (F03)         (F11)
  │
  ├──► II-08 (gá PCB) ──► SA-04 Main PCB
  │                         │
  │                    II-13 (cách ly sốc)
  │                    potting/elastomeric
  │
  └──► II-11 (seal) ──► O-ring compression check
```

**Yêu cầu thiết kế phái sinh (derived requirements) từ EI-08:**

| Giao diện nội | Yêu cầu phái sinh | Mục |
|---------------|-------------------|-----|
| II-09 (sensor mount) | H7/g6 register bore, AA7075-T6 optical bench SF ≥2,0 | §8.2 |
| II-10 (OLED mount) | UV-cure bond ≤0,2 mrad sau 500 rounds | §8.3 |
| II-13 (shock isolation) | Potting hoặc elastomeric cho SA-04 | §8.7 |
| II-08 (PCB mount) | M2.5 standoff + Loctite 243 | §8.4 |
| II-11 (housing seal) | O-ring compression maintained sau T01 | §8.5 |

**Nghiệm thu:** T01 (500-round shock test theo MIL-STD-810H), post-T01 bore-sight check, post-T01 IP67 re-test.

---

## 4. RANH GIỚI NGƯỜI DÙNG — NHÓM B

*Giao diện kết nối V-SMASH-M với xạ thủ và môi trường quang học.*

### 4.1 EI-07 — Đầu vào ánh sáng (Ambient Light Input)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| FOV hệ thống | 12° (thiết kế); phạm vi 8–15° (VM-S08) |
| F-number | f/1,8 (VM-S09) |
| Dải phổ | Visible 400–700 nm |
| Bộ lọc IR-cut | 50% cutoff ~700 nm, blocking OD ≥3 |
| Kính bảo vệ | Polycarbonate, hardcoat MIL-C-675 ref. |
| Kích thước sensor | 1/3" hoặc 1/2" (Phase 4 bởi lens selection) |
| FMEA | F07 (S=7, missed detection — scene quality) |

**Quang học lối vào:**

```
                     EI-07 boundary
                         │
Cảnh ──► [Kính bảo vệ] ──► [IR-cut filter] ──► [Lens assembly] ──► II-05
                                                  12° FOV, f/1.8
```

**Chống sương mù:** Tại -10°C → +55°C cycling, moisture có thể ngưng trên kính bảo vệ hoặc bên trong lens barrel. Giải pháp: (a) desiccant packet trong khoang quang, hoặc (b) hermetic seal lens barrel — Phase 4 quyết định.

**Nghiệm thu sản xuất:**

| Hạng mục | Phương pháp | Chấp nhận |
|----------|-------------|-----------|
| FOV | PR-05 jig, collimated target 5 m | 12° ± 0,5° |
| Image center | PR-05 jig, pixel check | ≤5 px offset |
| IR-cut | Spectrophotometer (sampling) | Cutoff 700 ± 20 nm |

---

### 4.2 EI-02 — Giao diện mắt xạ thủ (Operator Eye Interface)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Eye relief | 25–75 mm (VM-H05) |
| Độ sáng OLED | ≥1.000 nits @ 20°C (VM-H04) |
| See-through transmission | ≥60% (beam-splitter dependent) |
| Beam-splitter ratio | 50R/50T hoặc 70R/30T (Phase 4 decision) |
| Exit pupil | TBD (10–15 mm typical cho see-through sights) |
| OLED khi tắt nguồn | Transparent — không hình ảnh tồn dư (VM-Y02) |

**Yêu cầu ergonomic:** Eye relief tối thiểu 25 mm đảm bảo khoảng cách an toàn khi giật lùi (mắt xạ thủ không bị housing va chạm). Eye relief tối đa 75 mm cho phép sử dụng khi đeo kính bảo hộ.

**Nghiệm thu:** T09 (luminance meter ≥1.000 nits), T10 (field test — operator confirmation see-through clarity).

---

### 4.3 EI-03 — Nút nguồn (Power Button)

| Thông số | Giá trị |
|----------|---------|
| Lực nhấn | ≤20 N (VM-G05, găng tay 3 ngón) |
| Phản hồi xúc giác | Tactile click required |
| Debounce | ≥50 ms (firmware, xem SW-FW FSM) |
| Long-press tắt nguồn | ≥3 s (tránh tắt ngoài ý muốn) |
| Bảo vệ nhấn ngẫu nhiên | Button guard hoặc recessed design |
| Nhô ra housing | ≤2 mm (tránh vướng khi gắn ray) |

**Sơ đồ điện:**

```
Nút ──┤ (NO, normally open) ├──► GPIO PWR_BTN (pull-up)
         │                         │
         └── debounce cap 100nF ──┘
```

**Nghiệm thu:** Force gauge (≤20 N), tactile click test (subjective, 3/3 operators confirm).

---

## 5. RANH GIỚI RF/DỮ LIỆU — NHÓM C

*Giao diện điện/RF bên ngoài, thuộc SA-04 (Main PCB) và housing.*

### 5.1 EI-04 — Cổng USB-C (USB-C Port)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Chức năng | Sạc (PD 5V/2A) + Dữ liệu (USB 2.0 @ 480 Mbps) |
| Chế độ dữ liệu | CDC-ACM (virtual COM port), Mass Storage, DFU |
| Diagnostic access | L0 (physical cable only) — xem SW-ICD ICD-07 |
| Firmware update | L3 (authenticated DFU) — xem SW-ICD ICD-09 |
| ESD protection | TVS diode trên VBUS, D+/D-, CC lines |
| Nắp bảo vệ | Snap-fit rubber cover, IP67 khi đóng |
| IP khi mở | IP ratings lost — chấp nhận (không vận hành khi sạc) |

**Bảng chân connector USB-C (simplified — relevant pins only):**

| Pin | Signal | Hướng | Mô tả |
|-----|--------|-------|-------|
| A1/B12 | GND | — | Ground |
| A4/B9 | VBUS | In | 5V từ charger/host |
| A5 | CC1 | Bidir | Configuration channel |
| B8 | CC2 | Bidir | Configuration channel |
| A6/B7 | D+ | Bidir | USB 2.0 data + |
| A7/B6 | D- | Bidir | USB 2.0 data - |
| Shield | Shield | — | Chassis GND via 1MΩ + 4,7nF |

**Power Delivery negotiation:**

```
V-SMASH-M (UFP Sink):
  CC resistance: Rd = 5,1 kΩ (identify as sink)
  Request: 5V / 2A (10W)
  Accept minimum: 5V / 1,5A (7,5W)
  Reject: <5V (không hỗ trợ 3,3V PD profiles)
```

**Common-mode choke:** Required trên D+/D- pair → EMC compliance (EI-09, CISPR 32 Class B).

**Nghiệm thu:** T12 EOL (USB enumeration + charge current verification).

---

### 5.2 EI-05 — Ăng-ten BLE (BLE 5.0 Antenna)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Tần số | 2,4 GHz (BLE 5.0) |
| Loại antenna | Trace antenna hoặc chip antenna trên nRF52840 module |
| Công suất phát | ≤10 dBm |
| Độ nhạy thu | ≤-95 dBm |
| Keep-out zone | Không copper trong 3 mm quanh antenna trace trên PCB |
| Housing | PA6-GF30 (RF-transparent) — không cần aperture |

**Tương thích đồng vị trí:** BLE 2,4 GHz không bị nhiễu bởi radio quân sự VHF/UHF tại ≤1 m (yêu cầu EI-09). Xác minh tại T07.

**SW-ICD cross-reference:** BLE GATT profile, characteristics, pairing → xem V-SMASH-SW-ICD_v1.0.md §11. Tài liệu này **KHÔNG** sao chép nội dung GATT.

**Nghiệm thu:** T07 (BLE range test ≥30 m line-of-sight), T12 (BLE pairing test tại EOL).

---

### 5.3 EI-09 — Môi trường RF / EMC (RF Environment)

**Tóm tắt:**

| Thông số | Tiêu chuẩn | Giá trị |
|----------|-----------|---------|
| Radiated immunity | IEC 61000-4-3 Level 2 | 3 V/m, 80 MHz – 2,7 GHz |
| AM modulation | IEC 61000-4-3 | 80% AM, 1 kHz |
| Radiated emissions | CISPR 32 Class B | Limit per standard, 30 MHz – 1 GHz |
| Conducted emissions | CISPR 32 Class B | Limit per standard (DC power port) |

**Phân tích băng tần quan ngại:**

| Băng | Tần số | Nguồn quân sự | Đường ghép | Giảm thiểu |
|------|--------|----------------|------------|-------------|
| VHF | 30–300 MHz | Radio chiến thuật (PRC-type) | Dây nguồn, chassis | CM choke trên USB-C, ferrite trên DC |
| UHF | 300–1000 MHz | Radio UHF, GPS jammer | Antenna coupling | BLE band-pass, ground plane liên tục |
| L-band | 1,2–1,6 GHz | GPS, radar giám sát | Direct radiation | Ground plane PCB, housing |
| ISM | 2,4–2,5 GHz | WiFi, BLE (chính thiết bị) | Self-coupling | Antenna placement xa SoC high-speed traces |

**Yêu cầu thiết kế PCB (derived từ EI-09):**

1. Ground plane liên tục trên tất cả layers — không slot dài >5 mm
2. BLE antenna keep-out: ≥3 mm không copper
3. USB-C common-mode choke trên D+/D-
4. Ferrite bead trên tất cả power entry lines từ battery
5. High-speed traces (MIPI CSI-2) phải có guard traces + GND vias

**Lá chắn housing:** PA6-GF30 là phi kim → không shielding tự nhiên. Nếu EMC lab fail:
- Option A: Conductive coating mặt trong housing (add Phase 4)
- Option B: EMI shield clip (aluminum plate press-fit trên PCB)

**Nghiệm thu:** T07 (immunity, phòng EMC), T08 (emissions, phòng EMC) — sau Phase 4 prototype.

---

## 6. GIAO DIỆN ĐIỆN NỘI BỘ — NHÓM D

*4 giao diện tín hiệu và nguồn bên trong hệ thống. Đây là nhóm có mật độ kỹ thuật cao nhất — bao gồm pin-level detail và power sequencing.*

### 6.1 II-01 — MIPI CSI-2 (CMOS Sensor → SoC)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Giao thức | MIPI CSI-2, 2-lane |
| Tốc độ lane | 800 Mbps/lane (RAW10, 1920×1080 @ 30 fps) |
| Cáp | FPC (Flexible Printed Circuit), ≤30 mm |
| Đầu nối | ZIF (Zero Insertion Force) FFC 15-pin |
| I2C (register access) | 400 kHz, sensor-specific address |
| FMEA | F01 (S=7, sensor failure) |

**Bảng chân FFC 15-pin:**

| Pin | Signal | Tên MIPI | Hướng | Mô tả |
|-----|--------|----------|-------|-------|
| 1 | GND | — | — | Ground |
| 2 | CSI_D0- | DATA0N | Sensor→SoC | Data lane 0 negative |
| 3 | CSI_D0+ | DATA0P | Sensor→SoC | Data lane 0 positive |
| 4 | GND | — | — | Ground (shield) |
| 5 | CSI_D1- | DATA1N | Sensor→SoC | Data lane 1 negative |
| 6 | CSI_D1+ | DATA1P | Sensor→SoC | Data lane 1 positive |
| 7 | GND | — | — | Ground (shield) |
| 8 | CSI_CK- | CLKN | Sensor→SoC | Differential clock − |
| 9 | CSI_CK+ | CLKP | Sensor→SoC | Differential clock + |
| 10 | GND | — | — | Ground (shield) |
| 11 | CAM_PWDN | GPIO | SoC→Sensor | Power-down (active low) |
| 12 | CAM_RST | GPIO | SoC→Sensor | Reset (active low) |
| 13 | CAM_CLK | GPIO | SoC→Sensor | XCLK input 24 MHz |
| 14 | SDA | I2C | Bidir | Register access |
| 15 | SCL | I2C | SoC→Sensor | I2C clock 400 kHz |

**Giản đồ thời gian khởi động:**

```
t=0                  t+1ms            t+100ms           t+500ms
 │                    │                 │                  │
 VDD1V8 stable ──────►│                 │                  │
                      │                 │                  │
 PWDN deassert ──────►│                 │                  │
                      │                 │                  │
 RST deassert ────────┼────────────────►│                  │
                      │  (hold ≥100ms)  │                  │
                      │                 │                  │
 I2C register config ─┼─────────────────┼──► (sensor init) │
                      │                 │                  │
 First valid frame ───┼─────────────────┼──────────────────►│
                      │                 │   (≤500ms from boot)
```

**Xử lý lỗi:** MIPI ECC error → SoC CSI-2 controller báo lỗi → FW `fw_report_fault(FAULT_SENSOR)` → FSM SENSOR_FAULT → display "SENSOR FAULT". Timeout: ≤200 ms (xem System Architecture §8.4).

**Cross-ref SW-ICD:** Frame buffer struct `frame_buffer_t` (32 B header + 3,1 MB pixel) → SW-ICD ICD-01.

**Nghiệm thu:** T12 EOL (verify 30 fps streaming, check ECC errors over 1.000 frames < 0,1%).

---

### 6.2 II-02 — SPI OLED (SoC → OLED Micro-display)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Giao thức | SPI Mode 0 (CPOL=0, CPHA=0) |
| Clock | 40 MHz max |
| Refresh | ≥60 Hz (VM-S03) |
| Cáp | FPC, ≤20 mm |
| Đầu nối | ZIF FFC 8-pin |

**Bảng chân FFC 8-pin:**

| Pin | Signal | Hướng | Mô tả |
|-----|--------|-------|-------|
| 1 | VCC | In | OLED power 3,3 V |
| 2 | GND | — | Ground |
| 3 | SCLK | SoC→OLED | SPI clock (40 MHz max) |
| 4 | MOSI | SoC→OLED | Master out (pixel data) |
| 5 | CS | SoC→OLED | Chip select (active low) |
| 6 | DC | SoC→OLED | Data/Command (High=Data) |
| 7 | RST | SoC→OLED | Reset (active low, ≥10 µs pulse) |
| 8 | VCCIO | In | Logic supply (1,8 V hoặc 3,3 V) |

**Phân tích băng thông SPI:**

```
OLED resolution: 640 × 480 (typical micro-display)
Color depth options:
  RGB565 (16-bit): 640 × 480 × 16 = 4.915.200 bit/frame
    → At 40 MHz: 4.915.200 / 40.000.000 = 123 ms/frame → 8 Hz ❌

  OLED partial update (overlay only):
    Overlay region: ~200 × 100 pixels × 16 bit = 320.000 bit
    → At 40 MHz: 320.000 / 40.000.000 = 8 ms → 125 Hz ✅

  Full-frame via DMA + MIPI DSI (nếu OLED hỗ trợ):
    1-lane MIPI DSI @ 500 Mbps: 4.915.200 / 500.000.000 = 10 ms → 100 Hz ✅
```

> **⚠ Open Item OI-01:** SPI 40 MHz chỉ đủ cho partial update (overlay region). Full-frame RGB565 yêu cầu MIPI DSI hoặc parallel interface. Quyết định phụ thuộc vào OLED component selection trong Phase 4. Nếu OLED chỉ có SPI → overlay-only rendering strategy (T2 thread chỉ cập nhật vùng lead dot + status bar).

**Cross-ref SW-ICD:** Overlay struct `overlay_t` (270 B) → SW-ICD ICD-06. Coordinate transform và FSM suppression → SW-ICD ICD-06.

**Nghiệm thu:** T12 EOL (verify ≥60 Hz refresh, no flicker, overlay correctly positioned).

---

### 6.3 II-03 — SPI BLE Link (SoC → nRF52840)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| Giao thức | SPI Mode 0, 8 MHz |
| Framing | SOF 0x7E, LEN, CMD/EVT, Payload ≤251 B, CRC-16, EOF 0x7F |
| IRQ | nRF → SoC (rising edge) khi có event pending |
| Heartbeat | 5 s interval (SPI_HEARTBEAT_PING/PONG) |

**Bảng chân GPIO (SoC ↔ nRF52840):**

| Signal | SoC GPIO (placeholder) | nRF GPIO | Hướng | Active | Pull |
|--------|----------------------|----------|-------|--------|------|
| SPI_CLK | GPIO_B.12 | P0.08 | SoC→nRF | — | — |
| SPI_MOSI | GPIO_B.13 | P0.09 | SoC→nRF | — | — |
| SPI_MISO | GPIO_B.14 | P0.10 | nRF→SoC | — | — |
| SPI_CS | GPIO_B.15 | P0.11 | SoC→nRF | Low | Pull-up |
| nRF_IRQ | GPIO_C.01 | P0.12 | nRF→SoC | Rising | Pull-down |
| nRF_RST | GPIO_C.02 | RESET | SoC→nRF | Low | Pull-up |
| nRF_BOOT | GPIO_C.03 | P0.02 | SoC→nRF | High=DFU | Pull-down |

> **Ghi chú:** GPIO numbers là placeholder. Xác nhận từ Jetson Orin Nano carrier board design trong Phase 4.

**Xử lý IRQ:**

```
nRF asserts IRQ (P0.12 → rising edge)
  → SoC ISR hoặc poll tại 20 Hz tick
    → SoC issues SPI read (CS low → clock → read spi_frame_t)
      → Parse spi_evt_t theo SW-ICD ICD-08 protocol
        → Process: BLE event / heartbeat pong / OTA response
```

**Cross-ref SW-ICD:** Full framing protocol, command set, heartbeat, CRC → V-SMASH-SW-ICD_v1.0.md §10. Tài liệu này chỉ quản lý GPIO vật lý.

**Nghiệm thu:** T12 EOL (SPI link test + BLE pairing handshake).

---

### 6.4 II-04 — Phân phối nguồn (Power Distribution)

**Đây là mục có giá trị cao nhất trong toàn bộ ICD** — trình tự cấp nguồn (power sequencing) chưa được tài liệu nào mô tả ở mức chi tiết thời gian.

**Bảng rail nguồn:**

| Rail | Nguồn | Đích | V_nom | Dung sai | I_max | Regulator | Enable |
|------|-------|------|-------|----------|-------|-----------|--------|
| VBATT | SA-06 battery | PMIC input | 3,0–4,2 V | — | 1,5 A peak | Direct (qua protection) | Battery contact |
| VSYS (5V) | Boost converter | Jetson Orin Nano | 5,0 V | ±3% | 800 mA | Boost (η≈88%) | EN_5V |
| VDD3V3 | Buck converter | nRF52840, OLED, I2C | 3,3 V | ±2% | 500 mA | Buck (η≈92%) | EN_3V3 |
| VDD1V8 | Buck converter | CMOS sensor, OLED VCCIO | 1,8 V | ±2% | 300 mA | Buck (η≈90%) | EN_1V8 |

**Bảo vệ pin:**

| Chức năng | Thông số | Cơ chế |
|-----------|----------|--------|
| Overcurrent | ≥2,0 A | PMIC current limit + PTC fuse |
| Overvoltage | ≥4,35 V | PMIC OVP |
| Undervoltage | ≤2,5 V (cell cutoff) | PMIC UVLO |
| Short-circuit | <100 µs trip | PMIC + PTC |
| Reverse polarity | N/A (spring contact geometry prevents) | Mechanical |

**Trình tự cấp nguồn — BẬT (Boot Sequence):**

```
t=0           t+20ms        t+25ms       t+75ms        t+175ms       t+3000ms
 │              │              │            │              │              │
 [Button ≥50ms]                                                          │
 │                                                                       │
 VBATT ──────────────────────────────────────────────────────────────────►
 │                                                                       │
 EN_1V8 assert ►│                                                        │
                │                                                        │
 VDD1V8 stable ─┼──►│                                                    │
                │   │ (CMOS sensor + OLED VCCIO powered)                 │
                │   │                                                    │
 EN_3V3 assert ─┼───┼──►│                                                │
                │   │   │                                                │
 VDD3V3 stable ─┼───┼───┼──►│                                            │
                │   │   │   │ (nRF52840 boot: Zephyr init + BLE stack)   │
                │   │   │   │                                            │
 EN_5V assert ──┼───┼───┼───┼──►│                                        │
                │   │   │   │   │ (nRF52840 MUST be running before Jetson)
                │   │   │   │   │                                        │
 VSYS stable ───┼───┼───┼───┼───┼──►│                                    │
                │   │   │   │   │   │ Jetson boot: kernel + FW           │
                │   │   │   │   │   │                                    │
 FSM: INIT ─────┼───┼───┼───┼───┼───┼───────────────── READY ◄──────────┤
                │   │   │   │   │   │                          t ≤ 3 s   │
                                                             (VM-P04)
```

**Lý do thứ tự rail:**
1. **1,8V trước** — CMOS sensor cần nguồn để SoC probe qua I2C
2. **3,3V tiếp** — nRF52840 phải chạy trước Jetson (nRF đóng vai hardware watchdog trong lúc Jetson boot)
3. **5V cuối** — Jetson là load lớn nhất, inrush peak ~1A

**Trình tự cấp nguồn — TẮT (Shutdown Sequence):**

```
FSM → SHUTDOWN trigger
  │ (button ≥3s HOẶC shutdown command HOẶC battery critical)
  │
  ├──► [1] OLED blank (VM-Y02: TRƯỚC KHI mất nguồn)
  │         T4 ISR → SPI command → OLED all-black ≤100 µs
  │
  ├──► [2] Jetson save log → halt
  │         ≤200 ms (orderly shutdown)
  │
  ├──► [3] EN_5V deassert → VSYS off
  │
  ├──► [4] EN_3V3 deassert → VDD3V3 off (nRF52840 off)
  │
  └──► [5] EN_1V8 deassert → VDD1V8 off (sensor + OLED VCCIO off)
```

**⚠ VM-Y02 enforcement:** OLED PHẢI blank TRƯỚC KHI VSYS mất. Nếu power fail (battery rút đột ngột), T4 ISR phát hiện qua PWR_FAIL GPIO → blank OLED trong ≤100 µs → không hình ảnh tồn dư trên display.

**Inrush current:** Jetson boot peak ~1A qua boost converter. Battery ESR phải đủ thấp để VBATT không sụt dưới 3,0V (boost minimum input).

| Cell class | Capacity | ESR typical | ΔV @ 1A inrush | VBATT min (3,0V cutoff) |
|-----------|----------|-------------|----------------|------------------------|
| High-drain (40T) | 4000 mAh (14,8 Wh) | ~20 mΩ | 0,02 V | 2,98 V ⚠ borderline |
| High-capacity (50E) | 5000 mAh (18,5 Wh) | ~45 mΩ | 0,045 V | 2,955 V ❌ below 3,0V |

> **⚠ QC-RUN31 CHK-09:** Hệ thống yêu cầu 18,5 Wh → cell 5000 mAh class (50E/50S). ESR ~45 mΩ gây sụt áp 45 mV tại inrush. **Giải pháp:** (1) Nâng ngưỡng low-battery cutoff lên 3,1V (firmware), hoặc (2) Soft-start boost converter (ramp EN_5V qua RC delay), hoặc (3) Bulk capacitor ≥100 µF trên VBATT rail. Phase 4 verify trên prototype.

**Nghiệm thu:**

| Hạng mục | Phương pháp | Chấp nhận |
|----------|-------------|-----------|
| Rail voltages | Oscilloscope + multimeter tại test points | Trong dung sai |
| Boot sequence timing | Oscilloscope capture EN_1V8→EN_3V3→EN_5V | Thứ tự đúng |
| Power-fail OLED blank | Trigger PWR_FAIL GPIO, measure OLED SPI | ≤100 µs |
| Total boot time | Button press → FSM READY | ≤3 s (VM-P04) |

---

## 7. ĐƯỜNG QUANG HỌC NỘI BỘ — NHÓM E

*2 giao diện chính xác quang học. Ảnh hưởng trực tiếp đến VM-S06 (≤1,0 mrad lead accuracy). Chứa FMEA F03 (S=9) và F11 (S=9).*

### 7.1 II-05 — Đường quang cảnh → cảm biến (Scene-to-Sensor Optical Path)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| FOV | 12° |
| F-number | f/1,8 |
| Back focal distance (BFD) | TBD (Phase 4 bởi lens selection) |
| Flange-to-sensor alignment | ≤0,1 mm (axial) |
| Register bore fit | H7/g6 (P23 IMP-02) |
| Clearance range | 0,006–0,035 mm |
| Optical bench material | AA7075-T6, 5 mm |
| FMEA | F03 (S=9, RPN=189→lens-sensor misalignment sau sốc) |

**Bảng dung sai alignment:**

| Thông số | Nominal | Dung sai | Hậu quả vi phạm | Phương pháp kiểm |
|----------|---------|----------|-----------------|-------------------|
| Khoảng cách lens-sensor (axial) | BFD | ±0,05 mm | Mờ nét → giảm tầm phát hiện | PR-05 jig (dial indicator) |
| Vị trí lens (lateral X,Y) | 0 mm | ±0,1 mm | Lệch tâm ảnh → offset tham chiếu | PR-05 jig (5m target, ≤5px) |
| Nghiêng lens (θx, θy) | 0° | ±0,3 mrad | Sai góc tham chiếu ngắm | PR-05 jig (angular measurement) |
| Register bore | H7/g6 | Clearance 0,006–0,035 mm | Dịch chuyển ngang lens | H7/g6 gauge (incoming) |

**Đóng FMEA F03:** H7/g6 register bore trên optical bench AA7075-T6 là biện pháp chính. Fillet radii ≥0,5 mm tại bolt holes (P23 IMP-01) ngăn fatigue crack (FMEA F19). Sau 500 rounds: kiểm tra bore-sight tại L2 depot.

**Đóng góp vào error budget VM-S06:** II-05 đóng góp ≤0,3 mrad vào tổng budget 1,0 mrad. Nếu II-05 vượt dung sai → budget còn lại cho II-06, housing-to-rail, và ballistics bị chiếm.

**Nghiệm thu:** PR-05 jig — V-block fixture, dial indicator tại BFD shoulder, collimated target 5 m, chấp nhận ≤5 px center offset. **Mọi sản phẩm.**

---

### 7.2 II-06 — Đường quang OLED → mắt (OLED-to-Eye Optical Path)

**Tóm tắt:**

| Thông số | Giá trị |
|----------|---------|
| RSS error tổng | ≤0,51 mrad (49% margin vs 1,0 mrad) |
| Beam-splitter ratio | 50R/50T hoặc 70R/30T (Phase 4) |
| See-through transmission | ≥60% |
| OLED alignment | ≤0,2 mrad (factory bore-sight) |
| UV-cure adhesive | Norland NOA 61 hoặc tương đương |
| FMEA | F08 (S=8, wrong lead angle), F11 (S=9, OLED misalignment) |

**Error budget decomposition (VM-S06: ≤1,0 mrad lead accuracy):**

| # | Contributor | Budget (mrad) | Specification | Test | FMEA |
|---|------------|--------------|---------------|------|------|
| 1 | OLED pixel pitch alignment | ≤0,2 | Pixel pitch ÷ relay EFL | T13 (factory) | F11 |
| 2 | Beam-splitter angular alignment | ≤0,2 | PR-11 jig, UV-cure lock | T13 (factory) | F11 |
| 3 | Housing-to-rail alignment | ≤0,3 | Clamp geometry + optical bench datum | T01 post-shock | F03, F18 |
| 4 | AI ballistic computation | ≤0,3 | SW-BAL accuracy (→ SW-ICD ICD-05) | T10 (field) | F08 |
| **RSS** | **√(0,2²+0,2²+0,3²+0,3²)** | **= 0,51 mrad** | **≤1,0 mrad ✅ (49% margin)** | | |

**Quy trình UV-cure bond:**

| Bước | Thông số | Chấp nhận |
|------|----------|-----------|
| 1. Vị trí | PR-11 jig bore-sight alignment | ≤0,2 mrad |
| 2. Apply adhesive | NOA 61, bead 0,5 mm | No bubbles |
| 3. UV cure | ≥20 mW/cm², ≥60 s | Full hardness |
| 4. Post-cure inspect | Visual + bore-sight recheck | ≤0,2 mrad, no whitening |

**Ổn định nhiệt dài hạn:** UV-cure bond phải giữ ≤0,2 mrad qua -10°C → +55°C cycling (100 cycles). Phân tích thermal expansion mismatch tại bond line — **Phase 4 OI-06.**

**Đóng FMEA F11:** Factory bore-sight (PR-11) bắt lỗi ban đầu. In-service: KHÔNG tự phát hiện → depot bore-sight mỗi 500 rounds/6 tháng.

**Nghiệm thu:** T13 (PR-11 jig bore-sight, ≤0,2 mrad). **Mọi sản phẩm.** Repeat tại L2 depot mỗi 500 rounds.

---

## 8. CƠ KHÍ & NHIỆT NỘI BỘ — NHÓM F

*7 giao diện cơ khí/nhiệt nội bộ. Chi tiết scale theo complexity: II-07 + II-09 + II-10 = MEDIUM, II-13 = MEDIUM, II-08/II-11/II-12 = COMPACT.*

### 8.1 II-07 — Đường nhiệt SoC → vỏ máy (Thermal Path)

**Ngân sách nhiệt trở:**

| Segment | Component | R_θ (°C/W) | Ghi chú |
|---------|-----------|-----------|---------|
| Junction → case | SoC package | 2,5 | NVIDIA datasheet (fixed) |
| Case → thermal pad | Graphite pad 0,5 mm | 1,5 | Thiết kế |
| Pad → spreader | AA6061-T6 spreader 30×30×2 mm | 0,5 | Thiết kế |
| Spreader → housing wall | Bonded contact | 3,0 | Thiết kế |
| Housing → ambient | Natural convection + fins (HD-04) | 7,5 | Thiết kế |
| **Tổng** | | **15,0 °C/W** | **Target ≤15,0 °C/W** |

**Kiểm tra nhiệt tại các điều kiện:**

| T_ambient | P_dissipation | Tj | So với ngưỡng |
|-----------|-------------|-----|---------------|
| 25°C | 2,5 W | 62,5°C | ✅ <<95°C |
| 45°C | 2,5 W | 82,5°C | ✅ <85°C (margin 2,5°C) |
| 55°C | 2,5 W | 92,5°C | ⚠ Throttle active |

**Yêu cầu thermal pad:** Cover ≥90% diện tích SoC package, compression 10–20%, áp lực tiếp xúc TBD (Phase 4 torque spec cho spreader mount).

**Nghiệm thu:** 3 mẫu qualification — đo Tj vs T_ambient tại 2,5 W steady-state, verify R_θ_total ≤15,0 °C/W.

---

### 8.2 II-09 — Gá cảm biến (Sensor Mount)

| Thông số | Giá trị |
|----------|---------|
| Register bore | H7/g6 (clearance 0,006–0,035 mm) |
| Optical bench | AA7075-T6, 5 mm (P23 IMP-01) |
| Safety factor | SF ≥2,0 @ 10.000G |
| Fastener | 4× M2 (TBD), thread-locked Loctite 243 |
| Fillet radii | ≥0,5 mm tại bolt holes (F19 mitigation) |
| Datum reference | Housing datum A (rail interface face) |
| FMEA | F03 (S=9), F19 (S=9) |

**Nghiệm thu:** T01 post-shock bore-sight check (≤0,5 mrad drift).

---

### 8.3 II-10 — Gá OLED (OLED Mount)

| Thông số | Giá trị |
|----------|---------|
| Angular tolerance | ≤0,2 mrad (optical axis → sensor axis) |
| UV-cure adhesive | NOA 61 hoặc tương đương (xem II-06 §7.2) |
| Field adjustable? | **Không** — depot alignment nếu mount bị xáo trộn |
| FMEA | F11 (S=9) |

**Nghiệm thu:** PR-11 jig bore-sight (≤0,2 mrad). Repeat tại L2 depot mỗi 500 rounds.

---

### 8.4 II-08 — Gá PCB (PCB Mount) — COMPACT

| Thông số | Giá trị |
|----------|---------|
| Standoff | 4× M2,5 SS, 8 mm height |
| Thread lock | Loctite 243 |
| Torque | 0,4 ± 0,05 Nm |
| Vibration isolation | Không yêu cầu (dung sai vị trí PCB ±1 mm) |
| FMEA | Không failure-mode-critical |

---

### 8.5 II-11 — Seal vỏ máy (Housing Seal) — COMPACT

| Thông số | Giá trị |
|----------|---------|
| Tiêu chuẩn | IP67 (IEC 60529) |
| O-ring material | NBR (nitrile), durometer Shore A 70 |
| O-ring cross-section | TBD (Phase 4 — Parker handbook) |
| Groove compression | 20–25% |
| Fasteners | 4× T10 Torx M3, A2-70 SS, nylon isolating washers |
| Torque | 1,0 ± 0,1 Nm |
| Thay O-ring | Mỗi lần mở thứ 3 hoặc hàng năm |
| FMEA | F16 (S=7, O-ring degradation) |

**Nghiệm thu:** T05 (IP67 immersion 1m/30min), T06 (post-shock IP67 re-test).

---

### 8.6 II-12 — Seal cửa pin (Battery Door Seal) — COMPACT

| Thông số | Giá trị |
|----------|---------|
| Tiêu chuẩn | IP65 (IEC 60529) |
| Gasket material | Silicone, Shore A 40–50 |
| Compression | 20–30% (over-center latch đóng tới fixed stop) |
| Latch force | ≥5 N detent, ≤20 N open/close (VM-G05) |

**Nghiệm thu:** T05 (IP65 battery door check), T06 (post-shock IP65).

---

### 8.7 II-13 — Cách ly sốc (Shock Isolation)

**Hai phương án — Phase 4 quyết định (OI-05):**

| | Phương án A: Potting | Phương án B: Elastomeric mounts |
|---|---------------------|-------------------------------|
| Cơ chế | Đúc cứng (rigid encapsulation) | Gối đàn hồi (compliant) |
| 10.000G survival | Có (tested per MIL-STD-810H 516.8) | Có (với durometer phù hợp) |
| Khối lượng thêm | +15–20 g potting | +5 g mounts |
| Sửa chữa | Không (phá hủy để tháo) | Có hạn chế (thay mount) |
| FPC cable | Có thể gây stress tại termination | Không vấn đề |
| Trạng thái | **Chờ first article test — Phase 4** | |

**Potting spec (nếu chọn):** Dow Sylgard 170 hoặc tương đương, Shore A 60 sau cure, apply quanh PCB perimeter và component valleys (KHÔNG trên connectors), cure 24h @ 65°C.

**FMEA:** F01 (solder joint failure), F22 (contact spring fatigue) — II-13 là mitigation cho cả hai.

---

## 9. KIỂM SOÁT CẤU HÌNH

### 9.1 Quyền thay đổi giao diện

| Giao diện | Quyền thay đổi | Xác minh lại khi thay đổi |
|-----------|----------------|---------------------------|
| EI-01 (clamp geometry) | System Engineering sign-off | T01 (shock test toàn bộ) |
| EI-08 (shock spec) | **Không thay đổi** — imposed by weapon system | N/A |
| EI-09 (EMC spec) | **Không thay đổi** — imposed by IEC standard | N/A |
| II-01 (MIPI CSI-2 pinout) | PCB design + System Engineering | T12 EOL + MIPI compliance |
| II-02 (SPI OLED pinout) | PCB design + System Engineering | T12 EOL + refresh rate verify |
| II-03 (SPI BLE GPIO) | PCB design + SW-COM team | T12 EOL + BLE link test |
| II-04 (power rails/sequencing) | Power EE + System Engineering | T11 + T12 + boot sequence verify |
| II-05, II-06 (optical paths) | Optical engineer + System Engineering | T10 (lead accuracy) + T13 (bore-sight) |
| II-09, II-10 (optical mounts) | Mechanical EE + System Engineering | T13 (bore-sight) + T01 (post-shock) |
| II-07 (thermal path) | Thermal/Mechanical EE | Tj measurement tại 3 qualification units |
| II-11, II-12 (seals) | Mechanical EE | T05/T06 (IP test) |
| II-13 (shock isolation) | Mechanical/HW EE | T01 (shock test) |

### 9.2 Open Items (deferred to Phase 4)

| # | Open Item | Mô tả | Owner | Resolve by |
|---|-----------|-------|-------|-----------|
| OI-01 | SPI vs MIPI DSI cho II-02 | SPI 40 MHz chỉ đủ cho partial update. MIPI DSI preferred cho full-frame. Quyết định khi OLED component selected. | HW EE | Phase 4 component selection |
| OI-02 | II-02 connector pinout | Pinout phụ thuộc OLED component. Placeholder trong §6.2. | HW EE | Phase 4 |
| OI-03 | GPIO assignments cho II-03 | Placeholder GPIO numbers. Carrier board layout quyết định. | PCB design | Phase 4 |
| OI-04 | II-04 rail current limits | VSYS 800 mA budget giả định Jetson typical. Verify bằng bench measurement. | SW/HW EE | Phase 4 prototype |
| OI-05 | II-13 potting vs elastomeric | First article test quyết định. | Mechanical EE | Phase 4 first article |
| OI-06 | UV-cure bond thermal analysis | II-06 bond line thermal expansion mismatch tại -10°C → +55°C cycling. | Optical/Mech | Phase 4 analysis |

### 9.3 Quy tắc quản trị ICD

1. **System ICD > System Architecture §6** — nếu khác nhau về thông số giao diện, tài liệu này là chuẩn
2. **System ICD governs GPIO state; SW-ICD governs software response** — ví dụ: ICD định nghĩa PWR_FAIL là active-low; SW-ICD định nghĩa T4 ISR response
3. **Mọi thay đổi** yêu cầu System Engineering sign-off + tăng version number
4. **FMEA impact assessment** bắt buộc cho thay đổi giao diện có S ≥ 7

---

## PHỤ LỤC

### A. BẢNG CHÂN GPIO TỔNG HỢP

*Tất cả GPIO assignments — single source cho PCB layout. SoC pin numbers là PLACEHOLDER — xác nhận từ Jetson Orin Nano carrier board trong Phase 4.*

| Signal | SoC Pin (placeholder) | Hướng | Kết nối | Interface | Active | Pull |
|--------|----------------------|-------|---------|-----------|--------|------|
| CAM_PWDN | GPIO_A.01 | Out | SA-01 CMOS pin 11 | II-01 | Low=active | Pull-up |
| CAM_RST | GPIO_A.02 | Out | SA-01 CMOS pin 12 | II-01 | Low=active | Pull-up |
| CAM_CLK | GPIO_A.03 | Out | SA-01 CMOS pin 13 | II-01 | — (24 MHz) | — |
| CAM_SDA | I2C_A.SDA | Bidir | SA-01 CMOS pin 14 | II-01 | — | Pull-up 4,7 kΩ |
| CAM_SCL | I2C_A.SCL | Out | SA-01 CMOS pin 15 | II-01 | — | Pull-up 4,7 kΩ |
| OLED_SCLK | SPI_A.CLK | Out | SA-03 OLED pin 3 | II-02 | — (40 MHz) | — |
| OLED_MOSI | SPI_A.MOSI | Out | SA-03 OLED pin 4 | II-02 | — | — |
| OLED_CS | GPIO_B.01 | Out | SA-03 OLED pin 5 | II-02 | Low=active | Pull-up |
| OLED_DC | GPIO_B.02 | Out | SA-03 OLED pin 6 | II-02 | High=data | — |
| OLED_RST | GPIO_B.03 | Out | SA-03 OLED pin 7 | II-02 | Low=active | Pull-up |
| BLE_SPI_CLK | GPIO_B.12 | Out | nRF52840 P0.08 | II-03 | — (8 MHz) | — |
| BLE_SPI_MOSI | GPIO_B.13 | Out | nRF52840 P0.09 | II-03 | — | — |
| BLE_SPI_MISO | GPIO_B.14 | In | nRF52840 P0.10 | II-03 | — | — |
| BLE_SPI_CS | GPIO_B.15 | Out | nRF52840 P0.11 | II-03 | Low=active | Pull-up |
| nRF_IRQ | GPIO_C.01 | In (IRQ) | nRF52840 P0.12 | II-03 | Rising edge | Pull-down |
| nRF_RST | GPIO_C.02 | Out | nRF52840 RESET | II-03 | Low=active | Pull-up |
| nRF_BOOT | GPIO_C.03 | Out | nRF52840 P0.02 | II-03 | High=DFU | Pull-down |
| EN_1V8 | GPIO_D.01 | Out | Buck converter EN | II-04 | High=enable | Pull-down |
| EN_3V3 | GPIO_D.02 | Out | Buck converter EN | II-04 | High=enable | Pull-down |
| EN_5V | GPIO_D.03 | Out | Boost converter EN | II-04 | High=enable | Pull-down |
| VBATT_MON | ADC.01 | In (analog) | Battery voltage divider | II-04 | Analog | — |
| PWR_BTN | GPIO_E.01 | In | EI-03 power button (NO) | EI-03 | Low=pressed | Pull-up |
| PWR_FAIL | GPIO_E.02 | In (IRQ) | PMIC power-fail flag | II-04/T4 | Low=fail | Pull-up |

**Tổng:** 23 GPIO signals (5× II-01, 5× II-02, 7× II-03, 5× II-04, 1× EI-03).

---

### B. TRÌNH TỰ CẤP NGUỒN CHI TIẾT

| Sự kiện | Tham chiếu thời gian | Min (ms) | Typical (ms) | Max (ms) | Ghi chú |
|---------|----------------------|----------|-------------|----------|---------|
| Button press → EN_1V8 assert | t₀ | 10 | 20 | 50 | PMIC debounce |
| EN_1V8 → VDD1V8 stable | EN_1V8 + 0 | — | 5 | 10 | Buck response |
| VDD1V8 stable → EN_3V3 assert | VDD1V8 stable | 1 | 5 | 20 | Sequential enable |
| EN_3V3 → VDD3V3 stable | EN_3V3 + 0 | — | 5 | 10 | Buck response |
| VDD3V3 stable → nRF52840 ready | VDD3V3 stable | 10 | 50 | 100 | Zephyr boot |
| nRF52840 ready → EN_5V assert | nRF52840 ready | 0 | 5 | 20 | nRF phải chạy trước Jetson |
| EN_5V → VSYS stable | EN_5V + 0 | — | 15 | 30 | Boost response |
| VSYS stable → Jetson kernel ready | VSYS stable | 1000 | 2000 | 2800 | Linux boot |
| Jetson kernel → FW init → FSM READY | Jetson kernel | 50 | 100 | 200 | HAL + camera + model load |
| **Total button → READY** | **t₀** | — | **~2200** | **≤3000** | **VM-P04** |

**Shutdown timing:**

| Sự kiện | Min (ms) | Typical (ms) | Max (ms) |
|---------|----------|-------------|----------|
| FSM SHUTDOWN → OLED blank | 0 | 0,1 | 1 |
| OLED blank → Jetson halt | 50 | 100 | 200 |
| Jetson halt → EN_5V deassert | 0 | 10 | 50 |
| EN_5V off → EN_3V3 deassert | 10 | 50 | 100 |
| EN_3V3 off → EN_1V8 deassert | 10 | 50 | 100 |
| **Total shutdown** | — | **~210** | **≤500** |

---

### C. BẢNG ĐẦU NỐI & GIẮC CẮM

| Connector ID | Vị trí | Loại | Pins | Mating part | Interface | Spec chính |
|-------------|--------|------|------|-------------|-----------|-----------|
| CN1 | PCB → SA-01 | ZIF FFC | 15 | TBD Phase 4 | II-01 MIPI CSI-2 | Cáp ≤30 mm |
| CN2 | PCB → SA-03 | ZIF FFC | 8 | TBD Phase 4 | II-02 SPI OLED | Cáp ≤20 mm |
| CN3 | PCB (SA-04→nRF) | On-board | — | — (PCB traces) | II-03 SPI BLE | Direct routing |
| CN4 | Housing external | USB-C receptacle | 24 | USB-C standard | EI-04 | IP-rated khi cover đóng |
| CN5 | SA-06 → PCB | Battery spring contacts | 2 | — (spring + pad) | II-04 power | 4,2 V max, 1,5 A peak |

---

### D. MA TRẬN GIAO DIỆN × FMEA

*Chỉ failure modes S ≥ 7. Ánh xạ interface → mitigation specified trong ICD.*

| FMEA ID | S | RPN (trước/sau) | Interface ICD | Mitigation trong ICD | Mục |
|---------|---|-----------------|---------------|---------------------|-----|
| F01 | 7 | 21 / 21 | II-01, II-13 | FFC cable ≤30 mm (§6.1); potting/elastomeric (§8.7) | §6.1, §8.7 |
| F03 | 9 | 189 / — | II-05, II-09 | H7/g6 register bore (§7.1); AA7075-T6 optical bench SF ≥2,0 (§8.2) | §7.1, §8.2 |
| F04 | 7 | 28 / 28 | II-01, II-02 | Watchdog timeout 500 ms → SW-ICD ICD-02 | Cross-ref |
| F05 | 7 | 35 / 35 | II-07 | R_θ ≤15,0 °C/W; thermal pad ≥90% coverage (§8.1) | §8.1 |
| F07 | 7 | 280 / 210 | EI-07, II-01 | FOV 12°, f/1,8, IR-cut (§4.1); MIPI 30 fps (§6.1) | §4.1, §6.1 |
| F08 | 8 | 144 / 64 | II-06 | Error budget RSS 0,51 mrad; 4 contributors bounded (§7.2) | §7.2 |
| F11 | 9 | 162 / 72 | II-06, II-10 | UV-cure ≤0,2 mrad; PR-11 jig (§7.2); depot bore-sight (§8.3) | §7.2, §8.3 |
| F12 | 7 | 14 / 14 | II-04 | Protection circuit: OVP/UVP/OCP/SCP (§6.4) | §6.4 |
| F15 | 8 | 64 / 64 | II-07 | Hardware Tj sensor → dual protection (FW + silicon) (§8.1) | §8.1 |
| F16 | 7 | 147 / 70 | II-11 | NBR O-ring, groove compression 20–25%, Loctite 243 (§8.5) | §8.5 |
| F18 | 9 | 135 / 54 | EI-01 | M6 cross-bolt + Loctite 243 + SS bushing + witness mark (§3.1) | §3.1 |
| F19 | 9 | 126 / 45 | II-09, II-10 | Fillet radii ≥0,5 mm; AA7075-T6 SF ≥2,0 (§8.2) | §7.1, §8.2 |
| F21 | 10 | 80 / 80 | EI-06, II-04 | Battery protection circuit (§6.4); venting toward rail side (§3.2) | §3.2, §6.4 |

**Tổng:** 13 failure modes S ≥ 7 → tất cả có mitigation traceable trong ICD.
- 4× S=9 (F03, F11, F18, F19) — tất cả có structural/alignment spec
- 1× S=10 (F21) — 4-layer mitigation (cell quality + protection + venting + training)
- F07 (RPN=210 sau mitigation) — residual risk, inherent to monocular detection, accepted

---

*Kết thúc tài liệu — V-SMASH-M System ICD v1.0*
*Tổng: 22 giao diện (9 EI + 13 II), 6 nhóm (A–F), 6 Open Items, 13 FMEA traced.*
