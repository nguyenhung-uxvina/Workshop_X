# V-SMASH: Vietnamese AI Fire Control System
## Conceptual Design Document

**Project Code**: V-SMASH-001
**Version**: 1.1 (Revised)
**Date**: 2026-01-18
**Reference System**: SmartShooter SMASH (Israel)
**Applicable Projects**: MTB-20 RCWS, VN-CUAV, Small Arms Enhancement

**Revision History**:
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-18 | Design Team | Initial release |
| 1.1 | 2026-01-18 | Design Team | Added: Problem Abstraction (1.4), Verification Methods, VDI 2225 Weight Justification, Morphological Concept Paths |

---

# PART 1: REQUIREMENTS & DESIGN PHILOSOPHY

## 1.1 Mission Statement

Develop an **indigenous Vietnamese AI-powered fire control system** that enables:
- Single-shot-single-hit capability against moving aerial and ground targets
- Integration with Vietnamese weapon platforms (MTB-20, rifles, vehicle weapons)
- Sustainable local production and maintenance
- Counter-UAS capability for national defense

## 1.2 Design Philosophy

### Core Principles (Adopted from SMASH Analysis)

```yaml
principle_1:
  name: "HUMAN-IN-THE-LOOP"
  vietnamese: "Con người trong vòng điều khiển"
  description: |
    - AI assists, human decides
    - Operator must initiate trigger action
    - System only optimizes TIMING of fire
    - No autonomous lethal decision-making
  rationale:
    - Legal compliance (international humanitarian law)
    - Ethical responsibility
    - Operator confidence and trust
  implementation:
    - Trigger gating requires human pressure first
    - Clear "SAFE" and "AI-READY" states
    - Manual override always available

principle_2:
  name: "MODULAR PLATFORM"
  vietnamese: "Nền tảng mô-đun"
  description: |
    - Core processing module shared across variants
    - Weapon-specific interface modules
    - Software-configurable for different platforms
    - Upgrade path built-in
  rationale:
    - Reduce total development cost
    - Faster time to multiple products
    - Easier maintenance and logistics
  implementation:
    - Common AI processing board
    - Interchangeable sensor heads
    - Standardized weapon interfaces
    - USB/Ethernet configuration port

principle_3:
  name: "FAIL-SAFE TO MANUAL"
  vietnamese: "An toàn mặc định - chuyển sang thủ công"
  description: |
    - If FCS fails, weapon operates normally
    - No dependency on electronics for basic function
    - Graceful degradation of capabilities
    - Clear failure indicators
  rationale:
    - Combat reliability
    - Operator confidence
    - Mission continuity
  implementation:
    - Mechanical decoupling option
    - Battery failure = normal trigger
    - Visual/audio failure warnings
    - Standard sights backup (V-SMASH-X4)
```

## 1.3 Requirements List (Pahl & Beitz Format)

### Demands (D) vs Wishes (W) - Complete Requirements List

**Legend - Verification Methods:**
- **A** = Analysis (calculation, simulation, modeling)
- **I** = Inspection (visual examination, measurement)
- **D** = Demonstration (functional operation under controlled conditions)
- **T** = Test (formal testing per specified procedures)

| ID | Category | Requirement | D/W | Value | Verification | Remarks |
|----|----------|-------------|-----|-------|--------------|---------|
| **FUNCTIONAL** | | | | | | |
| R01 | Performance | Detect aerial targets (drones) | D | 95% @ 300m | T | Day conditions, MIL-STD test setup |
| R02 | Performance | Detect ground targets (personnel) | D | 95% @ 500m | T | Day conditions |
| R03 | Performance | Track moving targets | D | Up to 50 m/s | T | Drone typical speed |
| R04 | Performance | Calculate fire solution | D | <100ms latency | T | Instrumented timing |
| R05 | Performance | Gate trigger at optimal moment | D | <5ms precision | T | High-speed camera verification |
| R06 | Performance | Night operation capability | W | 200m range | T | IR/thermal optional |
| R07 | Data | Record engagements | W | 720p video | D | For training/legal review |
| **PERFORMANCE** | | | | | | |
| R08 | Range | Effective range - drone engagement | D | 250m minimum | T | 5.56mm platform |
| R09 | Range | Effective range - HMG platform | W | 400m | T | 12.7mm platform |
| R10 | Effectiveness | Hit probability improvement | D | 3x baseline | T | Compared to iron sights |
| R11 | Effectiveness | First-shot hit probability | W | >70% | T | Moving target @ 200m |
| **ENVIRONMENTAL** | | | | | | |
| R12 | Temperature | Operating temperature range | D | -10°C to +55°C | T | MIL-STD-810H Method 501.7/502.7 |
| R13 | Humidity | Humidity resistance | D | 95% RH | T | MIL-STD-810H Method 507.6 |
| R14 | Sealing | Dust/water protection | D | IP65 | T | IEC 60529 |
| R15 | Shock | Shock resistance | D | Per MIL-STD-810H | T | Method 516.8 (functional shock) |
| R16 | Vibration | Vibration resistance | D | Per MIL-STD-810H | T | Method 514.8 Cat. 20 (ground vehicles) |
| R17 | Salt Fog | Corrosion resistance | W | Per MIL-STD-810H | T | Method 509.7 (for naval variant) |
| **PHYSICAL/GEOMETRY** | | | | | | |
| R18 | Mass | Handheld variant weight | D | <1.5 kg | I | Including battery |
| R19 | Mass | RCWS module weight | D | <3 kg | I | Vehicle integration |
| R20 | Dimensions | Handheld envelope | D | 200×100×120mm max | I | Picatinny-mounted clearances |
| R21 | Power | Power consumption average | D | <10W | T | Continuous operation |
| R22 | Power | Battery life | D | >6 hours | T | Full operational mode |
| **INTEGRATION/KINEMATICS** | | | | | | |
| R23 | Interface | Mounting interface | D | Picatinny rail | I | MIL-STD-1913 compliance |
| R24 | Compatibility | Compatible weapon platforms | D | AK/M16/Galil, PKM, NSV, DShK | D | VPA inventory coverage |
| R25 | Compatibility | MTB-20 RCWS integration | D | Full compatibility | D | Primary vehicle platform |
| R26 | Field of View | Optical FOV | D | ≥15° | I | Adequate target acquisition |
| **SIGNALS/DATA** | | | | | | |
| R27 | Interface | Configuration interface | D | USB-C | D | Field programmable |
| R28 | Interface | Video output (optional) | W | Composite/HDMI | D | For external display |
| R29 | Storage | Onboard storage | W | 32GB minimum | I | Engagement recording |
| R30 | Protocol | MTB-20 data interface | D | CAN bus | T | Vehicle integration |
| **SAFETY** | | | | | | |
| R31 | Safety | Human-in-the-loop enforcement | D | Trigger requires human initiation | A/D | Ethical/legal requirement |
| R32 | Safety | Fail-safe to manual operation | D | Weapon functional without FCS | D | Combat reliability |
| R33 | Safety | Clear mode indication | D | Visual + audio status | D | Operator awareness |
| R34 | Safety | No inadvertent discharge | D | Per MIL-STD-882E | A | System safety analysis |
| R35 | EMC | Electromagnetic compatibility | D | Per MIL-STD-461G | T | CE106, RS103, CS114 |
| **ERGONOMICS** | | | | | | |
| R36 | Human Factors | Eye relief | D | Unlimited (reflex style) | I | Rapid target acquisition |
| R37 | Human Factors | Reticle visibility | D | Visible in daylight | D | 50,000 lux ambient |
| R38 | Human Factors | Control accessibility | D | Single-hand operation | D | While holding weapon |
| **PRODUCTION** | | | | | | |
| R39 | Sourcing | Local content | D | >60% by value | A | Self-reliance target |
| R40 | Components | COTS component usage | D | Maximize where possible | A | Cost efficiency |
| R41 | Cost | Unit cost target (LITE) | W | <$5,000 USD | A | Export competitive |
| R42 | Complexity | Manufacturing complexity | W | Medium (local capability) | A | Vietnamese facilities |
| **ASSEMBLY** | | | | | | |
| R43 | Assembly | Assembly tools required | D | Standard hand tools only | I | No specialized tooling |
| R44 | Assembly | Assembly time | W | <4 hours per unit | D | Production efficiency |
| R45 | Assembly | Calibration requirement | D | Factory calibration only | D | No field adjustment |
| **MAINTENANCE/OPERATION** | | | | | | |
| R46 | Maintenance | Field-level repair capability | D | No special tools required | D | Soldier-level maintenance |
| R47 | Reliability | Mean Time Between Failures | D | >2,000 hours | A | MIL-HDBK-217F prediction |
| R48 | Maintenance | Software update method | D | Field flashable via USB | D | No depot return |
| R49 | Diagnostics | Built-in test capability | W | System status self-check | D | Operator-initiated |
| **TRANSPORT/STORAGE** | | | | | | |
| R50 | Storage | Storage temperature range | D | -40°C to +70°C | T | Warehouse conditions |
| R51 | Transport | Shipping protection | W | Pelican-style case compatible | I | Standard military logistics |
| **QUALITY CONTROL** | | | | | | |
| R52 | QC | Acceptance test procedure | D | Documented ATP | D | Per deliverable specification |
| R53 | QC | Inspection criteria | D | Workmanship per IPC-A-610 | I | Electronics assembly |
| **LEGAL/REGULATORY** | | | | | | |
| R54 | Compliance | Vietnamese military certification | D | Per MoD requirements | D | Type approval |
| R55 | Compliance | Export control classification | W | Non-ITAR design preferred | A | International sales |
| **RECYCLING/DISPOSAL** | | | | | | |
| R56 | Environment | Battery disposal compliance | D | Per Vietnamese regulations | A | Li-ion handling |
| R57 | Environment | RoHS compliance (civil variant) | W | RoHS 3 compliant | A | Dual-use potential |

