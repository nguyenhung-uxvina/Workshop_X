---
project: V-SMASH-SW-AI
phase: 4
type: rfq-outsource
language: Vietnamese
version: 1.0
created: 2026-03-03
status: draft
classification: COMMERCIAL-IN-CONFIDENCE
owner: Workshop X — Engineering / PM
note: Điền thông tin liên hệ và địa chỉ nộp hồ sơ trước khi gửi.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Mô-đun Phần Mềm AI Phát hiện và Phân loại UAS
### Mã tham chiếu: RFQ-VSMASH-SWAI-001

---

**Bên mời thầu:** Workshop X
**Địa chỉ:** [Điền địa chỉ Workshop X]
**Người liên hệ kỹ thuật:** [Tên kỹ sư phụ trách]
**Email:** [email]
**Điện thoại:** [số điện thoại]
**Hạn nộp hồ sơ:** [Điền ngày — khuyến nghị 3 tuần từ ngày phát hành]
**Ngày phát hành:** 2026-03-03

---

## 1. Tổng Quan Dự Án

### 1.1 Bối Cảnh

Workshop X đang phát triển **V-SMASH-M** — hệ thống kính ngắm thông minh tích hợp AI dành cho ứng dụng phát hiện và phân loại phương tiện bay không người lái (UAS/drone). Sản phẩm hoạt động trên nền tảng **NVIDIA Jetson Orin Nano** và được thiết kế theo tiêu chuẩn quân sự (MIL-STD-810H, IP66, -10°C đến +55°C).

Workshop X chịu trách nhiệm toàn bộ kiến trúc hệ thống, phần cứng, và tích hợp. Chúng tôi tìm kiếm đơn vị gia công **Mô-đun phần mềm AI (SW-AI)** — một pipeline phát hiện và phân loại đối tượng chạy trên GPU nhúng.

### 1.2 Phạm Vi Giao Khoán

Đơn vị được chọn chịu trách nhiệm **toàn bộ vòng đời phát triển SW-AI**:

| Giai đoạn | Nội dung | Tỷ lệ nỗ lực (ước tính) |
|-----------|----------|------------------------|
| **SW-3a: Huấn luyện mô hình** | Thu thập + gán nhãn dataset, huấn luyện YOLOv8-nano, hiệu chỉnh, xuất TensorRT INT8 | ~40% |
| **SW-3b: Triển khai pipeline** | Lập trình C++ pipeline trên Jetson (6 module), tích hợp API với FW và BAL | ~35% |
| **SW-3c: Kiểm thử đơn vị** | Unit tests theo Test Plan đã cung cấp (56 test cases cho SW-AI) | ~15% |
| **SW-3d: Tài liệu** | Model Card, báo cáo hiệu chỉnh, API documentation | ~10% |

> **Không thuộc phạm vi giao khoán:** Phần cứng (Jetson, camera, OLED), SW-FW, SW-BAL, SW-COM, tích hợp hệ thống, thử nghiệm chấp nhận FAT/SAT.

---

## 2. Yêu Cầu Kỹ Thuật

### 2.1 Kiến Trúc Pipeline

Pipeline SW-AI gồm **6 module** chạy tuần tự theo luồng xử lý ảnh thời gian thực:

```
[Camera MIPI CSI-2]
        ↓
  ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ AI-CAP   │ →  │ AI-DET   │ →  │ AI-CLS   │
  │ Capture  │    │ YOLOv8   │    │ 4-class  │
  │ +Resize  │    │ INT8     │    │ softmax  │
  └──────────┘    └──────────┘    └──────────┘
                                       ↓
  ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ AI-GATE  │ ←  │ AI-TRACK │ ←  │ (gating) │
  │ ≥70%     │    │ IoU+KF   │    │          │
  │ 3-frame  │    │ tracking │    │          │
  └──────────┘    └──────────┘    └──────────┘
        ↓
  ai_frame_output_t → SW-BAL (tính toán chì đạn)
  overlay_t         → FW-DISP (hiển thị OLED)
```

**Ngôn ngữ lập trình:** C++17
**Nền tảng:** NVIDIA Jetson Orin Nano 8GB, JetPack 6.x
**Framework AI:** PyTorch → ONNX → TensorRT INT8
**Model base:** YOLOv8-nano (Ultralytics) — **bắt buộc mua Enterprise License trước khi huấn luyện**

