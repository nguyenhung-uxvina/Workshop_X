---
project: VN-XUONG-UUV
phase: 1
type: SOP-template
version: 1.6
created: 2026-03-06
updated: 2026-03-07
status: template
related: 003_Stakeholder_Analysis (S2 — Navy Procurement)
---

# SOP Template — Procurement, Budget Approval & Acceptance Process

> **Mục đích:** Quy định trình tự phối hợp với cơ quan mua sắm từ giai đoạn trình dự án đến khi nghiệm thu, bàn giao; bảo đảm đơn vị chế tạo chuẩn bị đúng hồ sơ, đúng thời điểm và đúng biểu mẫu để được phê duyệt ngân sách, ký hợp đồng và tổ chức nghiệm thu.
>
> **Hướng dẫn điền:** Điền vào các ô `___`. Giá trị phụ thuộc vào quy trình mua sắm cụ thể của đơn vị. Mục nào chưa biết ghi "TBD — xác nhận với Procurement".
>
> **Quy ước:**
> - **PROC** = Cán bộ mua sắm hải quân
> - **TECH** = Hội đồng rà soát kỹ thuật hải quân (hội đồng kỹ thuật)
> - **WX** = Đơn vị chế tạo (đầu mối phụ trách và nhóm thực hiện)
> - **USER** = Bộ phận khai thác UUV hải quân (S1 — người sử dụng cuối)

---

## TỔNG QUAN QUY TRÌNH

```
PHASE I: ĐỀ XUẤT & PHÊ DUYỆT NGÂN SÁCH
  |
  |— [1] Lập hồ sơ đề xuất dự án
  |— [2] Trình duyệt ngân sách
  |— [3] Phê duyệt / điều chỉnh / từ chối
  |
PHASE II: HỢP ĐỒNG & TRIỂN KHAI
  |
  |— [4] Đàm phán và ký hợp đồng
  |— [5] Báo cáo tiến độ theo gate
  |— [6] Điều chỉnh ngân sách (nếu cần)
  |
PHASE III: NGHIỆM THU & BÀN GIAO
  |
  |— [7] Nghiệm thu nhà máy (Factory Acceptance Test — FAT)
  |— [8] Nghiệm thu trên biển (Sea Acceptance Trial — SAT)
  |— [9] Bàn giao và ký biên bản
  |
PHASE IV: BẢO HÀNH & HỖ TRỢ SAU BÀN GIAO
  |
  |— [10] Bảo hành
  |— [11] Đào tạo bổ sung
  |— [12] Đóng dự án
```

---

## PHASE I: ĐỀ XUẤT & PHÊ DUYỆT NGÂN SÁCH

### Step 1: Lập Hồ Sơ Đề Xuất Dự Án

| # | Tài liệu | Người chuẩn bị | Nội dung chính | Trạng thái |
|---|---------|---------------|----------------|-----------|
| 1.1 | **Thuyết minh dự án** | WX | Mục tiêu, phạm vi, lý do cần thiết, lợi ích cho Hải Quân | [ ] |
| 1.2 | **Dự toán kinh phí** | WX | Chi tiết theo hạng mục (xem Bảng Dự Toán bên dưới) | [ ] |
| 1.3 | **Kế hoạch thực hiện** | WX | Timeline Phase 1-4 + chế tạo + thử nghiệm | [ ] |
| 1.4 | **Tỷ lệ nội địa hóa** | WX | BOM sơ bộ, phân tích % nội địa hóa (>= 50%) | [ ] |
| 1.5 | **So sánh phương án** | WX | Path Comparison Matrix (đã có) — lý do chọn Path 3 | [ ] |
| 1.6 | **Đánh giá rủi ro** | WX | 5 rủi ro chính + biện pháp giảm thiểu | [ ] |
| 1.7 | **Hồ sơ năng lực Đơn vị chế tạo** | WX | Kinh nghiệm, thiết bị, nhân lực, dự án tương tự | [ ] |

### Bảng Dự Toán Kinh Phí (Template)

