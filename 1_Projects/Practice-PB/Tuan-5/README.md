---
created: 2026-03-21
type: practice-guide
week: 5
topic: "Deep Phase 3 — Embodiment Principles + Force Flow"
hours: 21
dates: 2026-04-21 → 2026-04-27
---

# Tuần 5: Deep Phase 3 — Embodiment Principles + Force Flow (21 giờ)

## Mục Tiêu Tuần
- [ ] Hiểu 15 steps of embodiment (simultaneous, NOT sequential)
- [ ] Master 3 basic rules: Clarity, Simplicity, Safety
- [ ] Master force flow analysis: direct/short/uniform paths
- [ ] Hiểu self-help (chi parameter), stability, fault-free design
- [ ] Extract embodiment patterns từ 13 worked examples
- [ ] DELIVERABLE: 8-Criterion Principles Review VN-12.7MM

## Lịch Học

| Ngày | Chủ đề | Tài liệu | NLM Prime | Output |
|------|--------|-----------|-----------|--------|
| **T2** | 7.1 15 Steps of Embodiment | Ch7 files | `pb-textbook` 7.1 | 15-step checklist |
| **T3** | 7.3 Three Basic Rules | Ch7 files | `pb-textbook` 7.3 | Clarity/Simplicity/Safety scoring |
| **T4** | 7.4.1-7.4.2 Force Transmission + Division of Tasks | Ch7 files | `pb-textbook` 7.4 | Two-channel force flow |
| **T5** | 7.4.3-7.4.5 Self-Help + Stability + Fault-Free | Ch7 files | `pb-textbook` 7.4 | Self-help + fault-free analysis |
| **T6** | Worked Examples 6 embodiment | Ch7_Embodiment_Principles/ | `pb-textbook` examples | Pattern extraction |
| **T7** | Worked Examples 7 embodiment | Ch7_Embodiment_Principles/ | `pb-textbook` examples | Pattern extraction |
| **CN** | DELIVERABLE: 3 Rules + 5 Principles Review | All above | All 4 notebooks | 8-criterion review |

## NLM Queries Mỗi Ngày

### T2 — 7.1 15 Steps of Embodiment
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.1: List all 15 steps. Which simultaneous? Why is embodiment NOT a Gantt chart?"
```
**Validate:**
```bash
nlm notebook query pb-mastery "How do practitioners actually sequence the 15 embodiment steps? What is the real-world order vs textbook?"
```

### T3 — 7.3 Three Basic Rules
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.3: 3 basic rules — Clarity, Simplicity, Safety. How do they interact? Safety as ethical imperative?"
```
**Deepen:**
```bash
nlm notebook query pb-defense-ai "For defense training devices: how does Safety rule differ from consumer products? Dual-use safety concerns?"
```

### T4 — 7.4.1-7.4.2 Force Transmission
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.4.1-7.4.2: direct/short/uniform force paths? Division of tasks — separate vs combine?"
```
**Validate:**
```bash
nlm notebook query pb-textbook "I traced 2 force channels in pneumatic simulator — 4 direction changes in Channel A. Too indirect?"
```
**Deepen:**
```bash
nlm notebook query pb-mechai "Khung THIẾT KẾ: How does WX handle force flow analysis for training simulators with recoil?"
```

### T5 — 7.4.3-7.4.5 Self-Help + Stability + Fault-Free
**Prime:**
```bash
nlm notebook query pb-textbook "Section 7.4.3-7.4.5: Self-Help chi parameter? Stability types? Fault-free — fail-safe vs fail-soft?"
```
**Validate:**
```bash
nlm notebook query pb-defense-ai "Fail-safe vs fail-soft for military training equipment: which is required? MIL-STD guidance?"
```

### T6 — Worked Examples 6 Embodiment
**Prime:**
```bash
nlm notebook query pb-textbook "Embodiment examples: MachineGunMount, LOMAH, SmallArms, TowedTarget, TargetUSV, RAMS — what force flow patterns emerge?"
```

### T7 — Worked Examples 7 Embodiment
**Prime:**
```bash
nlm notebook query pb-textbook "Embodiment examples: ImpulseTestRig, UAVCatapult, TargetUAV, TetheredDrone, TrainingGrenade, RadarIR, NavalWeapon — what principles applied?"
```

### CN — DELIVERABLE
**Synthesis:**
```bash
nlm notebook query pb-textbook "Section 7.3-7.4: How to score a design against 3 basic rules + 5 principles? Rating scale?"
```
```bash
nlm notebook query pb-mastery "What does a rigorous embodiment principles review look like? Best practice from literature?"
```

## Tài Liệu Tham Khảo

### Markdown Files (đọc trong vault)
```
3_Resources/Books & Articles/Engineering Design/
├── Ch7_Embodiment_Principles/     (main reading — 7.1, 7.3, 7.4)
├── Ch7_Evaluation_Detail/         (review from Week 2)
└── Ch6_Worked_Examples/           (embodiment patterns)
```

### PDF (tra cứu khi cần)
```
3_Resources/Technical-References/Pahl-Beitz-Methodology/
└── Pahl_Beitz_Engineering_Design_A_Systemat.pdf (Ch7)
```

## Rubric Tự Đánh Giá — Cuối Tuần 5

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| Force flow diagram quality | No diagram | 2-channel diagram, stress points marked | Force paths optimized, direction changes minimized | |
| Principles application (all 8) | Applied <4 criteria | All 8 criteria scored | Score + redesign suggestions per criterion | |
| Pattern recognition (13 examples) | Recall <5 patterns | Recall 10+ patterns, categorized | Apply patterns to new product spontaneously | |
| Redesign quality | Cosmetic suggestions | Structural improvements identified | Redesign + quantified improvement estimate | |
| Fail-safe identification | Not analyzed | Fail-safe vs fail-soft identified | Full failure mode → mitigation mapping | |

**Scoring:** < 2 avg → lặp tuần 5. ≥ 2 → qua tuần 6. > 4 → tăng tốc tuần 6.
