---
project: V-SMASH-SW-COM
type: software-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
sw_phase: 0 (Requirements Extraction)
safety_class: A (lowest — communication is optional, system operates fully without it)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
priority: MEDIUM — enabler for IRONMESH integration + firmware updates + depot diagnostics
---

# V-SMASH-SW-COM — Communication & Integration Layer

## 1. Purpose

Communication stack that handles all external interfaces: BLE 5.0 data link to IRONMESH fleet system, USB-C wired diagnostics, firmware OTA update mechanism, and on-device data logging. This is the **lowest safety-class** software module — the system operates fully standalone when all communication is absent (VM-S05).

**Without this sub-project:** BLE 5.0 is specified (VM-S05) but has no GATT profile, no message format, no IRONMESH interface definition. Firmware update is described as "USB-C or BLE OTA with authentication" — 7 words covering a complex mechanism that doesn't exist. Diagnostic software is referenced 3 times in B4 User Manual but never specified. Data logging (SF7) is listed as a function but has no storage format or retrieval protocol.

---

## 2. Scope Boundary

### In Scope

| Module | Functions | Source Requirements |
|--------|-----------|-------------------|
| **COM-BLE** | BLE 5.0 stack on nRF52840 (VM-4102): GATT profile for IRONMESH, pairing, auto-connect within ~30m, data upload of engagement statistics | VM-S05, VM-O10, VM-O11, SF7-A7, B4 §5.5 |
| **COM-DATA** | On-device data logging: engagement parameters (detection count, tracking duration, lead angles, timestamps) stored to eMMC. Circular buffer, no image/video. | SF7, B4 §5.5 |
| **COM-DIAG** | USB-C diagnostic protocol: depot-level fault readout, calibration check, sensor status, log download. Laptop + diagnostic software interface. | B4 §8.3, VM-N05 |
| **COM-UPDATE** | Firmware update mechanism: USB-C wired update (primary) + BLE OTA (secondary). Authentication required. Depot-only — no field update interface. | VM-N05, B1 §5.2 |
| **COM-SEC** | Update authentication: signed firmware images, rollback protection, no field-accessible update interface | B1 §5.2 |
| **COM-LOG** | System event log: boot events, fault events, thermal events, BLE connect/disconnect. Non-volatile. Accessible via COM-DIAG. | FMEA F08 (post-mission analysis), VM-N04 |

### Out of Scope

| Module | Sub-Project |
|--------|-------------|
| BLE hardware driver (nRF52840 init) | V-SMASH-SW-FW (FW-HAL) |
| USB-C physical layer / power delivery | Hardware (PCB design) |
| IRONMESH server-side / fleet management | IRONMESH project (separate) |
| AI model deployment (uses COM-UPDATE as transport) | V-SMASH-SW-AI |

---

## 3. Requirements (Extracted from V-SMASH-M Design Package)

### 3.1 BLE Communication

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-COM-01 | BLE version | VM-S05 | BLE 5.0 | I: module datasheet |
| SWR-COM-02 | Optional operation | VM-S05 | System fully functional without BLE | T: BLE disconnected, all functions verified |
| SWR-COM-03 | Auto-connect range | B4 §5.5 | ~30m to IRONMESH base station | T: range test |
| SWR-COM-04 | Data content — transmitted | B4 §5.5 | Detection count, tracking duration, engagement statistics | I: GATT profile review |
| SWR-COM-05 | Data content — NOT transmitted | B4 §5.5 | No images/video, no GPS coordinates, no classified info | I: GATT profile review + penetration test |
| SWR-COM-06 | Disconnection behavior | VM-S05, B4 §5.5 | Display "NO LINK" status, buffer data locally, auto-reconnect | T: disconnect during operation |
| SWR-COM-07 | EMC immunity | VM-O10 | BLE not disrupted by co-located VHF/UHF military radios at 1m | T: IEC 61000-4-3, 3 V/m, 80 MHz–2.7 GHz |
| SWR-COM-08 | EMC emissions | VM-O11 | CISPR 32 Class B, no interference to VHF/UHF at 1m | T: EMC lab test |

