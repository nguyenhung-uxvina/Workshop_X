---
project: VN-XUONG-UUV
phase: 2
type: ICD-template
version: 1.4
created: 2026-03-06
updated: 2026-03-07
status: template
language: vi
changelog: |
  v1.4 — 2026-03-07: Rà soát và chuẩn hóa thuật ngữ theo văn phong kỹ thuật đóng tàu quân sự Việt Nam.
  v1.3 — 2026-03-07: Bản tiếng Việt. Rút gọn cho OEM. Loại bỏ ghi chú nội bộ, mục lỗi thời.
  v1.2 — 2026-03-07: Thêm Phần K (Thông số xuồng). Xác nhận cuộn cáp trong UUV. Tốc độ tối đa 25 hải lý/giờ.
  v1.1 — Thêm Phần H (Cáp điều khiển) và Phần J (Bộ điều khiển). Cập nhật Phần C.
related: 003_Stakeholder_Analysis (S3 — mục CHẶN)
---

# Tài liệu Kiểm soát Giao diện UUV (ICD) — Mẫu chuẩn

**Dự án:** VN-XUONG-UUV — Xuồng triển khai và thu hồi UUV
**Mục đích:** Thu thập thông tin kỹ thuật từ nhà sản xuất UUV phục vụ thiết kế giá đỡ (cradle), hệ thống triển khai–thu hồi (LARS) và xây dựng quy trình khai thác, vận hành.
**Hướng dẫn:** Điền thông tin vào các ô `___`. Trường thông tin chưa xác định ghi "TBD". Hệ đơn vị sử dụng là SI (mm, kg, N), trừ khi có quy định khác.

---

## PHẦN A: THÔNG TIN CHUNG VỀ UUV

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| A1 | Mã hiệu/tên gọi UUV | ___ | — | |
| A2 | Nhà sản xuất | ___ | — | |
| A3 | Số sê-ri | ___ | — | Hoặc "chung" |
| A4 | **Chiều dài toàn bộ (LOA)** | ___ | mm | Bao gồm ăng-ten, phần nhô |
| A5 | **Đường kính thân (lớn nhất)** | ___ | mm | Thân chính, không tính vây |
| A6 | **Chiều rộng lớn nhất (bao gồm vây)** | ___ | mm | |
| A7 | **Chiều cao lớn nhất (bao gồm ăng-ten)** | ___ | mm | Từ đáy đến đỉnh ăng-ten |
| A8 | Cao độ tâm thân tính từ đáy | ___ | mm | |
| A9 | **Trọng lượng khô (trong không khí)** | ___ | kg | Không tính nước dằn |
| A10 | **Trọng lượng ướt (vận hành)** | ___ | kg | Đã nạp nước/dằn |
| A11 | **Trọng tâm — X (từ mũi)** | ___ | mm | |
| A12 | **Trọng tâm — Y (từ đường tâm)** | ___ | mm | |
| A13 | **Trọng tâm — Z (từ đáy)** | ___ | mm | |
| A14 | Trạng thái nổi trên mặt nước | Dương / Trung tính / Âm | — | |
| A15 | Góc chúi khi nổi | ___ | độ | |

---

## PHẦN B: KẾT CẤU VÀ VẬN CHUYỂN

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| B1 | Vật liệu vỏ | ___ | — | VD: Nhôm 6061, HDPE, CFRP |
| B2 | Chiều dày vỏ | ___ | mm | |
| B3 | Tải tập trung cho phép tối đa | ___ | N | |
| B4 | Tải phân bố cho phép tối đa | ___ | N/m | |
| B5 | **Vùng tỳ đỡ của giá — ĐƯỢC PHÉP** | *(đính kèm bản vẽ)* | — | Vùng được phép bố trí kết cấu tỳ đỡ |
| B6 | **Vùng tỳ đỡ của giá — CẤM** | *(đính kèm bản vẽ)* | — | Vùng cấm tiếp xúc (cảm biến, nắp công nghệ, kết cấu nhạy cảm) |
| B7 | Góc tiếp xúc giá đỡ khuyến nghị | ___ | độ | VD: yên chữ V 120 độ |
| B8 | Lực ngang tối đa lên vỏ | ___ | N | |
| B9 | **Gia tốc thẳng đứng cho phép lớn nhất** | ___ | g | |
| B10 | **Gia tốc xung kích lớn nhất (va đập)** | ___ | g, ___ ms | |
| B11 | Vị trí điểm cẩu | *(đính kèm bản vẽ)* | — | |
| B12 | Chủng loại dây cẩu | ___ | — | |
| B13 | Tải trọng an toàn dây cẩu | ___ | kg | |
| B14 | **Góc nghiêng dọc cho phép lớn nhất** | ___ | độ | Ảnh hưởng góc ram (mục tiêu 15 độ) |
| B15 | **Góc nghiêng ngang cho phép lớn nhất** | ___ | độ | |

