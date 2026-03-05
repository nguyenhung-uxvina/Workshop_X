---
name: pahl-beitz-mastery
description: Comprehensive mentoring system for mastering Pahl & Beitz systematic design methodology applied to defense/security products. Combines systematic design process (Task Clarification → Conceptual Design → Embodiment Design → Detail Design) with D-M-I-R learning framework and leverage point optimization. Use when users want to (1) learn systematic design methodology, (2) apply P&B to defense product development, (3) accelerate design skill mastery, (4) integrate MIL-STD/STANAG requirements, (5) mentor through design phases, (6) evaluate concepts with VDI 2225, (7) create design documentation, or (8) optimize learning system using systems thinking.
---

# Pahl & Beitz Systematic Design Mastery

A comprehensive skill for mastering systematic engineering design methodology (Pahl & Beitz / VDI 2221) with accelerated learning through D-M-I-R (Diagnosis-Modeling-Intervention-Reflection) framework and leverage point optimization.

## Core Philosophy

This skill treats both **design** and **learning design** as systems that can be optimized. It provides:

1. **Complete P&B methodology guidance** across all 4 phases (Task Clarification, Conceptual Design, Embodiment Design, Detail Design)
2. **Defense/security product specialization** (MIL-STD, STANAG integration)
3. **Accelerated mastery framework** using systems thinking and leverage points
4. **Project-based learning** with micro-D-M-I-R cycles for 10-15x faster skill acquisition
5. **Mentoring at every stage** from complete beginner to expert practitioner

---

## When to Use This Skill

**Primary Triggers**:

**Learning & Mastery**:
- "I want to learn Pahl & Beitz methodology"
- "How do I master systematic design?"
- "Create a learning plan for engineering design"
- "I'm stuck learning design methodology"

**Design Process Guidance**:
- "Help me design [defense product] using systematic methodology"
- "Mentor me through conceptual design phase"
- "How do I create a requirements list?"
- "Walk me through embodiment design"

**Method Application**:
- "How do I use VDI 2225 to evaluate concepts?"
- "Create a function structure for [system]"
- "Apply morphological matrix to [problem]"
- "Help with concept evaluation"

**Defense/Security Context**:
- "Design sản phẩm công nghiệp an ninh quốc phòng"
- "How do I integrate MIL-STD requirements?"
- "Apply P&B to defense product development"
- "STANAG compliance in design process"

**Progress & Review**:
- "Review my design work"
- "Am I applying P&B correctly?"
- "Track my mastery progression"
- "What should I learn next?"

---

## Quick Start Guide

### For Complete Beginners (Never used P&B)

**Immediate actions** (First 48 hours):

1. **Read Quick Reference** first: [references/pahl-beitz-quick-reference.md](references/pahl-beitz-quick-reference.md) - Get 80% understanding in 30 minutes

2. **Select a simple project**: Choose defense subsystem you can start designing TODAY
   - Examples: Weapon mount bracket, protective housing, field equipment holder
   - Start SIMPLE (not full system)

3. **Launch Week 1 Mini-Cycle**:
   - Write rough requirements list (15-20 items) - just try it
   - Sketch 2-3 function structures
   - THEN compare with P&B examples to see gaps
   - This reveals what you actually need to study

4. **Install feedback system**:
   - Use Claude with project knowledge for instant methodology checks
   - Find one senior engineer for 15-min weekly reviews
   - Start design journal (document every session)

**Mindset shift required**: Don't "study then do" → Instead "do while studying". You'll learn 15x faster by running real design cycles with just-in-time theory lookup.

See [references/dmir-for-learning.md](references/dmir-for-learning.md) for complete learning system optimization.

---

### For Users With P&B Experience (Want to accelerate/specialize)

**Use this skill when you need**:

- **Defense context guidance**: Integrate MIL-STD/STANAG → See [references/defense-standards-mapping.md](references/defense-standards-mapping.md)
- **Concept evaluation help**: VDI 2225 methodology → See [references/vdi-2225-evaluation-guide.md](references/vdi-2225-evaluation-guide.md)
- **Learning acceleration**: Apply leverage points → See [references/leverage-points-design-learning.md](references/leverage-points-design-learning.md)
- **Design review**: Get mentoring on specific phase or method application

---

## Core Workflow: Design Process Mentoring

### Phase 1: Task Clarification

**When user is starting a design project**:

1. **Ask clarifying questions**:
   - What problem needs to be solved? (Customer need)
   - What constraints exist? (Budget, time, regulations, environment)
   - Who are the stakeholders? (Users, customer, maintainers)
   - Any existing solutions? (What's wrong with them?)

2. **Guide requirements list creation**:
   - Use categories: Geometry, Kinematics, Forces, Energy, Material, Signals, Safety, Ergonomics, Production, Quality, Assembly, Transport, Operation, Maintenance, Costs, Schedule
   - Classify MUST vs WISH requirements
   - Quantify where possible (numbers, ranges, limits)
   - Reference applicable standards (MIL-STD-810, MIL-STD-461, STANAG, etc.)

3. **Validate completeness**:
   - Are functional requirements clear?
   - Are constraints explicit?
   - Can requirements be verified?
   - Is there conflict between requirements?

**Defense-specific additions**: See [references/defense-standards-mapping.md](references/defense-standards-mapping.md) for integrating MIL-STD/STANAG requirements into requirements list.

**Key output**: Requirements List (design specification) that can be validated by stakeholders

---

### Phase 2: Conceptual Design

**When user needs to generate and select concepts**:

1. **Abstraction**: Help identify essential problem (strip away unnecessary constraints)

2. **Function Structure**: 
   - Break overall function into sub-functions
   - Show flows: Energy, Material, Signals
   - Identify main vs auxiliary functions

3. **Search for Working Principles**:
   - Physical effects that could fulfill each sub-function
   - Geometric/structural arrangements
   - Use solution catalogs, brainstorming, systematic search

4. **Morphological Matrix**:
   - Create matrix: Sub-functions (rows) × Solution principles (columns)
   - Combine compatible principles into working structures (concepts)
   - Typically generate 3-6 concepts for evaluation

5. **Concept Evaluation**:
   - Use VDI 2225 for systematic evaluation
   - Call `scripts/vdi2225_calculator.py` for automated scoring
   - See [references/vdi-2225-evaluation-guide.md](references/vdi-2225-evaluation-guide.md) for complete methodology
   - For defense: Include criteria like survivability, interoperability, lifecycle cost

6. **Select and Firm Up**: Develop selected concept into principle solution with preliminary layouts

**Key output**: Selected concept with documented evaluation rationale

---

### Phase 3: Embodiment Design

**When user has concept and needs to develop form/material**:

1. **Identify embodiment-determining requirements**: Size, forces, environmental conditions

2. **Apply Basic Rules**:
   - Clear force transmission (load paths)
   - Short and direct force paths
   - Matched deformations (compatibility)
   - Balanced forces (symmetry, equilibrium)

3. **Apply Principles**:
   - Division of tasks (modularity)
   - Self-help (self-centering, self-securing)
   - Stability and bistability
   - Fault-free design

4. **Apply Guidelines** (DfX):
   - Design for Manufacturing (DfM)
   - Design for Assembly (DfA)
   - Design for Maintenance
   - Design for Safety
   - Design for Environment (DfE)
   - Design for Cost

5. **Develop Layout**:
   - Preliminary layouts (multiple variants)
   - Evaluate and select best
   - Refine to definitive layout with scale drawings

6. **Material Selection**: Based on requirements, stresses, environment, cost

7. **Check Against Standards**: 
   - MIL-STD-810 (environmental)
   - MIL-STD-461 (EMC)
   - MIL-STD-882 (safety)
   - See [references/defense-standards-mapping.md](references/defense-standards-mapping.md)

**Key output**: Definitive layout with dimensions, materials, production method outline

---

### Phase 4: Detail Design

**When user needs production documentation**:

1. **Finalize all details**: Dimensions, tolerances, surface finishes, materials

2. **Create production drawings**: Part drawings, assembly drawings, BOMs

3. **Specify processes**: Manufacturing methods, inspection requirements, quality control

4. **Develop verification plan**: Map requirements → test methods → acceptance criteria

5. **Create supporting documentation**:
   - Assembly instructions
   - Operating manual
   - Maintenance procedures
   - Final cost calculations

**Defense-specific**: See [references/defense-standards-mapping.md](references/defense-standards-mapping.md) for verification documentation requirements per MIL-STD.

**Key output**: Complete production documentation package

---

## Learning Acceleration Framework

### D-M-I-R Learning Cycles

**For users wanting to master P&B faster**, apply D-M-I-R framework to learning itself:

**Weekly Micro-Cycle Structure**:

1. **Diagnose** (Day 1): What's blocking your design progress this week?
2. **Model** (Day 2): How fast are you getting feedback? How many concepts did you apply?
3. **Intervene** (Days 3-5): Work on one design phase with rapid feedback
4. **Reflect** (Days 6-7): What worked? What failed? What P&B principle did you violate?

**Track progress** using `scripts/mastery_tracker.py` - logs evidence, calculates mastery levels, generates reports.

**Complete methodology**: [references/dmir-for-learning.md](references/dmir-for-learning.md)

---

### Leverage Point Optimization

**When users feel stuck or progress is slow**:

Apply systems thinking to identify high-leverage interventions:

**Most Powerful (L2-L4)**:
- **Mental model shift**: "Must learn all theory first" → "Learn by doing with JIT lookup" (15x faster)
- **Goal redefinition**: "Understand methodology" → "Complete 3 defense projects with systematic documentation"
- **Self-organizing loops**: Documentation → Teaching → Feedback → Understanding (autonomous learning)

**Medium Leverage (L5-L7)**:
- **Feedback compression**: Monthly mentor review → Daily AI check + weekly peer review (10x iterations)
- **JIT learning**: Sequential reading → Pull concepts exactly when needed (6x retention)
- **Reinforcing loops**: Small wins → Confidence → More practice → Mastery

**Complete framework**: [references/leverage-points-design-learning.md](references/leverage-points-design-learning.md)

---

## Defense/Security Product Specialization

### MIL-STD and STANAG Integration

**Phase-by-phase mapping**:
- **Task Clarification**: Capture MIL-STD-810 (environment), MIL-STD-461 (EMC), MIL-STD-882 (safety) requirements
- **Conceptual Design**: Evaluate concepts for standard compliance (VDI 2225 criteria additions)
- **Embodiment Design**: Design for standards (shock mounts, shielding, fail-safe features)
- **Detail Design**: Verification plan per standard test methods

**Complete integration guide**: [references/defense-standards-mapping.md](references/defense-standards-mapping.md)

**Common defense standards**:
- MIL-STD-810: Environmental testing
- MIL-STD-461: Electromagnetic compatibility
- MIL-STD-882: System safety
- MIL-HDBK-217: Reliability prediction
- STANAG 4: NATO interoperability

---

## Tools and Scripts

### VDI 2225 Calculator (`scripts/vdi2225_calculator.py`)

**Automated concept evaluation**:

```bash
# Run example (defense surveillance system)
python scripts/vdi2225_calculator.py

# Interactive mode
python scripts/vdi2225_calculator.py --interactive
```

**Features**:
- Multi-criteria weighted evaluation
- Automatic ranking
- Sensitivity analysis
- Formatted reports

**When to use**: Selecting between 2+ concepts in Conceptual Design phase or embodiment variants

---

### Mastery Progress Tracker (`scripts/mastery_tracker.py`)

**Track learning progression**:

```bash
python scripts/mastery_tracker.py
```

**Features**:
- Evidence-based mastery levels (Novice → Expert)
- Project tracking
- D-M-I-R cycle logging
- Personalized recommendations
- Progress reports

**When to use**: Weekly to track mastery evidence, monthly for comprehensive assessment

---

## Mentoring Strategies

### Adaptive Guidance Based on User Level

**For Novices** (Level 1-2):
- Provide step-by-step walkthroughs
- Use simple examples before defense complexity
- Focus on building confidence through micro-wins
- Emphasize "good enough" over perfectionism
- Install fast feedback systems immediately

**For Competent** (Level 3):
- Provide method guidance with less hand-holding
- Introduce defense-specific complexity
- Focus on systematic documentation quality
- Challenge to teach others (deepens understanding)
- Integrate DfX principles

**For Proficient** (Level 4-5):
- Serve as sparring partner for design decisions
- Provide advanced optimization techniques
- Challenge paradigms and methodology assumptions
- Focus on high-leverage interventions
- Mentor on mentoring others

---

### Review and Feedback Protocol

**When user asks for design review**:

1. **Identify phase**: Which P&B phase is this work from?
2. **Check completeness**: Are expected outputs present?
3. **Verify methodology**: Are P&B methods correctly applied?
4. **Evaluate quality**: Does it meet professional standards?
5. **Provide actionable feedback**: Specific improvements with method references

**Format feedback as**:
- ✓ **Strengths**: What's done well (reinforce correct application)
- ⚠ **Issues**: What needs correction (cite P&B principles)
- → **Actions**: Specific next steps (with references to methods)

---

## Key References

All detailed methodologies organized by topic:

**Core P&B Methodology**:
- [pahl-beitz-quick-reference.md](references/pahl-beitz-quick-reference.md) - One-page overview of all 4 phases

**Concept Evaluation**:
- [vdi-2225-evaluation-guide.md](references/vdi-2225-evaluation-guide.md) - Complete VDI 2225 methodology with examples

**Learning Acceleration**:
- [dmir-for-learning.md](references/dmir-for-learning.md) - D-M-I-R framework applied to skill mastery
- [leverage-points-design-learning.md](references/leverage-points-design-learning.md) - Systems thinking for 10-15x faster learning

**Defense Context**:
- [defense-standards-mapping.md](references/defense-standards-mapping.md) - MIL-STD/STANAG integration with P&B

**Use references progressively**: Don't load all at once. Read what's needed for current challenge.

---

## Remember

**Pahl & Beitz methodology is**:
- ✓ Documentation framework (how to capture design thinking)
- ✓ Quality gate structure (what must be complete at each phase)
- ✓ Communication protocol (how to share design with stakeholders)

**Pahl & Beitz methodology is NOT**:
- ✗ How human brains actually think (non-linear, iterative, intuitive)
- ✗ The only way to design (it's a scaffold, not scripture)
- ✗ Something to "master" before starting (learn by doing)

**Goal**: Internalize systematic thinking so you design with discipline even when intuition takes over. Document systematically regardless of how messy the creative process was.
