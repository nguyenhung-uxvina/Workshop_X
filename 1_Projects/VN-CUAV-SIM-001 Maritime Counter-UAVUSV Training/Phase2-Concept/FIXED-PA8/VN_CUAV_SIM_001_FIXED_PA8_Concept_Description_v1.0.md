---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Concept Description (Doc 010)
concept: PA-8 FIXED
variant: FIXED
version: v1.0
---

# VN-CUAV-SIM-001 FIXED — Concept Description v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Phòng Thủ Đảo/Nhà Giàn/Cảng — PA-8 FIXED

**Ngày:** 2026-04-07
**Phase:** 2 — Conceptual Design
**Concept:** PA-8 FIXED (phòng thủ cố định đảo/nhà giàn/cảng)
**Requirements baseline:** v1.0 (101 requirements: 71D + 30W)

---

## 1. Tổng Quan Concept

Hệ thống mô phỏng huấn luyện bắn phòng không chống UAV và USV cho lực lượng phòng thủ đảo, nhà giàn DK1, và cảng quân sự/dân sự. Hai xạ thủ đứng tại 2 bệ vũ khí mô phỏng độc lập, phối hợp bảo vệ 2 sector với góc phủ 240°, bắn vào mục tiêu 3D render trên 4 màn hình projection cong. Không có hệ thống rung lắc — phản ánh đúng đặc điểm chiến đấu của ụ súng cố định trên đảo/giàn.

### Đặc Điểm Chính PA-8 FIXED

| Hạng mục | Thông số |
|----------|----------|
| Nền tảng | Đảo san hô, nhà giàn DK1, cảng quân sự/dân sự |
| Số trạm bắn | 2 (ST1 + ST2 — phòng thủ 2 hướng) |
| Nhân sự | 2 xạ thủ + 1 chỉ huy kíp (instructor đóng vai chỉ huy) |
| Display | 4× projector short-throw, 240° FOV, màn hình cong |
| Vũ khí | MWI 5 loại (giống LITE), mỗi trạm 1 súng riêng |
| Motion | KHÔNG — vị trí cố định, không có motion platform |
| Render | 1× RTX 4090 (4 viewport 240°) |
| Audio | 5.1 surround + outdoor ambience (sóng, gió đảo, báo động) |
| Mục tiêu đồng thời | 8-12 (swarm + seaborne) |
| Diện tích phòng | 8 × 8 m (indoor, tiêu chuẩn) |
| Ruggedized | KHÔNG — indoor standard |
| Network | Standalone |
| Giá bán | $55.000-80.000/bộ |
| R&D cost | ~$14.860-17.860 |
| Biên lợi nhuận | 73-81% |

### Khác Biệt So Với LITE (PA-2)

| Hạng mục | LITE (PA-2) | FIXED (PA-8) | Lý do |
|----------|-------------|--------------|-------|
| Số trạm bắn | 1 | **2** | Phòng thủ 2 hướng — ụ súng đảo/giàn |
| Motion platform | 2-DOF (roll/pitch) | **KHÔNG** | Vị trí cố định — không sóng lắc |
| FOV | 180° (3 projector) | **240° (4 projector)** | Quan sát rộng hơn — đảo 360° chia sector |
| Môi trường 3D | Tàu + biển mở | **Đảo + nhà giàn + cảng** | Địa hình phòng thủ cố định |
| Âm thanh | Sóng biển + engine tàu | **Gió đảo + sóng vỗ + alarm** | Không có tiếng máy tàu |
| Scoring | Cá nhân xạ thủ | **Crew coordination** | 2 xạ thủ phối hợp sector |
| Kịch bản | Biển mở + bảo vệ tàu | **FXD-01 → FXD-07 (đảo/giàn/cảng)** | Scenario riêng biệt |
| Giá bán | $50.000-70.000 | **$55.000-80.000** | +2 trạm, +1 projector |
| R&D cost | ~$19.395-28.385 | **~$14.860-17.860** | Không có motion platform |

---

## 2. Kiến Trúc Hệ Thống

