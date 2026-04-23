# BB-01 CAD Pattern Map

> **Purpose**: Quick reference for mapping BB-01 parts to FreeCAD prompts
> **Status**: 🔄 IN USE
> **Updated**: Day 8

---

## Quick Start Prompts

### Group A: Enclosure (Create together)

#### A1. DT-001 Enclosure Base

```
Create an enclosure base in FreeCAD:
- Document name: "BB01-DT-001-EnclosureBase"
- Outer box: 200 × 150 × 50 mm
- Wall thickness: 3mm, hollow inside via boolean cut
- Open top

Features to add:
- 4× screw boss: cylinder r=4mm h=8mm at corners (10mm from edges)
- 4× M3 hole: Ø4.2mm in each boss
- Gasket groove: frame 2mm wide × 2mm deep, 3mm from top edge
- 3× cable holes: Ø12.5mm on 150mm side at Y=25, 75, 125
```

#### A2. DT-002 Enclosure Lid

```
Create an enclosure lid in FreeCAD:
- Document name: "BB01-DT-002-EnclosureLid"
- Outer box: 200 × 150 × 25 mm
- Wall thickness: 3mm, hollow, open bottom

Features:
- Lip: box 196 × 146 × 5 mm extending down (fits in gasket groove)
- 4× M3 clearance holes: Ø3.2mm at corners, 10mm from edge
- 1× SMA hole: Ø6.5mm centered on 200mm side
```

#### A3. DT-003 Gasket

```
Create a gasket frame in FreeCAD:
- Document name: "BB01-DT-003-Gasket"
- Outer rectangle: 196 × 146 mm
- Inner rectangle (cut out): 190 × 140 mm
- Thickness: 3mm
- Color: gray (silicone)
```

---

### Group B: Internal Components

#### B1. DT-004 PCB Mount Plate ⭐ START HERE

```
Create a mounting plate in FreeCAD:
- Document name: "BB01-DT-004-PCBMountPlate"
- Plate: 180 × 130 × 2 mm
- Corner radius: R3

Holes:
- 4× M3 clearance Ø3.2mm for PCB at: (20,20), (20,110), (160,20), (160,110)
- 4× M3 clearance Ø3.2mm for standoffs at: (10,10), (10,120), (170,10), (170,120)
```

#### B2. DT-005 Standoff M3×10

```
Create a standoff in FreeCAD:
- Document name: "BB01-DT-005-Standoff"
- Cylinder: radius=3mm, height=10mm
- Color: brass/gold
```

#### B3. DT-006 Battery Holder

```
Create a battery holder box in FreeCAD:
- Document name: "BB01-DT-006-BatteryHolder"
- Outer: 110 × 70 × 30 mm
- Wall thickness: 2mm, open top
- 4× M3 mounting holes Ø3.2mm at corners, 5mm from edge
```

---

### Group C: Connectors

#### C1. DT-007 Connector Panel

```
Create a connector panel in FreeCAD:
- Document name: "BB01-DT-007-ConnectorPanel"
- Plate: 60 × 50 × 3 mm

Cutouts:
- 2× cable gland hole Ø12.5mm at (15, 25) and (45, 25)
- 4× M3 mounting holes Ø3.2mm at corners, 5mm from edge
```

#### C2. DT-008 Cable Gland (Standard Part)

```
Create a cable gland in FreeCAD:
- Document name: "BB01-DT-008-CableGland"
- Body: cylinder r=6mm h=15mm
- Thread: cylinder r=6mm h=8mm (M12 representation)
- Nut: hex r=8mm h=5mm
```

#### C3. DT-009 SMA Bulkhead (Standard Part)

```
Create an SMA bulkhead connector in FreeCAD:
- Document name: "BB01-DT-009-SMABulkhead"
- Body: cylinder r=3.25mm h=20mm (Ø6.5)
- Hex nut: r=4mm h=3mm
- Center pin: cylinder r=0.5mm h=5mm
```

---

### Group D: Mounting

#### D1. DT-010 L-Bracket

```
Create an L-bracket in FreeCAD:
- Document name: "BB01-DT-010-LBracket"
- Vertical leg: 40mm height × 40mm width × 3mm thick
- Horizontal leg: 30mm length × 40mm width × 3mm thick
- Fuse into single solid

Holes:
- 2× M4 clearance Ø4.2mm on horizontal: (15, 20) from corner
- 2× M4 clearance Ø4.2mm on vertical: at 15mm and 30mm height
```

#### D2. DT-011 Strain Relief Clamp

```
Create a strain relief clamp in FreeCAD:
- Document name: "BB01-DT-011-StrainReliefClamp"
- Base: 20 × 15 × 5 mm
- Cable channel: half-cylinder r=4mm cut along length
- 2× M3 mounting holes Ø3.2mm at ends
```

#### D3. DT-012 Mic Mounting Boss

```
Create a mic mounting boss in FreeCAD:
- Document name: "BB01-DT-012-MicMountBoss"
- Cylinder: r=6mm h=15mm
- Central hole: Ø5mm through
- Flat for orientation: 2mm cut on side
```

---

### Group E: Assemblies

#### E1. LR-001 Internal Assembly

```
Create internal assembly in FreeCAD:
- Document name: "BB01-LR-001-InternalAssembly"

Parts:
1. DT-004 PCB Mount Plate at origin (0, 0, 0)
2. DT-005 Standoff ×4 at: (10,10,2), (10,120,2), (170,10,2), (170,120,2)
3. DT-006 Battery Holder at: (35, 30, 12)

Keep parts separate with different colors.
```

#### E2. LR-002 Complete Assembly

```
Create complete MCU box assembly in FreeCAD:
- Document name: "BB01-LR-002-CompleteAssembly"

Parts:
1. DT-001 Enclosure Base at origin (0, 0, 0)
2. LR-001 Internal Assembly at (10, 10, 3)
3. DT-007 Connector Panel at (195, 50, 15) - on short wall
4. DT-003 Gasket at (2, 2, 47)
5. DT-002 Enclosure Lid at (0, 0, 50)

Keep separate with different colors.
Show isometric view.
```

---

## Export Commands

```
# Export single part
Export BB01-DT-001 to STEP: /path/BB01-DT-001-EnclosureBase.step

# Export assembly
Export BB01-LR-002 to STEP: /path/BB01-LR-002-CompleteAssembly.step

# Generate BOM
Generate BOM for BB01-LR-002 with:
- Part ID, Name, Dimensions, Material, Quantity
- Fasteners needed (M3, M4 screws, nuts, washers)
```

---

## Iteration Commands

```
# Modify dimension
Modify BB01-DT-001: change height from 50mm to 55mm

# Add feature
Add to BB01-DT-001: 2× vent holes Ø10mm on 200mm side at Y=50, 100

# Remove feature
Remove from BB01-DT-001: gasket groove
```

---

## Checklist

### Day 8 Target

- [ ] DT-004 PCB Mount Plate (baseline)
- [ ] DT-001 Enclosure Base
- [ ] DT-002 Enclosure Lid
- [ ] DT-003 Gasket

### Day 9 Target

- [ ] DT-005 Standoff
- [ ] DT-006 Battery Holder
- [ ] DT-007 Connector Panel
- [ ] LR-001 Internal Assembly

### Day 10 Target

- [ ] DT-008 Cable Gland
- [ ] DT-009 SMA Bulkhead
- [ ] DT-010 L-Bracket
- [ ] DT-011 Strain Relief
- [ ] DT-012 Mic Boss
- [ ] LR-002 Complete Assembly

---

*Quick reference for FreeCAD modeling session*
