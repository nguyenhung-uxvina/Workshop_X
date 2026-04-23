# Skill: Theory of Constraints Analysis

> **Use When**: Finding bottlenecks in any system (manufacturing, projects, learning)
> **Output**: Identified constraint + focused intervention

---

## 🎯 Purpose

Apply Goldratt's Theory of Constraints to:
1. Identify the TRUE constraint (not symptoms)
2. Focus all improvement on the constraint
3. Avoid wasting effort on non-constraints
4. Achieve breakthrough throughput gains

---

## 🔄 The 5 Focusing Steps

```
┌─────────────────────────────────────────────────────────┐
│                 5 FOCUSING STEPS                         │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. IDENTIFY ──────────► What's the constraint?         │
│       │                                                  │
│       ▼                                                  │
│  2. EXPLOIT ──────────► Get max from constraint         │
│       │                 (no investment needed)           │
│       ▼                                                  │
│  3. SUBORDINATE ──────► Everything else supports         │
│       │                 the constraint                   │
│       ▼                                                  │
│  4. ELEVATE ──────────► Invest to increase capacity     │
│       │                 (only if steps 2-3 not enough)   │
│       ▼                                                  │
│  5. REPEAT ───────────► Constraint shifted? Go to 1     │
│                         (DON'T let inertia become        │
│                          the new constraint!)            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Constraint Analysis Template

```markdown
# ToC Analysis: [System/Process Name]

**Date**: YYYY-MM-DD
**Analyst**: [Name]
**System**: [What system is being analyzed]
**Goal**: [What throughput/output we're trying to increase]

---

## Step 1: IDENTIFY the Constraint

### System Map
[Draw or describe the flow: Input → Step 1 → Step 2 → ... → Output]

### Capacity Analysis
| Step | Capacity | Current Load | Utilization | WIP Before |
|------|----------|--------------|-------------|------------|
| Step 1 | X/day | Y/day | Y/X% | [queue size] |
| Step 2 | X/day | Y/day | Y/X% | [queue size] |
| ... | | | | |

### Constraint Indicators
- [ ] Which step has highest utilization? → **[Step X]**
- [ ] Which step has longest queue before it? → **[Step Y]**
- [ ] Which step causes delays when it stops? → **[Step Z]**

### IDENTIFIED CONSTRAINT: [Step Name]
**Confidence**: High/Medium/Low
**Evidence**: [Why this is the constraint]

---

## Step 2: EXPLOIT the Constraint

> Goal: Get maximum throughput from constraint WITHOUT investment

### Current State
- Constraint utilization: [X]%
- Time lost to: [non-value activities]
- Quality issues at constraint: [rework rate]

### Exploitation Actions (No Cost)
| Action | Expected Gain | Owner | Status |
|--------|---------------|-------|--------|
| [Action 1] | +X% | [Name] | |
| [Action 2] | +Y% | [Name] | |

### Quick Wins Identified
1. [Remove waste/waiting at constraint]
2. [Ensure constraint never starves for input]
3. [Ensure constraint output never blocked]

---

## Step 3: SUBORDINATE Everything Else

> Goal: All non-constraints support the constraint

### Upstream (Before Constraint)
| Step | Current Behavior | New Behavior |
|------|-----------------|--------------|
| [Step A] | [Pushes work] | [Releases only when constraint ready] |

### Downstream (After Constraint)
| Step | Current Behavior | New Behavior |
|------|-----------------|--------------|
| [Step B] | [May block output] | [Always ready to receive] |

### Policy Changes Needed
1. [Policy that wastes constraint time]
2. [Policy that blocks constraint output]

### Subordination Rules
- Priority: Constraint work ALWAYS first
- Buffer: Maintain [X units] before constraint
- Response: When constraint needs support, drop everything

---

## Step 4: ELEVATE the Constraint

> Only if Steps 2-3 don't achieve goal

### Elevation Options
| Option | Cost | Capacity Gain | ROI |
|--------|------|---------------|-----|
| [Option 1] | $X | +Y% | [calculation] |
| [Option 2] | $X | +Y% | [calculation] |

### Investment Decision
**Recommended**: [Option] because [rationale]
**Alternative**: [What to do if investment not approved]

---

## Step 5: REPEAT (Watch for Constraint Shift)

### After Changes, Monitor
- [ ] Did throughput increase as expected?
- [ ] Has constraint shifted to new location?
- [ ] Have we created new bottleneck?

### New Constraint Candidates
If throughput increases, the constraint WILL shift. Watch:
1. [Likely new constraint 1]
2. [Likely new constraint 2]

### Warning Signs of Inertia
- [ ] Still treating old constraint as constraint
- [ ] Policies designed for old constraint still in place
- [ ] Investment continuing in non-constraint

---

## Summary

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Throughput | X/day | Y/day | +Z% |
| Lead Time | X days | Y days | -Z% |
| WIP | X units | Y units | -Z% |

### Key Insight
[One sentence: What we learned about this system]

### Next Iteration
[If constraint shifted, what to do next]
```

---

## ⚡ Quick Constraint Check (5 min)

```markdown
# Quick Constraint Check: [System]

**What's the output we want more of?** [Answer]

**Where does work pile up?** [Answer]

**If we added capacity HERE, would output increase?** [Answer]

**Constraint**: [Best guess]

**One action to test**: [Simple experiment]
```

---

## 🏭 Common Constraint Types

| Type | How to Identify | Common Location |
|------|-----------------|-----------------|
| **Resource** | Highest utilization, longest queue | Expensive equipment, skilled labor |
| **Market** | System can produce more than sold | Sales/demand |
| **Policy** | Rules prevent full utilization | Batch sizes, schedules, approval processes |
| **Knowledge** | Don't know how to improve | Training, expertise |

---

## 💡 ToC Analysis Tips

1. **The constraint is NOT where you think** - Measure, don't assume
2. **99% of time is non-constraint** - Don't optimize non-constraints
3. **Exploit before Elevate** - Get free gains first
4. **Subordination is hardest** - It requires policy changes
5. **Constraint WILL shift** - Be ready to repeat the cycle

---

## 🔗 Integration with Leverage Points

ToC and Meadows' leverage points are complementary:

| ToC Step | Equivalent Leverage Point |
|----------|--------------------------|
| Identify | L10: Stock-flow structure |
| Exploit | L9: Delays (reduce feedback time) |
| Subordinate | L5: Rules (change policies) |
| Elevate | L10: Change physical structure |
| Repeat | L3: Goals (system purpose) |

---

## 📚 SMB Consulting Application

When doing ToC analysis for clients:

1. **Discovery Session** (2 hours)
   - Map their value stream
   - Identify constraint candidates
   - Measure WIP at each step

2. **Constraint Validation** (1 week data)
   - Track actual utilization
   - Measure queue times
   - Confirm constraint location

3. **Exploitation Workshop** (4 hours)
   - Brainstorm no-cost improvements
   - Prioritize by impact
   - Assign owners

4. **Subordination Design** (2 hours)
   - Define buffer policies
   - Create priority rules
   - Communicate changes

5. **Follow-up** (2 weeks later)
   - Measure throughput change
   - Check for constraint shift
   - Plan next iteration

---

*Skill Version: 1.0*
*Based on Goldratt's Theory of Constraints*
