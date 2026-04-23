---
project: V-SMASH-M
phase: 0
type: tactical-technical-performance-spec
artifact: TNKCT
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
classification: KHÔNG MẬT (UNCLASSIFIED)
language: Vietnamese primary / English technical terms
inputs:
  - V-SMASH-M_Product_Proposal_v1.0.md (P11)
  - V-SMASH-M_ODI_Report_v1.0.md (P28)
  - V-SMASH-M_B1_YCKT_v1.0.md (B1 — 78 requirements)
---

# BẢN TÍNH NĂNG KỸ CHIẾN THUẬT
# V-SMASH-M — Kính Ngắm Vũ Khí AI Thu Nhỏ (Micro AI Weapon Sight)

> **Mục đích tài liệu:** Mô tả tính năng kỹ thuật và chiến thuật của sản phẩm phục vụ Hội đồng KH&CN xem xét, phê duyệt đề án phát triển.
>
> **Tài liệu tham chiếu:** B1 Yêu cầu Kỹ thuật (V-SMASH-M_B1_YCKT_v1.0.md) — chi tiết kỹ thuật đầy đủ 78 yêu cầu.

---

## I. THÔNG TIN CHUNG

| Mục | Nội dung |
|-----|---------|
| **Tên sản phẩm** | V-SMASH-M (Micro AI Weapon Sight) — Kính ngắm vũ khí AI thu nhỏ |
| **Mã sản phẩm** | VM-0000 |
| **Phân loại** | Khí tài quang — điện tử hỗ trợ ngắm bắn (Electro-optical aiming aid) |
| **Đơn vị phát triển** | Workshop X (WX), Hà Nội |
| **Đơn vị sử dụng** | Lục quân — các đơn vị bộ binh (Infantry battalions) |
| **Phân loại bảo mật** | KHÔNG MẬT |
| **Vị trí trong họ sản phẩm** | Entry-level — dưới V-SMASH-L (LITE). AI fire control tối thiểu khả thi. |

### Mô tả sản phẩm

Thiết bị hỗ trợ ngắm bắn AI dạng clip-on, lắp trên thanh ray Picatinny (MIL-STD-1913) của vũ khí bộ binh, dùng cho nhiệm vụ phòng không tầm thấp chống thiết bị bay không người lái cỡ nhỏ (C-UAS).

**Nguyên lý hoạt động:** Phát hiện mục tiêu drone bằng AI (YOLOv8-nano), tính toán đạn đạo, hiển thị chỉ thị ngắm (lead indicator) trên màn OLED — xạ thủ "theo chấm mà bắn" ("follow the dot").

**Đặc trưng quan trọng:**
- **KHÔNG** có khả năng tự động bắn (no autonomous fire capability)
- **KHÔNG** kết nối điện với cơ cấu cò súng
- Quyết định khai hỏa **hoàn toàn thuộc về xạ thủ** theo quy tắc giao chiến (ROE)

---

## II. ĐẶC TÍNH CHIẾN THUẬT

### II.1 — Nhiệm vụ chiến thuật

| Mục | Mô tả |
|-----|-------|
| **Nhiệm vụ chính** | Phòng không tầm thấp: bắn chặn thiết bị bay không người lái cỡ nhỏ (drone, sải cánh ≥30 cm) bằng hỏa lực bộ binh |
| **Nhiệm vụ phụ** | Cảnh giới/nhận diện mối đe dọa trên không — phát hiện, phân loại, cảnh báo cho xạ thủ |
| **Tình huống sử dụng** | Tuần tra, chốt kiểm soát, phòng thủ căn cứ, cơ động hành quân |
| **Phương thức tác chiến** | Cá nhân — mỗi xạ thủ mang 1 V-SMASH-M trên vũ khí cá nhân; hoặc tổ 3 người (1 phát hiện + 2 bắn) |

### II.2 — Ưu thế chiến thuật

| # | Ưu thế | So với hiện tại (không có V-M) |
|---|--------|-------------------------------|
| 1 | **Rút ngắn thời gian phản ứng** | AI phát hiện + tính toán lead trong ≤150 ms vs ước lượng bằng mắt (không hiệu quả ở cự ly >100 m) |
| 2 | **Trang bị đại trà** | Giá thành ≤$500/chiếc cho phép trang bị cấp tiểu đội (12 chiếc/tiểu đội) vs vũ khí phòng không chuyên dụng chỉ trang bị cấp đại đội |
| 3 | **Không cần huấn luyện chuyên sâu** | ≤2 giờ huấn luyện, bất kỳ xạ thủ nào sử dụng được — không cần kíp chuyên trách C-UAS |
| 4 | **Tương thích vũ khí hiện có** | Lắp trên bất kỳ vũ khí có ray Picatinny — AK-MSR, M16/M4, RPK — không cần vũ khí mới |
| 5 | **Nhẹ, không ảnh hưởng cơ động** | ≤0,5 kg — không gây mất thăng bằng súng, mang thêm không gánh nặng hành quân |
| 6 | **Hiệu ứng mạng lưới (tùy chọn)** | BLE kết nối IRONMESH — dữ liệu giao chiến từ 1.000+ V-M cải thiện AI toàn bộ họ V-SMASH |

