# Diagnosis Guide: Phase 1 - Systems Thinking for Defense Manufacturing

## Overview

Phase 1 establishes the systemic foundation for the entire D-M-I-R cycle. Poor diagnosis leads to solving wrong problems—no amount of sophisticated modeling or intervention can fix misidentified issues.

**Duration**: 2 weeks
**Output**: Validated Causal Loop Diagram (CLD), archetype identification, boundary specification
**Participants**: 8-12 cross-functional stakeholders

## Diagnosis Objectives

1. **Map system boundaries**: What's included vs. excluded?
2. **Identify feedback structure**: Reinforcing and balancing loops
3. **Recognize archetypes**: Match to known problematic patterns
4. **Surface mental models**: Make implicit assumptions explicit
5. **Assess resilience**: Buffer adequacy, diversity, self-organization

## Step 1: Stakeholder Workshop (Week 1, Days 1-3)

### Pre-Workshop Preparation

**Participant Selection** (aim for diversity):
- Engineering leadership (design, systems, test)
- Production/operations managers
- Quality assurance representatives
- Supply chain/procurement
- Finance/program management
- Customer interface (contracts, requirements)
- Shop floor representation (if possible)
- At least 1 external perspective (consultant, customer, supplier)

**Materials Needed**:
- Large whiteboard or wall space
- Sticky notes (3 colors minimum)
- Markers (multiple colors)
- Flip charts
- Historical data graphs printed large
- Camera for documentation

**Pre-Work for Participants** (send 1 week ahead):
- Brief on D-M-I-R framework (2-page overview)
- System boundaries question: "What should we include in our analysis?"
- Key metrics question: "What have we been tracking? What should we track?"
- Problem statement: "Describe the issue from your perspective"

### Day 1: Problem Structuring (4 hours)

**Session 1: Multi-Perspective Problem Definition** (90 min)

**Process**:
1. **Individual reflection** (10 min): Each person writes their problem statement
2. **Round-robin sharing** (40 min): Each person shares (5 min each, no interruptions)
3. **Pattern identification** (40 min): Facilitator identifies themes

**Facilitation Tips**:
- Listen for symptoms vs. root causes
- Note divergent perspectives (engineering vs. operations vs. finance)
- Capture verbatim on flip charts
- Don't try to resolve conflicts yet—document them

**Expected Outputs**:
- 8-12 different problem statements
- Identification of "problem owners" (who feels it most)
- Recognition of conflicting goals/priorities

**Defense Manufacturing Example**:
```
Engineering: "Requirements keep changing, we can't stabilize designs"
Production: "Designs arrive late and incomplete, we're always rushing"
Quality: "Insufficient testing time leads to field failures"
Customer: "Deliveries consistently slip, costs escalate"
Finance: "Cash flow unpredictable, constant budget pressure"
Supply Chain: "Expediting has become normal, premium freight costs soaring"
```

**Facilitator synthesis**: "These symptoms suggest a systemic pattern—let's map it."

**Session 2: Historical Behavior Patterns** (90 min)

**Process**:
1. **Pre-prepared graphs** (20 min): Present historical data (3-5 years)
2. **Pattern recognition** (40 min): What do we see?
3. **Dominant mode identification** (30 min): Growth? Oscillation? Stagnation? Collapse?

**Critical Metrics to Graph**:
- **Throughput**: Units delivered per month
- **Lead time**: Order to delivery (weeks)
- **WIP**: Work-in-process inventory (units)
- **Quality**: Defect rate, rework percentage, field failures
- **On-time delivery**: Percentage meeting committed dates
- **Resource utilization**: Engineering hours, production capacity usage
- **Financial**: Revenue, margin, cost variance

**Pattern Recognition Questions**:
- Where do we see steady trends?
- Where do we see oscillations (boom-bust)?
- Where do we see sudden shifts?
- What external events correlate with changes?
- What delays exist between cause and effect?

**Defense Manufacturing Patterns**:
- **Oscillation**: Hiring/firing cycles lagging workload by 6-12 months
- **Drift**: On-time delivery declining from 85% → 70% → 55% over 3 years
- **Crisis cycles**: Every 6 months, major expediting push

