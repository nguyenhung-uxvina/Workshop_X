---
name: stock-flow-mapper
description: Map stocks (accumulations) and flows (rates of change) in any system, identifying critical buffers, delays, and constraints. Integrates with feedback-loop-detector to show which stocks participate in R/B loops, and with meadows-leverage-analyzer to identify L9 (delays), L10 (structure), and L11 (buffers) leverage points. Use when users describe accumulation problems (technical debt, inventory, knowledge, capacity, trust), ask "what's accumulating?", "where are the bottlenecks?", "what's the constraint?", "map the flows", or need to understand system dynamics through stock-flow structure. Works with engineering projects, manufacturing, organizational systems, learning systems, or any domain where understanding what accumulates and how it flows reveals leverage points.
---

# Stock-Flow Mapper

Map system stocks and flows to identify constraints, buffers, delays, and leverage points. Integrates with feedback-loop-detector and meadows-leverage-analyzer for complete system intervention design.

---

## Quick Start (5 min)

### 1. Identify Stocks (2 min)

**What accumulates over time?** Look for nouns that build up or deplete:

**Engineering/Technical:**
- Technical debt (hours)
- Code quality (quality score)
- Team knowledge (person-hours)
- Bug backlog (count)
- Testing coverage (%)
- Documentation completeness (%)

**Manufacturing/Operations:**
- Inventory (units)
- Work-in-progress (units)
- Equipment reliability (MTBF)
- Process capability (Cpk)
- Supplier relationships (maturity score)

**Organizational:**
- Trust (qualitative)
- Morale (survey score)
- Capability (skill level)
- Reputation (brand value)
- Customer satisfaction (NPS)

**For each stock, record:**
```
Stock: [Name]
Current Level: [High/Medium/Low or numeric value]
Units: [hours, units, score, etc.]
Type: [Buffer/Constraint] (See Step 2)
```

### 2. Classify Stock Type (1 min)

**Buffer Stock:** Stabilizes system, absorbs variation
- Example: Inventory buffer allows production flexibility
- Too large → rigidity, waste, slow response
- Too small → fragility, oscillation, stockouts

**Constraint Stock:** Limits throughput, bottleneck
- Example: Limited testing capacity constrains release rate
- Theory of Constraints: System throughput = constraint throughput
- Focus improvement here for maximum system impact

**Decision rule:** If stock level limits something else → Constraint. If stock absorbs shocks → Buffer.

### 3. Map Flows (2 min)

**For each stock, identify:**

**Inflows** (increase stock):
```
Inflow: [Name]
Rate: [Fast/Medium/Slow or numeric]
Control: [What governs this rate?]
Delay: [Time from cause to effect]
```

**Outflows** (decrease stock):
```
Outflow: [Name]
Rate: [Fast/Medium/Slow or numeric]
Control: [What governs this rate?]
Delay: [Time from cause to effect]
```

**Example:**
```
Stock: Knowledge
  ↑ Inflow: Learning (rate: 2 hrs/week, delay: 1 week to apply)
    Control: Training time allocated, practice opportunities
  ↓ Outflow: Forgetting (rate: 10%/month, delay: none)
    Control: Usage frequency, complexity of material
```

---

## Delay Analysis (L9 Leverage Point)

Delays create oscillation, instability, and overshoot. Critical for system behavior.

### Delay Types

**Information Delay:** Time to observe stock level
- "Monthly reports show status from 30 days ago"
- Impact: Decisions based on outdated data

**Response Delay:** Time from decision to action
- "Procurement takes 3 months minimum"
- Impact: Cannot respond quickly to changes

**Material Delay:** Time for flow to change stock
- "New hires take 6 months to become productive"
- Impact: Long lag between hiring and capacity increase

### Delay Impact Assessment

Use `scripts/delay_impact_calculator.py` to quantify:
```bash
python scripts/delay_impact_calculator.py --current-delay 30 --proposed-delay 5 --flow-rate 10
```

