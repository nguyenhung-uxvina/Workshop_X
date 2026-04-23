# V-SMASH Working Principles

> **Document Type**: Conceptual Design - Component Specifications
> **Version**: 1.1
> **Purpose**: Detail selected working principles for each subfunction

---

## WP-001: CMOS Image Capture

```yaml
id: "WP-VSMASH-001"
subfunction: "F1.1 - Capture scene image"
physical_effect: "Photoelectric effect in silicon"
form_design: "Rolling shutter CMOS sensor with ISP"

specification:
  resolution: "1920x1080 (Full HD)"
  frame_rate: "60 fps"
  dynamic_range: "65 dB"
  low_light: "0.1 lux with gain"
  interface: "MIPI CSI-2"

local_sourcing:
  option_1:
    part: "Sony IMX290"
    supplier: "Available via distributors"
    cost: "~$25 USD"
  option_2:
    part: "OmniVision OV2718"
    supplier: "China distributors"
    cost: "~$15 USD"

integration_notes:
  - "Standard industrial camera module form factor"
  - "Requires lens selection for FOV"
  - "ISP handles exposure, white balance"
```

---

## WP-002: YOLO-Nano Object Detection

```yaml
id: "WP-VSMASH-002"
subfunction: "F1.2 - Detect targets"
physical_effect: "CNN pattern matching"
form_design: "YOLOv8-nano optimized for edge deployment"

specification:
  model: "YOLOv8n (custom trained)"
  inference_time: "<30ms on target hardware"
  mAP: ">0.7 on custom dataset"
  classes: ["drone", "person", "vehicle", "aircraft"]
  input_size: "640x640"

training_requirements:
  dataset_size: "5000+ labeled images"
  compute: "GPU cluster (can rent cloud)"
  training_time: "~24 hours"
  validation: "Vietnam-specific test set"

local_capability:
  training: "Partner with university (HUST, VNU)"
  inference: "NVIDIA Jetson Nano/Xavier NX"
  expertise: "Growing AI community in Vietnam"

edge_optimization:
  quantization: "INT8 via TensorRT"
  pruning: "Remove unused classes"
  compilation: "ONNX → TensorRT engine"
```

---

## WP-003: Kalman Filter Tracking

```yaml
id: "WP-VSMASH-003"
subfunction: "F2.2 - Update track state"
physical_effect: "Recursive state estimation"
form_design: "Extended Kalman Filter (EKF)"

specification:
  state_vector: "[x, y, vx, vy, ax, ay]"  # 6D state
  measurement: "[x, y]"  # Detection centroid
  update_rate: "60 Hz (match sensor)"
  prediction_horizon: "100ms"

parameters:
  process_noise_Q:
    position: "1.0 px²"
    velocity: "5.0 px²/frame²"
    acceleration: "10.0 px²/frame⁴"
  measurement_noise_R:
    position: "4.0 px²"  # Detection jitter

implementation:
  language: "C++ with Eigen library"
  complexity: "O(n³) per update (n=6)"
  memory: "<1 KB per track"

local_capability:
  algorithm: "Well-documented, textbook implementations"
  expertise: "Standard control theory"
  library: "OpenCV cv::KalmanFilter available"
```

---

## WP-004: Point-Mass Ballistic Model

```yaml
id: "WP-VSMASH-004"
subfunction: "F3.3 - Calculate trajectory"
physical_effect: "Newtonian mechanics + atmospheric drag"
form_design: "3DOF point-mass with drag coefficient"

equations:
  drag_force: "F_d = 0.5 * ρ * v² * C_d * A"
  gravity: "F_g = m * g"
  motion: "m * a = F_d + F_g + crosswind"

parameters:
  air_density: "Function of altitude, temperature"
  drag_model: "G1 or G7 ballistic coefficient"
  muzzle_velocity: "Per weapon profile"

weapon_profiles_supported:
  - caliber: "5.56x45mm NATO"
    bc_g7: "0.151"
    muzzle_velocity: "940 m/s"
  - caliber: "7.62x39mm"
    bc_g7: "0.115"
    muzzle_velocity: "715 m/s"
  - caliber: "7.62x54mmR"
    bc_g7: "0.180"
    muzzle_velocity: "830 m/s"
  - caliber: "12.7x108mm"
    bc_g7: "0.620"
    muzzle_velocity: "850 m/s"

implementation:
  method: "4th order Runge-Kutta integration"
  step_size: "1ms"
  range: "Up to 1000m"
  computation_time: "<1ms"

local_capability:
  algorithm: "Standard physics, well-documented"
  validation: "Requires range testing data"
  expertise: "Weapons institute capability"
```

