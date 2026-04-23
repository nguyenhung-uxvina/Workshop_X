---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #ceo, #meta, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[HOK Law — Tay Não Ký Ức Của Agent]], [[Khi Huấn Luyện Thực Không Hợp Pháp, Mô Phỏng Là Độc Quyền]]
---

# Operational Envelope Law — Agent Tự Chủ Trong Phạm Vi, CEO Thiết Lập Biên

## Ý Tưởng Cốt Lõi

Mô hình tối ưu cho AI agent trong thiết kế kỹ thuật không phải "CEO giám sát liên tục" cũng không phải "agent tự do hoàn toàn" — mà là **CEO thiết lập operational envelope (biên hoạt động) cho từng block, agent tự chủ hoàn toàn bên trong biên đó**. CEO chỉ can thiệp tại ranh giới giữa các block.

## Giải Thích Chi Tiết

Ba nguồn bằng chứng hội tụ:

1. **Microsoft + Schneider Electric (Hannover Messe 2026):** Nền tảng agentic manufacturing dùng "operational envelopes" — ranh giới cứng định nghĩa agent được làm gì tự động vs cần human approval. Kèm "explainability engine" và audit trail bất biến. Kết quả: 15-30% giảm downtime, 10-20% cải thiện hiệu suất năng lượng.

2. **Anthropic Long-Running Agent Harness:** Kiến trúc Initializer Agent → state ledger → Incremental Agent. Mỗi session agent đọc ledger, tiến triển trong phạm vi, cập nhật ledger. Human review tại boundary.

3. **Cambridge Text-to-CAD study:** Pattern "askBack" (agent thường xuyên dừng hỏi human) có tỷ lệ thành công THẤP NHẤT — vì ngắt quãng liên tục gây "semantic distraction" làm lệch hướng generation.

Tổng hợp: **liên tục hỏi = hại. Không hỏi bao giờ = nguy hiểm. Hỏi tại ranh giới block = tối ưu.**

## Tại Sao Điều Này Quan Trọng?

Xác nhận và tinh chỉnh quy tắc "One Block Per Turn" của Workshop X:
- **Đúng:** CEO checkpoint tại ranh giới block (B0→BA→BB→BC→BD→BE)
- **Sai nếu:** CEO can thiệp giữa block (askBack pattern) → giảm chất lượng output
- **Sai nếu:** Bỏ CEO checkpoint giữa blocks → cascading hallucination không kiểm soát

**Operational Envelope cho HELIX blocks:**
- B0 Preflight: envelope = "verify inputs exist, flag missing, DO NOT change scope"
- BB Search: envelope = "explore WPs across 3 domains, DO NOT eliminate without scoring"
- BD Risk: envelope = "identify coupling + failure modes, DO NOT recommend solution"
- BE Select: envelope = NONE — CEO judgment only, agent presents data

Rule: Khi thiết kế agent pipeline mới, viết operational envelope TRƯỚC prompt.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — CEO judgment = thiết lập envelope, không phải vi mô manage từng bước
- [[HOK Law — Tay Não Ký Ức Của Agent]] — Agent Skills (progressive disclosure) + state ledger = HOK implementation
- [[Khi Huấn Luyện Thực Không Hợp Pháp, Mô Phỏng Là Độc Quyền]] — operational envelope cho sim design agent: "model sensor degradation, DO NOT assume Western specs"

## Nguồn Gốc

- Microsoft + Schneider Electric "Governed Agentic Manufacturing Platform" (Tier A, Hannover 2026)
- Anthropic "Effective Harnesses for Long-Running Agents" (Tier A)
- Cambridge "From Text to Design: LLM Agents for CAD" (Tier A) — askBack = worst pattern
- Research update "Multi-Agent Collaborative Conceptual Design," 2026-04-22
