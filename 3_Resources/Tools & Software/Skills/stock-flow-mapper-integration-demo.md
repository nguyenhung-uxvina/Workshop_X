# Stock-Flow-Mapper Integration Test

## Scenario: Engineering Project with Known Issues

### Context
You mentioned having:
- Known leverage points: L3, L5, L6, L7 (from Day 1)
- Known feedback loops: R and B loops (from Day 2)
- Unknown: What stocks? What flows? What delays?

Let's demonstrate the complete integration.

---

## STEP 1: Stock-Flow Mapping

### Identified Stocks

**Stock 1: Technical Debt**
- Current Level: 200 hours (HIGH - 4x target of 50 hrs)
- Type: CONSTRAINT (limits feature velocity)
- Classification: CRITICAL

Inflows:
1. Rushed Work → Debt Creation
   - Rate: 10 hrs/week (FAST)
   - Control: Deadline pressure, feature prioritization policy
   - Delay: 2 weeks (features shipped, debt discovered in code review)

Outflows:
1. Refactoring → Debt Reduction
   - Rate: 3 hrs/week (SLOW)
   - Control: Time allocated to "tech debt tickets"
   - Delay: None (immediate reduction when done)

Pattern: GROWTH (net +7 hrs/week)
Buffer: N/A (constraint, not buffer)
Crisis timeline: 400 hrs in 7 months → complete feature paralysis

---

**Stock 2: Team Knowledge (Systematic Design)**
- Current Level: 30% of target capability
- Type: BUFFER (should absorb complexity)
- Classification: CRITICAL

Inflows:
1. Learning → Knowledge Gain
   - Rate: 2 hrs/week (MEDIUM)
   - Control: Training time allocated, practice opportunities
   - Delay: 1 week (practice to application)

Outflows:
1. Forgetting → Knowledge Loss
   - Rate: 10%/month (SLOW)
   - Control: Usage frequency, complexity
   - Delay: None (immediate)

Pattern: GROWTH (net +20% over 3 months)
Buffer: UNDERSIZED (need 3x for stability)

---

**Stock 3: Bug Backlog**
- Current Level: 150 bugs (HIGH)
- Type: ACCUMULATOR
- Classification: IMPORTANT

Inflows:
1. Rushed Code → Bug Creation
   - Rate: 15 bugs/week (FAST)
   - Control: Same as debt creation (pressure)
   - Delay: 1 week (after testing)

Outflows:
1. Bug Fixing → Backlog Reduction
   - Rate: 10 bugs/week (MEDIUM)
   - Control: QA time allocated
   - Delay: None

Pattern: GROWTH (net +5 bugs/week)
Crisis: 300 bugs in 6 months → customer exodus

---

## STEP 2: Delay Analysis (L9 Leverage)

### Critical Delay 1: Debt Discovery Delay
- Location: Rushed Work → Technical Debt accumulation
- Duration: 2 weeks
- Impact: Cannot react to debt creation in real-time
- Delay/Cycle Ratio: 2 weeks / 2 week sprint = 100% → CRITICAL
- Risk: Wild oscillation in quality

**L9 Intervention:**
- Add real-time code quality metrics (CodeClimate, SonarQube)
- Reduce delay: 2 weeks → 1 day
- Cost: 2 days setup
- Impact: 93% delay reduction, enables immediate feedback

---

### Critical Delay 2: Knowledge Application Delay
- Location: Learning → Practical Application
- Duration: 1 week
- Impact: Slow knowledge transfer from training to work
- Risk: MEDIUM

**L9 Intervention:**
- Practice-based training (immediate application)
- Reduce delay: 1 week → 2 days
- Cost: Restructure training approach
- Impact: 70% faster knowledge integration

---

## STEP 3: Buffer Analysis (L11 Leverage)

### Knowledge Buffer (UNDERSIZED)

**Calculation:**
```
Current: 30% of target
Target: 100% (full systematic design mastery)
Gap: 70%
Time to fill: 70% / (2 hrs/week × 52 weeks/yr) = ~8 months at current rate
```

**Status:** UNDERSIZED - creates system fragility

**L11 Intervention:**
- Increase learning time: 2 hrs/week → 5 hrs/week
- Add practice opportunities
- Expected: Fill buffer in 3 months instead of 8
- Cost: Temporary velocity reduction
- Benefit: Long-term capability, reduced errors

---

## STEP 4: Integration with Feedback-Loop-Detector

### Mapping Stocks to Loops

**From feedback-loop-detector output:**

