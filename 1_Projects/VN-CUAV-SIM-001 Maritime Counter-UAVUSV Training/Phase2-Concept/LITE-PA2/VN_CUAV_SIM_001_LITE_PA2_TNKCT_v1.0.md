# TÍNH NĂNG KỸ CHIẾN THUẬT
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG TRÊN BIỂN CHỐNG UAV VÀ USV

**Số hiệu:** WX-CUAV-SIM-TNKCT-001
**Phiên bản:** 1.0
**Ngày:** 07/04/2026
**Phân loại:** Tài liệu kỹ thuật — không mật
**Concept:** PA-2 STANDARD
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Huấn luyện

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT  | Nội dung             | Mô tả                                                                                                                           |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Nhiệm vụ chính       | Huấn luyện xạ thủ bắn phòng không trên biển chống UAV và USV bằng mô phỏng                                                      |
| 1.2 | Nhiệm vụ phụ         | Đánh giá năng lực xạ thủ; nghiên cứu chiến thuật phòng không; huấn luyện đội                                                    |
| 1.3 | Đối tượng huấn luyện | Xạ thủ súng máy 12.7mm DSHK/NSV trên tàu chiến, tàu tuần tra, trạm ven biển                                                     |
| 1.4 | Hình thức huấn luyện | Mô phỏng 100% (Pure Virtual) — không sử dụng đạn thật                                                                           |
| 1.5 | Vũ khí mô phỏng      | **Mô đun thay nhanh (< 5 phút):** DSHK 12.7mm, NSV 12.7mm (Phase 1); KPVT 14.5mm, ZU-23-2 23mm (Phase 2); PKM 7.62mm (tùy chọn) |
| 1.6 | Kiến trúc vũ khí     | **Mô đun** — giá đỡ chung + mô đun vũ khí thay thế nhanh, hệ thống tự nhận biết loại (NFC)                                      |

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
| 2.11 | Thời tiết mô phỏng | 3 | loại | Trời quang, mưa, sương mù |
| 2.12 | Kịch bản sẵn có khi giao hàng | ≥ 10 | kịch bản | 5 UAV + 3 USV + 2 hỗn hợp |
| 2.13 | Tạo kịch bản mới (instructor) | ≤ 15 | phút | Giao diện kéo-thả, không cần lập trình |
| 2.14 | Hồ sơ vũ khí Phase 1 | 2 | loại | DSHK 12.7mm + NSV 12.7mm |
| 2.15 | Hồ sơ vũ khí Phase 2 | +2 | loại | KPVT 14.5mm + ZU-23-2 23mm |
| 2.16 | Thời gian thay loại vũ khí | ≤ 5 | phút | Tháo module cũ → lắp mới → tự nhận biết → sẵn sàng |
| 2.17 | Tổng loại vũ khí hỗ trợ | 5 | loại | 7.62mm, 12.7mm (×2), 14.5mm, 23mm |

### 3. Độ chính xác mô phỏng

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Sai số đạn đạo so với bảng bắn | ≤ 5 | % | Đạn 12.7mm B-32 tại 100–1.500m |
| 3.2 | Mô hình đạn đạo | 6DOF | — | Trọng lực, sức cản, gió, góc hướng |
| 3.3 | Bù chuyển động tàu | Có | — | Roll + pitch → ảnh hưởng đường đạn |
| 3.4 | Xác suất phân loại trúng/trượt | ≥ 95 | % | — |
| 3.5 | Tốc độ khung hình | ≥ 60 | fps | Liên tục, không giảm dưới tải |
| 3.6 | Độ trễ tổng (cò → phản hồi hình) | ≤ 50 | ms | End-to-end |

### 4. Đánh giá và phân tích

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 4.1 | Chấm điểm tự động | Đa tiêu chí: trúng đích, thời gian phản ứng, tiết kiệm đạn, ưu tiên mục tiêu |
| 4.2 | Phát lại sau buổi tập (AAR) | 3D replay từ mọi góc nhìn, tua chậm, tua lại |
| 4.3 | Dữ liệu ghi lại | Đường ngắm (10Hz liên tục), thời điểm bắn, trúng/trượt, quỹ đạo mục tiêu |
| 4.4 | Xuất báo cáo | CSV (dữ liệu thô) + PDF (báo cáo tổng hợp) |
| 4.5 | Theo dõi tiến bộ xạ thủ | Hồ sơ cá nhân, 5 kỹ năng, đề xuất bài tập tiếp theo |
| 4.6 | Xếp hạng | So sánh giữa các xạ thủ + xu hướng cá nhân theo thời gian |

---

## II. TÍNH NĂNG KỸ THUẬT

