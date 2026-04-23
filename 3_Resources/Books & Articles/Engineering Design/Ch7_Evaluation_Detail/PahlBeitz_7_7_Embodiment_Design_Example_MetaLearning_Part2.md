# PHÂN TÍCH TOÀN DIỆN: VÍ DỤ THIẾT KẾ HIỆN THỰC HÓA (PART 2)
## Pahl & Beitz Section 7.7 | 13-Skill Meta-Learning Framework

**Phiên bản:** 1.0  
**Ngày tạo:** January 2026  
**Tiếp nối từ Part 1:** Skills 8-13 và Ứng Dụng Chi Tiết

---

# MỤC LỤC PART 2

9. [SKILL 8: LEARNING ARCHITECTURE - KIẾN TRÚC HỌC TẬP](#9-skill-8-learning-architecture---kiến-trúc-học-tập)
10. [SKILL 9: SYSTEMS MAPPER - BẢN ĐỒ HỆ THỐNG](#10-skill-9-systems-mapper---bản-đồ-hệ-thống)
11. [SKILL 10: FOCUS SESSION - TỐI ƯU PHIÊN LÀM VIỆC](#11-skill-10-focus-session---tối-ưu-phiên-làm-việc)
12. [SKILL 11: SELF-ASSESSMENT RUBRIC - TỰ ĐÁNH GIÁ](#12-skill-11-self-assessment-rubric---tự-đánh-giá)
13. [SKILL 12: TARGETED DRILL - BÀI TẬP CHUYÊN SÂU](#13-skill-12-targeted-drill---bài-tập-chuyên-sâu)
14. [SKILL 13: LEARNING JOURNAL - NHẬT KÝ HỌC TẬP](#14-skill-13-learning-journal---nhật-ký-học-tập)
15. [ỨNG DỤNG CHI TIẾT CHO 12 HỆ THỐNG QUỐC PHÒNG](#15-ứng-dụng-chi-tiết-cho-12-hệ-thống-quốc-phòng)
16. [TỔNG HỢP VÀ LIÊN KẾT](#16-tổng-hợp-và-liên-kết)

---

# 9. SKILL 8: LEARNING ARCHITECTURE - KIẾN TRÚC HỌC TẬP

## 9.1 Prerequisites Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    LEARNING ARCHITECTURE FOR SECTION 7.7                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PREREQUISITES (Cần học trước):                                              │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐                 │
│  │ Chapter 5      │  │ Chapter 6      │  │ Section 7.1-7.6│                 │
│  │ Task           │  │ Conceptual     │  │ Embodiment     │                 │
│  │ Clarification  │  │ Design         │  │ Theory         │                 │
│  │ (Requirements) │  │ (Function Str) │  │ (Rules/Guide)  │                 │
│  └───────┬────────┘  └───────┬────────┘  └───────┬────────┘                 │
│          │                   │                   │                          │
│          └───────────────────┼───────────────────┘                          │
│                              ↓                                              │
│  ┌───────────────────────────────────────────────────────────────────┐     │
│  │                    SECTION 7.7: WORKED EXAMPLE                     │     │
│  │   • Integrates all theory from 7.1-7.6                            │     │
│  │   • Shows iteration with Chapter 6                                │     │
│  │   • Demonstrates complete process                                 │     │
│  └───────────────────────────────────────────────────────────────────┘     │
│                              ↓                                              │
│  FOLLOWS (Học sau):                                                         │
│  ┌────────────────┐  ┌────────────────┐                                    │
│  │ Chapter 8      │  │ Real Projects  │                                    │
│  │ Detail Design  │  │ (Defense       │                                    │
│  │                │  │  Systems)      │                                    │
│  └────────────────┘  └────────────────┘                                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 9.2 Knowledge Dependency Tree

```
FOUNDATIONAL KNOWLEDGE:
├── Engineering Mechanics (statics, dynamics)
├── Materials Science (properties, selection)
├── Manufacturing Processes (what's achievable)
└── Technical Drawing (representation methods)

PAHL-BEITZ METHODOLOGY:
├── Chapter 3: Evaluation Methods
│   └── VDI 2225 → Used in Step 10
├── Chapter 5: Task Clarification
│   └── Requirements List → Steps 1-2
├── Chapter 6: Conceptual Design
│   ├── Function Structures → Step 3
│   ├── Working Principles → Step 3
│   └── Principle Solutions → Starting point
└── Chapter 7 (7.1-7.6):
    ├── 7.1: Process overview → Framework
    ├── 7.2: Basic rules → Applied throughout
    ├── 7.3: Principles (clarity, simplicity, safety) → Detailing
    ├── 7.4: Guidelines → Specific design decisions
    ├── 7.5: Design for X → Auxiliary functions
    └── 7.6: Fault-free design → Safety evaluation
```

## 9.3 Learning Pathway Recommendations

### Path A: Sequential (Traditional)
```
Week 1: Review Chapters 5-6 prerequisites
Week 2: Study Section 7.1-7.3
Week 3: Study Section 7.4-7.6
Week 4: Study Section 7.7 (full example)
Week 5-8: Apply to defense systems
```
**Suitable for:** Systematic learners, those with limited prior knowledge

### Path B: Example-Driven (Recommended for Experienced Engineers)
```
Week 1: Study Section 7.7 directly (grasp overview)
Week 2: Identify gaps → Study specific sections 7.1-7.6 as needed
Week 3: Re-study Section 7.7 with deeper understanding
Week 4-6: Apply to defense systems
```
**Suitable for:** Engineers with design experience, faster learners

### Path C: Project-Based (Most Effective for Vietnamese Defense Context)
```
Week 1: Start defense system project (e.g., V-SMASH)
        When stuck → Reference relevant Section 7.7 content
Week 2-3: Continue project, iterate between theory and practice
Week 4: Complete first project, start second
Week 5-8: Complete 3-4 defense system projects
```
**Suitable for:** Learn-by-doing preference, real project deadlines

## 9.4 Time Investment Estimates

| Learner Profile | Section 7.7 Study | Practice | Total |
|----------------|-------------------|----------|-------|
| Engineering student | 24 hours | 40 hours | 64 hours |
| Practicing engineer (general) | 16 hours | 32 hours | 48 hours |
| Defense industry engineer | 12 hours | 24 hours | 36 hours |
| Senior designer (refresher) | 8 hours | 16 hours | 24 hours |

---

# 10. SKILL 9: SYSTEMS MAPPER - BẢN ĐỒ HỆ THỐNG

## 10.1 Causal Loop Diagram: Embodiment Design Process

```
                    ┌─────────────────────────────────┐
                    │     Requirements Quality        │
                    └──────────────┬──────────────────┘
                                   │ (+)
                                   ↓
┌──────────────────┐    ┌─────────────────────────┐    ┌──────────────────┐
│ Domain Knowledge │───>│ Function Carrier        │───>│ Layout Quality   │
│ & Experience     │ (+)│ Identification          │ (+)│                  │
└──────────────────┘    └─────────────────────────┘    └────────┬─────────┘
         ↑                                                      │ (+)
         │                                                      ↓
         │                                              ┌──────────────────┐
         │              ┌───────────────────────────────│ Calculation      │
         │              │                               │ Accuracy         │
         │              │ (-)                           └────────┬─────────┘
         │              ↓                                        │ (+)
         │     ┌─────────────────────────┐                      ↓
         │     │ Iteration Required      │←─────────┌──────────────────────┐
         │     │ (Function Str. Change)  │          │ Physical Reality     │
         │     └─────────────────────────┘          │ Discovery            │
         │                      │                   └──────────────────────┘
         │                      │ (delays)                      ↑
         │                      ↓                               │
         │            ┌─────────────────────────┐              │ (+)
         │            │ Project Timeline        │              │
         │            │ Extension               │              │
         │            └─────────────────────────┘              │
         │                                                      │
         └──────────────────────────────────────────────────────┘
                           Learning Loop (R)
```

### Key Feedback Loops Identified

**R1 (Reinforcing - Learning Loop):**
Domain Knowledge → Better Function Carrier ID → Better Layouts → Better Calculations → Physical Reality Discovery → MORE Domain Knowledge

**B1 (Balancing - Iteration Loop):**
Physical Reality Discovery → Iteration Required → Timeline Extension → (limits) Physical Reality Discovery

### Leverage Points for Vietnamese Defense Context

| Leverage Point | System Element | Intervention |
|---------------|----------------|--------------|
| **L6: Information Flow** | Domain Knowledge | Build Vietnamese defense component database |
| **L5: Rules** | Iteration Process | Establish "checkpoint reviews" to catch issues early |
| **L3: Goals** | Requirements Quality | Require quantified requirements before embodiment |

## 10.2 Stock-Flow Diagram: Embodiment Information

```
                        ┌────────────────────────────────────────┐
                        │                                        │
Knowledge               │      DESIGN INFORMATION STOCK          │
Inflow        ─────────>│                                        │─────────> Embodiment
(from analysis,         │  • Function carrier specs              │          Output
calculation,            │  • Layout dimensions                   │          (drawings,
testing)                │  • Auxiliary solutions                 │           specs)
                        │  • Evaluation results                  │
                        │                                        │
                        └────────────────────────────────────────┘
                                        │
                                        │ Information
                                        │ Obsolescence
                                        ↓ (when requirements
                                          change)
```

## 10.3 Systems Map: 12 Defense Systems Interconnections

```
                    ┌─────────────────────────────────┐
                    │      COMMON SUBSYSTEMS          │
                    │  • Power management             │
                    │  • Communication links          │
                    │  • Control algorithms           │
                    │  • Structural elements          │
                    └─────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ↓                           ↓                           ↓
┌───────────────────┐    ┌───────────────────┐    ┌───────────────────┐
│  AIR SYSTEMS      │    │  SEA SYSTEMS      │    │  GROUND SYSTEMS   │
│  ───────────────  │    │  ───────────────  │    │  ───────────────  │
│  • Target UAV     │    │  • Target USV     │    │  • Training Grenade│
│  • Tethered Drone │    │  • Towed Target   │    │  • Machine Gun Mnt │
│  • UAV Catapult   │    │                   │    │  • 12.7mm RCWS     │
│  • Radar-IR Sim   │    │                   │    │  • Small Arms Sim  │
└───────────────────┘    └───────────────────┘    │  • LOMAH           │
                                                  │  • V-SMASH         │
                                                  └───────────────────┘
```

---

# 11. SKILL 10: FOCUS SESSION - TỐI ƯU PHIÊN LÀM VIỆC

## 11.1 Session Templates for Embodiment Design Tasks

### Template A: Calculation Session (Chunk 4)

```
SESSION: Embodiment Calculations
DURATION: 2 hours
OBJECTIVE: Complete sizing calculations for one function carrier

STRUCTURE:
00:00-00:05  Setup: Gather data, formulas, calculator/spreadsheet
00:05-00:25  POMODORO 1: Initial parameter estimation
00:25-00:30  Break + Review: Check units, reasonability
00:30-00:50  POMODORO 2: Detailed calculation
00:50-00:55  Break + Review: Verify against requirements
00:55-01:15  POMODORO 3: Sensitivity analysis
01:15-01:20  Break + Review: Identify critical parameters
01:20-01:40  POMODORO 4: Documentation
01:40-01:45  Break
01:45-02:00  Reflection: What was hard? What to improve?

OUTPUTS:
□ Calculation sheet with all parameters
□ Sensitivity analysis results
□ Critical parameters identified
□ Questions for review
```

### Template B: Layout Development Session (Chunk 5)

```
SESSION: Preliminary Layout Development
DURATION: 3 hours
OBJECTIVE: Create preliminary layout for one embodiment variant

STRUCTURE:
00:00-00:10  Review: Function carriers list, spatial constraints
00:10-00:35  POMODORO 1: Sketch main function carriers arrangement
00:35-00:40  Break: Step back, assess proportions
00:40-01:05  POMODORO 2: Add dimensions, check spatial compatibility
01:05-01:10  Break: Compare against requirements
01:10-01:35  POMODORO 3: Identify interfaces, potential conflicts
01:35-01:45  Break: Consider alternatives

01:45-02:10  POMODORO 4: Refine layout
02:10-02:15  Break
02:15-02:40  POMODORO 5: Create variant comparison table
02:40-02:45  Break
02:45-03:00  Reflection: Variant selection rationale

OUTPUTS:
□ Layout sketch with dimensions
□ Interface identification
□ Variant comparison (if multiple)
□ Selection rationale documented
```

---

# 12. SKILL 11: SELF-ASSESSMENT RUBRIC - TỰ ĐÁNH GIÁ

## 12.1 Self-Assessment: Section 7.7 Understanding

### Rubric A: Conceptual Understanding

| Criterion | 1-Poor | 2-Developing | 3-Proficient | 4-Expert | Score |
|-----------|--------|--------------|--------------|----------|-------|
| **10 Steps** | Can name <5 | Can name all 10 | Can explain sequence | Can adapt to new contexts | ___ |
| **Determining Requirements** | Confuses with all req. | Can identify, not categorize | Correctly categorizes | Can derive from novel req. | ___ |
| **Function Carriers** | Cannot distinguish | Distinguishes with help | Independent identification | Can optimize selection | ___ |
| **Iteration Principle** | Unaware | Knows exists | Understands triggers | Can predict needs | ___ |
| **Auxiliary Functions** | Cannot list | Lists but confuses | Correctly classifies | Innovates solutions | ___ |

**Scoring:** /20 total. <10 = Re-study | 10-15 = Practice more | >15 = Apply to projects

---

# 13. SKILL 12: TARGETED DRILL - BÀI TẬP CHUYÊN SÂU

## 13.1 Drill Set: Embodiment-Determining Requirements Extraction

### Drill 13.1.1: Machine Gun Mount System

**Given requirements list excerpt:**
- Weapon weight: ≤25kg
- Elevation range: -10° to +75°
- Traverse: 360° continuous
- Operator position: seated, behind mount
- Environment: -20°C to +55°C, humidity to 95%
- Installation: on vehicle roof hatch ∅800mm

**Task:** Categorize each requirement:

| Requirement | Category | Why? |
|-------------|----------|------|
| Weapon weight ≤25kg | Dimensions | Determines bearing size, structure strength |
| Elevation -10° to +75° | Layout | Determines mechanism geometry |
| Traverse 360° | Layout | Requires continuous rotation (slip ring) |
| Operator seated behind | Layout | Determines sight line, control positions |
| Temperature range | Material | Determines lubricant, material selection |
| Hatch ∅800mm | Spatial Constraint | Maximum installation diameter |

---

### Drill 13.2: Calculation Practice - Flywheel Sizing

**Problem:** A training system requires an impulse torque of 500 Nm for 0.5 seconds. The flywheel runs at 1500 rpm and should not slow down more than 3%.

**Calculate:**
1. Required moment of inertia J
2. Flywheel dimensions (hollow cylinder, steel, Di = 0.8×Do)
3. Flywheel mass

**Solution:**
```
Given:
T = 500 Nm, Δt = 0.5 s, n = 1500 rpm = 25 rev/s, Δn/n = 3% = 0.03

Step 1: Calculate J
J = T × Δt / (2π × n × Δn/n)
J = 500 × 0.5 / (2π × 25 × 0.03) = 250 / 4.71 = 53.1 kg⋅m²

Step 2: Calculate dimensions
Assume L = 0.1m (100mm width)
For hollow cylinder: J = ½m(Ro² + Ri²)
53.1 = 0.82 × 7850 × 0.36π × Ro² × 0.1 × Ro²
53.1 = 728.5 × Ro⁴
Ro = 0.52m → Do = 1.04m

Step 3: m = 7850 × 0.36π × 0.52² × 0.1 = 242 kg
```

---

# 14. SKILL 13: LEARNING JOURNAL - NHẬT KÝ HỌC TẬP

## 14.1 Daily Journal Template

```
═══════════════════════════════════════════════════════════════════
EMBODIMENT DESIGN LEARNING JOURNAL
Date: _____________ Session: _____________ Duration: _____________
═══════════════════════════════════════════════════════════════════

TODAY'S FOCUS:
□ Chunk: _______________________________________________
□ Defense System: ______________________________________
□ Activity: □ Theory □ Calculation □ Layout □ Evaluation

KEY INSIGHTS (What clicked today?):
1. ________________________________________________________________
2. ________________________________________________________________

CONFUSIONS (What's still unclear?):
1. ________________________________________________________________

MISTAKES MADE:
1. Error: _________________________________________________________
   Correct understanding: __________________________________________

TOMORROW'S PLAN:
□ Review today's: _________________________________________________
□ New content: ____________________________________________________
═══════════════════════════════════════════════════════════════════
```

---

# 15. ỨNG DỤNG CHI TIẾT CHO 12 HỆ THỐNG QUỐC PHÒNG

## 15.1 System 1: Machine Gun Mount System

### Embodiment-Determining Requirements

| Category | Requirement | Impact on Design |
|----------|-------------|------------------|
| Layout | Traverse 360° continuous | Requires slip ring for signals/power |
| Layout | Operator behind mount | Determines sight line geometry |
| Dimensions | Elevation -10° to +75° | Determines arm geometry |
| Dimensions | Weapon weight 25kg | Determines bearing and structure sizing |
| Spatial | Hatch ∅800mm | Maximum base diameter |
| Material | -20°C to +55°C | Lubricant and seal material selection |

### Main Function Carriers Table

| Function | Carrier | Type |
|----------|---------|------|
| Support weapon | Cradle | Embodiment-det. |
| Provide elevation | Elevation arm | Embodiment-det. |
| Provide traverse | Turntable | Embodiment-det. |
| Lock position | Locking mechanism | Other |
| Transmit signals | Slip ring | Other |
| Mount to vehicle | Base adapter | Other |

---

## 15.2 System 2: 12.7mm Remote Controlled Weapon Station (RCWS)

### Key Calculation: Stabilization Servo Sizing

```
Requirements:
- Weapon mass: 38kg (M2HB)
- Ammunition: 500 rounds × 0.115kg = 57.5kg
- Total rotating mass: ~150kg with structure
- Required stabilization: ±2 mrad

Servo torque calculation:
- Moment of inertia I ≈ 15 kg⋅m²
- Maximum angular acceleration α = 5 rad/s²
- Required torque T = I × α = 75 Nm
- With safety factor 2.0: T_servo ≥ 150 Nm per axis
```

---

## 15.3 System 3: Target USV

### Critical Discovery (Similar to Test Rig Example)

**Problem discovered during embodiment:**
Original function structure assumed single RCS enhancement level. Analysis shows different training scenarios need different RCS values.

**Solution:** Add subfunction "Adjust RCS level" to function structure

**Variants created:**
- 3/1: Mechanical deployment/retraction of reflectors
- 3/2: Electronic RCS modulation (Luneberg lens)
- 3/3: Multiple reflector sets (swap between missions)

**Selection:** 3/1 for simplicity and local manufacturability

---

## 15.4 System 4: Towed Target (Sea)

### Key Calculation: Tow Cable Load

```
Parameters:
- Target drag at 200 knots: estimated 500 N
- Safety factor: 3.0
- Cable tension: 1500 N minimum breaking strength

Bridle geometry:
- V-angle: 30° for stability
- Individual cable load: 1500 / (2 × cos15°) = 776 N each
```

---

## 15.5 System 5: Training Grenade

### Safety Analysis (Per Section 7.6)

| Safety Function | Implementation | Verification |
|-----------------|----------------|--------------|
| Prevent premature arming | Lever retention | Drop test 2m |
| Clear armed indication | Visual/audible indicator | Inspection |
| Controlled delay | Pyrotechnic element ±0.5s | Batch testing |

---

## 15.6 System 6: UAV Catapult

### Calculation: Bungee Catapult Sizing

```
Requirements:
- UAV mass m = 15 kg (maximum)
- Launch velocity v = 25 m/s
- Rail length L = 3 m

Required kinetic energy:
E = ½mv² = 0.5 × 15 × 25² = 4687.5 J

With 80% efficiency:
E_stored = 4687.5 / 0.8 = 5859 J

Bungee specification:
- Extension x = 1.5 m
- k = 2E/x² = 2 × 5859 / 1.5² = 5208 N/m
- Force at full extension: F = 7812 N
- Average acceleration: 26.5 g
```

---

## 15.7-15.12 Systems 7-12: Summary Table

| System | Embodiment-Determining | Key Calculation | Critical Weak Spot |
|--------|------------------------|-----------------|-------------------|
| Radar-IR Simulation | Luneberg lens, IR emitter | Payload weight <5kg | Heat dissipation |
| Tethered Drone | Tether drum, power cable | 100m tether weight | Twist management |
| Target UAV | Propulsion, wing | Endurance calculation | Recovery method |
| LOMAH | Sensor array, processor | Timing accuracy 7.4μs | EMI resistance |
| Small Arms Simulator | Recoil actuator, tracking | Response latency | Weight balance |
| V-SMASH | Fire block solenoid | 5ms response, 500N | Cold weather |

---

# 16. TỔNG HỢP VÀ LIÊN KẾT

## 16.1 Key Takeaways from Section 7.7

1. **Embodiment design is NOT linear** - Function structure had to be modified during Step 4
2. **Calculations reveal hidden requirements** - Speed control range C = 2.6 discovered a functional gap
3. **Auxiliary functions are critical** - Three groups (connecting, supporting, fixing) must all be addressed
4. **Weak spot elimination improves quality** - R = 0.66 → 0.77 with specific improvements
5. **Domain knowledge accelerates design** - Experience enables faster, better decisions

## 16.2 Formula Reference Card

| Application | Formula |
|-------------|---------|
| Torque from cam | T = sL × hCAM × lL |
| Speed control range | C = nmax/nmin |
| Flywheel inertia | J = T×Δt / (2π×n×Δn) |
| Rating | R = ΣOV / ΣOVideal |

## 16.3 Vietnamese Defense Development Priority

**Phase 1 (High local content):** Training Grenade, Towed Target, UAV Catapult (bungee)
**Phase 2 (Medium complexity):** Target USV, Machine Gun Mount, LOMAH
**Phase 3 (Higher complexity):** Target UAV, Tethered Drone, Small Arms Simulator
**Phase 4 (Partnership needed):** 12.7mm RCWS, Radar-IR Simulation, V-SMASH

## 16.4 Master Mnemonic Summary

| Mnemonic | Meaning |
|----------|---------|
| **YCFC-LCDA-TĐC** | 10 Steps: Yêu cầu-Constrain-Function Carriers-Chưa hoàn... |
| **NỐI-ĐỠ-GẮN** | Auxiliary functions: Connecting-Supporting-Fixing |
| **LRPAM** | Detailing checklist: Layout-Resonance-Production-Assembly-Maintenance |
| **ĐIỂM YẾU = 1-2** | Weak spots: criteria scoring 1 or 2 points |

---

**Document Version:** 1.0  
**Created:** January 2026  
**Purpose:** Meta-learning analysis of Pahl & Beitz Section 7.7  
**Systems Covered:** Machine Gun Mount, 12.7mm RCWS, Target USV, Towed Target, Training Grenade, UAV Catapult, Radar-IR Simulation, Tethered Drone, Target UAV, LOMAH, Small Arms Simulator, V-SMASH

# END OF ANALYSIS