### Requirements Summary Statistics

| Category | Demands | Wishes | Total |
|----------|---------|--------|-------|
| Functional | 5 | 2 | 7 |
| Performance | 2 | 2 | 4 |
| Environmental | 5 | 1 | 6 |
| Physical/Geometry | 5 | 0 | 5 |
| Integration/Kinematics | 4 | 0 | 4 |
| Signals/Data | 2 | 2 | 4 |
| Safety | 5 | 0 | 5 |
| Ergonomics | 3 | 0 | 3 |
| Production | 2 | 2 | 4 |
| Assembly | 2 | 1 | 3 |
| Maintenance/Operation | 3 | 1 | 4 |
| Transport/Storage | 1 | 1 | 2 |
| Quality Control | 2 | 0 | 2 |
| Legal/Regulatory | 1 | 1 | 2 |
| Recycling/Disposal | 1 | 1 | 2 |
| **TOTAL** | **43** | **14** | **57** |

---

## 1.4 Problem Abstraction (Pahl & Beitz 5-Step Method)

### Purpose
Before creating the function structure, we abstract the requirements list to identify the **essential problem** in solution-neutral terms. This expands the design space and prevents premature solution fixation.

### Step 1: Eliminate Personal Preferences

**Review of requirements for solution bias:**

| Original Requirement | Assessment | Action |
|---------------------|------------|--------|
| "Use NVIDIA Jetson" (implicit in WP selection) | Solution bias - specifies technology | Reformulate: "Process video/AI inference in real-time with ≤10W power" |
| "YOLO-based detection" (implicit) | Solution bias - specifies algorithm | Reformulate: "Detect targets with ≥95% accuracy in operational conditions" |
| "Picatinny rail mount" (R23) | **Retained** - Customer mandate (VPA weapon standard) | Keep as essential constraint |
| "USB-C interface" (R27) | Minor solution preference | Accept - industry standard, minimal impact |

**Result**: Requirements list is reasonably solution-neutral. Key requirements express WHAT (function) not HOW (mechanism).

### Step 2: Omit Non-Essential Requirements

**Main Function Statement:**
> "Improve weapon hit probability against moving aerial/ground targets through optimized fire timing"

**Essential vs Non-Essential Classification:**

| Requirement Type | Essential (Retain) | Non-Essential (Omit for Abstraction) |
|------------------|-------------------|-------------------------------------|
| **Core Function** | R01-R05 (detection, tracking, fire solution, trigger timing) | R07 (video recording - auxiliary) |
| **Critical Constraints** | R31-R35 (safety), R12-R16 (environmental) | R17 (salt fog - variant-specific) |
| **Interface Mandates** | R23 (Picatinny - customer requirement), R25 (MTB-20) | R28 (video output - nice-to-have) |
| **Physical Limits** | R18-R22 (size, weight, power) | R51 (shipping case) |

**Retained for Essential Problem:** 28 requirements (core function + critical constraints + mandated interfaces)

### Step 3: Transform Quantitative → Qualitative

| Quantitative Specification | Qualitative Essence |
|---------------------------|---------------------|
| "95% detection @ 300m" | Reliable target acquisition at infantry engagement distances |
| "<100ms fire solution, <5ms trigger timing" | Real-time response enabling intercept of fast-moving targets |
| "Track up to 50 m/s" | Capability against small UAS threat spectrum |
| "3x hit probability improvement" | Significant effectiveness increase justifying system adoption |
| "-10°C to +55°C, IP65, MIL-STD-810H" | Function in harsh field conditions across Vietnamese operational environments |
| "<1.5 kg, <10W" | Soldier-portable without significant burden |
| "Human-in-the-loop, fail-safe to manual" | Ethical operation with combat reliability |

### Step 4: Generalize the Results

| Specific Formulation | Generalized Formulation | Assessment |
|---------------------|------------------------|------------|
| "AI-powered optic sight" | "Weapon aiming enhancement system" | Good - allows non-AI solutions |
| "Counter-drone capability" | "Engagement of small, fast, maneuvering aerial targets" | Good - doesn't limit to only drones |
| "Trigger gating mechanism" | "Fire timing optimization method" | Good - allows alternatives to solenoid |
| "NVIDIA Jetson processing" | "Edge computing with real-time inference" | Good - platform-neutral |

**Generalization Boundary**: We maintain specificity for:
- Infantry/vehicle weapon integration (not naval guns, artillery)
- Visual-band/thermal sensing (not radar-based)
- Direct fire weapons (not missiles, guided munitions)

### Step 5: Solution-Neutral Problem Formulation

