---
created: 2026-03-08
updated: 2026-03-08
type: function-structure
status: approved
document-id: VN-AST-MSL-001-FS-001
version: "1.1"
tags: [#type/project, #status/active]
---

# 6-FLOW FUNCTION STRUCTURE — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Status** | Approved |

---

## Overall Function

> **"Trình bày mục tiêu radar có RCS kiểm soát được tại vị trí cố định trên biển, triển khai/thu hồi bằng phương tiện thông thường, sống sót trong điều kiện Biển Đông."**

---

## 3 Primary Flows (Pahl-Beitz Classic)

### Energy Flows

```
Input:    Năng lượng sóng biển (kinetic), gió (kinetic), dòng chảy (kinetic),
          bức xạ mặt trời (thermal), pin (electrical)
Transform: Hấp thụ/tiêu tán năng lượng sóng (damping), chịu tải gió (structural),
          chuyển đổi điện → ánh sáng (beacon), điện → RF GPS
Output:   Nhiệt tỏa (thermal), ánh sáng cảnh báo (optical), tín hiệu GPS (RF)
```

### Material Flows

```
Input:    Nước biển (xung quanh), không khí, sóng radar từ tên lửa/radar
Transform: Chặn nước (hull), nổi (buoyancy), phản xạ sóng radar (reflector)
Output:   Sóng radar phản xạ (RCS), nước thoát (drainage)
```

### Signal Flows

```
Input:    Sóng radar tới (X-band), tín hiệu GPS (vệ tinh)
Transform: Phản xạ radar (passive), xử lý vị trí GPS
Output:   RCS signature (phản xạ), vị trí GPS (broadcast), đèn SOLAS (visual)
```

---

## 3 Extended Flows (6-Flow — HELIX)

### Data Flow

```
Minimal — passive target, không có data processing onboard.
Chỉ GPS position data: satellite → receiver → broadcast.
```

### Computation Flow

```
N/A — passive system. Không có onboard computation.
```

### Trust Flow

```
Input:    Certification vật liệu, welding cert, RCS calculation validation
Transform: QC inspection, sea trial verification
Output:   Acceptance certificate, training readiness declaration
```

---

## Sub-Function Decomposition

| SF-ID | Sub-Function | Primary Flow | Domain | Requirements | Notes |
|-------|-------------|-------------|--------|-------------|-------|
| **SF-01** | Phản xạ sóng radar | Signal | Cơ | R-A01→A06 | Core — lý do tồn tại sản phẩm |
| **SF-02** | Cung cấp sức nổi | Material/Energy | Cơ | R-C01, C03, C05, C07 | Hull + foam + sealed chambers |
| **SF-03** | Duy trì ổn định | Energy | Cơ | R-C02, C04, I07 | GM, waterplane area, mass distribution |
| **SF-04** | Giữ vị trí trên biển | Energy | Cơ | R-D01→D08 | Mooring: neo + dây + attachment |
| **SF-05** | Chịu tải môi trường | Energy | Cơ | R-B02→B04, F03, F06, F07 | Structural integrity |
| **SF-06** | Phát tín hiệu vị trí | Signal | Điện | R-E02, E03, E04 | GPS beacon + battery |
| **SF-07** | Cảnh báo hàng hải | Signal/Energy | Điện | R-E01, E05, E06 | SOLAS light + sơn + bảng tên |
| **SF-08** | Cho phép vận chuyển | Material | Cơ | R-G01→G03, B05, B07 | Modular, tháo lắp, kích thước xe tải |
| **SF-09** | Cho phép triển khai | Material/Energy | Cơ | R-G04→G07, D06 | Assembly + hạ thủy + thả neo |
| **SF-10** | Cho phép thu hồi | Material/Energy | Cơ | R-G08, D07 | Towing eye + kéo + thu neo |
| **SF-11** | Chống hư hỏng cục bộ | Material | Cơ | R-B04, I01, I02, I06 | Compartmentalization + repairability |
| **SF-12** | Cung cấp điện | Energy | Điện | R-E04, IF-003 | Battery pack cho SF-06 + SF-07 |
| **SF-13** | **Chịu kéo (tow-out)** | **Energy** | **Cơ** | **R-J01→J05, J08→J10, J12** | **Towing bridle, stability under tow, SS 5 nguyên vẹn** |
| **SF-14** | **Chịu kéo về (tow-back)** | **Energy** | **Cơ** | **R-J06, J07** | **SS 3-4, reduced requirements, post-engagement** |

> **v1.1:** SF-13 + SF-14 tách riêng vì yêu cầu bất đối xứng (asymmetric CONOPS).
> SF-13 (kéo ra) là điều kiện thiết kế khắc nghiệt nhất — drives structural sizing.

---

## Function Structure Diagram (v1.1)

```
                    ┌─────────────────────────────────────┐
                    │     OVERALL FUNCTION                 │
                    │  Present controllable-RCS target     │
                    │  at fixed sea position               │
                    └──────────────┬──────────────────────┘
                                   │
          ┌────────────────────────┼────────────────────────┐
          │                        │                        │
    ┌─────▼──────┐          ┌─────▼──────┐          ┌─────▼──────┐
    │  PRIMARY    │          │  SUPPORT    │          │  LIFECYCLE │
    │  FUNCTIONS  │          │  FUNCTIONS  │          │  FUNCTIONS │
    └─────┬──────┘          └─────┬──────┘          └─────┬──────┘
          │                        │                        │
    SF-01 Phản xạ radar      SF-02 Sức nổi            SF-08 Vận chuyển
    SF-06 Phát vị trí        SF-03 Ổn định            SF-09 Triển khai (neo)
    SF-07 Cảnh báo HH        SF-04 Giữ vị trí        SF-10 Thu hồi
                              SF-05 Chịu tải MT        SF-11 Chống hư hỏng
                              SF-12 Cung cấp điện     SF-13 Chịu kéo ra ★
                                                       SF-14 Chịu kéo về
```

> ★ SF-13 là **binding constraint mới** — SS 5 + nguyên vẹn RCS drives structural design.

### CONOPS Sequence → Function Mapping

```
Lắp ráp ──→ Kéo ra ──→ Neo đậu ──→ Bắn ──→ Thu hồi ──→ Kéo về
  SF-08      SF-13      SF-04      SF-01     SF-10      SF-14
  SF-09      SF-02      SF-02      SF-06     SF-04      SF-02
             SF-03      SF-03      SF-07                SF-11
             SF-05      SF-05
             SF-01*     SF-12
             SF-12

  * SF-01 phải survive SF-13 (RCS intact after tow)
```

---

## Domain Allocation (v1.1)

| Domain | Sub-Functions | Count | Tỷ Trọng |
|--------|-------------|-------|-----------|
| **Cơ (Mechanical)** | SF-01→05, 08→11, **13, 14** | 11 | 79% |
| **Điện (Electrical)** | SF-06, 07, 12 | 3 | 21% |
| **AI/Software** | — | 0 | 0% |

> v1.1: 12→14 sub-functions. SF-13 (tow-out SS 5) is the new **design driver**.

---

*Function Structure v1.1 | VN-AST-MSL-001 | HELIX Phase 1*
