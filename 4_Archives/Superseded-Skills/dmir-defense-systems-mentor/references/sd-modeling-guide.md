# System Dynamics Modeling Guide: Phase 2 - Quantifying Defense Manufacturing Systems

## Overview

Phase 2 translates the qualitative CLD from Diagnosis into a quantitative simulation model that:
1. **Reproduces historical behavior** (validates understanding)
2. **Predicts future trends** (baseline projection)
3. **Tests policy scenarios** (intervention design)
4. **Identifies constraints scientifically** (TOC Step 1)

**Duration**: 4 weeks
**Output**: Validated SD model, constraint identification, policy test results
**Team**: 2-3 people with SD modeling skills (or willingness to learn)

## SD Fundamentals for Defense Manufacturing

### Core Concepts

**Stock**: Accumulation that changes slowly
- Examples: Engineering staff, WIP inventory, institutional knowledge
- Notation: Rectangle
- Units: People, units, VND, knowledge-points

**Flow**: Rate of change to stocks
- Examples: Hiring rate, production rate, knowledge decay rate
- Notation: Pipe with valve
- Units: People/month, units/week, VND/year

**Auxiliary**: Intermediate calculations
- Examples: Workload ratio, quality index, delivery performance
- Notation: Circle or plain text
- Units: Dimensionless ratios, percentages, indices

**Constant**: Fixed parameters
- Examples: Test time per unit, assembly labor hours, supplier lead time
- Notation: Plain text (no icon)
- Units: Hours/unit, weeks, percentage

### Stock-Flow Equation Structure

```
Stock(t) = Stock(t-dt) + ∫[Inflow - Outflow]dt

Where:
- t = current time
- dt = time step (1 week, 1 day, etc.)
- ∫ = integral (accumulation over time)
```

**Example - Engineering Staff**:
```
Engineering_Staff(t) = Engineering_Staff(t-1) + (Hiring_Rate - Attrition_Rate) * dt

Hiring_Rate = Budget_for_Hiring / Cost_per_Engineer / Time_to_Hire
Attrition_Rate = Engineering_Staff * Attrition_Fraction
```

## Step 1: Conceptual Model (Week 3)

### 1.1 Convert CLD to Stock-Flow Structure

**Process**:
1. Identify stocks from CLD (accumulations)
2. Define flows changing each stock
3. Specify auxiliaries (calculations)
4. Add constants (parameters)

**Defense Manufacturing Core Stocks**:

**Physical Domain**:
- Raw_Materials_Inventory [units]
- WIP [units]
- Finished_Goods [units]
- Equipment_Capacity [machine-hours]

**Human Resources**:
- Engineering_Staff [people]
- Production_Workers [people]
- Average_Experience [years]
- Knowledge_Base [lessons-learned count]

**Information/Work**:
- Design_Backlog [projects]
- ECO_Pending [engineering changes]
- Test_Queue [units waiting]
- Customer_Complaints [count]

**Financial**:
- Working_Capital [VND]
- Accounts_Receivable [VND]
- RD_Budget [VND/year]

**Intangibles** (challenging but important):
- Customer_Satisfaction [index 0-100]
- Employee_Morale [index 0-100]
- Reputation [index 0-100]

### 1.2 Define Reference Modes

**Reference Mode**: Historical behavior graph that model must reproduce

**Create for each key variable**:
- Time span: 3-5 years minimum
- Granularity: Monthly or quarterly data
- Include: Actual data points, trend line, major events annotated

**Defense Manufacturing Example Reference Modes**:

```
Throughput (Units/Month):
2020: 42, 45, 40, 43 (avg ~42)
2021: 38, 35, 40, 37 (avg ~37, declining)
2022: 35, 32, 30, 33 (avg ~32, continued decline)
2023: 30, 28, 31, 29 (avg ~29, stabilized low)

Pattern: Steady decline from 42 → 29 units/month over 3 years
```

```
On-Time Delivery (%):
2020: 82%, 85%, 80%, 83% (avg ~82%)
2021: 75%, 70%, 68%, 72% (avg ~71%)
2022: 65%, 62%, 58%, 60% (avg ~61%)
2023: 55%, 53%, 57%, 54% (avg ~55%)

Pattern: Steady erosion from 82% → 55% (Drift to Low Performance archetype)
```

