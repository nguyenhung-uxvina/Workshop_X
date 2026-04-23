# Stock Accumulation Pattern Library

Comprehensive examples of Growth, Depletion, Equilibrium, and Oscillation patterns across domains.

---

## Pattern Classification Framework

### Four Core Patterns

**1. GROWTH (Inflow > Outflow)**
- Stock increasing over time
- Can be beneficial (knowledge) or harmful (debt)
- Driven by reinforcing loops or weak balancing loops
- Requires intervention if harmful or unsustainable

**2. DEPLETION (Outflow > Inflow)**
- Stock decreasing over time
- Can be beneficial (paying debt) or harmful (morale collapse)
- Crisis point when stock hits zero
- Requires intervention to prevent failure

**3. EQUILIBRIUM (Inflow ≈ Outflow)**
- Stock stable over time
- Can be true balance or false stability (delays hiding imbalance)
- Maintained by balancing loops
- May need intervention if equilibrium at wrong level

**4. OSCILLATION (Stock alternates up/down)**
- Stock cycles repeatedly
- Caused by delays in feedback loops
- Always problematic (instability, waste, stress)
- Requires intervention to dampen or stabilize

---

## GROWTH PATTERNS

### G1: Beneficial Growth - Knowledge Accumulation

**Domain:** Software engineering team learning systematic design

**Stock:** Team Knowledge (measured in capability %)

**Flows:**
```
↑ Inflow: Learning from training + practice
  Rate: 5% capability/month
  Control: Training time allocated, quality of materials
  Delay: 2 weeks (study to application)

↓ Outflow: Forgetting from non-use
  Rate: 2% capability/month
  Control: Frequency of practice
  Delay: None (immediate decay)

Net Flow: +3% capability/month (GROWTH)
```

**Pattern trajectory:**
```
Month 0: 20% capability (baseline)
Month 1: 23% (20 + 5 - 2)
Month 2: 26%
Month 3: 29%
Month 6: 38%
Month 12: 56%
```

**Characteristics:**
- Exponential if learning builds on learning (R loop)
- S-curve if approaching mastery limit (B loop kicks in)
- Sustainable growth rate: 2-5% monthly

**Intervention:**
- AMPLIFY: Increase learning rate (more practice)
- SUSTAIN: Maintain regular usage (prevent forgetting)
- ACCELERATE: Spaced repetition, deliberate practice

**Real example:**
```
Defense contractor team: 8 engineers
Month 0: 30% Pahl-Beitz capability
Intervention: 5 hrs/week structured learning
Month 3: 50% capability
Month 6: 75% capability
Result: Design quality improved 40%, rework reduced 60%
```

---

### G2: Harmful Growth - Technical Debt Spiral

**Domain:** Software development under pressure

**Stock:** Technical Debt (hours of refactoring needed)

**Flows:**
```
↑ Inflow: Rushed code creating debt
  Rate: 10 hours/week
  Control: Deadline pressure, feature prioritization
  Delay: 2 weeks (code ships, debt discovered later)

↓ Outflow: Refactoring reducing debt
  Rate: 3 hours/week
  Control: Time allocated to "tech debt tickets"
  Delay: None (immediate reduction when done)

Net Flow: +7 hours/week (GROWTH)
```

**Pattern trajectory:**
```
Week 0: 50 hours debt
Week 4: 78 hours
Week 8: 106 hours
Week 12: 134 hours
Week 24: 218 hours (CRISIS - velocity drops 50%)
```

**Characteristics:**
- Reinforcing loop: More debt → more pressure → more rushing → more debt
- Exponential if unchecked
- Crisis point: ~3-4x initial debt level (system paralysis)

**Intervention:**
- SLOW R loop: Mandatory code review (reduces inflow)
- STRENGTHEN B loop: Dedicated refactoring time (increases outflow)
- L6: Real-time debt dashboard (visibility)
- L5: Debt ceiling rule (structural limit)

