# TÍNH NĂNG KỸ CHIẾN THUẬT
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG CHỐNG UAV VÀ USV — PHIÊN BẢN LITE (PA-2)
# XUỒNG NHỎ — 1 VỊ TRÍ BẮN — 180°

**Số hiệu:** WX-CUAV-SIM-TNKCT-PA2
**Phiên bản:** 1.1
**Ngày:** 07/04/2026
**Phân loại:** Tài liệu kỹ thuật — không mật
**Concept:** PA-2 LITE STANDARD (VDI 2225 confirmed, modular weapon, 1 station xuồng nhỏ)
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Huấn luyện

> **Product Line:** LITE (PA-2, xuồng) → FIXED (PA-8, đảo/giàn/cảng) → FULL (PA-6, tàu chiến) → CORTEX (PA-9, liên quân). Mỗi phiên bản có TNKCT riêng.

> **Thay đổi v1.0 → v1.1:** Bổ sung dữ liệu VDI 2225 (4 phương án đánh giá, lý do chọn PA-2). Cập nhật đầy đủ kiến trúc mô đun vũ khí (5 loại, NFC auto-detect). Bổ sung phần so sánh phương án, rủi ro, và lộ trình nâng cấp. Cập nhật bảng thành phần theo modular architecture.

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT | Nội dung | Mô tả |
|----|----------|-------|
| 1.1 | Nhiệm vụ chính | Huấn luyện xạ thủ bắn phòng không trên biển chống UAV và USV bằng mô phỏng |
| 1.2 | Nhiệm vụ phụ | Đánh giá năng lực xạ thủ; nghiên cứu chiến thuật phòng không; huấn luyện đội; sát hạch định kỳ |
| 1.3 | Đối tượng huấn luyện | Xạ thủ súng máy trên tàu chiến, tàu tuần tra, trạm phòng không ven biển |
| 1.4 | Hình thức huấn luyện | Mô phỏng 100% (Pure Virtual) — không sử dụng đạn thật |
| 1.5 | Vũ khí mô phỏng | **Mô đun thay nhanh (< 5 phút):** DSHK 12.7mm, NSV 12.7mm (Phase 1); KPVT 14.5mm, ZU-23-2 23mm (Phase 2); PKM 7.62mm (tùy chọn) |
| 1.6 | Kiến trúc vũ khí | **Mô đun** — giá đỡ chung (universal cradle) + mô đun vũ khí thay thế nhanh. Hệ thống tự nhận biết loại súng qua chip NFC, tự động cấu hình toàn bộ (đạn đạo, giật, tốc độ bắn, kính ngắm, chấm điểm) |
| 1.7 | Môi trường mô phỏng | Biển mở, ven bờ — Biển Đông, điều kiện nhiệt đới |

### 2. Khả năng huấn luyện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 2.1 | Loại mục tiêu bay (UAV) | ≥ 5 | loại | DJI Mavic, FPV kamikaze, trinh sát trung, đạn bay lảng vảng, bầy đàn |
| 2.2 | Loại mục tiêu mặt nước (USV) | ≥ 3 | loại | Tiếp cận thẳng, zigzag, tốc độ cao 60 hải lý |
| 2.3 | Số lượng mục tiêu đồng thời | ≤ 8 | mục tiêu | Bầy đàn UAV 4-8 chiếc |
| 2.4 | Tầm phát hiện mục tiêu UAV Group 1 | ≥ 300 | m | DJI Mavic (~30cm) nhìn thấy rõ trên hình |
| 2.5 | Tốc độ mục tiêu UAV | 30-250 | km/h | Từ trực thăng mini đến FPV kamikaze |
| 2.6 | Tốc độ mục tiêu USV | 20-60 | hải lý/giờ | Từ tiếp cận chậm đến tốc độ cao |
| 2.7 | Quỹ đạo bay UAV | ≥ 5 | kiểu | Thẳng, jinking, lao bổ nhào, pop-up, bầy đàn |
| 2.8 | Quỹ đạo USV | ≥ 3 | kiểu | Thẳng, zigzag, high-speed |
| 2.9 | Điều kiện môi trường | 3 | loại | Ban ngày, hoàng hôn/bình minh, ban đêm |
| 2.10 | Trạng thái biển mô phỏng | 1-4 | Sea State | Biển lặng đến biển động |
| 2.11 | Thời tiết mô phỏng | 3 | loại | Trời quang, mưa, sương mù (tầm nhìn 500m-10km) |
| 2.12 | Kịch bản sẵn có khi giao hàng | ≥ 10 | kịch bản | 5 UAV + 3 USV + 2 hỗn hợp |
| 2.13 | Tạo kịch bản mới (instructor) | ≤ 15 | phút | Giao diện kéo-thả, không cần lập trình |
| 2.14 | Hồ sơ vũ khí Phase 1 | 2 | loại | DSHK 12.7mm + NSV 12.7mm |
| 2.15 | Hồ sơ vũ khí Phase 2 | +2 | loại | KPVT 14.5mm + ZU-23-2 23mm |
| 2.16 | Thời gian thay loại vũ khí | ≤ 5 | phút | Tháo module cũ → lắp mới → tự nhận biết → sẵn sàng |
| 2.17 | Tổng loại vũ khí hỗ trợ | 5 | loại | 7.62mm, 12.7mm (×2), 14.5mm, 23mm |

