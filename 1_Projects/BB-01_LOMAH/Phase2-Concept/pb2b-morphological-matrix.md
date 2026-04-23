# Skill: PB2b - Morphological Matrix

> **Use When**: Function structure complete, need to generate solution concepts
> **Output**: Solution principles per function, concept variants
> **Phase**: Pahl & Beitz Phase 2b of 4 (Conceptual Design)
> **Prev**: [[pb2a-function-structure]] | **Next**: [[pb2c-vdi-2225]]

---

## Purpose

Morphological Matrix systematically generates solution concepts:
- **Search** for solution principles for each function
- **Organize** solutions in a matrix
- **Combine** compatible solutions into complete concepts
- **Generate** diverse concept variants

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  MORPHOLOGICAL MATRIX                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Solution │──►│  Build   │──►│  Check   │──►│ Generate ││
│  │  Search  │   │  Matrix  │   │ Compat.  │   │ Variants ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Find 3-5        Organize        Which work     3-5        │
│  options per     in table        together?      concepts   │
│  function                                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Solution Search

### Solution Search Methods

| Method | Description | When to Use |
|--------|-------------|-------------|
| **Literature** | Papers, patents, textbooks | Established domains |
| **Benchmarking** | Competitor products | Market products exist |
| **Analogy** | Solutions from other fields | Novel problems |
| **Brainstorming** | Team ideation | Creative solutions |
| **TRIZ** | Inventive principles | Technical contradictions |
| **First principles** | Physics-based thinking | Fundamental problems |

### Solution Principle Template

```markdown
## Function: [F1 - Verb + Noun]

### Requirement
[What must this function achieve?]

### Solution Principles

| # | Principle | Description | Pros | Cons | Feasibility |
|---|-----------|-------------|------|------|-------------|
| 1 | | | | | H/M/L |
| 2 | | | | | H/M/L |
| 3 | | | | | H/M/L |
| 4 | | | | | H/M/L |

### Sources
- [Where these solutions came from]
```

### Example: Detect Impact

| # | Principle | Pros | Cons | Feasibility |
|---|-----------|------|------|-------------|
| 1 | Piezoelectric (PZT) | Simple, cheap, passive | Needs amplifier | High |
| 2 | Accelerometer | Digital output, multi-axis | Power needed | High |
| 3 | Strain gauge | Precise | Complex circuit | Medium |
| 4 | Acoustic (microphone) | Non-contact | Noise sensitive | Medium |
| 5 | Optical (break-beam) | Fast response | Alignment critical | Low |

---

## Step 2: Build the Matrix

### Morphological Matrix Format

```markdown
# Morphological Matrix: [Product Name]

> **Date**: YYYY-MM-DD
> **Version**: 1.0

| Function | Sol 1 | Sol 2 | Sol 3 | Sol 4 |
|----------|-------|-------|-------|-------|
| F1: [Name] | [A] | [B] | [C] | [D] |
| F2: [Name] | [E] | [F] | [G] | |
| F3: [Name] | [H] | [I] | [J] | [K] |
| F4: [Name] | [L] | [M] | [N] | |
| F5: [Name] | [O] | [P] | [Q] | [R] |
```

### Matrix Construction Rules

1. **One row per function** from function structure
2. **3-5 solutions per row** (more = analysis paralysis)
3. **Feasible solutions only** - eliminate non-starters
4. **Similar abstraction level** across row
5. **Label clearly** - use letters or short names

### Example: BB-01 MCU Box Matrix

| Function | Sol 1 | Sol 2 | Sol 3 | Sol 4 |
|----------|-------|-------|-------|-------|
| Detect impact | PZT | Accelerometer | Strain gauge | Acoustic |
| Amplify signal | Op-amp | Instrumentation amp | Charge amp | |
| Digitize signal | Internal ADC | External ADC | | |
| Process data | STM32 | ESP32 | Arduino | Raspberry Pi |
| Transmit wireless | LoRa | WiFi | Cellular | BLE |
| Store energy | LiFePO4 | Li-ion | Lead acid | Supercap |
| Regulate power | Buck | LDO | Buck-boost | |
| Protect electronics | Conformal coat | Potting | Enclosure | |

---

## Step 3: Check Compatibility

### Compatibility Matrix

Not all solutions work together. Check combinations:

```markdown
## Compatibility Check

| Combination | Compatible? | Notes |
|-------------|-------------|-------|
| PZT + Charge amp | ✅ Yes | Optimal for PZT |
| PZT + Instrumentation amp | ⚠️ Possible | Needs bias |
| Accelerometer + Op-amp | ❌ No | Digital output |
| LoRa + Supercap | ⚠️ Possible | High peak current |
| ESP32 + BLE | ✅ Yes | Built-in |
| STM32 + WiFi | ⚠️ Possible | Needs module |
```

