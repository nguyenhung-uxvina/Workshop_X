---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/ach, #topic/forge]
skill: forge-scout
scope: Workshop X full portfolio
---

# ACH Opportunity Matrix — Workshop X Portfolio
## forge-scout Output | Date: 2026-03-20

**Input:** forge-job-map (VN-12.7MM-SIM, 68 outcomes) + 7 active projects
**Scope:** ALL products scanned — no confirmation bias

---

# 1. ACH OPPORTUNITY MATRIX

## 1.1 VN-12.7MM-SIM — 12.7mm Gunnery Trainer (Phase 3, Tier 2)

| Sub-function | Current Solution | ACH Potential | Rationale | Outcome Link |
|-------------|-----------------|:-------------:|-----------|-------------|
| SF: Target tracking scoring | Rule-based hit/miss | **HIGH** | ML trajectory analysis → per-shot feedback. Data: encoder + ballistics. I-08 variant. | O-38 (9.4) |
| SF: Gunner weakness diagnosis | Instructor judgment | **HIGH** | AI pattern recognition across sessions → competency heatmap. Replaces expert HLV. | O-06 (8.0), O-65 (8.0) |
| SF: Adaptive difficulty | Fixed scenario presets | **HIGH** | Real-time AI adjusts target speed/count based on performance. No HW change. | O-45 (8.4) |
| SF: Sub-skill drill generation | Manual scenario creation | **HIGH** | AI identifies weak sub-skill → auto-generates targeted drill. Pure SW. | O-48 (9.0) |
| SF: Training report generation | Manual data entry | **HIGH** | AI aggregates per-session data → MoD-format PDF. Zero HW cost. | O-51 (8.8) |
| SF: Qualification prediction | Not possible today | **HIGH** | ML on ≥20 sessions → predict live-fire pass/fail. Unique capability. | O-68 (8.4) |
| SF: Mount resistance control | Magnetic brake (HW) | **LOW** | Physical force — AI CANNOT compensate. [[ACH Boundary Rule]] | O-27 (9.6) |
| SF: Recoil impulse | Pneumatic cylinder (HW) | **LOW** | Physical force — AI CANNOT compensate. | O-62 (10.0) |
| SF: Visual rendering | RTX 3060 GPU | **LOW** | Real-time rendering = HW-bound. No AI shortcut. | — |

**Summary:** 6 HIGH (all software/AI), 3 LOW (all physical). ACH = I-08 variant overlay, not base I-01 change.

## 1.2 VN-USV-SS-001 — Semi-Sub Autonomous USV (Phase 0, Tier 2)

| Sub-function | Current Solution | ACH Potential | Rationale | Notes |
|-------------|-----------------|:-------------:|-----------|-------|
| SF: Navigation & path planning | Military INS + DP ($10K+) | **HIGH** | ArduSub + Pixhawk ($300). 97% cost reduction. SHIFT GO decided. | ACH GO 2026-03-19 |
| SF: Depth control | Precision depth sensor + PID | **HIGH** | ArduSub PID + pressure sensor ($20). Commodity HW + SW. | Lab demo $140 |
| SF: Obstacle avoidance | Expensive sonar ($5K+) | **HIGH** | Camera + ML object detection on Jetson ($200). | Future: LP-1 YOLO |
| SF: Station keeping | DP system ($10K+) | **HIGH** | GPS + ArduSub waypoint hold. Commodity. | Proven in hobby ROV |
| SF: Ballast control | Precision servo valve ($500+) | **MED** | NC solenoid ($30) + software timing. Level 2 fallback = auto-surface. | Safety-critical |
| SF: Hull structural integrity | — | **LOW** | Physical HDPE hull. No AI role. | Manufacturing |
| SF: Propulsion | BLDC + ESC | **LOW** | Commodity hardware. AI optimizes endurance via path planning only. | — |

**Summary:** 4 HIGH + 1 MED (all autonomy/navigation), 2 LOW (physical). ACH IS the product — not a variant.

## 1.3 BB-01 LOMAH — Hit/Miss Detection (Phase 1, Tier 2)

| Sub-function | Current Solution | ACH Potential | Rationale | Notes |
|-------------|-----------------|:-------------:|-----------|-------|
| SF: Impact signal classification | Threshold comparator (analog) | **HIGH** | ML classifier on MCU → distinguish hit vs miss vs noise. Handles edge cases threshold misses. | Core value prop |
| SF: Multi-sensor fusion | Single piezo channel | **MED** | Multi-channel piezo array + AI source localization → impact position (not just hit/miss). | Phase 2+ |
| SF: Environmental noise rejection | Bandpass filter (HW) | **HIGH** | Adaptive filter via DSP/ML → rejects wave/engine noise without fixed passband. | Sea state variability |
| SF: Charge amplification | LM358/TL072 (analog) | **LOW** | Physics-bound: charge→voltage is linear electronics. No AI role. | Hard constraint |
| SF: RF transmission | LoRa 433MHz | **LOW** | Commodity radio. AI optimizes packet scheduling at most. | — |
| SF: Target hit location | Not in scope (hit/miss only) | **HIGH** | ML on piezo array → triangulate impact position. Major upgrade path. | Future: BB-02 |

