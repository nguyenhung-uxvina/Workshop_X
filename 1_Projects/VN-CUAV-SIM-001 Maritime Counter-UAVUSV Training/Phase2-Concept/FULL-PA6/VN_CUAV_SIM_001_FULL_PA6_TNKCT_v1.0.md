# TÍNH NĂNG KỸ CHIẾN THUẬT
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG CHỐNG UAV VÀ USV — PHIÊN BẢN FULL (PA-6)
# KÍP BẮN TÀU CHIẾN — 2-3 VỊ TRÍ BẮN — 360°

**Số hiệu:** WX-CUAV-SIM-TNKCT-PA6
**Phiên bản:** 1.0
**Ngày:** 07/04/2026
**Phân loại:** Tài liệu kỹ thuật — không mật
**Concept:** PA-6 FULL (2-3 vị trí bắn, 360° FOV, bệ sàn chung chuyển động)
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Huấn luyện

> **Phạm vi áp dụng:** Tài liệu này mô tả đặc tính kỹ thuật và chiến thuật của hệ thống mô phỏng huấn luyện bắn phòng không phiên bản FULL (PA-6), thiết kế cho kíp bắn tàu chiến. Đây là phiên bản cao nhất trong dòng sản phẩm VN-CUAV-SIM-001, tối ưu cho huấn luyện phối hợp chiến đấu cấp kíp, không phải cá nhân.

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT | Nội dung | Mô tả |
|----|----------|-------|
| 1.1 | Nhiệm vụ chính | Huấn luyện kíp bắn phòng không tàu chiến (2-3 xạ thủ + 1 chỉ huy kíp) trong môi trường mô phỏng 360° toàn bộ boong tàu, chống UAV và USV đồng thời |
| 1.2 | Nhiệm vụ phụ | Đánh giá năng lực phối hợp kíp bắn; kiểm tra kỷ luật lửa (IFF); huấn luyện chỉ huy kíp về phân công và điều phối mục tiêu; sát hạch định kỳ cấp đơn vị |
| 1.3 | Đối tượng huấn luyện | Kíp bắn súng máy và pháo phòng không trên tàu hộ vệ, tàu tuần tra lớn, tàu chiến các loại thuộc Hải quân Nhân dân Việt Nam |
| 1.4 | Hình thức huấn luyện | Mô phỏng 100% (Pure Virtual) — không sử dụng đạn thật; luyện tập phối hợp không giới hạn thời gian, an toàn tuyệt đối |
| 1.5 | Quy mô kíp | 2-3 xạ thủ + 1 chỉ huy kíp (instructor hoặc commander riêng) |
| 1.6 | Phân khu bắn | ST1 Mũi: 300°-060° (120°) | ST2 Lái trái: 150°-270° (120°) | ST3 Lái phải: 120°-240° (120°) — có vùng chồng lấp hợp lệ |
| 1.7 | Vũ khí mô phỏng | 5 loại mô đun thay nhanh (< 5 phút/lần): WM-01 DSHK 12,7mm, WM-02 NSV 12,7mm, WM-03 KPVT 14,5mm, WM-04 ZU-23-2 23mm, WM-05 PKM 7,62mm — mỗi vị trí bắn có thể khác loại |
| 1.8 | Môi trường mô phỏng | Biển Đông: Sea State 0-5, ban ngày/hoàng hôn/ban đêm, trời quang/mưa/sương mù; trên boong tàu 360° toàn diện |
| 1.9 | Khác biệt cạnh tranh | Bệ sàn chung (Shared Deck) — tất cả xạ thủ đứng trên cùng một sàn chuyển động, cùng cảm nhận sóng — không có đối thủ nào ở phân khúc dưới $200,000 cung cấp tính năng này |

### 2. Khả năng huấn luyện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 2.1 | Loại mục tiêu bay (UAV) | ≥ 7 | loại | DJI Mavic Group 1, FPV kamikaze, trinh sát trung, đạn lảng vảng, trực thăng IFF, swarm node, tên lửa giả mạo |
| 2.2 | Loại mục tiêu mặt nước (USV) | ≥ 4 | loại | Tiếp cận thẳng, zigzag, tốc độ cao 60 kn, xuồng nghi trang (decoy) |
| 2.3 | Số mục tiêu đồng thời (max) | 20 | mục tiêu | Kịch bản CREW-06 swarm 20 — kiểm tra giới hạn phối hợp kíp |
| 2.4 | Số mục tiêu đồng thời (tiêu chuẩn) | 8-12 | mục tiêu | Buộc phối hợp kíp, vượt khả năng xử lý 1 xạ thủ |
| 2.5 | Tầm phát hiện mục tiêu UAV Group 1 | ≥ 300 | m | DJI Mavic (~30cm wingspan) nhìn thấy rõ trên màn hình |
| 2.6 | Tốc độ mục tiêu UAV | 30-250 | km/h | FPV kamikaze đến trực thăng tiếp cận chậm |
| 2.7 | Tốc độ mục tiêu USV | 20-60 | hải lý/giờ | Từ tiếp cận chiến lược đến tấn công tốc độ cao |
| 2.8 | Quỹ đạo UAV | ≥ 6 | kiểu | Thẳng, jinking, lao bổ nhào, pop-up, bầy đàn, zigzag |
| 2.9 | Quỹ đạo USV | ≥ 4 | kiểu | Thẳng, zigzag, high-speed, evasive maneuver |
| 2.10 | Điều kiện ánh sáng | 3 | chế độ | Ban ngày, hoàng hôn/bình minh, ban đêm (NVG mode tùy chọn) |
| 2.11 | Trạng thái biển mô phỏng | 0-5 | Sea State (WMO) | Biển gương đến biển động mạnh |
| 2.12 | Thời tiết | 3 | chế độ | Quang đãng, mưa (tầm nhìn 2-5km), sương mù (tầm nhìn 500m-1km) |
| 2.13 | Kịch bản kíp bắn đặc quyền | 10 | kịch bản | CREW-01 đến CREW-10 (xem Mục 2A) |
| 2.14 | Tổng kịch bản (kể cả từ LITE) | ≥ 20 | kịch bản | 10 CREW + 5 UAV + 3 USV + 2 hỗn hợp |
| 2.15 | Tạo kịch bản mới (instructor) | ≤ 20 | phút | Giao diện kéo-thả, có template kíp bắn |
| 2.16 | Hồ sơ vũ khí Phase 1 | 2 | loại | DSHK 12,7mm + NSV 12,7mm |
| 2.17 | Hồ sơ vũ khí Phase 2 | +2 | loại | KPVT 14,5mm + ZU-23-2 23mm |
| 2.18 | Thời gian thay loại vũ khí / trạm | ≤ 5 | phút | Tháo module cũ → lắp mới → NFC tự nhận biết → sẵn sàng |
| 2.19 | Tổng loại vũ khí hỗ trợ | 5 | loại | 7,62mm / 12,7mm (×2) / 14,5mm / 23mm |