**ESSENTIAL PROBLEM STATEMENT:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      V-SMASH ESSENTIAL PROBLEM                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  FUNCTION:                                                                   │
│  Enable high-probability weapon-target intercept against small, fast,       │
│  maneuvering aerial and ground targets within infantry/vehicle engagement   │
│  distances through optimized fire timing.                                   │
│                                                                              │
│  ESSENTIAL CONSTRAINTS:                                                      │
│  • Human must retain authorization decision (ethical/legal)                 │
│  • System must not prevent weapon operation if failed (combat reliability)  │
│  • Must operate in harsh field environments (MIL-STD-810H envelope)         │
│  • Must be soldier-portable (<1.5kg) or vehicle-integrable (<3kg)           │
│  • Must integrate with existing VPA weapon inventory (AK/M16/PKM/NSV/DShK)  │
│  • Must be producible primarily with Vietnamese capabilities (>60% local)   │
│                                                                              │
│  PROBLEM CLASS:                                                              │
│  "Augmented weapon effectiveness systems for emerging asymmetric threats"   │
│                                                                              │
│  SOLUTION SPACE ENABLED:                                                     │
│  1. Electro-optical + AI processing (SMASH-like)                            │
│  2. Laser designation + ballistic computer                                  │
│  3. Predictive reticle without trigger gating                               │
│  4. Acoustic/RF detection + simple lead indicator                           │
│  5. Hybrid sensor fusion approaches                                         │
│                                                                              │
│  SELECTED APPROACH: #1 (Electro-optical + AI) based on reference system     │
│  analysis and technology readiness assessment.                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Validation**: The abstracted problem enables at least 5 fundamentally different solution approaches while maintaining essential defense context. ✓

---

# PART 2: FUNCTION STRUCTURE

## 2.1 Overall Function Statement

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         V-SMASH FIRE CONTROL SYSTEM                      │
│                                                                          │
│  INPUT                                               OUTPUT              │
│  ─────                                               ──────              │
│  • Visual scene (E: light)                →  • Weapon fires at optimal  │
│  • Operator trigger intent (S: pressure)  →    moment (E: kinetic)      │
│  • Target motion in FOV (M: air/ground)   →  • Target neutralized       │
│  • Electrical power (E: battery)          →  • Engagement record (S)    │
│                                                                          │
│  OVERALL FUNCTION:                                                       │
│  "Optimize weapon fire timing to maximize hit probability on            │
│   moving targets while maintaining human decision authority"            │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## 2.2 E-M-S Flow Analysis

### Energy Flows

| Flow ID | Energy Type | Source | Destination | Transformation |
|---------|-------------|--------|-------------|----------------|
| E1 | Electrical | Battery | Power Management | Regulate voltage |
| E2 | Electrical | Power Mgmt | Processor | Computation |
| E3 | Electrical | Power Mgmt | Sensor | Image capture |
| E4 | Light | Scene | Sensor | Photoelectric conversion |
| E5 | Electrical | Power Mgmt | Display | Information display |
| E6 | Light | Display | Operator Eye | Visual feedback |
| E7 | Mechanical | Operator finger | Trigger sensor | Intent detection |
| E8 | Electrical | Fire Logic | Trigger gate | Actuation control |

### Material Flows

| Flow ID | Material Type | Source | Destination | Transformation |
|---------|---------------|--------|-------------|----------------|
| M1 | Heat | Processor | Housing | Thermal dissipation |
| M2 | Heat | Display | Housing | Thermal dissipation |
| M3 | Air (target) | Environment | Field of View | Detection subject |

### Signal Flows

| Flow ID | Signal Type | Source | Destination | Transformation |
|---------|-------------|--------|-------------|----------------|
| S1 | Image data | Sensor | Processor | Digitize scene |
| S2 | Detection result | AI Engine | Tracker | Target coordinates |
| S3 | Track state | Tracker | Predictor | Motion vector |
| S4 | Predicted position | Predictor | Ballistic Comp | Future target location |
| S5 | Weapon parameters | Memory | Ballistic Comp | Caliber, velocity |
| S6 | Fire solution | Ballistic Comp | Decision Logic | Alignment error |
| S7 | Trigger state | Trigger Sensor | Decision Logic | Operator intent |
| S8 | Fire authorization | Decision Logic | Trigger Gate | Release/hold |
| S9 | Status info | Processor | Display | Operator feedback |
| S10 | Video stream | Sensor | Recorder | Evidence storage |

## 2.3 Function Structure Diagram

```
V-SMASH OVERALL FUNCTION
│
├── F1: ACQUIRE TARGET INFORMATION
│   ├── F1.1: Capture scene image ──────────── WP: CMOS Sensor
│   ├── F1.2: Detect targets in scene ──────── WP: CNN/YOLO Detection
│   ├── F1.3: Classify target type ─────────── WP: Neural Classifier
│   └── F1.4: Measure target range ─────────── WP: Stereo/LRF (optional)
│
├── F2: TRACK TARGET MOTION
│   ├── F2.1: Initialize track ─────────────── WP: Detection-to-Track
│   ├── F2.2: Update track state ───────────── WP: Kalman Filter
│   ├── F2.3: Predict future position ──────── WP: Motion Extrapolation
│   └── F2.4: Handle track loss ────────────── WP: Re-acquisition Logic
│
├── F3: COMPUTE FIRE SOLUTION
│   ├── F3.1: Sense weapon orientation ─────── WP: MEMS IMU
│   ├── F3.2: Retrieve weapon profile ──────── WP: Database Lookup
│   ├── F3.3: Calculate trajectory ─────────── WP: Point-Mass Model
│   └── F3.4: Determine alignment error ────── WP: Vector Comparison
│
├── F4: CONTROL FIRE AUTHORIZATION
│   ├── F4.1: Sense trigger pressure ───────── WP: Force Sensor
│   ├── F4.2: Evaluate hit probability ─────── WP: Threshold Logic
│   ├── F4.3: Authorize/gate fire ──────────── WP: Boolean Decision
│   └── F4.4: Time trigger release ─────────── WP: Precision Timing
│
├── F5: ACTUATE TRIGGER MECHANISM
│   ├── F5.1: Hold trigger (gate closed) ───── WP: Solenoid/Servo
│   ├── F5.2: Release trigger (gate open) ──── WP: Electromechanical
│   └── F5.3: Confirm fire event ───────────── WP: Acoustic/Recoil Sense
│
├── F6: PROVIDE OPERATOR FEEDBACK
│   ├── F6.1: Display aim point ────────────── WP: See-through Optic
│   ├── F6.2: Show target lock status ──────── WP: LED/Reticle Symbol
│   ├── F6.3: Indicate fire readiness ──────── WP: Color/Audio Cue
│   └── F6.4: Display system status ────────── WP: LCD/OLED Screen
│
└── F_AUX: AUXILIARY FUNCTIONS
    ├── F_AUX.1: Manage power ──────────────── WP: PMIC + Battery
    ├── F_AUX.2: Record engagement ─────────── WP: SD Card Storage
    ├── F_AUX.3: Configure weapon profile ──── WP: USB/App Interface
    ├── F_AUX.4: Update software ───────────── WP: OTA/USB Flash
    └── F_AUX.5: Provide fail-safe ─────────── WP: Mechanical Bypass
```

## 2.4 Subfunction Decomposition Table

