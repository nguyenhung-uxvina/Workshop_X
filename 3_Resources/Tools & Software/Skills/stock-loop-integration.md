# Stock-Loop Integration Guide

## How Stocks Participate in Feedback Loops

Every stock in a system can participate in one or more feedback loops. Understanding WHICH stocks drive WHICH loops is critical for effective intervention.

---

## Core Concepts

### Stocks as Loop Nodes

**Stocks accumulate the effects of loops:**
- Reinforcing loops → Stock grows or depletes exponentially
- Balancing loops → Stock seeks target level
- Multiple loops → Stock behavior = dominant loop

**Example:**
```
Stock: Technical Debt

Participates in:
- R1 (Debt Spiral): Debt → Pressure → Rush → More Debt
- B1 (Fixing Loop): Debt → Awareness → Fixing → Less Debt

If R1 > B1: Debt grows exponentially
If B1 > R1: Debt declines toward zero
```

### Loop Identification Process

1. **Start with a stock** (what accumulates)
2. **Follow causal chain** (what does this stock affect?)
3. **Return to start** (does chain loop back to stock?)
4. **Classify loop** (R or B based on negative links)
5. **Identify leverage points** (L7-L10 within loop)

---

## Pattern 1: Stock in Single Reinforcing Loop

### Structure

```
[Stock A] → affects → [X] → affects → [Y] → increases → [Stock A]
     ↑                                                        |
     └────────────────────────────────────────────────────────┘
                    REINFORCING LOOP (R1)
```

### Characteristics

- Stock grows/depletes exponentially
- No natural limit (requires external constraint)
- Doubling time predictable
- Intervention urgent if harmful

### Example: Knowledge Accumulation

```
[Knowledge] → [Better Questions] → [Deeper Learning] → [More Knowledge]
     ↑                                                           |
     └───────────────────────────────────────────────────────────┘
                         R1: Learning Spiral
```

**Stock behavior:** Exponential growth (beneficial)

**Leverage points IN loop:**
- L10: Structure of knowledge (how organized, accessed)
- L9: Delay in "Learning → Knowledge" (practice time)
- L7: Loop gain (how much learning per cycle)
- L6: Visibility of knowledge growth (dashboard)

**Intervention strategy:**
- AMPLIFY: Speed loop (reduce L9 delay)
- STRENGTHEN: Increase gain (L7)
- STRUCTURE: Organize knowledge better (L10)

### Example: Technical Debt Spiral

```
[Tech Debt] → [Pressure] → [Rushed Work] → [More Debt]
     ↑                                              |
     └──────────────────────────────────────────────┘
                    R1: Debt Spiral
```

**Stock behavior:** Exponential growth (harmful)

**Leverage points IN loop:**
- L10: Code structure creating debt
- L9: Delay in "Rush → Debt" (2 weeks to discover)
- L7: Loop gain (how much rushing creates debt)
- L6: Real-time debt visibility
- L5: Rules preventing rushing

**Intervention strategy:**
- SLOW: Reduce gain (L7 - mandatory reviews)
- BREAK: Add balancing loop (L8)
- INFORM: Make debt visible immediately (L6 + L9)
- STRUCTURE: Refactor architecture (L10)

---

## Pattern 2: Stock in Single Balancing Loop

### Structure

```
[Stock A] → [Gap] → [Corrective Action] → [Flow] → changes → [Stock A]
     ↑                                                             |
     └─────────────────────────────────────────────────────────────┘
                       BALANCING LOOP (B1)
                    (one negative link)
```

### Characteristics

- Stock seeks goal/target
- Oscillation if delays present
- Stability depends on loop strength
- Self-correcting

### Example: Inventory Management

```
[Inventory] → [−Gap from Target] → [Orders] → [+Inflow] → [+Inventory]
      ↑                                                          |
      └──────────────────────────────────────────────────────────┘
                   B1: Inventory Stabilization
```

**Stock behavior:** Seeks target (e.g., 1000 units)

**Leverage points IN loop:**
- L11: Target buffer size (how much inventory)
- L9: Order-to-delivery delay (procurement time)
- L8: Loop strength (how aggressively to correct)
- L6: Inventory visibility (real-time tracking)

**Intervention strategy:**
- STRENGTHEN: If undershooting → increase L8
- DAMPEN: If overshooting → decrease L8
- SPEED: Reduce L9 delay to prevent oscillation
- RESIZE: Adjust L11 buffer for variation

---

## Pattern 3: Stock in Competing Loops (R + B)

### Structure

```
                    R1 (Reinforcing)
         [Stock] → [+Growth Driver] → [+Stock]
            ↑  ↓
            |   └──→ [−Gap] → [Correction] ←──┘
            |              B1 (Balancing)
```

### Characteristics

- Stock behavior = DOMINANT loop
- System exhibits "leverage point warfare"
- Tipping point determines outcome
- Phase transitions possible

### Example: Quality vs Speed Tradeoff