### 2.2 Yêu Cầu Chức Năng

#### Module AI-CAP (Capture & Tiền xử lý)

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F01 | Thu nhận frame từ camera 1920×1080 qua API `fw_sensor_capture()` theo tốc độ do trạng thái nhiệt quy định | **BẮT BUỘC** |
| F02 | Tiền xử lý mỗi frame: letterbox resize 1920×1080 → 640×640 (640×360 active + 140px padding trên/dưới), normalize [0.0, 1.0] float32, chuyển NCHW tensor | **BẮT BUỘC** |
| F03 | Truyền timestamp `frame_buffer_t.timestamp_us` xuyên suốt pipeline tới `ai_output_t.capture_timestamp_us` | **BẮT BUỘC** |
| F04 | Drop frame nếu pipeline đang xử lý frame trước — không queue, chỉ lấy frame mới nhất | **BẮT BUỘC** |
| F05 | Không xử lý frame khi FSM ở trạng thái INIT, SHUTDOWN, hoặc OVERHEAT | **BẮT BUỘC** |

#### Module AI-DET (Phát hiện đối tượng)

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F10 | Chạy inference YOLOv8-nano INT8 (TensorRT engine) trên GPU Jetson Orin Nano | **BẮT BUỘC** |
| F11 | Output mỗi detection: bounding box (cx, cy, w, h tính bằng pixel ở không gian 640×640), class label, confidence, detection ID | **BẮT BUỘC** |
| F12 | Tối đa 10 detection đồng thời/frame. Nếu >10: loại bỏ detection có confidence thấp nhất | **BẮT BUỘC** |
| F13 | Áp dụng Non-Maximum Suppression (NMS) IoU ≥ 0.45 | **BẮT BUỘC** |
| F14 | Chuyển đổi tọa độ từ không gian 640×640 về không gian sensor 1920×1080. Tính toán đúng offset letterbox padding | **BẮT BUỘC** |
| F15 | Tính góc nhìn của từng detection: `angular_size_mrad = (bbox_w_px / sensor_w_px) × HFOV_mrad` (HFOV là hằng số build-time từ `hal_config.h`) | **BẮT BUỘC** |

#### Module AI-CLS (Phân loại)

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F20 | Phân loại mỗi detection vào 1 trong 4 lớp: `DRONE_ROTOR (0)`, `DRONE_FIXED_WING (1)`, `BIRD (2)`, `UNKNOWN (3)` | **BẮT BUỘC** |
| F21 | Output confidence score (0.0–1.0) từ xác suất softmax | **BẮT BUỘC** |
| F22 | Phân loại chỉ là TYPE đối tượng. **Tuyệt đối không** phân loại bạn/thù, không phát ra chỉ thị khai hỏa. | **BẮT BUỘC - AN TOÀN** |
| F23 | Gán lớp `UNKNOWN` khi điểm softmax cao nhất < 0.50 | **NÊN CÓ** |

#### Module AI-GATE (Lọc ngưỡng tin cậy) — **AN TOÀN QUAN TRỌNG**

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F30 | **Tắt chỉ thị ngắm** (`dot_color = OFF`) với mọi detection có confidence < 0.70. Không có bypass, không có override, không có chế độ nào bỏ qua gate này. | **BẮT BUỘC - AN TOÀN** |
| F31 | Temporal persistence 3 frame: detection phải duy trì confidence ≥ 0.70 trong 3 frame liên tiếp mới kích hoạt chỉ thị. 1 frame đơn lẻ bị chặn. | **BẮT BUỘC** |
| F32 | Temporal decay 3 frame: sau khi kích hoạt, chỉ thị tồn tại thêm tối đa 3 frame sau khi confidence rơi xuống < 0.70 rồi mới tắt | **BẮT BUỘC** |
| F33 | Màu chỉ thị theo 3 mức: XANH LÁ (≥0.90), VÀNG (0.70–0.89), TẮT (<0.70) | **BẮT BUỘC** |
| F34 | Ngưỡng gate (0.70) là **hằng số compile-time** (`#define`). Không được phép cấu hình runtime, qua BLE, USB-C, hoặc bất kỳ giao diện nào. | **BẮT BUỘC - AN TOÀN** |