#### 2A. Kịch Bản Kíp Bắn Đặc Quyền FULL — CREW Series

| TT | Mã kịch bản | Tên | Mục tiêu | Kỹ năng rèn luyện | Độ khó |
|----|------------|-----|----------|-------------------|--------|
| 2A.1 | CREW-01 | Single UAV — Sector Handoff | 1 UAV bay qua ranh giới phân khu | Giao tiếp, bàn giao mục tiêu | ★★☆☆☆ |
| 2A.2 | CREW-02 | USV Approach — Primary + Backup | 1 USV tốc độ cao + 1 xạ thủ dự phòng | Phân công chính/phụ | ★★☆☆☆ |
| 2A.3 | CREW-03 | Dual Threat — Split Attention | 1 UAV + 1 USV ở 2 phân khu khác nhau | Xử lý đồng thời, không bỏ sót | ★★★☆☆ |
| 2A.4 | CREW-04 | Swarm 8 — Sector Defense | 8 UAV, 3-4 mỗi phân khu | Quản lý đạn, ưu tiên mục tiêu | ★★★☆☆ |
| 2A.5 | CREW-05 | Swarm 12 — Saturation | 12 mục tiêu hỗn hợp | Phân chia đều, không chồng lấp, tiết kiệm đạn | ★★★★☆ |
| 2A.6 | CREW-06 | Swarm 20 — Overload | 20 mục tiêu đồng thời | Chỉ huy kíp điều phối dưới áp lực tối đa | ★★★★★ |
| 2A.7 | CREW-07 | Night Mixed — FPV + USV | Ban đêm: 4 FPV kamikaze + 2 USV | NVG mode, nhận dạng âm thanh tiếp cận | ★★★★☆ |
| 2A.8 | CREW-08 | Decoy + Main Attack | 3 UAV giả + 2 USV thật | IFF, phân biệt mục tiêu thật/giả | ★★★★☆ |
| 2A.9 | CREW-09 | Friendly Fire Discipline | Có trực thăng bạn bay qua phân khu | Kỷ luật lửa, IFF dưới áp lực | ★★★★★ |
| 2A.10 | CREW-10 | Full Mission 30 Phút | Đa wave liên tục, leo thang độ khó | Duy trì phối hợp khi mệt mỏi — endurance | ★★★★★ |

### 3. Độ chính xác mô phỏng

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Mô hình đạn đạo | 6DOF | — | Trọng lực, sức cản khí động, gió, góc hướng, chuyển động tàu tích hợp |
| 3.2 | Sai số 12,7mm B-32 | ≤ 5 | % | Tại 100-1.500m, so với bảng bắn chính thức |
| 3.3 | Sai số 14,5mm BS | ≤ 5 | % | Tại 100-2.000m (Phase 2) |
| 3.4 | Sai số 23mm OFZ | ≤ 5 | % | Tại 100-2.500m (Phase 2) |
| 3.5 | Bù chuyển động tàu | Có | — | Roll + pitch của bệ sàn → ảnh hưởng thực vào đường đạn |
| 3.6 | Bù chuyển động đồng thời | Có | — | Cùng lúc 2-3 xạ thủ bắn, tất cả bù chuyển động từ shared deck |
| 3.7 | Xác suất phân loại trúng/trượt | ≥ 95 | % | Collision mesh trên target 3D model |
| 3.8 | Tốc độ khung hình | ≥ 60 | fps | Trên tất cả 6 viewport đồng thời, liên tục |
| 3.9 | Độ trễ tổng (cò → phản hồi hình) | ≤ 50 | ms | End-to-end: encoder→USB→Unity→render→HDMI→projector |
| 3.10 | Động cơ đạn đạo | V-SMASH core (IRONMESH) | — | Reuse từ V-SMASH, tất cả calibers 7,62mm-23mm |
| 3.11 | Mô phỏng hiệu ứng đạn đạo | Có | — | Vệt lửa, khói, vỡ mảnh, nước bắn (USV hit) |

