---
created: 2026-03-05
updated: 2026-03-05
type: area
status: active
tags: [#type/area, #area/ai-tools]
---

# 🤖 AI & Công Cụ Lập Trình — Dashboard

> **Định nghĩa Area:** Làm chủ và duy trì các công cụ AI, lập trình, tự động hóa phục vụ công việc và tư duy — liên tục cập nhật không có điểm dừng.
> **Tiêu chuẩn "khỏe mạnh":** Claude Code Dependency Ratio C < 40%. Mỗi tuần có ít nhất 1 config được cải thiện hoặc 1 hook/slash command mới.

---

## 🎯 Projects Đang Chạy

- [[1_Projects/Mastering Claude Code V2/_Project_Brief]]

---

## 📋 Recurring Tasks

- [ ] **Hàng tuần:** Chạy `/cost` sau mỗi session, track trend
- [ ] **Hàng tuần:** Weekly Review Checklist Claude Code (7 câu hỏi)
- [ ] **Hàng tháng:** Kiểm tra Context Drift — CLAUDE.md còn accurate không?
- [ ] **Hàng tháng:** Review MCP servers — còn dùng hết không? Cắt bớt nếu > 10

---

## 🌌 Galaxy Notes Liên Quan

- [[5_Galaxy/Context vs Capability — Sự Khác Biệt]]
- [[5_Galaxy/Phán đoán không thể uỷ thác cho AI]]

---

## 📚 Resources Liên Quan

- [[3_Resources/Tools & Software/Claude Code V2 Mastery Guide]]
- [[3_Resources/SOPs/COD Decision Rule]]
- [[3_Resources/SOPs/FUEL Context Protocol]]

---

## 📏 Metrics Theo Dõi

| Metric | Target | Hiện tại |
|--------|--------|----------|
| Core Layer % (C) | < 40% | — |
| Subagent first-attempt acceptance | > 70% | — |
| MCP servers installed | < 10 | — |
| Hooks installed | ≥ 3 (PostToolUse, PreCompact, PreToolUse) | 5 (commit-gate, python-lint, notify, context-shield, quality-gate) |
| Avg cost per session | Giảm dần | — |

---

## 🔧 Config Hiện Tại

```
AUTOCOMPACT_PCT = 80
MAX_OUTPUT_TOKENS = 64000
SUBAGENT_MODEL = haiku
```

---

## 📔 Nhật Ký

### Tháng 3/2026
- 2026-03-05: Bắt đầu 8-week Claude Code V2 roadmap. Đang ở Week 1 (Foundation).

---

*Area Dashboard | Thuộc hệ thống IPARAG*
