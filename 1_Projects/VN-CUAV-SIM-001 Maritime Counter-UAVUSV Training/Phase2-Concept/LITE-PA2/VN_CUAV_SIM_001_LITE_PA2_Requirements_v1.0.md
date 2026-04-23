---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
variant: LITE (PA-2 STANDARD)
baseline: VN_CUAV_SIM_001_Requirements_List_v2.md (v2.1)
method: Pahl & Beitz — Variant Requirements Derivation
version: v1.0
---

# VN-CUAV-SIM-001 LITE (PA-2) — Variant Requirements v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Xuồng Nhỏ — 1 Xạ Thủ

**Ngày:** 2026-04-14
**Baseline:** Master Requirements List v2.1 (102 reqs: 74D + 28W)
**Concept:** PA-2 STANDARD — 3-screen 180° FOV, 12.7mm mockup, 2-DOF motion, $50-70K
**Physical gate:** 2026-05-07 (SS1 weapon station PoC)

---

## Tóm Tắt Delta So Với Master

| Loại thay đổi | Số lượng | Ghi chú |
|---------------|:--------:|---------|
| Giữ nguyên (=) | 96 | Không thay đổi so với master |
| Điều chỉnh giá trị (~) | 3 | S-08, Er-05, T-05 — scope phù hợp single-station |
| Không áp dụng (N/A) | 0 | LITE là reference concept → mọi req đều áp dụng |
| Thêm mới (+) | 3 | LITE-01→03 — variant-specific |
| **Tổng** | **105** | **76D + 29W** |

**LITE = reference concept** cho VDI 2225 evaluation. Master requirements list v2.1 được viết chủ yếu hướng đến LITE. Do đó, phần lớn requirements giữ nguyên.

---

## IFR & Sacred Constraints — GIỮ NGUYÊN

| # | Sacred Constraint | Áp dụng LITE |
|---|-------------------|:------------:|
| SC-1 | 100% mô phỏng — ZERO đạn thật | ✅ |
| SC-2 | Phản hồi trong ngưỡng nhận thức (tránh negative training transfer) | ✅ |
| SC-3 | Đạn đạo khớp thực tế (lead angle đúng) | ✅ |
| SC-4 | Giá bán ≤ $70K/unit | ✅ **$50-70K** |
| SC-5 | Vận hành độc lập, on-premise | ✅ |

---

## Requirements — Chỉ Liệt Kê THAY ĐỔI & BỔ SUNG

> Tất cả requirements không liệt kê dưới đây → **giữ nguyên master v2.1** (96 reqs).

### Điều Chỉnh Giá Trị (~)

| ID | D/W | Master v2.1 | **LITE PA-2** | Lý do |
|----|:---:|-------------|---------------|-------|
| S-08 | W | Network: 1 instructor quản lý ≥ 4 trainee stations đồng thời | **N/A cho LITE standalone.** Chỉ 1 trainee station. Giữ W cho tương lai CORTEX upgrade. | LITE = single-station. Multi-station = FIXED/FULL/CORTEX. |
| Er-05 | D | Âm thanh: súng nổ + môi trường biển qua loa stereo ≥ 85dB | **5.1 surround** (5+1 speakers) ≥ 85dB. Spatial audio cho UAV approach direction. | Concept Description xác định 5.1 cho LITE. |
| T-05 | D | ≥ 5 UAV attack profiles: thẳng / jinking / kamikaze / pop-up / swarm ≥ 4 | **Swarm ≤ 8 units** (LITE render budget). 5 UAV profiles giữ nguyên. | RTX 4090 single GPU budget cho 3×FHD + 8 targets. |

### Bổ Sung Mới (+)

| ID | D/W | Yêu Cầu | Nguồn |
|----|:---:|---------|-------|
| LITE-01 | D | Weapon station: modular cradle + swappable weapon modules. Thay module < 5 phút. NFC auto-detect → auto-configure (đạn đạo, ROF, giật, sight, scoring). | Concept Description §3 — MWI architecture |
| LITE-02 | D | Phase 1 weapon modules: WM-01 DSHK 12.7mm + WM-02 NSV 12.7mm. Phase 2 optional: WM-03 KPVT 14.5mm + WM-04 ZU-23-2 23mm. | O-04 decomposition per variant |
| LITE-03 | W | Upgrade path: PA-2→PA-3 (thêm heave actuator), PA-2→PA-4 (thêm weapon profiles), PA-2→CORTEX (thêm Node Agent SW). Không thay đổi HW core. | Product Line Architecture v1.2 |

---

## Tóm Tắt Thống Kê LITE PA-2

| Category | Tổng | D | W |
|----------|:----:|:-:|:-:|
| Geometry (G) | 6 | 4 | 2 |
| Kinematics (K) | 6 | 4 | 2 |
| Forces (F) | 5 | 5 | 0 |
| Energy (E) | 5 | 3 | 2 |
| Material (M) | 5 | 3 | 2 |
| Signals (S) | 9 | 7 | 2 |
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
| **LITE-specific** | **3** | **2** | **1** |
| **TỔNG** | **105** | **76 (72%)** | **29 (28%)** |

---

## ICDM Evaluation Parameters (từ ICDM BE)

| Criterion | Weight | Target (LITE) | CSR Shape |
|----------|:------:|:-------------:|:---------:|
| A1 Target AI Realism | 18.2% | ≥5 UAV + ≥3 USV profiles | STEP |
| A2 Ballistic Fidelity | 14.2% | ≤5% error vs TM tables | LINEAR |
| A3 Assessment Depth | 11.1% | ≥95% hit detect, ≥5 scoring criteria | LINEAR |
| A4 Scenario Flexibility | 10.7% | ≥10 scenarios, no coding | LINEAR |
| A5 Logistics Independence | 8.9% | ≤$18K BOM, 6×8m, ≤$5/h | LINEAR |
| A6 Visual Immersion | 8.4% | ≤50ms latency, ≥150° FOV (180°), ≥60fps | CLIFF |
| A7 Ship Motion Fidelity | 7.9% | Roll ±12°, pitch ±8°, JONSWAP | LINEAR |
| B1 Instructor Observability | 7.1% | Aim trace 10Hz, inject ≤1s, pause | LINEAR |
| B2 Crew Coordination | 4.5% | **1 station → CSR 22%** | STEP |
| B3 Haptic Fidelity | 8.0% | **≥25N recoil** (CEO override) | LINEAR |
| B4 Weapon Modularity | 3.0% | ≤5min swap, NFC auto-ID | LINEAR |
| **DQM (estimated)** | | **~91.5%** (excl B3 TBD) | |

---

## Traceability

```
Master Requirements v2.1 (102 reqs)
  ↓ Variant derivation (delta)
LITE PA-2 Requirements v1.0 (105 reqs = 102 - 0 N/A + 3 new)
  ↓ Function Structure 6-Flow (41 sub-functions)
  ↓ Morpho SS1-SS5 (31 solution fields)
  ↓ ICDM CSR → DQM scoring
  → Phase 3 Embodiment Design
```

---

*Derived from Master Requirements v2.1. LITE = reference concept — minimal delta.*
