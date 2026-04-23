---
project: V-SMASH-M
phase: 4
type: dinh-muc-ktkt
artifact: ĐMKTKT
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
inputs:
  - V-SMASH-M_B3_Process_Plan_v1.0.md (30 operations, 11 QC points)
  - V-SMASH-M_Cost_Estimate_v1.0.md (P35 — $202/unit)
  - V-SMASH-M_BOM_v1.0.md (Rev A — 71 parts)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (23 steps, 77 min/unit)
production_volume: 500 units/year (Year 1-2), 2,000/year (Year 3+)
unit_cost_basis: $202 factory gate (500 qty)
---

# ĐỊNH MỨC KINH TẾ KỸ THUẬT — V-SMASH-M
# Technical-Economic Norms — V-SMASH-M (Micro AI Weapon Sight)

> **Mục đích:** Xác định định mức tiêu hao nguyên vật liệu, lao động, thiết bị, năng lượng và hao hụt cho mỗi đơn vị sản phẩm V-SMASH-M. Phục vụ lập giá thành, kế hoạch sản xuất, và kiểm toán quốc phòng.
>
> **Purpose:** Define per-unit consumption norms for materials, labor, equipment, energy, and waste/scrap. Used for cost pricing, production planning, and defense procurement auditing.
>
> **Cơ sở dữ liệu:** B3 Quy trình Công nghệ SX v1.0, P35 Cost Estimate, BOM Rev A.
> **Sản lượng tính toán:** 500 đơn vị/năm (1 ca, 22 ngày/tháng).

---

## PHẦN I — THÔNG TIN CHUNG (General Information)

| Mục | Nội dung |
|-----|---------|
| **1.1 Tên sản phẩm** | V-SMASH-M — Kính ngắm vũ khí AI thu nhỏ (Micro AI Weapon Sight) |
| **1.2 Mã sản phẩm** | VM-0000 |
| **1.3 Phiên bản định mức** | 1.0 |
| **1.4 BOM tham chiếu** | V-SMASH-M_BOM_v1.0.md, Rev A, 2026-02-22 |
| **1.5 QTCN tham chiếu** | V-SMASH-M_B3_Process_Plan_v1.0.md |
| **1.6 Sản lượng cơ sở** | 500 đơn vị/năm (Year 1-2) |
| **1.7 Đơn vị tính** | 1 sản phẩm hoàn chỉnh (bao gồm phụ kiện ACC-01) |
| **1.8 Nhà máy sản xuất** | Workshop X (WX), Hà Nội [CẦN XÁC NHẬN] |
| **1.9 Ngày ban hành** | 2026-02-23 |
| **1.10 Người phê duyệt** | Kỹ sư định mức: _______ / Kế toán trưởng: _______ / Giám đốc KT: _______ |

---

## PHẦN II — ĐỊNH MỨC NGUYÊN VẬT LIỆU (Material Norms per Unit)

### 2.1 Nguyên vật liệu chính (Direct Materials)

#### Cụm SA-01: Cảm biến (Sensor Module) — $25.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 1 | Ống kính M12 (Objective lens) | VM-1101 | cái | 1 | 2% | 1.02 | 5.00 | 5.10 | NK |
| 2 | Barrel lens | VM-1102 | cái | 1 | 1% | 1.01 | 1.50 | 1.52 | NĐ |
| 3 | Vòng giữ (Retaining ring) | VM-1103 | cái | 1 | 1% | 1.01 | 0.50 | 0.51 | NĐ |
| 4 | Module cảm biến CMOS | VM-1200 | cái | 1 | 1% | 1.01 | 12.00 | 12.12 | NK |
| 5 | Cáp flex MIPI CSI-2 | VM-1201 | cái | 1 | 2% | 1.02 | 2.00 | 2.04 | NK |
| 6 | Vít M2 + washer nylon (bộ) | VM-1202-1204 | bộ | 1 | 2% | 1.02 | 0.50 | 0.51 | NĐ |
| 7 | Shim chọn (set 3 loại) | — | bộ | 1 | 5% | 1.05 | 0.30 | 0.32 | NĐ |
| | **Cộng SA-01** | | | | | | | **$22.12** | |

#### Cụm SA-02: Tính toán (Compute Module) — $45.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 8 | Jetson Orin Nano SoC | VM-2101 | cái | 1 | 1% | 1.01 | 35.00 | 35.35 | NK |
| 9 | Tấm dẫn nhiệt SoC (Thermal pad) | VM-2102 | tấm | 1 | 3% | 1.03 | 1.50 | 1.55 | NK |
| 10 | eMMC 32GB | VM-2103 | cái | 1 | 1% | 1.01 | 5.00 | 5.05 | NK |
| 11 | LPDDR4 4GB | VM-2104 | cái | 1 | 1% | 1.01 | 4.00 | 4.04 | NK |
| | **Cộng SA-02** | | | | | | | **$45.99** | |

#### Cụm SA-03: Hiển thị (Display Module) — $35.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 12 | Màn hình OLED micro-display | VM-3101 | cái | 1 | 2% | 1.02 | 15.00 | 15.30 | NK |
| 13 | Bộ chia tia BK7 (Beam-splitter) | VM-3102 | cái | 1 | 2% | 1.02 | 8.00 | 8.16 | NK |
| 14 | Thấu kính truyền (Relay lens) | VM-3103 | cái | 1 | 2% | 1.02 | 4.00 | 4.08 | NK |
| 15 | Cáp flex MIPI DSI | VM-3104 | cái | 1 | 2% | 1.02 | 2.00 | 2.04 | NK |
| 16 | Keo UV cure | VM-3105 | ml | 0.3 | 10% | 0.33 | 5.00/ml | 1.65 | NK |
| 17 | Bracket gá hiển thị (CNC) | VM-3106 | cái | 1 | 1% | 1.01 | 3.00 | 3.03 | NĐ |
| 18 | Vít M2 + washer display (bộ) | VM-3107-3108 | bộ | 1 | 2% | 1.02 | 0.50 | 0.51 | NĐ |
| | **Cộng SA-03** | | | | | | | **$34.77** | |

