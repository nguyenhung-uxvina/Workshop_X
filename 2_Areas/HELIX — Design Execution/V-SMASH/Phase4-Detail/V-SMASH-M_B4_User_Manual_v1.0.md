---
project: V-SMASH-M
phase: 4
type: user-manual
artifact: B4
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
classification: UNCLASSIFIED
language: Vietnamese primary / English technical terms
inputs:
  - V-SMASH-M_B1_YCKT_v1.0.md (P58 — 78 requirements)
  - V-SMASH-M_FMEA_v1.0.md (P26 — 22 failure modes)
  - V-SMASH-M_DfX_Analysis_v1.0.md (P25 — maintenance levels)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (23 steps)
  - V-SMASH-M_Verification_Plan_v1.0.md (P34)
reading_level: Military enlisted personnel (Hạ sĩ quan / Chiến sĩ)
---

# HƯỚNG DẪN SỬ DỤNG — V-SMASH-M
# User Manual — V-SMASH-M (Micro AI Weapon Sight)

> **Mã sản phẩm (Product Code):** VM-0000
> **Phiên bản tài liệu (Document Version):** 1.0
> **Ngày (Date):** 2026-02-23
> **Phân loại (Classification):** KHÔNG MẬT (UNCLASSIFIED)

---

## MỤC LỤC (Table of Contents)

