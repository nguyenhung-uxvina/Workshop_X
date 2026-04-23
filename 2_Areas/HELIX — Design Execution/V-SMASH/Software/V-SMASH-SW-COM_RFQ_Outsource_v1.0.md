---
project: V-SMASH-SW-COM
phase: 4
type: rfq-outsource
language: Vietnamese
version: 1.0
created: 2026-03-03
status: draft
note: Phiên bản outcome-based — giao thức BLE/GATT/USB đã định nghĩa đầy đủ,
      vendor tự do quyết định kiến trúc code nội bộ.
      Điền thông tin liên hệ và deadline trước khi gửi.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Mô-đun Truyền Thông & Quản Lý Dữ Liệu SW-COM
### Mã RFQ: RFQ-VSMASH-SWCOM-001 | Phiên bản 1.0

**Workshop X** — [Địa chỉ] — [Email PM] | **Hạn nộp:** [Ngày]

---

## 1. Bối Cảnh

Workshop X phát triển **V-SMASH-M** — kính ngắm thông minh tích hợp AI, phát hiện và phân loại UAS/drone. SW-COM là **lớp truyền thông và hậu cần** — không tham gia vào vòng lặp nhắm bắn. Hệ thống V-SMASH hoạt động đầy đủ (phát hiện, theo dõi, nhắm bắn, hiển thị) kể cả khi SW-COM tắt hoặc bị lỗi.

**Kiến trúc phần cứng:**
- **Jetson Orin Nano** (SoC chính, JetPack 6.x): chạy COM-DATA, COM-DIAG, COM-UPDATE, COM-SEC, COM-LOG
- **nRF52840** (co-processor BLE, VM-4102, Zephyr RTOS): chạy COM-BLE stack; kết nối với Jetson qua SPI 8 MHz

Chúng tôi tìm kiếm đơn vị **giao khoán toàn bộ mô-đun SW-COM** — bao gồm firmware cho cả 2 processors. GATT profile, SPI protocol, diagnostic command set, và data schemas đã được WX định nghĩa đầy đủ — vendor chỉ cần cài đặt đúng giao thức và đạt chỉ tiêu §2.2.

---

## 2. Yêu Cầu Đầu Ra (Outcome Requirements)

### 2.1 Chức Năng Cốt Lõi

SW-COM bao gồm 7 sub-module (6 trên Jetson + BLE stack trên nRF52840):

| Module | Processor | Trách nhiệm |
|--------|-----------|------------|
| **COM-BLE** | nRF52840 | BLE 5.0 GATT server (Zephyr RTOS); LESC pairing; IRONMESH telemetry uplink; auto-reconnect |
| **COM-DATA** | Jetson | Log engagement records (≥1,000) + system events (≥10,000) vào eMMC; circular buffer; CRC-32 per record |
| **COM-DIAG** | Jetson | USB-C diagnostic protocol (CDC ACM); 3 access levels; 12 commands per §3.3; disabled during OPERATIONAL |
| **COM-UPDATE** | Jetson + nRF52840 | Firmware update USB-C (primary) + BLE OTA (secondary); Ed25519 signature verify; A/B partition atomic |
| **COM-SEC** | Jetson | 3-level access (L0/L1/L2); Ed25519 challenge-response cho L2; audit log mọi L2 access |
| **COM-LOG** | Jetson | System event log (BOOT, FAULT, THERMAL, BLE, UPDATE, DIAG_ACCESS...); survive power-loss ≤1 event lost |
| **COM-HEALTH** | Jetson | SPI heartbeat PING/PONG với nRF52840 mỗi 5 s; báo COM_FAULT sau 3 lần miss liên tiếp (15 s) |

### 2.2 Yêu Cầu Hiệu Năng — Bắt Buộc

