# REQUIREMENTS LIST (DESIGN SPECIFICATION) - v1.3
## VN-TARGET-BB01: BIA HUẤN LUYỆN BẮN TRÊN BIỂN - ACOUSTIC IMPACT DETECTION

---

| **Đơn vị** | VIỆN KỸ THUẬT HẢI QUÂN |
|------------|------------------------|
| **Tên sản phẩm** | Bia huấn luyện bắn súng bộ binh trên biển có báo điểm tự động |
| **Mã sản phẩm** | VN-TARGET-BB01 (Ký hiệu BB-01) |
| **Phiên bản** | 1.3 |
| **Ngày cập nhật** | 11/12/2024 |
| **Bài bắn tham chiếu** | Điều 124, Bài 3: Bắn mục tiêu trên mặt nước |
| **Thiết kế tham chiếu** | Khung bia thép treo xích (hình thực tế) |

---

## CHANGE LOG v1.2 → v1.3

| Thay đổi | v1.2 | v1.3 | Lý do |
|----------|------|------|-------|
| **Bia số 10** | Bia tròn 10 vòng | **Bia "Tên địch bắn trung/đại liên" 75cm** | Đúng theo tài liệu |
| **Cách gắn bia** | Chưa rõ | **TREO BẰNG XÍCH** | Theo hình thực tế |
| **Vị trí các bia** | Chưa rõ | **NGANG HÀNG trên thanh treo** | Yêu cầu mới |
| **Khung bia** | Chưa chi tiết | **Khung thép + ray** | Theo hình thực tế |

---

## 1. MISSION PROFILE (Bài bắn tham chiếu)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | MP.01 | Bài bắn tham chiếu | Điều 124, Bài 3 | - | - |
| D | MP.02 | Điều kiện | Ban ngày + Ban đêm | - | - |
| D | MP.03 | Tàu bắn di chuyển | 7-8 | km/h | Hành tiến |
| D | MP.04 | Khoảng cách bắn | 150-400 | m | Theo Điều 124 |
| D | MP.05 | Mục tiêu thả nổi tự do | Có | - | Không neo |
| D | MP.06 | Phiên bản 1: Không ẩn/hiện | Bia cố định hiện | - | Đơn giản |

---

## 2. TARGET TYPES (Loại bia) - CẬP NHẬT ⚠️

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | **TT.01** | **Bia số 7e** | **Hình người đứng/di chuyển** | **-** | **Xanh rằn ri** |
| D | **TT.02** | **Bia số 6c** | **Hình địch nằm bắn** | **-** | **Xanh rằn ri** |
| D | **TT.03** | **Bia số 10** | **"Tên địch bắn trung, đại liên"** | **-** | **Xanh rằn ri** |
| D | TT.04 | Số lượng bia 7e | 2 | cái | - |
| D | TT.05 | Số lượng bia 6c | 1 | cái | - |
| D | TT.06 | Số lượng bia số 10 | 1 | cái | - |
| D | TT.07 | **Tổng số bia/cụm** | **4** | **cái** | **2×7e + 1×6c + 1×10** |

---

## 3. TARGET DIMENSIONS (Kích thước bia) - CẬP NHẬT ⚠️

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | TD.01 | Bia 7e - chiều cao | 830 ± 30 | mm | Hình người |
| D | TD.02 | Bia 7e - chiều rộng | ~250 | mm | Ước tính |
| D | TD.03 | Bia 6c - chiều cao | 420 ± 20 | mm | Nằm bắn |
| D | TD.04 | Bia 6c - chiều rộng | 250 ± 20 | mm | - |
| D | **TD.05** | **Bia số 10 - chiều rộng** | **750 ± 30** | **mm** | **Theo tài liệu** |
| D | **TD.06** | **Bia số 10 - chiều cao** | **~550** | **mm** | **2 người nằm** |

---

## 4. TARGET MATERIAL (Vật liệu bia)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | TM.01 | Vật liệu mặt bia | Thép tấm | - | Không xuyên thủng |
| D | TM.02 | Loại thép | AR400/AR500 hoặc tương đương | - | Abrasion Resistant |
| D | TM.03 | Độ dày thép | ≥ 6 | mm | Chịu 7.62mm |
| D | TM.04 | Độ cứng Brinell | ≥ 360 | HB | AR400+ |
| D | TM.05 | Sơn mặt trước | Xanh rằn ri (camouflage) | - | Quân sự |
| D | TM.06 | Sơn mặt sau | Chống gỉ marine primer | - | - |

