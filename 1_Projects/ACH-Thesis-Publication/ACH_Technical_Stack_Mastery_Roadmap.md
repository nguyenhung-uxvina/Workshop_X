---
created: 2026-03-19
updated: 2026-03-19
type: strategic-analysis
status: draft
tags: [#type/article, #status/active, #topic/technology, #topic/ai-tools]
---

# ACH Technical Stack — Workshop X Mastery Roadmap

> Xác định toàn bộ technical stack cần làm chủ để triển khai chiến lược ACH trên portfolio sản phẩm quốc phòng.

---

## FORGE-AI Checklist (CEO Self-Learning Reference)

> **FORGE-AI ≠ FORGE skills.** FORGE (10 skills) = strategic product decisions (GO/NO-GO, validate, reuse). FORGE-AI = technical execution checklist cho CEO tự đánh giá mastery level khi thực hiện LP learning path. Decision: 2026-03-19, Option C.

| Letter | Dimension | Check Question | LP Link | Mastery |
|:------:|-----------|---------------|:-------:|:-------:|
| **F** | Fine-tune on defense domain data | Đã fine-tune ≥1 model trên dataset quốc phòng? | LP-1, AI-2 | ☐ |
| **O** | Orchestrate edge-to-cloud pipelines | Đã deploy AI pipeline: sensor → edge inference → result? | LP-2, LP-5 | ☐ |
| **R** | Ruggedize for MIL-STD environments | Đã test AI ở điều kiện khắc nghiệt (nhiệt, ẩm, rung)? | LP-8 | ☐ |
| **G** | Generate compound via model library | forge-library có ≥2 models, ≥1 cross-product transfer? | AI-2, AI-5 | ☐ |
| **E** | Envelope-test at operational extremes | Đã tạo Performance Envelope cho ≥1 AI product? | LP-8 | ☐ |
| **A** | Architect AI-native defense products | Đã thiết kế ≥1 product mà AI là core (không phải add-on)? | AI-3 | ☐ |
| **I** | Integrate with physical hardware (ACH) | AI đã điều khiển actuator/sensor trên hardware thật? | LP-2, LP-4 | ☐ |

**Scoring:** ☐ = chưa | ☑ = done | Target: 7/7 within 12 months
**Review cadence:** Monthly (với forge-portfolio dashboard)

---

## 1. ACH Technical Stack Architecture (8 Layers)

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 7: DEPLOYMENT & OTA                     │
│  Model versioning · Field update · Rollback · Monitoring         │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 6: VALIDATION & TESTING                 │
│  Performance Envelope · Edge-case testing · MIL-STD compliance   │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 5: AI/ML TRAINING                       │
│  Dataset management · Training pipeline · Transfer learning      │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 4: INFERENCE ENGINE                     │
│  ONNX Runtime · TensorRT · Edge optimization · Quantization      │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 3: AI FRAMEWORKS & MODELS               │
│  PyTorch · YOLO · Depth estimation · Pose · NLP · Control        │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 2: MIDDLEWARE & INTEGRATION              │
│  ROS2 · ArduPilot/ArduSub · MAVROS · OpenCV · GStreamer          │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 1: EDGE COMPUTE & SENSORS               │
│  Jetson Orin Nano · Pixhawk · RPi CM4 · Cameras · IMU · Piezo   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Layer-by-Layer Analysis

### LAYER 1: Edge Compute & Sensors — "Nguyên Liệu"

| Component | Role in ACH | Products Using | Mastery Level | Priority |
|-----------|------------|:-------------:|:------------:|:--------:|
| **NVIDIA Jetson Orin Nano** | Primary AI inference (40 TOPS) | VN-12.7MM-SIM, future V-SMASH | L2 (basic) | **HIGH** |
| **Raspberry Pi CM4/5** | Lightweight inference + control | BB-01 LOMAH | L3 (familiar) | MED |
| **Pixhawk 6X** | Autopilot + sensor fusion | VN-USV-SS-001, VN-XUONG | L2 (basic) | **HIGH** |
| **CMOS Camera modules** | Primary ACH sensor (vision) | All vision products | L3 | MED |
| **MEMS IMU (MPU-6050/ICM-42688)** | Motion sensing + fusion | USV, 12.7MM-SIM | L2 | MED |
| **Piezo sensors** | Acoustic/impact detection | BB-01 LOMAH | L4 (deep) | LOW |
| **Pressure/Depth sensors** | Semi-sub depth control | VN-USV-SS-001 | L1 (new) | MED |
| **LoRa 433MHz modules** | Long-range telemetry | AST, USV, LOMAH | L3 | LOW |
| **LiFePO4 BMS** | Power management | USV, marine products | L2 | MED |

**ACH insight:** Layer 1 = "commodity sensors" — mục tiêu là dùng sensor RẺ NHẤT có thể, AI ở Layer 3-4 bù lại.

### LAYER 2: Middleware & Integration — "Hệ Thần Kinh"

| Stack | Role in ACH | Products | Mastery | Priority |
|-------|------------|:-------:|:-------:|:--------:|
| **ROS2 (Humble/Iron)** | Robot/vehicle middleware, pub-sub, lifecycle | VN-USV-SS-001, future products | L1 (new) | **CRITICAL** |
| **ArduPilot / ArduSub** | Autopilot firmware (PID, waypoint, depth hold) | VN-USV-SS-001, VN-XUONG | L2 (basic) | **HIGH** |
| **MAVROS / MAVLink** | ROS2 ↔ Pixhawk bridge | USV, UUV | L1 | **HIGH** |
| **OpenCV (Python/C++)** | Image processing pipeline | All vision products | L3 | MED |
| **GStreamer** | Video pipeline (camera → inference → display) | 12.7MM-SIM, V-SMASH | L2 | MED |
| **FastAPI / Flask** | GCS web interface, REST API | C2 software | L3 | LOW |
| **QGroundControl** | GCS for ArduPilot vehicles | USV, UUV | L2 | MED |

**ACH insight:** ROS2 là binding constraint — nó kết nối sensor (L1) với AI inference (L4) và actuator commands. Không có ROS2 → mỗi product phải viết integration code riêng → không reuse được.

### LAYER 3: AI Frameworks & Models — "Bộ Não"

| Framework/Model | ACH Application | Products | Mastery | Priority |
|----------------|-----------------|:-------:|:-------:|:--------:|
| **PyTorch** | Model training + research | All AI products | L2 | **CRITICAL** |
| **YOLOv8/v11 (Ultralytics)** | Object detection (target, person, vehicle) | V-SMASH, VN-CAM, 12.7MM | L3 | MED |
| **Monocular Depth Estimation** | Range estimation from single camera (ACH L1 REPLACE) | Future products | L1 | MED |
| **Pose Estimation (MediaPipe/MMPose)** | Shooter posture analysis (ACH L2 AUGMENT) | 12.7MM-SIM coaching | L1 | **HIGH** |
| **Audio Classification (CNN/RNN)** | Acoustic event detection (shot, drone, impact) | BB-01 LOMAH, LOMAH-AD | L2 | MED |
| **Sensor Fusion (EKF/UKF)** | Multi-sensor data fusion (ACH L2 AUGMENT) | USV navigation, 12.7MM | L2 | **HIGH** |
| **Reinforcement Learning** | Adaptive training scenarios (ACH L3 EMERGE) | ADVERSARY, future | L0 (none) | LOW |
| **Time-Series Prediction (LSTM/Transformer)** | Ballistic prediction, readiness scoring (ACH L3 EMERGE) | PROPHECY, Gunnery | L1 | LOW |
| **LLM (local/API)** | Auto-AAR generation (ACH L3 EMERGE) | DEBRIEF, future | L2 | LOW |

**ACH insight:** YOLO đã proven (V-SMASH). Pose estimation + sensor fusion = next 2 capabilities cần master cho 12.7MM-SIM ACH variant. RL và LLM = future (L3 EMERGE, 12-24 months).

### LAYER 4: Inference Engine — "Tốc Độ"

| Technology | Role | Products | Mastery | Priority |
|-----------|------|:-------:|:-------:|:--------:|
| **ONNX Runtime** | Cross-platform inference (PyTorch → deploy) | All AI products | L2 | **CRITICAL** |
| **TensorRT** | NVIDIA-optimized inference (Jetson) | 12.7MM-SIM, V-SMASH | L1 | **HIGH** |
| **INT8/FP16 Quantization** | Model compression for edge (reduce TOPS needed) | All edge products | L1 | **HIGH** |
| **TFLite / TFLite Micro** | Ultra-lightweight inference (CM4, MCU) | BB-01 LOMAH | L2 | MED |
| **NVIDIA DeepStream** | Video analytics pipeline on Jetson | Multi-camera products | L0 | LOW |
| **OpenVINO** | Intel-platform inference (alternative to NVIDIA) | Contingency | L0 | LOW |

**ACH insight:** Inference optimization = force multiplier. YOLOv8n trên Jetson Orin Nano chạy ~200 FPS sau TensorRT. Không optimize → 15-30 FPS → không đạt real-time budget. Quantization INT8 giảm model size 4× với <2% accuracy loss.

### LAYER 5: AI/ML Training — "Huấn Luyện"

| Capability | Role in ACH | Current State | Mastery | Priority |
|-----------|------------|:------------:|:-------:|:--------:|
| **Dataset Management (DVC/Label Studio)** | Version control training data | None | L0 | **CRITICAL** |
| **Data Labeling Pipeline** | Ground truth annotation | Ad-hoc | L1 | **HIGH** |
| **Transfer Learning** | Reuse pretrained models + fine-tune | Basic (YOLO pretrained) | L2 | **HIGH** |
| **Synthetic Data Generation (Blender/Unity)** | Generate training data when field data scarce | None | L0 | MED |
| **Data Augmentation** | Expand dataset variety (rotation, noise, weather) | Basic | L2 | MED |
| **Hyperparameter Optimization (Optuna)** | Systematic model tuning | None | L0 | LOW |
| **Federated Learning** | Train across deployed units without data centralization | None | L0 | LOW (future) |

**ACH insight:** Training data = FUEL cho ACH (Substrate Law). Không có data management → mỗi model train từ đầu → không compound. DVC + Label Studio = minimum viable data infrastructure.

### LAYER 6: Validation & Testing — "Chứng Minh"

| Capability | Role in ACH | Current State | Mastery | Priority |
|-----------|------------|:------------:|:-------:|:--------:|
| **Performance Envelope Testing** | Characterize AI at edge conditions (Envelope Law) | None formal | L0 | **CRITICAL** |
| **Confusion Matrix / PR Curve** | Standard ML evaluation metrics | Basic | L2 | MED |
| **Environmental Stress Testing** | AI performance under MIL-STD-810H conditions | None | L0 | **HIGH** |
| **Adversarial Robustness Testing** | Test AI against spoofing/attack | None | L0 | MED |
| **A/B Testing Framework** | Compare AI vs hardware baseline in field | None | L0 | MED |
| **Continuous Monitoring (Drift Detection)** | Detect model degradation in production | None | L0 | MED |
| **TCVN/MIL-STD Compliance Documentation** | Formal verification evidence for procurement | Partial | L1 | **HIGH** |

**ACH insight:** Validation = TRUST BUFFER (Envelope Law). Không có Performance Envelope → không bán được cho quốc phòng. Đây là điểm KHÁC BIỆT lớn nhất giữa ACH consumer (ship fast) vs ACH defense (prove first).

### LAYER 7: Deployment & OTA — "Triển Khai"

| Capability | Role in ACH | Current State | Mastery | Priority |
|-----------|------------|:------------:|:-------:|:--------:|
| **Model Versioning (MLflow/Weights&Biases)** | Track model versions per deployed unit | None | L0 | **HIGH** |
| **OTA Update Mechanism** | Push model updates to field units | None | L0 | **HIGH** |
| **Rollback Protocol** | Revert to previous model on regression | None | L0 | **HIGH** |
| **Edge Health Telemetry** | CPU temp, inference time, error rate monitoring | None | L0 | MED |
| **Container/Image Management (Docker)** | Package AI stack for reproducible deployment | Basic | L2 | MED |
| **Device Fleet Management** | Track N deployed units, model versions, health | None | L0 | LOW (future) |

**ACH insight:** Deployment infrastructure = what makes ACH COMPOUND over time. Without L7 → each product is a one-shot deployment, no learning loop, R1 flywheel stays dormant.

---

## 3. Mastery Gap Analysis

### Current State vs Required State

| Layer | Current Avg | Required (2026) | Required (2027) | Gap |
|:-----:|:----------:|:---------------:|:---------------:|:---:|
| L1 Edge HW | L2.5 | L3 | L4 | -0.5 |
| L2 Middleware | L1.5 | L3 | L4 | **-1.5** |
| L3 AI Models | L1.5 | L3 | L4 | **-1.5** |
| L4 Inference | L1.0 | L3 | L4 | **-2.0** |
| L5 Training | L0.5 | L2 | L3 | **-1.5** |
| L6 Validation | L0.5 | L2 | L3 | **-1.5** |
| L7 Deployment | L0.5 | L2 | L3 | **-1.5** |

**Binding constraint:** L4 (Inference) + L2 (ROS2) — without these, AI models can't run on edge hardware in real-time, which is the CORE of ACH.

### Priority Stack (what to master FIRST)

```
PHASE 1 (0-3 months) — "Run AI on Edge"
  ├── ROS2 fundamentals (L2 middleware)
  ├── PyTorch → ONNX → TensorRT pipeline (L3→L4 bridge)
  ├── Jetson Orin Nano development (L1 compute)
  └── ArduPilot/ArduSub + MAVROS integration (L2)

PHASE 2 (3-6 months) — "Train Custom Models"
  ├── Transfer learning on YOLO + custom datasets (L3+L5)
  ├── Pose estimation (MediaPipe) for 12.7MM coaching (L3)
  ├── Sensor fusion (EKF) for USV navigation (L3)
  ├── DVC + Label Studio data pipeline (L5)
  └── INT8 quantization workflow (L4)

PHASE 3 (6-12 months) — "Prove It Works"
  ├── Performance Envelope testing framework (L6)
  ├── Environmental stress testing on Jetson (L6)
  ├── Model versioning + OTA prototype (L7)
  ├── A/B testing: AI vs hardware baseline (L6)
  └── TCVN/MIL-STD compliance documentation (L6)

PHASE 4 (12-24 months) — "Scale & Compound"
  ├── Model library with standard interfaces (L3+L5+L7)
  ├── Continuous monitoring + drift detection (L6+L7)
  ├── Synthetic data generation (L5)
  ├── Cross-product model transfer (L3+L5)
  └── Fleet management for deployed units (L7)
```

---

## 4. ACH Tech Stack × Product Matrix

| Product | L1 HW | L2 MW | L3 AI | L4 Infer | L5 Train | L6 Valid | L7 Deploy |
|---------|:-----:|:-----:|:-----:|:--------:|:--------:|:--------:|:---------:|
| **VN-12.7MM-SIM I-08** (ACH showcase) | Jetson Orin | ROS2 | YOLO + Pose | TensorRT | Transfer learn | Envelope test | OTA v1 |
| **VN-USV-SS-001** (ACH GO) | Pixhawk + Jetson | ArduSub + ROS2 | EKF fusion + path planning | ONNX | Field data | Sea trial | USB update |
| **BB-01 LOMAH** (scouting) | CM4 + Piezo | Custom | Audio CNN | TFLite | Acoustic dataset | Range test | Manual |
| **V-SMASH** (existing ACH) | Jetson | Custom | YOLO + ballistic | TensorRT | Field data | Lab + field | Manual |

---

## 5. Minimum Viable ACH Stack (for Lab Demonstrator)

For VN-USV-SS-001 lab demonstrator ($140):

```
MINIMUM VIABLE STACK:
  L1: Pixhawk 6X + pressure sensor + IMU
  L2: ArduSub firmware (stock)
  L3: PID depth hold (not AI yet — prove concept first)
  L4: N/A (no inference needed for demonstrator)
  L5: N/A
  L6: Manual test log (depth hold accuracy ±50mm)
  L7: USB firmware update

→ AI layers (L3-L7) start in Phase 1 after concept proven physically
→ This follows [[Physical-World Interface]]: prove physics first, add AI second
```

---

## 6. Three Laws Applied to Tech Stack

### Substrate Law: "You cannot forge what you cannot fuel"
- **Fuel = L5 (Training Data)** — without data, L3 models are generic, not product-specific
- **Anvil = L4 (Inference Engine)** — without optimization, models too slow for real-time
- **Smith = AI Engineering Talent** — S3 constraint, currently 1-2 people

### Envelope Law: "Average performance is a lie"
- **L6 (Validation)** is where Envelope Law lives
- Lab accuracy 95% means nothing if field accuracy drops to 70% in rain/heat/vibration
- Every ACH product MUST have L6 before deployment

### Identity Law: "Checklist → tactic, identity → transformation"
- **L7 (Deployment/OTA)** + **L5 (Training Pipeline)** = compound loop infrastructure
- Without L5+L7, each product is a one-shot, no learning, no compound
- With L5+L7, every deployment GENERATES data that IMPROVES next version → R1 flywheel activates

---

## 7. Archived Projects ACH Insights (13 projects analyzed)

### ACH Potential Map — Full Portfolio (Active + Archived)

| Project | Status | ACH Level | Key Sub-Functions | Tech Stack | Unique Insight |
|---------|--------|:---------:|-------------------|-----------|----------------|
| **VN-AIROBOT** | Archived | L1+L2+**L3** | Depth estimation, path planning, stuck recovery, scene commentary | CM4, Claude API, MobileNet, mono camera | **6 ACH instances** — richest reference. L3 EMERGE: capabilities CANNOT exist as hardware |
| **VN-AICC** | Archived | L2 | Real-time coaching inference, state machine, E-stop | CM4, custom PCB, GPIO, HW watchdog | **CM4 inference latency = UNVALIDATED** — biggest architectural risk. E-stop ≤200ms |
| **VN-AICAM** | Archived | L2 | Object detection ≥95% ≤30ms, PTZ control, multi-camera fusion | Jetson/edge (≤25W), ONVIF, 8-stream | **Solution bias removal:** "NVIDIA Jetson" → "≤25W, ≥95%, ≤30ms" (P&B abstraction) |
| **VN-NGT** | Archived | L2 | Fire control simulation, ballistics, metocean effects | IRONMESH platform, 3D engine | **50-60% reuse** via IRONMESH — fire control = platform asset, not per-product |
| **VN-MRT** | Archived | L2+**L3** | FO targeting, FDC calculation, scenario adaptation | IRONMESH platform | **Gateway to indirect fire cluster.** Networked FO+FDC+Mortar = impossible in HW |
| **VN-GCT** | Archived | L2 | Shoot/no-shoot AI, CQB opponent behavior, team coordination | IRONMESH platform | AI shoot/no-shoot replaces human role-players for repetitive CQB training |
| **VN-HW** | Archived | L2 | Recoil fidelity (haptic), anti-tank guidance, blast effects | IRONMESH (70-93% reuse) | Recoil = AI-modeled, not mechanical springs |
| **VN-MANPADS** | Archived | L3 | IR seeker simulation, adaptive scenarios | Training simulator | Post-Ukraine drone training demand = market driver |
| **VN-RCWS** | Archived | NO (mech) | Gun mount traverse/elevation only | Hydraulic/pneumatic | **Future L2:** AI-assisted fire control could upgrade |
| **VN-NVL** | Archived | L1 | Auto-scoring (camera + bullet-hole counting) | Vision system | Camera replaces manual target inspection |
| VN-12.7MM-SIM | **Active** | L2 | AI coaching + recoil compensation | Jetson, ROS2, YOLO, Pose | Primary ACH showcase |
| VN-USV-SS-001 | **Active** | L2 | COTS navigation replaces INS | Pixhawk, ArduSub, ROS2 | ACH GO, 97% cost reduction |
| BB-01 LOMAH | **Active** | Scouting | Piezo signal → AI scoring | CM4, TFLite, piezo | ACH boundary: information processing ✓ |

### 5 Strategic Insights from Archives (NEW — not in active projects)

**1. Hybrid Cloud-Edge ACH (from VN-AIROBOT)**
Pattern: Cloud AI primary (Claude multimodal) + Edge fallback (MobileNet) khi mất kết nối 4G.
→ **Bổ sung vào L3:** thêm "Hybrid inference architecture" — không chỉ edge-only

**2. Level 3 EMERGE > Cost Optimization (from VN-AIROBOT + VN-MRT)**
Path planning, stuck recovery, scenario adaptation = capabilities KHÔNG THỂ MUA bằng hardware.
→ **ACH thesis nên nhấn mạnh:** L3 EMERGE tạo giá trị ∞, không chỉ giảm chi phí

**3. Inference Latency = Blocking Constraint (from VN-AICC)**
CM4 inference latency chưa validate → block toàn bộ Phase 3. E-stop ≤200ms = safety-critical.
→ **Bổ sung vào L4+L6:** "Validate inference latency on target hardware BEFORE system design"

**4. Solution Bias Removal (from VN-AICAM)**
Spec ban đầu viết "NVIDIA Jetson" → vi phạm Pahl-Beitz solution-neutral. Sửa thành: "≤25W, ≥95%, ≤30ms".
→ **Bổ sung vào L1 selection rule:** "Specify PERFORMANCE BUDGET, not vendor/part number"

**5. IRONMESH Platform = ACH Multiplier (from VN-NGT + VN-MRT + VN-GCT + VN-HW)**
Fire control algorithms, ballistics, metocean effects = PLATFORM assets shared 50-93% across products.
→ **Bổ sung vào L3:** "IRONMESH platform layer" giữa AI models và product-specific code
→ **R5 (Model Reuse) activation:** platform reuse IS the compound mechanism

### Updated Tech Stack (8 Layers — added IRONMESH Platform)

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 7: DEPLOYMENT & OTA                     │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 6: VALIDATION & TESTING                 │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 5: AI/ML TRAINING                       │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 4: INFERENCE ENGINE                     │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 3b: PRODUCT-SPECIFIC AI                 │
│  YOLO detection · Pose estimation · Audio CNN · Depth est        │
├─────────────────────────────────────────────────────────────────┤
│              ★ LAYER 3a: IRONMESH PLATFORM (NEW) ★              │
│  Fire control · Ballistics · Metocean · Scoring · CDM protocol  │
│  50-93% reuse across products — THE compound mechanism           │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 2: MIDDLEWARE                            │
│  ROS2 · ArduPilot · MAVROS · OpenCV · GStreamer                  │
├─────────────────────────────────────────────────────────────────┤
│                    LAYER 1: EDGE COMPUTE & SENSORS               │
│  Performance budget: ≤Xw, ≥Y%, ≤Zms (NOT vendor names)          │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. CEO Action Items (Updated with Archive Insights)

| # | Action | Layer | Timeline | COD | Source |
|---|--------|:-----:|----------|:---:|--------|
| 1 | **Buy Jetson Orin Nano dev kit** ($200) | L1 | This week | O | Active projects |
| 2 | **Complete ROS2 tutorial** (official docs, 40h) | L2 | 1 month | C | Active projects |
| 3 | **Run YOLOv8 on Jetson** via TensorRT | L3b+L4 | 2 weeks after kit | O | Active projects |
| 4 | **ArduSub + MAVROS integration** on lab USV | L2 | After demonstrator | C | Active projects |
| 5 | **Set up DVC + Label Studio** (local) | L5 | Month 2 | O | Active projects |
| 6 | **Define Performance Envelope template** | L6 | Month 3 | C | Active projects |
| 7 | **Validate CM4 inference latency** (<200ms for safety paths) | L4 | Month 2 | C | **VN-AICC archive** |
| 8 | **Document IRONMESH platform API** for reuse | L3a | Month 3 | O | **VN-NGT/MRT/GCT archives** |
| 9 | **First A/B test: AI vs baseline** on 12.7MM | L6 | Month 4-6 | C | Active projects |
| 10 | **Test hybrid cloud-edge pattern** (API + local fallback) | L3b | Month 4 | O | **VN-AIROBOT archive** |
| 11 | **Hire AI engineer #2** | All | ASAP | C | S3 constraint |
| 12 | **Audit all specs for solution bias** (vendor names → performance budgets) | L1 | Next session | O | **VN-AICAM archive** |
