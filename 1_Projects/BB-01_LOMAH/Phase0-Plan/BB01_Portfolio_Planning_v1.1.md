---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio
version: v1.1
project: BB-01_LOMAH
status: approved
scope: PORTFOLIO
lead_product: BB-01 STANDARD (Contact Piezo Clip-on, 4-target)
variants: 8 (V2-MINI, V3-RANGE, V4-PRO, V5-NAVAL, V6-CORTEX-RANGE, V7-BRIDGE, N6-NODE, N7-SENSOR-KIT)
variant_sequence: "V2 → V5 → V4 → V3 → V6 → N7 → N6 → V7"
export: "After V5 NAVAL"
platform_reuse: "≥70% SW shared, ≥50% HW shared"
note: "V7-BRIDGE owned by VN-CUAV-SIM product line (HYBRID-BRIDGE), not BB-01. Listed here for completeness."
changelog: "v1.1 — Musk+Hwang --ex expansion. +2 products (NODE, SENSOR-KIT). 5 candidates rejected (APP-ONLY infeasible, SPORT/AIRSOFT/SHM/CHRONO off-strategy). Reframed: Impact Sensing Node Platform."
---

# Portfolio Planning — BB-01 LOMAH Acoustic Scoring Platform

> Từ "hệ thống LOMAH" đến **"Real-time Impact Event Detection & Wireless Reporting Platform"**
> Musk First Principles reframe: Piezo + Charge Amp + ADC + MCU + LoRa = **"Impact Sensing Node"** — Layer 0 platform.

---

## 1. Portfolio Overview

```
Price ($K)
   50 ┤                                              ● V6-CORTEX-RANGE
      │
   25 ┤                              ● V3-RANGE
      │
   12 ┤                    ● V5-NAVAL
   10 ┤                              ● V7-BRIDGE (CUAV-SIM owns)
    8 ┤                         ● V4-PRO
    5 ┤          ● V1-STANDARD
      │
    1 ┤  ● V2-MINI
    0 ├──────────────────────────────────────────────────────────
      LOW              MEDIUM              HIGH        VERY HIGH
                         Complexity
```

| ID | Tên | Mô tả | Price | Segment |
|----|-----|-------|-------|---------|
| **V1** | **STANDARD** | 4 piezo contact, steel plate, hit/miss, LoRa, IP66+67 | $3-5K | Navy/Army ranges (lead) |
| **V2** | **MINI** | 1 sensor, 1 target, BLE, simplest | $0.8-1.2K | Infantry, small units, export entry |
| **V5** | **NAVAL** | Marine IP68, salt spray, for towed/floating targets at sea | $8-12K | Naval gunnery exercise |
| **V4** | **PRO** | Hit/miss + **XY impact location** (TDOA 4-corner array/target) | $6-8K/target | Sniper, marksmanship |
| **V3** | **RANGE** | 8-16 targets, central hub, scoreboard, instructor console | $15-25K | Full military ranges |
| **V6** | **CORTEX-RANGE** | Full range management: BB-01 HW + scoreboard + scheduling + analytics | $30-50K | Range modernization, turnkey |
| **V7** | **BRIDGE** | Data bridge BB-01 → VN-CUAV-SIM scoring. Shared gunner profile. | $5-10K | Units with both products |
| **N7** | **SENSOR-KIT** | Replacement piezo + battery consumable pack (recurring revenue) | $50-80/kit | All BB-01 users |
| **N6** | **NODE** | Generic wireless impact sensor node (OEM/integrator platform module) | $200-400/node | OEM, system integrators |

---

## 2. Variant Comparison Matrix

