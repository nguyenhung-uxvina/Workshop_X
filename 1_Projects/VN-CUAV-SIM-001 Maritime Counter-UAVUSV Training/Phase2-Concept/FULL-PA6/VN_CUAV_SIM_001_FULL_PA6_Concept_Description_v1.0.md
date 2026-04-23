---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Concept Description (Doc 010)
concept: PA-6 FULL
variant: FULL
version: v1.0
---

# VN-CUAV-SIM-001 FULL — Concept Description v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Kíp Bắn Tàu Chiến — PA-6 FULL

**Ngày:** 2026-04-07
**Phase:** 2 — Conceptual Design
**Concept:** PA-6 FULL (kíp bắn tàu chiến, 2-3 vị trí bắn, 360° FOV, shared deck motion)
**Requirements baseline:** v1.0 (101 requirements: 71D + 30W)
**Phân biệt cốt lõi:** BỆ SÀN CHUNG (shared deck) — tất cả xạ thủ cùng cảm nhận một con sóng. Không có đối thủ cạnh tranh nào cung cấp tính năng này ở mức giá dưới $200,000.

---

## 1. Tổng Quan Concept

Hệ thống huấn luyện kíp bắn phòng không tàu chiến mô phỏng toàn diện — 2-3 xạ thủ cùng lúc, bảo vệ 360° quanh tàu, phối hợp chống bầy UAV/USV 12-20 mục tiêu. Khác biệt cơ bản so với PA-2 STANDARD: đây không phải huấn luyện cá nhân mà là huấn luyện **phối hợp chiến đấu** — thử thách giao tiếp, kỷ luật lửa, và năng lực kíp bắn chịu áp lực bầy đàn.

### Đặc Điểm Chính PA-6 FULL

| Hạng mục | Thông số |
|----------|----------|
| Quy mô | Kíp bắn tàu chiến — 2-3 vị trí bắn + 1 chỉ huy kíp |
| FOV | 360° liên tục — 6 máy chiếu short-throw, màn hình trụ Ø8m × 2m |
| Motion | Bệ sàn CHUNG 3×4m — tất cả xạ thủ cùng deck, ±15° roll, ±10° pitch |
| Swarm | 12-20 mục tiêu đồng thời — bắt buộc phối hợp, vượt khả năng 1 người |
| Phân khu bắn | ST1 Mũi 300°-060°, ST2 Lái trái 150°-270°, ST3 Lái phải 120°-240° |
| Vũ khí | 5 loại MWI mô đun, mỗi vị trí bắn riêng, mix khác nhau theo kịch bản |
| Render | RTX 4090 ×1 hoặc RTX 4080 ×2 — 6 viewport → 6 projectors |
| Audio | 7.1 surround |
| Instructor | 1 PC + 3 màn hình (bản đồ chiến thuật god-eye + 2-3 gương trainee) |
| Phòng | 10×10m indoor |
| Giá bán | $120,000-200,000 |
| R&D (2-vị trí) | ~$32,545 | R&D (3-vị trí): ~$40,325 |
| Biên lợi nhuận | 64-80% |

### Chiến Lược Định Vị

PA-6 FULL không cạnh tranh với LITE bằng giá — nó nhắm đến **ngân sách khác**, **quyết định mua khác** (cấp Bộ Quốc Phòng, Quân chủng), và **nhu cầu khác** (huấn luyện kíp chiến đấu thực tế trên tàu chiến). Đây là flagship product của dòng VN-CUAV-SIM-001, đặt nền tảng cho hợp đồng huấn luyện lớn với Hải quân Nhân dân Việt Nam.

---

