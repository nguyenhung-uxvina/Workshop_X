---
created: 2026-03-13
updated: 2026-03-13
type: essential-problem
status: draft
document-id: VN-AST-MSL-001-EP-002
version: "2.0"
tags: [#type/project, #status/active]
---

# 5-STEP PAHL-BEITZ ABSTRACTION — VN-AST-MSL-001 "THANH TRI" — v2.0

| | |
|--|--|
| **Date** | 2026-03-13 |
| **Based on** | Requirements List v2.0 (103 req, 60D + 34W1 + 3W2 + 1X) |
| **Status** | **DRAFT — chờ CEO review** |
| **Changes from v1.0** | New Section K, SS 5 towing, A→B→C→D coupling, 60 Demands (was 46) |

---

## Step 1: ELIMINATE — Loại bỏ sở thích cá nhân, giả định ngầm, và kiến thức từ Phase 2/3 cũ

> Mục đích: mở lại không gian giải pháp, không bị khoá vào concept C1 TRÒN HDPE từ lần chạy trước.

Loại bỏ:
- ~~HDPE là vật liệu hull~~ → chưa chọn vật liệu (có thể GRP, nhôm, thép, composite)
- ~~Corner reflector là giải pháp RCS duy nhất~~ → có thể Luneburg lens, flat plate array, active enhancer
- ~~Hình tròn là hình dạng tối ưu~~ → hình vuông, lục giác, bè phẳng, catamaran đều khả thi
- ~~8 reflectors × 1.0m edge~~ → có thể ít reflector lớn hơn, hoặc nhiều reflector nhỏ hơn
- ~~Cột mast trung tâm~~ → reflector có thể mount trên frame, truss, hoặc hull superstructure
- ~~Single-point mooring~~ → multi-point, turret, spread mooring đều khả thi
- ~~Through-hull chain pipe (Option E)~~ → đây là Phase 3 solution, chưa chọn
- ~~Foam-filled hull~~ → multi-compartment, sealed tanks, hoặc catamaran hull cũng có thể unsinkable
- ~~V-bridle towing~~ → center tow, side tow, bridle, hoặc self-propelled transit
- ~~3-segment ring transport~~ → có thể thiết kế không cần tách module
- ~~Chain/nylon hybrid mooring~~ → all-chain, all-synthetic, hoặc elastic mooring đều khả thi

**Giữ lại (đã xác nhận bởi vật lý / CEO decision, KHÔNG phải giả định):**
- RCS phản xạ thụ động (R-A05 = D) — Charter
- SS 5 towing (R-J02 = D) — CEO decision
- SS 6 survival (R-B03, R-C05, R-D10 = D) — Charter SC-5
- X-band 9–10 GHz (R-A01a/b = D) — radar tần số huấn luyện

---

## Step 2: OMIT — Tách riêng Wishes, giữ lại 60 Demands

> 60 Demands (D) = core constraints. 34 W1 + 3 W2 = bổ sung nếu concept cho phép.

### 60 Demands theo nhóm chức năng:

**Nhóm 1 — Trình bày RCS (4D):** R-A01a, R-A01b, R-A02, R-A04, R-A05
- Boresight ≥ 5,000 m² VÀ worst-case ≥ 1,000 m² → hai ràng buộc riêng biệt
- 360° coverage bắt buộc → platform neo, không kiểm soát hướng
- Tâm reflector ≥ 3.5m → radar horizon + multipath
- Passive only

**Nhóm 2 — Kết cấu chịu tải (8D):** R-B01–B04, R-B06–B07, R-B09, R-B11–B12
- Payload ≥ 350 kg, wave slam SS 6, foam-filled/multi-compartment
- Reflector height ≥ 4.0m tổng, UV 5 năm, bolt/pin connections
- Wind loading SS 6, design moment ≥ 1,750 kg·m

**Nhóm 3 — Nổi & ổn định (6D):** R-C01–C03, R-C05, R-C07–C09
- Buoyancy reserve ≥ 1.5, GM ≥ 0.50m, freeboard ≥ 0.40m
- Unsinkable SS 6, closed-cell foam ≤ 35 kg/m³
- RM/HM ≥ 1.5 tại SS 4, ballast đủ cho CG dưới metacenter
- **Coupling:** 250 kg tại 3.5m → CG cao → cần GM lớn → cần hull rộng hoặc ballast nặng

**Nhóm 4 — Giữ vị trí (7D):** R-D01–D04, R-D08–D11
- Dòng ≤ 2 kn, gió ≤ 50 km/h, sâu ≥ 50m, tải 6 kN
- Đáy cát/cát-bùn, neo liên tục ≥ 72h, survival SS 6
- Dây neo chịu UV ≥ 3 năm

**Nhóm 5 — An toàn hàng hải (4D):** R-E01–E02, R-E04–E06
- Đèn SOLAS ≥ 2 NM, GPS CEP ≤ 10m, pin ≥ 7 ngày
- Sơn cam, marking HQ VN

**Nhóm 6 — Môi trường (7D):** R-F01–F03, R-F05–F08
- 0–55°C, 100% RH, salt spray 500h, UV 5 năm
- SS 3 operational / SS 4 neo chờ, gió 35/50 km/h, tuổi thọ 5 năm

**Nhóm 7 — Hậu cần (7D):** R-G01, R-G05–G06, R-G08–G10
- Xe tải 5–10t VN, ≤ 4 người, cẩu ≤ 5t
- Mắt kéo ≥ 6 kN, lưu ngoài trời, hạ thủy không cần ụ khô

**Nhóm 8 — Chế tạo & chi phí (5D):** R-H01–H04, R-H07
- ≤ 2,000M VND, ≤ 8 tuần, ≥ 60% nội địa
- Xưởng thông thường + hàn HDPE, tài liệu đầy đủ

**Nhóm 9 — An toàn (4D):** R-I01–I02, R-I05, R-I07
- Không vật liệu nguy hiểm, không chìm khi trúng mảnh
- Range safety HQ VN, ổn định khi 2 người đứng (GM > 0.3m)

**Nhóm 10 — Vận chuyển biển (5D):** R-J02–J05, R-J07
- **SS 5 kéo** (CEO decision — design-driving)
- 100% RCS + kết cấu sau kéo, điểm kéo ≥ 10 kN
- GM > 0.3m khi kéo, tương thích tàu HQ hiện có

**Nhóm 11 — Chịu bắn (3D):** R-K01–K02, R-K05
- Không chìm sau trúng mảnh rocket/missile
- Không mảnh thứ cấp nguy hiểm
- Linh kiện thay thế nội địa 100%

### Wishes omitted (không ảnh hưởng bài toán bản chất):
- W1 (34): R-A03, R-A06–A09, R-B05, R-B08, R-B10, R-B13, R-C04, R-C06, R-D05–D07, R-D12–D13, R-E03, R-F04, R-F09, R-G02–G04, R-G07, R-H05–H06, R-H08, R-I03–I04, R-I06, R-J01, R-J06, R-J08–J09, R-K03–K04, R-K06
- W2 (3): R-A10, R-E08, R-H08
- X (1): R-E07

---

## Step 3: TRANSFORM — Chuyển định lượng → định tính

| Định lượng (60 Demands) | Định tính |
|-----------|-----------|
| RCS ≥ 5,000 m² boresight, ≥ 1,000 m² worst-case, X-band | Phản xạ radar tương đương tàu chiến cỡ corvette ở mọi góc |
| 360° azimuth, tâm ≥ 3.5m | Toàn hướng, nhìn thấy trên đường chân trời radar |
| SS 3 operational, SS 4 neo chờ | Hoạt động trong điều kiện biển thông thường |
| SS 5 towing | Kéo được trong thời tiết xấu |
| SS 6 survival, không chìm khi thủng/trúng đạn | Sống sót trong bão và sau giao chiến |
| Payload 350 kg, moment 1,750 kg·m, height 4.0m | Mang hệ thống phản xạ nặng trên cao |
| GM ≥ 0.50m, buoyancy ≥ 1.5, RM/HM ≥ 1.5 | Ổn định dù top-heavy |
| Neo 6 kN, 50m sâu, 72h liên tục, SS 6 | Đứng yên tại vị trí trên biển sâu |
| Điểm kéo 10 kN, GM > 0.3m khi kéo | Chịu được lực kéo động trên biển |
| ≤ 2,000M VND, ≥ 60% nội địa, ≤ 8 tuần | Rẻ, nhanh, chế tạo trong nước |
| Xe tải VN, cẩu 5t, ≤ 4 người | Triển khai bằng phương tiện phổ thông |
| GPS, đèn SOLAS, pin 7 ngày | Theo dõi và nhận dạng được |
| Không mảnh thứ cấp, linh kiện thay thế nội địa | An toàn sau trúng đạn, sửa chữa nhanh |
| 0–55°C, salt spray 500h, UV 5 năm | Bền trong khí hậu nhiệt đới biển |

---

## Step 4: GENERALIZE — Khái quát hoá bài toán

> **Bài toán rộng:** "Tạo ra một tài sản huấn luyện hải quân tiêu hao (expendable naval training asset) mô phỏng signature radar của mục tiêu thực, hoạt động tại vị trí cố định trên biển, chịu được giao chiến, và triển khai/thu hồi bằng phương tiện thông thường."

**Lớp bài toán:**
- Mục tiêu radar hải quân (naval radar target) — subclass của mục tiêu huấn luyện quân sự
- Thuộc lớp "phao biển có chức năng" (functional ocean buoy) — cùng họ với phao hàng hải, weather buoy, ODAS
- Đặc thù: **top-heavy by design** (RCS đòi hỏi diện tích phản xạ lớn trên cao → luôn bất lợi ổn định)
- Đặc thù: **expendable by design** (chấp nhận hư hỏng khi trúng đạn, nhưng không chìm)

**Mâu thuẫn thiết kế cốt lõi (fundamental design contradiction):**

```
RCS lớn  ───→  Reflector lớn + cao  ───→  Top-heavy
                                              ↓
                                    GM giảm ←─ CG cao
                                              ↓
                         Hull rộng/ballast nặng ←─ cần GM tăng
                                              ↓
                         Drag + weight tăng ←─ hull to hơn
                                              ↓
                    Mooring load + tow load tăng ←─ drag lớn hơn
                                              ↓
                         Cost + logistics tăng ←─ nặng + to hơn
```

→ **Binding constraint: A→B→C→D cascade.** Mọi concept phải giải quyết mâu thuẫn "RCS lớn trên cao vs. ổn định vs. cost/logistics."

---

## Step 5: FORMULATE — Bài Toán Bản Chất

```
┌──────────────────────────────────────────────────────────────────────┐
│ BÀI TOÁN BẢN CHẤT (Essential Problem) v2.0:                          │
│                                                                      │
│ "Trình bày một mục tiêu radar cỡ corvette (RCS kiểm soát được,     │
│  toàn hướng, trên đường chân trời) tại vị trí cố định trên biển,   │
│  ổn định dù top-heavy, kéo được trong SS 5, sống sót sau giao      │
│  chiến và bão SS 6, triển khai và thu hồi bằng phương tiện thông   │
│  thường của Hải Quân Việt Nam."                                      │
│                                                                      │
│ English: "Present a corvette-class radar target (controllable RCS,   │
│ omnidirectional, above radar horizon) at a fixed sea position,       │
│ stable despite top-heavy geometry, towable in SS 5, survivable       │
│ after engagement and SS 6 storms, deployable and recoverable by      │
│ standard Vietnam Navy means."                                        │
└──────────────────────────────────────────────────────────────────────┘
```

### 7 Chức Năng Cốt Lõi (was 5 in v1.0)

| # | Chức năng | Demands driving | Mô tả |
|---|-----------|----------------|-------|
| 1 | **Present RCS** | A01a/b, A02, A04, A05 | Phản xạ radar cỡ corvette, 360°, trên đường chân trời |
| 2 | **Hold position** | D01–D04, D08–D11 | Giữ vị trí cố định trên biển sâu ≥ 50m |
| 3 | **Stay afloat & stable** | C01–C03, C05, C07–C09, B03 | Nổi, ổn định, không chìm — dù top-heavy |
| 4 | **Carry structure** | B01–B02, B04, B06–B07, B09, B11–B12 | Chịu tải reflector nặng + cao + gió |
| 5 | **Transit by tow** | J02–J05, J07 | Kéo SS 5, chịu lực động, tương thích tàu HQ |
| 6 | **Survive engagement** | K01–K02, K05, I01–I02 | Không chìm, không mảnh nguy hiểm, sửa được |
| 7 | **Be deployable** | G01, G05–G06, G08–G10, E01–E02, E04–E06 | Triển khai/thu hồi bằng phương tiện phổ thông, nhìn thấy + theo dõi được |

### So sánh v1.0 → v2.0

| | v1.0 | v2.0 |
|---|------|------|
| Demands | 46 (ước lượng "38 còn lại") | **60** (chính xác) |
| Core functions | 5 | **7** (+Transit by tow, +Survive engagement) |
| Coupling | Ngầm | **Explicit A→B→C→D cascade** |
| RCS spec | ≥ 1,000 m² (single) | **Boresight ≥ 5,000 + worst-case ≥ 1,000** (dual) |
| Towing | Không nhắc | **SS 5 (CEO decision)** — design-driving |
| Engagement | Không nhắc | **Section K — 3 Demands** |
| Binding constraint | Không xác định | **RCS↔stability↔cost cascade** |

---

### Kiểm Tra Bài Toán Bản Chất

| Tiêu chí | Đạt? | Ghi chú |
|-----------|------|---------|
| Không chứa giải pháp cụ thể? | ✓ | Không nhắc HDPE, corner reflector, hình dạng hull |
| Cover tất cả 60 Demands? | ✓ | 7 nhóm chức năng map đến tất cả 11 sections |
| Xác định mâu thuẫn thiết kế? | ✓ | RCS cao ↔ top-heavy ↔ cost |
| Mở cho nhiều concept? | ✓ | Hull tròn/vuông/cata, reflector trihedral/Luneburg/flat, neo single/multi |
| Phù hợp lớp bài toán? | ✓ | Naval radar target / functional ocean buoy |

---

*Essential Problem v2.0 DRAFT | VN-AST-MSL-001 | HELIX Phase 1 — Step 4*