**Model Validation Criterion**: Simulation must match these patterns within 20%

### 1.3 Specify Initial Conditions

**All stocks need starting values** (typically from earliest historical data point):

| Stock | Initial Value (2020 Q1) | Units | Source |
|-------|-------------------------|-------|--------|
| Engineering_Staff | 45 | people | HR records |
| Production_Workers | 120 | people | HR records |
| WIP | 85 | units | Inventory system |
| Design_Backlog | 12 | projects | Project tracking |
| Working_Capital | 8.5B | VND | Financial statements |
| Customer_Satisfaction | 75 | index 0-100 | Survey data |

### 1.4 Identify Required Data

**Create data collection matrix**:

| Variable | Type | Current Availability | Collection Method | Owner | Deadline |
|----------|------|---------------------|-------------------|-------|----------|
| Hiring_Rate | Flow | Historical exists | HR database query | HR Manager | Week 3 |
| Attrition_Fraction | Constant | Can calculate | HR records / staff count | HR Manager | Week 3 |
| Assembly_Time | Constant | Exists | Time studies | Ops Manager | Week 3 |
| Component_Lead_Time | Constant | Partial | Supplier data | Procurement | Week 4 |
| Defect_Rate | Flow | Exists | QA database | Quality Mgr | Week 3 |

**Data Quality Tiers**:
- **Tier 1**: Precise, measured, reliable (use directly)
- **Tier 2**: Estimated, reasonable confidence (use with sensitivity analysis)
- **Tier 3**: Guessed, high uncertainty (calibrate to behavior, flag for improvement)

## Step 2: Model Building (Week 4-5)

### 2.1 Choose Modeling Software

**Options**:

**Vensim** (Recommended for defense projects)
- Industry standard, powerful analysis
- Free reader version for sharing
- Professional: ~$2,000
- Steep learning curve but worth it

**Stella Architect** (Good for communication)
- Very user-friendly interface
- Beautiful visual output
- Professional: ~$2,500
- Less analysis power than Vensim

**Python + PySD** (For programmers)
- Free, open-source
- Ultimate flexibility
- Requires coding skills
- Good for integration with other tools

**AnyLogic** (For complex hybrid models)
- Combines SD with agent-based, discrete-event
- Expensive (~$3K-8K)
- Overkill for most defense manufacturing

**Recommendation**: Start with Vensim PLE (free personal learning edition) for learning, upgrade to Professional if adopting widely.

### 2.2 Model Structure for Defense Manufacturing

**Sector Organization** (modular design):

```
Main Model
├── HR Sector (Engineering & Production staff dynamics)
├── Production Sector (Material flows, WIP, assembly)
├── Quality Sector (Defects, rework, testing)
├── Finance Sector (Cash flow, budget, profitability)
├── Customer Sector (Satisfaction, contracts, feedback)
└── Management Sector (Decisions, policies, interventions)
```

**Example: HR Sector Detail**

```
[Engineering_Staff] STOCK
  Inflow: Hiring_Rate
  Outflow: Attrition_Rate
  Initial: 45 people

Hiring_Rate = 
  IF Time > Hiring_Decision_Delay 
  THEN MAX(0, (Desired_Staff - Engineering_Staff) / Time_to_Hire)
  ELSE 0
  Units: people/month

Attrition_Rate = 
  Engineering_Staff * Base_Attrition_Fraction * Workload_Pressure_Effect
  Units: people/month

Desired_Staff = 
  Design_Backlog * Engineering_Hours_per_Project / Hours_per_Engineer / Months
  Units: people

Workload_Pressure_Effect = 
  Graph(Workload_Ratio)
    (0.5, 0.5)  // Understaffed, bored → higher attrition
    (1.0, 1.0)  // Optimal workload
    (1.5, 2.0)  // Overloaded → much higher attrition
  Units: dimensionless

Workload_Ratio = 
  Design_Backlog / Normal_Backlog
  Units: dimensionless
```

**Key Equation Types for Defense Manufacturing**:

**1. Linear Relationships** (simple, use when appropriate):
```
Total_Cost = Fixed_Costs + Variable_Cost_per_Unit * Units_Produced
```