## 2. Kiến Trúc Hệ Thống

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    VN-CUAV-SIM-001 PA-6 FULL — KIẾN TRÚC HỆ THỐNG       │
│                        Phòng 10×10m | LAN nội bộ                        │
│                                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                          │
│  │ SS1: WPN   │  │ SS1: WPN   │  │ SS1: WPN   │                          │
│  │ STATION 1  │  │ STATION 2  │  │ STATION 3  │                          │
│  │ ST1 Mũi    │  │ ST2 Lái T  │  │ ST3 Lái P  │                          │
│  │ DSHK 12.7  │  │ ZU-23-2    │  │ KPVT 14.5  │  (optional 3rd station) │
│  │ Sector     │  │ Sector     │  │ Sector     │                          │
│  │ 300°-060°  │  │ 150°-270°  │  │ 120°-240°  │                          │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘                          │
│        │ USB Serial    │ USB Serial     │ USB Serial                     │
│        └──────────────┬┴────────────────┘                                │
│   ┌────────────────────▼───────────────────────────────────────────┐     │
│   │                    RENDER SERVER                               │     │
│   │           RTX 4090 (1×) hoặc RTX 4080 (2×)                    │     │
│   │           Unity 6 LTS + HDRP — 6 viewports                    │     │
│   │           V-SMASH ballistic engine                             │     │
│   │           Scenario Engine + AAR + Crew Coordination Logic      │     │
│   └──────┬──────────────────────────────────────────┬─────────────┘     │
│          │ HDMI ×6                                  │ LAN (Gigabit)     │
│          ▼                                          ▼                   │
│  ┌───────────────────────────────────┐    ┌──────────────────────────┐  │
│  │    SS2: VISUAL DISPLAY 360°       │    │ SS5: INSTRUCTOR STATION  │  │
│  │    6× short-throw projectors      │    │ 1× PC + 3× monitors      │  │
│  │    Màn hình trụ Ø8m × 2m         │    │ God-eye tactical map     │  │
│  │    6 viewports seamless blend     │    │ 2-3 trainee mirrors      │  │
│  │    7.1 surround audio             │    │ Voice comm log           │  │
│  └───────────────────────────────────┘    │ Threat assignment GUI    │  │
│                                           └──────────────────────────┘  │
│   ┌────────────────────────────────────────────────────────────────┐     │
│   │          SS3: SHARED DECK MOTION PLATFORM (KEY DIFF)           │     │
│   │          3m × 4m | 4-6 electric actuators ball-screw           │     │
│   │          Roll ±15° | Pitch ±10° | Period 4-8s                  │     │
│   │          Tải trọng ≥ 400kg | Controller: ESP32 + BTS7960       │     │
│   │          UDP 50Hz ← Render Server                              │     │
│   │          TẤT CẢ XẠ THỦ ĐỨNG CÙNG SÀN — cùng con sóng        │     │
│   └────────────────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────────────────┘
```

**Luồng tín hiệu chính:**
- Xạ thủ bóp cò → MCU vũ khí → USB → Render Server → tính đạn đạo → cập nhật hình → HDMI → projector (≤ 50ms end-to-end)
- Render Server → UDP 50Hz → Motion MCU → ESP32 → BTS7960 × 4-6 → actuators → sàn chuyển động
- Instructor GUI → LAN → Render Server → inject threat / assign sector / override scenario

---

## 3. SS1: Weapon Station × 2-3 — Kiến Trúc MWI Mô Đun

Mỗi vị trí bắn là một **trạm vũ khí độc lập** — giá đỡ chung (universal cradle) + mô đun vũ khí thay nhanh. Hệ thống NFC tự nhận biết loại súng khi lắp, tự động cấu hình toàn bộ thông số: đạn đạo, lực giật, tốc độ bắn, kính ngắm, chấm điểm. Mỗi vị trí bắn có thể được lắp **loại vũ khí khác nhau** — tái hiện đúng bố trí vũ khí trên tàu thực tế.

### Universal Cradle (cố định, dùng chung cho mọi variant)

| TT | Sub-function | Nguyên lý làm việc | Thông số chính |
|----|-------------|-------------------|----------------|
| C1 | Xoay ngang (Traverse) | Slip clutch + rotary encoder | Kháng lực điều chỉnh, độ phân giải 0,1° |
| C2 | Nâng hạ (Elevation) | Quay tự do + encoder | -10° → +87° (đối trọng trong mô đun) |
| C3 | Kháng lực | Phanh từ (magnetic powder brake) 0-10 Nm | Tự điều chỉnh theo trọng lượng mô đun súng |
| C4 | Bệ đỡ | Thép hàn 60×40mm, bolt xuống sàn | 3 vị trí chiều cao (155-185cm) |
| C5 | An toàn | Software limit + hard stop cơ học | Dual redundancy — không thể quay vào vùng cấm |
| C6 | Giao diện mô đun | Quick-release plate + 12-pin MIL + NFC reader | < 5 phút thay module |

### Weapon Modules — 5 loại MWI (Modular Weapon Interface)

| TT | Module | Vũ khí | Cỡ đạn | Khối lượng mockup | Lực giật mô phỏng | ROF mô phỏng | Giai đoạn |
|----|--------|--------|--------|-------------------|-------------------|--------------|-----------|
| W1 | WM-01 | DSHK | 12,7×108mm | ~10 kg | 15-20 N (solenoid) | 600 v/p | Phase 1 |
| W2 | WM-02 | NSV | 12,7×108mm | ~8 kg | 15-20 N (solenoid) | 700 v/p | Phase 1 |
| W3 | WM-03 | KPVT | 14,5×114mm | ~12 kg | 25-35 N (solenoid) | 550 v/p | Phase 2 |
| W4 | WM-04 | ZU-23-2 | 23×152mm | ~15 kg | 40-60 N (solenoid) | 800 v/p | Phase 2 |
| W5 | WM-05 | PKM | 7,62×54mm | ~7 kg | 8-12 N (solenoid) | 650 v/p | Tùy chọn |

**Bố trí mặc định cho PA-6 FULL (3 vị trí):**
- ST1 — Mũi: WM-01 DSHK 12,7mm (súng tiêu chuẩn tàu tuần tra)
- ST2 — Lái trái: WM-04 ZU-23-2 23mm (pháo phòng không hạm tàu)
- ST3 — Lái phải: WM-03 KPVT 14,5mm (súng máy hạng nặng)

**IRONMESH synergy:** Solenoid recoil driver tái sử dụng từ BB-01 LOMAH. V-SMASH ballistic engine dùng chung cho tất cả calibers.

---

## 4. SS2: Visual Display — 360° Cylindrical, 6 Projectors

Hệ thống hiển thị hình trụ 360° là yếu tố định hình toàn bộ PA-6 FULL. Sáu máy chiếu short-throw chiếu lên màn hình vải căng hình trụ Ø8m × 2m — mỗi xạ thủ thấy góc 360° xung quanh mình, mô phỏng đúng trải nghiệm bắn trên tàu chiến ngoài biển.

| TT | Tính năng | Giá trị | Đơn vị | Ghi chú |
|----|-----------|---------|--------|---------|
| D1 | Số máy chiếu | 6 | chiếc | Short-throw, Epson EB-L735U hoặc tương đương |
| D2 | FOV ngang tổng | 360 | độ | Liên tục, seamless edge blending |
| D3 | FOV dọc | ≥ 60 | độ | Đủ nhìn mục tiêu trên cao +85° |
| D4 | Màn hình | Trụ Ø8m × 2m | — | Vải matt white gain 1,0-1,3, khung thép tự chế |
| D5 | Độ phân giải mỗi viewport | 1.920×1.080 | pixel | 6 viewports × Full HD |
| D6 | Độ sáng | ≥ 3.000 | lumens/máy | Phòng tối (indoor, có kiểm soát ánh sáng) |
| D7 | Render engine | Unity 6 LTS + HDRP | — | 6-viewport simultaneous, RTX 4090 |
| D8 | GPU | RTX 4090 ×1 hoặc RTX 4080 ×2 | — | 6 HDMI outputs |
| D9 | Tốc độ khung hình | ≥ 60 | fps | Liên tục trên cả 6 màn hình |
| D10 | Biển 3D | FFT Gerstner procedural | — | Sea State 0-5 real-time |
| D11 | Chu kỳ ngày/đêm | Ban ngày / hoàng hôn / ban đêm | — | Có NVG/FLIR mode (tùy chọn) |
| D12 | Môi trường tàu | TT400, tàu tuần tra, xuồng cao tốc | — | 3 deck view environments |
| D13 | Audio | 7.1 surround | — | FMOD spatial audio — UAV tiếp cận, gió, sóng, lệnh chỉ huy |

**Sector Overlay (tính năng độc quyền FULL):**
- Mỗi xạ thủ thấy phân khu của mình (đường viền xanh lá)
- Thấy phân khu đồng đội (đường viền vàng) để tránh bắn nhầm
- Overlay có thể tắt/bật từ instructor để tăng độ khó

---

## 5. SS3: Shared Deck Motion Platform — KHÁC BIỆT CẠNH TRANH CỐT LÕI

Đây là tính năng không đối thủ nào trong phân khúc dưới $200,000 cung cấp. Thay vì mỗi xạ thủ ngồi trên ghế motion riêng (như PA-2 LITE), PA-6 FULL đặt **tất cả xạ thủ trên cùng một bệ sàn** — họ cảm nhận cùng một con sóng, cùng nghiêng cùng lắc theo nhịp biển thực tế. Điều này tạo ra trải nghiệm huấn luyện tập thể không thể thay thế bằng mô phỏng cá nhân.

### Thông Số Kỹ Thuật Shared Deck Platform

| TT | Thông số | Giá trị | Đơn vị | Ghi chú |
|----|----------|---------|--------|---------|
| P1 | Kích thước sàn | 3 × 4 | m | Đủ cho 3 xạ thủ + bệ vũ khí |
| P2 | Số actuator | 4-6 | chiếc | Electric linear ball-screw |
| P3 | Góc lăn (Roll) | ±15 | độ | Tái hiện Sea State 1-5 |
| P4 | Góc chúc (Pitch) | ±10 | độ | Tái hiện sóng dọc và ngang |
| P5 | Chu kỳ sóng | 4-8 | giây | Có thể điều chỉnh theo kịch bản |
| P6 | Tải trọng tối đa | ≥ 400 | kg | 3 xạ thủ × 100kg + bệ vũ khí + cấu trúc |
| P7 | Bộ điều khiển | ESP32 + BTS7960 × 4-6 | — | UDP 50Hz từ Render Server |
| P8 | Độ trễ motion | ≤ 20 | ms | Từ lệnh UDP đến chuyển động thực |
| P9 | Tần số cập nhật | 50 | Hz | Smooth motion, không giật cục |
| P10 | Vật liệu khung | Thép hàn 60×40mm + universal joint | — | Bolt xuống sàn phòng, tháo lắp được |
| P11 | Khối lượng platform | ~120 | kg | Không tính tải |
| P12 | Chế độ biển | Sea State 0-5 | — | Map từ kịch bản Unity sang motion profile |
| P13 | Emergency stop | Hardware button + software | — | Dừng ngay lập tức khi có sự cố |

**Tại sao Shared Deck > Individual Seats (PA-2):**
1. **Tính thực tế:** Trên tàu chiến thực tế, kíp bắn đứng trên cùng một boong — cùng cảm nhận sóng là yếu tố phối hợp tự nhiên.
2. **Trải nghiệm cộng đồng:** Khi tàu nghiêng, cả kíp nghiêng cùng nhau — tạo cảm giác team, không phải cá nhân riêng lẻ.
3. **Chi phí:** 1 bệ sàn cho 3 người rẻ hơn 3 ghế motion riêng × 3.
4. **Không gian:** 3m×4m tập trung, dễ tích hợp trong phòng 10×10m.

---

## 6. SS4: Scenario Engine — Kịch Bản Phối Hợp Kíp Bắn

Scenario Engine của PA-6 FULL được mở rộng từ LITE với lớp **Crew Coordination Logic** — xử lý phân công mục tiêu, theo dõi sector bắn, phát hiện vi phạm kỷ luật lửa, và tính điểm kíp tổng hợp.

### Kịch Bản Đặc Quyền FULL (CREW-01 đến CREW-10)

| TT | Kịch bản | Mô tả | Kỹ năng rèn luyện | Độ khó |
|----|----------|-------|-------------------|--------|
| CREW-01 | Single UAV — sector handoff | 1 UAV bay qua ranh giới phân khu giữa 2 xạ thủ | Giao tiếp, bàn giao mục tiêu | ★★☆☆☆ |
| CREW-02 | USV approach — primary + backup | 1 USV tiếp cận nhanh, 1 xạ thủ chính + 1 dự phòng | Phân công chính/phụ | ★★☆☆☆ |
| CREW-03 | Dual threat — split attention | 1 UAV + 1 USV đồng thời ở 2 phân khu | Không bỏ mục tiêu của đồng đội | ★★★☆☆ |
| CREW-04 | Swarm 8 — sector defense | 8 UAV, mỗi phân khu 3-4, phối hợp ưu tiên | Quản lý đạn, ưu tiên mục tiêu | ★★★☆☆ |
| CREW-05 | Swarm 12 — saturation | 12 mục tiêu — vượt quá 1 người xử lý | Phân chia đều, không chồng lấp | ★★★★☆ |
| CREW-06 | Swarm 20 — overload | 20 mục tiêu — kiểm tra breakdown giao tiếp | Chỉ huy kíp điều phối dưới áp lực | ★★★★★ |
| CREW-07 | Night mixed — FPV + USV | Ban đêm: 4 FPV kamikaze + 2 USV | NVG mode, nhận dạng âm thanh | ★★★★☆ |
| CREW-08 | Decoy + main attack | 3 UAV giả mạo + 2 USV thật — IFF test | Phân biệt mục tiêu thật/giả | ★★★★☆ |
| CREW-09 | Friendly fire discipline | Có trực thăng IFF bay qua phân khu — không được bắn | Kỷ luật lửa, nhận dạng bạn/thù | ★★★★★ |
| CREW-10 | Full mission 30 phút | Multi-wave liên tục — endurance test kíp bắn | Duy trì phối hợp khi mệt mỏi | ★★★★★ |

### Môi Trường 3D (dùng chung + độc quyền FULL)

| TT | Tên môi trường | Mô tả | Điều kiện |
|----|---------------|-------|----------|
| E1 | Tàu TT400 deck view | Boong tàu hộ vệ TT400, góc nhìn 360° | Day/dusk/night |
| E2 | Tàu tuần tra | Boong tàu tuần tra ven bờ | Day/night |
| E3 | Xuồng cao tốc | Boong xuồng cao tốc đang cơ động | Day |
| E4 | Cảng quân sự | Vị trí phòng thủ cảng | Day/night |
| E5 | Biển Đông mở | Không có tàu — phòng thủ 360° | All conditions |

---

## 7. SS5: System Integration — Phòng 10×10m Indoor

| TT | Sub-system | Mô tả | Thông số kỹ thuật |
|----|-----------|-------|------------------|
| I1 | Diện tích tối thiểu | Phòng indoor | 10m × 10m × 3m (chiều cao) |
| I2 | Mạng nội bộ | LAN Gigabit | Switch + Cat6 — không cần internet |
| I3 | Nguồn điện | 220V/50Hz | ~3,5 kW tổng (peak 5 kW) |
| I4 | UPS | 3 kVA | Đủ cho toàn hệ thống 15 phút |
| I5 | Rack điện tử | 1 rack 19" | Render PC + Switch + UPS + PDU |
| I6 | Kiểm soát ánh sáng | Phòng tối hoàn toàn | Rèm blackout hoặc tường kín |
| I7 | Điều hòa | Tối thiểu 2 HP | Render PC + projectors tỏa nhiệt |
| I8 | Packaging | 6 flight cases | Vận chuyển được bằng xe tải 2 tấn |
| I9 | Cài đặt tại chỗ | Pre-imaged SSD | Không cần internet, offline update |
| I10 | Tự chẩn đoán | Boot self-test ≤ 2 phút | Error dashboard trên Instructor PC |

### Kiến Trúc Mạng Chi Tiết

```
Render Server (192.168.1.10)
    ├── HDMI ×6 → 6 Projectors (không qua mạng)
    ├── USB Serial → WPN MCU ST1 (local)
    ├── USB Serial → WPN MCU ST2 (local)
    ├── USB Serial → WPN MCU ST3 (optional local)
    ├── UDP 50Hz → Motion MCU (local USB hoặc LAN)
    └── LAN Gigabit ↔ Instructor PC (192.168.1.20)
                         ├── Monitor 1: Tactical map god-eye
                         ├── Monitor 2: ST1 camera mirror
                         └── Monitor 3: ST2/ST3 camera mirror
