# TÍNH NĂNG KỸ CHIẾN THUẬT
# XUỒNG TRIỂN KHAI VÀ THU HỒI UUV (LARS VESSEL)

**Số hiệu:** WX-XUONG-UUV-TNKCT-001
**Phiên bản:** 1.1
**Ngày:** 16/03/2026
**Phân loại:** Đính kèm Đề xuất WX-XUONG-UUV-DX-001 Rev C
**UUV mục tiêu:** Tencel UUV-01 (S/N: UUV-01, 512 kg, Φ400 × 4.800 mm)
**Đơn vị lập:** Workshop X — Bộ phận Quốc phòng & Hàng hải

---

## I. TÍNH NĂNG CHIẾN THUẬT

### 1. Nhiệm vụ và công dụng

| TT | Nội dung | Mô tả |
|----|----------|-------|
| 1.1 | Nhiệm vụ chính | Triển khai (launch) và thu hồi (recovery) 01 UUV Tencel UUV-01 (512 kg) trên biển |
| 1.2 | Nhiệm vụ phụ | Vận chuyển UUV từ tàu mẹ đến khu vực tác chiến; giữ vị trí (station-keeping) trong quá trình UUV hoạt động |
| 1.3 | Hình thức hoạt động | Xuồng phụ trợ (tender), vận hành từ tàu mẹ |
| 1.4 | Vùng biển hoạt động | Ven bờ và ngoài khơi — Biển Đông, điều kiện nhiệt đới |

### 2. Khả năng tác chiến

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 2.1 | Cấp biển triển khai UUV | ≤ 3 | Sea State | Hs = 0,5 – 1,25 m |
| 2.2 | Cấp biển thu hồi UUV | ≤ 3 | Sea State | Hs = 0,5 – 1,25 m |
| 2.3 | Cấp biển thiết kế (sống sót) | 4 | Sea State | Hs = 1,25 – 2,5 m; gió cấp 5–6 |
| 2.4 | Số lượng UUV mỗi chuyến | 1 | chiếc | — |
| 2.5 | Trọng lượng UUV (khô / ướt) | 512 / 515 | kg | Tencel UUV-01, lực nổi 15 N |
| 2.6 | Thời gian triển khai UUV | ≤ 15 | phút | Từ LARS sẵn sàng đến UUV tự hành |
| 2.7 | Thời gian thu hồi UUV | ≤ 30 | phút | Từ UUV nổi đến cố định trên nôi |
| 2.8 | Thời gian chuẩn bị LARS | ≤ 20 | phút | Từ xuồng hạ thủy đến LARS sẵn sàng |
| 2.9 | Tỷ lệ bắt thành công (SS 2) | ≥ 80 | % | Lần đầu tiên |
| 2.10 | Tỷ lệ bắt thành công (SS 3) | ≥ 60 | % | Lần đầu tiên |
| 2.11 | Phương thức thu hồi | Thụ động | — | Phễu V dẫn hướng, không cần thợ lặn |
| 2.12 | Khả năng hoạt động đêm | Hạn chế | — | Có đèn pha; nâng cấp NVG là tùy chọn |

### 3. Tính cơ động

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 3.1 | Tốc độ tối đa (tự hành) | ≥ 25 | hải lý/giờ | Đầy tải, biển lặng |
| 3.2 | Tốc độ hành trình (cruise) | ≥ 15 | hải lý/giờ | — |
| 3.3 | Tốc độ kéo sát mạn tàu mẹ | 5–8 | hải lý/giờ | Phương thức di chuyển chính |
| 3.4 | Tốc độ thao tác LARS | 2–5 | hải lý/giờ | Khi triển khai / thu hồi UUV |
| 3.5 | Tầm hoạt động (tự hành) | ≥ 70 | hải lý | Tại tốc độ hành trình |
| 3.6 | Thời gian hoạt động liên tục | ≥ 5 | giờ | Tại tốc độ tối đa |
| 3.7 | Phương thức triển khai xuồng | Kéo sát mạn / tự hành | — | Không cẩu được (vượt SWL cần cẩu) |

