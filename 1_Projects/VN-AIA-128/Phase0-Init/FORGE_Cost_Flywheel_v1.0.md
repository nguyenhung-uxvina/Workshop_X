---
created: 2026-03-20
type: project
project: VN-AIA-128
skills: [forge-cost, forge-flywheel, forge-library]
---

# VN-AIA-128 — Cost Analysis + Flywheel + Library
## forge-cost + forge-flywheel + forge-library Combined Output

---

# PART A: COST ANALYSIS

## Current Alternative vs VN-AIA-128

| Category | Thủ công (hiện tại) | FPT AI / Viettel AI | VN-AIA-128 (OpenClaw+NemoClaw) |
|----------|:-------------------:|:-------------------:|:------------------------------:|
| Setup cost | $0 | $5,000-20,000 | **$0-1,500** (HW only) |
| License/yr | $0 | $6,000-60,000/yr | **$0** (open-source) |
| Labor cost/yr (tra cứu thủ công) | **$18,750** (50 người × 45 min/ngày × 250 ngày × $1/h) | $0 (AI handles) | **$0** (AI handles) |
| Accuracy | ~70% (human memory + search) | ~90% (LLM + managed) | ~80-85% (RAG + local LLM) |
| Data privacy | ✅ (never leaves building) | ⚠️ (VN cloud) | ✅ (air-gap, on-premise) |
| **Year 1 total** | **$18,750** (hidden labor) | **$11,000-80,000** | **$2,500** (HW + setup) |
| **Year 2+ annual** | **$18,750** | **$6,000-60,000** | **$1,000** (maintenance) |

## Development Cost

| Item | Cost | Notes |
|------|:----:|-------|
| OpenClaw + NemoClaw | $0 | Open-source |
| LLM (Nemotron/Vistral/Qwen) | $0 | Open-source |
| Hardware (PC + RTX 3060) | $0-1,500 | $0 if use existing GPU PC |
| CEO development time (40h) | $1,000 | 4 weeks × 10h |
| **Total MVP** | **$1,000-2,500** | |

## Pricing

| Model | Price | Margin | Rationale |
|-------|:-----:|:------:|-----------|
| **Setup fee** | $10,000-15,000 | 75-85% | Customization + training + deployment |
| **Annual maintenance** | $2,000-3,000/yr | 70% | VB updates, model retune, support |
| **Free pilot option** | $0 (6 months) | -$1,000 | Remove procurement barrier → prove value → convert |

**Recommended: Free 6-month pilot → annual contract.** Military procurement slow → free pilot bypasses approval cycle.

## 5-Year Revenue Projection

| Year | Customers | Revenue | Cumulative |
|:----:|:---------:|:-------:|:----------:|
| 1 | 1 (HD128 pilot → convert) | $12K | $12K |
| 2 | 2 (HD128 + 1 đồn Biên phòng) | $28K | $40K |
| 3 | 5 (expand to other đơn vị Tân Cảng) | $65K | $105K |
| 4 | 8 (+ Hải quân vùng) | $100K | $205K |
| 5 | 12 (+ export to other quân chủng) | $144K | **$349K** |

**Low capex, recurring revenue.** Software margin 70-85% vs hardware products 30-50%.

---

# PART B: DATA FLYWHEEL

## Flywheel Architecture

```
DEPLOY at HD128
    │
    ▼
USER QUERIES collected:
  • Question text + answer + sources cited
  • User feedback (👍/👎)
  • Query types distribution (tra cứu / soạn VB / tiền lệ)
  • Failed queries (no answer / wrong answer)
    │
    ▼
DATA IMPROVES system:
  • Failed queries → identify missing documents → add to index
  • Wrong answers → improve chunking / prompt template
  • Popular queries → pre-compute summaries (cache)
  • 👎 feedback → flag for human review → correct
    │
    ▼
BETTER ANSWERS → more usage → more data → compound
```

## Data Volume

| Scenario | Users | Queries/day | Data/month |
|----------|:-----:|:-----------:|:----------:|
| Pilot (HD128) | 10 | 30-50 | ~50 MB (text logs) |
| Production (HD128 full) | 50 | 150-300 | ~200 MB |
| Multi-site (5 đơn vị) | 250 | 750-1,500 | ~1 GB |

## Flywheel Metrics

| Metric | Month 1 | Month 6 | Month 12 |
|--------|:-------:|:-------:|:--------:|
| Answer accuracy | 80% | 88% | 92% |
| Average response time | 10s | 6s (caching) | 4s |
| User adoption | 30% | 60% | 80% |
| Queries/user/day | 2 | 5 | 8 |
| Documents indexed | 10 | 50 | 200+ |

## Flywheel Investment: $500/yr

| Item | Cost/yr |
|------|:-------:|
| Log analysis + improvement | $200 |
| Document update processing | $200 |
| Model re-tune (if fine-tuning) | $100 |
| **Total** | **$500/yr** |

---

# PART C: LIBRARY ENTRIES

## WX-RAG-001: Vietnamese Regulation RAG Pipeline

| Field | Value |
|-------|-------|
| Model ID | WX-RAG-001 |
| Name | Vietnamese Regulation Q&A (RAG + LLM) |
| Type | Classification / Retrieval |
| Source | VN-AIA-128 |
| Platform | OpenClaw + NemoClaw + Atlas |
| Compute | PC + RTX 3060 (12GB VRAM) |

**Reuse potential:**

| Target | Transfer Effort | Readiness |
|--------|:--------------:|:---------:|
| Other military units (cùng loại quy định) | **Direct** (same pipeline, different documents) | 5 |
| Government agencies (quy định hành chính) | Direct (same pipeline) | 4 |
| State enterprises (quy chế nội bộ) | Direct | 4 |
| VN-12.7MM-SIM (training manual lookup) | Fine-tune (different domain) | 3 |

**Reuse multiplier: 1 pipeline → UNLIMITED customers** (mỗi customer = nạp tài liệu riêng, cùng engine). Đây là **SaaS architecture** — build once, deploy everywhere.

---

# FORGE PIPELINE STATUS — VN-AIA-128

| FORGE Skill | Status | Output |
|-------------|:------:|--------|
| forge-job-map | ✅ DONE | 42 outcomes, DISRUPTIVE |
| forge-scout | ✅ DONE (via portfolio matrix) | ACH inherent — product IS AI |
| forge-shift | ⏭️ SKIP | Product bản chất là AI, không có hardware alternative |
| forge-validate | ✅ DONE | 3-stage plan, 12 tests, 4 kill gates, model selection matrix |
| forge-trust | ✅ DONE | 3 audience messages, 5 concerns, milestones |
| forge-cost | ✅ DONE | $2.5K MVP, free pilot strategy, 5yr $349K |
| forge-library | ✅ DONE | WX-RAG-001, reuse multiplier UNLIMITED |
| forge-flywheel | ✅ DONE | Query logs → accuracy improvement, $500/yr |

**VN-AIA-128 FORGE pipeline: 7/7 COMPLETE** (shift skipped — N/A). ✅

---

*VN-AIA-128 Cost + Flywheel + Library v1.0*
