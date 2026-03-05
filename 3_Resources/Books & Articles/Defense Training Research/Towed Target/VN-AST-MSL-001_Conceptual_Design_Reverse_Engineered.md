# VN-AST-MSL-001 "THÀNH TRÌ"
## CONCEPTUAL DESIGN - REVERSE ENGINEERED
### Phase 2 Document (Pahl & Beitz Methodology)

**Document ID:** VN-AST-MSL-001-CD-001  
**Version:** 1.0  
**Date:** 2026-01-22  
**Phase:** Conceptual Design (Phase 2)  
**Status:** Reverse-Engineered from Embodiment Design V5

---

## PREFACE: REVERSE ENGINEERING LEARNING EXERCISE

### Mục đích bài tập

Tài liệu này được tạo ra bằng cách **reverse engineering** từ tài liệu Embodiment Design (Phase 3) ngược về Conceptual Design (Phase 2). Đây là phương pháp học tập theo D-M-I-R framework:

- **Diagnosis**: Hiểu kết quả thiết kế cuối cùng (V5 Hybrid)
- **Modeling**: Truy ngược các quyết định thiết kế về nguồn gốc
- **Intervention**: Tái tạo Phase 2 với sự hiểu biết sâu hơn
- **Reflection**: Nhận ra những gì có thể làm tốt hơn trong quá trình forward design

### Learning outcomes

1. Hiểu rõ hơn **mối liên hệ nhân quả** giữa các phase
2. Phát hiện các **quyết định ẩn** không được ghi nhận rõ ràng
3. Nhận ra **gaps** trong tài liệu Phase 2 ban đầu (nếu có)
4. Cải thiện khả năng **anticipate downstream needs** khi làm Phase 2

---

## 1. PROBLEM ABSTRACTION

### 1.1 Overall Task Statement

**Nhiệm vụ tổng thể (từ Requirements):**

> Thiết kế và chế tạo **platform mục tiêu nổi trên mặt nước** để sử dụng trong huấn luyện tên lửa chống hạm của Hải quân Việt Nam. Platform phải mô phỏng đặc tính radar và hồng ngoại của tàu chiến cỡ nhỏ, hoạt động được trong điều kiện biển Đông với chi phí thấp và khả năng chế tạo nội địa cao.

### 1.2 Abstraction Steps (5-Step Pahl & Beitz Process)

**Step 1: Strip quantitative details, keep qualitative essence**

| Yêu cầu gốc | Abstraction |
|-------------|-------------|
| RCS ≥ 400 m² | Cần có khả năng phản xạ radar đủ lớn để radar phát hiện |
| IR signature 250°C | Cần tạo nguồn nhiệt mô phỏng ống khói tàu |
| Payload 1,200 kg | Cần chịu được tải trọng thiết bị mô phỏng |
| Sea State 3-4 operational | Cần ổn định trong điều kiện sóng gió bình thường |
| Sea State 5-6 survival | Cần sống sót trong điều kiện thời tiết khắc nghiệt |
| Chi phí ≤ 200M VNĐ | Cần kinh tế, chi phí thấp |
| Nội địa hóa ≥ 90% | Cần sử dụng vật liệu và công nghệ nội địa |
| Thời gian ≤ 4 tuần | Cần chế tạo nhanh |

**Step 2: Expand constraints to reveal implicit requirements**

```
"Platform nổi" → Phải có sức nổi > trọng lượng → Cần cấu trúc rỗng hoặc vật liệu nhẹ
"Hoạt động SS3-4" → Phải ổn định → Cần GM > 0.5m → Cần hình dạng phù hợp
"Sống sót SS6" → Phải chịu được sóng 6m → Cần kết cấu chống chìm (foam-filled?)
"Chi phí thấp" → Cần COTS parts → Không custom manufacturing
"Nội địa hóa cao" → Vật liệu sẵn có tại VN → HDPE, thép mạ kẽm, PE
```

**Step 3: Remove personal preferences and biases**

