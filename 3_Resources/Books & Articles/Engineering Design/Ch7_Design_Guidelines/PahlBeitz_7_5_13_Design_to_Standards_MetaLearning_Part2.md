# Pahl & Beitz Section 7.5.13: Design to Standards
## Comprehensive Meta-Learning Analysis - Part 2 of 3

**Document Code**: EDMF-7.5.13-DTS-P2
**Version**: 1.0
**Date**: 2026-01-20
**Reference**: Engineering Design: A Systematic Approach (3rd Ed.), Section 7.5.13
**EDMF Skills Applied**: engineering-design-review-mentor, engineering-concept-evaluation-assistant, engineering-interleaving-scheduler

---

# PART 4: DEFENSE SYSTEM APPLICATIONS

## 4.1 Standardization Strategy Matrix for Vietnamese Defense Systems

| Defense System | Critical International Standards | Applicable National (TCVN) | Company Standard Needs | Priority |
|:---|:---|:---|:---|:---|
| **V-SMASH Fire Control** | MIL-STD-810H, MIL-STD-461G, MIL-STD-1913 | TCVN environmental, EMC | AI accuracy testing, weapon interface | HIGH |
| **12.7mm RCWS (MTB-20)** | NATO STANAG 4569, MIL-STD-1472, MIL-STD-882E | TCVN vehicle integration | Control interface, ammunition feed | HIGH |
| **Machine Gun Mount** | MIL-STD-1913, NATO caliber standards | TCVN steel specs | Mounting interface dimensions | MEDIUM |
| **Target USV** | COLREGS, IEC 60945 (maritime) | TCVN shipbuilding | Target signature enhancement | MEDIUM |
| **Towed Target (Sea)** | NATO towing standards, radar reflection | TCVN marine materials | Tow coupling interface | MEDIUM |
| **Training Grenade** | MIL-DTL pyrotechnic, NATO fuse timing | TCVN explosive safety | Simulator output specs | HIGH |
| **UAV Catapult** | No dominant standard (emerging) | TCVN pressure vessel | Launch interface, energy storage | LOW |
| **Radar-IR Target Simulation** | NATO RCS/IR reference targets | None applicable | Signature enhancement specs | MEDIUM |
| **Tethered Drone** | FAA/EASA drone standards, IEC power | TCVN electrical | Tether interface, power delivery | LOW |
| **Target UAV** | NATO target drone specs | TCVN airworthiness | Recovery system, flight envelope | MEDIUM |
| **LOMAH System** | No military standard (training niche) | None | Detection accuracy, interface | HIGH |
| **Small Arms Simulator** | MIL-STD-1472 (human factors) | TCVN simulation | Weapon replication accuracy | MEDIUM |

---

## 4.2 Detailed Application: V-SMASH AI Fire Control System

### 4.2.1 Applicable Standards Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    V-SMASH STANDARDS FRAMEWORK                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INTERNATIONAL / MIL-STD (Mandatory Compliance)                 │
│  ├─ MIL-STD-810H: Environmental testing                        │
│  │   → Temperature, humidity, shock, vibration                  │
│  ├─ MIL-STD-461G: EMI/EMC requirements                         │
│  │   → Radiated/conducted emissions, susceptibility            │
│  ├─ MIL-STD-1913: Picatinny rail interface                     │
│  │   → Mounting dimensions for weapon attachment               │
│  ├─ MIL-STD-882E: System safety                                │
│  │   → Hazard analysis, fire control safety                    │
│  └─ MIL-STD-1472: Human engineering                            │
│      → Interface design, controls, displays                     │
│                                                                  │
│  REFERENCE STANDARDS (Guidance)                                 │
│  ├─ IEEE 830: Software requirements specification              │
│  ├─ ISO 26262: Functional safety (adapted from automotive)     │
│  └─ IEC 61508: Functional safety of E/E/PE systems            │
│                                                                  │
│  COMPANY STANDARDS (V-SMASH Specific - To Be Developed)        │
│  ├─ V-SMASH-STD-001: AI target recognition accuracy test      │
│  ├─ V-SMASH-STD-002: Trigger gating precision test            │
│  ├─ V-SMASH-STD-003: Weapon interface specification           │
│  ├─ V-SMASH-STD-004: Software update procedure                │
│  └─ V-SMASH-STD-005: Production acceptance test               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2.2 Standards Application by V-SMASH Component

