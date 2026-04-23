---
project: VN-RANGE-001
step: A1 — Range Site Assessment
type: survey-form (executable artifact — Clawdbot delivers, POC fills, KN reviews)
version: 1.0
created: 2026-02-20
feeds: A3 (Equipment Configuration) — every field maps to a config parameter
status: TEMPLATE
---

# CORTEX RANGE — Khảo sát Trường bắn / Range Site Survey

> **Mục đích / Purpose:** Thu thập thông tin cần thiết để cấu hình hệ thống CORTEX RANGE
> cho trường bắn của quý đơn vị. / Collect range parameters needed to configure the
> CORTEX RANGE system for your facility.
>
> **Thời gian hoàn thành / Time to complete:** ~20 phút / ~20 minutes
>
> **Người điền / Filled by:** Range POC (Đầu mối trường bắn)
> **Ngày điền / Date filled:** _______________
> **Người kiểm tra / Reviewed by:** KN (Workshop X)

---

## SECTION 1: THÔNG TIN ĐƠN VỊ / UNIT INFORMATION

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 1.1 | Tên đơn vị / Unit name | | Ví dụ: Tiểu đoàn 3, Trung đoàn 12 |
| 1.2 | Mã đơn vị / Unit code | | Nếu có / if applicable |
| 1.3 | Tên trường bắn / Range name | | Ví dụ: Trường bắn Miếu Môn |
| 1.4 | Địa chỉ / Location | | Tỉnh, huyện / Province, district |
| 1.5 | Tọa độ GPS / GPS coordinates | | Lat/Long hoặc UTM |
| 1.6 | Chỉ huy trưởng / Commander name + rank | | Người ký phê duyệt / Gate signatory |
| 1.7 | Đầu mối liên hệ / Range POC name | | |
| 1.8 | POC số điện thoại / POC phone | | Zalo preferred |
| 1.9 | POC email | | Nếu có / if available |
| 1.10 | Sĩ quan an toàn / Range Safety Officer | | Tên + cấp bậc / Name + rank |

---

## SECTION 2: BỐ TRÍ TRƯỜNG BẮN / RANGE LAYOUT

> **Thông tin này quyết định số lượng cảm biến và cấu hình hệ thống.**
> This section determines sensor count and system configuration.

| # | Trường / Field | Giá trị / Value | Đơn vị / Unit |
|---|---------------|-----------------|---------------|
| 2.1 | Tổng số làn bắn / Total lane count | | lanes |
| 2.2 | Chiều rộng mỗi làn / Lane width | | m (center-to-center) |
| 2.3 | Khoảng cách bắn / Firing distances available | | m (list all: 25, 50, 100, 200...) |
| 2.4 | Khoảng cách bắn chính / Primary firing distance | | m (most frequently used) |
| 2.5 | Chiều dài tổng trường bắn / Total range depth | | m (firing line → backstop) |
| 2.6 | Chiều rộng tổng / Total range width | | m (leftmost → rightmost lane) |

### 2.7 Loại bia / Target Types (check all that apply)

| Loại / Type | Có / Yes | Kích thước / Size | Ghi chú / Notes |
|-------------|----------|-------------------|-----------------|
| Bia giấy / Paper target | ☐ | ___× ___ cm | |
| Bia thép / Steel plate | ☐ | ___× ___ cm | Độ dày / Thickness: ___ mm |
| Bia tự động E-type (popup) | ☐ | Model: ___________ | |
| Bia chạy / Moving target | ☐ | Tốc độ / Speed: ___ m/s | |
| Khác / Other | ☐ | Mô tả: ___________ | |

### 2.8 Sơ đồ trường bắn / Range Diagram

> Vẽ hoặc đính kèm sơ đồ mặt bằng trường bắn, đánh dấu:
> Sketch or attach a floor plan showing:
> - Vị trí tuyến bắn / Firing line position
> - Vị trí các làn / Lane positions (numbered)
> - Vị trí bia / Target positions
> - Vị trí nguồn điện / Power outlet locations
> - Vị trí phòng chỉ huy / Command post location
> - Hướng bắn / Direction of fire (arrow)

```
[Đính kèm ảnh hoặc vẽ tại đây / Attach photo or sketch here]

Hướng bắn / Direction of fire: →

Firing line ──────────────────────────────────
  Lane 1    Lane 2    Lane 3   ...   Lane N

                    (range area)

Target line ──────────────────────────────────
  Target 1  Target 2  Target 3 ...   Target N

Backstop ═════════════════════════════════════
```

---

