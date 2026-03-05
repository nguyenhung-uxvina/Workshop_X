# D-M-I-R × ODI × Engineering Design (Pahl & Beitz)
## Unified Framework for Defense Product Development

**Version:** 1.0  
**Date:** January 2026  
**Context:** VKTHQ Defense/Security Product Development

---

## Executive Summary

This document integrates three powerful methodologies into a unified framework for Vietnamese defense product development:

| Framework | Origin | Core Contribution |
|-----------|--------|-------------------|
| **D-M-I-R** | Systems Thinking + Meta-Learning | Continuous improvement cycle & leverage point identification |
| **ODI** (Outcome-Driven Innovation) | Anthony Ulwick | Customer outcome discovery & opportunity prioritization |
| **Pahl & Beitz** (VDI 2221/2225) | German Engineering | Systematic design methodology & objective concept evaluation |

**The Integration Thesis**: 

> ODI tells us WHAT to design (which outcomes are underserved).  
> D-M-I-R tells us HOW to improve (diagnose, model, intervene, reflect).  
> Pahl & Beitz tells us HOW to design (systematic methodology from requirements to production).

**Combined, they create a self-improving product development system that:**
1. Discovers true customer needs (not feature requests)
2. Prioritizes highest-value opportunities
3. Designs solutions systematically with objective evaluation
4. Learns from every cycle to accelerate future development

---

## Part 1: Framework Architecture

### 1.1 The Three Layers

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    UNIFIED FRAMEWORK ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  LAYER 1: STRATEGIC (ODI)                                                   │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  "What should we build?"                                            │    │
│  │  • Jobs-to-be-done mapping                                          │    │
│  │  • Outcome discovery (50-150 per job)                               │    │
│  │  • Opportunity Algorithm: Imp + MAX(Imp - Sat, 0)                   │    │
│  │  • Segment targeting based on underserved outcomes                  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  LAYER 2: TACTICAL (Pahl & Beitz / VDI 2221-2225)                          │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  "How should we design it?"                                         │    │
│  │  • Task Clarification (Lastenheft → Pflichtenheft)                  │    │
│  │  • Conceptual Design (Function Structure → Morphological Matrix)    │    │
│  │  • Embodiment Design (Layout → Material → DfX)                      │    │
│  │  • Detail Design (Production Documentation)                         │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                    │                                         │
│                                    ▼                                         │
│  LAYER 3: SYSTEMIC (D-M-I-R + Systems Thinking)                            │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  "How do we continuously improve?"                                  │    │
│  │  • DIAGNOSE: Understand current system state                        │    │
│  │  • MODEL: Quantify and predict behavior                             │    │
│  │  • INTERVENE: Target high-leverage points                           │    │
│  │  • REFLECT: Learn and adjust mental models                          │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Integration Points