**Yêu cầu:** Đính kèm bản vẽ mặt bên và mặt cắt ngang, trong đó thể hiện rõ vùng B5 (màu xanh = được phép) và vùng B6 (màu đỏ = cấm).

---

## PHẦN C: GIAO DIỆN ĐIỆN VÀ DỮ LIỆU

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| C1 | Loại đầu nối sạc | ___ | — | |
| C2 | Vị trí đầu nối sạc trên UUV | ___ | — | Trên thân UUV |
| C3 | Điện áp/dòng sạc | ___ V / ___ A | V, A | |
| C4 | Loại đầu nối truyền dữ liệu | ___ | — | |
| C5 | Vị trí đầu nối truyền dữ liệu | ___ | — | |
| C6 | Chuẩn/giao thức dữ liệu | ___ | — | Ethernet, RS-232, USB... |
| C7 | Đầu nối nạp chương trình nhiệm vụ | ___ | — | Nếu khác C1/C4 |
| C8 | **Loại đầu nối cáp điều khiển (phía UUV)** | ___ | — | QUAN TRỌNG |
| C9 | **Vị trí đầu nối cáp trên UUV** | ___ | mm từ mũi | |
| C10 | Tuổi thọ đóng/cắt đầu nối cáp | ___ | lần | |
| C11 | Độ sâu kín nước của đầu nối cáp | ___ | m sâu | |
| C12 | Loại đèn hiệu khẩn cấp | ___ | — | |
| C13 | Chế độ kích hoạt đèn hiệu | Thủ công / Tự động / Cả hai | — | |

---

## PHẦN D: GIỚI HẠN ĐIỀU KIỆN MÔI TRƯỜNG

| # | Thông số | Tối thiểu | Tối đa | Đơn vị | Ghi chú |
|---|----------|-----------|--------|--------|---------|
| D1 | Nhiệt độ lưu trữ (khô) | ___ | ___ | °C | |
| D2 | Nhiệt độ vận hành (dưới nước) | ___ | ___ | °C | |
| D3 | Thời gian lưu tối đa ngoài nước | — | ___ | giờ | |
| D4 | Yêu cầu rửa lại bằng nước ngọt | Có / Không | — | — | |
| D5 | Giới hạn phơi bức xạ UV | — | ___ | giờ | |
| D6 | Tốc độ gió lớn nhất khi vận chuyển | — | ___ | hải lý/giờ | |
| D7 | Cấp sóng lớn nhất khi triển khai | — | ___ | SS | Sea State |
| D8 | Cấp sóng lớn nhất khi thu hồi | — | ___ | SS | Sea State |

---

## PHẦN E: TRIỂN KHAI VÀ THU HỒI

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| E1 | Phương pháp triển khai khuyến nghị | ___ | — | ram / cẩu / thủ công |
| E2 | Phương án thu hồi khuyến nghị | ___ | — | phễu / lưới / cẩu |
| E3 | **Tư thế vào nước** | Mũi trước / Đuôi trước / Đều được | — | |
| E4 | Tốc độ vào nước tối đa | ___ | m/s | |
| E5 | Góc vào nước tối đa | ___ | độ | |
| E6 | Độ sâu nước tối thiểu khi triển khai | ___ | m | |
| E7 | Trạng thái sau khi triển khai | Lặn ngay / Nổi rồi lặn / Nổi trên mặt | — | |
| E8 | Trạng thái trước khi thu hồi | Nổi thụ động / Giữ vị trí / Cần lệnh | — | |
| E9 | **Hướng tiếp cận khi thu hồi** | Bất kỳ / Mũi trước / Đuôi trước | — | |
| E10 | Tốc độ tiếp cận phễu dẫn hướng lớn nhất | ___ | m/s | |
| E11 | Lực va chạm cho phép tại mũi | ___ | N | |
| E12 | Lực va chạm cho phép tại thân | ___ | N | |
| E13 | Yêu cầu dừng động cơ trước khi bắt giữ | Có / Không / Tự động | — | |
| E14 | Vị trí điểm kéo/điểm bắt | ___ | mm từ mũi | |
| E15 | Phương thức thoát nước sau thu hồi | Tự nhiên / Cần nghiêng / Cần bơm | — | |

