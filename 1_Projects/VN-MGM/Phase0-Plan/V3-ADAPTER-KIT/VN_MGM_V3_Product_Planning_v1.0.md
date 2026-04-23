---
created: 2026-04-10
type: product-planning
method: Pahl & Beitz §3.1
version: v1.0
project: VN-MGM
variant: V3-ADAPTER-KIT
status: approved
base_product: V1-NAVAL-12.7 (300 shipped, DShK cradle standard)
scope: PRODUCT (weapon adapter accessory kits)
strategic_role: "Cross-sell to 300 V1 customers. 1 mount → multi-weapon. Consumable revenue (pin/cradle wear)."
---

# Product Planning — VN-MGM V3-ADAPTER-KIT (Bộ Chuyển Đổi Vũ Khí)

> **1 mount + N adapter kits = N weapon types. DShK (standard) + 3 adapters (NSV, Type 54, KPVT).**
> **300 V1 customers × 1-2 kits each = 300-600 kits = $300-900K.**

---

## 1. Stimulus

| Source | Classification |
|---|---|
| **Market** | Navy sử dụng 4 loại súng 12.7-14.5mm. Hiện mỗi loại cần mount riêng. V3 cho phép 1 V1/V4/V5 → bất kỳ súng nào trong ≤5 phút. |
| **Company** | Cross-sell cho 300 existing. CNC machining = core competence. Mỗi adapter = $1-3K. Consumable: pin + cradle insert mòn sau ~5,000 rounds → repeat order. |

---

## 2. Product Definition — 4 Weapon Types, 3 Adapter Kits

### 2a: Weapon Specifications

| Weapon | Origin | Caliber | Weight | Receiver Width | Recoil Force | Deployed on V1? |
|---|---|---|---|---|---|---|
| **DShK (ДШК)** | Soviet/VN | 12.7×108mm | 34 kg | 105mm | ~50 kN | ✅ STANDARD (included with V1) |
| **NSV (НСВ)** | Soviet/VN | 12.7×108mm | 25 kg | 82mm | ~45 kN | ❌ Needs adapter |
| **Type 54 (54式)** | Chinese/VN | 12.7×108mm | 39 kg | 110mm | ~50 kN | ❌ Needs adapter |
| **KPVT (КПВТ)** | Soviet/VN | 14.5×114mm | 52 kg | 135mm | ~80 kN | ❌ Needs adapter + recoil upgrade |

### 2b: Kit Contents (per adapter)

```
V3-KIT-[WEAPON] — 1 bộ, ≤5 kg
├── CRADLE INSERT (1×)
│   ├── CNC aluminum cradle insert — fits V1 universal cradle
│   ├── Weapon-specific receiver pocket (machined to weapon width ±0.5mm)
│   ├── Rubber liner strips (protect weapon coating, absorb vibration)
│   └── Engraved: weapon name + serial range compatibility
│
├── RETENTION PINS (1 set)
│   ├── 2× hardened steel pins (weapon-specific diameter + length)
│   ├── 2× R-clips (stainless steel, spring-loaded)
│   └── Pin gauge card (go/no-go for wear check)
│
├── RECOIL PLATE (1×, KPVT only)
│   ├── Reinforced steel recoil plate (upgrades V1 cradle from 50 kN → 80 kN)
│   └── 4× additional M12 bolts (SS316)
│
├── DOCUMENTATION
│   ├── Installation card (Vietnamese, laminated, with photos)
│   ├── Weapon-specific torque specs
│   └── Compatibility matrix (which mounts accept this kit)
│
└── STORAGE
    ├── Canvas roll pouch (fits in weapons locker)
    └── Weapon ID tag (colored, clips to mount when installed: Green=DShK, Blue=NSV, Red=Type54, Yellow=KPVT)
```

### 2c: Three Kits