---

## WP-005: Solenoid Trigger Gate

```yaml
id: "WP-VSMASH-005"
subfunction: "F5.1/F5.2 - Hold/Release trigger"
physical_effect: "Electromagnetic actuation"
form_design: "Push-type solenoid with return spring"

specification:
  response_time: "<5ms"
  holding_force: "20N minimum"
  stroke: "5-10mm"
  voltage: "12V DC"
  current: "500mA peak, 200mA hold"

mechanism_options:
  option_A:
    name: "Trigger blocking"
    description: "Solenoid blocks trigger linkage"
    pros: "Simple, retrofit to any weapon"
    cons: "Mechanical complexity"
  option_B:
    name: "Electronic trigger interrupt"
    description: "Electronic gate in trigger circuit"
    pros: "Clean integration for e-triggers"
    cons: "Requires electronic trigger (MTB-20 compatible)"

mtb20_integration:
  trigger_type: "Electronic (24V solenoid)"
  interface: "Parallel gate circuit"
  implementation: "FET switch in trigger line"
  advantage: "No mechanical modification needed"

local_sourcing:
  solenoid: "Available from China/domestic"
  driver: "MOSFET H-bridge, standard"
  cost: "~$5 USD per unit"
```

---

## WP-006: 6-Axis IMU

```yaml
id: "WP-VSMASH-006"
subfunction: "F3.1 - Sense weapon orientation"
physical_effect: "MEMS accelerometer + gyroscope"
form_design: "6-axis IMU chip"

specification:
  gyro_range: "±2000 °/s"
  accel_range: "±16g"
  sample_rate: "1000 Hz"
  noise: "0.01 °/s RMS gyro"
  interface: "SPI/I2C"

candidate_parts:
  - part: "BMI160"
    supplier: "Bosch"
    cost: "$5"
    notes: "Widely used, proven"
  - part: "ICM-20689"
    supplier: "TDK InvenSense"
    cost: "$4"
    notes: "Good noise characteristics"
  - part: "LSM6DSO"
    supplier: "STMicroelectronics"
    cost: "$3"
    notes: "Machine learning core built-in"

integration:
  mounting: "Aligned with weapon axis"
  calibration: "Factory + field zero"
  filtering: "Complementary filter for attitude"
```

---

## WP-007: Force Sensor (Trigger)

```yaml
id: "WP-VSMASH-007"
subfunction: "F4.1 - Sense trigger pressure"
physical_effect: "Piezoresistive force measurement"
form_design: "FSR (Force Sensing Resistor)"

specification:
  range: "0-50N"
  resolution: "0.1N"
  response_time: "<1ms"
  interface: "Analog voltage"

candidate_parts:
  - part: "FSR402"
    supplier: "Interlink Electronics"
    cost: "$3"
    notes: "Standard, widely available"
  - part: "FlexiForce A201"
    supplier: "Tekscan"
    cost: "$20"
    notes: "Higher accuracy"

mounting_options:
  - "Behind existing trigger"
  - "In trigger guard"
  - "Integrated in grip"

threshold_logic:
  pressure_threshold: "5N minimum (intentional press)"
  hold_time: "50ms minimum (not accidental)"
```

---

## WP-008: See-Through Optic Display

