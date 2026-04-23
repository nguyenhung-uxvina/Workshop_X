# Ví dụ hoàn chỉnh: Lựa chọn hệ thống radar giám sát biên giới

## Bối cảnh

**Tình huống:**
Bộ Quốc phòng cần triển khai hệ thống radar giám sát biên giới dài 200km.

**Yêu cầu chính:**
- Phát hiện UAV nhỏ (RCS 0.01-0.1 m²)
- Phát hiện tàu thuyền (RCS 10-100 m²)
- Hoạt động 24/7 trong môi trường khắc nghiệt
- Tích hợp vào hệ thống C4ISR hiện có

**Ràng buộc:**
- Ngân sách: 500 tỷ VNĐ
- Thời gian triển khai: Tối đa 3 năm
- Ưu tiên: Độ tin cậy và tự chủ công nghệ

---

## Bước 1: Xác định các phương án

### Phương án A: Radar 3D tầm xa (Nhập khẩu)

**Mô tả:**
Radar 3D phased array từ nước ngoài, công nghệ tiên tiến, đã chứng minh.

**Thông số kỹ thuật:**
- Tầm phát hiện UAV: 80 km
- Tầm phát hiện tàu: 150 km
- MTBF: 2000 giờ
- Số mục tiêu theo dõi: 200
- RCS min: 0.01 m²

**Chi phí:**
- Mua sắm: 400 tỷ (5 radar × 80 tỷ)
- Lắp đặt: 50 tỷ
- Đào tạo: 30 tỷ
- Bảo trì 20 năm: 150 tỷ (7.5 tỷ/năm)
- **Tổng LCC: 630 tỷ** (vượt ngân sách!)

**Thời gian:**
- Đàm phán hợp đồng: 6 tháng
- Sản xuất: 18 tháng
- Lắp đặt & thử nghiệm: 12 tháng
- **Tổng: 3 năm**

**Tự chủ:** 10% (chỉ vận hành, bảo trì phải phụ thuộc nhà cung cấp)

### Phương án B: Radar 2D sản xuất trong nước

**Mô tả:**
Radar 2D conventional từ viện nghiên cứu quốc phòng, công nghệ đã thành thục.

**Thông số kỹ thuật:**
- Tầm phát hiện UAV: 50 km
- Tầm phát hiện tàu: 100 km
- MTBF: 3000 giờ
- Số mục tiêu theo dõi: 50
- RCS min: 0.05 m²

**Chi phí:**
- R&D: 50 tỷ (hoàn thiện thiết kế)
- Sản xuất: 180 tỷ (12 radar × 15 tỷ)
- Lắp đặt: 30 tỷ
- Đào tạo: 10 tỷ (đơn giản)
- Bảo trì 20 năm: 80 tỷ (4 tỷ/năm - rẻ vì nội địa)
- **Tổng LCC: 350 tỷ** (trong ngân sách)

**Thời gian:**
- Hoàn thiện thiết kế: 6 tháng
- Sản xuất: 12 tháng
- Lắp đặt & thử nghiệm: 6 tháng
- **Tổng: 2 năm**

**Tự chủ:** 95% (chỉ một số linh kiện điện tử nhập)

### Phương án C: Hệ thống kết hợp (Radar + EO/IR)

**Mô tả:**
Kết hợp radar 2D nội địa với cảm biến quang học/hồng ngoại nhập khẩu.

**Thông số kỹ thuật:**
- Radar tầm: 50 km (như PA-B)
- EO/IR tầm: 15 km (bổ trợ)
- MTBF radar: 3000 giờ
- MTBF EO/IR: 1500 giờ
- Khả năng xác nhận cao

**Chi phí:**
- R&D tích hợp: 30 tỷ
- Radar: 180 tỷ (như PA-B)
- EO/IR: 120 tỷ (12 bộ × 10 tỷ)
- Lắp đặt: 50 tỷ (phức tạp hơn)
- Bảo trì 20 năm: 120 tỷ (6 tỷ/năm)
- **Tổng LCC: 500 tỷ** (vừa khít ngân sách)

**Thời gian:**
- R&D tích hợp: 9 tháng
- Mua sắm: 12 tháng
- Lắp đặt: 12 tháng
- **Tổng: 2.75 năm**

**Tự chủ:** 65% (radar nội địa, EO/IR nhập)

---

## Bước 2: Xác định tiêu chí và trọng số

### Thảo luận với ban lãnh đạo

**Câu hỏi:** "Yếu tố nào quan trọng nhất trong dự án này?"

**Phản hồi:**
- Chỉ huy: "Phải phát hiện được UAV nhỏ" → Hiệu năng cao
- Tài chính: "Không được vượt ngân sách 500 tỷ" → Chi phí quan trọng
- Kỹ thuật: "Phải hoạt động ổn định 24/7" → Độ tin cậy cao
- Chiến lược: "Giảm phụ thuộc nước ngoài" → Tự chủ quan trọng
- Vận hành: "Cần triển khai nhanh" → Thời gian ưu tiên

