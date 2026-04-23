---
name: dmir-defense-systems-mentor
description: Apply the D-M-I-R Unified Model (Diagnosis-Modeling-Intervention-Reflection) to analyze and optimize defense/security manufacturing enterprises and product development systems. Use when users mention (1) defense/security manufacturing operations, (2) production bottlenecks or throughput issues, (3) system analysis for defense enterprises, (4) Vietnamese defense industry context (doanh nghiệp sản xuất sản phẩm công nghiệp an ninh quốc phòng), or (5) requests to apply systems thinking, system dynamics, theory of constraints, or leverage points to manufacturing systems.
---

# D-M-I-R Defense Systems Mentor

## Overview

The D-M-I-R framework transforms defense manufacturing through four integrated phases:

1. **Diagnosis (Systems Thinking)**: Map system structure, identify archetypes
2. **Modeling (System Dynamics)**: Quantify behavior, identify constraints scientifically
3. **Intervention (Theory of Constraints)**: Focus on bottleneck, maximize throughput
4. **Reflection (Meta-Learning)**: Challenge paradigms, build learning capacity

**Core value**: Targets high-leverage points (L1-L10) for 2-5x improvements vs. conventional parameter tweaking (L12).

## When to Use This Skill

The skill triggers when analyzing or optimizing:
- Defense/security product manufacturing systems
- Production bottlenecks and throughput constraints
- Product development workflows
- Quality management systems
- Supply chain resilience
- Vietnamese defense industry enterprises

## Quick Start: First D-M-I-R Cycle

**Goal**: Diagnose constraint, implement focused intervention, achieve 30-50% throughput improvement in 6 months.

### Phase 1: Diagnosis (Weeks 1-2)

**Objective**: Understand system structure and identify problem archetypes.

**Steps**:
1. **Stakeholder workshop** (8-12 people, cross-functional):
   - Map historical behavior patterns (graphs of key metrics over 3-5 years)
   - Identify major stocks (inventory, WIP, staff, knowledge, capital)
   - Define system boundaries (R&D → production → delivery → support?)

2. **Build Causal Loop Diagram (CLD)**:
   - Identify reinforcing loops (R): Growth or collapse spirals
   - Identify balancing loops (B): Goal-seeking, stability
   - Mark delays (||): Time lags between cause and effect
   - See [references/diagnosis-guide.md](references/diagnosis-guide.md) for archetypes and CLD examples

3. **Pattern match to system traps**:
   - Common in defense: "Shifting Burden" (hero engineers fix everything), "Policy Resistance" (conflicting goals), "Drift to Low Performance"
   - See [references/system-archetypes.md](references/system-archetypes.md) for detailed patterns

**Deliverable**: Validated CLD showing feedback structure, archetype identification, boundary specification.

### Phase 2: Modeling (Weeks 3-6)

**Objective**: Quantify system dynamics and scientifically identify the constraint.

**Steps**:
1. **Convert CLD to stock-flow model**:
   - Define stocks and their initial values
   - Specify flows (rates of change)
   - Estimate parameters from historical data
   - See [references/sd-modeling-guide.md](references/sd-modeling-guide.md) for defense manufacturing examples

2. **Build and validate model** (Vensim, Stella, or Python/PySD):
   - Reproduce historical behavior patterns (validation test)
   - Sensitivity analysis: Which parameters matter most?
   - Extreme conditions test: Does model behave reasonably at boundaries?

3. **Stress test to identify constraint**:
   - Increase demand 50% in simulation
   - Observe which resource saturates first (>95% utilization)
   - Note which stock accumulates (bottleneck signature)
   - Calculate non-constraint excess capacities

**Deliverable**: Validated SD model, scientific constraint identification, capacity analysis.

### Phase 3: Intervention (Weeks 7-20)

**Objective**: Apply TOC Five Focusing Steps to maximize constraint throughput.

**TOC Five Focusing Steps**:

**Step 1: IDENTIFY** (already done via SD modeling)
- Constraint scientifically located
- Confirmed via ground truth (walk the floor, check actual utilization)

**Step 2: EXPLOIT the constraint** (Weeks 7-10)
- Maximize constraint productivity WITHOUT adding capacity:
  - **Zero downtime**: Eliminate breaks, setups, preventive maintenance during prime hours
  - **Quality gates BEFORE constraint**: Don't waste constraint time on defects
  - **Optimal scheduling**: Best sequence, best people on constraint
  - **Buffer management**: Maintain 2-3 day queue (never starve constraint)
- Target: +30-40% throughput from exploitation alone

**Step 3: SUBORDINATE everything else** (Weeks 8-12)
- Synchronize entire system to support constraint:
  - **Upstream**: Build buffers so constraint never starves
  - **Downstream**: Process fast enough so constraint never blocks
  - **Drum-Buffer-Rope**: Constraint sets pace, buffer protects it, signal controls releases
- See [references/toc-implementation.md](references/toc-implementation.md) for subordination protocols