### 4. Đánh giá và phân tích sau buổi tập (AAR)

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 4.1 | Chấm điểm tự động | Đa tiêu chí: trúng đích, thời gian phản ứng, tiết kiệm đạn, ưu tiên mục tiêu, phối hợp kíp |
| 4.2 | Phát lại 3D (AAR replay) | Toàn bộ 360° — chọn góc nhìn bất kỳ, tua chậm 0,25x, zoom, freeze frame |
| 4.3 | Dữ liệu ghi lại | Đường ngắm liên tục 10Hz × 2-3 xạ thủ, thời điểm bắn, trúng/trượt, sector vi phạm, voice timestamp |
| 4.4 | AAR voice replay | Phát lại hình ảnh đồng thời với giọng nói chỉ huy — nhìn lại quyết định phân công |
| 4.5 | Xuất báo cáo | CSV (dữ liệu thô đa-xạ thủ) + PDF (báo cáo kíp tổng hợp, in được) |
| 4.6 | Hồ sơ xạ thủ cá nhân | Theo dõi từng người: 5 kỹ năng + xu hướng theo thời gian |
| 4.7 | Điểm kíp tổng hợp | Composite score: cá nhân + thưởng phối hợp - phạt vi phạm (xem Mục 4B) |
| 4.8 | Xếp hạng kíp | So sánh giữa các kíp + xu hướng theo đợt huấn luyện |
| 4.9 | Đề xuất bài tập tiếp theo | Tự động phân tích kỹ năng yếu nhất → đề xuất kịch bản CREW |
| 4.10 | Dung lượng lưu trữ/buổi | ~150 MB | 1 TB ≈ ~6.700 buổi kíp (3-station) |

#### 4B. Phối Hợp Kíp Bắn — Tính Năng Đặc Quyền FULL

| TT | Tính năng | Mô tả chi tiết |
|----|-----------|---------------|
| 4B.1 | **Threat Assignment** | Chỉ huy kíp phân công mục tiêu qua voice (ghi âm có timestamp) hoặc GUI tablet — xạ thủ thấy highlight mục tiêu được assign |
| 4B.2 | **Sector Overlay** | Mỗi xạ thủ thấy phân khu mình (xanh lá) + phân khu đồng đội (vàng) + vùng overlap hợp lệ (cam) — có thể tắt từ instructor |
| 4B.3 | **Fire Discipline Warning** | Cảnh báo âm thanh + visual nếu xạ thủ ngắm sâu vào sector đồng đội; phạt điểm nếu bắn |
| 4B.4 | **Kill Confirmation Broadcast** | Khi tiêu diệt mục tiêu: audio thông báo toàn kíp + flash visual ngắn 0,3s trên tất cả màn hình |
| 4B.5 | **Communication Log** | Ghi âm toàn bộ voice commands với timestamp — AAR replay phát lại voice đồng bộ với hành động |
| 4B.6 | **Crew Score Composite** | Điểm kíp = Σ(cá nhân) + thưởng phối hợp (handoff, sector defense) - phạt (bắn nhầm, friendly fire) |
| 4B.7 | **Swarm Saturation Test** | 12-20 mục tiêu — thiết kế để vượt khả năng 1 người, bắt buộc phối hợp kíp để clear hết |
| 4B.8 | **IFF Discipline** | Kịch bản CREW-09: có trực thăng bạn bay qua — xạ thủ bắn vào bị phạt nặng (-200 điểm) |

---

## II. TÍNH NĂNG KỸ THUẬT

### 5. Hệ thống hiển thị — 360° Cylindrical, 6 Projectors

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 5.1 | Loại hiển thị | Projection lên màn hình trụ | — | 6 máy chiếu short-throw, chiếu hướng vào trong |
| 5.2 | Số máy chiếu | 6 | chiếc | Mỗi máy chiếu 60° — ghép liền seamless 360° |
| 5.3 | FOV ngang tổng | 360 | độ | Liên tục, không gián đoạn — bao phủ toàn bộ xung quanh |
| 5.4 | FOV dọc | ≥ 60 | độ | Đủ nhìn mục tiêu từ mặt biển đến góc cao +85° |
| 5.5 | Màn hình | Trụ Ø8m × 2m | — | Khung thép, vải căng matt white, gain 1,0-1,3 |
| 5.6 | Độ phân giải mỗi viewport | 1.920 × 1.080 | pixel | Full HD per channel (nâng cấp 4K cho tương lai) |
| 5.7 | Độ sáng máy chiếu | ≥ 3.000 | lumens/máy | Epson EB-L735U hoặc BenQ LH820ST |
| 5.8 | Edge blending | Tự động, phần mềm | — | Overlap 15-20% giữa các viewport — seamless |
| 5.9 | Cân màu | Tự động | — | Uniformity < 20% variation toàn vòng tròn |
| 5.10 | Khoảng cách máy chiếu — màn | ~1,0 | m | Short-throw, máy chiếu gắn khung màn trụ hướng vào trong |
| 5.11 | Render engine | Unity 6 LTS + HDRP | — | 6-viewport simultaneous render |
| 5.12 | GPU | NVIDIA RTX 4090 × 1 hoặc RTX 4080 × 2 | — | 6 HDMI output (DP → HDMI adapter) |
| 5.13 | Tốc độ khung hình | ≥ 60 | fps | Trên tất cả 6 màn hình liên tục |
| 5.14 | Biển 3D | Procedural FFT Gerstner (Crest/KWS) | — | Sea State 0-5 real-time, điều chỉnh trong kịch bản |
| 5.15 | Chu kỳ ngày/đêm | 3 chế độ | — | Ngày / hoàng hôn-bình minh / ban đêm + ánh sao |
| 5.16 | NVG/FLIR mode | Tùy chọn | — | Bổ sung Phase 2 nếu khách hàng yêu cầu |

