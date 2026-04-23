---
created: 2026-04-09
type: ecosystem-map
version: v1.0
project: IRONMESH
status: active
updates: quarterly (or when new product added / extraction triggered)
---

# IRONMESH Ecosystem Map v1.0

## 1. WX Product Ecosystem — The Closed Loop

```
                    ┌─────────────────────────────────────────────────┐
                    │              VN-AICC (CORTEX Terminal)           │
                    │     CDM Protocol hub — all products report here  │
                    │     Subscription model: $7.7M / 5yr [L5]        │
                    └──────┬──────────┬──────────┬──────────┬─────────┘
                           │          │          │          │
                    ┌──────▼───┐ ┌────▼────┐ ┌──▼───┐ ┌────▼────┐
                    │ BB-01    │ │VN-CUAV  │ │VN-AST│ │TARGET   │
                    │ LOMAH    │ │-SIM     │ │-MSL  │ │DRONE    │
                    │(measure) │ │(train)  │ │(sea  │ │(air     │
                    │          │ │         │ │target│ │target)  │
                    └────┬─────┘ └────┬────┘ └──┬───┘ └────┬────┘
                         │            │         │          │
                         └──────┬─────┘         └────┬─────┘
                                │                    │
                    ┌───────────▼────────┐  ┌────────▼─────────┐
                    │  HYBRID-BRIDGE     │  │  Target Ecosystem │
                    │  (sim ↔ live fire  │  │  (sea + air)      │
                    │   scoring bridge)  │  │  deploy/recover:  │
                    └────────────────────┘  │  VN-XUONG-UUV     │
                                           └───────────────────┘
```

### The Training Loop (clockwise)

```
1. TRAIN    →  VN-CUAV-SIM (simulator): gunner practices against virtual targets
                    │
2. TEST     →  Live fire against TARGET-DRONE (air) + VN-AST (sea)
                    │
3. MEASURE  →  BB-01 LOMAH scores impacts on targets
                    │
4. CORRELATE → HYBRID-BRIDGE compares sim performance ↔ live fire performance
                    │
5. ANALYZE  →  VN-AICC aggregates AAR data across all sessions
                    │
6. IMPROVE  →  Insights feed back to training scenarios (→ step 1)
```

**This closed loop is WX's competitive moat.** No competitor offers sim-to-live correlation for Vietnamese military training. [L4-ESTIMATE]

---

## 2. Cross-Product Connection Matrix

| From → To | BB-01 | CUAV-SIM | VN-AST | TARGET-DRONE | VN-AICC | VN-XUONG | VN-MGM |
|---|---|---|---|---|---|---|---|
| **BB-01** | — | Scoring data via HYBRID-BRIDGE | V5-NAVAL mounts on AST targets | Scoring data | CDM telemetry | — | — |
| **CUAV-SIM** | HYBRID-BRIDGE AAR correlation | — | Sim scenarios model AST targets | Sim scenarios model drones | AAR data feed | CTF shared w/ V9-TRAIN | WEAPON-MOD cradle interface |
| **VN-AST** | BB-01 sensors mount on targets | Sim target model | — | Sea+air target pair | CDM telemetry | V7-MULTI deploys/recovers AST | — |
| **TARGET-DRONE** | BB-01 scores aerial hits | Sim target model | Sea+air target pair | — | CDM telemetry | — | — |
| **VN-AICC** | Receives scoring | Receives AAR | Receives telemetry | Receives telemetry | — | Receives telemetry | — |
| **VN-XUONG** | — | CTF shared framework | Deploy/recover | — | CDM telemetry | — | — |
| **VN-MGM** | — | WEAPON-MOD integration | — | — | — | — | — |

### Connection Density

| Product | Connections | Role |
|---|---|---|
| **VN-AICC** | 6 inbound | Hub (receives from all) |
| **VN-CUAV-SIM** | 5 bidirectional | Training core |
| **BB-01 LOMAH** | 4 outbound | Measurement engine |
| **VN-AST-MSL-001** | 4 bidirectional | Sea target platform |
| **TARGET-DRONE-001** | 3 bidirectional | Air target platform |
| **VN-XUONG-UUV** | 3 bidirectional | Logistics/deployment |
| **VN-MGM** | 1 bidirectional | Peripheral (weapon mount) |

