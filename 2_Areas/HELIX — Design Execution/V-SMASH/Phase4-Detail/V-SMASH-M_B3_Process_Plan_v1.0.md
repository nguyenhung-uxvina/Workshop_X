---
project: V-SMASH-M
phase: 4
type: manufacturing-process-plan
artifact: B3
prompt: P62
version: 1.0
created: 2026-02-23
status: approved-conditional
family: V-SMASH
inputs:
  - V-SMASH-M_BOM_v1.0.md (P33 — 71 parts, $202/unit)
  - V-SMASH-M_DfX_Analysis_v1.0.md (P25 — avg 3.42/5)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (23 steps, 77 min/unit)
  - V-SMASH-M_Standards_Compliance_Matrix_v1.0.md (15 standards)
  - V-SMASH-M_Material_Selection_v1.0.md (P24)
  - V-SMASH-M_Cost_Analysis_v1.0.md (P35 — $168/unit at 500 qty)
  - IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md
bom_version: Rev A (frozen 2026-02-22)
total_operations: 30
total_qc_points: 11
safety_critical_qc: 3
---

# QUY TRÌNH CÔNG NGHỆ SẢN XUẤT — V-SMASH-M
# Manufacturing Process Plan — V-SMASH-M (Micro AI Weapon Sight)

---

## PHẦN I — THÔNG TIN CHUNG (General Information)

| Mục | Nội dung |
|-----|---------|
| **1.1 Tên sản phẩm** | V-SMASH-M — Kính ngắm vũ khí AI thu nhỏ (Micro AI Weapon Sight) |
| **1.2 Mã sản phẩm** | VM-0000 |
| **1.3 Phiên bản quy trình** | 1.0 |
| **1.4 BOM tham chiếu** | V-SMASH-M_BOM_v1.0.md, Rev A, 2026-02-22 |
| **1.5 Sản lượng mục tiêu** | 500 đơn vị/năm (Year 1-2), mở rộng 2.000/năm (Year 3+) |
| **1.6 Nhà máy sản xuất** | Workshop X (WX), Hà Nội [CẦN XÁC NHẬN — địa chỉ chính xác] |
| **1.7 Ngày ban hành** | 2026-02-23 |
| **1.8 Người phê duyệt** | Kỹ sư quy trình: _______ / Quản lý QC: _______ / Quản lý SX: _______ / Giám đốc KT: _______ |

---

## PHẦN II — SƠ ĐỒ QUY TRÌNH (Process Flow Diagram)

```
                    NGUYÊN VẬT LIỆU ĐẦU VÀO
                    (Incoming Materials)
                              │
                    ┌─────────┴─────────┐
                    │                   │
              ◇ QC-01              ◇ QC-02
         KT nhập khẩu          KT nội địa
        (Import inspect)      (Local inspect)
                    │                   │
                    └─────────┬─────────┘
                              │
              ┌───────────────┼───────────────┐
              │               │               │
     ┌────────▼───────┐ ┌────▼────┐  ┌───────▼───────┐
     │ 🟡 SMT LINE    │ │ 🔴 OPT  │  │ 🔴 MECH       │
     │ SA-04 PCB Assy │ │ ASSEMBLY │  │ SA-05 Housing │
     │ OP-030→OP-090  │ │ SA-01/03 │  │ Prep          │
     │                │ │ OP-100   │  │ OP-120        │
     │                │ │ OP-110   │  │               │
     └────────┬───────┘ └────┬────┘  └───────┬───────┘
              │               │               │
         ◇ QC-03         ◇ QC-05         ◇ QC-06
        AOI+X-ray      PR-05 align    ⚠ PR-11 align
              │               │               │
              └───────────────┼───────────────┘
                              │
                    ┌─────────▼─────────┐
                    │ 🔴 TÍCH HỢP       │
                    │ (Integration)      │
                    │ OP-130→OP-230      │
                    └─────────┬─────────┘
                              │
                         ◇ QC-07, QC-08
                      Torque + seal verify
                              │
                    ┌─────────▼─────────┐
                    │ 🟡 FIRMWARE + TEST │
                    │ OP-240→OP-260      │
                    └─────────┬─────────┘
                              │
                     ⚠ ◇ QC-09, QC-10
                    EOL test + bore-sight
                              │
                    ┌─────────▼─────────┐
                    │ 🔴 HOÀN THIỆN      │
                    │ (Finishing)         │
                    │ OP-270→OP-300       │
                    └─────────┬─────────┘
                              │
                         ◇ QC-11
                      Final inspection
                              │
                    ┌─────────▼─────────┐
                    │ ▽ THÀNH PHẨM      │
                    │ (Finished Goods)    │
                    └───────────────────┘
```

**Ký hiệu (Symbols):**
- ○ = Bắt đầu/Kết thúc | □ = Công đoạn | ◇ = Kiểm tra | ▽ = Lưu kho
- 🟢 Tự động (Automated) | 🟡 Bán tự động (Semi-automated) | 🔴 Thủ công (Manual)
- ⚠ = Điểm kiểm soát an toàn (Safety QC Hold)

---

## PHẦN III — BẢNG CÔNG ĐOẠN CHI TIẾT (Detailed Operation Table)

### Nhóm A — Kiểm tra Đầu vào (Incoming Inspection)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 1 | **OP-010** | Kiểm tra đầu vào — NVL nhập khẩu | Incoming inspection — imported | Kiểm tra ngoại quan, kích thước, chứng chỉ CoC cho tất cả NVL nhập khẩu. Đối chiếu PO. | WS-QC01 | — | Thước cặp, kính lúp 4x | Theo spec từng item | 0.5 (amortized/unit) | TCVN 7790-1 (AQL 1.0 cấp II) | **KT100%** (3 lô đầu), KTmẫu sau | VM-1101, 1200, 1201, 2101-2104, 3101-3105, 4102-4114, 5402, 5502, 6101-6102, 6105, 7101, 7106-7107, 8101-8103 | Lô đầu tiên: 100% kiểm tra. Sau 3 lô không lỗi → chuyển AQL |
| 2 | **OP-020** | Kiểm tra đầu vào — NVL nội địa | Incoming inspection — local | Kiểm tra ngoại quan, kích thước, chứng chỉ cho NVL sản xuất trong nước | WS-QC01 | — | Thước cặp, đồng hồ so | Theo spec từng item | 0.3 (amortized/unit) | TCVN 7790-1 (AQL 2.5 cấp II) | **KTmẫu** | VM-1102-1103, 1204, 3106-3108, 4101, 5101, 5201-5203, 5301-5303, 5401, 5501, 5503-5505, 5601-5603, 5701-5702, 5801-5802, 6103-6104, 7102-7105, 8104-8107 | NCC đã đánh giá: AQL. NCC mới: 100% |

### Nhóm B — Lắp ráp PCB / SMT (PCB Assembly Line)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 3 | **OP-030** | In kem hàn | Solder paste printing | In kem hàn SAC305 lên PCB qua stencil. Kiểm tra SPI tự động sau in. | WS-SMT01 | Máy in kem hàn (DEK/MPM) | Stencil 0.12mm, dao gạt | Áp lực: 5 kg, Tốc độ: 25 mm/s, Nhiệt độ kem: 25±3°C | 1 | IPC J-STD-001 [chưa có TCVN tương đương] | **SPI auto** | VM-4101, 4113 | Kem SAC305 — RoHS. Hạn sử dụng: kiểm tra ngày. Bảo quản 2-8°C |
| 4 | **OP-040** | Đặt linh kiện SMT | SMT component placement | Đặt linh kiện bề mặt: R, C, L, IC, LED, nút nhấn, connector ZIF, module BLE, antenna | WS-SMT01 | Máy P&P (Pick & Place) | Bộ feeder F-01 | Chương trình P&P theo BOM, ~65 component/board | 3 | — | **AOI auto** (sau OP-060) | VM-4102-4109, 4111, 4114, 4107 (kit ~50 passive) | Chương trình P&P: xác nhận Version trước chạy lô |
| 5 | **OP-050** | Đặt linh kiện BGA | BGA component placement | Đặt VM-2101 (Jetson Orin Nano), VM-2103 (eMMC), VM-2104 (LPDDR4) — các IC dạng BGA | WS-SMT01 | Máy P&P (chế độ BGA) | BGA nozzle | Lực đặt: theo spec nhà SX. Vị trí: ±0.05mm | 2 | IPC-7095 [chưa có TCVN tương đương] | **X-ray** (sau OP-060) | VM-2101, 2103, 2104 | VM-2101: kiểm tra mã hàng + date code trước đặt. ~~[EXPORT-REVIEW]~~ EAR cleared. |
| 6 | **OP-060** | Hàn reflow | Reflow soldering | Hàn reflow toàn bộ PCB đã đặt linh kiện (SMT + BGA). Profile nhiệt theo SAC305. | WS-SMT01 | Lò reflow (≥8 zone) | Thermocouple profile kit | Peak: 245±5°C, TAL (>217°C): 60-90s, Ramp: 1-3°C/s | 5 | IPC J-STD-001 [chưa có TCVN] | *(sau bước)* | VM-4101 + all SMT | Profile chạy mẫu đầu tiên mỗi lô. Ghi profile bằng data logger |
| 7 | **OP-070** | Kiểm tra quang tự động + X-ray | AOI + X-ray inspection | (a) AOI: kiểm tra 100% mối hàn bề mặt. (b) X-ray: kiểm tra BGA void ≤25%, cầu hàn, thiếu hàn. | WS-SMT01 | AOI camera; X-ray (thuê/outsource nếu cần) | — | AOI: IPC-A-610 Class 2. X-ray: void ≤25% diện tích pad | 5 | IPC-A-610 [chưa có TCVN] | **KT100%** (AOI), **KTmẫu** (X-ray: 1/10 board) | SA-04 PCB assy | X-ray: outsource nếu WX không có máy. [CẦN XÁC NHẬN thiết bị] |
| 8 | **OP-080** | Phủ bảo vệ conformal coating | Conformal coating application | Phun hoặc quét lớp bảo vệ acrylic lên PCB đã lắp. Che chắn connector, nút nhấn, antenna. | WS-CC01 | Buồng phun (spray booth) | Bình phun / brush, băng keo che (masking tape) | Độ dày: 25-75 μm. Vùng che: ZIF connector, tactile switch, antenna, USB-C | 5 + 120 (cure) | IPC-CC-830 Class 2 [chưa có TCVN] | **KT ngoại quan** — phủ đều, không bọt, không chảy | VM-4110 | ⚠ Làm việc trong buồng có hút khí. PPE: khẩu trang hoạt tính + kính bảo hộ. Thời gian sấy 2h có thể batch qua đêm |
| 9 | **OP-090** | Kiểm tra sản phẩm PCB đầu tiên | First article PCB inspection | Kiểm tra chi tiết board đầu tiên mỗi lô: ngoại quan + chức năng cơ bản (power-on, BLE scan) | WS-SMT01 | Multimeter, kính lúp 4x | — | Power-on: 3.3V/5V rail OK. BLE broadcast detected. No short circuit. | 3 | IPC-A-610 Class 2 | **KT100%** (first article), **KTmẫu** (lô) | SA-04 complete | Nếu first article FAIL → dừng lô, kiểm tra nguyên nhân |