---

## 5. TARGET MOUNTING (Gắn bia) - MỚI ⚠️ CRITICAL

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | **TMT.01** | **Kiểu gắn bia** | **TREO BẰNG XÍCH** | **-** | **Theo hình thực tế** |
| D | **TMT.02** | **Vị trí các bia** | **NGANG HÀNG** | **-** | **Cùng cao độ** |
| D | TMT.03 | Vật liệu xích | Inox 316 hoặc mạ kẽm | - | Chống gỉ biển |
| D | TMT.04 | Số điểm treo/bia nhỏ (7e, 6c) | ≥ 2 | điểm | Ổn định |
| D | TMT.05 | Số điểm treo/bia lớn (số 10) | ≥ 3 | điểm | Bia rộng |
| D | TMT.06 | Chiều dài xích | 100-200 | mm | Cho phép lắc |
| D | **TMT.07** | **Bia rung tự do khi trúng đạn** | **Có** | **-** | **QUAN TRỌNG cho acoustic** |
| D | TMT.08 | Khoảng cách giữa các bia | ≥ 300 | mm | Tránh chạm nhau |

### SƠ ĐỒ GẮN BIA:

```
        THANH TREO NGANG (Cùng cao độ)
═══════════════════════════════════════════════════════════
    │        │        │        │         │        │
   ╲│╱      ╲│╱      ╲│╱      ╲│╱       ╲│╱      ╲│╱
    ○        ○        ○        ○         ○        ○
   XÍCH    XÍCH     XÍCH     XÍCH      XÍCH     XÍCH
    │        │        │        │         │        │
┌───────┐ ┌─────┐ ┌───────────────────────┐ ┌─────┐ ┌───────┐
│       │ │     │ │                       │ │     │ │       │
│  7e   │ │ 6c  │ │       SỐ 10           │ │ 6c  │ │  7e   │
│       │ │     │ │   (75cm × 55cm)       │ │     │ │       │
│       │ └─────┘ │                       │ └─────┘ │       │
│       │         └───────────────────────┘         │       │
└───────┘                                           └───────┘

Ghi chú: Thứ tự có thể điều chỉnh theo bài bắn
```

---

## 6. TARGET FRAME (Khung bia) - MỚI

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | TF.01 | Vật liệu khung | Thép hộp mạ kẽm hoặc Inox | - | Chống gỉ |
| D | TF.02 | Kích thước thép hộp | 40×40 hoặc 50×50 | mm | - |
| D | TF.03 | Chiều rộng khung | 2500-3000 | mm | Đủ 4 bia |
| D | TF.04 | Chiều cao khung | 1500-1800 | mm | - |
| D | TF.05 | Thanh treo ngang | 1 | thanh | Gắn tất cả bia |
| D | TF.06 | Sơn phủ khung | Xám hoặc xanh quân sự | - | - |
| D | TF.07 | Chân đế/giá đỡ trên phao | Có | - | Liên kết với phao |

---

## 7. GEOMETRY - PHAO (Hình học phao)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | G.01 | Số lượng phao | 02 | cái | Catamaran |
| D | G.02 | Chiều dài phao | 3500-4000 | mm | Đủ cho khung |
| D | G.03 | Chiều cao mạn phao | 400 ± 20 | mm | - |
| D | G.04 | Chiều chìm phao | 300 ± 20 | mm | Draft |
| D | G.05 | Chiều rộng thân phao | 700 ± 20 | mm | - |
| D | G.06 | Khoảng cách tâm 2 phao | 2000-2500 | mm | Ổn định |
| D | G.07 | Mạn khô (Freeboard) | ≥ 100 | mm | - |

---

## 8. KINEMATICS (Động học)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | K.01 | Chịu sóng (Sea State) | ≥ 2 | Douglas | 0.1-0.5m |
| D | K.02 | Chịu gió | ≥ Cấp 4 | Beaufort | 5.5-8 m/s |
| D | K.03 | Thời gian triển khai | ≤ 30 | phút | 2-3 người |
| D | K.04 | Thời gian thu hồi | ≤ 30 | phút | - |
| D | K.05 | Độ ổn định góc nghiêng | ≤ ±15 | độ | Roll |
| D | K.06 | Thả nổi tự do | Có | - | - |

---