#### Cụm SA-04: PCB chính (Main PCB Assembly) — $20.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 19 | PCB trần 4 lớp (bare board) | VM-4101 | tấm | 1 | 3% | 1.03 | 3.50 | 3.61 | NĐ |
| 20 | Module BLE nRF52840 | VM-4102 | cái | 1 | 1% | 1.01 | 3.00 | 3.03 | NK |
| 21 | Connector USB-C | VM-4103 | cái | 1 | 1% | 1.01 | 0.50 | 0.51 | NK |
| 22 | IC nguồn, bảo vệ, ZIF, LED, nút nhấn, antenna, passive (~60 linh kiện) | VM-4104-4114 | bộ | 1 | 3% | 1.03 | 8.00 | 8.24 | NK |
| 23 | Conformal coating (acrylic) | VM-4110 | ml | 5 | 15% | 5.75 | 0.20/ml | 1.15 | NK |
| 24 | Kem hàn SAC305 | VM-4113 | g | 3 | 20% | 3.60 | 0.10/g | 0.36 | NK |
| | **Cộng SA-04** | | | | | | | **$16.90** | |

#### Cụm SA-05: Vỏ & Kết cấu (Housing Assembly) — $12.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 25 | Vỏ trên PA6-GF30 (Upper shell) | VM-5101 | cái | 1 | 2% | 1.02 | 1.80 | 1.84 | NĐ |
| 26 | Vỏ dưới PA6-GF30 (Lower shell) | VM-5201 | cái | 1 | 2% | 1.02 | 2.20 | 2.24 | NĐ |
| 27 | O-ring NBR 70A | VM-5202 | cái | 1 | 3% | 1.03 | 0.30 | 0.31 | NĐ |
| 28 | Insert đồng thau M2.5 (×4) | VM-5203 | cái | 4 | 2% | 4.08 | 0.10 | 0.41 | NĐ |
| 29 | Bench quang học AA7075-T6 (CNC + anodize) | VM-5301 | cái | 1 | 1% | 1.01 | 5.00 | 5.05 | HH |
| 30 | Vít M3 + washer nylon bench (bộ) | VM-5302-5303 | bộ | 1 | 2% | 1.02 | 0.80 | 0.82 | NĐ |
| 31 | Tản nhiệt AA6061-T6 (Heat spreader) | VM-5401 | cái | 1 | 1% | 1.01 | 1.00 | 1.01 | NĐ |
| 32 | Thermal pad (housing side) | VM-5402 | tấm | 1 | 3% | 1.03 | 0.80 | 0.82 | NK |
| 33 | Clamp Picatinny AA7075-T6 (CNC + anodize) | VM-5501 | cái | 1 | 1% | 1.01 | 3.00 | 3.03 | HH |
| 34 | MoS₂ dry film | VM-5502 | lần | 1 | 5% | 1.05 | 0.30 | 0.32 | NK |
| 35 | Phụ kiện clamp (cross-bolt, washer, latch) | VM-5503-5505 | bộ | 1 | 2% | 1.02 | 1.00 | 1.02 | NĐ |
| 36 | Nắp pin PA6-GF30 (Battery door) | VM-5601 | cái | 1 | 2% | 1.02 | 0.80 | 0.82 | NĐ |
| 37 | Gasket silicone + hinge pin | VM-5602-5603 | bộ | 1 | 3% | 1.03 | 0.40 | 0.41 | NĐ |
| 38 | Vít đóng vỏ T10 M4×12 + washer (×4) | VM-5701-5702 | bộ | 1 | 2% | 1.02 | 0.60 | 0.61 | NĐ |
| 39 | Standoff M2.5 + cap screw (×4) | VM-5801-5802 | bộ | 1 | 2% | 1.02 | 0.40 | 0.41 | NĐ |
| 39a | Mực/pad in đánh dấu bề mặt | VM-5102 | lần | 1 | 10% | 1.10 | 0.20 | 0.22 | NĐ |
| | **Cộng SA-05** | | | | | | | **$19.34** | |

> **Ghi chú (v1.1, cross-ref audit):** VM-5102 bổ sung — trước đây thiếu từ B6 mặc dù có trong B3 OP-270.

#### Cụm SA-06: Pin (Battery Pack) — $8.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 40 | Pin Li-ion 21700 (chính) | VM-6101 | cái | 1 | 1% | 1.01 | 4.00 | 4.04 | NK |
| 41 | Tiếp xúc pin BeCu (bộ) | VM-6102 | bộ | 1 | 2% | 1.02 | 1.00 | 1.02 | NK |
| 42 | Nhãn + sleeve pin | VM-6103-6104 | bộ | 1 | 3% | 1.03 | 0.30 | 0.31 | NĐ |
| 43 | Pin Li-ion 21700 dự phòng (ACC) | VM-6105 | cái | 1 | 1% | 1.01 | 4.00 | 4.04 | NK |
| | **Cộng SA-06** | | | | | | | **$9.41** | |

