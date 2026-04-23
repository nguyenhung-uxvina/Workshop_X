---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
audience: Nhân viên kho (NV Kho)
tags: [#type/sop, #status/active]
---

# SOP Quản Lý Kho — Dành Cho Nhân Viên Kho

> **Mục đích:** Hướng dẫn NV Kho nhập/xuất/kiểm kê vật tư hàng ngày.
> **Áp dụng:** 1 NV Kho, kho WH-NVL (nguyên vật liệu).
> **Không cần:** Phần mềm đặc biệt — chỉ cần sổ kho + Telegram.

---

## 1. Mỗi Sáng (7:30 — 10 phút)

**Kiểm tra nhanh:**
- [ ] Kho có gọn gàng, đúng vị trí không?
- [ ] Có hàng về hôm qua chưa nhập sổ không?
- [ ] Đọc Telegram group "WX Sản xuất" — có yêu cầu xuất vật tư hôm nay không?

**Nếu có PO đang chờ nhận:** Kiểm tra lịch giao hàng (bảng PO dán tại kho).

---

## 2. Nhập Kho (Nhận Hàng Từ Supplier)

**Khi hàng về → KHÔNG nhập kho ngay. Kiểm tra trước:**

```
BƯỚC 1: Đối chiếu
  ┌─ Phiếu giao hàng supplier
  ├─ PO đã đặt (bảng PO dán tại kho)
  └─ Kiểm tra: đúng item? đúng số lượng? đúng chất lượng?

BƯỚC 2: Kiểm tra chất lượng vật tư
  ├─ Thép: đúng kích thước, không gỉ, không cong vênh
  ├─ Linh kiện điện tử: đúng mã, bao bì nguyên, có datasheet
  ├─ Bu lông: đúng size, inox không bị oxy hóa
  └─ Sơn: đúng mã màu, hạn sử dụng còn > 6 tháng

BƯỚC 3: Nếu OK → Nhập kho
BƯỚC 3b: Nếu KHÔNG OK → Báo PGĐ, KHÔNG nhập kho
```

**Ghi sổ kho:**

```
Sổ nhập kho:
Ngày: ___/___/2026
PO số: PO-2026-___
┌──────────────┬──────┬─────┬────────┬──────────────┐
│ Item         │ SL   │ ĐVT │ Giá    │ Supplier     │
├──────────────┼──────┼─────┼────────┼──────────────┤
│              │      │     │        │              │
└──────────────┴──────┴─────┴────────┴──────────────┘
Người nhập: ___________
```

**Báo qua Telegram:**
```
"NHẬP KHO | PO-2026-[số]
[Item]: [SL] [ĐVT] — OK
[Item]: [SL] [ĐVT] — OK
Tổng: [số] items nhập đủ"
```

---

## 3. Xuất Kho (Cấp Vật Tư Cho PX)

**QĐ yêu cầu vật tư → NV Kho kiểm tra trước khi xuất:**

```
BƯỚC 1: QĐ gửi Telegram hoặc nói trực tiếp:
  "Cần [item] × [SL] cho WO-2026-[số]"

BƯỚC 2: Kiểm tra tồn kho
  ├─ Đủ → Xuất
  └─ Không đủ → Báo PGĐ: "[Item] chỉ còn [SL], cần [SL]. PO chưa?"

BƯỚC 3: Xuất + Ghi sổ
```

**Ghi sổ xuất kho:**

```
Sổ xuất kho:
Ngày: ___/___/2026
WO số: WO-2026-___
PX nhận: WS-____
┌──────────────┬──────┬─────┬──────────────────┐
│ Item         │ SL   │ ĐVT │ Ghi chú          │
├──────────────┼──────┼─────┼──────────────────┤
│              │      │     │                  │
└──────────────┴──────┴─────┴──────────────────┘
Người xuất: ___________
QĐ nhận: ___________
```

**Báo qua Telegram:**
```
"XUẤT KHO | WO-2026-[số] → PX [tên]
[Item]: [SL] [ĐVT]
Tồn kho còn: [SL]"
```

---

## 4. Cảnh Báo Tồn Kho Thấp

**Mỗi ngày kiểm tra nhanh — nếu thấy item nào SẮP HẾT:**

Dùng bảng mức tồn kho tối thiểu (dán tại kho):

| Item | Mức tối thiểu | Ghi chú |
|------|:-------------:|---------|
| STEEL-60x40 | 10 m | Thép hộp |
| STEEL-PIPE-114 | 3 m | Ống pedestal |
| ALU-6061-10 | 5 tấm | Nhôm tấm |
| ESP32-WROOM | 5 cái | MCU |
| ENCODER-600P | 4 cái | Encoder |
| SOLENOID-24V | 3 cái | Solenoid |
| BTS7960 | 3 cái | Motor driver |
| NFC-RC522 | 3 cái | NFC reader |
| BOLT-M10x30 | 50 cái | Bu lông |
| SLEWING-RING-300 | 2 cái | Bearing |
| WORM-GEAR-SET | 2 bộ | Worm gear |
| TRUNNION-PIN-25 | 4 cái | Trunnion pin |
| SPADE-GRIP | 4 cái | Tay cầm |
| PAINT-KIT-OD | 3 bộ | Sơn |

**Nếu tồn kho ≤ mức tối thiểu → Báo PGĐ ngay:**

```
"⚠️ TỒN KHO THẤP
[Item]: còn [SL], mức tối thiểu [SL]
Cần đặt thêm: [SL ước tính]
Supplier: [tên]"
```

**NV Kho KHÔNG tự đặt hàng** — PGĐ/CEO quyết định PO.

---

## 5. Kiểm Kê Định Kỳ

### Kiểm kê tuần (Thứ 6 chiều, 15 phút)

Đếm nhanh 5 items quan trọng nhất (theo WO đang chạy):
- So với sổ kho → nếu lệch > 5% → báo PGĐ

### Kiểm kê tháng (Ngày cuối tháng, 1 giờ)

Đếm TẤT CẢ items:

```
BIÊN BẢN KIỂM KÊ THÁNG ___/2026

┌──────────────┬──────────┬──────────┬──────┬──────────────┐
│ Item         │ Sổ sách  │ Thực tế  │ Lệch │ Ghi chú      │
├──────────────┼──────────┼──────────┼──────┼──────────────┤
│              │          │          │      │              │
└──────────────┴──────────┴──────────┴──────┴──────────────┘

Người kiểm kê: ___________
PGĐ xác nhận: ___________
Ngày: ___/___/2026
```

**Gửi kết quả qua Telegram cho PGĐ/CEO.**

---

## 6. Bảng PO Dán Tại Kho

NV Kho in và dán bảng PO đang chờ:

```
┌─────────────────────────────────────────────────────────────┐
│  PO ĐANG CHỜ NHẬN HÀNG                                     │
├──────────┬──────────────┬──────┬──────────────┬─────────────┤
│ PO       │ Item         │ SL   │ Supplier     │ Ngày dự kiến│
├──────────┼──────────────┼──────┼──────────────┼─────────────┤
│ PO-001   │ SLEWING-RING │  5   │ Bearing VN   │ 05/05       │
│ PO-002   │ WORM-GEAR    │  5   │ Tân Phát     │ 05/05       │
│ PO-003   │ STEEL-60x40  │ 20m  │ Thép MN      │ 22/04       │
│ PO-004   │ BOLT-M10x30  │ 200  │ Đại Phát     │ 18/04       │
│ PO-005   │ ENCODER      │ 25   │ Nhật Tảo     │ 22/04       │
│ PO-006   │ ESP32        │ 15   │ Nhật Tảo     │ 22/04       │
└──────────┴──────────────┴──────┴──────────────┴─────────────┘
Cập nhật: 15/04/2026
```

**Khi hàng về → gạch PO khỏi bảng + ghi ngày nhận thực tế.**

---

## 7. Sắp Xếp Kho

```
WH-NVL (Kho nguyên vật liệu):
  ├── Khu THÉP (kệ 1-2): thép hộp, thép ống, nhôm tấm
  ├── Khu ĐIỆN TỬ (kệ 3): ESP32, encoder, BTS7960, NFC, solenoid
  ├── Khu CƠ KHÍ (kệ 4): bearing, worm gear, trunnion pin, spade grip
  ├── Khu PHỤ KIỆN (kệ 5): bu lông, ốc vít, đai ốc, vòng đệm
  ├── Khu TIÊU HAO (kệ 6): sơn, que hàn, giấy nhám, dầu cắt
  └── Khu CHỜ CHUYỂN: bán thành phẩm chờ chuyển PX
```

**Mỗi kệ có nhãn item code + tên tiếng Việt.**

---

## 8. Liên Hệ

| Vai trò | Khi nào liên hệ |
|---------|-----------------|
| PGĐ | Hàng về, xuất kho lớn, tồn kho thấp, lệch kiểm kê |
| QĐ PX | Nhận bán thành phẩm, yêu cầu vật tư |
| CEO | Vấn đề chất lượng vật tư, quyết định PO lớn |

**Telegram group:** "WX Sản xuất" (chung cho QĐ + Kho + PGĐ + CEO)

---

*SOP này được review mỗi tháng bởi PGĐ. Phiên bản: 1.0 — 2026-04-15.*
