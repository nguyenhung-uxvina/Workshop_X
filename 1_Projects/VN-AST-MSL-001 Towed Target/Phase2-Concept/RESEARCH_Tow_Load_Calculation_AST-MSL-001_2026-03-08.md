---
created: 2026-03-08
source: research-pipeline (Quick Mode — Claude direct analysis)
topic: "Tow load, drag, and mooring force calculation for VN-AST-MSL-001"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox]
project: VN-AST-MSL-001
resolves: R-J08, R-J01, R-D04
---

# PHÂN TÍCH LỰC KÉO & NEO — VN-AST-MSL-001 "THANH TRI"

> Mục tiêu: Resolve 3 TBD force values trong Requirements List v1.2

---

## 1. THÔNG SỐ ĐẦU VÀO

### 1.1 Hull Envelope (từ Phase 1 + DMIR Reference)

Chưa chọn concept Phase 2 → tính cho **dải thiết kế** (design envelope):

| Thông số | Min | Reference | Max | Đơn vị | Ghi chú |
|----------|-----|-----------|-----|--------|---------|
| LOA / Diameter | 6.0 | 6.0 (ring) | 10.0 | m | R-B05: ≤ 10m |
| Beam / Width | 6.0 | 8.0 (+ pontoon) | 10.0 | m | Circular or barge |
| Draft (T) | 0.3 | 0.39 | 0.8 | m | R-C06: ≤ 1.5m |
| Freeboard | 0.4 | 0.61 | 1.0 | m | R-C03: ≥ 0.4m |
| Height above WL (tổng) | 3.0 | 4.5 | 5.0 | m | R-B06: ≥ 3.0m |
| Displacement (Δ) | 2,000 | 3,332 | 5,000 | kg | R-B10: ≤ 5,000 kg |
| Wetted surface (S) | 30 | 50 | 80 | m² | Estimated |

### 1.2 Điều Kiện Môi Trường

| Điều kiện | SS 3-4 (neo đậu) | SS 5 (kéo ra) | Nguồn |
|-----------|-------------------|---------------|-------|
| Hs (sig. wave height) | 1.25 – 2.5 | 2.5 – 4.0 | WMO Sea State Scale |
| Tp (peak period) | 5 – 8 | 7 – 10 | Biển Đông typical |
| Wind speed (sustained) | 11 – 21 | 17 – 25 | Beaufort 4-5 / 6-7 |
| Current | 0.5 – 1.0 | 0.5 – 1.5 | knots, R-D01: ≤ 2.0 kt |

### 1.3 Towing Parameters

| Thông số | Value | Đơn vị | Nguồn |
|----------|-------|--------|-------|
| Tốc độ kéo (Vtow) | 5 | knots (2.57 m/s) | R-J08 |
| Tốc độ kéo tối thiểu | 3 | knots (1.54 m/s) | R-J03 |
| Tug power | ≥ 100 HP (75 kW) | — | R-J10 |
| Towline length | ≥ 50m hoặc ≥ 3x depth | m | R-J09 |

---

## 2. PHƯƠNG PHÁP TÍNH

### 2.1 Tổng Quan Phương Pháp

Với platform dạng **non-ship-shape** (circular/barge, low L/B ratio), các phương pháp truyền thống như Holtrop-Mennen (tối ưu cho tàu L/B > 5) **KHÔNG phù hợp**.

**Phương pháp áp dụng:**

| Thành phần | Phương pháp | Tham chiếu |
|------------|-------------|------------|
| Frictional resistance (Rf) | ITTC 1957 friction line | ITTC 7.5-02-02-01 |
| Form/pressure drag (Rp) | Flat plate Cd approach | Hoerner, "Fluid-Dynamic Drag" |
| Wave-making resistance (Rw) | Empirical — negligible at Fn < 0.15 | — |
| Wind resistance (Rwind) | OCIMF / flat plate aerodynamic drag | OCIMF MEG4 |
| Added resistance in waves (Raw) | Simplified Faltinsen method | Faltinsen (1990), Ch. 5 |
| Dynamic amplification | Towline snatch factor | DNV-OS-H202 / DNVGL-ST-N001 |

### 2.2 Tại Sao Không Dùng Holtrop-Mennen