### II.3 — Cách thức sử dụng chiến thuật

```
PHÁT HIỆN → NHẬN DIỆN → CHUẨN BỊ → XÁC NHẬN → BẮN → QUAN SÁT
   │            │           │           │          │        │
   AI          AI          AI          Xạ thủ    Xạ thủ   AI+Xạ thủ
  phát       phân       tính toán    kiểm tra   khai     tiếp tục
  hiện       loại       đạn đạo,    độ tin     hỏa      bám, xạ thủ
  drone      drone/     hiển thị    cậy        (manual   quan sát
             chim/      lead        (XANH/     trigger)  kết quả
             khác       indicator   VÀNG/ĐỎ)
```

**Lưu ý quan trọng:** V-SMASH-M KHÔNG thay thế hệ thống phòng không; nó bổ sung năng lực C-UAS cho bộ binh ở tầm gần (≤200 m) sử dụng vũ khí bộ binh hiện có.

### II.4 — Đối tượng sử dụng

| Đối tượng | Vai trò | Yêu cầu đào tạo |
|-----------|---------|------------------|
| Xạ thủ bộ binh cơ bản | Vận hành, bắn | ≤2 giờ "follow the dot" |
| Tiểu đội trưởng | Chỉ huy phân bổ mục tiêu | Hiểu khả năng/giới hạn V-M |
| Kỹ thuật viên đại đội (L2) | Bảo dưỡng, hiệu chuẩn | 8 giờ huấn luyện kỹ thuật |
| Kỹ thuật viên kho (L3) | Sửa chữa, thay thế cụm | 40 giờ huấn luyện + công cụ chuyên dụng |

---

## III. TÍNH NĂNG KỸ THUẬT CHỦ YẾU

### III.1 — Hình học & Khối lượng

| Thông số | Chỉ tiêu |
|----------|----------|
| Kích thước ngoài tối đa (D×R×C) | ≤120 × 50 × 60 mm |
| Khối lượng (kể cả pin) | ≤0,50 kg |
| Giao diện lắp | Ray Picatinny MIL-STD-1913, chiều rộng rãnh 21,2 ± 0,1 mm |
| Lắp/tháo | ≤30 giây, không dụng cụ |

### III.2 — Tính năng phát hiện & Ngắm bắn

| Thông số | Chỉ tiêu |
|----------|----------|
| **Tầm phát hiện drone (ban ngày, sải cánh ≥30 cm)** | **≥200 m** (ngưỡng tiêu diệt ≥150 m) |
| Tầm phát hiện drone (ánh sáng yếu) | ≥100 m (mong muốn) |
| Xác suất phát hiện Pd | ≥90% tại 200 m; ≥95% tại 150 m |
| Phân loại mục tiêu | 4 loại: drone cánh quạt, drone cánh cố định, chim, không xác định |
| **Độ chính xác chỉ thị ngắm** | **≤1,0 mrad tại 150 m** |
| Độ trễ toàn tuyến (phát hiện → chỉ thị) | ≤150 ms |
| Tốc độ bám mục tiêu (vận tốc góc) | ≥30°/s |
| Tần suất cập nhật chỉ thị | ≥30 Hz |
| Thời gian tái bám sau phát bắn | ≤200 ms |
| Góc nhìn ngang (FOV) | 8°–15° |
| Chỉ thị độ tin cậy | 3 mức: XANH (≥90%), VÀNG (70–89%), ĐỎ (<70%) |

### III.3 — Năng lượng

| Thông số | Chỉ tiêu |
|----------|----------|
| Loại pin | Li-ion sạc (18650 hoặc 21700) |
| **Thời gian sử dụng liên tục (25°C)** | **≥8 giờ** (đủ 1 ca tuần tra) |
| Thời gian sử dụng liên tục (-10°C) | ≥5 giờ |
| Công suất tiêu thụ trung bình | ≤2,3 W |
| Thời gian sạc 0→80% | ≤3 giờ (USB-C) |
| Cảnh báo pin yếu | Chỉ thị trực quan khi ≤15% |

