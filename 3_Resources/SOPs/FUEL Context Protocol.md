---
created: 2026-03-05
updated: 2026-03-05
type: sop
tags: [#type/sop, #topic/ai-tools, #topic/knowledge-management]
---

# ⛽ FUEL — Context Window Survival Protocol

> *Nguồn: Claude Code V2 Power User Guide*

## Mục Đích

Ngăn Claude "trở nên đần" do hết context — áp dụng mỗi session.

---

## FUEL Checklist

```
F — FEW MCPs
    → Giữ dưới 10 MCP servers
    → Giữ dưới 80 tools tổng cộng
    → Sau 10 servers: context pollution degrades everything

U — USE /compact at 80%
    → Set: AUTOCOMPACT_PCT = 80
    → Manual: /compact "keep X only" khi cần chọn lọc
    → /clear = fresh start khi context quá rối

E — EXPLORE in subagents
    → Mọi research/exploration → spawn subagent
    → KHÔNG explore trong main thread
    → "Context is fuel — don't burn it on research"

L — LOAD only what's needed
    → Dùng @filename thay vì paste code
    → KHÔNG load cả directory
    → Specify exact files cần thiết
```

---

## Context Killers vs Savers

| ⚠️ Context Killers | ✅ Context Savers |
|---|---|
| > 10 MCPs installed | `/compact "keep X only"` |
| Never using `/compact` | `/clear` = fresh start |
| Research/explore in main thread | Subagents cho exploration |
| Load entire directories | `@` specific files only |
| Ignore `/cost` tracking | Run `/cost` sau mỗi session |

---

## Config Bắt Buộc

```
AUTOCOMPACT_PCT = 80        # Auto-compress ở 80% usage
MAX_OUTPUT_TOKENS = 64000   # Max response length
SUBAGENT_MODEL = haiku      # Force cheap model cho delegation
```

---

## Dấu Hiệu Context Đang Cạn

- Claude trả lời chung chung, không specific
- Claude "quên" những gì đã nói trước đó
- Output quality giảm rõ rệt so với đầu session

→ **Hành động ngay:** `/compact` hoặc `/clear` + bắt đầu session mới

---

*SOP | Thuộc hệ thống IPARAG*
