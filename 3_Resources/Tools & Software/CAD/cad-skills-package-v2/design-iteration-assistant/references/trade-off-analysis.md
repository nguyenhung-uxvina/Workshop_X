# Trade-off Analysis Framework

Framework đánh giá và so sánh đề xuất cải tiến.

## Table of Contents
1. [Evaluation Criteria](#1-evaluation-criteria)
2. [Trade-off Matrix](#2-trade-off-matrix)
3. [Common Trade-offs](#3-common-trade-offs)
4. [Decision Framework](#4-decision-framework)

---

## 1. Evaluation Criteria

### Weighted Scoring

| Criterion | Weight | Description |
|-----------|--------|-------------|
| DfX Compliance | 30% | Fixes mandatory issues |
| Performance | 25% | Weight, strength, stiffness |
| Cost Impact | 25% | Material + machining |
| Risk | 20% | Complexity, failure modes |

### Score Scale

| Score | Meaning |
|-------|---------|
| 5 | Excellent - Significant improvement |
| 4 | Good - Notable improvement |
| 3 | Neutral - No change |
| 2 | Poor - Minor degradation |
| 1 | Bad - Significant degradation |

---

## 2. Trade-off Matrix

### Template

```markdown
## TRADE-OFF ANALYSIS - [Part]

| Criterion (Weight) | #1 | #2 | #3 |
|--------------------|-----|-----|-----|
| DfX (30%) | 5 | 4 | 3 |
| Performance (25%) | 4 | 5 | 3 |
| Cost (25%) | 3 | 2 | 5 |
| Risk (20%) | 4 | 3 | 4 |
| **Weighted Score** | **4.05** | **3.55** | **3.75** |

Recommendation: #1 (highest score)
```

### Calculation

```
Score = (DfX×0.30) + (Perf×0.25) + (Cost×0.25) + (Risk×0.20)
```

---

## 3. Common Trade-offs

### Weight vs Strength

```
Strength ▲
         │  ★ Thicker walls
         │ ★ Add ribs
         │★ Original
         │ ★ Pockets
         └──────────────► Weight (lower=better)
```

**Decision**:
- Safety critical → Strength first
- Drone/aerospace → Weight first
- General → Balance

---

### Cost vs Quality

| Direction | Trade-off |
|-----------|-----------|
| ↑ Quality | Tight tolerance, better finish → ↑ Cost |
| ↓ Cost | Loose tolerance, as-machined → ↓ Quality |

**Decision**:
- Mating surfaces → Tight tolerance
- Non-functional → Loose OK
- Visible → Better finish

---

### Complexity vs Flexibility

| Simple | Complex |
|--------|---------|
| One-piece, integrated | Modular, adjustable |
| High volume production | Prototype/low volume |
| Fixed requirements | Changing requirements |

---

## 4. Decision Framework

### Priority Checklist

```
1. ☐ DfX HIGH issues fixed? (mandatory)
2. ☐ Performance requirements met?
3. ☐ Cost within budget?
4. ☐ Schedule acceptable?
5. ☐ Risk mitigated?
```

### Decision Tree

```
Start
  │
  ▼
DfX HIGH issues? ──Yes──► Fix (mandatory)
  │                            │
  No                           │
  │                            │
  ▼                            │
Performance OK? ──No──► Optimize ◄─┘
  │
  Yes
  │
  ▼
Cost issue? ──Yes──► Cost optimize
  │
  No
  │
  ▼
Done ✅
```

---

## 5. Impact Assessment

### Quantitative

```markdown
### IMPACT - Proposal #X

#### Weight
Before: X g → After: Y g (Δ Z%)

#### Cost  
Material: ±$X | Machining: ±X min
Total: ±$X (±X%)

#### Strength
Stress: X → Y MPa | SF: X → Y
```

### Qualitative

```markdown
#### Pros
- [benefit 1]
- [benefit 2]

#### Cons
- [drawback 1]

#### Risks
- [risk]: Likelihood [L/M/H], Impact [L/M/H]
```

---

## 6. Quick Reference

### ROI by Technique

| Technique | Effort | Impact | ROI |
|-----------|--------|--------|-----|
| Remove features | Low | -5-15% weight | High |
| Add pockets | Medium | -20-40% weight | Medium |
| Loosen tolerances | Low | -10-20% cost | High |
| Standardize | Low | -5-10% cost | High |

### Change Impact Matrix

| Change | Weight | Cost | Strength | Mfg |
|--------|:------:|:----:|:--------:|:---:|
| Fillet | ≈ | + | + | - |
| Pocket | - | + | - | + |
| Rib | + | + | + | + |
| Thicker | + | + | + | ≈ |
| Tighter tol | ≈ | + | ≈ | + |

Legend: + increase, - decrease, ≈ no change
