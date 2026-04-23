---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
variant: FULL (PA-6)
baseline: VN_CUAV_SIM_001_Requirements_List_v2.md (v2.1)
method: Pahl & Beitz — Variant Requirements Derivation
version: v1.0
---

# VN-CUAV-SIM-001 FULL (PA-6) — Variant Requirements v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Kíp Bắn Tàu Chiến — 2-3 Xạ Thủ + Chỉ Huy

**Ngày:** 2026-04-14
**Baseline:** Master Requirements List v2.1 (102 reqs: 74D + 28W)
**Concept:** PA-6 FULL — 6-screen 360° FOV, 2-3 weapon stations, shared deck motion 3×4m, $120-200K
**Đặc thù:** BỆ SÀN CHUNG — tất cả xạ thủ cùng cảm nhận một con sóng. Flagship product.

---

## Tóm Tắt Delta So Với Master

| Loại thay đổi | Số lượng | Ghi chú |
|---------------|:--------:|---------|
| Giữ nguyên (=) | 68 | Không thay đổi so với master |
| Điều chỉnh giá trị (~) | 20 | Room, FOV, motion, stations, power, audio, packaging, cost, etc. |
| Không áp dụng (N/A) | 0 | Mọi category đều áp dụng (FULL bao phủ hết) |
| Thêm mới (+) | 20 | FULL-01→20 — shared deck, crew coordination, threat assignment, etc. |
| **Tổng** | **122** | **95D + 27W** |

---

## IFR & Sacred Constraints

| # | Sacred Constraint | FULL | Ghi chú |
|---|-------------------|:----:|---------|
| SC-1 | 100% mô phỏng — ZERO đạn thật | ✅ | |
| SC-2 | Phản hồi trong ngưỡng nhận thức | ✅ | |
| SC-3 | Đạn đạo khớp thực tế | ✅ | Bù motion — ballistic compensated for deck sway |
| SC-4 | Giá bán ≤ $70K/unit | ❌ | **$120-200K** — khác segment hoàn toàn (Bộ QP, Quân chủng HQ). SC-4 không áp dụng. |
| SC-5 | Vận hành độc lập, on-premise | ✅ | |

**SC-4 OVERRIDE:** FULL nhắm vào **ngân sách quốc phòng cấp Bộ** (≠ đơn vị), segment $120-200K. Thay bằng:
- **SC-4F:** Giá bán ≤ $200,000/hệ thống (3-station config). Cạnh tranh vs import $500K+.

---

## Requirements — ĐIỀU CHỈNH GIÁ TRỊ (~)

| ID | D/W | Master v2.1 | **FULL PA-6** | Lý do |
|----|:---:|-------------|---------------|-------|
| G-01 | D | Phòng 6×8m | **Phòng 10×10m**, trần ≥ 3m | 360° cylindrical screen Ø8m + 2-3 stations + shared deck |
| G-03 | D | FOV ngang ≥ 150° | **FOV ngang 360°** liên tục, FOV dọc ≥ 60° | 6 projectors, cylindrical screen |
| G-04 | D | Weapon station ≤ 2×2m | **Mỗi station ≤ 2×2m**, 2-3 stations trên shared deck 3×4m | Shared deck geometry |
| G-06 | W | Diện tích tổng ≤ 25m² | **Diện tích tổng ≤ 80m²** (10×10m room + instructor area) | Phòng lớn hơn nhiều |
| K-03 | D | Roll ±12°, pitch ±8° — sea state 1-3 | **Roll ±15°, pitch ±10°** — sea state 1-5. **Shared deck 3×4m** (không phải ghế cá nhân). | Tàu chiến lớn → sea state rộng hơn. Shared deck = training transfer cấp kíp. |
| K-04 | D | Chu kỳ sóng 4-8 giây | **Chu kỳ sóng 4-12 giây** (bao gồm sóng dài open ocean) | Tàu chiến hoạt động vùng biển sâu hơn xuồng |
| F-04 | D | Motion platform: chịu tải ≥ 130kg | **Shared deck: chịu tải ≥ 400kg** (3 xạ thủ × 100kg + weapon stations + structure) | Shared deck 3×4m, 4-6 actuators |
| S-08 | **D** | 1 instructor quản lý ≥ 4 stations (W) | **1 instructor quản lý 2-3 trainee stations đồng thời + commander role (D)** | Core FULL requirement — crew training |
| Er-05 | D | Âm thanh stereo ≥ 85dB | **7.1 surround** ≥ 85dB. FMOD spatial audio — UAV approach direction, gió, sóng, lệnh chỉ huy. | Immersion 360° đòi hỏi 7.1 surround |
| P-03 | D | GPU rendering ≥60fps tại 3×FHD | **GPU rendering ≥60fps tại 6×FHD** (6 viewports 360°). RTX 4090 ×1 hoặc RTX 4080 ×2. | 6 projectors = 6 viewports render đồng thời |
| E-02 | D | Tổng tiêu thụ ≤ 5kW | **Tổng tiêu thụ ≤ 5kW** (giữ nguyên limit, nhưng peak ~5kW tight). | 6 projectors + shared deck actuators + render = near limit |
| E-03 | D | UPS ≥ 15 phút | **UPS 3kVA ≥ 15 phút** (nâng công suất UPS) | Tải lớn hơn |
| Tr-01 | D | ≤ 4 kiện, mỗi kiện ≤ 200kg | **≤ 8 kiện** (shared deck disassembles + 6 projectors + 2-3 weapon stations + screen frame) | Hệ thống lớn hơn nhiều |
| A-01 | D | Lắp ráp tại site ≤ 8 giờ / 2 người | **≤ 16 giờ / 3 người** (2 ngày). Shared deck assembly + 360° screen + 6 projector calibration. | Phức tạp gấp ~2× LITE |
| C-01 | D | Giá bán ≤ $70,000/unit | **Giá bán ≤ $200,000/hệ thống** (3-station config). 2-station config ≤ $150,000. | Flagship product, khác segment hoàn toàn |
| C-04 | W | Giá bán ≤ $60,000 | **Giá bán ≤ $150,000** (3-station competitive target) | Cạnh tranh vs import $500K+ |
| C-05 | W | Chi phí bảo trì ≤ 5% giá bán | **Chi phí bảo trì ≤ 5% giá bán** ($6,000-10,000/năm) | Tỷ lệ giữ nguyên, giá trị tuyệt đối cao hơn |
| T-04 | D | Ship motion: roll ±5-15°, pitch ±3-10° | **Ship motion physical: roll ±15°, pitch ±10° trên shared deck.** Visual + physical synced. | Shared deck motion = physical fidelity |
| T-05 | D | Swarm ≥ 4 | **Swarm 12-20 mục tiêu đồng thời** (bắt buộc phối hợp, vượt khả năng 1 người) | 2-3 stations phải xử lý bầy lớn |
| O-07 | D | ≥ 10 pre-built scenarios | **≥ 10 CREW scenarios** (CREW-01→10) sẵn sàng khi giao + ≥ 5 môi trường 3D (TT400, tuần tra, xuồng, cảng, biển mở) | Kịch bản phối hợp kíp, không chỉ cá nhân |

