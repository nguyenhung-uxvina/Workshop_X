# TÍNH NĂNG KỸ CHIẾN THUẬT
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG CHỐNG UAV VÀ USV — PHIÊN BẢN FIXED (PA-8)
# PHÒNG THỦ ĐẢO / NHÀ GIÀN / CẢNG

**Số hiệu:** WX-CUAV-SIM-TNKCT-PA8
**Phiên bản:** 1.0
**Ngày:** 07/04/2026
**Phân loại:** Tài liệu kỹ thuật — không mật
**Concept:** PA-8 FIXED (2 trạm bắn, 240° FOV, không có motion platform)
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Huấn luyện

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT | Nội dung | Mô tả |
|----|----------|-------|
| 1.1 | Nhiệm vụ chính | Huấn luyện kíp bắn phòng thủ cố định chống UAV và USV tại đảo, nhà giàn, cảng bằng mô phỏng |
| 1.2 | Nhiệm vụ phụ | Đánh giá năng lực phối hợp kíp; luyện tập phân công sector; rèn luyện IFF; sát hạch định kỳ |
| 1.3 | Đối tượng huấn luyện | Xạ thủ súng máy tại ụ súng cố định trên đảo, nhà giàn DK1, tháp canh cảng quân sự/dân sự |
| 1.4 | Quy mô kíp | 2 xạ thủ + 1 chỉ huy kíp (instructor đóng vai chỉ huy trong kịch bản) |
| 1.5 | Hình thức huấn luyện | Mô phỏng 100% (Pure Virtual) — không sử dụng đạn thật |
| 1.6 | Vũ khí mô phỏng | **Mô đun thay nhanh (< 5 phút):** DSHK 12.7mm, NSV 12.7mm (Phase 1); KPVT 14.5mm, ZU-23-2 23mm (Phase 2); PKM 7.62mm (tùy chọn). Mỗi trạm 1 vũ khí riêng |
| 1.7 | Kiến trúc vũ khí | **Mô đun** — giá đỡ chung (universal cradle) × 2 + mô đun vũ khí thay thế nhanh. Hệ thống tự nhận biết loại súng qua NFC, tự động cấu hình toàn bộ (đạn đạo, giật, tốc độ bắn, kính ngắm, chấm điểm) |
| 1.8 | Môi trường mô phỏng | Đảo san hô, nhà giàn DK1, cảng quân sự/dân sự — Biển Đông, điều kiện nhiệt đới |
| 1.9 | Đặc điểm phòng thủ cố định | Vị trí chiến đấu không rung lắc theo sóng — xạ thủ đứng vững, thách thức là phân vùng, phối hợp kíp, và phân loại mục tiêu (IFF) |

### 2. Khả năng huấn luyện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 2.1 | Loại mục tiêu bay (UAV) | ≥ 5 | loại | DJI Mavic trinh sát, FPV kamikaze, trinh sát trung, đạn bay lảng vảng, bầy đàn |
| 2.2 | Loại mục tiêu mặt nước (USV) | ≥ 3 | loại | Tiếp cận thẳng, zigzag né tránh, tốc độ cao 60 hải lý |
| 2.3 | Số lượng mục tiêu đồng thời | 8-12 | mục tiêu | Swarm UAV + USV tiếp cận cùng lúc |
| 2.4 | Tầm phát hiện mục tiêu UAV Group 1 | ≥ 500 | m | Quan sát từ vị trí cao — lợi thế đảo/nhà giàn |
| 2.5 | Tốc độ mục tiêu UAV | 30-250 | km/h | Từ trinh sát vòng tròn đến FPV kamikaze lao bổ nhào |
| 2.6 | Tốc độ mục tiêu USV | 20-60 | hải lý/giờ | Từ tiếp cận thận trọng đến tốc độ tấn công |
| 2.7 | Quỹ đạo bay UAV | ≥ 5 | kiểu | Vòng tròn trinh sát, lao bổ nhào, pop-up từ sau đảo, bầy đàn phân tán, bay thấp sát mặt biển |
| 2.8 | Quỹ đạo USV | ≥ 3 | kiểu | Thẳng, zigzag cao tốc, tiếp cận 3 hướng đồng thời |
| 2.9 | Điều kiện ánh sáng | 3 | loại | Ban ngày, hoàng hôn/bình minh, ban đêm (đèn cảng, flare) |
| 2.10 | Điều kiện thời tiết | 3 | loại | Trời quang, mưa nhiệt đới, sương mù biển (tầm nhìn 500m-10km) |
| 2.11 | Trạng thái biển mô phỏng | 0-4 | Sea State | Biển lặng đến biển động — ảnh hưởng tốc độ USV, tầm nhìn |
| 2.12 | Kịch bản sẵn có khi giao hàng | ≥ 7 | kịch bản | FXD-01 đến FXD-07 (FIXED-exclusive) |
| 2.13 | Tạo kịch bản mới (instructor) | ≤ 15 | phút | Giao diện kéo-thả, không cần lập trình |
| 2.14 | Phân công sector tự động | Có | — | HUD sector overlay cho từng xạ thủ, overlapping zone 60° |
| 2.15 | Luyện tập IFF | Có | — | PORT-02 cảng dân sự — vùng cấm bắn có hiển thị rõ |
| 2.16 | Hồ sơ vũ khí Phase 1 | 2 | loại | DSHK 12.7mm (ST1) + NSV 12.7mm (ST2) |
| 2.17 | Hồ sơ vũ khí Phase 2 | +2 | loại | KPVT 14.5mm + ZU-23-2 23mm |
| 2.18 | Thời gian thay loại vũ khí | ≤ 5 | phút | Tháo module cũ → lắp mới → tự nhận biết → sẵn sàng |
| 2.19 | Kịch bản phản ứng nhanh (FPV kamikaze) | < 10 | giây | FXD-02 — xạ thủ phải phát hiện và tiêu diệt trong 10 giây |

