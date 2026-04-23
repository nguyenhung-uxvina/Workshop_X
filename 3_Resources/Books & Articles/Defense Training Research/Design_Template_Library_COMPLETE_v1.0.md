# DEFENSE PRODUCT DESIGN TEMPLATE LIBRARY
## Reusable Templates from V-SMASH-LITE Project

**Document**: DTL-001 | **Version**: 1.0 | **Date**: 2026-01-19
**Framework**: Pahl & Beitz + D-M-I-R Unified Model

---

# EXECUTIVE SUMMARY

This template library contains **15 battle-tested templates** extracted from the V-SMASH-LITE AI-powered smart sight development project. Each template validated through actual use.

## Template Index

| # | Template | Phase | Purpose |
|---|----------|-------|---------|
| T01 | Requirements List | P1 | Capture all requirements (14 categories) |
| T02 | Stakeholder Analysis | P1 | Map stakeholder needs and influence |
| T03 | Problem Abstraction | P1 | Solution-neutral formulation |
| T04 | Function Structure | P2 | Decompose system functions |
| T05 | Morphological Matrix | P2 | Generate solution combinations |
| T06 | VDI 2225 Evaluation | P2 | Select best concept quantitatively |
| T07 | Embodiment Specification | P3 | Define physical layout |
| T08 | Bill of Materials | P3 | Component list with costs |
| T09 | Work Package Deep Dive | P4 | Detailed WP specification |
| T10 | ATP Test Procedure | P4 | Production acceptance test |
| T11 | Environmental Test Plan | P4 | MIL-STD-810H qualification |
| T12 | Integration Procedure | P4 | Assembly and integration |
| T13 | Project Master Summary | PM | Executive overview |
| T14 | D-M-I-R Reflection | PM | Meta-learning capture |
| T15 | Design Review Checklist | PM | Phase gate verification |

---

# QUICK START: WHICH TEMPLATE WHEN?

| Project Stage | Use Templates | Key Outputs |
|---------------|---------------|-------------|
| **Starting project** | T01, T02, T03 | Requirements, stakeholders, problem |
| **Generating concepts** | T04, T05, T06 | Functions, matrix, selection |
| **Physical design** | T07, T08 | Layout, BOM |
| **Work packages** | T09 | WP specifications |
| **Testing** | T10, T11 | ATP, environmental tests |
| **Management** | T13, T14, T15 | Summary, reflection, reviews |

---

# TEMPLATE T01: REQUIREMENTS LIST

## Purpose
Capture ALL requirements systematically across 14 categories with MUST/WISH classification.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                           REQUIREMENTS LIST                                   ║
║  Project: [PROJECT_NAME] | Document: [PROJECT_ID]-REQ-001                    ║
║  Version: [X.Y] | Date: [YYYY-MM-DD]                                         ║
╚═══════════════════════════════════════════════════════════════════════════════╝

LEGEND:
• D = Demand (MUST) - Product fails without this
• W = Wish (WANT) - Desirable but not essential
• W(H/M/L) = Wish with priority (High/Medium/Low)
• Verification: T=Test, A=Analysis, I=Inspection, D=Demonstration

════════════════════════════════════════════════════════════════════════════════

CATEGORY 1: FUNCTIONAL REQUIREMENTS
│ D/W │ ID   │ Requirement Description      │ Value    │ Unit │ Verify │ Source│
├─────┼──────┼──────────────────────────────┼──────────┼──────┼────────┼───────┤
│  D  │ F.01 │ [Primary function]           │ [value]  │[unit]│   T    │ [ref] │
│  D  │ F.02 │ [Secondary function]         │ [value]  │[unit]│   T    │ [ref] │
│ W(H)│ F.03 │ [Optional function]          │ [value]  │[unit]│   T    │ [ref] │

CATEGORY 2: PERFORMANCE REQUIREMENTS
│ D/W │ ID   │ Requirement Description      │ Value    │ Unit │ Verify │ Source│
├─────┼──────┼──────────────────────────────┼──────────┼──────┼────────┼───────┤
│  D  │ P.01 │ [Performance metric 1]       │ [min-max]│[unit]│   T    │ [ref] │
│  D  │ P.02 │ [Performance metric 2]       │ [≥value] │[unit]│   T    │ [ref] │

