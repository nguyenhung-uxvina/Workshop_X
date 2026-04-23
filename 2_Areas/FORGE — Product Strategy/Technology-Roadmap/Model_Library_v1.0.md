# Workshop X — AI Model Library & Component Reuse Matrix
## forge-library Output | v1.0

**Date**: 2026-03-20
**Status**: PROSPECTIVE — no validated models yet (all pre-Stage 1)
**R5 Status**: DORMANT (0 transfers, 0 validated models)

---

# 1. MODEL LIBRARY DASHBOARD

| Model ID | Name | Type | Source Product | Validated | Products Target | Transfers | Status |
|----------|------|------|---------------|:---------:|:--------------:|:---------:|--------|
| WX-CLS-001 | Gunner Coaching Engine | PRD | VN-12.7MM-SIM I-08 | ❌ Pre-dev | 4 (I-01/02/06/08) | 0 | PLANNED |
| WX-CLS-002 | Impact Signal Classifier | CLS | BB-01 LOMAH | ❌ Pre-dev | 2 (BB-01, BB-02) | 0 | PLANNED |
| WX-DET-001 | Obstacle Detection (Marine) | DET | VN-USV-SS-001 | ❌ Pre-dev | 2 (USV, XUONG future) | 0 | PLANNED |
| WX-CTL-001 | Semi-Sub Depth Controller | CTL | VN-USV-SS-001 | ❌ Pre-dev | 1 (USV) | 0 | PLANNED |
| WX-PRD-001 | Session Analytics Engine | PRD | VN-12.7MM-SIM I-08 | ❌ Pre-dev | 2 (12.7MM, BB-01) | 0 | PLANNED |
| WX-TRK-001 | Gunner Pose Estimator | TRK | VN-12.7MM-SIM I-08 | ❌ Pre-dev | 1 (12.7MM I-08) | 0 | PLANNED |

**Totals:**
- Library size: **6 planned** (0 production, 0 experimental)
- Total transfers: **0** this quarter (target: 1)
- Compound multiplier: 12 product-instances / 6 models = **2.0×** (potential)
- **R5: DORMANT** → activates when first model reaches Stage 1

---

# 2. MODEL LIBRARY ENTRIES

## WX-CLS-001: Gunner Coaching Engine

| Field | Value |
|-------|-------|
| Model ID | WX-CLS-001 |
| Name | Gunner Coaching Engine (miss diagnosis + weakness ID + adaptive difficulty) |
| Type | Prediction / Classification (hybrid) |
| Source product | VN-12.7MM-SIM I-08 (HỒNG HẢI MASTER) |
| Created | Not yet — planned after ≥200 I-01 sessions collected |
| Validation stage | Pre-development |
| SHIFTO | S=PASS, H=PASS, I=PASS, F=PASS, T=MARGINAL, O=HIGH (7/20) |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | Per-shot data: encoder (az/el), pressure transducer (force), trigger timing, ballistics result |
| Output | Miss root cause (enum: lead, elevation, timing, tracking), weakness heatmap, difficulty recommendation |
| Latency | ≤5 seconds for diagnosis (O-38 pass criteria) |
| Accuracy | ≥80% correct diagnosis (ACH-1 validation) |
| Model size | <50 MB (runs on existing PC, no GPU inference needed) |
| Compute | i5/i7 CPU — no Jetson required |

**Outcomes addressed:** O-38 (9.4), O-48 (9.0), O-51 (8.8), O-68 (8.4), O-45 (8.4), O-65 (8.0), O-06 (8.0)

**Reuse potential:**

| Target Product | Sub-function | Transfer Effort | Readiness |
|---------------|-------------|:--------------:|:---------:|
| VN-12.7MM-SIM I-02 (CTR) | Same coaching, containerized | Direct (same HW) | 5 |
| VN-12.7MM-SIM I-06 (TAC) | Multi-station coaching | Fine-tune (3-gunner context) | 3 |
| BB-01 LOMAH | Session analytics (hit/miss trends) | Retrain (different sensor modality) | 2 |

**Data requirements:**
- Training: ≥200 labeled sessions (I-01 fleet, ~2-3 months operation)
- Labels: HLV marks correct miss reason per engagement (ground truth)
- $50 pressure transducer = only added HW for all 7 outcomes

---

## WX-CLS-002: Impact Signal Classifier

| Field | Value |
|-------|-------|
| Model ID | WX-CLS-002 |
| Name | Piezo Impact Signal Classifier (hit/miss/noise) |
| Type | Classification |
| Source product | BB-01 LOMAH |
| Created | Not yet — planned after lab drop test ($50) |
| Validation stage | Pre-development |
| SHIFTO | S=PASS, H=STRONG PASS, I=PASS, F=PASS (Level 2), T=MARGINAL |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | ADC waveform buffer: 1 kHz × 50 ms window = 50 samples per event |
| Output | Classification: HIT / MISS / NOISE (+ confidence 0-1) |
| Latency | ≤10 ms inference on MCU |
| Accuracy | ≥90% (target), ≥85% (minimum for Stage 1 gate) |
| Model size | <100 KB (TinyML on STM32H743) |
| Compute | STM32H743 (ARM Cortex-M7, 480 MHz) — no external accelerator |