| Integration Point | ODI Provides | P&B Provides | D-M-I-R Provides |
|-------------------|--------------|--------------|------------------|
| **Requirements** | Outcome statements (what customers measure success by) | Requirements list format (Demands/Wishes, quantified) | Gap analysis (what's missing in current understanding) |
| **Concept Generation** | Underserved outcomes to target | Morphological matrix methodology | Feedback loops identification (avoid Fixes That Fail) |
| **Concept Selection** | Opportunity scores for prioritization | VDI 2225 evaluation methodology | Leverage point analysis (L3-L6 focus) |
| **Validation** | Customer scorecard (satisfaction improvement) | Verification plan (test against requirements) | Reflection loop (was mental model correct?) |
| **Learning** | Value migration tracking | Design documentation standards | Meta-learning and organizational knowledge |

---

## Part 2: Unified Process Flow

### 2.1 Phase 0: Strategic Opportunity Discovery (ODI)

**Before starting any design project, answer: "Should we build this?"**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PHASE 0: OPPORTUNITY DISCOVERY                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  STEP 0.1: MAP THE JOB                                                      │
│  ────────────────────                                                       │
│  Identify what job customers are trying to get done:                        │
│                                                                              │
│  Example Jobs (Defense Training):                                           │
│  • "Train personnel to weapons proficiency"                                 │
│  • "Validate crew coordination under stress"                                │
│  • "Qualify operators on new systems"                                       │
│                                                                              │
│  Job Decomposition:                                                         │
│  DEFINE → ASSESS → PLAN → PREPARE → EXECUTE → MONITOR → EVALUATE → CERTIFY │
│                                                                              │
│  STEP 0.2: CAPTURE OUTCOMES (50-150 per job)                               │
│  ───────────────────────────────────────────                                │
│  Format: [DIRECTION] + [UNIT] + [OBJECT]                                    │
│                                                                              │
│  Examples:                                                                   │
│  • MINIMIZE the TIME to set up training equipment                           │
│  • MINIMIZE the LIKELIHOOD of calibration errors                            │
│  • MINIMIZE the DELAY between shot and feedback display                     │
│  • INCREASE the ACCURACY of hit detection                                   │
│  • MINIMIZE the EFFORT to generate performance reports                      │
│                                                                              │
│  STEP 0.3: CALCULATE OPPORTUNITY SCORES                                     │
│  ───────────────────────────────────────                                    │
│  Opportunity = Importance + MAX(Importance - Satisfaction, 0)               │
│                                                                              │
│  Score > 15: ★★★★★ Extreme opportunity → Priority 1                         │
│  Score 12-15: ★★★★☆ Low-hanging fruit → Prioritize                          │
│  Score 10-12: ★★★☆☆ Worth considering → Secondary                           │
│  Score < 10: ★★☆☆☆ Diminishing returns → Deprioritize                       │
│                                                                              │
│  STEP 0.4: IDENTIFY SEGMENTS OF OPPORTUNITY                                 │
│  ──────────────────────────────────────────                                 │
│  Cluster customers by underserved outcome patterns (not demographics)       │
│                                                                              │
│  Defense Training Segments:                                                  │
│  • "Instant Feedback" segment (35%) → VN-SAMT, LOMAH, RAMS                  │
│  • "High Throughput" segment (25%) → VN-SAMT, VN-GRT                        │
│  • "Realistic Stress" segment (20%) → VN-CQB, VN-SNT                        │
│  • "Documentation" segment (15%) → VN-LVC, VN-CPX                           │
│  • "Integration" segment (5%) → VN-LVC, VN-CDS                              │
│                                                                              │
│  OUTPUT: Prioritized list of underserved outcomes → Design Requirements     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key Tools:**
- Outcome Statement Template (see Appendix A)
- Opportunity Scorecard (see Appendix B)
- Customer Interview Guide (see Appendix C)

---

### 2.2 Phase 1: Task Clarification (Pahl & Beitz) with D-M-I-R

**Transform ODI outcomes into engineering requirements.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PHASE 1: TASK CLARIFICATION                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  D-M-I-R LAYER:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  DIAGNOSE: What do we currently know about this problem?            │    │
│  │  • Review existing solutions (competitive analysis)                 │    │
│  │  • Identify constraints (budget, time, regulations)                 │    │
│  │  • Map stakeholders (users, customers, maintainers)                 │    │
│  │                                                                     │    │
│  │  MODEL: How do we structure the requirements?                       │    │
│  │  • Lastenheft (Customer Requirements) ← From ODI outcomes           │    │
│  │  • Pflichtenheft (Technical Specification) ← Engineering response   │    │
│  │                                                                     │    │
│  │  INTERVENE: High-leverage actions                                   │    │
│  │  • L6 (Information): Surface hidden constraints early               │    │
│  │  • L5 (Rules): Apply 5-step abstraction to find essential problem   │    │
│  │  • L3 (Goals): Ensure we're solving RIGHT problem                   │    │
│  │                                                                     │    │
│  │  REFLECT: What assumptions are we making?                           │    │
│  │  • Document assumptions for later validation                        │    │
│  │  • Identify critical uncertainties                                  │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  PAHL & BEITZ LAYER:                                                        │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                                                                     │    │
│  │  REQUIREMENTS LIST STRUCTURE:                                       │    │
│  │  ┌──────────────┬────────────┬───────────────┬───────────────────┐ │    │
│  │  │ Category     │ Requirement │ D/W          │ Value/Range       │ │    │
│  │  ├──────────────┼────────────┼───────────────┼───────────────────┤ │    │
│  │  │ Geometry     │            │               │                   │ │    │
│  │  │ Kinematics   │            │               │                   │ │    │
│  │  │ Forces       │            │               │                   │ │    │
│  │  │ Energy       │            │               │                   │ │    │
│  │  │ Material     │            │               │                   │ │    │
│  │  │ Signals      │            │               │                   │ │    │
│  │  │ Safety       │ ← MIL-STD-882             │                   │ │    │
│  │  │ Environment  │ ← MIL-STD-810             │                   │ │    │
│  │  │ EMC          │ ← MIL-STD-461             │                   │ │    │
│  │  │ Reliability  │ ← MIL-HDBK-217            │                   │ │    │
│  │  │ Production   │            │               │                   │ │    │
│  │  │ Cost         │            │               │                   │ │    │
│  │  │ Schedule     │            │               │                   │ │    │
│  │  └──────────────┴────────────┴───────────────┴───────────────────┘ │    │
│  │                                                                     │    │
│  │  ODI → P&B TRANSLATION:                                             │    │
│  │  • Outcome: "Minimize TIME to setup"                                │    │
│  │    → Requirement: "Setup time ≤ 10 min (D)"                         │    │
│  │  • Outcome: "Minimize LIKELIHOOD of calibration error"              │    │
│  │    → Requirement: "Auto-calibration system (D)"                     │    │
│  │    → Requirement: "Calibration accuracy ≤ 0.5% (D)"                 │    │
│  │                                                                     │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ABSTRACTION PROCESS (5 STEPS):                                             │
│  1. Omit wishes and preferences that limit solution space                   │
│  2. Omit requirements that have no bearing on function                      │
│  3. Transform quantitative into qualitative requirements                    │
│  4. Generalize results into solution-neutral terms                          │
│  5. Formulate the essential problem                                         │
│                                                                              │
│  OUTPUT: Requirements List (validated by stakeholders)                      │
│         + Essential Problem Statement (solution-neutral)                    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.3 Phase 2: Conceptual Design (Pahl & Beitz) with D-M-I-R + ODI

**Generate and select concepts that address underserved outcomes.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PHASE 2: CONCEPTUAL DESIGN                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  STEP 2.1: FUNCTION STRUCTURE                                               │
│  ────────────────────────────                                               │
│  Decompose overall function into sub-functions:                             │
│                                                                              │
│  Example: LOMAH System                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                        OVERALL FUNCTION                              │   │
│  │                  "Detect & Locate Projectile Impacts"                │   │
│  │                                                                      │   │
│  │  Energy ──► ┌─────────────┐ ──► Information                         │   │
│  │             │  DETECT     │                                          │   │
│  │  Signal ──► │  LOCATE     │ ──► Signal                              │   │
│  │             │  DISPLAY    │                                          │   │
│  │             └─────────────┘                                          │   │
│  │                                                                      │   │
│  │  Sub-functions:                                                      │   │
│  │  F1: Convert acoustic energy to electrical signal                    │   │
│  │  F2: Filter noise from target signal                                 │   │
│  │  F3: Calculate TDOA from multiple sensors                            │   │
│  │  F4: Compute impact coordinates                                      │   │
│  │  F5: Display results to user                                         │   │
│  │  F6: Store data for AAR                                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  STEP 2.2: MORPHOLOGICAL MATRIX                                             │
│  ──────────────────────────────                                             │
│  Generate solution principles for each sub-function:                         │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Sub-function │ Solution 1   │ Solution 2    │ Solution 3            │   │
│  ├──────────────┼──────────────┼───────────────┼───────────────────────┤   │
│  │ F1: Convert  │ Piezo mics   │ MEMS mics     │ Electret condenser    │   │
│  │ F2: Filter   │ Analog       │ Digital DSP   │ AI-based adaptive     │   │
│  │ F3: TDOA     │ Cross-corr   │ GCC-PHAT     │ Beamforming           │   │
│  │ F4: Compute  │ Hyperbolic   │ Multilateration│ Machine learning     │   │
│  │ F5: Display  │ LED matrix   │ LCD screen    │ Network to tablet     │   │
│  │ F6: Store    │ Local SD     │ Cloud sync    │ Direct to AAR system  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  Combine compatible principles into 3-6 concept variants                    │
│                                                                              │
│  STEP 2.3: CONCEPT EVALUATION (VDI 2225 + ODI Integration)                 │
│  ─────────────────────────────────────────────────────────                  │
│                                                                              │
│  EVALUATION CRITERIA (weighted from ODI opportunity scores + P&B):          │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Criterion            │ Weight │ Source                              │   │
│  ├──────────────────────┼────────┼─────────────────────────────────────┤   │
│  │ Setup time           │ 0.20   │ ODI Outcome (Opp=13.0)              │   │
│  │ Feedback delay       │ 0.18   │ ODI Outcome (Opp=12.4)              │   │
│  │ Measurement accuracy │ 0.12   │ ODI Outcome (Opp=10.1)              │   │
│  │ Manufacturing cost   │ 0.15   │ P&B Standard criterion              │   │
│  │ Reliability          │ 0.12   │ MIL-STD-810 requirement             │   │
│  │ Maintainability      │ 0.10   │ P&B DfX criterion                   │   │
│  │ EMC compliance       │ 0.08   │ MIL-STD-461 requirement             │   │
│  │ Interoperability     │ 0.05   │ STANAG requirement                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  VDI 2225 EVALUATION:                                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Criterion       │ Wt   │ V1   │ V2   │ V3   │ V4                    │   │
│  │                 │      │ Score│ Score│ Score│ Score                 │   │
│  ├─────────────────┼──────┼──────┼──────┼──────┼───────────────────────┤   │
│  │ Setup time      │ 0.20 │ 3    │ 6    │ 7    │ 8    ← Best          │   │
│  │ Feedback delay  │ 0.18 │ 4    │ 7    │ 8    │ 7                     │   │
│  │ Accuracy        │ 0.12 │ 6    │ 7    │ 7    │ 8                     │   │
│  │ Mfg cost        │ 0.15 │ 7    │ 6    │ 5    │ 4                     │   │
│  │ Reliability     │ 0.12 │ 5    │ 6    │ 7    │ 6                     │   │
│  │ Maintainability │ 0.10 │ 6    │ 5    │ 6    │ 5                     │   │
│  │ EMC             │ 0.08 │ 6    │ 7    │ 7    │ 7                     │   │
│  │ Interop         │ 0.05 │ 5    │ 7    │ 8    │ 7                     │   │
│  ├─────────────────┼──────┼──────┼──────┼──────┼───────────────────────┤   │
│  │ ΣWV             │ 1.00 │ 5.00 │ 6.29 │ 6.77 │ 6.47                  │   │
│  │ Rating R        │      │ 0.50 │ 0.63 │ 0.68 │ 0.65                  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  WINNER: Variant 3 (R = 0.68) → Proceed to Embodiment Design               │
│                                                                              │
│  D-M-I-R LAYER:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  DIAGNOSE: Why did V3 win? Why did V4 score lower despite          │    │
│  │            best setup time?                                         │    │
│  │  MODEL: Sensitivity analysis - which criteria dominate?             │    │
│  │  INTERVENE: Can we combine V3's strengths with V4's setup speed?   │    │
│  │  REFLECT: Was our weighting correct? What did we learn?            │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  OUTPUT: Selected Concept + Evaluation Documentation + Learning Insights    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.4 Phase 3: Embodiment Design (Pahl & Beitz) with D-M-I-R

**Transform selected concept into physical architecture.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                      PHASE 3: EMBODIMENT DESIGN                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  PAHL & BEITZ BASIC RULES:                                                  │
│  • Clear (short, direct force paths)                                        │
│  • Simple (minimum complexity for function)                                 │
│  • Safe (fail-safe design, redundancy where needed)                         │
│                                                                              │
│  PAHL & BEITZ PRINCIPLES:                                                   │
│  • Division of tasks (modularity)                                           │
│  • Self-help (self-centering, self-locking)                                │
│  • Stability and bistability                                                │
│  • Fault tolerance                                                          │
│                                                                              │
│  DESIGN FOR X (DfX) INTEGRATION:                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ DfX Principle     │ Key Questions                                   │   │
│  ├───────────────────┼─────────────────────────────────────────────────┤   │
│  │ DfM (Manufacture) │ Can we make this with available processes?      │   │
│  │ DfA (Assembly)    │ Can it be assembled easily/correctly?           │   │
│  │ DfMaint           │ Can field technicians service it?               │   │
│  │ DfCost            │ Are we in target cost at volume?                │   │
│  │ DfSafety          │ Does it meet MIL-STD-882 requirements?          │   │
│  │ DfEnv             │ Does it survive MIL-STD-810 conditions?         │   │
│  │ DfEMC             │ Does it meet MIL-STD-461 requirements?          │   │
│  │ DfTest            │ Can all requirements be verified?               │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  DEFENSE-SPECIFIC EMBODIMENT CHECKLIST:                                     │
│  □ Shock/vibration isolation (MIL-STD-810 Method 514)                       │
│  □ Temperature extremes design (MIL-STD-810 Method 501/502)                 │
│  □ Humidity/salt fog protection (MIL-STD-810 Method 507/509)                │
│  □ EMI shielding (MIL-STD-461)                                              │
│  □ Hazard controls (MIL-STD-882 FMECA)                                      │
│  □ Interoperability interfaces (STANAG connectors/protocols)                │
│  □ Field maintenance provisions (depot vs. unit level)                      │
│  □ IP rating for operational environment                                    │
│                                                                              │
│  D-M-I-R LAYER:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  DIAGNOSE: Which embodiment decisions are most critical?            │    │
│  │  • Constraint analysis: What's the bottleneck?                      │    │
│  │  • Risk analysis: What could fail?                                  │    │
│  │                                                                     │    │
│  │  MODEL: Structural analysis, thermal analysis, EMC simulation       │    │
│  │                                                                     │    │
│  │  INTERVENE: Apply leverage points                                   │    │
│  │  • L10 (Structure): Modular architecture for future flexibility     │    │
│  │  • L9 (Delays): Design for parallel testing activities              │    │
│  │  • L6 (Information): Real-time status feedback for field use        │    │
│  │                                                                     │    │
│  │  REFLECT: Document design rationale for future reference            │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  OUTPUT: Definitive Layout + Material Specifications + DfX Analysis         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.5 Phase 4: Detail Design (Pahl & Beitz) with D-M-I-R

**Create complete production documentation.**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PHASE 4: DETAIL DESIGN                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  DOCUMENTATION PACKAGE:                                                      │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  □ Part drawings with GD&T                                          │   │
│  │  □ Assembly drawings                                                │   │
│  │  □ Bill of Materials (BOM)                                          │   │
│  │  □ Manufacturing process specifications                             │   │
│  │  □ Quality control procedures                                       │   │
│  │  □ Verification test procedures (Requirements Traceability Matrix)  │   │
│  │  □ Technical manual (operation)                                     │   │
│  │  □ Maintenance manual                                               │   │
│  │  □ Training materials                                               │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  REQUIREMENTS TRACEABILITY MATRIX (RTM):                                    │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │ Req ID │ Requirement      │ Test Method    │ Accept Criteria │ Verify│   │
│  ├────────┼──────────────────┼────────────────┼─────────────────┼───────┤   │
│  │ R-001  │ Setup ≤ 10 min   │ Time trial     │ T ≤ 600s        │ □     │   │
│  │ R-002  │ Accuracy ≤ 50mm  │ Reference grid │ Error ≤ 50mm    │ □     │   │
│  │ R-003  │ Temp: -20 to +55 │ MIL-810-501/02 │ Full function   │ □     │   │
│  │ R-004  │ EMC compliance   │ MIL-461G       │ Per limits      │ □     │   │
│  │ ...    │ ...              │ ...            │ ...             │ □     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│  D-M-I-R LAYER:                                                             │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │  DIAGNOSE: What verification gaps exist?                            │    │
│  │  MODEL: Test resource requirements, schedule, cost                  │    │
│  │  INTERVENE: Parallel test tracks, surrogate testing where valid     │    │
│  │  REFLECT: Capture lessons for next project                          │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  OUTPUT: Complete Production Documentation Package                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 3: Application to VKTHQ Defense Products

### 3.1 Product Portfolio Mapping

| Product | Primary Job | Top Underserved Outcomes | Current Phase |
|---------|-------------|--------------------------|---------------|
| **LOMAH System** | Provide real-time marksmanship feedback | Setup time, Feedback delay, Field durability | Embodiment |
| **Tethered Drone-1300 PRO** | Provide persistent aerial surveillance | Deployment time, Payload flexibility, All-weather ops | Conceptual |
| **Target UAV** | Replicate threat aircraft for training | Threat fidelity, Operating cost, Recovery success | Task Clarification |
| **12.7mm RCWS** | Engage threats from protected position | Target acquisition speed, Accuracy, Integration | Embodiment |
| **Training Grenade** | Develop throwing proficiency safely | Realism of feel, Cost per throw, Safety | Conceptual |
| **Naval Weapon Simulator** | Train naval gunnery crews | Scenario realism, Crew coordination, AAR quality | Task Clarification |
| **RAMS** | Track marksmanship development AI | Real-time analysis, Personalization, Integration | Conceptual |
| **Small Arms Simulator** | Develop marksmanship fundamentals | Feedback immediacy, Session throughput, Instructor load | Embodiment |

### 3.2 Example: LOMAH System Full D-M-I-R × ODI × P&B Cycle

**DIAGNOSIS PHASE:**

Current State Assessment:
- System in prototype validation (12-week test program)
- Field setup time exceeds user expectations (current: ~25 min, target: ≤10 min)
- Feedback delay acceptable but not best-in-class
- Durability concerns in tropical conditions

ODI Opportunity Analysis:
| Outcome | Importance | Satisfaction | Opportunity |
|---------|------------|--------------|-------------|
| Minimize setup time | 9.2 | 4.0 | **13.2** ★★★★★ |
| Minimize feedback delay | 9.0 | 6.5 | 11.5 |
| Minimize measurement error | 8.5 | 7.0 | 10.0 |
| Maximize weather resistance | 8.0 | 5.0 | 11.0 |

System Archetype Detection:
- **Fixes That Fail**: Adding more features to speed setup → Increases complexity → Slower setup
- **Shifting the Burden**: Using skilled technicians for setup → Hides fundamental design issues

**MODELING PHASE:**

Causal Loop Diagram:
```
                    ┌─────────────────┐
                    │ Design Complexity│
                    └────────┬────────┘
                             │
                             ▼
            ┌────────────────────────────────┐
            │                                │
            ▼                                │
    ┌───────────────┐              ┌─────────┴─────────┐
    │ Setup Time    │◄─────────────│ # Components      │
    └───────┬───────┘    +         └───────────────────┘
            │
            │ -
            ▼
    ┌───────────────┐
    │ User Satis-   │
    │ faction       │
    └───────────────┘
```

Constraint Analysis:
- **Constraint**: Sensor array deployment (accounts for 60% of setup time)
- **Exploit**: Pre-configured sensor positions, quick-connect cables
- **Subordinate**: All other design choices serve faster deployment

**INTERVENTION PHASE:**

High-Leverage Interventions:
| Leverage Level | Intervention | Expected Impact |
|----------------|--------------|-----------------|
| L3 (Goals) | Redefine goal from "accurate system" to "fast-to-deploy accurate system" | Paradigm shift |
| L5 (Rules) | "No component requiring tool for setup" | Eliminates setup complexity |
| L6 (Information) | LED status indicators on each sensor | Faster troubleshooting |
| L9 (Delays) | Parallel deployment (2 operators) | 50% time reduction |
| L10 (Structure) | Integrated sensor-cable module | Reduce part count |

Pahl & Beitz Concept Generation (for deployment system):
| Sub-function | Solution 1 | Solution 2 | Solution 3 |
|--------------|------------|------------|------------|
| Deploy sensors | Manual placement | Rail-guided | Quick-stake |
| Connect cables | Individual connectors | Daisy-chain | Integrated ribbon |
| Verify alignment | Manual level | Auto-calibrate | Vision system |
| Protect in field | Hard case | Soft bag | Integrated cart |

**REFLECTION PHASE:**

Lessons Captured:
1. Setup time was underserved outcome (ODI revealed priority)
2. Original concept optimized for accuracy, not deployment (goal misalignment)
3. Field usability constraints not captured in initial requirements (incomplete Task Clarification)
4. "Shifting the Burden" archetype was active (skilled technicians masked design problem)

Actions for Next Cycle:
- Update requirements list with explicit deployment time requirements
- Re-evaluate concept selection with corrected weighting
- Document field setup procedures in user manual
- Plan user testing specifically for deployment workflow

---

## Part 4: Learning System for Mastery

### 4.1 Meta-Learning Framework

**Apply D-M-I-R to learning the unified framework itself:**

```
WEEKLY MICRO-D-M-I-R FOR LEARNING

DAY 1 (Monday): DIAGNOSE
├── What methodology concept is blocking my current project?
├── Where did I make errors last week?
└── What feedback did I receive from reviews?

DAY 2 (Tuesday): MODEL
├── How fast am I getting feedback? (Shorten if >1 week)
├── How many design iterations completed? (Target: 3+/week)
└── What's my constraint? (Theory? Practice? Feedback?)

DAY 3-5 (Wed-Fri): INTERVENE
├── Focus on ONE methodology aspect
├── Apply to current project
├── Get rapid feedback (AI, peer, mentor)
└── Iterate 2-3 times

DAY 6-7 (Weekend): REFLECT
├── What worked? What didn't?
├── What P&B principle did I violate?
├── What ODI insight did I miss?
└── Update learning journal
```

### 4.2 Mastery Progression Levels

| Level | Indicator | Evidence Required |
|-------|-----------|-------------------|
| **L1: Novice** | Can follow methodology with guidance | Completed 1 project with mentor support |
| **L2: Advanced Beginner** | Can apply methods independently | Completed 2 projects, passed peer review |
| **L3: Competent** | Can adapt methods to new situations | Completed 3+ projects, mentored L1 |
| **L4: Proficient** | Can identify system archetypes and leverage points | Improved process cycle time by 30%+ |
| **L5: Expert** | Can teach and extend methodology | Published internal guide, trained 3+ engineers |

### 4.3 High-Leverage Learning Interventions

| Level | Intervention | Impact |
|-------|--------------|--------|
| **L2 (Paradigm)** | "Learn theory first → Do while learning theory" | 15x faster acquisition |
| **L3 (Goals)** | "Understand methodology → Complete 3 defense projects" | Action-oriented |
| **L5 (Rules)** | "Weekly mentor review → Daily AI + weekly peer" | 10x feedback frequency |
| **L6 (Information)** | "Documentation as overhead → Documentation as investment" | Better retention |
| **L7 (R-loop)** | "Small wins → Confidence → More practice → Mastery" | Momentum building |

---

## Part 5: Integration Checklist

### 5.1 Before Starting Any Project

- [ ] **ODI**: Is this job worth addressing? (Opportunity score > 12?)
- [ ] **ODI**: What are the top 3 underserved outcomes?
- [ ] **P&B**: Do we have stakeholder agreement on essential problem?
- [ ] **D-M-I-R**: What system archetypes might be at play?

### 5.2 During Task Clarification

- [ ] **ODI**: Are outcomes translated to measurable requirements?
- [ ] **P&B**: Is requirements list complete (all categories)?
- [ ] **P&B**: Have we applied 5-step abstraction?
- [ ] **D-M-I-R**: What assumptions are we making?

### 5.3 During Conceptual Design

- [ ] **P&B**: Is function structure solution-neutral?
- [ ] **P&B**: Have we explored morphological matrix fully?
- [ ] **ODI**: Are evaluation criteria weighted by opportunity scores?
- [ ] **P&B**: Is VDI 2225 evaluation documented?
- [ ] **D-M-I-R**: What feedback loops might cause unintended consequences?

### 5.4 During Embodiment Design

- [ ] **P&B**: Are basic rules (clear, simple, safe) applied?
- [ ] **P&B**: Have all DfX principles been considered?
- [ ] **Defense**: Are MIL-STD requirements integrated?
- [ ] **D-M-I-R**: What's the constraint? Are we exploiting it?

### 5.5 During Detail Design

- [ ] **P&B**: Is RTM complete (all requirements traceable)?
- [ ] **Defense**: Are verification methods per MIL-STD?
- [ ] **D-M-I-R**: What lessons should be captured?
- [ ] **ODI**: Will this improve customer satisfaction scores?

### 5.6 After Project Completion

- [ ] **ODI**: Did we improve satisfaction on targeted outcomes?
- [ ] **D-M-I-R**: What mental models were wrong?
- [ ] **D-M-I-R**: What leverage points were most effective?
- [ ] **Learning**: What should next project team know?

---

## Appendix A: Outcome Statement Template

```
OUTCOME STATEMENT TEMPLATE

Product: _________________  Date: _________________

Job Step: _________________ (from Job Map)

Outcome Statement:

[MINIMIZE/INCREASE] the [TIME/LIKELIHOOD/FREQUENCY/AMOUNT/NUMBER]
it takes to / of / required to
[SPECIFIC ACTION OR RESULT]
when/while [CONTEXT IF NEEDED]

Example:
"MINIMIZE the TIME it takes to DEPLOY the sensor array
when SETTING UP in field conditions with limited personnel"

Importance (1-10): ___  Satisfaction (1-10): ___  
Opportunity = ___ + MAX(___ - ___, 0) = ___

Priority: □ >15 Extreme  □ 12-15 High  □ 10-12 Medium  □ <10 Low
```

---

## Appendix B: VDI 2225 Evaluation Template

```
VDI 2225 CONCEPT EVALUATION

Project: _________________  Date: _________________
Evaluator: _______________

Concepts Evaluated: V1: ________  V2: ________  V3: ________

┌──────────────────────┬────────┬──────┬──────┬──────┬───────────────────────┐
│ Criterion            │ Weight │ V1   │ V2   │ V3   │ Source                │
│                      │ (w)    │(0-10)│(0-10)│(0-10)│                       │
├──────────────────────┼────────┼──────┼──────┼──────┼───────────────────────┤
│ 1.                   │        │      │      │      │ ODI Opp=              │
│ 2.                   │        │      │      │      │ ODI Opp=              │
│ 3.                   │        │      │      │      │ P&B Standard          │
│ 4.                   │        │      │      │      │ MIL-STD-              │
│ 5.                   │        │      │      │      │                       │
│ 6.                   │        │      │      │      │                       │
├──────────────────────┼────────┼──────┼──────┼──────┼───────────────────────┤
│ Σ(w × score)         │ 1.00   │      │      │      │                       │
│ Rating (Σwv/10)      │        │      │      │      │                       │
└──────────────────────┴────────┴──────┴──────┴──────┴───────────────────────┘

Selection Rationale:
_______________________________________________________________________

D-M-I-R Reflection:
• What did winning concept do better?
• What should be combined from other concepts?
• What criteria might we have missed?
```

---

## Appendix C: D-M-I-R Cycle Worksheet

```
D-M-I-R CYCLE WORKSHEET

Project: _________________  Cycle #: ___  Date: _________________

┌─────────────────────────────────────────────────────────────────────────────┐
│ DIAGNOSIS                                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ Current system state:                                                        │
│ _______________________________________________________________________    │
│                                                                              │
│ Key constraint:                                                              │
│ _______________________________________________________________________    │
│                                                                              │
│ System archetype detected:                                                   │
│ □ Fixes That Fail  □ Shifting Burden  □ Escalation  □ Success to Successful │
│ □ Limits to Growth  □ Tragedy of Commons  □ Other: __________               │
│                                                                              │
│ Mental models to question:                                                   │
│ _______________________________________________________________________    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ MODELING                                                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ Key variables to quantify:                                                   │
│ 1. __________________ Current: ____ Target: ____                            │
│ 2. __________________ Current: ____ Target: ____                            │
│ 3. __________________ Current: ____ Target: ____                            │
│                                                                              │
│ Causal loops identified:                                                     │
│ R-loops (reinforcing): _______________________________________________      │
│ B-loops (balancing): _________________________________________________      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ INTERVENTION                                                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ Leverage Point Analysis:                                                     │
│ L2-L4 (Paradigm/Goals): ____________________________________________       │
│ L5-L7 (Rules/Loops): ________________________________________________       │
│ L9-L10 (Delays/Structure): __________________________________________       │
│                                                                              │
│ Interventions planned:                                                       │
│ 1. ________________________________________________________________         │
│ 2. ________________________________________________________________         │
│ 3. ________________________________________________________________         │
│                                                                              │
│ Expected outcomes:                                                           │
│ _______________________________________________________________________    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ REFLECTION                                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ What worked:                                                                 │
│ _______________________________________________________________________    │
│                                                                              │
│ What didn't work:                                                            │
│ _______________________________________________________________________    │
│                                                                              │
│ Mental model updates:                                                        │
│ _______________________________________________________________________    │
│                                                                              │
│ Knowledge to share:                                                          │
│ _______________________________________________________________________    │
│                                                                              │
│ Focus for next cycle:                                                        │
│ _______________________________________________________________________    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Document Information

**Version:** 1.0  
**Created:** January 2026  
**Author:** D-M-I-R Master / Claude  
**Context:** VKTHQ Defense Product Development  
**Framework Integration:** D-M-I-R × ODI × Pahl & Beitz × Systems Thinking

**References:**
1. Ulwick, A.W. "What Customers Want: Using Outcome-Driven Innovation" (2005)
2. Pahl, G. & Beitz, W. "Engineering Design: A Systematic Approach" (2007)
3. Meadows, D. "Thinking in Systems: A Primer" (2008)
4. VDI 2221: Systematic Approach to Design of Technical Systems
5. VDI 2225: Technical-Economic Evaluation

---

*"The goal is not perfect methodology - it's better outcomes. Use what works, discard what doesn't, reflect always."*