---

## Requirements — BỔ SUNG MỚI (+)

### Shared Deck Motion Platform (FULL-exclusive)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FULL-01 | D | **Shared deck platform 3×4m:** tất cả xạ thủ + weapon stations đứng trên cùng 1 bệ sàn. 4-6 electric linear actuators (ball-screw). | Key differentiator — Concept §5 |
| FULL-02 | D | **Deck load ≥ 400kg** (3×100kg xạ thủ + 3× weapon stations ~20kg + structure). | Structural — Sa |
| FULL-03 | D | **Motion latency ≤ 20ms** (UDP command → physical movement). Tần số 50Hz, smooth (không giật cục). | Training transfer — lag = sim sickness |
| FULL-04 | D | **Sea state mapping:** Unity sea state 0-5 → motion profile (roll/pitch amplitude × frequency). Real-time sync với visual ocean state. | Visual-motion coherence |
| FULL-05 | D | **Emergency stop hardware** cho shared deck: dừng ngay ≤ 1s khi ấn. Button tại mỗi station + instructor + wall-mount. | Safety — 3 người trên deck chuyển động |

### Crew Coordination (FULL-exclusive)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FULL-06 | D | **Sector assignment system:** ST1 Mũi (300°-060°), ST2 Lái trái (150°-270°), ST3 Lái phải (120°-240°). Instructor override bất kỳ lúc. | Concept §8.1 |
| FULL-07 | D | **Sector overlay 360°:** mỗi xạ thủ thấy sector mình (xanh lá), sector đồng đội (vàng). Toggle on/off từ instructor. | Concept §4 |
| FULL-08 | D | **Threat assignment system:** Instructor/commander assign mục tiêu cụ thể cho station qua voice command hoặc GUI tablet. Target highlight theo màu xạ thủ. | Concept §8.1 |
| FULL-09 | D | **Fire discipline detection:** cảnh báo bắn vào sector đồng đội, phạt -50 điểm. Friendly fire (IFF) = -200 điểm. Log toàn bộ vi phạm cho AAR. | Concept §8.3 |
| FULL-10 | D | **Kill confirmation broadcast:** khi tiêu diệt mục tiêu → audio "Mục tiêu [X] bị tiêu diệt — [ST]" + visual flash 0.3s tại vị trí mục tiêu trên tất cả viewports. | Concept §8.4 |
| FULL-11 | D | **Crew composite scoring:** Điểm kíp = Σ(cá nhân) + thưởng phối hợp (+30 handoff, +50 swarm clear, +20 sector defense) − phạt (bắn nhầm, IFF, mục tiêu lọt). | Concept §8.6 |