**Reuse potential:**

| Target Product | Sub-function | Transfer Effort | Readiness |
|---------------|-------------|:--------------:|:---------:|
| BB-02 (future impact localization) | Same classifier + multi-channel array | Fine-tune (add location output) | 3 |
| VN-AST-MSL-001 | Impact detection on towed target (future upgrade) | Retrain (HDPE vs steel substrate) | 2 |

---

## WX-DET-001: Obstacle Detection (Marine)

| Field | Value |
|-------|-------|
| Model ID | WX-DET-001 |
| Name | Marine Obstacle Detection (YOLOv8 on Jetson) |
| Type | Detection |
| Source product | VN-USV-SS-001 |
| Created | Not yet — planned LP-1 (2 weeks, $200 Jetson) |
| Validation stage | Pre-development |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | Camera 640×480 RGB, 30 fps |
| Output | Bounding boxes: boat, buoy, debris, shore (+ confidence) |
| Latency | ≤100 ms per frame |
| Accuracy | mAP50 ≥0.70 |
| Model size | ~10 MB (YOLOv8n) |
| Compute | Jetson Orin Nano ($200) |

**Reuse potential:**

| Target Product | Sub-function | Transfer Effort | Readiness |
|---------------|-------------|:--------------:|:---------:|
| VN-12.7MM-SIM I-08 | Target tracking analysis (camera-based gunner assessment) | Fine-tune (indoor scene) | 2 |
| VN-XUONG-UUV (future) | Deck obstacle detection during LARS | Fine-tune (deck scene) | 2 |

---

## WX-CTL-001: Semi-Sub Depth Controller

| Field | Value |
|-------|-------|
| Model ID | WX-CTL-001 |
| Name | ArduSub Depth Hold Controller (tuned for semi-sub) |
| Type | Control |
| Source product | VN-USV-SS-001 |
| Validation stage | Pre-development — lab demo $140 first |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | Pressure sensor (depth), IMU (attitude), GPS (position) |
| Output | Ballast pump duty cycle, thruster commands |
| Latency | ≤50 ms control loop |
| Accuracy | Depth hold ±0.3 m |
| Compute | Pixhawk 6X (existing) |

**Reuse:** 1× only (unique to semi-sub form factor). PID tuning parameters reusable if hull form similar.

---

## WX-PRD-001: Session Analytics Engine

| Field | Value |
|-------|-------|
| Model ID | WX-PRD-001 |
| Name | Training Session Analytics (trend, report, prediction) |
| Type | Prediction |
| Source product | VN-12.7MM-SIM I-08 |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | Structured session records (JSON: shots, scores, timing, force) |
| Output | Trend charts, MoD-format PDF report, qualification prediction |
| Compute | PC (existing SS4) or cloud |

**Reuse potential:**

| Target Product | Sub-function | Transfer Effort | Readiness |
|---------------|-------------|:--------------:|:---------:|
| BB-01 LOMAH | Hit/miss statistics dashboard | Fine-tune (different metrics) | 3 |
| Future products with training data | Any product collecting session data | Fine-tune | 2 |

---

## WX-TRK-001: Gunner Pose Estimator

| Field | Value |
|-------|-------|
| Model ID | WX-TRK-001 |
| Name | Gunner Pose Estimation (body position analysis during firing) |
| Type | Tracking |
| Source product | VN-12.7MM-SIM I-08 |
| Dependency | LP-3 (3 weeks, $0 — uses existing Jetson from LP-1) |

**Specifications (target):**

| Spec | Value |
|------|-------|
| Input | Camera 640×480 RGB (side-view of gunner) |
| Output | 17-keypoint skeleton, stance classification (correct/incorrect) |
| Compute | Jetson Orin Nano (shared with WX-DET-001) |

**Reuse:** 1× (unique to gunnery posture). Concept transferable to any crew-served weapon trainer.

---

# 3. COMPONENT REUSE MATRIX

## 3.1 Cross-Portfolio Analysis