### III.4 — Bật/Sẵn sàng chiến đấu

| Thông số | Chỉ tiêu |
|----------|----------|
| **Bật nguồn → sẵn sàng** | **≤3 giây** (mong muốn ≤2 giây) |
| Điều khiển | 1 nút duy nhất (nút nguồn) — không menu |
| Màn hình | OLED ≥1.000 nits (đọc được dưới nắng) |

### III.5 — Độ bền môi trường

| Thông số | Chỉ tiêu | Tiêu chuẩn |
|----------|----------|------------|
| Nhiệt độ vận hành | -10°C đến +55°C | TCVN 7699-2-1/-2-2 ≡ MIL-STD-810H |
| Chống nước (thân chính) | IPX7 (ngâm 1 m / 30 phút) | TCVN 4255:2008 ≡ IEC 60529 |
| Chống bụi | IP6X (kín bụi hoàn toàn) | TCVN 4255:2008 |
| Chịu ẩm | 95% RH tại 40°C | TCVN 7699-2-30 ≡ MIL-STD-810H |
| **Chịu sốc giật lùi** | **≥10.000 G đỉnh** (7,62×39mm) | TCVN 7699-2-27 ≡ MIL-STD-810H |
| Chịu rơi | 26 lần rơi từ 1,5 m lên bê tông | TCVN 7699-2-27 |
| Kẹp ray — giữ vị trí | Không trượt sau 500 viên 7,62×39mm | — |
| Chịu rung vận chuyển | Category 4 (xe tải) | TCVN 7699-2-6/-2-64 ≡ MIL-STD-810H |
| EMC/EMI | Miễn nhiễm bức xạ 3 V/m (80 MHz–2,7 GHz) | QCVN 18:2022, TCVN 7909 |

### III.6 — Độ tin cậy & Bảo trì

| Thông số | Chỉ tiêu |
|----------|----------|
| MTBF | ≥1.500 giờ (bắt buộc), ≥2.000 giờ (mong muốn) |
| MTTR (bậc kho L3) | ≤2 giờ |
| Hiệu chuẩn tại thực địa | **Không cần** — AI tự hiệu chuẩn ≤3 giây, sai số ≤0,5 mrad |
| Bảo trì L1 (xạ thủ) | Thay pin (≤60 giây), lau kính |
| Bảo trì L2 (kỹ thuật viên) | Kiểm tra bore-sight, thay thế cụm đơn giản |
| Cập nhật firmware | USB-C hoặc BLE OTA (chỉ tại kho) |

### III.7 — An toàn

| Thông số | Chỉ tiêu |
|----------|----------|
| ⚠ **Không bắn tự động** | Không kết nối điện V-M ↔ cò súng. Xác nhận bằng sơ đồ dây + kiểm tra hở mạch. |
| ⚠ **Mất điện = an toàn** | Tắt màn hình hoàn toàn, không chỉ thị tồn dư |
| ⚠ **Khóa chỉ thị khi tin cậy thấp** | Lead indicator KHÔNG hiển thị khi phân loại <70% |
| ⚠ **Tỷ lệ dương tính giả AI** | ≤2% tại ngưỡng tin cậy ≥90% |
| An toàn laser | Class 1 eye-safe (IEC 60825-1) hoặc không dùng laser |
| An toàn pin Li-ion | TCVN 11919-2:2017, UN 38.3 |

---

## IV. SO SÁNH VỚI CÁC GIẢI PHÁP HIỆN CÓ

| Tiêu chí | V-SMASH-M | Kính ngắm quang thường (Aimpoint, EOTech) | MANPADS (Igla, SA-24) | V-SMASH-L (cùng họ) |
|----------|-----------|------------------------------------------|----------------------|---------------------|
| **Chức năng C-UAS** | AI phát hiện + lead indicator | Không — chỉ hỗ trợ ngắm tĩnh | Tên lửa HTNK — quá đắt cho drone nhỏ | AI + fire gate tự động |
| **Mục tiêu** | Drone cỡ nhỏ (≥30 cm, ≤200 m) | Mục tiêu mặt đất | Máy bay, trực thăng (≥2 km) | Drone cỡ nhỏ-vừa (≤400 m) |
| **Khối lượng** | ≤0,5 kg | 0,2–0,5 kg | 17–18 kg | ~1,2 kg |
| **Giá thành** | ≤$500 | $300–$800 | $50.000–$100.000+ | ~$3.000 |
| **Huấn luyện** | 2 giờ | 1 giờ | 40+ giờ | 4 giờ |
| **Trang bị** | Cấp tiểu đội (mỗi xạ thủ) | Cấp cá nhân | Cấp tiểu đoàn (1–2 kíp) | Cấp trung đội (chuyên trách) |
| **Pk ước tính** | ~40% tại 150 m (ước lượng) | ~5–10% vs drone cơ động | >80% (nếu khóa được) | ~65% tại 200 m |
| **Nội địa hóa** | ≥60% | 0% (nhập khẩu) | 0% (nhập khẩu) | ≥60% |

