# 🔬 PHASE 2: CONCEPTUAL DESIGN
## Detailed Skill Guide - Load khi generate & evaluate concepts

---

## 🎯 MỤC TIÊU PHASE 2

Từ Requirements List → **Selected Concept** có:
- Documented evaluation rationale
- VDI 2225 score ≥70%
- Clear working principles
- Feasibility assessment

**Thời gian**: 15-20% tổng dự án
**Output chính**: Principle Solution (Selected Concept)

---

## 📝 QUI TRÌNH 6 BƯỚC

### Bước 1: ABSTRACTION (Trừu tượng hóa)

**Mục đích**: Loại bỏ constraints không cần thiết, tìm "essential problem"

**5-Step Abstraction Process**:

```
┌─────────────────────────────────────────────────────────┐
│ STEP 1: Eliminate personal preferences                   │
│         → Bỏ những gì "muốn" nhưng không "cần"          │
│                                                         │
│ STEP 2: Omit non-essential requirements                 │
│         → Giữ lại chỉ functional essentials             │
│                                                         │
│ STEP 3: Transform quantitative to qualitative           │
│         → "150W" → "provide sufficient power"           │
│                                                         │
│ STEP 4: Generalize results                              │
│         → "transport ammunition" → "move material"       │
│                                                         │
│ STEP 5: Formulate solution-neutral problem statement    │
│         → Không đề cập technology cụ thể                │
└─────────────────────────────────────────────────────────┘
```

**Ví dụ**:
- Original: "Thiết kế hệ thống radar phát hiện mục tiêu trên biển"
- Abstracted: "Detect and localize objects in maritime environment"

### Bước 2: FUNCTION STRUCTURE (Cấu trúc chức năng)

**Overall Function → Sub-functions**

