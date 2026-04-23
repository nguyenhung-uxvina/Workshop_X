---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
variant: FIXED (PA-8)
baseline: VN_CUAV_SIM_001_Requirements_List_v2.md (v2.1)
method: Pahl & Beitz — Variant Requirements Derivation
version: v1.0
---

# VN-CUAV-SIM-001 FIXED (PA-8) — Variant Requirements v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Phòng Thủ Đảo/Nhà Giàn/Cảng — 2 Xạ Thủ

**Ngày:** 2026-04-14
**Baseline:** Master Requirements List v2.1 (102 reqs: 74D + 28W)
**Concept:** PA-8 FIXED — 4-screen 240° FOV, 2 weapon stations, NO motion, $55-80K
**Đặc thù:** Vị trí cố định trên đảo/nhà giàn DK1/cảng — KHÔNG có chuyển động sóng

---

## Tóm Tắt Delta So Với Master

| Loại thay đổi | Số lượng | Ghi chú |
|---------------|:--------:|---------|
| Giữ nguyên (=) | 77 | Không thay đổi so với master |
| Điều chỉnh giá trị (~) | 15 | FOV, room, power, motion, stations, packaging, etc. |
| Không áp dụng (N/A) | 5 | K-03, K-04, K-05, K-06, F-04 — motion platform |
| Thêm mới (+) | 12 | FXD-01→12 — crew coordination, IFF, sector, environment |
| **Tổng** | **109** | **82D + 27W** |

---

## IFR & Sacred Constraints

| # | Sacred Constraint | FIXED | Ghi chú |
|---|-------------------|:-----:|---------|
| SC-1 | 100% mô phỏng — ZERO đạn thật | ✅ | |
| SC-2 | Phản hồi trong ngưỡng nhận thức | ✅ | |
| SC-3 | Đạn đạo khớp thực tế | ✅ | Không bù motion (vị trí cố định) |
| SC-4 | Giá bán ≤ $70K/unit | ⚠️ | **$55-80K** — upper range vượt SC-4. CEO: accept $80K cho 2-station system. |
| SC-5 | Vận hành độc lập, on-premise | ✅ | |

**CEO DECISION (2026-04-14):** SC-4 nâng lên $80K cho FIXED 2-station system. ✅ Approved.

---

## Requirements — KHÔNG ÁP DỤNG (N/A)

> Các requirements sau **không áp dụng** cho FIXED vì không có motion platform (vị trí cố định).

| ID | Master Requirement | Lý do N/A |
|----|-------------------|-----------|
| K-03 | Seat motion: roll ±12°, pitch ±8° — sea state 1-3 | **Vị trí cố định** — đảo/nhà giàn/cảng không lắc theo sóng |
| K-04 | Seat motion: chu kỳ sóng 4-8 giây | Không có motion |
| K-05 | Weapon slew acceleration: match real gun (W) | Giữ cho weapon — nhưng **không có seat acceleration** |
| K-06 | Seat motion: heave ±5cm (W) | Không có motion |
| F-04 | Seat motion platform: chịu tải ≥ 130kg | Không có motion platform |

**Lưu ý:** K-01, K-02 (weapon traverse/elevation) **GIỮ NGUYÊN** — vũ khí vẫn xoay như LITE.

---

## Requirements — ĐIỀU CHỈNH GIÁ TRỊ (~)