```
R1: Quality Debt Spiral
[Low Quality] → [Rework] → [Less Time] → [Rush] → [Lower Quality]

B1: Quality Improvement
[Low Quality] → [Complaints] → [Focus on Quality] → [Higher Quality]
```

**Current state:** R1 dominant → quality declining
**Goal:** Flip to B1 dominant → quality improving

**Leverage cascade:**

**Phase 1 (Week 1-2): WEAKEN R1**
- L7: Slow reinforcing loop
  - Add review gates (slows "Rush → Low Quality")
  - Mandatory testing (increases quality threshold)

**Phase 2 (Week 3-4): STRENGTHEN B1**
- L8: Amplify balancing loop
  - Real-time quality dashboard (L6)
  - Dedicated quality time (increase correction)
  
**Phase 3 (Week 5-8): STRUCTURAL LOCK-IN**
- L10: Change architecture (prevents debt creation)
- L5: Rules enforce quality gates
- L3: Goal shift from "ship fast" to "ship sustainable"

**Result:** B1 now dominates → quality improving

---

## Pattern 4: Stock in Multiple Reinforcing Loops

### Structure

```
         R1 (Growth)
    [Stock] ←→ [Driver 1]
      ↕  ↕
    R2 |  | R3
      ↕  ↕
[Driver 2] ↔ [Driver 3]
```

### Characteristics

- Exponential growth/collapse from multiple sources
- Extremely unstable
- "Runaway" behavior
- Requires aggressive intervention

### Example: Startup Success (Beneficial)

```
R1: [Revenue] → [Hiring] → [Capacity] → [More Revenue]
R2: [Revenue] → [Marketing] → [Customers] → [More Revenue]
R3: [Revenue] → [Product] → [Quality] → [More Revenue]
```

**Stock behavior:** Explosive growth (intentional)

**Management strategy:**
- DON'T slow loops (growth desired)
- ADD balancing loops for sustainability
- MONITOR for constraints (L10)
- PREPARE for scale limits

### Example: System Collapse (Harmful)

```
R1: [Morale↓] → [Attrition↑] → [Workload↑] → [Morale↓]
R2: [Morale↓] → [Quality↓] → [Complaints↑] → [Morale↓]
R3: [Morale↓] → [Delays↑] → [Customer Loss] → [Pressure↑] → [Morale↓]
```

**Stock behavior:** Death spiral

**Emergency interventions:**
- L7: Break ONE loop immediately (stop the bleeding)
  - Hire temporary help (break R1)
  - OR reduce scope (break R3)
  - OR improve tooling (break R2)

- L6: Make crisis visible (create urgency for L3 change)

- L3: Change goal from "growth" to "stability"

- L8: Add strong balancing loops
  - Dedicated recovery time
  - Morale monitoring
  - Workload limits

---

## Integration with Feedback-Loop-Detector

### Workflow

**Step 1: Stock-Flow-Mapper identifies stocks**
```
Stocks found:
- Technical Debt (200 hrs)
- Team Knowledge (30% of target)
- Bug Backlog (150 bugs)
- Quality Score (6.2/10)
```

**Step 2: Feedback-Loop-Detector maps loops**
```
R1: [Debt] → [Pressure] → [Rush] → [Bugs] → [Rework] → [More Pressure] → [Debt]
B1: [Bugs] → [Testing Time] → [Quality] → [Fewer Bugs]
R2: [Low Knowledge] → [Errors] → [Rework] → [No Learning Time] → [Lower Knowledge]
```

**Step 3: Map stocks to loops**
```
Technical Debt:
- Drives R1 (dominant)
- Feeds into R2 (secondary)
- No balancing loop!

Bug Backlog:
- In R1 (accumulating)
- Weak B1 trying to reduce

Knowledge:
- In R2 (depleting)
- No growth loop present
```

**Step 4: Prioritize by dominance**
```
1. Technical Debt (drives 2 reinforcing loops) → URGENT
2. Bug Backlog (in dominant R1) → HIGH PRIORITY
3. Knowledge (in secondary R2) → IMPORTANT
4. Quality (outcome, not driver) → MONITOR
```

**Step 5: Design leverage cascade**
```
PHASE 1 (Week 1-2): Attack R1
- L6: Real-time debt dashboard
- L9: Reduce "Rush → Debt" delay
- L7: Slow R1 gain (code review gates)

PHASE 2 (Week 3-4): Strengthen B1
- L8: Increase testing time allocation
- L6: Bug visibility improvements

PHASE 3 (Week 5-8): Build missing loop for Knowledge
- NEW R (beneficial): Knowledge → Better Code → Less Rework → Learning Time → Knowledge
- L10: Structure knowledge capture (wiki, reviews)

EXPECTED: R1 weakened + B1 strengthened + Knowledge R created → System stabilizes
```

---

## Stock Classification by Loop Role

### Driver Stocks
**Definition:** Stock that INITIATES causal chains in loops

**Examples:**
- Capital (drives investment loops)
- Reputation (drives customer acquisition)
- Technical debt (drives quality spirals)

