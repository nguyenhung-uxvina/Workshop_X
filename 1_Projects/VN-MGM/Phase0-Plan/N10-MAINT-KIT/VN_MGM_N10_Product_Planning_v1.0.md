---
created: 2026-04-10
type: product-planning
method: Pahl & Beitz §3.1
version: v1.0
project: VN-MGM
variant: N10-MAINT-KIT
status: approved
base_product: V1-NAVAL-12.7 (300 shipped)
scope: PRODUCT (consumable maintenance kit)
strategic_role: "Recurring revenue from 300 installed base. Highest ROI product. Improves fleet mount condition."
---

# Product Planning — VN-MGM N10-MAINT-KIT

> **Đóng gói spare parts từ V1 BOM thành annual/semi-annual kit.**
> **300 deployed × $200-400/yr = $60-120K/yr recurring. NRE ~$1-2K.**

---

## 1. Stimulus

| Source | Classification |
|---|---|
| **Market** | 300 V1 deployed, không có chương trình bảo trì chính thức. Đơn vị tự mua grease, tự tìm bu-lông. Chất lượng bảo trì không đều → bearing kẹt, coating bong, pin mòn. |
| **Company** | Highest ROI: $1-2K NRE → $60-120K/yr recurring. Razor-blade model. Mỗi mount = 1 kit/năm hoặc 2 kits/năm × 10+ years. |

---

## 2. Product Definition — 2 Variants

### N10-A: Kit 12 Tháng (Full Year)

**Target:** Đồn DK1, căn cứ cố định, tàu lớn (kho rộng, supply quarterly+).

```
N10-A — MAINT-KIT 12 THÁNG — 1 hộp, ≤5 kg
├── CONSUMABLES (thay thế)
│   ├── Marine grease (lithium EP2, marine grade) — 500g tube × 2
│   ├── SS316 bolt set (M10, M12, M16 × 4 each, with washers + nyloc nuts) — 1 bộ
│   ├── Split pins (3mm, 4mm × 10 each) — 1 bộ
│   ├── PTFE bushings (traverse + elevation wear surfaces) — 4 pcs
│   ├── Zinc sacrificial anode set (deck interface) — 2 pcs
│   ├── Weapon cradle pin set (hardened steel, 2 pins + 2 R-clips) — 1 bộ
│   └── Touch-up paint (marine epoxy, 200ml, color-matched V1) — 1 lon
│
├── INSPECTION TOOLS
│   ├── Wear gauge card (go/no-go for bushing wear, pin diameter) — 1 laminated
│   ├── Torque reference card (bolt torques, grease points diagram) — 1 laminated
│   └── Coating thickness gauge (pull-off type, disposable) — 2 pcs
│
├── CLEANING
│   ├── Corrosion inhibitor spray (WD-40 marine equivalent) — 1 can 200ml
│   ├── Cleaning cloth (lint-free, marine grade) — 5 pcs
│   └── Wire brush (stainless bristle, for bolt threads) — 1 pc
│
├── DOCUMENTATION
│   ├── Maintenance checklist card (Vietnamese, laminated, 12-point inspection)
│   ├── "Trước / Sau" photo comparison card (good vs bad condition examples)
│   └── Maintenance log sheet (12 months, 1 row per month, carbon copy)
│
└── PACKAGING
    ├── Waterproof plastic case (stackable, labeled "N10-A VN-MGM MAINT-KIT 12T")
    └── Desiccant pack × 2 (moisture protection during storage)
```

**BOM cost:** $40-80 | **Sell price:** $200-400 | **Margin:** 75-80%

### N10-B: Kit 6 Tháng (Half Year)

**Target:** Tàu tuần tra nhỏ (kho hẹp, supply mỗi 6 tháng), tàu hoạt động cường độ cao.

