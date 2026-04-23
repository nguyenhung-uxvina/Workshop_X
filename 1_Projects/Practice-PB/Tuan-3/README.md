---
created: 2026-03-21
type: practice-guide
week: 3
topic: "Deep Phase 2 — Abstraction + Function Structure"
hours: 21
dates: 2026-04-07 → 2026-04-13
---

# Tuần 3: Deep Phase 2 — Abstraction + Function Structure (21 giờ)

## Mục Tiêu Tuần
- [ ] Master 5-step abstraction (solution-neutral, <15 phút)
- [ ] Xây function structure hoàn chỉnh VN-12.7MM (≥7 SF, 6 flows)
- [ ] Hiểu solution-determining subfunction concept
- [ ] Tìm working principles cho từng subfunction
- [ ] Extract patterns từ 15 worked examples
- [ ] DELIVERABLE: Full 5-step abstraction + 6-flow function structure VN-12.7MM

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | 6.1-6.2 Steps + 5-Step Abstraction | Ch6 files | `pb-textbook` 6.2 | Abstraction × 3 products |
| **T3** | 6.3 Overall Function + Sub-functions | Ch6 files | `pb-textbook` 6.3 | Function structure VN-12.7MM |
| **T4** | 6.4 Working Principles Search + Combine | Ch6 files | `pb-textbook` 6.4 | Working principles matrix |
| **T5** | Worked Examples Set 1 (5 conceptual) | Ch6_Worked_Examples/ | `pb-textbook` examples | Pattern extraction |
| **T6** | Worked Examples Set 2 (5 conceptual) | Ch6_Worked_Examples/ | `pb-textbook` examples | Pattern extraction |
| **T7** | Worked Examples Set 3 (5 conceptual) | Ch6_Worked_Examples/ | `pb-textbook` examples | Pattern extraction |
| **CN** | DELIVERABLE: Final Abstraction + Function Structure | All above | All 4 notebooks | Publishable quality |

## NLM Queries Mỗi Ngày

### T2 — 6.1-6.2 Steps + 5-Step Abstraction
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.2: Explain 5-step abstraction in detail. What does solution-neutral mean? Krick bag-filling example?"
```
**Validate (sau bài tập):**
```bash
nlm notebook query pb-textbook "I abstracted pneumatic recoil simulator — is this the right abstraction level?"
```
**Deepen:**
```bash
nlm notebook query pb-mastery "What are common abstraction mistakes documented in literature? Over-abstraction vs under-abstraction?"
```

### T3 — 6.3 Overall Function + Sub-functions
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.3: How to establish overall function and break into subfunctions? What is solution-determining subfunction?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "I decomposed recoil simulator into 7 subfunctions — did I miss the solution-determining one?"
```
**Deepen:**
```bash
nlm notebook query pb-mechai "Khung THIẾT KẾ: 6-flow function structure — how to assign Data, Computation, Trust flows to each subfunction?"
```

### T4 — 6.4 Working Principles
**Prime:**
```bash
nlm notebook query pb-textbook "Section 6.4: How to search for working principles systematically?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "For defense training simulators: what working principles are commonly used for recoil simulation?"
```

### T5 — Worked Examples Set 1
**Prime:**
```bash
nlm notebook query pb-textbook "Worked examples: UAV Catapult, Training Grenade, LOMAH, Small Arms Sim, Target USV — what conceptual design patterns emerge?"
```

### T6 — Worked Examples Set 2
**Prime:**
```bash
nlm notebook query pb-textbook "Worked examples: Naval Weapon Sim, Machine Gun Mount, RCWS 12.7mm, RCWS Sim, B41 RPG — common function structure patterns?"
```

### T7 — Worked Examples Set 3
**Prime:**
```bash
nlm notebook query pb-textbook "Worked examples: Radar IR, Artillery/Mortar/MANPADS, Maritime Law, Naval AK176, RAMS AI — what distinguishes complex from simple examples?"
```

### CN — DELIVERABLE
**Synthesis:**
```bash
nlm notebook query pb-textbook "Section 6.2-6.4: What makes a publishable-quality function structure? Completeness criteria?"
```
```bash
nlm notebook query pb-mastery "How do expert designers validate their function structures? What are the review criteria?"
```

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch6_Conceptual_Design/     (main reading)
├── Ch6_Worked_Examples/       (15 examples across 3 days)
└── Frameworks/                (6-flow reference)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch6)
```

## Rubric Tự Đánh Giá — Cuối Tuần 3

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| Abstraction speed | >30 phút/product | <15 phút, solution-neutral | <10 phút + identify hidden assumptions | |
| Function structure completeness | <5 SF, missing flows | ≥7 SF, 6 flows assigned | Solution-determining SF identified + justified | |
| Solution-neutrality | Solution words in abstraction | Neutral language, no tech bias | Actively test: "could this be solved differently?" | |
| Pattern recognition | Can't recall examples | Recall 5+ patterns from examples | Apply pattern to new product spontaneously | |
| Consistency with previous work | Contradicts Week 1 outputs | Consistent, builds on Week 1 | Identifies and resolves Week 1 gaps | |

**Scoring:** < 2 avg → lặp tuần 3. ≥ 2 → qua tuần 4. > 4 → tăng tốc tuần 4.
