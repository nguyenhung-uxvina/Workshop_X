---
name: engineering-concept-evaluation-assistant
description: >
  Hỗ trợ đánh giá và lựa chọn phương án thiết kế quốc phòng/an ninh một cách có hệ thống,
  sử dụng VDI 2225, Pugh Matrix, và phân tích đa tiêu chí. Kích hoạt khi user nói về
  đánh giá phương án, so sánh concept, VDI 2225, ma trận quyết định, lựa chọn giải pháp
  kỹ thuật, concept selection, hoặc alternative evaluation.
---

# Concept Evaluation Assistant

Hỗ trợ đánh giá và lựa chọn phương án thiết kế có hệ thống cho các dự án quốc phòng/an ninh.

## Khi nào sử dụng skill này

Sử dụng skill này khi:
- Cần lựa chọn giữa 2-10 phương án thiết kế khác nhau
- Đánh giá trong giai đoạn **Conceptual Design** (sau morphological matrix)
- Cần trình bày/thuyết phục lãnh đạo với quyết định có căn cứ
- Quyết định quan trọng, tác động lâu dài, chi phí cao

## Tổng quan quy trình

Đánh giá phương án thiết kế gồm 6 bước:

```
1. Chuẩn bị (Preparation)
   → Xác định tiêu chí và trọng số

2. Thu thập dữ liệu (Data Collection)
   → Thông số kỹ thuật, chi phí, thời gian

3. Xây dựng ma trận (Matrix Construction)
   → Tạo bảng đánh giá VDI 2225 hoặc Pugh Matrix

4. Chấm điểm (Scoring)
   → Đánh giá từng phương án theo tiêu chí

5. Tính toán & xếp hạng (Calculation)
   → Tính tổng điểm, giá trị kỹ thuật-kinh tế

6. Phân tích & khuyến nghị (Analysis)
   → Đề xuất phương án tối ưu với biện pháp giảm thiểu rủi ro
```

## Bước 1: Chuẩn bị

### Thu thập thông tin từ user

Hỏi user về:
- **Danh sách phương án**: Cần đánh giá bao nhiêu phương án? (2-10)
- **Yêu cầu dự án**: Yêu cầu chiến thuật/kỹ thuật quan trọng nhất?
- **Ngân sách**: Có giới hạn chi phí không?
- **Thời gian**: Có yêu cầu về thời gian triển khai không?
- **Ưu tiên**: Yếu tố nào quan trọng nhất? (hiệu năng, chi phí, độ tin cậy, tự chủ?)

### Đề xuất tiêu chí đánh giá

Đề xuất 7 tiêu chí chuẩn cho quốc phòng/an ninh (đọc từ `references/criteria.md` để biết chi tiết):

1. **Hiệu năng tác chiến** (Combat Effectiveness) - 25-30%
2. **Độ tin cậy** (Reliability) - 15-20%
3. **Khả năng sống sót** (Survivability) - 10-15%
4. **Chi phí toàn đời** (Life Cycle Cost) - 15-20%
5. **Khả năng sản xuất** (Producibility) - 5-10%
6. **Thời gian triển khai** (Time to Field) - 5-10%
7. **Khả năng tương tác** (Interoperability) - 5-10%

Điều chỉnh tiêu chí và trọng số dựa trên ưu tiên cụ thể của dự án.

### Chọn phương pháp đánh giá

**VDI 2225 (khuyến nghị mặc định):**
- Dùng khi: Có >2 phương án, cần so sánh toàn diện
- Ưu điểm: Kết hợp kỹ thuật và kinh tế, khách quan
- Đọc chi tiết: `references/vdi-2225.md`

**Pugh Matrix:**
- Dùng khi: Có phương án baseline (hệ thống hiện có)
- Ưu điểm: Nhanh, so sánh tương đối
- Đọc chi tiết: `references/pugh-matrix.md`

**Cost-Benefit Analysis:**
- Dùng khi: Chi phí là yếu tố quyết định
- Ưu điểm: Tập trung vào ROI
- Đọc chi tiết: `references/cost-benefit.md`

Nếu không chắc chọn phương pháp nào → Dùng VDI 2225.

## Bước 2: Thu thập dữ liệu

Yêu cầu user cung cấp cho **mỗi phương án**:

| Thông tin cần | Mục đích |
|---------------|----------|
| Thông số kỹ thuật | Chấm điểm hiệu năng, tin cậy |
| Chi phí R&D | Tính life cycle cost |
| Chi phí sản xuất | Tính life cycle cost |
| Chi phí vận hành/bảo trì | Tính life cycle cost |
| Thời gian phát triển | Chấm điểm thời gian triển khai |
| Mức độ trưởng thành công nghệ | Đánh giá rủi ro |
| So sánh với hệ thống tương tự | Tham khảo benchmark |

Nếu user không có đầy đủ dữ liệu → Ước tính dựa trên hệ thống tương tự hoặc công thức thực nghiệm.

## Bước 3: Xây dựng ma trận

### Tạo bảng tiêu chí và trọng số

