---
created: 2026-03-08
updated: 2026-03-08
type: requirements-list
status: approved
document-id: VN-AST-MSL-001-REQ-001
version: "1.3"
tags: [#type/project, #status/active]
---

# REQUIREMENTS LIST — VN-AST-MSL-001 "THANH TRI" — v1.2

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Status** | Approved — D/W classified by CEO |
| **Total** | 72 requirements (46 D, 19 W1, 14 W2) |
| **v1.1** | Added CONOPS + Section J (Towing) — 12 new requirements |
| **v1.2** | QC resolution: SS 5 (not 6) for tow-out, tug ≥ 100 HP, no VR registration |
| **v1.3** | Resolved 3 TBD forces: R-J08=17kN, R-J01=64kN, R-D04=125kN. Added multi-point towing/mooring notes. |

---

## CONOPS — Kịch Bản Sử Dụng

```
┌──────────┐    ┌──────────────┐    ┌───────────┐    ┌──────┐    ┌──────────────┐    ┌──────────┐
│ LẮP RÁP  │───▶│  KÉO RA VỊ   │───▶│ TRIỂN KHAI│───▶│ BẮN  │───▶│  THU HỒI     │───▶│ KÉO VỀ  │
│ TẠI CẢNG │    │  TRÍ NEO     │    │ NEO ĐẬU   │    │ THỬ  │    │  NEO + BIA   │    │ CẢNG    │
└──────────┘    └──────────────┘    └───────────┘    └──────┘    └──────────────┘    └──────────┘
    SS 0            SS 5              SS 3-4        SS 3-4         SS 3-4            SS 3-4
  Nguyên vẹn     PHẢI NGUYÊN VẸN     Neo ≥ 24h     At anchor    Cho phép hư hỏng   Giảm yêu cầu
                  tính năng RCS                                   nhỏ sau bắn
```

### Điều kiện bất đối xứng (Asymmetric)

| Giai đoạn | Sea State | Yêu cầu nguyên vẹn | Lý do |
|-----------|-----------|---------------------|-------|
| **Kéo ra** | SS ≤ 5 | **PHẢI nguyên vẹn 100%** tính năng RCS + kết cấu | Target phải sẵn sàng bắn khi đến vị trí |
| **Neo đậu** | SS 3-4 | Nguyên vẹn, hoạt động bình thường | Điều kiện bắn thử |
| **Kéo về** | SS 3-4 | Cho phép hư hỏng nhỏ (sau bắn), không cần nguyên vẹn tính năng | Chỉ cần kéo về an toàn, không chìm |

---

## A. Signature — Radar Cross Section (RCS)

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-A01 | RCS tối thiểu tại X-band (8-12 GHz) | ≥ 1,000 | m² | **D** | Cơ | Radar measurement / RCS calculation | Charter SC-1 |
| R-A02 | RCS omnidirectional (coverage azimuth) | ≥ 330 | ° | **D** | Cơ | Polar plot measurement | NATO STANAG |
| R-A03 | RCS stability under sea state 3 (roll/pitch) | Variation ≤ 6 | dB | W2 | Cơ | Sea trial + radar log | — |
| R-A04 | Reflector type | Trihedral corner / octahedral | — | W1 | Cơ | Design review | — |
| R-A05 | Reflector mounting height above waterline | ≥ 2.0 | m | **D** | Cơ | Measurement | Radar horizon calc |
| R-A06 | No active radar augmentation (passive only) | Yes | — | **D** | Cơ | Design review | Charter |

## B. Structural / Hull

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-B01 | Hull material chịu nước biển (corrosion) | ≥ 5 năm service life | yr | W1 | Cơ | Material cert + salt spray test | — |
| R-B02 | Tải trọng thiết kế (design load) | ≥ 1,500 | kg | **D** | Cơ | Structural analysis | — |
| R-B03 | Chịu va đập sóng (wave slam pressure) | Sea State 4 | — | **D** | Cơ | Structural calculation | DNV-GL |
| R-B04 | Không chìm khi thủng 1 khoang | — | — | **D** | Cơ | Damage stability calc | SOLAS |
| R-B05 | Kích thước tổng thể (max dimension) | ≤ 10 | m | W1 | Cơ | Drawing review | Transport constraint |
| R-B06 | Chiều cao tổng từ mặt nước | ≥ 3.0 | m | **D** | Cơ | Drawing review | Radar horizon |
| R-B07 | Kết nối giữa các module: tháo lắp được | — | — | **D** | Cơ | Assembly test | — |
| R-B08 | Tuổi thọ kết cấu (structural fatigue life) | ≥ 500 | cycles | W2 | Cơ | Fatigue analysis | — |
| R-B09 | Chống UV degradation | ≥ 5 | yr | W2 | Cơ | Material spec + UV test | — |
| R-B10 | Trọng lượng khô (dry weight) tổng | ≤ 5,000 | kg | W1 | Cơ | Weigh | — |

## C. Buoyancy & Stability

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-C01 | Hệ số an toàn sức nổi (buoyancy SF) | ≥ 2.0 | — | **D** | Cơ | Buoyancy calculation | — |
| R-C02 | Metacentric height (GM) | ≥ 0.5 | m | **D** | Cơ | Stability calculation | IMO |
| R-C03 | Freeboard tối thiểu (operational) | ≥ 0.4 | m | **D** | Cơ | Drawing / measurement | — |
| R-C04 | Tự phục hồi sau lật (self-righting) | Sea State ≤ 4 | — | W1 | Cơ | Stability analysis | — |
| R-C05 | Khả năng sống sót (không chìm) | Sea State 5-6 | — | **D** | Cơ | Damage stability calc | Charter SC-5 |
| R-C06 | Draft tối đa (operational) | ≤ 1.5 | m | W2 | Cơ | Drawing review | Shallow water ops |
| R-C07 | Foam fill cho buoyancy chambers | Closed-cell, 30-45 | kg/m³ | W1 | Cơ | Material certification | — |

## D. Mooring & Station-Keeping

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-D01 | Giữ vị trí trong dòng chảy | ≤ 2.0 | knots | **D** | Cơ | Mooring analysis | Biển Đông |
| R-D02 | Giữ vị trí trong gió | ≤ 30 | knots | **D** | Cơ | Mooring analysis | Sea State 4 |
| R-D03 | Độ sâu neo tối đa | ≥ 50 | m | **D** | Cơ | Anchor + chain sizing | Coastal VN |
| R-D04 | Tải trọng neo thiết kế (mooring design load) | ≥ 125 | kN | **D** | Cơ | Mooring calculation | RESEARCH 2026-03-08 |
| R-D05 | Bán kính watch circle (drift radius) | ≤ 50 | m | W1 | Cơ | Mooring analysis | Range safety |
| R-D06 | Thời gian triển khai neo | ≤ 60 | min | W2 | Cơ | Field trial | — |
| R-D07 | Thời gian thu hồi neo | ≤ 45 | min | W2 | Cơ | Field trial | — |
| R-D08 | Kiểu neo phù hợp đáy biển vùng hoạt động | — | — | **D** | Cơ | Geotechnical review | — |

## E. Navigation Safety & Marking

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-E01 | Đèn hàng hải SOLAS | Visible ≥ 2 | NM | **D** | Điện | Light certification | COLREGS |
| R-E02 | GPS beacon (vị trí tracking) | Accuracy ≤ 5 | m CEP | **D** | Điện | GPS test | — |
| R-E03 | Tần suất phát GPS | ≤ 60 | s | W1 | Điện | Functional test | — |
| R-E04 | Thời gian hoạt động GPS + đèn (battery life) | ≥ 30 | ngày | W1 | Điện | Endurance test | — |
| R-E05 | Sơn cảnh báo (high-visibility) | Màu cam/vàng IALA | — | **D** | Cơ | Visual inspection | IALA |
| R-E06 | Bảng tên / marking nhận dạng | Theo quy định hàng hải VN | — | **D** | Cơ | Inspection | TCVN |
| R-E07 | Radar reflector riêng cho an toàn hàng hải | ≥ 10 | m² RCS | W2 | Cơ | Measurement | COLREGS |

## F. Environmental & Durability

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-F01 | Nhiệt độ hoạt động | 10 to 50 | °C | **D** | Cơ+Điện | MIL-STD-810 501/502 | MIL-STD-810 |
| R-F02 | Độ ẩm | ≤ 100% condensing | %RH | **D** | Điện | MIL-STD-810 507 | MIL-STD-810 |
| R-F03 | Chống ăn mòn nước biển (salt spray) | ≥ 1,000 | hrs | **D** | Cơ | ASTM B117 | MIL-STD-810 |
| R-F04 | Chống biofouling (hà bám) | Anti-fouling coating | — | W1 | Cơ | Visual @ 6 months | — |
| R-F05 | Chịu UV (solar radiation) | ≥ 3 yr outdoor | yr | W1 | Cơ | Material spec | — |
| R-F06 | Chịu sóng biển operational | ≤ 2.5 | m (Hs) | **D** | Cơ | Sea trial | Sea State 4 |
| R-F07 | Chịu gió operational | ≤ 40 | knots | **D** | Cơ | Structural calc | — |
| R-F08 | Service life tổng thể | ≥ 5 | yr | W1 | Cơ | Design life analysis | — |
| R-F09 | Bảo trì định kỳ (maintenance interval) | ≥ 6 | months | W1 | Cơ | Maintenance plan | — |

## G. Logistics — Vận Chuyển, Triển Khai, Thu Hồi

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-G01 | Vận chuyển bằng xe tải 10-15 tấn | — | — | **D** | Cơ | Dimensional check | VN road limits |
| R-G02 | Modular — ≤ 3 module chính | — | — | W1 | Cơ | Assembly test | — |
| R-G03 | Module lớn nhất ≤ 2.4 x 2.4 x 12 m | — | — | **D** | Cơ | Drawing review | Container/xe tải |
| R-G04 | Assembly tại bến ≤ 4 hrs | — | — | W2 | Cơ | Assembly trial | — |
| R-G05 | ≤ 6 người triển khai | — | — | W1 | Cơ | Field trial | — |
| R-G06 | Cẩu ≤ 5 tấn | — | — | W1 | Cơ | Lift plan | — |
| R-G07 | Triển khai tổng ≤ 4 hrs | — | — | W2 | Cơ | Field trial | — |
| R-G08 | Towing eye tiêu chuẩn | — | — | **D** | Cơ | Design review | — |
| R-G09 | Lưu trữ ngoài trời | — | — | **D** | Cơ | Storage test | — |

## H. Manufacturing & Cost

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-H01 | Chi phí sản xuất / unit | ≤ 2,000 | M VND | **D** | All | BOM costing | Charter SC-2 |
| R-H02 | Thời gian chế tạo | ≤ 8 | tuần | **D** | Cơ | Manufacturing log | Charter SC-3 |
| R-H03 | Tỷ lệ nội địa hoá | ≥ 60 | % | **D** | All | BOM analysis | Charter SC-4 |
| R-H04 | Không cần thiết bị gia công đặc biệt | CNC + hàn | — | W1 | Cơ | Process review | — |
| R-H05 | Thợ hàn 3G/4G certified | — | — | **D** | Cơ | Welder certification | AWS D1.1 |
| R-H06 | Tolerance ≤ ±5 mm structural | — | — | W2 | Cơ | QC inspection | — |
| R-H07 | Tài liệu kỹ thuật đầy đủ cho sản xuất | — | — | **D** | All | Document review | — |

## I. Safety — An Toàn

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-I01 | Không vật liệu nguy hiểm/cháy nổ | — | — | **D** | Cơ | Material review | Charter |
| R-I02 | Không chìm sau 1 lần trúng mảnh | — | — | **D** | Cơ | Damage assessment | — |
| R-I03 | ≥ 2 điểm neo an toàn cho nhân viên bảo trì | — | — | **D** | Cơ | Inspection | — |
| R-I04 | Cạnh radius ≥ 3 mm (khu vực tiếp xúc người) | — | — | W2 | Cơ | Inspection | — |
| R-I05 | Khoảng cách an toàn theo quy định HQ VN | — | — | **D** | — | Range safety analysis | HQ VN SOP |
| R-I06 | Sửa chữa tại chỗ được (repairability) | — | — | W1 | Cơ | Field repair trial | — |
| R-I07 | GM > 0.5m khi có người đứng trên | — | — | **D** | Cơ | Stability calc w/ live load | — |

---

## J. Towing — Kéo Bia (MỚI — v1.1)

> Kịch bản bất đối xứng: kéo ra (SS 5, nguyên vẹn) vs kéo về (SS 3-4, giảm yêu cầu)

| Req-ID | Requirement | Value | Unit | D/W | Domain | Test Method | Ref |
|--------|-------------|-------|------|-----|--------|-------------|-----|
| R-J01 | Điểm kéo chính (towing bridle/eye) chịu tải kéo | ≥ 64 (V-bridle: 37/point) | kN | **D** | Cơ | Tow load calculation + proof test | RESEARCH 2026-03-08 |
| R-J02 | Ổn định khi kéo (không lật, không quay) ở SS 5 | GM > 0.3m under tow | — | **D** | Cơ | Tow stability analysis | — |
| R-J03 | Tốc độ kéo tối thiểu | ≥ 3 | knots | **D** | Cơ | Tow trial | — |
| R-J04 | Kéo ra: nguyên vẹn tính năng RCS sau kéo SS 5 | 100% RCS + structural | — | **D** | Cơ | Post-tow RCS check + visual inspection | CONOPS |
| R-J05 | Kéo ra: không hư hỏng kết cấu sau kéo SS 5 | Zero structural damage | — | **D** | Cơ | Post-tow structural inspection | CONOPS |
| R-J06 | Kéo về: chịu được SS 3-4 | Không chìm, kéo được | — | **D** | Cơ | Tow trial / calculation | CONOPS |
| R-J07 | Kéo về: cho phép hư hỏng nhỏ (sau bắn) | Reduced functionality OK | — | **D** | Cơ | Visual inspection | CONOPS |
| R-J08 | Lực cản kéo (tow drag) ở 5 knots (SS 5) | ≤ 17 | kN | W2 | Cơ | Drag calculation / tow trial | RESEARCH 2026-03-08 |
| R-J09 | Chiều dài dây kéo tối thiểu | ≥ 3x water depth hoặc ≥ 50 | m | W1 | Cơ | Tow procedure | — |
| R-J10 | Tương thích với tàu kéo hải quân VN hiện có | Tàu kéo ≥ 100 HP | — | **D** | Cơ | Tow trial | HQ VN inventory |
| R-J11 | Neo đậu tối thiểu trước thu hồi | ≥ 24 | hrs | **D** | Cơ | Operational log | CONOPS |
| R-J12 | Reflector/RCS components chịu rung lắc khi kéo SS 5 | Không bung, không lệch | — | **D** | Cơ | Vibration/shock analysis + tow trial | CONOPS |

---

## Modified Requirements (v1.1)

| Req-ID | Change | Lý Do |
|--------|--------|-------|
| R-B03 | Thêm: + tow-induced loads at SS 5 | Kéo ra là điều kiện khắc nghiệt nhất |
| R-C05 | Clarify: SS 5 áp dụng cả khi kéo, không chỉ neo | CONOPS asymmetry |
| R-G08 | Upgrade: Towing eye → towing bridle system, sized for SS 5 | Load phải tính cho tow-out |
| R-D06 | Clarify: Triển khai neo tại vị trí (sau khi kéo ra) | Sequence rõ ràng |

---

## Summary (v1.1)

| Category | D | W1 | W2 | Total |
|----------|---|----|----|-------|
| A. Signature | 4 | 1 | 1 | 6 |
| B. Structural | 4 | 3 | 2 | 9 |
| C. Buoyancy | 4 | 2 | 1 | 7 |
| D. Mooring | 5 | 1 | 2 | 8 |
| E. Nav Safety | 4 | 2 | 1 | 7 |
| F. Environment | 4 | 4 | 0 | 8 |
| G. Logistics | 4 | 3 | 2 | 9 |
| H. Manufacturing | 4 | 1 | 1 | 6 |
| I. Safety | 5 | 1 | 1 | 7 |
| **J. Towing (NEW)** | **8** | **1** | **1** | **10** |
| **TOTAL** | **46** | **19** | **12** | **77** |

> v1.0→v1.1: +10 new (Section J) + 2 modified existing = 77 total (was 67).
> D ratio: 60% → phù hợp defense product với CONOPS rõ ràng.

---

*Requirements List v1.2 | VN-AST-MSL-001 | HELIX Phase 1*