**Kết luận so sánh:** V-SMASH-M lấp khoảng trống giữa "không có năng lực C-UAS bộ binh" và "hệ thống C-UAS chuyên dụng đắt tiền." Không có sản phẩm tương đương trên thị trường quốc tế ở phân khúc giá ≤$500 clip-on AI C-UAS.

---

## V. ĐIỀU KIỆN KHÍ HẬU — THỦY VĂN VIỆT NAM

| Vùng | Nhiệt độ | Độ ẩm | Ghi chú V-M |
|------|----------|-------|-------------|
| Đồng bằng Bắc Bộ (Hà Nội) | 5°C – 42°C | 75–95% | Mùa đông ẩm gây ngưng tụ kính — cần IP67 + hút ẩm nội bộ |
| Trung Bộ (Đà Nẵng) | 18°C – 40°C | 70–90% | Mưa bão mạnh — IPX7 cần thiết |
| Nam Bộ (TP.HCM) | 22°C – 38°C | 70–90% | Nắng mạnh quanh năm — màn OLED ≥1.000 nits bắt buộc |
| Tây Bắc (Sơn La, Lai Châu) | -2°C – 35°C | 60–90% | Nhiệt độ thấp nhất — pin Li-ion suy giảm (≥5 giờ tại -10°C) |
| Tây Nguyên (Gia Lai) | 12°C – 35°C | 65–85% | Bụi đất đỏ — IP6X kín bụi |
| Biên giới biển đảo | 20°C – 36°C | 80–95% | Muối biển — vật liệu chống ăn mòn (PA6-GF30, SS316) |

**Kết luận:** Dải vận hành -10°C đến +55°C bao phủ toàn bộ điều kiện khí hậu Việt Nam với biên an toàn hợp lý.

---

## VI. SẢN XUẤT & NỘI ĐỊA HÓA

| Thông số | Chỉ tiêu |
|----------|----------|
| **Giá thành sản xuất đơn vị** | **≤$500** (mục tiêu $300–$400) |
| **Tỷ lệ nội địa hóa** | **≥60% theo giá trị** |
| Chi phí phát triển (NRE) | ≤$50.000 |
| Tốc độ sản xuất mục tiêu | ≥100 đơn vị/tháng từ Q1 2027 |
| Thời gian lắp ráp | ≤45 phút/đơn vị |
| Tỷ lệ khuyết tật xuất xưởng | ≤1% |

### Phân bổ nội địa hóa (ước tính)

| Cụm/Thành phần | Nguồn gốc | % Giá trị |
|----------------|-----------|-----------|
| Vỏ nhựa PA6-GF30 (ép phun) | 🇻🇳 Nội địa (Workshop X) | ~15% |
| PCB lắp ráp SMT | 🇻🇳 Nội địa | ~10% |
| Pin Li-ion + mạch BMS | 🇻🇳 Nội địa | ~8% |
| Kẹp ray Picatinny | 🇻🇳 Nội địa (CNC/đúc) | ~5% |
| Nhân công lắp ráp + QC | 🇻🇳 Nội địa | ~12% |
| Bao bì, tài liệu | 🇻🇳 Nội địa | ~2% |
| ↳ **Tổng nội địa** | | **~52%** |
| Cảm biến CMOS | 🌐 Nhập khẩu | ~8% |
| Module NVIDIA Jetson Orin Nano | 🌐 Nhập khẩu ⚠ SINGLE-SOURCE + EXPORT-REVIEW | ~20% |
| Màn OLED + driver | 🌐 Nhập khẩu ⚠ SINGLE-SOURCE | ~10% |
| Hệ quang (thấu kính, gương) | 🌐 Nhập khẩu (ban đầu), nội địa hóa dần | ~10% |
| ↳ **Tổng nhập khẩu** | | **~48%** |

> ⚠ **Lưu ý:** Tỷ lệ nội địa 52% chưa đạt mục tiêu 60%. Chiến lược: nội địa hóa hệ quang (giai đoạn 2) + tăng giá trị gia tăng lắp ráp → đạt ≥60%. Xem chi tiết tại B1 YCKT §VM-C02.

