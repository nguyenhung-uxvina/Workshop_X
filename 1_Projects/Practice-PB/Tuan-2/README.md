---
created: 2026-03-21
type: practice-guide
week: 2
topic: "Overview — Phase 3-4 + Evaluation + Full Flow"
hours: 21
dates: 2026-03-31 → 2026-04-06
---

# Tuần 2: Overview — Phase 3-4 + Evaluation + Full Flow (21 giờ)

## Mục Tiêu Tuần
- [ ] Hiểu dual technical-economic rating (VDI 2225 S-diagram)
- [ ] Hiểu embodiment design evaluation framework (Ch7.6)
- [ ] Hiểu detail design outputs: drawings, BOM, inspection (Ch7.8)
- [ ] Cross-reference VN-12.7MM docs vs P&B phase deliverables
- [ ] Chạy Full P&B Flow mock Phase 0→2
- [ ] Mid-point Assessment: viết P&B flow từ trí nhớ

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | Ch7.6 Evaluating Embodiment Designs | 3 files Evaluation Part 1-3 | `pb-textbook` Ch7.6 | Evaluation framework notes |
| **T3** | Ch7.7 Embodiment Design Example | 2 files Part 1-2 | `pb-textbook` Ch7.7 | Extract patterns |
| **T4** | Ch7.8 Detail Design | 3 files Detail Part 1-3 | `pb-textbook` Ch7.8 | Detail design checklist |
| **T5** | PDF Deep Dive Ch6-Ch7 | PDF textbook (parts 4-7) | `pb-textbook` Ch6-Ch7 | Annotated notes |
| **T6** | Cross-reference 12 docs VN-12.7MM vs P&B | 12 VN-12.7MM docs | `pb-defense-ai` | Gap analysis (P&B compliance matrix) |
| **T7** | Full P&B Flow Exercise: mock Phase 0→2 | All materials | `pb-mastery` | Speed run |
| **CN** | Tuần 2 Integration + Mid-point Assessment | All above | All 4 notebooks | Synthesis |

## NLM Queries Mỗi Ngày

### T2 — Ch7.6 Evaluating Embodiment Designs
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.6: How to evaluate embodiment designs? What is dual technical-economic rating? How to construct S-diagram?"
```
**Validate (sau bài tập):**
```bash
nlm notebook query pb-textbook "Section 7.6: I re-ran VDI 2225 on RC-A Pneumatic with S-diagram — what are common mistakes in dual rating?"
```

### T3 — Ch7.7 Embodiment Design Example
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.7: Walk through the embodiment example step by step"
```
**Deepen:**
```bash
nlm notebook query pb-mastery "What patterns emerge from P&B embodiment examples that distinguish expert from novice designers?"
```

### T4 — Ch7.8 Detail Design
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.8: What are the key outputs of detail design? Manufacturing drawings, BOM, inspection checklist?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "What detail design outputs are specifically required for defense procurement? MIL-STD drawing requirements?"
```

### T5 — PDF Deep Dive Ch6-Ch7
**Prime:**
```bash
nlm notebook query pb-textbook "Chapters 6-7: What diagrams and tables in embodiment/conceptual chapters are most important?"
```
**Deepen:**
```bash
nlm notebook query pb-mastery "Chapters 6-7: Which figures in the textbook are most referenced in academic literature?"
```

### T6 — Cross-reference VN-12.7MM vs P&B
**Prime:**
```bash
nlm notebook query pb-defense-ai "How to audit a defense product's documentation against P&B phase deliverables?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "What are the expected deliverables at each P&B phase gate? Comprehensive list?"
```

### T7 — Full P&B Flow Exercise
**Prime:**
```bash
nlm notebook query pb-mastery "What are the most common mistakes when running Phase 0→2 quickly?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Chapters 3-6: What is the minimum viable output at each phase to proceed to the next?"
```

### CN — Integration + Mid-point Assessment
**Synthesis:**
```bash
nlm notebook query pb-textbook "Synthesize Chapters 6-7: How does conceptual design flow into embodiment? What are the handoff criteria?"
```
```bash
nlm notebook query pb-mastery "What distinguishes a competent P&B practitioner from an expert at the Phase 2→3 transition?"
```
```bash
nlm notebook query pb-defense-ai "For defense products: what are the most commonly skipped P&B deliverables?"
```
```bash
nlm notebook query pb-mechai "Khung THIẾT KẾ: How does the WX framework handle Phase 2→3 differently from vanilla P&B?"
```

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch7_Evaluation_Detail/     (3 files Evaluation + 2 files Example + 3 files Detail)
├── Ch6_Conceptual_Design/     (review from Week 1)
└── Frameworks/                (review)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch6-Ch7)
```

### VN-12.7MM-SIM docs
```
1_Projects/VN-12.7MM-SIM/     (12 project documents)
```

## Rubric Tự Đánh Giá — Cuối Tuần 2

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| P&B phase recall | Nhớ tên phases | Viết flow từ trí nhớ, đúng 80% | Viết đầy đủ + handoff criteria | |
| Evaluation methods | Biết VDI 2225 tồn tại | Chạy dual rating + S-diagram | Identify weak spots + sensitivity | |
| Detail design awareness | Biết outputs | List deliverables + quality criteria | Map VN-12.7MM gaps to checklist | |
| VN-12.7MM P&B compliance | Chưa audit | Map 12 docs → phases, find gaps | Prioritized gap action plan | |
| Cross-phase integration | Phases riêng lẻ | Thấy flow Phase 0→4 | Predict rework from phase violations | |

**Scoring:** < 2 avg → lặp tuần 2. ≥ 2 → qua tuần 3. > 4 → tăng tốc tuần 3.