**Real example:**
```
Startup: 100 hours initial debt
Growth rate: +5 hrs/week (net)
Crisis at 400 hours: Feature velocity 10% of original
Intervention: Dedicated refactoring sprint (2 weeks)
Result: Debt → 250 hours, then maintained at 150 hours
```

---

### G3: Unsustainable Growth - Customer Acquisition

**Domain:** SaaS startup, venture-funded growth

**Stock:** Customer Base (number of active customers)

**Flows:**
```
↑ Inflow: New customer acquisition
  Rate: 100 customers/month
  Control: Marketing spend, product-market fit
  Delay: 1 month (lead to conversion)

↓ Outflow: Customer churn
  Rate: 5% of customer base/month
  Control: Product quality, support effectiveness
  Delay: None (immediate when they churn)

Net Flow: Depends on base size (GROWTH initially, then...)
```

**Pattern trajectory:**
```
Month 0: 100 customers, churn 5 = net +95
Month 3: 385 customers, churn 19 = net +81
Month 6: 823 customers, churn 41 = net +59
Month 12: 1,560 customers, churn 78 = net +22
Month 18: 1,893 customers, churn 95 = net +5 (SLOWING)
Month 20: 1,950 customers, churn 98 = net +2 (PLATEAU)
```

**Characteristics:**
- S-curve: Fast growth → slow growth → plateau
- Outflow grows with stock (percentage-based)
- Eventually reaches equilibrium when inflow = outflow
- Typical for market saturation

**Intervention:**
- Phase 1 (Growth): Maximize acquisition (high marketing spend)
- Phase 2 (Maturity): Focus on retention (reduce churn)
- Phase 3 (Plateau): Optimize equilibrium point (profitability)

**Real example:**
```
B2B SaaS company:
Year 1: 500 customers, 2% churn → aggressive growth
Year 2: 2,000 customers, 5% churn → growth slowing
Year 3: 3,200 customers, 8% churn → near equilibrium
Lesson: Churn rate critical at scale
```

---

## DEPLETION PATTERNS

### D1: Beneficial Depletion - Debt Paydown

**Domain:** Organization reducing accumulated technical debt

**Stock:** Technical Debt (hours)

**Flows:**
```
↑ Inflow: New debt creation (minimal)
  Rate: 2 hours/week
  Control: Code review gates, quality standards
  Delay: 1 week (immediate feedback)

↓ Outflow: Dedicated refactoring
  Rate: 10 hours/week
  Control: Protected refactoring time
  Delay: None

Net Flow: -8 hours/week (DEPLETION - intentional)
```

**Pattern trajectory:**
```
Week 0: 200 hours debt
Week 4: 168 hours
Week 8: 136 hours
Week 12: 104 hours
Week 20: 40 hours (TARGET - maintenance level)
```

**Characteristics:**
- Linear depletion (constant outflow > inflow)
- Intentional and controlled
- Goal: Reach optimal level, then maintain
- Time to target predictable

**Intervention:**
- MAINTAIN: Keep outflow > inflow until target
- SUSTAIN: Switch to equilibrium at optimal level
- MONITOR: Ensure quality not degrading

**Real example:**
```
Enterprise software team:
Initial: 400 hours debt (crisis level)
Dedicated effort: 1 sprint/month for 6 months
Result: 50 hours debt (maintenance level)
Sustained: Equilibrium at 5% of codebase
```

---

### D2: Harmful Depletion - Team Morale Collapse

**Domain:** Overworked software team

**Stock:** Team Morale (scale 1-10)

**Flows:**
```
↑ Inflow: Positive experiences
  Rate: +0.5 points/month (wins, recognition, work-life balance)
  Control: Management actions, project success
  Delay: 2 weeks (actions to morale impact)

↓ Outflow: Negative experiences
  Rate: -2.0 points/month (crunch time, failures, burnout)
  Control: Workload, pressure, support
  Delay: None (immediate impact)

Net Flow: -1.5 points/month (DEPLETION - harmful)
```

