---
project: V-SMASH-M
phase: 4
type: design-decision-review
sub-assembly: SA-01 + System-wide
version: 1.0
created: 2026-03-03
status: draft
decision-context: LC-40pct, feasibility-priority, time-to-deployment-priority
inputs:
  - V-SMASH-M_SA01_VDI2225_Concept_Selection_v1.0.md (previous evaluation at 60% LC)
  - V-SMASH-M_BOM_v1.0.md (LC baseline: 50.6%)
  - V-SMASH-M_Cost_Analysis_v1.0.md (top risk: EAR/Jetson)
  - V-SMASH-M_Integration_Sprint_Plan_v1.0.md (22-week path)
---

# V-SMASH-M — Đánh Giá Tổng Thể: Giải Pháp Tối Ưu tại LC ≥ 40%, Ưu Tiên Tính Khả Thi và Thời Gian Triển Khai

**Version 1.0 | 2026-03-03**

---

## 1. Bối Cảnh Đánh Giá Mới

### 1.1 Ràng buộc thay đổi

| Ràng buộc | Trước (v1.0 VDI2225) | Sau (đánh giá này) | Δ |
|-----------|----------------------|-------------------|---|
| Local content target | ≥ 60% | ≥ 40% | Nới lỏng 20pp |
| Ưu tiên #1 | LC + technical | **Tính khả thi** | Đảo ưu tiên |
| Ưu tiên #2 | Cost | **Thời gian ra FAT** | Đảo ưu tiên |

### 1.2 Phát hiện ngay lập tức: LC 40% đã đạt từ đầu

| Chỉ số | Giá trị | So với target 40% |
|--------|---------|------------------|
| LC hiện tại (vật liệu) | 34.3% | Chưa đạt |
| **LC hiện tại (vật liệu + lao động)** | **50.6%** | **ĐÃ ĐẠT — dư 10.6pp** |

**Kết quả:** Với target 40%, **BOM v1.0 hiện tại đã compliant mà không cần bất kỳ thay đổi nào.** Toàn bộ M1–M4 mitigation paths trở thành **optional** — không còn là bắt buộc.

Rủi ro R4 (local content shortfall) trong BOM §6 **không còn tồn tại** ở 40% target.

---

## 2. Tác Động lên Lựa Chọn SA-01: Có Thay Đổi Không?

### 2.1 Concept D: Phương án đơn giản nhất (OEM Module + Locking FFC + Strain Relief)

Với feasibility và time ưu tiên, xét thêm Concept D chưa được đánh giá trước:

| Phần tử | Mô tả | Thay đổi so với BOM v1.0 |
|---------|-------|--------------------------|
| VM-1200 | **Giữ nguyên** OEM camera module | Không |
| VM-1201 | **Thay ZIF** bằng locking FFC connector (e.g., Molex 54548) | VM-1201 → VM-1201L |
| Mới | FFC strain relief bracket (nhôm AA6061, 5g, CNC local) | +VM-1208 |
| Mới | Epoxy FFC vào bracket sau khi lắp | +VM-8110 (vật liệu) |

**Chi phí thay đổi:** +$1.50/unit. **NRE:** 1 tuần thiết kế jig + bracket. **Schedule:** không có thay đổi.

### 2.2 Phân Tích Vật Lý: Tại Sao Concept D Không Giải Quyết Được Vấn Đề

**Vấn đề có hai lớp, không phải một:**

```
Lớp 1 — Connector: ZIF latch gãy/mở dưới 10,000G
         → Concept D giải quyết bằng locking FFC ✓

Lớp 2 — OEM module PCB: Các linh kiện trên PCB của module
         (bypass caps, power regulators, passive chips)
         được thiết kế cho thương mại, KHÔNG được thiết kế
         cho 10,000G × 500 lần
         → Concept D KHÔNG giải quyết được ✗
```

**Tính toán lực tác dụng lên module:**

| Thành phần | Khối lượng ước tính | Lực tại 10,000G | So với solder joint rating |
|------------|--------------------|-----------------|-----------------------------|
| OEM sensor module | ~2g | 196 N | Solder joint rating ~30–50N (shear) → ~4–6× overload |
| FFC cable (tự do) | ~0.5g | 49 N | Giải quyết bằng strain relief |
| Bypass cap 0402 trên module | ~0.01g | 0.98 N | OK — component nhỏ |
| Connector trên module PCB | ~0.3g | 29.4 N | Marginal |

