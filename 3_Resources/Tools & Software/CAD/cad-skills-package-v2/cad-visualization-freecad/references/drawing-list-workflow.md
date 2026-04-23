# Drawing List Workflow (Quy trình Danh sách Bản vẽ)

Hướng dẫn tạo danh sách bản vẽ, vẽ từng chi tiết, và lắp tổng thể.

---

## Workflow Overview

```
REQUIREMENTS
     │
     ▼
┌─────────────────────────────────────┐
│  STEP 1: DANH SÁCH BẢN VẼ          │
│  - Phân tích requirements           │
│  - Liệt kê bản vẽ chi tiết          │
│  - Liệt kê bản vẽ lắp               │
│  - Tạo prompt cho từng chi tiết     │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│  STEP 2: VẼ TỪNG CHI TIẾT          │
│  - Chạy prompt cho chi tiết 1       │
│  - Review, chỉnh sửa nếu cần        │
│  - Chạy prompt cho chi tiết 2       │
│  - ...lặp lại cho tất cả chi tiết   │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│  STEP 3: LẮP CỤM/TỔNG THỂ          │
│  - Tạo assembly document            │
│  - Định vị từng chi tiết            │
│  - Kiểm tra quan hệ lắp ghép        │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│  STEP 4: EXPORT & BOM              │
│  - Export STEP cho từng chi tiết    │
│  - Export STEP cho bản vẽ lắp       │
│  - Tạo BOM với hardware             │
└─────────────────────────────────────┘
```

---

## Complete Example: BB-01 Sensor Unit

### Input Requirements

```
YÊU CẦU KỸ THUẬT BB-01 SENSOR UNIT:

Chức năng: Gá lắp cảm biến âm thanh cho hệ thống LOMAH
Môi trường: Ngoài trời, IP54
Kích thước PCB: 60 x 40 mm
Gá lắp: Bắt vít vào giá đỡ, 4 điểm
Vật liệu: Nhôm 6061-T6
```

---

### Step 1: Danh sách Bản vẽ Generated

**Prompt:**
```
Từ requirements sau, tạo danh sách bản vẽ chi tiết và bản vẽ lắp:

YÊU CẦU KỸ THUẬT BB-01 SENSOR UNIT:
- Chức năng: Gá lắp cảm biến âm thanh cho hệ thống LOMAH
- Môi trường: Ngoài trời, IP54
- Kích thước PCB: 60 x 40 mm
- Gá lắp: Bắt vít vào giá đỡ, 4 điểm
- Vật liệu: Nhôm 6061-T6

Output: Danh sách bản vẽ với prompt tạo từng chi tiết.
```

**Output:**

#### DANH SÁCH BẢN VẼ CHI TIẾT (Part Drawings)

| Mã số | Tên chi tiết | Mô tả | Vật liệu | SL |
|-------|--------------|-------|----------|-----|
| DT-001 | Đế gá | Tấm đế bắt vào giá đỡ | Al 6061-T6 | 1 |
| DT-002 | Thành đứng | Tấm đứng gá PCB | Al 6061-T6 | 1 |
| DT-003 | Vỏ bảo vệ | Hộp che PCB | Al 6061-T6 | 1 |
| DT-004 | Nắp trên | Nắp đậy vỏ | Al 6061-T6 | 1 |

#### DANH SÁCH BẢN VẼ LẮP (Assembly Drawings)

| Mã số | Tên bản vẽ lắp | Chi tiết bao gồm |
|-------|----------------|------------------|
| BVL-001 | Cụm khung gá | DT-001 + DT-002 |
| BVL-002 | Cụm vỏ | DT-003 + DT-004 |
| BVL-003 | Tổng thể Sensor Unit | BVL-001 + BVL-002 |

#### THỨ TỰ VẼ RECOMMENDED

1. DT-001 → DT-002 → BVL-001 (lắp khung)
2. DT-003 → DT-004 → BVL-002 (lắp vỏ)
3. BVL-003 (lắp tổng thể)

---

### Step 2: Prompts cho từng Chi tiết

#### DT-001: Đế gá

```
Tạo chi tiết DT-001 - Đế gá trong FreeCAD:
- Document name: "DT001_DeGa"
- Tấm đế: 80 x 60 x 5 mm
- 4 lỗ bắt M4 (Ø4.2mm) ở 4 góc, cách mép 8mm
- 2 lỗ định vị Ø3mm, cách mép trước 10mm, cách mép bên 20mm và 40mm
```

#### DT-002: Thành đứng

```
Tạo chi tiết DT-002 - Thành đứng trong FreeCAD:
- Document name: "DT002_ThanhDung"
- Tấm đứng: 60 x 50 x 3 mm (rộng x cao x dày)
- 4 lỗ bắt PCB M3 (Ø3.2mm):
  - Vị trí theo pattern PCB 60x40mm
  - Cách mép dưới 5mm, cách mép bên 10mm
- 2 lỗ bắt vào đế M4 (Ø4.2mm) ở mép dưới, cách mép bên 10mm
```

#### DT-003: Vỏ bảo vệ

```
Tạo chi tiết DT-003 - Vỏ bảo vệ trong FreeCAD:
- Document name: "DT003_VoBaoVe"
- Hộp: ngoài 70 x 50 x 40 mm, thành dày 2mm, hở mặt trên
- 4 lỗ bắt nắp M3 (Ø3.2mm) ở 4 góc mặt trên, cách mép 5mm
- 1 lỗ cáp Ø12mm ở mặt sau, tâm cách đáy 20mm
- Boolean cut để tạo hộp rỗng
```

