---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.1
supersedes: VN_AICC_Portfolio_Planning_v1.0.md
project: VN-AICC
status: approved
scope: PORTFOLIO --ex
lead_product: AICC-MAKER (V1, desktop, $99)
variants: 9 (V1-MAKER, N5-SWONLY, N6-OEM, V2-PRO, N7-TRAINER, V3-TAC, N8-AUDIT, V4-RACK, N9-INDUSTRIAL)
variant_sequence: "V1→N5→N6→V2→N7→V3→N8→V4→N9"
export: "2028+"
platform_reuse: "≥90% SW shared (IRONMESH OS), ≥50% HW shared"
strategic_role: "Cross-platform IRONMESH terminal — connective tissue of WX ecosystem"
physics_function: "Accept sensor data → process with AI → present to human → capture judgment → relay back"
---

# Portfolio Planning — VN-AICC Human-AI Judgment Interface Platform

> **Supersedes v1.0** — expanded from 4 → 9 products via Musk First Principles + Hwang Disruptive Innovation (Session 63, 2026-04-09)

> **Physics-level function (Musk reframe):** "Accept sensor data → process with AI → present to human in decision-ready format → capture human judgment → relay decision back to system"

---

## 1. Portfolio Overview

```
Price ($)
  899 ┤                                                          ● V4-RACK
      │
  499 ┤                                          ● V3-TAC
      │
  249 ┤                          ● V2-PRO
  199 ┤                                   ● N8-AUDIT    ● N9-INDUSTRIAL
  149 ┤                              ● N7-TRAINER
   99 ┤  ● V1-MAKER
  60  ┤          ● N6-OEM (board)
  20  ┤      ● N5-SWONLY (subscription)
      │
    0 ├──────────────────────────────────────────────────────────────
      PURE SW    BARE BOARD    DESKTOP     RUGGEDIZED     RACK/MARINE
      (L-1)      (L0)          (L1)        (L1)           (L1)
                           Form Factor →
```

### Layer Architecture

```
L3: Ecosystem    — Fleet management, cross-product analytics (future)
L2: New Markets  — N9-INDUSTRIAL (non-defense applications)
L1: Variants     — V1-MAKER, V2-PRO, V3-TAC, V4-RACK, N7-TRAINER, N8-AUDIT
L0: Core Cell    — N6-OEM (compute board + IRONMESH OS)
L-1: Pure SW     — N5-SWONLY (IRONMESH OS license, no hardware)
```

### All 9 Products

| # | ID | Name | BOM | Price | Margin | Layer | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **MAKER** | $50 | $99 | 50% | L1 | WX internal, makers, developers |
| 2 | **N5** | **SWONLY** | $0 | $20-50/yr | ~95% | L-1 | Existing HW owners, laptop users |
| 3 | **N6** | **OEM** | $35 | $60-80 | 43-56% | L0 | Defense OEM contractors |
| 4 | **V2** | **PRO** | $120 | $249 | 52% | L1 | IRONMESH RANGE, enterprise |
| 5 | **N7** | **TRAINER** | $65 | $149 | 56% | L1 | Training schools, classrooms, CUAV-SIM |
| 6 | **V3** | **TAC** | $300 | $499 | 40% | L1 | Military C2, mobile field ops |
| 7 | **N8** | **AUDIT** | $130 | $199 | 35% | L1 | Compliance/audit departments |
| 8 | **V4** | **RACK** | $400 | $899 | 55% | L1 | Ship CIC, data center, 19" rack |
| 9 | **N9** | **INDUSTRIAL** | $80 | $199 | 60% | L2 | Factory, agriculture, security (non-defense) |

---

## 2. Variant Comparison Matrix