**Step 4: ELEVATE** (if needed, Week 13+)
- Add capacity ONLY if exploitation insufficient:
  - Cost-benefit analysis using SD model projections
  - Typical mistake: Jumping here before exploiting fully

**Step 5: RETURN to Step 1** (Ongoing)
- Monitor for constraint shift (weekly utilization reviews)
- When constraint moves, reconfigure entire system

**Deliverable**: 30-50% throughput increase, stable operations, monitoring dashboard.

### Phase 4: Reflection (Weeks 21-28)

**Objective**: Learn from results, challenge paradigms, plan next cycle.

**Steps**:
1. **After-Action Review**:
   - Compare actual vs. predicted outcomes
   - Root cause analysis of variances
   - Identify what worked, what failed, what surprised us
   - Use template: [assets/aar-template.md](assets/aar-template.md)

2. **Paradigm Assessment** (L2 leverage):
   - Surface implicit beliefs that limit performance:
     - "Defense products must be perfect" → When is "good enough" better?
     - "Vertical integration ensures security" → When is modularity stronger?
     - "Engineers are resources" → What if treated as knowledge investors?
   - See [references/paradigm-shifts.md](references/paradigm-shifts.md) for defense manufacturing examples

3. **Goal Hierarchy Review** (L3 leverage):
   - Are stated goals aligned with actual goals (revealed by behavior)?
   - Example conflicts: Efficiency vs. resilience, short-term vs. long-term
   - Revise if needed to better serve ultimate purpose

4. **Plan next cycle**:
   - Target higher leverage points (move from L10 → L7 → L5 → L3 → L2)
   - Expand boundaries if needed
   - Design paradigm shift initiatives

**Deliverable**: AAR document, paradigm assessment report, Cycle 2 plan targeting higher leverage.

## Progressive Leverage Point Targeting

Each D-M-I-R cycle should ascend the leverage hierarchy:

| Cycle | Focus | Leverage Points | Expected Improvement | Duration |
|-------|-------|----------------|---------------------|----------|
| **1** | Fix constraint | L10 (physical flows) | +30-50% throughput | 6 months |
| **2** | Optimize flows | L6-L8 (information, feedback) | +15-25% additional | 4 months |
| **3** | Revise rules | L5 (policies, metrics) | Behavioral shift | 4 months |
| **4** | Shift goals | L3 (objectives) | Strategic clarity | 3 months |
| **5+** | Challenge paradigms | L2 (assumptions) | Transformation | 3 months |

See [references/leverage-points-hierarchy.md](references/leverage-points-hierarchy.md) for detailed explanations.

## Defense Manufacturing Context

### Unique Characteristics

Defense manufacturing differs from commercial production:

- **Low volume, high complexity**: Small runs, extreme reliability requirements
- **Regulatory burden**: MIL-STD, STANAG, security clearances
- **Long lifecycles**: Products must function for decades
- **Specialized supply chains**: Few suppliers, long lead times
- **Multi-stakeholder**: Government customer, military users, political oversight

### Common System Traps

Defense enterprises frequently exhibit:

1. **Shifting Burden to Intervenor**: Relying on hero engineers instead of fixing processes
2. **Success to the Successful**: Resources flow to winning projects, starve struggling ones
3. **Policy Resistance**: Engineering wants innovation, operations wants stability, customer wants low cost
4. **Drift to Low Performance**: "Defense projects always run late" becomes accepted norm

See [references/defense-specific-challenges.md](references/defense-specific-challenges.md) for detailed patterns.

## Typical Constraints by Subsystem

**Product Development**: Often engineering capacity for complex subsystems (RF design, software integration)
**Manufacturing**: Frequently specialized testing equipment or final assembly
**Supply Chain**: Usually specialized components with single-source suppliers
**Quality Management**: Often validation/certification bottlenecks

## Tools and Methodologies

### System Dynamics Software
- **Vensim**: Industry standard, powerful analysis
- **Stella**: User-friendly, visual appeal
- **Python/PySD**: Free, flexible, requires programming

See [references/sd-software-guide.md](references/sd-software-guide.md) for setup instructions.

### Facilitation Tools
- **CLD Templates**: [assets/cld-template.vsd](assets/cld-template.vsd)
- **Workshop Agenda**: [assets/workshop-agenda.md](assets/workshop-agenda.md)
- **Data Collection Checklist**: [assets/data-checklist.md](assets/data-checklist.md)

## Implementation Readiness Assessment

Before starting, assess organizational prerequisites:

**Critical Success Factors**:
- ✓ Leadership commitment to questioning sacred cows
- ✓ Cross-functional team authority (not just advisory)
- ✓ Analytic capacity (SD modeling skills or willingness to learn)
- ✓ Psychological safety (challenging assumptions is rewarded)
- ✓ Data availability (3-5 years historical performance data)

