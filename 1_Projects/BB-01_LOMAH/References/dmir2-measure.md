# Skill: DMIR2 - Measure

> **Use When**: Problem diagnosed, need baseline data before improving
> **Output**: Baseline metrics, measurement system, data collection plan
> **Phase**: D-M-I-R Phase 2 of 4
> **Prev**: [[dmir1-diagnose]] | **Next**: [[dmir3-improve]]

---

## Purpose

Measure establishes factual baseline before making changes:
- **Quantify** current performance precisely
- **Validate** the measurement system is reliable
- **Establish** baseline for comparison
- **Identify** variation patterns

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       MEASURE                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │  Define  │──►│ Validate │──►│ Collect  │──►│ Analyze  ││
│  │ Metrics  │   │  System  │   │   Data   │   │ Baseline ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  What to        Can we         Gather         Statistical  │
│  measure?       trust it?      samples        summary      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Define Metrics

### Metric Selection Criteria

| Criterion | Question |
|-----------|----------|
| **Relevant** | Does it relate to the problem? |
| **Measurable** | Can we actually collect it? |
| **Actionable** | Can we influence it? |
| **Timely** | Can we get data fast enough? |

### Types of Metrics

| Type | Description | Examples |
|------|-------------|----------|
| **Output (Y)** | Result we want to improve | Defect rate, lead time, revenue |
| **Input (X)** | Factors that affect Y | Temperature, speed, skill level |
| **Process** | How work flows | Queue length, WIP, utilization |

### CTQ Tree (Critical to Quality)

```
┌─────────────┐
│   GOAL      │ Customer/Business need
└──────┬──────┘
       │
   ┌───┴───┐
   ▼       ▼
┌─────┐ ┌─────┐
│ CTQ │ │ CTQ │ Critical characteristics
│  1  │ │  2  │
└──┬──┘ └──┬──┘
   │       │
   ▼       ▼
┌─────┐ ┌─────┐
│Metric│ │Metric│ Measurable indicators
└─────┘ └─────┘
```

### Metric Definition Template

```markdown
# Metric Definition: [Metric Name]

| Field | Definition |
|-------|------------|
| **Name** | [Clear, specific name] |
| **Definition** | [Exactly what is measured] |
| **Formula** | [How calculated] |
| **Unit** | [Unit of measure] |
| **Target** | [Goal value] |
| **Baseline** | [Current value - TBD] |
| **Data Source** | [Where data comes from] |
| **Frequency** | [How often measured] |
| **Owner** | [Who is responsible] |

## Operational Definition

**Include**: [What counts]

**Exclude**: [What doesn't count]

**Example**: [Concrete example of measurement]
```

---

## Step 2: Validate Measurement System

### Measurement System Analysis (MSA)

Before trusting data, verify the measurement is reliable:

| Question | Test |
|----------|------|
| Do we get same result each time? | Repeatability |
| Do different people get same result? | Reproducibility |
| Does it detect real differences? | Sensitivity |
| Is it consistently biased? | Accuracy |

### Simple MSA Check

```markdown
## MSA Quick Check: [Metric]

### Repeatability Test
Same person measures same item 3 times:
| Trial | Value |
|-------|-------|
| 1 | |
| 2 | |
| 3 | |
| Range | |

**Acceptable**: Range < 10% of specification tolerance

### Reproducibility Test
3 people measure same item:
| Person | Value |
|--------|-------|
| A | |
| B | |
| C | |
| Range | |

**Acceptable**: Range < 10% of specification tolerance

### Result
☐ Measurement system OK - proceed
☐ Measurement system needs improvement - fix first
```

---

## Step 3: Data Collection

### Data Collection Plan

```markdown
# Data Collection Plan

> **Project**: [Name]
> **Date**: YYYY-MM-DD

## Metrics to Collect

| Metric | Definition | Source | Sample Size | Frequency | Who |
|--------|------------|--------|-------------|-----------|-----|
| | | | | | |

## Sampling Strategy

| Aspect | Decision |
|--------|----------|
| Population | [What are we measuring?] |
| Sample size | [How many data points?] |
| Timeframe | [Over what period?] |
| Method | [Random/Stratified/Census] |

## Data Collection Form

| Date | Time | [Metric 1] | [Metric 2] | Notes |
|------|------|------------|------------|-------|
| | | | | |

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Missing data | [Plan] |
| Inconsistent collection | [Plan] |
```

