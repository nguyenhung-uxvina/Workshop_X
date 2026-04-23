---
created: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.0
project: VN-USV-SS-001
status: approved
scope: PORTFOLIO --ex (combined)
lead_product: V1-PATROL (semi-sub ISR, $3-6K)
variants: 10
variant_sequence: "V1→V2→N10→N7→V3→N4→N5→N8→N6→N9"
export: "2028+"
platform_reuse: "≥80% hull shared, ≥90% SW (ArduSub) shared"
design_paradigm: "STEALTH-CENTERED (low-observable autonomous maritime platform)"
physics_function: "Move autonomously through water with minimal detectability while collecting and transmitting information"
customer: "Bộ đội Biên phòng Việt Nam (Border Guard)"
ach_status: "GO (SHIFT 4/4 PASS, 1 MARGINAL — 2026-03-19)"
---

# Portfolio Planning — VN-USV-SS-001 Low-Observable Maritime Autonomous Platform

> **Physics-level function (Musk reframe):** "Move autonomously through water with minimal detectability while collecting and transmitting information"

> **FORGE status:** Job Map (63 outcomes) + Opportunity Landscape (Opp ≥8.0 = 15 underserved) + SHIFT GO + Validate/Trust/Cost/Flywheel complete. Strategy: DISRUPTIVE ($3-6K vs $500K-$5M imports).

---

## 1. Portfolio Overview

```
Price ($K)
    8 ┤                                                    ● N6-SURVEY
    7 ┤                                                ● N9-EXPORT
    6 ┤  ● V1-PATROL
    5 ┤          ● V3-RELAY          ● N8-GCS
    4 ┤              ● N5-SWARM
    3 ┤      ● V2-SURFACE    ● N4-DECOY    ● N7-TRAINER
    2 ┤
  0.5 ┤ ● N10-MAINT-KIT
      │
    0 ├──────────────────────────────────────────────────────────
      CONSUMABLE  SURFACE  SEMI-SUB   EXPENDABLE  MESH   GCS   CIVILIAN  EXPORT
      (L-1)       (L1)     (L1)       (L1)        (L1)  (L0)   (L2)      (L1)
```

### Layer Architecture

```
L2: New Markets   — N6-SURVEY (hydrographic/environmental, civilian)
L1: USV Line      — V1-PATROL, V2-SURFACE, V3-RELAY, N4-DECOY, N5-SWARM, N7-TRAINER, N9-EXPORT
L0: Infrastructure — N8-GCS-MODULE (standalone ground control for all variants)
L-1: Consumable   — N10-MAINT-KIT
```

### All 10 Products

| # | ID | Name | BOM | Price | Margin | Layer | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **PATROL** | $1.5-3K | $3-6K | 50-55% | L1 | Border patrol, semi-sub ISR, 12h endurance |
| 2 | **V2** | **SURFACE** | $1-2K | $2-4K | 50-55% | L1 | Daytime patrol, no ballast, simpler/faster |
| 3 | **N10** | **MAINT-KIT** | $50-100 | $200-500 | 75-80% | L-1 | Annual consumable per deployed USV |
| 4 | **N7** | **TRAINER** | $0.8-1.5K | $1.5-3K | 47-50% | L1 | Operator training, CUAV-SIM integration |
| 5 | **V3** | **RELAY** | $1.5-2.5K | $3-5K | 50-55% | L1 | Comms relay, extends border coverage |
| 6 | **N4** | **DECOY** | $0.8-1.5K | $1.5-3K | 47-50% | L1 | Expendable radar/visual decoy, reverse stealth |
| 7 | **N5** | **SWARM-NODE** | $1-2K | $2-4K | 50% | L1 | Cheap mesh network node, quantity play |
| 8 | **N8** | **GCS-MODULE** | $1-2.5K | $2-5K | 50-55% | L0 | Standalone GCS, sells to all users |
| 9 | **N6** | **SURVEY** | $2-4K | $4-8K | 50-55% | L2 | Hydrographic + environmental survey |
| 10 | **N9** | **EXPORT** | $2-3.5K | $4-7K | 50% | L1 | ASEAN coast guards, simplified V1 |