| Attribute | V1 STANDARD | V2 MINI | V5 NAVAL | V4 PRO | V3 RANGE | V6 CORTEX | V7 BRIDGE |
|-----------|-------------|---------|----------|--------|----------|-----------|-----------|
| **Targets** | 4 | 1 | 4 | 1-4 | 8-16 | 8-16 | N/A (SW) |
| **Detection** | Hit/miss | Hit/miss | Hit/miss | **Hit/miss + XY** | Hit/miss | Hit/miss | N/A |
| **Sensor** | Piezo contact | Piezo contact | Piezo contact (marine) | 4-corner TDOA array | Piezo contact | Piezo contact | N/A |
| **Wireless** | LoRa 433MHz | BLE | LoRa 433MHz | LoRa 433MHz | LoRa mesh | LoRa mesh | Ethernet/WiFi |
| **Range (wireless)** | ≥400m | ≤100m | ≥500m | ≥400m | ≥500m | ≥500m | LAN |
| **IP rating** | IP66+IP67 | IP65 | **IP68** + salt spray | IP66+IP67 | IP66+IP67 | IP66+IP67 | Indoor |
| **Battery** | ≥8h (LiFePO4) | ≥12h (Li-ion) | ≥8h (marine LiFePO4) | ≥8h | ≥8h | Mains powered | N/A |
| **Display** | Portable receiver | Phone app (BLE) | Portable + ship bridge | Precision display | **Scoreboard** + console | Full dashboard | CUAV-SIM AAR |
| **Scoring** | Hit/miss count | Hit/miss count | Hit/miss + sea state log | **Scoring rings** | Match mode + stats | Full analytics | Sim↔live correlation |
| **Housing** | Hammond 1550 | Compact ABS | **Marine grade SS316** | Hammond 1550 | Rack mount hub | Server + displays | Gateway box |
| **Target type** | Steel plate | Any rigid | Towed/floating target | Steel plate | Mixed (plate, popup) | Mixed | N/A |
| **Price** | $3-5K | $0.8-1.2K | $8-12K | $6-8K/tgt | $15-25K | $30-50K | $5-10K |
| **Local content** | ≥80% | ≥85% | ≥70% | ≥75% | ≥75% | ≥70% | ≥90% (SW) |
| **Status** | Phase 1 active | Concept | Concept | Concept | Concept | Concept | CUAV-SIM owns |

---

## 3. Điểm Khác Biệt — Per Variant

### V2-MINI: "BB-01 Bỏ Túi"
**Unique:** Simplest possible — 1 target, 1 sensor, BLE to phone app. Giá $800-1,200 = accessible cho mọi đơn vị. No special receiver needed — smartphone is the display. Ideal entry product for export and small infantry units.
**Delta from STANDARD:** Remove: 3 sensors, LoRa module, Hammond housing. Replace: BLE module ($5 vs LoRa $15), compact ABS enclosure ($10 vs Hammond $87). Phone app replaces receiver.
**Critical assumption:** [L5] BLE range (≤100m) sufficient for infantry range. Smartphone adoption OK for military use.

### V5-NAVAL: "BB-01 Hàng Hải"
**Unique:** Marine-rated for towed/floating targets at sea. IP68 + MIL-STD-810H salt fog. Designed for integration with VN-AST-MSL-001 towed target platform. Logs sea state at time of impact (IMU + wave estimation). Ship bridge display option.
**Delta from STANDARD:** Upgrade: SS316 housing (vs aluminum), marine connectors, conformal coat PCB, marine antenna. Add: IMU for sea state logging, ship bridge display protocol. LoRa range extended ≥500m (open sea LOS).
**Cross-pollination:** VN-AST-MSL-001 towed target = physical platform, BB-01 NAVAL = scoring system ON that platform. Together = complete naval gunnery exercise system.
**Critical assumption:** [L5] Piezo contact detection works through marine vibration/wave noise. Need sea trial validation.

### V4-PRO: "BB-01 Chính Xác"
**Unique:** Hit/miss + **XY impact location** via TDOA 4-corner sensor array per target panel. Scoring rings (10-ring bullseye), precision grouping analysis, MOA calculation. NOT just hit/miss — full marksmanship assessment.
**Delta from STANDARD:** Add: 4 sensors per target (vs 1), TDOA processing (GCC-PHAT), XY calculation algorithm, precision display with scoring rings. Same signal chain, 4× sensors per target.
**Note:** Does NOT break STANDARD's "hit/miss ONLY" constraint. V4 is a separate product with expanded capability. STANDARD stays simple.
**Critical assumption:** [L5] TDOA resolution sufficient for scoring rings on steel plate (≤10mm accuracy needed). GCC-PHAT research (G2) suggests 2MHz sampling + H-layout achieves this.