| ID | D/W | Master v2.1 | **FIXED PA-8** | Lý do |
|----|:---:|-------------|----------------|-------|
| G-01 | D | Phòng 6×8m, trần ≥ 3m | **Phòng 8×8m**, trần ≥ 3m | 2 stations + 4 projectors + 240° screen cần không gian lớn hơn |
| G-03 | D | FOV ngang ≥ 150°, FOV dọc ≥ 50° | **FOV ngang ≥ 240°**, FOV dọc ≥ 50° | 4 projectors, 2 sectors phòng thủ |
| G-04 | D | Diện tích weapon station ≤ 2×2m | **Mỗi station ≤ 2×2m, cách nhau ≥ 1.5m** | 2 weapon stations cần clearance |
| S-08 | **D** | Network: 1 instructor quản lý ≥ 4 stations (W) | **1 instructor quản lý 2 trainee stations đồng thời (D)** | Core requirement cho FIXED — 2 xạ thủ phối hợp |
| Er-05 | D | Âm thanh: loa stereo ≥ 85dB | **5.1 surround ≥ 85dB** + outdoor ambience (gió đảo, sóng vỗ) — **KHÔNG có tiếng máy tàu** | Môi trường đảo/nhà giàn khác tàu |
| P-03 | D | GPU rendering ≥60fps tại 3×FHD | **GPU rendering ≥60fps tại 4×FHD** (4 viewports × 1920×1080) | 4 projectors cho 240° |
| E-02 | D | Tổng tiêu thụ ≤ 5kW | **Tổng tiêu thụ ≤ 3kW** (không có motion actuators) | Tiết kiệm do không có motion platform. Nhưng +1 projector. Ước tính ~2.5kW. |
| E-04 | W | Tổng tiêu thụ ≤ 3.5kW | **Tổng tiêu thụ ≤ 2.5kW** | Target thấp hơn do không có motion |
| Tr-01 | D | ≤ 4 kiện, mỗi kiện ≤ 200kg | **≤ 5 kiện** (thêm 1 kiện cho weapon station thứ 2), mỗi kiện ≤ 200kg | 2 cradles + 2 weapon modules |
| A-01 | D | Lắp ráp tại site ≤ 8 giờ / 2 người | **≤ 10 giờ / 2 người** (thêm căn chỉnh 4 projectors + 2 stations) | 4 projectors đòi hỏi calibration kỹ hơn |
| C-01 | D | Giá bán ≤ $70,000/unit | **Giá bán ≤ $80,000/bộ** (2 stations + 4 projectors + 240° screen) | CEO: accept premium cho 2-station crew system |
| C-04 | W | Giá bán ≤ $60,000/unit | **Giá bán ≤ $70,000/bộ** | Competitive target cho FIXED |
| T-04 | D | Ship motion: roll ±5-15°, pitch ±3-10° (sea state 1-4) | **Không mô phỏng ship motion trên platform.** Biển nhìn thấy trên màn hình vẫn có sóng (visual only). | Vị trí cố định — đúng training transfer |
| T-05 | D | ≥ 5 UAV attack profiles, swarm ≥ 4 | **≥ 5 UAV + swarm ≥ 8** (2 stations phải xử lý nhiều mục tiêu hơn) | 2 xạ thủ → swarm lớn hơn để thử thách phối hợp |
| Sa-05 | D | Motion platform: hard stop tại biên độ max | **N/A** (không có motion). Thay bằng: **weapon station hard stop** ngăn quay vào vùng cấm/màn hình. | |

---

## Requirements — BỔ SUNG MỚI (+)

### Crew Coordination (FIXED-specific)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FXD-01 | D | **2 weapon stations** (ST1 + ST2) hoạt động đồng thời, mỗi station độc lập về vũ khí/encoder/recoil. | Concept Description §3 |
| FXD-02 | D | **Sector assignment:** ST1 Sector 1 (120°), ST2 Sector 2 (120°), overlapping zone 60° chính diện. Instructor có thể override sector. | Concept Description §6.2 |
| FXD-03 | D | **Sector overlay HUD:** hiển thị ranh giới sector trên visual — sector mình (xanh lá), sector đồng đội (vàng), overlap zone (cam). Instructor toggle on/off. | Training — sector discipline |
| FXD-04 | D | **Target handoff tracking:** khi mục tiêu di chuyển từ sector này sang sector kia → hệ thống theo dõi và ghi nhận handoff event cho AAR. | Crew coordination training |
| FXD-05 | D | **Overlapping fire alert:** khi cả 2 stations cùng bắn 1 mục tiêu → cảnh báo audio/visual (tiết kiệm đạn). | Fire discipline |

### IFF & Fire Discipline (FIXED-specific)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FXD-06 | D | **IFF zone** (PORT-02 scenario): vùng cấm bắn hiển thị màu đỏ trên HUD. Bắn vào vùng cấm → phạt điểm nặng (-200). | Cảng dân sự — dân sự lẫn quân sự |
| FXD-07 | D | **Crew scoring:** 30% trúng đích cá nhân + 25% phối hợp sector + 20% phân công mục tiêu + 15% thời gian phản ứng + 10% tiết kiệm đạn. | Concept Description §6.3 |

### Environment (FIXED-specific)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FXD-08 | D | **≥ 5 preset environments** FIXED-exclusive: ISLAND-01 (đảo san hô Trường Sa), ISLAND-02 (đảo đá), DK1-01 (nhà giàn DK1), PORT-01 (cảng quân sự), PORT-02 (cảng dân sự + IFF). | Concept Description §4.1 |
| FXD-09 | D | **≥ 7 pre-built scenarios** FIXED-exclusive: FXD-01→FXD-07 (trinh sát → kamikaze → USV 3 hướng → swarm 4 → mixed → đêm → mồi nhử). | Concept Description §6.1 |