### 3. Độ chính xác mô phỏng

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Mô hình đạn đạo | 6DOF | — | Trọng lực, sức cản, gió, góc hướng, chuyển động tàu |
| 3.2 | Sai số so với bảng bắn (12.7mm B-32) | ≤ 5 | % | Tại 100–1.500m |
| 3.3 | Sai số so với bảng bắn (14.5mm BS) | ≤ 5 | % | Tại 100–2.000m (Phase 2) |
| 3.4 | Sai số so với bảng bắn (23mm OFZ) | ≤ 5 | % | Tại 100–2.500m (Phase 2) |
| 3.5 | Bù chuyển động tàu vào đường đạn | Có | — | Roll + pitch → ảnh hưởng thực lên đường đạn |
| 3.6 | Xác suất phân loại trúng/trượt | ≥ 95 | % | Collision volume trên target mesh |
| 3.7 | Tốc độ khung hình | ≥ 60 | fps | Liên tục, không giảm dưới tải |
| 3.8 | Độ trễ tổng (cò → phản hồi hình) | ≤ 50 | ms | End-to-end (encoder 2ms → USB 3ms → Unity 4ms → render 12ms → HDMI 8ms → projector 17ms) |
| 3.9 | Động cơ đạn đạo | V-SMASH core | — | Tái sử dụng từ sản phẩm V-SMASH (IRONMESH platform) |

### 4. Đánh giá và phân tích sau buổi tập (AAR)

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 4.1 | Chấm điểm tự động | Đa tiêu chí: trúng đích, thời gian phản ứng, tiết kiệm đạn, ưu tiên mục tiêu |
| 4.2 | Phát lại 3D (AAR replay) | Từ mọi góc nhìn, tua chậm, tua lại, zoom |
| 4.3 | Dữ liệu ghi lại | Đường ngắm liên tục (10Hz), thời điểm bắn, trúng/trượt, quỹ đạo mục tiêu, loại vũ khí |
| 4.4 | Xuất báo cáo | CSV (dữ liệu thô) + PDF (báo cáo tổng hợp có thể in) |
| 4.5 | Hồ sơ xạ thủ | Theo dõi cá nhân, 5 kỹ năng (phát hiện, bám mục tiêu, góc hướng, kiểm soát loạt bắn, ưu tiên mục tiêu) |
| 4.6 | Đề xuất bài tập | Tự động đề xuất kịch bản tiếp theo dựa trên kỹ năng yếu nhất |
| 4.7 | Xếp hạng | So sánh giữa các xạ thủ + xu hướng cá nhân theo thời gian |
| 4.8 | Dung lượng lưu trữ | ~50 MB/buổi tập — 1 TB ≈ 20.000 buổi |

---

## II. TÍNH NĂNG KỸ THUẬT