### V3-RANGE: "BB-01 Trường Bắn"
**Unique:** Full firing range system. 8-16 targets, central LoRa mesh hub, real-time LED scoreboard, instructor console (PC software), match mode (competition timing, lane assignment, scoring). Turnkey range upgrade.
**Delta from STANDARD:** Scale: 2-4× STANDARD units + mesh networking hub + scoreboard display + instructor SW. Hub aggregates all target data, manages lanes, runs match protocols.
**Critical assumption:** [L5] LoRa mesh handles 16 targets without collision/latency issues. May need TDMA scheduling.

### N7-SENSOR-KIT: "Bộ Thay Thế Cảm Biến" [Hwang: Consumption Chain]
**Unique:** Consumable pack: 1× replacement piezo sensor (pre-wired, pre-calibrated) + 1× replacement LiFePO4 battery + O-ring seal kit + cleaning cloth. Every BB-01 unit in the field needs replacement parts after 500-1000 impact cycles (piezo fatigue) or 2-3 years (battery degradation).
**Revenue logic:** Razor-blade model. Low margin per kit ($50-80) but guaranteed recurring revenue from installed base. Year 5 with 50+ units deployed → $4-5K/yr consumable stream.
**HW:** 100% BB-01 components (same piezo, same battery, same O-ring). **NRE:** ~$2K (packaging design + calibration jig).

### N6-NODE: "Nút Cảm Biến Va Chạm" [Musk: Platform — Layer 0 as Product]
**Unique:** Layer 0 core mechanism sold as standalone module. Piezo + Charge Amp + ADC + MCU + LoRa in a single weatherproof unit. NO scoring logic, NO display, NO application SW — just "detect impact, report wirelessly." OEM customers and system integrators build their own applications on top.
**Musk insight:** Giống Tesla bán battery cell cho OEM trước khi bán xe. BB-01 NODE = "impact sensing cell." Others build products on WX platform.
**Target:** Defense system integrators (need impact sensing for their own products), R&D labs, university research.
**HW:** 100% V1-STANDARD electronics (minus housing customization). **SW:** Firmware core only (no scoring app). **NRE:** $5K (reference design + documentation + integration guide).
**Critical assumption:** [L5] OEM/integrator market exists for generic impact sensing nodes. Needs validation.

### V6-CORTEX-RANGE: "Hệ Thống Quản Lý Trường Bắn"
**Unique:** Complete range management platform. BB-01 RANGE hardware + range scheduling SW + shooter records database + performance analytics + maintenance tracking + reporting for command. The "ERP of shooting ranges."
**Delta from RANGE:** Add: server + database, scheduling module, records management, analytics dashboard, reporting engine, user management. Hardware = V3-RANGE. Software = major NRE.
**Critical assumption:** [L5] Military range management currently manual (paper logbooks). Digital transformation appetite exists. Need stakeholder validation.

### V7-BRIDGE: "BB-01 ↔ CUAV-SIM"
**Owned by VN-CUAV-SIM product line** (HYBRID-BRIDGE). Listed here for cross-reference.
**Function:** API bridge between BB-01 scoring data and VN-CUAV-SIM AAR system. Shared gunner profile: sim accuracy vs live-fire accuracy. AI detects training transfer coefficient.
**BB-01 side:** JSON export of hit/miss/timestamp/target-ID/session per LoRa receiver. Standard data format.
**Action:** BB-01 firmware must include JSON export API from Phase 3 onward. Design for BRIDGE compatibility even if V7 comes later.

---

## 4. Common Platform — Shared Components

| Component | V1 STD | V2 MINI | V5 NAVAL | V4 PRO | V3 RANGE | V6 CORTEX | V7 BRIDGE |
|-----------|--------|---------|----------|--------|----------|-----------|-----------|
| Piezo PZT-5H sensor | ✓ | = | = (marine coat) | = (×4/target) | = | = | — |
| Charge amp circuit | ✓ | = (simplified) | = | = | = | = | — |
| BPF + Gain + Clamp | ✓ | = | = | = | = | = | — |
| ADC (ADS8688) | ✓ | simpler (internal) | = | = (simultaneous) | = | = | — |
| MCU (STM32H7) | ✓ | STM32L4 (lower power) | = | = | = + hub MCU | = | — |
| LoRa 433MHz | ✓ | — (BLE instead) | = (extended) | = | mesh | mesh | — |
| Firmware core | ✓ | subset | = + sea state | = + TDOA | = + mesh | = | API export |
| Housing (Hammond) | ✓ | ABS compact | SS316 marine | = | = + rack hub | = + server | gateway |
| Battery (LiFePO4) | ✓ | Li-ion small | = (marine) | = | = | mains | — |
| Display/receiver | portable | phone app | + ship bridge | precision screen | scoreboard | full dashboard | CUAV-SIM |

