---
created: 2026-03-22
type: exercise-output
exercise: BT-1.1
anchor: VN-12.7MM-SIM
topic: E/M/S Full Analysis
---

# BT-1.1: E/M/S Full Analysis — VN-12.7MM-SIM (HONG HAI)

## Tổng Quan Hệ Thống

VN-12.7MM-SIM I-01 = huấn luyện xạ thủ 12.7mm DShKM trên bờ, 10 subsystems, 229 kg.

---

## 1. ENERGY FLOWS

### 1.1 Primary Energy Flows

| # | Flow | Từ → Đến | Loại | Giá trị | Domain |
|---|------|----------|------|---------|--------|
| E1 | Điện lưới → PSU | 220VAC Grid → SS9 Power Distribution | Electrical | 2,000W peak | Electrical |
| E2 | PSU → Computing | SS9 → SS4 Workstation | Electrical | 750W (PC + GPU) | Electrical |
| E3 | PSU → Visual displays | SS9 → SS5 (3× monitors) | Electrical | ~150W (3×50W) | Electrical |
| E4 | PSU → Audio system | SS9 → SS6 (5.1 amp) | Electrical | 300W peak | Electrical |
| E5 | 24VDC PSU → Magnetic brakes | SS9 → SS3 (traverse + elevation brakes) | Electrical → Magnetic → Friction heat | 120W max | Electrical/Mechanical |
| E6 | 24VDC PSU → Solenoid valve | SS9 → SS10 (fast solenoid) | Electrical → Magnetic | ~25W | Electrical |
| E7 | Khí nén → Pneumatic cylinder | Compressor → SS10 (54mm bore, 10 bar) | Pneumatic pressure → Kinetic | ~1,400–2,100 N × 25mm stroke | Mechanical |
| E8 | Compressor → Tank | 220VAC Grid → Compressor (1.5kW, riêng circuit) | Electrical → Pneumatic | 1,500W liên tục | Electrical/Mechanical |

### 1.2 Secondary Energy Flows (ẩn nhưng quan trọng)

| # | Flow | Mô tả | Giá trị | Domain |
|---|------|-------|---------|--------|
| E9 | Tản nhiệt GPU | RTX 3060 → ambient | Thermal | ~170W TDP | Thermal |
| E10 | Tản nhiệt brakes | Friction energy → heat trong brake housing | Thermal | Tùy duty cycle, ~50W avg | Thermal |
| E11 | Tản nhiệt solenoid | Coil dissipation | Thermal | ~10W | Thermal |
| E12 | Năng lượng âm thanh | SS6 speakers → operator | Acoustic | 90–120 dB(A) firing sound | Acoustic |
| E13 | Năng lượng khí xả | SS10 exhaust muffler → ambient | Pneumatic → Acoustic + Thermal | Cần muffler giảm tiếng | Mechanical |
| E14 | Kinetic — recoil truyền qua frame | SS10 cylinder → SS1 frame → floor | Vibration/Impact | ~2,000 N × 10 Hz | Mechanical |
| E15 | Kinetic — operator tác dụng | Operator hands → SS1 grips → slewing ring | Mechanical (human) | 5–15 Nm traverse | Mechanical |

### 1.3 Energy Flow Diagram

```
                                    220VAC 50Hz
                                        │
                        ┌───────────────┼───────────────┐
                        │               │               │
                   SS9: 750W PSU   SS9: 24V PSU    Compressor 1.5kW
                        │               │               │
                ┌───┬───┼───┬───┐   ┌───┼───┐      ┌───┘
                │   │   │   │   │   │       │      │
               SS4 SS5 SS6 SS7 SS8 SS3    SS10   SS10
               PC  Mon Amp LED Inst Brake  Sol    Cyl
              750W 150W 300W 5W 50W 120W  25W   pneumatic
                │   │   │               │        │
                v   v   v               v        v
              [Heat] [Light+Heat]    [Heat]   [Recoil Force
               170W   150W          ~50W     1,400-2,100 N]
                                              │
                                              v
                                         [Frame Vibration]
                                         [Exhaust Noise]
```

**Tổng cộng:** 12 Energy flows chính + 3 secondary = **15 Energy flows** ✅ (>5 required)

---

## 2. MATERIAL FLOWS

