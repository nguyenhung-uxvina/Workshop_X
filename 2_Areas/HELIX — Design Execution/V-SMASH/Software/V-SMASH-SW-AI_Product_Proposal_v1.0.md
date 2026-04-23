---
project: V-SMASH-SW-AI
type: software-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
sw_phase: 0 (Requirements Extraction)
safety_class: C (highest — safety-critical AI classification directly affects engagement decisions)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
priority: CRITICAL — core product differentiator, contains 2 of 4 safety-critical functions
---

# V-SMASH-SW-AI — AI Detection & Classification Pipeline

## 1. Purpose

Complete AI/ML pipeline from image capture through object detection, classification, confidence scoring, and safety gating. This is the **highest safety-class software module** — VM-Y03 (confidence gating) and VM-Y04 (misclassification rate) are SAFETY-CRITICAL functions that directly influence whether an operator sees a lead indicator.

**Without this sub-project:** The AI pipeline is described by 18+ requirements and 76+ cross-references across Phase 1-4 documents, but has no formal Model Card, no training data specification, no validation methodology, no inference pipeline architecture. YOLOv8-nano is named but never formally specified.

---

## 2. Scope Boundary

### In Scope

| Module | Functions | Source Requirements |
|--------|-----------|-------------------|
| **AI-CAP** | Image capture pipeline: CMOS → ISP → frame buffer → preprocessor (resize, normalize for model input) | VM-S01, SF1 |
| **AI-DET** | Object detection: YOLOv8-nano (INT8 quantized), bounding box regression, multi-object tracking, angular size measurement | VM-K01, VM-K02, VM-S02, VM-O06, VM-O09, SF2 |
| **AI-CLS** | Object classification: 4-class output (drone-rotor, drone-fixed-wing, bird, unknown) + softmax confidence score | VM-S04, VM-O08, VM-Y04, SF3 |
| **AI-GATE** | Confidence gating: suppress lead indicator when confidence <70%. Temporal filter (3-frame persistence). Bounds check on output. | VM-Y03 (SAFETY-CRITICAL), SF4 |
| **AI-TRAIN** | Training data management: dataset spec, labeling schema, augmentation pipeline, version control | VM-Y04, VM-O07, FMEA F07/F09 |
| **AI-VAL** | Model validation: test dataset, FPR measurement (≤2% at ≥90% confidence), Pd measurement (≥90% at 200m), model card | VM-Y04, VM-O06, VM-O09, VM-Y06 |
| **AI-SAFE** | MIL-STD-882E hazard analysis for AI classification function (Severity II, Probability D) | VM-Y06 |

### Out of Scope

| Module | Sub-Project |
|--------|-------------|
| Ballistic lead computation (uses AI output as input) | V-SMASH-SW-BAL |
| OLED display rendering (receives overlay commands) | V-SMASH-SW-FW |
| BLE data upload of detection events | V-SMASH-SW-COM |
| Hardware sensor driver (MIPI CSI-2) | V-SMASH-SW-FW (FW-HAL) |

---

## 3. Requirements (Extracted from V-SMASH-M Design Package)

### 3.1 Detection Performance

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-AI-01 | Detection range (daylight, ≥30cm wingspan) | VM-O06 | ≥200m (D), ≥150m (kill threshold) | T: field test, ≥100 passes |
| SWR-AI-02 | Detection range (low-light, dusk/dawn) | VM-O07 | ≥100m [ESTIMATE] | T: field test at controlled light |
| SWR-AI-03 | Detection probability at 200m | VM-O09 | Pd ≥90% | T: ≥100 presentations, count detections |
| SWR-AI-04 | Detection probability at 150m | VM-O09 | Pd ≥95% | T: ≥100 presentations |
| SWR-AI-05 | Angular velocity tracking | VM-K01 | ≥30 deg/s | T: drone sled at max speed |
| SWR-AI-06 | End-to-end inference latency | VM-S02 | ≤150 ms (capture → lead indicator) | T: strobe + high-speed camera, 100 frames |
| SWR-AI-07 | Pipeline frame rate | VM-K02 | ≥30 Hz (≤33 ms/frame) | T: high-speed camera, frame intervals |
| SWR-AI-08 | Post-shot reacquisition | VM-S07 | ≤200 ms | T: recoil simulation + camera |

