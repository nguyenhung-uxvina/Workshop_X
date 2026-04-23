---
project: VN-XUONG-UUV
phase: 2
type: orchestration-design
version: 1.0
created: 2026-03-07
status: active
skill: S2 — Multi-Agent Orchestration
pattern: 3 — Workflow Orchestration
---

# VN-XUONG-UUV — Orchestration Design Phase 2

## S2 Pattern 3: Workflow Orchestration cho Conceptual Design

---

## 1. Mục Đích

Định nghĩa pipeline Human-AI cho Phase 2 Conceptual Design:
- AI model nào xử lý task nào
- Handoff protocol giữa các bước
- HITL checkpoints bắt buộc
- Audit trail cho AI-draft vs Human-confirmed

---

## 2. AI Model Allocation

| Tier | Model | Sử dụng cho | Chi phí |
|------|-------|-------------|---------|
| **T1** | Haiku | File reading, docs formatting, search, data lookup | Thấp |
| **T2** | Sonnet | Drafting morphological matrix, requirements cross-ref, weight estimates | Trung bình |
| **T3** | Opus | Architecture decisions, gate reviews, concept evaluation, trade-off analysis | Cao |

**Quy tắc:** Mặc định dùng T1. Nâng cấp chỉ khi task yêu cầu judgment hoặc synthesis.

---

## 3. Pipeline Phase 2

```
                    RESEARCH          DRAFT           QC            DECISION
                    ───────          ─────          ──            ────────
Morphological   →  T1: Read refs  → T2: Draft    → Human: Review → Human: Select WP
Matrix              + Doc 006        matrix          + correct       for each SF

Concept         →  T2: Generate   → T2: Draft    → Human: Review → Human: Select
Variants            combinations     3-5 variants    + sketch        preferred

VDI 2225        →  T1: Load       → T2: Calculate → Human: Verify → Human: Final
Evaluation          criteria         scores          weights         decision

Design          →  T2: Research   → T2: Trade-off → Human: Review → Human: Decide
Decisions           options          analysis         + judgment      PD-1 to PD-7
(PD-1→PD-7)

TMS Concept     →  T2: Research   → T3: System   → Human: Review → Human: Approve
                    cable specs      architecture    + sketch        concept

Stability       →  T1: Gather     → T2: Calculate → T3: Validate → Human: Accept
Check               weight data      GM/GZ           assumptions    /reject

GA Sketch       →  Human: Draw    → T1: Document  → Human: Review → Human: Baseline
                    (Core task)      annotations     final

Gate 2          →  T1: Compile    → T3: Score     → Human: Review → Human: PASS/FAIL
Review              evidence         criteria        + override      (Core)
```

---

## 4. COD Classification chi tiết

| # | Sản phẩm bàn giao | COD | Offload Tier | HITL Checkpoint |
|---|-------------------|-----|--------------|-----------------|
| 1 | Ma trận morphological | **O2** (AI draft, human edit) | T2 | Human xác nhận từng working principle |
| 2 | 3-5 concept variants | **O2** + **C** (phác thảo) | T2 + Human | Human vẽ sketch, AI hỗ trợ mô tả |
| 3 | Ma trận VDI 2225 | **O2** | T2 | Human xác nhận trọng số + điểm |
| 4 | Mô tả concept chọn | **C** (Core) | — | Human viết, AI format |
| 5 | GA sketch sơ bộ | **C** (Core) | — | Human vẽ toàn bộ |
| 6 | TMS concept | **C** (Core) | — | Human thiết kế, AI research hỗ trợ |
| 7 | Weight estimate v2 | **O1** (AI tự động) | T2 | Human verify tổng + phân bổ |
| 8 | Stability check | **O2** | T2 | Human verify GM threshold |
| 9 | Gate 2 Review | **C** (Core) | T3 hỗ trợ | Human quyết định PASS/FAIL |

### Offload Tier Definitions

| Tier | Mô tả | Ví dụ |
|------|--------|-------|
| **O1** | AI tạo tự động, human chỉ review kết quả | Weight estimate, BOM tính toán |
| **O2** | AI draft, human chỉnh sửa đáng kể | Morphological matrix, VDI evaluation |
| **O3** | Human dẫn dắt, AI hỗ trợ lookup/format | TMS concept, GA sketch documentation |
| **C** | Human làm toàn bộ, AI không tham gia judgment | Concept selection, gate decision |