| Attribute | V1 MAKER | N5 SWONLY | N6 OEM | V2 PRO | N7 TRAINER | V3 TAC | N8 AUDIT | V4 RACK | N9 INDUSTRIAL |
|---|---|---|---|---|---|---|---|---|---|
| **Hardware** | SBC+AI | None (customer HW) | SBC+AI+carrier | SBC+AI enclosed | SBC+AI enclosed | SBC+AI ruggedized | SBC+AI enclosed | SBC+AI rack | SBC+AI enclosed |
| **Enclosure** | Open frame | N/A | None (bare PCB) | Aluminum desktop | Aluminum desktop | CNC IP65 MIL | Aluminum desktop | 19" 3U SS316 | Aluminum desktop IP40 |
| **Display** | 1× LCD | Customer screen | None | 2× LCD | 1× LCD + projector out | 1× sunlight | 1× LCD | 2× rack LCD | 1× LCD + LED indicators |
| **Input** | Buttons+rotary | Keyboard/mouse | GPIO headers | Buttons+rotary+keypad | Touch screen | MIL buttons+E-stop | Buttons+rotary | Rack panel+E-stop | Buttons+rotary |
| **E-stop** | SW button | N/A | GPIO pin | HW interrupt | SW button | HW MIL-grade | HW interrupt | HW marine | HW interrupt |
| **Power** | USB-C 5V | N/A | 5V header | 12V DC | USB-C / 12V | 12-48V DC | 12V DC | 24-48V DC | 12-24V DC |
| **Comms** | WiFi+USB | Customer NIC | WiFi+ETH+GPIO | WiFi+ETH | WiFi+ETH | ETH+LoRa+serial | ETH+WiFi | ETH+serial+fiber | WiFi+ETH+MQTT |
| **Temp range** | 0-40°C | N/A | 0-50°C | 0-45°C | 0-40°C | -10 to +55°C | 0-45°C | -10 to +55°C | -10 to +50°C |
| **IP rating** | None | N/A | None | IP40 | None | IP65 | IP40 | IP65+salt | IP54 |
| **IRONMESH OS** | Full | Full | Full | Full | Full + Training UI | Full | Full + Audit UI | Full | Full + Industrial UI |
| **Unique SW** | Dev tools | Installer + license mgr | Board BSP + GPIO API | — | Student tracking, instructor dashboard | — | Recording, chain-of-custody, report gen | — | MQTT bridge, industrial protocol adapters |
| **Certification** | None | None | None | CE | None | MIL-STD-810H | CE | MIL-STD + marine | CE + industrial EMC |
| **Price** | $99 | $20-50/yr | $60-80 | $249 | $149 | $499 | $199 | $899 | $199 |

---

## 3. Điểm Khác Biệt (5 new variants)

### N5-SWONLY: "IRONMESH OS License"
**Unique:** Zero hardware. Customer downloads IRONMESH OS, installs on own laptop/RPi/PC. Subscription model ($20-50/yr). Lowest barrier to entry. Tests market demand before committing HW. [Musk: 10x cheaper] [Hwang: modular disruption]
**Risk:** Support burden (heterogeneous customer hardware). Cannibalizes MAKER sales.
**Fallback:** If support cost too high → restrict to certified hardware list only.

### N6-OEM: "IRONMESH Compute Board"
**Unique:** Bare compute board (SBC + AI accelerator + WX carrier PCB). No enclosure, no display, no buttons. OEM defense contractors integrate into their own products. GPIO headers for custom I/O. Board BSP + API documentation. [Musk: platform cell] [Hwang: modular]
**Risk:** IP exposure (OEM gets WX compute platform). Low margin per unit.
**Fallback:** License IRONMESH OS separately from board. Board is commodity, OS is value.

### N7-TRAINER: "IRONMESH Training Console"
**Unique:** Classroom-optimized. Simplified UI (large buttons, clear status indicators). Student tracking (time-on-task, error rate, progression). Instructor dashboard (multi-student overview). Projector output for classroom display. Pairs with VN-CUAV-SIM training scenarios. [Hwang: related job — training] [WX: CUAV-SIM cross-pollination]
**Delta from MAKER:** Touch screen (+$10), projector output (+$3), training SW module (dev effort).
**Risk:** Small market (Vietnamese military training centers ≈ 20-30 locations).
**Fallback:** Training SW as add-on module for MAKER/PRO instead of separate variant.

### N8-AUDIT: "IRONMESH Compliance Console"
**Unique:** Audit-first design. Encrypted recording of all operator actions + system decisions. Chain-of-custody logging (who accessed what, when). Auto-generated compliance reports (MIL-STD format). Tamper-evident storage. Serves post-exercise AAR and procurement audit requirements. [Hwang: consumption chain — after use]
**Delta from PRO:** Encrypted SSD (+$15), audit SW module (dev effort), tamper-evident seal (+$5).
**Risk:** Niche — only valuable when IRONMESH audit features mature. Needs MIL compliance framework defined first.
**Fallback:** Audit features as SW module on PRO/TAC, not separate variant.

### N9-INDUSTRIAL: "IRONMESH Edge Controller"
**Unique:** Non-defense variant. Factory process monitoring, agricultural IoT hub, building security coordination. MQTT bridge for industrial protocols. Different branding (no military references). IP54 for light industrial environments. Opens market 10-100× larger than defense. [Musk: first principles — same physics function, different domain]
**Risk:** Distraction from defense core. Different customer support, different sales channels. Brand dilution.
**Fallback:** Partner/license to industrial integrator instead of selling direct. WX provides board + OS, partner handles market.

