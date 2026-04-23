---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio
version: v1.0
project: VN-AICC
status: approved
scope: PORTFOLIO
lead_product: AICC-MAKER (V1, desktop, $99)
variants: 4 (MAKER, PRO, TAC, RACK)
variant_sequence: "V1-MAKER → V2-PRO → V3-TAC → V4-RACK"
export: "2028+"
platform_reuse: "≥70% SW shared, ≥50% HW shared"
strategic_role: "Cross-platform IRONMESH terminal — connective tissue of WX ecosystem"
---

# Portfolio Planning — VN-AICC Human-AI Interface Platform

> AICC = **nút giao** giữa con người và mọi hệ thống IRONMESH. Mỗi sản phẩm WX dùng IRONMESH cần 1 AICC.

---

## 1. Portfolio Overview

```
Price ($)
  899 ┤                                              ● V4-RACK
      │
  499 ┤                              ● V3-TAC
      │
  249 ┤                  ● V2-PRO
      │
   99 ┤  ● V1-MAKER
      │
    0 ├──────────────────────────────────────────────────────
      LOW              MEDIUM              HIGH
      (desktop)        (enterprise)        (military/naval)
                    Ruggedization Level
```

| ID | Tên | BOM | Price | Margin | Target | Form Factor |
|----|-----|-----|-------|--------|--------|-------------|
| **V1** | **MAKER** | $50 | $99 | 50% | Maker, developer, WX internal | Desktop open-frame |
| **V2** | **PRO** | $120 | $249 | 52% | IRONMESH RANGE, enterprise | Desktop enclosed |
| **V3** | **TAC** | $300 | $499 | 40% | Military C2, mobile ops | Ruggedized IP65, MIL-STD |
| **V4** | **RACK** | $400 | $899 | 55% | Ship CIC, data center | 19" rack mount, marine |

**Strategy:** Desktop first (validate SW + UX), then ruggedize for military (Musk serial validation). Same IRONMESH OS across all 4 → operator trains on MAKER, deploys on TAC/RACK.

---

## 2. Variant Comparison Matrix

| Attribute | V1 MAKER | V2 PRO | V3 TAC | V4 RACK |
|-----------|----------|--------|--------|---------|
| **Compute** | SBC + AI accelerator | SBC + AI accelerator | SBC + AI accelerator | SBC + AI accelerator (ECC RAM) |
| **Display** | 1× small LCD | 2× LCD (status + detail) | 1× sunlight-readable | 2× rack-mount LCD |
| **Input** | Buttons + rotary | Buttons + rotary + keypad | MIL-grade buttons + E-stop | Rack panel + E-stop + keyboard |
| **E-stop** | SW button (dev mode) | HW interrupt | HW interrupt (MIL-grade) | HW interrupt (marine-grade) |
| **Enclosure** | Open frame / 3D print | Aluminum desktop | CNC aluminum IP65 + MIL-STD-810H | 19" 3U rack SS316 marine |
| **Power** | USB-C 5V | 12V DC adapter | 12-48V DC (vehicle/field) | 24-48V DC (ship power) |
| **Comms** | WiFi + USB | WiFi + Ethernet | Ethernet + LoRa + serial | Ethernet + serial + fiber option |
| **Temp range** | 0-40°C | 0-45°C | -10 to +55°C | -10 to +55°C |
| **IP rating** | None | IP40 (splash guard) | IP65 | IP65 + salt spray |
| **Certification** | None | CE | MIL-STD-810H, EMC | MIL-STD-810H, EMC, marine class |
| **IRONMESH OS** | Full | Full | Full | Full |
| **Agents supported** | ≥4 | ≥4 | ≥4 | ≥8 |
| **Audit logging** | SD card | SSD + network | Encrypted SSD + network | Redundant SSD + network |
| **OTA updates** | Yes | Yes | Yes (encrypted) | Yes (encrypted + signed) |
| **Weight** | ~300g | ~1.5 kg | ~3 kg | ~5 kg (3U) |
| **Price** | $99 | $249 | $499 | $899 |

---

## 3. Điểm Khác Biệt

### V1-MAKER: "Console Nhà Phát Triển"
**Unique:** Lowest cost entry. Open-frame = hackable. WX internal development + maker community. Validates IRONMESH OS + UX before investing in ruggedized variants. Every WX engineer gets one on desk.
**Role:** Platform validation vehicle. If MAKER works → PRO/TAC/RACK = enclosure + certification deltas.