**Manual estimation:**
1. Identify delay duration (days/weeks/months)
2. Compare to rate of change in system
3. If delay > 50% of problem cycle time → HIGH oscillation risk

**Red flags:**
- Delay > 50% of problem cycle time
- Multiple delays compound (multiply)
- No visibility into delayed process

**Leverage interventions (L9):**
- Shorten delays: Faster feedback, concurrent processing
- Buffer against delays: Increase stock size temporarily
- Slow the system: Reduce rate of change to match delays
- Anticipate: Forecasting, leading indicators

See `references/delay-patterns.md` for detailed examples.

---

## Buffer Analysis (L11 Leverage Point)

Stock-to-flow ratios determine resilience vs rigidity.

### Buffer Calculation

**Stock-to-Flow Ratio:**
```
Buffer Size = Stock Level / Average Flow Rate
```

**Example:**
- Inventory: 1000 units
- Daily demand: 50 units/day
- Buffer = 1000/50 = 20 days

### Buffer Optimization

**Too Small (< 25% of variation range):**
- Symptom: Frequent stockouts, oscillation
- Impact: System fragility, firefighting
- Fix: Increase buffer OR reduce flow variation

**Optimal (25-75% of variation range):**
- Absorbs normal variation
- Maintains stability
- Cost-effective

**Too Large (> 75% of variation range):**
- Symptom: Slow response, waste, rigidity
- Impact: Cannot adapt quickly
- Fix: Reduce buffer OR increase flow variation handling

**Calculation:**
```
Variation Range = Max Flow - Min Flow
Optimal Buffer = Stock that absorbs 50-75% of variation
```

Use `scripts/buffer_calculator.py`:
```bash
python scripts/buffer_calculator.py --stock-level 1000 --avg-flow 50 --flow-variation 20
```

See `references/buffer-sizing-guide.md` for industry-specific guidance.

---

## Accumulation Pattern Analysis

### Growth Pattern
**Inflow > Outflow → Stock Increasing**

**Positive growth:**
- Knowledge accumulation
- Capability building
- Customer trust

**Negative growth:**
- Technical debt spiral
- Bug backlog explosion
- Cost overrun

**Questions:**
- Is growth desirable? (Knowledge: yes, Debt: no)
- Is growth sustainable? (Check constraints)
- Is growth controlled? (Reinforcing loop check)

### Depletion Pattern
**Outflow > Inflow → Stock Decreasing**

**Concerning depletion:**
- Team morale declining
- Quality eroding
- Cash burning

**Intentional depletion:**
- Paying down debt
- Reducing inventory
- Clearing backlog

**Questions:**
- Is depletion intentional?
- When does stock hit zero? (Crisis point)
- Can we slow outflow or increase inflow?

### Equilibrium Pattern
**Inflow ≈ Outflow → Stock Stable**

**True equilibrium:**
- Balanced system
- Sustainable operation

**False equilibrium:**
- Both flows weak (stagnation)
- Delays hide imbalance

**Questions:**
- Is equilibrium at desired level?
- How robust is balance?
- What happens if flows disturbed?

### Oscillation Pattern
**Stock Alternates Up/Down**

**Causes:**
- Delays in feedback
- Overreaction to changes
- Batch processing

**Indicators:**
- Regular boom-bust cycles
- Inventory sawtooth pattern
- Hire-fire-hire cycles

**Solutions (L9):**
- Reduce delays
- Smooth flow rates
- Add anticipatory information

See `references/pattern-library.md` for worked examples.

---

## Integration: Feedback Loop Detector

**When to integrate:** After identifying stocks and flows, detect which participate in loops.

### Process

**1. Feed stocks/flows to feedback-loop-detector:**
```
System Variables:
- Stock: Technical Debt (40 hours)
- Flow: Bug Creation Rate (5 bugs/week)
- Flow: Fixing Rate (3 bugs/week)
- Auxiliary: Pressure (deadline proximity)
```