---

## 2. Variant Comparison Matrix

| Attribute | V1 PATROL | V2 SURFACE | N10 MAINT | N7 TRAINER | V3 RELAY | N4 DECOY | N5 SWARM | N8 GCS | N6 SURVEY | N9 EXPORT |
|---|---|---|---|---|---|---|---|---|---|---|
| **Mode** | Semi-sub + surface | Surface only | N/A | Surface (pool/harbor) | Semi-sub | Surface (expendable) | Surface | N/A (ground) | Semi-sub | Semi-sub |
| **LOA** | 2.5-4m | 2-3m | N/A | 1.5-2m (scaled) | 2.5-4m | 1.5-2.5m | 1.5-2m | N/A | 2.5-4m | 2.5-3.5m |
| **Endurance** | ≥12h | ≥8h | N/A | 2-4h | ≥12h | 4-8h | ≥8h | N/A | ≥12h | ≥10h |
| **Speed** | 3 kts cruise, 6 transit | 4 kts cruise, 8 transit | N/A | 2 kts | 3 kts | 4 kts | 3 kts | N/A | 2 kts | 3 kts |
| **Ballast** | Yes (depth control) | No | N/A | No | Yes | No | No | N/A | Yes | Yes |
| **Payload** | ISR camera | ISR camera | N/A | Training sensors | Comms relay | Radar reflector + IR | Mesh radio + basic cam | N/A | Sonar + water sensors | ISR camera |
| **Autonomy** | ArduSub L2-3 | ArduSub L2 | N/A | ArduSub L1-2 | ArduSub L2-3 | ArduSub L2 (one-way?) | ArduSub L2 | QGC + custom | ArduSub L2-3 | ArduSub L2-3 |
| **Comms** | LoRa + 4G | LoRa + 4G | N/A | WiFi (short range) | LoRa + 4G + relay TX | LoRa (minimal) | Mesh radio (inter-node) | Radio receiver + display | LoRa + 4G | LoRa + 4G |
| **Stealth** | High (semi-sub) | Low (surface visible) | N/A | N/A | High | **Negative** (maximize signature) | Medium | N/A | High | High |
| **Recovery** | Reusable | Reusable | N/A | Reusable | Reusable | Expendable/semi | Reusable | N/A | Reusable | Reusable |
| **Local content** | ≥50% proto, 75% prod | ≥60% | ≥95% | ≥70% | ≥50% | ≥60% | ≥60% | ≥80% | ≥50% | ≥60% |
| **Price** | $3-6K | $2-4K | $200-500 | $1.5-3K | $3-5K | $1.5-3K | $2-4K | $2-5K | $4-8K | $4-7K |

---

## 3. Điểm Khác Biệt

### V1-PATROL: "Tuần Tra Kín" (Covert Patrol)
**Unique:** Core product. Semi-submersible with depth control — only mast above water (minimal RCS, visual, IR). ISR camera + LoRa/4G telemetry. 12h endurance on LiFePO4 48V. ArduSub autopilot with waypoint following. Fail-safe: NC ballast valve = auto-surface on fault.
**Role:** Platform validation vehicle. If PATROL works → all variants are hull/payload deltas.
**WX advantage:** $3-6K vs $500K-$5M (international). 97% cost reduction. COTS + ACH approach.

### V2-SURFACE: "Tuần Tra Nổi" (Surface Patrol)
**Unique:** No ballast system = simpler, lighter, cheaper, faster. Surface-only operation. For daytime patrol where stealth is not critical. Faster transit speed (8 kts vs 6). Lower maintenance (no ballast pump/valves).
**Delta from V1:** Remove ballast system (-$500-1K), lighter hull, higher speed.

