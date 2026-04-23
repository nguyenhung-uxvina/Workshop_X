# V-SMASH Phase 1 Development Test Plan

> **Document ID**: TP-VSMASH-DEV-001
> **Status**: ✅ READY FOR EXECUTION
> **Revision**: A
> **Date**: 2026-01-29

---

## 1. Scope

| Item | Value |
|------|-------|
| **Product** | V-SMASH Fire Control System |
| **Phase** | Phase 1 (HOG+SVM baseline) |
| **Duration** | 6 months (Feb-Jul 2026) |
| **Key Deliverable** | Detection <50ms, Tracking <20ms |

---

## 2. Test Phases Overview

```
V-SMASH PHASE 1 TEST PROGRESSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MONTH 1-2: Algorithm Development
├── TD-01: HOG+SVM Detection Test
├── TD-02: Kalman Filter Tracking Test
└── TD-03: Jetson Performance Benchmark

MONTH 3: Integration Testing
├── TI-01: Camera-Jetson Integration
├── TI-02: IMU Integration
└── TI-03: Full Pipeline Test

MONTH 4-5: Prototype Testing
├── TP-01: Fire Control Logic Test
├── TP-02: Solenoid Response Test
└── TP-03: System Latency Test

MONTH 6: Validation & Demo
├── TV-01: Detection Accuracy Validation
├── TV-02: Environmental Testing
└── TV-03: Customer Demo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 3. Algorithm Development Tests (Month 1-2)

### TD-01: HOG+SVM Detection Test

**Objective**: Validate HOG+SVM can detect targets on Jetson Xavier NX

| Test Case | Input | Expected | Pass Criteria |
|-----------|-------|----------|---------------|
| TD-01a | Static image, 1 target | Detection box | IoU ≥70% with ground truth |
| TD-01b | Static image, 4 targets | 4 detection boxes | All 4 detected, IoU ≥70% |
| TD-01c | Video 30fps, moving target | Continuous detection | ≥90% frames detected |
| TD-01d | Video, partial occlusion | Detection maintained | ≥70% frames detected |
| TD-01e | Video, lighting changes | Robust detection | ≥80% frames detected |

**Performance Requirements**:

| Metric | Requirement | Measurement Method |
|--------|-------------|-------------------|
| Detection time | <50ms | GPU profiler |
| Detection rate | ≥90% | True positives / Total targets |
| False positive rate | <5% | False detections / Total frames |

**Test Dataset**:
- 1000 images with labeled targets
- 10 video sequences (30 sec each)
- Varied lighting: bright, dim, backlit
- Varied backgrounds: sky, water, land

**Data Collection Plan**:
- Week 1-2: Capture images at Workshop X test area
- Week 3-4: Capture at outdoor ranges
- Format: 1080p PNG, YOLO annotation format

---

### TD-02: Kalman Filter Tracking Test

**Objective**: Validate Kalman filter maintains smooth tracking

| Test Case | Scenario | Expected | Pass Criteria |
|-----------|----------|----------|---------------|
| TD-02a | Constant velocity | Smooth track | Position error <10 pixels |
| TD-02b | Acceleration | Track follows | Position error <20 pixels |
| TD-02c | Detection dropout (5 frames) | Track predicts | Continues tracking |
| TD-02d | Detection dropout (10 frames) | Track predicts | Resumes when detected |
| TD-02e | Two targets crossing | Maintains identity | No ID swap |

**Performance Requirements**:

| Metric | Requirement | Measurement |
|--------|-------------|-------------|
| Update time | <20ms | Timer measurement |
| Prediction accuracy | <5° heading error | Ground truth comparison |
| Track continuity | ≥95% | Frames tracked / Total frames |

---

### TD-03: Jetson Performance Benchmark

**Objective**: Validate Jetson Xavier NX meets real-time requirements

| Test Case | Configuration | Metric | Pass Criteria |
|-----------|---------------|--------|---------------|
| TD-03a | 15W mode | FPS | ≥30 fps |
| TD-03b | 10W mode | FPS | ≥20 fps |
| TD-03c | Full pipeline | Latency | <100ms end-to-end |
| TD-03d | 4-hour run | Thermal | <80°C sustained |
| TD-03e | Memory usage | RAM | <6GB (of 8GB) |

**Benchmark Script**:
```python
# benchmark_pipeline.py
import time
import cv2
from detector import HOGSVMDetector
from tracker import KalmanTracker

