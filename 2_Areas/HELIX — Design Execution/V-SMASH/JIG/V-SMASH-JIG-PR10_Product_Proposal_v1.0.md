---
project: V-SMASH-JIG-PR10
type: tooling-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
equipment_code: EQ-010
nre_budget: $2,000
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P]
priority: CRITICAL — blocks V-SMASH-M production acceptance (OP-250, QC-09)
safety_critical: true
safety_checks: [VM-Y01, VM-Y02, VM-Y03, VM-Y04]
---

# V-SMASH-JIG-PR10 — End-of-Line (EOL) Functional Test Jig

## 1. Purpose

Semi-automated production acceptance test fixture for 100% functional verification of every V-SMASH unit before shipment. Executes 11 acceptance criteria including 4 safety-critical checks (VM-Y01–Y04) per B3 QC-09.

**Without this jig:** Manual functional testing is slow (~15 min vs 5 min), inconsistent, and cannot automate safety-critical checks. VM-Q01 (functional acceptance test, 100%) cannot be met at production rate.

**Safety criticality:** This jig is the last line of defense before a weapon sight ships to soldiers. 4 of 11 criteria are SAFETY-CRITICAL. A missed defect here has direct operational consequence.

---

## 2. Function Summary

| Function | Description | Safety? |
|----------|-------------|---------|
| **F1 — Power supply** | Provide regulated power to DUT (Device Under Test) via battery emulator | No |
| **F2 — Sensor stimulus** | Present known targets (drone/non-drone) to CMOS sensor at controlled confidence levels | Yes (Y03, Y04) |
| **F3 — OLED capture** | Camera reads OLED output to verify indicator display (color, position, absence) | Yes (Y02, Y03) |
| **F4 — BLE probe** | BLE 5.0 handshake test with test dongle | No |
| **F5 — Continuity test** | Electrical continuity measurement between device and trigger interface → must be OPEN | Yes (Y01) |
| **F6 — Power-fail test** | Battery cut-off during operation → verify OLED blank ≤100ms | Yes (Y02) |
| **F7 — Boot time** | Measure power-on to operational time ≤3s | No |
| **F8 — Thermal read** | Query thermal management IC for valid temperature readings | No |
| **F9 — Firmware verify** | Read firmware version, validate against approved FPR ≤2% test database | Yes (Y04) |
| **F10 — Test report** | Generate per-unit test report with serial number, timestamp, pass/fail per criterion | No |
| **F11 — Label print** | (Optional) Trigger QC pass sticker print on PASS | No |

---

## 3. Requirements (Derived from V-SMASH-M Design Package)

### 3.1 Test Coverage — B3 QC-09 (11 Criteria)

| # | QC-09 Criterion | Jig Function | Pass Criteria | Safety? |
|---|-----------------|-------------|---------------|---------|
| 1 | Power-on ≤3s, OLED hiển thị | F1 + F7 + F3 | Boot time ≤3.0s, OLED active | No |
| 2 | AI detection: đưa ảnh mục tiêu → nhận dạng ĐẠT | F2 + F3 | Known drone target: Pd ≥95%, correct class | No |
| 3 | OLED indicator: đúng màu, đúng vị trí | F3 | GREEN/YELLOW/RED match expected for presented target | No |
| 4 | BLE handshake (W — cảnh báo nếu FAIL) | F4 | BLE connects within 5s; WARNING (not FAIL) if no connect | No |
| 5 | Cổng USB-C: nhận dạng thiết bị khi cắm | F1 (USB-C probe) | USB device enumeration within 2s | No |
| 6 | Nhiệt độ SoC khởi động: đọc hợp lệ | F8 | Thermal IC returns 20–40°C at room temp | No |
| 7 | Trọng lượng: ±10g so với spec | Manual (scale at WS-PACK01) | 490–510g | No |
| 8 | ⚠ VM-Y03: confidence <70% → chỉ thị KHÔNG hiển thị | F2 + F3 | Present 60-69% target → OLED indicator ABSENT | **YES** |
| 9 | ⚠ VM-Y04: firmware/model AI = phiên bản validated FPR ≤2% | F9 | FW version matches approved list | **YES** |
| 10 | VM-M05: mô phỏng quá nhiệt → thermal shutdown | F1 (inject thermal flag via USB-C diagnostic) | "THERMAL" indicator appears, frame rate reduces | No |
| 11 | VM-N06: inject 3 lỗi → verify 3 trạng thái suy giảm | F1 + F2 (inject via diagnostic port) | SENSOR FAULT / AI FAULT / THERMAL responses correct | No |

