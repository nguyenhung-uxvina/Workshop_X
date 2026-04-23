---
created: 2026-03-05
updated: 2026-03-05
type: project
status: active
deadline: 2026-04-16
area: "[[2_Areas/AI & Công Cụ Lập Trình/_Area_Dashboard]]"
tags: [#type/project, #status/active]
---

# 🎯 Mastering Claude Code V2 — 8-Week Roadmap

## 📋 Tổng Quan

| | |
|--|--|
| **Bắt đầu** | 2026-03-05 |
| **Deadline** | 2026-04-16 (8 tuần) |
| **Area** | [[2_Areas/AI & Công Cụ Lập Trình/_Area_Dashboard]] |
| **Trạng thái** | 🟢 Active |

## 🏁 Tiêu Chí Hoàn Thành

> Dự án HOÀN THÀNH khi:
> - Core Layer % C < 40% (đang ở đâu đó gần 100%)
> - Đã cài: PostToolUse + PreCompact + PreToolUse hooks
> - Đã tạo ≥ 5 slash commands cho các task lặp lại nhất
> - Subagent first-attempt acceptance > 70%
> - Đã deploy headless Claude vào ít nhất 1 CI/CD pipeline

## 📊 Roadmap 8 Tuần

| Tuần | Mục tiêu | Trạng thái |
|------|----------|------------|
| **1-2** | Foundation: CLAUDE.md hierarchy, Shortcuts, FUEL | ⬜ |
| **3** | Slash Commands: 3 commands cho task lặp lại nhất | ⬜ |
| **4-5** | Hooks: PostToolUse → PreCompact → PreToolUse | ⬜ |
| **5-6** | MCP: GitHub + 1 domain-specific (< 10 total) | ⬜ |
| **6-7** | Subagents: 5 tasks, track acceptance rate | ⬜ |
| **7** | Skills: 2 auto-activating skills | ⬜ |
| **7-8** | Agent Teams: 1 real multi-file feature | ⬜ |
| **8** | CI/CD: Headless Claude trong 1 pipeline | ⬜ |

## ✅ Kanban

### Done ✅
- [x] Đọc và phân tích Claude Code V2 guide (conversation eae467cb)
- [x] Hiểu 3-Layer Architecture (Core / Delegation / Extension)
- [x] Hiểu COD Decision Rule

### In Progress 🔄
- [ ] Week 1: Viết CLAUDE.md hierarchy (global + project level)
- [ ] Week 1: Luyện keyboard shortcuts đến khi muscle memory

### To Do 📋
- [ ] Cài hooks PostToolUse (auto-format)
- [ ] Cài hooks PreCompact (save state)
- [ ] Tạo 3 slash commands
- [ ] Config: AUTOCOMPACT_PCT=80, SUBAGENT_MODEL=haiku

## 🔗 Resources

- [[3_Resources/Tools & Software/Claude Code V2 Mastery Guide]]
- [[3_Resources/SOPs/COD Decision Rule]]
- [[3_Resources/SOPs/FUEL Context Protocol]]

---

*Project Brief | Thuộc hệ thống IPARAG*