**Pattern trajectory:**
```
Month 0: 7.0 morale (good)
Month 2: 4.0 morale (concerning)
Month 4: 1.0 morale (CRISIS)
Month 5: Attrition starts (people quit)
Month 6: Team collapse (project failure)
```

**Characteristics:**
- Accelerating depletion (low morale → more stress → lower morale)
- Reinforcing loop drives it
- Crisis point: Below 3.0 (attrition begins)
- Recovery takes 3-5x longer than decline

**Intervention:**
- EMERGENCY: Reduce outflow immediately (remove pressure)
- SHORT-TERM: Increase inflow (quick wins, recognition)
- LONG-TERM: Change work conditions (L5 rules, L3 goals)

**Real example:**
```
Game studio: Crunch before launch
Month 0: 8.0 morale
Month 3: 3.0 morale (12-hour days)
Post-launch: 40% attrition
Recovery: 9 months to restore team
Lesson: Morale depletes fast, recovers slowly
```

---

### D3: Critical Depletion - Cash Burn

**Domain:** Startup burning through runway

**Stock:** Cash in Bank ($)

**Flows:**
```
↑ Inflow: Revenue
  Rate: $50K/month
  Control: Sales, customer acquisition
  Delay: 1-2 months (sales to payment)

↓ Outflow: Operating expenses
  Rate: $150K/month
  Control: Headcount, spend discipline
  Delay: None (immediate)

Net Flow: -$100K/month (DEPLETION - critical)
```

**Pattern trajectory:**
```
Month 0: $1,200K cash
Month 3: $900K
Month 6: $600K
Month 9: $300K (WARNING - 3 months runway)
Month 12: $0 (CRISIS - company fails)
```

**Characteristics:**
- Linear depletion with known endpoint
- Crisis point: 3-6 months runway (panic)
- Zero point: Company death
- Intervention must happen BEFORE crisis

**Intervention:**
- IMMEDIATE: Reduce burn (cut expenses)
- SHORT-TERM: Increase revenue (sales focus)
- STRATEGIC: Raise funding OR pivot

**Real example:**
```
SaaS startup:
Initial: $2M raised, $200K/month burn
Revenue: $50K/month growing 20%/month
Runway: 10 months at initial rate
Action at Month 6: Cut burn to $100K/month
Result: Reached profitability at Month 14
Lesson: Don't wait for crisis to act
```

---

## EQUILIBRIUM PATTERNS

### E1: True Equilibrium - Sustainable Production

**Domain:** Manufacturing plant at steady state

**Stock:** Finished Goods Inventory (units)

**Flows:**
```
↑ Inflow: Production
  Rate: 1,000 units/day
  Control: Manufacturing capacity, schedule
  Delay: 1 day (production to inventory)

↓ Outflow: Sales/Shipments
  Rate: 1,000 units/day (average)
  Control: Customer demand, sales forecast
  Delay: None (immediate when shipped)

Net Flow: 0 units/day (EQUILIBRIUM)
```

**Pattern trajectory:**
```
Day 0: 5,000 units
Day 30: 5,000 units (stable)
Day 60: 5,000 units (stable)
Day 90: 5,000 units (stable)
```

**Characteristics:**
- Balancing loop maintains set point
- Stock oscillates slightly around target
- Robust to small disturbances
- Optimal for predictable demand

**Intervention:**
- MAINTAIN: Continue balancing loop strength
- MONITOR: Watch for demand changes
- ADJUST: Modify target if conditions change

**Real example:**
```
Automotive assembly:
Target inventory: 3 days production
Daily production: 500 vehicles
Daily shipments: 500 vehicles
Result: 1,500 vehicle buffer maintained
Efficiency: Optimal (JIT principles)
```

---

### E2: False Equilibrium - Hidden Delays

**Domain:** Software bugs (appears stable, actually imbalanced)

**Stock:** Bug Backlog (number of bugs)