### 3.2 Firmware Update

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-COM-10 | USB-C wired update | VM-N05 | Primary update method at depot | T: successful FW update via USB-C |
| SWR-COM-11 | BLE OTA update | VM-N05 | Secondary update method at depot | T: successful FW update via BLE |
| SWR-COM-12 | Depot-only restriction | VM-N05, B1 §5.2 | No field-update interface exposed | I: interface audit (no update UI in field mode) |
| SWR-COM-13 | Authentication | B1 §5.2 | Signed firmware images, authentication before flash | T: reject unsigned image |
| SWR-COM-14 | Rollback protection | Best practice | Cannot downgrade to vulnerable version | T: attempt rollback, verify rejection |

### 3.3 Diagnostics

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-COM-20 | Diagnostic interface | B4 §8.3 | USB-C to depot laptop | T: diagnostic session |
| SWR-COM-21 | Fault readout | B4 §8.3 | Read current fault state + fault history | T: inject fault, read via diagnostic |
| SWR-COM-22 | Calibration check | B4 §8.3 | Read bore-sight calibration offset + sensor alignment | T: compare with PR-11 jig |
| SWR-COM-23 | Log download | B4 §8.3 | Download complete event log (boot, faults, thermal, BLE) | T: trigger events, download, verify |
| SWR-COM-24 | Diagnostic software tool | B4 §8.3 | Laptop application for depot technician | Deliverable: standalone application |

### 3.4 Data Logging

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-COM-30 | Storage medium | BOM VM-2103 | eMMC (32 GB, shared with FW + AI model) | I: storage allocation review |
| SWR-COM-31 | Log content | SF7, FMEA F08 | Per-engagement: timestamp, target class, confidence, range_est, lead_angle, duration, outcome | I: log format review |
| SWR-COM-32 | Log capacity | Best practice | ≥1,000 engagements before circular buffer overwrites | A: calculate per-record size × 1,000 |
| SWR-COM-33 | No image/video storage | B4 §5.5, security | Only statistics and parameters | I: storage format audit |

---

## 4. BLE GATT Profile (Draft)

### Service: V-SMASH IRONMESH Service (UUID: custom)

| Characteristic | UUID | Properties | Description |
|---------------|------|------------|-------------|
| Device ID | 0x0001 | Read | Unique device identifier (serial number) |
| Device Status | 0x0002 | Read, Notify | Current state: {READY, DETECTED, FAULT, LOW_BATT, OVERHEAT, OFF} |
| Firmware Version | 0x0003 | Read | Firmware version string |
| AI Model Version | 0x0004 | Read | AI model version string |
| Engagement Summary | 0x0010 | Read, Notify | Last engagement: {timestamp, class, confidence, range, lead, duration} |
| Session Statistics | 0x0011 | Read | Cumulative: {total_detections, total_engagements, total_uptime, fault_count} |
| Log Transfer | 0x0020 | Read, Indicate | Bulk log download (paginated) |
| FW Update Control | 0x0030 | Write | Firmware update commands (depot-only, authenticated) |
| FW Update Data | 0x0031 | Write | Firmware image chunks (depot-only, authenticated) |

### Data NOT Exposed via BLE

| Data Type | Reason |
|-----------|--------|
| Raw images / video frames | Security + bandwidth |
| GPS / location | Operational security |
| Classified parameters | OPSEC |
| Bore-sight calibration data | Security (reveals sensor alignment) |

---

## 5. Diagnostic Protocol (Draft)

### USB-C Diagnostic Commands