### 5. Hệ thống hiển thị

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 5.1 | Loại hiển thị | Projection | — | 3 máy chiếu short-throw lên màn hình cong |
| 5.2 | Góc nhìn ngang (FOV) | ≥ 180 | độ | 3 màn hình ghép liền, peripheral vision đầy đủ |
| 5.3 | Góc nhìn dọc (FOV) | ≥ 60 | độ | Đủ nhìn mục tiêu trên cao (+85°) |
| 5.4 | Độ phân giải tổng | 5.760 × 1.080 | pixel | 3 × Full HD (nâng cấp 4K cho PA-3+) |
| 5.5 | Độ sáng máy chiếu | ≥ 3.000 | lumens/máy | Epson/BenQ có sẵn tại VN |
| 5.6 | Màn hình cong | 4 × 2 | m | Bán kính cong ~3m, vải matt white gain 1.0-1.3, tự chế tạo |
| 5.7 | An toàn mắt (IEC 62471) | Đạt | — | Máy chiếu phía sau xạ thủ, khoảng cách ≥ 2m |
| 5.8 | Động cơ render | Unity 6 LTS + HDRP | — | VN developer pool lớn, license on-premise |
| 5.9 | GPU | NVIDIA RTX 4080/4090 | — | Có sẵn tại VN |
| 5.10 | Biển 3D | Procedural FFT Gerstner | — | Sea State 0-5, real-time adjustable |
| 5.11 | Ngày/đêm | Day/dusk/night cycle | — | Ánh sáng mặt trời + post-process exposure |

### 6. Bệ vũ khí mô phỏng — KIẾN TRÚC MÔ ĐUN

#### 6A. Giá đỡ chung (Universal Cradle — cố định)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 6.1 | Xoay ngang (traverse) | ≥ 60 | °/s | Slip clutch + encoder 0.1° |
| 6.2 | Ngóc dọc (elevation) | -10 → +87 | độ | Encoder 0.1° (đối trọng trong mô đun) |
| 6.3 | Kháng lực xoay | 0-10 | Nm | Magnetic powder brake — tự điều chỉnh theo loại súng |
| 6.4 | Bệ đỡ | Thép hàn, bolt xuống sàn | — | 3 vị trí chiều cao (155-185cm) |
| 6.5 | An toàn góc bắn | Software + hard stop cơ học | — | Dual redundancy |
| 6.6 | Giao diện mô đun | Quick-release plate + 12-pin MIL | — | 2 chốt định vị + 4 bu lông bướm M10 |
| 6.7 | Tự nhận biết loại súng | NFC (ISO 14443A) | — | Đặt súng → đọc tag → cấu hình tự động toàn hệ thống |
| 6.8 | Thời gian thay súng | ≤ 5 | phút | 1-2 người, không cần công cụ chuyên dụng |

#### 6B. Mô đun vũ khí (Weapon Module — thay thế nhanh)

| TT | Mô đun | Vũ khí | Cỡ đạn | Trọng lượng | Lực giật | Lực cò | ROF | Giai đoạn |
|----|--------|--------|--------|-------------|----------|--------|-----|-----------|
| 6.9 | WM-01 | DSHK | 12.7×108mm | ~10 kg | 15-20 N | 2-3 kg | 600 v/p | Phase 1 |
| 6.10 | WM-02 | NSV | 12.7×108mm | ~8 kg | 15-20 N | 1,5-2,5 kg | 700 v/p | Phase 1 |
| 6.11 | WM-03 | KPVT | 14.5×114mm | ~12 kg | 25-35 N | 3-5 kg | 550 v/p | Phase 2 |
| 6.12 | WM-04 | ZU-23-2 | 23×152mm | ~15 kg | 40-60 N | 4-6 kg | 800 v/p | Phase 2 |
| 6.13 | WM-05 | PKM | 7.62×54R | ~7 kg | 8-12 N | 1,5-2 kg | 650 v/p | Tùy chọn |

**Mỗi mô đun gồm:** Thân súng CNC nhôm 6061 (kích thước ±5mm so với thật) + solenoid giật 24VDC + cò micro-switch có lò xo điều chỉnh + kính ngắm replica CNC + đối trọng cân bằng + NFC tag (loại + serial + hiệu chuẩn + số phát đã bắn).