| # | Hạng mục | Đơn vị | Số lượng | Đơn giá (VND) | Thành tiền (VND) | USD (ref) | Nội địa hóa | Ghi chú |
|---|---------|-------|---------|--------------|-----------------|-----------|-------------|---------|
| **A. VẬT TƯ CHÍNH** | | | | | | | | |
| A1 | Nhôm 5083-H321 (tấm, thanh) | kg | ___ | ___ | ___ | ___ | VN / NK | |
| A2 | Động cơ ngoài (twin outboard 2x40-60 HP) | bộ | 2 | ___ | ___ | ___ | NK | VD: Yamaha F60 ~105 kg/chiếc |
| A3 | Hệ thống điện LARS (winch VFD 10 kN + linear actuator + genset 5-8 kW) | bộ | 1 | ___ | ___ | ___ | VN / NK | |
| A4 | Winch | bộ | 1 | ___ | ___ | ___ | VN / NK | |
| A5 | UHMWPE (funnel + cradle pads) | kg | ___ | ___ | ___ | ___ | VN / NK | |
| A6 | Hệ thống lái (twin outboard tích hợp) | bộ | 1 | ___ | ___ | ___ | NK | Lái tích hợp động cơ ngoài |
| A7 | Thiết bị điện tử (GPS, VHF, etc.) | bộ | 1 | ___ | ___ | ___ | VN / NK | |
| A8 | Sơn + bảo vệ ăn mục + cathodic | bộ | 1 | ___ | ___ | ___ | VN / NK | |
| A9 | Phụ kiện (bu-lông, ống, van, etc.) | lô | 1 | ___ | ___ | ___ | VN / NK | |
| | **Cộng A** | | | | **___** | **___** | | |
| **B. NHÂN CÔNG** | | | | | | | | |
| B1 | Thiết kế (Phase 1-4) | người-tháng | ___ | ___ | ___ | ___ | VN | |
| B2 | Chế tạo vỏ tàu | người-tháng | ___ | ___ | ___ | ___ | VN | |
| B3 | Lắp ráp LARS + hệ thống | người-tháng | ___ | ___ | ___ | ___ | VN | |
| B4 | Sơn + hoàn thiện | người-tháng | ___ | ___ | ___ | ___ | VN | |
| | **Cộng B** | | | | **___** | **___** | | |
| **C. THỬ NGHIỆM** | | | | | | | | |
| C1 | Thử nghiệm tại xưởng (FAT) | lần | ___ | ___ | ___ | ___ | | |
| C2 | Thử nghiệm trên biển (SAT) | chuyến | ___ | ___ | ___ | ___ | | |
| C3 | Nhiên liệu thử nghiệm | lít | ___ | ___ | ___ | ___ | | |
| | **Cộng C** | | | | **___** | **___** | | |
| **D. KHÁC** | | | | | | | | |
| D1 | Vận chuyển | chuyến | ___ | ___ | ___ | ___ | | |
| D2 | Tài liệu kỹ thuật + SOP | bộ | 1 | ___ | ___ | ___ | | |
| D3 | Đào tạo ekip | khóa | ___ | ___ | ___ | ___ | | |
| D4 | Dự phòng (10%) | | | | ___ | ___ | | |
| | **Cộng D** | | | | **___** | **___** | | |
| | | | | | | | | |
| | **TỔNG CỘNG (A+B+C+D)** | | | | **___** | **___** | | |

### Bảng Phân Tích Nội Địa Hóa (Template)

| # | Hạng mục | Giá trị (VND) | Nguồn gốc | Nội địa hóa? |
|---|---------|--------------|-----------|-------------|
| 1 | Nhôm 5083 | ___ | VN (nhập phôi, cán/cắt tại VN) | Có / Không |
| 2 | Động cơ | ___ | NK / VN | Có / Không |
| 3 | Hệ thống điện LARS (winch, genset, actuator) | ___ | NK / VN | Có / Không |
| 4 | Winch | ___ | NK / VN | Có / Không |
| 5 | UHMWPE | ___ | NK | Không |
| 6 | Thiết bị điện tử | ___ | NK | Không |
| 7 | Sơn + bảo vệ | ___ | VN | Có |
| 8 | Phụ kiện | ___ | VN | Có |
| 9 | Nhân công | ___ | VN | Có |
| 10 | Thử nghiệm | ___ | VN | Có |
| | **TỔNG** | **___** | | |
| | **Nội địa hóa** | **___** | | **___% (target >= 50%)** |