### 5. Hệ thống hiển thị

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 5.1 | Loại hiển thị | Projection | — | 3 máy chiếu short-throw |
| 5.2 | Góc nhìn ngang (FOV) | ≥ 180 | độ | 3 màn hình ghép liền |
| 5.3 | Góc nhìn dọc (FOV) | ≥ 60 | độ | Đủ nhìn mục tiêu trên cao |
| 5.4 | Độ phân giải tổng | 5.760 × 1.080 | pixel | 3 × Full HD |
| 5.5 | Độ sáng máy chiếu | ≥ 3.000 | lumens/máy | Epson/BenQ có sẵn tại VN |
| 5.6 | Màn hình cong | 4 × 2 | m | Bán kính cong ~3m, vải matt white |
| 5.7 | An toàn mắt (IEC 62471) | Đạt | — | Máy chiếu phía sau xạ thủ |

### 6. Bệ vũ khí mô phỏng — KIẾN TRÚC MÔ ĐUN

#### 6A. Giá đỡ chung (Universal Cradle — cố định)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 6.1 | Xoay ngang (traverse) | ≥ 60 | °/s | Slip clutch + encoder 0.1° |
| 6.2 | Ngóc dọc (elevation) | -10 → +87 | độ | Encoder 0.1° (counterweight trong module) |
| 6.3 | Kháng lực xoay | 0-10 | Nm | Magnetic powder brake — tự điều chỉnh theo loại súng |
| 6.4 | Bệ đỡ | Thép hàn, bolt xuống sàn | — | 3 vị trí chiều cao (155-185cm) |
| 6.5 | An toàn góc bắn | Software + hard stop cơ học | — | Dual redundancy |
| 6.6 | Giao diện mô đun | Quick-release plate + 12-pin MIL | — | 2 chốt định vị + 4 bu lông bướm M10 |
| 6.7 | Tự nhận biết loại súng | NFC (ISO 14443A) | — | Đặt súng → đọc tag → cấu hình tự động |
| 6.8 | Thời gian thay súng | ≤ 5 | phút | 1-2 người, không cần công cụ chuyên dụng |

#### 6B. Mô đun vũ khí (Weapon Module — thay thế nhanh)

| TT | Mô đun | Vũ khí | Cỡ đạn | Trọng lượng | Lực giật | Lực cò | ROF | Giai đoạn |
|----|--------|--------|--------|-------------|----------|--------|-----|-----------|
| 6.9 | WM-01 | DSHK | 12.7×108mm | ~10 kg | 15-20 N | 2-3 kg | 600 v/p | Phase 1 |
| 6.10 | WM-02 | NSV | 12.7×108mm | ~8 kg | 15-20 N | 1,5-2,5 kg | 700 v/p | Phase 1 |
| 6.11 | WM-03 | KPVT | 14.5×114mm | ~12 kg | 25-35 N | 3-5 kg | 550 v/p | Phase 2 |
| 6.12 | WM-04 | ZU-23-2 | 23×152mm | ~15 kg | 40-60 N | 4-6 kg | 800 v/p | Phase 2 |
| 6.13 | WM-05 | PKM | 7.62×54R | ~7 kg | 8-12 N | 1,5-2 kg | 650 v/p | Tùy chọn |

**Mỗi mô đun gồm:** Thân súng CNC nhôm 6061 (kích thước ±5mm so với thật) + solenoid giật 24VDC + cò micro-switch + kính ngắm replica CNC + đối trọng + NFC tag.

#### 6C. Tự động cấu hình khi thay súng

| TT | Hệ thống con | Tự động thay đổi |
|----|-------------|-------------------|
| 6.14 | Đạn đạo | Load bảng bắn đúng cỡ đạn (6DOF) |
| 6.15 | Giật | Điều chỉnh solenoid PWM → lực đúng loại |
| 6.16 | Kháng lực | Set magnetic brake theo trọng lượng súng |
| 6.17 | Tốc độ bắn | Set ROF đúng loại |
| 6.18 | Kính ngắm | Đổi reticle overlay phù hợp |
| 6.19 | Giao diện | Hiển thị tên vũ khí, cỡ đạn, cơ số đạn |
| 6.20 | Chấm điểm | Áp dụng tiêu chí phù hợp loại vũ khí |
| 6.21 | Ghi chép | Ghi loại vũ khí vào hồ sơ buổi tập |

