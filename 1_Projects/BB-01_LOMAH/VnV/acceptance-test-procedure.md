# Acceptance Test Procedure: BB-01

> **Document**: ATP-BB01-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Closes**: DfT-003 (System acceptance testing)
> **Gate**: Gate 3 (Production Readiness)
> **Scope**: Complete BB-01 system acceptance

---

## 1. Purpose and Scope

### 1.1 Purpose

Verify the complete BB-01 Naval Target System meets all requirements before customer acceptance and operational deployment.

### 1.2 Scope

| Included | Excluded |
|----------|----------|
| Complete floating target system | Shore station (separate ATP) |
| All 4 target plates with sensors | Consumables (paint, grease) |
| MCU Box assembly | Spare parts |
| Power system (battery + solar) | Training |
| Frame and mounting hardware | |
| LoRa communication link | |

### 1.3 Test Levels

| Level | Test | Document | Status |
|-------|------|----------|--------|
| Component | MCU Box production test | [[quality/test-procedure-checklist]] | ✅ |
| Component | PZT sensor verification | [[design/pzt-sensor-installation]] | ✅ |
| **System** | **Acceptance Test (this doc)** | ATP-BB01-001 | This document |
| Operational | Sea Trial | ATP-BB01-002 (future) | Planned |

---

## 2. Reference Documents

| Document | Description |
|----------|-------------|
| [[requirements/srs-v2.0]] | System Requirements Specification |
| [[requirements/requirements-summary]] | Requirements quick reference |
| [[quality/fmea-bb01]] | Failure Mode Analysis |
| [[quality/test-procedure-checklist]] | MCU Box production test |
| [[decisions/log]] | Design decisions |

---

## 3. Test Equipment Required

### 3.1 Equipment List

| Equipment | Specification | Qty | Cal Due | Check |
|-----------|---------------|-----|---------|-------|
| LoRa Test Receiver | TE-BB01-LORA-001 | 1 | N/A | ☐ |
| Multimeter | Fluke 87V or equiv | 1 | _______ | ☐ |
| Clamp meter | AC/DC 0-10A | 1 | _______ | ☐ |
| GPS receiver | Handheld, accuracy <5m | 1 | N/A | ☐ |
| Range finder | Laser, 500m+ | 1 | _______ | ☐ |
| Anemometer | Wind speed 0-50 km/h | 1 | _______ | ☐ |
| Stopwatch | Resolution 0.1s | 1 | N/A | ☐ |
| Camera | Photo/video documentation | 1 | N/A | ☐ |
| Tap hammer | PZT test | 1 | N/A | ☐ |
| Weights (1kg, 5kg) | Stability test | 2 | _______ | ☐ |

### 3.2 Weapons and Ammunition (Live Fire Only)

| Item | Specification | Qty | Custody |
|------|---------------|-----|---------|
| AK-47/AKM | 7.62×39mm | 1 | Range |
| AK-101/M16 | 5.56×45mm | 1 | Range |
| Ammunition 7.62×39 | Ball | 50 rds | Range |
| Ammunition 5.56×45 | Ball | 50 rds | Range |

**Note**: Live fire tests require military range authorization.

### 3.3 Support Equipment

| Item | Purpose | Check |
|------|---------|-------|
| Boat/vessel | Deploy and retrieve target | ☐ |
| Crane/hoist | Target handling | ☐ |
| Radio | Communication with shore | ☐ |
| Safety equipment | Life jackets, first aid | ☐ |

---

## 4. Test Conditions

### 4.1 Environmental Requirements

| Parameter | Threshold | Objective | Actual |
|-----------|-----------|-----------|--------|
| Sea State | ≤SS3 | SS2 | _______ |
| Wind Speed | ≤20 km/h | ≤10 km/h | _______ |
| Visibility | ≥1 km | ≥5 km | _______ |
| Temperature | 0-50°C | 20-35°C | _______ |
| Precipitation | None | None | _______ |

### 4.2 Pre-Test Checklist

| # | Item | Status |
|---|------|--------|
| 1 | All components assembled per work instructions | ☐ |
| 2 | MCU Box passed production test (TP-BB01-MCU-001) | ☐ |
| 3 | Battery fully charged (>90% SOC) | ☐ |
| 4 | Firmware version verified | ☐ |
| 5 | LoRa receiver operational | ☐ |
| 6 | Range authorization obtained (if live fire) | ☐ |
| 7 | Safety briefing completed | ☐ |
| 8 | Weather conditions acceptable | ☐ |

---

## 5. Test Procedures

### Test 1: Visual Inspection (ATP-1)

**Objective**: Verify system assembly and workmanship