**Hướng dẫn điền Phase I:**
- 1.1: Thuyết minh = bản tóm tắt của Doc 001 (Project Charter) + lý do chiến lược (tạo năng lực UUV ops cho Hải Quân)
- 1.2: Dự toán chính xác hơn sẽ có ở Phase 3. Phase 1 đưa dự toán sơ bộ (+/- 30%)
- 1.4: Nội địa hóa tính theo giá trị (VND), không tính theo số lượng hạng mục
- 1.7: Bao gồm dự án BB-01, VN-12.7MM-SIM, VN-AST-MSL-001 nếu liên quan

### Step 2: Trình Duyệt Ngân Sách

| # | Bước | Người | Chi tiết | Kiểm tra |
|---|------|-------|----------|---------|
| 2.1 | Gửi hồ sơ đề xuất cho PROC | WX | ___ bộ, biểu mẫu ___ | [ ] |
| 2.2 | PROC kiểm tra tính đầy đủ hồ sơ | PROC | Checklist của PROC | [ ] |
| 2.3 | PROC chuyển cho TECH rà soát | PROC | | [ ] |
| 2.4 | TECH họp xét duyệt kỹ thuật | TECH | WX trình bày, trả lời câu hỏi | [ ] |
| 2.5 | TECH ra kết luận: Đạt / Cần sửa / Từ chối | TECH | Biên bản họp | [ ] |
| 2.6 | WX sửa theo góp ý TECH (nếu cần) | WX | Thời hạn ___ ngày | [ ] |
| 2.7 | PROC trình cấp trên phê duyệt ngân sách | PROC | | [ ] |

### Step 3: Phê Duyệt

| Kết quả | Hành động tiếp theo |
|---------|-------------------|
| **PHÊ DUYỆT** | Chuyển sang Phase II — đàm phán hợp đồng |
| **ĐIỀU CHỈNH** | WX sửa hồ sơ theo yêu cầu, trình lại trong ___ ngày |
| **TỪ CHỐI** | WX tìm hiểu lý do, xem xét đề xuất lại hoặc dừng dự án |

---

## PHASE II: HỢP ĐỒNG & TRIỂN KHAI

### Step 4: Đàm Phán & Ký Hợp Đồng

| # | Hạng mục hợp đồng | Chi tiết | Giá trị | Ghi chú |
|---|-------------------|----------|---------|---------|
| 4.1 | Phạm vi công việc | Thiết kế + chế tạo + thử nghiệm xuồng LARS | | Theo Doc 001 Scope |
| 4.2 | Giá trị hợp đồng | ___ VND (= ~$___ USD) | | Theo dự toán được duyệt |
| 4.3 | Thời gian thực hiện | ___ tháng từ ngày ký | | Theo timeline Doc 001 |
| 4.4 | Điều kiện thanh toán | | | Xem Bảng Thanh Toán |
| 4.5 | Điều kiện nghiệm thu | | | Xem Phase III |
| 4.6 | Bảo hành | ___ tháng sau nghiệm thu | | |
| 4.7 | Phạt chậm tiến độ | ___% giá trị HĐ / tuần chậm | | |
| 4.8 | Nội địa hóa cam kết | >= 50% theo giá trị | | |

### Bảng Thanh Toán (Template — điều chỉnh theo thỏa thuận)

| Đợt | Mốc | Tỷ lệ | Giá trị (VND) | Tài liệu kèm theo |
|-----|-----|-------|--------------|-------------------|
| 1 | Ký hợp đồng | ___% | ___ | Hợp đồng đã ký |
| 2 | Hoàn thành Phase 2 (Gate 2 PASS) | ___% | ___ | Gate 2 Review Report |
| 3 | Hoàn thành Phase 3 (Gate 3 PASS) | ___% | ___ | Gate 3 Review Report |
| 4 | Hạ thủy (xuồng xuống nước lần đầu) | ___% | ___ | Biên bản hạ thủy |
| 5 | FAT PASS | ___% | ___ | FAT Report |
| 6 | SAT PASS + Bàn giao | ___% | ___ | SAT Report + Biên bản bàn giao |
| | **TỔNG** | **100%** | **___** | |

**Hướng dẫn điền:**
- Thường: 20-30% tạm ứng, 60-70% theo tiến độ, 10-20% sau nghiệm thu
- Mỗi đợt thanh toán kèm biên bản xác nhận hoàn thành

### Step 5: Báo Cáo Tiến Độ Theo Gate