### 3. Độ chính xác mô phỏng

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Mô hình đạn đạo | 6DOF | — | Trọng lực, sức cản không khí, gió, góc ngang/dọc |
| 3.2 | Sai số so với bảng bắn (12.7mm B-32) | ≤ 5 | % | Tại tầm 100–1.500m |
| 3.3 | Sai số so với bảng bắn (14.5mm BS) | ≤ 5 | % | Tại tầm 100–2.000m (Phase 2) |
| 3.4 | Sai số so với bảng bắn (23mm OFZ) | ≤ 5 | % | Tại tầm 100–2.500m (Phase 2) |
| 3.5 | Bù chuyển động nền tảng vào đường đạn | KHÔNG | — | Vị trí cố định — đường đạn thuần túy, không bù motion |
| 3.6 | Ảnh hưởng gió | Có | — | Gió nhiệt đới Biển Đông — tốc độ và hướng theo kịch bản |
| 3.7 | Xác suất phân loại trúng/trượt | ≥ 95 | % | Collision volume trên target mesh |
| 3.8 | Tốc độ khung hình | ≥ 60 | fps | Liên tục với 4 viewport, 8-12 mục tiêu |
| 3.9 | Độ trễ tổng (cò → phản hồi hình) | ≤ 50 | ms | End-to-end: encoder 2ms → USB 3ms → Unity 4ms → render 12ms → HDMI 8ms → projector 17ms |
| 3.10 | Động cơ đạn đạo | V-SMASH core | — | Tái sử dụng từ sản phẩm V-SMASH (IRONMESH platform) |

### 4. Đánh giá và phân tích sau buổi tập (AAR)

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 4.1 | Chấm điểm tự động — cá nhân | Trúng đích, thời gian phản ứng, tiết kiệm đạn, ưu tiên mục tiêu |
| 4.2 | Chấm điểm tự động — phối hợp kíp | Phân công sector, target handoff, không để lọt overlapping zone, IFF compliance |
| 4.3 | Phát lại 3D (AAR replay) | Từ mọi góc nhìn bao gồm góc god-eye 2 trạm đồng thời, tua chậm, zoom |
| 4.4 | Dữ liệu ghi lại | Đường ngắm liên tục 10Hz (cả 2 trạm), thời điểm bắn, trúng/trượt, handoff events |
| 4.5 | Xuất báo cáo | CSV (dữ liệu thô) + PDF (báo cáo tổng hợp kíp + cá nhân, có thể in) |
| 4.6 | Hồ sơ xạ thủ | Theo dõi cá nhân 5 kỹ năng + theo dõi kíp (thêm crew coordination score) |
| 4.7 | Đề xuất bài tập | Tự động đề xuất kịch bản tiếp theo cho kíp dựa trên điểm yếu tập thể |
| 4.8 | Xếp hạng | So sánh giữa các kíp + xu hướng kíp theo thời gian |
| 4.9 | Phân tích phối hợp | Biểu đồ timeline: ai bắn khi nào, handoff có đúng lúc không, bỏ sót mục tiêu nào |
| 4.10 | Dung lượng lưu trữ | ~80 MB/buổi tập (2 trạm) — 1TB ≈ 12.500 buổi |