### Nhóm C — Lắp ráp Quang học (Optical Sub-Assembly)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 10 | **OP-100** | Lắp cụm ống kính + cảm biến (SA-01) | Sensor module assembly | Lắp lens vào barrel → cố định bằng retaining ring → lắp CMOS sensor + shim → bắt vít M2 + Loctite + nylon washer → kiểm tra trên PR-05 jig | WS-OPT01 | Jig PR-05 (V-block + collimated target) | Cờ lê mô-men M2 (0.3 Nm), keo Loctite 243 | Mô-men: 0.3 Nm. FOV center: ±5 pixel. Shim chọn: 0.05/0.10/0.20mm | 5 | MIL-O-13830 (optics quality) | **KT100%** — FOV center ±5px trên PR-05 | VM-1101-1204 | Phòng sạch hoặc bàn sạch laminar flow. Đeo găng tay không bụi |
| 11 | **OP-110** | Lắp cụm hiển thị OLED (SA-03) | Display module assembly | Lắp OLED + relay lens + beam-splitter vào display mount → căn chỉnh trên PR-11 jig → UV-cure lock (không thể tháo) | WS-OPT01 | Jig PR-11 (bore-sight alignment) | Đèn UV cure, keo VM-3105, cờ lê mô-men M2 (0.3 Nm) | Bore-sight alignment: ≤0.2 mrad. UV cure: 30s @ 365nm. Loctite 243 trên vít M2 | 8 | MIL-O-13830, MIL-C-675 (coating) | ⚠ **KT100%** — bore-sight ≤0.2 mrad. **[SAFETY-CRITICAL]**: alignment ảnh hưởng trực tiếp đến chỉ thị dẫn bắn VM-S06 | VM-3101-3108 | ⚠ UV-cure là KHÔNG THỂ ĐẢO NGƯỢC. Nếu alignment FAIL sau cure → phải loại bỏ cụm SA-03. Kiểm tra KỸ trước cure. |

### Nhóm D — Chuẩn bị Vỏ (Housing Preparation)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 12 | **OP-120** | Ép insert đồng thau vào vỏ dưới | Heat-set brass inserts | Ép 4× insert đồng thau M2.5 vào boss nhựa PA6-GF30 của vỏ dưới bằng máy ép nhiệt | WS-MECH01 | Máy ép nhiệt (heat insertion press) [CÓ SẴN] | Đầu ép M2.5 | Nhiệt độ: 200±10°C. Thời gian: 3-5s/insert. Lực: 30-50N | 3 | — | **KTmẫu** — kiểm tra pull-out ≥200N (1/10 vỏ) | VM-5201, 5203 | 4 insert/vỏ. Pull-out test phá hủy → chỉ sample |

### Nhóm E — Tích hợp (Integration Assembly)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 13 | **OP-130** | Lắp bench quang học vào vỏ dưới | Optical bench installation | Đặt optical bench AA7075-T6 vào vỏ dưới → bắt 4× vít M3 + nylon washer + Loctite 243 → kiểm tra mô-men | WS-MECH01 | — | Cờ lê mô-men T10 Torx (0.8 Nm), Loctite 243 | Mô-men: 0.8 Nm. Nylon washer PHẢI có (cách ly điện hóa Al/SS). | 3 | DIN 912 (M3) | **KT100%** — mô-men xác nhận + washer đúng vị trí | VM-5301, 5302, 5303 | ⚠ Nylon washer bắt buộc — thiếu sẽ gây ăn mòn điện hóa (P23 IMP-04 3-layer) |
| 14 | **OP-140** | Lắp SA-01 (cụm cảm biến) vào bench | Sensor module to bench | Đặt SA-01 vào pocket trước của optical bench (H7 register bore) → bắt vít M2 + nylon washer + Loctite 243 | WS-MECH01 | — | Cờ lê mô-men M2 (0.3 Nm), Loctite 243 | Mô-men: 0.3 Nm. Cụm phải ngồi hoàn toàn trong register bore H7. | 2 | — | **KT ngoại quan** — seated trong bore, vít đủ | VM-1000 (SA-01 assy), 1202, 1203 | |
| 15 | **OP-150** | Lắp SA-03 (cụm hiển thị) vào bench | Display module to bench | Đặt SA-03 vào pocket sau của optical bench → bắt vít M2 + nylon washer + Loctite 243 → bore-sight verify nhanh | WS-MECH01 | — | Cờ lê mô-men M2 (0.3 Nm), Loctite 243 | Mô-men: 0.3 Nm. Quick bore-sight check: alignment vẫn ≤0.5 mrad sau lắp. | 2 | — | **KT ngoại quan** — seated, bore-sight quick check | VM-3000 (SA-03 assy), 3107, 3108 | Nếu alignment xê dịch > 0.5 mrad → kiểm tra bench flatness |
| 16 | **OP-160** | Đặt tấm dẫn nhiệt + tản nhiệt | Thermal pad + heat spreader | Đặt thermal pad VM-2102 lên vị trí SoC trên PCB. Lắp heat spreader VM-5401 vào vỏ + thermal pad VM-5402. | WS-MECH01 | — | Nhíp, alcohol cleaning pad | Thermal pad căn giữa SoC. Heat spreader tiếp xúc đều — không khe hở. | 2 | — | **KT ngoại quan** — pad centered, no airgap | VM-2102, 5401, 5402 | Không chạm mặt thermal pad bằng tay trần — dầu da giảm truyền nhiệt |
| 17 | **OP-170** | Lắp PCB (SA-04+SA-02) lên standoff | PCB mounting to housing | Đặt PCB assembly lên 4× standoff M2.5 → bắt 4× cap screw M2.5 + Loctite 243. SoC thermal pad tiếp xúc heat spreader. | WS-MECH01 | — | Cờ lê mô-men M2.5 (0.5 Nm), Loctite 243 | Mô-men: 0.5 Nm. Thermal pad PHẢI tiếp xúc đều giữa SoC và heat spreader. | 3 | — | **KT100%** — mô-men + thermal contact confirmed | VM-4000 (SA-04), 5801, 5802, 8101 (Loctite) | ⚠ Kiểm tra thermal contact bằng cảm nhận — PCB không được lỏng/rung |
| 18 | **OP-180** | Kết nối cáp flex MIPI | Flex cable connections | Kết nối MIPI CSI-2 (SA-01→SA-04) và MIPI DSI (SA-04→SA-03). Đóng clip ZIF. | WS-ELEC01 | — | Nhíp ESD | Cáp ngồi đúng slot ZIF. Clip đóng hoàn toàn. Không gấp cáp quá bán kính tối thiểu (5mm). | 2 | — | **KT ngoại quan** — clip locked, cable không gấp quá | VM-1201, 3104 | Thao tác ESD: đeo vòng tay chống tĩnh điện. Cáp flex mỏng — cẩn thận không xé |
| 19 | **OP-190** | Lắp tiếp xúc pin | Battery contact installation | Lắp bộ tiếp xúc lò xo + mặt phẳng (BeCu, Ni-plated) vào vị trí battery bay. Hàn/crimp nối SA-04. | WS-ELEC01 | Máy hàn (soldering station) | Mũi hàn, thiếc SAC305 | Hàn: 320±10°C. Mối hàn bóng, đầy. Kiểm tra liên tục: OK. | 2 | IPC-A-610 Class 2 | **KT100%** — continuity check (multimeter) | VM-4111, 6102 | Dùng thiếc không chì SAC305 (RoHS) |
| 20 | **OP-200** | Đặt O-ring + đóng vỏ | O-ring placement + shell closure | Đặt O-ring NBR vào rãnh vỏ dưới (bôi mỡ silicone mỏng). Đặt vỏ trên lên → căn chỉnh theo chốt định vị. | WS-MECH01 | — | Mỡ silicone, găng tay | O-ring: không xoắn, nằm đều trong rãnh. Vỏ trên ngồi phẳng — không hở. | 2 | IEC 60529 (IP67) / TCVN 4255:2008 | **KT ngoại quan** — O-ring seated, shells flush | VM-5101, 5201, 5202 | ⚠ O-ring bị xoắn = mất IP67. Kiểm tra kỹ trước đóng vỏ |
| 21 | **OP-210** | Bắt vít đóng vỏ T10 Torx | Housing closure screws | Bắt 4× vít M4×12 DIN 7991 (flat head, T10 Torx) + nylon washer + Loctite 243. Kiểm tra mô-men. | WS-MECH01 | — | Cờ lê mô-men T10 Torx (1.5 Nm), Loctite 243 | Mô-men: 1.5 Nm. Bắt chéo (cross pattern): 1-3-2-4. Nylon washer bắt buộc. | 2 | DIN 7991 (M4) | **KT100%** — mô-men xác nhận + cross pattern | VM-5701, 5702, 8101 (Loctite) | Single tool type (T10) cho tất cả vít ngoài — DfA |
| 22 | **OP-220** | Lắp nắp pin + gasket | Battery door + gasket installation | Lắp gasket silicone vào nắp pin → lắp nắp vào vỏ dưới (hinge pin + detent latch) | WS-MECH01 | — | — | Lực detent ≥5N (cảm nhận click). Gasket nằm đều. | 0.5 | IEC 60529 (IP65) / TCVN 4255:2008 | **KT ngoại quan** — click felt, gasket seated | VM-5601, 5602, 5603 | Nắp pin tool-free per DfMaint |
| 23 | **OP-230** | Lắp clamp Picatinny | Picatinny clamp installation | Lắp clamp sub-assy (đã anodize + MoS₂) vào vỏ dưới → M6 cross-bolt + nylon washer + anti-seize → siết | WS-MECH01 | — | Cờ lê mô-men M6 (≤20 Nm), anti-seize VM-8102 | Cross-bolt: anti-seize trên ren. Mô-men: ≤20 Nm. Nylon washer M6. | 2 | MIL-STD-1913 (21.2±0.1mm slot) | **KT100%** — slot width gauge 21.2±0.1mm + torque | VM-5501-5505, 8102 | ⚠ Anti-seize BẮT BUỘC trên ren M6 — ngăn kẹt (galling) per F18 |