| Gate | Thời điểm | Tài liệu báo cáo | Người duyệt |
|------|----------|-----------------|-------------|
| Gate 1 (Phase 1 done) | ___ | Requirements List, Stakeholder Analysis, Function Structure | TECH |
| Gate 2 (Phase 2 done) | ___ | Concept Selection Report, Morphonhật kýical Matrix, VDI 2225 Scoring | TECH |
| Gate 3 (Phase 3 done) | ___ | Layout Drawings, BOM v1, Cost Update, Nội Địa Hóa Report | TECH + PROC |
| Phase 4 done | ___ | Detail Drawings, Final BOM, Manufacturing Plan | TECH |
| Hạ thủy | ___ | Hull Inspection Report, Stability Booklet | TECH |
| FAT | ___ | FAT Report (xem Phase III) | TECH + USER |
| SAT | ___ | SAT Report (xem Phase III) | TECH + USER + PROC |

**Báo cáo tiến độ biểu mẫu:**

| Hạng mục | Nội dung |
|----------|---------|
| Kỳ báo cáo | Từ ___ đến ___ |
| Tiến độ tổng thể | ___% (theo kế hoạch: ___%) |
| Công việc đã hoàn thành | 1. ___ 2. ___ 3. ___ |
| Công việc đang làm | 1. ___ 2. ___ |
| Khó khăn / Rủi ro | 1. ___ |
| Đề xuất | ___ |
| Ngân sách đã sử dụng | ___ VND / ___ VND tổng (___%) |
| Nội địa hóa hiện tại | ___% (target >= 50%) |
| Kế hoạch kỳ tiếp | 1. ___ 2. ___ |

### Step 6: Điều Chỉnh Ngân Sách (Nếu Cần)

| # | Trường hợp | Hành động | Người duyệt |
|---|-----------|---------|-------------|
| 6.1 | Chênh lệch <= 10% tổng HĐ | WX tự xử lý, báo cáo PROC | PROC |
| 6.2 | Chênh lệch 10-20% tổng HĐ | WX lập tờ trình điều chỉnh, PROC xét | PROC + Cấp trên |
| 6.3 | Chênh lệch > 20% tổng HĐ | WX lập tờ trình, TECH + PROC họp xét | Cấp trên |
| 6.4 | Thay đổi phạm vi công việc | Phụ lục hợp đồng | PROC + TECH |

---

## PHASE III: NGHIỆM THU & BÀN GIAO

### Step 7: Nghiệm Thu Nhà Máy (Factory Acceptance Test — FAT)

**Địa điểm:** Xưởng đóng tàu / Đơn vị chế tạo
**Thành phần:** WX + TECH + USER (tham dự)

| # | Hạng mục FAT | Tiêu chí | PP kiểm tra | Đạt | Ghi chú |
|---|-------------|---------|------------|-----|---------|
| F-01 | Kích thước tổng thể (LOA, beam, draft) | Theo Doc 002 (G-01 đến G-03) | Đo trực tiếp | [ ] | |
| F-02 | Trọng lượng (không tải) | <= 3.100 kg (~2.820 kg + dung sai 10%) | Cân | [ ] | Theo ước tính Doc 008: ~2.820 kg |
| F-03 | Vỏ tàu — hàn, kín nước | AWS D1.2, hydrostatic test | Kiểm tra hàn + bơm nước | [ ] | |
| F-04 | Ramp — trượt trơn, góc đúng | 15-20 deg, cradle trượt không kẹt | Thử với cradle | [ ] | |
| F-05 | Winch — hoạt động | Lên/hạ, tốc độ, SWL | Thử tải 100% SWL | [ ] | |
| F-06 | V-funnel — kích thước, vật liệu | >= 2.0m, UHMWPE | Đo + mắt kính | [ ] | |
| F-07 | Cradle — clamp, pads | Đóng/mở, D=400mm fit | Thử với UUV mock-up | [ ] | |
| F-08 | Động cơ — khởi động, chạy | Bình thường, không rò rỉ | Chạy thử | [ ] | |
| F-09 | Hệ thống lái — hoạt động | Quay phải/trái | Thử | [ ] | |
| F-10 | Hệ thống điện — hoạt động | 12V/24V, không chập | Đo điện | [ ] | |
| F-11 | GPS — hoạt động | Có tín hiệu | Thử | [ ] | |
| F-12 | VHF — hoạt động | Thu/phát | Thử liên lạc | [ ] | |
| F-13 | An toàn — trang bị | Áo phao, phao, đèn, bơm la canh | Kiểm tra | [ ] | |
| F-14 | Sơn + bảo vệ — hoàn thiện | Không bong, không trầy | Mắt kính | [ ] | |
| F-15 | Tài liệu — đầy đủ | Bản vẽ, BOM, SOP, maintenance manual | Kiểm tra danh sách | [ ] | |

