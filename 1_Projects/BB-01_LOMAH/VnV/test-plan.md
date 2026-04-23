# BB-01 Test Plan: Environmental & Field Testing

> **Document**: TP-BB01-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Phase**: Prototype Verification
> **Standard**: MIL-STD-810H (Tailored)
> **Status**: ✅ APPROVED

---

## 1. Test Plan Overview

### 1.1 Purpose

Define the test strategy, procedures, and pass/fail criteria for BB-01 prototype verification through environmental and field testing.

### 1.2 Test Phases

```
┌─────────────────────────────────────────────────────────────────────┐
│                    BB-01 TEST PLAN OVERVIEW                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PHASE 1: LAB TESTING (Weeks 1-3)                                   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                │
│  │ Environmental│ │   IP/Water   │ │  Vibration   │                │
│  │  Temp/Humid  │ │   Ingress    │ │   & Shock    │                │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘                │
│         │                │                │                         │
│         └────────────────┼────────────────┘                         │
│                          ▼                                          │
│  PHASE 2: FIELD TESTING (Weeks 4-6)                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                │
│  │  Sea Deploy  │ │  Comm Range  │ │  Endurance   │                │
│  │    Test      │ │    Test      │ │    Test      │                │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘                │
│         │                │                │                         │
│         └────────────────┼────────────────┘                         │
│                          ▼                                          │
│  PHASE 3: LIVE FIRE (Week 7)                                        │
│  ┌──────────────────────────────────────────────────┐              │
│  │  Impact Detection  │  Target ID  │  Miss Zone   │              │
│  └──────────────────────────────────────────────────┘              │
│                          │                                          │
│                          ▼                                          │
│                   GATE 3 READINESS                                  │
└─────────────────────────────────────────────────────────────────────┘
```

### 1.3 Test Matrix Summary

| Test ID | Test Name | Type | Duration | Location | KPP/KSA |
|---------|-----------|------|----------|----------|---------|
| ENV-01 | Temperature Cycling | Lab | 48 hrs | Chamber | ENV.01 |
| ENV-02 | Humidity | Lab | 24 hrs | Chamber | ENV.03 |
| ENV-03 | Salt Spray | Lab | 500 hrs | Salt fog | ENV.06 |
| ENV-04 | IP67 Verification | Lab | 2 hrs | Water tank | ENV.05 |
| ENV-05 | Vibration | Lab | 4 hrs | Shaker | ENV.11 |
| ENV-06 | Drop Test | Lab | 1 hr | - | ENV.12 |
| FLD-01 | Sea Deployment | Field | 1 day | Coastal | KSA.06 |
| FLD-02 | Communication Range | Field | 4 hrs | Coastal | KPP.05 |
| FLD-03 | Endurance (24hr) | Field | 24 hrs | Coastal | KSA.01 |
| FLD-04 | Solar Charging | Field | 8 hrs | Outdoor | PWR.04 |
| LF-01 | Live Fire - Detection | Range | 1 day | Military | KPP.01 |
| LF-02 | Live Fire - Target ID | Range | 1 day | Military | KPP.06 |

---

## 2. Environmental Testing (Phase 1)

### 2.1 ENV-01: Temperature Cycling

**Objective**: Verify system operation across temperature range (0°C to +50°C)

**Reference**: MIL-STD-810H Method 501.7/502.7 (Tailored)

| Parameter | Requirement | Test Condition |
|-----------|-------------|----------------|
| Low Temperature | 0°C | 2 hours soak |
| High Temperature | +50°C | 2 hours soak |
| Rate of Change | 5°C/min max | Controlled ramp |
| Cycles | 5 | Low→High→Low |

**Test Procedure**:

