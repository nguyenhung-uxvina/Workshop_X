---
project: V-SMASH-SW-AI
phase: 4
type: rfq-outsource
language: Vietnamese
version: 2.0
created: 2026-03-03
status: draft
note: Phiên bản rút gọn — outcome-based, mở rộng tự do kỹ thuật cho vendor.
      Điền thông tin liên hệ và deadline trước khi gửi.
---

# YÊU CẦU BÁO GIÁ (RFQ)
## Phát triển Mô-đun AI Phát hiện và Phân loại UAS
### Mã RFQ: RFQ-VSMASH-SWAI-001 | Phiên bản 2.0

**Workshop X** — [Địa chỉ] — [Email PM] | **Hạn nộp:** [Ngày]

---

## 1. Bối Cảnh

Workshop X phát triển **V-SMASH-M** — kính ngắm thông minh tích hợp AI, phát hiện và phân loại phương tiện bay không người lái (UAS/drone). Phần cứng đã xác định: camera CMOS 1920×1080, SoC **NVIDIA Jetson Orin Nano 8GB** (JetPack 6.x), hoạt động trong môi trường quân sự (MIL-STD-810H, IP66, −10°C đến +55°C).

Chúng tôi tìm kiếm đơn vị **giao khoán toàn bộ mô-đun SW-AI** — bao gồm huấn luyện mô hình, lập trình pipeline, và kiểm thử. Workshop X chịu trách nhiệm phần cứng, firmware, và tích hợp hệ thống.

---

## 2. Yêu Cầu Đầu Ra (Outcome Requirements)

### 2.1 Chức Năng Cốt Lõi

Hệ thống AI phải:

1. **Phát hiện** các đối tượng bay trong vùng quan sát camera
2. **Phân loại** thành 4 lớp: `drone cánh quạt / drone cánh bằng / chim / không xác định`
3. **Theo dõi** liên tục đối tượng qua nhiều frame (persistent tracking với track ID)
4. **Tính vận tốc góc** (deg/s) của đối tượng đang được theo dõi
5. **Xuất output** theo cấu trúc dữ liệu cố định (xem §3) để tích hợp với các module khác của WX

### 2.2 Yêu Cầu Hiệu Năng — Bắt Buộc

| Chỉ tiêu | Giá trị tối thiểu (MANDATORY) | Phương pháp kiểm tra |
|---------|------------------------------|---------------------|
| Xác suất phát hiện (Pd) tại 150 m, ban ngày, mục tiêu ≥30cm | **≥ 90%** (Wilson CI 95% LB ≥ 85%) | Thực địa, ≥ 200 lần, WX kiểm tra độc lập |
| Tỷ lệ dương tính giả (FPR) tại confidence ≥ 90% | **≤ 2%** (Wilson CI 95% UB ≤ 4%) | ≥ 500 non-target, WX kiểm tra độc lập |
| Độ trễ end-to-end (camera frame → output) | **≤ 80 ms** (phân vị 95%) | Đo trên Jetson Orin Nano thực tế |
| Frame rate tối thiểu (điều kiện nhiệt bình thường) | **≥ 30 fps** | Đo trên Jetson Orin Nano thực tế |
| Thời gian load model khi khởi động | **≤ 1.5 s** | Đo trên Jetson Orin Nano thực tế |

### 2.3 Ràng Buộc An Toàn — Không Thể Thỏa Hiệp

Các ràng buộc sau là **điều kiện loại thẳng** nếu vi phạm:

| Ràng buộc | Mô tả |
|-----------|-------|
| **Confidence gate ≥ 0.70** | Pipeline chỉ xuất detection khi confidence ≥ 0.70. Không có cơ chế bypass hay override nào. Ngưỡng này là hằng số cố định trong code. |
| **Không phân loại bạn/thù** | Output chỉ là loại đối tượng (drone/chim/unknown). Không có trường nào liên quan đến hostile/friendly/ROE. |
| **Không stale output** | Khi pipeline lỗi hoặc treo, không được giữ output cũ. Phải báo lỗi về FW trong ≤ 500 ms. |

---

## 3. Giao Diện Output (Bắt Buộc)

Cấu trúc dữ liệu output phải tuân thủ chính xác — đây là điểm tích hợp với phần cứng và các module WX:

```c
typedef enum {
    AI_CLASS_DRONE_ROTOR = 0, AI_CLASS_DRONE_FIXED_WING = 1,
    AI_CLASS_BIRD = 2,        AI_CLASS_UNKNOWN = 3,
} ai_class_t;

typedef struct {
    uint32_t   track_id;           /* Track ID bền vững */
    ai_class_t target_class;       /* Lớp phân loại */
    float      confidence;         /* 0.0–1.0, chỉ ≥0.70 mới xuất */
    float      bbox_cx, bbox_cy;   /* Tâm bounding box (pixel, sensor 1920×1080) */
    float      bbox_w,  bbox_h;    /* Kích thước bounding box (pixel) */
    float      angular_size_mrad;  /* Kích thước góc của mục tiêu (mrad) */
    float      angular_vel_dps;    /* Vận tốc góc (deg/s), 0 nếu <3 frame */
    float      angular_vel_dir_deg;/* Hướng chuyển động (0–360°) */
    uint64_t   capture_timestamp_us;
    uint8_t    gate_state;         /* 0=tắt, 1=vàng(0.70–0.89), 2=xanh(≥0.90) */
    uint8_t    track_age_frames;
    uint8_t    reacquired;         /* 1 nếu tái phát hiện sau bắn */
    uint8_t    reserved;
} ai_output_t;

typedef struct {
    ai_output_t detections[10]; uint8_t count;
    uint8_t thermal_state; uint16_t inference_ms; uint32_t frame_seq;
} ai_frame_output_t;
```

