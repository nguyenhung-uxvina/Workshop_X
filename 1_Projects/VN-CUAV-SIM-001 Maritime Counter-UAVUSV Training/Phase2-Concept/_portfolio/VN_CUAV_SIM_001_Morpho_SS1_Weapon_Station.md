---
created: 2026-04-06
updated: 2026-04-06
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Morphological Matrix
subsystem: SS1 Weapon Station Simulator
---

# SS1: Weapon Station Simulator — Morphological Matrix
## VN-CUAV-SIM-001 | Phase 2: Conceptual Design

**Scope:** 12.7mm DSHK/NSV manual mount — Phase 1 target
**Requirements liên quan:** G-02, K-01, K-02, F-01, F-05, S-02, S-03, S-04, Sa-02, Sa-03, Er-01

---

## Sub-functions của SS1

```
SS1: WEAPON STATION SIMULATOR
├── SF1: Traverse (xoay ngang) — đo vị trí + tạo cảm giác kháng lực
├── SF2: Elevation (ngóc dọc) — đo góc + cân bằng trọng lực
├── SF3: Recoil (giật) — tạo xung lực mỗi phát bắn
├── SF4: Trigger (cò súng) — phát hiện bắn + đo lực
├── SF5: Body/mockup — cấu trúc vật lý weapon
├── SF6: Sight/optic — mô phỏng hệ thống ngắm
├── SF7: Traverse resistance — cảm giác trơ/ma sát khi xoay
├── SF8: Mount/pedestal — bệ đỡ + điều chỉnh chiều cao
└── SF9: Safety interlock — giới hạn góc + dừng khẩn
```

---

## Morphological Matrix

### SF1: Traverse Mechanism (Xoay Ngang)

| | **WP-A** | **WP-B** | **WP-C** ★ | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Free bearing + encoder | Servo motor torque | Slip clutch + encoder | Magnetic brake + encoder |
| **Cảm giác** | Quá nhẹ, không thực | Có thể lập trình lực | Ma sát điều chỉnh được | Mượt mà, điện từ |
| **Chi phí** | Thấp (~$50) | Cao ($300-500) | Trung bình ($150) | Trung bình-cao ($200) |
| **Sản xuất VN** | Dễ | Khó (servo driver) | Dễ (cơ khí đơn giản) | Trung bình (coil winding) |
| **Độ tin cậy** | Cao | Trung bình | Cao | Cao |
| **Phù hợp PA-2** | Không | Cao nhưng đắt | **Tối ưu** | Tốt |

**★ Chọn WP-C:** Slip clutch tạo ma sát liên tục có thể điều chỉnh bằng cơ học, mô phỏng sức kháng của DSHK khi xoay. Không cần điện, đơn giản, Workshop X tự gia công.

---

### SF2: Elevation Mechanism (Ngóc Dọc)

| | **WP-A** ★ | **WP-B** | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Free rotation + rotary encoder + counterweight | Linear servo actuator | Gas spring + encoder | Worm gear + encoder |
| **Phạm vi góc** | -10° → +85° (không giới hạn cơ học) | Giới hạn bởi stroke | -10° → +70° | -10° → +85° |
| **Cân bằng** | Counterweight (no power needed) | Power-dependent | Gas spring preset | Self-locking (no drift) |
| **Chi phí** | Thấp ($80) | Cao ($400) | Trung bình ($200) | Trung bình ($250) |
| **Sản xuất VN** | Dễ (tiện + hàn) | Trung bình | Trung bình | Khó (gear precision) |
| **Độ tin cậy** | Rất cao | Trung bình | Cao | Cao |

**★ Chọn WP-A:** Counterweight đơn giản, không cần nguồn điện cho elevation, độ tin cậy cao nhất. Rotary encoder đo góc với độ phân giải 0.1° (đáp ứng S-02/S-03).

---

### SF3: Recoil Simulation (Giật Súng)

