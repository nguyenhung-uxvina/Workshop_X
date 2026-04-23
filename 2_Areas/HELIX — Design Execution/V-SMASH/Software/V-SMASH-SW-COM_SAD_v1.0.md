---
project: V-SMASH-SW-COM
type: software-architecture-document
version: 1.0
created: 2026-03-02
status: accepted (QC Gate: HUMAN REVIEW — 10 PASS, 2 FLAG, 0 FAIL — FLAG-07a fixed (nRF watchdog config), FLAG-07b fixed (L2 rate limiting), FLAG-12a fixed (fault clear mechanism), FLAG-12b fixed (event struct layout) — 2026-03-02)
parent_family: V-SMASH
sw_phase: 2 (Architecture)
safety_class: A (lowest — system fully operational without communications)
source: V-SMASH-SW-COM_SRS_v1.0.md (SW-Phase 1)
resolves_flags: [SRS-FLAG-12 partial (IRONMESH placeholder architecture defined)]
decisions: [COM-1 single-thread-Jetson, COM-2 spi-irq-driven, COM-3 zephyr-ble-stack, COM-4 mmap-circular-buffer, COM-5 ab-partition-watchdog, COM-6 ed25519-rom-pubkey, COM-7 nmea-ascii-plus-binary]
---

# V-SMASH-SW-COM — Software Architecture Document

**SW-Phase 2 | Version 1.0 | 2026-03-02**

---

## 1. Introduction

### 1.1 Purpose

This Software Architecture Document (SAD) defines the internal structure, protocol design, data flow, memory layout, and implementation specification for V-SMASH-SW-COM — the communication and integration layer. It translates the 38 functional requirements + 8 performance requirements + 3 safety requirements from the SRS (SW-Phase 1) into an implementable dual-processor architecture spanning the Jetson Orin Nano (main SoC) and nRF52840 (BLE co-processor).

**Key decisions made in this document:**
- Thread model (COM-1): single COM thread on Jetson — SPI polling + USB-C handler + data logger + update coordinator. Safety Class A means no real-time deadline pressure.
- SPI protocol (COM-2): IRQ-driven with CRC-16 framing. nRF52840 asserts IRQ when it has data; Jetson polls at 20 Hz idle, IRQ-wakes for events.
- BLE stack (COM-3): Zephyr RTOS BLE subsystem on nRF52840. No custom BLE stack. GATT profile defined in SRS §4 implemented as Zephyr GATT services.
- Storage engine (COM-4): memory-mapped circular buffer on eMMC ext4 partition. Two files: `engagement.bin` (64 KB) + `events.bin` (320 KB). CRC-32 per record.
- Firmware update (COM-5): A/B partition with hardware watchdog revert. Boot selector in dedicated 4 KB partition. Version counter in OTP fuse (rollback protection).
- Key management (COM-6): Ed25519 public key in read-only eMMC partition (partition 3 "cal"). Key rotation via signed key-update image only.
- Diagnostic protocol (COM-7): dual-mode — NMEA-like ASCII for human-readable L0/L1 + binary framing for bulk transfers and L2 authentication.

### 1.2 References

| ID | Document | Relevance |
|----|----------|-----------|
| [SRS] | V-SMASH-SW-COM_SRS_v1.0.md | 38 functional + 8 performance + 3 safety requirements |
| [FW-SAD] | V-SMASH-SW-FW_SAD_v1.0.md | FW-API contracts (§7), thread model (§3), HAL (§6) |
| [AI-SAD] | V-SMASH-SW-AI_SAD_v1.0.md | Coordinator architecture (§14), engagement event interface |
| [BAL-SAD] | V-SMASH-SW-BAL_SAD_v1.0.md | `bal_compute()` API, engagement data fields |
| [ORCH] | V-SMASH_Family_Orchestration_Design_v1.0.md | §12 SW Operating Envelope |
| [TCVN] | V-SMASH_TCVN_SW_Compliance_Matrix_v1.0.md | §2.4 SW-COM standards |

### 1.3 SRS FLAG Resolution Index

| SRS FLAG | Issue | SAD Resolution |
|----------|-------|----------------|
| FLAG-12 | IRONMESH protocol TBD — placeholder GATT profile | §3.4 defines versioned GATT with `PROTO_VERSION` characteristic. IRONMESH-specific characteristics isolated behind feature flag `CFG_IRONMESH_V1`. Placeholder characteristics are forward-compatible (reserved bytes in structs, UUID space allocated). Architecture supports GATT profile update via firmware update without protocol-breaking changes. |

---

## 2. Architecture Overview

### 2.1 System Context — Dual Processor Split

```
┌─────────────────────────────────────────────────────────────────┐
│                    JETSON ORIN NANO (main SoC)                   │
│                                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │
│  │ T1: AI   │  │ T2: Disp │  │ T3: Supv │  │ T-COM          │  │
│  │ (SW-AI)  │  │ (FW-DISP)│  │ (FW-PWR) │  │ (SW-COM)       │  │
│  │ Priority │  │ Priority │  │ Priority │  │ Priority: LOW  │  │
│  │ HIGH     │  │ MED-HIGH │  │ MED      │  │                │  │
│  └────┬─────┘  └──────────┘  └──────────┘  │ ┌────────────┐ │  │
│       │                                      │ │COM-SPI-HOST│ │  │
│       │  engagement_event()                  │ │COM-USB-HOST│ │  │
│       ├─────────────────────────────────────→│ │COM-DATA    │ │  │
│       │                                      │ │COM-DIAG    │ │  │
│       │                                      │ │COM-UPDATE  │ │  │
│  FW-API calls                                │ │COM-SEC     │ │  │
│  fw_get_*() ─────────────────────────────────│ │COM-LOG     │ │  │
│  fw_report_fault(COM_FAULT) ─────────────────│ │COM-HEALTH  │ │  │
│                                              │ └─────┬──────┘ │  │
│                                              └───────┼────────┘  │
│                                                      │           │
│                              SPI master (8 MHz)      │ USB-C     │
│  ┌───────────────────────────┼───────────────────────┼────────┐  │
│  │                           │                       │        │  │
│  │  eMMC (32 GB) VM-2103     │                       │        │  │
│  │  ┌──────────────────┐     │                       │        │  │
│  │  │ P1: rootfs (RO)  │     │                       │        │  │
│  │  │ P2a: FW-A (64MB) │     │                       │        │  │
│  │  │ P2b: FW-B (64MB) │     │                       │        │  │
│  │  │ P3: cal (RO,4KB) │     │                       │        │  │
│  │  │ P4: data (512MB) │     │                       │        │  │
│  │  │  engagement.bin   │     │                       │        │  │
│  │  │  events.bin       │     │                       │        │  │
│  │  │  boot_sel (4KB)   │     │                       │        │  │
│  │  └──────────────────┘     │                       │        │  │
│  └───────────────────────────┼───────────────────────┼────────┘  │
└──────────────────────────────┼───────────────────────┼───────────┘
                               │                       │
                         SPI bus + IRQ                 USB-C
                               │                       │
                    ┌──────────┴──────────┐    ┌───────┴──────┐
                    │   nRF52840 (VM-4102)│    │  DEPOT       │
                    │   Zephyr RTOS       │    │  Laptop      │
                    │                     │    │  (USB-C)     │
                    │  ┌───────────────┐  │    └──────────────┘
                    │  │ BLE 5.0 Stack │  │
                    │  │ GATT Services │  │
                    │  │ SPI Slave     │  │
                    │  │ OTA DFU       │  │
                    │  └───────┬───────┘  │
                    └──────────┼──────────┘
                               │ 2.4 GHz
                    ┌──────────┴──────────┐
                    │  IRONMESH           │
                    │  Base Station       │
                    └─────────────────────┘
```

### 2.2 Thread Model (Decision COM-1)

**Decision:** Single COM thread (T-COM) on Jetson for all communication functions.

**Rationale:** SW-COM is Safety Class A — no real-time deadlines. BLE throughput (10 kB/s) and USB-C diagnostic commands (500 ms response) do not require dedicated threads per function. A single event-driven thread simplifies synchronization and reduces memory footprint. T-COM runs at lowest priority — it yields to T1 (AI), T2 (Display), T3 (Supervisor) unconditionally.

**T-COM event loop:**

```c
void* t_com_main(void *arg) {
    com_init();          /* SPI init, log files open, USB-C listen */
    com_health_init();   /* Register COM watchdog with FW-WDG */

    while (!shutdown_requested) {
        /* 1. SPI: check IRQ or poll at 20 Hz */
        spi_host_process();

        /* 2. USB-C: check for diagnostic commands */
        if (hal_usb_connected()) {
            usb_diag_process();
        }

        /* 3. Data log: flush pending writes */
        com_data_flush();

        /* 4. Health: heartbeat + nRF watchdog check */
        com_health_tick();

        /* 5. Sleep until next tick or IRQ */
        com_wait_event(COM_TICK_MS);  /* 50 ms = 20 Hz base rate */
    }

    com_shutdown();
    return NULL;
}
```

**Thread parameters:**

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Priority | `SCHED_OTHER` (lowest) | Safety Class A — never preempts AI/Display/Supervisor |
| Stack size | 64 KB | Sufficient for SPI buffers + USB-C command parsing |
| Tick rate | 20 Hz (50 ms) | Fast enough for BLE status updates; slow enough to minimize CPU |
| CPU affinity | None (Orin Nano 6-core) | OS scheduler assigns; no contention with T1 |
| Watchdog timeout | 5000 ms | 100× tick rate — generous because non-safety-critical |

### 2.3 Module Decomposition

