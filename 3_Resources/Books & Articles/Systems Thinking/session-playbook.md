# Session Playbook — Parallel AI Session Workflows

> **Companion to**: [[ENGINEERING]]
> **Version**: 2.0 (D-M-I-R Enhanced)
> **Purpose**: Ready-to-use prompts for parallel AI design sessions

---

## 0. D-M-I-R UNIFIED MODEL — Core Framework

### 0.1 What is D-M-I-R?

D-M-I-R (Diagnosis-Modeling-Intervention-Reflection) synthesizes **four theoretical traditions**:
- **DST (Systems Thinking)**: Conceptual map, archetypes, boundaries
- **SD (System Dynamics)**: Quantify stocks, flows, feedback loops
- **TOC (Theory of Constraints)**: Focus on the weakest link
- **ML (Meta-Learning)**: Learning how to learn, questioning paradigms

**Core Innovation**: 95% of conventional change efforts target low-leverage parameters (L12). D-M-I-R systematically identifies and exploits high-leverage points (L1-L10).

### 0.2 The Four Phases

```
┌─────────────────────────────────────────────────────────────────────┐
│                    D-M-I-R CYCLE                                    │
│                                                                     │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐        │
│  │ DIAGNOSIS    │────▶│ MODELING     │────▶│ INTERVENTION │        │
│  │              │     │              │     │              │        │
│  │ DST: What's  │     │ SD: Quantify │     │ TOC: Focus   │        │
│  │ the system?  │     │ structure    │     │ on constraint│        │
│  │              │     │              │     │              │        │
│  │ Leverage:    │     │ Leverage:    │     │ Leverage:    │        │
│  │ L1-L12 scan  │     │ L7-L11       │     │ L5-L10       │        │
│  └──────────────┘     └──────────────┘     └──────────────┘        │
│         ▲                                          │                │
│         │                                          │                │
│         │              ┌──────────────┐            │                │
│         │              │ REFLECTION   │            │                │
│         └──────────────│              │◀───────────┘                │
│                        │ ML: Question │                             │
│                        │ goals/paradigm│                            │
│                        │              │                             │
│                        │ Leverage:    │                             │
│                        │ L1-L3        │                             │
│                        └──────────────┘                             │
└─────────────────────────────────────────────────────────────────────┘
```

### 0.3 Phase Details

#### DIAGNOSIS (D) — "What is the system?"
**Time**: 10-20 min | **Tools**: DST, Archetypes, Boundary Analysis

**Activities**:
1. Define system boundaries (what's in, what's out)
2. Identify elements, interconnections, purpose
3. Recognize system archetypes (Fixes That Fail, Shifting Burden, etc.)
4. Create Causal Loop Diagram (CLD)
5. Identify stakeholders and mental models

**Key Questions**:
- What behavior are we seeing? What was expected?
- What changed recently?
- What interventions have been tried? At what leverage level?
- Whose perspectives are we missing?

**Output**: CLD, archetype identification, boundary definition

---

#### MODELING (M) — "How does it work?"
**Time**: 20-40 min | **Tools**: SD, Stock-Flow Mapping, Constraint Analysis

**Activities**:
1. Convert CLD to stock-flow structure
2. Identify stocks (accumulations): knowledge, inventory, defects, capacity
3. Identify flows (rates): development rate, test rate, fix rate
4. Map feedback loops (R = reinforcing, B = balancing)
5. Locate constraint using TOC Step 1

**Key Questions**:
- What accumulates? What depletes?
- Where are the delays?
- Which loop dominates current behavior?
- What is the system constraint?

**Output**: Stock-flow diagram, constraint identification, behavior prediction

---

#### INTERVENTION (I) — "What should we change?"
**Time**: 30-60 min | **Tools**: TOC 5 Focusing Steps, Leverage Point Hierarchy