| ID | Subfunction | Type | Input | Output | Classification |
|----|-------------|------|-------|--------|----------------|
| F1.1 | Capture scene image | E→S | Light | Digital image | SENSE |
| F1.2 | Detect targets | S→S | Image | Bounding boxes | PROCESS |
| F1.3 | Classify targets | S→S | Detection | Class labels | PROCESS |
| F1.4 | Measure range | E→S | Light | Distance value | SENSE |
| F2.1 | Initialize track | S→S | Detection | Track ID | PROCESS |
| F2.2 | Update track | S→S | Detection + state | Updated state | PROCESS |
| F2.3 | Predict position | S→S | Track state | Future coords | PROCESS |
| F2.4 | Handle track loss | S→S | Track quality | Re-acquire/drop | DECIDE |
| F3.1 | Sense orientation | E→S | Angular motion | Aim vector | SENSE |
| F3.2 | Retrieve weapon profile | S→S | Weapon ID | Ballistic params | PROCESS |
| F3.3 | Calculate trajectory | S→S | Params + range | Impact point | PROCESS |
| F3.4 | Determine alignment | S→S | Aim + impact | Error angle | PROCESS |
| F4.1 | Sense trigger | E→S | Force | Pressure value | SENSE |
| F4.2 | Evaluate probability | S→S | Error + threshold | Probability | PROCESS |
| F4.3 | Authorize fire | S→S | Probability + trigger | Yes/No | DECIDE |
| F4.4 | Time release | S→E | Authorization | Timing signal | PROCESS |
| F5.1 | Hold trigger | E | Electrical | Mechanical hold | ACTUATE |
| F5.2 | Release trigger | E | Electrical | Mechanical release | ACTUATE |
| F5.3 | Confirm fire | E→S | Recoil/sound | Fire confirmation | SENSE |
| F6.1 | Display aim | S→E | Aim data | Light pattern | CONVERT |
| F6.2 | Show lock status | S→E | Track state | Visual indicator | CONVERT |
| F6.3 | Indicate readiness | S→E | Fire solution | Color/sound | CONVERT |
| F6.4 | Display status | S→E | System state | Text/symbols | CONVERT |

---

# PART 3: WORKING PRINCIPLE SELECTION

## 3.1 Morphological Matrix with Concept Paths

### Matrix Overview

| Subfunction | Option A | Option B | Option C | 
|-------------|----------|----------|----------|
| **F1.1 Image Capture** | CCD sensor | **CMOS sensor** | Thermal (LWIR) |
| **F1.2 Target Detection** | Template matching | Classical CV (HOG+SVM) | **Deep Learning (YOLO)** |
| **F1.3 Classification** | Rule-based | Random Forest | **Lightweight CNN** |
| **F1.4 Range Finding** | **Passive (size estimate)** | Laser Rangefinder | Stereo vision |
| **F2.2 Tracking** | Centroid tracking | **Kalman Filter** | Deep SORT |
| **F2.3 Prediction** | Linear extrapolation | Polynomial fit | **CV Kalman** |
| **F3.1 Orientation Sense** | Gyroscope only | **Gyro + Accel (6-axis)** | Full IMU (9-axis) |
| **F3.3 Ballistics** | Lookup table | **Point-mass 3DOF** | 6DOF model |
| **F4.1 Trigger Sense** | Limit switch | **Force sensor** | Optical gate |
| **F5.1/5.2 Trigger Gate** | Mechanical block | **Solenoid** | Servo motor |
| **F6.1 Aim Display** | Projected reticle | LCD overlay | **See-through optic** |
| **F6.3 Fire Indicator** | LED only | Audio only | **LED + Audio** |
| **F_AUX.1 Power** | AA batteries | **Rechargeable Li-ion** | External power |
| **F_AUX.2 Recording** | Internal memory | **SD card** | Cloud upload |
| **F_AUX.5 Fail-safe** | Manual bypass switch | Auto-detect failure | **Auto + Manual** |

### Concept Variant Paths (Explicit)

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        MORPHOLOGICAL MATRIX - CONCEPT PATHS                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  SUBFUNCTION        │ Option A        │ Option B        │ Option C              │
│  ═══════════════════╪═════════════════╪═════════════════╪═════════════════════  │
│  F1.1 Image Capture │ CCD ────────────│ CMOS ───────────│ Thermal              │
│                     │   │             │   │      │      │     │                 │
│  F1.2 Detection     │ Template ───────│ HOG+SVM ────────│ YOLO-nano            │
│                     │   │             │   │      │      │     │                 │
│  F1.3 Classify      │ Rule-based ─────│ Random Forest ──│ CNN                  │
│                     │   │             │   │      │      │     │                 │
│  F2.2 Tracking      │ Centroid ───────│ Kalman ─────────│ Deep SORT            │
│                     │   │             │   │      │      │     │                 │
│  F3.3 Ballistics    │ Table ──────────│ Point-mass ─────│ 6DOF                 │
│                     │   │             │   │      │      │     │                 │
│  F5.1 Trigger Gate  │ Mech block ─────│ Solenoid ───────│ E-trigger            │
│                     │   │             │   │             │     │                 │
│                     │   ▼             │   ▼             │     ▼                 │
│                     │                 │                 │                       │
│  CONCEPT PATHS:     │                 │                 │                       │
│                     │                 │                 │                       │
│  V1 (CLONE)        ═══A═══════════════A═══════════════A═════════════════       │
│  • All Option A    │ CCD→Template→Rule→Centroid→Table→Mech                     │
│  • Foreign replica │ Minimum tech risk, maximum foreign dependency             │
│                                                                                  │
│  V2 (LOCAL-FIRST)  ═══B═══════════════B═══════════════B═════════════════       │
│  • All Option B    │ CMOS→HOG+SVM→RF→Kalman→PM→Solenoid                        │
│  • Maximum local   │ Proven tech, local capability match                        │
│                                                                                  │
│  V3 (HYBRID)       ═══B═══════════════C═══════════════B═════════════════       │
│  • Mix B + C       │ CMOS→YOLO→CNN→Kalman→PM→Solenoid                          │
│  • Balanced        │ AI capability with local production                        │
│                                                                                  │
│  V4 (PHASED)       ═══B═══════════════B→C═════════════B═════════════════       │
│  • Start B, evolve │ CMOS→(HOG→YOLO)→(RF→CNN)→Kalman→PM→Solenoid              │
│  • SELECTED ✓      │ Risk-managed evolution, learning integration              │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘

Legend: ═══ Connection path    → Evolution path    ✓ Selected concept
```

## 3.2 Working Principle Details

### WP-VSMASH-001: CMOS Image Capture

```yaml
id: "WP-VSMASH-001"
subfunction: "F1.1 - Capture scene image"
physical_effect: "Photoelectric effect in silicon"
form_design: "Rolling shutter CMOS sensor with ISP"

specification:
  resolution: "1920x1080 (Full HD)"
  frame_rate: "60 fps"
  dynamic_range: "65 dB"
  low_light: "0.1 lux with gain"
  interface: "MIPI CSI-2"

local_sourcing:
  option_1:
    part: "Sony IMX290"
    supplier: "Available via distributors"
    cost: "~$25 USD"
  option_2:
    part: "OmniVision OV2718"
    supplier: "China distributors"
    cost: "~$15 USD"

integration_notes:
  - "Standard industrial camera module form factor"
  - "Requires lens selection for FOV"
  - "ISP handles exposure, white balance"
```

### WP-VSMASH-002: YOLO-Nano Object Detection

```yaml
id: "WP-VSMASH-002"
subfunction: "F1.2 - Detect targets"
physical_effect: "CNN pattern matching"
form_design: "YOLOv8-nano optimized for edge deployment"

specification:
  model: "YOLOv8n (custom trained)"
  inference_time: "<30ms on target hardware"
  mAP: ">0.7 on custom dataset"
  classes: ["drone", "person", "vehicle", "aircraft"]
  input_size: "640x640"

training_requirements:
  dataset_size: "5000+ labeled images"
  compute: "GPU cluster (can rent cloud)"
  training_time: "~24 hours"
  validation: "Vietnam-specific test set"

local_capability:
  training: "Partner with university (HUST, VNU)"
  inference: "NVIDIA Jetson Nano/Xavier NX"
  expertise: "Growing AI community in Vietnam"

