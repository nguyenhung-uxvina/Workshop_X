---
project: V-SMASH-SW-SYS
phase: 4
type: rfq-outsource
language: Vietnamese
version: 1.1
created: 2026-03-03
updated: 2026-03-04
status: draft
note: RFQ cho System Integration Lead — ICD header, build system, CI/CD, platform mock,
      SPSC queue library, boot orchestration, integration test suite.
      4 module code (FW/AI/BAL/COM) được phát triển riêng biệt — vendor SYS tích hợp tất cả.
      Điền thông tin liên hệ và deadline trước khi gửi.
qc_gate: Run #33, 2026-03-04 — 6 FLAG, 0 FAIL → HUMAN REVIEW. v1.1 applies all 6 fixes.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Hạ Tầng & Tích Hợp Hệ Thống SW-SYS
### Mã RFQ: RFQ-VSMASH-SWSYS-001 | Phiên bản 1.0

**Workshop X** — [Địa chỉ] — [Email PM] | **Hạn nộp:** [Ngày]

---

## 1. Bối Cảnh

Workshop X phát triển **V-SMASH-M** — kính ngắm thông minh tích hợp AI, phát hiện và phân loại UAS/drone. SW-SYS là **lớp tích hợp và hạ tầng** — kết nối 4 module chức năng (SW-FW, SW-AI, SW-BAL, SW-COM) thành một hệ thống hoàn chỉnh.

**Kiến trúc phần cứng:**
- **Jetson Orin Nano 8GB** (VM-2101, JetPack 6.x, Linux PREEMPT_RT): 6 luồng SCHED_FIFO
- **nRF52840** (VM-4102, Zephyr RTOS): BLE co-processor (do vendor SW-COM phụ trách)

**Mối quan hệ với 4 module RFQ khác:**

| RFQ | Scope | Deliverable cho SW-SYS vendor |
|-----|-------|-------------------------------|
| RFQ-SWFW-001 | Firmware foundation, FW-API, HAL | Source code SW-FW |
| RFQ-SWAI-001 | AI detection pipeline, TensorRT | Source code SW-AI |
| RFQ-SWBAL-001 | Ballistic computation, Kalman | Source code SW-BAL |
| RFQ-SWCOM-001 | BLE/USB-C communications, logging | Source code SW-COM |
| **RFQ-SWSYS-001 (này)** | **Glue code, ICD header, build system, CI, integration tests** | **Hệ thống tích hợp hoàn chỉnh** |

Vendor SW-SYS là **System Integration Lead**: nhận source code từ 4 module vendors (hoặc WX cung cấp stubs), tích hợp thành một binary chạy được trên Jetson + nRF52840. **Giao thức, interface types, thread architecture, và build matrix đã được WX định nghĩa đầy đủ trong System SRS v1.1 + System SAD v1.1** — vendor chỉ cần cài đặt đúng thứ tự và đạt chỉ tiêu §2.2.

---

## 2. Yêu Cầu Đầu Ra (Outcome Requirements)

### 2.1 Chức Năng Cốt Lõi

SW-SYS bao gồm 7 thành phần hạ tầng:

| Thành phần | Processor | Trách nhiệm |
|------------|-----------|-------------|
| **SYS-ICD** | Jetson | `v_smash_sw_types.h` — canonical header tất cả cross-module types; `_Static_assert` enforce sizeof tại compile time; shared với nRF52840 cho các types trong COM RFQ |
| **SYS-BUILD** | Jetson + nRF | CMake build system: variant-aware (8 variants VM/VL/VD/VX/VT/VNV/VP/VR), HAL platform switch (`-DPLATFORM=jetson_orin_nano/mock`), CI targets, cross-compile support |
| **SYS-MOCK** | x86 (CI) | `platform/mock/` — mock HAL toàn phần: tất cả 4 modules compile + chạy trên x86 không cần phần cứng thực; frame injection, FSM control, fault injection |
| **SYS-QUEUE** | Jetson | Lock-free SPSC queue library: 3 instances pre-allocated tại init, no `malloc()` sau boot; zero-copy overlay queue, engagement queue, events queue |
| **SYS-BOOT** | Jetson | Thread creation đúng priority (SCHED_FIFO), init sequence orchestration per SWR-SYS-F01–F05: T4 ISR đầu tiên → HAL buses → DISP → MIPI → AI/BAL/COM parallel |
| **SYS-TEST** | x86 (CI) | Integration test suite ≥15 test cases: pipeline end-to-end, fault propagation, boot sequence timing, variant build matrix, priority check |
| **SYS-CI** | CI server | Pipeline: cppcheck + clang-tidy (zero critical), MISRA C:2012 gate (FW-SAFE module), branch coverage report, variant build matrix (6 pass + 2 fail variants) |

