# 🔧 PHASE 3: EMBODIMENT DESIGN
## Detailed Skill Guide - Load khi develop form, material, layout

---

## 🎯 MỤC TIÊU PHASE 3

Từ Selected Concept → **Definitive Layout** có:
- Dimensions và tolerances
- Materials selected và justified
- DfX guidelines applied
- Standards compliance verified

**Thời gian**: 35-40% tổng dự án
**Output chính**: Definitive Layout + Production Method Outline

---

## 📝 QUI TRÌNH 7 BƯỚC

### Bước 1: IDENTIFY EMBODIMENT-DETERMINING REQUIREMENTS

**Extract từ Requirements List**:
```
┌─────────────────────────────────────────────────────────┐
│ EMBODIMENT-DETERMINING REQUIREMENTS                     │
├─────────────────────────────────────────────────────────┤
│ SIZE & SPACE:                                           │
│   - Max envelope dimensions                             │
│   - Weight limits                                       │
│   - Mounting interfaces                                 │
│                                                         │
│ FORCES & LOADS:                                         │
│   - Operating loads (static, dynamic)                   │
│   - Shock & vibration (MIL-STD-810)                    │
│   - Safety factors                                      │
│                                                         │
│ ENVIRONMENTAL:                                          │
│   - Temperature range                                   │
│   - Humidity, salt spray, dust                         │
│   - IP rating                                          │
│                                                         │
│ INTERFACES:                                             │
│   - Mechanical connections                              │
│   - Electrical connectors                               │
│   - Fluid ports (if applicable)                        │
│                                                         │
│ PERFORMANCE CONSTRAINTS:                                │
│   - Accuracy/precision requirements                     │
│   - Speed/response requirements                         │
│   - Thermal management                                  │
└─────────────────────────────────────────────────────────┘
```

### Bước 2: APPLY BASIC RULES

**4 Basic Rules của Embodiment Design**:

```
┌─────────────────────────────────────────────────────────┐
│ RULE 1: CLARITY (Rõ ràng)                               │
│ ─────────────────────────────────────────               │
│ • Mọi chức năng phải rõ ràng, không mơ hồ               │
│ • Tránh thiết kế "hidden failures"                      │
│ • Load paths dễ theo dõi                                │
│                                                         │
│ Example: Bearing mount có rõ ràng chịu tải radial       │
│ hay axial? Design phải explicit.                        │
├─────────────────────────────────────────────────────────┤
│ RULE 2: SIMPLICITY (Đơn giản)                           │
│ ─────────────────────────────────────────               │
│ • Số lượng parts tối thiểu                              │
│ • Giảm số lượng features                                │
│ • Fewer interfaces = fewer failure modes                │
│                                                         │
│ Example: One complex casting vs 5 simple machined       │
│ parts welded together - evaluate trade-off              │
├─────────────────────────────────────────────────────────┤
│ RULE 3: SAFETY (An toàn)                                │
│ ─────────────────────────────────────────               │
│ • Fail-safe design                                      │
│ • Redundancy cho critical functions                     │
│ • Clear indication of failures                          │
│                                                         │
│ Hierarchy: Safe-life → Fail-safe → Redundant            │
├─────────────────────────────────────────────────────────┤
│ RULE 4: ECONOMY (Kinh tế)                               │
│ ─────────────────────────────────────────               │
│ • Right material for function (not overkill)            │
│ • Consider full lifecycle cost                          │
│ • Manufacturing method appropriate to volume            │
│                                                         │
│ Defense context: 60-70% of import cost target           │
└─────────────────────────────────────────────────────────┘
```

### Bước 3: APPLY DESIGN PRINCIPLES

**Key Principles cho Defense Products**:

| Principle | Mô tả | Application |
|-----------|-------|-------------|
| **Task Division** | Mỗi component làm một việc rõ ràng | Modularity cho maintenance |
| **Self-Help** | Part tự centering, tự locking | Reduce assembly errors |
| **Stability** | Preferred stable configurations | Resist vibration |
| **Bi-stability** | Definite ON/OFF states | Safety interlocks |
| **Force Transmission** | Short, direct load paths | Structural efficiency |
| **Matched Deformations** | Compatible deformation patterns | Prevent stress concentration |
| **Force Balance** | Minimize reaction forces | Reduce bearing loads |
| **Fault-Free** | Design out failure modes | FMEA implementation |

### Bước 4: APPLY DfX GUIDELINES

**Design for Manufacturing (DfM)**:
```
┌─────────────────────────────────────────────────────────┐
│ DfM CHECKLIST                                           │
├─────────────────────────────────────────────────────────┤
│ MATERIAL SELECTION:                                     │
│ □ Available from Vietnamese suppliers?                  │
│ □ Standard sizes/forms available?                       │
│ □ Machining characteristics suitable?                   │
│ □ Welding compatibility if needed?                      │
│                                                         │
│ GEOMETRY:                                               │
│ □ Standard tooling can produce features?                │
│ □ Avoid deep pockets (>4x diameter)                     │
│ □ Avoid thin walls (<3mm for casting)                   │
│ □ Generous radii (no sharp internal corners)            │
│                                                         │
│ TOLERANCES:                                             │
│ □ As loose as function allows?                          │
│ □ Tight tolerances only where necessary?                │
│ □ Datum features clearly defined?                       │
│                                                         │
│ SURFACE FINISH:                                         │
│ □ Standard finishes where possible?                     │
│ □ Special finishes (anodize, paint) justified?          │
└─────────────────────────────────────────────────────────┘
```

**Design for Assembly (DfA)**:
```
┌─────────────────────────────────────────────────────────┐
│ DfA CHECKLIST                                           │
├─────────────────────────────────────────────────────────┤
│ PART COUNT:                                             │
│ □ Can parts be combined?                                │
│ □ Fastener count minimized?                             │
│ □ Standardized fasteners used?                          │
│                                                         │
│ HANDLING:                                               │
│ □ Parts self-locating?                                  │
│ □ Symmetrical or obviously asymmetrical?                │
│ □ Easy to grasp and orient?                             │
│                                                         │
│ INSERTION:                                              │
│ □ Clear access for tools?                               │
│ □ Top-down assembly where possible?                     │
│ □ No blind insertions?                                  │
│                                                         │
│ FIELD CONDITIONS:                                       │
│ □ Gloves-compatible for cold weather?                   │
│ □ Dirt/sand tolerant?                                   │
│ □ Minimal special tools?                                │
└─────────────────────────────────────────────────────────┘
```

**Design for Maintenance (DfMaint)**:
```
┌─────────────────────────────────────────────────────────┐
│ DfMAINT CHECKLIST                                       │
├─────────────────────────────────────────────────────────┤
│ ACCESSIBILITY:                                          │
│ □ High-wear items easily accessible?                    │
│ □ Inspection points clearly marked?                     │
│ □ Service panels adequate size?                         │
│                                                         │
│ REPLACEMENT:                                            │
│ □ Components replaceable without special tools?         │
│ □ LRU (Line Replaceable Unit) concept applied?          │
│ □ Spare parts interchangeable?                          │
│                                                         │
│ DIAGNOSTICS:                                            │
│ □ Built-in test (BIT) capability?                       │
│ □ Fault indicators visible?                             │
│ □ Test points accessible?                               │
│                                                         │
│ DOCUMENTATION:                                          │
│ □ Clear service procedures possible?                    │
│ □ Common tool requirements?                             │
│ □ Skill level appropriate for user?                     │
└─────────────────────────────────────────────────────────┘
```

**Design for Test (DfT)**:
```
┌─────────────────────────────────────────────────────────┐
│ DfT CHECKLIST                                           │
├─────────────────────────────────────────────────────────┤
│ □ Test points accessible during production?             │
│ □ Functional tests can verify all requirements?         │
│ □ Go/No-go criteria clear?                              │
│ □ Calibration procedures defined?                       │
│ □ Test equipment available/affordable?                  │
└─────────────────────────────────────────────────────────┘
```

