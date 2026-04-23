# Skill: DMIR1 - Diagnose

> **Use When**: Starting problem analysis, identifying root causes
> **Output**: Problem statement, current state map, root cause analysis
> **Phase**: D-M-I-R Phase 1 of 4
> **Next**: [[dmir2-measure]]

---

## Purpose

Diagnose deeply understands the problem before jumping to solutions:
- **What** is the actual problem (not symptoms)?
- **Where** does it occur in the process?
- **Why** does it happen (root causes)?

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      DIAGNOSE                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Problem  │──►│ Current  │──►│  Root    │──►│ Validate ││
│  │Statement │   │State Map │   │  Cause   │   │ w/Data   ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  What's wrong?   How does it   Why does it   Evidence     │
│  Impact?         work today?   happen?       confirms?    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Problem Statement

### Problem Statement Template

```markdown
# Problem Statement

## The Problem
[One sentence: What is happening that shouldn't be?]

## The Impact
| Impact Area | Quantified Effect |
|-------------|-------------------|
| Revenue | $X lost per [period] |
| Time | X hours wasted per [period] |
| Quality | X% defect rate |
| Customer | X complaints per [period] |

## The Scope
- **In scope**: [What we're addressing]
- **Out of scope**: [What we're NOT addressing]

## The Goal
[One sentence: What does success look like?]
```

### Good vs Bad Problem Statements

| Bad | Good |
|-----|------|
| "Sales are bad" | "Q4 sales declined 23% vs Q3, losing $150K revenue" |
| "The process is slow" | "Order processing takes 5 days avg, target is 2 days" |
| "Quality issues" | "Defect rate is 8%, causing 12% rework and $20K/month" |
| "Communication problems" | "3 of 5 projects missed deadlines due to unclear handoffs" |

---

## Step 2: Current State Mapping

### Process Map (SIPOC)

```markdown
# SIPOC: [Process Name]

| S - Suppliers | I - Inputs | P - Process | O - Outputs | C - Customers |
|---------------|------------|-------------|-------------|---------------|
| Who provides? | What's needed? | High-level steps | What's produced? | Who receives? |
| | | | | |
```

### Value Stream Map (Simplified)

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Step 1  │───►│ Step 2  │───►│ Step 3  │───►│ Step 4  │
│         │    │         │    │         │    │         │
│ CT: Xm  │    │ CT: Xm  │    │ CT: Xm  │    │ CT: Xm  │
│ WT: Xd  │    │ WT: Xd  │    │ WT: Xd  │    │ WT: Xd  │
│ %C&A: X │    │ %C&A: X │    │ %C&A: X │    │ %C&A: X │
└─────────┘    └─────────┘    └─────────┘    └─────────┘

CT = Cycle Time (work time)
WT = Wait Time (queue time)
%C&A = % Complete & Accurate (quality)
```

### Current State Summary

```markdown
## Current State Metrics

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Lead time | X days | X days | X days |
| Cycle time | X hours | X hours | X hours |
| Quality | X% | X% | X% |
| Cost | $X | $X | $X |

## Pain Points Identified

| # | Pain Point | Where | Impact |
|---|------------|-------|--------|
| 1 | | Step X | |
| 2 | | Step X | |
```

---

## Step 3: Root Cause Analysis

### 5 Whys Method

```markdown
# 5 Whys: [Problem]

**Problem**: [Statement]

| Level | Question | Answer |
|-------|----------|--------|
| Why 1 | Why does [problem] occur? | Because... |
| Why 2 | Why does [answer 1] happen? | Because... |
| Why 3 | Why does [answer 2] happen? | Because... |
| Why 4 | Why does [answer 3] happen? | Because... |
| Why 5 | Why does [answer 4] happen? | Because... |

**Root Cause**: [Final answer - this is what we need to fix]
```

### Fishbone Diagram (Ishikawa)

```
                              ┌─────────────────┐
        ┌────────────────────►│                 │
        │ People              │                 │