```
SW-COM (T-COM thread)
├── COM-SPI-HOST    ← SPI master driver for nRF52840 communication
├── COM-USB-HOST    ← USB-C CDC ACM host for depot diagnostic tool
├── COM-BLE-CTRL    ← BLE control logic (commands to nRF52840 via SPI)
├── COM-DATA        ← Engagement data logger (circular buffer on eMMC)
├── COM-LOG         ← System event logger (circular buffer on eMMC)
├── COM-DIAG        ← Diagnostic command parser and handler
├── COM-UPDATE      ← Firmware update coordinator (A/B partition)
├── COM-SEC         ← Security: authentication, key management, encryption
└── COM-HEALTH      ← nRF52840 health monitor (SPI heartbeat)

nRF52840 (Zephyr RTOS — separate binary)
├── NRF-BLE         ← Zephyr BLE stack + GATT services
├── NRF-SPI-SLAVE   ← SPI slave protocol handler
├── NRF-OTA         ← BLE OTA DFU (nRF52840 self-update)
└── NRF-MAIN        ← Main loop + state machine
```

---

## 3. COM-SPI-HOST — SPI Protocol Architecture

### 3.1 Physical Layer (per SRS §3.9.2)

| Parameter | Value | Source |
|-----------|-------|--------|
| Bus | SPI (Jetson master, nRF52840 slave) | SRS §3.9.2 |
| Clock | 8 MHz | SRS §3.9.2 |
| Mode | SPI Mode 0 (CPOL=0, CPHA=0) | Nordic nRF52840 default |
| IRQ line | nRF52840 GPIO → Jetson GPIO input | SRS §3.9.2 |
| Max frame | 256 bytes | SRS §3.9.2 |

### 3.2 Frame Format (Decision COM-2)

```
┌─────┬─────┬─────┬─────────────┬────────┬─────┐
│ SOF │ LEN │ CMD │   PAYLOAD   │ CRC-16 │ EOF │
│ 1B  │ 1B  │ 1B  │  0–251 B    │  2B    │ 1B  │
└─────┴─────┴─────┴─────────────┴────────┴─────┘
```

| Field | Size | Value | Description |
|-------|------|-------|-------------|
| SOF | 1 | `0x7E` | Start of frame delimiter |
| LEN | 1 | 0–251 | Payload length (excludes SOF/LEN/CMD/CRC/EOF) |
| CMD | 1 | See §3.3 | Command identifier |
| PAYLOAD | 0–251 | Variable | Command-specific data |
| CRC-16 | 2 | CRC-16/CCITT | Over LEN+CMD+PAYLOAD bytes (polynomial 0x1021, init 0xFFFF) |
| EOF | 1 | `0x7F` | End of frame delimiter |

**Total overhead:** 6 bytes per frame. Max payload: 251 bytes. Max frame: 257 bytes.

**CRC-16 implementation:** Same CRC-16/CCITT as BAL-CALIB (see [BAL-SAD] §8.2) — shared `crc16_ccitt()` utility function.

### 3.3 Command Set

**Jetson → nRF52840 (Master → Slave):**

| CMD | Name | Payload | Description | SWR |
|-----|------|---------|-------------|-----|
| `0x01` | `SPI_SET_ADV_DATA` | struct (≤244 B) | Update BLE advertising/characteristic data | F07 |
| `0x02` | `SPI_SEND_NOTIFY` | `{char_id:u8, data:var}` | Trigger BLE GATT notification | F07 |
| `0x03` | `SPI_START_OTA` | `{image_size:u32, sig:64B}` | Begin BLE OTA update to nRF52840 | F31 |
| `0x04` | `SPI_OTA_CHUNK` | `{offset:u32, data:≤240B}` | Send OTA firmware chunk | F31 |
| `0x05` | `SPI_OTA_COMMIT` | (none) | Finalize OTA update, trigger nRF reboot | F31 |
| `0x06` | `SPI_STOP_ADV` | (none) | Stop BLE advertising | — |
| `0x07` | `SPI_START_ADV` | (none) | Start/resume BLE advertising | — |
| `0x10` | `SPI_HEARTBEAT_PING` | `{seq:u16}` | Health check — expects PONG within 1 s | F60 |

**nRF52840 → Jetson (Slave → Master, via IRQ):**

| CMD | Name | Payload | Description | SWR |
|-----|------|---------|-------------|-----|
| `0x81` | `SPI_BLE_CONNECTED` | `{conn_id:u8, addr:6B}` | BLE central connected | F04 |
| `0x82` | `SPI_BLE_DISCONNECTED` | `{conn_id:u8, reason:u8}` | BLE central disconnected | F04 |
| `0x83` | `SPI_DATA_RECEIVED` | `{char_id:u8, data:var}` | Data written to a GATT characteristic by central | F07 |
| `0x84` | `SPI_OTA_CHUNK_ACK` | `{offset:u32, status:u8}` | OTA chunk reception acknowledgment | F31 |
| `0x85` | `SPI_OTA_RESULT` | `{status:u8}` | OTA commit result (0=OK, 1=CRC_FAIL, 2=SIG_FAIL) | F31 |
| `0x90` | `SPI_HEARTBEAT_PONG` | `{seq:u16}` | Health response to PING | F60 |

### 3.4 SPI Transaction Flow (Decision COM-2)

**IRQ-driven with polling fallback:**

```
IDLE STATE:
  T-COM polls at 20 Hz (50 ms intervals).
  Each poll: Jetson clocks out 1 byte. If nRF returns 0x00 → no data.
  If nRF returns 0x7E (SOF) → frame incoming, clock out remaining bytes.

IRQ STATE:
  nRF asserts IRQ line when it has data (BLE event, heartbeat response).
  Jetson GPIO ISR sets event flag → T-COM wakes immediately from com_wait_event().
  T-COM reads frame via SPI.

OUTBOUND (Jetson → nRF):
  T-COM writes frame to SPI TX buffer. Clocks out full frame.
  nRF receives via SPI slave interrupt in Zephyr.
```

**Error handling:**
- CRC mismatch on received frame: discard frame, increment `spi_crc_error_count`, log to COM-LOG. No automatic retry (non-safety-critical).
- No response to outbound command within 200 ms: retry once. If second attempt fails: log `SPI_TX_TIMEOUT` event.
- Frame overrun (>257 bytes without EOF): reset SPI state machine, discard buffer, log `SPI_OVERRUN`.
- Consecutive errors ≥5 in 10 s window: log `SPI_DEGRADED` event, back off to 5 Hz polling.

### 3.5 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F07 (GATT) | §3.3 SPI_SET_ADV_DATA, SPI_SEND_NOTIFY | Jetson pushes GATT data to nRF via SPI |
| F60 (heartbeat) | §3.3 SPI_HEARTBEAT_PING/PONG | 5 s interval per COM-HEALTH §9 |
| F61 (3× fail) | §3.4 error handling + §9 | COM-HEALTH escalates after 3 missed PONGs |
| P01 (connect ≤5 s) | §3.3 SPI_BLE_CONNECTED event | nRF manages BLE connection, reports to Jetson |

---

## 4. COM-BLE-CTRL — BLE Control Architecture

### 4.1 nRF52840 Software Stack (Decision COM-3)

**Decision:** Use Zephyr RTOS BLE subsystem — no custom BLE stack.

**Rationale:** Nordic's Zephyr BLE is production-qualified for nRF52840. Custom stack would require 6+ months of development + BLE qualification testing. Zephyr provides: BLE 5.0, LESC pairing, GATT server, connection management, DFU (Device Firmware Update).

**nRF52840 software layers:**

```
┌────────────────────────────────────────────┐
│            NRF-MAIN (app layer)             │
│  State machine: IDLE → ADV → CONNECTED     │
│  SPI slave command dispatcher               │
│  GATT service registration                  │
├────────────────────────────────────────────┤
│         Zephyr BLE Subsystem                │
│  GATT server │ GAP │ SMP (pairing) │ L2CAP │
├────────────────────────────────────────────┤
│         Zephyr RTOS Kernel                  │
│  Threads │ Timers │ Work queues │ Logging   │
├────────────────────────────────────────────┤
│         Nordic SoftDevice Controller        │
│  BLE radio │ Link layer │ HCI              │
├────────────────────────────────────────────┤
│         nRF52840 Hardware                   │
│  2.4 GHz radio │ SPI slave │ GPIO │ Flash  │
└────────────────────────────────────────────┘
```

**nRF52840 resource budget:**

| Resource | Budget | Usage |
|----------|--------|-------|
| Flash (1 MB) | ~256 KB Zephyr + BLE + app | 25% of total |
| RAM (256 KB) | ~64 KB Zephyr kernel + BLE buffers + app | 25% of total |
| CPU (64 MHz Cortex-M4F) | BLE stack ~15% at connected + notification rate | Generous margin |
| Power | ~15 mA × 3.3 V = ~50 mW (BLE connected, advertising) | Per SWR-COM-P08 |

### 4.2 nRF52840 State Machine

```
**nRF52840 hardware watchdog (Zephyr CONFIG_WATCHDOG):**

```c
/* prj.conf — nRF52840 Zephyr watchdog config */
CONFIG_WATCHDOG=y
CONFIG_WDT_NRFX=y

/* main.c — nRF watchdog initialization */
#define NRF_WDG_TIMEOUT_MS  10000  /* 10 s — if main loop hangs, HW reset */

static const struct device *wdt = DEVICE_DT_GET(DT_NODELABEL(wdt0));
static int wdt_channel_id;

void nrf_wdg_init(void) {
    struct wdt_timeout_cfg cfg = {
        .window.min = 0,
        .window.max = NRF_WDG_TIMEOUT_MS,
        .callback = NULL,  /* No callback — hard reset on timeout */
        .flags = WDT_FLAG_RESET_SOC,
    };
    wdt_channel_id = wdt_install_timeout(wdt, &cfg);
    wdt_setup(wdt, WDT_OPT_PAUSE_HALTED_BY_DBG);
}