#### Module AI-TRACK (Theo dõi đa mục tiêu)

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F40 | Gán track ID bền vững qua các frame. Cùng một đối tượng giữ nguyên `track_id` | **BẮT BUỘC** |
| F41 | Tính vận tốc góc (deg/s) từ độ dịch chuyển tâm bounding box giữa các frame | **BẮT BUỘC** |
| F42 | Vận tốc góc = 0 trong 2 frame đầu (chưa đủ dữ liệu). Bắt đầu tính từ frame thứ 3 | **NÊN CÓ** |
| F43 | Xóa track nếu không phát hiện đối tượng trong >5 frame liên tiếp. Detection mới cùng vị trí nhận track ID mới | **BẮT BUỘC** |
| F44 | Tái phát hiện sau bắn: sau sự kiện giật nòng (FW-FSM POST_SHOT), cố gắng liên kết lại detection tin cậy nhất trong phạm vi ±5° với track trước đó | **BẮT BUỘC** |

#### Module AI-HEALTH (Watchdog & Giám sát)

| ID | Yêu cầu | Mức độ |
|----|---------|--------|
| F50 | Đăng ký watchdog với FW: `fw_register_watchdog(MODULE_AI, 500)` (timeout 500ms) khi khởi động | **BẮT BUỘC** |
| F51 | Gọi `fw_watchdog_heartbeat()` sau mỗi chu kỳ inference thành công | **BẮT BUỘC** |
| F53 | Query `fw_get_thermal_state()` trước mỗi inference, điều chỉnh frame rate: NORMAL→30fps, THROTTLE_15→15fps, THROTTLE_10→10fps, THROTTLE_5→5fps | **BẮT BUỘC** |
| F54 | Khi lỗi khởi tạo (load model thất bại, TensorRT engine lỗi): gọi `fw_report_fault(FAULT_AI)` và dừng inference | **BẮT BUỘC** |

### 2.3 Yêu Cầu Hiệu Năng

| ID | Chỉ tiêu | Giá trị mục tiêu | Phương pháp kiểm tra |
|----|----------|------------------|---------------------|
| P01 | Độ trễ end-to-end (capture → output) | **≤ 80 ms** (phân vị 95%) | Đo timestamp trên 1.000 frame |
| P02 | Thời gian inference (forward pass) | **≤ 30 ms** | TensorRT profiler, 1.000 inference |
| P03 | Frame rate (chế độ nhiệt NORMAL) | **≥ 30 Hz** | Camera tốc độ cao |
| P05 | Tầm phát hiện (ban ngày, mục tiêu ≥30cm, FOV 12°) | **≥ 150 m (BẮT BUỘC), ≥ 200 m (MONG MUỐN)** | Thực địa với mục tiêu chuẩn |
| P07 | Xác suất phát hiện (Pd) tại 150 m | **Pd ≥ 90%** (Wilson CI 95% lower bound ≥ 85%) | ≥ 200 lần trình bày mục tiêu |
| P08 | Xác suất phát hiện tại 200 m | **Pd ≥ 80%** (Wilson CI 95% lower bound ≥ 73%) | ≥ 200 lần |
| P09 | Tỷ lệ dương tính giả (FPR) tại confidence ≥ 90% | **FPR ≤ 2%** (Wilson CI 95% upper bound ≤ 4%) | ≥ 500 lần trình bày non-target |
| P11 | Theo dõi vận tốc góc tối đa | **≥ 30 deg/s** | Drone sled tốc độ đã biết |
| P12 | Thời gian tái phát hiện sau bắn | **≤ 200 ms** | Giả lập giật nòng |
| P13 | Công suất tiêu thụ AI (Jetson 15W mode) | **≤ 12.0 W** | Đồng hồ điện tại input Jetson |
| P15 | Thời gian load model khi khởi động | **≤ 1.5 s** | Đo timestamp, 10 lần thử |

### 2.4 Yêu Cầu Dataset Huấn Luyện

Đơn vị giao khoán chịu **toàn bộ trách nhiệm** về thu thập, gán nhãn và quản lý dataset.

