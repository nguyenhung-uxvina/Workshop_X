---
project: V-SMASH-SW-COM
type: software-requirements-specification
version: 1.0
created: 2026-02-24
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — FLAG-07 resolved with F60-F62, FLAG-12 IRONMESH TBD tracked — 2026-02-24)
parent_family: V-SMASH
sw_phase: 1 (Formal Specification)
safety_class: A (lowest — system fully operational without communications)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
source: V-SMASH-SW-COM_Product_Proposal_v1.0.md (SW-Phase 0)
standards: See [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0]] §2.4
environment: See [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]] SW-COM column
---

# V-SMASH-SW-COM — Software Requirements Specification

**SW-Phase 1 | Version 1.0 | 2026-02-24**

---

## 1. Introduction

### 1.1 Purpose

This SRS defines the complete, testable requirements for V-SMASH-SW-COM — the communication and integration layer handling BLE data link, USB-C diagnostics, firmware update, data logging, and security. SW-COM is Safety Class A: the V-SMASH system operates fully without any communication function (SWR-COM-02). SW-COM enables fleet management (IRONMESH), depot maintenance, and post-mission analysis — not operational aiming.

**Intended audience:** Comms engineer (implementer), FW engineer (API dependency), IRONMESH team (fleet protocol), QA engineer (V&V), security reviewer (COM-SEC audit).

### 1.2 Scope

SW-COM runs on two processors:
- **Jetson Orin Nano** (main SoC): diagnostic protocol handler, data logger, firmware update coordinator
- **nRF52840** (BLE co-processor, VM-4102): BLE 5.0 stack, GATT services, pairing

The split is architectural: BLE runs on dedicated radio hardware; diagnostic/logging logic runs on the main SoC alongside SW-FW/SW-AI/SW-BAL.

### 1.3 Definitions

| Term | Definition |
|------|-----------|
| GATT | Generic Attribute Profile — BLE data structure for services and characteristics |
| OTA | Over-The-Air — firmware update via BLE radio |
| IRONMESH | Workshop X fleet management platform — receives V-SMASH telemetry via BLE base station |
| Depot | Rear-area maintenance facility with USB-C diagnostic tools and trained technicians |
| L0/L1/L2 | Diagnostic access levels: anyone / technician / engineer |

### 1.4 References

| ID | Document | Relevance |
|----|----------|-----------|
| [PP] | V-SMASH-SW-COM_Product_Proposal_v1.0.md | SW-Phase 0 source |
| [B1] | V-SMASH-M_B1_YCKT_v1.0 | VM-S05 (BLE), VM-N05 (no field config), B1 §5.2 (security) |
| [B4] | V-SMASH-M_B4_User_Manual_v1.0 | §5.5 (BLE), §8.3 (depot maintenance) |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0 | §12 SW Operating Envelope |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0 | §2.4 SW-COM standards |
| [FW-API] | V-SMASH-SW-FW_SAD_v1.0 §7 | FW-API contracts consumed by SW-COM |

### 1.5 Operating Environment

Per [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]]:
- BLE operates at ambient −10°C to +55°C. nRF52840 rated to +85°C — no concern.
- BLE antenna detuning at 100% RH possible — range may drop 10–20%. Acceptable (BLE is optional).
- EMI: 2.4 GHz ISM band well-separated from military VHF/UHF (30–400 MHz). Risk from wideband jammers — fallback: BLE is optional.
- USB-C diagnostic: depot environment only (indoor, controlled conditions).

---

## 2. System Context

```
┌────────────────────────────────────────────────────────────────────┐
│                      V-SMASH DEVICE                                │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                 JETSON ORIN NANO (main SoC)                  │  │
│  │                                                              │  │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌─────────────────┐   │  │
│  │  │ SW-AI  │  │ SW-BAL │  │ SW-FW  │  │     SW-COM      │   │  │
│  │  │        │  │        │  │(FW-API)│  │  ┌───────────┐  │   │  │
│  │  └───┬────┘  └───┬────┘  └───┬────┘  │  │ COM-DATA  │  │   │  │
│  │      │           │           │        │  │ COM-DIAG  │  │   │  │
│  │      └───────────┴───────────┘        │  │ COM-UPDATE│  │   │  │
│  │              FW-API calls              │  │ COM-LOG   │  │   │  │
│  │              ┌───────────┐             │  │ COM-SEC   │  │   │  │
│  │              │fw_get_*() │─────────────│→ │(Jetson)   │  │   │  │
│  │              │fw_report()│             │  └─────┬─────┘  │   │  │
│  │              └───────────┘             │        │USB-C   │   │  │
│  │                                        └────────┼────────┘   │  │
│  └────────────────────────────────────────────────┼─────────────┘  │
│                                                    │                │
│                                              ┌─────┴──────┐        │
│                                              │  USB-C     │        │
│                                              │  Port      │        │
│                                              └─────┬──────┘        │
│                          SPI bus                   │                │
│  ┌──────────────┐  ←──────────────────  ┌──────────┘                │
│  │  nRF52840    │                       │                           │
│  │  (VM-4102)   │  COM-BLE              │                           │
│  │  BLE 5.0     │  GATT Services        │                           │
│  │  Zephyr RTOS │                       │                           │
│  └──────┬───────┘                       │                           │
│         │ 2.4 GHz                       │                           │
└─────────┼───────────────────────────────┼───────────────────────────┘
          │                               │
          ▼                               ▼
   ┌──────────────┐               ┌──────────────┐
   │  IRONMESH    │               │  DEPOT       │
   │  Base Station│               │  Laptop      │
   │  (BLE recv)  │               │  (USB-C)     │
   └──────────────┘               └──────────────┘
```