### 6. Bệ vũ khí mô phỏng (×2-3 trạm) — Kiến trúc MWI mô đun

#### 6A. Giá đỡ chung (Universal Cradle)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 6.1 | Xoay ngang (Traverse) | ≥ 60 | °/s | Slip clutch + rotary encoder 0,1° |
| 6.2 | Ngóc dọc (Elevation) | -10 → +87 | độ | Tự do + encoder 0,1°, đối trọng trong mô đun |
| 6.3 | Kháng lực xoay | 0-10 | Nm | Phanh từ (magnetic powder brake), tự điều chỉnh theo loại súng |
| 6.4 | Bệ đỡ | Bolt xuống sàn + quick-adjust | — | 3 vị trí chiều cao (155-185cm phù hợp chiều cao người VN) |
| 6.5 | An toàn góc bắn | Software + hard stop cơ học | — | Dual redundancy — không thể quay vào vùng nguy hiểm |
| 6.6 | Giao diện mô đun | Quick-release plate + 12-pin MIL connector | — | 2 chốt định vị + 4 bu lông bướm M10 |
| 6.7 | Nhận biết tự động | NFC reader (ISO 14443A) | — | Lắp mô đun → hệ thống tự nhận biết và cấu hình |
| 6.8 | Thời gian thay súng | ≤ 5 | phút | 1-2 người, không cần dụng cụ chuyên dụng |
| 6.9 | MCU điều khiển | STM32 + USB CDC | — | USB Serial → Render Server, latency < 2ms |

#### 6B. Mô đun vũ khí (MWI — Modular Weapon Interface)

| TT | Mô đun | Vũ khí | Cỡ đạn | Khối lượng mockup | Lực giật mô phỏng | Lực cò | ROF | Giai đoạn |
|----|--------|--------|--------|-------------------|-------------------|--------|-----|-----------|
| 6.10 | WM-01 | DSHK | 12,7×108mm | ~10 kg | 15-20 N (solenoid) | 2-3 kg | 600 v/p | Phase 1 |
| 6.11 | WM-02 | NSV | 12,7×108mm | ~8 kg | 15-20 N (solenoid) | 1,5-2,5 kg | 700 v/p | Phase 1 |
| 6.12 | WM-03 | KPVT | 14,5×114mm | ~12 kg | 25-35 N (solenoid) | 3-5 kg | 550 v/p | Phase 2 |
| 6.13 | WM-04 | ZU-23-2 | 23×152mm | ~15 kg | 40-60 N (solenoid) | 4-6 kg | 800 v/p | Phase 2 |
| 6.14 | WM-05 | PKM | 7,62×54mm | ~7 kg | 8-12 N (solenoid) | 1,5-2 kg | 650 v/p | Tùy chọn |

**Bố trí mặc định PA-6 FULL (3 trạm):**
- ST1 — Mũi: WM-01 DSHK 12,7mm | ST2 — Lái trái: WM-04 ZU-23-2 23mm | ST3 — Lái phải: WM-03 KPVT 14,5mm

Mỗi mô đun gồm: thân CNC nhôm/thép + solenoid recoil + cò micro-switch + kính ngắm + đối trọng + NFC tag.

### 7. Hệ thống mô phỏng chuyển động — BỆ SÀN CHUNG (Shared Deck Platform)

**ĐIỂM KHÁC BIỆT CẠNH TRANH CỐT LÕI:** Tất cả xạ thủ đứng trên cùng một bệ sàn chuyển động — cùng cảm nhận sóng, cùng nghiêng, cùng lắc. Không đối thủ nào trong phân khúc dưới $200.000 USD cung cấp tính năng này. Bệ sàn chung không chỉ là tính năng kỹ thuật — đây là **kinh nghiệm huấn luyện tập thể** không thể tái tạo bằng các ghế motion riêng lẻ.

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.1 | Kích thước bệ sàn | 3 × 4 | m | Đủ cho 3 xạ thủ + 3 bệ vũ khí + không gian di chuyển |
| 7.2 | Số actuator | 4-6 | chiếc | Electric linear ball-screw, bidirectional |
| 7.3 | Góc lăn (Roll) | ±15 | độ | Mô phỏng sóng ngang, tương ứng Sea State 1-5 |
| 7.4 | Góc chúc/ngửa (Pitch) | ±10 | độ | Mô phỏng sóng dọc, wave period 4-8s |
| 7.5 | Chu kỳ sóng mô phỏng | 4-8 | giây | Điều chỉnh theo kịch bản và Sea State |
| 7.6 | Tải trọng tối đa | ≥ 400 | kg | 3 xạ thủ × 100kg + bệ vũ khí + cấu trúc |
| 7.7 | Bộ điều khiển | ESP32 + BTS7960 × 4-6 | — | Nhận lệnh UDP 50Hz từ Render Server |
| 7.8 | Độ trễ motion | ≤ 20 | ms | Từ lệnh UDP đến chuyển động thực tế |
| 7.9 | Tần số cập nhật | 50 | Hz | Smooth motion, không giật cục |
| 7.10 | Vật liệu khung | Thép hàn vuông 60×40mm + universal joint | — | Bolt xuống sàn phòng, tháo lắp được |
| 7.11 | Khối lượng platform | ~120 | kg | Không tính tải — cần sàn phòng chịu tải ≥ 600 kg/m² |
| 7.12 | Map Sea State → Motion | Tự động từ Unity | — | Render Server tính wave → gửi roll/pitch setpoint → ESP32 |
| 7.13 | Emergency stop | Hardware button + software | — | Dừng tức lập tức, decelerate 2s để tránh xạ thủ ngã |
| 7.14 | Chế độ tĩnh (static) | Có | — | Tắt motion khi cần — bệ sàn cố định cho huấn luyện cơ bản |
| 7.15 | Đồng bộ wave với đồng đội | 100% | — | Tất cả xạ thủ cùng cảm nhận đúng một wave profile |