### Trọng số được thống nhất

| STT | Tiêu chí | Trọng số | Lý do |
|-----|----------|----------|-------|
| 1 | Hiệu năng phát hiện | 0.30 | Mục tiêu chiến thuật quan trọng nhất |
| 2 | Độ tin cậy | 0.20 | Phải hoạt động liên tục, môi trường khắc nghiệt |
| 3 | Chi phí toàn đời | 0.20 | Ngân sách hạn chế, phải tuân thủ |
| 4 | Tự chủ công nghệ | 0.15 | Yếu tố chiến lược dài hạn |
| 5 | Thời gian triển khai | 0.10 | Cần đưa vào vận hành sớm |
| 6 | Khả năng tương tác | 0.05 | Tích hợp C4ISR hiện có |
| **TỔNG** | | **1.00** | |

---

## Bước 3: Chấm điểm từng phương án

### Tiêu chí 1: Hiệu năng phát hiện (w = 0.30)

**Yêu cầu:** Phát hiện UAV (RCS 0.01 m²) ở 50 km

| PA | Tầm phát hiện | % đạt | Điểm | Lý do |
|----|---------------|-------|------|-------|
| A | 80 km | 160% | **4** | Vượt trội, phát hiện xa và chính xác |
| B | 50 km | 100% | **3** | Đạt yêu cầu tốt |
| C | 50 km (radar) + xác nhận EO/IR | 120% | **3.5** | Không chỉ phát hiện mà còn xác nhận |

**Điều chỉnh:** PA-C được +0.5 vì khả năng xác nhận cao (tránh báo động nhầm)

### Tiêu chí 2: Độ tin cậy (w = 0.20)

**Mục tiêu:** MTBF > 2000 giờ, Availability > 0.90

| PA | MTBF | Availability | Công nghệ | Điểm | Lý do |
|----|------|--------------|-----------|------|-------|
| A | 2000h | 0.93 | Đã chứng minh | **4** | Rất tin cậy, nhiều hệ thống tương tự đang vận hành |
| B | 3000h | 0.96 | Đã chứng minh trong nước | **4** | Tin cậy cao, đơn giản, dễ bảo trì |
| C | 1500h (system) | 0.88 | Tích hợp mới | **2** | Độ tin cậy thấp hơn do phức tạp, chưa kiểm chứng |

**Giải thích PA-C:**
```
System MTBF = 1 / (1/3000 + 1/1500) = 1000h (worst case)
Thực tế có dự phòng: ~1500h
Availability = 1500 / (1500 + 200) = 0.88
```

### Tiêu chí 3: Chi phí toàn đời (w = 0.20)

**Ngân sách:** 500 tỷ VNĐ

| PA | LCC (tỷ) | % vs ngân sách | Điểm | Lý do |
|----|----------|----------------|------|-------|
| A | 630 | 126% | **0** | **Vượt ngân sách 26% - không chấp nhận được** |
| B | 350 | 70% | **4** | Tiết kiệm 150 tỷ, có thể đầu tư thêm |
| C | 500 | 100% | **2** | Vừa khít, không dư địa |

**Critical:** PA-A bị loại vì vượt ngân sách!

### Tiêu chí 4: Tự chủ công nghệ (w = 0.15)

**Mục tiêu:** Tối đa hóa nội địa hóa

| PA | % Nội địa | Chuyển giao | Điểm | Lý do |
|----|-----------|-------------|------|-------|
| A | 10% | Không | **1** | Phụ thuộc hoàn toàn, bảo trì phải qua nhà cung cấp |
| B | 95% | Không cần | **4** | Tự chủ cao, phát triển năng lực trong nước |
| C | 65% | Một phần | **3** | Cân bằng, radar tự chủ nhưng EO/IR phụ thuộc |

### Tiêu chí 5: Thời gian triển khai (w = 0.10)

**Yêu cầu:** < 3 năm

| PA | Thời gian | Điểm | Lý do |
|----|-----------|------|-------|
| A | 3.0 năm | **3** | Đúng deadline, nhưng không dư địa |
| B | 2.0 năm | **4** | Nhanh nhất, công nghệ sẵn có |
| C | 2.75 năm | **3** | Hơi lâu do phải tích hợp |

### Tiêu chí 6: Khả năng tương tác (w = 0.05)

**Yêu cầu:** Tích hợp vào C4ISR (MIL-STD-1553 + TCP/IP)