| Command | Request | Response | Access Level |
|---------|---------|----------|-------------|
| `DIAG_PING` | Heartbeat check | Device ID + FW version + uptime | L0 (any) |
| `DIAG_STATUS` | Current system state | Full state: power, thermal, AI, BLE, sensor, calibration | L1 (technician) |
| `DIAG_FAULT_HIST` | Fault history | Array of {timestamp, fault_type, duration, resolution} | L1 |
| `DIAG_CALIB_READ` | Bore-sight offset | {x_offset_mrad, y_offset_mrad, calibration_date} | L1 |
| `DIAG_LOG_DUMP` | Download event log | Binary log stream (paginated) | L1 |
| `DIAG_SENSOR_TEST` | Sensor self-test | {CMOS: ok/fail, OLED: ok/fail, BLE: ok/fail, thermal: Tj_current} | L1 |
| `FW_UPDATE_START` | Begin firmware update | Challenge (for authentication) | L2 (engineer) |
| `FW_UPDATE_CHUNK` | Send firmware chunk | ACK/NACK + progress % | L2 |
| `FW_UPDATE_VERIFY` | Verify + commit update | Hash verification result + reboot | L2 |

### Access Levels

| Level | Who | Authentication |
|-------|-----|---------------|
| L0 | Anyone with USB-C cable | None (read-only, non-sensitive) |
| L1 | Depot technician | Simple key (shared secret) |
| L2 | Firmware engineer | Cryptographic signature (asymmetric key) |

---

## 6. Deliverables per SW-SDLC Phase

| SW Phase | Deliverable | Format |
|----------|-------------|--------|
| SW-0 | This document (SWR-COM-xx requirements) | Markdown |
| SW-1 | Formal SRS + BLE GATT spec + Diagnostic protocol spec + Update protocol spec | Markdown |
| SW-2 | Communication architecture + data flow + security model | Markdown + diagrams |
| SW-3a | BLE firmware (nRF52840): GATT services, pairing, auto-connect, data upload | Git repo (C, Nordic SDK) |
| SW-3b | Diagnostic protocol (Jetson-side): USB-C command handler, log manager | Git repo (C++) |
| SW-3c | Diagnostic desktop tool: laptop application for depot technicians | Git repo (Python/Qt or Electron) |
| SW-3d | Firmware update tool: image signing + flashing (USB-C + BLE OTA) | Git repo (Python) |
| SW-4 | Integration test: BLE ↔ IRONMESH, diagnostic ↔ depot laptop, update cycle | Test report |
| SW-5 | V&V report: all SWR-COM-xx verified, EMC test results, security review | Test report |

---

## 7. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| FW-HAL BLE driver (nRF52840 init, SPI bus) | V-SMASH-SW-FW | PENDING | COM-BLE runs on FW-HAL BLE API |
| FW-HAL USB-C driver | V-SMASH-SW-FW | PENDING | COM-DIAG, COM-UPDATE |
| IRONMESH fleet protocol specification | IRONMESH project | PENDING | GATT profile must match IRONMESH server expectations |
| nRF52840 module (VM-4102) | Procurement | AVAILABLE (standard part) | BLE development |
| Nordic nRF5 SDK / Zephyr RTOS | Nordic Semiconductor | AVAILABLE | BLE firmware development framework |
| Firmware signing key infrastructure | Security team / KN | NOT STARTED | COM-SEC: key generation, storage, distribution |

**Critical path:** IRONMESH fleet protocol must be defined before BLE GATT profile is finalized. If IRONMESH is not ready, COM-BLE uses a placeholder GATT and updates later.

---

## 8. Variant Configuration Map