**Lợi thế Shared Deck so với Individual Seat (PA-2):**

| Tiêu chí | PA-2 Individual Seat | PA-6 Shared Deck |
|----------|---------------------|-----------------|
| Tính thực tế | Mỗi người sóng khác nhau (sai) | Tất cả cùng sóng (đúng thực tế tàu) |
| Cảm giác đồng đội | Cô lập | Thực sự cảm nhận phối hợp |
| Chi phí cho 3 người | 3 × $1,500 = $4,500 | 1 × $4,500 = $4,500 |
| Không gian | Phân tán | Tập trung — dễ tích hợp |
| Dùng làm selling point | Không | Có — unique differentiator |

### 8. Hệ thống âm thanh — 7.1 Surround

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 8.1 | Cấu hình âm thanh | 7.1 surround | — | 7 speaker + 1 subwoofer, bố trí theo màn trụ |
| 8.2 | Audio engine | FMOD Studio | — | Spatial 3D audio — âm thanh từ hướng mục tiêu |
| 8.3 | Mức âm lượng (xạ thủ) | ≥ 85 | dB SPL | Tái hiện tiếng UAV tiếp cận, gió, sóng |
| 8.4 | Mức âm lượng (tiếng súng) | ≥ 95 | dB SPL | Cảm giác nổ súng thực tế — khuyến khích dùng tai nghe |
| 8.5 | Audio cue mục tiêu | Có | — | Âm thanh drone khác nhau theo loại và hướng |
| 8.6 | Voice commander | Có | — | Microphone headset mỗi vị trí, ghi âm, broadcast nội bộ |
| 8.7 | Thông báo hệ thống | Có | — | "Mục tiêu số [X] bị tiêu diệt — [ST1/ST2/ST3]" broadcast toàn kíp |
| 8.8 | Môi trường âm thanh | Có | — | Tiếng sóng biển, gió, động cơ tàu theo Sea State |
| 8.9 | Tai nghe khuyến nghị | Tactical headset (PTT) | — | Tốt nhất cho giao tiếp kíp và bảo vệ thính lực |

### 9. Trạm huấn luyện viên + Chỉ huy kíp

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 9.1 | Số monitor | 3 | màn hình | Monitor 1: bản đồ chiến thuật god-eye | Monitor 2-3: camera mirror ST1/ST2 (hoặc ST1/ST2/ST3 khi có 3) |
| 9.2 | Giao diện | GUI tiếng Việt | — | Tất cả chức năng bằng tiếng Việt |
| 9.3 | Bản đồ chiến thuật | God-eye 360° real-time | — | Vị trí tất cả mục tiêu, sector assignment, kill log |
| 9.4 | Inject mục tiêu | ≤ 1 | giây | Thêm/xóa mục tiêu trong khi kịch bản đang chạy |
| 9.5 | Threat assignment GUI | Có | — | Drag mục tiêu từ bản đồ vào vị trí bắn |
| 9.6 | Điều chỉnh thời tiết/biển | Real-time | — | Thay đổi Sea State, tầm nhìn trong kịch bản |
| 9.7 | Ghi âm commander voice | Có | — | Microphone riêng, timestamp, AAR replay |
| 9.8 | Override kịch bản | Có | — | Pause, skip wave, inject threat, kết thúc sớm |
| 9.9 | Theo dõi live | Real-time | — | Điểm, đạn tiêu thụ, vi phạm fire discipline của từng xạ thủ |
| 9.10 | Xuất báo cáo kíp | Tức thì sau buổi tập | — | PDF báo cáo tổng hợp kíp + PDF cá nhân từng xạ thủ |

#### 9B. Hệ thống mạng nội bộ (LAN Topology)

| TT | Thành phần | Cấu hình | Ghi chú |
|----|-----------|----------|---------|
| N1 | Render Server | 192.168.1.10 | Hub trung tâm |
| N2 | Instructor PC | 192.168.1.20 | LAN Gigabit ↔ Render Server |
| N3 | Weapon MCU ST1 | USB Serial (local) | Không qua LAN — latency thấp hơn |
| N4 | Weapon MCU ST2 | USB Serial (local) | Không qua LAN |
| N5 | Weapon MCU ST3 | USB Serial (local) | Không qua LAN (optional 3rd station) |
| N6 | Motion MCU | UDP 50Hz (USB hoặc LAN) | ESP32 nhận setpoint từ Render Server |
| N7 | Projectors × 6 | HDMI (không qua LAN) | 6 cable HDMI trực tiếp từ GPU |
| N8 | Switch | Gigabit managed | 8-port — Render Server + Instructor + spare |
| N9 | Yêu cầu internet | Không | Hoàn toàn offline — không cần kết nối bên ngoài |

---

## III. ĐẶC TÍNH VẬN HÀNH

