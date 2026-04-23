---
created: 2026-03-21
type: practice-guide
week: 4
topic: "Deep Phase 2 — Morpho + VDI 2225 + Concept Selection"
hours: 21
dates: 2026-04-14 → 2026-04-20
---

# Tuần 4: Deep Phase 2 — Morpho + VDI 2225 + Concept Selection (21 giờ)

## Mục Tiêu Tuần
- [ ] Master morphological matrix construction (≥6 SF × ≥3 WP)
- [ ] Master VDI 2225 evaluation procedure (scoring, threshold, sensitivity)
- [ ] Hiểu criticisms + limitations of VDI 2225
- [ ] DELIVERABLE: Morphological Matrix VN-12.7MM
- [ ] DELIVERABLE: VDI 2225 Evaluation VN-12.7MM
- [ ] Speed Run: Full Phase 2 for new product in <4h

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | 6.4 Working Principles deep dive + PDF | Ch6 files + PDF | `pb-textbook` 6.4 | Working principles search |
| **T3** | 6.5.1-6.5.2 Concept Development + VDI 2225 | Ch6 files | `pb-textbook` 6.5.2 | VDI 2225 mastery drill |
| **T4** | 6.5.3 Practical Application + Sensitivity | Ch6 files + VDI PDF | `pb-mastery` | Sensitivity analysis |
| **T5** | VDI 2225 patterns across 10 examples | Ch6_Worked_Examples/ | `pb-textbook` examples | VDI pattern extraction |
| **T6** | DELIVERABLE: Morphological Matrix VN-12.7MM | All Phase 2 materials | `pb-textbook` 6.4 | Morphological matrix |
| **T7** | DELIVERABLE: VDI 2225 Evaluation VN-12.7MM | All Phase 2 materials | `pb-textbook` 6.5.2 | VDI 2225 + S-diagram |
| **CN** | Phase 2 Capstone — Speed Run NEW product | All above | `pb-mastery` | Full Phase 2 speed run |

## NLM Queries Mỗi Ngày

### T2 — 6.4 Working Principles Deep Dive
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.4.1-6.4.2: How to search working principles + how to combine them?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "For pneumatic/mechanical training simulators: what are the established working principles for recoil, feedback, and reset?"
```

### T3 — 6.5.1-6.5.2 VDI 2225
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.5.2: VDI 2225 step by step — scoring 0-4, 60% threshold, weak spots, sensitivity?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Section 6.5.2: What is the exact procedure for constructing an S-diagram? How to interpret quadrants?"
```

### T4 — 6.5.3 Sensitivity Analysis
**Prime:**
```bash
nlm notebook query pb-mastery "What are criticisms of VDI 2225 evaluation? When do scores mislead?"
```
**Deepen:**
```bash
nlm notebook query pb-mechai "Khung THIẾT KẾ: How does WX handle concept selection differently from vanilla VDI 2225?"
```

### T5 — VDI Patterns from Examples
**Prime:**
```bash
nlm notebook query pb-textbook "How did different worked examples apply VDI 2225? Common patterns in criteria selection?"
```
**Deepen:**
```bash
nlm notebook query pb-mastery "Across academic case studies: what criteria appear most often in VDI 2225 evaluations?"
```

### T6 — DELIVERABLE: Morphological Matrix
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.4: morphological matrix construction rules?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "How to screen concept variants from morphological matrix? Compatibility check?"
```

### T7 — DELIVERABLE: VDI 2225 Evaluation
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.5.2: complete VDI 2225 procedure?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Concept A scored 0.78 with weak spot on maintainability — should I select or reject?"
```

### CN — Phase 2 Speed Run
**Prime:**
```bash
nlm notebook query pb-mastery "Common speed mistakes in Phase 2?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Chapters 5-6: What is the minimum-viable Phase 2 output set?"
```

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch6_Conceptual_Design/     (main reading — sections 6.4-6.5)
├── Ch6_Worked_Examples/       (10 examples for VDI patterns)
└── Frameworks/                (VDI 2225 reference)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch6)
└── VDI 2225 reference PDF
```

## Rubric Tự Đánh Giá — Cuối Tuần 4

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| Morphological matrix completeness | <4 SF, <2 WP | ≥6 SF × ≥3 WP, ≥3 concepts | ≥8 SF × ≥4 WP, compatibility screened | |
| VDI 2225 execution | Can run with help | Independent execution, S-diagram | Identify weak spots + propose mitigations | |
| Sensitivity analysis | Not performed | Top-3 weights varied, result stable | Systematic sensitivity + decision confidence | |
| Speed (Phase 2 time) | >6 hours | <4 hours, all deliverables | <3 hours, quality ≥80% of full run | |
| Concept quality | Obvious concepts only | Creative + feasible concepts | Publishable, peer-reviewable quality | |

**Scoring:** < 2 avg → lặp tuần 4. ≥ 2 → qua tuần 5. > 4 → tăng tốc tuần 5.