### MWI & Platform (FIXED-specific)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FXD-10 | D | **Weapon modules 100% tương thích LITE (PA-2).** Cradle và modules dùng chung — IRONMESH platform. | Product Line Architecture |
| FXD-11 | D | **Projector auto-calibration tool:** warping + edge blending cho 4 projectors trên 240° curved screen. Manual calibration ≤ 30 phút lần đầu. | 4 projectors complexity — R2 risk mitigation |
| FXD-12 | W | **Ruggedized option** cho triển khai ngoài đảo (chưa có — tương lai). Indoor standard cho Phase 1. | Future — trường hợp đặt trực tiếp trên đảo |

---

## Tóm Tắt Thống Kê FIXED PA-8

| Category | Tổng | D | W |
|----------|:----:|:-:|:-:|
| Geometry (G) | 6 | 4 | 2 |
| Kinematics (K) | 2 | 2 | 0 | ← K-03→K-06 N/A, chỉ K-01+K-02 |
| Forces (F) | 4 | 4 | 0 | ← F-04 N/A |
| Energy (E) | 5 | 3 | 2 |
| Material (M) | 5 | 3 | 2 |
| Signals (S) | 9 | 7 | 2 |← S-08 nâng lên D |
| Safety (Sa) | 6 | 5 | 1 |
| Ergonomics (Er) | 7 | 5 | 2 |
| Production (P) | 5 | 4 | 1 |
| Quality (Q) | 5 | 4 | 1 |
| Assembly (A) | 4 | 3 | 1 |
| Transport (Tr) | 4 | 2 | 2 |
| Operation (O) | 10 | 8 | 2 |
| Maintenance (Ma) | 6 | 4 | 2 |
| Lifecycle (L) | 4 | 3 | 1 |
| Costs (C) | 5 | 3 | 2 |
| Training (T) | 10 | 7 | 3 |
| **FXD-specific** | **12** | **10** | **2** |
| **TỔNG** | **109** | **82 (75%)** | **27 (25%)** |

**So sánh Master → FIXED:** +7 reqs, +8D (nhiều Demand hơn do crew coordination bắt buộc), -1W.

---

## ICDM Evaluation Parameters (từ ICDM BE, adapted for FIXED)

| Criterion | Weight | Target (FIXED) | Delta vs LITE |
|----------|:------:|:---------------:|:-------------:|
| A1 Target AI Realism | 18.2% | ≥5 UAV + ≥3 USV + swarm ≥8 | ↑ swarm |
| A2 Ballistic Fidelity | 14.2% | ≤5% error — không bù motion | = (simpler) |
| A3 Assessment Depth | 11.1% | ≥95% hit detect + crew scoring 5 criteria | ↑ crew |
| A4 Scenario Flexibility | 10.7% | ≥7 FIXED scenarios + custom, no coding | = |
| A5 Logistics Independence | 8.9% | ≤$20K BOM, 8×8m, ≤$5/h | ~ room larger |
| A6 Visual Immersion | 8.4% | ≤50ms, **≥240°** FOV, ≥60fps | ↑ FOV |
| A7 Ship Motion Fidelity | 7.9% | **N/A — vị trí cố định** (CSR 0%) | ↓ N/A |
| B1 Instructor Observability | 7.1% | God-eye 2 stations + tactical map | ↑ |
| B2 Crew Coordination | 4.5% | **2 stations, sector handoff** (CSR ~80%) | ↑↑ |
| B3 Haptic Fidelity | 8.0% | **≥25N recoil** × 2 stations | = per station |
| B4 Weapon Modularity | 3.0% | ≤5min swap × 2, NFC, 100% LITE-compatible | = |

**FIXED DQM note:** A7 Ship Motion = 0% CSR (N/A) → DQM bị phạt ~7.9%. Nhưng FIXED phục vụ segment khác (phòng thủ cố định) — so sánh trực tiếp DQM với LITE không công bằng. Cần **segment-adjusted DQM** hoặc tách A7 khi đánh giá FIXED.

---

## Traceability

```
Master Requirements v2.1 (102 reqs)
  ↓ Variant derivation: -5 N/A, ~15 adjusted, +12 new
FIXED PA-8 Requirements v1.0 (109 reqs: 82D + 27W)
  ↓ Function Structure (adapted: remove SF motion, add SF crew)
  ↓ Morpho SS1-SS5 (SS3 motion = N/A)
  ↓ ICDM CSR → segment-adjusted DQM
  → Phase 3 Embodiment Design (FIXED)
```

---

*Derived from Master Requirements v2.1. FIXED = no motion, 2 stations, crew coordination, island/platform/port environments.*