**2. Non-Linear Effects** (common in real systems):
```
Productivity = Base_Productivity * Pressure_Effect(Workload_Ratio)

Where Pressure_Effect is inverted U-curve:
- Underloaded (ratio < 0.8): Low productivity (boredom)
- Optimal (ratio 0.8-1.2): Peak productivity
- Overloaded (ratio > 1.2): Declining productivity (burnout)
```

**3. S-Curve Adoption** (technology, process changes):
```
Adoption_Rate = Early_Adopters + (1 - Early_Adopters) / (1 + EXP(-Adoption_Speed * (Time - Inflection_Point)))
```

**4. Learning Curves** (cumulative experience effects):
```
Unit_Cost = Initial_Cost * (Cumulative_Production ^ (-Learning_Exponent))

Defense typical: Learning_Exponent = 0.15 to 0.30 (85%-70% learning curves)
```

**5. Delay Functions** (critical for accurate behavior):
```
Material_Delay = DELAY3(Order_Rate, Supplier_Lead_Time)
  // 3rd-order delay (smooth S-curve response)

Information_Delay = DELAY1(Actual_Performance, Perception_Lag)
  // 1st-order delay (exponential smoothing)
```

### 2.3 Parameter Estimation Methods

**Method 1: Historical Data** (Best - use whenever available)
```
Attrition_Fraction = Total_Attritions_Last_Year / Average_Staff_Last_Year
Example: 8 people quit / 45 average staff = 0.178 = 17.8% annual attrition
```

**Method 2: Industry Benchmarks** (Good - when local data unavailable)
```
Source: Defense industry reports, consulting studies, academic papers
Example: Defense engineering attrition typically 12-20% annually
Use: 16% (midpoint) with sensitivity analysis ±40%
```

**Method 3: Expert Judgment** (Adequate - structured approach)
```
Protocol:
1. Ask 3-5 experts independently
2. Request range (low, most likely, high)
3. Calculate weighted average
4. Use geometric mean if wide variation
5. Flag as "high uncertainty" for sensitivity analysis

Example - Component Lead Time:
Expert 1: 8-12-16 weeks
Expert 2: 10-14-20 weeks  
Expert 3: 6-10-14 weeks
Weighted average: 10 weeks, range 6-20 (±50% uncertainty)
```

**Method 4: Calibration to Behavior** (Last resort - when no other data)
```
Process:
1. Make educated guess
2. Run simulation
3. Compare to reference mode
4. Adjust parameter
5. Repeat until behavior matches

Warning: Can produce "right answer for wrong reasons" - validate structure first!
```

**Defense Manufacturing Parameter Examples**:

| Parameter | Value | Units | Confidence | Source |
|-----------|-------|-------|------------|--------|
| Assembly_Time | 120 | hours/unit | HIGH | Time studies |
| Test_Time | 40 | hours/unit | HIGH | QA records |
| Component_Lead_Time | 90 | days | MEDIUM | Supplier data (varies) |
| Defect_Rate_Base | 0.03 | defects/unit | HIGH | Historical QA |
| Learning_Exponent | 0.20 | dimensionless | MEDIUM | Industry typical |
| Staff_Productivity | 0.80 | FTE | MEDIUM | Management estimate |
| Supplier_Reliability | 0.85 | fraction on-time | MEDIUM | Purchasing records |

### 2.4 Coding Best Practices

**Documentation**:
```
{Variable Name} = Equation
  Units: [units]
  Description: [What this represents]
  Source: [Where value/relationship came from]
  Confidence: [HIGH/MEDIUM/LOW]
  
Example:
{Engineering Capacity} = Engineering Staff * Productivity Factor
  Units: Projects/Month
  Description: Effective engineering output accounting for availability
  Source: Management estimate that engineers spend 80% time on projects (rest is meetings, admin)
  Confidence: MEDIUM (should track actual via time sheets)
```

**Dimensional Consistency**:
- ALWAYS specify units
- Check equations: Do left and right sides have same units?
- Use TIME STEP to convert rates: Flow * dt = change in stock

**Modularity**:
- Group related variables into sectors
- Use clear naming conventions (Engineering_Staff not ES)
- Minimize cross-sector dependencies (clean interfaces)