### 4. Ekip và bố trí

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| 4.1 | Quân số biên chế | 3 | người | Tối thiểu cho vận hành đầy đủ |
| 4.2 | Thuyền trưởng / Lái | 1 | người | Điều hướng, giữ vị trí, quyết định hủy bỏ |
| 4.3 | Vận hành LARS | 1 | người | Tời, ramp, khóa nôi, thao tác boong |
| 4.4 | Vận hành UUV | 1 | người | Điều khiển UUV qua controller, giám sát cáp |
| 4.5 | Thời gian ekip ở boong đuôi | ≤ 10 | phút/lần | Mỗi lần thu hồi — giảm phơi nhiễm nguy hiểm |

### 5. Khả năng phối hợp

| TT | Tính năng | Giá trị | Ghi chú |
|----|-----------|---------|---------|
| 5.1 | Phối hợp tàu mẹ | VHF hàng hải | Liên lạc trực tiếp |
| 5.2 | Tiếp nhận UUV từ tàu mẹ | Cần cẩu tàu mẹ SWL ≥ 1,0 tấn | UUV-01: 512 kg — trong tầm cẩu |
| 5.3 | Điều khiển UUV từ xuồng | Liên tục qua cáp tether | Tầm xa đến 25 km |
| 5.4 | Phương thức di chuyển | Kéo sát mạn (chính) / tự hành (phụ) | — |

### 6. Khả năng bảo vệ UUV

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| 6.1 | Bề mặt tiếp xúc | Toàn bộ UHMWPE — không có kim loại trực tiếp chạm UUV |
| 6.2 | Lực va đập khi hạ thủy | ≤ 2g tại trọng tâm UUV |
| 6.3 | Cố định trên nôi | Yên UHMWPE + 4 khóa toggle — giữ ở nghiêng 30°, gia tốc ngang 1g |
| 6.4 | Dẫn hướng cáp | Fairlead bán kính ≥ 300 mm, không gấp khúc |
| 6.5 | Hủy bỏ thu hồi | Quy trình SOP, không cần can thiệp thủ công tại đuôi |
| 6.6 | Cắt cáp khẩn cấp | Từ console lái, ≤ 30 giây, không cần ra boong đuôi |

---

## II. TÍNH NĂNG KỸ THUẬT

### 7. Thân tàu và kết cấu

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 7.1 | Chiều dài toàn bộ (LOA) | 7,75 | m | — |
| 7.1a | Chiều dài lớn nhất thân xuồng (Lmax) | 6,90 | m | — |
| 7.1b | Chiều dài thiết kế (Ltk) | 5,95 | m | — |
| 7.2 | Chiều rộng toàn bộ (Boa) | 2,55 | m | — |
| 7.2a | Chiều rộng lớn nhất thân xuồng (Bmax) | 2,20 | m | — |
| 7.2b | Chiều rộng thiết kế (Btk) | 1,88 | m | — |
| 7.3 | Chiều chìm lớn nhất (d) | 0,35 | m | — |
| 7.4 | Chiều cao mạn (D) | 0,95 | m | — |
| 7.5 | Mạn khô đuôi (đầy tải + UUV trên ramp) | ≥ 0,60 | m | D − d = 0,60 m |
| 7.6 | Vật liệu vỏ | Nhôm 5083-H116 | — | Tiêu chuẩn hàng hải |
| 7.7 | Kiểu vỏ | Semi-planing, đáy chữ V | — | Góc deadrise 18° tại giữa tàu |
| 7.8 | Tiêu chuẩn hàn | AWS D1.2 | — | Hàn nhôm kết cấu hàng hải |
| 7.9 | Bảo vệ chống ăn mòn | Sơn hàng hải + anode hy sinh | — | Kiểm tra catốt 12 tháng/lần |
| 7.10 | Khoang chống chìm | 3+ khoang kín nước | — | Mũi, giữa, đuôi — nổi khi thủng 1 khoang |
| 7.11 | Số sườn | 12 | sườn | Sườn 0 (đuôi) đến sườn 12 (mũi) |

