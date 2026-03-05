# Hướng dẫn chấm điểm 7 tiêu chí quốc phòng/an ninh

## Mục lục

1. Hiệu năng tác chiến (Combat Effectiveness)
2. Độ tin cậy (Reliability)
3. Khả năng sống sót (Survivability)
4. Chi phí toàn đời (Life Cycle Cost)
5. Khả năng sản xuất (Producibility)
6. Thời gian triển khai (Time to Field)
7. Khả năng tương tác (Interoperability)

---

## 1. Hiệu năng tác chiến (Combat Effectiveness)

### Định nghĩa
Khả năng hoàn thành nhiệm vụ tác chiến, bao gồm: tầm hoạt động, độ chính xác, sức công phá, tốc độ phản ứng.

### Chỉ số định lượng

| Loại hệ thống | Chỉ số chính |
|---------------|--------------|
| Vũ khí | Xác suất tiêu diệt Pk, CEP, tầm bắn |
| Cảm biến | Tầm phát hiện, xác suất phát hiện Pd, tỷ lệ báo động nhầm |
| Chỉ huy điều khiển | Thời gian chu kỳ quyết định, số mục tiêu xử lý đồng thời |
| Phòng thủ | Xác suất đánh chặn Pi, số mục tiêu đánh chặn đồng thời |

### Thang chấm điểm

| Điểm | Mô tả | Ví dụ |
|------|-------|-------|
| 4 | Vượt trội, đáp ứng >100% yêu cầu | Tầm bắn 150km (yc: 100km), CEP <5m (yc: 10m) |
| 3 | Tốt, đáp ứng 80-100% | Tầm 90km, CEP 8m |
| 2 | Đạt yêu cầu cơ bản 60-80% | Tầm 70km, CEP 12m |
| 1 | Đủ tối thiểu 50-60% | Tầm 55km, CEP 18m |
| 0 | Không đạt < 50% | Tầm 40km, CEP >20m |

### Cách chấm điểm

1. **Xác định yêu cầu baseline**
   - Từ Requirements List
   - Từ hệ thống tương tự
   - Từ tiêu chuẩn chiến thuật

2. **Đo lường/ước tính hiệu năng**
   - Dữ liệu thử nghiệm
   - Mô phỏng
   - So sánh hệ thống tương tự

3. **Tính % đạt được**
   ```
   % đạt = (Hiệu năng thực tế / Yêu cầu) × 100%
   ```

4. **Chuyển sang thang 0-4**

### Ví dụ: Đánh giá hệ thống radar

```
Yêu cầu: Phát hiện UAV (RCS 0.1m²) ở 50km

PA-A: Phát hiện ở 60km → 120% → Điểm 4
PA-B: Phát hiện ở 45km → 90% → Điểm 3
PA-C: Phát hiện ở 30km → 60% → Điểm 2
```

---

## 2. Độ tin cậy (Reliability)

### Định nghĩa
Khả năng hệ thống hoạt động không lỗi trong điều kiện và thời gian nhất định.

### Chỉ số định lượng

- **MTBF** (Mean Time Between Failures) - giờ
- **MTTR** (Mean Time To Repair) - giờ
- **Availability** = MTBF / (MTBF + MTTR)
- **Mission Reliability** R(t) = e^(-t/MTBF)

### Mục tiêu theo loại hệ thống

| Loại | MTBF mục tiêu | Availability |
|------|---------------|--------------|
| Điện tử | >1000 giờ | >0.90 |
| Cơ khí | >5000 giờ | >0.95 |
| Vũ khí chiến thuật | >500 giờ | >0.85 |
| C4ISR | >2000 giờ | >0.95 |

### Thang chấm điểm

| Điểm | MTBF | Availability | Ghi chú |
|------|------|--------------|---------|
| 4 | >2× mục tiêu | >0.95 | Rất tin cậy, đã kiểm chứng |
| 3 | 1.5-2× | 0.90-0.95 | Tin cậy, ít bảo trì |
| 2 | 1-1.5× | 0.85-0.90 | Đạt mục tiêu |
| 1 | 0.8-1× | 0.80-0.85 | Cần bảo trì thường xuyên |
| 0 | <0.8× | <0.80 | Không đạt |