### Nhóm F — Firmware, Kiểm tra & Hoàn thiện (Firmware, Test & Finishing)

| STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số chính | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|---------------------|----------------|-------|------|----------|---------|----------------|----------|------------|-----|---------|---------|
| 24 | **OP-240** | Nạp firmware + hiệu chuẩn | Firmware loading + calibration | Kết nối USB-C → nạp firmware (YOLO model + OS). Hiệu chuẩn: sensor offset, OLED brightness, thermal thresholds. | WS-FW01 | PC nạp firmware, cáp USB-C | Phần mềm nạp (flasher tool) | Firmware version: [GHI VERSION]. Flash time: ~3 min. Calibration auto-run: ~2 min. | 5 | — | **KT100%** — firmware version confirmed + calibration log saved | — (firmware) | ⚠ Kiểm tra firmware version ĐÚNG trước mỗi lô. Version sai = sản phẩm không hoạt động đúng |
| 25 | **OP-250** | Kiểm tra chức năng cuối (EOL) | End-of-line functional test | Chạy test script trên PR-10 jig: (1) Power-on ≤3s, (2) AI detect mục tiêu giả, (3) OLED indicator hiển thị, (4) BLE handshake, (5) Thermal sensor đọc. Kiểm tra VM-Y01 (continuity test — no trigger connection). Kiểm tra VM-Y02 (power-fail safe). | WS-TEST01 | Jig PR-10 (EOL test) [CẦN MUA — $2,000] | Script test tự động | 5 tiêu chí: tất cả PASS. VM-Y01: continuity = OPEN (0Ω = FAIL). VM-Y02: rút nguồn → OLED blank ≤100ms. | 5 | — | ⚠ **KT100%** — **[SAFETY-CRITICAL]** VM-Y01, VM-Y02 phải PASS. Mọi FAIL → cách ly + NCR. | — | ⚠ KHÔNG ĐƯỢC BỎ QUA bước này. 100% sản phẩm. Kỹ sư kiểm tra ký mỗi kết quả. |
| 26 | **OP-260** | Kiểm tra bore-sight cuối | Final bore-sight verification | Bore-sight trên PR-11 jig: xác nhận alignment sensor-to-OLED ≤0.5 mrad sau lắp hoàn chỉnh | WS-TEST01 | Jig PR-11 (bore-sight) | — | Bore-sight error: ≤0.5 mrad (factory limit). Nếu >0.5: kiểm tra bench, re-torque. | 3 | — | ⚠ **KT100%** — **[SAFETY-CRITICAL]** bore-sight trực tiếp ảnh hưởng dẫn bắn (VM-S06, VM-N03) | — | Nếu FAIL: (a) re-torque vít bench, (b) kiểm tra shim SA-01, (c) nếu vẫn FAIL → NCR |
| 27 | **OP-270** | Đánh dấu bề mặt | Surface markings | In pad: serial number, model, safety markings, QC pass sticker | WS-PACK01 | Máy pad-print | — | Rõ ràng, không nhòe, đúng vị trí | 2 | — | **KT ngoại quan** | VM-5102, 8107 | Serial number format: VM-M-YYMM-NNNN |
| 28 | **OP-280** | Lắp pin + kiểm tra nguồn | Battery insert + power-on verify | Lắp 21700 cell → bật nguồn → xác nhận LED trạng thái, OLED hoạt động | WS-PACK01 | — | — | Power-on: OK. Battery level indicator: hiển thị. | 1 | — | **KT ngoại quan** — power-on success | VM-6101, 6104 | |
| 29 | **OP-290** | Kiểm tra tổng thể cuối | Final overall inspection | Kiểm tra ngoại quan toàn bộ: không trầy, nhãn đúng, clamp chắc, battery door click, lens sạch | WS-PACK01 | — | Kính lúp, đèn kiểm tra ≥500 lux | Không lỗi ngoại quan. Tất cả nhãn đúng vị trí. | 2 | — | **KT100%** — QC inspector senior | — | Người KT: QC inspector cấp cao |
| 30 | **OP-300** | Đóng gói + xuất kho | Packaging + kit assembly | Đặt sản phẩm trong ESD bag → foam insert → hộp. Thêm: spare battery, USB cable, cleaning cloth, T10 key, quick start guide, pouch. Nhãn lô hàng. | WS-PACK01 | — | — | Packing list: 7 items checked. Box sealed. | 2 | — | **KT100%** — packing list verified, box weight check | VM-6105, 7101-7107, 8104-8106 | Desiccant PHẢI có trong hộp (VM-8106) |

---

## PHẦN IV — PHÂN CÔNG TRẠM SẢN XUẤT (Workstation Assignment)