#### Thành phần dataset (tối thiểu 16.000 ảnh có nhãn):

| Lớp đối tượng | Số lượng tối thiểu | Phân bố tầm | Ghi chú |
|--------------|-------------------|-------------|---------|
| drone-rotor (drone cánh quạt) | ≥ 4.000 ảnh | 50/100/150/200 m đều nhau | DJI Mavic, FPV racing, drone generic |
| drone-fixed-wing (drone cánh bằng) | ≥ 2.000 ảnh | 50/100/150/200 m đều nhau | UAS giám sát cánh bằng |
| bird (chim) | ≥ 3.000 ảnh | Đa dạng (50–300 m) | **Bắt buộc có loài bản địa VN**: cò trắng, diều hâu, sáo, bồ câu |
| unknown (không xác định) | ≥ 1.000 ảnh | Đa dạng | Mảnh vỡ, diều giấy, bong bóng |
| **negative** (không có mục tiêu) | **≥ 4.000 ảnh** | N/A | Bầu trời, mây, công trình, tán cây — quan trọng để giảm FPR |
| mixed (nhiều mục tiêu/frame) | ≥ 2.000 ảnh | Đa dạng | Drone + chim, 2 drone |
| **Tổng** | **≥ 16.000 ảnh** | | |

#### Yêu cầu chất lượng dataset:

| Chỉ tiêu | Giá trị |
|---------|---------|
| Sai số trung tâm bounding box | < 5 pixel |
| Sai số kích thước bounding box | < 10% |
| Inter-annotator agreement | Cohen's kappa ≥ 0.85 |
| Phân chia train/val/test | 80% / 10% / 10% |
| Test set | **Niêm phong** — không sử dụng trong training hoặc hyperparameter tuning |
| Kiểm soát phiên bản | Versioned, hash-linked với model version |
| Nội địa Việt Nam | Bắt buộc: cảnh quan VN, loài chim bản địa, drone thương mại phổ biến tại VN |

### 2.5 Hiệu Chỉnh Mô Hình (Model Calibration)

Bắt buộc áp dụng **temperature scaling** (hoặc Platt scaling) để hiệu chỉnh confidence score:
- Mục tiêu: Expected Calibration Error (ECE) **≤ 0.05** trên test set
- Đo bằng reliability diagram trên ≥ 1.000 detection từ test set
- Tham số hiệu chỉnh được baked vào TensorRT engine khi export
- Cung cấp báo cáo hiệu chỉnh độc lập (reliability diagram, ECE value)

### 2.6 Giao Diện API (Bắt Buộc Tuân Thủ)

Đơn vị giao khoán nhận tài liệu API đầy đủ từ Workshop X. Cấu trúc output **phải tuân thủ chính xác** định nghĩa `ai_output_t` sau:

```c
/* ai_output.h — KHÔNG được thay đổi signature */

typedef enum {
    AI_CLASS_DRONE_ROTOR      = 0,
    AI_CLASS_DRONE_FIXED_WING = 1,
    AI_CLASS_BIRD             = 2,
    AI_CLASS_UNKNOWN          = 3,
} ai_class_t;

typedef struct {
    uint32_t   track_id;
    ai_class_t target_class;
    float      confidence;
    float      bbox_cx, bbox_cy, bbox_w, bbox_h;
    float      angular_size_mrad;
    float      angular_vel_dps;
    float      angular_vel_dir_deg;
    uint64_t   capture_timestamp_us;
    uint8_t    gate_state;        /* 0=TẮT, 1=VÀNG, 2=XANH */
    uint8_t    track_age_frames;
    uint8_t    reacquired;
    uint8_t    reserved;
} ai_output_t;

typedef struct {
    ai_output_t detections[10];
    uint8_t     count;
    uint8_t     thermal_state;
    uint16_t    inference_ms;
    uint32_t    frame_seq;
} ai_frame_output_t;
```

---

## 3. Deliverables (Hạng Mục Bàn Giao)

### 3.1 Phần Mềm

