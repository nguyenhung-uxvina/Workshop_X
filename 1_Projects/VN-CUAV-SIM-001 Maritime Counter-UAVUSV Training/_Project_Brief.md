---
created: 2026-04-06
updated: 2026-04-06
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
selected_concept: PA-2 STANDARD (confirmed 2026-04-06)
---

# VN-CUAV-SIM-001 — Maritime Counter-UAV/USV Shooting Training Simulation System

## Tóm Tắt

Hệ thống mô phỏng huấn luyện bắn UAV và USV trên biển cho hải quân. Giải quyết nhu cầu cấp thiết: thủy thủ chưa từng đối đầu UAV/USV thực tế trong khi chi phí bắn thực cao gấp 50-100x so với mô phỏng.

## Bối Cảnh

Mối đe dọa UAV/USV trên biển đang tăng mạnh (Ukraine-Russia, Red Sea, Houthi). Kỹ năng cần huấn luyện:
- Detection & identification (mục tiêu nhỏ, tốc độ cao)
- Lead angle tính toán (3D + ship motion)
- Engagement window ngắn (USV 40-80 knots → < 10 giây phản ứng)
- Friend/foe discrimination

## Scope

| Hạng mục | Chi tiết |
|----------|----------|
| **Vũ khí mô phỏng** | 12.7mm, 14.5mm, 23mm HMG/cannon |
| **Mục tiêu** | UAV Group 1-3, explosive USV, swarm scenarios |
| **Môi trường** | Maritime (ship-based, coastal defense) |
| **Platform** | Standalone trainer + tích hợp CORTEX RANGE |

## Synergy với Portfolio Workshop X

- **VN-NAVAL-GUNNERY-TRAINER** — tái sử dụng weapon station hardware
- **BB-01 LOMAH** — acoustic hit detection technology
- **VN-AICAM-MDA-001** — AI camera cho live-sim hybrid
- **VANGUARD AIR "PHANTOM"** — actual target drone (live-fire component)
- **VANGUARD SEA "TRITON"** — actual target USV (live-fire component)

## Concept Đã Chọn: PA-2 STANDARD

| Hạng mục | Thông số |
|----------|----------|
| **Display** | 3-screen projection, 180° FOV |
| **Ship motion** | Visual + seat motion |
| **Weapon** | 12.7mm authentic mockup + recoil sim |
| **Mode** | Pure virtual (Phase 1) + AR-ready |
| **Giá target** | ≤$70K/unit [L4-ESTIMATE] |
| **Dev timeline** | 12-15 tháng [L5-ASSUMPTION] |
| **Product Proposal** | `Phase0-Plan/VN_CUAV_SIM_001_Product_Proposal_v1.0.md` |

## Documents

- `VN_CUAV_SIM_001_Reverse_Engineering.md` — DMIR × Pahl & Beitz Phase 1 Task Clarification
- `VN_CUAV_SIM_001_Competitor_Reverse_Engineering.md` — Competitor analysis (Zen Technologies, v.v.)
- `VN_CUAV_SIM_001_Concept_Evaluation_VDI2225.md` — VDI 2225 evaluation, PA-2 confirmed
- `VN_CUAV_SIM_001_Requirements_List_v1.md` — Pahl & Beitz 17 categories, 101 requirements (71D + 30W)

## Risk Assessment + Fallbacks (QC FLAG 07 fix, 2026-04-09)

| Risk | Severity | Fallback |
|------|----------|----------|
| Maritime visual scene TRL 3 (ocean rendering) | HIGH | (a) Use Unity Asset Store ocean package + custom shader. (b) If inadequate: reduce to 2D horizon + sprite-based waves (lower fidelity, functional). (c) Worst case: partner with VN game studio for scene dev. |
| UAV evasion AI TRL 3 | MED | (a) Pre-scripted flight paths (deterministic, not AI). (b) Behavior tree with 5 preset evasion patterns. (c) AI coaching deferred to Phase 2 upgrade. |
| NFC modular weapon interface TRL 3 | MED | (a) Manual weapon selection via software menu (no NFC). (b) DIP switch on weapon module (hardwired ID). (c) NFC deferred to v2.0. |
| Unity 8h stability (memory leaks) | MED | Scheduled restart mỗi 4h (CEO decision D4). Auto-save state before restart, resume ≤2 min. |
| GPU availability VN (RTX 4080/4090 supply) | LOW | (a) RTX 4070 Ti as fallback (lower LOD settings). (b) Pre-order 2 units at project start. (c) AMD RX 7900 XT as alternative. |
| Local content ≥70% vs SS2 import-heavy | MED | BOM-level DfLC analysis in Phase 3. If <70%: (a) move assembly labor to VN (increases local value), (b) source VN projector alternatives, (c) negotiate target to 60% with justification. |

## Working Principle Options (QC FLAG 12 fix, 2026-04-09)

| Subsystem | Option | Advantage | Risk |
|-----------|--------|-----------|------|
| Display | Projection (3×FHD) — SELECTED | Proven tech, large FOV, low per-px cost ($0.006/px) | Dark room required, bulb replacement, alignment drift |
| Display | LED video wall | Bright (no dark room), seamless, no alignment | 3× cost ($18/px vs $0.006/px), pixel pitch ≥2.5mm limits close viewing |
| Display | VR headset (Quest 3) | Lowest cost, 360° FOV, portable | Motion sickness (30% users), isolated (no instructor observation), cable/battery |
| Motion | 2-DOF electric — SELECTED | Simple, reliable, 130kg payload proven, $1.5-2.5K | Roll+pitch only (no heave/sway/surge/yaw) |
| Motion | 3-DOF electric | +Heave, better sea state fidelity | 2× cost, 2× complexity, longer dev time |
| Motion | Visual-only (no platform) | Cheapest, simplest, no maintenance | Poor training transfer for ship-based gunnery (no vestibular cue) |
| Recoil | Solenoid — SELECTED | Simple, reliable, ≥8N proven (VN-12.7MM-SIM), $50/unit | Max ~25N (insufficient for full 12.7mm recoil feel of ~150N) |
| Recoil | Pneumatic | Higher force (50-100N), adjustable | Compressor noise, air supply needed, maintenance |
| Recoil | Motor-driven cam | Precise rhythm control, adjustable force profile | Complex mechanism, higher cost, wear parts |
| Scoring | Ray-trace ballistic — SELECTED | Exact geometric calculation, ≤1 mrad precision, zero HW cost | Requires accurate ballistic model (T-03 dependency), no real projectile |
| Scoring | Camera-based (LOMAH-style) | Real projectile detection, validates aim AND weapon | Requires live ammo → defeats purpose of simulator |
| Engine | Unity — CEO SELECTED | Large ecosystem, VN dev talent available, proven for mil-sim | License cost, potential telemetry (mitigated: offline runtime), memory management |

## Trạng Thái

| Phase | Status | Ghi chú |
|-------|--------|---------|
| Phase 1: Task Clarification | **Done** | RE + VDI 2225 + Requirements v2.0 (102 reqs) — Gate 1 APPROVE 3.70/4.0 |
| Phase 2: Conceptual Design | **In Progress** | Morpho SS1-SS5 done, Product Line v1.2, 4 TNKCT |
| Phase 3: Embodiment Design | Not started | |

**Deadline:** TBD (chờ physical gate date)
**Current:** Phase 2 Conceptual Design — Morpho SS1-SS5 done, Product Line v1.2, 4 TNKCT, 4 RESEARCH files
**Next action:** Define physical gate (weapon station mockup PoC) → Gate 2
