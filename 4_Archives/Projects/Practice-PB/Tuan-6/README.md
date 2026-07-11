---
created: 2026-03-21
type: practice-guide
week: 6
topic: "Deep Phase 3 — All DfX + Gate 3 + Capstone"
hours: 21
dates: 2026-04-28 → 2026-05-04
---

# Tuần 6: Deep Phase 3 — All DfX + Gate 3 + Capstone (21 giờ)

## Mục Tiêu Tuần
- [ ] Master 12 DfX topics cho VN-12.7MM
- [ ] DELIVERABLE: Complete DfX Review VN-12.7MM
- [ ] DELIVERABLE: Gate 3 Review VN-12.7MM (GO/REVISE/NO-GO)
- [ ] CAPSTONE: Full Phase 2→3 cho new product, KHÔNG notes
- [ ] Teaching ability: giải thích P&B trong 10 phút

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | DfX Part 1: DfProduction + DfAssembly | Ch7.5.8-9 | `pb-textbook` 7.5.8-9 | DfM/DfA review |
| **T3** | DfX Part 2: DfMaintenance + DfErgonomics | Ch7.5.10 + 7.5.6 | `pb-textbook` 7.5.10 + 7.5.6 | DfMaint/DfErgo review |
| **T4** | DfX Part 3: DfSafety + DfStandards | Ch7.5.12-13 | `pb-textbook` 7.5.12-13 | FMEA-lite + standards |
| **T5** | DfX Part 4: DfExpansion + Corrosion + Wear | Ch7.5.2-5 | `pb-textbook` 7.5.2-5 | Material/environment review |
| **T6** | DELIVERABLE: Complete DfX Review VN-12.7MM | All Ch7.5 | `pb-textbook` Ch7.5 | 12-topic DfX report |
| **T7** | DELIVERABLE: Gate 3 Review VN-12.7MM | All Phase 3 materials | `pb-textbook` 7.6 | Gate 3 verdict |
| **CN** | CAPSTONE: Full Phase 2→3, NO notes | Trí nhớ ONLY | None | Independence test |

## NLM Queries Mỗi Ngày

### T2 — DfX Part 1: DfProduction + DfAssembly
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.5.8-9: Top 5 DfM rules? Top 5 DfA rules? Part count reduction?"
```
**Deepen:**
```bash
nlm notebook query pb-defense-ai "DfA for defense field maintenance — different from factory assembly?"
```

### T3 — DfX Part 2: DfMaintenance + DfErgonomics
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.5.10 + 7.5.6: Maintenance levels? Ergonomics under stress?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "MIL-STD maintenance levels for training equipment? Field vs depot maintenance requirements?"
```

### T4 — DfX Part 3: DfSafety + DfStandards
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.5.12: Risk hierarchy eliminate→reduce→protect→warn? FMEA? Section 7.5.13: Standards compliance?"
```
**Deepen:**
```bash
nlm notebook query pb-defense-ai "FMEA for training simulators: what failure modes are unique vs standard mechanical products?"
```

### T5 — DfX Part 4: DfExpansion + Corrosion + Wear
**Prime:**
```bash
nlm notebook query pb-textbook "Sections 7.5.2-5: Thermal expansion tropical? Corrosion protection? 4 types of wear?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "Tropical maritime corrosion for aluminum/steel training equipment in Vietnam? Salt spray hours?"
```

### T6 — DELIVERABLE: Complete DfX Review
**Prime:**
```bash
nlm notebook query pb-textbook "Chapter 7.5: Synthesize ALL DfX. Top 3 critical for pneumatic training simulator in tropical maritime?"
```
**Deepen:**
```bash
nlm notebook query pb-mastery "What DfX topics are most often overlooked by mechanical engineers? Common blind spots?"
```

### T7 — DELIVERABLE: Gate 3 Review
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.6: Dual technical-economic rating? GO vs REVISE vs NO-GO criteria?"
```
**Validate:**
```bash
nlm notebook query pb-mastery "What evidence distinguishes a rigorous Gate 3 from a rubber-stamp Gate 3?"
```

### CN — CAPSTONE
**No NLM queries allowed.** This is an independence test.

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch7_Embodiment_Principles/     (DfX sections 7.5.x)
├── Ch7_Evaluation_Detail/         (Gate 3 evaluation)
├── Ch7_Design_Guidelines/         (DfX guidelines)
└── Ch6_Conceptual_Design/         (review for capstone)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch7)
```

## Rubric Tự Đánh Giá — Cuối Tuần 6 (Final)

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| DfX coverage (12 topics) | <6 topics scored | All 12 topics scored | Each topic with evidence + actions | |
| Gate 3 rigor | Subjective opinion | Evidence-based, dual rating | GO/REVISE/NO-GO with quantified criteria | |
| Capstone quality | Phase 2 incomplete in 3h | Phase 2 in <1h, Phase 3 started | Phase 2 complete + Phase 3 principles applied | |
| Independence | Need notes constantly | Occasional reference only | No notes needed for core flow | |
| Teaching ability | Can't explain clearly | Explain P&B in 10 min to engineer | Explain + answer questions + give examples | |

**Final Scoring:** < 2 avg → extend 2 weeks. ≥ 2 → Competent level confirmed. > 4 → Expert (emerging) confirmed.
