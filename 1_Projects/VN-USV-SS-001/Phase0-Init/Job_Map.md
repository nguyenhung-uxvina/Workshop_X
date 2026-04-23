---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-USV-SS-001
skill: forge-job-map
---

# Job Map — VN-USV-SS-001 (Semi-Sub USV cho Biên Phòng)

## Job Statement

**Core Job:** Giám sát và tuần tra vùng biển ven bờ trong thời gian dài với khả năng quan sát thấp, không cần người trên phương tiện

**Related Jobs:**
- Phát hiện tàu lạ xâm nhập vùng biên trong mọi điều kiện thời tiết
- Trinh sát kín trước khi triển khai lực lượng chặn bắt
- Duy trì hiện diện giám sát liên tục tại các điểm nóng biên giới biển
- Thu thập dữ liệu hình ảnh/video phục vụ chứng cứ vi phạm
- Đánh lạc hướng / gây nhiễu đối phương khi cần (decoy role)

**Emotional Jobs:** An tâm rằng vùng biển được giám sát 24/7, không lo bỏ sót xâm nhập ban đêm
**Social Jobs:** Chỉ huy đồn được cấp trên đánh giá cao về khả năng kiểm soát vùng biển, không để xảy ra sự cố

## Customer Segments

| Segment | Vai trò | Quan tâm chính | Buyer ≠ User? |
|---------|---------|----------------|:-------------:|
| Chiến sĩ vận hành (USV Operator) | Điều khiển/giám sát USV từ GCS | Dễ dùng, tin cậy, không mất tín hiệu | **USER** |
| Chỉ huy đồn Biên phòng (CO) | Ra quyết định triển khai/thu hồi | Bao quát vùng biển, endurance, sẵn sàng | Decision-maker |
| Đội kỹ thuật đồn | Bảo dưỡng, sạc pin, sửa chữa | Đơn giản, phụ tùng có sẵn, ít bảo trì | **USER** |
| Bộ Tư lệnh BĐBP | Phê duyệt mua sắm | Hiệu quả chi phí, nội địa hóa, phù hợp học thuyết | **BUYER ≠ USER** |
| Lực lượng chặn bắt | Sử dụng intel từ USV để chặn bắt | Hình ảnh rõ, vị trí chính xác, real-time | Downstream consumer |

**⚠ Gotcha:** Bộ Tư lệnh BĐBP (buyer) viết spec "autonomy Level 3, endurance 12h." Chiến sĩ vận hành (user) nói "tôi cần biết nó ở đâu, nhìn thấy gì, và lấy về được khi cần." Hai ngôn ngữ khác nhau.

## Consumption Chain

```
TRƯỚC:   Tình báo → xác định điểm nóng → phê duyệt triển khai → [CORE JOB 8 bước]
SAU:     Thu hồi → sạc pin → phân tích dữ liệu → báo cáo → quyết định chặn bắt
                                    ↑
                      USV là MẮT CỦA ĐỒN, không phải VŨ KHÍ
                      Giá trị = thông tin, không phải lực lượng
```

## 8-Step Job Map

### Step 1: DEFINE — Xác định nhiệm vụ tuần tra
- Trigger: Tình báo cảnh báo hoạt động đáng ngờ, hoặc lịch tuần tra định kỳ
- "Cần giám sát khu vực X (tọa độ) trong Y giờ, phát hiện tàu loại Z"
- "Chế độ: bán ngầm (kín) hay mặt nước (tốc độ)?"
- "Ưu tiên: phát hiện sớm (xa) hay theo dõi kín (gần)?"
- Pain: **Không có USV → chỉ dựa vào ca nô tuần tra (đắt, lộ, phụ thuộc thời tiết)**
- Pain: Thiếu thông tin thời gian thực → ra quyết định chậm

### Step 2: LOCATE — Chuẩn bị phương tiện
- "Kiểm tra USV: pin, camera, thông tin liên lạc, tình trạng thân"
- "Kiểm tra GCS: laptop, antenna, phần mềm, kết nối LoRa/4G"
- "Chuẩn bị waypoint mission (nạp vào QGroundControl)"
- Pain: **Pin sạc mất 4-6 giờ** → không triển khai khẩn cấp được
- Pain: Thiếu pin dự phòng → downtime giữa các ca tuần tra