| Variant | COM-BLE | COM-DATA | COM-DIAG | COM-UPDATE | Adaptation |
|---------|---------|----------|----------|------------|------------|
| V-M | BLE 5.0, engagement stats | Standard log | USB-C diagnostic | USB-C + BLE OTA | **Baseline** |
| V-L | Same | Same + fire gate events | Same | Same | Extended log fields |
| V-D | Same | Alert events only (no engagement) | Same | Same | Reduced log schema |
| V-X | Same (may need encryption for export) | Same | Same | Same + export audit log | Export compliance: encrypted BLE? |
| V-T | Same + training data upload channel | Extended (training data log) | Same + training mode | Same | Additional GATT characteristic for training |
| V-NV | Same | Same + thermal sensor data | Same + thermal diagnostics | Same | Extended diagnostic commands |
| V-P | Same | Same | Same | Same | None |
| V-R | Same + CAN bus bridge to vehicle system | Same + vehicle telemetry | Same + CAN diagnostic | Same | **Major: CAN bus integration layer** |

**Reuse factor:** 7/8 direct. V-R requires CAN bus bridge (separate development effort).

---

## 9. Effort Estimate

| Phase | Duration | Personnel | Notes |
|-------|----------|-----------|-------|
| SW-0 + SW-1 | 2 weeks | 1 comms engineer | Requirements + GATT spec + diagnostic protocol |
| SW-2 (Architecture) | 2 weeks | 1 comms engineer | BLE state machine, USB-C protocol, security model |
| SW-3a (BLE firmware) | 4 weeks | 1 embedded + Nordic SDK | nRF52840 GATT services, pairing, data upload |
| SW-3b (Diagnostic protocol) | 3 weeks | 1 embedded | Jetson-side USB-C handler + log manager |
| SW-3c (Desktop diagnostic tool) | 3 weeks | 1 SW engineer | Python/Qt depot application |
| SW-3d (FW update tool) | 2 weeks | 1 SW + 1 security | Image signing, flashing, authentication |
| SW-4 (Integration) | 2 weeks | 1 comms + 1 test | BLE range test, EMC prep, IRONMESH handshake |
| SW-5 (Qualification) | 2 weeks | 1 comms + 1 QA | V&V + security review |
| **Total** | **~16 weeks** | | SW-3a/b/c/d partially parallel (different engineers) |

---

## 10. Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| IRONMESH protocol not defined in time | HIGH | MEDIUM — BLE profile incomplete | Design generic GATT; update when IRONMESH spec available |
| BLE disrupted by military VHF/UHF (VM-O10) | MEDIUM | MEDIUM — data loss (not operational) | EMC testing + BLE channel hopping + local buffering |
| Firmware signing key compromise | LOW | HIGH — unauthorized firmware possible | HSM key storage, limited L2 access, key rotation policy |
| BLE OTA update reliability in depot environment | MEDIUM | LOW — fallback to USB-C | USB-C is primary method; BLE OTA is convenience backup |
| Diagnostic tool compatibility (Windows/Linux) | LOW | LOW | Python + Qt = cross-platform |

---

## 11. Acceptance Criteria (Gate to SW-Phase 1)

- [ ] BLE GATT profile fully specified (all characteristics, UUIDs, data formats)
- [ ] Diagnostic protocol: all commands, access levels, authentication defined
- [ ] Firmware update protocol: signing scheme, authentication flow, rollback protection
- [ ] Data logging: record format, storage allocation, capacity calculation
- [ ] IRONMESH interface: either full spec or agreed placeholder with update plan
- [ ] Security model: key management, access levels, threat model
- [ ] Variant configuration map reviewed (especially V-X export encryption, V-R CAN bus)

---

*Software sub-project of V-SMASH Product Family*
*Cross-reference: [[V-SMASH-M_B1_YCKT_v1.0|B1 §5.2 Security, VM-S05, VM-N05]], [[V-SMASH-M_B4_User_Manual_v1.0|B4 §5.5 BLE, §8.3 Depot Maintenance]], [[V-SMASH-M_Function_Structure_v1.0|SF7]], [[V-SMASH-M_Morphological_Matrix_v1.0|SF7-A7]], [[V-SMASH-M_FMEA_v1.0|FMEA F13 BLE, F14 USB-C]], [[V-SMASH_Family_Orchestration_Design_v1.0|Orchestration §2 SW Core]]*