### V2-PRO: "Console Doanh Nghiệp"
**Unique:** First enclosed product. Desktop form factor for office/range control room. Target: IRONMESH RANGE operator console (BB-01 CORTEX-RANGE, VN-CUAV-SIM instructor station). Professional appearance for customer demos.
**Delta from MAKER:** Aluminum enclosure (+$30), 2× displays (+$25), keypad (+$10), Ethernet (+$5).

### V3-TAC: "Console Chiến Thuật"
**Unique:** Field-deployable. IP65, MIL-STD-810H (shock, vibration, sand, rain). Military C2 applications: tactical operations center, vehicle-mounted, forward observer post. Wide voltage input (12-48V) for vehicle/generator power.
**Delta from PRO:** CNC aluminum IP65 enclosure (+$80), MIL-grade buttons (+$30), wide-input PSU (+$20), LoRa radio (+$15), EMC filtering (+$15), certification ($5K NRE).

### V4-RACK: "Console Hải Quân"
**Unique:** 19" rack mount for ship Combat Information Center (CIC) and data center. Marine-rated (salt spray). Fiber optic option for EMI-heavy shipboard environment. Redundant storage for audit compliance. 8+ agent capacity for fleet-level operations.
**Delta from TAC:** 19" 3U chassis (+$50), SS316 front panel (+$20), fiber interface (+$20), redundant SSD (+$15), ECC RAM (+$10). Marine certification ($8K NRE).

---

## 4. Common Platform — Shared Components

| Component | V1 MAKER | V2 PRO | V3 TAC | V4 RACK | Shared? |
|-----------|----------|--------|--------|---------|---------|
| SBC (compute module) | ✓ | = | = | = (+ ECC RAM) | **4/4** |
| AI accelerator | ✓ | = | = | = | **4/4** |
| IRONMESH OS | ✓ | = | = | = | **4/4 — 100% shared** |
| State machine (dual FSM) | ✓ | = | = | = | **4/4** |
| Audit logging SW | ✓ | = | = (encrypted) | = (redundant) | **4/4 core** |
| Display driver | ✓ | = (2×) | = (sunlight) | = (2× rack) | **4/4 core** |
| Button I/O driver | ✓ | = | = (debounce HW) | = | **4/4 core** |
| Carrier board PCB | ✓ | ✓ (v2 enclosed) | modified (wide input) | modified (rack) | **2 base + 2 delta** |
| E-stop circuit | SW only | HW interrupt | = (MIL) | = (marine) | **3/4 HW** |
| Power supply | USB-C | 12V adapter | wide-input PSU | wide-input PSU | **V3=V4** |

### Reuse Summary

| Variant | HW Shared | SW Shared | NRE Savings |
|---------|-----------|-----------|-------------|
| V1-MAKER (lead) | reference | reference | — |
| V2-PRO | 70% | 95% | 65% |
| V3-TAC | 50% | 90% | 45% |
| V4-RACK | 45% | 90% | 40% |

**Platform reuse: SW ≥90% across all variants (IRONMESH OS = 100% shared). HW varies by enclosure/certification. Target ≥70% SW achieved (90%+). HW target ≥50% achieved for V2 (70%), marginal for V3/V4 (45-50%) due to enclosure differences — accepted.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1 → V2 → V3 → V4

```
2026    Q3   Q4  │ 2027  Q1   Q2   Q3   Q4  │ 2028  Q1   Q2
──────────────┼───────────────────────────┼──────────────
V1-MAKER      │                           │
  CM4 sprint █│ Ph3-4 ██ Proto █ ●        │
              │    ↓ IRONMESH OS proven   │
              │ V2-PRO                    │
              │    Enclosure █ Proto █ ●   │
              │         V3-TAC            │
              │         Ruggedize ███ Cert █ ●
              │                           │ V4-RACK
              │                           │ Marine eng ███ Cert █ ●
```