### 8. Trọng lượng và ổn định

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 8.1 | Lượng chiếm nước lớn nhất (Δmax) | 2.250 | kg (2,25 T) | Theo thiết kế xuồng |
| 8.2 | Lượng giãn nước đầy tải (ước tính với UUV) | ~ 2.250 | kg | Bao gồm ekip + UUV-01 (512 kg) + nhiên liệu |
| 8.3 | Trọng lượng hệ thống LARS | ~ 500 | kg | Ước tính |
| 8.4 | Chiều cao tâm nghiêng GM (đầy tải) | TBD | m | Cần tính lại theo Δmax 2,25 T |
| 8.5 | Đường cong GZ | TBD | độ | Theo quy phạm phân cấp |
| 8.6 | Tải trọng cẩu tàu mẹ cần | Kéo sát mạn | — | Δmax 2,25 T > SWL cần cẩu → kéo sát mạn |

### 9. Hệ thống động lực

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 9.1 | Kiểu động cơ | Máy ngoài (outboard) | — | COTS: Yamaha / Mercury / tương đương |
| 9.2 | Số lượng | 2 | chiếc | Twin — dự phòng + cơ động |
| 9.3 | Công suất mỗi máy | 50 | HP | Diesel 4 kỳ |
| 9.4 | Tổng công suất | 100 | HP | 2 × 50 HP |
| 9.5 | Tỷ lệ công suất / trọng lượng | ~ 44 | HP/tấn | 100 HP / 2,25 T — đủ cho 25 kts |
| 9.6 | Lái | Differential thrust + lái outboard | — | Từ console |
| 9.7 | Két nhiên liệu | 150 | lít | Diesel — vị trí sườn 5 |
| 9.8 | Tiêu hao nhiên liệu (ước tính) | ~ 30–40 | lít/giờ | Tại tốc độ tối đa |
| 9.9 | Tầm hoạt động (ước tính) | ~ 4–5 | giờ | Tại tốc độ hành trình |

### 10. Hệ thống LARS

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 10.1 | Kiểu LARS | Stern ramp + V-funnel thụ động | — | Kế thừa TRV |
| 10.2 | Chiều dài ramp | ≥ 5,3 | m | UUV-01 LOA 4.800 mm + 500 mm margin |
| 10.3 | Góc ramp | 8 (điều chỉnh 5–10) | độ | — |
| 10.4 | Cơ cấu nâng hạ ramp | Actuator tuyến tính điện | — | — |
| 10.5 | Chiều rộng miệng phễu V | ≥ 2,0 | m | Dẫn hướng UUV-01 (thân Φ400) |
| 10.6 | Chiều cao miệng phễu V | ≥ 0,9 | m | UUV-01 H_max 800 mm + 100 mm margin |
| 10.7 | Chiều rộng máng thu hồi | ≥ 500 | mm | UUV-01 thân Φ400 + 100 mm clearance (chân vịt tắt, không cản) |
| 10.8 | Con lăn máng | 8–10, UHMWPE | chiếc | Giảm ma sát |
| 10.9 | Đường kính trong nôi (cradle) | 400 +10/-0 | mm | Ôm thân Φ400; nôi cần khoảng trống phía dưới cho cụm chân vịt Φ700 |
| 10.10 | Chiều dài nôi | ≥ 4.800 | mm | Đỡ toàn bộ UUV-01 (LOA 4.800 mm) |
| 10.11 | Vật liệu tiếp xúc UUV | UHMWPE | — | Toàn bộ bề mặt |
| 10.12 | Khóa cố định | Toggle clamp × 4 | — | Giữ UUV ở 30° nghiêng, 1g ngang |

### 11. Tời điện

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 11.1 | Loại tời | DC 1 chiều | — | Nguồn ắc quy 60 Ah |
| 11.2 | Sức kéo danh định | 4.000 | lb (~17.800 N) | — |
| 11.3 | Lực kéo thực tế (UUV-01, 512 kg, ramp 8°) | ~ 1.196 | N (~ 122 kgf) | Trọng lực 699 N + ma sát 497 N |
| 11.4 | Hệ số an toàn | ≥ 14 | × | 17.800 / 1.196 |
| 11.5 | Tốc độ thu hồi (reel-in) | 3–10 | m/phút | Điều khiển DC |
| 11.6 | Tốc độ triển khai (controlled descent) | 1–5 | m/phút | — |
| 11.7 | Chiều dài cáp thép | 30 | m | Đủ cho ramp + margin |
| 11.8 | Kiểu dây kéo | Permanent pendant | — | Luôn gắn sẵn vào nôi |
| 11.9 | Điều khiển | DC trực tiếp | — | Có thể dừng khẩn cấp |
| 11.10 | Vị trí điều khiển | Bảng LARS Operator (giữa tàu) | — | Không cần đứng ở đuôi |