| # | Check | Criteria | Result |
|---|-------|----------|--------|
| 1.1 | Frame structure | No visible damage, welds intact | ☐ Pass ☐ Fail |
| 1.2 | Galvanize coating | No rust, scratches <10% area | ☐ Pass ☐ Fail |
| 1.3 | Target plates | Mounted securely, chains intact | ☐ Pass ☐ Fail |
| 1.4 | Chain suspension | Free movement, no binding | ☐ Pass ☐ Fail |
| 1.5 | MCU Box mounting | Secure, glands tight | ☐ Pass ☐ Fail |
| 1.6 | Solar panel | Mounted, no cracks | ☐ Pass ☐ Fail |
| 1.7 | Antenna | Vertical, secure | ☐ Pass ☐ Fail |
| 1.8 | Cable routing | Strain relief, drip loops | ☐ Pass ☐ Fail |
| 1.9 | Catamaran hulls | No damage, drain plugs secure | ☐ Pass ☐ Fail |
| 1.10 | Labels/markings | Serial number, warnings visible | ☐ Pass ☐ Fail |

**ATP-1 Result**: ☐ PASS ☐ FAIL

---

### Test 2: Power System (ATP-2)

**Objective**: Verify power system meets PWR requirements

#### ATP-2.1: Battery Test

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 2.1.1 | Battery voltage | Multimeter at XT60 | 12.0-14.0V | _____ V | ☐ Pass ☐ Fail |
| 2.1.2 | Battery capacity | Discharge test (optional) | ≥6Ah | _____ Ah | ☐ Pass ☐ Fail ☐ Skip |
| 2.1.3 | BMS function | Check LED indicators | Green = OK | ☐ OK | ☐ Pass ☐ Fail |

#### ATP-2.2: Solar Panel Test

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 2.2.1 | Open circuit voltage | Multimeter, full sun | 18-22V | _____ V | ☐ Pass ☐ Fail |
| 2.2.2 | Charge current | Clamp meter, full sun | ≥0.5A | _____ A | ☐ Pass ☐ Fail |

#### ATP-2.3: System Power

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 2.3.1 | System idle current | Clamp meter | 20-50mA | _____ mA | ☐ Pass ☐ Fail |
| 2.3.2 | System TX current | During LoRa transmit | <150mA | _____ mA | ☐ Pass ☐ Fail |
| 2.3.3 | Low battery warning | Drain to 20% SOC | Alert on receiver | ☐ Yes | ☐ Pass ☐ Fail |

**ATP-2 Result**: ☐ PASS ☐ FAIL

---

### Test 3: Communication System (ATP-3)

**Objective**: Verify LoRa communication meets COM requirements

#### ATP-3.1: Short Range Test (50m)

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 3.1.1 | Link establishment | Power on, check receiver | Connected <30s | _____ s | ☐ Pass ☐ Fail |
| 3.1.2 | RSSI @ 50m | Read from receiver | > -80 dBm | _____ dBm | ☐ Pass ☐ Fail |
| 3.1.3 | Packet success | Send 20 packets | 20/20 (100%) | ____/20 | ☐ Pass ☐ Fail |

#### ATP-3.2: Range Test (KPP.05: ≥400m Threshold, ≥600m Objective)

| # | Distance | RSSI | Packets (20) | Result |
|---|----------|------|--------------|--------|
| 3.2.1 | 100m | _____ dBm | ____/20 | ☐ Pass ☐ Fail |
| 3.2.2 | 200m | _____ dBm | ____/20 | ☐ Pass ☐ Fail |
| 3.2.3 | 300m | _____ dBm | ____/20 | ☐ Pass ☐ Fail |
| 3.2.4 | 400m (Threshold) | _____ dBm | ____/20 | ☐ **PASS** ☐ FAIL |
| 3.2.5 | 500m | _____ dBm | ____/20 | ☐ Pass ☐ Fail |
| 3.2.6 | 600m (Objective) | _____ dBm | ____/20 | ☐ Pass ☐ Fail |

**Minimum**: 95% packet success at 400m (Threshold)

**ATP-3 Result**: ☐ PASS ☐ FAIL

---

### Test 4: Impact Detection - Tap Test (ATP-4)

**Objective**: Verify detection system with simulated impacts

#### ATP-4.1: Individual Channel Test

| # | Target | Method | Expected | Received | Latency | Result |
|---|--------|--------|----------|----------|---------|--------|
| 4.1.1 | T1 (7e) | Tap with hammer | HIT:T1 | ________ | _____ ms | ☐ Pass ☐ Fail |
| 4.1.2 | T2 (7e) | Tap with hammer | HIT:T2 | ________ | _____ ms | ☐ Pass ☐ Fail |
| 4.1.3 | T3 (6c) | Tap with hammer | HIT:T3 | ________ | _____ ms | ☐ Pass ☐ Fail |
| 4.1.4 | T4 (số 10) | Tap with hammer | HIT:T4 | ________ | _____ ms | ☐ Pass ☐ Fail |