**TOC 5 Focusing Steps**:
1. **IDENTIFY** the constraint (from Modeling phase)
2. **EXPLOIT** the constraint (maximize its utilization)
3. **SUBORDINATE** everything else (non-constraints serve constraint)
4. **ELEVATE** the constraint (add capacity if still bottleneck)
5. **REPEAT** (constraint will shift — go back to Step 1)

**Leverage Point Targeting** (L12→L1, lowest to highest):
| Level | Type | Example |
|-------|------|---------|
| L12 | Parameters | Budget amount, headcount |
| L11 | Buffer sizes | Inventory levels, reserves |
| L10 | Physical structure | Factory layout, org chart |
| L9 | Delays | Feedback timing, lead times |
| L8 | Balancing loops | Goals, negative feedback strength |
| L7 | Reinforcing loops | Growth engines, virtuous cycles |
| L6 | Information flows | Who knows what, when |
| L5 | Rules | Policies, incentives, constraints |
| L4 | Self-organization | System's ability to restructure |
| L3 | Goals | What the system optimizes for |
| L2 | Paradigms | Mental models, worldviews |
| L1 | Transcending | Ability to change paradigms |

**Output**: Intervention plan targeting specific leverage points

---

#### REFLECTION (R) — "What did we learn?"
**Time**: 10-15 min | **Tools**: After-Action Review, Metacognition

**Three Levels of Reflection**:

1. **Outcome Assessment**
   - Did throughput increase as predicted?
   - What happened that we didn't predict?
   - Did the constraint shift as expected?

2. **Process Assessment**
   - Were our diagnostic archetypes correct?
   - Was our model accurate enough?
   - Did TOC focus on the real constraint?

3. **Paradigm Assessment** (Critical: L2 leverage)
   - Were our goals appropriate? (L3)
   - What assumptions should we challenge?
   - What mental models blinded us?

**Key Questions**:
- What worked? What didn't?
- What will we do differently next time?
- Are we solving the right problem?
- What should we update in ENGINEERING.md Section 6?

**Output**: Lessons learned, updated mental models, next cycle planning

### 0.4 The Upward Spiral

Each D-M-I-R cycle should target **progressively higher leverage points**:

```
Cycle 1: Fix broken physical flows (L10) via TOC
Cycle 2: Redesign information flows (L6) and strengthen feedback (L7-L8)
Cycle 3: Revise rules and incentives (L5)
Cycle 4: Clarify or change goals (L3)
Cycle 5: Question fundamental paradigms (L2)
Cycle 6: Transcend paradigm attachment (L1)
```

**The Compound Effect**:
- Cycle 1: Fix immediate problem (ROI: 2-5x)
- Cycle 2: Prevent recurrence (ROI: 5-10x)
- Cycle 3: Transform fundamentals (ROI: 10-50x)
- Cycle 4+: Organization becomes self-improving (ROI: Unbounded)

---

## 1. PARALLEL SESSION ARCHITECTURE

```
                    ┌──────────────────────────────┐
                    │       ENGINEERING.md         │
                    │     (Shared Context)         │
                    └──────────┬───────────────────┘
                               │ READ FIRST
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ Session A   │      │ Session B   │      │ Session C   │
   │ DESIGN WORK │      │ ANALYSIS    │      │ REVIEW/TEST │
   │ (Active)    │      │ (Background)│      │ (Background)│
   └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
          │                    │                    │
          ▼                    ▼                    ▼
   ┌─────────────┐      ┌─────────────┐      ┌─────────────┐
   │ Deliverable │      │ Deliverable │      │ Deliverable │
   └──────┬──────┘      └──────┬──────┘      └──────┬──────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               ▼
                    ┌──────────────────────────────┐
                    │   HUMAN REVIEW & DECISIONS   │
                    │     (Orchestrator Role)      │
                    └──────────┬───────────────────┘
                               │
                               ▼
                    ┌──────────────────────────────┐
                    │    Update ENGINEERING.md     │
                    │      Section 6, 7, 9         │
                    └──────────────────────────────┘
```

---