### 3.2 Classification Performance

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-AI-10 | Classification categories | VM-O08 | 4 minimum: drone-rotor, drone-fixed-wing, bird, unknown | I: model output inspection |
| SWR-AI-11 | Classification confidence indicator | VM-S04 | 3-tier: GREEN (≥90%), YELLOW (70-89%), RED (<70%) | T: controlled confidence targets |
| SWR-AI-12 | False positive rate | VM-Y04 | ≤2% FPR at ≥90% confidence threshold | T: ≥100 non-drone presentations |
| SWR-AI-13 | Classification scope | VM-S04 (note) | Object TYPE only, NOT friend-vs-foe. No IFF. | I: design review |

### 3.3 Safety-Critical Requirements

| ID | Requirement | Source | Safety Class |
|----|-------------|--------|-------------|
| SWR-AI-S01 | Lead indicator MUST NOT display when confidence <70% | VM-Y03 | SAFETY-CRITICAL |
| SWR-AI-S02 | FPR ≤2% at ≥90% confidence | VM-Y04 | SAFETY-CRITICAL |
| SWR-AI-S03 | No stale detection output after AI hang (>500ms) | VM-N06 | SAFETY-CRITICAL |
| SWR-AI-S04 | Confidence gating cannot be overridden in field | DW Audit | SAFETY-CRITICAL |
| SWR-AI-S05 | MIL-STD-882E hazard analysis completed before deployment | VM-Y06 | SAFETY-MANDATORY |

### 3.4 Training Data Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| SWR-AI-T01 | Minimum training dataset size | Best practice | ≥16,000 labeled images (Orchestration §2) |
| SWR-AI-T02 | Target classes in training data | VM-O08 | All 4 classes + negative examples |
| SWR-AI-T03 | Environmental diversity | VM-O06/O07 | Daylight, dusk/dawn, clear sky, cloudy, cluttered BG |
| SWR-AI-T04 | Range diversity | VM-O06 | Targets at 50m, 100m, 150m, 200m+ |
| SWR-AI-T05 | Vietnam-specific content | Local context | Vietnamese landscape, local bird species, local drone models |
| SWR-AI-T06 | Dataset version control | Orchestration §2 | Versioned alongside model, tracked by A-SYNC |

---

## 4. AI Pipeline Architecture (Conceptual)

```
 CMOS Sensor (VM-1200)
       │
       ▼ MIPI CSI-2 (via FW-HAL)
 ┌─────────────┐
 │  AI-CAP     │  Frame capture + ISP
 │  1920×1080  │  ≤5ms
 │  30 fps     │
 └──────┬──────┘
        ▼ Raw frame buffer
 ┌─────────────┐
 │  AI-DET     │  YOLOv8-nano (INT8, TensorRT)
 │  Detection  │  ~30ms inference
 │  + Tracking │  Kalman filter multi-object
 └──────┬──────┘
        ▼ Bounding boxes + tracks + angular size
 ┌─────────────┐
 │  AI-CLS     │  Classification head (integrated or separate)
 │  4-class    │  → {class, confidence, physical_size_est}
 │  + softmax  │
 └──────┬──────┘
        ▼ Class + confidence score
 ┌─────────────┐
 │  AI-GATE    │  Confidence ≥70%? (SAFETY-CRITICAL)
 │  3-frame    │  3-frame temporal persistence
 │  filter     │  Bounds check on output
 └──────┬──────┘
        │
   ┌────┴────┐
   ▼         ▼
 PASS      SUPPRESS
 (→SW-BAL)  (→FW-DISP: no indicator)
```

### Latency Budget (within 150ms total, VM-S02)

