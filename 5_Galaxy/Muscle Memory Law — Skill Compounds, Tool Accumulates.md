---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/knowledge-management, #three-laws, #meta]
links: [[Vault = Graveyard nếu không có Harvest]], [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]], [[HOK Law — Tay Não Ký Ức Của Agent]]
---

## Ý Tưởng Cốt Lõi

Procedural knowledge (SKILL.md) **compounds** theo thời gian, còn tools (MCP servers) chỉ **accumulates**. Compound tạo giá trị theo hàm mũ, accumulate tạo giá trị tuyến tính. Đầu tư vào Knowledge layer luôn có ROI cao hơn Wiring layer.

## Giải Thích Chi Tiết

Khi viết 1 SKILL.md chất lượng, nó không chỉ giải quyết task hiện tại — nó encode cách tư duy (how-to) mà agent dùng lại hàng trăm lần. Skill mới xây trên skill cũ: `/research` dùng `/nlm` + `/yt-search`, `/learning` orchestrate `/analyze` + `/cycle` + `/teach`. Đây là compound — mỗi skill mới leverage toàn bộ stack.

Ngược lại, thêm 1 MCP server chỉ thêm 1 connection. Server thứ 50 không mạnh hơn server thứ 5 — nó chỉ thêm một khả năng riêng lẻ, không leverage các server khác.

Analogy: Skills giống "ký ức cơ bắp" (muscle memory) — một khi đã encode, nó hoạt động tự động và cải thiện theo thời gian. Tools giống dụng cụ trong hộp — có thêm dụng cụ mà không có kinh nghiệm thì hộp chỉ nặng hơn.

## Tại Sao Điều Này Quan Trọng?

Workshop X hiện có 30 skills — đây là compound asset lớn nhất của hệ thống AI. Bảo vệ và cải thiện chúng (maintenance, quality audit) có giá trị cao hơn thêm skill mới hoặc MCP server mới.

Viết SKILL.md chậm và invisible — dễ bị bỏ qua khi áp lực deliver. Nhưng đây chính là nơi dJ/dt xảy ra: judgment tích lũy trong cách viết skill, không trong cách kết nối tool.

## Liên Kết

- [[Vault = Graveyard nếu không có Harvest]] — Skills mà không dùng = dead knowledge. Skill library cần harvest cycle giống Galaxy.
- [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]] — Viết skill = đầu tư vào dJ/dt. Thêm tool = đầu tư vào dD/dt. Compound law đòi hỏi dJ > dD.
- [[HOK Law — Tay Não Ký Ức Của Agent]] — Muscle Memory Law giải thích TẠI SAO Knowledge layer quan trọng hơn Wiring layer trong mô hình HOK.

## Nguồn Gốc

NLM notebook `mcp-agent` — "Sức Mạnh Kết Hợp: Giao Thức MCP và Kỹ Năng Agent", phân tích qua /learning --mode full, 2026-03-08.
