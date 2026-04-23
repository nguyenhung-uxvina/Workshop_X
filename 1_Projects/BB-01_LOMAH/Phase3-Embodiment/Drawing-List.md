# BB-01 CAD Drawing List

> **Project**: BB-01 LOMAH Acoustic Detection
> **Subsystem**: MCU Box Assembly
> **Status**: 🔄 READY TO MODEL
> **Date**: 2026-01-29

---

## 1. Drawing List Summary

| Type | Count | Status |
|------|-------|--------|
| Part Drawings (chi tiết) | 12 | ⬜ To create |
| Assembly Drawings (lắp) | 2 | ⬜ To create |
| **TOTAL** | **14** | |

---

## 2. Part Drawings (Bản vẽ chi tiết)

### 2.1 Enclosure Parts

| # | Part ID | Name (EN) | Name (VN) | Material | Dimensions | Priority |
|---|---------|-----------|-----------|----------|------------|----------|
| 1 | BB01-DT-001 | Enclosure Base | Đế hộp | ABS IP65 | 200×150×50 | P1 |
| 2 | BB01-DT-002 | Enclosure Lid | Nắp hộp | ABS IP65 | 200×150×25 | P1 |
| 3 | BB01-DT-003 | Gasket | Gioăng | Silicone | 196×146×3 | P2 |

### 2.2 Internal Components

| # | Part ID | Name (EN) | Name (VN) | Material | Dimensions | Priority |
|---|---------|-----------|-----------|----------|------------|----------|
| 4 | BB01-DT-004 | PCB Mount Plate | Tấm gá PCB | Aluminum | 180×130×2 | P1 |
| 5 | BB01-DT-005 | Standoff M3×10 | Đệm cách M3 | Brass | Ø6×10 | P2 |
| 6 | BB01-DT-006 | Battery Holder | Giá pin | ABS | 110×70×30 | P2 |

### 2.3 Connector Panel

| # | Part ID | Name (EN) | Name (VN) | Material | Dimensions | Priority |
|---|---------|-----------|-----------|----------|------------|----------|
| 7 | BB01-DT-007 | Connector Panel | Tấm connector | Aluminum | 60×50×3 | P1 |
| 8 | BB01-DT-008 | Cable Gland M12 | Ốc siết cáp | Nylon PA66 | M12×1.5 | P3 |
| 9 | BB01-DT-009 | SMA Bulkhead | Đầu nối SMA | Brass | Ø6.5 | P3 |

### 2.4 Mounting

| # | Part ID | Name (EN) | Name (VN) | Material | Dimensions | Priority |
|---|---------|-----------|-----------|----------|------------|----------|
| 10 | BB01-DT-010 | L-Bracket | Ke góc L | SS304 | 40×40×30×3 | P2 |
| 11 | BB01-DT-011 | Strain Relief Clamp | Kẹp giữ cáp | Nylon PA66 | 20×15×10 | P2 |
| 12 | BB01-DT-012 | Mic Mounting Boss | Trụ gá mic | ABS | Ø12×15 | P2 |

---

## 3. Assembly Drawings (Bản vẽ lắp)

| # | Assy ID | Name (EN) | Name (VN) | Parts Included |
|---|---------|-----------|-----------|----------------|
| 1 | BB01-LR-001 | MCU Box Internal | Cụm lắp trong | DT-004, DT-005 (×4), DT-006 |
| 2 | BB01-LR-002 | MCU Box Complete | Hộp MCU hoàn chỉnh | DT-001, DT-002, DT-003, DT-007, LR-001 |

---

## 4. Modeling Order (Thứ tự vẽ)