---

## 5. Handoff Protocol

### 5.1 AI Draft → Human Review

1. AI tạo draft với tag `[AI-DRAFT v1]` trong header
2. Human review, đánh dấu corrections bằng `[HUMAN-EDIT]`
3. Document cập nhật header thành `[REVIEWED — KN — YYYY-MM-DD]`
4. Changelog ghi rõ: "AI draft → Human reviewed + corrected"

### 5.2 Research → Draft → QC → Baseline

```
[RESEARCH]  AI/Human thu thập dữ liệu
    ↓
[DRAFT]     AI tạo bản nháp (tag: AI-DRAFT)
    ↓
[QC]        Human review + QC Checklist (xem §7)
    ↓
[CORRECT]   Human sửa lỗi, bổ sung judgment
    ↓
[BASELINE]  Document nhận version number, vào gate package
```

### 5.3 Change Author Convention

Mỗi changelog entry phải ghi tác giả:

```markdown
## Changelog
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v0.1 | 2026-03-10 | AI (T2) | Initial draft — morphological matrix |
| v0.2 | 2026-03-11 | KN (Human) | Corrected WP for SF3.2, added TMS principles |
| v1.0 | 2026-03-12 | KN (Human) | Baselined for Gate 2 package |
```

---

## 6. Data Confidence Protocol

Mọi document Phase 2 phải có trong frontmatter:

```yaml
data_confidence: [LEVEL] ([breakdown])
```

Levels:
- **HIGH** (>50% L1-L2): Dữ liệu từ test/measurement hoặc user-confirmed
- **MEDIUM** (>50% L3-L4): Dữ liệu từ catalog/competitive analysis
- **LOW** (>50% L5): Assumptions chưa validate

Mỗi data point trong document phải tagged:
- `[L1: TEST]` — Đo đạc trực tiếp
- `[L2: USER]` — User xác nhận
- `[L3: CATALOG]` — Từ datasheet/catalog nhà sản xuất
- `[L4: REFERENCE]` — Từ competitive analysis/reference design
- `[L5: ASSUMPTION]` — Giả định, cần validate

---

## 7. QC Checklist per Document

Trước khi document vào gate package, chạy checklist:

- [ ] Frontmatter đầy đủ (project, phase, type, version, data_confidence)
- [ ] COD tag có trong footer
- [ ] Changelog có Author column (AI/Human)
- [ ] Mọi data point có L-level tag
- [ ] Cross-reference đến source documents chính xác
- [ ] Tiếng Việt có dấu đầy đủ
- [ ] Không chứa classified data hoặc supplier pricing cụ thể
- [ ] Conflict check: không mâu thuẫn với requirements baseline (Doc 002)

---

## 8. Fallback Protocol

Khi AI output không đạt chất lượng:

| Tình huống | Hành động |
|------------|-----------|
| AI draft < 50% usable | Chuyển từ O2 → C (human viết lại từ đầu) |
| AI calculation nghi ngờ sai | Verify bằng tay hoặc tool khác, ghi `[MANUAL-CHECK]` |
| AI thiếu context (ICD chưa có) | Dùng placeholder `[TBD — pending ICD]`, không fabricate data |
| AI conflict với domain knowledge | Human override, ghi lý do trong changelog |

---

## 9. Weekly Rhythm Phase 2

```
Thứ 2-4:  Core tasks (TMS concept, GA sketch, design decisions)
Thứ 5:    Offload review (check AI drafts from week, correct)
Thứ 6:    QC + D-M-I-R reflection
Hàng tuần: Update Status.md + Kanban
```

---

## 10. MCP Tool Integration

| Tool | Sử dụng | Giai đoạn |
|------|---------|-----------|
| Claude Code (Opus/Sonnet) | Design analysis, document drafting | Toàn Phase 2 |
| Filesystem MCP | File management, cross-reference | Toàn Phase 2 |
| Hyperbrowser | Research reference designs, standards | Research phase |
| Tana-IPARAG Bridge | Capture insights → Galaxy | Khi phát hiện permanent note |

---

*COD: Offload (O2) — AI draft, human review + edit*
*Thuộc hệ thống IPARAG | S2 Practice — Workflow Orchestration*