/* Called in nRF main loop (every BLE connection interval or 100 ms idle) */
void nrf_wdg_feed(void) {
    wdt_feed(wdt, wdt_channel_id);
}
```

On nRF watchdog reset: nRF52840 reboots, re-initializes BLE stack, resumes advertising. Jetson COM-HEALTH detects recovery via resumed SPI PONG responses (§9.1 auto-recovery path).

           ┌──────────┐
  power_on │          │
  ─────────→  BOOT    │
           │ (init)   │
           └────┬─────┘
                │ zephyr_init() + bt_enable() + GATT register + nrf_wdg_init()
                ▼
           ┌──────────┐      SPI: SPI_STOP_ADV
           │ ADVERTISING│◄────────────────────┐
           │ (BLE adv)  │                     │
           └────┬───────┘      timeout 30s    │
                │ BLE_CONNECTED               │
                ▼                             │
           ┌──────────┐      BLE_DISCONNECTED │
           │ CONNECTED │──────────────────────┘
           │ (active)  │
           └────┬───────┘
                │ SPI: SPI_START_OTA
                ▼
           ┌──────────┐      OTA_RESULT(OK)
           │ OTA_MODE  │─────────────────────→ reboot
           │ (DFU)     │
           └────┬──────┘
                │ OTA_RESULT(FAIL)
                ▼
           back to CONNECTED
```

### 4.3 GATT Service Implementation

GATT profile per SRS §4. Implementation on nRF52840:

```c
/* gatt_vsmash.h — GATT service definition (Zephyr BT_GATT macros) */

#define VSMASH_SVC_UUID  BT_UUID_128_ENCODE(0xA0E50001, 0x0001, 0x1000, 0x8000, 0x00805F9B34FB)

/* Characteristic UUIDs: service UUID with suffix replaced */
#define CHR_DEVICE_ID_UUID        0x0001
#define CHR_DEVICE_STATUS_UUID    0x0002
#define CHR_BATTERY_LEVEL_UUID    0x0003
#define CHR_FW_VERSION_UUID       0x0004
#define CHR_AI_MODEL_VERSION_UUID 0x0005
#define CHR_THERMAL_STATE_UUID    0x0006
#define CHR_LAST_ENGAGEMENT_UUID  0x0010
#define CHR_SESSION_STATS_UUID    0x0011
#define CHR_LOG_TRANSFER_UUID     0x0020
#define CHR_FW_UPDATE_CTRL_UUID   0x0030
#define CHR_FW_UPDATE_DATA_UUID   0x0031

/* IRONMESH protocol versioning (resolves SRS FLAG-12) */
#define CHR_PROTO_VERSION_UUID    0x00FF
#define PROTO_VERSION_CURRENT     0x0001  /* Placeholder v1 — update when IRONMESH API finalized */
```

**Characteristic data flow:**

| Characteristic | Data Source | Update Trigger | Flow |
|---------------|------------|----------------|------|
| C01 Device ID | Flash (factory-programmed) | Boot | nRF reads from flash, serves statically |
| C02 Device Status | `fw_get_fsm_state()` | On change | Jetson → SPI_SET_ADV_DATA → nRF → BLE notify |
| C03 Battery Level | `fw_get_battery_soc()` | Every 60 s or on change ≥5% | Jetson → SPI_SET_ADV_DATA → nRF → BLE notify |
| C04 FW Version | Flash (embedded in firmware) | Boot | nRF reads from flash, serves statically |
| C05 AI Model Version | Jetson → SPI at boot | Boot | Jetson sends AI model version string via SPI |
| C06 Thermal State | `fw_get_thermal_state()` | On change | Jetson → SPI_SET_ADV_DATA → nRF → BLE notify |
| C10 Last Engagement | COM-DATA | On engagement complete | Jetson → SPI_SEND_NOTIFY → nRF → BLE notify |
| C11 Session Stats | COM-DATA counters | On read request | nRF → SPI request → Jetson computes → SPI response |
| C20 Log Transfer | COM-DATA | On read/indicate request | Paginated: nRF requests page → Jetson reads → SPI → BLE indicate |
| C30 FW Update Ctrl | BLE central (depot tool) | Write from central | nRF → SPI_DATA_RECEIVED → Jetson COM-UPDATE |
| C31 FW Update Data | BLE central (depot tool) | Write-no-resp from central | nRF → SPI_DATA_RECEIVED → Jetson COM-UPDATE |

### 4.4 BLE Pairing Security (SWR-COM-F05)

**LESC (LE Secure Connections) implementation:**

```c
/* nrf_security.c — pairing configuration */

static const struct bt_conn_auth_cb auth_callbacks = {
    .passkey_display = on_passkey_display,   /* Display 6-digit code on IRONMESH tool */
    .passkey_confirm = on_passkey_confirm,   /* Numeric comparison mode */
    .cancel          = on_auth_cancel,
};

/* Reject just-works pairing (SWR-COM-F05) */
static const struct bt_conn_auth_info_cb auth_info_cb = {
    .pairing_complete = on_pairing_complete,
    .pairing_failed   = on_pairing_failed,
};

/* At init: */
bt_conn_auth_cb_register(&auth_callbacks);
/* Set security level to LESC — rejects legacy pairing */
/* bt_conn_set_security(conn, BT_SECURITY_L4); */
```

**Pairing mode:** Numeric comparison (6-digit code displayed on IRONMESH base station or depot tool). Passkey entry as fallback. Just-works rejected per SWR-COM-F05.

**Bond storage:** Zephyr settings subsystem stores bond info in nRF52840 internal flash. Max 4 bonded devices.

### 4.5 OPSEC Data Filter (SWR-COM-F09)

All data sent via BLE passes through a whitelist filter on the Jetson side (COM-BLE-CTRL module) before being packaged into SPI commands:

```c
/* com_ble_ctrl.c — OPSEC filter */

typedef enum {
    BLE_DATA_ALLOWED,
    BLE_DATA_BLOCKED,
} ble_data_filter_t;

static ble_data_filter_t ble_opsec_check(uint8_t char_id, const void *data, size_t len) {
    /* Blocked data types — never sent via BLE regardless of characteristic */
    /* 1. Raw image/video data (>1 KB or image magic bytes) */
    /* 2. GPS coordinates (latitude/longitude struct pattern) */
    /* 3. Bore-sight calibration offsets (cal partition data) */
    /* 4. Encryption keys or security credentials */

    /* Only allow data matching GATT profile schemas (SRS §4.3) */
    switch (char_id) {
        case CHR_LAST_ENGAGEMENT_UUID:
            return (len == sizeof(engagement_record_t)) ? BLE_DATA_ALLOWED : BLE_DATA_BLOCKED;
        case CHR_SESSION_STATS_UUID:
            return (len == sizeof(session_stats_t)) ? BLE_DATA_ALLOWED : BLE_DATA_BLOCKED;
        /* ... other characteristics with exact size validation ... */
        default:
            return BLE_DATA_BLOCKED;  /* Unknown characteristic — block */
    }
}
```

### 4.6 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F01 (BLE 5.0 on nRF) | §4.1 | Zephyr BLE 5.0 stack on nRF52840 |
| F02 (optional operation) | §2.2 T-COM | COM thread failure → system continues without BLE |
| F03 (auto-connect ≤30 m) | §4.2 ADVERTISING state | Zephyr BLE advertising, connection management |
| F04 (disconnect handling) | §4.2 state machine | CONNECTED → ADVERTISING on disconnect; Jetson buffers via COM-DATA |
| F05 (LESC pairing) | §4.4 | Zephyr `BT_SECURITY_L4`, just-works rejected |
| F06 (2 connections) | §4.1 | Zephyr CONFIG_BT_MAX_CONN=2 |
| F07 (GATT profile) | §4.3 | All 11 characteristics implemented per SRS §4 |
| F08 (≥10 kB/s) | §4.1 resource budget | BLE 5.0 2M PHY → theoretical 1.4 Mbps, practical ≥50 kB/s |
| F09 (no images/GPS/classified) | §4.5 | OPSEC whitelist filter on Jetson side |

---

## 5. COM-DATA — Engagement Data Logger Architecture

### 5.1 Storage Design (Decision COM-4)

**Decision:** Memory-mapped circular buffer files on eMMC ext4 partition (P4: data, 512 MB).

**Rationale:** Simple, robust, no database dependency. `mmap()` provides zero-copy read access for log downloads. Circular buffer with fixed record sizes gives O(1) write and O(1) random read. CRC-32 per record detects corruption without requiring filesystem journaling for data integrity.

**Storage layout (P4: data partition, 512 MB total):**

```
/mnt/data/
├── engagement.bin      ← Circular buffer: 1024 × 64 B = 65,536 B (64 KB)
├── engagement.meta     ← Header: {magic, version, head, tail, count, crc32}
├── events.bin          ← Circular buffer: 10240 × 32 B = 327,680 B (320 KB)
├── events.meta         ← Header: {magic, version, head, tail, count, crc32}
├── session.dat         ← Session statistics (24 B, overwritten per session)
└── fw_update/          ← Staging area for firmware images (≤128 MB)
    ├── staging.bin     ← Current update image being transferred
    └── staging.meta    ← {image_type, expected_size, received_bytes, sig, crc32}
```

**Total persistent storage:** ~384 KB for logs + ~128 MB staging = **~129 MB of 512 MB budget**.

### 5.2 Circular Buffer Engine

```c
/* com_data.h — circular buffer types */

#define ENGAGEMENT_CAPACITY   1024  /* ≥1000 per SWR-COM-F11, rounded to power of 2 */
#define ENGAGEMENT_RECORD_SIZE  64  /* Per SRS §5.1 */
#define EVENT_CAPACITY       10240  /* ≥10000 per SWR-COM-F52, rounded up */
#define EVENT_RECORD_SIZE       32  /* Per design */

typedef struct __attribute__((packed)) {
    uint32_t magic;           /* 0x434F4D44 = "COMD" */
    uint16_t version;         /* Buffer format version (currently 1) */
    uint16_t capacity;        /* Max records in buffer */
    uint32_t head;            /* Next write position (0-based index) */
    uint32_t count;           /* Total records written (for overwrite detection) */
    uint32_t crc32;           /* CRC-32 of this header (fields 0–13) */
} circular_buffer_meta_t;     /* 18 bytes */

/* Open buffer — mmap file, validate meta, recover if needed */
int com_data_open(const char *bin_path, const char *meta_path,
                  uint16_t capacity, uint16_t record_size,
                  circular_buffer_t *buf);

/* Write one record — returns 0 on success, -EIO on write failure */
int com_data_write(circular_buffer_t *buf, const void *record);

/* Read record by index (0 = oldest available) — returns 0 or -ENOENT */
int com_data_read(circular_buffer_t *buf, uint32_t index, void *record);

/* Get available record count */
uint32_t com_data_count(const circular_buffer_t *buf);

/* Flush pending writes to eMMC (called from T-COM event loop) */
int com_data_flush(void);
```