#### 6C. Tự động cấu hình khi thay súng

Khi lắp mô đun vũ khí mới, hệ thống đọc chip NFC và tự động thay đổi:

| TT | Hệ thống con | Tự động thay đổi |
|----|-------------|-------------------|
| 6.14 | Đạn đạo | Load bảng bắn 6DOF đúng cỡ đạn |
| 6.15 | Giật | Điều chỉnh PWM solenoid → lực giật đúng loại |
| 6.16 | Kháng lực | Set phanh từ theo trọng lượng súng |
| 6.17 | Tốc độ bắn | Set ROF đúng loại |
| 6.18 | Kính ngắm | Đổi reticle overlay phù hợp loại kính ngắm |
| 6.19 | Giao diện | Hiển thị tên vũ khí, cỡ đạn, cơ số đạn trên HUD |
| 6.20 | Chấm điểm | Áp dụng tiêu chí chấm điểm phù hợp loại vũ khí |
| 6.21 | Ghi chép | Ghi loại vũ khí vào hồ sơ buổi tập (AAR) |

#### 6D. Quy trình thay vũ khí

| Bước | Hành động | Thời gian |
|------|-----------|-----------|
| 1 | Instructor bấm "Thay vũ khí" → hệ thống safe mode | 5 giây |
| 2 | Tháo 4 bu lông bướm M10 | 60 giây |
| 3 | Rút connector 12-pin MIL (xoay bayonet) | 5 giây |
| 4 | Nhấc mô đun cũ ra (2 người nếu > 12kg) | 30 giây |
| 5 | Đặt mô đun mới → chốt định vị tự canh | 30 giây |
| 6 | Cắm connector 12-pin | 5 giây |
| 7 | Siết 4 bu lông bướm | 60 giây |
| 8 | NFC auto-detect → auto-configure → instructor xác nhận | 30 giây |
| | **TỔNG** | **~4 phút** |

### 7. Hệ thống mô phỏng chuyển động tàu

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.1 | Bậc tự do | 2 | DOF | Roll + Pitch (heave = nâng cấp PA-3) |
| 7.2 | Biên độ roll | ±12 | độ | Tương ứng Sea State 1-4 |
| 7.3 | Biên độ pitch | ±8 | độ | Tương ứng Sea State 1-4 |
| 7.4 | Chu kỳ sóng | 4-8 | giây | Phù hợp Biển Đông |
| 7.5 | Dẫn động | Điện — 2 actuator tuyến tính | — | Ball-screw, êm, không ồn |
| 7.6 | Tải trọng | ≥ 130 | kg | Xạ thủ 100kg + thiết bị 30kg |
| 7.7 | Ghế | Racing bucket + dây 4 điểm | — | 3 vị trí điều chỉnh |
| 7.8 | Đồng bộ | Wave data → actuator (UDP 50Hz) | — | Sync sóng render ↔ chuyển động ghế |
| 7.9 | Dừng an toàn | Hard stop cơ học + E-stop điện | — | ≤ 1 giây dừng toàn bộ |

### 8. Hệ thống âm thanh

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 8.1 | Kênh | 5.1 | surround | Hướng tiếp cận mục tiêu qua spatial audio |
| 8.2 | Âm lượng | ≥ 85 | dB | 5 loa + 1 subwoofer + amplifier |
| 8.3 | Tiếng súng | Sampled theo loại | — | Lớp: nổ + vang + phản xạ, tự đổi theo NFC |
| 8.4 | Âm thanh môi trường | Sóng biển, gió, engine UAV/USV | — | Spatial 3D — UAV buzz hướng tiếp cận |

### 9. Trạm huấn luyện viên (Instructor Station)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 9.1 | Phần cứng | PC chuyên dụng + 2 màn hình 27" | — | God-eye view + trainee mirror |
| 9.2 | Giao diện | 100% tiếng Việt | — | GUI kéo-thả, không cần lập trình |
| 9.3 | Thêm mục tiêu mới | ≤ 1 | giây | Kéo-thả trên bản đồ chiến thuật |
| 9.4 | Quản lý đa xạ thủ | ≤ 4 | trạm | Qua mạng LAN Gigabit |
| 9.5 | Phát lại tức thì | Có | — | AAR replay ngay trên màn hình instructor |
| 9.6 | Điều chỉnh real-time | Có | — | Thời tiết, biển, ánh sáng, tạm dừng/tiếp tục |

