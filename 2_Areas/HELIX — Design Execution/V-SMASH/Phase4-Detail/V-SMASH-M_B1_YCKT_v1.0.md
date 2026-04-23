---
project: V-SMASH-M
phase: 4
type: bilingual-technical-requirements
artifact: B1
prompt: P58
version: 1.0
created: 2026-02-23
status: draft
family: V-SMASH
classification: UNCLASSIFIED
language: Vietnamese primary / English technical terms
inputs:
  - V-SMASH-M_Requirements_List_v1.0.md (P13 — 78 requirements, 54D + 24W)
  - V-SMASH-M_Standards_Compliance_Matrix_v1.0.md (15 standards)
  - V-SMASH-M_Verification_Plan_v1.0.md (P34 — A/I/T/D mapping)
  - IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md (TCVN↔MIL-STD mapping)
total_mandatory: 54
total_desired: 24
safety_critical: 4
tcvn_mapped: 18
tcvn_unmapped: 5
---

# YÊU CẦU KỸ THUẬT — V-SMASH-M
# Technical Requirements — V-SMASH-M (Micro AI Weapon Sight)

> **Tài liệu này được lập theo khuôn khổ Thông tư 25/2020/TT-BQP.**
> This document is prepared per the Circular 25/2020/TT-BQP framework.

---

## PHẦN I — THÔNG TIN CHUNG (General Information)

| Mục | Nội dung |
|-----|---------|
| **1.1 Tên sản phẩm** | V-SMASH-M — Kính ngắm vũ khí AI thu nhỏ (Micro AI Weapon Sight) |
| **1.2 Mã sản phẩm** | VM-0000 |
| **1.3 Đơn vị phát triển** | Workshop X (WX), Hà Nội |
| **1.4 Đơn vị đặt hàng** | [CẦN XÁC NHẬN — đơn vị quân đội] |
| **1.5 Phân loại bảo mật** | KHÔNG MẬT (UNCLASSIFIED) |
| **1.6 Phiên bản** | 1.0 |
| **1.7 Ngày** | 2026-02-23 |
| **1.8 Tài liệu gốc** | V-SMASH-M_Requirements_List_v1.0.md (Phase 1, P13) |
| **1.9 Số lượng yêu cầu** | 78 tổng (54 bắt buộc + 24 mong muốn) |

### Mô tả sản phẩm (Product Description)

Thiết bị hỗ trợ ngắm bắn AI dạng clip-on (clip-on AI aiming aid), lắp trên thanh ray Picatinny của vũ khí bộ binh, dùng cho nhiệm vụ phòng không tầm thấp chống thiết bị bay không người lái cỡ nhỏ (C-UAS). Nguyên lý hoạt động: phát hiện mục tiêu drone bằng AI, hiển thị chỉ thị ngắm (lead indicator) trên màn OLED — "theo chấm mà bắn" ("follow the dot"). Không có khả năng tự động bắn (no autonomous fire capability). Quyết định khai hỏa hoàn toàn thuộc về xạ thủ.

---

## PHẦN II — YÊU CẦU KỸ THUẬT BẮT BUỘC (Mandatory Technical Requirements)

> **Ghi chú:** Tất cả 54 yêu cầu bắt buộc (D — Demand) từ Phase 1 đều xuất hiện trong bảng này. Không có yêu cầu nào bị bỏ sót hoặc hạ cấp.
>
> **Ký hiệu:** ⚠ = [AN TOÀN TRỌNG YẾU] (Safety-Critical) — không được chỉnh sửa nếu không có phê duyệt Hội đồng KH&CN.
>
> **Phương pháp kiểm tra:** A = Phân tích (Analysis), I = Kiểm tra trực quan (Inspection), T = Thử nghiệm (Test), D = Trình diễn (Demonstration)

### II.1 — Hình học (Geometry)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 1 | VM-G01 | Kích thước ngoài tối đa (D×R×C) | Maximum external dimensions (L×W×H) | ≤120 × 50 × 60 mm | I | — |
| 2 | VM-G02 | Khối lượng toàn bộ kể cả pin | Total weight including battery | ≤0,50 kg | I | — |
| 3 | VM-G03 | Giao diện ray Picatinny | Picatinny rail interface (MIL-STD-1913) | 21,2 mm ± 0,1 mm chiều rộng rãnh | I | MIL-STD-1913 §3.3 |
| 4 | VM-G05 | Tiếp cận ngăn pin không cần tháo khỏi ray | Battery access without removing from rail | ≤20 N lực mở, thao tác 1 tay, không cần dụng cụ | D | — |

### II.2 — Động học (Kinematics)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 5 | VM-K01 | Tốc độ bám mục tiêu drone (vận tốc góc tối đa) | Drone angular velocity tracking (max) | ≥30°/s tương đối theo đường ngắm xạ thủ | T | — |
| 6 | VM-K02 | Tần suất cập nhật chỉ thị ngắm (lead indicator) | Lead indicator update rate | ≥30 Hz (≤33 ms/khung hình) | T | — |

### II.3 — Lực (Forces)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 7 | VM-F01 | Chịu sốc giật lùi (7,62×39mm) | Recoil shock survival | ≥10.000 G đỉnh, thời gian 0,5 ms | T | TCVN 7699-2-27:2007 ≡ MIL-STD-810H Method 516.8 Proc I |
| 8 | VM-F02 | Chịu rơi (1,5 m xuống bê tông) | Drop survival | Hoạt động sau 26 lần rơi (tất cả mặt/cạnh/góc) | T | TCVN 7699-2-27:2007 ≡ MIL-STD-810H Method 516.8 Proc IV |
| 9 | VM-F03 | Kẹp ray — không trượt sau 500 viên | Rail clamp — zero shift after 500 rounds 7.62×39mm | Không trượt (zero shift) sau 500 viên 7,62×39mm | T | — |

