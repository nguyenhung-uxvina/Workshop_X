# ĐỀ ÁN TRANG BỊ
# HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN PHÒNG KHÔNG TRÊN BIỂN CHỐNG UAV VÀ USV

**Đơn vị đề xuất:** Workshop X — Bộ phận Quốc phòng & Huấn luyện
**Số hiệu:** WX-CUAV-SIM-DA-001
**Phiên bản:** 1.0
**Ngày:** 07/04/2026
**Phân loại:** TÀI LIỆU ĐỀ XUẤT — KHÔNG MẬT

---

## MỤC LỤC

1. [Căn cứ và sự cần thiết](#1)
2. [Mục tiêu đề án](#2)
3. [Tổng quan hệ thống](#3)
4. [Dòng sản phẩm — 4 phiên bản](#4)
5. [Cấu hình đề xuất trang bị](#5)
6. [Hiệu quả kinh tế](#6)
7. [Năng lực thực hiện](#7)
8. [Tiến độ thực hiện](#8)
9. [Dự toán kinh phí](#9)
10. [Phương thức triển khai](#10)
11. [Bảo hành, bảo trì và hỗ trợ kỹ thuật](#11)
12. [Kết luận và kiến nghị](#12)
13. [Phụ lục](#13)

---

## 1. CĂN CỨ VÀ SỰ CẦN THIẾT <a name="1"></a>

### 1.1 Căn cứ pháp lý

- Luật Quốc phòng số 22/2018/QH14
- Nghị định về công nghiệp quốc phòng, an ninh và động viên công nghiệp
- Chiến lược phát triển công nghiệp quốc phòng đến năm 2030, tầm nhìn 2045
- Chương trình hiện đại hoá Hải quân Nhân dân Việt Nam giai đoạn 2021-2030
- Kế hoạch huấn luyện phòng không hải quân năm 2026-2027

### 1.2 Tình hình thực tiễn — Mối đe doạ UAV/USV trên biển

Chiến tranh hiện đại đã chứng minh mối đe doạ nghiêm trọng từ thiết bị bay không người lái (UAV) và tàu không người lái (USV) trên biển:

| Sự kiện | Thời gian | Tác động |
|---------|-----------|----------|
| UAV tấn công tàu chiến Nga tại Biển Đen | 2022-2024 | Nhiều tàu chiến bị hư hại nặng bởi drone hải quân |
| USV mang thuốc nổ tấn công cầu Crimea | 10/2022 | Thiệt hại hạ tầng chiến lược bằng phương tiện giá rẻ |
| Houthi tấn công tàu thương mại Biển Đỏ bằng drone | 2023-2024 | Gián đoạn hàng hải quốc tế, nhiều tàu bị trúng |
| Swarm UAV tấn công cơ sở dầu Saudi (Abqaiq) | 09/2019 | 18 drone phá huỷ 50% sản lượng dầu |
| FPV kamikaze phổ biến tại Ukraine | 2023-2024 | Giá $500/chiếc, hiệu quả chiến trường cao |

**Kết luận:** Mối đe doạ UAV/USV đã chuyển từ viễn cảnh sang hiện thực. Mọi lực lượng hải quân đều cần huấn luyện đối phó.

### 1.3 Thực trạng huấn luyện hiện nay

| Vấn đề | Thực trạng | Hệ quả |
|--------|-----------|--------|
| **Không có mục tiêu UAV/USV thực tế để luyện bắn** | Chỉ bắn bia giấy/bia sắt cố định | Xạ thủ chưa bao giờ bắn mục tiêu bay nhỏ, tốc độ cao |
| **Chi phí bắn thật rất cao** | 12.7mm: $250-1.500/giờ; 23mm: $500-3.000/giờ | Số giờ huấn luyện bị giới hạn bởi ngân sách đạn |
| **Không luyện được kỹ năng đặc thù** | Swarm defense, lead angle dưới sóng, phân biệt bạn-thù | Xạ thủ thiếu kỹ năng sống còn khi đối đầu thực tế |
| **Phụ thuộc thời tiết và trường bắn** | Mưa/gió = huỷ buổi tập; lịch trường bắn khan hiếm | Thời gian huấn luyện thực tế < 50% kế hoạch |
| **Không có dữ liệu đánh giá khách quan** | Chấm điểm chủ quan bởi instructor | Không theo dõi được tiến bộ từng xạ thủ |

### 1.4 Sự cần thiết của đề án

Đề án trang bị hệ thống mô phỏng huấn luyện bắn C-UAV/USV nhằm:

1. **Nâng cao năng lực phòng không hải quân** — huấn luyện xạ thủ đối phó UAV/USV trong mọi điều kiện
2. **Tiết kiệm chi phí huấn luyện** — giảm 86-98% chi phí so với bắn thật
3. **Tăng gấp đôi thời lượng huấn luyện** — không phụ thuộc thời tiết, đạn, trường bắn
4. **Huấn luyện các kỹ năng không thể luyện bằng bắn thật** — swarm, mixed attack, ban đêm, phối hợp kíp
5. **Đánh giá năng lực xạ thủ khách quan** — dữ liệu số, theo dõi dài hạn, chấm điểm tự động
6. **Sản xuất trong nước** — chủ động công nghệ, không phụ thuộc nhập khẩu

---

## 2. MỤC TIÊU ĐỀ ÁN <a name="2"></a>

### 2.1 Mục tiêu tổng quát

Trang bị hệ thống mô phỏng huấn luyện bắn phòng không chống UAV/USV cho các đơn vị hải quân, bộ đội biên phòng, và lực lượng phòng thủ bờ biển, đảo, nhà giàn.

### 2.2 Mục tiêu cụ thể

| # | Mục tiêu | Chỉ tiêu | Thời hạn |
|---|----------|---------|----------|
| 1 | Sản xuất và bàn giao đợt 1 | ≥ 1 hệ thống LITE demo | T+12 tháng |
| 2 | Triển khai tại đơn vị huấn luyện | ≥ 3 hệ thống (LITE + FIXED) | T+18 tháng |
| 3 | Nâng cao năng lực xạ thủ | ≥ 20% cải thiện chính xác bắn thật sau 40h mô phỏng | T+24 tháng |
| 4 | Tiết kiệm chi phí huấn luyện | ≥ 60% giảm chi phí/giờ so với bắn thật | T+12 tháng |
| 5 | Trang bị diện rộng | ≥ 10 hệ thống toàn quân chủng | T+36 tháng |
| 6 | Triển khai CORTEX liên quân | ≥ 1 cụm phối hợp (tàu + đảo + sở chỉ huy) | T+48 tháng |

---

## 3. TỔNG QUAN HỆ THỐNG <a name="3"></a>

### 3.1 Nguyên lý hoạt động

Hệ thống sử dụng công nghệ mô phỏng 3D thời gian thực kết hợp với bệ vũ khí mô phỏng kích thước thật để tạo môi trường huấn luyện bắn UAV/USV hoàn chỉnh.

```
┌──────────────────────────────────────────────────────────────────┐
│               NGUYÊN LÝ HOẠT ĐỘNG                                │
│                                                                    │
│   XẠ THỦ đứng tại BỆ VŨ KHÍ MÔ PHỎNG (kích thước, trọng lượng  │
│   giống súng thật) → ngắm và bắn vào MỤC TIÊU 3D chiếu trên    │
│   MÀN HÌNH CONG 180°-360° → hệ thống tính toán ĐẠN ĐẠO 6DOF   │
│   (trọng lực, sức cản, gió, chuyển động tàu) → xác định         │
│   TRÚNG/TRƯỢT → chấm điểm tự động → phát lại 3D sau buổi tập   │
│                                                                    │
│   GHẾ MOTION mô phỏng chuyển động tàu (sóng biển Sea State 1-4) │
│   ÂM THANH 5.1/7.1 surround mô phỏng tiếng súng, UAV, sóng     │
│   MỤC TIÊU AI: UAV bay đa dạng, USV tốc độ cao, swarm 4-50     │
└──────────────────────────────────────────────────────────────────┘
```

### 3.2 Đặc điểm nổi bật

| # | Đặc điểm | Mô tả |
|---|----------|-------|
| 1 | **Vũ khí mô đun thay nhanh** | 5 loại vũ khí (12.7mm, 14.5mm, 23mm, 7.62mm) thay đổi trong < 5 phút, hệ thống tự nhận biết qua chip NFC |
| 2 | **Đạn đạo 6DOF chính xác** | Sai số ≤ 5% so với bảng bắn thực, tính đến gió, chuyển động tàu |
| 3 | **Mục tiêu AI thông minh** | UAV/USV bay né, bầy đàn 4-50 chiếc, hỗn hợp UAV+USV đồng thời |
| 4 | **Phát lại 3D sau buổi tập (AAR)** | Xem lại mọi phát bắn từ mọi góc, phân tích lỗi chi tiết |
| 5 | **Chấm điểm 5 kỹ năng tự động** | Phát hiện, bám mục tiêu, góc hướng, kiểm soát loạt bắn, ưu tiên mục tiêu |
| 6 | **Hồ sơ xạ thủ số** | Theo dõi tiến bộ cá nhân qua thời gian, so sánh, xếp hạng |
| 7 | **Sản xuất tại Việt Nam** | ≥ 85% linh kiện nội địa hoặc COTS có sẵn, Workshop X tự sản xuất |
| 8 | **4 phiên bản cho mọi quy mô** | Từ xuồng nhỏ → đảo/nhà giàn → tàu chiến → phối hợp liên quân |

### 3.3 Vũ khí mô phỏng (5 loại)

| Mô đun | Vũ khí | Cỡ đạn | Giai đoạn |
|--------|--------|--------|-----------|
| WM-01 | DSHK | 12.7×108mm | Giao cùng hệ thống |
| WM-02 | NSV | 12.7×108mm | Giao cùng hệ thống |
| WM-03 | KPVT | 14.5×114mm | Mua thêm |
| WM-04 | ZU-23-2 | 23×152mm | Mua thêm |
| WM-05 | PKM | 7.62×54R | Tuỳ chọn |

---

## 4. DÒNG SẢN PHẨM — 4 PHIÊN BẢN <a name="4"></a>

### 4.1 Tổng quan

Tất cả 4 phiên bản đều huấn luyện **bắn chống UAV và USV**, phân biệt theo **quy mô tác chiến**:

```
                        COMMON PLATFORM
                   (Vũ khí mô đun, đạn đạo 6DOF,
                    Unity 3D, chấm điểm, AAR)
                            │
         ┌──────────┬───────┴───────┬──────────┐
         │          │               │          │
    ┌────┴────┐ ┌───┴────┐   ┌─────┴────┐ ┌───┴─────┐
    │  LITE   │ │ FIXED  │   │  FULL    │ │ CORTEX  │
    │  PA-2   │ │ PA-8   │   │  PA-6    │ │ PA-9    │
    │         │ │        │   │          │ │         │
    │ Xuồng  │ │Đảo/Giàn│   │Tàu chiến│ │Liên quân│
    │ 1 xạ thủ│ │2 xạ thủ│   │2-3 xạ thủ│ │Multi-node│
    │ 180°   │ │ 240°   │   │ 360°    │ │ WAN     │
    │ Motion │ │No motion│   │Shared   │ │ C2 Hub  │
    │        │ │        │   │deck     │ │         │
    │$50-70K │ │$55-80K │   │$120-200K│ │ $300K+  │
    └────────┘ └────────┘   └─────────┘ └─────────┘
```

### 4.2 LITE (PA-2) — Huấn luyện xạ thủ trên xuồng nhỏ

**Đối tượng:** Xạ thủ súng máy trên xuồng tuần tra, tàu nhỏ
**Lắp đặt:** Phòng huấn luyện 6×8m, trong nhà

| Hạng mục | Thông số |
|----------|----------|
| Vị trí bắn | 1 |
| Xạ thủ | 1 |
| Góc nhìn | 180° (3 máy chiếu) |
| Chuyển động | 2 bậc tự do (lắc ngang ±12°, lắc dọc ±8°) — mô phỏng sóng xuồng |
| Vũ khí | Mô đun thay nhanh 5 loại (NFC tự nhận biết) |
| Mục tiêu | 4-8 UAV/USV đồng thời |
| Kịch bản | ≥ 10 kịch bản sẵn, tạo mới ≤ 15 phút |
| Diện tích | 48 m² (6×8m) |
| Điện | 220V, ~2 kW |
| **Giá tham khảo** | **50.000 — 70.000 USD/bộ** |

### 4.3 FIXED (PA-8) — Phòng thủ đảo, nhà giàn, cảng

**Đối tượng:** Kíp bắn phòng thủ đảo Trường Sa, nhà giàn DK1, cảng quân sự
**Lắp đặt:** Phòng huấn luyện 8×8m, trong nhà

| Hạng mục | Thông số |
|----------|----------|
| Vị trí bắn | 2 (phòng thủ 2 hướng) |
| Xạ thủ | 2 + chỉ huy kíp |
| Góc nhìn | 240° (4 máy chiếu) |
| Chuyển động | Không (cơ sở cố định — đảo/nhà giàn không lắc) |
| Kịch bản đặc thù | Phòng thủ đảo, FPV tấn công nhà giàn, USV tiếp cận cảng |
| Cảnh 3D | 5 presets: Đảo Trường Sa, đảo đá, nhà giàn DK1, cảng quân sự, cảng dân sự |
| Chấm điểm | Phối hợp kíp + hiệu quả phòng thủ |
| Diện tích | 64 m² (8×8m) |
| **Giá tham khảo** | **55.000 — 80.000 USD/bộ** |

### 4.4 FULL (PA-6) — Kíp bắn tàu chiến

**Đối tượng:** Kíp bắn phòng không trên tàu chiến, tàu tuần tra lớn
**Lắp đặt:** Phòng huấn luyện 10×10m, trong nhà

| Hạng mục | Thông số |
|----------|----------|
| Vị trí bắn | 2-3 (mũi + lái trái + lái phải) |
| Xạ thủ | 2-3 + chỉ huy kíp |
| Góc nhìn | 360° (6 máy chiếu, màn hình trụ Ø8m) |
| Chuyển động | Sàn chung 3×4m — tất cả xạ thủ trên cùng sàn, cảm nhận cùng sóng |
| Kịch bản đặc thù | Phối hợp kíp, phân vùng bắn, handoff mục tiêu, swarm 12-20 chiếc |
| Điểm khác biệt | **Sàn chuyển động chung** — không đối thủ nào có ở tầm giá này |
| Chấm điểm | Cá nhân + phối hợp kíp + phạt friendly fire |
| Diện tích | 100 m² (10×10m) |
| **Giá tham khảo** | **120.000 — 200.000 USD/bộ** |

### 4.5 CORTEX (PA-9) — Phối hợp liên quân

**Đối tượng:** Huấn luyện phối hợp phòng thủ liên quân (tàu + đảo + sở chỉ huy)
**Lắp đặt:** Nhiều vị trí kết nối qua mạng WAN mã hoá

| Hạng mục | Thông số |
|----------|----------|
| Cấu hình | Nhiều node (LITE + FIXED + FULL) kết nối vào Sở chỉ huy C2 |
| Không gian chiến | Chung — mục tiêu bị tiêu diệt tại node A biến mất tại node B |
| Bầy đàn | 20-50 mục tiêu đồng thời (UAV + USV) |
| Chỉ huy | Sở chỉ huy phân bổ mục tiêu, sector, lực lượng |
| Chấm điểm | Cá nhân + kíp + node + **hiệu quả liên quân** |
| Kịch bản | Phòng thủ phối hợp 2 đảo, tàu bảo vệ đảo, tấn công bão hoà cảng |
| Mạng | WAN mã hoá (VPN/VSAT/cáp quang), đồng bộ ≤ 100ms |
| **Giá tham khảo** | **300.000 — 415.000 USD/cụm** |

### 4.6 So sánh 4 phiên bản

| Hạng mục | LITE | FIXED | FULL | CORTEX |
|----------|:----:|:-----:|:----:|:------:|
| Quy mô | Xuồng | Đảo/Giàn/Cảng | Tàu chiến | Liên quân |
| Vị trí bắn | 1 | 2 | 2-3 | N node |
| Góc nhìn | 180° | 240° | 360° | Theo node |
| Chuyển động | Có (xuồng) | Không (cố định) | Có (tàu, sàn chung) | Theo node |
| Mục tiêu đồng thời | 4-8 | 8-12 | 12-20 | 20-50 |
| Chấm điểm | Cá nhân | Kíp 2 người | Kíp 2-3 người | Liên quân |
| Diện tích | 6×8m | 8×8m | 10×10m | Multi-site |
| **Giá (USD)** | **50-70K** | **55-80K** | **120-200K** | **300-415K** |

---

## 5. CẤU HÌNH ĐỀ XUẤT TRANG BỊ <a name="5"></a>

### 5.1 Phương án A — Trang bị cơ bản (Giai đoạn 1)

**Đối tượng:** 1 Lữ đoàn Hải quân + 1 cụm đảo Trường Sa
**Thời gian:** 12-18 tháng

| # | Hệ thống | Số lượng | Đơn giá (USD) | Thành tiền (USD) | Nơi lắp đặt |
|---|----------|:--------:|:-------------:|:-----------------:|-------------|
| 1 | LITE (PA-2) | 2 | 60.000 | 120.000 | Căn cứ huấn luyện Lữ đoàn |
| 2 | FIXED (PA-8) | 1 | 70.000 | 70.000 | Trung tâm HL đảo/nhà giàn |
| 3 | Mô đun WM-03 KPVT | 3 | 3.000 | 9.000 | Kèm theo hệ thống |
| 4 | Mô đun WM-04 ZU-23-2 | 2 | 3.500 | 7.000 | Kèm theo hệ thống |
| 5 | Gói cập nhật kịch bản năm 1 | 3 | 3.000 | 9.000 | Toàn bộ |
| | **TỔNG PHƯƠNG ÁN A** | | | **215.000** | |

### 5.2 Phương án B — Trang bị mở rộng (Giai đoạn 1-2)

**Đối tượng:** 2 Lữ đoàn + 2 cụm đảo + 1 Trung tâm HL Hải quân
**Thời gian:** 18-30 tháng

| # | Hệ thống | SL | Đơn giá | Thành tiền | Nơi lắp đặt |
|---|----------|:--:|:-------:|:----------:|-------------|
| 1 | LITE (PA-2) | 4 | 60.000 | 240.000 | 2 Lữ đoàn × 2 bộ |
| 2 | FIXED (PA-8) | 2 | 70.000 | 140.000 | 2 cụm đảo |
| 3 | FULL (PA-6) 2-station | 1 | 135.000 | 135.000 | Trung tâm HL Hải quân |
| 4 | Mô đun vũ khí bổ sung | 10 | 3.200 | 32.000 | Phân bổ theo đơn vị |
| 5 | Gói cập nhật kịch bản × 2 năm | 7 | 3.000 | 42.000 | Toàn bộ (2 năm) |
| 6 | Đào tạo instructor nâng cao | 3 khoá | 5.000 | 15.000 | Tại WX + đơn vị |
| | **TỔNG PHƯƠNG ÁN B** | | | **604.000** | |

### 5.3 Phương án C — Trang bị toàn diện (Giai đoạn 1-3)

**Đối tượng:** Toàn Quân chủng Hải quân + Bộ đội Biên phòng ven biển
**Thời gian:** 24-48 tháng

| # | Hệ thống | SL | Đơn giá | Thành tiền | Nơi lắp đặt |
|---|----------|:--:|:-------:|:----------:|-------------|
| 1 | LITE (PA-2) | 8 | 55.000 | 440.000 | 4 Lữ đoàn × 2 + BĐBP |
| 2 | FIXED (PA-8) | 4 | 65.000 | 260.000 | 4 cụm đảo/cảng |
| 3 | FULL (PA-6) 3-station | 2 | 175.000 | 350.000 | 2 TT Huấn luyện |
| 4 | CORTEX (PA-9) 1 cụm | 1 | 350.000 | 350.000 | 1 FULL + 2 FIXED + C2 Hub |
| 5 | Mô đun vũ khí bổ sung | 20 | 3.000 | 60.000 | Phân bổ |
| 6 | Gói cập nhật × 3 năm | 14 | 3.000 | 126.000 | Toàn bộ (3 năm) |
| 7 | Đào tạo + chuyển giao CN | 1 gói | 30.000 | 30.000 | Đơn vị tự bảo trì |
| | **TỔNG PHƯƠNG ÁN C** | | | **1.616.000** | |
| | *Chiết khấu số lượng (5%)* | | | *-80.800* | |
| | **TỔNG SAU CHIẾT KHẤU** | | | **1.535.200** | |

---

## 6. HIỆU QUẢ KINH TẾ <a name="6"></a>

### 6.1 So sánh chi phí huấn luyện

| Phương thức | Chi phí/giờ | Đạn tiêu thụ | Hạn chế |
|-------------|:-----------:|:------------:|---------|
| Bắn thật 12.7mm | $510/giờ | 200 viên/giờ | Trường bắn, thời tiết, đạn hạn chế |
| Bắn thật 23mm | $1.500/giờ | 100 viên/giờ | Cực kỳ tốn kém, cơ hội ít |
| **Mô phỏng** | **≤ $5/giờ** | **0 viên** | **Không hạn chế, mọi điều kiện** |
| **Tiết kiệm** | **98-99%** | **100%** | |

### 6.2 Phân tích hoàn vốn (ROI) — Phương án A

| Năm | Chi phí mô phỏng | Chi phí bắn thật (nếu không có sim) | Tiết kiệm | Luỹ kế |
|:---:|:-----------------:|:------------------------------------:|:---------:|:------:|
| 0 | $215.000 (đầu tư) | $0 | -$215.000 | -$215.000 |
| 1 | $9.000 (bảo trì) | $306.000 (600h × $510/h) | +$297.000 | +$82.000 |
| 2 | $9.000 | $306.000 | +$297.000 | +$379.000 |
| 3 | $15.000 (bảo trì + update) | $306.000 | +$291.000 | +$670.000 |

**Hoàn vốn trong < 9 tháng.** Sau 3 năm, tiết kiệm ròng ~$670.000.

### 6.3 Khả năng huấn luyện không thể đạt được bằng bắn thật

| Khả năng | Bắn thật | Mô phỏng | Giá trị |
|----------|:--------:|:--------:|---------|
| Bắn bầy đàn 4-50 drone đồng thời | ❌ | ✅ | **Không thể thay thế** |
| Bắn hỗn hợp UAV + USV cùng lúc | ❌ | ✅ | **Không thể thay thế** |
| Luyện bắn ban đêm/sương mù | ❌ (huỷ do thời tiết) | ✅ | **Không thể thay thế** |
| Phát lại 3D phân tích lỗi | ❌ | ✅ | Tăng hiệu quả học ×2-3 |
| Phối hợp kíp bắn (FULL) | ❌ (cần ra khơi) | ✅ | Tiết kiệm chi phí tàu |
| Phối hợp liên quân (CORTEX) | ❌ (cần diễn tập lớn) | ✅ | Tiết kiệm $50.000+/cuộc |
| Luyện phân biệt bạn-thù | ❌ (nguy hiểm) | ✅ | An toàn 100% |

---

## 7. NĂNG LỰC THỰC HIỆN <a name="7"></a>

### 7.1 Đơn vị thực hiện

**Workshop X** — đơn vị nghiên cứu, thiết kế và sản xuất thiết bị quốc phòng tại Việt Nam.

### 7.2 Năng lực kỹ thuật

| Lĩnh vực | Năng lực | Minh chứng |
|-----------|---------|-----------|
| Cơ khí chính xác | CNC gia công nhôm 6061, hàn thép | Bệ vũ khí mô phỏng 12.7mm |
| Điện tử nhúng | ESP32, driver động cơ, NFC | Motion platform controller |
| Phần mềm mô phỏng | Unity 6 HDRP, V-SMASH ballistic engine | Đạn đạo 6DOF đã validate ≤5% |
| Thiết kế hệ thống | Pahl-Beitz systematic design | Quy trình chuẩn quốc tế |
| Tích hợp hệ thống | Multi-subsystem integration | VN-12.7MM-SIM (sản phẩm liên quan) |

### 7.3 Sản phẩm liên quan (synergy)

| Sản phẩm | Liên quan | Tái sử dụng |
|-----------|----------|------------|
| VN-12.7MM-SIM | Weapon station hardware | 100% module vũ khí |
| V-SMASH | Động cơ đạn đạo 6DOF | 100% ballistic engine |
| BB-01 LOMAH | Acoustic hit detection | Công nghệ cho live-sim hybrid |

### 7.4 Tỷ lệ nội địa hoá

| Hạng mục | Nguồn | Tỷ lệ |
|----------|-------|:-----:|
| Bệ vũ khí CNC | **Workshop X tự sản xuất** | 100% |
| Khung kết cấu thép | Gia công tại VN | 100% |
| Màn hình cong | Tự chế tại WX | 100% |
| Phần mềm | **Workshop X tự phát triển** | 100% |
| Encoder, cảm biến | Nhập COTS (không hạn chế xuất khẩu) | 0% |
| GPU, máy chiếu | Nhập COTS (có sẵn tại VN) | 0% |
| **Tổng nội địa hoá** | | **≥ 85%** |

---

## 8. TIẾN ĐỘ THỰC HIỆN <a name="8"></a>

### 8.1 Phương án A — Lộ trình 18 tháng

```
THÁNG   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
        │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │   │
LITE    ├───────── Thiết kế chi tiết ──────────┤
        │                          ├── Chế tạo prototype ──┤
        │                                         ├── Thử nghiệm Lab ──┤
        │                                                    ├── Demo ──┤
        │                                                         ├── SX 2 bộ ──┤
        │                                                              ├── Bàn giao ──┤
        │
FIXED   │                   ├──── Thiết kế (từ LITE) ──────┤
        │                                         ├── Chế tạo ──────┤
        │                                                    ├── Thử nghiệm ──┤
        │                                                              ├── Bàn giao ┤
        │
VALIDATE│                                    ├── Thử nghiệm tại đơn vị (6 tuần) ──┤
        │                                    │   20 xạ thủ, so sánh sim vs live fire
        │
MỐCQT   ★ Ký HĐ        ★ Prototype      ★ Demo        ★ Bàn giao LITE    ★ BG FIXED
        T+0              T+8              T+10           T+14               T+18
```

### 8.2 Mốc quan trọng

| Mốc | Thời điểm | Nội dung | Điều kiện |
|-----|:---------:|---------|----------|
| M1 | T+0 | Ký hợp đồng, tạm ứng đợt 1 | Phê duyệt đề án |
| M2 | T+4 | Hoàn thành thiết kế chi tiết, duyệt BOM | Nghiệm thu thiết kế |
| M3 | T+8 | Prototype LITE hoàn thành | Thử nghiệm nội bộ PASS |
| M4 | T+10 | Demo cho chủ đầu tư | Nghiệm thu tính năng |
| M5 | T+14 | Bàn giao 2 bộ LITE | Nghiệm thu tại đơn vị |
| M6 | T+16 | Kết quả thử nghiệm training transfer | Báo cáo khoa học |
| M7 | T+18 | Bàn giao 1 bộ FIXED | Hoàn thành đợt 1 |

---

## 9. DỰ TOÁN KINH PHÍ <a name="9"></a>

### 9.1 Chi tiết theo phương án A

| # | Hạng mục | Kinh phí (USD) | Tỷ lệ |
|---|----------|:--------------:|:------:|
| 1 | Thiết bị LITE × 2 bộ (bao gồm WM-01 + WM-02) | 120.000 | 47% |
| 2 | Thiết bị FIXED × 1 bộ (bao gồm WM-01 + WM-02) | 70.000 | 28% |
| 3 | Mô đun vũ khí bổ sung (3 KPVT + 2 ZU-23-2) | 16.000 | 6% |
| 4 | Đào tạo instructor (2 khoá × 5 ngày) | 8.000 | 3% |
| 5 | Đào tạo kỹ thuật viên bảo trì (1 khoá × 5 ngày) | 5.000 | 2% |
| 6 | Lắp đặt và hiệu chỉnh tại đơn vị | 6.000 | 2% |
| 7 | Tài liệu kỹ thuật + hướng dẫn sử dụng | 3.000 | 1% |
| 8 | Gói cập nhật kịch bản năm 1 (3 hệ thống) | 9.000 | 4% |
| 9 | Bảo hành 24 tháng (bao gồm trong giá) | 0 | 0% |
| 10 | Dự phòng (5%) | 11.850 | 5% |
| | **TỔNG PHƯƠNG ÁN A** | **248.850** | **100%** |

### 9.2 Thanh toán theo tiến độ

| Đợt | Thời điểm | Tỷ lệ | Kinh phí (USD) | Điều kiện |
|:---:|:---------:|:-----:|:--------------:|----------|
| 1 | Ký hợp đồng | 30% | 74.655 | Ký HĐ |
| 2 | Nghiệm thu thiết kế | 20% | 49.770 | Duyệt BOM + thiết kế |
| 3 | Demo prototype | 20% | 49.770 | Demo PASS |
| 4 | Bàn giao LITE | 20% | 49.770 | Nghiệm thu tại đơn vị |
| 5 | Bàn giao FIXED + hoàn thành | 10% | 24.885 | Nghiệm thu cuối |

---

## 10. PHƯƠNG THỨC TRIỂN KHAI <a name="10"></a>

### 10.1 Quy trình nghiệm thu

| Bước | Nội dung | Phương pháp | Tiêu chí đạt |
|:----:|----------|------------|--------------|
| 1 | Kiểm tra ngoại quan | Kiểm tra trực quan | Đúng kích thước, hoàn thiện, đầy đủ |
| 2 | Kiểm tra tính năng kỹ thuật | Theo TNKCT | ≥ 95% chỉ tiêu đạt yêu cầu |
| 3 | Kiểm tra đạn đạo | So sánh với bảng bắn TM | Sai số ≤ 5% tại 100-1500m |
| 4 | Kiểm tra chuyển động | Đo biên độ, tần số | ±0.5° so với chỉ lệnh |
| 5 | Kiểm tra độ trễ | Camera tốc độ cao | ≤ 50ms (cò → hình ảnh) |
| 6 | Vận hành liên tục 8h | Burn-in test | Không lỗi, không restart |
| 7 | Thử nghiệm với xạ thủ | 5-10 xạ thủ × 2 buổi | Phản hồi tích cực ≥ 4/5 |
| 8 | Đào tạo instructor | 2 ngày | Instructor vận hành độc lập |

### 10.2 Lắp đặt tại đơn vị

| Bước | Nội dung | Thời gian | Nhân lực |
|:----:|----------|:---------:|:--------:|
| 1 | Khảo sát phòng lắp đặt | 1 ngày | 2 KS WX |
| 2 | Chuẩn bị phòng (điện, sơn tối, điều hoà) | 3-5 ngày | Đơn vị |
| 3 | Vận chuyển thiết bị | 1-2 ngày | WX + đơn vị |
| 4 | Lắp ráp + hiệu chỉnh | 1-2 ngày | 2 KS WX |
| 5 | Nghiệm thu tại chỗ | 1 ngày | Hội đồng |
| 6 | Đào tạo instructor | 2 ngày | 1 KS WX |
| 7 | Bàn giao vận hành | 0,5 ngày | Ký biên bản |

---

## 11. BẢO HÀNH, BẢO TRÌ VÀ HỖ TRỢ KỸ THUẬT <a name="11"></a>

| Hạng mục | Nội dung |
|----------|---------|
| **Bảo hành** | 24 tháng kể từ ngày bàn giao (bao gồm trong giá) |
| **Phạm vi bảo hành** | Toàn bộ lỗi do nhà sản xuất (phần cứng + phần mềm) |
| **Thời gian phản hồi** | ≤ 24 giờ (qua điện thoại/VPN) |
| **Thời gian sửa chữa** | ≤ 72 giờ (có phụ tùng) |
| **Phụ tùng thay thế** | 100% có sẵn tại VN hoặc giao trong ≤ 7 ngày |
| **Cập nhật phần mềm** | 1 lần/năm (kịch bản mới, hành vi mục tiêu mới) |
| **Bảo trì định kỳ** | ≤ 2 giờ/tháng theo checklist |
| **Đào tạo bảo trì** | 3 ngày cho kỹ thuật viên đơn vị → tự bảo trì cơ bản |
| **Hỗ trợ từ xa** | VPN remote diagnostics (tuỳ chọn) |
| **Hợp đồng bảo trì hàng năm (sau bảo hành)** | ≤ 5% giá bán/năm (~$3.000-3.500) |

---

## 12. KẾT LUẬN VÀ KIẾN NGHỊ <a name="12"></a>

### 12.1 Kết luận

1. **Mối đe doạ UAV/USV là thực tế và cấp bách** — các cuộc xung đột gần đây chứng minh rõ ràng
2. **Huấn luyện bằng bắn thật không đáp ứng được** — chi phí quá cao, không luyện được kỹ năng đặc thù (swarm, hỗn hợp, ban đêm)
3. **Hệ thống mô phỏng là giải pháp duy nhất** để huấn luyện đầy đủ kỹ năng chống UAV/USV với chi phí hợp lý
4. **Workshop X có đầy đủ năng lực** thiết kế, sản xuất và triển khai hệ thống này tại Việt Nam
5. **Hoàn vốn < 9 tháng** — tiết kiệm 86-98% chi phí huấn luyện so với bắn thật
6. **4 phiên bản phủ mọi quy mô** — từ xuồng nhỏ đến phối hợp liên quân

### 12.2 Kiến nghị

1. **Phê duyệt Phương án A** (3 hệ thống: 2 LITE + 1 FIXED, tổng $248.850) làm giai đoạn 1 để đánh giá hiệu quả thực tế
2. **Bố trí kinh phí** trong kế hoạch ngân sách huấn luyện năm 2026-2027
3. **Chỉ định đơn vị thử nghiệm** — 1 Lữ đoàn + 1 cụm đảo làm đơn vị pilot
4. **Phân bổ 20 xạ thủ × 6 tuần** cho chương trình đánh giá hiệu quả huấn luyện (so sánh sim vs bắn thật)
5. **Xem xét mở rộng** sang Phương án B hoặc C sau khi đánh giá kết quả giai đoạn 1

---

## 13. PHỤ LỤC <a name="13"></a>

### Phụ lục A — Danh mục tài liệu kỹ thuật kèm theo

| # | Tài liệu | Mã số |
|---|----------|-------|
| 1 | Tính năng kỹ chiến thuật LITE (PA-2) | WX-CUAV-SIM-TNKCT-PA2 v1.1 |
| 2 | Tính năng kỹ chiến thuật FIXED (PA-8) | WX-CUAV-SIM-TNKCT-PA8 v1.0 |
| 3 | Tính năng kỹ chiến thuật FULL (PA-6) | WX-CUAV-SIM-TNKCT-PA6 v1.0 |
| 4 | Tính năng kỹ chiến thuật CORTEX (PA-9) | WX-CUAV-SIM-TNKCT-PA9 v1.0 |
| 5 | Concept Description — 4 phiên bản | Xem tài liệu riêng |
| 6 | Kiến trúc dòng sản phẩm | Product Line Architecture v1.2 |

### Phụ lục B — Bảng giá mô đun vũ khí bổ sung

| Mô đun | Vũ khí | Cỡ đạn | Đơn giá (USD) |
|--------|--------|--------|:-------------:|
| WM-03 | KPVT | 14.5mm | 3.000 |
| WM-04 | ZU-23-2 | 23mm | 3.500 |
| WM-05 | PKM | 7.62mm | 2.500 |

### Phụ lục C — Yêu cầu phòng lắp đặt

| Phiên bản | Diện tích tối thiểu | Trần | Điện | Điều hoà | Sơn tường |
|-----------|:-------------------:|:----:|:----:|:--------:|:---------:|
| LITE | 6 × 8m | ≥ 3m | 220V/20A | Có | Tối (giảm phản xạ) |
| FIXED | 8 × 8m | ≥ 3m | 220V/20A | Có | Tối |
| FULL | 10 × 10m | ≥ 3.5m | 220V/30A | Có | Tối |

---

**Đơn vị lập đề án**

Workshop X — Bộ phận Quốc phòng & Huấn luyện

**Ngày:** 07/04/2026

---

*Tài liệu này là đề xuất sơ bộ. Các thông số kỹ thuật chi tiết xem tại tài liệu TNKCT kèm theo. Giá tham khảo có thể thay đổi theo cấu hình cụ thể và số lượng đặt hàng.*