---

## PHẦN F: BẢO TRÌ TRÊN GIÁ ĐỠ

| # | Thông số | Giá trị | Ghi chú |
|---|----------|---------|---------|
| F1 | Vị trí các nắp kiểm tra | *(đính kèm bản vẽ)* | |
| F2 | Khoảng hở yêu cầu xung quanh nắp | ___ mm | |
| F3 | Có cho phép tháo pin khi UUV đặt trên giá đỡ không | Có / Không | |
| F4 | Vị trí pin | ___ | |
| F5 | Trọng lượng pin | ___ kg | |
| F6 | Các hạng mục kiểm tra định kỳ | *(liệt kê)* | |
| F7 | Bảng kiểm sau nhiệm vụ (OEM) | Đính kèm? Có / Không | |
| F8 | Vùng nhạy cảm với ăn mòn | *(đính kèm bản vẽ)* | |

---

## PHẦN H: GIAO DIỆN CÁP ĐIỀU KHIỂN

> Cuộn cáp (drum) được bố trí **bên trong UUV** [đã xác nhận]. Workshop X cần thông số cáp để thiết kế tuyến dẫn cáp trên xuồng.

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| H1 | **Chủng loại cáp** | ___ | — | Quang / Đồng / Lai |
| H2 | **Đường kính ngoài cáp** | ___ | mm | |
| H3 | Chiều dài cáp cung cấp | ___ | m | Dự kiến 25.000 m |
| H4 | Trọng lượng cáp trong không khí | **0,5** | kg/km | **[Đã xác nhận]** |
| H5 | Trọng lượng cáp trong nước | ___ | kg/km | |
| H6 | Lực kéo đứt danh định | ___ | kN | |
| H7 | Tải trọng làm việc cho phép | ___ | kN | |
| H8 | Bán kính uốn tối thiểu (tĩnh) | ___ | mm | |
| H9 | Bán kính uốn tối thiểu (động) | ___ | mm | |
| H10 | Kết cấu cáp | ___ | — | VD: lõi quang + Kevlar + vỏ PU |
| H11 | Vật liệu vỏ cáp | ___ | — | |
| H12 | Tính nổi của cáp | Dương / Trung tính / Âm | — | |
| H13 | Độ sâu vận hành lớn nhất | ___ | m | |
| H17 | **Đầu nối cáp (phía xuồng)** | ___ | — | Nối đến bộ điều khiển |
| H18 | Đầu nối cáp (phía UUV) | ___ | — | Phải khớp với C8 |
| H19 | Băng thông truyền dẫn của cáp | ___ | Mbps | |
| H20 | Khả năng truyền điện (nếu có) | ___ | V / A | |

---

## PHẦN J: BỘ ĐIỀU KHIỂN UUV

> Bộ điều khiển dạng va-li, bố trí trên xuồng LARS.

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| J1 | **Mã hiệu bộ điều khiển** | ___ | — | |
| J2 | **Kích thước ở trạng thái đóng** | ___ x ___ x ___ | mm | D x R x C |
| J3 | Kích thước ở trạng thái mở/vận hành | ___ x ___ x ___ | mm | |
| J4 | **Trọng lượng** | ___ | kg | |
| J5 | **Nguồn cấp đầu vào — điện áp** | ___ | VAC hoặc VDC | |
| J6 | **Nguồn cấp đầu vào — công suất** | ___ | W | |
| J7 | Loại đầu nối nguồn | ___ | — | |
| J8 | Tần số nguồn (nếu AC) | ___ | Hz | |
| J9 | Có pin dự phòng không | Có / Không | — | Nếu có: ___ phút |
| J10 | **Đầu nối cáp (phía bộ điều khiển)** | ___ | — | Phải khớp với H17 |
| J11 | Nhiệt độ vận hành | ___ đến ___ | °C | |
| J12 | Cấp bảo vệ IP | IP ___ | — | |
| J13 | Loại màn hình | ___ | — | |
| J14 | Khả năng hiển thị dưới ánh nắng | Có / Không | — | |
| J15 | Số lượng người vận hành | ___ | người | |
| J16 | Giao diện vận hành | ___ | — | Cần lái, cảm ứng, bàn phím |
| J18 | Có yêu cầu che mưa khi vận hành không | Có / Không | — | |
| J19 | **Có yêu cầu mặt phẳng lắp đặt cố định không** | Có / Không | — | |
| J20 | Giới hạn chịu rung | ___ | g (tối đa) | |

