---
name: constraint-finder
description: Identify THE system constraint (bottleneck) using Theory of Constraints methodology and generate TOC-based intervention strategy with deep integration to stock-flow-mapper, feedback-loop-detector, and meadows-leverage-analyzer. Use when users describe throughput problems, bottlenecks, capacity limits, recurring delays, WIP accumulation, resource saturation, or ask "what's limiting us?", "where's the bottleneck?", "what should we fix first?", "why can't we go faster?", "what's blocking growth?". Works with engineering projects (technical debt, testing capacity, code review), manufacturing (production lines, inventory, equipment), organizational systems (team capacity, approval chains), or any system where one limiting factor controls overall throughput.
---

# Constraint Finder

Identify system constraints using Theory of Constraints (TOC) and design focused interventions that maximize throughput. Integrates deeply with stock-flow-mapper, feedback-loop-detector, and meadows-leverage-analyzer for complete systemic intervention.

---

## Quick Start (5 min)

### Step 1: Gather System Information (2 min)

**Essential inputs:**
- System goal (throughput metric): Units/hour, customers/day, features/sprint
- Key resources: Machines, people, processes, approval gates
- Observable symptoms: Where does work queue? What's always busy? What causes delays?
- Stock-flow data (if available): Output from stock-flow-mapper

### Step 2: Identify Constraint (2 min)

**Detection methods:**
1. **Stock-flow analysis**: Which stock is depleting fastest? Has smallest buffer? Limits throughput?
2. **Queue observation**: Where does WIP accumulate? Where do delays happen?
3. **Utilization data**: What resource is at/near 100% capacity?
4. **Validation test**: "If we had infinite capacity at X, would throughput increase?"

### Step 3: Generate Action Plan (1 min)

Apply TOC Five Focusing Steps in priority order:
1. **EXPLOIT** (do first, low cost): Maximize current constraint capacity
2. **SUBORDINATE** (do second): Align everything else to serve constraint  
3. **ELEVATE** (do only if needed, high cost): Add constraint capacity
4. **REPEAT**: Monitor for constraint shift

---

## Constraint Identification

### Four Constraint Types

**Physical Constraint**: Resource capacity limit
- Examples: Machine hours, person-hours, space, equipment
- Detection: High utilization (90-100%), queues form before it
- Engineering: Testing capacity, code review bandwidth, senior engineer time
- Manufacturing: Bottleneck machine, limited tooling, warehouse space

**Market Constraint**: Demand insufficient to consume capacity
- Examples: Not enough customers, orders, sales pipeline
- Detection: Resources idle, low utilization, excess inventory
- Intervention: Different from physical constraints (marketing, pricing, features)

**Policy Constraint**: Rules preventing optimal performance
- Examples: Approval chains, batch sizes, quality gates, work rules
- Detection: Resource idle but "not allowed" to work
- Engineering: "Can't deploy without full test suite" when tests are slow
- Leverage: L5 (rule change) intervention, not L10 (capacity)

**Paradigm Constraint**: Mental models limiting possibilities
- Examples: "We must test everything", "Only seniors can review", "Perfect is required"
- Detection: Beliefs create artificial constraints
- Leverage: L2 (paradigm shift) + L3 (goal reframe)

### Validation Test

**Critical discipline**: Identify ONLY current constraint, not hypothetical future ones.

**Validation protocol**:
1. Hypothesis: "X is the constraint"
2. Test: "If we had infinite capacity at X, would system throughput increase?"
3. Result:
   - YES → X is the constraint
   - NO → X is not the constraint, search elsewhere

**Distinguish**:
- **True constraint**: Limits system goal achievement
- **Bottleneck**: Temporary capacity restriction  
- **Perceived constraint**: Mental model, not real

---

## Integration with Stock-Flow-Mapper

When stock-flow-mapper output is available, use this protocol:

### Protocol: Constraint from Stock-Flow Structure

