---
project: VN-XUONG-UUV
phase: 2
type: stability-check
document: "009"
version: 1.0
created: 2026-03-07
updated: 2026-03-07
status: AI-DRAFT
data_confidence: LOW (10% L2, 20% L4, 70% L5 — chưa có hull lines hoặc hydrostatics)
changelog:
  - version: v1.0
    date: 2026-03-07
    author: AI (T2)
    changes: "Preliminary stability estimate dựa trên Doc 008 weight data. Parametric method — cần Phase 3 hydrostatics validation."
---

# VN-XUONG-UUV — Doc 009: Preliminary Stability Check v1.0

[AI-DRAFT v1]

## 1. Mục Đích

Kiểm tra sơ bộ tính ổn định ngang (transverse stability) và ảnh hưởng trim khi UUV trên ramp. Dùng để:
- Xác nhận GM >= 0.5m (yêu cầu F-07)
- Đánh giá stern trim khi recovery
- Xác định beam tối thiểu cần thiết
- Flag rủi ro cần Phase 3 validation

**Giới hạn:** Phương pháp parametric — không thay thế hydrostatics từ hull lines thực tế.

---

## 2. Thông Số Đầu Vào

### 2.1 Hull Geometry (Assumed)

| Parameter | Symbol | Value | Unit | Confidence |
|-----------|--------|-------|------|------------|
| LOA | L_OA | 8.0 | m | [L2] |
| LWL | L_WL | 7.2 | m | [L5] ~90% LOA |
| Beam molded | B | 2.8 | m | [L5] working assumption |
| Waterline beam | B_WL | 2.6 | m | [L5] chine spray rail offset |
| Depth molded (keel to sheer) | D | 1.1 | m | [L5] |
| Deadrise at midship | beta | 18 | deg | [L5] semi-planing workboat |
| Waterplane coefficient | C_w | 0.72 | — | [L4] typical V-hull workboat |
| Block coefficient | C_b | 0.45 | — | [L4] semi-planing |

### 2.2 Loading Conditions (từ Doc 008)

| Condition | Displacement (kg) | Notes |
|-----------|--------------------|-------|
| Lightship | 2,820 | Empty, no crew/fuel/UUV |
| Half load (transit) | 3,225 | Crew + half fuel, no UUV |
| Full load (LARS ops) | 3,843 | Crew + fuel + UUV on cradle |
| Recovery (worst-case) | 3,843 | UUV on ramp at stern |

---

## 3. Draft Estimation

Displaced volume:
```
V = Delta / rho_sw
```
Where rho_sw = 1,025 kg/m³ (seawater)

Mean draft:
```
T = V / (L_WL x B_WL x C_b)
```

| Condition | Delta (kg) | V (m³) | T (m) |
|-----------|-----------|--------|-------|
| Lightship | 2,820 | 2.75 | 0.327 |
| Half load | 3,225 | 3.15 | 0.374 |
| **Full load** | **3,843** | **3.75** | **0.445** |

Freeboard at full load: D - T = 1.1 - 0.445 = **0.655 m** [L5]
Freeboard ratio: F/D = 59.5% — adequate for SS 3-4 ops.

---

## 4. Vertical Center of Gravity (KG)

### 4.1 Lightship KG

| # | Subsystem | Mass (kg) | VCG from keel (m) | Moment (kg·m) |
|---|-----------|-----------|-------------------|---------------|
| 1 | Hull structure | 1,200 | 0.55 | 660 |
| 2 | Superstructure | 150 | 1.30 | 195 |
| 3 | Propulsion (twin OB) | 240 | 0.40 | 96 |
| 4 | LARS — Ramp | 180 | 0.45 | 81 |
| 5 | LARS — Winch | 120 | 0.50 | 60 |
| 6 | LARS — Channel | 100 | 0.55 | 55 |
| 7 | LARS — Cradle | 60 | 0.40 | 24 |
| 8 | Ramp tilt actuator | 40 | 0.35 | 14 |
| 9 | Genset | 200 | 0.30 | 60 |
| 10 | Electrical system | 80 | 0.25 | 20 |
| 11 | Nav/Comms | 20 | 1.50 | 30 |
| 12 | Fuel system (empty) | 30 | 0.25 | 7.5 |
| 13 | Deck fittings | 50 | 0.60 | 30 |
| 14 | Console + seats | 80 | 0.80 | 64 |
| 15 | Safety equipment | 15 | 0.90 | 13.5 |
| — | Margin (10%) | 257 | 0.50 | 128.5 |
| | **LIGHTSHIP** | **2,822** | | **1,538.5** |