### 10. Lắp đặt và triển khai

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 10.1 | Diện tích phòng tối thiểu | 10 × 10 | m | Chiều cao tối thiểu 3m (projector + màn trụ) |
| 10.2 | Yêu cầu phòng | Kiểm soát ánh sáng tốt | — | Rèm blackout hoặc phòng không có cửa sổ |
| 10.3 | Tải trọng sàn tối thiểu | 600 | kg/m² | Tại vị trí bệ sàn shared deck |
| 10.4 | Thời gian lắp đặt ban đầu | ≤ 5 | ngày | Cả màn trụ + projectors + shared deck + điện tử |
| 10.5 | Thời gian triển khai hàng ngày | ≤ 30 | phút | Bật nguồn, self-test, sẵn sàng |
| 10.6 | Thời gian đóng gói (vận chuyển) | ≤ 4 | giờ | Shared deck tháo rời thành 4-5 phần, màn trụ cuộn |
| 10.7 | Phương tiện vận chuyển | Xe tải 2 tấn | — | Đủ cho 6 flight cases + platform tháo rời |
| 10.8 | Số người lắp đặt | 4-6 | người | Bao gồm 1 kỹ thuật viên Workshop X |
| 10.9 | Điều kiện bảo quản | 15-35°C, độ ẩm 30-80% | — | Không ngưng tụ |
| 10.10 | Điều kiện vận hành | 15-35°C, 30-80% RH | — | Điều hòa bắt buộc cho phòng render PC + projectors |

### 11. Nguồn điện

| TT | Thành phần | Công suất tiêu thụ | Ghi chú |
|----|-----------|-------------------|---------|
| 11.1 | Render PC (RTX 4090) | 750 W | Peak khi load full |
| 11.2 | 6 × Projectors short-throw | 6 × 300 = 1.800 W | Peak khi sáng full |
| 11.3 | Instructor PC | 300 W | Với 3 màn hình |
| 11.4 | Shared deck actuators | 4-6 × 100 = 400-600 W | Peak khi tất cả actuators di chuyển |
| 11.5 | Audio 7.1 | 150 W | |
| 11.6 | Switch + misc | 100 W | |
| 11.7 | **Tổng công suất (peak)** | **~3.500-4.000 W** | |
| 11.8 | UPS | 3 kVA | Đủ cho toàn hệ thống 15 phút sau mất điện |
| 11.9 | Nguồn vào | 220V/50Hz | Cần 2 mạch riêng: 1 cho compute+display, 1 cho motion |
| 11.10 | PDU | Có bảo vệ quá tải, lọc lọc nhiễu | Rack-mount |

### 12. Vận hành

| TT | Tính năng | Giá trị | Ghi chú |
|----|-----------|---------|---------|
| 12.1 | Nhân sự vận hành | 2-3 xạ thủ + 1 instructor + 1 chỉ huy kíp | Instructor và chỉ huy kíp có thể là cùng 1 người |
| 12.2 | Đào tạo vận hành (instructor) | ≤ 2 ngày | Workshop X cung cấp tại chỗ |
| 12.3 | Đào tạo vận hành (xạ thủ) | ≤ 2 giờ | Hướng dẫn sử dụng bệ vũ khí và giao diện |
| 12.4 | Ca sử dụng tối đa/ngày | 8 | ca (mỗi ca 30-60 phút) |
| 12.5 | Thời gian buổi tập | 15-60 | phút | Tùy kịch bản |
| 12.6 | Thời gian nghỉ giữa buổi | ≥ 5 | phút | Render PC làm mát, actuators nghỉ |
| 12.7 | Ngôn ngữ giao diện | Tiếng Việt | — | Toàn bộ GUI + báo cáo + voice prompt |
| 12.8 | Hỗ trợ từ xa | Có | — | TeamViewer/AnyDesk — Workshop X kết nối hỗ trợ kỹ thuật |
| 12.9 | Backup & restore | Tự động backup hàng ngày | — | SSD backup đi kèm |

### 13. Bảo trì và tuổi thọ

| TT | Thành phần | Tuổi thọ mục tiêu | Lịch bảo trì | Ghi chú |
|----|-----------|-------------------|-------------|---------|
| 13.1 | Solenoid recoil (WM-01/02) | ≥ 500.000 chu kỳ | Kiểm tra 6 tháng | Thay thế dễ, có phụ tùng dự phòng |
| 13.2 | Encoder traverse/elevation | ≥ 5 năm | Kiểm tra 6 tháng | Vệ sinh, kiểm tra zero drift |
| 13.3 | Magnetic brake | ≥ 5 năm | Kiểm tra 1 năm | Không mài mòn cơ học |
| 13.4 | Shared deck actuators (ball-screw) | ≥ 3 năm × 8 ca/ngày | Bơi mỡ 3 tháng, kiểm tra hàng tháng | Critical component — có bộ thay thế dự phòng |
| 13.5 | Projectors | ≥ 20.000 giờ (laser) | Vệ sinh lọc bụi 3 tháng | Khuyến nghị laser projector |
| 13.6 | Màn hình trụ (vải) | ≥ 5 năm | Kiểm tra 6 tháng | Vệ sinh nhẹ, không để ẩm |
| 13.7 | GPU RTX 4090 | ≥ 5 năm | Vệ sinh tản nhiệt 6 tháng | Dự phòng 1 GPU spare |
| 13.8 | Phần mềm | Lifetime update | Cập nhật online/offline | Bao gồm trong giá bán |
| 13.9 | Hỗ trợ kỹ thuật | 1 năm bảo hành | Sau 1 năm: hợp đồng dịch vụ | Workshop X hỗ trợ từ xa + tại chỗ (HN/HCM) |

---

## IV. CHI PHÍ VÀ HIỆU QUẢ

### 14. Chi phí