```
┌───────────────────────────────────────────────────────────────────┐
│                    VN-CUAV-SIM-001 PA-8 FIXED                     │
│                                                                   │
│  ┌─────────────────┐              ┌─────────────────┐             │
│  │ ST1: WEAPON STN  │              │ ST2: WEAPON STN  │             │
│  │ Sector 1 (270°-  │              │ Sector 2 (330°-  │             │
│  │   030°, 120°)    │              │   090°, 120°)    │             │
│  │                 │              │                 │             │
│  │ • Traverse      │              │ • Traverse      │             │
│  │ • Elevation     │              │ • Elevation     │             │
│  │ • Recoil WM     │              │ • Recoil WM     │             │
│  │ • Trigger       │              │ • Trigger       │             │
│  │ • NFC auto-cfg  │              │ • NFC auto-cfg  │             │
│  └────────┬────────┘              └────────┬────────┘             │
│           │                               │                       │
│           │  USB Serial (×2)              │                       │
│           └──────────────┬────────────────┘                       │
│                          │                                        │
│                    ┌─────┴──────┐       ┌──────────────┐          │
│                    │ RENDER PC  │◄─LAN──│  INSTRUCTOR  │          │
│                    │ RTX 4090   │       │  STATION     │          │
│                    │ Unity 6    │       │  1 PC + 2    │          │
│                    │ 4 viewport │       │  monitors    │          │
│                    └─────┬──────┘       └──────────────┘          │
│                          │                                        │
│           ┌──────────────┼──────────────┬──────────────┐          │
│           │HDMI #1       │HDMI #2       │HDMI #3       │HDMI #4   │
│     ┌─────┴────┐  ┌──────┴───┐  ┌──────┴───┐  ┌───────┴──┐       │
│     │ PROJ #1  │  │ PROJ #2  │  │ PROJ #3  │  │ PROJ #4  │       │
│     │  60°     │  │  60°     │  │  60°     │  │  60°     │       │
│     └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│     └─────────────────────────────────────────────────────┘       │
│                  MÀN HÌNH CONG 240° (6m × 2m)                    │
│                                                                   │
│           ┌──────────────────────────────────────────┐            │
│           │  SS4: SCENARIO ENGINE (software)          │            │
│           │  SS5: UPS + PDU + RACK + Network          │            │
│           └──────────────────────────────────────────┘            │
└───────────────────────────────────────────────────────────────────┘
```

---

## 3. SS1: Weapon Station Simulator — MODULAR × 2 (~$2.660 tổng cộng 2 trạm)

**Kiến trúc mô đun:** Giống LITE — Universal cradle (cố định) + swappable weapon modules. Thay súng < 5 phút, hệ thống tự nhận biết loại qua NFC → auto-configure (đạn đạo, giật, ROF, kính ngắm, chấm điểm). **PA-8 FIXED có 2 universal cradle riêng biệt — mỗi trạm 1 cradle.**

### Universal Cradle (× 2 trạm)

| Sub-function | Nguyên lý | Key Spec |
|-------------|-----------|----------|
| SF1 Traverse | Slip clutch + rotary encoder | Kháng lực điều chỉnh, độ phân giải 0,1° |
| SF2 Elevation | Free rotation + encoder | -10° → +87° (đối trọng trong mô đun) |
| SF7 Kháng lực | Phanh từ tính 0-10Nm | Tự điều chỉnh theo trọng lượng súng |
| SF8 Bệ đỡ | Thép hàn, bolt xuống sàn | 3 vị trí chiều cao (155-185cm) |
| SF9 An toàn | Phần mềm + hard stop cơ học | Dual redundancy — không đập vào màn hình |
| SF10 Giao diện | Quick-release plate + 12-pin MIL + NFC reader | < 5 phút swap vũ khí |

### Weapon Modules (swappable — dùng chung với LITE)