- ❌ "Phải dùng thép" → Vật liệu bất kỳ có độ bền đủ
- ❌ "Phải tròn" → Hình dạng bất kỳ đạt yêu cầu ổn định
- ❌ "Phải hàn" → Phương pháp liên kết bất kỳ

**Step 4: Identify essential problem (solution-neutral)**

> **Essential Problem Statement:**
> 
> *Cung cấp một nền tảng nổi ổn định trên mặt biển, có khả năng mang tải thiết bị mô phỏng đặc tính điện từ và hồng ngoại của mục tiêu hải quân, sử dụng vật liệu và công nghệ nội địa với chi phí thấp.*

**Step 5: Formulate as Black Box**

```
                    ┌─────────────────────────────────────────┐
                    │                                         │
    Biển (sóng,     │                                         │     Mục tiêu giả
    gió, dòng)  ───►│     ANTI-SHIP TARGET SYSTEM            ├───► (RCS, IR, GPS
                    │     "THÀNH TRÌ"                         │      position)
    Năng lượng  ───►│                                         │
    (gas, điện)     │                                         │
                    └─────────────────────────────────────────┘
                                       │
                                       ▼
                              Giữ vị trí ổn định
```

---

## 2. FUNCTION STRUCTURE

### 2.1 Overall Function

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  F0: MÔ PHỎNG MỤC TIÊU HẢI QUÂN CHO HUẤN LUYỆN TÊN LỬA CHỐNG HẠM     │
│                                                                        │
│  Input:                           Output:                              │
│  - Năng lượng (gas, điện)         - Tín hiệu radar (RCS)              │
│  - Vị trí triển khai              - Tín hiệu hồng ngoại (IR)          │
│  - Tải trọng thiết bị             - Tín hiệu vị trí (GPS)             │
│                                   - Ổn định vị trí                     │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Function Decomposition

```
F0: Mô phỏng mục tiêu hải quân
│
├── F1: CUNG CẤP SỨC NỔI (Main Function - Structural)
│   ├── F1.1: Tạo sức nổi cơ bản
│   ├── F1.2: Đảm bảo dự trữ sức nổi (>2.5x)
│   └── F1.3: Chống chìm khi thủng (foam-filled)
│
├── F2: DUY TRÌ ỔN ĐỊNH (Main Function - Stability)
│   ├── F2.1: Ổn định tĩnh (GM > 0.5m)
│   ├── F2.2: Ổn định động (nghiêng < 15° trong SS6)
│   └── F2.3: Tự phục hồi sau sóng lớn
│
├── F3: MANG TẢI THIẾT BỊ (Main Function - Payload)
│   ├── F3.1: Cung cấp mặt sàn công tác
│   ├── F3.2: Gắn kết thiết bị thượng tầng
│   └── F3.3: Bảo vệ thiết bị khỏi môi trường
│
├── F4: GIỮ VỊ TRÍ (Main Function - Station-keeping)
│   ├── F4.1: Chống trôi do gió
│   ├── F4.2: Chống trôi do dòng chảy
│   └── F4.3: Truyền lực neo xuống đáy
│
├── F5: PHÁT TÍN HIỆU RADAR (Main Function - RCS)
│   ├── F5.1: Phản xạ sóng radar X-band
│   ├── F5.2: Đảm bảo đa hướng (omnidirectional)
│   └── F5.3: Duy trì RCS ổn định
│
├── F6: PHÁT TÍN HIỆU HỒNG NGOẠI (Main Function - IR)
│   ├── F6.1: Tạo nguồn nhiệt (>200°C)
│   ├── F6.2: Cấp nhiên liệu (gas)
│   └── F6.3: Bảo vệ ngọn lửa (chắn gió)
│
└── F7: BÁO VỊ TRÍ (Auxiliary Function - Identification)
    ├── F7.1: Phát tín hiệu GPS
    └── F7.2: Cảnh báo hàng hải (đèn)
```

### 2.3 Function Structure Diagram (Energy-Material-Signal Flows)