| TT | Hạng mục | Cấu hình 2 trạm (USD) | Cấu hình 3 trạm (USD) | Ghi chú |
|----|----------|----------------------|----------------------|---------|
| 14.1 | R&D / Chi phí sản xuất | ~$32.545 | ~$40.325 | Xem BOM chi tiết Mục 16 |
| 14.2 | Giá bán khuyến nghị | $120.000-160.000 | $160.000-200.000 | Negotiable theo đơn đặt hàng |
| 14.3 | Biên lợi nhuận gộp | 73-80% | 75-80% | So với R&D cost |
| 14.4 | Lắp đặt + vận chuyển | ~$5.000-8.000 | ~$6.000-10.000 | Tùy địa điểm |
| 14.5 | Đào tạo ban đầu | Bao gồm trong giá | — | 2 ngày tại chỗ |
| 14.6 | Bảo hành | 12 tháng | — | Phần cứng + phần mềm |
| 14.7 | Hợp đồng dịch vụ năm 2+ | ~$5.000-8.000/năm | — | Preventive maintenance + software update |

### 15. So sánh hiệu quả kinh tế

| TT | Tiêu chí | Huấn luyện bắn thực | VN-CUAV-SIM-001 FULL | Chỉ số cải thiện |
|----|----------|---------------------|----------------------|-----------------|
| 15.1 | Chi phí 1 buổi huấn luyện kíp (3 người) | ~$3.000-5.000/buổi (đạn + trường bắn + nhiên liệu) | ~$15-30/buổi (điện + nhân sự) | ×100-300 tiết kiệm |
| 15.2 | Hoàn vốn (giả sử 4 buổi/tuần) | — | 18-24 tháng | — |
| 15.3 | An toàn | Rủi ro tai nạn | Không rủi ro | — |
| 15.4 | Tần suất huấn luyện | 1-2 lần/tháng (đạn hạn chế) | Không giới hạn | Tăng ≥10 lần |
| 15.5 | Môi trường luyện tập | Thời tiết/mùa phụ thuộc | Mọi điều kiện, indoor | 365 ngày/năm |
| 15.6 | Tình huống swarm 20 mục tiêu | Không thực hiện được thực tế | Sẵn có kịch bản | Unique training value |
| 15.7 | Đánh giá khách quan | Không có dữ liệu chính xác | Báo cáo tự động, 10Hz log | Đánh giá chính xác 100% |
| 15.8 | Huấn luyện kíp phối hợp | Cực kỳ khó tổ chức thực tế | Tích hợp sẵn | Unique |
| 15.9 | So với hệ thống quốc tế tương đương | $500.000-1.000.000 | $120.000-200.000 | ×3-8 rẻ hơn |

---

## V. KHÁC BIỆT SO VỚI LITE (PA-2 STANDARD)

| TT | Hạng mục | PA-2 STANDARD (LITE) | PA-6 FULL |
|----|----------|---------------------|-----------|
| D1 | Số xạ thủ | 1 | 2-3 + 1 chỉ huy kíp |
| D2 | FOV hiển thị | 180° (3 projectors) | 360° (6 projectors) |
| D3 | Màn hình | Cong 4m×2m | Trụ Ø8m×2m |
| D4 | Motion platform | 2-DOF ghế cá nhân | Shared deck 4-6 DOF 3×4m — TẤT CẢ CÙNG SÀN |
| D5 | Góc lăn (Roll) | ±12° | ±15° |
| D6 | Góc chúc (Pitch) | ±8° | ±10° |
| D7 | Số mục tiêu max | 8 | 20 |
| D8 | Kịch bản đặc quyền | UAV-01→05, USV-01→03, MIX-01→02 | Thêm CREW-01→10 |
| D9 | Phân khu bắn | Không | Có — 3 sector với overlay |
| D10 | Threat assignment | Không | Có — voice + GUI |
| D11 | Fire discipline | Không | Có — penalty scoring |
| D12 | Kill confirmation broadcast | Không | Có — toàn kíp |
| D13 | Voice communication log | Không | Có — AAR replay với voice |
| D14 | Crew composite score | Không | Có — individual + coordination + penalty |
| D15 | Audio | 5.1 surround | 7.1 surround |
| D16 | Instructor monitors | 2 | 3 |
| D17 | Diện tích phòng | 6×8m | 10×10m |
| D18 | Nguồn điện tối thiểu | ~2,0 kW | ~3,5 kW |
| D19 | R&D cost | ~$18.600-27.600 | ~$32.545-40.325 |
| D20 | Giá bán | $50.000-70.000 | $120.000-200.000 |
| D21 | Thị trường chính | Tàu tuần tra, trạm phòng thủ bờ | Tàu chiến, trung tâm HQ cấp quân chủng |

---

## VI. THÀNH PHẦN HỆ THỐNG

### 16. Bảng kê thành phần chính — BOM

#### Cấu hình 2 vị trí bắn (ST1 + ST2)