---

## 3. Shared Module Map

### Currently Shared (already in ≥2 products)

| Module | Products | Status |
|---|---|---|
| **V-SMASH Ballistics Engine** | VN-CUAV-SIM (core), future: TARGET-DRONE | Code exists in CUAV-SIM. Not yet extracted as library. |
| **CTF (Common Training Framework)** | VN-CUAV-SIM, VN-XUONG V9-TRAIN | Unity codebase shared. Extraction triggered. |
| **3D Visualization (Unity)** | VN-CUAV-SIM, VN-XUONG V9-TRAIN | Via CTF. Mature. |

### Future Shared (extraction not yet triggered)

| Module | First Builder | Future Consumers | Trigger Condition |
|---|---|---|---|
| **CDM Protocol** | VN-AICC (defines) | All 7 products | VN-AICC Phase 3 resume + BB-01 or CUAV-SIM field deploy |
| **Scoring Data Format** | BB-01 (defines) | CUAV-SIM, TARGET-DRONE, VN-AICC | BB-01 Phase 2 concept → scoring spec stable |
| **HYBRID-BRIDGE Protocol** | Joint: CUAV-SIM leads | BB-01, TARGET-DRONE, VN-AICC | BB-01 + CUAV-SIM both reach Phase 3 |
| **AAR Data Schema** | VN-CUAV-SIM (defines) | TARGET-DRONE, VN-AICC | CUAV-SIM Phase 3 AAR implementation |
| **Telemetry Format** | Per product | VN-AICC (aggregates) | Any product reaches field deployment |

---

## 4. Extraction Trigger Log

Track extraction threshold approach. **Review quarterly.**

| Module | Condition 1: ≥2 products in production? | Condition 2: Code duplication measurable? | Condition 3: Interface stable ≥1 release? | Condition 4: CEO judges extract < duplicate? | Status |
|---|---|---|---|---|---|
| V-SMASH | ✗ (only CUAV-SIM) | N/A | N/A | N/A | **Not triggered** |
| CTF / 3D Viz | ✅ (CUAV-SIM + XUONG V9) | ✅ (shared repo) | ✗ (still evolving) | TBD | **Approaching** — monitor |
| CDM Protocol | ✗ (0 products deployed) | N/A | N/A | N/A | **Not triggered** |
| Scoring | ✗ (BB-01 not built yet) | N/A | N/A | N/A | **Not triggered** |
| AAR | ✗ (CUAV-SIM not built yet) | N/A | N/A | N/A | **Not triggered** |
| Fire Control | ✗ (0 products) | N/A | N/A | N/A | **Not triggered** |
| C2 (CORTEX) | ✗ (VN-AICC paused) | N/A | N/A | N/A | **Not triggered** |

**Next review: Q3 2026** (after BB-01 prototype, CUAV-SIM prototype progress)

---

## 5. Interface Spec Ownership

**Rule:** The product that builds a module FIRST owns the interface spec. Second consumer adapts or negotiates through IRONMESH governance (CEO decision).

| Interface Spec | Owner Product | Define When | Current Status |
|---|---|---|---|
| Scoring Data Format | BB-01 | BB-01 Phase 2 | ⏳ Pending — BB-01 in Phase 1 |
| HYBRID-BRIDGE Protocol | VN-CUAV-SIM (lead) + BB-01 | Both at Phase 3 | ⏳ Pending — both in Phase 1-2 |
| CDM Message Format | VN-AICC | VN-AICC Phase 3 resume | ⏳ Pending — AICC paused |
| AAR Data Schema | VN-CUAV-SIM | CUAV-SIM Phase 3 | ⏳ Pending — CUAV-SIM in Phase 2 |
| V-SMASH API | VN-CUAV-SIM | When TARGET-DRONE needs ballistics | ⏳ Pending — TARGET-DRONE Phase 0 |
| Target Telemetry | VN-AST-MSL-001 | VN-AST Phase 4 | ⏳ Pending — AST in Phase 3 |
| UUV Telemetry | VN-XUONG-UUV | VN-XUONG Phase 3 | ⏳ Pending — XUONG in Phase 2 |
| Weapon Mount Interface | VN-MGM | VN-MGM Phase 2 | ⏳ Pending — MGM Phase 0 |

---