### 7. Hệ thống mô phỏng chuyển động tàu

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 7.1 | Bậc tự do | 2 | DOF | Roll + Pitch |
| 7.2 | Biên độ roll | ±12 | độ | Tương ứng Sea State 1-4 |
| 7.3 | Biên độ pitch | ±8 | độ | Tương ứng Sea State 1-4 |
| 7.4 | Chu kỳ sóng | 4-8 | giây | Phù hợp Biển Đông |
| 7.5 | Dẫn động | Điện — 2 actuator tuyến tính | — | Ball-screw, êm, không ồn |
| 7.6 | Tải trọng | ≥ 130 | kg | Xạ thủ 100kg + thiết bị 30kg |
| 7.7 | Ghế | Racing bucket + dây 4 điểm | — | 3 vị trí điều chỉnh |
| 7.8 | Điều khiển | ESP32 MCU, PID control | — | Sync wave data từ render engine (UDP 50Hz) |
| 7.9 | Dừng an toàn | Hard stop cơ học + E-stop điện | — | ≤ 1 giây dừng toàn bộ |

### 8. Hệ thống âm thanh

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 8.1 | Kênh | 5.1 | surround | Hướng tiếp cận mục tiêu |
| 8.2 | Âm lượng | ≥ 85 | dB | 5 loa + 1 subwoofer |
| 8.3 | Tiếng súng | Sampled 12.7mm | — | Lớp: nổ + vang + phản xạ |
| 8.4 | Âm thanh môi trường | Sóng biển, gió, engine UAV/USV | — | Spatial audio 3D |

### 9. Trạm huấn luyện viên (Instructor Station)

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 9.1 | Phần cứng | PC chuyên dụng + 2 màn hình 27" | — | God-eye view + trainee mirror |
| 9.2 | Giao diện | 100% tiếng Việt | — | GUI, không cần lập trình |
| 9.3 | Thêm mục tiêu mới | ≤ 1 | giây | Kéo-thả trên bản đồ |
| 9.4 | Quản lý đa xạ thủ | ≤ 4 | trạm | Qua mạng LAN |
| 9.5 | Phát lại tức thì | Có | — | Replay ngay trên màn hình instructor |

---

## III. ĐẶC TÍNH VẬN HÀNH

### 10. Lắp đặt và triển khai

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 10.1 | Diện tích phòng tối thiểu | 6 × 8 | m | Trần ≥ 3m |
| 10.2 | Diện tích weapon station | ≤ 2 × 2 | m | — |
| 10.3 | Số kiện vận chuyển | 4 | kiện | Mỗi kiện ≤ 200kg |
| 10.4 | Thời gian lắp đặt tại đơn vị | ≤ 8 | giờ | 2 người, không cần công cụ chuyên dụng |
| 10.5 | Qua cửa tiêu chuẩn | 900 × 2.100 | mm | Mong muốn — tháo rời được |

### 11. Nguồn điện

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 11.1 | Nguồn cấp | 220V ±10%, 50Hz | — | Đơn pha, tiêu chuẩn VN |
| 11.2 | Tổng tiêu thụ | ≤ 2,0 | kW | Vừa ổ cắm 20A |
| 11.3 | UPS dự phòng | ≥ 15 | phút | 2kVA, bảo vệ dữ liệu |

### 12. Vận hành

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 12.1 | Khởi động cold boot → sẵn sàng | ≤ 5 | phút | Bao gồm tự kiểm tra |
| 12.2 | Tự kiểm tra khi khởi động | ≤ 2 | phút | Kiểm tra encoder, projector, motion, audio |
| 12.3 | Vận hành liên tục | ≥ 8 | giờ/ngày | Không cần restart |
| 12.4 | Đào tạo instructor vận hành | ≤ 2 | ngày | — |
| 12.5 | Đào tạo kỹ thuật viên bảo trì | ≤ 3 | ngày | — |
| 12.6 | Ekip vận hành | 1 instructor + 1 trainee | người | Tối thiểu |

### 13. Bảo trì và tuổi thọ

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 13.1 | MTBF | ≥ 500 | giờ | — |
| 13.2 | MTTR (có spare parts) | ≤ 4 | giờ | — |
| 13.3 | Spare parts tại VN | ≤ 7 | ngày giao | 100% có sẵn hoặc giao nhanh |
| 13.4 | Bảo dưỡng định kỳ | ≤ 2 | giờ/tháng | Theo checklist |
| 13.5 | Vòng đời thiết kế | ≥ 10 | năm | — |
| 13.6 | Cập nhật phần mềm | Mỗi 12 | tháng | Kịch bản mới, hành vi mục tiêu mới |
| 13.7 | Nâng cấp GPU/display | Modular | — | Không thay toàn bộ hệ thống |
| 13.8 | Phần mềm on-premise | 100% | — | Không phụ thuộc server nước ngoài |

---

## IV. CHI PHÍ VÀ HIỆU QUẢ

