# Document Templates

Templates cho 5 loại tài liệu kỹ thuật + Title Block.

## Table of Contents
1. [Drawing List](#1-drawing-list)
2. [Part Specifications](#2-part-specifications)
3. [BOM](#3-bom)
4. [Assembly Instructions](#4-assembly-instructions)
5. [Inspection Checklist](#5-inspection-checklist)
6. [Title Block](#6-title-block)

---

## 1. Drawing List

### Full Template

```markdown
# DANH MỤC BẢN VẼ

**Dự án**: [Tên dự án]
**Mã dự án**: [Mã]
**Revision**: [X]
**Ngày**: [DD/MM/YYYY]

## Bản vẽ Chi tiết

| STT | Mã BV | Tên bản vẽ | Vật liệu | Khổ | Rev | Status |
|-----|-------|------------|----------|-----|-----|--------|
| 1 | DT-001 | [Tên] | [VL] | A4 | A | ☐ |
| 2 | DT-002 | [Tên] | [VL] | A4 | A | ☐ |

## Bản vẽ Lắp

| STT | Mã BV | Tên bản vẽ | Bao gồm | Khổ | Rev | Status |
|-----|-------|------------|---------|-----|-----|--------|
| 1 | BVL-001 | [Tên] | DT-001+DT-002 | A3 | A | ☐ |

**Tổng**: X bản vẽ chi tiết + Y bản vẽ lắp = Z bản vẽ
```

### Naming Convention

| Type | Prefix | Example |
|------|--------|---------|
| Chi tiết | DT- | DT-001, DT-002 |
| Lắp | BVL- | BVL-001 |
| Sơ đồ | SD- | SD-001 |

---

## 2. Part Specifications

### Full Template (8 Sections)

```markdown
# THÔNG SỐ KỸ THUẬT

## 1. Thông tin chung
| Field | Value |
|-------|-------|
| Tên chi tiết | [Tên] |
| Mã số | [DT-XXX] |
| Revision | [A] |
| Vật liệu | [Al 6061-T6] |
| Khối lượng | [X] g |

## 2. Vật liệu
| Property | Value |
|----------|-------|
| Ký hiệu | [Al 6061-T6] |
| Mật độ | [2.7 g/cm³] |
| Yield Strength | [276 MPa] |
| Hardness | [95 HB] |

## 3. Kích thước chính
| Thông số | Giá trị | Dung sai | Ghi chú |
|----------|---------|----------|---------|
| Chiều dài L | [X] mm | ±0.1 | |
| Chiều rộng W | [X] mm | ±0.1 | |
| Chiều dày H | [X] mm | ±0.1 | |
| Lỗ Ø | [X] mm | H7 | |

## 4. Yêu cầu gia công
| Parameter | Requirement |
|-----------|-------------|
| Phương pháp | CNC Milling |
| Độ nhám chung | Ra 3.2 |
| Độ nhám mặt lắp | Ra 1.6 |
| Góc trong min | R3 |

## 5. Xử lý bề mặt
| Parameter | Specification |
|-----------|---------------|
| Phương pháp | Anodize Type II |
| Màu | Đen |
| Chiều dày | 15-20μm |

## 6. Ghi chú DfX
- [DfM note từ review]
- [DfA note từ review]

## 7. Lịch sử thay đổi
| Rev | Date | Change | By |
|-----|------|--------|-----|
| A | [Date] | Initial release | [Name] |

## 8. Phê duyệt
| Role | Name | Sign | Date |
|------|------|------|------|
| Design | | | |
| Check | | | |
| Approve | | | |
```

### Compact Template (Simple Parts)

```markdown
# SPECS - [Mã] [Tên]

**Vật liệu**: [VL] | **Rev**: [X] | **KL**: [X]g

| Thông số | Giá trị | Dung sai |
|----------|---------|----------|
| L×W×H | [X×Y×Z] | ±0.1 |
| Lỗ | [Ø] | H7 |

**Gia công**: [Method], Ra [X], [Surface treatment]
```

### Material Database

| Material | Density | Yield | Use |
|----------|---------|-------|-----|
| Al 6061-T6 | 2.7 | 276 MPa | General |
| Al 7075-T6 | 2.81 | 503 MPa | High strength |
| SS 304 | 8.0 | 215 MPa | Corrosion |
| SS 316 | 8.0 | 290 MPa | Marine |
| POM | 1.41 | 65 MPa | Bearings |

---

## 3. BOM

### Full Template (3 Sections)

```markdown
# BILL OF MATERIALS

**Assembly**: [Tên]
**Mã số**: [ASM-XXX]
**Revision**: [A]
**Tổng khối lượng**: [X] kg

---

## A. Chi tiết gia công

| STT | Mã | Tên | Vật liệu | KT (mm) | SL | KL (g) | Ghi chú |
|-----|-----|-----|----------|---------|-----|--------|---------|
| 1 | DT-001 | [Tên] | [VL] | L×W×H | 1 | [X] | |
| 2 | DT-002 | [Tên] | [VL] | L×W×H | 1 | [X] | |

**Subtotal**: X loại, Y chi tiết

---

## B. Phụ kiện tiêu chuẩn

### B1. Bu lông, Vít
| STT | Mã | Mô tả | Tiêu chuẩn | VL | SL | Vị trí |
|-----|-----|-------|------------|-----|-----|--------|
| 1 | HW-001 | Vít M4×12 SHCS | ISO 4762 | A2-70 | 4 | [Vị trí] |

### B2. Đai ốc
| STT | Mã | Mô tả | Tiêu chuẩn | VL | SL |
|-----|-----|-------|------------|-----|-----|
| 1 | HW-010 | Đai ốc M4 | ISO 4032 | A2-70 | 4 |

### B3. Vòng đệm
| STT | Mã | Mô tả | Tiêu chuẩn | VL | SL |
|-----|-----|-------|------------|-----|-----|
| 1 | HW-020 | Vòng đệm M4 | ISO 7089 | SS | 8 |

**Subtotal**: X loại, Y chi tiết

---

## C. Mua ngoài

| STT | Mã | Mô tả | NSX | Part Number | SL | Ghi chú |
|-----|-----|-------|-----|-------------|-----|---------|
| 1 | PUR-001 | [Item] | [Brand] | [PN] | 1 | |

**Subtotal**: X loại

---

## Tổng hợp

| Loại | Số loại | Số lượng | Khối lượng |
|------|---------|----------|------------|
| Gia công | X | Y | Z kg |
| Phụ kiện | X | Y | Z kg |
| Mua ngoài | X | Y | Z kg |
| **TỔNG** | **X** | **Y** | **Z kg** |
```

### Compact BOM

```markdown
# BOM - [Assembly Name]

| # | Mã | Tên | VL/TC | SL |
|---|-----|-----|-------|-----|
| 1 | DT-001 | Đế | Al 6061 | 1 |
| 2 | HW-001 | Vít M4×12 | ISO 4762 | 4 |
| 3 | HW-002 | Đai ốc M4 | ISO 4032 | 4 |
```

---

## 4. Assembly Instructions

### Full Template

```markdown
# HƯỚNG DẪN LẮP RÁP

**Assembly**: [Tên]
**Mã số**: [ASM-XXX]
**Thời gian**: ~[X] phút
**Độ khó**: [Dễ/TB/Khó]

---

## 1. Chuẩn bị

### Dụng cụ
| # | Dụng cụ | Size | Ghi chú |
|---|---------|------|---------|
| 1 | Lục giác | 2.5, 3mm | Cho M3, M4 |
| 2 | Cờ lê | 5.5, 7mm | Cho đai ốc |
| 3 | Moment wrench | 0.5-5 N.m | Optional |

### Vật tư tiêu hao
- Loctite 243 (ít)
- Mỡ silicone (ít)

### Checklist chi tiết
| # | Mã | Tên | SL | ☐ |
|---|-----|-----|-----|---|
| 1 | DT-001 | Đế gá | 1 | ☐ |
| 2 | HW-001 | Vít M4×12 | 4 | ☐ |

---

## 2. Trình tự lắp ráp

### Bước 1: [Tên bước]

**Chi tiết sử dụng**:
- [Mã] × SL
- [Mã] × SL

**Thao tác**:
1. [Action 1]
2. [Action 2]
3. Xiết moment: [X] N.m

**Kiểm tra**:
- ☐ [Check 1]
- ☐ [Check 2]

**Hình minh họa**:
```
[ASCII diagram hoặc reference to image]
```

### Bước 2: [Tên bước]
...

---

## 3. Kiểm tra sau lắp

### Ngoại quan
- ☐ Đủ vít, không thiếu
- ☐ Không có khe hở bất thường
- ☐ Không có vết xước do lắp

### Chức năng
- ☐ [Function check 1]
- ☐ [Function check 2]

---

## 4. Xử lý sự cố

| Sự cố | Nguyên nhân | Giải pháp |
|-------|-------------|-----------|
| Lỗ không trùng | Dung sai | Dũa nhẹ, báo QC |
| Vít không vào | Ren hỏng | Helicoil |
```

### Torque Reference

| Size | Grade 8.8 | A2-70 |
|------|-----------|-------|
| M3 | 1.1 N.m | 0.8 N.m |
| M4 | 2.5 N.m | 1.8 N.m |
| M5 | 5.0 N.m | 3.5 N.m |
| M6 | 8.5 N.m | 6.0 N.m |
| M8 | 21 N.m | 15 N.m |

---

## 5. Inspection Checklist

### Full Template

```markdown
# CHECKLIST KIỂM TRA

**Chi tiết**: [Tên] | **Mã**: [Mã] | **Rev**: [X]
**Ngày**: _______ | **Người KT**: _______ | **Lot**: _______

---

## 1. Kích thước

| # | Thông số | Yêu cầu | Thực tế | Thiết bị | Đạt |
|---|----------|---------|---------|----------|-----|
| 1 | Dài L | [X] ±0.1 | _____ | Thước | ☐ |
| 2 | Rộng W | [X] ±0.1 | _____ | Thước | ☐ |
| 3 | Dày H | [X] ±0.1 | _____ | Thước | ☐ |
| 4 | Lỗ Ø | [X] H7 | _____ | Pin gauge | ☐ |

## 2. Hình học

| # | Thông số | Yêu cầu | Thực tế | Đạt |
|---|----------|---------|---------|-----|
| 1 | Độ phẳng | ≤0.1mm | _____ | ☐ |
| 2 | Vuông góc | ≤0.1mm | _____ | ☐ |

## 3. Ngoại quan

- ☐ Không có vết xước sâu >0.1mm
- ☐ Không có ba via
- ☐ Màu sắc đồng đều
- ☐ Không có vết ăn mòn

## 4. Chức năng

- ☐ Lắp thử với chi tiết đối ứng
- ☐ Kiểm tra khe hở
- ☐ [Function specific check]

## 5. DfX Items (từ review)

- ☐ [DfX item 1 - special attention]
- ☐ [DfX item 2]

---

## Kết quả

| Check | Pass | Fail |
|-------|------|------|
| Kích thước | /4 | |
| Hình học | /2 | |
| Ngoại quan | /4 | |
| Chức năng | /3 | |

**Kết quả chung**: ☐ ĐẠT  ☐ KHÔNG ĐẠT

**Lý do không đạt**: _______________________

---

**Người kiểm tra**: _____________ | **Ký**: _____________
**Người duyệt**: _____________ | **Ký**: _____________
**Ngày**: _____________
```

### Quick Checklist

```markdown
# QC - [Mã] [Tên]

| # | Check | Spec | OK |
|---|-------|------|-----|
| 1 | L | [X]±0.1 | ☐ |
| 2 | W | [X]±0.1 | ☐ |
| 3 | Lỗ | Ø[X] H7 | ☐ |
| 4 | Ngoại quan | No defect | ☐ |

Result: ☐ PASS ☐ FAIL
```

---

## 6. Title Block

### ISO 7200 Format

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]    │  [TÊN CÔNG TY]                                  │
│           │  [Địa chỉ line 1]                               │
│           │  [Địa chỉ line 2]                               │
├───────────┼─────────────────────────────────────────────────┤
│ Dự án     │ [Tên dự án]                                     │
├───────────┼─────────────────────────────────────────────────┤
│ Tên BV    │ [Tên bản vẽ]                                    │
├───────────┼──────────┬──────────┬──────────┬────────────────┤
│ Mã số     │ [Mã BV]  │ Rev      │ [X]      │ Tỷ lệ: [1:1]  │
├───────────┼──────────┼──────────┼──────────┤ Khổ: [A4]     │
│ Vẽ        │ [Tên]    │ Ngày     │ [Date]   │               │
├───────────┼──────────┼──────────┼──────────┤ Tờ: [1/1]     │
│ Duyệt     │ [Tên]    │ Ngày     │ [Date]   │               │
└───────────┴──────────┴──────────┴──────────┴────────────────┘
```

### Title Block Sizes

| Paper | Block Size | Position |
|-------|------------|----------|
| A4 | 180×56mm | Bottom right |
| A3 | 180×56mm | Bottom right |
| A2 | 180×56mm | Bottom right |

### Revision Block

```
| Rev | Date | Description | By | Approved |
|-----|------|-------------|-----|----------|
| A | [Date] | Initial release | [Name] | [Name] |
| B | [Date] | [Change desc] | [Name] | [Name] |
```

### Tolerance Block

```
Dung sai chung: ISO 2768-mK
Góc: ±0°30'
Linear ≤6: ±0.1 | 6-30: ±0.2 | 30-120: ±0.3
```