**Characteristics:**
- High leverage (L10 - structure)
- Changes cascade through system
- Often constraints

**Intervention priority:** HIGHEST

### Accumulator Stocks
**Definition:** Stock that RECEIVES effects from loops

**Examples:**
- Bug backlog (accumulates from quality loop)
- Inventory (accumulates from production loop)
- Employee count (accumulates from hiring loop)

**Characteristics:**
- Symptoms, not root causes
- Useful for monitoring
- Medium leverage (L11 - buffers)

**Intervention priority:** MEDIUM

### Flow-Through Stocks
**Definition:** Stock that both receives and transmits in loops

**Examples:**
- Work-in-progress (receives from input, transmits to output)
- Training pipeline (receives trainees, outputs skilled workers)
- Quality issues (receives from code, transmits to customers)

**Characteristics:**
- Connect loops together
- Delays matter (L9)
- Medium-high leverage

**Intervention priority:** HIGH

---

## Leverage Point Mapping in Loops

### Template

```
LOOP: [Loop Name (R/B)]
STOCK: [Primary stock in loop]

LEVERAGE POINTS IN THIS LOOP:

L12 (Parameters):
- [Numerical values in loop]

L11 (Buffers):
- [Stock sizes that could stabilize]

L10 (Structure):
- [Physical structure of stock/flows]

L9 (Delays):
- [Where delays exist in loop]
- Impact: [Oscillation risk?]

L8 (Balancing Strength):
- [If B loop: how strong is correction]

L7 (Reinforcing Gain):
- [If R loop: how fast does it amplify]

L6 (Information):
- [What's invisible in this loop?]

L5 (Rules):
- [What rules govern flow rates?]

L4-L1 (Higher leverage):
- [See meadows-leverage-analyzer]

INTERVENTION CASCADE:
Phase 1: [L6 + L9 actions]
Phase 2: [L5 + L7/L8 actions]
Phase 3: [L3 actions]
```

### Example: Technical Debt Loop

```
LOOP: R1 - Debt Spiral (REINFORCING)
STOCK: Technical Debt (200 hrs, growing)

LEVERAGE POINTS IN THIS LOOP:

L11 (Buffers): N/A (debt is not a buffer)

L10 (Structure):
- Code architecture forces tight coupling
- Monolithic design creates ripple effects
- Action: Modularize system

L9 (Delays):
- 2-week delay: Rush → Debt Discovery
- Monthly reports hide accumulation
- Action: Daily code quality metrics

L7 (Reinforcing Gain):
- Current: Each rushed feature = 5 hrs debt
- High gain = fast spiral
- Action: Mandatory review (reduces to 2 hrs/feature)

L6 (Information):
- Debt invisible until crisis
- No real-time tracking
- Action: CodeClimate dashboard, daily standups

L5 (Rules):
- No rule preventing debt creation
- "Ship fast" overrides quality
- Action: New rule - max debt increase/sprint

L3 (Goals):
- Real goal: Ship features fast
- Creates debt spiral
- Action: Redefine success as "sustainable velocity"

INTERVENTION CASCADE:
Week 1-2: L6 (dashboard) + L9 (daily metrics)
Week 3-4: L7 (mandatory review) + L5 (debt limit rule)
Month 2-3: L10 (refactor) + L3 (goal shift)

EXPECTED: Debt growth 10 hrs/week → 0 hrs/week → declining 5 hrs/week
```

---

## Quality Checklist

When integrating stocks and loops:

- [ ] All stocks classified (Driver/Accumulator/Flow-Through)
- [ ] Each stock mapped to its loops (R1, R2, B1, etc.)
- [ ] Loop dominance analyzed (which loop controls stock?)
- [ ] Leverage points identified WITHIN each loop
- [ ] Critical stocks prioritized (drivers > accumulators)
- [ ] Intervention cascade designed (L6+L9 → L5+L7/L8 → L3)
- [ ] Integration with feedback-loop-detector output
- [ ] Integration with meadows-leverage-analyzer output
- [ ] Quantified impact estimates per phase
- [ ] Monitoring plan for stock levels

---

## Theory Foundation

**From Donella Meadows:**

> "A stock takes time to change, because flows take time to flow. That's a vital point, a key to understanding why systems behave as they do. Stocks usually change slowly. They can act as delays, lags, buffers, ballast, and sources of momentum in a system."

**Key principles:**

1. **Stocks are memories** - They accumulate history of flows
2. **Stocks participate in loops** - They both drive and are driven
3. **Dominant loop determines behavior** - Stock follows strongest loop
4. **Leverage exists IN loops** - Intervene where loop can be altered
5. **Stock-loop integration reveals cascade** - Sequential interventions for 80%+ improvement

**Integration formula:**
```
Stock-Flow Analysis → Identify what accumulates
Feedback-Loop-Detector → Map loops and dominance
Meadows-Leverage-Analyzer → Find L1-L12
Stock-Loop Integration → Design cascade

Result: Know WHERE (stocks) and HOW (leverage points) to intervene
```