```
                              NĂNG LƯỢNG (Energy Flow)
                              ────────────────────────►
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
              ┌──────────┐     ┌──────────┐     ┌──────────┐
              │F6: TẠO   │     │F7: BÁO   │     │F5: PHẢN  │
              │NHIỆT IR  │     │VỊ TRÍ    │     │XẠ RADAR  │
              │(Propane) │     │(Điện→GPS)│     │(Passive) │
              └──────────┘     └──────────┘     └──────────┘
                    │                 │                 │
                    └─────────────────┼─────────────────┘
                                      │
              ══════════════════════════════════════════════
                           THƯỢNG TẦNG (Superstructure)
              ══════════════════════════════════════════════
                                      │
                              ┌───────┴───────┐
                              │  F3: MANG     │
                              │  TẢI THIẾT BỊ │
                              └───────┬───────┘
                                      │
              ══════════════════════════════════════════════
                              SÀN CÔNG TÁC (Deck)
              ══════════════════════════════════════════════
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
              ┌──────────┐     ┌──────────┐     ┌──────────┐
              │F1: SỨC   │     │F2: ỔN    │     │F4: GIỮ   │
              │NỔI       │     │ĐỊNH      │     │VỊ TRÍ    │
              │(Buoyancy)│     │(Stability)│    │(Mooring) │
              └──────────┘     └──────────┘     └──────────┘
                    │                 │                 │
                    └─────────────────┼─────────────────┘
                                      │
              ════════════════════════════════════════════════
                            PLATFORM (Floating Hull)
              ════════════════════════════════════════════════
                                      │
                                      ▼
              ~~~~~~~~~~~~~~~~ MẶT NƯỚC (Waterline) ~~~~~~~~~~~~~~~~~
                                      │
                                      ▼
              ────────────────────────────────────────────────────────
                              ĐÁY BIỂN (Anchor Point)
              ────────────────────────────────────────────────────────
```

---

## 3. SEARCH FOR WORKING PRINCIPLES

### 3.1 Sub-function F1: Provide Buoyancy

| Nguyên lý vật lý | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|------------------|-------------------|---------|------------|
| **Archimedes' Principle** | | | |
| - Thể tích kín rỗng | Pontoon PE/HDPE | Nhẹ, rẻ, COTS | Chìm nếu thủng |
| - Thể tích kín + foam | Vòng HDPE foam-filled | Chống chìm | Nặng hơn, phức tạp |
| - Nhiều thể tích nhỏ | Modular pontoon array | Linh hoạt, redundancy | Nhiều điểm liên kết |
| - Thể tích lớn đơn | Steel barge | Bền, chịu tải tốt | Nặng, đắt, phức tạp |

### 3.2 Sub-function F2: Maintain Stability

| Nguyên lý vật lý | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|------------------|-------------------|---------|------------|
| **Metacentric Height (GM)** | | | |
| - Tăng BM (waterplane area) | Hình tròn đường kính lớn | GM cao, đối xứng | Chiếm diện tích |
| - Tăng BM (outrigger) | Pontoon phụ bên ngoài | Tăng I mặt nước | Thêm liên kết |
| - Giảm KG (lower COG) | Trọng tâm thấp | Đơn giản | Hạn chế payload |
| - Multi-hull | Catamaran, trimaran | Rất ổn định | Phức tạp |

### 3.3 Sub-function F3: Carry Payload (Superstructure)

| Nguyên lý kết cấu | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|-------------------|-------------------|---------|------------|
| **Force Transmission** | | | |
| - Truyền lực trực tiếp | Cột mast trung tâm | Đơn giản, clear path | Load concentration |
| - Phân tán lực | Khung không gian | Phân bố đều | Phức tạp |
| - Treo/dây văng | Guy-wire support | Nhẹ | Cần neo phụ |

### 3.4 Sub-function F4: Station-Keeping (Mooring)

