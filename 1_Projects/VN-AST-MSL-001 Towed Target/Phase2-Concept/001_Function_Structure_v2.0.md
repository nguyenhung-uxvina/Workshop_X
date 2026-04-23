---
created: 2026-03-08
updated: 2026-03-08
type: function-structure
status: draft
document-id: VN-AST-MSL-001-FS-001
version: "2.0"
tags: [#type/project, #status/active]
---

# FUNCTION STRUCTURE v2.0 — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Phase** | 2 — Conceptual Design |
| **Date** | 2026-03-08 |
| **Status** | Draft — awaiting CEO review |
| **Refined from** | FS-001 v1.1 (Phase 1) |

---

## Overall Function

> **"Trình bày mục tiêu radar có RCS kiểm soát được tại vị trí cố định trên biển, triển khai/thu hồi bằng phương tiện thông thường, sống sót trong điều kiện Biển Đông."**

---

## Sub-Function Decomposition — L1 → L2 → L3

### SF-01: Phản xạ sóng radar (PRIMARY — Core Function)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-01.1 Phản xạ X-band | SF-01.1a Tạo bề mặt phản xạ | Signal | R-A01 | RCS ≥ 1,000 m² → cạnh reflector lớn |
| | SF-01.1b Duy trì hình học phản xạ | Material | R-J12 | Chịu rung lắc khi kéo SS 5 |
| SF-01.2 Phủ đa hướng | SF-01.2a Bố trí reflector azimuth ≥ 330° | Signal | R-A02 | Multi-reflector array |
| SF-01.3 Giữ chiều cao reflector | SF-01.3a Nâng reflector ≥ 2.0m trên WL | Energy | R-A05 | Mast/structure height |

### SF-02: Cung cấp sức nổi (SUPPORT)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-02.1 Tạo buoyancy volume | SF-02.1a Cung cấp thể tích kín nước | Material | R-C01 | SF ≥ 2.0 |
| | SF-02.1b Điền foam chống chìm | Material | R-C07, R-B04 | Closed-cell 30-45 kg/m³ |
| SF-02.2 Duy trì freeboard | SF-02.2a Giữ ≥ 0.4m operational | Material | R-C03 | Load condition dependent |

### SF-03: Duy trì ổn định (SUPPORT)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-03.1 Ổn định tĩnh | SF-03.1a GM ≥ 0.5m | Energy | R-C02 | Waterplane area + COG |
| SF-03.2 Ổn định dưới kéo | SF-03.2a GM > 0.3m dưới tow load | Energy | R-J02 | Asymmetric load path |
| SF-03.3 Ổn định khi có người | SF-03.3a GM > 0.5m + live load | Energy | R-I07 | Maintenance scenario |

### SF-04: Giữ vị trí trên biển (SUPPORT — High Load)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-04.1 Truyền lực neo | SF-04.1a Attachment point chịu 125 kN | Energy | R-D04 | Design load from RESEARCH |
| | SF-04.1b Phân phối lực vào kết cấu | Energy | R-D04 | Multi-point → structure |
| SF-04.2 Giữ đáy biển | SF-04.2a Neo bám đáy ≥ 50m depth | Energy | R-D03, R-D08 | Kiểu neo phù hợp đáy |
| SF-04.3 Hạn chế drift | SF-04.3a Watch circle ≤ 50m | Energy | R-D05 | Catenary + scope ratio |
| SF-04.4 Giảm thiểu trọng lượng neo | SF-04.4a Tối ưu chain/rope weight | Material | — | Mooring Weight Trap (Galaxy #51) |

### SF-05: Chịu tải môi trường (SUPPORT — Structural)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-05.1 Chịu sóng | SF-05.1a Wave slam SS 4 | Energy | R-B03 | Structural sizing |
| SF-05.2 Chịu gió | SF-05.2a Gió ≤ 40 knots | Energy | R-F07 | Windage area |
| SF-05.3 Chịu dòng chảy | SF-05.3a Dòng ≤ 2.0 knots | Energy | R-D01 | Hull drag |
| SF-05.4 Chịu UV/corrosion | SF-05.4a ≥ 5 yr service life | Material | R-B01, R-F03 | Material selection driver |

### SF-06: Phát tín hiệu vị trí (ELECTRICAL)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-06.1 GPS tracking | SF-06.1a CEP ≤ 5m, interval ≤ 60s | Signal | R-E02, R-E03 | COTS GPS beacon |
| SF-06.2 Broadcast position | SF-06.2a Transmit to shore/vessel | Signal | R-E02 | VHF/cellular/satellite |

### SF-07: Cảnh báo hàng hải (ELECTRICAL + PASSIVE)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-07.1 Đèn SOLAS | SF-07.1a Visible ≥ 2 NM | Signal/Energy | R-E01 | COLREGS compliant |
| SF-07.2 Visual marking | SF-07.2a Sơn cam/vàng IALA | Signal | R-E05 | Passive |
| SF-07.3 Bảng tên | SF-07.3a Marking theo TCVN | Signal | R-E06 | Passive |

### SF-08: Cho phép vận chuyển (LIFECYCLE)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-08.1 Tách module | SF-08.1a ≤ 3 module chính | Material | R-G02 | Tháo lắp được |
| SF-08.2 Fit xe tải | SF-08.2a Max module ≤ 2.4×2.4×12m | Material | R-G03 | VN road limits |
| SF-08.3 Chịu cẩu | SF-08.3a Cẩu ≤ 5 tấn per lift | Energy | R-G06 | Lift points |

### SF-09: Cho phép triển khai (LIFECYCLE)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-09.1 Assembly tại bến | SF-09.1a ≤ 4 hrs, ≤ 6 người | Material | R-G04, R-G05 | Bolted connections |
| SF-09.2 Hạ thủy | SF-09.2a Crane → water | Material/Energy | R-G06 | Splash zone design |
| SF-09.3 Thả neo | SF-09.3a Deploy anchor ≤ 60 min | Material | R-D06 | Anchor handling equipment |

### SF-10: Cho phép thu hồi (LIFECYCLE)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-10.1 Thu neo | SF-10.1a ≤ 45 min | Material/Energy | R-D07 | Winch or manual |
| SF-10.2 Kéo về | (→ SF-14) | | | |
| SF-10.3 Cẩu lên bến | SF-10.3a Same crane ≤ 5T | Energy | R-G06 | Reverse of SF-09.2 |

### SF-11: Chống hư hỏng cục bộ (SUPPORT — Survivability)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-11.1 Compartmentalize | SF-11.1a ≥ 2 independent buoyancy zones | Material | R-B04 | 1-compartment flooding survival |
| SF-11.2 Cho phép sửa chữa | SF-11.2a Field repair possible | Material | R-I06 | Replacement parts |

### SF-12: Cung cấp điện (ELECTRICAL)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-12.1 Lưu trữ năng lượng | SF-12.1a Battery ≥ 30 ngày | Energy | R-E04 | GPS + đèn power budget |
| SF-12.2 Phân phối điện | SF-12.2a Waterproof distribution | Energy | IF-003 | IP67+ |

### SF-13: Chịu kéo ra (LIFECYCLE — DESIGN DRIVER ★)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-13.1 Truyền lực kéo | SF-13.1a Bridle chịu 64 kN (37 kN/point) | Energy | R-J01 | V-bridle baseline |
| | SF-13.1b Phân phối lực kéo vào hull | Energy | R-J01 | Reinforced attachment |
| SF-13.2 Ổn định khi kéo | SF-13.2a Không lật, không quay ở SS 5 | Energy | R-J02 | Tow line geometry |
| SF-13.3 Bảo vệ RCS | SF-13.3a Reflector intact sau kéo SS 5 | Material | R-J04, R-J12 | Locking/securing |
| SF-13.4 Giảm lực cản | SF-13.4a Drag ≤ 17 kN @ 5 kt | Energy | R-J08 | Hull form factor |

### SF-14: Chịu kéo về (LIFECYCLE)
| L2 | L3 | Flow | Requirement | Notes |
|----|-----|------|-------------|-------|
| SF-14.1 Kéo về SS 3-4 | SF-14.1a Không chìm, kéo được | Energy | R-J06 | Reduced requirement |
| SF-14.2 Cho phép hư hỏng nhỏ | SF-14.2a Post-engagement tolerance | Material | R-J07 | Same tow points |

---

## Function Interaction Matrix

```
         SF01 SF02 SF03 SF04 SF05 SF06 SF07 SF08 SF09 SF10 SF11 SF12 SF13 SF14
SF-01  │  ●    ·    ●    ·    ●    ·    ·    ●    ·    ·    ●    ·    ●★   ·
SF-02  │       ●    ●    ·    ●    ·    ·    ·    ●    ·    ●    ·    ●    ●
SF-03  │            ●    ●    ●    ·    ·    ·    ·    ·    ·    ·    ●★   ●
SF-04  │                 ●    ●    ·    ·    ·    ●    ●    ·    ·    ·    ·
SF-05  │                      ●    ·    ·    ·    ·    ·    ●    ·    ●    ●
SF-06  │                           ●    ·    ·    ·    ·    ·    ●    ·    ·
SF-07  │                                ●    ·    ·    ·    ·    ●    ·    ·
SF-08  │                                     ●    ●    ●    ·    ·    ·    ·
SF-09  │                                          ●    ·    ·    ·    ·    ·
SF-10  │                                               ●    ·    ·    ·    ●
SF-11  │                                                    ●    ·    ·    ·
SF-12  │                                                         ●    ·    ·
SF-13  │                                                              ●    ·
SF-14  │                                                                   ●

● = interaction exists   ★ = critical coupling (SF-13 ↔ SF-01, SF-13 ↔ SF-03)
```

**Critical Couplings (design-determining):**
1. **SF-13 ↔ SF-01**: Kéo SS 5 PHẢI bảo vệ reflector → drives mounting + securing design
2. **SF-13 ↔ SF-03**: Stability under tow SS 5 → drives hull form + tow point location
3. **SF-04 ↔ SF-05**: Mooring 125 kN + wave loads → drives structural sizing
4. **SF-01 ↔ SF-08**: RCS 1,000 m² (large reflectors) vs modular transport → drives reflector fold/assembly

---

## CONOPS Sequence → Function Activation Timeline

```
Phase:    LẮP RÁP     KÉO RA        NEO ĐẬU       BẮN THỬ      THU HỒI       KÉO VỀ
Sea St:    SS 0        SS ≤ 5        SS 3-4         SS 3-4        SS 3-4        SS 3-4
Duration: ~4 hrs       4-12 hrs      ≥ 24 hrs       2-8 hrs       ~2 hrs        4-12 hrs

SF-08  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
SF-09  ░░░░████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
SF-13  ░░░░░░░░████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ★ DRIVER
SF-02  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-03  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-05  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-01  ░░░░░░░░████████████████████████████████████████████████████░░░░░░░░░░░░░░░░░░  (may degrade)
SF-04  ░░░░░░░░░░░░░░░░░░░░████████████████████████████████████████░░░░░░░░░░░░░░░░░░
SF-12  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-06  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-07  ░░░░░░░░████████████████████████████████████████████████████████████████████████
SF-11  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████████████████░░  (after engagement)
SF-10  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░░░░░░░
SF-14  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████░░

█ = active   ░ = inactive   ★ = design driver phase
```

---

## Domain Allocation v2.0

| Domain | Sub-Functions | Count | Notes |
|--------|-------------|-------|-------|
| **Cơ (Mechanical)** | SF-01→05, 08→11, 13, 14 | 12 | 86% — hull, structure, reflectors, mooring, towing |
| **Điện (Electrical)** | SF-06, 07, 12 | 3 | 14% — GPS, lights, battery |
| **AI/Software** | — | 0 | 0% — passive system |

---

## Changes from v1.1

| Change | Detail |
|--------|--------|
| L2/L3 decomposition | All 14 SF decomposed to L2 (34 sub-functions) and L3 (43 leaf functions) |
| SF-04.4 added | Mooring weight optimization — from Galaxy #51 insight |
| SF-13 fully decomposed | 4 L2 functions reflecting resolved tow forces |
| Interaction matrix added | Identifies 4 critical couplings |
| CONOPS timeline added | Shows function activation per operational phase |
| SF-13.4 drag constraint | ≤ 17 kN @ 5 kt now quantified |

---

*Function Structure v2.0 | VN-AST-MSL-001 | HELIX Phase 2*