#### DT-004: Nắp trên

```
Tạo chi tiết DT-004 - Nắp trên trong FreeCAD:
- Document name: "DT004_NapTren"
- Tấm nắp: 70 x 50 x 2 mm
- 4 lỗ bắt M3 (Ø3.2mm) ở 4 góc, cách mép 5mm (khớp với vỏ)
- Gờ định vị: 66 x 46 x 2 mm, nhô xuống 2mm (để lọt vào trong vỏ)
```

---

### Step 3: Prompts cho Bản vẽ Lắp

#### BVL-001: Cụm khung gá

```
Tạo bản vẽ lắp BVL-001 - Cụm khung gá trong FreeCAD:
- Document name: "BVL001_CumKhungGa"

Chi tiết 1: DT-001 - Đế gá
- Vị trí: gốc tọa độ (0, 0, 0)
- Mặt phẳng XY là mặt đế

Chi tiết 2: DT-002 - Thành đứng
- Vị trí: (10, 0, 5)
- Đứng vuông góc với đế, mép dưới thành đứng chạm mặt trên đế
- Mặt phẳng thành đứng song song với YZ

Giữ các chi tiết riêng biệt với màu khác nhau.
```

#### BVL-002: Cụm vỏ

```
Tạo bản vẽ lắp BVL-002 - Cụm vỏ trong FreeCAD:
- Document name: "BVL002_CumVo"

Chi tiết 1: DT-003 - Vỏ bảo vệ
- Vị trí: gốc tọa độ (0, 0, 0)

Chi tiết 2: DT-004 - Nắp trên
- Vị trí: (0, 0, 40)
- Gờ định vị lọt vào trong vỏ

Giữ các chi tiết riêng biệt với màu khác nhau.
```

#### BVL-003: Tổng thể Sensor Unit

```
Tạo bản vẽ lắp BVL-003 - Tổng thể BB-01 Sensor Unit trong FreeCAD:
- Document name: "BVL003_TongThe_BB01"

Cụm 1: BVL-001 - Cụm khung gá
- Vị trí: gốc tọa độ (0, 0, 0)

Cụm 2: BVL-002 - Cụm vỏ
- Vị trí: (5, 5, 8)
- Vỏ bao quanh thành đứng và PCB

Giữ các chi tiết riêng biệt với màu khác nhau.
Hiển thị tổng thể assembly.
```

---

### Step 4: Export & BOM

#### Export prompts

```
Export chi tiết DT-001 sang STEP: BB01/DT001_DeGa.step
Export chi tiết DT-002 sang STEP: BB01/DT002_ThanhDung.step
Export chi tiết DT-003 sang STEP: BB01/DT003_VoBaoVe.step
Export chi tiết DT-004 sang STEP: BB01/DT004_NapTren.step
Export bản vẽ lắp BVL-003 sang STEP: BB01/BVL003_TongThe.step
```

#### BOM prompt

```
Tạo BOM cho bản vẽ lắp BVL-003 - Tổng thể BB-01 Sensor Unit:

Bao gồm:
1. Danh sách chi tiết gia công (mã số, tên, kích thước, vật liệu, số lượng)
2. Danh sách bu lông, đai ốc, vòng đệm cần thiết
3. Danh sách phụ kiện (cable gland, gasket nếu cần IP54)
```

---

## Template: Danh sách Bản vẽ

### Bản vẽ Chi tiết

| Mã số | Tên chi tiết | Kích thước chính | Vật liệu | SL |
|-------|--------------|------------------|----------|-----|
| DT-001 | | | | |
| DT-002 | | | | |
| DT-003 | | | | |

### Bản vẽ Lắp

| Mã số | Tên bản vẽ lắp | Chi tiết bao gồm | Ghi chú |
|-------|----------------|------------------|---------|
| BVL-001 | | | |
| BVL-002 | | | |

### Thứ tự vẽ

1. Chi tiết cơ sở (base parts) trước
2. Chi tiết phụ thuộc sau
3. Bản vẽ lắp cụm nhỏ
4. Bản vẽ lắp tổng thể cuối cùng

---

## Naming Convention

### Chi tiết (Parts)
- Format: `DT-XXX` (DT = Detail/Chi tiết)
- Document: `DTXXX_TenChiTiet`

### Bản vẽ lắp (Assemblies)
- Format: `BVL-XXX` (BVL = Bản Vẽ Lắp)
- Document: `BVLXXX_TenCum`

### Files
- STEP: `[MaSo]_[TenChiTiet].step`
- FreeCAD: `[MaSo]_[TenChiTiet].FCStd`

---

## Checklist

### Trước khi bắt đầu
- [ ] Requirements đã rõ ràng
- [ ] Đã tạo danh sách bản vẽ đầy đủ
- [ ] Đã xác định thứ tự vẽ

### Cho từng chi tiết
- [ ] Prompt đã bao gồm đủ thông tin
- [ ] Document name đúng format
- [ ] Kích thước chính xác
- [ ] Features đầy đủ (lỗ, rãnh, vát...)
- [ ] Review và chỉnh sửa nếu cần

### Cho bản vẽ lắp
- [ ] Tất cả chi tiết đã vẽ xong
- [ ] Vị trí từng chi tiết đã xác định
- [ ] Quan hệ lắp ghép đúng
- [ ] Màu sắc phân biệt rõ ràng

### Export
- [ ] STEP cho từng chi tiết
- [ ] STEP cho bản vẽ lắp tổng thể
- [ ] BOM đầy đủ với hardware