```
TEMPERATURE CYCLING PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. SETUP
   ☐ Install DUT in temperature chamber
   ☐ Connect power (battery powered)
   ☐ Connect LoRa test receiver outside chamber
   ☐ Attach temperature sensors to:
      - MCU Box enclosure
      - Battery
      - PZT sensor housing

2. TEST SEQUENCE (per cycle)
   ☐ Stabilize at 25°C (30 min)
   ☐ Record baseline hit detection (tap test)
   ☐ Ramp to +50°C at 5°C/min
   ☐ Soak at +50°C for 2 hours
   ☐ Perform functional test:
      - Tap test all 4 PZT sensors
      - Verify LoRa transmission
      - Record battery voltage
   ☐ Ramp to 0°C at 5°C/min
   ☐ Soak at 0°C for 2 hours
   ☐ Perform functional test (same as above)
   ☐ Return to 25°C

3. PASS CRITERIA
   ☐ All 4 PZT channels detect impacts at all temps
   ☐ LoRa communication maintained
   ☐ No false triggers during temperature transitions
   ☐ Battery voltage within spec (>11.5V)
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| Detection at +50°C | 4/4 channels respond | ☐ Pass ☐ Fail |
| Detection at 0°C | 4/4 channels respond | ☐ Pass ☐ Fail |
| LoRa at +50°C | Packets received | ☐ Pass ☐ Fail |
| LoRa at 0°C | Packets received | ☐ Pass ☐ Fail |
| No false triggers | <2 during test | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 2.2 ENV-02: Humidity Testing

**Objective**: Verify system operation at 95% RH

**Reference**: MIL-STD-810H Method 507.6 (Tailored)

| Parameter | Requirement | Test Condition |
|-----------|-------------|----------------|
| Temperature | +40°C | Constant |
| Relative Humidity | 95% | ±5% |
| Duration | 24 hours | Continuous |

**Test Procedure**:

```
HUMIDITY TEST PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━

1. SETUP
   ☐ Place DUT in humidity chamber
   ☐ Connect LoRa receiver outside
   ☐ Remove enclosure lid (expose PCB for aggravated test) OR
   ☐ Keep enclosure sealed (standard test)

2. TEST SEQUENCE
   ☐ T+0h: Functional test baseline
   ☐ Ramp to 40°C / 95% RH
   ☐ T+4h: Functional test
   ☐ T+12h: Functional test
   ☐ T+24h: Final functional test
   ☐ Remove, allow 2hr drying at ambient
   ☐ Post-test functional test

3. FUNCTIONAL TEST
   ☐ Tap test all PZT sensors
   ☐ Verify LoRa link
   ☐ Check for condensation (visual)
   ☐ Measure insulation resistance (>10MΩ)
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| Detection at T+24h | 4/4 channels | ☐ Pass ☐ Fail |
| Post-dry detection | 4/4 channels | ☐ Pass ☐ Fail |
| Insulation resistance | >10MΩ | ☐ Pass ☐ Fail |
| No corrosion visible | Visual inspection | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 2.3 ENV-03: Salt Spray (Salt Fog)

**Objective**: Verify corrosion resistance of frame and enclosures

**Reference**: ASTM B117 / MIL-STD-810H Method 509.7

| Parameter | Requirement | Test Condition |
|-----------|-------------|----------------|
| Salt concentration | 5% NaCl | Standard |
| Temperature | 35°C | ±2°C |
| Duration | 500 hours | Continuous |
| Samples | Frame section, MCU Box | |

**Test Procedure**:

```
SALT SPRAY TEST PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━

1. SAMPLES
   ☐ Galvanized frame test coupon (100×100mm)
   ☐ MCU Box enclosure (complete assembly)
   ☐ M12 connector (mated pair)
   ☐ PZT sensor assembly

2. TEST SEQUENCE
   ☐ Document initial condition (photos)
   ☐ Place in salt fog chamber
   ☐ Inspect at intervals:
      - 24 hours
      - 96 hours
      - 168 hours
      - 336 hours
      - 500 hours
   ☐ Record any corrosion (location, type, size)

3. POST-TEST
   ☐ Rinse with fresh water
   ☐ Air dry 24 hours
   ☐ Final inspection
   ☐ Functional test (MCU Box only)
```

**Pass Criteria**:

| Sample | Criteria | Result |
|--------|----------|--------|
| Galvanized frame | No red rust | ☐ Pass ☐ Fail |
| MCU Box enclosure | No corrosion, gasket intact | ☐ Pass ☐ Fail |
| M12 connectors | Contacts clean, no corrosion | ☐ Pass ☐ Fail |
| PZT sensor | Epoxy intact, no corrosion | ☐ Pass ☐ Fail |
| Post-test functional | System operates | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 2.4 ENV-04: IP67 Water Ingress