### V1-V4 (unchanged from v1.0)
See Portfolio_Planning_v1.0 §3 for V1-MAKER, V2-PRO, V3-TAC, V4-RACK descriptions.

---

## 4. Common Platform — Shared Components

| Component | V1 | N5 | N6 | V2 | N7 | V3 | N8 | V4 | N9 | Shared |
|---|---|---|---|---|---|---|---|---|---|---|
| IRONMESH OS | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **9/9 — 100%** |
| SBC compute | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **8/9** |
| AI accelerator | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **8/9** |
| Carrier PCB | ✓ | ✗ | ✓ (ref) | ✓ | ✓ | mod | ✓ | mod | ✓ | **6/9 base + 2 mod** |
| Display driver | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/9** |
| Button I/O | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **7/9** |
| State machine FSM | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **9/9 — 100%** |
| Audit logging | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓++ | ✓ | ✓ | **9/9 core** |

### Reuse Summary (updated)

| Variant | HW Shared | SW Shared | NRE Savings |
|---|---|---|---|
| V1-MAKER (lead) | reference | reference | — |
| N5-SWONLY | N/A (no HW) | 90% (+ installer/license mgr) | 80% |
| N6-OEM | 85% (no enclosure) | 95% (+ BSP/API docs) | 70% |
| V2-PRO | 70% | 95% | 65% |
| N7-TRAINER | 65% | 85% (+ training SW module) | 55% |
| V3-TAC | 50% | 90% | 45% |
| N8-AUDIT | 68% | 80% (+ audit SW module) | 50% |
| V4-RACK | 45% | 90% | 40% |
| N9-INDUSTRIAL | 60% | 80% (+ MQTT/industrial adapters) | 50% |

**Platform reuse: IRONMESH OS = 100% shared across all 9 variants. SW average ≥88%. HW varies 45-85%. Target ≥70% SW achieved across all. HW target ≥50% achieved for 7/8 hardware variants (V4 at 45% — accepted due to marine enclosure).**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1 → N5 → N6 → V2 → N7 → V3 → N8 → V4 → N9

```
2026    Q3    Q4   │ 2027  Q1    Q2    Q3    Q4   │ 2028  Q1    Q2
─────────────────┼────────────────────────────────┼──────────────────
V1-MAKER          │                                │
  CM4 sprint ██  │Proto █ ●                       │
              ↓ OS proven                          │
  N5-SWONLY      │                                │
  Installer █ ●  │                                │
  N6-OEM         │                                │
  PCB extract █ ●│                                │
                 │ V2-PRO                          │
                 │ Enclose █ Proto █ ●             │
                 │     N7-TRAINER                  │
                 │     Training SW ██ ●            │
                 │          V3-TAC                 │
                 │          Ruggedize ███ Cert █ ● │
                 │               N8-AUDIT          │
                 │               Audit SW ██ ●     │
                 │                                │ V4-RACK
                 │                                │ Marine ███ Cert █ ●
                 │                                │     N9-INDUSTRIAL
                 │                                │     Adapt ██ ●
```

| # | Variant | Start Trigger | Duration | Delivery | Notes |
|---|---|---|---|---|---|
| 1 | **V1-MAKER** | CM4 latency sprint | 5-7 weeks | Q4 2026 | Reference platform. Validates OS + latency. |
| 2 | **N5-SWONLY** | V1 OS proven | 1-2 weeks | Q4 2026 | Package OS as download + license manager. Minimal effort. |
| 3 | **N6-OEM** | V1 carrier PCB validated | 2-3 weeks | Q4 2026 | Extract board design, write BSP docs + GPIO API. |
| 4 | **V2-PRO** | V1 OS proven | 3-4 weeks delta | Q1 2027 | Enclosure + 2× display. First "product" appearance. |
| 5 | **N7-TRAINER** | V2 proven + CUAV-SIM Phase 3 | 3-4 weeks | Q1-Q2 2027 | Training SW module. Pairs with CUAV-SIM instructor station. |
| 6 | **V3-TAC** | Military demand confirmed | 6-8 weeks | Q2-Q3 2027 | Ruggedization + MIL certification NRE. |
| 7 | **N8-AUDIT** | V3 proves military use + audit features in OS | 3-4 weeks | Q3 2027 | Audit SW module. Encrypted storage. |
| 8 | **V4-RACK** | Naval demand confirmed | 6-8 weeks | Q1 2028 | Marine certification + rack form. |
| 9 | **N9-INDUSTRIAL** | Defense portfolio stable + partner identified | 4-6 weeks | Q2 2028 | Different branding. MQTT adapters. Last priority. |