**Expected Output**: 
- 5-8 key graphs showing behavior over time
- Identification of dominant problematic patterns
- Timeline of major events correlated with changes

**Break** (30 min)

**Session 3: Initial Stock Identification** (60 min)

**Process**:
1. **Stock definition** (10 min): "Accumulations that change slowly"
2. **Brainstorm** (30 min): What accumulates in our system?
3. **Categorize** (20 min): Physical, human, information, financial, intangible

**Stock Identification Framework**:

**Physical Stocks**:
- Raw materials inventory (units, kg, components)
- Work-in-process (WIP) (partially completed assemblies)
- Finished goods inventory
- Equipment/machinery (depreciated capital)

**Human Capital Stocks**:
- Engineering staff (person-years by specialty)
- Production workers (person-years by skill)
- Experience level (average years in role)
- Institutional knowledge (undocumented expertise)

**Information Stocks**:
- Design backlog (projects waiting)
- Engineering change orders (ECOs pending)
- Test data accumulated
- Lessons learned database
- Customer complaints/feedback

**Financial Stocks**:
- Working capital
- Accounts receivable (payment delays)
- R&D investment budget
- Contract backlog (signed but not started)

**Intangible Stocks**:
- Customer satisfaction (reputation)
- Employee morale
- Organizational trust
- Technical capability/maturity

**Facilitation Tip**: For each stock, ask:
- "How is this measured or estimated?"
- "What flows increase it?"
- "What flows decrease it?"
- "How quickly does it change?"

**Expected Output**: 
- List of 15-25 major stocks
- Understanding of what accumulates vs. flows through
- Preparation for CLD development

### Day 2: Boundary Discussion and Initial CLD (4 hours)

**Session 1: System Boundary Definition** (90 min)

**Process**:
1. **Narrow boundary proposal** (20 min): "Just manufacturing floor"
2. **Expand iteratively** (40 min): What are we missing?
3. **Adequacy test** (30 min): Can we explain behavior with this boundary?

**Boundary Adequacy Test Questions**:
- Can problematic behavior be explained by internal structure?
- Or must we include external forces?
- Do key feedback loops close within our boundary?
- Are major delays contained within scope?

**Defense Manufacturing Example**:

**Too Narrow**: "Production floor only"
- Missing: Why do designs arrive late? (Engineering excluded)
- Missing: Why do requirements change? (Customer excluded)
- **Result**: Can't explain root causes

**Too Broad**: "Entire defense industrial base + government + geopolitics"
- **Result**: Unmanageable complexity, can't influence most factors

**Appropriate**: "R&D → Design → Procurement → Production → Testing → Delivery"
- Includes: Internal engineering, production, quality, supply chain
- Interface points: Customer requirements (input), delivered product (output)
- Excludes: Customer's operational use, competitor behavior, government policy
- **Result**: Bounded but complete enough to explain and influence

**Decision Rule**: Include elements that:
1. Generate problematic behavior (sources)
2. Respond to interventions (controllable)
3. Form feedback loops (circular causation)

**Expected Output**:
- Explicit boundary specification
- Rationale for inclusions/exclusions
- Interface points defined
- Stakeholder agreement documented

**Session 2: Causal Loop Diagram Construction** (90 min)

**Process**:
1. **Start with dominant symptom** (15 min): Pick most painful problem
2. **Trace cause-effect chains** (60 min): Build the structure
3. **Identify loops** (15 min): Find circular causation

**CLD Building Protocol**:

**Step 1: Pick starting variable**
Example: "Production Crises"

**Step 2: Ask "What causes this to increase?"**
- Late design changes → Production Crises ↑
- Component shortages → Production Crises ↑
- Insufficient testing time → Production Crises ↑

**Step 3: For each cause, ask "What does this affect?"**
- Production Crises ↑ → Firefighting Mode ↑
- Firefighting Mode ↑ → Process Improvement Time ↓
- Process Improvement Time ↓ → Process Quality ↓
- Process Quality ↓ → Production Crises ↑ [LOOP CLOSES!]

**This is a reinforcing loop (R)** - vicious cycle

**Step 4: Continue until loops close**

