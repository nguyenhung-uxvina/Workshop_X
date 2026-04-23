---
created: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio
version: v1.0
project: VN-MGM
status: approved
scope: PORTFOLIO
lead_product: V1-NAVAL-12.7 (manual pedestal mount, $5-8K)
variants: 5 (NAVAL-12.7, SIM-CRADLE, ADAPTER-KIT, TRIPOD, MOTORIZED)
variant_sequence: "V1→V2→V3→V4→V5"
export: "2028+ (after V1 naval reference)"
platform_reuse: "≥60% HW shared (base, bearing, structure), 90%+ manufacturing shared"
design_paradigm: "FORCE-CENTERED (recoil + aiming under corrosion)"
---

# Portfolio Planning — VN-MGM Weapon Mount/Gimbal Platform

> **Design paradigm: FORCE-CENTERED** — Absorb 50 kN cyclic recoil while maintaining smooth aiming under marine corrosion.

---

## 1. Portfolio Overview

```
Price ($K)
   18 ┤                                              ● V5-MOTORIZED
      │
   10 ┤
    8 ┤  ● V1-NAVAL-12.7
    6 ┤                          ● V4-TRIPOD
    4 ┤          ● V2-SIM-CRADLE
    3 ┤                  ● V3-ADAPTER-KIT
      │
    0 ├──────────────────────────────────────────────────────
      PEDESTAL     TRAINING    ACCESSORY   PORTABLE    MOTORIZED
      (naval)      (sim)       (kit)       (land)      (pre-RCWS)
```

### All 5 Products

| # | ID | Name | BOM | Price | Margin | Type | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **NAVAL-12.7** | $2.5-4K | $5-8K | 50-55% | Manual pedestal, naval | VN Navy, coast guard, DK1 platforms |
| 2 | **V2** | **SIM-CRADLE** | $1-2K | $2-4K | 50-55% | Training weapon cradle | VN-CUAV-SIM WEAPON-MOD, training centers |
| 3 | **V3** | **ADAPTER-KIT** | $0.5-1K | $1-3K | 55-67% | Weapon-specific adapter set | Any V1/V4/V5 user, consumable/accessory |
| 4 | **V4** | **TRIPOD** | $1.5-3K | $3-6K | 50-55% | Portable tripod mount | Army, border guard, vehicle-mounted |
| 5 | **V5** | **MOTORIZED** | $5-9K | $10-18K | 50-55% | Servo-driven pedestal | Pre-RCWS, remote operation, future AI FC |

---

## 2. Variant Comparison Matrix

| Attribute | V1 NAVAL | V2 SIM | V3 ADAPTER | V4 TRIPOD | V5 MOTOR |
|---|---|---|---|---|---|
| **Weapon class** | 12.7-14.5mm | Sim mockup | Adapts V1/V4/V5 | 12.7mm | 12.7-23mm |
| **Azimuth** | 360° continuous | 360° continuous | N/A (kit) | ±120° | 360° continuous |
| **Elevation** | -15° to +85° | -10° to +60° | N/A | -10° to +70° | -15° to +85° |
| **Recoil capacity** | 50 kN | 0 (sim only) | N/A | 50 kN | 80 kN |
| **Drive** | Manual | Manual + encoders | N/A | Manual | Servo motor |
| **Weight** | ≤75 kg | ≤30 kg | 5-15 kg per kit | ≤45 kg | ≤100 kg |
| **Mounting** | Deck bolts (STANAG) | Floor bolts/frame | Bolts to mount | Ground stakes/sandbags | Deck bolts (STANAG) |
| **Corrosion** | Marine grade (salt fog) | Indoor only | Match parent mount | Tropical outdoor | Marine grade |
| **Power** | None (manual) | 12V (encoders) | None | None | 24-48V DC |
| **Sensors** | None | Encoders (az/el) | None | None | Encoders + IMU option |
| **IP rating** | IP65 | IP20 (indoor) | Match parent | IP54 | IP65 |
| **Setup (2 persons)** | ≤15 min | ≤10 min | ≤5 min | ≤10 min | ≤20 min |
| **Local content** | ≥80% | ≥90% | ≥90% | ≥80% | ≥70% |
| **Price** | $5-8K | $2-4K | $1-3K | $3-6K | $10-18K |

---

## 3. Điểm Khác Biệt