| Mô đun | Vũ khí | Cỡ đạn | Mockup | Lực giật | ROF | Phân bổ mặc định |
|--------|--------|--------|--------|----------|-----|------------------|
| WM-01 | DSHK | 12.7mm | ~10kg | 15-20N | 600 v/p | ST1 (Sector 1) |
| WM-02 | NSV | 12.7mm | ~8kg | 15-20N | 700 v/p | ST2 (Sector 2) |
| WM-03 | KPVT | 14.5mm | ~12kg | 25-35N | 550 v/p | Tùy chọn Phase 2 |
| WM-04 | ZU-23-2 | 23mm | ~15kg | 40-60N | 800 v/p | Tùy chọn Phase 2 |
| WM-05 | PKM | 7.62mm | ~7kg | 8-12N | 650 v/p | Tùy chọn |

Mỗi mô đun gồm: Thân CNC nhôm 6061 + solenoid giật 24VDC + cò micro-switch + kính ngắm replica + đối trọng + NFC tag (loại + serial + hiệu chuẩn + số phát).

**Sector Assignment:**
- **ST1:** Sector 1 — phía trước + trái — 270°-030° (120°) — vũ khí mặc định DSHK 12.7mm
- **ST2:** Sector 2 — phía trước + phải — 330°-090° (120°) — vũ khí mặc định NSV 12.7mm
- **Overlapping zone 60°** ở chính diện (330°-030°) → crew coordination bắt buộc khi mục tiêu vào vùng chồng lấp

**IRONMESH synergy:** Cradle và weapon modules dùng chung 100% với LITE (PA-2). Solenoid recoil driver tái sử dụng từ BB-01. Ballistic engine tái sử dụng V-SMASH core.

---

## 4. SS2: Visual Display & Environment Engine (~$5.200-6.700)

Hệ thống hiển thị 3D góc rộng 240° cho môi trường đảo/nhà giàn/cảng. PA-8 FIXED dùng **4 máy chiếu** thay vì 3 (LITE), tạo góc phủ rộng hơn, phù hợp quan sát từ vị trí cố định cao (lô cốt, boong nhà giàn, tháp canh cảng).

| Sub-function | Nguyên lý đã chọn | Key Spec |
|-------------|-------------------|----------|
| SF1 Display | 4× short-throw projector + màn hình cong 6m×2m | 240° FOV, ~7.680×1.080 (4×FHD) |
| SF2 Engine | Unity 6 LTS + HDRP | RTX 4090, 4 viewport render đồng thời |
| SF3 Môi trường | 5 preset cảnh (đảo/giàn/cảng) — xem §4.1 | Không có ocean FFT cho tàu — địa hình cố định |
| SF4 Mục tiêu | Scripted waypoint + swarm logic | 8-12 mục tiêu đồng thời (seaborne + airborne) |
| SF5 Đạn đạo | V-SMASH core reuse (6DOF) | ±5% so với bảng bắn, không bù motion tàu |
| SF6 Audio | FMOD 5.1 surround | Gió đảo, sóng vỗ, alarm — KHÔNG có tiếng máy tàu |
| SF7 AAR | Full session log (10Hz aim path) | 3D replay, CSV + PDF, phân tích phối hợp 2 trạm |
| SF8 Instructor | Dedicated PC + 2 monitors | God-eye view 2 trạm + chiến thuật đồ |

### 4.1 Môi Trường 3D — 5 Preset Cố Định (FIXED-Exclusive)

| ID | Tên | Đặc điểm kỹ thuật |
|----|-----|-------------------|
| ISLAND-01 | Đảo san hô Trường Sa | Địa hình phẳng, mặt nước 360°, cơ sở nhỏ, cột radar |
| ISLAND-02 | Đảo đá | Vách đá dựng, cầu cảng nhỏ, lô cốt bê tông, góc che khuất phức tạp |
| DK1-01 | Nhà giàn DK1 | Platform thép 4 chân, helipad, cầu thang ngoài, tầm nhìn 360° từ 15m |
| PORT-01 | Cảng quân sự | Cầu tàu, kho bãi, tàu neo đậu, hạ tầng có che khuất |
| PORT-02 | Cảng dân sự | Tàu dân sự + quân sự lẫn lộn — **IFF training, có vùng cấm bắn** |

**Đặc điểm render FIXED:** Không cần FFT Gerstner ocean player motion. Thay bằng: surf simulation (sóng vỗ vào đảo/chân giàn), spray particle, seagull ambient. Giảm GPU load ~15% so với LITE → margin render cho viewport thứ 4.