### 12. Hệ thống nguồn điện

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 12.1 | Ắc quy LARS | 60 | Ah | DC — cấp nguồn tời + actuator. Vị trí: sườn 3, hai bên mạn |
| 12.2 | Ắc quy hàng hải | 24 VDC (2 × 12V) | — | Hàng hải + điều khiển. Vị trí: sườn 3 |
| 12.3 | Nguồn cho bộ điều khiển UUV | Theo yêu cầu Đối tác | — | Inverter hoặc Đối tác cấp |
| 12.4 | Công suất phụ trợ (điện tử, đèn) | ≥ 500 | W | — |

### 13. Thiết bị hàng hải và thông tin liên lạc

| TT | Thiết bị | Thông số | Ghi chú |
|----|----------|----------|---------|
| 13.1 | GPS | Độ chính xác ≤ 5 m CEP | Định vị vệ tinh |
| 13.2 | La bàn từ | Hàng hải tiêu chuẩn | — |
| 13.3 | VHF hàng hải | Tiêu chuẩn GMDSS | Liên lạc tàu mẹ |
| 13.4 | Đèn hàng hải | Theo quy tắc COLREG | — |
| 13.5 | Đèn pha tìm kiếm | Halogen / LED | Hỗ trợ thu hồi |
| 13.6 | Tốc độ kế | Từ GPS hoặc speed log | — |

### 14. Trang bị an toàn

| TT | Trang bị | Số lượng | Tiêu chuẩn |
|----|----------|----------|-----------|
| 14.1 | Áo phao (PFD) | 3 | Loại II trở lên |
| 14.2 | Phao cứu sinh | 2 | Có đèn + dây ném |
| 14.3 | Bình chữa cháy | 1 | ABC, phù hợp xuồng nhỏ |
| 14.4 | Hộp cứu thương | 1 | Tiêu chuẩn hàng hải |
| 14.5 | Điểm móc dây an toàn | ≥ 3 | Tại các vị trí thao tác |
| 14.6 | Lan can an toàn | Liên tục | Chiều cao ≥ 1,0 m |
| 14.7 | Boong chống trượt | Toàn bộ khu vực thao tác | — |
| 14.8 | Boong đuôi tự thoát nước | Có | Self-draining |
| 14.9 | Nhả kéo khẩn cấp | 1 người, < 5 giây | Quick-release |
| 14.10 | Cắt cáp tether khẩn cấp | Từ console, < 30 giây | Không cần ra đuôi |

### 15. Khả năng bảo trì

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 15.1 | Chu kỳ kiểm tra LARS | ≤ 50 | giờ vận hành | Theo SOP |
| 15.2 | Rửa nước ngọt | Sau mỗi lần ra biển | — | Bắt buộc |
| 15.3 | Kiểm tra catốt | 12 | tháng/lần | — |
| 15.4 | Kiểm tra cáp tether | Mỗi 50 giờ | — | Thị giác + liên tục |
| 15.5 | Dụng cụ chuyên dụng cần | ≤ 5 | loại | Còn lại dùng dụng cụ tiêu chuẩn |
| 15.6 | Linh kiện LARS | Sẵn có tại Việt Nam | — | Con lăn, cáp, khóa toggle |
| 15.7 | LARS tháo rời để bảo trì | Có thể | — | Thiết kế module |

### 16. Vận chuyển và hạ thủy

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 16.1 | Vận chuyển đường bộ | Được | — | LOA ≤ 8,5 m, Beam ≤ 2,8 m (giới hạn VN) |
| 16.2 | Hạ thủy | Triền đà hoặc cần cẩu | — | Trọng lượng đầy tải ≤ 3.850 kg |
| 16.3 | Kích thước rơ-moóc | Tiêu chuẩn rơ-moóc tàu 8m | — | — |