| Chỉ tiêu | Giá trị tối thiểu (MANDATORY) | Phương pháp kiểm tra |
|---------|------------------------------|---------------------|
| BLE advertising → connected (trong range ≤30m) | **≤ 5 s** | 10 lần thử nghiệm, đo thời gian |
| BLE auto-reconnect sau mất kết nối | **≤ 10 s** khi về vùng phủ sóng | Disconnect, re-enter range, đo |
| BLE sustained throughput (log transfer) | **≥ 10 kB/s** | Bulk transfer 64 KB, đo băng thông thực |
| COM-DATA write latency (per engagement record) | **≤ 5 ms** | Đo trong khi AI pipeline đang chạy |
| Diagnostic command response (status query) | **≤ 500 ms** | Đo từng lệnh trên USB-C |
| Full log download (1,000 records via USB-C) | **≤ 60 s** | End-to-end timing |
| Firmware update (10 MB image via USB-C) | **≤ 90 s** (transfer + verify + flash) | End-to-end timing |
| nRF52840 fault detection (missed heartbeat) | **≤ 20 s** (3 × 5 s + margin) | Ngắt SPI, đo time đến COM_FAULT |

### 2.3 Ràng Buộc Bảo Mật — Không Thể Thỏa Hiệp

Các ràng buộc sau là **điều kiện loại thẳng** nếu vi phạm:

| Ràng buộc | Mô tả |
|-----------|-------|
| **Firmware unsigned → từ chối tuyệt đối** | `COM-UPDATE` phải verify chữ ký Ed25519 (hoặc ECDSA-P256) trước khi ghi bất kỳ byte nào vào staging partition. Firmware không có chữ ký hoặc chữ ký sai: từ chối, log lỗi, không thay đổi trạng thái hệ thống. |
| **A/B rollback bắt buộc** | Nếu staged firmware không boot được sau FW_COMMIT, hệ thống phải tự động revert về partition A. Hardware watchdog trigger revert — không phụ thuộc vào firmware mới. |
| **L2 là asymmetric authentication** | L2 (`AUTH_L2`) phải dùng challenge-response Ed25519. Private key chỉ nằm trên depot tool, không bao giờ truyền qua dây. Không chấp nhận shared-secret cho L2. |
| **Không có just-works BLE pairing** | `COM-BLE` chỉ chấp nhận LESC (numeric comparison hoặc passkey). `Just-works` pairing bị reject ở nRF52840 level. |
| **COM-DIAG disabled khi OPERATIONAL** | Không có diagnostic command nào được xử lý khi `fw_get_fsm_state()` trả về OPERATIONAL state — trừ `PING` (L0). Kiểm tra state gate đầu mỗi command handler. |
| **Không transmit ảnh, video, GPS, boresight, tham số phân loại** | GATT characteristics và log records không chứa bất kỳ trường nào liên quan đến vị trí, ảnh, calibration data, hay classified info. Code review: kiểm tra struct definitions. |

---

## 3. Giao Diện Tích Hợp (Bắt Buộc)

### 3.1 Data Schemas — Output Structs (Cố Định)

```c
/* engagement_record_t — 64 bytes — stored in eMMC + subset sent via BLE */
typedef struct __attribute__((packed)) {
    uint32_t timestamp_s;           /* Monotonic seconds since boot */
    uint8_t  target_class;          /* 0=rotor, 1=fixed-wing, 2=bird, 3=unknown */
    uint8_t  confidence_pct;        /* 0–100 */
    uint16_t range_est_dm;          /* Estimated range in decimeters (0–3000) */
    int16_t  lead_angle_01mrad;     /* Lead angle in 0.1 mrad (signed) */
    uint16_t duration_ms;           /* Tracking duration (ms) */
    uint8_t  outcome;               /* 0=lost, 1=shot_fired, 2=manual_disengage */
    uint8_t  thermal_state;
    uint8_t  battery_soc;
    /* Extended — local storage only, not sent via BLE */
    uint16_t max_angular_vel_01dps;
    uint16_t avg_confidence_pct10;
    uint8_t  frames_tracked;
    uint8_t  reacquisitions;
    int16_t  bore_offset_01mrad_x;
    int16_t  bore_offset_01mrad_y;
    uint32_t crc32;                 /* CRC-32 of bytes 0–53 */
    uint8_t  reserved[6];           /* Pad to 64 bytes */
} engagement_log_record_t;

/* session_stats_t — 24 bytes — sent via BLE characteristic C11 */
typedef struct __attribute__((packed)) {
    uint32_t uptime_s;
    uint16_t detection_count;
    uint16_t engagement_count;
    uint16_t fault_count;
    uint16_t ble_disconnect_count;
    uint8_t  max_thermal_state;
    uint8_t  min_battery_soc;
    uint8_t  fw_update_count;
    uint8_t  reserved[7];           /* Pad to 24 bytes */
} session_stats_t;
```