| # | Hạng mục | Mô tả | Cột mốc |
|---|----------|-------|---------|
| D1 | **Source code C++** | Toàn bộ pipeline SW-AI (6 module), build được trên JetPack 6.x với CMake | M1 — Sprint S04 |
| D2 | **TensorRT engine** | File `.engine` INT8, đã hiệu chỉnh, sẵn sàng deploy trên Jetson Orin Nano | M1 — Sprint S04 |
| D3 | **ONNX model** | Model ONNX trung gian (trước khi convert TensorRT), dùng cho tái tạo engine | M1 — Sprint S04 |
| D4 | **PyTorch checkpoint** | Weights gốc `.pt` của model đã huấn luyện (để re-training và fine-tuning) | M1 — Sprint S04 |
| D5 | **Unit tests** | 12 test cases (theo V-SMASH-SW_Module_Test_Plans_v1.0) — phải pass 100% | M1 |
| D6 | **Build script** | CMakeLists.txt + JetPack cross-compile script | M1 |

### 3.2 Tài Liệu

| # | Hạng mục | Mô tả | Cột mốc |
|---|----------|-------|---------|
| D7 | **Model Card** | Tất cả các trường theo mẫu Workshop X: kiến trúc, dataset, Pd/FPR, giới hạn đã biết, license | M1 |
| D8 | **Báo cáo hiệu chỉnh** | Reliability diagram, ECE value, nhiệt độ scaling parameter | M1 |
| D9 | **Dataset manifest** | Danh sách file ảnh, nhãn, metadata (tầm, lớp, điều kiện ánh sáng), hash MD5/SHA256 | M1 |
| D10 | **Báo cáo training** | Training curves (loss, mAP, precision, recall), hyperparameter log, hardware dùng | M1 |
| D11 | **Kết quả unit test** | Log kết quả tất cả 12 test cases, pass/fail, môi trường test | M1 |
| D12 | **API integration guide** | Hướng dẫn tích hợp với SW-FW và SW-BAL, ví dụ code snippet | M1 |

### 3.3 Thông Tin Cung Cấp Cho Đơn Vị Giao Khoán

Workshop X cung cấp cho đơn vị trúng thầu:

| Tài liệu | Nội dung |
|---------|----------|
| `V-SMASH-SW-AI_SRS_v1.0.md` | Đặc tả yêu cầu đầy đủ (64 requirements) |
| `V-SMASH-SW-AI_SAD_v1.0.md` | Kiến trúc phần mềm chi tiết |
| `V-SMASH-SW_Module_Test_Plans_v1.0.md` | 12 test cases cho SW-AI |
| `ai_output.h` | Header file giao diện AI→BAL (do WX cung cấp) |
| `fw_hal_api.h` | Header file FW-API (do WX cung cấp) |
| `hal_config.h` | Hằng số cấu hình (FOV, sensor resolution) |
| Jetson Orin Nano (thiết bị phát triển) | 1 thiết bị Jetson Orin Nano Dev Kit — cho mượn trong thời gian hợp đồng |
| Ultralytics Enterprise License | WX mua và cung cấp license key trước khi bắt đầu training |

---

## 4. Tiêu Chí Nghiệm Thu

Toàn bộ deliverables phải vượt qua **hai cấp nghiệm thu**:

### 4.1 Nghiệm Thu Kỹ Thuật (Technical Acceptance)

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| **Unit tests 100%** | 12/12 test cases pass trên Jetson Orin Nano do WX kiểm tra độc lập |
| **Pd ≥ 90% tại 150 m** | Wilson CI 95% lower bound ≥ 85% trên ≥ 200 lần trình bày (WX tổ chức thử nghiệm thực địa) |
| **FPR ≤ 2% tại confidence ≥ 90%** | Wilson CI 95% upper bound ≤ 4% trên ≥ 500 non-target (WX tổ chức) |
| **Latency ≤ 80 ms** | Đo độc lập tại WX, phân vị 95% trên 1.000 frame |
| **Inference ≤ 30 ms** | TensorRT profiler trên Jetson Orin Nano của WX |
| **ECE ≤ 0.05** | WX xem xét reliability diagram từ báo cáo hiệu chỉnh |
| **Confidence gate không bypass** | Code review: ngưỡng 0.70 là `#define`, không có đường code nào override |
| **Build thành công** | `cmake .. && make` trên JetPack 6.x sạch, không lỗi, không warning |
| **API compliance** | `ai_output_t` struct khớp chính xác với header của WX |