| # | Flow | Từ → Đến | Loại | Giá trị | Domain |
|---|------|----------|------|---------|--------|
| M1 | Khí nén (compressed air) | Compressor tank → regulator → solenoid → cylinder | Gas (air) | 10 bar, flow rate phụ thuộc cycling 10 Hz | Mechanical |
| M2 | Khí xả (exhaust air) | SS10 cylinder → exhaust muffler → ambient | Gas (air) | Same volume as M1, depressurized | Mechanical |
| M3 | Bolt carrier movement | SS10 cylinder piston → linkage → bolt replica | Solid (metal) | 25mm stroke, ~200g reciprocating mass | Mechanical |
| M4 | Slip ring rotation | SS1 rotating platform → stationary base (12 circuits) | Solid (copper contacts) | 360° continuous, tín hiệu + điện qua | Electro-Mechanical |
| M5 | Operator body | Standing → interacting with grips → training completed | Human (biological) | 1 person, 150 kg max load | Ergonomic |
| M6 | Cáp xoay | Cables from stationary → through slip ring → rotating parts | Copper/fiber | 12-circuit slip ring path | Electrical |
| M7 | Bụi/mài mòn | Brake pads, slewing ring → wear particles | Solid particles | Very slow, MTBF 500h maintenance cycle | Mechanical |

**Tổng cộng:** 7 Material flows ✅ (>3 required)

**Ghi chú:** VN-12.7MM-SIM là hệ thống chủ yếu xử lý ENERGY và SIGNAL — Material flows ít hơn vì không có đạn thật, không có explosive, chỉ có compressed air là material chính.

---

## 3. SIGNAL FLOWS

### 3.1 Input Signals (Operator → System)

| # | Flow | Từ → Đến | Loại | Spec | Domain |
|---|------|----------|------|------|--------|
| S1 | Traverse position | SS2 encoder → SS4 PC | Digital (TTL A/B/Z) | 65,536 CPR, 1000 Hz | Electrical |
| S2 | Elevation position | SS2 encoder → SS4 PC | Digital (TTL A/B/Z) | 65,536 CPR, 1000 Hz | Electrical |
| S3 | Trigger state | SS2 FSR → SS4 PC | Analog 0–3.3V | >30N = fire (digital), 0–100% (analog W) | Electrical |
| S4 | E-stop | SS2 NC contact → SS9 (cuts 24V rail) | Digital (hardwired) | NC → open = emergency | Electrical |

### 3.2 Processing Signals (Internal)

| # | Flow | Từ → Đến | Loại | Spec | Domain |
|---|------|----------|------|------|--------|
| S5 | Sensor data → I/O board | SS2 → USB I/O (STM32/Arduino Due) | Counter + ADC | ≤2ms latency | Electrical/SW |
| S6 | I/O board → PC | USB I/O → SS4 Workstation | USB HID | 1000 Hz polling | SW |
| S7 | Simulation engine processing | SS4 internal | CPU compute | 6-DOF ballistics, scene rendering, scoring | SW |
| S8 | Brake drive command | SS4 PC → SS3 PWM driver | PWM signal | 1 kHz, 0–100% duty cycle | Electrical |
| S9 | Solenoid fire command | SS4 PC → SS10 solenoid valve | Digital trigger | ≤15ms response, 10 Hz cycling | Electrical |
| S10 | Pressure sensor feedback | SS10 transducer → SS4 PC | Analog 0–16 bar | Real-time force measurement, data capture | Electrical |

### 3.3 Output Signals (System → Human)

| # | Flow | Từ → Đến | Loại | Spec | Domain |
|---|------|----------|------|------|--------|
| S11 | Visual scene | SS4 GPU → SS5 (3× QHD monitors) | DisplayPort video | 2560×1440, 144 Hz, ≥60 fps | Electrical/SW |
| S12 | HUD overlay | SS4 → SS5 (on-screen) | Rendered graphics | Ammo count, barrel temp, score | SW |
| S13 | Firing sound | SS4 → SS6 (5.1 amp + speakers) | Analog audio | ≥90 dB(A), ≤120 dB(A), directional | Electrical/Acoustic |
| S14 | Impact/environment audio | SS4 → SS6 | Analog audio (spatial) | Directional effects, ambient | Electrical/Acoustic |
| S15 | Status LEDs | SS4 → SS7 | Digital | System status indication | Electrical |
| S16 | Haptic recoil | SS10 cylinder → operator via grips | Mechanical impulse | 1,400–2,100 N peak, 10 Hz | Mechanical |

### 3.4 Supervisory Signals

| # | Flow | Từ → Đến | Loại | Spec | Domain |
|---|------|----------|------|------|--------|
| S17 | Instructor commands | SS8 keyboard → SS4 PC | USB HID | Pause, reset, inject, override | SW |
| S18 | Instructor display | SS4 → SS8 monitor | Video | Tổng quan session, scoring | Electrical |
| S19 | Performance data log | SS4 → SS4 storage | File I/O | Per-event timestamps, ≥12 months | SW |
| S20 | Training reports | SS4 → output (print/export) | Document | PDF/DOCX per session, MoD format | SW |
| S21 | Diagnostic data | SS4 BIST → SS8 display | Internal | Component health, error rates | SW |

**Tổng cộng:** 21 Signal flows ✅ (>5 required)

---