#### Phụ kiện ACC-01 & Đóng gói — $7.00

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Nguồn |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|-------|
| 44 | Cáp USB-C | VM-7101 | cái | 1 | 1% | 1.01 | 1.00 | 1.01 | NK |
| 45 | Khăn lau lens | VM-7102 | cái | 1 | 2% | 1.02 | 0.20 | 0.20 | NĐ |
| 46 | Chìa T10 Torx | VM-7103 | cái | 1 | 1% | 1.01 | 0.50 | 0.51 | NĐ |
| 47 | Hướng dẫn nhanh (in) | VM-7104 | tờ | 1 | 3% | 1.03 | 0.30 | 0.31 | NĐ |
| 48 | Túi đựng (pouch) | VM-7105 | cái | 1 | 2% | 1.02 | 1.00 | 1.02 | NĐ |
| 49 | Anti-seize (gói đơn) | VM-7106 | gói | 1 | 5% | 1.05 | 0.30 | 0.32 | NK |
| 50 | Bút sơn retouching | VM-7107 | cái | 1 | 3% | 1.03 | 0.50 | 0.52 | NK |
| 51 | Hộp đóng gói + foam insert | VM-8104-8105 | bộ | 1 | 2% | 1.02 | 1.50 | 1.53 | NĐ |
| 52 | Túi ESD + desiccant + QC sticker | VM-8106-8107 | bộ | 1 | 3% | 1.03 | 0.50 | 0.52 | HH |
| | **Cộng ACC + Đóng gói** | | | | | | | **$5.94** | |

### 2.2 Vật tư tiêu hao sản xuất (Process Consumables)

| STT | Vật tư | Mã BOM | ĐVT | SL/SP | Hao hụt (%) | SL kể cả HH | Đơn giá ($) | Thành tiền ($) | Ghi chú |
|-----|--------|--------|-----|-------|-------------|-------------|-------------|---------------|---------|
| 53 | Keo Loctite 243 | VM-8101 | ml | 0.5 | 15% | 0.575 | 0.40/ml | 0.23 | ~10 điểm bắt vít/SP |
| 54 | Anti-seize (sản xuất) | VM-8102 | g | 0.5 | 20% | 0.60 | 0.20/g | 0.12 | Cross-bolt M6 |
| 55 | Mỡ silicone O-ring | VM-8103 | g | 0.3 | 20% | 0.36 | 0.15/g | 0.05 | O-ring lube |
| 56 | Băng keo masking (conformal coat) | — | cm | 20 | 100% (dùng 1 lần) | 20 | 0.005/cm | 0.10 | Che connector, antenna |
| 57 | Cồn isopropyl (IPA) | — | ml | 5 | 30% | 6.5 | 0.01/ml | 0.07 | Lau thermal pad area |
| 58 | Găng tay nitrile | — | đôi | 2 | 100% (dùng 1 lần) | 2 | 0.05/đôi | 0.10 | Quang học + hóa chất |
| | **Cộng vật tư tiêu hao** | | | | | | | **$0.67** | |

### 2.3 Tổng hợp Định mức Nguyên vật liệu

| Hạng mục | Giá trị thực ($) | Hao hụt ($) | Tổng kể cả HH ($) |
|----------|-----------------|-------------|-------------------|
| SA-01: Cảm biến | 21.80 | 0.32 | **22.12** |
| SA-02: Tính toán | 45.50 | 0.49 | **45.99** |
| SA-03: Hiển thị | 34.30 | 0.47 | **34.77** |
| SA-04: PCB chính | 15.61 | 1.29 | **16.90** |
| SA-05: Vỏ & Kết cấu | 18.10 | 1.02 | **19.12** |
| SA-06: Pin | 9.30 | 0.11 | **9.41** |
| ACC + Đóng gói | 5.80 | 0.14 | **5.94** |
| Vật tư tiêu hao SX | 0.47 | 0.20 | **0.67** |
| **TỔNG VẬT TƯ / ĐƠN VỊ SP** | **$150.88** | **$4.04** | **$154.92** |

> **Ghi chú:** Giá trị thực $150.88 so với P35 Cost Estimate $148 — chênh lệch 1.9% do đã bổ sung vật tư tiêu hao SX ($0.67) và shim set ($0.30) chưa có trong P35. Chấp nhận được.

---

## PHẦN III — ĐỊNH MỨC LAO ĐỘNG (Labor Norms per Unit)

### 3.1 Định mức theo Nhóm công đoạn