def benchmark(video_path, iterations=1000):
    cap = cv2.VideoCapture(video_path)
    detector = HOGSVMDetector()
    tracker = KalmanTracker()
    
    times = []
    for i in range(iterations):
        ret, frame = cap.read()
        if not ret:
            cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
            continue
        
        start = time.perf_counter()
        detections = detector.detect(frame)
        tracks = tracker.update(detections)
        elapsed = (time.perf_counter() - start) * 1000
        times.append(elapsed)
    
    print(f"Mean: {np.mean(times):.1f}ms")
    print(f"P95: {np.percentile(times, 95):.1f}ms")
    print(f"Max: {max(times):.1f}ms")
```

---

## 4. Integration Tests (Month 3)

### TI-01: Camera-Jetson Integration

**Objective**: Verify camera streams correctly to Jetson

| Test Case | Camera | Expected | Pass Criteria |
|-----------|--------|----------|---------------|
| TI-01a | IMX290 via CSI | 1080p/60fps stream | No dropped frames |
| TI-01b | IMX477 via CSI | 4K/30fps stream | No dropped frames |
| TI-01c | Both cameras | Simultaneous stream | Both stable |
| TI-01d | Low light | Usable image | Detection possible |
| TI-01e | High contrast | No saturation | Dynamic range OK |

**Setup**:
1. Connect camera to CSI-0
2. Run gstreamer pipeline
3. Verify with `v4l2-ctl`
4. Measure actual FPS

---

### TI-02: IMU Integration

**Objective**: Verify IMU provides orientation data

| Test Case | Movement | Expected | Pass Criteria |
|-----------|----------|----------|---------------|
| TI-02a | Static | Stable readings | Drift <1°/min |
| TI-02b | 90° rotation | Accurate heading | Error <2° |
| TI-02c | Rapid movement | Track motion | Smooth, no jumps |
| TI-02d | Vibration | Filter noise | Stable orientation |

**Data Format**:
```
Timestamp, Roll, Pitch, Yaw, AccelX, AccelY, AccelZ
```

---

### TI-03: Full Pipeline Test

**Objective**: Verify complete detection→tracking→output chain

| Test Case | Input | Expected Output | Pass Criteria |
|-----------|-------|-----------------|---------------|
| TI-03a | Live camera + static target | Stable bounding box | Box stable ±5 pixels |
| TI-03b | Live camera + moving target | Tracking follows | Track lag <100ms |
| TI-03c | Live + IMU | Compensated output | Platform motion removed |
| TI-03d | 4 targets | All tracked | All 4 tracked independently |

---

## 5. Prototype Tests (Month 4-5)

### TP-01: Fire Control Logic Test

**Objective**: Verify fire control decision algorithm

| Test Case | Scenario | Expected Decision | Pass Criteria |
|-----------|----------|-------------------|---------------|
| TP-01a | Target in kill zone | FIRE | Decision <10ms |
| TP-01b | Target outside zone | HOLD | No fire command |
| TP-01c | Target entering zone | PREDICT→FIRE | Lead time correct |
| TP-01d | Multiple targets | Priority selection | Engages closest |
| TP-01e | Target behind friendly | INHIBIT | No fire command |

**Fire Control Parameters**:
- Kill zone: configurable sector
- Lead angle: based on target velocity
- Engagement priority: distance, angle, time in zone

---

### TP-02: Solenoid Response Test

**Objective**: Verify solenoid actuates reliably

| Test Case | Input | Expected | Pass Criteria |
|-----------|-------|----------|---------------|
| TP-02a | Single pulse | Solenoid fires | Response <20ms |
| TP-02b | Rapid fire (5 Hz) | All pulses fire | 100% reliability |
| TP-02c | Extended burst (50) | All pulses fire | No thermal cutout |
| TP-02d | 1000 cycle endurance | Consistent response | <5% degradation |

**Measurement**:
- Oscilloscope: trigger signal → solenoid current
- High-speed camera: actual mechanical response

---

### TP-03: System Latency Test

**Objective**: Verify end-to-end latency meets spec

```
LATENCY BUDGET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Camera capture      ████                    16ms (60fps)
Detection (HOG)     ████████████████        40ms target
Tracking (Kalman)   ████                    15ms target
Fire control logic  ██                       5ms target
Solenoid actuation  ████                    20ms measured
─────────────────────────────────────────────────────
TOTAL TARGET:       ████████████████████████ <100ms

