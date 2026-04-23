---
project: VN-RANGE-001
step: A1 — Range Site Assessment (FILLED)
type: survey-response (simulated first customer for S4 practice)
deployment_id: DEP-VNR-001
version: 1.0
created: 2026-02-20
status: PENDING_REVIEW — awaiting A1-H HITL checkpoint
simulation_note: This is a realistic simulated customer for S4 pipeline practice.
                 Parameters are based on typical Vietnamese military range configuration.
---

# CORTEX RANGE — Khảo sát Trường bắn / Range Site Survey
## [FILLED — Trường bắn Trung đoàn 12]

> **Ngày điền / Date filled:** 2026-02-18
> **Người điền / Filled by:** Thiếu tá Trần Văn Hùng (Range POC)
> **Người kiểm tra / Reviewed by:** KN — PENDING

---

## SECTION 1: THÔNG TIN ĐƠN VỊ / UNIT INFORMATION

| # | Trường / Field | Giá trị / Value |
|---|---------------|-----------------|
| 1.1 | Tên đơn vị / Unit name | Tiểu đoàn 3, Trung đoàn 12, Sư đoàn 302 |
| 1.2 | Mã đơn vị / Unit code | E12/D3 |
| 1.3 | Tên trường bắn / Range name | Trường bắn Suối Hai |
| 1.4 | Địa chỉ / Location | Huyện Ba Vì, TP. Hà Nội |
| 1.5 | Tọa độ GPS | 21.125°N, 105.395°E |
| 1.6 | Chỉ huy trưởng | Đại tá Nguyễn Thanh Sơn — Trung đoàn trưởng E12 |
| 1.7 | Đầu mối liên hệ / Range POC | Thiếu tá Trần Văn Hùng — Trợ lý quân huấn |
| 1.8 | POC phone | 0912-XXX-XXX (Zalo) |
| 1.9 | POC email | — (không dùng email) |
| 1.10 | Sĩ quan an toàn / RSO | Đại úy Lê Minh Đức |

---

## SECTION 2: BỐ TRÍ TRƯỜNG BẮN / RANGE LAYOUT

| # | Trường / Field | Giá trị / Value | Đơn vị |
|---|---------------|-----------------|--------|
| 2.1 | Tổng số làn bắn | **10** | lanes |
| 2.2 | Chiều rộng mỗi làn | **1.5** | m (center-to-center) |
| 2.3 | Khoảng cách bắn available | **25, 50, 100** | m |
| 2.4 | Khoảng cách bắn chính | **100** | m |
| 2.5 | Chiều dài tổng | **130** | m (firing line → backstop) |
| 2.6 | Chiều rộng tổng | **18** | m |

### 2.7 Loại bia / Target Types

| Loại / Type | Có / Yes | Kích thước / Size | Ghi chú |
|-------------|----------|-------------------|---------|
| Bia giấy / Paper target | ☑ | 50×70 cm | Standard quân sự |
| Bia thép / Steel plate | ☑ | 40×40 cm | Dày 8mm, tại 100m |
| Bia tự động E-type | ☐ | — | Chưa có, muốn lắp sau |
| Bia chạy / Moving target | ☐ | — | — |
| Khác | ☑ | Bia hình nhân 50×170 cm | Dùng cho bắn súng lục |

### 2.8 Sơ đồ trường bắn

```
Hướng bắn / Direction of fire: →

                    Mái che (6m rộng)
Firing line ══════════════════════════════════════
  L1  L2  L3  L4  L5  L6  L7  L8  L9  L10
  |   |   |   |   |   |   |   |   |   |
  1.5m between lanes, total width ~18m

         25m mark ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
         50m mark ·  ·  ·  ·  ·  ·  ·  ·  ·  ·
        100m mark ·  ·  ·  ·  ·  ·  ·  ·  ·  ·

Target line (100m) ──────────────────────────────
  T1  T2  T3  T4  T5  T6  T7  T8  T9  T10

Backstop (đồi đất / earth berm, 5m cao) ════════

   Phòng chỉ huy ┌────────┐  ~15m bên trái tuyến bắn
   Command post   │  CP    │  Có mái, có điện, có bàn
                  └────────┘
```