Holtrop-Mennen (1984) regression dựa trên database **tàu thương mại** với:
- L/B = 5 – 8
- Cb = 0.55 – 0.85
- Fn = 0.1 – 0.5

VN-AST-MSL-001 là platform **tròn/phẳng** với L/B ≈ 1, draft rất nông (0.3-0.8m), Froude number cực thấp → hoàn toàn ngoài domain của Holtrop-Mennen.

**Đúng hơn:** dùng phương pháp **component-based drag estimation** giống tính lực cản cho barge/pontoon/mooring buoy (OCIMF, DNV, Hoerner).

---

## 3. TÍNH TOÁN R-J08 — LỰC CẢN KÉO Ở 5 KNOTS

### 3.1 Frictional Resistance (Rf)

```
Rf = 0.5 × ρ × V² × S × Cf

Với:
  ρ  = 1,025 kg/m³ (nước biển)
  V  = 2.57 m/s (5 knots)
  S  = wetted surface area (m²)
  Cf = ITTC 1957 friction coefficient
```

**ITTC 1957:**
```
Cf = 0.075 / (log₁₀(Re) - 2)²

Re = V × L / ν
   = 2.57 × 6.0 / 1.19×10⁻⁶
   = 1.30 × 10⁷

Cf = 0.075 / (log₁₀(1.30×10⁷) - 2)²
   = 0.075 / (7.114 - 2)²
   = 0.075 / 26.14
   = 0.00287
```

**Wetted surface estimation (circular platform):**
```
Platform dạng vòng tròn D = 6m, draft T = 0.4m:
  Bottom:  π/4 × 6² = 28.3 m²
  Side:    π × 6 × 0.4 = 7.5 m²
  Pontoons (6 × cylinder Ø0.5m × 1.0m): 6 × π × 0.5 × 1.0 = 9.4 m²
  Total S ≈ 45 m² (Reference design)

Range: 30 – 80 m² (design envelope)
```

**Rf calculations:**

| S (m²) | Rf (kN) |
|---------|---------|
| 30 | 0.29 |
| **45** | **0.44** |
| 80 | 0.78 |

### 3.2 Pressure/Form Drag (Rp)

Cho hull dạng blunt body (L/B ≈ 1), form drag **LỚN HƠN** friction drag — khác hoàn toàn với tàu dài.

```
Rp = 0.5 × ρ × V² × Ap × Cd

Với:
  Ap = projected underwater frontal area (m²)
     = Beam × Draft = 6.0 × 0.4 = 2.4 m² (ref design)
  Cd = drag coefficient for blunt body
     = 1.0 – 1.5 (flat plate ≈ 1.2, cylinder ≈ 1.0, rounded ≈ 0.8)

Dùng Cd = 1.2 (conservative, flat-front platform):
  Rp = 0.5 × 1025 × 2.57² × 2.4 × 1.2
     = 0.5 × 1025 × 6.60 × 2.4 × 1.2
     = 9.73 kN
```

**Range theo design envelope:**

| Ap (m²) | Cd | Rp (kN) |
|---------|-----|---------|
| 1.8 (6m × 0.3m) | 0.8 | 4.87 |
| **2.4 (6m × 0.4m)** | **1.2** | **9.73** |
| 8.0 (10m × 0.8m) | 1.2 | 32.4 |

> **KEY INSIGHT:** Form drag chiếm **~95%** tổng resistance cho blunt hull tại V = 5 kt. Friction gần như không đáng kể. Đây là khác biệt cơ bản so với tàu thon dài.

### 3.3 Wave-Making Resistance (Rw)

```
Froude Number: Fn = V / √(g × L) = 2.57 / √(9.81 × 6) = 2.57 / 7.67 = 0.335
```

Fn = 0.335 — nằm trong vùng tạo sóng đáng kể cho tàu thon, nhưng cho blunt body, wave pattern rất khác (breaking bow wave, không phải Kelvin wake). Đã implicit trong Cd cao = 1.2.

**Rw ≈ 0** (đã included trong Cd form drag)

### 3.4 Wind Resistance (Rwind)

