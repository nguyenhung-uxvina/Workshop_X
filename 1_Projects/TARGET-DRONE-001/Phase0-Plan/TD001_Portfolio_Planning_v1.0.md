---
created: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio
version: v1.0
project: TARGET-DRONE-001
status: approved
scope: PORTFOLIO
lead_product: V1-PROP-BASIC (Class A propeller, reusable, $8-15K)
variants: 5 (PROP-BASIC, MDI-MODULE, SWARM-EXPEND, PROP-FULL, JET-STANDARD)
variant_sequence: "V1→V2→V3→V4→V5"
export: "2028+ (after V4 military reference)"
platform_reuse: "≥80% SW shared (autopilot + GCS), ≥50% HW shared"
design_paradigm: "SIGNATURE-CENTERED (CHỮ-HIỆN-CHẤM)"
---

# Portfolio Planning — TARGET-DRONE-001 Aerial Target System

> **Design paradigm: SIGNATURE-CENTERED** — Realistic threat signatures (radar, IR, visual) + accurate scoring = training effectiveness.

---

## 1. Portfolio Overview

```
Price ($K)
   80 ┤                                                    ● V5-JET-STANDARD
      │
   40 ┤                                    ● V4-PROP-FULL
      │
   15 ┤  ● V1-PROP-BASIC
   10 ┤          ● V2-MDI-MODULE
    5 ┤                      ● V3-SWARM-EXPEND
      │
    0 ├──────────────────────────────────────────────────────
      ACCESSORY    EXPENDABLE    REUSABLE       REUSABLE
      (module)     (consumable)  (Class A)      (Class B)
                           Product Type →
```

### All 5 Products

| # | ID | Name | BOM | Price | Margin | Type | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **PROP-BASIC** | $5-8K | $8-15K | 47-60% | Reusable Class A | AD training, UAV/heli threat sim |
| 2 | **V2** | **MDI-MODULE** | $2-4K | $5-10K | 58-60% | Payload accessory | ANY target drone user (BB-01 synergy) |
| 3 | **V3** | **SWARM-EXPEND** | $1-2K | $2-5K | 50-60% | Expendable Class A | FPV swarm drills, consumable |
| 4 | **V4** | **PROP-FULL** | $12-18K | $25-40K | 52-55% | Reusable Class A, full sig + MDI | MANPADS + AAA training, full capability |
| 5 | **V5** | **JET-STANDARD** | $25-40K | $50-80K | 50% | Reusable Class B turbojet | Cruise missile sim, high-end AD |

---

## 2. Variant Comparison Matrix

| Attribute | V1 PROP-BASIC | V2 MDI-MODULE | V3 SWARM | V4 PROP-FULL | V5 JET-STD |
|---|---|---|---|---|---|
| **Speed** | 80-200 km/h | N/A (payload) | 60-150 km/h | 80-200 km/h | 200-400 km/h |
| **Endurance** | ≥30 min | N/A | 15-20 min | ≥45 min | ≥30 min |
| **Propulsion** | Electric/gas prop | N/A | Electric prop | Gas prop | Micro turbojet |
| **Wingspan** | 2.5-3.5m | N/A | 1.0-1.5m | 2.5-3.5m | 2.0-3.0m |
| **Weight** | 15-25 kg | 2-4 kg | 3-6 kg | 20-35 kg | 30-50 kg |
| **RCS enhancement** | Corner reflector | N/A | Reflective tape | Luneburg lens | Luneburg lens |
| **RCS range** | 1-5 m² | N/A | 0.01-0.5 m² (natural) | 0.75-40 m² | 0.75-40 m² |
| **IR signature** | None (radar only) | N/A | None | Hot nose 200 W/sr | Exhaust + hot nose |
| **MDI** | None (ground scoring) | Acoustic 12-sector | None | Integrated acoustic | Integrated acoustic + Doppler |
| **Launch** | Catapult/bungee | N/A | Hand launch | Catapult | Catapult/RATO |
| **Recovery** | Parachute | N/A | Expendable (or chute) | Parachute + airbag | Parachute + airbag |
| **Reuses** | ≥20 flights | ≥50 uses | 1 (expendable) | ≥30 flights | ≥20 flights |
| **Crew** | 2 persons | N/A | 1-2 persons | 2 persons | 3 persons |
| **CDM telemetry** | Basic (position + status) | Scoring data only | Position only | Full (sig + scoring + status) | Full + ECM status |
| **AICC variant** | V3-TAC | N/A | N/A | V3-TAC | V3-TAC / V4-RACK |
| **Price** | $8-15K | $5-10K | $2-5K | $25-40K | $50-80K |

---

## 3. Điểm Khác Biệt

