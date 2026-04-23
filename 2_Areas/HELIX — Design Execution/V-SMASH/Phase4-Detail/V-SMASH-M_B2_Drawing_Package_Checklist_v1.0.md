---
project: V-SMASH-M
phase: 4
type: drawing-checklist
artifact: B2
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
classification: UNCLASSIFIED
language: Vietnamese primary / English technical terms
inputs:
  - V-SMASH-M_BOM_v1.0.md (P33 — 71 parts, 6 SA)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (23 steps)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (P23)
  - Phase5_ANQP_Vietnam.md (B2 spec)
  - TCVN 8-series (Technical drawing standards)
purpose: Danh mục 51 bản vẽ kỹ thuật + checklist đóng dấu T/I/A/B theo qui định quân sự VN
---

# B2 — DANH MỤC BẢN VẼ THIẾT KẾ & CHECKLIST NGHIỆM THU
# Design Drawing Package & Acceptance Checklist — V-SMASH-M

> **Mã sản phẩm:** VM-0000
> **Phiên bản:** 1.0
> **Ngày:** 2026-02-23
> **Mục đích:** Liệt kê toàn bộ bản vẽ cần thiết cho hồ sơ thiết kế kỹ thuật V-SMASH-M, đảm bảo đủ điều kiện đóng dấu **T / I / A / B** theo qui định quân sự Việt Nam (phân loại theo giai đoạn sản xuất).

---

## MỤC LỤC

