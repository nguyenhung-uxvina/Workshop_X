# Skill: DMIR3 - Improve

> **Use When**: Baseline established, ready to implement solutions
> **Output**: Solution selection, implementation plan, pilot results
> **Phase**: D-M-I-R Phase 3 of 4
> **Prev**: [[dmir2-measure]] | **Next**: [[dmir4-review]]

---

## Purpose

Improve generates, selects, and implements solutions:
- **Generate** multiple solution options
- **Select** best solution(s) based on criteria
- **Pilot** solutions on small scale first
- **Implement** with change management

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       IMPROVE                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Generate │──►│  Select  │──►│  Pilot   │──►│Implement ││
│  │Solutions │   │   Best   │   │  & Test  │   │Full Scale││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Brainstorm     Evaluate       Small-scale    Rollout      │
│  many ideas     effort/impact  validation     with plan    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Generate Solutions

### Brainstorming Rules

1. **Quantity over quality** - Generate many ideas first
2. **No criticism** - Evaluate later, not during ideation
3. **Build on others** - "Yes, and..." not "No, but..."
4. **Wild ideas welcome** - Can refine later

### Solution Generation Methods

| Method | When to Use |
|--------|-------------|
| **Brainstorming** | General problem solving |
| **Benchmarking** | Others have solved similar |
| **Reverse brainstorm** | "How could we make it worse?" |
| **SCAMPER** | Modify existing process |
| **ToC thinking** | Constraint-focused solutions |

### SCAMPER Prompts

| Letter | Question |
|--------|----------|
| **S**ubstitute | What can be replaced? |
| **C**ombine | What can be merged? |
| **A**dapt | What can be copied from elsewhere? |
| **M**odify | What can be changed (more/less)? |
| **P**ut to other use | What else could it do? |
| **E**liminate | What can be removed? |
| **R**everse/Rearrange | What can be reordered? |

### Solution List Template

```markdown
## Solution Ideas

| # | Solution | Root Cause Addressed | Quick Notes |
|---|----------|---------------------|-------------|
| 1 | | RC-X | |
| 2 | | RC-X | |
| 3 | | RC-X | |
| 4 | | RC-X | |
| 5 | | RC-X | |
```

---

## Step 2: Select Solutions

### Impact/Effort Matrix

```
                    HIGH IMPACT
                         │
         ┌───────────────┼───────────────┐
         │               │               │
         │   QUICK WINS  │   BIG BETS    │
         │   Do first!   │   Plan well   │
         │               │               │
LOW ─────┼───────────────┼───────────────┼───── HIGH
EFFORT   │               │               │     EFFORT
         │   FILL-INS    │   AVOID       │
         │   If time     │   Low ROI     │
         │               │               │
         └───────────────┼───────────────┘
                         │
                    LOW IMPACT
```

### Solution Evaluation Matrix

```markdown
## Solution Evaluation

| Criteria | Weight | Sol 1 | Sol 2 | Sol 3 |
|----------|--------|-------|-------|-------|
| Impact on problem | 30% | | | |
| Cost | 20% | | | |
| Implementation time | 20% | | | |
| Risk | 15% | | | |
| Sustainability | 15% | | | |
| **Weighted Score** | 100% | **X%** | **X%** | **X%** |

Scale: 1=Poor, 3=Average, 5=Excellent
```

### Selection Criteria

| Criterion | Questions |
|-----------|-----------|
| **Impact** | How much will it improve the metric? |
| **Cost** | What resources are needed? |
| **Time** | How long to implement? |
| **Risk** | What could go wrong? |
| **Sustainability** | Will it stick? |
| **Side effects** | Other impacts (good/bad)? |

### Go/No-Go Decision

```markdown
## Solution Decision: [Solution Name]

| Factor | Assessment |
|--------|------------|
| Addresses root cause? | ✅ Yes / ❌ No |
| Within budget? | ✅ Yes / ❌ No |
| Within timeline? | ✅ Yes / ❌ No |
| Risks acceptable? | ✅ Yes / ❌ No |
| Stakeholder support? | ✅ Yes / ❌ No |

**Decision**: ☐ GO / ☐ NO-GO / ☐ MODIFY

**Rationale**:
```

---

## Step 3: Pilot Testing

### Why Pilot First?

| Benefit | Description |
|---------|-------------|
| Reduce risk | Find problems small-scale |
| Build evidence | Data to support full rollout |
| Refine solution | Adjust before scaling |
| Build buy-in | Show success before asking more |

### Pilot Plan Template