## 9. BALLISTICS (Đạn đạo)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | B.01 | Khoảng cách bắn MIN | 150 | m | ST/TL |
| D | B.02 | Khoảng cách bắn MAX | 400 | m | Tr/ĐL |
| D | B.03 | Caliber: 5.56×45mm | Có | - | Súng trường |
| D | B.04 | Caliber: 7.62×39mm | Có | - | AK, TL |
| D | B.05 | Caliber: 7.62×54mmR | Có | - | Tr/ĐL |
| D | B.06 | Mặt bia không xuyên thủng | Có | - | Thép AR400+ |
| D | B.07 | Tuổi thọ mặt bia | ≥ 10,000 | phát | Thép bền |

---

## 10. ACOUSTIC SENSOR SYSTEM ⚠️ CRITICAL

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | AS.01 | Loại sensor | Microphone (MEMS/Electret) | - | Acoustic |
| D | AS.02 | Số microphone/bia nhỏ | 1 | - | 7e, 6c |
| D | AS.03 | Số microphone/bia lớn | 1-2 | - | Số 10 (rộng) |
| D | AS.04 | Tổng số microphone | 4-5 | - | Tùy cấu hình |
| D | AS.05 | Vị trí gắn mic | Gần mặt sau bia | - | Hướng ra sau |
| D | AS.06 | Dải tần số | 100 Hz - 20 kHz | - | Impact sound |
| D | AS.07 | SPL max | ≥ 140 | dB | Chịu tiếng va đập |
| D | AS.08 | SNR | ≥ 60 | dB | Lọc nhiễu |

---

## 11. SIGNAL PROCESSING

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | SP.01 | Phát hiện IMPACT SOUND | Có | - | Đạn chạm thép |
| D | SP.02 | Phân biệt bia nào trúng | Có | - | 4 bia riêng |
| D | SP.03 | Latency (thời gian xử lý) | ≤ 100 | ms | DSP |
| D | SP.04 | False positive rate | ≤ 2% | % | Sóng, gió... |
| D | SP.05 | False negative rate | ≤ 2% | % | Bỏ sót |
| D | SP.06 | Phân biệt nhiều phát liên tiếp | ≥ 3 | phát/s | Bắn loạt |
| D | SP.07 | Thuật toán lọc nhiễu | Có | - | Real-time |

### NGUYÊN LÝ PHÁT HIỆN:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ACOUSTIC IMPACT DETECTION - BIA THÉP TREO XÍCH                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  KHI ĐẠN TRÚNG BIA THÉP:                                                   │
│  ───────────────────────                                                    │
│                                                                             │
│       Đạn ────────────────► [BIA THÉP] ←─── Xích treo                      │
│                                  │                                         │
│                                  ▼                                         │
│                    ┌─────────────────────────┐                             │
│                    │    IMPACT RESPONSE:     │                             │
│                    │                         │                             │
│                    │  1. VA CHẠM → tiếng     │                             │
│                    │     "CLANG" đặc trưng   │                             │
│                    │                         │                             │
│                    │  2. BIA RUNG tự do      │                             │
│                    │     (treo xích)         │                             │
│                    │                         │                             │
│                    │  3. RESONANCE của       │                             │
│                    │     tấm thép            │                             │
│                    └───────────┬─────────────┘                             │
│                                │                                           │
│                                ▼                                           │
│                    [MICROPHONE phía sau bia]                               │
│                                │                                           │
│                                ▼                                           │
│                    [DSP → Detect → Report]                                 │
│                                │                                           │
│                                ▼                                           │
│                    "TRÚNG BIA 7e-1!" hoặc "TRÚNG SỐ 10!"                  │
│                                                                             │
│  ƯU ĐIỂM THIẾT KẾ TREO XÍCH:                                              │
│  ──────────────────────────                                                 │
│  ✅ Bia rung tự do → tín hiệu mạnh hơn                                    │
│  ✅ Resonance kéo dài → dễ phát hiện                                      │
│  ✅ Giảm sốc cho khung → bền hơn                                          │
│  ✅ Đã được chứng minh trong thực tế (hình)                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 12. COMMUNICATION (Truyền thông)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | SC.01 | Tầm truyền không dây | ≥ 500 | m | > 400m bắn |
| D | SC.02 | Tần số | 433 MHz hoặc 2.4 GHz | - | ISM |
| D | SC.03 | Protocol | LoRa hoặc WiFi | - | - |
| D | SC.04 | Số bia đồng thời | ≥ 4 | - | 1 cụm |
| D | SC.05 | Latency tổng | ≤ 500 | ms | Detect → Display |

---