| Nguyên lý vật lý | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|------------------|-------------------|---------|------------|
| **Holding Force** | | | |
| - Gravity (deadweight) | Concrete block | Đơn giản | Nặng vận chuyển |
| - Friction + gravity | Drag anchor | Phổ biến | Cần dỡ đáy |
| - Screw-in | Helix anchor | Hiệu quả cao | Cần thiết bị |
| - Suction | Suction caisson | Rất hiệu quả | Đắt, phức tạp |

### 3.5 Sub-function F5: Radar Reflection (RCS)

| Nguyên lý vật lý | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|------------------|-------------------|---------|------------|
| **EM Reflection** | | | |
| - Corner reflector | Trihedral corner | Hiệu quả cao, rẻ | Hướng cố định |
| - Luneburg lens | Spherical lens | Omnidirectional | Đắt, nặng |
| - Flat plate array | Nhiều tấm kim loại | Đơn giản | RCS thấp |
| - Active transponder | Radar enhancer | Điều khiển được | Cần nguồn |

### 3.6 Sub-function F6: IR Signature Generation

| Nguyên lý vật lý | Giải pháp kỹ thuật | Ưu điểm | Nhược điểm |
|------------------|-------------------|---------|------------|
| **Thermal Radiation** | | | |
| - Combustion | Gas burner (propane) | Hiệu quả, rẻ | Cần nhiên liệu |
| - Electrical heating | Ceramic heater | Sạch, điều khiển | Cần nguồn lớn |
| - Catalyst | Catalytic heater | An toàn | Chậm, đắt |
| - Passive (sun) | Black body absorber | Không cần nguồn | Không đủ nhiệt |

---

## 4. MORPHOLOGICAL MATRIX

### 4.1 Matrix Structure

| Sub-function | S1 | S2 | S3 | S4 |
|--------------|-----|-----|-----|-----|
| **F1: Buoyancy** | Vòng HDPE tròn (foam-filled) | Pontoon COTS modular | Steel barge | Inflatable |
| **F2: Stability** | Hình tròn đối xứng | Pontoon outrigger | Catamaran | Ballast tank |
| **F3: Payload mount** | Cột mast trung tâm | Khung không gian | Guy-wire | Truss tower |
| **F4: Mooring** | Helix anchor | Drag anchor | Concrete block | Multi-point |
| **F5: RCS** | Trihedral corners | Luneburg lens | Flat plates | Active transponder |
| **F6: IR** | Propane burner | Electric heater | Catalytic | Solar absorber |
| **F7: Position ID** | GPS + SOLAS light | AIS transponder | Radio beacon | Radar reflector only |

### 4.2 Concept Combinations

**Concept V1: HDPE Tròn Thuần (Pure Circular HDPE)**

```
F1: Vòng HDPE 3 tầng (foam-filled) → Very high buoyancy
F2: Hình tròn đối xứng → Inherent stability
F3: Cột mast trung tâm → Simple force path
F4: Helix anchor (trung tâm) → Single point
F5: Trihedral corners (12 bộ) → Omnidirectional RCS
F6: Propane burner → Cost-effective IR
F7: GPS + SOLAS light → Standard compliance
```

**Concept V2: Pontoon Thuần (Pure COTS Pontoon)**

```
F1: Pontoon COTS modular (9 cái) → 100% COTS
F2: 3×3 matrix arrangement → Moderate stability
F3: Khung không gian → Distributed load
F4: Multi-point anchor → Redundancy
F5: Trihedral corners → Standard
F6: Propane burner → Standard
F7: GPS + SOLAS light → Standard
```

**Concept V3: Steel Platform**

```
F1: Steel barge (welded) → High payload capacity
F2: Wide beam → Good stability
F3: Integrated frame → Robust
F4: Drag anchor → Proven
F5: Trihedral corners → Standard
F6: Propane burner → Standard
F7: GPS + SOLAS light → Standard
```

**Concept V4: Catamaran Hybrid**