---

## II. TÍNH NĂNG KỸ THUẬT

### 5. Hệ thống hiển thị

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 5.1 | Loại hiển thị | Projection | — | 4 máy chiếu short-throw lên màn hình cong |
| 5.2 | Số máy chiếu | 4 | máy | Mỗi máy phủ 60°, ghép liền 240° |
| 5.3 | Góc nhìn ngang (FOV) | 240 | độ | 4 màn hình ghép liền + edge blending |
| 5.4 | Góc nhìn dọc (FOV) | ≥ 60 | độ | Đủ nhìn UAV trên cao (+85°) và USV ở góc thấp |
| 5.5 | Độ phân giải tổng | ~7.680 × 1.080 | pixel | 4 × Full HD sau blending overlap |
| 5.6 | Độ sáng máy chiếu | ≥ 3.000 | lumens/máy | Epson/BenQ EB-L200SX hoặc tương đương — có sẵn tại VN |
| 5.7 | Màn hình cong | 6 × 2 | m | Bán kính cong ~3,5m, vải matt-white gain 1.0-1.3, khung nhôm Workshop X |
| 5.8 | Khoảng cách xạ thủ ↔ màn hình | ~2,5 | m | Tối ưu immersion + tránh nhìn thấy pixel |
| 5.9 | Edge blending | Tự động (phần mềm) | — | Vùng chồng lấp ~15% (90px/máy), hiệu chỉnh gamma |
| 5.10 | An toàn mắt (IEC 62471) | Đạt | — | Máy chiếu phía sau/bên xạ thủ, khoảng cách ≥ 2m |
| 5.11 | Động cơ render | Unity 6 LTS + HDRP | — | Hỗ trợ multi-display native, VN developer pool lớn |
| 5.12 | GPU | NVIDIA RTX 4090 | — | 1 GPU render 4 viewport đồng thời — không cần 2 GPU |
| 5.13 | Môi trường 3D | 5 preset cố định | — | ISLAND-01, ISLAND-02, DK1-01, PORT-01, PORT-02 |
| 5.14 | Mô phỏng môi trường | Sóng vỗ đảo + gió + spray particle | — | Không cần FFT Gerstner ocean như LITE — nhẹ hơn 15% GPU |
| 5.15 | Chu kỳ ngày/đêm | Day/dusk/night | — | Ánh sáng mặt trời + đèn cảng + flare (ban đêm) |

### 6. Bệ vũ khí mô phỏng — KIẾN TRÚC MÔ ĐUN

#### 6A. Giá đỡ chung (Universal Cradle — × 2 trạm)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 6.1 | Xoay ngang (traverse) | ≥ 60 | °/s | Slip clutch + encoder 0,1° |
| 6.2 | Ngóc dọc (elevation) | -10 → +87 | độ | Encoder 0,1° — đối trọng cân bằng trong mô đun vũ khí |
| 6.3 | Kháng lực xoay | 0-10 | Nm | Phanh từ tính (magnetic powder brake) — tự điều chỉnh theo loại súng |
| 6.4 | Bệ đỡ | Thép hàn 60×40mm, bolt xuống sàn | — | 3 vị trí chiều cao (155-185cm) |
| 6.5 | An toàn góc bắn | Software + hard stop cơ học | — | Dual redundancy — không đập vào màn hình hoặc vào cradle kia |
| 6.6 | Giao diện mô đun | Quick-release plate + 12-pin MIL | — | 2 chốt định vị + 4 bu lông bướm M10 |
| 6.7 | Tự nhận biết loại súng | NFC (ISO 14443A) | — | Đặt súng → đọc tag → cấu hình tự động toàn hệ thống |
| 6.8 | Thời gian thay súng | ≤ 5 | phút | 1-2 người, không cần công cụ chuyên dụng |
| 6.9 | Nhận dạng trạm | ID ST1 / ST2 cố định | — | Phân biệt sector, scoring, AAR |

#### 6B. Mô đun vũ khí (Weapon Module — thay thế nhanh)