1. [Giới thiệu sản phẩm (Product Description)](#phần-1--giới-thiệu-sản-phẩm-product-description)
2. [⚠ Cảnh báo An toàn (Safety Warnings)](#phần-2--️-cảnh-báo-an-toàn-safety-warnings)
3. [Thành phần Bộ sản phẩm (Package Contents)](#phần-3--thành-phần-bộ-sản-phẩm-package-contents)
4. [Hướng dẫn Nhanh (Quick-Start Guide)](#phần-4--hướng-dẫn-nhanh-quick-start-guide)
5. [Vận hành Chi tiết (Detailed Operation)](#phần-5--vận-hành-chi-tiết-detailed-operation)
6. [Hiển thị & Chỉ thị (Display & Indicators)](#phần-6--hiển-thị--chỉ-thị-display--indicators)
7. [Xử lý Sự cố (Troubleshooting)](#phần-7--xử-lý-sự-cố-troubleshooting)
8. [Bảo trì (Maintenance)](#phần-8--bảo-trì-maintenance)
9. [Bảo quản & Vận chuyển (Storage & Transport)](#phần-9--bảo-quản--vận-chuyển-storage--transport)
10. [Thông số Kỹ thuật (Technical Specifications)](#phần-10--thông-số-kỹ-thuật-technical-specifications)
11. [Thanh lý & Hủy bỏ (Disposal & Decommissioning)](#phần-11--thanh-lý--hủy-bỏ-disposal--decommissioning)
12. [Phụ lục (Appendices)](#phụ-lục-appendices)

---

## PHẦN 1 — GIỚI THIỆU SẢN PHẨM (Product Description)

### 1.1 — Thiết bị là gì (What is V-SMASH-M)

V-SMASH-M là **thiết bị hỗ trợ ngắm bắn AI dạng clip-on** (clip-on AI aiming aid), lắp trên thanh ray Picatinny của vũ khí bộ binh. Dùng cho nhiệm vụ **phòng không tầm thấp chống UAV cỡ nhỏ** (C-UAS — Counter Unmanned Aerial Systems).

**Nguyên lý hoạt động đơn giản:**
1. AI phát hiện drone trong trường nhìn
2. AI tính toán điểm ngắm dẫn trước (lead indicator)
3. Chấm sáng hiển thị trên màn OLED — xạ thủ nhìn thấy chấm qua kính ngắm
4. **"Theo chấm mà bắn"** ("Follow the dot and fire")

### 1.2 — Thiết bị KHÔNG làm gì (What V-SMASH-M Does NOT Do)

> ⚠ **QUAN TRỌNG — ĐỌC KỸ TRƯỚC KHI SỬ DỤNG**

| Thiết bị KHÔNG | Giải thích |
|----------------|-----------|
| ❌ KHÔNG tự động bắn | Không có kết nối điện nào giữa V-M và cò súng. V-M không thể điều khiển vũ khí. |
| ❌ KHÔNG nhận dạng địch-ta | AI chỉ phân loại LOẠI đối tượng (drone / chim / khác). KHÔNG phân biệt drone ta và drone địch. |
| ❌ KHÔNG quyết định giao chiến | Quyết định khai hỏa HOÀN TOÀN do xạ thủ thực hiện, theo Quy tắc Giao chiến (ROE) của đơn vị. |
| ❌ KHÔNG thay thế mắt thường | Thiết bị BỔ SUNG khả năng quan sát, KHÔNG thay thế. Luôn quét mục tiêu bằng mắt thường song song. |

### 1.3 — Tương thích vũ khí (Weapon Compatibility)

V-SMASH-M lắp được trên bất kỳ vũ khí nào có **ray Picatinny MIL-STD-1913** (21,2 mm). Đã thử nghiệm trên:
- AK-47/AKM (với ray Picatinny gắn thêm)
- M16/M4
- Galil ACE
- Các súng máy nhẹ có ray Picatinny

**Giới hạn giật lùi:** Thiết kế chịu ≤10.000 G — tương thích đạn 7,62×39mm và nhỏ hơn. **Không sử dụng** trên vũ khí cỡ lớn hơn 7,62mm mà chưa có xác nhận riêng.

---

## PHẦN 2 — ⚠ CẢNH BÁO AN TOÀN (Safety Warnings)

> **ĐỌC TOÀN BỘ PHẦN NÀY TRƯỚC KHI SỬ DỤNG THIẾT BỊ.**
> Không tuân thủ cảnh báo an toàn có thể gây thương vong.

### ⚠ CẢNH BÁO 1 — QUYẾT ĐỊNH BẮN LÀ CỦA XẠ THỦ

V-SMASH-M là **thiết bị hỗ trợ**, không phải hệ thống vũ khí tự động. AI chỉ gợi ý nơi ngắm — **xạ thủ tự quyết định có bắn hay không** theo ROE. Nếu không chắc chắn mục tiêu — **KHÔNG BẮN**.

### ⚠ CẢNH BÁO 2 — ĐỘ TIN CẬY AI CÓ GIỚI HẠN

- AI có thể **nhầm** (phân loại sai chim thành drone, hoặc bỏ sót drone)
- Tỷ lệ dương tính giả (false positive) ≤2% tại ngưỡng ≥90% — nghĩa là **cứ 100 lần báo drone, có thể 2 lần không phải drone**
- Thiết bị **ẩn chỉ thị ngắm** khi độ tin cậy phân loại <70% (trạng thái ĐỎ) — đây là cơ chế bảo vệ, không phải lỗi
- **Không bao giờ dựa hoàn toàn vào AI** để ra quyết định giao chiến

### ⚠ CẢNH BÁO 3 — PIN LITHIUM-ION

| Mục | Cảnh báo |
|-----|---------|
| 🔥 Cháy nổ | Pin Li-ion có thể cháy nổ nếu bị đâm thủng, ép mạnh, hoặc ngắn mạch |
| 🌡️ Nhiệt độ | KHÔNG sạc pin khi nhiệt độ <0°C hoặc >45°C |
| 💧 Nước | KHÔNG ngâm pin rời trong nước. Pin trong thiết bị được bảo vệ IP67 |
| ♻️ Thải bỏ | KHÔNG vứt pin vào lửa hoặc rác thải thông thường. Thu gom theo quy định |
| ⚡ Sạc | Chỉ sạc bằng cáp USB-C đi kèm hoặc tương đương (5V/2A). KHÔNG dùng bộ sạc nhanh >5V |

### ⚠ CẢNH BÁO 4 — ĐIỀU KIỆN SỬ DỤNG

- **Nhiệt độ vận hành:** -10°C đến +55°C. Ngoài phạm vi này, thiết bị có thể tắt để bảo vệ.
- **Ánh sáng yếu:** Tầm phát hiện giảm khi hoàng hôn/bình minh (≥100 m thay vì ≥200 m). Ban đêm: thiết bị **không hoạt động** (cần phiên bản V-SMASH-NV có camera hồng ngoại).

### ⚠ CẢNH BÁO 5 — GHI ĐÈ AI (How to Override AI)

Nếu nghi ngờ AI hoạt động sai:

| Bước | Hành động |
|------|----------|
| 1 | **Bỏ qua chỉ thị** — ngắm bắn bằng đường ngắm cơ khí (iron sights) |
| 2 | **Tắt thiết bị** — nhấn giữ nút nguồn 3 giây |
| 3 | **Tháo thiết bị** nếu cần — ≤30 giây, không cần dụng cụ |
| 4 | **Báo cáo** lỗi cho kỹ thuật viên đơn vị |

> **V-SMASH-M tắt = vũ khí vẫn hoạt động bình thường.** Thiết bị không ảnh hưởng đến chức năng cơ bản của vũ khí.

---

## PHẦN 3 — THÀNH PHẦN BỘ SẢN PHẨM (Package Contents)

| STT | Thành phần | Số lượng | Ghi chú |
|-----|-----------|----------|---------|
| 1 | V-SMASH-M (thân chính + kẹp Picatinny) | 1 | Đã lắp kẹp ray |
| 2 | Pin Li-ion 21700 (sạc) | 1 | Đã sạc ~50% |
| 3 | Cáp sạc USB-C | 1 | 1 mét, USB-A ↔ USB-C |
| 4 | Túi bảo vệ (pouch) | 1 | Vải cordura, có khóa |
| 5 | Vải lau quang học (lens cloth) | 1 | Microfiber |
| 6 | Tài liệu hướng dẫn (tài liệu này) | 1 | — |
| 7 | Phiếu bảo hành | 1 | 12 tháng |

**Kiểm tra ngay khi nhận:** Mở hộp, đối chiếu danh sách trên. Nếu thiếu bất kỳ thành phần nào — liên hệ kỹ thuật viên đơn vị.

---

## PHẦN 4 — HƯỚNG DẪN NHANH (Quick-Start Guide)

> **Thời gian từ mở hộp đến sẵn sàng chiến đấu: ≤5 phút** (lần đầu). Sau khi quen: ≤30 giây.

### Bước 1 — Lắp pin

1. Mở nắp pin: bóp khóa ở đáy thiết bị, kéo nắp ra (không cần dụng cụ)
2. Lắp pin 21700: đầu dương (+) hướng vào trong (có ký hiệu trên ngăn pin)
3. Đóng nắp pin: ấn cho đến khi nghe **"tách"** (over-center click)

### Bước 2 — Gắn lên vũ khí

1. Đặt V-SMASH-M lên ray Picatinny, phía trước kính ngắm cơ khí
2. Siết vít kẹp bằng tay (cross-bolt) cho đến khi **chắc chắn**
3. **Kiểm tra:** lắc nhẹ thiết bị — không được có rung lỏng

### Bước 3 — Bật nguồn

1. Nhấn **nút nguồn** (nút duy nhất trên thân, phía trái)
2. Đợi **≤3 giây** — đèn LED sáng xanh ổn định = **SẴN SÀNG**
3. Nhìn qua kính ngắm — thấy cảnh thực tế xuyên qua beam-splitter

### Bước 4 — Sử dụng

1. Hướng vũ khí về phía bầu trời có drone
2. Khi AI phát hiện drone — **chấm sáng xuất hiện** trên màn
3. **Theo chấm mà bắn:** di chuyển vũ khí cho nòng hướng vào chấm, bóp cò
4. Sau khi bắn: thiết bị tự phục hồi trong **≤200 ms** — tiếp tục theo chấm

### Bước 5 — Tắt nguồn

1. Nhấn giữ **nút nguồn 3 giây**
2. Đèn LED tắt = thiết bị đã tắt
3. Tháo khỏi ray nếu cần cất giữ

---

## PHẦN 5 — VẬN HÀNH CHI TIẾT (Detailed Operation)

### 5.1 — Quy trình Trước nhiệm vụ (Pre-Mission Checklist)

Thực hiện **trước mỗi lần triển khai**:

| ☐ | Kiểm tra | Tiêu chí đạt |
|---|----------|--------------|
| ☐ | Pin | Còn ≥50% (LED xanh ổn định khi bật) |
| ☐ | Kẹp ray | Siết chắc, không lỏng |
| ☐ | Mặt kính | Sạch, không nứt vỡ |
| ☐ | Bật nguồn | LED xanh trong ≤3 giây |
| ☐ | Kiểm tra nhanh | Hướng vào vật thể di động — chấm xuất hiện/biến mất bình thường |
| ☐ | Nắp pin | Đóng chặt (nghe "tách") |

### 5.2 — Chế độ hoạt động (Operating Modes)

V-SMASH-M có **1 chế độ duy nhất** — bật là sẵn sàng. Không có menu, không cần chọn chế độ.

| Trạng thái | Mô tả | Hành động của xạ thủ |
|------------|--------|----------------------|
| **SẴN SÀNG** (Ready) | LED xanh ổn định. AI đang quét. Không có mục tiêu. | Quét bầu trời, chờ chỉ thị |
| **PHÁT HIỆN** (Detected) | Chấm sáng xuất hiện trên màn. Viền màu = độ tin cậy. | Theo chấm, đánh giá mục tiêu, quyết định bắn |
| **SAU BẮN** (Post-shot) | Màn hình rung do giật lùi → phục hồi ≤200 ms | Chờ chỉ thị phục hồi, bắn tiếp nếu cần |
| **PIN YẾU** (Low battery) | LED nhấp nháy chậm (≤15% pin) | Chuẩn bị thay pin. Thiết bị vẫn hoạt động. |
| **LỖI** (Fault) | LED nhấp nháy nhanh + thông báo trên màn | Xem Phần 7 — Xử lý Sự cố |
| **QUÁ NHIỆT** (Overheat) | Hiển thị "THERMAL" trên màn. AI giảm tốc xuống ≤15 Hz. | Tiếp tục sử dụng (giảm hiệu năng). Nếu tắt → để nguội, bật lại. |

### 5.3 — Độ tin cậy Phân loại (Classification Confidence)

Viền xung quanh chấm ngắm cho biết AI tự tin đến mức nào:

| Màu viền | Mức tin cậy | Ý nghĩa | Chỉ thị ngắm |
|----------|-------------|---------|---------------|
| 🟢 **XANH** | ≥90% | AI rất tự tin đây là drone | ✅ Hiển thị chỉ thị ngắm |
| 🟡 **VÀNG** | 70–89% | AI khá tự tin, nhưng có thể nhầm | ✅ Hiển thị chỉ thị ngắm — **xạ thủ cân nhắc kỹ** |
| 🔴 **ĐỎ** | <70% | AI không tự tin — có thể là chim hoặc vật thể khác | ❌ **KHÔNG hiển thị chỉ thị ngắm** (⚠ VM-Y03) |

> **Nhắc lại:** Ngay cả khi viền XANH — xạ thủ vẫn phải tự xác nhận mục tiêu và tuân thủ ROE trước khi bắn.

### 5.4 — Các loại Phân loại AI (AI Classification Categories)

AI phân biệt 4 loại đối tượng:

| Loại | Hiển thị | Ghi chú |
|------|---------|---------|
| Drone (cánh quạt) | `DRONE-R` | Multirotor — loại phổ biến nhất |
| Drone (cánh cố định) | `DRONE-F` | Fixed-wing UAV |
| Chim (Bird) | `BIRD` | AI phân biệt chim và drone để tránh bắn nhầm |
| Không xác định (Unknown) | `UNK` | AI không phân loại được — chỉ thị ngắm bị ẩn nếu <70% |

### 5.5 — Sử dụng BLE (Bluetooth — Tùy chọn)

V-SMASH-M có kết nối BLE 5.0 để truyền dữ liệu lên hệ thống IRONMESH. Đây là **tính năng tùy chọn** — thiết bị hoạt động đầy đủ khi không có BLE.

| Dữ liệu truyền qua BLE | Dữ liệu KHÔNG truyền |
|--------------------------|----------------------|
| Số lần phát hiện | ❌ Hình ảnh / video |
| Thời gian bám mục tiêu | ❌ Tọa độ GPS |
| Thống kê bắn | ❌ Thông tin mật |

BLE tự động kết nối khi có trạm thu IRONMESH trong phạm vi (~30 m). Nếu không có trạm thu — thiết bị hiển thị "NO LINK" và hoạt động bình thường.

---

## PHẦN 6 — HIỂN THỊ & CHỈ THỊ (Display & Indicators)

### 6.1 — Đèn LED trạng thái (Status LED)

| Trạng thái LED | Ý nghĩa |
|----------------|---------|
| 🟢 Sáng xanh ổn định | OK — sẵn sàng hoạt động |
| 🟡 Nhấp nháy chậm | Pin yếu (≤15% còn lại) |
| 🔴 Nhấp nháy nhanh | Lỗi — xem màn hình để biết chi tiết |
| ⚫ Tắt (không sáng) | Thiết bị tắt hoặc hết pin |

### 6.2 — Thông báo trên Màn hình OLED

| Thông báo | Ý nghĩa | Hành động |
|-----------|---------|----------|
| *(không có thông báo)* | Bình thường — AI đang quét | Tiếp tục sử dụng |
| `SENSOR FAULT` | Cảm biến CMOS lỗi | Tắt-bật lại. Nếu vẫn lỗi → gửi sửa |
| `AI FAULT` | AI treo (>500 ms không xuất) | Tắt-bật lại. Nếu vẫn lỗi → gửi sửa |
| `THERMAL` | Quá nhiệt — AI giảm tốc (≤15 Hz) | Tiếp tục dùng (chậm hơn). Để nguội nếu có thể. |
| `COMPUTE FAULT` | Lỗi tính toán dẫn trước | Bỏ qua chỉ thị ngắm, dùng iron sights |
| `RANGE?` | Ước tính khoảng cách bất thường | Bỏ qua chỉ thị, đánh giá thủ công |
| `NO LINK` | BLE không kết nối (bình thường nếu không có IRONMESH) | Không cần hành động |
| `LOW BATT` | Pin ≤15% | Chuẩn bị thay pin |

> **Quy tắc vàng:** Khi thấy BẤT KỲ thông báo lỗi nào — **bỏ qua chỉ thị ngắm, chuyển sang iron sights**. Thiết bị lỗi = vũ khí vẫn hoạt động bình thường.

---

## PHẦN 7 — XỬ LÝ SỰ CỐ (Troubleshooting)

### 7.1 — Bảng Xử lý Nhanh

| Triệu chứng | Nguyên nhân có thể | Xử lý tại thực địa (L1) |
|-------------|--------------------|-----------------------------|
| Không bật nguồn | Pin hết, pin lắp ngược, tiếp điểm bẩn | Thay pin mới. Lau tiếp điểm bằng vải khô. |
| Bật nguồn rồi tắt ngay | Pin yếu (<5%), lỗi nội bộ | Thay pin đầy. Nếu vẫn tắt → gửi sửa (L2). |
| Tự khởi động lại (random reboot) | Tiếp điểm pin lỏng do giật lùi | Kiểm tra tiếp điểm, lau sạch. Nếu tiếp tục → gửi sửa (L2). |
| `SENSOR FAULT` | Cảm biến hỏng hoặc cáp lỏng | Tắt-bật. Nếu vẫn lỗi → **gửi sửa (L2)**. KHÔNG tự mở thiết bị. |
| `AI FAULT` | Firmware treo | Tắt 10 giây, bật lại. Nếu lặp lại >3 lần → gửi sửa (L2). |
| `THERMAL` liên tục | Nhiệt độ cao + vận hành lâu | Tắt 10 phút để nguội. Tránh để dưới nắng trực tiếp khi không dùng. |
| Chấm ngắm bị lệch | Kẹp lỏng, trượt trên ray | Siết lại kẹp ray. Kiểm tra vạch chứng (witness mark) trên vít kẹp. |
| Không phát hiện drone | Quá xa (>200 m), ánh sáng yếu, drone quá nhỏ | Đến gần hơn. Ban đêm: không hoạt động. Drone nhỏ (<30 cm): ngoài thiết kế. |
| Kính mờ / sương | Ẩm ngưng tụ trên mặt kính ngoài | Lau bằng vải microfiber đi kèm |
| Kính nứt | Rơi / va đập | **KHÔNG dùng** — gửi sửa (L2). Kính nứt có thể gây sai lệch ngắm. |
| BLE không kết nối | Ngoài phạm vi, không có trạm thu | Bình thường. Thiết bị hoạt động đầy đủ không cần BLE. |
| USB-C không nhận | Cổng bẩn hoặc hỏng | Thổi bụi cổng USB-C. Thử cáp khác. Nếu vẫn lỗi → sạc bằng sạc pin rời. |

### 7.2 — Khi nào GỬI SỬA (Escalate to L2 Depot)

Gửi thiết bị về kho sửa chữa (Workshop X) khi:
- Lỗi `SENSOR FAULT` hoặc `AI FAULT` lặp lại sau 3 lần tắt-bật
- Kính nứt hoặc vỡ
- Vỏ nứt hoặc hỏng (mất IP67)
- Chỉ thị ngắm lệch liên tục (nghi mất bore-sight)
- Khởi động lại ngẫu nhiên liên tục
- Sau **500 phát bắn** hoặc **6 tháng** (kiểm tra định kỳ — xem Phần 8)

---

## PHẦN 8 — BẢO TRÌ (Maintenance)

### 8.1 — Phân cấp Bảo trì (Maintenance Levels)

| Cấp | Đơn vị thực hiện | Nội dung |
|-----|-------------------|---------|
| **L1 — Thực địa** (Field / Operator) | Xạ thủ / Tiểu đội | Thay pin, lau kính, kiểm tra kẹp, tắt-bật lại |
| **L2 — Kho** (Depot / Unit Workshop) | Kỹ thuật viên đơn vị | Bore-sight, thay kính, kiểm tra mạch, cập nhật firmware |
| **L3 — Nhà máy** (Factory / Workshop X) | Kỹ sư nhà máy | Thay PCB, SoC, OLED, sửa chữa cấu trúc |

### 8.2 — Bảo trì L1 — Xạ thủ thực hiện

#### Thay pin (≤60 giây, không dụng cụ, đeo găng tay được)

1. Tắt thiết bị
2. Bóp khóa nắp pin → kéo nắp ra
3. Rút pin cũ
4. Lắp pin mới (đầu + vào trong)
5. Đóng nắp → nghe "tách"
6. Bật nguồn → xác nhận LED xanh

#### Lau kính quang học

- Chỉ dùng vải microfiber đi kèm hoặc tương đương
- Lau nhẹ vòng tròn từ tâm ra ngoài
- **KHÔNG** dùng dung môi, cồn, hoặc giấy ăn (gây trầy)

#### Kiểm tra kẹp ray

- Trước mỗi nhiệm vụ: lắc nhẹ thiết bị trên ray
- Kiểm tra vạch chứng (paint dot) trên vít kẹp — nếu vạch xoay = vít lỏng → siết lại
- **KHÔNG siết quá mức** — chỉ cần chắc, không rung

### 8.3 — Bảo trì L2 — Kho đơn vị (cần dụng cụ)

| Hạng mục | Chu kỳ | Công cụ cần thiết |
|----------|--------|-------------------|
| Kiểm tra bore-sight (đồng trục quang) | Mỗi 500 phát bắn hoặc 6 tháng | Jig bore-sight (PR-11) |
| Kiểm tra mạch điện qua USB-C | Khi nghi lỗi | Laptop + phần mềm chẩn đoán |
| Cập nhật firmware | Khi có phiên bản mới | Laptop + cáp USB-C |
| Thay kính ngoài (nếu nứt) | Khi hỏng | T10 Torx + kính thay thế |
| Kiểm tra bên ngoài toàn diện | Mỗi 6 tháng | Mắt thường + kính lúp |

#### Kiểm tra Bore-sight (L2)

Bore-sight kiểm tra trục ngắm của V-M có thẳng hàng với nòng súng hay không. Nếu lệch >0,5 mrad — cần hiệu chỉnh tại L3 (nhà máy).

1. Gắn V-M lên jig PR-11
2. Bật nguồn, hướng vào mục tiêu chuẩn (bore-sight target)
3. Đọc sai lệch trên phần mềm chẩn đoán
4. Nếu ≤0,5 mrad → ĐẠT, trả về sử dụng
5. Nếu >0,5 mrad → **gửi L3** để hiệu chỉnh quang học

### 8.4 — Lịch Bảo trì Đề xuất

| Thời điểm | L1 (Xạ thủ) | L2 (Kho) |
|-----------|-------------|----------|
| Trước mỗi nhiệm vụ | ☐ Pin ≥50% · ☐ Kẹp chắc · ☐ Kính sạch · ☐ Bật nguồn OK | — |
| Sau mỗi nhiệm vụ | ☐ Lau sạch bụi/nước · ☐ Sạc pin | — |
| Mỗi 500 phát bắn | — | ☐ Bore-sight · ☐ Kiểm tra vỏ nứt |
| Mỗi 6 tháng | — | ☐ Bore-sight · ☐ Kiểm tra O-ring · ☐ Firmware |
| Mỗi 1.000 phát bắn | — | ☐ Kiểm tra bench quang (nứt mỏi) |

---

## PHẦN 9 — BẢO QUẢN & VẬN CHUYỂN (Storage & Transport)

### 9.1 — Bảo quản (Storage)

| Điều kiện | Yêu cầu |
|-----------|---------|
| Nhiệt độ bảo quản | -20°C đến +60°C |
| Độ ẩm | ≤85% RH, không ngưng tụ |
| Ánh sáng | Tránh ánh nắng trực tiếp kéo dài (UV gây lão hóa vỏ) |
| Pin | **Tháo pin** nếu bảo quản >30 ngày. Sạc pin đến ~50% trước bảo quản dài hạn. |
| Bao bì | Đặt trong túi bảo vệ đi kèm. Đặt gói hút ẩm (silica gel) nếu môi trường ẩm. |
| Vị trí | Kho khô ráo, thoáng mát. Không để trên sàn trực tiếp. |

### 9.2 — Vận chuyển (Transport)

| Mục | Yêu cầu |
|-----|---------|
| Đóng gói | Hộp đơn ≤200×100×100 mm, lót xốp chống sốc |
| Pin trong thiết bị | **Được phép** vận chuyển với pin lắp sẵn (pin <100 Wh, tuân thủ UN 38.3) |
| Pin rời | Đóng gói riêng, dán nhãn "PIN LITHIUM-ION", tránh ngắn mạch đầu cực |
| Xếp chồng | Được phép xếp chồng thùng (thiết kế hộp chịu xếp chồng) |
| Rung vận chuyển | Đã thiết kế chịu TCVN 7699-2-6:2009 (Category 4 — xe tải) |

---

## PHẦN 10 — THÔNG SỐ KỸ THUẬT (Technical Specifications)

### 10.1 — Thông số Chính

| Thông số | Giá trị |
|----------|---------|
| Kích thước (L×W×H) | ≤120 × 50 × 60 mm |
| Khối lượng (kể cả pin) | ≤0,50 kg |
| Giao diện gắn | Picatinny MIL-STD-1913 (21,2 mm) |
| Pin | Li-ion 21700 (sạc lại) |
| Thời gian sử dụng (25°C, AI hoạt động) | ≥8 giờ |
| Thời gian sử dụng (-10°C, AI hoạt động) | ≥5 giờ |
| Thời gian bật → sẵn sàng | ≤3 giây |
| Thời gian lắp/tháo khỏi ray | ≤30 giây, không dụng cụ |

### 10.2 — Hiệu năng AI

| Thông số | Giá trị |
|----------|---------|
| Tầm phát hiện (ban ngày, drone ≥30 cm) | ≥200 m |
| Tầm tiêu diệt (kill threshold) | ≥150 m |
| Xác suất phát hiện tại 200 m | Pd ≥90% |
| Xác suất phát hiện tại 150 m | Pd ≥95% |
| Tỷ lệ dương tính giả (FPR) | ≤2% tại ngưỡng ≥90% |
| Loại phân loại | 4: drone (quạt), drone (cánh), chim, không xác định |
| Tốc độ suy luận | ≥30 Hz (≤33 ms/khung) |
| Độ trễ phát hiện → chỉ thị | ≤150 ms end-to-end |
| Độ chính xác chỉ thị ngắm | ≤1,0 mrad tại 150 m |
| Tốc độ bám góc tối đa | ≥30°/s |
| Phục hồi sau giật lùi | ≤200 ms |

### 10.3 — Điều kiện Môi trường

| Thông số | Giá trị | Tiêu chuẩn |
|----------|---------|-----------|
| Nhiệt độ vận hành | -10°C đến +55°C | TCVN 7699-2-1/2-2 |
| Độ ẩm | 95% RH @ 40°C, không ngưng tụ | TCVN 7699-2-30 |
| Chống bụi/cát | IP6X (kín bụi) | TCVN 4255 |
| Chống nước (thân) | IPX7 (ngâm 1 m, 30 phút) | TCVN 4255 |
| Chống nước (nắp pin) | IPX5 (tia nước) | TCVN 4255 |
| Sốc giật lùi | ≥10.000 G (7,62×39mm) | TCVN 7699-2-27 |
| Rơi | 1,5 m trên bê tông, 26 mặt/cạnh/góc | TCVN 7699-2-27 |
| Rung vận chuyển | Category 4 (xe tải) | TCVN 7699-2-6 |

### 10.4 — Kết nối

| Giao diện | Thông số |
|-----------|---------|
| BLE | 5.0, tùy chọn (hệ thống hoạt động đầy đủ khi không có BLE) |
| USB-C | 5V/2A sạc + USB 2.0 data (firmware update, chẩn đoán) |

---

## PHẦN 11 — THANH LÝ & HỦY BỎ (Disposal & Decommissioning)

### 11.1 — Thanh lý Thiết bị

| Bộ phận | Phương pháp thanh lý |
|---------|---------------------|
| Vỏ nhựa (PA6-GF30) | Tái chế nhựa kỹ thuật hoặc chôn lấp thông thường |
| Bộ phận nhôm (AA7075-T6) | Tái chế kim loại |
| Bu lông thép không gỉ | Tái chế kim loại |
| PCB / Linh kiện điện tử | Thu gom rác thải điện tử (WEEE) — KHÔNG vứt rác thường |
| Pin Li-ion 21700 | Thu gom pin riêng — KHÔNG vứt vào lửa hoặc rác thường |
| Kính quang học (BK7) | Trơ — chôn lấp thông thường |

### 11.2 — Hủy bỏ An ninh (Security Destruction)

Nếu cần hủy thiết bị để tránh rò rỉ công nghệ:
1. Tháo pin trước
2. Nghiền nát vỏ và mạch điện (ép thủy lực hoặc búa)
3. Phá hủy SoC riêng (Jetson chứa firmware AI)
4. Thu gom và xử lý theo quy định quân sự

---

## PHỤ LỤC (Appendices)

### Phụ lục A — Danh mục Viết tắt

| Viết tắt | Tiếng Việt | English |
|----------|-----------|---------|
| AI | Trí tuệ nhân tạo | Artificial Intelligence |
| BLE | Bluetooth năng lượng thấp | Bluetooth Low Energy |
| C-UAS | Chống UAV | Counter-Unmanned Aerial Systems |
| FPR | Tỷ lệ dương tính giả | False Positive Rate |
| HITL | Con người trong vòng lặp | Human-In-The-Loop |
| LED | Đi-ốt phát quang | Light-Emitting Diode |
| MTBF | Thời gian trung bình giữa các lỗi | Mean Time Between Failures |
| OLED | Đi-ốt phát quang hữu cơ | Organic Light-Emitting Diode |
| ROE | Quy tắc giao chiến | Rules of Engagement |
| SoC | Hệ thống trên chip | System-on-Chip |
| UAV | Thiết bị bay không người lái | Unmanned Aerial Vehicle |
| USB-C | Kết nối nối tiếp đa năng loại C | Universal Serial Bus Type-C |

### Phụ lục B — Liên hệ Hỗ trợ Kỹ thuật

| Mục | Thông tin |
|-----|----------|
| Đơn vị phát triển | Workshop X (WX), Hà Nội |
| Hotline kỹ thuật | [CẦN XÁC NHẬN] |
| Email | [CẦN XÁC NHẬN] |
| Zalo hỗ trợ | [CẦN XÁC NHẬN] |
| Bảo hành | 12 tháng kể từ ngày giao hàng |
| Phạm vi bảo hành | Lỗi sản xuất + linh kiện. KHÔNG bao gồm: hư hỏng do sử dụng sai, rơi vỡ do bất cẩn, mở thiết bị trái phép. |

---

*Kết thúc tài liệu — Hướng dẫn Sử dụng V-SMASH-M v1.0*