---

## 3. Specific Requirements

### 3.1 Functional Requirements — COM-BLE (BLE 5.0 Communication)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F01 | COM-BLE shall implement BLE 5.0 on the nRF52840 co-processor (VM-4102) using the Zephyr RTOS BLE stack. | VM-S05 | MUST | I: inspect BLE stack version |
| SWR-COM-F02 | The V-SMASH system shall be fully operational (detection, tracking, aiming, display) when BLE is disconnected, disabled, or faulted. No degradation of any safety or aiming function. | VM-S05 | MUST (SAFETY-RELATED) | T: disconnect BLE, run full functional test |
| SWR-COM-F03 | COM-BLE shall advertise and auto-connect to an IRONMESH base station within ≤30 m range in open air. | B4 §5.5 | MUST | T: range test with calibrated attenuation |
| SWR-COM-F04 | On BLE disconnection during operation, COM-BLE shall: (a) buffer outgoing data locally via COM-DATA, (b) display "NO LINK" via `fw_report_fault(COM_FAULT)`, (c) auto-reconnect when in range. | VM-S05, B4 §5.5 | MUST | T: disconnect during data upload, verify buffer + reconnect |
| SWR-COM-F05 | COM-BLE shall implement BLE pairing with LESC (LE Secure Connections) — numeric comparison or passkey entry at depot. No just-works pairing. | TCVN 11930 §6.2 | MUST | T: attempt just-works pairing, verify rejection |
| SWR-COM-F06 | COM-BLE shall support up to 2 simultaneous BLE connections: one IRONMESH base station + one depot diagnostic tool. | Design | SHOULD | T: connect both simultaneously |
| SWR-COM-F07 | COM-BLE shall implement the GATT profile defined in §4 of this SRS. All characteristics per the specification. | [PP] §4 | MUST | T: GATT profile validation tool |
| SWR-COM-F08 | BLE data throughput shall be ≥10 kB/s sustained for log transfer (sufficient for 1,000-engagement log download in ≤60 s). | Design | SHOULD | T: measure throughput during log download |
| SWR-COM-F09 | COM-BLE shall not transmit images, video, GPS coordinates, bore-sight calibration data, or classified parameters. Only statistical/status data per GATT profile. | B4 §5.5, OPSEC | MUST | I: GATT profile audit + T: packet capture during operation |

### 3.2 Functional Requirements — COM-DATA (Data Logging)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F10 | COM-DATA shall log engagement records to eMMC (VM-2103) as a circular buffer. Each record per §5 schema. | SF7, FMEA F08 | MUST | T: trigger engagements, read log via COM-DIAG |
| SWR-COM-F11 | COM-DATA log shall hold ≥1,000 engagement records before overwriting oldest. | Design | MUST | A: record_size × 1,000 ≤ allocated_storage. T: write 1,001 records, verify oldest overwritten. |
| SWR-COM-F12 | COM-DATA shall log system events: boot, fault transitions, thermal events, BLE connect/disconnect, firmware updates. Separate from engagement log. | FMEA F08, VM-N04 | MUST | T: trigger events, verify in system log |
| SWR-COM-F13 | COM-DATA shall store no images or video frames. Only numerical parameters and timestamps. | B4 §5.5, security | MUST | I: storage format audit |
| SWR-COM-F14 | COM-DATA storage allocation: ≤512 MB of 32 GB eMMC. Remainder for FW, AI model, OS. | BOM VM-2103 | MUST | I: partition table review |
| SWR-COM-F15 | COM-DATA shall use a binary log format with CRC-32 integrity check per record. Corrupted records shall be skipped on read, not halt the reader. | Reliability | SHOULD | T: corrupt a record byte, verify reader skips it |
| SWR-COM-F16 | COM-DATA shall timestamp all records using monotonic clock (not wall clock). Wall-clock sync via BLE NTP-like service if IRONMESH provides it; otherwise monotonic-only. | Design | SHOULD | T: verify monotonic timestamps after power cycle |

