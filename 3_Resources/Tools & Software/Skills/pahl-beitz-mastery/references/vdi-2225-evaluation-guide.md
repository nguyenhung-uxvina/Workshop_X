# VDI 2225: Technical-Economic Evaluation of Concepts

## Overview

VDI 2225 is the systematic method for evaluating and selecting design concepts based on multiple weighted criteria. It provides objective, traceable decision-making for concept selection.

## When to Use VDI 2225

- Comparing 2+ alternative concepts during Conceptual Design
- Selecting between embodiment variants
- Any multi-criteria decision requiring systematic justification
- Defense projects requiring documented decision rationale
- When intuitive selection is unclear or disputed among stakeholders

## Complete VDI 2225 Process

### Step 1: Define Evaluation Criteria

**Categories of criteria**:

**Technical Performance**
- Fulfillment of main function
- Reliability/durability
- Precision/accuracy
- Energy efficiency
- Speed/throughput
- Operational range
- Adaptability/flexibility

**Economic Factors**
- Manufacturing cost
- Material cost
- Operating cost
- Maintenance cost
- Lifecycle cost
- Development risk
- Time to market

**Manufacturing Feasibility**
- Production complexity
- Required tooling
- Material availability
- Skill requirements
- Quality control difficulty
- Scalability

**Safety & Regulations**
- Operational safety
- Failure modes
- Environmental impact
- Regulatory compliance (MIL-STD, STANAG)
- Security requirements

**Defense-Specific Criteria**
- Survivability/hardening
- Logistics support
- Interoperability (STANAG)
- Training requirements
- Field maintainability
- Dual-use potential

**Typical number**: 5-12 criteria (too few = oversimplified, too many = diminished discrimination)

---

### Step 2: Weight the Criteria

**Methods for weighting**:

#### Method A: Direct Weighting (Simple)
- Assign percentage weight to each criterion
- Total must sum to 100%
- Reflect relative importance to project success

**Example for defense surveillance system**:
| Criterion | Weight |
|-----------|--------|
| Detection range | 25% |
| Reliability (MTBF) | 20% |
| Manufacturing cost | 15% |
| Power consumption | 15% |
| Weight (portability) | 10% |
| Environmental tolerance | 10% |
| Maintenance complexity | 5% |
| **TOTAL** | **100%** |

#### Method B: Pairwise Comparison (Rigorous)
When importance relationships unclear:

1. Compare each criterion against every other (which is more important?)
2. Score: 2 = much more important, 1 = slightly more important, 0 = equal importance
3. Sum scores for each criterion
4. Convert to percentages

**Example matrix**:
|  | Range | Reliability | Cost | Power | Weight |
|--|-------|-------------|------|-------|--------|
| **Range** | - | 1 | 2 | 2 | 2 |
| **Reliability** | 1 | - | 2 | 2 | 2 |
| **Cost** | 0 | 0 | - | 1 | 1 |
| **Power** | 0 | 0 | 1 | - | 1 |
| **Weight** | 0 | 0 | 1 | 1 | - |
| **Sum** | 1 | 1 | 6 | 6 | 6 |
| **%** | 5% | 5% | 30% | 30% | 30% |

---

### Step 3: Score Each Concept

**Scoring scale**: 0-10 points per criterion
- **0-3**: Poor/inadequate performance
- **4-6**: Acceptable performance
- **7-8**: Good performance
- **9-10**: Excellent/ideal performance

**Scoring methods**:

#### Method 1: Absolute Scoring
Rate each concept independently against objective standards

**Example**: Detection range criterion
- 0-3: <500m (inadequate)
- 4-6: 500-1000m (acceptable)
- 7-8: 1000-2000m (good)
- 9-10: >2000m (excellent)

#### Method 2: Relative Scoring
Compare concepts against each other within each criterion
- Best performing concept = 10 points
- Worst performing = 0-5 points (depending on minimum acceptability)
- Others = interpolated proportionally

**Important**: Be consistent - use same method for all criteria

---

### Step 4: Calculate Weighted Values

For each concept:

**Weighted Value = Σ (Criterion Weight × Criterion Score)**

**Example calculation**:

| Criterion | Weight | Concept A Score | Concept B Score | Concept C Score |
|-----------|--------|----------------|----------------|----------------|
| Detection range | 25% | 8 | 6 | 9 |
| Reliability | 20% | 7 | 9 | 6 |
| Mfg cost | 15% | 5 | 7 | 4 |
| Power | 15% | 6 | 5 | 8 |
| Weight | 10% | 7 | 4 | 8 |
| Environment | 10% | 8 | 6 | 7 |
| Maintenance | 5% | 6 | 8 | 5 |

**Concept A**: (0.25×8)+(0.20×7)+(0.15×5)+(0.15×6)+(0.10×7)+(0.10×8)+(0.05×6) = **6.95**

**Concept B**: (0.25×6)+(0.20×9)+(0.15×7)+(0.15×5)+(0.10×4)+(0.10×6)+(0.05×8) = **6.65**

**Concept C**: (0.25×9)+(0.20×6)+(0.15×4)+(0.15×8)+(0.10×8)+(0.10×7)+(0.05×5) = **7.25**

**Result**: Concept C wins (7.25 > 6.95 > 6.65)

---

### Step 5: Sensitivity Analysis