**Kết luận kỹ thuật:** Tại 10,000G, bản thân module PCB của OEM camera (2g × 10,000G = 200N) tác động lên 4 điểm gắn M2 và các solder joint bên trong. Module thương mại không có underfill, không có conformal coat chịu shock, PCB layout không tối ưu cho high-G. **Sau 500 lần khai hỏa, solder crack trong module là gần như chắc chắn** (quan sát từ X-ray requirement tại T01).

Strain relief bracket chỉ giải quyết được vấn đề FFC — nhưng module PCB bản thân vẫn gắn bằng 4 vít M2 vào optical bench và vẫn chịu toàn bộ gia tốc 10,000G. Đây là lực trên nền, không phải trên dây.

### 2.3 Ma Trận VDI 2225 Cập Nhật — Trọng Số Mới

**Trọng số kinh tế thay đổi:**

| Tiêu chí kinh tế | Trọng số cũ (60% LC) | **Trọng số mới (40% LC)** | Lý do |
|-----------------|---------------------|--------------------------|-------|
| W1 Giá thành unit | 25 | **20** | Giảm — feasibility quan trọng hơn cost |
| W2 Tính khả thi / NRE | 25 | **35** | Tăng — ưu tiên #1 |
| W3 Local content | 20 | **8** | Giảm mạnh — 40% đã đạt sẵn |
| W4 Thời gian ra FAT | 20 | **27** | Tăng — ưu tiên #2 |
| W5 Procurement risk | 10 | **10** | Không đổi |

**Trọng số kỹ thuật: KHÔNG THAY ĐỔI** — Shock T1 vẫn là tiêu chí #1 (physical law không phụ thuộc vào target LC).

### 2.4 Bảng Điểm So Sánh: 4 Concept

| Concept | Mô tả | T1 Shock | T_tech | W_econ (mới) | Kết luận |
|---------|-------|----------|--------|--------------|---------|
| A | OEM module + ZIF FFC | 1/4 | 0.563 ❌ | 0.840 | LOẠI — T-fail |
| B | Custom COB + rigid PCB | 3/4 | 0.750 ✓ | 0.458 ❌ | LOẠI — W-fail |
| **C** | **OEM chip + carrier PCB + B2B** | **3/4** | **0.788 ✓** | **0.750 ✓** | **CHỌN** |
| D | OEM module + locking FFC + bracket | **1/4** | **0.563** ❌ | 0.860 | LOẠI — T-fail (same as A) |

**Lý do D có T1 = 1 (không phải 2):** Bracket chỉ fix vấn đề FFC. OEM module PCB bản thân vẫn fail shock. D ≡ A về mặt kỹ thuật.

### 2.5 Kết Luận SA-01

> **Concept C vẫn là lựa chọn tối ưu, nhưng lý do thay đổi:**
>
> - **Tại 60% LC:** Concept C được chọn vì kỹ thuật (shock) VÀ local content
> - **Tại 40% LC:** Concept C được chọn **thuần túy vì kỹ thuật** — đây là lựa chọn duy nhất pass T01
>
> Giảm LC target không mở thêm concept nào. Vấn đề là vật lý, không phải chính sách.

---

## 3. Đánh Giá Tổng Thể Sản Phẩm tại 40% LC

### 3.1 Những Gì Có Thể Bỏ Bớt (LC không còn là ràng buộc chặt)

| Hoạt động | Mức ưu tiên trước | Mức ưu tiên mới | Khuyến nghị |
|-----------|------------------|-----------------|-------------|
| M3: Vendor quang học Việt Nam cho lens + beam-splitter | REQUIRED (cho 60%) | OPTIONAL | **DROP** — rủi ro cao, không còn cần thiết |
| M4: FPC local (Bắc Ninh) | REQUIRED | Optional (C-carrier PCB thay thế) | **REPLACE** bằng carrier PCB local (Concept C) |
| M1: SMT assembly + local passives | Already done (VM-4112 local) | Maintain | Giữ nguyên |
| M2: VinES battery cell | Optional | Low priority | Evaluate song song, không block |
| R4 risk mitigation | BLOCKER if missed | Eliminated | Xóa khỏi risk register |

**Tiết kiệm:** Loại bỏ M3 (high-risk optical vendor qualification) giải phóng ~4 tuần công sức và ~$3K NRE tiềm năng.

### 3.2 Vẫn Cần Làm: Các Điểm Không Thay Đổi

