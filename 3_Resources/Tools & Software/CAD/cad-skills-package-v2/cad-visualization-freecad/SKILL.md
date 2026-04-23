---
name: cad-visualization-freecad
description: >
  AI-assisted CAD modeling using Claude Desktop + FreeCAD MCP. Convert natural language
  to 3D models with 40x speed improvement. Use when users want to (1) create 3D parts
  from text descriptions, (2) generate drawing lists (danh sách bản vẽ) for projects,
  (3) create individual part drawings (bản vẽ chi tiết), (4) build assemblies (bản vẽ lắp),
  (5) iterate designs through conversation, (6) generate BOMs, (7) export STEP/STL for
  manufacturing, (8) integrate CAD into Pahl-Beitz embodiment design. Triggers on
  create 3D model, make CAD, FreeCAD, tạo mô hình 3D, thiết kế CAD, bản vẽ chi tiết,
  bản vẽ lắp, danh sách bản vẽ, drawing list, assembly drawing.
---

# CAD Visualization with FreeCAD MCP

Convert natural language descriptions to 3D CAD models via FreeCAD MCP integration.

## Master Workflow

```
1. DRAWING LIST    → Generate danh sách bản vẽ từ requirements
2. PART DRAWINGS   → Create từng chi tiết (bản vẽ chi tiết)
3. REVIEW/EDIT     → Chỉnh sửa từng chi tiết nếu cần
4. ASSEMBLY        → Lắp các chi tiết thành cụm/tổng thể
5. EXPORT          → STEP files + BOM
```

Setup issues? See [references/setup-guide.md](references/setup-guide.md)

---

## Step 1: Generate Drawing List (Danh sách bản vẽ)

**Prompt template:**
```
Từ requirements sau, tạo danh sách bản vẽ chi tiết và bản vẽ lắp:

[Paste requirements hoặc mô tả sản phẩm]

Output format:
- Danh sách bản vẽ chi tiết (part drawings)
- Danh sách bản vẽ lắp (assembly drawings)
- Thứ tự vẽ recommended
- Prompt để tạo từng chi tiết trong FreeCAD
```

**Example output:** See [references/drawing-list-workflow.md](references/drawing-list-workflow.md)

---

## Step 2: Create Part Drawings (Bản vẽ chi tiết)

**Prompt cho từng chi tiết:**
```
Tạo chi tiết [Mã số] - [Tên chi tiết] trong FreeCAD:
- Document name: "[MaSo]_[TenChiTiet]"
- [Mô tả hình học chi tiết]
- [Kích thước chính]
- [Features: lỗ, rãnh, vát, etc.]
```

**Example:**
```
Tạo chi tiết DT-001 - Đế gá cảm biến trong FreeCAD:
- Document name: "DT001_DeGaCamBien"
- Tấm đế: 80 x 60 x 5 mm
- 4 lỗ bắt M4 (Ø4.2mm) cách mép 8mm
- 2 lỗ định vị Ø6mm cách mép 15mm
```

---

## Step 3: Review & Edit (Chỉnh sửa)

**Chỉnh sửa kích thước:**
```
Sửa chi tiết [Mã số]:
- Thay đổi [thông số] từ [giá trị cũ] thành [giá trị mới]
```

**Thêm feature:**
```
Thêm vào chi tiết [Mã số]:
- [Feature mới]: [mô tả và kích thước]
```

**Xóa feature:**
```
Xóa khỏi chi tiết [Mã số]:
- [Feature cần xóa]
```

---

## Step 4: Assembly (Bản vẽ lắp)

**Prompt lắp cụm/tổng thể:**
```
Tạo bản vẽ lắp [Mã số lắp] - [Tên cụm] trong FreeCAD:
- Document name: "[MaSoLap]_[TenCum]"

Chi tiết 1: [Mã số] - [Tên]
- Vị trí: gốc tọa độ (0, 0, 0)

Chi tiết 2: [Mã số] - [Tên]
- Vị trí: ([X], [Y], [Z])
- Quan hệ lắp: [mô tả vị trí tương đối]

Chi tiết 3: [Mã số] - [Tên]
- Vị trí: ([X], [Y], [Z])

Giữ các chi tiết riêng biệt với màu khác nhau.
```

---

## Step 5: Export & BOM

**Export STEP:**
```
Export [bản vẽ lắp/chi tiết] sang STEP.
Lưu tại: [đường dẫn]/[tên file].step
```

**Generate BOM:**
```
Tạo BOM cho bản vẽ lắp [Mã số]:
- Danh sách chi tiết với mã số, tên, kích thước, vật liệu, số lượng
- Đề xuất bu lông, đai ốc, vòng đệm cần thiết
```

---

## Quick Reference

### Part Types
- `Part::Box` → Hộp chữ nhật
- `Part::Cylinder` → Trụ tròn
- `Part::Sphere` → Cầu

### Boolean Operations
- **Hợp**: "fuse", "hàn", "nối"
- **Cắt**: "cut", "khoét lỗ", "boolean cut"

### Hole Sizes (Lỗ thông)
M3=Ø3.2, M4=Ø4.2, M5=Ø5.2, M6=Ø6.2, M8=Ø8.2

### Position (Vị trí)
```
Position: (X, Y, Z) mm
- Chi tiết đặt trên: Z = chiều cao chi tiết dưới
- Căn giữa: X = (chi tiết lớn - chi tiết nhỏ) / 2
```

---

## References

- **Drawing list workflow**: [references/drawing-list-workflow.md](references/drawing-list-workflow.md)
- **Pattern library**: [references/pattern-library.md](references/pattern-library.md)
- **Setup guide**: [references/setup-guide.md](references/setup-guide.md)
- **Pahl-Beitz integration**: [references/pahl-beitz-integration.md](references/pahl-beitz-integration.md)