| TT | Mô đun | Vũ khí | Cỡ đạn | Trọng lượng | Lực giật | Lực cò | ROF | Phân bổ mặc định | Giai đoạn |
|----|--------|--------|--------|-------------|----------|--------|-----|------------------|-----------|
| 6.10 | WM-01 | DSHK | 12.7×108mm | ~10 kg | 15-20 N | 2-3 kg | 600 v/p | ST1 — Sector 1 | Phase 1 |
| 6.11 | WM-02 | NSV | 12.7×108mm | ~8 kg | 15-20 N | 1,5-2,5 kg | 700 v/p | ST2 — Sector 2 | Phase 1 |
| 6.12 | WM-03 | KPVT | 14.5×114mm | ~12 kg | 25-35 N | 3-5 kg | 550 v/p | Tùy chọn | Phase 2 |
| 6.13 | WM-04 | ZU-23-2 | 23×152mm | ~15 kg | 40-60 N | 4-6 kg | 800 v/p | Tùy chọn | Phase 2 |
| 6.14 | WM-05 | PKM | 7.62×54R | ~7 kg | 8-12 N | 1,5-2 kg | 650 v/p | Tùy chọn | Tùy chọn |

**Mỗi mô đun gồm:** Thân súng CNC nhôm 6061 (kích thước ±5mm so với thật) + solenoid giật 24VDC + cò micro-switch có lò xo điều chỉnh + kính ngắm replica CNC + đối trọng cân bằng + NFC tag (loại + serial + hiệu chuẩn + số phát đã bắn).

#### 6C. Tự động cấu hình khi thay súng

Khi lắp mô đun vũ khí mới vào bất kỳ trạm nào, hệ thống đọc chip NFC và tự động thay đổi:

| TT | Hệ thống con | Tự động thay đổi |
|----|-------------|------------------|
| 6.15 | Đạn đạo | Load bảng bắn 6DOF đúng cỡ đạn cho trạm tương ứng |
| 6.16 | Giật | Điều chỉnh PWM solenoid → lực giật đúng loại |
| 6.17 | Kháng lực | Set phanh từ theo trọng lượng súng |
| 6.18 | Tốc độ bắn | Set ROF đúng loại |
| 6.19 | Kính ngắm | Đổi reticle overlay phù hợp loại kính ngắm (trên HUD trạm tương ứng) |
| 6.20 | Giao diện | Hiển thị tên vũ khí, cỡ đạn, cơ số đạn trên HUD trạm tương ứng |
| 6.21 | Chấm điểm | Áp dụng tiêu chí chấm điểm phù hợp loại vũ khí cho trạm tương ứng |
| 6.22 | Âm thanh | Thay tiếng súng theo loại — đồng bộ qua cả hệ thống 5.1 |
| 6.23 | Ghi chép | Ghi loại vũ khí trạm X vào hồ sơ buổi tập (AAR) |

#### 6D. Quy trình thay vũ khí

| Bước | Hành động | Thời gian |
|------|-----------|-----------|
| 1 | Instructor bấm "Thay vũ khí Trạm X" → trạm đó vào safe mode | 5 giây |
| 2 | Tháo 4 bu lông bướm M10 | 60 giây |
| 3 | Rút connector 12-pin MIL (xoay bayonet) | 5 giây |
| 4 | Nhấc mô đun cũ ra (2 người nếu > 12kg) | 30 giây |
| 5 | Đặt mô đun mới → chốt định vị tự canh | 30 giây |
| 6 | Cắm connector 12-pin | 5 giây |
| 7 | Siết 4 bu lông bướm | 60 giây |
| 8 | NFC auto-detect → auto-configure → instructor xác nhận trên GUI | 30 giây |
| | **TỔNG** | **~4 phút** |

*Lưu ý: Trạm còn lại tiếp tục hoạt động trong suốt quá trình thay vũ khí trạm kia.*

### 7. Hệ thống mô phỏng chuyển động — KHÔNG CÓ

