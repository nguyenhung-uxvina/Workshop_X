# ĐƠN ĐẶT HÀNG — 3 THIẾT BỊ KHÍ NÉN CHO VN-12.7MM-SIM
## Ngày: 2026-03-20 | Dự án: VN-12.7MM-SIM-001 (HỒNG HẢI)

**Mục đích:** Đặt hàng 3 linh kiện còn thiếu cho Stage 1 Lab Test (deadline: 2026-04-05)
**Ngân sách:** $280 (~7.000.000 VNĐ)
**Ưu tiên:** KHẨN CẤP — nếu không order tuần này, Stage 1 bị trễ

---

## THIẾT BỊ 1: XI LANH KHÍ NÉN

| Mục | Chi tiết |
|-----|---------|
| **Tên** | Xi lanh khí nén tác động kép (double-acting pneumatic cylinder) |
| **BOM #** | 61 (Doc 017 v1.1) |
| **Thông số kỹ thuật** | |
| Đường kính bore | **54 mm** (quan trọng — tính toán lực ≥1.400 N tại 10 bar) |
| Hành trình (stroke) | **25 mm** |
| Áp suất làm việc | 10 bar (max) |
| Kiểu lắp | Mặt bích phía trước M10 (front flange mount) |
| Cổng khí | 1/4" BSP (hoặc M5, tùy hãng — cần adapter nếu khác) |
| Vật liệu thân | Nhôm hoặc thép |
| Vật liệu gioăng | NBR hoặc Viton (chịu dầu, chịu nhiệt) |
| **Hãng ưu tiên** | Airtac (đại lý VN), SMC (đại lý VN), Festo (nếu giá OK) |
| **Mã tham khảo** | Airtac SE50×25 hoặc SC50×25 (bore 50 gần nhất, cần xác nhận 54mm) |
| | SMC C85N50-25 (bore 50mm, cần kiểm tra bore 54mm tương đương) |
| **Lưu ý** | Bore 54mm là kích thước tính toán. Nếu nhà cung cấp chỉ có 50mm hoặc 63mm: |
| | - 50mm bore × 10 bar = ~1.963 N → **đạt ngưỡng 1.400 N ✅** |
| | - 63mm bore × 10 bar = ~3.117 N → quá mạnh nhưng điều chỉnh được bằng regulator |
| | **→ Ưu tiên bore 50mm (phổ biến hơn, rẻ hơn, vẫn đạt lực yêu cầu)** |
| **Số lượng** | 1 |
| **Giá dự kiến** | $80 (~2.000.000 VNĐ) |
| **Thời gian giao** | 3-7 ngày (đại lý nội địa) |
| **Nguồn mua** | |
| Lựa chọn 1 | Đại lý Airtac Việt Nam — TP.HCM: Công ty Khí Nén Ánh Dương / Thiên Phú |
| Lựa chọn 2 | Đại lý SMC Việt Nam — smcvn.com |
| Lựa chọn 3 | Shopee/Lazada — tìm "xi lanh khí nén 50mm hành trình 25mm" |