CATEGORY 3: ENVIRONMENTAL (MIL-STD-810H)
│ D/W │ ID   │ Requirement Description      │ Value    │ Unit │ Verify │Method │
├─────┼──────┼──────────────────────────────┼──────────┼──────┼────────┼───────┤
│  D  │ E.01 │ Operating temperature        │[-X to+Y] │  °C  │   T    │501/502│
│  D  │ E.02 │ Storage temperature          │[-X to+Y] │  °C  │   T    │501/502│
│  D  │ E.03 │ Humidity resistance          │ [XX]     │ %RH  │   T    │  507  │
│  D  │ E.04 │ Vibration                    │ Cat [X]  │  -   │   T    │  514  │
│  D  │ E.05 │ Shock                        │ [XX]     │  g   │   T    │  516  │
│  D  │ E.06 │ Ingress protection           │ IP[XX]   │  -   │   T    │ 60529 │

CATEGORY 4: PHYSICAL/GEOMETRY
│  D  │ G.01 │ Maximum dimensions (L×W×H)   │ [X×Y×Z]  │  mm  │   I    │ [ref] │
│  D  │ G.02 │ Maximum weight               │ [≤value] │  g   │   I    │ [ref] │
│  D  │ G.03 │ Mounting interface           │[standard]│  -   │   I    │ [ref] │

CATEGORY 5: INTERFACE/INTEGRATION
│  D  │ I.01 │ [Mechanical interface]       │[standard]│  -   │   I    │ [ref] │
│  D  │ I.02 │ [Electrical interface]       │[protocol]│  -   │   T    │ [ref] │

CATEGORY 6: ENERGY/POWER
│  D  │EN.01 │ Operating voltage range      │[X.X-Y.Y] │  V   │   T    │ [ref] │
│  D  │EN.02 │ Power consumption (typical)  │ [≤value] │  W   │   T    │ [ref] │
│  D  │EN.03 │ Runtime requirement          │ [≥value] │  hr  │   T    │ [ref] │

CATEGORY 7: SAFETY (MIL-STD-882E)
│  D  │ S.01 │ [Primary safety function]    │[criterion]│  -  │   T    │ 882E  │
│  D  │ S.02 │ [Fail-safe behavior]         │ [state]  │  -   │   T    │ 882E  │

CATEGORY 8: ERGONOMICS/HUMAN FACTORS
│  D  │ H.01 │ [User interface requirement] │[criterion]│  -  │   D    │ [ref] │

CATEGORY 9: PRODUCTION/MANUFACTURING
│  D  │ M.01 │ Local content minimum        │ [≥XX]    │  %   │   A    │ [ref] │
│  D  │ M.02 │ Production volume            │[X-Y/year]│ unit │   A    │ [ref] │

CATEGORY 10: QUALITY/RELIABILITY
│  D  │ Q.01 │ MTBF minimum                 │ [≥value] │  hr  │   A    │ [ref] │

CATEGORY 11: MAINTENANCE/SUPPORT
│  D  │MT.01 │ Field maintenance level      │ [level]  │  -   │   D    │ [ref] │
│  D  │MT.02 │ MTTR maximum                 │ [≤value] │  min │   D    │ [ref] │

CATEGORY 12: COST
│  D  │ C.01 │ Unit production cost target  │ [≤value] │  $   │   A    │ [ref] │
│  D  │ C.02 │ Development budget           │ [≤value] │  $   │   A    │ [ref] │

CATEGORY 13: SCHEDULE
│  D  │SC.01 │ Prototype delivery           │ [date]   │ date │   A    │ [ref] │
│  D  │SC.02 │ Production start             │ [date]   │ date │   A    │ [ref] │

CATEGORY 14: REGULATORY/COMPLIANCE
│  D  │ R.01 │ [Primary standard]           │[standard]│  -   │   D    │ [ref] │

════════════════════════════════════════════════════════════════════════════════

