# Claude Code V2 — Mastery Guide

> *Tổng hợp từ: Hamza Khalid's Claude Code V2 Power User Guide*
> *Xử lý bởi: Deep Content Analyzer | Conversation eae467cb*
> *Ngày: 2026-02-24*

---

## The #1 Mental Model Shift

| ❌ Hầu hết dev nghĩ | ✅ Power users biết |
|---|---|
| "Claude Code là AI chatbot trong terminal" | "Claude Code là **orchestration platform** với AI core" |
| "Tôi type prompts, Claude trả lời" | "Tôi **architect delegation graph**, Claude thực thi" |
| "Speed = gõ nhanh" | "Speed = ít chạm vào Core Layer nhất có thể" |

> **The best user types the LEAST.** Productivity ∝ 1/(Core Layer time).

---

## 3-Layer Architecture

```
CORE LAYER      (You + Opus)      $2+/session — Judgment, architecture
DELEGATION      (Subagents)       $0.10-0.50  — Execution tasks
EXTENSION       (Hooks + MCP)     $0          — Guaranteed automation
```

**Goal: Push work DOWN the stack.**

---

## COD Decision Rule → Xem [[3_Resources/SOPs/COD Decision Rule]]

## FUEL Context Protocol → Xem [[3_Resources/SOPs/FUEL Context Protocol]]

---

## 8-Week Roadmap Summary

| Tuần | Milestone |
|------|-----------|
| 1-2 | CLAUDE.md hierarchy + Shortcuts + FUEL |
| 3 | 3 Slash Commands |
| 4-5 | 3 Priority Hooks |
| 5-6 | MCP Servers (< 10) |
| 6-7 | Subagents (5 tasks, track acceptance) |
| 7 | 2 Auto-activating Skills |
| 7-8 | Agent Teams + git worktrees |
| 8 | CI/CD headless integration |

---

## 7 Building Blocks (Học Theo Thứ Tự)

| # | Block | Cost | Học khi |
|---|-------|------|---------|
| 1 | CLAUDE.md | Zero | Day 1 |
| 2 | Shortcuts + Thinking Modes | Zero | Day 1 |
| 3 | Slash Commands | Varies | Day 2-3 |
| 4 | Hooks (14 events) | Zero | Day 4-5 |
| 5 | MCP Servers | Zero (nhưng ăn context!) | Week 2 |
| 6 | Subagents | ~$0.10/session | Week 3 |
| 7 | Agent Teams | 7x cost ⚠️ | Week 5+ |

---

## Self-Assessment Rubric (4 Levels)

Score 1-5 trên 8 dimensions:
- CLAUDE.md | Context management | Hooks | MCP | Delegation | Agent Teams | Cost tracking | Paradigm

**Bands:** 8-15 Tourist → 16-24 Builder → 25-32 Architect → 33-40 Systems Thinker

---

## Key Config

```
AUTOCOMPACT_PCT = 80
MAX_OUTPUT_TOKENS = 64000
SUBAGENT_MODEL = haiku
```

---

## 6 Counter-Intuitive Truths

1. Best user types LEAST
2. CLAUDE.md > tất cả prompts bạn từng viết
3. 1 hook > 5 slash commands (guaranteed vs. manual)
4. More MCP = WORSE (past 10 servers)
5. Sequential subagents often beat Agent Teams
6. Context window explains EVERYTHING

---

## Galaxy Notes Liên Quan

- [[5_Galaxy/Context vs Capability — Sự Khác Biệt]]
- [[5_Galaxy/Phán đoán không thể uỷ thác cho AI]]

---

*Resource | [[2_Areas/AI & Công Cụ Lập Trình/_Area_Dashboard]] | Thuộc hệ thống IPARAG*