**2. Feedback-loop-detector identifies loops:**
```
R1: [Tech Debt] +→ [Pressure] +→ [Rushed Work] +→ [Bug Rate] +→ [Tech Debt]
B1: [Debt] +→ [Fixing Time Allocated] +→ [Fixing Rate] −→ [Debt]
```

**3. Map stocks in loops:**
```
Technical Debt Stock participates in:
- R1 (reinforcing) - drives debt growth
- B1 (balancing) - attempts to reduce debt

Current: R1 dominates (debt growing)
```

**4. Stock-specific insights:**
- **Which stocks are in R loops?** → Growth/collapse risks
- **Which stocks are in B loops?** → Stabilization targets
- **Which loops affect critical stocks?** → Intervention priorities

**5. Leverage points in loops:**
```
R1 contains:
- L9: Delay in "Rushed Work → Bug Rate" (2 weeks)
- L10: Structure of "Technical Debt" accumulation (code architecture)
- L7: Gain of reinforcing loop (how much rushed work?)

Intervention cascade:
Week 1: L9 - Add real-time debt visibility (reduce delay)
Week 2: L7 - Slow R1 (code review mandatory, slows rush)
Month 1: L10 - Refactor architecture (change debt structure)
```

**Output format:**
```markdown
## Stock-Loop Integration

### Critical Stock: [Name]
**Participates in:**
- R1 (dominant, driving growth)
- B1 (weak, attempting balance)

**Leverage points IN these loops:**
- L9: [Delay intervention]
- L10: [Structure intervention]
- L7: [Loop gain intervention]

**Recommended cascade:** [Phase 1] → [Phase 2] → [Phase 3]
```

See `references/stock-loop-integration.md` for detailed examples.

---

## Integration: Meadows Leverage Analyzer

**When to integrate:** After mapping stocks/flows/delays, identify all L9-L10-L11 leverage points.

### Automatic Detection

Stock-flow mapping reveals three leverage point types:

**L11 - Buffers (Stock Sizes):**
```
Buffer Analysis → L11 Interventions
- Undersized buffer detected → Increase stock
- Oversized buffer detected → Reduce stock
- Optimal already → No action
```

**L10 - Physical Structure (Material Stocks/Flows):**
```
Constraint Detection → L10 Interventions
- Bottleneck stock identified → Add capacity
- Flow structure problematic → Redesign flow paths
- Stock architecture limiting → Restructure system
```

**L9 - Delays:**
```
Delay Mapping → L9 Interventions
- Long delays causing oscillation → Shorten delays
- Information lags causing errors → Speed feedback
- Response delays limiting adaptation → Reduce lag
```

### Process

**1. Stock-flow-mapper produces:**
```
System Structure:
- 5 stocks identified
- 10 flows mapped
- 8 delays characterized
- 2 constraints found
- 3 buffers analyzed
```

**2. Call meadows-leverage-analyzer with context:**
```
System: [Name]
Constraints: [Stock X is L10 bottleneck]
Delays: [3 delays > 2 weeks each]
Buffers: [Stock Y undersized, Stock Z oversized]

Request: Identify L1-L12, integrate with stock-flow structure
```

**3. Meadows-leverage-analyzer returns full L1-L12:**
```
L12-L10: Parameter/buffer/structure changes
L9: Delay reductions (from our delay mapping)
L8-L7: Loop strength adjustments
L6-L5: Information/rules changes
L4-L3: Self-organization/goals
L2-L1: Paradigm/transcendence
```

**4. Synthesize leverage cascade:**
```
Priority Cascade (High → Low leverage):

IMMEDIATE (Week 1-2): L6 + L9
- L6: Add dashboard showing [Stock X] real-time
- L9: Reduce [Delay Y] from 3 weeks to 1 week

SHORT-TERM (Week 3-6): L5 + L10
- L5: New rule: Cannot deploy if [Stock Z] < threshold
- L10: Add capacity to [Constraint Stock X]

LONG-TERM (Month 2-3): L3
- L3: Change goal from speed to sustainability
```