### Cách chấm điểm

1. **Lấy dữ liệu MTBF**
   - Từ hệ thống tương tự
   - Từ nhà sản xuất linh kiện
   - Từ mô hình dự đoán (MIL-HDBK-217)

2. **Tính Availability**
   ```
   A = MTBF / (MTBF + MTTR)
   ```

3. **So sánh với mục tiêu**

4. **Điều chỉnh theo mức độ trưởng thành công nghệ**
   - Công nghệ đã chứng minh: +0 điểm
   - Công nghệ mới, rủi ro thấp: -0.5 điểm
   - Công nghệ tiên tiến, rủi ro cao: -1.0 điểm

### Ví dụ: Đánh giá hệ thống điều khiển hỏa lực

```
Mục tiêu: MTBF = 1000 giờ, A = 0.90

PA-A: MTBF = 1500 giờ, A = 0.93 → Điểm 3 (công nghệ trưởng thành)
PA-B: MTBF = 2500 giờ, A = 0.96 → Điểm 4 (hệ thống đã kiểm chứng)
PA-C: MTBF = 1200 giờ, A = 0.91 → Điểm 2 (công nghệ mới, -0.5)
```

---

## 3. Khả năng sống sót (Survivability)

### Định nghĩa
Khả năng tránh bị phát hiện, chống chịu tấn công, và tiếp tục hoạt động sau khi bị tấn công.

### Ba trụ cột

1. **Susceptibility** - Khả năng tránh bị phát hiện/tấn công
   - Stealth (RCS, hồng ngoại, acoustic)
   - Electronic countermeasures (ECM)
   - Tactics (che giấu, cơ động)

2. **Vulnerability** - Khả năng chống chịu khi bị tấn công
   - Armor (giáp)
   - Hardening (gia cố điện tử)
   - Redundancy (dự phòng)

3. **Recoverability** - Khả năng phục hồi sau tấn công
   - Damage control
   - Self-repair
   - Mission continuation

### Thang chấm điểm

| Điểm | Mô tả | Ví dụ |
|------|-------|-------|
| 4 | 3 trụ cột đều mạnh | Stealth + armor + redundancy |
| 3 | 2 trụ cột mạnh, 1 yếu | Stealth + armor |
| 2 | 1 trụ cột mạnh, 2 trung bình | Armor tốt, stealth TB |
| 1 | Chỉ phòng thủ cơ bản | Armor mỏng |
| 0 | Dễ bị tổn thương | Không phòng thủ |

### Cách chấm điểm

1. **Đánh giá từng trụ cột** (0-4 điểm mỗi cái)

2. **Tính điểm tổng hợp**
   ```
   Survivability = 0.4×Susceptibility + 0.4×Vulnerability + 0.2×Recoverability
   ```

3. **Xem xét môi trường tác chiến**
   - Môi trường đối kháng cao → Tăng trọng số Susceptibility
   - Môi trường độc lập → Tăng trọng số Recoverability

### Ví dụ: Đánh giá UAV trinh sát

```
PA-A (Stealth UAV):
- Susceptibility: 4 (RCS thấp, bay cao)
- Vulnerability: 2 (nhẹ, dễ hỏng)
- Recoverability: 1 (khó sửa chữa)
- Tổng: 0.4×4 + 0.4×2 + 0.2×1 = 2.6 → Điểm 3

PA-B (Armored UAV):
- Susceptibility: 2 (RCS cao, bay thấp)
- Vulnerability: 4 (armor tốt)
- Recoverability: 3 (modular, dễ sửa)
- Tổng: 0.4×2 + 0.4×4 + 0.2×3 = 3.0 → Điểm 3

PA-C (Swarm UAV):
- Susceptibility: 3 (nhỏ, khó phát hiện)
- Vulnerability: 1 (mỏng, dễ hỏng)
- Recoverability: 4 (nhiều UAV dự phòng)
- Tổng: 0.4×3 + 0.4×1 + 0.2×4 = 2.0 → Điểm 2
```