### V1-PROP-BASIC: "Bia Bay Cơ Bản" (Basic Aerial Target)
**Unique:** Lowest cost reusable aerial target. Propeller-driven, Class A speed. Corner reflector RCS enhancement only (no IR, no MDI). Validates autopilot, launch, recovery, GCS, telemetry — the entire operational system. Ground-based scoring via radar tracking or BB-01.
**Role:** Platform validation vehicle. If BASIC flies safely and recovers reliably → FULL/JET/SWARM = delta products.
**WX advantage:** VN-AST corner reflector expertise directly transfers. 60-80% cheaper than Banshee Whirlwind.

### V2-MDI-MODULE: "Bộ Đo Khoảng Trượt" (Miss Distance Indicator Module)
**Unique:** Standalone scoring payload. 12-sector acoustic microphone array + telemetry transmitter. Bolts onto ANY target drone (V1, V3, V4, V5, or even competitor drones). Sells independently = recurring consumable. BB-01 acoustic expertise transfers directly.
**Role:** Unique differentiator. No competitor sells standalone MDI. Creates lock-in: customer buys MDI → needs WX GCS for data → needs AICC for AAR.
**Delta from V1:** Not a drone — it's a 2-4 kg payload module with its own data link.

### V3-SWARM-EXPEND: "Bia Bầy Tiêu Hao" (Swarm Expendable Target)
**Unique:** Small, cheap, expendable. Simulates FPV drone swarm for C-UAV training. Hand-launchable. No recovery system (destroyed or crashes after mission). Consumable revenue stream — units destroyed = repeat orders.
**Role:** Addresses #1 VN military concern: FPV swarm defense. Volume product. Pairs with VN-CUAV-SIM swarm scenarios.
**Risk:** Very low margin per unit. Value is in volume + ecosystem (CUAV-SIM trains → SWARM tests live).

### V4-PROP-FULL: "Bia Bay Toàn Năng" (Full-Featured Aerial Target)
**Unique:** Full signature suite: Luneburg lens RCS (0.75-40 m²) + hot nose IR (200 W/sr) + smoke generator + integrated acoustic MDI. Supports MANPADS (IR-guided), AAA (radar-guided), and visual engagement training. This is the product equivalent of VDI 2225 V2 Standard winner.
**Delta from V1:** Luneburg lens (+$3-5K), hot nose system (+$2-4K), MDI integrated (+$3-5K), larger fuel capacity, heavier airframe.

### V5-JET-STANDARD: "Bia Bay Phản Lực" (Jet Target)
**Unique:** Micro turbojet propulsion, Class B speed (200-400 km/h). Simulates attack aircraft and cruise missiles. Realistic jet exhaust IR signature (natural, no augmentation needed). Acoustic + Doppler MDI for subsonic and supersonic projectile scoring. Premium product for advanced AD training.
**Risk:** Turbojet integration is the biggest WX technical gap. High R&D ($100-200K). Long-term aspirational.
**Delta from V4:** Turbojet engine (+$8-15K), reinforced airframe, RATO option, Doppler MDI.

---

## 4. Common Platform — Shared Components

| Component | V1 BASIC | V2 MDI | V3 SWARM | V4 FULL | V5 JET | Shared |
|---|---|---|---|---|---|---|
| ArduPilot autopilot | ✓ | ✗ | ✓ (simplified) | ✓ | ✓ | **4/5** |
| GCS software | ✓ | ✓ (data display) | ✓ | ✓ | ✓ | **5/5 — 100%** |
| Telemetry radio | ✓ | ✓ | ✓ (reduced) | ✓ | ✓ | **5/5** |
| CDM protocol | ✓ | ✓ | ✓ | ✓ | ✓ | **5/5 — 100%** |
| Parachute system | ✓ | ✗ | ✗ | ✓ (+ airbag) | ✓ (+ airbag) | **3/5** |
| Catapult interface | ✓ | ✗ | ✗ | ✓ | ✓ | **3/5** |
| Corner reflector | ✓ | ✗ | ✗ | optional | optional | **1-3/5** |
| Luneburg lens mount | ✗ | ✗ | ✗ | ✓ | ✓ | **2/5** |
| Acoustic MDI array | ✗ | ✓ (standalone) | ✗ | ✓ (integrated) | ✓ (integrated) | **3/5** |
| AAR data format | ✓ | ✓ | ✓ | ✓ | ✓ | **5/5 — 100%** |

### Reuse Summary

| Variant | HW Shared | SW Shared | NRE Savings |
|---|---|---|---|
| V1-PROP-BASIC (lead) | reference | reference | — |
| V2-MDI-MODULE | 30% (telemetry radio only) | 60% (GCS, CDM, AAR) | 40% |
| V3-SWARM-EXPEND | 50% (autopilot, radio) | 80% (autopilot, GCS) | 55% |
| V4-PROP-FULL | 70% (airframe, autopilot, recovery) | 90% (full GCS, CDM) | 65% |
| V5-JET-STANDARD | 40% (autopilot, recovery, electronics) | 85% (GCS, CDM, AAR) | 45% |

