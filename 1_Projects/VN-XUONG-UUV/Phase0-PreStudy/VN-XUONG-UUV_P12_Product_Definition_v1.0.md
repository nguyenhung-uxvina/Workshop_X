---
project: VN-XUONG-UUV
phase: 1→2
type: product-definition
document: P12
version: 1.0
created: 2026-03-07
status: approved
gate1_score: 3.80
methodology: "Pahl-Beitz VDI 2221 — Step P12: Definition of Products"
---

# VN-XUONG-UUV — P12 Định Nghĩa Sản Phẩm (Development Specification)

> Tài liệu này chính thức hóa định nghĩa sản phẩm sau Phase 1 Task Clarification (Gate 1 ĐẠT, 2026-03-06). Đây là **Lệnh Phát Triển** cho phép tiến hành Phase 2 Conceptual Design.

---

## 1. Nhận Dạng Sản Phẩm

| Trường | Giá Trị |
|--------|---------|
| **Mã sản phẩm** | VN-XUONG-UUV |
| **Tên sản phẩm** | Xuồng Triển Khai/Thu Hồi UUV (UUV Launch & Recovery Vessel) |
| **Loại sản phẩm** | Xuồng chuyên dụng tích hợp LARS + TMS |
| **Cấu hình** | Path 3 — 8m nhôm, kéo/độc lập, UUV có dây |
| **Khách hàng mục tiêu** | Seg A — Đội Vận Hành UUV Hải Quân Việt Nam |
| **Chiến lược thị trường** | DOMINATE — tạo lập danh mục (LARS đầu tiên của Việt Nam) |
| **Cấp dự án** | Tier 1 Prototype (Musk Sequence #1) |
| **Giai đoạn** | Phase 2 Conceptual Design (đã được phê duyệt) |

---

## 2. Mô Tả Sản Phẩm (Tổng Hợp)

Một **xuồng thân nhôm hàng hải (5083-H321) đơn thân 8m** tích hợp:

1. **LARS** (Hệ Thống Thả/Thu Hồi) — đường trượt đuôi (15-20 độ) + phễu V thụ động (>= 2.0m) + nôi (D=400mm tùy chỉnh) + tời
2. **TMS** (Hệ Thống Quản Lý Dây) — tang cuốn cáp (sức chứa 25 km) + ống dẫn cáp + giám sát lực căng/chiều dài + bộ cuốn đều
3. **Trạm Điều Khiển UUV** — bộ điều khiển dạng vali (OEM cung cấp) lắp trên xuồng, người vận hành ngồi/có mái che

Xuồng triển khai và thu hồi một **UUV có dây điều khiển** (550 kg, L=5000mm, D=400mm, điều khiển bằng dây, tầm hoạt động 25 km) trong điều kiện Sea State 3, với 3 thủy thủ, đảm bảo không hư hại UUV và an toàn thủy thủ.

**Chế độ hoạt động:** Kéo dọc theo tàu mẹ (chính) hoặc tự hành từ cảng (phụ). KHÔNG lưu trên boong — cần trục tàu mẹ (2.5t) chỉ dùng để chuyển UUV (550 kg).

### Điểm Khác Biệt So Với Giải Pháp Nhập Khẩu

| Yếu Tố | VN-XUONG-UUV | Nhập khẩu (L3Harris, Saab, ECA) |
|---------|-------------|--------------------------------|
| Chi phí | ~$517K (mục tiêu) | $1-3M |
| Nội địa hóa | >= 50% | 0% |
| ITAR/kiểm soát xuất khẩu | Không | Rào cản đáng kể |
| Bảo trì | Linh kiện nguồn VN | Phụ thuộc nhập khẩu |
| Thời gian giao | 8-10 tháng | 12-24 tháng |
| Tùy chỉnh | Toàn quyền (thiết kế riêng) | Hạn chế |

---

## 3. Đặc Tả Yêu Cầu Đã Phê Duyệt

**Tham chiếu:** `Phase1-Task/002_Requirements_List_v1.0.md` (v1.1, 107 yêu cầu)

### 3.1 Tóm Tắt

| Danh mục | D (Bắt buộc) | W (Mong muốn) | Tổng | Đã lượng hóa |
|----------|-------------|---------------|------|-------------|
| Hình học | 12 | 2 | 14 | 100% |
| Động học | 5 | 1 | 6 | 83% |
| Lực | 9 | 1 | 10 | 80% |
| Năng lượng | 5 | 1 | 6 | 83% |
| Vật liệu | 5 | 0 | 5 | 100% |
| Tín hiệu | 7 | 4 | 11 | 73% |
| An toàn | 9 | 0 | 9 | 100% |
| Công thái học | 4 | 2 | 6 | 100% |
| Sản xuất | 2 | 2 | 4 | 100% |
| Kiểm soát chất lượng | 3 | 0 | 3 | 100% |
| Lắp ráp/Vận chuyển | 2 | 0 | 2 | 100% |
| Vận hành | 14 | 5 | 19 | 95% |
| Bảo trì | 4 | 3 | 7 | 100% |
| Chi phí | 1 | 2 | 3 | 67% |
| Tiến độ | 0 | 2 | 2 | 100% |
| **TỔNG** | **82** | **25** | **107** | **92%** |

### 3.2 Ràng Buộc Cứng (11 mục — không thương lượng)

| ID | Ràng buộc | Giá trị |
|----|----------|---------|
| HC-1 | Xuồng gọn nhẹ | LOA <= 8.5m, Beam <= 2.8m |
| HC-2 | Cần trục tàu mẹ | 2.5t SWL (chỉ chuyển UUV) |
| HC-3 | Bảo vệ UUV | Không hư hại trong quá trình thả/thu hồi |
| HC-4 | An toàn thủy thủ | Thời gian ở boong đuôi < 10 phút/lần thu hồi |
| HC-5 | Nội địa hóa | >= 50% theo giá trị |
| HC-6 | Trạng thái biển thu hồi | >= SS 3 (Hs 0.5-1.25m) |
| HC-7 | Kích thước UUV | 550 kg, L=5000mm, D=400mm, H=850mm |
| HC-8 | UUV có dây | Điều khiển bằng dây, cần TMS |
| HC-9 | Tầm dây | Tới 25 km |
| HC-10 | Loại bộ điều khiển | Dạng vali cầm tay (OEM) |
| HC-11 | Vị trí điều khiển | Trực tiếp từ xuồng LARS |

### 3.3 Khoảng Trống Chưa Xác Định (8 mục — đều có lộ trình giải quyết)

| ID | Khoảng trống | Giải quyết | Giai đoạn |
|----|-------------|-----------|-----------|
| K-03 | Cơ cấu nghiêng đường trượt | Lựa chọn concept | Phase 2 |
| F-06 | Lực kéo bollard | Tính toán sức cản thân tàu | Phase 2-3 |
| F-09 | Lực căng cáp dây điều khiển | Phân tích loại cáp + độ sâu + dòng chảy | Phase 2 |
| E-05 | Thông số nguồn bộ điều khiển | Từ datasheet OEM UUV | **CHẶN — ICD** |
| S-04 | Cảm biến trạng thái biển | Ưu tiên WISH | Phase 2 |
| S-05 | Thông số camera hồng ngoại | Ưu tiên WISH | Phase 2 |
| OP-10 | Thu hồi ban đêm | Ưu tiên WISH | Phase 2 |
| C-03 | Chi phí vận hành hàng năm | Phân tích vòng đời | Phase 3 |

---

## 4. Kiến Trúc Chức Năng (Đã Phê Duyệt)

**Tham chiếu:** `Phase1-Task/006_Function_Structure_v1.0.md` (v1.1, 43 chức năng con)

### 4.1 Các Chức Năng Chính

| # | Chức năng | Chức năng con | Ràng buộc? |
|---|----------|-------------|-----------|
| F1 | Hành trình & Định vị xuồng | 5 | Không |
| F2 | Thả UUV | 7 | Không |
| F3 | Thu hồi UUV | 8 | **CÓ — độ khó cao nhất** |
| F4 | Hỗ trợ vận hành | 8 | Không |
| F5 | Quản lý dây điều khiển | 9 | **MỚI — ràng buộc đồng bộ** |
| F6 | Điều khiển UUV (từ xuồng) | 6 | Không |

### 4.2 Liên Kết Tới Hạn Cho Phase 2

1. **F5 ↔ F2/F3 (Dây ↔ Thả/Thu hồi)** — thả/cuốn cáp PHẢI đồng bộ với tời LARS. Cáp trễ → rối cáp hoặc hư hại UUV. **Nhiệm vụ đòn bẩy cao nhất Phase 2.**
2. **F5 ↔ F6 (Dây ↔ Điều khiển UUV)** — dây mang cả liên kết vật lý VÀ đường tín hiệu. Hư cáp = mất điều khiển.
3. **F1.4 ↔ F3 (Giữ vị trí ↔ Thu hồi)** — xuồng phải giữ vị trí trong quá trình bắt UUV.

### 4.3 Quyết Định Thiết Kế Chính Phase 2 (từ cấu trúc chức năng)

| # | Quyết định | Phương án | Tiêu chí |
|---|-----------|---------|---------|
| PD-1 | Loại động lực | Diesel gắn trong / Máy ngoài | Trọng lượng, độ tin cậy, bảo trì |
| PD-2 | Nguồn LARS | Thủy lực (PTO) / Điện | Trọng lượng, khả năng lực, đơn giản |
| PD-3 | Gắn kết tời | Móc thủ công / Chốt tự động | Thời gian tiếp xúc boong (SA-02), độ tin cậy |
| PD-4 | Vị trí tang cuốn cáp | Mũi / Giữa / Đuôi | Phân bố trọng lượng, đường dẫn cáp |
| PD-5 | Đường cáp vs đường trượt LARS | Cùng đường / Tách riêng | Nguy cơ rối, độ phức tạp |
| PD-6 | Phương pháp đồng bộ TMS-LARS | Liên kết cơ khí / Khớp tốc độ điện tử | Độ phức tạp, độ tin cậy |
| PD-7 | Phân công vai trò thủy thủ | Lái + Vận hành LARS + Điều khiển UUV | 3 người, 3 vai — phân tích tải công việc |

---

## 5. Ưu Tiên Thiết Kế (Trọng Số VDI 2225)

Người dùng xếp hạng, xác nhận tại Gate 1:

| Ưu tiên | Tiêu chí | Trọng số |
|---------|---------|---------|
| 1 | Kích thước gọn nhẹ | 15% |
| 2 | Khả năng thu hồi (SS 3) | 12% |
| 3 | Bảo vệ UUV | 10% |
| 4 | An toàn thủy thủ | 8% |
| 5 | Độ tin cậy thu hồi | 8% |
| 6 | Ổn định khi thu hồi | 7% |
| 7 | Nội địa hóa | 5% |
| 8 | Chi phí vốn | 5% |
| 9 | Tiềm năng phát triển | 5% |

> Tổng trọng số: 75%. 25% còn lại sẽ phân bổ cho bảo trì, khả năng vận hành, và hiệu suất TMS trong đánh giá morphological Phase 2.

---

## 6. Vị Thế Cạnh Tranh

**Tham chiếu:** `Phase1-Task/004_Competitive_Analysis_v1.0.md`

| Đối thủ | Quốc gia | Loại LARS | Hạng UUV | Kích thước tàu | Chi phí ước tính |
|---------|---------|-----------|----------|----------------|-----------------|
| L3Harris (USV) | Mỹ | A-frame + kéo | Nặng | 11m | $2-3M |
| Saab (LARS 2000) | Thụy Điển | Đường trượt đuôi + phễu V | Trung bình | 10-15m | $1.5-2.5M |
| ECA Group (A18-M) | Pháp | Đường trượt đuôi + nôi | Trung bình | 12m | $1-2M |
| Atlas Elektronik | Đức | Đường trượt đuôi + phễu | Trung bình-Nặng | 12-15m | $1.5-3M |
| **VN-XUONG-UUV** | **Việt Nam** | **Đường trượt đuôi + phễu V** | **Trung bình (550kg)** | **8m** | **~$517K** |

**Lợi thế VN:** 15-30% chi phí so với giải pháp phương Tây, không rào cản ITAR, hỗ trợ tại chỗ, giao hàng 8-10 tháng.

**Khoảng trống VN:** Không có tham chiếu quản lý dây (tất cả đối thủ dùng thu hồi UUV tự hành). Tích hợp TMS-LARS là mới — cần nghiên cứu kỹ trong Phase 2.

---

## 7. Lộ Trình Tiêu Chuẩn & Tuân Thủ

**Tham chiếu:** `Phase1-Task/005_Standards_Compliance_Matrix_v1.0.md`

| Lĩnh vực | Tiêu chuẩn áp dụng | Trạng thái |
|----------|-------------------|-----------|
| Kết cấu thân | TCVN 6259, ISO 12215, AWS D1.2 | Thiết kế theo (đăng kiểm khi sản xuất) |
| Ổn định | IMO IS Code, TCVN 6259 Phần 4 | Tính toán tại Phase 2-3 |
| An toàn | SOLAS Chương III, COLREGS | Tuân thủ |
| LARS/Nâng hạ | DNV-ST-0378, EN 13001 | Tham chiếu |
| Kéo | IMO MSC/Circ.884 | Tuân thủ |
| Chống ăn mòn | NORSOK M-501, DNV-RP-B401 | Tuân thủ |
| Quân sự | MIL-STD-810H (môi trường) | Tham chiếu cho đánh giá chất lượng |

**Khoảng trống:** Tiêu chuẩn mua sắm quân sự VN chưa rõ — cần phỏng vấn S2 (Mua sắm Hải Quân).

---

## 8. Phê Duyệt Ngân Sách

| Hạng mục | Ước tính (USD) | Độ tin cậy |
|----------|---------------|-----------|
| Thân & kết cấu (nhôm 8m) | 180,000-220,000 | Trung bình |
| LARS cơ khí | 120,000-150,000 | Thấp |
| TMS (tang cuốn, ống dẫn, giám sát) | 40,000-80,000 | Thấp — mới |
| Động lực | 60,000-80,000 | Trung bình |
| Điện tử & cảm biến | 40,000-60,000 | Trung bình |
| Tích hợp bộ điều khiển UUV | 10,000-20,000 | Thấp — phụ thuộc OEM |
| Trang bị & hoàn thiện | 30,000-50,000 | Trung bình |
| Kỹ thuật & nhân công | 50,000-70,000 | Thấp |
| Dự phòng (10%) | 50,000 | Tiêu chuẩn |
| **TỔNG** | **$517,000 (mục tiêu)** | **+/- 30%** |

**Trần ngân sách prototype:** $670K (= $517K + 30% dự phòng)

---

## 9. Lịch Trình Phát Triển

| Giai đoạn | Thời gian | Bắt đầu | Kết thúc (dự kiến) | Gate |
|----------|----------|---------|-------------------|------|
| Phase 0: Nghiên cứu sơ bộ | 1 ngày | 2026-03-06 | 2026-03-06 | Gate 0 ĐẠT |
| Phase 1: Làm rõ nhiệm vụ | 1 ngày | 2026-03-06 | 2026-03-06 | Gate 1 ĐẠT (3.80/4.0) |
| **Phase 2: Thiết kế ý tưởng** | **4-6 tuần** | **2026-03-07** | **2026-04-18** | Gate 2 |
| Phase 3: Thiết kế thể hiện | 6-8 tuần | Tháng 4/2026 | Tháng 6/2026 | Gate 3 |
| Phase 4: Thiết kế chi tiết | 4-6 tuần | Tháng 6/2026 | Tháng 8/2026 | Lệnh sản xuất |
| Chế tạo | 8-12 tuần | Tháng 8/2026 | Tháng 11/2026 | — |
| Thử nghiệm trên biển | 4-6 tuần | Tháng 11/2026 | Tháng 1/2027 | Nghiệm thu |
| **Tổng (Phase 2 → nghiệm thu)** | **~10 tháng** | | | |

---

## 10. Nguồn Lực & Năng Lực

| Nguồn lực | Trạng thái | Khoảng trống |
|----------|-----------|-------------|
| Kỹ sư thiết kế (solo) | Sẵn sàng — Musk Sequence #1 | Tối đa 25h/tuần |
| Đối tác phân tích dao động | Đã xác nhận | Lịch trình chưa rõ |
| Nhà cung cấp thủy lực/tời hàng hải | Đã xác nhận | Cần báo giá trong Phase 2 |
| Xưởng đóng tàu nhôm VN | Sẵn sàng (Ba Son, Z189, Sông Thu) | RFQ tại Phase 3 |
| Dữ liệu giao diện OEM UUV | **CHƯA CÓ — ĐANG CHẶN** | Đã gửi ICD Template v1.1? |
| Liên hệ Hải Quân (S1, S2, S4) | **CHƯA — CẦN SẮP XẾP** | Người dùng sắp xếp |
| Phần mềm tính thủy tĩnh | Sẵn sàng | — |
| FEA kết cấu | Sẵn sàng | — |

---

## 11. Điều Kiện Vào Phase 2 & Phạm Vi

### 11.1 Điều Kiện Vào (từ Gate 1)

| # | Điều kiện | Trạng thái |
|---|----------|-----------|
| 1 | Gate 1 ĐẠT | **XONG** (3.80/4.0) |
| 2 | Danh sách yêu cầu >= 80% lượng hóa | **XONG** (92%) |
| 3 | Cấu trúc chức năng được phê duyệt | **XONG** (6 chức năng, 43 chức năng con) |
| 4 | Không có xung đột yêu cầu D chưa giải quyết | **XONG** |
| 5 | Đã gửi ICD Template cho OEM UUV | **ĐANG CHỜ — CHẶN** |

### 11.2 Phạm Vi Phase 2

Phase 2 Thiết Kế Ý Tưởng sẽ:

1. **Ma trận morphological** — ánh xạ nguyên lý làm việc cho tất cả 43 chức năng con
2. **Tạo concept** — kết hợp nguyên lý làm việc thành 3-5 phương án tổng thể
3. **Đánh giá concept** — chấm điểm trọng số VDI 2225 theo ưu tiên Mục 5
4. **7 quyết định thiết kế chính** — giải quyết PD-1 đến PD-7 (Mục 4.3)
5. **Concept tích hợp TMS-LARS** — liên kết mới, nhiệm vụ đòn bẩy cao nhất
6. **Đánh giá ổn định** — GM/GZ sơ bộ với trọng lượng cáp 25km
7. **Định cỡ tang cuốn cáp** — ước tính trọng lượng, thể tích, đường kính tang cuốn cáp 25km

### 11.3 Sản Phẩm Bàn Giao Phase 2

| # | Sản phẩm bàn giao | COD |
|---|-------------------|-----|
| 1 | Ma trận morphological (tất cả chức năng con) | Offload |
| 2 | 3-5 phương án concept có phác thảo | Offload + Core (phác thảo) |
| 3 | Ma trận đánh giá VDI 2225 | Offload |
| 4 | Mô tả concept được chọn | Core |
| 5 | Phác thảo bố trí tổng thể (GA) sơ bộ | Core |
| 6 | Concept TMS (tang cuốn + đường dẫn + đồng bộ) | Core |
| 7 | Ước tính trọng lượng v2 (bao gồm TMS) | Offload |
| 8 | Kiểm tra ổn định (sơ bộ) | Offload |
| 9 | Đánh giá Gate Phase 2 (Gate 2) | Core |

### 11.4 Tiêu Chí Dừng Phase 2

Nếu BẤT KỲ điều nào sau đây là đúng tại Gate 2, dự án phải xoay hướng hoặc dừng:

1. Không concept nào đạt >= 60% điểm trọng số trong đánh giá VDI 2225
2. Trọng lượng cáp 25km làm xuồng mất ổn định (GM < 0.5m)
3. Đồng bộ TMS-LARS không có giải pháp khả thi
4. Ước tính chi phí vượt trần $670K cho tất cả concept
5. ICD từ OEM UUV cho thấy giao diện không tương thích (không giải quyết được)

---

## 12. Rủi Ro Mang Sang

| # | Rủi ro | X | T | Điểm | Giảm thiểu | Giai đoạn |
|---|--------|---|---|------|-----------|-----------|
| R1 | Trọng lượng cáp 25km vượt biên ổn định | TB | C | 12 | Ước tính sớm trọng lượng cáp, tối ưu vị trí tang cuốn | Phase 2 |
| R2 | Đồng bộ TMS-LARS phức tạp hơn dự kiến | TB | TB | 9 | Nghiên cứu hệ thống tang cuốn công nghiệp; phương án liên kết cơ khí | Phase 2 |
| R3 | Chậm trễ ICD từ OEM chặn thiết kế chi tiết | TB | C | 12 | Bắt đầu Phase 2 với kích thước đã biết; hoàn thiện sau khi nhận ICD | Phase 2 |
| R4 | Phỏng vấn các bên liên quan thay đổi yêu cầu | TB | TB | 9 | Theo dõi qua phiên bản; chấm lại nếu thay đổi >10% | Phase 2 |
| R5 | Năng lực kỹ sư solo vs lịch trình 10 tháng | C | TB | 12 | Musk Sequence #1; hoãn BB-01/VN-AST nếu cần | Liên tục |
| R6 | Dao động tại SS 3 từ thân 8m | TB | C | 12 | Sống chống lắc + tối ưu chiều rộng + phân tích đối tác | Phase 2 |
| R7 | Tỷ lệ thất bại bắt phễu V | T | C | 8 | Chiều rộng phễu 2.0m (bảo thủ) + UHMWPE | Phase 2 |

> X = Xác suất (T: Thấp, TB: Trung bình, C: Cao) | T = Tác động

---

## 13. Lệnh Phát Triển

```
================================================================
         LỆNH PHÁT TRIỂN — VN-XUONG-UUV
================================================================

Sản phẩm:    Xuồng Thu/Thả UUV (8m, UUV có dây)
Thẩm quyền:  CEO Workshop X
Ngày:        2026-03-07
Gate 0:      ĐẠT (2026-03-06)
Gate 1:      ĐẠT (2026-03-06, điểm 3.80/4.0)

PHÊ DUYỆT:
  Phase 2 Thiết Kế Ý Tưởng được phép tiến hành.
  Ngân sách: Phase 2 chỉ phân tích — chi phí gần như bằng không.
  Thời gian: 4-6 tuần (mục tiêu Gate 2: 2026-04-18).

HÀNH ĐỘNG CHẶN:
  → Gửi ICD Template v1.1 cho OEM UUV trước khi phân tích Phase 2.

ƯU TIÊN:
  Musk Sequence #1 — tất cả dự án khác được hoãn.

RÀNG BUỘC:
  - Kỹ sư solo, 25h/tuần
  - Không mua sắm cho đến Phase 3
  - Tất cả yêu cầu Phase 1 (107 mục) đã được baseline
  - Thay đổi yêu cầu D cần phê duyệt Gate Review

================================================================
```

---

## 14. Sổ Đăng Ký Tài Liệu (Phase 0 + Phase 1)

| Tài liệu | Mã | Phiên bản | Vị trí |
|----------|-----|---------|--------|
| Tóm tắt dự án | — | v1.0 | `_Project_Brief.md` |
| Trạng thái | — | hiện tại | `Status.md` |
| Báo cáo ODI | ODI | v1.0 | `VN-XUONG-UUV_ODI_Report_v1.0.md` |
| P09 Phân tích tình huống | P09 | v1.0 | `VN-XUONG-UUV_P09_Situation_Analysis_v1.0.md` |
| P10 Tạo ý tưởng sản phẩm | P10 | v1.0 | `VN-XUONG-UUV_P10_Product_Idea_Generation_v1.0.md` |
| P11 Đề xuất sản phẩm | P11 | v1.0 | `VN-XUONG-UUV_P11_Product_Proposal_v1.0.md` |
| P12 Định nghĩa sản phẩm | P12 | v1.0 | **Tài liệu này** |
| Đánh giá Gate 0 | P56 | v1.0 | `VN-XUONG-UUV_P56_Gate0_Review_v1.0.md` |
| Điều lệ dự án | 001 | v1.1 | `Phase1-Task/001_Project_Charter_v1.0.md` |
| Danh sách yêu cầu | 002 | v1.1 | `Phase1-Task/002_Requirements_List_v1.0.md` |
| Phân tích bên liên quan | 003 | v1.0 | `Phase1-Task/003_Stakeholder_Analysis_v1.0.md` |
| Phân tích cạnh tranh | 004 | v1.1 | `Phase1-Task/004_Competitive_Analysis_v1.0.md` |
| Ma trận tuân thủ tiêu chuẩn | 005 | v1.0 | `Phase1-Task/005_Standards_Compliance_Matrix_v1.0.md` |
| Cấu trúc chức năng | 006 | v1.1 | `Phase1-Task/006_Function_Structure_v1.0.md` |
| Đánh giá Gate 1 | G1 | v1.0 | `Phase1-Task/VN_XUONG_UUV_Phase1_Gate_Review_v1.0.md` |
| Mẫu ICD | ICD | v1.1 | `Phase1-Task/ICD_UUV_Interface_Template_v1.0.md` |
| SOP Thả/Thu hồi | SOP-LR | v1.1 | `Phase1-Task/SOP_UUV_Launch_Recovery_Template_v1.0.md` |
| SOP Phối hợp tàu mẹ | SOP-MS | v1.1 | `Phase1-Task/SOP_Mother_Ship_Coordination_Template_v1.0.md` |
| SOP Mua sắm & Nghiệm thu | SOP-PA | v1.0 | `Phase1-Task/SOP_Procurement_Acceptance_Template_v1.0.md` |
| Mẫu phỏng vấn | INT | v1.0 | `Phase1-Task/Interview_Templates_S1_S2_S4.md` |
| Phân tích Path 1 | — | v1.0 | `Phase1-Task/Path1_Aluminum_MonoHull.md` |
| Phân tích Path 2 | — | v1.0 | `Phase1-Task/Path2_RIB.md` |
| Phân tích Path 3 | — | v1.0 | `Phase1-Task/Path3_Towed_Independent.md` |
| So sánh Path | — | v1.0 | `Phase1-Task/Path_Comparison_Matrix.md` |
| Nghiên cứu tham chiếu | REF | v1.0 | `References/` (5 tài liệu phân tích) |

**Tổng: 24 tài liệu trong Phase 0 + Phase 1.**

---

*P12 Định Nghĩa Sản Phẩm v1.0 | VN-XUONG-UUV | Pahl-Beitz Bước P12: Định Nghĩa Sản Phẩm | COD: Core*
