---
created: 2026-03-16
updated: 2026-03-16
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #warning, #acq]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Shifting the Burden Archetype]]
---

# dAI/dt >> dH/dt — Khi AI Nhanh Hơn Con Người Nghiệm Thu

## Ý Tưởng Cốt Lõi

AI tự tối ưu nhanh hơn con người validate **hàng trăm lần**. Hệ quả: vai trò con người phải shift từ "đánh giá từng bước" sang "thiết kế rubric ban đầu + nghiệm thu cuối cùng." Nếu không shift → con người thành bottleneck hoặc bị bỏ qua.

## Giải Thích Chi Tiết

Autoresearch chạy hundreds of iterations overnight. Con người không thể review mỗi iteration. Hai failure modes:

1. **Con người cố review hết** → bottleneck → AI chờ → mất lợi thế tốc độ → quay về manual workflow
2. **Con người bỏ review** → blind trust → AI optimize sai metric → output "đạt điểm" nhưng vô nghĩa (overfitting)

**Giải pháp đúng:** Con người invest upfront vào rubric design (binary eval criteria). AI iterate tự do. Con người chỉ validate ở gate cuối (sampling, not exhaustive review).

Parallel với CHIẾN LƯỢC: COD framework đã encode logic này — C = thiết kế criteria, O = AI thực thi, D = skip. Nhưng trong thực tế CEO vẫn review mỗi AI output thay vì trust eval criteria.

## Tại Sao Điều Này Quan Trọng?

Workshop X CEO 25h/week. Nếu 37 skills mỗi cái cần 30min/week review = 18.5h chỉ để review AI output. Không bền. Autoresearch + good evals = CEO chỉ cần 30min/week review top-level results, không phải từng output.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — judgment shift: từ "đánh giá output" sang "đánh giá evaluation criteria"
- [[Shifting the Burden Archetype]] — nếu AI iterate nhanh hơn con người review → burden shift sang "trust the eval" → eval quality trở thành single point of failure

## Nguồn Gốc

- NLM: "Claude Code và Karpathy Autoresearch" — Rate-of-change dynamics
- Ngày gặp: 2026-03-16