MARGIN:             ████                      4ms
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Test Method**:
1. Flash LED in camera view (trigger event)
2. Measure time to solenoid activation
3. Use oscilloscope for precise timing

| Component | Budget | Measured | Status |
|-----------|--------|----------|--------|
| Camera | 16ms | ___ms | ☐ |
| Detection | 40ms | ___ms | ☐ |
| Tracking | 15ms | ___ms | ☐ |
| Fire control | 5ms | ___ms | ☐ |
| Solenoid | 20ms | ___ms | ☐ |
| **TOTAL** | **<100ms** | ___ms | ☐ |

---

## 6. Validation Tests (Month 6)

### TV-01: Detection Accuracy Validation

**Objective**: Validate detection accuracy on representative dataset

| Metric | Target | Test Method |
|--------|--------|-------------|
| True Positive Rate | ≥90% | 1000 labeled images |
| False Positive Rate | <5% | 1000 negative images |
| Detection Time | <50ms | Timed on 1000 images |
| Tracking Continuity | ≥95% | 10 video sequences |

---

### TV-02: Environmental Testing

**Objective**: Verify operation in field conditions

| Test | Condition | Duration | Pass Criteria |
|------|-----------|----------|---------------|
| High temp | 50°C ambient | 4 hr | All functions OK |
| Sun exposure | Direct sunlight | 8 hr | No overheating |
| Rain | Light rain simulation | 30 min | Functions OK |
| Vibration | Vehicle mount, driving | 2 hr | Functions OK |

---

### TV-03: Customer Demo

**Objective**: Demonstrate system capability to customer

| Demo Item | Description | Duration |
|-----------|-------------|----------|
| System overview | Architecture, capability | 15 min |
| Live detection | Camera → screen visualization | 15 min |
| Tracking demo | Moving target tracking | 15 min |
| Solenoid demo | Fire command → actuation | 10 min |
| Q&A | Customer questions | 20 min |

---

## 7. Test Environment

### 7.1 Development Lab

| Equipment | Specification | Status |
|-----------|---------------|--------|
| Jetson Xavier NX | 3 units | To procure |
| IMX290 Camera | 4 units | To procure |
| IMU BNO055 | 4 units | To procure |
| Oscilloscope | 100MHz, 2ch | Available |
| Power Supply | 19V/5A | To procure |
| Test Monitor | 24" HDMI | Available |

### 7.2 Indoor Test Area (5m ceiling)

**Suitable for**:
- Algorithm development
- Integration testing
- Solenoid testing

### 7.3 Outdoor Test Area (25m)

**Suitable for**:
- Field validation
- Extended range testing
- Customer demo

---

## 8. Test Schedule Summary

| Month | Focus | Key Deliverable |
|-------|-------|-----------------|
| 1 | Algorithm dev | HOG+SVM on Jetson |
| 2 | Tracking | Kalman filter integrated |
| 3 | Integration | Full pipeline working |
| 4 | Prototype build | 3 units assembled |
| 5 | Testing | All tests complete |
| 6 | Validation | Demo ready, Gate 3 prep |

---

## 9. Risk Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Detection too slow | Medium | High | Profile early, optimize |
| Camera quality | Low | Medium | Test multiple models |
| IMU drift | Medium | Medium | Calibration procedure |
| Solenoid reliability | Low | High | Endurance testing |
| Thermal issues | Medium | Medium | Heat sink design |

---

## 10. References

- [[Dev-Kit-Procurement]] - Hardware procurement
- [[Phase-1-Schedule]] - Project schedule
- [[Resource-Plan]] - Team allocation

---

*Test plan supports Gate 2 (DfX) and Gate 3 (Pre-Production) readiness*
*Per Workshop X 3-Gate Quality System*