```yaml
id: "WP-VSMASH-008"
subfunction: "F6.1 - Display aim point"
physical_effect: "Holographic/Reflex sight principle"
form_design: "See-through optic with electronic reticle overlay"

specification:
  magnification: "1x (non-magnifying)"
  fov: "15° minimum"
  eye_relief: "Unlimited"
  reticle: "Red dot + electronic overlay"
  brightness: "Auto-adjusting"

design_approach:
  base: "Commercial reflex sight housing"
  modification: "Add OLED micro-display for information overlay"
  integration: "Beam combiner to merge AI info with sight picture"

information_displayed:
  - "Aim point (static reticle)"
  - "Target lock indicator (when tracking)"
  - "Lead indicator (predicted impact point)"
  - "Fire readiness (color change)"
  - "System status (icons)"

local_capability:
  housing: "Local CNC machining"
  optics: "Import lenses, local assembly"
  electronics: "Local PCB assembly"
```

---

## WP-009: NVIDIA Jetson Processing

```yaml
id: "WP-VSMASH-009"
subfunction: "Processing platform for F1.2, F2.2, F3.3, F4"
physical_effect: "GPU-accelerated computing"
form_design: "NVIDIA Jetson Nano / Xavier NX"

jetson_nano_spec:
  gpu: "128 CUDA cores"
  cpu: "Quad-core ARM A57"
  memory: "4GB LPDDR4"
  power: "5-10W"
  ai_performance: "472 GFLOPS (FP16)"
  cost: "$150 (dev kit)"

jetson_xavier_nx_spec:  # Future upgrade
  gpu: "384 CUDA cores + 48 Tensor cores"
  cpu: "6-core NVIDIA Carmel ARM"
  memory: "8GB LPDDR4x"
  power: "10-15W"
  ai_performance: "21 TOPS (INT8)"
  cost: "$400"

software_stack:
  os: "JetPack (Ubuntu-based)"
  ai_framework: "TensorRT for optimized inference"
  cv_library: "OpenCV with CUDA"
  languages: "Python (prototyping), C++ (production)"

upgrade_path:
  phase_1: "Jetson Nano (sufficient for HOG+SVM)"
  phase_2: "Xavier NX if YOLO + thermal needed"
```

---

## Bill of Materials Summary

| Item | Part | Qty | Unit Cost | Local? | Total |
|------|------|-----|-----------|--------|-------|
| Processing | Jetson Nano | 1 | $150 | Import | $150 |
| Carrier Board | Custom PCB | 1 | $50 | Yes | $50 |
| Camera | Sony IMX290 module | 1 | $30 | Import | $30 |
| IMU | BMI160 | 1 | $5 | Import | $5 |
| Trigger Sensor | FSR402 | 1 | $3 | Import | $3 |
| Lens | M12, 15° FOV | 1 | $20 | Import | $20 |
| Optic Housing | Custom aluminum | 1 | $80 | Yes | $80 |
| Reticle Glass | Etched | 1 | $15 | Yes | $15 |
| Solenoid | 12V push-pull | 1 | $5 | Import | $5 |
| Driver Board | MOSFET H-bridge | 1 | $10 | Yes | $10 |
| Battery | 18650 3400mAh | 2 | $4 | Import | $8 |
| PMIC | 5V/3.3V regulation | 1 | $15 | Yes | $15 |
| Enclosure | Aluminum CNC | 1 | $100 | Yes | $100 |
| Mount | Picatinny, steel | 1 | $20 | Yes | $20 |
| Misc | Cables, fasteners | 1 | $33 | Mixed | $33 |
| **SUBTOTAL** | | | | | **$544** |
| Assembly Labor | 4 hours | 1 | $60 | Yes | $60 |
| Testing/QC | 2 hours | 1 | $40 | Yes | $40 |
| **TOTAL** | | | | | **$644** |

**Local Content**: ~55% by value (target: >60% - need to localize more)

---

## Related Documents

- [[morphological-matrix]] - How WPs were selected
- [[function-structure]] - Functions these WPs solve
- [[requirements/v1.1-summary]] - Requirements driving specifications
- [[decisions/log]] - Decision rationale

---

*Document follows Pahl & Beitz Working Principle methodology*
*Last updated: 2026-01-26*