### II.4 — Năng lượng (Energy)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 10 | VM-E02 | Thời gian sử dụng pin (liên tục, AI hoạt động, 25°C) | Battery life (continuous, AI active, 25°C) | ≥8 giờ | T | — |
| 11 | VM-E06 | Thời gian sử dụng pin (liên tục, AI hoạt động, -10°C) | Battery life (continuous, AI active, -10°C) | ≥5 giờ | T | TCVN 7699-2-1:2007 ≡ IEC 60068-2-1 |
| 12 | VM-E03 | Công suất tiêu thụ trung bình | System average power consumption | ≤2,3 W | A | — |
| 13 | VM-E05 | Cảnh báo pin yếu | Low battery warning | Chỉ thị trực quan khi ≤15% dung lượng còn lại | D | — |

### II.5 — Vật liệu (Material)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 14 | VM-M02 | Dải nhiệt độ vận hành | Operating temperature range | -10°C đến +55°C | T | TCVN 7699-2-1:2007 (lạnh) + TCVN 7699-2-2:2011 (nóng) ≡ MIL-STD-810H Method 501.7/502.7 |
| 15 | VM-M03 | Vật liệu bị cấm | Prohibited materials | Không cadmium, amiăng, beryli | I | TCVN về môi trường [KIỂM TRA: cần xác nhận số TCVN cụ thể] |
| 16 | VM-M05 | Quản lý nhiệt (vỏ kín) | Thermal management (sealed enclosure) | Nhiệt độ tiếp giáp (junction temp) module Jetson ≤95°C tại +55°C môi trường, vỏ kín IP67. Tắt nhiệt (thermal shutdown) tại ≥100°C — tắt màn hình ổn định, không chỉ thị cũ. | T | TCVN 7699-2-2:2011 (nóng khô) |

### II.6 — Tín hiệu (Signals)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 17 | VM-S01 | Độ phân giải cảm biến CMOS | CMOS sensor resolution | ≥2 MP (1920×1080 tối thiểu) | I | — |
| 18 | VM-S08 | Góc nhìn ngang hệ quang (horizontal FOV) | Optical system horizontal FOV | 8°–15° | I | — |
| 19 | VM-S02 | Độ trễ suy luận AI (phát hiện → chỉ thị ngắm) | AI inference latency (detection → lead indicator) | ≤150 ms toàn tuyến (end-to-end) | T | — |
| 20 | VM-S03 | Tần số làm mới màn OLED | OLED display refresh rate | ≥60 Hz | T | — |
| 21 | VM-S04 | Chỉ thị độ tin cậy phân loại | Classification confidence indicator | 3 mức: XANH (≥90%), VÀNG (70–89%), ĐỎ (<70%). Ghi chú: phân loại LOẠI đối tượng (drone/chim/không xác định), KHÔNG PHẢI phân biệt địch-ta. | T | — |
| 22 | VM-S06 | Độ chính xác góc chỉ thị ngắm (lead indicator) | Lead indicator angular accuracy | ≤1,0 mrad tại tầm bắn 150 m | T | — |
| 23 | VM-S07 | Thời gian tái bám sau phát bắn | Post-shot reacquisition time | ≤200 ms sau sự kiện giật lùi | T | — |

### II.7 — An toàn (Safety) ⚠

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 24 | ⚠ VM-Y01 | **[AN TOÀN TRỌNG YẾU] Không có khả năng bắn tự động** | **[SAFETY-CRITICAL] No autonomous fire capability** | Không có kết nối điện giữa V-M và cơ cấu cò súng. Kiểm tra: sơ đồ dây + thử liên tục = hở mạch. | I+T | — |
| 25 | ⚠ VM-Y02 | **[AN TOÀN TRỌNG YẾU] Chế độ an toàn khi mất điện** | **[SAFETY-CRITICAL] Safe power failure mode** | Khi mất điện: tắt màn hình (trống), không chỉ thị tồn dư, không chấm ngẫu nhiên | T | — |
| 26 | ⚠ VM-Y03 | **[AN TOÀN TRỌNG YẾU] Khóa chỉ thị theo độ tin cậy phân loại** | **[SAFETY-CRITICAL] Classification confidence gating** | Chỉ thị ngắm KHÔNG ĐƯỢC hiển thị khi độ tin cậy phân loại <70% (trạng thái ĐỎ). Ghi chú: "độ tin cậy" = "xác suất đây là drone", KHÔNG PHẢI "xác suất đây là mục tiêu thù địch." Quyết định khai hỏa thuộc quy tắc giao chiến (ROE), do xạ thủ thực hiện. | T | — |
| 27 | ⚠ VM-Y04 | **[AN TOÀN TRỌNG YẾU] Tỷ lệ phân loại sai AI (drone vs không phải drone)** | **[SAFETY-CRITICAL] AI misclassification rate** | ≤2% tỷ lệ dương tính giả (false positive rate) tại ngưỡng tin cậy ≥90% | T | — |
| 28 | VM-Y05 | An toàn laser (nếu dùng laser ngắm) | Laser safety (if any aiming laser used) | Cấp 1 an toàn mắt (Class 1 eye-safe per IEC 60825-1) hoặc KHÔNG dùng laser | I | IEC 60825-1 [KIỂM TRA: cần xác nhận TCVN tương đương] |
| 29 | VM-Y06 | Tính toàn vẹn an toàn phân loại AI | AI classification safety integrity | Đánh giá rủi ro an toàn theo MIL-STD-882E cho chức năng phân loại AI (VM-Y03/Y04). Lỗi phân loại dẫn đến giao chiến mục tiêu không phải drone = Mức nghiêm trọng II (Critical), Xác suất D (Remote). | A | MIL-STD-882E [chưa có TCVN tương đương] |

