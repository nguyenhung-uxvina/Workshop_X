---
project: V-SMASH-SW-BAL
phase: 4
type: rfq-outsource
language: Vietnamese
version: 1.0
created: 2026-03-03
status: draft
note: Phiên bản outcome-based — mô hình đạn đạo đã định nghĩa đầy đủ,
      vendor tự do quyết định kiến trúc code và thuật toán.
      Điền thông tin liên hệ và deadline trước khi gửi.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Mô-đun Tính Toán Đạn Đạo & Bám Sát SW-BAL
### Mã RFQ: RFQ-VSMASH-SWBAL-001 | Phiên bản 1.0

**Workshop X** — [Địa chỉ] — [Email PM] | **Hạn nộp:** [Ngày]

---

## 1. Bối Cảnh

Workshop X phát triển **V-SMASH-M** — kính ngắm thông minh tích hợp AI, phát hiện và phân loại UAS/drone trên nền **NVIDIA Jetson Orin Nano 8GB** (JetPack 6.x). Mô-đun AI (SW-AI) đã xác định output: `ai_frame_output_t` chứa bounding box, vận tốc góc, và lớp mục tiêu. Module khác (SW-FW) cung cấp FW-API cho display và watchdog.

Chúng tôi tìm kiếm đơn vị **giao khoán toàn bộ mô-đun SW-BAL** — nhận dữ liệu phát hiện từ SW-AI, ước tính tầm bắn đơn mắt, tính góc dẫn bắn từ bảng tra đạn đạo 7.62×39mm M43, bám sát mục tiêu qua Kalman filter, và xuất lead dot lên display.

**Mô hình đạn đạo (vật lý):** WX cung cấp đầy đủ — bảng TOF, bảng góc dẫn bắn 4×7, và hằng số quang học. Vendor chỉ cần **cài đặt đúng thuật toán** và đảm bảo đầu ra đạt chỉ tiêu §2.2. Kiến trúc code nội bộ hoàn toàn do vendor quyết định.

---

## 2. Yêu Cầu Đầu Ra (Outcome Requirements)

### 2.1 Chức Năng Cốt Lõi

SW-BAL bao gồm 7 sub-module:

| Module | Trách nhiệm |
|--------|------------|
| **BAL-SIZE** | Bảng tra kích thước vật lý theo lớp mục tiêu (4 lớp: drone-rotor 0.35m, drone-fixed-wing 1.0m, chim 0.20m, unknown 0.35m) |
| **BAL-RANGE** | Ước tính tầm bắn đơn mắt từ `angular_size_mrad` + focal length 9134px; làm mượt theo track_id (EMA α=0.3); kẹp [30, 300] m |
| **BAL-TRACK** | Kalman filter 4-state (vị trí + vận tốc góc X/Y), constant-velocity model, innovation gate 3σ; bám tối đa 10 mục tiêu đồng thời |
| **BAL-LEAD** | Bilinear interpolation trên LUT 4×7 (range × ang. vel.) 7.62×39mm M43; cờ EST khi ngoài vùng sơ cấp |
| **BAL-BOUNDS** | Kiểm tra an toàn: MAX_LEAD_MRAD, JUMP_LIMIT, RANGE bounds; báo FAULT khi vượt ngưỡng |
| **BAL-CALIB** | Load offset boresight (x, y, mrad) từ eMMC khi khởi động; CRC-16 verify; ghi chỉ qua USB depot tool |
| **BAL-HEALTH** | Đăng ký watchdog với FW-WDG (timeout 500ms); heartbeat mỗi chu kỳ; báo FAULT_BAL nếu nội bộ lỗi |

### 2.2 Yêu Cầu Hiệu Năng — Bắt Buộc

| Chỉ tiêu | Giá trị tối thiểu (MANDATORY) | Phương pháp kiểm tra |
|---------|------------------------------|---------------------|
| Latency pipeline (ai_output_t → bal_output_t) | **≤ 20 ms** (phân vị 95%, 1000 frame) | Timestamp đo trên Jetson devkit |
| Frame rate đầu ra | **≥ 30 Hz** | Đo interval 1000 frame liên tục |
| Độ chính xác góc dẫn bắn — vùng sơ cấp (≤150m, ≤10 deg/s) | **≤ 1.0 mrad** | Kiểm tra thực địa với jig PR-11, ≥50 lần/điều kiện |
| Độ chính xác góc dẫn bắn — vùng mở rộng (≤200m, ≤20 deg/s) | **≤ 2.0 mrad** (hiển thị EST) | Kiểm tra thực địa, ≥30 lần/điều kiện |
| LUT interpolation error vs. mô hình giải tích | **≤ 0.05 mrad** tại mọi điểm giữa grid | Kiểm tra toàn bộ 4×7 grid + mid-points |
| Tái hội tụ Kalman sau reacquired (VM-S07) | **≤ 5 frames** (≤167 ms at 30 Hz) | Inject reacquired=1, đo convergence |
| CPU overhead SW-BAL | **≤ 5%** single core (Jetson Orin Nano 7W mode) | `perf stat`, cửa sổ 60 s |
| Branch coverage unit tests | **≥ 80%** | Coverage report từ CI |

