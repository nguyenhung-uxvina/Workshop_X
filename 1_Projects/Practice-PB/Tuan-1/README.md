---
created: 2026-03-21
type: practice-guide
week: 1
topic: "Overview — Nền Tảng + Phase 0-1"
hours: 21
dates: 2026-03-24 → 2026-03-30
---

# Tuần 1: Overview — Nền Tảng + Phase 0-1 (21 giờ)

## Mục Tiêu Tuần
- [ ] Hiểu 7 loại interrelationship trong systems (Ch2)
- [ ] Hiểu P09→P12 product planning flow (Ch3)
- [ ] Hiểu 6-phase problem solving + iteration patterns (Ch4)
- [ ] Hiểu requirements list D/W/X structure (Ch5)
- [ ] Hiểu DMIR×ODI×P&B integration (Frameworks)
- [ ] Vẽ E/M/S diagram cho VN-12.7MM-SIM

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | Ch2: Systems Fundamentals | 8 files Ch2/ | `pb-textbook` Ch2 | E/M/S diagram VN-12.7MM |
| **T3** | Ch2 (cont.) + Ch3: Product Planning | Ch2 + 3 files Ch3/ | `pb-textbook` Ch3 | P11 + hierarchy exercise |
| **T4** | Ch4: Problem Solving Process | 3 files Ch4/ | `pb-textbook` Ch4 | 6-phase mapping |
| **T5** | Ch5: Task Clarification | 3 files Ch5/ | `pb-textbook` Ch5 | Requirements audit |
| **T6** | Frameworks: DMIR×ODI×P&B | 5 files Frameworks/ | `pb-mechai` | Integration map |
| **T7** | PDF Deep Dive: Ch1-Ch5 | PDF textbook | `pb-defense-ai` | Annotated notes |
| **CN** | Integration + Self-Assessment | All above | All 4 notebooks | Reflection + rubric |

## NLM Queries Mỗi Ngày

### T2 — Ch2 Systems Fundamentals
**Prime:**
```bash
nlm notebook query pb-textbook "Summarize Chapter 2 Systems Fundamentals. What are the 7 types of interrelationships? What is the E/M/S flow concept? Give 1 example for each flow type."
```
**Validate (sau bài tập):**
```bash
nlm notebook query pb-textbook "Section 2.1.2: For a pneumatic recoil simulator system, what are the primary Energy flows, Material flows, and Signal flows? Did I miss any secondary flows like thermal dissipation or acoustic energy?"
```
**Deepen:**
```bash
nlm notebook query pb-mechai "Khung THIẾT KẾ: 6-flow E/M/S/D/C/T — Data, Computation, Trust flows là gì? Khác gì so với 3-flow E/M/S của P&B gốc?"
```

### T3 — Ch3 Product Planning
**Prime:**
```bash
nlm notebook query pb-textbook "Summarize Chapter 3 Product Planning. What are P09, P10, P11, P12? What is the difference between a Product Proposal (P11) and a Development Specification (P12)?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Chapter 3: What should a P12 Development Specification contain? List all required sections. How does P12 differ from a requirements list?"
```

### T4 — Ch4 Problem Solving
**Prime:**
```bash
nlm notebook query pb-textbook "Chapter 4 Section 4.1: Explain the 6-phase general problem solving process. What is the TOTE model? Why is iteration structurally expected, not a failure?"
```
**Validate:**
```bash
nlm notebook query pb-mastery "What do researchers say about P&B iteration patterns? When should a designer STOP rather than iterate?"
```

### T5 — Ch5 Task Clarification
**Prime:**
```bash
nlm notebook query pb-textbook "Chapter 5 Section 5.2: How to set up a requirements list? What is D/W classification? What is the LOGICAL ROLE difference between Demands and Wishes?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "Section 5.2-5.4: Common mistakes in writing requirements? How should requirements be quantified?"
```

### T6 — Frameworks
**Prime:**
```bash
nlm notebook query pb-mechai "Tóm tắt Khung THIẾT KẾ: T-H-I-Ế-T-K-Ế — mỗi bước là gì? Khác P&B gốc thế nào?"
```
**Deepen:**
```bash
nlm notebook query pb-defense-ai "How does the multi-framework integration (P&B + VDI 2206 + Agile + CRISP-DM + MIL-STD) work for defense AI products?"
```

### T7 — PDF Deep Dive
**Prime:**
```bash
nlm notebook query pb-textbook "Chapters 1-5: What are the most important diagrams and tables that show the design process visually? List the figure numbers and what each shows."
```

### CN — Integration
**Synthesis:**
```bash
nlm notebook query pb-textbook "Synthesize Chapters 2-5: What is the logical flow from systems thinking → product planning → problem solving → task clarification? How does each chapter build on the previous?"
```
```bash
nlm notebook query pb-defense-ai "How does adding AI change the systems hierarchy and requirements process compared to pure mechanical design?"
```

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch2_Systems_Fundamentals/    (8 files)
├── Ch3_Product_Planning/        (3 files)
├── Ch4_Problem_Solving/         (3 files)
├── Ch5_Task_Clarification/      (3 files)
└── Frameworks/                  (5 files)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch1-Ch5)
```

## Rubric Tự Đánh Giá — Cuối Tuần 1

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| E/M/S analysis | Chỉ thấy obvious flows | Đủ 3 loại, interactions marked | Secondary + hidden flows identified | |
| Systems hierarchy | Trộn function/construction | 4-level, clean separation | Identify hidden functions at each level | |
| P&B phase mapping | Biết tên phases | Map product vào phases correctly | Predict rework from phase violations | |
| Requirements quality | Chỉ đọc | Audit quality, find gaps | Propose improvements + validate vs PDF | |
| Framework integration | Biết frameworks riêng lẻ | Thấy overlaps | Resolve conflicts, propose synthesis | |

**Scoring:** < 2 avg → lặp tuần 1. ≥ 2 → qua tuần 2. > 4 → tăng tốc tuần 2.
