# System Analysis Template: Technical/Engineering System

**Date**: [YYYY-MM-DD]
**Engineer**: [Name]
**System**: [Product/Process/Technology Name]

---

## 1. SYSTEM SPECIFICATION

### Function
- Primary purpose:
- Key requirements:
- Performance targets:

### Architecture
- **Stocks** (What accumulates):
  - Physical: [inventory, buffers, capacity]
  - Information: [data, knowledge, signals]
  - Quality: [defects, tech debt, reliability]

- **Flows** (Rates of change):
  - Production/throughput:
  - Consumption/demand:
  - Failure/degradation:

### Constraints
- Physical: [material limits, space, laws of physics]
- Resource: [budget, time, labor]
- Regulatory: [standards, specifications]

---

## 2. PROBLEM CHARACTERIZATION

### Observable Symptoms
| Symptom | Measurement | Trend |
|---------|-------------|-------|
|         |             |       |

### Performance Gap
- Current state:
- Target state:
- Gap size:

### Root Cause Hypothesis
Primary:
Secondary:

### System Dynamics
- [ ] Stable (small perturbations dampen)
- [ ] Oscillating (cycles)
- [ ] Growing exponentially (reinforcing loop)
- [ ] Degrading (death spiral)

---

## 3. FEEDBACK STRUCTURE

### Reinforcing Loops (L7)
**Critical Loop**:
```
[Stock A] → [Rate B] → [Stock A] (positive feedback)
```
- **Gain calculation** (scripts/feedback_loop_calculator.py):
  - Initial value:
  - Growth rate per period:
  - Doubling time:
- **Intervention target**: Slow or break?

### Balancing Loops (L8)
**Primary Control**:
```
[Target] ← [Error] ← [Sensor] → [Actuator] → [System] → [Sensor]
```
- **Performance** (scripts/balancing_loop_tuner.py):
  - Target value:
  - Correction strength:
  - Convergence time:
  - Oscillation?
- **Tuning needed?**:

### Delays (L9)
| Loop | Measurement Point | Delay Duration | Impact | Reduction Strategy |
|------|-------------------|----------------|--------|-------------------|
|      |                   |                |        |                   |

**ROI calculation** (scripts/delay_impact_calculator.py):
- Current delay cost:
- Proposed improvement:
- Payback period:

---

## 4. LEVERAGE POINT EVALUATION

### L12: Parameters (Constants)
**Current settings**:
- [Parameter]: [Value]

**Already tried adjusting?**: [ ] Yes [ ] No
**Result**: 

**Recommendation**: Try higher leverage points first

---

### L11: Buffer Sizes
**Current buffers**:
- Safety stock:
- Slack capacity:
- Reserve margin:

**Adequacy**: [ ] Too small [ ] Right-sized [ ] Too large
**Optimization**: 

---

### L10: Physical Structure
**Current architecture**:
- Layout:
- Material flow:
- Network topology:

**Constraints**: What's unchangeable?
**Redesign cost**: $_____, Timeline: _____
**Justification**: Only if L3-L9 exhausted

---

### L9: Delay Lengths
**Critical delays identified**:
| Signal | Current | Target | Method |
|--------|---------|--------|--------|
|        |         |        |        |

**High-priority**: Which delay costs most?

---

### L8: Balancing Loop Strength
**Key correction mechanisms**:
1. [Mechanism]: Too weak / Right / Too strong
2. [Mechanism]: Too weak / Right / Too strong

**Tuning plan**:

---

### L7: Reinforcing Loop Gain
**Problematic loops**:
1. [Loop description]: 
   - Gain: _____
   - Strategy: [ ] Slow [ ] Break [ ] Reverse

**Beneficial loops**:
1. [Loop description]:
   - Strategy: [ ] Accelerate [ ] Anchor to reality

---

### L6: Information Flow
**Information gaps**:
| Who | Needs | Currently Has | Impact | Solution |
|-----|-------|---------------|--------|----------|
|     |       |               |        |          |

**Sensor/feedback improvements**:

---

### L5: System Rules
**Operating rules**:
1. [Rule]: Creates [ ] Right incentive [ ] Wrong incentive
2. [Rule]: Creates [ ] Right incentive [ ] Wrong incentive

**Proposed changes**:

---

### L4: Self-Organization
**Adaptation capability**:
- Can system learn? [ ] Yes [ ] No
- Can system restructure? [ ] Yes [ ] No
- Autonomous correction? [ ] Yes [ ] No

**Enhancement**:

---

### L3: System Goals
**Design goal**: 
**Operational goal** (actual optimization):

**Misalignment?**: [ ] Yes [ ] No
If yes, describe:

**Proposed realignment**:

---

### L2: Design Paradigm
**Underlying assumptions**:
1. 
2. 

**Alternative paradigm**:

---

### L1: Paradigm Flexibility
**Can question fundamentals?**: [ ] Yes [ ] No
**Openness to rethink**: [ ] High [ ] Medium [ ] Low

---

## 5. INTERVENTION DESIGN

### Selected Leverage Points (Ranked)
1. **L___**: [Intervention] - Priority: HIGH
   - Rationale:
   - Implementation:
   - Success metric:
   - Timeline: [weeks]

2. **L___**: [Intervention] - Priority: MEDIUM
   - Rationale:
   - Implementation:
   - Timeline: [months]

3. **L___**: [Intervention] - Priority: LOW
   - Rationale:
   - Timeline: [future]

### Implementation Sequence
Week 1-2:
Week 3-4:
Month 2:
Month 3:

### Dependencies
- [Intervention A] must complete before [Intervention B] because:

---

## 6. RISK ANALYSIS

### Technical Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
|      |             |        |            |

### Unintended Consequences
- [Intervention] could cause [consequence] via [mechanism]
  - Mitigation:

### Safety Considerations
- [ ] Fail-safe mechanisms needed
- [ ] Redundancy required
- [ ] Testing protocol defined

---

## 7. VERIFICATION PLAN

### Simulation/Modeling
- [ ] Use scripts/feedback_loop_calculator.py for L7
- [ ] Use scripts/balancing_loop_tuner.py for L8
- [ ] Use scripts/delay_impact_calculator.py for L9
- [ ] Build system dynamics model for complex interactions

### Testing Strategy
- Prototype test:
- Pilot deployment:
- Full rollout:

### Metrics
**Before intervention**:
- [Metric]: [Baseline value]

**Success criteria**:
- [Metric]: Target [value] by [date]

**Monitoring frequency**: 

---

## 8. DOCUMENTATION

### Assumptions
- 
- 

### Data Sources
- Measurements:
- References:
- Expert consultation:

### Design Decisions
| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
|          |           |                        |

### Change Log
| Date | Change | Reason |
|------|--------|--------|
|      |        |        |