**Summary:** 3 HIGH + 1 MED (all signal processing/classification), 2 LOW (analog/radio). ACH = ML classifier on commodity piezo → replaces expensive dedicated LOMAH systems ($50K+ imported).

## 1.4 VN-AST-MSL-001 — Towed Radar Target (Phase 3, Tier 1)

| Sub-function | Current Solution | ACH Potential | Rationale | Notes |
|-------------|-----------------|:-------------:|-----------|-------|
| SF: Reflect radar waves | Trihedral corner reflector (passive) | **LOW** | Passive physics — no AI role. RCS = geometry. | Core function |
| SF: Buoyancy | Foam-filled HDPE | **LOW** | Material science — no AI role. | — |
| SF: Stability | Hull form + ballast | **LOW** | Hydrostatics — no AI role. | — |
| SF: Position reporting | GPS + LoRa | **LOW** | Commodity tracker ($50). No AI needed. | Simple telemetry |
| SF: Health monitoring | None currently | **MED** | IoT sensor (water ingress, tilt) + cloud dashboard → predictive maintenance. Low priority. | Future: fleet management |
| SF: Deployment optimization | Manual crew procedure | **LOW** | Procedural — AI adds little to physical boat operations. | — |

**Summary:** 0 HIGH, 1 MED, 5 LOW. **Mostly passive/mechanical product — minimal ACH opportunity.** This is correct: not every product benefits from ACH.

## 1.5 VN-XUONG-UUV — UUV Deployment Vessel (Phase 2, Tier 1)

| Sub-function | Current Solution | ACH Potential | Rationale | Notes |
|-------------|-----------------|:-------------:|-----------|-------|
| SF: LARS control | Manual electric winch + VFD | **MED** | Computer vision for UUV capture alignment. Reduces crew skill needed. Future. | DG-gated |
| SF: Station keeping | Manual helm | **MED** | GPS + autopilot for station keep during LARS ops. Existing marine autopilot ($500-1K). | Not core product |
| SF: UUV tracking | Tether telemetry | **LOW** | Wired tether = reliable data. No AI needed for position. | Tether is the solution |
| SF: Navigation | Manual helm + GPS | **LOW** | 8m vessel, 3 crew — manual operation adequate. | Cost < benefit |
| SF: Structural | Aluminum 5083 hull | **LOW** | Physical fabrication. No AI role. | — |

**Summary:** 0 HIGH, 2 MED (future automation), 3 LOW. **Support vessel — ACH value is in the UUV it deploys, not the vessel itself.**

---

# 2. CROSS-PRODUCT SYNERGY MAP

## 2.1 Synergy Graph

```
                    COMPUTER VISION / ML INFERENCE
                    ┌────────────────────────────┐
                    │                            │
        ┌───────────┤  Jetson Orin Nano ($200)   ├───────────┐
        │           │  LP-1: YOLOv8 training     │           │
        │           └────────────┬───────────────┘           │
        │                        │                           │
        ▼                        ▼                           ▼
┌──────────────┐  ┌──────────────────────┐  ┌──────────────────────┐
│ VN-USV-SS-001│  │ VN-12.7MM-SIM I-08   │  │ BB-01 LOMAH          │
│ Obstacle det.│  │ Pose estimation      │  │ Impact classification│
│ Target recog.│  │ Gunner form analysis │  │ (MCU, not Jetson)    │
└──────────────┘  └──────────────────────┘  └──────────────────────┘
     HIGH               HIGH                    HIGH (different HW)
```

```
                    DATA PIPELINE / LOGGING
                    ┌────────────────────────────┐
                    │  Session data → cloud/local │
                    │  NLM + Galaxy integration   │
                    └─┬──────────┬──────────┬────┘
                      │          │          │
                      ▼          ▼          ▼
               VN-12.7MM    BB-01      VN-USV
               Training     Hit/miss   Mission
               sessions     records    logs
               → I-08 AI    → stats    → autonomy
```

```
                    HDPE FABRICATION
                    ┌────────────────────────────┐
                    │  HDPE welding + foam fill   │
                    │  VN local supplier network  │
                    └─┬──────────────────────┬───┘
                      │                      │
                      ▼                      ▼
               VN-AST-MSL-001         VN-USV-SS-001
               Towed target hull      Semi-sub hull
               (foam-filled HDPE)     (HDPE torpedo form)
```

## 2.2 Cross-Product Model Reuse

| Model Type | Products Served | Reuse Multiplier | Platform | Status |
|-----------|----------------|:----------------:|----------|--------|
| **YOLOv8 detection** | VN-USV (obstacle), VN-12.7MM I-08 (target tracking analysis) | **2×** | Jetson Orin Nano | LP-1 (planned, $200) |
| **Pose estimation** | VN-12.7MM I-08 (gunner form coaching) | 1× | Jetson Orin Nano | LP-3 (planned, $0) |
| **ArduSub autonomy** | VN-USV (core), VN-XUONG (future autopilot) | **2×** | Pixhawk | LP-2 (planned, $140) |
| **Signal classifier (MCU)** | BB-01 (impact detection) | 1× | STM32/ESP32 | Not started |
| **Session analytics** | VN-12.7MM I-08, BB-01 (hit stats) | **2×** | PC / cloud | Not started |
| **HDPE welding process** | VN-AST-MSL-001, VN-USV-SS-001 | **2×** | Manufacturing | Weld test 2026-04-07 |