```markdown
| STT | Tiêu chí | Trọng số | Ghi chú |
|-----|----------|----------|---------|
| 1 | Hiệu năng tác chiến | 0.30 | Ưu tiên cao nhất |
| 2 | Độ tin cậy | 0.20 | Đã kiểm chứng |
| 3 | Chi phí toàn đời | 0.20 | Trong ngân sách |
| 4 | Tự chủ công nghệ | 0.15 | Yếu tố chiến lược |
| 5 | Thời gian triển khai | 0.10 | Cần nhanh |
| 6 | Khả năng tương tác | 0.05 | Tích hợp hệ thống hiện có |
| **TỔNG** | | **1.00** | |
```

### Tạo ma trận đánh giá

Sử dụng template từ `references/templates.md`:
- Template VDI 2225
- Template Pugh Matrix
- Template Cost-Benefit

## Bước 4: Chấm điểm

### Thang điểm VDI 2225

```
0 = Không đạt yêu cầu tối thiểu
1 = Đạt yêu cầu tối thiểu (50-60% so với tốt nhất)
2 = Đạt yêu cầu cơ bản (60-75%)
3 = Tốt (75-90%)
4 = Xuất sắc (>90% so với tốt nhất)
```

### Hướng dẫn chấm điểm

Cho từng tiêu chí:
1. Xác định "tốt nhất" (baseline) là gì
2. So sánh từng phương án với baseline
3. Chấm điểm theo thang 0-4
4. Ghi rõ **lý do** cho điểm số

Đọc hướng dẫn chi tiết cho từng tiêu chí tại `references/criteria.md`.

## Bước 5: Tính toán & xếp hạng

### Công thức VDI 2225

```
Tổng điểm = Σ (Trọng số × Điểm)
Giá trị kỹ thuật-kinh tế = Tổng điểm / Chi phí

Xếp hạng theo:
1. Tổng điểm (technical merit)
2. Giá trị KT-KT (cost-effectiveness)
```

### Thực hiện tính toán

Sử dụng script `scripts/calculate_scores.py` để:
- Tự động tính tổng điểm có trọng số
- Tính giá trị kỹ thuật-kinh tế
- Xếp hạng các phương án
- Tạo biểu đồ so sánh

Hoặc tính thủ công nếu đơn giản.

## Bước 6: Phân tích & khuyến nghị

### Tạo báo cáo đánh giá

Sử dụng template từ `references/templates.md` để tạo:

1. **Bảng kết quả** - Xếp hạng các phương án
2. **Phân tích so sánh** - Điểm mạnh/yếu từng phương án
3. **Phân tích rủi ro** - Rủi ro của phương án được chọn
4. **Khuyến nghị** - Phương án đề xuất với lý do
5. **Kế hoạch hành động** - Bước tiếp theo

### Phân tích độ nhạy

Kiểm tra xem kết quả có thay đổi không nếu:
- Trọng số ±20%
- Điểm ±0.5
- Chi phí ±20%

Nếu kết quả thay đổi → Ghi chú "nhạy cảm với [tiêu chí X]"

### Lưu ý đặc biệt cho QP/AN

Đọc `references/defense-considerations.md` để hiểu:
- Yêu cầu bảo mật thông tin
- Quy trình phê duyệt đa cấp
- Yếu tố địa chính trị
- Khả năng nâng cấp lâu dài

## Output mẫu

### Bảng so sánh nhanh

```markdown
| Yếu tố | PA-A | PA-B | PA-C | Ghi chú |
|--------|------|------|------|---------|
| **Hiệu năng** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | PA-C vượt trội |
| **Độ tin cậy** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | PA-B đã kiểm chứng |
| **Chi phí** | 10 tỷ | 15 tỷ | 8 tỷ | PA-C rẻ nhất |
| **Thời gian** | 5 năm | 3 năm | 7 năm | PA-B nhanh nhất |
| **Rủi ro** | MEDIUM | LOW | HIGH | PA-B an toàn |
| **Tổng điểm** | 3.2 | 3.5 | 3.0 | PA-B thắng |
| **Giá trị KT-KT** | 0.32 | 0.23 | 0.38 | PA-C hiệu quả |
```

**Khuyến nghị:** Chọn PA-B nếu ưu tiên độ tin cậy và thời gian, hoặc PA-C nếu ưu tiên chi phí (nhưng cần quản lý rủi ro kỹ).

## Tích hợp với các skill khác

- **engineering-quiz-generator** → Tạo câu hỏi về VDI 2225
- **feynman-engineering** → Giải thích quyết định cho người không chuyên
- **design-review-mentor** → Review toàn bộ quá trình đánh giá
- **project-progress-tracker** → Theo dõi thực hiện phương án được chọn

## References

Đọc thêm chi tiết tại:
- `references/vdi-2225.md` - Phương pháp VDI 2225 chi tiết
- `references/pugh-matrix.md` - Phương pháp Pugh Matrix
- `references/cost-benefit.md` - Phân tích chi phí-lợi ích
- `references/criteria.md` - Hướng dẫn chấm điểm 7 tiêu chí
- `references/templates.md` - Templates báo cáo và ma trận
- `references/defense-considerations.md` - Lưu ý đặc biệt cho QP/AN
- `references/examples.md` - Ví dụ đầy đủ: Lựa chọn radar

## Scripts

- `scripts/calculate_scores.py` - Tính toán tự động điểm số và xếp hạng
- `scripts/sensitivity_analysis.py` - Phân tích độ nhạy
- `scripts/generate_report.py` - Tạo báo cáo PDF/Word