## 2. READY-TO-USE SESSION PROMPTS

### 2.1 TYPE A: Requirements Generation (D-M-I-R Diagnosis)

**Khi dùng**: Bắt đầu sản phẩm mới hoặc review requirements hiện tại
**D-M-I-R Phase**: Primarily DIAGNOSIS

```
Role: Engineering Design Architect + D-M-I-R Practitioner
Context: Read ENGINEERING.md first. Product [P__] is in Task Clarification.

TASK: Generate comprehensive Requirements List for [PRODUCT NAME].

=== DIAGNOSIS PHASE ===
1. Define system boundary:
   - What's IN the system? (product, interfaces, environment)
   - What's OUT? (supply chain, user training, etc.)
   - Who are the stakeholders?

2. Identify system purpose:
   - What job is the user trying to get done?
   - What outcome matters most?
   - Run ODI opportunity analysis if user data available

=== MODELING PHASE ===
3. Follow Pahl & Beitz §5.2 methodology:
   Use the P&B requirements checklist (15 categories):
   Geometry, Kinematics, Forces, Energy, Material, Signals,
   Safety, Ergonomics, Production, Quality, Assembly,
   Transport, Operation, Maintenance, Recycling

4. For each requirement:
   - Classify as Demand (D) or Wish (W)
     D = failure to meet → system rejected
     W = desirable but negotiable
   - Specify quantitative value where possible
   - Identify verification method (T=Test, A=Analysis, I=Inspection, D=Demo)
   - Trace to applicable standard (MIL-STD/STANAG/TCVN)

5. After list complete:
   - Run 5-step Problem Abstraction
   - Formulate Essential Problem Statement (solution-neutral)

=== REFLECTION PHASE ===
6. Check for anti-patterns:
   - Am I assuming a solution? (NEVER-01)
   - Are Demands truly demands? Or disguised wishes?
   - What's the constraint? (ENGINEERING.md Section 7)

Output format: Table matching V-SMASH requirements format.
Reference: ENGINEERING.md Section 4 for applicable standards.
Flag: Any requirement conflicting with Section 5 production capabilities.
```

---

### 2.2 TYPE B: Concept Evaluation (D-M-I-R Modeling + Intervention)

**Khi dùng**: Có ≥3 concept variants, cần systematic selection
**D-M-I-R Phase**: MODELING → INTERVENTION

```
Role: Engineering Design Architect + D-M-I-R Practitioner
Context: Read ENGINEERING.md first. Product [P__] in Conceptual Design.

TASK: Evaluate concepts for [PRODUCT NAME] using VDI 2225 + D-M-I-R.

Input: [Describe or attach concept variants]

=== DIAGNOSIS PHASE ===
1. Verify we're solving the right problem:
   - Review Essential Problem Statement
   - Check: Are concepts solution-neutral or biased?
   - Identify any "Foreign Copy" anti-pattern (Section 9.2)

=== MODELING PHASE ===
2. Define evaluation criteria from ENGINEERING.md Section 8.1
   - Customize weights for this specific product
   - Derive weights using AHP pairwise comparison
   - Verify CR < 0.10 (consistency ratio)

3. Score each concept (0-4 scale per VDI 2225):
   0 = Does not satisfy (ELIMINATES concept)
   1 = Just tolerable
   2 = Adequate
   3 = Good
   4 = Very good (ideal)

4. Calculate weighted scores, identify winner

=== INTERVENTION PHASE ===
5. Run sensitivity analysis:
   - Vary top 3 weights by ±20%
   - Does winner change? If yes → flag for human decision
   - Identify which criteria are decision-drivers

6. Constraint check:
   - Does winning concept fit VKTHQ production capabilities? (Section 5)
   - Does it meet budget target? (Section 7.2)
   - Single-source risk? (W02 violation)

=== REFLECTION PHASE ===
7. Document selection rationale:
   - Why does this concept win?
   - What trade-offs are we accepting?
   - What risks need mitigation?

Anti-pattern check: Am I falling into NEVER-02 (choosing by preference)?

Output: Complete VDI 2225 evaluation matrix + AHP weights + sensitivity + recommendation.
```