| Kit ID | Weapon | Key Delta from DShK Standard | BOM | Price | Weight |
|---|---|---|---|---|---|
| **V3-B** | **NSV 12.7mm** | Narrower receiver (82mm vs 105mm). Lighter weapon (25 vs 34 kg). Insert shimmed. | $200-400 | $800-1,500 | 2.5 kg |
| **V3-C** | **Type 54 12.7mm** | Wider receiver (110mm vs 105mm). Heavier (39 vs 34 kg). Insert widened. | $200-400 | $800-1,500 | 2.5 kg |
| **V3-D** | **KPVT 14.5mm** | Much wider (135mm). Much heavier (52 kg). 80 kN recoil → needs RECOIL PLATE upgrade. | $400-700 | $1,500-3,000 | 4.5 kg |

**V3-A (DShK) does NOT exist as a kit — DShK cradle is STANDARD with every V1 mount.**

---

## 3. Critical Design Concept — Universal Cradle

```
V1 MOUNT CRADLE (current — DShK only):
┌──────────────────────────────┐
│  DShK receiver pocket        │  105mm fixed width
│  [====WEAPON====]            │  Pins through fixed holes
│  Pin ●──────────────● Pin    │
└──────────────────────────────┘

V3 UNIVERSAL CRADLE CONCEPT:
┌──────────────────────────────────────┐
│  Universal base (wider than any weapon) │
│  ┌─────────────────────────────┐      │
│  │  REMOVABLE INSERT [V3-B/C/D] │     │  Insert matches weapon width
│  │  [====WEAPON====]            │     │  Pins through insert holes
│  │  Pin ●──────────────● Pin    │     │
│  └─────────────────────────────┘      │
└──────────────────────────────────────┘

INSERT = the adapter. Same base, different insert per weapon.
```

**Design question for CEO:** V1 current cradle = DShK-specific (105mm fixed). Để dùng V3 adapter system, có 2 approach:

| Approach | Description | Impact on V1 |
|---|---|---|
| **A: Widen V1 cradle** | Machine V1 cradle wider (135mm) → inserts shim down to weapon size | ⚠️ Modify existing V1 — but 300 deployed = need field modification |
| **B: Overlay adapter** | V3 adapter CLAMPS OVER V1 existing cradle, adds weapon-specific pocket on top | ✅ No V1 modification — adapter is add-on |
| **C: New production V1 with universal cradle** | Future V1 production = universal 135mm. Existing 300 = use overlay (B). | ✅ Best long-term, B for installed base |

**CEO confirmed: B+C (2026-04-10).** Overlay adapter for 300 existing V1. Universal cradle for new V1 production.

---

## 4. Requirements (V3-Specific)

| ID | Requirement | Value/Limit | D/W | Source |
|---|---|---|---|---|
| V3-01 | Weapon swap time (1 person, standard tools) | ≤5 minutes [SC-V3-1] | D | [USER: trắc thủ] |
| V3-02 | Weapon retention under recoil (12.7mm) | ≥50 kN, zero play after 1,000 rounds [SC-V3-2] | D | [V1 F-01] |
| V3-03 | Weapon retention under recoil (14.5mm KPVT, V3-D only) | ≥80 kN, zero play after 500 rounds | D | [ANALYSIS: KPVT spec] |
| V3-04 | Adapter fits V1, V4, V5, N12 mounts [SC-V3-3] | All 4 mount variants | D | [COMPAT] |
| V3-05 | Overlay adapter — NO modification to V1 existing cradle | Zero drilling, zero welding, zero machining on V1 | D | [SC-N12-4 inherited] |
| V3-06 | Pin wear indicator | Go/no-go gauge card included, replace when pin diameter <Xmm | D | [USER: ship tech] |
| V3-07 | Weapon ID tag visible from 3m | Color-coded tag clips to mount when weapon installed | W | W+ | [USER: chỉ huy tàu] |
| V3-08 | Kit stored in weapons locker | Canvas roll pouch ≤400×150mm (rolled) | W | W | [USER: ship tech] |
| V3-09 | Cradle insert material | Corrosion-resistant, ≥250 MPa yield, marine suitable | D | [OP-04 inherited] |
| V3-10 | Rubber liner — weapon coating protection | Shore A 40-60, ≥2mm thickness, replaceable | W | W+ | [USER: trắc thủ] |
| V3-11 | Pin material | Hardened steel ≥800 MPa, ≥HRC 45, corrosion-resistant | D | [ANALYSIS: recoil shear] |
| V3-12 | Pin life (consumable) | ≥5,000 rounds before replacement (gauge check) | D | [ANALYSIS: wear rate] |
| V3-13 | Recoil plate (V3-D KPVT only) | Steel, ≥4 additional M12 SS316 bolts, upgrades cradle 50→80 kN | D | [ANALYSIS: KPVT recoil] |
| V3-14 | Installation card — laminated, Vietnamese + English, with photos | Step-by-step, weapon-specific | D | [USER: ship tech] |
| V3-15 | Compatible with future motorized mounts | Adapter does NOT interfere with N12 motor kit or V5 motor housing | D | [COMPAT: product line] |
| V3-16 | Unit cost (V3-B or V3-C kit) | ≤$400 BOM | D | [ANALYSIS: margin] |
| V3-17 | Unit cost (V3-D KPVT kit) | ≤$700 BOM | D | [ANALYSIS: margin + recoil plate] |
| V3-18 | Local content | ≥90% (CNC aluminum + steel, all local) | D | [CUSTOMER: Navy] |