```
F1: Dual HDPE hulls → Moderate buoyancy
F2: Catamaran geometry → Very high stability
F3: Cross-deck structure → Complex
F4: Dual helix anchor → Redundant
F5: Trihedral corners → Standard
F6: Propane burner → Standard
F7: GPS + SOLAS light → Standard
```

**Concept V5: HYBRID (Vòng HDPE + Pontoon Phụ)** ← SELECTED

```
F1: Vòng HDPE 2 tầng (foam-filled) + 6 pontoon phụ
F2: Tròn + pontoon outrigger → Combines both principles
F3: Cột mast trung tâm → Clear force path
F4: Helix anchor (trung tâm) → Single point
F5: Trihedral corners (12 bộ) → Omnidirectional RCS
F6: Propane burner (dual) → Redundancy
F7: GPS + SOLAS light → Standard compliance
```

### 4.3 Combination Rationale for V5 Hybrid

**Tại sao kết hợp Vòng HDPE + Pontoon?**

| Aspect | Vòng HDPE alone | Pontoon alone | Hybrid V5 |
|--------|-----------------|---------------|-----------|
| Buoyancy | Cao (tốt) | Trung bình | Cao + dự phòng |
| Stability | Tốt (GM=15m) | Thấp hơn | Rất tốt (GM=21.7m) |
| Chống chìm | Tốt (foam) | Không (rỗng) | Tốt (foam) + modular |
| Thay thế | Khó | Dễ | Pontoon dễ thay |
| Chi phí | Trung bình | Thấp | Cân bằng |
| Thời gian | Lâu (3 tầng) | Nhanh | Vừa (2 tầng + quick-attach) |

---

## 5. CONCEPT EVALUATION (VDI 2225)

### 5.1 Evaluation Criteria (from Requirements List)

| # | Tiêu chí | Nguồn gốc | Trọng số (w) |
|---|----------|-----------|:------------:|
| 1 | Sức nổi đủ (SF ≥ 2.5) | RQ-ST-001 | 0.15 |
| 2 | Ổn định (GM > 0.5m) | RQ-ST-002 | 0.15 |
| 3 | Chống chìm khi thủng | RQ-SF-001 | 0.10 |
| 4 | Payload capacity ≥ 1,200 kg | RQ-PL-001 | 0.10 |
| 5 | RCS ≥ 400 m² | RQ-SG-001 | 0.10 |
| 6 | IR signature đủ | RQ-SG-002 | 0.05 |
| 7 | Chi phí ≤ 200M VNĐ | RQ-EC-001 | 0.15 |
| 8 | Thời gian ≤ 4 tuần | RQ-SC-001 | 0.10 |
| 9 | Nội địa hóa ≥ 90% | RQ-PR-001 | 0.10 |
| **Tổng** | | | **1.00** |

### 5.2 Scoring Matrix (0-4 Scale per VDI 2225)

| Tiêu chí | w | V1 (HDPE) | V2 (Pontoon) | V3 (Steel) | V4 (Cat) | V5 (Hybrid) |
|----------|:--:|:---------:|:------------:|:----------:|:--------:|:-----------:|
| 1. Sức nổi | 0.15 | 4 | 3 | 4 | 3 | 4 |
| 2. Ổn định | 0.15 | 3 | 2 | 3 | 4 | 4 |
| 3. Chống chìm | 0.10 | 4 | 1 | 2 | 3 | 4 |
| 4. Payload | 0.10 | 4 | 3 | 4 | 3 | 4 |
| 5. RCS | 0.10 | 4 | 4 | 4 | 4 | 4 |
| 6. IR | 0.05 | 4 | 4 | 4 | 4 | 4 |
| 7. Chi phí | 0.15 | 3 | 4 | 1 | 2 | 3 |
| 8. Thời gian | 0.10 | 2 | 4 | 1 | 2 | 3 |
| 9. Nội địa | 0.10 | 3 | 4 | 2 | 3 | 4 |

### 5.3 Weighted Score Calculation