```
┌─────────────────────────────────────────────────────────┐
│              FUNCTION STRUCTURE TEMPLATE                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│    ┌───────────────────────────────────────────┐        │
│    │         OVERALL FUNCTION                   │        │
│    │    [Verb + Noun: e.g., "Detect target"]   │        │
│    └─────────────────────┬─────────────────────┘        │
│                          │                              │
│    ┌─────────────────────┼─────────────────────┐        │
│    │                     │                     │        │
│    ▼                     ▼                     ▼        │
│ ┌──────┐           ┌──────────┐          ┌──────────┐  │
│ │Sub-  │───────────│Sub-      │──────────│Sub-      │  │
│ │func 1│           │func 2    │          │func 3    │  │
│ └──────┘           └──────────┘          └──────────┘  │
│                                                         │
│ FLOWS:                                                  │
│ ───────► Energy (E)                                     │
│ - - - -► Material (M)                                   │
│ ═══════► Signal/Information (S)                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Function verbs** (Động từ tiêu chuẩn):
| Category | Verbs |
|----------|-------|
| Transform | Convert, change, modify |
| Transfer | Transport, transmit, conduct |
| Store | Contain, hold, retain |
| Connect | Join, couple, link |
| Separate | Divide, extract, filter |
| Control | Regulate, adjust, guide |
| Detect | Sense, measure, identify |
| Generate | Produce, create, emit |

### Bước 3: SEARCH FOR WORKING PRINCIPLES

**Nguồn tìm kiếm**:
1. **Physical effects catalogs**: Principles từ physics
2. **Solution catalogs**: Proven mechanisms
3. **Literature search**: Papers, patents
4. **Brainstorming**: Creative exploration
5. **Biomimicry**: Nature-inspired solutions
6. **Competitor analysis**: Existing products

**Document mỗi principle**:
```
Working Principle: [Name]
├── Physical effect: [Description]
├── Advantages: [List]
├── Disadvantages: [List]
├── Maturity: [TRL level]
├── Cost estimate: [Relative: Low/Med/High]
└── Defense applicability: [Assessment]
```

### Bước 4: MORPHOLOGICAL MATRIX

**Structure**:

| Sub-function | Solution 1 | Solution 2 | Solution 3 | Solution 4 |
|--------------|------------|------------|------------|------------|
| F1: [name] | Principle A | Principle B | Principle C | Principle D |
| F2: [name] | Principle E | Principle F | Principle G | - |
| F3: [name] | Principle H | Principle I | Principle J | Principle K |
| F4: [name] | Principle L | Principle M | - | - |

**Concept Generation**:
- Draw paths through matrix
- Each path = one concept
- Check compatibility at intersections
- Typically generate 4-8 concepts

```
Concept A: F1-Solution1 → F2-Solution2 → F3-Solution1 → F4-Solution2
Concept B: F1-Solution3 → F2-Solution1 → F3-Solution2 → F4-Solution1
[...]
```

### Bước 5: CONCEPT EVALUATION (VDI 2225)

**Criteria Selection for Defense Products**:

| Category | Typical Criteria | Weight Range |
|----------|------------------|--------------|
| **Technical** | Performance, accuracy, range | 20-30% |
| **Reliability** | MTBF, environmental robustness | 15-20% |
| **Manufacturability** | Local content, complexity | 10-15% |
| **Cost** | Unit cost, LCC | 15-25% |
| **Schedule** | Development time, risk | 10-15% |
| **Military-specific** | Survivability, interoperability | 10-20% |

**VDI 2225 Scoring Scale**:
```
0 = Absolutely unsatisfactory (not acceptable)
1 = Just tolerable (barely meets minimum)
2 = Adequate (satisfactory)
3 = Good (better than adequate)
4 = Very good (close to ideal solution)
```

**Evaluation Matrix Template**:

| Criterion | Weight (g) | Max | Concept A | Concept B | Concept C |
|-----------|------------|-----|-----------|-----------|-----------|
| Detection range | 0.20 | 4 | 3 | 4 | 2 |
| Accuracy | 0.15 | 4 | 4 | 3 | 3 |
| MTBF | 0.15 | 4 | 2 | 3 | 4 |
| Local content | 0.10 | 4 | 3 | 2 | 4 |
| Unit cost | 0.15 | 4 | 2 | 3 | 4 |
| Dev time | 0.10 | 4 | 4 | 2 | 3 |
| Survivability | 0.15 | 4 | 3 | 4 | 2 |
| **Σ(g×p)** | 1.00 | | **2.85** | **3.10** | **3.05** |
| **Score %** | | | **71.3%** | **77.5%** | **76.3%** |

**Decision Threshold**:
- ≥70%: Acceptable for development
- ≥80%: Good concept, proceed with confidence
- <60%: Requires significant improvement or rejection

### Bước 6: SELECT AND FIRM UP

**Selection Decision**:
```
Selected Concept: [Name]
├── VDI 2225 Score: [X]%
├── Key advantages: [List]
├── Main risks: [List]
├── Development approach: [Description]
└── Fallback option: [Alternative concept if primary fails]
```

**Preliminary Layout**:
- Rough sketches showing arrangement
- Key dimensions estimated
- Critical interfaces identified
- Major components located

---

## 📊 VDI 2225 CALCULATION SCRIPT

```python
#!/usr/bin/env python3
"""
VDI 2225 Concept Evaluation Calculator
Usage: python vdi2225_calculator.py
"""

def evaluate_concepts(criteria, concepts):
    """
    criteria: list of (name, weight) tuples
    concepts: dict of concept_name: {criterion: score}
    """
    results = {}
    total_weight = sum(w for _, w in criteria)
    max_possible = total_weight * 4  # Max score is 4
    
    for concept_name, scores in concepts.items():
        weighted_sum = sum(
            weight * scores.get(criterion, 0)
            for criterion, weight in criteria
        )
        percentage = (weighted_sum / max_possible) * 100
        results[concept_name] = {
            'weighted_sum': weighted_sum,
            'percentage': percentage,
            'decision': 'PROCEED' if percentage >= 70 else 'REVIEW'
        }
    
    return results

# Example usage
if __name__ == "__main__":
    criteria = [
        ('Detection range', 0.20),
        ('Accuracy', 0.15),
        ('MTBF', 0.15),
        ('Local content', 0.10),
        ('Unit cost', 0.15),
        ('Dev time', 0.10),
        ('Survivability', 0.15),
    ]
    
    concepts = {
        'Concept A': {
            'Detection range': 3, 'Accuracy': 4, 'MTBF': 2,
            'Local content': 3, 'Unit cost': 2, 'Dev time': 4,
            'Survivability': 3
        },
        'Concept B': {
            'Detection range': 4, 'Accuracy': 3, 'MTBF': 3,
            'Local content': 2, 'Unit cost': 3, 'Dev time': 2,
            'Survivability': 4
        },
    }
    
    results = evaluate_concepts(criteria, concepts)
    for name, data in results.items():
        print(f"{name}: {data['percentage']:.1f}% - {data['decision']}")