**Tiêu chí PASS FAT:** Tất cả 15 mục đạt [ ]. Mục nào FAIL → sửa + thử lại.

**FAT Report biểu mẫu:**

| Hạng mục | Nội dung |
|----------|---------|
| Ngày FAT | ___ |
| Địa điểm | ___ |
| Thành phần | WX: ___ / TECH: ___ / USER: ___ |
| Kết quả | PASS / FAIL (chi tiết từng mục) |
| Mục FAIL (nếu có) | 1. ___ — Biện pháp: ___ — Hạn sửa: ___ |
| Kết luận | Đồng ý hạ thủy / Cần sửa trước khi hạ thủy |
| Chữ ký | TECH: ___ / WX: ___ |

### Step 8: Nghiệm Thu Trên Biển (Sea Acceptance Trial — SAT)

**Địa điểm:** Vùng biển ___ (SS 2 cho SAT cơ bản, SS 3 cho SAT nâng cao)
**Thành phần:** WX + TECH + USER + PROC (tham dự)

| # | Hạng mục SAT | Tiêu chí | PP kiểm tra | Đạt | Ghi chú |
|---|-------------|---------|------------|-----|---------|
| S-01 | Tốc độ lớn nhất | >= **25 kts** (K4) | GPS đo tốc độ, 2 chiều | [ ] | Twin outboard 2x40-60 HP |
| S-02 | Tốc độ hành trình LARS ops | **2-5 kts** (K5) | GPS | [ ] | Tốc độ khi triển khai/thu hồi UUV |
| S-03 | Thời gian hoạt động liên tục | >= 5 giờ tại tốc độ lớn nhất (OP-14) | Đo thời gian + nhiên liệu | [ ] | |
| S-04 | Ổn định (GM) | >= 0.5m (F-07) | Inclining test hoặc kiểm tra thực tế | [ ] | Loaded displacement ~3,843 kg |
| S-05 | Quay trở | Bán kính quay <= ___ m | Đo GPS | [ ] | |
| S-06 | Launch UUV | Thành công, <= 15 phút (OP-04) | Đo thời gian, quan sát | [ ] | Ramp 15° + electric LARS |
| S-07 | Recovery UUV tại SS 2 | Thành công, capture rate >= 80% (OP-06) | Thử ___ lần, đếm thành công | [ ] | Winch 10 kN + permanent pendant |
| S-08 | Recovery UUV tại SS 3 | Thử nghiệm, capture rate >= 60% (OP-07) | Thử ___ lần, đếm thành công | [ ] | WISH — SS 3-4 Biển Đông |
| S-09 | Thời gian recovery | <= 30 phút (OP-03) | Đo thời gian | [ ] | |
| S-10 | UUV không hư hại | Không trầy xước vượt cosmetic (SC-2) | Kiểm tra UUV sau mỗi lần | [ ] | UUV 550 kg |
| S-11 | An toàn ekip | Zero injury (SC-4) | Ghi nhận | [ ] | Ekip 3 người |
| S-12 | Kéo sát mạn tàu mẹ | Ổn định tại ___ kts (OP-11) | Thử kéo | [ ] | Lightship 2,820 kg > crane 2.5t |
| S-13 | Nội địa hóa | >= 50% (M-05) | BOM analysis | [ ] | |
| S-14 | Ekip tự vận hành | Không cần WX hướng dẫn (SC-7) | Quan sát | [ ] | 3 người: Helmsman/LARS op/UUV op |

**Tiêu chí PASS SAT:**
- **Bắt buộc PASS:** S-01 đến S-07, S-09, S-10, S-11, S-13 (12 mục)
- **Cho phép FAIL:** S-08 (thu hồi ở SS 3 — mục tiêu kỳ vọng), S-14 (tự vận hành — cần thêm đào tạo)
- **Nếu S-12 FAIL:** Xem xét bổ sung đào tạo kéo, không block nghiệm thu

**SAT Report biểu mẫu:**