---

## 5. SS3: Motion Platform — KHÔNG CÓ

**Lý do loại bỏ hoàn toàn:**

PA-8 FIXED mô phỏng vị trí chiến đấu cố định trên đất liền (lô cốt đảo, boong nhà giàn DK1, tháp canh cảng). Các vị trí này **không lắc theo sóng biển** — đặc điểm này là lợi thế chiến đấu và phải được tái hiện đúng trong mô phỏng.

| Tiêu chí | LITE (PA-2) | FIXED (PA-8) | Lý do |
|----------|-------------|--------------|-------|
| Nền tảng thực | Tàu trên biển | Đảo / Nhà giàn / Cảng | Cố định — không lắc |
| Mô phỏng motion | 2-DOF roll/pitch | KHÔNG | Training transfer chính xác |
| Chi phí tiết kiệm | — | -$1.580-2.420 | Không cần 2 linear actuator + khung thép |
| Độ phức tạp | Cao (cơ điện) | Thấp | Đơn giản hóa lắp đặt và bảo trì |
| Thách thức mới | Bù chuyển động vào đường đạn | **Phân công sector** + **IFF discipline** | Khác nhau về chiến thuật |

**Thay thế chiến thuật:** Thay vì motion training, PA-8 FIXED tập trung vào **crew coordination** — phân công sector, xử lý overlapping zone, phối hợp phòng thủ đa hướng, và IFF training (cảng dân sự).

---

## 6. SS4: Scenario Engine — FIXED-Exclusive

PA-8 FIXED có bộ kịch bản riêng, phản ánh các tình huống phòng thủ đặc thù tại đảo, nhà giàn, và cảng.

### 6.1 Thư Viện Kịch Bản FIXED

| ID | Tên | Mô tả | Độ khó | Loại đào tạo |
|----|-----|-------|--------|--------------|
| FXD-01 | UAV trinh sát đảo | 1 UAV cỡ nhỏ (DJI Mavic) bay vòng tròn 400m, tốc độ thấp | Cơ bản | Phát hiện + theo dõi |
| FXD-02 | FPV kamikaze nhà giàn | 1 FPV tốc độ cao (150 km/h), lao bổ nhào từ trên, phản ứng < 10 giây | Nâng cao | Phản ứng nhanh |
| FXD-03 | USV tiếp cận cảng 3 hướng | 3 USV từ 3 hướng, tốc độ 40-60 hải lý/giờ | Trung bình | Phân công mục tiêu |
| FXD-04 | Swarm 4 UAV tấn công đảo | 4 UAV phân tán, tiếp cận từ 4 hướng, bầy đàn phối hợp | Nâng cao | Sector coordination |
| FXD-05 | Mixed UAV+USV nhà giàn DK1 | 2 UAV + 2 USV đồng thời — áp đảo phòng thủ | Chuyên gia | Combined arms defense |
| FXD-06 | Phòng thủ ban đêm cảng | 3 USV không đèn, cảng tối — chỉ có radar overlay | Nâng cao | Night/NVG awareness |
| FXD-07 | Mồi nhử + tấn công thật | 1 UAV mồi nhử thu hút ST1, 2 USV tấn công thật từ phía ST2 | Chuyên gia | Tactical deception |

### 6.2 Tính Năng Phân Công Sector

| Tính năng | Mô tả |
|-----------|-------|
| Sector overlay | HUD hiển thị ranh giới sector ST1/ST2 + overlapping zone 60° |
| Chỉ huy phân công | Instructor (đóng vai chỉ huy) có thể override sector bất kỳ lúc |
| Target handoff | Khi mục tiêu di chuyển từ sector này sang sector kia — hệ thống theo dõi handoff |
| IFF zone | PORT-02: vùng cấm bắn có màu đỏ trên HUD — bắn vào phạt điểm nặng |
| Overlapping alert | Khi cả 2 trạm cùng bắn 1 mục tiêu → tín hiệu cảnh báo (tiết kiệm đạn) |

### 6.3 Scoring — Crew Coordination

