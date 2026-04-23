---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-AIA-128
skill: forge-job-map
---

# Opportunity Landscape — VN-AIA-128 (Trợ Lý Ảo Hải Đoàn 128)

**Status: DRAFT — AI-estimated scores, awaiting stakeholder interviews**

## Underserved Top 15 (Opp ≥ 8.0 — invest here)

| Rank | # | Outcome | Step | Imp | Sat | Opp |
|:----:|---|---------|------|:---:|:---:|:---:|
| 1 | O-07 | **Tìm tài liệu cụ thể trong kho lưu trữ** | 2-LOCATE | 5.0 | 1.0 | **10.0** |
| 2 | O-12 | **Trích điều khoản liên quan từ văn bản dài** | 3-PREPARE | 4.8 | 1.0 | **10.0** |
| 3 | O-01 | Xác định quy định áp dụng cho nhiệm vụ cụ thể | 1-DEFINE | 4.8 | 1.5 | **9.6** |
| 4 | O-23 | **Trích dẫn đúng điều khoản khi soạn văn bản** | 5-EXECUTE | 4.8 | 2.0 | **9.6** |
| 5 | O-14 | **Tóm tắt quy định để tra cứu nhanh** | 3-PREPARE | 4.5 | 1.0 | **9.5** |
| 6 | O-25 | **Soạn phản hồi tình huống dựa trên tiền lệ** | 5-EXECUTE | 4.5 | 1.0 | **9.5** |
| 7 | O-37 | **Tìm tiền lệ/văn bản tương tự từ quá khứ** | 8-CONCLUDE | 4.5 | 1.0 | **9.5** |
| 8 | O-41 | **"Lần trước ta xử lý thế nào?"** | 8-CONCLUDE | 4.5 | 1.0 | **9.5** |
| 9 | O-02 | Không bỏ sót quy định liên quan | 1-DEFINE | 4.5 | 2.0 | **9.0** |
| 10 | O-06 | Không áp dụng quy định hết hiệu lực | 1-DEFINE | 4.5 | 2.0 | **9.0** |
| 11 | O-09 | Phiên bản tài liệu nào là mới nhất? | 2-LOCATE | 4.5 | 1.5 | **9.0** |
| 12 | O-15 | Đối chiếu 3+ văn bản liên quan | 3-PREPARE | 4.5 | 1.5 | **9.0** |
| 13 | O-22 | Soạn văn bản đúng mẫu nhanh | 5-EXECUTE | 4.5 | 1.5 | **9.0** |
| 14 | O-04 | Tìm văn bản tham chiếu chéo | 1-DEFINE | 4.2 | 1.5 | **8.4** |
| 15 | O-19 | Giải quyết mâu thuẫn giữa quy định | 4-CONFIRM | 4.2 | 1.5 | **8.4** |

**Pattern:** Step 1 DEFINE (4/15), Step 2 LOCATE (2/15), Step 3 PREPARE (3/15), Step 5 EXECUTE (3/15), Step 8 CONCLUDE (2/15). Pain phân bố đều — không tập trung vào 1 step. RAG + LLM addresses ALL top 15.

## Overserved Bottom 10 (Opp ≤ 5.5 — simplify or skip)

| Rank | # | Outcome | Step | Imp | Sat | Opp |
|:----:|---|---------|------|:---:|:---:|:---:|
| 1 | O-26 | Lỗi format văn bản | 5-EXECUTE | 3.0 | 3.0 | 3.0 |
| 2 | O-24 | Điền form có sẵn | 5-EXECUTE | 3.5 | 2.5 | 5.5 |
| 3 | O-27 | Tính toán theo bảng/công thức | 5-EXECUTE | 3.5 | 2.5 | 5.5 |
| 4 | O-20 | Giảm phụ thuộc pháp chế | 4-CONFIRM | 3.5 | 2.5 | 5.5 |

**Note:** Ít outcome overserved vì HIỆN TẠI hầu như KHÔNG có giải pháp số → Satisfaction thấp toàn diện.

## Strategy Recommendation

### Type: DISRUPTIVE

