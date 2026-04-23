# Skill: PB2c - VDI 2225 Evaluation

> **Use When**: Concept variants generated, need to select best concept
> **Output**: Ranked concept list with technical value scores, selection rationale
> **Phase**: Pahl & Beitz Phase 2c of 4 (Conceptual Design)
> **Prev**: [[pb2b-morphological-matrix]] | **Next**: [[pb3-embodiment-design]]

---

## Purpose

VDI 2225 provides systematic, objective concept evaluation:
- **Define** criteria from requirements
- **Weight** criteria by importance
- **Score** concepts objectively
- **Select** best concept with documented rationale

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   VDI 2225 EVALUATION                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Define   │──►│ Weight   │──►│  Score   │──►│ Select   ││
│  │ Criteria │   │ Criteria │   │ Concepts │   │  Best    ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  From           Pairwise       0-4 scale      Technical    │
│  requirements   comparison     per concept    value ≥70%   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Define Evaluation Criteria

### Criteria Sources

| Source | Example Criteria |
|--------|------------------|
| Functional requirements | Performance, accuracy, range |
| Constraints | Cost, size, weight, power |
| Strategic goals | Local content, IP, extensibility |
| Risk factors | Technology readiness, schedule |

### Common Criteria Categories

| Category | Criteria Examples |
|----------|-------------------|
| **Technical** | Performance, reliability, TRL, integration |
| **Economic** | Development cost, unit cost, operating cost |
| **Strategic** | Local content, supply chain, future growth |
| **Schedule** | Development time, risk to schedule |

### Criteria Selection Rules

- **5-10 criteria** optimal (too few = oversimplified, too many = noise)
- **Traceable** to requirements
- **Independent** (no double-counting)
- **Measurable** or at least assessable

---

## Step 2: Weight Criteria

### Pairwise Comparison Method

Compare each pair: Which is more important?

| Scale | Meaning |
|-------|---------|
| 2 | Much more important |
| 1 | Slightly more important |
| 0.5 | Equal importance |
| 0 | Less important (inverse) |

### Pairwise Matrix Template

```markdown
## Pairwise Comparison

|    | C1 | C2 | C3 | C4 | C5 | Sum | Weight |
|----|----|----|----|----|-----|-----|--------|
| C1 | -  | 2  | 1  | 0.5| 1  | 4.5 | 30%    |
| C2 | 0  | -  | 0.5| 1  | 1  | 2.5 | 17%    |
| C3 | 1  | 1.5| -  | 1  | 0.5| 4.0 | 27%    |
| C4 | 1.5| 1  | 1  | -  | 0.5| 4.0 | 27%    |
| C5 | 1  | 1  | 1.5| 1.5| -  | 5.0 | -      |
| **Total** | | | | | | **15** | **100%** |

Weight = Sum / Total × 100%
```

### Quick Weighting (Alternative)

If pairwise is too complex, use direct assignment:

| Criterion | Importance | Weight |
|-----------|------------|--------|
| Must-have (D) | High | 25-30% |
| Important | Medium | 15-20% |
| Nice-to-have (W) | Lower | 5-10% |

**Rule**: Weights must sum to 100%

---

## Step 3: Define Scoring Scale

### Standard 0-4 Scale

| Score | Definition | Meaning |
|-------|------------|---------|
| 0 | Completely inadequate | Fails requirement |
| 1 | Very poor | Major gaps |
| 2 | Poor | Significant issues |
| 3 | Adequate | Meets minimum |
| 4 | Good | Solid performance |

### Criterion-Specific Scales

Define what each score means for each criterion:

```markdown
## Scoring Definitions

### C1: Performance
| Score | Definition |
|-------|------------|
| 0 | <50% of requirement |
| 1 | 50-70% of requirement |
| 2 | 70-90% of requirement |
| 3 | 90-100% of requirement |
| 4 | Exceeds requirement |

### C2: Unit Cost
| Score | Definition |
|-------|------------|
| 0 | >150% of target |
| 1 | 125-150% of target |
| 2 | 100-125% of target |
| 3 | At target |
| 4 | <90% of target |
```

---

## Step 4: Score Concepts

### Evaluation Matrix

```markdown
## Evaluation Matrix

| Criterion | Weight | V1 | V2 | V3 | Rationale |
|-----------|--------|----|----|-----|-----------|
| Performance | 25% | 4 | 3 | 3 | V1 exceeds spec |
| Cost | 20% | 2 | 4 | 3 | V2 cheapest |
| Reliability | 20% | 3 | 2 | 4 | V3 proven tech |
| Local content | 15% | 3 | 3 | 2 | V1,V2 local parts |
| Dev risk | 10% | 4 | 3 | 2 | V1 lowest risk |
| Schedule | 10% | 3 | 4 | 2 | V2 fastest |
```

### Weighted Score Calculation

```markdown
## Weighted Scores

| Criterion | Weight | V1 | V2 | V3 |
|-----------|--------|----|----|-----|
| Performance | 0.25 | 1.00 | 0.75 | 0.75 |
| Cost | 0.20 | 0.40 | 0.80 | 0.60 |
| Reliability | 0.20 | 0.60 | 0.40 | 0.80 |
| Local content | 0.15 | 0.45 | 0.45 | 0.30 |
| Dev risk | 0.10 | 0.40 | 0.30 | 0.20 |
| Schedule | 0.10 | 0.30 | 0.40 | 0.20 |
| **TOTAL** | 1.00 | **3.15** | **3.10** | **2.85** |
```

