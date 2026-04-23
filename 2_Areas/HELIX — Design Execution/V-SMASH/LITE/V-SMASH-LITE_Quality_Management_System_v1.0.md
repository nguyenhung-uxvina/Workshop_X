# V-SMASH-LITE QUALITY MANAGEMENT SYSTEM
## Procedures, Forms, and Control Plans

**Document**: VS-QMS-001 | **Version**: 1.0 | **Date**: 2026-01-19
**Project**: V-SMASH-LITE AI-Powered Smart Sight
**Scope**: Production Quality System for Defense Product Manufacturing

---

# EXECUTIVE SUMMARY

This Quality Management System (QMS) document establishes the quality framework for V-SMASH-LITE production. It defines procedures, forms, and control plans to ensure consistent product quality meeting defense-grade requirements.

**Quality Objectives**:
- First Pass Yield (FPY): ≥95%
- Customer Escapes: 0 critical defects
- On-Time Delivery: ≥95%
- Continuous Improvement: 10% annual defect reduction

**Standards Compliance**:
- ISO 9001:2015 Quality Management Systems
- AS9100D Aerospace Quality Management
- MIL-STD-882E System Safety
- IPC-A-610 Acceptability of Electronic Assemblies

---

# TABLE OF CONTENTS

1. [Quality Policy & Organization](#1-quality-policy)
2. [Document Control System](#2-document-control)
3. [Supplier Quality Management](#3-supplier-quality)
4. [Incoming Quality Control (IQC)](#4-incoming-quality)
5. [In-Process Quality Control (IPQC)](#5-in-process-quality)
6. [Final Quality Control (FQC)](#6-final-quality)
7. [Non-Conformance Management](#7-non-conformance)
8. [Corrective & Preventive Action (CAPA)](#8-capa)
9. [Calibration & Measurement](#9-calibration)
10. [Training & Competency](#10-training)
11. [Quality Records & Traceability](#11-records)
12. [Control Plans](#12-control-plans)
13. [Quality Forms Library](#13-forms)

---

# 1. QUALITY POLICY & ORGANIZATION

## 1.1 Quality Policy Statement

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                         QUALITY POLICY STATEMENT                                  ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  V-SMASH-LITE is committed to delivering defense-grade electro-optical           ║
║  products that meet or exceed customer requirements and applicable               ║
║  military standards.                                                              ║
║                                                                                   ║
║  We achieve this through:                                                         ║
║                                                                                   ║
║  1. SYSTEMATIC DESIGN - Applying Pahl & Beitz methodology to ensure             ║
║     products are designed for quality from the start                             ║
║                                                                                   ║
║  2. PROCESS CONTROL - Implementing robust manufacturing processes               ║
║     with statistical control and continuous monitoring                           ║
║                                                                                   ║
║  3. CONTINUOUS IMPROVEMENT - Using D-M-I-R cycles to identify and               ║
║     eliminate root causes of quality issues                                      ║
║                                                                                   ║
║  4. EMPLOYEE ENGAGEMENT - Training and empowering every team member             ║
║     to be responsible for quality                                                ║
║                                                                                   ║
║  5. SUPPLIER PARTNERSHIP - Working with qualified suppliers who share           ║
║     our commitment to quality                                                    ║
║                                                                                   ║
║                                                                                   ║
║  Approved: ____________________  Date: ____________________                      ║
║            Quality Manager                                                        ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 1.2 Quality Organization

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         QUALITY ORGANIZATION CHART                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                           ┌─────────────────┐                                      │
│                           │  PROGRAM        │                                      │
│                           │  MANAGER        │                                      │
│                           └────────┬────────┘                                      │
│                                    │                                                │
│              ┌─────────────────────┼─────────────────────┐                         │
│              │                     │                     │                         │
│              ▼                     ▼                     ▼                         │
│     ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐              │
│     │  ENGINEERING    │   │    QUALITY      │   │  PRODUCTION     │              │
│     │  MANAGER        │   │    MANAGER      │   │  MANAGER        │              │
│     └─────────────────┘   └────────┬────────┘   └─────────────────┘              │
│                                    │                                                │
│                    ┌───────────────┼───────────────┐                              │
│                    │               │               │                              │
│                    ▼               ▼               ▼                              │
│           ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                     │
│           │  SUPPLIER    │ │  IN-PROCESS  │ │   FINAL      │                     │
│           │  QUALITY     │ │  QUALITY     │ │   QUALITY    │                     │
│           │  (SQE)       │ │  (IPQC)      │ │   (FQC)      │                     │
│           └──────────────┘ └──────────────┘ └──────────────┘                     │
│                                                                                     │
│  RESPONSIBILITIES:                                                                 │
│  ═══════════════════                                                               │
│  Quality Manager:    Overall QMS, audits, management review, CAPA                 │
│  SQE:               Supplier qualification, incoming inspection, SCARs            │
│  IPQC:              In-process inspection, SPC, process audits                    │
│  FQC:               Final inspection, ATP, ship release                           │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.3 Quality Responsibilities Matrix

| Activity | Eng | QM | SQE | IPQC | FQC | Prod |
|----------|-----|-----|-----|------|-----|------|
| Design Review | R | A | C | I | I | I |
| Supplier Qualification | C | A | R | I | I | I |
| Incoming Inspection | I | A | R | C | I | I |
| Process Control | C | A | I | R | I | R |
| In-Process Inspection | I | A | I | R | I | C |
| Final Inspection (ATP) | I | A | I | C | R | I |
| NCR Disposition | R | A | C | C | C | I |
| CAPA | R | A | C | C | C | I |
| Calibration | I | A | I | R | R | I |
| Training | C | A | I | I | I | R |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

# 2. DOCUMENT CONTROL SYSTEM

## 2.1 Document Hierarchy

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         DOCUMENT HIERARCHY                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  LEVEL 1: QUALITY MANUAL                                                           │
│  ════════════════════════                                                           │
│  └── VS-QMS-001 Quality Management System (this document)                          │
│                                                                                     │
│  LEVEL 2: PROCEDURES                                                               │
│  ════════════════════════                                                           │
│  ├── VS-QP-001 Document Control                                                    │
│  ├── VS-QP-002 Supplier Quality Management                                         │
│  ├── VS-QP-003 Incoming Inspection                                                 │
│  ├── VS-QP-004 In-Process Inspection                                               │
│  ├── VS-QP-005 Final Inspection (ATP)                                              │
│  ├── VS-QP-006 Non-Conformance Management                                          │
│  ├── VS-QP-007 Corrective/Preventive Action                                        │
│  ├── VS-QP-008 Calibration Control                                                 │
│  ├── VS-QP-009 Training & Competency                                               │
│  └── VS-QP-010 Quality Records Management                                          │
│                                                                                     │
│  LEVEL 3: WORK INSTRUCTIONS                                                        │
│  ════════════════════════                                                           │
│  ├── VS-WI-001 Optical Sub-Assembly                                                │
│  ├── VS-WI-002 Electronics Integration                                             │
│  ├── VS-WI-003 Main Assembly                                                       │
│  ├── VS-WI-004 Calibration Procedure                                               │
│  └── VS-WI-005 ATP Execution                                                       │
│                                                                                     │
│  LEVEL 4: FORMS & RECORDS                                                          │
│  ════════════════════════                                                           │
│  ├── VS-FM-001 through VS-FM-020 (see Section 13)                                  │
│  └── Completed forms become quality records                                        │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Document Control Procedure

| Step | Action | Responsibility | Record |
|------|--------|----------------|--------|
| 1 | Draft document | Author | Draft copy |
| 2 | Review document | Reviewers | Review comments |
| 3 | Approve document | Quality Manager | Signature |
| 4 | Assign number/revision | Document Control | Master list |
| 5 | Distribute controlled copies | Document Control | Distribution list |
| 6 | Train affected personnel | Supervisor | Training record |
| 7 | Remove obsolete copies | Document Control | Destruction log |

## 2.3 Document Numbering Convention

```
VS - XX - NNN - Rev X
│    │    │      │
│    │    │      └── Revision letter (A, B, C...)
│    │    └───────── Sequential number (001, 002...)
│    └────────────── Document type:
│                    QMS = Quality Manual
│                    QP  = Quality Procedure
│                    WI  = Work Instruction
│                    FM  = Form
│                    CP  = Control Plan
│                    DR  = Drawing
└─────────────────── Project prefix (V-SMASH)
```

---

# 3. SUPPLIER QUALITY MANAGEMENT

## 3.1 Supplier Classification

| Class | Definition | Qualification | Audit Frequency |
|-------|------------|---------------|-----------------|
| **A** | Critical (affects safety/function) | Full audit, approval | Annual |
| **B** | Major (affects performance) | Documentation review | 2 years |
| **C** | Standard (commercial parts) | Self-certification | As needed |

## 3.2 Supplier Qualification Checklist

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-001: SUPPLIER QUALIFICATION CHECKLIST                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  Supplier Name: ________________________  Date: ____________                     ║
║  Product/Service: ______________________  Class: A / B / C                       ║
║  Evaluator: ____________________________                                          ║
║                                                                                   ║
║  SECTION 1: QUALITY SYSTEM                                        Score: ___/25  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ ISO 9001 or equivalent certification                              (5 pts)     ║
║  □ Documented quality manual                                         (5 pts)     ║
║  □ Inspection and test procedures                                    (5 pts)     ║
║  □ Calibration program                                               (5 pts)     ║
║  □ Non-conformance control                                           (5 pts)     ║
║                                                                                   ║
║  SECTION 2: TECHNICAL CAPABILITY                                  Score: ___/25  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Equipment suitable for required tolerances                        (5 pts)     ║
║  □ Trained personnel                                                 (5 pts)     ║
║  □ Process control (SPC where applicable)                            (5 pts)     ║
║  □ Design capability (if applicable)                                 (5 pts)     ║
║  □ Test capability                                                   (5 pts)     ║
║                                                                                   ║
║  SECTION 3: DELIVERY PERFORMANCE                                  Score: ___/25  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Adequate capacity for our volume                                  (5 pts)     ║
║  □ Lead time meets requirements                                      (5 pts)     ║
║  □ On-time delivery history >95%                                     (5 pts)     ║
║  □ Flexibility for urgent orders                                     (5 pts)     ║
║  □ Communication responsiveness                                      (5 pts)     ║
║                                                                                   ║
║  SECTION 4: COMMERCIAL                                            Score: ___/25  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Competitive pricing                                               (5 pts)     ║
║  □ Financial stability                                               (5 pts)     ║
║  □ Terms acceptable                                                  (5 pts)     ║
║  □ Warranty/support                                                  (5 pts)     ║
║  □ Willingness to improve                                            (5 pts)     ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  TOTAL SCORE: _____/100                                                          ║
║                                                                                   ║
║  QUALIFICATION CRITERIA:                                                         ║
║  • Class A supplier: ≥80 points required                                         ║
║  • Class B supplier: ≥70 points required                                         ║
║  • Class C supplier: ≥60 points required                                         ║
║                                                                                   ║
║  DECISION:  □ APPROVED    □ CONDITIONAL (action required)    □ REJECTED         ║
║                                                                                   ║
║  Conditions (if applicable): ________________________________________________   ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  Approved by: ____________________  Date: ____________                           ║
║               Quality Manager                                                     ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 3.3 Approved Supplier List (ASL)

| Supplier | Product | Class | Score | Status | Next Audit |
|----------|---------|-------|-------|--------|------------|
| [CNC Supplier] | Machined parts | A | 85 | Approved | 2027-01 |
| JLCPCB | PCB assembly | A | 82 | Approved | 2027-01 |
| Edmund Optics | Optical components | B | 78 | Approved | 2028-01 |
| Arrow Electronics | Jetson Nano | B | 80 | Approved | 2028-01 |
| McMaster-Carr | Fasteners | C | - | Approved | As needed |

---

# 4. INCOMING QUALITY CONTROL (IQC)

## 4.1 Incoming Inspection Procedure

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    INCOMING INSPECTION PROCESS FLOW                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────┐                                                                   │
│  │  RECEIVING  │                                                                   │
│  │  (Material  │                                                                   │
│  │   arrives)  │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │   VERIFY    │     │  CHECK:                                                  │  │
│  │   PAPERWORK │────▶│  • PO number matches                                     │  │
│  │             │     │  • Packing slip quantity                                 │  │
│  └──────┬──────┘     │  • Part numbers correct                                  │  │
│         │            │  • Certificates of Conformance (CoC)                     │  │
│         ▼            └─────────────────────────────────────────────────────────┘  │
│  ┌─────────────┐                                                                   │
│  │  DETERMINE  │                                                                   │
│  │  INSPECTION │                                                                   │
│  │    LEVEL    │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│    ┌────┴────┬─────────────────┐                                                   │
│    ▼         ▼                 ▼                                                   │
│  LEVEL 1   LEVEL 2           LEVEL 3                                               │
│  Skip Lot  Sampling          100% Inspection                                       │
│  (CoC OK)  (AQL 1.0)         (Critical/New)                                       │
│    │         │                 │                                                   │
│    └────┬────┴─────────────────┘                                                   │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │   INSPECT   │                                                                   │
│  │   PER SPEC  │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│    ┌────┴────┐                                                                     │
│    ▼         ▼                                                                     │
│  PASS      FAIL                                                                    │
│    │         │                                                                     │
│    ▼         ▼                                                                     │
│  RELEASE   NCR + MRB                                                               │
│  TO STOCK  DISPOSITION                                                             │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Incoming Inspection Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-002: INCOMING INSPECTION REPORT                           ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  RECEIPT INFORMATION                                                              ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Date Received: ____________    PO Number: ____________                          ║
║  Supplier: __________________   Packing Slip #: ____________                     ║
║  Part Number: _______________   Part Description: ____________________________   ║
║  Qty Received: _____            Lot/Batch #: ____________                        ║
║                                                                                   ║
║  DOCUMENTATION CHECK                                                              ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Packing slip matches PO      □ CoC received     □ Material cert received     ║
║  □ MSDS received (if required)  □ Test data received (if required)              ║
║                                                                                   ║
║  INSPECTION LEVEL:  □ Level 1 (Skip)  □ Level 2 (Sample)  □ Level 3 (100%)      ║
║  Sample Size: _____ of _____                                                     ║
║                                                                                   ║
║  INSPECTION RESULTS                                                               ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ # │ Characteristic      │ Specification    │ Actual      │ P/F │ Tool      │ ║
║  ├───┼─────────────────────┼──────────────────┼─────────────┼─────┼───────────┤ ║
║  │ 1 │ Visual appearance   │ No defects       │             │     │ Visual    │ ║
║  │ 2 │ Dimension 1         │                  │             │     │           │ ║
║  │ 3 │ Dimension 2         │                  │             │     │           │ ║
║  │ 4 │ Dimension 3         │                  │             │     │           │ ║
║  │ 5 │ Surface finish      │                  │             │     │           │ ║
║  │ 6 │ Functional check    │                  │             │     │           │ ║
║  └───┴─────────────────────┴──────────────────┴─────────────┴─────┴───────────┘ ║
║                                                                                   ║
║  DISPOSITION                                                                      ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ ACCEPT - Release to stock                                                     ║
║  □ ACCEPT WITH DEVIATION - Deviation #: ____________                             ║
║  □ REJECT - NCR #: ____________                                                  ║
║  □ RETURN TO SUPPLIER - RMA #: ____________                                      ║
║                                                                                   ║
║  Qty Accepted: _____    Qty Rejected: _____    Stock Location: __________       ║
║                                                                                   ║
║  Inspector: ____________________  Date: ____________                             ║
║  QC Approval: __________________  Date: ____________                             ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.3 Incoming Inspection Specifications

| Part Category | Inspection Level | Key Characteristics | Sampling |
|---------------|------------------|---------------------|----------|
| **CNC Housing** | Level 3 (100%) | Dimensions, finish | 100% |
| **Carrier PCB** | Level 3 (100%) | Visual, power test | 100% |
| **Jetson Nano** | Level 2 | Visual, boot test | 100% functional |
| **Camera Module** | Level 2 | Visual, image test | 100% functional |
| **Optical Components** | Level 3 (100%) | Visual, cleanliness | 100% |
| **Fasteners** | Level 1 | CoC acceptance | Skip lot |
| **Cables** | Level 2 | Visual, continuity | AQL 1.0 |

---

# 5. IN-PROCESS QUALITY CONTROL (IPQC)

## 5.1 Quality Control Points by Station

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    IN-PROCESS QUALITY CONTROL POINTS                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  STATION        QC POINT           METHOD              FREQUENCY    RECORD         │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  WS-02          Kit verification   Visual + count      100%         Kit traveler   │
│  Kitting        Part number check  Barcode scan        100%         System log     │
│                                                                                     │
│  WS-03          Cleanliness        Visual (10×)        100%         Traveler       │
│  Optical        Alignment angle    Fixture + gauge     100%         Traveler       │
│                 UV cure            Timer               100%         Traveler       │
│                 Focus infinity     Collimator test     100%         Traveler       │
│                                                                                     │
│  WS-04          ESD compliance     Wrist strap test    Start shift  Log            │
│  Electronics    Power rails        DMM measurement     100%         Traveler       │
│                 Boot test          Functional          100%         Traveler       │
│                 Camera test        Image verification  100%         Traveler       │
│                                                                                     │
│  WS-05A         Thread insert      Torque + visual     100%         Traveler       │
│  Mechanical     O-ring seat        Visual              100%         Traveler       │
│                                                                                     │
│  WS-05B         Cable routing      Visual              100%         Traveler       │
│  Elect Int      Connections        Tug test            100%         Traveler       │
│                                                                                     │
│  WS-05D         Torque all         Torque wrench       100%         Traveler       │
│  Final Close    Visual inspection  Workmanship std     100%         Traveler       │
│                 Gap/flush          Gauge               100%         Traveler       │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Build Traveler Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-003: PRODUCTION BUILD TRAVELER                            ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  UNIT IDENTIFICATION                                                              ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Serial Number: VS-______-______    Build Date: ____________                     ║
║  Work Order: WO-____________        Customer Order: ____________                  ║
║  Kit Number: KIT-____________       Firmware Version: ____________               ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  STATION WS-02: KITTING                                                          ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Mechanical parts complete     □ Optical parts complete                        ║
║  □ Electronic parts complete     □ Hardware kit complete                         ║
║  □ Consumables kit complete      □ All P/Ns verified                            ║
║                                                                                   ║
║  Kitted by: ____________  Date/Time: ____________  QC: ____________             ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  STATION WS-03: OPTICAL SUB-ASSEMBLY                                             ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Components cleaned (IPA)      □ OLED mounted and cured (60s UV)              ║
║  □ Collimator installed          □ Focus verified (infinity)                     ║
║  □ Beam combiner @ 45°±0.5°     □ No dust/particles visible                     ║
║                                                                                   ║
║  Assembled by: ____________  Date/Time: ____________  QC: ____________          ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  STATION WS-04: ELECTRONICS SUB-ASSEMBLY                                         ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ ESD wrist strap verified      □ Jetson + PCB mated                           ║
║  □ Camera connected              □ All cables connected                          ║
║                                                                                   ║
║  POWER TEST:                                                                      ║
║  • 5V Rail: _______ V (4.9-5.1V)    □ PASS  □ FAIL                             ║
║  • 3.3V Rail: _______ V (3.2-3.4V)  □ PASS  □ FAIL                             ║
║  • Boot Test:                        □ PASS  □ FAIL                             ║
║  • Camera Image:                     □ PASS  □ FAIL                             ║
║  • IMU Response:                     □ PASS  □ FAIL                             ║
║                                                                                   ║
║  Assembled by: ____________  Date/Time: ____________  QC: ____________          ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  STATION WS-05: MAIN ASSEMBLY                                                    ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ 5A: Thread inserts installed    □ 5A: O-rings installed                      ║
║  □ 5A: Heatsink mounted            □ 5B: Electronics installed                  ║
║  □ 5B: Wiring complete             □ 5C: Optical module installed               ║
║  □ 5C: Solenoid installed          □ 5C: Battery compartment                    ║
║  □ 5D: Window bonded               □ 5D: Covers installed                       ║
║  □ 5D: Picatinny clamp             □ 5D: All fasteners torqued                  ║
║                                                                                   ║
║  TORQUE VERIFICATION (sample 3 fasteners):                                       ║
║  • Fastener 1: _______ N·m (spec: _______ N·m)  □ PASS                         ║
║  • Fastener 2: _______ N·m (spec: _______ N·m)  □ PASS                         ║
║  • Fastener 3: _______ N·m (spec: _______ N·m)  □ PASS                         ║
║                                                                                   ║
║  Assembled by: ____________  Date/Time: ____________  QC: ____________          ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  STATION WS-06: CALIBRATION                                                      ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Firmware loaded (ver: ________)  □ Serial # programmed                       ║
║                                                                                   ║
║  IMU CALIBRATION:                                                                ║
║  • Accel X offset: _______    • Gyro X offset: _______                          ║
║  • Accel Y offset: _______    • Gyro Y offset: _______                          ║
║  • Accel Z offset: _______    • Gyro Z offset: _______                          ║
║  □ Cal data stored in unit                                                       ║
║                                                                                   ║
║  BORESIGHT ALIGNMENT:                                                            ║
║  • Horizontal error: _______ MOA (spec: ±1.0 MOA)  □ PASS                       ║
║  • Vertical error: _______ MOA (spec: ±1.0 MOA)    □ PASS                       ║
║                                                                                   ║
║  Calibrated by: ____________  Date/Time: ____________  QC: ____________         ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║                                                                                   ║
║  (Continued on next page - ATP and Final Release)                                ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 5.3 Statistical Process Control (SPC)

| Characteristic | Station | Control Limits | Target Cpk |
|----------------|---------|----------------|------------|
| Boresight H error | WS-06 | ±1.0 MOA | ≥1.33 |
| Boresight V error | WS-06 | ±1.0 MOA | ≥1.33 |
| 5V rail voltage | WS-04 | 4.9-5.1V | ≥1.33 |
| Weight | WS-08 | 580±20g | ≥1.33 |
| Current (active) | WS-07 | <3.0A | ≥1.33 |

---

# 6. FINAL QUALITY CONTROL (FQC)

## 6.1 Acceptance Test Procedure (ATP)

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-004: ACCEPTANCE TEST PROCEDURE (ATP)                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  UNIT INFORMATION                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Serial Number: VS-______-______    Test Date: ____________                      ║
║  Firmware Version: ____________     Test Station: WS-07                          ║
║  Tester: ________________________                                                 ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  ATP-01: VISUAL INSPECTION (5 min)                                               ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ # │ Check                          │ Criteria            │ Result │          ║
║  ├───┼────────────────────────────────┼─────────────────────┼────────┤          ║
║  │ 1 │ Housing finish                 │ No scratches/dents  │ P / F  │          ║
║  │ 2 │ Labels present and legible     │ S/N, warnings       │ P / F  │          ║
║  │ 3 │ Optical window clean           │ No smudges/dust     │ P / F  │          ║
║  │ 4 │ All fasteners present          │ Visual count        │ P / F  │          ║
║  │ 5 │ Picatinny clamp function       │ Smooth operation    │ P / F  │          ║
║  └───┴────────────────────────────────┴─────────────────────┴────────┘          ║
║  ATP-01 Result: □ PASS  □ FAIL                                                   ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  ATP-02: ELECTRICAL TEST (15 min)                                                ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ # │ Parameter              │ Min   │ Max   │ Measured │ Result │            ║
║  ├───┼────────────────────────┼───────┼───────┼──────────┼────────┤            ║
║  │ 1 │ Battery voltage        │ 7.0V  │ 8.4V  │ _______V │ P / F  │            ║
║  │ 2 │ Standby current        │ -     │ 0.5A  │ _______A │ P / F  │            ║
║  │ 3 │ Active current         │ -     │ 3.0A  │ _______A │ P / F  │            ║
║  │ 4 │ 5V rail                │ 4.9V  │ 5.1V  │ _______V │ P / F  │            ║
║  │ 5 │ 3.3V rail              │ 3.2V  │ 3.4V  │ _______V │ P / F  │            ║
║  │ 6 │ Charge input current   │ 0.5A  │ 2.0A  │ _______A │ P / F  │            ║
║  └───┴────────────────────────┴───────┴───────┴──────────┴────────┘            ║
║  ATP-02 Result: □ PASS  □ FAIL                                                   ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  ATP-03: FUNCTIONAL TEST (20 min)                                                ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ # │ Function                    │ Expected              │ Result │          ║
║  ├───┼─────────────────────────────┼───────────────────────┼────────┤          ║
║  │ 1 │ Power on sequence           │ Boot <30s, LED green  │ P / F  │          ║
║  │ 2 │ Display test pattern        │ All pixels working    │ P / F  │          ║
║  │ 3 │ Reticle display             │ Clear, centered       │ P / F  │          ║
║  │ 4 │ Button 1 (Mode)             │ Mode change           │ P / F  │          ║
║  │ 5 │ Button 2 (Brightness)       │ 5 levels              │ P / F  │          ║
║  │ 6 │ Button 3 (Power)            │ On/Off                │ P / F  │          ║
║  │ 7 │ Trigger mechanism           │ Response <50ms        │ P / F  │          ║
║  │ 8 │ IMU motion detection        │ Responds to movement  │ P / F  │          ║
║  │ 9 │ Camera live view            │ Clear image, no noise │ P / F  │          ║
║  │10 │ Power off sequence          │ Clean shutdown        │ P / F  │          ║
║  └───┴─────────────────────────────┴───────────────────────┴────────┘          ║
║  ATP-03 Result: □ PASS  □ FAIL                                                   ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  ATP-04: AI DETECTION TEST (15 min)                                              ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Test target: Standard drone silhouette display at 3m                            ║
║                                                                                   ║
║  │ # │ Test                    │ Criteria        │ Actual    │ Result │        ║
║  ├───┼─────────────────────────┼─────────────────┼───────────┼────────┤        ║
║  │ 1 │ Detection rate          │ ≥95% (19/20)    │ ___/20    │ P / F  │        ║
║  │ 2 │ False positive rate     │ ≤5% (1/20)      │ ___/20    │ P / F  │        ║
║  │ 3 │ Detection latency       │ <500ms          │ _____ms   │ P / F  │        ║
║  │ 4 │ Tracking stability      │ Smooth, no jitter│ Visual   │ P / F  │        ║
║  │ 5 │ Fire permission logic   │ Correct response │ Verified │ P / F  │        ║
║  └───┴─────────────────────────┴─────────────────┴───────────┴────────┘        ║
║  ATP-04 Result: □ PASS  □ FAIL                                                   ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  ATP-05: ENVIRONMENTAL SEAL TEST (5 min)                                         ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Unit powered on during test                                                   ║
║  □ IP65 spray test (12.5 L/min, 3m distance, 3 min)                             ║
║  □ No water ingress observed                                                     ║
║  □ Unit continues to function after test                                         ║
║                                                                                   ║
║  ATP-05 Result: □ PASS  □ FAIL                                                   ║
║                                                                                   ║
║  ═══════════════════════════════════════════════════════════════════════════════ ║
║  FINAL RESULT                                                                    ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║                                                                                   ║
║  │ Test      │ Result │    OVERALL RESULT:                                      ║
║  ├───────────┼────────┤                                                          ║
║  │ ATP-01    │ P / F  │    □ PASS - Release to packing                          ║
║  │ ATP-02    │ P / F  │    □ FAIL - NCR # ____________                          ║
║  │ ATP-03    │ P / F  │                                                          ║
║  │ ATP-04    │ P / F  │    Failure details: _________________________           ║
║  │ ATP-05    │ P / F  │    ____________________________________________         ║
║  └───────────┴────────┘                                                          ║
║                                                                                   ║
║  Test duration: _______ minutes                                                  ║
║                                                                                   ║
║  Tester: ____________________  Date: ____________  Signature: ____________      ║
║  QC Approval: _______________  Date: ____________  Signature: ____________      ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# 7. NON-CONFORMANCE MANAGEMENT

## 7.1 NCR Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    NON-CONFORMANCE MANAGEMENT PROCESS                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────┐                                                                   │
│  │  DEFECT     │                                                                   │
│  │  DETECTED   │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │   ISOLATE   │     │  • Quarantine defective item                            │  │
│  │   MATERIAL  │────▶│  • Tag with NCR hold tag                                │  │
│  │             │     │  • Prevent further processing                           │  │
│  └──────┬──────┘     └─────────────────────────────────────────────────────────┘  │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │   INITIATE  │     │  • Complete NCR form (VS-FM-005)                        │  │
│  │     NCR     │────▶│  • Assign NCR number                                    │  │
│  │             │     │  • Document defect details                              │  │
│  └──────┬──────┘     └─────────────────────────────────────────────────────────┘  │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │    MRB      │  Material Review Board convenes:                                  │
│  │   REVIEW    │  • Quality Manager (chair)                                        │
│  │             │  • Engineering representative                                      │
│  └──────┬──────┘  • Production representative                                      │
│         │                                                                           │
│    ┌────┴────┬─────────────┬─────────────┐                                         │
│    ▼         ▼             ▼             ▼                                         │
│  USE AS-IS  REWORK      SCRAP       RETURN TO                                      │
│  (with      (repair to  (destroy)   SUPPLIER                                       │
│  deviation) spec)                    (RMA)                                         │
│    │         │             │             │                                         │
│    └────┬────┴─────────────┴─────────────┘                                         │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │  IMPLEMENT  │                                                                   │
│  │ DISPOSITION │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │  VERIFY &   │                                                                   │
│  │   CLOSE     │                                                                   │
│  └──────┬──────┘                                                                   │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │ CAPA (if    │  If systemic issue or repeat NCR                                  │
│  │ required)   │  → Initiate CAPA (Section 8)                                      │
│  └─────────────┘                                                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 7.2 Non-Conformance Report Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-005: NON-CONFORMANCE REPORT (NCR)                         ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  NCR NUMBER: VS-NCR-______-______          DATE: ____________                    ║
║                                             PRIORITY: □ Critical □ Major □ Minor ║
║                                                                                   ║
║  SECTION 1: NON-CONFORMANCE IDENTIFICATION                                        ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Part Number: __________________    Serial Number: __________________            ║
║  Part Description: ______________________________________________________        ║
║  Quantity Affected: _______    Location Found: __________________                ║
║  Discovered by: ____________________    Stage: □ IQC □ IPQC □ ATP □ Customer    ║
║                                                                                   ║
║  DESCRIPTION OF NON-CONFORMANCE:                                                 ║
║  ____________________________________________________________________________   ║
║  ____________________________________________________________________________   ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  REQUIREMENT VIOLATED:                                                           ║
║  Spec/Drawing: ____________________    Requirement: ____________________         ║
║  Actual Value: ____________________    Specified: ____________________           ║
║                                                                                   ║
║  SECTION 2: CONTAINMENT ACTION                                                    ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ Material quarantined    Location: __________________                          ║
║  □ Stop shipment issued    Affected lots: __________________                     ║
║  □ Production hold         Work orders affected: __________________              ║
║  □ Customer notification   Customer contact: __________________                  ║
║                                                                                   ║
║  SECTION 3: MRB DISPOSITION                                      Date: ________  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ USE AS-IS                                                                     ║
║    Justification: ______________________________________________________        ║
║    Deviation #: ____________    Approved by: __________________                  ║
║                                                                                   ║
║  □ REWORK                                                                        ║
║    Rework instruction: _____________________________________________________    ║
║    Re-inspect per: __________________    Reworked by: __________________        ║
║                                                                                   ║
║  □ SCRAP                                                                         ║
║    Scrap authorization: __________________    Qty scrapped: _______             ║
║    Scrap value: $__________                                                      ║
║                                                                                   ║
║  □ RETURN TO SUPPLIER                                                            ║
║    Supplier: __________________    RMA #: __________________                     ║
║    SCAR issued: □ Yes □ No    SCAR #: __________________                        ║
║                                                                                   ║
║  MRB APPROVAL:                                                                    ║
║  Quality: __________________    Engineering: __________________                  ║
║  Production: __________________    Date: __________________                      ║
║                                                                                   ║
║  SECTION 4: ROOT CAUSE (if required for Major/Critical)                          ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ 5-Why Analysis    □ Fishbone Diagram    □ Other: __________________          ║
║                                                                                   ║
║  Root Cause: _______________________________________________________________    ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  CAPA Required: □ Yes → CAPA #: __________    □ No (justify): _______________   ║
║                                                                                   ║
║  SECTION 5: CLOSURE                                                               ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Disposition completed: □ Yes    Date: __________________                        ║
║  Verified by: __________________    Closed by: __________________               ║
║  Total cost impact: $__________                                                  ║
║                                                                                   ║
║  NCR CLOSED: ____________________    Date: __________________                    ║
║              Quality Manager                                                      ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 7.3 NCR Classification and Response Time

| Classification | Definition | Response Time | MRB Required? |
|----------------|------------|---------------|---------------|
| **Critical** | Safety impact, ship stop | 4 hours | Yes, immediate |
| **Major** | Function/performance | 24 hours | Yes, within 48hr |
| **Minor** | Cosmetic, documentation | 72 hours | QC discretion |

---

# 8. CORRECTIVE & PREVENTIVE ACTION (CAPA)

## 8.1 CAPA Process

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         CAPA PROCESS FLOW                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  TRIGGERS:                                                                          │
│  • Repeat NCRs (same root cause)                                                   │
│  • Customer complaints                                                              │
│  • Audit findings                                                                   │
│  • Trend analysis alerts                                                            │
│  • Process capability issues                                                        │
│                                                                                     │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │  INITIATE   │     │  1. Assign CAPA number                                  │  │
│  │   CAPA      │────▶│  2. Define problem statement                            │  │
│  │             │     │  3. Assign owner and team                               │  │
│  └──────┬──────┘     │  4. Set target completion date                          │  │
│         │            └─────────────────────────────────────────────────────────┘  │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │   ROOT      │     │  Tools:                                                  │  │
│  │   CAUSE     │────▶│  • 5-Why Analysis                                       │  │
│  │  ANALYSIS   │     │  • Fishbone (Ishikawa) Diagram                          │  │
│  └──────┬──────┘     │  • Fault Tree Analysis                                  │  │
│         │            └─────────────────────────────────────────────────────────┘  │
│         ▼                                                                           │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │  CORRECTIVE │     │  Address root cause:                                    │  │
│  │   ACTION    │────▶│  • Process change                                       │  │
│  │             │     │  • Training                                             │  │
│  └──────┬──────┘     │  • Design change                                        │  │
│         │            │  • Supplier action                                      │  │
│         ▼            └─────────────────────────────────────────────────────────┘  │
│  ┌─────────────┐     ┌─────────────────────────────────────────────────────────┐  │
│  │ PREVENTIVE  │     │  Prevent recurrence:                                    │  │
│  │   ACTION    │────▶│  • Error-proofing (poka-yoke)                          │  │
│  │             │     │  • Procedure update                                     │  │
│  └──────┬──────┘     │  • Control plan update                                  │  │
│         │            └─────────────────────────────────────────────────────────┘  │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │   VERIFY    │     Confirm effectiveness:                                        │
│  │   EFFECT.   │     • Monitor for 30-90 days                                      │
│  │             │     • No recurrence                                               │
│  └──────┬──────┘     • Process capability improved                                 │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐                                                                   │
│  │   CLOSE     │     • Document lessons learned                                    │
│  │   CAPA      │     • Update knowledge base                                       │
│  └─────────────┘     • Share across organization                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 8.2 CAPA Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-006: CORRECTIVE/PREVENTIVE ACTION REQUEST                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  CAPA NUMBER: VS-CAPA-______-______        DATE INITIATED: ____________          ║
║  TYPE: □ Corrective (reactive)  □ Preventive (proactive)                         ║
║  PRIORITY: □ Critical (30 days)  □ Major (60 days)  □ Standard (90 days)        ║
║                                                                                   ║
║  SECTION 1: PROBLEM IDENTIFICATION                                                ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Source: □ NCR □ Customer Complaint □ Audit □ Trend □ Other: __________         ║
║  Reference: NCR#_______ / Audit#_______ / Complaint#_______                      ║
║                                                                                   ║
║  PROBLEM STATEMENT:                                                               ║
║  ____________________________________________________________________________   ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  IMPACT: □ Safety □ Function □ Performance □ Cost □ Delivery □ Compliance       ║
║                                                                                   ║
║  OWNER: ____________________    TEAM: ____________________________________       ║
║  TARGET COMPLETION: ____________                                                  ║
║                                                                                   ║
║  SECTION 2: ROOT CAUSE ANALYSIS                                                   ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Method used: □ 5-Why  □ Fishbone  □ FTA  □ Other: __________                   ║
║                                                                                   ║
║  5-WHY ANALYSIS:                                                                  ║
║  Why 1: ________________________________________________________________        ║
║  Why 2: ________________________________________________________________        ║
║  Why 3: ________________________________________________________________        ║
║  Why 4: ________________________________________________________________        ║
║  Why 5: ________________________________________________________________        ║
║                                                                                   ║
║  ROOT CAUSE: _______________________________________________________________    ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  SECTION 3: ACTION PLAN                                                           ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ # │ Action                        │ Owner    │ Due Date │ Status │          ║
║  ├───┼───────────────────────────────┼──────────┼──────────┼────────┤          ║
║  │ 1 │ Immediate containment         │          │          │        │          ║
║  │ 2 │ Corrective action             │          │          │        │          ║
║  │ 3 │ Preventive action             │          │          │        │          ║
║  │ 4 │ Documentation update          │          │          │        │          ║
║  │ 5 │ Training                      │          │          │        │          ║
║  └───┴───────────────────────────────┴──────────┴──────────┴────────┘          ║
║                                                                                   ║
║  SECTION 4: EFFECTIVENESS VERIFICATION                                            ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Verification method: _____________________________________________________     ║
║  Monitoring period: From ____________ To ____________                            ║
║  Results: ________________________________________________________________      ║
║  Effective: □ Yes  □ No (reopen CAPA)                                           ║
║                                                                                   ║
║  SECTION 5: CLOSURE                                                               ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Lessons learned: __________________________________________________________    ║
║  Knowledge base updated: □ Yes  Reference: __________________                    ║
║                                                                                   ║
║  Closed by: ____________________    Date: ____________                           ║
║  Approved: ____________________    Date: ____________                            ║
║            Quality Manager                                                        ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# 9. CALIBRATION & MEASUREMENT

## 9.1 Calibration Program

| Equipment | Cal Interval | Standard | Tolerance | Location |
|-----------|--------------|----------|-----------|----------|
| Digital Caliper 150mm | 12 months | Gauge blocks | ±0.02mm | WS-01 |
| Digital Scale 5kg | 12 months | Certified weights | ±0.1g | WS-01 |
| Torque Screwdriver | 6 months | Torque tester | ±4% | WS-05 |
| Multimeter | 12 months | Cal lab | ±0.5% | WS-04 |
| Oscilloscope | 12 months | Cal lab | ±3% | WS-04 |
| DC Power Supply | 12 months | Cal lab | ±1% | WS-04 |
| IMU Turntable | 12 months | Reference IMU | ±0.1° | WS-06 |
| Boresight Target | 24 months | Optical lab | ±0.1 MOA | WS-06 |

## 9.2 Calibration Sticker

```
┌─────────────────────────────────┐
│      CALIBRATION STATUS        │
├─────────────────────────────────┤
│  Equipment ID: _______________  │
│  Cal Date: ___________________  │
│  Next Cal: ___________________  │
│  Calibrated by: ______________  │
│  Cal Cert #: _________________  │
│                                 │
│  □ IN CALIBRATION              │
│  □ OUT OF CALIBRATION          │
│  □ FOR REFERENCE ONLY          │
└─────────────────────────────────┘
```

---

# 10. TRAINING & COMPETENCY

## 10.1 Training Matrix

| Role | IPC-A-610 | ESD | Optical | Calibration | ATP | Safety |
|------|-----------|-----|---------|-------------|-----|--------|
| Assembly Tech | R | R | - | - | - | R |
| Optical Tech | R | R | R | - | - | R |
| Electronics Tech | R | R | - | - | - | R |
| Calibration Tech | - | R | - | R | - | R |
| Test Tech | R | R | - | - | R | R |
| QC Inspector | R | R | R | R | R | R |

*R = Required*

## 10.2 Training Record Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-007: TRAINING RECORD                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  EMPLOYEE INFORMATION                                                             ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Name: ____________________________    Employee ID: ____________                 ║
║  Department: ______________________    Position: ______________________          ║
║  Hire Date: ____________                                                          ║
║                                                                                   ║
║  TRAINING RECORD                                                                  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ Date     │ Training Course         │ Duration │ Trainer    │ Pass? │ Cert # │║
║  ├──────────┼─────────────────────────┼──────────┼────────────┼───────┼────────┤║
║  │          │ ESD Awareness           │   2 hr   │            │       │        │║
║  │          │ IPC-A-610 Workmanship   │  16 hr   │            │       │        │║
║  │          │ Safety Orientation      │   4 hr   │            │       │        │║
║  │          │ Optical Assembly        │  40 hr   │            │       │        │║
║  │          │ Calibration Procedure   │  24 hr   │            │       │        │║
║  │          │ ATP Execution           │   8 hr   │            │       │        │║
║  │          │                         │          │            │       │        │║
║  └──────────┴─────────────────────────┴──────────┴────────────┴───────┴────────┘║
║                                                                                   ║
║  COMPETENCY ASSESSMENT                                                            ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ Skill                  │ Assessed │ Assessor    │ Level (1-4) │ Next Review │║
║  ├────────────────────────┼──────────┼─────────────┼─────────────┼─────────────┤║
║  │ Mechanical assembly    │          │             │             │             │║
║  │ Optical assembly       │          │             │             │             │║
║  │ Electronics assembly   │          │             │             │             │║
║  │ Soldering              │          │             │             │             │║
║  │ Calibration            │          │             │             │             │║
║  │ ATP execution          │          │             │             │             │║
║  └────────────────────────┴──────────┴─────────────┴─────────────┴─────────────┘║
║                                                                                   ║
║  Competency Levels: 1=Trainee, 2=Can perform with supervision,                   ║
║                     3=Can perform independently, 4=Can train others              ║
║                                                                                   ║
║  Supervisor: ____________________    Date: ____________                          ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# 11. QUALITY RECORDS & TRACEABILITY

## 11.1 Record Retention

| Record Type | Retention Period | Storage | Responsible |
|-------------|------------------|---------|-------------|
| Design records | Life of product + 10 years | Electronic | Engineering |
| Build travelers | Life of product + 10 years | Electronic | QC |
| ATP test data | Life of product + 10 years | Electronic | QC |
| Calibration records | 5 years after equipment disposal | Electronic | QC |
| Training records | Duration of employment + 3 years | HR system | HR |
| NCRs | 5 years | Electronic | QC |
| CAPAs | 5 years | Electronic | QC |
| Supplier records | Life of supplier relationship + 5 years | Electronic | SQE |

## 11.2 Traceability Matrix

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         PRODUCT TRACEABILITY                                        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  UNIT SERIAL NUMBER                                                                │
│         │                                                                           │
│         ├──▶ Build Traveler (complete build history)                               │
│         │                                                                           │
│         ├──▶ Component Lot Numbers                                                 │
│         │    ├──▶ Jetson S/N                                                       │
│         │    ├──▶ Camera S/N                                                       │
│         │    ├──▶ PCB lot                                                          │
│         │    ├──▶ Housing lot                                                      │
│         │    └──▶ Optical components lot                                           │
│         │                                                                           │
│         ├──▶ Calibration Data                                                      │
│         │    ├──▶ IMU calibration values                                           │
│         │    ├──▶ Boresight alignment data                                         │
│         │    └──▶ Calibration date/technician                                      │
│         │                                                                           │
│         ├──▶ ATP Test Data                                                         │
│         │    ├──▶ All measured values                                              │
│         │    ├──▶ Pass/fail status                                                 │
│         │    └──▶ Test date/technician                                             │
│         │                                                                           │
│         ├──▶ Firmware Version                                                      │
│         │                                                                           │
│         └──▶ Ship Date / Customer                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 12. CONTROL PLANS

## 12.1 V-SMASH-LITE Production Control Plan

```
╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                              CONTROL PLAN: V-SMASH-LITE PRODUCTION                                                ║
║  Document: VS-CP-001  |  Rev: A  |  Date: 2026-01-19  |  Product: V-SMASH-LITE AI Smart Sight                                    ║
╠═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣
║                                                                                                                                   ║
║  │ Op │ Process      │ Characteristic        │ Spec/Tolerance    │ Sample │ Method        │ Control      │ Reaction Plan        │║
║  │ #  │ Step         │                       │                   │ Size   │               │ Method       │                      │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 10 │ IQC-Housing  │ Overall length        │ 150 ±0.2mm        │ 100%   │ Caliper       │ Record       │ Reject if OOT        │║
║  │    │              │ Bore diameter         │ 35 H7             │ 100%   │ Bore gauge    │ Record       │ Reject if OOT        │║
║  │    │              │ Surface finish        │ No defects        │ 100%   │ Visual        │ Check        │ Reject if defect     │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 20 │ IQC-PCB      │ Visual inspection     │ IPC-A-610 Class 2 │ 100%   │ Visual + 10×  │ Check        │ Reject if defect     │║
║  │    │              │ Power on test         │ Boot successful   │ 100%   │ Test fixture  │ Record       │ Reject if fail       │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 30 │ Optical Assy │ Cleanliness           │ No particles >50μm│ 100%   │ Microscope    │ Check        │ Re-clean             │║
║  │    │              │ Beam combiner angle   │ 45° ±0.5°         │ 100%   │ Fixture       │ Record       │ Adjust or reject     │║
║  │    │              │ UV cure time          │ ≥60 seconds       │ 100%   │ Timer         │ Check        │ Re-cure if short     │║
║  │    │              │ Focus                 │ Infinity          │ 100%   │ Collimator    │ Check        │ Adjust               │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 40 │ Elect Assy   │ ESD compliance        │ Wrist strap OK    │ Start  │ Monitor       │ Check        │ Stop until corrected │║
║  │    │              │ 5V rail               │ 4.9-5.1V          │ 100%   │ DMM           │ Record       │ Debug or reject      │║
║  │    │              │ 3.3V rail             │ 3.2-3.4V          │ 100%   │ DMM           │ Record       │ Debug or reject      │║
║  │    │              │ Camera image          │ Clear, no noise   │ 100%   │ Visual        │ Check        │ Replace camera       │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 50 │ Main Assy    │ Torque - M3           │ 0.5 ±0.05 N·m     │ Sample │ Torque wrench │ Verify 3/unit│ Re-torque            │║
║  │    │              │ O-ring seat           │ Fully seated      │ 100%   │ Visual        │ Check        │ Re-seat              │║
║  │    │              │ Gap/flush             │ ≤0.3mm            │ 100%   │ Feeler gauge  │ Check        │ Adjust               │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 60 │ Calibration  │ IMU calibration       │ Per procedure     │ 100%   │ Cal fixture   │ Record data  │ Re-calibrate         │║
║  │    │              │ Boresight H           │ ±1.0 MOA          │ 100%   │ Target/scope  │ SPC chart    │ Adjust or reject     │║
║  │    │              │ Boresight V           │ ±1.0 MOA          │ 100%   │ Target/scope  │ SPC chart    │ Adjust or reject     │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 70 │ ATP          │ Visual inspection     │ No defects        │ 100%   │ Visual        │ ATP form     │ Rework               │║
║  │    │              │ Electrical test       │ Per ATP spec      │ 100%   │ Test fixture  │ ATP form     │ Debug/NCR            │║
║  │    │              │ Functional test       │ All functions OK  │ 100%   │ Manual        │ ATP form     │ Debug/NCR            │║
║  │    │              │ AI detection          │ ≥95% (19/20)      │ 100%   │ Target display│ ATP form     │ Recalibrate/NCR      │║
║  │    │              │ IP65 seal             │ No water ingress  │ 100%   │ Spray chamber │ ATP form     │ Reseal/NCR           │║
║  ├────┼──────────────┼───────────────────────┼───────────────────┼────────┼───────────────┼──────────────┼──────────────────────┤║
║  │ 80 │ Packing      │ Weight                │ 580 ±20g          │ 100%   │ Scale         │ Record       │ Investigate          │║
║  │    │              │ Accessories complete  │ Per packing list  │ 100%   │ Visual        │ Check        │ Add missing items    │║
║  │    │              │ Documentation         │ All docs present  │ 100%   │ Visual        │ Check        │ Add missing docs     │║
║  └────┴──────────────┴───────────────────────┴───────────────────┴────────┴───────────────┴──────────────┴──────────────────────┘║
║                                                                                                                                   ║
║  APPROVAL: Engineering: __________________  Quality: __________________  Production: __________________  Date: ______________   ║
║                                                                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
```

---

# 13. QUALITY FORMS LIBRARY

## 13.1 Forms Index

| Form # | Form Name | Section | Purpose |
|--------|-----------|---------|---------|
| VS-FM-001 | Supplier Qualification Checklist | 3 | New supplier evaluation |
| VS-FM-002 | Incoming Inspection Report | 4 | Document IQC results |
| VS-FM-003 | Production Build Traveler | 5 | Track unit through build |
| VS-FM-004 | Acceptance Test Procedure (ATP) | 6 | Final test documentation |
| VS-FM-005 | Non-Conformance Report (NCR) | 7 | Document non-conformances |
| VS-FM-006 | CAPA Request | 8 | Corrective/preventive action |
| VS-FM-007 | Training Record | 10 | Employee training log |
| VS-FM-008 | Calibration Record | 9 | Equipment calibration log |
| VS-FM-009 | Management Review Minutes | - | Quality review meeting |
| VS-FM-010 | Internal Audit Checklist | - | Self-assessment |
| VS-FM-011 | Customer Complaint Form | - | Capture customer issues |
| VS-FM-012 | Supplier Corrective Action (SCAR) | 3 | Supplier quality issues |
| VS-FM-013 | Deviation Request | 7 | Request to use as-is |
| VS-FM-014 | Document Change Request | 2 | Request document revision |
| VS-FM-015 | First Article Inspection | 4 | New part qualification |

## 13.2 Additional Forms

### Deviation Request Form

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              FORM VS-FM-013: DEVIATION REQUEST                                    ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  DEVIATION #: VS-DEV-______-______         DATE: ____________                    ║
║  TYPE: □ Permanent  □ Temporary (Qty: _____ or Until: ____________)             ║
║                                                                                   ║
║  PART INFORMATION                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Part Number: __________________    Part Name: __________________________        ║
║  Drawing/Spec: _________________    Rev: ______                                  ║
║  Supplier: _____________________    Lot #: ______________                        ║
║  Quantity Affected: _______                                                       ║
║                                                                                   ║
║  DEVIATION DESCRIPTION                                                            ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Requirement: _______________________________________________________________    ║
║  Specified: ____________________    Actual: ____________________                 ║
║                                                                                   ║
║  Reason for Deviation: _____________________________________________________    ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  IMPACT ANALYSIS                                                                  ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Form: □ None  □ Minor  □ Significant                                           ║
║  Fit: □ None  □ Minor  □ Significant                                            ║
║  Function: □ None  □ Minor  □ Significant                                       ║
║  Safety: □ None  □ Minor  □ Significant                                         ║
║  Reliability: □ None  □ Minor  □ Significant                                    ║
║                                                                                   ║
║  Justification: ____________________________________________________________    ║
║  ____________________________________________________________________________   ║
║                                                                                   ║
║  APPROVAL                                                                         ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  □ APPROVED    □ REJECTED                                                        ║
║                                                                                   ║
║  Engineering: __________________  Date: ______  □ Approve  □ Reject             ║
║  Quality: _____________________  Date: ______  □ Approve  □ Reject             ║
║  Customer (if req'd): _________  Date: ______  □ Approve  □ Reject             ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# 14. QUALITY METRICS DASHBOARD

## 14.1 Monthly Quality Report Template

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║              MONTHLY QUALITY REPORT                                               ║
║              Month: ____________  Year: ____________                              ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  KEY PERFORMANCE INDICATORS                                                       ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  │ Metric                    │ Target │ Actual │ Trend │ Status │               ║
║  ├───────────────────────────┼────────┼────────┼───────┼────────┤               ║
║  │ First Pass Yield          │  ≥95%  │   __%  │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ Customer Escapes          │   0    │   __   │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ On-Time Delivery          │  ≥95%  │   __%  │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ Supplier Quality (PPM)    │ <1000  │  ____  │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ NCRs (total)              │  <10   │   __   │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ CAPAs Open                │   <5   │   __   │  ↑↓→  │ 🟢🟡🔴 │               ║
║  │ CAPAs Overdue             │   0    │   __   │  ↑↓→  │ 🟢🟡🔴 │               ║
║  └───────────────────────────┴────────┴────────┴───────┴────────┘               ║
║                                                                                   ║
║  PRODUCTION SUMMARY                                                               ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  Units Started: _______    Units Completed: _______    Units Shipped: _______   ║
║  Units Scrapped: _______   Units in Rework: _______    WIP: _______             ║
║                                                                                   ║
║  TOP 5 DEFECTS                                                                    ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  1. _________________________________ (__ occurrences)                          ║
║  2. _________________________________ (__ occurrences)                          ║
║  3. _________________________________ (__ occurrences)                          ║
║  4. _________________________________ (__ occurrences)                          ║
║  5. _________________________________ (__ occurrences)                          ║
║                                                                                   ║
║  ACTIONS FOR NEXT MONTH                                                           ║
║  ─────────────────────────────────────────────────────────────────────────────   ║
║  1. ____________________________________________________________________        ║
║  2. ____________________________________________________________________        ║
║  3. ____________________________________________________________________        ║
║                                                                                   ║
║  Prepared by: __________________    Approved by: __________________             ║
║  Date: ____________                                                               ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Quality Team | Initial release |

---

*V-SMASH-LITE Quality Management System v1.0*
*Procedures, Forms, and Control Plans*

**END OF DOCUMENT**
