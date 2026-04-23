---
project: V-SMASH-M
phase: 4
type: maintenance-manual
artifact: B5
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
classification: UNCLASSIFIED
language: Vietnamese primary / English technical terms
inputs:
  - V-SMASH-M_BOM_v1.0.md (P33 — 71 parts)
  - V-SMASH-M_FMEA_v1.0.md (P26 — 22 failure modes)
  - V-SMASH-M_DfX_Analysis_v1.0.md (P25 — DfMaint 4/5)
  - V-SMASH-M_B4_User_Manual_v1.0.md (B4 — operator-level Phần 8)
  - V-SMASH-M_B3_Process_Plan_v1.0.md (B3 — 30 operations)
reading_level: Military technician (Kỹ thuật viên bậc 5/7 trở lên)
---

# HƯỚNG DẪN BẢO TRÌ — V-SMASH-M
# Maintenance Manual — V-SMASH-M (Micro AI Weapon Sight)

> **Mã sản phẩm (Product Code):** VM-0000
> **Phiên bản tài liệu (Document Version):** 1.0
> **Ngày (Date):** 2026-02-23
> **Phân loại (Classification):** KHÔNG MẬT (UNCLASSIFIED)
> **Đối tượng:** Kỹ thuật viên đơn vị (L2) và Kỹ sư nhà máy (L3)

---

## MỤC LỤC (Table of Contents)