**KG_lightship = 1,538.5 / 2,822 = 0.545 m** [L5]

### 4.2 Full Load KG

| Item | Mass (kg) | VCG (m) | Moment (kg·m) |
|------|-----------|---------|---------------|
| Lightship | 2,820 | 0.545 | 1,537 |
| Crew x 3 (standing) | 240 | 1.10 | 264 |
| UUV on cradle | 550 | 0.60 | 330 |
| Fuel (200L) | 170 | 0.25 | 42.5 |
| Tether cable | 13 | 0.50 | 6.5 |
| Stores + water | 50 | 0.40 | 20 |
| **FULL LOAD** | **3,843** | | **2,200** |

**KG_full = 2,200 / 3,843 = 0.572 m** [L5]

---

## 5. Metacentric Height (GM)

### 5.1 KB (Center of Buoyancy)

For V-bottom hull with deadrise:
```
KB ≈ 0.6 × T
```

| Condition | T (m) | KB (m) |
|-----------|-------|--------|
| Lightship | 0.327 | 0.196 |
| Full load | 0.445 | 0.267 |

### 5.2 BM (Metacentric Radius)

Transverse waterplane moment of inertia:
```
I_T = k × (L_WL × B_WL³) / 12
```
Where k = 0.65 (correction for fine-entry V-hull waterplane shape) [L5]

```
I_T = 0.65 × (7.2 × 2.6³) / 12
    = 0.65 × (7.2 × 17.576) / 12
    = 0.65 × 10.55
    = 6.86 m⁴
```

| Condition | V (m³) | BM = I_T / V (m) |
|-----------|--------|-------------------|
| Lightship | 2.75 | 2.49 |
| Full load | 3.75 | 1.83 |

### 5.3 GM Calculation

```
GM = KB + BM - KG
```

| Condition | KB (m) | BM (m) | KG (m) | **GM (m)** | Status |
|-----------|--------|--------|--------|-----------|--------|
| Lightship | 0.196 | 2.49 | 0.545 | **2.14** | PASS |
| Half load | 0.224 | 2.18 | 0.540 | **1.86** | PASS |
| **Full load** | **0.267** | **1.83** | **0.572** | **1.52** | **PASS** |

**Yêu cầu F-07: GM >= 0.5 m → TẤT CẢ ĐẠT** [L5]

---

## 6. Beam Sensitivity Analysis

Beam chưa xác nhận (range 2.6 - 3.2 m). GM phụ thuộc mạnh vào B³:

| Beam B_WL (m) | I_T (m⁴) | BM (m) | GM full load (m) | Status |
|---------------|----------|--------|-------------------|--------|
| **2.4** | **5.29** | **1.41** | **1.11** | PASS |
| 2.6 | 6.86 | 1.83 | 1.52 | PASS |
| 2.8 | 8.43 | 2.25 | 1.94 | PASS |
| 3.0 | 10.40 | 2.77 | 2.47 | PASS |
| 3.2 | 12.58 | 3.35 | 3.05 | PASS |

**Kết luận: Ngay cả beam tối thiểu 2.4m vẫn cho GM = 1.11m >> 0.5m.**
Transverse stability KHÔNG phải binding constraint cho thiết kế beam.

---

## 7. Trim Analysis — UUV Recovery (Critical Case)

