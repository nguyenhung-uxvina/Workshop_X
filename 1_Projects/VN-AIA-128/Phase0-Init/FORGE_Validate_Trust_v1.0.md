---
created: 2026-03-20
type: project
project: VN-AIA-128
skills: [forge-validate, forge-trust]
---

# VN-AIA-128 — Validation Plan + Trust Evidence
## forge-validate + forge-trust Combined Output

---

# PART A: VALIDATION PLAN

## Stage 1: LAB (Internal WX, Week 1-3)

| Test # | Name | Outcome | Pass Criteria |
|--------|------|---------|---------------|
| L1 | LLM Vietnamese quality | — | 20 câu tiếng Việt general → ≥80% correct, coherent |
| L2 | RAG indexing | O-07 (10.0) | Index ≥10 VB quy định, search returns relevant chunks |
| L3 | Q&A with citation | O-01 (9.6), O-12 (10.0) | Answer + "Nguồn: [VB], Điều X" for ≥80% of 20 test questions |
| L4 | Summarization | O-14 (9.5) | Summarize 10-page VB → 1 paragraph, CEO judges accuracy |
| L5 | Hallucination test | — | 10 trick questions (answer NOT in data) → "Không tìm thấy" ≥80% |
| L6 | NemoClaw security | Air-Gap Law | OpenShell sandbox blocks: internet, file write, exec, ClawHub |
| L7 | Response time | — | ≤10 seconds per query average |

**GO/NO-GO Gates:**
- GO-1: Vietnamese Q&A accuracy ≥80% — **KILL** if fail (core value prop)
- GO-2: Citation present on ≥80% answers — **KILL** (Citation-or-Silence Law)
- GO-3: Hallucination on trick questions ≤20% — **KILL** (military context)
- GO-4: NemoClaw sandbox blocks ALL outbound — **KILL** (Air-Gap Law)

**Cost:** $0 (software only, use existing PC with RTX GPU)
**Duration:** 1 week setup + 1 week test

### Model Selection Matrix (L1 test)

| Model | Size | Vietnamese | Local? | Test Priority |
|-------|:----:|:---------:|:------:|:------------:|
| Nemotron 8B | 8B | Unknown | ✅ (RTX 12GB) | 1 |
| Vistral 7B | 7B | ✅ VN-native | ✅ (RTX 12GB) | 2 |
| Qwen2.5-7B | 7B | Good | ✅ (RTX 12GB) | 3 |

**Decision rule:** Run L1 on all 3 → pick highest Vietnamese Q&A accuracy.

## Stage 2: DEMO MVP (Week 4, deadline 2026-04-19)

| Test # | Name | Outcome | Pass Criteria |
|--------|------|---------|---------------|
| D1 | 20-question accuracy test | O-01, O-07, O-12 | ≥16/20 correct with citation (≥80%) |
| D2 | Live demo with HD128 | O-14 | ≥3 cán bộ try the system, satisfaction ≥3.5/5 |
| D3 | Response time under load | — | ≤15s with 3 concurrent users |
| D4 | Security demo | Air-Gap Law | Show: no internet, audit log, sandbox policy |
| D5 | Disclaimer display | Citation-or-Silence | Every answer shows: "⚠️ Tham khảo — xác nhận với pháp chế" |

## Stage 3: PILOT (Month 2-3, after demo PASS)

| Test # | Name | Pass Criteria |
|--------|------|---------------|
| P1 | 30-day pilot at HD128 | ≥10 users, ≥50 queries/week |
| P2 | User satisfaction survey | Mean ≥4.0/5.0 across 10 users |
| P3 | Accuracy on real queries | ≥75% correct (judged by pháp chế officer) |
| P4 | Zero security incidents | No data leak, no unauthorized access |
| P5 | Adoption rate | ≥60% of target users active after Week 4 |

## Performance Envelope

| Condition | Accuracy | Speed | Category |
|-----------|:--------:|:-----:|----------|
| Single-hop Q&A (1 VB lookup) | ≥85% | ≤5s | ✅ WORKS WELL |
| Multi-hop Q&A (cross-reference 2+ VB) | ~50-60% | ≤15s | ⚠️ DEGRADED |
| Document drafting | Not in MVP | — | ❌ NOT AVAILABLE |
| Questions outside indexed data | "Không tìm thấy" | ≤3s | ✅ CORRECT (no hallucination) |
| Concurrent 5+ users | Accuracy same, speed ≤20s | ≤20s | ⚠️ DEGRADED |

---

# PART B: TRUST EVIDENCE PACKAGE

## Evidence Summary

| Evidence | Status | When Available |
|----------|:------:|:-:|
| LLM Vietnamese quality test | ⏳ Week 1 | 2026-03-27 |
| 20-question accuracy result | ⏳ Week 3 | 2026-04-10 |
| NemoClaw security demo | ⏳ Week 1 | 2026-03-27 |
| Live demo with HD128 | ⏳ Week 4 | **2026-04-19** |
| 30-day pilot data | ⏳ Month 2-3 | 2026-06 |
| Cost comparison | ✅ Now | — |

## Audience-Specific Messages

### For Cán Bộ Nghiệp Vụ (Operator)
> *"Hỏi bằng tiếng Việt bình thường: 'Quy định về nghỉ phép áp dụng thế nào?' → AI trả lời + trích dẫn chính xác Điều, Khoản. Nhanh hơn 10× so với tìm trong tủ hồ sơ."*

### For Chỉ Huy
> *"Cán bộ tra cứu quy định trong 10 giây thay vì 30 phút. Giảm sai sót áp dụng quy định. Mọi câu trả lời có trích dẫn nguồn — kiểm tra được."*

### For Bộ phận CNTT Tân Cảng
> *"Chạy hoàn toàn trên server nội bộ. NemoClaw sandbox: không internet, không gửi data ra ngoài, audit log mọi truy vấn. SHIELD architecture: 6 lớp bảo mật."*

## Anticipated Concerns

| # | Concern | Response |
|---|---------|----------|
| C-1 | "AI trả lời sai quy định?" | Mọi answer có citation + disclaimer. AI gợi ý, pháp chế xác nhận. |
| C-2 | "Dữ liệu bị rò rỉ?" | Air-gap + NemoClaw + SHIELD. Zero internet. Audit log. |
| C-3 | "Thay thế cán bộ pháp chế?" | KHÔNG — AI hỗ trợ tra cứu nhanh, pháp chế vẫn quyết định cuối. |
| C-4 | "Phải mua server đắt?" | PC có RTX 3060 (~$1,500) đủ chạy. Hoặc dùng server hiện có. |
| C-5 | "Maintenance phức tạp?" | Cập nhật VB mới: drag-drop file → auto-index. 10 phút/lần. |

## Trust-Building Milestones

| Date | Evidence | Action |
|------|---------|--------|
| 2026-03-27 | LLM + security working | Internal confidence |
| **2026-04-19** | **Demo MVP** | **HD128 hands-on — PHYSICAL GATE** |
| 2026-05 | Pilot start | 10 users daily usage |
| 2026-06 | Pilot report | Data for contract discussion |

---

*VN-AIA-128 Validation + Trust v1.0*