| PA | Interface | Điểm | Lý do |
|----|-----------|------|-------|
| A | Link 16 + Ethernet | **4** | Chuẩn NATO, tích hợp dễ |
| B | MIL-STD-1553 + TCP/IP | **4** | Đã thiết kế sẵn cho C4ISR Việt Nam |
| C | Như PA-B | **4** | Sử dụng radar nội địa, interface tương tự |

---

## Bước 4: Tính toán kết quả

### Ma trận VDI 2225

| Tiêu chí | Trọng số | PA-A | | PA-B | | PA-C | |
|----------|----------|------|---|------|---|------|---|
|          | (w)      | Điểm | w×p | Điểm | w×p | Điểm | w×p |
| Hiệu năng | 0.30 | 4 | 1.20 | 3 | 0.90 | 3.5 | 1.05 |
| Tin cậy | 0.20 | 4 | 0.80 | 4 | 0.80 | 2 | 0.40 |
| Chi phí | 0.20 | 0 | 0.00 | 4 | 0.80 | 2 | 0.40 |
| Tự chủ | 0.15 | 1 | 0.15 | 4 | 0.60 | 3 | 0.45 |
| Thời gian | 0.10 | 3 | 0.30 | 4 | 0.40 | 3 | 0.30 |
| Tương tác | 0.05 | 4 | 0.20 | 4 | 0.20 | 4 | 0.20 |
| **TỔNG** | **1.00** | | **2.65** | | **3.70** | | **2.80** |
| **Chi phí** | | | **630 tỷ** | | **350 tỷ** | | **500 tỷ** |
| **Giá trị KT-KT** | | | **0.0042** | | **0.0106** | | **0.0056** |
| **Xếp hạng điểm** | | | **3** | | **1** | | **2** |
| **Xếp hạng giá trị** | | | **3** | | **1** | | **2** |

### Phân tích kết quả

**PA-A (Radar 3D nhập khẩu):**
- ❌ **BỊ LOẠI** vì vượt ngân sách (630 > 500 tỷ)
- Hiệu năng cao nhất nhưng không khả thi về tài chính
- Giá trị KT-KT thấp nhất (0.0042)

**PA-B (Radar 2D nội địa):**
- ✅ **THẮNG** cả về điểm (3.70) và giá trị KT-KT (0.0106)
- Cân bằng tốt giữa hiệu năng, chi phí, và tự chủ
- Tiết kiệm 150 tỷ so với ngân sách
- Tin cậy cao, thời gian nhanh

**PA-C (Hệ thống kết hợp):**
- Cân bằng, nhưng không vượt trội
- Độ tin cậy thấp (2 điểm) là điểm yếu lớn
- Vừa khít ngân sách, không dư địa
- Giá trị KT-KT trung bình (0.0056)

---

## Bước 5: Phân tích độ nhạy

### Test 1: Nếu tăng trọng số "Hiệu năng" lên 0.40 (từ 0.30)

Giảm "Chi phí" xuống 0.10 (từ 0.20)

```
PA-A: 2.65 + 0.10×4 - 0.10×0 = 3.05 (vẫn bị loại vì vượt ngân sách)
PA-B: 3.70 + 0.10×3 - 0.10×4 = 3.60
PA-C: 2.80 + 0.10×3.5 - 0.10×2 = 2.95

→ PA-B vẫn thắng (3.60 > 2.95)
```

**Kết luận:** Quyết định **không nhạy cảm** với thay đổi trọng số này.

### Test 2: Nếu PA-C cải thiện độ tin cậy lên 3 điểm

```
PA-C: 2.80 - 0.20×2 + 0.20×3 = 3.00

→ PA-B vẫn tốt hơn (3.70 > 3.00)
```

**Kết luận:** PA-C phải cải thiện nhiều hơn mới cạnh tranh được.

### Test 3: Nếu PA-B tăng chi phí 20%

```
LCC mới: 350 × 1.2 = 420 tỷ
Giá trị KT-KT: 3.70 / 420 = 0.0088

So với PA-C: 2.80 / 500 = 0.0056

→ PA-B vẫn tốt hơn về giá trị (0.0088 > 0.0056)
```

**Kết luận:** Quyết định **vững chắc**, không đổi ngay cả khi PA-B đội chi phí 20%.

---

## Bước 6: Khuyến nghị cuối cùng

### Phương án được chọn: PA-B (Radar 2D nội địa)

### Lý do chính

1. **Điểm kỹ thuật cao nhất** (3.70/4.00)
   - Cân bằng tốt giữa hiệu năng, độ tin cậy, và các yếu tố khác
   - Đạt yêu cầu chiến thuật cơ bản

2. **Giá trị KT-KT tốt nhất** (0.0106)
   - Hiệu quả nhất về mặt chi phí
   - Tiết kiệm 150 tỷ (30% ngân sách)