| Stage | Budget | Notes |
|-------|--------|-------|
| AI-CAP (capture + preprocess) | ≤10 ms | MIPI CSI-2 DMA + resize |
| AI-DET (detection inference) | ≤30 ms | YOLOv8-nano INT8 on Jetson Orin Nano |
| AI-CLS (classification) | ≤0 ms (integrated head) or ≤10 ms (separate) | Morpho choice: integrated preferred |
| AI-GATE (confidence check + temporal filter) | ≤1 ms | Simple comparator + counter |
| → SW-BAL (lead computation) | ≤20 ms | Allocated to SW-BAL |
| → FW-DISP (render to OLED) | ≤5 ms | Allocated to SW-FW |
| **Pipeline overhead + margin** | **≤84 ms** | Buffer for frame sync, context switching |
| **Total** | **≤150 ms** | VM-S02 compliance |

---

## 5. Model Card (Draft — to be completed in SW-1)

| Field | Value |
|-------|-------|
| Model name | V-SMASH-YOLO-v1.0 |
| Base architecture | YOLOv8-nano (Ultralytics) |
| Quantization | INT8 (TensorRT) |
| Input resolution | 640×640 (resized from 1920×1080) |
| Output | Bounding boxes + 4-class labels + confidence |
| Target platform | NVIDIA Jetson Orin Nano (8GB) |
| Training framework | PyTorch → ONNX → TensorRT |
| Training data | V-SMASH Training Dataset v1.0 (≥16,000 images) |
| Validation split | 80/10/10 (train/val/test) |
| Primary metric | Pd ≥90% @ 200m, FPR ≤2% @ 90% confidence |
| Known limitations | Low-light (dusk/dawn): range degrades to ~100m. Small targets (<15px): Pd drops below 50%. Cluttered backgrounds: FPR may increase. |
| Ethical scope | Object classification ONLY. No IFF. No engagement authorization. HITL mandatory. |
| Update cadence | Per training data version. Depot-only deployment. |

---

## 6. Deliverables per SW-SDLC Phase

| SW Phase | Deliverable | Format |
|----------|-------------|--------|
| SW-0 | This document + requirements extraction | Markdown |
| SW-1 | AI SRS + formal Model Card + Training Data Spec + Validation Plan | Markdown |
| SW-2 | Pipeline architecture + API specs + data flow diagrams | Markdown + diagrams |
| SW-3a | Training pipeline (Python): data loader, augmentation, training script, export to TensorRT | Git repo (Python) |
| SW-3b | Inference pipeline (C++): capture → detect → classify → gate | Git repo (C++) |
| SW-4 | Integration test on Jetson: latency, accuracy, power | Test report |
| SW-5a | Model validation report: Pd, FPR, confusion matrix, per-class accuracy | Test report |
| SW-5b | MIL-STD-882E hazard analysis for AI classification | Safety report |
| SW-5c | Qualified model binary (TensorRT engine) + release notes | Binary + changelog |

---

## 7. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| FW-HAL sensor API (`sensor_capture()`) | V-SMASH-SW-FW | PENDING (SW-FW must define API first) | AI-CAP input format |
| FW-DISP display API (`display_render()`) | V-SMASH-SW-FW | PENDING | AI-GATE output format |
| Jetson Orin Nano DevKit | Procurement | PENDING | SW-3 needs target hardware for TensorRT optimization |
| Training data collection (field imagery) | Operations | PENDING | Requires V-SMASH-SLED drone sled for controlled targets |
| Vietnam-specific training imagery | Field collection | NOT STARTED | Local birds, backgrounds, lighting |
| SW-BAL API contract (detection → ballistic) | V-SMASH-SW-BAL | PENDING | AI output format → BAL input format |

**Critical path:** Training data collection requires either (a) drone sled (V-SMASH-SLED) operational, or (b) field data collection campaigns. This is the **longest lead-time item** in the entire SW sub-project set.

---

## 8. Variant Configuration Map