**Output format:**
```markdown
## Leverage Point Cascade

### From Stock-Flow Analysis:
- **L11:** [Buffer X] undersized → Increase to [target]
- **L10:** [Constraint Y] limits throughput → [specific fix]
- **L9:** [Delay Z] causes oscillation → Reduce to [target]

### From Meadows Analysis (Full L1-L12):
[Complete leverage point hierarchy]

### Integrated Intervention Strategy:
**Phase 1 (Immediate - Week 1-2):**
- [L6 action using stock visibility]
- [L9 action reducing specific delay]

**Phase 2 (Short-term - Week 3-6):**
- [L5 action creating rules around stocks]
- [L10 action addressing constraint]

**Phase 3 (Long-term - Month 2+):**
- [L3 action redefining system goals]

**Expected cascade:** 30% (Phase 1) → 60% (Phase 2) → 80% (Phase 3)
```

See `references/leverage-cascade-design.md` for complete methodology.

---

## Output Format

### Stock-Flow Diagram

**ASCII Art Version:**
```
[Stock: Knowledge]
  Current: Low (30% of target)
  Type: Buffer
  
  ↑ INFLOW: Learning
     Rate: Medium (2 hrs/week)
     Control: Training time + Practice opportunities
     Delay: 1 week (practice to mastery)
  
  ↓ OUTFLOW: Forgetting  
     Rate: Slow (10%/month)
     Control: Usage frequency
     Delay: None (immediate)
  
  Status: GROWING SLOWLY (net +20% over 3 months)
  Buffer: UNDERSIZED (need 3x current for stability)
```

**Structured List Version:**
```markdown
## Stock Inventory

### Stock: [Name]
- **Current Level:** [Value + Units]
- **Type:** [Buffer/Constraint]
- **Classification:** [Critical/Important/Routine]

**Inflows:**
1. [Flow Name]
   - Rate: [Fast/Med/Slow or numeric]
   - Control: [What governs rate]
   - Delay: [Duration]

**Outflows:**
1. [Flow Name]
   - Rate: [Fast/Med/Slow or numeric]
   - Control: [What governs rate]
   - Delay: [Duration]

**Pattern:** [Growth/Depletion/Equilibrium/Oscillation]
**Buffer Status:** [Undersized/Optimal/Oversized]
```

### Critical Stocks Ranking

```markdown
## Critical Stocks (Priority Order)

### 1. [Stock Name] - CONSTRAINT ⚠️
- **Why critical:** Limits system throughput
- **Current bottleneck:** [Specific limitation]
- **System impact:** [Cascade effects]
- **Leverage:** L10 (change structure)
- **Action:** [Specific intervention]

### 2. [Stock Name] - VULNERABLE BUFFER
- **Why critical:** Depleting dangerously
- **Risk:** [What breaks if it hits zero]
- **Timeline:** [When crisis occurs]
- **Leverage:** L11 (increase buffer)
- **Action:** [Specific intervention]

### 3. [Stock Name] - KEY REINFORCING LOOP
- **Why critical:** Drives growth/collapse
- **Loop:** [R1/R2 from feedback-loop-detector]
- **Direction:** [Growing or depleting]
- **Leverage:** L7 (slow/speed loop gain)
- **Action:** [Specific intervention]
```

### Delay Hotspots

```markdown
## Delay Analysis (L9 Leverage)

### Critical Delay 1: [Name]
- **Location:** [Where in system]
- **Duration:** [Time period]
- **Impact:** Causes oscillation in [Stock X]
- **Evidence:** [Boom-bust pattern, sawtooth, etc.]
- **Risk Level:** HIGH/MEDIUM/LOW
- **Intervention:** [Specific action to reduce delay]
- **Expected improvement:** [Quantified estimate]

### Critical Delay 2: [Name]
[Same structure]
```