**Lý do:** Không có đối thủ trực tiếp trong ngữ cảnh nội bộ HD128. Google Search không có dữ liệu nội bộ. ChatGPT vi phạm bảo mật (dữ liệu ra nước ngoài). VN-AIA-128 tạo category mới: **AI tra cứu quy định nội bộ quân sự — on-premise, tiếng Việt.**

### Innovation Targets → RAG Feature Mapping

| Outcome | RAG Feature | MVP Priority |
|---------|------------|:-----------:|
| O-07: Tìm tài liệu | **Semantic search trên vector DB** | ★★★ MUST |
| O-12: Trích điều khoản | **Chunk-level retrieval + highlight** | ★★★ MUST |
| O-14: Tóm tắt quy định | **LLM summarization with source citation** | ★★★ MUST |
| O-01: Xác định quy định áp dụng | **Context-aware Q&A ("Quy định nào áp dụng cho X?")** | ★★★ MUST |
| O-23: Trích dẫn đúng | **Source citation with clause reference** | ★★ SHOULD |
| O-25: Soạn theo tiền lệ | **Template + precedent retrieval** | ★★ SHOULD |
| O-37/41: Tìm tiền lệ | **Historical document search** | ★★ SHOULD |
| O-22: Soạn văn bản | **Template fill + draft generation** | ★ NICE |

### MVP Scope (30-day demo gate)

**IN scope (★★★ MUST):**
- Semantic search (O-07)
- Q&A with source citation (O-01, O-12, O-14)
- Trên ≥1 bộ tài liệu quy định nội bộ

**OUT of scope (defer to v1.0+):**
- Document drafting (O-22, O-25) — Phase 2
- Precedent search (O-37, O-41) — needs historical data
- Compliance checking (O-29, O-31) — needs deeper AI
- Multi-system integration (O-10) — needs IT cooperation

### ACH Analysis

**Sản phẩm này BẢN CHẤT là ACH:**

| Dimension | Assessment |
|-----------|-----------|
| **S** (Substitutable?) | ✅ Information retrieval = core LLM/RAG strength |
| **H** (Hybrid?) | ✅ Commodity server + open-source LLM → replaces manual search |
| **I** (Improvement?) | ✅ LLM improves quarterly (dA/dt >> dH/dt for reading comprehension) |
| **F** (Fallback?) | ✅ Level 1: user searches manually (status quo) |
| **T** (Training data?) | ⚠️ MARGINAL: cần tài liệu nội bộ HD128 — chưa nhận được |
| **O** (Outcome?) | ✅ HIGH: addresses 15/15 top underserved outcomes |

### Revenue / Value Model

| Metric | Value | Notes |
|--------|-------|-------|
| Người dùng mục tiêu | 50-200 cán bộ HD128 | Estimate |
| Thời gian tiết kiệm/người/ngày | 30-60 phút (tra cứu + soạn) | Conservative |
| Giá trị thời gian (50 người × 45 phút × 250 ngày) | ~9.375 giờ/năm | = ~4.7 FTE equivalent |
| Giảm rủi ro pháp lý | Khó đo lường nhưng HIGH | Áp dụng sai quy định = hậu quả nghiêm trọng |
| Giá dự kiến | License SaaS ~$500-2,000/tháng HOẶC one-time $10-30K | CEO pricing decision |

## CEO Decisions (2026-03-20)

- [x] **Strategy type: DISRUPTIVE** — confirmed
- [x] **MVP scope: 4 MUST features** — semantic search, Q&A, source citation, summarization
- [x] **Pricing: one-time** ($10-30K range — CEO to finalize after demo)
- [ ] Schedule stakeholder interviews (10 respondents after access established) — PENDING access

## Downstream Routing

```
forge-job-map (this) →
├── helix-task-clarify → outcome-derived requirements for RAG system
├── forge-validate → demo with 20-question test (Doc 023 equivalent)
├── forge-trust → evidence for HD128 leadership (compliance + efficiency)
└── forge-cost → server cost vs labor savings analysis
```

---

*VN-AIA-128 Opportunity Landscape v1.0*
*forge-job-map — Disruptive AI Assistant for Naval Operations*