### Sample Size Guidelines

| Situation | Minimum Sample |
|-----------|----------------|
| Continuous data (time, length) | 30+ |
| Defect rate >10% | 50+ |
| Defect rate 1-10% | 200+ |
| Defect rate <1% | 500+ |
| Before/after comparison | 30+ each |

---

## Step 4: Analyze Baseline

### Descriptive Statistics

```markdown
## Baseline Statistics: [Metric]

| Statistic | Value |
|-----------|-------|
| Sample size (n) | |
| Mean (average) | |
| Median | |
| Std deviation | |
| Minimum | |
| Maximum | |
| Range | |

## Distribution
[Histogram or frequency table]

## Interpretation
- Center: [Where is typical performance?]
- Spread: [How much variation?]
- Shape: [Normal? Skewed? Bimodal?]
```

### Process Capability

```markdown
## Process Capability: [Metric]

| Parameter | Value |
|-----------|-------|
| USL (Upper Spec Limit) | |
| LSL (Lower Spec Limit) | |
| Process Mean | |
| Process Std Dev | |
| Cp | |
| Cpk | |

### Interpretation
| Cpk | Meaning |
|-----|---------|
| <1.0 | Not capable - significant defects |
| 1.0-1.33 | Marginal - some defects |
| 1.33-1.67 | Capable - few defects |
| >1.67 | Highly capable |
```

### Control Chart (Time Series)

```
UCL ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
         *           *
    *         *   *       *
─────*───────────────────────*───────── Mean
              *       *
       *   *               *
LCL ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
    1  2  3  4  5  6  7  8  9 10 11 12  Time

UCL = Upper Control Limit (Mean + 3σ)
LCL = Lower Control Limit (Mean - 3σ)
```

### Variation Analysis

| Variation Type | Question | Look For |
|----------------|----------|----------|
| **Common cause** | Normal variation? | Random scatter within limits |
| **Special cause** | Something unusual? | Points outside limits, trends, patterns |

---

## Baseline Report Template

```markdown
# Baseline Measurement Report

> **Project**: [Name]
> **Date**: YYYY-MM-DD
> **Phase**: DMIR - Measure

---

## 1. Metrics Measured

| Metric | Baseline | Target | Gap | Unit |
|--------|----------|--------|-----|------|
| Primary Y | | | | |
| Secondary | | | | |

---

## 2. Measurement System

| Metric | MSA Result | Notes |
|--------|------------|-------|
| | ✅ OK / ⚠️ Marginal | |

---

## 3. Data Summary

### [Primary Metric]

| Statistic | Value |
|-----------|-------|
| n | |
| Mean | |
| Std Dev | |
| Min | |
| Max | |

### Distribution
[Chart or description]

### Time Series
[Chart or description]

---

## 4. Key Findings

### Performance
- Current mean: X [unit]
- Variation: X [unit] std dev
- vs Target: X% gap

### Patterns Observed
1. [Finding]
2. [Finding]

### Capability
- Cpk = X ([interpretation])

---

## 5. Implications for Improvement

Based on baseline:
1. [What needs to change?]
2. [How much improvement needed?]
3. [Where is the variation coming from?]

---

## Next Steps

- [ ] Share baseline with team
- [ ] Proceed to Improve phase
```

---

## Quick Baseline Checklist

- [ ] Primary metric (Y) defined and operational
- [ ] Measurement system validated
- [ ] Data collection plan executed
- [ ] Sufficient sample size collected
- [ ] Basic statistics calculated
- [ ] Distribution characterized
- [ ] Time series examined
- [ ] Baseline documented
- [ ] Gap to target quantified

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Measure everything | Analysis paralysis | Focus on 1-3 key metrics |
| Skip MSA | Bad data, wrong conclusions | Always validate |
| Too small sample | Misleading statistics | Use guidelines |
| Ignore variation | Miss the real problem | Look at spread, not just average |
| No time component | Miss trends | Always plot over time |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Metric Definitions | Clear, operational definitions |
| MSA Results | Measurement system validation |
| Baseline Statistics | Current performance numbers |
| Baseline Report | Complete summary for stakeholders |

---

## Related Skills

- [[dmir1-diagnose]] - Previous phase
- [[dmir3-improve]] - Next phase
- [[toc-analysis]] - Constraint measurements

---

*Skill Version: 1.0*
*D-M-I-R Phase 2 of 4*