### 2.2 Yêu Cầu Hiệu Năng — Bắt Buộc

| Chỉ tiêu | Giá trị tối thiểu (MANDATORY) | Phương pháp kiểm tra |
|---------|------------------------------|---------------------|
| CMake clean build — x86 mock, tất cả targets | **≤ 5 phút** trên 8-core build server | `time cmake --build build/ --target all` từ clean |
| Integration tests — x86 mock HAL | **100% pass** | `ctest --output-on-failure` |
| cppcheck critical findings | **= 0** trên toàn bộ code delivered | `cppcheck --enable=all --error-exitcode=1` |
| clang-tidy critical findings | **= 0** với WX-provided `.clang-tidy` config | CI gate, fail-on-warning |
| `_Static_assert` enforcement | **Build fail** nếu sizeof bất kỳ cross-module struct sai | Build tất cả 8 variants — từng variant kiểm tra độc lập |
| MISRA C:2012 FW-SAFE scope | **= 0** required-level violations | MISRA static analysis tool report |
| No heap growth post-boot | `valgrind --tool=massif` trên x86 mock: **zero heap allocation** sau FSM → READY | Automated valgrind run trong CI |
| Thread priorities verified | `pthread_getschedparam()` sau tạo thread: **đúng 5 giá trị** | Integration test kiểm tra params |

### 2.3 Ràng Buộc Bắt Buộc — Không Thể Thỏa Hiệp

Các ràng buộc sau là **điều kiện loại thẳng** nếu vi phạm:

| Ràng buộc | Mô tả |
|-----------|-------|
| **Không `malloc()`/`new` sau boot** | Tất cả SPSC queues, frame buffers, track arrays phải pre-allocate tại init. Không có dynamic allocation trong operational loop (FSM ≥ READY). `valgrind` + code review verify zero heap growth sau boot gate. |
| **`v_smash_sw_types.h` là canonical source duy nhất** | Không module nào được định nghĩa lại type đã có trong header. `grep` toàn bộ deliverable: không có `typedef struct engagement_log_record_t`, `bal_output_t`, `ai_output_t`, `overlay_t` nào ngoài header này. |
| **Thread priority table cố định** | T1=90, T2=85, T3=80, T-AI=75, T-COM=40 phải là SCHED_FIFO. T5=SCHED_OTHER. Không thay đổi trong runtime. Integration test verify bằng `pthread_getschedparam()` sau thread creation. |
| **T4 ISR là action SW đầu tiên** | `fw_safe_isr_init()` phải xuất hiện trước bất kỳ lệnh khởi tạo nào trong `main()`. Code review gate: đây là SWR-SYS-F01 SAFETY requirement. **Căn cứ: IEC 61508-3 / SIL-2 + MIL-STD-882E Severity Class I.** Failure mode: power-fail event giữa power-on và ISR registration → undetected state write to eMMC. |
| **Variant VD và VR build phải FAIL** | `cmake --variant VD` và `--variant VR` phải dừng với `#error` từ `bal_config.h`. Đây là behavior đúng — build error ngăn BAL vô tình được link vào variant không có BAL. CI variant matrix test bao gồm 2 expected-failure cases. |
| **Không priority inversion** | Không thread SCHED_FIFO priority ≥80 (T1, T2, T3) được block trên mutex held bởi thread priority thấp hơn. T5 (SCHED_OTHER): không giữ mutex mà T-AI hay T2 acquire. Code review + integration test: lock dependency analysis. |

