---
created: 2026-03-23
type: morphological-chart-analysis
method: "Reverse Morphological Chart (Hülagü & Timur 2024, Archives of Design Research)"
product: VN-12.7MM-SIM
products_analyzed: 15 + VN-12.7MM-SIM (16 total)
status: active
tags: [#type/research-output, #status/active, #defense, #pahl]
---

# Morphological Chart for Analysing 15 Existing Gunnery Simulator Designs
## Reverse MC Method — Hülagü & Timur (2024)

> **Phương pháp:** Morphological Chart thông thường dùng để SINH ý tưởng (Idea Generation).
> Bài báo Hülagü & Timur (2024) đảo ngược: dùng MC để PHÂN TÍCH sản phẩm hiện có.
> 3 bước: (1) Thu thập sản phẩm → (2) Xác định sub-functions → (3) Đặt sản phẩm vào ma trận.
> Output: Ma trận cho thấy design space, gaps, clusters, và cơ hội cho VN-12.7MM-SIM.

---

## STEP 1: COLLECT EXISTING PRODUCTS (15 + VN-12.7MM-SIM)

| # | REF | Company | Product | Country |
|---|-----|---------|---------|---------|
| 1 | REF-01 | ACME Worldwide | GAR M2 Simulator | USA |
| 2 | REF-02 | REAMDA / Sarkareod | Naval .50 Cal Simulator | Ireland |
| 3 | REF-03 | LaserShot | NCGTS | USA |
| 4 | REF-04 | MILO / FAAC | CSWS LRTI | USA |
| 5 | REF-05 | Haptech Defense | ERIS M2A1 | USA |
| 6 | REF-06 | Dvorak Instruments | ARS-BM2 | Czech/USA |
| 7 | REF-07 | NSC / UK Dstl | Ship-Mounted GPMG | UK |
| 8 | REF-08 | Saab | MLT / GAMER BT46 | Sweden |
| 9 | REF-09 | Rheinmetall | VTAM | Germany |
| 10 | REF-10 | Elbit Systems | WOT / CRWT | Israel |
| 11 | REF-11 | Zen Technologies | FAC AI Naval | India |
| 12 | REF-12 | CAE | NCSS | Canada |
| 13 | REF-13 | Cubic Defense | CSWS (AWES) | USA |
| 14 | REF-14 | InVeris Training | FATS 100MIL | USA |
| 15 | REF-15 | Raydon Corporation | UGT-I/C | USA |
| **16** | **—** | **Workshop X** | **VN-12.7MM-SIM HỒNG HẢI** | **Vietnam** |

---

## STEP 2: SUB-FUNCTIONS IDENTIFIED

Từ phân tích 15 sản phẩm, xác định **15 sub-functions** cho hệ thống mô phỏng huấn luyện súng máy:

| SF# | Sub-Function | Mô tả | Số solutions tìm thấy |
|-----|-------------|--------|----------------------|
| SF1 | Recoil Generation | Phương pháp tạo giật | 7 |
| SF2 | Recoil Actuation Point | Vị trí tác động lực giật | 4 |
| SF3 | Visual Display | Hệ thống hiển thị | 7 |
| SF4 | Field of View | Góc nhìn | 5 |
| SF5 | Ballistic Model | Mô hình đạn đạo | 4 |
| SF6 | Weapon Tracking | Theo dõi vị trí vũ khí | 5 |
| SF7 | Weapon Type | Loại vũ khí mô phỏng | 6 |
| SF8 | Instructor Station | Trạm huấn luyện viên | 4 |
| SF9 | AAR (After Action Review) | Đánh giá sau bài bắn | 4 |
| SF10 | AI / Adaptive Training | Huấn luyện thích ứng | 4 |
| SF11 | Crew Configuration | Cấu hình đội | 3 |
| SF12 | Form Factor | Hình thức triển khai | 5 |
| SF13 | Motion Platform | Mô phỏng chuyển động tàu | 4 |
| SF14 | Malfunction Injection | Mô phỏng sự cố vũ khí | 3 |
| SF15 | Power / Tether | Nguồn điện / kết nối | 4 |

---

## STEP 3: MORPHOLOGICAL CHART — 15 Sub-Functions × Solutions

### SF1: RECOIL GENERATION — Phương pháp tạo giật

| Solution | Mô tả | Sản phẩm sử dụng | VN-12.7MM? |
|----------|--------|-------------------|-----------|
| **S1.1 Electric motor** | Rotary motor + gearbox + linkage | REF-01 (ACME), REF-04 (MILO via ACME) | ❌ Patent |
| **S1.2 Electromagnetic** | Linear motor / solenoid array | REF-05 (Haptech ERIS) | ❌ Patent |
| **S1.3 Pneumatic (compressed air)** | Cylinder + valve, external compressor | REF-03 (LaserShot), REF-07 (NSC/Dstl) | ✅ **SELECTED** |
| **S1.4 Pneumatic (CO₂/N₂)** | Portable gas cylinder, bolt-carrier replace | REF-06 (Dvorak ARS) | ⚠️ Alternative |
| **S1.5 Gas-operated (blank/CO₂)** | Wireless gas recoil kit | REF-14 (InVeris BlueFire) | ❌ Patent |
| **S1.6 D-BOX haptic actuator** | Multi-axis commercial haptic | REF-15 (Raydon UGT) | ⚠️ Consider |
| **S1.7 None** | Không có recoil | REF-02 (REAMDA), REF-09 (Rheinmetall), REF-12 (CAE) | ❌ |
| **S1.8 Live ammunition** | Đạn thật / đạn mã | REF-08 (Saab MLT), REF-13 (Cubic) | ❌ |

**Gap phát hiện:** Không ai dùng **pneumatic + masselotte** (EP1243889A1 approach). VN-12.7MM-SIM có thể pioneer.

---

### SF2: RECOIL ACTUATION POINT — Vị trí tác động

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S2.1 External mount/slide tray** | Lực tác động lên mount, vũ khí di chuyển cùng | REF-01 (ACME GAR) | ✅ **Channel B** |
| **S2.2 Internal bolt carrier** | Lực tác động lên bolt bên trong vũ khí | REF-06 (Dvorak), REF-14 (InVeris) | ❌ Mòn cơ phần |
| **S2.3 Weapon body (drop-in)** | Kit gắn vào thân vũ khí | REF-05 (Haptech ERIS) | ❌ |
| **S2.4 Platform/seat** | Lực tác động lên nền tảng/ghế | REF-15 (Raydon D-BOX) | ❌ |

**VN-12.7MM-SIM: Two-Channel approach** — Channel A (magnetic brake trên mount) + Channel B (pneumatic trên mount). Cả hai tác động NGOÀI vũ khí → không mòn cơ phần bên trong.

---

### SF3: VISUAL DISPLAY — Hệ thống hiển thị

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S3.1 Curved monitors (3×)** | 3 màn hình cong | — | ✅ **SELECTED** |
| **S3.2 Flat projection screen** | 1 màn chiếu phẳng | REF-01 (ACME GTS), REF-04 (MILO) | ❌ |
| **S3.3 Multi-projection (180-360°)** | Nhiều projector, dome/wrap | REF-03 (LaserShot), REF-14 (InVeris) | ❌ |
| **S3.4 HMD / VR headset** | Kính thực tế ảo | REF-01 (ACME option), REF-15 (Raydon Vive Pro) | ⚠️ Variant TAB |
| **S3.5 AR display (on-weapon)** | LCD/AR gắn trên vũ khí | REF-02 (REAMDA) | ❌ |
| **S3.6 Tactical console** | Màn hình console chiến thuật | REF-09 (Rheinmetall), REF-12 (CAE) | ❌ |
| **S3.7 Live environment** | Môi trường thực (outdoor) | REF-08 (Saab), REF-13 (Cubic) | ❌ |

**Gap:** Chưa ai dùng **3× curved monitors** cho naval gunnery simulator. VN-12.7MM-SIM = first mover cho solution này.

---

### SF4: FIELD OF VIEW — Góc nhìn

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S4.1 < 90°** | Hẹp | REF-02 (REAMDA ~30-50°) | ❌ |
| **S4.2 90-120°** | Trung bình | REF-01 (ACME ~60-70°) | ❌ |
| **S4.3 120-180°** | Rộng | REF-07 (NSC 180°), REF-03 (LaserShot 180°) | ✅ **~120-180°** |
| **S4.4 360°** | Toàn cảnh | REF-08 (Saab live), REF-11 (Zen), REF-15 (Raydon VR) | ⚠️ VR option |
| **S4.5 N/A** | Không visual | REF-05 (Haptech), REF-06 (Dvorak), REF-13 (Cubic) | ❌ |

---

### SF5: BALLISTIC MODEL — Mô hình đạn đạo

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S5.1 6-DOF physics-based** | Đầy đủ: trọng lực, gió, nhiệt, spin | REF-03 (VBS3/4), REF-08 (BT46), REF-13 (NLOS) | ✅ **TARGET** |
| **S5.2 Simplified physics** | Cơ bản: trọng lực, range | REF-07 (NSC/VBS2), REF-02 (REAMDA) | ❌ |
| **S5.3 ARDEC-validated** | Validated by US Army | REF-04 (MILO LRTI) | ⚠️ Benchmark |
| **S5.4 N/A / host-dependent** | Không có hoặc phụ thuộc platform | REF-05, REF-06, REF-09 | ❌ |

---

### SF6: WEAPON TRACKING — Theo dõi vị trí vũ khí

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S6.1 Az/El encoders** | Encoder quay trục ngang/dọc | REF-01 (ACME), REF-02 (REAMDA) | ✅ **SELECTED** |
| **S6.2 IMU (6-axis)** | Cảm biến quán tính | REF-05 (Haptech), REF-13 (Cubic) | ⚠️ Bổ sung |
| **S6.3 Laser aim-point** | Laser trên nòng | REF-06 (Dvorak), REF-14 (InVeris) | ⚠️ Bổ sung |
| **S6.4 Camera/IR tracking** | Camera hồng ngoại | REF-03 (LaserShot floor cam) | ❌ |
| **S6.5 Lighthouse (VR)** | Tracking VR sub-mm | REF-15 (Raydon Vive Pro) | ❌ |

---

### SF7: WEAPON TYPE SIMULATED — Loại vũ khí

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S7.1 M2HB .50 Cal** | NATO standard | REF-01, 02, 03, 04, 05, 06, 14, 15 (8/15) | ❌ |
| **S7.2 DShK / NSV / SCX-12.7V** | Soviet/VN standard | **KHÔNG AI** | ✅ **UNIQUE** |
| **S7.3 GPMG 7.62mm** | Trung liên | REF-07 (NSC) | ❌ |
| **S7.4 20-40mm autocannon** | Pháo tự động | REF-08 (Saab), REF-09 (Rheinmetall), REF-10 (Elbit) | ❌ |
| **S7.5 Multi-weapon (modular)** | Nhiều vũ khí thay đổi | REF-01 (ACME 7+), REF-04 (MILO 4+), REF-14 (InVeris 12+) | ⚠️ Future |
| **S7.6 Ship weapons system** | Hệ thống vũ khí tàu | REF-11 (Zen FAC), REF-12 (CAE NCSS) | ❌ |

**★★★ FINDING QUAN TRỌNG NHẤT:** SF7.2 (DShK/NSV) = **ZERO competitors**. 8/15 products chỉ M2HB. VN-12.7MM-SIM chiếm **uncontested space**.

---

### SF8: INSTRUCTOR STATION (IOS) — Trạm huấn luyện viên

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S8.1 Integrated panel** | Panel tích hợp trong simulator | REF-01 (ACME) | ✅ |
| **S8.2 Laptop/PC** | PC riêng biệt | REF-02 (REAMDA), REF-07 (NSC) | ✅ **SELECTED** |
| **S8.3 Networked EXCON** | Trung tâm điều khiển lớn | REF-08 (Saab), REF-09 (Rheinmetall) | ❌ |
| **S8.4 Tablet/mobile** | Tablet Android | REF-13 (Cubic) | ⚠️ Variant TAB |

---

### SF9: AAR (After Action Review) — Đánh giá sau bài bắn

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S9.1 Score sheet only** | Bảng điểm đơn giản | REF-02 (REAMDA) | ❌ |
| **S9.2 2D/3D replay** | Phát lại quỹ đạo đạn | REF-03 (VBS3), REF-14 (InVeris 3D) | ✅ **TARGET** |
| **S9.3 Video + sensor AAR** | Video + dữ liệu sensor | REF-04 (MILO TAC), REF-14 (InVeris TAC) | ✅ **TARGET** |
| **S9.4 Spaced-repetition** | Nhớ tiến trình xạ thủ, lặp lại | REF-15 (Raydon) | ⚠️ ACH variant |

---

### SF10: AI / ADAPTIVE TRAINING — Huấn luyện thích ứng

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S10.1 None** | Không AI | REF-01, 02, 03, 06, 07 (5/15) | ❌ |
| **S10.2 Scenario difficulty** | Điều chỉnh độ khó kịch bản | REF-04 (MILO), REF-08 (Saab) | ✅ |
| **S10.3 Automatic coaching** | AI phát hiện lỗi, gợi ý sửa | REF-14 (InVeris Coaching), REF-15 (Raydon) | ✅ **ACH variant** |
| **S10.4 ML adaptive IOS** | ML thay đổi exercise real-time | REF-11 (Zen FAC AI) | ✅ **ACH variant** |

**Gap:** Chỉ 3/15 có AI thực sự (InVeris, Raydon, Zen). VN-12.7MM-SIM ACH variant = differentiation.

---

### SF11: CREW CONFIGURATION — Cấu hình đội

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S11.1 Individual (1 xạ thủ)** | Cá nhân | REF-01, 02, 05, 06, 07 (5/15) | ✅ I-01 Standard |
| **S11.2 Multi-crew (2-4)** | Đội nhỏ | REF-03 (LaserShot 4), REF-15 (Raydon crew) | ⚠️ Future |
| **S11.3 Full mission (5+)** | Toàn tàu | REF-08 (Saab 10K entities), REF-09 (Rheinmetall), REF-11 (Zen) | ❌ |

---

### SF12: FORM FACTOR — Hình thức triển khai

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S12.1 Fixed installation** | Cố định tại căn cứ | REF-03 (LaserShot), REF-09 (Rheinmetall), REF-10 (Elbit) | ✅ I-01 |
| **S12.2 Portable (room)** | Di chuyển được trong phòng | REF-01 (ACME GTS), REF-04 (MILO), REF-07 (NSC) | ✅ I-01 |
| **S12.3 Containerized** | Container di động | **KHÔNG AI** | ✅ **I-02 CTR — UNIQUE** |
| **S12.4 Drop-in kit** | Kit gắn vào vũ khí thật | REF-05 (Haptech), REF-06 (Dvorak) | ❌ |
| **S12.5 Tablet/personal** | Cá nhân, nhỏ gọn | — | ✅ **I-09 TAB** |

**★★★ SF12.3 Containerized = ZERO competitors.** UK Dstl là research prototype, không thương mại.

---

### SF13: MOTION PLATFORM — Mô phỏng chuyển động tàu

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S13.1 None (static)** | Không mô phỏng chuyển động | REF-01, 04, 05, 06, 14 (5/15) | ✅ V1 |
| **S13.2 Simple rocking** | Lắc đơn giản | REF-02 (REAMDA), REF-07 (NSC) | ⚠️ Future |
| **S13.3 3-DOF platform** | Pitch/roll/heave | REF-03 (LaserShot) | ❌ |
| **S13.4 6-DOF platform** | Full motion | REF-11 (Zen FAC), REF-15 (Raydon D-BOX) | ❌ |

---

### SF14: MALFUNCTION INJECTION — Mô phỏng sự cố vũ khí

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S14.1 None** | Không có | REF-02, 06, 07 (3/15) | ❌ |
| **S14.2 Software-based** | IOS inject kịch bản | REF-01 (ACME 5 types), REF-04 (MILO), REF-14 (InVeris) | ✅ **SELECTED** |
| **S14.3 Remote wireless** | Inject từ xa qua wireless | REF-05 (Haptech Manager ZigBee) | ⚠️ Future |

---

### SF15: POWER / TETHER — Nguồn điện / kết nối

| Solution | Mô tả | Sản phẩm | VN-12.7MM? |
|----------|--------|----------|-----------|
| **S15.1 Mains power (tethered)** | Điện lưới, có dây | REF-01, 03, 04, 07, 09, 10, 14 (7/15) | ✅ I-01 |
| **S15.2 Battery (tetherless)** | Pin, không dây | REF-05 (Haptech ammo-can), REF-08 (Saab BT46) | ⚠️ Future |
| **S15.3 Umbilical (air+data)** | 1 dây kết hợp khí nén + data | REF-03 (LaserShot), REF-01 (ACME 25ft) | ✅ **SELECTED** |
| **S15.4 Ship power** | Nguồn điện tàu | REF-07 (NSC on-ship) | ✅ I-02 CTR |

---

## MORPHOLOGICAL CHART — MA TRẬN TỔNG HỢP

### Product × Sub-Function Matrix

Mỗi ô = solution mà sản phẩm đó chọn cho sub-function đó.

| Product       | SF1 Recoil      | SF2 Actuation | SF3 Visual      | SF4 FOV      | SF5 Ballistic | SF6 Tracking        | SF7 Weapon   | SF8 IOS    | SF9 AAR             | SF10 AI           | SF11 Crew    | SF12 Form              | SF13 Motion   | SF14 Malfunction | SF15 Power    |
| ------------- | --------------- | ------------- | --------------- | ------------ | ------------- | ------------------- | ------------ | ---------- | ------------------- | ----------------- | ------------ | ---------------------- | ------------- | ---------------- | ------------- |
| ACME          | Electric        | Ext mount     | Projection      | 60-70°       | Physics       | Encoder             | M2 multi     | Panel      | Basic               | None              | Individual   | Portable               | None          | SW 5-type        | Umbilical     |
| REAMDA        | None            | N/A           | AR on-weapon    | 30-50°       | Simplified    | Encoder             | M2           | Laptop     | Score               | None              | Individual   | Portable               | Rocking       | None             | Mains         |
| LaserShot     | Pneumatic       | Int bolt      | 180° dome       | 180°         | 6-DOF VBS     | Camera/IR           | M2 multi     | PC         | 2D/3D VBS           | None              | Multi-crew 4 | Fixed                  | 3-DOF         | SW               | Umbilical     |
| MILO          | Electric (ACME) | Ext mount     | Multi-screen    | N/A          | ARDEC         | Laser               | M2 multi     | PC         | Video+sensor        | Scenario          | Both 16      | Portable               | None          | SW 5-type        | Mains         |
| Haptech       | EM linear       | Weapon body   | N/A             | N/A          | N/A           | IMU+ZigBee          | M2A1 multi   | Remote     | API                 | None              | Both 12ch    | Drop-in                | None          | Remote wireless  | Battery       |
| Dvorak        | Pneumatic CO₂   | Int bolt      | Laser           | N/A          | N/A           | Laser               | M2           | N/A        | N/A                 | None              | Individual   | Drop-in                | None          | None             | Gas cylinder  |
| NSC/Dstl      | Pneumatic       | Int bolt      | 180° curved     | 180°         | VBS2          | Encoder             | GPMG 7.62    | Laptop     | VBS2                | None              | Individual   | Portable               | Rocking       | None             | Mains         |
| Saab          | Live ammo       | N/A           | Live env        | 360°         | 6-DOF BT46    | Laser+gyro          | 20-40mm      | EXCON      | Full AAR            | Scenario          | Full mission | Field                  | None          | N/A              | Battery       |
| Rheinmetall   | N/A             | N/A           | Console         | N/A          | N/A           | Per node            | 20mm+        | DTC        | Node AAR            | AI entities       | Full mission | Distributed            | None          | N/A              | Shore         |
| Elbit         | Electromech     | N/A           | PC display      | N/A          | Physics       | Sensor sim          | 20-40mm      | PC GUI     | 5-level             | CGF               | Both         | Fixed                  | None          | N/A              | COTS          |
| Zen Tech      | Pneum/EM        | N/A           | 360° immersive  | 360°         | Proprietary   | 6-DOF+radar         | Ship weapons | AI-IOS     | Analytics           | **ML adaptive**   | Both         | Fixed                  | 6-DOF         | EW inject        | Facility      |
| CAE           | N/A             | N/A           | Console         | N/A          | Physics       | Sensor suite        | Multi-domain | PC GUI     | Timeline            | Rule-based        | Both         | Fixed                  | None          | N/A              | COTS          |
| Cubic         | None            | N/A           | Tablet          | N/A          | NLOS 6-DOF    | GPS+IMU             | MK19/mortar  | EXCON      | AWES                | Automated         | Both         | Appliqué               | None          | N/A              | Battery       |
| InVeris       | Gas CO₂         | Int bolt      | 1-15 proj       | Variable     | Advanced      | **BlueFire sensor** | 12+ weapons  | PC         | **Video+3D+sensor** | **Auto coaching** | Both 15      | Portable               | None          | SW               | Mains         |
| Raydon        | D-BOX haptic    | Platform      | **HMD VR 360°** | 360°         | TC 3-20.31    | Lighthouse          | M2/MK19/M240 | Console    | **Spaced-rep**      | **Adaptive**      | Both         | Freestanding           | D-BOX multi   | N/A              | Mains         |
| **VN-12.7MM** | **Pneumatic**   | **Ext mount** | **3× curved**   | **120-180°** | **6-DOF**     | **Encoder**         | **DShK/NSV** | **Laptop** | **Video+sensor**    | **ML adaptive**   | **Both**     | **Portable+Container** | **None (v1)** | **SW**           | **Umbilical** |

---

## PHÂN TÍCH MA TRẬN — Design Space Insights

### 1. UNCONTESTED SPACES (VN-12.7MM-SIM chiếm)

| SF# | Solution | Competitors | VN-12.7MM-SIM |
|-----|----------|------------|--------------|
| **SF7** | DShK/NSV weapon | **0/15** | ✅ **UNIQUE** |
| **SF12** | Containerized | **0/15** | ✅ **UNIQUE (CTR)** |
| **SF3** | 3× curved monitors | **0/15** | ✅ **UNIQUE** |
| SF1+SF2 | Pneumatic + External mount | **0/15** (LaserShot/NSC = pneumatic + internal) | ✅ **UNIQUE combo** |

### 2. CROWDED SPACES (many competitors)

| SF# | Solution | # Competitors | VN-12.7MM-SIM position |
|-----|----------|-------------|----------------------|
| SF7 | M2HB .50 Cal | **8/15** | Khác biệt (DShK) |
| SF11 | Individual only | **5/15** | Có cả individual + crew |
| SF12 | Portable room | **4/15** | Có + container upgrade |
| SF1 | Electric motor recoil | **2/15** | Tránh (patent) |

### 3. SOLUTION DISTRIBUTION (Frequency Analysis)

**SF1 Recoil — Phân bố solutions:**
```
Electric motor:    ██ (2) — ACME, MILO
Electromagnetic:   █ (1) — Haptech
Pneumatic air:     ███ (3) — LaserShot, NSC, VN-12.7MM ← CHOSEN
Pneumatic CO₂:     █ (1) — Dvorak
Gas-operated:      █ (1) — InVeris
D-BOX haptic:      █ (1) — Raydon
None:              ███ (3) — REAMDA, Rheinmetall, CAE
Live ammo:         ██ (2) — Saab, Cubic
```

**SF10 AI — Phân bố solutions:**
```
None:              █████ (5) — ACME, REAMDA, LaserShot, Dvorak, NSC
Scenario adjust:   ██ (2) — MILO, Saab
Auto coaching:     ██ (2) — InVeris, Raydon
ML adaptive:       █ (1) — Zen Tech
VN-12.7MM-SIM:     ✅ ML adaptive (ACH variant) ← TOP 10%
```

**SF12 Form Factor — Phân bố solutions:**
```
Fixed:             █████ (5) — LaserShot, Rheinmetall, Elbit, Zen, CAE
Portable:          ████ (4) — ACME, MILO, NSC, InVeris
Drop-in kit:       ██ (2) — Haptech, Dvorak
Field-deployed:    ██ (2) — Saab, Cubic
Containerized:     ZERO ← VN-12.7MM-SIM UNIQUE
```

### 4. COMBINATION ANALYSIS — Tổ Hợp Solutions

Áp dụng Step 3 MC (Combination): VN-12.7MM-SIM chọn tổ hợp CHƯA AI chọn:

```
VN-12.7MM-SIM = S1.3 + S2.1 + S3.1 + S4.3 + S5.1 + S6.1 + S7.2 + S8.2 + S9.3 + S10.4 + S11.2 + S12.3 + S13.1 + S14.2 + S15.3

Tổ hợp này KHÔNG trùng với BẤT KỲ sản phẩm nào trong 15 đối thủ.

Uniqueness score: 4/15 sub-functions có solution UNIQUE (SF3, SF7, SF12, SF1+SF2 combo)
```

### 5. GAP MAP — Cơ Hội Từ Ma Trận

| Gap | Mô tả | Cơ hội cho VN-12.7MM-SIM |
|-----|--------|-------------------------|
| **Soviet/VN weapon gap** | 0/15 có DShK/NSV. 8/15 chỉ M2HB | ✅ Captive market VN + ASEAN |
| **Containerized gap** | 0/15 thương mại. UK Dstl = prototype | ✅ First mover (variant CTR) |
| **AI + naval + 12.7mm gap** | Zen có AI naval nhưng không 12.7mm specific | ✅ Variant ACH |
| **Pneumatic + ext mount gap** | 0/15 dùng combo này (LaserShot/NSC = internal) | ✅ No wear + no patent |
| **Price < $200K + full system gap** | Cheapest full system ~ $200K (MILO). Most $300K+ | ✅ Target $150-200K |
| **Masselotte gap** | 0/15 dùng masselotte (EP1243889A1) | ✅ Potential innovation |

### 6. DESIGN SPACE SIZE

Theoretical combinations: 7 × 4 × 7 × 5 × 4 × 5 × 6 × 4 × 4 × 4 × 3 × 5 × 4 × 3 × 4 = **~3.5 tỷ** tổ hợp

Actual products explored: **15** (0.0000004% design space)

VN-12.7MM-SIM occupies a **previously unexplored region** of this design space.

---

## KẾT LUẬN — Ý NGHĨA CHO VN-12.7MM-SIM

### Từ MC Analysis, 5 quyết định thiết kế được VALIDATE:

| # | Quyết định | MC Evidence |
|---|-----------|-------------|
| 1 | **DShK/NSV weapon** | SF7: 0/15 competitors → uncontested |
| 2 | **Pneumatic + external mount** | SF1+SF2: unique combo, avoids ALL patents |
| 3 | **Containerized variant** | SF12: 0/15 commercial → first mover |
| 4 | **AI coaching (ACH)** | SF10: chỉ 3/15 có AI → early mover advantage |
| 5 | **Price < $200K** | Nằm dưới cheapest full system hiện tại |

### 3 Cơ Hội Mới Phát Hiện Từ MC:

1. **Masselotte approach** (SF1 new solution) — EP1243889A1, chưa ai áp dụng cho 12.7mm
2. **Spaced-repetition AAR** (SF9.4) — Raydon pioneered, VN-12.7MM ACH có thể adopt
3. **Multi-crew naval** (SF11.2) — LaserShot chứng minh giá trị, VN chưa có → variant TAC

---

## NGUỒN

- Hülagü, R., & Timur, Ş. (2024). Using Morphological Chart for Analysing Existing Designs. *Archives of Design Research*, 37(1), 27-41. http://dx.doi.org/10.15187/adr.2024.02.37.1.27
- REF-01 through REF-15 in `1_Projects/VN-12.7MM-SIM/Ref/`
- Pahl, G., & Beitz, W. (2007). Engineering Design: A Systematic Approach. Springer. Ch. 6 (Morphological Matrix).
- Zwicky, F. (1967). The Morphological Approach to Discovery, Invention, Research and Construction.

---

*Morphological Chart Analysis cho VN-12.7MM-SIM. Cập nhật khi có sản phẩm mới trên thị trường.*
