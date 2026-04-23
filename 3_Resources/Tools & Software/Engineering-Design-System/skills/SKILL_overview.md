# 🎯 PAHL & BEITZ + D-M-I-R OVERVIEW
## Quick Reference Card (Always Loaded)

---

## 📐 4 PHASES CỦA PAHL & BEITZ

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 1: TASK CLARIFICATION                                    │
│  ─────────────────────────────────────────────────────────────  │
│  Input:  Customer need, market opportunity                      │
│  Output: Requirements List (validated specification)            │
│  Key:    MUST vs WISH, quantified, verifiable                   │
│  Time:   10-15% of total project                                │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 2: CONCEPTUAL DESIGN                                     │
│  ─────────────────────────────────────────────────────────────  │
│  Input:  Requirements List                                      │
│  Output: Selected concept with evaluation rationale             │
│  Key:    Abstract → Function Structure → Morphological Matrix   │
│          → Concept Generation → VDI 2225 Evaluation             │
│  Time:   15-20% of total project                                │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 3: EMBODIMENT DESIGN                                     │
│  ─────────────────────────────────────────────────────────────  │
│  Input:  Selected concept                                       │
│  Output: Definitive layout with dimensions & materials          │
│  Key:    Basic Rules → Principles → Guidelines (DfX)            │
│          → Layout variants → Material selection                 │
│  Time:   35-40% of total project                                │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 4: DETAIL DESIGN                                         │
│  ─────────────────────────────────────────────────────────────  │
│  Input:  Definitive layout                                      │
│  Output: Complete production documentation                      │
│  Key:    Part drawings, BOMs, assembly instructions,            │
│          verification plan, cost calculations                   │
│  Time:   30-35% of total project                                │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 D-M-I-R MICRO-CYCLE (Áp dụng cho mọi task)

```
     ┌──────────┐
     │ DIAGNOSE │  "Vấn đề thực sự là gì?"
     │  (What)  │  - Surface vs root cause
     └────┬─────┘  - System structure
          │
          ▼
     ┌──────────┐
     │  MODEL   │  "Hệ thống hoạt động thế nào?"
     │  (Why)   │  - Feedback loops
     └────┬─────┘  - Constraints
          │
          ▼
     ┌──────────┐
     │INTERVENE │  "Đâu là điểm can thiệp hiệu quả nhất?"
     │  (How)   │  - Leverage points (L1-L12)
     └────┬─────┘  - Focused action
          │
          ▼
     ┌──────────┐
     │ REFLECT  │  "Đã học được gì? Cần thay đổi gì?"
     │ (Learn)  │  - What worked/failed
     └────┬─────┘  - Paradigm shifts needed
          │
          └───────────────────┐
                              ▼
                    [Next Cycle - Higher Leverage]
```

---

## ⚡ QUICK COMMANDS

| Tác vụ | Command |
|--------|---------|
| **Dự án mới** | "Tạo dự án mới: [tên]" |
| **Requirements** | "Tạo requirements list cho [dự án]" |
| **Function Structure** | "Tạo function structure cho [hệ thống]" |
| **Morphological Matrix** | "Tạo morphological matrix cho [vấn đề]" |
| **Concept Evaluation** | "Đánh giá concepts với VDI 2225" |
| **Layout Design** | "Thiết kế layout cho [component]" |
| **DfX Review** | "Review DfM/DfA cho [thiết kế]" |
| **D-M-I-R Reflection** | "Reflection cho tuần/dự án này" |

---

## 🎖️ DEFENSE STANDARDS QUICK REF

| Standard | Scope | When to Apply |
|----------|-------|---------------|
| MIL-STD-810 | Environmental testing | All defense products |
| MIL-STD-461 | EMC/EMI | Electronics, sensors |
| MIL-STD-882 | System safety | All systems |
| MIL-STD-1472 | Human factors | User interfaces |
| STANAG 4 | NATO interop | Export/coalition use |
| TCVN | Vietnamese standards | Local compliance |

---

## 📊 VDI 2225 SCORING (Simplified)

```
Điểm 0 = Tuyệt đối không đạt (unsuitable)
Điểm 1 = Chỉ vừa đủ đạt (just tolerable)
Điểm 2 = Đạt yêu cầu (adequate)
Điểm 3 = Tốt (good)
Điểm 4 = Rất tốt (very good/ideal)

Weighted Score = Σ(criterion_weight × score) / Σ(criterion_weight × 4)
Target: ≥70% cho defense products
```

---

## 🏭 VIETNAMESE MANUFACTURING CONTEXT

| Nhà cung cấp | Chuyên môn |
|--------------|------------|
| Nam Kim Steel | Structural steel |
| Hòa Phát | Steel, aluminum |
| Vitaco | Specialized components |
| T-Motor (CN) | Drone motors |
| Tattu (CN) | LiPo batteries |

**Local Content Target**: 60-75%
**Cost Target**: 60-70% của nhập khẩu tương đương

---

## 📂 FILE ORGANIZATION

```
vault/projects/VN-XXX-XXX/
├── 00_project_brief.md         # Overview, stakeholders
├── 01_requirements_list.md     # Phase 1 output
├── 02_function_structure.md    # Phase 2 start
├── 03_morphological_matrix.md  # Concept generation
├── 04_concept_evaluation.md    # VDI 2225
├── 05_embodiment_layout.md     # Phase 3
├── 06_detail_drawings/         # Phase 4
├── 07_verification_plan.md     # Test planning
├── 08_cost_analysis.md         # Cost modeling
└── 99_lessons_learned.md       # Reflection
```

---

## 🚦 PHASE GATE CHECKLIST

### ✅ Gate 1 → Phase 2 (Task Clarification Complete)
- [ ] All MUST requirements quantified
- [ ] Verification methods specified
- [ ] Stakeholder sign-off obtained
- [ ] Conflicts resolved

### ✅ Gate 2 → Phase 3 (Conceptual Design Complete)
- [ ] Function structure validated
- [ ] ≥3 concepts evaluated
- [ ] VDI 2225 score ≥70%
- [ ] Selection rationale documented

### ✅ Gate 3 → Phase 4 (Embodiment Complete)
- [ ] Definitive layout with dimensions
- [ ] Materials selected and justified
- [ ] DfX review completed
- [ ] Standards compliance verified

### ✅ Gate 4 → Production (Detail Design Complete)
- [ ] All drawings released
- [ ] BOM complete
- [ ] Verification plan ready
- [ ] Cost estimate finalized

---

*Để xem chi tiết từng phase, hãy yêu cầu load skill cụ thể*
*Ví dụ: "Load chi tiết Phase 2" hoặc "Hướng dẫn VDI 2225"*
