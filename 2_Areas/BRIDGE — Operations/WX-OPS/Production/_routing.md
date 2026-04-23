---
created: 2026-04-15
updated: 2026-04-15
type: reference
---

# Production Routing Templates — Workshop X

> Mỗi sản phẩm đi qua 4 PX theo trình tự cố định. QĐ update status khi hoàn thành bước của PX mình.

---

## Routing per Product Line

### TOWED-TARGET (30mm + 12.7mm)

| Step | PX | Operations | Est. Time | Output |
|:----:|:--:|-----------|:---------:|--------|
| 1 | WS-CKCX | CNC thân, gia công cánh, hàn khung | 3 ngày | Thân + khung cơ khí |
| 2 | WS-DT | Lắp mạch điều khiển, encoder, kết nối | 1 ngày | Board + wiring |
| 3 | WS-DC | Assembly thân + mạch, test động cơ, cáp | 2 ngày | Unit hoàn chỉnh |
| 4 | WS-VL | Sơn, dán nhãn, đóng gói | 1 ngày | Thành phẩm đóng gói |
| QC | — | Inspection: kích thước, điện, chức năng | 0.5 ngày | QC PASS/FAIL |

**Lead time:** ~7.5 ngày/batch (pipeline — sau khi batch đầu qua step 1, step 2 bắt đầu batch tiếp)

### VN-MGM (Gun Mount)

| Step | PX | Operations | Est. Time |
|:----:|:--:|-----------|:---------:|
| 1 | WS-CKCX | CNC base, trục xoay, bệ đỡ, hàn | 5 ngày |
| 2 | WS-DT | Motor driver, encoder, control board | 2 ngày |
| 3 | WS-DC | Assembly cơ-điện, wiring, test slew | 3 ngày |
| 4 | WS-VL | Sơn OD green, bảo vệ bề mặt, đóng gói | 1 ngày |

**Lead time:** ~11 ngày/unit

### TARGET-DRONE (Simple)

| Step | PX | Operations | Est. Time |
|:----:|:--:|-----------|:---------:|
| 1 | WS-CKCX | Khung, cánh, mounting | 2 ngày |
| 2 | WS-DT | Flight controller, ESC, receiver | 1 ngày |
| 3 | WS-DC | Assembly, motor mount, test spin | 1 ngày |
| 4 | WS-VL | Phủ radar reflector, sơn, đóng gói | 1 ngày |

**Lead time:** ~5 ngày/batch

### VN-CUAV-SIM-001 (SS1 Weapon Station — PoC)

| Step | PX | Operations | Est. Time |
|:----:|:--:|-----------|:---------:|
| 1 | WS-CKCX | CNC weapon body, cradle frame, mount, quick-release | 5 ngày |
| 2 | WS-DT | Encoder mount, solenoid driver, NFC reader, ESP32, trigger | 3 ngày |
| 3 | WS-DC | Assembly cradle + weapon module, cable harness, brake | 2 ngày |
| 4 | WS-VL | Surface treatment (anodize), labels, packaging | 1 ngày |

**Lead time:** ~11 ngày (PoC = 1 unit, no pipeline)

---

## Status Codes

| Code | Meaning | Who Updates |
|------|---------|:-----------:|
| Pending | Chưa đến lượt PX này | — |
| In Process | Đang làm tại PX | QĐ của PX |
| Completed | PX hoàn thành, chuyển sang PX tiếp | QĐ của PX |
| On Hold | Chờ vật tư / chờ quyết định kỹ thuật | QĐ + CEO |
| QC Pass | Đã qua kiểm tra chất lượng | QĐ cuối + CEO |
| QC Fail | Không đạt → rework hoặc scrap | QĐ + CEO |