| Category | Component | 12.7MM | USV-SS | BB-01 | AST-MSL | XUONG | Reuse % |
|----------|-----------|:------:|:------:|:-----:|:-------:|:-----:|:-------:|
| **Compute** | STM32 MCU | ✅ I/O board | — | ✅ DSP | — | — | 40% (2/5) |
| **Compute** | Jetson Orin Nano | ✅ I-08 | ✅ obstacle | — | — | — | 40% (2/5) |
| **Compute** | Pixhawk 6X | — | ✅ autopilot | — | — | ⚠️ future | 20-40% |
| **Compute** | PC (i5/i7 + GPU) | ✅ sim engine | — | — | — | — | 20% (1/5) |
| **Sensing** | Piezo CONTACT | — | — | ✅ impact | — | — | 20% (1/5) |
| **Sensing** | Optical encoder | ✅ az/el | — | — | — | — | 20% (1/5) |
| **Sensing** | Pressure transducer | ✅ recoil data | ✅ depth | — | — | — | 40% (2/5) |
| **Sensing** | Camera (USB/CSI) | ✅ I-08 pose | ✅ obstacle | — | — | — | 40% (2/5) |
| **Sensing** | GPS module | — | ✅ nav | — | ✅ tracking | ✅ nav | 60% (3/5) |
| **Comms** | LoRa 433 MHz | — | ✅ telemetry | ✅ hit report | ✅ position | — | 60% (3/5) |
| **Comms** | 4G/LTE modem | — | ✅ optional | — | — | — | 20% (1/5) |
| **Power** | LiFePO4 battery | — | ✅ 48V | ✅ 12V | — | — | 40% (2/5) |
| **Power** | 24V PSU (Mean Well) | ✅ brakes | — | — | — | — | 20% (1/5) |
| **Enclosure** | HDPE fabrication | — | ✅ hull | — | ✅ hull | — | 40% (2/5) |
| **Enclosure** | IP67 electronics box | — | ✅ control | ✅ sensor unit | ✅ GPS box | — | 60% (3/5) |
| **Software** | ArduSub/ArduPilot | — | ✅ core | — | — | ⚠️ future | 20-40% |
| **Software** | Unity (simulation) | ✅ core | — | — | — | — | 20% (1/5) |
| **Software** | TinyML (STM32Cube.AI) | — | — | ✅ classifier | — | — | 20% (1/5) |
| **Software** | Python analytics | ✅ I-08 | — | ✅ stats | — | — | 40% (2/5) |

## 3.2 Reuse Summary

| Category | Avg Reuse % | Top Shared Component |
|----------|:----------:|---------------------|
| Compute | **32%** | STM32 MCU (2 products), Jetson (2 products) |
| Sensing | **36%** | Pressure transducer (2), Camera (2), GPS (3) |
| Comms | **40%** | **LoRa 433 MHz (3 products)** — highest reuse |
| Power | **30%** | LiFePO4 battery (2 products) |
| Enclosure | **50%** | **IP67 electronics box (3 products)** — standardize |
| Software | **28%** | Python analytics (2 products) |
| **Overall** | **36%** | **Below 50% target** ⚠️ |

## 3.3 Standardization Recommendations

| # | Action | Products Affected | Impact |
|---|--------|:-----------------:|--------|
| **STD-1** | Standardize LoRa 433 MHz module (same part number across USV, BB-01, AST) | 3 | Volume pricing, shared firmware library, single spare part |
| **STD-2** | Standardize IP67 enclosure (design 1 box, 3 mounting configs) | 3 | -$50/unit manufacturing, shared tooling |
| **STD-3** | Standardize pressure transducer (0-16 bar, 0-5V) for 12.7MM + USV | 2 | Shared calibration procedure, bulk buy |
| **STD-4** | Standardize Jetson Orin Nano compute module for 12.7MM I-08 + USV | 2 | Shared OS image, shared ML deployment pipeline |
| **STD-5** | Create shared Python analytics library (session data → charts → PDF) | 2 | -$3,000 SW NRE (shared between 12.7MM I-08 and BB-01) |

**If STD-1 through STD-5 implemented:** Overall reuse 36% → **~52%** (above 50% target).

---

# 4. R5 ACTIVATION ROADMAP

```
CURRENT (2026-03-20): R5 DORMANT
  0 validated models, 0 transfers, 36% component reuse

2026-Q2 (target):
  WX-CLS-002 (BB-01 impact classifier) → Stage 1 lab validation
  WX-CTL-001 (USV depth controller) → Stage 1 lab demo
  → R5 still DORMANT (no transfers yet)

2026-Q3 (target):
  WX-CLS-001 (coaching engine) → data collection from I-01 fleet
  STD-1 through STD-3 → component standardization
  → R5 ACTIVATING (first component reuse across products)

2027-Q1 (target):
  WX-CLS-001 → Stage 1 validation with real data
  WX-PRD-001 → shared analytics between 12.7MM and BB-01
  FIRST MODEL TRANSFER: WX-PRD-001 from 12.7MM → BB-01
  → R5 ACTIVE ✅ (compound loop running)

2027+ (compound phase):
  Every new product checks library FIRST before custom development
  Every validated model enters library automatically
  Transfer rate target: ≥1 per quarter
```

---

# 5. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-20 | KN + AI (forge-library) | Initial: 6 planned models, 0 validated, component reuse 36% (target 50%), 5 standardization recommendations, R5 activation roadmap. |

---

*Workshop X Model Library v1.0*
*forge-library — R5 Compound Activation*