## SECTION 3: HẠ TẦNG ĐIỆN / POWER INFRASTRUCTURE

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 3.1 | Nguồn điện lưới / Grid power available? | ☐ Có / Yes ☐ Không / No | |
| 3.2 | Điện áp / Voltage | ☐ 220V ☐ 380V ☐ Khác: ___ | |
| 3.3 | Ổ cắm tại tuyến bắn / Outlets at firing line? | ☐ Có (số lượng: ___) ☐ Không | Cần ≥1 ổ cắm cho mỗi 2 làn |
| 3.4 | Ổ cắm tại tuyến bia / Outlets at target line? | ☐ Có (số lượng: ___) ☐ Không | |
| 3.5 | Ổ cắm phòng chỉ huy / Outlet at command post? | ☐ Có ☐ Không | Cho EDGE node |
| 3.6 | Máy phát điện dự phòng / Backup generator? | ☐ Có (công suất: ___ kW) ☐ Không | |
| 3.7 | Khoảng cách nguồn → tuyến bắn / Distance from power → firing line | | m |

> **Yêu cầu tối thiểu / Minimum requirement:**
> - 1 ổ cắm 220V cho mỗi 2 làn bắn (cảm biến VN-LOMAH)
> - 1 ổ cắm 220V cho EDGE node (phòng chỉ huy hoặc phòng kỹ thuật)
> - 1 ổ cắm 220V cho WiFi AP
> - Nếu không có điện: hệ thống hoạt động bằng pin 4 giờ (nhưng cần sạc hàng ngày)

---

## SECTION 4: HẠ TẦNG MẠNG / NETWORK INFRASTRUCTURE

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 4.1 | Mạng LAN hiện có? / Existing LAN? | ☐ Có ☐ Không | |
| 4.2 | Cổng Ethernet tại phòng chỉ huy? / Ethernet port at command post? | ☐ Có ☐ Không | Cho EDGE node |
| 4.3 | WiFi hiện có? / Existing WiFi? | ☐ Có (SSID: ___) ☐ Không | |
| 4.4 | Sóng di động / Cell coverage? | ☐ 4G ☐ 3G ☐ Không có | Backup cho remote monitoring |
| 4.5 | Khoảng cách phòng chỉ huy → tuyến bắn / Distance command post → firing line | | m |
| 4.6 | Có vật cản giữa AP và làn bắn? / Obstacles between AP and lanes? | ☐ Tường bê tông ☐ Cây ☐ Không | Ảnh hưởng WiFi |
| 4.7 | Có thiết bị thu phát sóng khác? / Other RF equipment on-site? | | Gây nhiễu / potential interference |

> **CORTEX RANGE tự cung cấp WiFi AP** — không cần mạng hiện có.
> Nhưng nếu có LAN sẵn: giảm thời gian cài đặt.

---

## SECTION 5: VỊ TRÍ LẮP ĐẶT / MOUNTING & INSTALLATION

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 5.1 | Vật liệu cọc/trụ tại tuyến bắn / Post/pillar material at firing line | ☐ Thép ☐ Bê tông ☐ Gỗ ☐ Không có | Cho gắn cảm biến |
| 5.2 | Chiều cao cọc/trụ / Post height | | m |
| 5.3 | Đường kính cọc / Post diameter | | mm (nếu tròn / if round) |
| 5.4 | Có thể khoan lỗ M8? / Can drill M8 holes? | ☐ Có ☐ Không | Bolt mount preferred |
| 5.5 | Có tường gần tuyến bắn? / Wall near firing line? | ☐ Có (khoảng cách: ___ m) ☐ Không | Alternative mount |
| 5.6 | Vị trí đặt EDGE node / EDGE node location | | Phòng kín, khô, có khóa preferred |
| 5.7 | Vị trí gắn WiFi AP / WiFi AP mount location | | Cao ≥3m, line-of-sight to all lanes |
| 5.8 | Đường cáp: có mương sẵn? / Cable route: existing conduit? | ☐ Có ☐ Không | Giảm thời gian kéo cáp |
| 5.9 | Khoảng cách kéo cáp tối đa / Max cable run distance | | m (firing line → EDGE node) |

> **Yêu cầu gắn cảm biến VN-LOMAH:**
> - Chiều cao: 1.0–1.5m trên tuyến bắn
> - Offset ngang: ±0.5m từ tâm làn
> - Gắn: bu lông M8 vào cọc thép hoặc bracket tường (kèm theo)
> - Cáp: đầu nối chống nước, ghi nhãn theo số làn

---

## SECTION 6: MÔI TRƯỜNG / ENVIRONMENTAL CONDITIONS

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 6.1 | Trong nhà hay ngoài trời? / Indoor or outdoor? | ☐ Ngoài trời ☐ Trong nhà ☐ Bán ngoài trời | |
| 6.2 | Mái che tuyến bắn? / Covered firing line? | ☐ Có ☐ Không | Bảo vệ thiết bị |
| 6.3 | Nhiệt độ cao nhất / Max temperature | | °C (mùa hè) |
| 6.4 | Mưa thường xuyên? / Frequent rain? | ☐ Có ☐ Không | Ảnh hưởng acoustic |
| 6.5 | Bụi / Dust level | ☐ Cao ☐ Trung bình ☐ Thấp | |
| 6.6 | Nguồn tiếng ồn khác / Other noise sources | | Đường, sân bay, trường bắn lân cận |