**CLD Notation**:
- **Variables**: Nouns or noun phrases (clear, concrete)
- **Arrows**: Causal relationships (→)
- **Polarity**: 
  - (+) Same direction: A ↑ causes B ↑; A ↓ causes B ↓
  - (-) Opposite direction: A ↑ causes B ↓; A ↓ causes B ↑
- **Loop labels**: R (reinforcing) or B (balancing)
- **Delays**: || marks on arrows

**Defense Manufacturing Core CLD Example**:

```
R1: Crisis-Firefighting Spiral
Production Crises (+)
  → Firefighting Mode (+)
    → Process Improvement Time (-)
      → Process Quality (-)
        → Production Crises (+) [LOOP CLOSES]

R2: Quality-Reputation Spiral (virtuous)
Product Quality (+)
  → Customer Satisfaction (+)
    → Repeat Contracts (+)
      → Revenue (+)
        → R&D Investment (+)
          → Product Quality (+) [LOOP CLOSES]

B1: Capacity Balancing
Project Backlog (+)
  → Resource Pressure (+)
    → Hiring Decisions (+)
      || (6-12 month delay)
        → Engineering Capacity (+)
          → Projects Completed (+)
            → Project Backlog (-) [LOOP CLOSES]

R3: Experience Building
Engineering Experience (+)
  → Design Capability (+)
    → Complex Projects Won (+)
      → Engineering Challenges (+)
        → Engineering Experience (+) [LOOP CLOSES]
```

**Facilitation Tips**:
- Use sticky notes initially (easy to rearrange)
- Draw on whiteboard incrementally
- Test loop polarity: "If everything increases, does it create growth or stability?"
- Reinforce loops: Snowball effect (vicious or virtuous)
- Balance loops: Self-correcting toward goal

**Common Mistakes to Avoid**:
- ✗ "Lack of X" as variable (use positive quantities: "X" not "lack of X")
- ✗ Desired states as variables (use measurable quantities)
- ✗ Actions as variables (use states that change)
- ✗ Too many variables (aim for 15-30 in final CLD)

**Expected Output**:
- Draft CLD with 4-8 major loops identified
- Clear loop labels (R1, R2, B1, etc.)
- Delays marked where known
- Ready for refinement

**Break** (30 min)

### Day 3: CLD Refinement and Validation (3 hours)

**Session 1: CLD Walkthrough and Testing** (90 min)

**Process**:
1. **Facilitator presents** (30 min): Explain complete CLD to group
2. **Loop-by-loop validation** (45 min): Does each loop make sense?
3. **Behavior reproduction test** (15 min): Does CLD explain historical patterns?

**Validation Questions per Loop**:
- "Does this causal chain actually exist in our system?"
- "Is the polarity correct?" (Test: If everything increases...)
- "Are we missing critical links?"
- "Do delays match reality?" (How long between cause and effect?)

**Behavior Reproduction Test**:
- "Can we trace our delivery decline to specific loops?"
- "Which loops explain the boom-bust hiring pattern?"
- "Why do quality issues persist despite firefighting?"

**Expected Answers from Defense Example**:
- Delivery decline: R1 (Crisis-Firefighting) + weak B1 (delayed hiring response)
- Boom-bust: B1 delay (12 months) + oscillation from hiring lag
- Quality persistence: R1 prevents fundamental solutions (Process Quality degrades)

**If CLD can't explain observed behavior**: 
- Boundary too narrow (expand)
- Missing key feedback loop (add)
- Wrong causal relationships (revise)

**Session 2: Archetype Pattern Matching** (60 min)

**Process**:
1. **Review 8 system archetypes** (15 min): Quick overview
2. **Pattern matching** (30 min): Which archetypes present?
3. **Escape route identification** (15 min): Known interventions for each

**Matching Protocol**:
Check CLD against each archetype:

**1. Shifting Burden?**
- Look for: Quick fix vs. fundamental solution structure
- Defense signature: Hero engineers fixing everything, process never improves
- CLD evidence: R1 (Firefighting prevents Process Improvement)
- **Match: YES**