```
Rwind = 0.5 × ρ_air × Vrel² × Awind × Cd_air

Với:
  ρ_air  = 1.225 kg/m³
  Vrel   = Vtow + Vwind (headwind worst case)
         = 2.57 + 10 = 12.57 m/s (SS 5, 20kt wind + 5kt tow)
  Awind  = projected windage area above waterline
         = Mast + reflectors + hull freeboard
         ≈ 3.0 × 4.0 = 12 m² (reference design with superstructure)
  Cd_air = 1.0 (lattice + flat surfaces)

  Rwind = 0.5 × 1.225 × 12.57² × 12 × 1.0
        = 0.5 × 1.225 × 158.0 × 12
        = 1.16 kN
```

**Range:**

| Awind (m²) | Vrel (m/s) | Rwind (kN) |
|------------|------------|------------|
| 8 | 10 | 0.49 |
| **12** | **12.57** | **1.16** |
| 20 | 15 | 2.76 |

### 3.5 Tổng Hợp R-J08 — Calm Water Tow Drag

```
R_total = Rf + Rp + Rw + Rwind

Reference design:
  = 0.44 + 9.73 + 0 + 1.16
  = 11.33 kN
```

| Case | Rf | Rp | Rwind | **R_total** |
|------|-----|-----|-------|-------------|
| **Min (streamlined, small)** | 0.29 | 4.87 | 0.49 | **5.65 kN** |
| **Reference** | 0.44 | 9.73 | 1.16 | **11.33 kN** |
| **Max (large, flat)** | 0.78 | 32.4 | 2.76 | **35.9 kN** |

### 3.6 Added Resistance in Waves (Raw) — SS 5

Khi kéo trong sóng, target bị sóng tác dụng thêm lực **mean wave drift force** và **added resistance do motion**:

```
Raw ≈ ρ × g × B² × (Hs / λ)² × L / 16    (simplified Faltinsen)

Hoặc đơn giản hơn — empirical multiplier:
  Raw / R_calm ≈ 0.3 – 1.0 cho SS 5 (Hs = 3.25m, platform 6m)

Lý do multiplier cao: platform size ≈ wavelength → maximum wave interaction
  λ (SS 5, Tp = 8s) = g × Tp² / (2π) = 9.81 × 64 / 6.28 = 100m
  B/λ = 6/100 = 0.06 → relatively small vs wavelength → moderate added resistance

Dùng multiplier 0.5 cho reference case:
  Raw = 0.5 × 11.33 = 5.67 kN
```

### 3.7 KẾT QUẢ R-J08

```
R-J08 = R_calm + Raw

Reference: 11.33 + 5.67 = 17.0 kN (in SS 5)
```

| Scenario | Calm water | Added (waves) | **R-J08 Total** |
|----------|-----------|---------------|-----------------|
| **Best case** | 5.65 | 1.7 (30%) | **7.4 kN** |
| **Reference** | 11.33 | 5.67 (50%) | **17.0 kN** |
| **Worst case** | 35.9 | 35.9 (100%) | **71.8 kN** |

> **ĐỀ XUẤT R-J08 = 17 kN** (reference design, SS 5, 5 knots)
> Range: 7 – 72 kN tùy hull form → Phase 2 concept selection sẽ thu hẹp range này.

---

## 4. TÍNH TOÁN R-J01 — TẢI KÉO THIẾT KẾ (TOWING BRIDLE)

### 4.1 Phương Pháp

Tải kéo thiết kế = steady tow drag × **dynamic amplification factor (DAF)** × **safety factor (SF)**.

DAF là "snatch factor" — khi sóng gây gia tốc/giảm tốc đột ngột, towline bị giật.

**Tham chiếu:**
- **DNV-OS-H202** (Towing): DAF = 1.5 – 3.0 cho towline snatch loads
- **OCIMF MEG4**: DAF = 2.0 cho barge tow
- **ABS Guide for Towage**: Safety factor 2.0 on breaking strength

### 4.2 Dynamic Amplification Factor (DAF)

| Yếu tố | Tăng DAF | Giảm DAF |
|---------|----------|----------|
| Towline ngắn (< 100m) | ✓ | |
| Towline nylon (stretch) | | ✓ |
| Towline wire/chain (stiff) | ✓ | |
| Sea State cao | ✓ | |
| Platform nhẹ (low inertia) | ✓ | |
| Catenary sâu | | ✓ |