| # | Variant | Start Trigger | Duration | Delivery | Notes |
|---|---------|--------------|----------|----------|-------|
| 1 | **V1-MAKER** | CM4 latency sprint (next available slot) | 5-7 weeks | Q4 2026 | Circuit breaker first. Validates OS + latency. |
| 2 | **V2-PRO** | V1 OS proven | 3-4 weeks delta | Q1 2027 | Enclosure + 2× display. Smallest delta. |
| 3 | **V3-TAC** | V2 proven + military demand confirmed | 6-8 weeks | Q2-Q3 2027 | Ruggedization + MIL certification NRE. |
| 4 | **V4-RACK** | V3 proven + naval demand confirmed | 6-8 weeks | Q1 2028 | Marine certification + rack form. |

**Export:** 2028+ (after V3-TAC establishes military reference).

---

## 6. Phạm Vi Ứng Dụng

### By WX Product (AICC as IRONMESH terminal)

| WX Product | AICC Variant | Role |
|-----------|-------------|------|
| **BB-01 CORTEX-RANGE (V6)** | V2-PRO | Range management console |
| **VN-CUAV-SIM CORTEX (PA-9)** | V2-PRO / V4-RACK | Multi-node exercise C2 hub |
| **VN-XUONG-UUV IRONMESH** | V3-TAC / V4-RACK | LARS operation console (future autonomous) |
| **VN-AST-MSL-001** | V3-TAC | Target deployment control |
| **IRONMESH RANGE (general)** | V2-PRO | Operator coaching console |
| **WX internal development** | V1-MAKER | Dev/test for all products |

**Key insight:** Every CORTEX/IRONMESH deployment in any WX product = 1+ AICC sold. AICC is **recurring demand driven by the rest of the portfolio.**

### By Customer Segment

| Segment | V1 | V2 | V3 | V4 |
|---------|----|----|----|----|
| WX internal / developers | ★★★ | ★ | ✗ | ✗ |
| Maker / robotics community | ★★★ | ★ | ✗ | ✗ |
| IRONMESH RANGE operators | ★ | ★★★ | ★★ | ★ |
| Military C2 (land) | ✗ | ★ | ★★★ | ★ |
| Military C2 (sea) | ✗ | ✗ | ★★ | ★★★ |
| Defense contractors (OEM) | ★★ | ★★ | ★★★ | ★★ |
| Export (ASEAN military) | ✗ | ★★ | ★★★ | ★★ |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection

**A. Hardware Sales**

| Year | V1 MAKER | V2 PRO | V3 TAC | V4 RACK | Total HW |
|------|----------|--------|--------|---------|----------|
| 2027 | $5K (50) | $5K (20) | — | — | **$10K** |
| 2028 | $5K (50) | $12K (50) | $15K (30) | — | **$32K** |
| 2029 | $3K (30) | $25K (100) | $25K (50) | $9K (10) | **$62K** |
| 2030 | $2K (20) | $25K (100) | $35K (70) | $18K (20) | **$80K** |
| 2031 | $1K (10) | $18K (70) | $25K (50) | $27K (30) | **$71K** |
| **Total HW** | **$16K** | **$85K** | **$100K** | **$54K** | **$255K** |

**B. Recurring Revenue (IRONMESH OS subscription)**

| Year | Installed Base | Avg Sub/Unit | Annual Recurring |
|------|---------------|-------------|-----------------|
| 2027 | 70 units | $500/yr (mostly MAKER) | **$35K** |
| 2028 | 200 units | $1.5K/yr (PRO+TAC mix) | **$300K** |
| 2029 | 390 units | $3K/yr (TAC+RACK growing) | **$1,170K** |
| 2030 | 600 units | $4K/yr | **$2,400K** |
| 2031 | 760 units | $5K/yr | **$3,800K** |
| **Total Recurring** | | | **$7,705K** |

**C. Combined 5-Year Revenue**

| Stream | 5-Year Total |
|--------|-------------|
| Hardware sales | $255K |
| IRONMESH OS subscriptions | $7,705K |
| **Grand total** | **$7,960K** |

**AICC = razor-blade model.** Hardware margin is modest ($255K). Real revenue = IRONMESH OS recurring subscription ($7.7M). Every AICC deployed = $3-10K/yr recurring lock-in.

