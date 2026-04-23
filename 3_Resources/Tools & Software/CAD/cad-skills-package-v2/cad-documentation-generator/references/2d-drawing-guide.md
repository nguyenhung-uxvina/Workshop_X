# 2D Technical Drawing Guide

Hướng dẫn tạo bản vẽ 2D từ model 3D theo chuẩn ISO.

## Table of Contents
1. [View Projection](#1-view-projection)
2. [Dimensioning](#2-dimensioning)
3. [GD&T (Geometric Tolerancing)](#3-gdt-geometric-tolerancing)
4. [Sections & Details](#4-sections--details)
5. [Notes & Annotations](#5-notes--annotations)
6. [FreeCAD TechDraw Commands](#6-freecad-techdraw-commands)
7. [Drawing Checklist](#7-drawing-checklist)

---

## 1. View Projection

### First Angle vs Third Angle

| Standard | Region | Symbol |
|----------|--------|--------|
| First Angle | EU, Asia | ⊕ |
| Third Angle | US, Canada | ⊖ |

**Default**: Third Angle (phổ biến hơn trong manufacturing)

### Standard Views

```
Third Angle Projection Layout:

        ┌─────────┐
        │   TOP   │
        └─────────┘
             │
┌─────────┐  │  ┌─────────┐
│  LEFT   │──┼──│  FRONT  │──── ┌─────────┐
└─────────┘  │  └─────────┘     │  RIGHT  │
             │                   └─────────┘
        ┌─────────┐
        │ BOTTOM  │
        └─────────┘
```

### View Selection Rules

| Part Type | Required Views | Optional |
|-----------|----------------|----------|
| Flat plate | Front + Top | - |
| Box/Housing | Front + Top + Right | Section |
| Cylindrical | Front + End | Section |
| Complex | Front + Top + Right + ISO | Sections, Details |

### View Alignment

```
                    ┌────────┐
                    │  TOP   │
                    └────────┘
                         │ (aligned vertically)
                         ▼
┌────────┐          ┌────────┐          ┌────────┐
│  LEFT  │ ←─────── │ FRONT  │ ───────→ │ RIGHT  │
└────────┘ (aligned └────────┘ (aligned └────────┘
            horizontally)       horizontally)
```

### Scale Selection

| Part Size | Scale | Use |
|-----------|-------|-----|
| < 50mm | 2:1, 5:1 | Small details |
| 50-200mm | 1:1 | Standard |
| 200-500mm | 1:2 | Medium parts |
| > 500mm | 1:5, 1:10 | Large parts |

---

## 2. Dimensioning

### Dimension Types

| Type | Symbol | Example | Use |
|------|--------|---------|-----|
| Linear | — | 80 | Length, width |
| Diameter | Ø | Ø4.2 | Holes, shafts |
| Radius | R | R3 | Fillets, arcs |
| Chamfer | C or × | C0.5×45° | Chamfers |
| Angle | ° | 45° | Angles |
| Square | □ | □10 | Square features |

### Dimensioning Rules

**Rule 1: Overall dimensions first**
```
┌─────────────────────────────┐
│                             │
│      ←────── 80 ──────→     │
│  ↑                          │
│  │                          │
│  60                         │
│  │                          │
│  ↓                          │
└─────────────────────────────┘
```

**Rule 2: From datum/reference**
```
         Datum A
            │
┌───────────┼───────────┐
│     10    │    10     │
│   ○───────┼───────○   │
│           │           │
└───────────┴───────────┘
```

**Rule 3: Don't double-dimension**
```
WRONG:                  CORRECT:
←── 30 ──→              ←── 30 ──→
←── 80 ────────→        ←──────── 80 ────────→
     ←── 50 ──→         (50 không cần vì 80-30=50)
```

### Tolerance Notation

| Method | Format | Example |
|--------|--------|---------|
| Bilateral equal | ±X | 80±0.1 |
| Bilateral unequal | +X/-Y | 80 +0.2/-0.1 |
| Limit | max/min | 80.1/79.9 |
| Fit | ØX HY/hY | Ø4.2 H7 |

### ISO 2768 General Tolerances

**ISO 2768-mK** (Medium precision):

| Range (mm) | Linear (±) | Angular (±) |
|------------|------------|-------------|
| 0.5-3 | 0.1 | 1° |
| 3-6 | 0.1 | 0°30' |
| 6-30 | 0.2 | 0°20' |
| 30-120 | 0.3 | 0°10' |
| 120-400 | 0.5 | 0°5' |

---

## 3. GD&T (Geometric Tolerancing)

### Common Symbols

| Symbol | Name | Use |
|--------|------|-----|
| ⊖ | Flatness | Mating surfaces |
| ⊙ | Circularity | Shafts, bores |
| ⌓ | Cylindricity | Precision bores |
| ═ | Straightness | Long features |
| ∥ | Parallelism | Parallel faces |
| ⟂ | Perpendicularity | 90° features |
| ∠ | Angularity | Angled faces |
| ⌖ | Position | Hole patterns |
| ⊚ | Concentricity | Coaxial features |
| ↗ | Runout | Rotating parts |

### Feature Control Frame

```
┌────┬───────┬─────┬─────┐
│ ⌖  │ Ø0.1  │  A  │  B  │
└────┴───────┴─────┴─────┘
  │      │      │     │
  │      │      │     └── Secondary datum
  │      │      └── Primary datum
  │      └── Tolerance value
  └── Geometric symbol
```

### Common Applications

**Hole Pattern Positioning**:
```
     ┌────┬───────┬─────┬─────┐
4× Ø4.2 H7  │ ⌖  │ Ø0.2  │  A  │  B  │
     └────┴───────┴─────┴─────┘
```

**Flatness for Mating Surface**:
```
┌────┬───────┐
│ ⊖  │ 0.05  │
└────┴───────┘
```

**Perpendicularity for Wall**:
```
┌────┬───────┬─────┐
│ ⟂  │ 0.1   │  A  │
└────┴───────┴─────┘
```

---

## 4. Sections & Details

### Section Types

| Type | Use | Symbol |
|------|-----|--------|
| Full Section | Show internal completely | A-A |
| Half Section | Symmetrical parts | A-A |
| Offset Section | Multiple features | A-A (stepped) |
| Removed Section | Cross-section shape | A-A |
| Broken-out | Local internal feature | - |

### Section Notation

```
CUTTING PLANE:
                A
                │
        ┌───────┼───────┐
        │       │       │
        │   ○   │   ○   │
        │       │       │
        └───────┼───────┘
                │
                A
                ↓

SECTION VIEW:
        SECTION A-A
        ┌───────────────┐
        │▓▓▓│     │▓▓▓│
        │▓▓▓│     │▓▓▓│
        └───┴─────┴───┘
```

### Hatching Patterns

| Material | Pattern |
|----------|---------|
| Metal (general) | 45° lines |
| Steel | 45° lines |
| Aluminum | 45° lines, wide spacing |
| Plastic | 45° lines + dots |
| Rubber | 45° crossing lines |

### Detail Views

```
MAIN VIEW:
        ┌──────────────────┐
        │            ┌───┐ │
        │            │ B │ │ ← Detail circle
        │            └───┘ │
        └──────────────────┘

DETAIL B (2:1):
        ┌─────────────┐
        │    R0.5     │
        │  ┌───────┐  │
        │  │ C0.3  │  │
        │  └───────┘  │
        └─────────────┘
```

---

## 5. Notes & Annotations

### Standard Notes Block

```
NOTES:
1. MATERIAL: Al 6061-T6 PER AMS 4027
2. GENERAL TOLERANCE: ISO 2768-mK
3. SURFACE FINISH: Ra 3.2 UNLESS NOTED
4. SURFACE TREATMENT: ANODIZE TYPE II, BLACK, 15-20μm
5. BREAK ALL SHARP EDGES 0.3 MAX
6. ALL DIMENSIONS IN MM
7. THIRD ANGLE PROJECTION
8. DO NOT SCALE DRAWING
```

### DfX Notes (từ cad-review-automation)

```
DfX REQUIREMENTS:
• MIN INTERNAL FILLET: R3 (DfM - CNC TOOL ACCESS)
• MIN HOLE EDGE DISTANCE: 2.5×Ø (DfM)
• CHAMFER ALL HOLE ENTRIES: C0.5 (DfA)
• STRESS RELIEF FILLET AT BASE: R≥0.1t (DfR)
```

### Surface Finish Symbols

| Symbol | Ra (μm) | Process |
|--------|---------|---------|
| ▽ | 12.5 | Rough machining |
| ▽▽ | 3.2 | Standard machining |
| ▽▽▽ | 1.6 | Fine machining |
| ▽▽▽▽ | 0.8 | Grinding |

### Surface Treatment Notes

```
SURFACE TREATMENT TABLE:
┌─────────────┬───────────────────────────────┐
│ Treatment   │ Specification                 │
├─────────────┼───────────────────────────────┤
│ Anodize     │ Type II, 15-20μm, Black       │
│ Passivate   │ Per MIL-DTL-5541, Class 3     │
│ Powder Coat │ 60-80μm, RAL 9005             │
│ Zinc Plate  │ Per ASTM B633, Class Fe/Zn 8  │
└─────────────┴───────────────────────────────┘
```

---

## 6. FreeCAD TechDraw Commands

### Create Drawing Page

```python
import FreeCAD
import TechDraw

doc = FreeCAD.ActiveDocument
body = doc.getObject('Body')

# Create page with template
page = doc.addObject('TechDraw::DrawPage', 'Page')
template = doc.addObject('TechDraw::DrawSVGTemplate', 'Template')
template.Template = '/path/to/A4_ISO7200.svg'
page.Template = template
```

### Add Orthographic Views

```python
# Front View (primary)
front = doc.addObject('TechDraw::DrawViewPart', 'FrontView')
front.Source = [body]
front.Direction = FreeCAD.Vector(0, 0, 1)  # Looking at XY plane
front.Scale = 1.0
front.X = 150  # Position on page
front.Y = 150
page.addView(front)

# Top View
top = doc.addObject('TechDraw::DrawViewPart', 'TopView')
top.Source = [body]
top.Direction = FreeCAD.Vector(0, -1, 0)  # Looking down
top.Scale = 1.0
top.X = 150
top.Y = 220
page.addView(top)

# Right View
right = doc.addObject('TechDraw::DrawViewPart', 'RightView')
right.Source = [body]
right.Direction = FreeCAD.Vector(-1, 0, 0)  # Looking from right
right.Scale = 1.0
right.X = 230
right.Y = 150
page.addView(right)

# Isometric View (optional)
iso = doc.addObject('TechDraw::DrawViewPart', 'IsoView')
iso.Source = [body]
iso.Direction = FreeCAD.Vector(1, 1, 1)
iso.Scale = 0.7
iso.X = 230
iso.Y = 220
page.addView(iso)
```

### Add Dimensions

```python
# Length dimension
dim_length = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Length')
dim_length.Type = 'DistanceX'
dim_length.References2D = [(front, 'Edge1'), (front, 'Edge3')]
dim_length.FormatSpec = '%.1f'  # 1 decimal
page.addView(dim_length)

# Diameter dimension
dim_dia = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Hole')
dim_dia.Type = 'Diameter'
dim_dia.References2D = [(top, 'Edge10')]
dim_dia.FormatSpec = 'Ø%.1f H7'
page.addView(dim_dia)

# Radius dimension
dim_rad = doc.addObject('TechDraw::DrawViewDimension', 'Dim_Fillet')
dim_rad.Type = 'Radius'
dim_rad.References2D = [(front, 'Edge5')]
dim_rad.FormatSpec = 'R%.0f'
page.addView(dim_rad)
```

### Add Section View

```python
# Section A-A
section = doc.addObject('TechDraw::DrawViewSection', 'SectionAA')
section.BaseView = front
section.Source = [body]
section.SectionNormal = FreeCAD.Vector(0, 1, 0)
section.SectionOrigin = FreeCAD.Vector(0, 0, 0)
section.Scale = 1.0
section.X = 280
section.Y = 150
page.addView(section)
```

### Add Annotations

```python
# Add note annotation
note = doc.addObject('TechDraw::DrawViewAnnotation', 'Notes')
note.Text = ['NOTES:', 
             '1. MATERIAL: Al 6061-T6',
             '2. TOLERANCE: ISO 2768-mK',
             '3. FINISH: Ra 3.2']
note.X = 20
note.Y = 50
note.TextSize = 3.0
page.addView(note)

# Add balloon/leader
balloon = doc.addObject('TechDraw::DrawViewBalloon', 'Balloon1')
balloon.SourceView = front
balloon.OriginX = 100
balloon.OriginY = 100
balloon.Text = '1'
page.addView(balloon)
```

### Export Drawing

```python
# Export to PDF
import TechDrawGui
TechDrawGui.exportPageAsPdf(page, '/path/to/output.pdf')

# Export to DXF
import importDXF
importDXF.export([page], '/path/to/output.dxf')

# Export to SVG
TechDrawGui.exportPageAsSvg(page, '/path/to/output.svg')
```

---

## 7. Drawing Checklist

### Before Release

**Views**
- [ ] Sufficient views to define part
- [ ] Views properly aligned
- [ ] Scale appropriate and noted
- [ ] Hidden lines shown where needed

**Dimensions**
- [ ] All features dimensioned
- [ ] No duplicate dimensions
- [ ] Dimensions from datums
- [ ] Tolerances specified
- [ ] ISO 2768 noted for general tolerance

**Annotations**
- [ ] Material specified
- [ ] Surface finish specified
- [ ] Surface treatment specified
- [ ] Break edges note included
- [ ] Projection symbol shown

**Title Block**
- [ ] Part name correct
- [ ] Part number correct
- [ ] Revision correct
- [ ] Scale noted
- [ ] Drawn by / Date filled
- [ ] Approved by / Date filled

**Quality**
- [ ] Drawing clean, no extra lines
- [ ] Text readable (min 2.5mm)
- [ ] Dimensions don't overlap
- [ ] Leaders don't cross