edge_optimization:
  quantization: "INT8 via TensorRT"
  pruning: "Remove unused classes"
  compilation: "ONNX → TensorRT engine"
```

### WP-VSMASH-003: Kalman Filter Tracking

```yaml
id: "WP-VSMASH-003"
subfunction: "F2.2 - Update track state"
physical_effect: "Recursive state estimation"
form_design: "Extended Kalman Filter (EKF)"

specification:
  state_vector: "[x, y, vx, vy, ax, ay]" # 6D state
  measurement: "[x, y]" # Detection centroid
  update_rate: "60 Hz (match sensor)"
  prediction_horizon: "100ms"

parameters:
  process_noise_Q:
    position: "1.0 px²"
    velocity: "5.0 px²/frame²"
    acceleration: "10.0 px²/frame⁴"
  measurement_noise_R:
    position: "4.0 px²" # Detection jitter

implementation:
  language: "C++ with Eigen library"
  complexity: "O(n³) per update (n=6)"
  memory: "<1 KB per track"

local_capability:
  algorithm: "Well-documented, textbook implementations"
  expertise: "Standard control theory"
  library: "OpenCV cv::KalmanFilter available"
```

### WP-VSMASH-004: Point-Mass Ballistic Model

```yaml
id: "WP-VSMASH-004"
subfunction: "F3.3 - Calculate trajectory"
physical_effect: "Newtonian mechanics + atmospheric drag"
form_design: "3DOF point-mass with drag coefficient"

equations:
  drag_force: "F_d = 0.5 * ρ * v² * C_d * A"
  gravity: "F_g = m * g"
  motion: "m * a = F_d + F_g + crosswind"

parameters:
  air_density: "Function of altitude, temperature"
  drag_model: "G1 or G7 ballistic coefficient"
  muzzle_velocity: "Per weapon profile"

weapon_profiles_supported:
  - caliber: "5.56x45mm NATO"
    bc_g7: "0.151"
    muzzle_velocity: "940 m/s"
  - caliber: "7.62x39mm"
    bc_g7: "0.115"
    muzzle_velocity: "715 m/s"
  - caliber: "7.62x54mmR"
    bc_g7: "0.180"
    muzzle_velocity: "830 m/s"
  - caliber: "12.7x108mm"
    bc_g7: "0.620"
    muzzle_velocity: "850 m/s"

implementation:
  method: "4th order Runge-Kutta integration"
  step_size: "1ms"
  range: "Up to 1000m"
  computation_time: "<1ms"

local_capability:
  algorithm: "Standard physics, well-documented"
  validation: "Requires range testing data"
  expertise: "Weapons institute capability"
```

### WP-VSMASH-005: Solenoid Trigger Gate

```yaml
id: "WP-VSMASH-005"
subfunction: "F5.1/F5.2 - Hold/Release trigger"
physical_effect: "Electromagnetic actuation"
form_design: "Push-type solenoid with return spring"

specification:
  response_time: "<5ms"
  holding_force: "20N minimum"
  stroke: "5-10mm"
  voltage: "12V DC"
  current: "500mA peak, 200mA hold"

mechanism_options:
  option_A:
    name: "Trigger blocking"
    description: "Solenoid blocks trigger linkage"
    pros: "Simple, retrofit to any weapon"
    cons: "Mechanical complexity"
  option_B:
    name: "Electronic trigger interrupt"
    description: "Electronic gate in trigger circuit"
    pros: "Clean integration for e-triggers"
    cons: "Requires electronic trigger (MTB-20 compatible)"

mtb20_integration:
  trigger_type: "Electronic (24V solenoid)"
  interface: "Parallel gate circuit"
  implementation: "FET switch in trigger line"
  advantage: "No mechanical modification needed"

local_sourcing:
  solenoid: "Available from China/domestic"
  driver: "MOSFET H-bridge, standard"
  cost: "~$5 USD per unit"
```

---

# PART 4: CONCEPT VARIANTS

## 4.1 V-SMASH Product Family Architecture

```
                    ┌─────────────────────────────────────┐
                    │         V-SMASH CORE MODULE          │
                    │  ┌─────────────────────────────────┐ │
                    │  │  • AI Processing (Jetson)       │ │
                    │  │  • Tracking Algorithms          │ │
                    │  │  • Ballistic Computer           │ │
                    │  │  • Fire Control Logic           │ │
                    │  │  • Power Management             │ │
                    │  └─────────────────────────────────┘ │
                    └──────────────┬──────────────────────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
           ▼                       ▼                       ▼
┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
│  V-SMASH-LITE    │   │   V-SMASH-PRO    │   │   V-SMASH-RWS    │
│  Rifle-mounted   │   │  Extended Range  │   │  RCWS Integration│
├──────────────────┤   ├──────────────────┤   ├──────────────────┤
│ • CMOS sensor    │   │ • CMOS + Thermal │   │ • Dual sensor    │
│ • 1x optic       │   │ • 4x optic + LRF │   │ • MTB-20 interface│
│ • Basic battery  │   │ • Extended batt  │   │ • Vehicle power  │
│ • Trigger gate   │   │ • Trigger gate   │   │ • Electronic trig │
│ Weight: <1.2kg   │   │ Weight: <1.8kg   │   │ Weight: <3kg     │
│ Range: 250m      │   │ Range: 500m      │   │ Range: 600m      │
└──────────────────┘   └──────────────────┘   └──────────────────┘
```

## 4.2 V-SMASH-LITE Specification

```yaml
variant: "V-SMASH-LITE"
designation: "V-SMASH-L"
purpose: "Infantry counter-drone and precision engagement"

physical:
  weight: "<1.2 kg (with battery)"
  dimensions: "150 x 80 x 100 mm"
  mounting: "Picatinny rail (MIL-STD-1913)"
  material: "Aluminum 6061-T6, anodized"
  protection: "IP65"

optical:
  magnification: "1x (reflex style)"
  field_of_view: "15°"
  eye_relief: "Unlimited (see-through)"
  reticle: "Etched + electronic overlay"

sensor:
  type: "CMOS color"
  resolution: "1920x1080"
  frame_rate: "60 fps"
  night: "Optional NV clip-on compatible"

processing:
  platform: "NVIDIA Jetson Nano"
  ai_model: "YOLOv8-nano"
  tracking: "Kalman filter"
  latency: "<50ms end-to-end"

power:
  battery: "18650 Li-ion, 3400mAh x2"
  voltage: "7.4V nominal"
  consumption: "5W average"
  runtime: ">8 hours"
  charging: "USB-C, 2 hours"

performance:
  detection_range:
    drone_small: "300m"
    drone_medium: "500m"
    person: "400m"
  tracking_speed: "50 m/s max"
  hit_improvement: "3x vs iron sights"

compatibility:
  weapons:
    - "AK-47/AKM (7.62x39mm)"
    - "AK-74 (5.45x39mm)"
    - "M16A2/M4 (5.56x45mm)"
    - "Galil (5.56x45mm)"
  trigger_interface: "Universal mechanical gate"

cost_target:
  unit_cost: "<$3,000 USD"
  local_content: ">70%"
