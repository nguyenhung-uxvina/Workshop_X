---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Morphological Matrix
subsystem: SS3 Motion Platform
---

# SS3: Motion Platform — Morphological Matrix
## VN-CUAV-SIM-001 | Phase 2: Conceptual Design

**Scope:** Ship motion simulation (roll/pitch) cho xạ thủ cảm nhận sóng biển khi bắn
**Requirements liên quan:** K-03, K-04, K-06, F-04, Sa-05, Er-02, Sa-02

---

## Sub-functions của SS3

```
SS3: MOTION PLATFORM
├── SF1: Roll simulation — nghiêng ngang ±12° (sea state)
├── SF2: Pitch simulation — chúi dọc ±8°
├── SF3: Seat + restraint — ghế + dây an toàn
├── SF4: Motion controller — sync wave data ↔ actuator
└── SF5: Platform structure — khung chịu lực + mounting
```

---

## Morphological Matrix

### SF1+SF2: Roll + Pitch Actuators (combined — cùng platform)

|                      | **WP-A** ★                                             | **WP-B**                          | **WP-C**                    | **WP-D**                |
| -------------------- | ------------------------------------------------------ | --------------------------------- | --------------------------- | ----------------------- |
| **Nguyên lý**        | 2-DOF electric linear actuator platform (Stewart-lite) | 3-DOF electric (roll+pitch+heave) | Pneumatic cylinders         | No motion (visual-only) |
| **Roll**             | ±12° ✓                                                 | ±15°                              | ±12°                        | N/A                     |
| **Pitch**            | ±8° ✓                                                  | ±10°                              | ±8°                         | N/A                     |
| **Heave (K-06)**     | Không (wish only)                                      | ±5cm ✓                            | Có thể                      | N/A                     |
| **Tải trọng (F-04)** | ≥ 130kg ✓                                              | ≥ 130kg                           | ≥ 130kg                     | N/A                     |
| **Chu kỳ (K-04)**    | 4-8s (ship period) ✓                                   | 4-8s ✓                            | 4-8s nhưng ồn               | N/A                     |
| **Chi phí**          | $2,000-3,500 (2 actuators + frame)                     | $4,000-6,000                      | $3,000-5,000 (+ compressor) | $0                      |
| **Noise**            | Thấp (electric)                                        | Thấp                              | Cao (pneumatic)             | Không                   |
| **Safety (Sa-05)**   | Hard stop cơ học tại ±12°/±8° ✓                        | Hard stop ✓                       | Hard stop ✓                 | N/A                     |
| **E-stop (Sa-02)**   | Power cut → actuator lock ≤ 1s ✓                       | Same ✓                            | Valve close ✓               | N/A                     |
| **Sản xuất VN**      | Có thể — linear actuator COTS + khung hàn              | Phức tạp hơn                      | Cần compressor              | N/A                     |

**★ Chọn WP-A:** 2-DOF electric platform (2 linear actuators, ball-screw hoặc lead-screw). Roll ±12° + Pitch ±8° đủ cho PA-2. Heave (K-06 wish) → upgrade path PA-3 bằng thêm actuator thứ 3. Quiet, reliable, no compressor. Workshop X hàn frame, mua actuator COTS (China/VN, ~$400-600 each).

---

### SF3: Seat + Restraint

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Racing sim seat (bucket) + 4-point harness | Ghế văn phòng industrial | Standing platform (no seat) |
| **Tải (F-04)** | ≥ 150kg ✓ | ≥ 130kg | N/A |
| **Điều chỉnh (Er-02)** | 3 vị trí (seat rail) ✓ | Hydraulic height | Footplate adjust |
| **Restraint** | 4-point harness (automotive) | Armrests only | Grab bar |
| **Comfort (8h, O-02)** | Tốt (đệm foam, breathable) | Tốt | Mệt |
| **Chi phí** | $200-400 | $150-300 | $50-100 |
| **Phù hợp** | Tối ưu (xạ thủ đứng/ngồi combat position) | Văn phòng, không combat | Đứng bắn (realistic nhưng mệt) |

**★ Chọn WP-A:** Racing sim bucket seat trên rail — 4-point harness giữ xạ thủ khi platform nghiêng. Điều chỉnh 3 vị trí đáp ứng Er-02. Kết hợp với weapon mount (SS1 SF8) → xạ thủ ngồi bắn giống trên tàu.