---

## 4. Chi phí toàn đời (Life Cycle Cost)

### Định nghĩa
Tổng chi phí từ khi bắt đầu phát triển đến khi kết thúc vòng đời (thường 20-30 năm).

### Các thành phần

```
LCC = R&D + Production + O&M + Disposal

R&D: Nghiên cứu, thiết kế, thử nghiệm
Production: Sản xuất hàng loạt, công cụ, training
O&M: Vận hành, bảo trì, nâng cấp (20-30 năm)
Disposal: Thanh lý, xử lý môi trường
```

### Tỷ lệ điển hình

```
R&D: 10-15%
Production: 20-30%
O&M: 50-70% (phần lớn nhất!)
Disposal: 1-5%
```

### Thang chấm điểm

**So sánh tương đối:**

| Điểm | LCC so với baseline | Ghi chú |
|------|---------------------|---------|
| 4 | <80% baseline | Tiết kiệm đáng kể |
| 3 | 80-95% | Rẻ hơn một chút |
| 2 | 95-105% | Tương đương |
| 1 | 105-120% | Đắt hơn chấp nhận được |
| 0 | >120% | Quá đắt |

### Cách chấm điểm

1. **Ước tính LCC cho từng phương án**

   Dùng công thức đơn giản:
   ```
   LCC = R&D + (Unit_Cost × Quantity) + (O&M_per_year × Years)
   
   Ví dụ:
   R&D = 50 tỷ
   Unit cost = 5 tỷ × 20 xe = 100 tỷ
   O&M = 10 tỷ/năm × 20 năm = 200 tỷ
   
   LCC = 50 + 100 + 200 = 350 tỷ
   ```

2. **Chiết khấu về giá trị hiện tại (NPV)**

   ```
   NPV = Σ [Ct / (1+r)^t]
   
   r = 3-5% (lãi suất chiết khấu)
   ```

3. **So sánh với baseline hoặc với nhau**

4. **Chuyển sang thang 0-4**

### Ví dụ: So sánh 3 phương án xe bọc thép

```
PA-A:
R&D: 30 tỷ
Production: 80 tỷ (4 tỷ × 20)
O&M: 120 tỷ (6 tỷ/năm × 20 năm)
LCC = 230 tỷ

PA-B:
R&D: 50 tỷ (công nghệ mới)
Production: 100 tỷ (5 tỷ × 20)
O&M: 80 tỷ (4 tỷ/năm × 20) - tiết kiệm nhiên liệu
LCC = 230 tỷ

PA-C:
R&D: 20 tỷ (cải tiến từ hiện có)
Production: 70 tỷ (3.5 tỷ × 20)
O&M: 160 tỷ (8 tỷ/năm × 20) - bảo trì nhiều
LCC = 250 tỷ

So sánh:
PA-A: 230 tỷ (baseline) → Điểm 2
PA-B: 230 tỷ (= baseline) → Điểm 2
PA-C: 250 tỷ (+8.7% vs baseline) → Điểm 1
```

**Lưu ý:** PA-B tuy cùng LCC với PA-A, nhưng cần R&D cao hơn → Rủi ro cao hơn.

---

## 5. Khả năng sản xuất (Producibility)

### Định nghĩa
Khả năng sản xuất hàng loạt với chi phí, chất lượng, và thời gian hợp lý, đặc biệt là sản xuất trong nước.

### Các yếu tố đánh giá

1. **Công nghệ sản xuất**
   - Có sẵn trong nước?
   - Cần đầu tư bao nhiêu?

2. **Nguyên liệu**
   - Nguồn cung trong nước?
   - Phụ thuộc nhập khẩu?

3. **Nhân lực**
   - Tay nghề có sẵn?
   - Cần đào tạo bao nhiêu?

4. **Chuỗi cung ứng**
   - Số nhà thầu phụ?
   - Độ phức tạp logistics?

