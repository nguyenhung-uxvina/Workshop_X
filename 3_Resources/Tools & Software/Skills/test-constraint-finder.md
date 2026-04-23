# Constraint-Finder Skill Test

## Test Case: Classic Manufacturing Scenario

**System**: Factory with 5 machines in series
- Machine A: 10 units/hour
- Machine B: 8 units/hour  
- Machine C: 12 units/hour
- Machine D: 8 units/hour
- Machine E: 15 units/hour

**Expected Results**:
- Constraint identification: B or D (both at 8 units/hour - lowest capacity)
- System throughput: 8 units/hour (limited by constraint)
- Recommended actions:
  - Step 2 EXPLOIT: Maximize B/D uptime (minimize changeover, 24/7 operation, quality checks before B/D)
  - Step 3 SUBORDINATE: A, C, E slow down to 8 units/hour (don't build excess WIP)
  - Non-constraint excess capacity required: A (25%), C (50%), E (88%)

## Validation Criteria

✅ Identifies B or D as THE constraint (not "multiple constraints")  
✅ Validates using "infinite capacity" test
✅ Calculates system throughput = 8 units/hour
✅ Recommends EXPLOIT first (low cost)
✅ Calculates required excess capacity for non-constraints
✅ Explains why non-constraints should operate below capacity
✅ Integrates with leverage points (L10, L5, L3)
✅ Predicts next likely constraint after B/D elevated

## Test Case 2: Engineering Project

**System**: Software development team
- Development capacity: 12 features/sprint
- Code review capacity: 10 features/sprint
- Testing capacity: 8 features/sprint
- Deployment capacity: 15 features/sprint

**Stock-Flow Data** (from stock-flow-mapper):
```
Stock: Features in Development
  Inflow: New features (12/sprint)
  Outflow: Completed features → Code Review (variable, limited by review)
  Status: Depleting (team idle waiting for review bottleneck clearance)

Stock: Features in Code Review Queue
  Inflow: From Development (12/sprint)
  Outflow: To Testing (8/sprint, limited by testing constraint)
  Status: Accumulating (12 > 8)

Stock: Features in Testing Queue  
  Inflow: From Code Review (10/sprint capacity, but only 8 actually flow)
  Outflow: To Deployment (8/sprint)
  Status: Accumulating when surges occur

Stock: Technical Debt
  Inflow: Shortcuts taken (4 hours/sprint)
  Outflow: Debt paydown (0 hours/sprint - no time allocated)
  Status: Rapidly accumulating → GROWING CONSTRAINT
```

**Expected Results**:
- PRIMARY constraint: Testing capacity (8 features/sprint)
- SECONDARY/GROWING constraint: Technical Debt (will become primary if ignored)
- Type: Physical (testing) + Policy (no debt paydown time)
- System throughput: 8 features/sprint (limited by testing)
- WIP accumulation: 4 features/sprint building up before testing

**Recommended Actions**:

Step 2 EXPLOIT Testing:
- Run tests in parallel
- Eliminate flaky tests  
- Test only changed code (not full regression each time)
- Automated test generation
- Expected gain: 15-25% (8 → 9-10 features/sprint)

Step 3 SUBORDINATE:
- Development: Slow to 8-10 features/sprint (accept idle time!)
- Code Review: Process fast enough to not block (10/sprint sufficient)
- Deployment: Maintain 15/sprint capacity (no action needed)
- Required excess: Dev (33-50%), Review (25%), Deploy (88%)

Step 4 ELEVATE (if needed):
- Hire QA engineer (costly, slow)
- Automated testing framework (medium cost, medium timeline)

Step 5 MONITOR:
- When testing elevated to 12/sprint → Code Review becomes constraint
- When both elevated to 15/sprint → Development becomes constraint
- CRITICAL: Technical debt will become constraint if not addressed via L5 (allocate debt paydown time)

**Leverage Integration**:
- L2: Paradigm shift from "testing is quality gate" to "testing is constraint" 
- L3: Goal shift from "maximize features developed" to "maximize features deployed"
- L5: Rule change - allocate 20% sprint capacity to debt paydown (policy constraint fix)
- L6: Real-time testing queue visibility to all developers
- L7: Slow feature demand creation (Product limits backlog size)
- L9: Reduce test suite execution time (delay reduction)
- L10: Testing capacity is THE constraint (where TOC operates)

## Validation Criteria for Engineering Test

✅ Identifies Testing as PRIMARY constraint (8 features/sprint)
✅ Recognizes Technical Debt as GROWING constraint (policy type)
✅ Uses stock-flow data to identify WIP accumulation pattern
✅ Distinguishes between constraint (Testing) and non-constraint with excess capacity (Code Review)
✅ Calculates system throughput = constraint throughput (8 features/sprint)
✅ Recommends EXPLOIT actions specific to testing context
✅ Calculates required excess capacity for subordination
✅ Addresses policy constraint (Technical Debt) with L5 intervention
✅ Integrates multiple leverage points (L2, L3, L5, L6, L7, L9, L10)
✅ Predicts constraint shift sequence
✅ Warns about inertia when constraint shifts