### 5.3 Engagement Record Write Path

```
SW-AI coordinator                    T-COM thread
     │                                    │
     │  engagement_event(record)          │
     ├───────────────────────────────────→│  (lock-free SPSC queue)
     │                                    │
     │                                    │  com_data_write(&engagement_buf, record)
     │                                    │  ├─ compute CRC-32 of record bytes 0–59
     │                                    │  ├─ write record at buf[head % capacity]
     │                                    │  ├─ head = (head + 1) % capacity
     │                                    │  ├─ count++
     │                                    │  └─ update meta header CRC
     │                                    │
     │                                    │  com_data_flush()
     │                                    │  ├─ msync(engagement.bin, MS_ASYNC)
     │                                    │  └─ write engagement.meta (fsync)
     │                                    │
     │                                    │  if (ble_connected)
     │                                    │    spi_send_notify(CHR_LAST_ENGAGEMENT, record.core)
```

**Write latency:** ≤5 ms per SWR-COM-P07. `mmap()` write is a memory copy (~1 µs for 64 B). `msync(MS_ASYNC)` is non-blocking — kernel flushes to eMMC asynchronously. Actual latency is dominated by the SPSC queue dequeue, not I/O.

**Power-loss safety (SWR-COM-F53):** Meta header is updated after data write. On power loss:
- If data written but meta not updated: one record is "phantom" (written but not indexed). On next boot, `com_data_open()` scans the last record position and validates CRC. If CRC valid → accept. If CRC invalid → discard (≤1 event lost per SWR-COM-F53).
- If meta written but data corrupted: CRC-32 in data record catches this on read (SWR-COM-F15).

### 5.4 Engagement Record Format (per SRS §5.1)

```c
/* com_data_types.h — matches SRS §5.1 exactly */

typedef struct __attribute__((packed)) {
    /* Core (same as BLE engagement_record_t, 15 bytes) */
    uint32_t timestamp_s;           /* Monotonic seconds since boot */
    uint8_t  target_class;          /* 0=rotor, 1=fixed-wing, 2=bird, 3=unknown */
    uint8_t  confidence_pct;        /* 0–100 */
    uint16_t range_est_dm;          /* Estimated range in decimeters (0–3000) */
    int16_t  lead_angle_01mrad;     /* Lead angle in 0.1 mrad units (signed) */
    uint16_t duration_ms;           /* Tracking duration in ms */
    uint8_t  outcome;               /* 0=lost_track, 1=shot_fired, 2=manual_disengage */
    uint8_t  thermal_state;         /* thermal_state_t at engagement time */
    uint8_t  battery_soc;           /* SoC% at engagement time */
    /* Extended (stored locally, not sent via BLE) */
    uint16_t max_angular_vel_01dps; /* Peak angular velocity in 0.1 deg/s */
    uint16_t avg_confidence_pct10;  /* Average confidence × 10 (0–1000) */
    uint8_t  frames_tracked;        /* Number of frames target was tracked */
    uint8_t  reacquisitions;        /* Number of post-shot reacquisitions */
    int16_t  bore_offset_01mrad_x;  /* Bore-sight X offset at time of engagement */
    int16_t  bore_offset_01mrad_y;  /* Bore-sight Y offset */
    uint32_t crc32;                 /* CRC-32 of bytes 0–53 */
    uint8_t  reserved[6];           /* Pad to 64 bytes */
} engagement_log_record_t;          /* Total: 64 bytes */

_Static_assert(sizeof(engagement_log_record_t) == 64, "Record must be exactly 64 bytes");
```

### 5.5 System Event Record Format

```c
/* com_log_types.h — system event log record */

typedef enum {
    EVT_BOOT              = 0x01,
    EVT_SHUTDOWN          = 0x02,
    EVT_FAULT_ENTER       = 0x10,  /* +fault_type in param */
    EVT_FAULT_CLEAR       = 0x11,
    EVT_THERMAL           = 0x20,  /* +thermal_state in param */
    EVT_BLE_CONNECT       = 0x30,
    EVT_BLE_DISCONNECT    = 0x31,
    EVT_FW_UPDATE         = 0x40,  /* +result in param */
    EVT_DIAG_ACCESS       = 0x50,  /* +level in param */
    EVT_CONFIG_CHANGE     = 0x60,  /* +param_id in param */
    EVT_NRF_UNRESPONSIVE  = 0x70,
    EVT_NRF_RECOVERED     = 0x71,
    EVT_SPI_DEGRADED      = 0x72,
} event_type_t;

typedef struct __attribute__((packed)) {
    uint32_t timestamp_s;       /* [0–3]   Monotonic seconds since boot */
    uint8_t  event_type;        /* [4]     event_type_t */
    uint8_t  param_hi;          /* [5]     Event-specific parameter (high byte) */
    uint8_t  param_lo;          /* [6]     Event-specific parameter (low byte) */
    uint8_t  source_module;     /* [7]     0=FW, 1=AI, 2=BAL, 3=COM */
    uint32_t uptime_total_s;    /* [8–11]  Cumulative lifetime uptime */
    uint8_t  severity;          /* [12]    0=INFO, 1=WARN, 2=ERROR, 3=CRITICAL */
    uint8_t  reserved[15];      /* [13–27] Future expansion */
    uint32_t crc32;             /* [28–31] CRC-32 of bytes 0–27 */
} system_event_record_t;        /* Total: 32 bytes */

_Static_assert(sizeof(system_event_record_t) == 32, "Event must be exactly 32 bytes");
```

**Field layout (32 bytes):**

| Offset | Size | Field | Description |
|--------|------|-------|-------------|
| 0 | 4 | `timestamp_s` | Monotonic seconds since boot |
| 4 | 1 | `event_type` | event_type_t enum |
| 5 | 1 | `param_hi` | Event-specific high byte |
| 6 | 1 | `param_lo` | Event-specific low byte |
| 7 | 1 | `source_module` | 0=FW, 1=AI, 2=BAL, 3=COM |
| 8 | 4 | `uptime_total_s` | Cumulative lifetime uptime |
| 12 | 1 | `severity` | 0=INFO, 1=WARN, 2=ERROR, 3=CRITICAL |
| 13 | 15 | `reserved` | Future expansion |
| 28 | 4 | `crc32` | CRC-32 of bytes 0–27 |

### 5.6 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F10 (log engagements) | §5.2, §5.3 | Circular buffer write from AI engagement event |
| F11 (≥1,000 records) | §5.2 | ENGAGEMENT_CAPACITY = 1024 |
| F12 (system events) | §5.5 | event_type_t covers all specified event types |
| F13 (no images) | §5.4 | 64-byte fixed-size record — physically cannot hold images |
| F14 (≤512 MB) | §5.1 | ~129 MB used of 512 MB budget |
| F15 (CRC-32 + skip corrupt) | §5.2, §5.4 | CRC-32 per record, reader skips on CRC mismatch |
| F16 (monotonic timestamp) | §5.4 | `timestamp_s` from `clock_gettime(CLOCK_MONOTONIC)` |
| F50 (system event log) | §5.5 | Separate events.bin circular buffer |
| F51 (event types) | §5.5 | event_type_t enum matches SRS §3.6 |
| F52 (≥10,000 events) | §5.2 | EVENT_CAPACITY = 10240 |
| F53 (power-loss ≤1 lost) | §5.3 | mmap + meta update order + CRC validation |

---

## 6. COM-DIAG — Diagnostic Protocol Architecture

### 6.1 Transport Layer (Decision COM-7)

**Decision:** Dual-mode protocol — NMEA-like ASCII for human-readable commands (L0/L1) + binary framing for bulk data transfers (L1 log dump, L2 authentication/update).

**Rationale:** ASCII mode allows depot technicians to interact with a basic serial terminal (PuTTY, minicom) without specialized software for quick checks. Binary mode provides efficient bulk transfer and cryptographic authentication. The protocol auto-detects mode by first byte: `$` = ASCII, `0xAA` = binary.

**USB-C CDC ACM configuration:**

| Parameter | Value |
|-----------|-------|
| USB class | CDC ACM (virtual serial port) |
| Baud rate | 115200 (virtual — actual USB 2.0 FS speed) |
| Data bits | 8 |
| Parity | None |
| Stop bits | 1 |
| HAL function | `hal_usb_read()` / `hal_usb_write()` from [FW-SAD] §6.2 |

### 6.2 ASCII Command Format

```
REQUEST:  $CMD,arg1,arg2,...*XX\r\n
RESPONSE: $CMD,field1,field2,...*XX\r\n

XX = XOR checksum of all characters between $ and * (exclusive), as 2-char hex.
```

**Example:**
```
TX: $PING*3F\r\n
RX: $PONG,VSMASH-M-00001,v1.2.0,3600*7A\r\n
```

### 6.3 Binary Frame Format

```
┌──────┬───────┬───────┬──────┬───────────┬──────────┬──────────┐
│ SYNC │ LEN_H │ LEN_L │ CMD  │  PAYLOAD  │ CRC16_H  │ CRC16_L  │
│ 0xAA │  1B   │  1B   │ 1B   │ 0–65531 B │   1B     │   1B     │
└──────┴───────┴───────┴──────┴───────────┴──────────┴──────────┘
```

| Field | Size | Description |
|-------|------|-------------|
| SYNC | 1 | `0xAA` — distinguishes binary from ASCII (`$` = 0x24) |
| LEN | 2 | Payload length (big-endian), max 65531 |
| CMD | 1 | Binary command ID |
| PAYLOAD | Variable | Command-specific |
| CRC-16 | 2 | CRC-16/CCITT over LEN+CMD+PAYLOAD |