| STT | Nhóm CĐ | Công đoạn | Bậc thợ | Số CN | Thời gian (phút/SP) | Giờ-công (h/SP) | Đơn giá ($/h) | Thành tiền ($) |
|-----|---------|-----------|---------|-------|---------------------|-----------------|---------------|---------------|
| 1 | A — KT đầu vào | OP-010, 020 | QC Inspector (bậc 4/7) | 1 | 0.8 | 0.013 | 6.00 | 0.08 |
| 2 | B — SMT Line | OP-030→090 | KTV SMT (bậc 4/7) | 1 | 22.0 | 0.367 | 5.00 | 1.83 |
| 3 | B — SMT QC | OP-070, 090 | QC Inspector (bậc 4/7) | 1 | 5.0 | 0.083 | 6.00 | 0.50 |
| 4 | B — Conformal coat | OP-080 | CN vận hành (bậc 3/7) | 1 | 5.0 | 0.083 | 4.00 | 0.33 |
| 5 | C — Quang học | OP-100, 110 | KTV lành nghề (bậc 5/7) | 1 | 13.0 | 0.217 | 7.00 | 1.52 |
| 6 | D — Chuẩn bị vỏ | OP-120 | KTV lắp ráp (bậc 4/7) | 1 | 3.0 | 0.050 | 5.00 | 0.25 |
| 7 | E — Tích hợp cơ khí | OP-130→170, 200→230 | KTV lắp ráp (bậc 4/7) | 1 | 18.5 | 0.308 | 5.00 | 1.54 |
| 8 | E — Tích hợp điện tử | OP-180, 190 | KTV điện tử (bậc 4/7) | 1 | 4.0 | 0.067 | 5.50 | 0.37 |
| 9 | F — Nạp firmware | OP-240 | Kỹ sư FW / KTV đào tạo | 1 | 5.0 | 0.083 | 8.00 | 0.67 |
| 10 | F — Kiểm tra EOL | OP-250, 260 | Kỹ sư KT (bậc KS) | 1 | 8.0 | 0.133 | 8.00 | 1.07 |
| 11 | G — Đánh dấu + đóng gói | OP-270→300 | CN đóng gói (bậc 3/7) | 1 | 7.0 | 0.117 | 4.00 | 0.47 |
| 12 | G — KT tổng thể cuối | OP-290 | QC Inspector senior (bậc 5/7) | 1 | 2.0 | 0.033 | 7.00 | 0.23 |
| | **TỔNG** | | | | **93.3** | **1.554** | | **$8.86** |

> **Ghi chú:** Tổng 93.3 phút bao gồm cả các công đoạn song song (B, C, D). Thời gian tuyến tính (critical path) = 77 phút/SP. Thời gian sản xuất thực ngày N+1 = 42.5 phút.

### 3.2 Tổng hợp theo Bậc thợ

| Bậc thợ / Trình độ | Giờ-công (h/SP) | % Tổng | Đơn giá ($/h) | Chi phí ($) |
|---------------------|-----------------|--------|---------------|------------|
| **Kỹ sư** (KS — firmware, test) | 0.216 | 13.9% | 8.00 | 1.74 |
| **Bậc 5/7** (KTV lành nghề — quang học, QC senior) | 0.250 | 16.1% | 7.00 | 1.75 |
| **Bậc 4/7** (KTV — SMT, lắp ráp, QC, điện tử) | 0.888 | 57.1% | 5.00–6.00 | 4.57 |
| **Bậc 3/7** (CN vận hành — CC, đóng gói) | 0.200 | 12.9% | 4.00 | 0.80 |
| **TỔNG** | **1.554** | **100%** | **avg 5.70** | **$8.86** |

### 3.3 Nhân lực tối thiểu (Minimum Staffing)

| Trạm | Vị trí | Bậc yêu cầu | Số lượng | Ghi chú |
|------|--------|-------------|---------|---------|
| WS-QC01 | QC Inspector | Bậc 4/7 | 1 | Kiêm QC-11 (final) |
| WS-SMT01 | KTV SMT | Bậc 4/7 | 1 | Vận hành P&P + reflow |
| WS-SMT01 | QC Inspector | Bậc 4/7 | 1 | AOI confirm + first article |
| WS-CC01 | CN vận hành | Bậc 3/7 | 1 | Kiêm WS-PACK01 |
| WS-OPT01 | KTV lành nghề | Bậc 5/7 | 1 | ⚠ Vị trí khó thay thế — đào tạo 8h |
| WS-MECH01 | KTV lắp ráp | Bậc 4/7 | 1 | Kiêm WS-ELEC01 |
| WS-FW01 | Kỹ sư FW | KS | 0.5 | Bán thời gian (kiêm nhiệm) |
| WS-TEST01 | Kỹ sư KT | KS | 1 | ⚠ Ký kết quả SAFETY-CRITICAL |
| **Tổng** | | | **7.5** | (6 toàn thời gian + 1 bán thời gian) |

> **Lao động gián tiếp** (không tính trong định mức trực tiếp): Quản lý SX (0.5 FTE), Quản lý QC (0.5 FTE), Kho/mua hàng (0.5 FTE). Tổng gián tiếp: 1.5 FTE → phân bổ vào overhead.

---

## PHẦN IV — ĐỊNH MỨC SỬ DỤNG THIẾT BỊ (Equipment Usage Norms per Unit)

### 4.1 Bảng Định mức Thiết bị