### Thang chấm điểm

| Điểm | Mức độ tự chủ | Mô tả |
|------|---------------|-------|
| 4 | 100% nội địa | Sản xuất hoàn toàn trong nước, công nghệ sẵn có |
| 3 | 70-90% | Sản xuất trong nước, một số linh kiện nhập |
| 2 | 50-70% | Lắp ráp trong nước, linh kiện chính nhập |
| 1 | 30-50% | Chủ yếu nhập, lắp ráp cơ bản |
| 0 | <30% | Hoàn toàn nhập khẩu |

### Cách chấm điểm

1. **Phân tích chuỗi giá trị**
   ```
   Giá trị = R&D + Vật liệu + Chế tạo + Lắp ráp + Thử nghiệm
   ```

2. **Tính % giá trị nội địa hóa**
   ```
   % nội địa = (Giá trị nội địa / Tổng giá trị) × 100%
   ```

3. **Điều chỉnh theo khả năng chuyển giao công nghệ**
   - Có ToT → +0.5 điểm
   - Không ToT → -0.5 điểm

### Ví dụ: Đánh giá hệ thống pháo tự hành

```
PA-A (Thiết kế nội địa):
- R&D: 100% nội địa (5 tỷ)
- Vật liệu: 80% (thép đặc biệt nhập) (20 tỷ)
- Chế tạo: 100% (15 tỷ)
- Lắp ráp: 100% (5 tỷ)
- Thử nghiệm: 100% (3 tỷ)
Total: (5 + 16 + 15 + 5 + 3) / 48 = 91.7% → Điểm 4

PA-B (Nhập khẩu có ToT):
- R&D: 0% (chuyển giao)
- Vật liệu: 60% (nhiều linh kiện nhập)
- Chế tạo: 70%
- Lắp ráp: 90%
- Thử nghiệm: 100%
Total: 65% + ToT bonus = 65% + 0.5 → Điểm 3

PA-C (Nhập khẩu không ToT):
- Lắp ráp cơ bản: 30%
→ Điểm 1
```

---

## 6. Thời gian triển khai (Time to Field)

### Định nghĩa
Thời gian từ khi bắt đầu phát triển đến khi đưa vào trang bị và sẵn sàng tác chiến.

### Các giai đoạn

```
Development: 2-5 năm (phụ thuộc độ phức tạp)
Testing & Qualification: 1-2 năm
Production Setup: 0.5-1 năm
Training: 0.5-1 năm

Total: 4-9 năm
```

### Thang chấm điểm

| Điểm | Thời gian | Mô tả |
|------|-----------|-------|
| 4 | <3 năm | Công nghệ trưởng thành, rủi ro thấp |
| 3 | 3-5 năm | Phát triển mới, rủi ro vừa |
| 2 | 5-7 năm | Công nghệ tiên tiến, rủi ro cao |
| 1 | 7-10 năm | Đột phá công nghệ |
| 0 | >10 năm | Nghiên cứu cơ bản |

### Cách chấm điểm

1. **Ước tính thời gian từng giai đoạn**

2. **Điều chỉnh theo mức độ trưởng thành công nghệ (TRL)**
   ```
   TRL 9 (proven): 0× bổ sung
   TRL 7-8 (demo): +20% thời gian
   TRL 4-6 (prototype): +50% thời gian
   TRL 1-3 (research): +100% thời gian
   ```

3. **Xem xét rủi ro kỹ thuật**
   - Rủi ro thấp: +0%
   - Rủi ro trung bình: +30%
   - Rủi ro cao: +50-100%

### Ví dụ: Hệ thống tên lửa phòng không

```
PA-A (Nâng cấp hệ thống hiện có):
Development: 1.5 năm (cải tiến)
Testing: 1 năm
Production: 0.5 năm
Training: 0.5 năm (sử dụng tương tự)
Total: 3.5 năm → Điểm 3

PA-B (Thiết kế mới, công nghệ proven):
Development: 3 năm
Testing: 1.5 năm
Production: 1 năm
Training: 1 năm
Total: 6.5 năm → Điểm 2

PA-C (Công nghệ tiên tiến, TRL 6):
Development: 4 năm × 1.5 (TRL) = 6 năm
Testing: 2 năm
Production: 1 năm
Training: 1 năm
Total: 10 năm → Điểm 1
```