VN-AST-MSL-001:
- Towline ≥ 50m (R-J09) — trung bình
- Platform nhẹ (3-5 tấn) — **DAF cao**
- SS 5 — **DAF cao**
- Có thể dùng nylon pendant → giảm DAF

**Chọn DAF = 2.5** (conservative cho platform nhẹ, SS 5, medium towline)

### 4.3 Safety Factor

| Tiêu chuẩn | SF on design load | SF on breaking strength |
|-------------|-------------------|------------------------|
| DNV-OS-H202 | 1.5 | 3.0 |
| ABS Towing | — | 2.0 |
| Workshop X (defense) | **1.5** | **3.0** |

Dùng **SF = 1.5** trên design load (= SF 3.0 trên breaking strength towline).

### 4.4 KẾT QUẢ R-J01

```
R-J01 = R-J08 × DAF × SF
      = 17.0 × 2.5 × 1.5
      = 63.75 kN
      ≈ 64 kN

(Tương đương ~6.5 tấn lực)
```

| Scenario | R-J08 | DAF | SF | **R-J01** |
|----------|-------|-----|-----|-----------|
| **Best case** | 7.4 | 2.0 | 1.5 | **22 kN** |
| **Reference** | 17.0 | 2.5 | 1.5 | **64 kN** |
| **Worst case** | 71.8 | 3.0 | 1.5 | **323 kN** |

> **ĐỀ XUẤT R-J01 = 64 kN** (tổng tải kéo, ~6.5 tấn)
> Proof test: 1.25 × 64 = 80 kN
> Towline breaking strength: ≥ 3.0 × 64 = 192 kN (≈ 20 tấn)

**Cross-check với DMIR reference:**
- DMIR LC4 "Mooring snap load" = 120 kN × 1.5 = 180 kN →
- R-J01 = 64 kN < 120 kN → **hợp lý** (tow load thấp hơn snap load vì towline có catenary)

### 4.5 Multi-Point Towing Bridle

Kéo có thể dùng bridle đa điểm — phân bố tải kéo lên nhiều attachment points trên hull.

#### Tại sao multi-point bridle?

Platform tròn/blunt không có bow rõ ràng → single towing eye gây:
- Tập trung ứng suất tại 1 điểm trên hull HDPE/composite
- Yawing không kiểm soát (platform xoay quanh towing eye)
- Hull HDPE khó chịu point load 64 kN

Multi-point bridle giải quyết cả 3 vấn đề.

#### 4.5.1 Bridle 2-Point (V-bridle)

```
V-bridle, 2 điểm trên hull, góc mở 60°:

      Towline
        │
        ▼
       ╱ ╲  ← bridle legs
      ╱   ╲
  ───●─────●───  hull
   P1       P2

  Total tow force: F = 64 kN (R-J01)
  Bridle angle: α = 30° (mỗi bên so với centerline)

  Force per leg:  F_leg = F / (2 × cos α)
                       = 64 / (2 × cos 30°)
                       = 64 / 1.732
                       = 37 kN per leg

  Force per hull attachment:
    Horizontal (forward): F_leg × cos α = 37 × 0.866 = 32 kN
    Lateral (outward):    F_leg × sin α = 37 × 0.500 = 18.5 kN
```

#### 4.5.2 Bridle 3-Point (Y-bridle)

```
Y-bridle, 3 điểm, center + 2 side:

      Towline
        │
       ╱│╲
      ╱ │ ╲
  ───●──●──●───  hull
   P1  P2  P3

  F = 64 kN
  Mỗi leg: ~21 kN (symmetric) → ~25 kN per leg (considering asymmetry)
```

#### 4.5.3 So Sánh Single vs Multi-Point Towing

| Tiêu chí | Single Eye | V-Bridle (2pt) | Y-Bridle (3pt) |
|----------|-----------|----------------|-----------------|
| Load per point | 64 kN | 37 kN | 25 kN |
| Yaw control | Kém — platform xoay | Tốt — tự centering ✓ | Rất tốt ✓ |
| Hull stress | Cao — point load | Phân bố ✓ | Phân bố tốt nhất ✓ |
| Complexity | Đơn giản ✓ | Vừa | Phức tạp |
| HDPE compatibility | Khó — cần reinforced plate | Tốt hơn ✓ | Tốt nhất ✓ |
| Towline fouling risk | Thấp ✓ | Vừa | Cao — 3 legs tangling |
| Deployment | Nhanh ✓ | Vừa | Chậm |