## 4. FLOW INTERACTIONS (E ↔ M ↔ S)

| # | Interaction | Flows liên quan | Mô tả |
|---|------------|----------------|-------|
| I1 | S controls E | S9 (solenoid cmd) → E7 (pneumatic force) | Signal trigger controls khi nào recoil fire — ≤15ms latency critical |
| I2 | S controls E | S8 (brake PWM) → E5 (brake friction) | Signal adjusts resistance feel — 0–100% duty maps to 0–20 Nm |
| I3 | E enables S | E2 (PC power) → S7 (simulation compute) | Không có điện → không có simulation → không có signal |
| I4 | M carries E | M1 (compressed air) → E7 (pneumatic force) | Air pressure = energy storage, material = medium |
| I5 | S monitors M | S10 (pressure sensor) → M1 (air flow) | Sensor đo áp suất = monitor material state |
| I6 | E→S (feedback loop) | E14 (frame vibration) → S16 (haptic to operator) | Recoil energy → haptic signal cho operator — the training value |
| I7 | S→E→S (control loop) | S1/S2 (position) → S8 (brake cmd) → E5 (friction) → S(feel) | Closed-loop: position sensing → resistance modulation → operator perceives |
| I8 | M constrains E | M7 (wear) → E5 (brake degradation) | Brake pad wear reduces torque output over time — MTBF concern |

---

## 5. DOMAIN ASSIGNMENT PER FLOW

```
┌─────────────────────────────────────────────────────────────────┐
│                   DOMAIN ASSIGNMENT MAP                         │
├────────────────┬──────────────────┬──────────────────────────────┤
│   MECHANICAL   │   ELECTRICAL     │         SOFTWARE/AI          │
├────────────────┼──────────────────┼──────────────────────────────┤
│ E7  Pneumatic  │ E1-E6 Power dist │ S7  Simulation engine       │
│ E14 Vibration  │ S1-S6 Sensing    │ S12 HUD overlay             │
│ E15 Human force│ S8  Brake PWM    │ S17 Instructor commands     │
│ M1-M3 Air/bolt │ S9  Solenoid cmd │ S19 Performance logging     │
│ M4  Slip ring  │ S10 Pressure fb  │ S20 Reports generation      │
│ M5  Operator   │ S11 Video output │ S21 Diagnostics             │
│ M7  Wear       │ S13-14 Audio     │ F3  Ballistic computation   │
│ SS1 Structure  │ S15 Status LEDs  │ F4  Training assessment     │
│ SS10 Recoil    │ SS2, SS3, SS9    │ F2  Scene generation        │
│                │ SS5, SS6, SS7    │ F6  System management       │
└────────────────┴──────────────────┴──────────────────────────────┘
```

---

## 6. KEY INSIGHTS

### 6.1 Dominant Flow Type
VN-12.7MM-SIM là **Signal-dominant system** — 21 signal flows vs 15 energy vs 7 material. Điều này nhất quán với bản chất simulator: chuyển đổi human input (signal) → computed feedback (signal), với energy chỉ phục vụ haptics + display.

### 6.2 Critical Interactions
- **I1 (Signal→Energy: solenoid → recoil)** là interaction quan trọng nhất — ≤15ms latency quyết định training transfer. Nếu chậm → [[Haptic Congruency Rule]] bị vi phạm → training scars.
- **I7 (Closed-loop position→brake→feel)** là interaction phức tạp nhất — cần calibration table + temperature compensation.

### 6.3 Hidden Flows Discovered
- **E13 (exhaust noise):** Compressor + cylinder exhaust có thể vượt E-007 (≤50 dB) → cần muffler + remote compressor placement.
- **E10 (brake thermal):** Duty cycle cao (training liên tục 12h/ngày per OP-002) → brake thermal management chưa được quantified.
- **M7 (wear particles):** Long-term material degradation ảnh hưởng E5 (friction consistency) — maintenance interval 200h (MT-003) phải cover.

### 6.4 Two-Channel Architecture qua lăng kính E/M/S
- **Channel A (Resistance):** E5 + S8 + I7 — closed-loop electrical control, NO material flow.
- **Channel B (Recoil):** E7 + M1 + M2 + M3 + S9 + S10 — open-loop pneumatic, HAS material flow (air).
- Sự khác biệt E/M/S giữa 2 channels xác nhận [[Two-Channel Law]]: chúng là 2 bài toán vật lý khác nhau.

---

## Checklist Đạt Yêu Cầu

- [x] ≥5 Energy flows identified → **15 flows**
- [x] ≥3 Material flows identified → **7 flows**
- [x] ≥5 Signal flows identified → **21 flows**
- [x] Flow interactions marked (where E crosses M, where S controls E) → **8 interactions**
- [x] Domain assignment: Mechanical / Electrical / AI per flow → **Done**