---

## III. THÔNG SỐ UUV MỤC TIÊU — VIETTEL UUV-01

### 17. Thông tin chung UUV-01

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 17.1 | Mã hiệu | UUV-01 | — | — |
| 17.2 | Nhà sản xuất | Tencel | — | — |
| 17.3 | Số sê-ri | UUV-01 | — | Hoặc "chung" |

### 18. Kích thước và trọng lượng UUV-01

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 18.1 | Chiều dài toàn bộ (LOA) | 4.800 | mm | Bao gồm ăng-ten, phần nhô |
| 18.2 | Đường kính thân (lớn nhất) | Φ400 | mm | Thân chính, không tính chân vịt |
| 18.3 | Chiều rộng lớn nhất (bao gồm chân vịt) | Φ700 | mm | Bán kính quay chân vịt — không phải vây cố định |
| 18.4 | Chiều cao lớn nhất (bao gồm ăng-ten) | 800 | mm | Từ đáy đến đỉnh ăng-ten |
| 18.5 | Cao độ thân tính từ đáy | 350 | mm | — |
| 18.6 | Trọng lượng khô (trong không khí) | 512 | kg | Không tính nước dằn |
| 18.7 | Trọng lượng ướt (vận hành) | 515 | kg | Đã nạp nước/dằn/nhiên liệu |
| 18.8 | Tỷ lệ L/D | 12,0 | — | 4.800 / 400 |
| 18.9 | Lực nổi trên mặt nước | 15 | N | Gần trung tính |
| 18.10 | Góc chúi khi nổi | 0,5 | độ | — |

### 19. Trọng tâm UUV-01

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| 19.1 | Trọng tâm X (từ mũi) | 2.200 | mm | Cho tính toán vị trí nôi |
| 19.2 | Trọng tâm Y (từ đường tâm) | 0 | mm | Đối xứng |
| 19.3 | Trọng tâm Z (từ đáy thân Φ400) | 200 | mm | Cho thiết kế yên nôi |

### 20. Giao diện UUV-01 với xuồng

| TT | Thông số | Giá trị | Ghi chú |
|----|----------|---------|---------|
| 20.1 | Cáp tether | Cáp quang, 0,5 kg/km | Cuộn bên trong UUV |
| 20.2 | Tầm xa tether | 25 km | — |
| 20.3 | Bộ điều khiển | Dạng vali (suitcase) | Đặt trên xuồng, cần nguồn 220 VAC |
| 20.4 | Điểm nâng cẩu | Theo ICD Tencel | Cho cần cẩu tàu mẹ |
| 20.5 | Vùng cấm tiếp xúc | Ăng-ten, cảm biến, cụm chân vịt | Nôi ôm thân Φ400; khoảng trống dưới cho chân vịt Φ700 |
| 20.6 | Thoát nước sau thu hồi | Tự nhiên kết hợp bơm khí nén | — |
| 20.7 | Điểm kéo (towing point) | Đầu mũi UUV | mm từ mũi — xác nhận theo ICD |
| 20.8 | Phương pháp thả (launch) | Trượt từ xuồng xuống nước theo dẫn hướng | Ramp — phù hợp thiết kế stern ramp |
| 20.9 | Phương pháp thu hồi (recovery) | Móc vào mũi, kéo lên theo dẫn hướng | Phễu V + pendant — phù hợp thiết kế |
| 20.10 | Hướng vào nước khi thả | Mũi trước (head first) | UUV ra nước mũi trước từ stern ramp. Lý do: (1) consistent với thu hồi mũi trước 20.14 — không xoay 180°, (2) cable exit ở đuôi → đuôi ở phía boong → cable route qua ống dẫn cáp trên mạn ramp đến fairlead đuôi, (3) fiber optic 5m = 2.5g — negligible. First Principles 2026-03-25 |
| 20.11 | Độ sâu nước tối thiểu khi thả | ≥ 2 m | Ràng buộc khu vực vận hành |
| 20.12 | Hành vi sau khi thả | Nổi trên mặt nước | UUV nổi → operator kiểm tra → lặn |
| 20.13 | Hành vi trước khi thu hồi | Nổi thụ động | UUV nổi chờ → xuồng tiếp cận stern-first |
| 20.14 | Hướng tiếp cận UUV khi thu hồi | Mũi UUV trước (vào phễu V) | Pendant gắn điểm kéo mũi → kéo mũi trước lên ramp |
| 20.15 | Tắt động cơ UUV trước khi bắt? | Tự động tắt | UUV tự tắt thruster khi nổi thụ động |