### N10-MAINT-KIT: "Bộ Bảo Trì USV"
**Unique:** Annual consumable: propeller set, shaft seals, anode replacements, bearing grease, BMS calibration check, hull patch kit, LoRa antenna gasket. Every deployed USV = 1 kit/year.

### N7-TRAINER: "USV Huấn Luyện" (Training USV)
**Unique:** Scaled-down (1.5-2m), simplified. For operator training in pools/harbors before deploying real V1. Short range (WiFi). Integrates with VN-CUAV-SIM as live training asset. Cheap enough to risk during training.
**Source:** [Hwang: consumption chain — before use] [WX: CUAV-SIM]

### V3-RELAY: "Trạm Chuyển Tiếp" (Communications Relay)
**Unique:** V1 hull + high-power radio relay payload instead of ISR camera. Extends LoRa/4G coverage for other USVs and shore units. Positions itself as floating comms tower. Critical for extending patrol range beyond single LoRa hop.
**Delta from V1:** Replace ISR payload with relay radio (+$0.5K), add solar panel for extended endurance.

### N4-DECOY: "Mồi Nhử" (Decoy)
**Unique:** **Reverse of V1 design philosophy.** Instead of minimizing signature → maximize it. Corner reflectors, IR emitter, engine noise generator. Draws attention/fire while real assets operate elsewhere. Expendable or semi-expendable (recover if undamaged).
**Source:** [Musk: first principles — detectability is an asset, not a liability]