| | **WP-A** ★ | **WP-B** | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Electric solenoid (xung điện từ) | Pneumatic cylinder (khí nén) | Eccentric cam motor (rung) | Linear voice coil (high-fi) |
| **Peak force** | 10-30N (điều chỉnh được) | 30-100N (mạnh) | 5-15N (rung liên tục) | 10-50N (smooth) |
| **Rhythm** | Lập trình ROF 600rpm ✓ | Lập trình ROF ✓ | Fixed bởi motor speed | Lập trình ROF ✓ |
| **Nguồn** | 24VDC — local | Compressor cần (~$500) | 12VDC — local | 24VDC — import |
| **Synergy** | BB-01 solenoid driver ✓ | Không | Không | Không |
| **Chi phí** | Thấp ($80-120) | Cao ($400+) | Rất thấp ($30) | Cao ($300+) |
| **Sản xuất VN** | Dễ (coil + plunger) | Trung bình | Dễ | Khó |

**★ Chọn WP-A:** Electric solenoid tái sử dụng driver circuit từ BB-01 LOMAH (synergy). 24VDC an toàn (Sa-03). Lập trình ROF linh hoạt. Workshop X đã có kinh nghiệm.

---

### SF4: Trigger Mechanism (Cò Súng)

| | **WP-A** ★ | **WP-B** | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Microswitch cơ học | Hall effect sensor (từ trường) | Load cell (đo lực) | Optical break sensor |
| **Đo lực kéo** | Không (chỉ on/off) | Không | Có (1-5kg) | Không |
| **Điều chỉnh lực** | Qua lò xo cơ học | Không | Lập trình | Không |
| **Vòng đời** | 10M cycles (cơ học) | >100M cycles | 10M cycles | >100M cycles |
| **Chi phí** | $2-5 | $10-15 | $50-80 | $8-12 |
| **Phù hợp PA-2** | Tốt | Tốt | Tốt hơn | Tốt |

**★ Chọn WP-A + nâng cấp:** Microswitch với lò xo điều chỉnh 1.5-4kg (F-05). Rẻ, tin cậy, đủ cho PA-2. WP-C (load cell) → upgrade path cho PA-4 Elite.

---

### SF5: Weapon Body / Mockup Structure

| | **WP-A** ★ | **WP-B** | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | CNC nhôm 6061 | 3D print PLA/PETG + metal insert | Composite (fiberglass shell + steel core) | Biến đổi từ vũ khí thật (cut/deactivated) |
| **Độ chính xác** | ±0.1mm | ±0.3mm | ±0.5mm | Chính xác nhất |
| **Trọng lượng** | Nặng (~8-12kg) | Nhẹ (~4-6kg) | Trung bình (~6-8kg) | ~10-15kg (thật) |
| **Cảm giác** | Tốt (kim loại) | Kém (nhựa) | Tốt | Xuất sắc |
| **Chi phí** | Trung bình ($400-600) | Thấp ($100-150) | Trung bình-cao ($500) | Khó ước tính + pháp lý |
| **Sản xuất VN** | Workshop X CNC ✓ | Workshop X 3D print ✓ | Outsource | Pháp lý phức tạp |
| **Regulatory** | Không vấn đề | Không vấn đề | Không vấn đề | Cần xin phép |

**★ Chọn WP-A:** CNC nhôm, Workshop X tự sản xuất. Cảm giác kim loại giống thật. Trọng lượng thực giúp muscle memory. Không có rủi ro pháp lý.

---

### SF6: Sight / Optic Simulation (Hệ Thống Ngắm)

| | **WP-A** | **WP-B** ★ | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Virtual reticle overlay trong render 3D | Replica iron sight + reticle overlay trên display | Camera qua kính thật → screen video | AR projection trong eyepiece |
| **Độ chân thực** | Trung bình (floating reticle) | Cao (thủ thuật nhắm giống thật) | Rất cao | Cao nhất |
| **Parallax** | Không (screen-space) | Có (3D offset compensated) | Không | Không |
| **Chi phí** | $0 (software) | $30-50 (replica part) | $200+ (camera + screen) | $500-2000 |
| **Training transfer** | Trung bình | Cao ✓ | Cao | Rất cao |
| **Sản xuất VN** | Software only | CNC replica ✓ | Dễ | Khó |

