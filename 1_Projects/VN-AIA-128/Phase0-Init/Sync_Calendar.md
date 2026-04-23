---
created: 2026-03-20
type: sync-calendar
project: VN-AIA-128
---

# Cross-Domain Sync Calendar — VN-AIA-128

## Sync Points

| Sync | Phase | Mục đích | Người tham gia | Target Date |
|:----:|:-----:|---------|---------------|:-----------:|
| S0 | 0→1 | Charter review + liên hệ HD128 CNTT | CEO + HD128 PoC | **2026-03-25** |
| S1 | 1 | Nhận tài liệu đầu vào + requirements | CEO + HD128 SME + CNTT | 2026-03-28 |
| S2 | 1→2 | LLM selection + deployment model | CEO + CNTT | 2026-04-01 |
| S3 | 2 | RAG pipeline demo (internal) | CEO | 2026-04-07 |
| S4 | 2→3 | MVP integration + data pipeline | CEO + CNTT | 2026-04-10 |
| S5 | 3 | **Demo MVP cho HD128** (physical gate) | CEO + HD128 (≥3 cán bộ) | **2026-04-19** |
| S6 | 3→4 | Feedback → iterate → v1.0 plan | CEO + HD128 | 2026-04-25 |

## Cadence

- **Weekly:** CEO update Status.md (Monday)
- **Bi-weekly:** Sync với HD128 CNTT (nếu access established)
- **Async:** Telegram/Zalo group cho quick questions

## Critical Path to Demo (30 ngày)

```
Week 1 (03-20 → 03-27):
  ✅ Project init (done)
  → Liên hệ HD128 PoC (S0)
  → Nhận bộ tài liệu mẫu (≥10 văn bản quy định)

Week 2 (03-27 → 04-03):
  → Chọn LLM + vector DB (S2)
  → Setup dev environment (Docker + RAG)
  → Chunking + embedding tài liệu mẫu

Week 3 (04-03 → 04-10):
  → RAG pipeline chạy end-to-end (S3)
  → Test 20 câu hỏi → accuracy ≥80%
  → UI cơ bản (web chat)

Week 4 (04-10 → 04-19):
  → Deploy lên hạ tầng target (on-premise/cloud VN)
  → Security hardening (auth, HTTPS)
  → **DEMO cho HD128 (S5) — PHYSICAL GATE**
```

---

*VN-AIA-128 Sync Calendar — Phase 0*