### 3.2 SPI Protocol — Jetson ↔ nRF52840 (Cố Định)

```
Frame format: [SOF=0xAA][LEN_H][LEN_L][CMD][PAYLOAD...][CRC16_H][CRC16_L]
Max frame: 256 bytes. SPI 8 MHz, Jetson master.
IRQ: nRF52840 → Jetson GPIO khi nRF có data.

Jetson → nRF commands: SET_ADV_DATA | SEND_NOTIFICATION | START_OTA |
                        STOP_ADV | HEARTBEAT_PING
nRF → Jetson commands: BLE_CONNECTED | BLE_DISCONNECTED | DATA_RECEIVED |
                        OTA_CHUNK | HEARTBEAT_PONG
```

### 3.3 BLE GATT Profile — 11 Characteristics (Cố Định)

| UUID Suffix | Tên | Properties | Format |
|------------|-----|------------|--------|
| `-0001` | Device ID | Read | UTF-8 ≤20 chars |
| `-0002` | Device Status | Read, Notify | uint8 (FSM state) |
| `-0003` | Battery Level | Read, Notify | uint8 (SoC%) |
| `-0004` | FW Version | Read | UTF-8 ≤16 chars |
| `-0005` | AI Model Version | Read | UTF-8 ≤16 chars |
| `-0006` | Thermal State | Read, Notify | uint8 |
| `-0010` | Last Engagement | Read, Notify | 32 bytes (subset of engagement_record_t) |
| `-0011` | Session Stats | Read | 24 bytes (session_stats_t) |
| `-0020` | Log Transfer | Read, Indicate | ≤244 bytes/page (paginated) |
| `-0030` | FW Update Ctrl | Write (L2) | 4 bytes |
| `-0031` | FW Update Data | Write-no-resp (L2) | ≤244 bytes/chunk |

> **Lưu ý IRONMESH:** Giao thức IRONMESH fleet chưa được finalize — vendor cài đặt placeholder GATT (profile trên) hoạt động standalone. WX cập nhật khi IRONMESH API được xác định.

### 3.4 Diagnostic Commands Key Reference (12 lệnh per SRS §6)

L0 (ai cũng dùng): `PING`
L1 (depot technician): `STATUS`, `FAULT_HIST`, `CALIB_READ`, `LOG_DUMP`, `SENSOR_TEST`
L2 (firmware engineer): `AUTH_L2`, `FW_START`, `FW_CHUNK`, `FW_COMMIT`, `CONFIG_WRITE`, `KEY_ROTATE`

> WX cung cấp đặc tả đầy đủ của từng lệnh (request/response format, access control) khi ký hợp đồng.

---

## 4. Deliverables

