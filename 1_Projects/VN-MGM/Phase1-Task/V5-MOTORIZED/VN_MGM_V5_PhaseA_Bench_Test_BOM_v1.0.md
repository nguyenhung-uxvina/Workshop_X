---
created: 2026-04-10
type: bench-test-bom
version: v1.0
project: VN-MGM
variant: V5-MOTORIZED
phase: A — Bench Test
status: sourcing
budget: $3-5K
timeline: 4 weeks (2 weeks source + 2 weeks test)
gate_a_criteria: "Motor moves, clutch works, joystick controls, EM fail-safe verified"
resolves: "TG-1 (recoil recovery), TG-2 (elastomer attenuation)"
---

# Phase A Bench Test — COTS Component Sourcing List

> **Purpose:** Validate motor + gearbox + EM clutch + controller on test bench BEFORE integrating onto V1 mount.
> **Budget:** $3-5K | **Timeline:** 4 weeks | **Resolves:** TG-1, TG-2 + 11 [ESTIMATE] values

---

## 1. Component List (COTS Sourcing)

### 1.1 Motors (×2: azimuth + elevation)

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| M-01 | **BLDC Motor (Azimuth)** | ≥200W, 24-48V, ≥2 Nm output, IP54+, hall sensors | 2 | AliExpress: 57BL / Taobao: 5718 series / Nidec | $30-80 each | Over-spec for test. Production may downsize. |
| M-02 | **BLDC Motor (Elevation)** | ≥200W, 24-48V, ≥2 Nm output, IP54+, hall sensors | (included above — same motor for commonality) | — | — | Same motor both axes = spare parts simplification |

**Selection criteria:**
- BLDC (not brushed) — marine longevity, no brush wear
- 24-48V compatible — ship power
- Hall sensors built-in — required for servo drive commutation
- IP54 minimum — upgrade to IP65 sealed housing for production

**Recommended search terms (AliExpress/Taobao):**
- "57BL BLDC motor 200W 48V hall sensor"
- "brushless DC motor 200W 24V IP54"
- "BLDC servo motor 48V 2Nm"

### 1.2 Gearboxes (×2)

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| G-01 | **Worm Gearbox (Azimuth)** | Ratio 1:60-1:100, input NEMA 23 (57mm), output ≥120 Nm, self-locking | 2 | AliExpress: NMRV040/050 / Taobao: RV reducer | $40-100 each | NMRV series = industrial standard, cheap, proven |
| G-02 | **Worm Gearbox (Elevation)** | (same spec — commonality) | (included above) | — | — | Same gearbox both axes |

**Key requirement: SELF-LOCKING.** Worm gear ratio ≥40:1 = self-lock guaranteed (gun stays put when motor stops). NMRV040 or NMRV050 series = most common COTS.

**Selection criteria:**
- Self-locking (worm angle ≤ friction angle) — CRITICAL
- NEMA 23 input flange (matches 57mm BLDC)
- Output shaft ≥18mm for coupling to mount
- Aluminum housing (NMRV standard) — lightweight

**Recommended search:**
- "NMRV050 worm gearbox 1:80 NEMA23"
- "RV reducer 57mm input self-locking"

### 1.3 Electromagnetic Clutches (×2)

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| C-01 | **EM Clutch — Normally Coupled (NC)** | 24V, hold torque ≥20 Nm, disengage ≤200ms, bore ≥15mm | 2 | AliExpress: DLD1-25/DLD2 / Taobao: electromagnetic clutch 24V | $20-60 each | **NC = fail-safe: power OFF → disengage → manual mode** |

**⚠️ CRITICAL: Must be NORMALLY COUPLED (NC), NOT normally open (NO).**
- NC: Power ON = clutch engaged (motor drives). Power OFF = clutch releases (manual free).
- NO: Power ON = clutch engaged. Power OFF = clutch holds motor → **WEAPON LOCKED** = UNSAFE.

**Verify before purchase:** Remove power → shaft must spin freely. If shaft locks = WRONG type.

**Selection criteria:**
- 24V DC coil (ship power compatible)
- NC (normally coupled / normally engaged) — **TEST THIS ON BENCH IMMEDIATELY**
- Hold torque ≥20 Nm (output shaft torque = motor torque × gear ratio, but clutch is between motor and gearbox)
- Bore matches motor shaft or gearbox input shaft
- Disengage time ≤200ms (spec says ≤1s, want 5× margin)