| TT | Nội dung | Giải thích |
|----|----------|-----------|
| 7.1 | Motion platform | **Không trang bị** — PA-8 FIXED mô phỏng vị trí chiến đấu cố định |
| 7.2 | Lý do kỹ thuật | Đảo, nhà giàn DK1, và tháp canh cảng không rung lắc theo sóng biển — đây là đặc điểm thực tế |
| 7.3 | Lý do huấn luyện | Training transfer chính xác — xạ thủ không nên luyện bù motion khi thực tế không có motion |
| 7.4 | Lợi ích chi phí | Tiết kiệm $1.580-2.420 R&D; giảm phức tạp cơ điện; đơn giản hóa bảo trì |
| 7.5 | Thách thức thay thế | Thay vì motion training: phân công sector, phối hợp 2 trạm, IFF training, phản ứng nhanh FPV |
| 7.6 | Lắp đặt đơn giản hơn | Sàn phẳng hoàn toàn — không cần pit, không cần cáp động (flex cable), không cần clearance cơ học |

### 8. Hệ thống âm thanh

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 8.1 | Kênh | 5.1 | surround | Hướng tiếp cận mục tiêu qua spatial audio — phân biệt rõ ST1/ST2 |
| 8.2 | Âm lượng | ≥ 85 | dB | 5 loa vệ tinh + 1 subwoofer + amplifier |
| 8.3 | Tiếng súng | Sampled theo loại vũ khí | — | Tự đổi theo NFC tag khi thay mô đun |
| 8.4 | Âm thanh môi trường (outdoor) | Sóng vỗ đảo/giàn, gió biển, tiếng hải âu | — | Spatial 3D — phân biệt hướng tiếp cận UAV/USV |
| 8.5 | Chuẩn mồi nguy hiểm | Còi báo động, còi cảnh báo | — | Tích hợp vào kịch bản (FXD-05, FXD-06) |
| 8.6 | KHÔNG có | Tiếng máy tàu, tiếng sóng do tàu chạy | — | Khác biệt với LITE — môi trường đảo không có tiếng máy tàu |
| 8.7 | Tích hợp phần mềm | FMOD 5.1 surround | — | Quản lý spatial audio + mix thời gian thực |

### 9. Trạm huấn luyện viên

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 9.1 | Phần cứng | PC chuyên dụng + 2 màn hình 27" | — | Monitor 1: God-eye view 2 trạm; Monitor 2: AAR/scoring real-time |
| 9.2 | Giao diện | 100% tiếng Việt | — | GUI kéo-thả, không cần lập trình |
| 9.3 | Xem đồng thời 2 trạm | Có | — | Split-view: ST1 aim path + ST2 aim path + overview |
| 9.4 | Thêm mục tiêu mới real-time | ≤ 1 | giây | Kéo-thả trên bản đồ chiến thuật — inject ngay vào kịch bản đang chạy |
| 9.5 | Phân công sector thủ công | Có | — | Instructor override sector bất kỳ lúc — giả lập lệnh chỉ huy |
| 9.6 | Điều chỉnh real-time | Có | — | Thời tiết, tầm nhìn, tốc độ mục tiêu, tạm dừng/tiếp tục |
| 9.7 | Kích hoạt IFF zone | Có | — | Bật/tắt vùng cấm bắn PORT-02 theo ý chí instructor |
| 9.8 | Phát lại tức thì | Có | — | AAR replay ngay trên màn hình instructor sau mỗi lần chạy |
| 9.9 | Đào tạo sử dụng | ≤ 2 | ngày | Bao gồm tạo kịch bản + quản lý 2 trạm + AAR |

---

## III. ĐẶC TÍNH VẬN HÀNH

### 10. Lắp đặt và triển khai

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 10.1 | Diện tích phòng tối thiểu | 8 × 8 | m | Chiều cao trần ≥ 3m |
| 10.2 | Diện tích mỗi weapon station | ≤ 2 × 2 | m | Bao gồm cradle + không gian thao tác |
| 10.3 | Khoảng cách giữa 2 trạm | ≥ 1,5 | m | Đủ không gian thao tác độc lập |
| 10.4 | Số kiện vận chuyển | ≤ 5 | kiện | Mỗi kiện ≤ 200kg (thêm 1 kiện so với LITE do có 2 cradle) |
| 10.5 | Thời gian lắp đặt tại đơn vị | ≤ 10 | giờ | 2 người; hex key + tuốc nơ vít đủ — thêm 2h so với LITE do căn chỉnh 4 projector |
| 10.6 | Qua cửa tiêu chuẩn | 900 × 2.100 | mm | Tất cả kiện tháo rời được |
| 10.7 | Yêu cầu đặc biệt | Không có pit sàn | — | Không có motion platform → sàn phẳng hoàn toàn |
| 10.8 | Sơn phòng | Tường + trần tối | — | Tránh phản chiếu projector — sơn xám/đen mờ |
| 10.9 | Điều hòa không khí | ≥ 2 HP | — | Làm mát render PC + 4 projector (~2,5kW tỏa nhiệt) |
| 10.10 | Vận chuyển đường bộ | Xe tải 2,5T | — | Đường VN, chống sốc, không cần xe chuyên dụng |
| 10.11 | Vận chuyển container | 20ft | — | Xuất khẩu thị trường Đông Nam Á |