**Step 1: Scan stocks for constraint signatures**
```
DEPLETING STOCK → Inflow < Outflow → Constraint upstream
  Example: "Knowledge" depleting → Learning rate < Forgetting rate
  Constraint: Insufficient training time (inflow constraint)

ACCUMULATING STOCK → Inflow > Outflow → Constraint downstream  
  Example: "WIP" accumulating → Arrivals > Departures
  Constraint: Bottleneck process limiting outflow

BUFFER TOO SMALL → Cannot absorb variation → Creates artificial constraint
  Example: "Testing coverage" buffer too thin
  Constraint: Testing capacity can't handle variation
```

**Step 2: Identify flow bottlenecks**
- Which flow has lowest rate?
- Which flow limits downstream stocks?
- Which flow creates largest queues?

**Step 3: Calculate non-constraint excess capacity (for Step 3 Subordinate)**
```
Excess Capacity Required = (Non-constraint flow rate) - (Constraint flow rate)

Example:
- Constraint: Testing (8 features/sprint)
- Development: 12 features/sprint  
- Required excess: 12 - 8 = 4 features/sprint (50% excess capacity)
- Correct behavior: Dev team works at 8 features/sprint (subordinates to constraint)
```

**Integration point**: Use stock-flow-mapper to identify L9 (delays), L10 (structure), L11 (buffers) in constraint context.

---

## Integration with Feedback-Loop-Detector

Constraints participate in feedback loops that either reinforce the problem or attempt to balance it.

### Protocol: Constraint in Feedback Structure

**Step 1: Identify loops involving constraint**
- Which reinforcing loops (R) are broken by constraint?
- Which balancing loops (B) are dominated by constraint?

**Step 2: Detect dangerous archetypes**

**Shifting the Burden** (treating symptom not constraint):
```
R1 (Fast): Symptom relief (e.g., add more WIP)
  ↓ Creates pressure
B1 (Slow): Root cause (constraint capacity improvement)
  ↓ Atrophies when R1 dominates

Warning: Quick fixes around constraint create dependency
```

**Fixes That Fail**:
```
R1 (Fast): Quick fix works temporarily
  ↓ Unintended consequence  
B1 (Delayed): Problem returns worse
  ↓ Because root constraint not addressed

Example: Add more developers without fixing code review constraint
→ More WIP accumulates → Review backlog worse
```

**Step 3: Leverage cascade**
- L7: Slow reinforcing loops driving demand to constraint
- L8: Strengthen balancing loops stabilizing constraint  
- L6: Information flows showing constraint status to all actors

---

## Integration with Leverage-Point-Analyzer

Constraint IS the L10 leverage point (physical structure). Show complete cascade:

### Leverage Cascade for Constraint Intervention

**L2 (Paradigm)** - Highest leverage:
- Challenge belief that constraint is unchangeable
- Question: "Is this really necessary? Could we eliminate the step?"
- Example: "Must we test everything?" → Risk-based testing paradigm

**L3 (Goal)** - Very high leverage:
- Reframe from local efficiency to throughput
- Wrong: "Keep all resources busy"
- Right: "Maximize constraint productivity"

**L5 (Rules)** - High leverage, applies to Policy Constraints:
- Throughput Accounting replaces Cost Accounting
- Decision priority: (1) Increase T, (2) Decrease I, (3) Decrease OE
- Prevents local optimization that hurts throughput

**L6 (Information)** - High leverage, low cost:
- Real-time constraint status visible to all
- WIP levels before constraint
- Constraint utilization dashboard
- Delays and blockages immediately communicated

**L7 (Reinforcing Loops)** - Mid leverage:
- Slow loops that create demand surges
- Manage workload smoothing
- Control reinforcing growth that overwhelms constraint

**L8 (Balancing Loops)** - Mid leverage:
- Strengthen feedback from constraint to upstream
- Faster correction when constraint starves/blocks