| STT | Thiết bị | Mã TB | CĐ sử dụng | Thời gian/SP (phút) | Máy-giờ/SP (h) | Công suất (kW) | Điện năng/SP (kWh) | Khấu hao/SP ($) |
|-----|---------|-------|-----------|---------------------|----------------|---------------|-------------------|----------------|
| 1 | Máy in kem hàn | EQ-001 | OP-030 | 1.0 | 0.017 | 0.8 | 0.013 | 0.02 |
| 2 | Máy Pick & Place | EQ-002 | OP-040, 050 | 5.0 | 0.083 | 1.5 | 0.125 | 0.05 |
| 3 | Lò reflow (8-zone) | EQ-003 | OP-060 | 5.0 | 0.083 | 3.5 | 0.292 | 0.08 |
| 4 | AOI camera | EQ-004 | OP-070 | 3.0 | 0.050 | 0.5 | 0.025 | 0.03 |
| 5 | SPI | EQ-005 | OP-030 | 0.5 | 0.008 | 0.3 | 0.003 | 0.01 |
| 6 | X-ray BGA (outsource) | EQ-006 | OP-070 | 2.0 (1/10 SP) | 0.003 | — | — | 0.50 |
| 7 | Buồng phun CC (exhaust fan) | EQ-007 | OP-080 | 5.0 | 0.083 | 0.5 | 0.042 | 0.01 |
| 8 | Jig PR-05 (sensor align) | EQ-008 | OP-100 | 5.0 | 0.083 | — | — | 0.40 |
| 9 | Jig PR-11 (bore-sight) | EQ-009 | OP-110, 260 | 11.0 | 0.183 | — | — | 0.40 |
| 10 | Jig PR-10 (EOL test) | EQ-010 | OP-250 | 5.0 | 0.083 | 0.2 | 0.017 | 0.40 |
| 11 | Máy ép nhiệt | EQ-011 | OP-120 | 3.0 | 0.050 | 0.5 | 0.025 | 0.01 |
| 12 | Bộ cờ lê mô-men | EQ-012 | OP-130→230 | 18.5 | 0.308 | — | — | 0.02 |
| 13 | Trạm hàn | EQ-013 | OP-190 | 2.0 | 0.033 | 0.1 | 0.003 | 0.01 |
| 14 | Oscilloscope | EQ-014 | OP-250 | 5.0 | 0.083 | 0.05 | 0.004 | 0.01 |
| 15 | Multimeter | EQ-015 | OP-090, 190, 250 | 3.0 | 0.050 | — | — | 0.005 |
| 16 | Thước cặp | EQ-016 | OP-010, 020 | 0.8 | 0.013 | — | — | 0.003 |
| 17 | Kính lúp 4x | EQ-017 | OP-070, 290 | 4.0 | 0.067 | — | — | 0.002 |
| 18 | PC nạp firmware | EQ-018 | OP-240 | 5.0 | 0.083 | 0.3 | 0.025 | 0.01 |
| 19 | Đèn UV cure | EQ-019 | OP-110 | 1.0 | 0.017 | 0.02 | 0.0003 | 0.04 |
| 20 | Máy pad-print | EQ-020 | OP-270 | 2.0 | 0.033 | 0.3 | 0.010 | 0.01 |
| 21 | Đồng hồ so (Dial indicator) | EQ-021 | OP-020 | 0.5 | 0.008 | — | — | 0.001 |
| 22 | Cân điện tử | EQ-022 | OP-300 | 0.5 | 0.008 | — | — | 0.002 |
| 23 | Stencil PCB (TOOL-001) | TOOL-001 | OP-030 | 2.0 | 0.033 | 150.00 | 0.030 | 0.030 |
| | **TỔNG** | | | | **1.364** | | **0.584** | **$2.01** |

### 4.2 Phương pháp tính Khấu hao Thiết bị

| Nhóm | Nguyên giá ($) | Thời gian KH (năm) | KH/năm ($) | SL/năm | KH/SP ($) |
|------|---------------|--------------------|-----------|---------|-----------|
| Thiết bị CÓ SẴN (17 items) | ~$80,000 (ước tính) | 7 | $11,429 | 500 | $0.46 (phân bổ 2% cho VM) |
| Jig chuyên dụng (PR-05, PR-10, PR-11) | $6,000 | 5 | $1,200 | 500 | $1.20 |
| UV lamp + Stencil | $350 | 3 | $117 | 500 | $0.23 |
| X-ray outsource | — | — | — | — | $0.50/SP (dịch vụ) |
| **Tổng khấu hao + dịch vụ** | | | | | **$2.01** (làm tròn) |

> **Ghi chú:** Thiết bị CÓ SẴN thuộc WX, dùng chung nhiều sản phẩm → phân bổ 2% cho VM dựa trên thời gian sử dụng tỷ lệ (~21% công suất × ~10% giá trị). Jig chuyên dụng 100% cho VM.

---

## PHẦN V — ĐỊNH MỨC NĂNG LƯỢNG (Energy Norms per Unit)

### 5.1 Điện năng Trực tiếp (Direct Electricity)

| Nguồn tiêu thụ | kWh/SP | Ghi chú |
|----------------|--------|---------|
| Lò reflow (8-zone) | 0.292 | Tiêu thụ lớn nhất — 3.5 kW × 5 min |
| Máy Pick & Place | 0.125 | 1.5 kW × 5 min |
| Buồng phun + hút khí | 0.042 | 0.5 kW × 5 min |
| Máy in kem hàn + SPI | 0.016 | |
| PC firmware + oscilloscope | 0.029 | |
| Máy ép nhiệt | 0.025 | 0.5 kW × 3 min |
| Trạm hàn | 0.003 | |
| Pad-print + AOI + jig PR-10 | 0.052 | |
| UV cure + khác | 0.001 | |
| **Cộng thiết bị trực tiếp** | **0.585** | |

### 5.2 Điện năng Gián tiếp (Indirect Electricity — phân bổ)

| Nguồn tiêu thụ | kWh/SP | Ghi chú |
|----------------|--------|---------|
| Chiếu sáng sản xuất (≥500 lux) | 0.30 | ~2 kW × 77 min, phân bổ 1 line |
| Điều hòa không khí (23±3°C, 40-60% RH) | 0.50 | ~3.5 kW, phân bổ theo diện tích WS-SMT01 + WS-OPT01 |
| Quạt hút ESD/thông gió | 0.10 | |
| Sấy conformal coat (batch qua đêm) | 0.20 | ~0.5 kW × 2h, batch 10 board → 0.1 kWh/SP. Cộng quạt lưu thông. |
| **Cộng gián tiếp** | **1.10** | |

### 5.3 Tổng hợp Năng lượng