| Mã trạm | Tên trạm | Công đoạn (OP) | Thiết bị chính | Thiết bị phụ | Nhân lực | Yêu cầu Môi trường |
|---------|----------|----------------|---------------|-------------|---------|-------------------|
| **WS-QC01** | Trạm Kiểm tra Đầu vào | OP-010, OP-020 | — | Thước cặp, đồng hồ so, kính lúp 4x | 1 QC inspector | Chiếu sáng ≥500 lux. Bàn sạch. |
| **WS-SMT01** | Trạm Lắp ráp SMT | OP-030, OP-040, OP-050, OP-060, OP-070, OP-090 | Máy in kem hàn, máy P&P, lò reflow (8-zone), AOI camera | SPI, máy X-ray (outsource nếu cần), multimeter | 1 SMT operator + 1 QC | Nhiệt độ: 23±3°C, RH: 40-60%, **ESD protected area** (sàn dẫn, vòng tay, áo ESD) |
| **WS-CC01** | Trạm Phủ Bảo vệ | OP-080 | Buồng phun (spray booth) với hút khí | Băng keo che, bình phun | 1 operator | **Hút khí cưỡng bức** (fume extraction). Không ngọn lửa. Nhiệt độ: 20-25°C |
| **WS-OPT01** | Trạm Quang học | OP-100, OP-110 | Jig PR-05, Jig PR-11, đèn UV cure | Cờ lê mô-men M2, nhíp, keo Loctite 243, keo UV | 1 skilled technician | **Bàn sạch laminar flow** hoặc phòng sạch ISO 7. Chiếu sáng ≥1000 lux. Không bụi. Găng tay bắt buộc. |
| **WS-MECH01** | Trạm Lắp ráp Cơ khí | OP-120, OP-130, OP-140, OP-150, OP-160, OP-170, OP-200, OP-210, OP-220, OP-230 | Máy ép nhiệt (heat insertion press) | Bộ cờ lê mô-men (T10, M2, M2.5, M3, M6), Loctite 243, anti-seize, mỡ silicone | 1 assembly technician | ESD mat. Chiếu sáng ≥500 lux. |
| **WS-ELEC01** | Trạm Tích hợp Điện tử | OP-180, OP-190 | Trạm hàn (soldering station) | Nhíp ESD, multimeter, thiếc SAC305 | 1 technician | **ESD protected area**. Hút khói hàn (fume extraction). |
| **WS-FW01** | Trạm Nạp Firmware | OP-240 | PC nạp + phần mềm flasher | Cáp USB-C | 1 firmware engineer (hoặc technician được đào tạo) | ESD protected area. |
| **WS-TEST01** | Trạm Kiểm tra | OP-250, OP-260 | Jig PR-10 (EOL test) [CẦN MUA], Jig PR-11 | Oscilloscope [CÓ SẴN], multimeter | 1 test engineer | ESD. Chiếu sáng ≥500 lux. Cách ly tiếng ồn (cho kiểm tra BLE). |
| **WS-PACK01** | Trạm Đóng gói | OP-270, OP-280, OP-290, OP-300 | Máy pad-print | Kính lúp, đèn kiểm tra, cân | 1 packer + 1 QC inspector | Sạch, không bụi. |

---

## PHẦN V — DANH MỤC THIẾT BỊ VÀ DỤNG CỤ (Equipment & Tooling List)

| STT | Tên thiết bị | Mã TB | Công đoạn | Trạng thái | Hiệu chuẩn | Ghi chú |
|-----|-------------|-------|-----------|-----------|------------|---------|
| 1 | Máy in kem hàn (Solder paste printer) | EQ-001 | OP-030 | [CÓ SẴN] | 6 tháng — theo IPC | WX SMT line |
| 2 | Máy Pick & Place | EQ-002 | OP-040, OP-050 | [CÓ SẴN] | 6 tháng — feeder calibration | WX SMT line. BGA capable |
| 3 | Lò reflow (≥8 zone) | EQ-003 | OP-060 | [CÓ SẴN] | Profile calibration mỗi tháng + thermocouple check | WX SMT line |
| 4 | AOI camera | EQ-004 | OP-070 | [CÓ SẴN] | Program update per PCB revision | WX SMT line |
| 5 | SPI (Solder Paste Inspection) | EQ-005 | OP-030 | [CÓ SẴN] | 6 tháng | WX SMT line |
| 6 | Máy X-ray (BGA inspection) | EQ-006 | OP-070 | [CẦN THUÊ] | Theo nhà cung cấp | Outsource — dùng dịch vụ X-ray BGA tại Hà Nội hoặc Bắc Ninh |
| 7 | Buồng phun conformal coating | EQ-007 | OP-080 | [CÓ SẴN] | — | WX. Hút khí hoạt động |
| 8 | Jig PR-05 (Sensor alignment) | EQ-008 | OP-100 | [CẦN MUA — $2,000] | Collimated target calibration hàng năm | NRE item. V-block + collimated target |
| 9 | Jig PR-11 (Bore-sight alignment) | EQ-009 | OP-110, OP-260 | [CẦN MUA — $2,000] | Bore-sight reference calibration hàng năm | NRE item. Dùng chung OP-110 + OP-260 |
| 10 | Jig PR-10 (EOL functional test) | EQ-010 | OP-250 | [CẦN MUA — $2,000] | Script update per firmware version | NRE item. Test script tự động |
| 11 | Máy ép nhiệt (Heat insertion press) | EQ-011 | OP-120 | [CÓ SẴN] | Nhiệt kế calibration 12 tháng | WX |
| 12 | Bộ cờ lê mô-men | EQ-012 | OP-130–OP-230 | [CÓ SẴN] | Calibration 12 tháng — TCVN 9595-3 / ISO 6789 | Set: T10, M2 (0.3Nm), M2.5 (0.5Nm), M3 (0.8Nm), M4 (1.5Nm), M6 (20Nm) |
| 13 | Trạm hàn (Soldering station) | EQ-013 | OP-190 | [CÓ SẴN] | Nhiệt kế mũi hàn 6 tháng | WX. Có hút khói |
| 14 | Oscilloscope | EQ-014 | OP-250 | [CÓ SẴN] | Calibration 12 tháng | Backup measurement cho test jig |
| 15 | Multimeter | EQ-015 | OP-090, OP-190, OP-250 | [CÓ SẴN] | Calibration 12 tháng — TCVN 9595-3 | |
| 16 | Thước cặp (Caliper) | EQ-016 | OP-010, OP-020 | [CÓ SẴN] | Calibration 12 tháng — TCVN 9595-3 | Resolution: 0.01mm |
| 17 | Kính lúp 4x | EQ-017 | OP-070, OP-290 | [CÓ SẴN] | — | |
| 18 | PC nạp firmware | EQ-018 | OP-240 | [CÓ SẴN] | N/A | Cài phần mềm flasher + firmware repo |
| 19 | Đèn UV cure (365nm) | EQ-019 | OP-110 | [CẦN MUA — $200] | Cường độ kiểm tra hàng năm (UV meter) | |
| 20 | Máy pad-print | EQ-020 | OP-270 | [CÓ SẴN] | — | |
| 21 | Đồng hồ so (Dial indicator) | EQ-021 | OP-020 | [CÓ SẴN] | Calibration 12 tháng | |
| 22 | Cân điện tử (Scale) | EQ-022 | OP-300 | [CÓ SẴN] | Calibration 12 tháng | Kiểm tra trọng lượng hộp |
| 23 | Stencil PCB | TOOL-001 | OP-030 | [CẦN MUA — $150/stencil] | Thay khi mòn (~5,000 in) | Laser-cut SS 0.12mm |

**Tổng hợp trạng thái thiết bị:**

| Trạng thái | Số lượng | Chi tiết |
|-----------|---------|---------|
| **CÓ SẴN** | 17 | WX hiện có |
| **CẦN MUA** | 5 | PR-05 ($2K), PR-11 ($2K), PR-10 ($2K), UV lamp ($200), Stencil ($150) |
| **CẦN THUÊ** | 1 | X-ray BGA outsource |
| **Tổng** | **23** | **Chi phí mua sắm: ~$6,350** (NRE) |

---

## PHẦN VI — ĐỊNH MỨC VẬT TƯ VÀ LUỒNG VẬT LIỆU (Material Routing)

### 6.1 Bảng Luồng Vật liệu