| Hạng mục | Nội dung |
|----------|---------|
| Ngày SAT | ___ đến ___ |
| Địa điểm | Vùng biển ___ |
| Điều kiện biển | SS ___, gió ___ kts, tầm nhìn ___ m |
| Thành phần | WX: ___ / TECH: ___ / USER: ___ / PROC: ___ |
| Kết quả từng hạng mục | (bảng chi tiết) |
| Số lần launch | ___ / ___ thành công (___%) |
| Số lần recovery SS 2 | ___ / ___ thành công (___%) |
| Số lần recovery SS 3 | ___ / ___ thành công (___%) |
| UUV tình trạng | ___ |
| Sự cố | ___ |
| Kết luận | PASS / CONDITIONAL PASS / FAIL |
| Chữ ký | TECH: ___ / USER: ___ / PROC: ___ / WX: ___ |

### Step 9: Bàn Giao

| # | Tài liệu bàn giao | Số lượng | Đạt | Ghi chú |
|---|------------------|---------|-----|---------|
| 9.1 | Xuồng LARS (hiện vật) | 1 | [ ] | |
| 9.2 | Bản vẽ thiết kế (as-built) | ___ bộ | [ ] | Giấy + điện tử |
| 9.3 | BOM chính thức | 1 bộ | [ ] | |
| 9.4 | SOP vận hành | ___ bộ | [ ] | Launch, Recovery, Towing, Emergency |
| 9.5 | Hướng dẫn bảo dưỡng | ___ bộ | [ ] | |
| 9.6 | Báo cáo FAT | 1 bộ | [ ] | |
| 9.7 | Báo cáo SAT | 1 bộ | [ ] | |
| 9.8 | Stability Booklet | 1 bộ | [ ] | |
| 9.9 | Phụ tùng dự phòng | Theo danh sách | [ ] | |
| 9.10 | Công cụ bảo dưỡng | Theo danh sách | [ ] | |

**Biên Bản Bàn Giao (Template):**

```
BIÊN BẢN BÀN GIAO
XUỒNG TRIỂN KHAI/THU HỒI UUV — MÃ SỐ: VN-XUONG-UUV-001

Ngày: ___
Địa điểm: ___

BÊN GIAO: Đơn vị chế tạo
Đại diện: ___ — Chức vụ: ___

BÊN NHẬN: ___
Đại diện: ___ — Chức vụ: ___

NỘI DUNG BÀN GIAO:
1. Xuồng LARS theo hợp đồng số ___ ngày ___
2. Tài liệu kỹ thuật (xem danh sách đính kèm)
3. Phụ tùng dự phòng (xem danh sách đính kèm)
4. Công cụ bảo dưỡng (xem danh sách đính kèm)

KẾT QUẢ NGHIỆM THU:
- FAT: PASS ngày ___
- SAT: PASS ngày ___

CAM KẾT BẢO HÀNH: ___ tháng kể từ ngày ký biên bản này.

BÊN GIAO                          BÊN NHẬN
(ký, ghi rõ họ tên)              (ký, ghi rõ họ tên, đóng dấu)
```

---

## PHASE IV: BẢO HÀNH & HỖ TRỢ SAU BÀN GIAO

### Step 10: Bảo Hành

| # | Hạng mục | Chi tiết |
|---|---------|---------|
| 10.1 | Thời gian bảo hành | ___ tháng |
| 10.2 | Phạm vi bảo hành | Lỗi thiết kế, lỗi chế tạo, lỗi vật tư |
| 10.3 | Không bảo hành | Hư hỏng do sử dụng sai SOP, thiên tai, va chạm |
| 10.4 | Thời gian phản hồi | <= ___ giờ sau khi nhận thông báo |
| 10.5 | Thời gian sửa chữa | <= ___ ngày (tùy mức độ) |

### Phiếu Bảo Hành (Template)

| Hạng mục | Nội dung |
|----------|---------|
| Ngày báo | ___ |
| Người báo | ___ — SĐT: ___ |
| Mô tả sự cố | ___ |
| Phân loại | Lỗi thiết kế / Lỗi chế tạo / Lỗi vật tư / Sử dụng sai / Khác |
| Hình ảnh đính kèm | Có / Không |
| WX tiếp nhận | Ngày: ___ — Người: ___ |
| Phương án xử lý | ___ |
| Thời gian sửa | ___ ngày |
| Kết quả | Đã sửa / Thay thế / Không thuộc bảo hành |
| Xác nhận bên nhận | Chữ ký: ___ — Ngày: ___ |

### Step 11: Đào Tạo Bổ Sung

