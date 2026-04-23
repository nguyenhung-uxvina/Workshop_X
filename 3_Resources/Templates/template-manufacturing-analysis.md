# Manufacturing System Analysis Template

**System Name**: [Name of manufacturing operation]

**Analysis Date**: [Date]

**Analyst**: [Your name]

---

## 1. SYSTEM SNAPSHOT

### System Boundary
- **Included**: [What's inside the analysis boundary]
- **Excluded**: [What's outside but relevant]
- **Interfaces**: [Key external connections]

### System Goal
- **Stated Goal**: [What documents/leadership say]
- **Actual Goal**: [What system actually optimizes for - revealed by behavior]
- **Gap Analysis**: [Misalignment between stated and actual]

### Key Stocks (What Accumulates)
| Stock | Current Level | Desired Level | Trend |
|-------|--------------|---------------|-------|
| Inventory WIP | [value] | [value] | [↑/↓/→] |
| Inventory FG | [value] | [value] | [↑/↓/→] |
| Backlog | [value] | [value] | [↑/↓/→] |
| Technical knowledge | [qualitative] | [qualitative] | [↑/↓/→] |
| Equipment capacity | [value] | [value] | [↑/↓/→] |

### Key Flows (What Changes Stocks)
| Flow | Rate | Driver |
|------|------|--------|
| Production rate | [units/time] | [What determines it] |
| Demand rate | [units/time] | [Customer orders] |
| Defect rate | [%] | [Quality issues] |
| Learning rate | [%/period] | [Experience accumulation] |

### Current Problem
- **Symptom**: [Visible problem - what people complain about]
- **Root Cause Hypothesis**: [Underlying system structure issue]
- **Failed Solutions**: [What's been tried that didn't work]

---

## 2. LEVERAGE POINTS DETECTED

### HIGH LEVERAGE (L1-L3)

#### L3: System Goals
- **Evidence**: [Specific behaviors revealing real goals]
- **Goal Misalignment**: 
  - Current: [What system optimizes for now]
  - Should be: [What system should optimize for]
- **Accessibility**: [Easy/Medium/Hard]
- **Intervention**: [Specific action to realign goals]
- **Expected Impact**: [Cascade effects from goal change]

#### L2: Paradigm
- **Deep Assumption**: [Unquestioned beliefs about how system works]
- **Evidence**: ["The way we've always done it", common sayings]
- **Paradigm Shift Needed**: [From X to Y]
- **Accessibility**: [Hard - requires culture change]
- **Intervention**: [Stories, examples to challenge paradigm]
- **Expected Impact**: [How paradigm shift enables other changes]

### MID-HIGH LEVERAGE (L4-L6)

#### L6: Information Flow
- **Current Delays**: [How long for info to flow]
- **Information Asymmetries**: [Who knows what, who doesn't]
- **Broken Feedback Loops**: [Where feedback doesn't reach decision-makers]
- **Accessibility**: [Easy/Medium]
- **Intervention**: [Specific info flow improvements]
- **Expected Impact**: [Better decisions, faster correction]

#### L5: System Rules
- **Misaligned Incentives**: [Rules driving wrong behavior]
- **Dysfunctional Policies**: [Written/unwritten rules hurting system]
- **Accessibility**: [Easy - just policy change]
- **Intervention**: [Specific rule changes]
- **Expected Impact**: [Behavior changes automatically]

#### L4: Self-Organization
- **Adaptation Capacity**: [Can system evolve itself?]
- **Innovation Sources**: [Top-down only or bottom-up too?]
- **Constraints on Evolution**: [What prevents adaptation]
- **Accessibility**: [Medium]
- **Intervention**: [Enable self-organization]
- **Expected Impact**: [System improves without central control]

### MID LEVERAGE (L7-L9)

#### L7: Reinforcing Loops
- **Virtuous Cycles**: [Positive feedback loops to accelerate]
  - Structure: [What reinforces what]
  - Current Strength: [How fast loop cycles]
  - Intervention: [How to accelerate]
  
- **Vicious Cycles**: [Negative feedback loops to slow]
  - Structure: [What reinforces what]
  - Current Strength: [How fast loop cycles]
  - Intervention: [How to break/slow loop]

#### L8: Balancing Loops
- **Correction Mechanisms**: [What provides stability]
- **Too Weak?**: [Insufficient correction, system drifts]
- **Too Strong?**: [Over-correction, oscillation]
- **Accessibility**: [Medium]
- **Intervention**: [Strengthen/weaken specific loops]
- **Expected Impact**: [Better stability or flexibility]

#### L9: Delays
- **Critical Delays**: [Longest/most problematic delays]
  | Delay Type | Current Length | Impact |
  |------------|---------------|--------|
  | [Quality feedback] | [4 days] | [High] |
  | [Supply lead time] | [8 weeks] | [High] |
  | [Decision approval] | [2 weeks] | [Medium] |
  
- **Accessibility**: [Medium - often physically constrained]
- **Intervention**: [How to reduce specific delays]
- **Expected Impact**: [Faster feedback, less oscillation]

### LOW LEVERAGE (L10-L12)

#### L10: Physical Structure
- **Current Structure**: [Layout, topology, capacity]
- **Constraints**: [Physical limits on performance]
- **Capital Required**: [Cost to change]
- **Accessibility**: [Hard - expensive, slow]
- **Intervention**: [Only if higher leverage points exhausted]
- **Expected Impact**: [Large but expensive]

#### L11: Buffer Sizes
- **Current Buffers**: [Inventory, time, capacity margins]
- **Right-Sized?**: [Too large (waste) or too small (fragile)]
- **Accessibility**: [Easy]
- **Intervention**: [Adjust specific buffers]
- **Expected Impact**: [Stability but doesn't fix root cause]

#### L12: Parameters
- **Key Parameters**: [Numbers that could be adjusted]
- **Already Tried?**: [Parameter tweaks that failed]
- **Accessibility**: [Very easy]
- **Intervention**: [Usually NOT recommended as first step]
- **Expected Impact**: [Minimal unless bifurcation point]

---

## 3. SYSTEM ARCHETYPES DETECTED

Check which patterns apply:

[ ] **Fixes That Fail** (Policy Resistance)
- Symptom: [Quick fix works, then problem returns worse]
- Root Cause: [Fast reinforcing loop overrides slow balancing loop]
- Leverage: [Strengthen L8, slow L7, or change goal L3]

[ ] **Shifting the Burden** (Addiction Loop)
- Symptom: [External support needed repeatedly, internal capacity atrophies]
- Root Cause: [Wrong information flow L6, misaligned incentives L5]
- Leverage: [Rebuild internal capacity, change rules L5]

[ ] **Seeking Wrong Goal** (Metric Gaming)
- Symptom: [Metric improves but real problem persists]
- Root Cause: [Proxy goal L3 diverges from real goal]
- Leverage: [Redefine system goal L3 or change info flow L6]

[ ] **Limits to Growth**
- Symptom: [Growth slows despite continued effort]
- Root Cause: [Balancing loop L8 reaches limit]
- Leverage: [Remove/shift limiting factor]

---

## 4. RECOMMENDED INTERVENTION STRATEGY

### Priority 1: [Start Here] (Week 1-2)
**Action**: [Specific, concrete action]
- **Leverage Point**: L[X]
- **Why**: [Justification - why this is highest leverage]
- **Steps**: 
  1. [Concrete step 1]
  2. [Concrete step 2]
  3. [Concrete step 3]
- **Timeline**: [Timeframe]
- **Expected Resistance**: [Who will resist, why]
- **Mitigation**: [How to address resistance]
- **Cost**: [$ or effort estimate]
- **Success Metrics**: [How to measure if working]

### Priority 2: (Month 1-2)
[Same structure as Priority 1]

### Priority 3: (Month 2-3)
[Same structure as Priority 1]

### Priority 4: (Month 3-6)
[Same structure as Priority 1]

---

## 5. WHAT NOT TO DO

### ❌ Rejected Options
| Option | Why Rejected | Alternative |
|--------|-------------|-------------|
| [Option A] | [Low leverage - L12 parameter tweak] | [Higher leverage L3 goal change] |
| [Option B] | [Treats symptom not cause] | [Address root cause] |
| [Option C] | [Makes problem worse] | [Different approach] |

---

## 6. WARNINGS & UNINTENDED CONSEQUENCES

### Resistance Points
1. **[Stakeholder Group]**
   - Will resist because: [Reason]
   - Mitigate by: [Strategy]

2. **[Another Group]**
   - Will resist because: [Reason]
   - Mitigate by: [Strategy]

### Unintended Consequences to Watch
- **Risk 1**: [Potential negative side effect]
  - Likelihood: [High/Med/Low]
  - Mitigation: [How to prevent]
  
- **Risk 2**: [Another risk]
  - Likelihood: [High/Med/Low]
  - Mitigation: [How to prevent]

### Common Traps
- [ ] **Reverting to parameter tweaking** when pressure mounts
- [ ] **Declaring victory early** after 3-month improvement (real test is 12 months)
- [ ] **Skipping paradigm work** (L2) - rules won't stick without culture shift

---

## 7. MONITORING & LEARNING

### Leading Indicators (Early Warning)
| Metric | Current | Target | Frequency |
|--------|---------|--------|-----------|
| [Metric 1] | [Value] | [Value] | [Weekly] |
| [Metric 2] | [Value] | [Value] | [Daily] |

### Lagging Indicators (Outcome)
| Metric | Current | Target | Frequency |
|--------|---------|--------|-----------|
| [Metric 1] | [Value] | [Value] | [Monthly] |
| [Metric 2] | [Value] | [Value] | [Quarterly] |

### Learning Reviews
- **Weekly**: [Quick check-in on leading indicators]
- **Monthly**: [Assess if interventions working as expected]
- **Quarterly**: [Deep dive - challenge assumptions, adjust strategy]

---

## 8. APPENDICES

### A. Stakeholder Map
[Who affects/is affected by this system]

### B. System Dynamics Model
[If created - causal loop diagram, stock-flow diagram]

### C. Cost-Benefit Analysis
[Financial case for interventions]

### D. Timeline
[Gantt chart or timeline visualization]

---

**Analysis Complete**: [Date]

**Next Review**: [Date]

**Owner**: [Person responsible for implementation]