```

---

# PART 5: VDI 2225 EVALUATION

## 5.1 Evaluation Context

| Attribute | Value |
|-----------|-------|
| **Target Project** | V-SMASH Development Program |
| **Reference System** | SmartShooter SMASH (Israel) |
| **Evaluation Date** | 2026-01-18 |
| **Evaluator** | Design Team |
| **Strategy** | [X] C: Technology Insertion with Local Adaptation |

## 5.2 Concepts Being Evaluated

| Concept | Description | Origin | Key Approach |
|---------|-------------|--------|--------------|
| **V1: Direct Clone** | Full replication of SMASH design | Foreign replica | Maximum capability, minimum local |
| **V2: Local-First** | Maximize local content, reduce scope | Novel local | Maximum local, reduced capability |
| **V3: Hybrid Optimal** | Balance capability and local content | Adaptation | Optimal balance |
| **V4: Phased Build** | Start minimal, upgrade over time | Evolutionary | Risk mitigation |

## 5.3 Criteria Weight Derivation (Stakeholder Traceability)

### Stakeholder Input Analysis

| Stakeholder | Role | Key Priorities Expressed | Source |
|-------------|------|-------------------------|--------|
| **Military End User** | Infantry/Vehicle crews | "Must work reliably in combat conditions, improve effectiveness" | User interview (2026-01-10) |
| **Procurement Office** | MoD acquisition | "Budget constrained, need value for money" | RFI response |
| **MoD Policy Directorate** | Strategic planning | "Reduce foreign dependency, build local industry" | Policy document 2025 |
| **Program Office** | Project management | "Need capability within operational timeline" | Program charter |
| **Maintenance Command** | Lifecycle support | "Field maintainable, minimize depot returns" | Support concept |

### Pairwise Comparison Matrix (AHP Method)

Scale: 2 = much more important, 1 = slightly more important, 0 = less important, 0.5 = equal

| | C1:Perf | C2:Rel | C3:Dev$ | C4:Prod$ | C5:Time | C6:Supply | C7:Local | C8:Maint | C9:Interop |
|--|---------|--------|---------|----------|---------|-----------|----------|----------|------------|
| **C1:Performance** | - | 1 | 1 | 1 | 1 | 0.5 | 0.5 | 2 | 2 |
| **C2:Reliability** | 1 | - | 0.5 | 1 | 1 | 0.5 | 0.5 | 2 | 2 |
| **C3:Dev Cost** | 1 | 1.5 | - | 1 | 1 | 0.5 | 0.5 | 2 | 2 |
| **C4:Prod Cost** | 1 | 1 | 1 | - | 1 | 0.5 | 0.5 | 2 | 2 |
| **C5:Dev Time** | 1 | 1 | 1 | 1 | - | 0.5 | 0.5 | 2 | 2 |
| **C6:Supply Chain** | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | - | 1 | 2 | 2 |
| **C7:Local Match** | 1.5 | 1.5 | 1.5 | 1.5 | 1.5 | 1 | - | 2 | 2 |
| **C8:Maintainability** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | - | 1 |
| **C9:Interoperability** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | - |
| **Sum** | 7 | 7.5 | 6.5 | 7 | 7 | 3.5 | 3.5 | 13 | 15 |

### Derived Weights (Normalized)

| ID | Criterion | Raw Score | Normalized Weight | Rounded Weight | Justification |
|----|-----------|-----------|-------------------|----------------|---------------|
| C1 | Technical Performance | 9.0 | 13.6% | **15%** | End-user priority: mission effectiveness |
| C2 | Reliability | 8.5 | 12.9% | **10%** | Combat critical, combined with performance |
| C3 | Development Cost | 9.5 | 14.4% | **15%** | Procurement constraint |
| C4 | Production Cost | 9.0 | 13.6% | **10%** | Volume production target |
| C5 | Development Time | 9.0 | 13.6% | **10%** | Operational urgency |
| C6 | Supply Chain Risk | 12.5 | 18.9% | **15%** | MoD policy priority (elevated) |
| C7 | Local Capability Match | 12.5 | 18.9% | **15%** | MoD policy priority (elevated) |
| C8 | Maintainability | 3.0 | 4.5% | **5%** | Important but secondary |
| C9 | Interoperability | 1.0 | 1.5% | **5%** | MTB-20 integration covered elsewhere |
| | **TOTAL** | 66 | 100% | **100%** | |

**Note**: C6 and C7 elevated per MoD strategic directive on defense industry self-reliance (weighted 30% combined vs. 22% from raw calculation).

## 5.4 Evaluation Matrix

### Scoring Scale Definition

| Score | Definition | Example |
|-------|------------|---------|
| 0 | Completely inadequate | Fails mandatory requirements |
| 1 | Very poor | Major deficiencies, high risk |
| 2 | Poor | Significant gaps, substantial risk |
| 3 | Adequate | Meets minimum with concerns |
| 4 | Good | Solid performance, acceptable |

### Raw Scores (0-4 scale)

| Criterion | V1: Clone | V2: Local-First | V3: Hybrid | V4: Phased | Scoring Rationale |
|-----------|-----------|-----------------|------------|------------|-------------------|
| C1: Performance | 4 | 2 | 3 | 3 | V1 proven capability; V2 reduced scope; V3/V4 targeted performance |
| C2: Reliability | 3 | 2 | 3 | 3 | V1 unproven in local production; V2 simpler is more reliable |
| C3: Dev Cost | 1 | 3 | 3 | 4 | V1 high NRE; V4 spreads cost over phases |
| C4: Prod Cost | 1 | 4 | 3 | 3 | V1 import-dependent; V2 maximum local = lowest cost |
| C5: Dev Time | 1 | 3 | 2 | 4 | V1 complex integration; V4 early deliverable |
| C6: Supply Chain | 1 | 4 | 3 | 3 | V1 foreign dependent; V2 local-first |
| C7: Local Match | 1 | 4 | 3 | 4 | V1 exceeds local capability; V4 builds capability progressively |
| C8: Maintain | 2 | 4 | 3 | 3 | V1 foreign parts; V2 simplest design |
| C9: Interop | 3 | 2 | 3 | 3 | V1 has proven interfaces; V2 may lack standards compliance |

### Weighted Scores

| Criterion | Weight | V1 | V2 | V3 | V4 |
|-----------|--------|----|----|----|----|
| C1 | 0.15 | 0.60 | 0.30 | 0.45 | 0.45 |
| C2 | 0.10 | 0.30 | 0.20 | 0.30 | 0.30 |
| C3 | 0.15 | 0.15 | 0.45 | 0.45 | 0.60 |
| C4 | 0.10 | 0.10 | 0.40 | 0.30 | 0.30 |
| C5 | 0.10 | 0.10 | 0.30 | 0.20 | 0.40 |
| C6 | 0.15 | 0.15 | 0.60 | 0.45 | 0.45 |
| C7 | 0.15 | 0.15 | 0.60 | 0.45 | 0.60 |
| C8 | 0.05 | 0.10 | 0.20 | 0.15 | 0.15 |
| C9 | 0.05 | 0.15 | 0.10 | 0.15 | 0.15 |
| **TOTAL** | **1.00** | **1.80** | **3.15** | **2.90** | **3.40** |

### Technical Value Calculation

| Concept | Weighted Score | Technical Value (÷4×100) | Ranking |
|---------|---------------|--------------------------|---------|
| V1: Clone | 1.80 | 45% | 4th |
| V2: Local-First | 3.15 | 79% | 2nd |
| V3: Hybrid | 2.90 | 73% | 3rd |
| **V4: Phased** | **3.40** | **85%** | **1st ✓** |

## 5.5 Sensitivity Analysis

### Test 1: Performance Weight +10%

If C1 (Performance) increases from 15% to 25% (C7 decreases to 5%):

| Concept | New Score | Change | New Rank |
|---------|-----------|--------|----------|
| V1 | 2.20 | +0.40 | 4th |
| V2 | 2.75 | -0.40 | 3rd |
| V3 | 2.90 | ±0.00 | 2nd |
| V4 | 3.10 | -0.30 | **1st** |

**Result**: V4 still wins. Robust to performance priority increase.

### Test 2: Local Content Weight +10%

If C7 (Local Match) increases from 15% to 25% (C1 decreases to 5%):

| Concept | New Score | Change | New Rank |
|---------|-----------|--------|----------|
| V1 | 1.50 | -0.30 | 4th |
| V2 | 3.55 | +0.40 | **1st** |
| V3 | 2.90 | ±0.00 | 3rd |
| V4 | 3.50 | +0.10 | 2nd |

**Result**: V2 wins if local content becomes dominant priority. V4 close second.

### Test 3: All V4 Scores -1 Point

| Concept | New Score | Rank |
|---------|-----------|------|
| V1 | 1.80 | 4th |
| V2 | 3.15 | **1st** |
| V3 | 2.90 | 2nd |
| V4 | 2.40 | 3rd |

**Result**: V4 falls to 3rd if execution significantly worse than estimated.

### Sensitivity Conclusion

- **V4 is robust winner** under baseline and performance-priority scenarios
- **V2 could win** if local content becomes overwhelming priority OR V4 execution disappoints
- **Recommendation**: Proceed with V4, but maintain V2 as fallback if Phase 1 underperforms

## 5.6 Recommendation

### Selected Approach: V4 - Phased Development

**Technical Value: 85%** - Exceeds 80% threshold for "Good"

### Rationale

1. **Risk Mitigation**: Start with achievable scope, prove capabilities before committing to AI complexity
2. **Capability Growth**: Each phase adds performance while building team expertise
3. **Learning Integration**: Lessons from Phase 1 directly inform Phase 2 design decisions
4. **Budget Alignment**: Spread investment over time, demonstrate value before major spending
5. **Local Expertise Building**: Progressive capability development matches Vietnamese industry growth

### Stakeholder Approval Record

| Stakeholder | Approval | Date | Notes |
|-------------|----------|------|-------|
| Technical Lead | ☐ Pending | | |
| Program Manager | ☐ Pending | | |
| MoD Representative | ☐ Pending | | |

---

# PART 6: IMPLEMENTATION ARCHITECTURE

## 6.1 System Block Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        V-SMASH SYSTEM ARCHITECTURE                      │
├────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────┐    ┌─────────────────────────────────────────────┐   │
│  │   SENSORS   │    │              PROCESSING UNIT                 │   │
│  │             │    │  ┌─────────────────────────────────────────┐│   │
│  │ ┌─────────┐ │    │  │        NVIDIA JETSON MODULE             ││   │
│  │ │  CMOS   │─┼────┼──│  ┌───────────┐  ┌────────────────────┐ ││   │
│  │ │ Sensor  │ │    │  │  │   GPU     │  │    CPU            │ ││   │
│  │ └─────────┘ │    │  │  │  YOLO     │  │  Kalman Filter    │ ││   │
│  │             │    │  │  │  Detection│  │  Ballistics       │ ││   │
│  │ ┌─────────┐ │    │  │  │  Tracking │  │  Fire Control     │ ││   │
│  │ │ Thermal │─┼────┼──│  └───────────┘  └────────────────────┘ ││   │
│  │ │ (opt)   │ │    │  │                                        ││   │
│  │ └─────────┘ │    │  │  ┌────────────────────────────────────┐││   │
│  │             │    │  │  │           MEMORY                   │││   │
│  │ ┌─────────┐ │    │  │  │  • Weapon Profiles                │││   │
│  │ │  IMU    │─┼────┼──│  │  • AI Model Weights               │││   │
│  │ │ 6-axis  │ │    │  │  │  • Configuration                  │││   │
│  │ └─────────┘ │    │  │  └────────────────────────────────────┘││   │
│  │             │    │  └─────────────────────────────────────────┘│   │
│  │ ┌─────────┐ │    │                                             │   │
│  │ │  LRF    │─┼────┤  ┌─────────────────────────────────────────┐│   │
│  │ │ (opt)   │ │    │  │         PERIPHERAL I/O                  ││   │
│  │ └─────────┘ │    │  │                                         ││   │
│  └─────────────┘    │  │  ┌────────┐ ┌────────┐ ┌────────────┐  ││   │
│                     │  │  │Trigger │ │Display │ │  Storage   │  ││   │
│  ┌─────────────┐    │  │  │Sensor  │ │Driver  │ │  SD Card   │  ││   │
│  │   POWER     │    │  │  └────┬───┘ └────┬───┘ └────────────┘  ││   │
│  │             │    │  │       │          │                      ││   │
│  │ ┌─────────┐ │    │  └───────┼──────────┼──────────────────────┘│   │
│  │ │ Battery │ │    │          │          │                       │   │
│  │ │ 18650x2 │ │    └──────────┼──────────┼───────────────────────┘   │
│  │ └────┬────┘ │               │          │                           │
│  │      │      │               │          ▼                           │
│  │ ┌────▼────┐ │    ┌──────────▼───┐  ┌───────────────┐              │
│  │ │  PMIC   │─┼────│  TRIGGER     │  │   DISPLAY     │              │
│  │ │         │ │    │  ACTUATOR    │  │               │              │
│  │ └─────────┘ │    │              │  │  ┌─────────┐  │              │
│  └─────────────┘    │  ┌────────┐  │  │  │See-thru │  │              │
│                     │  │Solenoid│  │  │  │Reticle  │  │              │
│                     │  └────────┘  │  │  └─────────┘  │              │
│                     └──────────────┘  │               │              │
│                            │          │  ┌─────────┐  │              │
│                            ▼          │  │ Status  │  │              │
│                     ┌──────────────┐  │  │ LEDs    │  │              │
│                     │   WEAPON     │  │  └─────────┘  │              │
│                     │  INTERFACE   │  └───────────────┘              │
│                     │              │                                  │
│                     │  Picatinny   │                                  │
│                     │  Rail Mount  │                                  │
│                     └──────────────┘                                  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 6.2 Bill of Materials (V-SMASH-LITE)

| Item | Description | Qty | Unit Cost | Local? | Supplier |
|------|-------------|-----|-----------|--------|----------|
| **Processing** | | | | | |
| NVIDIA Jetson Nano | 4GB Developer Kit | 1 | $150 | Import | NVIDIA/Distrib |
| Carrier Board | Custom carrier PCB | 1 | $50 | **Yes** | Local PCB fab |
| **Sensors** | | | | | |
| Camera Module | Sony IMX290, 1080p60 | 1 | $30 | Import | China |
| IMU | BMI160 6-axis | 1 | $5 | Import | Bosch/Distrib |
| Trigger Sensor | FSR402 force sensor | 1 | $3 | Import | Interlink |
| **Optics** | | | | | |
| Lens Assembly | M12, 15° FOV | 1 | $20 | Import | China |
| See-through Optic | Custom housing | 1 | $80 | **Yes** | Local optical |
| Reticle Glass | Etched mil-dot | 1 | $15 | **Yes** | Local optical |
| **Actuation** | | | | | |
| Solenoid | 12V push-pull | 1 | $5 | Import | China |
| Driver Board | MOSFET H-bridge | 1 | $10 | **Yes** | Local assembly |
| **Power** | | | | | |
| Battery Cells | Samsung 18650, 3400mAh | 2 | $8 | Import | Samsung |
| PMIC Board | 5V/3.3V regulation | 1 | $15 | **Yes** | Local assembly |
| USB-C Charging | Charging IC + port | 1 | $5 | Import | TI/China |
| **Housing** | | | | | |
| Enclosure | Aluminum 6061, CNC | 1 | $100 | **Yes** | Local CNC |
| Picatinny Mount | Steel, machined | 1 | $20 | **Yes** | Local machine |
| Gaskets/Seals | Silicone IP65 | Set | $10 | **Yes** | Local |
| **Display** | | | | | |
| Status LEDs | RGB, 3mm | 3 | $1 | Import | Generic |
| Buttons | Tactile switches | 2 | $2 | Import | Generic |
| **Misc** | | | | | |
| Cables/Connectors | Internal wiring | Set | $15 | **Yes** | Local |
| SD Card | 32GB industrial | 1 | $15 | Import | SanDisk |
| Fasteners | Screws, nuts | Set | $5 | **Yes** | Local |
| **SUBTOTAL** | | | **$564** | | |
| Assembly Labor | 4 hours @ $15/hr | 1 | $60 | **Yes** | Local |
| Testing/QC | 2 hours @ $20/hr | 1 | $40 | **Yes** | Local |
| Software License | One-time dev cost amortized | 1 | $100 | **Yes** | Internal |
| **TOTAL UNIT COST** | | | **$764** | | |
| **Margin (3x)** | | | **$2,292** | | |
| **Target Price** | | | **<$3,000** | ✓ | |

**Local Content**: $355 / $564 = **63%** (Exceeds 60% requirement)

---

# PART 7: DEVELOPMENT ROADMAP

## 7.1 Phase 1: Foundation (Months 1-12)

```
Q1 (Months 1-3): RESEARCH & SETUP
├── Week 1-2: Procure Jetson Nano development kits (5 units)
├── Week 3-4: Set up development environment
├── Week 5-8: Camera integration and basic capture
├── Week 9-12: Classical CV detection prototype (HOG+SVM)
│
├── Deliverables:
│   ✓ Development environment operational
│   ✓ Camera driver working on Jetson
│   ✓ Basic object detection demo
│
└── Resources:
    • 2 software engineers
    • 1 hardware engineer
    • Lab equipment