```
PHASE 1: Core Enclosure (Week 1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. BB01-DT-001 Enclosure Base     ← START HERE
   - Main body with wall thickness 3mm
   - Screw bosses for lid (4×)
   - Cable gland holes (3×)
   - Gasket groove

2. BB01-DT-002 Enclosure Lid
   - Match base dimensions
   - Screw holes for M3 (4×)
   - Antenna hole

3. BB01-DT-003 Gasket
   - Match groove dimensions

PHASE 2: Internal (Week 2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. BB01-DT-004 PCB Mount Plate
   - Fit inside enclosure
   - PCB mounting holes (4×)
   - Standoff holes (4×)

5. BB01-DT-005 Standoff M3×10
   - Simple cylinder with internal thread

6. BB01-DT-006 Battery Holder
   - Sized for 12V/10Ah LiFePO4

7. BB01-LR-001 Internal Assembly
   - Combine DT-004, DT-005, DT-006

PHASE 3: Connectors & Mounting (Week 3)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. BB01-DT-007 Connector Panel
9. BB01-DT-008 Cable Gland (from library)
10. BB01-DT-009 SMA Bulkhead (from library)
11. BB01-DT-010 L-Bracket
12. BB01-DT-011 Strain Relief Clamp
13. BB01-DT-012 Mic Mounting Boss

14. BB01-LR-002 Complete Assembly
    - Final assembly with all parts
```

---

## 5. FreeCAD Prompts

### BB01-DT-001 Enclosure Base

```
Tạo chi tiết BB01-DT-001 - Enclosure Base trong FreeCAD:
- Document name: "BB01-DT-001-EnclosureBase"

Main body:
- Outer: 200 × 150 × 50 mm
- Wall thickness: 3mm (hollow inside)
- Corner radius: R5 external, R2 internal

Features:
- 4× screw boss Ø8×8mm at corners, 10mm from edge
- 4× M3 threaded insert hole Ø4.2mm in bosses
- Gasket groove: 2mm wide × 2mm deep, 3mm from edge
- 3× cable gland holes Ø12.5mm on short side, centered at Y=25, 75, 125

Material color: Light gray
```

### BB01-DT-002 Enclosure Lid

```
Tạo chi tiết BB01-DT-002 - Enclosure Lid trong FreeCAD:
- Document name: "BB01-DT-002-EnclosureLid"

Main body:
- Outer: 200 × 150 × 25 mm
- Wall thickness: 3mm (hollow inside, open bottom)
- Corner radius: R5 external, R2 internal
- Lip: 196 × 146 × 5mm, fits inside gasket groove

Features:
- 4× M3 clearance holes Ø3.2mm at corners, matching base bosses
- 1× SMA antenna hole Ø6.5mm at center of long side

Material color: Light gray
```

### BB01-DT-004 PCB Mount Plate

```
Tạo chi tiết BB01-DT-004 - PCB Mount Plate trong FreeCAD:
- Document name: "BB01-DT-004-PCBMountPlate"

Main body:
- 180 × 130 × 2 mm flat plate
- Corner radius: R3

Features:
- 4× M3 clearance holes Ø3.2mm for PCB (ESP32 footprint)
  - Positions: (20, 20), (20, 110), (160, 20), (160, 110)
- 4× M3 clearance holes Ø3.2mm for standoffs
  - Positions: (10, 10), (10, 120), (170, 10), (170, 120)

Material: Aluminum
Color: Silver
```

---

## 6. Requirements Traceability

| Part ID | Requirements Covered |
|---------|---------------------|
| DT-001 | SF.01 (IP65), EN.01 (temp), M01 (enclosure) |
| DT-002 | SF.01 (IP65), M01 (enclosure) |
| DT-003 | SF.01 (IP65 seal) |
| DT-004 | Internal structure |
| DT-005 | PCB mounting |
| DT-006 | E.01 (8hr battery) |
| DT-007 | SC.01-05 (connectors) |
| DT-010 | Mounting to target frame |
| DT-011 | [[Strain-Relief-Design]] |

---

## 7. Export Checklist

| Part | FreeCAD | STEP | 2D Drawing | BOM Entry |
|------|---------|------|------------|-----------|
| DT-001 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-002 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-003 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-004 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-005 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-006 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-007 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-008 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-009 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-010 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-011 | ⬜ | ⬜ | ⬜ | ⬜ |
| DT-012 | ⬜ | ⬜ | ⬜ | ⬜ |
| LR-001 | ⬜ | ⬜ | ⬜ | - |
| LR-002 | ⬜ | ⬜ | ⬜ | - |

---

## 8. References

- [[Prototype-BOM]] - Parts list
- [[DfX-Review-MCU-Box]] - Design requirements
- [[Strain-Relief-Design]] - DT-011 details
- [[cad-workflow]] - FreeCAD commands

---

*Drawing list ready for FreeCAD modeling*