1. [Tổng quan Bảo trì (Maintenance Overview)](#phần-1--tổng-quan-bảo-trì-maintenance-overview)
2. [Phân cấp Bảo trì (Maintenance Level Assignment)](#phần-2--phân-cấp-bảo-trì-maintenance-level-assignment)
3. [Lịch Bảo trì Phòng ngừa (Preventive Maintenance Schedule)](#phần-3--lịch-bảo-trì-phòng-ngừa-preventive-maintenance-schedule)
4. [Quy trình Bảo trì Sửa chữa (Corrective Maintenance Procedures)](#phần-4--quy-trình-bảo-trì-sửa-chữa-corrective-maintenance-procedures)
5. [Quy trình Chẩn đoán (Diagnostic Procedures)](#phần-5--quy-trình-chẩn-đoán-diagnostic-procedures)
6. [Hiệu chuẩn (Calibration Procedures)](#phần-6--hiệu-chuẩn-calibration-procedures)
7. [Giới hạn Sửa chữa theo Cấp (Repair Limits by Level)](#phần-7--giới-hạn-sửa-chữa-theo-cấp-repair-limits-by-level)
8. [Danh mục Phụ tùng (Spare Parts List)](#phần-8--danh-mục-phụ-tùng-spare-parts-list)
9. [Dụng cụ & Thiết bị Bảo trì (Maintenance Tools & Equipment)](#phần-9--dụng-cụ--thiết-bị-bảo-trì-maintenance-tools--equipment)
10. [Biểu mẫu Bảo trì (Maintenance Record Forms)](#phần-10--biểu-mẫu-bảo-trì-maintenance-record-forms)
11. [Phụ lục (Appendices)](#phụ-lục-appendices)

---

## PHẦN 1 — TỔNG QUAN BẢO TRÌ (Maintenance Overview)

### 1.1 — Phạm vi Tài liệu (Scope)

Tài liệu này dành cho **kỹ thuật viên cấp L2 (đơn vị)** và **kỹ sư cấp L3 (nhà máy)** thực hiện bảo trì, kiểm tra, sửa chữa, và hiệu chuẩn thiết bị V-SMASH-M. Bảo trì cấp L1 (xạ thủ) được mô tả trong B4 Hướng dẫn Sử dụng, Phần 8.

### 1.2 — Triết lý Bảo trì (Maintenance Philosophy)

V-SMASH-M được thiết kế theo nguyên tắc **bảo trì theo cấp** (echelon maintenance):

- **L1 — Tại thực địa:** Xạ thủ tự thực hiện, không dụng cụ, ≤60 giây. Thay pin, lau kính, kiểm tra kẹp.
- **L2 — Tại kho đơn vị:** Kỹ thuật viên thực hiện với dụng cụ cơ bản. Bore-sight, firmware, thay linh kiện ngoài.
- **L3 — Tại nhà máy (Workshop X):** Kỹ sư thực hiện với thiết bị chuyên dụng. Sửa PCB, thay SoC/OLED, hiệu chỉnh quang học.

**Chỉ số thiết kế bảo trì:**
- DfMaint score: **4/5** (P25)
- MTTR (L1 — thay pin): **≤60 giây**
- MTTR (L2 — bore-sight check): **~30 phút**
- MTTR (L2 — firmware update): **~15 phút**
- MTTR (L3 — thay OLED module): **~2 giờ** (ước tính)
- MTTR (L3 — thay PCB assembly): **~3 giờ** (ước tính)

### 1.3 — Tài liệu Tham chiếu (Referenced Documents)

| Mã | Tài liệu | Vai trò |
|----|----------|---------|
| B1 | V-SMASH-M_B1_YCKT_v1.0.md | Yêu cầu kỹ thuật (78 yêu cầu) |
| B3 | V-SMASH-M_B3_Process_Plan_v1.0.md | Quy trình CNSX (30 công đoạn) |
| B4 | V-SMASH-M_B4_User_Manual_v1.0.md | Hướng dẫn sử dụng (L1) |
| P25 | V-SMASH-M_DfX_Analysis_v1.0.md | Phân tích DfX (DfMaint 4/5) |
| P26 | V-SMASH-M_FMEA_v1.0.md | FMEA (22 chế độ hỏng) |
| P33 | V-SMASH-M_BOM_v1.0.md | BOM (71 chi tiết) |

---

## PHẦN 2 — PHÂN CẤP BẢO TRÌ (Maintenance Level Assignment)

### 2.1 — Tổng quan Phân cấp

| Cấp | Thực hiện | Vị trí | Dụng cụ | Thời gian tối đa |
|-----|-----------|--------|---------|-------------------|
| **L1** | Xạ thủ / Tiểu đội trưởng | Thực địa | Không (tool-free) | ≤5 phút |
| **L2** | Kỹ thuật viên bậc 5/7+ | Kho đơn vị (depot) | Bộ dụng cụ L2 (xem §9) | ≤4 giờ |
| **L3** | Kỹ sư bậc 7+ | Workshop X (nhà máy) | Thiết bị chuyên dụng | ≤8 giờ |

### 2.2 — Ma trận Phân cấp Bảo trì theo Cụm (Sub-Assembly Maintenance Matrix)

| Cụm (Sub-Assy) | L1 — Xạ thủ | L2 — Kỹ thuật viên | L3 — Kỹ sư nhà máy |
|-----------------|-------------|---------------------|---------------------|
| **SA-01 Sensor Module** | Lau kính ngoài | Kiểm tra bore-sight; thay kính ngoài (VM-1101) nếu nứt | Thay CMOS sensor (VM-1200); chỉnh trục quang; thay cáp flex (VM-1201) |
| **SA-02 Compute Module** | — | Cập nhật firmware qua USB-C; chẩn đoán log | Thay SoC module (VM-2101); thay eMMC (VM-2103); thay thermal pad (VM-2102) |
| **SA-03 Display Module** | — | Kiểm tra bore-sight (PR-11 jig) | Thay OLED (VM-3101); thay beam-splitter (VM-3102); hiệu chỉnh quang UV-cure |
| **SA-04 Main PCB** | — | Chẩn đoán USB-C; kiểm tra conformal coating | Thay PCB assembly toàn bộ (VM-4000); sửa mối hàn; thay BLE module (VM-4102) |
| **SA-05 Housing** | Kiểm tra kẹp; lau vỏ | Kiểm tra O-ring (VM-5202); kiểm tra bench quang (nứt mỏi); siết lại vít kẹp | Thay optical bench (VM-5301); thay clamp (VM-5501); thay vỏ (VM-5101/5201); thay battery door (VM-5601) |
| **SA-06 Battery** | Thay pin (tool-free) | Kiểm tra tiếp điểm (VM-6102) | Thay bộ tiếp điểm (VM-6102); thay protection IC (VM-4105) |
| **ACC-01 Accessories** | Thay vải lau, sử dụng anti-seize | Thay cáp USB-C (VM-7101); cấp T10 key mới | — |

---

## PHẦN 3 — LỊCH BẢO TRÌ PHÒNG NGỪA (Preventive Maintenance Schedule)

### 3.1 — Bảo trì theo Chu kỳ Bắn (Round-Count Based)

| Mốc | Hạng mục | Cấp | Thời gian | Ghi chú |
|-----|----------|-----|-----------|---------|
| **Mỗi phiên bắn** | Kiểm tra kẹp + witness mark | L1 | 1 phút | Xoay paint dot = lỏng → siết lại (F18) |
| | Lau kính ngoài | L1 | 1 phút | Bụi thuốc súng |
| **500 phát** | ☐ Bore-sight check (PR-11 jig) | L2 | 30 phút | Tiêu chí: ≤0,5 mrad. Nếu lệch → gửi L3 (F03, F11) |
| | ☐ Kiểm tra vỏ ngoài (nứt, biến dạng) | L2 | 10 phút | Kính lúp, tập trung vùng kẹp + đáy (F17) |
| | ☐ Kiểm tra O-ring (độ đàn hồi, nứt) | L2 | 15 phút | Cần mở vỏ (4× M4 T10 Torx). Thay nếu biến dạng vĩnh viễn (F16) |
| | ☐ Kiểm tra vít kẹp cross-bolt (M6) | L2 | 5 phút | Siết lại 20 Nm, bôi anti-seize mới nếu galling (F18) |
| **1.000 phát** | ☐ Kiểm tra optical bench (nứt mỏi) | L2 | 20 phút | Visual inspection dưới kính lúp — tập trung lỗ vít, fillet (F19) |
| | ☐ Kiểm tra tiếp điểm pin | L2 | 5 phút | Lau sạch, kiểm tra lò xo (F22) |
| | ☐ Chạy full diagnostics qua USB-C | L2 | 15 phút | Xem §5 Diagnostic Procedures |
| **2.500 phát** | ☐ Thay O-ring phòng ngừa (VM-5202) | L2 | 20 phút | Tuổi thọ dự kiến NBR seal: ~3.000 phát (F16) |
| | ☐ Bổ sung MoS₂ dry film trên recoil lug | L2 | 10 phút | Anti-galling (F18, VM-5502) |
| **5.000 phát hoặc 2 năm** | ☐ Đại tu (overhaul) | L3 | ~8 giờ | Tháo toàn bộ, kiểm tra tất cả linh kiện, thay O-ring + seal + thermal pad + threadlocker |

### 3.2 — Bảo trì theo Lịch (Calendar-Based)

| Mốc | Hạng mục | Cấp | Ghi chú |
|-----|----------|-----|---------|
| **Hàng tuần** (nếu sử dụng liên tục) | Sạc pin, lau kính, kiểm tra kẹp | L1 | — |
| **Mỗi 6 tháng** | ☐ Bore-sight check | L2 | Bắt buộc dù chưa đạt 500 phát (F03, F11) |
| | ☐ Firmware check & update | L2 | Kiểm tra phiên bản qua USB-C, cập nhật nếu có bản mới |
| | ☐ Kiểm tra toàn diện bên ngoài | L2 | Vỏ, kính, kẹp, O-ring, witness mark, cổng USB-C |
| **Mỗi 12 tháng** | ☐ Kiểm tra conformal coating (nếu mở vỏ) | L2/L3 | Có dấu hiệu bong tróc → gửi L3 phủ lại |
| | ☐ Kiểm tra pin (dung lượng thực tế) | L2 | Sạc đầy → dùng đến 20% → so với spec ≥8h. Nếu <6h → thay pin |
| **Mỗi 24 tháng** | ☐ Đại tu nhẹ: thay thermal pad + O-ring | L3 | Vật liệu lão hóa theo thời gian |

### 3.3 — Bảo trì theo Sự kiện (Event-Based)

| Sự kiện | Hạng mục | Cấp |
|---------|----------|-----|
| Rơi từ >1 m | Bore-sight check + kiểm tra vỏ nứt | L2 |
| Ngâm nước >30 phút | Mở vỏ, kiểm tra ẩm bên trong, sấy khô | L2/L3 |
| Vận hành ở >50°C kéo dài | Kiểm tra thermal pad, bore-sight | L2 |
| `SENSOR FAULT` lặp lại | Chẩn đoán USB-C → xác định nguyên nhân | L2 |
| `AI FAULT` lặp lại | Firmware re-flash → nếu vẫn lỗi → gửi L3 | L2/L3 |
| Kính nứt/vỡ | Thay kính + bore-sight | L2 |
| Chỉ thị ngắm lệch liên tục | Bore-sight → nếu >0,5 mrad → gửi L3 hiệu chỉnh | L2/L3 |

---

## PHẦN 4 — QUY TRÌNH BẢO TRÌ SỬA CHỮA (Corrective Maintenance Procedures)

### 4.1 — Quy tắc Chung

1. **Tắt thiết bị và tháo pin** trước mọi thao tác mở vỏ
2. **Đeo vòng tay chống tĩnh điện (ESD wrist strap)** khi tiếp xúc PCB hoặc linh kiện điện tử
3. **Ghi nhận** tất cả thao tác vào Biểu mẫu Bảo trì (§10)
4. **Sau sửa chữa**: luôn chạy bore-sight check (nếu mở vỏ) + power-on test

### CM-01: Thay Pin (L1) — MTTR ≤60 giây

> **Tham chiếu FMEA:** F20 (battery depletion), F22 (contact spring fatigue)

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt thiết bị (nhấn giữ 3s) | Xác nhận LED tắt |
| 2 | Bóp khóa nắp pin, kéo nắp ra | Tay trần hoặc găng tay chiến thuật đều được |
| 3 | Rút pin cũ | Kiểm tra tiếp điểm: bẩn → lau vải khô |
| 4 | Lắp pin mới — đầu (+) vào trong | Ký hiệu trên ngăn pin (VM-6103) |
| 5 | Đóng nắp → nghe "tách" (over-center click) | Đảm bảo gasket VM-5602 nằm đúng rãnh |
| 6 | Bật nguồn → xác nhận LED xanh ≤3s | Nếu không bật → kiểm tra cực pin |

### CM-02: Thay O-ring Vỏ (L2) — MTTR ~20 phút

> **Tham chiếu FMEA:** F16 (IP67 seal failure, RPN=147→70)
> **Dụng cụ:** T10 Torx key, O-ring mới VM-5202, mỡ silicone (silicon grease)

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt thiết bị, tháo pin | — |
| 2 | Tháo 4× vít M4 T10 Torx (VM-5701) | Đánh dấu vị trí vít. Lưu ý washer nylon VM-5702 |
| 3 | Tách nắp trên (VM-5101) khỏi đáy (VM-5201) | Nhẹ nhàng — cáp flex bên trong. Đặt nắp trên cạnh bên, KHÔNG kéo đứt cáp |
| 4 | Gỡ O-ring cũ (VM-5202) khỏi rãnh trên VM-5201 | Dùng que nhựa, KHÔNG dùng kim loại sắc (trầy rãnh) |
| 5 | Kiểm tra rãnh: sạch, không có mảnh vụn | Lau bằng vải không xơ |
| 6 | Bôi mỡ silicone mỏng lên O-ring mới | Giúp lắp dễ + tăng tuổi thọ seal |
| 7 | Đặt O-ring mới vào rãnh | Đảm bảo không bị xoắn, nằm đều toàn bộ chu vi |
| 8 | Lắp lại nắp trên, siết 4× vít M4 theo mẫu chéo | Mô-men: ~1,5 Nm. Bôi Loctite 243 lên ren |
| 9 | Lắp pin, bật nguồn → power-on test | Xác nhận LED xanh |
| 10 | Ghi nhận vào biểu mẫu bảo trì | Ghi mã O-ring cũ/mới, ngày thay |

### CM-03: Thay Kính Ngoài / Objective Lens (L2) — MTTR ~45 phút

> **Tham chiếu FMEA:** F02 (lens crack, RPN=60)
> **Dụng cụ:** T10 Torx key, Allen 1.5mm (M2 DIN 912), lens mới VM-1101 + barrel VM-1102 + retaining ring VM-1103

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt, tháo pin | — |
| 2 | Tháo 4× vít vỏ M4 T10 (VM-5701) | Giữ washer nylon |
| 3 | Tách nắp trên | Cẩn thận cáp flex |
| 4 | Tháo 4× vít M2 DIN 912 (VM-1202) gắn sensor mount | Allen 1.5mm. Gỡ washer nylon VM-1203 |
| 5 | Rút cụm lens ra khỏi optical bench | Register bore H7 — kéo thẳng, không xoay |
| 6 | Tháo retaining ring VM-1103 | Vặn ngược chiều kim đồng hồ |
| 7 | Rút lens cũ VM-1101 khỏi barrel VM-1102 | Nếu barrel còn tốt → chỉ thay lens |
| 8 | Lắp lens mới vào barrel → siết retaining ring | Không siết quá chặt — ring chỉ giữ lens, không tạo lực |
| 9 | Lắp cụm lens vào register bore trên optical bench | Chọn alignment shim VM-1204 nếu cần (0,05/0,10/0,20mm) |
| 10 | Siết 4× vít M2 (0,3 Nm) + Loctite 243 | Thêm washer nylon VM-1203 |
| 11 | Lắp lại vỏ, siết vít | Theo CM-02 bước 8 |
| 12 | **Bore-sight check bắt buộc** (xem §6.1) | Tiêu chí: ≤0,5 mrad |
| 13 | Ghi biểu mẫu bảo trì | — |

### CM-04: Cập nhật Firmware (L2) — MTTR ~15 phút

> **Tham chiếu FMEA:** F04 (SoC hang), F15 (thermal throttle bug)
> **Dụng cụ:** Laptop + cáp USB-C (VM-7101) + firmware file (.bin)

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Bật thiết bị, kết nối USB-C đến laptop | — |
| 2 | Chạy phần mềm chẩn đoán V-SMASH Diagnostics | [ADMIN: phần mềm cần phát triển Phase 4] |
| 3 | Kiểm tra firmware version hiện tại | So với bản mới nhất |
| 4 | Tải firmware file vào thiết bị | Quá trình flash ~5 phút. KHÔNG ngắt điện/cáp |
| 5 | Thiết bị tự khởi động lại | LED nhấp nháy trong quá trình flash |
| 6 | Xác nhận version mới trong Diagnostics | — |
| 7 | Chạy self-test (power-on → detect test) | Hướng camera vào vật di động |
| 8 | Ghi biểu mẫu: firmware version cũ → mới, ngày | — |

### CM-05: Thay O-ring Nắp Pin (L2) — MTTR ~10 phút

> **Tham chiếu:** F16 (seal failure — nắp pin IP65)
> **Dụng cụ:** Gasket mới VM-5602, mỡ silicone

| Bước | Hành động |
|------|----------|
| 1 | Tháo pin, mở nắp pin |
| 2 | Tháo chốt bản lề VM-5603 (dùng kìm mũi nhọn nhẹ nhàng) |
| 3 | Gỡ gasket silicone cũ VM-5602 khỏi nắp |
| 4 | Lau sạch rãnh gasket |
| 5 | Đặt gasket mới, bôi mỡ silicone |
| 6 | Lắp lại chốt bản lề |
| 7 | Đóng nắp → kiểm tra click và kín khít |

### CM-06: Siết lại Kẹp Ray / Cross-bolt (L2) — MTTR ~10 phút

> **Tham chiếu FMEA:** F18 (clamp loosening, S=9, RPN=135→54)
> **Dụng cụ:** Cờ lê lực (torque wrench) 20 Nm, anti-seize sachet VM-7106, paint pen VM-7107

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tháo thiết bị khỏi ray (hoặc giữ trên ray) | — |
| 2 | Kiểm tra ren cross-bolt VM-5503 (M6×30) | Dấu hiệu galling: ren bị xước, siết khó. Nếu galling → thay bolt mới |
| 3 | Lau sạch ren, bôi anti-seize mới (VM-7106) | MoS₂ compound — chống galling SS/SS |
| 4 | Siết bolt: **≤20 Nm** bằng cờ lê lực | KHÔNG siết quá — có thể nứt clamp (AA7075-T6) |
| 5 | Đánh vạch chứng (witness mark) bằng paint pen | Vạch qua đầu bolt và thân clamp — nếu xoay sẽ thấy rõ |
| 6 | Ghi biểu mẫu: mô-men siết, tình trạng bolt | — |

### CM-07: Kiểm tra & Thay Tiếp điểm Pin (L2) — MTTR ~15 phút

> **Tham chiếu FMEA:** F22 (contact spring fatigue, RPN=90)
> **Dụng cụ:** Kính lúp, multimeter, tiếp điểm mới VM-6102 (nếu cần thay)

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tháo pin, mở nắp pin | — |
| 2 | Kiểm tra visual: lò xo BeCu có biến dạng/gãy không | Kính lúp. Lò xo phải đàn hồi đều |
| 3 | Đo điện trở tiếp xúc bằng multimeter | <0,1Ω = OK. >0,5Ω = bẩn/hỏng |
| 4 | Lau tiếp điểm bằng cồn isopropyl + vải không xơ | Nếu bị oxy hóa nặng → thay |
| 5 | Nếu cần thay: tháo vít PCB (cần mở vỏ) → thay bộ VM-6102 | Cần ESD wrist strap. Chuyển lên L3 nếu không có kinh nghiệm PCB |
| 6 | Lắp pin, power-on test | Lắc nhẹ — không được tự tắt |

### CM-08: Thay OLED Module (L3) — MTTR ~2 giờ

> **Tham chiếu FMEA:** F09 (OLED degradation, RPN=36), F11 (alignment, RPN=162→72)
> **Dụng cụ:** PR-11 bore-sight jig, UV-cure lamp, OLED mới VM-3101, relay lens VM-3103 (nếu cần), UV-cure adhesive VM-3105

⚠ **CHỈ L3 — Quy trình này yêu cầu UV-cure bond — KHÔNG THỂ HOÀN TÁC. Sai lệch khi bond = phải thay cả cụm SA-03.**

⚠ **Điều kiện UV-cure:** Nhiệt độ phòng 18–30°C (tối ưu 23±2°C). Độ ẩm ≤70% RH. UV-cure adhesive VM-3105 không đạt bond strength đầy đủ ngoài phạm vi này. Kiểm tra datasheet nhà sản xuất trước khi bond.

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt, tháo pin, mở vỏ (4× M4 T10) | — |
| 2 | Ngắt flex cable DSI (VM-3104) khỏi ZIF connector | Nhẹ nhàng — mở khóa ZIF trước khi rút |
| 3 | Tháo 2× vít M2 (VM-3107) + washer (VM-3108) | Gỡ cụm display mount (VM-3106) ra |
| 4 | Loại bỏ UV-cure bond cũ | Cắt/mài cẩn thận — không làm hỏng optical bench |
| 5 | Lắp OLED mới (VM-3101) vào mount bracket (VM-3106) | — |
| 6 | Lắp relay lens (VM-3103) nếu cần thay | — |
| 7 | Đặt cụm lên PR-11 bore-sight jig | Căn chỉnh OLED axis với sensor axis |
| 8 | Điều chỉnh đến ≤0,2 mrad (factory tolerance) | Dùng phần mềm chẩn đoán real-time |
| 9 | Xác nhận T=18–30°C, RH≤70% trước bond | Đo bằng nhiệt kế phòng |
| 10 | Bơm UV-cure adhesive (VM-3105), chiếu UV 365nm | Bond thời gian theo nhà sản xuất (~30s) |
| 11 | Xác nhận bore-sight ≤0,2 mrad sau UV-cure | Bond có thể gây drift nhỏ — check lại |
| 12 | Kết nối flex cable DSI | — |
| 13 | Siết 2× vít M2 (0,3 Nm) + Loctite 243 | — |
| 14 | Lắp vỏ, siết vít | — |
| 15 | Full power-on test + bore-sight final check | ≤0,2 mrad (factory standard) |
| 16 | Ghi biểu mẫu: OLED serial cũ/mới, bore-sight result | **Yêu cầu chữ ký kép** (KTV thực hiện + KCS/giám sát) |

### CM-09: Thay PCB Assembly (L3) — MTTR ~3 giờ

> **Tham chiếu FMEA:** F12 (regulator failure), F13 (BLE failure), F15 (thermal throttle)
> **Dụng cụ:** ESD workstation, T10 Torx, Allen 2mm (M2.5), PCB mới VM-4000, thermal pad VM-2102

⚠ **CHỈ L3 — PCB chứa SoC Jetson (VM-2101). Thay toàn bộ SA-04 + SA-02 as LRU (Line Replaceable Unit).**

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt, tháo pin, mở vỏ | — |
| 2 | Ngắt tất cả flex cables (CSI-2 VM-1201, DSI VM-3104) | Mở ZIF trước khi rút |
| 3 | Ngắt dây battery contacts | — |
| 4 | Tháo 4× vít standoff M2.5 (VM-5802) | Giữ standoff VM-5801 |
| 5 | Nhấc PCB + SoC ra khỏi housing | Cẩn thận thermal pad (VM-2102) — có thể dính |
| 6 | Tháo thermal pad cũ (VM-2102) khỏi heat spreader (VM-5401) | Lau sạch bề mặt |
| 7 | Đặt thermal pad mới lên heat spreader | ≥1,0 W/mK, 1mm thick |
| 8 | Đặt PCB mới lên standoffs, siết 4× M2.5 (0,5 Nm) | + Loctite 243 |
| 9 | Kết nối tất cả flex cables + battery contacts | Đóng ZIF lock chắc chắn |
| 10 | Flash firmware phiên bản mới nhất (CM-04) | — |
| 11 | Lắp vỏ | — |
| 12 | **Bore-sight check bắt buộc** | PCB change có thể ảnh hưởng sensor alignment |
| 13 | Full functional test: AI detect, BLE, USB-C, LED, OLED | — |
| 14 | Ghi biểu mẫu: PCB serial cũ/mới, firmware version | **Yêu cầu chữ ký kép** (KTV thực hiện + KCS/giám sát) |

### CM-10: Thay Optical Bench (L3) — MTTR ~4 giờ

> **Tham chiếu FMEA:** F19 (fatigue crack, S=9, RPN=126→45)
> **Dụng cụ:** PR-05 sensor alignment jig, PR-11 bore-sight jig, UV-cure lamp, Allen 2.5mm (M3 DIN 912), optical bench mới VM-5301

⚠ **CHỈ L3 — Đây là sửa chữa lớn nhất. Yêu cầu hiệu chỉnh quang học lại toàn bộ.**

| Bước | Hành động | Ghi chú |
|------|----------|---------|
| 1 | Tắt, tháo pin, mở vỏ | — |
| 2 | Ngắt tất cả cables | — |
| 3 | Tháo PCB (per CM-09 bước 2-5) | — |
| 4 | Tháo 4× vít M3 (VM-5302) + washer nylon (VM-5303) | Allen 2.5mm |
| 5 | Gỡ optical bench cũ (VM-5301) ra khỏi housing | — |
| 6 | Kiểm tra housing mount points — sạch, không hỏng | Nếu housing hỏng → thay housing |
| 7 | Lắp optical bench mới + washer nylon + vít M3 (0,8 Nm) + Loctite 243 | Register bore H7 phải sạch |
| 8 | Lắp lại sensor module SA-01 → alignment trên PR-05 jig | ±5px acceptance |
| 9 | Lắp lại display module SA-03 → bore-sight trên PR-11 | ≤0,2 mrad |
| 10 | UV-cure bond (nếu SA-03 cần re-bond) | — |
| 11 | Lắp PCB, cables, vỏ | — |
| 12 | Full test: bore-sight + functional + IP67 spot check | — |
| 13 | Ghi biểu mẫu | **Yêu cầu chữ ký kép** (KTV thực hiện + KCS/giám sát) |

---

## PHẦN 5 — QUY TRÌNH CHẨN ĐOÁN (Diagnostic Procedures)

### 5.1 — Chẩn đoán qua USB-C (L2)

> **Dụng cụ:** Laptop + cáp USB-C + phần mềm V-SMASH Diagnostics
> **[ADMIN: phần mềm chẩn đoán — Phase 4 firmware deliverable]**

**Kết nối:**
1. Bật thiết bị
2. Cắm USB-C → laptop nhận thiết bị như USB serial device
3. Khởi động V-SMASH Diagnostics trên laptop

**Thông tin đọc được:**

| Mục | Dữ liệu | Ý nghĩa |
|-----|---------|---------|
| Firmware version | vX.Y.Z | So sánh với bản mới nhất |
| Uptime tổng | Giờ | Tuổi thọ tích lũy |
| Số lần khởi động | Count | Nhiều restart bất thường = F22 hoặc F04 |
| Nhiệt độ SoC hiện tại | °C | >80°C ở idle = thermal pad hỏng (F05) |
| Nhiệt độ SoC max (lịch sử) | °C | >95°C = đã throttle, >105°C = đã shutdown |
| Battery cycles | Count | >300 cycles = pin suy giảm |
| Battery voltage | V | <3,2V = pin yếu, <3,0V = hết |
| OLED brightness | nits | Giảm >30% so với factory = OLED aging (F09) |
| Sensor status | OK / FAULT | F01 |
| AI model version | vX.Y | — |
| BLE status | Connected / Disconnected | F13 |
| Error log | Timestamped entries | Xem §5.2 |

### 5.2 — Đọc Error Log

Error log lưu trong eMMC (VM-2103), tải qua USB-C:

| Error Code | Mô tả | FMEA Ref | Hành động |
|------------|--------|----------|----------|
| `E-SNS-01` | Sensor no frame >500ms | F01 | Kiểm tra flex cable CSI-2 (VM-1201). Nếu OK → thay sensor (L3) |
| `E-AI-01` | Inference timeout >500ms | F04 | Firmware re-flash (CM-04). Nếu vẫn lỗi → thay SoC (L3) |
| `E-THR-01` | Thermal throttle activated (Tj≥85°C) | F05 | Kiểm tra thermal pad (VM-2102). Kiểm tra fin blockage |
| `E-THR-02` | Thermal shutdown (Tj≥105°C) | F05/F15 | **Nghiêm trọng** — kiểm tra thermal pad + heat spreader contact |
| `E-CMP-01` | Ballistic compute out-of-bounds | F08 | Firmware update. Nếu vẫn lỗi → log chi tiết gửi L3 |
| `E-DSP-01` | Display output failed | F09 | Kiểm tra flex cable DSI. Nếu OK → thay OLED (L3) |
| `E-PWR-01` | Voltage regulator fault | F12 | Thay PCB assembly (L3) |
| `E-BLE-01` | BLE timeout | F13 | Non-critical — thiết bị hoạt động bình thường |
| `E-BAT-01` | Overcurrent protection triggered | F21 | **SAFETY** — kiểm tra pin, thay pin Grade A mới |
| `E-BAT-02` | Undervoltage cutoff | F20 | Sạc hoặc thay pin |

### 5.3 — Chẩn đoán Visual (L2)

Kiểm tra visual định kỳ — không cần dụng cụ đặc biệt (kính lúp đủ):

| Vùng kiểm tra | Dấu hiệu bất thường | Hành động |
|----------------|---------------------|----------|
| Kính ngoài (objective lens) | Nứt, trầy sâu, bám bẩn không lau được | Trầy nhẹ: OK. Nứt: thay (CM-03). Bẩn dính: thử cồn isopropyl |
| Vỏ housing (trên + dưới) | Nứt, biến dạng, sờn sứt | Nứt: gửi L3. Sờn nhẹ: OK |
| Kẹp Picatinny | Xước sâu trên bearing face, galling trên ren bolt | Bôi anti-seize (CM-06). Galling nặng: thay bolt |
| Witness mark (paint dot) trên cross-bolt | Vạch bị lệch/xoay | Bolt đã lỏng → siết lại (CM-06) |
| Cổng USB-C | Bụi, ẩm, chân connector cong | Thổi bụi. Chân cong: gửi L3 |
| LED status | Không sáng khi bật | Pin / PCB issue |
| Nắp pin | Không click, gasket lồi | Thay gasket (CM-05). Click mechanism hỏng: gửi L3 |

---

## PHẦN 6 — HIỆU CHUẨN (Calibration Procedures)

### 6.1 — Bore-sight Check (L2) — Kiểm tra Đồng trục Quang

> **Tham chiếu FMEA:** F03 (lens-to-sensor, RPN=189→72), F11 (OLED-to-sensor, RPN=162→72)
> **Dụng cụ:** Jig PR-11, mục tiêu chuẩn bore-sight, laptop + V-SMASH Diagnostics
> **Chu kỳ:** Mỗi 500 phát bắn HOẶC 6 tháng (tùy điều kiện nào đến trước)
> **Jig NRE cost:** ~$2.000 (mua một lần cho kho đơn vị)

**Điều kiện Môi trường cho Bore-sight (bắt buộc):**

| Yếu tố | Yêu cầu | Lý do |
|---------|---------|-------|
| Bề mặt | Bàn cố định, không rung | Rung >0,1 mrad làm sai kết quả |
| Nhiệt độ | 15–35°C (tối ưu 20–25°C) | Giãn nở nhiệt thay đổi alignment ở biên nhiệt |
| Ánh sáng | Đủ sáng để đọc target, tránh nắng trực tiếp vào lens | Ánh sáng mạnh gây flare trên sensor |
| Khoảng cách target | ≥5 m (tối ưu 10 m) | Khoảng cách ngắn phóng đại sai số parallax |
| Thời gian warm-up | Bật thiết bị ≥2 phút trước đo | SoC ổn nhiệt → alignment ổn |

**Quy trình:**

| Bước | Hành động | Tiêu chí |
|------|----------|---------|
| 1 | Gắn V-SMASH-M lên jig PR-11 (cố định) | Kẹp chắc — không rung |
| 2 | Bật thiết bị | LED xanh |
| 3 | Hướng jig vào mục tiêu chuẩn (bore-sight target) ở khoảng cách ≥5 m | Mục tiêu có cross-hair chính xác |
| 4 | Kết nối USB-C, chạy chế độ bore-sight trong Diagnostics | Phần mềm hiển thị sai lệch real-time |
| 5 | Đọc sai lệch (mrad) | — |
| 6a | Nếu ≤0,5 mrad → **ĐẠT** | Ghi kết quả, trả về sử dụng |
| 6b | Nếu >0,5 mrad và ≤1,0 mrad → **CẢNH BÁO** | Ghi kết quả, theo dõi. Lên lịch L3 sớm |
| 6c | Nếu >1,0 mrad → **KHÔNG ĐẠT** | **Gửi L3** để hiệu chỉnh quang học |

**Tiêu chuẩn:**
- Factory acceptance: ≤0,2 mrad (OP-110, B3 Process Plan)
- Field service limit: ≤0,5 mrad
- Out-of-service: >1,0 mrad

### 6.2 — Hiệu chỉnh Quang học (L3) — Re-alignment

> **CHỈ L3 — Yêu cầu PR-05 sensor jig + PR-11 bore-sight jig + UV-cure**

Quy trình hiệu chỉnh = tương đương OP-050 + OP-100 + OP-110 trong B3 Process Plan:

1. Tháo cụm SA-03 (display module)
2. Kiểm tra sensor alignment (SA-01) trên PR-05 → chỉnh nếu cần (shim VM-1204)
3. Lắp lại SA-03, căn chỉnh trên PR-11
4. UV-cure bond khi đạt ≤0,2 mrad
5. Verify post-cure: ≤0,2 mrad
6. Full functional test

**Ghi chú:** UV-cure bond là **irreversible** (từ FMEA F11 mitigation). Nếu bore-sight vẫn không đạt sau UV-cure → thay toàn bộ cụm SA-03.

---

## PHẦN 7 — GIỚI HẠN SỬA CHỮA THEO CẤP (Repair Limits by Level)

### 7.1 — L1 (Xạ thủ) — Giới hạn Tuyệt đối

| ✅ ĐƯỢC phép | ❌ KHÔNG được phép |
|-------------|-------------------|
| Thay pin | Mở vỏ (bất kỳ lý do nào) |
| Lau kính ngoài | Tháo kính |
| Kiểm tra kẹp | Siết vít bên trong |
| Tắt-bật lại (power cycle) | Kết nối USB-C (trừ sạc) |
| Thay vải lau | Cố gắng sửa bất kỳ lỗi nào |

> **Quy tắc L1:** Nếu tắt-bật 3 lần mà vẫn lỗi → **GỬI L2**. Không thử thêm.

### 7.2 — L2 (Kỹ thuật viên Đơn vị)

| ✅ ĐƯỢC phép | ❌ KHÔNG được phép |
|-------------|-------------------|
| Mở vỏ (4× M4 T10) | Tháo optical bench (4× M3) |
| Thay O-ring (VM-5202, VM-5602) | Tháo/thay OLED (VM-3101) |
| Thay kính ngoài (CM-03) | Thay PCB / SoC |
| Firmware update (CM-04) | UV-cure bất kỳ linh kiện nào |
| Bore-sight check (§6.1) | Hiệu chỉnh quang học (chỉ CHECK, không chỉnh) |
| Siết lại cross-bolt (CM-06) | Hàn / sửa mối hàn PCB |
| Kiểm tra tiếp điểm pin (CM-07) | Thay linh kiện PCB đơn lẻ |
| Chẩn đoán USB-C (§5.1) | — |
| Thay cáp USB-C accessory (VM-7101) | — |

> **Quy tắc L2:** Nếu bore-sight >0,5 mrad hoặc lỗi phần cứng bên trong → **GỬI L3**.

### 7.3 — L3 (Kỹ sư Nhà máy)

| ✅ ĐƯỢC phép | Điều kiện |
|-------------|----------|
| Tất cả thao tác L2 | — |
| Thay optical bench (CM-10) | Có PR-05 + PR-11 |
| Thay OLED module (CM-08) | Có PR-11 + UV-cure |
| Thay PCB assembly (CM-09) | Có ESD workstation |
| Thay beam-splitter (VM-3102) | Có PR-11 + UV-cure |
| Thay SoC / eMMC | Có BGA rework station |
| Sửa mối hàn PCB | Có kính hiển vi + soldering station |
| Thay Picatinny clamp (VM-5501) | — |
| Thay vỏ housing (VM-5101/5201) | Full rebuild |
| Đại tu (overhaul) | Tháo toàn bộ, kiểm tra 100%, thay expendables |

### 7.4 — Tiêu chí Loại bỏ (Condemn Criteria)

Thiết bị bị loại bỏ (beyond economical repair) khi:

| Tình trạng | Lý do |
|-----------|-------|
| Optical bench nứt + OLED bond hỏng đồng thời | Chi phí sửa > 60% giá sản phẩm mới ($202) |
| SoC hỏng vĩnh viễn (không flash được) | Thay PCB + SoC ≈ $72 + labor > $120 |
| Housing biến dạng không phục hồi | Mất IP67, mất alignment reference |
| Bore-sight không đạt ≤1,0 mrad sau 2 lần hiệu chỉnh L3 | Structural failure |

---

## PHẦN 8 — DANH MỤC PHỤ TÙNG (Spare Parts List)

### 8.1 — Phụ tùng L1 (Xạ thủ mang theo)

| STT | Part Number | Mô tả | Qty đề xuất | Đơn giá | Ghi chú |
|-----|-------------|--------|-------------|---------|---------|
| 1 | VM-6101 | Pin Li-ion 21700 (4000mAh) | 2 | $6,00 | Samsung INR21700-40T hoặc tương đương Grade A |
| 2 | VM-7102 | Vải lau quang học | 1 | $0,20 | Microfiber |
| 3 | VM-7106 | Anti-seize sachet | 1 | $0,10 | Cho cross-bolt nếu cần |
| 4 | VM-7107 | Paint pen (witness mark) | 1 | $0,10 | — |

**Chi phí bộ phụ tùng L1:** ~$12,60

### 8.2 — Phụ tùng L2 (Kho đơn vị dự trữ)

| STT | Part Number | Mô tả | Qty/10 thiết bị | Đơn giá | Chu kỳ thay |
|-----|-------------|--------|-----------------|---------|------------|
| 1 | VM-5202 | O-ring vỏ (NBR 70 Shore A) | 10 | $0,30 | ~2.500 phát hoặc 24 tháng |
| 2 | VM-5602 | Gasket nắp pin (silicone) | 5 | $0,20 | Khi biến dạng |
| 3 | VM-1101 | Objective lens (M12) | 2 | $6,00 | Khi nứt/vỡ (F02) |
| 4 | VM-1102 | Lens barrel | 1 | $3,00 | Khi hỏng ren |
| 5 | VM-1103 | Lens retaining ring | 2 | $1,00 | — |
| 6 | VM-1204 | Alignment shim set | 2 | $0,50 | Cho CM-03 |
| 7 | VM-5503 | Cross-bolt M6×30 | 2 | $0,25 | Khi galling (F18) |
| 8 | VM-5505 | Nylon washer M6 | 5 | $0,03 | — |
| 9 | VM-5701 | Housing closure screws M4 T10 (×4) | 2 sets | $0,60/set | Khi hỏng ren |
| 10 | VM-5702 | Nylon washer M4 (×4) | 2 sets | $0,08/set | — |
| 11 | VM-7101 | Cáp USB-C (1m) | 2 | $1,50 | — |
| 12 | VM-7106 | Anti-seize sachet | 10 | $0,10 | — |
| 13 | VM-7107 | Paint pen | 5 | $0,10 | — |
| 14 | VM-6101 | Pin 21700 (dự phòng) | 10 | $6,00 | ~12-18 tháng |
| 15 | VM-8101 | Loctite 243 (chai nhỏ) | 1 | $5,00* | Cho nhiều thiết bị |

*Loctite 243 tính theo chai, không per-unit dose.

**Chi phí bộ phụ tùng L2 (cho 10 thiết bị):** ~$100

### 8.3 — Phụ tùng L3 (Kho nhà máy dự trữ)

> **⚠ Rủi ro Chuỗi cung ứng:** Một số phụ tùng L3 có ràng buộc nguồn cung đặc biệt. Xem BOM v1.0 §5 (Procurement Flags) để biết chi tiết. Các mục đánh dấu ⚠ dưới đây cần lưu ý khi lập kế hoạch dự trữ.

| STT | Part Number | Mô tả | Qty/50 thiết bị | Đơn giá | Lead time | Rủi ro cung ứng |
|-----|-------------|--------|-----------------|---------|-----------|-----------------|
| 1 | VM-3101 | OLED micro-display 0.39" | 3 | $20,00 | 8 tuần | ⚠ SINGLE-SOURCE — qualify 2nd vendor (BOM §5.2) |
| 2 | VM-3102 | Beam-splitter BK7 | 2 | $10,00 | 8 tuần | Import only (CN/JP) |
| 3 | VM-3103 | Relay lens (collimating) | 2 | $4,00 | 6 tuần | Import only (CN/JP) |
| 4 | VM-3105 | UV-cure adhesive | 5 doses | $0,50 | 4 tuần | — |
| 5 | VM-5301 | Optical bench (AA7075-T6) | 2 | $15,00 | 4 tuần | L/I — local CNC, import plate |
| 6 | VM-5302 | Bench screws M3×8 (×4) | 5 sets | $0,48/set | 1 tuần | — |
| 7 | VM-5303 | Nylon washer M3 (×4) | 5 sets | $0,08/set | 1 tuần | — |
| 8 | VM-5501 | Picatinny clamp body | 2 | $8,00 | 4 tuần | L/I — ⚠ anodize vendor qual pending (BOM §5.4) |
| 9 | VM-5502 | MoS₂ dry film (dose) | 5 | $0,20 | 4 tuần | — |
| 10 | VM-5101 | Upper housing shell | 2 | $2,50 | 2 tuần | Local (WX) |
| 11 | VM-5201 | Lower housing shell | 2 | $2,50 | 2 tuần | Local (WX) |
| 12 | VM-5601 | Battery door | 3 | $1,50 | 2 tuần | Local (WX) |
| 13 | VM-4000 | Main PCB Assembly (complete SA-04) | 2 | $25,00 | Assy lead 4 tuần | Local PCB, import components |
| 14 | VM-2101 | SoC Jetson Orin Nano | 1 | $40,00 | 10 tuần | ⚠ [EXPORT-REVIEW] EAR ruling required (BOM §5.1). SINGLE-SOURCE NVIDIA. |
| 15 | VM-2102 | Thermal pad (SoC) | 10 | $1,50 | 4 tuần | — |
| 16 | VM-1200 | CMOS sensor module | 1 | $15,00 | 8 tuần | Import only — ⚠ LONG-LEAD |
| 17 | VM-1201 | Flex cable CSI-2 | 3 | $2,00 | 4 tuần | — |
| 18 | VM-3104 | Flex cable DSI | 3 | $2,00 | 4 tuần | — |
| 19 | VM-6102 | Battery contact springs | 5 sets | $0,80 | 4 tuần | — |
| 20 | VM-5401 | Heat spreader plate | 2 | $3,00 | 2 tuần | Local (Hoa Phat Al) |
| 21 | VM-5402 | Thermal pad (housing) | 5 | $0,80 | 4 tuần | — |
| 22 | VM-4105 | Battery protection IC | 3 | $0,80 | 4 tuần | — |

**Chi phí bộ phụ tùng L3 (cho 50 thiết bị):** ~$250

> **Khuyến nghị dự trữ:** Đặt hàng VM-2101 (SoC) và VM-1200 (CMOS) sớm nhất có thể sau khi EAR clearance. Lead time 8–10 tuần nghĩa là depot không có spare nếu không order trước ≥3 tháng.

### 8.4 — Ma trận Phụ tùng theo Chế độ Hỏng (Spare → FMEA Cross-Reference)

| FMEA ID | Chế độ hỏng | Phụ tùng cần | Cấp |
|---------|------------|-------------|-----|
| F01 | Sensor failure | VM-1200, VM-1201 | L3 |
| F02 | Lens crack | VM-1101, VM-1102, VM-1103 | L2 |
| F03 | Lens-to-sensor misalignment | VM-1204 (shim) | L2 check / L3 fix |
| F04 | SoC hang | Firmware file | L2 |
| F05 | Thermal shutdown | VM-2102 (thermal pad) | L3 |
| F09 | OLED degradation | VM-3101, VM-3105 | L3 |
| F11 | OLED alignment | VM-3101, VM-3105 | L3 |
| F12 | Regulator failure | VM-4000 (PCB assy) | L3 |
| F13 | BLE failure | VM-4102 (or VM-4000) | L3 |
| F16 | Seal failure | VM-5202, VM-5602 | L2 |
| F17 | Housing crack | VM-5101/5201 | L3 |
| F18 | Clamp loosening | VM-5503, VM-7106, VM-7107 | L2 |
| F19 | Bench fatigue crack | VM-5301 | L3 |
| F20 | Battery depletion | VM-6101 | L1 |
| F21 | Battery thermal runaway | VM-6101 (Grade A only) | L1 |
| F22 | Contact spring fatigue | VM-6102 | L2/L3 |

---

## PHẦN 9 — DỤNG CỤ & THIẾT BỊ BẢO TRÌ (Maintenance Tools & Equipment)

### 9.1 — Bộ Dụng cụ L2 (Unit Depot Tool Kit)

| STT | Dụng cụ | Dùng cho | Ước giá |
|-----|---------|---------|---------|
| 1 | T10 Torx L-key (VM-7103 — included) | Vít vỏ M4, vít bench M3 | $0,30 (đi kèm) |
| 2 | Allen key set (1.5mm, 2mm, 2.5mm) | Vít M2, M2.5, M3 DIN 912 | ~$5 |
| 3 | Cờ lê lực (torque wrench) 5-25 Nm | Cross-bolt 20 Nm | ~$30 |
| 4 | Kính lúp (10×) | Visual inspection | ~$5 |
| 5 | Multimeter | Kiểm tra điện trở tiếp xúc | ~$20 |
| 6 | Laptop + V-SMASH Diagnostics software | Chẩn đoán, firmware | [Có sẵn] |
| 7 | Cáp USB-C (dự phòng) | Kết nối laptop | $1,50 |
| 8 | Vòng tay ESD (wrist strap) | Chống tĩnh điện khi mở vỏ | ~$3 |
| 9 | Que nhựa (spudger) | Gỡ O-ring | ~$2 |
| 10 | Mỡ silicone (tuýp nhỏ) | Bôi O-ring | ~$5 |
| 11 | Vải không xơ (lint-free wipes) | Lau bề mặt quang | ~$3 |
| 12 | Cồn isopropyl (chai nhỏ) | Lau tiếp điểm, kính | ~$3 |
| 13 | **Jig PR-11 (bore-sight)** | Kiểm tra đồng trục quang | **~$2.000** (NRE) |
| 14 | Mục tiêu bore-sight (target board) | Dùng với PR-11 | ~$50 |

**Tổng đầu tư bộ L2:** ~$2.130 (chủ yếu là jig PR-11)

### 9.2 — Thiết bị L3 (Factory Workshop X)

| STT | Thiết bị | Dùng cho | Ước giá |
|-----|---------|---------|---------|
| 1 | Tất cả dụng cụ L2 | — | — |
| 2 | **Jig PR-05 (sensor alignment)** | Căn chỉnh sensor SA-01 | ~$1.500 (NRE) |
| 3 | **Jig PR-11 (bore-sight)** | Bore-sight + hiệu chỉnh | ~$2.000 (NRE) |
| 4 | UV-cure lamp (365nm) | Bond SA-03 display | ~$200 |
| 5 | ESD workstation (mat + strap) | Thao tác PCB | ~$100 |
| 6 | Soldering station (temperature-controlled) | Sửa mối hàn | ~$300 |
| 7 | Kính hiển vi soi nổi (stereo microscope) | Kiểm tra PCB, mối hàn | ~$500 |
| 8 | BGA rework station | Thay SoC (nếu cần) | ~$2.000 |
| 9 | Cờ lê lực (torque wrench) set | Nhiều range | ~$80 |

**Tổng đầu tư bộ L3:** ~$6.700 (chủ yếu là jig + BGA station)

---

## PHẦN 10 — BIỂU MẪU BẢO TRÌ (Maintenance Record Forms)

### 10.1 — Phiếu Bảo trì Phòng ngừa (Preventive Maintenance Record)

```
╔═══════════════════════════════════════════════════════════════════╗
║ PHIẾU BẢO TRÌ PHÒNG NGỪA — V-SMASH-M                          ║
╠═══════════════════════════════════════════════════════════════════╣
║ Serial number thiết bị: _______________                          ║
║ Ngày kiểm tra: ____/____/________                                ║
║ Kỹ thuật viên: _________________ (Bậc: _____)                   ║
║ Số phát bắn tích lũy (ước tính): _________                      ║
║ Firmware version: v___.___.___ (OK / Cần update)                 ║
╠═══════════════════════════════════════════════════════════════════╣
║ KIỂM TRA                          │ ĐẠT │ KHÔNG │ GHI CHÚ      ║
║────────────────────────────────────┼──────┼───────┼──────────────║
║ Bore-sight (mrad): ____           │  ☐   │   ☐   │              ║
║ Vỏ ngoài (nứt/biến dạng)         │  ☐   │   ☐   │              ║
║ O-ring vỏ (đàn hồi, không nứt)   │  ☐   │   ☐   │              ║
║ Gasket nắp pin                    │  ☐   │   ☐   │              ║
║ Cross-bolt (siết, witness mark)   │  ☐   │   ☐   │              ║
║ Optical bench (nứt mỏi)          │  ☐   │   ☐   │              ║
║ Kính ngoài (nứt/trầy)            │  ☐   │   ☐   │              ║
║ Tiếp điểm pin (lò xo, điện trở)  │  ☐   │   ☐   │              ║
║ USB-C diagnostics chạy            │  ☐   │   ☐   │              ║
║ Power-on test (LED xanh ≤3s)     │  ☐   │   ☐   │              ║
║ AI detect test (vật di động)      │  ☐   │   ☐   │              ║
╠═══════════════════════════════════════════════════════════════════╣
║ PHÁN QUYẾT:  ☐ ĐẠT — trả về sử dụng                           ║
║              ☐ KHÔNG ĐẠT — gửi L3. Lý do: _________________    ║
║              ☐ THAY PHỤ TÙNG: ____________________________      ║
╠═══════════════════════════════════════════════════════════════════╣
║ Ký tên KTV: _________________  Ngày: ____/____/________         ║
╚═══════════════════════════════════════════════════════════════════╝
```

### 10.2 — Phiếu Bảo trì Sửa chữa (Corrective Maintenance Record)

```
╔═══════════════════════════════════════════════════════════════════╗
║ PHIẾU BẢO TRÌ SỬA CHỮA — V-SMASH-M                            ║
╠═══════════════════════════════════════════════════════════════════╣
║ Serial number: _______________  Ngày nhận: ____/____/________    ║
║ Triệu chứng báo cáo: ________________________________________   ║
║ Error code (nếu có): _________________________________________   ║
║ Kỹ thuật viên: _________________ (Bậc: _____)                   ║
╠═══════════════════════════════════════════════════════════════════╣
║ CHẨN ĐOÁN:                                                      ║
║ Nguyên nhân xác định: ________________________________________   ║
║ FMEA reference: F___                                             ║
║ Quy trình áp dụng: CM-___                                       ║
╠═══════════════════════════════════════════════════════════════════╣
║ PHỤ TÙNG THAY:                                                   ║
║ Part # cũ: _____________ → Part # mới: _____________            ║
║ Part # cũ: _____________ → Part # mới: _____________            ║
╠═══════════════════════════════════════════════════════════════════╣
║ SAU SỬA CHỮA:                                                   ║
║ Bore-sight (mrad): ____  ☐ ĐẠT  ☐ KHÔNG                        ║
║ Power-on test:           ☐ ĐẠT  ☐ KHÔNG                        ║
║ AI detect test:          ☐ ĐẠT  ☐ KHÔNG                        ║
║ Firmware version: v___.___.___                                   ║
╠═══════════════════════════════════════════════════════════════════╣
║ PHÁN QUYẾT:  ☐ TRẢ VỀ SỬ DỤNG                                 ║
║              ☐ GỬI L3 (lý do: __________________________)       ║
║              ☐ LOẠI BỎ (lý do: __________________________)      ║
╠═══════════════════════════════════════════════════════════════════╣
║ Tổng thời gian sửa chữa: ___ giờ ___ phút (MTTR)              ║
║                                                                  ║
║ Ký tên KTV thực hiện: _______________  Ngày: ____/____/________ ║
║                                                                  ║
║ ⚠ CHỮ KÝ KÉP (bắt buộc cho CM-08 / CM-09 / CM-10):           ║
║ Ký tên KCS/Giám sát: _______________  Ngày: ____/____/________ ║
║ (Xác nhận bore-sight ĐẠT + functional test ĐẠT trước trả TB)  ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

## PHỤ LỤC (Appendices)

### Phụ lục A — Mô-men Siết Tham chiếu (Torque Reference)

| Fastener | Part Number | Location | Torque | Threadlocker | Tool |
|----------|-------------|----------|--------|-------------|------|
| M2×4 DIN 912 | VM-1202 | Sensor mount | 0,3 Nm | Loctite 243 | Allen 1.5mm |
| M2×4 DIN 912 | VM-3107 | Display mount | 0,3 Nm | Loctite 243 | Allen 1.5mm |
| M2.5×4 DIN 912 | VM-5802 | PCB cap screw | 0,5 Nm | Loctite 243 | Allen 2mm |
| M3×8 DIN 912 | VM-5302 | Optical bench | 0,8 Nm | Loctite 243 | Allen 2.5mm |
| M4×12 Torx T10 | VM-5701 | Housing closure | ~1,5 Nm | Loctite 243 | T10 Torx |
| M6×30 DIN 912 | VM-5503 | Cross-bolt (clamp) | ≤20 Nm | Anti-seize (MoS₂) | Cờ lê lực |

### Phụ lục B — Danh mục Viết tắt Bảo trì

| Viết tắt | Tiếng Việt | English |
|----------|-----------|---------|
| BGA | Mảng lưới bi | Ball Grid Array |
| BIST | Tự kiểm tra tích hợp | Built-In Self-Test |
| CM | Bảo trì sửa chữa | Corrective Maintenance |
| ESD | Phóng tĩnh điện | Electrostatic Discharge |
| FPC | Mạch in dẻo | Flexible Printed Circuit |
| ICT | Kiểm tra mạch in | In-Circuit Test |
| IP67 | Cấp bảo vệ (bụi + nước) | Ingress Protection 67 |
| LRU | Cụm thay thế tại tuyến | Line Replaceable Unit |
| MTTR | Thời gian trung bình sửa chữa | Mean Time To Repair |
| NRE | Chi phí phát triển không lặp lại | Non-Recurring Engineering |
| PM | Bảo trì phòng ngừa | Preventive Maintenance |
| RPN | Số ưu tiên rủi ro | Risk Priority Number |
| SoC | Hệ thống trên chip | System-on-Chip |
| ZIF | Lắp không lực | Zero Insertion Force |

### Phụ lục C — Sơ đồ Phân rã Cụm (Sub-Assembly Breakdown Reference)

```
VM-0000  V-SMASH-M End Item (370g, $202)
├── VM-1000  SA-01 Sensor Module ($28)
│   ├── VM-1100  Lens Assembly ($10)
│   │   ├── VM-1101  Objective lens ← L2 replaceable
│   │   ├── VM-1102  Lens barrel
│   │   └── VM-1103  Retaining ring
│   ├── VM-1200  CMOS Sensor ← L3 replaceable
│   ├── VM-1201  Flex cable CSI-2 ← L3 replaceable
│   ├── VM-1202  Sensor mount screws (×4)
│   ├── VM-1203  Nylon washers (×4)
│   └── VM-1204  Alignment shim set ← L3 calibration
│
├── VM-2000  SA-02 Compute Module ($47)
│   ├── VM-2101  Jetson Orin Nano SoC ← L3 (BGA)
│   ├── VM-2102  Thermal pad ← L3 replaceable
│   ├── VM-2103  eMMC flash 32GB ← L3
│   └── VM-2104  LPDDR4 RAM 4GB ← L3
│
├── VM-3000  SA-03 Display Module ($39) ← L3 replaceable as LRU
│   ├── VM-3101  OLED micro-display ← L3
│   ├── VM-3102  Beam-splitter BK7 ← L3
│   ├── VM-3103  Relay lens ← L3
│   ├── VM-3104  Flex cable DSI ← L3
│   ├── VM-3105  UV-cure adhesive ← L3 (irreversible)
│   ├── VM-3106  Display mount bracket
│   ├── VM-3107  Mount screws (×2)
│   └── VM-3108  Nylon washers (×2)
│
├── VM-4000  SA-04 Main PCB ($25) ← L3 replaceable as LRU
│   ├── VM-4101  PCB bare board
│   ├── VM-4102  BLE module (nRF52840)
│   ├── VM-4103  USB-C connector
│   ├── VM-4104  Power regulator
│   ├── VM-4105  Battery protection IC
│   ├── VM-4106  ZIF connectors (×2)
│   ├── VM-4107  Passives kit (~50 pcs)
│   ├── VM-4108  Status LED RGB
│   ├── VM-4109  Power button
│   ├── VM-4110  Conformal coating
│   ├── VM-4111  Battery contacts ← L2 inspect / L3 replace
│   └── VM-4114  BLE antenna
│
├── VM-5000  SA-05 Housing ($17)
│   ├── VM-5101  Upper shell ← L3 replaceable
│   ├── VM-5201  Lower shell ← L3 replaceable
│   ├── VM-5202  O-ring seal ← L2 replaceable
│   ├── VM-5301  Optical bench ← L3 replaceable
│   ├── VM-5401  Heat spreader ← L3
│   ├── VM-5402  Thermal pad (housing) ← L3
│   ├── VM-5501  Picatinny clamp ← L3 replaceable
│   ├── VM-5502  MoS₂ dry film ← L2 re-apply
│   ├── VM-5503  Cross-bolt M6 ← L2 replaceable
│   ├── VM-5601  Battery door ← L3 replaceable
│   ├── VM-5602  Battery door gasket ← L2 replaceable
│   └── VM-5701  Housing screws (×4) ← L2
│
├── VM-6000  SA-06 Battery Pack ($9)
│   ├── VM-6101  21700 Li-ion cell ← L1 replaceable (tool-free)
│   ├── VM-6102  Battery contacts ← L2 inspect / L3 replace
│   └── VM-6105  Spare cell ← L1
│
└── VM-7000  ACC-01 Accessories ($4)
    ├── VM-7101  USB-C cable ← L2 replaceable
    ├── VM-7102  Lens cloth ← L1 replaceable
    ├── VM-7103  T10 Torx key
    ├── VM-7106  Anti-seize sachet ← L2 consumable
    └── VM-7107  Witness mark paint pen ← L2 consumable
```

---

*Kết thúc tài liệu — Hướng dẫn Bảo trì V-SMASH-M v1.0*
*Generated per ANQP B5 spec. Sources: BOM (P33), FMEA (P26), DfX (P25), B4 User Manual, B3 Process Plan.*
*All maintenance levels (L1/L2/L3) traced to DfMaint analysis. All spare parts cross-referenced to FMEA failure modes. MTTR estimates per procedure.*
