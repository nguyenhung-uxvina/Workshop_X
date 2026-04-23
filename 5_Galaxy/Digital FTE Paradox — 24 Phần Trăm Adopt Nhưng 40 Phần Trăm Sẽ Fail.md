---
created: 2026-04-15
updated: 2026-04-15
type: permanent-note
tags: [#type/permanent-note, #acq, #warning]
links: [[AI Dependency Spiral (R3)]], [[Shifting the Burden Archetype]], [[Agentic Enterprise — Khi AI Từ Trả Lời Sang Hành Động]]
---

## Ý Tưởng Cốt Lõi

Agentic AI trong manufacturing tạo ra "Digital Full-Time Equivalents" (FTEs) — agents tự sense, reason, negotiate, decide, act. Deloitte dự đoán adoption tăng 4x (6%→24%) trong 2026. McKinsey estimate $2.6-4.4T value tiềm năng. Nhưng Gartner cảnh báo: >40% dự án sẽ fail by 2027 vì legacy system incompatibility. Paradox: càng nhiều adopt, càng nhiều fail.

## Giải Thích Chi Tiết

Tại sao paradox xảy ra: Digital FTE nghe hấp dẫn → management quyết định adopt → triển khai trên legacy systems chưa sẵn sàng → agent không integrate được với MES/ERP cũ → project fail → nhưng board pressure "đối thủ đang dùng AI" → adopt thêm → fail thêm.

Đây là [[Shifting the Burden Archetype]] ở enterprise level: fundamental solution = redesign processes + build data foundation (L6). Symptomatic solution = deploy agentic AI agent (L12 tool change). Delay effect = 12-18 tháng trước khi fail visible.

Cách thoát: validate process trước (WX approach), KHÔNG deploy agent trên quy trình chưa validated. 1 agent dùng tốt > 5 agents trên legacy broken.

## Tại Sao Điều Này Quan Trọng?

WX đang evaluate OpenClaw cho Phase 4. Insight này = guard rail: KHÔNG deploy OpenClaw trước khi WX-OS CSV process validated 3 tháng. Nếu /ops data quality OK + compound learning hoạt động → deploy trên nền validated. Nếu không → trong 40% fail.

## Liên Kết

- [[AI Dependency Spiral (R3)]] — Digital FTE fail → team vẫn phụ thuộc → spiral
- [[Shifting the Burden Archetype]] — agent deployment = symptomatic fix for broken process
- [[Agentic Enterprise — Khi AI Từ Trả Lời Sang Hành Động]] — same concept, WX-specific warning thêm

## Nguồn Gốc

Research pipeline "AI-First Manufacturing" (2026-04-15). Sources: Deloitte "Agentic AI in Manufacturing" + "State of AI 2026", McKinsey "Scaling Agentic AI for Operational Breakthroughs", Gartner AI agent forecast. NLM notebook: ai-mfg.
