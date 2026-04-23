---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/systems-thinking, #three-laws, #meta]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Shifting the Burden Archetype]], [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]]
---

## Ý Tưởng Cốt Lõi

Agent capability = Connection (MCP) × Knowledge (Skills) × Reasoning (Orchestrator). Ba thành phần nhân nhau — thiếu bất kỳ yếu tố nào thì tích bằng 0. Đây là mô hình HOK: **H**ands (đôi tay — MCP kết nối tools), **O**rchestrator (bộ não — reasoning + context), **K**nowledge (ký ức cơ bắp — procedural knowledge trong SKILL.md).

## Giải Thích Chi Tiết

MCP là giao thức chuẩn hóa kết nối AI với tools bên ngoài (client-server, JSON). Skills là gói kiến thức thủ tục — hướng dẫn agent CÁCH dùng tools: gọi cái nào, theo thứ tự nào, trong ngữ cảnh nào. Agent orchestrator dùng reasoning để phối hợp cả hai.

Sai lầm phổ biến: đánh đồng "kết nối thành công" với "sử dụng hiệu quả". Cho agent 50 MCP tools kết nối hoàn hảo nhưng không có Skills = thợ sửa ống nước có 50 dụng cụ mà không có kinh nghiệm.

Phản trực giác: thêm tools có thể GIẢM performance — orchestrator bị overwhelm bởi lựa chọn khi không có Skills hướng dẫn chọn lọc.

## Tại Sao Điều Này Quan Trọng?

Workshop X có 30 SKILL.md (Knowledge layer mạnh) nhưng chưa formal audit mapping giữa MCP servers và Skills. HOK model giúp kiểm tra: mỗi MCP server có matching SKILL.md không? Mỗi skill có leverage đúng tools không?

Áp dụng trực tiếp: Gate rule "no new MCP without SKILL" ngăn [[Shifting the Burden Archetype]] — chỉ thêm connection mà bỏ qua usage.

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — Orchestrator layer chính là nơi judgment hoạt động. AI có tools + skills, nhưng judgment khi nào dùng gì vẫn thuộc CEO.
- [[Shifting the Burden Archetype]] — Tool Accumulation Trap là biến thể: symptomatic solution (thêm MCP) thay vì fundamental solution (viết SKILL.md).
- [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]] — Skills compound judgment, tools chỉ accumulate capability. dJ/dt nằm ở Knowledge layer, không ở Wiring layer.

## Nguồn Gốc

NLM notebook `mcp-agent` — "Sức Mạnh Kết Hợp: Giao Thức MCP và Kỹ Năng Agent", phân tích qua /learning --mode full, 2026-03-08.
