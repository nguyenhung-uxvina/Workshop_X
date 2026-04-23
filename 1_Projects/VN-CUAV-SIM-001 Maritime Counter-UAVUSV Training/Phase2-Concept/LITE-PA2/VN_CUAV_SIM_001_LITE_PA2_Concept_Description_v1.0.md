---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Concept Description (Doc 010)
concept: PA-2 LITE STANDARD
variant: LITE
version: v1.0
---

# VN-CUAV-SIM-001 LITE — Concept Description v1.0
## Hệ Thống Mô Phỏng Huấn Luyện Bắn C-UAV/USV — Xuồng Nhỏ — PA-2 LITE STANDARD

**Ngày:** 2026-04-07
**Phase:** 2 — Conceptual Design
**Concept:** PA-2 STANDARD (confirmed VDI 2225 evaluation 2026-04-06)
**Requirements baseline:** v1.0 (101 requirements: 71D + 30W)

---

## 1. Tổng Quan Concept

Hệ thống mô phỏng huấn luyện bắn phòng không trên biển chống UAV và USV, phiên bản **LITE** dành cho **xuồng nhỏ** (1 xạ thủ). Sử dụng súng máy 12.7mm DSHK/NSV mô phỏng. Xạ thủ đứng/ngồi tại bệ vũ khí thực tế, bắn vào mục tiêu 3D render trên 3 màn hình projection 180°, với seat motion mô phỏng sóng xuồng.

> **Product Line:** LITE (xuồng) → FIXED (đảo/giàn/cảng) → FULL (tàu chiến) → CORTEX (liên quân). Xem các tài liệu variant riêng.

### Đặc Điểm Chính PA-2 STANDARD

| Hạng mục | Thông số |
|----------|----------|
| Display | 3× projector short-throw, 180° FOV, 5760×1080 |
| Vũ khí | 12.7mm mockup CNC nhôm, giật solenoid, cò micro-switch |
| Motion | 2-DOF electric (roll ±12°, pitch ±8°), sea state 1-4 |
| Mục tiêu | 5 UAV profiles + 3 USV profiles + swarm 4-8 |
| Instructor | Dedicated PC + 2 monitors, GUI tiếng Việt |
| Giá target | $50,000-70,000/unit |
| R&D cost | ~$18,600-27,600 |

---

## 2. Kiến Trúc Hệ Thống