| Variant | AI-CAP | AI-DET | AI-CLS | AI-GATE | Model Weights | Adaptation |
|---------|--------|--------|--------|---------|---------------|------------|
| V-M | Full | Full | 4-class | 70% gate, 3-frame | **Baseline weights** | None |
| V-L | Full | Full | 4-class | 70% gate, 3-frame | Same as V-M | None (V-L is canonical) |
| V-D | Full | Full | 4-class | Alert only (no lead) | Same weights | Gate outputs ALERT, not lead enable |
| V-X | Full | Full | 4-class | 70% gate, 3-frame | May need re-validation for export | Export compliance review of model |
| V-T | Full | Full + data export | 4-class | 70% gate | Same + data logging for training | Additional training data capture API |
| V-NV | Dual (visible + thermal) | Extended (dual-input) | 4-class + thermal sig | 70% gate | **New model: visible+thermal fusion** | Major: dual-input model architecture |
| V-P | Full (larger FOV) | Full | 4-class | 70% gate | Re-trained for different FOV/scale | Model fine-tuning for larger optics |
| V-R | Full (vehicle-mount) | Full + stabilization | 4-class | 70% gate | Re-trained for vehicle motion | Motion compensation in AI-CAP |

**Reuse factor:** 5/8 direct (V-M, V-L, V-D, V-X, V-T). 3/8 require model adaptation (V-NV, V-P, V-R).

---

## 9. Effort Estimate

| Phase | Duration | Personnel | Notes |
|-------|----------|-----------|-------|
| SW-0 + SW-1 | 3 weeks | 1 AI/ML engineer | Requirements + Model Card + Training Data Spec |
| SW-2 (Architecture) | 2 weeks | 1 AI/ML engineer | Pipeline design, TensorRT optimization strategy |
| SW-3a (Training pipeline) | 6 weeks | 1 AI/ML engineer | Dataset prep, augmentation, training, quantization |
| SW-3b (Inference pipeline) | 4 weeks | 1 AI/ML + 1 FW | C++ inference on Jetson, integration with FW-HAL |
| **Training data collection** | **8 weeks (parallel)** | Field team | Drone sled, field imagery, labeling |
| SW-4 (Integration) | 3 weeks | 1 AI/ML + 1 FW | On-target latency, accuracy, thermal |
| SW-5 (Qualification + safety) | 4 weeks | 1 AI/ML + 1 QA | Validation dataset, MIL-STD-882E report |
| **Total** | **~22 weeks** | | Training data collection is parallel critical path |

---

## 10. Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| FPR >2% on real-world data (vs training data) | HIGH | CRITICAL — VM-Y04 violation | Diverse training data + field validation before production |
| Training data insufficient (Vietnam-specific) | HIGH | HIGH — model bias | Partner with military units for field data; synthetic data augmentation |
| Pd <90% at 200m for small drones | MEDIUM | HIGH — VM-O06 fail | Optimize input resolution, consider higher-res crops |
| AI model >30ms inference on Jetson | LOW | MEDIUM — latency budget blown | INT8 quantization + TensorRT optimization + model pruning |
| FMEA F07: missed detection (D=10, undetectable) | MEDIUM | HIGH — hidden failure | Training data expansion is the ONLY mitigation. No software fix. |

---

## 11. Acceptance Criteria (Gate to SW-Phase 1)

- [ ] All SWR-AI-xx requirements traceable to source (VM-xxx)
- [ ] Model Card draft reviewed (architecture, dataset plan, validation plan)
- [ ] Training Data Specification: target size, classes, environments, minimum count
- [ ] Validation Plan: test dataset composition, statistical method for FPR/Pd confidence intervals
- [ ] MIL-STD-882E hazard analysis scope defined (AI classification function only)
- [ ] Latency budget agreed with SW-FW (API contract for frame delivery)
- [ ] Safety-critical requirements (SWR-AI-S01→S05) flagged for independent V&V

---

*Software sub-project of V-SMASH Product Family*
*Cross-reference: [[V-SMASH-M_B1_YCKT_v1.0|B1 §5.4 AI Requirements]], [[V-SMASH-M_FMEA_v1.0|FMEA F06/F07/F08]], [[V-SMASH-M_Function_Structure_v1.0|SF2, SF3, SF4]], [[V-SMASH-M_Morphological_Matrix_v1.0|SF2-A2, SF3-A3, SF4-B4]], [[V-SMASH-M_Verification_Plan_v1.0|T09 AI Detection]], [[V-SMASH_Family_Orchestration_Design_v1.0|Orchestration §2 AI Training Data]]*