| # | Hạng mục | Ghi chú |
|---|----------|---------:|
| D1 | Source code COM (Jetson) | CMake, C/C++17, JetPack 6.x |
| D2 | Source code COM-BLE (nRF52840) | Zephyr RTOS, NCS (nRF Connect SDK) |
| D3 | Unit tests pass 100% | Theo V-SMASH-SW_Module_Test_Plans (WX cung cấp) |
| D4 | Coverage report | ≥80% branch (Jetson code; nRF52840 code: ≥70%) |
| D5 | Security test report | Kết quả kiểm tra: unsigned FW reject, just-works reject, L2 auth, rollback |
| D6 | GATT profile validation | Output từ BLE sniffer hoặc GATT validation tool — tất cả 11 characteristics đúng UUID, format, properties |

---

## 5. Tiêu Chí Nghiệm Thu

WX kiểm tra **độc lập** tất cả các tiêu chí sau:

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| Unit tests | 100% pass trên Jetson devkit của WX |
| Unsigned FW reject | Attempt flash unsigned image → rejected, 5/5 lần |
| A/B rollback | Corrupt staged image → old FW boots automatically, 3/3 lần |
| L2 auth | Challenge-response Ed25519: pass với key đúng, fail với key sai |
| Just-works reject | Attempt just-works BLE pair → rejected |
| COM-DIAG gated | Diagnostic commands (trừ PING) → rejected trong OPERATIONAL mode |
| No sensitive data in BLE | Packet capture: zero images, GPS, calibration, classified fields |
| BLE standalone | Tắt nRF52840 → aiming + detection hoạt động đầy đủ |
| Log persistence | Power-pull → log survives, ≤1 event lost, CRC intact |
| GATT profile | All 11 characteristics match spec (UUID, format, properties) |

---

## 6. Điều Kiện Thương Mại

**WX cung cấp cho vendor trúng thầu:**
- Tài liệu kỹ thuật đầy đủ: SRS SW-COM, header files FW-API, data schemas, GATT spec, SPI protocol spec
- 1 Jetson Orin Nano Dev Kit + 1 nRF52840 DK (cho mượn trong thời gian hợp đồng)
- Ed25519 test key pair (không phải production key) để kiểm thử signing/verification
- 1 buổi kickoff kỹ thuật với WX SW-FW lead (để align FW-API calls và SPI HAL)

**Sở hữu trí tuệ:**
- Toàn bộ source code thuộc Workshop X
- Vendor ký NDA trước khi nhận tài liệu (đặc biệt: giao thức diagnostic và security scheme)

**Đánh giá hồ sơ** (thứ tự ưu tiên):
1. Kinh nghiệm BLE 5.0 + Zephyr RTOS + GATT services — 30%
2. Kinh nghiệm embedded security: firmware signing, asymmetric auth, A/B update — 30%
3. Kinh nghiệm USB-C CDC ACM, binary protocol, logging trên eMMC — 25%
4. Giá và timeline — 15%

---

## 7. Nội Dung Hồ Sơ Dự Thầu

| Mục | Nội dung yêu cầu |
|-----|-----------------|
| **Năng lực** | ≥ 2 dự án BLE/embedded communications trước đây (mô tả chung). CV kỹ sư phụ trách (phải có kinh nghiệm Zephyr RTOS). |
| **Đề xuất kỹ thuật** | Kiến trúc cho dual-processor SW-COM, cách tổ chức SPI command queue Jetson↔nRF52840, chiến lược A/B atomic update |
| **Chiến lược bảo mật** | Cách triển khai Ed25519 verify trên Jetson, LESC pairing trên nRF52840, key storage scheme |
| **Timeline** | Kế hoạch theo tuần, cột mốc D1–D6 (Jetson code và nRF52840 code song song) |
| **Báo giá** | Fixed price theo deliverable, thanh toán milestone-based |

**Nộp hồ sơ:** [Email PM] — Subject: `[RFQ-VSMASH-SWCOM-001] Tên đơn vị`
**Hạn chót:** [Ngày] | **Phỏng vấn kỹ thuật (shortlist):** [Tuần sau hạn nộp]

---

*RFQ V-SMASH-SW-COM — v1.0 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