### 3.3 Functional Requirements — COM-DIAG (USB-C Diagnostics)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F20 | COM-DIAG shall implement a command-response protocol over USB-C serial (CDC ACM class). | B4 §8.3 | MUST | T: connect depot laptop, exchange commands |
| SWR-COM-F21 | COM-DIAG shall support all commands defined in §6 of this SRS, with access level enforcement. | B4 §8.3 | MUST | T: test each command at each access level |
| SWR-COM-F22 | COM-DIAG shall be disabled during OPERATIONAL mode (FSM state ≠ INIT). Enabled only when device detects depot diagnostic tool USB handshake (specific USB VID:PID or magic byte sequence). | Security | MUST | T: attempt diagnostic commands during OPERATIONAL, verify rejection |
| SWR-COM-F23 | COM-DIAG response time: ≤500 ms for status queries, ≤5 s for log dump initiation, ≤60 s for complete 1,000-record log download. | Design | SHOULD | T: measure response times |
| SWR-COM-F24 | COM-DIAG shall provide a `DIAG_SENSOR_TEST` command that invokes `hal_self_test()` from FW-HAL and returns the result bitmask plus human-readable interpretation. | VM-Q01 | MUST | T: disconnect sensor, run test, verify failure reported |

### 3.4 Functional Requirements — COM-UPDATE (Firmware Update)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F30 | COM-UPDATE shall support firmware update via USB-C (primary method). | VM-N05 | MUST | T: flash new firmware via USB-C |
| SWR-COM-F31 | COM-UPDATE shall support firmware update via BLE OTA (secondary method, depot only). | VM-N05 | SHOULD | T: flash new firmware via BLE |
| SWR-COM-F32 | COM-UPDATE shall verify firmware image signature (Ed25519 or ECDSA-P256) before flashing. Unsigned or incorrectly signed images shall be rejected. | B1 §5.2, TCVN 11930 §6.2 | MUST | T: attempt unsigned image, verify rejection |
| SWR-COM-F33 | COM-UPDATE shall enforce version rollback protection: firmware version N cannot be downgraded to version <N. | IEC 62443-4-2 §CR 3.4 | MUST | T: attempt rollback, verify rejection |
| SWR-COM-F34 | COM-UPDATE shall implement atomic update: if update is interrupted (power loss, disconnect), device shall boot the previous working firmware, not a partial image. | Reliability | MUST | T: interrupt update at 50%, verify old FW boots |
| SWR-COM-F35 | COM-UPDATE shall be inaccessible during OPERATIONAL mode. Update requires explicit depot mode entry (power-on with USB-C diagnostic tool connected). | VM-N05, security | MUST | T: attempt update trigger during operation, verify rejection |
| SWR-COM-F36 | COM-UPDATE progress shall be reported: percentage complete, estimated time remaining, status (transferring/verifying/flashing/complete/error). | UX | SHOULD | T: observe update progress via diagnostic tool |
| SWR-COM-F37 | COM-UPDATE shall support updating: (a) main SoC firmware (Jetson), (b) nRF52840 BLE firmware, (c) AI model binary. Each as independent updatable image. | Design | MUST | T: update each image type independently |

### 3.5 Functional Requirements — COM-SEC (Security)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F40 | COM-SEC shall implement 3 access levels for diagnostic/update operations per §6.2. | Security design | MUST | T: attempt L2 command with L1 credentials, verify rejection |
| SWR-COM-F41 | COM-SEC L2 authentication shall use asymmetric cryptography (Ed25519 or ECDSA-P256). Private key stored only on authorized depot tools, not on the V-SMASH device. | IEC 62443-4-2 §CR 1.2 | MUST | D: key management review |
| SWR-COM-F42 | COM-SEC shall store the public key for firmware signature verification in a read-only partition of eMMC. Key rotation requires a signed key-update image. | IEC 62443-4-2 §CR 3.4 | MUST | T: attempt public key overwrite without signed update, verify rejection |
| SWR-COM-F43 | COM-SEC shall log all L2 access attempts (success and failure) to COM-LOG with timestamp and tool identifier. | Audit trail | MUST | T: perform L2 operations, verify audit log entries |
| SWR-COM-F44 | BLE data shall be encrypted in transit using BLE 5.0 AES-CCM encryption (enabled by LESC pairing). | TCVN 11930 §6.3 | MUST | T: packet capture, verify ciphertext |
| SWR-COM-F45 | For V-X (export variant): BLE communication shall additionally implement application-layer encryption (AES-256-GCM) over the BLE transport. Key provisioned at depot. | Export compliance | MUST (V-X only) | T: packet capture on V-X, verify double encryption |