### Câu hỏi khi liên hệ nhà cung cấp:
1. "Có xi lanh bore 50mm, hành trình 25mm, tác động kép, mặt bích M10 không?"
2. "Áp suất max bao nhiêu bar?" (cần ≥10 bar)
3. "Cổng khí kích thước gì?" (cần 1/4" BSP)
4. "Giao trong bao lâu?" (cần trước 2026-04-03)

---

## THIẾT BỊ 2: VAN ĐIỆN TỪ TỐC ĐỘ CAO

| Mục | Chi tiết |
|-----|---------|
| **Tên** | Van điện từ 3/2 tốc độ cao (fast-acting 3/2 solenoid valve) |
| **BOM #** | 62 (Doc 017 v1.1) |
| **Thông số kỹ thuật** | |
| Kiểu van | 3/2 (3 cổng, 2 vị trí) — normally closed |
| Thời gian đáp ứng | **≤15 ms** (quan trọng — cần cho 600 RPM = 10 Hz cycling) |
| Điện áp cuộn coil | **24 VDC** |
| Kích thước cổng | 1/4" BSP |
| Áp suất làm việc | 0-10 bar |
| Lưu lượng | ≥200 L/min (đủ cho bore 50mm × 25mm stroke × 10 Hz) |
| **Hãng ưu tiên** | |
| Ưu tiên 1 | **Parker D311** series (D311BB64G → 3/2, 24VDC, 1/4" BSP, ~8ms response) |
| Ưu tiên 2 | **Festo MHJ** series (MHJ9-QS-4-MF → 3/2, 24VDC, ~2ms response, nhưng cổng nhỏ hơn) |
| Ưu tiên 3 | **SMC VZ** series (VZ3120-5D-M5 → 3/2, 24VDC, ~5ms response) |
| Dự phòng | Bất kỳ van 3/2, 24VDC, response ≤15ms, cổng ≥1/8" BSP |
| **Lưu ý quan trọng** | |
| | Van thường (Airtac 4V210) có response ~30-50ms → **KHÔNG ĐẠT** cho 10 Hz |
| | **PHẢI** chọn van "fast-acting" hoặc "high-speed" hoặc "direct-acting" |
| | Van pilot-operated (gián tiếp) thường chậm hơn → tránh |
| **Số lượng** | 1 |
| **Giá dự kiến** | $150 (~3.750.000 VNĐ) — cao hơn van thường vì tốc độ cao |
| **Thời gian giao** | 1-2 tuần (có thể phải import) |
| **Nguồn mua** | |
| Lựa chọn 1 | Parker Hannifin Vietnam — parker.com/vn (đại lý ủy quyền TP.HCM) |
| Lựa chọn 2 | Festo Vietnam — festo.com/vn (văn phòng TP.HCM + Hà Nội) |
| Lựa chọn 3 | SMC Vietnam — smcvn.com |
| Lựa chọn 4 | Alibaba / AliExpress — tìm "fast solenoid valve 3/2 24VDC 15ms" (rủi ro chất lượng) |

### Câu hỏi khi liên hệ nhà cung cấp:
1. "Có van 3/2, 24VDC, response time ≤15ms không? Mã gì?"
2. "Response time thực tế là bao nhiêu ms?" (yêu cầu datasheet)
3. "Cổng khí kích thước gì?" (cần 1/4" BSP hoặc adapter)
4. "Lưu lượng tối đa?" (cần ≥200 L/min)
5. "Có hàng sẵn không? Giao bao lâu?"
6. **"Có thể cho mượn/test trước không?"** (nếu giá cao, hỏi thử)

### Kiểm tra nhanh khi nhận hàng:
- [ ] Cấp 24VDC → nghe "click" rõ ràng
- [ ] Đo thời gian response bằng oscilloscope (nếu có)
- [ ] Thử lắp vào xi lanh, cycling 10 Hz × 10 giây → không kẹt

---

## THIẾT BỊ 3: CẢM BIẾN ÁP SUẤT

| Mục | Chi tiết |
|-----|---------|
| **Tên** | Cảm biến áp suất / Pressure transducer |
| **BOM #** | 64 (Doc 017 v1.1) |
| **Thông số kỹ thuật** | |
| Dải đo | **0-16 bar** (hoặc 0-1.6 MPa) |
| Tín hiệu ra | **0-5V** (hoặc 4-20mA — cả hai đều OK, 0-5V ưu tiên vì đọc ADC trực tiếp) |
| Kết nối khí | **1/4" BSP** (nam/male thread) |
| Tần số đáp ứng | **≥1 kHz** (quan trọng — đo per-shot force profile tại 600 RPM) |
| Nguồn cấp | 5V hoặc 12-36VDC (tùy model) |
| Độ chính xác | ≤1% FS (Full Scale) |
| Chịu áp tối đa | ≥20 bar (overpressure protection) |
| **Hãng ưu tiên** | |
| Ưu tiên 1 | **Honeywell ABP series** (ABP2LANT016BG2A3 — 0-16 bar, 0-5V, 1/4" BSP) |
| Ưu tiên 2 | **TE Connectivity U5200** series (U5244-000005-016BG — 0-16 bar) |
| Ưu tiên 3 | Bất kỳ hãng VN/TQ: tìm "pressure transducer 0-16 bar 0-5V 1/4 BSP" |
| **Lưu ý** | |
| | Cảm biến giá rẻ TQ (~$15-20) có thể đáp ứng, nhưng kiểm tra bandwidth ≥1 kHz |
| | Nhiều cảm biến rẻ chỉ có bandwidth 10-100 Hz → **KHÔNG ĐẠT** cho đo per-shot |
| | **Hỏi datasheet: "frequency response" hoặc "bandwidth" phải ≥1 kHz** |
| **Số lượng** | 1 (mua 2 nếu giá rẻ — 1 dự phòng) |
| **Giá dự kiến** | $50 (~1.250.000 VNĐ) cho hãng có thương hiệu, $15-20 cho hãng TQ |
| **Thời gian giao** | 3-7 ngày (đại lý nội địa hoặc Shopee) |
| **Nguồn mua** | |
| Lựa chọn 1 | Đại lý Honeywell/TE — Hà Nội/TP.HCM |
| Lựa chọn 2 | Điện tử Việt (dientuplus.com, nshopvn.com) — tìm "cảm biến áp suất 16 bar" |
| Lựa chọn 3 | Shopee/Lazada — tìm "pressure sensor 16 bar 0-5V" |
| Lựa chọn 4 | AliExpress — nếu chấp nhận giao 2-3 tuần |

### Câu hỏi khi liên hệ nhà cung cấp:
1. "Dải đo 0-16 bar, output 0-5V, ren 1/4 BSP, có không?"
2. **"Bandwidth / frequency response bao nhiêu Hz?"** (cần ≥1 kHz)
3. "Nguồn cấp bao nhiêu V?" (5V ưu tiên — đọc ADC STM32 trực tiếp)
4. "Có datasheet không?" (bắt buộc — kiểm tra bandwidth)

### ⚠️ TẠI SAO CẢM BIẾN NÀY QUAN TRỌNG

Cảm biến áp suất $50 này là **linh kiện có đòn bẩy cao nhất** trong toàn bộ hệ thống:
- Cho phép đo lực giật per-shot → data cho I-08 ACH coaching
- 7 outcomes I-08 (tổng Opp = 60.0) phụ thuộc vào data từ cảm biến này
- Doanh thu I-08 dự kiến $144K/năm → ROI cảm biến = **82×**
- Nếu không có cảm biến → không có data → không có I-08 → mất toàn bộ ACH flywheel

---

## TỔNG HỢP ĐƠN HÀNG

| # | Thiết bị | Thông số chính | Hãng ưu tiên | Giá (USD) | Giá (VNĐ) | Deadline |
|---|---------|---------------|-------------|:---------:|:----------:|:--------:|
| 1 | Xi lanh khí nén | Bore 50mm, stroke 25mm, 10 bar, mặt bích | Airtac/SMC | $80 | ~2.000K | 03-04-2026 |
| 2 | Van điện từ tốc độ cao | 3/2, 24VDC, ≤15ms, 1/4" BSP | Parker/Festo/SMC | $150 | ~3.750K | 03-04-2026 |
| 3 | Cảm biến áp suất | 0-16 bar, 0-5V, 1/4" BSP, ≥1 kHz | Honeywell/TE | $50 | ~1.250K | 03-04-2026 |
| **TỔNG** | | | | **$280** | **~7.000K** | |

## CHECKLIST ĐẶT HÀNG

- [ ] Gọi/email đại lý Airtac/SMC hỏi xi lanh bore 50mm × 25mm stroke
- [ ] Gọi/email Parker VN hoặc Festo VN hỏi van tốc độ cao (yêu cầu datasheet)
- [ ] Tìm cảm biến áp suất trên Shopee/điện tử online (kiểm tra bandwidth ≥1 kHz)
- [ ] Xác nhận tất cả giao trước 03-04-2026 (2 ngày trước Stage 1 test)
- [ ] Nếu van Parker/Festo lead time > 2 tuần → order song song trên AliExpress (dự phòng)
- [ ] Lưu invoice/receipt vào `1_Projects/VN-12.7MM-SIM/Phase3-Embodiment/Procurement/`

## PHỤ KIỆN NÊN MUA CÙNG (nếu chưa có)

| Phụ kiện | Lý do | Giá ước tính |
|----------|-------|:------------:|
| Ống PU 6mm × 5m | Kết nối xi lanh ↔ van | ~50K VNĐ |
| Đầu nối nhanh 1/4" BSP × 3 | Push-fit, không cần ren | ~100K VNĐ |
| Băng ren PTFE | Làm kín ren BSP | ~10K VNĐ |
| Bộ giảm âm đồng thiêu kết 1/4" × 2 | Giảm tiếng xả khí | ~50K VNĐ |
| **Tổng phụ kiện** | | **~210K VNĐ (~$8)** |

---

*Tổng chi phí order: $288 (~7.200.000 VNĐ) bao gồm phụ kiện.*
*30 phút để order → unblock Stage 1 test (2026-04-05) → unblock toàn bộ FORGE flywheel.*