**Total compound:** 6 model types × avg 1.7× reuse = **10 product-applications from 6 investments.**

---

# 3. SHIFT QUICK-PASS (30-second pre-screen)

| Product | Sub-function | S? | H? | I? | F? | T? | Verdict |
|---------|-------------|:--:|:--:|:--:|:--:|:--:|---------|
| VN-12.7MM I-08 | AI coaching | ✅ | ✅ | ✅ | ✅ | ⚠️ | **→ forge-shift** (already done conceptually via forge-job-map) |
| VN-USV-SS-001 | Autonomous nav | ✅ | ✅ | ✅ | ✅ | ⚠️ | **→ forge-shift DONE** (ACH GO 2026-03-19) |
| BB-01 | ML impact classifier | ✅ | ✅ | ✅ | ✅ | ? | **→ forge-shift RECOMMENDED** |
| VN-AST-MSL-001 | Health monitoring | ❌ | ❌ | ❌ | — | — | SKIP — no ACH opportunity |
| VN-XUONG-UUV | LARS vision | ⚠️ | ✅ | ⚠️ | ✅ | ? | DEFER — low priority, DG-gated |

**Legend:** S=Sensor data exists, H=Hardware commodity, I=Information advantage, F=Fallback possible, T=Trust buildable

---

# 4. CEO STRATEGIC FILTER

## Portfolio ACH Heat Map

| Product | ACH Opportunities | Phase | Capacity Need | Compound Value |
|---------|:-----------------:|-------|:-------------:|:--------------:|
| **VN-12.7MM-SIM I-08** | 6 HIGH | P3 (base ready) | SW only | ★★★★★ (data flywheel) |
| **VN-USV-SS-001** | 4 HIGH + 1 MED | P0 | HW + SW | ★★★★ (autonomy platform) |
| **BB-01 LOMAH** | 3 HIGH + 1 MED | P1 | DSP + ML | ★★★ (signal processing) |
| VN-XUONG-UUV | 0 HIGH + 2 MED | P2 | Future | ★ (support vessel) |
| VN-AST-MSL-001 | 0 HIGH + 1 MED | P3 | Minimal | ★ (passive product) |

## Recommended Top 3 for forge-shift Assessment

| Priority | Product × ACH | Why Now | CEO Capacity | Cost |
|----------|--------------|---------|:------------:|:----:|
| **#1** | VN-12.7MM-SIM I-08 (AI coaching) | Base I-01 captures data from day 1. SW-only ACH. 7 outcomes Opp ≥8.0. Competitor gap: ZERO AI coaching in market. | Low (SW after I-01 HW done) | $0 HW, SW NRE |
| **#2** | VN-USV-SS-001 (autonomous nav) | SHIFT GO already decided. Lab demo $140. 97% cost reduction. Biên phòng demand. | Medium (new product) | $140 demo |
| **#3** | BB-01 LOMAH (ML classifier) | Phase 1 just starting. ML on commodity piezo replaces $50K+ imported LOMAH. Needs forge-shift assessment. | Medium (parallel to P1) | $0 (DSP on existing MCU) |

## ACH Thesis Evidence Map

These 3 products provide thesis chapters:

| Product | Thesis Chapter | ACH Pattern | Evidence |
|---------|---------------|-------------|---------|
| VN-12.7MM-SIM | Ch 6: ACH in Training | AI coaching on commodity trainer | I-01 data → I-08 compound |
| VN-USV-SS-001 | Ch 7: ACH in Autonomy | ArduSub replaces military DP | Lab demo → field validation |
| BB-01 LOMAH | Ch 9: ACH in Sensing | ML classifier on commodity piezo | Bench test → field comparison |

---

# 5. ACTIONS

| # | Action | Owner | Skill | Priority |
|---|--------|-------|-------|----------|
| 1 | Run `/forge-shift` for BB-01 LOMAH (ML classifier) | CEO + AI | forge-shift | **HIGH** — only un-assessed ACH opportunity |
| 2 | Confirm ACH thesis chapter mapping | CEO (Core) | — | MED |
| 3 | Run `/forge-job-map` for VN-USV-SS-001 | CEO + AI | forge-job-map | MED — demand-side input before Phase 1 |
| 4 | Start LP-1 (YOLOv8 on Jetson, $200) — unlocks 2× reuse | CEO (Core) | — | **HIGH** — physical action |
| 5 | Run `/forge-job-map` for BB-01 LOMAH | CEO + AI | forge-job-map | MED — after forge-shift |

---

## CEO: Confirm Top 3 ACH priorities and next action?

*forge-scout output — Workshop X Portfolio ACH Opportunity Matrix v1.0*
