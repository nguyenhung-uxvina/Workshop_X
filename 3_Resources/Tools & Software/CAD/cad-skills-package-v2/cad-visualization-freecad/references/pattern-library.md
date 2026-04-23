# FreeCAD MCP Pattern Library

Verified prompt patterns with concrete examples.

---

## Part Patterns

### 1. Simple Box

**Input:**
```
Create a box in FreeCAD:
- Document name: "Enclosure_Base"
- Dimensions: 120 x 80 x 50 mm
```

**Output:** Box created at origin with specified dimensions.

---

### 2. Mounting Plate with Holes

**Input:**
```
Create a mounting plate in FreeCAD:
- Document name: "SensorMount"
- Plate: 100 x 80 x 5 mm
- 4 corner holes: M4 clearance (4.2mm), 10mm from edges
- Use boolean cut for holes
```

**Output:** Rectangular plate with 4 through-holes at corners.

---

### 3. L-Bracket

**Input:**
```
Create an L-bracket in FreeCAD:
- Document name: "SupportBracket"
- Vertical leg: 60mm height, 30mm width, 5mm thick
- Horizontal leg: 80mm length, 30mm width, 5mm thick
- Fuse into single solid
```

**Output:** L-shaped bracket, single fused body.

---

### 4. Open-Top Enclosure

**Input:**
```
Create enclosure in FreeCAD:
- Document name: "ElectronicsBox"
- Outer: 130 x 100 x 50 mm
- Wall thickness: 3mm
- Open top
- Boolean cut to hollow interior
```

**Output:** Box with hollow interior, no lid.

---

### 5. Sensor Bracket (Defense)

**Input:**
```
Create sensor mounting bracket:
- Document name: "BB01_SensorMount"
- Base: 60 x 40 x 3 mm
- Vertical: 40mm height, 40mm width, 3mm thick at back
- Base holes: 4x M4 (4.2mm), 8mm from edges
- Vertical holes: 2x M3 (3.2mm), centered, at 15mm and 30mm height
```

**Output:** L-bracket with mounting holes on both surfaces.

---

## Assembly Patterns

### 6. Fused Assembly (Welded)

**Input:**
```
Create welded assembly in FreeCAD:
- Document name: "WeldedFrame"

Part 1 - Base:
- Box: 100 x 80 x 5 mm at origin

Part 2 - Vertical:
- Box: 5 x 80 x 50 mm
- Position: (0, 0, 5)

Fuse into single solid "WeldedFrame"
```

**Output:** Two boxes fused into one solid body.

---

### 7. Multi-Part Assembly

**Input:**
```
Create frame assembly in FreeCAD:
- Document name: "TableFrame"

Base: Box 120 x 100 x 10 mm at origin
Left Pillar: Box 15 x 15 x 60 mm at (10, 10, 10)
Right Pillar: Box 15 x 15 x 60 mm at (95, 10, 10)
Top: Box 120 x 100 x 5 mm at (0, 0, 70)

Keep separate with different colors.
```

**Output:** 4 separate parts with auto-assigned colors.

---

### 8. PCB Mount Assembly

**Input:**
```
Create PCB mount in FreeCAD:
- Document name: "PCB_Assembly"

Base: 100 x 80 x 3 mm at origin
Standoffs: 4x cylinder r=3mm h=10mm at:
  (10, 10, 3), (90, 10, 3), (10, 70, 3), (90, 70, 3)
PCB: 80 x 60 x 1.6 mm at (10, 10, 13)

Keep separate with colors.
```

**Output:** Base plate, 4 standoffs (brass color), PCB (green).

---

### 9. Sensor Unit Assembly

**Input:**
```
Create sensor assembly in FreeCAD:
- Document name: "BB01_SensorUnit"

Bracket: L-shape, base 60x40x3, vertical 40x40x3
Housing: Box 30x25x20 at (5, 7.5, 18)
Connector: Cylinder r=5mm h=12mm at (-5, 20, 25)

Keep housing separate from bracket.
```

**Output:** Mounting bracket with sensor housing and connector.

---

### 10. Circular Array

**Input:**
```
Create mic array in FreeCAD:
- Document name: "BB01_MicArray"

Base: Cylinder r=50mm h=4mm at origin
Mics: 4x cylinder r=5mm h=15mm at radius 30mm, 90° apart:
  (30,0,4), (0,30,4), (-30,0,4), (0,-30,4)
Hub: Cylinder r=15mm h=20mm at (0,0,4)

Keep separate with colors.
```

**Output:** Circular base with 4 elements and central hub.

---

## Export Patterns

### 11. STEP Export

**Input:**
```
Export current model to STEP.
Save to C:/Projects/BB01/SensorMount.step
```

**Output:** STEP file at specified path.

---

### 12. BOM Generation

**Input:**
```
Generate BOM for this assembly.
Include: part names, dimensions, materials, quantities.
Suggest fasteners needed.
```

**Output:** Table with parts list and hardware suggestions.

---

### 13. Requirements → CAD

**Input:**
```
Requirements for BB01 Enclosure:
- Function: House 100x80mm PCB
- Max size: 150x120x60mm
- IP65 rated (3mm walls minimum)
- 4-point flange mount

Create in FreeCAD: "BB01_Enclosure"
Include: body, standoffs, PCB placeholder, flanges, cable boss
```

**Output:** Complete enclosure assembly meeting requirements.

---

## Reference Tables

### Hole Sizes

| Bolt | Clearance | Close | Tap |
|------|-----------|-------|-----|
| M3 | 3.2 | 3.0 | 2.5 |
| M4 | 4.2 | 4.0 | 3.3 |
| M5 | 5.2 | 5.0 | 4.2 |
| M6 | 6.2 | 6.0 | 5.0 |
| M8 | 8.2 | 8.0 | 6.8 |

### Position Formulas

| Scenario | Formula |
|----------|---------|
| On top | Z = prev_height |
| Centered | (container - part) / 2 |
| Corner | (edge_dist, edge_dist, height) |
| Circle (4) | (R,0), (0,R), (-R,0), (0,-R) |

---

## Vietnamese Prompts (Tiếng Việt)

### Chi tiết đơn giản

```
Tạo chi tiết [Mã số] - [Tên] trong FreeCAD:
- Document name: "[MaSo]_[Ten]"
- [Hình dạng]: [kích thước] mm
- [Lỗ/Features]: [mô tả]
```

### Bản vẽ lắp

```
Tạo bản vẽ lắp [Mã số] - [Tên cụm] trong FreeCAD:
- Document name: "[MaSo]_[TenCum]"

Chi tiết 1: [Mã số] - [Tên]
- Vị trí: gốc tọa độ (0, 0, 0)

Chi tiết 2: [Mã số] - [Tên]  
- Vị trí: ([X], [Y], [Z])

Giữ các chi tiết riêng biệt với màu khác nhau.
```

### Chỉnh sửa

```
Sửa chi tiết [Mã số]:
- Thay đổi [thông số] từ [cũ] thành [mới]
- Thêm [feature mới]: [mô tả]
- Xóa [feature]
```

### Export

```
Export chi tiết [Mã số] sang STEP.
Lưu tại: [đường dẫn]/[tên file].step
```

### BOM

```
Tạo BOM cho bản vẽ lắp [Mã số]:
- Danh sách chi tiết: mã số, tên, kích thước, vật liệu, số lượng
- Đề xuất bu lông, đai ốc, vòng đệm
```