| Tiêu chí | Trọng số | Mô tả |
|----------|----------|-------|
| Trúng đích (cá nhân) | 30% | Chấm điểm riêng mỗi xạ thủ |
| Phối hợp sector | 25% | Không để mục tiêu lọt qua overlapping zone mà không ai bắn |
| Phân công mục tiêu | 20% | Tránh cả 2 bắn cùng 1 mục tiêu khi có mục tiêu khác chưa bị bắn |
| Thời gian phản ứng | 15% | Kịch bản FXD-02 (FPV kamikaze < 10 giây) |
| Tiết kiệm đạn | 10% | Tổng đạn tiêu thụ / số mục tiêu bị tiêu diệt |

---

## 7. SS5: System Integration (~$1.500-2.000)

| Sub-function | Nguyên lý đã chọn | Key Spec |
|-------------|-------------------|----------|
| SF1 Kiến trúc | 2× Weapon MCU + 1× Render PC + 1× Instructor PC | Tổng latency ≤ 50ms end-to-end |
| SF2 Nguồn điện | 220V/20A → UPS 2kVA → PDU | Tổng ~2,5kW (2 trạm + 4 proj + render PC) |
| SF3 Đóng gói | 5 kiện vận chuyển ≤ 200kg mỗi kiện | Phòng 8×8m, cửa tiêu chuẩn 900×2.100mm |
| SF4 Triển khai | SSD pre-imaged, cập nhật offline | Không cần internet |
| SF5 Tự kiểm tra | Boot self-test ≤ 2 phút | Kiểm tra 2 encoder + 2 NFC + 4 projector + audio |
| SF6 Network | Standalone — switch Gigabit nội bộ | Không kết nối mạng ngoài |

**Lưu ý triển khai FIXED:** Không cần cáp động (flex cable) cho motion platform → giảm độ phức tạp lắp đặt. 4 máy chiếu đòi hỏi căn chỉnh keystone cẩn thận — cần calibration tool tự động.

---

## 8. Tổng Hợp Chi Phí

| Hạng mục | Chi phí R&D | % Tổng |
|----------|-------------|--------|
| SS1 Weapon Station × 2 (2× Universal Cradle + 2× WM-01 DSHK) | $2.660 | 17% |
| SS2 Display (4× projector + màn hình cong 6×2m) | $5.200-6.700 | 36% |
| SS2 Render PC (RTX 4090 + i9 + 64GB) | $3.500 | 23% |
| SS3 Motion Platform | **$0** (loại bỏ) | 0% |
| SS4+SS5 Integration (switch, UPS, PDU, cáp, case) | $1.500-2.000 | 11% |
| Nội dung 3D (5 cảnh FIXED-exclusive, không tái sử dụng từ LITE) | $2.000-3.000 | 16% |
| **TỔNG R&D** | **$14.860-17.860** | 100% |

| Metric | Giá trị |
|--------|---------|
| Giá bán target | $55.000-80.000/bộ |
| Biên lợi nhuận gộp | 73-81% |
| BOM margin (HW only) | 82-85% |
| Timeline phát triển (ước tính) | 10-13 tháng |

**So sánh với LITE (PA-2):**
- R&D thấp hơn $4.535-10.525 (không có motion platform)
- Giá bán cao hơn $5.000-10.000 (2 trạm bắn, 4 projector)
- Margin tốt hơn 5-8 điểm phần trăm

---

## 9. Portfolio Synergy (IRONMESH)

| Tái sử dụng | Từ → Đến | Tác động |
|------------|---------|---------|
| Solenoid recoil driver | BB-01 LOMAH → CUAV-SIM SS1 | -$50 dev, mạch đã kiểm chứng |
| V-SMASH ballistic engine | V-SMASH → CUAV-SIM SS2 | -$5.000 dev, mô hình 12.7mm hoàn chỉnh |
| Weapon station hardware | CUAV-SIM PA-2 → PA-8 FIXED | **100% tái sử dụng** — cradle và weapon modules |
| Scenario engine core | CUAV-SIM PA-2 → PA-8 FIXED | Reuse với FIXED-exclusive scenarios |
| Instructor GUI | CUAV-SIM PA-2 → PA-8 FIXED | Mở rộng thêm 2-station management |
| 3D target behavior | CUAV-SIM → VN-AICAM-MDA-001 | Shared UAV/USV behavior models |
| Training framework | CUAV-SIM → CORTEX RANGE | Multi-site networked expansion |

