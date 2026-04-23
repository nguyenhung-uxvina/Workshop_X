# DfX Rules Reference

Consolidated rules cho DfM, DfA, DfR, DfT. Search bằng category name.

---

## DfM - Design for Manufacturing

### DfM-001: Góc trong (Internal Corners)

**Rule**: R ≥ 0.5 × đường kính dao

| Dao | R min |
|-----|-------|
| Ø6mm | R3mm |
| Ø8mm | R4mm |
| Ø10mm | R5mm |

**Fail**: 🔴 HIGH - Không thể gia công
**Fix**: Thêm R phù hợp hoặc relief cut (dog bone)

---

### DfM-002: Tỷ lệ lỗ (Hole Depth)

**Rule**: Depth ≤ 4 × Diameter (standard drill)

| Ø | Max depth |
|---|-----------|
| 3mm | 12mm |
| 4mm | 16mm |
| 5mm | 20mm |
| 6mm | 24mm |

**Fail**: 🔴 HIGH - Gãy mũi khoan, lỗ lệch
**Fix**: Khoan 2 phía, tăng Ø, dùng gun drill

---

### DfM-003: Chiều dày thành (Wall Thickness)

**Rule by method**:
| Method | Min | Recommend |
|--------|-----|-----------|
| CNC Mill | 1.5mm | 2mm |
| CNC Turn | 1.0mm | 1.5mm |
| Die Cast | 2.0mm | 2.5mm |
| Sheet Metal | 0.5mm | 1mm |

**Fail**: 🟡 MEDIUM - Rung, biến dạng
**Fix**: Tăng dày hoặc thêm ribs

---

### DfM-004: Lỗ cách mép (Hole to Edge)

**Rule**: Khoảng cách ≥ 2 × đường kính lỗ

| Ø lỗ | Min cách mép |
|------|--------------|
| M3 (3.2mm) | 6.5mm |
| M4 (4.2mm) | 8.5mm |
| M5 (5.2mm) | 10.5mm |
| M6 (6.2mm) | 12.5mm |

**Fail**: 🔴 HIGH - Vỡ mép khi gia công/sử dụng
**Fix**: Dời lỗ ra xa mép

---

### DfM-005: Undercut

**Rule**: Tránh undercut cho 3-axis CNC

**Fail**: 🔴 HIGH - Cần 5-axis hoặc EDM
**Fix**: Thiết kế 2-piece, đổi geometry

---

### DfM-006: Dung sai (Tolerances)

**Cost impact**:
| Tolerance | Cost Factor |
|-----------|-------------|
| ±0.5mm | 1x |
| ±0.1mm | 1.5x |
| ±0.05mm | 2x |
| ±0.02mm | 3x |

**Fail**: 🟡 MEDIUM - Tăng cost
**Fix**: Tight tolerance chỉ cho mating surfaces

---

### DfM-007: Tool Access

**Rule**: Feature accessible cho dao

- Pocket depth ≤ 4 × tool Ø
- Clearance giữa features ≥ tool Ø + 2mm

**Fail**: 🔴 HIGH - Không gia công được
**Fix**: Mở rộng opening, giảm depth

---

## DfA - Design for Assembly

### DfA-001: Tool Accessibility

**Rule**: Clearance cho tools

| Tool | Min clearance |
|------|---------------|
| Screwdriver | 30mm above |
| Hex key | 25mm + key length |
| Socket wrench | 40mm + socket |
| Hand | 50mm Ø |

**Fail**: 🔴 HIGH - Không lắp được
**Fix**: Access holes, captive nuts

---

### DfA-002: Assembly Direction

**Rule**: Minimize reorientation

| Directions | Assessment |
|------------|------------|
| 1 | Excellent |
| 2 | Good |
| 3+ | Poor |

**Fail**: 🟡 MEDIUM - Tăng thời gian
**Fix**: Redesign cho top-down assembly

---

### DfA-003: Self-Locating

**Rule**: Parts tự định vị

**Good features**:
- Chamfers 30-45° tại holes
- Pilot boss
- Snap-fit ramps

**Fail**: 🟡 MEDIUM - Khó align
**Fix**: Thêm chamfer C0.5-C1

---

### DfA-004: Poka-Yoke (Error-Proofing)

**Rule**: Không thể lắp sai