| # | Nội dung đào tạo | Thời lượng | Đối tượng | Hình thức |
|---|-----------------|-----------|-----------|-----------|
| 11.1 | Vận hành LARS (triển khai–thu hồi) | ___ ngày | Ekip vận hành (3 người x ___ ekip) | Thực hành trên biển |
| 11.2 | Bảo dưỡng định kỳ | ___ ngày | Ekip bảo dưỡng | Thực hành tại xưởng |
| 11.3 | Xử lý sự cố | ___ ngày | Ekip vận hành + bảo dưỡng | Lý thuyết + thực hành |
| 11.4 | Phối hợp tàu mẹ | ___ ngày | Ekip + thủy thủ tàu mẹ | Thực hành trên biển |

### Step 12: Đóng Dự Án

| # | Hạng mục | Đạt | Ghi chú |
|---|---------|-----|---------|
| 12.1 | Tất cả tài liệu bàn giao đã nhận | [ ] | |
| 12.2 | FAT + SAT PASS | [ ] | |
| 12.3 | Biên bản bàn giao đã ký | [ ] | |
| 12.4 | Thanh toán 100% | [ ] | |
| 12.5 | Bảo hành đang hiệu lực | [ ] | |
| 12.6 | Đào tạo hoàn thành | [ ] | |
| 12.7 | Bài học kinh nghiệm đã được ghi nhận | [ ] | Đơn vị chế tạo lưu hồ sơ trong IPARAG |

---

## SOP COMPLETION CHECKLIST

### Critical (PHẢI có trước khi trình PROC)

- [ ] Thuyết minh dự án đã viết (Step 1.1)
- [ ] Dự toán kinh phí đã lập, có bảng chi tiết (Step 1.2)
- [ ] Tỷ lệ nội địa hóa đã tính, >= 50% (Step 1.4)
- [ ] Hồ sơ năng lực Đơn vị chế tạo (Step 1.7)
- [ ] Biết biểu mẫu tài liệu mà PROC yêu cầu (hỏi trước)
- [ ] Biết quy trình duyệt của đơn vị (số cấp duyệt, thời gian)

### Important (SHOULD có trước khi ký hợp đồng)

- [ ] Bảng thanh toán đã thỏa thuận (đợt, tỷ lệ, điều kiện)
- [ ] Tiêu chí nghiệm thu (FAT + SAT) đã thống nhất với TECH và USER
- [ ] Điều khoản bảo hành đã thống nhất
- [ ] Phạt chậm tiến độ đã thống nhất
- [ ] Danh sách tài liệu bàn giao đã thống nhất

### Nice to have (trước khi bắt đầu chế tạo)

- [ ] Biểu mẫu báo cáo tiến độ đã được thống nhất với PROC
- [ ] Lịch báo cáo định kỳ đã thống nhất (hàng tháng / hàng quý)
- [ ] Đầu mối liên lạc phía PROC đã xác định (tên, SĐT, email)

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-06 | Đơn vị chế tạo | Mẫu ban đầu. |
| 1.1 | 2026-03-07 | Đơn vị chế tạo | Cập nhật giai đoạn 2: twin outboard 2 x 40–60 HP (A2), LARS điện gồm tời VFD 10 kN + máy phát 5–8 kW (A3), tốc độ SAT 25 kn (S-01), khai thác LARS 2–5 kn (S-02), lượng giãn nước đầy tải 3.843 kg (S-04), UUV 550 kg (S-10), biên chế 3 người (S-14), trọng lượng không tải 2.820 kg vượt SWL cẩu 2,5 tấn (S-12), FAT yêu cầu không tải <= 3.100 kg (F-02), nội địa hóa hạng mục “điện LARS”. |
| 1.5 | 2026-03-07 | Đơn vị chế tạo | Chuẩn hóa theo văn phong hồ sơ viện/kỹ thuật hải quân, phục vụ rà soát–trình duyệt–nghiệm thu nội bộ. |
| 1.6 | 2026-03-07 | Đơn vị chế tạo | Cập nhật bản 1.5 theo nội dung mới, đồng bộ lại thuật ngữ và cách diễn đạt trên toàn bộ tài liệu. |
| | | | |

---

*SOP mua sắm, phê duyệt ngân sách và nghiệm thu v1.6 | VN-XUONG-UUV Giai đoạn 1 | Bản dự thảo phục vụ rà soát nội bộ*
