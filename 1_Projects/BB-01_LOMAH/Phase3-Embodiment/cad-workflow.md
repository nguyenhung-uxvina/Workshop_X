# CAD Workflow Skill

> **Type**: Production Skill
> **Tool**: FreeCAD MCP
> **Status**: ✅ READY

---

## Overview

Workflow for creating 3D CAD models from engineering requirements using FreeCAD MCP integration.

---

## Master Workflow

```
REQUIREMENTS → DRAWING LIST → PARTS → ASSEMBLY → EXPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Step 1: DRAWING LIST
├── Extract geometry from requirements
├── List all parts needed
├── Define part hierarchy
└── Output: [[drawing-list.md]]

Step 2: PART DRAWINGS (bản vẽ chi tiết)
├── Create each part in FreeCAD
├── Use standard naming: [ProjectCode]-[PartNum]-[Name]
├── Add dimensions, holes, features
└── Output: .FCStd files

Step 3: REVIEW & ITERATE
├── Visual check screenshots
├── Dimension verification
├── DfX review integration
└── Update as needed

Step 4: ASSEMBLY (bản vẽ lắp)
├── Position parts relative to each other
├── Check interferences
├── Verify fits and clearances
└── Output: Assembly .FCStd

Step 5: EXPORT
├── STEP files for manufacturing
├── STL for 3D printing
├── BOM generation
└── Output: Production package
```

---

## FreeCAD MCP Commands

### Create Document
```
freecad:create_document
name: "BB01-MCU-Box"
```

### Create Basic Shapes

**Box (Enclosure)**:
```
freecad:create_object
doc_name: "BB01-MCU-Box"
obj_name: "Enclosure"
obj_type: "Part::Box"
obj_properties:
  Length: 200
  Width: 150
  Height: 75
```

**Cylinder (Mounting Boss)**:
```
freecad:create_object
doc_name: "BB01-MCU-Box"
obj_name: "Boss"
obj_type: "Part::Cylinder"
obj_properties:
  Radius: 5
  Height: 10
  Placement:
    Base: {x: 10, y: 10, z: 0}
```

### Boolean Operations

**Cut (Subtract)**:
```python
# Via execute_code
import Part
base = App.ActiveDocument.Base
tool = App.ActiveDocument.Tool
cut = base.Shape.cut(tool.Shape)
Part.show(cut, "CutResult")
```

**Fuse (Add)**:
```python
# Via execute_code
import Part
obj1 = App.ActiveDocument.Obj1
obj2 = App.ActiveDocument.Obj2
fused = obj1.Shape.fuse(obj2.Shape)
Part.show(fused, "FusedResult")
```

### Get View/Screenshot
```
freecad:get_view
view_name: "Isometric"
```

### Export
```python
# Via execute_code
import Part
Part.export([App.ActiveDocument.Assembly], "/path/to/output.step")
```

---

## Standard Part Library

### Enclosures
| Type | Dimensions | Use Case |
|------|------------|----------|
| IP65 Small | 150×100×50 | Sensor box |
| IP65 Medium | 200×150×75 | MCU box |
| IP65 Large | 250×200×100 | Power box |

### Mounting
| Type | Dimensions | Use Case |
|------|------------|----------|
| L-Bracket | 30×30×3 | Wall mount |
| Standoff M3 | Ø6×10 | PCB mount |
| Cable Gland | M12×1.5 | Cable entry |

### Connectors
| Type | Cut Diameter | Panel Cutout |
|------|--------------|--------------|
| M12 4-pin | Ø12 | Ø12.5 |
| SMA | Ø6.5 | Ø6.5 |
| USB-C | 9×3.5 | 10×4 |

---

## Naming Convention

```
[Project]-[Type]-[Number]-[Name]

Project: BB01, VSMASH, MTB20
Type: DT (chi tiết), LR (lắp), SK (sketch)
Number: 001, 002, ...
Name: CamelCase English

Examples:
- BB01-DT-001-EnclosureBase
- BB01-DT-002-CoverLid
- BB01-LR-001-MCUBoxAssembly
- VSMASH-DT-001-CameraBracket
```

---

## Integration with Second Brain

### Link CAD to Requirements
```markdown
## Part: BB01-DT-001-EnclosureBase

**Requirements Traceability**:
- SF.01: IP65 → Gasket groove
- EN.01: 0-55°C → Material: ABS
- M01: [[Prototype-BOM]] → Enclosure 200×150×75

**FreeCAD Document**: BB01-DT-001-EnclosureBase.FCStd
**STEP Export**: BB01-DT-001-EnclosureBase.step
```

### Link CAD to Quality
```markdown
## DfM Review: BB01-DT-001

| Check | Status | Notes |
|-------|--------|-------|
| Wall thickness ≥2mm | ✅ | 3mm used |
| Draft angle ≥1° | ✅ | 2° applied |
| Uniform wall | ✅ | Constant 3mm |
| Radius on corners | ✅ | R2 internal |
```

---

## Quick Start Template

```markdown
# Drawing List: [Project Name]

## 1. Part Drawings (Bản vẽ chi tiết)

| # | Part ID | Name | Material | Dimensions |
|---|---------|------|----------|------------|
| 1 | DT-001 | [Name] | [Material] | L×W×H |
| 2 | DT-002 | [Name] | [Material] | L×W×H |

## 2. Assembly Drawings (Bản vẽ lắp)

| # | Assy ID | Name | Parts Included |
|---|---------|------|----------------|
| 1 | LR-001 | [Name] | DT-001, DT-002 |

## 3. Modeling Order

1. DT-001 → Base part
2. DT-002 → Dependent on DT-001
3. LR-001 → After all parts complete
```

---

## References

- [[Prototype-BOM]] - Parts to model
- [[DfX-Review-MCU-Box]] - Design requirements
- [[Gate-2-Ready]] - Quality baseline

---

*CAD workflow integrated with Second Brain*