```
N10-B — MAINT-KIT 6 THÁNG — 1 hộp, ≤3 kg
├── CONSUMABLES
│   ├── Marine grease — 500g tube × 1
│   ├── SS316 bolt set (M10, M12, M16 × 2 each) — 1 bộ (half of N10-A)
│   ├── Split pins (3mm, 4mm × 5 each) — 1 bộ
│   ├── PTFE bushings — 2 pcs (az OR el, alternate each 6 months)
│   ├── Zinc anode — 1 pc
│   └── Touch-up paint — 100ml
│
├── INSPECTION TOOLS
│   ├── Wear gauge card — 1 (same as N10-A, reusable)
│   └── Torque reference card — 1 (same, reusable)
│
├── CLEANING
│   ├── Corrosion inhibitor spray — 1 can 100ml
│   └── Cleaning cloth — 3 pcs
│
├── DOCUMENTATION
│   ├── Maintenance checklist card (6-month, 8-point inspection)
│   └── Maintenance log sheet (6 months)
│
└── PACKAGING
    ├── Waterproof zip bag (labeled "N10-B VN-MGM MAINT-KIT 6T")
    └── Desiccant pack × 1
```

**BOM cost:** $20-40 | **Sell price:** $100-200 | **Margin:** 75-80%

### Comparison

| Aspect | N10-A (12 tháng) | N10-B (6 tháng) |
|---|---|---|
| Weight | ≤5 kg | ≤3 kg |
| Size | Plastic case ~300×200×150mm | Zip bag ~250×150×100mm |
| Grease | 2 tubes | 1 tube |
| Bolts | Full set (4 each size) | Half set (2 each) |
| Bushings | 4 (all surfaces) | 2 (alternate rotation) |
| Anodes | 2 | 1 |
| Inspection tools | Full set + coating gauge | Gauge card only (reuse from A) |
| BOM | $40-80 | $20-40 |
| Price | $200-400 | $100-200 |
| Target | DK1, căn cứ, tàu lớn | Tàu tuần tra, tàu nhỏ |

---

## 3. The 12-Point Maintenance Checklist (Core IP)

**Đây là giá trị chính của kit — không phải spare parts mà là QUY TRÌNH.**

```
╔════════════════════════════════════════════════════════════════╗
║     BẢO TRÌ ĐỊNH KỲ — VN-MGM V1-NAVAL-12.7                   ║
║     □ 6 tháng (N10-B)  □ 12 tháng (N10-A)                    ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  1. □ QUAY THỬ 360° — mượt, không kẹt, không tiếng lạ?      ║
║      → Kẹt: tra grease. Vẫn kẹt: thay bushing (PTFE từ kit) ║
║                                                                ║
║  2. □ NÂNG HẠ -15°→+85° — mượt, tự khóa ở mọi góc?          ║
║      → Không tự khóa: kiểm tra worm gear. Mòn: báo WX.      ║
║                                                                ║
║  3. □ LẮC NGANG giá súng — lỏng? Rung? Play >0.5mm?          ║
║      → Play lớn: siết bolt. Dùng wear gauge kiểm tra.        ║
║                                                                ║
║  4. □ PIN GIỮ SÚNG — 2 pin đủ, R-clip nguyên vẹn?            ║
║      → Pin mòn (gauge card): thay từ kit. R-clip gãy: thay.  ║
║                                                                ║
║  5. □ BOLT CHÂN — 4 bolt M16, siết đúng moment (120 Nm)?     ║
║      → Lỏng: siết lại. Gỉ: thay bolt SS316 từ kit.          ║
║                                                                ║
║  6. □ SƠN / COATING — bong? Trầy? Gỉ lộ thép?               ║
║      → Trầy nhỏ: sơn phủ từ kit. Bong lớn >5cm²: báo WX.   ║
║                                                                ║
║  7. □ ANODE KẼM — còn >50% thể tích?                         ║
║      → Mòn <50%: thay từ kit. Hết: NGUY — ăn mòn nhanh.     ║
║                                                                ║
║  8. □ TRA MỠ — 4 điểm (2 az + 2 el), grease marine EP2      ║
║      → Bơm đến khi mỡ mới tràn ra. Lau sạch mỡ thừa.       ║
║                                                                ║
║  ── CHỈ N10-A (12 tháng) ──────────────────────────────────── ║
║                                                                ║
║  9. □ ĐO DÀY COATING — gauge pull-off test, ≥60μm?           ║
║      → <60μm: lên kế hoạch sơn lại (báo WX)                 ║
║                                                                ║
║ 10. □ KIỂM TRA BEARING — quay nhẹ, nghe tiếng ổ bi?          ║
║      → Tiếng lạ: tra thêm grease. Vẫn kêu: báo WX depot.    ║
║                                                                ║
║ 11. □ KIỂM TRA MỐI HÀN — mắt thường, vết nứt?               ║
║      → Nứt: DỪNG SỬ DỤNG. Báo WX ngay. [SAFETY-CRITICAL]    ║
║                                                                ║
║ 12. □ TIẾP ĐẤT — đo điện trở mount↔deck ≤0.1Ω?              ║
║      → >0.1Ω: chà sạch bề mặt tiếp xúc, siết bolt chân.    ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║  Tàu: __________ Người thực hiện: __________ Ngày: ________  ║
║  Mount S/N: __________ Tình trạng: □ TỐT  □ CẦN SỬA  □ BÁO ║
╚════════════════════════════════════════════════════════════════╝
```