### 4.2 Nghiệm Thu An Toàn (Safety Acceptance) — Bắt Buộc

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| **Không có output IFF** | Code review xác nhận không có trường hostile/friendly/ROE trong model output |
| **Gate không thể tắt** | Audit field mode: không có giao diện nào (BLE, USB-C, file config) cho phép thay đổi ngưỡng 0.70 |
| **Dual metric** | Model Card báo cáo cả Pd VÀ FPR — chỉ "accuracy %" không được chấp nhận |
| **Test set độc lập** | WX xác nhận test set không xuất hiện trong training data (so sánh hash) |

> **Lưu ý quan trọng:** Workshop X thực hiện **kiểm tra độc lập** (independent V&V) cho tất cả các tiêu chí nghiệm thu. Đơn vị giao khoán KHÔNG được tự nghiệm thu các chỉ tiêu an toàn.

---

## 5. Điều Kiện Thương Mại

### 5.1 Thông Tin Yêu Cầu Trong Hồ Sơ Dự Thầu

Đơn vị dự thầu phải cung cấp:

**A. Hồ sơ năng lực:**
- Danh sách ≥ 2 dự án AI/ML trước đây (không cần tiết lộ chi tiết, mô tả chung về domain và scale dataset)
- CV của kỹ sư AI phụ trách (yêu cầu: kinh nghiệm PyTorch, TensorRT, object detection)
- Kinh nghiệm làm việc với NVIDIA Jetson (tối thiểu 1 dự án)
- Kinh nghiệm làm việc với yêu cầu an toàn / safety-critical software (nếu có)

**B. Đề xuất kỹ thuật:**
- Kiến trúc training pipeline đề xuất (data augmentation strategy, hyperparameter tối ưu)
- Chiến lược thu thập dataset (partner data, synthetic augmentation, field collection)
- Phương pháp theo dõi (IoU tracker, Kalman filter — hoặc đề xuất thay thế có luận giải)
- Kế hoạch quản lý rủi ro: FPR > 2% (rủi ro cao nhất)
- Môi trường phát triển và infrastructure training (GPU cluster, cloud, v.v.)

**C. Kế hoạch thực hiện:**
- Timeline chi tiết (milestone và deliverable theo tuần)
- Cột mốc trung gian kiểm tra tiến độ (đề xuất review 2 tuần/lần)
- Rủi ro kỹ thuật đã nhận diện và kế hoạch giảm thiểu

**D. Đề xuất tài chính:**
- Báo giá tổng thể (fixed price) theo từng hạng mục
- Điều kiện thanh toán đề xuất (khuyến nghị: milestone-based)
- Quy định về sở hữu trí tuệ: source code, model weights, dataset phải thuộc Workshop X

### 5.2 Sở Hữu Trí Tuệ

- **Toàn bộ output** (source code, model weights, dataset) thuộc quyền sở hữu của Workshop X
- Đơn vị giao khoán **không** được giữ lại bản sao, tái sử dụng, hoặc tiết lộ dataset cho bên thứ ba
- Bảo mật thông tin: ký NDA trước khi nhận tài liệu kỹ thuật chi tiết
- Quyền sở hữu Ultralytics Enterprise License: thuộc Workshop X

### 5.3 Điều Kiện Bảo Mật

Dự án liên quan đến ứng dụng an ninh quốc phòng. Đơn vị dự thầu phải:
- Ký cam kết bảo mật thông tin (NDA)
- Không chia sẻ thông tin kỹ thuật, dataset, hoặc output với bên thứ ba
- Toàn bộ công việc thực hiện trong lãnh thổ Việt Nam

---

## 6. Lịch Trình Dự Kiến