| Component | Applicable Standards | Key Requirements | Verification |
|:---|:---|:---|:---|
| **Housing/Enclosure** | MIL-STD-810H, IP65 | -10°C to +55°C, shock, rain | Environmental chamber |
| **Optical Window** | MIL-PRF-13830 | Scratch resistance, clarity | Inspection |
| **Electronics** | MIL-STD-461G, IPC-A-610 | EMI limits, workmanship | Anechoic chamber, visual |
| **Software** | IEEE 830, ISO 26262 | Requirements traceability, safety | Analysis, code review |
| **Mounting Interface** | MIL-STD-1913 | Slot dimensions, clamping force | CMM measurement |
| **Power System** | MIL-STD-704 (adapted) | Voltage tolerance, ripple | Power testing |
| **User Interface** | MIL-STD-1472 | Control placement, indication | Usability testing |
| **Fire Control Logic** | Company standard | <5ms trigger precision | High-speed camera |

### 4.2.3 Gap Analysis: Standards Gaps for V-SMASH

| Domain | Gap Description | Consequence | Recommended Action |
|:---|:---|:---|:---|
| **AI Accuracy** | No MIL-STD for AI target recognition | Cannot prove performance to standards | Develop company standard, propose to TCVN |
| **AI Robustness** | No standard for adversarial testing | Unknown vulnerability | Adopt IEEE/NIST AI test frameworks |
| **Human-AI Interface** | MIL-STD-1472 doesn't cover AI systems | No guidance on trust calibration | Extend with AI-specific HMI requirements |
| **Ethical Compliance** | No standard for HITL enforcement | Cannot certify ethical operation | Create company standard with legal review |
| **Cybersecurity** | MIL-STD-882E doesn't address AI cyber | Software vulnerability gaps | Apply NIST Cybersecurity Framework |

---

## 4.3 Detailed Application: 12.7mm RCWS (MTB-20)

### 4.3.1 Applicable Standards Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    MTB-20 RCWS STANDARDS FRAMEWORK              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  NATO STANDARDS (Interoperability)                              │
│  ├─ STANAG 4569: Vehicle protection levels                     │
│  ├─ STANAG 4172: 12.7×99mm ammunition                          │
│  ├─ STANAG 2324: Fire control terminology                      │
│  └─ STANAG 4586: UAV control interface (for integration)       │
│                                                                  │
│  MIL-STANDARDS (Performance/Test)                               │
│  ├─ MIL-STD-1472: Human factors for operator station           │
│  ├─ MIL-STD-882E: System safety (weapon system)                │
│  ├─ MIL-STD-810H: Environmental (vehicle-mounted)              │
│  ├─ MIL-STD-461G: EMI (vehicle electrical system)              │
│  └─ MIL-HDBK-217F: Reliability prediction                      │
│                                                                  │
│  INDUSTRY STANDARDS                                             │
│  ├─ SAE J1939: CAN bus vehicle network                         │
│  ├─ ISO 13849: Machine safety control systems                  │
│  └─ IEC 61131-3: PLC programming                               │
│                                                                  │
│  COMPANY STANDARDS (MTB-20 Specific)                           │
│  ├─ MTB-20-STD-001: Vehicle integration interface              │
│  ├─ MTB-20-STD-002: Weapon mounting torque specs               │
│  ├─ MTB-20-STD-003: Control station ergonomics                 │
│  ├─ MTB-20-STD-004: Maintenance procedures                     │
│  └─ MTB-20-STD-005: Production acceptance criteria             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.3.2 Standardization Implications for RCWS Design

| Design Decision | Standard Constraint | Design Freedom |
|:---|:---|:---|
| **Weapon Caliber** | STANAG 4172 (12.7×99mm NATO) | None—ammunition interoperability required |
| **Vehicle Interface** | SAE J1939 CAN bus | Protocol fixed, message content flexible |
| **Operator Station** | MIL-STD-1472 dimensions, reach | Layout within envelope is designer's choice |
| **Traverse Speed** | No direct standard | Full freedom—optimize for threat response |
| **Stabilization** | No direct standard | Full freedom—company spec defines requirement |
| **Armor Level** | STANAG 4569 Level X | Level chosen by customer, implementation free |