**Latency Requirement**: <200ms (Threshold), <100ms (Objective)

#### ATP-4.2: Detection Consistency

| Target | Taps | Detected | Rate | Pass (≥90%) |
|--------|------|----------|------|-------------|
| T1 | 20 | _____ | ____% | ☐ |
| T2 | 20 | _____ | ____% | ☐ |
| T3 | 20 | _____ | ____% | ☐ |
| T4 | 20 | _____ | ____% | ☐ |
| **Total** | **80** | _____ | ____% | ☐ |

**KPP.01 Requirement**: ≥90% (Threshold), ≥95% (Objective)

#### ATP-4.3: False Positive Test

| # | Test | Duration | False Triggers | Criteria | Result |
|---|------|----------|----------------|----------|--------|
| 4.3.1 | Quiet (no stimulus) | 5 min | _______ | 0 | ☐ Pass ☐ Fail |
| 4.3.2 | Shake frame gently | 1 min | _______ | 0 | ☐ Pass ☐ Fail |
| 4.3.3 | Tap frame (not targets) | 10 taps | _______ | 0 | ☐ Pass ☐ Fail |

**KPP.02 Requirement**: <10%/hr (Threshold), <5%/hr (Objective)

**ATP-4 Result**: ☐ PASS ☐ FAIL

---

### Test 5: Flotation and Stability (ATP-5)

**Objective**: Verify platform meets PLT requirements

#### ATP-5.1: Static Float Test

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 5.1.1 | Freeboard | Measure waterline to deck | ≥150mm | _____ mm ☐ Pass ☐ Fail |
| 5.1.2 | Level trim | Visual, spirit level | ±5° | _____ ° ☐ Pass ☐ Fail |
| 5.1.3 | No leaks | Inspect hulls after 30 min | Dry | ☐ Pass ☐ Fail |

#### ATP-5.2: Stability Test

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 5.2.1 | Heel test | Apply 5kg at gunwale | Returns upright | ☐ Pass ☐ Fail |
| 5.2.2 | Pitch test | Apply 5kg at bow | Returns level | ☐ Pass ☐ Fail |
| 5.2.3 | Wave action | Observe in SS2-3 | No capsize tendency | ☐ Pass ☐ Fail |

#### ATP-5.3: Anchor/Mooring Test

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 5.3.1 | Tow point | Apply 20kg pull | No damage | ☐ Pass ☐ Fail |
| 5.3.2 | Anchor hold | Deploy anchor, observe | Holds position | ☐ Pass ☐ Fail |

**ATP-5 Result**: ☐ PASS ☐ FAIL

---

### Test 6: Environmental (ATP-6)

**Objective**: Verify environmental protection

#### ATP-6.1: IP Rating Verification

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 6.1.1 | Splash test | Spray water on MCU box | No ingress | ☐ Pass ☐ Fail |
| 6.1.2 | Cable glands | Inspect after splash | Dry inside | ☐ Pass ☐ Fail |
| 6.1.3 | Connector seals | Inspect M12 connectors | No moisture | ☐ Pass ☐ Fail |

#### ATP-6.2: Extended Exposure (Optional)

| # | Test | Duration | Criteria | Result |
|---|------|----------|----------|--------|
| 6.2.1 | 8-hour operation | On water | Functional | ☐ Pass ☐ Fail ☐ Skip |
| 6.2.2 | Post-exposure check | After 8hr | No degradation | ☐ Pass ☐ Fail ☐ Skip |

**ATP-6 Result**: ☐ PASS ☐ FAIL

---

### Test 7: Live Fire Test (ATP-7)

**Objective**: Verify hit detection with actual projectiles

**CAUTION**: Conduct only at authorized military range with proper safety protocols.

#### ATP-7.1: Test Setup

| Parameter | Required | Actual |
|-----------|----------|--------|
| Range distance | 200m | _______ m |
| Weapon | AK-47 or AK-101 | _______ |
| Ammunition | Ball (not tracer) | _______ |
| Range authorization | Yes | ☐ Obtained |
| Safety officer | Present | ☐ Present |

#### ATP-7.2: Live Fire Sequence

**Target 1 (7e)**:
| Shot | Hit/Miss | Detected | Correct ID | Latency |
|------|----------|----------|------------|---------|
| 1 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 2 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 3 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 4 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 5 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |

**Target 2 (7e)**:
| Shot | Hit/Miss | Detected | Correct ID | Latency |
|------|----------|----------|------------|---------|
| 1 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 2 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 3 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 4 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 5 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |

**Target 3 (6c)**:
| Shot | Hit/Miss | Detected | Correct ID | Latency |
|------|----------|----------|------------|---------|
| 1 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 2 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 3 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 4 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 5 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |

