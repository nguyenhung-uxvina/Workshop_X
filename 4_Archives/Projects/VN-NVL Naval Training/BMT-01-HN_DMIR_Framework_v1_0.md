# D-M-I-R UNIFIED MODEL FRAMEWORK
## Dự án BMT-01/HN "HỒNG HÀ"
### Bia Mục Tiêu Mặt Nước Điều Khiển Từ Xa - Tăng Cường Tín Hiệu Hồng Ngoại

---

| **Document** | D-M-I-R Framework v1.0 |
|--------------|------------------------|
| **Project** | BMT-01/HN "HỒNG HÀ" |
| **Type** | IR-Enhanced Remote-Controlled Surface Target |
| **Date** | 20/12/2025 |
| **Status** | ACTIVE |
| **Methodology** | D-M-I-R + Pahl & Beitz Systematic Design |

---

## MỤC LỤC

1. [Tổng Quan D-M-I-R Framework](#1-tổng-quan-d-m-i-r-framework)
2. [PHASE 1: DIAGNOSIS - Chẩn Đoán Hệ Thống](#2-phase-1-diagnosis)
3. [PHASE 2: MODELING - Mô Hình Hóa](#3-phase-2-modeling)
4. [PHASE 3: INTERVENTION - Can Thiệp](#4-phase-3-intervention)
5. [PHASE 4: REFLECTION - Phản Tư](#5-phase-4-reflection)
6. [Pahl & Beitz Integration Map](#6-pahl-beitz-integration-map)
7. [Leverage Points Analysis](#7-leverage-points-analysis)
8. [Tracking & Metrics](#8-tracking-metrics)
9. [Cycle Roadmap](#9-cycle-roadmap)

---

## 1. TỔNG QUAN D-M-I-R FRAMEWORK

### 1.1 Mục Đích Áp Dụng D-M-I-R cho BMT-01/HN

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    D-M-I-R APPLICATION PURPOSE                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  DUAL APPLICATION:                                                      │
│  ═════════════════                                                      │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ 1. PRODUCT DEVELOPMENT OPTIMIZATION                             │   │
│  │    ────────────────────────────────                             │   │
│  │    • Tối ưu hóa quy trình phát triển sản phẩm BMT-01/HN        │   │
│  │    • Xác định constraint trong design/manufacturing             │   │
│  │    • Đạt throughput tối đa với nguồn lực hiện có               │   │
│  │    • Target: Hoàn thành prototype trong 6 tháng                │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ 2. LEARNING ACCELERATION                                        │   │
│  │    ───────────────────────                                       │   │
│  │    • Tăng tốc học Pahl & Beitz methodology                      │   │
│  │    • Áp dụng micro-D-M-I-R cycles cho skill mastery            │   │
│  │    • Target: Competent level (Level 3) trong 4 tuần            │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  INTEGRATION PHILOSOPHY:                                                │
│  ═══════════════════════                                                │
│                                                                         │
│      "Learn by doing + Optimize while learning"                        │
│                                                                         │
│      Dự án BMT-01/HN là VEHICLE để:                                    │
│      ├── Học systematic design methodology                             │
│      ├── Xây dựng design documentation portfolio                       │
│      └── Tối ưu product development system của doanh nghiệp           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 1.2 D-M-I-R Cycle Structure cho BMT-01/HN

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    D-M-I-R CYCLE STRUCTURE                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                        ┌─────────────┐                                  │
│                        │  DIAGNOSIS  │                                  │
│                        │  Tuần 1-2   │                                  │
│                        └──────┬──────┘                                  │
│                               │                                         │
│                               ▼                                         │
│        ┌──────────────────────────────────────────────┐                │
│        │                                              │                │
│   ┌────┴────┐                                   ┌─────┴─────┐          │
│   │REFLECTION│◄─── Weekly Micro-Cycles ───────►│  MODELING │          │
│   │ Tuần 21+ │                                  │  Tuần 3-6 │          │
│   └────┬────┘                                   └─────┬─────┘          │
│        │                                              │                │
│        └──────────────────────────────────────────────┘                │
│                               │                                         │
│                               ▼                                         │
│                        ┌─────────────┐                                  │
│                        │INTERVENTION │                                  │
│                        │  Tuần 7-20  │                                  │
│                        └─────────────┘                                  │
│                                                                         │
│  DURATION: 6 tháng (1 Full Cycle)                                      │
│  MICRO-CYCLES: Weekly reflection loops embedded                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. PHASE 1: DIAGNOSIS - CHẨN ĐOÁN HỆ THỐNG

### 2.1 Phạm Vi Chẩn Đoán (System Boundary)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BMT-01/HN SYSTEM BOUNDARY                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                                                                   │ │
│  │   EXTERNAL ENVIRONMENT                                            │ │
│  │   ─────────────────────                                           │ │
│  │   • Military standards (MIL-STD, TCVN)                           │ │
│  │   • Government procurement regulations                           │ │
│  │   • International suppliers (Aliexpress, T-Motor)                │ │
│  │   • Technology transfer restrictions                             │ │
│  │                                                                   │ │
│  │   ┌─────────────────────────────────────────────────────────┐    │ │
│  │   │                                                         │    │ │
│  │   │   SYSTEM BOUNDARY (In Scope)                           │    │ │
│  │   │   ════════════════════════════                          │    │ │
│  │   │                                                         │    │ │
│  │   │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │    │ │
│  │   │   │    R&D      │  │MANUFACTURING│  │   TESTING   │   │    │ │
│  │   │   │             │──▶│             │──▶│             │   │    │ │
│  │   │   │ • Concept   │  │ • Prototype │  │ • Sea Trial │   │    │ │
│  │   │   │ • Detail    │  │ • Assembly  │  │ • User Test │   │    │ │
│  │   │   │ • Analysis  │  │ • QC        │  │ • Validation│   │    │ │
│  │   │   └─────────────┘  └─────────────┘  └─────────────┘   │    │ │
│  │   │         │                 │                │          │    │ │
│  │   │         ▼                 ▼                ▼          │    │ │
│  │   │   ┌───────────────────────────────────────────────┐   │    │ │
│  │   │   │           KNOWLEDGE STOCK                     │   │    │ │
│  │   │   │ (Design docs, CAD, Test reports, Lessons)    │   │    │ │
│  │   │   └───────────────────────────────────────────────┘   │    │ │
│  │   │                                                         │    │ │
│  │   └─────────────────────────────────────────────────────────┘    │ │
│  │                                                                   │ │
│  │   STAKEHOLDERS (Outside boundary but influential):              │ │
│  │   • Hải quân/Biên phòng (End users)                             │ │
│  │   • Đơn vị chủ quản (Customer)                                  │ │
│  │   • Nhà cung cấp linh kiện (Suppliers)                          │ │
│  │                                                                   │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Stocks & Flows Identification

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    STOCKS & FLOWS - BMT-01/HN                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  MAJOR STOCKS (Tích lũy):                                              │
│  ════════════════════════                                               │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ STOCK              │ Initial │ Target  │ Unit      │ Notes      │  │
│  ├────────────────────┼─────────┼─────────┼───────────┼────────────┤  │
│  │ Design Docs        │    1    │   10+   │ documents │ Req list v3│  │
│  │ CAD Models         │    0    │    5+   │ models    │ Hull, ISTU │  │
│  │ Physical Prototypes│    0    │    1    │ unit      │ Testable   │  │
│  │ Test Reports       │    0    │   10+   │ reports   │ Validation │  │
│  │ P&B Skill Level    │    2    │    4    │ level 1-5 │ Engineer   │  │
│  │ Supplier Relations │    5    │   15+   │ suppliers │ Qualified  │  │
│  │ Budget Remaining   │ 2,200M  │    ≥0   │ VND       │ Constraint │  │
│  │ Team Experience    │   Low   │  Medium │ qualitat. │ RCST domain│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  MAJOR FLOWS (Tốc độ thay đổi):                                        │
│  ══════════════════════════════                                         │
│                                                                         │
│  INFLOWS (Vào hệ thống):                                               │
│  • Knowledge acquisition rate (học/tháng)                              │
│  • Supplier sourcing rate (supplier mới/tháng)                         │
│  • Budget allocation rate (VND/tháng)                                  │
│  • Design output rate (docs/tuần)                                      │
│                                                                         │
│  OUTFLOWS (Ra khỏi hệ thống):                                          │
│  • Budget consumption rate (chi tiêu/tháng)                            │
│  • Rework rate (thiết kế phải làm lại/total)                          │
│  • Knowledge loss rate (do thay đổi nhân sự)                           │
│  • Time expiration (deadline pressure)                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Causal Loop Diagram (CLD) - BMT-01/HN

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CAUSAL LOOP DIAGRAM                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  REINFORCING LOOP R1: "Design Quality Spiral" (Virtuous)               │
│  ════════════════════════════════════════════════════════               │
│                                                                         │
│              ┌────────────────────┐                                     │
│              │  Systematic Design │                                     │
│              │  Quality (P&B)     │                                     │
│              └─────────┬──────────┘                                     │
│                        │(+)                                             │
│                        ▼                                                │
│              ┌────────────────────┐                                     │
│              │  Clear Requirements│ ──────────(+)─────────┐            │
│              │  & Specifications  │                       │            │
│              └─────────┬──────────┘                       │            │
│                        │(+)                               │            │
│                        ▼                                  │            │
│              ┌────────────────────┐                       │            │
│              │  Fewer Design      │                       │            │
│              │  Iterations        │                       │            │
│              └─────────┬──────────┘                       │            │
│                        │(+)                               ▼            │
│                        ▼                        ┌─────────────────┐    │
│              ┌────────────────────┐             │  Project        │    │
│              │  Faster Prototype  │────(+)────▶│  Confidence     │    │
│              │  Completion        │             └────────┬────────┘    │
│              └────────────────────┘                      │             │
│                                                          │(+)          │
│                                      ┌───────────────────┘             │
│                                      ▼                                  │
│              ┌────────────────────────────────────┐                    │
│              │  Investment in Systematic Design   │                    │
│              │  (Time learning P&B methodology)   │                    │
│              └──────────────────┬─────────────────┘                    │
│                                 │(+)                                    │
│                                 └──────────▶ Loop R1                   │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  REINFORCING LOOP R2: "Hero Engineer Trap" (Vicious)                   │
│  ═══════════════════════════════════════════════════                    │
│                                                                         │
│              ┌────────────────────┐                                     │
│              │  Time Pressure     │                                     │
│              │  (6-month deadline)│                                     │
│              └─────────┬──────────┘                                     │
│                        │(+)                                             │
│                        ▼                                                │
│              ┌────────────────────┐                                     │
│              │  Skip Systematic   │◄────(+)────────────────┐           │
│              │  Process (P&B)     │                        │           │
│              └─────────┬──────────┘                        │           │
│                        │(+)                                │           │
│                        ▼                                   │           │
│              ┌────────────────────┐                        │           │
│              │  "Hero" Ad-hoc     │                        │           │
│              │  Solutions         │                        │           │
│              └─────────┬──────────┘                        │           │
│                        │(+)                                │           │
│                        ▼                                   │           │
│              ┌────────────────────┐               ┌────────┴───────┐   │
│              │  Undocumented      │               │  More Rework   │   │
│              │  Design Decisions  │─────(+)─────▶│  Required      │   │
│              └────────────────────┘               └────────┬───────┘   │
│                                                            │(+)        │
│                                                            ▼           │
│                                      ┌────────────────────────────┐    │
│                                      │  Schedule Slippage         │    │
│                                      │  (Behind deadline)         │    │
│                                      └────────────────┬───────────┘    │
│                                                       │(+)             │
│                                                       └────▶ Loop R2   │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  BALANCING LOOP B1: "Budget Discipline"                                │
│  ══════════════════════════════════════                                 │
│                                                                         │
│              ┌────────────────────┐                                     │
│              │  Prototype Cost    │                                     │
│              │  Estimate          │                                     │
│              └─────────┬──────────┘                                     │
│                        │                                                │
│                        ▼                                                │
│              ┌────────────────────┐                                     │
│              │  Gap to Budget     │                                     │
│              │  (2,200M VND cap)  │                                     │
│              └─────────┬──────────┘                                     │
│                        │(-)                                             │
│                        ▼                                                │
│              ┌────────────────────┐                                     │
│              │  Value Engineering │──────▶ Constrains feature scope    │
│              │  Pressure          │        Forces prioritization       │
│              └────────────────────┘                                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.4 System Archetype Identification

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    SYSTEM ARCHETYPES DETECTED                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ARCHETYPE 1: "SHIFTING THE BURDEN"                                    │
│  ═══════════════════════════════════                                    │
│                                                                         │
│  Symptom: Thiếu documentation, design decisions trong đầu người        │
│                                                                         │
│  Structure:                                                             │
│  • Problem symptom: Design uncertainty, requirements gaps               │
│  • Symptomatic solution: "Hỏi anh A, anh A biết hết" (Hero engineer)   │
│  • Fundamental solution: Systematic requirements, function structure   │
│  • Side effect: Knowledge not captured, dependency on individuals      │
│                                                                         │
│  Evidence in BMT-01/HN:                                                │
│  ✗ Requirements list cần 3 versions để complete                        │
│  ✗ Nhiều quyết định chưa được document (tại sao 3.5m hull?)           │
│  ✗ No function structure, morphological matrix yet                     │
│                                                                         │
│  LEVERAGE: Strengthen fundamental solution (P&B documentation)         │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  ARCHETYPE 2: "LIMITS TO GROWTH"                                       │
│  ════════════════════════════════                                       │
│                                                                         │
│  Symptom: Design progress slowing as complexity increases              │
│                                                                         │
│  Structure:                                                             │
│  • Growth engine: Design output rate (docs/week)                       │
│  • Limiting factor: Engineering capacity (1 engineer, part-time?)      │
│  • Secondary limit: Supplier qualification time                        │
│                                                                         │
│  Evidence in BMT-01/HN:                                                │
│  ✗ Requirements complete but no CAD models yet                         │
│  ✗ Multiple projects competing for attention (VN-EXOLEG, AUTOPILOT)   │
│  ✗ Long-lead items not ordered (hull fabrication 4-6 weeks)           │
│                                                                         │
│  LEVERAGE: Remove constraint on engineering capacity                   │
│            Parallelize work streams                                    │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  ARCHETYPE 3: "FIXES THAT FAIL"                                        │
│  ════════════════════════════════                                       │
│                                                                         │
│  Symptom: Quick decisions that create downstream problems              │
│                                                                         │
│  Structure:                                                             │
│  • Quick fix: Select first-found component (Aliexpress search)         │
│  • Unintended consequence: Compatibility issues, quality variance      │
│  • Delay: Problems appear during integration (weeks later)             │
│                                                                         │
│  Evidence in BMT-01/HN:                                                │
│  ⚠ Electric outboard selection not yet systematically evaluated       │
│  ⚠ Control system architecture not defined before component selection │
│  ⚠ IR heater specification (+80°C) without thermal analysis           │
│                                                                         │
│  LEVERAGE: VDI 2225 evaluation BEFORE component purchase              │
│            Concept-first, then detailed component selection            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2.5 Diagnosis Deliverables

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DIAGNOSIS DELIVERABLES                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ☑ System boundary defined (R&D → Mfg → Test)                         │
│  ☑ 8 key stocks identified with initial/target values                  │
│  ☑ 2 reinforcing loops mapped (R1 virtuous, R2 vicious)               │
│  ☑ 1 balancing loop mapped (B1 budget)                                │
│  ☑ 3 system archetypes identified with evidence                       │
│  ☐ Stakeholder workshop conducted (PENDING)                           │
│  ☐ Historical data collection (PENDING - first project)               │
│                                                                         │
│  KEY INSIGHT từ Diagnosis:                                             │
│  ══════════════════════════                                             │
│                                                                         │
│  "BMT-01/HN development is currently in 'Shifting the Burden'         │
│   archetype - relying on tacit knowledge instead of systematic         │
│   documentation. The FUNDAMENTAL SOLUTION is rigorous P&B              │
│   methodology application, not faster ad-hoc decision making."         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. PHASE 2: MODELING - MÔ HÌNH HÓA

### 3.1 Stock-Flow Model Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    STOCK-FLOW MODEL - BMT-01/HN                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║                    DESIGN PROGRESS SECTOR                         ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│       ┌─────────────┐                                                   │
│       │ Requirements│                                                   │
│       │   Backlog   │                                                   │
│       │   [items]   │                                                   │
│       └──────┬──────┘                                                   │
│              │                                                          │
│              │ Requirements                                             │
│              │ Clarification Rate                                       │
│              │ (items/week)                                             │
│              ▼                                                          │
│       ┌─────────────┐                                                   │
│       │  Clarified  │                                                   │
│       │Requirements │──────┐                                            │
│       │   [items]   │      │ Concept                                    │
│       └─────────────┘      │ Development Rate                           │
│                            │ (concepts/week)                            │
│                            ▼                                            │
│       ┌─────────────┐ ┌─────────────┐                                  │
│       │  Concepts   │ │  Approved   │                                  │
│       │ In Progress │─│  Concepts   │                                  │
│       │ [concepts]  │ │  [concepts] │                                  │
│       └─────────────┘ └──────┬──────┘                                  │
│              ▲               │                                          │
│              │               │ Detail Design Rate                       │
│        Rework│               │ (drawings/week)                          │
│         Loop │               ▼                                          │
│              │ ┌─────────────────────────┐                             │
│              └─│   Detail Designs        │                             │
│                │   (CAD + Drawings)      │                             │
│                │   [drawings]            │                             │
│                └───────────┬─────────────┘                             │
│                            │                                            │
│                            │ Fabrication Rate                           │
│                            │ (parts/week)                               │
│                            ▼                                            │
│                ┌─────────────────────────┐                             │
│                │   Physical Prototype    │                             │
│                │   [% complete]          │                             │
│                └─────────────────────────┘                             │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║                    RESOURCE SECTOR                                ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│       ┌─────────────┐                    ┌─────────────┐               │
│       │  Engineer   │                    │   Budget    │               │
│       │  Capacity   │                    │  Remaining  │               │
│       │ [hrs/week]  │                    │ [VND]       │               │
│       └──────┬──────┘                    └──────┬──────┘               │
│              │                                  │                       │
│              │ Allocation                       │ Spending              │
│              │ Decision                         │ Rate                  │
│              ▼                                  ▼                       │
│       ┌─────────────────────────────────────────────────┐              │
│       │              CONSTRAINT POINT                    │              │
│       │  (Utilization > 90% = Bottleneck)               │              │
│       └─────────────────────────────────────────────────┘              │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║                    KNOWLEDGE SECTOR                               ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│       ┌─────────────┐        ┌─────────────┐                           │
│       │  P&B Skill  │◄───────│  Learning   │                           │
│       │   Level     │        │    Rate     │                           │
│       │ [1-5 scale] │        │ (pts/week)  │                           │
│       └──────┬──────┘        └─────────────┘                           │
│              │                      ▲                                   │
│              │ Affects              │                                   │
│              ▼                      │                                   │
│       ┌─────────────┐        ┌─────────────┐                           │
│       │  Design     │        │  Practice   │                           │
│       │  Quality    │────────│   Hours     │                           │
│       │ [% rework]  │        │ (hrs/week)  │                           │
│       └─────────────┘        └─────────────┘                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Key Parameters & Estimates

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MODEL PARAMETERS                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  DESIGN RATES (estimated from similar projects):                       │
│  ══════════════════════════════════════════════                         │
│                                                                         │
│  ┌────────────────────────┬───────────┬───────────┬──────────────────┐ │
│  │ Parameter              │ Novice    │ Competent │ Source           │ │
│  ├────────────────────────┼───────────┼───────────┼──────────────────┤ │
│  │ Req clarification rate │ 3 items/wk│ 8 items/wk│ VN-EXOLEG data   │ │
│  │ Concept dev rate       │ 0.5/week  │ 2/week    │ Industry avg     │ │
│  │ Detail design rate     │ 1 dwg/wk  │ 4 dwg/wk  │ CAD benchmark    │ │
│  │ Rework fraction        │ 40%       │ 15%       │ P&B literature   │ │
│  │ Learning rate          │ 0.1 pt/wk │ 0.05 pt/wk│ Diminishing ret. │ │
│  └────────────────────────┴───────────┴───────────┴──────────────────┘ │
│                                                                         │
│  RESOURCE CONSTRAINTS:                                                  │
│  ═════════════════════                                                  │
│                                                                         │
│  ┌────────────────────────┬───────────────┬──────────────────────────┐ │
│  │ Resource               │ Capacity      │ BMT-01/HN Allocation     │ │
│  ├────────────────────────┼───────────────┼──────────────────────────┤ │
│  │ Engineering hours      │ 40 hrs/week   │ 25 hrs/week (shared)     │ │
│  │ Prototype budget       │ 2,200M VND    │ 2,200M VND (dedicated)   │ │
│  │ Machine shop access    │ 80 hrs/month  │ 40 hrs/month allocation  │ │
│  │ Sea trial window       │ 8 days/month  │ 4 days planned           │ │
│  └────────────────────────┴───────────────┴──────────────────────────┘ │
│                                                                         │
│  TIME DELAYS:                                                          │
│  ════════════                                                           │
│                                                                         │
│  ┌────────────────────────┬───────────────┬──────────────────────────┐ │
│  │ Process                │ Lead Time     │ Notes                    │ │
│  ├────────────────────────┼───────────────┼──────────────────────────┤ │
│  │ Hull fabrication       │ 4-6 weeks     │ Local aluminum shop      │ │
│  │ Electric outboard      │ 2-3 weeks     │ Import from CN           │ │
│  │ Battery pack           │ 2-3 weeks     │ LiFePO4 48V 200Ah       │ │
│  │ Control electronics    │ 3-4 weeks     │ Custom PCB + import     │ │
│  │ ISTU fabrication       │ 3-4 weeks     │ Corner reflector + heat │ │
│  │ Supplier qualification │ 2-4 weeks     │ First-time suppliers     │ │
│  └────────────────────────┴───────────────┴──────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Constraint Identification (Scientific)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CONSTRAINT ANALYSIS                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  METHOD: Stress test model with 50% demand increase                    │
│                                                                         │
│  RESULT: Engineering capacity saturates FIRST                          │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║                                                                   ║ │
│  ║   PRIMARY CONSTRAINT: ENGINEERING DESIGN CAPACITY                 ║ │
│  ║   ══════════════════════════════════════════════                  ║ │
│  ║                                                                   ║ │
│  ║   Evidence:                                                       ║ │
│  ║   • Current allocation: 25 hrs/week for BMT-01/HN                ║ │
│  ║   • Competing projects: VN-EXOLEG, AUTOPILOT, RC-TX-001          ║ │
│  ║   • Skill gap in P&B methodology → slower output rate            ║ │
│  ║   • Utilization: ~100% (bottleneck confirmed)                    ║ │
│  ║                                                                   ║ │
│  ║   Impact:                                                         ║ │
│  ║   • Requirements list took 3 iterations (v1→v3.1)                ║ │
│  ║   • No CAD models started yet                                    ║ │
│  ║   • Long-lead items not ordered (hull, motor)                    ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  SECONDARY CONSTRAINTS (will become primary if first is relieved):     │
│  ═════════════════════════════════════════════════════════════════════ │
│                                                                         │
│  2nd: Supplier qualification time                                      │
│       • First-time suppliers need 2-4 weeks qualification              │
│       • Quality risk from unvetted Aliexpress sources                  │
│                                                                         │
│  3rd: Sea trial access                                                 │
│       • Limited windows during good weather                            │
│       • Military coordination required                                 │
│                                                                         │
│  4th: Budget constraint (currently not binding)                        │
│       • 2,200M VND appears sufficient for prototype                    │
│       • Will become constraint if scope creeps                         │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  CONSTRAINT UTILIZATION MAP:                                           │
│  ════════════════════════════                                           │
│                                                                         │
│  Resource              │ Utilization │ Status                          │
│  ──────────────────────┼─────────────┼──────────────────────           │
│  Engineering capacity  │    100%     │ ★ CONSTRAINT                   │
│  Budget                │     0%      │ Available (not spent yet)       │
│  Machine shop          │    ~50%     │ Excess capacity                 │
│  Supplier base         │    ~30%     │ Excess capacity                 │
│  Testing equipment     │     0%      │ Not yet needed                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3.4 Modeling Deliverables

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MODELING DELIVERABLES                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ☑ Stock-flow structure defined (3 sectors: Design, Resource, Know.)  │
│  ☑ Key parameters estimated with sources                              │
│  ☑ Lead times mapped for critical path items                          │
│  ☑ Constraint scientifically identified: Engineering Capacity         │
│  ☐ Formal SD model in Vensim/Python (FUTURE - for Cycle 2)           │
│  ☐ Sensitivity analysis (FUTURE)                                      │
│  ☐ Historical validation (FUTURE - need project completion data)      │
│                                                                         │
│  KEY INSIGHT từ Modeling:                                              │
│  ═════════════════════════                                              │
│                                                                         │
│  "The constraint is NOT budget, NOT suppliers, NOT manufacturing.      │
│   The constraint is ENGINEERING DESIGN CAPACITY - specifically         │
│   the combination of (1) limited time allocation and (2) skill gap     │
│   in systematic design methodology. Exploit this constraint first."    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 4. PHASE 3: INTERVENTION - CAN THIỆP

### 4.1 TOC Five Focusing Steps Applied

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TOC FIVE FOCUSING STEPS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ STEP 1: IDENTIFY THE CONSTRAINT                                   ║ │
│  ║ ═══════════════════════════════                                   ║ │
│  ║                                                                   ║ │
│  ║ ★ CONSTRAINT: Engineering Design Capacity                        ║ │
│  ║                                                                   ║ │
│  ║ Sub-constraints:                                                  ║ │
│  ║ • Time: 25 hrs/week allocated (vs 40+ hrs needed)                ║ │
│  ║ • Skill: P&B methodology not yet fluent                          ║ │
│  ║ • Focus: Attention split across 4+ projects                      ║ │
│  ║                                                                   ║ │
│  ║ ✓ COMPLETED                                                       ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ STEP 2: EXPLOIT THE CONSTRAINT                                    ║ │
│  ║ ═══════════════════════════════                                   ║ │
│  ║                                                                   ║ │
│  ║ Maximize constraint productivity WITHOUT adding capacity:         ║ │
│  ║                                                                   ║ │
│  ║ E2.1 ZERO WASTED TIME on constraint:                             ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Time-block engineering hours (no interruptions)         │    ║ │
│  ║ │ • Prepare materials BEFORE design sessions                │    ║ │
│  ║ │ • Clear decision authority (no waiting for approvals)    │    ║ │
│  ║ │ • Templates ready (requirements list, morphological, VDI) │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ E2.2 QUALITY GATES BEFORE constraint:                            ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Clear requirements BEFORE starting design               │    ║ │
│  ║ │ • Stakeholder approval BEFORE concept development         │    ║ │
│  ║ │ • Component specs verified BEFORE detailed design         │    ║ │
│  ║ │ • → Prevent constraint time wasted on rework              │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ E2.3 OPTIMAL SEQUENCING on constraint:                           ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ Priority order for design work:                           │    ║ │
│  ║ │ 1. Long-lead items first (hull, motor) → Start fab early │    ║ │
│  ║ │ 2. High-risk items next (ISTU, control) → Reduce risk    │    ║ │
│  ║ │ 3. Integration points (interfaces) → Prevent conflicts   │    ║ │
│  ║ │ 4. Standard items last (hardware, cables) → Low risk     │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ E2.4 P&B METHODOLOGY as force multiplier:                        ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Function structure → Parallel subsystem design          │    ║ │
│  ║ │ • Morphological matrix → Faster concept generation        │    ║ │
│  ║ │ • VDI 2225 → Faster, defensible decisions                 │    ║ │
│  ║ │ • → Each hour on constraint produces MORE output          │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ Target: +30-40% effective design output from exploitation        ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ STEP 3: SUBORDINATE EVERYTHING ELSE                               ║ │
│  ║ ═══════════════════════════════════                               ║ │
│  ║                                                                   ║ │
│  ║ Synchronize entire system to support constraint:                  ║ │
│  ║                                                                   ║ │
│  ║ S3.1 UPSTREAM SUBORDINATION:                                     ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Requirements gathering: Complete v3.1 → ✓ DONE          │    ║ │
│  ║ │ • Stakeholder interviews: Schedule BEFORE design needs   │    ║ │
│  ║ │ • Reference research: Compile competitor data NOW         │    ║ │
│  ║ │ • → Constraint never waits for inputs                     │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ S3.2 DOWNSTREAM SUBORDINATION:                                   ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Supplier pre-qualification: Start NOW before designs   │    ║ │
│  ║ │ • Machine shop reservation: Book capacity in advance     │    ║ │
│  ║ │ • Test planning: Draft test procedures during design     │    ║ │
│  ║ │ • → Designs flow immediately to execution                 │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ S3.3 DRUM-BUFFER-ROPE (DBR) Implementation:                      ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ DRUM: Engineering design schedule (constraint sets pace)  │    ║ │
│  ║ │                                                           │    ║ │
│  ║ │ BUFFER: 2-week design-ahead buffer                        │    ║ │
│  ║ │ • Maintain 2 weeks of designs ready for fabrication      │    ║ │
│  ║ │ • If buffer drops < 1 week → Alert, reprioritize         │    ║ │
│  ║ │                                                           │    ║ │
│  ║ │ ROPE: Release work to constraint based on buffer status  │    ║ │
│  ║ │ • Don't start new work packages faster than completion   │    ║ │
│  ║ │ • Control WIP to prevent overwhelming constraint         │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ STEP 4: ELEVATE THE CONSTRAINT (If needed)                        ║ │
│  ║ ═══════════════════════════════════════                           ║ │
│  ║                                                                   ║ │
│  ║ Add capacity ONLY after exploitation is maximized:                ║ │
│  ║                                                                   ║ │
│  ║ EV4.1 Short-term elevation (Within 2 weeks):                     ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Increase BMT-01/HN allocation from 25 → 35 hrs/week    │    ║ │
│  ║ │ • Temporarily pause lower-priority projects               │    ║ │
│  ║ │ • Weekend sessions for critical path items                │    ║ │
│  ║ │ Cost: ~50% more engineering time                          │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ EV4.2 Medium-term elevation (Within 2 months):                   ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Contract CAD support for detail design (outsource)     │    ║ │
│  ║ │ • Use Claude AI for design documentation (current)       │    ║ │
│  ║ │ • Engage university intern for testing support           │    ║ │
│  ║ │ Cost: ~50-100M VND additional                             │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ EV4.3 Long-term elevation (6+ months):                           ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ • Hire additional design engineer                         │    ║ │
│  ║ │ • Build internal P&B training program                     │    ║ │
│  ║ │ • Develop reusable design modules/templates               │    ║ │
│  ║ │ Cost: Significant (hiring, training)                      │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ DECISION: Pursue EV4.1 + EV4.2 for BMT-01/HN prototype          ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ STEP 5: RETURN TO STEP 1 (Monitor for Constraint Shift)          ║ │
│  ║ ═══════════════════════════════════════════════════════════       ║ │
│  ║                                                                   ║ │
│  ║ Weekly constraint monitoring:                                     ║ │
│  ║ ┌───────────────────────────────────────────────────────────┐    ║ │
│  ║ │ Check Point              │ Indicator     │ Action if Hit │    ║ │
│  ║ ├──────────────────────────┼───────────────┼───────────────┤    ║ │
│  ║ │ Design output rate       │ < 2 docs/week │ Exploit more  │    ║ │
│  ║ │ Supplier lead time       │ > 6 weeks     │ New constraint│    ║ │
│  ║ │ Budget consumption       │ > 60% at 50%  │ Value engineer│    ║ │
│  ║ │ Buffer level             │ < 1 week      │ Prioritize    │    ║ │
│  ║ │ Rework rate              │ > 30%         │ Quality gates │    ║ │
│  ║ └───────────────────────────────────────────────────────────┘    ║ │
│  ║                                                                   ║ │
│  ║ Constraint shift triggers:                                        ║ │
│  ║ • If engineering capacity < 80% utilized → NEW CONSTRAINT        ║ │
│  ║ • Likely next: Supplier qualification or fabrication capacity    ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Pahl & Beitz Phase Intervention Plan

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    P&B PHASE INTERVENTION PLAN                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  CURRENT STATUS: Task Clarification Complete (v3.1)                    │
│  NEXT PHASE: Conceptual Design                                         │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ PHASE 2: CONCEPTUAL DESIGN INTERVENTION                           ║ │
│  ║ Target: Weeks 1-4                                                 ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  WEEK 1: Abstraction & Function Structure                              │
│  ─────────────────────────────────────────                              │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ Task                          │ Output              │ Hours      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │ 5-step abstraction process    │ Essential problem   │     4      │ │
│  │ Overall function definition   │ Black-box diagram   │     2      │ │
│  │ Function decomposition        │ Function structure  │     8      │ │
│  │ Review with stakeholder       │ Approved structure  │     2      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │                               │ WEEK 1 TOTAL        │    16      │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  WEEK 2: Working Principles & Morphological Matrix                     │
│  ──────────────────────────────────────────────────                     │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ Task                          │ Output              │ Hours      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │ Physical effects research     │ Principle catalog   │     4      │ │
│  │ Morphological matrix build    │ Matrix (6×5 min)    │     6      │ │
│  │ Concept combination           │ 4-6 concepts        │     4      │ │
│  │ Rough sketches per concept    │ Sketch set          │     4      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │                               │ WEEK 2 TOTAL        │    18      │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  WEEK 3: Concept Evaluation (VDI 2225)                                 │
│  ─────────────────────────────────────                                  │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ Task                          │ Output              │ Hours      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │ Evaluation criteria selection │ Weighted criteria   │     3      │ │
│  │ S-Diagram (tech feasibility)  │ Go/No-go per concept│     2      │ │
│  │ VDI 2225 scoring              │ Evaluation matrix   │     4      │ │
│  │ Sensitivity analysis          │ Robustness check    │     2      │ │
│  │ Concept selection decision    │ Selected + backup   │     2      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │                               │ WEEK 3 TOTAL        │    13      │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  WEEK 4: Preliminary Layout & Phase Gate                               │
│  ───────────────────────────────────────                                │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ Task                          │ Output              │ Hours      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │ Develop preliminary layout    │ Rough 3D model      │     8      │ │
│  │ Interface definition          │ Interface spec      │     3      │ │
│  │ Conceptual Design Review      │ CDR package         │     4      │ │
│  │ Phase gate approval           │ Go/No-go decision   │     2      │ │
│  ├───────────────────────────────┼─────────────────────┼────────────┤ │
│  │                               │ WEEK 4 TOTAL        │    17      │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ════════════════════════════════════════════════════════════════════  │
│  PHASE 2 TOTAL: 64 hours (16 hrs/week × 4 weeks)                       │
│  ════════════════════════════════════════════════════════════════════  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ PHASE 3: EMBODIMENT DESIGN INTERVENTION                           ║ │
│  ║ Target: Weeks 5-12                                                ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  WEEK 5-6: Subsystem Definition                                        │
│  ───────────────────────────────                                        │
│  • Platform subsystem (hull, propulsion)                               │
│  • Control subsystem (autopilot, RC, GCS)                             │
│  • Power subsystem (battery, distribution)                             │
│  • Target subsystem (ISTU: visual, IR, radar)                         │
│  • Tow subsystem (winch, cable, quick-release)                        │
│  Output: Subsystem specification docs (5)                              │
│                                                                         │
│  WEEK 7-8: Preliminary Layouts                                         │
│  ─────────────────────────────                                          │
│  • 2-3 layout variants per major assembly                              │
│  • Rough sizing calculations                                           │
│  • Material pre-selection                                              │
│  Output: Layout drawings, sizing spreadsheets                          │
│                                                                         │
│  WEEK 9-10: Layout Evaluation & Selection                              │
│  ────────────────────────────────────────                               │
│  • VDI 2225 for layout variants                                        │
│  • DfX analysis (manufacturing, assembly, maintenance)                 │
│  • Definitive layout selection                                         │
│  Output: Selected layouts with rationale                               │
│                                                                         │
│  WEEK 11-12: Definitive Layout & EDR                                   │
│  ───────────────────────────────────────                                │
│  • Refined 3D models                                                   │
│  • Interface control drawings                                          │
│  • BOM (preliminary)                                                   │
│  • Embodiment Design Review (EDR)                                      │
│  Output: EDR package, approved definitive layout                       │
│                                                                         │
│  ════════════════════════════════════════════════════════════════════  │
│  PHASE 3 TOTAL: 128 hours (16 hrs/week × 8 weeks)                      │
│  ════════════════════════════════════════════════════════════════════  │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ PHASE 4: DETAIL DESIGN & PROTOTYPE                                ║ │
│  ║ Target: Weeks 13-20                                               ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  WEEK 13-16: Detail Drawings & Procurement                            │
│  ─────────────────────────────────────────                              │
│  • Production drawings per part                                        │
│  • Final BOM with supplier quotes                                      │
│  • Long-lead item orders placed                                        │
│  Output: Drawing package, purchase orders                              │
│                                                                         │
│  WEEK 17-20: Fabrication & Assembly                                    │
│  ───────────────────────────────────                                    │
│  • Hull fabrication supervision                                        │
│  • Component integration                                               │
│  • System integration testing                                          │
│  • Factory acceptance test (FAT)                                       │
│  Output: Prototype ready for sea trial                                 │
│                                                                         │
│  ════════════════════════════════════════════════════════════════════  │
│  PHASE 4 TOTAL: 128 hours (16 hrs/week × 8 weeks)                      │
│  ════════════════════════════════════════════════════════════════════  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Intervention Deliverables

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    INTERVENTION DELIVERABLES                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ☐ Constraint exploitation plan implemented                            │
│  ☐ DBR system operational (buffer monitoring)                          │
│  ☐ Upstream/downstream subordination in place                          │
│  ☐ P&B Phase 2 complete (Conceptual Design)                           │
│  ☐ P&B Phase 3 complete (Embodiment Design)                           │
│  ☐ P&B Phase 4 complete (Detail Design)                               │
│  ☐ Prototype fabricated and assembled                                  │
│  ☐ Factory Acceptance Test passed                                      │
│                                                                         │
│  SUCCESS METRICS:                                                       │
│  • Design output: ≥3 significant documents/week                        │
│  • Rework rate: ≤20% (vs 40% without P&B)                             │
│  • Schedule: Complete prototype by Week 20                             │
│  • Budget: Within 2,200M VND                                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. PHASE 4: REFLECTION - PHẢN TƯ

### 5.1 After-Action Review Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    AFTER-ACTION REVIEW (AAR)                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Timing: Week 21 (after prototype completion) + Weekly micro-AARs      │
│                                                                         │
│  AAR QUESTIONS:                                                         │
│  ═══════════════                                                        │
│                                                                         │
│  1. WHAT WAS PLANNED?                                                  │
│     • Original objectives                                              │
│     • Key milestones                                                   │
│     • Expected outcomes                                                │
│                                                                         │
│  2. WHAT ACTUALLY HAPPENED?                                            │
│     • Actual results vs plan                                           │
│     • Variance analysis                                                │
│     • Surprises (positive and negative)                                │
│                                                                         │
│  3. WHY DID IT HAPPEN?                                                 │
│     • Root cause analysis (5 Whys)                                     │
│     • System structure explanations                                    │
│     • Feedback loops that drove outcomes                               │
│                                                                         │
│  4. WHAT CAN WE DO BETTER?                                             │
│     • Lessons learned                                                  │
│     • Process improvements                                             │
│     • Skill gaps to address                                            │
│                                                                         │
│  5. WHAT PARADIGMS SHOULD WE QUESTION?                                 │
│     • Assumptions that limited us                                      │
│     • Beliefs to challenge                                             │
│     • Mental models to update                                          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Paradigm Assessment (L2 Leverage)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PARADIGM ASSESSMENT                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  PARADIGMS TO EXAMINE:                                                  │
│  ═════════════════════                                                  │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Current Paradigm          │ Challenge Question                  │   │
│  ├───────────────────────────┼─────────────────────────────────────┤   │
│  │ "Defense products must    │ When is 80% solution at 50% cost   │   │
│  │  be perfect"              │ better than perfect at 100% cost?  │   │
│  ├───────────────────────────┼─────────────────────────────────────┤   │
│  │ "We must control all      │ What if modular design with        │   │
│  │  manufacturing"           │ qualified suppliers is better?     │   │
│  ├───────────────────────────┼─────────────────────────────────────┤   │
│  │ "Systematic methodology   │ What if doing methodology while    │   │
│  │  takes too long to learn" │ doing project is 15x faster?       │   │
│  ├───────────────────────────┼─────────────────────────────────────┤   │
│  │ "We can't afford          │ What if rework from skipping it    │   │
│  │  documentation time"      │ costs 3x more time?                │   │
│  ├───────────────────────────┼─────────────────────────────────────┤   │
│  │ "Local suppliers can't    │ What if local + international      │   │
│  │  meet defense quality"    │ hybrid reduces cost 60%?           │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  PARADIGM SHIFT TARGETS (for Cycle 2):                                 │
│  ═════════════════════════════════════                                  │
│                                                                         │
│  FROM → TO:                                                            │
│  • "Learn then do" → "Do while learning"                               │
│  • "Single engineer hero" → "Systematic process anyone can follow"     │
│  • "Copy foreign designs" → "Systematic adaptation to local context"   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Weekly Micro-Reflection Template

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    WEEKLY MICRO-REFLECTION                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  FREQUENCY: Every Friday, 15 minutes                                   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ WEEK #: ___                       DATE: ____________           │   │
│  ├─────────────────────────────────────────────────────────────────┤   │
│  │                                                                 │   │
│  │ 1. DESIGN OUTPUT THIS WEEK:                                    │   │
│  │    [ ] Requirements clarified: ___                             │   │
│  │    [ ] Concepts generated: ___                                 │   │
│  │    [ ] Drawings completed: ___                                 │   │
│  │    [ ] Documents approved: ___                                 │   │
│  │                                                                 │   │
│  │ 2. P&B METHODS APPLIED:                                        │   │
│  │    [ ] Function structure    [ ] Morphological matrix          │   │
│  │    [ ] VDI 2225              [ ] DfX analysis                  │   │
│  │    [ ] Requirements list     [ ] Other: ___                    │   │
│  │                                                                 │   │
│  │ 3. CONSTRAINT STATUS:                                          │   │
│  │    Engineering utilization: ___%                               │   │
│  │    Buffer level: ___ weeks                                     │   │
│  │    Bottleneck this week: ___________                          │   │
│  │                                                                 │   │
│  │ 4. WHAT WORKED WELL?                                           │   │
│  │    _________________________________________________          │   │
│  │                                                                 │   │
│  │ 5. WHAT DIDN'T WORK?                                           │   │
│  │    _________________________________________________          │   │
│  │                                                                 │   │
│  │ 6. ONE THING TO TRY NEXT WEEK:                                 │   │
│  │    _________________________________________________          │   │
│  │                                                                 │   │
│  │ 7. P&B SKILL LEVEL SELF-ASSESSMENT:                            │   │
│  │    [ ] 1-Novice [ ] 2-Beginner [ ] 3-Competent                │   │
│  │    [ ] 4-Proficient [ ] 5-Expert                               │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5.4 Cycle 2 Planning Framework

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CYCLE 2 PLANNING                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  CYCLE 1: BMT-01/HN Prototype Development                              │
│  Focus: Fix constraint (Engineering Capacity)                          │
│  Leverage Points: L10 (Physical flows), L8 (Feedback compression)      │
│  Duration: 6 months (Weeks 1-24)                                       │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  CYCLE 2: Production Optimization (Planned)                            │
│  Focus: Optimize information flows and feedback                        │
│  Leverage Points: L6-L7 (Information, self-organization)               │
│  Duration: 4 months                                                    │
│                                                                         │
│  Potential interventions:                                              │
│  • Supplier feedback loops (quality data → design updates)             │
│  • Test data integration (field data → next design)                    │
│  • Cross-project learning (BMT → EXOLEG → AUTOPILOT)                  │
│  • P&B template library (reusable design modules)                      │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  CYCLE 3: Policy Revision (Planned)                                    │
│  Focus: Rules and metrics that govern behavior                         │
│  Leverage Points: L5 (Policies, incentives)                            │
│  Duration: 4 months                                                    │
│                                                                         │
│  Potential interventions:                                              │
│  • Design review policies (gate criteria)                              │
│  • Engineer performance metrics (output vs hours)                      │
│  • Make vs buy decision rules                                          │
│  • Knowledge capture requirements                                      │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  CYCLE 4: Goal Alignment (Planned)                                     │
│  Focus: Organizational objectives                                      │
│  Leverage Points: L3 (Goals)                                           │
│  Duration: 3 months                                                    │
│                                                                         │
│  CYCLE 5: Paradigm Shift (Planned)                                     │
│  Focus: Fundamental assumptions                                        │
│  Leverage Points: L2 (Paradigms)                                       │
│  Duration: 3 months                                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. PAHL & BEITZ INTEGRATION MAP

### 6.1 P&B Phases ↔ D-M-I-R Mapping

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    P&B ↔ D-M-I-R INTEGRATION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ P&B PHASE          │ D-M-I-R PHASE    │ KEY ACTIVITIES          │   │
│  ├────────────────────┼──────────────────┼─────────────────────────┤   │
│  │                    │                  │                         │   │
│  │ Task Clarification │ DIAGNOSIS        │ • Map system structure  │   │
│  │ (Requirements)     │                  │ • Identify archetypes   │   │
│  │                    │                  │ • Stakeholder analysis  │   │
│  │ ✓ COMPLETED        │ ✓ COMPLETED      │ • Requirements v3.1     │   │
│  │                    │                  │                         │   │
│  ├────────────────────┼──────────────────┼─────────────────────────┤   │
│  │                    │                  │                         │   │
│  │ Conceptual Design  │ MODELING +       │ • Function structure    │   │
│  │                    │ INTERVENTION     │ • Morphological matrix  │   │
│  │                    │ START            │ • Concept evaluation    │   │
│  │ ☐ IN PROGRESS      │                  │ • VDI 2225 selection   │   │
│  │                    │                  │                         │   │
│  ├────────────────────┼──────────────────┼─────────────────────────┤   │
│  │                    │                  │                         │   │
│  │ Embodiment Design  │ INTERVENTION     │ • Layout development    │   │
│  │                    │ (Full TOC)       │ • DfX application      │   │
│  │                    │                  │ • Material selection    │   │
│  │ ☐ PENDING          │                  │ • Interface control     │   │
│  │                    │                  │                         │   │
│  ├────────────────────┼──────────────────┼─────────────────────────┤   │
│  │                    │                  │                         │   │
│  │ Detail Design      │ INTERVENTION     │ • Production drawings   │   │
│  │                    │ (Subordination)  │ • BOM finalization     │   │
│  │                    │                  │ • Procurement           │   │
│  │ ☐ PENDING          │                  │ • Fabrication           │   │
│  │                    │                  │                         │   │
│  ├────────────────────┼──────────────────┼─────────────────────────┤   │
│  │                    │                  │                         │   │
│  │ Post-Development   │ REFLECTION       │ • AAR                   │   │
│  │ (Learning)         │                  │ • Paradigm assessment   │   │
│  │                    │                  │ • Cycle 2 planning      │   │
│  │ ☐ FUTURE           │                  │ • Skill level update    │   │
│  │                    │                  │                         │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Micro-D-M-I-R for Learning Acceleration

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    MICRO-D-M-I-R LEARNING CYCLES                        │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  PURPOSE: Accelerate P&B skill mastery while executing BMT-01/HN       │
│                                                                         │
│  WEEKLY MICRO-CYCLE:                                                   │
│  ══════════════════                                                     │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                 │   │
│  │  MONDAY: DIAGNOSE                                              │   │
│  │  ─────────────────                                              │   │
│  │  • What P&B skill is blocking progress this week?              │   │
│  │  • What methodology gap caused last week's rework?             │   │
│  │  • What should I learn TODAY to unblock work?                  │   │
│  │                                                                 │   │
│  │  TUESDAY: MODEL                                                │   │
│  │  ─────────────────                                              │   │
│  │  • How fast am I getting feedback? (Review cycle time)         │   │
│  │  • What's my current skill level evidence?                     │   │
│  │  • What's the minimum learning needed for this week's task?    │   │
│  │                                                                 │   │
│  │  WEDNESDAY-THURSDAY: INTERVENE                                 │   │
│  │  ───────────────────────────────                                │   │
│  │  • Apply P&B method to real design task                        │   │
│  │  • JIT lookup: Read methodology ONLY when stuck                │   │
│  │  • Get rapid feedback (Claude review, peer check)              │   │
│  │                                                                 │   │
│  │  FRIDAY: REFLECT                                               │   │
│  │  ────────────────                                               │   │
│  │  • What worked? What failed?                                   │   │
│  │  • What P&B principle did I violate?                           │   │
│  │  • What mental model should I update?                          │   │
│  │  • Document in learning journal                                │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  LEARNING TARGETS:                                                     │
│  • Week 1-2: Task Clarification mastery (→ Level 3)                   │
│  • Week 3-4: Conceptual Design methods (→ Level 3)                    │
│  • Week 5-8: Embodiment Design practice (→ Level 3)                   │
│  • Week 9-12: Detail Design competence (→ Level 3)                    │
│  • Week 13+: Integration & refinement (→ Level 4)                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 7. LEVERAGE POINTS ANALYSIS

### 7.1 Meadows' 12 Leverage Points Applied to BMT-01/HN

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    LEVERAGE POINTS HIERARCHY                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  HIGHEST LEVERAGE (Most Powerful) ──────────────────────────────────── │
│                                                                         │
│  L1. TRANSCENDING PARADIGMS                                            │
│      ─────────────────────────                                          │
│      Not applicable at project level (organizational transformation)   │
│                                                                         │
│  L2. PARADIGM OF THE SYSTEM                          ★ CYCLE 5 TARGET  │
│      ─────────────────────────────                                      │
│      BMT-01/HN opportunity:                                            │
│      "Vietnamese defense industry can develop world-class products     │
│       using systematic methodology, not just copy foreign designs"     │
│                                                                         │
│  L3. GOALS OF THE SYSTEM                             ★ CYCLE 4 TARGET  │
│      ────────────────────────                                           │
│      Current: "Build BMT-01/HN prototype"                              │
│      Shift to: "Build capability to develop RCST product family"      │
│                                                                         │
│  L4. SELF-ORGANIZATION                               ★ CYCLE 2-3       │
│      ──────────────────────                                             │
│      Enable: Cross-project learning loops                              │
│      Enable: Design template reuse across projects                     │
│                                                                         │
│  L5. RULES (Policies, Incentives)                    ★ CYCLE 3 TARGET  │
│      ─────────────────────────────                                      │
│      Add: "No fabrication without approved design review"              │
│      Add: "Documentation required before phase gate"                   │
│                                                                         │
│  MEDIUM LEVERAGE ───────────────────────────────────────────────────── │
│                                                                         │
│  L6. INFORMATION FLOWS                               ★ CYCLE 2 TARGET  │
│      ─────────────────────                                              │
│      Current gap: Test results not feeding back to design              │
│      Intervention: Real-time project dashboard                         │
│                                                                         │
│  L7. FEEDBACK LOOPS (Strength/Speed)                 ★ CYCLE 1 ACTIVE  │
│      ──────────────────────────────────                                 │
│      Strengthen: Weekly design reviews (faster feedback)               │
│      Strengthen: Daily Claude check-ins on methodology                 │
│      Weaken: "Hero engineer" dependency loop                           │
│                                                                         │
│  L8. DELAYS                                          ★ CYCLE 1 ACTIVE  │
│      ─────────                                                          │
│      Reduce: Design review cycle (monthly → weekly)                    │
│      Reduce: Supplier qualification (parallel not serial)              │
│      Accept: Fabrication lead times (4-6 weeks, optimize around)       │
│                                                                         │
│  LOWER LEVERAGE ────────────────────────────────────────────────────── │
│                                                                         │
│  L9. STRUCTURE OF STOCKS & FLOWS                     ★ CYCLE 1 ACTIVE  │
│      ───────────────────────────────                                    │
│      Change: Add "design buffer" stock before fabrication              │
│      Change: Knowledge stock capture (documentation requirement)       │
│                                                                         │
│  L10. PHYSICAL FLOWS                                 ★ CYCLE 1 PRIMARY │
│       ─────────────────                                                 │
│       Primary intervention: TOC exploitation of engineering capacity   │
│       Subordination of upstream/downstream to constraint               │
│       DBR implementation                                               │
│                                                                         │
│  L11. BUFFERS (Stabilizing Stocks)                   ★ CYCLE 1 ACTIVE  │
│       ────────────────────────────                                      │
│       Add: 2-week design-ahead buffer                                  │
│       Add: Budget contingency buffer (100M VND)                        │
│                                                                         │
│  L12. PARAMETERS (Numbers, Constants)                ☐ LOW LEVERAGE    │
│       ─────────────────────────────────                                 │
│       Example: Adjusting specifications (speed, range)                 │
│       Warning: Most people intervene here but it's least effective     │
│                                                                         │
│  LOWEST LEVERAGE (Least Powerful) ──────────────────────────────────── │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Cycle 1 Leverage Point Focus

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CYCLE 1 LEVERAGE INTERVENTIONS                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  PRIMARY FOCUS: L10 (Physical Flows) + L7-L8 (Feedback/Delays)         │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ L10: PHYSICAL FLOWS                                               ║ │
│  ╠═══════════════════════════════════════════════════════════════════╣ │
│  ║                                                                   ║ │
│  ║ Intervention: TOC Five Focusing Steps                            ║ │
│  ║ Target: Engineering design capacity (THE constraint)             ║ │
│  ║                                                                   ║ │
│  ║ Actions:                                                          ║ │
│  ║ 1. Exploit: Maximize design output per hour                      ║ │
│  ║    - Time-block engineering sessions                             ║ │
│  ║    - Pre-prepare all materials                                   ║ │
│  ║    - P&B templates ready                                         ║ │
│  ║                                                                   ║ │
│  ║ 2. Subordinate: Align everything to support constraint           ║ │
│  ║    - Requirements complete BEFORE design starts                  ║ │
│  ║    - Suppliers pre-qualified BEFORE designs release              ║ │
│  ║    - DBR controls WIP                                            ║ │
│  ║                                                                   ║ │
│  ║ Expected Result: +30-40% effective design throughput             ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ L7: FEEDBACK LOOPS                                                ║ │
│  ╠═══════════════════════════════════════════════════════════════════╣ │
│  ║                                                                   ║ │
│  ║ Intervention: Compress feedback cycles                           ║ │
│  ║                                                                   ║ │
│  ║ Actions:                                                          ║ │
│  ║ 1. Daily: Claude AI methodology check                            ║ │
│  ║    - Upload work, get immediate feedback                         ║ │
│  ║    - Catch P&B violations same day                               ║ │
│  ║                                                                   ║ │
│  ║ 2. Weekly: Self-assessment + peer review                         ║ │
│  ║    - Friday reflection (micro-DMIR)                              ║ │
│  ║    - Design review with stakeholder                              ║ │
│  ║                                                                   ║ │
│  ║ 3. Monthly: Phase gate review                                    ║ │
│  ║    - CDR, EDR formal reviews                                     ║ │
│  ║    - Go/No-go decisions                                          ║ │
│  ║                                                                   ║ │
│  ║ Expected Result: 10x faster learning through rapid iteration     ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
│  ╔═══════════════════════════════════════════════════════════════════╗ │
│  ║ L8: DELAYS                                                        ║ │
│  ╠═══════════════════════════════════════════════════════════════════╣ │
│  ║                                                                   ║ │
│  ║ Intervention: Reduce controllable delays                         ║ │
│  ║                                                                   ║ │
│  ║ Actions:                                                          ║ │
│  ║ 1. Parallel supplier qualification                               ║ │
│  ║    - Start qualifying 3-5 suppliers NOW                          ║ │
│  ║    - Don't wait for final designs                                ║ │
│  ║                                                                   ║ │
│  ║ 2. Concurrent engineering                                        ║ │
│  ║    - Begin hull design while finalizing control concept         ║ │
│  ║    - Use interface specs to decouple                             ║ │
│  ║                                                                   ║ │
│  ║ 3. Early long-lead orders                                        ║ │
│  ║    - Order hull material after conceptual design (Week 4)       ║ │
│  ║    - Don't wait for complete detail drawings                     ║ │
│  ║                                                                   ║ │
│  ║ Expected Result: -4-6 weeks off critical path                    ║ │
│  ║                                                                   ║ │
│  ╚═══════════════════════════════════════════════════════════════════╝ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 8. TRACKING & METRICS

### 8.1 Dashboard Metrics

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BMT-01/HN DASHBOARD                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  LEADING INDICATORS (Weekly tracking):                                 │
│  ═════════════════════════════════════                                  │
│                                                                         │
│  ┌────────────────────────────┬──────────┬──────────┬─────────────┐   │
│  │ Metric                     │ Target   │ Actual   │ Status      │   │
│  ├────────────────────────────┼──────────┼──────────┼─────────────┤   │
│  │ Design documents/week      │    ≥3    │   ___    │ 🔴🟡🟢     │   │
│  │ Engineering utilization    │  85-95%  │   ___    │ 🔴🟡🟢     │   │
│  │ Design buffer level        │  2 weeks │   ___    │ 🔴🟡🟢     │   │
│  │ Rework rate                │   ≤20%   │   ___    │ 🔴🟡🟢     │   │
│  │ P&B methods applied/week   │    ≥2    │   ___    │ 🔴🟡🟢     │   │
│  │ Micro-reflection completed │   100%   │   ___    │ 🔴🟡🟢     │   │
│  └────────────────────────────┴──────────┴──────────┴─────────────┘   │
│                                                                         │
│  LAGGING INDICATORS (Monthly tracking):                                │
│  ══════════════════════════════════════                                 │
│                                                                         │
│  ┌────────────────────────────┬──────────┬──────────┬─────────────┐   │
│  │ Metric                     │ Target   │ Actual   │ Status      │   │
│  ├────────────────────────────┼──────────┼──────────┼─────────────┤   │
│  │ P&B Phase completion       │ On sched │   ___    │ 🔴🟡🟢     │   │
│  │ Budget consumed (%)        │ ≤% time  │   ___    │ 🔴🟡🟢     │   │
│  │ P&B Skill Level            │   +0.5   │   ___    │ 🔴🟡🟢     │   │
│  │ Suppliers qualified        │    ≥5    │   ___    │ 🔴🟡🟢     │   │
│  │ Design reviews passed      │   100%   │   ___    │ 🔴🟡🟢     │   │
│  └────────────────────────────┴──────────┴──────────┴─────────────┘   │
│                                                                         │
│  OUTCOME INDICATORS (End of Cycle 1):                                  │
│  ════════════════════════════════════                                   │
│                                                                         │
│  ┌────────────────────────────┬──────────┬──────────┬─────────────┐   │
│  │ Metric                     │ Target   │ Actual   │ Status      │   │
│  ├────────────────────────────┼──────────┼──────────┼─────────────┤   │
│  │ Prototype complete         │  Week 20 │   ___    │ 🔴🟡🟢     │   │
│  │ FAT passed                 │   Yes    │   ___    │ 🔴🟡🟢     │   │
│  │ Budget variance            │  ±10%    │   ___    │ 🔴🟡🟢     │   │
│  │ P&B Skill Level            │  Level 4 │   ___    │ 🔴🟡🟢     │   │
│  │ Reusable templates created │    ≥5    │   ___    │ 🔴🟡🟢     │   │
│  │ Lessons documented         │   ≥20    │   ___    │ 🔴🟡🟢     │   │
│  └────────────────────────────┴──────────┴──────────┴─────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 8.2 P&B Skill Level Rubric

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    P&B SKILL LEVEL RUBRIC                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Level │ Name       │ Evidence Required                         │   │
│  ├───────┼────────────┼───────────────────────────────────────────┤   │
│  │       │            │                                           │   │
│  │   1   │ Novice     │ • Knows P&B exists                       │   │
│  │       │            │ • Can name 4 phases                       │   │
│  │       │            │ • Has read about methodology              │   │
│  │       │            │                                           │   │
│  ├───────┼────────────┼───────────────────────────────────────────┤   │
│  │       │            │                                           │   │
│  │   2   │ Beginner   │ • Created 1 requirements list            │   │
│  │       │            │ • Attempted function structure            │   │
│  │       │            │ • Made design decisions (not systematic)  │   │
│  │       │ ★ CURRENT  │                                           │   │
│  │       │            │                                           │   │
│  ├───────┼────────────┼───────────────────────────────────────────┤   │
│  │       │            │                                           │   │
│  │   3   │ Competent  │ • Completed P&B phases for 1+ project    │   │
│  │       │            │ • Used VDI 2225 for concept selection    │   │
│  │       │            │ • Created morphological matrix            │   │
│  │       │ ★ TARGET   │ • Documentation meets review standards    │   │
│  │       │ (Week 12)  │                                           │   │
│  │       │            │                                           │   │
│  ├───────┼────────────┼───────────────────────────────────────────┤   │
│  │       │            │                                           │   │
│  │   4   │ Proficient │ • Completed 2+ full projects with P&B    │   │
│  │       │            │ • Applies DfX systematically              │   │
│  │       │            │ • Can teach methodology to others         │   │
│  │       │ ★ TARGET   │ • Catches own violations before review    │   │
│  │       │ (Week 24)  │                                           │   │
│  │       │            │                                           │   │
│  ├───────┼────────────┼───────────────────────────────────────────┤   │
│  │       │            │                                           │   │
│  │   5   │ Expert     │ • Adapts methodology to context          │   │
│  │       │            │ • Creates new methods/templates           │   │
│  │       │            │ • Recognized by peers as expert           │   │
│  │       │            │ • Has mentored 3+ people                  │   │
│  │       │            │                                           │   │
│  └───────┴────────────┴───────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 9. CYCLE ROADMAP

### 9.1 BMT-01/HN D-M-I-R Cycle 1 Timeline

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CYCLE 1 TIMELINE (6 Months)                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  MONTH 1 (Weeks 1-4): DIAGNOSIS + MODELING + CONCEPTUAL DESIGN         │
│  ═══════════════════════════════════════════════════════════════        │
│                                                                         │
│  Week 1:  ▓▓▓▓░░░░░░  Diagnosis complete, Function structure start     │
│  Week 2:  ▓▓▓▓▓▓░░░░  Function structure, Working principles           │
│  Week 3:  ▓▓▓▓▓▓▓░░░  Morphological matrix, Concept generation         │
│  Week 4:  ▓▓▓▓▓▓▓▓░░  VDI 2225 evaluation, Concept selection           │
│                                                                         │
│  Deliverables:                                                         │
│  ☐ CLD diagram                    ☐ Function structure                 │
│  ☐ Constraint identification      ☐ Morphological matrix               │
│  ☐ Modeling parameters            ☐ VDI 2225 evaluation                │
│  ☐ Intervention plan              ☐ Selected concept + CDR             │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  MONTH 2-3 (Weeks 5-12): INTERVENTION - EMBODIMENT DESIGN              │
│  ══════════════════════════════════════════════════════════            │
│                                                                         │
│  Week 5-6:   ▓▓▓▓░░░░░░  Subsystem specification                       │
│  Week 7-8:   ▓▓▓▓▓▓░░░░  Preliminary layouts                           │
│  Week 9-10:  ▓▓▓▓▓▓▓░░░  Layout evaluation, selection                  │
│  Week 11-12: ▓▓▓▓▓▓▓▓░░  Definitive layout, EDR                        │
│                                                                         │
│  Deliverables:                                                         │
│  ☐ Subsystem specs (5)            ☐ Layout drawings                    │
│  ☐ Material selections            ☐ Interface control docs             │
│  ☐ Preliminary BOM                ☐ EDR package approved               │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  MONTH 4-5 (Weeks 13-20): INTERVENTION - DETAIL DESIGN + FABRICATION   │
│  ═══════════════════════════════════════════════════════════════════   │
│                                                                         │
│  Week 13-14: ▓▓▓▓░░░░░░  Detail drawings (hull, ISTU)                  │
│  Week 15-16: ▓▓▓▓▓▓░░░░  Detail drawings (control, power)              │
│  Week 17-18: ▓▓▓▓▓▓▓░░░  Fabrication + component procurement           │
│  Week 19-20: ▓▓▓▓▓▓▓▓░░  Assembly + integration + FAT                  │
│                                                                         │
│  Deliverables:                                                         │
│  ☐ Production drawings            ☐ Final BOM                          │
│  ☐ Purchase orders                ☐ Assembled prototype                │
│  ☐ FAT report                     ☐ Ready for sea trial                │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  MONTH 6 (Weeks 21-24): REFLECTION + CYCLE 2 PLANNING                  │
│  ═══════════════════════════════════════════════════                    │
│                                                                         │
│  Week 21-22: ▓▓▓▓░░░░░░  AAR, paradigm assessment                      │
│  Week 23-24: ▓▓▓▓▓▓░░░░  Cycle 2 planning, knowledge capture           │
│                                                                         │
│  Deliverables:                                                         │
│  ☐ AAR document                   ☐ Paradigm assessment                │
│  ☐ Lessons learned database       ☐ Reusable templates                 │
│  ☐ Cycle 2 plan                   ☐ P&B skill level certification      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 9.2 Critical Path & Long-Lead Items

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CRITICAL PATH ANALYSIS                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  CRITICAL PATH:                                                        │
│  ══════════════                                                         │
│                                                                         │
│  Concept → Hull Design → Hull Fab → Control Integration → FAT         │
│  (4 wks)   (3 wks)       (5 wks)    (4 wks)               (2 wks)     │
│                                                                         │
│  Total: 18 weeks (minimum with perfect execution)                      │
│  Buffer: 2 weeks → Target: 20 weeks                                    │
│                                                                         │
│  ────────────────────────────────────────────────────────────────────  │
│                                                                         │
│  LONG-LEAD ITEMS (Order by Week indicated):                            │
│  ══════════════════════════════════════════                             │
│                                                                         │
│  ┌─────────────────────────┬─────────────┬──────────────┬────────────┐ │
│  │ Item                    │ Lead Time   │ Order By     │ Cost Est.  │ │
│  ├─────────────────────────┼─────────────┼──────────────┼────────────┤ │
│  │ Hull aluminum (5083)    │   2 weeks   │ Week 4       │  80M VND   │ │
│  │ Hull fabrication        │   5 weeks   │ Week 6       │ 400M VND   │ │
│  │ Electric outboard       │   3 weeks   │ Week 8       │ 150M VND   │ │
│  │ LiFePO4 battery pack    │   3 weeks   │ Week 8       │ 280M VND   │ │
│  │ RC controller system    │   3 weeks   │ Week 10      │ 150M VND   │ │
│  │ ISTU components         │   3 weeks   │ Week 10      │ 200M VND   │ │
│  │ Corner reflectors       │   4 weeks   │ Week 10      │ 100M VND   │ │
│  │ Tow winch               │   3 weeks   │ Week 12      │ 100M VND   │ │
│  └─────────────────────────┴─────────────┴──────────────┴────────────┘ │
│                                                                         │
│  ★ START SUPPLIER QUALIFICATION NOW (Week 1) FOR:                      │
│    • Aluminum fabrication shop                                         │
│    • Electric outboard suppliers (compare 3-5 options)                 │
│    • Battery pack integrator                                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## APPENDIX A: QUICK REFERENCE CARDS

### A.1 Daily Check-In Card

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DAILY CHECK-IN (5 minutes)                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  DATE: ____________                                                    │
│                                                                         │
│  1. What is my ONE focus for today?                                    │
│     ________________________________________________                   │
│                                                                         │
│  2. Am I working on the CONSTRAINT (design) or non-constraint?         │
│     [ ] Constraint work (high priority)                                │
│     [ ] Supporting work (subordinate to constraint)                    │
│                                                                         │
│  3. What P&B method will I apply today?                                │
│     [ ] Requirements clarification                                     │
│     [ ] Function structure                                             │
│     [ ] Morphological matrix                                           │
│     [ ] VDI 2225 evaluation                                            │
│     [ ] Layout development                                             │
│     [ ] DfX analysis                                                   │
│     [ ] Detail drawing                                                 │
│     [ ] Other: _______________                                         │
│                                                                         │
│  4. Do I need Claude AI check today? [ ] Yes [ ] No                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### A.2 TOC Decision Card

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TOC DECISION CARD                                    │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  BEFORE starting any work, ask:                                        │
│                                                                         │
│  1. Is this work on the CONSTRAINT?                                    │
│     YES → Do it immediately (highest priority)                         │
│     NO  → Go to question 2                                             │
│                                                                         │
│  2. Does this work SUPPORT the constraint?                             │
│     YES → Do it to prevent constraint starvation                       │
│     NO  → Go to question 3                                             │
│                                                                         │
│  3. Will delaying this work BLOCK the constraint later?                │
│     YES → Schedule it appropriately                                    │
│     NO  → Deprioritize or eliminate                                    │
│                                                                         │
│  CONSTRAINT REMINDER:                                                  │
│  ★ Engineering Design Capacity is THE constraint                       │
│  ★ Every hour on design = Highest value hour                          │
│  ★ Never starve the constraint (maintain buffer)                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## DOCUMENT CONTROL

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    DOCUMENT CONTROL                                     │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Document: BMT-01-HN D-M-I-R Framework v1.0                            │
│  Project:  BMT-01/HN "HỒNG HÀ"                                        │
│  Date:     20/12/2025                                                  │
│  Author:   [Engineer Name] + Claude AI (Systematic Design Mentor)      │
│                                                                         │
│  REVISION HISTORY:                                                     │
│  ═════════════════                                                      │
│  v1.0 (20/12/2025): Initial framework creation                         │
│                                                                         │
│  REFERENCES:                                                           │
│  ═══════════                                                            │
│  • BMT-01-HN Requirements List v3.1                                    │
│  • Pahl & Beitz "Engineering Design: A Systematic Approach"            │
│  • D-M-I-R Unified Model for Systemic Change                           │
│  • Donella Meadows "Thinking in Systems"                               │
│  • Goldratt "The Goal" (Theory of Constraints)                         │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Role              │ Name        │ Signature   │ Date            │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────────┤   │
│  │ Prepared by       │             │             │                 │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────────┤   │
│  │ Reviewed by       │             │             │                 │   │
│  ├───────────────────┼─────────────┼─────────────┼─────────────────┤   │
│  │ Approved by       │             │             │                 │   │
│  └───────────────────┴─────────────┴─────────────┴─────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

*Document prepared using D-M-I-R Unified Model + Pahl & Beitz Systematic Design Methodology*
*Framework v1.0 - BMT-01/HN "HỒNG HÀ" Project*
*Bia Mục Tiêu Mặt Nước Điều Khiển Từ Xa - Tăng Cường Tín Hiệu Hồng Ngoại*

**END OF DOCUMENT**