**★ Chọn WP-B:** Replica iron sight (rear sight ring + front post) CNC nhôm, gắn thật trên mockup. Reticle + lead computing overlay render trên 3 màn hình. Xạ thủ nhắm qua sight thật → transfer cao.

---

### SF7: Traverse Resistance (Cảm Giác Kháng Lực Xoay)

| | **WP-A** | **WP-B** ★ | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Không có (free spin) | Magnetic powder brake | Friction plate cơ học | Servo motor programmable |
| **Điều chỉnh** | Không | Có (0-10Nm qua điện) | Có (cơ học, thô) | Lập trình (smooth) |
| **Mô phỏng lực** | Không thực tế | Tốt — có thể tăng khi elevation lên cao | Cố định | Chính xác nhất |
| **Chi phí** | $0 | $120-180 | $20-40 | $300+ |
| **Hao mòn** | Không | Thấp | Cao (plate mòn) | Thấp |

**★ Chọn WP-B:** Magnetic powder brake tạo lực kháng mượt 0-10Nm, điều chỉnh theo góc elevation (gun nặng hơn khi ngóc cao). Mô phỏng tốt cảm giác DSHK thật. Không mài mòn, tin cậy.

---

### SF8: Mount / Pedestal (Bệ Đỡ)

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Hàn thép + điều chỉnh vít chiều cao | Nhôm profile modular | Chân 3 (tripod) adapt |
| **Độ cứng** | Rất cao | Cao | Trung bình |
| **Điều chỉnh cao** | Có (±15cm, 3 vị trí) | Có (vô cấp) | Có (nhưng chậm) |
| **Trọng lượng** | ~15kg | ~8kg | ~5kg |
| **Chi phí** | $150-200 | $200-300 | $100 |
| **Sản xuất VN** | Workshop X hàn ✓ | Dễ | Trung bình |

**★ Chọn WP-A:** Hàn thép, cứng vững, giảm rung tốt nhất. Workshop X tự làm. Điều chỉnh chiều cao 3 vị trí đáp ứng Er-01 (155-185cm). Bolt xuống sàn để không trượt khi seat motion hoạt động.

---

### SF9: Safety Interlock (An Toàn Góc Bắn)

| | **WP-A** | **WP-B** | **WP-C** ★ |
|---|---|---|---|
| **Nguyên lý** | Software limits only | Cơ học hard stop only | Software + mechanical cả hai |
| **Fail-safe** | Không (software crash → mất limit) | Có | Có — dual redundancy |
| **Chi phí** | $0 | $30-50 (bumper + switch) | $50-80 |
| **Phù hợp Sa-02** | Không đủ | Đủ | Tốt nhất |

**★ Chọn WP-C:** Kết hợp encoder-based software limit (cảnh báo sớm) + rubber hard stop cơ học (backup). Đáp ứng Sa-02 và Sa-05.

---

## SF10: Modular Weapon Interface (MWI) — CEO Decision 2026-04-07

**Yêu cầu:** Kiến trúc mô đun — thay giá + súng (loại khác) vào vị trí, reset hệ thống, huấn luyện ngay. Hệ thống tự nhận biết loại súng.

### Kiến Trúc MWI

```
UNIVERSAL CRADLE (cố định trên pedestal)
  │
  ├── Quick-Release Interface Plate
  │   ├── Cơ khí: 2× locating pin + 4× bu lông bướm M10 → < 3 phút tháo/lắp
  │   └── Điện: 12-pin MIL-spec circular connector (power + encoder + trigger + recoil + NFC)
  │
  └── WEAPON MODULE (swappable — mỗi loại 1 module riêng biệt)
      ├── Weapon body (CNC nhôm, kích thước + trọng lượng đúng loại)
      ├── Trigger assembly (lực cò riêng từng loại)
      ├── Recoil actuator (solenoid, lực riêng từng loại)
      ├── Sight (replica riêng từng loại)
      ├── Counterweight (cân bằng riêng từng loại)
      └── NFC tag (loại + serial + calibration + round count)
```