**V1 (HDPE Tròn 3 tầng):**
```
Σ(w × score) = 0.15×4 + 0.15×3 + 0.10×4 + 0.10×4 + 0.10×4 + 0.05×4 + 0.15×3 + 0.10×2 + 0.10×3
             = 0.60 + 0.45 + 0.40 + 0.40 + 0.40 + 0.20 + 0.45 + 0.20 + 0.30
             = 3.40

Rating = 3.40 / 4.00 = 85.0%
```

**V2 (Pontoon 100%):**
```
Σ(w × score) = 0.15×3 + 0.15×2 + 0.10×1 + 0.10×3 + 0.10×4 + 0.05×4 + 0.15×4 + 0.10×4 + 0.10×4
             = 0.45 + 0.30 + 0.10 + 0.30 + 0.40 + 0.20 + 0.60 + 0.40 + 0.40
             = 3.15

Rating = 3.15 / 4.00 = 78.8%
```

**V3 (Steel Platform):**
```
Σ(w × score) = 0.15×4 + 0.15×3 + 0.10×2 + 0.10×4 + 0.10×4 + 0.05×4 + 0.15×1 + 0.10×1 + 0.10×2
             = 0.60 + 0.45 + 0.20 + 0.40 + 0.40 + 0.20 + 0.15 + 0.10 + 0.20
             = 2.70

Rating = 2.70 / 4.00 = 67.5%
```

**V4 (Catamaran):**
```
Σ(w × score) = 0.15×3 + 0.15×4 + 0.10×3 + 0.10×3 + 0.10×4 + 0.05×4 + 0.15×2 + 0.10×2 + 0.10×3
             = 0.45 + 0.60 + 0.30 + 0.30 + 0.40 + 0.20 + 0.30 + 0.20 + 0.30
             = 3.05

Rating = 3.05 / 4.00 = 76.3%
```

**V5 (Hybrid - SELECTED):**
```
Σ(w × score) = 0.15×4 + 0.15×4 + 0.10×4 + 0.10×4 + 0.10×4 + 0.05×4 + 0.15×3 + 0.10×3 + 0.10×4
             = 0.60 + 0.60 + 0.40 + 0.40 + 0.40 + 0.20 + 0.45 + 0.30 + 0.40
             = 3.75

Rating = 3.75 / 4.00 = 93.8%
```

### 5.4 Ranking Summary

| Rank | Concept | Weighted Score | Rating | Decision |
|:----:|---------|:--------------:|:------:|----------|
| **1** | **V5: Hybrid (HDPE + Pontoon)** | **3.75** | **93.8%** | **SELECTED** |
| 2 | V1: HDPE Tròn 3 tầng | 3.40 | 85.0% | Reserve |
| 3 | V2: Pontoon 100% | 3.15 | 78.8% | Low-cost option |
| 4 | V4: Catamaran | 3.05 | 76.3% | Eliminated |
| 5 | V3: Steel Platform | 2.70 | 67.5% | Eliminated |

### 5.5 Value Profile Analysis

```
                    V5 HYBRID - VALUE PROFILE
                    
Tiêu chí           Score   ████████████████ Max=4
───────────────────────────────────────────────────
1. Sức nổi (0.15)     4    ████████████████ ■■■
2. Ổn định (0.15)     4    ████████████████ ■■■
3. Chống chìm (0.10)  4    ████████████████ ■■
4. Payload (0.10)     4    ████████████████ ■■
5. RCS (0.10)         4    ████████████████ ■■
6. IR (0.05)          4    ████████████████ ■
7. Chi phí (0.15)     3    ████████████     ■■■ ← Minor weakness
8. Thời gian (0.10)   3    ████████████     ■■  ← Minor weakness
9. Nội địa (0.10)     4    ████████████████ ■■

■ = Contribution to weighted score (thickness ~ weight)

WEAK SPOTS IDENTIFIED:
- Chi phí: 3/4 (Hybrid đắt hơn V2 nhưng vẫn trong ngân sách)
- Thời gian: 3/4 (4 tuần, đúng giới hạn, không dự phòng)

CONCLUSION: Balanced profile, no critical weaknesses
```