```

---

## 8. Crew Coordination Features — Tính Năng Độc Quyền FULL

Đây là nhóm tính năng biến PA-6 FULL từ "nhiều cái PA-2 ghép lại" thành "hệ thống huấn luyện kíp chiến đấu thực sự".

### 8.1 Threat Assignment — Phân Công Mục Tiêu

Chỉ huy kíp (commander) có thể phân công mục tiêu cho từng vị trí bắn qua hai kênh:
- **Voice command:** Nói "ST1 — mục tiêu số 3" → hệ thống hiển thị highlight cho ST1
- **GUI tablet:** Drag mục tiêu từ bản đồ tactical vào vị trí bắn

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| TA1 | Phân công voice | Ghi âm lệnh chỉ huy, timestamp → AAR replay có voice |
| TA2 | Phân công GUI | Instructor/commander dùng tablet/PC assign target |
| TA3 | Highlight mục tiêu | Mục tiêu được assign có vòng tròn highlight màu theo xạ thủ |
| TA4 | Thông báo broadcast | "Xạ thủ 1, tiêu diệt mục tiêu số 5 — hướng 045°" |
| TA5 | Override | Instructor có thể reassign bất kỳ lúc nào |

### 8.2 Sector Overlay — Hiển Thị Phân Khu

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| SO1 | Phân khu bản thân | Đường viền xanh lá — khu vực trách nhiệm của xạ thủ |
| SO2 | Phân khu đồng đội | Đường viền vàng — khu vực đồng đội, cảnh báo nếu ngắm vào |
| SO3 | Vùng chồng lấp | Màu cam — vùng overlap hợp lệ (2 xạ thủ có thể bắn) |
| SO4 | Tắt overlay | Instructor tắt overlay để tăng độ khó kịch bản |
| SO5 | Góc sector | ST1: 300°-060° (120°) | ST2: 150°-270° (120°) | ST3: 120°-240° (120°) |

### 8.3 Fire Discipline — Kỷ Luật Lửa

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| FD1 | Phát hiện bắn nhầm sector | Cảnh báo nếu xạ thủ ngắm sâu vào phân khu đồng đội |
| FD2 | Friendly fire (IFF) | Kịch bản CREW-09 — phạt nặng nếu bắn vào trực thăng bạn |
| FD3 | Ghi lại vi phạm | Mọi vi phạm fire discipline → log → hiển thị trong AAR |
| FD4 | Penalty scoring | -50 điểm/lần bắn vào sector đồng đội, -200 điểm/friendly fire |

### 8.4 Kill Confirmation — Xác Nhận Tiêu Diệt

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| KC1 | Broadcast audio | "Mục tiêu số [X] bị tiêu diệt — [ST1/ST2/ST3]" → tất cả nghe |
| KC2 | Visual flash | Flash ngắn 0,3 giây tại vị trí mục tiêu trên tất cả màn hình |
| KC3 | Cập nhật tactical map | Mục tiêu gạch chân trên bản đồ instructor |
| KC4 | Coordination credit | Xạ thủ phối hợp đúng (bắn sector mình) nhận điểm thưởng |

### 8.5 Communication Log — Ghi Âm Lệnh

| TT | Tính năng | Mô tả |
|----|-----------|-------|
| CL1 | Ghi âm tất cả | Microphone headset mỗi vị trí → ghi toàn session |
| CL2 | Timestamp sync | Ghi âm đồng bộ với action log 10Hz |
| CL3 | AAR voice replay | Phát lại có voice — nhìn lại đồng thời nghe lệnh chỉ huy |
| CL4 | Đánh giá giao tiếp | Instructor nhận xét chất lượng giao tiếp dựa trên log |

### 8.6 Crew Score — Điểm Kíp Tổng Hợp

Công thức tính điểm kíp bắn:

```
Điểm Kíp = Σ(Điểm cá nhân ST1+ST2+ST3)
           + Điểm thưởng phối hợp
           - Phạt bắn nhầm
           - Phạt friendly fire