| Hạng mục | kWh/SP | Đơn giá ($/kWh) | Chi phí ($) |
|----------|--------|-----------------|------------|
| Điện trực tiếp | 0.585 | 0.08 | 0.047 |
| Điện gián tiếp | 1.100 | 0.08 | 0.088 |
| **TỔNG NĂNG LƯỢNG** | **1.685** | | **$0.135** |

> **Đơn giá điện:** 1,920 VND/kWh (biểu giá SX công nghiệp 2024) ≈ $0.08/kWh.
> **Khí nén:** WX không dùng khí nén cho quy trình VM. Nếu có → bổ sung.

---

## PHẦN VI — ĐỊNH MỨC HAO HỤT & PHẾ PHẨM (Waste & Scrap Norms)

### 6.1 Tỷ lệ Phế phẩm theo Công đoạn

| STT | Công đoạn | Loại phế phẩm | Tỷ lệ (%) | Nguyên nhân chính | Sửa chữa? | Giá trị phế/SP ($) |
|-----|-----------|--------------|-----------|-------------------|-----------|-------------------|
| 1 | OP-060/070 (SMT + AOI) | Board lỗi hàn (bridge, missing, void) | 3% | Solder paste, profile, component | Có — rework hàn (max 2 lần) | 0.50 (rework cost) |
| 2 | OP-070 (X-ray BGA) | BGA void >25% | 1% | Reflow profile, flux | Có — BGA rework station | 0.80 (rework cost) |
| 3 | OP-100 (PR-05 sensor) | FOV offset >5px | 2% | Shim selection, lens tolerance | Có — chọn lại shim (max 3 lần) | 0.15 (rework cost) |
| 4 | OP-110 (PR-11 OLED) | Bore-sight >0.2 mrad SAU UV-cure | **1.5%** | Alignment drift, UV-cure shift | **KHÔNG** — loại bỏ SA-03 | **$35.00** (scrap SA-03) |
| 5 | OP-120 (Heat insert) | Pull-out <200N | 1% | Nhiệt độ/thời gian ép sai | Có — ép lại (nếu boss chưa hỏng) | 0.02 |
| 6 | OP-250 (EOL test) | FAIL chức năng | 2% | FW, hardware, assembly | Có — re-flash + re-test (max 2 lần) | 0.50 (rework cost) |
| 7 | OP-260 (Bore-sight cuối) | >0.5 mrad | 1% | Bench shift, module shift | Có — re-torque (max 2 lần) | 0.30 (rework cost) |
| 8 | OP-200 (O-ring) | IP67 fail (O-ring xoắn) | 0.5% | Thao tác sai | Có — mở vỏ, thay O-ring | 0.10 |
| 9 | Tổng thể | Lỗi ngoại quan (trầy, nhãn) | 1% | Handling | Có — sửa tại chỗ | 0.05 |

### 6.2 First-Pass Yield (FPY) và Chi phí Phế phẩm

| Metric | Giá trị |
|--------|---------|
| **FPY ước tính** | (1-0.03)(1-0.01)(1-0.02)(1-0.015)(1-0.01)(1-0.02)(1-0.01)(1-0.005)(1-0.01) = **~89.1%** |
| **Tỷ lệ sửa chữa được (reworkable)** | ~9.4% (hầu hết rework thành công) |
| **Tỷ lệ phế phẩm cuối (final scrap)** | ~1.5% (chủ yếu SA-03 UV-cure) |
| **Chi phí rework trung bình** | ~$2.42/SP sản xuất |
| **Chi phí scrap trung bình** | ~$0.53/SP sản xuất (= 1.5% × $35) |
| **Tổng chi phí phế phẩm** | **~$2.95/SP** |

### 6.3 Quản lý Chất thải

| Loại chất thải | Nguồn | SL/SP (ước tính) | Phân loại | Xử lý |
|---------------|-------|-----------------|----------|-------|
| Kem hàn thừa + khăn lau | OP-030 | ~1 g | Chất thải nguy hại | Thu gom → xử lý theo TCVN ISO 14001 |
| Dung môi conformal coat | OP-080 | ~2 ml | Chất thải nguy hại | Buồng hút → bẫy dung môi → xử lý |
| Thiếc/solder dross | OP-060, 190 | ~0.5 g | Kim loại nặng | Thu gom → tái chế |
| Bao bì NVL đầu vào | Tất cả | ~50 g | Chất thải thông thường | Phân loại → tái chế |
| PCB/SA-03 phế phẩm | QC-03, QC-06 | ~1.5% × 1 board | WEEE | Thu gom → xử lý WEEE |
| Pin hỏng (nếu có) | QC-09 | Rất hiếm | UN38.3 nguy hại | Thu gom riêng → trả NCC hoặc xử lý chuyên dụng |

---

## PHẦN VII — TỔNG HỢP ĐỊNH MỨC KINH TẾ KỸ THUẬT (Summary Norms per Unit)

### 7.1 Bảng Tổng hợp Chi phí Đơn vị