### 6.4 Command Implementation

**ASCII commands (L0/L1):**

| Command | Access | Implementation | SWR |
|---------|--------|----------------|-----|
| `$PING` | L0 | Return device ID + FW version + uptime from static/FW-API | F20 |
| `$STATUS` | L1 | Query `fw_get_fsm_state()`, `fw_get_thermal_state()`, `fw_get_power_state()`, `fw_get_battery_soc()`, BLE status from COM-HEALTH, sensor from `hal_self_test()` | F21 |
| `$FAULTS,N` | L1 | Read last N events with `event_type ∈ {FAULT_ENTER, FAULT_CLEAR}` from COM-LOG | F21 |
| `$CALIB` | L1 | Read bore-sight offset from cal partition (P3) | F21 |
| `$SELFTEST` | L1 | Call `hal_self_test()`, format bitmask + per-sensor status | F24 |

**Binary commands (L1/L2):**

| CMD ID | Name | Access | Implementation | SWR |
|--------|------|--------|----------------|-----|
| `0x01` | `LOG_DUMP` | L1 | Paginated read from COM-DATA engagement or event buffer | F23 |
| `0x10` | `AUTH_L2` | L1→L2 | Ed25519 challenge-response (§7.2) | F40 |
| `0x20` | `FW_START` | L2 | Begin firmware update (§8) | F30, F32 |
| `0x21` | `FW_CHUNK` | L2 | Transfer firmware chunk (4 KB) | F30 |
| `0x22` | `FW_COMMIT` | L2 | Verify + commit firmware image | F30 |
| `0x30` | `CFG_WRITE` | L2 | Write configuration parameter | — |
| `0x31` | `KEY_ROTATE` | L2 | Rotate firmware signing public key | F42 |

### 6.5 Access Level Enforcement

```c
/* com_sec.h — access level state */

typedef enum {
    ACCESS_L0 = 0,  /* Unauthenticated — read-only non-sensitive */
    ACCESS_L1 = 1,  /* Depot technician — shared secret authenticated */
    ACCESS_L2 = 2,  /* Firmware engineer — Ed25519 challenge-response */
} access_level_t;

/* Session state — reset on USB-C disconnect */
typedef struct {
    access_level_t current_level;
    uint8_t        tool_id[16];     /* Depot tool identifier (from L1 auth) */
    uint64_t       auth_timestamp;  /* When authentication was granted */
    uint32_t       auth_timeout_s;  /* Session timeout: 3600 s (1 hour) */
    uint8_t        l2_fail_count;   /* L2 auth failures this session (max 5) */
} diag_session_t;

#define L2_AUTH_MAX_ATTEMPTS  5  /* Lock out L2 after 5 failed attempts per session */
```

**Authentication flow:**

```
USB-C CONNECT → L0 (unauthenticated)
    │
    ├─ L1 auth: depot tool sends $AUTH,{shared_secret_hash}*XX
    │  COM-SEC verifies HMAC-SHA256(challenge, shared_secret)
    │  → L1 granted (or rejected + logged)
    │
    ├─ L2 auth: depot tool sends binary AUTH_L2 command
    │  if (session.l2_fail_count >= L2_AUTH_MAX_ATTEMPTS)
    │    → reject immediately: $ERR,L2_LOCKED*XX (no more attempts this session)
    │  COM-SEC sends 32-byte random challenge
    │  Depot tool signs challenge with Ed25519 private key
    │  COM-SEC verifies signature with stored public key (cal partition P3)
    │  → L2 granted (l2_fail_count reset to 0)
    │  → L2 rejected (l2_fail_count++, logged to COM-LOG)
    │
    └─ USB-C DISCONNECT → reset to L0, log DIAG_ACCESS event
```

**Operational mode lockout (SWR-COM-F22):** COM-DIAG checks `fw_get_fsm_state()` at session start. If FSM state ≠ `FSM_INIT` (i.e., device is in operational mode), diagnostic commands beyond L0 PING are rejected with `$ERR,OPERATIONAL_MODE*XX`. Device must be power-cycled with depot tool connected to enter diagnostic mode.

### 6.6 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F20 (USB-C CDC ACM) | §6.1 | HAL USB-C virtual serial port |
| F21 (all commands) | §6.4 | 5 ASCII + 7 binary commands |
| F22 (operational lockout) | §6.5 | FSM state check, reject if ≠ INIT |
| F23 (response timing) | §6.4 | ASCII ≤500 ms (FW-API queries), binary log dump ≤5 s initiation |
| F24 (sensor test) | §6.4 | `$SELFTEST` → `hal_self_test()` |
| F40 (3 access levels) | §6.5 | L0/L1/L2 with escalation |
| F43 (audit logging) | §6.5 | DIAG_ACCESS event on all L2 attempts |

---

## 7. COM-SEC — Security Architecture

### 7.1 Key Management (Decision COM-6)

**Decision:** Ed25519 public key stored in read-only eMMC partition (P3: cal). Private keys stored only on authorized depot tools (never on V-SMASH device).

**Rationale:** Ed25519 provides 128-bit security with small keys (32-byte public, 64-byte private) and fast verification (~50 µs on Cortex-A78). No need for full PKI infrastructure — V-SMASH uses a single signing authority (Workshop X). Key rotation via signed key-update image prevents unauthorized key changes.

**Key storage layout (P3: cal partition, 4 KB, read-only mount):**

| Offset | Size | Content | Protection |
|--------|------|---------|------------|
| 0x0000 | 32 | Bore-sight calibration X/Y (from BAL-CALIB) | Read-only mount |
| 0x0020 | 32 | Reserved (thermal calibration) | Read-only mount |
| 0x0100 | 32 | Ed25519 firmware signing public key | Read-only mount |
| 0x0120 | 32 | Ed25519 key-rotation signing public key | Read-only mount |
| 0x0140 | 4 | Key version counter (monotonic) | Read-only mount |
| 0x0144 | 32 | L1 shared secret (HMAC key, 256-bit) | Read-only mount |
| 0x0200 | 256 | Device identity certificate (factory-programmed) | Read-only mount |
| 0x0F00 | 4 | Partition CRC-32 | Read-only mount |

**Read-only enforcement:** P3 is mounted as `ext4,ro,noexec`. Remount to `rw` requires L2 authentication + signed remount command through COM-UPDATE path only.

### 7.2 Ed25519 Authentication Flow (SWR-COM-F41)

```
DEPOT TOOL                               V-SMASH DEVICE
    │                                          │
    ├─ AUTH_L2 request ───────────────────────→│
    │                                          │ Generate 32-byte random challenge
    │                                          │ (from /dev/urandom or Jetson HW RNG)
    │←── AUTH_CHALLENGE(nonce[32]) ────────────┤
    │                                          │
    │ Sign: sig = Ed25519_sign(nonce, priv_key)│
    │                                          │
    ├─ AUTH_RESPONSE(sig[64]) ────────────────→│
    │                                          │ pubkey = read_cal_partition(0x0100)
    │                                          │ result = Ed25519_verify(nonce, sig, pubkey)
    │                                          │
    │←── AUTH_OK ─── (if valid) ──────────────┤ Set session to L2
    │←── AUTH_FAIL ── (if invalid) ────────────┤ Log failed attempt to COM-LOG
    │                                          │
```

**Crypto library:** TweetNaCl (compact Ed25519 implementation, ~800 lines C, no external dependencies, public domain). Alternatively: libsodium if already available on Jetson rootfs.

### 7.3 Firmware Signature Verification (SWR-COM-F32)

Every firmware image (Jetson FW, nRF52840 FW, AI model) is signed:

```
┌──────────────────────────────────┐
│        FIRMWARE IMAGE             │
│  ┌────────────────────────────┐  │
│  │ Header (64 bytes)          │  │
│  │  magic: "VSMF"             │  │
│  │  image_type: u8            │  │
│  │  version_major: u16        │  │
│  │  version_minor: u16        │  │
│  │  version_patch: u16        │  │
│  │  image_size: u32           │  │
│  │  crc32: u32                │  │
│  │  reserved: 43 bytes        │  │
│  ├────────────────────────────┤  │
│  │ Payload (variable)         │  │
│  │  Actual firmware binary    │  │
│  ├────────────────────────────┤  │
│  │ Signature (64 bytes)       │  │
│  │  Ed25519 signature of      │  │
│  │  header + payload          │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

**Verification sequence:**
1. Read header — check magic, image_type, version
2. Version rollback check: `image.version > current_version` (SWR-COM-F33). Version counter stored in persistent storage (not OTP — OTP fuses are limited; use signed monotonic counter in P3 partition instead, protected by read-only mount + L2 auth requirement).
3. Read full payload, compute CRC-32, compare with header CRC
4. Read 64-byte Ed25519 signature
5. `Ed25519_verify(header || payload, signature, pubkey_from_P3)`
6. If any check fails → reject with specific error code, log to COM-LOG

### 7.4 V-X Export Encryption (SWR-COM-F45)

For V-X (export variant), BLE data additionally encrypted at application layer:

```c
/* com_sec_export.h — V-X only, compiled when VARIANT_VX defined */

#ifdef VARIANT_VX

#define AES_GCM_KEY_SIZE   32  /* AES-256 */
#define AES_GCM_IV_SIZE    12
#define AES_GCM_TAG_SIZE   16

/* Application-layer encryption over BLE transport */
typedef struct __attribute__((packed)) {
    uint8_t  iv[AES_GCM_IV_SIZE];     /* 12-byte nonce (counter-based) */
    uint16_t payload_len;              /* Plaintext length */
    uint8_t  ciphertext[];             /* AES-256-GCM encrypted GATT data */
    /* Followed by 16-byte GCM authentication tag */
} ble_encrypted_payload_t;