| STT | Vật tư | Mã BOM | Nguồn | Nhà CC | Lead (tuần) | KT đầu vào | CĐ sử dụng | Ghi chú |
|-----|--------|--------|-------|--------|------------|-----------|------------|---------|
| 1 | Objective lens M12 | VM-1101 | NHẬP KHẨU (CN/JP) | [CẦN TÌM NCC] | 6 | KT100% — scratch-dig per MIL-O-13830 | OP-100 | |
| 2 | Lens barrel | VM-1102 | NỘI ĐỊA | Cơ khí địa phương, HN | 2 | KTmẫu AQL 2.5 — M12 thread gauge | OP-100 | |
| 3 | Retaining ring | VM-1103 | NỘI ĐỊA | Cơ khí địa phương, HN | 2 | KTmẫu | OP-100 | |
| 4 | CMOS sensor module | VM-1200 | NHẬP KHẨU | [CẦN TÌM NCC] | 8 | KT100% — functional test trước lắp | OP-100 | LONG-LEAD |
| 5 | CSI-2 flex cable | VM-1201 | NHẬP KHẨU | [CẦN TÌM NCC] | 4 (+2 HQ) | KT100% — continuity, connector OK | OP-180 | M4: local FPC khả thi |
| 6 | Sensor fasteners/washers | VM-1202-1204 | NỘI ĐỊA | Cơ khí / tiêu chuẩn, HN | 1-2 | KTmẫu | OP-100, OP-140 | |
| 7 | Jetson Orin Nano SoC | VM-2101 | NHẬP KHẨU (US) | NVIDIA (qua distributor) | 10 (+2 HQ) | KT100% — mã hàng, date code, ngoại quan | OP-050 | EAR cleared ✅. LONG-LEAD. SINGLE-SOURCE. |
| 8 | Thermal pad (SoC) | VM-2102 | NHẬP KHẨU | Bergquist/distributor | 4 (+2 HQ) | KTmẫu — độ dày 1.0mm | OP-160 | |
| 9 | eMMC 32GB | VM-2103 | NHẬP KHẨU | Distributor | 6 (+2 HQ) | KT100% — nếu module thì gộp VM-2101 | OP-050 | Nếu Jetson SoM → included |
| 10 | LPDDR4 4GB | VM-2104 | NHẬP KHẨU | Distributor | 6 (+2 HQ) | KT100% — nếu module thì gộp VM-2101 | OP-050 | Nếu Jetson SoM → included |
| 11 | OLED micro-display | VM-3101 | NHẬP KHẨU (CN) | [CẦN TÌM NCC] | 8 (+2 HQ) | KT100% — functional + pixel dead check | OP-110 | LONG-LEAD. SINGLE-SOURCE. |
| 12 | Beam-splitter BK7 | VM-3102 | NHẬP KHẨU (CN/JP) | [CẦN TÌM NCC] | 8 (+2 HQ) | KT100% — scratch-dig + R/T ratio ±5% | OP-110 | MIL-C-675, MIL-O-13830. LONG-LEAD. |
| 13 | Relay lens | VM-3103 | NHẬP KHẨU (CN/JP) | [CẦN TÌM NCC] | 6 (+2 HQ) | KT100% — AR coating visual | OP-110 | |
| 14 | DSI flex cable | VM-3104 | NHẬP KHẨU | [CẦN TÌM NCC] | 4 (+2 HQ) | KT100% — continuity | OP-180 | M4: local FPC khả thi |
| 15 | UV-cure adhesive | VM-3105 | NHẬP KHẨU | [CẦN TÌM NCC] | 4 (+2 HQ) | KTmẫu — shelf life check | OP-110 | Hạn sử dụng: bảo quản lạnh |
| 16 | Display mount bracket | VM-3106 | NỘI ĐỊA | Cơ khí CNC, HN/HCM | 2 | KTmẫu — dimensional | OP-110 | AA6061-T6 CNC |
| 17 | Display fasteners/washers | VM-3107-3108 | NỘI ĐỊA | Tiêu chuẩn | 1 | KTmẫu | OP-150 | |
| 18 | PCB bare board 4-layer | VM-4101 | NỘI ĐỊA | ABC Electronics, HCM [GIẢ ĐỊNH] | 3 | KT100% (3 lô đầu) → KTmẫu | OP-030 | FR-4, 1.6mm, ENIG |
| 19 | BLE module nRF52840 | VM-4102 | NHẬP KHẨU | Distributor | 6 (+2 HQ) | KTmẫu | OP-040 | BT SIG pre-certified |
| 20 | USB-C connector | VM-4103 | NHẬP KHẨU | Distributor | 4 (+2 HQ) | KTmẫu | OP-040 | |
| 21 | Power regulator, BattProt IC, ZIF, passives, LED, switch, antenna | VM-4104-4114 | NHẬP KHẨU | Distributor(s) | 4 (+2 HQ) | KTmẫu — bulk commodity | OP-040 | ~50 passive + 8 ICs |
| 22 | Conformal coating material | VM-4110 | NHẬP KHẨU (Henkel/Humiseal) | Distributor | 4 (+2 HQ) | KTmẫu — lot cert | OP-080 | Acrylic RoHS |
| 23 | Solder paste SAC305 | VM-4113 | NHẬP KHẨU | Distributor | 4 (+2 HQ) | KTmẫu — shelf life, temp log | OP-030 | Bảo quản 2-8°C |
| 24 | Upper shell PA6-GF30 | VM-5101 | NỘI ĐỊA (WX) | Injection molding WX | 2 | KT100% (first article) → KTmẫu | OP-200 | Zytel 70G30HSL BK039 or equiv. |
| 25 | Lower shell PA6-GF30 | VM-5201 | NỘI ĐỊA (WX) | Injection molding WX | 2 | KT100% (first article) → KTmẫu | OP-200 | O-ring groove per Parker |
| 26 | O-ring NBR | VM-5202 | NỘI ĐỊA | Cao su địa phương | 2 | KTmẫu — kích thước, Shore A | OP-200 | NBR 70 Shore A |
| 27 | Brass inserts M2.5 | VM-5203 | NỘI ĐỊA | Cơ khí, HN | 2 | KTmẫu — pull-out test | OP-120 | |
| 28 | Optical bench AA7075-T6 | VM-5301 | HỖN HỢP: plate NHẬP KHẨU + CNC & anodize NỘI ĐỊA | Plate: import (KR/CN). CNC: local. Anodize: local [CẦN ĐÁNH GIÁ NCC] | 4 | KT100% — dimensional + anodize thickness (eddy current ≥50μm) | OP-130 | ⚠ Anodize MIL-A-8625 Type III — local vendor cần qualification |
| 29 | Bench fasteners/washers | VM-5302-5303 | NỘI ĐỊA | Tiêu chuẩn | 1 | KTmẫu | OP-130 | A2-70 SS + Nylon |
| 30 | Heat spreader AA6061-T6 | VM-5401 | NỘI ĐỊA | Hòa Phát Al / CNC local | 2 | KTmẫu | OP-160 | KHÔNG anodize (thermal penalty) |
| 31 | Thermal pad (housing side) | VM-5402 | NHẬP KHẨU | Distributor | 4 (+2 HQ) | KTmẫu | OP-160 | |
| 32 | Picatinny clamp AA7075-T6 | VM-5501 | HỖN HỢP: plate NHẬP + CNC & anodize NỘI | Same as VM-5301 | 4 | KT100% — slot gauge 21.2±0.1mm + anodize ≥50μm | OP-230 | MIL-STD-1913. MIL-A-8625 Type III |
| 33 | MoS₂ dry film | VM-5502 | NHẬP KHẨU | Distributor | 4 (+2 HQ) | KTmẫu | OP-230 (pre-applied) | |
| 34 | Clamp hardware | VM-5503-5505 | NỘI ĐỊA | Tiêu chuẩn / CNC | 1-2 | KTmẫu | OP-230 | |
| 35 | Battery door | VM-5601 | NỘI ĐỊA (WX) | Injection molding WX | 2 | KTmẫu | OP-220 | |
| 36 | Gasket + hinge pin | VM-5602-5603 | NỘI ĐỊA | Cao su / cơ khí | 2 | KTmẫu | OP-220 | |
| 37 | Housing closure screws/washers | VM-5701-5702 | NỘI ĐỊA | Tiêu chuẩn | 1 | KTmẫu | OP-210 | M4 T10 Torx flat head |
| 38 | Standoffs + cap screws | VM-5801-5802 | NỘI ĐỊA | Tiêu chuẩn | 1 | KTmẫu | OP-170 | |
| 39 | 21700 Li-ion cell (×2 incl spare) | VM-6101, 6105 | NHẬP KHẨU (KR/JP) | Samsung/LG/Panasonic | 6 (+2 HQ) | KT100% — brand verify, UN38.3 cert, OCV test | OP-280, OP-300 | ⚠ Grade A ONLY. [KIỂM SOÁT XK nếu >100Wh/lô] |
| 40 | Battery contacts | VM-6102 | NHẬP KHẨU | Distributor | 4 (+2 HQ) | KTmẫu | OP-190 | BeCu Ni-plated |
| 41 | Battery labels/sleeve | VM-6103-6104 | NỘI ĐỊA | In ấn local | 1 | KTmẫu | OP-280 | |
| 42 | Accessories (cable, cloth, key, guide, pouch, anti-seize, paint pen) | VM-7101-7107 | HỖN HỢP | Nhiều NCC | 1-4 | KTmẫu — functional check | OP-300 | |
| 43 | Consumables (Loctite, anti-seize, silicone, packaging, ESD bag, desiccant, QC sticker) | VM-8101-8107 | HỖN HỢP | Nhiều NCC | 1-4 | KTmẫu — shelf life | Nhiều CĐ | |

### 6.2 Tóm tắt Nội địa hóa (Local Content Summary)

| Metric | Giá trị |
|--------|---------|
| **Tổng vật tư nội địa** | 28 mục = **$63.18** (34.3% giá trị vật tư) |
| **Tổng vật tư nhập khẩu** | 43 mục = **$120.82** (65.7% giá trị vật tư) |
| **Lao động nội địa** | **$33.50** (100% nội địa) |
| **Tổng nội địa (vật tư + lao động)** | **$93.18 / $184.00 = 50.6%** |
| **Mục tiêu** | **≥60%** |
| **Khoảng cách** | **9.4 điểm %** — yêu cầu M1-M4 |

**Lộ trình đạt 60%+ (từ P35 Cost Analysis):**

| # | Biện pháp | Giá trị NĐ thêm | L% mới | Chi phí thêm | Rủi ro |
|---|----------|----------------|--------|-------------|--------|
| M1 | Nội địa linh kiện thụ động (passive) | +$4.00 | 52.8% | $0/unit | THẤP |
| M2 | Pin Li-ion nội địa (VinES Grade A) | +$6.00 | 56.1% | +$1/unit | TRUNG BÌNH |
| M3 | Cụm quang học nội địa (coating vendor) | +$8.00 | 60.4% | +$2/unit | **CAO** — đánh giá NCC phủ quang học |
| M4 | Sản xuất FPC nội địa (Bắc Ninh) | +$4.00 | **62.6%** | $0/unit | THẤP |

---

## PHẦN VII — ĐIỂM KIỂM SOÁT CHẤT LƯỢNG (Quality Control Points)