### Reuse Summary

| Variant | HW Shared | SW Shared | NRE Savings |
|---------|-----------|-----------|-------------|
| V2-MINI | 60% | 70% | 55% |
| V5-NAVAL | 75% | 80% | 50% |
| V4-PRO | 70% | 60% (TDOA new) | 40% |
| V3-RANGE | 80% (×4 units + hub) | 70% (+ mesh + match SW) | 45% |
| V6-CORTEX | 80% (= V3 HW) | 50% (major SW platform) | 30% |
| V7-BRIDGE | 0% (CUAV-SIM owns HW) | 20% (JSON API only) | N/A |

| N7-SENSOR-KIT | 100% (same parts) | N/A | 95% (packaging only) |
| N6-NODE | 90% (core electronics) | 80% (firmware core) | 70% |

**Platform reuse target ≥70% SW / ≥50% HW: V2, V5, V3, N7, N6 achieve. V4 SW below (60%) due to TDOA — accepted. V6 SW below (50%) due to management platform — accepted.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1 → V2 → V5 → V4 → V3 → V6 → N7 → N6 → V7 (CUAV-SIM)

```
2026    Q2   Q3   Q4  │ 2027  Q1   Q2   Q3   Q4  │ 2028  Q1   Q2
──────────────────────┼───────────────────────────┼──────────────
V1-STANDARD           │                           │
  Ph1 ██ Ph2 ██ Ph3 ██│ Ph4 █ Proto █ Delivery ●  │
                      │    ↓ Platform proven      │
                      │ V2-MINI                   │
                      │    Delta ██ Proto █ ●      │
                      │         V5-NAVAL           │
                      │         Marine eng ███ Proto█ Sea trial ●
                      │                   V4-PRO   │
                      │                   TDOA dev ████ ●
                      │                           │ V3-RANGE
                      │                           │ Mesh+hub ████ ●
                      │                           │      V6-CORTEX
                      │                           │      SW platform ████
```

| # | Variant | Start Trigger | Duration | Delivery | Notes |
|---|---------|--------------|----------|----------|-------|
| 1 | **V1-STANDARD** | Active (Phase 1) | 10-12 months | Q1 2027 | Lead. Deadline 2026-09-05. |
| 2 | **V2-MINI** | V1 firmware proven | 2-3 months | Q2 2027 | Simplest delta. BLE + phone app. |
| 3 | **V5-NAVAL** | V1 prototype + VN-AST contact | 4-5 months | Q3 2027 | Marine engineering. Sea trial needed. |
| 4 | **V4-PRO** | V1 validated + TDOA algorithm bench-tested | 4-6 months | Q4 2027 | GCC-PHAT implementation. New capability. |
| 5 | **V3-RANGE** | V1 at volume + V2 validated | 4-5 months | Q1 2028 | Mesh networking + hub + scoreboard. |
| 6 | **V6-CORTEX-RANGE** | V3 RANGE proven | 6-8 months | Q3 2028 | Major SW platform. Consider SW developer hire. |
| 7 | **N7-SENSOR-KIT** | V1 units deployed (installed base >10) | 1 month | Q2 2028 | Packaging + calibration jig. Near-zero NRE. |
| 8 | **N6-NODE** | V1 electronics design mature | 2-3 months | Q3 2028 | Reference design + integration guide. |
| 9 | **V7-BRIDGE** | BB-01 + CUAV-SIM both deployed | 3-4 months | 2028-2029 | Owned by CUAV-SIM team. BB-01 provides API. |