**Recommended search:**
- "electromagnetic clutch 24V normally engaged"
- "DLD1-25 electromagnetic clutch"
- "fail-safe clutch 24V NC disengage"

**Alternative approach:** If NC clutch hard to source → use **spring-return clutch** (spring pushes to disengage, electromagnet holds engaged). Same fail-safe behavior.

### 1.4 Controller + Drives

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| D-01 | **BLDC Servo Drive (Azimuth)** | 24-48V, ≥20A, hall+encoder input, PWM/analog/serial control | 2 | AliExpress: ZLAC8015D / ODrive / Taobao: FOC driver | $30-80 each | FOC (Field Oriented Control) preferred for smooth low-speed |
| D-02 | **BLDC Servo Drive (Elevation)** | (same — commonality) | (included above) | — | — | — |
| D-03 | **STM32 Development Board** | STM32F4 or F7, ≥2 encoder inputs, ≥2 analog inputs, CAN bus | 1 | AliExpress: STM32F407VET6 / WeAct | $8-15 | Master controller: joystick → servo drives + safety logic |
| D-04 | **Joystick — 2-axis analog** | Industrial grade, ≥10-bit, self-centering, IP54+ | 1 | AliExpress: JH-D202X / Taobao: industrial joystick | $15-40 | With button for speed mode toggle |

**Controller architecture (bench test):**

```
Joystick (analog) → STM32 (PID + safety logic) → 2× Servo Drive → 2× BLDC Motor
                                                        ↑
                                              2× Encoder (position feedback)
                                              
STM32 also controls:
  - 2× EM Clutch relay (engage/disengage)
  - E-stop input (HW interrupt)
  - Speed mode toggle input
  - Cable-cut detection (joystick signal watchdog)
```

**Recommended search:**
- "ZLAC8015D BLDC driver 48V FOC" (popular, well-documented)
- "ODrive v3.6 brushless motor controller" (open-source, excellent documentation)
- "STM32F407 development board"
- "JH-D202X industrial joystick 2-axis"

### 1.5 Encoders (×2)

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| E-01 | **Incremental Encoder** | ≥4,096 CPR, 5-24V, ABZ output, hollow/solid shaft | 2 | AliExpress: E6B2-CWZ6C (Omron compatible) / Taobao: rotary encoder | $10-25 each | Mount on gearbox output shaft (not motor shaft) |

**Mount location:** On gearbox OUTPUT shaft (measures actual weapon angle, not motor angle). This captures backlash in measurement.

### 1.6 Safety Components

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| X-01 | **E-stop Button** | Red mushroom, NC contact, panel mount, IP65 | 1 | AliExpress: LAY37 series | $3-5 | Wire in SERIES with motor power |
| X-02 | **24V Power Supply** | 24V 20A (480W), DIN rail or bench | 1 | AliExpress: Mean Well clone / Taobao | $15-30 | Bench test only — ship uses ship power |
| X-03 | **48V Power Supply** (optional) | 48V 10A (480W) | 1 | Same | $15-30 | Test wide-input compatibility |

### 1.7 Mechanical (Bench Test Fixture)

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| F-01 | **Test bench plate** | Steel plate 500×500×10mm, 4× M12 holes for V1 bolt pattern | 1 | WX CNC / local steel shop | $20-50 | Simulates deck mounting |
| F-02 | **Dummy weapon mass** | Steel pipe, ~35 kg (simulates DShK), CG-correct length | 1 | WX shop — welded from scrap | $10-20 | Weight + CG more important than shape |
| F-03 | **Motor mounting brackets** | CNC aluminum, NEMA23 face mount, 2× gearbox adapter plates | 2 | WX CNC | $30-80 | First design iteration — expect rework |
| F-04 | **Clutch mounting adapter** | Coupling between motor shaft and gearbox input via clutch | 2 | WX CNC / turned parts | $20-50 | Custom — must fit motor, clutch, gearbox shafts |
| F-05 | **Elastomer coupling bushings** | Shore A 60-70, ID/OD to match bracket, ×4 per axis | 8 | AliExpress: rubber bushing / VN rubber shop | $5-15 total | For TG-2 testing |