### 11. Nguồn điện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 11.1 | Nguồn cấp | 220V ±10%, 50Hz | — | Đơn pha, tiêu chuẩn VN |
| 11.2 | Tổng tiêu thụ (đỉnh) | ~2,5 | kW | Vừa ổ cắm 20A — 4 projector 200W×4 + render PC 500W + instructor PC 200W + 2 cradle 50W + audio 100W |
| 11.3 | Tổng tiêu thụ (trung bình) | ~2,2 | kW | Tiết kiệm hơn ELITE/ENHANCED (không có motion) |
| 11.4 | UPS dự phòng | ≥ 15 | phút | 2kVA — bảo vệ dữ liệu session khi mất điện đột ngột |
| 11.5 | Phân bổ nguồn | PDU có nhãn, keyed connector | — | 4 projector + render PC + instructor PC + 2 cradle + audio — riêng từng nhánh |

### 12. Vận hành

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 12.1 | Khởi động cold boot → sẵn sàng | ≤ 6 | phút | Bao gồm tự kiểm tra 2 phút + warm-up projector 2 phút |
| 12.2 | Tự kiểm tra khi khởi động | ≤ 2 | phút | Kiểm tra 2× encoder, 2× NFC, 4× projector, audio, network |
| 12.3 | Vận hành liên tục | ≥ 8 | giờ/ngày | Không cần restart |
| 12.4 | Ekip vận hành tối thiểu | 1 instructor + 2 xạ thủ | người | Instructor giữ vai chỉ huy kíp trong kịch bản |
| 12.5 | Đào tạo instructor vận hành | ≤ 2 | ngày | Bao gồm tạo kịch bản + quản lý 2 trạm + AAR + IFF training |
| 12.6 | Đào tạo kỹ thuật viên bảo trì | ≤ 3 | ngày | Bao gồm thay module + căn chỉnh projector + xử lý sự cố |
| 12.7 | Thay vũ khí trong khi trạm kia bắn | Có thể | — | Trạm 2 vẫn hoạt động khi thay vũ khí trạm 1 |

### 13. Bảo trì và tuổi thọ

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 13.1 | MTBF | ≥ 500 | giờ | — |
| 13.2 | MTTR (có spare parts) | ≤ 4 | giờ | — |
| 13.3 | Spare parts tại VN | ≤ 7 | ngày giao | 100% có sẵn hoặc giao nhanh |
| 13.4 | Bảo dưỡng định kỳ | ≤ 2 | giờ/tháng | Theo checklist — không có motor actuator (đơn giản hơn LITE) |
| 13.5 | Vòng đời thiết kế | ≥ 10 | năm | — |
| 13.6 | Cập nhật nội dung | Mỗi 12 | tháng | Kịch bản mới, hành vi mục tiêu mới, loại UAV/USV mới |
| 13.7 | Nâng cấp GPU/display | Modular | — | Thay render PC hoặc projector không ảnh hưởng phần cơ khí |
| 13.8 | Phần mềm | 100% on-premise | — | Không phụ thuộc server nước ngoài, cập nhật qua USB/LAN nội bộ |
| 13.9 | Theo dõi bảo trì mô đun | NFC write-back | — | Đếm số phát bắn → cảnh báo khi đến ngưỡng bảo dưỡng solenoid |
| 13.10 | Lợi thế bảo trì so với LITE | Không có actuator tuyến tính, không có flex cable | — | Loại bỏ 2 nguồn hỏng hóc cơ học phổ biến nhất |

---

## IV. CHI PHÍ VÀ HIỆU QUẢ

### 14. Chi phí