> WX cung cấp header files đầy đủ, API FW, và môi trường tích hợp khi ký hợp đồng. **Kiến trúc nội bộ của pipeline hoàn toàn do vendor quyết định** — miễn là output đúng struct trên và đạt chỉ tiêu §2.2.

---

## 4. Yêu Cầu Dataset

Đơn vị giao khoán tự thu thập và gán nhãn dataset. Yêu cầu tối thiểu:

| Hạng mục | Yêu cầu |
|---------|---------|
| Tổng số ảnh | **≥ 16.000 ảnh có nhãn** |
| Các lớp đối tượng | Đủ 4 lớp + ảnh negative (không có mục tiêu, tối thiểu 20% dataset) |
| Đa dạng tầm | Mục tiêu ở 50, 100, 150, 200 m — ít nhất 100 ảnh/tầm/lớp |
| Bối cảnh Việt Nam | **Bắt buộc**: cảnh quan VN, loài chim bản địa VN (cò, diều hâu, sáo), drone thương mại phổ biến tại VN |
| Điều kiện ánh sáng | Cả ban ngày và hoàng hôn/bình minh |
| Chất lượng nhãn | Sai số tâm bbox < 5px; inter-annotator kappa ≥ 0.85 |
| Test set | 10% dataset, **niêm phong** — không dùng trong training. WX xác minh bằng hash. |

---

## 5. Deliverables

| # | Hạng mục | Ghi chú |
|---|----------|---------|
| D1 | Source code pipeline AI | Build được trên JetPack 6.x (CMake) |
| D2 | Model đã huấn luyện | Sẵn sàng chạy trên Jetson Orin Nano |
| D3 | Dataset hoàn chỉnh | Ảnh + nhãn + manifest (hash MD5/SHA256) |
| D4 | Unit tests pass 100% | Theo V-SMASH-SW_Module_Test_Plans (12 test cases, WX cung cấp) |
| D5 | Model Card | Kiến trúc, dataset, Pd/FPR đo được, giới hạn đã biết, license |
| D6 | Báo cáo hiệu chỉnh confidence | Phương pháp, reliability diagram, ECE ≤ 0.05 |

---

## 6. Tiêu Chí Nghiệm Thu

WX kiểm tra **độc lập** tất cả các tiêu chí sau:

| Tiêu chí | Điều kiện pass |
|---------|---------------|
| Unit tests | 12/12 test cases pass trên Jetson của WX |
| Pd @ 150m | ≥ 90% (kiểm tra thực địa do WX tổ chức) |
| FPR @ conf ≥ 90% | ≤ 2% |
| Latency | ≤ 80ms phân vị 95% |
| Safety gate | Code review: không có bypass path. Không có giao diện nào thay đổi ngưỡng 0.70. |
| No IFF output | Code review: output struct không có ROE/hostile/friendly field |
| Test set sạch | Hash check: test set không xuất hiện trong training data |
| Model Card đầy đủ | Cả Pd VÀ FPR được báo cáo — chỉ "accuracy %" không được chấp nhận |
| ECE calibration | ≤ 0.05 trên test set |

---

## 7. Điều Kiện Thương Mại

**WX cung cấp cho vendor trúng thầu:**
- Tài liệu kỹ thuật đầy đủ (SRS, SAD, header files)
- 1 Jetson Orin Nano Dev Kit (cho mượn trong thời gian hợp đồng)
- Ultralytics Enterprise License (nếu chọn YOLOv8 — WX mua)
- 1–2 buổi bay drone có kiểm soát để hỗ trợ thu thập data

**Sở hữu trí tuệ:**
- Toàn bộ source code, model weights, dataset thuộc Workshop X
- Vendor ký NDA trước khi nhận tài liệu

**Đánh giá hồ sơ** (thứ tự ưu tiên):
1. Năng lực kỹ thuật AI/ML (PyTorch/inference stack, object detection, embedded AI) — 35%
2. Chiến lược dataset Việt Nam và kế hoạch giảm FPR — 30%
3. Kinh nghiệm Jetson / edge AI deployment — 20%
4. Giá và timeline — 15%

---

## 8. Nội Dung Hồ Sơ Dự Thầu

| Mục | Nội dung yêu cầu |
|-----|-----------------|
| **Năng lực** | ≥ 2 dự án AI/ML trước đây (mô tả chung, không cần chi tiết). CV kỹ sư AI phụ trách. |
| **Đề xuất kỹ thuật** | Kiến trúc AI đề xuất (tự do chọn), chiến lược dataset VN, kế hoạch giảm thiểu rủi ro FPR |
| **Timeline** | Kế hoạch thực hiện theo tuần, cột mốc trung gian |
| **Báo giá** | Fixed price theo deliverable, điều kiện thanh toán milestone-based |

**Nộp hồ sơ:** [Email PM] — Subject: `[RFQ-VSMASH-SWAI-001] Tên đơn vị`
**Hạn chót:** [Ngày] | **Phỏng vấn kỹ thuật (shortlist):** [Tuần sau hạn nộp]

---

*RFQ V-SMASH-SW-AI — v2.0 — 2026-03-03 — Workshop X — COMMERCIAL-IN-CONFIDENCE*