### V1-NAVAL-12.7: "Giá Súng Hải Quân" (Naval Gun Mount)
**Unique:** Standard 12.7mm naval pedestal mount. Manual operation. DShK/NSV/Type 54 compatible. STANAG 4568 deck interface. 1,000 hrs salt fog. Designed from archived VN-MGM-001A (Phase 1 complete). 60% cheaper than imports.
**Role:** Credibility builder. Establishes WX as weapon mount manufacturer. Foundation for all variants.
**WX advantage:** Full CNC local manufacturing. 80%+ local content. $6.5K vs $15-20K import.

### V2-SIM-CRADLE: "Giá Mô Phỏng" (Simulation Weapon Cradle)
**Unique:** No live fire capability. Mounts sim weapon mockup with rotary encoders for position tracking. Feeds azimuth/elevation data to VN-CUAV-SIM. Recoil motor mounting points for haptic feedback. Indoor use only — no marine coating needed. Lightest variant (≤30 kg).
**Delta from V1:** Remove recoil structure (-$1K), remove marine coating (-$0.5K), add encoders (+$0.3K), simplify structure.
**Role:** Direct CUAV-SIM integration. Every CUAV-SIM FIXED/FULL installation = 1× V2-SIM-CRADLE.

### V3-ADAPTER-KIT: "Bộ Chuyển Đổi Vũ Khí" (Weapon Adapter Kit)
**Unique:** Not a mount — a set of weapon-specific adapter plates + cradle inserts. One V1/V4/V5 base → multiple weapons via adapter swap. Kit includes: adapter plate, recoil cradle insert, barrel clamp, pin set, torque specs. Consumable/accessory revenue.
**Kits available:**
- Kit-A: DShK 12.7mm (standard, included with V1)
- Kit-B: NSV 12.7mm
- Kit-C: Type 54 12.7mm
- Kit-D: KPVT 14.5mm
- Kit-E: ZU-23 twin 23mm (V5-MOTORIZED only, requires upgraded recoil)
**Revenue model:** Razor-blade. Mount once, buy adapters for each weapon type.

### V4-TRIPOD: "Giá Ba Chân" (Portable Tripod Mount)
**Unique:** Lightweight portable mount for land deployment. Folding tripod legs. Ground stakes or sandbag anchoring. Army, border guard, vehicle roof-mounted. Same weapon interface as V1 (adapters shared). No marine coating (tropical outdoor only).
**Delta from V1:** Tripod base instead of pedestal (-$0.5K), no marine coating (-$0.5K), lighter structure (-$0.3K). Reduced azimuth (±120° vs 360°).

### V5-MOTORIZED: "Giá Điện" (Motorized Mount)
**Unique:** Servo-driven azimuth and elevation. Remote control via cable or radio. Pre-RCWS capability — add optics + fire control = full RCWS. 24-48V DC power. Encoder feedback. Optional IMU for stabilization (moving platform). Supports up to 23mm with upgraded recoil structure.
**Delta from V1:** Add servo motors (+$2K), motor driver (+$0.5K), encoders (+$0.3K), power supply (+$0.2K), control interface (+$0.5K). Heavier structure for larger weapons (+$1K).
**Long-term:** V5 + VN-AICC (fire control) + optics = indigenous RCWS system. Foundation for future IRONMESH weapon integration.

---

## 4. Common Platform — Shared Components

| Component | V1 NAVAL | V2 SIM | V3 ADAPTER | V4 TRIPOD | V5 MOTOR | Shared |
|---|---|---|---|---|---|---|
| Slewing ring bearing | ✓ | ✓ (smaller) | ✗ | ✓ (smaller) | ✓ | **4/5** |
| Weapon cradle interface | ✓ | ✓ (sim) | ✓ (adapts to) | ✓ | ✓ | **5/5 — 100%** |
| Elevation mechanism | ✓ | ✓ (simplified) | ✗ | ✓ | ✓ (motorized) | **4/5** |
| Recoil structure | ✓ | ✗ | ✗ | ✓ | ✓ (upgraded) | **3/5** |
| Marine coating | ✓ | ✗ | match parent | ✗ | ✓ | **2/5** |
| CNC main body | ✓ | mod | ✗ | mod | ✓ (larger) | **3/5 base** |
| Fastener set (SS316) | ✓ | ✗ | ✓ | ✓ | ✓ | **4/5** |

### Reuse Summary

| Variant | HW Shared | Manufacturing Shared | NRE Savings |
|---|---|---|---|
| V1-NAVAL (lead) | reference | reference | — |
| V2-SIM-CRADLE | 55% | 80% | 50% |
| V3-ADAPTER-KIT | 30% (interface only) | 90% (CNC) | 60% |
| V4-TRIPOD | 60% | 85% | 55% |
| V5-MOTORIZED | 65% | 75% | 40% |