- Đối xứng hoàn toàn OR
- Bất đối xứng rõ ràng

**Fail**: 🟡 MEDIUM - Lắp ngược
**Fix**: Asymmetric feature, polarizing

---

### DfA-005: Fastener Standardization

**Rule**: ≤3 loại fastener/assembly

| Types | Assessment |
|-------|------------|
| 1-2 | Excellent |
| 3-4 | Good |
| 5+ | Poor |

**Fail**: 🟢 LOW - Tăng inventory
**Fix**: Standardize sizes

---

### DfA-006: Vibration Resistance

**Rule**: Fasteners chống tự tháo

**Solutions**: Nyloc, Loctite, lock washer, safety wire

**Fail**: 🔴 HIGH cho defense
**Fix**: Specify locking method

---

## DfR - Design for Reliability

### DfR-001: Stress Concentration

**Rule**: Tránh góc nhọn tại vùng chịu lực

| Feature | Kt (stress factor) |
|---------|-------------------|
| Smooth | 1.0 |
| Fillet R/d=0.1 | 1.8 |
| Sharp corner | 3.0+ |

**Fail**: 🔴 HIGH - Nứt gãy
**Fix**: R ≥ 0.1×d, blend fillet

---

### DfR-002: Safety Factor

**Rule for defense**:
| Application | Min SF |
|-------------|--------|
| Static | 2.0 |
| Dynamic | 2.5 |
| Life safety | 3.0 |

**Fail**: 🔴 HIGH - Failure in service
**Fix**: Tăng section, stronger material

---

### DfR-003: Fatigue

**Rule**: Fillet tại cyclic load points

**Improvements**:
- Shot peening: +25% life
- Surface finish Ra ≤ 1.6μm
- Eliminate stress risers

**Fail**: 🔴 HIGH - Fatigue crack
**Fix**: Add fillets, improve finish

---

### DfR-004: Galvanic Corrosion

**Rule**: ΔV ≤ 0.25V giữa materials tiếp xúc

**Series** (noble → active):
Stainless → Titanium → Nickel → Steel → Aluminum → Zinc

**Fail**: 🟡 MEDIUM - Corrosion
**Fix**: Insulating washer, same material family, plating

---

### DfR-005: Thermal Expansion

**Rule**: Allow differential expansion

**CTE (μm/m/°C)**:
| Material | CTE |
|----------|-----|
| Steel | 11-12 |
| Aluminum | 23-24 |
| Titanium | 8-9 |

**ΔL = L × CTE × ΔT**

**Fail**: 🟡 MEDIUM - Binding, stress
**Fix**: Sliding joints, clearance

---

## DfT - Design for Test

### DfT-001: Measurement Access

**Rule**: Critical dims đo được

| Tool | Clearance |
|------|-----------|
| Caliper | 50mm opening |
| Micrometer | 30mm beyond |
| CMM | Line of sight |

**Fail**: 🔴 HIGH - Không verify được
**Fix**: Access ports, removable covers

---

### DfT-002: Visual Inspection

**Rule**: Critical areas visible

**Must see**:
- Weld seams
- Stress concentration points
- Surface defects

**Fail**: 🔴 HIGH cho safety welds
**Fix**: Inspection ports

---

### DfT-003: Test Points

**Rule**: Access cho test equipment

- Electrical: Test pads ≥1mm, spacing ≥2.54mm
- Pressure: Test ports
- Vibration: Sensor mounts

**Fail**: 🟡 MEDIUM - Difficult troubleshoot
**Fix**: Add test provisions

---

### DfT-004: Serial Number

**Rule**: Marking location defined

**Requirements**:
- Visible khi installed
- Không bị mài mòn
- Size ≥3mm height

**Fail**: 🟢 LOW
**Fix**: Define location, specify method

---

## Quick Checklist

### Critical (Always Check)
```
☐ DfM: Góc trong có R?
☐ DfM: Tỷ lệ lỗ ≤4:1?
☐ DfM: Lỗ cách mép ≥2×Ø?
☐ DfR: Fillet tại stress points?
☐ DfA: Tool access OK?
☐ DfT: Critical dims đo được?
```

### Defense-Specific
```
☐ Safety factor ≥2.0?
☐ Vibration-resistant fasteners?
☐ Corrosion protection?
☐ Field serviceable?
```