### Export Timeline
- **V2-MINI** = natural export entry ($800-1,200, simple, no ITAR)
- **Export starts after V5-NAVAL** per CEO decision
- Target: ASEAN military ranges, African armies (price-sensitive, basic needs)

---

## 6. Phạm Vi Ứng Dụng

### By Military Unit

| Unit Type | V1 STD | V2 MINI | V5 NAVAL | V4 PRO | V3 RANGE | V6 CORTEX |
|-----------|--------|---------|----------|--------|----------|-----------|
| Navy range (shore-based) | ★★★ | ★ | ★ | ★★ | ★★★ | ★★★ |
| Navy gunnery (ship-to-target) | ★ | ✗ | ★★★ | ✗ | ✗ | ★★ |
| Army infantry range | ★★ | ★★★ | ✗ | ★★ | ★★★ | ★★★ |
| Army sniper training | ✗ | ✗ | ✗ | ★★★ | ★★ | ★★ |
| Police/border guard | ★ | ★★★ | ✗ | ★★ | ★★ | ★ |
| Competition shooting | ✗ | ★ | ✗ | ★★★ | ★★★ | ★★ |
| Export (ASEAN/Africa) | ★★ | ★★★ | ★ | ★★ | ★★ | ★ |

### By Training Scenario

| Scenario | Best Variants |
|----------|--------------|
| Basic qualification (hit/miss) | V1, V2, V3 |
| Precision assessment (grouping, MOA) | V4-PRO |
| Naval gunnery exercise at sea | V5-NAVAL (on VN-AST-MSL-001) |
| Range match / competition | V3-RANGE (match mode) |
| Unit readiness reporting | V6-CORTEX (analytics) |
| Sim↔live correlation | V7-BRIDGE (with CUAV-SIM) |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection (2027-2031)

| Year | V1 STD | V2 MINI | V5 NAVAL | V4 PRO | V3 RANGE | V6 CORTEX | Total |
|------|--------|---------|----------|--------|----------|-----------|-------|
| 2027 | $20K (5) | $6K (5) | — | — | — | — | **$26K** |
| 2028 | $20K (5) | $12K (10) | $20K (2) | $14K (2) | — | — | **$66K** |
| 2029 | $16K (4) | $12K (10) | $30K (3) | $28K (4) | $40K (2) | — | **$126K** |
| 2030 | $12K (3) | $15K (15) | $20K (2) | $21K (3) | $40K (2) | $40K (1) | **$148K** |
| 2031 | $8K (2) | $15K (15) | $20K (2) | $21K (3) | $60K (3) | $80K (2) | **$204K** |
| **Subtotal (v1.0)** | **$76K** | **$60K** | **$90K** | **$84K** | **$140K** | **$120K** | **$570K** |

**v1.1 additions (N7-SENSOR-KIT + N6-NODE):**

| Year | N7 SENSOR-KIT | N6 NODE | Subtotal new |
|------|--------------|---------|-------------|
| 2027 | $1K (15 kits) | — | $1K |
| 2028 | $3K (40 kits) | $2K (5 nodes) | $5K |
| 2029 | $4K (60 kits) | $4K (10 nodes) | $8K |
| 2030 | $5K (70 kits) | $6K (15 nodes) | $11K |
| 2031 | $6K (80 kits) | $8K (20 nodes) | $14K |
| **Total new** | **$19K** | **$20K** | **$39K** |

**Grand total 5-year: $570K + $39K = $609K** (v1.0→v1.1: +$39K, +7%)

**Note:** BB-01 is lower revenue per unit ($1-50K range) than VN-XUONG-UUV or VN-CUAV-SIM. Value is in VOLUME (55+ V2-MINI units), ECOSYSTEM role (CORTEX-RANGE + BRIDGE create lock-in), and RECURRING revenue (SENSOR-KIT consumable stream).

### Revenue Streams per Variant

| Stream | V1 | V2 | V5 | V4 | V3 | V6 |
|--------|----|----|----|----|----|----|
| Unit sale | $4K | $1K | $10K | $7K | $20K | $40K |
| Maintenance (annual 5%) | $200 | $50 | $500 | $350 | $1K | $2K |
| Spare parts (sensors, battery) | $100/yr | $50/yr | $200/yr | $150/yr | $300/yr | $500/yr |
| V6 SW license (annual) | — | — | — | — | — | $5K/yr |
| Sensor replacement packs | $50/set | $30/set | $80/set | $100/set | $50/set | $50/set |