---

## VII. TIẾN ĐỘ DỰ KIẾN

| Mốc | Nội dung | Thời gian |
|-----|---------|-----------|
| Dấu T — Thiết kế | Hoàn thiện YCKT + thiết kế chi tiết | Q1–Q2 2026 |
| Mẫu nguyên lý | Chế tạo mẫu đầu tiên | Q3 2026 |
| Dấu I — Đơn chiếc | Thử nghiệm FAT, đánh giá | Q4 2026 |
| Dấu A — Loạt 0 | Sản xuất 10–20 chiếc, trường thử | Q1 2027 |
| Dấu B — Hàng loạt | Sản xuất ≥100 chiếc/tháng | Q2 2027+ |

---

## VIII. KẾT LUẬN VÀ KIẾN NGHỊ

### Tóm tắt tính năng nổi bật

1. **Đầu tiên trong phân khúc:** Không có sản phẩm clip-on AI C-UAS nào ở mức giá ≤$500 trên thị trường quốc tế
2. **Trang bị đại trà:** Giá thành cho phép trang bị cấp tiểu đội — chuyển C-UAS từ nhiệm vụ chuyên trách thành năng lực phổ thông
3. **An toàn tuyệt đối:** Không có khả năng tự động bắn — 4 yêu cầu an toàn trọng yếu được thiết kế từ kiến trúc
4. **Nội địa hóa cao:** ≥60% mục tiêu, sử dụng năng lực sản xuất Workshop X hiện có
5. **Hiệu ứng mạng lưới:** Mỗi V-M là 1 node IRONMESH — dữ liệu thực chiến cải thiện AI toàn bộ họ sản phẩm

### Kiến nghị

Đề nghị Hội đồng KH&CN phê duyệt đề án phát triển V-SMASH-M với các nội dung:
- Phê duyệt tính năng kỹ chiến thuật như mô tả tại tài liệu này
- Cấp kinh phí NRE ≤$50.000 cho giai đoạn thiết kế → mẫu đơn chiếc
- Thời hạn giao mẫu đầu tiên: Q4 2026

---

## PHỤ LỤC A — BẢNG VIẾT TẮT

| Viết tắt | Đầy đủ |
|----------|--------|
| AI | Artificial Intelligence — Trí tuệ nhân tạo |
| BLE | Bluetooth Low Energy |
| BOM | Bill of Materials — Bảng kê vật tư |
| C-UAS | Counter-Unmanned Aerial Systems — Chống thiết bị bay không người lái |
| EMC | Electromagnetic Compatibility — Tương thích điện từ |
| FAT | Factory Acceptance Test — Thử nghiệm nghiệm thu tại nhà máy |
| FOV | Field of View — Trường nhìn |
| IP | Ingress Protection — Cấp bảo vệ chống xâm nhập |
| MTBF | Mean Time Between Failures — Thời gian trung bình giữa các lỗi |
| MTTR | Mean Time To Repair — Thời gian trung bình sửa chữa |
| NRE | Non-Recurring Engineering — Chi phí phát triển không lặp lại |
| OLED | Organic Light-Emitting Diode |
| Pd | Probability of detection — Xác suất phát hiện |
| Pk | Probability of kill — Xác suất tiêu diệt |
| ROE | Rules of Engagement — Quy tắc giao chiến |
| TCVN | Tiêu chuẩn Việt Nam |
| TNKCT | Tính năng kỹ chiến thuật |
| T/I/A/B | Dấu sản xuất: Thiết kế / Đơn chiếc / Loạt 0 / Hàng loạt |
| YCKT | Yêu cầu kỹ thuật |

---

## PHỤ LỤC B — TÀI LIỆU THAM CHIẾU

| # | Tài liệu | Vị trí |
|---|----------|--------|
| 1 | V-SMASH-M ODI Report v1.1 | projects/V-SMASH/PHASE_0/V-SMASH-M_ODI_Report_v1.0.md |
| 2 | V-SMASH-M Product Proposal v1.0 | projects/V-SMASH/PHASE_0/V-SMASH-M_Product_Proposal_v1.0.md |
| 3 | V-SMASH-M B1 YCKT v1.0 (78 yêu cầu chi tiết) | projects/V-SMASH/PHASE_4/V-SMASH-M_B1_YCKT_v1.0.md |
| 4 | V-SMASH-M B3 Quy trình CNSX v1.0 | projects/V-SMASH/PHASE_4/V-SMASH-M_B3_Process_Plan_v1.0.md |
| 5 | IRONMESH TCVN Compliance Matrix v1.0 | projects/IRONMESH/IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md |