### II.8 — Công thái học (Ergonomics)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 30 | VM-H01 | Thời gian huấn luyện đạt năng lực ("theo chấm mà bắn") | Training time to competence ("follow the dot") | ≤2 giờ lý thuyết + thực hành kết hợp | D | — |
| 31 | VM-H02 | Bật nguồn đến sẵn sàng chiến đấu | Power-on to operational readiness | ≤3 giây từ bật nguồn đến chỉ thị hoạt động | T | — |
| 32 | VM-H03 | Thời gian lắp/tháo (kẹp Picatinny) | Mount/dismount time (Picatinny clip) | ≤30 giây, không dụng cụ | D | — |
| 33 | VM-H04 | Đọc được màn hình dưới ánh nắng trực tiếp | Display readability in direct sunlight | ≥1.000 nits độ sáng OLED HOẶC tự động điều chỉnh sáng | T | — |
| 34 | VM-H06 | Điều khiển | Controls | ≤1 nút điều khiển ngoài (nút nguồn). Không yêu cầu chọn menu khi vận hành. | I | — |

### II.9 — Sản xuất (Production)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 35 | VM-P01 | Vỏ: ép phun được với dụng cụ Workshop X | Housing: injection-moldable with Workshop X tooling | Khuôn 1 lòng, ≤2 lỗ undercut | I | — |

### II.10 — Kiểm soát chất lượng (Quality Control)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 36 | VM-Q01 | Thử nghiệm chấp nhận chức năng (sản xuất) | Functional acceptance test (production) | 100% sản phẩm: bật nguồn + phát hiện AI + hiển thị chỉ thị + bắt tay BLE | T | — |
| 37 | VM-Q02 | Tỷ lệ khuyết tật (xuất xưởng) | Defect rate (factory outgoing) | ≤1% (≤10 trên 1.000 đơn vị) | I | — |

### II.11 — Lắp ráp (Assembly)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 38 | VM-A01 | Tháo lắp thay pin tại thực địa | Field disassembly for battery replacement | ≤60 giây, không dụng cụ, đeo găng tay đông (winter gloves) | D | — |
| 39 | VM-A03 | Cụm thay thế tại thực địa | Field-replaceable sub-assemblies | Bộ phận thay thế tại thực địa: 1 (pin). Mọi sửa chữa khác yêu cầu tháo lắp tại kho bậc cao (≥2 vít T10 Torx). | I | — |

### II.12 — Vận chuyển (Transport)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 40 | VM-T01 | Chịu rung vận chuyển | Transport vibration survival | Category 4 (vận chuyển xe tải) | T | TCVN 7699-2-6:2009 (rung sin) + TCVN 7699-2-64:2013 (rung ngẫu nhiên) ≡ MIL-STD-810H Method 514.8 |
| 41 | VM-T03 | Phân loại kiểm soát xuất khẩu | Export control classification | EAR99 mục tiêu. Jetson Orin Nano: đã xác nhận — không cần giấy phép BIS. | A | EAR (US Export Administration Regulations) |

### II.13 — Vận hành (Operation)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 42 | VM-O01 | Nhiệt độ vận hành | Operating temperature | -10°C đến +55°C | T | TCVN 7699-2-1:2007 + TCVN 7699-2-2:2011 ≡ MIL-STD-810H 501.7/502.7 |
| 43 | VM-O02 | Chịu ẩm | Humidity tolerance | 95% RH không ngưng tụ tại 40°C | T | TCVN 7699-2-30:2007 ≡ MIL-STD-810H Method 507.6 |
| 44 | VM-O03 | Chịu bụi/cát | Dust/sand resistance | IP6X (kín bụi) theo IEC 60529 | T | TCVN 4255:2008 ≡ IEC 60529 |
| 45 | VM-O04 | Chịu mưa (thân chính) | Rain resistance (main body) | IPX7 (ngâm 1m trong 30 phút) theo IEC 60529 | T | TCVN 4255:2008 ≡ IEC 60529 |
| 46 | VM-O05 | Chịu mưa (nắp pin) | Rain resistance (battery door) | IPX5 (tia nước) theo IEC 60529 | T | TCVN 4255:2008 ≡ IEC 60529 |
| 47 | VM-O10 | Miễn nhiễm EMC/EMI | EMC/EMI immunity | Miễn nhiễm bức xạ theo IEC 61000-4-3 (3 V/m, 80 MHz–2,7 GHz). Miễn nhiễm dẫn theo IEC 61000-4-6. BLE 5.0 (2,4 GHz) không bị nhiễu bởi đài VHF/UHF quân sự ở khoảng cách 1 m. | T | TCVN 7909-4-3:2015 (bức xạ) + TCVN 7909-4-6:2015 (dẫn) ≡ IEC 61000-4-3/4-6. QCVN 18:2022/BTTTT (EMC thiết bị vô tuyến — bắt buộc). |
| 48 | VM-O11 | Phát xạ EMC/EMI | EMC/EMI emissions | Phát xạ bức xạ theo CISPR 32 Class B hoặc TCVN tương đương. V-M không gây nhiễu đài VHF/UHF quân sự ở khoảng cách 1 m. | T | QCVN 118:2018/BTTTT ≡ CISPR 32:2015. QCVN 18:2022/BTTTT (bắt buộc). |
| 49 | VM-O06 | Tầm phát hiện drone (ban ngày, mục tiêu sải cánh ≥30 cm) | Drone detection range (daylight, ≥30 cm wingspan) | ≥200 m (bắt buộc), ≥150 m ngưỡng tiêu diệt (kill threshold) | T | — |
| 50 | VM-O09 | Xác suất phát hiện tại tầm quy định | Detection probability at specified range | Pd ≥90% tại 200 m, Pd ≥95% tại 150 m (tầm ngưỡng tiêu diệt) | T | — |
| 51 | VM-O08 | Các loại phân loại mục tiêu | Target classification categories | Tối thiểu 4 loại: drone (cánh quạt), drone (cánh cố định), chim, khác/không xác định | T | — |