### Recurring Revenue (Year 5 steady-state)

| Stream | Annual Est. |
|--------|-----------|
| Maintenance contracts | ~$15K/yr |
| Sensor replacement packs (consumable) | ~$8K/yr |
| V6 CORTEX SW licenses | ~$10K/yr |
| Spare parts | ~$5K/yr |
| **Total recurring** | **~$38K/yr** |

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---------|---------------|-------------|-----------|
| V1-STANDARD (lead) | $15K | $15K (reference) | — |
| V2-MINI | $10K | $5K | 50% |
| V5-NAVAL | $20K | $10K | 50% |
| V4-PRO | $25K | $15K (TDOA new) | 40% |
| V3-RANGE | $20K | $10K | 50% |
| V6-CORTEX-RANGE | $35K | $22K (SW platform) | 37% |
| N7-SENSOR-KIT | $3K | $2K | 33% |
| N6-NODE | $15K | $5K | 67% |
| **Total** | **$143K** | **$84K** | **41% avg** |

**Platform investment ROI:**
- V1 NRE = $15K
- Platform savings across 7 variants = $59K
- **ROI: 393%** (v1.0 was 320% → +73pp from 2 additions)

### Engineer-Hours per Variant

| Variant | Design | Build | Test | Total | Calendar (25h/wk) |
|---------|--------|-------|------|-------|-------------------|
| V1-STANDARD | 300h | 100h | 100h | 500h | ~5 months |
| V2-MINI | 80h | 30h | 40h | 150h | ~1.5 months |
| V5-NAVAL | 150h | 80h | 120h | 350h | ~3.5 months |
| V4-PRO | 200h | 80h | 120h | 400h | ~4 months |
| V3-RANGE | 150h | 80h | 100h | 330h | ~3.5 months |
| V6-CORTEX | 300h | 50h | 100h | 450h | ~4.5 months |
| **Total pipeline** | | | | **2,180h** | **~22 months** |

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---------|-------------|---|---|---------|
| V1-STANDARD | Piezo contact detection sensitivity on steel plate | MED | HIGH | Adjust threshold + add mechanical coupling optimization |
| V2-MINI | BLE range insufficient for some ranges | LOW | LOW | Offer LoRa upgrade module (+$100) |
| V5-NAVAL | Piezo detection through wave/vibration noise at sea | HIGH | HIGH | High-pass filter tuning; accept calm sea only (SS 1-2) |
| V4-PRO | TDOA XY accuracy insufficient for scoring rings | MED | MED | Reduce to zone-scoring (quadrant) instead of point scoring |
| V3-RANGE | LoRa mesh collision with 16 nodes | MED | MED | TDMA scheduling; reduce to 12 max; or switch to WiFi mesh |
| V6-CORTEX | Military digital transformation appetite low | HIGH | MED | Sell V3-RANGE HW first; offer CORTEX SW as upgrade later |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| V1 piezo detection fails → all variants delayed | CRITICAL | Bench test ASAP (Phase 2). If piezo fails → pivot to accelerometer. |
| BB-01 is lower-revenue product line ($570K/5yr vs $10.9M XUONG, $4.1M CUAV) | MEDIUM | BB-01 value = ecosystem lock-in + BRIDGE synergy, not standalone revenue. |
| Solo engineer split across 3 product lines | HIGH | BB-01 Tier 2 = lower priority than Tier 1 (XUONG, CUAV). Sequential. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|----------|-----------|------|-----------|
| D1 | All 6 variants included | V2, V3, V4, V5, V6, V7 | 2026-04-09 | Full range coverage from $800→$50K |
| D2 | Variant sequence | V2→V5→V4→V3→V6→V7 | 2026-04-09 | V2 lowest NRE. V5 cross-product. V4 new capability. |
| D3 | V4-PRO XY location | Separate variant (not breaking STANDARD constraint) | 2026-04-09 | STANDARD stays simple hit/miss. PRO = premium product. |
| D4 | V5-NAVAL × VN-AST-MSL-001 | Explore cross-product | 2026-04-09 | Natural fit: target platform + scoring system |
| D5 | V7-BRIDGE ownership | VN-CUAV-SIM product line (HYBRID-BRIDGE) | 2026-04-09 | Sim team owns integration. BB-01 provides JSON API. |
| D6 | Export timing | After V5-NAVAL | 2026-04-09 | V2-MINI = natural export entry. After naval proves marine grade. |

