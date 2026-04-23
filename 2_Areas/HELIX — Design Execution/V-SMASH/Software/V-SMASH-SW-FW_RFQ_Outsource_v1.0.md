---
project: V-SMASH-SW-FW
phase: 4
type: rfq-outsource
language: Vietnamese
version: 1.0
created: 2026-03-03
status: draft
note: Phiên bản outcome-based — mở rộng tự do kỹ thuật cho vendor.
      Điền thông tin liên hệ và deadline trước khi gửi.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Firmware Platform cho Kính Ngắm Thông Minh V-SMASH
### Mã RFQ: RFQ-VSMASH-SWFW-001 | Phiên bản 1.0

**Workshop X** — [Địa chỉ] — [Email PM] | **Hạn nộp:** [Ngày]

---

## 1. Bối Cảnh

Workshop X phát triển **V-SMASH-M** — kính ngắm thông minh tích hợp AI, phát hiện và phân loại phương tiện bay không người lái (UAS/drone). Phần cứng đã xác định: SoC **NVIDIA Jetson Orin Nano 8GB** (JetPack 6.x, Linux PREEMPT_RT), OLED display VM-1300 (SPI), CMOS sensor VM-1200 (MIPI CSI-2), pin LiPo, hoạt động trong môi trường quân sự (MIL-STD-810H, IP66, −10°C đến +55°C).

Chúng tôi tìm kiếm đơn vị **giao khoán toàn bộ mô-đun SW-FW** — firmware platform nền tảng: HAL, boot, power/thermal management, fault state machine, display, LED, watchdog. SW-FW xuất bản **FW-API** (9 hàm C) cho các mô-đun SW-AI, SW-BAL, SW-COM tiêu thụ.

**Lưu ý quan trọng:** Jetson Orin Nano chưa về (đang chờ phân loại xuất khẩu EAR/BIS). Toàn bộ quá trình phát triển và kiểm thử phải thực hiện trên **Jetson Orin Nano Dev Kit**. WX cấp devkit cho mượn trong thời gian hợp đồng.

---

## 2. Yêu Cầu Đầu Ra (Outcome Requirements)

### 2.1 Chức Năng Cốt Lõi

SW-FW bao gồm 9 sub-module, mỗi module phải đạt đầy đủ chức năng:

| Module | Trách nhiệm |
|--------|------------|
| **FW-BOOT** | Khởi động ≤3 s; splash "STARTING" ngay lập tức; tự kiểm tra tất cả subsystem |
| **FW-PWR** | Đọc SoC pin (I2C); phân ngưỡng OK/LOW/CRITICAL; cảnh báo rung trước khi tắt máy |
| **FW-THERM** | Đọc nhiệt độ SoC (Tj) liên tục ≥1 Hz; tự điều tiết 4 mức theo §2.2 |
| **FW-FSM** | State machine hệ thống (bảng trạng thái); quản lý chuyển trạng thái an toàn |
| **FW-WDG** | Watchdog phần mềm: giám sát heartbeat từ SW-AI và SW-BAL; phát lỗi khi miss |
| **FW-DISP** | Render overlay lên OLED ≥60 Hz (min 30 Hz nếu SPI bandwidth giới hạn); không stale |
| **FW-LED** | Điều khiển RGB LED trạng thái (PWM dimming) |
| **FW-HAL** | Lớp duy nhất có SDK/SoC-specific code; tất cả hardware access qua HAL |
| **FW-SAFE** | Xử lý sự kiện khẩn cấp: power-fail blank display, fault indicator clear |

### 2.2 Yêu Cầu Hiệu Năng — Bắt Buộc

| Chỉ tiêu | Giá trị tối thiểu (MANDATORY) | Phương pháp kiểm tra |
|---------|------------------------------|---------------------|
| Thời gian boot (power-on → OPERATIONAL) | **≤ 3 s** | Đo trên devkit, 10 lần liên tiếp |
| Tần số refresh display | **≥ 60 Hz** (min 30 Hz nếu SPI bottleneck được chứng minh) | Đo oscilloscope trên SPI clock |
| Latency sensor capture (`fw_sensor_capture`) | **≤ 5 ms** | Timestamp đo trên devkit |
| Watchdog fault detection (missed heartbeat → FSM fault) | **≤ 100 ms** | Inject missed heartbeat, đo FSM transition |
| FW overhead tiêu thụ điện (không tính AI inference) | **≤ 0.3 W** | Đo power supply, subtracted from total |
| Uptime liên tục không leak/crash/deadlock | **≥ 72 h** | Soak test trên devkit, memory monitor |
| Branch coverage unit tests (không tính FW-HAL) | **≥ 80%** | Coverage report từ CI |