REQUIREMENTS SUMMARY
│ Category              │ Demands │ Wishes │ Total │
├───────────────────────┼─────────┼────────┼───────┤
│ TOTAL                 │   XX    │   XX   │  XX   │
```

---

# TEMPLATE T06: VDI 2225 CONCEPT EVALUATION

## Purpose
Quantified concept selection using weighted criteria scoring.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║               VDI 2225 CONCEPT EVALUATION MATRIX                              ║
║  Project: [PROJECT_NAME] | Document: [PROJECT_ID]-EVL-001                    ║
╚═══════════════════════════════════════════════════════════════════════════════╝

SCORING: 0=Unsatisfactory, 1=Very inadequate, 2=Weak, 3=Adequate, 4=Good, 5=Ideal

1. CRITERIA AND WEIGHTING
│ #  │ Criterion                     │ Weight (g) │ Justification              │
├────┼───────────────────────────────┼────────────┼────────────────────────────┤
│ 1  │ [Technical performance 1]     │    [X]%    │ [Why this weight]          │
│ 2  │ [Technical performance 2]     │    [X]%    │ [Why this weight]          │
│ 3  │ [Reliability/Safety]          │    [X]%    │ [Why this weight]          │
│ 4  │ [Manufacturing feasibility]   │    [X]%    │ [Why this weight]          │
│ 5  │ [Local content potential]     │    [X]%    │ [Why this weight]          │
│ 6  │ [Cost]                        │    [X]%    │ [Why this weight]          │
│ 7  │ [Development risk]            │    [X]%    │ [Why this weight]          │
│ 8  │ [Time to market]              │    [X]%    │ [Why this weight]          │
│    │                        TOTAL  │   100%     │                            │

2. EVALUATION MATRIX
│ # │ Criterion        │ g(%)│   V1   │   V2   │   V3   │   V4   │ Ideal │
│   │                  │     │ p │g×p │ p │g×p │ p │g×p │ p │g×p │ g×5   │
├───┼──────────────────┼─────┼───┼────┼───┼────┼───┼────┼───┼────┼───────┤
│ 1 │ [Criterion 1]    │ XX  │ X │X.XX│ X │X.XX│ X │X.XX│ X │X.XX│ X.XX  │
│...│ ...              │ ... │...│... │...│... │...│... │...│... │ ...   │
├───┴──────────────────┼─────┼───┼────┼───┼────┼───┼────┼───┼────┼───────┤
│ WEIGHTED TOTAL       │ 100 │   │X.XX│   │X.XX│   │X.XX│   │X.XX│ 5.00  │
│ TECHNICAL VALUE      │     │   │X.XX│   │X.XX│   │X.XX│   │X.XX│ 1.00  │
│ RANK                 │     │   │ #X │   │ #X │   │ #X │   │ #X │  --   │

3. DECISION
SELECTED CONCEPT: V[X] - [Concept Name]
RATIONALE: 1) Highest score (X.XX), 2) [Strength 1], 3) [Strength 2]
```

---

# TEMPLATE T09: WORK PACKAGE DEEP DIVE

## Purpose
Standardized structure for detailed work package specification.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    WORK PACKAGE [WPX] DEEP DIVE                               ║
║  [WP NAME]                                                                    ║
║  Project: [PROJECT_NAME] | Document: [PROJECT_ID]-WP[X]-001                  ║
╚═══════════════════════════════════════════════════════════════════════════════╝

SECTION 1: OVERVIEW
════════════════════════════════════════════════════════════════════════════════
1.1 PURPOSE: [What this WP delivers]
1.2 SCOPE: Included: [...] | Excluded: [...] | Interfaces: [...]
1.3 REQUIREMENTS TRACEABILITY
│ WP Deliverable     │ Requirement IDs     │ Verification         │
├────────────────────┼─────────────────────┼──────────────────────┤
│ [Deliverable 1]    │ F.01, P.01, E.01    │ Test, Analysis       │

SECTION 2: TECHNICAL SPECIFICATION
════════════════════════════════════════════════════════════════════════════════
[Architecture diagrams, detailed specs, calculations]
│ Parameter          │ Requirement  │ Specification │ Margin │ Verify │
├────────────────────┼──────────────┼───────────────┼────────┼────────┤
│ [Spec 1]           │ [Req value]  │ [Design]      │ [+/-%] │ [T/A]  │

SECTION 3: BILL OF MATERIALS
════════════════════════════════════════════════════════════════════════════════
│ Category     │ Items │ Cost    │ Local % │
├──────────────┼───────┼─────────┼─────────┤
│ TOTAL WP[X]  │   X   │ $X,XXX  │   XX%   │

SECTION 4: TOOLING
════════════════════════════════════════════════════════════════════════════════
│ Tool ID   │ Description           │ Purpose       │ Cost   │ Lead Time │
├───────────┼───────────────────────┼───────────────┼────────┼───────────┤
│ TL-X-001  │ [Tool description]    │ [Purpose]     │ $XXX   │ X weeks   │
│                              TOOLING TOTAL        │ $X,XXX             │

SECTION 5: DELIVERABLES
════════════════════════════════════════════════════════════════════════════════
│ Del ID │ Deliverable               │ Format  │ Status │
├────────┼───────────────────────────┼─────────┼────────┤
│ D[X].1 │ [Description]             │ [.xxx]  │ ☐ / ✓  │