### 3.6 Functional Requirements — COM-LOG (System Event Log)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F50 | COM-LOG shall record system events to non-volatile storage (eMMC) in a separate log from COM-DATA engagement records. | FMEA F08 | MUST | T: trigger events, power cycle, verify log persists |
| SWR-COM-F51 | COM-LOG event types: BOOT, SHUTDOWN, FAULT_ENTER(type), FAULT_CLEAR(type), THERMAL(stage), BLE_CONNECT, BLE_DISCONNECT, FW_UPDATE(result), DIAG_ACCESS(level, tool_id), CONFIG_CHANGE(param). | Design | MUST | I: event type enum review |
| SWR-COM-F52 | COM-LOG shall hold ≥10,000 events before circular overwrite. | Design | MUST | A: event_size × 10,000 ≤ allocated_storage |
| SWR-COM-F53 | COM-LOG shall survive power loss with ≤1 event lost (last write may be incomplete). | Reliability | SHOULD | T: power-pull during logging, verify ≤1 lost |

### 3.7 Functional Requirements — COM-HEALTH (Co-Processor Monitoring)

| ID | Requirement | Source | Priority | Verification |
|----|-------------|--------|----------|-------------|
| SWR-COM-F60 | COM shall verify nRF52840 responsiveness via SPI heartbeat (PING/PONG) every 5 s while BLE is enabled. | QC Gate FLAG-07 | MUST | T: measure SPI heartbeat interval over 60 s |
| SWR-COM-F61 | If 3 consecutive SPI heartbeats fail (15 s unresponsive), COM shall: (a) call `fw_report_fault(COM_FAULT)`, (b) log NRF_UNRESPONSIVE event to COM-LOG, (c) cease SPI transmissions until nRF52840 responds or device is power-cycled. | QC Gate FLAG-07 | MUST | T: disconnect nRF52840 SPI, verify COM_FAULT reported within 20 s |
| SWR-COM-F62 | If nRF52840 recovers after COM_FAULT (heartbeat resumes), COM shall: (a) log NRF_RECOVERED event, (b) clear COM_FAULT via `fw_report_fault(COM_CLEAR)`, (c) resume BLE operations. No reboot required. | Reliability | SHOULD | T: reconnect nRF52840 SPI after fault, verify auto-recovery |

---

### 3.8 Performance Requirements

| ID | Requirement | Source | Value | Verification |
|----|-------------|--------|-------|-------------|
| SWR-COM-P01 | BLE advertising → connection establishment | BLE 5.0 spec | ≤5 s in range | T: range test, 10 trials |
| SWR-COM-P02 | BLE auto-reconnect after disconnection | VM-S05 | ≤10 s when back in range | T: disconnect, re-enter range, measure |
| SWR-COM-P03 | BLE data throughput (sustained) | Design | ≥10 kB/s | T: bulk transfer measurement |
| SWR-COM-P04 | Diagnostic command response time | Design | ≤500 ms for status queries | T: measure per command |
| SWR-COM-P05 | Full log download time (1,000 engagements) | Design | ≤60 s via USB-C, ≤120 s via BLE | T: full download, measure |
| SWR-COM-P06 | Firmware update time (10 MB image via USB-C) | Design | ≤60 s transfer + ≤30 s verify+flash | T: end-to-end update timing |
| SWR-COM-P07 | COM-DATA write latency (per engagement record) | Design | ≤5 ms (must not block AI pipeline) | T: measure write time during active tracking |
| SWR-COM-P08 | COM power overhead (BLE active, connected) | VM-E03 | ≤0.05 W (nRF52840 ~15 mA × 3.3 V) | T: current measurement BLE connected vs disconnected |

---

### 3.9 Interface Requirements

#### 3.9.1 FW-API Functions Consumed by SW-COM

| API Function | Usage | Reference |
|-------------|-------|-----------|
| `fw_get_fsm_state()` | Report device status via BLE + diagnostic | FW SAD §7.2 |
| `fw_get_power_state()` | Report battery level via BLE | FW SAD §7.2 |
| `fw_get_battery_soc()` | Report SoC% via BLE + diagnostic | FW SAD §7.2 |
| `fw_get_thermal_state()` | Report thermal status via diagnostic | FW SAD §7.2 |
| `fw_report_fault(COM_FAULT)` | Report BLE/COM failure to FSM | FW SAD §7.2 |
| `hal_self_test()` | Sensor test command for diagnostics | FW SAD §6.2 |
| `hal_usb_*()` | USB-C communication for diagnostics | FW SAD §6.2 |