────────┤                     │                 │
        │ Process             │    PROBLEM      │
────────┼────────────────────►│                 │
        │ Equipment           │                 │
────────┤                     │                 │
        │ Materials           │                 │
────────┼────────────────────►│                 │
        │ Environment         │                 │
────────┤                     └─────────────────┘
        │ Management
────────┘
```

### Fishbone Categories (6M)

| Category | Questions to Ask |
|----------|------------------|
| **Man** (People) | Skills? Training? Motivation? |
| **Method** (Process) | Procedure exists? Followed? Clear? |
| **Machine** (Equipment) | Working? Maintained? Capable? |
| **Material** | Quality? Availability? Specification? |
| **Measurement** | Accurate? Calibrated? Right metric? |
| **Mother Nature** (Environment) | Temperature? Layout? External factors? |

### Root Cause Validation

| Root Cause | Evidence | Confidence |
|------------|----------|------------|
| | Data shows... | High/Med/Low |
| | Observation... | High/Med/Low |

---

## Step 4: Constraint Identification (ToC)

See [[toc-analysis]] for detailed Theory of Constraints methodology.

### Quick Constraint Check

```markdown
## Constraint Analysis

### System Goal
[What is the system trying to achieve?]

### Current Constraint
[Which step/resource limits overall throughput?]

| Step | Capacity | Demand | Utilization | Constraint? |
|------|----------|--------|-------------|-------------|
| A | X/day | X/day | X% | |
| B | X/day | X/day | X% | ← Bottleneck |
| C | X/day | X/day | X% | |

### Evidence
- Step B has queue of X items
- Steps after B are starved
- Improving other steps doesn't help output
```

---

## Diagnose Document Template

```markdown
# Diagnosis: [Problem Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Client/Project**:
> **Status**: 🟡 IN PROGRESS / ✅ COMPLETE

---

## 1. Problem Statement

**Problem**: [One sentence]

**Impact**:
| Area | Current | Target | Gap |
|------|---------|--------|-----|
| | | | |

**Scope**: [In/out of scope]

---

## 2. Current State

### Process Overview
[SIPOC or process map]

### Key Metrics
| Metric | Value |
|--------|-------|
| | |

### Pain Points
1.
2.
3.

---

## 3. Root Cause Analysis

### 5 Whys
[Insert analysis]

### Root Causes Identified
| # | Root Cause | Evidence | Confidence |
|---|------------|----------|------------|
| 1 | | | H/M/L |
| 2 | | | H/M/L |

---

## 4. Constraint (if applicable)

**System constraint**: [What limits throughput?]

**Evidence**: [How do we know?]

---

## 5. Summary

### Key Findings
1.
2.
3.

### Recommended Focus Areas
1.
2.

---

## Next Steps

- [ ] Validate findings with stakeholders
- [ ] Proceed to Measure phase
```

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Jump to solutions | Fix wrong problem | Complete diagnosis first |
| Symptoms vs causes | Problem returns | Keep asking "why" |
| No data | Opinions, not facts | Gather evidence |
| Too broad scope | Unmanageable | Focus narrow |
| Skip stakeholders | Miss context | Interview affected people |

---

## Diagnostic Tools Summary

| Tool | Use When |
|------|----------|
| Problem Statement | Always - start here |
| SIPOC | Understanding process boundaries |
| Value Stream Map | Flow/time problems |
| 5 Whys | Quick root cause |
| Fishbone | Multiple possible causes |
| Constraint Analysis | Throughput/capacity problems |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Problem Statement | Clear, quantified problem |
| Current State Map | Visual of how things work |
| Root Cause Analysis | Why the problem exists |
| Key Findings | Summary for stakeholders |

---

## Related Skills

- [[dmir2-measure]] - Next phase: quantify baseline
- [[toc-analysis]] - Deep constraint analysis
- [[research-workflow]] - Gathering information

---

*Skill Version: 1.0*
*D-M-I-R Phase 1 of 4*