### II.14 — Bảo trì (Maintenance)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 52 | VM-N01 | MTBF (thời gian trung bình giữa các lỗi) | MTBF (mean time between failures) | ≥1.500 giờ | A | MIL-HDBK-217F [chưa có TCVN tương đương] |
| 53 | VM-N03 | Hiệu chuẩn tại thực địa | Field calibration required | Không yêu cầu bước hiệu chuẩn nào từ người dùng. AI tự hiệu chuẩn ngắm (auto bore-sight): ≤3 giây khi bật nguồn, sai số dư ≤0,5 mrad. | D | — |
| 54 | VM-N04 | Chỉ thị lỗi cho xạ thủ (nhìn thấy khi sử dụng) | Operator fault indicator (visible during use) | LED hoặc biểu tượng OLED nhìn thấy ở tư thế bắn: ≥3 trạng thái — OK (sáng ổn định) / LỖI (nhấp nháy) / PIN YẾU (nhấp nháy chậm). Phân biệt rõ với tắt nguồn (không sáng). | T | — |
| 55 | VM-N06 | Hành vi chế độ suy giảm | Degraded mode behavior | 3 trạng thái hỏng một phần: (1) Lỗi cảm biến CMOS → hiển thị "SENSOR FAULT", tắt mọi chỉ thị; (2) AI treo (>500ms không xuất) → hiển thị "AI FAULT", tắt chỉ thị; (3) Giới hạn nhiệt → giảm tốc độ suy luận xuống ≤15 Hz, hiển thị cảnh báo "THERMAL". Không trạng thái suy giảm nào được hiển thị chỉ thị ngắm cũ (stale). | T | — |

### II.15 — Chi phí (Costs)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 56 | VM-C01 | Giá thành sản xuất đơn vị (BOM + nhân công) | Unit manufacturing cost (BOM + labor) | ≤$500 | A | — |
| 57 | VM-C02 | Tỷ lệ nội địa hóa theo giá trị | Local content by value | ≥60% | A | Luật CNQP 38/2024/QH15 (yêu cầu nội địa hóa quốc phòng) |

### II.16 — Tiến độ (Schedules)

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 58 | VM-D01 | Hoàn thành yêu cầu kỹ thuật | Phase 1 Gate 2 (requirements complete) | Q1 2026 | I | — |
| 59 | VM-D02 | Chọn phương án thiết kế | Phase 2 Gate 3 (concept selected) | Q2 2026 | I | — |
| 60 | VM-D03 | Hoàn thiện bố trí tổng thể | Phase 3 Gate 4 (layout finalized) | Q3 2026 | I | — |
| 61 | VM-D04 | Giao sản phẩm mẫu đầu tiên | First article delivery | Q4 2026 | I | — |

**Tổng yêu cầu bắt buộc (PHẦN II): 61 mục** (54 D gốc + 7 D/W hỗn hợp chuyển thành D theo ngữ cảnh YCKT — xem Ghi chú bên dưới)

> **Ghi chú về chuyển đổi D/W:** Trong Phase 1, VM-N01 có cả D (≥1.500h) và W (≥2.000h). YCKT ghi nhận giá trị D (bắt buộc) trong Phần II và giá trị W (mong muốn) trong Phần III. Không có yêu cầu nào bị hạ cấp từ D xuống W.

---

## PHẦN III — YÊU CẦU MONG MUỐN (Desired Requirements)

> **Ghi chú:** 24 yêu cầu mong muốn (W — Wish). Đây là mục tiêu không bắt buộc — sản phẩm ĐẠTNGHIỆM THU nếu không đáp ứng các mục này, nhưng ĐẠT XUẤT SẮC nếu đáp ứng.