### Auto-Detection: NFC

Mỗi weapon module có 1 NFC tag (ISO 14443A, Mifare Classic 1K). Reader RC522 ($3) trên cradle, kết nối ESP32 weapon MCU.

**Dữ liệu trên tag:**
- Weapon type ID (WM-01 → WM-05)
- Serial number
- Calibration offsets (encoder zero, recoil PWM, trigger force)
- Total rounds fired (maintenance tracking)

**Khi lắp weapon module mới → NFC đọc → hệ thống tự động:**
1. Load bảng bắn đúng cỡ đạn
2. Điều chỉnh solenoid PWM → lực giật đúng loại
3. Set magnetic brake → kháng lực xoay theo trọng lượng súng
4. Set ROF (tốc độ bắn) đúng loại
5. Đổi sight overlay/reticle
6. Cập nhật HUD: tên vũ khí, cỡ đạn, cơ số đạn
7. Áp dụng scoring criteria phù hợp
8. Ghi weapon type vào AAR session log

### 5 Weapon Modules

| Module | Vũ khí | Cỡ đạn | Mockup kg | Giật N | Cò kg | ROF | Elevation | Ghi chú |
|--------|--------|--------|-----------|--------|-------|-----|-----------|---------|
| **WM-01** | DSHK | 12.7×108 | ~10 | 15-20 | 2-3 | 600 | -10°/+85° | Phase 1 baseline |
| **WM-02** | NSV | 12.7×108 | ~8 | 15-20 | 1.5-2.5 | 700 | -10°/+85° | Phase 1 baseline |
| **WM-03** | KPVT | 14.5×114 | ~12 | 25-35 | 3-5 | 550 | -5°/+85° | Phase 2 upgrade |
| **WM-04** | ZU-23-2 | 23×152 | ~15 | 40-60 | 4-6 | 800 | -10°/+87° | Phase 2, single barrel |
| **WM-05** | PKM | 7.62×54R | ~7 | 8-12 | 1.5-2 | 650 | -10°/+60° | Optional basic trainer |

### Quy Trình Swap (< 5 phút, 1-2 người)

```
1. Instructor: Menu → "Thay vũ khí" → hệ thống safe mode    [5s]
2. Tháo 4 bu lông bướm M10                                   [60s]
3. Rút connector 12-pin (bayonet twist)                       [5s]
4. Nhấc weapon module cũ ra (2 người nếu >12kg)              [30s]
5. Đặt weapon module mới → locating pins tự canh              [30s]
6. Cắm connector 12-pin                                       [5s]
7. Siết 4 bu lông bướm                                        [60s]
8. Instructor: "Xác nhận" → NFC detect → auto-configure       [30s]
9. Sẵn sàng huấn luyện                                        [~4 phút tổng]
```

### Chi Phí MWI

| Hạng mục | Chi phí |
|----------|---------|
| Universal cradle interface (plate + pins + NFC reader) | $170 |
| 12-pin MIL-spec connector (per module) | $30 |
| NFC tag (per module) | $5 |
| **MWI infrastructure (1 lần)** | **~$200** |
| **WM-01 DSHK module** | **~$700** (body $500 + recoil $100 + trigger $20 + sight $50 + CW $30) |
| **Mỗi module thêm** | **~$500-900** (tùy kích thước/trọng lượng) |

---

## Concept Tổng Hợp SS1 — PA-2 STANDARD v1.1 (Modular)