---

## 4.4 Detailed Application: Target UAV

### 4.4.1 Applicable Standards Framework

```
┌─────────────────────────────────────────────────────────────────┐
│                    TARGET UAV STANDARDS FRAMEWORK               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  AVIATION STANDARDS                                             │
│  ├─ DO-178C: Software for airborne systems                     │
│  ├─ DO-254: Hardware for airborne systems                      │
│  └─ AS9100D: Aerospace quality management                      │
│                                                                  │
│  NATO TARGET STANDARDS                                          │
│  ├─ STANAG 4670: Target drone requirements                     │
│  └─ STANAG 4671: UAV airworthiness (reference)                 │
│                                                                  │
│  DIMENSIONAL/INTERFACE                                          │
│  ├─ NATO standard target sizes (radar reference)               │
│  ├─ Catapult interface (no universal standard)                 │
│  └─ Recovery parachute (MIL-C-9397 adapted)                    │
│                                                                  │
│  SIGNATURE ENHANCEMENT                                          │
│  ├─ Luneberg lens specifications (company standard)            │
│  ├─ IR augmentation (no standard—company spec)                 │
│  └─ Acoustic signature (no standard)                           │
│                                                                  │
│  COMPANY STANDARDS (Target UAV Specific)                        │
│  ├─ TUAV-STD-001: Flight envelope specification                │
│  ├─ TUAV-STD-002: Signature enhancement test                   │
│  ├─ TUAV-STD-003: Catapult compatibility                       │
│  ├─ TUAV-STD-004: Recovery system test                         │
│  └─ TUAV-STD-005: Expendability/cost criteria                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4.2 Standardization Strategy: Expendable vs. Reusable

| Aspect | Expendable Target | Reusable Target | Standard Implication |
|:---|:---|:---|:---|
| **Airframe Quality** | Minimum acceptable | AS9100D full compliance | Different QC standards |
| **Recovery System** | Optional/none | Mandatory, reliable | Parachute testing standard |
| **Signature Accuracy** | Good enough for training | Consistent, repeatable | Company calibration standard |
| **Documentation** | Minimal | Full maintenance manual | Different documentation standards |
| **Cost Control** | Primary driver | Secondary to reliability | Company cost standards |

---

## 4.5 Detailed Application: LOMAH System

### 4.5.1 Standards Challenge: Niche Training Product

The LOMAH (Location of Miss and Hit) system presents a unique standardization challenge:

**Problem**: No established military standard specifically addresses marksmanship training scoring systems.

**Available Related Standards**:
- MIL-STD-1472: Human factors (display requirements)
- IEEE 1588: Precision time protocol (for timing accuracy)
- IEC 61000: EMC (general electronic equipment)

### 4.5.2 Company Standard Development Need

```
┌─────────────────────────────────────────────────────────────────┐
│              LOMAH COMPANY STANDARDS DEVELOPMENT                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  LOMAH-STD-001: Detection Accuracy Specification                │
│  ├─ Detection probability: ≥99% for valid shots                │
│  ├─ False positive rate: <0.1%                                 │
│  ├─ Position accuracy: ±5mm at target plane                    │
│  └─ Test method: Reference shot pattern, statistical analysis  │
│                                                                  │
│  LOMAH-STD-002: Response Time Specification                     │
│  ├─ Detection to display: <50ms                                │
│  ├─ Scoring calculation: <10ms                                 │
│  └─ Test method: High-speed camera correlation                 │
│                                                                  │
│  LOMAH-STD-003: Range Interface Specification                   │
│  ├─ Physical dimensions for target frame integration           │
│  ├─ Electrical interface (power, data)                         │
│  ├─ Environmental compatibility (outdoor ranges)               │
│  └─ Protocol for central control communication                 │
│                                                                  │
│  LOMAH-STD-004: Calibration Procedure                          │
│  ├─ Initial factory calibration                                │
│  ├─ Field verification procedure                               │
│  └─ Calibration interval (annual or per usage hours)           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4.6 Detailed Application: Training Grenade