```markdown
# Pilot Plan: [Solution Name]

> **Date**: YYYY-MM-DD
> **Duration**: X weeks
> **Owner**: [Name]

---

## 1. Pilot Scope

| Aspect | Pilot | Full Scale |
|--------|-------|------------|
| Location | 1 site | All sites |
| Volume | X units | XX units |
| People | X people | XX people |
| Duration | X weeks | Permanent |

## 2. Success Criteria

| Metric | Baseline | Pilot Target | Method |
|--------|----------|--------------|--------|
| Primary Y | X | X | Measure daily |
| Secondary | X | X | Measure weekly |

## 3. Pilot Schedule

| Week | Activities |
|------|------------|
| 1 | Setup, training, baseline |
| 2-3 | Run pilot, collect data |
| 4 | Analyze, decide |

## 4. Resources

| Resource | Amount |
|----------|--------|
| People | |
| Budget | |
| Equipment | |

## 5. Risks & Mitigations

| Risk | Mitigation | Contingency |
|------|------------|-------------|
| | | |

## 6. Decision Criteria

| Outcome | Action |
|---------|--------|
| Target met | Proceed to full implementation |
| Partial success | Modify and re-pilot |
| Failed | Return to solution selection |
```

### Pilot Results Template

```markdown
## Pilot Results: [Solution Name]

### Metrics

| Metric | Baseline | Target | Achieved | vs Target |
|--------|----------|--------|----------|-----------|
| | | | | ✅/❌ |

### Observations

**What worked well**:
1.
2.

**What needs adjustment**:
1.
2.

**Unexpected findings**:
1.

### Recommendation

☐ **GO** - Proceed to full implementation
☐ **MODIFY** - Adjust and re-pilot
☐ **NO-GO** - Solution not effective

**Rationale**:
```

---

## Step 4: Full Implementation

### Implementation Plan Template

```markdown
# Implementation Plan: [Solution Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Owner**: [Name]

---

## 1. Solution Summary

**What**: [Brief description]

**Why**: [Expected benefit]

**Pilot Results**: [Key numbers]

---

## 2. Implementation Scope

| Aspect | Details |
|--------|---------|
| Locations | |
| Processes | |
| People affected | |
| Timeline | |

---

## 3. Implementation Phases

| Phase | Activities | Duration | Owner |
|-------|------------|----------|-------|
| 1. Prepare | Training, materials, comms | X weeks | |
| 2. Deploy | Rollout by [area/team] | X weeks | |
| 3. Stabilize | Monitor, troubleshoot | X weeks | |
| 4. Handoff | Transfer to operations | X weeks | |

---

## 4. Change Management

### Stakeholder Analysis

| Stakeholder | Impact | Current | Desired | Actions |
|-------------|--------|---------|---------|---------|
| | H/M/L | Support/Neutral/Resist | | |

### Communication Plan

| Audience | Message | Channel | Timing | Owner |
|----------|---------|---------|--------|-------|
| | | | | |

### Training Plan

| Who | What | When | Method |
|-----|------|------|--------|
| | | | |

---

## 5. Resources

| Resource | Amount | Source |
|----------|--------|--------|
| Budget | $ | |
| People | X FTE | |
| Equipment | | |

---

## 6. Risk Management

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| | H/M/L | H/M/L | |

---

## 7. Success Metrics

| Metric | Baseline | Target | Tracking |
|--------|----------|--------|----------|
| | | | Weekly |

---

## 8. Governance

| Role | Name | Responsibility |
|------|------|----------------|
| Sponsor | | Decisions, resources |
| Lead | | Day-to-day execution |
| Team | | Implementation work |
```

### Rollout Strategies

| Strategy | When to Use |
|----------|-------------|
| **Big bang** | Low risk, simple change |
| **Phased** | Multiple locations, moderate risk |
| **Parallel** | High risk, need comparison |
| **Pilot → Wave** | New process, need learning |

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| One solution only | Miss better options | Generate 5+ ideas |
| Skip pilot | Large-scale failure | Always test first |
| Ignore resistance | Implementation fails | Change management |
| No success criteria | Can't tell if it worked | Define upfront |
| Rush implementation | Quality suffers | Follow the plan |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Solution Options | Multiple ideas evaluated |
| Selection Rationale | Why this solution |
| Pilot Results | Evidence of effectiveness |
| Implementation Plan | Detailed rollout plan |

---

## Related Skills

- [[dmir2-measure]] - Previous phase (baseline)
- [[dmir4-review]] - Next phase (validate results)
- [[toc-analysis]] - Constraint-based solutions
- [[decision-log]] - Document solution decisions

---

*Skill Version: 1.0*
*D-M-I-R Phase 3 of 4*