---

## 3. Giao Diện Tích Hợp (Bắt Buộc)

### 3.1 Cross-Module Types — v_smash_sw_types.h (Sizes Cố Định)

WX cung cấp full field layout cho tất cả types tại kickoff kỹ thuật. Vendor phải implement `_Static_assert` cho **toàn bộ** các types dưới đây. Sizes là bắt buộc — không negotiable:

| Type                      | Size            | `_Static_assert` bắt buộc                                    | Mô tả                                                       |
| ------------------------- | --------------- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| `ai_output_t`             | **48 B**        | `_Static_assert(sizeof(ai_output_t) == 48, ...)`             | Per-detection AI output (track_id, class, confidence, bbox) |
| `ai_frame_output_t`       | **492 B**       | `_Static_assert(sizeof(ai_frame_output_t) == 492, ...)`      | Frame-level AI output (8B header + 10×48B + 4B)             |
| `bal_output_t`            | **36 B**        | `_Static_assert(sizeof(bal_output_t) == 36, ...)`            | Ballistic solution (range, lead, dot_x/y, valid flags)      |
| `overlay_t`               | **270 B**       | `_Static_assert(sizeof(overlay_t) == 270, ...)`              | Display overlay assembled by AI-COORD                       |
| `engagement_log_record_t` | **64 B**        | `_Static_assert(sizeof(engagement_log_record_t) == 64, ...)` | Engagement record cho eMMC + BLE (packed)                   |
| `session_stats_t`         | **24 B**        | `_Static_assert(sizeof(session_stats_t) == 24, ...)`         | Session summary cho BLE characteristic C11                  |
| `system_event_record_t`   | **32 B**        | `_Static_assert(sizeof(system_event_record_t) == 32, ...)`   | System event log entry                                      |
| `frame_buffer_t`          | **32 B header** | `_Static_assert(sizeof(frame_buffer_t) == 32, ...)`          | Frame buffer metadata (data payload = 6.2 MB external)      |

> **Lưu ý:** Hai types còn TBD tại thời điểm RFQ: `overlay_t` field layout và `system_event_record_t` field layout. WX finalize tại buổi kickoff kỹ thuật. `_Static_assert` sizes đã xác định.

### 3.2 Thread Architecture — Cố Định

```
Priority  Thread   Rate          WCET    Scheduling       Constraints
────────  ───────  ──────────    ──────  ──────────────   ──────────────────────────
HW IRQ    T4       Aperiodic     <1 ms   Hardware ISR     fw_safe_isr_init() — FIRST
90        T1       30 Hz         6 ms    SCHED_FIFO       hal_mipi_capture loop
85        T2       60 Hz         4 ms    SCHED_FIFO       SPSC pop + SPI DMA display
80        T3       10 Hz         2 ms    SCHED_FIFO       Thermal/FSM monitor; WDG scan
75        T-AI     30–5 Hz*      80 ms   SCHED_FIFO       Full pipeline: AI + BAL + overlay
40        T-COM    20 Hz + IRQ   5 ms    SCHED_FIFO       SPI master; BLE queue; log flush
20        T5       Event-driven  —       SCHED_OTHER      USB diagnostics (must not block ≥80)
```
*T-AI rate điều chỉnh theo thermal: NORMAL=30Hz / THROTTLE_15=15Hz / THROTTLE_10=10Hz / THROTTLE_5=5Hz*

> **Lưu ý quan trọng cho vendor:** T-AI không chạy strict timer tick. T1 cung cấp frame liên tục vào double-buffer; T-AI xử lý ngay khi available (blocking pop hoặc polling), drop frame là hành vi bình thường ở WCET 80ms. Thermal throttle mechanism giảm input rate (rate T1 giảm theo FSM state) — không phải tăng deadline. Vendor KHÔNG implement 30Hz tick loop cho T-AI.