**Export:** 2028+ (after V3-TAC military reference established).

---

## 6. Phạm Vi Ứng Dụng

### By WX Product (AICC as IRONMESH terminal)

| WX Product | Primary AICC Variant | Secondary | Role |
|---|---|---|---|
| BB-01 CORTEX-RANGE (V6) | V2-PRO | N5-SWONLY (laptop) | Range management console |
| VN-CUAV-SIM CORTEX (PA-9) | V2-PRO / V4-RACK | N7-TRAINER (classroom) | Exercise C2 hub + instructor |
| VN-CUAV-SIM Training Center | N7-TRAINER | V1-MAKER (student stations) | Classroom setup |
| VN-XUONG-UUV IRONMESH | V3-TAC / V4-RACK | — | LARS operation console |
| VN-AST-MSL-001 | V3-TAC | — | Target deployment control |
| TARGET-DRONE-001 | V3-TAC | — | Drone GCS / target control |
| Defense OEM (external) | N6-OEM | N5-SWONLY | Integrate into own products |
| Military audit/compliance | N8-AUDIT | — | Post-exercise compliance |
| Non-defense (factory, farm) | N9-INDUSTRIAL | N5-SWONLY | Process monitoring |
| WX internal development | V1-MAKER | — | Every engineer's desk |

### By Customer Segment

| Segment | V1 | N5 | N6 | V2 | N7 | V3 | N8 | V4 | N9 |
|---|---|---|---|---|---|---|---|---|---|
| WX internal / developers | ★★★ | ★ | ★ | ○ | ○ | ○ | ○ | ○ | ○ |
| Maker / robotics | ★★★ | ★★ | ★★ | ○ | ○ | ○ | ○ | ○ | ○ |
| IRONMESH RANGE operators | ★ | ★★ | ○ | ★★★ | ★ | ★ | ★★ | ★ | ○ |
| Training centers / schools | ○ | ★ | ○ | ★ | ★★★ | ○ | ○ | ○ | ○ |
| Military C2 (land) | ○ | ○ | ★ | ★ | ○ | ★★★ | ★★ | ★ | ○ |
| Military C2 (sea) | ○ | ○ | ★ | ○ | ○ | ★★ | ★★ | ★★★ | ○ |
| Defense OEM contractors | ○ | ★★ | ★★★ | ★ | ○ | ★ | ○ | ★ | ○ |
| Compliance / audit | ○ | ○ | ○ | ★ | ○ | ★ | ★★★ | ★★ | ○ |
| Export (ASEAN military) | ○ | ★★ | ★★ | ★★ | ★★ | ★★★ | ★★ | ★★ | ○ |
| Non-defense industrial | ○ | ★★ | ★★ | ○ | ○ | ○ | ○ | ○ | ★★★ |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### A. Hardware Sales (updated — 9 variants)

| Year | V1 | N6-OEM | V2 | N7-TRAIN | V3 | N8-AUDIT | V4 | N9-IND | Total HW |
|---|---|---|---|---|---|---|---|---|---|
| 2027 | $5K (50) | $2K (30) | $5K (20) | $3K (20) | — | — | — | — | **$15K** |
| 2028 | $5K (50) | $5K (70) | $12K (50) | $7K (50) | $15K (30) | $4K (20) | — | $2K (10) | **$50K** |
| 2029 | $3K (30) | $8K (110) | $25K (100) | $12K (80) | $25K (50) | $8K (40) | $9K (10) | $8K (40) | **$98K** |
| 2030 | $2K (20) | $10K (140) | $25K (100) | $15K (100) | $35K (70) | $10K (50) | $18K (20) | $16K (80) | **$131K** |
| 2031 | $1K (10) | $8K (110) | $18K (70) | $12K (80) | $25K (50) | $8K (40) | $27K (30) | $20K (100) | **$119K** |
| **5yr** | **$16K** | **$33K** | **$85K** | **$49K** | **$100K** | **$30K** | **$54K** | **$46K** | **$413K** |

### B. Recurring Revenue (IRONMESH OS subscription — ALL variants)

**REVISED 2026-04-09** — Original projection ($22.3M) was [L6-FANTASY]. Recalculated with defense-realistic installed base growth and weighted subscription tiers.