---

### 2.3 TYPE C: DfX Analysis (D-M-I-R Intervention)

**Khi dùng**: Embodiment layout available, need manufacturability review
**D-M-I-R Phase**: INTERVENTION (targeting L5-L10)

```
Role: Engineering Design Architect + D-M-I-R Practitioner
Context: Read ENGINEERING.md first. Product [P__] in Embodiment Design.

TASK: DfX analysis for [PRODUCT NAME] embodiment layout.

=== DIAGNOSIS PHASE ===
1. Current constraint identification:
   - What's the current system constraint? (Section 7.1)
   - How does this design decision affect the constraint?

=== MODELING PHASE ===
2. Stock-flow analysis:
   - What accumulates? (cost, complexity, risk, capability)
   - What are the delays? (lead time, test time, rework)

=== INTERVENTION PHASE ===
Check against VKTHQ production capabilities (ENGINEERING.md Section 5):

**DfM (Manufacturing)** — L10 Physical Structure:
- Can all parts be made on VKTHQ equipment?
- Are tolerances within CNC 3-axis capability (±0.05mm)?
- Material available locally? (<2 week lead time)
- Any process requiring outsource? Cost/schedule impact?
- NEVER-07 check: Tolerance tighter than function requires?

**DfA (Assembly)** — L10 Physical Structure:
- How many assembly steps? (<20 target)
- Any special tools required? (DEMAND: standard hand tools only)
- Assembly time estimate?
- Error-proofing (poka-yoke) applied?

**DfR (Reliability)** — L8 Balancing Loops:
- MTBF prediction per MIL-HDBK-217F
- Single point of failure analysis
- Derating applied to all critical components? (≥50%)
- Redundancy where required by safety analysis?

**DfT (Testability)** — L6 Information Flows:
- Test points accessible without disassembly?
- Built-in test capability?
- Can field technician diagnose with standard equipment?
- Test procedures can be performed at VKTHQ?

**DfC (Cost)** — L5 Rules:
- BOM cost vs target (ENGINEERING.md Section 7.2)?
- Manufacturing cost breakdown?
- Where is cost concentrated? Pareto 80/20?

**DfE (Environment)** — L10 Physical Structure:
- MIL-STD-810 conditions addressed? (Section 4.2)
- Tropical considerations (heat, humidity, salt)?
- Conformal coating on PCBs?
- Drain holes, ventilation for sealed enclosures?

=== REFLECTION PHASE ===
3. Leverage point summary:
   - Which DfX issues are L10 (structure) vs L5 (rules)?
   - What's the highest-leverage fix?
   - Update ENGINEERING.md Section 6 if new mistake found

Output: Pass/Fail matrix per DfX category + specific issues + recommendations.
Priority: Flag any DEMAND violation as BLOCKING.
```

---

### 2.4 TYPE D: Systems Analysis (Full D-M-I-R Cycle)

**Khi dùng**: Project stuck, unexpected behavior, recurring problems
**D-M-I-R Phase**: FULL CYCLE