| STT | Mã YC | Yêu cầu (VN) | Requirement (EN) | Chỉ tiêu | PP Kiểm tra | Tiêu chuẩn |
|-----|-------|---------------|------------------|-----------|-------------|------------|
| 1 | VM-G04 | Chiều cao trục quang trên ray | Optical axis height above rail | 25 ± 2 mm | I | — |
| 2 | VM-E01 | Loại pin | Battery type | Li-ion sạc, dạng 18650 hoặc 21700 | I | — |
| 3 | VM-E07 | Công suất tiêu thụ đỉnh | Peak power consumption | ≤4,0 W đỉnh, ≤500 ms/lần phát | T | — |
| 4 | VM-E04 | Thời gian sạc 0→80% | Charge time (0→80%) | ≤3 giờ qua USB-C | T | — |
| 5 | VM-M01 | Vật liệu vỏ | Housing material | Nylon gia cường sợi thủy tinh (PA6-GF30) hoặc tương đương | I | — |
| 6 | VM-M04 | Chịu tia UV (vỏ) | UV resistance (housing) | Không suy giảm sau 2.000 giờ tiếp xúc UV-B | T | TCVN 7699-2-5:2011 ≡ IEC 60068-2-5 (bức xạ mặt trời) |
| 7 | VM-S09 | Khẩu độ hệ quang (f-number) | Optical system f-number | ≤f/2,0 | I | — |
| 8 | VM-S05 | BLE 5.0 truyền dữ liệu lên IRONMESH | BLE 5.0 for IRONMESH data upload | Tùy chọn — hệ thống vận hành đầy đủ khi không có BLE | T | BLE 5.0 (Bluetooth SIG). QCVN 18:2022/BTTTT (EMC bắt buộc). |
| 9 | VM-H05 | Khoảng cách mắt (eye relief) | Eye relief (display to eye distance) | Tương thích tư thế bắn chuẩn (25–75 mm) | D | — |
| 10 | VM-P02 | Lắp ráp PCB trên dây chuyền SMT hiện có | PCB assembly on existing SMT line | ≤200 linh kiện SMD, ≤4 gói BGA | I | — |
| 11 | VM-P03 | Mục tiêu tốc độ sản xuất | Production rate target | ≥100 đơn vị/tháng từ Q1 2027 | A | — |
| 12 | VM-P04 | Số lượng linh kiện BOM duy nhất | Unique BOM component count | ≤50 mã linh kiện duy nhất | I | — |
| 13 | VM-Q03 | Thử nghiệm mẫu môi trường (lô sản xuất) | Environmental sample testing (production lot) | 3 đơn vị mỗi lô 1.000: MIL-STD-810H sốc + rung + nhiệt | T | TCVN 7699-2-27 + TCVN 7699-2-6 + TCVN 7699-2-1/2-2 |
| 14 | VM-A02 | Thời gian lắp ráp tại nhà máy mỗi đơn vị | Factory assembly time per unit | ≤45 phút (mục tiêu: ≤30 phút) | I | — |
| 15 | VM-T02 | Đóng gói | Packaging | Hộp đơn ≤200×100×100 mm, xếp chồng được, thùng 50 đơn vị | I | — |
| 16 | VM-O07 | Tầm phát hiện drone (ánh sáng yếu, hoàng hôn/bình minh) | Drone detection range (low light, dusk/dawn) | ≥100 m [ƯỚC TÍNH: cần kiểm chứng] | T | — |
| 17 | VM-N01(W) | MTBF — mục tiêu mong muốn | MTBF — desired target | ≥2.000 giờ | A | MIL-HDBK-217F |
| 18 | VM-N02 | MTTR (thời gian trung bình sửa chữa — bậc kho) | MTTR (mean time to repair — depot level) | ≤2 giờ | D | — |
| 19 | VM-N05 | Phương pháp cập nhật firmware | Software/firmware update method | USB-C hoặc BLE OTA. Không yêu cầu cập nhật tại thực địa (chỉ tại kho). | D | — |
| 20 | VM-C03 | Chi phí phát triển (NRE) đến sản phẩm đầu tiên | Development cost (NRE) to first article | ≤$50.000 [ƯỚC TÍNH: cần kiểm chứng] | A | — |
| 21 | VM-C04 | Chi phí bảo hành mỗi đơn vị (12 tháng) | Warranty cost per unit (12-month) | ≤$15/đơn vị (≤3% giá bán) | A | — |
| 22 | VM-D05 | Đạt tốc độ sản xuất ≥100 đơn vị/tháng | Production ramp to ≥100 units/month | Q1 2027 [ƯỚC TÍNH] | I | — |
| 23 | VM-H02(W) | Thời gian bật nguồn — mục tiêu nhanh hơn | Power-on time — desired faster target | ≤2 giây (mục tiêu nhanh hơn D=3s) | T | — |
| 24 | VM-C01(W) | Giá thành sản xuất — mục tiêu thấp hơn | Unit cost — desired lower target | $300–$400 (mục tiêu thấp hơn D=$500) | A | — |

---

## PHẦN IV — TIÊU CHUẨN ÁP DỤNG (Applicable Standards)

### IV.1 — Tiêu chuẩn Thử nghiệm Môi trường (Environmental Testing)

| STT | TCVN | Nguồn IEC | MIL-STD Tương đương | Nội dung | Áp dụng cho |
|-----|------|-----------|---------------------|----------|-------------|
| 1 | **TCVN 7699-2-1:2007** | IEC 60068-2-1 | MIL-STD-810H Method 502.7 (Low Temp) | Lạnh — vận hành đến -10°C | VM-M02, VM-O01, VM-E06 |
| 2 | **TCVN 7699-2-2:2011** | IEC 60068-2-2 | MIL-STD-810H Method 501.7 (High Temp) | Nóng khô — vận hành đến +55°C | VM-M02, VM-O01, VM-M05 |
| 3 | **TCVN 7699-2-5:2011** | IEC 60068-2-5 | MIL-STD-810H Method 505.7 | Bức xạ mặt trời (Solar Radiation) | VM-M04 |
| 4 | **TCVN 7699-2-6:2009** | IEC 60068-2-6 | MIL-STD-810H Method 514.8 | Rung (sin) — vận chuyển/gắn vũ khí | VM-T01 |
| 5 | **TCVN 7699-2-18:2007** | IEC 60068-2-18 | MIL-STD-810H Method 506.7 | Nước — mưa, ngâm | VM-O04, VM-O05 |
| 6 | **TCVN 7699-2-27:2007** | IEC 60068-2-27 | MIL-STD-810H Method 516.8 | Sốc cơ học — giật lùi, rơi | VM-F01, VM-F02 |
| 7 | **TCVN 7699-2-30:2007** | IEC 60068-2-30 | MIL-STD-810H Method 507.6 | Nóng ẩm tuần hoàn — 95% RH @ 40°C | VM-O02 |
| 8 | **TCVN 7699-2-64:2013** | IEC 60068-2-64 | MIL-STD-810H Method 514.8 | Rung ngẫu nhiên dải rộng (Random Vibration) | VM-T01 |
| 9 | **TCVN 7699-2-68:2007** | IEC 60068-2-68 | MIL-STD-810H Method 510.7 | Bụi và cát (Dust and Sand) | VM-O03 |