### v1.1 Decisions (--ex expansion, 2026-04-09)

| # | Decision | CEO Choice | Date | Framework |
|---|----------|-----------|------|-----------|
| D7 | N6-NODE included | Yes | 2026-04-09 | Musk Platform (Layer 0 as product) |
| D8 | N7-SENSOR-KIT included | Yes | 2026-04-09 | Hwang Consumption Chain (razor-blade) |
| D9 | Sequence update | V2→V5→V4→V3→V6→N7→N6→V7 | 2026-04-09 | N7 before N6 (consumable before OEM) |
| D10 | APP-ONLY rejected | Infeasible (phone mic insufficient) | 2026-04-09 | Musk 10x — good idea, physics doesn't work |
| D11 | SPORT/AIRSOFT rejected | Off-brand for WX | 2026-04-09 | CEO: not serious enough for WX |
| D12 | SHM rejected | Too far from core business | 2026-04-09 | CEO: quá xa |
| D13 | CHRONO rejected | Not included | 2026-04-09 | Low priority |

### Pending Decisions

| # | Decision | Trigger | Timeline |
|---|---------|---------|----------|
| P1 | Piezo bench test pass/fail | V1 Phase 2 prototype | 2026 Q3 |
| P2 | V5 sea trial requirements (with VN-AST team) | V1 proven + VN-AST Phase 3 | 2027 Q1 |
| P3 | V4 TDOA accuracy validation | Bench test on steel plate | After V1 |
| P4 | V6 CORTEX SW developer hire? | V3 RANGE proven | Before V6 start |
| P5 | Export market selection | After V5 | 2027+ |

---

## Cross-Product Integration Map

```
BB-01 LOMAH                    VN-CUAV-SIM                    VN-AST-MSL-001
(Acoustic Scoring)             (Training Simulation)          (Towed Target)
     │                              │                              │
     │ V7-BRIDGE (JSON API)         │ HYBRID-BRIDGE (AAR link)     │
     ├─────────────────────────────►│◄─────────────────────────────┤
     │                              │                              │
     │ V5-NAVAL (scoring at sea)    │                              │
     ├──────────────────────────────┼─────────────────────────────►│
     │  BB-01 sensors ON             │                  VN-AST target│
     │  VN-AST platform              │                  platform     │
     │                              │                              │
     └── Gunner profile ──────────►│ Unified assessment            │
         (live fire data)           │ (sim + live fire)             │
                                    │ (training transfer coeff.)   │
```

**Three WX products form a closed loop:**
1. **VN-CUAV-SIM** trains gunners virtually (simulation)
2. **BB-01 LOMAH** scores gunners on live fire (measurement)
3. **VN-AST-MSL-001** provides sea targets for naval exercise (physical target)
4. **HYBRID-BRIDGE** connects sim↔live data for continuous assessment

This ecosystem = competitive moat no competitor can replicate (they don't own all 3).

---

## TNKCT Status

| Variant | TNKCT | Reference |
|---------|-------|-----------|
| V1-STANDARD | Pending (at Gate 1) | Phase1-Task/ |
| V2-MINI | Pending | Delta from V1 |
| V5-NAVAL | Pending | Delta from V1 + marine specs |
| V4-PRO | Pending | New (TDOA XY capability) |
| V3-RANGE | Pending | Delta from V1 (scale + hub) |
| V6-CORTEX-RANGE | Pending | New (SW platform) |
| N7-SENSOR-KIT | N/A (consumable, no TNKCT needed) | Product spec sheet only |
| N6-NODE | Pending | New (reference design datasheet) |

---

*Portfolio Planning v1.1 | BB-01 LOMAH Impact Sensing Platform | Pahl & Beitz §3.1 + Musk/Hwang --ex | 2026-04-09*