**Version Control**:
- Save model versions with dates: DefenseModel_2025-11-03_v1.mdl
- Document changes in change log
- Keep backup before major structural changes

## Step 3: Testing and Validation (Week 5-6)

### 3.1 Structural Validity Tests

**Test 1: Dimensional Consistency**

Check every equation:
```
[Stock Units] = [Flow Units] * [Time Units]
[People] = [People/Month] * [Months] ✓

[Revenue] = [Units/Month] * [VND/Unit] * [Months]
[VND] = [Units/Month] * [VND/Unit] * [Months]
[VND] = [VND] ✓
```

Use software's dimension checker if available (Vensim has this).

**Test 2: Extreme Conditions**

Ask "What if?" questions:
- What if all hiring stopped? (Staff should decay to zero via attrition)
- What if demand went to zero? (WIP should drain, production stop)
- What if budget unlimited? (Sensible upper limits should emerge from other constraints)
- What if all workers quit instantly? (Production should stop immediately)

**If model behaves unrealistically at extremes, equations are wrong.**

**Test 3: Boundary Adequacy**

Can model explain observed behavior using only endogenous (internal) structure?
- Run model with constant external inputs
- If still reproduces key patterns → Good (behavior is endogenous)
- If not → May need to expand boundary

### 3.2 Behavior Reproduction Test

**Protocol**:
1. Set initial conditions to historical starting point (e.g., 2020 Q1)
2. Run simulation forward (36-48 months)
3. Compare simulation output to actual historical data
4. Calculate fit metrics

**Comparison Methods**:

**Visual Pattern Matching** (Primary):
- Do curves have same shape?
- Same trends (rising, falling, oscillating)?
- Similar turning points (when behavior changes)?
- Similar magnitudes (within 20-30%)?

**Example - Throughput**:
```
Actual:    42 → 37 → 32 → 29 (declining trend)
Simulated: 42 → 39 → 33 → 28 (declining trend, close match)
Assessment: GOOD (pattern matches, magnitude within 10%)
```

**Statistical Fit** (Secondary):
- Calculate R² (coefficient of determination)
- R² > 0.7: Good fit
- R² 0.5-0.7: Acceptable
- R² < 0.5: Poor fit, investigate

**Theil Inequality Coefficient** (Advanced):
- U < 0.2: Excellent
- U 0.2-0.3: Good
- U > 0.3: Poor

**Turning Point Accuracy**:
- Does model predict when trends reverse?
- Example: If actual throughput started declining in 2021 Q2, does model show decline starting Q2 ±1 quarter?

**If Model Doesn't Reproduce Behavior**:

1. **Check structure**: Is CLD accurately implemented?
2. **Check parameters**: Are values reasonable?
3. **Check delays**: Are time constants correct?
4. **Check non-linearities**: Are relationships too simple?
5. **Check boundary**: Are key factors missing?

**Iterate until acceptable fit** (typically 3-5 iterations).

### 3.3 Sensitivity Analysis

**Purpose**: Identify which parameters matter most

**Monte Carlo Method** (Recommended):

**Protocol**:
1. Select 10-20 uncertain parameters
2. Define range for each (±20% to ±50%)
3. Run 500-1,000 simulations with random parameter combinations
4. Calculate correlation between parameters and key outputs
5. Rank by sensitivity

**Example Setup**:
```
Uncertain Parameters (±30% range):
- Component_Lead_Time: 63-117 days (base 90)
- Base_Attrition_Fraction: 0.11-0.23 (base 0.17)
- Engineering_Productivity: 0.56-1.04 (base 0.80)
- Defect_Rate_Base: 0.021-0.039 (base 0.03)
- Assembly_Time: 84-156 hours (base 120)

Key Output Metric:
- Average Throughput (units/month) over 3-year simulation
```

**Results Example**:

| Parameter | Correlation with Throughput | Sensitivity Rank | Implication |
|-----------|----------------------------|------------------|-------------|
| Component_Lead_Time | -0.78 | 1 (CRITICAL) | Focus data collection here |
| Base_Attrition_Fraction | -0.65 | 2 (HIGH) | Important to get right |
| Defect_Rate_Base | -0.42 | 3 (MEDIUM) | Moderate impact |
| Engineering_Productivity | +0.31 | 4 (MEDIUM) | Some influence |
| Assembly_Time | -0.15 | 5 (LOW) | Can use rough estimate |