Q2 (Months 4-6): CORE ALGORITHMS
├── Week 13-16: Kalman filter implementation
├── Week 17-20: Ballistic computer development
├── Week 21-24: Integration of detection + tracking + ballistics
│
├── Deliverables:
│   ✓ Tracking working on laptop demo
│   ✓ Ballistic tables for 5.56mm, 7.62mm
│   ✓ Fire solution calculation demo
│
└── Validation:
    • Lab testing with simulated targets

Q3 (Months 7-9): HARDWARE PROTOTYPE
├── Week 25-28: Mechanical design (CAD)
├── Week 29-32: Carrier board design
├── Week 33-36: First prototype assembly
│
├── Deliverables:
│   ✓ Mechanical prototype (3D printed + CNC)
│   ✓ Electronics integrated
│   ✓ System boots and runs
│
└── Milestones:
    • PDR (Preliminary Design Review)

Q4 (Months 10-12): INTEGRATION & TEST
├── Week 37-40: Mount on weapon, test at range
├── Week 41-44: Data collection (drone imagery)
├── Week 45-48: Documentation and review
│
├── Deliverables:
│   ✓ Prototype tested on AK-47
│   ✓ 1000+ drone images collected
│   ✓ Phase 1 report complete
│
└── Milestones:
    • CDR (Critical Design Review)
    • Go/No-Go for Phase 2
