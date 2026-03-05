# VN-SAMT-001 CONCEPTUAL DESIGN
## Small Arms Marksmanship Trainer | Hệ Thống Huấn Luyện Bắn Súng Bộ Binh

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CONCEPTUAL DESIGN DOCUMENT                           │
│                              PHASE 2 OF 4                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Project:     VN-SAMT-001 Small Arms Marksmanship Trainer                  │
│  Version:     1.0                                                           │
│  Date:        December 2025                                                 │
│  Status:      DRAFT FOR REVIEW                                              │
│  Author:      Engineering Design Team                                       │
│  Method:      Pahl & Beitz Systematic Design / VDI 2221                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  Phase 1: Task Clarification      ████████████████████ COMPLETE            │
│  Phase 2: Conceptual Design       ████████████████░░░░ IN PROGRESS         │
│  Phase 3: Embodiment Design       ░░░░░░░░░░░░░░░░░░░░ PENDING             │
│  Phase 4: Detail Design           ░░░░░░░░░░░░░░░░░░░░ PENDING             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## TABLE OF CONTENTS

1. [Introduction & Prerequisites](#1-introduction--prerequisites)
2. [Step 2.1: Abstraction - Essential Problem](#2-step-21-abstraction---essential-problem)
3. [Step 2.2: Function Structure](#3-step-22-function-structure)
4. [Step 2.3: Working Principles Search](#4-step-23-working-principles-search)
5. [Step 2.4: Morphological Matrix](#5-step-24-morphological-matrix)
6. [Step 2.5: Concept Generation](#6-step-25-concept-generation)
7. [Step 2.6: Concept Evaluation (VDI 2225)](#7-step-26-concept-evaluation-vdi-2225)
8. [Step 2.7: Selected Concept](#8-step-27-selected-concept)
9. [Appendices](#9-appendices)

---

## 1. INTRODUCTION & PREREQUISITES

### 1.1 Purpose of This Document

This document presents the **Conceptual Design (Phase 2)** for the VN-SAMT-001 Small Arms Marksmanship Trainer, following Pahl & Beitz systematic methodology. The objective is to:

1. **Abstract** the essential problem from requirements
2. **Establish** function structures showing energy/material/signal flows
3. **Search** for working principles to fulfill each sub-function
4. **Combine** principles into complete working structures (concepts)
5. **Evaluate** concepts systematically using VDI 2225
6. **Select** the most promising concept for Embodiment Design

### 1.2 Prerequisites Check

```
┌─────────────────────────────────────────────────────────────────┐
│                    PHASE 1 COMPLETION CHECK                     │
├─────────────────────────────────────────────────────────────────┤
│  ✓ Requirements List completed and approved                    │
│  ✓ Stakeholder needs documented                                │
│  ✓ Constraints identified (budget, timeline, regulations)      │
│  ✓ Target specifications quantified                            │
│  ✓ MUST vs WISH requirements classified                        │
│  ✓ Applicable standards identified (MIL-STD, TCVN)            │
└─────────────────────────────────────────────────────────────────┘
```

### 1.3 Key Requirements Summary (from Phase 1)

| Category | Key Requirement | Value | Priority |
|----------|----------------|-------|----------|
| **Weapons Supported** | Primary platforms | AK-47/AKM, SKS, SVD, PKM, RPK | MUST |
| **Training Stations** | Simultaneous trainees | 4-8 stations | MUST |
| **Shot Detection** | Accuracy | ≤5mm at 25m equivalent | MUST |
| **Feedback Latency** | Response time | ≤50ms | MUST |
| **Scenarios** | Training programs | ≥20 scenarios | MUST |
| **Operating Temp** | Range | -10°C to +55°C | MUST |
| **Unit Price** | Target cost | $65,000-$85,000 | MUST |
| **MTBF** | Reliability | ≥2,000 hours | WISH |
| **Setup Time** | Deployment | ≤30 minutes | WISH |

---

## 2. STEP 2.1: ABSTRACTION - ESSENTIAL PROBLEM

### 2.1.1 The 5-Step Abstraction Process

Following Pahl & Beitz methodology, we progressively abstract from specific requirements to identify the **solution-neutral essential problem**.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         5-STEP ABSTRACTION PROCESS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STEP 1: Eliminate personal preferences                                     │
│  ────────────────────────────────────────                                   │
│  Original: "Use laser-based detection like competitor products"            │
│  Abstracted: "Detect simulated projectile impact point"                    │
│                                                                             │
│  STEP 2: Omit requirements not directly related to function                │
│  ────────────────────────────────────────────────────────────               │
│  Original: "Green color for military appearance"                           │
│  Abstracted: (Removed - aesthetic, not functional)                         │
│                                                                             │
│  STEP 3: Transform quantitative to qualitative                             │
│  ────────────────────────────────────────────────                          │
│  Original: "≤5mm accuracy at 25m equivalent"                               │
│  Abstracted: "High-precision impact detection"                             │
│                                                                             │
│  STEP 4: Expand meaningfully                                               │
│  ────────────────────────────────────────────                              │
│  Original: "Train soldiers on AK-47"                                       │
│  Abstracted: "Develop marksmanship skills on infantry weapons"             │
│                                                                             │
│  STEP 5: Formulate solution-neutral                                        │
│  ────────────────────────────────────────                                   │
│  (See Essential Problem Statement below)                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.1.2 Essential Problem Statement

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                         ESSENTIAL PROBLEM STATEMENT                         ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  TRANSFORM the actions of a soldier aiming and triggering a weapon         ║
║                                                                             ║
║  INTO measurable feedback on shooting performance                           ║
║                                                                             ║
║  WITHOUT expending live ammunition                                          ║
║                                                                             ║
║  WHILE maintaining realistic weapon handling characteristics                ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### 2.1.3 Essential Functions Derived

From the essential problem, we identify these **solution-neutral functions**:

| # | Essential Function | Input | Output |
|---|-------------------|-------|--------|
| F1 | Sense weapon aiming direction | Weapon orientation | Angular data |
| F2 | Detect trigger activation | Trigger pull | Trigger signal |
| F3 | Calculate impact point | Angular + timing data | Impact coordinates |
| F4 | Evaluate shot quality | Impact vs target | Performance score |
| F5 | Provide feedback to trainee | Performance data | Visual/audio feedback |
| F6 | Record training data | All session data | Stored records |

---

## 3. STEP 2.2: FUNCTION STRUCTURE

### 3.1 Overall Function

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           OVERALL FUNCTION                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    ┌───────────────────────────────┐                        │
│                    │                               │                        │
│   INPUTS:          │    MARKSMANSHIP TRAINING      │         OUTPUTS:       │
│                    │         SYSTEM                │                        │
│   • Soldier        │                               │   • Trained soldier    │
│     (untrained)    │   "Transform aiming actions   │     (improved skill)   │
│                    │    into performance feedback  │                        │
│   • Weapon         │    without live ammunition"   │   • Performance data   │
│     (unmodified)   │                               │                        │
│                    │                               │   • Training records   │
│   • Electrical     │                               │                        │
│     power          └───────────────────────────────┘                        │
│                                                                             │
│   • Instructor                                                              │
│     commands                                                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Function Structure - Level 1 Decomposition

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FUNCTION STRUCTURE - LEVEL 1                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐  │
│  │   F1    │    │   F2    │    │   F3    │    │   F4    │    │   F5    │  │
│  │ SENSE   │───▶│ DETECT  │───▶│CALCULATE│───▶│EVALUATE │───▶│ PROVIDE │  │
│  │  AIM    │    │ TRIGGER │    │ IMPACT  │    │  SHOT   │    │FEEDBACK │  │
│  └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘  │
│       │              │              │              │              │        │
│       │              │              │              │              │        │
│       │              └──────────────┴──────────────┘              │        │
│       │                            │                              │        │
│       │                            ▼                              │        │
│       │                     ┌─────────┐                           │        │
│       │                     │   F6    │                           │        │
│       └────────────────────▶│ RECORD  │◀──────────────────────────┘        │
│                             │  DATA   │                                    │
│                             └─────────┘                                    │
│                                                                             │
│  LEGEND:                                                                    │
│  ───▶ Signal flow                                                          │
│  ═══▶ Energy flow                                                          │
│  ···▶ Material flow                                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Function Structure - Level 2 Detailed Decomposition

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FUNCTION STRUCTURE - LEVEL 2 DETAIL                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  F1: SENSE WEAPON AIM                                                       │
│  ════════════════════                                                       │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F1.1     │     │  F1.2     │     │  F1.3     │                     │
│      │  Attach   │────▶│  Track    │────▶│  Convert  │────▶ Angular       │
│      │  sensor   │     │  orient-  │     │  to       │      coordinates   │
│      │  to wpn   │     │  ation    │     │  digital  │                     │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
│  F2: DETECT TRIGGER ACTIVATION                                              │
│  ═════════════════════════════                                              │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F2.1     │     │  F2.2     │     │  F2.3     │                     │
│      │  Sense    │────▶│  Filter   │────▶│  Generate │────▶ Trigger       │
│      │  trigger  │     │  noise/   │     │  precise  │      timestamp     │
│      │  motion   │     │  bounce   │     │  timing   │                     │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
│  F3: CALCULATE IMPACT POINT                                                 │
│  ══════════════════════════                                                 │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F3.1     │     │  F3.2     │     │  F3.3     │                     │
│      │  Project  │────▶│  Apply    │────▶│  Compute  │────▶ Impact        │
│      │  aim      │     │  ballistic│     │  hit/miss │      coordinates   │
│      │  vector   │     │  model    │     │  location │                     │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
│  F4: EVALUATE SHOT QUALITY                                                  │
│  ═════════════════════════                                                  │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F4.1     │     │  F4.2     │     │  F4.3     │                     │
│      │  Compare  │────▶│  Score    │────▶│  Analyze  │────▶ Performance   │
│      │  to       │     │  accuracy │     │  pattern  │      assessment    │
│      │  target   │     │           │     │  (group)  │                     │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
│  F5: PROVIDE FEEDBACK                                                       │
│  ════════════════════                                                       │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F5.1     │     │  F5.2     │     │  F5.3     │                     │
│      │  Display  │     │  Generate │     │  Output   │                     │
│      │  visual   │     │  audio    │     │  haptic   │────▶ Multi-modal   │
│      │  result   │     │  cue      │     │  signal   │      feedback      │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
│  F6: RECORD & MANAGE DATA                                                   │
│  ════════════════════════                                                   │
│      ┌───────────┐     ┌───────────┐     ┌───────────┐                     │
│      │  F6.1     │     │  F6.2     │     │  F6.3     │                     │
│      │  Log all  │────▶│  Store    │────▶│  Generate │────▶ Reports &     │
│      │  events   │     │  persist- │     │  reports  │      analytics     │
│      │           │     │  ently    │     │           │                     │
│      └───────────┘     └───────────┘     └───────────┘                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.4 Energy, Material, and Signal Flows

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FLOW DIAGRAM - ENERGY/MATERIAL/SIGNAL                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ENERGY FLOWS (═══▶):                                                       │
│  ───────────────────                                                        │
│                                                                             │
│   AC Power ═══▶ [Power Supply] ═══▶ DC Power ═══▶ All subsystems           │
│                      │                                                      │
│                      ▼                                                      │
│              [Battery Backup]                                               │
│                                                                             │
│  MATERIAL FLOWS (───▶):                                                     │
│  ─────────────────────                                                      │
│                                                                             │
│   Soldier ───▶ [Training Station] ───▶ Trained Soldier                     │
│                                                                             │
│   Weapon ───▶ [Weapon Kit Install] ───▶ Instrumented Weapon                │
│                                                                             │
│  SIGNAL FLOWS (···▶):                                                       │
│  ───────────────────                                                        │
│                                                                             │
│   ┌─────────────┐                                                           │
│   │   Weapon    │                                                           │
│   │   Sensor    │···▶ Orientation data ···▶ ┌──────────────┐               │
│   │   Unit      │                           │              │               │
│   └─────────────┘                           │   Central    │               │
│                                             │   Processor  │···▶ Display   │
│   ┌─────────────┐                           │   Unit       │               │
│   │   Trigger   │···▶ Trigger event ···▶    │              │···▶ Audio     │
│   │   Sensor    │                           │              │               │
│   └─────────────┘                           └──────────────┘···▶ Storage   │
│                                                   ▲                         │
│   ┌─────────────┐                                 │                         │
│   │  Instructor │···▶ Control commands ···········┘                         │
│   │  Console    │                                                           │
│   └─────────────┘                                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. STEP 2.3: WORKING PRINCIPLES SEARCH

### 4.1 Systematic Search Methods Used

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WORKING PRINCIPLES SEARCH METHODS                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Methods Applied:                                                           │
│                                                                             │
│  ✓ Literature search (patents, academic papers, competitor products)       │
│  ✓ Physical effect catalogs (sensor technologies)                          │
│  ✓ Analogies from other domains (gaming, AR/VR, surveying)                 │
│  ✓ Brainstorming with domain experts                                       │
│  ✓ TRIZ contradiction analysis                                             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Working Principles for Each Sub-Function

#### F1: SENSE WEAPON AIM - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F1-A** | **Laser spot projection** | Light beam reflection | High accuracy, proven | Requires screen, eye safety |
| **F1-B** | **Inertial Measurement Unit (IMU)** | MEMS accelerometer + gyro | Self-contained, compact | Drift over time |
| **F1-C** | **Optical tracking (camera)** | Image processing | No weapon modification | Occlusion issues, lighting |
| **F1-D** | **Magnetic tracking** | EM field measurement | Works in any lighting | Metal interference |
| **F1-E** | **Ultrasonic positioning** | Time-of-flight | Low cost | Limited accuracy |
| **F1-F** | **Hybrid IMU + Optical** | Combined sensors | Best accuracy, drift correction | Higher complexity |

#### F2: DETECT TRIGGER - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F2-A** | **Mechanical microswitch** | Contact closure | Simple, reliable | Requires installation |
| **F2-B** | **Pressure sensor** | Piezoelectric | No modification to mechanism | Calibration needed |
| **F2-C** | **Optical break-beam** | Light interruption | Non-contact | Alignment sensitive |
| **F2-D** | **Accelerometer (recoil sim)** | MEMS acceleration | Can add recoil feedback | More complex |
| **F2-E** | **Acoustic detection** | Sound signature | No weapon modification | Background noise issues |

#### F3: CALCULATE IMPACT - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F3-A** | **Direct laser spot detection** | Photodetector array | Real impact point | Requires projection screen |
| **F3-B** | **Ray-casting from orientation** | Mathematical projection | Works anywhere | Needs accurate orientation |
| **F3-C** | **Ballistic simulation** | Physics modeling | Realistic trajectory | Computational overhead |
| **F3-D** | **Screen coordinate mapping** | Video processing | Uses existing display | Lower precision |

#### F4: EVALUATE SHOT - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F4-A** | **Point-based scoring** | Distance calculation | Simple, intuitive | Limited analytics |
| **F4-B** | **Pattern analysis (MPI/MOA)** | Statistical grouping | Professional metrics | Requires multiple shots |
| **F4-C** | **AI-based assessment** | Machine learning | Adaptive, detailed | Training data needed |

#### F5: PROVIDE FEEDBACK - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F5-A** | **Screen display** | Visual projection | Rich information | Requires looking away |
| **F5-B** | **Audio cues** | Sound generation | Immediate, intuitive | Limited information |
| **F5-C** | **HUD overlay (AR)** | Optical superposition | In-line-of-sight | Cost, complexity |
| **F5-D** | **Haptic (vibration)** | Mechanical vibration | Tactile confirmation | Simple signals only |
| **F5-E** | **Simulated recoil** | Pneumatic/electric actuator | Realistic feel | Weight, power, cost |

#### F6: RECORD DATA - Working Principles

| Code | Principle | Physical Effect | Pros | Cons |
|------|-----------|-----------------|------|------|
| **F6-A** | **Local storage (SSD)** | Flash memory | Fast, reliable | Limited capacity |
| **F6-B** | **Network database** | Client-server | Centralized, scalable | Requires connectivity |
| **F6-C** | **Cloud storage** | Remote servers | Unlimited, accessible | Internet dependency |
| **F6-D** | **Hybrid local + sync** | Combined approach | Best of both | More complex |

---

## 5. STEP 2.4: MORPHOLOGICAL MATRIX

### 5.1 Morphological Matrix - Principle Solutions

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│                              MORPHOLOGICAL MATRIX                                            │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                              │
│  SUB-FUNCTION      │ SOLUTION PRINCIPLE 1 │ SOLUTION PRINCIPLE 2 │ SOLUTION PRINCIPLE 3    │
│  ══════════════════╪══════════════════════╪══════════════════════╪═════════════════════════│
│                    │                      │                      │                          │
│  F1: Sense aim     │ ●━━━Laser spot━━━━━━━│━━━━IMU only━━━━━━━━━━│━━━━Optical camera━━━━━● │
│                    │ (F1-A)               │ (F1-B)               │ (F1-C)                   │
│  ──────────────────┼──────────────────────┼──────────────────────┼──────────────────────────│
│                    │                      │                      │                          │
│  F2: Detect trigger│ ●━━━Microswitch━━━━━━│━━━━Pressure sensor━━━│━━━━Acoustic━━━━━━━━━━━● │
│                    │ (F2-A)               │ (F2-B)               │ (F2-E)                   │
│  ──────────────────┼──────────────────────┼──────────────────────┼──────────────────────────│
│                    │                      │                      │                          │
│  F3: Calc impact   │ ●━━━Laser detection━━│━━━━Ray-casting━━━━━━━│━━━━Ballistic sim━━━━━━● │
│                    │ (F3-A)               │ (F3-B)               │ (F3-C)                   │
│  ──────────────────┼──────────────────────┼──────────────────────┼──────────────────────────│
│                    │                      │                      │                          │
│  F4: Evaluate shot │ ●━━━Point scoring━━━━│━━━━Pattern analysis━━│━━━━AI assessment━━━━━━● │
│                    │ (F4-A)               │ (F4-B)               │ (F4-C)                   │
│  ──────────────────┼──────────────────────┼──────────────────────┼──────────────────────────│
│                    │                      │                      │                          │
│  F5: Feedback      │ ●━━━Screen + Audio━━━│━━━━Screen + Haptic━━━│━━━━AR HUD + Recoil━━━● │
│                    │ (F5-A+B)             │ (F5-A+D)             │ (F5-C+E)                 │
│  ──────────────────┼──────────────────────┼──────────────────────┼──────────────────────────│
│                    │                      │                      │                          │
│  F6: Record data   │ ●━━━Local SSD━━━━━━━━│━━━━Network DB━━━━━━━━│━━━━Hybrid━━━━━━━━━━━━━● │
│                    │ (F6-A)               │ (F6-B)               │ (F6-D)                   │
│  ──────────────────┴──────────────────────┴──────────────────────┴──────────────────────────│
│                                                                                              │
│  LEGEND:  ●━━━━━━━━━━● = Path through matrix forming a concept                              │
│           Concept A (RED): F1-A → F2-A → F3-A → F4-A → F5-A+B → F6-A                        │
│           Concept B (BLUE): F1-B → F2-B → F3-B → F4-B → F5-A+D → F6-D                       │
│           Concept C (GREEN): F1-F → F2-D → F3-C → F4-C → F5-C+E → F6-B                      │
│                                                                                              │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 6. STEP 2.5: CONCEPT GENERATION

### 6.1 Concept A: "CLASSIC LASER" (Budget-Optimized)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT A: CLASSIC LASER                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARCHITECTURE:                                                              │
│  ═════════════                                                              │
│                                                                             │
│   ┌─────────────────┐                    ┌─────────────────┐                │
│   │  WEAPON KIT     │                    │  PROJECTION     │                │
│   │  ───────────    │                    │  SCREEN         │                │
│   │  • Laser module │     Laser beam     │  ───────────    │                │
│   │    (Class 1)    │════════════════════▶  • Photodetector│                │
│   │  • Trigger      │                    │    array        │                │
│   │    microswitch  │                    │  • 2.5m x 2m    │                │
│   │  • Battery      │                    │    active area  │                │
│   └────────┬────────┘                    └────────┬────────┘                │
│            │                                      │                         │
│            │ RF link                              │ Wired                   │
│            ▼                                      ▼                         │
│   ┌─────────────────────────────────────────────────────────┐              │
│   │                  CENTRAL UNIT                            │              │
│   │  ─────────────────────────────────────────────────────   │              │
│   │  • Industrial PC (Intel i5)                              │              │
│   │  • Shot detection processing                             │              │
│   │  • Scoring software                                      │              │
│   │  • Local SSD storage (1TB)                               │              │
│   │  • 4-8 lane support                                      │              │
│   └─────────────────────────────────────────────────────────┘              │
│                              │                                              │
│                              ▼                                              │
│            ┌─────────────────────────────────┐                             │
│            │        FEEDBACK SYSTEM          │                             │
│            │  ─────────────────────────────  │                             │
│            │  • Large display (55" per lane) │                             │
│            │  • Audio speakers               │                             │
│            │  • Instructor monitor           │                             │
│            └─────────────────────────────────┘                             │
│                                                                             │
│  KEY SPECIFICATIONS:                                                        │
│  ═══════════════════                                                        │
│  • Detection accuracy: ≤3mm (photodetector resolution)                     │
│  • Latency: ≤30ms (direct detection)                                       │
│  • Weapons supported: AK, SKS, SVD, PKM, RPK via barrel-mount laser        │
│  • Setup time: ~45 minutes (screen assembly required)                      │
│  • Operating modes: Static targets, pop-up, moving targets (projected)     │
│                                                                             │
│  ESTIMATED COST:                                                            │
│  ═══════════════                                                            │
│  Weapon kit (×8):     $3,200 × 8 = $25,600                                 │
│  Screen system:       $12,000                                               │
│  Central unit:        $8,000                                                │
│  Displays + audio:    $6,000                                                │
│  Software license:    $5,000                                                │
│  Integration:         $8,000                                                │
│  ────────────────────────────────                                          │
│  TOTAL:               ~$64,600                                              │
│                                                                             │
│  ADVANTAGES:                          DISADVANTAGES:                        │
│  ════════════                         ═══════════════                       │
│  ✓ Proven technology                  ✗ Requires dedicated screen          │
│  ✓ High accuracy (direct detection)   ✗ Fixed installation                 │
│  ✓ Lowest cost                        ✗ Limited scenario flexibility       │
│  ✓ Simple maintenance                 ✗ Eye safety considerations          │
│  ✓ Fast response time                 ✗ Cannot train in outdoor settings   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 Concept B: "SMART IMU" (Portable/Flexible)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT B: SMART IMU                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARCHITECTURE:                                                              │
│  ═════════════                                                              │
│                                                                             │
│   ┌─────────────────────┐                                                   │
│   │  WEAPON SENSOR KIT  │                                                   │
│   │  ─────────────────  │                                                   │
│   │  • 9-DOF IMU        │    ┌─────────────────────────────┐               │
│   │    (accel+gyro+mag) │    │      ANY DISPLAY SURFACE    │               │
│   │  • Pressure trigger │    │  ─────────────────────────  │               │
│   │    sensor           │    │  • Projector + screen       │               │
│   │  • Bluetooth 5.0    │    │  • TV monitor               │               │
│   │  • Rechargeable     │    │  • Tablet (for portability) │               │
│   │    battery          │    │  • Wall projection          │               │
│   │  • Weapon-specific  │    └─────────────────────────────┘               │
│   │    mounting         │                   ▲                               │
│   └──────────┬──────────┘                   │                               │
│              │                              │                               │
│              │ Bluetooth                    │ HDMI/WiFi                     │
│              ▼                              │                               │
│   ┌─────────────────────────────────────────┴───────────────┐              │
│   │                  PROCESSING UNIT                         │              │
│   │  ─────────────────────────────────────────────────────   │              │
│   │  • Embedded ARM processor (Raspberry Pi 4 or custom)     │              │
│   │  • IMU fusion algorithm (Kalman filter)                  │              │
│   │  • Ray-casting engine                                    │              │
│   │  • Pattern analysis software                             │              │
│   │  • WiFi + Ethernet                                       │              │
│   │  • Local + cloud sync storage                            │              │
│   └─────────────────────────────────────────────────────────┘              │
│                              │                                              │
│                              ▼                                              │
│   ┌───────────────────────────────────────────────────────────────────┐    │
│   │                    FEEDBACK SYSTEM                                 │    │
│   │  ─────────────────────────────────────────────────────────────    │    │
│   │  • Screen display (variable size)                                  │    │
│   │  • Haptic feedback (vibration in weapon kit)                       │    │
│   │  • Bluetooth audio                                                 │    │
│   │  • Mobile app for trainee/instructor                               │    │
│   └───────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│  KEY SPECIFICATIONS:                                                        │
│  ═══════════════════                                                        │
│  • Detection accuracy: ~5mm (IMU + calibration dependent)                  │
│  • Latency: ~50ms (processing overhead)                                    │
│  • Weapons supported: Universal mounting system + calibration              │
│  • Setup time: ~15 minutes (minimal infrastructure)                        │
│  • Operating modes: Indoor/outdoor, any surface, AR-ready                  │
│                                                                             │
│  ESTIMATED COST:                                                            │
│  ═══════════════                                                            │
│  Weapon kit (×8):     $2,800 × 8 = $22,400                                 │
│  Processing units:    $4,000                                                │
│  Display (projector): $3,000                                                │
│  Software + license:  $15,000                                               │
│  Integration:         $10,000                                               │
│  Calibration system:  $3,000                                                │
│  ────────────────────────────────                                          │
│  TOTAL:               ~$57,400                                              │
│                                                                             │
│  ADVANTAGES:                          DISADVANTAGES:                        │
│  ════════════                         ═══════════════                       │
│  ✓ Highly portable                    ✗ Lower accuracy (IMU drift)         │
│  ✓ Works indoor/outdoor               ✗ Requires frequent calibration      │
│  ✓ Flexible display options           ✗ Complex software                   │
│  ✓ Universal weapon support           ✗ Processing latency                 │
│  ✓ No special screen required         ✗ Battery management                 │
│  ✓ Lowest hardware cost               ✗ Accuracy degrades over session     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Concept C: "ADVANCED HYBRID" (Premium/Full-Featured)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT C: ADVANCED HYBRID                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARCHITECTURE:                                                              │
│  ═════════════                                                              │
│                                                                             │
│   ┌───────────────────────────┐         ┌─────────────────────────┐        │
│   │  ADVANCED WEAPON KIT      │         │  TRACKING CAMERAS       │        │
│   │  ─────────────────────    │         │  ────────────────────   │        │
│   │  • IMU (drift-corrected)  │◀════════│  • 4× IR cameras        │        │
│   │  • IR LED markers         │ Optical │  • 120fps tracking      │        │
│   │  • Trigger accelerometer  │ fusion  │  • 6-DOF pose estimate  │        │
│   │  • Pneumatic recoil sim   │         │  • Sub-mm precision     │        │
│   │  • High-cap battery       │         └─────────────────────────┘        │
│   └───────────────────────────┘                                             │
│              │                                                              │
│              │ WiFi 6                                                       │
│              ▼                                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    MAIN PROCESSING SERVER                        │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • High-performance workstation (Intel i7/Xeon + GPU)            │      │
│   │  • Real-time ballistic simulation engine                         │      │
│   │  • AI-powered performance analysis                               │      │
│   │  • Multi-lane synchronization                                    │      │
│   │  • Database server (PostgreSQL)                                  │      │
│   │  • Network video recording                                       │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│              │                                                              │
│              ▼                                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    IMMERSIVE FEEDBACK                            │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • 180° curved projection screen (3× projectors)                 │      │
│   │  • Spatial audio (8.1 surround)                                  │      │
│   │  • AR glasses option (per-trainee HUD)                           │      │
│   │  • Pneumatic recoil in weapon                                    │      │
│   │  • Environmental effects (wind, lighting)                        │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                                                                             │
│  KEY SPECIFICATIONS:                                                        │
│  ═══════════════════                                                        │
│  • Detection accuracy: ≤2mm (optical fusion eliminates drift)              │
│  • Latency: ≤25ms (GPU-accelerated)                                        │
│  • Weapons supported: All Vietnamese infantry weapons                       │
│  • Setup time: Permanent installation                                       │
│  • Operating modes: Full combat scenarios, force-on-force, night ops       │
│                                                                             │
│  ESTIMATED COST:                                                            │
│  ═══════════════                                                            │
│  Weapon kit (×8):     $5,500 × 8 = $44,000                                 │
│  Tracking system:     $18,000                                               │
│  Server + GPU:        $12,000                                               │
│  Projection system:   $25,000                                               │
│  Audio system:        $5,000                                                │
│  Software + AI:       $20,000                                               │
│  Integration:         $15,000                                               │
│  ────────────────────────────────                                          │
│  TOTAL:               ~$139,000                                             │
│                                                                             │
│  ADVANTAGES:                          DISADVANTAGES:                        │
│  ════════════                         ═══════════════                       │
│  ✓ Highest accuracy                   ✗ Significantly over budget          │
│  ✓ Most realistic experience          ✗ Complex installation               │
│  ✓ AI-powered analytics               ✗ Higher maintenance                 │
│  ✓ Lowest latency                     ✗ Requires dedicated facility        │
│  ✓ Future-proof technology            ✗ Longer procurement cycle           │
│  ✓ Premium training quality           ✗ More training for operators        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Concept D: "OPTIMAL BALANCE" (Best Value)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT D: OPTIMAL BALANCE                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARCHITECTURE: Combines best elements from A, B, C                          │
│  ═════════════                                                              │
│                                                                             │
│   ┌───────────────────────────┐         ┌─────────────────────────┐        │
│   │  SMART WEAPON KIT         │         │  SIMPLE OPTICAL         │        │
│   │  ─────────────────────    │         │  VERIFICATION           │        │
│   │  • Laser emitter          │◀════════│  ────────────────────   │        │
│   │  • IMU (backup/outdoor)   │ Verify  │  • Single HD camera     │        │
│   │  • Pressure trigger       │ + Drift │  • Laser spot tracking  │        │
│   │  • Vibration motor        │ correct │  • Optional component   │        │
│   │  • Long-life battery      │         └─────────────────────────┘        │
│   └───────────────────────────┘                                             │
│              │                                                              │
│              │ WiFi 5                                                       │
│              ▼                                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    PROCESSING UNIT                               │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • Mid-range PC (Intel i5 + integrated GPU)                      │      │
│   │  • Modular software architecture                                 │      │
│   │  • Pattern analysis (statistical, upgradeable to AI)             │      │
│   │  • Hybrid storage (local SSD + network sync)                     │      │
│   │  • 8-lane scalable                                               │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│              │                                                              │
│              ▼                                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    FLEXIBLE DISPLAY                              │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  Indoor: Projection screen with sensor overlay (2.5m × 2m)       │      │
│   │  Outdoor: Large TV monitors or tablet per station                │      │
│   │  Audio: Speaker per lane + central system                        │      │
│   │  Haptic: Vibration feedback in weapon                            │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                                                                             │
│  KEY SPECIFICATIONS:                                                        │
│  ═══════════════════                                                        │
│  • Detection accuracy: ≤4mm (laser primary, camera verification)           │
│  • Latency: ≤40ms (optimized pipeline)                                     │
│  • Weapons supported: AK, SKS, SVD, PKM, RPK (modular kits)                │
│  • Setup time: ~25 minutes (semi-portable)                                 │
│  • Operating modes: Indoor (full) / Outdoor (IMU mode)                     │
│                                                                             │
│  ESTIMATED COST:                                                            │
│  ═══════════════                                                            │
│  Weapon kit (×8):     $3,500 × 8 = $28,000                                 │
│  Camera system:       $3,500                                                │
│  Processing unit:     $6,000                                                │
│  Display system:      $8,000                                                │
│  Audio + haptic:      $3,000                                                │
│  Software license:    $12,000                                               │
│  Integration:         $10,000                                               │
│  ────────────────────────────────                                          │
│  TOTAL:               ~$70,500                                              │
│                                                                             │
│  ADVANTAGES:                          DISADVANTAGES:                        │
│  ════════════                         ═══════════════                       │
│  ✓ Within budget ($65K-$85K)          ✗ Not highest accuracy               │
│  ✓ Balances accuracy & flexibility    ✗ Moderate complexity                │
│  ✓ Indoor/outdoor capable             ✗ Some compromises vs premium        │
│  ✓ Upgrade path to premium            ✗ Camera optional (extra cost)       │
│  ✓ Reasonable setup time                                                   │
│  ✓ Proven + innovative hybrid                                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 7. STEP 2.6: CONCEPT EVALUATION (VDI 2225)

### 7.1 Evaluation Criteria Definition

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION CRITERIA                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CRITERIA SELECTION RATIONALE:                                              │
│  Based on stakeholder needs analysis and essential requirements             │
│                                                                             │
│  ID │ Criterion              │ Description                    │ Weight     │
│  ═══╪════════════════════════╪════════════════════════════════╪════════════│
│  C1 │ Detection Accuracy     │ Shot placement precision       │ 0.20       │
│  C2 │ Response Latency       │ Time from trigger to feedback  │ 0.15       │
│  C3 │ Cost Compliance        │ Within $65K-$85K budget        │ 0.18       │
│  C4 │ Ease of Setup          │ Deployment time & complexity   │ 0.10       │
│  C5 │ Reliability (MTBF)     │ Expected operational uptime    │ 0.12       │
│  C6 │ Flexibility            │ Indoor/outdoor, weapon variety │ 0.10       │
│  C7 │ Training Realism       │ Fidelity of shooting experience│ 0.08       │
│  C8 │ Maintainability        │ Local repair, parts availability│ 0.07      │
│  ═══╧════════════════════════╧════════════════════════════════╧════════════│
│                                              TOTAL WEIGHT:    │ 1.00       │
│                                                                             │
│  WEIGHT JUSTIFICATION:                                                      │
│  • Accuracy (0.20): Core function - must meet training standards            │
│  • Cost (0.18): Budget constraint is hard requirement                       │
│  • Latency (0.15): Critical for training effectiveness                      │
│  • Reliability (0.12): Military equipment must be dependable                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Scoring Scale Definition

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 SCORING SCALE (0-4)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Score │ Meaning                │ Interpretation                            │
│  ══════╪════════════════════════╪═════════════════════════════════════════  │
│    0   │ Unsatisfactory         │ Does not meet minimum requirement         │
│    1   │ Just tolerable         │ Barely acceptable, significant issues     │
│    2   │ Adequate               │ Meets basic requirement, some gaps        │
│    3   │ Good                   │ Exceeds requirement, minor gaps           │
│    4   │ Very good (ideal)      │ Fully meets or exceeds all aspects        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 7.3 Concept Scoring Matrix

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              VDI 2225 SCORING MATRIX                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  Criterion            │ Weight │ Concept A  │ Concept B  │ Concept C  │ Concept D              │
│                       │   (g)  │ (Classic)  │ (Smart IMU)│ (Advanced) │ (Optimal)              │
│  ═════════════════════╪════════╪════════════╪════════════╪════════════╪════════════════════════│
│                       │        │ Score │W×S │ Score │W×S │ Score │W×S │ Score │W×S            │
│  ─────────────────────┼────────┼───────┼────┼───────┼────┼───────┼────┼───────┼────────────────│
│  C1: Accuracy         │  0.20  │   4   │0.80│   2   │0.40│   4   │0.80│   3   │0.60           │
│  C2: Latency          │  0.15  │   4   │0.60│   2   │0.30│   4   │0.60│   3   │0.45           │
│  C3: Cost Compliance  │  0.18  │   4   │0.72│   4   │0.72│   0   │0.00│   3   │0.54           │
│  C4: Ease of Setup    │  0.10  │   2   │0.20│   4   │0.40│   1   │0.10│   3   │0.30           │
│  C5: Reliability      │  0.12  │   3   │0.36│   2   │0.24│   3   │0.36│   3   │0.36           │
│  C6: Flexibility      │  0.10  │   1   │0.10│   4   │0.40│   3   │0.30│   3   │0.30           │
│  C7: Training Realism │  0.08  │   2   │0.16│   2   │0.16│   4   │0.32│   3   │0.24           │
│  C8: Maintainability  │  0.07  │   3   │0.21│   3   │0.21│   2   │0.14│   3   │0.21           │
│  ═════════════════════╪════════╪═══════╪════╪═══════╪════╪═══════╪════╪═══════╪════════════════│
│  WEIGHTED SUM (Σ)     │  1.00  │       │3.15│       │2.83│       │2.62│       │3.00           │
│  ─────────────────────┼────────┼───────┼────┼───────┼────┼───────┼────┼───────┼────────────────│
│  MAX POSSIBLE         │        │       │4.00│       │4.00│       │4.00│       │4.00           │
│  TECHNICAL VALUE (Wt) │        │       │0.79│       │0.71│       │0.66│       │0.75           │
│  ═════════════════════╧════════╧═══════╧════╧═══════╧════╧═══════╧════╧═══════╧════════════════│
│                                                                                                  │
│  RANKING BY TECHNICAL VALUE:                                                                    │
│  ══════════════════════════════                                                                 │
│  1st: Concept A (Classic Laser)     Wt = 0.79                                                  │
│  2nd: Concept D (Optimal Balance)   Wt = 0.75                                                  │
│  3rd: Concept B (Smart IMU)         Wt = 0.71                                                  │
│  4th: Concept C (Advanced Hybrid)   Wt = 0.66  ← ELIMINATED (Cost = 0)                         │
│                                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 7.4 Economic Evaluation

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              ECONOMIC EVALUATION                                                 │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  Parameter              │ Concept A  │ Concept B  │ Concept C  │ Concept D                      │
│  ═══════════════════════╪════════════╪════════════╪════════════╪══════════════════════════════  │
│  Estimated Unit Cost    │ $64,600    │ $57,400    │ $139,000   │ $70,500                        │
│  Target Cost            │ $75,000    │ $75,000    │ $75,000    │ $75,000                        │
│  Cost Ratio (Hk)        │ 0.86       │ 0.77       │ 1.85       │ 0.94                           │
│  Economic Value (We)    │ 1.00       │ 1.00       │ 0.00       │ 1.00                           │
│  ═══════════════════════╧════════════╧════════════╧════════════╧══════════════════════════════  │
│                                                                                                  │
│  Note: Concept C exceeds budget by 85%, Economic Value = 0 (eliminated)                         │
│                                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 7.5 Combined Strength (S-Diagram)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                              S-DIAGRAM (Strength Ranking)                                        │
├─────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                  │
│  Economic Value (We)                                                                            │
│        ▲                                                                                         │
│   1.00 │    ●A           ●B                    ●D                                               │
│        │    (0.79)       (0.71)                (0.75)                                           │
│   0.80 │                                                                                        │
│        │                                                                                         │
│   0.60 │                                                                                        │
│        │                                                                                         │
│   0.40 │                                                                                        │
│        │                                                                                         │
│   0.20 │                                                                                        │
│        │                                               ●C (0.66)                                │
│   0.00 │─────────────────────────────────────────────────────────────▶ Technical Value (Wt)    │
│        0.00      0.20      0.40      0.60      0.80      1.00                                   │
│                                                                                                  │
│  ═══════════════════════════════════════════════════════════════════════════════════════════    │
│  COMBINED STRENGTH CALCULATION: S = (Wt × We) or (Wt + We)/2                                   │
│  ───────────────────────────────────────────────────────────────────────────────────────────    │
│                                                                                                  │
│  Using Geometric Mean: S = √(Wt × We)                                                           │
│                                                                                                  │
│  Concept A: S = √(0.79 × 1.00) = 0.89  ← HIGHEST                                               │
│  Concept D: S = √(0.75 × 1.00) = 0.87  ← SECOND                                                │
│  Concept B: S = √(0.71 × 1.00) = 0.84                                                          │
│  Concept C: S = √(0.66 × 0.00) = 0.00  ← ELIMINATED                                            │
│                                                                                                  │
│  ═══════════════════════════════════════════════════════════════════════════════════════════    │
│  FINAL RANKING:                                                                                 │
│                                                                                                  │
│  🥇 1st: CONCEPT A (Classic Laser)    S = 0.89                                                 │
│  🥈 2nd: CONCEPT D (Optimal Balance)  S = 0.87                                                 │
│  🥉 3rd: CONCEPT B (Smart IMU)        S = 0.84                                                 │
│  ❌ 4th: CONCEPT C (Advanced Hybrid)  S = 0.00 (Over budget - eliminated)                      │
│                                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### 7.6 Sensitivity Analysis

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    SENSITIVITY ANALYSIS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Question: Would ranking change if criteria weights adjusted ±20%?          │
│                                                                             │
│  SCENARIO 1: Increase Accuracy weight to 0.30 (decrease others)            │
│  ─────────────────────────────────────────────────────────────              │
│  Concept A: 0.82 (still 1st)                                               │
│  Concept D: 0.76                                                            │
│  Concept B: 0.68                                                            │
│  → No ranking change                                                        │
│                                                                             │
│  SCENARIO 2: Increase Flexibility weight to 0.20 (decrease Accuracy)       │
│  ─────────────────────────────────────────────────────────────              │
│  Concept A: 0.73                                                            │
│  Concept D: 0.77 ← Now 1st                                                 │
│  Concept B: 0.76                                                            │
│  → Concept D becomes preferred if flexibility prioritized                   │
│                                                                             │
│  SCENARIO 3: Budget constraint relaxed to $100K                            │
│  ─────────────────────────────────────────────────────────────              │
│  Concept C becomes viable but still lower combined strength                │
│  → Concept A remains preferred                                              │
│                                                                             │
│  CONCLUSION: Selection is ROBUST under reasonable weight variations        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. STEP 2.7: SELECTED CONCEPT

### 8.1 Selection Decision

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                         CONCEPT SELECTION DECISION                          ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  PRIMARY SELECTION: CONCEPT A - "CLASSIC LASER"                             ║
║                                                                             ║
║  Rationale:                                                                 ║
║  ──────────                                                                 ║
║  1. Highest combined strength (S = 0.89)                                    ║
║  2. Highest technical value (Wt = 0.79)                                     ║
║  3. Lowest cost ($64,600) - well within budget                              ║
║  4. Proven technology - lower development risk                              ║
║  5. Best accuracy and latency for core training function                    ║
║                                                                             ║
║  SECONDARY DEVELOPMENT: Incorporate Concept D elements as upgrade path      ║
║                                                                             ║
║  From Concept D, include in architecture:                                   ║
║  • IMU in weapon kit (for outdoor/backup mode)                              ║
║  • Camera interface provision (future accuracy verification)                ║
║  • Modular software architecture (upgrade path)                             ║
║  • Haptic vibration motor in weapon kit                                     ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

### 8.2 Selected Concept: Enhanced Classic Laser (A+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│           SELECTED CONCEPT: ENHANCED CLASSIC LASER (A+)                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SYSTEM ARCHITECTURE:                                                       │
│  ════════════════════                                                       │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    WEAPON SENSOR KIT                             │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • Laser emitter module (Class 1, eye-safe)                      │      │
│   │  • IMU sensor (backup/calibration)        ← From Concept D       │      │
│   │  • Pressure-based trigger sensor                                 │      │
│   │  • Vibration feedback motor               ← From Concept D       │      │
│   │  • RF transceiver (2.4 GHz)                                      │      │
│   │  • Rechargeable Li-ion battery (8h operation)                    │      │
│   │  • Weapon-specific mounting bracket (AK, SKS, SVD, PKM, RPK)     │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                              │                                              │
│                              │ RF 2.4GHz                                    │
│                              ▼                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    PROJECTION SCREEN SYSTEM                      │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • Photodetector array (2.5m × 2.0m active area)                 │      │
│   │  • Resolution: ≤3mm                                              │      │
│   │  • Response time: ≤5ms                                           │      │
│   │  • Projection surface (front projection)                         │      │
│   │  • Modular panels for transport                                  │      │
│   │  • Camera interface port (future upgrade)   ← From Concept D     │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                              │                                              │
│                              │ Gigabit Ethernet                             │
│                              ▼                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    CENTRAL PROCESSING UNIT                       │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • Industrial PC: Intel Core i5, 16GB RAM, 512GB SSD             │      │
│   │  • OS: Linux (real-time kernel)                                  │      │
│   │  • Software modules:                                             │      │
│   │    - Shot detection & localization                               │      │
│   │    - Ballistic modeling (simplified)                             │      │
│   │    - Scoring engine (point-based + pattern analysis)             │      │
│   │    - Scenario manager (20+ training programs)                    │      │
│   │    - Data logging & reporting                                    │      │
│   │    - Network sync capability          ← From Concept D           │      │
│   │  • Interfaces: 8× weapon kits, 1× screen, 8× displays            │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                              │                                              │
│                              ▼                                              │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                    FEEDBACK & DISPLAY SYSTEM                     │      │
│   │  ───────────────────────────────────────────────────────────    │      │
│   │  • Central projector (3000 lumens) for targets                   │      │
│   │  • Per-station LED monitor (24") for individual feedback         │      │
│   │  • Instructor console (tablet or desktop)                        │      │
│   │  • Audio system (speakers per lane + central)                    │      │
│   │  • Haptic feedback via weapon vibration motor                    │      │
│   └─────────────────────────────────────────────────────────────────┘      │
│                                                                             │
│  KEY SPECIFICATIONS (ENHANCED A+):                                          │
│  ═════════════════════════════════                                          │
│                                                                             │
│  │ Parameter            │ Specification       │ Verification       │       │
│  ├──────────────────────┼─────────────────────┼────────────────────│       │
│  │ Detection accuracy   │ ≤3mm                │ Calibration test   │       │
│  │ System latency       │ ≤30ms               │ Oscilloscope       │       │
│  │ Supported weapons    │ AK, SKS, SVD, PKM,  │ Fit check          │       │
│  │                      │ RPK (5 types)       │                    │       │
│  │ Training stations    │ 8 (expandable)      │ Load test          │       │
│  │ Scenarios            │ 25 programs         │ Demo               │       │
│  │ Setup time           │ ≤40 minutes         │ Timed trial        │       │
│  │ Operating temp       │ -10°C to +55°C      │ Chamber test       │       │
│  │ MTBF                 │ ≥2,500 hours        │ Reliability test   │       │
│  │ Power consumption    │ ≤2 kW total         │ Power meter        │       │
│                                                                             │
│  ESTIMATED COST BREAKDOWN (ENHANCED A+):                                    │
│  ════════════════════════════════════════                                   │
│                                                                             │
│  Component                    │ Unit Cost  │ Qty │ Total                   │
│  ────────────────────────────┼────────────┼─────┼─────────────────────     │
│  Weapon sensor kit           │ $3,800     │  8  │ $30,400                  │
│  Projection screen system    │ $12,000    │  1  │ $12,000                  │
│  Central processing unit     │ $6,500     │  1  │ $6,500                   │
│  Display system (monitors)   │ $2,400     │  1  │ $2,400                   │
│  Audio system                │ $1,200     │  1  │ $1,200                   │
│  Software development        │ $8,000     │  1  │ $8,000                   │
│  Integration & testing       │ $7,500     │  1  │ $7,500                   │
│  Documentation & training    │ $2,000     │  1  │ $2,000                   │
│  ════════════════════════════╪════════════╧═════╪═════════════════════     │
│                              │     SUBTOTAL     │ $70,000                  │
│                              │     Margin 10%   │ $7,000                   │
│                              │     TOTAL        │ $77,000                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.3 Preliminary Layout Sketch

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PRELIMINARY LAYOUT - TOP VIEW                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         PROJECTION SCREEN (2.5m × 2.0m)                     │
│         ┌─────────────────────────────────────────────────────┐             │
│         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│             │
│         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│             │
│         │░░░░░░░░░░░░░░ PHOTODETECTOR ARRAY ░░░░░░░░░░░░░░░░│             │
│         │░░░░░░░░░░░░░░   + PROJECTION      ░░░░░░░░░░░░░░░░│             │
│         │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│             │
│         └─────────────────────────────────────────────────────┘             │
│                                   │                                         │
│                                   │ 25m                                     │
│                                   │                                         │
│         ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                   │
│         │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │ │ 7 │ │ 8 │                   │
│         │MON│ │MON│ │MON│ │MON│ │MON│ │MON│ │MON│ │MON│                   │
│         └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘ └─┬─┘                   │
│           │     │     │     │     │     │     │     │                       │
│         ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐                   │
│         │▓▓▓│ │▓▓▓│ │▓▓▓│ │▓▓▓│ │▓▓▓│ │▓▓▓│ │▓▓▓│ │▓▓▓│                   │
│         │ S │ │ S │ │ S │ │ S │ │ S │ │ S │ │ S │ │ S │                   │
│         └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                   │
│        LANE 1 LANE 2 LANE 3 LANE 4 LANE 5 LANE 6 LANE 7 LANE 8            │
│                                                                             │
│        ├────────────────── 8m total width ────────────────────┤            │
│                                                                             │
│                              ┌─────────┐                                   │
│                              │ CENTRAL │                                   │
│                              │   CPU   │                                   │
│                              │ + INSTR │                                   │
│                              │ CONSOLE │                                   │
│                              └─────────┘                                   │
│                                                                             │
│  LEGEND:                                                                    │
│  ░░░ = Projection screen with photodetector array                          │
│  MON = Individual feedback monitor (24")                                   │
│  ▓▓▓ = Shooting station with trainee                                       │
│  S   = Soldier position                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 8.4 Weapon Kit Concept

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WEAPON SENSOR KIT - CONCEPT LAYOUT                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  AK-47/AKM CONFIGURATION:                                                   │
│  ════════════════════════                                                   │
│                                                                             │
│                    LASER MODULE                                             │
│                    (barrel-mounted)                                         │
│                         │                                                   │
│  ┌──────────────────────┼──────────────────────────────────────┐           │
│  │                      ▼                                       │           │
│  │    ══════════════●════════════════════════════════          │           │
│  │    ║            ╔═╗                              ║          │           │
│  │    ║    ┌───────╠═╬──────────────────────────┐  ║──────┐   │           │
│  │    ║    │ LASER ╚═╝                          │  ║      │   │           │
│  │    ║    │ MODULE     HANDGUARD               │  ║ STOCK│   │           │
│  │    ║    └────────────────────────────────────┘  ║──────┘   │           │
│  │    ║                    │                       ║          │           │
│  │    ║                    │                       ║          │           │
│  │    ║                ┌───┴───┐                   ║          │           │
│  │    ║                │TRIGGER│                   ║          │           │
│  │    ║                │SENSOR │                   ║          │           │
│  │    ║                └───────┘                   ║          │           │
│  │    ║                                            ║          │           │
│  │    ║    ┌────────────────────┐                  ║          │           │
│  │    ║    │   ELECTRONICS BOX  │                  ║          │           │
│  │    ║    │  ┌──────┐┌──────┐  │                  ║          │           │
│  │    ║    │  │ IMU  ││RADIO │  │                  ║          │           │
│  │    ║    │  └──────┘└──────┘  │                  ║          │           │
│  │    ║    │  ┌──────┐┌──────┐  │                  ║          │           │
│  │    ║    │  │ MCU  ││BATT. │  │                  ║          │           │
│  │    ║    │  └──────┘└──────┘  │                  ║          │           │
│  │    ║    │  ┌──────┐          │                  ║          │           │
│  │    ║    │  │HAPTIC│          │                  ║          │           │
│  │    ║    │  └──────┘          │                  ║          │           │
│  │    ║    └────────────────────┘                  ║          │           │
│  │    ║         (under receiver)                   ║          │           │
│  │    ══════════════════════════════════════════════          │           │
│  │                                                              │           │
│  └──────────────────────────────────────────────────────────────┘           │
│                                                                             │
│  KIT COMPONENTS:                                                            │
│  ═══════════════                                                            │
│  1. Laser module: Barrel-mounted, Class 1 eye-safe, 650nm                  │
│  2. Trigger sensor: Pressure-based, attaches near trigger guard            │
│  3. Electronics box: Under receiver, contains:                              │
│     - MCU (STM32 or ESP32)                                                 │
│     - 9-DOF IMU (backup mode)                                              │
│     - RF transceiver (2.4 GHz)                                             │
│     - Haptic motor (vibration feedback)                                    │
│     - Li-ion battery (2600mAh, 8h operation)                               │
│  4. Quick-release mounting brackets (weapon-specific)                       │
│                                                                             │
│  ESTIMATED KIT COST: $3,800 per weapon                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. APPENDICES

### 9.1 Appendix A: Requirements Traceability

| Requirement ID | Requirement | Addressed by Concept |
|---------------|-------------|---------------------|
| REQ-001 | Support AK-47/AKM | Weapon kit with AK-specific mount |
| REQ-002 | ≤5mm accuracy | Photodetector array (≤3mm achieved) |
| REQ-003 | ≤50ms latency | Direct detection (≤30ms achieved) |
| REQ-004 | 4-8 training stations | 8-lane architecture |
| REQ-005 | ≥20 scenarios | Software module (25 scenarios) |
| REQ-006 | $65K-$85K unit cost | $77K estimated (within budget) |
| REQ-007 | MIL-STD-810H | To be addressed in Embodiment |
| REQ-008 | MTBF ≥2,000h | Industrial components (≥2,500h target) |

### 9.2 Appendix B: Technology Risk Assessment

| Technology Element | Risk Level | Mitigation |
|-------------------|------------|------------|
| Laser detection system | LOW | Proven COTS technology |
| RF communication | LOW | Standard protocols |
| IMU integration | MEDIUM | Use calibrated modules |
| Software real-time | MEDIUM | Linux RT kernel, proven stack |
| Haptic feedback | LOW | Standard vibration motor |
| Multi-lane sync | MEDIUM | Careful timing design |

### 9.3 Appendix C: Development Risk Matrix

```
┌─────────────────────────────────────────────────────────────────┐
│                    RISK MATRIX (PHASE 2)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  LIKELIHOOD    │ CONSEQUENCE                                   │
│                │ Negligible │ Minor │ Moderate │ Major │ Severe│
│  ══════════════╪════════════╪═══════╪══════════╪═══════╪═══════│
│  Almost Certain│            │       │          │       │       │
│  Likely        │            │       │   IMU    │       │       │
│  Possible      │            │ RF    │ Software │       │       │
│  Unlikely      │ Laser det. │ Haptic│ Multi-ln │       │       │
│  Rare          │            │       │          │       │       │
│                                                                 │
│  LEGEND: Risk items positioned by assessed likelihood/impact    │
│                                                                 │
│  OVERALL RISK ASSESSMENT: MEDIUM-LOW                            │
│  Selected concept uses predominantly proven technologies        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## DOCUMENT APPROVAL

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         APPROVAL SIGNATURES                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Role                │ Name        │ Signature   │ Date                    │
│  ════════════════════╪═════════════╪═════════════╪═════════════════════════│
│  Prepared by         │             │             │                         │
│  ────────────────────┼─────────────┼─────────────┼─────────────────────────│
│  Technical Review    │             │             │                         │
│  ────────────────────┼─────────────┼─────────────┼─────────────────────────│
│  Project Manager     │             │             │                         │
│  ────────────────────┼─────────────┼─────────────┼─────────────────────────│
│  Approved by         │             │             │                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## NEXT PHASE GATE

```
╔═════════════════════════════════════════════════════════════════════════════╗
║                    PHASE 2 → PHASE 3 TRANSITION                             ║
╠═════════════════════════════════════════════════════════════════════════════╣
║                                                                             ║
║  PHASE 2 DELIVERABLES CHECKLIST:                                            ║
║  ════════════════════════════════                                           ║
║  ✓ Essential problem identified and abstracted                              ║
║  ✓ Function structure established (Level 1 & 2)                             ║
║  ✓ Working principles searched and documented                               ║
║  ✓ Morphological matrix created                                             ║
║  ✓ 4 concepts generated and described                                       ║
║  ✓ VDI 2225 evaluation completed                                            ║
║  ✓ Concept selected with documented rationale                               ║
║  ✓ Preliminary layout sketched                                              ║
║  ✓ Requirements traceability verified                                       ║
║                                                                             ║
║  PHASE 3 OBJECTIVES:                                                        ║
║  ═══════════════════                                                        ║
║  • Develop detailed embodiment layout                                       ║
║  • Select materials and manufacturing processes                             ║
║  • Apply DfX principles (DfM, DfA, DfMaintenance)                          ║
║  • Create preliminary BOM                                                   ║
║  • Verify MIL-STD-810H compliance approach                                  ║
║  • Develop test plan                                                        ║
║                                                                             ║
║  ESTIMATED PHASE 3 DURATION: 8-12 weeks                                     ║
║                                                                             ║
╚═════════════════════════════════════════════════════════════════════════════╝
```

---

*Document prepared following Pahl & Beitz Systematic Design Methodology*
*VN-SAMT-001 Small Arms Marksmanship Trainer*
*Phase 2: Conceptual Design - Version 1.0*

**END OF DOCUMENT**