**Flows:**
```
↑ Inflow: Bug discovery
  Rate: 10 bugs/week
  Control: Testing thoroughness, code complexity
  Delay: 3 weeks (bug creation to discovery)

↓ Outflow: Bug fixes
  Rate: 10 bugs/week
  Control: QA team capacity
  Delay: None (immediate when fixed)

Net Flow: 0 bugs/week (appears EQUILIBRIUM, but...)
```

**Pattern trajectory:**
```
Week 0: 100 bugs backlog (stable?)
Week 1-3: 100 bugs (appears stable due to delay)
Week 4: Sudden spike to 130 bugs (delay reveals)
Week 5-6: Spike to 160 bugs
Week 7: Crisis recognized, bugs actually 190
```

**Characteristics:**
- Delay masks true imbalance
- Appears stable, actually accumulating
- Crisis when delay catches up
- Typical in systems with long information delays

**Intervention:**
- L9: Reduce discovery delay (faster testing)
- L6: Real-time bug tracking (visibility)
- Recognize: Not equilibrium, delayed growth

**Real example:**
```
Web application:
Appeared stable: 50 bugs backlog (constant)
Reality: 3-week test cycle masked accumulation
Crisis: After major release, 200 bugs discovered
Lesson: Check for hidden delays in "stable" systems
```

---

### E3: Undesirable Equilibrium - Poverty Trap

**Domain:** Low-skill workforce in economically depressed region

**Stock:** Average Skill Level (1-10 scale)

**Flows:**
```
↑ Inflow: Skill development
  Rate: 0.5 points/year (low because no training investment)
  Control: Limited by low income, no employers investing
  Delay: 1 year (training to competency)

↓ Outflow: Skill decay / Brain drain
  Rate: 0.5 points/year (skilled workers leave, knowledge decays)
  Control: Lack of opportunity drives emigration
  Delay: None

Net Flow: 0 points/year (EQUILIBRIUM - but at LOW level)
```

**Pattern trajectory:**
```
Year 0: 3.0 skill level (low)
Year 5: 3.0 skill level (stable at low)
Year 10: 3.0 skill level (stuck)
```

**Characteristics:**
- Balancing loop at wrong set point
- Self-reinforcing trap (low skills → low income → low training → low skills)
- Stable but harmful
- Requires external intervention to break

**Intervention:**
- L3: Change goal (value skill development)
- L5: New rules (training subsidies, retention bonuses)
- L6: Information (make opportunity visible)
- BREAK: Disrupt equilibrium to shift to new level

**Real example:**
```
Rural manufacturing region:
Stuck: 30% productivity of national average
Intervention: Government training program + tax incentives
Result: Shifted equilibrium to 60% over 5 years
Key: Had to break existing equilibrium to improve
```

---

## OSCILLATION PATTERNS

### O1: Inventory Oscillation - Bullwhip Effect

**Domain:** Supply chain with delays

**Stock:** Distributor Inventory (units)

**Flows:**
```
↑ Inflow: Orders from manufacturer
  Rate: Based on demand forecast
  Control: Distributor ordering policy
  Delay: 4 weeks (order to delivery)

↓ Outflow: Sales to retailers
  Rate: Actual customer demand (varies ±20%)
  Control: Market demand
  Delay: None

Net Flow: Oscillates due to delay (OSCILLATION)
```

**Pattern trajectory:**
```
Week 0: 1,000 units, demand 100/week → Order 400 (4 weeks supply)
Week 4: 600 units (sold 400), order arrives 400 → 1,000 units
Week 5: Demand spike 120/week → Order 480
Week 9: 520 units (sold 480), order arrives 480 → 1,000 units
Week 10: Demand drops 80/week → Order 320
Week 14: 680 units (sold 320), order arrives 320 → 1,000 units
```

**Characteristics:**
- Sawtooth pattern (rise-fall-rise-fall)
- Caused by: Delay (4 weeks) > reaction time (1 week)
- Delay/Cycle ratio: 4/5 = 80% (HIGH oscillation risk)
- Amplifies up supply chain (bullwhip effect)

