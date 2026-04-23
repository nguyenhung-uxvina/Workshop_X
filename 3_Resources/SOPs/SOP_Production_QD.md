---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
audience: 4 Quản đốc phân xưởng (QĐ)
tags: [#type/sop, #status/active]
---

# SOP Quản Lý Sản Xuất — Dành Cho Quản Đốc Phân Xưởng

> **Mục đích:** Hướng dẫn QĐ theo dõi và báo cáo sản xuất hàng ngày.
> **Áp dụng:** 4 QĐ (WS-CKCX, WS-DT, WS-DC, WS-VL)
> **Không cần:** Máy tính, phần mềm, AI — chỉ cần Telegram + bảng giấy tại PX.

---

## 1. Mỗi Sáng (7:30 — 5 phút)

**Nhận lệnh sản xuất từ PGĐ/CEO:**

PGĐ hoặc CEO sẽ gửi qua Telegram group "WX Sản xuất" thông tin:
- WO nào đang chạy tại PX của mình
- Ưu tiên WO nào trước (Critical > High > Medium)
- Vật tư đã sẵn sàng chưa

**QĐ kiểm tra:**
- [ ] Vật tư cho WO hôm nay đã có tại PX chưa?
- [ ] 4 CN đã có mặt chưa?
- [ ] Máy móc / fixture sẵn sàng chưa?

**Nếu thiếu vật tư:** Báo ngay PGĐ qua Telegram: "PX [tên] thiếu [item] cho WO-[số]"

---

## 2. Trong Ngày — Theo Dõi Tiến Độ

**Bảng theo dõi tại PX** (dán trên tường, viết tay):

```
┌─────────────────────────────────────────────┐
│  BẢNG THEO DÕI SẢN XUẤT — PX [TÊN]         │
│  Ngày: ___/___/2026                          │
├──────────┬────────┬──────┬─────┬─────┬──────┤
│ WO       │ SP     │ SL   │ Bắt │ Xong│ Ghi  │
│          │        │      │ đầu │     │ chú  │
├──────────┼────────┼──────┼─────┼─────┼──────┤
│ WO-2026- │        │      │     │     │      │
│          │        │      │     │     │      │
│          │        │      │     │     │      │
└──────────┴────────┴──────┴─────┴─────┴──────┘
```

**Quy tắc:**
- Mỗi WO = 1 dòng
- Ghi số lượng hoàn thành cuối ca
- Ghi chú: vấn đề gặp phải, máy hỏng, thiếu vật tư

---

## 3. Khi Hoàn Thành Bước Của PX Mình

**Quy trình chuyển giao:**

```
PX hoàn thành → Kiểm tra chất lượng → Ghi kết quả → Chuyển PX tiếp theo
```

**Bước 1:** Tự kiểm tra sản phẩm trước khi chuyển:
- Kích thước đúng drawing? (đo bằng thước / caliper)
- Bề mặt sạch, không ba via?
- Đủ số lượng?

**Bước 2:** Ghi kết quả (báo PGĐ qua Telegram):
```
Format Telegram:
"WO-2026-[số] | PX [tên] XONG | [số] units | PASS/FAIL
Ghi chú: [nếu có vấn đề]"
```

**Ví dụ:**
```
"WO-2026-005 | PX CKCX XONG | 2/6 units | PASS
Ghi chú: Không vấn đề"
```

```
"WO-2026-005 | PX CKCX | 1 unit FAIL
Ghi chú: Slot weapon body lệch 0.3mm — cần re-cut"
```

**Bước 3:** Chuyển bán thành phẩm sang PX tiếp theo
- Đặt vào khu vực "CHỜ CHUYỂN" có nhãn WO
- Báo QĐ PX tiếp theo: "WO-[số] sẵn sàng, [số] units"

---

## 4. Khi Có Sản Phẩm Lỗi (NCR)

**Nếu phát hiện lỗi — KHÔNG tự sửa khi chưa báo.**

**Bước 1:** Tách sản phẩm lỗi ra khu vực "CHỜ XỬ LÝ"
**Bước 2:** Báo PGĐ/CEO qua Telegram ngay:
```
Format:
"NCR | WO-2026-[số] | PX [tên]
Lỗi: [mô tả ngắn]
Nguyên nhân (nếu biết): [fixture/vật tư/thao tác]
Ảnh: [chụp kèm]"
```

**Bước 3:** Chờ quyết định CEO:
- **Rework:** CEO cho phép sửa → ghi giờ rework
- **Scrap:** CEO quyết định bỏ → ghi vào bảng theo dõi
- **Accept as-is:** CEO chấp nhận → chuyển PX tiếp

**QĐ KHÔNG được tự quyết định rework/scrap** — đây là quyết định Core của CEO.

---

## 5. Cuối Ngày (16:30 — 5 phút)

**Báo cáo cuối ngày qua Telegram group:**

```
Format:
"BÁO CÁO CUỐI NGÀY — PX [TÊN] — [ngày]
WO-2026-[số]: [số] units xong, [số] còn lại
WO-2026-[số]: [số] units xong
Vấn đề: [nếu có]
Vật tư cần ngày mai: [nếu cần]
CN vắng ngày mai: [nếu biết]"
```

**Ví dụ:**
```
"BÁO CÁO CUỐI NGÀY — PX CKCX — 15/04/2026
WO-2026-001: 2/5 thân xong, còn 3
WO-2026-004: fixture setup xong, chưa có output
WO-2026-005: chưa bắt đầu (chờ vật tư)
Vấn đề: Fixture WO-004 mất 3h calibrate
Vật tư cần: STEEL-60x40 thêm 20m (WO-005)
CN vắng: không"
```

---

## 6. Trình Tự Sản Xuất Theo Sản Phẩm

### TOWED-TARGET (30mm)
```
WS-CKCX (3d) → WS-DT (1d) → WS-DC (2d) → WS-VL (1d) → QC (0.5d)
CNC thân,       Mạch điều    Assembly     Sơn, nhãn,    Kích thước
cánh, hàn       khiển, kết    thân+mạch,   đóng gói     điện, chức
khung            nối          test động cơ               năng
```

### VN-MGM (Gun Mount)
```
WS-CKCX (5d) → WS-DT (2d) → WS-DC (3d) → WS-VL (1d) → QC
CNC base,       Motor driver  Assembly     Sơn OD green  Slew test
trục, bệ đỡ,   encoder,      cơ-điện,     bảo vệ bề     traverse
hàn, pedestal   control board  wiring, test mặt, đóng gói  speed
```

### TARGET-DRONE (Simple)
```
WS-CKCX (2d) → WS-DT (1d) → WS-DC (1d) → WS-VL (1d) → QC
Khung, cánh,   Flight ctrl   Assembly,    Radar reflector Motor spin
mounting        ESC, receiver motor mount   sơn, đóng gói  test
```

### VN-CUAV-SIM (SS1 PoC)
```
WS-CKCX (5d) → WS-DT (3d) → WS-DC (2d) → WS-VL (1d) → QC
CNC weapon body Encoder,      Assembly     Anodize,       Full
cradle, mount   solenoid,     cradle+weapon labels,        function
quick-release   NFC, ESP32    cable harness packaging      test
```

---

## 7. Status Codes — Giải Thích

| Code | Nghĩa | Ai cập nhật |
|------|--------|:-----------:|
| Pending | Chưa đến lượt PX này | — |
| In Process | Đang làm tại PX | QĐ |
| Completed | PX xong, chuyển PX tiếp | QĐ |
| On Hold | Chờ vật tư / chờ CEO quyết định | QĐ + CEO |
| QC Pass | Đã kiểm tra, ĐẠT | CEO |
| QC Fail | Không đạt → chờ CEO quyết định | CEO |

---

## 8. Liên Hệ

| Vai trò | Người | Telegram |
|---------|-------|------|
| CEO / Quyết định kỹ thuật | Hùng | Group "WX Sản xuất" |
| PGĐ / Điều phối sản xuất | [PGĐ] | Group "WX Sản xuất" |
| NV Kho / Vật tư | [NV Kho] | Group "WX Sản xuất" |

---

*SOP này được review mỗi tháng bởi PGĐ. Phiên bản: 1.0 — 2026-04-15.*