---

## III. ĐẶC TÍNH VẬN HÀNH

### 10. Lắp đặt và triển khai

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 10.1 | Diện tích phòng tối thiểu | 6 × 8 | m | Trần ≥ 3m |
| 10.2 | Diện tích weapon station | ≤ 2 × 2 | m | Bao gồm motion platform |
| 10.3 | Số kiện vận chuyển | 4 | kiện | Mỗi kiện ≤ 200kg |
| 10.4 | Thời gian lắp đặt tại đơn vị | ≤ 8 | giờ | 2 người, hex key + tuốc nơ vít đủ |
| 10.5 | Qua cửa tiêu chuẩn | 900 × 2.100 | mm | Tất cả kiện tháo rời được |
| 10.6 | Vận chuyển đường bộ | Xe tải 2,5T | — | Đường VN (xấu), chống sốc |
| 10.7 | Vận chuyển container | 20ft | — | Cho thị trường xuất khẩu |

### 11. Nguồn điện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 11.1 | Nguồn cấp | 220V ±10%, 50Hz | — | Đơn pha, tiêu chuẩn VN |
| 11.2 | Tổng tiêu thụ (đỉnh) | ~2,0 | kW | Vừa ổ cắm 20A |
| 11.3 | Tổng tiêu thụ (trung bình) | ~1,9 | kW | Tiết kiệm điện |
| 11.4 | UPS dự phòng | ≥ 15 | phút | 2kVA, bảo vệ dữ liệu khi mất điện |

### 12. Vận hành

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 12.1 | Khởi động cold boot → sẵn sàng | ≤ 5 | phút | Bao gồm tự kiểm tra 2 phút |
| 12.2 | Tự kiểm tra khi khởi động | ≤ 2 | phút | Encoder, projector, motion, audio, NFC |
| 12.3 | Vận hành liên tục | ≥ 8 | giờ/ngày | Không cần restart |
| 12.4 | Đào tạo instructor vận hành | ≤ 2 | ngày | Bao gồm tạo kịch bản + AAR |
| 12.5 | Đào tạo kỹ thuật viên bảo trì | ≤ 3 | ngày | Bao gồm thay module + xử lý sự cố |
| 12.6 | Ekip vận hành tối thiểu | 1 instructor + 1 trainee | người | — |

### 13. Bảo trì và tuổi thọ

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 13.1 | MTBF | ≥ 500 | giờ | — |
| 13.2 | MTTR (có spare parts) | ≤ 4 | giờ | — |
| 13.3 | Spare parts tại VN | ≤ 7 | ngày giao | 100% có sẵn hoặc giao nhanh |
| 13.4 | Bảo dưỡng định kỳ | ≤ 2 | giờ/tháng | Theo checklist |
| 13.5 | Vòng đời thiết kế | ≥ 10 | năm | — |
| 13.6 | Cập nhật nội dung | Mỗi 12 | tháng | Kịch bản mới, hành vi mục tiêu mới, loại UAV/USV mới |
| 13.7 | Nâng cấp GPU/display | Modular | — | Không thay toàn bộ hệ thống |
| 13.8 | Phần mềm | 100% on-premise | — | Không phụ thuộc server nước ngoài, cập nhật qua USB |
| 13.9 | Theo dõi bảo trì mô đun | NFC write-back | — | Đếm số phát bắn → cảnh báo khi đến ngưỡng bảo dưỡng |

---

## IV. CHI PHÍ VÀ HIỆU QUẢ

### 14. Chi phí