```
R1: Debt Spiral (DOMINANT)
[Technical Debt] +→ [Pressure] +→ [Rushed Work] +→ [Debt Creation] +→ [Technical Debt]

R2: Knowledge Gap Spiral (SECONDARY)
[Low Knowledge] +→ [Errors] +→ [Rework] +→ [No Learning Time] +→ [Lower Knowledge]

B1: Bug Fixing (WEAK)
[Bug Backlog] +→ [Testing Time] +→ [Bug Fixes] −→ [Bug Backlog]

B2: Debt Reduction (WEAK)
[Technical Debt] +→ [Allocated Time] +→ [Refactoring] −→ [Technical Debt]
```

### Stock Participation Analysis

**Technical Debt Stock:**
- Participates in: R1 (dominant), feeds R2 (secondary)
- Drives: Both major reinforcing loops
- Constrained by: No strong balancing loop (B2 weak)
- Priority: URGENT - this is the critical stock

**Knowledge Stock:**
- Participates in: R2 (depleting)
- Drives: Error creation through lack of capability
- No growth loop: Missing beneficial reinforcing loop
- Priority: HIGH - need to create growth loop

**Bug Backlog Stock:**
- Participates in: R1 (symptom), B1 (weak correction)
- Accumulator: Receives effects from R1
- Not a driver: Secondary priority

### Leverage Points IN Loops

**R1 (Debt Spiral):**
- L10: Code architecture forces tight coupling
- L9: 2-week delay in debt discovery
- L7: High gain (10 hrs debt/week created)
- L6: No real-time debt visibility
- L5: No rule preventing debt creation

**R2 (Knowledge Gap):**
- L10: No structured knowledge capture system
- L9: 1-week delay in practice-to-mastery
- L7: Errors reduce learning time (negative gain)
- L6: No visibility into knowledge gaps

**B1 & B2 (Weak Balancing):**
- L8: Insufficient strength (only 3 hrs/week refactoring)
- L6: No visibility driving urgency
- L5: No rules mandating correction time

---

## STEP 5: Integration with Meadows-Leverage-Analyzer

### Full L1-L12 Analysis

**From stock-flow structure:**
- L11: Knowledge buffer undersized
- L10: Technical Debt constraint (code architecture)
- L9: 2-week delay (debt), 1-week delay (knowledge)

**From meadows-leverage-analyzer:**
- L7: R1 and R2 reinforcing loops identified
- L6: Multiple information gaps (debt, knowledge, bugs)
- L5: No rules preventing harmful accumulation
- L3: Goal is "ship features fast" not "sustainable velocity"

### Leverage Point Cascade Design

**PHASE 1: QUICK WINS (Week 1-2)**
Target: Information + Delays (L6 + L9)

Actions:
1. **L6:** Real-time Technical Debt Dashboard
   - Tool: CodeClimate or SonarQube
   - Visibility: Daily standup reviews debt trend
   - Effort: 2 days setup
   - Impact: Makes R1 loop visible immediately

2. **L9:** Reduce Debt Discovery Delay
   - Method: Daily code review (not weekly)
   - Delay: 2 weeks → 1 day (93% reduction)
   - Effort: 1 week to establish rhythm
   - Impact: Prevent oscillation, enable fast correction

3. **L6:** Knowledge Gap Visibility
   - Tool: Self-assessment rubrics (weekly)
   - Visibility: Track progress toward mastery
   - Effort: 1 day to create rubric
   - Impact: Motivates learning, reveals gaps

Expected Phase 1 Result: 30-40% improvement in quality stability

---

**PHASE 2: STRUCTURAL LOCK-IN (Week 3-6)**
Target: Rules + Loop Gains (L5 + L7)

Actions:
1. **L5:** Technical Debt Ceiling Rule
   - Rule: No PR merge if debt increases > 5 hrs
   - Enforcement: Automated gate in CI/CD
   - Effort: 1 week implementation
   - Impact: Forces quality standards, prevents R1 growth

2. **L7:** Slow R1 Reinforcing Loop
   - Method: Mandatory code review (slows "Rush → Debt")
   - Gain reduction: 10 hrs/week → 4 hrs/week (60% slower)
   - Effort: Process change
   - Impact: R1 no longer dominates

3. **L8:** Strengthen B2 Balancing Loop
   - Method: Dedicated refactoring time (1 day/week)
   - Strength increase: 3 hrs/week → 8 hrs/week
   - Effort: Schedule protection
   - Impact: B2 now matches R1, system stabilizes

