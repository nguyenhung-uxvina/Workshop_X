---
name: cad-documentation-generator
description: >
  Tự động tạo tài liệu kỹ thuật từ CAD models cho sản phẩm quốc phòng/an ninh.
  Input từ FreeCAD (MCP), STEP files, mô tả text. Output gồm 6 loại: 2D Technical
  Drawing (từ 3D model với dimensions, GD&T, notes), Drawing List, Part Specs,
  BOM, Assembly Instructions, Inspection Checklist. Theo chuẩn ISO, tiếng Việt.
  Tích hợp với cad-visualization-freecad và cad-review-automation. Triggers: tạo
  bản vẽ 2D, generate 2D drawing, xuất bản vẽ kỹ thuật, tạo bản vẽ từ 3D, 2D
  views, bản vẽ chi tiết, bản vẽ lắp, generate BOM, tạo specs, danh mục bản vẽ,
  technical documentation, tài liệu kỹ thuật, inspection checklist.
---

# CAD Documentation Generator

Tạo tài liệu kỹ thuật và bản vẽ 2D từ CAD models.

## Workflow

```
3D MODEL → 2D VIEWS → DIMENSIONS → ANNOTATIONS → TITLE BLOCK → OUTPUT
```

| Input | Document Types | Output |
|-------|----------------|--------|
| FreeCAD model | **2D Technical Drawing** | PDF/DXF |
| STEP file | Drawing List | Markdown |
| Text description | Part Specs, BOM | DOCX/XLSX |
| | Assembly Instructions | |
| | Inspection Checklist | |

---

## Quick Start

**2D Drawing từ 3D:**
```
Tạo bản vẽ 2D cho [chi tiết] với:
- 3 hình chiếu (Front, Top, Right)
- Đầy đủ kích thước
- Dung sai theo ISO 2768-mK
```

**Full documentation:**
```
Tạo tài liệu kỹ thuật đầy đủ cho [assembly]:
- Bản vẽ 2D các chi tiết
- BOM, Specs, Assembly instructions
```

---

## Document Types

| # | Document | Command | Output |
|---|----------|---------|--------|
| **1** | **2D Technical Drawing** | `tạo bản vẽ 2D` | PDF/DXF |
| 2 | Drawing List | `tạo danh mục bản vẽ` | MD |
| 3 | Part Specs | `tạo specs` | MD/DOCX |
| 4 | BOM | `tạo BOM` | MD/XLSX |
| 5 | Assembly Instructions | `tạo hướng dẫn lắp` | MD |
| 6 | Inspection Checklist | `tạo inspection` | MD/XLSX |

---

## 2D Technical Drawing (NEW)

### Workflow: 3D → 2D

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  3D Model   │ →  │  2D Views   │ →  │  Annotate   │
│  (FreeCAD)  │    │  (Project)  │    │  (Dim/GD&T) │
└─────────────┘    └─────────────┘    └─────────────┘
                          │
                          ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Title Block │ ←  │   Notes     │ ←  │  Sections   │
│  (ISO 7200) │    │ (Material)  │    │  (Details)  │
└─────────────┘    └─────────────┘    └─────────────┘
```

### View Types

| View | Use | Projection |
|------|-----|------------|
| **Front** | Main view, most detail | Primary |
| **Top** | Plan view, hole patterns | From above |
| **Right** | Side profile, thickness | From right |
| **Isometric** | 3D overview (optional) | ISO 30° |
| **Section A-A** | Internal features | Cut view |
| **Detail B** | Zoom critical features | 2:1 scale |

### Standard Views Layout (A4)

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│   ┌──────────┐          ┌──────────┐                  │
│   │          │          │          │                  │
│   │   TOP    │          │  FRONT   │                  │
│   │          │          │          │                  │
│   └──────────┘          └──────────┘                  │
│                                                        │
│   ┌──────────┐          ┌──────────┐                  │
│   │          │          │   ISO    │                  │
│   │  RIGHT   │          │  (opt)   │                  │
│   │          │          │          │                  │
│   └──────────┘          └──────────┘                  │
│                                                        │
│   ┌─────────────────────────────────────────────────┐ │
│   │              TITLE BLOCK (ISO 7200)             │ │
│   └─────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

### Dimensioning Rules

| Rule | Standard | Example |
|------|----------|---------|
| Overall dimensions | Always | 80, 60, 5 |
| Feature locations | From datum | 20 from edge |
| Hole sizes | Ø + tolerance | Ø4.2 H7 |
| Fillets/Chamfers | R or C | R3, C0.5×45° |
| General tolerance | ISO 2768 | ISO 2768-mK |

### GD&T Symbols (Common)

| Symbol | Meaning | Use |
|--------|---------|-----|
| ⌖ | Position | Hole patterns |
| ⏥ | Flatness | Mating surfaces |
| ⟂ | Perpendicularity | Walls, bosses |
| ∥ | Parallelism | Parallel faces |
| ⌓ | Concentricity | Cylindrical features |

---

## Example: Complete 2D Drawing

### Input
```
Tạo bản vẽ 2D chi tiết cho DT-001 Đế gá:
- Kích thước: 80×60×5mm
- 4 lỗ M4 pattern 60×40mm, cách mép 10mm
- Fillet R3 góc trong
- Vật liệu: Al 6061-T6
- Xử lý: Anodize đen
```

### Output: 2D Drawing

```
┌──────────────────────────────────────────────────────────────┐
│  TOP VIEW                                                    │
│                                                              │
│       10    ←─── 60 ───→    10                              │
│    ┌──┬─────────────────────┬──┐                            │
│    │  │  ○         ○        │  │  ↑                         │
│ 10 │  │                     │  │  │                         │
│    │  │       ┌───┐         │  │  40                        │
│    │  │       │   │         │  │  │                         │
│ 10 │  │  ○    └───┘    ○    │  │  ↓                         │
│    └──┴─────────────────────┴──┘                            │
│    ←──────────── 80 ────────────→                           │
│                                                              │
│    4× Ø4.2 H7 ↧5                                            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  FRONT VIEW                          SECTION A-A            │
│                                                              │
│    ┌────────────────────────┐       ┌────────────────┐      │
│    │████████████████████████│       │▓▓▓▓│    │▓▓▓▓│      │
│    └────────────────────────┘       └────┴────┴────┘      │
│    ←────────── 80 ──────────→              R3              │
│              ↕ 5                                            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  NOTES:                                                      │
│  1. Material: Al 6061-T6                                     │
│  2. General tolerance: ISO 2768-mK                           │
│  3. Surface finish: Ra 3.2 unless noted                      │
│  4. Surface treatment: Anodize Type II, Black, 15-20μm       │
│  5. Break all sharp edges 0.3 max                            │
│  6. All dimensions in mm                                     │
├──────────────────────────────────────────────────────────────┤
│ [LOGO] │ COMPANY NAME        │ Đế gá            │DT-001│ A │
│        │ Project: BB-01      │──────────────────┼──────┼───│
│        │ Design: NVH  Date   │ Scale: 1:1  A4   │ 1/1      │
└──────────────────────────────────────────────────────────────┘
```

### FreeCAD MCP Commands

```python
# 1. Create TechDraw Page
page = doc.addObject('TechDraw::DrawPage', 'DT001_Drawing')
template = doc.addObject('TechDraw::DrawSVGTemplate', 'Template')
template.Template = 'A4_Landscape_ISO7200.svg'
page.Template = template