**Intervention:**
- L9: Reduce order-to-delivery delay (faster shipping)
- L6: Real-time demand visibility (better forecasting)
- L5: Order smoothing rule (small frequent orders)
- BUFFER: Increase inventory (absorb variation)

**Real example:**
```
Consumer electronics supply chain:
Observed: 50% inventory swings
Root cause: 8-week manufacturing lead time
Intervention: 
  - Reduced to 4 weeks (L9)
  - Daily demand sharing (L6)
Result: Inventory swings reduced to 20%
```

---

### O2: Hiring Oscillation - Feast/Famine Cycles

**Domain:** Consulting firm staffing

**Stock:** Employees (headcount)

**Flows:**
```
↑ Inflow: Hiring
  Rate: Based on capacity gap
  Control: HR processes, market conditions
  Delay: 3 months (post to productive)

↓ Outflow: Attrition
  Rate: 10%/year average, spikes when overworked
  Control: Work-life balance, compensation
  Delay: None (people quit immediately)

Net Flow: Oscillates (OSCILLATION)
```

**Pattern trajectory:**
```
Q1: 100 employees, high demand → Hire 20
Q2: 100 employees (new hires not yet productive), still overworked
Q3: 115 employees (5 attrition), finally adequate capacity
Q4: 115 employees, demand drops → Stop hiring
Q5: 108 employees (7 quit from burnout), understaffed again
Q6: 105 employees → Panic hire 15
```

**Characteristics:**
- Boom-bust in staffing levels
- Delay (3 months hiring) causes overshoot/undershoot
- Attrition spikes compound problem
- Chronic overwork or underutilization

**Intervention:**
- L9: Reduce hiring delay (pipeline of pre-vetted candidates)
- L5: Continuous hiring (small batches vs big waves)
- L11: Buffer capacity (10-15% slack for flexibility)
- FORECAST: Use leading indicators (sales pipeline)

**Real example:**
```
Engineering consultancy:
Pattern: Hire 30 → Overshoot → Layoff 10 → Undershoot → Hire 20 (repeat)
Intervention:
  - Continuous hiring pipeline (L9)
  - 15% capacity buffer (L11)
  - 3-month forward visibility (L6)
Result: Stable staffing ±5% variation
```

---

### O3: Quality Oscillation - Firefighting Mode

**Domain:** Software development quality issues

**Stock:** Software Quality (defect density: bugs/1000 LOC)

**Flows:**
```
↑ Inflow: Quality improvement from testing/refactoring
  Rate: -5 bugs/1000 LOC per sprint (when focused)
  Control: Time allocated to quality
  Delay: 2 sprints (improvements to show results)

↓ Outflow: Quality degradation from rushed development
  Rate: +8 bugs/1000 LOC per sprint (when rushing)
  Control: Deadline pressure
  Delay: None (immediate degradation)

Net Flow: Alternates between improvement and degradation (OSCILLATION)
```

**Pattern trajectory:**
```
Sprint 1: 20 bugs/1000, quality bad → Focus on quality
Sprint 2: 20 bugs/1000 (delay - no improvement yet)
Sprint 3: 15 bugs/1000 (improvement shows), management sees "fixed"
Sprint 4: 15 bugs/1000, pressure to ship → Rush features
Sprint 5: 23 bugs/1000 (degradation from rushing)
Sprint 6: 23 bugs/1000, crisis mode → Focus on quality again
Sprint 7: 23 bugs/1000 (delay), cycle repeats...
```

**Characteristics:**
- "Fixes That Fail" archetype
- Management switches focus based on visible crisis
- Delay causes overshoot in both directions
- Never reaches stable good quality

**Intervention:**
- L3: Change goal (sustained quality vs oscillating)
- L5: Rule - minimum quality gate always enforced
- L9: Real-time quality visibility (no delay in feedback)
- L6: Make long-term cost of rushing visible

**Real example:**
```
Product company:
Pattern: 6-month quality crisis → quality focus → 6 months good → pressure → crisis
Intervention:
  - Non-negotiable quality bar (L5)
  - Automated testing (L9 - instant feedback)
  - Track "quality-adjusted velocity" (L3)
Result: Stable high quality, velocity actually increased
Lesson: Oscillation wastes more time than consistent quality
```