### 7.1 Longitudinal Center of Gravity (LCG)

LCG tính từ transom (positive forward):

| Item | Mass (kg) | LCG (m) | Moment (kg·m) |
|------|-----------|---------|---------------|
| Hull structure | 1,200 | 4.0 | 4,800 |
| Superstructure | 150 | 3.5 | 525 |
| Propulsion (transom) | 240 | 0.3 | 72 |
| LARS — Ramp | 180 | 0.5 | 90 |
| LARS — Winch | 120 | 2.0 | 240 |
| LARS — Channel | 100 | 1.5 | 150 |
| LARS — Cradle | 60 | 2.5 | 150 |
| Ramp tilt actuator | 40 | 1.0 | 40 |
| Genset | 200 | 3.5 | 700 |
| Electrical | 80 | 4.0 | 320 |
| Nav/Comms | 20 | 5.0 | 100 |
| Fuel system | 30 | 3.5 | 105 |
| Deck fittings | 50 | 4.0 | 200 |
| Console + seats | 80 | 5.0 | 400 |
| Safety equip | 15 | 4.0 | 60 |
| Margin | 257 | 3.5 | 900 |
| **Lightship** | **2,822** | | **8,852** |

**LCG_lightship = 8,852 / 2,822 = 3.14 m from transom (39.2% LOA)**

### 7.2 Full Load — Normal (UUV on Cradle)

| Item | Mass (kg) | LCG (m) | Moment (kg·m) |
|------|-----------|---------|---------------|
| Lightship | 2,820 | 3.14 | 8,852 |
| Crew x 3 | 240 | 4.5 | 1,080 |
| UUV on cradle | 550 | 3.0 | 1,650 |
| Fuel | 170 | 3.5 | 595 |
| Others | 63 | 3.0 | 189 |
| **Full load** | **3,843** | | **12,366** |

**LCG_full = 12,366 / 3,843 = 3.22 m from transom (40.2% LOA)** — Acceptable range.

### 7.3 Recovery — UUV on Stern Ramp (Worst Case)

UUV slides from cradle (LCG = 3.0m) to stern ramp (LCG = 0.5m):

```
Moment shift = 550 kg × (3.0 - 0.5) m = 1,375 kg·m AFT
New LCG = (12,366 - 1,375) / 3,843 = 10,991 / 3,843 = 2.86 m from transom
LCG shift = 3.22 - 2.86 = 0.36 m AFT
```

### 7.4 Trim Change Estimate

Approximate trim by stern:
```
Trim change ≈ (Delta × LCG_shift) / (rho × g × I_L)
```

Longitudinal waterplane inertia:
```
I_L = C_IL × B_WL × L_WL³ / 12
    ≈ 0.70 × 2.6 × 7.2³ / 12
    = 0.70 × 2.6 × 373.2 / 12
    = 0.70 × 79.8
    = 55.9 m⁴

BM_L = I_L / V = 55.9 / 3.75 = 14.9 m
GM_L ≈ BM_L (vì KB - KG nhỏ so với BM_L)

Trim = (Delta × LCG_shift) / (Delta × GM_L / L_WL)
     = LCG_shift × L_WL / GM_L
     = 0.36 × 7.2 / 14.9
     = 0.174 m
```

**Stern trim khi recovery: ~0.17 m (17 cm)** [L5]

| Parameter | Normal | Recovery | Delta |
|-----------|--------|----------|-------|
| LCG from transom | 3.22 m | 2.86 m | -0.36 m |
| Trim by stern | ~0 | ~0.17 m | +17 cm |
| Draft at transom | 0.445 m | ~0.53 m | +8.5 cm |
| Draft at bow | 0.445 m | ~0.36 m | -8.5 cm |
| Freeboard at stern | 0.655 m | ~0.57 m | -8.5 cm |

**Assessment: Stern trim 17 cm manageable.** Freeboard at stern vẫn >= 0.57 m khi recovery — adequate cho SS 2 ops. Tại SS 3 cần attention nhưng không block.