### 2.3 Ràng Buộc An Toàn — Không Thể Thỏa Hiệp

Các ràng buộc sau là **điều kiện loại thẳng** nếu vi phạm:

| Ràng buộc | Mô tả |
|-----------|-------|
| **COMPUTE FAULT khi lead > 50 mrad** | BAL-BOUNDS phải phát hiện và gọi `fw_report_fault(FAULT_BAL)` ngay trong frame đó. Lead dot ẩn, hiển thị "COMPUTE FAULT". Không có bypass path. |
| **Suppression 1 frame khi jump > 15 mrad** | Nếu lead thay đổi >15 mrad giữa 2 frame liên tiếp mà không có angular velocity >15 deg/s tương ứng: ẩn lead 1 frame, log `LEAD_JUMP`. |
| **RANGE? khi tầm ngoài [30, 300] m** | Ẩn lead dot, hiển thị "RANGE?" — cho đến khi tầm trở về [30, 300] m trong ≥3 frame liên tiếp (hysteresis). |
| **Không có lead khi FSM trong trạng thái lỗi** | Nếu `fw_get_fsm_state()` trả về FAULT / SENSOR_FAULT / AI_FAULT / OVERHEAT / SHUTDOWN / INIT: pipeline bị bỏ qua, không có output. |
| **Tất cả ngưỡng là build-time constant** | `MAX_LEAD_MRAD`, `JUMP_LIMIT_MRAD`, `RANGE_MIN_M`, `RANGE_MAX_M` phải là `#define` hoặc `constexpr`. Không có biến runtime nào có thể thay đổi các ngưỡng này. |
| **Boresight chỉ ghi qua USB depot** | Hàm ghi BAL-CALIB phải kiểm tra `hal_usb_connected()`. Không có interface field nào để sửa offset. |

---

## 3. Giao Diện Tích Hợp (Bắt Buộc)

### 3.1 Input — Từ SW-AI (Đọc mỗi frame)

```c
/* Struct ai_frame_output_t và ai_output_t được định nghĩa trong SW-AI SRS §3.10.2.
   WX cung cấp header khi ký hợp đồng. SW-BAL chỉ đọc, không ghi. */

/* Các trường BAL-RANGE sử dụng: */
/*   ai_output_t.angular_size_mrad  — kích thước góc mục tiêu (mrad) */
/*   ai_output_t.angular_vel_dps    — vận tốc góc (deg/s) từ SW-AI */
/*   ai_output_t.angular_vel_dir_deg — hướng chuyển động (0–360°) */
/*   ai_output_t.track_id           — định danh track bền vững */
/*   ai_output_t.target_class       — lớp mục tiêu (ai_class_t) */
/*   ai_output_t.confidence         — confidence (0.0–1.0) */
/*   ai_output_t.reacquired         — 1 nếu tái phát hiện sau bắn */
/*   ai_output_t.bbox_cx, bbox_cy   — tâm bounding box (pixel) */
/*   ai_output_t.gate_state         — 1=vàng(0.70–0.89), 2=xanh(≥0.90) */

/* Validation bắt buộc trước khi xử lý: */
/*   count ∈ [0, 10]; confidence ∈ [0.0, 1.0]; angular_size_mrad > 0 */
```

### 3.2 Output — Sang Overlay Coordinator (Struct cố định)

```c
/* bal_output.h — SW-BAL output contract — KHÔNG được thay đổi struct này */

typedef struct {
    /* Echo input (truy vết) */
    uint32_t    track_id;
    ai_class_t  target_class;
    float       confidence;

    /* Tầm ước tính */
    float       range_est_m;          /* Kẹp [30, 300] m */
    float       physical_size_m;      /* Kích thước vật lý dùng tính tầm */
    uint8_t     range_valid;          /* 1 = trong [30,300] m */

    /* Góc dẫn bắn */
    float       lead_offset_x_mrad;
    float       lead_offset_y_mrad;
    float       lead_magnitude_mrad;

    /* Vị trí lead dot trên display (pixel, đã cộng boresight offset) */
    uint16_t    dot_x;
    uint16_t    dot_y;

    /* Trạng thái */
    uint8_t     valid;          /* 1 = lead hợp lệ, 0 = bị ẩn */
    uint8_t     est_indicator;  /* 1 = ngoài vùng sơ cấp → hiển thị "EST" */
    uint8_t     range_warning;  /* 1 = tầm ngoài bounds → hiển thị "RANGE?" */
    uint8_t     reserved;

    /* Kalman output (cho diagnostics) */
    float       filtered_angular_vel_dps;
    float       filtered_angular_dir_deg;
} bal_output_t;
```

### 3.3 Mô Hình Đạn Đạo (WX Cung Cấp — Vendor Cài Đặt)

**Đạn 7.62×39mm M43 (baseline V-M):**