### 2.3 Ràng Buộc An Toàn — Không Thể Thỏa Hiệp

Các ràng buộc sau là **điều kiện loại thẳng** nếu vi phạm:

| Ràng buộc | Mô tả |
|-----------|-------|
| **Blank display khi mất nguồn ≤ 100 ms** | FW-SAFE phải phát hiện power-fail qua **hardware interrupt** (GPIO edge), không được dùng polling. Display phải tắt hoàn toàn trong ≤100 ms. Chứng minh bằng oscilloscope. |
| **Không có stale indicator** | Trong bất kỳ trạng thái lỗi (SENSOR_FAULT, AI_FAULT, THERMAL...) nào, tất cả các ký hiệu tactical trên display phải xóa sạch trong ≤100 ms. Không được giữ overlay cũ. |
| **Thermal shutdown tại 100°C** | FW-THERM phải kích hoạt SHUTDOWN khi Tj ≥ 100°C. Hardware cutoff độc lập tại 105°C là backup — không thay thế software shutdown. |
| **FW-HAL là lớp duy nhất SoC-specific** | Không được để SDK/driver call nào nằm ngoài FW-HAL. Toàn bộ code trên FW-HAL phải biên dịch với mock HAL stub (không cần phần cứng thực). |
| **Không có dynamic allocation sau boot** | `malloc`, `new`, hoặc bất kỳ heap allocation nào sau khi boot hoàn tất: **cấm tuyệt đối**. Mọi buffer phải được cấp phát tĩnh hoặc trong stack. |
| **MISRA C:2012 cho FW-SAFE** | Module FW-SAFE phải tuân thủ required subset của MISRA C:2012. Zero critical findings từ cppcheck/clang-tidy trước khi giao hàng. |

---

## 3. Giao Diện FW-API (Bắt Buộc)

FW-API là điểm tích hợp với SW-AI, SW-BAL, SW-COM. Signatures sau là **hợp đồng cố định** — vendor không được thay đổi:

```c
/* ─── FW-API: Published Interface Contract ─── */

/* Sensor capture — SW-AI consumer */
int fw_sensor_capture(frame_buffer_t *buf);
/* Returns 1920×1080 raw frame. ≤5 ms latency. 0=OK, <0=error.
   Buffer (≥6.2 MB) pre-allocated by caller. */

/* Display render — SW-AI, SW-BAL consumer */
int fw_display_render(const overlay_t *ovl);
/* Non-blocking. Renders at next refresh cycle (≤16.7 ms at 60 Hz).
   In fault state: suppresses render, returns -EFAULT. */

/* Fault report — SW-AI, SW-BAL, SW-COM consumer */
int fw_report_fault(fault_type_t type);
/* type: SENSOR_FAULT | AI_FAULT | BAL_FAULT | COM_FAULT | GENERAL
   Triggers FSM transition. 0=accepted. */

/* Thermal state query — SW-AI consumer */
thermal_state_t fw_get_thermal_state(void);
/* NORMAL | THROTTLE_15HZ | THROTTLE_10HZ | THROTTLE_5HZ | SHUTDOWN */

/* Power state query — SW-AI, SW-COM consumer */
power_state_t fw_get_power_state(void);
/* OK | LOW_BATTERY | CRITICAL */

/* Watchdog registration — SW-AI, SW-BAL consumer */
int fw_register_watchdog(module_id_t id, uint32_t timeout_ms);
/* Returns watchdog handle. Module must heartbeat within timeout_ms. */

/* Watchdog heartbeat — SW-AI, SW-BAL consumer */
int fw_watchdog_heartbeat(int handle);
/* Resets timer. 0=OK. Must be called before timeout expires. */

/* Battery SoC — SW-COM consumer */
uint8_t fw_get_battery_soc(void);
/* 0–100%. Updated ≥1 Hz. */

/* FSM state query — SW-AI, SW-BAL, SW-COM consumer */
fsm_state_t fw_get_fsm_state(void);
/* Returns current system FSM state. Non-blocking. */

/* Thread safety: tất cả FW-API functions phải thread-safe.
   Error convention: <0 = error (POSIX errno style), 0 = success. */
```

