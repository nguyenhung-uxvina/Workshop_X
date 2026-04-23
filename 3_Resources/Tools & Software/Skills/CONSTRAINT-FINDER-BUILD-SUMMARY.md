# Constraint-Finder Skill - Build Summary

## Overview

Successfully created the **constraint-finder** skill using Theory of Constraints (TOC) methodology with deep integration to your existing systemic analysis skills (stock-flow-mapper, feedback-loop-detector, meadows-leverage-analyzer).

## What Was Built

### Core Functionality

**1. Constraint Identification** (TOC Step 1)
- Four constraint types: Physical, Market, Policy, Paradigm
- Multiple detection methods: stock-flow analysis, queue observation, utilization data
- Validation protocol: "infinite capacity" test
- Integration with stock-flow-mapper for scientific identification

**2. Constraint Validation**
- Distinguishes true constraints from bottlenecks and perceived constraints
- Test framework to confirm hypothesis before intervention

**3. TOC Five Focusing Steps**

**Step 2 - EXPLOIT**: Maximize current capacity (10-30% gain, low cost)
- Zero downtime protocols
- Perfect feed to constraint
- Quality checks before constraint

**Step 3 - SUBORDINATE**: Align everything to serve constraint
- Calculate required non-constraint excess capacity
- Buffer sizing formulas
- Upstream/downstream subordination protocols
- Integration with stock-flow-mapper for capacity calculations

**Step 4 - ELEVATE**: Add capacity (only if Steps 2-3 insufficient)
- Cost-benefit analysis
- Multiple elevation options
- Timeline and risk assessment

**Step 5 - REPEAT**: Monitor for constraint shift
- Inertia trap warnings
- Next constraint prediction
- Trigger-based re-analysis

**4. Throughput Accounting** (L5 Leverage Point)
- T (Throughput), I (Inventory), OE (Operating Expense) metrics
- Decision priority: (1) ↑T, (2) ↓I, (3) ↓OE
- Prevents local optimization that hurts system throughput

### Integration with Existing Skills

**A) Stock-Flow-Mapper Integration**
- Constraint detection from stock-flow structure
- Depleting stocks → upstream constraint
- Accumulating stocks → downstream constraint
- Flow rate bottleneck identification
- Non-constraint excess capacity calculation
- L9 (delays), L10 (structure), L11 (buffers) in constraint context

**B) Feedback-Loop-Detector Integration**
- Identify R/B loops involving constraint
- Detect dangerous archetypes (Shifting the Burden, Fixes That Fail)
- L7 (reinforce loop management) and L8 (balancing loop strengthening)
- Warning system for symptom relief vs root cause intervention

**C) Meadows-Leverage-Analyzer Integration**
- Complete leverage cascade from L2 to L12
- Constraint IS the L10 leverage point (physical structure)
- Shows how constraint intervention connects to higher leverage:
  - L2: Paradigm shift about constraints
  - L3: Goal reframe (throughput vs local efficiency)
  - L5: Throughput Accounting rule change
  - L6: Information flows (constraint status visibility)
  - L7-L9: Loop and delay management
  - L10: Where TOC operates (Exploit, Subordinate, Elevate)
  - L11-L12: Buffer and parameter optimization

### Comprehensive Output Template

The skill provides a complete analysis template with 7 sections:
1. Constraint Identification (evidence-based)
2. Current State Analysis (quantified)
3. TOC Action Plan (prioritized, with timelines and costs)
4. Leverage Cascade (integration with Meadows framework)
5. Warnings & Risks (policy resistance, inertia, unintended consequences)
6. Success Metrics (leading and lagging indicators)
7. Implementation Timeline (phased approach)

### Domain-Specific Patterns

Includes common constraint patterns for:
- **Engineering/Software**: Technical debt, code review, testing capacity
- **Manufacturing**: Bottleneck machines, quality gates
- **Organizational**: Approval chains, senior expert time

## Key Differentiators

**1. Integration-First Design**
- Not standalone TOC - deeply integrated with your existing systemic toolkit
- Constraint analysis feeds into leverage point intervention
- Stock-flow structure scientifically identifies constraints
- Feedback loop analysis reveals archetypes around constraints

**2. Complete Intervention Cascade**
- From constraint identification → TOC steps → leverage points → implementation
- Shows WHY TOC interventions work (via leverage theory)
- Prevents jumping to elevation (Step 4) prematurely

**3. Engineering-Focused**
- Examples from software development, technical debt, code review, testing
- Applies to defense engineering context (your primary domain)
- Recognizes policy constraints (L5) vs physical constraints (L10)