| STT | Hạng mục | Giá trị ($) | % Tổng | Ghi chú |
|-----|---------|-------------|--------|---------|
| 1 | **Nguyên vật liệu chính** | 150.88 | 72.3% | 52 mục BOM |
| 2 | **Hao hụt NVL** (scrap allowance) | 4.04 | 1.9% | Trung bình 2.7% |
| 3 | **Vật tư tiêu hao SX** | 0.67 | 0.3% | Loctite, IPA, găng tay... |
| 4 | **Lao động trực tiếp** | 8.86 | 4.2% | 1.554 giờ-công, avg $5.70/h |
| 5 | **Khấu hao thiết bị** | 2.01 | 1.0% | Jig + phân bổ WX |
| 6 | **Năng lượng** | 0.14 | 0.1% | 1.685 kWh × $0.08 |
| 7 | **Chi phí phế phẩm** (rework + scrap) | 2.95 | 1.4% | FPY ~89%, scrap ~1.5% |
| | **GIÁ THÀNH SẢN XUẤT TRỰC TIẾP** | **$169.55** | **81.2%** | |
| 8 | **Chi phí chung SX** (overhead 10%) | 16.96 | 8.1% | Quản lý, kho, bảo trì, thuê nhà |
| 9 | **Chi phí quản lý DN** (G&A 5%) | 8.48 | 4.1% | Hành chính, kế toán |
| 10 | **Phân bổ NRE** (tại 500 SP) | 8.20 | 3.9% | $41,000 / 500 SP / 10 năm [GIẢ ĐỊNH] |
| 11 | **Dự phòng** (contingency 3%) | 5.09 | 2.4% | Biến động giá NVL, tỷ giá |
| | **GIÁ THÀNH TOÀN BỘ / ĐƠN VỊ SP** | **$208.28** | **100%** | |

### 7.2 So sánh với P35 Cost Estimate

| Metric | P35 (ước tính sơ bộ) | ĐMKTKT (chi tiết) | Chênh lệch |
|--------|----------------------|-------------------|------------|
| Vật tư | $148.00 | $155.59 (NVL + HH + tiêu hao) | +$7.59 (+5.1%) |
| Lao động | $36.00 | $8.86 (trực tiếp) | -$27.14 |
| Overhead + margin | $18.00 | $16.96 (overhead) + $8.48 (G&A) | +$7.44 |
| Phế phẩm | (không tính riêng) | $2.95 | +$2.95 |
| NRE phân bổ | (không tính trong unit) | $8.20 | +$8.20 |
| Dự phòng | (không tính) | $5.09 | +$5.09 |
| **Tổng** | **$202.00** | **$208.28** | **+$6.28 (+3.1%)** |

> **Phân tích chênh lệch:** P35 gộp lao động gián tiếp + overhead vào "Labor $36" → khi tách riêng thì lao động trực tiếp chỉ $8.86, phần còn lại phân vào overhead/G&A. ĐMKTKT bổ sung chi phí phế phẩm ($2.95) và NRE phân bổ ($8.20) không có trong P35 unit cost. Giá thành ĐMKTKT $208.28 cao hơn 3.1% — hợp lý cho mục đích lập giá bán và kiểm toán.

### 7.3 Cơ cấu Nội địa hóa theo ĐMKTKT

| Hạng mục | Nội địa ($) | Nhập khẩu ($) | Hỗn hợp ($) | Tỷ lệ NĐ (%) |
|----------|------------|--------------|-------------|-------------|
| NVL chính | 63.18 | 120.82 | — | 34.3% |
| NVL hao hụt (tỷ lệ) | 1.81 | 2.23 | — | — |
| Tiêu hao SX | 0.40 | 0.27 | — | — |
| Lao động trực tiếp | 8.86 | — | — | 100% |
| Khấu hao thiết bị | 1.51 | — | 0.50 | 75% |
| Năng lượng | 0.14 | — | — | 100% |
| Overhead + G&A | 25.44 | — | — | 100% |
| **Tổng (không NRE, không dự phòng)** | **$101.34** | **$123.32** | **$0.50** | |
| **Tỷ lệ nội địa hóa cơ sở (ĐMKTKT)** | | | | **45.0%** |
| **Sau biện pháp M1-M4** | **+$22.00** | **-$22.00** | | **~54.8%** |

> **⚠ Ghi chú hai cơ sở tính (Two calculation bases):**
>
> | Cơ sở | Baseline | Sau M1-M4 | Mẫu số |
> |-------|----------|-----------|--------|
> | BOM (NVL + LĐ trực tiếp) | 50.6% | **62.6%** | $184.00 |
> | ĐMKTKT (giá thành toàn bộ) | 45.0% | **54.8%** | $225.16 |
>
> BOM basis (50.6%→62.6%) tính trên chi phí sản xuất trực tiếp — phù hợp đánh giá tỷ lệ nội địa hóa theo giá trị sản xuất.
> ĐMKTKT basis (45.0%→54.8%) tính trên giá thành nhà máy đầy đủ (bao gồm overhead, G&A, phế phẩm, khấu hao) — phù hợp kiểm toán quốc phòng.
>
> **Kết luận:** M1-M4 đủ đạt ≥60% trên cơ sở BOM. Trên cơ sở ĐMKTKT, cần thêm biện pháp M5+ (xem §7.4).

### 7.4 Biện pháp Bổ sung M5-M7 (để đạt ≥60% cơ sở ĐMKTKT)

> Khoảng cách: $135.10 (60% × $225.16) − $123.34 (sau M1-M4) = **$11.76 thiếu hụt**

| # | Biện pháp | Chuyển đổi NĐ ($) | Tỷ lệ NĐ mới (ĐMKTKT) | Ghi chú |
|---|-----------|-------------------|----------------------|---------|
| M5 | Nội địa hóa mạ anode nhôm (anodize MIL-A-8625 III) — vendor VN đang qualify | +$3.00 | 56.2% | VM-5301, VM-5501. Vendor VN đã xác định, đang qualify. |
| M6 | Nội địa hóa conformal coat (IPC-CC-830C) — cơ sở VN tại TP.HCM | +$2.00 | 57.1% | OP-095. Dịch vụ thuê ngoài, chuyển sang cơ sở VN. |
| M7 | Nội địa hóa linh kiện thụ động PCB bổ sung (tụ, điện trở, cuộn cảm) | +$4.00 | 58.9% | Mở rộng M1. Samsung MLCC/Yageo nhà máy VN. |
| M8 | Nội địa hóa cáp USB-C + connector | +$3.00 | **60.2%** | Nhà sản xuất cáp tại Bắc Ninh/Bình Dương. |