---

## PHẦN K: THÔNG SỐ XUỒNG (Workshop X → OEM)

> Thông tin xuồng LARS để OEM nắm được điều kiện và môi trường khai thác thực tế.

| # | Thông số | Giá trị | Đơn vị | Ghi chú |
|---|----------|---------|--------|---------|
| K1 | Kiểu xuồng | Xuồng nhôm 5083 | — | Dài 8 m |
| K2 | Chiều dài toàn bộ | 8.000 | mm | |
| K3 | Chiều rộng | ~2.600-3.200 | mm | Giai đoạn 3 xác nhận |
| K4 | **Tốc độ tối đa** | **25** | **hải lý/giờ** | |
| K5 | Tốc độ vận hành (triển khai/thu hồi) | 2-5 | hải lý/giờ | |
| K6 | Động cơ | 2 máy ngoài x 40-60 HP | — | |
| K7 | Trọng lượng không tải của xuồng | ~2.820 | kg | |
| K8 | Lượng chiếm nước khi đầy tải | ~3.843 | kg | UUV + nhân lực + nhiên liệu |
| K9 | Phương án thu hồi | Ram đuôi + máng + tời dây cố định | — | |
| K10 | Chiều rộng máng thu hồi | ~550-650 | mm | UUV D=400 mm + khe hở |
| K11 | Góc ram | 15 (điều chỉnh 12-18) | độ | |
| K12 | Lực kéo danh định của tời | 10 | kN | Điện VFD |
| K13 | Vật liệu bề mặt tỳ đỡ | Yên UHMWPE | — | |
| K14 | Cấp sóng thiết kế | 3-4 | SS | Biển Đông |
| K15 | Biên chế vận hành | 3 | người | Lái / Vận hành LARS / Vận hành UUV |
| K16 | Hệ thống điện | 24 VDC + máy phát 5-8 kW | — | |
| K17 | Vị trí cuộn cáp | Trong UUV | — | Xuồng không có cuộn |
| K18 | Tuyến dẫn cáp trên xuồng | Đuôi → kẹp boong → trạm điều khiển | — | ~4-5 m |
| K19 | Sức nâng cẩu của tàu mẹ | 2.500 | kg | Phục vụ nạp/xuất UUV |
| K20 | Phương thức hoạt động | Kéo cập mạn / tự hành | — | |

---

## PHẦN G: YÊU CẦU HỒ SƠ, TÀI LIỆU

| # | Tài liệu | Cung cấp? | Định dạng |
|---|----------|-----------|-----------|
| G1 | **Bản vẽ bố trí chung (GA)** | [ ] Có  [ ] Không | PDF / DWG / STEP |
| G2 | Bản vẽ mặt cắt ngang | [ ] Có  [ ] Không | |
| G3 | Bản vẽ phương án cẩu | [ ] Có  [ ] Không | |
| G4 | Trích báo cáo kết cấu | [ ] Có  [ ] Không | |
| G5 | Bản vẽ giao diện điện | [ ] Có  [ ] Không | |
| G6 | Báo cáo thử nghiệm môi trường | [ ] Có  [ ] Không | |
| G7 | Quy trình triển khai/thu hồi của OEM | [ ] Có  [ ] Không | |
| G8 | Mô hình 3D | [ ] Có  [ ] Không | STEP / IGES |
| G9 | Báo cáo trọng lượng (kèm trọng tâm) | [ ] Có  [ ] Không | |
| G10 | Trích sổ tay bảo trì | [ ] Có  [ ] Không | |
| G11 | **Thông số kỹ thuật cáp** | [ ] Có  [ ] Không | QUAN TRỌNG |
| G12 | **Sổ tay bộ điều khiển** | [ ] Có  [ ] Không | QUAN TRỌNG |
| G13 | Bản vẽ đầu nối cáp | [ ] Có  [ ] Không | |
| G14 | Bản vẽ lắp đặt bộ điều khiển | [ ] Có  [ ] Không | |

---

## XÁC NHẬN / KÝ DUYỆT

| Vai trò | Họ tên | Ngày | Chữ ký |
|---------|--------|------|--------|
| Đại diện OEM UUV | ___ | ___ | ___ |
| Kỹ sư Workshop X | ___ | ___ | ___ |
| Đại diện Hải quân — Vận hành UUV (chứng kiến) | ___ | ___ | ___ |

---

*Mẫu ICD v1.4 | VN-XUONG-UUV giai đoạn 2 | Workshop X*