**Caveat:** Subscription revenue assumes IRONMESH ecosystem matures as planned. If IRONMESH adoption slower → subscription revenue scales down proportionally. Hardware revenue ($255K) is floor. [L5-ASSUMPTION — high uncertainty on subscription volume]

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---------|---------------|-------------|-----------|
| V1-MAKER (lead) | $15K | $15K (reference) | — |
| V2-PRO | $12K | $5K | 58% |
| V3-TAC | $20K | $10K (+ $5K cert) | 25% |
| V4-RACK | $25K | $12K (+ $8K cert) | 20% |
| **Total** | **$72K** | **$55K** | **24% avg** |

**Platform ROI:**
- V1 NRE = $15K
- Platform savings = $17K
- **ROI: 113%** (modest — but real ROI is subscription revenue enabled by platform)
- **True ROI including subscription:** $15K NRE → $7.7M subscription potential = **51,000%+** [L5]

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---------|-------------|---|---|---------|
| V1-MAKER | CM4 inference latency too high | MED | HIGH | Hailo-8 accelerator or server-side inference |
| V2-PRO | IRONMESH RANGE adoption slower than projected | MED | MED | Sell as standalone console without subscription |
| V3-TAC | MIL-STD certification cost/time overrun | MED | MED | Start without cert; get cert when military orders confirmed |
| V4-RACK | Naval CIC integration complexity | MED | MED | Partner with naval systems integrator |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| IRONMESH ecosystem not mature → no subscription revenue | CRITICAL | AICC hardware works standalone. Subscription is upside, not dependency. |
| CM4 end-of-life / supply disruption | MED | Platform-agnostic IRONMESH OS → can port to alternative SBC |
| AICC-CORTEX circular dependency | HIGH | Circuit breaker: standalone V1 validates without CORTEX |
| 4 form factors = inventory complexity | LOW | Sequential development. Common PCB where possible. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|----------|-----------|------|-----------|
| D1 | 4 variants confirmed | MAKER, PRO, TAC, RACK | 2026-04-09 | Full spectrum: dev → enterprise → military → naval |
| D2 | Sequence | V1→V2→V3→V4 | 2026-04-09 | Desktop first, ruggedize later (Musk serial) |
| D3 | Subscription model | IRONMESH OS $3-10K/yr/unit confirmed | 2026-04-09 | Razor-blade: HW margin low, subscription = real revenue |
| D4 | Export timing | 2028+ | 2026-04-09 | After V3-TAC military reference |
| D5 | AICC = IRONMESH terminal for all WX products | Confirmed | 2026-04-09 | BB-01 CORTEX, CUAV-SIM CORTEX, XUONG IRONMESH all need AICC |

### Pending Decisions

| # | Decision | Trigger | Timeline |
|---|---------|---------|----------|
| P1 | CM4 latency pass/fail | Prototype sprint | Next available slot |
| P2 | V3-TAC MIL certification start | Military order/LOI | After V2 proven |
| P3 | V4-RACK marine certification start | Naval order/LOI | After V3 proven |
| P4 | Subscription pricing tiers | V2 deployed to RANGE users | Mid-2027 |
| P5 | IRONMESH OS feature roadmap | Post V1 validation | Q4 2026 |

---

## Cross-Product Integration Map

```
                        VN-AICC (IRONMESH Terminal)
                                  │
          ┌───────────┬───────────┼───────────┬───────────┐
          ▼           ▼           ▼           ▼           ▼
     BB-01         VN-CUAV     VN-XUONG    VN-AST     Future
     CORTEX-       SIM         UUV         MSL-001    IRONMESH
     RANGE(V6)     CORTEX(PA9) IRONMESH    Control    Products
          │           │           │           │           │
     V2-PRO      V2/V4-RACK   V3/V4      V3-TAC     V2/V3/V4
     Range mgmt  Exercise C2  LARS ctrl  Target ctrl  As needed
```

**AICC = force multiplier.** Mỗi WX product line bán thêm 1-N AICC units. AICC revenue COMPOUND với portfolio growth.

---

## TNKCT Status

| Variant | TNKCT | Reference |
|---------|-------|-----------|
| V1-MAKER | Pending | Phase2-Concept/ has partial specs |
| V2-PRO | Pending | Delta from V1 |
| V3-TAC | Pending | New (MIL-STD requirements) |
| V4-RACK | Pending | New (marine requirements) |

---

*Portfolio Planning v1.0 | VN-AICC Human-AI Interface Platform | Pahl & Beitz §3.1 Step 8.5 | 2026-04-09*