**Objective**: Verify IP67 rating for MCU Box and IP68 for PZT sensors

**Reference**: IEC 60529

| Test | Requirement | Method |
|------|-------------|--------|
| IP67 (MCU Box) | 1m depth, 30 min | Immersion |
| IP68 (PZT Sensor) | 1m depth, 24 hr | Immersion |

**Test Procedure**:

```
IP WATER INGRESS TEST
━━━━━━━━━━━━━━━━━━━━━

TEST A: MCU BOX (IP67)
☐ Pre-test: Verify system operational
☐ Seal all cable glands, connectors mated
☐ Place moisture indicator inside enclosure
☐ Submerge to 1m depth in fresh water
☐ Maintain for 30 minutes
☐ Remove, dry exterior
☐ Open enclosure
☐ Check moisture indicator
☐ Functional test

TEST B: PZT SENSOR (IP68)
☐ Pre-test: Verify sensor operational
☐ Seal connector, cap open end
☐ Submerge to 1m depth
☐ Maintain for 24 hours
☐ Remove, dry exterior
☐ Connect to MCU Box
☐ Tap test verification
```

**Pass Criteria**:

| Test | Criteria | Result |
|------|----------|--------|
| MCU Box moisture indicator | No color change | ☐ Pass ☐ Fail |
| MCU Box functional | System operates | ☐ Pass ☐ Fail |
| PZT sensor tap test | Detection works | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 2.5 ENV-05: Vibration Testing

**Objective**: Verify system survives marine vibration environment

**Reference**: MIL-STD-810H Method 514.8 (Tailored - Marine Category)

| Parameter | Specification |
|-----------|---------------|
| Frequency range | 5-500 Hz |
| PSD level | 0.04 g²/Hz |
| Duration | 1 hour per axis |
| Axes | X, Y, Z |

**Test Procedure**:

```
VIBRATION TEST PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━

1. SETUP
   ☐ Mount DUT on shaker table
   ☐ Attach accelerometer to MCU Box
   ☐ Connect LoRa test receiver
   ☐ Power on system

2. TEST SEQUENCE
   ☐ Functional test baseline
   ☐ X-axis: Sine sweep 5-500 Hz, 1g, 1 oct/min
   ☐ X-axis: Random vibration, 1 hour
   ☐ Functional test
   ☐ Repeat for Y-axis
   ☐ Repeat for Z-axis
   ☐ Final functional test

3. MONITORING
   ☐ Log LoRa packets during test
   ☐ Record any false triggers
   ☐ Visual inspection for loose parts
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| No structural failure | Visual inspection | ☐ Pass ☐ Fail |
| Detection after X-axis | 4/4 channels | ☐ Pass ☐ Fail |
| Detection after Y-axis | 4/4 channels | ☐ Pass ☐ Fail |
| Detection after Z-axis | 4/4 channels | ☐ Pass ☐ Fail |
| LoRa during vibration | >95% packets | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 2.6 ENV-06: Drop Test

**Objective**: Verify packaged system survives shipping drops

**Reference**: MIL-STD-810H Method 516.8 Procedure IV

| Parameter | Specification |
|-----------|---------------|
| Drop height | 1.0 m |
| Surface | Concrete or steel |
| Drops | 1 per face, 6 total |
| Packaging | Standard shipping package |

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| No visible damage | Inspection | ☐ Pass ☐ Fail |
| Functional test | System operates | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

## 3. Field Testing (Phase 2)

### 3.1 FLD-01: Sea Deployment Test

**Objective**: Verify system deployment, stability, and retrieval in actual sea conditions

**Location**: Coastal waters, protected bay
**Duration**: 1 day (8 hours in water)
**Sea State**: SS2-SS3

**Test Procedure**:

```
SEA DEPLOYMENT TEST
━━━━━━━━━━━━━━━━━━━

PRE-DEPLOYMENT (Shore)
☐ Full system functional test
☐ Battery fully charged (>95%)
☐ Record initial conditions:
   - Wind: _____ km/h, direction: _____
   - Sea state: SS_____
   - Water temp: _____°C
   - Air temp: _____°C