SECTION 6: COST SUMMARY
════════════════════════════════════════════════════════════════════════════════
│ Category          │ Cost      │
├───────────────────┼───────────┤
│ BOM Cost          │ $X,XXX    │
│ Tooling Cost      │ $X,XXX    │
│ WP[X] TOTAL       │ $X,XXX    │
```

---

# TEMPLATE T10: ATP TEST PROCEDURE

## Purpose
Standardized acceptance test procedure for production units.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                 ACCEPTANCE TEST PROCEDURE (ATP)                               ║
║  Project: [PROJECT_NAME] | Document: [PROJECT_ID]-ATP-001                    ║
╚═══════════════════════════════════════════════════════════════════════════════╝

TEST FLOW:
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ ATP-01  │─▶│ ATP-02  │─▶│ ATP-03  │─▶│ ATP-04  │─▶│ ATP-06  │─▶│ ATP-07  │
│Incoming │  │ Visual  │  │Electrical│  │Functional│  │Calibrate│  │ Final   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘

Total ATP Time: ~[X] hours per unit

ATP-01: INCOMING INSPECTION ([XX] min)
│ Step │ Check                       │ Specification      │ Accept │ Reject │
├──────┼─────────────────────────────┼────────────────────┼────────┼────────┤
│ 1.1  │ Serial number present       │ Label readable     │   ☐    │   ☐    │
│ 1.2  │ Build traveler complete     │ All signatures     │   ☐    │   ☐    │

ATP-03: ELECTRICAL TEST ([XX] min)
│ Step │ Test                │ Min    │ Typ    │ Max    │ Measured │ Pass │
├──────┼─────────────────────┼────────┼────────┼────────┼──────────┼──────┤
│ 3.1  │ [Electrical test 1] │ [val]  │ [val]  │ [val]  │ ________ │  ☐   │

ATP-04: FUNCTIONAL TEST ([XX] min)
│ Step │ Function Test           │ Expected Result    │ Actual       │ Pass │
├──────┼─────────────────────────┼────────────────────┼──────────────┼──────┤
│ 4.1  │ [Functional test 1]     │ [Expected]         │ ____________ │  ☐   │
│ 4.2  │ [Safety interlock test] │ [Expected]         │ ____________ │  ☐   │

ATP-07: FINAL ACCEPTANCE
│ Item │ Check                       │ Complete │
├──────┼─────────────────────────────┼──────────┤
│ 7.1  │ All ATP tests passed        │    ☐     │
│ 7.2  │ Test data recorded          │    ☐     │
│ 7.3  │ Firmware version: _________ │    ☐     │

APPROVAL
Unit S/N: _____________ | ATP Date: _____________
│ Role              │ Name │ Signature │ Date │
├───────────────────┼──────┼───────────┼──────┤
│ Test Technician   │      │           │      │
│ QC Inspector      │      │           │      │
│ Release Authority │      │           │      │
```

---

# TEMPLATE T14: D-M-I-R REFLECTION

## Purpose
Meta-learning capture after completing a design cycle.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                        D-M-I-R REFLECTION                                     ║
║  Project: [PROJECT_NAME] | Document: [PROJECT_ID]-REF-001                    ║
╚═══════════════════════════════════════════════════════════════════════════════╝

1. CYCLE SUMMARY
│ Phase       │ P&B Equivalent     │ Duration │ Key Output                    │
├─────────────┼────────────────────┼──────────┼───────────────────────────────┤
│ Diagnosis   │ Task Clarification │ [X] days │ Requirements, problem stmt    │
│ Modeling    │ Conceptual Design  │ [X] days │ Function struct, concept sel  │
│ Intervention│ Embodiment/Detail  │ [X] days │ WP specs, BOM, tests          │
│ Reflection  │ Meta-learning      │ [X] days │ This document                 │

2. AFTER-ACTION REVIEW
WHAT WENT WELL:
• [Success 1 with evidence]
• [Success 2 with evidence]

WHAT DIDN'T GO WELL:
• [Issue 1] → Countermeasure: [Action]

WHAT SURPRISED US:
• [Surprise 1] → Lesson: [Learning]

3. LEVERAGE POINTS TARGETED
│ Level │ This Cycle │ Next Cycle │
├───────┼────────────┼────────────┤
│ L3    │ ☐ / ✓      │ ☐ Target   │
│ L5    │ ☐ / ✓      │ ☐ Target   │
│ L6    │ ☐ / ✓      │ ☐ Target   │
│ L10   │ ☐ / ✓      │ ☐ Target   │