---

## Pattern Recognition Checklist

Use this to identify patterns in your system:

**GROWTH pattern if:**
- [ ] Stock increasing over time
- [ ] Inflow > Outflow consistently
- [ ] Trend line slopes upward
- [ ] Reinforcing loop present OR balancing loop weak
- [ ] Need to determine: Beneficial or harmful?

**DEPLETION pattern if:**
- [ ] Stock decreasing over time
- [ ] Outflow > Inflow consistently
- [ ] Trend line slopes downward
- [ ] Can project when stock hits zero
- [ ] Need to determine: Intentional or crisis?

**EQUILIBRIUM pattern if:**
- [ ] Stock relatively stable over time
- [ ] Inflow ≈ Outflow on average
- [ ] Small variations but returns to level
- [ ] Balancing loop(s) active
- [ ] Need to determine: True or false equilibrium? Right level?

**OSCILLATION pattern if:**
- [ ] Stock alternates up and down
- [ ] Regular boom-bust cycles
- [ ] Sawtooth or sine wave pattern
- [ ] Delays in feedback loops present
- [ ] Always problematic - needs damping

---

## Pattern Transitions

Systems can shift between patterns:

**Growth → Equilibrium (S-curve)**
```
Example: Customer acquisition hitting market saturation
Mechanism: Outflow grows proportionally with stock (churn rate)
Eventually: Inflow = Outflow at some equilibrium point
```

**Equilibrium → Depletion (Tipping point)**
```
Example: Team morale under stress
Mechanism: Sudden increase in outflow (attrition spike)
Crisis: Stock depletes below recovery threshold
```

**Depletion → Growth (Recovery)**
```
Example: Paying off technical debt
Mechanism: Reduce inflow + increase outflow → reach target → reverse
Equilibrium: Maintain at healthy level
```

**Growth → Oscillation (Overshoot)**
```
Example: Inventory overstocking
Mechanism: Delay in feedback causes overshoot
Result: Corrective action → undershoot → repeat
```

**Oscillation → Equilibrium (Damping)**
```
Example: Reducing hiring delays
Mechanism: Shorten delays → less overshoot → smaller oscillations
Eventually: Oscillations decay to stable level
```

---

## Pattern-Specific Interventions

**For GROWTH patterns:**
- Beneficial: Amplify (strengthen inflow, reduce outflow)
- Harmful: Slow/reverse (reduce inflow, increase outflow, add balancing loops)

**For DEPLETION patterns:**
- Beneficial: Maintain until target (keep outflow > inflow)
- Harmful: Reverse immediately (increase inflow, reduce outflow)

**For EQUILIBRIUM patterns:**
- True equilibrium at right level: Maintain (monitor for changes)
- False equilibrium (delays): Reduce delays, improve visibility
- Equilibrium at wrong level: Disrupt to shift to new level (external intervention)

**For OSCILLATION patterns:**
- Always intervene (oscillation wastes resources)
- L9: Reduce delays in feedback loops
- L11: Add buffers to absorb variation
- L5: Smooth flow rates (small frequent vs large batch)

---

## Real-World Pattern Combinations

Systems often exhibit multiple patterns simultaneously across different stocks:

**Example: Struggling startup**
```
Stock 1 (Cash): DEPLETION (burning runway)
Stock 2 (Customers): GROWTH (acquiring users)
Stock 3 (Product Quality): OSCILLATION (quality vs speed tradeoff)
Stock 4 (Team Morale): DEPLETION (overwork)

Intervention priority:
1. Stop morale depletion (team collapse kills company)
2. Dampen quality oscillation (unstable product loses customers)
3. Accelerate customer growth (need revenue before cash depletes)
4. Address cash depletion (runway must last until profitability)
```

**Lesson:** Diagnose ALL critical stocks, prioritize interventions, address in sequence or parallel based on urgency and dependencies.
