# Skill: DMIR4 - Review

> **Use When**: Solution implemented, need to validate and sustain results
> **Output**: Results validation, control plan, lessons learned
> **Phase**: D-M-I-R Phase 4 of 4
> **Prev**: [[dmir3-improve]]

---

## Purpose

Review validates results and ensures sustainability:
- **Validate** improvement achieved the target
- **Control** to maintain gains
- **Standardize** the new way of working
- **Learn** for future improvements

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        REVIEW                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Validate │──►│ Control  │──►│Standardize──►│  Learn   ││
│  │ Results  │   │  Plan    │   │   & Doc  │   │ & Close  ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Compare to      Sustain       Update SOPs    Document     │
│  baseline        the gains     Train staff    lessons      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Validate Results

### Before/After Comparison

```markdown
## Results Validation: [Project Name]

### Primary Metric

| Measure | Baseline | Target | After | % Change |
|---------|----------|--------|-------|----------|
| [Y] | X | X | X | +/-X% |

### Statistical Comparison

| Statistic | Before | After | Change |
|-----------|--------|-------|--------|
| Mean | | | |
| Std Dev | | | |
| n | | | |

### Statistical Significance

| Test | Result | p-value | Significant? |
|------|--------|---------|--------------|
| t-test / chi-square | | | p < 0.05? |

### Practical Significance

| Impact | Value |
|--------|-------|
| Improvement | X% / X units |
| Annual savings | $X |
| Time saved | X hours/week |
```

### Results Visualization

```
BEFORE                          AFTER
    ┌───┐                           ┌───┐
    │   │                           │   │
    │   │                           │   │
    │   │     ──────────►           │   │
    │   │                           │   │
    │   │                       ┌───┤   │
    └───┴───                    │   └───┘
    Defects: 8%                 Defects: 2%
                                ↓ 75% reduction
```

### Goal Achievement

| Metric | Target | Achieved | Status |
|--------|--------|----------|--------|
| Primary | | | ✅ Met / ⚠️ Partial / ❌ Missed |
| Secondary | | | ✅ Met / ⚠️ Partial / ❌ Missed |

---

## Step 2: Control Plan

### Purpose of Control

Without control:
```
Performance
    │
    │    ╱╲    ╱╲
    │   ╱  ╲  ╱  ╲   Improvement
    │  ╱    ╲╱    ╲   lost over
    │ ╱              ╲  time
────┴─────────────────────────► Time
    │    Improvement
    │    implemented
```

With control:
```
Performance
    │              ────────────
    │             ╱            Gains
    │            ╱             sustained
    │───────────╱
    │
────┴─────────────────────────► Time
    │    Improvement
    │    implemented
```

### Control Plan Template

```markdown
# Control Plan: [Process Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Owner**: [Name]

---

## 1. What We're Controlling

| Item | Specification | Why Critical |
|------|---------------|--------------|
| | | |

---

## 2. Control Methods

| What | How Measured | Frequency | Who | Target | Action if Out |
|------|--------------|-----------|-----|--------|---------------|
| | | | | | |

---

## 3. Response Plan

### Out of Control Signals

| Signal | Definition | Response |
|--------|------------|----------|
| Single point outside limits | >3σ from mean | Investigate immediately |
| 7 points trending | 7 consecutive up/down | Investigate trend |
| 7 points same side | 7 consecutive above/below mean | Investigate shift |

### Escalation

| Level | Trigger | Action | Contact |
|-------|---------|--------|---------|
| 1 | Minor deviation | Operator adjusts | Team lead |
| 2 | Repeated deviation | Supervisor review | [Name] |
| 3 | Major deviation | Stop and escalate | [Name] |

---

## 4. Control Chart Setup

| Parameter | Value |
|-----------|-------|
| Metric | |
| UCL | Mean + 3σ = |
| Center Line | Mean = |
| LCL | Mean - 3σ = |
| Sample size | |
| Frequency | |
```

### Visual Management

```markdown
## Visual Controls

| Control | Location | Purpose |
|---------|----------|---------|
| Dashboard | [Where] | Real-time metrics |
| Andon | [Where] | Alert when problem |
| Standard work | [Where] | Correct procedure |
| Checklist | [Where] | Don't forget steps |
```

---

## Step 3: Standardize

### Documentation Updates

| Document | Update Needed | Owner | Due |
|----------|---------------|-------|-----|
| SOP / Work instruction | | | |
| Training materials | | | |
| Checklist | | | |
| System/tool | | | |