| Hạng mục | Lý do giữ nguyên | Ưu tiên |
|----------|-----------------|---------|
| SA-01: Concept C thay FFC bằng B2B carrier PCB | T01 physical requirement | 🔴 CRITICAL |
| EAR export control ruling cho Jetson (VM-2101) | BLOCKER trước khi order | 🔴 CRITICAL |
| OLED supplier qualification (VM-3101) | Single-source risk | 🔴 HIGH |
| Anodize vendor qualification (VM-5301/5501) | MIL-A-8625 Type III | 🟡 MEDIUM |
| B2B connector shock qualification (Hirose DF40C) | Validate T1 score = 3 | 🟡 MEDIUM |

---

## 4. Phân Tích Tính Khả Thi — Top 5 Rủi Ro Hệ Thống

Với feasibility là ưu tiên #1, cần map rủi ro từ góc độ "sản phẩm có chạy được không" trước khi từ góc độ performance:

### Risk 1: EAR Export Control — Jetson Orin Nano [BLOCKER]

| Yếu tố | Chi tiết |
|--------|---------|
| Nguy cơ | BIS/ECCN 3A090 classification → cần license, có thể bị từ chối cho quốc phòng Việt Nam |
| Khả năng xảy ra | MEDIUM — GPU compute modules đang bị kiểm soát chặt sau 2023 |
| Tác động nếu bị block | **Toàn bộ SA-02 cần redesign** — Jetson chiếm 27% BOM material ($40). Hailo-8L/RK3588S là alternatives nhưng cần firmware port SW-FW + driver rewrite. NRE ~$5K–15K, trễ 4–6 tuần. |
| Hành động | **Gửi EAR classification request ngay — TRƯỚC KHI order bất kỳ Jetson nào.** Nếu chờ đến S01 và bị block ở S05 → catastrophic. |
| Feasibility fallback | RK3588S (Rockchip): NPU 6 TOPS, CSI-2 native, chạy YOLOv8-nano. Cần port HAL. L4T → Armbian. |

### Risk 2: OLED Micro-Display Single Source [HIGH]

| Yếu tố | Chi tiết |
|--------|---------|
| Nguy cơ | VM-3101 OLED 0.39" 1024×768 — supplier chưa được xác định trong BOM (TBD) |
| Khả năng xảy ra | HIGH — OLED micro-display thị trường hẹp |
| Tác động | Không có OLED → không có SA-03 → không có product |
| Hành động | Qualify 2 suppliers trước S01: Sony ECX339A (0.5") hoặc eMagin SXGA096 (0.9"). Nếu spec thay đổi → cần lại alignment jig PR-11. |

### Risk 3: Jetson Orin Nano Availability và Lead Time [HIGH]

| Yếu tố | Chi tiết |
|--------|---------|
| Nguy cơ | 10-week lead time + EAR clearance time → actual receipt có thể là 14–16 tuần |
| Tác động | Sprint Plan v1.0 assume Jetson arrive S05 (week 9). Nếu 14–16 tuần → arrive S07–S08 → L2 tests slip 2–4 sprints → **FAT từ S11 lên S13–S14** |
| Hành động | Order ngay khi có EAR clearance. Nếu clearance > 2 tuần → evaluate Jetson Xavier NX devkit làm placeholder cho S01–S06 (drive development), production unit chỉ cần cho S07+ L2 tests. |

### Risk 4: Bore-Sight Stability Sau 500 Rounds [MEDIUM]

| Yếu tố | Chi tiết |
|--------|---------|
| Nguy cơ | Toàn bộ quang học (SA-01 + SA-03) phải duy trì ≤0.2 mrad sau T01 (500 × 10,000G) |
| Tác động | Nếu fail → product không đạt VM-S06 → FAT fail |
| Hành động | Concept C giải quyết SA-01 rigid mount. SA-03 dùng UV-cure adhesive (qualified cho -10°C to +55°C nhưng chưa có shock data). **Cần shock test mẫu PR-11-assembled optical bench trước S09.** |

### Risk 5: Anodize MIL-A-8625 Type III — Local Vendor Chưa Qualified [MEDIUM]

| Yếu tố | Chi tiết |
|--------|---------|
| Nguy cơ | VM-5301 optical bench + VM-5501 Picatinny clamp cần Type III ≥50μm. Vendor TBD. |
| Tác động | Nếu không qualify được → import anodize (Taiwan/China) +$3/unit +2 tuần lead |
| Hành động | Gửi sample part cho 3 local anodizers ngay S01. Nếu fail → switch sang import ngay S02 (không block critical path) |

