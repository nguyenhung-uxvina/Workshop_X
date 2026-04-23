# BB-01 Environmental & Field Test Plan

> **Document ID**: TP-BB01-ENV-001
> **Status**: ✅ READY FOR EXECUTION
> **Revision**: A
> **Date**: 2026-01-29

---

## 1. Scope

| Item | Value |
|------|-------|
| **Product** | BB-01 LOMAH System (Complete) |
| **Test Phase** | Prototype Validation |
| **Units Required** | 3 prototypes |
| **Duration** | 4 weeks |

---

## 2. Test Categories

```
BB-01 TEST HIERARCHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LEVEL 1: Component (ATP)           ← Already covered
├── Power-on test
├── Self-diagnostic
├── Microphone response
└── RF communication

LEVEL 2: Environmental             ← THIS DOCUMENT
├── Temperature
├── Humidity/Salt spray
├── Vibration/Shock
└── IP65 verification

LEVEL 3: Field Validation          ← THIS DOCUMENT
├── Range (500m RF)
├── Detection accuracy
├── False alarm rate
└── Battery endurance

LEVEL 4: Customer Acceptance       ← Gate 3 deliverable
├── Live fire test
└── Scoring accuracy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 3. Environmental Tests

### 3.1 Temperature Test

**Requirement**: EN.01 (0°C to +55°C operating)

| Test | Condition | Duration | Pass Criteria |
|------|-----------|----------|---------------|
| **Cold Start** | 0°C | 2 hr soak | Power-on, self-test PASS |
| **Cold Operation** | 0°C | 8 hr | All functions, no degradation |
| **Hot Start** | 55°C | 2 hr soak | Power-on, self-test PASS |
| **Hot Operation** | 55°C | 8 hr | All functions, no degradation |
| **Thermal Cycle** | 0°C↔55°C | 10 cycles | No mechanical failure |

**Test Equipment**:
- Environmental chamber (if available)
- OR: Refrigerator (0°C) + Heat gun/oven (55°C monitored)

**Procedure**:
1. Place DUT in chamber, cable out to test equipment
2. Stabilize at temperature (2 hr minimum)
3. Run full ATP while at temperature
4. Monitor power consumption (should be within spec)
5. Visual inspection after test

**Data to Record**:
- ATP results at each temperature
- Power consumption vs. temperature
- Any visual changes (coating, gasket)

---

### 3.2 Humidity / Salt Spray Test

**Requirement**: EN.02 (0-100% RH), EN.03 (≥12 months salt corrosion)

| Test | Condition | Duration | Pass Criteria |
|------|-----------|----------|---------------|
| **High Humidity** | 40°C, 95% RH | 48 hr | No corrosion, functions OK |
| **Salt Spray** | 5% NaCl, 35°C | 48 hr | Coating intact, no corrosion |
| **Post-exposure** | Ambient | - | ATP PASS after drying |

**Test Equipment**:
- Salt spray chamber (external lab if needed)
- OR: Simplified salt fog (spray bottle + sealed enclosure)

**Simplified Salt Fog Test** (if no chamber):
1. Prepare 5% NaCl solution (50g salt per liter)
2. Place DUT in sealed plastic container
3. Spray solution inside, creating humid salty environment
4. Seal and leave 48 hr at room temperature
5. Open, dry unit, run ATP

---

### 3.3 Vibration Test

**Requirement**: Marine environment (typical 5-500 Hz, 1g RMS)

| Axis | Frequency | Level | Duration |
|------|-----------|-------|----------|
| X (horizontal) | 5-500 Hz | 1g RMS | 30 min |
| Y (horizontal) | 5-500 Hz | 1g RMS | 30 min |
| Z (vertical) | 5-500 Hz | 1g RMS | 30 min |

**Test Equipment**:
- Vibration shaker (external lab)
- OR: Road test (mount on vehicle, drive 100km rough road)

**Simplified Road Test**:
1. Mount DUT securely on vehicle (truck bed or trunk)
2. Drive 100 km on mixed roads (30% rough/unpaved)
3. Run ATP after test
4. Check all connectors, screws, components

---

### 3.4 Shock Test

**Requirement**: Handle rough deployment

| Test | Level | Quantity | Pass Criteria |
|------|-------|----------|---------------|
| Drop (packaged) | 1m onto concrete | 6 faces | No damage, ATP PASS |
| Operational shock | 30g, 11ms | 3 per axis | Functions during/after |

**Simplified Drop Test**:
1. Package DUT in shipping box
2. Drop from 1m height onto each of 6 faces
3. Open, inspect, run ATP

---

### 3.5 IP65 Verification

**Requirement**: SF.01 (IP65 enclosure)

| Test | Description | Duration | Pass Criteria |
|------|-------------|----------|---------------|
| **Dust** | Talcum powder, 8hr | 8 hr | No powder inside |
| **Water Jet** | 6.3mm nozzle, 12.5 L/min, 3m | 3 min per face | No water inside |

**Simplified Water Test**:
1. Run unit (powered on)
2. Use garden hose with jet nozzle
3. Spray each face for 1 minute from 3m distance
4. Check for leaks, verify unit still operating
5. Open enclosure, check for water

---

## 4. Field Tests

### 4.1 RF Range Test

**Requirement**: SC.01 (≥500m wireless range)

| Distance | Terrain | RSSI Target | Packet Loss |
|----------|---------|-------------|-------------|
| 100m | Line of sight | ≥-80 dBm | <1% |
| 300m | Line of sight | ≥-90 dBm | <5% |
| 500m | Line of sight | ≥-100 dBm | <10% |
| 500m | Partial obstruction | ≥-105 dBm | <20% |

**Procedure**:
1. Setup DUT at fixed location (target area)
2. Setup receiver at control station
3. Walk receiver to each distance
4. Trigger 100 transmissions at each point
5. Record RSSI and packet count

**Equipment**:
- GPS or measuring wheel
- LoRa receiver with RSSI display
- Log sheet

---

### 4.2 Detection Accuracy Test

**Requirement**: SP.01-SP.03 (hit detection within 100ms)

| Test | Method | Target | Pass Criteria |
|------|--------|--------|---------------|
| **Hit Detection** | Tap each mic | All mics | 100% detection |
| **Latency** | Oscilloscope measure | <100ms | All hits <100ms |
| **False Alarm** | Background noise 8hr | <1/hr | Maximum 8 false alarms |
| **Crosstalk** | Single mic tap | No adjacent | Only tapped mic reports |

**Acoustic Simulation** (lab test):
1. Mount unit as installed (on target frame)
2. Use impulse generator or hammer tap
3. Measure detection rate over 100 taps per mic
4. Measure detection latency (trigger → RF TX)

---

### 4.3 Battery Endurance Test

**Requirement**: E.01 (≥8 hours operation)

| Condition | Duration | Pass Criteria |
|-----------|----------|---------------|
| **Idle operation** | Until battery dead | ≥10 hours |
| **Active operation** (1 hit/min) | Until battery dead | ≥8 hours |
| **Worst case** (continuous TX) | Until battery dead | ≥4 hours |

**Procedure**:
1. Fully charge battery
2. Start unit, log start time
3. Monitor operation every hour
4. Record time when unit shuts down
5. Measure remaining battery voltage

---

### 4.4 Multi-Unit Network Test

**Requirement**: SC.04 (≥4 targets simultaneous)

| Test | Configuration | Pass Criteria |
|------|---------------|---------------|
| **4-unit sync** | 4 DUT, 1 receiver | All 4 report to receiver |
| **Simultaneous hit** | Hit all 4 at once | 4 distinct hit reports |
| **Rapid sequence** | Hit 1-2-3-4 in 2 sec | Correct sequence received |
| **Interference** | All TX maximum rate | No dropped packets |

---

## 5. Field Test Location

### 5.1 Indoor Test (5m ceiling)

**Suitable for**:
- Component testing
- Basic functional tests
- Battery endurance
- Network communication

**Limitations**:
- Cannot do full RF range
- No environmental exposure

### 5.2 Outdoor Test (25m range)

**Suitable for**:
- RF range (partial)
- Environmental exposure
- Multi-unit testing

**Location Requirements**:
- Open area 100m × 100m minimum
- Access to water (for IP testing)
- Power supply or generator

### 5.3 Live Fire Range (Future)

**Required for**:
- Customer acceptance
- Scoring accuracy verification
- Real ballistic impact testing

**Coordination**: Military range booking required

---

## 6. Test Schedule

```
WEEK 1: Lab Environmental Tests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1-2: Temperature tests (cold/hot)
Day 3:   Vibration/shock (or road test)
Day 4:   IP65 water test
Day 5:   Salt spray start

