# Iteration Patterns & FreeCAD Commands

Patterns cho cải tiến thiết kế và lệnh FreeCAD tương ứng.

## Table of Contents
1. [DfX Fix Patterns](#1-dfx-fix-patterns)
2. [Performance Optimization](#2-performance-optimization)
3. [Cost Optimization](#3-cost-optimization)
4. [FreeCAD Execution Commands](#4-freecad-execution-commands)

---

## 1. DfX Fix Patterns

### DfM-FIX-001: Góc trong R=0

**Problem**: Không gia công được CNC
**Solution**: Fillet R = tool_dia / 2

| Dao Ø | R min |
|-------|-------|
| 6mm | R3 |
| 8mm | R4 |
| 10mm | R5 |

**FreeCAD**:
```
1. Select internal edges
2. Part Design → Fillet
3. Radius = tool_diameter / 2
```

**Alternatives**:
- Dog-bone relief (giữ góc vuông)
- T-bone relief (aesthetic hơn)

---

### DfM-FIX-002: Lỗ quá gần mép

**Problem**: Lỗ cách mép < 2×diameter → vỡ mép
**Solution**: Dời lỗ ra xa: distance ≥ 2.5 × Ø

| Lỗ | Min cách mép |
|----|--------------|
| M3 | 8mm |
| M4 | 10mm |
| M5 | 13mm |
| M6 | 15mm |

**FreeCAD**:
```
1. Edit Sketch chứa lỗ
2. Modify position constraint
3. Close & Recompute
```

---

### DfM-FIX-003: Thành quá mỏng

**Problem**: Wall < 1.5mm (CNC) → rung, biến dạng
**Solution**: Tăng thickness hoặc thêm ribs

| Method | Min wall |
|--------|----------|
| CNC Mill | 1.5mm |
| CNC Turn | 1.0mm |
| Die Cast | 2.0mm |

**FreeCAD**:
```
1. Edit Pocket depth hoặc Pad thickness
2. Recompute
```

---

### DfA-FIX-001: Thiếu chamfer

**Problem**: Khó đưa vít/pin vào lỗ
**Solution**: Chamfer C0.5-C1 tại entry

**FreeCAD**:
```
1. Select hole top edges
2. Part Design → Chamfer
3. Size = 0.5-1.0mm, Angle = 45°
```

---

### DfR-FIX-001: Stress concentration

**Problem**: Góc nhọn tại vùng chịu lực → nứt
**Solution**: Fillet R ≥ 0.1 × thickness

**FreeCAD**:
```
1. Identify stress points
2. Add Fillet R = 0.1 × local_thickness
```

---

## 2. Performance Optimization

### WEIGHT-001: Pocket/Cavity

**Goal**: Giảm 20-50% weight
**Where**: Vùng không chịu lực, solid blocks

**Guidelines**:
- Wall remain ≥ 2mm
- Corner R ≥ 3mm
- Depth ≤ 4 × tool Ø

**FreeCAD**:
```
1. Sketch on face cần pocket
2. Draw shape với offset từ edges
3. Part Design → Pocket
4. Depth = total - wall_thickness
5. Add Fillet to corners
```

```
Before:          After:
┌──────────┐     ┌──────────┐
│██████████│     │██      ██│
│██████████│  →  │██      ██│
│██████████│     │██████████│
└──────────┘     └──────────┘
```

---

### WEIGHT-002: Lightening Holes

**Goal**: Giảm 10-30% weight
**Where**: Flat plates, webs, non-structural

**Guidelines**:
- Hole Ø ≤ 0.6 × width
- Edge distance ≥ 2 × Ø
- Pattern: hex hoặc grid

---

### STIFF-001: Add Ribs

**Goal**: Tăng stiffness 2-5x
**Guidelines**:
- Rib height ≤ 3 × wall
- Rib thickness = 0.5-0.7 × wall
- Fillet at base

**FreeCAD**:
```
1. Sketch rib profile
2. Part Design → Pad
3. Add Fillet at base
```

```
Before:          After:
────────────     ────────────
                     │   │
              →  ────┴───┴────
```

---

### STIFF-002: Add Gussets

**Goal**: Strengthen L/T joints
**Guidelines**: 45° triangle, leg = 1-2 × thickness

```
Before:     After:
│           │
│        →  │╲
└────       └─╲────
```

---

## 3. Cost Optimization

### COST-001: Simplify Geometry

| Remove | Savings |
|--------|---------|
| 1 pocket | 5-10 min |
| Non-critical fillet | 2-5 min |
| Tight tolerance | 10-20% |

---

### COST-002: Standard Sizes

| Feature | Standard |
|---------|----------|
| Holes | M3, M4, M5, M6 |
| Fillets | R1, R2, R3, R5 |
| Chamfers | C0.5, C1, C2 |
| Plate thickness | 3, 4, 5, 6, 8, 10mm |

---

### COST-003: Design for 1-2 Setup

**Guidelines**:
- Features từ 1-2 directions
- Avoid undercuts
- Flat bottom pockets
- Through holes preferred

---

## 4. FreeCAD Execution Commands

### Common Operations

| Action | FreeCAD Steps |
|--------|---------------|
| **Add Fillet** | Select edges → Part Design → Fillet → Set R |
| **Add Chamfer** | Select edges → Part Design → Chamfer → Set size |
| **Move Hole** | Edit Sketch → Modify constraint → Close |
| **Change Dimension** | Edit Sketch → Double-click constraint → New value |
| **Add Pocket** | New Sketch → Draw → Part Design → Pocket |
| **Add Rib/Pad** | New Sketch → Draw profile → Part Design → Pad |

### Execution Pattern

```python
# Standard iteration flow
1. Open document: Doc = App.openDocument("Part_RevA.FCStd")
2. For each change:
   a. Locate feature: feat = Doc.getObject("Pocket001")
   b. Modify: feat.Radius = 3  # or edit sketch
   c. Recompute: Doc.recompute()
3. Save new revision: Doc.saveAs("Part_RevB.FCStd")
4. Export: Part.export([body], "Part_RevB.step")
```

### Sketch Editing Pattern

```python
# Move hole position
1. sketch = Doc.getObject("HoleSketch")
2. Edit sketch constraints:
   - Find constraint by name/index
   - Modify value
3. Close sketch
4. Recompute all
```

---

## 5. Quick Decision Guide

### Priority Order

1. **DfX HIGH** - Fix first, mandatory
2. **DfX MEDIUM** - Fix if possible
3. **Performance** - If requirements not met
4. **Cost** - After function OK

### Change Impact Quick Ref

| Change | Weight | Cost | Strength |
|--------|--------|------|----------|
| Add fillet | ≈ | + | + |
| Add pocket | - | + | - |
| Add rib | + | + | + |
| Thicker wall | + | + | + |

Legend: + increase, - decrease, ≈ no change

---

## 6. Output Templates

### Proposal Template

```markdown
## ĐỀ XUẤT CẢI TIẾN - [Part] Rev [X]→[Y]

### Summary
| Metric | Value |
|--------|-------|
| Proposals | X |
| DfX fixed | X/X |
| Weight Δ | ±X% |

### Proposals

#### #1: [Name] ⭐ RECOMMENDED
- Type: DfX Fix | Priority: 🔴
- Before: [value] | After: [value]
- Impact: [description]
- Trade-off: [if any]

#### #2: [Name]
...

### Recommendation
Thực hiện: #1, #2 (bắt buộc)
Optional: #3

Reply: "Thực hiện #1, #2" hoặc chọn khác
```

### Change Log Template

```markdown
## CHANGE LOG - [Part] Rev [X]→[Y]

| # | Change | Reason | Date |
|---|--------|--------|------|
| 1 | [desc] | [DfX code] | [date] |

### Comparison
| Param | Rev X | Rev Y | Δ |
|-------|-------|-------|---|
| [name] | [old] | [new] | [diff] |

### DfX Score
| Cat | Before | After |
|-----|--------|-------|
| DfM | 🔴 X | ✅ 0 |
```