3. **Tự chủ công nghệ cao** (95%)
   - Không phụ thuộc nước ngoài
   - Phát triển năng lực công nghiệp quốc phòng
   - Dễ bảo trì, nâng cấp

4. **Thời gian triển khai nhanh** (2 năm)
   - Sớm hơn deadline 1 năm
   - Công nghệ trưởng thành, rủi ro thấp

5. **Nằm trong ngân sách** (350 < 500 tỷ)
   - Có dư địa cho chi phí phát sinh
   - Có thể đầu tư thêm cho nâng cấp

### Sử dụng ngân sách dư (150 tỷ)

Đề xuất:
- **80 tỷ**: Tăng số lượng radar từ 12 lên 16 → Giảm khoảng cách giữa các trạm, tăng độ phủ
- **40 tỷ**: Bổ sung 8 bộ EO/IR tại các điểm then chốt → Xác nhận mục tiêu, giảm báo động nhầm
- **30 tỷ**: Nâng cấp trung tâm xử lý dữ liệu → Tích hợp tốt hơn vào C4ISR

### Rủi ro và biện pháp giảm thiểu

| Rủi ro | Mức độ | Biện pháp |
|--------|--------|-----------|
| Hiệu năng thấp hơn PA-A | MEDIUM | Triển khai dày hơn (16 thay vì 12 radar), bổ sung EO/IR |
| Chưa phát hiện được UAV rất nhỏ (RCS < 0.01) | MEDIUM | Kết hợp với các cảm biến khác (acoustic, RF detector) |
| Chậm tiến độ do vấn đề kỹ thuật | LOW | Công nghệ đã chứng minh, ít rủi ro |
| Vượt chi phí | LOW | Dư 150 tỷ, đủ buffer |

### Kế hoạch hành động

**Quý 1-2/2025:**
- [ ] Phê duyệt phương án
- [ ] Ký hợp đồng với viện nghiên cứu
- [ ] Khởi động hoàn thiện thiết kế

**Quý 3-4/2025:**
- [ ] Hoàn thiện thiết kế chi tiết
- [ ] Chuẩn bị sản xuất (công cụ, vật tư)
- [ ] Đào tạo kỹ thuật viên

**2026:**
- [ ] Sản xuất 16 radar
- [ ] Thử nghiệm từng bộ
- [ ] Chuẩn bị địa điểm lắp đặt

**Quý 1-2/2027:**
- [ ] Lắp đặt radar
- [ ] Thử nghiệm tích hợp
- [ ] Đào tạo vận hành

**Quý 3/2027:**
- [ ] Đưa vào vận hành chính thức
- [ ] Bàn giao cho đơn vị vận hành

---

## Bài học từ ví dụ này

### 1. "Tốt nhất" không phải lúc nào cũng đúng

PA-A có hiệu năng cao nhất nhưng bị loại vì vượt ngân sách. Trong thực tế, **constraints (ràng buộc) quan trọng hơn optimization (tối ưu hóa)**.

### 2. Cân bằng là chìa khóa

PA-B không vượt trội ở bất kỳ tiêu chí nào, nhưng cân bằng tốt trên tất cả các tiêu chí → **Thắng về tổng thể**.

### 3. Trọng số phản ánh ưu tiên thực tế

Trong ví dụ này, "Tự chủ" có trọng số 15% vì đây là yếu tố chiến lược quan trọng với Việt Nam. Nếu ở nước khác, trọng số này có thể chỉ 5%.

### 4. Phân tích độ nhạy quan trọng

Kiểm tra độ nhạy giúp đảm bảo quyết định vững chắc, không thay đổi ngay cả khi có biến động nhỏ.

### 5. Dùng ngân sách dư một cách thông minh

150 tỷ dư không để dành, mà đầu tư thêm để tăng hiệu năng (từ 3 lên ~3.5 điểm).

### 6. Luôn có plan B

Nếu PA-B gặp vấn đề, có thể chuyển sang PA-C. Đây là lý do tại sao phải đánh giá nhiều phương án.

---

## Checklist áp dụng cho dự án thực

- [ ] Đã xác định đầy đủ constraints (ngân sách, thời gian, etc.)?
- [ ] Đã có ít nhất 3 phương án khác biệt rõ ràng?
- [ ] Trọng số đã được thống nhất với ban lãnh đạo?
- [ ] Đã có dữ liệu để chấm điểm (không chỉ ước lượng)?
- [ ] Đã thực hiện phân tích độ nhạy?
- [ ] Đã xác định rủi ro và biện pháp giảm thiểu?
- [ ] Có kế hoạch hành động cụ thể cho phương án được chọn?
- [ ] Báo cáo đã được review bởi chuyên gia độc lập?

---

**Ví dụ này minh họa toàn bộ quy trình từ A-Z. Áp dụng tương tự cho dự án của bạn!**