> **VN-LOMAH rated IP65** — chịu mưa trực tiếp.
> Nhưng mái che kéo dài tuổi thọ thiết bị và giảm nhiễu acoustic.

---

## SECTION 7: VẬN HÀNH / OPERATIONAL REQUIREMENTS

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 7.1 | Tần suất sử dụng / Usage frequency | ☐ Hàng ngày ☐ 3-4 lần/tuần ☐ 1-2 lần/tuần ☐ Ít hơn | |
| 7.2 | Số buổi bắn trung bình/tuần / Avg sessions/week | | |
| 7.3 | Số bắn thủ/buổi / Shooters per session | | |
| 7.4 | Loại đạn chính / Primary ammunition type | ☐ 5.56mm ☐ 7.62mm ☐ 12.7mm ☐ Khác: ___ | Ảnh hưởng acoustic model |
| 7.5 | Tiêu chuẩn đánh giá / Qualification standard | ☐ TCVN quân sự ☐ Công an ☐ Khác: ___ | Cho cấu hình PULSE scoring |
| 7.6 | Số sĩ quan trường bắn / Number of range officers | | Cần đào tạo tất cả |
| 7.7 | Chỉ huy xem từ xa? / Commander remote viewing? | ☐ Có ☐ Không | Cần 4G/LTE cho PULSE remote |
| 7.8 | Dữ liệu lưu trữ / Data retention requirement | ☐ 30 ngày ☐ 1 năm ☐ Lâu dài | Ảnh hưởng dung lượng EDGE |

---

## SECTION 8: LOGISTICS / HẬU CẦN

| # | Trường / Field | Giá trị / Value | Ghi chú / Notes |
|---|---------------|-----------------|-----------------|
| 8.1 | Đường tiếp cận / Access road condition | ☐ Tốt ☐ Xấu ☐ Off-road | Vận chuyển thiết bị |
| 8.2 | Khoảng cách từ TP gần nhất / Distance from nearest city | | km |
| 8.3 | Có chỗ ở cho kỹ thuật viên? / Accommodation for technician? | ☐ Tại đơn vị ☐ Khách sạn gần ☐ Không | 3-5 ngày lắp đặt |
| 8.4 | Ngày muốn lắp đặt / Preferred install date | | |
| 8.5 | Ràng buộc lịch / Schedule constraints | | Huấn luyện, diễn tập, lễ... |

---

## SECTION 9: AUTO-CONFIG PARAMETER SUMMARY

> **Section này do KN điền sau khi review — KHÔNG gửi cho POC.**
> This section is filled by KN after review — NOT sent to POC.

| Config Parameter | Derived From | Value | Validated? |
|-----------------|-------------|-------|------------|
| `lane_count` | §2.1 | — | ☐ |
| `lane_width_m` | §2.2 | — | ☐ |
| `primary_distance_m` | §2.4 | — | ☐ |
| `target_type` | §2.7 | — | ☐ |
| `sensor_count` | `lane_count × 1` (standard) or `×2` (high-accuracy) | — | ☐ |
| `sensor_mount_type` | §5.1, §5.4 | ☐ bolt ☐ clamp ☐ wall_bracket | ☐ |
| `power_source` | §3.1, §3.6 | ☐ grid ☐ battery ☐ generator | ☐ |
| `network_mode` | §4.1, §4.4 | ☐ self_wifi ☐ existing_lan ☐ lte_backup | ☐ |
| `edge_location` | §5.6 | — | ☐ |
| `cable_run_m` | §5.9 | — | ☐ |
| `ammo_type` | §7.4 | — | ☐ |
| `scoring_standard` | §7.5 | — | ☐ |
| `pulse_org_structure` | §7.6 | — | ☐ |
| `data_retention_days` | §7.8 | — | ☐ |
| `environment` | §6.1 | ☐ outdoor ☐ indoor ☐ semi | ☐ |
| `ip_rating_required` | §6.1, §6.4 | ☐ IP65 ☐ IP67 | ☐ |

### Conflicts / Flags

| # | Field | Issue | Severity | Resolution |
|---|-------|-------|----------|------------|
| — | — | — | — | — |

---

## SURVEY COMPLETION CHECKLIST

- ☐ All sections 1-8 filled (no blank required fields)
- ☐ Range diagram attached or sketched (§2.8)
- ☐ At least 1 photo of firing line included
- ☐ At least 1 photo of target line included
- ☐ Power location photo(s) included
- ☐ POC contact verified (Zalo message sent and received)

**Survey status:** ☐ COMPLETE ☐ INCOMPLETE — missing: _______________

---

*A1 Range Site Survey Form v1.0 — CORTEX RANGE deployment*
*Feeds directly into: A3 Equipment Configuration (auto-config script)*
*Template: reusable for all VN-RANGE deployments*