## 6. Revenue Architecture — How IRONMESH Generates Value

IRONMESH does not generate revenue directly. It generates value through:

### 6.1 Cost Reduction (Internal)

| Without Platform | With Platform (at scale) | Savings |
|---|---|---|
| Each product: 100% development effort | Each product: 7-50% unique development [L4-ESTIMATE] | 50-93% per product |
| 7 separate codebases | Shared modules + product-specific delta | Maintenance cost ÷ N products |
| No cross-product data | Unified AAR + scoring across products | New capability (HYBRID-BRIDGE) |

### 6.2 Revenue Enablement (External)

| Revenue Stream | Enabled By | Projected [L5] |
|---|---|---|
| **VN-AICC Subscription** | CDM + C2 + AAR aggregation | $7.7M / 5yr |
| **HYBRID-BRIDGE Premium** | Scoring + AAR cross-correlation | Included in CUAV-SIM CORTEX ($300K+ variant) |
| **Cross-product Bundle Pricing** | Ecosystem integration | 15-25% premium vs standalone [L5-ASSUMPTION] |
| **Export Licensing (2028+)** | Proven integrated ecosystem | TBD |

### 6.3 Compound Effect

```
Products deployed:     1    →    2    →    3    →    5    →    7
Platform reuse value:  0%   →   30%  →   50%  →   70%  →   90%
Marginal dev cost:    100%  →   70%  →   50%  →   30%  →   10%

[L5-ASSUMPTION — based on archived project analysis, not field data]
```

**The compound curve only activates after ≥2 products are in production.** Before that, IRONMESH is pure cost (interface spec effort). This is why Product-First is correct — don't invest in platform until the compound curve can start.

---

## 7. Governance Model

### 7.1 IRONMESH Reviews

| Review | Frequency | Content | Owner |
|---|---|---|---|
| **Extraction Trigger Check** | Quarterly | Review §4 trigger log. Any module approaching threshold? | CEO |
| **Interface Conflict Resolution** | When triggered | Product A's interface breaks Product B's assumption | CEO (Core decision) |
| **Ecosystem Map Update** | When project added/removed/archived | Update §1-§2 connections | CEO + AI (Offload) |
| **Reuse Metrics** | Post-deployment | Actual vs projected reuse % | CEO |

### 7.2 Decision Authority (COD)

| Decision | Classification | Who |
|---|---|---|
| Extract module to shared platform | **Core** | CEO — requires judgment on timing + effort |
| Define interface spec | **Offload** | AI drafts, CEO reviews |
| Update ecosystem map | **Offload** | AI updates, CEO validates |
| Resolve interface conflict between products | **Core** | CEO — affects product architecture |
| Archive/remove module from roadmap | **Core** | CEO — strategic direction |

---

## 8. Risk Assessment

| Risk | Impact | Likelihood | Fallback |
|---|---|---|---|
| **Fork divergence** — products develop incompatible interfaces before extraction | High — retrofit cost 3-5× | Medium | Define interface SPEC (not code) early. Spec is cheap. |
| **Premature extraction** — extract module before interface stabilizes | Medium — wasted effort | Low (Product-First guards against this) | Extraction trigger rules require stable interface |
| **Solo engineer bottleneck** — CEO cannot maintain ecosystem governance + product delivery | High — ecosystem degrades | High | Minimum viable governance: quarterly 30-min review only |
| **Compound curve never activates** — products ship too slowly for reuse to matter | High — IRONMESH = waste | Medium | Product-First means zero platform investment wasted |
| **VN-AICC CM4 blocker** — if AICC never ships, CDM hub doesn't exist | Medium — products work standalone | Medium | Each product has standalone mode. AICC is enhancement, not dependency. |

---

## Appendix: IRONMESH Project Disposition Recommendation

**IRONMESH should move from `1_Projects/` to `2_Areas/FORGE — Product Strategy/IRONMESH/`.**

Rationale:
- Not a project (no deadline, no "done" criteria, no Pahl-Beitz phase progression)
- Is a permanent governance artifact (lives as long as WX products exist)
- Belongs in FORGE (product strategy layer) alongside Portfolio and Technology-Roadmap
- Already has extensive docs in `2_Areas/FORGE — Product Strategy/IRONMESH/`

Action: CEO decides — keep as project or move to Area.
