---
name: cad-review-automation
description: >
  Tự động review bản vẽ CAD và phát hiện lỗi DfX (Design for X) cho sản phẩm
  quốc phòng/an ninh. Phân tích từ screenshots, STEP files, mô tả text, hoặc
  FreeCAD models. Kiểm tra DfM (Manufacturing), DfA (Assembly), DfR (Reliability),
  DfT (Test). Output checklist pass/fail, risk scoring, và recommendations bằng
  tiếng Việt. Triggers: review bản vẽ, kiểm tra DfX, DfM check, phân tích thiết kế,
  design review, kiểm tra lỗi CAD, đánh giá manufacturability, check assembly.
---

# CAD Review Automation - DfX Analysis

Phân tích bản vẽ CAD và phát hiện lỗi Design for X.

## Workflow

```
INPUT → ANALYZE → SCORE → REPORT
```

1. Nhận input (screenshot/STEP/text/FreeCAD)
2. Chọn DfX categories phù hợp
3. Kiểm tra theo rules, đánh giá risk
4. Output checklist + recommendations

---

## Quick Start

### Từ Screenshot/Image
```
Review DfX cho bản vẽ này:
[Upload image]
```

### Từ Text Description
```
Review DfX:
- Chi tiết: Bracket gá cảm biến
- Vật liệu: Al 6061-T6
- Kích thước: 80×60×5mm
- Features: 4 lỗ M4 góc, góc gấp 90° R=0
```

### Single Category
```
Check DfM cho chi tiết này
```

---

## Input → Category Routing

| Input có chứa | Check |
|---------------|-------|
| Kích thước, lỗ, góc, thành | DfM |
| Lắp ráp, fastener, assembly | DfA |
| Tải, ứng suất, vật liệu, môi trường | DfR |
| Đo, kiểm tra, serial, test | DfT |
| Không rõ | Check tất cả 4 DfX |

---

## Output Format

### Risk Levels
- 🔴 **HIGH**: Không thể sản xuất/lắp, safety concern → Bắt buộc sửa
- 🟡 **MEDIUM**: Tăng cost/time, ảnh hưởng quality → Nên sửa
- 🟢 **LOW**: Minor issues → Cân nhắc

### Report Structure
```
## KẾT QUẢ REVIEW DfX - [Tên chi tiết]

### Tổng quan
PASS: X | FAIL: X | WARN: X | Risk: 🔴/🟡/🟢

### Chi tiết
☑ [PASS item]
☒ [FAIL item] → Risk: 🔴 → Khuyến nghị: [fix]
⚠ [WARN item] → Risk: 🟡 → Khuyến nghị: [fix]

### Top Actions
1. 🔴 [Bắt buộc sửa]
2. 🟡 [Nên sửa]
```

---

## Example Review

**Input:**
```
Review DfX:
- Bracket nhôm 80×60×5mm
- 4 lỗ M4 cách mép 5mm
- Góc gấp 90° với R=0
- Thành đứng 2mm dày, 40mm cao
```

**Output:**
```
## KẾT QUẢ REVIEW DfX - Bracket nhôm

### Tổng quan
PASS: 2 | FAIL: 2 | WARN: 1 | Risk: 🔴 HIGH

### DfM - Manufacturing
☑ Chiều dày đế 5mm OK (≥1.5mm)
☒ Góc trong R=0 → 🔴 HIGH
   Không thể gia công CNC. Cần R≥3mm cho dao Ø6.
☒ Lỗ M4 cách mép 5mm → 🔴 HIGH  
   Quá gần mép (min 8mm). Dễ vỡ khi gia công.
⚠ Thành 2mm hơi mỏng → 🟡 MEDIUM
   Có thể rung khi phay. Recommend 3mm.

### DfR - Reliability
☒ Góc gấp không fillet → 🔴 HIGH
   Stress concentration. Thêm R2 minimum.

### Top Actions
1. 🔴 Thêm R3mm cho góc trong
2. 🔴 Dời lỗ M4 cách mép ≥8mm
3. 🔴 Thêm fillet R2 tại góc gấp
4. 🟡 Tăng thành từ 2mm → 3mm
```

---

## DfX Rules Reference

Load chi tiết rules khi cần:
- **DfM rules**: [references/dfx-rules.md](references/dfx-rules.md) → Section "DfM"
- **DfA rules**: [references/dfx-rules.md](references/dfx-rules.md) → Section "DfA"
- **DfR rules**: [references/dfx-rules.md](references/dfx-rules.md) → Section "DfR"
- **DfT rules**: [references/dfx-rules.md](references/dfx-rules.md) → Section "DfT"

---

## Critical Rules (Always Check)

### DfM - Must Check
| Rule | Threshold | Risk if Fail |
|------|-----------|--------------|
| Góc trong | R ≥ tool_dia/2 | 🔴 |
| Tỷ lệ lỗ | depth ≤ 4×dia | 🔴 |
| Thành min | ≥1.5mm CNC | 🟡 |
| Lỗ cách mép | ≥2×dia | 🔴 |

### DfR - Must Check
| Rule | Threshold | Risk if Fail |
|------|-----------|--------------|
| Fillet tại góc chịu lực | R ≥ 0.1×thickness | 🔴 |
| Safety factor | ≥2.0 defense | 🔴 |

### DfA - Must Check
| Rule | Threshold | Risk if Fail |
|------|-----------|--------------|
| Tool access | Clearance cho wrench | 🔴 |
| Lắp một hướng | Minimize reorientation | 🟡 |

### DfT - Must Check
| Rule | Threshold | Risk if Fail |
|------|-----------|--------------|
| Critical dims đo được | Access cho caliper | 🔴 |
| Serial number location | Visible khi lắp | 🟡 |