```

## 7.2 Phase 2: AI Integration (Months 13-24)

```
Q5 (Months 13-15): AI MODEL DEVELOPMENT
├── Dataset expansion to 5000+ images
├── YOLO model training (cloud GPU)
├── TensorRT optimization for Jetson
├── Accuracy validation
│
├── Deliverables:
│   ✓ Custom YOLO model (mAP > 0.7)
│   ✓ Inference < 30ms on Jetson

Q6 (Months 16-18): TRIGGER MECHANISM
├── Solenoid trigger design
├── Timing logic development
├── Safety analysis
├── Integration with fire control
│
├── Deliverables:
│   ✓ Trigger gating working
│   ✓ Safety certification passed

Q7 (Months 19-21): SYSTEM INTEGRATION
├── All subsystems integrated
├── Extended field testing
├── Operator trials
├── Reliability testing
│
├── Deliverables:
│   ✓ 5 complete units built
│   ✓ 1000 rounds tested

Q8 (Months 22-24): PRODUCTION PREP
├── Design for manufacturing
├── Supplier qualification
├── Production procedures
├── Operator training materials
│
├── Deliverables:
│   ✓ Production-ready design
│   ✓ 10 pilot production units
    ✓ Training program complete
```

---

# PART 8: RISK ANALYSIS

## 8.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| AI model accuracy insufficient | Medium | High | Classical CV fallback, more training data |
| Real-time performance not met | Low | High | Optimize model, upgrade to Xavier NX |
| Trigger timing too slow | Low | Medium | Faster solenoid, electronic trigger focus |
| Environmental qualification fail | Medium | Medium | Iterative testing, ruggedized design |
| Sensor fusion complexity | Medium | Medium | Phase thermal to later variant |

## 8.2 Schedule Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Component lead times | Medium | Medium | Order early, stock critical parts |
| University partnership delays | Medium | Low | Parallel in-house ML development |
| Testing range availability | Low | Low | Build indoor test capability |

## 8.3 Cost Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Import cost increase | Medium | Medium | Increase local content |
| Development overrun | Medium | High | Fixed-price phase contracts |
| Production yield issues | Low | Medium | DFM focus, supplier qualification |

---

# PART 9: CONCLUSION

## 9.1 Key Decisions

1. **Adopt SMASH design philosophy** - Human-in-loop, modular, fail-safe
2. **Phased development approach** - V4 selected via VDI 2225 (85% score)
3. **Start with V-SMASH-LITE** - Prove core technology, build expertise
4. **Maximize local content** - 63% achievable for LITE variant
5. **Partner for AI** - University collaboration for ML capability

## 9.2 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Detection accuracy | >95% | Field test vs ground truth |
| Hit improvement | >3x | Compared to iron sights baseline |
| Unit cost | <$3,000 | BOM + labor + margin |
| Local content | >60% | Value percentage |
| MTBF | >2,000 hrs | Accelerated life test |
| Development time | 24 months | Phase 1+2 completion |

## 9.3 Next Immediate Actions

| Priority | Action | Owner | Deadline |
|----------|--------|-------|----------|
| 1 | Approve V-SMASH project initiation | Leadership | Week 1 |
| 2 | Procure Jetson development kits | Procurement | Week 2 |
| 3 | Establish university ML partnership | R&D Director | Week 4 |
| 4 | Begin drone imagery collection | Test Range | Week 4 |
| 5 | Recruit 2 additional software engineers | HR | Week 6 |
| 6 | CAD design kickoff | Mechanical Eng | Week 8 |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-18 | Design Team | Initial release |
| 1.1 | 2026-01-18 | Design Team | Added: Problem Abstraction (§1.4), Complete Requirements with Verification Methods (§1.3), VDI 2225 Weight Derivation with AHP (§5.3), Morphological Concept Paths (§3.1), Sensitivity Analysis (§5.5) |

---

*V-SMASH Conceptual Design Document v1.1*
*Prepared using Pahl & Beitz Systematic Design Methodology*
*Reviewed per D-M-I-R Framework*