> WX cung cấp header files đầy đủ, type definitions (`frame_buffer_t`, `overlay_t`, `fault_type_t`, ...), và môi trường tích hợp khi ký hợp đồng. **Kiến trúc nội bộ của mỗi module hoàn toàn do vendor quyết định** — miễn là API contract trên được thỏa mãn và đạt chỉ tiêu §2.2–2.3.

---

## 4. Deliverables

| # | Hạng mục | Ghi chú |
|---|----------|---------:|
| D1 | Source code SW-FW đầy đủ | Build được trên JetPack 6.x (CMake ≥ 3.22, GCC aarch64) |
| D2 | Mock HAL stub | Cho phép build và test toàn bộ logic trên x86 (không cần Jetson) |
| D3 | Unit tests pass 100% | 21 test cases theo V-SMASH-SW_Module_Test_Plans (WX cung cấp) |
| D4 | Coverage report | ≥80% branch coverage toàn bộ FW (trừ FW-HAL platform code) |
| D5 | Static analysis report | Zero critical findings: cppcheck + clang-tidy; MISRA report cho FW-SAFE |
| D6 | HAL porting guide | Hướng dẫn port HAL sang SoC khác (Hailo-8, RK3588) — tối đa 2 trang |

---

## 5. Tiêu Chí Nghiệm Thu

WX kiểm tra **độc lập** tất cả các tiêu chí sau trên devkit:

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| Unit tests | 21/21 test cases pass trên Jetson devkit của WX |
| Boot time | ≤ 3 s, 10/10 lần đo |
| Power-fail blank | ≤ 100 ms, đo oscilloscope GPIO edge → display off |
| No stale indicator | Code review: fault state path xóa overlay trong ≤ 100 ms |
| Thermal shutdown | Test: inject Tj ≥ 100°C → SHUTDOWN transition confirmed |
| No dynamic alloc | Static analysis: zero `malloc`/`new` call post-boot |
| FW-HAL isolation | Mock HAL build: toàn bộ unit tests pass trên x86 không cần HW |
| MISRA FW-SAFE | Zero MISRA required violation trong FW-SAFE module |
| Coverage | ≥ 80% branch (CI report) |
| 72h soak test | Zero crash/leak/deadlock trong 72h continuous run |

---

## 6. Điều Kiện Thương Mại

**WX cung cấp cho vendor trúng thầu:**
- Tài liệu kỹ thuật đầy đủ (SRS, SAD, header files, type definitions)
- 1 Jetson Orin Nano Dev Kit (cho mượn trong thời gian hợp đồng)
- PCB schematics (khi available) — hiện devkit được dùng thay thế
- 1 buổi kickoff kỹ thuật với WX HW và SW-AI lead

**Sở hữu trí tuệ:**
- Toàn bộ source code thuộc Workshop X
- Vendor ký NDA trước khi nhận tài liệu

**Đánh giá hồ sơ** (thứ tự ưu tiên):
1. Kinh nghiệm embedded Linux / firmware safety-critical — 40%
2. Kinh nghiệm Jetson / JetPack SDK (MIPI CSI-2, SPI, PREEMPT_RT) — 30%
3. Thực hành MISRA C, static analysis, CI/coverage — 20%
4. Giá và timeline — 10%

---

## 7. Nội Dung Hồ Sơ Dự Thầu

| Mục | Nội dung yêu cầu |
|-----|-----------------|
| **Năng lực** | ≥ 2 dự án embedded Linux firmware trước đây (mô tả chung). CV kỹ sư FW phụ trách. |
| **Đề xuất kỹ thuật** | Kiến trúc module đề xuất, chiến lược PREEMPT_RT scheduling, cách xử lý power-fail interrupt |
| **Chiến lược HAL** | Cách tổ chức FW-HAL để đảm bảo SoC swap ≤4 tuần nếu cần |
| **Timeline** | Kế hoạch thực hiện theo tuần, cột mốc trung gian (D1 → D6) |
| **Báo giá** | Fixed price theo deliverable, điều kiện thanh toán milestone-based |

**Nộp hồ sơ:** [Email PM] — Subject: `[RFQ-VSMASH-SWFW-001] Tên đơn vị`
**Hạn chót:** [Ngày] | **Phỏng vấn kỹ thuật (shortlist):** [Tuần sau hạn nộp]

---

*RFQ V-SMASH-SW-FW — v1.0 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