> Ảnh đính kèm: 3 ảnh (tuyến bắn chính diện, tuyến bia 100m, phòng chỉ huy)

---

## SECTION 3: HẠ TẦNG ĐIỆN / POWER INFRASTRUCTURE

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 3.1 | Nguồn điện lưới | ☑ Có | Ổn định |
| 3.2 | Điện áp | ☑ 220V | |
| 3.3 | Ổ cắm tại tuyến bắn | ☑ Có — **2 ổ cắm** | Ở 2 đầu mái che |
| 3.4 | Ổ cắm tại tuyến bia | ☐ Không | |
| 3.5 | Ổ cắm phòng chỉ huy | ☑ Có | 4 ổ cắm |
| 3.6 | Máy phát điện dự phòng | ☑ Có — 5 kW | Dùng khi mất điện lưới |
| 3.7 | Khoảng cách nguồn → tuyến bắn | **~5m** | Tủ điện ngay sau mái che |

---

## SECTION 4: HẠ TẦNG MẠNG / NETWORK INFRASTRUCTURE

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 4.1 | Mạng LAN hiện có | ☐ Không | |
| 4.2 | Cổng Ethernet phòng chỉ huy | ☐ Không | |
| 4.3 | WiFi hiện có | ☐ Không | |
| 4.4 | Sóng di động | ☑ 4G (Viettel) | Tín hiệu trung bình |
| 4.5 | Khoảng cách CP → tuyến bắn | **15** m | |
| 4.6 | Vật cản | ☐ Không có vật cản lớn | Bãi đất trống giữa CP và tuyến bắn |
| 4.7 | Thiết bị thu phát sóng khác | Bộ đàm quân sự VHF | Tần số 30-88 MHz — không ảnh hưởng WiFi 2.4/5 GHz |

---

## SECTION 5: VỊ TRÍ LẮP ĐẶT / MOUNTING & INSTALLATION

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 5.1 | Vật liệu cọc tại tuyến bắn | ☑ Thép | Cọc thép Ø48mm, cao 1.2m |
| 5.2 | Chiều cao cọc | **1.2** m | |
| 5.3 | Đường kính cọc | **48** mm | Tròn |
| 5.4 | Có thể khoan M8 | ☑ Có | |
| 5.5 | Tường gần tuyến bắn | ☑ Có — 3m phía sau | Tường mái che |
| 5.6 | Vị trí EDGE node | Phòng chỉ huy — tủ khóa có sẵn | Khô, mát, có khóa |
| 5.7 | Vị trí WiFi AP | Cột đèn phòng chỉ huy, cao 4m | Line-of-sight tốt |
| 5.8 | Mương cáp sẵn | ☐ Không | Phải kéo cáp trên mặt đất hoặc gắn dọc mái |
| 5.9 | Khoảng cách kéo cáp max | **25** m | Tuyến bắn đến phòng chỉ huy |

---

## SECTION 6: MÔI TRƯỜNG / ENVIRONMENTAL CONDITIONS

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 6.1 | Trong nhà / ngoài trời | ☑ Bán ngoài trời | Mái che tuyến bắn, bia ngoài trời |
| 6.2 | Mái che tuyến bắn | ☑ Có | Mái tôn, rộng 6m |
| 6.3 | Nhiệt độ cao nhất | **40** °C | Tháng 6-8 |
| 6.4 | Mưa thường xuyên | ☑ Có | Mùa mưa: tháng 5-10 |
| 6.5 | Bụi | ☑ Trung bình | Bãi đất, không nhựa |
| 6.6 | Nguồn tiếng ồn khác | Trường bắn bên cạnh (cách 200m) | Có thể gây nhiễu acoustic |

---

