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

## Concept Tổng Hợp SS1 — PA-2 STANDARD

```
SS1: WEAPON STATION SIMULATOR — SELECTED CONCEPT
══════════════════════════════════════════════════

TRAVERSE:    Slip clutch + magnetic powder brake + rotary encoder
             → Kháng lực điều chỉnh, đo vị trí 0.1°

ELEVATION:   Free rotation + counterweight + rotary encoder
             → Cân bằng tự nhiên, phạm vi -10° → +85°

RECOIL:      Solenoid 24VDC, peak 15-20N, ROF lập trình
             → Tái sử dụng BB-01 driver, synergy IRONMESH

TRIGGER:     Microswitch + lò xo điều chỉnh 1.5-4kg
             → Đơn giản, tin cậy, 10M cycles

BODY:        CNC nhôm 6061, trọng lượng ~10kg (authentic feel)
             → Workshop X tự gia công

SIGHT:       Replica iron sight CNC + reticle overlay trên display
             → Training transfer cao

MOUNT:       Thép hàn, bolt to floor, điều chỉnh 3 vị trí chiều cao
             → Cứng vững, ổn định khi seat motion

SAFETY:      Software encoder limit + mechanical hard stop
             → Dual redundancy, fail-safe
```

---

## Ước Tính Chi Phí SS1 (BOM sơ bộ)

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| Rotary encoders (×2: traverse + elevation) | $80 |
| Slip clutch assembly | $120 |
| Magnetic powder brake | $150 |
| Solenoid recoil actuator + driver | $100 |
| Microswitch trigger assembly | $20 |
| CNC nhôm weapon body (material + machining) | $500 |
| Replica sight CNC | $50 |
| Steel mount + height adjust | $180 |
| Safety hardware (bumper, limit switch) | $50 |
| Wiring, connectors, misc | $80 |
| **TỔNG SS1** | **~$1,330** |

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