| TT | Hạng mục | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 14.1 | Giá bán PA-8 FIXED (đầy đủ — 2 trạm, WM-01+WM-02) | 55.000-80.000 | USD/bộ | Đủ 5 phân hệ, không có motion platform |
| 14.2 | Mô đun vũ khí bổ sung (WM-03 KPVT) | ~3.000 | USD/mô đun | Bao gồm phần mềm bảng bắn |
| 14.3 | Mô đun vũ khí bổ sung (WM-04 ZU-23-2) | ~3.500 | USD/mô đun | Bao gồm phần mềm bảng bắn |
| 14.4 | Chi phí vận hành | ≤ 5 | USD/giờ | Điện ~0,6 USD/giờ (2,5kW × $0,1/kWh × 2) + hao mòn |
| 14.5 | Chi phí bảo trì hàng năm | ≤ 5% giá bán | — | ~$2.750-4.000/năm |
| 14.6 | Chi phí R&D | ~14.860-17.860 | USD | Không có motion platform → thấp hơn LITE |
| 14.7 | Biên lợi nhuận gộp | 73-81 | % | Cao hơn LITE 5-8 điểm nhờ R&D thấp hơn |

### 15. So sánh hiệu quả kinh tế

| Phương thức | Chi phí/giờ | Đạn tiêu thụ | Hạn chế |
|-------------|-------------|-------------|---------|
| Bắn thật 12.7mm tại đảo | $250-1.500 | 50-200 viên | Vận chuyển đạn ra đảo — chi phí logistic cao |
| Bắn thật 23mm (ZU-23-2) | $500-3.000 | 20-100 viên | Hiếm cơ hội bắn C-UAV thực tại vị trí đảo |
| Diễn tập thực địa (đảo/DK1) | $5.000-20.000 | Cao | Tổ chức phức tạp, nguy hiểm, hạn chế tần suất |
| **Mô phỏng PA-8 FIXED** | **≤ $5** | **0** | **Không giới hạn thời tiết, an toàn 100%, bất kỳ thời điểm nào** |
| **Tiết kiệm vs bắn thật** | **98-99,7%** | **100%** | **Huấn luyện 24/7, mọi kịch bản — kể cả tấn công nhà giàn DK1** |

**Đặc biệt:** PA-8 FIXED cho phép huấn luyện kịch bản **không thể thực hiện trong thực tế** (tấn công nhà giàn DK1 bằng UAV kamikaze, bầy đàn 8-12 mục tiêu đồng thời) một cách an toàn, lặp đi lặp lại, với đánh giá định lượng đầy đủ.

---

## V. KHÁC BIỆT SO VỚI LITE (PA-2)

| TT | Hạng mục | LITE (PA-2) | FIXED (PA-8) | Tác động |
|----|----------|-------------|--------------|---------|
| 1 | Số trạm bắn | 1 | **2** | Huấn luyện kíp, phối hợp sector |
| 2 | Motion platform | 2-DOF (roll ±12°, pitch ±8°) | **KHÔNG** | -$1.580-2.420 chi phí; đơn giản hơn |
| 3 | FOV màn hình | 180° (3 projector) | **240° (4 projector)** | +1 projector +$500-800 |
| 4 | Kích thước màn hình | 4m × 2m | **6m × 2m** | Rộng hơn 50% |
| 5 | Môi trường 3D | Tàu chiến + biển mở | **Đảo + nhà giàn DK1 + cảng** | 5 preset FIXED-exclusive |
| 6 | Kịch bản | Bảo vệ tàu (biển mở) | **FXD-01 → FXD-07 (đảo/giàn/cảng)** | 7 kịch bản FIXED-exclusive |
| 7 | Scoring | Cá nhân xạ thủ | **Crew coordination + cá nhân** | Đánh giá phối hợp kíp |
| 8 | Âm thanh môi trường | Sóng biển, engine tàu | **Gió đảo, sóng vỗ, alarm** | Không có tiếng máy tàu |
| 9 | IFF training | Không | **Có (PORT-02)** | Bổ sung kỹ năng phân loại mục tiêu |
| 10 | Diện tích phòng | 6 × 8 m | **8 × 8 m** | Cần thêm diện tích cho 2 trạm |
| 11 | Giá bán | $50.000-70.000 | **$55.000-80.000** | +$5.000-10.000 (2 trạm) |
| 12 | R&D cost | ~$19.395-28.385 | **~$14.860-17.860** | **Thấp hơn $4.535-10.525** |
| 13 | Biên lợi nhuận | 55-73% | **73-81%** | Cao hơn nhờ R&D thấp, giá cao |
| 14 | Thị trường mục tiêu | Tàu chiến, tàu tuần tra | **Đảo Trường Sa, nhà giàn DK1, cảng** | Phân khúc riêng biệt |