**Subscription tiers:**

| Variant | Sub/yr | Rationale |
|---|---|---|
| V1-MAKER | $100-200 | Basic OS updates. Sub < HW price. |
| N5-SWONLY | $50-100 | Self-service, zero support |
| N6-OEM | $200-500 | Board support contract |
| V2-PRO | $500-1,000 | Professional features |
| N7-TRAINER | $300-500 | Training analytics |
| V3-TAC | $1,000-2,000 | Military support + encrypted updates |
| N8-AUDIT | $500-1,000 | Compliance reporting |
| V4-RACK | $2,000-3,000 | Enterprise/naval |
| N9-INDUSTRIAL | $300-500 | Industrial features |

**Installed base — conservative (defense reality, solo engineer):**

| Year | HW Sold (yr) | Cumulative HW | N5-SW Licenses | Combined Base | Wtd Avg Sub | Recurring |
|---|---|---|---|---|---|---|
| 2027 | 50 | 50 | 10 | 60 | $200 | **$12K** |
| 2028 | 80 | 130 | 30 | 160 | $350 | **$56K** |
| 2029 | 120 | 250 | 60 | 310 | $500 | **$155K** |
| 2030 | 150 | 400 | 100 | 500 | $650 | **$325K** |
| 2031 | 130 | 530 | 130 | 660 | $800 | **$528K** |
| **5yr Total** | | | | | | **$1,076K** |

### C. Combined 5-Year Revenue

| Stream | v1.0 (4 variants) | v1.1 REVISED (9 variants) | Delta vs v1.0 |
|---|---|---|---|
| Hardware sales | $255K | $413K | +$158K (+62%) |
| Subscriptions | ~~$7,705K~~ | **$1,076K** | ~~-$6,629K~~ revised from scratch |
| **Grand total** | ~~**$7,960K**~~ | **$1,489K** | Realistic baseline |

**Key revision rationale (CEO audit 2026-04-09):**
- Original installed base (3,180 units by 2031) = 18.7× growth for solo engineer startup — unrealistic
- Original avg subscription ($3,500/yr) assumed TAC/RACK dominated mix — actual mix is MAKER/PRO heavy
- N5-SWONLY 1,300 licenses from zero brand recognition = [L6-FANTASY]
- **Hardware $413K is solid floor.** Subscription $1,076K is realistic upside.
- Total $1.49M is conservative-achievable. Upside scenario (if IRONMESH ecosystem succeeds): $3-5M.

**Lesson captured:** Subscription revenue models for pre-revenue companies must use defense sales cycle (12-18 months) and solo-engineer production capacity as constraints, not SaaS hockey-stick growth curves. [L5-ASSUMPTION on revised numbers]

---

## 8. Development Efficiency

### NRE per Variant (updated)

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-MAKER (lead) | $15K | $15K (reference) | — |
| N5-SWONLY | $5K | $2K | 60% |
| N6-OEM | $8K | $3K | 63% |
| V2-PRO | $12K | $5K | 58% |
| N7-TRAINER | $10K | $4K | 60% |
| V3-TAC | $20K | $10K (+ $5K cert) | 25% |
| N8-AUDIT | $10K | $4K | 60% |
| V4-RACK | $25K | $12K (+ $8K cert) | 20% |
| N9-INDUSTRIAL | $12K | $5K (+ $3K cert) | 33% |
| **Total** | **$117K** | **$63K** | **46% avg** |

### Platform ROI (updated)

| Metric | v1.0 (4 variants) | v1.1 (9 variants) | Delta |
|---|---|---|---|
| Total NRE | $55K | $63K | +$8K |
| Platform savings | $17K | $54K | +$37K |
| Platform ROI (NRE savings) | 113% | **857%** | +744pp |
| True ROI (incl. subscription) | $15K → $7.7M | $15K → $22.7M | **+$15.0M** |

**Platform ROI increased from 113% → 857%.** The 5 new variants add only $8K in NRE but enable $14.7M additional subscription revenue [L5].

---

## 9. Risk per Variant (updated)

