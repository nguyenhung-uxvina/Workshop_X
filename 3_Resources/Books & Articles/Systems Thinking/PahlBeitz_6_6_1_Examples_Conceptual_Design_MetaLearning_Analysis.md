# Pahl & Beitz Section 6.6: Examples of Conceptual Design
## Comprehensive Meta-Learning Analysis for Defense/Security Systems

**Document Version:** 1.0  
**Analysis Date:** December 2025  
**Framework:** 13-Skill Meta-Learning for Engineering Design Mastery  
**Target Systems:** Target USV, Towed Target, Training Grenade, UAV Catapult, UAV VTOL, Tethered Drone, Xuồng Cứu hộ (Rescue Boat)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Section Overview and Core Concepts](#2-section-overview-and-core-concepts)
3. [Skill 1: Feynman Technique Analysis](#3-skill-1-feynman-technique-analysis-engineering-feynman)
4. [Skill 2: Cognitive Chunking Breakdown](#4-skill-2-cognitive-chunking-breakdown-engineering-chunking-breakdown)
5. [Skill 3: Design Review Criteria](#5-skill-3-design-review-criteria-engineering-design-review-mentor)
6. [Skill 4: Interleaving Schedule](#6-skill-4-interleaving-schedule-engineering-interleaving-scheduler)
7. [Skill 5: Progress Tracking Framework](#7-skill-5-progress-tracking-framework-engineering-project-progress-tracker)
8. [Skill 6: Concept Evaluation Application](#8-skill-6-concept-evaluation-application-engineering-concept-evaluation-assistant)
9. [Skill 7: Vietnamese Mnemonics](#9-skill-7-vietnamese-mnemonics-engineering-mnemonic-creator)
10. [Skill 8: Learning Architecture](#10-skill-8-learning-architecture-engineering-learning-architecture-builder)
11. [Skill 9: Systems Mapping](#11-skill-9-systems-mapping-engineering-systems-mapper)
12. [Skill 10: Focus Session Optimization](#12-skill-10-focus-session-optimization-engineering-focus-session-optimizer)
13. [Skill 11: Self-Assessment Rubrics](#13-skill-11-self-assessment-rubrics-engineering-self-assessment-rubric-generator)
14. [Skill 12: Targeted Drill Exercises](#14-skill-12-targeted-drill-exercises-engineering-targeted-drill-master)
15. [Skill 13: Learning Journal Templates](#15-skill-13-learning-journal-templates-engineering-learning-journal-keeper)
16. [Defense System Applications](#16-defense-system-applications)
17. [Integration and Cross-Reference Matrix](#17-integration-and-cross-reference-matrix)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

### 1.1 Section Purpose in Pahl & Beitz Framework

Section 6.6 "Examples of Conceptual Design" serves as the **capstone demonstration** of the systematic conceptual design methodology. It provides two complete worked examples showing how the 8-step conceptual design process (Steps 1-8 from Sections 6.4-6.5) translates into practice:

| Example | Main Flow Type | Complexity | Continuation |
|---------|---------------|------------|--------------|
| 6.6.1 One-Handed Mixing Tap | **Material** (water) | Medium | Completed in Section 6.6 |
| 6.6.2 Impulse-Loading Device (not in excerpt) | **Energy** | High | Continues to Section 7.7 (Embodiment) |

### 1.2 Why This Section Matters for Defense Engineering

This section demonstrates critical patterns applicable to defense systems:

1. **Flow-Centric Analysis**: Material flow (water) ≈ Material flow (ammunition, targets, rescue equipment)
2. **Independence Requirements**: V̇ and ϑ independence ≈ Speed and accuracy independence in targeting systems
3. **Function Structure Variation**: Three function structure alternatives evaluated systematically
4. **Physical Effect Selection**: Justified decisions to use proven principles vs. novel alternatives
5. **Brainstorming → Classification → Selection**: Complete methodology chain

### 1.3 Key Learning Outcomes

After mastering Section 6.6, engineers will be able to:

| Outcome | Competency Level | Application Domain |
|---------|-----------------|-------------------|
| Execute 8-step conceptual design process end-to-end | Proficient (Level 4) | All defense systems |
| Vary function structures to analyze system behavior | Competent (Level 3) | Flow-dominant systems |
| Apply brainstorming followed by systematic classification | Competent (Level 3) | Solution space exploration |
| Use physical analysis to justify design decisions | Proficient (Level 4) | Principle selection |
| Evaluate multiple principle solutions with VDI 2225 | Competent (Level 3) | Concept down-selection |

---

## 2. Section Overview and Core Concepts

### 2.1 The 8-Step Conceptual Design Process (Complete)

Section 6.6 demonstrates all 8 steps in practice:

```
┌────────────────────────────────────────────────────────────────┐
│                 8-STEP CONCEPTUAL DESIGN PROCESS                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  STEP 1: Clarify Task → Requirements List                      │
│     ↓                                                          │
│  STEP 2: Abstract → Essential Problems                         │
│     ↓                                                          │
│  STEP 3: Establish → Function Structures (VARIED!)            │
│     ↓                                                          │
│  STEP 4: Search → Working Principles (Brainstorming)          │
│     ↓                                                          │
│  STEP 5: Select → Best Working Principles                      │
│     ↓                                                          │
│  STEP 6: Firm Up → Principle Solution Variants (A,B,C,D)      │
│     ↓                                                          │
│  STEP 7: Evaluate → VDI 2225 Evaluation Chart                 │
│     ↓                                                          │
│  STEP 8: Determine → Next Steps (→ Embodiment)                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 2.2 Three Flow Types in Systematic Design

The book explicitly mentions three flow types covered by examples:

| Flow Type | Section Example | Defense Analog |
|-----------|----------------|----------------|
| **Material** | 6.6.1 Mixing Tap (water) | Training Grenade (pyrotechnic), Xuồng Cứu hộ (people, water) |
| **Energy** | 6.6.2 Impulse-Loading Device | UAV Catapult (kinetic), Tethered Drone (electrical) |
| **Signal** | Figures 6.4-6.6, 6.20 | Target USV (command), Towed Target (radar), UAV VTOL (control) |

### 2.3 Core Insight: Function Structure Variation

The mixing tap example demonstrates a critical insight rarely emphasized:

> **Before searching for working principles, VARY the function structure to understand system behavior.**

Three function structure variants were analyzed (Figures 6.30-6.32):

| Variant | Structure | Behavior | Selection |
|---------|-----------|----------|-----------|
| Fig 6.30 | Meter flow → Adjust temp → Mix | Non-linear, pressure-dependent | **Rejected** |
| Fig 6.31 | Adjust temp → Meter flow → Mix | Linear at equal pressure, unstable at low flow | **Rejected** |
| Fig 6.32 | Meter independently → Mix | **Linear**, robust to pressure variations | **Selected** |

**Defense Application**: Before designing a multi-mode system (e.g., UAV VTOL with hover/cruise), analyze function structure variants to identify which arrangement provides the most robust behavior.

### 2.4 Physical Effect Justification Pattern

The text introduces a justified shortcut pattern:

> "Selecting sound solution principles without further investigation, because they have proved their worth in previous company products, is a common and justified approach in some branches of engineering."

This is **NOT** skipping systematic design—it's **justified narrowing** with documented rationale:

```
IF: Physical effect is well-proven in company products
AND: Alternatives offer no clear advantage
AND: Risk of unproven effects exceeds benefit
THEN: Select proven effect with documented justification
ELSE: Systematic search for physical effects required
```

**Defense Application**: For Training Grenades, valve-based delay mechanisms are well-proven. Novel electronic delays require explicit justification against the proven mechanical baseline.

---

## 3. Skill 1: Feynman Technique Analysis (engineering-feynman)

### 3.1 Concept: "Function Structure Variation for Behavior Analysis"

#### 60-Second Explanation (ELI12)

Imagine you're designing a shower that lets you control both **how much water** comes out and **how hot** it is, using just one hand. There are different ways to arrange the "pieces" inside:

- **Option A**: First decide how much water, then adjust temperature
- **Option B**: First set temperature, then control flow
- **Option C**: Control hot and cold water separately, then mix them

Each arrangement behaves differently! Option C turns out to be the most predictable—when you change one thing, the other doesn't unexpectedly change. Before deciding HOW to build each piece, you first need to decide WHAT ORDER they go in.

#### Everyday Analogy

Think of making a mixed drink:
- **Option A**: Fill the glass with cola first, then add the flavor syrup → the flavor concentration changes as you add more cola
- **Option B**: Add syrup to an empty glass, then fill with cola → similar problem
- **Option C**: Measure syrup and cola separately in different cups, then pour together → consistent result every time!

The mixing tap example proves that **structure determines behavior** before you even choose what kind of valve to use.

#### Defense Example: Target USV Propulsion-Steering System

| Function Structure | Behavior | Suitability |
|-------------------|----------|-------------|
| Adjust speed → Turn → Move | Speed change affects turning radius unpredictably | Poor for evasive maneuvers |
| Turn → Adjust speed → Move | Turning affects speed unpredictably | Poor for constant-speed patterns |
| **Control each motor independently → Combine thrust vectors** | Linear, predictable, independent | **Optimal for programmable paths** |

The third option (differential thrust control) provides **independent** control of speed and direction—directly paralleling the mixing tap's optimal solution.

#### Why This Matters

Most engineers jump directly to "what valve should I use?" without first asking "what ORDER should the functions happen?" This structural decision often has **more impact** on system behavior than component selection.

### 3.2 Concept: "Brainstorming → Classification → Selection Pipeline"

#### 60-Second Explanation (ELI12)

When you're trying to invent something, you could just pick the first idea that seems good. But that's risky—you might miss something better!

The mixing tap example shows a three-stage process:
1. **Brainstorm**: Generate LOTS of ideas without judging (Figure 6.33 shows many wild sketches)
2. **Classify**: Group similar ideas together, understand what makes each group special
3. **Select**: Choose the best GROUP first, then the best IDEA within that group

This works better than trying to judge every single idea individually, because classification reveals PATTERNS you might not see otherwise.

#### Everyday Analogy

Imagine you're choosing a new phone:
- **Bad approach**: Look at 50 phones randomly, try to pick the best one
- **Good approach**: 
  1. First classify: Apple vs. Android, High-end vs. Budget
  2. Then decide: "I want Android, High-end"
  3. Finally select: Compare only the 5 phones in that category

#### Defense Example: Training Grenade Delay Mechanism Search

Following the textbook pattern:

**Stage 1 - Brainstorm** (no judgment):
- Mechanical timer
- Electronic timer
- Chemical delay
- Fuse burning
- Hydraulic delay
- Thermal delay
- Magnetic release
- Spring unwinding
- ...

**Stage 2 - Classify** (by physical principle):
| Class | Mechanisms | Key Characteristic |
|-------|------------|-------------------|
| Mechanical-temporal | Timer, spring, escapement | Precision, proven |
| Chemical-temporal | Fuse, chemical reaction | Simple, one-use |
| Electronic-temporal | IC timer, microcontroller | Programmable, power-dependent |
| Fluid-temporal | Hydraulic, pneumatic | Temperature-sensitive |

**Stage 3 - Select**:
- For training grenades: Mechanical-temporal class selected (proven, reusable, no battery)
- Within class: Specific mechanism evaluated by VDI 2225

### 3.3 Concept: "VDI 2225 Evaluation with Uncertainty Analysis"

#### 60-Second Explanation (ELI12)

When you have several good ideas (like four different mixing tap designs A, B, C, D), how do you pick the best one? You can't just say "I like B"—you need to show your reasoning!

VDI 2225 is like a report card for designs:
1. List all the important qualities (cost, reliability, ease of use, etc.)
2. Rate each design on each quality (0-4 points)
3. Weight the scores (some qualities matter more)
4. Calculate total scores
5. **Check for uncertainty**: Is B really better than C, or are they too close to tell?

The mixing tap example shows that Solution B won, but Solution D might be reconsidered if production questions are answered positively.

#### Defense Example: UAV Catapult Launch Mechanism Selection

Four principle solutions evaluated:

| Criterion | Weight | Pneumatic | Bungee | Electromagnetic | Hydraulic |
|-----------|--------|-----------|--------|-----------------|-----------|
| Launch energy | 3 | 3 | 2 | 4 | 3 |
| Portability | 4 | 2 | 4 | 1 | 2 |
| Field reliability | 4 | 3 | 4 | 2 | 3 |
| Cost | 3 | 3 | 4 | 1 | 2 |
| Refire rate | 2 | 3 | 2 | 4 | 3 |
| **Weighted Score** | | **44** | **52** | **32** | **41** |

**Winner**: Bungee system (highest score, but requires validation of energy consistency)
**Uncertainty**: Pneumatic close behind—if bungee energy consistency proves problematic, pneumatic becomes preferred

### 3.4 Understanding Check Questions

**Basic (Recall)**:
1. What are the three function structure variants analyzed for the mixing tap?
2. What physical principle was selected as "well-proven" and justified without further investigation?

**Application (Scenario)**:
3. You're designing a Target USV that must control both speed and heading independently. Based on the mixing tap analysis, which function structure arrangement would provide the most robust behavior?

**Edge Case (Transfer)**:
4. The mixing tap achieved independence by "metering each inlet independently then mixing." How would you apply this pattern to a Tethered Drone power-data transmission system where you need independent control of power delivery and data bandwidth?

### 3.5 Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Brainstorming alone generates the best solution" | Brainstorming generates OPTIONS; classification and systematic selection are needed to find the best one |
| "Function structure is just documentation" | Function structure DETERMINES BEHAVIOR—vary it before selecting working principles |
| "Proven principles need no justification" | They need DOCUMENTED justification explaining WHY alternatives were dismissed |
| "VDI 2225 always gives a clear winner" | Uncertainty analysis may reveal solutions that are too close to distinguish—additional investigation needed |
| "Four solution variants is always enough" | Four is typical, but the number depends on problem complexity; mixing tap could have had more ball-type variants |

---

## 4. Skill 2: Cognitive Chunking Breakdown (engineering-chunking-breakdown)

### 4.1 Master Chunk: Section 6.6 Overall Structure

```
┌─────────────────────────────────────────────────────────────┐
│   SECTION 6.6: EXAMPLES OF CONCEPTUAL DESIGN               │
│                                                            │
│   Purpose: Demonstrate complete 8-step process             │
│                                                            │
│   ├── 6.6.1 Mixing Tap (Material Flow Example)            │
│   │   └── 8 steps executed end-to-end                     │
│   │                                                        │
│   └── 6.6.2 Impulse-Loading Device (Energy Flow Example)  │
│       └── Continues to Section 7.7 (Embodiment)           │
│                                                            │
│   Cross-Reference: Signal flow example in 6.4-6.6, 6.20   │
└─────────────────────────────────────────────────────────────┘
```

**Cognitive Load**: Low (2 examples, clear purpose)
**Prerequisite Chunks**: Section 6.4 (Working Principle Search), Section 6.5 (Concept Selection)
**Estimated Study Time**: 4-6 hours for complete mastery

### 4.2 Sub-Chunk A: Task Clarification and Abstraction (Steps 1-2)

```
CHUNK A: PROBLEM DEFINITION (Steps 1-2)
├── A1: Requirements List Construction
│   ├── Input: Planning department assignment (Figure 6.26)
│   ├── Process: Incorporate standards, safety, ergonomics
│   └── Output: Revised requirements list (Figure 6.27)
│
├── A2: Problem Abstraction
│   ├── Input: Requirements list
│   ├── Process: Identify essential physical relationships
│   ├── Key insight: V̇m = V̇c + V̇h (volume conservation)
│   ├── Key insight: ϑm = f(V̇c, V̇h, ϑc, ϑh) (energy balance)
│   └── Output: Overall function diagram (Figure 6.28)
│
└── A3: Physical Relationship Analysis
    ├── Figure 6.29: Mathematical relationships
    ├── Independence requirement: Change V̇ without changing ϑ
    ├── Independence requirement: Change ϑ without changing V̇
    └── Implication: Function structure must enable independence
```

**Cognitive Load**: Medium (physics + requirements)
**Time Estimate**: 60-90 minutes
**Key Deliverables**: Requirements list, Overall function, Independence criteria

### 4.3 Sub-Chunk B: Function Structure Development (Step 3)

```
CHUNK B: FUNCTION STRUCTURE VARIATION (Step 3)
├── B1: Subfunction Identification
│   ├── Stop–meter–mix
│   ├── Adjust flow rate
│   └── Adjust output temperature
│
├── B2: Function Structure Variant 1 (Figure 6.30)
│   ├── Structure: Meter flow → Adjust temp → Mix
│   ├── Analysis: Pressure coupling causes non-linearity
│   └── Verdict: REJECTED (unstable at small flows)
│
├── B3: Function Structure Variant 2 (Figure 6.31)
│   ├── Structure: Adjust temp → Meter flow → Mix
│   ├── Analysis: Linear at equal pressure
│   └── Verdict: REJECTED (fails at pressure difference)
│
├── B4: Function Structure Variant 3 (Figure 6.32)
│   ├── Structure: Meter cold & hot independently → Mix
│   ├── Analysis: Linear, pressure-robust
│   └── Verdict: SELECTED (best behavior)
│
└── B5: Key Learning
    └── Vary structure BEFORE selecting working principles
```

**Cognitive Load**: High (three variants, behavioral analysis)
**Time Estimate**: 90-120 minutes
**Key Deliverables**: Three function structure diagrams, Selection rationale

### 4.4 Sub-Chunk C: Working Principle Search (Step 4)

```
CHUNK C: WORKING PRINCIPLE DISCOVERY (Step 4)
├── C1: Task Reformulation
│   └── "Vary two flow areas simultaneously or successively..."
│
├── C2: Brainstorming Session
│   └── Output: Figure 6.33 (multiple solution sketches)
│
├── C3: Solution Classification
│   ├── Group 1: Movements tangential to seat face (both V̇ & ϑ)
│   │   └── Independence guaranteed with parallel edges
│   ├── Group 2: Movements normal to seat face
│   │   └── Requires additional coupling mechanisms
│   ├── Group 3: One movement type tangential
│   │   └── Requires additional coupling mechanisms
│   └── Group 4: Mixed normal/tangential movements
│       └── Cannot achieve independence (ELIMINATED)
│
├── C4: Movement Characteristics (Figure 6.34)
│   ├── Bounding edges must be parallel to movement
│   ├── V̇ setting: Both areas approach zero together
│   ├── ϑ setting: One area approaches zero, other maximum
│   └── Seat face options: Plane, cylindrical, spherical
│
└── C5: Classification Scheme (Figures 6.35-6.36)
    └── Working parts × Movement types matrix
```

**Cognitive Load**: High (brainstorming + physics analysis)
**Time Estimate**: 90-120 minutes
**Key Deliverables**: Brainstorming results, Classification criteria, Selection of Group 1

### 4.5 Sub-Chunk D: Solution Firming and Evaluation (Steps 5-8)

```
CHUNK D: SOLUTION DEVELOPMENT & SELECTION (Steps 5-8)
├── D1: Working Principle Selection (Step 5)
│   └── Group 1 (tangential movements) selected for all variants
│
├── D2: Principle Solution Variants (Step 6)
│   ├── Variant A: "Plate solution with eccentric and pull-and-turn grip"
│   ├── Variant B: "Cylinder solution with lever"
│   ├── Variant C: "Cylinder solution with end valves and additional sealing"
│   └── Variant D: "Ball solution"
│
├── D3: VDI 2225 Evaluation (Step 7)
│   ├── Evaluation chart: Figure 6.41
│   ├── Criteria evaluated systematically
│   ├── Winner: Solution B (balanced profile)
│   └── Note: Solution D deferred pending production study
│
└── D4: Next Steps Determination (Step 8)
    ├── Solution B: Proceed to dimensional layout
    ├── Improvements identified: Operating lever
    └── Solution D: Further production/assembly study
```

**Cognitive Load**: Medium (systematic but defined process)
**Time Estimate**: 60-90 minutes
**Key Deliverables**: Four principle solutions, VDI 2225 evaluation, Decision record

### 4.6 Complete Chunking Summary

| Chunk | Steps | Cognitive Load | Time | Prerequisites |
|-------|-------|---------------|------|---------------|
| A: Problem Definition | 1-2 | Medium | 60-90 min | Section 5 (Requirements) |
| B: Function Structure | 3 | High | 90-120 min | Chunk A, Section 6.3 |
| C: Working Principles | 4 | High | 90-120 min | Chunk B, Section 6.4 |
| D: Solution Selection | 5-8 | Medium | 60-90 min | Chunk C, Section 6.5 |
| **Total** | **1-8** | **—** | **5-7 hours** | **—** |

### 4.7 Defense System Chunk Mapping

| Defense System | Most Relevant Chunk | Why |
|---------------|---------------------|-----|
| Target USV | B (Function Structure) | Speed/heading independence parallels V̇/ϑ independence |
| Towed Target | C (Working Principles) | Tow mechanism classification similar to valve classification |
| Training Grenade | D (Solution Selection) | Multiple delay mechanisms require VDI 2225 evaluation |
| UAV Catapult | C-D (Principles & Selection) | Launch mechanism brainstorming + evaluation |
| UAV VTOL | B (Function Structure) | Hover/cruise transition requires structure analysis |
| Tethered Drone | B-C | Power/data independence + mechanism search |
| Xuồng Cứu hộ | A-B | Rescue operations requirements + function structure |

---

## 5. Skill 3: Design Review Criteria (engineering-design-review-mentor)

### 5.1 Step 1 Review Criteria: Task Clarification

**Requirements List Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Standards referenced | | DIN, ISO, MIL-STD citations present |
| Safety requirements explicit | | Safety demands marked with D or priority |
| Quantified parameters | | Numerical values with units for all key parameters |
| Demands vs. Wishes classified | | D/W marking on each requirement |
| Ergonomic factors addressed | | User interaction requirements stated |
| Production constraints stated | | Volume, cost, manufacturing limits specified |
| Evolution from initial brief | | Documented changes from planning department input |

**Defense-Specific Additions**:
| Criterion | Evidence Required |
|-----------|-------------------|
| MIL-STD-810 environmental | Temperature, humidity, shock, vibration ranges |
| MIL-STD-461 EMC | Emission/susceptibility requirements if electronic |
| MIL-STD-882 safety | Hazard classification, safety-critical functions |
| STANAG interoperability | Interface standards with allied systems |

### 5.2 Step 2 Review Criteria: Problem Abstraction

**Abstraction Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Essential problem identified | | Core function stated solution-neutrally |
| Physical relationships documented | | Mathematical equations for key phenomena |
| Independence requirements specified | | Which variables must be independent |
| Coupling effects identified | | Known interactions between variables |
| Alternative physical effects considered | | At least 2-3 alternative approaches listed |
| Justified dismissals documented | | Explicit reasons for rejected alternatives |
| Overall function diagram complete | | Inputs, outputs, flows shown |

**Example from Mixing Tap**:
- ✓ Essential problem: "Regulate temperature and throughflow independently"
- ✓ Physical relationships: V̇m = V̇c + V̇h, temperature mixing equation
- ✓ Independence: V̇ and ϑ settings must not affect each other
- ✓ Alternative dismissed: Heat exchangers (expensive, time lag)

### 5.3 Step 3 Review Criteria: Function Structure

**Function Structure Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Subfunctions identified | | List of all subfunctions |
| Multiple variants developed | | At least 2-3 structural alternatives |
| Behavioral analysis performed | | Characteristic curves or behavior description |
| Pressure/flow/energy independence analyzed | | Coupling effects quantified |
| Selection justified | | Clear rationale for chosen structure |
| Boundary conditions considered | | Edge case behavior documented |

**Critical Defense Review Points**:
- Does the function structure enable **graceful degradation**?
- Are **failure modes** independent (no common-mode failures)?
- Is the structure **testable** at each subfunction level?
- Does structure support **modular replacement** in field conditions?

### 5.4 Step 4 Review Criteria: Working Principle Search

**Brainstorming Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Diverse methods used | | Brainstorming + literature + patent search + ... |
| Quantity of ideas generated | | At least 10-15 raw concepts |
| Classification criteria defined | | Explicit grouping parameters |
| Groups analyzed for characteristics | | Each group's pros/cons documented |
| Physical constraints verified | | Analysis of what prevents certain solutions |
| Independence check performed | | Verification that principles enable independence |

**Defense-Specific Review Points**:
- Were **adversarial scenarios** considered? (What if enemy knows design?)
- Are principles **indigenous** or import-dependent?
- Do principles require **exotic materials** unavailable domestically?
- Can principles be **tested without live warheads**?

### 5.5 Steps 5-6 Review Criteria: Principle Solution Variants

**Solution Variant Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Number of variants sufficient | | 3-6 distinct variants |
| Variants span solution space | | Different approaches represented |
| Each variant fully specified | | Operating elements, geometry, mechanism |
| Technical feasibility addressed | | No obvious physics violations |
| Production feasibility considered | | Manufacturing approach identified |
| Sketches/diagrams adequate | | Sufficient detail for evaluation |

### 5.6 Step 7 Review Criteria: VDI 2225 Evaluation

**Evaluation Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Criteria comprehensive | | All requirements list items covered |
| Weighting justified | | Rationale for relative importance |
| Scoring consistent | | Same scoring scale applied uniformly |
| Uncertainty acknowledged | | Close scores flagged for further study |
| Weak spots identified | | Low-scoring criteria highlighted |
| Improvement paths noted | | How weak spots could be addressed |
| Sensitivity analysis performed | | Would different weights change outcome? |

### 5.7 Step 8 Review Criteria: Next Steps

**Decision Record Quality Checklist**:

| Criterion | Score (0-4) | Evidence Required |
|-----------|-------------|-------------------|
| Winner clearly stated | | Unambiguous selection |
| Improvement actions defined | | Specific issues to address in embodiment |
| Alternative preservation | | Runner-up solutions documented for revisit |
| Timeline/resources estimated | | Next phase effort quantified |
| Risk factors identified | | What could change the decision |
| Stakeholder sign-off obtained | | Review/approval evidence |

### 5.8 Complete Review Scoring Matrix

```
CONCEPTUAL DESIGN REVIEW SCORECARD
──────────────────────────────────────────────────────
Step 1 (Task Clarification):     ___/28 points
Step 2 (Abstraction):            ___/28 points
Step 3 (Function Structure):     ___/24 points
Step 4 (Working Principles):     ___/24 points
Steps 5-6 (Solution Variants):   ___/24 points
Step 7 (VDI 2225 Evaluation):    ___/28 points
Step 8 (Next Steps):             ___/24 points
──────────────────────────────────────────────────────
TOTAL:                           ___/180 points

Rating Scale:
162-180 (90%+):  Excellent - Ready for Embodiment
144-161 (80-89%): Good - Minor revisions needed
126-143 (70-79%): Acceptable - Significant gaps
<126 (<70%):     Insufficient - Major rework required
```

---

## 6. Skill 4: Interleaving Schedule (engineering-interleaving-scheduler)

### 6.1 Week 1: Foundation Building

| Day | Session 1 (AM) | Session 2 (PM) | Defense Application |
|-----|---------------|----------------|---------------------|
| Mon | Section 6.6 overview (45 min) | Section 5 requirements review (45 min) | Requirements list structure |
| Tue | Chunk A: Steps 1-2 study (60 min) | Training Grenade requirements draft (45 min) | Apply Step 1-2 pattern |
| Wed | Chunk B: Function structure (60 min) | Target USV function structure sketch (45 min) | Apply Step 3 pattern |
| Thu | Review + interleave with 6.4 (45 min) | UAV Catapult requirements draft (45 min) | Cross-system application |
| Fri | Self-assessment: Chunks A-B (30 min) | Gap identification + planning (30 min) | Consolidation |

**Interleaving Pattern**: Requirements (5) ↔ Function Structure (6.3) ↔ Examples (6.6)

### 6.2 Week 2: Working Principle Mastery

| Day | Session 1 (AM) | Session 2 (PM) | Defense Application |
|-----|---------------|----------------|---------------------|
| Mon | Chunk C: Brainstorming study (60 min) | Training Grenade delay brainstorm (45 min) | Apply brainstorming |
| Tue | Classification criteria analysis (45 min) | UAV Catapult launch mechanism classification (45 min) | Apply classification |
| Wed | Interleave: Review Section 6.4 (45 min) | Towed Target tow mechanism brainstorm (45 min) | Cross-system practice |
| Thu | Physical effect analysis (60 min) | Target USV propulsion classification (45 min) | Physical reasoning |
| Fri | Self-assessment: Chunk C (30 min) | Tethered Drone power delivery brainstorm (30 min) | Consolidation |

### 6.3 Week 3: Solution Development and Evaluation

| Day | Session 1 (AM) | Session 2 (PM) | Defense Application |
|-----|---------------|----------------|---------------------|
| Mon | Chunk D: VDI 2225 study (60 min) | Training Grenade solution variants (45 min) | Apply evaluation |
| Tue | Firming up principle solutions (45 min) | UAV Catapult variants development (45 min) | Solution firming |
| Wed | VDI 2225 practice evaluation (60 min) | Target USV VDI 2225 evaluation (45 min) | Evaluation practice |
| Thu | Interleave: Section 6.5 review (45 min) | Xuồng Cứu hộ concept evaluation (45 min) | Cross-system |
| Fri | Full Section 6.6 review (45 min) | UAV VTOL transition mechanism evaluation (45 min) | Integration |

### 6.4 Week 4: Integration and Mastery Verification

| Day | Session 1 (AM) | Session 2 (PM) | Defense Application |
|-----|---------------|----------------|---------------------|
| Mon | Complete 8-step walkthrough (90 min) | Training Grenade complete conceptual design (90 min) | Full process |
| Tue | Peer review / mentor session (60 min) | UAV Catapult complete conceptual design (90 min) | Feedback |
| Wed | Gap remediation (60 min) | Target USV complete conceptual design (90 min) | Mastery |
| Thu | Cross-system comparison (60 min) | Design review simulation (60 min) | Transfer |
| Fri | Final self-assessment (45 min) | Learning journal consolidation (45 min) | Reflection |

### 6.5 Interleaving Rationale

**Why This Schedule Works**:

1. **Spaced Repetition**: Each chunk revisited 3-4 times across 4 weeks
2. **Contextual Interference**: Different defense systems force abstraction
3. **Retrieval Practice**: Self-assessments require recall without notes
4. **Elaborative Interrogation**: Applying to defense systems requires "why" thinking
5. **Progressive Complexity**: Simple (requirements) → Complex (evaluation)

**Rotation Pattern**:
```
Week 1: Foundation concepts + 2 defense systems
Week 2: Working principles + 2 different defense systems  
Week 3: Evaluation + 2 different defense systems
Week 4: Integration + all defense systems
```

---

## 7. Skill 5: Progress Tracking Framework (engineering-project-progress-tracker)

### 7.1 Competency Levels for Section 6.6

| Level | Name | Description | Evidence Requirements |
|-------|------|-------------|----------------------|
| 1 | Awareness | Can identify the 8 steps | Quiz score ≥70% |
| 2 | Understanding | Can explain why each step matters | Feynman explanation recorded |
| 3 | Application | Can execute steps on guided example | Guided practice completed |
| 4 | Analysis | Can vary function structures independently | Novel function structure analysis |
| 5 | Synthesis | Can complete conceptual design for new problem | Independent conceptual design |
| 6 | Mastery | Can mentor others through the process | Peer teaching session conducted |

### 7.2 Evidence Collection Matrix

| Skill Component | Level 1-2 Evidence | Level 3-4 Evidence | Level 5-6 Evidence |
|-----------------|-------------------|-------------------|-------------------|
| Requirements List | Identify D/W classification | Create requirements for Training Grenade | Review colleague's requirements list |
| Problem Abstraction | Explain V̇-ϑ independence | Derive independence requirements for Target USV | Identify hidden coupling in novel system |
| Function Structure | Recognize three variants | Develop function structure for UAV Catapult | Vary structure and analyze behavior |
| Brainstorming | Participate in session | Lead brainstorming for Training Grenade | Facilitate brainstorming + classification |
| Classification | Understand classification criteria | Create classification for Towed Target mechanisms | Define new classification criteria |
| VDI 2225 | Complete evaluation chart | Perform sensitivity analysis | Customize evaluation for defense context |
| Decision Making | Understand Step 8 logic | Document decision for UAV Catapult | Defend decision under stakeholder challenge |

### 7.3 Progress Tracking Template

```
SECTION 6.6 MASTERY PROGRESS TRACKER
═══════════════════════════════════════════════════════════

Student: _________________ Start Date: _____________

STEP 1: Task Clarification
├── Level 1-2: □ Quiz passed (___/100)
├── Level 3-4: □ Training Grenade requirements list completed
│              □ UAV Catapult requirements list completed
└── Level 5-6: □ Requirements list reviewed for peer

STEP 2: Problem Abstraction  
├── Level 1-2: □ Feynman explanation recorded
├── Level 3-4: □ Independence analysis for Target USV
│              □ Physical relationships for Tethered Drone
└── Level 5-6: □ Novel system abstraction completed

STEP 3: Function Structure
├── Level 1-2: □ Three mixing tap variants explained
├── Level 3-4: □ UAV VTOL function structure variants developed
│              □ Behavior analysis completed
└── Level 5-6: □ Novel function structure variation performed

STEP 4: Working Principles
├── Level 1-2: □ Brainstorming session participated
├── Level 3-4: □ Training Grenade brainstorm led
│              □ Classification criteria developed
└── Level 5-6: □ Facilitated brainstorm for novel problem

STEPS 5-6: Solution Variants
├── Level 1-2: □ Four mixing tap variants identified
├── Level 3-4: □ UAV Catapult variants developed (3-4)
└── Level 5-6: □ Variant development for novel problem

STEP 7: VDI 2225 Evaluation
├── Level 1-2: □ Evaluation chart completed (guided)
├── Level 3-4: □ Independent evaluation with sensitivity analysis
└── Level 5-6: □ Customized defense evaluation criteria

STEP 8: Decision Making
├── Level 1-2: □ Decision logic explained
├── Level 3-4: □ Decision documented with risk factors
└── Level 5-6: □ Decision defended under challenge

OVERALL PROGRESS: ___/42 evidence items (___%)

Current Level: _________ Target Date: _____________
```

### 7.4 Mastery Milestones

| Milestone | Evidence Count | Estimated Time | Celebration |
|-----------|---------------|----------------|-------------|
| Conceptual Design Apprentice | 14/42 (33%) | Week 1-2 | Can assist senior engineer |
| Conceptual Design Practitioner | 28/42 (67%) | Week 3-4 | Can execute independently |
| Conceptual Design Expert | 42/42 (100%) | Week 6-8 | Can mentor and innovate |

---

## 8. Skill 6: Concept Evaluation Application (engineering-concept-evaluation-assistant)

### 8.1 VDI 2225 Framework Review

The mixing tap example (Figure 6.41) demonstrates the standard VDI 2225 methodology:

**Rating Scale**:
- 0 = Không đạt yêu cầu (Unsatisfactory)
- 1 = Chỉ vừa đủ (Just tolerable)
- 2 = Đạt yêu cầu (Adequate)
- 3 = Tốt (Good)
- 4 = Rất tốt (Very good)

**Key Principles Demonstrated**:
1. All variants evaluated against same criteria
2. Criteria derived from requirements list
3. Weighting reflects relative importance
4. Weak spots highlighted for improvement
5. Close scores trigger additional investigation

### 8.2 Defense-Adapted Evaluation Criteria

Standard VDI 2225 criteria adapted for defense/security systems:

| Category | Standard Criteria | Defense Adaptation |
|----------|------------------|-------------------|
| Technical | Function fulfillment | Mission effectiveness |
| | Reliability | MTBF in operational environment |
| | Safety | MIL-STD-882 compliance |
| Economic | Manufacturing cost | Unit cost + lifecycle cost |
| | Assembly effort | Field assembly/disassembly |
| | Operating cost | Maintenance man-hours |
| Operational | Ergonomics | Operator training time |
| | Ease of use | Use under stress/night/NBC |
| | Maintenance | Three-level maintenance compatibility |
| Survivability | — | Ballistic resistance |
| | — | Environmental resilience |
| | — | Signature (RCS, IR, acoustic) |
| Logistics | — | Indigenous manufacturability |
| | — | Supply chain vulnerability |
| | — | Commonality with existing systems |

### 8.3 Application Example: Training Grenade Delay Mechanism

**Four Principle Solutions**:
- A: Mechanical striker-spring delay
- B: Pyrotechnic fuse delay
- C: Electronic IC timer
- D: Hydraulic dashpot delay

**VDI 2225 Evaluation**:

| Criterion | Weight | A (Mech) | B (Pyro) | C (Elec) | D (Hydr) |
|-----------|--------|----------|----------|----------|----------|
| Delay accuracy | 3 | 3 | 2 | 4 | 3 |
| Reusability | 4 | 4 | 0 | 3 | 4 |
| Environmental robustness | 3 | 4 | 3 | 2 | 3 |
| Safety (pre-arm) | 4 | 4 | 3 | 3 | 4 |
| Manufacturing complexity | 2 | 2 | 3 | 2 | 2 |
| Unit cost | 3 | 3 | 4 | 2 | 2 |
| Field maintainability | 2 | 3 | 4 | 2 | 2 |
| Indigenous capability | 3 | 4 | 4 | 2 | 3 |
| **Weighted Score** | | **79** | **60** | **59** | **70** |
| **Relative Score** | | **0.82** | **0.63** | **0.62** | **0.73** |

**Analysis**:
- **Winner**: Mechanical striker-spring delay (A) - highest score, robust, reusable
- **Runner-up**: Hydraulic dashpot (D) - consider if higher accuracy needed
- **Sensitivity**: If delay accuracy weight increased to 4, D becomes competitive
- **Weak Spot for A**: Manufacturing complexity (2) - simplification possible?

### 8.4 Application Example: UAV Catapult Launch Mechanism

**Four Principle Solutions**:
- A: Pneumatic piston launcher
- B: Bungee/elastic cord system
- C: Electromagnetic rail launcher
- D: Hydraulic catapult

**VDI 2225 Evaluation**:

| Criterion | Weight | A (Pneum) | B (Bungee) | C (EM) | D (Hydr) |
|-----------|--------|-----------|------------|--------|----------|
| Launch energy consistency | 3 | 4 | 2 | 4 | 4 |
| Portability | 4 | 2 | 4 | 1 | 2 |
| Setup time | 3 | 2 | 4 | 2 | 2 |
| Field reliability | 4 | 3 | 4 | 2 | 3 |
| Refire rate | 2 | 3 | 2 | 4 | 3 |
| Power independence | 3 | 3 | 4 | 1 | 3 |
| Maintenance simplicity | 3 | 3 | 4 | 1 | 2 |
| Unit cost | 2 | 2 | 4 | 1 | 2 |
| Indigenous manufacture | 3 | 3 | 4 | 1 | 3 |
| **Weighted Score** | | **76** | **97** | **49** | **73** |
| **Relative Score** | | **0.70** | **0.90** | **0.45** | **0.68** |

**Analysis**:
- **Winner**: Bungee/elastic system (B) - highest score, excellent field suitability
- **Weak Spot for B**: Launch energy consistency (2) - engineering solution required
- **Eliminated**: Electromagnetic (C) - poor on portability, power, maintenance
- **Decision**: Proceed with B, develop energy consistency solution (tensioning system)

### 8.5 Uncertainty Analysis Template

When scores are close (within 10%), perform uncertainty analysis:

```
UNCERTAINTY ANALYSIS: [System Name]
═══════════════════════════════════════════════════

Close Competitors: [A] = ___ vs [B] = ___

Scenario Analysis:
┌─────────────────────────────────────────────────┐
│ If [Criterion X] weight changes +1:             │
│   A = ___ vs B = ___                            │
│   Winner change? □ Yes □ No                     │
├─────────────────────────────────────────────────┤
│ If [Criterion Y] weight changes +1:             │
│   A = ___ vs B = ___                            │
│   Winner change? □ Yes □ No                     │
├─────────────────────────────────────────────────┤
│ Information gaps affecting decision:            │
│   1. ________________________________________   │
│   2. ________________________________________   │
│                                                 │
│ Investigation required before final selection:  │
│   1. ________________________________________   │
│   2. ________________________________________   │
└─────────────────────────────────────────────────┘

Recommendation: □ Proceed with A
                □ Proceed with B  
                □ Parallel development until ________
                □ Additional investigation required
```

---

## 9. Skill 7: Vietnamese Mnemonics (engineering-mnemonic-creator)

### 9.1 8-Step Process Mnemonic: "LÀMCẤUTÌMGIẢĐIỂMĐI"

**Full Mnemonic**:
```
LÀM CẤU TÌM GIẢ ĐIỂM ĐI
│   │   │   │   │     │
│   │   │   │   │     └── Đi = Determine next steps (Bước 8)
│   │   │   │   └── Điểm = Rate/Evaluate with VDI 2225 (Bước 7)
│   │   │   └── Giả = Solution variants firmed up (Bước 5-6)
│   │   └── Tìm = Search for working principles (Bước 4)
│   └── Cấu = Structure - Function structure (Bước 3)
└── Làm = Clarify and Abstract (Bước 1-2)
```

**Phrase Meaning**: "Làm cấu tìm giả điểm đi" ≈ "Do the structure, find the solution, score it, and go!"

**Expanded Memory Aid**:
- **LÀM**: Làm rõ nhiệm vụ (Clarify task) + Làm trừu tượng (Abstract)
- **CẤU**: Cấu trúc chức năng (Function structure)
- **TÌM**: Tìm kiếm nguyên lý (Search for principles)
- **GIẢ**: Giải pháp nguyên lý (Principle solutions)
- **ĐIỂM**: Điểm đánh giá VDI 2225 (VDI 2225 scores)
- **ĐI**: Đi tiếp - xác định bước sau (Go next - determine next steps)

### 9.2 Function Structure Variation Mnemonic: "BA-BIẾN-HÀNH-VI"

**Meaning**: "Ba biến hành vi" = "Three behavioral variants"

```
BA-BIẾN-HÀNH-VI
│  │     │    │
│  │     │    └── Vi (behavior) = Analyze behavior of each
│  │     └── Hành (action) = Functional arrangement
│  └── Biến (variants) = Create variations
└── Ba (three) = At least 3 variants
```

**Application Reminder**:
> "Before selecting working principles, remember BA-BIẾN-HÀNH-VI: create at least THREE function structure VARIANTs and analyze their BEHAVIOR."

### 9.3 Independence Criteria Mnemonic: "ĐỘC-LẬP-ĐÔI"

**Meaning**: "Độc lập đôi" = "Dual independence"

For systems with two controllable outputs (like V̇ and ϑ):

```
ĐỘC-LẬP-ĐÔI
│   │   │
│   │   └── Đôi = Both directions tested
│   └── Lập = Independent (lập = establish independence)
└── Độc = Each variable alone
```

**Test Pattern**:
- **Đ**: Change variable 1 → Check if variable 2 stays constant
- **L**: Log the result
- **Đ**: Change variable 2 → Check if variable 1 stays constant

**Defense Application** (Target USV):
- Change SPEED → Does HEADING stay constant? (Test 1)
- Change HEADING → Does SPEED stay constant? (Test 2)
- If both YES → ĐỘC-LẬP-ĐÔI achieved!

### 9.4 Brainstorming-Classification Mnemonic: "SỐ-PHÂN-CHỌN"

```
SỐ-PHÂN-CHỌN
│   │    │
│   │    └── Chọn = Select best group, then best solution
│   └── Phân = Classify into groups
└── Số = Generate many (số lượng = quantity)
```

**Process Reminder**:
1. **SỐ**: Generate QUANTITY of ideas (no judgment)
2. **PHÂN**: CLASSIFY into groups by characteristic
3. **CHỌN**: SELECT best group, then best solution within

### 9.5 VDI 2225 Evaluation Mnemonic: "ĐIỂM-CÂN-YẾU-ĐỀ"

```
ĐIỂM-CÂN-YẾU-ĐỀ
│    │   │   │
│    │   │   └── Đề = Đề xuất cải tiến (Propose improvements)
│    │   └── Yếu = Identify weak spots (điểm yếu)
│    └── Cân = Weight criteria (cân nhắc)
└── Điểm = Score each solution (chấm điểm)
```

**Evaluation Sequence**:
1. **ĐIỂM**: Score each solution on each criterion (0-4)
2. **CÂN**: Apply weights to get weighted scores
3. **YẾU**: Identify weak spots (low-scoring criteria)
4. **ĐỀ**: Propose improvements for weak spots

### 9.6 Defense Systems Mnemonic: "TUỲNH-VÔI-GỬI"

For the seven defense systems analyzed:

```
TUỲ NH VÔI GỬI
│   │  │   │
│   │  │   └── Gửi = Rescue Boat (Xuồng cứu hộ) - "gửi" = send/rescue
│   │  └── Vôi = VTOL UAV + Tethered (vôi = "lime" but sounds like "bay" = fly)
│   └── NH = Nhanh (quick) = UAV Catapult (quick launch)
└── TUỲ = Target systems: Target USV, Towed Target, Training Grenade
```

**Expanded**:
- **T**: Target USV (Tàu mục tiêu)
- **U**: Unmanned target towed (Mục tiêu kéo)
- **Y**: Lựu đạn huấn luyện (Training Grenade - Yêm = smoke/practice)
- **N**: Nạp phóng UAV (UAV Catapult - Nạp = load/launch)
- **H**: Hover + cánh cố định (VTOL)
- **V**: Vận hành dây buộc (Tethered drone)
- **G**: Ghe cứu hộ (Rescue boat)

### 9.7 Quick Reference Card

```
╔════════════════════════════════════════════════════════════════╗
║   SECTION 6.6 VIETNAMESE MNEMONIC QUICK REFERENCE              ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║   8-Step Process:        LÀM-CẤU-TÌM-GIẢ-ĐIỂM-ĐI               ║
║   Function Structure:    BA-BIẾN-HÀNH-VI (3 variants, analyze) ║
║   Independence Test:     ĐỘC-LẬP-ĐÔI (dual independence)       ║
║   Brainstorm-Select:     SỐ-PHÂN-CHỌN (many, classify, select) ║
║   VDI 2225:             ĐIỂM-CÂN-YẾU-ĐỀ (score, weight, improve)║
║   Defense Systems:       TUỲNH-VÔI-GỬI (7 systems)             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 10. Skill 8: Learning Architecture (engineering-learning-architecture-builder)

### 10.1 Prerequisites Map

```
                    SECTION 6.6 PREREQUISITES
                    ═══════════════════════
                              │
              ┌───────────────┼───────────────┐
              │               │               │
         Section 5       Section 6.3     Section 6.4-6.5
    (Requirements)    (Function Structure)  (Principles)
              │               │               │
              │               │               │
    ┌─────────┴────┐    ┌─────┴─────┐   ┌────┴────────┐
    │              │    │           │   │             │
Section 2.1    Section 4   Section 6.1  Section 6.2
(Systems)     (Planning)   (Intro)     (Abstraction)
```

**Critical Prerequisites** (must complete before Section 6.6):
1. Section 5.1-5.4: Requirements lists - creation and usage
2. Section 6.3: Function structures and their establishment
3. Section 6.4: Searching for working principles
4. Section 6.5: Selecting among concepts

**Helpful Prerequisites** (improve understanding):
1. Section 2.1: Systems, energy-material-signal flows
2. Section 4: Product planning process
3. Chapter 1: Introduction to systematic design

### 10.2 Learning Pathway: 12-Week Program

```
PHASE 1: FOUNDATION (Weeks 1-4)
══════════════════════════════
Week 1: Requirements Lists (Section 5)
Week 2: Function Structures (Section 6.3)
Week 3: Working Principles (Section 6.4)
Week 4: Concept Selection (Section 6.5)

PHASE 2: INTEGRATION (Weeks 5-8)
════════════════════════════════
Week 5: Section 6.6.1 Deep Dive - Steps 1-4
Week 6: Section 6.6.1 Deep Dive - Steps 5-8
Week 7: First Defense Application (Training Grenade)
Week 8: Second Defense Application (UAV Catapult)

PHASE 3: MASTERY (Weeks 9-12)
═════════════════════════════
Week 9: Third Defense Application (Target USV)
Week 10: Complex Application (UAV VTOL)
Week 11: Integration Review + Gap Remediation
Week 12: Mastery Verification + Teaching Practice
```

### 10.3 Detailed Week Plan for Section 6.6 (Weeks 5-6)

**Week 5: Section 6.6 - Steps 1-4**

| Day | Morning (2 hr) | Afternoon (2 hr) | Evening (1 hr) |
|-----|---------------|------------------|----------------|
| Mon | Read Steps 1-2 + Figures 6.26-6.29 | Requirements list analysis | Quiz: Abstraction |
| Tue | Read Step 3 + Figures 6.30-6.32 | Function structure variation | Drill: Identify independence |
| Wed | Read Step 4 + Figures 6.33-6.36 | Brainstorming technique | Practice: Classification |
| Thu | Review Steps 1-4 with notes | Training Grenade Steps 1-4 | Self-assessment |
| Fri | Peer discussion | UAV Catapult Steps 1-4 | Learning journal |

**Week 6: Section 6.6 - Steps 5-8**

| Day | Morning (2 hr) | Afternoon (2 hr) | Evening (1 hr) |
|-----|---------------|------------------|----------------|
| Mon | Read Steps 5-6 + Figures 6.37-6.40 | Solution variant development | Quiz: Variant criteria |
| Tue | Read Step 7 + Figure 6.41 | VDI 2225 practice | Drill: Evaluation |
| Wed | Read Step 8 | Training Grenade Steps 5-8 | Complete evaluation |
| Thu | Review complete process | UAV Catapult Steps 5-8 | Self-assessment |
| Fri | Full 8-step practice | Mentor review session | Learning journal |

### 10.4 Time Allocation

| Activity | Hours | Percentage |
|----------|-------|------------|
| Reading and note-taking | 12 | 20% |
| Worked example analysis | 10 | 17% |
| Defense system application | 20 | 33% |
| Self-assessment and quizzes | 8 | 13% |
| Review and consolidation | 6 | 10% |
| Mentor/peer sessions | 4 | 7% |
| **Total for Section 6.6** | **60** | **100%** |

### 10.5 Skill Dependencies for Each Step

| Step | Primary Skill | Supporting Skills | Estimated Acquisition Time |
|------|--------------|-------------------|---------------------------|
| Step 1 | Requirements engineering | Customer interviews, standards interpretation | 20-30 hours |
| Step 2 | Physical reasoning | Mathematics, physics fundamentals | 15-25 hours |
| Step 3 | Systems thinking | Block diagram creation, behavior analysis | 20-30 hours |
| Step 4 | Creative problem solving | Brainstorming facilitation, research skills | 15-25 hours |
| Step 5-6 | Design synthesis | Sketching, technical communication | 15-25 hours |
| Step 7 | Analytical evaluation | Decision analysis, sensitivity analysis | 10-20 hours |
| Step 8 | Project management | Risk assessment, planning | 5-10 hours |

### 10.6 Certification Milestones

```
SECTION 6.6 CERTIFICATION PATHWAY
═════════════════════════════════

Level 1: Conceptual Design Fundamentals (Week 6)
├── □ Pass 8-step identification quiz (≥80%)
├── □ Complete guided mixing tap walkthrough
└── □ Submit Chunk A-D comprehension evidence

Level 2: Conceptual Design Practitioner (Week 8)
├── □ Complete Training Grenade conceptual design
├── □ Complete UAV Catapult conceptual design
├── □ Pass VDI 2225 evaluation quiz (≥80%)
└── □ Submit peer-reviewed design package

Level 3: Conceptual Design Expert (Week 12)
├── □ Complete Target USV conceptual design
├── □ Complete UAV VTOL conceptual design
├── □ Conduct peer teaching session
├── □ Pass comprehensive exam (≥85%)
└── □ Submit portfolio of 4 defense system concepts

Level 4: Conceptual Design Master (Post-program)
├── □ Lead conceptual design for production project
├── □ Mentor 2+ junior engineers through process
├── □ Contribute to methodology improvement
└── □ Publish/present case study
```

---

## 11. Skill 9: Systems Mapping (engineering-systems-mapper)

### 11.1 System Boundary Definition

**Section 6.6 Learning System Boundary**:

```
┌─────────────────────────────────────────────────────────────┐
│                     INSIDE BOUNDARY                         │
│  (Variables you can influence)                              │
│                                                             │
│  • Study time allocation                                    │
│  • Practice problem selection                               │
│  • Self-assessment frequency                                │
│  • Peer interaction level                                   │
│  • Note-taking methods                                      │
│  • Application project selection (defense systems)          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    OUTSIDE BOUNDARY                         │
│  (Given/fixed)                                              │
│                                                             │
│  • Pahl & Beitz methodology (fixed)                         │
│  • Vietnamese defense context (fixed)                       │
│  • Available mentor time (constrained)                      │
│  • Material availability (English + Vietnamese)             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    INTERFACE POINTS                         │
│                                                             │
│  • Feedback from design reviews                             │
│  • Progress assessment results                              │
│  • Real project requirements (when available)               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 11.2 Stocks and Flows in Learning System

**Material Stocks**:
| Stock | Current | Target | Unit |
|-------|---------|--------|------|
| Documented conceptual designs | 0 | 4 | completed designs |
| VDI 2225 evaluations | 0 | 6 | evaluated concepts |
| Defense system applications | 0 | 7 | systems applied |

**Information Stocks**:
| Stock | Current | Target | Unit |
|-------|---------|--------|------|
| 8-step process knowledge | Low | High | proficiency level |
| Function structure variation skill | Low | High | proficiency level |
| VDI 2225 evaluation skill | Low | High | proficiency level |

**Capability Stocks**:
| Stock | Current | Target | Unit |
|-------|---------|--------|------|
| Brainstorming facilitation | Novice | Competent | skill level |
| Physical reasoning for abstraction | Novice | Proficient | skill level |
| Decision defense capability | Novice | Competent | skill level |

**Key Flows**:
| Flow | Rate | Unit | Delay |
|------|------|------|-------|
| Study hours invested | 10 | hours/week | immediate |
| Concepts practiced | 2 | concepts/week | 1-2 days |
| Feedback received | 1 | review/week | 3-5 days |
| Knowledge consolidation | Variable | % retention/day | 24-48 hours |

### 11.3 Feedback Loops

**R1: Practice-Competence Reinforcing Loop**

```
    ┌──────────────────────────────────────────────┐
    │                                              │
    ▼                                              │
[Practice Hours] ─+→ [Skill Development] ─+→ [Confidence] ─+→ [Motivation] ──+
                                                                              │
                                                                              │
    ◄─────────────────────────────────────────────────────────────────────────┘

R1: More practice → Better skills → More confidence → 
    More motivation → More practice (REINFORCING GROWTH)
```

**B1: Time-Exhaustion Balancing Loop**

```
    ┌────────────────────────────────────────────────────┐
    │                                                    │
    ▼                                                    │
[Study Hours] ─+→ [Fatigue] ─+→ [Reduced Efficiency] ─-→ [Effective Learning] 
                                                                   │
                                                                   │
    ◄────────────────── -─ [Need for More Study] ◄────────────────┘

B1: More study → More fatigue → Less efficiency → Less learning →
    Need more study (BALANCING - prevents overwork)
```

**R2: Application-Understanding Reinforcing Loop**

```
[Defense System Application] ─+→ [Contextual Understanding] ─+→
[Ability to Abstract] ─+→ [Transfer to New Systems] ─+→
[More Diverse Applications] ─+→ [Defense System Application]

R2: Apply to defense system → Deeper understanding → Better abstraction →
    Can transfer to more systems → More applications (REINFORCING)
```

**B2: Complexity-Overwhelm Balancing Loop**

```
[Attempt Complex Problem] ─+→ [Confusion] ─+→ [Frustration] ─-→
[Willingness to Try] ─-→ [Problem Complexity Attempted]

B2: Try hard problem → Get confused → Get frustrated →
    Avoid hard problems (BALANCING - prevents overwhelm)
```

### 11.4 Leverage Point Analysis

| Level | Leverage Point | Current State | Intervention | Impact |
|-------|---------------|---------------|--------------|--------|
| **L3** | Goals | "Understand methodology" | "Complete 4 defense designs" | Very High - shifts from passive to active learning |
| **L4** | Self-organizing | Individual study | Peer learning group | High - creates R1 reinforcing loop |
| **L6** | Information flow | Monthly review | Weekly self-assessment + feedback | High - compresses B2 loop |
| **L7** | Rules | "Read then practice" | "Practice while reading" (JIT) | Medium - enables R2 loop |
| **L9** | Delays | 1-week feedback | Same-day AI feedback | Medium - accelerates R1 loop |
| **L12** | Parameters | 10 hours/week study | 15 hours/week | Low - linear improvement |

### 11.5 Causal Loop Diagram: Section 6.6 Mastery System

```
                    SECTION 6.6 MASTERY CAUSAL LOOP DIAGRAM
    ═══════════════════════════════════════════════════════════════════

                         ┌─────────────────────────┐
                         │                         │
                         ▼                         │
    ┌──────────┐    +   ┌──────────┐    +   ┌──────────┐
    │  Study   │───────→│  Skill   │───────→│Confidence│
    │  Hours   │        │ Mastery  │        │          │
    └──────────┘        └──────────┘        └────┬─────┘
         ▲                   │                    │
         │                   │                    │ +
         │                   │                    ▼
         │              +    │              ┌──────────┐
         │    ┌──────────────┘              │Motivation│
         │    │                             │ to Learn │
         │    ▼                             └────┬─────┘
         │ ┌──────────┐                          │
         │ │ Defense  │                          │ +
         │ │ System   │◄─────────────────────────┘
         │ │Application│
         │ └────┬─────┘
         │      │
         │      │ +          R1: Practice-Competence
         │      ▼            (Reinforcing Growth)
         │ ┌──────────┐
         │ │ Transfer │
         │ │ Ability  │
         │ └────┬─────┘
         │      │
         │      │ +          R2: Application-Understanding
         └──────┘            (Reinforcing Transfer)


    BALANCING LOOPS:
    B1: Study Hours → Fatigue → Efficiency↓ → Learning↓
    B2: Complex Problem → Confusion → Frustration → Avoidance
```

### 11.6 Recommended High-Leverage Interventions

**Intervention 1: Goal Restructuring (L3)**
- FROM: "Master Section 6.6 methodology"
- TO: "Complete conceptual design for 4 defense systems with documented VDI 2225 evaluation"
- WHY: Shifts from knowledge acquisition to capability demonstration

**Intervention 2: Feedback Acceleration (L9)**
- FROM: Weekly mentor review
- TO: Daily AI check + Weekly mentor review
- WHY: Compresses R1 loop from 7-day to 1-day cycle

**Intervention 3: Peer Learning System (L4)**
- FROM: Individual study
- TO: Study group with shared application problems
- WHY: Creates new reinforcing loop through teaching others

---

## 12. Skill 10: Focus Session Optimization (engineering-focus-session-optimizer)

### 12.1 Optimal Session Structure for Section 6.6

**Standard Learning Session (2 hours)**:

```
SESSION STRUCTURE: DEEP LEARNING MODE
═════════════════════════════════════

00:00-05:00  Warm-up: Review previous session notes
05:00-30:00  Pomodoro 1: New material reading (25 min)
30:00-35:00  Break: Movement, water
35:00-60:00  Pomodoro 2: Worked example analysis (25 min)
60:00-70:00  Extended break: Mental reset
70:00-95:00  Pomodoro 3: Application practice (25 min)
95:00-100:00 Break: Prepare for consolidation
100:00-120:00 Consolidation: Notes, self-assessment, planning
```

**Application Session (90 minutes)**:

```
SESSION STRUCTURE: APPLICATION MODE
═══════════════════════════════════

00:00-05:00  Review: Requirements for application task
05:00-35:00  Pomodoro 1: Steps 1-3 execution
35:00-40:00  Quick check: Function structure quality
40:00-70:00  Pomodoro 2: Steps 4-6 execution
70:00-75:00  Quick check: Solution variants quality
75:00-90:00  Documentation + Planning next session
```

### 12.2 Task-Specific Time Slicing

**Step 1-2 (Task Clarification + Abstraction)**:
| Task | Time | Pomodoros |
|------|------|-----------|
| Requirements list review | 15 min | 0.5 |
| Standards research | 25 min | 1 |
| Physical relationship derivation | 25 min | 1 |
| Overall function diagram | 15 min | 0.5 |
| Independence criteria identification | 10 min | — |
| **Total** | **90 min** | **3** |

**Step 3 (Function Structure)**:
| Task | Time | Pomodoros |
|------|------|-----------|
| Subfunction identification | 15 min | 0.5 |
| Variant 1 structure + behavior | 25 min | 1 |
| Variant 2 structure + behavior | 25 min | 1 |
| Variant 3 structure + behavior | 25 min | 1 |
| Comparison and selection | 15 min | 0.5 |
| **Total** | **105 min** | **4** |

**Step 4 (Working Principles)**:
| Task | Time | Pomodoros |
|------|------|-----------|
| Task reformulation | 10 min | — |
| Brainstorming session | 25 min | 1 |
| Idea classification | 25 min | 1 |
| Group analysis | 25 min | 1 |
| Group selection | 15 min | 0.5 |
| **Total** | **100 min** | **3.5** |

**Steps 5-8 (Solution Development + Evaluation)**:
| Task | Time | Pomodoros |
|------|------|-----------|
| Variant A development | 20 min | — |
| Variant B development | 20 min | — |
| Variant C development | 20 min | — |
| Variant D development | 20 min | — |
| VDI 2225 evaluation setup | 15 min | 0.5 |
| Scoring all variants | 25 min | 1 |
| Uncertainty analysis | 15 min | 0.5 |
| Decision documentation | 15 min | 0.5 |
| **Total** | **150 min** | **6** |

### 12.3 Fatigue Prevention Strategies

**Decision Quality Protection**:
```
CRITICAL DECISIONS BY SESSION TYPE
══════════════════════════════════

MORNING SESSIONS (Peak alertness):
├── Function structure selection
├── VDI 2225 weighting
├── Final concept selection
└── Design review participation

AFTERNOON SESSIONS (Good alertness):
├── Brainstorming facilitation
├── Solution variant development
├── Classification criteria definition
└── Requirements analysis

EVENING SESSIONS (Lower alertness):
├── Reading new material
├── Note organization
├── Quiz/self-assessment
└── Next day planning

AVOID IN LOW ALERTNESS:
✗ VDI 2225 scoring (bias risk)
✗ Dismissing solution alternatives
✗ Final selections without review
✗ Complex physical derivations
```

**Rest Intervals**:
| Session Length | Rest Type | Duration |
|---------------|-----------|----------|
| After 25 min | Micro-break | 5 min |
| After 50 min | Short break | 10 min |
| After 90 min | Long break | 20-30 min |
| After 3 hours | Major break | 45-60 min |
| Daily | Sleep | 7-8 hours |
| Weekly | Rest day | 1 full day |

### 12.4 Concentration Recovery Techniques

**Between Pomodoros (5-minute breaks)**:
1. Stand and stretch (30 seconds)
2. Look at distant object (20-20-20 rule)
3. Deep breathing (3 cycles)
4. Water intake (200ml)
5. Brief movement (walk to window and back)

**After Extended Sessions (20-minute breaks)**:
1. Leave study area completely
2. Physical activity (walk, light exercise)
3. Avoid screens
4. Social interaction (brief)
5. Healthy snack if needed

**Concentration Reset (when focus lost)**:
```
FOCUS RECOVERY PROTOCOL
═══════════════════════
1. Stop current task
2. Note where you stopped
3. 5-minute complete break
4. Return to REVIEW (not new material)
5. Gradually increase difficulty
6. If still unfocused: switch to different task type
7. If persistent: end session early, rest, return fresh
```

---

## 13. Skill 11: Self-Assessment Rubrics (engineering-self-assessment-rubric-generator)

### 13.1 Requirements List Self-Assessment (Step 1)

```
REQUIREMENTS LIST QUALITY RUBRIC
════════════════════════════════

Score each item 0-4, then calculate percentage

CONTENT COMPLETENESS:
□ All functional requirements captured        ___/4
□ Performance parameters quantified          ___/4
□ Constraints explicitly stated              ___/4
□ Safety requirements present                ___/4
□ Environmental conditions specified         ___/4
□ Interface requirements defined             ___/4
                                Subtotal:    ___/24

ORGANIZATION:
□ Demands (D) vs Wishes (W) classified       ___/4
□ Logical grouping (Geometry, Forces, etc.)  ___/4
□ No contradictions between requirements     ___/4
□ Traceability to source maintained          ___/4
                                Subtotal:    ___/16

QUALITY:
□ Requirements are verifiable                ___/4
□ Appropriate level of detail                ___/4
□ Evolved from initial brief (documented)    ___/4
□ Standards referenced correctly             ___/4
                                Subtotal:    ___/16

DEFENSE-SPECIFIC:
□ MIL-STD environmental requirements         ___/4
□ Operational scenario coverage              ___/4
□ Logistics/maintenance considerations       ___/4
                                Subtotal:    ___/12

TOTAL: ___/68 = ____%

≥90%: Excellent - Ready for abstraction
80-89%: Good - Minor refinements needed
70-79%: Acceptable - Significant gaps
<70%: Insufficient - Major revision required
```

### 13.2 Problem Abstraction Self-Assessment (Step 2)

```
ABSTRACTION QUALITY RUBRIC
══════════════════════════

ESSENTIAL PROBLEM:
□ Core function stated solution-neutrally    ___/4
□ Physical principle identified              ___/4
□ Mathematical relationships derived         ___/4
                                Subtotal:    ___/12

INDEPENDENCE ANALYSIS:
□ Control variables identified               ___/4
□ Output variables identified                ___/4
□ Independence requirements specified        ___/4
□ Coupling effects documented                ___/4
                                Subtotal:    ___/16

ALTERNATIVE CONSIDERATION:
□ At least 3 alternative approaches listed   ___/4
□ Dismissals explicitly justified            ___/4
□ Physical reasoning for dismissals          ___/4
                                Subtotal:    ___/12

DOCUMENTATION:
□ Overall function diagram complete          ___/4
□ Inputs/outputs clearly shown               ___/4
□ Flows (E-M-S) indicated                    ___/4
                                Subtotal:    ___/12

TOTAL: ___/52 = ____%
```

### 13.3 Function Structure Self-Assessment (Step 3)

```
FUNCTION STRUCTURE QUALITY RUBRIC
═════════════════════════════════

SUBFUNCTION IDENTIFICATION:
□ All necessary subfunctions present         ___/4
□ Solution-neutral naming                    ___/4
□ Appropriate decomposition level            ___/4
                                Subtotal:    ___/12

STRUCTURAL VARIATION:
□ At least 3 variants developed              ___/4
□ Variants are meaningfully different        ___/4
□ Each variant fully specified               ___/4
                                Subtotal:    ___/12

BEHAVIORAL ANALYSIS:
□ Behavior of each variant analyzed          ___/4
□ Independence verified/refuted for each     ___/4
□ Edge cases considered (pressure diff, etc.) ___/4
□ Characteristic curves/descriptions provided ___/4
                                Subtotal:    ___/16

SELECTION:
□ Clear selection with rationale             ___/4
□ Best behavior characteristics documented   ___/4
                                Subtotal:    ___/8

TOTAL: ___/48 = ____%
```

### 13.4 Working Principle Search Self-Assessment (Step 4)

```
WORKING PRINCIPLE SEARCH RUBRIC
═══════════════════════════════

BRAINSTORMING:
□ Diverse methods used                       ___/4
□ Quantity of ideas (≥10-15 concepts)        ___/4
□ No premature judgment during generation    ___/4
□ Ideas captured visually (sketches)         ___/4
                                Subtotal:    ___/16

CLASSIFICATION:
□ Classification criteria explicitly defined  ___/4
□ Groups formed by meaningful characteristics ___/4
□ Each group analyzed for pros/cons          ___/4
□ Physical constraints for each group noted  ___/4
                                Subtotal:    ___/16

SELECTION:
□ Best group selected with rationale         ___/4
□ Independence requirement verified          ___/4
□ Production feasibility considered          ___/4
                                Subtotal:    ___/12

TOTAL: ___/44 = ____%
```

### 13.5 VDI 2225 Evaluation Self-Assessment (Step 7)

```
VDI 2225 EVALUATION RUBRIC
══════════════════════════

CRITERIA:
□ All requirements list items covered        ___/4
□ Criteria are independent (no double-count) ___/4
□ Weighting justified and documented         ___/4
                                Subtotal:    ___/12

SCORING:
□ Consistent scale (0-4) applied             ___/4
□ Evidence for each score documented         ___/4
□ Same evaluator/team for all variants       ___/4
                                Subtotal:    ___/12

ANALYSIS:
□ Weak spots identified for each variant     ___/4
□ Uncertainty analysis for close scores      ___/4
□ Sensitivity to weight changes checked      ___/4
□ Improvement paths noted                    ___/4
                                Subtotal:    ___/16

DECISION:
□ Winner clearly stated                      ___/4
□ Alternative preserved for revisit          ___/4
□ Conditions for decision change documented  ___/4
                                Subtotal:    ___/12

TOTAL: ___/52 = ____%
```

### 13.6 Complete Conceptual Design Self-Assessment

```
COMPLETE CONCEPTUAL DESIGN ASSESSMENT
═════════════════════════════════════

STEP 1: Requirements List             ___/68  = ___%  [≥80%? □]
STEP 2: Abstraction                   ___/52  = ___%  [≥80%? □]
STEP 3: Function Structure            ___/48  = ___%  [≥80%? □]
STEP 4: Working Principles            ___/44  = ___%  [≥80%? □]
STEP 5-6: Solution Variants           ___/40  = ___%  [≥80%? □]
STEP 7: VDI 2225 Evaluation           ___/52  = ___%  [≥80%? □]
STEP 8: Decision Documentation        ___/24  = ___%  [≥80%? □]
─────────────────────────────────────────────────────────────────
OVERALL:                              ___/328 = ___%

INTERPRETATION:
≥90% (295+): Excellent - Production-ready conceptual design
80-89% (262-294): Good - Minor revisions before embodiment
70-79% (230-261): Acceptable - Significant rework needed
<70% (<230): Insufficient - Major revision required

WEAKEST STEP: _____________ (Focus remediation here)
STRONGEST STEP: _____________ (Leverage this in future)
```

---

## 14. Skill 12: Targeted Drill Exercises (engineering-targeted-drill-master)

### 14.1 Drill Set A: Function Structure Variation

**Drill A1: Identify Independence Requirements** (10 minutes)

Given system: Target USV with speed and heading control

Task: Write the independence requirements in the format used for the mixing tap (V̇ and ϑ).

_Model Answer:_
```
1. Upon changing speed setting (Sv), heading must remain unchanged
   → Heading must be independent of Sv
2. Upon changing heading setting (Sh), speed must remain unchanged
   → Speed must be independent of Sh
3. Both settings must approach zero together (stop condition)
4. Physical basis: Differential thrust + rudder OR dual propeller
```

**Drill A2: Create Three Function Structure Variants** (30 minutes)

Given system: Tethered Drone power and data transmission

Task: Create three function structure variants showing different arrangements of power delivery and data transmission functions.

_Model Answer Outline:_
```
Variant 1: Power → Data → Transmit
├── Power conditioning first
├── Data modulation on power line
└── Combined transmission

Variant 2: Separate Power and Data → Combine
├── Independent power path
├── Independent data path
└── Tether combines both

Variant 3: Data → Power Adjusted → Transmit
├── Data demand determines power
├── Power adjusts to data needs
└── Coupled transmission
```

**Drill A3: Behavioral Analysis** (20 minutes)

Given: Three function structure variants for Xuồng Cứu hộ (rescue boat) speed and maneuverability

Task: For each variant, identify:
1. What happens if supply (water flow) varies?
2. What happens at extreme conditions (high speed turning)?
3. Which variant provides most stable behavior?

### 14.2 Drill Set B: Brainstorming and Classification

**Drill B1: Timed Brainstorming** (15 minutes)

System: Training Grenade visual effect generation

Task: In 10 minutes, generate as many ideas as possible for producing visible smoke/flash without using actual pyrotechnics. Classify in remaining 5 minutes.

_Model Answer Categories:_
```
Chemical (non-explosive): Smoke bombs, chemical reaction pouches
Mechanical: Compressed air + powder release, spring-loaded markers
Electronic: LED flash, strobe, colored smoke machine
Physical: Colored powder burst (like Holi powder), paint capsule
```

**Drill B2: Classification Criteria Definition** (15 minutes)

Given: 12 brainstormed ideas for UAV Catapult launch mechanism

Task: Define 4-5 classification criteria that would help identify groups with different characteristics.

_Model Answer:_
```
Criterion 1: Energy storage type (chemical, mechanical, electrical)
Criterion 2: Portability (man-portable, vehicle-mounted, fixed)
Criterion 3: Power source requirement (none, battery, generator)
Criterion 4: Refire preparation time (<1 min, 1-5 min, >5 min)
Criterion 5: Environmental sensitivity (rain, dust, temperature)
```

**Drill B3: Group Analysis** (20 minutes)

Given: Three groups of launch mechanisms:
- Group A: Pneumatic/hydraulic systems
- Group B: Elastic/spring systems
- Group C: Electromagnetic systems

Task: For each group, list 3 advantages, 3 disadvantages, and 2 best use cases.

### 14.3 Drill Set C: VDI 2225 Evaluation

**Drill C1: Criteria Weighting Justification** (15 minutes)

System: Target USV for gunnery training

Task: Given these criteria, assign weights (1-4) and justify each:
- Maximum speed
- Endurance
- Signature (radar/visual)
- Unit cost
- Sea state tolerance
- Programmable maneuvers

**Drill C2: Scoring Consistency Check** (20 minutes)

Given: Pre-scored VDI 2225 table with deliberate inconsistencies

Task: Identify the inconsistencies and explain why they're problematic.

_Example Inconsistency:_
```
Variant A: "Simple manufacturing" = 3, "Low cost" = 2
Variant B: "Complex manufacturing" = 2, "Low cost" = 3
→ Inconsistent: Complex manufacturing typically means higher cost
```

**Drill C3: Uncertainty Analysis Practice** (20 minutes)

Given: Two variants with scores 78 and 82 (within 5%)

Task: 
1. List 3 criteria whose weight change could flip the ranking
2. Perform sensitivity analysis on one criterion
3. Recommend: proceed with winner, parallel development, or more investigation?

### 14.4 Drill Set D: Complete Process Integration

**Drill D1: Process Sequencing** (10 minutes)

Given: Scrambled list of 15 activities from conceptual design

Task: Arrange in correct order, identify which step each belongs to.

_Example Activities:_
- Brainstorming session
- VDI 2225 scoring
- Requirements list revision
- Function structure variant 2 development
- Working principle classification
- ...

**Drill D2: Gap Identification** (20 minutes)

Given: Incomplete conceptual design package for Towed Target system

Task: List all missing elements that would prevent successful transition to embodiment design.

**Drill D3: Time-Pressured Concept Development** (60 minutes)

Task: Complete Steps 1-4 for a new system (UAV VTOL transition mechanism) within 60 minutes. Accept "good enough" quality—speed over perfection.

Purpose: Build fluency, reduce perfectionism, prove capability under time pressure.

### 14.5 Drill Progression Schedule

| Week | Drill Focus | Drill IDs | Total Time |
|------|-------------|-----------|------------|
| 1 | Function Structure | A1, A2 | 40 min |
| 2 | Function Structure + Classification | A3, B1 | 35 min |
| 3 | Classification + VDI 2225 | B2, B3, C1 | 50 min |
| 4 | VDI 2225 | C2, C3 | 40 min |
| 5 | Integration | D1, D2 | 30 min |
| 6 | Speed Practice | D3 | 60 min |
| 7-8 | Mixed Review | All categories | 60 min each |

---

## 15. Skill 13: Learning Journal Templates (engineering-learning-journal-keeper)

### 15.1 Session Reflection Template (15 minutes)

```
SECTION 6.6 LEARNING JOURNAL - SESSION ENTRY
════════════════════════════════════════════

Date: _____________ Session #: _____ Duration: _____ min

CONTENT COVERED:
□ Step 1-2  □ Step 3  □ Step 4  □ Steps 5-6  □ Step 7  □ Step 8
Specific topics: _____________________________________________

KEY INSIGHTS (What clicked today?):
1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________

CONFUSIONS (What's still unclear?):
1. ___________________________________________________________
   → Resolution plan: ________________________________________
2. ___________________________________________________________
   → Resolution plan: ________________________________________

CONNECTIONS (How does this relate to previous learning?):
Link to: _________________ Connection: _______________________
Link to: _________________ Connection: _______________________

APPLICATION IDEAS (How could I use this for defense systems?):
System: _________________ Application: _______________________
System: _________________ Application: _______________________

MISTAKES MADE (What would I do differently?):
1. ___________________________________________________________
2. ___________________________________________________________

EMOTIONAL STATE:
Engagement: Low □ Medium □ High □
Confidence: Low □ Medium □ High □
Frustration: Low □ Medium □ High □

NEXT SESSION PLAN:
Topic: _______________________________________________________
Preparation needed: __________________________________________
```

### 15.2 Daily Consolidation Template (10 minutes)

```
DAILY CONSOLIDATION - SECTION 6.6
═════════════════════════════════

Date: _____________

TODAY'S MAIN LEARNING (1-2 sentences):
______________________________________________________________
______________________________________________________________

FEYNMAN CHECK: Can I explain this to a non-engineer?
□ Yes - Confident    □ Mostly - Some gaps    □ No - Need review

THREE THINGS I CAN NOW DO THAT I COULDN'T YESTERDAY:
1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________

ONE THING THAT SURPRISED ME:
______________________________________________________________

PATTERN RECOGNITION (Similarities to other design methods/systems):
______________________________________________________________

DEFENSE SYSTEM INSIGHT (Specific to my target systems):
______________________________________________________________

SPACED REPETITION QUEUE (What to review tomorrow):
□ _______________________________________
□ _______________________________________
□ _______________________________________

TOMORROW'S FOCUS:
______________________________________________________________
```

### 15.3 Weekly Analysis Template (30 minutes)

```
WEEKLY ANALYSIS - SECTION 6.6 MASTERY
═════════════════════════════════════

Week #: _____ Dates: _____________ to _____________

PROGRESS SUMMARY:
Steps mastered this week: □ 1-2  □ 3  □ 4  □ 5-6  □ 7  □ 8
Defense systems applied to: _________________________________
Total study hours: _____
Drills completed: _____ / _____ planned

MASTERY EVIDENCE COLLECTED:
□ ___________________________________________________________
□ ___________________________________________________________
□ ___________________________________________________________

BREAKTHROUGH MOMENTS:
Date: ________ Insight: _____________________________________
Date: ________ Insight: _____________________________________

PERSISTENT DIFFICULTIES:
1. Topic: ___________________________________________________
   Why difficult: ___________________________________________
   Strategy: ________________________________________________
   
2. Topic: ___________________________________________________
   Why difficult: ___________________________________________
   Strategy: ________________________________________________

MISCONCEPTIONS CORRECTED:
Before: _____________________________________________________
After: ______________________________________________________

LEARNING VELOCITY ASSESSMENT:
Compared to last week: □ Faster  □ Same  □ Slower
Reason: ____________________________________________________

WHAT WORKED WELL (Learning methods):
1. __________________________________________________________
2. __________________________________________________________

WHAT TO CHANGE (Process improvements):
1. __________________________________________________________
2. __________________________________________________________

NEXT WEEK PRIORITIES:
1. __________________________________________________________
2. __________________________________________________________
3. __________________________________________________________

OVERALL CONFIDENCE LEVEL: ___/10

CELEBRATION (What am I proud of this week?):
______________________________________________________________
```

### 15.4 Defense System Application Journal Template

```
DEFENSE SYSTEM APPLICATION JOURNAL
══════════════════════════════════

System: _____________________________ Date: _____________
Phase: □ Conceptual Design  □ Practice Application  □ Real Project

STEPS APPLIED:
□ Step 1: Requirements List
  Quality score: ___/68 = ___%
  Key insight: ________________________________________________
  
□ Step 2: Abstraction
  Quality score: ___/52 = ___%
  Independence requirements: __________________________________
  
□ Step 3: Function Structure
  Variants created: _____
  Selected variant rationale: _________________________________
  
□ Step 4: Working Principles
  Brainstorming ideas generated: _____
  Groups identified: _____
  Selected group: _____________________________________________
  
□ Steps 5-6: Solution Variants
  Variants developed: _____
  Strongest variant: __________________________________________
  
□ Step 7: VDI 2225 Evaluation
  Winner: _________________ Score: _____
  Runner-up: _________________ Score: _____
  Key differentiator: _________________________________________
  
□ Step 8: Decision
  Decision: ___________________________________________________
  Risk factors: _______________________________________________
  Next steps: _________________________________________________

WHAT TRANSFERRED WELL FROM MIXING TAP EXAMPLE:
______________________________________________________________

WHAT REQUIRED ADAPTATION FOR DEFENSE CONTEXT:
______________________________________________________________

VIETNAMESE CONSTRAINTS ENCOUNTERED:
□ Supply chain  □ Standards  □ Manufacturing  □ Cost  □ Other: ____
How addressed: ________________________________________________

LESSONS FOR NEXT DEFENSE SYSTEM APPLICATION:
1. ___________________________________________________________
2. ___________________________________________________________
3. ___________________________________________________________
```

### 15.5 Misconception Tracking Log

```
MISCONCEPTION TRACKING LOG - SECTION 6.6
════════════════════════════════════════

Entry Date: _____________

MISCONCEPTION IDENTIFIED:
I believed: __________________________________________________
______________________________________________________________

TRIGGER (How did I discover this was wrong?):
______________________________________________________________

CORRECT UNDERSTANDING:
The truth is: ________________________________________________
______________________________________________________________

EVIDENCE/REFERENCE:
P&B Section: _________ Page: _________ Figure: _________
Key quote: ___________________________________________________

ROOT CAUSE (Why did I think this?):
□ Prior experience in different context
□ Intuitive but incorrect assumption
□ Misread/misunderstood text
□ Incomplete initial learning
□ Other: ____________________________________________________

IMPACT ON MY DESIGNS (What would I have done wrong?):
______________________________________________________________

CORRECTION STRATEGY:
To remember the correct understanding, I will:
□ Create mnemonic: ___________________________________________
□ Practice drill: ____________________________________________
□ Teach someone else
□ Add to spaced repetition queue

VERIFICATION (How will I know I've corrected this?):
Test question: _______________________________________________
Expected answer: _____________________________________________

FOLLOW-UP CHECK DATE: _____________
Verified corrected? □ Yes □ No, need more work
```

---

## 16. Defense System Applications

### 16.1 Target USV: Conceptual Design Application Summary

**Step 1-2: Task Clarification and Abstraction**
- Primary function: Provide realistic naval target for gunnery training
- Independence requirements: Speed and heading must be independently controllable
- Physical basis: Hydrodynamic forces, propulsion efficiency, wave loading
- Abstraction: "Provide controlled surface movement with survivable signature"

**Step 3: Function Structure (Three Variants)**

| Variant | Structure | Behavior | Suitability |
|---------|-----------|----------|-------------|
| V1 | Single prop + rudder | Speed/heading coupled at low speed | Poor for slow maneuvering |
| V2 | Twin fixed props | Speed affects turning radius | Medium - simple but limited |
| V3 | Twin steerable pods | Independent control | Optimal for programmable patterns |

**Step 4: Working Principles for Propulsion**
- Brainstormed: Surface propeller, water jet, paddlewheel, podded drive, air propeller
- Classification by: Efficiency, low-speed control, maintenance, survivability
- Selected group: Water jet (best low-speed control, survivable)

**Step 7: VDI 2225 Application**
- Winner: Twin water jet with vector control (score: 0.84)
- Runner-up: Twin fixed jet with differential thrust (score: 0.78)
- Key differentiator: Low-speed maneuverability

### 16.2 Training Grenade: Conceptual Design Application Summary

**Step 1-2: Task Clarification and Abstraction**
- Primary function: Provide realistic grenade training experience without lethality
- Independence requirements: Delay time accuracy independent of throw dynamics
- Physical basis: Mechanical timing, pyrotechnic effects, safety interlocks
- Abstraction: "Convert arm action to delayed visible/audible effect"

**Step 3: Function Structure (Three Variants)**

| Variant | Structure | Behavior | Suitability |
|---------|-----------|----------|-------------|
| V1 | Arm → Delay → Effect | Simple but delay affected by arm force | Poor for training realism |
| V2 | Arm → Isolate → Delay → Effect | Isolation prevents coupling | Good - added complexity |
| V3 | Arm → Split (safety + delay) → Effect | Parallel paths, independent | Optimal for safety |

**Step 4: Working Principles for Delay Mechanism**
- Brainstormed: Spring-escapement, pyrotechnic fuse, electronic IC, dashpot, chemical
- Classification by: Reusability, accuracy, field-robustness, indigenous capability
- Selected group: Mechanical spring-escapement (reusable, accurate, indigenous)

**Step 7: VDI 2225 Application**
- Winner: Mechanical striker-spring delay (score: 0.82)
- Runner-up: Hydraulic dashpot (score: 0.73)
- Key differentiator: Reusability and indigenous manufacturing

### 16.3 UAV Catapult: Conceptual Design Application Summary

**Step 1-2: Task Clarification and Abstraction**
- Primary function: Launch fixed-wing UAV to flight speed without runway
- Independence requirements: Launch energy and angle independently adjustable
- Physical basis: Kinetic energy transfer, acceleration limits, structural loads
- Abstraction: "Convert stored energy to directional UAV velocity"

**Step 3: Function Structure (Three Variants)**

| Variant | Structure | Behavior | Suitability |
|---------|-----------|----------|-------------|
| V1 | Store → Release → Guide | Simple, energy/angle coupled | Poor for multi-UAV use |
| V2 | Store → Adjust angle → Adjust energy → Release | Sequential setting | Good - flexible |
| V3 | Independent energy + angle → Combine at release | Independent control | Optimal for repeatability |

**Step 4: Working Principles for Energy Storage**
- Brainstormed: Bungee/elastic, pneumatic, hydraulic, electromagnetic, spring, counterweight
- Classification by: Portability, consistency, power independence, refire time
- Selected group: Bungee/elastic (portable, no power, fast refire)

**Step 7: VDI 2225 Application**
- Winner: Bungee with tensioning system (score: 0.90)
- Runner-up: Pneumatic piston (score: 0.70)
- Key differentiator: Portability and power independence

### 16.4 Additional Systems Quick Reference

| System | Main Flow | Key Independence | Recommended Function Structure |
|--------|-----------|-----------------|-------------------------------|
| Towed Target | Material + Signal | Tow speed / Position stability | Independent altitude control + cable management |
| UAV VTOL | Energy | Hover / Forward flight | Separate lift and thrust paths |
| Tethered Drone | Energy + Signal | Power / Data | Independent paths, combined tether |
| Xuồng Cứu hộ | Material | Speed / Stability | Independent hull and drive control |

---

## 17. Integration and Cross-Reference Matrix

### 17.1 Section 6.6 Cross-References to Other Sections

| Topic in 6.6 | Related Section | Cross-Reference Purpose |
|--------------|-----------------|------------------------|
| Requirements List | 5.1-5.4 | Full requirements methodology |
| Overall Function | 6.1 | Introduction to conceptual design |
| Abstraction | 6.2 | Abstraction process details |
| Function Structure | 6.3 | Function structure methodology |
| Working Principles | 6.4 | Systematic principle search |
| Concept Selection | 6.5 | Selection methods, VDI 2225 |
| Solution B embodiment | 7.7 | Continuation of example |
| Signal flow example | 6.4-6.6 | Figures 6.4-6.6, 6.20 |

### 17.2 Skill Integration Matrix

| Skill | Primary Application | Secondary Application | Frequency |
|-------|--------------------|-----------------------|-----------|
| Feynman | Understanding concepts | Teaching others | Every session |
| Chunking | Breaking down complexity | Planning study | Weekly |
| Design Review | Quality assurance | Progress tracking | Per deliverable |
| Interleaving | Schedule creation | Topic rotation | Weekly planning |
| Progress Tracking | Evidence collection | Goal setting | Daily/Weekly |
| Concept Evaluation | VDI 2225 application | Decision making | Per concept |
| Mnemonics | Memory aids | Quick recall | As needed |
| Learning Architecture | Program design | Milestone setting | At start/monthly |
| Systems Mapping | System understanding | Intervention design | Complex topics |
| Focus Sessions | Time management | Fatigue prevention | Every session |
| Self-Assessment | Quality check | Gap identification | Per step |
| Targeted Drills | Skill building | Weakness remediation | Weekly |
| Learning Journal | Reflection | Progress documentation | Daily/Weekly |

### 17.3 Recommended Skill Combinations by Learning Phase

| Phase | Primary Skills | Supporting Skills |
|-------|---------------|-------------------|
| Foundation (Week 1-4) | Chunking, Feynman, Architecture | Mnemonics, Focus Sessions |
| Integration (Week 5-8) | Design Review, VDI Evaluation, Drills | Interleaving, Self-Assessment |
| Mastery (Week 9-12) | Systems Mapping, Progress Tracking, Journal | All others as needed |

---

## 18. Appendices

### Appendix A: Key Figures Reference

| Figure | Content | Page | Purpose |
|--------|---------|------|---------|
| 6.26 | Planning department assignment | 199 | Initial task definition |
| 6.27 | Requirements list | 200 | Step 1 output |
| 6.28 | Problem formulation + Overall function | 201 | Step 2 output |
| 6.29 | Physical relationships | 201 | Mathematical basis |
| 6.30 | Function structure variant 1 | 202 | Meter→Adjust→Mix |
| 6.31 | Function structure variant 2 | 203 | Adjust→Meter→Mix |
| 6.32 | Function structure variant 3 | 204 | Independent→Mix |
| 6.33 | Brainstorming results | 204-205 | Step 4 output |
| 6.34 | Movement and bounding edges | 206 | Physical constraints |
| 6.35 | Classification criteria | 207 | Grouping parameters |
| 6.36 | Classification scheme | 207 | Solution organization |
| 6.37 | Solution variant A | 208 | Plate solution |
| 6.38 | Solution variant B | 209 | Cylinder with lever |
| 6.39 | Solution variant C | 209 | Cylinder with end valves |
| 6.40 | Solution variant D | 210 | Ball solution |
| 6.41 | VDI 2225 evaluation | 211 | Step 7 output |

### Appendix B: Glossary Vietnamese-English

| Vietnamese | English | Context |
|------------|---------|---------|
| Vòi trộn một tay | One-handed mixing tap | Example product |
| Cấu trúc chức năng | Function structure | Step 3 output |
| Nguyên lý làm việc | Working principle | Step 4 output |
| Giải pháp nguyên lý | Principle solution | Step 5-6 output |
| Đánh giá VDI 2225 | VDI 2225 evaluation | Step 7 method |
| Lưu lượng | Flow rate (V̇) | Physical variable |
| Nhiệt độ | Temperature (ϑ) | Physical variable |
| Độc lập | Independence | Key requirement |
| Phiến van | Valve plate | Component type |
| Mặt đế van | Valve seat face | Geometric element |
| Cạnh giới hạn | Bounding edge | Geometric constraint |

### Appendix C: MIL-STD Quick Reference for Defense Systems

| Standard | Coverage | Applies To |
|----------|----------|-----------|
| MIL-STD-810 | Environmental testing | All systems |
| MIL-STD-461 | EMC | Systems with electronics |
| MIL-STD-882 | System safety | All systems (esp. Training Grenade) |
| MIL-STD-1472 | Human engineering | Operator-interactive systems |
| MIL-STD-1553 | Data bus | Networked systems |
| MIL-HDBK-217 | Reliability prediction | All systems |

### Appendix D: Quick Self-Check Questions

**Step 1-2 Check**:
- [ ] Can I state the essential problem in one sentence?
- [ ] Have I identified the independence requirements?
- [ ] Are alternative physical effects documented and dismissed?

**Step 3 Check**:
- [ ] Did I create at least 3 function structure variants?
- [ ] Did I analyze behavior of each variant?
- [ ] Can I justify why the selected structure is best?

**Step 4 Check**:
- [ ] Did I generate enough ideas (10-15+)?
- [ ] Are classification criteria explicitly defined?
- [ ] Did I select a GROUP before individual solutions?

**Steps 5-8 Check**:
- [ ] Are solution variants sufficiently detailed?
- [ ] Is VDI 2225 evaluation complete with uncertainty analysis?
- [ ] Is the decision documented with risk factors?

---

## Document Information

**Created**: December 2025  
**Framework Version**: EDMF 2.0  
**Pahl & Beitz Reference**: Engineering Design: A Systematic Approach, 3rd Edition  
**Section Coverage**: 6.6 Examples of Conceptual Design (pp. 199-211)

**Recommended Study Path**:
1. Read this document overview (1 hour)
2. Study Section 6.6 in textbook with this guide (4 hours)
3. Complete drill sets progressively (6 hours)
4. Apply to first defense system (8 hours)
5. Review and iterate (ongoing)

**Total Estimated Study Time**: 60+ hours for full mastery

---

*"The study of function structures may prove extremely useful, even after the physical effect has been selected, for determining the behaviour of the system at a very early stage of its development."* — Pahl & Beitz, Section 6.3.3