### 14. Chi phí

| TT | Hạng mục | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 14.1 | Giá bán PA-2 STANDARD | 50.000-70.000 | USD/bộ | Đầy đủ 5 phân hệ |
| 14.2 | Chi phí vận hành | ≤ 5 | USD/giờ | Điện + hao mòn |
| 14.3 | Chi phí bảo trì hàng năm | ≤ 5% giá bán | — | ~$2.500-3.500/năm |

### 15. So sánh hiệu quả kinh tế

| Phương thức | Chi phí/giờ | Đạn tiêu thụ | Hạn chế |
|-------------|-------------|-------------|---------|
| Bắn thật 12.7mm | $250-1.500 | 50-200 viên | Trường bắn, an toàn, thời tiết |
| Mô phỏng PA-2 | ≤ $5 | 0 | Không giới hạn thời tiết, an toàn 100% |
| **Tiết kiệm** | **98-99,7%** | **100%** | **Huấn luyện 24/7** |

### 16. Nâng cấp trong tương lai

| Phase | Tên | Thêm | Giá Target |
|-------|-----|------|-----------|
| PA-2 | STANDARD (hiện tại) | Baseline | $50-70K |
| PA-3 | ENHANCED | +heave 3-DOF, +AI difficulty | $70-90K |
| PA-4 | ELITE | +14.5mm/23mm, +FLIR/NVG | $90-120K |
| PA-5 | NETWORKED | +CORTEX multi-site | $150K+ |

---

## V. THÀNH PHẦN HỆ THỐNG

### 17. Bảng kê thành phần chính

| TT | Phân hệ | Thành phần chính | SL | Ghi chú |
|----|---------|------------------|----|---------|
| 1 | SS1 Giá đỡ chung | Bệ đỡ thép hàn + interface plate + locating pins | 1 | Workshop X, cố định |
| 2 | | Encoder xoay 0.1° | 2 | Traverse + elevation |
| 3 | | Magnetic powder brake 0-10Nm | 1 | Kháng lực xoay tự điều chỉnh |
| 4 | | Slip clutch | 1 | Ma sát traverse |
| 5 | | NFC reader RC522 | 1 | Tự nhận biết loại súng |
| 6 | | Connector 12-pin MIL-spec (giá đỡ) | 1 | — |
| 7 | SS1 Mô đun WM-01 | Thân DSHK 12.7mm CNC nhôm 6061 (~10kg) | 1 | Phase 1 |
| 8 | | Solenoid giật 24VDC (15-20N) + driver | 1 | Reuse BB-01 |
| 9 | | Cò microswitch + lò xo 2-3kg | 1 | — |
| 10 | | Kính ngắm DSHK replica CNC | 1 | Workshop X |
| 11 | | Đối trọng + NFC tag + connector | 1 bộ | — |
| 12 | SS1 Mô đun WM-02 | Thân NSV 12.7mm CNC nhôm 6061 (~8kg) | 1 | Phase 1 |
| 13 | | Solenoid + cò + kính ngắm NSV + NFC | 1 bộ | — |
| 14 | SS1 Mô đun WM-03 | Thân KPVT 14.5mm CNC nhôm (~12kg) | 1 | Phase 2 (bán riêng) |
| 15 | SS1 Mô đun WM-04 | Thân ZU-23-2 23mm CNC nhôm (~15kg) | 1 | Phase 2 (bán riêng) |
| 8 | SS2 Hiển thị | Máy chiếu short-throw ≥ 3.000 lm | 3 | Epson/BenQ |
| 9 | | Màn hình cong 4×2m | 1 | Khung nhôm + vải projection |
| 10 | | PC render: RTX 4090 + i9 + 64GB | 1 | — |
| 11 | | Loa 5.1 surround + amplifier | 1 bộ | — |
| 12 | SS3 Motion | Linear actuator điện (ball-screw) | 2 | Stroke 200mm, ≥ 500N |
| 13 | | Ghế racing bucket + dây 4 điểm | 1 | — |
| 14 | | Khung thép hàn + universal joint | 1 | Workshop X |
| 15 | | ESP32 + motor driver | 1 | — |
| 16 | SS5 Tích hợp | UPS 2kVA | 1 | APC/CyberPower |
| 17 | | PC instructor: RTX 4060 + 2×27" | 1 | — |
| 18 | | Switch mạng Gigabit | 1 | — |
| 19 | | Hộp vận chuyển (flight case) | 4 | — |

---

**Đơn vị lập:**

Workshop X — Bộ phận Quốc phòng & Huấn luyện
Ngày: 07/04/2026
Phiên bản: 1.0