**Checklist = core IP:** Không ai bán checklist cho VN Navy mount maintenance. WX OWNS quy trình. Kit mua vì checklist + confidence, không chỉ vì grease + bolt.

---

## 4. Revenue Model

### 4a: Installed Base Growth

| Year | V1 Deployed | + N12 Motorized | Total Mount Base | Kits/yr (50% adoption) |
|---|---|---|---|---|
| 2026 (rem.) | 300 | 0 | 300 | 75 (first push, Q3-Q4) |
| 2027 | 310 | 30 | 340 | 170 |
| 2028 | 320 | 60 | 380 | 190 |
| 2029 | 330 | 90 | 420 | 210 |
| 2030 | 340 | 120 | 460 | 230 |

**Assumption:** 50% adoption after first year (Navy mandates maintenance program after seeing results). Mix: 60% N10-B ($150 avg), 40% N10-A ($300 avg). Weighted avg: **$210/kit.**

### 4b: Revenue Projection

| Year | Kits Sold | Revenue | Cumulative |
|---|---|---|---|
| 2026 (rem.) | 75 | **$16K** | $16K |
| 2027 | 170 | **$36K** | $52K |
| 2028 | 190 | **$40K** | $92K |
| 2029 | 210 | **$44K** | $136K |
| 2030 | 230 | **$48K** | **$184K** |

**Conservative.** If Navy mandates MAINT-KIT as part of mount procurement (bundle with every new V1/V5/N12): adoption → 80-100% → revenue doubles.

### 4c: ROI

| Metric | Value |
|---|---|
| NRE | **$1-2K** (packaging design + checklist + sourcing) |
| Year 1 revenue | $16K |
| Year 1 ROI | **800-1,600%** |
| 5-year revenue | $184K |
| 5-year ROI | **9,200-18,400%** |
| Margin | 75-80% |

**Highest ROI product in entire WX portfolio. Bar none.**

---

## 5. N10 for N12 + V5 (Motorized Maintenance)

When N12/V5 deploy → N10 EXPANDS with motor maintenance items:

### N10-M: Motor Maintenance Add-On Pack ($50-100)

```
N10-M — ADD-ON cho mount có motor (N12 hoặc V5)
├── Motor bearing grease (high-speed, 50g tube) × 1
├── Encoder cleaning cloth (lens-grade) × 2
├── EM clutch contact cleaner spray (50ml) × 1
├── Motor cable connector grease (dielectric, 10g) × 1
├── Controller fuse set (blade fuse, 2× 20A) × 1
├── Motor inspection checklist card (8-point, laminated)
└── Joystick spare button set (speed toggle + E-stop cap) × 1
```

**Sell as add-on:** Customer buys N10-A or N10-B + N10-M. Or bundle as N10-AM / N10-BM.

| Kit Combination | Contents | Price |
|---|---|---|
| N10-A (manual only, 12 months) | V1 mount maintenance | $200-400 |
| N10-B (manual only, 6 months) | V1 mount maintenance (half) | $100-200 |
| N10-AM (motorized, 12 months) | N10-A + N10-M motor add-on | $250-500 |
| N10-BM (motorized, 6 months) | N10-B + N10-M motor add-on | $150-300 |

---

## 6. Development Plan