| Tầm (m) | TOF (ms) | Lead @5 deg/s (mrad) | Lead @10 deg/s | Lead @20 deg/s |
|---------|----------|----------------------|----------------|----------------|
| 50 | 72 | 6.3 | 12.6 | 25.1 |
| 100 | 148 | 12.9 | 25.8 | 51.7 |
| 150 | 228 | 19.9 | 39.8 | 79.6 |
| 200 | 313 | 27.3 | 54.7 | 109.3 |

> LUT đầy đủ 4×7 (range × ang. vel. 0–30 deg/s), công thức chuyển đổi mrad↔pixel, và hằng số quang học (`FOCAL_LENGTH_PX = 9134`, `MRAD_PER_PX = 0.109`) được cung cấp trong header khi ký hợp đồng. **LUT phải là const array trong ROM** (`#define`, không runtime-load).

---

## 4. Deliverables

| # | Hạng mục | Ghi chú |
|---|----------|---------:|
| D1 | Source code SW-BAL đầy đủ | Build được trên JetPack 6.x (CMake), C/C++17 |
| D2 | Unit tests pass 100% | Theo V-SMASH-SW_Module_Test_Plans (WX cung cấp) |
| D3 | Coverage report | ≥80% branch coverage (CI report) |
| D4 | Static analysis report | Zero critical findings: cppcheck + clang-tidy |
| D5 | LUT verification report | So sánh tất cả 28 grid point + mid-point vs. mô hình giải tích G1; error ≤0.05 mrad |
| D6 | Boresight calibration test | Đo residual error tại 3 nhiệt độ (−10, +23, +55°C) — ≤0.5 mrad mỗi điểm |

---

## 5. Tiêu Chí Nghiệm Thu

WX kiểm tra **độc lập** tất cả các tiêu chí sau:

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| Unit tests | 100% pass trên Jetson devkit của WX |
| COMPUTE FAULT | Inject lead >50 mrad → fault ngay trong frame đó, 10/10 lần |
| Lead jump suppression | Inject jump >15 mrad → 1-frame suppression, 10/10 lần |
| RANGE? display | Out-of-bounds range → RANGE? message + 3-frame hysteresis |
| FSM fault → no lead | Inject FSM fault states → zero BAL output, 6/6 states |
| Build-time constants | Code review: zero `MAX_LEAD_MRAD`, `JUMP_LIMIT_MRAD` runtime writes |
| LUT error | ≤0.05 mrad vs. G1 model tại tất cả grid + mid-points |
| Lead accuracy | ≤1.0 mrad tại vùng sơ cấp (≤150m, ≤10 deg/s) — kiểm tra thực địa jig PR-11 |
| Kalman convergence | ≤5 frames sau reacquired=1, đo 10 lần |
| Coverage | ≥80% branch (CI report) |

---

## 6. Điều Kiện Thương Mại

**WX cung cấp cho vendor trúng thầu:**
- Tài liệu kỹ thuật đầy đủ: SRS SW-BAL, header files (`ai_output.h`, `bal_output.h`, `fw_api.h`, `bal_constants.h`)
- LUT 7.62×39mm M43 đầy đủ 4×7 + hàm bilinear interpolation reference
- 1 Jetson Orin Nano Dev Kit (cho mượn trong thời gian hợp đồng)
- Kết quả đo jig PR-11 từ prototype (làm cơ sở để so sánh accuracy)
- 1 buổi kickoff kỹ thuật với WX SW-AI và SW-FW lead (để align interface)

**Sở hữu trí tuệ:**
- Toàn bộ source code thuộc Workshop X
- Vendor ký NDA trước khi nhận tài liệu

**Đánh giá hồ sơ** (thứ tự ưu tiên):
1. Kinh nghiệm thuật toán lọc tín hiệu / tracking (Kalman, particle filter) — 35%
2. Kinh nghiệm embedded C/C++ safety-critical, bounds checking, FMEA-driven coding — 30%
3. Kinh nghiệm ballistic/fire-control hoặc physics-based LUT systems — 20%
4. Giá và timeline — 15%

---

## 7. Nội Dung Hồ Sơ Dự Thầu

| Mục | Nội dung yêu cầu |
|-----|-----------------|
| **Năng lực** | ≥ 2 dự án embedded C/C++ có tracking/filtering trước đây (mô tả chung). CV kỹ sư phụ trách. |
| **Đề xuất kỹ thuật** | Cách tổ chức pipeline BAL-RANGE→TRACK→LEAD→BOUNDS, chiến lược xử lý edge case (NaN, division-by-zero, reacquisition) |
| **Kiểm soát an toàn** | Cách đảm bảo không có runtime path nào bypass `MAX_LEAD_MRAD` và `JUMP_LIMIT_MRAD` |
| **Timeline** | Kế hoạch theo tuần, cột mốc D1–D6 |
| **Báo giá** | Fixed price theo deliverable, thanh toán milestone-based |

**Nộp hồ sơ:** [Email PM] — Subject: `[RFQ-VSMASH-SWBAL-001] Tên đơn vị`
**Hạn chót:** [Ngày] | **Phỏng vấn kỹ thuật (shortlist):** [Tuần sau hạn nộp]

---

*RFQ V-SMASH-SW-BAL — v1.0 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