/* Key provisioned at depot via COM-DIAG L2 command */
/* Stored in P3 cal partition at offset 0x0300 (V-X only) */
/* Rotated per deployment via signed key-update */

#endif /* VARIANT_VX */
```

**Double encryption:** BLE link-layer AES-CCM (from LESC pairing) + application-layer AES-256-GCM. Defense-in-depth for export compliance.

### 7.5 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F40 (3 access levels) | §6.5, §7.2 | L0 unauthenticated, L1 HMAC, L2 Ed25519 |
| F41 (Ed25519 asymmetric) | §7.2 | Challenge-response, TweetNaCl library |
| F42 (read-only pubkey partition) | §7.1 | P3 cal partition, ro mount, signed rotation |
| F43 (audit logging) | §7.2 | All L2 attempts logged to COM-LOG |
| F44 (BLE AES-CCM) | §4.4 | LESC pairing enables link-layer encryption |
| F45 (V-X AES-256-GCM) | §7.4 | Application-layer encryption, variant-gated |
| S03 (unsigned FW rejected) | §7.3 | Ed25519 signature verification before flash |

---

## 8. COM-UPDATE — Firmware Update Architecture

### 8.1 A/B Partition Scheme (Decision COM-5, per SRS §7.2)

**eMMC partition layout for firmware:**

| Partition | Name | Size | Content | Mount |
|-----------|------|------|---------|-------|
| P1 | rootfs | ~4 GB | Linux rootfs, Jetson BSP | ro |
| P2a | fw_a | 64 MB | Firmware image A | Bootloader-managed |
| P2b | fw_b | 64 MB | Firmware image B | Bootloader-managed |
| P3 | cal | 4 KB | Calibration + keys (§7.1) | ro |
| P4 | data | 512 MB | COM-DATA logs + staging | rw |
| P5 | boot_sel | 4 KB | Boot selector metadata | Bootloader-managed |

**Boot selector (P5) structure:**

```c
typedef struct __attribute__((packed)) {
    uint32_t magic;           /* 0x424F4F54 = "BOOT" */
    uint8_t  active_slot;     /* 0 = A, 1 = B */
    uint8_t  try_slot;        /* 0xFF = no pending try; 0/1 = try this slot once */
    uint8_t  try_count;       /* Remaining try attempts (starts at 3, decrements) */
    uint8_t  reserved;
    uint32_t slot_a_version;  /* Firmware version in slot A */
    uint32_t slot_b_version;  /* Firmware version in slot B */
    uint32_t crc32;           /* CRC-32 of bytes 0–15 */
} boot_selector_t;            /* 20 bytes */
```

### 8.2 Update Flow (SWR-COM-F30, F34)

```
                     COM-UPDATE STATE MACHINE

    ┌───────┐   FW_START (L2 auth'd)   ┌───────────┐
    │ IDLE  │──────────────────────────→│ RECEIVING  │
    └───────┘                           └─────┬─────┘
        ▲                                     │
        │ timeout (5 min no chunk)            │ FW_CHUNK × N
        │ or error                            │ (write to staging.bin)
        │                                     ▼
        │                               ┌───────────┐
        │                               │ VERIFYING  │
        │                               └─────┬─────┘
        │                                     │ CRC + Ed25519 verify
        │                                     ▼
        │   verify fail                 ┌───────────┐
        ├───────────────────────────────│ COMMITTING │
        │                               └─────┬─────┘
        │                                     │ write to inactive slot
        │                                     │ update boot_sel (try_slot)
        │                                     ▼
        │                               ┌───────────┐
        │                               │ REBOOTING  │──→ reboot
        │                               └───────────┘
        │
        │     BOOT (after update)
        │     ├─ if try_slot set: boot from try_slot
        │     │  ├─ if boots OK (watchdog not triggered):
        │     │  │  mark try_slot as new active_slot
        │     │  │  try_slot = 0xFF, try_count = 0
        │     │  │  └─ IDLE (new firmware active)
        │     │  └─ if boot fails (watchdog triggers in 30 s):
        │     │     try_count--
        │     │     if try_count > 0: retry
        │     │     if try_count == 0: revert to active_slot
        │     │     └─ IDLE (old firmware active, log FW_UPDATE(REVERT))
        └─────┘
```

**Atomic update guarantee (SWR-COM-F34):**
1. New image written to staging area (P4: data/fw_update/staging.bin)
2. Full image verified: CRC-32 + Ed25519 signature
3. Image copied from staging to inactive slot (P2a or P2b)
4. Boot selector updated: `try_slot = inactive_slot, try_count = 3`
5. Reboot
6. Hardware watchdog (30 s timeout) — if new firmware doesn't call `fw_watchdog_heartbeat()` within 30 s, watchdog resets device
7. On watchdog reset: bootloader reads `try_count`, decrements, retries or reverts

**Critical safety: bootloader reads boot_sel before Linux kernel boots.** Boot selector logic is in Jetson's cboot (U-Boot based) — immutable in normal operation.

### 8.3 Image Types (SWR-COM-F37)

| Image Type | ID | Slot | Update Method | Max Size |
|------------|-----|------|--------------|----------|
| Jetson firmware | `0x01` | P2a/P2b (A/B) | USB-C primary, BLE OTA secondary | 64 MB |
| nRF52840 firmware | `0x02` | nRF internal flash (via SPI) | USB-C → Jetson → SPI → nRF DFU | 256 KB |
| AI model binary | `0x03` | P4 data partition (model/) | USB-C primary, BLE OTA secondary | 64 MB |

**nRF52840 update path:** Jetson receives nRF firmware via USB-C (or BLE), verifies Ed25519 signature, then forwards to nRF52840 via SPI using `SPI_START_OTA` / `SPI_OTA_CHUNK` / `SPI_OTA_COMMIT` commands (§3.3). nRF52840 uses Zephyr MCUboot for its own A/B update.

### 8.4 Version Rollback Protection (SWR-COM-F33)

```c
/* com_update.c — rollback check */

static int check_rollback(const fw_image_header_t *hdr) {
    boot_selector_t boot_sel;
    read_boot_selector(&boot_sel);

    uint32_t current_version;
    if (boot_sel.active_slot == 0)
        current_version = boot_sel.slot_a_version;
    else
        current_version = boot_sel.slot_b_version;

    /* Version encoding: major(16) | minor(8) | patch(8) */
    uint32_t new_version = (hdr->version_major << 16)
                         | (hdr->version_minor << 8)
                         | hdr->version_patch;

    if (new_version <= current_version) {
        com_log_event(EVT_FW_UPDATE, 0, FW_REJECT_ROLLBACK);
        return -EACCES;  /* Rollback rejected */
    }

    return 0;  /* Version OK */
}
```

### 8.5 BLE OTA Update (SWR-COM-F31)

BLE OTA follows the same authentication + verification pipeline as USB-C, but chunks flow through BLE → nRF52840 → SPI → Jetson:

1. Depot tool connects via BLE, writes `FW_UPDATE_CTRL` characteristic (C30) with start command
2. nRF52840 forwards via `SPI_DATA_RECEIVED` to Jetson
3. Jetson initiates L2 authentication via BLE characteristic exchange
4. After auth: depot tool writes firmware chunks to `FW_UPDATE_DATA` characteristic (C31)
5. nRF52840 forwards each chunk via SPI to Jetson
6. Jetson writes to staging, same verification + commit as USB-C path

**BLE OTA throughput:** ~10 kB/s (SWR-COM-F08). For a 10 MB image: ~1,000 s (~17 min). USB-C: ~60 s. BLE OTA is a convenience backup, not primary.

### 8.6 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F30 (USB-C update) | §8.2 | FW_START/FW_CHUNK/FW_COMMIT via USB-C binary protocol |
| F31 (BLE OTA) | §8.5 | Same pipeline via BLE GATT → SPI → Jetson |
| F32 (signature verify) | §7.3 | Ed25519 verification before flash |
| F33 (rollback protection) | §8.4 | Version monotonic check |
| F34 (atomic update) | §8.2 | A/B partition + boot selector + hardware watchdog |
| F35 (operational lockout) | §6.5 | FSM state check — update only in INIT mode |
| F36 (progress reporting) | §8.2 | FW_CHUNK response includes progress % |
| F37 (3 image types) | §8.3 | Jetson FW, nRF FW, AI model |
| S02 (no brick) | §8.2 | A/B partition + watchdog revert |

---

## 9. COM-HEALTH — Co-Processor Health Monitor

### 9.1 SPI Heartbeat (SWR-COM-F60)

```c
/* com_health.c — nRF52840 health monitoring */

#define HEARTBEAT_INTERVAL_MS  5000  /* 5 s per SWR-COM-F60 */
#define HEARTBEAT_TIMEOUT_MS   1000  /* 1 s response window */
#define HEARTBEAT_FAIL_LIMIT      3  /* 3 consecutive failures per SWR-COM-F61 */

typedef struct {
    uint16_t seq;                    /* Heartbeat sequence number */
    uint16_t consecutive_failures;   /* Count of missed PONGs */
    uint64_t last_pong_timestamp;    /* Last successful PONG time */
    bool     fault_reported;         /* COM_FAULT already reported to FSM */
} nrf_health_state_t;

static nrf_health_state_t nrf_health;

void com_health_tick(void) {
    uint64_t now_ms = monotonic_ms();

    /* Check if heartbeat interval has elapsed */
    if (now_ms - nrf_health.last_ping_time < HEARTBEAT_INTERVAL_MS)
        return;

    /* Send PING */
    spi_send_heartbeat_ping(nrf_health.seq);
    nrf_health.last_ping_time = now_ms;

    /* Check for PONG from previous PING */
    if (!nrf_health.pong_received) {
        nrf_health.consecutive_failures++;

        if (nrf_health.consecutive_failures >= HEARTBEAT_FAIL_LIMIT
            && !nrf_health.fault_reported) {
            /* 3 consecutive failures (15 s unresponsive) — SWR-COM-F61 */
            fw_report_fault(FAULT_COM);
            com_log_event(EVT_NRF_UNRESPONSIVE, 0, 0);
            nrf_health.fault_reported = true;
            spi_disable();  /* Cease SPI transmissions per SWR-COM-F61(c) */
        }
    } else {
        /* PONG received — check for recovery from fault */
        if (nrf_health.fault_reported) {
            /* nRF52840 recovered — SWR-COM-F62 */
            com_log_event(EVT_NRF_RECOVERED, 0, 0);
            fw_report_fault(FAULT_COM);  /* FAULT_COM with clear semantics */
            nrf_health.fault_reported = false;
            spi_enable();  /* Resume SPI */
        }
        nrf_health.consecutive_failures = 0;
    }

    nrf_health.pong_received = false;
    nrf_health.seq++;
}
```

**Fault clear mechanism:** The [FW-SAD] §7.2 API provides only `fw_report_fault(fault_type_t type)` for setting faults. Fault clearing is handled by the FW Supervisor (T3): when the condition that caused the fault is no longer present, the application module signals recovery by **not reporting the fault** for a configurable debounce period (default 5 s). T3 polls registered fault sources at 10 Hz. For COM: COM-HEALTH stops calling `fw_report_fault(FAULT_COM)` once SPI PONG resumes. After T3's debounce window expires without a new fault report, T3 transitions FSM out of `FSM_FAULT` back to the pre-fault state.

Alternatively, if a dedicated `fw_clear_fault()` API is added to FW-API in SW-Phase 3 (cleaner design), COM-HEALTH will call it directly on nRF recovery. **This is an FW-API enhancement candidate for SW-Phase 3 — tracked as open item COM-OI-01.**

### 9.2 COM Module Watchdog

T-COM registers itself with FW-WDG (FW Supervisor watchdog) to detect COM thread hangs:

```c
void com_init(void) {
    /* Register COM with FW watchdog — 5 s timeout */
    com_wdg_handle = fw_register_watchdog(MODULE_COM, 5000);
    /* ... */
}

/* Called in every T-COM tick (20 Hz = every 50 ms) */
void com_health_tick(void) {
    fw_watchdog_heartbeat(com_wdg_handle);
    /* ... nRF health check ... */
}
```

If T-COM hangs (deadlock, infinite loop), FW-WDG detects within 5 s and transitions FSM to `FSM_FAULT`. Since COM is Safety Class A, this fault does not affect aiming/detection — it only disables BLE and diagnostic functions.

### 9.3 Traceability

| SWR-COM | SAD Section | Implementation |
|---------|-------------|----------------|
| F60 (5 s heartbeat) | §9.1 | HEARTBEAT_INTERVAL_MS = 5000 |
| F61 (3× fail → fault) | §9.1 | HEARTBEAT_FAIL_LIMIT = 3, fw_report_fault(FAULT_COM) |
| F62 (auto-recovery) | §9.1 | PONG received after fault → clear fault, resume SPI |
| S01 (BLE fail ≠ degrade) | §9.2 | COM watchdog fault does not affect T1/T2/T3 |

---

## 10. Memory Budget

| Component | RAM (bytes) | Flash/Storage | Notes |
|-----------|-------------|---------------|-------|
| T-COM stack | 65,536 | — | Thread stack |
| SPI TX/RX buffers | 1,024 | — | 2 × 512 B frame buffers |
| USB-C RX/TX buffers | 8,192 | — | 4 KB each for command + response |
| SPSC engagement queue | 4,096 | — | 64 entries × 64 B (lock-free ring) |
| Diagnostic session state | 256 | — | diag_session_t + temp buffers |
| COM-DATA mmap | 0 (kernel-managed) | 384 KB (eMMC P4) | mmap'd — no RAM allocation |
| Ed25519 working memory | 2,048 | — | TweetNaCl verification scratch |
| **Jetson total** | **~81 KB** | **~384 KB data** | Minimal for Safety Class A |
| nRF52840 Zephyr + BLE | ~64 KB RAM | ~256 KB flash | Zephyr BLE + GATT + SPI slave |
| nRF52840 app | ~8 KB RAM | ~32 KB flash | State machine + GATT data |
| **nRF52840 total** | **~72 KB / 256 KB** | **~288 KB / 1 MB** | 28% RAM, 28% flash |

---

## 11. Variant Configuration Matrix

### 11.1 Per-Variant COM Configuration

| Module | V-M (baseline) | V-L | V-D | V-X | V-T | V-NV | V-P | V-R |
|--------|---------------|-----|-----|-----|-----|------|-----|-----|
| COM-BLE | Standard GATT | = | Alert events only | + AES-256-GCM (§7.4) | + training data char | = | = | = |
| COM-DATA | Engagement + event log | + fire_gate field | Detection alerts only | = V-L + audit field | + training metadata | + thermal fields | = | + vehicle telemetry |
| COM-DIAG | Standard commands | = | = | + export audit cmd | + training mode cmds | + thermal diagnostic | = | + CAN bridge cmds |
| COM-UPDATE | USB-C + BLE OTA | = | = | + export compliance check | = | = | = | = |
| COM-SEC | LESC + Ed25519 | = | = | + AES-256-GCM | = | = | = | = |

### 11.2 Build Configuration

```c
/* com_config.h — variant selection at compile time */

/* Exactly one of these must be defined */
/* #define VARIANT_VM */  /* V-M: Micro-sight (baseline) */
/* #define VARIANT_VL */  /* V-L: Laser-sight */
/* #define VARIANT_VD */  /* V-D: Sentry Detector */
/* #define VARIANT_VX */  /* V-X: Export */
/* #define VARIANT_VT */  /* V-T: Trainer */
/* #define VARIANT_VNV */ /* V-NV: Night Vision */
/* #define VARIANT_VP */  /* V-P: Pro */
/* #define VARIANT_VR */  /* V-R: RWS */

/* Feature flags derived from variant */
#if defined(VARIANT_VX)
  #define CFG_APP_LAYER_ENCRYPTION  1  /* AES-256-GCM over BLE */
  #define CFG_EXPORT_AUDIT          1  /* Additional audit logging */
#else
  #define CFG_APP_LAYER_ENCRYPTION  0
  #define CFG_EXPORT_AUDIT          0
#endif

#if defined(VARIANT_VT)
  #define CFG_TRAINING_DATA         1  /* Training metadata upload */
#else
  #define CFG_TRAINING_DATA         0
#endif

#if defined(VARIANT_VR)
  #define CFG_CAN_BRIDGE            1  /* CAN bus diagnostic bridge */
#else
  #define CFG_CAN_BRIDGE            0
#endif

#if defined(VARIANT_VD)
  #define CFG_REDUCED_LOG           1  /* Detection alerts only, no engagement stats */
#else
  #define CFG_REDUCED_LOG           0
#endif

/* IRONMESH integration (all variants) */
#define CFG_IRONMESH_V1            1  /* Placeholder — update when IRONMESH API finalized */
```

### 11.3 V-R CAN Bridge Architecture (Stub)

V-R (RWS variant) requires a CAN bus bridge for vehicle integration. This is a **major extension** requiring dedicated development:

- CAN controller hardware on V-R PCB (not present on V-M baseline)
- `hal_can.c/.h` in FW-HAL layer
- CAN-to-COM bridge module in T-COM
- Vehicle telemetry ingestion + diagnostic forwarding

**This SAD does not specify V-R CAN bridge internals.** V-R CAN bridge will be specified in a separate document when V-R hardware design is finalized. The COM architecture accommodates it via the `CFG_CAN_BRIDGE` feature flag and modular T-COM design.

---

## 12. Error Handling & Fault Paths

### 12.1 Fault Table

| Fault | Detection | Severity | Action | Recovery | SWR |
|-------|-----------|----------|--------|----------|-----|
| nRF52840 unresponsive | 3× missed SPI PONG (15 s) | WARN | `fw_report_fault(FAULT_COM)`, cease SPI | Auto on PONG resume | F61, F62 |
| SPI CRC error | CRC-16 mismatch | INFO | Discard frame, log, increment counter | Automatic (next frame) | — |
| SPI persistent errors | ≥5 errors in 10 s | WARN | Back off to 5 Hz polling | Auto on clean frames | — |
| USB-C disconnect during update | USB disconnect event | ERROR | Abort update, staging cleaned | Restart update from beginning | F34 |
| eMMC write failure | `msync()` returns -EIO | ERROR | Log event, stop logging | Requires power cycle | F53 |
| Ed25519 verification fail | `Ed25519_verify()` returns 0 | ERROR | Reject image, log attempt | Retry with correct image | F32 |
| L2 auth failure | Signature mismatch | WARN | Reject, log attempt | Retry (max 5 attempts / session) | F43 |
| BLE stack crash (nRF) | No heartbeat + SPI NACK | ERROR | Report FAULT_COM | nRF watchdog self-resets, COM detects recovery | F61 |

### 12.2 Fault Propagation

```
COM fault events
    │
    ├─ Safety-critical? NO (COM is Class A)
    │  → System continues aiming/detection without COM
    │  → Only BLE/diagnostics/logging affected
    │
    ├─ fw_report_fault(FAULT_COM)
    │  → FSM shows "NO LINK" on display
    │  → T1 (AI), T2 (Display), T3 (Supervisor) unaffected
    │
    └─ COM-LOG event recorded
       → Available for post-incident analysis at next depot visit
```

---

## 13. Build System & Source Layout

### 13.1 Source Tree

```
sw-com/
├── jetson/                          ← Jetson-side COM code
│   ├── CMakeLists.txt
│   ├── include/
│   │   ├── com_config.h             ← Variant configuration (§11.2)
│   │   ├── com_ble_ctrl.h           ← BLE control interface
│   │   ├── com_data.h               ← Circular buffer engine
│   │   ├── com_data_types.h         ← Engagement + event record types
│   │   ├── com_diag.h               ← Diagnostic command handler
│   │   ├── com_health.h             ← nRF health monitor
│   │   ├── com_log.h                ← System event logger
│   │   ├── com_sec.h                ← Security / authentication
│   │   ├── com_spi_host.h           ← SPI protocol types and API
│   │   ├── com_update.h             ← Firmware update coordinator
│   │   └── com_usb_host.h           ← USB-C CDC ACM wrapper
│   ├── src/
│   │   ├── com_main.c               ← T-COM thread entry + event loop (§2.2)
│   │   ├── com_ble_ctrl.c           ← BLE control logic (§4)
│   │   ├── com_data.c               ← Circular buffer engine (§5)
│   │   ├── com_diag.c               ← Diagnostic protocol handler (§6)
│   │   ├── com_health.c             ← nRF health monitor (§9)
│   │   ├── com_log.c                ← System event logger (§5.5)
│   │   ├── com_sec.c                ← Security logic (§7)
│   │   ├── com_spi_host.c           ← SPI master protocol (§3)
│   │   ├── com_update.c             ← Firmware update state machine (§8)
│   │   └── com_usb_host.c           ← USB-C wrapper
│   └── test/
│       ├── test_com_data.c           ← Circular buffer unit tests
│       ├── test_com_diag.c           ← Diagnostic command parser tests
│       ├── test_com_spi.c            ← SPI protocol framing tests
│       ├── test_com_update.c         ← Update state machine tests
│       └── test_com_sec.c            ← Ed25519 verification tests
├── nrf/                              ← nRF52840 firmware (Zephyr project)
│   ├── CMakeLists.txt
│   ├── prj.conf                      ← Zephyr config (BLE, SPI, DFU)
│   ├── src/
│   │   ├── main.c                    ← nRF main + state machine (§4.2)
│   │   ├── gatt_vsmash.c             ← GATT service implementation (§4.3)
│   │   ├── gatt_vsmash.h
│   │   ├── spi_slave.c               ← SPI slave protocol handler
│   │   ├── spi_slave.h
│   │   ├── nrf_security.c            ← BLE pairing config (§4.4)
│   │   └── nrf_ota.c                 ← MCUboot DFU handler
│   └── boards/
│       └── vsmash_nrf52840.overlay   ← Device tree overlay for VM-4102
└── shared/                           ← Shared between Jetson and nRF
    ├── spi_protocol.h                ← SPI frame format + command IDs (§3.2, §3.3)
    └── crc16_ccitt.h                 ← CRC-16 implementation (shared with BAL-CALIB)
```

### 13.2 Build Commands

```bash
# Jetson-side (cross-compile from host)
mkdir -p build/jetson && cd build/jetson
cmake ../../jetson -DVARIANT=VM -DCMAKE_TOOLCHAIN_FILE=aarch64-linux.cmake
make -j$(nproc)

# nRF52840 (Zephyr west build)
cd nrf
west build -b vsmash_nrf52840 -- -DOVERLAY_CONFIG=release.conf

# Unit tests (host, x86)
mkdir -p build/test && cd build/test
cmake ../../jetson -DBUILD_TESTS=ON
make -j$(nproc)
ctest --output-on-failure
```

### 13.3 Dependencies

| Dependency | Version | Source | License |
|------------|---------|--------|---------|
| Zephyr RTOS | 3.6+ | zephyrproject.org | Apache 2.0 |
| Nordic nRF Connect SDK | 2.6+ | Nordic Semiconductor | BSD-3 |
| TweetNaCl (Ed25519) | 20140427 | tweetnacl.cr.yp.to | Public domain |
| CRC-16/CCITT | — | Shared utility (BAL-CALIB) | Workshop X internal |

---

## 14. Test Architecture

### 14.1 Unit Test Strategy

| Suite | Module | Mock Dependencies | Key Tests | SWR Coverage |
|-------|--------|-------------------|-----------|-------------|
| `test_com_data` | COM-DATA | `mmap` (host-compatible) | Write 1001 records (overwrite), CRC corrupt → skip, power-loss recovery | F10, F11, F15, F53 |
| `test_com_spi` | COM-SPI-HOST | SPI stub (loopback) | Frame encode/decode, CRC-16 verify/reject, overrun handling | F07, F60 |
| `test_com_diag` | COM-DIAG | FW-API mock | ASCII command parsing, access level enforcement, binary frame parsing | F20–F24, F40 |
| `test_com_update` | COM-UPDATE | eMMC mock (file-backed) | Rollback rejection, A/B partition swap, CRC fail → reject | F30–F37, S02, S03 |
| `test_com_sec` | COM-SEC | — | Ed25519 sign/verify roundtrip, reject wrong key, HMAC L1 auth | F40–F42 |

### 14.2 Integration Test Plan (SW-Phase 4, on target)

| Test | Equipment | Scenario | Pass Criteria | SWR |
|------|-----------|----------|---------------|-----|
| BLE range | IRONMESH base station + V-SMASH | Connect at 30 m open air | ≤5 s connect, ≤10 s reconnect | P01, P02 |
| BLE throughput | Base station + log download | Download 1,000 engagement records | ≥10 kB/s sustained, ≤120 s total | P03, P05 |
| Diagnostic commands | Depot laptop + USB-C | Exercise all 12 commands at all access levels | All responses correct, unauthorized rejected | F20–F24, F40 |
| Firmware update USB-C | Depot laptop + test image | Full update cycle: transfer → verify → commit → reboot | New FW boots, ≤90 s total | F30, P06 |
| Firmware update BLE OTA | BLE + test image | Full OTA cycle | New FW boots (slower than USB-C, OK) | F31 |
| Rollback protection | USB-C + old firmware image | Attempt downgrade | Rejected with error code | F33 |
| Atomic update | USB-C + power interrupt at 50% | Pull power during FW_CHUNK phase | Old FW boots on next power-on | F34, S02 |
| Unsigned image rejection | USB-C + unsigned test image | Flash unsigned firmware | Rejected, error logged | F32, S03 |
| nRF health monitor | V-SMASH with nRF SPI disconnected | Disconnect nRF SPI during operation | COM_FAULT within 20 s, "NO LINK" displayed | F61 |
| nRF recovery | Reconnect nRF SPI after fault | Reconnect SPI after fault state | COM_FAULT cleared, BLE resumes | F62 |
| OPSEC filter | BLE + packet capture | Capture all BLE traffic during full engagement | No images, GPS, calibration data in capture | F09 |
| V-X encryption | V-X build + BLE + packet capture | Capture V-X BLE traffic | Double encryption verified (AES-CCM + AES-256-GCM) | F45 |

---

## 15. Standards Compliance

### 15.1 TCVN / MIL-STD / IEC References

| Standard | Clause | Applicability | SAD Section |
|----------|--------|---------------|-------------|
| TCVN 11930 | §6.2 (authentication) | BLE pairing security, firmware signing | §4.4, §7.3 |
| TCVN 11930 | §6.3 (encryption) | BLE AES-CCM, V-X AES-256-GCM | §4.4, §7.4 |
| IEC 62443-4-2 | CR 1.2 (SW identification/auth) | Ed25519 asymmetric authentication for L2 | §7.2 |
| IEC 62443-4-2 | CR 3.4 (SW integrity) | Firmware signature verification, rollback protection | §7.3, §8.4 |
| MIL-STD-882E | — | Risk assessment (COM = low risk, Class A) | §12 fault analysis |
| BLE 5.0 Core Spec | Vol 3, Part H | LESC pairing, AES-CCM encryption | §4.4 |

### 15.2 Safety Architecture Summary

| Property | Implementation | Verification |
|----------|----------------|-------------|
| **Independence** | COM failure → system fully operational (SWR-COM-F02, S01) | T: remove nRF52840, full functional test |
| **No-brick** | A/B partition + hardware watchdog revert (SWR-COM-S02) | T: interrupt update, verify rollback |
| **Unsigned rejection** | Ed25519 in verification path, public key in RO partition (SWR-COM-S03) | T: attempt unsigned image |
| **OPSEC** | Whitelist filter, no images/GPS/classified via BLE (SWR-COM-F09) | I: GATT audit + T: packet capture |
| **Audit trail** | All L2 access logged with timestamp + tool ID (SWR-COM-F43) | T: verify log entries |

---

## 16. Acceptance Criteria (Gate to SW-Phase 3: Implementation)

- [ ] **Dual-processor architecture specified:** Jetson (T-COM) + nRF52840 (Zephyr BLE) with SPI protocol fully defined
- [ ] **SPI protocol complete:** Frame format, all 16 commands (8 outbound + 8 inbound), CRC-16, error handling
- [ ] **GATT implementation mapped:** All 11+1 characteristics with data flow (source → SPI → BLE)
- [ ] **COM-DATA storage engine:** Circular buffer design, record formats, write/read paths, power-loss safety
- [ ] **COM-DIAG protocol:** ASCII + binary modes, all 12 commands, 3 access levels with auth flows
- [ ] **COM-UPDATE state machine:** A/B partition, atomic update with watchdog revert, 3 image types
- [ ] **COM-SEC key management:** Ed25519 key storage layout, auth flow, V-X encryption, key rotation
- [ ] **COM-HEALTH monitor:** SPI heartbeat, 3× failure escalation, auto-recovery
- [ ] **Variant coverage:** All 8 variants mapped with feature flags. V-R CAN bridge deferred.
- [ ] **Memory budget:** Jetson ~81 KB RAM, nRF ~72 KB RAM — within hardware limits
- [ ] **Standards:** TCVN 11930, IEC 62443-4-2, BLE 5.0 Core Spec referenced with clauses
- [ ] **QC Gate:** Defense AI QC Gate run, all checks PASS or FLAG-with-plan

---

*Software Architecture Document — V-SMASH-SW-COM*
*SW-Phase 2 | Version 1.0 | 2026-03-02*
*Source: [[V-SMASH-SW-COM_SRS_v1.0|SRS (38+8+3 requirements)]]*
*Interfaces: [[V-SMASH-SW-FW_SAD_v1.0|FW-API §7]], [[V-SMASH-SW-AI_SAD_v1.0|AI Coordinator §14]]*
*Standards: [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0|TCVN Matrix §2.4]]*