> **Kết luận:** **V-bridle (2-point)** là sweet spot cho platform tròn HDPE:
> - Giảm load per point từ 64 → 37 kN
> - Tự centering tốt (chống yaw)
> - Đơn giản hơn Y-bridle
> - 2 attachment points ở fore-quarter hull, cách nhau ~2-3m
>
> **Hull reinforcement:** Mỗi attachment point cần steel backing plate 200×200×10mm, bolted qua hull, load spreading washer bên trong.
> Load per bolt group: 37 kN → 4× M16 Grade 8.8 (proof load 4 × 61 = 244 kN >> 37 kN) ✓

---

## 5. TÍNH TOÁN R-D04 — TẢI TRỌNG NEO THIẾT KẾ

### 5.1 Phương Pháp

Neo đậu ở SS 3-4 (không phải SS 5). Lực tác dụng lên neo:

```
F_mooring = F_wind + F_current + F_wave_drift

Với dynamic amplification cho wave-induced yawing/surging.
```

### 5.2 Wind Force (neo đậu, SS 3-4)

```
F_wind = 0.5 × ρ_air × V² × Awind × Cd

  V_wind = 15 m/s (SS 4, ~30 knots gust)
  Awind  = 12 m² (reference)
  Cd     = 1.0

  F_wind = 0.5 × 1.225 × 225 × 12 × 1.0
         = 1.65 kN
```

### 5.3 Current Force

```
F_current = 0.5 × ρ × V² × Ap_underwater × Cd

  V_current = 1.0 m/s (≈ 2 knots, R-D01)
  Ap         = 2.4 m² (reference)
  Cd         = 1.2

  F_current = 0.5 × 1025 × 1.0 × 2.4 × 1.2
            = 1.48 kN
```

### 5.4 Wave Drift Force (SS 3-4)

```
F_drift ≈ 0.5 × ρ × g × B × Hs² / 4    (mean drift force — simplified)

  B  = 6.0 m
  Hs = 2.0 m (SS 3-4 trung bình)

  F_drift = 0.5 × 1025 × 9.81 × 6.0 × 4.0 / 4
          = 30.2 kN
```

> **Wave drift force CHIẾM CHỦ ĐẠO** cho neo đậu — lớn gấp 10-20 lần wind và current.

### 5.5 Steady Mooring Load

```
F_steady = F_wind + F_current + F_drift
         = 1.65 + 1.48 + 30.2
         = 33.3 kN
```

### 5.6 Dynamic Effects — Mooring Snatch

Mooring line cũng bị snatch loads tương tự towline:

```
DAF (mooring) = 2.0 – 3.0
  - Platform nhẹ → DAF cao
  - Chain catenary giúp giảm → DAF = 2.0
  - SS 3-4 (thấp hơn SS 5) → DAF vừa

Chọn DAF = 2.5
SF = 1.5 (defense standard)
```

### 5.7 KẾT QUẢ R-D04

```
R-D04 = F_steady × DAF × SF
      = 33.3 × 2.5 × 1.5
      = 125 kN

(Tương đương ~12.7 tấn lực)
```

> **ĐỀ XUẤT R-D04 = 125 kN** (~12.7 tấn)

**Cross-check với DMIR reference:**
- DMIR LC4 "Mooring snap load" = 120 kN → **rất gần** (125 vs 120 kN)
- Confirms DMIR analysis was reasonable

### 5.8 Anchor & Mooring System Sizing

**Ràng buộc:** Single-point mooring, depth ≥ 50m (R-D03)

#### 5.8.1 Chain Catenary tại 50m Depth

Single-point mooring dùng catenary chain — chain tự nằm trên đáy biển tạo "buffer" hấp thụ dynamic loads.

```
Catenary analysis:
  Depth (d)     = 50 m
  Scope ratio   = chain length / depth

  Scope 3:1 → 150m chain — chain vừa nhấc khỏi đáy, góc ≈ 20° tại anchor
  Scope 5:1 → 250m chain — chain nằm đáy nhiều, góc ≈ 0° tại anchor (tốt nhất)
  Scope 7:1 → 350m chain — dư thừa, tốn chi phí

  Rule: Anchor chỉ chịu lực ngang nếu chain nằm phẳng trên đáy (scope ≥ 5:1)
  → Minimum chain: 250m (scope 5:1 tại 50m depth)
```