### Integration Insights

```markdown
## Integration Report

### Feedback Loop Integration
**Stock [X] feeds:**
- R1: [Loop description] (from feedback-loop-detector)
  - Leverage: L7 (gain), L9 (delay within loop)
  - Status: Dominant, driving [problem]
  
- B1: [Loop description] (from feedback-loop-detector)
  - Leverage: L8 (strength), L9 (delay)
  - Status: Weak, attempting to balance

**Stock [Y] is constraint in:**
- L10 leverage point (from meadows-leverage-analyzer)
- Bottleneck identified: [Specific limitation]
- System-wide impact: [Cascade]

### Leverage Point Discovery
**From stock-flow analysis:**
- L11: [Buffer X] needs adjustment
- L10: [Constraint Y] limits system
- L9: [Delay Z] creates oscillation

**From meadows-leverage-analyzer:**
- Full L1-L12 hierarchy available
- High-leverage interventions: [L3, L5, L6]
```

### Intervention Cascade

```markdown
## Recommended Intervention Strategy

### PHASE 1: QUICK WINS (Week 1-2)
**Target:** Information + Delays (L6 + L9)

**Actions:**
1. **L6 (Information):** Add real-time dashboard for [Stock X]
   - Why: Makes accumulation visible, enables fast response
   - Effort: 2 days
   - Impact: 20-30% improvement in reaction time

2. **L9 (Delay):** Reduce [Delay Y] from [X] to [Y]
   - Why: Prevents oscillation in [Stock Z]
   - Effort: 1 week
   - Impact: Stabilize [process]

**Expected Phase 1 Result:** 30-40% improvement, builds credibility

### PHASE 2: STRUCTURAL LOCK-IN (Week 3-6)
**Target:** Rules + Constraints (L5 + L10)

**Actions:**
1. **L5 (Rules):** New policy: [Specific rule around Stock X]
   - Why: Prevents future accumulation of [problem]
   - Effort: 1 week (design + approval)
   - Impact: Permanent behavior change

2. **L10 (Structure):** Address [Constraint Stock]
   - Why: Bottleneck limits system throughput
   - Effort: 3-4 weeks
   - Impact: 2x system capacity

**Expected Phase 2 Result:** 60-70% cumulative improvement

### PHASE 3: PARADIGM SHIFT (Month 2-3)
**Target:** Goals (L3)

**Actions:**
1. **L3 (Goal):** Redefine success from [X] to [Y]
   - Why: Current goal drives problematic accumulation
   - Effort: 2-4 weeks (stakeholder alignment)
   - Impact: Systemic transformation

**Expected Phase 3 Result:** 80%+ sustainable improvement

### Monitoring Plan
**Track these stocks weekly:**
- [Stock X]: Target = [value], Current = [value]
- [Stock Y]: Target = [value], Current = [value]

**Review cascade effectiveness monthly**
```

---

## Quality Checklist

Before finalizing analysis:

- [ ] All critical stocks identified (>80% of system behavior)
- [ ] All stocks classified (Buffer vs Constraint)
- [ ] Inflows and outflows mapped for each stock
- [ ] Flow controls identified (what governs rates)
- [ ] Delays estimated (with units: days/weeks/months)
- [ ] Accumulation patterns analyzed (growth/depletion/equilibrium/oscillation)
- [ ] Stock-to-flow ratios calculated for buffers
- [ ] Delays assessed for oscillation risk
- [ ] Critical stocks ranked by system impact
- [ ] Stocks mapped to feedback loops (R/B)
- [ ] Leverage points identified (L9, L10, L11 minimum)
- [ ] Integration with meadows-leverage-analyzer performed
- [ ] Intervention cascade designed (Phase 1-3)
- [ ] Expected impacts quantified (with percentages or metrics)
- [ ] Monitoring plan specified