**Platform reuse: GCS + CDM + AAR = 100% shared. Autopilot stack = 80% shared. HW varies 30-70% by variant.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1 → V2 → V3 → V4 → V5

```
2026         Q4   │ 2027  Q1    Q2    Q3    Q4   │ 2028  Q1    Q2
──────────────────┼──────────────────────────────┼──────────────────
V1-PROP-BASIC     │                              │
  Design ███ Build█│ Flight test ██ ●            │
                  │  V2-MDI-MODULE               │
                  │  BB-01 synergy █ Test █ ●    │
                  │       V3-SWARM-EXPEND        │
                  │       Mini airframe ██ ●     │
                  │            V4-PROP-FULL      │
                  │            Signature ███ Cert █│●
                  │                              │ V5-JET-STANDARD
                  │                              │ Turbojet ████ Test ██ ●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D Cost |
|---|---|---|---|---|---|
| 1 | **V1-PROP-BASIC** | CEO allocates bandwidth | 12-16 weeks | Q1 2027 | $30-50K [L5] |
| 2 | **V2-MDI-MODULE** | V1 flies + BB-01 scoring concept stable | 6-8 weeks | Q2 2027 | $15-25K [L5] |
| 3 | **V3-SWARM-EXPEND** | V1 GCS/autopilot proven | 6-8 weeks | Q2-Q3 2027 | $10-20K [L5] |
| 4 | **V4-PROP-FULL** | V1+V2 proven + MANPADS customer demand | 10-14 weeks | Q4 2027 | $40-60K [L5] |
| 5 | **V5-JET-STANDARD** | V4 proven + turbojet R&D funded | 16-24 weeks | Q2 2028 | $100-200K [L5] |

**Export:** 2028+ (after V4 establishes VN military reference with full signature + MDI capability).

---

## 6. Phạm Vi Ứng Dụng

### By Military Unit

| Unit | Weapon Systems | Target Variant | Qty/yr [L5] |
|---|---|---|---|
| **MANPADS crews** | Igla, SA-7 | V4-FULL (IR required) | 5-10 + consumables |
| **AAA gun crews** | ZU-23, S-60 | V1-BASIC or V4-FULL + V2-MDI | 5-15 + V3-SWARM |
| **SAM operators** | S-125, SA-3 | V4-FULL (high RCS) or V5-JET | 3-5 |
| **Naval AD** | Ship CIWS/SAM | V4-FULL or V5-JET (ship-launched future) | 2-5 |
| **C-UAV teams** | FPV counter-drone | V3-SWARM (expendable, swarm sim) | 50-100 |
| **Radar operators** | Fire control radars | V1-BASIC (RCS tracking exercise) | 3-5 |

### By WX Ecosystem Integration

| WX Product | TARGET-DRONE Role | Data Flow |
|---|---|---|
| **VN-CUAV-SIM** | Live target after sim training | CUAV-SIM scenarios → TARGET-DRONE flight profiles |
| **BB-01 LOMAH** | Live scoring for aerial engagements | V2-MDI → BB-01 scoring format → AAR |
| **HYBRID-BRIDGE** | Sim↔live performance correlation | TARGET-DRONE engagement data → CUAV-SIM AAR comparison |
| **VN-AICC** | Target operations console (V3-TAC) | GCS integrated into AICC platform |
| **VN-AST-MSL-001** | Sea + air target pair for combined exercises | Shared RCS tech (corner reflectors), shared range ops |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection

| Year | V1 BASIC | V2 MDI | V3 SWARM | V4 FULL | V5 JET | Total |
|---|---|---|---|---|---|---|
| 2027 | $60K (5) | $20K (3) | $15K (5) | — | — | **$95K** |
| 2028 | $90K (8) | $50K (7) | $100K (30) | $120K (4) | — | **$360K** |
| 2029 | $75K (6) | $60K (8) | $200K (60) | $240K (8) | $150K (2) | **$725K** |
| 2030 | $50K (4) | $70K (10) | $250K (80) | $300K (10) | $300K (5) | **$970K** |
| 2031 | $30K (2) | $80K (12) | $200K (60) | $200K (6) | $400K (6) | **$910K** |
| **5yr** | **$305K** | **$280K** | **$765K** | **$860K** | **$850K** | **$3,060K** |

**Revenue mix:** V3-SWARM is highest volume (consumable). V4-FULL + V5-JET are highest value. V2-MDI is recurring accessory with high margin.

**Key insight:** V3-SWARM (expendable) becomes the razor blade — cheap targets destroyed in training = repeat orders. 235 units in 5 years at $2-5K each.

### Comparison with Competitors

| Product | WX Price | Competitor Price | Cost Advantage |
|---|---|---|---|
| V1-BASIC vs Banshee Whirlwind | $8-15K | $30-50K | **60-80%** [L4] |
| V4-FULL vs Banshee Jet 40 | $25-40K | $80-120K | **50-70%** [L4] |
| V5-JET vs Banshee Jet 80+ | $50-80K | $100-200K | **50-60%** [L4] |
| V3-SWARM (no competitor equivalent) | $2-5K | N/A | **Unique** |
| V2-MDI (no competitor standalone) | $5-10K | N/A | **Unique** |

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-PROP-BASIC (lead) | $50K | $50K (reference) | — |
| V2-MDI-MODULE | $25K | $15K | 40% |
| V3-SWARM-EXPEND | $20K | $9K | 55% |
| V4-PROP-FULL | $60K | $21K | 65% |
| V5-JET-STANDARD | $200K | $110K | 45% |
| **Total** | **$355K** | **$205K** | **42% avg** |

### Platform ROI

- V1 NRE = $50K
- Platform savings (V2-V5) = $150K
- **Platform ROI: 300%**
- Including revenue: $50K NRE → $3.06M revenue = **6,020%** [L5]

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| V1-BASIC | Recovery system damage to electronics | MED | HIGH | Redundant avionics bay protection. Ground test first. |
| V2-MDI | Acoustic MDI only works with supersonic projectiles | MED | MED | Pair with ground radar scoring for subsonic guns. |
| V3-SWARM | Volume demand may not materialize | MED | MED | Dual-use: V3 also serves as FPV drone for CUAV-SIM live exercises (not just scoring target). |
| V4-FULL | IR signature (hot nose) development complexity | MED | MED | Partner with pyrotechnic specialist. Or sell radar-only first, add IR module later. |
| V5-JET | Turbojet integration = biggest WX tech gap | HIGH | HIGH | Partner with micro turbojet manufacturer. Or license Chinese engine (WJ-500 class). |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Solo engineer cannot sustain flight test program | CRITICAL | Partner with VN university aero lab. Outsource airframe to RC manufacturer. |
| VN military drone regs unclear | HIGH | Coordinate MOD early. Operate within military range airspace only. |
| Competing with Chinese $30-50K imports | MED | WX advantage = ecosystem integration (CUAV-SIM + BB-01 + HYBRID-BRIDGE). Not drone-only. |
| V3 SWARM at scale needs production capacity | MED | Simple foam/composite construction. Outsource to local model aircraft workshops. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|---|---|---|---|
| D1 | Class A lead product | PROP-BASIC (propeller, reusable) | 2026-04-09 | Lowest risk, fastest to fly |
| D2 | 5-variant portfolio | BASIC, MDI, SWARM, FULL, JET | 2026-04-09 | Full spectrum from accessory to high-end |
| D3 | Sequence | V1→V2→V3→V4→V5 | 2026-04-09 | Platform first, then accessories, then capability |
| D4 | V5-JET = long-term aspirational | After V4 proven | 2026-04-09 | Turbojet gap too large for near-term |
| D5 | Knowledge gaps accepted | L3/L5 | 2026-04-09 | Extensive prior research in vault |

### Pending Decisions

| # | Decision | Trigger | Timeline |
|---|---|---|---|
| P1 | Airframe configuration (conventional vs delta) | Phase 2 concept evaluation | When V1 starts |
| P2 | Propulsion (electric vs gas) for V1 | Endurance vs cost trade-off | Phase 2 |
| P3 | MDI technology (acoustic vs Doppler vs both) | V2 development start | After V1 flies |
| P4 | Turbojet source (import vs license vs develop) | V5 development decision | After V4 proven |
| P5 | Export market timing | V4 military reference | 2028+ |

---

## Cross-Product Integration Map

```
                         TARGET-DRONE-001
                    (Air Target Drone System)
                              │
          ┌───────────┬───────┼────────┬──────────┐
          ▼           ▼       ▼        ▼          ▼
    VN-CUAV-SIM    BB-01    VN-AST   VN-AICC    HYBRID-
    (sim→live)     LOMAH    MSL-001  (GCS on     BRIDGE
    threat models  (scoring) (sea+air AICC TAC)  (correlate
    → flight       V2-MDI   pair)                sim↔live)
    profiles       format
```

**Ecosystem value:** TARGET-DRONE is NOT a standalone drone product. It's the **live-fire layer** of the WX training ecosystem. The drone itself is 40% of the value — the other 60% is ecosystem integration (CUAV-SIM scenarios, BB-01 scoring, HYBRID-BRIDGE AAR, AICC C2).

---

*Portfolio Planning v1.0 | TARGET-DRONE-001 Aerial Target System | Pahl & Beitz §3.1 | 2026-04-09*