#### 5.8.2 Chain Sizing

```
Chain phải chịu R-D04 = 125 kN với SF ≥ 2.0 trên MBL:
  MBL_chain ≥ 125 × 2.0 = 250 kN

  Chain Grade 3 (stud-link):
    Ø14mm → MBL = 196 kN ✗ (thiếu)
    Ø16mm → MBL = 250 kN ✓ (vừa đủ)
    Ø19mm → MBL = 356 kN ✓ (conservative, recommended)

  Weight (Ø16mm Grade 3): ~5.6 kg/m
  250m × 5.6 = 1,400 kg chain weight

  Weight (Ø19mm Grade 3): ~7.9 kg/m
  250m × 7.9 = 1,975 kg chain weight
```

> **CẢNH BÁO:** 1,400 – 2,000 kg chain + anchor weight → tổng mooring system ~ 2,000 – 2,500 kg.
> Đây là **40-50% dry weight** của platform (R-B10: ≤ 5,000 kg).
> → Mooring system weight là constraint quan trọng cho Phase 2 concept.

#### 5.8.3 Anchor Sizing

```
Horizontal load tại anchor = R-D04 = 125 kN (với scope ≥ 5:1, chain nằm phẳng)

  Danforth/Fluke anchor: holding factor ≈ 10–20× weight (cát)
    → 125 / 15 = 8.3 kN → ~850 kg anchor

  Helix screw anchor: holding factor ≈ 20–30× (capacity)
    → 125 / 25 = 5.0 kN → ~500 kg anchor
    Ưu điểm: nhỏ hơn, nhưng cần thiết bị xoáy vào đáy

  Bruce/Delta anchor: holding factor ≈ 15–25× (phù hợp đáy bùn-cát Biển Đông)
    → 125 / 20 = 6.25 kN → ~640 kg anchor
```

#### 5.8.4 Watch Circle (R-D05: ≤ 50m)

```
Watch circle radius ≈ √(scope² × d² - d²) + chain stretch
  Scope 5:1, d = 50m:
    Horizontal reach = √(250² - 50²) = √(62500 - 2500) = √60000 = 245m

  NHƯNG: chain catenary giữ phần lớn chain trên đáy
    Thực tế watch circle ≈ 30–60m (phụ thuộc dòng chảy + gió)

  R-D05 yêu cầu ≤ 50m → CẦN KIỂM TRA bằng mooring analysis chi tiết
  → Nếu không đạt: tăng anchor size, hoặc dùng sinker weight trên chain
```

#### 5.8.5 Single-Point vs Multi-Point Trade-off

| Tiêu chí | Single-Point | Multi-Point (2-3 anchors) |
|----------|-------------|--------------------------|
| Triển khai | Nhanh (R-D06: ≤ 60 min) ✓ | Chậm (2-3× thời gian) |
| Watch circle | Lớn (~30-60m) | Nhỏ (~5-10m) ✓ |
| Weather vane | Tự xoay theo gió/sóng ✓ | Cố định hướng |
| Mooring load | Toàn bộ 125 kN 1 chain | Phân bố → mỗi chain nhỏ hơn |
| Chain weight | 1 × 1,400 kg | 2-3 × 700 kg = tổng lớn hơn |
| Thu hồi | Nhanh (R-D07: ≤ 45 min) ✓ | Chậm |

> **Kết luận:** Multi-point (≥ 2 anchors) là baseline design.
> - Watch circle nhỏ (≤ 50m dễ đạt R-D05) ✓
> - Load phân bố → chain/anchor nhỏ hơn per leg ✓
> - Trade-off: deployment time tăng → cần tối ưu quy trình triển khai (R-D06: ≤ 60 min)
> - Single-point giữ làm fallback option nếu cần triển khai siêu nhanh

#### 5.8.6 Multi-Point Mooring Sizing (Baseline: 3-point)

