---
created: 2026-03-26
updated: 2026-03-26
project: VN-XUONG-UUV
type: vnv-test
sub-project: MVP-01
status: active
tags: [#type/project, #status/active]
validates: "PD-10 v3 (3 V-blocks, tail overhang) + PD-9 FINAL (head-first)"
tier: physical-validation
design-revision: "S62 — R5 launch-only cradle, alongside recovery via davit"
---

# MVP-01: Thử Nghiệm Launch Cradle (3 V-Blocks + Buoyancy Release)

> **Mục tiêu:** Chứng minh launch cradle (3 V-blocks on rails, tail overhang, no sheet) + buoyancy release hoạt động. Launch-only test — recovery qua davit (PD-11 R5) không test trong MVP-01.
> **Budget:** < 600.000 VND (~$24 USD)
> **Timeline:** 1 tuần chế tạo + 1 ngày test
> **Blocking:** PD-10 v3 confirmation → unblocks Phase 3 cradle detail design
> **Design basis:** PD-9 FINAL (head-first), PD-10 v3 (3 V-blocks), PD-11 (R5 alongside recovery)

---

## 1. Giả Thuyết Cần Kiểm Chứng

| # | Giả thuyết | Pass criteria | Measurement |
|---|-----------|---------------|-------------|
| H1 | 3 V-blocks 60° giữ dummy trên ramp 12° bằng gravity (không clamp) | Dummy KHÔNG trượt ra khỏi blocks khi ramp nghiêng 12° | Visual + video |
| H2 | Khi ngập nước, dummy nổi tách ra khỏi V-blocks tự động | Dummy nổi lên trong < 5 giây sau khi blocks ngập | Stopwatch + video |
| H3 | 3 V-blocks đủ giữ khi lắc ngang ±15° (SS 3 equivalent) | Dummy KHÔNG trượt ngang ra khỏi blocks khi lắc ±15° | Manual rock test + video |
| H4 | Dummy trượt smooth trên 3 V-blocks (no sheet) khi nhả | Dummy slide từ top → water trong < 3 giây, no sticking | Stopwatch + video |
| H5 | Tail overhang: fins + mast KHÔNG chạm bất kỳ bề mặt nào | Zero contact toàn bộ quá trình slide + water entry | Video close-up tail |
| H6 | Head-first confirmed: tail-first bị fins block tại V-blocks | Tail-first: fins va vào blocks → CANNOT launch | Comparison test + video |

---

## 2. Thiết Kế MVP

### 2.1 Dummy UUV (Scale 1:5)

| Thông số | Full-scale | MVP 1:5 | Vật liệu |
|----------|-----------|---------|----------|
| Đường kính | 400 mm | **80 mm** | Ống PVC Φ90 (PN 10) |
| Chiều dài | 5.000 mm | **1.000 mm** | Ống PVC 1m, bịt 2 đầu |
| Trọng lượng | 550 kg | **~3.5-4.0 kg** | PVC + ballast nước/cát |
| Buoyancy | Positive (~30% trên mặt nước) | **Positive** | Điều chỉnh ballast |

**UUV thật (từ ảnh CEO 2026-03-26):**

```
SIDE VIEW:
  mast (475mm)
   |
  ┌┼┐ ← spherical nose D=400
  ║|║ ← body cylinder D=400, L~4000mm (smooth)
  ║|║
  ╠╬╣ ← connector housing + 4 fins cruciform (W=600mm)
  ╚╬╝ ← tail cone
  ◊┼◊ ← 5-blade propeller (~D=350-400mm)
   |
  cable exit

BODY SECTION (smooth): contact với V-blocks OK
TAIL SECTION (fins+prop): PHẢI OVERHANG, ZERO contact
```

**Chế tạo dummy:**

```
Ống PVC Φ90 × 1000mm
├── Body zone (0-800mm): smooth cylinder
│   ├── Bịt mũi: nắp PVC Φ90 tròn (spherical nose)
│   └── Contact zone cho 3 V-blocks
├── Tail zone (800-1000mm): fin + prop simulation
│   ├── 4 × tấm nhựa cứng 50×30mm dán cruciform
│   │   → Effective W tại tail: ~190mm (scale 1:5 của ~950mm)
│   └── Prop stub: không cần mô phỏng (chỉ check clearance)
├── Mast: que tre Φ5mm × 95mm dán trên đỉnh mũi
├── Ballast: nước + cát → nổi ~30% trên mặt nước
└── Chi phí: ~70.000 VND
```

### 2.2 Launch Cradle: 3 V-Blocks on Rails (PD-10 v3)

```
LAYOUT (side view on ramp 12°):

  MŨI (head-first)                                    ĐUÔI
   ↓                                                    ↓
   ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╋╋╋◊
   ▲              ▲              ▲       ↑
  VB-1           VB-2           VB-3   OVERHANG
  200mm          500mm          760mm   240mm tự do
  from nose      from nose      from nose

  ════╡═══════════╡══════════════╡════════════╲ 12°
  rail            rail           rail          ╲ ramp
      ↑ air gap ↑    ↑ air gap ↑   ↑ air gap   ╲___water

  CROSS-SECTION tại V-block:

        mast (clear)
         |
     ┌───○───┐  ← dummy Φ90
     ╲  ╱ ╲  ╱  ← V-block 60°, depth 10mm
  ════╡═════╡═══  ← rail 10×10mm

  CROSS-SECTION tại tail (overhang):

     ── ──┼── ──  ← fin stubs
     │   ○   │
     ── ──┼── ──
          |
     NOTHING BELOW — tự do hoàn toàn
```

| Thông số | Full-scale | MVP 1:5 | Vật liệu |
|----------|-----------|---------|----------|
| Số V-blocks | 3 | **3** | Gỗ ván ép 12mm |
| Góc V | 60° | **60°** | Cắt V-shape |
| Block depth | 50 mm | **10 mm** | — |
| Block width | ~150mm | **30mm** | — |
| V opening | 440mm (D=400+40) | **100mm** (Φ90+10) | — |
| Block positions | 1.0m, 2.5m, 3.8m | **200, 500, 760mm** | — |
| Rails | Al 5083 bar | **Gỗ 10×10mm × 1000mm** | 2 rails song song |
| Tail overhang | ~1000mm | **240mm** | ZERO structure dưới tail |
| UHMWPE sheet | **KHÔNG CÓ** | **KHÔNG CÓ** | — |

**Chế tạo:**

```
3 V-blocks + 2 rails:
├── 2 rail gỗ 10×10mm × 1000mm (chạy dọc ramp, song song, cách nhau ~80mm)
├── 3 V-blocks gỗ ván ép 12mm:
│   ├── Mỗi block: cắt V 60°, 30mm wide × 50mm tall
│   ├── V opening: 100mm tại rim
│   └── Dán/vít cố định lên 2 rails tại 200, 500, 760mm
├── KHÔNG có base board hay sheet bên dưới
├── Rails trượt tự do trên ramp (hoặc cố định — test cả 2)
└── Chi phí: ~50.000 VND
```

### 2.3 Ramp MVP

```
Ván ép 18mm:
├── 1200 × 200mm, sơn chống nước
├── Gắn nghiêng 12° bằng chân đỡ (gỗ tam giác)
├── Đầu dưới nhúng vào nước ~300-400mm
├── Bề mặt: trơn (sơn) — V-blocks trượt trên ramp
├── Toggle clamp simulation: kẹp giấy/dây buộc nhả nhanh
└── Chi phí: ~100.000 VND
```

### 2.4 Bể Test

**Option A (ưu tiên):** Bể bơi / bể nước xưởng — depth ≥ 0.5m, length ≥ 1.5m
**Option B:** Thùng nhựa lớn 200L (~300.000 VND)
**Option C:** Hồ/ao tự nhiên + giá đỡ ramp

---

## 3. BOM (Bill of Materials)

| # | Hạng mục | SL | Đơn giá | Thành tiền | Nguồn |
|---|---------|:--:|--------:|----------:|-------|
| 1 | Ống PVC Φ90 × 1m | 1 | 35.000 | 35.000 | VLXD |
| 2 | Nắp PVC Φ90 | 2 | 8.000 | 16.000 | VLXD |
| 3 | Keo dán PVC | 1 | 25.000 | 25.000 | VLXD |
| 4 | Ván ép chống ẩm 18mm (ramp: 1.2m × 0.2m) | 1 | 50.000 | 50.000 | Gỗ |
| 5 | Ván ép 12mm (3 V-blocks: 0.1m × 0.15m) | 1 | 15.000 | 15.000 | Gỗ |
| 6 | Thanh gỗ 10×10mm × 1m (rails) | 2 | 10.000 | 20.000 | Gỗ |
| 7 | Fin stubs: tấm nhựa cứng 2mm (4 miếng) | 1 | 10.000 | 10.000 | VP phẩm |
| 8 | Antenna mast: que tre Φ5mm × 100mm | 1 | 5.000 | 5.000 | Chợ |
| 9 | Sơn chống nước (lon nhỏ) | 1 | 50.000 | 50.000 | Sơn |
| 10 | Vít, keo, dụng cụ lặt vặt | — | 40.000 | 40.000 | — |
| | **TỔNG (có bể sẵn)** | | | **266.000** (~$11) | |
| 11 | Thùng nhựa 200L (nếu không có bể) | 1 | 300.000 | 300.000 | Nhựa |
| | **TỔNG (cần mua thùng)** | | | **566.000** (~$23) | |

---

## 4. Quy Trình Test

### Test 1: Dummy Buoyancy Calibration (30 phút)

```
1. Đặt dummy PVC (chưa ballast) vào nước → đo % nổi
2. Thêm cát/nước từ từ → target: nổi ~30% trên mặt nước
3. Ghi lại trọng lượng cuối (target: 3.5-4.0 kg)
4. Dán kín nắp → test lại buoyancy
5. Verify: dummy nổi ổn định, không lật (mast lên trên)
6. PASS: positive buoyancy, ổn định, ~30% exposed
```

### Test 2: Gravity Retention — V-Blocks Dry (30 phút)

```
1. Đặt ramp 12° (khô)
2. Đặt dummy head-first trên 3 V-blocks
3. Verify: tail section (fin stubs) OVERHANG, không chạm gì
4. Nghiêng ramp qua lại ±15° (tay lắc) — SS 3 roll simulation
5. PASS: dummy giữ trong 3 V-blocks ở 12° + lắc ±15°
6. FAIL: dummy lăn ra → tăng block depth hoặc giảm góc V
7. Quay video
```

### Test 3: Launch Slide — V-Blocks Only (30 phút)

```
1. Đặt dummy head-first trên 3 V-blocks, top of ramp (khô)
2. Giữ bằng clamp/dây nhả nhanh
3. Nhả → dummy trượt trên 3 V-blocks nhờ gravity 12°
4. Quan sát:
   a. Dummy trượt smooth? Bị kẹt tại block nào không?
   b. Tốc độ slide: < 3 giây from release to water?
   c. Tail overhang: fins KHÔNG chạm bất kỳ bề mặt nào?
5. PASS: smooth slide, < 3 sec, zero tail contact
6. FAIL: sticking → smooth block surface (sáp/xà phòng). Still fail → add rollers
7. Lặp lại 5 lần, quay video mỗi lần
```

### Test 4: Buoyancy Release — Launch into Water (1 giờ)

```
1. Đặt ramp 12° với đầu dưới ngập nước 300-400mm
2. Đặt dummy head-first trên V-blocks ở đầu trên
3. Nhả → dummy + blocks trượt xuống nước
4. Quan sát + bấm giờ:
   a. Blocks ngập → dummy nổi tách khỏi blocks?
   b. Thời gian tách: target < 5 giây
   c. Dummy nổi đúng hướng (mũi trước, mast lên)?
   d. Fin stubs clear toàn bộ quá trình?
5. PASS: tách < 5 sec, dummy nổi stable, zero fin contact
6. FAIL: dummy không tách → adjust ballast/block depth
7. Lặp lại 5 lần, quay video
```

### Test 5: Head-First vs Tail-First Confirmation (30 phút)

```
1. Đặt dummy TAIL-FIRST trên V-blocks (đuôi hướng xuống nước)
   → Fins ở tail zone NẰM TRÊN V-blocks (body section ngắn hơn)
   → Fins chạm V-block? Block tại 760mm = gần tail zone
2. Attempt launch tail-first → quan sát:
   a. Fins scrape/catch trên blocks?
   b. Dummy kẹt vì fins?
   c. Cable exit (nếu mô phỏng) bị gập tại mép ramp?
3. So sánh: head-first (Test 3) vs tail-first (Test 5)
4. EXPECTED: Tail-first fails hoặc significantly worse → PD-9 CONFIRMED
5. Quay video so sánh
```

### Test 6: Geometry Iteration (nếu fail)

```
Nếu Test 2/3/4 fail → điều chỉnh:
├── V-block depth: 10mm → 15mm → 20mm
├── Góc V: 60° → 50° → 45°
├── Block surface: thêm sáp/xà phòng (giảm friction)
├── Block positions: dịch chuyển VB-3 gần mũi hơn (tăng overhang)
└── Re-test sau mỗi iteration (max 3 rounds)
```

---

## 5. Tiêu Chí Đánh Giá

| Metric | Target | Test |
|--------|--------|:----:|
| Gravity retention (dry, 12° + ±15°) | 5/5 passes | T2 |
| Launch slide time | < 3 sec, 5/5 | T3 |
| Buoyancy release time | < 5 sec, 5/5 | T4 |
| Tail overhang clearance | Zero contact, 5/5 | T3+T4 |
| Head-first vs tail-first | Head-first clearly superior | T5 |
| Geometry iterations | ≤ 3 | T6 |

### GO/NO-GO Decision

| Result | Decision |
|--------|----------|
| ALL metrics PASS | **GO** → PD-10 v3 confirmed, proceed Phase 3 |
| Release > 5 sec but < 10 sec | **CONDITIONAL** → adjust ballast/blocks, re-test |
| Retention FAIL ±15° | **REVISE** → increase block depth or add passive lip |
| Slide sticking | **REVISE** → smooth blocks or add UHMWPE liner |
| Buoyancy release FAIL entirely | **STOP** → PD-10 invalid, revert to active mechanism |
| Tail contact detected | **REVISE** → move VB-3 closer to nose, increase overhang |

---

## 6. Deliverables

| # | Deliverable | Format |
|---|------------|--------|
| 1 | Test video (T1-T6) | MP4, phone camera |
| 2 | Data sheet (pass/fail, times, iterations) | Markdown §8 below |
| 3 | GO/NO-GO decision | Append §8 + _meta/decisions.md |
| 4 | Photos of cradle + dummy | JPG |
| 5 | Lessons learned | _meta/learnings.md |
| 6 | Galaxy note candidate (if insight) | Via /galaxy-gate |

---

## 7. Schedule

| Day | Activity | Duration | COD |
|-----|---------|:--------:|:---:|
| D1 | Mua vật liệu | 2h | Core |
| D2 | Chế tạo dummy (PVC + ballast + fins + mast) | 2h | Core |
| D3 | Chế tạo V-blocks + rails + ramp | 2h | Core |
| D4 | T1 (buoyancy) + T2 (retention dry) + T3 (slide) | 2h | Core |
| D5 | T4 (launch water) + T5 (head vs tail) + T6 (iterate) | 3h | Core |
| D6 | Document + video + learnings + GO/NO-GO | 1h | Offload |
| **TOTAL** | | **~12h** | |

**Target completion:** 2026-04-02

---

## 8. Test Results (cập nhật sau khi test)

### T1: Buoyancy Calibration
- Date: ___
- Dummy weight: ___ kg
- % exposed: ___%
- Stability: stable / unstable
- PASS / FAIL

### T2: Gravity Retention (Dry)
- Date: ___
- Results: ___/5 passes
- Block depth used: ___mm
- Notes: ___
- PASS / FAIL

### T3: Launch Slide (V-Blocks Only)
- Date: ___
- Results: ___/5 passes
- Average slide time: ___ sec
- Tail contact: YES / **NO**
- Notes: ___
- PASS / FAIL

### T4: Buoyancy Release (Water)
- Date: ___
- Results: ___/5 passes
- Average release time: ___ sec
- Tail contact during release: YES / **NO**
- Notes: ___
- PASS / FAIL

### T5: Head-First vs Tail-First
- Date: ___
- Head-first slide: smooth / stuck
- Tail-first slide: smooth / stuck / **fins blocked**
- PD-9 confirmed: YES / NO
- Notes: ___

### T6: Iterations (nếu cần)
- Round 1: change ___, result ___
- Round 2: change ___, result ___
- Round 3: change ___, result ___

### GO/NO-GO Decision
- Date: ___
- Decision: **GO** / CONDITIONAL / REVISE / STOP
- Rationale: ___
- Next action: ___

---

*MVP-01 Launch Cradle Test v3 | VN-XUONG-UUV VnV | PD-10 v3 + PD-9 FINAL | COD: Core (physical validation)*