## 13. DISPLAY (Hiển thị)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | SD.01 | Hiển thị bia nào TRÚNG | Có | - | 7e-1, 7e-2, 6c, 10 |
| D | SD.02 | Đếm số mục tiêu trúng | Có | - | 0-4 |
| D | SD.03 | Hiển thị kết quả bài bắn | Có | - | Giỏi/Khá/Đạt/KĐ |
| D | SD.04 | Thời gian bài bắn | Có | - | Timer |
| D | SD.05 | Lưu trữ kết quả | ≥ 100 | bài | History |
| D | SD.06 | Xuất báo cáo | CSV/PDF | - | - |

---

## 14. SCORING CRITERIA (Chấm điểm)

| D/W | ID | Requirement | Value | Notes |
|-----|-----|-------------|-------|-------|
| D | SC.01 | GIỎI | Trúng 3 mục tiêu + có bia số 10 | - |
| D | SC.02 | KHÁ | Trúng 2 mục tiêu + có bia số 10 | - |
| D | SC.03 | ĐẠT | Trúng 1 mục tiêu | - |
| D | SC.04 | KHÔNG ĐẠT | Không trúng | - |
| D | SC.05 | Tự động tính | Có | Software |

---

## 15. ENERGY (Năng lượng)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | E.01 | Thời gian hoạt động | ≥ 8 | giờ | 1 ngày |
| D | E.02 | Loại pin | LiFePO4 / Li-ion | - | Marine |
| D | E.03 | Điện áp | 12 | V DC | - |
| D | E.04 | Dung lượng | ≥ 10 | Ah | - |
| D | E.05 | Công suất tiêu thụ TB | ≤ 8 | W | MCU + RF + Mic |
| D | E.06 | Pin tháo lắp nhanh | ≤ 2 | phút | - |

---

## 16. SAFETY (An toàn)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | SF.01 | IP Rating enclosure | ≥ IP65 | - | Chống nước |
| D | SF.02 | IP Rating microphone | ≥ IP67 | - | Có cover |
| D | SF.03 | Màu phao | International Orange | - | High vis |
| D | SF.04 | Phản quang | Có, 360° | - | Night |
| D | SF.05 | Đèn strobe | Có | - | Warning |
| D | SF.06 | Cờ tín hiệu | Có | - | - |

---

## 17. ENVIRONMENT (Môi trường)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | EN.01 | Nhiệt độ hoạt động | 0 đến +55 | °C | VN |
| D | EN.02 | Độ ẩm | 0-100% RH | - | Marine |
| D | EN.03 | Chống ăn mòn mặn | ≥ 12 | tháng | - |
| D | EN.04 | Chống UV | Có | - | - |

---

## 18. CONTROL STATION (Trạm điều khiển)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | CS.01 | Loại thiết bị | Tablet / Laptop | - | Rugged |
| D | CS.02 | Màn hình | ≥ 10 | inch | - |
| D | CS.03 | IP Rating | ≥ IP54 | - | Splash |
| D | CS.04 | Battery | ≥ 4 | giờ | - |
| D | CS.05 | Hiển thị realtime | Có | - | Hit status |

---

## 19. MAINTENANCE (Bảo trì)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | MT.01 | MTBF | ≥ 500 | giờ | - |
| D | MT.02 | Tuổi thọ mặt bia thép | ≥ 10,000 | phát | Bền |
| D | MT.03 | Thời gian thay bia | ≤ 15 | phút | Tháo xích |
| D | MT.04 | Thời gian thay microphone | ≤ 10 | phút | - |
| D | MT.05 | Self-diagnostic | Có | - | - |
| D | MT.06 | Kiểm tra xích định kỳ | 1 lần/tuần | - | Tránh gỉ/đứt |

---

## 20. COSTS (Chi phí)

| D/W | ID | Requirement | Value | Unit | Notes |
|-----|-----|-------------|-------|------|-------|
| D | CO.01 | Kinh phí R&D | 350.000.000 | VND | - |
| D | CO.02 | Kinh phí prototype | ≤ 150.000.000 | VND | - |
| W | CO.03 | Giá thành sản xuất loạt | ≤ 60.000.000 | VND/bộ | - |

---

## REQUIREMENTS SUMMARY v1.3

