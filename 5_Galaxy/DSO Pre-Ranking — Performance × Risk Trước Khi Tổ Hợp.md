---
created: 2026-03-26
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #pahl, #three-laws]
links: [[VDI 2225 — Sensitivity Analysis Kiem Tra Robustness]], [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]], [[Phán đoán không thể uỷ thác cho AI]]
---

# DSO Pre-Ranking — Performance × Risk Trước Khi Tổ Hợp

## Ý Tưởng Cốt Lõi

Bảng hình thái (morphological matrix) với 5 sub-function × 4 working principles = 1.024 tổ hợp. Không thể đánh giá hết. DSO (Direct Synthesis Optimization) giải quyết bằng cách chấm điểm TỪNG working principle trước khi tổ hợp: Performance (1-4) × Risk (1-4) = DSO Score (1-16). Sắp xếp tốt nhất bên TRÁI → vẽ đường qua cột trái = concept mạnh nhất.

## Giải Thích Chi Tiết

DSO biến bài toán tổ hợp thành bài toán xếp hạng. Thay vì tạo tất cả tổ hợp rồi đánh giá, chỉ cần:
1. Mỗi WP được chấm Performance (đóng góp cho sản phẩm) và Risk (mức chắc chắn kỹ thuật)
2. DSO ≥ 12: Strong (ưu tiên). DSO 6-11: Viable (dùng nếu cần). DSO ≤ 5: Weak (tránh)
3. Rearrange bảng: tốt nhất bên trái → tổ hợp "left path" = concept mạnh tự nhiên

Ưu điểm: giảm 90% công đánh giá. Nhược: vẫn cần kiểm tra compatibility giữa các WP — DSO cao riêng lẻ không đảm bảo tổ hợp tốt.

## Tại Sao Điều Này Quan Trọng?

Solo CEO không có thời gian đánh giá 1.000 tổ hợp. DSO cho phép tổng hợp concept trực tiếp từ bảng đã sắp xếp — biến Phase 2 từ tìm kiếm mù sang tìm kiếm có hướng.

## Familiarity Bias Override

Drill A1 (Practice-ICDM, Week 1) chứng minh: DSO không chỉ giảm tổ hợp — nó trực tiếp override familiarity bias. Khi chấm P×R systematic, working principles quen thuộc (đã dùng ở dự án trước) KHÔNG tự động xếp cao. Ngược lại, WP lạ nhưng high-performance + low-risk vươn lên top.

Không có DSO, kỹ sư mặc định chọn WP quen — confirmation bias ngụy trang thành "kinh nghiệm." DSO buộc phải tách riêng Performance (đóng góp thật) khỏi Familiarity (cảm giác an toàn giả).

**Hệ quả cho solo CEO:** Khi không có đồng nghiệp challenge, DSO là cơ chế tự-debiasing duy nhất trong Phase 2.

## Liên Kết

- [[VDI 2225 — Sensitivity Analysis Kiem Tra Robustness]] — DSO feeds VDI 2225 (pre-filter trước deep analysis)
- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — SF quyết định nên được DSO đầu tiên
- [[Phán đoán không thể uỷ thác cho AI]] — DSO là cơ chế judgment-preserving: CEO vẫn chấm, nhưng systematic scoring ngăn bias

## Nguồn Gốc

Hari & Weiss, ICDM Toolkit (Technion/RAFAEL). NLM notebook: icdm. Gặp 2026-03-26 qua /research-to-skill UPGRADE pipeline.