```
Role: D-M-I-R Master + Systems Thinking Specialist
Context: Read ENGINEERING.md first.

TASK: Full D-M-I-R analysis for [DESCRIBE PROBLEM].

══════════════════════════════════════════════════════════════
PHASE 1: DIAGNOSIS (10-15 min)
══════════════════════════════════════════════════════════════

1. Behavior Analysis:
   - What behavior are we seeing? (describe reference mode)
   - What was expected? What actually happened?
   - When did it start? What changed?

2. Previous Interventions:
   - What has been tried?
   - At what leverage level? (L12? L10? L5?)
   - Why didn't it work?

3. Archetype Check (Section 9.2):
   □ Fixes That Fail? (quick fix → delayed side effect → worse)
   □ Shifting the Burden? (dependency on symptomatic solution)
   □ Eroding Goals? (lowering standards when missing targets)
   □ Escalation? (competing responses driving arms race)
   □ Success to Successful? (resources concentrated on wrong project)
   □ Growth & Underinvestment? (growth + insufficient capacity)

4. Boundary Definition:
   - What's in the system?
   - What's out?
   - Who are stakeholders with different mental models?

Output: CLD (Causal Loop Diagram), archetype identification

══════════════════════════════════════════════════════════════
PHASE 2: MODELING (20-30 min)
══════════════════════════════════════════════════════════════

1. Stock-Flow Mapping:
   - Identify stocks (what accumulates):
     • Knowledge, skills, capability
     • Inventory, WIP, backlog
     • Defects, technical debt, risk
     • Trust, reputation, relationships
   
   - Identify flows (what changes stocks):
     • Development rate, learning rate
     • Test rate, fix rate
     • Hiring rate, attrition rate

2. Feedback Loop Analysis:
   - R loops (reinforcing): What's growing or declining?
   - B loops (balancing): What's self-correcting?
   - Which loop dominates current behavior?
   - Where are the delays? (L9)

3. Constraint Identification (TOC Step 1):
   - What is the current bottleneck?
   - Is it physical (capacity) or policy (rules)?
   - If policy: What mental model creates this policy?

Output: Stock-flow diagram, dominant loop identification, constraint

══════════════════════════════════════════════════════════════
PHASE 3: INTERVENTION (30-40 min)
══════════════════════════════════════════════════════════════

1. Leverage Point Scan (L12→L1):
   For each level, ask:
   - Is intervention possible here?
   - What would it look like?
   - What resistance expected?
   - What cascade effects?

   | L12 | Parameters | What numbers could we change? |
   | L11 | Buffers | What reserves could we add? |
   | L10 | Structure | What physical changes? |
   | L9 | Delays | What could we speed up? |
   | L8 | B-loops | What balancing loops need strengthening? |
   | L7 | R-loops | What reinforcing loops need dampening? |
   | L6 | Information | Who needs to know what? |
   | L5 | Rules | What policies should change? |
   | L4 | Self-org | Can system restructure itself? |
   | L3 | Goals | Are we optimizing for the right thing? |
   | L2 | Paradigm | What assumption is wrong? |
   | L1 | Transcend | Can we see beyond current framework? |

2. TOC 5 Focusing Steps (if constraint identified):
   - EXPLOIT: How to maximize constraint utilization?
   - SUBORDINATE: What must non-constraints do differently?
   - ELEVATE: Do we need more constraint capacity?

3. Intervention Design:
   Phase 1 (this week): L6+L9 — quick wins
   Phase 2 (this month): L5+L7/L8 — structural
   Phase 3 (next quarter): L3 — reframe goals
   Phase 4 (ongoing): L2 — paradigm evolution

Output: Intervention cascade plan with specific actions per phase

══════════════════════════════════════════════════════════════
PHASE 4: REFLECTION (10-15 min)
══════════════════════════════════════════════════════════════

1. What did we learn?
   - What was surprising?
   - What archetype was operating?
   - What constraint did we discover?

2. Update ENGINEERING.md:
   - Section 6 (Mistakes Learned): New error pattern?
   - Section 7 (Constraints): Has constraint changed?
   - Section 9 (Patterns): New pattern discovered?

3. Meta-questions:
   - Are we solving the right problem?
   - What paradigm (L2) might be limiting us?
   - What should next D-M-I-R cycle focus on?

Output: Updated ENGINEERING.md, next cycle plan
```

---

### 2.5 TYPE E: Cost Analysis (D-M-I-R Intervention: L5 Rules)

**Khi dùng**: Need BOM costing, cost reduction, make-buy decisions
**D-M-I-R Phase**: INTERVENTION (targeting L5 cost rules)