## SECTION 7: VẬN HÀNH / OPERATIONAL REQUIREMENTS

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 7.1 | Tần suất sử dụng | ☑ 3-4 lần/tuần | |
| 7.2 | Số buổi bắn/tuần | **4** | Sáng: 2, chiều: 2 |
| 7.3 | Số bắn thủ/buổi | **20-30** | Đại đội bắn luân phiên |
| 7.4 | Loại đạn chính | ☑ 7.62mm | AK-47 / AKM — đạn K56 |
| 7.5 | Tiêu chuẩn đánh giá | ☑ TCVN quân sự | Bài 1, 2, 3 bắn súng bộ binh |
| 7.6 | Số sĩ quan trường bắn | **3** | 1 trưởng, 2 phụ |
| 7.7 | Chỉ huy xem từ xa | ☑ Có | Đại tá Sơn muốn xem từ văn phòng E12 |
| 7.8 | Dữ liệu lưu trữ | ☑ 1 năm | Theo quy định báo cáo kết quả bắn |

---

## SECTION 8: LOGISTICS / HẬU CẦN

| # | Trường / Field | Giá trị / Value | Ghi chú |
|---|---------------|-----------------|---------|
| 8.1 | Đường tiếp cận | ☑ Tốt | Đường nhựa đến cổng, đường đất 500m vào trường bắn |
| 8.2 | Khoảng cách từ TP | **55** km | Từ Hà Nội |
| 8.3 | Chỗ ở cho KTV | ☑ Tại đơn vị | Nhà khách đơn vị |
| 8.4 | Ngày muốn lắp đặt | Tuần 2 tháng 3/2026 | Sau kỳ huấn luyện đầu quý |
| 8.5 | Ràng buộc lịch | Tuần 1 tháng 3: diễn tập cấp Trung đoàn | Không được vào trường bắn |

---

## SECTION 9: AUTO-CONFIG PARAMETER SUMMARY

> **Filled by KN after A1-H review**

| Config Parameter | Derived From | Value | Validated? |
|-----------------|-------------|-------|------------|
| `range_id` | §1 | `SUOIHAI-E12` | ☐ |
| `lane_count` | §2.1 | `10` | ☐ |
| `lane_width_m` | §2.2 | `1.5` | ☐ |
| `primary_distance_m` | §2.4 | `100` | ☐ |
| `target_type` | §2.7 | `paper + steel` | ☐ |
| `sensor_count` | 10 lanes × 1 sensor | `10` | ☐ |
| `sensor_mount_type` | §5.1, §5.4 | `bolt` (steel Ø48mm, M8 OK) | ☐ |
| `power_source` | §3.1 | `grid` (220V, backup 5kW gen) | ☐ |
| `network_mode` | §4.1 | `self_wifi` (no existing LAN) | ☐ |
| `edge_location` | §5.6 | `command_post` (locked cabinet) | ☐ |
| `cable_run_m` | §5.9 | `25` | ☐ |
| `ammo_type` | §7.4 | `7.62x39mm` (AK/AKM) | ☐ |
| `scoring_standard` | §7.5 | `TCVN_military_infantry` | ☐ |
| `pulse_remote` | §7.7 | `yes` (4G LTE for commander) | ☐ |
| `data_retention_days` | §7.8 | `365` | ☐ |
| `environment` | §6.1 | `semi_outdoor` | ☐ |
| `ip_rating_required` | §6.1, §6.4 | `IP65` (semi-outdoor, rain) | ☐ |

### Conflicts / Flags

| # | Field | Issue | Severity | Resolution |
|---|-------|-------|----------|------------|
| F1 | §3.3 | Only 2 power outlets at firing line — need ≥5 for 10 lanes (1 per 2 lanes) | **HIGH** | POC must install 3 additional outlets before install day OR use battery packs |
| F2 | §5.8 | No cable conduit — cable will run exposed along roof/ground | MEDIUM | Include cable protectors in BOM; route along mái che roof edge |
| F3 | §6.6 | Adjacent range 200m away — potential acoustic interference | MEDIUM | Calibration must account for cross-range noise; schedule calibration when adjacent range is cold |
| F4 | §7.7 | Commander remote viewing needs 4G relay — 4G signal is "average" | MEDIUM | Test 4G bandwidth during site visit; include 4G modem with external antenna in BOM |
| F5 | §3.4 | No power at target line | LOW | Not needed for P0-P1 (sensors at firing line only). Flag for P2 OVERWATCH camera install. |

---

*A1 Survey FILLED — DEP-VNR-001 (Trường bắn Suối Hai, E12)*
*Status: PENDING A1-H HITL review by KN*