See [references/readiness-assessment.md](references/readiness-assessment.md) for detailed criteria and scoring rubric.

## Common Pitfalls

1. **Premature intervention**: Jumping to solutions before diagnosis → Mandate CLD sign-off first
2. **Analysis paralysis**: Endless modeling → Time-box phases, "good enough" beats perfect-late
3. **Constraint fixation**: Continuing to optimize old constraint after shift → Monthly constraint checks
4. **Paradigm blindness**: Unable to question assumptions → External facilitator for Reflection
5. **Implementation fatigue**: Burnout from continuous change → Build consolidation periods, celebrate wins

See [references/pitfalls-countermeasures.md](references/pitfalls-countermeasures.md) for detailed mitigation strategies.

## Advanced Applications

For specialized defense manufacturing contexts:

- **R&D Product Development**: See [references/rdnd-application.md](references/rnd-application.md)
- **Supply Chain Resilience**: See [references/supply-chain-application.md](references/supply-chain-application.md)
- **Quality Management Systems**: See [references/quality-application.md](references/quality-application.md)
- **Multi-Project Environments**: See [references/portfolio-management.md](references/portfolio-management.md)

## Vietnamese Defense Industry Context

Specific considerations for Vietnamese defense enterprises:

- Government contracting procedures and security requirements
- Indigenous development priorities and technology transfer restrictions
- Regional university partnerships for talent pipeline
- Dual-use opportunities (civil-military integration)

See [references/vietnam-context.md](references/vietnam-context.md) for localized guidance.

## Workflow Decision Tree

```
User mentions defense manufacturing challenge
    ↓
Is system structure understood?
    NO → Start with Phase 1 (Diagnosis)
    YES → Is constraint known scientifically?
        NO → Phase 2 (Modeling)
        YES → Has exploitation been attempted?
            NO → Phase 3 (Intervention - TOC Steps)
            YES → Phase 4 (Reflection - Meta-learning)
                → Plan next cycle at higher leverage
```

## Success Metrics

**Leading Indicators** (observable within weeks):
- Constraint utilization >90%
- Buffer levels stable at 2-3 days
- Coordination improving (fewer expediting requests)

**Lagging Indicators** (observable after 3-6 months):
- Throughput: +30-50% (Cycle 1)
- Lead time: -20-30%
- WIP: -15-25%
- On-time delivery: +20-30 percentage points

**Cultural Indicators** (long-term):
- Systems language adoption ("constraint," "feedback loop," "leverage point")
- Reduced blame culture (focus on structure)
- Paradigm consciousness (questioning assumptions)

## Key References

All detailed methodologies, templates, and examples are in references/:

- **Core Methodologies**:
  - [diagnosis-guide.md](references/diagnosis-guide.md): CLD development, archetype recognition
  - [sd-modeling-guide.md](references/sd-modeling-guide.md): Stock-flow models, validation tests
  - [toc-implementation.md](references/toc-implementation.md): Five Focusing Steps protocols
  - [reflection-protocols.md](references/reflection-protocols.md): AAR, paradigm assessment

- **Defense Context**:
  - [defense-specific-challenges.md](references/defense-specific-challenges.md): Industry patterns
  - [system-archetypes.md](references/system-archetypes.md): Eight system traps
  - [vietnam-context.md](references/vietnam-context.md): Local considerations

- **Advanced Topics**:
  - [leverage-points-hierarchy.md](references/leverage-points-hierarchy.md): Meadows' 12 levels
  - [paradigm-shifts.md](references/paradigm-shifts.md): Challenging fundamental assumptions
  - [meta-learning-frameworks.md](references/meta-learning-frameworks.md): Deutero-learning capacity

- **Applications**:
  - [rnd-application.md](references/rnd-application.md): Product development systems
  - [supply-chain-application.md](references/supply-chain-application.md): Procurement resilience
  - [quality-application.md](references/quality-application.md): Testing optimization

- **Practical Tools**:
  - [readiness-assessment.md](references/readiness-assessment.md): Pre-implementation checklist
  - [pitfalls-countermeasures.md](references/pitfalls-countermeasures.md): Common mistakes
  - [sd-software-guide.md](references/sd-software-guide.md): Tool setup instructions

## Quick Reference Card

**Phase 1 (Diagnosis)**: Weeks 1-2 → CLD with feedback loops identified
**Phase 2 (Modeling)**: Weeks 3-6 → SD model + scientific constraint ID
**Phase 3 (Intervention)**: Weeks 7-20 → TOC exploitation + subordination
**Phase 4 (Reflection)**: Weeks 21-28 → AAR + paradigm assessment + next cycle plan

**Remember**: Each cycle targets progressively higher leverage (L10 → L7 → L5 → L3 → L2).

---

*This skill integrates Donella Meadows' leverage points, Jay Forrester's system dynamics, Eliyahu Goldratt's theory of constraints, and organizational meta-learning into a unified framework specifically adapted for defense/security manufacturing enterprises.*