**PA-8 FIXED là variant chi phí thấp nhất trong product line** (không có motion) — cùng platform hardware với PA-2 LITE, khác biệt chủ yếu ở 3D content và số trạm.

---

## 10. Known Risks

| # | Rủi ro | Mức | Biện pháp |
|---|--------|-----|-----------|
| R1 | Unity 4-viewport render vượt ngưỡng 60fps trên RTX 4090 | THẤP | Benchmark PoC Phase 3 — FIXED không cần FFT ocean nặng |
| R2 | Căn chỉnh 4 máy chiếu (240°) — đòi hỏi calibration phức tạp hơn 3 | TRUNG BÌNH | Custom calibration tool tự động (warping + blending) |
| R3 | 3D content 5 cảnh FIXED không tái sử dụng được từ LITE | TRUNG BÌNH | Xây dựng modular asset library — đảo/giàn/cảng có overlap geometry |
| R4 | Crew coordination scoring — phức tạp hơn single-trainee | THẤP | Extend scoring engine từ LITE — thêm cross-station data |
| R5 | IFF training (PORT-02) — cần validation từ đơn vị quân đội | TRUNG BÌNH | Tư vấn HQNDVN Phase 2-3 để validate scenario |
| R6 | Tuyển dụng lập trình viên Unity VN cho 3D content FIXED | TRUNG BÌNH | Dùng chung developer pool với PA-2 — schedule overlap |

---

## 11. Bố Trí Vật Lý (Top View — Phòng 8×8m)

```
┌─────────────────────────────────────────────────────┐
│                      8.0 m                          │
│  ┌──────────────────────────────────────────────┐   │
│  │    MÀN HÌNH CONG 240° (6m × 2m)              │   │
│  │    PROJ #1  PROJ #2  PROJ #3  PROJ #4         │   │
│  │    ───────────────────────────────────        │   │
│  └──────────────────────────────────────────────┘   │
│                        ↑                            │
│                   2.5m khoảng cách                  │
│                                                     │
│  ┌──────────┐            ┌──────────┐               │ 8.0m
│  │  ST1     │            │   ST2    │               │
│  │  DSHK    │            │   NSV    │               │
│  │ Sector 1 │            │ Sector 2 │               │
│  │ (270°-   │    1.5m    │ (330°-   │               │
│  │  030°)   │◄──────────►│  090°)   │               │
│  └──────────┘            └──────────┘               │
│                                                     │
│   ┌──────────┐         ┌──────────────────┐         │
│   │ RENDER   │         │  INSTRUCTOR      │         │
│   │ PC RACK  │         │  STATION         │         │
│   │ (cạnh    │         │  2× monitor      │         │
│   │  tường)  │         │  (God-eye + AAR) │         │
│   └──────────┘         └──────────────────┘         │
│                                                     │
│   ← CỬA CHÍNH →                                    │
└─────────────────────────────────────────────────────┘

Chú thích:
- ST1 và ST2 cách nhau 1,5m — đủ không gian thao tác độc lập
- Cả 2 trạm hướng về màn hình cong, góc lệch nhau ~30°
- Instructor station ở phía sau, nhìn bao quát cả 2 xạ thủ
- Render PC + UPS + PDU: tủ rack cạnh tường (≤ 0,6m sâu)
- Overlapping zone (60°) hiển thị màu vàng trên HUD xạ thủ
- Không có motion platform → sàn phẳng, không cần pit/rãnh cáp
```

**Yêu cầu phòng:**
- Kích thước tối thiểu: 8m × 8m × 3m (cao)
- Sơn tường tối (để không phản chiếu projector)
- Điều hòa không khí (làm mát render PC + 4 projector ~2,5kW)
- Ổ cắm điện 220V/20A (1 pha tiêu chuẩn VN)
- Không cần pit sàn hay cáp nổi (không có motion platform)