4. MASTERY PROGRESSION
│ Skill Area             │ Before │ After │ Gap to Close                     │
├────────────────────────┼────────┼───────┼──────────────────────────────────┤
│ Requirements           │  [X]%  │ [X]%  │ [What to improve]                │
│ Conceptual design      │  [X]%  │ [X]%  │ [What to improve]                │

5. COMMITMENTS FOR NEXT CYCLE
1. [Commitment 1]
2. [Commitment 2]
3. [Commitment 3]
```

---

# TEMPLATE T15: DESIGN REVIEW CHECKLIST

## Purpose
Phase gate verification checklist for design reviews.

## Template Structure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    DESIGN REVIEW CHECKLIST                                    ║
║  Project: [PROJECT_NAME] | Review: [Phase X] | Date: [YYYY-MM-DD]            ║
╚═══════════════════════════════════════════════════════════════════════════════╝

PHASE 1: TASK CLARIFICATION REVIEW
☐ Requirements list complete (all 14 categories)
☐ All requirements quantified where possible
☐ MUST vs WISH classification complete
☐ Verification methods defined
☐ Customer sign-off obtained
Gate 1 Status: ☐ PASS ☐ CONDITIONAL ☐ FAIL

PHASE 2: CONCEPTUAL DESIGN REVIEW
☐ Function structure complete
☐ Morphological matrix complete (3+ solutions/function)
☐ VDI 2225 evaluation complete
☐ Selected concept documented
Gate 2 Status: ☐ PASS ☐ CONDITIONAL ☐ FAIL

PHASE 3: EMBODIMENT DESIGN REVIEW
☐ Physical layout defined
☐ BOM complete with costs
☐ Local content analysis complete
☐ DFM/DFA analysis complete
☐ Risk assessment updated
Gate 3 Status: ☐ PASS ☐ CONDITIONAL ☐ FAIL

PHASE 4: DETAIL DESIGN REVIEW
☐ All work packages complete
☐ All specifications finalized
☐ ATP procedure defined
☐ Environmental test plan complete
☐ Cost targets met
Gate 4 Status: ☐ PASS ☐ CONDITIONAL ☐ FAIL

SIGN-OFF
│ Role              │ Name │ Signature │ Date │ Verdict        │
├───────────────────┼──────┼───────────┼──────┼────────────────┤
│ Design Engineer   │      │           │      │ ☐ Pass ☐ Fail │
│ Technical Lead    │      │           │      │ ☐ Pass ☐ Fail │
│ Program Manager   │      │           │      │ ☐ Pass ☐ Fail │
```

---

# APPENDIX: PHASE-TEMPLATE MAPPING

```
PAHL & BEITZ PHASE                    TEMPLATES
═══════════════════                   ═════════════════════════════════

PHASE 1: TASK CLARIFICATION    ──────▶ T01 Requirements List
                                       T02 Stakeholder Analysis
                                       T03 Problem Abstraction

PHASE 2: CONCEPTUAL DESIGN     ──────▶ T04 Function Structure
                                       T05 Morphological Matrix
                                       T06 VDI 2225 Evaluation

PHASE 3: EMBODIMENT DESIGN     ──────▶ T07 Embodiment Specification
                                       T08 Bill of Materials

PHASE 4: DETAIL DESIGN         ──────▶ T09 Work Package Deep Dive
                                       T10 ATP Test Procedure
                                       T11 Environmental Test Plan
                                       T12 Integration Procedure

PROJECT MANAGEMENT             ──────▶ T13 Project Master Summary
                                       T14 D-M-I-R Reflection
                                       T15 Design Review Checklist
```

---

# REFERENCE EXAMPLES

All templates validated through V-SMASH-LITE project:

| Template | Example Document |
|----------|------------------|
| T01 Requirements | VS-CON-001 Conceptual Design |
| T06 VDI 2225 | VS-CON-001 Conceptual Design |
| T07 Embodiment | VS-EMB-001 Embodiment Design |
| T08 BOM | WP1-WP3 Deep Dive documents |
| T09 WP Deep Dive | WP1-WP6 all documents |
| T10 ATP | WP6 Test & Validation |
| T14 D-M-I-R | VS-REF-001 D-M-I-R Reflection |

---

**Document Control**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial - 15 templates |

*Defense Product Design Template Library v1.0*
*Extracted from V-SMASH-LITE Project*
*Pahl & Beitz + D-M-I-R Methodology*

**END OF DOCUMENT**