```
3-point mooring, 120° spacing:

  Load distribution (worst case — 1 leg takes majority):
    Max load per leg ≈ R-D04 / cos(30°) ≈ 125 / 0.866 = 144 kN per leg?

  KHÔNG — phân tích chính xác hơn:
    Wind/current/wave drift có hướng cố định → 1 leg chịu chính
    2 leg kia chịu side component

    Windward leg:  F1 = R-D04 × 0.577 = 72 kN (cho 3-point symmetric)
    Leeward legs:  F2 = F3 = R-D04 × 0.289 = 36 kN each

  → Design mỗi leg cho 72 kN (windward worst case) × SF 1.5 = 108 kN

Chain per leg (108 kN, scope 5:1 tại 50m):
  MBL ≥ 108 × 2.0 = 216 kN
  Ø14mm Grade 3: MBL = 196 kN → vừa thiếu
  Ø16mm Grade 3: MBL = 250 kN ✓

  Length per leg: 250m
  Weight per leg: 250 × 5.6 = 1,400 kg
  Total 3 legs: 4,200 kg chain

  → VƯỢT R-B10 (dry weight ≤ 5,000 kg)!
```

> **CRITICAL:** 3-point × 250m chain = 4,200 kg — KHÔNG khả thi cho platform 5 tấn.
>
> **Giải pháp:**
>
> | Option | Chain | Total weight | Ghi chú |
> |--------|-------|-------------|---------|
> | A: 3-point, giảm scope 3:1 | 3 × 150m × 5.6 = 2,520 kg | + 3 anchors ~300 kg = 2,820 kg | Scope thấp → góc chain tại anchor > 0° → cần anchor chịu vertical |
> | B: 2-point, scope 5:1 | 2 × 250m × 5.6 = 2,800 kg | + 2 anchors ~400 kg = 3,200 kg | Thừa weight |
> | C: 2-point, scope 3:1 | 2 × 150m × 5.6 = 1,680 kg | + 2 anchors ~400 kg = 2,080 kg | **Khả thi** |
> | D: 3-point, combo chain+rope | 3 × (50m chain + 150m nylon) = 840 + 300 = 1,140 kg | + 3 anchors ~300 kg = 1,440 kg | **Nhẹ nhất** — nylon hấp thụ shock |
> | E: Mooring không đi kèm platform (tàu kéo mang riêng) | 0 kg on platform | Chain/anchor trên tàu kéo, thả tại vị trí | **Cần xem CONOPS** |
>
> **Đề xuất Phase 2:** Option D (chain + nylon hybrid) hoặc Option E (mooring riêng).
> Chain weight là **hidden constraint** — phải đưa vào morphological matrix.

---

## 6. TỔNG HỢP — 3 TBD VALUES RESOLVED

| Req | Mô tả | **Giá trị đề xuất** | Range | Đơn vị | Phương pháp |
|-----|--------|---------------------|-------|--------|-------------|
| **R-J08** | Lực cản kéo ở 5 knots (SS 5) | **17** | 7 – 72 | kN | Component drag + added resistance |
| **R-J01** | Tải kéo thiết kế (towing bridle) | **64** | 22 – 323 | kN | R-J08 × DAF 2.5 × SF 1.5 |
| **R-D04** | Tải trọng neo thiết kế | **125** | 50 – 400 | kN | Wind + current + wave drift × DAF × SF |

### Hierarchy

```
R-D04 (125 kN) > R-J01 (64 kN) > R-J08 (17 kN)
 Mooring          Towing           Drag only

→ NEO LÀ LOAD CASE KHẮC NGHIỆT HƠN KÉO
→ Lý do: wave drift force khi neo đậu rất lớn (platform đứng yên = "full beam to waves")
→ Khi kéo, platform di chuyển theo sóng → giảm relative motion
```

### Quan Hệ Với Tug Power

```
Tug power needed = R-J08 × Vtow / η_prop
                 = 17,000 × 2.57 / 0.4
                 = 109 kW ≈ 146 HP

R-J10 yêu cầu ≥ 100 HP → MARGINAL cho 5 knots trong SS 5
→ 3 knots (R-J03 min) sẽ giảm drag ~64% → ~62 HP → OK cho 100 HP tug
```

> **CẢNH BÁO:** Tug 100 HP có thể chỉ đạt 3-4 knots (không đủ 5 knots) trong SS 5. Cân nhắc W2 cho R-J08 (không phải D) hoặc tăng yêu cầu tug lên ≥ 150 HP.

