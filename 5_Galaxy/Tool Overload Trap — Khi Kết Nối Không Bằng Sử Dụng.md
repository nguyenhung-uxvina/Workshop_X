---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/systems-thinking, #warning, #sys]
links: [[Shifting the Burden Archetype]], [[AI Dependency Spiral (R3)]], [[HOK Law — Tay Não Ký Ức Của Agent]]
---

## Ý Tưởng Cốt Lõi

Cho agent 50 MCP tools kết nối hoàn hảo nhưng không có SKILL.md hướng dẫn = hiệu suất kém. Đây là biến thể của [[Shifting the Burden Archetype]]: giải quyết vấn đề kết nối (connection) mà bỏ qua vấn đề sử dụng (usage) — symptom relief thay vì root cause fix.

## Giải Thích Chi Tiết

Tool Overload Trap hoạt động theo vòng lặp:

1. Agent output kém → "cần thêm tools!" (phản xạ tự nhiên)
2. Thêm MCP server → agent có thêm lựa chọn
3. Orchestrator không biết chọn tool nào (vì không có skill hướng dẫn) → output vẫn kém hoặc tệ hơn
4. "Cần thêm tools nữa!" → quay lại bước 1

**Symptomatic solution:** Thêm MCP tools (nhanh, dễ thấy, cho cảm giác tiến bộ)
**Fundamental solution:** Viết SKILL.md chất lượng (chậm, invisible, đòi hỏi domain expertise)
**Side effect:** Tool overload khiến orchestrator bị "choice paralysis" — càng nhiều tool, càng khó chọn đúng

Pattern này không chỉ ở AI — nó xuất hiện ở mọi quy mô:
- Cá nhân: install 50 VS Code extensions mà dùng có 5
- Tổ chức: mua 10 SaaS tools mà workflow vẫn manual
- Workshop X risk: thêm MCP server (Hyperbrowser, filesystem) mà không viết skill kèm

## Tại Sao Điều Này Quan Trọng?

Cảnh báo thực tiễn cho Workshop X: Gate rule **"no new MCP without SKILL"** là counter-strategy trực tiếp. Nghe bureaucratic nhưng thực tế tăng throughput vì:
- Buộc phải suy nghĩ "dùng tool này để làm gì?" trước khi kết nối
- Giảm noise trong orchestrator → chọn tool chính xác hơn
- Tạo documentation tự động (SKILL.md = usage guide cho mỗi tool)

## Liên Kết

- [[Shifting the Burden Archetype]] — Tool Overload là instance cụ thể: symptomatic = thêm connection, fundamental = xây knowledge.
- [[AI Dependency Spiral (R3)]] — Thêm tools mà không thêm skills làm tăng dependency vào AI orchestrator thay vì tăng CEO judgment.
- [[HOK Law — Tay Não Ký Ức Của Agent]] — Tool Overload xảy ra khi đầu tư Hands (H) mà bỏ qua Knowledge (K). HOK model giúp phát hiện sớm.

## Nguồn Gốc

NLM notebook `mcp-agent` — "Sức Mạnh Kết Hợp: Giao Thức MCP và Kỹ Năng Agent", phân tích qua /learning --mode full, 2026-03-08.