WEEK 2: Environmental Complete + Field Setup
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1:   Salt spray complete, post-test ATP
Day 2:   Repair any failures, retest
Day 3:   Field test equipment prep
Day 4-5: Setup at outdoor location

WEEK 3: Field Tests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1:   RF range tests (100m, 300m, 500m)
Day 2:   Detection accuracy, latency
Day 3:   Multi-unit network test
Day 4:   Battery endurance (start overnight)
Day 5:   Battery complete, data analysis

WEEK 4: Analysis & Report
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Day 1-2: Analyze all data
Day 3:   Write test report
Day 4:   Review with team
Day 5:   Gate 3 prep package
```

---

## 7. Pass/Fail Summary

| Category | Tests | All Must Pass |
|----------|-------|---------------|
| **Environmental** | 5 tests | Yes |
| **Field** | 4 tests | Yes |
| **Overall** | 9 tests | Yes for Gate 3 |

---

## 8. Test Report Template

### Test Summary

| Test | Result | Notes |
|------|--------|-------|
| Temperature | ☐ PASS ☐ FAIL | |
| Humidity/Salt | ☐ PASS ☐ FAIL | |
| Vibration | ☐ PASS ☐ FAIL | |
| Shock | ☐ PASS ☐ FAIL | |
| IP65 | ☐ PASS ☐ FAIL | |
| RF Range | ☐ PASS ☐ FAIL | |
| Detection Accuracy | ☐ PASS ☐ FAIL | |
| Battery Endurance | ☐ PASS ☐ FAIL | |
| Multi-Unit | ☐ PASS ☐ FAIL | |

### Overall Result

| Result | Action |
|--------|--------|
| ☐ **ALL PASS** | Proceed to Gate 3, customer demo |
| ☐ **PARTIAL FAIL** | Fix issues, retest failed items |
| ☐ **MAJOR FAIL** | Design review required |

---

## 9. References

- [[v1.3-summary]] - Requirements (EN.01-04, SC.01, E.01)
- [[ATP-MCU-Box]] - Component acceptance test
- [[Gate-2-Ready]] - Design baseline

---

*Test plan supports Gate 3 readiness*
*Per Workshop X 3-Gate Quality System*