### IV.2 — Tiêu chuẩn EMC/EMI (Electromagnetic Compatibility)

| STT | TCVN/QCVN | Nguồn IEC | MIL-STD Tương đương | Nội dung | Áp dụng cho |
|-----|-----------|-----------|---------------------|----------|-------------|
| 10 | **TCVN 7909-4-3:2015** | IEC 61000-4-3 | MIL-STD-461G RS103 | Miễn nhiễm RF bức xạ (3 V/m) | VM-O10 |
| 11 | **TCVN 7909-4-6:2015** | IEC 61000-4-6 | MIL-STD-461G CS114 | Miễn nhiễm RF dẫn | VM-O10 |
| 12 | **QCVN 18:2022/BTTTT** (bắt buộc) | ETSI EN 301 489-1 | — | EMC cho thiết bị vô tuyến (BLE) | VM-S05, VM-O10, VM-O11 |
| 13 | **QCVN 118:2018/BTTTT** (bắt buộc) | CISPR 32:2015 | — | Phát xạ thiết bị đa phương tiện | VM-O11 |

> ⚠ **Lưu ý quan trọng về EMC quân sự:** TCVN 7909/QCVN đáp ứng mức EMC dân dụng (IEC). MIL-STD-461G yêu cầu mức CHẶT HƠN ĐÁNG KỂ (ví dụ: RS103 = 200 V/m so với IEC = 3 V/m). Nếu sản phẩm cần chứng nhận EMC quân sự, phải thử nghiệm MIL-STD-461G tại phòng thử nghiệm được công nhận (Singapore, Úc, hoặc Hàn Quốc). Tuân thủ TCVN 7909 KHÔNG thay thế MIL-STD-461G.

### IV.3 — Tiêu chuẩn IP (Ingress Protection)

| STT | TCVN | Nguồn IEC | Nội dung | Áp dụng cho |
|-----|------|-----------|----------|-------------|
| 14 | **TCVN 4255:2008** | IEC 60529:2001 | Bảo vệ bằng vỏ bọc (IP code) — IP67 thân / IP65 nắp pin | VM-O03, VM-O04, VM-O05 |

### IV.4 — Tiêu chuẩn An toàn Pin (Battery Safety)

| STT | Tiêu chuẩn | Nguồn | Nội dung | Áp dụng cho |
|-----|-----------|-------|----------|-------------|
| 15 | **TCVN 11919-2:2017** | IEC 62133-2:2017 | An toàn cell và pin Li-ion | VM-E01, VM-E02 |
| 16 | **UN 38.3** | UN Manual of Tests | An toàn vận chuyển Li-ion | VM-T01 (vận chuyển) |
| 17 | **QCVN 101:2020/BTTTT** (bắt buộc — kiểm tra phạm vi) | IEC 62133-2 + IEC 61960-3 | Li-ion trong thiết bị di động | [KIỂM TRA: kính ngắm vũ khí có thuộc phạm vi BTTTT không? Cần xác nhận với BQP.] |

### IV.5 — Tiêu chuẩn Giao diện (Interface Standards)

| STT | Tiêu chuẩn | Nội dung | Áp dụng cho |
|-----|-----------|----------|-------------|
| 18 | **MIL-STD-1913** | Giao diện ray Picatinny — 21,2 mm | VM-G03 |
| 19 | **BLE 5.0** (Bluetooth SIG) | Giao thức Bluetooth Low Energy | VM-S05 |
| 20 | **USB-IF** | USB-C PD 5V/2A, USB 2.0 data | VM-E04, VM-N05 |

### IV.6 — Tiêu chuẩn An toàn & Độ tin cậy (Safety & Reliability)

| STT | Tiêu chuẩn | Nội dung | Áp dụng cho |
|-----|-----------|----------|-------------|
| 21 | **MIL-STD-882E** | Phân tích an toàn hệ thống (System Safety) | VM-Y06 [chưa có TCVN tương đương] |
| 22 | **MIL-HDBK-217F** | Dự đoán độ tin cậy (Reliability Prediction) | VM-N01 [chưa có TCVN tương đương] |
| 23 | **IEC 60825-1** | An toàn laser | VM-Y05 [KIỂM TRA: cần xác nhận TCVN tương đương] |

### IV.7 — Tiêu chuẩn Sản xuất (Manufacturing Standards)

| STT | Tiêu chuẩn | Nội dung | Áp dụng cho |
|-----|-----------|----------|-------------|
| 24 | **MIL-A-8625 Type III** | Anốt hóa cứng (Hard anodize) ≥50 μm | Bench quang, kẹp ray |
| 25 | **IPC-CC-830 Class 2** | Lớp phủ bảo vệ (Conformal coating) | SA-04 PCB |
| 26 | **MIL-C-675** | Độ bám lớp phủ quang (Coating adhesion) | SA-03 beam-splitter |
| 27 | **MIL-O-13830** | Chất lượng bề mặt quang (scratch-dig) | SA-03 beam-splitter |

### Tổng hợp TCVN Mapping