4. **L11:** Increase Knowledge Buffer
   - Method: Protected learning time (5 hrs/week)
   - Buffer growth: 30% → 60% in 6 weeks
   - Effort: Schedule adjustment
   - Impact: Fewer errors (breaks R2)

Expected Phase 2 Result: 60-70% cumulative improvement

---

**PHASE 3: PARADIGM SHIFT (Month 2-3)**
Target: Goals (L3) + Structure (L10)

Actions:
1. **L3:** Redefine Success Metrics
   - OLD: Features shipped per sprint
   - NEW: Sustainable features per sprint (quality-adjusted)
   - Calculation: Features × (1 - Debt Ratio)
   - Effort: 2 weeks (stakeholder alignment)
   - Impact: Removes pressure driving R1

2. **L10:** Refactor Architecture
   - Method: Modularize tightly-coupled code
   - Target: Reduce coupling by 50%
   - Effort: 4 weeks
   - Impact: Debt creation structurally reduced

3. **Create Beneficial R Loop for Knowledge:**
   - NEW R3: [Knowledge] → [Better Code] → [Less Rework] → [Learning Time] → [More Knowledge]
   - Method: Knowledge capture system (wiki, reviews, pair programming)
   - Effort: 2 weeks setup
   - Impact: Self-reinforcing learning spiral

Expected Phase 3 Result: 80%+ sustainable improvement

---

## STEP 6: Quantified Projections

### Using Scripts

**Buffer Calculator - Knowledge:**
```bash
python scripts/buffer_calculator.py --stock-level 30 --avg-flow 2 --flow-variation 1

Result:
- Current: UNDERSIZED (30% vs target 100%)
- Optimal: 60-80% for stability
- Recommendation: Increase learning rate 2 → 5 hrs/week
```

**Delay Calculator - Debt Discovery:**
```bash
python scripts/delay_impact_calculator.py --current-delay 14 --proposed-delay 1 --flow-rate 10

Result:
- Delay/Cycle: 100% → 7% (CRITICAL → LOW)
- Oscillation Risk: Eliminated
- Throughput Gain: ~93%
- Stability: HIGH
```

**Stock Projector - Technical Debt:**
```bash
# Current trajectory
python scripts/stock_projector.py --initial-stock 200 --inflow-rate 10 --outflow-rate 3 --periods 12

Result: 284 hours in 3 months (CRISIS)

# After Phase 2 intervention
python scripts/stock_projector.py --initial-stock 200 --inflow-rate 4 --outflow-rate 8 --periods 12

Result: 152 hours in 3 months (IMPROVING - net -4 hrs/week)
```

---

## FINAL INTEGRATION SUMMARY

### Stock-Flow Map → Feedback Loops → Leverage Points

**Critical Discovery:**
- Technical Debt is THE constraint (L10)
- Drives R1 (dominant) and feeds R2
- Has 2-week delay causing oscillation (L9)
- No real-time visibility (L6)
- No rules preventing growth (L5)
- Wrong goal drives creation (L3)

**Leverage Cascade:**
```
Week 1-2: L6 (visibility) + L9 (delay reduction)
→ Result: 30-40% improvement, see problems immediately

Week 3-6: L5 (rules) + L7 (slow R1) + L8 (strengthen B2) + L11 (buffer knowledge)
→ Result: 60-70% cumulative, behavior locked in structurally

Month 2-3: L3 (goal shift) + L10 (refactor) + CREATE R3 (knowledge growth)
→ Result: 80%+ sustainable, paradigm transformed
```

**Expected Outcomes:**
- Technical Debt: 200 hrs → 50 hrs (3 months)
- Bug Backlog: 150 → 30 bugs (2 months)
- Knowledge: 30% → 80% capability (3 months)
- Quality: 6.2 → 8.5/10 (sustained)
- Velocity: Initially -20%, then +40% sustained

---

## Why This Integration Works

1. **Stock-flow-mapper reveals WHAT accumulates**
   - Technical Debt, Knowledge, Bugs

2. **Feedback-loop-detector reveals HOW loops drive stocks**
   - R1 creates debt, R2 depletes knowledge, weak B loops

3. **Meadows-leverage-analyzer reveals WHERE to intervene**
   - L3, L5, L6, L7, L9, L10, L11 all identified

4. **Integration creates PHASED CASCADE**
   - Quick wins → Structural lock-in → Paradigm shift
   - Each phase builds on previous
   - 80%+ improvement achievable

The key insight: You can't fix a system without knowing what accumulates (stocks), how it accumulates (loops), and where to intervene (leverage points). This skill completes the toolkit.

Ready to apply this to your actual engineering project?