```
SS1: WEAPON STATION SIMULATOR — MODULAR ARCHITECTURE
══════════════════════════════════════════════════════

UNIVERSAL CRADLE (cố định):
  TRAVERSE:    Slip clutch + magnetic powder brake + rotary encoder (0.1°)
  ELEVATION:   Free rotation + rotary encoder (counterweight trong weapon module)
  MOUNT:       Thép hàn, bolt to floor, 3 vị trí chiều cao
  SAFETY:      Software encoder limit + mechanical hard stop (dual redundancy)
  INTERFACE:   Quick-release plate (4×M10) + 12-pin MIL connector + NFC reader

WEAPON MODULE (swappable < 5 phút):
  BODY:        CNC nhôm 6061, kích thước + trọng lượng đúng loại
  RECOIL:      Solenoid 24VDC, lực theo loại (8-60N, BB-01 driver reuse)
  TRIGGER:     Microswitch + lò xo lực theo loại
  SIGHT:       Replica iron sight CNC riêng từng loại + reticle overlay
  COUNTERWEIGHT: Cân bằng riêng từng loại
  ID:          NFC tag → auto-detect → auto-configure toàn hệ thống

SUPPORTED WEAPONS:
  WM-01  DSHK    12.7mm   ~10kg  15-20N  Phase 1
  WM-02  NSV     12.7mm   ~8kg   15-20N  Phase 1
  WM-03  KPVT    14.5mm   ~12kg  25-35N  Phase 2
  WM-04  ZU-23-2 23mm     ~15kg  40-60N  Phase 2
  WM-05  PKM     7.62mm   ~7kg   8-12N   Optional
```

---

## Ước Tính Chi Phí SS1 v1.1 (BOM — Modular)

### Universal Cradle (1 lần, cố định)

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| Rotary encoders (×2: traverse + elevation) | $80 |
| Slip clutch assembly | $120 |
| Magnetic powder brake | $150 |
| Steel mount + height adjust + interface plate | $250 |
| NFC reader RC522 + wiring | $20 |
| 12-pin MIL connector (cradle side) | $30 |
| Safety hardware (bumper, limit switch) | $50 |
| Wiring, connectors, misc | $80 |
| **Cradle subtotal** | **~$780** |

### Weapon Module WM-01 DSHK (giao cùng hệ thống)

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| CNC nhôm weapon body 12.7mm DSHK | $500 |
| Solenoid recoil actuator + driver (BB-01 reuse) | $100 |
| Microswitch trigger + spring assembly | $20 |
| Replica iron sight CNC | $50 |
| Counterweight (cân bằng elevation) | $30 |
| 12-pin MIL connector (module side) + NFC tag | $35 |
| **WM-01 subtotal** | **~$735** |

### TỔNG SS1 (Cradle + 1 WM-01)

| | Chi phí |
|---|---------|
| **SS1 base (cradle + WM-01 DSHK)** | **~$1,515** |
| WM-02 NSV (thêm) | +$650 |
| WM-03 KPVT 14.5mm (thêm) | +$800 |
| WM-04 ZU-23-2 23mm (thêm) | +$900 |
| WM-05 PKM 7.62mm (thêm) | +$550 |
| **Full set 5 modules** | **~$4,415** |

---

## Requirements Coverage Check

| Req ID | Yêu cầu | Covered by | Status |
|--------|---------|------------|--------|
| G-02 | Weapon mockup ±5mm DSHK dims | WP-A body (CNC) | ✓ |
| K-01 | Traverse ≥ 60°/s | Slip clutch (no motor limit) | ✓ |
| K-02 | Elevation -10° → +85° | WP-A elevation | ✓ |
| F-01 | Recoil ≥ 8N | Solenoid 15-20N | ✓ |
| F-05 | Trigger 1.5-4kg | Spring-adjusted microswitch | ✓ |
| S-02 | Encoder ≥ 0.1° | Rotary encoder spec | ✓ |
| S-03 | Encoder elevation ≥ 0.1° | Rotary encoder spec | ✓ |
| S-04 | Trigger single/burst | Software ROF control | ✓ |
| Sa-02 | E-stop ≤ 1s | Software + solenoid power cut | ✓ |
| Sa-03 | ≤ 24VDC | All actuators 24VDC | ✓ |
| Sa-05 | Hard stop at limits | Mechanical bumpers | ✓ |
| Er-01 | Height adjust 155-185cm | 3-position pedestal | ✓ |
| P-02 | CNC tại Workshop X | WP-A body, WP-B sight | ✓ |

**Coverage: 13/13 requirements liên quan — FULL** ✓

---

## Next: SS2 Visual & Environment Engine