# 2. Add Views
front = doc.addObject('TechDraw::DrawViewPart', 'FrontView')
front.Source = [body]
front.Direction = FreeCAD.Vector(0, 0, 1)
front.Scale = 1.0
page.addView(front)

top = doc.addObject('TechDraw::DrawViewPart', 'TopView')
top.Source = [body]
top.Direction = FreeCAD.Vector(0, -1, 0)
page.addView(top)

# 3. Add Dimensions
dim1 = doc.addObject('TechDraw::DrawViewDimension', 'Length')
dim1.Type = 'Distance'
dim1.References2D = [(front, 'Edge1'), (front, 'Edge3')]

# 4. Export
page.exportPdf('DT-001_Drawing.pdf')
page.exportDxf('DT-001_Drawing.dxf')
```

---

## Drawing Notes Templates

### Standard Notes Block

```
NOTES:
1. Material: [Material spec]
2. General tolerance: ISO 2768-mK
3. Surface finish: Ra [X] unless noted
4. Surface treatment: [Treatment]
5. Break all sharp edges [X] max
6. All dimensions in mm
7. Third angle projection
```

### DfX Notes (từ review)

```
DfX REQUIREMENTS:
• Min internal radius: R3 (DfM)
• Min edge distance for holes: 2.5×Ø (DfM)
• Chamfer all hole entries C0.5 (DfA)
```

---

## Integration Pipeline

```
cad-visualization-freecad → 3D Model
         │
         ├──→ cad-review-automation → DfX Notes
         │              │
         ▼              ▼
cad-documentation-generator
         │
         ├──→ 2D Drawing (với DfX notes)
         ├──→ Part Specs
         ├──→ BOM
         └──→ Inspection Checklist
```

---

## Output Formats

| Document | Formats | Best For |
|----------|---------|----------|
| 2D Drawing | **PDF**, DXF | Print, CAM |
| Drawing List | MD, DOCX | Index |
| Part Specs | MD, DOCX | Review |
| BOM | MD, **XLSX** | Procurement |
| Assembly | MD, DOCX | Workshop |
| Inspection | MD, **XLSX** | QC |

---

## FreeCAD Script Usage

### Quick 2D Drawing
```python
# In FreeCAD Python console
exec(open('/path/to/freecad_2d_drawing.py').read())

# Generate drawing
result = quick_drawing('Body')
# Output: {page_name, pdf_path, dxf_path}
```

### Full Drawing với Config
```python
config = {
    'material': 'Al 7075-T6',
    'surface_treatment': 'Anodize Black',
    'company': 'Workshop X',
    'project': 'BB-01',
    'views': {
        'front': True, 'top': True, 
        'right': True, 'isometric': True,
        'section': True
    }
}
result = generate_2d_drawing('DT_001', config)
```

### Batch Processing
```python
parts = ['DT_001', 'DT_002', 'DT_003']
results = generate_drawing_set(parts, {'material': 'Al 6061'})
```

---

## References

Load khi cần chi tiết:

- **FreeCAD Script**: [scripts/freecad_2d_drawing.py](scripts/freecad_2d_drawing.py)
  - `generate_2d_drawing()` - Full featured
  - `quick_drawing()` - Minimal config
  - `detail_drawing()` - With sections
  - `generate_drawing_set()` - Batch

- **2D Drawing guide**: [references/2d-drawing-guide.md](references/2d-drawing-guide.md)
  - View projection rules (ISO/ANSI)
  - Dimensioning standards
  - GD&T symbols & usage
  - Section & detail views

- **Document templates**: [references/document-templates.md](references/document-templates.md)
  - Drawing List, Part Specs, BOM
  - Assembly Instructions, Inspection
  - Title Block (ISO 7200)

- **Hardware catalog**: [references/hardware-catalog.md](references/hardware-catalog.md)
  - Fasteners, torque tables