---

## 5. Revenue Model

### 5a: Addressable Market

| Kit | Weapon | V1 Customers Using This Weapon | Estimated Qty [L2-CEO] |
|---|---|---|---|
| V3-B (NSV) | NSV 12.7mm | ~40% of Navy units | ~120 potential |
| V3-C (Type 54) | Type 54 12.7mm | ~25% of Navy/Border | ~75 potential |
| V3-D (KPVT) | KPVT 14.5mm | ~15% (tàu lớn, BTR) | ~45 potential |
| **Total addressable** | | | **~240 kits** |

### 5b: Revenue Projection

| Scenario | Conversion | Units Y1 | Revenue Y1 | Units 5yr | Revenue 5yr |
|---|---|---|---|---|---|
| Conservative (15%) | 36 kits | 36 | $50K | 80 | **$110K** |
| Base (25%) | 60 kits | 60 | $84K | 130 | **$182K** |
| Optimistic (40%) | 96 kits | 96 | $134K | 180 | **$250K** |

**Plus consumable repeat:** Pins wear out after ~5,000 rounds → pin replacement set ($50-100) every 1-2 years per kit.

### 5c: ROI

| Metric | Value |
|---|---|
| NRE | **$8K** (3 CNC programs + 3 prototype kits + weapon fitment testing) |
| Year 1 revenue (base) | $84K |
| Year 1 ROI | **950%** |
| 5-year revenue (base) | $182K |
| Margin | **55-67%** |

---

## 6. Development Plan

```
Week 1: WEAPON MEASUREMENT (3 days)
  ✦ Measure DShK, NSV, Type 54, KPVT receiver dimensions
  ✦ Need access to each weapon type (coordinate with military unit)
  ✦ Document: width, pin locations, mounting surfaces, CG position
  Gate: Dimensions recorded for all 4 weapons

Week 2: CNC DESIGN + PROTOTYPE (5 days)
  ✦ Design 3 overlay cradle inserts (V3-B, V3-C, V3-D) in CAD
  ✦ Design universal overlay base (clamps over V1 existing cradle)
  ✦ Design recoil plate (V3-D only)
  ✦ CNC machine 1 prototype each (3 inserts + 1 overlay base + 1 recoil plate)
  ✦ Machine pin sets (3 types)
  Gate: 3 prototype kits ready

Week 3: FIT TEST + LIVE FIRE (5 days)
  ✦ Fit test: each prototype on V1 mount + each weapon
  ✦ Check: play, alignment, pin engagement, clearances
  ✦ Live fire: 100 rounds per weapon type
  ✦ Measure: pin wear, cradle deflection, weapon retention
  ✦ Trắc thủ feedback: swap time, ease of use
  Gate: All 3 kits fit, 100-round test pass, swap ≤5 min

Week 4: ITERATE + FIRST BATCH (5 days)
  ✦ Incorporate fit test feedback
  ✦ Production batch: 20 kits (8× V3-B + 6× V3-C + 6× V3-D)
  ✦ Documentation: laminated install cards with photos from fit test
  ✦ Canvas pouches sourced and assembled

TOTAL: 4 weeks, $8K NRE + $6K first batch materials
```