---

## 6. PRINCIPLE SOLUTION (SELECTED CONCEPT V5)

### 6.1 Working Structure Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        VN-AST-MSL-001 "THÀNH TRÌ"                       │
│                     PRINCIPLE SOLUTION - V5 HYBRID                       │
└─────────────────────────────────────────────────────────────────────────┘

                              ┌─────┐
                              │GPS  │ F7.1
                              │Beacon│
                              └──┬──┘
                                 │
                              ┌──┴──┐
                              │ IR  │ F6: Propane burner (5kW)
                              │Burn.│
                              └──┬──┘
                                 │
                              ╔══╧══╗
                              ║     ║
                              ║FOAM ║ F5: RCS Corner reflectors (12×)
                              ║SILH.║ + Foam silhouette
                              ║     ║
                              ╠═════╣ Cabin module
                              ╚══╤══╝
                                 │
          THƯỢNG TẦNG           │            Cột Mast (F3: Payload mount)
═══════════════════════════════════════════════════════════════════════════
                                 │
                       ┌─────────┴─────────┐
                       │                   │
                       │  DECK (SÀN HDPE)  │ F3.1: Work platform
                       │     ~28 m²        │
                       │                   │
                       └─────────┬─────────┘
                                 │
     ╭───╮                 ╔═════╧═════╗                 ╭───╮
     │P6 │─────────────────║   VÒNG    ║─────────────────│P2 │
     ╰───╯                 ║   HDPE    ║                 ╰───╯
        ╲                  ║  2 TẦNG   ║                 ╱
         ╲                 ║  D=6.0m   ║                ╱
    ╭───╮ ╲                ║ foam-filled║              ╱ ╭───╮
    │P5 │──╲───────────────╚═════╤═════╝─────────────╱──│P3 │
    ╰───╯   ╲                    │                  ╱   ╰───╯
             ╲              ╭────┴────╮           ╱
              ╲             │ ĐIỂM NEO │         ╱
         ╭───╮ ╲───────────│ TRUNG TÂM │───────╱ ╭───╮
         │P4 │              ╰────┬────╯          │P1 │
         ╰───╯                   │               ╰───╯
                                 │
     PLATFORM (F1, F2)           │ F4: Central mooring point
═══════════════════════════════════════════════════════════════════════════
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~│~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                                │
                          XÍCH NEO (Catenary)
                                │
                                ▼
                          ┌─────────┐
                          │ HELIX   │ F4.3: Screw-in anchor
                          │ ANCHOR  │
                          └─────────┘
────────────────────────────────────────────────────────────────────────────
                              ĐÁY BIỂN