Điểm thưởng phối hợp:
  + 30 điểm/lần handoff thành công
  + 50 điểm nếu swarm ≥ 8 bị tiêu diệt 100%
  + 20 điểm/sector defense hoàn hảo (không lọt)

Phạt:
  - 50 điểm/lần bắn vào sector đồng đội
  - 200 điểm/lần friendly fire (IFF violation)
  - 100 điểm nếu mục tiêu đột phá vào 300m mà không được tiêu diệt
```

---

## 9. Tổng Hợp Chi Phí

### Cấu Hình 2 Vị Trí Bắn (ST1 + ST2)

| TT | Hạng mục | Chi phí (USD) | Ghi chú |
|----|----------|--------------|---------|
| H1 | SS1 Cradle × 2 | $1,560 | Universal cradle cho 2 stations |
| H2 | SS1 Weapon modules × 2 | $1,385 | WM-01 DSHK + WM-04 ZU-23-2 |
| H3 | SS2 Projectors × 6 | $7,200 | Short-throw Epson/BenQ |
| H4 | SS2 Màn hình trụ Ø8m | $800 | Khung thép + vải màn tự chế |
| H5 | SS2 Render PC (RTX 4090) | $4,500 | 6-output GPU |
| H6 | SS2 Audio 7.1 | $700 | FMOD compatible |
| H7 | SS3 Shared deck platform | $4,500 | 3×4m, 4-6 actuators, ball-screw |
| H8 | SS3 Ghế + harness × 2 | $700 | Racing bucket, 4-point |
| H9 | SS5 Instructor PC (3 mon) | $2,200 | Commander GUI + mirrors |
| H10 | SS5 UPS 3kVA | $600 | Toàn bộ hệ thống 15 phút |
| H11 | SS5 Network switch + rack | $500 | Gigabit LAN |
| H12 | SS5 Flight cases × 6 | $900 | Vận chuyển được |
| | **HW Total** | **~$24,545** | |
| S1 | SW dev (incremental từ LITE +$8K) | +$8,000 | Crew coordination, 360° engine, FULL scenarios |
| | **Tổng R&D (2-station)** | **~$32,545** | |

### Cấu Hình 3 Vị Trí Bắn (ST1 + ST2 + ST3)

| TT | Hạng mục thêm | Chi phí (USD) | Ghi chú |
|----|--------------|--------------|---------|
| A1 | SS1 Cradle × 1 thêm | +$780 | Station thứ 3 |
| A2 | SS1 WM-03 KPVT × 1 | +$650 | Module 14.5mm |
| A3 | SS3 Platform nâng cấp | +$800 | Thêm 2 actuators, nâng tải trọng |
| A4 | SW dev (3-station sync) | +$1,550 | Thêm viewport + crew logic |
| | **Cộng thêm** | **+$3,780** | |
| | **Tổng R&D (3-station)** | **~$36,325** | Ghi chú: thực tế ~$40,325 sau buffer |

### Hiệu Quả Kinh Doanh

| TT | Metric | 2-station | 3-station |
|----|--------|-----------|-----------|
| B1 | Giá bán target | $120,000-160,000 | $160,000-200,000 |
| B2 | R&D cost | ~$32,545 | ~$40,325 |
| B3 | Biên lợi nhuận | 73-80% | 75-80% |
| B4 | Số lượng đơn vị cần để hòa vốn | 1 | 1 |
| B5 | Thị trường tiềm năng VN | ~15-20 trung tâm huấn luyện HQ | — |

---

## 10. Portfolio Synergy (IRONMESH)

| TT | Tái sử dụng | Từ → Đến | Tiết kiệm |
|----|------------|----------|----------|
| S1 | Solenoid recoil driver | BB-01 LOMAH → SS1 CUAV-SIM | -$50 dev, mạch đã kiểm chứng |
| S2 | V-SMASH ballistic engine | V-SMASH → SS2 tất cả calibers | -$5,000 dev, model 12.7mm/23mm done |
| S3 | PA-2 LITE code base | LITE → FULL | +70% code reuse, tiết kiệm 3-4 tháng dev |
| S4 | Weapon station hardware | CUAV-SIM → VN-NAVAL-GUNNERY | Platform cho naval gunnery trainer |
| S5 | 360° display engine | FULL → future PA-7 FORTRESS | Land-based phòng thủ bờ biển |
| S6 | Crew coordination AI | FULL → CORTEX RANGE | Networked multi-site huấn luyện |

**Code Reuse Path LITE → FULL:**
- Unity V-SMASH ballistic core: 100% reuse
- Scenario authoring GUI: 90% reuse
- AAR replay engine: 80% reuse + thêm voice layer
- Weapon MCU firmware: 100% reuse
- Thêm mới: 360° render engine, crew coordination logic, sector overlay, shared deck motion driver

---

## 11. Known Risks

| TT | Rủi ro | Xác suất | Tác động | Biện pháp giảm thiểu |
|----|--------|----------|----------|---------------------|
| R1 | 6-viewport render latency > 50ms | Cao | Cao | PoC benchmark sớm Phase 3; fallback 2×RTX 4080 |
| R2 | Căn chỉnh 6 projector trên màn trụ | Trung bình | Trung bình | Công cụ calibration tự động (Phase 3 PoC) |
| R3 | Shared deck platform resonance với bệ vũ khí | Trung bình | Cao | Phân tích tần số (Phase 3); thiết kế cách ly rung |
| R4 | Phòng tối 10×10m — khách hàng không có | Thấp | Trung bình | Thiết kế có curtain blackout, linh hoạt |
| R5 | Tuyển VN developer 6-viewport | Trung bình | Cao | Bắt đầu tuyển từ Phase 2 |
| R6 | Chi phí shared deck vượt $4,500 | Thấp | Trung bình | Có nhà sản xuất platform motion VN, quote sớm |
| R7 | Voice recognition tiếng Việt cho threat assignment | Trung bình | Thấp | GUI tablet là primary; voice là secondary feature |

---

## 12. Bố Trí Vật Lý — Top View 10×10m

```
┌──────────────────────────────────────────────────────────────────────────┐
│          PHÒNG HUẤN LUYỆN 10×10m — PA-6 FULL TOP VIEW                   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │                   TƯỜNG PHÒNG (10m)                              │    │
│  │                                                                  │    │
│  │                     [ENTRANCE]                                   │    │
│  │                         ↑                                        │    │
│  │  ┌────────────────────────────────────────────────────────────┐  │    │
│  │  │              MÀN HÌNH TRỤ Ø8m (ngoài)                     │  │    │
│  │  │                                                            │  │    │
│  │  │    ┌──────────────────────────────────────────────────┐   │  │    │
│  │  │    │         BỆ SÀN SHARED DECK 3×4m                 │   │  │    │
│  │  │    │                                                  │   │  │    │
│  │  │    │    [ST2 Lái T]    [ST1 Mũi]    [ST3 Lái P]      │   │  │    │
│  │  │    │    ZU-23-2 23mm  DSHK 12.7mm  KPVT 14.5mm       │   │  │    │
│  │  │    │    150°-270°     300°-060°    120°-240°           │   │  │    │
│  │  │    │                                                  │   │  │    │
│  │  │    └──────────────────────────────────────────────────┘   │  │    │
│  │  │                    ↑ 6 actuators bên dưới sàn             │  │    │
│  │  │                                                            │  │    │
│  │  └────────────────────────────────────────────────────────────┘  │    │
│  │                                                                  │    │
│  │   ┌──────────────────┐        ┌────────────────────────────┐    │    │
│  │   │ INSTRUCTOR + CDR │        │  RACK: Render PC + Switch  │    │    │
│  │   │ 1 PC + 3 monitor │        │  + UPS 3kVA + PDU          │    │    │
│  │   │ Ngoài màn trụ    │        │                            │    │    │
│  │   └──────────────────┘        └────────────────────────────┘    │    │
│  │                                                                  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│  6 PROJECTORS gắn vào khung màn trụ (shoot inward, short-throw)         │
│  Khoảng cách projector → màn: ~1m                                        │
└──────────────────────────────────────────────────────────────────────────┘