### Communication (FULL-exclusive)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FULL-12 | D | **Headset + microphone mỗi station.** Instructor nghe tất cả + speak to all/individual. | Commander-crew comm |
| FULL-13 | D | **Voice recording toàn session:** synchronized với action log 10Hz. AAR replay có voice — nghe lại lệnh chỉ huy đồng thời nhìn lại hành động. | Concept §8.5 |
| FULL-14 | W | **Push-to-Talk protocol** (giống radio quân sự thực tế). Training radio discipline. | Advanced training fidelity |

### Multi-Station Infrastructure

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FULL-15 | D | **2-3 weapon stations MWI** (dùng chung cradle + modules với LITE/FIXED). Mỗi station lắp vũ khí khác nhau (ví dụ: ST1 DSHK + ST2 ZU-23-2 + ST3 KPVT). | IRONMESH platform commonality |
| FULL-16 | D | **Instructor station: 1 PC + 3 monitors** (tactical god-eye + 2-3 trainee camera mirrors). | Quan sát 2-3 xạ thủ đồng thời |
| FULL-17 | D | **Cylindrical screen Ø8m × 2m** (vải matt white gain 1.0-1.3, khung thép tự chế). 6 projectors seamless edge blending. | 360° visual immersion |
| FULL-18 | D | **Projector auto-calibration tool:** warping + edge blending cho 6 projectors trên cylindrical screen. | 6 projectors = phức tạp calibration |

### Scalability

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| FULL-19 | D | **Config 2-station và 3-station:** hệ thống phải hoạt động với 2 hoặc 3 stations. Station thứ 3 = optional add-on. | Flexibility — giá 2-stn vs 3-stn |
| FULL-20 | W | **CORTEX upgrade path:** FULL node có thể nâng cấp thành CORTEX node bằng cách thêm CORTEX Node Agent (SW only) + WAN connection. Không thay HW. | Product Line Architecture |

---

## Tóm Tắt Thống Kê FULL PA-6

| Category | Tổng | D | W |
|----------|:----:|:-:|:-:|
| Geometry (G) | 6 | 4 | 2 |
| Kinematics (K) | 6 | 4 | 2 |
| Forces (F) | 5 | 5 | 0 |
| Energy (E) | 5 | 3 | 2 |
| Material (M) | 5 | 3 | 2 |
| Signals (S) | 9 | 8 | 1 | ← S-08 nâng D |
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
| **FULL-specific** | **20** | **18** | **2** |
| **TỔNG** | **122** | **95 (78%)** | **27 (22%)** |

**So sánh Master → FULL:** +20 reqs, +21D. FULL có tỷ lệ Demand cao nhất (78%) — phản ánh độ phức tạp và yêu cầu nghiêm ngặt của hệ thống huấn luyện kíp chiến đấu.

---

## ICDM Evaluation Parameters (adapted for FULL)

| Criterion | Weight | Target (FULL) | Delta vs LITE |
|----------|:------:|:-------------:|:-------------:|
| A1 Target AI Realism | 18.2% | ≥5 UAV + ≥3 USV + **swarm 12-20** | ↑↑ swarm |
| A2 Ballistic Fidelity | 14.2% | ≤5% + **motion-compensated** | ↑ complexity |
| A3 Assessment Depth | 11.1% | ≥95% hit + **crew composite scoring** | ↑↑ crew |
| A4 Scenario Flexibility | 10.7% | ≥10 CREW scenarios, no coding | = |
| A5 Logistics Independence | 8.9% | ≤$50K BOM, 10×10m, ≤$8/h | ~ higher cost |
| A6 Visual Immersion | 8.4% | ≤50ms, **360° FOV**, ≥60fps | ↑↑ FOV |
| A7 Ship Motion Fidelity | 7.9% | **±15° roll, ±10° pitch, shared deck** | ↑↑ fidelity |
| B1 Instructor Observability | 7.1% | God-eye + **3 trainee mirrors** | ↑ |
| B2 Crew Coordination | 4.5% | **2-3 stations, full crew discipline** (CSR ~95%) | ↑↑↑ |
| B3 Haptic Fidelity | 8.0% | ≥25N × 2-3 stations + **shared deck motion** | ↑ immersion |
| B4 Weapon Modularity | 3.0% | ≤5min × 2-3, NFC, **mixed weapon config** | ↑ |
| **DQM (estimated)** | | **~96%** (highest across variants) | |

---

## Traceability

```
Master Requirements v2.1 (102 reqs)
  ↓ Variant derivation: ~20 adjusted, +20 new
FULL PA-6 Requirements v1.0 (122 reqs: 95D + 27W)
  ↓ Function Structure (extended: +shared deck SFs, +crew coordination SFs)
  ↓ Morpho SS1-SS5 (SS3 = shared deck, SS1 ×2-3)
  ↓ ICDM CSR → DQM (highest score expected)
  → Phase 3 Embodiment Design (FULL — most complex)
```

---

*Derived from Master Requirements v2.1. FULL = flagship, shared deck, 360°, crew coordination, highest complexity and DQM.*