```

### 6.2 Preliminary Specifications

| Module | Working Principle | Preliminary Spec |
|--------|-------------------|------------------|
| **Platform** | Vòng HDPE foam-filled | D = 6.0m, 2 tầng × Ø500mm |
| **Outrigger** | Pontoon COTS | 6 × Ø400×2000mm |
| **Structure** | Radial frame | 6 thanh thép từ tâm |
| **Mast** | Central column | Thép Ø100mm, H = 3.0m |
| **RCS** | Trihedral corners | 12 bộ, cạnh 0.5m |
| **IR** | Propane burner | 5kW, dual redundancy |
| **Mooring** | Helix anchor | D600mm, L1200mm |
| **Position** | GPS + SOLAS | Beacon + navigation light |

### 6.3 Key Design Decisions (for Phase 3)

| Decision | Rationale | Reference |
|----------|-----------|-----------|
| 2 tầng HDPE (không phải 3) | Đủ sức nổi, giảm thời gian | F1, RQ-SC-001 |
| 6 pontoon (không phải 4) | 6-fold symmetry = ổn định đều | F2, P&B balanced forces |
| Quick-release pontoon | DfM, DfA, easy replacement | P&B Division of tasks |
| Foam-filled HDPE | Chống chìm khi thủng | F1.3, RQ-SF-001 |
| Central neo (single-point) | Clear force path | P&B Short force path |
| Modular thượng tầng | Tháo lắp vận chuyển | P&B Division of tasks |

---

## 7. TRANSITION TO EMBODIMENT DESIGN

### 7.1 Embodiment-Determining Requirements

Các yêu cầu quyết định hình dạng/kích thước cụ thể trong Phase 3:

| Yêu cầu | Giá trị | Quyết định Embodiment |
|---------|:-------:|----------------------|
| Payload ≥ 1,200 kg | → | Sức nổi platform ≥ 4,500 kg |
| Freeboard ≥ 0.5m | → | Chiều cao platform ≥ 1.0m |
| GM > 0.5m | → | D ≥ 6.0m hoặc pontoon outrigger |
| RCS ≥ 400 m² | → | 12 corner reflectors, cạnh 0.5m |
| IR 250°C | → | Propane burner 5kW |
| SS6 survival | → | Foam-filled (chống chìm) |
| Chi phí ≤ 200M | → | COTS, no custom tooling |
| Nội địa ≥ 90% | → | HDPE/PE VN, thép mạ kẽm VN |

### 7.2 Open Questions for Phase 3

1. **Liên kết vòng HDPE 2 tầng:** Hàn hay bu-lông?
2. **Quick-release mechanism:** Design cụ thể?
3. **Mối hàn HDPE:** Butt fusion hay socket fusion?
4. **Bố trí RCS:** Elevation angles tối ưu?
5. **Foam density:** 35 hay 45 kg/m³?
6. **Helix anchor sizing:** Dựa trên lực neo tính toán?

---

## 8. DOCUMENT CONTROL

### 8.1 Revision History

| Version | Date | Author | Changes |
|:-------:|------|--------|---------|
| 1.0 | 2026-01-22 | Claude (AI) | Reverse-engineered from Embodiment Design V5 |

### 8.2 References

1. VN-AST-MSL-001-EMB-PLT-001 v1.0 - Embodiment Design (source document)
2. Pahl, G. & Beitz, W. - Engineering Design: A Systematic Approach
3. VDI 2221 - Systematic Approach to Design
4. VDI 2225 - Technical-Economic Evaluation

### 8.3 Approvals

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Design Engineer | | | |
| Technical Lead | | | |
| Project Manager | | | |

---

## PHỤ LỤC A: LEARNING REFLECTION (D-M-I-R)

### A.1 What was learned from reverse engineering?

**1. Implicit decisions in Embodiment that should have been explicit in Conceptual:**

- Quyết định dùng **2 tầng** thay vì 3 tầng không được ghi nhận trong Phase 2
- Lý do chọn **6 pontoon** (6-fold symmetry) không có rationale document
- **Foam density 35 kg/m³** xuất hiện ở Phase 3 nhưng không có trade study

**2. Missing documentation in typical forward design:**

- **Principle combinations rationale**: Tại sao V5 kết hợp 2 nguyên lý?
- **Weak spot analysis**: VDI 2225 yêu cầu phân tích điểm yếu
- **Working structure diagram**: Sơ đồ nguyên lý hoạt động

**3. Forward design improvement checklist:**

- [ ] Document ALL concept variants considered (minimum 4-5)
- [ ] Show morphological matrix with clear combination paths
- [ ] Include value profile analysis, not just final scores
- [ ] Explicitly state embodiment-determining requirements
- [ ] List open questions for next phase

### A.2 Recommendations for future projects

1. **Create morphological matrix BEFORE jumping to solution**
2. **Score ALL alternatives systematically** - don't skip VDI 2225
3. **Document "why not" as much as "why"** - rejected alternatives
4. **Working structure diagram required** - shows how functions interconnect
5. **Phase 2 outputs must be traceable to Phase 1 requirements**

---

*Tài liệu này là kết quả của bài tập học tập D-M-I-R: Reverse engineering từ Phase 3 về Phase 2 để hiểu sâu hơn về phương pháp Pahl & Beitz.*