---

## 5. Fastest Path to FAT — Tối Ưu Hóa Timeline 22 Tuần

### 5.1 Hoạt Động Có Thể Song Song Hóa

| Nhóm | Hoạt động song song với Critical Path | Tiết kiệm (nếu sequential) |
|------|---------------------------------------|---------------------------|
| S01 | Gửi Jetson EAR request + EAR response (8 tuần) song song với SW unit tests | Không tốn thêm thời gian nếu làm ngay |
| S01–S02 | OLED supplier qualification RFQ song song với SA-01 PCB order | 4 tuần |
| S02 | Anodize sample gửi → vendor chạy salt spray (2 tuần) trong khi PCB đang fab | 2 tuần |
| S04–S05 | External lab booking (T08/T10/T12) thực hiện ngay S04, không đợi S06 | 2 tuần |

### 5.2 Hoạt Động Có Thể Bỏ Bớt / Giảm Scope (nội địa hóa 40%)

| Hoạt động | Lý do bỏ/giảm | Tiết kiệm |
|-----------|--------------|-----------|
| M3 optical vendor qualification | 40% LC → không cần | ~3 tuần + $3K NRE |
| M2 VinES battery qualification | 40% LC → không cần ngay | Defer to v2.0 |
| FPC local manufacturer eval (M4) | Replaced by Concept C carrier PCB | Included in S02 PCB order |
| BOM v1.0 LC gap analysis update (R4) | LC already met | 1 tuần tài liệu |

### 5.3 Revised Critical Path

```
Hoạt động song song hóa tối đa:

TUẦN 0 (NGAY):
  ├── [BLOCKER] Gửi EAR classification request cho Jetson Orin Nano
  │   (không cần đợi S01 start — làm ngay hôm nay)
  │   Expected response: 6–10 tuần
  └── [HIGH] OLED supplier RFQ: Sony ECX339A + eMagin

S01 (Tuần 1-2):
  ├── SW Unit Tests: SW-AI + SW-BAL (Track A)
  ├── 3D print review (Track D)
  └── Anodize sample → vendor (Track C — parallel)

S02 (Tuần 3-4):
  ├── SW Unit Tests: SW-COM + FW-HAL stub (Track B)
  ├── PCB order (incl. Concept C carrier PCB) + Mold order [HARD DEADLINE]
  └── OLED supplier eval (Track C — parallel)
      [EAR response expected here — if approved, Jetson order goes out]

S03–S04: Unchanged từ Sprint Plan v1.0

S05: Phụ thuộc vào EAR timing:
  - Best case (EAR 6 tuần): Jetson arrives S05 as planned ✓
  - Likely case (EAR 8 tuần): Jetson arrives S05 week 2 — minor delay
  - Risk case (EAR 10+ tuần): Jetson arrives S06 — SW-FW port slips, FAT → S12

S07–S11: Unchanged từ Sprint Plan v1.0
```

### 5.4 Best-Case vs. Risk-Case Schedule

| Scenario | Condition | FAT Sprint |
|----------|-----------|------------|
| Best case | EAR cleared in 6 weeks, Jetson arrives S05 | **S11 (22 weeks)** |
| Likely case | EAR cleared in 8 weeks, Jetson arrives start of S06 | **S12 (24 weeks)** |
| Risk case | EAR blocked → RK3588S pivot required | **S14–S15 (28–30 weeks)** |

**Hành động duy nhất có thể kéo schedule từ S12 về S11:** Gửi EAR request ngay hôm nay, trước S01.

---

## 6. Quyết Định Cuối Cùng — Giải Pháp Tối Ưu

### 6.1 SA-01 Sensor Module

| Concept | Kỹ thuật | Kinh tế (new) | Kết luận |
|---------|----------|----------------|---------|
| A — OEM + ZIF FFC | 0.563 ❌ | 0.840 | LOẠI — fail T01 về vật lý |
| B — Custom COB | 0.750 | 0.458 ❌ | LOẠI — NRE và schedule quá tốn |
| **C — OEM chip + carrier PCB + B2B** | **0.788 ✓** | **0.750 ✓** | **CHỌN — dominant** |
| D — OEM module + locking FFC | 0.563 ❌ | 0.860 | LOẠI — giống A, bracket không fix được OEM module PCB shock |