**Additional safety tests (not in QC-09 but recommended for PR-10):**

| # | Test | Jig Function | Pass Criteria | Safety? |
|---|------|-------------|---------------|---------|
| A1 | ⚠ VM-Y01: No trigger connection | F5 | Continuity = OPEN (>10MΩ) between all external pins and internal bus | **YES** |
| A2 | ⚠ VM-Y02: Safe power-fail | F6 | Battery cut → OLED blank ≤100ms (camera timestamp) | **YES** |

---

### 3.2 Performance Requirements

| ID | Requirement | Value |
|----|-------------|-------|
| JR-10-01 | Total test cycle time | ≤5 min per unit (target: 4 min) |
| JR-10-02 | Throughput | ≥12 units/hour (single jig) |
| JR-10-03 | False rejection rate | ≤0.5% (jig-induced false FAILs) |
| JR-10-04 | Missed defect rate | ≤0.1% (especially on safety-critical items) |
| JR-10-05 | Test report generation | Automatic, per-unit, with serial number + timestamp |
| JR-10-06 | Operator intervention | Minimal — load DUT, press START, remove on PASS/FAIL |

### 3.3 Interface Requirements

| ID | Requirement | Value |
|----|-------------|-------|
| JR-10-10 | DUT mounting | Picatinny rail fixture (MIL-STD-1913 gauge) for secure positioning |
| JR-10-11 | Power interface | USB-C PD (5V/3A) + battery emulator (3.7V Li-ion profile) |
| JR-10-12 | OLED capture | Machine vision camera (≥5MP, USB3) pointed at eyepiece |
| JR-10-13 | BLE interface | nRF52840 dongle (matching VM-4102) |
| JR-10-14 | Continuity interface | Test probes to Picatinny rail interface pins |
| JR-10-15 | PC interface | USB hub → test PC running Python test script |

---

## 4. Conceptual Design

### Architecture

```
┌──────────────────────────────────────────────────────────┐
│  TEST STATION (WS-TEST01)                                  │
│                                                            │
│  ┌────────────┐  ┌──────────────┐  ┌────────────────┐    │
│  │ DUT MOUNT  │  │ VISION CAM   │  │  TEST PC       │    │
│  │ (1913 rail │  │ (5MP USB3,   │  │  Python script  │    │
│  │  fixture)  │  │  aimed at    │  │  + OpenCV       │    │
│  │            │  │  eyepiece)   │  │  + nRF BLE lib  │    │
│  └──┬─────┬──┘  └──────┬───────┘  │  + USB-C diag   │    │
│     │     │             │          │  + Continuity    │    │
│     │   ┌─┴─────────────┴──────┐   │  + Report gen   │    │
│     │   │    TARGET DISPLAY    │   └────────┬────────┘    │
│     │   │    (LCD/OLED screen  │            │              │
│     │   │    shows test images │            │              │
│     │   │    at known ranges)  │      ┌─────┴──────┐      │
│     │   └──────────────────────┘      │ USB HUB    │      │
│     │                                 │ + BLE dongle│      │
│   ┌─┴──────────────┐                 │ + PSU ctrl  │      │
│   │ POWER MODULE   │                 │ + Cont.probe│      │
│   │ Battery emulator│                 └────────────┘      │
│   │ + Kill switch   │                                      │
│   └────────────────┘                                       │
│                                                            │
│  ┌──────────────────┐                                      │
│  │ PASS/FAIL LIGHTS │  GREEN = PASS, RED = FAIL            │
│  │ + Barcode scanner │  Scan serial before test             │
│  └──────────────────┘                                      │
└──────────────────────────────────────────────────────────┘
```

### Test Sequence (Automated)