---

## VI. THÀNH PHẦN HỆ THỐNG

### 16. Bảng kê thành phần chính

| TT | Phân hệ | Thành phần | SL | Ghi chú |
|----|---------|------------|----|---------|
| | **SS1 — Trạm bắn ST1 (Universal Cradle #1)** | | | |
| 1 | | Bệ đỡ thép hàn + interface plate + locating pins | 1 | Workshop X, cố định xuống sàn |
| 2 | | Encoder xoay 0,1° (traverse + elevation) | 2 | — |
| 3 | | Magnetic powder brake 0-10Nm | 1 | Kháng lực tự điều chỉnh |
| 4 | | Slip clutch traverse | 1 | Ma sát traverse |
| 5 | | NFC reader RC522 | 1 | Tự nhận biết loại súng |
| 6 | | Connector 12-pin MIL-spec (phía cradle) | 1 | — |
| 7 | | ESP32 + MCU board | 1 | Xử lý encoder, NFC, solenoid PWM |
| | **SS1 — Trạm bắn ST2 (Universal Cradle #2)** | | | |
| 8 | | Bệ đỡ thép hàn + interface plate + locating pins | 1 | Giống ST1 |
| 9 | | Encoder xoay 0,1° (traverse + elevation) | 2 | — |
| 10 | | Magnetic powder brake 0-10Nm | 1 | — |
| 11 | | Slip clutch traverse | 1 | — |
| 12 | | NFC reader RC522 | 1 | — |
| 13 | | Connector 12-pin MIL-spec (phía cradle) | 1 | — |
| 14 | | ESP32 + MCU board | 1 | — |
| | **SS1 — Mô đun vũ khí (Phase 1)** | | | |
| 15 | WM-01 | DSHK 12.7mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~10kg — mặc định cho ST1 |
| 16 | WM-02 | NSV 12.7mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~8kg — mặc định cho ST2 |
| | **SS1 — Mô đun vũ khí (Phase 2 — bán riêng)** | | | |
| 17 | WM-03 | KPVT 14.5mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~12kg |
| 18 | WM-04 | ZU-23-2 23mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~15kg |
| | **SS2 — Hiển thị & Render** | | | |
| 19 | | Máy chiếu short-throw ≥ 3.000 lumens | **4** | Epson/BenQ — thêm 1 so với LITE |
| 20 | | Màn hình cong **6×2m** (khung nhôm + vải projection) | 1 | Tự chế tạo — rộng hơn LITE |
| 21 | | PC render: RTX 4090 + i9/Ryzen 9 + 64GB RAM + NVMe 2TB | 1 | 4 viewport render đồng thời |
| 22 | | Loa 5.1 surround + subwoofer + amplifier | 1 bộ | FMOD spatial audio |
| | **SS3 — Motion Platform** | | | |
| 23 | | **Không có** | — | PA-8 FIXED — không cần motion |
| | **SS4+SS5 — Tích hợp hệ thống** | | | |
| 24 | | PC instructor: RTX 4060 + 2×27" monitor | 1 | Monitor 1: god-eye; Monitor 2: AAR |
| 25 | | UPS 2kVA | 1 | APC/CyberPower |
| 26 | | PDU + cáp + connectors (có nhãn, keyed) | 1 bộ | Phân bổ 4 projector + 2 PC + 2 cradle + audio |
| 27 | | Switch mạng Gigabit | 1 | Standalone — không kết nối WAN |
| 28 | | Hộp vận chuyển flight case | 5 | 5 kiện (thêm 1 so với LITE do 2 cradle) |
| 29 | | Bộ công cụ bảo trì | 1 | Hex key, screwdriver, torque wrench M10, spare fuses |
| 30 | | Cáp HDMI DisplayPort × 4 | 4 | Render PC → 4 projector |
| 31 | | Cáp USB Serial × 2 | 2 | ESP32 ST1 + ST2 → Render PC |

---

*Tài liệu này là một phần của bộ hồ sơ thiết kế VN-CUAV-SIM-001. Xem thêm: VN_CUAV_SIM_001_FIXED_PA8_Concept_Description_v1.0.md*
