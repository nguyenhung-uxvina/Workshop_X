---
created: 2026-03-21
updated: 2026-03-21
type: practice-guide
topic: "Pahl-Beitz Engineering Design — Deep Mastery Phase 2 & 3"
level: competent-to-expert
duration_weeks: 6
hours_per_week: 21
total_hours: 126
project_anchor: VN-12.7MM-SIM
tags: [#type/practice-guide, #status/active, #topic/learning]
three_laws:
  - "Abstraction-Gate Law — ai skip abstraction sẽ thiết kế brilliantly cho bài toán sai"
  - "Loop-Size Law — within-phase loop = refinement, cross-phase loop = catastrophe"
  - "Solution-Determining Subfunction Law — 1 SF quyết định toàn bộ design downstream"
analysis_source: "Deep Analysis 10 key files (6-question framework) — 2026-03-21"
galaxy_candidates: 6
decision_bridge: "VN-12.7MM-SIM — 5 open decisions mapped"
dreyfus_baseline: "Adv.Beginner-Competent across 9 sub-skills"
schedule: "3h/ngày × 7 ngày (cả T7, CN)"
nlm_notebooks:
  - "pb-textbook — 069c732b — 7 PDF parts, 629pp P&B textbook gốc"
  - "pb-mastery — a7dbff9d — 19 web sources, academic critique + modern extensions"
  - "pb-mechai — fe6cbede — Khung THIẾT KẾ: 6-flow, Triple Helix, DfU, ACH"
  - "pb-defense-ai — 6c7fce5d — Thiết Kế Cơ Khí QP Tích Hợp AI: VDI 2206, Agile, CRISP-DM, MIL-STD"
nlm_usage: "4 notebooks = 4 perspectives: gốc → phê bình → WX adaptation → AI integration"
---

# Tài Liệu Tự Học: Pahl-Beitz — Deep Mastery Phase 2 & 3

> **Mục tiêu:** Sau 6 tuần, CEO thiết kế conceptual + embodiment ở mức chuyên nghiệp — không cần tra cứu, pattern recognition tự động, output đạt tiêu chuẩn peer review quốc tế.
> **Thời lượng:** 6 tuần × 21 giờ/tuần = 126 giờ | 3 giờ/ngày × 7 ngày
> **Dự án anchor:** VN-12.7MM-SIM (Tier 2, Phase 3)
> **Dreyfus:** Competent → Expert (emerging): adapt methodology to novel situations, teach others

---

## Ba Quy Luật Nền Tảng (Extracted từ Deep Analysis — CEO Validated 2026-03-21)

### 1. Abstraction-Gate Law — "Ai Skip Abstraction Sẽ Thiết Kế Brilliantly Cho Bài Toán Sai"
5-step abstraction (6.2) là cơ chế DUY NHẤT phá solution bias. FM-1 (Solution Bias Failure) = failure mode #1 của P&B practitioners. Defense sector compounds: procurement specs chứa solution language ("pneumatic recoil" thay vì "recoil force profile"). Đi chậm ở abstraction = đi nhanh toàn bộ project (1 tuần abstraction → tránh 3 tháng rework).
- **VN-12.7MM:** "pneumatic recoil simulator" → abstraction → "provide force profile for neuromuscular conditioning matching live 12.7mm" → opens EM, hydraulic, inertial alternatives.

### 2. Loop-Size Law — "Iteration Trong Phase Tốt, Qua Phase Chết"
P&B's entire front-loading logic tồn tại để convert potential cross-phase loops thành within-phase loops. Within-phase = explore more options (good). Cross-phase = months/years wasted (catastrophic). Mọi tool (requirements list, VDI 2225, SEPQATOM-CR) = early-warning systems cho loop size.
- **VN-12.7MM:** DfA issue ở Phase 3 → small loop (fix layout, days). Recoil profile wrong ở Phase 3 → cross-phase loop to Phase 1 (re-measure, months).

### 3. Solution-Determining Subfunction Law — "1 SF Quyết Định Toàn Bộ Design Downstream"
Không phải mọi subfunction đều bằng nhau (6.3.2). 1 subfunction quyết định working principle → cascade xuống tất cả decisions. Identify nó TRƯỚC, giải quyết TRƯỚC. Decompose deep ở solution-determining SF, shallow ở rest (adaptive design principle).
- **VN-12.7MM:** "Generate recoil force impulse" = solution-determining SF → quyết định pneumatic/hydraulic/EM → cascade: layout, DfM, cost, supply chain.

---

## Decision Bridge — VN-12.7MM-SIM (from Deep Analysis)

| Open Decision | Learning Insight | Impact |
|---------------|-----------------|--------|
| Recoil force target chưa đo live weapon | Abstraction-Gate → essential problem = force PROFILE, không chỉ peak force | 🔴 BLOCKING: đo live 12.7mm force-time curve TRƯỚC |
| RC-A Pneumatic selected (Doc 022) | Solution-Determining SF → đúng nếu pneumatic response matches waveform | Cần validate response time |
| Two-Channel architecture | Loop-Size Law → correct: tách 2 problems = smaller loops | ✓ Confirmed |
| DfA cho field maintenance | Field-DfA → O-ring replacement 3-fastener, no special tools, <15 phút | → Phase 3 checklist |
| Phase 3 completeness | P&B compliance audit needed — 12 docs chưa map vào P&B deliverables | → Tuần 2 exercise |

## Dreyfus Baseline (CEO self-assessed 2026-03-21)

| Sub-Skill | Baseline | Target |
|-----------|:--------:|:------:|
| 5-step abstraction | Adv.Beginner→Competent | Expert |
| 6-flow function structure | Competent | Expert |
| Morphological matrix | Competent | Expert |
| VDI 2225 + sensitivity | Competent | Expert |
| 3 Basic Rules (C/S/S) | Adv.Beginner | Proficient |
| 5 Embodiment Principles | Adv.Beginner | Proficient |
| DfX review (12 topics) | Adv.Beginner | Proficient |
| Force flow analysis | Adv.Beginner | Proficient |
| Pattern recognition | Competent | Expert |

---

## NLM Integration — 4 NotebookLM Study Partners

**Cost:** FREE (Gemini tokens). Query bao nhiêu cũng được.

### 4 Notebooks = 4 Perspectives

| # | Alias | Content | Khi nào dùng |
|---|-------|---------|-------------|
| 1 | **pb-textbook** | 629pp P&B textbook gốc (7 PDFs) | Tra cứu lý thuyết, definitions, examples, original diagrams |
| 2 | **pb-mastery** | 19 academic sources + papers | Phê bình, comparisons (vs U-E, Axiomatic), modern extensions |
| 3 | **pb-mechai** | Khung THIẾT KẾ (WX framework) | WX-specific: 6-flow E/M/S/D/C/T, Triple Helix, DfU, ACH |
| 4 | **pb-defense-ai** | Thiết Kế Cơ Khí QP Tích Hợp AI | Concurrent engineering, HIL, integration debt, MIL-STD, CRISP-DM |

### Cách Dùng Mỗi Ngày (3 thời điểm × 4 notebooks)

**1. TRƯỚC đọc markdown (Prime — 10 phút):**
```bash
# P&B gốc — what does the textbook say?
nlm notebook query pb-textbook "Summarize Section X.Y in 5 bullet points. Key principle and common mistake?"
```

**2. SAU bài tập (Validate — 10 phút):**
```bash
# Academic critique — did I miss something researchers found?
nlm notebook query pb-mastery "I applied [concept] to VN-12.7MM-SIM. What do researchers say about common mistakes with this technique?"
```

**3. SAU bài tập (Deepen — 10 phút — chọn 1 trong 2):**
```bash
# WX adaptation — how does our framework extend this?
nlm notebook query pb-mechai "Khung THIẾT KẾ: bước [T/H/I/Ế/T/K/Ế] áp dụng cho [topic hôm nay] thế nào?"

# HOẶC AI integration — defense-specific angle
nlm notebook query pb-defense-ai "How to handle [today's topic] when designing defense products with integrated AI? Integration debt? ACH implications?"
```

### Ví Dụ Query Theo Tuần

**Tuần 1 (Overview):**
```bash
pb-textbook: "Chapter 2: What are the 7 types of interrelationships in systems?"
pb-mechai:   "Khung THIẾT KẾ: 6-flow E/M/S/D/C/T — Data, Computation, Trust flows là gì?"
pb-defense-ai: "How does adding AI change the systems hierarchy in a defense product?"
```

**Tuần 3-4 (Phase 2 Deep):**
```bash
pb-textbook:   "Section 6.2: 5-step abstraction process with examples?"
pb-mastery:    "What do researchers criticize about P&B abstraction? Solution bias failure mode?"
pb-mechai:     "Khung THIẾT KẾ: bước I (Identify essential problem) — 6-flow abstraction?"
pb-defense-ai: "How to abstract a Mech-AI defense product? What's different from pure mechanical?"
```

**Tuần 5-6 (Phase 3 Deep):**
```bash
pb-textbook:   "Section 7.4: Force Transmission + Self-Help principles?"
pb-mastery:    "What are the top criticisms of P&B embodiment phase?"
pb-mechai:     "Khung THIẾT KẾ: bước T (Transpose to reality) — concurrent Mech/Elec/AI?"
pb-defense-ai: "Integration debt between mechanical and AI during embodiment? HIL testing strategy?"
```

### PATH Setup (chạy 1 lần đầu mỗi session)
```bash
export PATH="$PATH:/c/Users/ADMIN/AppData/Roaming/Python/Python313/Scripts"
export PYTHONIOENCODING=utf-8
export NO_COLOR=1
```

---

## Cấu Trúc 6 Tuần

```
TUẦN 1-2: OVERVIEW TOÀN BỘ P&B (Phase 0→4)
  ├── Ch2 Systems Fundamentals (foundation)
  ├── Ch3 Product Planning (Phase 0)
  ├── Ch4 Problem Solving (general process)
  ├── Ch5 Task Clarification (Phase 1)
  ├── Ch7.6-7.8 Evaluation + Detail (Phase 3-4)
  └── Frameworks integration
  → Mục tiêu: hiểu flow, biết khi nào dùng gì

TUẦN 3-4: DEEP MASTERY — PHASE 2 CONCEPTUAL DESIGN
  ├── Ch6.1-6.2 Abstraction + Essential Problem
  ├── Ch6.3 Function Structure (Overall + Sub-functions)
  ├── Ch6.4 Working Principles (Search + Combine)
  ├── Ch6.5 Concept Development + VDI 2225
  ├── Ch6.6.1 Worked Examples: 15 conceptual design cases
  └── DELIVERABLE: Full Phase 2 cho VN-12.7MM-SIM (redo from scratch)
  → Mục tiêu: chạy Phase 2 cho bất kỳ sản phẩm nào trong <4h

TUẦN 5-6: DEEP MASTERY — PHASE 3 EMBODIMENT DESIGN
  ├── Ch7.1 Steps of Embodiment (15-step process)
  ├── Ch7.3 Three Basic Rules (Clarity/Simplicity/Safety)
  ├── Ch7.4 Five Principles (Force/Tasks/Self-Help/Stability/Fault-Free)
  ├── Ch7.5 DfX Guidelines (23 files — all 12 DfX topics)
  ├── Ch6.6.2 Worked Examples: 13 embodiment cases
  └── DELIVERABLE: Full Phase 3 review cho VN-12.7MM-SIM
  → Mục tiêu: embodiment review đạt tiêu chuẩn peer review
```

## Dreyfus Progression Map

| Tuần | Focus | Target Level | Evidence |
|:----:|-------|:------------:|----------|
| 1 | Overview Ch2-Ch5: Foundation → Phase 1 | Proficient | Giải thích P&B flow cho kỹ sư mới trong 10 phút, không cần notes |
| 2 | Overview Ch7.6-7.8 + Frameworks: Phase 3-4 + Integration | Proficient | Map any product problem → đúng P&B phase + tool trong <2 phút |
| 3 | Phase 2 Deep: Abstraction + Function Structure | Expert (emerging) | 5-step abstraction + 6-flow function structure cho product mới trong <45 phút |
| 4 | Phase 2 Deep: Morpho + VDI 2225 + Worked Examples | Expert (emerging) | Full Phase 2 cho VN-12.7MM-SIM từ đầu, output = publishable quality |
| 5 | Phase 3 Deep: 3 Rules + 5 Principles + Force Flow | Expert (emerging) | Layout review dùng 8 criteria, identify ≥5 issues trong design hiện tại |
| 6 | Phase 3 Deep: All 12 DfX + Worked Examples + Capstone | Expert | Full DfX review + Gate 3 + teach others the methodology |

---

## TUẦN 1: Overview — Nền Tảng + Phase 0-1 (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | Ch2: Systems Fundamentals | 8 files Ch2/ | E/M/S diagram VN-12.7MM |
| T3 | 3h | Ch2 (cont.) + Ch3: Product Planning | Ch2 còn lại + 3 files Ch3/ | P11 exercise |
| T4 | 3h | Ch4: Problem Solving Process | 3 files Ch4/ | 6-phase mapping VN-12.7MM |
| T5 | 3h | Ch5: Task Clarification | 3 files Ch5/ | Requirements review VN-12.7MM |
| T6 | 3h | Frameworks: DMIR×ODI×P&B | Frameworks/ (5 files) | Integration map |
| T7 | 3h | PDF Deep Dive: Ch1-Ch5 textbook | PDF parts 1-3 | Annotated notes |
| CN | 3h | **Tuần 1 Integration + Self-Assessment** | All above | Reflection + rubric |

### Chi Tiết Ngày T2: Ch2 Systems Fundamentals (3 giờ)

**📘 NLM Prime (10 phút — chạy trước khi đọc):**
```bash
nlm notebook query pb-textbook "Summarize Chapter 2 Systems Fundamentals. What are the 7 types of interrelationships? What is the E/M/S flow concept? Give 1 example for each flow type."
```

**Giờ 1 — Đọc (Input):**
1. `Ch2/2.1 3 functional_interrelationship_analysis.md` (20 phút)
2. `Ch2/2.1.2 energy_material_signal_analysis.md` (20 phút)
3. `Ch2/2.1.4 Working_Interrelationship_Comprehensive_Analysis.md` (20 phút)

**Giờ 2 — Đọc + Ghi chú (Input + Processing):**
4. `Ch2/2.1.1 systems_hierarchy_comprehensive_analysis.md` (20 phút)
5. `Ch2/2.1.5-2.1.6 Constructional + System Interrelationship.md` (20 phút)
6. `Ch2/2.1.7 Systematic Guideline.md` (20 phút)

Ghi chú theo format:
- **Concept:** [tên] — **Feynman 60s:** [giải thích đơn giản] — **Ví dụ VN-12.7MM:** [áp dụng]

**Giờ 3 — Thực Hành (Output):**

**Bài Tập T2.1: E/M/S Full Analysis cho VN-12.7MM-SIM** (60 phút)
- **Mô tả:** Vẽ complete E/M/S flow diagram cho toàn hệ thống VN-12.7MM-SIM
- **Input:** `VN-12.7MM-SIM/_Project_Brief.md` + Phase 3 docs (12 docs hiện có)
- **Output:** Diagram A3 (hoặc digital): mọi Energy flow (recoil, pneumatic pressure, electrical power), Material flow (compressed air, projectile path, structural loads), Signal flow (sensor data, fire command, feedback)
- **Tiêu chí đạt:**
  - [ ] ≥5 Energy flows identified (recoil force, pneumatic, spring, electrical, thermal)
  - [ ] ≥3 Material flows (air, bolt movement, mounting structure)
  - [ ] ≥5 Signal flows (trigger, sensor, display, feedback, safety interlock)
  - [ ] Flow interactions marked (where E crosses M, where S controls E)
  - [ ] Domain assignment: Mechanical / Electrical / AI per flow
- **Nếu bí:** Trace ONE complete firing sequence from trigger pull → recoil → reset. Mọi flow sẽ hiện ra.

**📘 NLM Validate (15 phút — chạy sau bài tập):**
```bash
nlm notebook query pb-textbook "Section 2.1.2: For a pneumatic recoil simulator system, what are the primary Energy flows, Material flows, and Signal flows? Did I miss any secondary flows like thermal dissipation or acoustic energy?"
```

### Chi Tiết Ngày T3: Ch2 (cont.) + Ch3 Product Planning (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Summarize Chapter 3 Product Planning. What are P09, P10, P11, P12? What is the difference between a Product Proposal (P11) and a Development Specification (P12)?"
```

**Giờ 1 — Systems Hierarchy cho VN-12.7MM-SIM:**

**Bài Tập T3.1: 4-Level Systems Hierarchy** (60 phút)
- System → Subsystem → Assembly → Component cho VN-12.7MM-SIM
- Mỗi level ghi: Function (what it does) + Interfaces (what it connects to)
- Tiêu chí: ≥4 subsystems, ≥3 assemblies per subsystem, ≥2 components per assembly

**Giờ 2 — Product Planning (Ch3):**
- Đọc 3 files Ch3/ (60 phút)
- Focus: P09 Situation Analysis → P10 Idea Generation → P11 Proposal → P12 Definition
- Liên hệ: VN-12.7MM-SIM đã qua P11 chưa? P12 ở đâu?

**Giờ 3 — Bài Tập:**

**Bài Tập T3.2: Reverse-Engineer P12 cho VN-12.7MM-SIM** (60 phút)
- VN-12.7MM-SIM đang Phase 3 nhưng P12 có thể chưa formal
- Viết P12 Development Specification retrospectively: scope, constraints, success criteria
- Tiêu chí: P12 consistent với 12 docs hiện có? Identify gaps nếu có.

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Chapter 3: What should a P12 Development Specification contain according to Pahl-Beitz? List all required sections. How does P12 differ from a requirements list?"
```

### Chi Tiết Ngày T4: Ch4 Problem Solving (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Chapter 4 Section 4.1: Explain the 6-phase general problem solving process. What is the TOTE model? Why is iteration structurally expected, not a failure? What determines if iteration is healthy or catastrophic?"
```

**Giờ 1-2 — Đọc + Processing:**
1. `Ch4/4.1 General Problem Solving Process.md` — 6-phase model
2. `Ch4/4.2 Flow of Work During the Process of Designing.md` — iteration patterns
3. `Ch4/4.3 Effective Organisation Structures.md` — team structures

**Giờ 3 — Bài Tập:**

**Bài Tập T4.1: Iteration Map cho VN-12.7MM-SIM** (60 phút)
- Map lịch sử phát triển VN-12.7MM-SIM vào 6-phase model
- Đánh dấu: iterations, backtracking, phase skips
- Identify: quyết định nào led to rework? Phase nào bị skip?
- Output: Iteration timeline + 3 lessons learned

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 4.2: What are the typical iteration patterns during the design process? When should a designer decide to STOP development rather than iterate? How does front-loading in early phases reduce iteration cost?"
```

### Chi Tiết Ngày T5: Ch5 Task Clarification (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Chapter 5 Section 5.2: How to set up a requirements list? What is the D/W classification? What is the difference between Demands and Wishes in terms of their LOGICAL ROLE in decision-making? Give examples of each."
```

**Giờ 1-2 — Đọc + Processing:**
1. `Ch5/5.1 Importance of Task Clarification.md`
2. `Ch5/5.2 Setting Up a Requirements List.md`
3. `Ch5/5.3-5.4 Using Requirements Lists and Practical Application.md`

**Giờ 3 — Bài Tập:**

**Bài Tập T5.1: Requirements Quality Audit cho VN-12.7MM-SIM** (60 phút)
- Đọc lại Doc 002 (requirements list, 205 reqs)
- Audit: % quantified? D/W/X distribution? Missing categories?
- Compare với VN-AST (103 reqs) và VN-XUONG (107 reqs): patterns?
- Output: Quality score + improvement actions

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 5.2-5.4: What makes a good requirements list? What are the common mistakes in writing requirements? How should requirements be quantified? What percentage of requirements should have measurable criteria?"
```

### Chi Tiết Ngày T6: Frameworks Integration (3 giờ)

**Giờ 1 — Đọc:**
1. `Frameworks/DMIR_ODI_Engineering_Design_Framework.md` (30+ pages — skim, focus Section 3)
2. `Frameworks/Engineering_Design_defense_security_adaptation.md`

**Giờ 2 — Đọc:**
3. `Frameworks/Engineering_Design_SOP_Lean6Sigma.md`
4. `Frameworks/Strategic_Portfolio_Review_Defense_Training.md`

**Giờ 3 — Bài Tập:**

**Bài Tập T6.1: Framework Integration Map** (60 phút)
- Vẽ diagram: P&B × DMIR × ODI × FORGE/HELIX — chồng lên nhau thế nào?
- Identify: synergies (reinforce), conflicts (contradict), gaps (missing)
- Output: 1-page integration map + 3 integration insights

### Chi Tiết Ngày T7: PDF Deep Dive (3 giờ)

**Giờ 1-3 — Đọc PDF textbook:**
- `Pahl_Beitz_Engineering_Design_A_Systemat.pdf` — Chapters 1-5
- Focus: diagrams, tables, examples — những thứ markdown files không capture
- Ghi chú: ≥10 "aha moments" — things the markdown files missed or simplified

**Bài Tập T7.1: PDF vs Markdown Gap Analysis** (tích hợp trong đọc)
- List ≥5 concepts/diagrams từ PDF mà markdown files thiếu hoặc simplified
- Đánh giá: markdown files cover bao nhiêu % nội dung PDF?

### Chủ Nhật: Tuần 1 Integration + Self-Assessment (3 giờ)

**Giờ 1 — Tổng hợp:**
- Review tất cả ghi chú tuần 1
- Viết "Tuần 1 Summary" — 1 trang: key learnings, surprises, gaps

**Giờ 2 — Self-Assessment Rubric:**

| Dimension | 1 (Chưa đạt) | 3 (Đạt) | 5 (Xuất sắc) | Score |
|-----------|-------------|---------|-------------|:-----:|
| E/M/S analysis | Chỉ thấy obvious flows | Đủ 3 loại, interactions marked | Secondary + hidden flows identified | |
| Systems hierarchy | Trộn function/construction | 4-level, clean separation | Identify hidden functions at each level | |
| P&B phase mapping | Biết tên phases | Map product vào phases, identify current | Predict rework from phase violations | |
| Requirements quality | Chỉ đọc | Audit quality, find gaps | Propose improvements + validate against PDF | |
| Framework integration | Biết frameworks riêng lẻ | Thấy overlaps | Resolve conflicts, propose synthesis | |

**Scoring:** Trung bình < 2 → lặp tuần 1. ≥ 2 → qua tuần 2. > 4 → tăng tốc tuần 2.

**Giờ 3 — Reflection + Galaxy Check:**
1. Mental model nào thay đổi nhất tuần này?
2. Feynman test: giải thích P&B cho kỹ sư WX trong 5 phút?
3. Galaxy candidates? (ghi vào backlog, không tạo ngay)
4. VN-12.7MM-SIM: insight nào từ tuần 1 thay đổi cách nhìn Phase 3?

---

## TUẦN 2: Overview — Phase 3-4 + Evaluation + Full Flow (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | Ch7.6: Evaluating Embodiment Designs | 3 files Evaluation Part 1-3 | Evaluation framework notes |
| T3 | 3h | Ch7.7: Embodiment Design Example | 2 files Example Part 1-2 | Extract patterns |
| T4 | 3h | Ch7.8: Detail Design | 3 files Detail Part 1-3 | Detail design checklist |
| T5 | 3h | PDF Deep Dive: Ch6-Ch7 textbook | PDF parts 4-7 | Annotated notes |
| T6 | 3h | Cross-reference: 12 docs VN-12.7MM vs P&B phases | All 12 existing docs | Gap analysis |
| T7 | 3h | Full P&B Flow Exercise: mock Phase 0→2 | All notes so far | Speed run |
| CN | 3h | **Tuần 2 Integration + Mid-point Assessment** | All | Reflection + rubric |

### Chi Tiết Ngày T2: Evaluating Embodiment Designs (3 giờ)

**Giờ 1-2 — Đọc:**
1. `Ch7_Evaluation_Detail/7.6 Evaluating Part1.md` — evaluation principles, dual rating
2. `Ch7_Evaluation_Detail/7.6 Evaluating Part2.md` — S-diagram, technical rating
3. `Ch7_Evaluation_Detail/7.6 Evaluating Part3.md` — economic rating, combined assessment

**Giờ 3 — Bài Tập:**

**Bài Tập W2-T2: VDI 2225 Re-evaluation cho VN-12.7MM-SIM** (60 phút)
- Re-run VDI 2225 evaluation trên current concept (RC-A Pneumatic)
- Thêm: S-diagram, technical + economic dual rating
- So sánh kết quả với lần evaluation trước (Doc 022)
- Tiêu chí: evaluation reproducible? Criteria weights justified?

### Chi Tiết Ngày T6: Cross-Reference VN-12.7MM 12 docs vs P&B (3 giờ)

**Bài Tập W2-T6: P&B Compliance Audit** (3 giờ — full session)
- Đọc lại tất cả 12 docs của VN-12.7MM-SIM
- Map mỗi doc vào P&B phase + deliverable type
- Identify: P&B deliverables nào THIẾU? Deliverables nào vượt P&B?
- Output: Compliance matrix + action plan cho Phase 3 completion

| P&B Deliverable | VN-12.7MM Doc | Status | Gap |
|----------------|---------------|:------:|-----|
| P12 Development Spec | Doc 001? | ? | ? |
| Requirements List | Doc 002 | ✓ | ? |
| Function Structure | ? | ? | ? |
| Morphological Matrix | ? | ? | ? |
| VDI 2225 Evaluation | Doc 022 | ✓ | ? |
| ... | ... | ... | ... |

### Chủ Nhật: Mid-Point Assessment (3 giờ)

**Giờ 1 — Full P&B Knowledge Check:**
- Không mở tài liệu. Viết từ trí nhớ:
  - 5 phases + câu hỏi mỗi phase
  - 6-phase problem solving process
  - Requirements list structure (D/W/X)
  - Key deliverables mỗi phase
- Sau đó check vs tài liệu: bao nhiêu % đúng?

**Giờ 2 — VN-12.7MM Gap Action Plan:**
- Từ compliance audit (T6): prioritize gaps
- Plan: gaps nào fix trong tuần 3-4 (Phase 2 deep)?
- Plan: gaps nào fix trong tuần 5-6 (Phase 3 deep)?

**Giờ 3 — Rubric + Reflection:**

| Dimension | 1 | 3 | 5 | Score |
|-----------|---|---|---|:-----:|
| P&B phase recall | Nhớ 3/5 phases | Nhớ 5/5 + deliverables | Recall + explain rationale for sequence | |
| Evaluation methods | Biết VDI 2225 exists | Run VDI 2225 independently | Dual rating + sensitivity + S-diagram | |
| Detail design awareness | Biết Phase 4 tồn tại | List key deliverables | Map manufacturing constraints to design | |
| VN-12.7MM P&B compliance | Biết có 12 docs | Map docs → phases | Identify gaps + propose fixes | |
| Cross-phase integration | Phases là separate steps | See phase transitions | Predict where phase outputs feed next phase | |

---

## TUẦN 3: Deep Phase 2 — Abstraction + Function Structure (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | 6.1-6.2: Steps + 5-Step Abstraction | Ch6/ 6.1-6.2 file + PDF Ch6 | Abstraction mastery drill |
| T3 | 3h | 6.3: Overall Function + Sub-functions | Ch6/ 6.3.1-6.3.3 (3 files) | Function structure VN-12.7MM |
| T4 | 3h | 6.4: Working Principles Search + Combine | Ch6/ 6.4.1-6.4.2 (2 files) | Working principles matrix |
| T5 | 3h | Worked Examples Set 1: 5 conceptual designs | Ch6_Worked_Examples/ (5 files) | Pattern extraction |
| T6 | 3h | Worked Examples Set 2: 5 conceptual designs | Ch6_Worked_Examples/ (5 files) | Pattern consolidation |
| T7 | 3h | Worked Examples Set 3: 5 defense-specific | Ch6_Worked_Examples/ (5 files) | Defense pattern library |
| CN | 3h | **DELIVERABLE: Full 5-step abstraction + function structure VN-12.7MM** | All | Real deliverable |

### Chi Tiết Ngày T2: 5-Step Abstraction Mastery (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 6.2: Explain the 5-step abstraction process in detail. What does 'solution-neutral' mean? Give the Krick bag-filling example showing 8 levels of abstraction. What are 'fictitious constraints' and how to identify them?"
```

**Giờ 1 — Đọc + Deep Study:**
- `Ch6/6.1 Steps of Conceptual Design - 6.2 Abstracting.md` — đọc kỹ, highlight mỗi step
- PDF textbook Ch6 Section 6.2 — xem original diagrams, tables

**Giờ 2 — Deliberate Practice: Abstraction Drill × 3:**

**Bài Tập W3-T2.1: 5-Step Abstraction × 3 Products** (90 phút)
- Chạy 5-step abstraction cho 3 products liên tiếp, tăng difficulty:
  1. **BB-01 LOMAH** (Easy — đã biết product) → 20 phút
  2. **VN-12.7MM-SIM** (Medium — anchor project) → 30 phút
  3. **Sản phẩm tưởng tượng: "Naval Bridge AI Console"** (Hard — chưa có context) → 40 phút

- **5 Steps cho mỗi sản phẩm:**
  - Step 1: Loại bỏ wishes cá nhân và yêu cầu không bản chất
  - Step 2: Quantify chỉ functional requirements bản chất
  - Step 3: Mở rộng — tổng quát hóa constraints
  - Step 4: Công thức hóa — essential problem statement
  - Step 5: Xác nhận — essential problem có giải quyết đúng vấn đề gốc?

- **Tiêu chí mỗi abstraction:**
  - [ ] Step 4 output ≤ 2 câu
  - [ ] Không chứa solution bias (không mention specific technology)
  - [ ] Có thể sinh ra ≥3 fundamentally different solutions
  - [ ] Feynman test: giải thích essential problem cho người không biết sản phẩm

**Giờ 3 — Reflection + Comparison:**
- So sánh 3 abstractions: pattern gì lặp lại?
- Abstraction nào khó nhất? Tại sao?
- Bao nhiêu phút mỗi abstraction? Target: <15 phút by tuần 4

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 6.2: I abstracted a pneumatic recoil simulator to 'provide force profile for neuromuscular conditioning matching live weapon'. Is this the right abstraction level? Too abstract or too specific? What would Pahl-Beitz suggest as the ideal abstraction for a training simulator?"
```

### Chi Tiết Ngày T3: Function Structure Mastery (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 6.3: How to establish an overall function and break it into subfunctions? What are the rules for function decomposition? What is a 'solution-determining subfunction'? When should you stop decomposing?"
```

**Giờ 1 — Đọc:**
1. `Ch6/6.3.1 Overall_Function_Comprehensive_Analysis.md`
2. `Ch6/6.3.2 Breaking a Function Down into Subfunctions.md`
3. `Ch6/6.3.3 Practical Applications of Function Structures.md`

**Giờ 2-3 — Bài Tập:**

**Bài Tập W3-T3: 6-Flow Function Structure cho VN-12.7MM-SIM** (2 giờ)
- Vẽ COMPLETE function structure: Energy/Material/Signal + Data/Computation/Trust
- Decompose overall function → ≥7 sub-functions
- Assign mỗi sub-function → domain (Mechanical/Electrical/AI)
- Mark: interfaces between sub-functions = ICD items
- **Output:** A3 diagram + sub-function table + ICD implications
- **Tiêu chí:**
  - [ ] Overall function stated (1 câu, solution-neutral)
  - [ ] ≥7 sub-functions, mỗi sub-function có clear input/output
  - [ ] All 6 flows represented
  - [ ] Domain assignment cho mỗi sub-function
  - [ ] ≥3 cross-domain interfaces identified
  - [ ] Function structure consistent với 5-step abstraction output

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 6.3.2: I decomposed a recoil simulator into 7 subfunctions. The textbook mentions 'solution-determining subfunction'. How do I identify which of my 7 subfunctions is the solution-determining one? What are the criteria?"
```

### Chi Tiết Ngày T5-T7: Worked Examples (3 × 3 = 9 giờ)

**Approach: 15 examples trong 3 ngày, 5 examples/ngày, 36 phút mỗi example**

**Ngày T5 — Set 1 (cơ bản → training systems):**
1. `6.6.1.a UAV_Catapult` — mechanical, clear E/M/S
2. `6.6.1.c Training_Grenade` — compact product, simple function structure
3. `6.6.1.g LOMAH_System` — BB-01 related, sensor system
4. `6.6.1.k Small_Arms_Simulator` — training simulation, ACH relevance
5. `6.6.1.d Target_USV` — marine, complex environment

**Ngày T6 — Set 2 (complex → weapon systems):**
6. `6.6.1.i Naval_Weapon_Simulator` — naval context
7. `6.6.1.k Machine_Gun_Mount_System` — **VN-12.7MM directly relevant**
8. `6.6.1.l RCWS_12_7mm` — **VN-12.7MM directly relevant**
9. `6.6.1.x RCWS_12_7mm_Simulator` — **VN-12.7MM directly relevant**
10. `6.6.1.q B41_RPG_AntiTank_Simulator` — weapon simulation pattern

**Ngày T7 — Set 3 (advanced → multi-domain):**
11. `6.6.1.f Radar_IR_Target_Simulation` — complex signal + ACH
12. `6.6.1.r Artillery_Mortar_MANPADS_Trainer` — multi-weapon platform
13. `6.6.1.s Maritime_Law_Enforcement_Simulator` — scenario-based
14. `6.6.1.z3 Naval_Weapons_AK176_AK630_Simulator` — large naval system
15. `6.6.1.z4 RAMS_AI_Platform` — AI platform, ACH pattern

**Cho MỖI example (36 phút):**
- Đọc (15 phút): focus abstraction, function structure, morphological matrix
- Extract (15 phút): 3 patterns + 1 mistake + 1 VN-12.7MM application
- Log (6 phút): ghi vào pattern library

**Chủ Nhật — DELIVERABLE:** Full 5-Step Abstraction + Function Structure cho VN-12.7MM-SIM (3 giờ)
- Synthesize all learned patterns
- Re-do abstraction (refined from T2 drill)
- Re-do function structure (refined from T3)
- Produce FINAL VERSION ready for project file
- Self-assess: compare quality vs 15 worked examples

---

## TUẦN 4: Deep Phase 2 — Morpho Matrix + VDI 2225 + Concept Selection (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | 6.4: Working Principles deep dive | Ch6/ 6.4.1-6.4.2 + PDF | WP search matrix |
| T3 | 3h | 6.5.1-6.5.2: Concept Development + VDI 2225 | Ch6/ 6.5 files | VDI 2225 mastery drill |
| T4 | 3h | 6.5.3: Practical Application + Sensitivity Analysis | Ch6/ 6.5.3 + VDI PDF | Sensitivity analysis VN-12.7MM |
| T5 | 3h | Worked Examples: VDI 2225 patterns across 10 examples | Ch6_Worked_Examples/ | VDI pattern extraction |
| T6 | 3h | **DELIVERABLE: Morphological Matrix VN-12.7MM** | All Phase 2 materials | Real deliverable |
| T7 | 3h | **DELIVERABLE: VDI 2225 Evaluation VN-12.7MM** | All Phase 2 materials | Real deliverable |
| CN | 3h | **Tuần 4: Phase 2 Capstone Assessment** | All | Full Phase 2 review |

### Chi Tiết Ngày T6: Morphological Matrix DELIVERABLE (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 6.4: How to build a morphological matrix? How to search for working principles systematically? What are the rules for combining working principles into concept variants? How to screen incompatible combinations?"
```

**Bài Tập W4-T6: Complete Morphological Matrix cho VN-12.7MM-SIM** (3 giờ)
- **Input:** Function structure (tuần 3) + working principles (T2-T3)
- **Process:**
  1. List ≥6 sub-functions from function structure
  2. For each: identify ≥3 working principles (physical, electronic, AI)
  3. Build morphological matrix
  4. Generate ≥3 concept variants by combining principles
  5. Screen variants: eliminate incompatible combinations
- **Output:** Morphological matrix + ≥3 viable concepts + screening rationale
- **Tiêu chí:**
  - [ ] ≥6 sub-functions covered
  - [ ] ≥3 working principles per sub-function
  - [ ] ≥3 concept variants generated
  - [ ] Incompatible combinations identified + eliminated
  - [ ] Each concept variant has descriptive name + 1-paragraph summary

### Chi Tiết Ngày T7: VDI 2225 DELIVERABLE (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 6.5.2: Explain VDI 2225 evaluation method step by step. What is the scoring scale (0-4)? What is the 60% threshold rule? How to construct an S-diagram (Rt vs Re)? What is sensitivity analysis and why is it critical? What are weak spots and how to handle them?"
```

**Bài Tập W4-T7: Full VDI 2225 + Sensitivity Analysis** (3 giờ)
- **Input:** ≥3 concepts from morphological matrix
- **Process:**
  1. Define ≥8 evaluation criteria (from requirements list)
  2. Assign weights (0-4) with justification
  3. Score each concept (0-4) per criterion
  4. Calculate weighted scores + overall rating
  5. Run sensitivity analysis: vary top-3 weights ±1 → does winner change?
  6. S-diagram: plot technical value vs economic value
- **Output:** Complete VDI 2225 table + sensitivity analysis + S-diagram + recommendation
- **Tiêu chí:**
  - [ ] ≥8 criteria, weights justified
  - [ ] ≥3 concepts evaluated
  - [ ] Sensitivity analysis on ≥3 criteria
  - [ ] S-diagram plotted
  - [ ] Winner selection with confidence level (robust/marginal)

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 6.5: I evaluated 3 concepts using VDI 2225. Concept A scored 0.78, Concept B 0.75, Concept C 0.72. All above 60%. Concept A has a weak spot (score 1) on maintainability. Should I select A based on highest overall score, or reject it due to the weak spot? What does Pahl-Beitz recommend?"
```

### Chủ Nhật: Phase 2 Capstone (3 giờ)

**Bài Tập W4-CN: Speed Run — Phase 2 cho NEW product** (3 giờ)
- CEO chọn: 1 sản phẩm CHƯA conceptualize (VD: VN-USV-SS-001, hoặc imaginary product)
- Chạy full Phase 2 trong 3 giờ:
  - 5-step abstraction (30 phút)
  - Function structure (45 phút)
  - Morphological matrix (45 phút)
  - VDI 2225 + sensitivity (60 phút)
- **Pass criteria:** Output quality ≥80% so với VN-12.7MM deliverables

---

## TUẦN 5: Deep Phase 3 — Embodiment Principles + Force Flow (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | 7.1: 15 Steps of Embodiment Design | Ch7_Embodiment/ 7.1 | 15-step checklist |  📘 `nlm notebook query pb-textbook "Section 7.1: List all 15 steps of embodiment design. Which steps can be done simultaneously? What is the correct mental model — linear Gantt chart or iterative checklist? Why does P&B say 'even the most promising concept can cause difficulties'?"` |
| T3 | 3h | 7.3: Three Basic Rules (Clarity/Simplicity/Safety) | Ch7_Embodiment/ 7.3.1-3 | Rules application VN-12.7MM | 📘 `nlm notebook query pb-textbook "Section 7.3: Explain the 3 basic rules of embodiment design — Clarity, Simplicity, Safety. How do they interact? Why is Safety not a design parameter but an ethical imperative? Give examples of violations for each rule."` |
| T4 | 3h | 7.4.1-7.4.2: Force Transmission + Division of Tasks | Ch7_Embodiment/ 7.4.1-2 | Force flow diagram |
| T5 | 3h | 7.4.3-7.4.5: Self-Help + Stability + Fault-Free | Ch7_Embodiment/ 7.4.3-5 | Principles checklist |
| T6 | 3h | Worked Examples: 6 embodiment cases | Ch6_Worked_Examples/ 6.6.2 | Pattern extraction |
| T7 | 3h | Worked Examples: 7 embodiment cases | Ch6_Worked_Examples/ 6.6.2 | Pattern consolidation |
| CN | 3h | **DELIVERABLE: Embodiment Principles Review VN-12.7MM** | All | Real deliverable |

### Chi Tiết Ngày T4: Force Flow Analysis (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 7.4.1 Force Transmission and Section 7.4.2 Division of Tasks: What are the principles for direct, short, uniform force paths? What does 'division of tasks' mean in design — when should functions be separated vs combined? Give examples of each principle applied to mechanical systems."
```

**Giờ 1 — Đọc:**
- `Ch7_Embodiment_Principles/7.4.1 Force_Transmission.md` — direct, short, uniform force paths
- `Ch7_Embodiment_Principles/7.4.2 Division_of_Tasks.md` — separate functions, don't overload parts

**Giờ 2-3 — Bài Tập:**

**Bài Tập W5-T4: Force Flow Analysis cho VN-12.7MM-SIM** (2 giờ)
- **Two-Channel Force Analysis:** (from FORGE research — Channel A mount + Channel B pneumatic)
  - Channel A: Trace recoil force path: barrel → mount → frame → floor bolts → foundation
  - Channel B: Trace pneumatic force path: compressor → cylinder → piston → reset mechanism
- **For EACH force path:**
  - Identify: where force changes direction (stress concentration)
  - Identify: where materials change (interface = weak point)
  - Identify: where force magnitude peaks (sizing driver)
  - Check: force path direct or indirect? Short or long?
- **Output:** Force flow diagram (2 channels) + ≥5 critical points identified
- **Tiêu chí:**
  - [ ] Both channels traced completely
  - [ ] ≥3 stress concentrations per channel
  - [ ] Material transitions marked at each interface
  - [ ] Peak force locations identified with estimated magnitudes
  - [ ] Redesign suggestions for any indirect/long force paths

**📘 NLM Validate (15 phút):**
```bash
nlm notebook query pb-textbook "Section 7.4.1-7.4.5: I traced the recoil force path in a pneumatic simulator through 2 channels. Channel A goes barrel→mount→frame→floor (4 direction changes). Channel B goes compressor→cylinder→piston→return spring (3 direction changes). Are these force paths too indirect? What does Pahl-Beitz say about acceptable number of direction changes? What is the Self-Help principle (chi parameter) and how does it apply to a pressure relief valve?"
```

### Chi Tiết Ngày T6-T7: 13 Embodiment Worked Examples (6 giờ)

**Ngày T6 — Set 1 (directly relevant):**
1. `6.6.2.a MachineGunMountingSystem_RCWS` — **VN-12.7MM mount system**
2. `6.6.2.c LOMAH_System` — sensor enclosure
3. `6.6.2.d Small_Arms_Simulator` — training system embodiment
4. `6.6.2.f Towed_Target_Sea` — marine environment
5. `6.6.2.g Target_USV` — marine + structure
6. `6.6.2.l RAMS` — AI platform physical design

**Ngày T7 — Set 2 (broaden perspective):**
7. `6.6.2 ImpulseLoadingTestRig` — test rig (metrology)
8. `6.6.2.b UAV_Catapult` — mechanical launch
9. `6.6.2.e Target_UAV_MDI` — UAV structure
10. `6.6.2.h Tethered_Drone` — cable management
11. `6.6.2.i Training_Grenade` — compact, robust
12. `6.6.2.k Radar_IR_Target_Simulation` — electronic + thermal
13. `6.6.2.m Naval_Weapon_Simulator` — naval context

**Cho MỖI example (28 phút):**
- Đọc (12 phút): focus 3 rules + 5 principles application
- Extract (12 phút): 2 good patterns + 1 violation + 1 force flow insight
- VN-12.7MM mapping (4 phút): gì áp dụng được?

### Chủ Nhật — DELIVERABLE: Embodiment Principles Review (3 giờ)

**Bài Tập W5-CN: 3 Rules + 5 Principles Review cho VN-12.7MM-SIM** (3 giờ)
- Apply 8 criteria (3 rules + 5 principles) lên VN-12.7MM current design
- Cho mỗi criterion:
  - Score: 1-5
  - Evidence: what in the design supports/violates this criterion
  - Action: redesign suggestion if score < 3
- **Output:** 8-criterion review report + ≥5 redesign suggestions
- Feed directly vào VN-12.7MM Phase 3 work

---

## TUẦN 6: Deep Phase 3 — All DfX + Gate 3 + Capstone (21 giờ)

### Lịch Học

| Ngày | Thời gian | Chủ đề | Tài liệu | Output |
|------|:---------:|--------|-----------|--------|
| T2 | 3h | DfX Part 1: DfProduction + DfAssembly | Ch7_Guidelines/ 7.5.8-9 | DfM/DfA review VN-12.7MM |
| T3 | 3h | DfX Part 2: DfMaintenance + DfErgonomics | Ch7_Guidelines/ 7.5.10 + 7.5.6 | DfMaint/DfErgo review | 📘 `nlm notebook query pb-textbook "Section 7.5.10 DfMaintenance + 7.5.6 DfErgonomics: What maintenance levels exist (depot/intermediate/organizational)? How to design for field-level maintenance? What ergonomic principles apply to equipment operated under stress?"` |
| T4 | 3h | DfX Part 3: DfSafety + DfStandards | Ch7_Guidelines/ 7.5.12-13 | FMEA + compliance check | 📘 `nlm notebook query pb-textbook "Section 7.5.12 Design for Minimum Risk: What is the risk hierarchy (eliminate→reduce→protect→warn)? How to do a simplified FMEA? What is the difference between fail-safe, fail-soft, and fail-passive? Section 7.5.13: How to check compliance with standards systematically?"` |
| T5 | 3h | DfX Part 4: DfExpansion + Corrosion + Wear | Ch7_Guidelines/ 7.5.2-5 | Material/environment review | 📘 `nlm notebook query pb-textbook "Sections 7.5.2-7.5.5: How does thermal expansion affect design in tropical environments? What corrosion protection strategies exist? What are the 4 types of wear and how to minimize each?"` |
| T6 | 3h | **DELIVERABLE: Complete DfX Review VN-12.7MM** | All DfX materials | Consolidated DfX report | 📘 `nlm notebook query pb-textbook "Chapter 7.5: Synthesize ALL DfX guidelines. What are the top 3 most critical DfX topics for a pneumatic training simulator used in tropical maritime environments? What interactions between DfX topics should I watch for?"` |
| T7 | 3h | **DELIVERABLE: Gate 3 Review VN-12.7MM** | All Phase 3 materials | Gate 3 verdict | 📘 `nlm notebook query pb-textbook "Section 7.6: How to evaluate an embodiment design using dual technical-economic rating? What criteria indicate GO vs REVISE vs NO-GO at Gate 3? How to construct the S-diagram for embodiment evaluation?"` |
| CN | 3h | **CAPSTONE: Full Phase 2→3 cho sản phẩm mới** | All | Final assessment |

### Chi Tiết Ngày T2: DfProduction + DfAssembly (3 giờ)

**📘 NLM Prime (10 phút):**
```bash
nlm notebook query pb-textbook "Section 7.5.8 Design for Production and 7.5.9 Design for Assembly: What are the top 5 DfM rules? What are the top 5 DfA rules? How to reduce part count systematically? What is the relationship between DfA and field maintainability for military equipment?"
```

**Giờ 1 — Đọc (skim — focus principles, skip details):**
- `7.5.8 Design for Production Part1.md` — casting, forging, machining principles
- `7.5.8 Part2.md` — sheet metal, welding, plastic
- `7.5.8 Part3.md` — summary rules

**Giờ 2 — Đọc:**
- `7.5.9 Design for Assembly.md` — assembly principles, part count reduction

**Giờ 3 — Bài Tập:**

**Bài Tập W6-T2: DfM/DfA Review cho VN-12.7MM-SIM** (60 phút)
- **DfM:** Cho mỗi major component: can Workshop X manufacture it? If not, why?
  - Material available in VN? Process available at WX workshop?
  - Tolerance achievable? Surface finish achievable?
- **DfA:** Assembly sequence analysis
  - List assembly order (step 1 → step N)
  - Identify: parts that block assembly, tools required, orientation dependencies
  - Count: total parts → can any be combined or eliminated?
- **Output:** DfM feasibility matrix + DfA assembly sequence + part count reduction proposals

### Chi Tiết Ngày T6: Consolidated DfX Report DELIVERABLE (3 giờ)

**Bài Tập W6-T6: Complete DfX Review** (3 giờ)
- Consolidate DfM (T2) + DfMaint (T3) + DfSafety (T4) + DfMaterial (T5) into single report
- **Format per DfX topic:**

| DfX Topic | Score (1-5) | Key Findings | Critical Issues | Actions |
|-----------|:-----------:|--------------|----------------|---------|
| DfProduction | | | | |
| DfAssembly | | | | |
| DfMaintenance | | | | |
| DfErgonomics | | | | |
| DfSafety | | | | |
| DfStandards | | | | |
| DfExpansion | | | | |
| DfCorrosion | | | | |
| DfWear | | | | |
| DfRecycling | | | | |
| DfAesthetics | | | | |
| DfACH (WX specific) | | | | |

- **Output:** 12-topic DfX review + priority action list
- **This feeds directly into VN-12.7MM Phase 3 completion**

### Chi Tiết Ngày T7: Gate 3 Review DELIVERABLE (3 giờ)

**Bài Tập W6-T7: Formal Gate 3 Review cho VN-12.7MM-SIM** (3 giờ)
- Run /helix-quality-gate logic manually:
  - Phase 3 completeness check (all deliverables present?)
  - Embodiment principles compliance (from tuần 5 review)
  - DfX compliance (from T6 report)
  - ICD status (v3 frozen? interfaces defined?)
  - BOM completeness
  - Risk register updated?
- **Output:** Gate 3 verdict: GO / REVISE / NO-GO + detailed findings
- **This is a REAL gate review for a REAL product**

### Chủ Nhật: CAPSTONE — Final Assessment (3 giờ)

**Bài Tập W6-CN: Full Phase 2→3 cho sản phẩm mới** (3 giờ)
- CEO chọn: 1 sản phẩm CHƯA design (VD: VN-USV-SS-001 semi-sub, hoặc imaginary)
- **Giờ 1:** Phase 2 speed run (abstraction → function structure → morpho → VDI 2225)
- **Giờ 2:** Phase 3 start (3 rules check → force flow → preliminary layout)
- **Giờ 3:** DfX quick scan (top 5 DfX topics) + Gate 2→3 transition assessment

**Pass criteria:**
- [ ] Phase 2 complete trong 60 phút (publishable quality)
- [ ] Phase 3 started with correct principles applied
- [ ] DfX scan identifies ≥3 real issues
- [ ] Toàn bộ process không mở tài liệu (P&B = reflex)

---

## Đánh Giá Cuối Khóa

### Final Rubric — Full Skill Assessment

| Sub-Skill | Before | After | Evidence |
|-----------|:------:|:-----:|----------|
| 5-step abstraction | Competent | | <15 phút, solution-neutral |
| 6-flow function structure | Competent | | ≥7 sub-functions, 6 flows, domain assigned |
| Morphological matrix | Competent | | ≥6 SF × ≥3 WP, ≥3 concepts |
| VDI 2225 + sensitivity | Competent | | Dual rating, S-diagram, sensitivity robust |
| 3 Basic Rules | Adv. Beginner | | Apply to layout review, score 8 criteria |
| 5 Embodiment Principles | Adv. Beginner | | Force flow analysis, fault-free design |
| DfX review (12 topics) | Adv. Beginner | | Consolidated report, priority actions |
| Force flow analysis | Adv. Beginner | | Multi-channel, stress concentrations |
| Gate review (G2, G3) | Competent | | Formal review, evidence-based verdict |
| Pattern recognition | Adv. Beginner | | 15+ conceptual + 13 embodiment patterns |
| Speed | Slow (hours) | | Phase 2 in <1h, Phase 3 review in <2h |
| Teaching ability | Cannot | | Explain P&B to engineer in 10 minutes |

### VN-12.7MM-SIM Direct Deliverables (từ khóa học)

| Tuần | Deliverable | Feeds Into |
|:----:|-------------|-----------|
| 3-CN | 5-step abstraction + function structure (refined) | Phase 2 documentation |
| 4-T6 | Morphological matrix | Phase 2 documentation |
| 4-T7 | VDI 2225 + sensitivity analysis | Concept selection validation |
| 5-CN | 3 Rules + 5 Principles review | Phase 3 quality improvement |
| 6-T2 | DfM/DfA review | Manufacturing readiness |
| 6-T6 | Complete DfX review (12 topics) | Phase 3 completion |
| 6-T7 | **Gate 3 review** | Phase 3→4 transition decision |

**7 real deliverables** cho VN-12.7MM-SIM — learning = working, không tách rời.

### Compound Value
- 130 md files + 629pp PDF → distilled thành 42 sessions × 3h
- 28 worked examples studied (15 conceptual + 13 embodiment)
- Galaxy candidates accumulated → promote sau khóa
- VN-12.7MM Phase 3 completion accelerated
- P&B methodology internalized → apply to ALL future products
