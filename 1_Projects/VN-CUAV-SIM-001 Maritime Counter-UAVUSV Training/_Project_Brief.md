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
| **Giá target** | $50-70K/unit |
| **Dev timeline** | 12-15 tháng |

## Documents

- `VN_CUAV_SIM_001_Reverse_Engineering.md` — DMIR × Pahl & Beitz Phase 1 Task Clarification
- `VN_CUAV_SIM_001_Competitor_Reverse_Engineering.md` — Competitor analysis (Zen Technologies, v.v.)
- `VN_CUAV_SIM_001_Concept_Evaluation_VDI2225.md` — VDI 2225 evaluation, PA-2 confirmed
- `VN_CUAV_SIM_001_Requirements_List_v1.md` — Pahl & Beitz 17 categories, 101 requirements (71D + 30W)

## Trạng Thái

| Phase | Status | Ghi chú |
|-------|--------|---------|
| Phase 1: Task Clarification | **Done** | RE + VDI 2225 + Requirements List v1.0 — 2026-04-06 |
| Phase 2: Conceptual Design | **In Progress** | Next: Morphological Matrix (SS1–SS5) |
| Phase 3: Embodiment Design | Not started | |

**Deadline:** TBD (on-hold — chờ activation)
**Next action:** Xây dựng Requirements List đầy đủ → Phase 2 Conceptual Design