---

### SF4: Motion Controller

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Arduino/ESP32 + motor driver + Unity serial/UDP | Dedicated motion controller (SimTools, DOFReality) | PLC industrial |
| **Sync** | Unity sends wave data → MCU → actuators (UDP 50Hz) | Software plugin | Modbus/OPC |
| **Latency** | ≤ 20ms (UDP direct) | ≤ 30ms | ≤ 50ms |
| **Wave model sync** | FFT ocean height → roll/pitch command ✓ | Plugin-dependent | Custom |
| **Chi phí** | $50-100 (MCU + driver) | $200-500 (license) | $500-1000 |
| **Dev effort** | Trung bình (custom firmware) | Thấp (plug-and-play) | Cao |

**★ Chọn WP-A:** ESP32 + BTS7960 motor driver (đủ cho 2 linear actuators). Unity gửi roll/pitch command qua UDP 50Hz. MCU chạy PID control → smooth motion. Workshop X đã có kinh nghiệm MCU (BB-01, VN-12.7MM-SIM). Cost negligible.

---

### SF5: Platform Structure

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Thép hàn 60×40mm + universal joint center | Nhôm profile 80×80 + bearing | Gỗ plywood (prototype only) |
| **Tải** | ≥ 200kg ✓ | ≥ 150kg | ≥ 100kg |
| **Bolt to floor** | ✓ (M12 anchor) | ✓ | Không |
| **Chi phí** | $300-500 | $500-800 | $100 |
| **Sản xuất** | Workshop X hàn ✓ | Mua nhôm profile | DIY |

**★ Chọn WP-A:** Thép hàn, universal joint ở tâm (cho phép 2-DOF rotation). 2 actuators attach ở 2 cạnh (roll + pitch). Bolt xuống sàn M12. Workshop X tự gia công 100%.

---

## Concept Tổng Hợp SS3 — PA-2 STANDARD

```
SS3: MOTION PLATFORM — SELECTED CONCEPT
════════════════════════════════════════

ACTUATORS:    2× electric linear actuator (ball-screw, 24V/48V)
              Stroke: 150-200mm, force ≥ 500N each
              Roll ±12°, Pitch ±8°, period 4-8s

SEAT:         Racing bucket seat + 4-point harness
              3-position rail adjust (155-185cm range)
              Load capacity ≥ 150kg

CONTROLLER:   ESP32 + 2× BTS7960 motor driver
              Unity → UDP 50Hz → PID control
              Sync: ocean wave height → roll/pitch

STRUCTURE:    Thép hàn 60×40mm, universal joint center
              Bolt-to-floor M12, total platform ~40kg
              Workshop X tự chế tạo

SAFETY:       Hard stop mechanical ±12°/±8°
              E-stop: power cut → actuator lock ≤ 1s
              4-point harness at all times
```

---

## Ước Tính Chi Phí SS3

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| 2× linear actuator (ball-screw, 200mm stroke, 500N) | $800-1,200 |
| Universal joint (center pivot) | $100-150 |
| Steel frame (material + welding) | $200-300 |
| Racing bucket seat + rail + 4-point harness | $300-500 |
| ESP32 + 2× BTS7960 driver + PSU | $80-120 |
| Hardware (bolts, anchors, wiring, connectors) | $100-150 |
| **TỔNG SS3** | **~$1,580-2,420** |

---

## Requirements Coverage Check

| Req ID | Yêu Cầu | Covered by | Status |
|--------|---------|------------|--------|
| K-03 | Roll ±12°, pitch ±8° | 2-DOF electric platform | ✓ |
| K-04 | Chu kỳ 4-8s (sea state) | PID controller tuned | ✓ |
| K-06 | Heave ±5cm (wish) | Không — upgrade path PA-3 | W (deferred) |
| F-04 | Load ≥ 130kg | Platform 200kg + seat 150kg rated | ✓ |
| Sa-05 | Hard stop at limits | Mechanical stops ±12°/±8° | ✓ |
| Sa-02 | E-stop ≤ 1s | Power cut → actuator lock | ✓ |
| Er-02 | Seat adjust 3 positions, ≥ 130kg | Racing seat + rail | ✓ |

**Coverage: 6/6 Demand requirements — FULL** ✓ (K-06 Wish deferred to PA-3)

---

## Next: SS4 Scenario Engine & SS5 System Integration