**2. Tragedy of Commons?**
- Look for: Shared resource, distributed degradation
- Defense signature: Multiple projects competing for specialized engineers
- CLD evidence: Would need to add "Shared Resource Depletion" loop
- **Match: POSSIBLY** (not in current CLD, may need to add)

**3. Drift to Low Performance?**
- Look for: Eroding goals structure
- Defense signature: "80% on-time was standard, now 55% is 'acceptable'"
- CLD evidence: Would need "Performance Standard" variable adjusting
- **Match: YES** (add this structure)

**Continue through all 8 archetypes...**

**Expected Output**:
- 2-4 archetypes identified as present
- Primary archetype designated (most dominant)
- Escape routes noted for each (reference: system-archetypes.md)

**Session 3: Finalization and Next Steps** (30 min)

**Create Final CLD**:
- Clean up notation
- Add title and legend
- Label all loops clearly
- Mark delays with estimates
- Add archetype annotations

**Document Decisions**:
- System boundary rationale
- Key assumptions made
- Areas of uncertainty
- What we deliberately simplified

**Handoff to Modeling Phase**:
- Which stocks to quantify first?
- Which parameters need data collection?
- Which relationships need equations?
- Where are we most uncertain?

## Step 2: CLD Refinement and Documentation (Week 1, Days 4-5)

### Small Team Synthesis (2-3 Systems Thinkers)

**Day 4-5 Activities**:

**1. CLD Beautification** (4 hours)
- Redraw CLD in tool (Vensim, Stella, or drawing software)
- Ensure all loops close properly
- Add clear variable names
- Create legend
- Prepare for presentation

**2. Archetype Deep Dive** (3 hours)
- For each identified archetype, document:
  - Specific manifestation in this system
  - Evidence from historical data
  - Escape routes (general + system-specific)
  - Leverage points (L1-L12)

**3. Documentation Package** (2 hours)
- System boundary specification (1 page)
- CLD with annotations (1-2 pages)
- Archetype analysis (2-3 pages)
- Historical behavior graphs (5-8 charts)
- Workshop notes and quotes (3-5 pages)

**4. Validation Prep** (2 hours)
- Prepare presentation for stakeholders
- Identify questions/objections likely to arise
- Gather additional data if needed
- Plan for iteration

## Step 3: Stakeholder Validation (Week 2)

### Validation Workshop (Half-Day)

**Objectives**:
- Confirm CLD accurately represents system
- Get buy-in from key decision-makers
- Identify any critical missing elements
- Transition to Modeling phase

**Agenda** (3 hours):

**1. CLD Presentation** (45 min)
- Walk through complete diagram
- Explain each major loop
- Connect to historical behavior
- Show archetype patterns

**2. Validation Exercise** (60 min)
- Small groups review sections of CLD
- Each group reports: "What's right? What's missing?"
- Facilitator captures feedback
- Discuss and resolve major issues

**3. Archetype Discussion** (45 min)
- Present identified archetypes
- Validate: "Do you recognize these patterns?"
- Discuss escape routes
- Prioritize which to address

**4. Next Steps and Commitment** (30 min)
- Preview Modeling phase (SD)
- Data collection requirements
- Resource commitments needed
- Timeline agreement

**Validation Criteria**:
- ✓ Stakeholders recognize their experience in CLD
- ✓ Major feedback loops validated by domain experts
- ✓ Archetypes resonate as "aha, that's exactly what happens"
- ✓ Controversial elements discussed and resolved
- ✓ Commitment to proceed to Modeling

## Step 4: Mental Model Excavation (Week 2)

### Paradigm and Goal Analysis

**Activity**: One-on-one interviews with key leaders (5-7 people, 1 hour each)

**Interview Protocol**:

**Part 1: Implicit Paradigms** (20 min)

Questions to surface beliefs:

**About Technology**:
- "What makes a defense product 'successful'?"
- "When is innovation worth the risk?"
- "How much testing is 'enough'?"

**About People**:
- "What motivates engineers to do their best work?"
- "How do you know if someone is 'performing'?"
- "What's the role of hierarchy vs. autonomy?"

**About Quality**:
- "Does quality cost money or save money?"
- "Who is responsible for quality?"
- "When is 'good enough' acceptable?"