1. [Hệ thống Dấu T/I/A/B — Phân loại Giai đoạn Sản xuất](#phần-1--hệ-thống-dấu-tiab--phân-loại-giai-đoạn-sản-xuất)
2. [Qui định Khung tên & Chữ ký Duyệt](#phần-2--qui-định-khung-tên--chữ-ký-duyệt)
3. [Danh mục Bản vẽ Tổng hợp](#phần-3--danh-mục-bản-vẽ-tổng-hợp)
4. [Chi tiết từng Bản vẽ theo Cụm](#phần-4--chi-tiết-từng-bản-vẽ-theo-cụm)
5. [Bản vẽ Điện / Điện tử](#phần-5--bản-vẽ-điện--điện-tử)
6. [Bản vẽ Quang học](#phần-6--bản-vẽ-quang-học)
7. [Checklist Đóng dấu theo Giai đoạn T/I/A/B](#phần-7--checklist-đóng-dấu-theo-giai-đoạn-tiab)
8. [Tiêu chuẩn Áp dụng](#phần-8--tiêu-chuẩn-áp-dụng)

---

## PHẦN 1 — HỆ THỐNG DẤU T/I/A/B — PHÂN LOẠI GIAI ĐOẠN SẢN XUẤT

### 1.1 — Định nghĩa Bốn loại Dấu

Theo qui định quân sự Việt Nam, hồ sơ thiết kế kỹ thuật được phân loại theo **giai đoạn sản xuất** bằng hệ thống dấu T/I/A/B. Mỗi giai đoạn yêu cầu mức độ hoàn thiện hồ sơ khác nhau:

| Dấu | Tên đầy đủ | Giai đoạn | Mục đích | Số lượng sản phẩm |
|-----|-----------|-----------|---------|-------------------|
| **T** | Thiết kế kỹ thuật | Thiết kế | Phê duyệt thiết kế, cho phép chế tạo mẫu thử | 0 (hồ sơ only) |
| **I** | Sản xuất đơn chiếc | Chế thử / Prototype | Chế tạo 1–3 mẫu thử, thử nghiệm, đánh giá | 1–3 chiếc |
| **A** | Sản xuất loạt O (loạt thử) | Pilot batch / Series 0 | Sản xuất loạt nhỏ để nghiệm thu, hiệu chỉnh quy trình | 5–20 chiếc (tuỳ sản phẩm) |
| **B** | Sản xuất hàng loạt | Mass production | Sản xuất số lượng lớn theo hợp đồng | Theo đơn hàng |

### 1.2 — Lộ trình Đóng dấu V-SMASH-M

```
DẤU T (Thiết kế)              DẤU I (Đơn chiếc)           DẤU A (Loạt O)              DẤU B (Hàng loạt)
──────────────────────────     ──────────────────────────   ──────────────────────────   ──────────────────────────
Hồ sơ thiết kế đủ bộ          T + kết quả thử nghiệm      I + hoàn thiện QT SX         A + hồ sơ SX hàng loạt
Bản vẽ đúng kỹ thuật           Biên bản thử nghiệm mẫu     B3 Process Plan cập nhật     Biên bản NTKT hàng loạt
Tính toán kiểm nghiệm         Biên bản hiệu chỉnh          FAI (First Article)          QC specs final
BOM + DMKTKT đầy đủ            Bản vẽ cập nhật theo TN      SPC data / CPK              Tooling chính thức
                               B1 YCKT xác nhận             Biên bản NTKT loạt O         Đóng gói / bao bì final
──────────────────────────     ──────────────────────────   ──────────────────────────   ──────────────────────────
        Phase 4 ◄──────              Prototype ◄──────          Pilot batch ◄──────          Production ◄──────
```

### 1.3 — Yêu cầu Hồ sơ theo Từng Dấu

#### Dấu T — Thiết kế Kỹ thuật

Đây là mức **V-SMASH-M hiện tại đang hướng tới** (Phase 4 output). Yêu cầu:

| STT | Hồ sơ | Bao gồm | Trạng thái V-SMASH-M |
|-----|-------|---------|---------------------|
| 1 | Bản vẽ thiết kế đầy đủ | 51 bản vẽ (§3) — tất cả có chữ ký T/K/D | ⬜ Chưa vẽ (checklist này) |
| 2 | Bảng kê vật tư (BOM / ĐMKTKT) | B6 — 71 items, $202/unit | ✅ B6 v1.0 |
| 3 | Yêu cầu kỹ thuật (YCKT) | B1 — 16 categories, ≥80% quantified | ✅ B1 v1.0 |
| 4 | Qui trình công nghệ | B3 — 23 steps, 19 workstations | ✅ B3 v1.0 |
| 5 | Tính toán kiểm nghiệm | FMEA, DfX, VDI 2225, stress analysis | ✅ Phase 2–3 artifacts |
| 6 | Hướng dẫn sử dụng | B4 — 11 sections | ✅ B4 v1.0 |
| 7 | Hướng dẫn bảo trì | B5 — 11 sections + 10 CM procedures | ✅ B5 v1.0 |

> **Để đóng dấu T:** Hoàn thiện 51 bản vẽ + hội đồng phê duyệt thiết kế ký.

#### Dấu I — Sản xuất Đơn chiếc (Prototype)

Yêu cầu bổ sung so với dấu T:

| STT | Hồ sơ bổ sung | Mô tả |
|-----|--------------|-------|
| 1 | Biên bản thử nghiệm mẫu (Test Report) | Kết quả thử nghiệm 1–3 mẫu thử theo B1 YCKT |
| 2 | Bản vẽ cập nhật theo thử nghiệm | Sửa kích thước, dung sai, vật liệu nếu TN phát hiện lỗi → Rev B |
| 3 | Biên bản hiệu chỉnh thiết kế (ECN log) | Ghi lại mọi thay đổi từ dấu T → dấu I |
| 4 | Biên bản nghiệm thu mẫu | Hội đồng đánh giá mẫu thử đạt/không đạt |
| 5 | Xác nhận B1 YCKT | Kết quả TN mapping lại với YCKT — mục nào đạt/chưa đạt |

> **Để đóng dấu I:** Dấu T + chế tạo thành công ≥1 mẫu + hội đồng nghiệm thu mẫu ký.

#### Dấu A — Sản xuất Loạt O (Pilot Batch)

Yêu cầu bổ sung so với dấu I:

| STT | Hồ sơ bổ sung | Mô tả |
|-----|--------------|-------|
| 1 | B3 cập nhật (Process Plan final) | Qui trình SX cập nhật sau kinh nghiệm chế thử — cycle time, tooling |
| 2 | FAI Report (First Article Inspection) | Đo 100% kích thước trên 1 sản phẩm loạt O — so khớp bản vẽ |
| 3 | Biên bản kiểm tra chất lượng loạt O | SPC data, Cpk cho kích thước critical (VM-5301 register bore, VM-5501 rail) |
| 4 | Bản vẽ cập nhật Rev C (nếu có) | Sửa lần cuối sau loạt O |
| 5 | Biên bản nghiệm thu loạt O | Hội đồng NTKT loạt O ký |
| 6 | Hồ sơ jig/đồ gá chính thức | VM-PR05, VM-PR11 xác nhận hoạt động ổn định |

> **Để đóng dấu A:** Dấu I + sản xuất loạt O thành công + FAI + hội đồng NTKT ký.

#### Dấu B — Sản xuất Hàng loạt

Yêu cầu bổ sung so với dấu A:

| STT | Hồ sơ bổ sung | Mô tả |
|-----|--------------|-------|
| 1 | Hồ sơ SX hàng loạt | Bản vẽ final (Rev D hoặc release), frozen — mọi thay đổi qua ECN chính thức |
| 2 | QC spec final | Incoming inspection, in-process, final inspection specs |
| 3 | Biên bản NTKT hàng loạt | Hội đồng NTKT cấp phép SX hàng loạt |
| 4 | Tooling chính thức | Khuôn ép, jig, fixture — bản production (không còn prototype tooling) |
| 5 | Bao bì / đóng gói chính thức | VM-8104 final, bao gồm phụ kiện (VM-7000) |
| 6 | Hồ sơ năng lực SX | Nhà máy, dây chuyền, nhân lực được phê duyệt |

> **Để đóng dấu B:** Dấu A + hội đồng NTKT hàng loạt ký + QC specs frozen + tooling chính thức.

### 1.4 — Vị trí V-SMASH-M hiện tại

```
    ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
    │  DẤU T   │────▶│  DẤU I   │────▶│  DẤU A   │────▶│  DẤU B   │
    │ Thiết kế │     │ Đơn chiếc│     │ Loạt O   │     │ Hàng loạt│
    └──────────┘     └──────────┘     └──────────┘     └──────────┘
         ▲
         │
    ╔════╧════╗
    ║ ĐANG Ở  ║  B1 ✅ B3 ✅ B4 ✅ B5 ✅ B6 ✅
    ║ ĐÂY     ║  B2 ⬜ ← CẦN HOÀN THIỆN 51 BẢN VẼ
    ╚═════════╝
```

**Kết luận:** V-SMASH-M đang hoàn thiện hồ sơ cho **dấu T**. Sau khi hoàn thành 51 bản vẽ (B2) + hội đồng phê duyệt → đủ điều kiện đóng dấu T. Các dấu I/A/B sẽ bổ sung dần theo tiến trình chế thử và sản xuất.

---

## PHẦN 2 — QUI ĐỊNH KHUNG TÊN & CHỮ KÝ DUYỆT

### 2.1 — Khung tên Bản vẽ (Title Block) theo TCVN 3821

Mỗi bản vẽ phải có khung tên đầy đủ các ô sau:

```
╔══════════════════════════════════════════════════════════════════╗
║                    [TÊN ĐƠN VỊ CHỦ QUẢN]                       ║
║                    Workshop X — Hà Nội                           ║
╠══════════════════════════════════════════════════════════════════╣
║ Tên sản phẩm: V-SMASH-M (Kính ngắm AI cỡ nhỏ)                 ║
║ Tên chi tiết: ________________________________________          ║
║ Mã bản vẽ:    VM-XXXX-DWG-YYY   Rev: ___                       ║
╠══════════╤═══════════════╤═══════════╤══════════════════════════╣
║ Chức năng │ Họ tên        │ Chữ ký    │ Ngày                    ║
╠══════════╪═══════════════╪═══════════╪══════════════════════════╣
║ THIẾT KẾ │ _____________ │ _________ │ ____/____/________      ║
║ (T)      │               │           │                          ║
╠══════════╪═══════════════╪═══════════╪══════════════════════════╣
║ KIỂM TRA │ _____________ │ _________ │ ____/____/________      ║
║ (K)      │               │           │                          ║
╠══════════╪═══════════════╪═══════════╪══════════════════════════╣
║ DUYỆT    │ _____________ │ _________ │ ____/____/________      ║
║ (D)      │               │           │                          ║
╠══════════╧═══════════════╧═══════════╧══════════════════════════╣
║ Tỷ lệ: _____  │ Khổ giấy: _____  │ Tờ: ___/___              ║
║ Vật liệu: ________________________  │ Khối lượng: _____ g     ║
║ Dung sai chung: TCVN 2244 cấp ___ (ISO 2768-___)              ║
╚══════════════════════════════════════════════════════════════════╝
```

### 2.2 — Chuỗi Phê duyệt (Approval Chain)

| Ký hiệu | Vai trò | Trách nhiệm | Người thực hiện |
|----------|---------|-------------|-----------------|
| **T** — Thiết kế | Người vẽ / thiết kế | Đảm bảo đúng kỹ thuật, đúng kích thước, đúng vật liệu | Kỹ sư thiết kế (WX) |
| **K** — Kiểm tra | Người kiểm tra | Kiểm tra lỗi bản vẽ, đối chiếu với YCKT (B1), kiểm tra dung sai, tiêu chuẩn | Kỹ sư kiểm tra / QC (WX) — **PHẢI khác người thiết kế** |
| **D** — Duyệt | Người phê duyệt | Phê duyệt phát hành bản vẽ cho sản xuất | Trưởng phòng thiết kế / Giám đốc kỹ thuật |

> **Quy tắc bắt buộc:**
> - T ≠ K (người thiết kế KHÔNG được tự kiểm tra bản vẽ của mình)
> - Mỗi bản vẽ phải có đủ 3 chữ ký T/K/D trước khi phát hành
> - Bản vẽ chưa có đủ chữ ký = **BẢN NHÁP**, không được dùng cho sản xuất
> - Mọi thay đổi sau khi đóng dấu D → phải qua quy trình **ECN (Engineering Change Notice)**

### 2.3 — Hệ thống Đánh số Bản vẽ

```
VM - XXXX - DWG - YYY - Rev Z
│    │       │     │      │
│    │       │     │      └── Phiên bản (A, B, C...)
│    │       │     └── Số thứ tự bản vẽ trong cụm (001, 002...)
│    │       └── Loại: DWG (bản vẽ), SCH (sơ đồ nguyên lý), PCB (layout)
│    └── Mã chi tiết BOM (1000=SA-01, 2000=SA-02, ...)
└── Prefix sản phẩm (V-SMASH-M)
```

**Ví dụ:** `VM-5301-DWG-001-RevA` = Bản vẽ chi tiết #001 của Optical Bench (VM-5301), phiên bản A.

---

## PHẦN 3 — DANH MỤC BẢN VẼ TỔNG HỢP

### 3.1 — Tổng quan Số lượng Bản vẽ

| Loại bản vẽ | Số lượng | Ghi chú |
|-------------|----------|---------|
| Bản vẽ lắp tổng thể (General Assembly) | 1 | VM-0000 end item |
| Bản vẽ lắp cụm (Sub-Assembly) | 6 | SA-01 → SA-06 |
| Bản vẽ lắp cụm con (Sub-Sub-Assembly) | 7 | Lens, Housing Upper/Lower, Optical Bench, Thermal, Clamp, Battery Door |
| Bản vẽ chi tiết (Detail Drawings) | ~28 | Chỉ cho chi tiết gia công tại VN + chi tiết thiết kế riêng |
| Sơ đồ nguyên lý điện (Schematic) | 2 | Main PCB + Battery/Power |
| Bản vẽ mạch in (PCB Layout) | 2 | Top/Bottom + Layer stack |
| Sơ đồ cáp / kết nối (Wiring Diagram) | 1 | Flex cables + connectors |
| Bản vẽ quang học (Optical Layout) | 2 | Sensor path + Display path |
| Bản vẽ bao bì (Packaging) | 1 | Hộp + foam insert |
| **Tổng cộng** | **~50** | |

### 3.2 — Danh mục Chính (Master Drawing List)

| STT | Mã bản vẽ | Tên bản vẽ | Loại | Khổ | Ưu tiên |
|-----|-----------|-----------|------|-----|---------|
| **TỔNG THỂ** |
| 1 | VM-0000-DWG-001 | Bản vẽ lắp tổng thể V-SMASH-M (General Assembly) | Lắp | A2 | CAO |
| 2 | VM-0000-DWG-002 | Bản vẽ phân rã (Exploded View) | Lắp | A2 | CAO |
| 3 | VM-0000-DWG-003 | Bản vẽ kích thước bao ngoài (Outline / Envelope) | Kích thước | A3 | CAO |
| **SA-01 — SENSOR MODULE** |
| 4 | VM-1000-DWG-001 | Bản vẽ lắp SA-01 Sensor Module | Lắp | A3 | CAO |
| 5 | VM-1100-DWG-001 | Bản vẽ lắp cụm Lens Assembly | Lắp | A3 | CAO |
| 6 | VM-1102-DWG-001 | Bản vẽ chi tiết Lens Barrel / Mount Ring | Chi tiết | A4 | CAO |
| 7 | VM-1103-DWG-001 | Bản vẽ chi tiết Lens Retaining Ring | Chi tiết | A4 | TB |
| 8 | VM-1204-DWG-001 | Bản vẽ chi tiết Alignment Shim Set | Chi tiết | A4 | TB |
| **SA-02 — COMPUTE MODULE** |
| 9 | VM-2000-DWG-001 | Bản vẽ lắp SA-02 Compute Module | Lắp | A3 | CAO |
| **SA-03 — DISPLAY MODULE** |
| 10 | VM-3000-DWG-001 | Bản vẽ lắp SA-03 Display Module | Lắp | A3 | CAO |
| 11 | VM-3106-DWG-001 | Bản vẽ chi tiết Display Mount Bracket | Chi tiết | A4 | CAO |
| **SA-04 — MAIN PCB** |
| 12 | VM-4000-DWG-001 | Bản vẽ lắp SA-04 Main PCB Assembly | Lắp | A3 | CAO |
| 13 | VM-4000-SCH-001 | Sơ đồ nguyên lý Main PCB (Schematic) | Sơ đồ | A2 | CAO |
| 14 | VM-4000-SCH-002 | Sơ đồ nguyên lý Power Management | Sơ đồ | A3 | CAO |
| 15 | VM-4000-PCB-001 | Bản vẽ PCB Layout (Top + Bottom + Layers) | PCB | A2 | CAO |
| 16 | VM-4000-PCB-002 | Bản vẽ PCB Fabrication (layer stack, drill, mask) | PCB | A3 | CAO |
| 17 | VM-4101-DWG-001 | Bản vẽ chi tiết PCB Bare Board (outline, mount holes) | Chi tiết | A4 | TB |
| **SA-05 — HOUSING ASSEMBLY** |
| 18 | VM-5000-DWG-001 | Bản vẽ lắp SA-05 Housing Assembly | Lắp | A2 | CAO |
| 19 | VM-5100-DWG-001 | Bản vẽ lắp Housing Upper Shell Sub-Assy | Lắp | A3 | TB |
| 20 | VM-5101-DWG-001 | Bản vẽ chi tiết Upper Shell (injection mold) | Chi tiết | A3 | CAO |
| 21 | VM-5200-DWG-001 | Bản vẽ lắp Housing Lower Shell Sub-Assy | Lắp | A3 | TB |
| 22 | VM-5201-DWG-001 | Bản vẽ chi tiết Lower Shell (injection mold + O-ring groove) | Chi tiết | A3 | CAO |
| 23 | VM-5300-DWG-001 | Bản vẽ lắp Optical Bench Sub-Assy | Lắp | A3 | CAO |
| 24 | VM-5301-DWG-001 | Bản vẽ chi tiết Optical Bench Insert (AA7075-T6, CNC) | Chi tiết | A3 | **RẤT CAO** |
| 25 | VM-5400-DWG-001 | Bản vẽ lắp Thermal Management Sub-Assy | Lắp | A4 | TB |
| 26 | VM-5401-DWG-001 | Bản vẽ chi tiết Heat Spreader Plate (AA6061-T6, CNC) | Chi tiết | A4 | TB |
| 27 | VM-5500-DWG-001 | Bản vẽ lắp Picatinny Clamp Sub-Assy | Lắp | A3 | CAO |
| 28 | VM-5501-DWG-001 | Bản vẽ chi tiết Picatinny Clamp Body (AA7075-T6, CNC) | Chi tiết | A3 | **RẤT CAO** |
| 29 | VM-5502-DWG-001 | Bản vẽ chi tiết/spec MoS₂ Dry Film (process spec) | Spec | A4 | TB |
| 30 | VM-5504-DWG-001 | Bản vẽ chi tiết Flanged Bushing | Chi tiết | A4 | TB |
| 31 | VM-5600-DWG-001 | Bản vẽ lắp Battery Door Sub-Assy | Lắp | A4 | TB |
| 32 | VM-5601-DWG-001 | Bản vẽ chi tiết Battery Door (injection mold) | Chi tiết | A3 | CAO |
| 33 | VM-5602-DWG-001 | Bản vẽ chi tiết / spec Silicone Gasket | Chi tiết | A4 | TB |
| 34 | VM-5603-DWG-001 | Bản vẽ chi tiết Battery Door Hinge Pin | Chi tiết | A4 | THẤP |
| **SA-06 — BATTERY PACK** |
| 35 | VM-6000-DWG-001 | Bản vẽ lắp SA-06 Battery Pack | Lắp | A4 | TB |
| **ACCESSORIES** |
| 36 | VM-7000-DWG-001 | Bản vẽ bộ phụ kiện (Accessories Kit Drawing) | Lắp | A4 | THẤP |
| 37 | VM-7105-DWG-001 | Bản vẽ / spec Protective Pouch (MOLLE) | Spec | A4 | THẤP |
| **QUANG HỌC** |
| 38 | VM-0000-OPT-001 | Sơ đồ quang học — Đường đi ánh sáng cảm biến (Sensor Optical Path) | Quang | A3 | CAO |
| 39 | VM-0000-OPT-002 | Sơ đồ quang học — Đường đi ánh sáng hiển thị (Display Optical Path) | Quang | A3 | CAO |
| 40 | VM-1101-OPT-001 | Spec quang học Objective Lens (M12, AR coating) | Spec | A4 | CAO |
| 41 | VM-3102-OPT-001 | Spec quang học Beam-splitter (BK7, 50R/50T) | Spec | A4 | CAO |
| 42 | VM-3103-OPT-001 | Spec quang học Relay Lens (collimating) | Spec | A4 | CAO |
| **ĐIỆN / CÁP** |
| 43 | VM-0000-WIR-001 | Sơ đồ đấu nối cáp tổng thể (Wiring Diagram) | Sơ đồ | A3 | CAO |
| 44 | VM-1201-DWG-001 | Spec Flex Cable CSI-2 (pinout, length, ZIF) | Spec | A4 | TB |
| 45 | VM-3104-DWG-001 | Spec Flex Cable DSI (pinout, length, ZIF) | Spec | A4 | TB |
| **BAO BÌ** |
| 46 | VM-8104-DWG-001 | Bản vẽ hộp đóng gói + foam insert | Chi tiết | A3 | THẤP |
| **JIG / ĐỒ GÁ (Production Tooling)** |
| 47 | VM-PR05-DWG-001 | Bản vẽ jig PR-05 (Sensor Alignment) | Chi tiết | A3 | CAO |
| 48 | VM-PR11-DWG-001 | Bản vẽ jig PR-11 (Bore-sight) | Chi tiết | A3 | CAO |
| 49 | VM-PR01-DWG-001 | Bản vẽ jig lắp ráp Housing (nếu cần) | Chi tiết | A3 | TB |
| **NHÃN / MÁC** |
| 50 | VM-5102-DWG-001 | Bản vẽ pad-print / marking layout (upper shell) | Chi tiết | A4 | TB |
| 51 | VM-6103-DWG-001 | Bản vẽ nhãn cực pin (Battery Polarity Label) | Chi tiết | A4 | THẤP |

### 3.3 — Rủi ro Cung ứng trên Bản vẽ Lắp (Supply Chain Risk)

Các bản vẽ lắp cụm chứa chi tiết single-source hoặc export-review cần ghi chú rủi ro trên bản vẽ (cross-ref B5 §8.3):

| Bản vẽ lắp | Chi tiết rủi ro | Loại rủi ro | Hành động |
|------------|----------------|-------------|-----------|
| VM-1000-DWG-001 (SA-01) | VM-1200 CMOS sensor | ⚠ LONG-LEAD (8–12 tuần) | Pre-order trước khi phát lệnh SX |
| VM-2000-DWG-001 (SA-02) | VM-2101 Jetson Orin Nano | ⚠ SINGLE-SOURCE + EXPORT-REVIEW | Xác nhận giấy phép xuất khẩu trước khi SX loạt |
| VM-3000-DWG-001 (SA-03) | VM-3101 OLED micro-display | ⚠ SINGLE-SOURCE | Tìm second source trước dấu B |
| VM-4000-SCH-001 (SA-04) | VM-4102 nRF52840 BLE | — (multi-source) | — |

> **Quy tắc:** Trên bản vẽ lắp, ghi chú "⚠ SINGLE-SOURCE — xem B5 §8.3" bên cạnh balloon number của chi tiết rủi ro. Đảm bảo dấu A/B không phát lệnh SX khi chưa giải quyết rủi ro cung ứng.

---

## PHẦN 4 — CHI TIẾT TỪNG BẢN VẼ THEO CỤM

### 4.1 — Bản vẽ Tổng thể (VM-0000)

**VM-0000-DWG-001: Bản vẽ Lắp Tổng thể**

| Yêu cầu | Nội dung |
|----------|---------|
| Các hình chiếu | Đứng, bằng, cạnh (tối thiểu 3 hình chiếu) |
| Mặt cắt | Mặt cắt dọc qua trục quang (bắt buộc — thể hiện đường đi ánh sáng) |
| Bảng kê | Bảng kê chi tiết (parts list) cross-ref BOM VM-0000 |
| Kích thước bao | 120×50×60mm ± dung sai |
| Khối lượng | 370g (ghi trên khung tên) |
| Ghi chú lắp ráp | Trình tự lắp chính (ref B3), mô-men siết, chất keo |
| Tiêu chuẩn | Ref TCVN 3826 (Assembly drawings), TCVN 3824 (Sectional views) |

**VM-0000-DWG-002: Bản vẽ Phân rã (Exploded View)**

- 3D isometric exploded view
- Mũi tên chỉ hướng lắp ráp
- Balloon numbers → cross-ref bảng kê BOM
- Đặc biệt hữu ích cho B5 Maintenance Manual (đính kèm)

**VM-0000-DWG-003: Bản vẽ Kích thước Bao ngoài (Envelope)**

- Kích thước tổng thể: bao ngoài cho khách hàng
- Vị trí giao diện Picatinny (MIL-STD-1913 profile)
- Vị trí cổng USB-C, nút nguồn, LED, nắp pin
- Eye relief range (25–75mm)
- Trường nhìn (FOV) nếu áp dụng

### 4.2 — Chi tiết Gia công CNC (Ưu tiên RẤT CAO)

Các chi tiết này gia công tại Việt Nam — bản vẽ chi tiết là **bắt buộc** để phát lệnh sản xuất.

**VM-5301-DWG-001: Optical Bench Insert — Chi tiết quan trọng nhất**

| Yêu cầu | Nội dung |
|----------|---------|
| Vật liệu | AA7075-T6 per AMS-QQ-A-250/12 |
| Kích thước tổng | 80×25×5mm |
| Dung sai quan trọng | Register bore: H7 (ghi rõ Ø + dung sai) |
| Độ nhám | Ra ≤1.6μm (bearing faces), Ra ≤3.2μm (mặt khác) |
| Fillet | ≥0.5mm tại lỗ vít (bắt buộc — F19 FMEA fatigue crack) |
| Edge break | ≥0.3mm toàn bộ cạnh sắc |
| Xử lý bề mặt | MIL-A-8625 Type III hard anodize ≥50μm, sealed |
| Ghi chú đặc biệt | "NO SHARP EDGES AT BOLT HOLES — FILLET R≥0.5mm MANDATORY (FMEA F19 S=9)" |
| Vùng kiểm tra | GD&T cho register bore (position, concentricity), flatness bearing faces |

**VM-5501-DWG-001: Picatinny Clamp Body — Chi tiết quan trọng thứ 2**

| Yêu cầu | Nội dung |
|----------|---------|
| Vật liệu | AA7075-T6 per AMS-QQ-A-250/12 |
| Profile | MIL-STD-1913 Picatinny — khe 21.2±0.1mm |
| Recoil lug | 8mm wide, ghi rõ vị trí + dung sai |
| Độ nhám | Ra ≤1.6μm (bearing faces) |
| Xử lý bề mặt | MIL-A-8625 Type III ≥50μm |
| Lỗ cross-bolt | Ø cho bushing VM-5504, pressed fit |
| Ghi chú | "APPLY MoS₂ DRY FILM TO RECOIL LUG BEARING FACE (VM-5502)" |

**VM-5401-DWG-001: Heat Spreader Plate**

| Yêu cầu | Nội dung |
|----------|---------|
| Vật liệu | AA6061-T6 (167 W/mK) |
| Kích thước | 30×30×2mm |
| Xử lý bề mặt | **KHÔNG anodize** (ghi rõ — thermal penalty) |
| Độ nhám | Ra ≤3.2μm (contact faces cho thermal pad) |
| Edge break | ≥0.3mm |

### 4.3 — Chi tiết Nhựa Ép phun (Injection Mold)

**VM-5101-DWG-001: Upper Shell**

| Yêu cầu | Nội dung |
|----------|---------|
| Vật liệu | PA6-GF30, UV-stabilized, black (Zytel 70G30HSL BK039 equiv.) |
| Bề dày vách | 2.0mm chung, 3.0mm tại bosses |
| Vây tản nhiệt | 8 fins 1.5×5×40mm (HD-04) — ghi rõ vị trí + kích thước |
| Texture | Matte VDI 24 |
| Draft angle | ≥1° (ghi trên bản vẽ hoặc ghi chú chung) |
| Sink marks | Tối đa cho phép (ghi nếu có yêu cầu cosmetic) |

**VM-5201-DWG-001: Lower Shell**

| Yêu cầu bổ sung | Nội dung |
|------------------|---------|
| Rãnh O-ring | Per Parker handbook — ghi rõ kích thước rãnh, dung sai, độ nhám đáy rãnh |
| Brass inserts | 4× lỗ cho VM-5203 (heat-set M2.5), ghi Ø + depth |
| IP67 mating surface | Flatness requirement cho mặt ghép với upper shell |

**VM-5601-DWG-001: Battery Door**

| Yêu cầu bổ sung | Nội dung |
|------------------|---------|
| Detent mechanism | Lực giữ ≥5N (MIL-STD-810H 514.8) |
| Rãnh gasket | Cho VM-5602 silicone gasket |
| Hinge interface | Cho VM-5603 hinge pin |
| Tool-free | Ghi chú: "OPERATOR TOOL-FREE OPEN ≤60s" |

---

## PHẦN 5 — BẢN VẼ ĐIỆN / ĐIỆN TỬ

### 5.1 — Sơ đồ Nguyên lý (Schematic)

**VM-4000-SCH-001: Main PCB Schematic**

Phải bao gồm:
- Kết nối SoC Jetson Orin Nano (VM-2101) — MIPI CSI-2, MIPI DSI, USB, GPIO, power
- BLE module nRF52840 (VM-4102) — SPI/UART, antenna matching
- Power management: buck converter 5V/3.3V (VM-4104)
- Battery protection IC (VM-4105) — OV/UV/OC/SC
- ZIF connectors (VM-4106) — CSI-2 + DSI pinout
- USB-C connector (VM-4103) — data + power
- Status LED RGB (VM-4108)
- Power button (VM-4109)
- Passive components (VM-4107) — decoupling caps, pull-ups, etc.
- Net names consistent with PCB layout
- Page breaks theo function block (Power / Compute / Display / Sensor / BLE / UI)

**VM-4000-SCH-002: Power Management Detail**

- Battery → protection IC → regulator → SoC/peripherals
- Thermal throttle control signals
- Battery voltage sensing (for firmware battery level)
- USB-C PD negotiation (5V/2A)

### 5.2 — PCB Layout

**VM-4000-PCB-001: PCB Layout — Component Placement**

| Layer | Nội dung |
|-------|---------|
| Top | Component placement, silkscreen, solder mask |
| Bottom | Component placement (if double-sided), silkscreen |
| Inner 1 | Ground plane (EMC — IEC 61000-4-3) |
| Inner 2 | Power plane |
| Drill | Drill chart, via locations |

**VM-4000-PCB-002: PCB Fabrication Drawing**

- Layer stack-up (4-layer, FR-4, 1.6mm, ENIG)
- Board outline + mounting holes (match VM-5801 standoffs)
- Impedance control (if required for MIPI lanes)
- Conformal coating keep-out zones (connectors, test points)
- Panelization (if applicable for production)
- IPC-2221 / IPC-6012 Class 2 compliance note

### 5.3 — Sơ đồ Đấu nối Cáp

**VM-0000-WIR-001: Wiring Diagram**

- Flex cable CSI-2 (VM-1201): PCB ZIF → Sensor module — pinout, length, bend radius
- Flex cable DSI (VM-3104): PCB ZIF → OLED module — pinout, length, bend radius
- Battery contacts (VM-6102/4111): polarity, spring placement
- Internal routing path (avoid thermal zones, avoid sharp bends)
- Connector mating table: which connector plugs into which socket

---

## PHẦN 6 — BẢN VẼ QUANG HỌC

### 6.1 — Sơ đồ Quang học

**VM-0000-OPT-001: Sensor Optical Path**

- Đường đi ánh sáng: Scene → Beam-splitter (50% transmit) → Objective Lens → CMOS Sensor
- Focal length, f-number, FOV
- Working distance / object distance range
- Sensor plane position relative to optical bench register bore

**VM-0000-OPT-002: Display Optical Path**

- Đường đi ánh sáng: OLED → Relay Lens (collimate) → Beam-splitter (50% reflect) → Eye
- Eye box size, eye relief (25–75mm per VM-H05)
- OLED illumination uniformity requirement
- Bore-sight alignment axis definition (reference for PR-11 jig)

### 6.2 — Optical Component Specs

**VM-1101-OPT-001: Objective Lens Spec**

| Thông số | Giá trị |
|----------|---------|
| Mount | M12 thread |
| Coating | AR coated (both sides) |
| Surface quality | MIL-O-13830 (scratch-dig: ___/___, ghi khi chọn vendor) |
| Material | Optical glass (specify type khi chọn vendor) |
| Focal length | [TBD — xác định khi hoàn thiện optical design, trước dấu T] |
| f-number | [TBD — xác định khi hoàn thiện optical design, trước dấu T] |

> **Ghi chú TBD:** Focal length, f-number, scratch-dig, và material type phụ thuộc vào optical design final + vendor selection. Các giá trị này **PHẢI được điền trước khi đóng dấu T** — không chấp nhận TBD trên bản vẽ phát hành. Quy trình: optical simulation → vendor RFQ → fill specs → review → release.

**VM-3102-OPT-001: Beam-splitter Spec**

| Thông số | Giá trị |
|----------|---------|
| Kích thước | 15×15×1.5mm |
| Vật liệu | BK7 optical glass |
| Flatness | λ/4 |
| Coating | 50R/50T ±5% @ 450–650nm. AR rear face. |
| Adhesion | MIL-C-675 (tape pull test) |
| Surface quality | MIL-O-13830 (scratch-dig) |
| Thermal cycling | -10°C to +55°C, 100 cycles (per FMEA F11 mitigation) |

---

## PHẦN 7 — CHECKLIST ĐÓNG DẤU THEO GIAI ĐOẠN T/I/A/B

> Mỗi checklist dưới đây là **tích luỹ** — dấu I bao gồm tất cả yêu cầu của dấu T + yêu cầu bổ sung.

### 7.1 — Checklist DẤU T — Thiết kế Kỹ thuật

**Điều kiện:** Hồ sơ thiết kế hoàn chỉnh, chưa chế tạo mẫu.

#### 7.1.1 — Hình thức Bản vẽ (Form Compliance)

| ☐ | Hạng mục | Tiêu chuẩn | Bắt buộc |
|---|----------|-----------|----------|
| ☐ | Tất cả 51 bản vẽ có khung tên đầy đủ | TCVN 3821 | **CÓ** |
| ☐ | Chữ ký T/K/D đầy đủ trên mọi bản vẽ | Nội quy WX | **CÓ** |
| ☐ | T ≠ K (người thiết kế khác người kiểm tra) | Nội quy WX | **CÓ** |
| ☐ | Đánh số bản vẽ theo hệ thống nhất quán | VM-XXXX-DWG-YYY | **CÓ** |
| ☐ | Phiên bản (Rev A) ghi rõ trên mọi bản vẽ | — | **CÓ** |
| ☐ | Khổ giấy đúng (A2/A3/A4 theo danh mục §3) | TCVN 7285 | **CÓ** |
| ☐ | Tỷ lệ ghi rõ (1:1, 1:2, 2:1...) | TCVN 8-1:2005 | **CÓ** |
| ☐ | Đơn vị hệ mét (mm) | TCVN 8-1:2005 | **CÓ** |
| ☐ | Hình chiếu góc thứ 3 (hoặc ghi rõ nếu dùng góc 1) | ISO 128 / TCVN | **CÓ** |
| ☐ | Ký hiệu hình chiếu (projection symbol) trên khung tên | — | **CÓ** |

#### 7.1.2 — Nội dung Kỹ thuật (Technical Content)

| ☐ | Hạng mục | Kiểm tra | Bắt buộc |
|---|----------|---------|----------|
| ☐ | Mọi chi tiết gia công tại VN có bản vẽ chi tiết riêng | 100% local-machined parts | **CÓ** |
| ☐ | Mọi cụm lắp ráp có bản vẽ lắp | 6 SA + 7 sub-sub | **CÓ** |
| ☐ | Dung sai ghi đầy đủ cho mọi kích thước chức năng | H7, ±0.1, v.v. | **CÓ** |
| ☐ | Dung sai chung ghi trên khung tên | TCVN 2244 / ISO 2768 | **CÓ** |
| ☐ | Độ nhám bề mặt ghi cho mặt chức năng | Ra values | **CÓ** |
| ☐ | GD&T cho chi tiết quang học | VM-5301, VM-5501 | **CÓ** |
| ☐ | Vật liệu + tiêu chuẩn vật liệu ghi đầy đủ | AMS, ASTM, TCVN | **CÓ** |
| ☐ | Xử lý bề mặt ghi rõ (anodize, coating, print) | Ghi loại + tiêu chuẩn | **CÓ** |
| ☐ | Mô-men siết ghi trên bản vẽ lắp | 6 loại fastener | **CÓ** |
| ☐ | Chất keo / threadlocker ghi rõ | Vị trí + loại | **CÓ** |
| ☐ | Mặt cắt qua trục quang trên bản vẽ tổng | VM-0000-DWG-001 | **CÓ** |
| ☐ | O-ring groove kích thước đầy đủ | VM-5201 (Parker handbook) | **CÓ** |
| ☐ | Rãnh gasket kích thước đầy đủ | VM-5601 | **CÓ** |
| ☐ | PCB schematic có net names nhất quán với layout | VM-4000-SCH/PCB | **CÓ** |
| ☐ | Pinout flex cable ghi đầy đủ | VM-1201, VM-3104 | **CÓ** |
| ☐ | Bảng kê trên bản vẽ lắp khớp với BOM (B6) | So khớp 71 items | **CÓ** |

#### 7.1.3 — An toàn & FMEA Tracing

| ☐ | Hạng mục | FMEA Ref | Bắt buộc |
|---|----------|---------|----------|
| ☐ | Fillet R≥0.5mm tại lỗ vít optical bench | F19 (S=9) | **CÓ** |
| ☐ | O-ring groove ≥15% compression | F16 (RPN=147) | **CÓ** |
| ☐ | Battery venting path hướng ra rail (không hướng mặt xạ thủ) | F21 (S=10) | **CÓ** |
| ☐ | Polarity marking trong ngăn pin | F21 | **CÓ** |
| ☐ | MoS₂ dry film trên recoil lug | F18 (S=9) | **CÓ** |
| ☐ | Witness mark position ghi trên bản vẽ clamp | F18 | Khuyến nghị |
| ☐ | Conformal coating keep-out zones trên PCB layout | F16 | **CÓ** |
| ☐ | Không có kết nối điện đến cò súng (VM-Y01) | Check 02 HITL | **CÓ** |
| ☐ | UV-cure bond area + tolerance trên bản vẽ SA-03 | F11 (S=9) | **CÓ** |
| ☐ | Bore-sight reference axis definition trên bản vẽ quang | F03, F11 | **CÓ** |

#### 7.1.4 — Chi tiết Mua ngoài (Purchased Parts)

| ☐ | Hạng mục | Áp dụng cho |
|---|----------|------------|
| ☐ | Spec sheet / datasheet lưu trong hồ sơ | VM-2101 (SoC), VM-1200 (CMOS), VM-3101 (OLED), VM-4102 (BLE) |
| ☐ | ICD nếu có giao diện cơ khí/điện riêng | VM-2101 (SoM footprint), VM-3101 (OLED mechanical) |
| ☐ | Incoming inspection spec | VM-3102 (beam-splitter), VM-6101 (battery cell) |
| ☐ | Vendor qualification record (nếu áp dụng) | Anodize vendor, OLED vendor, battery Grade A |

#### 7.1.5 — Hoàn thiện Bộ hồ sơ (Package Completeness)

| ☐ | Hạng mục | Số lượng |
|---|----------|---------|
| ☐ | Danh mục bản vẽ tổng (Master Drawing List — §3.2) | 1 |
| ☐ | Bản vẽ lắp tổng + phân rã + envelope | 3 |
| ☐ | Bản vẽ lắp cụm (SA-01 → SA-06 + sub-sub) | 13 |
| ☐ | Bản vẽ chi tiết (local-machined + injection mold + misc) | ~28 |
| ☐ | Sơ đồ nguyên lý (schematic) | 2 |
| ☐ | PCB layout + fabrication | 2 |
| ☐ | Sơ đồ cáp / đấu nối | 1 |
| ☐ | Sơ đồ + spec quang học | 5 |
| ☐ | Bản vẽ bao bì | 1 |
| ☐ | Bản vẽ jig (PR-05, PR-11) | 2–3 |
| ☐ | Bản vẽ nhãn / marking | 2 |
| ☐ | **Tổng ≥50 bản vẽ** — tất cả có chữ ký T/K/D | |
| ☐ | B1 YCKT, B3 Process Plan, B4 User Manual, B5 Maintenance, B6 ĐMKTKT | 5 tài liệu |
| ☐ | Tính toán kiểm nghiệm (FMEA, DfX, VDI 2225) | Phase 2–3 artifacts |
| ☐ | Bản cứng (in giấy) có đóng dấu đỏ + chữ ký tươi | Theo yêu cầu |
| ☐ | Bản mềm (PDF + CAD native) lưu trữ theo hệ thống ECN | |

> **Kết quả nếu đạt 100%:** Hội đồng phê duyệt thiết kế ký → **ĐÓNG DẤU T** → cho phép chế tạo mẫu thử.

---

### 7.2 — Checklist DẤU I — Sản xuất Đơn chiếc (Prototype)

**Điều kiện:** Dấu T đã đóng + chế tạo 1–3 mẫu thử + thử nghiệm hoàn tất.

| ☐ | Hạng mục bổ sung (ngoài tất cả yêu cầu dấu T) | Ghi chú |
|---|------------------------------------------------|---------|
| ☐ | Biên bản thử nghiệm mẫu thử (Test Report) | Mapping kết quả TN → B1 YCKT từng mục |
| ☐ | Kết quả thử nghiệm môi trường (MIL-STD-810H) | Rung (514.8), nhiệt (-10/+55°C), IP67, drop 1.5m |
| ☐ | Kết quả thử nghiệm EMC (IEC 61000-4-3) | Nếu áp dụng cho prototype |
| ☐ | Kết quả thử nghiệm giật lùi (recoil) | 15,000 J (VM-E01), 50,000 rounds (VM-D01) |
| ☐ | Bản vẽ cập nhật Rev B (nếu phát hiện lỗi khi TN) | ECN log ghi rõ thay đổi gì, tại sao |
| ☐ | ECN Log (Engineering Change Notice) | Mọi thay đổi T→I phải có ECN chính thức |
| ☐ | BOM cập nhật (nếu thay đổi vật liệu/nhà cung cấp) | B6 Rev B |
| ☐ | Biên bản hiệu chỉnh thiết kế | Lý do thay đổi + phê duyệt |
| ☐ | Ảnh chụp mẫu thử + đo lường thực tế | Đối chiếu với bản vẽ |
| ☐ | Biên bản nghiệm thu mẫu thử | Hội đồng đánh giá mẫu — ký tên |
| ☐ | Xác nhận B1 YCKT | Mục nào đạt / chưa đạt / cần sửa |

> **Kết quả nếu đạt:** Hội đồng nghiệm thu mẫu ký → **ĐÓNG DẤU I** → cho phép sản xuất loạt O.

---

### 7.3 — Checklist DẤU A — Sản xuất Loạt O (Pilot Batch)

**Điều kiện:** Dấu I đã đóng + sản xuất loạt O (5–20 chiếc) + FAI hoàn tất.

| ☐ | Hạng mục bổ sung (ngoài tất cả yêu cầu dấu I) | Ghi chú |
|---|------------------------------------------------|---------|
| ☐ | B3 Process Plan cập nhật (final) | Cycle time thực tế, tooling xác nhận, yield data |
| ☐ | FAI Report (First Article Inspection) | Đo 100% kích thước trên 1 sản phẩm — so khớp bản vẽ |
| ☐ | Biên bản kiểm tra chất lượng loạt O | Tỷ lệ pass/fail, defect rate |
| ☐ | SPC data cho kích thước critical | Cpk ≥1.33 cho VM-5301 register bore, VM-5501 Picatinny rail |
| ☐ | Bản vẽ cập nhật Rev C (nếu có sửa lần cuối) | ECN log |
| ☐ | Hồ sơ jig/đồ gá xác nhận ổn định | VM-PR05, VM-PR11 — repeatability verified |
| ☐ | Incoming inspection results cho chi tiết mua ngoài | VM-3102, VM-1101, VM-6101 — mẫu nhận hàng đạt spec |
| ☐ | Biên bản thử nghiệm loạt O (batch test) | ≥3 mẫu ngẫu nhiên test theo B1 |
| ☐ | Packaging verification | VM-8104 — hộp + foam đạt yêu cầu drop test |
| ☐ | Biên bản NTKT loạt O | Hội đồng NTKT loạt O ký — đủ 3 cấp |

> **Kết quả nếu đạt:** Hội đồng NTKT loạt O ký → **ĐÓNG DẤU A** → cho phép sản xuất hàng loạt.

---

### 7.4 — Checklist DẤU B — Sản xuất Hàng loạt (Mass Production)

**Điều kiện:** Dấu A đã đóng + hội đồng NTKT hàng loạt + QC specs frozen.

| ☐ | Hạng mục bổ sung (ngoài tất cả yêu cầu dấu A) | Ghi chú |
|---|------------------------------------------------|---------|
| ☐ | Bản vẽ RELEASE (Rev D hoặc final) — frozen | Mọi thay đổi sau đây phải qua ECN chính thức + phê duyệt 3 cấp |
| ☐ | QC specs final (incoming, in-process, final inspection) | AQL tables, sampling plan, accept/reject criteria |
| ☐ | Tooling chính thức (production-grade) | Khuôn ép production (không còn prototype tooling) |
| ☐ | Bao bì / đóng gói chính thức | VM-8104 final, phụ kiện (VM-7000), nhãn mác |
| ☐ | Hồ sơ năng lực sản xuất | Nhà máy, dây chuyền, nhân lực, công suất — được phê duyệt |
| ☐ | Hồ sơ nhà cung cấp đã phê duyệt | Danh sách AVL (Approved Vendor List) + second source cho single-source items |
| ☐ | Kế hoạch kiểm soát chất lượng hàng loạt | Control Plan — SPC cho critical dimensions |
| ☐ | Biên bản NTKT hàng loạt | Hội đồng NTKT cấp phép SX hàng loạt — ký tên |
| ☐ | Hợp đồng / đơn hàng (nếu SX theo hợp đồng) | Số lượng, thời hạn giao, điều kiện nghiệm thu |

> **Kết quả nếu đạt:** Hội đồng NTKT hàng loạt ký → **ĐÓNG DẤU B** → sản xuất số lượng lớn theo đơn hàng.

---

### 7.5 — Tổng kết: Ma trận Hồ sơ theo Giai đoạn

| Loại hồ sơ | Dấu T | Dấu I | Dấu A | Dấu B |
|-----------|:-----:|:-----:|:-----:|:-----:|
| 51 bản vẽ thiết kế (Rev A) | ✅ | ✅ | ✅ | ✅ |
| B1 YCKT | ✅ | ✅ | ✅ | ✅ |
| B3 Process Plan | ✅ | ✅ | ✅ (cập nhật) | ✅ (frozen) |
| B4 User Manual | ✅ | ✅ | ✅ | ✅ |
| B5 Maintenance Manual | ✅ | ✅ | ✅ | ✅ |
| B6 ĐMKTKT | ✅ | ✅ (cập nhật) | ✅ | ✅ (frozen) |
| Tính toán kiểm nghiệm (FMEA, DfX) | ✅ | ✅ | ✅ | ✅ |
| Biên bản thử nghiệm mẫu | — | ✅ | ✅ | ✅ |
| Bản vẽ Rev B (hiệu chỉnh sau TN) | — | ✅ | ✅ | ✅ |
| ECN Log | — | ✅ | ✅ | ✅ |
| FAI Report | — | — | ✅ | ✅ |
| SPC / Cpk data | — | — | ✅ | ✅ |
| Bản vẽ Rev C | — | — | ✅ | ✅ |
| Biên bản NTKT loạt O | — | — | ✅ | ✅ |
| QC specs final | — | — | — | ✅ |
| Bản vẽ RELEASE (frozen) | — | — | — | ✅ |
| Tooling production | — | — | — | ✅ |
| Biên bản NTKT hàng loạt | — | — | — | ✅ |

---

## PHẦN 8 — TIÊU CHUẨN ÁP DỤNG

### 8.1 — Tiêu chuẩn Bản vẽ Kỹ thuật

| Mã TCVN | Tên | Tương đương ISO | Áp dụng cho |
|---------|-----|-----------------|------------|
| TCVN 8-1:2005 | Bản vẽ kỹ thuật — Nguyên tắc chung | ISO 128-1 | Tất cả bản vẽ |
| TCVN 3821:1983 | Khung tên bản vẽ | — | Khung tên |
| TCVN 3824:1983 | Hình cắt, mặt cắt | ISO 128-40 | Bản vẽ có mặt cắt |
| TCVN 3826:1983 | Bản vẽ lắp | — | Bản vẽ lắp cụm |
| TCVN 5706:1993 | Ghi kích thước | ISO 129 | Tất cả kích thước |
| TCVN 2244:1999 | Dung sai chung | ISO 2768 | Dung sai general |
| TCVN 2511:1995 | Nhám bề mặt | ISO 1302 | Chỉ dẫn nhám |
| TCVN 7285:2003 | Tài liệu kỹ thuật sản phẩm | ISO 7200 | Title block format |
| TCVN 5907:1995 | GD&T ký hiệu | ISO 1101 | Chi tiết quang (VM-5301) |

### 8.2 — Tiêu chuẩn Vật liệu & Xử lý Bề mặt (ghi trên bản vẽ)

| Tiêu chuẩn | Áp dụng cho | Bản vẽ |
|-----------|------------|--------|
| AMS-QQ-A-250/12 | AA7075-T6 | VM-5301, VM-5501 |
| MIL-A-8625 Type III | Hard anodize ≥50μm | VM-5301, VM-5501 |
| MIL-STD-1913 | Picatinny rail profile | VM-5501 |
| MIL-O-13830 | Optical surface quality | VM-1101, VM-3102 |
| MIL-C-675 | Optical coating adhesion | VM-3102 |
| IPC-2221 | PCB design standard | VM-4101 |
| IPC-6012 Class 2 | PCB fabrication | VM-4101 |
| IPC-CC-830 Class 2 | Conformal coating | VM-4110 |
| Parker O-Ring Handbook | O-ring groove design | VM-5201 |

### 8.3 — Tiêu chuẩn Quân sự Việt Nam

| Yêu cầu | Áp dụng |
|----------|---------|
| Bản vẽ bằng tiếng Việt (hoặc song ngữ VN/EN) | Ghi chú, tên chi tiết, bảng kê |
| Đơn vị hệ mét (mm, kg, °C) | Tuyệt đối — không dùng inch |
| Khung tên theo mẫu đơn vị chủ quản (WX) | Bao gồm T/K/D + mã bảo mật |
| Bản cứng đóng dấu đỏ cho hồ sơ nghiệm thu | Theo Circular 25/2020/TT-BQP (hoặc qui định hiện hành) |
| Lưu trữ bản gốc tại đơn vị thiết kế | ≥10 năm theo qui định |

---

## PHỤ LỤC — GHI CHÚ THỰC HIỆN

### A — Ưu tiên Vẽ theo Thứ tự

**Đợt 1 — Dấu T (Bắt buộc cho hồ sơ thiết kế — ≥20 bản vẽ ưu tiên):**
1. VM-5301 Optical Bench (RẤT CAO — chi tiết phức tạp nhất)
2. VM-5501 Picatinny Clamp (RẤT CAO — giao diện khách hàng)
3. VM-5101, VM-5201, VM-5601 Housing shells (CAO — tooling lead time dài)
4. VM-4000-SCH/PCB Schematic + PCB layout (CAO — PCB fab lead time)
5. VM-0000-DWG-001 General Assembly (CAO — tổng quan)
6. SA lắp ráp: VM-1000, 2000, 3000, 5000 (CAO)
7. Sơ đồ quang học OPT-001/002 (CAO — xác nhận optical design)

**Đợt 2 — Dấu I→A (Bổ sung trước loạt O — thêm ~15 bản vẽ):**
- Chi tiết phụ (barrel, shim, gasket, bushing, hinge pin)
- Wiring diagram, flex cable specs
- Jig PR-05, PR-11
- Bao bì

**Đợt 3 — Dấu B (Hoàn thiện hồ sơ SX hàng loạt — thêm ~15 bản vẽ):**
- Marking/label, accessories, pouch spec
- Incoming inspection specs cho chi tiết mua ngoài
- Bản vẽ phân rã 3D

### B — Ghi chú về Chi tiết Mua ngoài

Các chi tiết sau **KHÔNG cần bản vẽ chi tiết** (mua theo spec / datasheet):
- VM-1101 Objective lens (mua theo optical spec)
- VM-1200 CMOS sensor (module sẵn)
- VM-2101 Jetson Orin Nano (SoM sẵn)
- VM-3101 OLED micro-display (module sẵn)
- VM-3102 Beam-splitter (mua theo optical spec)
- VM-3103 Relay lens (mua theo optical spec)
- VM-4102 BLE module nRF52840 (module sẵn)
- Tất cả fasteners DIN 912/7991 (mua tiêu chuẩn)
- Tất cả passive components (mua theo BOM)
- VM-6101 Battery cell (mua theo Grade A spec)

→ Cần **Incoming Inspection Spec** (IIS) thay cho bản vẽ chi tiết. IIS ghi rõ kích thước kiểm tra, tiêu chí chấp nhận, phương pháp kiểm tra.

---

*Kết thúc tài liệu — Danh mục Bản vẽ Thiết kế & Checklist Đóng dấu T/I/A/B V-SMASH-M v1.0*
*Sources: BOM (P33, 71 parts), FMEA (P26, 22 failure modes), DfX (P25), B3 Process Plan, TCVN drawing standards.*
*51 bản vẽ identified. V-SMASH-M hiện tại đang hoàn thiện hồ sơ cho dấu T (Thiết kế kỹ thuật). Dấu I/A/B bổ sung theo tiến trình chế thử → loạt O → hàng loạt.*