#### 3.9.2 Inter-Processor Interface (Jetson ↔ nRF52840)

| Parameter | Value |
|-----------|-------|
| Physical bus | SPI (Jetson master, nRF52840 slave) |
| Clock rate | 8 MHz |
| Protocol | Custom frame: `[SOF][LEN][CMD][PAYLOAD][CRC16][EOF]` |
| Frame size | ≤256 bytes |
| Commands (Jetson → nRF) | SET_ADV_DATA, SEND_NOTIFICATION, START_OTA, STOP_ADV, HEARTBEAT_PING |
| Commands (nRF → Jetson) | BLE_CONNECTED, BLE_DISCONNECTED, DATA_RECEIVED, OTA_CHUNK, HEARTBEAT_PONG |
| IRQ line | nRF52840 → Jetson GPIO: asserted when nRF has data for Jetson |

#### 3.9.3 IRONMESH Fleet Interface (via BLE)

| Parameter | Value |
|-----------|-------|
| Direction | V-SMASH → IRONMESH (primarily uplink; downlink for time sync only) |
| Data content | Device status, engagement summaries, session statistics |
| Data NOT sent | Images, video, GPS, calibration, classified info |
| Update cadence | Status: on-change (notify). Statistics: every 60 s or on engagement. |
| Protocol | GATT notifications (§4) |
| IRONMESH protocol version | TBD — placeholder GATT until IRONMESH API finalized [ASSUMPTION] |

---

## 4. BLE GATT Profile Specification

### 4.1 Service Definition

**V-SMASH IRONMESH Service**
- Service UUID: `A0E50001-0001-1000-8000-00805F9B34FB` (custom 128-bit)
- Service type: Primary

### 4.2 Characteristics

| # | Name | UUID Suffix | Properties | Format | Description |
|---|------|------------|------------|--------|-------------|
| C01 | Device ID | `-0001` | Read | UTF-8 string (≤20 chars) | Serial number: "VSMASH-{variant}-{serial}" |
| C02 | Device Status | `-0002` | Read, Notify | uint8 | FSM state enum (0–9, per FW SAD §4.1) |
| C03 | Battery Level | `-0003` | Read, Notify | uint8 | SoC% (0–100, 0xFF = unknown) |
| C04 | FW Version | `-0004` | Read | UTF-8 string (≤16 chars) | "v{major}.{minor}.{patch}" |
| C05 | AI Model Version | `-0005` | Read | UTF-8 string (≤16 chars) | "YOLO-v{major}.{minor}" |
| C06 | Thermal State | `-0006` | Read, Notify | uint8 | thermal_state_t enum (0–4) |
| C10 | Last Engagement | `-0010` | Read, Notify | struct (32 bytes) | See §4.3 |
| C11 | Session Stats | `-0011` | Read | struct (24 bytes) | See §4.3 |
| C20 | Log Transfer | `-0020` | Read, Indicate | struct (variable) | Paginated log pages (≤244 bytes/page) |
| C30 | FW Update Ctrl | `-0030` | Write | struct (4 bytes) | {cmd: uint8, param: uint24}. Depot-auth required. |
| C31 | FW Update Data | `-0031` | Write-no-resp | bytes (≤244) | Firmware image chunks. Depot-auth required. |

### 4.3 Data Structures

**Last Engagement (C10) — 32 bytes:**

```c
typedef struct __attribute__((packed)) {
    uint32_t timestamp_s;      /* Monotonic seconds since boot */
    uint8_t  target_class;     /* 0=rotor, 1=fixed-wing, 2=bird, 3=unknown */
    uint8_t  confidence_pct;   /* 0–100 */
    uint16_t range_est_dm;     /* Estimated range in decimeters (0–3000 = 0–300m) */
    int16_t  lead_angle_01mrad;/* Lead angle in 0.1 mrad units (signed) */
    uint16_t duration_ms;      /* Tracking duration in ms */
    uint8_t  outcome;          /* 0=lost_track, 1=shot_fired, 2=manual_disengage */
    uint8_t  thermal_state;    /* thermal_state_t at engagement time */
    uint8_t  battery_soc;      /* SoC% at engagement time */
    uint8_t  reserved[13];     /* Pad to 32 bytes for future expansion */
} engagement_record_t;
```

**Session Statistics (C11) — 24 bytes:**