**4. Quantitative + Qualitative**
- Quantified capacity calculations (from stock-flow data)
- Qualitative constraint type recognition (physical, policy, paradigm)
- Both immediate actions (Step 2) and strategic changes (L2, L3, L5)

**5. Anti-Inertia Design**
- Explicit warnings about inertia when constraint shifts (TOC Step 5)
- Monitoring triggers to detect constraint shift
- Next constraint prediction to prepare for shift

## Test Cases Provided

Created comprehensive test scenarios in `/home/claude/test-constraint-finder.md`:

**Test 1: Classic Manufacturing**
- 5 machines in series with different capacities
- Expected: Identifies lowest capacity (8 units/hour) as constraint
- Expected: Recommends Exploit → Subordinate → Elevate sequence

**Test 2: Engineering Project**
- Software development with stock-flow data
- Multiple constraints: Testing (primary), Technical Debt (growing)
- Expected: Uses stock-flow accumulation patterns
- Expected: Integrates L2-L10 leverage cascade
- Expected: Addresses both physical and policy constraints

## How to Use

**Trigger Patterns**:
- "What's limiting us?"
- "Where's the bottleneck?"
- "What should we fix first?"
- "Why can't we go faster?"
- "What's blocking growth?"
- User describes throughput problems, WIP accumulation, resource saturation

**Required Inputs**:
- System goal (throughput metric)
- Key resources
- Observable symptoms (queues, delays, utilization)
- Stock-flow data (if available from stock-flow-mapper)

**Output**:
- Complete constraint analysis with 7-section template
- Prioritized action plan (Steps 2-5)
- Leverage cascade (L2-L12)
- Implementation timeline
- Success metrics and monitoring triggers

**Integration Workflow**:
1. Run **stock-flow-mapper** to identify accumulations and flows
2. Run **feedback-loop-detector** to identify R/B loops
3. Run **constraint-finder** to identify THE constraint (uses outputs from 1-2)
4. Run **meadows-leverage-analyzer** to validate leverage cascade
5. Implement TOC Five Focusing Steps with leverage point interventions

## File Structure

```
constraint-finder.skill (packaged)
└── constraint-finder/
    └── SKILL.md (23KB)
        ├── Frontmatter (name, description with trigger patterns)
        ├── Quick Start (5 min workflow)
        ├── Constraint Identification (4 types, validation)
        ├── Integration with Stock-Flow-Mapper
        ├── Integration with Feedback-Loop-Detector  
        ├── Integration with Leverage-Point-Analyzer
        ├── TOC Five Focusing Steps (detailed)
        ├── Throughput Accounting (L5)
        ├── Output Format (comprehensive template)
        ├── References (project knowledge files)
        └── Common Constraint Patterns (domain-specific)
```

## Next Steps

**1. Install the Skill**
- Download: `/mnt/user-data/outputs/constraint-finder.skill`
- Install in Claude (upload .skill file)

**2. Test with Real Project**
- Use your engineering project (from EDMF work)
- Run stock-flow-mapper first to get stock-flow structure
- Run constraint-finder with that data
- Compare against your Day 1 leverage point analysis

**3. Validate Integration**
- Test constraint-finder → stock-flow-mapper integration
- Test constraint-finder → feedback-loop-detector integration  
- Test constraint-finder → meadows-leverage-analyzer integration
- Verify leverage cascade matches across skills

**4. Iterate Based on Usage**
- Apply to real defense engineering projects
- Apply to DMIR defense systems mentoring scenarios
- Refine examples and patterns based on actual usage
- Add domain-specific constraint patterns as discovered

## Theoretical Foundation

Based on your project knowledge:
- `/mnt/project/DMIR_Unified_Model_Deep_Research.md` - Part 4: TOC
- `/mnt/project/A_Unified_Theoretical_Foundation_for_Systemic_Mastery...` - D-M-I-R framework
- Theory of Constraints (Goldratt)
- System Dynamics integration (SD-TOC handoff)
- Meadows' leverage points (constraint at L10)

## Key Innovation

**This skill creates the "I" (Intervention) phase of your D-M-I-R unified model**:
- **D**iagnosis: Systems Thinking → feedback-loop-detector
- **M**odeling: System Dynamics → stock-flow-mapper
- **I**ntervention: Theory of Constraints → **constraint-finder** ← NEW
- **R**eflection: Meta-Learning → meadows-leverage-analyzer

The constraint-finder skill operationalizes the TOC methodology with full integration to your existing systemic analysis framework, creating a complete D-M-I-R toolkit for systemic mastery.