```
Role: Engineering Design Architect + D-M-I-R Practitioner
Context: Read ENGINEERING.md Section 5 and 7.

TASK: Cost analysis for [PRODUCT NAME] using TOC Throughput Accounting.

=== DIAGNOSIS PHASE ===
1. Define cost system boundary:
   - Development cost vs unit cost vs lifecycle cost
   - Which matters most for this product?

=== MODELING PHASE ===
2. TOC Throughput Accounting metrics:
   - Throughput (T): Revenue - Truly Variable Costs
   - Inventory (I): Money tied up in system
   - Operating Expense (OE): Money to operate
   
   Decision priority: T↑ > I↓ > OE↓

3. BOM Breakdown:
   | Category        | % of unit cost | Target |
   |-----------------|----------------|--------|
   | Materials       | 30-40%         | ...    |
   | Machining       | 15-25%         | ...    |
   | Electronics     | 20-30%         | ...    |
   | Assembly labor  | 10-15%         | ...    |
   | Test & QC       | 5-10%          | ...    |

=== INTERVENTION PHASE ===
4. Pareto Analysis:
   - Top 20% of parts that drive 80% of cost?
   - Focus cost reduction here

5. Make vs Buy Analysis:
   For each major subassembly:
   - Make internally: cost, lead time, quality control
   - Buy: cost, lead time, supplier reliability, IP risk
   - Single-source risk? (W02 violation)

6. Cost Reduction Opportunities (by leverage level):
   - L12 (parameters): Negotiate better prices
   - L10 (structure): Redesign for fewer parts
   - L5 (rules): Change make/buy policy
   - L3 (goals): Redefine cost target based on value

=== REFLECTION PHASE ===
7. Check against constraints:
   - Does cost fit Section 7.2 budget target?
   - Does make/buy decision align with Section 5 capabilities?
   - What trade-offs are we making?

Output: Costed BOM + make/buy matrix + cost reduction roadmap.
```

---

## 3. ORCHESTRATION WORKFLOW — Daily Routine

### 3.1 Morning Kickoff (15 min) — D-M-I-R DIAGNOSIS

1. Update Obsidian CONTEXT.md — what am I working on today?
2. Review [[ENGINEERING]] Section 7 — any constraint changes?
3. Check `domains/[active]/open-questions.md`
4. **Diagnose**: What's the current bottleneck? What leverage level?
5. Plan today's parallel sessions (pick 2-3 from above)
6. Launch sessions with: ENGINEERING.md + CONTEXT.md + project README

### 3.2 Midday Check (10 min) — D-M-I-R INTERVENTION

1. Review outputs from morning sessions
2. Make decisions flagged by AI → log in `domains/[project]/decisions/`
3. **Intervene**: What specific actions based on analysis?
4. Redirect sessions if needed
5. Launch afternoon background tasks

### 3.3 End-of-Day Reflection (15 min) — D-M-I-R REFLECTION

1. Collect all session outputs
2. Capture insights → `_inbox/` (raw, fast)
3. **Reflect**: Update [[ENGINEERING]]:
   - Section 6: New mistakes learned? (compound learning)
   - Section 7: Constraint changed?
   - Section 9: New pattern discovered?
   - Section 2: Product phase advanced?
4. Log decisions → `domains/[project]/decisions/` (with context)
5. Queue tomorrow's background tasks
6. 1-minute journal: **"Highest leverage thing today?"**

### 3.4 Weekly Review (30 min — Friday) — Full D-M-I-R Cycle

1. Process `_inbox/` → move to proper locations or delete
2. Review all `open-questions.md` across active projects
3. **Full D-M-I-R on the week**:
   - D: What patterns emerged this week?
   - M: What's accumulating? (knowledge, debt, risk)
   - I: What interventions worked? At what level?
   - R: What should change about HOW we work?
4. Update [[ENGINEERING]] Sections 2, 6, 7, 9
5. Constraint reassessment: Has constraint moved? (TOC Step 5)
6. Meta-question: **"What did Human Brain catch that AI missed? Vice versa?"**