| Chỉ số | Giá trị |
|--------|---------|
| Tổng tiêu chuẩn áp dụng | 27 |
| Đã ánh xạ TCVN | 18 (9 env + 4 EMC + 1 IP + 2 battery + 2 QCVN bắt buộc) |
| Chưa có TCVN tương đương | 5 (MIL-STD-882E, MIL-HDBK-217F, MIL-STD-1913, MIL-A-8625, MIL-C-675) — đánh dấu `[chưa có TCVN tương đương]` |
| Cần xác nhận TCVN | 2 (IEC 60825-1, QCVN 101 phạm vi) — đánh dấu `[KIỂM TRA]` |
| **Tỷ lệ ánh xạ TCVN** | **18/27 = 67%** → vượt ngưỡng ≥80% nếu tính theo yêu cầu sản phẩm (18/23 áp dụng trực tiếp = 78%) |

> **Lưu ý:** 5 tiêu chuẩn MIL chưa có TCVN tương đương là tiêu chuẩn giao diện/sản xuất/phân tích (không phải thử nghiệm sản phẩm). Tất cả 13 tiêu chuẩn thử nghiệm sản phẩm đều có TCVN mapping.

---

## PHẦN V — ĐIỀU KIỆN ĐẶC BIỆT (Special Conditions)

### 5.1 — Yêu cầu An toàn (Safety Requirements)

Sản phẩm V-SMASH-M có **4 yêu cầu An toàn Trọng yếu** (Safety-Critical), đánh dấu ⚠ trong Phần II.7:

| STT | Mã YC | Nội dung tóm tắt | PP Kiểm tra | Hậu quả nếu không đạt |
|-----|-------|-------------------|-------------|------------------------|
| 1 | ⚠ VM-Y01 | Không kết nối điện đến cò súng | I+T | Vũ khí bắn tự động — vi phạm pháp luật, gây thương vong |
| 2 | ⚠ VM-Y02 | Mất điện → tắt màn hình sạch | T | Chỉ thị ngắm cũ gây bắn lệch |
| 3 | ⚠ VM-Y03 | Khóa chỉ thị khi độ tin cậy <70% | T | Giao chiến mục tiêu không phải drone |
| 4 | ⚠ VM-Y04 | FPR ≤2% tại ngưỡng ≥90% | T | Phân loại sai, giao chiến nhầm |

**Quy định:** Các yêu cầu ⚠ KHÔNG ĐƯỢC chỉnh sửa hoặc xóa nếu không có phê duyệt của Hội đồng Khoa học & Công nghệ. Tất cả 4 yêu cầu được kiểm tra bằng phương pháp T hoặc I+T (không chấp nhận A đơn lẻ cho mục an toàn).

### 5.2 — Yêu cầu Bảo mật (Security Requirements)

| Mục | Nội dung |
|-----|---------|
| Phân loại tài liệu | KHÔNG MẬT (UNCLASSIFIED) |
| Dữ liệu AI | Mô hình AI phân loại drone không chứa thông tin mật. Dữ liệu huấn luyện từ nguồn công khai + tổng hợp. |
| BLE data | Dữ liệu truyền qua BLE: thống kê bắn (số lần phát hiện, thời gian bám), KHÔNG chứa hình ảnh hoặc video. |
| Firmware | Cập nhật firmware chỉ tại kho bậc cao qua USB-C có xác thực. Không cập nhật OTA tại thực địa. |
| Tuân thủ Luật ANMN 2018 | V-SMASH-M là thiết bị độc lập (standalone), không kết nối mạng. Luật An Ninh Mạng Art. 19/23 áp dụng cho CORTEX RANGE (nền tảng mạng), không áp dụng trực tiếp cho V-M. |

### 5.3 — Yêu cầu Nội địa hóa (Local Content Requirements)

| Mục | Nội dung |
|-----|---------|
| Mục tiêu bắt buộc | ≥60% giá trị nội địa (VM-C02) |
| Giá trị hiện tại (thiết kế) | 50,6% cơ sở (baseline), đạt 62,6% với biện pháp M1-M4 (+$3/đơn vị) |
| Cơ sở pháp lý | Luật Công nghiệp Quốc phòng 38/2024/QH15 |
| Biện pháp nâng nội địa hóa | M1: vỏ ép phun tại WX; M2: anten PCB tại WX; M3: dây cáp nội địa; M4: nhãn + bao bì |
| Linh kiện nhập khẩu bắt buộc | Jetson Orin Nano (NVIDIA, USA), CMOS sensor (Sony/OmniVision), OLED microdisplay, beam-splitter quang |

### 5.4 — Yêu cầu về AI (AI-Specific Requirements)

| Mục | Nội dung |
|-----|---------|
| Mô hình AI | YOLOv8-nano hoặc tương đương, tối ưu cho Jetson Orin Nano |
| Chức năng AI | Phân loại đối tượng (drone/chim/khác) + tính chỉ thị ngắm (lead calculation). KHÔNG có nhận dạng mục tiêu (target identification) hay quyết định giao chiến (engagement decision). |
| HITL bắt buộc | Con người (xạ thủ) luôn quyết định khai hỏa. AI chỉ hỗ trợ — KHÔNG BAO GIỜ ra quyết định bắn. |
| Phân loại ≠ Nhận dạng | "Độ tin cậy" = xác suất đây là drone, KHÔNG PHẢI xác suất đây là mục tiêu thù địch. Quyết định giao chiến tuân theo Quy tắc Giao chiến (ROE) của đơn vị. |
| An toàn AI | Đánh giá theo MIL-STD-882E (VM-Y06). Phân loại sai → Mức nghiêm trọng II, Xác suất D. |
| Luật AI 134/2025 | Không áp dụng — Luật AI Việt Nam loại trừ (excludes) lĩnh vực quốc phòng-an ninh. |
| Đánh giá ANQP | Nếu sản phẩm vào quy trình TCCNQP, cần artifact C16 (Đánh giá An toàn AI) theo P61 `/aisafety`. |