```c
typedef struct __attribute__((packed)) {
    uint32_t uptime_s;         /* Total uptime this session (seconds) */
    uint16_t detection_count;  /* Total objects detected */
    uint16_t engagement_count; /* Total engagements (entered DETECTED state) */
    uint16_t fault_count;      /* Total fault events */
    uint16_t ble_disconnect_count; /* BLE disconnections */
    uint8_t  max_thermal_state;/* Highest thermal state reached */
    uint8_t  min_battery_soc;  /* Lowest SoC% reached */
    uint8_t  fw_update_count;  /* FW updates this session (normally 0) */
    uint8_t  reserved[7];      /* Pad to 24 bytes */
} session_stats_t;
```

---

## 5. Engagement Log Schema (COM-DATA)

### 5.1 Record Format

Each engagement record: 64 bytes (engagement_record_t from §4.3 + extended fields).

```c
typedef struct __attribute__((packed)) {
    /* Core (same as BLE engagement_record_t) */
    uint32_t timestamp_s;
    uint8_t  target_class;
    uint8_t  confidence_pct;
    uint16_t range_est_dm;
    int16_t  lead_angle_01mrad;
    uint16_t duration_ms;
    uint8_t  outcome;
    uint8_t  thermal_state;
    uint8_t  battery_soc;
    /* Extended (stored locally, not sent via BLE) */
    uint16_t max_angular_vel_01dps; /* Peak angular velocity in 0.1 deg/s */
    uint16_t avg_confidence_pct10;  /* Average confidence × 10 (0–1000) */
    uint8_t  frames_tracked;        /* Number of frames target was tracked */
    uint8_t  reacquisitions;        /* Number of post-shot reacquisitions */
    int16_t  bore_offset_01mrad_x;  /* Bore-sight X offset at time of engagement */
    int16_t  bore_offset_01mrad_y;  /* Bore-sight Y offset */
    uint32_t crc32;                 /* CRC-32 of bytes 0–53 */
    uint8_t  reserved[6];          /* Pad to 64 bytes */
} engagement_log_record_t;         /* Total: 64 bytes */
```

### 5.2 Storage Calculation

| Parameter | Value |
|-----------|-------|
| Record size | 64 bytes |
| Minimum capacity | 1,000 records (SWR-COM-F11) |
| Storage required | 64 KB for engagement log |
| System event log (SWR-COM-F52) | 10,000 events × 32 bytes = 320 KB |
| **Total COM-DATA allocation** | **≤1 MB** (of 512 MB budget per SWR-COM-F14) |
| Margin | 511 MB free for future expansion |

---

## 6. Diagnostic Protocol Specification (COM-DIAG)

### 6.1 Transport

- USB-C CDC ACM (virtual serial port)
- Baud rate: 115200 (virtual — actual USB 2.0 speed)
- Frame: `$CMD,arg1,arg2,...*CHECKSUM\r\n` (NMEA-like ASCII for human readability at L0/L1)
- Binary mode: `[0xAA][LEN_H][LEN_L][CMD][PAYLOAD][CRC16_H][CRC16_L]` (for bulk transfers at L1/L2)

### 6.2 Access Levels

| Level | Who | Auth Method | Capabilities |
|-------|-----|-------------|-------------|
| **L0** | Anyone with USB-C cable | None | Read-only non-sensitive: PING, device ID, FW version, uptime |
| **L1** | Depot technician | Shared secret (256-bit key, entered on depot tool) | Full read: status, fault history, calibration, logs, sensor test |
| **L2** | Firmware engineer | Ed25519 challenge-response (depot tool holds private key) | All L1 + write: firmware update, configuration flash, key rotation |

### 6.3 Command Reference

| Command | Access | Request | Response | SWR |
|---------|--------|---------|----------|-----|
| `PING` | L0 | `$PING*xx` | `$PONG,{device_id},{fw_ver},{uptime_s}*xx` | F20 |
| `STATUS` | L1 | `$STATUS*xx` | `$STATUS,{fsm},{thermal},{power},{battery},{ble},{sensor}*xx` | F21 |
| `FAULT_HIST` | L1 | `$FAULTS,{count}*xx` | Binary: array of `{timestamp, type, duration, resolution}` | F21 |
| `CALIB_READ` | L1 | `$CALIB*xx` | `$CALIB,{x_offset_01mrad},{y_offset_01mrad},{date}*xx` | F21 |
| `LOG_DUMP` | L1 | `$LOGDUMP,{type},{start},{count}*xx` | Binary: paginated records | F23 |
| `SENSOR_TEST` | L1 | `$SELFTEST*xx` | `$SELFTEST,{bitmask},{cmos},{oled},{ble},{thermal},{batt}*xx` | F24 |
| `AUTH_L2` | L1→L2 | Binary: `[AUTH][challenge]` | Binary: `[AUTH_OK]` or `[AUTH_FAIL]` | F40 |
| `FW_START` | L2 | Binary: `[FW_START][image_type][image_size][signature]` | `[FW_ACK]` or `[FW_REJECT,reason]` | F30, F32 |
| `FW_CHUNK` | L2 | Binary: `[FW_CHUNK][offset][data]` | `[FW_ACK,progress_%]` | F30 |
| `FW_COMMIT` | L2 | Binary: `[FW_COMMIT]` | `[FW_OK]` or `[FW_FAIL,reason]` then reboot | F30 |
| `CONFIG_WRITE` | L2 | Binary: `[CFG_WRITE][param_id][value]` | `[CFG_ACK]` | — |
| `KEY_ROTATE` | L2 | Binary: `[KEY_ROTATE][signed_new_pubkey]` | `[KEY_OK]` or `[KEY_FAIL]` | F42 |