### Step 3: PREPARE — Triển khai xuống biển
- "Vận chuyển USV đến điểm hạ thủy (xe bán tải / ca nô)"
- "Hạ thủy (2 người khiêng, thả từ bờ hoặc từ ca nô)"
- "Kết nối LoRa/4G, xác nhận GPS lock"
- "Arm hệ thống, chuyển sang chế độ tự chủ (auto mission)"
- Pain: **USV nặng → cần 2-3 người hạ thủy** (ca nô nhỏ khó thao tác)
- Pain: **GPS lock chậm** tại vị trí ven bờ gần núi/đảo

### Step 4: CONFIRM — Xác nhận sẵn sàng
- "Kiểm tra: telemetry OK? Camera stream? Depth hold?"
- "Test dive: ballast → semi-submerged → surface → OK"
- "Confirm waypoint mission loaded, battery sufficient for mission time"
- "Confirm: fail-safe OK (NC valve test → auto-surface)"
- Pain: Không có BIST tự động → phải test thủ công từng hệ thống
- Pain: **Không biết chắc NC valve hoạt động** cho đến khi thật sự fault

### Step 5: EXECUTE — Tuần tra / Giám sát
- "USV tự chạy waypoint, chuyển giữa surface/semi-sub theo mission plan"
- "Camera stream về GCS qua 4G (real-time) hoặc LoRa (data burst)"
- "Phát hiện mục tiêu: operator xem hình ảnh, đánh dấu vị trí"
- "USV giữ khoảng cách, theo dõi kín (semi-sub mode)"
- "Operator báo cáo lên chỉ huy: loại tàu, vị trí, hướng di chuyển"
- Pain: **Mất tín hiệu liên lạc** → không biết USV ở đâu → mất USV
- Pain: **Camera chất lượng kém ban đêm/sương mù** → không nhận diện
- Pain: Semi-sub mode bị sóng lớn → mất ổn định → pitch instability >6 kn
- Pain: **Endurance không đủ** → phải thu hồi giữa nhiệm vụ quan trọng

### Step 6: MONITOR — Theo dõi trạng thái USV
- "Kiểm tra pin (% còn lại, thời gian còn lại)"
- "Kiểm tra tín hiệu LoRa/4G (RSSI, packet loss)"
- "Kiểm tra depth (USV có giữ đúng độ sâu không?)"
- "Kiểm tra vị trí GPS so với mission plan (drift?)"
- Pain: **Nhiều thông số → operator overload** (pin, tín hiệu, depth, position, camera)
- Pain: Không có cảnh báo tự động → phải nhìn liên tục → mệt mỏi

### Step 7: MODIFY — Điều chỉnh nhiệm vụ
- "Thay đổi waypoint mid-mission (mục tiêu di chuyển)"
- "Chuyển chế độ: surface → semi-sub (khi cần kín)"
- "Thay đổi tốc độ: cruise → sprint (khi cần đuổi theo)"
- "Emergency recall: quay về bến"
- Pain: **Latency cao** (LoRa: seconds) → lệnh thay đổi chậm
- Pain: Không có AI tự điều chỉnh → mọi thay đổi cần operator

### Step 8: CONCLUDE — Thu hồi và bảo dưỡng
- "Ra lệnh RTL (Return to Launch) hoặc lái về bằng tay"
- "Vớt USV lên bờ/ca nô (2 người, có thể ướt)"
- "Rửa nước ngọt (chống ăn mòn muối)"
- "Sạc pin (4-6 giờ)"
- "Download dữ liệu mission (video, GPS log, telemetry)"
- "Kiểm tra thân, chân vịt, mast, camera"
- "Báo cáo kết quả nhiệm vụ lên chỉ huy"
- Pain: **Vớt USV nặng 30-80 kg từ nước → nguy hiểm nếu sóng lớn**
- Pain: Dữ liệu download thủ công (USB) → chậm, dễ mất
- Pain: **Rửa nước ngọt bắt buộc sau mỗi ca** → tốn thời gian
- Pain: Không có automated mission log → báo cáo thủ công

## Status

- **Source:** AI draft từ domain knowledge + VN coastal defense context + semi-sub research (Session 52)
- **Validation:** ⚠️ PENDING — cần interview ≥5 cán bộ Biên phòng
- **Next:** CEO establish stakeholder access → interview → validate job map
