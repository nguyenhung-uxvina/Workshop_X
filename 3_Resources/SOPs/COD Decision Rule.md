---
created: 2026-03-05
updated: 2026-03-05
type: sop
tags: [#type/sop, #topic/ai-tools, #topic/productivity]
---

# 🐟 COD Decision Rule — Quyết Định Layer Trước Mỗi Task

> *Nguồn: Claude Code V2 Power User Guide (Hamza Khalid / Mastery Guide)*

## Mục Đích

Phân loại MỌII task trước khi thực hiện để tránh **Opus Trap** (trả $2+ cho thứ chỉ cần $0.10).

---

## 3 Câu Hỏi COD

```
┌─────────────────────────────────────────────────────────────┐
│  C — CORE                                                    │
│  "Thứ này cần PHÁN ĐOÁN của tôi không?"                     │
│  → Nếu CÓ: Opus ($2+/session) + bạn tham gia trực tiếp     │
├─────────────────────────────────────────────────────────────┤
│  O — OFFLOAD                                                 │
│  "Tôi có thể mô tả yêu cầu trong 3 câu không?"              │
│  → Nếu CÓ: Subagent Haiku ($0.10) / Sonnet ($0.50)         │
├─────────────────────────────────────────────────────────────┤
│  D — DEFAULT                                                 │
│  "Thứ này có nên xảy ra TỰ ĐỘNG mỗi lần không?"             │
│  → Nếu CÓ: Hooks ($0 — không tốn token)                    │
└─────────────────────────────────────────────────────────────┘
```

## Cảnh Báo: Opus Trap

> [!WARNING]
> Nếu **C > 60%** tổng số tasks của bạn → Bạn đang ở trong **Opus Trap**.
> Redesign ngay ít nhất 2 task thành O hoặc D.

## Ví Dụ Phân Loại

| Task | Layer | Lý do |
|------|-------|--------|
| Quyết định kiến trúc hệ thống | C (Core) | Cần phán đoán, context sâu |
| Viết unit tests cho UserAuth class | O (Offload) | Có thể mô tả rõ trong 3 câu |
| Format code sau mỗi lần edit | D (Default) | Nên xảy ra tự động → Hook |
| PR security review | D (Default) | Nên xảy ra mỗi lần → Hook CI/CD |
| Tóm tắt error log | O (Offload) | Pipe: `cat error.log \| claude -p "..."` |

---

*SOP | [[3_Resources/Tools & Software/Claude Code V2 Mastery Guide]] | Thuộc hệ thống IPARAG*