**Thread communication — cơ chế cố định:**
- T1 → T-AI: double-buffered frame pointer, atomic index swap — zero-copy, no mutex
- T-AI → T2: SPSC queue `q_overlay`, depth 2, `push_latest` (drop oldest nếu T2 chưa kịp pop)
- T3 → all: `_Atomic` state variables — single writer, multiple readers, acquire-release
- T-AI → T-COM: SPSC `q_engagement` depth 16 + `q_events` depth 32
- T5: SCHED_OTHER — KHÔNG được acquire mutex held bởi T1/T2/T3/T-AI

### 3.3 SPSC Queue API — Cố Định

Vendor implement lock-free SPSC queue với interface sau (WX không quy định thuật toán nội bộ — tự do dùng Dmitry Vyukov single-consumer/producer, ring buffer, hoặc tương đương):

```c
/* === Lock-free SPSC Queue — pre-allocated, no malloc === */

/* Producer API (T-AI context) */
int  spsc_push(spsc_queue_t *q, const void *item);
     /* Returns 0=ok, -1=full (caller drops or handles) */

void spsc_push_latest(spsc_queue_t *q, const void *item);
     /* Overwrite oldest if full — for q_overlay only */

/* Consumer API (T2 or T-COM context) */
int  spsc_pop(spsc_queue_t *q, void *item_out);
     /* Returns 0=ok, -1=empty */

int  spsc_peek(spsc_queue_t *q, const void **item_ptr);
     /* Zero-copy peek without consuming — returns 0=ok, -1=empty */
```

**Ba queue instances bắt buộc:**

| Instance | Producer | Consumer | Depth | Element type | Policy |
|----------|---------|---------|-------|-------------|--------|
| `q_overlay` | T-AI | T2 | **2** | `overlay_t` (270 B) | `push_latest` — latest-wins |
| `q_engagement` | T-AI | T-COM | **16** | `engagement_log_record_t` (64 B) | `push` — no drop |
| `q_events` | bất kỳ module | T-COM | **32** | `system_event_record_t` (32 B) | `push` — no drop |

> **Yêu cầu thread-safety:** `q_overlay`: single producer (T-AI) + single consumer (T2) — SPSC đủ, không cần mutex. `q_events`: **multiple producers** (any module) → cần lock strategy cho producer side (spinlock hoặc atomic CAS). WX chấp nhận spinlock cho q_events vì events là low-frequency.

### 3.4 Boot Sequence — Thứ Tự Bắt Buộc (SWR-SYS-F01–F05)

```
main() → MUST follow this order:

t=0+        [1] fw_safe_isr_init()          ← FIRST — power-fail ISR
t~50ms      [2] hal_gpio/spi/i2c/pwm/usb init
t~300ms     [3] fw_disp_early_init()        ← "STARTING" splash ≤500ms from power-on
t~500ms     [4] hal_mipi_init() + capture validation frame
            [5] fw_fsm_init(FSM_INIT)
t~700ms     [6] hal_self_test()
            [7] PARALLEL: sw_ai_init() || sw_bal_init() || sw_com_init()
                → mỗi module gọi fw_register_watchdog() trong init
t≤3000ms    [8] FSM → READY (khi: MIPI ok + tất cả watchdog handles registered + self-test ok)
            [9] Launch threads: T1, T2, T3, T4, T-AI, T-COM, T5

FAULT PATH: Nếu `hal_self_test()` fail → FSM → FAULT (không proceed đến READY).
  fw_disp_early_init() hiển thị error code trên display (error codes TBD — WX define tại kickoff).
  System không launch threads. Operator phải power-cycle. No auto-retry.
```

### 3.5 Build Variant Matrix — Cố Định