### Standard Operating Procedure Template

```markdown
# SOP: [Process Name]

> **Document #**: SOP-XXX
> **Version**: X.X
> **Effective Date**: YYYY-MM-DD
> **Owner**: [Name]

---

## 1. Purpose
[Why this procedure exists]

## 2. Scope
[What's covered, what's not]

## 3. Responsibilities

| Role | Responsibility |
|------|----------------|
| | |

## 4. Procedure

### Step 1: [Name]
1. [Action]
2. [Action]
3. [Action]

**Checkpoint**: [What to verify]

### Step 2: [Name]
[Continue pattern]

## 5. Quality Checks

| Check | Criteria | Frequency |
|-------|----------|-----------|
| | | |

## 6. Troubleshooting

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| | | |

## 7. Revision History

| Version | Date | Changes |
|---------|------|---------|
| | | |
```

### Training Completion

| Person | Role | Training | Date | Verified |
|--------|------|----------|------|----------|
| | | | | ☐ |

---

## Step 4: Learn & Close

### Lessons Learned

```markdown
## Lessons Learned: [Project Name]

### What Worked Well
| Item | Why It Worked | Reuse In |
|------|---------------|----------|
| | | |

### What Could Be Better
| Item | What Happened | Do Differently |
|------|---------------|----------------|
| | | |

### Surprises
| Surprise | Impact | Learning |
|----------|--------|----------|
| | | |

### Recommendations for Future
1.
2.
3.
```

### Project Closeout Checklist

- [ ] Results validated against targets
- [ ] Control plan in place
- [ ] Documentation updated
- [ ] Training completed
- [ ] Handoff to process owner
- [ ] Lessons learned captured
- [ ] Success celebrated
- [ ] Project closed

---

## Project Summary Report Template

```markdown
# DMIR Project Summary: [Project Name]

> **Date**: YYYY-MM-DD
> **Duration**: X weeks/months
> **Team**: [Names]

---

## Executive Summary

**Problem**: [One sentence]

**Solution**: [One sentence]

**Result**: [Key numbers]

---

## 1. Problem Statement (Diagnose)

[Original problem and impact]

## 2. Baseline (Measure)

| Metric | Baseline |
|--------|----------|
| | |

## 3. Root Causes (Diagnose)

1. [Root cause 1]
2. [Root cause 2]

## 4. Solution Implemented (Improve)

[Description of what was changed]

## 5. Results (Review)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| | | | |

### Financial Impact

| Category | Annual Value |
|----------|--------------|
| Cost savings | $ |
| Revenue increase | $ |
| Time savings | hours |

## 6. Sustainability

| Control | In Place? |
|---------|-----------|
| Control plan | ✅ |
| Updated SOP | ✅ |
| Training complete | ✅ |
| Owner assigned | ✅ |

## 7. Lessons Learned

1.
2.

## 8. Next Steps / Recommendations

1.
2.

---

## Approval

| Role | Name | Date | Sign |
|------|------|------|------|
| Sponsor | | | ☐ |
| Process Owner | | | ☐ |
```

---

## Sustainability Audit

### 30-60-90 Day Check

| Check | 30 Days | 60 Days | 90 Days |
|-------|---------|---------|---------|
| Metric still at target? | ☐ | ☐ | ☐ |
| Controls being used? | ☐ | ☐ | ☐ |
| SOPs being followed? | ☐ | ☐ | ☐ |
| Issues arising? | ☐ | ☐ | ☐ |

### Audit Questions

1. Is the improved process still being followed?
2. Are metrics still being tracked?
3. Are control charts being updated?
4. Any deviations? How were they handled?
5. Any new issues since implementation?

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| No control plan | Gains lost | Always create one |
| Skip documentation | Knowledge lost | Update SOPs |
| No training | People do it wrong | Train everyone |
| Declare victory too early | Problem returns | Monitor 90 days |
| No lessons learned | Repeat mistakes | Always capture |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Results Report | Before/after comparison |
| Control Plan | How to sustain gains |
| Updated Documentation | SOPs, training |
| Lessons Learned | What to do next time |
| Project Closeout | Formal completion |

---

## Related Skills

- [[dmir3-improve]] - Previous phase
- [[dmir1-diagnose]] - Start new cycle if needed
- [[decision-log]] - Document decisions made
- [[gate-review]] - Similar validation concept

---

*Skill Version: 1.0*
*D-M-I-R Phase 4 of 4*