### 4.6.1 Applicable Standards Framework

```
┌─────────────────────────────────────────────────────────────────┐
│                TRAINING GRENADE STANDARDS FRAMEWORK             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  EXPLOSIVE/PYROTECHNIC STANDARDS                                │
│  ├─ MIL-DTL-23659: Practice hand grenades                      │
│  ├─ MIL-STD-1316: Fuse design safety                           │
│  ├─ MIL-STD-2105: Hazard classification                        │
│  └─ UN recommendations on transport (Class 1)                   │
│                                                                  │
│  PHYSICAL STANDARDS                                             │
│  ├─ Dimensional compatibility with operational grenade          │
│  ├─ Mass simulation (weight within tolerance)                  │
│  └─ Surface finish for handling (grip texture)                 │
│                                                                  │
│  SAFETY STANDARDS                                               │
│  ├─ MIL-STD-882E: System safety program                        │
│  ├─ IM (Insensitive Munitions) compliance                      │
│  └─ TCVN explosive safety regulations                          │
│                                                                  │
│  COMPANY STANDARDS                                              │
│  ├─ TG-STD-001: Fuse timing specification (3.5-5.5s)          │
│  ├─ TG-STD-002: Indicator output specification                 │
│  ├─ TG-STD-003: Reset mechanism specification                  │
│  └─ TG-STD-004: Storage and shelf life                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.6.2 Critical Standardization: Fuse Timing

The training grenade fuse timing standard illustrates the balance between standardization and operational flexibility:

| Requirement | Standard Value | Rationale |
|:---|:---|:---|
| **Nominal Delay** | 4.0 seconds | Match operational grenade |
| **Tolerance** | ±0.5 seconds | Manufacturing capability |
| **Min Delay** | 3.5 seconds | Safety—allow throw clearance |
| **Max Delay** | 5.5 seconds | Realism—within operational envelope |
| **Temperature Sensitivity** | <±10% over -30°C to +55°C | MIL-STD-810H compatibility |

**Vietnamese Context**: TCVN explosive safety regulations must be harmonized with MIL-STD equivalents for export potential.

---

## 4.7 Detailed Application: UAV Catapult

### 4.7.1 Standardization Challenge: Emerging Technology

**Current State**: No dominant international standard for UAV catapult systems.

**Reference Standards**:
- Aircraft carrier catapults (mil spec—too heavy)
- Sailplane winch launching (sports aviation—different performance)
- Pneumatic standards (ISO 4414, ISO 1219)

### 4.7.2 Company Standard Development

```
┌─────────────────────────────────────────────────────────────────┐
│             UAV CATAPULT COMPANY STANDARDS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  INTERFACE STANDARDS                                            │
│  ├─ UAV-CAT-STD-001: Launch cradle interface dimensions        │
│  │   → Defines UAV attachment points                           │
│  │   → Standardize across UAV types for commonality            │
│  │                                                              │
│  ├─ UAV-CAT-STD-002: Launch parameter specification            │
│  │   → Exit velocity range                                     │
│  │   → Maximum g-load at release                               │
│  │   → Launch angle range                                      │
│  │                                                              │
│  SAFETY STANDARDS                                               │
│  ├─ UAV-CAT-STD-003: Operational safety zones                  │
│  │   → Exclusion area during launch                            │
│  │   → Emergency stop requirements                             │
│  │                                                              │
│  ├─ UAV-CAT-STD-004: Pressure system safety (if pneumatic)     │
│  │   → Based on ISO 4414 (pneumatic safety)                    │
│  │   → Pressure vessel certification (TCVN)                    │
│  │                                                              │
│  PERFORMANCE STANDARDS                                          │
│  └─ UAV-CAT-STD-005: Reliability and maintenance               │
│      → MTBF requirement                                        │
│      → Maintenance interval                                    │
│      → Component replacement criteria                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4.8 Summary: Standards Priority Matrix