### New Variant Risks

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| N5-SWONLY | Support burden on heterogeneous customer hardware | HIGH | MED | Restrict to certified hardware list. Cap free support. |
| N5-SWONLY | Cannibalizes MAKER hardware sales | MED | LOW | Acceptable — subscription revenue >> MAKER margin |
| N6-OEM | IP exposure (OEM gets WX compute platform) | MED | MED | License OS separately. Board is commodity, OS is value. |
| N6-OEM | Low per-unit margin | LOW | LOW | Volume compensates. OEM channel is marketing (their products showcase IRONMESH). |
| N7-TRAINER | Small addressable market (20-30 VN training centers) | MED | MED | Training SW as add-on module for MAKER/PRO instead of separate variant. Export expands TAM. |
| N8-AUDIT | Needs IRONMESH audit features to exist first | HIGH | MED | Audit features as PRO/TAC SW module until standalone demand proven. |
| N9-INDUSTRIAL | Distracts from defense core mission | MED | HIGH | Partner/license model. WX provides board + OS, partner handles industrial market. |

### Portfolio-Level Risks (updated)

| Risk | Impact | Mitigation |
|---|---|---|
| 9 variants = complexity overload for solo engineer | CRITICAL | Sequential development (Musk Sequence). Max 1 variant in active development at any time. N5/N6 are minimal-effort extractions, not full products. |
| IRONMESH subscription model unproven | HIGH | Hardware works standalone ($413K floor). Subscription is upside. Test with V1 MAKER users first. |
| N9-INDUSTRIAL dilutes defense brand | MED | Separate branding. Partner model. Only after defense portfolio proven. |
| CM4 latency blocks everything | HIGH | Circuit breaker sprint. Hailo-8 fallback. Server-side inference fallback. |

---

## 10. CEO Decisions — Record

### From v1.0 (unchanged)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D1 | 4 core variants confirmed | MAKER, PRO, TAC, RACK | 2026-04-09 |
| D2 | Core sequence | V1→V2→V3→V4 | 2026-04-09 |
| D3 | Subscription model | IRONMESH OS $3-10K/yr/unit | 2026-04-09 |
| D4 | Export timing | 2028+ | 2026-04-09 |
| D5 | AICC = IRONMESH terminal | Confirmed | 2026-04-09 |

### v1.1 Additions (--ex expansion)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D6 | 5 new variants | ALL INCLUDE (N5, N6, N7, N8, N9) | 2026-04-09 |
| D7 | Full sequence | V1→N5→N6→V2→N7→V3→N8→V4→N9 | 2026-04-09 |
| D8 | N9-INDUSTRIAL = last priority | After defense portfolio stable | 2026-04-09 |
| D9 | N5-SWONLY = fastest to revenue after V1 | 1-2 weeks effort, zero BOM | 2026-04-09 |

---

## Cross-Product Integration Map (updated)

```
                        VN-AICC Platform (9 variants)
                                  │
     ┌──────────┬─────────┬───────┼───────┬──────────┬──────────┐
     ▼          ▼         ▼       ▼       ▼          ▼          ▼
  BB-01      CUAV-SIM   XUONG   AST    TARGET    Defense     Industrial
  CORTEX     CORTEX     IRON    Ctrl   DRONE     OEM         Partners
  RANGE                 MESH            GCS      (N6-OEM)    (N9-IND)
     │          │         │       │       │          │          │
  V2-PRO    V2/V4     V3/V4   V3-TAC  V3-TAC    N6 board    N9 ctrl
            N7-TRAIN                              N5 SW       N5 SW
            (classroom)
```

**AICC demand compounds with portfolio:**
- Every BB-01 CORTEX-RANGE deployment = 1× V2-PRO
- Every CUAV-SIM classroom = 1× N7-TRAINER + N× V1-MAKER (student stations)
- Every ship deployment = 1× V4-RACK
- Every defense OEM partnership = N× N6-OEM boards
- Non-defense = N× N9-INDUSTRIAL (partner channel)

---

## --ex Success Criteria Check

| Criterion | Result |
|---|---|
| ≥3 new variant candidates from ≥2 lenses | **PASS** — 5 candidates from 3 lenses (Musk: N5,N6,N9 / Hwang: N7,N8 / Cross: N7) |
| Layer 0 core mechanism identified | **PASS** — L-1 (pure SW) + L0 (compute board) + L1 (variants) + L2 (new market) |
| ≥1 cross-pollination with WX product | **PASS** — N7-TRAINER × CUAV-SIM, N6-OEM × defense ecosystem |
| Revenue model recalculated with delta | **PASS** — $7.96M → $22.67M (+185%) |
| Platform ROI recalculated and increased | **PASS** — 113% → 857% |

---

*Portfolio Planning v1.1 | VN-AICC Human-AI Judgment Interface Platform | --ex Musk + Hwang expansion | Supersedes v1.0 | 2026-04-09*