### 1.8 Cables + Connectors + Misc

| # | Component | Specification | Qty | Source Options | Est. Price | Notes |
|---|---|---|---|---|---|---|
| W-01 | Motor cables | 16 AWG, silicone jacket, 2m per motor | 4m | AliExpress | $5-10 | |
| W-02 | Encoder cables | Shielded 6-conductor, 2m per encoder | 4m | AliExpress | $5-10 | |
| W-03 | Joystick cable | 10m, shielded, 6-conductor + 2 for buttons | 10m | AliExpress | $5-10 | Test ER-05 (10m requirement) |
| W-04 | Connectors (various) | XT60 (power), GX16 (signal), terminal blocks | lot | AliExpress | $10-20 | |
| W-05 | Breadboard + jumper wires | For STM32 prototyping | 1 | AliExpress | $5-10 | |

---

## 2. BOM Summary + Budget

| Category | Items | Est. Cost (Low) | Est. Cost (High) |
|---|---|---|---|
| Motors (×2) | M-01 | $60 | $160 |
| Gearboxes (×2) | G-01 | $80 | $200 |
| EM Clutches (×2) | C-01 | $40 | $120 |
| Controller + Drives | D-01 to D-04 | $90 | $215 |
| Encoders (×2) | E-01 | $20 | $50 |
| Safety | X-01 to X-03 | $33 | $65 |
| Mechanical (bench) | F-01 to F-05 | $85 | $215 |
| Cables + misc | W-01 to W-05 | $30 | $60 |
| **Shipping** (AliExpress/Taobao to VN) | — | $50 | $150 |
| **Contingency (20%)** | — | $100 | $250 |
| **TOTAL** | | **$588** | **$1,485** |

**Budget: $600-$1,500** (well within $3-5K allocation). Remaining budget = rework, replacement parts, second iteration.

---

## 3. Sourcing Priority + Timeline

### Week 1-2: Source + Ship

| Priority | Component | Lead Time | Action |
|---|---|---|---|
| **P1 — Order IMMEDIATELY** | Motors (M-01 ×2), Gearboxes (G-01 ×2), EM Clutches (C-01 ×2) | 7-14 days (AliExpress) | Order today. These are longest lead time. |
| **P2 — Order Day 1** | Servo Drives (D-01 ×2), STM32 (D-03), Joystick (D-04), Encoders (E-01 ×2) | 5-10 days | Order same day as P1. |
| **P3 — Order Day 1** | E-stop (X-01), Power supplies (X-02, X-03), Cables (W-01 to W-05) | 5-10 days | Order with P2. |
| **P4 — Make in-house (WX CNC)** | Test bench plate (F-01), Dummy weapon (F-02), Motor brackets (F-03), Clutch adapters (F-04) | 3-5 days CNC time | Start CNC while waiting for AliExpress shipment. |
| **P5 — Source locally** | Elastomer bushings (F-05) | 1-2 days | VN rubber/industrial shop |

### Week 3: Assemble + First Power-On

| Day | Activity | Gate |
|---|---|---|
| Day 15-16 | Receive shipments, inspect, verify specs | All parts received? |
| Day 17-18 | Mount motor + gearbox on brackets. Mount on test bench plate. | Mechanical fit? |
| Day 19 | Install EM clutch between motor and gearbox (or gearbox and mount). Wire servo drives. | Electrical connections? |
| Day 20 | **FIRST POWER-ON** — motor spins with no load. Joystick controls speed/direction. | ✅ Motor moves? |
| Day 21 | **EM CLUTCH TEST** — engage/disengage. Pull power → measure disengage time. | ✅ ≤200ms? Fail-safe works? |
| Day 22 | Mount dummy weapon (35 kg). Test slew rate with load. | ✅ ≥60°/s with load? |
| Day 23 | Encoder calibration. Position hold test. | ✅ ±0.5° accuracy? |

### Week 4: Recoil Test + Data Collection (TG-1, TG-2)