---

## Common Pitfalls

**Missing Hidden Stocks:**
- Looked only at physical stocks (inventory) but missed intangible (trust, knowledge)
- Fix: Ask "What else accumulates over time?" across all domains

**Confusing Flows with Stocks:**
- "Production" is a flow, not a stock
- Stock = accumulation. Flow = rate of change
- Fix: Use units (stock = quantity, flow = quantity/time)

**Ignoring Delays:**
- Assumed all flows are instant
- Reality: Every flow has delay
- Fix: Estimate realistic delays, mark on diagram

**Misidentifying Constraints:**
- Called everything a constraint
- True constraint: THE bottleneck limiting throughput
- Fix: Use Theory of Constraints - only 1-2 true constraints

**Undersizing Buffers:**
- Made buffer exactly equal to average flow
- Variation requires buffer > average
- Fix: Calculate variation range, size for 50-75% absorption

**Parameter-Only Fixes:**
- Jumped to L12 (change numbers) immediately
- Stock-flow analysis reveals L9-L10-L11
- Fix: Always identify structural and delay leverage first

**Ignoring Integration:**
- Did stock-flow analysis in isolation
- Missed connections to loops and higher leverage
- Fix: Always call feedback-loop-detector and meadows-leverage-analyzer

**Vague Flow Controls:**
- "Production is controlled by... production"
- Need specific: policies, resources, decisions, information
- Fix: Ask "What specific factor governs this flow rate?"

---

## Scripts

**Buffer Calculator:** `scripts/buffer_calculator.py`
```bash
python scripts/buffer_calculator.py --stock-level 1000 --avg-flow 50 --flow-variation 20
```

**Delay Impact Calculator:** `scripts/delay_impact_calculator.py`
```bash
python scripts/delay_impact_calculator.py --current-delay 30 --proposed-delay 5 --flow-rate 10
```

**Stock Growth Projector:** `scripts/stock_projector.py`
```bash
python scripts/stock_projector.py --initial-stock 100 --inflow-rate 20 --outflow-rate 15 --periods 12
```

All scripts have `--help` for detailed usage.

---

## References

**Deep Dives:**
- `references/delay-patterns.md` - Delay types, detection, interventions
- `references/buffer-sizing-guide.md` - Industry-specific buffer optimization
- `references/pattern-library.md` - Growth/depletion/equilibrium/oscillation examples
- `references/stock-loop-integration.md` - How stocks participate in R/B loops
- `references/leverage-cascade-design.md` - Complete integration with L1-L12

**Theory Foundation:**
- `/mnt/project/System_Change_Model.md` - Meadows' stocks/flows/delays
- Donella Meadows, "Thinking in Systems" (bathtub principle, delays, buffers)
- Theory of Constraints (constraint identification)

**Integration:**
- Works WITH feedback-loop-detector to map stocks in R/B loops
- Works WITH meadows-leverage-analyzer to identify L9-L10-L11
- Feeds INTO engineering-systems-mapper for visualization
- Feeds INTO dmir-defense-systems-mentor for manufacturing analysis

---

## Tips for Success

1. **Start with one critical stock** - Don't map everything, find the bottleneck
2. **Use real numbers** - "Delay = 2 weeks" > "Delay = slow"
3. **Name stocks precisely** - "Technical Debt (hours)" > "Problems"
4. **Map flow controls explicitly** - "Governed by hiring policy" not "controlled"
5. **Estimate delays realistically** - Talk to people who do the work
6. **Calculate buffer ratios** - Math reveals undersizing/oversizing
7. **Always integrate** - Call feedback-loop and leverage-point tools
8. **Design cascades, not silver bullets** - Phase 1→2→3 for 80% improvement
9. **Quantify impacts** - "30% improvement" > "significant improvement"
10. **Monitor stocks continuously** - Set up dashboards, track weekly