```
Week 1: BOM FINALIZATION (2 days)
  ✦ Extract all wear parts from V1 production BOM
  ✦ Source: grease, bolts, pins, bushings, anodes, paint, spray
  ✦ Design wear gauge card (go/no-go dimensions from V1 drawings)
  ✦ Write 12-point checklist (CEO reviews — Core)

Week 1: PACKAGING (2 days)
  ✦ Source waterproof case (N10-A) + zip bag (N10-B)
  ✦ Design label (product code, contents list, manufacture date, expiry)
  ✦ Desiccant packs sourcing

Week 2: PILOT KITS (3 days)
  ✦ Assemble 10 pilot kits (5× N10-A + 5× N10-B)
  ✦ Internal QC: every kit inspected, checklist verified
  ✦ Photo documentation of kit contents

Week 2: FIELD TEST (2 days)
  ✦ Give 3 kits to friendly ship tech (existing V1 customer)
  ✦ Ship tech performs maintenance using kit + checklist
  ✦ Feedback: anything missing? anything confusing? anything useless?

Week 3: REVISE + PRODUCTION (3 days)
  ✦ Incorporate feedback
  ✦ First production batch: 50 kits
  ✦ Ready for sale

TOTAL: 3 weeks, $1-2K NRE + $2-4K first batch materials
```

---

## 7. Sales Strategy

### 7a: Initial Push (Q3 2026)

| Action | Target | Expected |
|---|---|---|
| **Bundle with next V1 order** | New V1 customers | 1 free N10-A with every V1 purchase → creates habit |
| **Offer 10-pack discount** | Ship squadrons (5-10 tàu) | 10× N10-B at $150 each = $1,500/squadron |
| **Demo at maintenance visit** | Ships WX visits for warranty/support | Show "trước/sau" — mount kẹt → smooth after kit |

### 7b: Long-Term (2027+)

| Action | Target | Expected |
|---|---|---|
| **Annual subscription** | Navy procurement | Fixed PO: $X/year for N kits, delivered quarterly |
| **Mandate via training** | Navy maintenance school | Teach checklist → checklist requires kit → kit = standard |
| **Expand to N12/V5** | Motorized mount users | N10-M add-on → recurring from motor users too |

### 7c: Pricing Strategy

| Volume | N10-A Price | N10-B Price | Discount |
|---|---|---|---|
| 1-9 kits | $400 | $200 | List price |
| 10-29 kits | $350 | $175 | 12.5% |
| 30-49 kits | $300 | $150 | 25% |
| 50+ kits (annual contract) | $250 | $125 | 37.5% |

---

## 8. Risk Assessment

| Risk | P | I | Fallback |
|---|---|---|---|
| Navy says "we can buy grease ourselves" | HIGH | MED | Kit value = CHECKLIST + SYSTEM, not just parts. Demo: mount maintained with kit vs without → show difference in 6 months. |
| Wrong grease/bolt spec in kit | LOW | HIGH | All items = exact V1 BOM part numbers. QC: cross-reference with V1 production BOM before every batch. |
| Kit items expire (grease shelf life) | MED | LOW | Marine grease EP2: 3-5 year shelf life sealed. Label with manufacture date + "use before" date. |
| Customer loses checklist card | LOW | LOW | Laminated = durable. Extra checklist cards available for $2 each. PDF on WX website. |
| Low adoption (customers don't buy) | MED | MED | Bundle FREE with V1 for 1 year → demonstrate value → they'll re-order when mount runs better. |

---

## 9. Gate 0

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4? | **TRL 9** — all items from V1 BOM, proven | ✅ |
| Local content ≥40%? | Grease + paint local, bolts local. Gauge card printed local. ~70% | ✅ |
| Competitive advantage? | **No one sells VN Navy mount maintenance kits.** Zero competition. | ✅ |
| Within WX capacity? | $1-2K NRE. Kit assembly = 30 min/kit manual labor. | ✅ |
| Portfolio alignment? | Recurring revenue from 300 installed. Improves fleet readiness. | ✅ |
| IP/regulatory? | Consumable parts — no restrictions. | ✅ |

**Gate 0: PROCEED**

---

## 10. CEO Decisions Record

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | 2 variants: N10-A (12 tháng) + N10-B (6 tháng) | 2026-04-10 | DK1/căn cứ = 12T, tàu tuần tra = 6T |
| 2 | 12-point checklist = core IP | 2026-04-10 | Kit value = process, not just parts |
| 3 | N10-M motor add-on planned for N12/V5 | 2026-04-10 | Expand kit when motorized mounts deploy |
| 4 | Bundle free N10-A with new V1 orders | 2026-04-10 | Create habit → recurring purchase |

---

*Product Planning v1.0 | VN-MGM N10-MAINT-KIT (2 variants: A=12T, B=6T) | For 300 V1 installed | NRE $1-2K | ROI 9,200%+ | 2026-04-10*