| Day | Activity | Gate |
|---|---|---|
| Day 24 | Mount motor assembly on ACTUAL V1 mount (borrow from stock or use customer return) | V1 fit verified? |
| Day 25-26 | **ELASTOMER TEST (TG-2):** Measure vibration at motor shaft with accelerometer. Fire 10 rounds WITHOUT elastomer. Fire 10 WITH elastomer. Compare shock levels. | ✅ ≥40% reduction? |
| Day 27-28 | **RECOIL RECOVERY TEST (TG-1):** Fire 3-round burst in motor mode. Measure time from last round to position recovery (encoder data). Repeat ×10. | ✅ ≤0.3s recovery? |
| Day 29 | **ENDURANCE RUN:** 500 rounds in motor mode. Monitor motor temp, encoder drift, clutch response. | ✅ No failure in 500 rounds? |
| Day 30 | **MANUAL FALLBACK LIVE FIRE:** Fire in motor mode → pull power → verify auto-switch to manual → continue firing manually. | ✅ SC-V5-1 validated in live fire? |

---

## 4. Phase A Gate Criteria

| # | Criterion | Measurement | PASS Threshold |
|---|---|---|---|
| GA-1 | Motor moves with joystick control | Visual + encoder data | Proportional control, both axes, both modes |
| GA-2 | Slew rate with 35 kg weapon | Encoder data, stopwatch | ≥60°/s azimuth, ≥30°/s elevation |
| GA-3 | EM clutch auto-disengage | Power cut + timer | ≤200ms (≤1s per SC-V5-1) |
| GA-4 | Manual mode after clutch release | Operator test | Free rotation, effort ≤5 kg·m az, ≤3 kg·m el |
| GA-5 | Position accuracy | Encoder vs reference | ±0.5° |
| GA-6 | Recoil recovery (TG-1) | Encoder data during live fire | ≤0.3s to aim point after 3-round burst |
| GA-7 | Elastomer attenuation (TG-2) | Accelerometer with/without | ≥40% shock reduction at motor shaft |
| GA-8 | 500-round endurance | No failure during sustained fire | Motor temp ≤80°C, no encoder drift, clutch responsive |
| GA-9 | Live fire manual fallback (SC-V5-1) | Pull power during firing → continue manual | Seamless transition, trắc thủ confirms |

**ALL 9 criteria PASS → proceed to Phase B (Integration) → Phase C (Customer Demo)**
**ANY FAIL → diagnose, modify, re-test (budget allows 2 iterations)**

---

## 5. Measurement Equipment Needed

| Equipment | Purpose | Source |
|---|---|---|
| Oscilloscope (≥2 ch) | Encoder signal quality, servo drive response | WX lab (existing?) |
| Accelerometer + data logger | TG-2 shock measurement at motor shaft | Borrow / rent / ADXL345 + Arduino ($10) |
| Multimeter | Voltage, current measurement | WX lab |
| Stopwatch / timer | Clutch disengage time, recovery time | Phone timer (backup: encoder timestamp) |
| Temperature gun (IR) | Motor + gearbox temp during endurance | WX lab or $15 AliExpress |
| Laptop + USB serial | STM32 programming + data logging | CEO laptop |

**If no accelerometer available:** Use ADXL345 accelerometer module ($3-5 AliExpress) + Arduino/STM32 data logging. Adequate for ≥40% comparison measurement (relative, not absolute).

---

## 6. Risk Mitigation for Sourcing

| Risk | Mitigation |
|---|---|
| **EM clutch is NO instead of NC** | Order 2 types if unclear. TEST immediately on receipt: remove power → shaft must spin free. |
| **Motor shaft doesn't match gearbox input** | Order flexible coupling / jaw coupling ($5) as adapter. Or: machine adapter on WX lathe. |
| **Gearbox not truly self-locking** | Test: hang 35 kg weight on output, release. If it drops = NOT self-locking. Order higher ratio (1:100). |
| **AliExpress quality inconsistent** | Order from sellers with >95% rating, >1,000 orders. Keep budget for replacement. |
| **Shipping delay >14 days** | Order from multiple sellers. Critical items (motor, gearbox): order from 2 sources. |
| **V1 mount not available for live fire test** | Use WX production stock. Or: build simple steel test fixture simulating V1 bearing interface. |

---

*Phase A Bench Test BOM v1.0 | VN-MGM V5-MOTORIZED | Budget $600-$1,500 | Timeline 4 weeks | 2026-04-10*