| TT | Mã | Tên thành phần | Số lượng | Đơn giá (USD) | Thành tiền | Ghi chú |
|----|----|---------------|----------|--------------|------------|---------|
| **SS1 — Weapon Stations** | | | | | | |
| 1 | SS1-C | Universal Cradle (thép hàn, encoder, brake, NFC) | 2 | $650 | $1.300 | Gồm MCU STM32 + USB |
| 2 | SS1-C-INST | Phụ kiện lắp đặt, cáp, bolt | 2 | $130 | $260 | |
| 3 | SS1-WM01 | WM-01 DSHK 12,7mm (body CNC + solenoid + cò + sight) | 1 | $750 | $750 | ST1 mặc định |
| 4 | SS1-WM04 | WM-04 ZU-23-2 23mm (body CNC + solenoid + cò + sight) | 1 | $635 | $635 | ST2 mặc định |
| | | **Tổng SS1** | | | **$2.945** | |
| **SS2 — Visual Display 360°** | | | | | | |
| 5 | SS2-PROJ | Short-throw projector ≥ 3.000 lm (Epson EB-L735U) | 6 | $1.200 | $7.200 | |
| 6 | SS2-SCREEN | Màn hình trụ Ø8m × 2m (khung thép + vải căng) | 1 | $800 | $800 | Tự chế tại VN |
| 7 | SS2-GPU | NVIDIA RTX 4090 render PC (i9 + 32GB RAM + 2TB NVMe) | 1 | $4.500 | $4.500 | 6 HDMI output |
| 8 | SS2-AUDIO | 7.1 speaker system (7 satellite + 1 sub, FMOD compatible) | 1 | $700 | $700 | |
| 9 | SS2-HDMI | HDMI cable 5m × 6 + active extender | 6 | $30 | $180 | |
| | | **Tổng SS2** | | | **$13.380** | |
| **SS3 — Shared Deck Motion Platform** | | | | | | |
| 10 | SS3-DECK | Bệ sàn thép 3×4m + universal joint | 1 | $2.500 | $2.500 | |
| 11 | SS3-ACT | Electric linear actuator ball-screw 200mm 12V 100kg × 4 | 4 | $250 | $1.000 | 4-actuator config |
| 12 | SS3-CTRL | ESP32 + BTS7960 × 4 motor driver + case | 1 | $150 | $150 | |
| 13 | SS3-SEAT | Ghế racing bucket + 4-point harness × 2 | 2 | $350 | $700 | |
| 14 | SS3-MOUNT | Gắn kết bệ vũ khí lên sàn, an toàn | 2 | $75 | $150 | |
| | | **Tổng SS3** | | | **$4.500** | |
| **SS5 — System Integration** | | | | | | |
| 15 | SS5-IPC | Instructor PC (i7, 16GB, 3× monitor 24") | 1 | $2.200 | $2.200 | |
| 16 | SS5-UPS | UPS 3 kVA online | 1 | $600 | $600 | |
| 17 | SS5-NET | Gigabit switch 8-port + Cat6 cable | 1 | $150 | $150 | |
| 18 | SS5-RACK | Rack 19" 12U + PDU + KVM | 1 | $350 | $350 | |
| 19 | SS5-CASE | Flight case vận chuyển × 6 (IP54) | 6 | $150 | $900 | |
| 20 | SS5-MISC | Điện, cáp nguồn, cáp tín hiệu, tie wrap, misc | 1 | $300 | $300 | |
| | | **Tổng SS5** | | | **$4.500** | |
| **Software Development** | | | | | | |
| 21 | SW-INC | Phát triển phần mềm (incremental từ PA-2 LITE) | 1 | $8.000 | $8.000 | 360° engine, crew coordination, FULL scenarios |
| | | **Tổng SW** | | | **$8.000** | |
| | | **TỔNG R&D (2-station)** | | | **~$33.325** | Budget: ~$32.545 (buffer thực tế) |

#### Cấu hình 3 vị trí bắn (thêm ST3 — tùy chọn)

| TT | Hạng mục bổ sung | Số lượng | Chi phí (USD) | Ghi chú |
|----|-----------------|----------|--------------|---------|
| A1 | Universal Cradle thêm (ST3) | 1 | +$780 | Cradle + install |
| A2 | WM-03 KPVT 14,5mm (ST3) | 1 | +$650 | Weapon module |
| A3 | Ghế + harness ST3 | 1 | +$350 | Racing bucket |
| A4 | Nâng cấp actuators (từ 4 lên 6) | +2 | +$500 | Ball-screw actuator × 2 |
| A5 | Bổ sung SW (3-station sync + crew logic) | 1 | +$1.550 | 3rd viewport + crew features |
| A6 | Phụ kiện cáp, mount, misc | 1 | +$300 | |
| | **Tổng bổ sung 3-station** | | **+$4.130** | |
| | **TỔNG R&D (3-station)** | | **~$37.455** | Budget: ~$40.325 sau buffer 7% |

#### Danh sách phụ tùng dự phòng khuyến nghị (Spare Parts Kit)

| TT | Phụ tùng | Số lượng | Lý do |
|----|---------|----------|-------|
| SP1 | Solenoid recoil assembly (WM-01/02 compatible) | 2 | Hao mòn cao nhất |
| SP2 | Actuator ball-screw assembly (thay thế cho SS3) | 1 | Critical component |
| SP3 | STM32 MCU board + BTS7960 combo | 1 | Linh kiện dễ hỏng do điện áp |
| SP4 | NFC reader module | 2 | Nhỏ, dễ hỏng do va đập |
| SP5 | Rotary encoder 0,1° | 4 | Dùng chung traverse + elevation |
| SP6 | Projector lamp/laser module (theo model chọn) | 1 | Tuổi thọ có hạn |
| SP7 | GPU RTX 4090 (hoặc tương đương) | 1 | Critical — nếu không có spare: backup 2× RTX 4080 |
| SP8 | Vải màn hình trụ (thay thế) | 1 bộ | Dễ rách khi vận chuyển |

---

*Tài liệu này được lập bởi Workshop X — Bộ phận Quốc phòng & Huấn luyện.*
*Phiên bản 1.0 — Ngày 07/04/2026 — WX-CUAV-SIM-TNKCT-PA6*
*Mọi thông số kỹ thuật có thể thay đổi trong quá trình phát triển chi tiết.*