```
1. Operator loads DUT on 1913 rail fixture, scans serial barcode → START
2. Battery emulator powers DUT via USB-C (5V/3A PD)
3. Boot timer starts → measure time to OLED active (≤3s)
4. Target Display shows DRONE image at 95% confidence → camera checks OLED for GREEN indicator
5. Target Display shows BIRD image → camera checks OLED for no indicator (FPR check)
6. Target Display shows 65% confidence drone → camera checks OLED indicator ABSENT (VM-Y03)
7. USB-C diagnostic queries thermal IC → valid reading
8. USB-C diagnostic reads firmware version → compare against approved list (VM-Y04)
9. BLE dongle attempts handshake → connect/timeout logged (WARNING only)
10. Continuity probe tests trigger interface → must be OPEN (VM-Y01)
11. USB-C diagnostic injects SENSOR FAULT → camera verifies correct indicator
12. USB-C diagnostic injects AI FAULT → camera verifies correct indicator
13. USB-C diagnostic injects THERMAL → camera verifies reduced frame rate
14. Battery emulator kills power → camera measures OLED blank time ≤100ms (VM-Y02)
15. Generate test report → PASS/FAIL → lights
16. If FAIL: identify which criterion failed → display on screen for operator
```

---

## 5. Bill of Materials (Conceptual)

