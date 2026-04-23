---
created: 2026-04-12
updated: 2026-04-12
type: permanent-note
tags: [#type/permanent-note, #pahl, #product, #three-laws]
links: [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]], [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]]
---

# Filter Before Score — AD Lọc Coupling Trước Khi VDI 2225 Chấm Điểm

## Ý Tưởng Cốt Lõi
Design matrix của Axiomatic Design ({FR}=[A]×{DP}) phải chạy TRƯỚC VDI 2225 evaluation, không phải thay thế. AD lọc ra coupled designs sẽ fail trong prototyping. VDI 2225 chấm điểm các alternatives đã uncoupled/decoupled. Bỏ qua bước lọc = có thể chọn concept rẻ nhất nhưng coupled → tốn gấp 10× debugging.

## Giải Thích Chi Tiết

### Ba loại thiết kế theo ma trận coupling:
- **Uncoupled (ma trận chéo):** Mỗi DP ảnh hưởng đúng 1 FR. Lý tưởng. Ví dụ: Motor az riêng biệt + motor el riêng biệt trên VN-MGM-V5 = thay đổi tốc độ az không ảnh hưởng el.
- **Decoupled (ma trận tam giác):** DP ảnh hưởng nhiều FR, nhưng OK nếu tuning theo đúng thứ tự (DP₁ trước, DP₂ sau). Ví dụ: Worm gearbox ratio (DP₁) ảnh hưởng cả speed (FR₁) và backlash (FR₂), nhưng chọn ratio trước → tune backlash sau = OK.
- **Coupled (ma trận đầy):** Thay đổi bất kỳ DP nào đều ảnh hưởng tất cả FR. Vòng lặp sửa-hỏng vô tận. Ví dụ: VN-MGM-V5 Concept C — ball screw vừa là actuator (FR: elevation) vừa phải back-driveable (FR: manual fallback). 2 FR coupled qua 1 DP → show-stopper đã phát hiện trong firming-up.

### Tại sao VDI 2225 không thấy coupling:
VDI 2225 chấm từng criterion RIÊNG RẺ (cost, performance, reliability...) rồi tổng hợp. Nó KHÔNG check: "nếu tôi thay đổi DP để improve criterion A, criterion B có bị ảnh hưởng không?". Coupling là quan hệ GIỮA criteria mà VDI 2225 giả định independent.

### Cách áp dụng thực tế (Excel, 30 phút):
1. List các FR chính (từ requirements list, top 5-8)
2. List các DP chính (từ concept variant)
3. Fill ma trận: X nếu DP₁ ảnh hưởng FR₁, trống nếu không
4. Check hình dạng: chéo = uncoupled, tam giác = decoupled (document thứ tự), đầy = coupled (cần redesign hoặc eliminate)

## Tại Sao Điều Này Quan Trọng?
Session 56 VN-MGM-V5 firming-up phát hiện Concept C show-stopper (ball screw back-drive 573N = 11× target). Đây chính là coupled design — 1 DP (ball screw) phải satisfy 2 FR (elevation actuation + manual back-drive) mà toán học chứng minh không thể cùng lúc. Nếu có AD matrix TRƯỚC firming-up, show-stopper này phát hiện trong 5 phút thay vì 2 giờ calc.

**Pipeline change:** Thêm AD coupling check vào helix-p2-develop, giữa BB_Concept_Variants (morpho output) và BC_Pugh_Screening. Quick Excel matrix, 30 phút, lọc coupled concepts trước khi đầu tư firming-up effort.

## Liên Kết
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — VDI 2225 chấm điểm, AD lọc coupling. Hai công cụ bổ sung, không thay thế. "Golden Rule: Balanced 75% > Unbalanced 85%" = Independence Axiom nói bằng ngôn ngữ khác.
- [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]] — V-Model macro-cycle tạo checkpoints nơi AD matrix nên được review: system design (left V) = nơi coupling quyết định architecture.
- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — Uncoupled design = reliable design. Coupled = fragile dù trên giấy "chính xác hơn". Cùng triết lý: robustness > optimization.

## Nguồn Gốc
- "A Comparison of Educational Perspectives on VDI 2221 and Axiomatic Design" — ScienceDirect, 2025 (Kröp et al., ISM conference)
- Nam Pyo Suh, "The Principles of Design" (MIT, 1990) — via NLM synthesis
- WX validation: VN-MGM-V5 Concept C show-stopper = coupled design example
- Extracted: 2026-04-12 từ /learning --mode quick "AD Independence Axiom"