### 21. Điều kiện môi trường & xử lý UUV-01

| TT | Thông số | Min | Max | Đơn vị | Ghi chú |
|----|----------|-----|-----|--------|---------|
| 21.1 | Nhiệt độ lưu trữ (khô) | 0 | 40 | °C | — |
| 21.2 | Nhiệt độ vận hành (dưới nước) | −5 | 30 | °C | — |
| 21.3 | Thời gian tối đa ngoài nước | — | — | giờ | Theo hướng dẫn OEM |
| 21.4 | Cần rửa nước ngọt sau vận hành? | Có | — | — | Do đối tác tự thực hiện trên bờ/tàu mẹ |
| 21.5 | Giới hạn phơi nắng UV | — | — | giờ | Theo hướng dẫn OEM |
| 21.6 | Tốc độ gió tối đa khi vận chuyển | Gió cấp 5 | — | — | — |
| 21.7 | Cấp sóng tối đa khi thả (launch) | Cấp 3 | — | SS | Sea State |
| 21.8 | Cấp sóng tối đa khi thu hồi (recovery) | Cấp 3 | — | SS | Sea State |

> **Lưu ý:** Rửa nước ngọt UUV sau vận hành là trách nhiệm của đối tác (trên bờ hoặc tàu mẹ) — xuồng LARS không cần trang bị hệ thống rửa nước ngọt.

---

## IV. BẢNG TÓM TẮT TÍNH NĂNG CHÍNH

| # | Tính năng | Giá trị | Ghi chú |
|---|-----------|---------|---------|
| 1 | UUV mục tiêu | Tencel UUV-01 | 512 kg, Φ400 × 4.800 mm |
| 2 | LOA | 7,75 m | Boa 2,55 m |
| 3 | Lượng chiếm nước lớn nhất | 2,25 T | Δmax |
| 4 | Tốc độ tối đa | ≥ 25 kts | Tự hành |
| 5 | Tốc độ hành trình | ≥ 15 kts | — |
| 6 | Tầm hoạt động | ≥ 70 nm | Tự hành |
| 7 | Hoạt động liên tục | ≥ 5 giờ | — |
| 8 | Cấp biển thu hồi | SS 3 | — |
| 9 | Ekip | 3 người | — |
| 10 | Thời gian thu hồi | ≤ 30 phút | — |
| 11 | Tỷ lệ bắt (SS 2) | ≥ 80% | Lần đầu |
| 12 | GM (đầy tải) | TBD | Cần tính lại |
| 13 | Sức kéo tời | 4.000 lb (~17,8 kN) | SF ≥ 14× (ramp 8°) |
| 14 | Máng thu hồi | ≥ 500 mm | Thân Φ400 + clearance (chân vịt không cản) |
| 15 | Động cơ | 2 × 50 HP | Máy ngoài |
| 16 | Vật liệu vỏ | Nhôm 5083 | — |
| 17 | Bề mặt tiếp xúc UUV | UHMWPE | Toàn bộ |
| 18 | Phương thức thu hồi | V-funnel thụ động | Không cần thợ lặn |
| 19 | Phương thức LARS | Điện DC (ắc quy) | Không thủy lực |
| 20 | Két nhiên liệu | 150 lít | Diesel |
| 21 | Khoang chống chìm | 3+ khoang kín nước | Nổi khi thủng 1 khoang |

---

*WX-XUONG-UUV-TNKCT-001 v1.1 | 16/03/2026 | UUV mục tiêu: Tencel UUV-01 | ĐÍNH KÈM ĐỀ XUẤT WX-XUONG-UUV-DX-001 Rev C*
