# System Archetypes Pattern Library

## Table of Contents

1. [Overview](#overview)
2. [Core Archetypes](#core-archetypes)
   - [Fixes That Fail (Policy Resistance)](#1-fixes-that-fail-policy-resistance)
   - [Shifting the Burden (Addiction Loop)](#2-shifting-the-burden-addiction-loop)
   - [Escalation (Competitive Spiral)](#3-escalation-competitive-spiral)
   - [Success to the Successful (Winner-Take-All)](#4-success-to-the-successful-winner-take-all)
   - [Tragedy of the Commons](#5-tragedy-of-the-commons)
   - [Drifting Goals (Eroding Standards)](#6-drifting-goals-eroding-standards)
3. [Using Archetypes for Diagnosis](#using-archetypes-for-diagnosis)
4. [Archetype Combinations](#archetype-combinations)
5. [Quick Reference: Archetype Matching](#quick-reference-archetype-matching)
6. [Advanced: Creating Custom Archetypes](#advanced-creating-custom-archetypes)

---

## Overview

System archetypes are recurring patterns of failure caused by underlying feedback loop structures. Recognizing these patterns enables prediction and prevention of systemic dysfunction.

**Source:** Peter Senge's "The Fifth Discipline" + Donella Meadows' "Thinking in Systems"

---

## Core Archetypes

### 1. Fixes That Fail (Policy Resistance)

**Structure:**
```
R (Fast): [Problem Symptom] +→ [Quick Fix] −→ [Symptom] 
          (instant relief, positive reinforcement)

B (Slow): [Quick Fix] −→|| [Root Cause] +→|| [Problem Symptom] 
          (delayed worsening, unintended consequence)
```

**Diagnostic Questions:**
1. Does the fix provide immediate relief?
2. Does the problem return, often worse?
3. Is there increasing dependency on the fix?
4. Does the fix worsen an underlying cause?

**Examples:**

**Engineering - Adding Developers to Late Projects (Brooks' Law)**
```
R (Fast): Late Schedule → Add Developers → More Hands → Faster Progress (short-term)
B (Slow): Add Developers → More Communication → More Meetings → Slower Progress (2-3 months delay)

Result: Initially faster, then slower than before. Net negative.
```

**Manufacturing - Cutting Training to Hit Production Targets**
```
R (Fast): Behind Target → Cut Training → More Production Time → Hit Target
B (Slow): Cut Training → Lower Skills → More Defects → Behind Target (6 months delay)

Result: Short-term goal met, long-term capability destroyed.
```

**Defense Procurement - Rushing Requirements**
```
R (Fast): Deadline Pressure → Skip Requirements Analysis → Faster Contract Award
B (Slow): Skip Requirements → Incomplete Spec → Rework → Schedule Delays (12-18 months)

Result: Award contract fast, deliver product late and over-budget.
```

**Intervention Points:**
- **L9 (Delays):** Make consequence delay visible (dashboard showing 6-month trend)
- **L6 (Information):** Show long-term impact data before applying fix
- **L5 (Rules):** Policy: "Must assess 6-month impact before quick fix"
- **L3 (Goal):** Optimize for sustainable solutions, not quick relief

**Warning Signals:**
- "We've tried this before"
- "It worked last time (for a while)"
- "We'll fix the side effects later"
- Increasing frequency of fix application

---

### 2. Shifting the Burden (Addiction Loop)

**Structure:**
```
R1 (Fast): [Problem] +→ [External Support] −→ [Symptom Relief]
           (immediate help, positive feedback)

B (Slow): [External Support] −→|| [Internal Capability] +→|| [Problem]
          (capability atrophy, dependency spiral)

R2 (Addiction): [Dependency] +→ [More Support Needed] +→ [Dependency]
               (accelerating reliance)
```

**Diagnostic Questions:**
1. Is external help solving internal problems?
2. Is internal capability declining?
3. Is dependency increasing over time?
4. Would removing support cause collapse?

**Examples:**

**Manufacturing - Consultant Dependency**
```
R1 (Fast): Production Problem → Hire Consultants → Problem Solved
B (Slow): Hire Consultants → Team Never Learns → Capability Atrophy → More Problems (6-12 months)
R2 (Addiction): More Consultants → Higher Dependency → Can't Function Without → More Consultants

Result: Team becomes helpless, consultant costs spiral up.
```

**Defense Industry - Foreign Technology Dependency**
```
R1 (Fast): Technology Gap → Import Technology → Gap Closed
B (Slow): Import Technology → No R&D Investment → Local Capability Declines → Bigger Gap (5-10 years)
R2 (Addiction): Dependency on Imports → No Local Alternative → Must Import → Dependency

Result: Permanent technology dependence, no indigenous capability.
```

**Engineering - Copy-Paste Code Culture**
```
R1 (Fast): Need Feature → Copy Code from Stack Overflow → Feature Works
B (Slow): Copy Code → Never Learn Fundamentals → Skill Decay → More Copy-Paste (months)
R2 (Addiction): Weak Skills → Can't Debug Copied Code → Need More Copying → Weaker Skills

Result: Team can't solve novel problems, productivity collapses.
```

**Intervention Points:**
- **L8 (Balancing Loop):** Strengthen internal capability development (mandatory learning time)
- **L6 (Information):** Track capability metrics alongside problem metrics
- **L5 (Rules):** "External support must include knowledge transfer"
- **L3 (Goal):** Optimize for capability building, not just problem solving
- **L7 (Reinforcing Loop):** Slow down external support (force internal struggle to build muscle)

**Warning Signals:**
- "We can't do this without [external resource]"
- "Let's just hire someone to do it"
- Increasing consultant budgets over time
- Declining internal expertise despite experience

---

### 3. Escalation (Competitive Spiral)

**Structure:**
```
R1 (Party A): [A's Performance] +→ [A's Threat to B] +→ [B's Response] +→ [A's Performance]
R2 (Party B): [B's Performance] +→ [B's Threat to A] +→ [A's Response] +→ [B's Performance]
```

**Diagnostic Questions:**
1. Are two parties competing by matching/exceeding each other?
2. Does each move trigger a counter-move?
3. Is the overall situation worsening for both?
4. Is there a triggering event that started the spiral?

**Examples:**

**Defense - Arms Race**
```
R1 (Country A): A's Military → B Feels Threatened → B Increases Military → A's Threat Perception → A's Military
R2 (Country B): B's Military → A Feels Threatened → A Increases Military → B's Threat Perception → B's Military

Result: Both countries spend more, neither gains relative advantage, mutual bankruptcy risk.
```

**Business - Feature War**
```
R1 (Company A): A's Features → B Loses Market Share → B Adds Features → A Loses Share → A Adds Features
R2 (Company B): B's Features → A Loses Market Share → A Adds Features → B Loses Share → B Adds Features

Result: Both products bloated, users confused, development costs spiral, no winner.
```

**Engineering - Performance Optimization Race**
```
R1 (Team A): A Optimizes → B Looks Slow → B Optimizes → A Looks Slow → A Optimizes
R2 (Team B): B Optimizes → A Looks Slow → A Optimizes → B Looks Slow → B Optimizes

Result: Over-optimization, diminishing returns, technical debt from rushed optimizations.
```

**Intervention Points:**
- **L3 (Goal):** Change goal from "beat opponent" to "optimize absolute performance"
- **L2 (Paradigm):** Shift from zero-sum to positive-sum thinking
- **L5 (Rules):** Agreements to limit escalation (treaties, standards)
- **L6 (Information):** Transparency to reduce threat perception
- **L1 (Transcend):** Recognize competition as unnecessary constraint

**Warning Signals:**
- "We have to match their move"
- "If we don't escalate, we'll lose"
- Increasing investment for same relative position
- Mutual exhaustion

---

### 4. Success to the Successful (Winner-Take-All)

**Structure:**
```
R (Winner): [Success] +→ [Resources Allocated] +→ [More Success] +→ [Dominance]
B (Loser): [Failure] +→ [Resources Withdrawn] −→ [More Failure] +→ [Irrelevance]
```

**Diagnostic Questions:**
1. Does success breed more success?
2. Are resources allocated based on past performance?
3. Are early leaders permanently entrenched?
4. Is it impossible for losers to catch up?

**Examples:**

**Technology - Platform Monopolies**
```
R (Winner): More Users → More Data → Better Product → More Users → Dominance
B (Competitor): Fewer Users → Less Data → Worse Product → Even Fewer Users → Irrelevance

Result: Winner-take-all market, monopoly formation.
```

**Engineering Teams - Star Developer Syndrome**
```
R (Star): Good Work → More Interesting Projects → Learn More → Better Work → All Projects
B (Others): Mediocre Work → Boring Projects → Learn Less → Worse Work → No Projects

Result: Star gets all growth opportunities, others stagnate, team fragility.
```

**Defense Industry - Incumbency Advantage**
```
R (Incumbent): Won Contract → Built Capability → Wins Next Contract → More Capability
B (New Entrant): Lost Bid → No Experience → Loses Again → No Capability

Result: Same companies win perpetually, no new competition.
```

**Intervention Points:**
- **L5 (Rules):** Diversification policies (spread projects across team)
- **L10 (Structure):** Change resource allocation mechanism
- **L6 (Information):** Make success metrics visible to identify imbalance early
- **L3 (Goal):** Optimize for ecosystem health, not winner maximization
- **L2 (Paradigm):** Shift from "survival of fittest" to "diversity creates resilience"

**Warning Signals:**
- "Rich get richer, poor get poorer"
- Increasing concentration over time
- Irreversible advantage gaps
- Reduced diversity in winners

---

### 5. Tragedy of the Commons

**Structure:**
```
R (Individual): [My Use] +→ [My Benefit] +→ [More Use]
B (Collective): [Total Use] +→ [Resource Depletion] −→ [Everyone's Benefit] −→ [My Benefit]
```

**Diagnostic Questions:**
1. Is there a shared resource?
2. Does individual use deplete the commons?
3. Is short-term individual benefit outweighing long-term collective harm?
4. Is the resource approaching exhaustion?

**Examples:**

**Engineering - Technical Debt Commons**
```
R (Individual): Cut Corners → Ship Feature Faster → Get Promotion → Cut More Corners
B (Collective): All Cut Corners → Codebase Deteriorates → Everyone Slower → My Velocity Drops

Result: Codebase becomes unmaintainable, everyone suffers.
```

**Manufacturing - Shared Equipment Overuse**
```
R (Team): Use Machine More → Hit Target → Get Bonus → Use More
B (Factory): All Overuse → Machine Breaks → Everyone Delayed → My Production Drops

Result: Machine failure, all teams behind schedule.
```

**Intervention Points:**
- **L5 (Rules):** Usage limits, quotas, rotation
- **L6 (Information):** Make total usage visible to all
- **L3 (Goal):** Optimize for commons health, not individual benefit
- **L10 (Structure):** Privatize or allocate ownership

---

### 6. Drifting Goals (Eroding Standards)

**Structure:**
```
B (Weak): [Performance Gap] +→ [Improvement Effort] +→ [Performance] −→ [Gap]
R (Strong): [Performance Gap] +→ [Lower Goal] −→ [Gap] (faster, easier)
```

**Diagnostic Questions:**
1. Are goals being lowered over time?
2. Is lowering standards easier than improving performance?
3. Is there a gradual erosion of expectations?
4. Do people accept lower quality as "good enough"?

**Examples:**

**Engineering - Code Quality Drift**
```
B (Weak): Low Quality → Code Review → Improve Quality (slow, hard)
R (Strong): Low Quality → Lower Standards → "Good Enough" → Accept Low Quality (fast, easy)

Result: Standards erode until codebase is unmaintainable.
```

**Defense - Requirements Relaxation**
```
B (Weak): Unmet Requirement → Redesign → Meet Requirement (expensive, slow)
R (Strong): Unmet Requirement → Relax Requirement → "Close Enough" (cheap, fast)

Result: Product doesn't meet original operational need.
```

**Intervention Points:**
- **L5 (Rules):** Lock standards, require approval to change
- **L6 (Information):** Track standard changes over time (make drift visible)
- **L3 (Goal):** Set aspirational goals, not just acceptable minimums
- **L8 (Balancing Loop):** Strengthen improvement loop

---

## Using Archetypes for Diagnosis

**Step 1: Detect Loop Structure**
- Identify reinforcing and balancing loops in your system
- Note relative speeds (fast vs slow)
- Identify which loops are dominant

**Step 2: Match to Archetype Patterns**
- Compare loop structure to archetype templates
- Look for characteristic behaviors (recurring problems, escalation, etc.)
- Check for warning signals

**Step 3: Predict Trajectory**
- Based on archetype, forecast likely future behavior
- Identify tipping points or points of no return
- Estimate time to crisis

**Step 4: Intervene at High Leverage**
- Use archetype-specific intervention points (see each archetype)
- Target structural causes (L3-L8), not symptoms (L12)
- Combine multiple leverage points for cascade effect

---

## Archetype Combinations

Real systems often exhibit MULTIPLE archetypes simultaneously:

**Example: Software Project in Crisis**
```
Fixes That Fail: Adding developers worsens communication
+ Shifting the Burden: Outsourcing reduces internal capability
+ Drifting Goals: Relaxing quality standards to hit dates

Combined Effect: Triple vicious spiral, project collapse likely.
Intervention: Must address all three archetypes simultaneously.
```

**Example: Defense Procurement Failure**
```
Escalation: Requirements vs budget arms race
+ Success to Successful: Incumbent contractor monopoly
+ Drifting Goals: Relaxing performance specs

Combined Effect: Overpriced, underperforming system from entrenched supplier.
Intervention: Structural reform (L5, L10) + goal reset (L3).
```

---

## Quick Reference: Archetype Matching

| Observed Behavior | Likely Archetype |
|-------------------|------------------|
| Problem returns after fix | Fixes That Fail |
| Increasing external dependency | Shifting the Burden |
| Mutual escalation | Escalation |
| Winner dominates permanently | Success to Successful |
| Shared resource depletion | Tragedy of the Commons |
| Standards lowering over time | Drifting Goals |
| Quick fix addiction | Fixes That Fail + Shifting the Burden |
| Competitive spiral + resource drain | Escalation + Tragedy of Commons |

---

## Advanced: Creating Custom Archetypes

For domain-specific patterns, follow this template:

**Archetype Name:** [Descriptive name]

**Structure:**
```
[Loop diagrams with R/B labels]
```

**Diagnostic Questions:** [3-5 questions]

**Examples:** [3 concrete examples]

**Intervention Points:** [L1-L12 specific to this pattern]

**Warning Signals:** [Observable early indicators]

This allows building domain-specific pattern libraries (e.g., "Vietnamese Defense Manufacturing Archetypes").