**M5-M8 tổng: +$12.00** → Tỷ lệ NĐ ĐMKTKT = ($123.34 + $12) / $225.16 = **60.1%** ≥ 60% ✅

> **Rủi ro:** M5 (anodize) và M6 (conformal coat) đã trong kế hoạch qualify vendor. M7-M8 là linh kiện tiêu chuẩn, rủi ro thấp. Tổng chi phí tăng: ≤$1/SP (net) do giá VN ≈ giá import cho linh kiện tiêu chuẩn.

---

## PHẦN VIII — ĐIỀU KIỆN ÁP DỤNG VÀ ĐIỀU CHỈNH (Applicability & Adjustment)

### 8.1 Điều kiện Áp dụng

| Điều kiện | Yêu cầu |
|----------|---------|
| **Sản lượng** | 500 đơn vị/năm (1 ca sản xuất) |
| **BOM version** | Rev A (frozen 2026-02-22) — mọi thay đổi BOM yêu cầu cập nhật định mức |
| **Tỷ giá** | $1 = 24,000 VND [CẦN XÁC NHẬN — tỷ giá tại thời điểm phê duyệt] |
| **Giá điện** | 1,920 VND/kWh (biểu giá SX công nghiệp) |
| **Đơn giá lao động** | Theo bảng lương WX 2026 [CẦN XÁC NHẬN] |

### 8.2 Hệ số Điều chỉnh theo Sản lượng

| Sản lượng | Hệ số NVL | Hệ số LĐ | Hệ số KH TB | Hệ số NRE | Giá thành ước tính |
|-----------|----------|----------|-------------|----------|-------------------|
| **100 SP/năm** | 1.05 | 1.10 | 2.50 | 4.10 | ~$255 |
| **500 SP/năm** (cơ sở) | 1.00 | 1.00 | 1.00 | 1.00 | **$208** |
| **1,000 SP/năm** | 0.97 | 0.95 | 0.60 | 0.50 | ~$192 |
| **2,000 SP/năm** | 0.95 | 0.90 | 0.35 | 0.25 | ~$182 |

> **Ghi chú:** Hệ số NVL giảm nhờ volume discount. Hệ số LĐ giảm nhờ learning curve. Hệ số KH TB giảm nhờ phân bổ nhiều SP. Hệ số NRE giảm tỷ lệ nghịch. Giá trị ước tính — cần xác nhận bằng báo giá NCC thực tế.

### 8.3 Chu kỳ Rà soát Định mức

| Sự kiện | Hành động |
|---------|----------|
| Thay đổi BOM (ECN) | Cập nhật Phần II ngay lập tức |
| Thay đổi giá NVL >5% | Cập nhật đơn giá trong Phần II, VII |
| Thay đổi tỷ giá >3% | Cập nhật toàn bộ bảng giá |
| Sau 6 tháng SX | Rà soát tỷ lệ phế phẩm thực tế → điều chỉnh Phần VI |
| Sau 12 tháng SX | Rà soát toàn diện định mức (NVL + LĐ + TB) |
| Thay đổi sản lượng mục tiêu | Áp dụng hệ số §8.2 hoặc tính lại |

---

## PHẦN IX — KÝ DUYỆT (Approval)

| Vai trò | Họ tên | Chữ ký | Ngày |
|---------|--------|--------|------|
| **Kỹ sư Định mức** (Norms Engineer) | _________________ | _______ | _______ |
| **Kế toán Trưởng** (Chief Accountant) | _________________ | _______ | _______ |
| **Quản lý SX** (Production Manager) | _________________ | _______ | _______ |
| **Giám đốc Kỹ thuật** (Technical Director) | _________________ | _______ | _______ |

---

## PHỤ LỤC A — BẢNG QUY ĐỔI ĐƠN VỊ & VIẾT TẮT

| Viết tắt | Đầy đủ (VN) | English |
|----------|-------------|---------|
| ĐMKTKT | Định mức Kinh tế Kỹ thuật | Technical-Economic Norms |
| NVL | Nguyên vật liệu | Raw materials |
| HH | Hao hụt | Waste/scrap allowance |
| SP | Sản phẩm | Product unit |
| CĐ | Công đoạn | Operation/process step |
| NĐ | Nội địa | Domestic/local |
| NK | Nhập khẩu | Imported |
| HH (nguồn) | Hỗn hợp | Mixed (import material + local processing) |
| KTV | Kỹ thuật viên | Technician |
| CN | Công nhân | Worker/operator |
| KS | Kỹ sư | Engineer |
| KH TB | Khấu hao Thiết bị | Equipment depreciation |
| NRE | Chi phí không tái diễn | Non-Recurring Engineering |
| FPY | Tỷ lệ đạt lần đầu | First-Pass Yield |
| G&A | Quản lý doanh nghiệp | General & Administrative |
| ECN | Thông báo thay đổi kỹ thuật | Engineering Change Notice |

---

*Định mức KTKT soạn bởi: KN Nguyen (AI-assisted, Claude Opus 4.6)*
*Trạng thái: DRAFT — chờ phê duyệt HITL trước khi ban hành*
*Phiên bản: 1.0 | BOM basis: Rev A (2026-02-22) | QTCN basis: B3 v1.0*