### Compatibility Considerations

| Aspect | Check For |
|--------|-----------|
| **Electrical** | Voltage levels, interfaces, power |
| **Physical** | Size, mounting, thermal |
| **Logical** | Protocols, data formats |
| **Performance** | Speed, resolution, range |
| **Cost** | Combined cost reasonable? |

---

## Step 4: Generate Concept Variants

### Variant Selection Strategy

| Variant Type | Purpose |
|--------------|---------|
| **Conservative** | Proven technologies, low risk |
| **Cost-optimized** | Cheapest viable option |
| **Performance** | Best specs, higher cost |
| **Innovative** | New approach, higher risk |
| **Balanced** | Middle ground on all factors |

### Variant Path Through Matrix

```
| Function | Sol 1 | Sol 2 | Sol 3 | Sol 4 |
|----------|-------|-------|-------|-------|
| F1 | [A]←V1,V3 | [B]←V2 | [C] | [D]←V4 |
| F2 | [E]←V1 | [F]←V2,V3 | [G]←V4 | |
| F3 | [H]←V1,V2 | [I]←V3,V4 | | |
| F4 | [L]←V1,V3 | [M]←V2 | [N]←V4 | |
| F5 | [O]←V1,V3 | [P]←V2 | [Q] | [R]←V4 |

V1 = Conservative (A-E-H-L-O)
V2 = Cost-optimized (B-F-H-M-P)
V3 = Balanced (A-F-I-L-O)
V4 = Innovative (D-G-I-N-R)
```

### Concept Variant Template

```markdown
## Concept Variants

### V1: [Name] - Conservative
| Function | Solution | Rationale |
|----------|----------|-----------|
| F1 | | |
| F2 | | |
| F3 | | |

**Character**: [2-3 sentence description]
**Estimated cost**: $XXX
**Key risk**: [Main uncertainty]

### V2: [Name] - Cost-optimized
[Same format]

### V3: [Name] - Balanced
[Same format]

### V4: [Name] - Innovative
[Same format]
```

---

## Variant Selection Rules

### Do's
- Generate **3-5 variants** (not more)
- Include **diverse approaches** (not all similar)
- Check **compatibility** of all combinations
- Include one **safe** option
- Include one **stretch** option

### Don'ts
- Don't pick "best" from each row (may not combine)
- Don't generate too many (analysis paralysis)
- Don't skip compatibility check
- Don't include infeasible combinations

---

## Morphological Matrix Document Template

```markdown
# Morphological Matrix: [Product Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Phase**: Conceptual Design (PB2b)

---

## 1. Solution Principles

### F1: [Function Name]
| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | | | | H/M/L |
| 2 | | | | H/M/L |

### F2: [Function Name]
[Repeat for each function]

---

## 2. Morphological Matrix

| Function | Sol 1 | Sol 2 | Sol 3 | Sol 4 |
|----------|-------|-------|-------|-------|
| F1 | | | | |
| F2 | | | | |
| F3 | | | | |
| F4 | | | | |
| F5 | | | | |

---

## 3. Compatibility Analysis

| Combination | Compatible? | Notes |
|-------------|-------------|-------|
| | ✅/⚠️/❌ | |

---

## 4. Concept Variants

### V1: [Name]
| Function | Solution |
|----------|----------|
| | |

**Character**:
**Est. cost**:
**Key risk**:

### V2: [Name]
[Repeat]

### V3: [Name]
[Repeat]

---

## 5. Variant Comparison

| Aspect | V1 | V2 | V3 |
|--------|----|----|-----|
| Cost | | | |
| Performance | | | |
| Risk | | | |
| Complexity | | | |

---

## 6. Next Steps

- [ ] Evaluate variants using VDI 2225
- [ ] Select best concept
```

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Too few solutions | Miss better options | Research more |
| Too many solutions | Analysis paralysis | Limit to 4-5 |
| Skip compatibility | Infeasible concepts | Always check |
| All variants similar | Weak selection | Force diversity |
| Solutions too detailed | Lock in too early | Stay abstract |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Solution Principles | Options for each function |
| Morphological Matrix | Complete solution space |
| Compatibility Analysis | What works together |
| Concept Variants | 3-5 complete concepts |

---

## Related Skills

- [[pb2a-function-structure]] - Input: functions to solve
- [[pb2c-vdi-2225]] - Next: evaluate variants
- [[decision-log]] - Document selections

---

*Skill Version: 1.0*
*Pahl & Beitz Phase 2b - Morphological Matrix*
