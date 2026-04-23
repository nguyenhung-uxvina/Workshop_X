---
created: 2026-03-05
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/technology, #topic/systems-thinking]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Analyst Trap — Vault Growth khác Thinking Growth]], [[Shifting the Burden Archetype]], [[Taste — Phán Đoán Thẩm Mỹ Trong Ghi Chú]]
---

# VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness

## Ý Tưởng Cốt Lõi
VDI 2225 score chỉ là một con số. Sensitivity analysis — thay đổi trọng số ±20-30% và xem concept winner có thay đổi không — mới là cách kiểm tra decision có vững vàng không. Nếu winner thay đổi khi thay đổi trọng số → decision yếu.

## Giải Thích Chi Tiết
- BB-01: V1 Baseline (90.8%) thắng V2 (73.5%), V4 (65.5%). Sensitivity: V1 vẫn thắng khi cost ±30%, range ±20% → **robust decision**
- VN-AST: V5 Hybrid (93.8%) thắng V1 HDPE (85.0%). V5 lead là 8.8% — khá rộng, nhưng cost score chỉ 3/4 (điểm yếu)
- Quy tắc: Nếu winner lead < 5% → cần xem xét lại tiêu chí hoặc thử thêm concepts

**Trap cần tránh:** Chọn trọng số để concept mình thích thắng → confirmation bias. Trọng số phải được chọn TRƯỚC khi chấm điểm, không phải sau.

## Tại Sao Điều Này Quan Trọng?
VDI 2225 không phải máy tính ra đáp án đúng. Nó là framework để **tổ chức judgment**. Sensitivity analysis là bước kiểm tra: judgment của mình có consistent không?

## Liên Kết
- [[Phán đoán không thể uỷ thác cho AI]] — AI có thể tính VDI 2225 score, nhưng chọn trọng số là judgment task
- [[Analyst Trap — Vault Growth khác Thinking Growth]] — Làm VDI 2225 nhiều lần không thay thế cho việc build prototype để validate
- [[Shifting the Burden Archetype]] — Sensitivity analysis phơi bày "fix triệu chứng": trọng số thay đổi nhỏ mà winner đảo chiều = decision dựa trên assumption yếu, không phải insight thật
- [[Taste — Phán Đoán Thẩm Mỹ Trong Ghi Chú]] — Chọn trọng số cho tiêu chí là judgment call, không có công thức — cần taste để cân bằng

## Nguồn Gốc
- BB-01 LOMAH vdi-2225-evaluation.md (Phase 2)
- VN-AST-MSL-001 Comprehensive Analysis
- Pahl-Beitz 6.5.2: Evaluation using VDI 2225