**About Customers**:
- "What's our relationship with the government customer?"
- "How firm are requirements?"
- "Who knows what the customer 'really' needs?"

**Part 2: Goal Hierarchy** (20 min)

Questions to reveal priorities:

- "What does success look like for this organization?"
- "If you had to choose, what's more important: schedule, cost, or performance?"
- "What do you optimize for in daily decisions?"
- "What gets rewarded here? What gets punished?"
- "If this organization disappeared, what would the nation lose?"

**Part 3: Conflict Identification** (20 min)

Questions to surface tensions:

- "What goals seem to conflict in practice?"
- "When you have to make trade-offs, how do you decide?"
- "What would you change about how success is measured?"
- "Where do different departments pull in opposite directions?"

**Documentation**:
Create matrix of responses:

| Paradigm/Goal | Executive 1 | Executive 2 | Engineering Dir | Ops Manager |
|---------------|-------------|-------------|-----------------|-------------|
| Success = | Revenue | On-time | Technical excellence | Efficiency |
| Quality = | Expensive | Essential | Expected | Tested-in |
| Innovation = | Risky | Survival | Purpose | Disruption |

**Analysis**:
- Where is alignment? (Leverage these shared beliefs)
- Where is conflict? (Must resolve for effective intervention)
- Which paradigms limit possibilities? (Targets for L2 leverage)
- Which goals drive dysfunctional behavior? (Targets for L3 leverage)

## Step 5: Resilience Assessment (Week 2)

### System Vulnerability Analysis

**Framework**: Evaluate along 5 dimensions

**1. Redundancy Assessment**

| System Element | Single Point of Failure? | Backup Available? | Recovery Time | Risk Level |
|----------------|-------------------------|-------------------|---------------|------------|
| Key engineer #1 | YES | Partial (1 backup) | 6-12 months | HIGH |
| Test equipment | YES | No backup | 8 weeks delivery | HIGH |
| Critical supplier | YES | Alternative exists but not qualified | 6 months | MED |

**2. Diversity Evaluation**

| Dimension | Current State | Adequate? | Recommendation |
|-----------|---------------|-----------|----------------|
| Product lines | 2 major programs | LOW | Diversify portfolio |
| Technical approaches | Standardized on one | LOW | Encourage experimentation |
| Staff backgrounds | Mostly from 2 companies | MEDIUM | Hire diverse experience |
| Supplier base | 60% from 3 suppliers | MEDIUM | Broaden network |

**3. Modularity Check**

Questions:
- Can subsystems be isolated if one fails? (Coupling assessment)
- Are interfaces standardized? (Interchangeability)
- Can we upgrade components independently? (Flexibility)

Defense manufacturing often has HIGH coupling (tightly integrated) = LOW resilience

**4. Feedback Loop Strength**

| Loop | Response Time | Accuracy | Reliability | Strength |
|------|---------------|----------|-------------|----------|
| Quality feedback (test → design) | 2 weeks | HIGH | Consistent | STRONG |
| Customer satisfaction → strategy | 6 months | MEDIUM | Delayed | WEAK |
| Cost overrun → corrective action | 1 month lag | LOW | Reactive | WEAK |

**5. Self-Organization Capacity**

Questions:
- Can teams reorganize to meet new challenges?
- Is experimentation resourced and encouraged?
- Are failures treated as learning opportunities?
- Can the system create new structures/capabilities?

Assessment Scale: LOW / MEDIUM / HIGH

**Resilience Score Summary**:
- **Redundancy**: LOW (multiple single points of failure)
- **Diversity**: MEDIUM (some variety but concentrated)
- **Modularity**: LOW (high coupling, tight integration)
- **Feedback**: MEDIUM (some loops strong, others weak)
- **Self-Organization**: LOW (rigid structures, risk-averse)

**Overall Resilience**: LOW → HIGH VULNERABILITY to disruptions

**Implications**:
- System can handle small perturbations but not large shocks
- Single-point failures could cause cascading collapse
- Limited ability to adapt to novel challenges
- Intervention must include resilience-building

## Diagnosis Deliverables Checklist

Before transitioning to Modeling Phase, ensure you have:

**Required Documents**:
- [ ] System boundary specification (1 page, with rationale)
- [ ] Causal Loop Diagram (clean, annotated, with legend)
- [ ] Loop inventory (list of all R and B loops with descriptions)
- [ ] Archetype analysis (2-4 patterns identified with evidence)
- [ ] Historical behavior graphs (5-8 key metrics over 3-5 years)
- [ ] Workshop notes (stakeholder perspectives, quotes)
- [ ] Mental model matrix (paradigms and goals by stakeholder)
- [ ] Resilience assessment (5 dimensions evaluated)
- [ ] Validation record (stakeholder sign-off on CLD)

**Quantification Readiness**:
- [ ] Stock list (15-25 variables to potentially model)
- [ ] Data availability assessment (what exists, what needs collection)
- [ ] Parameter estimation plan (how to quantify relationships)
- [ ] Key uncertainties flagged (where we need more investigation)

**Transition to Modeling**:
- [ ] Priority stocks identified (which to model first)
- [ ] Key relationships to quantify (which feedback loops most critical)
- [ ] Data collection tasks assigned (who gets what by when)
- [ ] Modeling team confirmed (who has SD skills or will learn)

## Common Diagnosis Mistakes

**1. Rushing to Solutions**
- Symptom: "We already know the problem is X, let's just model that"
- Fix: Force 2-week diagnosis period, resist premature solutions

**2. Blaming People Not Structure**
- Symptom: CLD full of "lazy workers," "incompetent management"
- Fix: Reframe as system structure causing behavior

**3. Missing Key Feedback Loops**
- Symptom: CLD looks linear (few loops close)
- Fix: Keep asking "What does this affect?" until loops close

**4. Boundary Too Narrow**
- Symptom: Can't explain observed behavior with included elements
- Fix: Iteratively expand until key dynamics are endogenous

**5. Too Much Detail**
- Symptom: CLD with 50+ variables, impossible to comprehend
- Fix: Aggregate, simplify, focus on high-level structure

**6. Ignoring Delays**
- Symptom: Loops without delay estimates
- Fix: For each causal link, ask "How long between cause and effect?"

**7. Skipping Validation**
- Symptom: Systems thinkers love their CLD, stakeholders confused
- Fix: Mandatory stakeholder validation workshop

**8. No Mental Model Work**
- Symptom: Focus only on "objective" structure, ignore beliefs
- Fix: Paradigm and goal interviews, especially with resisters

## Integration with D-M-I-R Phases

**Feeds into Modeling** (Phase 2):
- CLD structure → SD model architecture
- Stocks → Quantified state variables
- Loops → Equations and relationships
- Delays → Time constants in model
- Archetypes → Validation check (does simulation reproduce?)

**Enables Intervention** (Phase 3):
- Archetypes → Known escape routes
- Leverage points → Where to intervene (L1-L12)
- Mental models → Resistance prediction
- Resilience → Vulnerability priorities

**Prepares Reflection** (Phase 4):
- Paradigms documented → Track shifts
- Goals explicit → Measure alignment
- Assumptions flagged → Test in reality
- Baseline understanding → Compare post-intervention

## Defense Manufacturing Diagnostic Checklist

Specific considerations for defense/security context:

**Regulatory Complexity**:
- [ ] Mapped government oversight feedback loops
- [ ] Identified security requirement impacts
- [ ] Understood compliance delays
- [ ] Recognized multi-stakeholder approval chains

**Technical Sophistication**:
- [ ] Captured systems-of-systems complexity
- [ ] Identified critical technical risks
- [ ] Mapped multi-disciplinary dependencies
- [ ] Understood test/validation feedback loops

**Supply Chain Specialization**:
- [ ] Identified single-source dependencies
- [ ] Mapped lead time delays (often 6-18 months)
- [ ] Recognized geopolitical risks
- [ ] Understood export control constraints

**Stakeholder Complexity**:
- [ ] Included government customer interface
- [ ] Recognized military end-user needs
- [ ] Mapped political oversight effects
- [ ] Understood budget cycle impacts

---

*This diagnosis methodology is adapted from Donella Meadows' systems thinking framework and Jay Forrester's system dynamics approach, specialized for defense manufacturing contexts.*
