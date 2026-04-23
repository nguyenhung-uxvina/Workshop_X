# Hardware Catalog

Catalog phụ kiện tiêu chuẩn cho BOM và Assembly Instructions.

## Table of Contents
1. [Screws](#1-screws)
2. [Nuts](#2-nuts)
3. [Washers](#3-washers)
4. [Pins & Inserts](#4-pins--inserts)
5. [Seals](#5-seals)
6. [Torque Tables](#6-torque-tables)

---

## 1. Screws

### Socket Head Cap Screw (SHCS) - ISO 4762

| Size | Head Ø | Head H | Hex Key | Thread |
|------|--------|--------|---------|--------|
| M3 | 5.5 | 3 | 2.5 | 0.5 |
| M4 | 7 | 4 | 3 | 0.7 |
| M5 | 8.5 | 5 | 4 | 0.8 |
| M6 | 10 | 6 | 5 | 1.0 |
| M8 | 13 | 8 | 6 | 1.25 |
| M10 | 16 | 10 | 8 | 1.5 |

**Common lengths**: 8, 10, 12, 16, 20, 25, 30mm

**BOM format**: `Vít lục giác M[size]×[length] | ISO 4762 | [material]`

---

### Flat Head Cap Screw (FHCS) - ISO 10642

| Size | Head Ø | Hex Key | Countersink 90° |
|------|--------|---------|-----------------|
| M3 | 6.72 | 2 | Yes |
| M4 | 8.96 | 2.5 | Yes |
| M5 | 11.2 | 3 | Yes |
| M6 | 13.44 | 4 | Yes |

**Use**: Flush surface mounting
**BOM format**: `Vít chìm M[size]×[length] | ISO 10642 | [material]`

---

### Button Head Cap Screw (BHCS) - ISO 7380

| Size | Head Ø | Head H | Hex Key |
|------|--------|--------|---------|
| M3 | 5.7 | 1.65 | 2 |
| M4 | 7.6 | 2.2 | 2.5 |
| M5 | 9.5 | 2.75 | 3 |
| M6 | 10.5 | 3.3 | 4 |

**Use**: Low-profile, aesthetic
**BOM format**: `Vít đầu bằng M[size]×[length] | ISO 7380 | [material]`

---

## 2. Nuts

### Hex Nut - ISO 4032

| Size | Width AF | Height |
|------|----------|--------|
| M3 | 5.5 | 2.4 |
| M4 | 7 | 3.2 |
| M5 | 8 | 4.7 |
| M6 | 10 | 5.2 |
| M8 | 13 | 6.8 |
| M10 | 16 | 8.4 |

**BOM format**: `Đai ốc M[size] | ISO 4032 | [material]`

---

### Nyloc Nut - ISO 10511

| Size | Width AF | Height |
|------|----------|--------|
| M3 | 5.5 | 4 |
| M4 | 7 | 5 |
| M5 | 8 | 5 |
| M6 | 10 | 6 |
| M8 | 13 | 8 |

**Use**: Vibration resistance
**BOM format**: `Đai ốc chống rung M[size] | ISO 10511 | [material]`

---

## 3. Washers

### Flat Washer - ISO 7089 (Normal)

| Size | OD | Thickness |
|------|-----|-----------|
| M3 | 7 | 0.5 |
| M4 | 9 | 0.8 |
| M5 | 10 | 1.0 |
| M6 | 12 | 1.6 |
| M8 | 16 | 1.6 |
| M10 | 20 | 2.0 |

**BOM format**: `Vòng đệm phẳng M[size] | ISO 7089 | SS`

---

### Large Washer - ISO 7093

| Size | OD | Thickness |
|------|-----|-----------|
| M4 | 12 | 1.0 |
| M5 | 15 | 1.2 |
| M6 | 18 | 1.6 |
| M8 | 24 | 2.0 |

**Use**: Soft materials, large clearance holes

---

### Spring Washer - DIN 127B

| Size | OD | Thickness |
|------|-----|-----------|
| M3 | 6.2 | 1.0 |
| M4 | 8.1 | 1.2 |
| M5 | 9.9 | 1.4 |
| M6 | 11.8 | 1.6 |
| M8 | 14.8 | 2.0 |

**Use**: Light vibration (prefer Nyloc for critical)

---

## 4. Pins & Inserts

### Dowel Pin - ISO 2338

| Size | Tolerance | Use |
|------|-----------|-----|
| Ø3 m6 | +0.006/+0.002 | Press fit |
| Ø4 m6 | +0.008/+0.004 | Press fit |
| Ø5 m6 | +0.008/+0.004 | Press fit |
| Ø6 m6 | +0.009/+0.004 | Press fit |

**Hole**: H7 tolerance
**BOM format**: `Chốt định vị Ø[size]×[length] | ISO 2338`

---

### Helicoil Insert - DIN 8140

| Thread | Drill | Tap | Insert OD |
|--------|-------|-----|-----------|
| M3×0.5 | 3.2 | M3×0.5 | 4.5 |
| M4×0.7 | 4.3 | M4×0.7 | 6.0 |
| M5×0.8 | 5.4 | M5×0.8 | 7.5 |
| M6×1.0 | 6.5 | M6×1.0 | 9.0 |

**Use**: Repair stripped threads, aluminum parts

---

## 5. Seals

### O-Ring - ISO 3601

**Cross-section (CS) common sizes**: 1.5, 2.0, 2.5, 3.0, 3.5mm

**Groove design**:
| CS | Groove W | Groove D | Squeeze |
|----|----------|----------|---------|
| 1.5 | 2.0 | 1.2 | 20% |
| 2.0 | 2.7 | 1.6 | 20% |
| 2.5 | 3.2 | 2.0 | 20% |
| 3.0 | 3.8 | 2.4 | 20% |

**Materials**:
- NBR (Nitrile): General, oil
- EPDM: Water, outdoor
- Viton: High temp, chemicals
- Silicone: Food grade

---

### Cable Gland - IP68

| Size | Cable Range | Thread |
|------|-------------|--------|
| PG7 | 3-6.5mm | M12×1.5 |
| PG9 | 4-8mm | M16×1.5 |
| PG11 | 5-10mm | M18×1.5 |
| PG13.5 | 6-12mm | M20×1.5 |

**BOM format**: `Cable gland [size] IP68`

---

## 6. Torque Tables

### Steel Grade 8.8

| Size | Torque (N.m) | Torque (kgf.cm) |
|------|--------------|-----------------|
| M3 | 1.1 | 11 |
| M4 | 2.5 | 25 |
| M5 | 5.0 | 51 |
| M6 | 8.5 | 87 |
| M8 | 21 | 214 |
| M10 | 41 | 418 |

### Stainless A2-70

| Size | Torque (N.m) | Torque (kgf.cm) |
|------|--------------|-----------------|
| M3 | 0.8 | 8 |
| M4 | 1.8 | 18 |
| M5 | 3.5 | 36 |
| M6 | 6.0 | 61 |
| M8 | 15 | 153 |
| M10 | 29 | 296 |

### Notes
- Values for dry threads
- Lubricated: reduce 20-30%
- Nyloc: add 10-20%

---

## 7. Material Codes

### Screw/Bolt Materials

| Code | Material | Strength | Use |
|------|----------|----------|-----|
| 8.8 | Carbon steel | 800 MPa | General |
| 10.9 | Alloy steel | 1000 MPa | High strength |
| 12.9 | Alloy steel | 1200 MPa | Critical |
| A2-70 | SS 304 | 700 MPa | Corrosion |
| A4-80 | SS 316 | 800 MPa | Marine |

### Quick Selection

| Environment | Recommendation |
|-------------|----------------|
| Indoor, dry | 8.8 + zinc |
| Outdoor | A2-70 or A4-80 |
| Marine | A4-80 |
| High strength | 10.9 or 12.9 |
| Vibration | + Nyloc nut |