```
┌─────────────────────────────────────────────────────────────┐
│                    VN-CUAV-SIM-001 PA-2                     │
│                                                             │
│  ┌──────────────┐   ┌──────────────┐   ┌────────────────┐  │
│  │ SS1: WEAPON   │   │ SS2: VISUAL  │   │ SS3: MOTION    │  │
│  │ STATION       │   │ DISPLAY &    │   │ PLATFORM       │  │
│  │               │   │ ENGINE       │   │                │  │
│  │ • Traverse    │   │ • 3× proj    │   │ • 2-DOF elec   │  │
│  │ • Elevation   │   │ • Unity 6    │   │ • Roll ±12°    │  │
│  │ • Recoil      │   │ • Ballistics │   │ • Pitch ±8°    │  │
│  │ • Trigger     │   │ • Ocean env  │   │ • Bucket seat  │  │
│  │ • Mockup CNC  │   │ • 5.1 audio  │   │ • ESP32 ctrl   │  │
│  │ • Sight       │   │ • AAR        │   │                │  │
│  └──────┬───────┘   └──────┬───────┘   └──────┬─────────┘  │
│         │                  │                   │            │
│         │    USB Serial    │   HDMI×3 + UDP    │  UDP 50Hz  │
│         └──────────┬───────┴───────────────────┘            │
│                    │                                        │
│              ┌─────┴─────┐        ┌──────────────┐          │
│              │ RENDER PC │◄──LAN──│ INSTRUCTOR   │          │
│              │ RTX 4090  │        │ STATION      │          │
│              │ Unity 6   │        │ 2× monitor   │          │
│              └─────┬─────┘        └──────────────┘          │
│                    │                                        │
│              ┌─────┴─────┐                                  │
│              │ SS4: SCEN │   SS5: UPS + PDU + RACK          │
│              │ ENGINE    │   Network + Cases                │
│              └───────────┘                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. SS1: Weapon Station Simulator — MODULAR (~$1,515 base + modules)

**Kiến trúc mô đun:** Universal cradle (cố định) + swappable weapon modules. Thay súng < 5 phút, hệ thống tự nhận biết loại qua NFC → auto-configure toàn bộ (đạn đạo, giật, ROF, kính ngắm, chấm điểm).

### Universal Cradle (cố định)

| Sub-function | Working Principle | Key Spec |
|-------------|-------------------|----------|
| SF1 Traverse | Slip clutch + rotary encoder | Kháng lực điều chỉnh, 0.1° |
| SF2 Elevation | Free rotation + encoder | -10° → +87° (counterweight in module) |
| SF7 Resistance | Magnetic powder brake 0-10Nm | Auto-adjust theo trọng lượng súng |
| SF8 Mount | Thép hàn, bolt-to-floor | 3 vị trí chiều cao (155-185cm) |
| SF9 Safety | Software + mechanical hard stop | Dual redundancy |
| SF10 Interface | Quick-release plate + 12-pin MIL + NFC reader | < 5 phút swap |

### Weapon Modules (swappable)

| Module | Vũ khí | Cỡ đạn | Mockup | Giật | ROF | Phase |
|--------|--------|--------|--------|------|-----|-------|
| WM-01 | DSHK | 12.7mm | 10kg | 15-20N | 600 rpm | 1 |
| WM-02 | NSV | 12.7mm | 8kg | 15-20N | 700 rpm | 1 |
| WM-03 | KPVT | 14.5mm | 12kg | 25-35N | 550 rpm | 2 |
| WM-04 | ZU-23-2 | 23mm | 15kg | 40-60N | 800 rpm | 2 |
| WM-05 | PKM | 7.62mm | 7kg | 8-12N | 650 rpm | Opt |

Mỗi module gồm: CNC body + solenoid + trigger + sight + counterweight + NFC tag.

**IRONMESH synergy:** Solenoid recoil driver reuse BB-01. Ballistic engine reuse V-SMASH core. Multi-weapon = multi-product revenue stream.

---

## 4. SS2: Visual Display & Environment Engine (~$8,500-12,100)

Hệ thống hiển thị 3D real-time với biển, trời, thời tiết, mục tiêu UAV/USV.

| Sub-function | Working Principle Selected | Key Spec |
|-------------|--------------------------|----------|
| SF1 Display | 3× short-throw projector + curved screen 4m×2m | 180° FOV, 5760×1080, Epson/BenQ |
| SF2 Engine | Unity 6 LTS + HDRP | RTX 4090, multi-display output |
| SF3 Ocean | Procedural FFT Gerstner (Crest/KWS) | Sea state 0-5, day/night/dusk |
| SF4 Targets | Scripted waypoint + perturbation | 5 UAV + 3 USV + swarm 4-8 |
| SF5 Ballistic | V-SMASH core reuse (6DOF 12.7mm B-32) | ±5% TM tables, ship motion compensated |
| SF6 Audio | FMOD 5.1 surround, 5+1 speakers | Spatial UAV approach, ≥ 85dB |
| SF7 AAR | Full session log (10Hz aim path) | 3D replay, CSV export, PDF report |
| SF8 Instructor | Dedicated PC + 2 monitors | GUI tiếng Việt, inject target ≤ 1s |

**SS2 chiếm ~55% tổng chi phí** — display hardware + render compute là dominant cost.

---

## 5. SS3: Motion Platform (~$1,580-2,420)

Mô phỏng chuyển động tàu khi bắn trên biển.

| Sub-function | Working Principle Selected | Key Spec |
|-------------|--------------------------|----------|
| SF1+2 Actuators | 2-DOF electric linear (ball-screw) | Roll ±12°, Pitch ±8°, period 4-8s |
| SF3 Seat | Racing bucket + 4-point harness | ≥ 150kg load, 3-position rail |
| SF4 Controller | ESP32 + BTS7960 motor driver | Unity UDP 50Hz → PID control |
| SF5 Structure | Thép hàn 60×40mm + universal joint | Bolt-to-floor, ~40kg platform |

**Upgrade path PA-3:** Thêm actuator thứ 3 cho heave ±5cm (K-06 wish).

---

## 6. SS4: Scenario Engine (software)

| Sub-function | Working Principle Selected | Key Spec |
|-------------|--------------------------|----------|
| SF1 Authoring | GUI drag-drop (no coding) | ≤ 15 phút tạo scenario |
| SF2 Scoring | Multi-criteria weighted | Accuracy, reaction, ammo, priority |
| SF3 Library | SQLite local, 10+ pre-built | UAV-01→05, USV-01→03, MIX-01→02 |
| SF4 Progression | Trainee profile + 5-skill tracking | Auto-recommend next scenario |

---

## 7. SS5: System Integration (~$1,200-1,700)

| Sub-function | Working Principle Selected | Key Spec |
|-------------|--------------------------|----------|
| SF1 Architecture | Modular: Render PC + Instructor PC + 2× MCU | Total latency ≤ 50ms |
| SF2 Power | 220V/20A → UPS 2kVA → PDU | Total ~2.0kW |
| SF3 Packaging | 4 transport cases ≤ 200kg each | Room 6×8m minimum |
| SF4 Deployment | Pre-imaged SSD, offline update | No internet required |
| SF5 Diagnostics | Boot self-test ≤ 2 min | Error dashboard on instructor |

---

## 8. Tổng Hợp Chi Phí

| Subsystem | Hardware Cost | % Total |
|-----------|-------------|---------|
| SS1 Weapon Station (cradle + WM-01 DSHK) | $1,515 | 6% |
| SS1 thêm WM-02 NSV (Phase 1) | +$650 | |
| SS2 Visual & Engine | $8,450-12,100 | 52% |
| SS3 Motion Platform | $1,580-2,420 | 10% |
| SS4+SS5 Integration | $1,200-1,700 | 7% |
| **HW Subtotal (2 weapon modules)** | **$13,395-18,385** | **75%** |
| SW Development (6 person-months) | $6,000-10,000 | 25% |
| **TOTAL R&D** | **$19,395-28,385** | 100% |
| WM-03 KPVT + WM-04 ZU-23-2 (Phase 2 add-on) | +$1,700 | sold separately |
| **Full system 4 modules** | **$21,095-30,085** | |

| Metric | Value |
|--------|-------|
| Target sell price | $50,000-70,000 |
| Gross margin | 55-73% |
| BOM margin (HW only) | 75-82% |
| Dev timeline (estimate) | 12-15 tháng |

---

## 9. Portfolio Synergy (IRONMESH)

| Reuse Item | From → To | Impact |
|-----------|-----------|--------|
| Solenoid recoil driver | BB-01 LOMAH → CUAV-SIM SS1 | -$50 dev, proven circuit |
| V-SMASH ballistic engine | V-SMASH → CUAV-SIM SS2 | -$5,000 dev, 12.7mm model done |
| Weapon station hardware | CUAV-SIM SS1 → VN-NAVAL-GUNNERY | Platform cho 14.5mm, 23mm |
| AI target behavior | CUAV-SIM SS4 → VN-AICAM-MDA-001 | Shared UAV behavior models |
| Physical targets | VANGUARD AIR "PHANTOM" + SEA "TRITON" | Live-fire complement |
| CORTEX RANGE integration | Future | Networked multi-site training |

---

## 10. Upgrade Path

| Phase | Tên | Thêm | Giá Target |
|-------|-----|------|-----------|
| PA-2 STANDARD | Baseline | 3-screen, 12.7mm, 2-DOF, virtual | $50-70K |
| PA-3 ENHANCED | +heave | 3-DOF motion, adaptive AI difficulty | $70-90K |
| PA-4 ELITE | +multi-weapon | 14.5mm + 23mm profiles, FLIR/NVG mode | $90-120K |
| PA-5 NETWORKED | +CORTEX | Multi-site LAN, combined arms scenarios | $150K+ |

---

## 11. Known Risks

| # | Risk | Mitigation |
|---|------|-----------|
| R1 | Unity multi-display latency > 50ms | Benchmark early (Phase 3 PoC) |
| R2 | Projector alignment on curved screen | Custom calibration tool (Phase 3) |
| R3 | Motion platform resonance with weapon station | Frequency separation analysis (Phase 3) |
| R4 | VN game developer recruitment | Start recruiting during Phase 2 |
| R5 | No official VN C-UAV training standard | Design to NATO STANAG-equivalent, adapt later |

---

## 12. Next Steps

1. Gate 1 formal review (Phase 1 → Phase 2 validation)
2. Physical gate: weapon station mockup PoC (SS1 only, 30 ngày)
3. Function Structure v1.0 (6-flow diagram)
4. TNKCT (Tính Năng Kỹ Chiến Thuật) — see companion document