**Interpretation**:
- **High sensitivity** (|correlation| > 0.6): Must estimate accurately, prioritize data collection
- **Medium sensitivity** (0.3-0.6): Reasonable estimates sufficient
- **Low sensitivity** (<0.3): Rough estimates OK, don't waste time refining

**One-at-a-Time Sensitivity** (Simpler but less comprehensive):
- Vary each parameter ±20% while holding others constant
- Observe impact on key output
- Rank by % change in output

### 3.4 Model Confidence Building

**Internal Validity**:
- ✓ Structure matches CLD from Diagnosis
- ✓ Equations represent real processes
- ✓ Parameters from reliable data sources
- ✓ Passes extreme conditions tests
- ✓ Reproduces historical behavior (R² > 0.7)

**External Validity**:
- ✓ Domain experts review and confirm logic
- ✓ Surprising behaviors can be explained
- ✓ Model insights resonate with operators
- ✓ Predicted futures seem plausible

**Confidence Levels**:
- **HIGH**: Use model for quantitative predictions (±10-20%)
- **MEDIUM**: Use for directional guidance and policy ranking
- **LOW**: Use for understanding structure, not quantitative predictions

**Most SD models in defense manufacturing**: MEDIUM confidence (good for policy testing, not precise forecasting)

## Step 4: Constraint Identification (Week 6)

### 4.1 Stress Test Protocol

**Objective**: Scientifically identify the system constraint (TOC Step 1)

**Stress Test Design**:
1. **Baseline run**: Current conditions (validate model)
2. **Demand increase**: +50% over 6 months
3. **Monitor**: Which resource saturates first?
4. **Identify**: Bottleneck signature (utilization >95%, queue builds)

**Variables to Monitor**:

| Resource | Utilization Metric | Queue/Inventory Metric | Capacity Limit |
|----------|-------------------|----------------------|----------------|
| Engineering | % of capacity used | Design backlog (projects) | Staff * hours/month |
| Procurement | % of orders fulfilled | Component shortage events | Supplier capacity |
| Assembly | % of machine hours used | WIP at assembly stage | Machines * hours/shift |
| Testing | % of test hours used | Units waiting for test | Test equipment capacity |
| Delivery | % of logistics capacity | Finished goods inventory | Trucks * trips/week |

**Simulation Setup**:
```
Time: 0-24 months
Time Step: 1 week
Demand Pattern: 
  Months 0-6: Current level (baseline)
  Months 7-12: Ramp up 50% linearly
  Months 13-24: Hold at +50%

Record: Weekly utilization for all resources
```

### 4.2 Bottleneck Signatures

**What to Look For**:

**Signature 1: Utilization Exceeds 95%**
```
Month 10: Engineering 87%, Assembly 82%, Testing 96%
Month 11: Engineering 89%, Assembly 85%, Testing 98%
Month 12: Engineering 91%, Assembly 88%, Testing 99%

→ Testing is saturating (constraint candidate)
```

**Signature 2: Queue Builds Continuously**
```
Test_Queue:
Month 6: 8 units
Month 9: 12 units (growing)
Month 12: 18 units (still growing)
Month 15: 25 units (accelerating growth)

→ Testing cannot keep up (confirms constraint)
```

**Signature 3: Downstream Starvation**
```
Finished_Goods_Inventory:
Barely growing despite increased demand
→ Testing is choking delivery (confirms constraint)
```

**Signature 4: Upstream Idle Time**
```
Assembly_Utilization:
Drops from 85% to 70% after month 12
→ Assembly has capacity but waiting for testing to clear
```

**Constraint Identification Decision**:
Resource is constraint if it exhibits ALL FOUR signatures:
1. ✓ Utilization >95%
2. ✓ Queue building continuously
3. ✓ Downstream starved (limited throughput)
4. ✓ Upstream idle (has capacity but blocked)

**Example Conclusion**:
"Simulation identifies Testing Capacity as the system constraint. At +50% demand, testing utilization reaches 99% by month 12, test queue grows from 8 to 25 units, and throughput plateaus at 48 units/month despite demand of 65 units/month."

### 4.3 Non-Constraint Capacity Calculation