| System | Standards Maturity | Company Std Need | Interoperability Concern | Action Priority |
|:---|:---|:---|:---|:---|
| **V-SMASH** | Partial (no AI std) | HIGH | Medium (weapon interface) | 1 - URGENT |
| **RCWS** | High (NATO STANAGs) | Medium | High (ammunition, vehicle) | 2 - HIGH |
| **Training Grenade** | High (MIL-DTL) | Low | Medium (fuse timing) | 4 - MEDIUM |
| **Target UAV** | Medium (STANAG 4670) | Medium | Low (signature) | 3 - MEDIUM |
| **LOMAH** | Low (no specific std) | HIGH | Low (standalone) | 1 - URGENT |
| **UAV Catapult** | Low (emerging) | HIGH | Medium (UAV interface) | 2 - HIGH |
| **Machine Gun Mount** | High (Picatinny) | Low | High (weapon interface) | 5 - LOW |
| **Target USV** | Medium (maritime) | Medium | Low (naval training) | 3 - MEDIUM |
| **Towed Target** | Low (niche) | Medium | Low | 4 - MEDIUM |
| **Tethered Drone** | Medium (drone regs) | Medium | Low | 4 - MEDIUM |
| **Radar-IR Simulation** | Low (niche) | HIGH | Medium (NATO signature) | 2 - HIGH |
| **Small Arms Simulator** | Medium (human factors) | Medium | Medium (weapon match) | 3 - MEDIUM |

---

# PART 5: DESIGN REVIEW CRITERIA (engineering-design-review-mentor)

## 5.1 Standards Compliance Review Checklist

### 5.1.1 Phase 1: Task Clarification Standards Review

| Review Item | Questions | Evidence Required | Pass/Fail Criteria |
|:---|:---|:---|:---|
| **Standards Identification** | Which standards apply to this product? | Standards matrix | All applicable standards listed |
| **Standards Access** | Do we have access to required standards? | Subscription/purchase records | 100% availability |
| **Competency** | Do team members understand required standards? | Training records | Key personnel certified |
| **Gap Analysis** | Where do standards not exist? | Gap report | Gaps identified with mitigation |
| **TCVN Alignment** | What Vietnamese national standards apply? | TCVN checklist | All mandatory TCVN identified |
| **Export Considerations** | What destination-country standards apply? | Export market analysis | Target market standards listed |

### 5.1.2 Phase 2: Conceptual Design Standards Review

| Review Item | Questions | Evidence Required | Pass/Fail Criteria |
|:---|:---|:---|:---|
| **Standard Solutions** | Are standard components/subsystems used where applicable? | BOM with standard designations | Justify any non-standard choices |
| **Interface Standards** | Do all interfaces comply with applicable standards? | Interface specification | All interfaces to standards |
| **Safety Standards** | Is safety analysis per MIL-STD-882E or equivalent? | Preliminary Hazard Analysis | All CAT I/II hazards addressed |
| **Type Standards** | Do product types follow classification standards? | Type designation | Correct type classification |
| **Communication Standards** | Are terminology and symbols per standards? | Drawing/document review | Standard terminology used |

### 5.1.3 Phase 3: Embodiment Design Standards Review

| Review Item | Questions | Evidence Required | Pass/Fail Criteria |
|:---|:---|:---|:---|
| **Dimensional Standards** | Do all dimensions follow standard series? | Drawing check | Preferred numbers used |
| **Material Standards** | Are all materials specified per standards? | Material specifications | Standard material designations |
| **Production Standards** | Can design be produced per standard processes? | Production feasibility | Standard processes sufficient |
| **Test Standards** | Are test methods specified per standards? | Test plan | All tests to standards |
| **Quality Standards** | Do quality requirements follow standards? | QA plan | AS9100D/ISO 9001 compliance |

### 5.1.4 Phase 4: Detail Design Standards Review

| Review Item | Questions | Evidence Required | Pass/Fail Criteria |
|:---|:---|:---|:---|
| **Drawing Standards** | Do drawings follow standard format? | Drawing audit | 100% format compliance |
| **Documentation Standards** | Is technical data package per standards? | TDP review | Complete per MIL-STD-31000 |
| **Delivery Standards** | Are marking/labeling per standards? | Label specifications | MIL-STD-129 or equivalent |
| **Service Standards** | Are maintenance procedures per standards? | Maintenance manual | Standard format, complete |
| **Configuration Standards** | Is configuration management per standards? | CM plan | Complete traceability |