| # | Item | Source | Est. Cost |
|---|------|--------|-----------|
| 1 | 1913 rail fixture (machined, with clamps) | Local CNC | $100 |
| 2 | Machine vision camera (5MP, USB3, global shutter) | Import (Basler/FLIR) | $300 |
| 3 | Camera lens (C-mount, 25mm f/1.4) | Import | $80 |
| 4 | Camera mount (adjustable arm) | Import | $50 |
| 5 | Target display (7" IPS LCD, 1024×600, USB-powered) | Import | $60 |
| 6 | Target display mount + collimator tube (dark tube to sensor) | Local CNC + 3D print | $80 |
| 7 | USB-C PD trigger board (5V/3A) + battery emulator module | Import | $50 |
| 8 | Battery kill switch (relay, ≤1ms switching) | Import | $30 |
| 9 | nRF52840 USB dongle (BLE test) | Import | $15 |
| 10 | Continuity test probes + pogo pins | Import | $40 |
| 11 | USB 3.0 hub (7-port, powered) | Import | $30 |
| 12 | Test PC (can be existing WS-TEST01 laptop) | Existing | $0 |
| 13 | Barcode scanner (USB) | Import | $30 |
| 14 | PASS/FAIL indicator lights (tower light, 24V) | Import | $25 |
| 15 | Baseplate + wiring + enclosure | Local | $150 |
| 16 | Test software development (Python + OpenCV + pySerial + BLE) | In-house (KN) | $0 (labor) |
| 17 | Assembly + integration + calibration | WX | $200 |
| | **Total** | | **~$1,240** |
| | **Contingency (30%)** | | **$370** |
| | **Budget** | | **$1,610** (within $2,000 NRE) |

---

## 6. Software Architecture

```
pr10_eol_test/
├── main.py              ← Test sequencer (state machine)
├── config.yaml          ← Per-product test parameters (thresholds, FW versions)
├── modules/
│   ├── camera.py        ← OpenCV: OLED capture, indicator detection (color, position)
│   ├── power.py         ← Battery emulator control (on/off/kill)
│   ├── ble.py           ← nRF BLE handshake test
│   ├── usb_diag.py      ← USB-C diagnostic: FW version, thermal read, fault injection
│   ├── continuity.py    ← Continuity test (multimeter interface or ADC)
│   └── report.py        ← Generate per-unit JSON + PDF test report
├── targets/             ← Test images (drone, bird, debris, low-confidence)
│   ├── drone_95pct.png
│   ├── bird_90pct.png
│   ├── drone_65pct.png  ← Below 70% threshold (VM-Y03 test)
│   └── debris_80pct.png
├── approved_fw.json     ← Approved firmware versions with FPR ≤2% validation date
└── reports/             ← Generated test reports (one per unit)
    └── VM-M-2602-0001.json
```

**Key design decision:** Test images are pre-classified by the AI model's known response at each confidence level. The jig does NOT re-test AI performance — it verifies the correct firmware is loaded and the confidence gating logic works. AI model performance is validated during C-series qualification (T09).

---

## 7. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| USB-C diagnostic protocol spec | V-SMASH-M firmware team | PENDING | Defines fault injection commands, FW version query, thermal read |
| OLED indicator color/position spec | V-SMASH-M software spec | PARTIALLY AVAILABLE (from B4) | Camera needs to know exact pixel positions + RGB values for GREEN/YELLOW/RED |
| Approved firmware version list | V-SMASH-M AI validation (C-series T09) | BLOCKED (requires prototype) | Initial list = development version; updated after T09 |
| AI test image set | V-SMASH-M AI training team | PARTIALLY AVAILABLE | Need images at specific confidence thresholds |
| Picatinny rail fixture dimensions | B2 (VM-G03: 21.2±0.1mm) | AVAILABLE | Standard MIL-STD-1913 |

**Critical path:** USB-C diagnostic protocol must be defined before software development starts.

---

## 8. Reusability Across V-SMASH Family

| Variant | Reusable? | Adaptation Needed |
|---------|-----------|-------------------|
| V-SMASH-L | **YES** — same AI core, same safety checks | config.yaml: different FW version list, additional fire gate test |
| V-SMASH-D | **MOSTLY** — detection-only, no fire gate | config.yaml: remove fire gate tests, add alert mode test |
| V-SMASH-X | **YES** — V-L clone | config.yaml: downgraded feature set |
| V-SMASH-T | **YES** — same core + laser | config.yaml: add laser alignment check |
| V-SMASH-NV | **PARTIAL** — thermal sensor adds tests | Hardware: additional thermal target; software: new camera module |
| V-SMASH-P | **PARTIAL** — extended range changes AI model | config.yaml: different test images + thresholds |
| V-SMASH-R | **NEW JIG** — vehicle mount, different interface | Major rework: different DUT mount, CAN bus instead of USB-C |

**Design for reuse:** `config.yaml` parameterizes per-variant differences. Hardware unchanged for 5/8 variants. V-NV needs thermal target adapter. V-R needs separate jig.

---

## 9. Safety Verification of the Jig Itself

**The test jig that verifies safety-critical requirements must itself be verified.**

| Check | Method | Criteria | Frequency |
|-------|--------|----------|-----------|
| Camera measurement accuracy | Known-state DUT (golden sample) | Camera correctly detects PASS and FAIL indicators 100/100 | Weekly |
| Continuity probe integrity | Open/short reference standards | Probe correctly reads OPEN (>10MΩ) and SHORT (<1Ω) | Daily (before shift) |
| Battery kill switch timing | Oscilloscope measurement | Kill → power-off ≤1ms | Monthly |
| OLED blank time measurement | High-speed camera (240fps reference) | PR-10 camera agrees with reference ±10ms | Quarterly |
| False rejection study | 20 known-good units | ≤1 false rejection (≤5%) | Before production release |
| False acceptance study | 5 known-defect units (seeded faults) | 0 missed defects, especially on Y01-Y04 | Before production release |

---

## 10. Timeline

| Phase | Activity | Duration | Depends On |
|-------|----------|----------|------------|
| Spec | USB-C diagnostic protocol + OLED spec finalization | 2 weeks | Firmware team |
| Design | Mechanical fixture + electrical schematic | 2 weeks | Spec complete |
| Procurement | Camera, LCD, electronics | 3 weeks (parallel with design) | Budget approved |
| Software | Test sequencer + camera + BLE + report modules | 4 weeks (parallel with procurement) | Spec complete |
| Fabrication | Rail fixture, baseplate, wiring | 2 weeks | Design complete + parts received |
| Integration | Assemble + wire + install software | 1 week | Fabrication + software |
| Validation | Golden sample test + false rejection/acceptance study | 1 week | Integration |
| **Total** | | **~8 weeks** (6 weeks critical path: spec→software→integration→validation) | |

---

*Sub-project of V-SMASH Product Family — Production Tooling (Safety-Critical)*
*Cross-reference: [[V-SMASH-M_B3_Process_Plan_v1.0|B3 OP-250, QC-09 (11 criteria)]], [[V-SMASH-M_Verification_Plan_v1.0|VM-Q01, VM-Y01–Y04]], [[V-SMASH-M_B1_YCKT_v1.0|Safety requirements]]*
