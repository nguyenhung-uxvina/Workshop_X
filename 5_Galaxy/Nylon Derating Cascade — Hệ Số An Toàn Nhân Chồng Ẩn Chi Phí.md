---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/engineering, #pahl, #product, #warning, #three-laws]
links: [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Hybrid Mooring FEM Trap — Trộn Vật Liệu Buộc Phân Tích Phức Tạp]]
---

## Ý Tưởng Cốt Lõi

Khi thiết kế với vật liệu có nhiều yếu tố giảm cường độ (derating), mỗi yếu tố trông nhỏ riêng lẻ nhưng **nhân chồng lên nhau** tạo ra hệ số an toàn thực tế lớn hơn nhiều so với con số danh nghĩa. Với nylon mooring: SF danh nghĩa = 3.0, nhưng SF thực tế = **4.41×**.

## Giải Thích Chi Tiết

Nylon mooring rope phải chịu 3 lớp derating chồng nhau:

| Yếu tố | Hệ số | Nguồn tiêu chuẩn |
|---------|--------|------------------|
| Safety Factor cơ bản | × 3.0 | UFC 4-159-03 |
| Wet strength loss | ÷ 0.85 (= ×1.18) | UFC 4-159-03 |
| Aging/wear factor | ÷ 0.80 (= ×1.25) | IACS Rec 10 |
| **Tổng hợp (indoor/shade)** | **× 4.41** | |
| UV degradation (tropical, year 1) | ÷ 0.72 (= ×1.39) | Shamey 2003 + ACS 2023 |
| **Tổng hợp (tropical outdoor, year 1)** | **× 6.13** | |

Kỹ sư nghe "safety factor 3" → nghĩ cần MBL = 3× load. Thực tế cần MBL = **4.41× load** (indoor) hoặc **6.13× load** (tropical outdoor) — tăng 47-104% so với nhận thức ban đầu.

**UV là yếu tố phá hoại lớn nhất:** Nylon không có UV stabilizer mất **28% cường độ kéo trong năm đầu tiên** ở điều kiện nhiệt đới (30°C, UV cao). Nylon có UV stabilizer + polyurethane coating kéo dài tuổi thọ từ 18 lên 36 tháng. **Quy tắc thay thế: 12-18 tháng (không UV stabilizer), 18-36 tháng (có UV stabilizer).**

**Cascade effect:** Mỗi derating factor riêng lẻ trông "nhỏ" (15% wet, 20% aging). Nhưng vì chúng **nhân** chứ không **cộng**, kết quả compound lớn hơn trực giác. Giống như lãi kép ngược — mỗi lớp "ăn" vào cường độ còn lại.

Nguyên tắc tổng quát: **Bất kỳ khi nào thấy nhiều derating factors riêng lẻ, NHÂN chúng trước khi đánh giá.** Cộng (15% + 20% = 35%) cho kết quả sai — nhân (1/0.85 × 1/0.80 = 1.47×) cho kết quả đúng.

## Tại Sao Điều Này Quan Trọng?

- **Budget impact:** Nylon rope đắt hơn 47% so với tính toán "SF=3" ban đầu
- **Design space:** Nếu không derating đúng → chọn rope nhỏ hơn cần thiết → failure mode ẩn
- **Tổng quát hóa:** Pattern này xuất hiện ở mọi vật liệu có nhiều derating conditions (composite, rubber, adhesive joints...)
- **Sensitivity test:** Dùng [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] để kiểm tra: nếu thay đổi 1 derating factor → kết quả thay đổi bao nhiêu?

## Liên Kết

- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — dùng giá trị conservative (derating đầy đủ) thay vì optimistic
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — sensitivity analysis cho compound derating
- [[Hybrid Mooring FEM Trap — Trộn Vật Liệu Buộc Phân Tích Phức Tạp]] — context cụ thể nơi derating cascade xuất hiện

## Nguồn Gốc

- UFC 4-159-03 Mooring Design (DoD) — Tier S: wet strength reduction 15%
- IACS Rec 10 — Tier S: polyamide aging factor 20%
- ABS Guidance Notes on Fiber Rope for Offshore Mooring — Tier S
- Shamey 2003 (Wiley) — Review of degradation of nylon 6,6: UV primary driver
- ACS Applied Polymer Materials 2023 — Environmental degradation of nylon fishing line fibers
- Phát hiện qua /research v2.1 pipeline, cross-validation step, 2026-03-08. UV data added Session 37 (HELM gap #5)