Ghi chú bố trí:
- Màn trụ Ø8m đặt tâm phòng → còn ~1m mỗi bên để đi lại
- Instructor PC đặt ngoài màn trụ — có thể nhìn vào phía sau xạ thủ
- Rack điện tử đặt góc phòng — tránh xa actuators
- Actuators bên dưới sàn — không ảnh hưởng không gian huấn luyện
- Emergency stop button tại instructor station + tại mỗi vị trí bắn
```

---

## Phụ Lục: So Sánh PA-2 STANDARD vs PA-6 FULL

| Hạng mục | PA-2 STANDARD (LITE) | PA-6 FULL |
|----------|---------------------|-----------|
| Số xạ thủ | 1 | 2-3 + 1 chỉ huy kíp |
| FOV | 180° (3 projectors) | 360° (6 projectors) |
| Motion | 2-DOF seat riêng | Shared deck 4-6 DOF, 3×4m |
| Swarm max | 4-8 mục tiêu | 12-20 mục tiêu |
| Phối hợp kíp | Không | Có — core feature |
| Phân khu bắn | Không | Có — sector overlay |
| Kỷ luật lửa | Không | Có — fire discipline penalty |
| Voice log | Không | Có — AAR với voice replay |
| Điểm kíp | Không | Có — composite crew score |
| Phòng tối thiểu | 6×8m | 10×10m |
| Giá bán | $50,000-70,000 | $120,000-200,000 |
| R&D cost | ~$18,600-27,600 | ~$32,545-40,325 |
| Thị trường | Tàu tuần tra, trạm bờ | Tàu chiến, trung tâm HQ cấp quân chủng |