---

## 5.2 Standards Evaluation Criteria (per Figure 7.147)

### 5.2.1 Evaluation Matrix Template

Use this matrix when evaluating whether a proposed standard (internal or external) is appropriate:

| Criterion | Weight (1-5) | Score (1-10) | Weighted Score | Notes |
|:---|:---|:---|:---|:---|
| **Function**: Ambiguity eliminated? | | | | |
| **Working Principle**: Market position improved? | | | | |
| **Layout**: Material/energy reduced? | | | | |
| **Safety**: Safety increased? | | | | |
| **Ergonomics**: Instructions/conditions improved? | | | | |
| **Production**: Manufacturing facilitated? | | | | |
| **Quality Control**: Inspection simplified? | | | | |
| **Assembly**: Assembly facilitated? | | | | |
| **Transport**: Transport/packing simplified? | | | | |
| **Operation**: Operation clarified? | | | | |
| **Maintenance**: Parts replacement improved? | | | | |
| **Recycling**: End-of-life facilitated? | | | | |
| **Costs**: Overall costs reduced? | | | | |
| **TOTAL** | | | | |

### 5.2.2 Scoring Guidelines

| Score | Description |
|:---|:---|
| 10 | Standard provides exceptional benefit in this area |
| 8-9 | Standard provides significant benefit |
| 6-7 | Standard provides moderate benefit |
| 4-5 | Standard has marginal impact |
| 2-3 | Standard has negative impact in this area |
| 1 | Standard severely conflicts with this criterion |

### 5.2.3 Threshold for Standard Adoption

| Decision | Weighted Score Range | Action |
|:---|:---|:---|
| **Adopt Fully** | >80% of maximum | Implement immediately |
| **Adopt with Adaptation** | 60-80% | Customize to context |
| **Review Further** | 40-60% | Need more analysis |
| **Reject** | <40% | Do not adopt |

---

## 5.3 Common Standards Compliance Errors

### 5.3.1 Error Patterns and Corrections

| Error Pattern | Description | Example | Correction |
|:---|:---|:---|:---|
| **E1: Standard Ignorance** | Not knowing applicable standards exist | Designing connector without MIL-DTL-38999 reference | Build standards database, require checklist |
| **E2: Outdated Reference** | Using obsolete version of standard | Citing MIL-STD-810F instead of 810H | Verify current version before design |
| **E3: Over-Specification** | Requiring standards beyond necessity | Demanding AS9100D for training equipment | Match standard rigor to application |
| **E4: Under-Specification** | Missing critical safety standards | Omitting MIL-STD-882E for weapon system | Safety standards mandatory review |
| **E5: Conflicting Standards** | Citing standards that contradict | ISO and MIL-STD with different tolerances | Identify conflicts, resolve in requirements |
| **E6: Unverifiable Compliance** | Stating compliance without test method | "Compliant with MIL-STD-810H" but no test plan | Every standard citation needs verification method |
| **E7: Company-Standard Gap** | No internal standard for unique needs | AI accuracy without test procedure | Develop company standard for gaps |
| **E8: Export Ignorance** | Not considering destination standards | Vietnam product for India market without BIS | Include export market standards analysis |

---

## 5.4 Defense System Design Review: Standards Focus Areas

### 5.4.1 V-SMASH Standards Review Focus

| Focus Area | Critical Questions | Red Flags |
|:---|:---|:---|
| **Weapon Interface** | MIL-STD-1913 compliance verified by measurement? | No Picatinny rail CMM data |
| **Environmental** | MIL-STD-810H test tailoring justified? | Using default test conditions |
| **EMC** | MIL-STD-461G test plan complete? | Missing test tailoring rationale |
| **Safety** | Fire block mechanism per MIL-STD-882E? | No formal hazard analysis |
| **AI Testing** | Company standard for accuracy test? | No defined pass/fail criteria |

### 5.4.2 RCWS Standards Review Focus

