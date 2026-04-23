---
created: 2026-03-19
updated: 2026-03-19
type: strategic-analysis
status: draft
tags: [#type/article, #status/active, #acq, #defense]
---

# ACH Portfolio × Technical Stack Opportunities

> Mỗi dự án: cơ hội ACH + tech stack cần thiết + đề xuất learning project cho ACH Thesis.

---

## 1. ACH Opportunity Matrix — All Active Projects

### VN-12.7MM-SIM I-08 "HỒNG HẢI MASTER" (ACH Showcase)

| Sub-function             | ACH Level  | Hardware Replaced        | AI Solution                         | Tech Stack Required                     |
| ------------------------ | :--------: | ------------------------ | ----------------------------------- | --------------------------------------- |
| **Shooter coaching**     | L2 AUGMENT | Human instructor ($50/h) | Pose estimation + performance model | **L3: MediaPipe/MMPose + PyTorch**      |
| **Readiness prediction** | L3 EMERGE  | Không tồn tại trong HW   | LSTM/Transformer time-series        | **L3: PyTorch + L5: training pipeline** |
| **Recoil compensation**  | L2 AUGMENT | Full-motion sim ($100K+) | Pneumatic L3 + AI timing            | **L2: ROS2 + L4: TensorRT**             |
| **Auto-AAR**             | L3 EMERGE  | 4-hour manual process    | LLM narrative generation            | **L3: LLM API + L7: report template**   |
| **Scenario adaptation**  | L3 EMERGE  | Static scenario library  | RL-based difficulty adjustment      | **L3: RL (future) + L5: data**          |

**Tech stack priority:** MediaPipe pose → PyTorch training → TensorRT inference → ROS2 integration
**ACH Thesis value:** PRIMARY demo — most complete ACH application, multiple levels

---

### VN-USV-SS-001 (ACH GO — Semi-Sub USV)

| Sub-function | ACH Level | Hardware Replaced | AI Solution | Tech Stack Required |
|-------------|:---------:|-------------------|-------------|---------------------|
| **Navigation** | L1 REPLACE | Military INS ($10K+) | Pixhawk + GPS + AI waypoint | **L1: Pixhawk + L2: ArduSub/MAVROS** |
| **Depth control** | L2 AUGMENT | Precision ballast ($5K+) | Pressure sensor + PID/ML | **L2: ArduSub + L3: sensor fusion** |
| **Obstacle avoidance** | L1 REPLACE | Military sonar ($20K+) | Ping sonar + ArduSub | **L1: COTS sonar + L2: ROS2** |
| **Path planning** | L3 EMERGE | Fixed waypoint only | AI-adaptive path (wave/current) | **L3: ROS2 nav stack + L5: field data** |
| **Health monitoring** | L2 AUGMENT | Manual inspection | Edge telemetry + anomaly detection | **L4: ONNX + L7: telemetry** |

**Tech stack priority:** ArduSub + MAVROS → ROS2 → sensor fusion EKF → edge telemetry
**ACH Thesis value:** SECOND demo — COTS autonomy stack, 97% cost reduction proven

---

### BB-01 LOMAH (Scouting — ACH Potential)

| Sub-function | ACH Level | Hardware Replaced | AI Solution | Tech Stack Required |
|-------------|:---------:|-------------------|-------------|---------------------|
| **Hit/miss scoring** | L1 REPLACE | Acoustic array ($5K+) | Piezo contact + AI signal classification | **L1: Piezo + CM4 + L3: Audio CNN** |
| **Shot grouping analysis** | L3 EMERGE | Manual inspection | AI pattern recognition + feedback | **L3: OpenCV + L4: TFLite** |
| **Dual-use drone detection** | L2 AUGMENT | Dedicated acoustic sensor ($10K+) | Reuse LOMAH mic array + AI classifier | **L3: Audio CNN transfer + L5: dataset** |

**Tech stack priority:** Piezo signal chain (analog) → CM4 inference → TFLite audio CNN
**ACH Thesis value:** THIRD demo — analog signal → digital AI, simplest ACH application

---

### VN-XUONG-UUV (No ACH — Pure Marine Engineering)

| Sub-function | ACH Level | Notes |
|-------------|:---------:|-------|
| Hull structure | N/A | Aluminum 5083 — no AI compensation possible |
| LARS mechanism | N/A | Electric winch — mechanical, no AI |
| Navigation | **Potential L1** | Future: vessel navigation aid (GPS + AI current compensation) |
| Crew safety | **Potential L2** | Future: AI-monitored LARS operation safety |

**ACH Thesis value:** LOW — reference for "when NOT to apply ACH" (Boundary Rule)

---

### VN-AST-MSL-001 "THANH TRI" (No ACH — Pure Passive Target)

| Sub-function | ACH Level | Notes |
|-------------|:---------:|-------|
| RCS presentation | N/A | Trihedral reflector — passive physics, no AI |
| Mooring/station keeping | N/A | Chain/nylon hybrid — no electronics |
| Buoyancy/stability | N/A | HDPE foam-filled — passive design |

**ACH Thesis value:** ZERO — pure mechanical, validates ACH Boundary Rule (physical forces only)

---

## 2. Tech Stack × Project Cross-Reference

```
                    VN-12.7MM  VN-USV-SS  BB-01   VN-XUONG  VN-AST
L1 Jetson Orin         ★★★        ○         ○        ○        ○
L1 Pixhawk             ○         ★★★        ○        ○        ○
L1 CM4/RPi             ○          ○        ★★★       ○        ○
L1 Piezo/Analog        ○          ○        ★★★       ○        ○
L2 ROS2                ★★        ★★★        ○        ○        ○
L2 ArduSub/MAVROS      ○         ★★★        ○        ○        ○
L2 OpenCV              ★★★        ○        ★★        ○        ○
L3 PyTorch             ★★★       ★★        ★★        ○        ○
L3 YOLO/Pose           ★★★        ○         ○        ○        ○
L3 Audio CNN           ○          ○        ★★★       ○        ○
L3 Sensor Fusion       ★★        ★★★        ○        ○        ○
L3a IRONMESH           ★★★        ○        ★★        ○        ○
L4 TensorRT            ★★★       ★★         ○        ○        ○
L4 TFLite              ○          ○        ★★★       ○        ○
L4 ONNX                ★★        ★★        ★★        ○        ○
L5 DVC/Label Studio    ★★★       ★★        ★★        ○        ○
L6 Performance Env     ★★★       ★★        ★★        ○        ○
L7 OTA/Versioning      ★★★       ★★         ○        ○        ○

★★★ = primary  ★★ = secondary  ○ = not applicable
```

---

## 3. ACH Learning Projects — CEO Selection Menu

### Concept: Mỗi learning project = 1 technical stack skill, thực hiện trên 1 sản phẩm thật, output = demo cho ACH Thesis

| # | Learning Project | Tech Stack | Product Vehicle | Duration | Cost | ACH Thesis Chapter | Priority |
|---|-----------------|-----------|:---------------:|:--------:|:----:|:------------------:|:--------:|
| **LP-1** | **YOLOv8 on Jetson Orin Nano** | L1+L3+L4 (Jetson + PyTorch + TensorRT) | VN-12.7MM-SIM | 2 weeks | $200 (dev kit) | Ch 9: Case Study | **HIGH** |
| **LP-2** | **ArduSub Semi-Sub Depth Hold** | L1+L2 (Pixhawk + ArduSub + MAVROS) | VN-USV-SS-001 | 4 weeks | $140 (demonstrator) | Ch 9: Case Study | **HIGH** |
| **LP-3** | **Pose Estimation for Shooter Coaching** | L3 (MediaPipe + PyTorch) | VN-12.7MM-SIM I-08 | 3 weeks | $0 (software only) | Ch 6: SHIFT Framework | **HIGH** |
| **LP-4** | **Piezo Signal → AI Classification** | L1+L3+L4 (CM4 + Audio CNN + TFLite) | BB-01 LOMAH | 3 weeks | $50 (piezo + CM4) | Ch 3: Case Study | MED |
| **LP-5** | **ROS2 + MAVROS Integration** | L2 (ROS2 Humble + MAVROS) | VN-USV-SS-001 | 4 weeks | $0 (software only) | Ch 7: Validation | MED |
| **LP-6** | **Sensor Fusion EKF** | L3 (Python EKF + IMU + GPS + depth) | VN-USV-SS-001 | 3 weeks | $0 | Ch 7: Validation | MED |
| **LP-7** | **DVC + Label Studio Pipeline** | L5 (data management) | Cross-product | 1 week | $0 | Ch 10: Organization | LOW |
| **LP-8** | **Performance Envelope Test** | L6 (validation framework) | VN-12.7MM-SIM | 2 weeks | $0 | Ch 7: Validation | LOW |
| **LP-9** | **OTA Model Update Prototype** | L7 (deployment) | VN-12.7MM-SIM | 2 weeks | $0 | Ch 10: Organization | LOW |
| **LP-10** | **Hybrid Cloud-Edge Pattern** | L3b (API + local fallback) | VN-USV-SS-001 | 2 weeks | $0 | Ch 5: Three Laws | LOW |

---

## 4. Recommended Learning Path (Sequential)

### Phase A: "Run AI on Edge" (Month 1-2)
**Chọn 1-2 từ LP-1, LP-2, LP-3**

```
LP-1: YOLOv8 on Jetson     LP-2: ArduSub Depth Hold
     ↓                           ↓
  [Jetson dev kit $200]      [HDPE pipe demo $140]
     ↓                           ↓
  Run YOLOv8 → ONNX →       ArduSub PID depth hold
  TensorRT pipeline          ±50mm accuracy test
     ↓                           ↓
  OUTPUT: inference           OUTPUT: semi-sub
  latency benchmark           concept validation
     ↓                           ↓
  ACH Thesis Ch 9:           ACH Thesis Ch 9:
  "12.7MM case study"        "USV case study"
```

**CEO benefits:**
- LP-1: validates Jetson as ACH compute platform → unlocks VN-12.7MM-SIM I-08
- LP-2: validates semi-sub concept → unblocks VN-USV-SS-001 Phase 1
- LP-3: software-only → zero cost, immediate start possible

### Phase B: "Train Custom Models" (Month 2-4)
**LP-3 + LP-4 + LP-5**

```
LP-3: Pose Estimation       LP-4: Piezo → Audio CNN
     ↓                           ↓
  MediaPipe on laptop        Record piezo impacts
  → extract pose keypoints   → train CNN classifier
  → coaching algorithm       → deploy on CM4/TFLite
     ↓                           ↓
  OUTPUT: shooter posture    OUTPUT: hit/miss from
  assessment prototype       analog signal
     ↓                           ↓
  ACH Thesis Ch 6:          ACH Thesis Ch 3:
  "SHIFT Framework applied"  "Origin case study"
```

### Phase C: "Prove It Works" (Month 4-6)
**LP-6 + LP-7 + LP-8**

```
LP-8: Performance Envelope    LP-7: DVC Pipeline
     ↓                              ↓
  Test AI at edge conditions      Version training data
  (heat, rain, vibration)         Label Studio workflow
     ↓                              ↓
  OUTPUT: Envelope Law            OUTPUT: Substrate Law
  evidence for thesis             evidence for thesis
     ↓                              ↓
  ACH Thesis Ch 7:               ACH Thesis Ch 10:
  "Validation methodology"        "Organizational transform"
```

---

## 5. Learning Project → ACH Thesis Chapter Mapping

| Thesis Chapter | Learning Project(s) | Type of Evidence |
|---------------|:-------------------:|-----------------|
| Ch 2: ACH Definition | — | Theory (existing) |
| Ch 3: Origin Case Studies | LP-4 (Piezo→AI) | Demo: analog→digital ACH |
| Ch 5: Three Laws | LP-10 (Hybrid cloud-edge) | Demo: Substrate Law in action |
| Ch 6: SHIFT Framework | LP-3 (Pose estimation) | Demo: SHIFT applied to real product |
| Ch 7: Validation | LP-6 + LP-8 | Demo: Performance Envelope + EKF |
| Ch 9: Case Study (12.7MM) | LP-1 + LP-3 | Demo: full ACH L2 pipeline |
| Ch 9: Case Study (USV) | LP-2 + LP-5 | Demo: COTS replacing military INS |
| Ch 10: Organization | LP-7 + LP-9 | Demo: data pipeline + OTA |

---

## 6. CEO Decision — Chọn Learning Path

### Option A: "12.7MM-SIM First" (LP-1 → LP-3 → LP-8)
- **Pro:** Primary ACH showcase, most complete, I-08 variant already designed
- **Con:** Jetson dev kit $200, brake test blocking
- **Thesis impact:** Strongest case study (Ch 9), SHIFT demo (Ch 6)

### Option B: "USV First" (LP-2 → LP-5 → LP-6)
- **Pro:** Validates semi-sub concept + ArduSub + ROS2 stack simultaneously
- **Con:** $140 + 4 weeks, ArduSub semi-sub mode unvalidated
- **Thesis impact:** Second case study (Ch 9), novel COTS-replaces-INS narrative

### Option C: "LOMAH First" (LP-4 → LP-7)
- **Pro:** Simplest ACH (analog→AI), cheapest ($50), fastest (3 weeks)
- **Con:** BB-01 just started Phase 1, concept not locked
- **Thesis impact:** Origin case study (Ch 3), weakest standalone

### Option D: "Parallel Sprint" (LP-1 + LP-2 + LP-3 concurrent)
- **Pro:** Maximum learning speed, 3 products validated simultaneously
- **Con:** CEO capacity = 25h/week, 3 projects = stretched thin
- **Thesis impact:** All chapters covered but risk of shallow execution

### Recommended: **Option A → B sequential**
LP-1 (2 weeks) → LP-3 (3 weeks) → LP-2 (4 weeks) → LP-5 (4 weeks) = **13 weeks = 3 months**
- Cost: $340 total
- Output: 2 ACH case studies for thesis + 2 product concepts validated
- Maps to Phase A + Phase B of tech stack mastery roadmap

**CEO: chọn Option A, B, C, D, hoặc custom?**