| STT | Mã QC | Sau CĐ | Tên kiểm tra (VN) | Inspection (EN) | Loại KT | Tiêu chí ĐẠT | Tiêu chí KHÔNG ĐẠT | Thiết bị đo | Tần suất | Người KT | Biểu mẫu | Xử lý KPH |
|-----|-------|--------|-------------------|-----------------|---------|-------------|-------------------|------------|---------|---------|---------|-----------|
| 1 | **QC-01** | OP-010 | KT đầu vào NVL nhập khẩu | Imported material IQC | KT100% (3 lô đầu) → KTmẫu | Đúng mã, đúng SL, cert hợp lệ, ngoại quan OK | Sai mã, thiếu SL, cert hết hạn/giả, ngoại quan hỏng | Thước cặp, kính lúp | 100% lô (3 đầu) → AQL 1.0 | QC inspector | FM-IQC-01 | **Trả NCC** / Hold for engineer |
| 2 | **QC-02** | OP-020 | KT đầu vào NVL nội địa | Local material IQC | KTmẫu | Đúng mã, kích thước trong dung sai, cert OK | Ngoài dung sai, cert thiếu | Thước cặp, đồng hồ so | AQL 2.5 cấp II | QC inspector | FM-IQC-02 | **Trả NCC** / Sửa chữa / Nhượng bộ |
| 3 | **QC-03** | OP-070 | KT PCB sau SMT (AOI + X-ray) | Post-SMT AOI + X-ray | KT100% (AOI), KTmẫu (X-ray 1/10) | AOI: zero defect IPC-A-610 Class 2. X-ray: void ≤25%, no bridge/missing. | Bất kỳ defect AOI. X-ray void >25% hoặc bridge. | AOI camera, X-ray | 100% (AOI), 10% (X-ray) | AOI auto + QC confirm | FM-AOI-01 | Sửa chữa (rework hàn) → KT lại. 2× rework fail → **Loại bỏ** |
| 4 | **QC-04** | OP-080 | KT phủ bảo vệ | Conformal coating inspection | KT ngoại quan | Phủ đều 25-75μm, không bọt, không chảy, vùng che sạch | Bọt, phủ không đều, chảy qua connector | Kính lúp | 100% | QC inspector | FM-CC-01 | Sửa chữa (phủ lại vùng thiếu) hoặc **Loại bỏ** (nếu chảy vào connector) |
| 5 | **QC-05** | OP-100 | KT căn chỉnh cảm biến (PR-05) | Sensor alignment check | **KT100%** | FOV center ±5 pixel. Sensor seated in bore. | FOV offset >5 pixel. Sensor không seated. | Jig PR-05 | 100% | Skilled technician | FM-OPT-01 | Tháo shim, chọn lại → KT lại. 3× fail → kiểm tra lens/sensor → NCR |
| 6 | ⚠ **QC-06** | OP-110 | KT bore-sight cụm hiển thị (PR-11) | Display bore-sight alignment | ⚠ **KT100%** [SAFETY-CRITICAL] | Bore-sight ≤0.2 mrad. | Bore-sight >0.2 mrad. | Jig PR-11 | **100%** | Skilled technician + QC sign-off | FM-OPT-02 | ⚠ **Kỹ sư quyết định.** Nếu FAIL trước UV-cure → điều chỉnh. Nếu FAIL sau UV-cure → **LOẠI BỎ cụm SA-03** (irreversible). |
| 7 | **QC-07** | OP-130, OP-170, OP-210, OP-230 | KT mô-men xoắn | Torque verification | **KT100%** | Mô-men đúng spec: M2(0.3), M2.5(0.5), M3(0.8), M4(1.5), M6(≤20) Nm. Nylon washer present. | Mô-men ngoài spec. Thiếu washer. | Cờ lê mô-men đã calibrate | 100% (mỗi vít safety-critical) | Assembly tech + QC | FM-TQ-01 | Siết lại đúng mô-men. Nếu vít bị hỏng ren → thay. Nếu boss nhựa bị hỏng → NCR housing |
| 8 | **QC-08** | OP-200, OP-210 | KT seal + đóng vỏ | Seal & closure verification | **KT100%** | O-ring seated, vỏ flush, 4 vít đúng mô-men | O-ring xoắn, vỏ hở, vít thiếu | Ngoại quan + torque | 100% | Assembly tech | FM-SEAL-01 | Mở vỏ → kiểm tra O-ring → làm lại |
| 9 | ⚠ **QC-09** | OP-250 | KT chức năng cuối (EOL) | End-of-line functional test | ⚠ **KT100%** [SAFETY-CRITICAL] | (1) Power-on ≤3s ✓ (2) AI detect mục tiêu giả ✓ (3) OLED indicator hiển thị đúng ✓ (4) BLE handshake ✓ [W — cảnh báo nếu FAIL, không loại bỏ] (5) Thermal read ✓ (6) ⚠ VM-Y01: continuity = OPEN (0Ω = FAIL) ✓ (7) ⚠ VM-Y02: rút nguồn → OLED blank ≤100ms ✓ (8) ⚠ VM-Y03: đưa ảnh confidence <70% → chỉ thị dẫn bắn KHÔNG hiển thị ✓ [SAFETY-CRITICAL] (9) ⚠ VM-Y04: xác nhận phiên bản firmware/model AI = phiên bản đã validate FPR ≤2% ✓ [SAFETY-CRITICAL — kiểm tra version, không đo FPR tại dây chuyền] (10) VM-M05: lệnh firmware mô phỏng quá nhiệt → thermal shutdown kích hoạt, OLED tắt ổn định ✓ (11) VM-N06: inject lần lượt 3 lỗi (sensor fault, AI hang, thermal limit) → verify 3 trạng thái suy giảm đúng, không hiển thị chỉ thị cũ ✓ | Bất kỳ 1/11 tiêu chí FAIL (trừ #4 BLE = cảnh báo) | Jig PR-10 | **100%** — mỗi sản phẩm | **Test engineer** — ký kết quả | FM-EOL-01 | ⚠ **Cách ly sản phẩm FAIL.** Engineer phân tích → Sửa chữa → KT lại (max 2 lần). 3× FAIL → **LOẠI BỎ** + NCR. |
| 10 | ⚠ **QC-10** | OP-260 | KT bore-sight cuối | Final bore-sight verification | ⚠ **KT100%** [SAFETY-CRITICAL] | Bore-sight ≤0.5 mrad (factory limit). | Bore-sight >0.5 mrad. | Jig PR-11 | **100%** | **Test engineer** — ký | FM-BS-01 | ⚠ Re-torque bench screws → KT lại. Nếu vẫn FAIL → kiểm tra SA-01/SA-03 alignment → NCR |
| 11 | **QC-11** | OP-290 | KT tổng thể cuối | Final overall inspection | **KT100%** | Ngoại quan: không trầy, nhãn đúng. Chức năng: power-on OK. Phụ kiện: đủ 7 items. Trọng lượng: ±10g vs spec. | Lỗi ngoại quan, nhãn sai, phụ kiện thiếu | Kính lúp, cân, đèn ≥500 lux | 100% | **QC inspector senior** | FM-FINAL-01 | Sửa chữa (cosmetic) / Bổ sung thiếu / NCR (structural) |

**Tổng hợp QC:**

| Loại KT | Số điểm | Tần suất |
|---------|---------|---------|
| KT100% (bắt buộc 100%) | 8 | Mỗi sản phẩm |
| KTmẫu (sampling) | 2 | AQL theo TCVN 7790-1 |
| KT tự động (AOI/SPI) | 1 | 100% auto, human confirm |
| ⚠ SAFETY-CRITICAL | **3** (QC-06, QC-09, QC-10) | **100%, engineer ký**. QC-09: 11 tiêu chí (7→11 sau cross-ref audit v2.0), trong đó 4 SAFETY-CRITICAL (#6 VM-Y01, #7 VM-Y02, #8 VM-Y03, #9 VM-Y04). |

---

## PHẦN VIII — XỬ LÝ KHÔNG PHÙ HỢP (Non-Conformance Handling)

### 8.1 Quy tắc Chung

| Phân loại | Tiêu chí | Thẩm quyền | Hành động |
|----------|---------|-----------|----------|
| **Nghiêm trọng (Critical)** | Ảnh hưởng an toàn hoặc chức năng chính (VM-Y01-Y04, bore-sight, power) | **Kỹ sư + Quản lý QC** | Cách ly → Phân tích NC → Quyết định: Loại bỏ / Sửa chữa (max 2 lần) |
| **Lớn (Major)** | Ảnh hưởng chức năng phụ hoặc ngoại quan nghiêm trọng (BLE fail, coating defect, dimensional) | **QC inspector + Kỹ sư** | Sửa chữa → KT lại / Nhượng bộ (có lý do) / Loại bỏ |
| **Nhỏ (Minor)** | Ngoại quan nhẹ, không ảnh hưởng chức năng (nhãn lệch, trầy nhẹ) | **QC inspector** | Sửa tại chỗ / Nhượng bộ |

### 8.2 Xử lý theo QC Point

| QC Point | NC Thường gặp | Xử lý | Rework Max |
|----------|--------------|-------|-----------|
| QC-03 (AOI) | Thiếu hàn, cầu hàn, xoay component | Hàn lại bằng trạm rework | 2 lần |
| QC-05 (PR-05) | FOV offset | Thay shim, điều chỉnh | 3 lần |
| ⚠ QC-06 (PR-11) | Bore-sight >0.2 mrad sau UV-cure | **LOẠI BỎ SA-03** — không thể sửa chữa (irreversible bond) | 0 (pre-cure: unlimited; post-cure: 0) |
| QC-07 (Torque) | Mô-men sai | Tháo → siết lại đúng mô-men | Unlimited |
| QC-08 (Seal) | O-ring xoắn | Mở vỏ → đặt lại O-ring | Unlimited |
| ⚠ QC-09 (EOL) | AI FAIL, BLE FAIL, power FAIL | Firmware re-flash → KT lại. Hardware fault → NCR | 2 lần |
| ⚠ QC-10 (Bore-sight) | >0.5 mrad | Re-torque bench → KT lại | 2 lần; vẫn fail → NCR |
| QC-11 (Final) | Nhãn sai, phụ kiện thiếu | Sửa/bổ sung tại chỗ | Unlimited |

### 8.3 Biểu mẫu NCR

Sử dụng biểu mẫu **NCR-VM-YYYY-NNN** (xem template tại ANQP_B3_Process_Plan.md §8.5). Mỗi NCR phải có:
1. Mô tả không phù hợp
2. Phân loại (Critical/Major/Minor)
3. Phân tích nguyên nhân gốc (5-Why)
4. Hành động khắc phục
5. Xác nhận đóng bởi QC Manager

---

## PHẦN IX — AN TOÀN LAO ĐỘNG (Occupational Safety)

| STT | Công đoạn | Nguy cơ | Biện pháp | PPE | Tiêu chuẩn |
|-----|-----------|--------|-----------|-----|-----------|
| 1 | OP-030 (In kem hàn) | Tiếp xúc kem hàn (chì-free nhưng vẫn có flux độc) | Không ăn/uống tại trạm. Rửa tay sau thao tác. | Găng tay nitrile | Luật ATVSLĐ 2015 |
| 2 | OP-060 (Hàn reflow) | Bề mặt nóng (lò reflow >200°C). Hơi flux. | Vùng cấm tiếp cận khi lò hoạt động. Hút khí. | Không chạm lò. Dấu hiệu cảnh báo nóng. | Luật ATVSLĐ 2015, TCVN 5507:2002 |
| 3 | OP-080 (Conformal coating) | Hơi dung môi (acrylic coating). Nguy cơ cháy. | **Buồng phun có hút khí cưỡng bức.** Không ngọn lửa/tia lửa. Thông gió ≥10 lần/giờ. | **Khẩu trang hoạt tính** (activated carbon mask), **kính bảo hộ**, găng tay nitrile | Luật ATVSLĐ 2015 |
| 4 | OP-110 (UV cure) | Bức xạ UV 365nm — nguy cơ mắt + da | **Không nhìn trực tiếp vào đèn UV.** Che chắn khi cure. | **Kính chống UV**, găng tay | Luật ATVSLĐ 2015 |
| 5 | OP-120 (Ép nhiệt insert) | Bề mặt nóng (200°C). Bỏng tiếp xúc. | Sử dụng kẹp. Không chạm đầu ép nóng. | Găng tay chịu nhiệt | Luật ATVSLĐ 2015 |
| 6 | OP-190 (Hàn tay) | Hơi thiếc. Bỏng mũi hàn. | Hút khói hàn tại chỗ. Giá đỡ mũi hàn. | Kính bảo hộ, khẩu trang | Luật ATVSLĐ 2015 |
| 7 | OP-280 (Lắp pin Li-ion) | Pin Li-ion: ngắn mạch, cháy, nổ nếu hỏng | Không đâm thủng, cắt, hoặc ngắn mạch pin. Bảo quản tránh nhiệt >60°C. Bình chữa cháy Li-ion trong tầm tay. | Kính bảo hộ | UN38.3, Luật ATVSLĐ 2015 |
| 8 | Tất cả trạm điện tử | ESD — phá hủy linh kiện | Sàn ESD, vòng tay chống tĩnh điện, áo ESD. Kiểm tra ESD hàng ngày. | Vòng tay ESD, áo ESD | ANSI/ESD S20.20 |
| 9 | Kho hóa chất | Bảo quản Loctite, anti-seize, conformal coat, solder paste | Tủ hóa chất có khóa. MSDS dán tại chỗ. Nhiệt độ theo yêu cầu (solder paste 2-8°C). | Theo MSDS từng chất | TCVN 5507:2002, Luật ATVSLĐ 2015 |

**Quy tắc chung:**
- Bình chữa cháy ABC trong mỗi khu vực sản xuất
- Bảng MSDS cho tất cả hóa chất sử dụng, dán tại trạm
- Tập huấn an toàn lần đầu + nhắc lại hàng năm cho tất cả nhân viên
- Xử lý chất thải nguy hại (thiếc, dung môi, pin hỏng) theo TCVN ISO 14001:2015

---

## PHẦN X — THỜI GIAN CHU KỲ VÀ NĂNG LỰC (Cycle Time & Capacity)

### 10.1 Tổng thời gian Chu kỳ

| Nhóm | Công đoạn | Thời gian (phút) | Ghi chú |
|------|-----------|-------------------|---------|
| A — KT đầu vào | OP-010, OP-020 | 0.8 (phân bổ/unit) | Batch — không trên critical path |
| B — SMT line | OP-030→OP-090 | 27 | Chưa tính cure 2h (batch qua đêm) |
| C — Quang học | OP-100, OP-110 | 13 | Song song với B (parallel) |
| D — Housing prep | OP-120 | 3 | Song song với B, C (parallel) |
| E — Tích hợp | OP-130→OP-230 | 22.5 | Tuần tự (sequential) |
| F — FW + Test | OP-240→OP-260 | 13 | Tuần tự |
| G — Hoàn thiện | OP-270→OP-300 | 7 | Tuần tự |
| **Tổng tuần tự** | | **77 phút** | (B/C/D parallel, E→F→G sequential) |
| **Conformal coat cure** | | **120 phút** | Batch qua đêm — không trên critical path |

**Critical Path (đường tới hạn):**

```
Day N:   SMT line (27 min) ──→ Conformal coat (5 min) ──→ Cure overnight (2h batch)
         [Parallel: Optical assy (13 min) + Housing prep (3 min)]

Day N+1: Integration (22.5 min) → FW+Test (13 min) → Finishing (7 min) = 42.5 min
```

**Thời gian sản xuất thực/unit (Day N+1 only): 42.5 phút** (pre-assembly done Day N)

### 10.2 Công đoạn Nút thắt (Bottleneck)

| Bottleneck | Thời gian | Lý do | Biện pháp |
|-----------|----------|-------|----------|
| **OP-110** (OLED alignment) | **8 phút** | Yêu cầu PR-11 jig + kỹ thuật viên lành nghề. UV-cure không đảo ngược. | Tại 500/năm: 1 jig đủ. Tại 2,000/năm: mua jig thứ 2 ($2K) |
| **OP-250** (EOL test) | **5 phút** | Mỗi sản phẩm phải test 100%. | Tại 2,000/năm: mua PR-10 thứ 2 ($2K) |

### 10.3 Năng lực Sản xuất (Capacity)

| Thông số | Giá trị |
|----------|---------|
| Thời gian ca (shift) | 480 phút (8 giờ) |
| Hệ số hiệu quả (efficiency) | 85% |
| Thời gian khả dụng / ca | 408 phút |
| Thời gian sequential / unit (Day N+1) | 42.5 phút |
| **Sản lượng / ca** | **408 / 42.5 ≈ 9 units/ca** |
| Sản lượng / ngày (1 ca) | 9 units |
| Sản lượng / tháng (22 ngày) | **198 units** |
| Sản lượng / năm (1 ca) | **~2,370 units** |
| **Mục tiêu 500/năm** | **Đạt** — sử dụng ~21% công suất 1 ca |
| **Mục tiêu 2,000/năm** | **Đạt** — sử dụng ~84% công suất 1 ca |

### 10.4 Cân bằng Chuyền (Line Balance)

| Trạm | Thời gian / unit | % Bottleneck |
|------|------------------|-------------|
| WS-SMT01 | 27 min (batch Day N) | N/A (parallel) |
| WS-OPT01 | 13 min (parallel Day N) | N/A (parallel) |
| WS-MECH01 | 25.5 min (OP-120→OP-230) | 60% |
| WS-ELEC01 | 4 min (OP-180, OP-190) | 9% |
| WS-FW01 | 5 min | 12% |
| WS-TEST01 | 8 min (OP-250, OP-260) | 19% |
| WS-PACK01 | 7 min (OP-270→OP-300) | 16% |

**Bottleneck trạm integration (WS-MECH01): 25.5 min.** Tại 2,000/năm: xem xét chia WS-MECH01 thành 2 trạm (pre-integration + integration).

### 10.5 Thời gian Thiết lập (Setup Time)

| Changeover | Thời gian | Ghi chú |
|-----------|----------|---------|
| SMT program changeover | 30 min | Nếu chia sẻ line với sản phẩm khác |
| Stencil changeover | 15 min | VM-specific stencil |
| Jig changeover (PR-05, PR-10, PR-11) | 5 min/jig | Dedicated — minimal changeover |
| **Estimated total setup / batch** | **~50 min** | Amortized: 1 min/unit at 50-unit batch |

---

## PHẦN XI — KÝ DUYỆT (Approval)

| Vai trò | Họ tên | Chữ ký | Ngày |
|---------|--------|--------|------|
| **Kỹ sư Quy trình** (Process Engineer) | _________________ | _______ | _______ |
| **Quản lý QC** (QC Manager) | _________________ | _______ | _______ |
| **Quản lý Sản xuất** (Production Manager) | _________________ | _______ | _______ |
| **Giám đốc Kỹ thuật** (Technical Director) | _________________ | _______ | _______ |

---

## PHỤ LỤC — TCVN REFERENCE MAP

| Quy trình / Tiêu chuẩn Quốc tế | TCVN Tương đương | Ghi chú |
|--------------------------------|-----------------|---------|
| IEC 60529 (IP protection) | TCVN 4255:2008 | Applied: OP-200 (IP67 seal) |
| IEC 60068-2-27 (Shock test) | TCVN 7699-2-27:2007 | Qualification — not production process |
| IEC 60068-2-1/-2 (Temp) | TCVN 7699-2-1:2007 / TCVN 7699-2-2:2007 | Qualification |
| IEC 60068-2-30 (Humidity) | TCVN 7699-2-30:2007 | Qualification |
| IEC 60068-2-6 (Vibration) | TCVN 7699-2-6:2009 | Qualification |
| IEC 61000-4-3 (EMC immunity) | TCVN 7909-4-3:2015 | Qualification |
| ISO 2859-1 (AQL sampling) | TCVN 7790-1 | Applied: OP-010/020 (incoming QC) |
| ISO/IEC Guide 98-3 (Measurement) | TCVN 9595-3 | Applied: equipment calibration |
| ISO 9001:2015 (QMS) | TCVN ISO 9001:2015 | Document control framework |
| ISO 14001:2015 (Environmental) | TCVN ISO 14001:2015 | Waste handling |
| IPC J-STD-001 (Soldering) | [chưa có TCVN tương đương] | Applied: OP-030, OP-060 |
| IPC-A-610 (Solder inspection) | [chưa có TCVN tương đương] | Applied: OP-070, QC-03 |
| IPC-CC-830 (Conformal coating) | [chưa có TCVN tương đương] | Applied: OP-080 |
| MIL-A-8625 (Anodize) | [chưa có TCVN tương đương] | Applied: incoming QC for VM-5301/5501 |
| MIL-STD-1913 (Picatinny) | [chưa có TCVN tương đương] | Applied: OP-230 (clamp gauge) |
| Luật ATVSLĐ 2015 | — | Occupational safety — all workstations |
| TCVN 5507:2002 | — | Fire safety — chemical storage |

---

## QUALIFICATION TEST PREREQUISITES (Điều kiện Thử nghiệm Đánh giá — trước sản xuất loạt)

> **Ghi chú (v1.0→v1.1, cross-ref audit):** Các yêu cầu B1 YCKT sử dụng phương pháp xác nhận "T" (Test) dưới đây là thử nghiệm loại (type test / qualification test), KHÔNG phải kiểm tra sản xuất. Các thử nghiệm này PHẢI hoàn thành và ĐẠT trước khi bắt đầu sản xuất loạt. B3 chỉ kiểm soát sản xuất; việc thử nghiệm loại thuộc phạm vi C-series (C1 Phương án Thử nghiệm).

| # | B1 Req | Mô tả | Phương pháp | Tiêu chuẩn | Trạng thái |
|---|--------|-------|-------------|-----------|------------|
| QT-01 | VM-F01 | Recoil shock 10,000G | T — MIL-STD-810H 516.8 Proc I | TCVN 7699-2-27 | ❌ Chờ C1 |
| QT-02 | VM-F02 | Drop survival 26 drops | T — MIL-STD-810H 516.8 Proc IV | TCVN 7699-2-31 | ❌ Chờ C1 |
| QT-03 | VM-F03 | Rail zero-shift sau 500 phát | T — custom procedure | — | ❌ Chờ C1 |
| QT-04 | VM-O01/O02 | Operating temp -10 to +55°C, RH 95% | T — MIL-STD-810H 501.7/502.7/507.6 | TCVN 7699-2-1/2-78 | ❌ Chờ C1 |
| QT-05 | VM-O03/O04 | IP67 dust + immersion | T — IEC 60529 | TCVN 4255 | ❌ Chờ C1 |
| QT-06 | VM-O10/O11 | EMC immunity/emissions | T — MIL-STD-461G | [chưa có TCVN — cần lab quân sự] | ❌ Chờ C1 |
| QT-07 | VM-T01 | Transport vibration | T — MIL-STD-810H 514.8 | TCVN 7699-2-6 | ❌ Chờ C1 |
| QT-08 | VM-Y04 | FPR ≤2% at ≥90% confidence | T — custom AI validation | — | ❌ Chờ C1 + firmware validate |
| QT-09 | VM-E02 | Battery life ≥8h (25°C) | T — discharge test | — | ❌ Chờ C1 |
| QT-10 | VM-Q03 | Environmental sample testing (3 units per lot 1,000) | T — MIL-STD-810H subset | — | ❌ Chờ sản xuất loạt |

> **Quy tắc:** Sản xuất loạt ("0" series) CHỈ bắt đầu khi QT-01 đến QT-09 ĐẠT. QT-10 áp dụng cho loạt sản xuất tiếp theo.

---

## B2 DRAWING REFERENCE NOTE (Ghi chú Tham chiếu Bản vẽ)

> **Ghi chú (v1.0→v1.1, cross-ref audit):** B3 v1.0 tham chiếu mã BOM (VM-XXXX) nhưng chưa tham chiếu mã bản vẽ B2 (VM-XXXX-DWG-YYY). Đây là thiếu sót hệ thống — trên dây chuyền sản xuất, hướng dẫn công việc PHẢI ghi rõ mã + revision bản vẽ tương ứng.
>
> **Hành động:** Khi B2 Drawing Package chuyển từ Checklist (danh mục) sang bản vẽ thực tế (CAD), cần bổ sung cột "B2 Drawing Ref" vào bảng Routing (Phần VI) và bảng QC (Phần VII) để đảm bảo truy xuất nguồn gốc đầy đủ.
>
> **Ưu tiên:** CNC machined parts (VM-5301-DWG-001, VM-5501-DWG-001, VM-5401-DWG-001, VM-3106-DWG-001, VM-1102-DWG-001) — bắt buộc có bản vẽ trước khi gia công.

---

## OPEN ITEMS (Vấn đề Mở)

| # | Mục | Vấn đề | Đề xuất | Ưu tiên |
|---|-----|--------|---------|---------|
| B3-OI-01 | **X-ray BGA** | WX có máy X-ray không? Nếu không → outsource BGA inspection | Khảo sát WX → nếu không có: ký hợp đồng dịch vụ X-ray tại HN/BN | CAO |
| B3-OI-02 | **Anodize vendor** | NCC anodize MIL-A-8625 Type III tại VN chưa được đánh giá (qualify) | Đánh giá NCC: test 50μm + salt spray. Backup: xuất sang Đài Loan | CAO |
| B3-OI-03 | **Factory layout** | Chưa có sơ đồ bố trí trạm thực tế tại WX | Khảo sát nhà máy → bố trí trạm theo flow Phần II | TRUNG BÌNH |
| B3-OI-04 | **Operator training** | Các trạm WS-OPT01, WS-TEST01 yêu cầu kỹ thuật viên lành nghề | Chương trình đào tạo: (a) Optical alignment 8h, (b) EOL test 4h, (c) IPC-A-610 16h | CAO |
| ~~B3-OI-05~~ | ~~VM-2101 Export~~ | ~~EAR ruling chưa có~~ → **RESOLVED: EAR ruling confirms no BLOCKER — can procure.** | Đã giải quyết. Tiến hành mua hàng bình thường. | **ĐÓNG** ✅ |
| B3-OI-06 | **NCC quang học** | Chưa xác định NCC cho VM-1101 (lens), VM-3101 (OLED), VM-3102 (beam-splitter) | RFQ 3 NCC mỗi loại. Đánh giá mẫu. Qualify trước Series "0" | CAO |
| B3-OI-07 | **Firmware version** | Firmware chưa release → OP-240 dùng placeholder [GHI VERSION] | Update B3 khi firmware v1.0 release | THẤP |

---

*Quy trình Công nghệ SX soạn bởi: KN Nguyen (AI-assisted, Claude Opus 4.6)*
*Trạng thái: DRAFT — chờ phê duyệt HITL trước khi ban hành*
*Phiên bản: 1.0 | BOM basis: Rev A (2026-02-22)*
*Prompt: P62 /qtcn | Framework: ANQP_B3_Process_Plan.md (S1-S5 Integration)*