---

## 7. Firmware Update Protocol (COM-UPDATE)

### 7.1 Update Flow

```
DEPOT TOOL                              V-SMASH DEVICE
    │                                        │
    ├── USB-C connect ──────────────────────→│ Detect depot tool
    │                                        │ Enter diagnostic mode
    │←── $PONG,... ──────────────────────────┤ L0: identify device
    │                                        │
    ├── AUTH_L2 challenge-response ─────────→│ L2: authenticate engineer
    │←── AUTH_OK ────────────────────────────┤
    │                                        │
    ├── FW_START(image_type, size, sig) ────→│ Verify signature (Ed25519)
    │←── FW_ACK ─────────────────────────────┤ Allocate staging partition
    │                                        │
    ├── FW_CHUNK(0, data) ──────────────────→│ Write to staging
    ├── FW_CHUNK(4096, data) ───────────────→│ ...
    │   ... (10 MB / 4 KB = ~2,500 chunks)  │
    │←── FW_ACK, 100% ──────────────────────┤
    │                                        │
    ├── FW_COMMIT ──────────────────────────→│ Verify CRC of staged image
    │                                        │ Mark staged as pending-boot
    │←── FW_OK ──────────────────────────────┤ Reboot into new firmware
    │                                        │
    │   ... device reboots ...               │
    │                                        │
    ├── $PING ──────────────────────────────→│ Verify new FW version
    │←── $PONG,{new_ver},... ───────────────┤ Done ✓
```

### 7.2 Atomic Update (A/B Partition)

| Partition | Content | Size |
|-----------|---------|------|
| A (active) | Currently running firmware | ~64 MB |
| B (staging) | New firmware being written | ~64 MB |
| Boot selector | Which partition to boot | 4 KB |

**Update atomicity (SWR-COM-F34):**
1. New image written to B (staging)
2. CRC verified on B
3. Boot selector updated: "try B once"
4. Reboot → boots B
5. If B boots successfully: mark B as active, A becomes staging
6. If B fails to boot (watchdog timeout): revert to A automatically

---

## 8. Safety Requirements

| ID | Requirement | Source | Safety Class | Fallback | Verification |
|----|-------------|--------|-------------|----------|-------------|
| SWR-COM-S01 | BLE failure shall not degrade any aiming, detection, or safety function. All combat capability independent of BLE. | VM-S05 | SAFETY-RELATED | System operates fully standalone. BLE is additive only. | T: remove nRF52840, full functional test |
| SWR-COM-S02 | Firmware update failure shall not brick the device. A/B partition scheme ensures rollback to working firmware. | Reliability | SAFETY-RELATED | Boot selector reverts to A if B fails. HW watchdog triggers revert. | T: flash corrupted image, verify rollback |
| SWR-COM-S03 | Unsigned firmware shall never execute. Signature verification in ROM bootloader (immutable). | TCVN 11930, IEC 62443-4-2 | SAFETY-RELATED | Reject unsigned image with error message. | T: attempt unsigned flash, verify rejection + error |

---

## 9. Variant Configuration Matrix

| Module | V-M | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|-----|-----|-----|-----|-----|------|-----|-----|
| COM-BLE | Standard GATT | = | Alert events only (no engagement stats) | + AES-256-GCM app-layer encryption (SWR-COM-F45) | + training data upload characteristic | = | = | = |
| COM-DATA | Engagement + system log | + fire gate event field | Detection alerts only | = V-L + export audit field | + training metadata per frame | + thermal sensor data | = | + vehicle telemetry fields |
| COM-DIAG | Standard commands | = | = | + export audit command | + training mode commands | + thermal diagnostic | = | + CAN diagnostic bridge |
| COM-UPDATE | USB-C + BLE OTA | = | = | + export compliance verification on update | = | = | = | = |
| COM-SEC | LESC pairing + Ed25519 signing | = | = | + app-layer AES-256-GCM | = | = | = | = |
| COM-LOG | Standard events | = | = | + export audit events | + training session events | = | = | + CAN bus events |