**Target 4 (số 10)**:
| Shot | Hit/Miss | Detected | Correct ID | Latency |
|------|----------|----------|------------|---------|
| 1 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 2 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 3 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 4 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |
| 5 | ☐H ☐M | ☐Y ☐N | ☐Y ☐N | _____ ms |

#### ATP-7.3: Live Fire Summary

| Metric | Target | Actual | Pass |
|--------|--------|--------|------|
| Total hits fired | 20 | _______ | - |
| Hits detected | - | _______ | - |
| **Detection rate** | ≥90% | ______% | ☐ |
| Correct target ID | ≥90% | ______% | ☐ |
| False positives | 0 | _______ | ☐ |
| Avg latency | <200ms | ______ ms | ☐ |

**ATP-7 Result**: ☐ PASS ☐ FAIL ☐ NOT CONDUCTED

---

## 6. Acceptance Criteria Summary

### 6.1 KPP Verification

| KPP | Requirement | Threshold | Objective | Result | Status |
|-----|-------------|-----------|-----------|--------|--------|
| KPP.01 | Hit detection | ≥90% | ≥95% | ______% | ☐ T ☐ O ☐ Fail |
| KPP.02 | False positive | ≤10%/hr | ≤5%/hr | ______%/hr | ☐ T ☐ O ☐ Fail |
| KPP.03 | Latency | ≤200ms | ≤100ms | ______ ms | ☐ T ☐ O ☐ Fail |
| KPP.05 | Comm range | ≥400m | ≥600m | ______ m | ☐ T ☐ O ☐ Fail |
| KPP.06 | Target ID | ≥90% | ≥95% | ______% | ☐ T ☐ O ☐ Fail |

**KPP Status**: ☐ ALL THRESHOLD MET ☐ PARTIAL ☐ FAIL

### 6.2 KSA Verification

| KSA | Requirement | Threshold | Objective | Result | Status |
|-----|-------------|-----------|-----------|--------|--------|
| KSA.01 | Operating time | ≥8hr | ≥24hr | ______ hr | ☐ T ☐ O ☐ Fail |
| KSA.06 | Sea state | SS3 | SS4 | SS____ | ☐ T ☐ O ☐ Fail |

### 6.3 Test Summary

| Test | Description | Result |
|------|-------------|--------|
| ATP-1 | Visual Inspection | ☐ Pass ☐ Fail |
| ATP-2 | Power System | ☐ Pass ☐ Fail |
| ATP-3 | Communication | ☐ Pass ☐ Fail |
| ATP-4 | Impact Detection (Tap) | ☐ Pass ☐ Fail |
| ATP-5 | Flotation/Stability | ☐ Pass ☐ Fail |
| ATP-6 | Environmental | ☐ Pass ☐ Fail |
| ATP-7 | Live Fire | ☐ Pass ☐ Fail ☐ Deferred |

---

## 7. Acceptance Decision

### 7.1 Overall Result

| Decision | Criteria |
|----------|----------|
| ☐ **ACCEPT** | All KPPs meet Threshold, all tests pass |
| ☐ **CONDITIONAL ACCEPT** | Minor issues, corrective action plan agreed |
| ☐ **REJECT** | KPP failure or critical defect |

### 7.2 Discrepancies

| # | Description | Severity | Disposition |
|---|-------------|----------|-------------|
| 1 | | ☐ Crit ☐ Maj ☐ Min | |
| 2 | | ☐ Crit ☐ Maj ☐ Min | |
| 3 | | ☐ Crit ☐ Maj ☐ Min | |

### 7.3 Corrective Actions (if Conditional)

| # | Action | Owner | Due Date | Status |
|---|--------|-------|----------|--------|
| 1 | | | | ☐ |
| 2 | | | | ☐ |

---

## 8. Test Record

| Field | Value |
|-------|-------|
| System Serial Number | _________________ |
| Test Location | _________________ |
| Test Date(s) | _________________ |
| Weather Conditions | _________________ |
| Test Director | _________________ |
| Customer Representative | _________________ |

---

## 9. Approval Signatures

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Director | | | |
| QC Manager | | | |
| Project Manager | | | |
| Customer Representative | | | |

---

## 10. Related Documents

- [[requirements/srs-v2.0]] - System requirements
- [[requirements/requirements-summary]] - KPP/KSA quick reference
- [[quality/test-procedure-checklist]] - MCU Box production test
- [[quality/fmea-bb01]] - Failure modes reference
- [[quality/dfx-review-mcu-box]] - DfT-003 source
- [[design/lora-test-receiver]] - Test receiver build

---

## 11. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial release |

---

*Acceptance Test Procedure ATP-BB01-001*
*BB-01 Naval Target System*
*Gate 3 Production Readiness*