| Variant | CMake flag | BAL behavior | Expected build result |
|---------|------------|-------------|----------------------|
| VM | `-DVARIANT_VM` | 7.62×39mm LUT | **PASS** — baseline V-SMASH-M |
| VL | `-DVARIANT_VL` | 7.62×39mm LUT | **PASS** |
| VD | `-DVARIANT_VD` | `#error "BAL excluded in V-D"` | **FAIL** (expected — correct behavior) |
| VX | `-DVARIANT_VX` | Custom LUT (WX cung cấp) | **PASS** |
| VT | `-DVARIANT_VT` | 7.62×39mm LUT | **PASS** |
| VNV | `-DVARIANT_VNV` | 7.62×39mm LUT | **PASS** |
| VP | `-DVARIANT_VP` | 12.7×108mm LUT | **PASS** |
| VR | `-DVARIANT_VR` | `#error "BAL v2.0 required"` | **FAIL** (expected — correct behavior) |

---

## 4. Deliverables

| # | Hạng mục | Ghi chú |
|---|----------|---------|
| D1 | `v_smash_sw_types.h` | Tất cả 8 cross-module types; `_Static_assert` cho mỗi type; `__attribute__((packed))` nơi cần thiết; compile-verified trên cả x86 và ARM |
| D2 | CMake build system | Variant-aware; platform switch (`-DPLATFORM=`); `build.sh --variant X`; CI targets: `all`, `test`, `coverage`, `misra` |
| D3 | `platform/mock/` | x86 mock HAL toàn phần: `hal_mipi_mock` (frame injection từ file/buffer), `hal_spi_mock`, `hal_gpio_mock`, `hal_i2c_mock`, FSM state injection via test API |
| D4 | SPSC queue library (`spsc_queue.h/.c`) | 3 instances pre-allocated; API per §3.3; `valgrind`-clean; unit tests 100% pass |
| D5 | Boot orchestration (`main.c` + `thread_setup.c`) | Init sequence per §3.4; thread creation với đúng SCHED_FIFO priorities; watchdog registration before READY |
| D6 | Integration test suite | ≥15 test cases: pipeline end-to-end, fault injection, boot timing, variant build matrix (6 PASS + 2 expected FAIL), SPSC overflow behavior, priority verification |
| D7 | CI/CD pipeline config | GitHub Actions hoặc GitLab CI; stages: build → static-analysis → misra → test → coverage; badge report; fail-fast on any gate. **Self-hosted runner preferred cho defense build artifacts** (cross-compile + Jetson stages). Cloud runner (GitHub-hosted) acceptable cho x86 mock stages only. WX cung cấp self-hosted runner nếu vendor không có. |

---

## 5. Tiêu Chí Nghiệm Thu

WX kiểm tra **độc lập** tất cả các tiêu chí sau:

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| Build matrix | VM/VL/VX/VT/VNV/VP: build success; VD/VR: fail với `#error`, 8/8 |
| `_Static_assert` enforcement | Sửa `sizeof(bal_output_t)` thành 35 → build fail ngay, 5/5 lần |
| x86 mock integration tests | `ctest`: 100% pass, không cần phần cứng |
| Zero dynamic allocation | `valgrind --tool=massif` trên mock run: heap constant sau FSM → READY |
| Thread priorities | `pthread_getschedparam()` sau boot: T1=90/FIFO, T2=85/FIFO, T3=80/FIFO, T-AI=75/FIFO, T-COM=40/FIFO — 5/5 đúng |
| T4 ISR đầu tiên | Code review bởi **WX SW Lead (độc lập — vendor không tự xác nhận)**. Xác nhận `fw_safe_isr_init()` là lệnh đầu tiên trong `main()` trước bất kỳ HAL init. Sign-off: WX SW Lead + WX QE (dual signature). |
| VD/VR build fail | `--variant VD` và `--variant VR` đều fail build với `#error` message rõ ràng |
| Zero cppcheck critical | Chạy trên toàn bộ source delivered: zero critical findings |
| Zero MISRA required violations | MISRA tool report trên FW-SAFE scope: zero required-level |
| Boot timing (mock) | Integration test inject timestamps: STARTING splash ≤500ms, READY ≤3000ms |
| q_overlay drop-oldest | Inject frames nhanh hơn T2 consume: oldest frame bị overwrite, không block T-AI |
| q_events multi-producer | 3 threads push đồng thời vào `q_events`: không data race (valgrind --helgrind) |