---

## 4. THE 100x ENGINEERING MULTIPLIER

### 4.1 The Math

**WITHOUT persistent context + D-M-I-R**:
- 70% of change initiatives fail
- 95% of effort on L12 parameters
- Mistakes repeated across projects

**WITH ENGINEERING.md + D-M-I-R**:
```
Session setup: 30min → 2min (15x)
× Parallel sessions: 5x
× Compound learning: 2-3x (mistakes never repeated)
× Correct leverage targeting: 5-10x (L3 vs L12)
= 75-150x potential multiplier
```

### 4.2 The Upward Spiral in Practice

| Cycle | Focus | Expected ROI |
|-------|-------|--------------|
| 1 | Fix broken flows (L10) via TOC | 2-5x |
| 2 | Redesign information (L6) + feedback (L7-L8) | 5-10x |
| 3 | Revise rules/incentives (L5) | 10-20x |
| 4 | Clarify/change goals (L3) | 20-50x |
| 5+ | Question paradigms (L2) | Unbounded |

**Key Insight**: Organizations that fail to progress up this hierarchy remain trapped in parameter tinkering (L12) and wonder why nothing changes.

---

## 5. QUICK REFERENCE CARDS

### 5.1 D-M-I-R Per-Session Checklist

```
□ DIAGNOSIS (10 min)
  ├─ What's the system? Boundaries?
  ├─ What archetype is operating?
  ├─ What leverage level are we at?
  └─ Output: CLD or problem statement

□ MODELING (20-40 min)
  ├─ What are stocks and flows?
  ├─ Which feedback loops dominate?
  ├─ What's the constraint?
  └─ Output: Analysis/model

□ INTERVENTION (30-60 min)
  ├─ What leverage point to target?
  ├─ What specific action?
  ├─ What resistance expected?
  └─ Output: Deliverable/artifact

□ REFLECTION (10 min)
  ├─ What worked? What didn't?
  ├─ Update ENGINEERING.md Section 6?
  └─ What's next cycle focus?
```

### 5.2 Leverage Point Quick Reference

```
HIGH LEVERAGE (hard to achieve, huge impact):
L1: Transcending paradigms
L2: Paradigms (mental models)
L3: Goals of the system
L4: Self-organization capability

MEDIUM LEVERAGE (structural changes):
L5: Rules (policies, incentives)
L6: Information flows
L7: Reinforcing feedback loops
L8: Balancing feedback loops

LOWER LEVERAGE (easier but less impact):
L9: Delays
L10: Physical structure
L11: Buffer sizes
L12: Parameters (numbers)

MOST EFFORT GOES HERE → LEAST LEVERAGE
```

### 5.3 System Archetypes Quick Reference

| Archetype | Pattern | Symptom | High-Leverage Fix |
|-----------|---------|---------|-------------------|
| Fixes That Fail | Quick fix → delayed side effect | Problem returns worse | Address root cause (L6) |
| Shifting Burden | Symptomatic solution → dependency | Can't function without fix | Strengthen fundamental solution (L5) |
| Eroding Goals | Miss target → lower standard | "Good enough" creeps down | Anchor standards (L3) |
| Escalation | A acts → B reacts → A escalates | Arms race | Break loop, negotiate (L5) |
| Success to Successful | Winner gets more → others starve | Inequality grows | Rebalance resources (L5) |
| Growth & Underinvestment | Growth → strain → underinvest | Collapse after success | Invest in capacity (L10) |

---

## References

- [[ENGINEERING]] — Master context file
- [[INDEX]] — Quick navigation
- [[CONTEXT]] — Current focus
- [[friction-log]] — System improvements
- [[DMIR_Unified_Model_Deep_Research]] — Full framework theory

---

*Session Playbook v2.0 — D-M-I-R Enhanced*
*Integrating: DST × SD × TOC × Meta-Learning*