**Configuration method:** `#define VARIANT_xxx` at build time selects GATT profile, log schema, and encryption mode.

---

## 10. Traceability Matrix

### 10.1 Forward (Source → SWR-COM)

| Source | SWR-COM Coverage |
|--------|-----------------|
| VM-S05 (BLE) | F01, F02, F03, F04, F09, P01, P02, S01 |
| VM-N05 (no field config) | F22, F35 |
| B1 §5.2 (security) | F05, F32, F33, F40, F41, F42, F44, F45, S03 |
| B4 §5.5 (BLE usage) | F03, F04, F07, F08, F09, P03 |
| B4 §8.3 (depot) | F20, F21, F22, F23, F24, P04, P05 |
| SF7 (data logging) | F10, F11, F12, F13 |
| FMEA F08 (post-mission) | F10, F12, F50, F51 |
| FMEA F13/F14 (BLE/USB) | F02, F04, S01, S02 |
| TCVN 11930 (security) | F05, F44, F45, S03 |
| IEC 62443-4-2 (component security) | F33, F41, F42 |
| QC Gate FLAG-07 (co-processor health) | F60, F61, F62 |

### 10.2 Backward (SWR-COM → Verification)

| Method | Count | IDs |
|--------|-------|-----|
| T (Test) | 38 | F01–F09, F10–F16, F20–F24, F30–F37, F40, F43–F45, F60–F62, P01–P08, S01–S03 |
| I (Inspection) | 7 | F01, F09, F13, F14, F51, GATT audit |
| D (Demonstration) | 2 | F41 (key management review), F42 (key storage review) |
| A (Analysis) | 2 | F11 (storage calc), F52 (event log calc) |

---

## 11. Risks

| # | Risk | Prob. | Impact | Mitigation | Contingency |
|---|------|-------|--------|------------|-------------|
| R1 | IRONMESH protocol not ready | HIGH | MEDIUM | Placeholder GATT with generic stats. Update when spec available. | COM-BLE works standalone with placeholder profile. |
| R2 | BLE disrupted by military radios (EMC) | MEDIUM | LOW | BLE is optional (SWR-COM-F02). Channel hopping. Local buffering. | System operates fully without BLE. |
| R3 | Firmware signing key compromise | LOW | HIGH | Ed25519 keys. Depot tool HSM storage. Limited L2 access. Key rotation via signed update. | Rotate keys. Revoke compromised tool. |
| R4 | A/B partition size insufficient for future FW | LOW | MEDIUM | 64 MB per partition (2× current estimate). | Increase partition if eMMC allows. |
| R5 | nRF52840 ↔ Jetson SPI protocol reliability | MEDIUM | MEDIUM | CRC-16 per frame. Retry 3× on CRC fail. SPI heartbeat every 5 s detects nRF lockup (F60–F62). | Fall back to USB-C only diagnostics. System operates fully without BLE (F02). |
| R6 | V-X export encryption regulation change | LOW | MEDIUM | AES-256-GCM is widely accepted. | Swap cipher if required by export destination country. |

---

## 12. Acceptance Criteria (Gate to SW-Phase 2: SAD)

- [ ] **GATT complete:** All 11 characteristics have UUIDs, data formats, and properties specified
- [ ] **Diagnostic protocol:** All 12 commands specified with request/response/access level
- [ ] **Update protocol:** Signing scheme (Ed25519), A/B partition, atomic rollback fully specified
- [ ] **Data schemas:** Engagement record (64 B) and system event record specified with CRC
- [ ] **Security model:** 3 access levels, key management, BLE encryption, export (V-X) encryption
- [ ] **FW-API dependency:** All consumed FW-API functions listed with reference to FW SAD
- [ ] **Variant coverage:** All 8 variants mapped — V-X encryption, V-D reduced log, V-T training data, V-R CAN bridge noted
- [ ] **Standards:** References TCVN Compliance Matrix §2.4 and SW Operating Envelope §12
- [ ] **QC Gate:** Defense AI QC Gate run, all checks PASS or FLAG-with-plan

---

*Software Requirements Specification — V-SMASH-SW-COM*
*SW-Phase 1 | Version 1.0 | 2026-02-24*
*Source: [[V-SMASH-SW-COM_Product_Proposal_v1.0|SW-Phase 0 Product Proposal]]*
*Standards: [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0|TCVN Matrix §2.4]]*
*Environment: [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12|SW Operating Envelope]]*