### Bước 5: DEVELOP LAYOUT VARIANTS

**Layout Development Process**:

```
Preliminary Layout (rough)
       │
       ├─── Variant A: [Approach 1]
       ├─── Variant B: [Approach 2]
       └─── Variant C: [Approach 3]
              │
              ▼
       Evaluate variants
       (simplified VDI 2225)
              │
              ▼
       Selected Layout
              │
              ▼
       Definitive Layout
       (scale drawings, dimensions)
```

**Layout Documentation**:
```markdown
## LAYOUT VARIANT [X]

### Overall Arrangement
[Description or sketch reference]

### Key Dimensions
- Overall: L × W × H = [values]
- Weight estimate: [kg]
- Envelope check: [PASS/FAIL]

### Component Arrangement
1. [Component 1]: Location, orientation, mounting
2. [Component 2]: Location, orientation, mounting
[...]

### Interface Points
- Mechanical: [Description]
- Electrical: [Connector types, locations]
- Thermal: [Heat dissipation approach]

### Pros/Cons
+ [Advantage 1]
+ [Advantage 2]
- [Disadvantage 1]
- [Disadvantage 2]
```

### Bước 6: MATERIAL SELECTION

**Material Selection Matrix**:

| Factor | Weight | Material A | Material B | Material C |
|--------|--------|------------|------------|------------|
| Strength/weight | 0.20 | | | |
| Corrosion resist. | 0.15 | | | |
| Machinability | 0.15 | | | |
| Local availability | 0.20 | | | |
| Cost | 0.20 | | | |
| Weldability | 0.10 | | | |
| **Score** | 1.00 | | | |

**Vietnamese Material Sources**:

| Material | Supplier | Notes |
|----------|----------|-------|
| Structural steel | Nam Kim, Hòa Phát | Good availability |
| Aluminum alloy | Hòa Phát, imports | 6061, 7075 available |
| Stainless steel | Various | 304, 316 common |
| Engineering plastics | Import | Delrin, PEEK |
| Composites | Limited local | May need import |

### Bước 7: STANDARDS COMPLIANCE CHECK

**MIL-STD-810 Environmental Requirements**:

| Method | Test | Design Impact |
|--------|------|---------------|
| 501 | High temp | Material selection, ventilation |
| 502 | Low temp | Cold-start, brittle fracture |
| 507 | Humidity | Sealing, coatings |
| 509 | Salt fog | Material, finish selection |
| 510 | Sand & dust | Sealing, filtration |
| 514 | Vibration | Mounting, natural frequency |
| 516 | Shock | Structural design, retention |

**MIL-STD-461 EMC Requirements** (if applicable):

| Requirement | Description | Design Impact |
|-------------|-------------|---------------|
| RE102 | Radiated emissions | Shielding, filtering |
| RS103 | Radiated susceptibility | Shielding, grounding |
| CE102 | Conducted emissions | Filtering, isolation |

---

## 📋 LAYOUT DOCUMENTATION TEMPLATE