DEPLOYMENT
☐ Transport to test area via boat
☐ Deploy catamaran platform
☐ Set anchor, verify holding
☐ Verify system powers on automatically
☐ Confirm LoRa link to shore station
☐ Record GPS position: _______________

IN-WATER TESTS (8 hours)
☐ T+0h: Baseline tap test, all 4 channels
☐ T+1h: Wave stability observation
☐ T+2h: Tap test from boat
☐ T+4h: Mid-test functional check
☐ T+6h: Tap test from boat
☐ T+8h: Final tap test

RETRIEVAL
☐ Approach platform
☐ Disconnect anchor
☐ Lift to boat
☐ Transport to shore
☐ Post-retrieval inspection:
   - Water ingress? ☐ Yes ☐ No
   - Physical damage? ☐ Yes ☐ No
☐ Post-retrieval functional test
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| Deployment time | <30 minutes | ☐ Pass ☐ Fail |
| Platform stability | No capsizing at SS3 | ☐ Pass ☐ Fail |
| LoRa link maintained | >95% uptime | ☐ Pass ☐ Fail |
| All tap tests passed | 4/4 at each interval | ☐ Pass ☐ Fail |
| No water ingress | Post-inspection | ☐ Pass ☐ Fail |
| Retrieval time | <20 minutes | ☐ Pass ☐ Fail |
| **OVERALL** | All pass | ☐ **PASS** ☐ **FAIL** |

---

### 3.2 FLD-02: Communication Range Test

**Objective**: Verify LoRa communication range ≥400m (threshold), ≥600m (objective)

**Location**: Open water with line-of-sight to shore
**Equipment**: GPS, range finder, shore station, boat

**Test Procedure**:

```
COMMUNICATION RANGE TEST
━━━━━━━━━━━━━━━━━━━━━━━━

1. SETUP
   ☐ Shore station at fixed position (GPS: _________)
   ☐ Deploy target system on water
   ☐ Boat with GPS for positioning

2. TEST SEQUENCE
   ☐ 100m: Send 20 test packets, record RSSI
   ☐ 200m: Send 20 test packets, record RSSI
   ☐ 300m: Send 20 test packets, record RSSI
   ☐ 400m (THRESHOLD): Send 50 test packets
   ☐ 500m: Send 20 test packets, record RSSI
   ☐ 600m (OBJECTIVE): Send 50 test packets
   ☐ Continue to loss of link (max range)

3. DATA COLLECTION
   | Distance | Packets Sent | Packets Received | RSSI (dBm) |
   |----------|--------------|------------------|------------|
   | 100m     | 20           |                  |            |
   | 200m     | 20           |                  |            |
   | 300m     | 20           |                  |            |
   | 400m     | 50           |                  |            |
   | 500m     | 20           |                  |            |
   | 600m     | 50           |                  |            |
   | Max      |              |                  |            |
```

**Pass Criteria**:

| Distance | Criteria | Result |
|----------|----------|--------|
| 400m (Threshold) | ≥95% packet success | ☐ Pass ☐ Fail |
| 600m (Objective) | ≥95% packet success | ☐ Pass ☐ Fail |
| RSSI at 400m | >-100 dBm | ☐ Pass ☐ Fail |
| **THRESHOLD MET** | 400m @ 95% | ☐ **PASS** ☐ **FAIL** |
| **OBJECTIVE MET** | 600m @ 95% | ☐ **MET** ☐ **NOT MET** |

---

### 3.3 FLD-03: Endurance Test (24 Hours)

**Objective**: Verify ≥24 hour operation on battery (Objective), ≥8 hour (Threshold)

**Test Procedure**:

```
24-HOUR ENDURANCE TEST
━━━━━━━━━━━━━━━━━━━━━━

1. SETUP
   ☐ Fully charge battery (record Vbat: _____V)
   ☐ Disable solar charging
   ☐ Deploy system or run in lab

2. DATA COLLECTION (every 2 hours)
   | Time | Vbat (V) | Detection OK | LoRa OK | Temp (°C) |
   |------|----------|--------------|---------|-----------|
   | T+0  |          | ☐            | ☐       |           |
   | T+2  |          | ☐            | ☐       |           |
   | T+4  |          | ☐            | ☐       |           |
   | T+6  |          | ☐            | ☐       |           |
   | T+8  |          | ☐            | ☐       |           |
   | T+12 |          | ☐            | ☐       |           |
   | T+18 |          | ☐            | ☐       |           |
   | T+24 |          | ☐            | ☐       |           |

3. END CONDITION
   ☐ 24 hours elapsed, OR
   ☐ Vbat < 11.0V (LiFePO4 cutoff), OR
   ☐ System failure
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| 8-hour threshold | System operational | ☐ Pass ☐ Fail |
| 24-hour objective | System operational | ☐ Pass ☐ Fail |
| Vbat at T+8 | >11.5V | ☐ Pass ☐ Fail |
| Vbat at T+24 | >11.0V | ☐ Pass ☐ Fail |
| **THRESHOLD MET** | 8 hours | ☐ **PASS** ☐ **FAIL** |
| **OBJECTIVE MET** | 24 hours | ☐ **MET** ☐ **NOT MET** |

---

### 3.4 FLD-04: Solar Charging Test

**Objective**: Verify solar panel maintains/charges battery during operation

**Test Procedure**:

```
SOLAR CHARGING TEST
━━━━━━━━━━━━━━━━━━━

1. CONDITIONS
   ☐ Clear sky day (>800 W/m² solar)
   ☐ Solar panel clean, unobstructed
   ☐ Battery at 50% SOC start

2. TEST (8 hours, 9AM - 5PM)
   | Time | Solar V | Charge A | Vbat | Status |
   |------|---------|----------|------|--------|
   | 09:00 |        |          |      |        |
   | 11:00 |        |          |      |        |
   | 13:00 |        |          |      |        |
   | 15:00 |        |          |      |        |
   | 17:00 |        |          |      |        |

3. VERIFICATION
   ☐ Net charge positive over test period
   ☐ Battery voltage increased
```

**Pass Criteria**:

| Check | Criteria | Result |
|-------|----------|--------|
| Charge current | >0.5A at solar noon | ☐ Pass ☐ Fail |
| Net energy | Positive over 8 hours | ☐ Pass ☐ Fail |
| **OVERALL** | Both pass | ☐ **PASS** ☐ **FAIL** |

---

## 4. Live Fire Testing (Phase 3)

### 4.1 LF-01: Impact Detection Test

**Objective**: Verify hit detection probability ≥90% (Threshold), ≥95% (Objective)

**Location**: Military range (authorized)
**Weapons**: AK-47 (7.62×39), AK-101/M16 (5.56×45)
**Range**: 200m (mid-range)

**Test Matrix**:

| Target | Caliber | Rounds | Expected Hits |
|--------|---------|--------|---------------|
| Bia 7e #1 | 7.62×39 | 10 | 10 |
| Bia 7e #2 | 7.62×39 | 10 | 10 |
| Bia 6c | 5.56×45 | 10 | 10 |
| Bia số 10 | 5.56×45 | 10 | 10 |
| **TOTAL** | | **40** | **40** |

**Test Procedure**:

```
LIVE FIRE DETECTION TEST
━━━━━━━━━━━━━━━━━━━━━━━━

SAFETY BRIEFING
☐ Range safety officer present
☐ All personnel briefed
☐ Medical kit available
☐ Communication verified

PRE-FIRE
☐ Deploy target system at 200m
☐ Verify LoRa link to shore station
☐ Reset hit counter to zero
☐ Video recording started

FIRING SEQUENCE
☐ Fire 10 rounds at Bia 7e #1
   - Hits detected: ___/10
   - False positives: ___
☐ Fire 10 rounds at Bia 7e #2
   - Hits detected: ___/10
   - False positives: ___
☐ Fire 10 rounds at Bia 6c
   - Hits detected: ___/10
   - False positives: ___
☐ Fire 10 rounds at Bia số 10
   - Hits detected: ___/10
   - False positives: ___

POST-FIRE
☐ Cease fire, verify clear
☐ Physical inspection of targets
☐ Count actual holes vs detected
☐ Download data log
```

**Pass Criteria**:

| Metric | Threshold | Objective | Actual | Result |
|--------|-----------|-----------|--------|--------|
| Detection rate | ≥90% | ≥95% | ___% | ☐ T ☐ O |
| False positive | ≤10% | ≤5% | ___% | ☐ T ☐ O |
| **OVERALL** | Threshold met | | | ☐ **PASS** ☐ **FAIL** |

---

### 4.2 LF-02: Target Identification Test

**Objective**: Verify correct target identification ≥90% (KPP.06)

**Test Procedure**:

```
TARGET IDENTIFICATION TEST
━━━━━━━━━━━━━━━━━━━━━━━━━━