| TT | Hạng mục | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 14.1 | Giá bán PA-2 STANDARD (2 module WM-01+02) | 50.000-70.000 | USD/bộ | Đầy đủ 5 phân hệ |
| 14.2 | Mô đun vũ khí bổ sung (WM-03 KPVT) | ~3.000 | USD/mô đun | Bao gồm phần mềm bảng bắn |
| 14.3 | Mô đun vũ khí bổ sung (WM-04 ZU-23-2) | ~3.500 | USD/mô đun | Bao gồm phần mềm bảng bắn |
| 14.4 | Chi phí vận hành | ≤ 5 | USD/giờ | Điện (~$0,4/h) + hao mòn |
| 14.5 | Chi phí bảo trì hàng năm | ≤ 5% giá bán | — | ~$2.500-3.500/năm |

### 15. So sánh hiệu quả kinh tế

| Phương thức | Chi phí/giờ | Đạn tiêu thụ | Hạn chế |
|-------------|-------------|-------------|---------|
| Bắn thật 12.7mm | $250-1.500 | 50-200 viên | Trường bắn, an toàn, thời tiết, hậu cần đạn |
| Bắn thật 23mm | $500-3.000 | 20-100 viên | Hiếm cơ hội bắn C-UAV thực |
| **Mô phỏng PA-2** | **≤ $5** | **0** | **Không giới hạn thời tiết, an toàn 100%** |
| **Tiết kiệm (12.7mm)** | **98-99,7%** | **100%** | **Huấn luyện 24/7, mọi kịch bản** |

### 16. Lộ trình nâng cấp

| Phase | Tên | Thêm | Giá Target | Thời gian thêm |
|-------|-----|------|-----------|----------------|
| PA-2 | STANDARD (hiện tại) | 2 module 12.7mm, 2-DOF, 180° projection | $50-70K | Baseline |
| PA-2+ | +WEAPON PACK | +WM-03 KPVT + WM-04 ZU-23-2 | +$6.500 | Sẵn sàng cùng lúc |
| PA-3 | ENHANCED | +heave 3-DOF, +AI adaptive difficulty, +4K | $70-90K | +3-4 tháng |
| PA-4 | ELITE | +FLIR/NVG mode, +motorized recoil, +AR mode | $90-120K | +6-9 tháng |
| PA-5 | NETWORKED | +CORTEX multi-site, +combined arms | $150K+ | +12 tháng |

---

## V. LÝ DO LỰA CHỌN PHƯƠNG ÁN PA-2 STANDARD

### 17. Các phương án đã đánh giá (VDI 2225)

| | PA-1: ENTRY | **PA-2: STANDARD ✓** | PA-3: VR COMPACT | PA-4: ELITE |
|---|---|---|---|---|
| Display | 1 màn hình (60°) | **3-screen 180°** | VR headset | Curved LED wall |
| Ship motion | Visual only | **Visual + seat motion** | VR 6DOF | Full motion platform |
| Weapon | Mockup + encoder | **Authentic + recoil** | Ergonomic mockup | Full replica + motorized |
| Giá | ~$25-35K | **~$50-70K** | ~$30-45K | ~$90-130K |
| **Điểm VDI 2225** | **2,85** | **2,90** | **3,05** | **2,65** |

### 18. Lý do chọn PA-2 (điểm 2,90) thay vì PA-3 (điểm 3,05)

| TT | Lý do | Giải thích |
|----|-------|-----------|
| 18.1 | Độ bền môi trường biển | PA-2 bền hơn trong điều kiện muối, ẩm, rung — PA-3 (VR headset) nhạy cảm |
| 18.2 | Training transfer vũ khí | Weapon handling thực (muscle memory, ergonomics) cao hơn VR controller |
| 18.3 | Instructor observation | Instructor nhìn được xạ thủ thực + màn hình — VR cô lập |
| 18.4 | Sensitivity analysis | PA-2 thắng khi tăng trọng số Reliability (C2) — phù hợp điều kiện hải quân |
| 18.5 | Upgrade path | PA-2 AR-ready → nâng cấp rõ ràng lên PA-4 ELITE |
| 18.6 | Modular weapon | PA-2 cho phép swap 5 loại vũ khí — VR headset không có cảm giác vũ khí thật |

---

## VI. THÀNH PHẦN HỆ THỐNG