| Focus Area | Critical Questions | Red Flags |
|:---|:---|:---|
| **Ammunition** | STANAG 4172 compatibility demonstrated? | No feed system test with NATO ammo |
| **Protection** | STANAG 4569 level specified and tested? | Protection level claimed but not tested |
| **Vehicle Interface** | SAE J1939 CAN implementation verified? | Custom protocol without J1939 base |
| **Human Factors** | MIL-STD-1472 anthropometry met? | Operator station dimensions not checked |
| **System Safety** | MIL-STD-882E hazard analysis complete? | Missing inadvertent discharge analysis |

### 5.4.3 Target UAV Standards Review Focus

| Focus Area | Critical Questions | Red Flags |
|:---|:---|:---|
| **Airworthiness** | STANAG 4670 compliance claimed? | No formal compliance matrix |
| **Signature** | RCS/IR specifications traceable? | "Realistic signature" without numbers |
| **Recovery** | Parachute testing per standard? | No drop test data |
| **Software** | DO-178C level determined? | No software criticality analysis |
| **Catapult Interface** | Interface standard defined? | Every catapult has unique interface |

---

# PART 6: CONCEPT EVALUATION (engineering-concept-evaluation-assistant)

## 6.1 VDI 2225 Evaluation: Standardization Impact

When evaluating design concepts, standardization impact should be a weighted criterion:

### 6.1.1 Standardization Evaluation Criteria

| Criterion | Weight Justification | Typical Weight |
|:---|:---|:---|
| **Standard Components Used** | Reduces development time, proven reliability | 5-10% |
| **Interface Standard Compliance** | Enables integration, multiple suppliers | 5-10% |
| **Test Standard Availability** | Reduces verification development | 3-5% |
| **Production Standard Alignment** | Manufacturing capability match | 3-5% |
| **Maintenance Standard Compliance** | Lifecycle support ease | 3-5% |

### 6.1.2 Evaluation Scale for Standardization

| Score | Description | Example |
|:---|:---|:---|
| **4 (Ideal)** | Full use of international standards, all interfaces standard | COTS components throughout |
| **3 (Good)** | Mostly standard components, minor custom interfaces | 80% standard parts |
| **2 (Adequate)** | Mix of standard and custom, key interfaces standard | 50% standard parts |
| **1 (Just Tolerable)** | Mostly custom, some standard interfaces | Custom design with standard connectors |
| **0 (Inadequate)** | All custom, no standards compliance | Completely proprietary design |

---

## 6.2 Standardization Trade-Off Analysis

### 6.2.1 Trade-Off: Standard Components vs. Optimal Performance

| Factor | Standard Component | Custom Component |
|:---|:---|:---|
| **Development Time** | Shorter (use existing) | Longer (design from scratch) |
| **Development Cost** | Lower | Higher |
| **Performance Optimization** | Constrained to standard | Fully optimized |
| **Supply Chain** | Multiple sources | Single source risk |
| **Maintenance** | Established procedures | Custom procedures needed |
| **Lifecycle Cost** | Usually lower | Usually higher |

**Decision Guideline**: Use standard components unless performance gap is >20% AND performance is critical to mission.

### 6.2.2 Trade-Off: Strict Standards vs. Innovation

| Factor | Strict Compliance | Innovation with Deviation |
|:---|:---|:---|
| **Technical Risk** | Lower (proven solutions) | Higher (unproven) |
| **Market Acceptance** | Higher (known standards) | May require education |
| **Export Potential** | Higher (international standards) | Limited |
| **Competitive Advantage** | Limited (same as others) | Potential differentiation |
| **Regulatory Approval** | Easier (precedent exists) | Harder (no precedent) |

**Decision Guideline**: Deviate from standards only when innovation provides >30% capability improvement AND path to eventual standardization exists.

---

*End of Part 2*

**Continue to Part 3**: Targeted Drills, Self-Assessment Rubrics, Mnemonics, and Spaced Repetition Schedule

---

**Document Information**
- **Framework**: EDMF 13-Skill Integration
- **Pahl & Beitz Reference**: Section 7.5.13, Pages 410-416
- **Defense Systems Covered**: 12 Vietnamese defense training systems
- **Next Steps**: Complete drills to verify understanding, then apply to active projects