**Concept C vẫn là lựa chọn duy nhất hợp lệ, bất kể LC target là 40% hay 60%.**

### 6.2 Tóm Tắt Thay Đổi BOM so với v1.0

| Part | Thay đổi | Δ Cost | Δ LC |
|------|---------|--------|------|
| VM-1200 → VM-1200-CHIP | OEM module → bare chip | -$2 | 0 |
| VM-1201 FFC + ZIF | Xóa | -$2 | -$2 import |
| VM-1205 Carrier PCB (local) | Thêm mới | +$5 | +$5 **LOCAL** |
| VM-1206 + VM-1207 B2B connectors | Thêm mới | +$3 | +$3 import |
| **Net SA-01** | $28 → **~$32** | **+$4/unit** | **+$5 local** |
| **Δ System LC** | | | **+2.5% → ~53.1%** |

Với 40% target: LC đi từ 50.6% → 53.1% — **dư địa thêm 13.1pp so với target**.

### 6.3 M1–M4 Mitigation Paths: Tái Ưu Tiên

| Path | Trước (60% LC) | Sau (40% LC) | Khuyến nghị |
|------|---------------|--------------|-------------|
| M1 — SMT local | Implemented | Surplus | Maintain |
| M2 — Battery local | Required | Optional | Defer đến v2.0 hoặc sau qualification |
| M3 — Optical vendor VN | Required + HIGH RISK | Not needed | **DROP** — tiết kiệm 3 tuần + giảm R4 |
| M4 — FPC local | Required | Replaced by Concept C | Concept C carrier PCB = M4 equivalent |

**Loại M3 là quyết định quan trọng nhất:** M3 là rủi ro cao nhất (cần qualify optical coating vendor — không có vendor đã qualified ở Việt Nam) và không còn cần thiết. Loại M3 trực tiếp cải thiện feasibility và schedule.

---

## 7. Action Plan — Thứ Tự Ưu Tiên Theo Feasibility + Time

| Priority | Action | Timing | Owner |
|----------|--------|--------|-------|
| 🔴 1 | **Gửi EAR export classification request cho Jetson Orin Nano** — làm ngay trước S01 | **Ngay hôm nay** | PM |
| 🔴 2 | **Qualify 2 OLED suppliers** (Sony ECX339A, eMagin) — RFQ ra ngay | Tuần 1 | PM + HW |
| 🔴 3 | **Approve Concept C** cho SA-01 — update BOM v1.1 | S01 | Engineering |
| 🟡 4 | Drop M3 optical vendor qualification — cập nhật BOM risk register R4 | S01 | Engineering |
| 🟡 5 | Gửi anodize sample cho 3 vendors local — song song với S01 | S01 | HW |
| 🟡 6 | Book external test lab cho T08/T10/T12 — không đợi đến S06 | S02 | PM |
| 🟢 7 | Evaluate RK3588S fallback nếu EAR không clear trong 8 tuần | S03 (contingent) | SW-FW |

---

## 8. Kết Luận Ngắn Gọn

**Câu hỏi:** Tối ưu hóa khi LC chỉ 40%, ưu tiên khả thi và thời gian?

**Trả lời:**

1. **Giải pháp tối ưu SA-01 không thay đổi:** Concept C (OEM chip + carrier PCB + B2B connector) là lựa chọn duy nhất pass T01. Đây là yêu cầu vật lý, không phải chính sách LC.

2. **Tác động của việc giảm LC target xuống 40%:** BOM hiện tại đã đạt 50.6% → loại bỏ toàn bộ áp lực M1–M4. Thay đổi quan trọng nhất: DROP M3 (optical vendor qualification — rủi ro cao, không cần thiết).

3. **Blocker thực sự cho thời gian triển khai:** Không phải LC, không phải sensor. Là **EAR export control của Jetson Orin Nano**. Đây là yếu tố duy nhất có thể làm trễ FAT 4–8 tuần ngoài tầm kiểm soát kỹ thuật.

4. **Fastest path to FAT = 22 tuần (S11), với điều kiện:** EAR request gửi đi ngay hôm nay.

---

*V-SMASH-M Optimal Solution Review (40% LC, Feasibility + Time Priority) v1.0 — 2026-03-03*
*Key finding: Concept C remains optimal; LC reduction eliminates M3 risk (DROP); EAR/Jetson is the single critical blocker for schedule.*