**For TOC Step 3 (Subordination), calculate excess capacity of non-constraints**:

**Formula**:
```
Excess_Capacity_% = (Max_Capacity - Constraint_Driven_Demand) / Constraint_Driven_Demand * 100

Example:
Testing (constraint): 40 units/month maximum
Assembly (non-constraint): 55 units/month maximum
Excess capacity: (55-40)/40 * 100 = 37.5%
```

**Subordination Adequacy**:
- **>30% excess**: Excellent, strong buffer for variation
- **20-30% excess**: Good, adequate for subordination
- **10-20% excess**: Risky, may occasionally starve constraint
- **<10% excess**: Insufficient, will frequently limit constraint

**Example Capacity Analysis**:

| Resource | Max Capacity | Constraint Demand | Excess Capacity | Subordination Status |
|----------|-------------|------------------|----------------|---------------------|
| Testing (constraint) | 40 units/mo | 40 | 0% | N/A (is constraint) |
| Assembly | 55 units/mo | 40 | 37.5% | ✓ EXCELLENT |
| Procurement | 60 units/mo | 40 | 50% | ✓ EXCELLENT |
| Engineering | 42 units/mo | 40 | 5% | ✗ INSUFFICIENT |

**Implication**: 
- Assembly and Procurement can subordinate easily
- Engineering is too tight—may become secondary constraint or starve testing
- **Action**: Elevate Engineering slightly OR reduce Engineering content per project

### 4.4 Constraint Validation

**Confirm in Model**:
1. **Disable stress test**: Return demand to normal
2. **Simulate constraint elevation**: Increase testing capacity +30%
3. **Observe**: Does throughput increase proportionally?
4. **Identify**: What becomes next constraint?

**Example**:
```
Baseline: Testing capacity 40 → Throughput 40
Elevate Testing: Testing capacity 52 (+30%) → Throughput increases to 48 (+20%)
New constraint: Engineering (maxed at 42, limits throughput to 48)
```

**Validation Criteria**:
- ✓ Throughput changes when constraint capacity changes
- ✓ Throughput doesn't change when non-constraint capacity changes
- ✓ Can predict sequence of constraint shifts

## Step 5: Policy Scenario Testing (Week 6)

### 5.1 Baseline Projection

**Run model forward 2-3 years with current policies**:

**Purpose**: 
- Establish reference for comparison
- Predict what happens if we do nothing
- Quantify urgency (how bad will it get?)

**Example Baseline Results**:
```
Current trajectory (if no changes):
- Throughput: Continues declining 42 → 29 → 24 → 20 units/month
- Lead time: Continues increasing 12 → 15 → 18 → 22 weeks
- On-time delivery: Erodes further 55% → 48% → 40%
- Cost per unit: Increases due to inefficiency +15% over 3 years

Conclusion: Status quo is unsustainable, intervention essential
```

### 5.2 Design Policy Scenarios

**Test interventions BEFORE real-world implementation**:

**Scenario A: Exploit Constraint (TOC Step 2)**
```
Changes:
- Zero downtime on test equipment (eliminate breaks)
- Quality gates before testing (reduce defect waste)
- Optimize test scheduling (best sequence)

Implementation in model:
- Test_Time_per_Unit: 40 → 36 hours (-10% from efficiency)
- Defect_Waste_Factor: 5% → 1% (quality gates)
- Effective_Test_Capacity: 40 → 48 units/month

Results (simulated):
- Throughput: 29 → 42 units/month (+45%)
- Lead time: 15 → 11 weeks (-27%)
- Cost: Minimal (protocol changes only)
- ROI: Extremely high (throughput gain at near-zero cost)
```

**Scenario B: Elevate Constraint (TOC Step 4)**
```
Changes:
- Purchase second test station (+50% capacity)
- Hire 2 additional test engineers

Implementation in model:
- Test_Capacity: 40 → 60 units/month
- Test_Staff: 4 → 6 people
- One-time cost: 500K USD (equipment)
- Recurring cost: +15K USD/month (staff)

Results (simulated):
- Throughput: 29 → 52 units/month (+79%)
- Lead time: 15 → 9 weeks (-40%)
- Engineering becomes new constraint at 52 units/month
- Payback period: 4 months (if demand exists)
```