Check if small changes in weights or scores change the outcome:

**Questions to test**:
- If most critical criterion weight changes ±10%, does winner change?
- If winning concept's scores drop 1 point across the board, does it still win?
- Which criteria are "swing" criteria (could change the outcome)?

**If result is sensitive**: Reconsider weights, gather more data, or plan for adaptability

**If result is robust**: Proceed confidently with selected concept

---

### Step 6: Document Decision

Required documentation:
1. **Evaluation matrix** with all scores
2. **Weighting justification** (why these weights?)
3. **Scoring justification** (basis for scores - calculations, test data, expert judgment)
4. **Sensitivity analysis results**
5. **Final recommendation** with rationale

For defense projects, this documentation provides audit trail and justifies public spending.

---

## VDI 2225 Variations

### For Different Project Phases

**Early Conceptual (rough screening)**:
- Fewer criteria (4-6)
- Broader categories
- Coarser scoring (0/5/10)
- Quick elimination of clearly inferior options

**Final Concept Selection**:
- Detailed criteria (8-12)
- Precise definitions
- Fine scoring (0-10 scale)
- Full sensitivity analysis

**Embodiment Variants**:
- Manufacturing-heavy criteria
- Cost-focused weighting
- Include risk factors

---

## Common Mistakes & Fixes

### Mistake 1: Too Many Criteria
**Problem**: 20+ criteria make discrimination difficult, weights become arbitrary

**Fix**: Consolidate related criteria, focus on truly differentiating factors

---

### Mistake 2: Equal Weighting
**Problem**: Implies all factors equally important (rarely true)

**Fix**: Force prioritization - use pairwise comparison if unsure

---

### Mistake 3: Biased Scoring
**Problem**: Unconsciously favoring preferred concept

**Fix**: 
- Score one criterion across all concepts before moving to next criterion
- Have independent evaluator cross-check
- Use objective data where possible (cost estimates, calculations, test results)

---

### Mistake 4: Ignoring "Must" Requirements
**Problem**: Evaluating concepts that fail mandatory requirements

**Fix**: Pre-screen for "must-have" requirements before VDI 2225 (go/no-go criteria)

---

### Mistake 5: Post-Hoc Justification
**Problem**: Adjusting weights/scores until preferred concept wins

**Fix**: Define weights/scoring rules BEFORE scoring concepts, document in advance

---

## Integration with Pahl & Beitz Phases

**Phase 2 (Conceptual Design)**:
- Primary use: selecting principle solution from working structures
- Input: Morphological matrix variants
- Output: Selected concept with documented rationale

**Phase 3 (Embodiment Design)**:
- Use: selecting between preliminary layouts
- More manufacturing/cost focus
- May have different criteria than conceptual phase

**Phase 4 (Detail Design)**:
- Use: Make-or-buy decisions, supplier selection
- Very cost-focused
- Include risk and supply chain criteria

---

## Defense Project Specific Guidance

### Additional Criteria to Consider

**Survivability**: Resistance to threats, redundancy, hardening
**Deployability**: Transport, setup time, personnel requirements
**Interoperability**: STANAG compliance, coalition operations
**Lifecycle Support**: Spare parts, diagnostics, training infrastructure
**Technology Maturity**: TRL level, development risk
**Export Potential**: Dual-use, civil applications
**Security**: Classified components, supply chain vulnerability

### Weighting for Defense Context

Defense projects typically weight:
- **Technical performance**: 30-40% (mission effectiveness is paramount)
- **Reliability/durability**: 20-30% (harsh conditions, long service life)
- **Cost**: 15-25% (important but often secondary to performance)
- **Other factors**: 15-25% (safety, maintainability, etc.)

Contrast with commercial:
- **Cost**: 40-50% (market competition)
- **Performance**: 25-35%
- **Other**: 15-35%

---

## Template & Checklist

**Evaluation Matrix Template**:

```
Project: ________________  Date: ________ Evaluator: ____________

Concepts Being Evaluated:
- Concept A: _______________
- Concept B: _______________
- Concept C: _______________

| Criterion | Weight (%) | Score A | Score B | Score C | Justification |
|-----------|------------|---------|---------|---------|---------------|
|           |            |         |         |         |               |
|           |            |         |         |         |               |
| TOTAL     | 100%       |         |         |         |               |

Weighted Values:
- Concept A: _____
- Concept B: _____
- Concept C: _____

Selected Concept: _______ (Rationale: _________________________)

Sensitivity Analysis:
- Tested scenarios: _______________________
- Result robust? YES / NO
- Key uncertainties: _______________________
```

**Pre-Evaluation Checklist**:
- [ ] All concepts meet mandatory "must" requirements
- [ ] Criteria defined clearly (measurable/comparable)
- [ ] Weights sum to 100%
- [ ] Weights agreed by stakeholders
- [ ] Scoring scale defined in advance
- [ ] Scoring method consistent across criteria
- [ ] Basis for scores documented (not just intuition)
- [ ] Independent review of scoring (if high-stakes decision)

**Post-Evaluation Checklist**:
- [ ] Sensitivity analysis completed
- [ ] Result seems reasonable (gut check)
- [ ] Documentation complete (matrix, justifications, references)
- [ ] Stakeholder agreement on selected concept
- [ ] Action plan for next phase defined
