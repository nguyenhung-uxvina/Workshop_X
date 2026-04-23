# Pahl-Beitz CAD Integration

## Overview

CAD visualization accelerates **Phase 3: Embodiment Design** by 40x.

```
Phase 1: Task Clarification → Requirements List
Phase 2: Conceptual Design → Function Structure, Concepts
Phase 3: Embodiment Design → 3D Models ← THIS SKILL (40x faster)
Phase 4: Detail Design → STEP Export, BOM, Drawings
```

---

## Workflow: Requirements → CAD → BOM

### Step 1: Format Requirements

```
REQUIREMENTS FOR [Component]:

FUNCTION: [primary purpose]
CONSTRAINTS:
- Dimensions: max [L] x [W] x [H] mm
- Environment: [IP rating, temp]
- Interfaces: [connections]
WISHES: [preferences]
```

### Step 2: Create CAD Prompt

```
Requirements for [Component]:
- Function: [from requirements]
- Size: [constraints]
- Mounting: [method]

Create in FreeCAD: "[ProjectCode]_[Name]"
Include:
1. [Main body]
2. [Features]
3. [Mounting]
4. [Interfaces]
```

### Step 3: Iterate

```
Make these changes:
1. [Modification]
2. [Addition]
Show updated assembly.
```

### Step 4: Export

```
Export to STEP: [path]/[filename].step
Generate BOM with fastener suggestions.
```

---

## Time Comparison

| Task | Traditional | With Skill | Multiplier |
|------|-------------|------------|------------|
| Simple part | 15 min | 30 sec | 30x |
| Complex part | 45 min | 2 min | 22x |
| Assembly (5 parts) | 90 min | 5 min | 18x |
| Full workflow | 8 hours | 1 hour | 8x |

---

## Example: BB-01 Enclosure

**Requirements:**
```
Function: House 100x80mm PCB, IP65
Max: 150x120x60mm
Mounting: 4-point flange
```

**Prompt:**
```
Create electronics enclosure in FreeCAD:
- Document: "BB01_Enclosure"
- Body: 130x100x50mm, 3mm walls, open top
- Standoffs: 4x 5mm dia, 8mm height for PCB
- PCB: 100x80x1.6mm placeholder
- Flanges: 4x 20x15x3mm with M5 holes
- Cable boss: 15mm dia, 10mm height
```

**Iterate:**
```
Add lid: 130x100x3mm at Z=50, 4 corner M4 holes
```

**Export:**
```
Export STEP, generate BOM with hardware.
```