---

## 8. Heeling — Crew on One Side

Worst case: 2 crew (160 kg) di chuyển sang 1 mạn, offset 1.0 m from CL.

```
Heeling moment = 160 × 9.81 × 1.0 = 1,569 N·m
Righting moment at 1° = Delta × g × GM × sin(1°)
                       = 3,843 × 9.81 × 1.52 × 0.01745
                       = 1,000 N·m

Heel angle ≈ heeling moment / (Delta × g × GM × pi/180)
           = 1,569 / (3,843 × 9.81 × 1.52 × 0.01745)
           ≈ 1,569 / 1,000
           ≈ 1.6°
```

**Heel angle ~1.6°** — negligible. [L5]

---

## 9. Summary & Risk Assessment

### 9.1 Results

| Check | Criterion | Result | Status |
|-------|-----------|--------|--------|
| GM transverse (full load) | >= 0.5 m (F-07) | **1.52 m** | **PASS** |
| GM transverse (lightship) | >= 0.5 m | **2.14 m** | PASS |
| GM vs beam range | >= 0.5 m at B_min = 2.4 m | 1.11 m | PASS |
| Stern trim (recovery) | Freeboard > 0.4 m | 0.57 m | PASS |
| Crew heel | < 5° one-side shift | 1.6° | PASS |
| Freeboard (full load) | Adequate for SS 3 | 0.655 m | PASS |

### 9.2 Confidence Level

| Aspect | Confidence | Note |
|--------|------------|------|
| GM direction (pass/fail) | HIGH | Margin rất lớn (3× requirement) — kết luận robust |
| GM absolute value | LOW | Phụ thuộc hull form thực tế, cần hydrostatics |
| Trim magnitude | LOW | Simplified estimate, cần 3D hull model |
| KG values | MEDIUM | Bottom-up estimate hợp lý, ±15% |

### 9.3 Key Findings

1. **Transverse stability NOT a binding constraint.** GM = 1.52m tại full load = 3× yêu cầu 0.5m. Ngay cả beam tối thiểu 2.4m vẫn pass.
2. **Beam có thể chọn theo criteria khác** (deck space, LARS layout, resistance) — không bị ràng buộc bởi stability.
3. **Stern trim khi recovery manageable** (~17 cm). UUV 550 kg chỉ chiếm 14.3% displacement — ảnh hưởng moderate.
4. **Freeboard adequate** cho SS 3 ops (>= 0.57 m tại stern worst-case).

### 9.4 Risks Requiring Phase 3 Validation

| Risk | Severity | Mitigation |
|------|----------|------------|
| R1: Hull weight sai lệch > 20% | Medium | Validate với shipyard estimate (Doc 008 Action #1) |
| R2: VCG cao hơn do superstructure/equipment | Low | GM margin = 3× → absorb được |
| R3: Dynamic stability (rolling) chưa kiểm tra | Medium | Cần seakeeping partner assessment |
| R4: Free surface effect (fuel tank) | Low | Tank < 5% displacement → negligible |
| R5: Stern flooding risk tại SS 4+ | High | Design scupper + self-draining cockpit (Phase 3) |

---

## 10. Action Items

- [ ] **Phase 3:** Confirm beam → run detailed hydrostatics (hull lines + software)
- [ ] **Phase 3:** Inclining test plan (SAT criterion S-04)
- [ ] **Seakeeping partner:** Roll period + dynamic stability assessment
- [ ] **Phase 3:** Self-draining stern design (R5 mitigation)
- [ ] Update Doc 008 hull weight khi có shipyard quote → re-run stability
- [ ] ICD response: UUV wet weight (A10) → update deadweight calculation

---

*Doc 009 Stability Check Preliminary v1.0 | VN-XUONG-UUV Phase 2 Conceptual Design | COD: Offload (O2) — AI calculated, human verify*