**Key dependency:** Weapon access. CEO must coordinate with military unit for NSV, Type 54, KPVT measurement + fit test + live fire. Without weapon access → project stalls.

---

## 7. Compatibility Matrix

| Adapter Kit | V1-NAVAL | V4-TRIPOD | V5-MOTORIZED | N12 (V1+kit) | Future mounts |
|---|---|---|---|---|---|
| **V3-B (NSV)** | ✅ | ✅ | ✅ | ✅ | ✅ (if universal cradle) |
| **V3-C (Type 54)** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **V3-D (KPVT)** | ✅ (+recoil plate) | ⚠️ (tripod may flex at 80 kN) | ✅ | ✅ (+recoil plate) | ✅ |

**V3-D on V4-TRIPOD:** 14.5mm KPVT recoil (80 kN) on lightweight tripod → CEO decision: allow or restrict to pedestal/motorized only?

---

## 8. Risk Assessment

| Risk | P | I | Fallback |
|---|---|---|---|
| **Weapon access denied/delayed** | MED | HIGH | Start with V3-B (NSV) — most common, easiest to access. Add V3-C, V3-D when weapons available. |
| **Overlay adapter adds height → sight line changes** | MED | MED | Overlay ≤20mm additional height. Iron sight re-zero ≤30 seconds. Document in installation card. |
| **Pin wear faster than expected** | MED | LOW | Pin gauge card catches early. Sell replacement pin set ($50-100) as consumable. |
| **V1 cradle shape varies across 300 units** | MED | MED | Overlay base has adjustable clamp (slot holes). Test on ≥3 V1 revisions. |
| **KPVT 80 kN damages V1 structure** | LOW | HIGH | V3-D recoil plate distributes load. FEA check before live fire. V3-D = ONLY for V1/V5 pedestal, NOT V4 tripod. |

---

## 9. Sales Strategy

| Action | Channel | Target |
|---|---|---|
| **Bundle with V1 orders** | Direct | New V1 customer → offer V3-B or V3-C at 20% discount with mount |
| **"Multi-weapon capability" demo** | Field demo | Show trắc thủ: swap DShK → NSV in ≤5 min on same mount |
| **Unit-level kit** | Direct | Commander has multiple weapon types → buy 2-3 adapter kits |
| **Consumable pin replacement** | Recurring | After 5,000 rounds → sell pin set ($50-100). Automatic reorder. |

---

## 10. Gate 0

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4? | CNC cradle = TRL 9 (WX core). Overlay concept = TRL 3 (new). | ✅ (prototype resolves) |
| Local content ≥40%? | CNC aluminum + steel all local = ~90% | ✅ |
| Competitive advantage? | No one sells "weapon adapter kit" for VN mounts | ✅ UNIQUE |
| Within WX capacity? | $8K NRE, 4 weeks. CNC = existing capability. | ✅ |
| Portfolio alignment? | Cross-sell to 300 V1, compatible with V4/V5/N12 | ✅ |
| IP/regulatory? | Standard mechanical accessory. No restrictions. | ✅ |

**Gate 0: PROCEED**

---

## 11. CEO Decisions Record

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | 4 weapon types: DShK (standard), NSV, Type 54, KPVT | 2026-04-10 | CEO confirmed "đủ" |
| 2 | Approach B+C: overlay for 300 existing, universal cradle for new production | 2026-04-10 | No modification to 300 deployed V1 |
| 3 | V3-D (KPVT) restricted to pedestal/motorized mounts only | 2026-04-10 | 80 kN too much for tripod |
| 4 | Weapon access = CEO coordinates with military | 2026-04-10 | Blocking dependency |

---

*Product Planning v1.0 | VN-MGM V3-ADAPTER-KIT (3 kits: NSV, Type 54, KPVT) | For 300 V1+ installed | NRE $8K | 2026-04-10*