### 19. Bảng kê thành phần chính

| TT | Phân hệ | Thành phần | SL | Ghi chú |
|----|---------|------------------|----|---------|
| | **SS1 — Giá đỡ chung (Universal Cradle)** | | | |
| 1 | | Bệ đỡ thép hàn + interface plate + locating pins | 1 | Workshop X, cố định |
| 2 | | Encoder xoay 0.1° (traverse + elevation) | 2 | — |
| 3 | | Magnetic powder brake 0-10Nm | 1 | Kháng lực tự điều chỉnh |
| 4 | | Slip clutch | 1 | Ma sát traverse |
| 5 | | NFC reader RC522 | 1 | Tự nhận biết loại súng |
| 6 | | Connector 12-pin MIL-spec (phía giá đỡ) | 1 | — |
| | **SS1 — Mô đun vũ khí (Phase 1)** | | | |
| 7 | WM-01 | DSHK 12.7mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~10kg |
| 8 | WM-02 | NSV 12.7mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~8kg |
| | **SS1 — Mô đun vũ khí (Phase 2 — bán riêng)** | | | |
| 9 | WM-03 | KPVT 14.5mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~12kg |
| 10 | WM-04 | ZU-23-2 23mm: thân CNC nhôm + solenoid + cò + kính ngắm + đối trọng + NFC | 1 bộ | ~15kg |
| | **SS2 — Hiển thị & Render** | | | |
| 11 | | Máy chiếu short-throw ≥ 3.000 lumens | 3 | Epson/BenQ |
| 12 | | Màn hình cong 4×2m (khung nhôm + vải projection) | 1 | Tự chế tạo |
| 13 | | PC render: RTX 4090 + i9/Ryzen 9 + 64GB RAM + NVMe | 1 | — |
| 14 | | Loa 5.1 surround + subwoofer + amplifier | 1 bộ | FMOD spatial |
| | **SS3 — Motion Platform** | | | |
| 15 | | Linear actuator điện (ball-screw, 200mm stroke, ≥500N) | 2 | — |
| 16 | | Ghế racing bucket + dây 4 điểm + rail | 1 | — |
| 17 | | Khung thép hàn + universal joint | 1 | Workshop X |
| 18 | | ESP32 + motor driver (PID control) | 1 | — |
| | **SS5 — Tích hợp hệ thống** | | | |
| 19 | | PC instructor: RTX 4060 + 2×27" monitor | 1 | — |
| 20 | | UPS 2kVA | 1 | APC/CyberPower |
| 21 | | PDU + cáp + connectors (có nhãn, keyed) | 1 bộ | — |
| 22 | | Switch mạng Gigabit | 1 | — |
| 23 | | Hộp vận chuyển flight case | 4 | — |
| 24 | | Bộ công cụ bảo trì (hex key, screwdriver, spare fuses) | 1 | — |

---

## VII. RỦI RO VÀ BIỆN PHÁP

| TT | Rủi ro | Mức | Biện pháp |
|----|--------|-----|-----------|
| R1 | Unity multi-display latency > 50ms | TRUNG BÌNH | Benchmark cụ thể tại Phase 3 (PoC tháng 3) |
| R2 | Căn chỉnh 3 máy chiếu trên màn hình cong | TRUNG BÌNH | Custom calibration tool (Phase 3) |
| R3 | Cộng hưởng motion platform với weapon station | THẤP | Phân tích tần số tại Phase 3 |
| R4 | Tuyển dụng lập trình viên Unity VN | TRUNG BÌNH | Bắt đầu tuyển trong Phase 2 |
| R5 | Chưa có tiêu chuẩn huấn luyện C-UAV chính thức | THẤP | Thiết kế theo NATO STANAG tương đương, điều chỉnh sau |
| R6 | Solenoid giật cho ZU-23-2 (40-60N) vượt khả năng solenoid thường | THẤP | Solenoid kéo 60N sẵn có; hoặc 2 solenoid song song |

---

**Đơn vị lập:**

Workshop X — Bộ phận Quốc phòng & Huấn luyện
Ngày: 07/04/2026
Phiên bản: 1.1