**Scenario C: Reduce Variability (SD insight)**
```
Changes:
- Reduce engineering change rate (stricter requirements freeze)
- Improve component delivery reliability (strategic buffering)

Implementation in model:
- ECO_Rate: 8/month → 3/month
- Supplier_On_Time: 75% → 95%

Results (simulated):
- Throughput: 29 → 34 units/month (+17%, less than elevation but cheaper)
- Lead time: 15 → 13 weeks
- WIP volatility: -40% (more predictable)
- Side benefit: Quality improves +10% (fewer rushed changes)
```

**Scenario D: Combined Approach**
```
Combine exploitation + variability reduction:
- Implement Scenarios A + C simultaneously

Results (simulated):
- Throughput: 29 → 46 units/month (+59%)
- Lead time: 15 → 10 weeks
- Cost: Minimal (no capital, process changes only)
- Recommendation: DO THIS FIRST before elevation
```

### 5.3 Policy Comparison

**Create Decision Matrix**:

| Scenario | Throughput Gain | Cost | ROI | Risk | Recommendation |
|----------|----------------|------|-----|------|----------------|
| Baseline (do nothing) | -30% (decline) | $0 | N/A | HIGH | Unacceptable |
| A: Exploit | +45% | ~$0 | Infinite | LOW | ✓ DO FIRST |
| B: Elevate | +79% | $680K Y1 | 4 mo payback | MEDIUM | Do after A |
| C: Reduce Variability | +17% | $50K | Good | LOW | ✓ DO FIRST |
| D: A + C Combined | +59% | $50K | Excellent | LOW | ✓✓ BEST |

**Decision**: Implement Scenario D (Exploit + Variability), then reassess if elevation needed.

### 5.4 Risk and Sensitivity Analysis

**For chosen scenario, test robustness**:

**Optimistic Case** (best reasonable assumptions):
- Exploitation achieves 12% time reduction (vs. 10% expected)
- Variability reduction fully effective
- Result: Throughput +65%

**Pessimistic Case** (worst reasonable assumptions):
- Exploitation achieves only 8% time reduction
- Variability reduction 50% effective
- Result: Throughput +40%

**Monte Carlo** (1000 runs with parameter uncertainty):
- Mean: +59%
- 95% confidence interval: +45% to +72%
- Probability of achieving >50% gain: 80%

**Conclusion**: Robust improvement highly likely, proceed with confidence.

## Defense Manufacturing Modeling Checklist

**Model Structure**:
- [ ] HR sector (engineering, production staff dynamics)
- [ ] Production sector (material flows, WIP, assembly)
- [ ] Quality sector (defects, rework, testing)
- [ ] Finance sector (cash flow, profitability)
- [ ] Customer sector (satisfaction, contracts)

**Validation Tests**:
- [ ] Dimensional consistency checked
- [ ] Extreme conditions tested
- [ ] Historical behavior reproduced (R² > 0.7)
- [ ] Sensitivity analysis completed
- [ ] Expert review and validation

**Constraint Analysis**:
- [ ] Stress test run (+50% demand)
- [ ] Constraint scientifically identified
- [ ] Bottleneck signatures confirmed
- [ ] Non-constraint capacities calculated
- [ ] Subordination feasibility assessed

**Policy Testing**:
- [ ] Baseline projection (do-nothing case)
- [ ] Exploitation scenario modeled
- [ ] Elevation scenario modeled (if needed)
- [ ] Combined scenarios tested
- [ ] ROI calculated for each option
- [ ] Risk/sensitivity analysis completed

**Documentation**:
- [ ] Model file with clear structure and comments
- [ ] Equation documentation (all variables)
- [ ] Parameter estimation record (sources, confidence)
- [ ] Validation report (tests passed)
- [ ] Policy scenario comparison
- [ ] Recommendation with rationale

**Deliverables for Intervention Phase**:
- [ ] Validated SD model (software file)
- [ ] Constraint identification report
- [ ] Capacity analysis (subordination plan)
- [ ] Policy scenario results
- [ ] Monitoring dashboard design
- [ ] Risk assessment

---

*This modeling methodology is based on Jay Forrester's System Dynamics framework, adapted for defense manufacturing contexts with integration of TOC constraint identification.*
