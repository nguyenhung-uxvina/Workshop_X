---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
audience: Kế toán trưởng (KTT) + Nhân viên tài chính (NV TC)
tags: [#type/sop, #status/active]
---

# SOP Tài Chính Sản Xuất — Dành Cho Kế Toán Trưởng

> **Mục đích:** Hướng dẫn KTT ghi nhận doanh thu, chi phí, dòng tiền liên quan sản xuất.
> **Áp dụng:** KTT + 1 NV Tài chính.
> **Công cụ:** Sổ kế toán hiện tại + Telegram báo cáo cho CEO.

---

## 1. Ghi Nhận Hóa Đơn Bán Hàng (Khi Giao Hàng)

**Trigger:** CEO/PGĐ thông báo WO đã giao khách → KTT xuất hóa đơn.

**Thông tin cần từ CEO:**
- WO số nào đã giao
- Khách hàng
- Số lượng giao
- Đơn giá (theo hợp đồng)

**KTT ghi:**

```
Sổ doanh thu:
Ngày: ___/___/2026
┌──────────┬────────────┬──────┬──────┬─────────────┬──────────────┐
│ WO       │ Khách hàng │ SP   │ SL   │ Đơn giá     │ Thành tiền   │
├──────────┼────────────┼──────┼──────┼─────────────┼──────────────┤
│          │            │      │      │             │              │
└──────────┴────────────┴──────┴──────┴─────────────┴──────────────┘
Hóa đơn số: ___________
Trạng thái thanh toán: Chưa TT / Đã TT / TT một phần
```

**Báo CEO qua Telegram:**
```
"HÓA ĐƠN BÁN | WO-2026-[số]
Khách: [tên]
SL: [số] × [đơn giá] = [thành tiền] VND
HĐ số: [số]
Thanh toán: [chưa/đã/một phần]"
```

---

## 2. Ghi Nhận Hóa Đơn Mua Hàng (Khi Nhận Vật Tư)

**Trigger:** NV Kho báo nhận hàng từ supplier → KTT ghi chi phí.

**Thông tin cần từ NV Kho:**
- PO số nào
- Supplier
- Items + số lượng + đơn giá thực tế

**KTT ghi:**

```
Sổ chi phí vật tư:
Ngày: ___/___/2026
PO số: PO-2026-___
Supplier: ___________
┌──────────────┬──────┬─────┬────────────┬──────────────┐
│ Item         │ SL   │ ĐVT │ Đơn giá    │ Thành tiền   │
├──────────────┼──────┼─────┼────────────┼──────────────┤
│              │      │     │            │              │
└──────────────┴──────┴─────┴────────────┴──────────────┘
Tổng: ___________ VND
Thanh toán: Tiền mặt / CK / Công nợ [ngày]
```

**Báo CEO qua Telegram (chỉ khi > 10M VND):**
```
"CHI PHÍ VẬT TƯ | PO-2026-[số]
Supplier: [tên]
Tổng: [số] VND
Thanh toán: [phương thức]"
```

---

## 3. Theo Dõi Dòng Tiền

### Thu tiền (khi khách thanh toán)

```
"THU TIỀN | WO-2026-[số]
Khách: [tên]
Số tiền: [số] VND
Hình thức: CK / Tiền mặt
Còn nợ: [số] VND (nếu TT một phần)"
```

### Chi tiền (mọi khoản chi)

Phân loại chi phí:

| Loại | Ví dụ |
|------|-------|
| Vật tư sản xuất | Thép, linh kiện, bu lông (theo PO) |
| Lương + BHXH | Lương 26 người, BHXH, thuế TNCN |
| Điện + nước | Hóa đơn tiện ích xưởng |
| Vận chuyển | Ship hàng cho khách, nhận hàng supplier |
| Công cụ dụng cụ | Dao CNC, mũi khoan, vật tư tiêu hao |
| Thuê mặt bằng | Tiền thuê xưởng (nếu có) |
| Khác | Tiếp khách, công tác phí |

---

## 4. Báo Cáo Tháng (Ngày 5 Hàng Tháng)

**KTT tổng hợp và gửi CEO qua Telegram/email:**

```
BÁO CÁO TÀI CHÍNH THÁNG ___/2026

1. DOANH THU
   Số WO giao trong tháng: [số]
   Tổng doanh thu (hóa đơn): ___________ VND
   Đã thu: ___________ VND
   Còn phải thu: ___________ VND

2. CHI PHÍ
   Vật tư sản xuất: ___________ VND
   Lương + BHXH: ___________ VND
   Điện nước: ___________ VND
   Khác: ___________ VND
   TỔNG CHI: ___________ VND

3. LỢI NHUẬN GỘP
   Doanh thu - Chi phí vật tư = ___________ VND
   Margin: ____%

4. DÒNG TIỀN
   Tiền đầu tháng: ___________ VND
   + Thu trong tháng: ___________ VND
   - Chi trong tháng: ___________ VND
   = Tiền cuối tháng: ___________ VND

5. CÔNG NỢ
   Khách hàng nợ WX: ___________ VND (chi tiết: ...)
   WX nợ supplier: ___________ VND (chi tiết: ...)

Người lập: ___________
KTT xác nhận: ___________
```

**CEO dùng báo cáo này cho `/ops finance` — nhập vào hệ thống AI.**

---

## 5. Quy Tắc Quan Trọng

### Thanh toán

| Mức | Ai duyệt |
|-----|:--------:|
| < 10M VND | PGĐ duyệt, KTT chi |
| 10M - 50M VND | CEO duyệt qua Telegram, KTT chi |
| > 50M VND | CEO ký duyệt trực tiếp |

### Hợp đồng
- Hợp đồng bán > 100M → CEO ký
- Hợp đồng mua > 50M → CEO duyệt
- KTT KHÔNG ký hợp đồng — chỉ ghi nhận

### Thuế
- Hóa đơn VAT xuất trong 7 ngày kể từ ngày giao hàng
- Lưu hóa đơn mua vào (input VAT) đầy đủ để khấu trừ
- Kê khai thuế GTGT hàng tháng (trước ngày 20)

---

## 6. Lưu Trữ Chứng Từ

```
Kệ chứng từ KTT:
  ├── Hóa đơn bán (theo tháng)
  ├── Hóa đơn mua (theo tháng)
  ├── Phiếu thu / chi (theo tháng)
  ├── Bảng lương (theo tháng)
  ├── Hợp đồng (theo khách hàng)
  ├── PO + phiếu giao hàng supplier (theo PO số)
  └── Biên bản kiểm kê kho (theo tháng)
```

**Lưu tối thiểu 5 năm** theo quy định.

---

## 7. Flow: Từ Sản Xuất → Tài Chính

```
WO tạo (CEO)
  ↓
PO đặt hàng (CEO) → Supplier giao → NV Kho nhận → KTT ghi chi phí
  ↓
4 PX sản xuất → QC pass → Giao khách
  ↓
KTT xuất hóa đơn bán → Khách thanh toán → KTT ghi thu
  ↓
Cuối tháng: KTT tổng hợp → Báo cáo → CEO nhập /ops finance
```

---

## 8. Liên Hệ

| Vai trò | Khi nào liên hệ |
|---------|-----------------|
| CEO | Duyệt chi > 10M, ký hợp đồng, quyết định tài chính |
| PGĐ | Duyệt chi < 10M, thông tin WO giao hàng |
| NV Kho | Nhận hàng supplier, cần hóa đơn mua |
| QĐ | Không trực tiếp — qua PGĐ |

---

*SOP này được review mỗi quý bởi CEO + KTT. Phiên bản: 1.0 — 2026-04-15.*