### N5-SWARM-NODE: "Nút Bầy" (Swarm Node)
**Unique:** Cheap, minimal-sensor mesh network node. Multiple N5 units form distributed sensor grid covering large area. Each node: basic camera + mesh radio + GPS. AI at GCS aggregates all feeds. Quantity over individual capability. 10 nodes = $20-40K covers area that 1 premium USV ($500K) cannot.
**Source:** [Musk: 10×] [Hwang: non-consumption — can't afford $500K USVs, but can afford 10× $3K nodes]

### N8-GCS-MODULE: "Trạm Điều Khiển" (Ground Control Station)
**Unique:** Not a USV — standalone GCS hardware + software. Ruggedized tablet/laptop + radio receiver + QGroundControl + custom WX overlay. Sells separately to all USV variant operators. Integrates with VN-AICC (AICC as GCS terminal).
**Source:** [Hwang: consumption chain] [WX: VN-AICC cross-pollination]

### N6-SURVEY: "Khảo Sát" (Survey USV)
**Unique:** V1 hull + bathymetry sonar + water quality sensors (pH, turbidity, temperature). For hydrographic survey, environmental monitoring, aquaculture water quality. Non-defense market. Low-observable hull = advantage for undisturbed marine measurement.
**Source:** [Hwang: related job] [Musk: first principles — same hull, different purpose]

### N9-EXPORT: "Xuất Khẩu" (Export Variant)
**Unique:** Simplified V1 for ASEAN coast guards (Philippines, Indonesia, Thailand). English documentation, metric/imperial, simplified autonomy (L2 only), standard radio (no military-grade encryption). Lower cost through standardization.

---

## 4. Common Platform — Shared Components

| Component | V1 | V2 | N10 | N7 | V3 | N4 | N5 | N8 | N6 | N9 | Shared |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HDPE torpedo hull | ✓ | ✓s | ✗ | ✓s | ✓ | ✓s | ✓s | ✗ | ✓ | ✓ | **8/10** |
| ArduSub + Pixhawk | ✓ | ✓ | ✗ | ✓s | ✓ | ✓s | ✓s | ✗ | ✓ | ✓ | **8/10** |
| BLDC thrusters | ✓ | ✓ | ✗ | ✓s | ✓ | ✓s | ✓s | ✗ | ✓ | ✓ | **8/10** |
| LiFePO4 battery | ✓ | ✓ | ✗ | ✓s | ✓ | ✓s | ✓s | ✗ | ✓ | ✓ | **8/10** |
| Ballast system | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | **4/10** |
| LoRa + 4G comms | ✓ | ✓ | ✗ | WiFi | ✓ | LoRa | mesh | receiver | ✓ | ✓ | **6/10 base** |
| GCS software | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ (core) | ✓ | ✓ | **9/10** |
| ISR camera | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | basic | ✗ | ✗ | ✓ | **3/10** |
| Mast assembly | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | **4/10** |

### Reuse Summary

| Variant | HW Shared | SW Shared | NRE Savings |
|---|---|---|---|
| V1-PATROL (lead) | reference | reference | — |
| V2-SURFACE | 75% (no ballast) | 90% | 65% |
| N10-MAINT-KIT | 100% (spares) | N/A | 95% |
| N7-TRAINER | 50% (scaled) | 80% | 50% |
| V3-RELAY | 85% (diff payload) | 85% | 60% |
| N4-DECOY | 55% (simplified) | 70% | 45% |
| N5-SWARM-NODE | 50% (minimal) | 75% | 45% |
| N8-GCS-MODULE | 10% (radio only) | 60% (GCS SW) | 40% |
| N6-SURVEY | 80% (diff payload) | 80% | 55% |
| N9-EXPORT | 90% (simplified) | 90% | 70% |

**ArduSub + Pixhawk + HDPE hull = core cell shared across 8/10 products. GCS software 9/10.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

```
2026    Q2   Q3   Q4  │ 2027 Q1   Q2   Q3   Q4
───────────────────────┼──────────────────────────
V1-PATROL              │
  Lab demo █ Proto ████│ Sea trial █ ●
  V2-SURFACE           │
  Remove ballast █ ●   │
  N10-MAINT ●          │
                       │ N7-TRAINER ██ ●
                       │ V3-RELAY ██ ●
                       │    N4-DECOY ██ ●
                       │    N5-SWARM ███ ●
                       │         N8-GCS ██ ●
                       │              N6-SURVEY ██ ●
                       │                   N9-EXPORT █ ●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D [L5] |
|---|---|---|---|---|---|
| 1 | V1-PATROL | **Lab demo NOW** (gate 2026-05-09) | 6-9 months | Q1 2027 | $30-50K |
| 2 | V2-SURFACE | V1 hull proven | 3-4 wk delta | Q1 2027 | $5K |
| 3 | N10-MAINT-KIT | V1 BOM finalized | 1-2 wk | Q1 2027 | $1K |
| 4 | N7-TRAINER | V1 ArduSub proven | 4-6 wk | Q2 2027 | $8K |
| 5 | V3-RELAY | V1 sea trial pass | 4-6 wk | Q2 2027 | $8K |
| 6 | N4-DECOY | V1 hull proven | 4-6 wk | Q3 2027 | $6K |
| 7 | N5-SWARM-NODE | V1 comms proven + mesh SW | 6-8 wk | Q3 2027 | $12K |
| 8 | N8-GCS-MODULE | V1 GCS SW stable | 4-6 wk | Q3 2027 | $8K |
| 9 | N6-SURVEY | V1 proven + survey sensors | 6-8 wk | Q4 2027 | $12K |
| 10 | N9-EXPORT | V1 VN reference + export approval | 4-6 wk | Q4 2027 | $5K |
| | **Total NRE** | | | | **$95-115K** |

---

## 6. Phạm Vi Ứng Dụng

### By Customer Segment

| Segment | Variants | Qty/yr [L5] |
|---|---|---|
| Biên phòng (border patrol) | V1-PATROL, V2-SURFACE, V3-RELAY | 10-30 |
| Biên phòng (training) | N7-TRAINER | 5-10 |
| Biên phòng (ops support) | N8-GCS, N10-MAINT | = installed base |
| Navy (deception ops) | N4-DECOY, N5-SWARM | 10-30 |
| Hydrographic/environmental | N6-SURVEY | 5-15 |
| ASEAN coast guards | N9-EXPORT | 5-20 |

### By WX Ecosystem

| WX Product | VN-USV Role | Variant |
|---|---|---|
| **VN-CUAV-SIM** | Live USV target for C-UAV training | N7-TRAINER as live asset |
| **VN-AICC** | GCS terminal for USV fleet | N8-GCS integrates with AICC |
| **VN-XUONG-UUV** | XUONG deploys/recovers USV | V1 launched from XUONG work boat |
| **VN-AST-MSL-001** | Shared marine engineering (HDPE, corrosion) | Hull construction knowledge transfer |
| **TARGET-DRONE-001** | Air+sea autonomous pair | V1 (sea) + TARGET-DRONE (air) = combined ISR |
| **BB-01 LOMAH** | USV carries BB-01 sensors for at-sea scoring | Future integration concept |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection

| Year | V1 PATROL | V2 SURFACE | N10 MAINT | N7 TRAIN | V3 RELAY | N4 DECOY | N5 SWARM | N8 GCS | N6 SURVEY | N9 EXPORT | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2027 | $30K (6) | $10K (4) | $2K | $5K (2) | — | — | — | $5K (2) | — | — | **$52K** |
| 2028 | $60K (12) | $24K (8) | $5K | $12K (5) | $15K (4) | $8K (3) | $12K (4) | $10K (3) | $10K (2) | — | **$156K** |
| 2029 | $100K (20) | $40K (14) | $12K | $18K (8) | $25K (6) | $15K (6) | $30K (10) | $15K (5) | $30K (5) | $20K (4) | **$305K** |
| 2030 | $125K (25) | $50K (18) | $20K | $20K (8) | $30K (8) | $20K (8) | $40K (12) | $15K (5) | $40K (7) | $40K (8) | **$400K** |
| 2031 | $100K (20) | $40K (14) | $25K | $15K (6) | $25K (6) | $15K (6) | $35K (10) | $10K (3) | $40K (7) | $50K (10) | **$355K** |
| **5yr** | **$415K** | **$164K** | **$64K** | **$70K** | **$95K** | **$58K** | **$117K** | **$55K** | **$120K** | **$110K** | **$1,268K** |

### Revenue Mix

| Category | Products | 5yr | % |
|---|---|---|---|
| Core patrol (V1, V2) | PATROL + SURFACE | $579K | 46% |
| Mission variants (V3, N4, N5) | RELAY + DECOY + SWARM | $270K | 21% |
| Support (N7, N8, N10) | TRAINER + GCS + MAINT | $189K | 15% |
| New markets (N6, N9) | SURVEY + EXPORT | $230K | 18% |

### Comparison

| WX Price | International Price | Savings |
|---|---|---|
| V1-PATROL $3-6K | L3Harris $500K-2M | **99%+** |
| N5-SWARM 10× $3K = $30K | 1× premium USV $500K | **94%** with better coverage |

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-PATROL (lead) | $50K | $50K | — |
| V2-SURFACE | $12K | $4K | 67% |
| N10-MAINT-KIT | $2K | $1K | 50% |
| N7-TRAINER | $15K | $7K | 53% |
| V3-RELAY | $15K | $6K | 60% |
| N4-DECOY | $12K | $5K | 58% |
| N5-SWARM-NODE | $20K | $10K | 50% |
| N8-GCS-MODULE | $15K | $8K | 47% |
| N6-SURVEY | $20K | $9K | 55% |
| N9-EXPORT | $10K | $3K | 70% |
| **Total** | **$171K** | **$103K** | **40% avg** |

### Platform ROI
- V1 NRE = $50K
- Platform savings = $68K
- **Platform ROI: 136%**
- Revenue ROI: $50K → $1.27M = **2,436%** [L5]

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| V1-PATROL | Semi-sub depth control with ArduSub | HIGH | HIGH | NC ballast valve = fail-safe surface. Lab demo validates BEFORE full prototype. |
| V2-SURFACE | Limited tactical value without stealth | MED | LOW | Acceptable for daytime/training. Cheaper entry point. |
| N7-TRAINER | Market too small (VN border guard only) | MED | LOW | Dual-use: training + demo unit for customer acquisition. |
| V3-RELAY | LoRa relay range vs power budget | MED | MED | Solar panel + bigger battery. Or: 4G relay where available. |
| N4-DECOY | Expendable = lost hardware | MED | LOW | Semi-expendable: attempt recovery. $1.5-3K = acceptable loss rate. |
| N5-SWARM | Mesh networking SW complexity | HIGH | MED | Start with manual coordination (multiple GCS windows). Add mesh later. |
| N8-GCS | Competes with QGroundControl (free) | MED | MED | WX value-add = custom overlay for border patrol ops + AICC integration. |
| N6-SURVEY | Non-defense = different channel | MED | MED | Partner with survey company. WX provides USV, partner handles market. |
| N9-EXPORT | Export license for autonomous maritime vehicle | MED | HIGH | Coordinate with VN export authority early. Start with manual-control-only variant. |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|---|---|---|
| ArduSub semi-sub mode immature | CRITICAL | Lab demo ($140) validates before ANY investment. SHIFT condition #1. |
| Biên phòng has no formal requirement yet | HIGH | Build lab demo → demonstrate → create demand. Don't wait for RFP. |
| 8 active projects now = CEO bandwidth | CRITICAL | V1 lab demo is $140 + 30 days. Low investment to validate concept. Park if demo fails. |
| VN maritime autonomous vehicle regulations | MED | Operate within military jurisdiction initially. Civilian (N6) needs separate approval. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|---|---|---|---|
| D1 | Add to active projects | Tier 2 | 2026-04-09 | Was missing from active list |
| D2 | Physical gate reset | 2026-05-09 (30 days) | 2026-04-09 | Original 2026-04-17 overdue |
| D3 | 10-variant portfolio | ALL INCLUDE | 2026-04-09 | Full spectrum: patrol → training → swarm → export |
| D4 | V1-PATROL as lead | Confirmed | 2026-04-09 | Semi-sub = core differentiation |
| D5 | Sequence confirmed | V1→V2→N10→N7→V3→N4→N5→N8→N6→N9 | 2026-04-09 | Core → derivatives → new markets |

---

## --ex Success Criteria Check

| Criterion | Result |
|---|---|
| ≥3 new variant candidates from ≥2 lenses | **PASS** — 7 candidates from 3 lenses (Musk: N4,N5 / Hwang: N6,N7,N8,N9,N10 / Cross: N7,N8) |
| Layer 0 core mechanism identified | **PASS** — HDPE torpedo hull + ArduSub + BLDC thrusters = shared across 8/10 |
| ≥1 cross-pollination with WX product | **PASS** — N7 × CUAV-SIM, N8 × AICC, V1 × VN-XUONG (deploy) |
| Revenue model calculated | **PASS** — $1.27M / 5yr |
| Platform ROI calculated | **PASS** — 136% |

---

## Cross-Product Ecosystem

```
                     VN-USV-SS-001 (10 products)
                              │
     ┌──────────┬─────────┬───┼────┬──────────┬──────────┐
     ▼          ▼         ▼   ▼    ▼          ▼          ▼
  CUAV-SIM   VN-XUONG   AICC  AST  TARGET    BB-01     Civilian
  N7 live    deploys    N8→   hull  DRONE     future    N6-SURVEY
  target     V1 from    AICC  tech  air+sea   USV-      hydro/
  + C-USV    work boat  GCS   share pair      mounted   enviro
  training                                    scoring
```

**USV as MẮT CỦA ĐỒN (Eyes of the Station)** — value is information, not force. $3-6K per "eye" enables distributed persistent surveillance that border patrol cannot afford with manned boats.

---

*Portfolio Planning v1.0 | VN-USV-SS-001 Low-Observable Maritime Autonomous Platform | Combined --portfolio --ex | 2026-04-09*