---

## 7. ĐỘ NHẠY — SENSITIVITY ANALYSIS

### 7.1 Thông Số Nhạy Nhất

| Thông số | Ảnh hưởng đến | Sensitivity |
|----------|---------------|-------------|
| **Draft (T)** | R-J08 (Rp ∝ T) | **CAO** — tăng T từ 0.4→0.8m → Rp tăng 2x |
| **Beam (B)** | R-D04 (F_drift ∝ B) | **CAO** — tăng B → tăng wave drift |
| **Cd (form)** | R-J08 | **CAO** — 0.8 vs 1.2 → 50% difference |
| **DAF** | R-J01, R-D04 | **CAO** — 2.0 vs 3.0 → 50% difference |
| Vtow | R-J08 | MEDIUM — ∝ V² |
| Wind area | R-J08 (Rwind) | THẤP — chỉ ~10% total drag |

### 7.2 Giảm Lực Cản — Design Levers

| Lever | Giảm % | Trade-off |
|-------|--------|-----------|
| Streamlined bow (tow direction) | 30-50% Rp | Thêm chi phí, phức tạp hơn |
| Giảm draft (T) | ∝ T | Giảm stability, tăng freeboard |
| Nylon pendant trong towline | 30-50% DAF | Towline management phức tạp hơn |
| Bridle dẫn hướng (weather vane) | 20% F_drift | Thêm hệ thống swivel |
| Giảm windage area | 10% total | Giảm RCS → trade-off chính |

---

## 8. KHUYẾN NGHỊ CHO PHASE 2

1. **R-J08 = 17 kN, R-J01 = 64 kN, R-D04 = 125 kN** — cập nhật Requirements List v1.3
2. **Draft là thông số nhạy nhất** cho tow drag → ưu tiên concept có draft thấp
3. **Mooring load > Tow load** → neo sizing và hull attachment là critical hơn towing bridle
4. **Tug 100 HP là marginal** cho 5 kt trong SS 5 → xem xét giảm Vtow xuống 3-4 kt hoặc tăng tug
5. **Nylon pendant** nên là concept option trong Phase 2 (giảm DAF 30-50%)
6. **Streamlined tow direction** — nếu concept có hướng kéo cố định (bow), giảm Cd từ 1.2 → 0.6

---

## 9. GHI CHÚ VỀ ĐỘ CHÍNH XÁC

| Cấp độ | Accuracy | Phương pháp |
|--------|----------|-------------|
| **Hiện tại (engineering estimate)** | **±50%** | **Component drag + empirical DAF** |
| CFD simulation | ±20% | RANS solver, cần mesh 3D |
| Model test (tow tank) | ±10% | 1:5 scale, cần facility |
| Full-scale tow trial | ±5% | After prototype |

**Cho Phase 2 concept selection: ±50% là ĐỦ** — mục tiêu là so sánh tương đối giữa concepts, không cần absolute accuracy.

Tow trial sau Phase 3 sẽ validate actual values.

---

## 10. THAM CHIẾU

| # | Tài liệu | Nội dung chính |
|---|-----------|----------------|
| 1 | **ITTC 7.5-02-02-01** | Resistance test procedure, friction line |
| 2 | **Hoerner, S.F. "Fluid-Dynamic Drag"** (1965) | Cd for all body shapes, blunt bodies |
| 3 | **Faltinsen, O.M. "Sea Loads on Ships"** (1990) | Added resistance in waves, Chapter 5 |
| 4 | **DNV-OS-H202** | Towing guidelines, DAF, towline snatch |
| 5 | **OCIMF MEG4** | Mooring Equipment Guidelines, wind/current loads |
| 6 | **DNVGL-ST-N001** | Marine operations — general, towline design |
| 7 | **ABS Guide for Towage** | Towing arrangement design |
| 8 | **VN-AST-MSL-001-REQ-001 v1.2** | Requirements List (3 TBD values) |
| 9 | **VN-AST-MSL-001 DMIR Embodiment v2.0** | LC4 = 120 kN (cross-check) |

---

*Research Pipeline — Quick Mode | VN-AST-MSL-001 | 2026-03-08*