---

## 7. Khả năng tương tác (Interoperability)

### Định nghĩa
Khả năng tích hợp và hoạt động với các hệ thống khác (C4ISR, vũ khí, cảm biến).

### Các mức độ (theo NATO STANAG)

| Level | Tên | Mô tả |
|-------|-----|-------|
| 4 | Unified | Tích hợp hoàn toàn, dữ liệu real-time |
| 3 | Collaborative | Chia sẻ dữ liệu, phối hợp tác chiến |
| 2 | Integrated | Kết nối, trao đổi thông tin |
| 1 | Peer-to-peer | Liên lạc đơn giản |
| 0 | Isolated | Hoạt động độc lập |

### Thang chấm điểm

| Điểm | Level | Ví dụ |
|------|-------|-------|
| 4 | 3-4 | Tích hợp đầy đủ vào mạng C4ISR |
| 3 | 2 | Chia sẻ dữ liệu qua chuẩn chung |
| 2 | 1 | Liên lạc voice/data cơ bản |
| 1 | 0+ | Hoạt động độc lập, có thể nâng cấp |
| 0 | 0 | Hoàn toàn độc lập, không tích hợp |

### Cách chấm điểm

1. **Xác định hệ thống cần tương tác**
   - C4ISR trung tâm
   - Cảm biến khác (radar, EO/IR)
   - Vũ khí/effector khác
   - Hệ thống hậu cần

2. **Đánh giá khả năng tương tác**
   - Giao thức chuẩn? (Link 16, VMF, etc.)
   - Interface vật lý?
   - Độ trễ dữ liệu?

3. **Xem xét khả năng nâng cấp**
   - Architecture mở?
   - Modular design?

### Ví dụ: Hệ thống cảm biến mới

```
PA-A (Thiết kế mới, proprietary):
- Không tích hợp sẵn
- Cần phát triển gateway
- Độ trễ cao
→ Level 0, có thể nâng cấp → Điểm 1

PA-B (Thiết kế với chuẩn NATO):
- Hỗ trợ Link 16
- Giao diện chuẩn MIL-STD-1553
- Chia sẻ track data real-time
→ Level 3 → Điểm 4

PA-C (Nâng cấp hệ thống hiện có):
- Đã tích hợp trong mạng C2
- Cần nâng cấp bandwidth
- Có thể đạt Level 2-3
→ Level 2 hiện tại, tiềm năng Level 3 → Điểm 3
```

---

## Tổng kết

### Checklist chấm điểm

- [ ] Đã đọc kỹ định nghĩa tiêu chí?
- [ ] Đã xác định yêu cầu/baseline?
- [ ] Đã có dữ liệu định lượng (nếu có)?
- [ ] Đã so sánh khách quan (không subjective)?
- [ ] Đã ghi rõ lý do cho điểm số?
- [ ] Đã xem xét trade-off giữa các tiêu chí?

### Mẹo chấm điểm tốt

1. **Chấm độc lập** - Nhiều người chấm riêng, sau đó thảo luận
2. **Dùng dữ liệu** - Dựa trên số liệu, không dựa cảm tính
3. **Ghi chú chi tiết** - Giải thích tại sao cho điểm đó
4. **So sánh nhất quán** - Đảm bảo các phương án được đánh giá công bằng
5. **Xem xét uncertainty** - Nếu không chắc, dùng khoảng (2-3) thay vì số cụ thể

### Khi nào cần điều chỉnh điểm

- Có thêm thông tin mới
- Phát hiện sai sót trong dữ liệu
- Thay đổi yêu cầu dự án
- Sau phân tích độ nhạy

→ **Luôn tài liệu hóa lý do thay đổi!**