```markdown
# EMBODIMENT DESIGN - DEFINITIVE LAYOUT
## [Project Code]: [System Name]
### Version: [x.x] | Date: [YYYY-MM-DD]

---

## 1. LAYOUT OVERVIEW

### 1.1 Overall Dimensions
- Length: [mm] ± [tolerance]
- Width: [mm] ± [tolerance]  
- Height: [mm] ± [tolerance]
- Weight: [kg] (target) / [kg] (current estimate)

### 1.2 Layout Drawing Reference
- Drawing number: [XXX-001]
- Scale: [1:X]
- Revision: [Rev]

---

## 2. COMPONENT LIST (Preliminary BOM)

| Item | Description | Qty | Material | Source | Est. Cost |
|------|-------------|-----|----------|--------|-----------|
| 1 | | | | Local/Import | |
| 2 | | | | | |
[...]

### 2.1 Local Content Analysis
- Local components: [N] items, [X]% of cost
- Import components: [M] items, [Y]% of cost
- **Local content ratio: [Z]%** (target: 60-75%)

---

## 3. CRITICAL INTERFACES

### 3.1 Mechanical Interfaces
| Interface | Type | Specification | Drawing Ref |
|-----------|------|---------------|-------------|
| I-001 | Mounting | [Bolt pattern, load] | |
| I-002 | Connection | [Type, size] | |

### 3.2 Electrical Interfaces
| Interface | Connector | Signals | Drawing Ref |
|-----------|-----------|---------|-------------|
| E-001 | | | |

### 3.3 Thermal Interfaces
| Component | Heat Load | Dissipation Method |
|-----------|-----------|-------------------|
| | [W] | |

---

## 4. DfX COMPLIANCE

### 4.1 DfM Assessment
| Criterion | Status | Notes |
|-----------|--------|-------|
| Standard materials | ✅/⚠️/❌ | |
| Reasonable tolerances | | |
| Standard tooling | | |
| Local manufacturing | | |

### 4.2 DfA Assessment
| Criterion | Status | Notes |
|-----------|--------|-------|
| Part count optimized | | |
| Self-locating features | | |
| Top-down assembly | | |
| Field serviceable | | |

### 4.3 DfMaint Assessment
| Criterion | Status | Notes |
|-----------|--------|-------|
| Accessible wear items | | |
| Clear inspection points | | |
| Standard tools | | |

---

## 5. STANDARDS COMPLIANCE

### 5.1 MIL-STD-810 Compliance
| Method | Requirement | Design Feature | Status |
|--------|-------------|----------------|--------|
| 501/502 | Temp range | | |
| 514 | Vibration | | |
| 516 | Shock | | |

### 5.2 Other Standards
[List other applicable standards and compliance status]

---

## 6. RISK ASSESSMENT

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| | H/M/L | H/M/L | |

---

## 7. COST ESTIMATE

| Category | Estimate | Basis |
|----------|----------|-------|
| Materials | | |
| Manufacturing | | |
| Assembly | | |
| Testing | | |
| **Unit cost** | | At lot size [N] |

---

## 8. APPROVAL FOR DETAIL DESIGN

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Design Lead | | | |
| Manufacturing | | | |
| Quality | | | |
```

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **Ignoring manufacturing constraints**
   - ❌ Design features that can't be made locally
   - ✅ Consult with manufacturing early

2. **Over-specifying tolerances**
   - ❌ ±0.01mm everywhere
   - ✅ Tight tolerances only where function requires

3. **Forgetting maintenance access**
   - ❌ Battery buried behind 20 screws
   - ✅ High-service items easily accessible

4. **Thermal management neglected**
   - ❌ Electronics packed tight without airflow
   - ✅ Thermal analysis for heat-generating components

5. **Interface mismatch**
   - ❌ Designing in isolation from mating parts
   - ✅ Define interfaces early, control with ICDs

---

## 🏁 PHASE 3 EXIT CRITERIA

**Gate 3 Checklist** - Phải đạt tất cả để sang Phase 4:

- [ ] Definitive layout complete với dimensions
- [ ] All materials selected và justified
- [ ] DfM review completed (manufacturing feasible)
- [ ] DfA review completed (assembly practical)
- [ ] DfMaint review completed (maintainable in field)
- [ ] Standards compliance verified
- [ ] Preliminary cost estimate within target
- [ ] Local content ≥60%
- [ ] All critical interfaces defined
- [ ] Risks identified với mitigations

---

## 🔗 RELATED SKILLS

- `SKILL_conceptual_design.md` - Input từ Phase 2
- `SKILL_detail_design.md` - Tiếp theo Phase 3
- `scripts/cost_calculator.py` - Cost estimation

**Reference documents**:
- `references/dfx-guidelines.md`
- `references/material-selection-guide.md`
- `references/vietnamese-suppliers.md`

---

*Phase 3 determines HOW the product will be made. This is where concept becomes reality.*
*"God is in the details" - attributed to Mies van der Rohe*