| Cột mốc | Nội dung | Thời gian dự kiến |
|---------|----------|-------------------|
| **Kick-off** | Ký hợp đồng, bàn giao tài liệu kỹ thuật, Jetson Dev Kit, license | Tuần 1 |
| **M0 — Dataset plan** | Review kế hoạch thu thập dataset, chiến lược gán nhãn, phê duyệt của WX | Tuần 2 |
| **M1a — Training baseline** | Model YOLOv8-nano đã train xong (chưa hiệu chỉnh), mAP ≥ 0.50, demo trên Jetson | Tuần 6 |
| **M1b — Model final** | Model hiệu chỉnh (ECE ≤ 0.05), TensorRT INT8 engine, Pd/FPR đo sơ bộ | Tuần 8 |
| **M2 — Pipeline code** | Source code C++ hoàn chỉnh, build thành công, unit tests pass 100% | Tuần 10 |
| **M3 — Nghiệm thu** | WX kiểm tra độc lập: unit tests, latency, thực địa Pd/FPR | Tuần 12–14 |
| **Bàn giao cuối** | Toàn bộ deliverables, tài liệu, chuyển giao quyền sở hữu | Sau nghiệm thu pass |

> **Lưu ý:** Timeline 12–14 tuần là ước tính. Đơn vị dự thầu đề xuất timeline của mình trong hồ sơ kỹ thuật.

---

## 7. Hướng Dẫn Nộp Hồ Sơ

### 7.1 Hạn Chót

**Hạn nộp hồ sơ:** [Điền ngày]
**Trả lời câu hỏi kỹ thuật:** Gửi email trước [Điền ngày — khuyến nghị 1 tuần trước hạn nộp]
**Phỏng vấn kỹ thuật (nếu được lọc):** [Tuần sau hạn nộp]

### 7.2 Phương Thức Nộp

Gửi hồ sơ qua email tới: **[Điền email PM Workshop X]**
Subject email: `[RFQ-VSMASH-SWAI-001] Tên đơn vị — Hồ sơ dự thầu`

### 7.3 Lưu Ý

- Hồ sơ nộp **bằng tiếng Việt**
- Báo giá tính bằng **VND hoặc USD**
- Workshop X không cam kết chọn hồ sơ có giá thấp nhất — năng lực kỹ thuật và kế hoạch rủi ro được ưu tiên
- Workshop X có quyền yêu cầu demo kỹ thuật hoặc phỏng vấn kỹ sư phụ trách trước khi quyết định

---

## 8. Tiêu Chí Đánh Giá Hồ Sơ

| Tiêu chí | Trọng số |
|---------|---------|
| Năng lực kỹ thuật AI/ML (PyTorch, TensorRT, object detection) | 30% |
| Kinh nghiệm dataset collection và labeling (đặc biệt dataset Vietnam) | 20% |
| Kế hoạch quản lý rủi ro FPR (rủi ro cao nhất) | 20% |
| Kinh nghiệm Jetson / embedded AI deployment | 15% |
| Giá và điều kiện thanh toán | 15% |

---

## Phụ Lục A: Câu Hỏi Thường Gặp (sẽ cập nhật)

| Câu hỏi | Trả lời |
|---------|---------|
| Dataset có được cung cấp sẵn không? | Không. Đây là trách nhiệm của đơn vị giao khoán. WX cung cấp spec chi tiết và sẽ kiểm tra audit dataset trước khi duyệt M1a. |
| WX có cung cấp drone thật để thu thập data không? | Đang thảo luận. WX có thể hỗ trợ buổi bay drone có kiểm soát tại thực địa (1–2 buổi, không phải thay thế cho toàn bộ nhu cầu dataset). |
| Kỹ sư giao khoán có cần làm việc tại Workshop X không? | Không bắt buộc. Làm việc từ xa được chấp nhận. Yêu cầu review trực tiếp tại WX tại các cột mốc M1a, M1b, M2. |
| Có được dùng pre-trained weights từ nguồn khác không? | Được, nếu license tương thích và được khai báo đầy đủ trong Model Card. |
| YOLOv8-nano có bắt buộc không? | Bắt buộc cho v1.0 vì SAD đã chọn kiến trúc này. Đơn vị có thể đề xuất YOLOv8-small nếu có luận giải hiệu năng rõ ràng. |

---

*RFQ V-SMASH-SW-AI Outsource — Phiên bản 1.0 — 2026-03-03*
*Workshop X — COMMERCIAL-IN-CONFIDENCE*
*Điền thông tin liên hệ, địa chỉ và ngày hạn nộp trước khi gửi.*