| Category | Count | Changes |
|----------|-------|---------|
| Mission Profile | 6 | - |
| Target Types | 7 | Cập nhật bia số 10 |
| Target Dimensions | 6 | Cập nhật kích thước |
| Target Material | 6 | - |
| **Target Mounting** | **8** | **MỚI - Treo xích** |
| **Target Frame** | **7** | **MỚI - Khung thép** |
| Geometry Phao | 7 | Cập nhật kích thước |
| Kinematics | 6 | - |
| Ballistics | 7 | - |
| Acoustic Sensor | 8 | Cập nhật số mic |
| Signal Processing | 7 | - |
| Communication | 5 | - |
| Display | 6 | - |
| Scoring | 5 | - |
| Energy | 6 | - |
| Safety | 6 | - |
| Environment | 4 | - |
| Control Station | 5 | - |
| Maintenance | 6 | Thêm kiểm tra xích |
| Costs | 3 | - |
| **TOTAL** | **121** | +3 so với v1.2 |

---

## CRITICAL REQUIREMENTS v1.3

| ID | Requirement | Value | Rationale |
|----|-------------|-------|-----------|
| **TT.03** | Bia số 10 | "Tên địch bắn trung/đại liên" | Theo tài liệu |
| **TMT.01** | Kiểu gắn bia | TREO BẰNG XÍCH | Theo hình thực tế |
| **TMT.02** | Vị trí các bia | NGANG HÀNG | Yêu cầu mới |
| **TMT.07** | Bia rung tự do | Có | Quan trọng cho acoustic |
| **TM.01** | Vật liệu bia | Thép AR400+ | Không xuyên |
| **AS.01** | Loại sensor | Microphone | Acoustic detection |

---

## TỔNG QUAN HỆ THỐNG

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  BB-01 SYSTEM OVERVIEW v1.3                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                        [KHUNG BIA + BIA THÉP TREO XÍCH]                    │
│                                                                             │
│   ┌════════════════════════════════════════════════════════════════════┐   │
│   ║ ○     ○     ○        ○ ○ ○        ○     ○     ○                    ║   │
│   ║ │     │     │        │ │ │        │     │     │                    ║   │
│   ║ ┌───┐ ┌───┐ ┌───┐   ┌─────────────────┐ ┌───┐ ┌───┐              ║   │
│   ║ │7e │ │7e │ │6c │   │    SỐ 10        │ │6c │ │7e │              ║   │
│   ║ │[M]│ │[M]│ │[M]│   │  [M]    [M]     │ │[M]│ │[M]│              ║   │
│   ║ └───┘ └───┘ └───┘   └─────────────────┘ └───┘ └───┘              ║   │
│   ╚════════════════════════════════════════════════════════════════════╝   │
│              │                                                             │
│              │ [M] = Microphone                                            │
│              │                                                             │
│              ▼                                                             │
│   ┌─────────────────────────────────────┐                                 │
│   │           MCU BOX                    │                                 │
│   │  ┌────────────────────────────┐     │     ┌─────────────────┐         │
│   │  │ • ADC (4-5 channels)      │     │     │   CONTROL       │         │
│   │  │ • DSP Processing          │     │ RF  │   STATION       │         │
│   │  │ • Hit Detection           │◄────┼────►│                 │         │
│   │  │ • LoRa/WiFi Transmitter   │     │     │ ┌─────────────┐ │         │
│   │  └────────────────────────────┘     │     │ │ HIT: 7e-1  │ │         │
│   │  ┌────────────────────────────┐     │     │ │ HIT: số 10 │ │         │
│   │  │ Battery 12V/10Ah          │     │     │ │ MISS: 6c   │ │         │
│   │  │ ≥ 8 giờ hoạt động         │     │     │ │────────────│ │         │
│   │  └────────────────────────────┘     │     │ │ KẾT QUẢ:   │ │         │
│   └─────────────────────────────────────┘     │ │   KHÁ      │ │         │
│                                               │ └─────────────┘ │         │
│                                               └─────────────────┘         │
│                                                     ≥500m                 │
│   ┌─────────────────────────────────────────────────────────────────┐     │
│   │                     PHAO CATAMARAN                               │     │
│   │    ┌──────────┐                           ┌──────────┐           │     │
│   │    │  PHAO 1  │═══════════════════════════│  PHAO 2  │           │     │
│   │    └──────────┘     3.5-4.0m              └──────────┘           │     │
│   │                    Thả nổi tự do                                 │     │
│   └─────────────────────────────────────────────────────────────────┘     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

*Document Version 1.3*
*Steel Targets with Chain Mounting + Acoustic Impact Detection*
*Reference: Actual target frame photo + Military target manual*
*Following Pahl & Beitz Methodology*