Using data from LF-01:

☐ For each detected hit, verify target ID matches
☐ Record: Actual target vs Reported target

| Shot # | Actual Target | Reported Target | Correct? |
|--------|---------------|-----------------|----------|
| 1      |               |                 | ☐        |
| 2      |               |                 | ☐        |
| ...    |               |                 | ☐        |
| 40     |               |                 | ☐        |

CALCULATION:
Correct IDs: ___ / Total Detected: ___ = ___%
```

**Pass Criteria**:

| Metric | Threshold | Actual | Result |
|--------|-----------|--------|--------|
| Target ID accuracy | ≥90% | ___% | ☐ **PASS** ☐ **FAIL** |

---

## 5. Test Schedule

```
WEEK 1-2: ENVIRONMENTAL LAB TESTING
├── W1 D1-2: Temperature cycling (ENV-01)
├── W1 D3: Humidity test setup (ENV-02)
├── W1 D4-5: Humidity test run
├── W2 D1: IP67 testing (ENV-04)
├── W2 D2-3: Vibration testing (ENV-05)
├── W2 D4: Drop testing (ENV-06)
└── W2 D5: Lab test report

WEEK 3: SALT SPRAY (PARALLEL)
└── Salt spray chamber - 500 hours continuous

WEEK 4-5: FIELD TESTING
├── W4 D1: Sea deployment test (FLD-01)
├── W4 D2: Communication range test (FLD-02)
├── W4 D3-4: Endurance test (FLD-03)
├── W5 D1: Solar charging test (FLD-04)
├── W5 D2-3: Repeat/contingency
└── W5 D4-5: Field test report

WEEK 6: LIVE FIRE TESTING
├── W6 D1: Range setup, safety brief
├── W6 D2: Live fire - Detection (LF-01)
├── W6 D3: Live fire - Target ID (LF-02)
├── W6 D4: Data analysis
└── W6 D5: Final test report

WEEK 7: REPORTING
└── Test report compilation, Gate 3 prep
```

---

## 6. Test Equipment Required

| Equipment | Specification | Source | Status |
|-----------|---------------|--------|--------|
| Temperature chamber | -20 to +80°C | Rental | ☐ |
| Humidity chamber | 95% RH, 40°C | Rental | ☐ |
| Salt fog chamber | ASTM B117 | External lab | ☐ |
| Vibration shaker | 5-500 Hz, 1g | Rental | ☐ |
| Water tank | 1.5m depth | Build | ☐ |
| LoRa test receiver | TE-BB01-LORA-001 | In-house | ☐ |
| GPS receiver | Handheld | Purchase | ☐ |
| Multimeter | Calibrated | In-house | ☐ |
| Boat | 4m, outboard | Rental | ☐ |

---

## 7. Risk & Contingency

| Risk | Mitigation | Contingency |
|------|------------|-------------|
| Weather delays (field) | Monitor forecast, flexible schedule | +1 week buffer |
| Salt spray chamber unavailable | Book early | Outdoor salt exposure (extended) |
| Range not available | Book 2 months ahead | Delay live fire to Phase 2 |
| Test failure | Root cause analysis | Fix and retest |

---

## 8. Related Documents

- [[requirements/srs-v2.0]] - Requirements (KPP, KSA, ENV)
- [[quality/acceptance-test-procedure]] - System ATP
- [[quality/test-procedure-checklist]] - Production test
- [[quality/fmea-bb01]] - Failure modes
- [[planning/prototype-bom]] - Equipment procurement

---

## 9. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Test Lead | | | ☐ |
| Hardware Lead | | | ☐ |
| Project Lead | | | ☐ |
| QC Lead | | | ☐ |

---

## 10. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial test plan |

---

*Test Plan TP-BB01-001*
*Environmental & Field Testing*
*MIL-STD-810H Tailored*
*6 Environmental + 4 Field + 2 Live Fire Tests*