---

## 6. Điều Kiện Thương Mại

**WX cung cấp cho vendor trúng thầu:**
- System SRS v1.1 + System SAD v1.1 + ICD v1.0 (normative interface specs)
- Source code 4 modules (WX cung cấp sau khi module vendors deliver). Nếu cần bắt đầu build system trước khi nhận code thực: **WX cung cấp module stubs** — header files với tất cả function signatures từ ICD v1.0 + stub `.c` files (return 0 / mock values, không có business logic). Stubs đủ để CMake build thành công và x86 mock integration tests chạy.
- `overlay_t` + `system_event_record_t` full field layout tại kickoff kỹ thuật (sizes đã xác định trong §3.1 — field layout TBD)
- Jetson Orin Nano Dev Kit (cho mượn) để verify real-hardware build + thread scheduling
- 1 buổi kickoff kỹ thuật với WX SW lead: align về `v_smash_sw_types.h` layout, SPSC algorithm choice, CI runner environment, MISRA tool setup
- **MISRA analysis tool:** WX cung cấp Cppcheck MISRA plugin (open-source baseline) nếu vendor không có commercial tool. Commercial MISRA tool (Polyspace / LDRA / PC-lint Plus) preferred cho production gate — vendor nêu rõ trong hồ sơ.

**Sở hữu trí tuệ:**
- Toàn bộ source code thuộc Workshop X
- Vendor ký NDA trước khi nhận tài liệu

**Đánh giá hồ sơ** (thứ tự ưu tiên):
1. Kinh nghiệm CMake + embedded Linux build systems + cross-compilation (x86 ↔ ARM64) — 35%
2. Kinh nghiệm lock-free data structures + Linux real-time (PREEMPT_RT, SCHED_FIFO, priority inheritance) — 35%
3. Kinh nghiệm embedded CI/CD (cross-platform testing, MISRA, valgrind, coverage) — 20%
4. Giá và timeline — 10%

---

## 7. Nội Dung Hồ Sơ Dự Thầu

| Mục | Nội dung yêu cầu |
|-----|-----------------:|
| **Năng lực** | ≥ 2 dự án embedded Linux với CMake + real-time scheduling. CV kỹ sư phụ trách (phải có: PREEMPT_RT hoặc equivalent RTOS, cross-compilation, CI/CD pipeline). |
| **Đề xuất kỹ thuật** | SPSC queue algorithm choice + rationale (Vyukov vs alternatives); cách tổ chức `platform/` HAL abstraction; CI runner strategy (native ARM64 vs QEMU vs x86 mock only) |
| **Chiến lược integration testing** | Cách inject test frames + fault states vào mock HAL mà không cần modify module code; approach để detect priority inversion trong test environment |
| **Timeline** | Kế hoạch theo tuần, cột mốc D1–D7. Chú ý: D1 (header) và D3 (mock) là critical path — unblock module vendors ngay tuần 1. |
| **Báo giá** | Fixed price theo deliverable, milestone-based (D1+D3 là milestone 1 — unblock 4 module vendors). |

**Nộp hồ sơ:** [Email PM] — Subject: `[RFQ-VSMASH-SWSYS-001] Tên đơn vị`
**Hạn chót:** [Ngày] | **Phỏng vấn kỹ thuật (shortlist):** [Tuần sau hạn nộp]

---

*RFQ V-SMASH-SW-System — v1.1 — 2026-03-04 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
*QC Gate Run #33: 6 FLAG, 0 FAIL → HUMAN REVIEW. v1.1 applies all 6 fixes.*