**Key insight:** Manufacturing process reuse (CNC programs, tooling, jigs, assembly procedures) is higher than HW reuse. Same shop, same operators, same machines — different geometry.

---

## 5. Lộ Trình Phát Triển (Roadmap)

```
2026        Q4  │ 2027 Q1   Q2   Q3   Q4  │ 2028
────────────────┼──────────────────────────┼───────
V1-NAVAL-12.7   │                          │
  Archive→Proto █│ Test ██ ●              │
  V2-SIM-CRADLE │                          │
  Simplify █ ●  │                          │
                │ V3-ADAPTER-KIT           │
                │ 5 kits █ ●              │
                │    V4-TRIPOD             │
                │    Redesign █ Test █ ●   │
                │         V5-MOTORIZED     │
                │         Servo ███ Test ██│●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D Cost [L5] |
|---|---|---|---|---|---|
| 1 | V1-NAVAL-12.7 | CEO bandwidth | 10-14 wk | Q4 2026-Q1 2027 | $45K [L4-archive] |
| 2 | V2-SIM-CRADLE | V1 weapon interface proven | 4-6 wk | Q1 2027 | $12K |
| 3 | V3-ADAPTER-KIT | V1 delivered + weapon access | 3-4 wk per kit | Q2 2027 | $8K (all 5 kits) |
| 4 | V4-TRIPOD | V1 proven + Army demand | 6-8 wk | Q3 2027 | $20K |
| 5 | V5-MOTORIZED | V1+V4 proven + servo R&D | 12-16 wk | Q4 2027-Q1 2028 | $50K |
| | **Total NRE** | | | | **$135K** |

**Export:** 2028+ (after V1 naval reference + V4 land reference).

---

## 6. Phạm Vi Ứng Dụng

### By Military Unit

| Unit | Weapon | Mount Variant | Qty/yr [L5] |
|---|---|---|---|
| VN Navy surface ships | DShK 12.7mm | V1-NAVAL | 10-20 |
| VN Navy DK1 platforms | DShK 12.7mm | V1-NAVAL | 5-10 |
| Coast guard | NSV 12.7mm | V1-NAVAL + Kit-B | 5-10 |
| Training centers | Sim mockup | V2-SIM-CRADLE | 10-20 (= CUAV-SIM units) |
| Army units | DShK 12.7mm | V4-TRIPOD | 10-30 |
| Border guard | Type 54 12.7mm | V4-TRIPOD + Kit-C | 5-10 |
| Naval CIWS (future) | KPVT 14.5mm / ZU-23 | V5-MOTORIZED + Kit-D/E | 3-5 |

### By WX Ecosystem

| WX Product | VN-MGM Role | Variant |
|---|---|---|
| **VN-CUAV-SIM** | WEAPON-MOD weapon cradle | V2-SIM-CRADLE (direct integration) |
| **VN-CUAV-SIM** | FULL system weapon station | V2-SIM-CRADLE + recoil motor |
| **BB-01 LOMAH** | Target panel mounting hardware | V3-ADAPTER concept (mount accessories) |
| **VN-AICC** | Fire control terminal for V5-MOTORIZED | V5 + AICC-TAC = pre-RCWS |
| **VN-AST-MSL-001** | Deck hardware commonality (same ships) | V1 on same vessels as AST |
| **Future RCWS** | V5-MOTORIZED + optics + AICC fire control | Full indigenous RCWS system |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection

| Year | V1 NAVAL | V2 SIM | V3 KITS | V4 TRIPOD | V5 MOTOR | Total |
|---|---|---|---|---|---|---|
| 2027 | $60K (10) | $20K (8) | $10K (10) | — | — | **$90K** |
| 2028 | $90K (15) | $40K (15) | $25K (15) | $30K (8) | — | **$185K** |
| 2029 | $90K (15) | $50K (20) | $30K (20) | $60K (15) | $30K (2) | **$260K** |
| 2030 | $75K (12) | $40K (15) | $35K (25) | $75K (20) | $75K (5) | **$300K** |
| 2031 | $60K (10) | $30K (10) | $30K (20) | $60K (15) | $120K (8) | **$300K** |
| **5yr** | **$375K** | **$180K** | **$130K** | **$225K** | **$225K** | **$1,135K** |

### Revenue Mix

| Category | Products | 5yr Revenue | % |
|---|---|---|---|
| Naval (V1) | NAVAL-12.7 | $375K | 33% |
| Training (V2) | SIM-CRADLE | $180K | 16% |
| Accessories (V3) | ADAPTER-KIT | $130K | 11% |
| Land (V4) | TRIPOD | $225K | 20% |
| Motorized (V5) | MOTORIZED | $225K | 20% |

**Balanced portfolio** — no single variant dominates. V3 (adapter kits) is razor-blade revenue.

### Comparison with Imports

| WX Product | WX Price | Import Price | Savings |
|---|---|---|---|
| V1-NAVAL vs imported pedestal | $5-8K | $15-20K | **60%** [L4] |
| V4-TRIPOD vs imported tripod | $3-6K | $8-12K | **50-60%** [L4] |
| V5-MOTORIZED vs imported RCWS base | $10-18K | $30-50K | **60-65%** [L4] |

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-NAVAL (lead) | $45K | $45K | — |
| V2-SIM-CRADLE | $20K | $10K | 50% |
| V3-ADAPTER-KIT | $15K | $6K | 60% |
| V4-TRIPOD | $30K | $14K | 53% |
| V5-MOTORIZED | $60K | $36K | 40% |
| **Total** | **$170K** | **$111K** | **35% avg** |

### Platform ROI

- V1 NRE = $45K
- Platform savings (V2-V5) = $59K
- **Platform ROI: 131%**
- Revenue ROI: $45K NRE → $1.14M revenue = **2,422%** [L5]

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| V1-NAVAL | Recoil fatigue failure at 50K cycles | MED | HIGH | 1.5× safety factor. Test at military range. Finite element analysis before prototype. |
| V2-SIM-CRADLE | CUAV-SIM timeline delays → no customer | MED | MED | Sell to other training programs independently. V2 works with any sim. |
| V3-ADAPTER-KIT | Limited weapon access for fitment testing | MED | LOW | Coordinate with military for weapon loan during development. |
| V4-TRIPOD | Army market access (new customer segment) | MED | MED | Leverage Navy relationships for introduction. Army training centers = CUAV-SIM customers. |
| V5-MOTORIZED | Servo integration = new domain for WX | HIGH | MED | Partner with servo/motor supplier for integration. Start with open-loop control, add feedback later. |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Tier 3 = perpetually deprioritized | HIGH | V2-SIM-CRADLE demand driven by CUAV-SIM sales (Tier 1). Mount becomes pull not push. |
| 12.7mm weapons are Soviet-era, declining | MED | Adapter system (V3) supports any weapon. V5-MOTORIZED handles larger weapons. |
| Competition from Chinese mounts at lower price | MED | WX advantage = ecosystem integration (CUAV-SIM + BB-01 + AICC). Not competing on mount alone. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|---|---|---|---|
| D1 | V1 = NAVAL-12.7 (not SIM-CRADLE) | Credibility-first | 2026-04-09 | Proven archive design builds manufacturing reputation |
| D2 | 5-variant portfolio | NAVAL→SIM→ADAPTER→TRIPOD→MOTORIZED | 2026-04-09 | Naval credibility → training synergy → land expansion → motorized future |
| D3 | Sequence confirmed | V1→V2→V3→V4→V5 | 2026-04-09 | Dependencies follow naturally |
| D4 | Archive VN-MGM-001A as V1 foundation | Use existing Phase 1 | 2026-04-09 | 6 months of design work already done |

### Pending Decisions

| # | Decision | Trigger | Timeline |
|---|---|---|---|
| P1 | Slewing ring bearing supplier selection | V1 prototype start | When V1 starts |
| P2 | Recoil absorption approach (rigid vs damped) | FEA results | Phase 2 |
| P3 | V5 servo/motor selection | V5 development start | After V4 proven |
| P4 | RCWS integration scope (V5 + AICC + optics) | V5 proven + military interest | 2028+ |

---

## Cross-Product Integration Map

```
                         VN-MGM (5 variants)
                               │
          ┌───────────┬────────┼────────┬──────────┐
          ▼           ▼        ▼        ▼          ▼
    VN-CUAV-SIM    VN Navy    Army    VN-AICC    Future
    WEAPON-MOD     Ships      Land    Fire Ctrl   RCWS
    V2-SIM-CRADLE  V1-NAVAL   V4-TRI  V5+AICC    V5+optics
                   + V3-KITS  + V3    = pre-RCWS  +AICC+FC
```

**Strategic trajectory:** V1 mount → V5 motorized → V5 + AICC fire control → full indigenous RCWS. This 3-step path transforms WX from mount manufacturer to RCWS provider over 3-5 years.

---

*Portfolio Planning v1.0 | VN-MGM Weapon Mount/Gimbal Platform | Pahl & Beitz §3.1 | 2026-04-09*
