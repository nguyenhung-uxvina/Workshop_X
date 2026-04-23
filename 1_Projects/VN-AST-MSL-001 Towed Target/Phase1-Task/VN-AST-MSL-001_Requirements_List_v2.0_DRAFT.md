---
created: 2026-03-08
updated: 2026-03-08
type: requirements-list
status: draft
document-id: VN-AST-MSL-001-REQ-002
version: "2.0-DRAFT"
tags: [#type/project, #status/active]
---

# REQUIREMENTS LIST — VN-AST-MSL-001 "THANH TRI" — v2.0 DRAFT

| | |
|--|--|
| **Date** | 2026-03-08 |
| **Status** | DRAFT — AI-generated từ Charter + standards. CEO phân loại D/W. |
| **Source** | Charter v1.0, ICD v0, MIL-STD-810, IMO, COLREGS, IALA, DNV-GL, AWS D1.1 |
| **Method** | Clean restart — KHÔNG dùng Phase 2/3 knowledge |

---

## Hướng Dẫn Phân Loại

CEO đánh dấu mỗi requirement:
- **D** = Demand — bắt buộc, không thương lượng
- **W1** = Wish ưu tiên cao — rất muốn có
- **W2** = Wish ưu tiên thấp — có thì tốt
- **X** = Loại bỏ — không cần thiết cho sản phẩm này
- **?** = Cần thêm thông tin / chưa quyết định

Cột "Value" có giá trị gợi ý từ AI — CEO xác nhận hoặc sửa.

---

## A. Nhiệm Vụ Chính — Radar Signature (RCS)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 1 | R-A01 | RCS tối thiểu tại X-band (8-12 GHz) | ≥ 1,000 | m² | [ ] | Cơ | Radar measurement hoặc RCS tính toán | Charter SC-1 |
| 2 | R-A02 | Góc phủ RCS azimuth (omnidirectional) | ≥ 300 | ° | [ ] | Cơ | Polar plot measurement | — |
| 3 | R-A03 | Biến động RCS do nghiêng lắc (roll/pitch SS 3) | ≤ ? | dB | [ ] | Cơ | Sea trial + radar log | — |
| 4 | R-A04 | Chiều cao gắn reflector trên mặt nước | ≥ ? | m | [ ] | Cơ | Đo | Radar horizon calc |
| 5 | R-A05 | Chỉ dùng phản xạ thụ động (passive only) | Có | — | [ ] | Cơ | Design review | Charter |
| 6 | R-A06 | Loại reflector (corner, Luneburg, flat plate...) | Chưa giới hạn | — | [ ] | Cơ | Trade study Phase 2 | — |

---

## B. Thân & Kết Cấu (Hull & Structure)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 7 | R-B01 | Vật liệu thân chịu nước biển (corrosion) | Tuổi thọ ≥ ? | năm | [ ] | Cơ | Material cert + salt spray | — |
| 8 | R-B02 | Tải trọng thiết kế (design payload capacity) | ≥ ? | kg | [ ] | Cơ | Structural analysis | — |
| 9 | R-B03 | Chịu áp lực sóng đập (wave slam) | SS ? | — | [ ] | Cơ | Structural calc | DNV-GL |
| 10 | R-B04 | Không chìm khi thủng 1 khoang (damage tolerance) | — | — | [ ] | Cơ | Damage stability calc | SOLAS |
| 11 | R-B05 | Kích thước tổng thể lớn nhất (max overall dim.) | ≤ ? | m | [ ] | Cơ | Drawing review | — |
| 12 | R-B06 | Chiều cao tổng từ mặt nước đến đỉnh | ≥ ? | m | [ ] | Cơ | Drawing review | Radar horizon |
| 13 | R-B07 | Kết nối giữa modules: tháo lắp được | — | — | [ ] | Cơ | Assembly test | — |
| 14 | R-B08 | Tuổi thọ kết cấu (fatigue life — cycles deployment) | ≥ ? | lần | [ ] | Cơ | Fatigue analysis | — |
| 15 | R-B09 | Chống suy giảm UV | ≥ ? | năm | [ ] | Cơ | Material spec / UV test | — |
| 16 | R-B10 | Khối lượng khô tổng (dry weight limit) | ≤ ? | kg | [ ] | Cơ | Cân | — |

---

## C. Sức Nổi & Ổn Định (Buoyancy & Stability)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 17 | R-C01 | Hệ số an toàn sức nổi (buoyancy SF) | ≥ ? | — | [ ] | Cơ | Buoyancy calc | — |
| 18 | R-C02 | Chiều cao tâm nghiêng (metacentric height GM) | ≥ ? | m | [ ] | Cơ | Stability calc | IMO |
| 19 | R-C03 | Mớn nước tự do tối thiểu (freeboard) | ≥ ? | m | [ ] | Cơ | Drawing / đo | — |
| 20 | R-C04 | Tự phục hồi sau lật (self-righting) | SS ≤ ? | — | [ ] | Cơ | Stability analysis | — |
| 21 | R-C05 | Sống sót không chìm (survival) | SS ? | — | [ ] | Cơ | Damage stability calc | Charter SC-5 |
| 22 | R-C06 | Mớn nước tối đa (max draft — operational) | ≤ ? | m | [ ] | Cơ | Drawing review | — |
| 23 | R-C07 | Vật liệu nổi (foam spec nếu dùng) | Closed-cell, ? | kg/m³ | [ ] | Cơ | Material cert | — |

---

## D. Giữ Vị Trí (Station-Keeping / Mooring)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 24 | R-D01 | Giữ vị trí trong dòng chảy | ≤ ? | knots | [ ] | Cơ | Mooring analysis | Biển Đông |
| 25 | R-D02 | Giữ vị trí trong gió | ≤ ? | knots | [ ] | Cơ | Mooring analysis | — |
| 26 | R-D03 | Độ sâu nước tối đa (max water depth) | ≥ ? | m | [ ] | Cơ | Anchor + line sizing | Coastal VN |
| 27 | R-D04 | Tải trọng neo thiết kế (mooring design load) | ≥ ? | kN | [ ] | Cơ | Mooring calc | — |
| 28 | R-D05 | Bán kính trôi (watch circle radius) | ≤ ? | m | [ ] | Cơ | Mooring analysis | Range safety |
| 29 | R-D06 | Thời gian triển khai neo | ≤ ? | phút | [ ] | Cơ | Field trial | — |
| 30 | R-D07 | Thời gian thu hồi neo | ≤ ? | phút | [ ] | Cơ | Field trial | — |
| 31 | R-D08 | Neo phù hợp đáy biển vùng hoạt động | — | — | [ ] | Cơ | Geotechnical review | — |
| 32 | R-D09 | Thời gian neo đậu liên tục tối thiểu | ≥ ? | giờ | [ ] | Cơ | Operational log | — |
| 33 | R-D10 | Neo chịu được điều kiện tối đa (survival mooring) | SS ? | — | [ ] | Cơ | Mooring calc | — |

---

## E. An Toàn Hàng Hải & Đánh Dấu (Navigation Safety)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 34 | R-E01 | Đèn hàng hải SOLAS / COLREGS | Visible ≥ ? | NM | [ ] | Điện | Light cert | COLREGS |
| 35 | R-E02 | GPS beacon (tracking vị trí) | CEP ≤ ? | m | [ ] | Điện | GPS test | — |
| 36 | R-E03 | Tần suất phát vị trí GPS | ≤ ? | s | [ ] | Điện | Functional test | — |
| 37 | R-E04 | Thời gian hoạt động pin (battery endurance) | ≥ ? | ngày | [ ] | Điện | Endurance test | — |
| 38 | R-E05 | Sơn cảnh báo (high-visibility paint) | Màu ? | — | [ ] | Cơ | Visual inspection | IALA |
| 39 | R-E06 | Bảng tên / marking nhận dạng | Theo quy định HQ VN | — | [ ] | Cơ | Inspection | TCVN |
| 40 | R-E07 | Radar reflector riêng cho an toàn hàng hải | ≥ ? | m² RCS | [ ] | Cơ | Measurement | COLREGS |

---

## F. Môi Trường & Bền Bỉ (Environmental & Durability)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 41 | R-F01 | Nhiệt độ hoạt động | ? to ? | °C | [ ] | Cơ+Điện | MIL-STD-810 501/502 | MIL-STD-810 |
| 42 | R-F02 | Độ ẩm | ? | %RH | [ ] | Điện | MIL-STD-810 507 | MIL-STD-810 |
| 43 | R-F03 | Chống ăn mòn muối (salt spray) | ≥ ? | hrs | [ ] | Cơ | ASTM B117 | MIL-STD-810 |
| 44 | R-F04 | Chống hà bám (biofouling) | — | — | [ ] | Cơ | Visual @ ? tháng | — |
| 45 | R-F05 | Chịu bức xạ UV (solar radiation) | ≥ ? | năm | [ ] | Cơ | Material spec | — |
| 46 | R-F06 | Sea state hoạt động (operational) | SS ? | — | [ ] | Cơ | Sea trial | — |
| 47 | R-F07 | Gió hoạt động (operational wind) | ≤ ? | knots | [ ] | Cơ | Structural calc | — |
| 48 | R-F08 | Tuổi thọ tổng thể (service life) | ≥ ? | năm | [ ] | Cơ | Design life analysis | — |
| 49 | R-F09 | Chu kỳ bảo trì (maintenance interval) | ≥ ? | tháng | [ ] | Cơ | Maintenance plan | — |

---

## G. Hậu Cần — Vận Chuyển, Triển Khai, Thu Hồi (Logistics)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 50 | R-G01 | Vận chuyển bằng xe tải tiêu chuẩn VN | Xe ? tấn | — | [ ] | Cơ | Dimensional check | VN road |
| 51 | R-G02 | Modular — số module chính tối đa | ≤ ? | — | [ ] | Cơ | Assembly test | — |
| 52 | R-G03 | Kích thước module lớn nhất (xe tải/container) | ≤ ? × ? × ? | m | [ ] | Cơ | Drawing review | VN road |
| 53 | R-G04 | Thời gian lắp ráp tại bến | ≤ ? | giờ | [ ] | Cơ | Assembly trial | — |
| 54 | R-G05 | Số người triển khai (crew) | ≤ ? | người | [ ] | Cơ | Field trial | — |
| 55 | R-G06 | Cẩu yêu cầu (crane capacity) | ≤ ? | tấn | [ ] | Cơ | Lift plan | — |
| 56 | R-G07 | Tổng thời gian triển khai (port → anchor) | ≤ ? | giờ | [ ] | Cơ | Field trial | — |
| 57 | R-G08 | Mắt kéo / bridle tiêu chuẩn (towing provision) | Có | — | [ ] | Cơ | Design review | — |
| 58 | R-G09 | Lưu trữ ngoài trời (outdoor storage) | Có | — | [ ] | Cơ | Storage test | — |
| 59 | R-G10 | Hạ thủy không cần ụ khô / slipway đặc biệt | — | — | [ ] | Cơ | Launch trial | — |

---

## H. Chế Tạo & Chi Phí (Manufacturing & Cost)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 60 | R-H01 | Chi phí sản xuất / unit | ≤ 2,000 | M VND | [ ] | All | BOM costing | Charter SC-2 |
| 61 | R-H02 | Thời gian chế tạo (từ khi có vật tư) | ≤ 8 | tuần | [ ] | Cơ | Manufacturing log | Charter SC-3 |
| 62 | R-H03 | Tỷ lệ nội địa hoá (BOM value) | ≥ 60 | % | [ ] | All | BOM analysis | Charter SC-4 |
| 63 | R-H04 | Không cần thiết bị gia công đặc biệt | ? | — | [ ] | Cơ | Process review | — |
| 64 | R-H05 | Chứng chỉ thợ hàn (nếu dùng hàn) | 3G/4G | — | [ ] | Cơ | Welder cert | AWS D1.1 |
| 65 | R-H06 | Dung sai chế tạo kết cấu | ≤ ±? | mm | [ ] | Cơ | QC inspection | — |
| 66 | R-H07 | Tài liệu kỹ thuật đầy đủ cho sản xuất | Có | — | [ ] | All | Document review | — |
| 67 | R-H08 | Khả năng sản xuất lô (batch production) | ≥ ? | unit/năm | [ ] | All | Capacity review | — |

---

## I. An Toàn (Safety)

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 68 | R-I01 | Không vật liệu nguy hiểm / cháy nổ | — | — | [ ] | Cơ | Material review | Charter |
| 69 | R-I02 | Không chìm sau trúng mảnh (1 hit survivability) | — | — | [ ] | Cơ | Damage assessment | — |
| 70 | R-I03 | Điểm neo an toàn cho nhân viên bảo trì trên platform | ≥ ? | điểm | [ ] | Cơ | Inspection | — |
| 71 | R-I04 | Cạnh an toàn (radius) khu vực tiếp xúc người | ≥ ? | mm | [ ] | Cơ | Inspection | — |
| 72 | R-I05 | Khoảng cách an toàn (range safety) theo quy định HQ VN | — | — | [ ] | — | Range safety analysis | HQ VN SOP |
| 73 | R-I06 | Sửa chữa tại hiện trường được (field repairability) | — | — | [ ] | Cơ | Field repair trial | — |
| 74 | R-I07 | Ổn định khi có người đứng trên (live load stability) | GM > ? | m | [ ] | Cơ | Stability calc | — |

---

## J. Vận Chuyển Trên Biển (Sea Transit)

> Giai đoạn đưa platform từ bến ra vị trí neo và ngược lại.
> Charter nói "anchored" — nhưng PHẢI có phương án đưa ra biển.
> CEO quyết định: kéo (tow) hay chở trên sà lan (barge) hay tự nổi kéo?

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 75 | R-J01 | Phương án vận chuyển trên biển | Kéo / Sà lan / Khác | — | [ ] | Cơ | CONOPS review | — |
| 76 | R-J02 | Sea state tối đa khi vận chuyển ra | SS ≤ ? | — | [ ] | Cơ | Sea trial / calc | — |
| 77 | R-J03 | Nguyên vẹn tính năng sau vận chuyển | ? % RCS + kết cấu | — | [ ] | Cơ | Post-transit inspection | — |
| 78 | R-J04 | Điểm kéo/nâng chịu tải (nếu kéo) | ≥ ? | kN | [ ] | Cơ | Load calc + proof test | — |
| 79 | R-J05 | Ổn định khi kéo (nếu kéo) | GM > ? khi kéo | m | [ ] | Cơ | Stability analysis | — |
| 80 | R-J06 | Tốc độ vận chuyển tối thiểu | ≥ ? | knots | [ ] | Cơ | Sea trial | — |
| 81 | R-J07 | Tương thích phương tiện kéo/chở HQ VN hiện có | ? | — | [ ] | Cơ | Compatibility check | HQ VN |
| 82 | R-J08 | Vận chuyển về sau bắn — cho phép hư hỏng nhỏ | — | — | [ ] | Cơ | Visual inspection | — |
| 83 | R-J09 | Khoảng cách vận chuyển tối đa (1 chuyến) | ≥ ? | NM | [ ] | Cơ | Fuel/endurance calc | — |

---

## K. Chịu Bắn & Sống Sót Sau Giao Chiến (Engagement Survivability)

> Đây là mục tiêu bắn — PHẢI tính đến damage modes.
> Charter nói "không chìm khi thủng" — nhưng cần detail hơn.

| # | Req-ID | Requirement | Value (AI gợi ý) | Unit | D/W | Domain | Test Method | Ref |
|---|--------|-------------|-------------------|------|-----|--------|-------------|-----|
| 84 | R-K01 | Không chìm sau trúng mảnh rocket/missile | — | — | [ ] | Cơ | Damage stability | — |
| 85 | R-K02 | Không gây mảnh thứ cấp nguy hiểm (secondary fragmentation) | — | — | [ ] | Cơ | Material review | — |
| 86 | R-K03 | Số lần sử dụng lại tối thiểu (reusability) | ≥ ? | lần | [ ] | Cơ | Post-engagement inspection | — |
| 87 | R-K04 | Thời gian sửa chữa sau 1 engagement | ≤ ? | giờ | [ ] | Cơ | Repair trial | — |
| 88 | R-K05 | Linh kiện thay thế sẵn có (spare parts availability) | — | — | [ ] | Cơ | Logistics plan | — |
| 89 | R-K06 | RCS duy trì sau trúng 1 hit (degraded RCS) | ≥ ? | % of nominal | [ ] | Cơ | RCS measurement | — |

---

## Summary — DRAFT

| Category | Count |
|----------|-------|
| A. Radar Signature | 6 |
| B. Hull & Structure | 10 |
| C. Buoyancy & Stability | 7 |
| D. Station-Keeping | 10 |
| E. Navigation Safety | 7 |
| F. Environmental | 9 |
| G. Logistics | 10 |
| H. Manufacturing & Cost | 8 |
| I. Safety | 7 |
| J. Sea Transit | 9 |
| K. Engagement Survivability | 6 |
| **TOTAL** | **89** |

---

## Khác Biệt So Với v1.x

| Điểm | v1.x (cũ) | v2.0 DRAFT (mới) |
|------|-----------|------------------|
| Sections | 10 (A-J) | 11 (A-K) — thêm Section K (Engagement Survivability) |
| Count | 77 | 89 |
| Values | Đã điền sẵn (nhiều cái từ Phase 2/3) | **Chỉ điền khi có nguồn rõ (Charter SC-x)** — còn lại = ? cho CEO |
| D/W | Đã phân loại | **Chưa phân loại — chờ CEO** |
| CONOPS | Đã viết chi tiết | **Chưa viết — CEO viết sau khi phân loại** |
| Section J | "Towing" (giả định kéo) | "Sea Transit" (chưa giả định phương án) |
| Section K | Không có | **MỚI** — chịu bắn là core function của target |

---

*Requirements List v2.0 DRAFT | VN-AST-MSL-001 | HELIX Phase 1 Clean Restart*