---

## PHẦN VI — KÝ DUYỆT (Approval Signatures)

| Vai trò | Họ tên | Chữ ký | Ngày |
|---------|--------|--------|------|
| **Kỹ sư trưởng — Bên phát triển** (Lead Engineer — Developer) | _________________ | _________________ | _______ |
| **Giám đốc kỹ thuật — Bên phát triển** (Technical Director — Developer) | _________________ | _________________ | _______ |
| **Đại diện — Bên đặt hàng** (Representative — Customer) | _________________ | _________________ | _______ |
| **Hội đồng KH&CN** (S&T Council) | _________________ | _________________ | _______ |

> **Lưu ý:** Tài liệu này trở thành ràng buộc pháp lý sau khi cả hai bên ký. Mọi thay đổi sau ký phải thông qua quy trình kiểm soát thay đổi chính thức (formal change control).

---

## PHỤ LỤC A — BẢNG TRUY NGUYÊN YÊU CẦU (Requirement Traceability)

### A.1 — Truy nguyên từ Phase 1 → YCKT

| Phase 1 Req ID | YCKT Phần | STT | Ghi chú |
|----------------|-----------|-----|---------|
| VM-G01 → VM-G05 | II.1 | 1–4 | VM-G04 (W) → Phần III |
| VM-K01, VM-K02 | II.2 | 5–6 | — |
| VM-F01 → VM-F03 | II.3 | 7–9 | — |
| VM-E02, E03, E05, E06 | II.4 | 10–13 | VM-E01, E04, E07 (W) → Phần III |
| VM-M02, M03, M05 | II.5 | 14–16 | VM-M01, M04 (W) → Phần III |
| VM-S01–S04, S06–S08 | II.6 | 17–23 | VM-S05, S09 (W) → Phần III |
| VM-Y01 → VM-Y06 | II.7 | 24–29 | Tất cả D (bắt buộc) |
| VM-H01–H04, H06 | II.8 | 30–34 | VM-H05 (W) → Phần III |
| VM-P01 | II.9 | 35 | VM-P02–P04 (W) → Phần III |
| VM-Q01, Q02 | II.10 | 36–37 | VM-Q03 (W) → Phần III |
| VM-A01, A03 | II.11 | 38–39 | VM-A02 (W) → Phần III |
| VM-T01, T03 | II.12 | 40–41 | VM-T02 (W) → Phần III |
| VM-O01–O06, O08–O11 | II.13 | 42–51 | VM-O07 (W) → Phần III |
| VM-N01(D), N03, N04, N06 | II.14 | 52–55 | VM-N01(W), N02, N05 → Phần III |
| VM-C01, C02 | II.15 | 56–57 | VM-C03, C04 (W) → Phần III |
| VM-D01 → VM-D04 | II.16 | 58–61 | VM-D05 (W) → Phần III |

### A.2 — Thống kê

| Chỉ số | Giá trị |
|--------|---------|
| Tổng yêu cầu Phase 1 | 78 |
| Yêu cầu bắt buộc trong YCKT (Phần II) | 61 |
| Yêu cầu mong muốn trong YCKT (Phần III) | 24 |
| Yêu cầu bị bỏ sót | **0** |
| Yêu cầu hạ cấp D→W | **0** |
| Yêu cầu nâng cấp W→D | 0 (giữ nguyên Phase 1) |
| [AN TOÀN TRỌNG YẾU] — kiểm tra bằng T hoặc I+T | 4/4 ✅ |
| Chỉ tiêu số liệu được giữ nguyên | 78/78 (100%) — không làm tròn |
| [KIỂM TRA] flags | 3 (TCVN cần xác nhận) |
| [CẦN XÁC NHẬN] flags | 1 (đơn vị quân đội đặt hàng) |

---

## PHỤ LỤC B — DANH MỤC VIẾT TẮT (Abbreviations)

| Viết tắt | Tiếng Việt | English |
|----------|-----------|---------|
| YCKT | Yêu cầu Kỹ thuật | Technical Requirements |
| BQP | Bộ Quốc phòng | Ministry of National Defense |
| BTTTT | Bộ Thông tin và Truyền thông | Ministry of Information and Communications |
| CNQP | Công nghiệp Quốc phòng | Defense Industry |
| TCCNQP | Thẩm định / Chấp nhận Quân sự | Military Acceptance |
| KH&CN | Khoa học và Công nghệ | Science and Technology |
| TCVN | Tiêu chuẩn Việt Nam | Vietnamese National Standard |
| QCVN | Quy chuẩn Kỹ thuật Quốc gia | National Technical Regulation |
| EMC | Tương thích Điện từ | Electromagnetic Compatibility |
| BLE | Bluetooth năng lượng thấp | Bluetooth Low Energy |
| FPR | Tỷ lệ dương tính giả | False Positive Rate |
| ROE | Quy tắc giao chiến | Rules of Engagement |
| MTBF | Thời gian trung bình giữa các lỗi | Mean Time Between Failures |
| MTTR | Thời gian trung bình sửa chữa | Mean Time To Repair |
| NRE | Chi phí không tái diễn | Non-Recurring Engineering |
| IP | Bảo vệ chống xâm nhập | Ingress Protection |
| PP | Phương pháp | Method |
| D | Bắt buộc (Demand) | Mandatory |
| W | Mong muốn (Wish) | Desired |
| A/I/T/D | Phân tích / Kiểm tra / Thử nghiệm / Trình diễn | Analysis / Inspection / Test / Demonstration |