```

---

## 📋 TEMPLATES

### Function Structure Template

```markdown
# FUNCTION STRUCTURE
## [Project Code]: [System Name]

### Overall Function
**[Verb] + [Noun]**: [Description in solution-neutral terms]

### Sub-functions

| ID | Sub-function | Input Flows | Output Flows | Notes |
|----|--------------|-------------|--------------|-------|
| F1 | | E: / M: / S: | E: / M: / S: | |
| F2 | | E: / M: / S: | E: / M: / S: | |
| F3 | | E: / M: / S: | E: / M: / S: | |

### Function Diagram
[ASCII art or reference to diagram file]

### Interface Definitions
[Key interfaces between sub-functions]
```

### Morphological Matrix Template

```markdown
# MORPHOLOGICAL MATRIX
## [Project Code]: [System Name]

### Matrix

| Sub-function | Sol 1 | Sol 2 | Sol 3 | Sol 4 |
|--------------|-------|-------|-------|-------|
| F1: [name] | [principle] | [principle] | [principle] | [principle] |
| F2: [name] | [principle] | [principle] | [principle] | - |
| F3: [name] | [principle] | [principle] | [principle] | [principle] |

### Concept Definitions

**Concept A**: [Path through matrix]
- Rationale: [Why this combination]
- Compatibility check: [Interface compatibility notes]

**Concept B**: [Path through matrix]
- Rationale: [Why this combination]
- Compatibility check: [Interface compatibility notes]

[Continue for all concepts...]
```

### VDI 2225 Evaluation Template

```markdown
# CONCEPT EVALUATION (VDI 2225)
## [Project Code]: [System Name]
### Version: [x.x] | Date: [YYYY-MM-DD]

### Evaluation Criteria

| # | Criterion | Weight | Rationale |
|---|-----------|--------|-----------|
| 1 | | | |
| 2 | | | |
[...]

### Evaluation Matrix

| Criterion | Weight | Concept A | Concept B | Concept C |
|-----------|--------|-----------|-----------|-----------|
| | | | | |
[...]
| **Weighted Sum** | | | | |
| **Percentage** | | | | |

### Sensitivity Analysis
[What if weights change? Which criteria are decisive?]

### Selection Decision
- **Selected**: [Concept name]
- **Score**: [X]%
- **Rationale**: [Why this concept]
- **Risks**: [Main development risks]
- **Fallback**: [Alternative if primary fails]

### Approval
| Role | Name | Date |
|------|------|------|
| Author | | |
| Reviewer | | |
```

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Skipping abstraction**
   - ❌ Jump straight to solutions
   - ✅ Abstract first to explore full solution space

2. **Too few working principles**
   - ❌ Only consider 1-2 options per function
   - ✅ Search systematically for ≥3-4 options

3. **Incompatible combinations**
   - ❌ Combine principles without checking interfaces
   - ✅ Verify compatibility at each combination point

4. **Biased evaluation**
   - ❌ Set weights to favor preferred concept
   - ✅ Set weights BEFORE evaluation, based on requirements

5. **Ignoring low scores**
   - ❌ Proceed with concept having score <2 on critical criterion
   - ✅ Address weaknesses or reconsider selection

---

## 🏁 PHASE 2 EXIT CRITERIA

**Gate 2 Checklist** - Phải đạt tất cả để sang Phase 3:

- [ ] Function structure validated (covers all requirements)
- [ ] ≥3 concepts evaluated
- [ ] VDI 2225 score ≥70% for selected concept
- [ ] No criterion scores = 0 (showstopper)
- [ ] Selection rationale documented
- [ ] Risks identified với mitigation approach
- [ ] Preliminary layout sketched
- [ ] Technical feasibility confirmed

---

## 🔗 RELATED SKILLS

- `SKILL_task_clarification.md` - Input từ Phase 1
- `SKILL_embodiment_design.md` - Tiếp theo Phase 2
- `scripts/vdi2225_calculator.py` - Automated evaluation

**Reference documents**:
- `references/vdi-2225-evaluation-guide.md`
- `references/physical-effects-catalog.md`
- `references/solution-catalogs.md`

---

*Phase 2 determines WHAT the product will be. Thorough exploration here prevents costly pivots later.*
*"The best way to have a good idea is to have lots of ideas." - Linus Pauling*