### Technical Value

```
Technical Value = (Weighted Score / Max Possible) × 100%
                = (Weighted Score / 4.0) × 100%
```

| Concept | Weighted Score | Technical Value | Rank |
|---------|----------------|-----------------|------|
| V1 | 3.15 | **78.8%** | 1 |
| V2 | 3.10 | 77.5% | 2 |
| V3 | 2.85 | 71.3% | 3 |

---

## Step 5: Sensitivity Analysis

### Why Test Sensitivity?

Check if the winner is robust to:
- Uncertainty in weights
- Uncertainty in scores
- Different stakeholder perspectives

### Sensitivity Tests

```markdown
## Sensitivity Analysis

### Test 1: Cost Weight +10%
| Concept | Original | New Score | Change |
|---------|----------|-----------|--------|
| V1 | 78.8% | 76.5% | -2.3% |
| V2 | 77.5% | 79.0% | +1.5% |  ← Winner changes!
| V3 | 71.3% | 70.8% | -0.5% |

**Result**: V2 wins if cost weighted higher

### Test 2: V1 All Scores -1
| Concept | Original | New Score |
|---------|----------|-----------|
| V1 | 78.8% | 53.8% |
| V2 | 77.5% | 77.5% |  ← Becomes winner

**Result**: V1 win not robust to pessimistic scoring
```

### Interpretation

| Result | Meaning | Action |
|--------|---------|--------|
| Winner unchanged | Robust selection | Proceed confidently |
| Winner changes | Sensitive selection | Review weights/scores |
| Close scores (<5%) | Near tie | Consider other factors |

---

## Step 6: Make Decision

### Decision Thresholds

| Technical Value | Rating | Recommendation |
|-----------------|--------|----------------|
| ≥80% | Very Good | Strong proceed |
| 70-79% | Good | Proceed with awareness |
| 60-69% | Marginal | Reconsider options |
| <60% | Poor | Do not proceed |

### Selection Documentation

```markdown
## Recommendation

### Selected Concept: V1

**Technical Value**: 78.8%
**Rating**: Good

### Selection Rationale
1. Highest overall score
2. Best performance (primary requirement)
3. Lowest development risk
4. Local content acceptable

### Key Risks
| Risk | Mitigation |
|------|------------|
| Higher cost than V2 | Value engineering in embodiment |
| | |

### Fallback Concept: V2
If V1 fails during development, V2 is viable alternative with:
- 77.5% technical value
- Lower cost
- Slightly higher risk
```

---

## VDI 2225 Document Template

```markdown
# VDI 2225 Evaluation: [Project Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Evaluator(s)**: [Names]
> **Phase**: Conceptual Design (PB2c)

---

## 1. Concepts Under Evaluation

| ID | Name | Description |
|----|------|-------------|
| V1 | | |
| V2 | | |
| V3 | | |

---

## 2. Evaluation Criteria

| ID | Criterion | Source Req | Weight |
|----|-----------|------------|--------|
| C1 | | | % |
| C2 | | | % |
| | | | **100%** |

### Weight Derivation
[Pairwise matrix or justification]

---

## 3. Scoring Scale

| Score | Definition |
|-------|------------|
| 0 | Completely inadequate |
| 1 | Very poor |
| 2 | Poor |
| 3 | Adequate |
| 4 | Good |

---

## 4. Evaluation Matrix

| Criterion | Weight | V1 | V2 | V3 | Rationale |
|-----------|--------|----|----|-----|-----------|
| | | | | | |

---

## 5. Results

| Concept | Weighted Score | Technical Value | Rank |
|---------|----------------|-----------------|------|
| | | % | |

---

## 6. Sensitivity Analysis

[Document tests performed]

---

## 7. Recommendation

**Selected**: V[X] at [X]%

**Rationale**:
1.
2.

**Risks**:
| Risk | Mitigation |
|------|------------|
| | |

**Fallback**: V[X]

---

## 8. Approval

| Role | Name | Date | Sign |
|------|------|------|------|
| Technical Lead | | | ☐ |
| Project Manager | | | ☐ |
```

---

## Quick Evaluation Template

For smaller decisions:

```markdown
# Quick VDI 2225: [Decision]

## Concepts
- V1: [Name]
- V2: [Name]
- V3: [Name]

## Criteria & Weights
| Criterion | Weight |
|-----------|--------|
| | % |
| **Total** | **100%** |

## Scores (0-4)
| Criterion | V1 | V2 | V3 |
|-----------|----|----|-----|
| | | | |

## Result
| Concept | Score | Value | Rank |
|---------|-------|-------|------|
| | | % | |

**Selected**: V[X] at [X]%
**Rationale**: [1-2 sentences]
```

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Weight after scoring | Bias toward favorite | Weight first |
| Invent criteria | Miss requirements | Derive from reqs |
| All criteria equal | Oversimplified | Do pairwise |
| Skip sensitivity | Fragile decision | Always test |
| Ignore <70% | Proceed with bad concept | Revisit options |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Evaluation Matrix | Scores with rationale |
| Technical Values | Ranked concepts |
| Sensitivity Analysis | Robustness check |
| Selection Decision | Concept + rationale |

---

## Related Skills

- [[pb2b-morphological-matrix]] - Input: concept variants
- [[pb3-embodiment-design]] - Next: develop selected concept
- [[decision-log]] - Record the selection

---

*Skill Version: 1.0*
*Based on VDI 2225 Technical-Economic Evaluation*
*Pahl & Beitz Phase 2c - Concept Evaluation*