**L9 (Delays)** - Mid leverage:
- Reduce information delays around constraint
- Minimize physical delays in constraint process
- Speed up feedback loops

**L10 (Structure)** - Where TOC operates:
- EXPLOIT: Maximize current structure
- SUBORDINATE: Restructure non-constraints
- ELEVATE: Change physical structure (last resort)

**L11 (Buffers)** - Low-mid leverage:
- Buffer size before constraint
- Too small → constraint starves
- Too large → excess WIP, slow response

**L12 (Parameters)** - Lowest leverage:
- Batch sizes, work hours, speeds
- Only after higher leverage points addressed

---

## TOC Five Focusing Steps

### Step 1: IDENTIFY the Constraint

**Already done above.** Output: "THE constraint is [X]"

---

### Step 2: EXPLOIT the Constraint

**Objective**: Maximize current capacity WITHOUT adding resources.

**Action categories**:

**Zero downtime**:
- 24/7 operation if needed
- No breaks at constraint
- Preventive maintenance scheduled off-hours
- Setup/changeover time minimized

**Perfect feed**:
- Quality checks BEFORE constraint (don't waste its time on defects)
- Work arrives in perfect sequence
- Never starve the constraint (buffer inventory immediately before)
- Never block the constraint (downstream must process fast enough)

**Optimal utilization**:
- Constraint works on highest-value items first
- No time wasted on low-priority work
- Batch sizes optimized for constraint (not for non-constraints)

**Expected gain**: 10-30% throughput improvement without new resources.

**Engineering examples**:
- Testing constraint: Run tests in parallel, eliminate flaky tests, test only changed code
- Code review constraint: Async review tools, review checklists, pair programming for complex changes
- Technical debt constraint: Automated refactoring, debt paydown during slack time

---

### Step 3: SUBORDINATE Everything to the Constraint

**Objective**: All non-constraints serve the constraint.

**Critical insight**: Non-constraints operating BELOW capacity is CORRECT, not wasteful.

**Action protocol**:

**Upstream subordination**:
```
Build sufficient buffer so constraint never starves:

Buffer size = (Constraint rate) × (Replenishment time) × (Safety factor)

Example: 
- Constraint: Testing at 8 features/sprint
- Replenishment: 2 days to fix bugs
- Safety factor: 1.5x
- Buffer: 8 × (2/10) × 1.5 = 2.4 features ready to test
```

**Downstream subordination**:
```
Process fast enough so constraint never blocks:

Downstream rate ≥ Constraint rate

Example:
- Constraint: Testing at 8 features/sprint  
- Deployment must handle ≥ 8 features/sprint
- If deployment slower → constraint blocks → throughput drops
```

**Non-constraint behavior change**:
- Accept idle time (don't "keep everyone busy")
- Produce only what constraint needs, when it needs it
- Don't optimize local efficiency at non-constraints

**Integration with stock-flow-mapper**:
Use flow rate calculations to determine required excess capacity at each non-constraint.

---

### Step 4: ELEVATE the Constraint

**Trigger**: Only if Steps 2-3 insufficient to meet throughput goal.

**Warning**: This is expensive and disruptive. Exhaust Steps 2-3 first.

**Action categories**:

**Add capacity**:
- More machines, more people, more space
- Cost analysis required
- Timeline: Weeks to months

**Redesign process**:
- Eliminate constraint through innovation
- Example: Automated testing eliminates manual test constraint
- Example: Modular architecture eliminates integration constraint

**Offload constraint**:
- Outsource constraint work
- Use different technology/approach
- Example: Cloud infrastructure eliminates server capacity constraint

**Change product/service**:
- Redesign to avoid constraint
- Example: Simplify features to reduce testing burden

---

### Step 5: REPEAT - Don't Let INERTIA Become Constraint

**Critical**: When constraint breaks, new constraint emerges elsewhere.

**Inertia trap**:
- Policies optimized for old constraint now suboptimal
- Metrics focused on old constraint now misleading  
- Behaviors aligned to old constraint now wasteful

**Action protocol**:

**Immediate actions when constraint shifts**:
1. Return to Step 1: Identify new constraint
2. Update all policies for new constraint
3. Update all metrics for new constraint
4. Retrain team on new subordination pattern

**Monitoring triggers**:
```
Constraint shift indicators:
- Old constraint utilization drops below 80%
- New queues forming elsewhere
- Throughput plateaus despite constraint improvements
- System behavior changes unexpectedly
```

**Next likely constraint prediction**:
Use stock-flow analysis to predict which resource will become next constraint.

---

## Throughput Accounting (L5 Rule Change)

Traditional cost accounting creates policy constraints by rewarding local efficiency over throughput. Replace with Throughput Accounting:

### New Metrics (L5 Intervention)

**T (Throughput)**: Revenue - Truly Variable Costs
- NOT revenue minus all costs
- ONLY costs that vary with each unit (materials, commissions)
- Fixed costs (salaries, rent) excluded

**I (Inventory)**: Money tied up in system
- WIP, finished goods, raw materials
- Includes only purchase price, not "value added"

**OE (Operating Expense)**: Money to operate
- All costs except truly variable costs
- Salaries, rent, utilities, depreciation

### Decision Priority

**Priority 1: Increase T** (most important)
- Maximize constraint productivity
- Increase sales through constraint
- Price based on constraint value, not cost

**Priority 2: Decrease I**
- Reduce WIP before constraint (but maintain buffer!)
- Reduce finished goods inventory
- Faster flow through system

**Priority 3: Decrease OE** (least important)
- Only after T maximized and I minimized
- Cutting OE that hurts T is counterproductive

### Why This Prevents Local Optimization

**Traditional cost accounting problem**:
```
Metric: "Keep all resources utilized"
Behavior: Non-constraints produce excess → WIP accumulates → I increases
Result: Throughput doesn't increase (constraint still limits), but I increases

Example: Development team produces 12 features/sprint
         Testing can only handle 8 features/sprint
         Result: 4 features accumulate as WIP each sprint
         Traditional: "Good! Dev team fully utilized!"
         TOC: "Bad! Excess WIP, throughput still 8 features/sprint"
```

**Throughput accounting fix**:
```
Metric: "Maximize T (throughput)"
Behavior: Non-constraints subordinate → produce only what constraint needs
Result: Throughput increases (constraint optimized), I decreases, OE same

Example: Development team produces 8 features/sprint (matches testing)
         Testing produces 8 features/sprint (fully utilized)
         Result: Zero WIP accumulation, throughput 8 features/sprint
         TOC: "Good! Development accepts idle time to serve constraint"
```

---

## Output Format

Use this template for all constraint analyses:

```markdown
# CONSTRAINT ANALYSIS: [System Name]

## 1. CONSTRAINT IDENTIFICATION

**PRIMARY CONSTRAINT**: [Name]

**Type**: [Physical / Policy / Market / Paradigm]

**Evidence**:
- Stock-flow analysis: [From stock-flow-mapper if available]
- Observable symptoms: [Queues, utilization, delays]
- Validation test: [Result of "infinite capacity" test]

**Confidence**: [High / Medium / Low]

**Related stocks** (from stock-flow-mapper): [List stocks involved]
**Related loops** (from feedback-loop-detector): [List R/B loops]

---

## 2. CURRENT STATE ANALYSIS

**Utilization**: [X%]
**Queue size**: [X units / hours]
**Throughput impact**: [Quantified effect on system goal]

**Constraint flow rate**: [X units/time]
**System throughput**: [X units/time] (should equal constraint rate)

**Non-constraint capacities**:
- Resource A: [Y units/time] ([Z% excess] capacity)
- Resource B: [Y units/time] ([Z% excess] capacity)

---

## 3. TOC ACTION PLAN (Prioritized)

### STEP 2 - EXPLOIT (Do first, low cost)

**Action 1**: [Specific, measurable action]
- Expected gain: [X%]
- Timeline: [Days/weeks]
- Cost: [Low/zero]

**Action 2**: [Specific, measurable action]
- Expected gain: [X%]
- Timeline: [Days/weeks]
- Cost: [Low/zero]

**Total expected gain from exploitation**: [X-Y%] throughput increase

---

### STEP 3 - SUBORDINATE (Do second)

**Non-constraint A**: [Name]
- Current capacity: [X units/time]
- Required capacity for subordination: [Y units/time]
- Required excess: [Z%]
- Behavior change: [Specific actions]

**Non-constraint B**: [Name]
- Current capacity: [X units/time]
- Required capacity for subordination: [Y units/time]
- Required excess: [Z%]
- Behavior change: [Specific actions]

**Buffer sizing**:
- Buffer before constraint: [X units / hours]
- Calculation: [Show formula]
- Monitoring: [How to track buffer health]

---

### STEP 4 - ELEVATE (Do only if Steps 2-3 insufficient)

**Option 1**: [Add capacity]
- Approach: [Specific action]
- Cost: [$ or resources]
- Timeline: [Weeks/months]
- Expected gain: [X%]

**Option 2**: [Redesign process]
- Approach: [Specific innovation]
- Cost: [$ or resources]
- Timeline: [Weeks/months]
- Risk: [Technical/organizational]

**Recommendation**: [Which option and why]

---

### STEP 5 - MONITOR for Constraint Shift

**Next likely constraint**: [Prediction based on analysis]

**Monitoring triggers**:
- Metric: [What to measure]
- Threshold: [When to re-analyze]
- Frequency: [How often to check]

**Inertia risks**:
- [Specific policies that will need updating]
- [Specific metrics that will need changing]
- [Specific behaviors that will need retraining]

---

## 4. LEVERAGE CASCADE (Integration with Meadows)

**L2 (Paradigm shift)**:
- Current paradigm: [Limiting belief]
- New paradigm: [Reframe]
- Impact: [How this changes everything]

**L3 (Goal clarity)**:
- Current goal (real): [What's actually optimized]
- Should be: [Throughput focus]
- Metric change: [From X to Y]

**L5 (Rule change - Throughput Accounting)**:
- Current rules: [Cost accounting behaviors]
- New rules: [Throughput Accounting]
- Decision priority: (1) ↑T, (2) ↓I, (3) ↓OE

**L6 (Information flows)**:
- Add: [Real-time constraint status to all actors]
- Add: [WIP visibility before constraint]
- Add: [Delay/blockage alerts]

**L7 (Reinforcing loop management)**:
- Loop: [Identify R loop]
- Intervention: [Slow growth/demand driving to constraint]

**L8 (Balancing loop strengthening)**:
- Loop: [Identify B loop]  
- Intervention: [Strengthen corrective action around constraint]

**L9 (Delay reduction)**:
- Current delays: [Information, physical]
- Target delays: [Reduced]
- Impact: [Faster feedback, less oscillation]

**L10 (Structure - where TOC operates)**:
- Exploit: [Maximize current structure]
- Subordinate: [Restructure non-constraints]
- Elevate: [Change physical structure if needed]

**L11 (Buffer sizing)**:
- Current buffer: [X units]
- Optimal buffer: [Y units]
- Rationale: [Balances starvation vs excess WIP]

---

## 5. WARNINGS & RISKS

### Policy Resistance
**Expected?** [Yes/No]
**Details**: [Who will resist, why]
**Mitigation**: [How to address]

### Inertia When Constraint Shifts
**Expected?** [Yes/No]  
**Details**: [What behaviors will persist inappropriately]
**Mitigation**: [Monitoring and retraining plan]

### Unintended Consequences of Subordination
**Prediction**: [What might go wrong]
**Monitoring**: [How to detect]
**Mitigation**: [Response plan]

### Integration Risks
**Stock-flow**: [Are non-constraint capacities sufficient?]
**Feedback loops**: [Are dangerous archetypes active?]
**Leverage points**: [Is paradigm/goal aligned with intervention?]

---

## 6. SUCCESS METRICS

**Primary metric (Throughput)**:
- Current: [X units/time]
- Target after Exploit/Subordinate: [Y units/time] ([Z%] increase)
- Measurement frequency: [How often]

**Secondary metrics**:
- Constraint utilization: Target [90-100%]
- Buffer health: Target [X units stable]
- WIP before constraint: Target [<Y units]
- Non-constraint utilization: Target [60-80%] (idle time is correct!)

**Leading indicators**:
- [Metric that predicts throughput]
- [Metric that predicts constraint health]

---

## 7. IMPLEMENTATION TIMELINE

**Phase 1 (Week 1-2): Exploit**
- [Specific actions with owners]

**Phase 2 (Week 3-4): Subordinate**  
- [Specific actions with owners]

**Phase 3 (Month 2): Monitor & Elevate if needed**
- [Decision point: Is throughput sufficient?]
- [If yes: Maintain. If no: Elevate]

**Phase 4 (Month 3+): Continuous**
- [Monitor for constraint shift]
- [Return to Step 1 when shift detected]
```

---

## References

For deeper TOC theory and context:

**Project Knowledge Files**:
- `/mnt/project/DMIR_Unified_Model_Deep_Research.md` - Part 4: TOC integration with SD and DST
- `/mnt/project/A_Unified_Theoretical_Foundation_for_Systemic_Mastery__Integrating_Dynamics__Constraints__and_Cognitive_Leverage` - Complete D-M-I-R framework

**Integration with other skills**:
- `stock-flow-mapper`: Provides stock-flow structure for constraint identification
- `feedback-loop-detector`: Reveals R/B loops involving constraint
- `meadows-leverage-analyzer`: Maps constraint to leverage point hierarchy

---

## Common Constraint Patterns by Domain

### Engineering/Software Development

**Technical Debt as Constraint**:
- Detection: Velocity decreasing, bug rates increasing, refactoring time growing
- Type: Often policy constraint ("must maintain legacy code")
- Intervention: L5 (allow refactoring) + L10 (allocate time for debt paydown)

**Code Review Constraint**:
- Detection: PRs queuing, review time > development time
- Type: Physical (senior engineer time)  
- Intervention: Step 2 (async tools, checklists) + Step 3 (juniors do first pass)

**Testing Capacity Constraint**:
- Detection: Features done but not tested, test backlog growing
- Type: Physical (tester time or test suite speed)
- Intervention: Step 2 (parallel testing, flaky test elimination) + Step 4 (automated testing)

### Manufacturing

**Bottleneck Machine Constraint**:
- Detection: WIP accumulating before machine, machine utilization 100%
- Type: Physical (machine capacity)
- Intervention: Step 2 (minimize changeover, 24/7 operation) + Step 3 (buffer before machine)

**Quality Gate Constraint**:
- Detection: Work backing up before inspection, inspector utilization high
- Type: Policy ("must inspect 100%") or Physical (inspector time)
- Intervention: L5 (risk-based inspection) or Step 2 (faster inspection methods)

### Organizational

**Approval Chain Constraint**:
- Detection: Decisions waiting, manager always busy, team idle waiting
- Type: Policy (approval required) or Physical (manager time)
- Intervention: L5 (delegation rules, approval thresholds) + L6 (async approvals)

**Senior Expert Constraint**:
- Detection: Work queuing for expert review, expert utilization 100%
- Type: Physical (expert time)
- Intervention: Step 2 (junior pre-review) + Step 3 (knowledge transfer) + Step 4 (hire/train)
