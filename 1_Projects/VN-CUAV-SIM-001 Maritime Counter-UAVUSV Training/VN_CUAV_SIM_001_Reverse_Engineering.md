# VN-CUAV-SIM-001: REVERSE ENGINEERING
## Hệ Thống Mô Phỏng Huấn Luyện Bắn UAV, USV Trên Biển
## Maritime Counter-UAV/USV Shooting Training Simulation System

### D-M-I-R × Pahl & Beitz Systematic Reverse Engineering Analysis

**Project Code:** VN-CUAV-SIM-001
**Date:** 02/04/2026
**Methodology:** D-M-I-R Reverse Engineering → Pahl & Beitz Phase 1 Task Clarification
**Status:** DIAGNOSIS PHASE

---

## MỤC LỤC

1. [D-M-I-R CONTEXT: TẠI SAO REVERSE ENGINEERING?](#1)
2. [DIAGNOSIS: BỐI CẢNH TÁC CHIẾN & NHU CẦU](#2)
3. [HỆ THỐNG THAM CHIẾU (REFERENCE SYSTEMS)](#3)
4. [PHÂN RÃ CHỨC NĂNG (FUNCTIONAL DECOMPOSITION)](#4)
5. [KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE)](#5)
6. [PHÂN TÍCH CÁC SUBSYSTEM](#6)
7. [PHÂN TÍCH MÔI TRƯỜNG TÁC CHIẾN BIỂN](#7)
8. [STAKEHOLDER & USE CASES](#8)
9. [GAP ANALYSIS: THỊ TRƯỜNG & KỸ THUẬT](#9)
10. [DESIGN PRINCIPLES RÚT RA](#10)
11. [ÁP DỤNG ACH PATTERN](#11)
12. [ROADMAP: TỪ REVERSE ENGINEERING → PHASE 1](#12)
13. [D-M-I-R REFLECTION](#13)

---

## 1. D-M-I-R CONTEXT: TẠI SAO REVERSE ENGINEERING? <a name="1"></a>

### 1.1 Diagnosis — Bài Toán Thực Tế

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BỐI CẢNH CHIẾN TRƯỜNG HIỆN ĐẠI                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  MỐI ĐE DỌA MỚI TRÊN BIỂN:                                            │
│  ════════════════════════════                                           │
│  1. UAV/FPV kamikaze tấn công tàu chiến (Ukraine-Russia, Red Sea)      │
│  2. Bầy UAV phối hợp (swarm attacks) → quá tải phòng thủ              │
│  3. USV mang thuốc nổ tấn công cảng/tàu (Houthi, Ukraine Sea Drone)   │
│  4. UAV trinh sát → chỉ thị mục tiêu cho tên lửa chống hạm           │
│  5. Drone nhỏ mang lựu đạn/bom → khó phát hiện bằng radar truyền thống│
│                                                                         │
│  VẤN ĐỀ HUẤN LUYỆN:                                                    │
│  ═══════════════════                                                    │
│  • Thủy thủ chưa từng đối đầu UAV/USV thực tế                         │
│  • Bắn UAV nhỏ bằng vũ khí hạng nặng (12.7mm, 14.5mm, 23mm):         │
│    → Tốc độ phản ứng cần < 10 giây                                    │
│    → Lead angle phức tạp (3D + ship motion)                            │
│    → Ammo tiêu hao lớn khi huấn luyện thực                            │
│  • USV tiếp cận tốc độ cao (40-60 knots):                              │
│    → Engagement window ngắn                                            │
│    → Cần phân biệt friend/foe (tàu cá vs USV tấn công)               │
│  • Chi phí bắn thực vs mô phỏng: 50-100x                              │
│                                                                         │
│  KẾT LUẬN: CẦN HỆ THỐNG MÔ PHỎNG CHUYÊN DỤNG                         │
│  cho huấn luyện bắn UAV/USV trên biển                                  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Mục Đích Reverse Engineering

| Mục đích | Mô tả | Áp dụng P&B |
|----------|-------|-------------|
| **Hiểu bài toán** | Xác định essential problem từ chiến trường thực | Phase 1: Task Clarification |
| **Benchmark** | Phân tích competitor/reference systems | Phase 2 input: Solution space |
| **Extract principles** | Rút ra nguyên lý thiết kế từ hệ thống hiện có | Phase 2: Working principles |
| **Identify gaps** | Tìm khoảng trống thị trường/kỹ thuật | Phase 1: Requirements |
| **Validate feasibility** | Đánh giá khả năng sản xuất tại VN | Phase 3: Vietnamese mfg constraints |

### 1.3 Liên Kết Với Portfolio Workshop X

```
SYNERGY MAP:
════════════

VN-CUAV-SIM-001 (SẢN PHẨM MỚI NÀY)
    │
    ├── V-SMASH (VN-SMASH-127-CUAV-001)
    │   └── Fire control system thực → SIM dùng cùng ballistic model
    │
    ├── VN-NAVAL-GUNNERY-TRAINER
    │   └── Weapon station simulator → tái sử dụng hardware
    │
    ├── VN-TARGET-BB01 (Naval shooting target)
    │   └── Acoustic detection tech → phát hiện đạn trong mô phỏng
    │
    ├── VN-AICAM-MDA-001 (Maritime Domain Awareness)
    │   └── AI camera → nhận dạng UAV/USV trong live-sim hybrid
    │
    ├── VANGUARD-AIR "PHANTOM" (Target drone)
    │   └── Actual target drone → live-fire component
    │
    ├── VANGUARD-SEA "TRITON" (Target USV)
    │   └── Actual target USV → live-fire component
    │
    └── CORTEX RANGE platform
        └── Common instructor/scoring framework
```

---

## 2. DIAGNOSIS: BỐI CẢNH TÁC CHIẾN & NHU CẦU <a name="2"></a>

### 2.1 Threat Analysis — Mối Đe Dọa UAV/USV Trên Biển

#### 2.1.1 UAV Threat Categories (Maritime)

| Category | Ví dụ | Tốc độ | Kích thước | RCS | Phương thức tấn công |
|----------|-------|--------|-----------|-----|---------------------|
| **Group 1: Micro** | DJI Mavic, FPV racer | 50-120 km/h | <2 kg | Rất nhỏ | ISR, lựu đạn thả |
| **Group 2: Small FPV** | FPV kamikaze | 80-180 km/h | 2-10 kg | Nhỏ | Kamikaze (warhead 1-3 kg) |
| **Group 3: Medium** | Bayraktar TB2, Shahed | 150-350 km/h | 10-200 kg | Trung bình | Bom/tên lửa, kamikaze |
| **Group 4: Loitering munition** | Switchblade 600, Lancet | 100-250 km/h | 20-50 kg | Nhỏ-TB | Precision strike |
| **Group 5: Swarm** | Coordinated multi-UAV | Varies | Mixed | Multi-target | Overwhelm defenses |

#### 2.1.2 USV Threat Categories

| Category | Ví dụ | Tốc độ | Kích thước | Phương thức tấn công |
|----------|-------|--------|-----------|---------------------|
| **Explosive USV** | Ukraine Sea Baby | 40-80 knots | 5-6m | Kamikaze (warhead 200-850 kg) |
| **RC Attack Boat** | Houthi explosive boats | 25-45 knots | 3-9m | Kamikaze |
| **ISR USV** | Recon surface drone | 15-30 knots | 2-4m | Reconnaissance, targeting |
| **Swarm USV** | Coordinated attack | Mixed | Mixed | Multi-axis approach |

### 2.2 Kỹ Năng Cần Huấn Luyện

```
MARITIME C-UAV/USV SKILLS HIERARCHY:
════════════════════════════════════

LEVEL 1: DETECTION & IDENTIFICATION (Nhận diện)
├── Phát hiện mục tiêu nhỏ bằng mắt thường
├── Sử dụng ống nhòm/thermal camera
├── Phân biệt UAV vs chim/vật thể khác
├── Phân biệt USV vs tàu cá/tàu dân sự
├── Báo cáo mục tiêu đúng format (bearing, range, altitude, type)
└── Thời gian: 2-5 giây từ khi phát hiện → báo cáo

LEVEL 2: ENGAGEMENT DECISION (Quyết định giao chiến)
├── Shoot/No-shoot judgment
├── IFF (Identification Friend or Foe)
├── Rules of Engagement compliance
├── Threat prioritization (nếu nhiều mục tiêu)
├── Weapon selection (12.7mm vs 14.5mm vs 23mm vs MANPADS)
└── Sector of fire management (tránh friendly fire)

LEVEL 3: WEAPON HANDLING (Thao tác vũ khí)
├── Mount/unmount weapon station nhanh
├── Loading, charging, safety procedures
├── Traversal speed matching to target
├── Tilt/elevation tracking
├── Trigger discipline (burst control)
└── Barrel change/malfunction drill

LEVEL 4: AIMING & SHOOTING (Ngắm bắn)
├── Lead angle calculation:
│   ├── UAV: 3D trajectory + wind + ship motion
│   ├── USV: 2D surface + relative motion
│   └── Compensation: Ship roll, pitch, yaw
├── Range estimation
├── Burst placement and correction
├── Tracking smooth vs. jerky targets
├── Engagement at different aspects (head-on, crossing, tail)
└── Night/low-visibility aiming

LEVEL 5: TEAM COORDINATION (Phối hợp tổ bắn)
├── Commander-gunner communication
├── Multi-weapon coordinated fire
├── Sector coverage assignment
├── Handoff between weapons
├── Ammo management
└── Damage assessment và re-engagement

LEVEL 6: TACTICAL SCENARIOS (Kịch bản chiến thuật)
├── Swarm attack defense (4-10 UAVs simultaneously)
├── Combined UAV + USV attack
├── Saturation attack (overwhelm sensors + weapons)
├── ECM/EW degraded environment
├── Night/fog/rain conditions
├── Port/anchorage vs open sea scenarios
└── Close-range last-ditch defense
```

---

## 3. HỆ THỐNG THAM CHIẾU (REFERENCE SYSTEMS) <a name="3"></a>

### 3.1 Competitor Landscape

| #   | System                 | Manufacturer             | Type          | Key Features                                     | Price Est. |
| --- | ---------------------- | ------------------------ | ------------- | ------------------------------------------------ | ---------- |
| 1   | **FATS 100MIL**        | Meggitt/FATS             | Virtual sim   | Multi-weapon, 300° screen, video scenarios       | $200-500K  |
| 2   | **Zen AWeSim**         | Zen Technologies (India) | Virtual sim   | Small arms + crew weapons, maritime scenarios    | $50-150K   |
| 3   | **Zen Gunnery Sim**    | Zen Technologies         | Naval gunnery | T-90 type crew gunnery, 3D targets               | $100-200K  |
| 4   | **VSHOREZ**            | shooting-soft.com        | C-UAS virtual | Anti-drone shooting scenarios, screen-based      | $20-50K    |
| 5   | **MVRsim FPV-UAV**     | MVRsimulation (US)       | FPV trainer   | VRSG visuals, EW degradation sim                 | $50-100K   |
| 6   | **Saab GCIT**          | Saab (Sweden)            | VR/Mixed      | Carl Gustaf VR, high fidelity ballistics         | $150-300K  |
| 7   | **Leonardo DRS MEP**   | Leonardo DRS (US)        | Live C-UAS    | USV-mounted C-UAS system (reference for threats) | $1M+       |
| 8   | **Meteksan SIMETRAN**  | Meteksan (Turkey)        | Multi-sim     | Consolidated training simulators brand           | $100-300K  |
| 9   | **Elbit RCWS Trainer** | Elbit (Israel)           | RCWS sim      | Integrated weapon station simulator              | $200-400K  |

### 3.2 Deep Dive: Functional Decomposition of Reference Systems

#### 3.2.1 Best-in-Class Feature Matrix

```
┌────────────────────────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ Feature                │ FATS │ Zen  │VSHOR │MVRsim│ Saab │Elbit │
│                        │100MIL│AWeSim│  EZ  │FPV   │ GCIT │RCWS  │
├────────────────────────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ UAV target scenarios   │  ◐   │  ◐   │  ●   │  ◐   │  ○   │  ●   │
│ USV target scenarios   │  ○   │  ◐   │  ○   │  ○   │  ○   │  ◐   │
│ Ship motion simulation │  ○   │  ○   │  ○   │  ○   │  ○   │  ◐   │
│ Real weapon interface  │  ●   │  ●   │  ○   │  ○   │  ●   │  ●   │
│ Multiple weapon types  │  ●   │  ●   │  ○   │  ○   │  ○   │  ●   │
│ Maritime environment   │  ◐   │  ◐   │  ○   │  ◐   │  ○   │  ◐   │
│ Night/thermal sim      │  ●   │  ◐   │  ○   │  ●   │  ●   │  ●   │
│ Swarm UAV scenarios    │  ○   │  ○   │  ◐   │  ○   │  ○   │  ○   │
│ AI target behavior     │  ◐   │  ○   │  ◐   │  ◐   │  ○   │  ◐   │
│ After Action Review    │  ●   │  ●   │  ○   │  ●   │  ●   │  ●   │
│ Instructor station     │  ●   │  ●   │  ○   │  ◐   │  ●   │  ●   │
│ Multi-trainee          │  ●   │  ◐   │  ○   │  ●   │  ○   │  ○   │
│ Live-sim hybrid        │  ○   │  ○   │  ○   │  ○   │  ○   │  ○   │
│ Vietnamese weapons     │  ○   │  ○   │  ○   │  ○   │  ○   │  ○   │
├────────────────────────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ ● = Full  ◐ = Partial  ○ = None                                 │
└──────────────────────────────────────────────────────────────────┘

CRITICAL GAP IDENTIFIED:
════════════════════════
→ KHÔNG AI kết hợp đầy đủ:
  (1) Maritime C-UAV/USV training
  (2) Ship motion simulation
  (3) Vietnamese weapon systems (12.7mm, 14.5mm, 23mm)
  (4) Live-sim hybrid (virtual + real target drone/USV)
  (5) Swarm attack scenarios
  (6) AI-driven adaptive difficulty

→ ĐÂY LÀ THỊ TRƯỜNG NGÁCH (NICHE) MÀ WORKSHOP X CÓ THỂ CHIẾM
```

---

## 4. PHÂN RÃ CHỨC NĂNG (FUNCTIONAL DECOMPOSITION) <a name="4"></a>

### 4.1 Overall Function Statement (Solution-Neutral)

```
┌─────────────────────────────────────────────────────────────────┐
│                    OVERALL FUNCTION                              │
│                                                                 │
│  "Chuyển đổi thủy thủ chưa có kinh nghiệm thành xạ thủ        │
│   có năng lực phòng thủ tàu chống UAV/USV trong môi trường      │
│   biển, với chi phí thấp hơn 50x so với bắn thực"              │
│                                                                 │
│  INPUT:                                                         │
│  ├── E: Năng lượng điện + cơ khí                               │
│  ├── M: Xạ thủ chưa được huấn luyện                            │
│  └── S: Kịch bản huấn luyện + tiêu chuẩn đánh giá             │
│                                                                 │
│  OUTPUT:                                                        │
│  ├── E: Phản hồi xúc giác (recoil, vibration)                  │
│  ├── M: Xạ thủ đạt tiêu chuẩn C-UAV/USV                       │
│  └── S: Báo cáo năng lực + dữ liệu huấn luyện                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Function Structure — Level 1

```
                         ┌──────────────────────────────────┐
    Kịch bản ──S──►      │                                  │      ──S──► Điểm số/AAR
    Điện năng ──E──►     │   HỆ THỐNG MÔ PHỎNG             │      ──E──► Recoil/haptic
    Xạ thủ ───M──►      │   HUẤN LUYỆN BẮN                 │      ──M──► Xạ thủ đạt
                         │   UAV/USV TRÊN BIỂN              │              chuẩn
                         │                                  │
                         └──────────────────────────────────┘
```

### 4.3 Function Structure — Level 2 (Sub-functions)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        FUNCTION STRUCTURE — LEVEL 2                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  F1: MÔ PHỎNG MỤC TIÊU (Target Simulation)                                │
│  ════════════════════════════════════════════                               │
│  F1.1: Tạo mục tiêu UAV (nhiều loại, kích thước, tốc độ, quỹ đạo)        │
│  F1.2: Tạo mục tiêu USV (tốc độ cao, cơ động, sóng biển)                 │
│  F1.3: Mô phỏng swarm (bầy đàn phối hợp)                                 │
│  F1.4: Mô phỏng hành vi AI (né tránh, tấn công, trinh sát)               │
│  F1.5: Mô phỏng signature (IR, RCS, acoustic, visual)                     │
│                                                                             │
│  F2: MÔ PHỎNG MÔI TRƯỜNG BIỂN (Maritime Environment)                      │
│  ═══════════════════════════════════════════════════                        │
│  F2.1: Mô phỏng sóng biển (sea state 0-6)                                │
│  F2.2: Mô phỏng thời tiết (mưa, sương mù, gió)                          │
│  F2.3: Mô phỏng chuyển động tàu (roll, pitch, yaw, heave)                │
│  F2.4: Mô phỏng ngày/đêm, điều kiện ánh sáng                            │
│  F2.5: Mô phỏng cảng/ven bờ/biển khơi                                    │
│                                                                             │
│  F3: MÔ PHỎNG VŨ KHÍ (Weapon Simulation)                                  │
│  ═══════════════════════════════════════════                                │
│  F3.1: Mô phỏng bệ vũ khí (12.7mm, 14.5mm, 23mm, RCWS)                  │
│  F3.2: Mô phỏng đạn đạo (ballistic trajectory)                           │
│  F3.3: Mô phỏng tản mát đạn (dispersion pattern)                         │
│  F3.4: Mô phỏng recoil/giật                                               │
│  F3.5: Mô phỏng tầm bắn, dead zone, sector of fire                       │
│  F3.6: Mô phỏng hỏng hóc vũ khí (jamming, overheating)                   │
│                                                                             │
│  F4: GIAO DIỆN XẠ THỦ (Gunner Interface)                                   │
│  ═══════════════════════════════════════                                    │
│  F4.1: Hiển thị cảnh biển 3D (visual display)                             │
│  F4.2: Nhận tín hiệu điều khiển từ xạ thủ (traverse, elevate, fire)      │
│  F4.3: Phản hồi xúc giác (recoil simulation)                              │
│  F4.4: Hiển thị hệ thống ngắm (sight reticle, lead computing)            │
│  F4.5: Mô phỏng optics (ống nhòm, thermal, night vision)                 │
│                                                                             │
│  F5: HỆ THỐNG HUẤN LUYỆN VIÊN (Instructor System)                         │
│  ══════════════════════════════════════════════════                         │
│  F5.1: Thiết kế kịch bản (scenario editor)                                │
│  F5.2: Tiêm mục tiêu thời gian thực (real-time target injection)         │
│  F5.3: Giám sát xạ thủ (trainee monitoring)                               │
│  F5.4: Ghi hình/dữ liệu (recording)                                      │
│  F5.5: Đánh giá sau bài tập (After Action Review - AAR)                   │
│  F5.6: Quản lý đa xạ thủ (multi-station management)                      │
│                                                                             │
│  F6: HỆ THỐNG ĐÁNH GIÁ (Scoring & Assessment)                             │
│  ══════════════════════════════════════════════                             │
│  F6.1: Phát hiện hit/miss (shot detection)                                │
│  F6.2: Tính điểm tự động (scoring algorithm)                              │
│  F6.3: Phân tích hiệu suất (performance analytics)                        │
│  F6.4: So sánh/xếp hạng (benchmarking)                                    │
│  F6.5: Báo cáo năng lực (competency report)                               │
│  F6.6: AI coaching (adaptive difficulty + recommendations)                 │
│                                                                             │
│  F7: HẠ TẦNG KỸ THUẬT (Technical Infrastructure)                          │
│  ═══════════════════════════════════════════════                            │
│  F7.1: Máy tính/rendering (compute platform)                              │
│  F7.2: Mạng nội bộ (networking)                                           │
│  F7.3: Nguồn điện (power supply)                                          │
│  F7.4: Kết nối vũ khí (weapon interface)                                  │
│  F7.5: Bảo trì/cập nhật (maintenance & updates)                           │
│                                                                             │
│  F8: TÍCH HỢP LIVE-SIM (Live-Simulation Hybrid) [UNIQUE]                  │
│  ═══════════════════════════════════════════════════════                    │
│  F8.1: Kết nối target drone thực (VN-TARGET-DRONE-001)                    │
│  F8.2: Kết nối target USV thực (VANGUARD-SEA)                             │
│  F8.3: Tracking overlay (real target + simulated effects)                  │
│  F8.4: Mixed reality scoring (real tracking + virtual impact)              │
│  F8.5: Safety boundary management                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE) <a name="5"></a>

### 5.1 System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│            VN-CUAV-SIM-001: SYSTEM ARCHITECTURE OVERVIEW                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐   ┌──────────────┐   ┌────────────────┐                  │
│  │ SS1:        │   │ SS2:         │   │ SS3:           │                  │
│  │ WEAPON      │◄─►│ VISUAL &     │◄─►│ TARGET &       │                  │
│  │ STATION     │   │ ENVIRONMENT  │   │ BALLISTIC      │                  │
│  │ SIMULATOR   │   │ ENGINE       │   │ ENGINE         │                  │
│  │             │   │              │   │                │                  │
│  │ • Mock-up   │   │ • 3D render  │   │ • UAV models   │                  │
│  │   weapon    │   │ • Sea/sky    │   │ • USV models   │                  │
│  │ • Sensors   │   │ • Ship       │   │ • Ballistics   │                  │
│  │ • Recoil    │   │   motion     │   │ • Hit/miss     │                  │
│  │ • Controls  │   │ • Weather    │   │ • AI behavior  │                  │
│  └──────┬──────┘   └──────┬───────┘   └───────┬────────┘                  │
│         │                 │                    │                            │
│         └─────────────────┼────────────────────┘                            │
│                           │                                                 │
│                    ┌──────▼───────┐                                         │
│                    │ SS4:         │                                         │
│                    │ CORE         │                                         │
│                    │ COMPUTER     │                                         │
│                    │ SYSTEM       │                                         │
│                    │              │                                         │
│                    │ • Simulation │                                         │
│                    │   engine     │                                         │
│                    │ • Data bus   │                                         │
│                    │ • Recording  │                                         │
│                    └──────┬───────┘                                         │
│                           │                                                 │
│         ┌─────────────────┼────────────────────┐                            │
│         │                 │                    │                            │
│  ┌──────▼──────┐   ┌──────▼───────┐   ┌───────▼────────┐                  │
│  │ SS5:        │   │ SS6:         │   │ SS7:           │                  │
│  │ INSTRUCTOR  │   │ SCORING &    │   │ LIVE-SIM       │                  │
│  │ STATION     │   │ AAR          │   │ INTERFACE      │                  │
│  │             │   │              │   │ (OPTIONAL)     │                  │
│  │ • Scenario  │   │ • Hit detect │   │                │                  │
│  │ • Control   │   │ • Analytics  │   │ • Drone link   │                  │
│  │ • Monitor   │   │ • Reports    │   │ • USV link     │                  │
│  │ • Override  │   │ • AI coach   │   │ • Safety mgmt  │                  │
│  └─────────────┘   └──────────────┘   └────────────────┘                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Data Flow Architecture

```
DATA FLOW:
══════════

                    INSTRUCTOR INPUT
                         │
                         ▼
              ┌──────────────────┐
              │  SCENARIO ENGINE │ ──► Kịch bản (targets, weather, ROE)
              └────────┬─────────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │ TARGET   │ │ ENVIRON- │ │ BALLISTIC│
   │ AI       │ │ MENT     │ │ ENGINE   │
   │          │ │ ENGINE   │ │          │
   │ UAV path │ │ Sea state│ │ Trajectory│
   │ USV path │ │ Weather  │ │ Dispersion│
   │ Behavior │ │ Lighting │ │ Hit calc  │
   └────┬─────┘ └────┬─────┘ └────┬─────┘
        │             │            │
        └──────┬──────┘            │
               ▼                   │
        ┌──────────────┐           │
        │ VISUAL       │◄──────────┘
        │ RENDERING    │
        │              │
        │ 3D scene +   │
        │ HUD overlay  │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐     ┌──────────────┐
        │ DISPLAY      │     │ WEAPON       │
        │ SYSTEM       │◄───►│ MOCK-UP      │
        │              │     │              │
        │ Projector/   │     │ Encoder pos  │
        │ Screen/VR    │     │ Trigger      │
        └──────────────┘     │ Recoil motor │
                             └──────┬───────┘
                                    │
                                    ▼
                             ┌──────────────┐
                             │ SCORING      │
                             │ ENGINE       │
                             │              │
                             │ Hit/miss     │
                             │ Accuracy     │
                             │ Reaction time│
                             └──────┬───────┘
                                    │
                                    ▼
                             ┌──────────────┐
                             │ AAR &        │
                             │ ANALYTICS    │
                             │              │
                             │ Replay       │
                             │ Report       │
                             │ AI coaching  │
                             └──────────────┘
```

---

## 6. PHÂN TÍCH CÁC SUBSYSTEM <a name="6"></a>

### 6.1 SS1: Weapon Station Simulator

#### 6.1.1 Working Principle Analysis

| Sub-function | Working Principle | Implementation Options | Vietnamese MFG |
|-------------|-------------------|----------------------|----------------|
| **Traverse** | Rotary encoder + motor | (a) Servo motor load (b) Slip clutch (c) Free rotation + encoder | CNC machining HCM |
| **Elevation** | Linear/rotary encoder + motor | (a) Linear actuator (b) Rotary w/ counterweight | CNC + welding |
| **Recoil** | Linear actuator impulse | (a) Pneumatic (b) Electric solenoid (c) Eccentric cam | Pneumatic: imported; Solenoid: local |
| **Trigger** | Microswitch/sensor | (a) Physical switch (b) Pressure sensor (c) Optical | Local electronics |
| **Grip/handle** | Mechanical copy | (a) 3D scan + CNC (b) 3D print + mold (c) Direct copy | 3D print + CNC |
| **Sight optic** | Display in eyepiece | (a) Real optic + overlay (b) Camera + screen (c) AR projection | Mix: import optic + local display |

#### 6.1.2 Vietnamese Weapon Types to Simulate

```
WEAPON STATIONS IN VIETNAMESE NAVY INVENTORY:
═════════════════════════════════════════════

┌───────────────────┬────────┬────────┬──────────┬────────────────┐
│ Weapon            │ Caliber│ ROF    │ Range    │ Ship Classes   │
├───────────────────┼────────┼────────┼──────────┼────────────────┤
│ DSHK/NSV          │ 12.7mm │ 600rpm │ 2000m    │ All classes    │
│ KPVT              │ 14.5mm │ 600rpm │ 2000m    │ Patrol boats   │
│ ZU-23-2 (twin)    │ 23mm   │1600rpm │ 2500m    │ Corvettes+     │
│ AK-230 (twin)     │ 30mm   │ 2100rpm│ 4000m    │ Frigates       │
│ AK-176            │ 76mm   │ 120rpm │ 15km     │ Frigates       │
│ AK-630 CIWS       │ 30mm   │ 5000rpm│ 4000m    │ Frigates       │
│ Manual mount      │ 12.7mm │ 600rpm │ 2000m    │ All classes    │
│ VN-RCWS-001       │ 12.7mm │ 600rpm │ 2000m    │ Future         │
└───────────────────┴────────┴────────┴──────────┴────────────────┘

PRIORITY SELECTION:
→ Phase 1: 12.7mm (DSHK/NSV) manual mount — most widespread
→ Phase 2: 14.5mm (KPVT) — patrol boats
→ Phase 3: 23mm (ZU-23-2) — corvettes
→ Phase 4: VN-RCWS-001 integration — future fleet
```

### 6.2 SS2: Visual & Environment Engine

#### 6.2.1 Display Technology Options

| Option | Technology | FOV | Resolution | Immersion | Cost | Feasibility VN |
|--------|-----------|-----|-----------|-----------|------|---------------|
| A | Multi-screen projection (3-5 screens) | 180-300° | 1080-4K | Medium-High | $15-40K | High |
| B | Dome projection (hemispherical) | 300°+ | 4K+ | Very High | $50-200K | Low (import) |
| C | VR headset (HTC Vive Pro/Varjo) | 360° | High | Very High | $1-5K | High (COTS) |
| D | Large curved LED wall | 120-180° | 4K-8K | High | $30-100K | Medium |
| E | Single large screen + tracking | 60-90° | 4K | Medium | $5-15K | Very High |

**Recommended**: Option A (multi-screen) for main product, Option C (VR) as budget variant.

#### 6.2.2 Maritime Environment Simulation Requirements

| Parameter | Range | Fidelity Required | Implementation |
|-----------|-------|-------------------|----------------|
| Sea state | 0-6 (Douglas scale) | High (affect aiming) | Physics-based wave model |
| Ship motion | 6 DOF | Critical (platform stability) | IMU data playback or motion model |
| Wind | 0-60 knots | Medium (affect target + projectile) | Particle system + ballistic correction |
| Rain | Light/Heavy | Medium (visibility reduction) | Shader-based rendering |
| Fog | 100m-10km visibility | High (detection distance) | Volumetric fog |
| Day/Night | Sunrise-Sunset-Night | Critical (NVG/thermal modes) | Dynamic lighting system |
| Sun glare | Realistic sun position | Medium (tactical awareness) | HDR rendering |

### 6.3 SS3: Target & Ballistic Engine

#### 6.3.1 UAV Target Behavior Model

```
UAV AI BEHAVIOR STATE MACHINE:
══════════════════════════════

                    ┌──────────┐
                    │  SPAWN   │
                    │ (point+  │
                    │ heading) │
                    └────┬─────┘
                         │
                    ┌────▼─────┐
              ┌────►│ APPROACH │◄────────────────────┐
              │     │ (cruise  │                     │
              │     │  to tgt) │                     │
              │     └────┬─────┘                     │
              │          │                           │
              │     ┌────▼─────┐    ┌──────────┐    │
              │     │ DETECT   │───►│ EVASION  │────┘
              │     │ (acquire │    │ (dodge,  │
              │     │  target) │    │ jink, pop│
              │     └────┬─────┘    │ chaff)   │
              │          │          └──────────┘
              │     ┌────▼─────┐
              │     │ ATTACK   │
              │     │ (dive,   │
              │     │ kamikaze,│
              │     │ loiter)  │
              │     └────┬─────┘
              │          │
              │     ┌────▼─────┐
              │     │ IMPACT/  │
              │     │ MISS/    │
              │     │ DESTROYED│
              └─────┤          │
     (re-attack)    └──────────┘

DIFFICULTY LEVELS:
├── Easy:    Straight approach, no evasion, slow
├── Medium:  Some jinking, moderate speed, pop-up
├── Hard:    Active evasion, high speed, terrain masking
├── Expert:  Coordinated swarm, ECM, decoys
└── Adaptive: AI adjusts based on trainee performance
```

#### 6.3.2 Ballistic Model Parameters

| Parameter | 12.7mm (B-32) | 14.5mm (B-32) | 23mm (OFZ) | Source |
|-----------|--------------|--------------|-----------|--------|
| Muzzle velocity | 820 m/s | 1000 m/s | 970 m/s | TM tables |
| Projectile mass | 48.3 g | 64.4 g | 190 g | TM tables |
| Drag coefficient | 0.295 | 0.280 | 0.310 | Standard |
| Time of flight 1000m | 1.56 s | 1.24 s | 1.32 s | Calculated |
| Drop at 1000m | 6.8 m | 3.9 m | 4.8 m | Calculated |
| Wind drift (10m/s) | 1.2 m/1000m | 0.8 m/1000m | 1.0 m/1000m | Calculated |
| Dispersion (CEP) | 0.5 mrad | 0.4 mrad | 0.6 mrad | Typical |
| Tracer burnout | 1500m | 2000m | 2000m | Spec |

### 6.4 SS5: Instructor Station

#### 6.4.1 Instructor Capabilities

```
INSTRUCTOR STATION FUNCTIONS:
═════════════════════════════

1. PRE-EXERCISE
   ├── Select pre-built scenario (library of 50+)
   ├── Customize scenario parameters
   │   ├── Number/type of targets
   │   ├── Approach direction, speed, altitude
   │   ├── Weather/sea state
   │   ├── Ship type and weapon loadout
   │   └── Rules of engagement
   ├── Set difficulty level (or enable adaptive AI)
   └── Assign trainees to stations

2. DURING EXERCISE
   ├── Monitor all trainee views (picture-in-picture)
   ├── Inject ad-hoc targets in real-time
   ├── Pause/resume exercise
   ├── Override/cancel dangerous scenarios
   ├── Send voice commands to trainees
   ├── Trigger malfunctions (weapon jam, sensor failure)
   └── Real-time scoring display

3. POST-EXERCISE (AAR)
   ├── 3D replay with multiple viewpoints
   ├── Shot-by-shot analysis (trajectory visualization)
   ├── Performance scoring breakdown
   │   ├── Detection time
   │   ├── Engagement decision time
   │   ├── Accuracy (hit %, CEP)
   │   ├── Ammo efficiency
   │   └── ROE compliance
   ├── Compare with baseline/peers
   ├── Generate training report (PDF/DOCX)
   └── Export data to training management system
```

### 6.5 SS7: Live-Sim Hybrid Interface (UNIQUE DIFFERENTIATOR)

```
LIVE-SIM HYBRID CONCEPT:
═══════════════════════

MODE 1: PURE VIRTUAL (Indoor/Shore-based)
├── All targets are computer-generated
├── All environment is simulated
├── Weapon is mock-up
└── Lowest cost, highest throughput

MODE 2: AUGMENTED LIVE (On ship / shore range)
├── Real sky/sea as background
├── AR overlay of virtual targets on real environment
├── Real weapon with laser attachment (no live ammo)
├── Ship motion is REAL (if on ship)
└── Medium cost, very high realism

MODE 3: LIVE TARGET + VIRTUAL SCORING (Shore range / at sea)
├── Real target drone (VANGUARD-AIR "PHANTOM") flying
├── Real target USV (VANGUARD-SEA "TRITON") maneuvering
├── Real weapon + TRAINING AMMO or laser tracker
├── Scoring via AI camera tracking (VN-AICAM)
│   ├── Camera tracks both target and projectile trace
│   ├── AI calculates miss distance
│   └── Overlay hit/miss on instructor display
├── OR acoustic scoring (VN-TARGET-BB01 technology)
└── Highest cost, highest realism

UNIQUE VALUE PROPOSITION:
→ Workshop X is the ONLY company that can offer all 3 modes
   because we make the target drones, target USVs, AI cameras,
   acoustic detection, AND the simulator
→ This is the "IRONMESH OS" integration advantage
```

---

## 7. PHÂN TÍCH MÔI TRƯỜNG TÁC CHIẾN BIỂN <a name="7"></a>

### 7.1 Ship Motion Effects on Aiming

```
SHIP MOTION vs AIMING CHALLENGE:
════════════════════════════════

┌─────────┬───────────────┬────────────────┬───────────────────────┐
│ DOF     │ Motion        │ Typical Range  │ Impact on Aiming      │
├─────────┼───────────────┼────────────────┼───────────────────────┤
│ Roll    │ Side-to-side  │ ±5-25°         │ CRITICAL: Elevation   │
│         │ rotation      │ (sea state)    │ error, seasickness    │
│ Pitch   │ Fore-aft      │ ±3-15°         │ HIGH: Range error     │
│         │ rotation      │                │                       │
│ Yaw     │ Heading       │ ±2-10°         │ MEDIUM: Azimuth error │
│         │ change        │                │                       │
│ Heave   │ Up-down       │ ±0.5-3m        │ HIGH: Sight line      │
│         │ translation   │                │ oscillation           │
│ Surge   │ Fore-aft      │ ±0.2-1m        │ LOW: Minimal effect   │
│         │ translation   │                │                       │
│ Sway    │ Side-to-side  │ ±0.3-2m        │ MEDIUM: Lateral       │
│         │ translation   │                │ displacement          │
└─────────┴───────────────┴────────────────┴───────────────────────┘

CRITICAL SIMULATION REQUIREMENT:
→ Roll + Pitch + Heave phải được mô phỏng
→ Options:
  (a) Motion platform (Stewart platform 6DOF): $50-200K, realistic
  (b) Visual motion only (tilting horizon): $0 extra, moderate
  (c) Seat motion (rumble + tilt): $5-15K, good compromise
  (d) Ship motion data playback (recorded at sea): $0, visual only

→ RECOMMENDATION: Start with (b) visual-only motion,
  upgrade to (c) seat motion for advanced version
```

### 7.2 Maritime-Specific Engagement Challenges

| Challenge | Mô tả | Training Need |
|-----------|-------|---------------|
| **Sea clutter** | Sóng biển gây nhiễu radar, khó thấy mục tiêu nhỏ | Visual discrimination drills |
| **Sun glare** | Mặt trời gây lóa mắt khi nhìn hướng đông/tây | Tactical positioning awareness |
| **Horizon masking** | USV ẩn sau sóng ở khoảng cách xa | Range estimation practice |
| **Relative motion** | Cả tàu mình và mục tiêu đều di chuyển | Lead angle = f(V_target, V_ship, angle) |
| **Salt spray** | Nước biển bám optic, giảm tầm nhìn | Lens cleaning drills (sim degraded vision) |
| **Deck vibration** | Máy tàu rung → ảnh hưởng ngắm | Steady-hold practice with vibration |
| **Limited arcs** | Cấu trúc tàu che khuất sector of fire | Sector awareness training |

---

## 8. STAKEHOLDER & USE CASES <a name="8"></a>

### 8.1 Stakeholder Analysis

| Stakeholder | Vai trò | Yêu cầu chính | Ưu tiên |
|-------------|--------|---------------|---------|
| **Xạ thủ (Gunner)** | Người dùng chính | Realistic feel, rõ ràng feedback, an toàn | CRITICAL |
| **Huấn luyện viên (Instructor)** | Điều khiển, đánh giá | Dễ tạo scenario, tracking performance | CRITICAL |
| **Chỉ huy tàu (CO)** | Quyết định | Training effectiveness, readiness | HIGH |
| **Kỹ thuật viên (Tech)** | Bảo trì | Modular, dễ sửa, spare parts | HIGH |
| **Cục Quân huấn** | Cơ quan quản lý | Compliance with training standards | HIGH |
| **Bộ Tư Lệnh Hải quân** | Khách hàng | Fleet-wide deployment, cost effectiveness | CRITICAL |
| **Xuất khẩu (Export)** | Thị trường mới | Multi-weapon support, localizable | MEDIUM |

### 8.2 Use Cases

```
USE CASE MATRIX:
════════════════

UC-01: Huấn luyện cơ bản (Basic Training)
├── Xạ thủ mới, chưa từng bắn
├── Mục tiêu: quen thao tác vũ khí, ngắm bắn mục tiêu tĩnh → động
├── Duration: 4 tuần, 2h/ngày
├── Environment: Shore-based, Mode 1 (pure virtual)
└── Metrics: Safety procedures, basic accuracy

UC-02: Huấn luyện nâng cao C-UAV (Advanced C-UAV)
├── Xạ thủ đã có kinh nghiệm cơ bản
├── Mục tiêu: bắn UAV di chuyển nhanh, 3D trajectory
├── Duration: 2 tuần, 4h/ngày
├── Environment: Shore-based, Mode 1-2
└── Metrics: Detection time, engagement decision, hit %

UC-03: Huấn luyện C-USV (Counter-USV)
├── Xạ thủ đã qua UC-01
├── Mục tiêu: bắn USV tốc độ cao trên biển
├── Duration: 1 tuần, 4h/ngày
├── Environment: Shore or ship-based, Mode 1-2
└── Metrics: Surface target engagement, sector management

UC-04: Huấn luyện phối hợp (Team Training)
├── Tổ bắn 2-4 người
├── Mục tiêu: phối hợp nhiều vũ khí chống swarm attack
├── Duration: 1 tuần, 4h/ngày
├── Environment: Multi-station, Mode 1
└── Metrics: Coordination, coverage, handoff efficiency

UC-05: Bài kiểm tra định kỳ (Qualification Test)
├── Tất cả xạ thủ đang phục vụ
├── Mục tiêu: đánh giá năng lực, cấp/gia hạn chứng chỉ
├── Duration: 2h
├── Environment: Standardized scenario set
└── Metrics: Pass/fail against predefined thresholds

UC-06: Huấn luyện thực hành kết hợp (Live-Sim)
├── Đơn vị cấp tàu/hải đội
├── Mục tiêu: bắn target drone + target USV thực
├── Duration: 1-2 ngày
├── Environment: At-sea or shore range, Mode 3
└── Metrics: Real engagement performance
```

---

## 9. GAP ANALYSIS: THỊ TRƯỜNG & KỸ THUẬT <a name="9"></a>

### 9.1 Market Gap

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        MARKET GAP ANALYSIS                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  EXISTING PRODUCTS     │     THIS PRODUCT        │   GAP = OPPORTUNITY  │
│  (Competition)         │     (VN-CUAV-SIM-001)   │                      │
│                        │                         │                      │
│  ❌ Generic targets    │  ✅ UAV/USV specific    │  Maritime C-UAV/USV  │
│  ❌ Land-based only    │  ✅ Maritime focused    │  training is UNSERVED│
│  ❌ Western weapons    │  ✅ VN/Soviet weapons   │  No competitor for   │
│  ❌ Single mode        │  ✅ 3-mode (V/AR/Live)  │  Vietnamese Navy     │
│  ❌ No ship motion     │  ✅ Ship motion sim     │                      │
│  ❌ No swarm sim       │  ✅ Swarm scenarios     │  Growing demand      │
│  ❌ No AI coaching     │  ✅ Adaptive difficulty  │  post Ukraine/RedSea │
│  ❌ No live-sim link   │  ✅ Target drone/USV    │                      │
│  ❌ $200K+             │  ✅ Target $40-80K      │  Price advantage     │
│                        │                         │                      │
│  CONCLUSION: Blue ocean opportunity for                                 │
│  maritime C-UAV/USV training specifically for                           │
│  Vietnamese Navy and ASEAN export market                                │
└─────────────────────────────────────────────────────────────────────────┘
```

### 9.2 Technical Gap — What Must Be Developed

| Capability | Existing at Workshop X | Gap | Effort |
|-----------|----------------------|-----|--------|
| 12.7mm weapon mock-up | VN-MM-001 manual mount design | Small: adapt existing | 2 months |
| Ballistic engine | V-SMASH ballistic model | Small: extend to simulation | 1 month |
| 3D rendering (maritime) | Not available | **LARGE**: need game engine | 4-6 months |
| UAV AI behavior | VN-AICAM target tracking | Medium: add path planning | 3 months |
| Ship motion model | Not available | Medium: well-documented problem | 2 months |
| Instructor station | CORTEX RANGE instructor framework | Small: adapt existing | 2 months |
| AAR system | Not available | Medium: recording + replay | 3 months |
| Scoring algorithm | VN-TARGET-BB01 acoustic scoring | Small: extend to virtual | 1 month |
| Live-sim interface | VANGUARD telemetry | Medium: data fusion | 3 months |
| Recoil simulator | Not available | Medium: mechanical design | 3 months |
| Display system | Not available | Small: COTS projectors | 1 month |

**Total estimated development**: 12-18 months for Phase 1 (Pure Virtual, 12.7mm)

---

## 10. DESIGN PRINCIPLES RÚT RA <a name="10"></a>

### 10.1 Principles Extracted from Reference Systems

```
DESIGN PRINCIPLES FROM REVERSE ENGINEERING:
═══════════════════════════════════════════

P1: MODULAR WEAPON INTERFACE
   └── Weapon mock-up phải có thể thay thế (12.7mm → 14.5mm → 23mm)
       mà không thay đổi phần mềm/hệ thống khác
   └── Standard interface: encoder signals + trigger + recoil driver

P2: SCENARIO-DRIVEN ARCHITECTURE
   └── Mọi thứ (targets, weather, difficulty) phải cấu hình từ
       scenario file, không hard-code
   └── XML/JSON scenario format for easy creation

P3: FIDELITY WHERE IT MATTERS
   └── Ballistic model: HIGH fidelity (quyết định training transfer)
   └── Visual: GOOD ENOUGH (game-quality, not photo-real)
   └── Sound: IMPORTANT (gunfire + environmental)
   └── Recoil: IMPORTANT (muscle memory formation)

P4: DATA-DRIVEN IMPROVEMENT
   └── Every session generates training data
   └── AI analyzes patterns → recommends drills
   └── Fleet-wide analytics → identify systemic gaps
   └── Applies CORTEX RANGE "every shot generates data" philosophy

P5: PROGRESSIVE DISCLOSURE OF COMPLEXITY
   └── Start simple (single UAV, calm sea, good weather)
   └── Gradually increase (swarm, rough sea, night, ECM)
   └── AI adapts difficulty to trainee skill level

P6: LIVE-SIM CONTINUUM (UNIQUE TO WORKSHOP X)
   └── Same scoring engine works in virtual, AR, and live modes
   └── Trainee progression: virtual → AR → live fire
   └── Data comparable across all modes

P7: VIETNAMESE WEAPON AUTHENTICITY
   └── Ergonomics MUST match real Soviet/VN weapon stations
   └── Procedures MUST match actual drill manuals
   └── Terminology in Vietnamese throughout
```

---

## 11. ÁP DỤNG ACH PATTERN <a name="11"></a>

### 11.1 ACH (AI-Compensates-Hardware) Analysis

```
ACH PATTERN APPLICATION TO VN-CUAV-SIM-001:
════════════════════════════════════════════

LEVEL 1: REPLACE
├── Real ammunition → Virtual ballistic engine ($0.00/shot vs $3-15/round)
├── Real UAV target → AI-generated 3D model ($0 vs $5K-50K/flight)
├── Real USV target → AI-generated vessel ($0 vs $200-500/hour)
├── Sea range booking → Indoor facility (any time, any weather)
└── SAVINGS: 50-100x cost reduction per training hour

LEVEL 2: AUGMENT (cheap hardware + AI = expensive capability)
├── Simple projector + AI rendering = immersive maritime environment
│   (vs $200K dome display system)
├── Weapon mock-up + encoder + AI = weapon station feel
│   (vs $500K full weapon system retrofit)
├── Single GPU PC + AI optimization = smooth 3D rendering
│   (vs $50K military-grade rendering cluster)
├── Webcam + AI posture tracking = trainee monitoring
│   (vs $20K motion capture system)
└── COST REDUCTION: 5-10x vs Western simulator price

LEVEL 3: EMERGE (AI creates impossible-with-hardware capabilities)
├── Adaptive difficulty: AI adjusts target behavior to trainee level
│   → Impossible with fixed scenarios
├── Predictive weakness detection: AI identifies specific skill gaps
│   → Impossible with human observation alone
├── Swarm simulation: 10-50 AI-driven targets simultaneously
│   → Impossible/extremely expensive with real targets
├── Combined UAV+USV+ECM scenarios: complex multi-domain threat
│   → Cannot create safely in real world
├── Instant replay with AI annotation: shows exactly what went wrong
│   → Not possible in live fire
└── Fleet-wide pattern analysis: AI correlates training data across
    all ships → identifies systemic training gaps
    → Impossible without centralized AI analytics
```

---

## 12. ROADMAP: TỪ REVERSE ENGINEERING → PHASE 1 <a name="12"></a>

### 12.1 Development Phases

```
VN-CUAV-SIM-001 DEVELOPMENT ROADMAP:
═════════════════════════════════════

PHASE 0: TASK CLARIFICATION (2 tháng) ← TIẾP THEO
├── Requirements List v1.0 (dựa trên reverse engineering này)
├── Customer validation (Cục Quân huấn, BTL Hải quân)
├── Stakeholder interviews (xạ thủ, huấn luyện viên thực tế)
├── Define training objectives aligned with Cục QH regulations
└── GATE: Requirements List approved

PHASE 1: CONCEPTUAL DESIGN (3 tháng)
├── Function structure refinement
├── Morphological matrix (display × weapon × motion × scoring)
├── Generate 3-5 system concepts
├── VDI 2225 evaluation
├── Select concept
└── GATE: Concept approved

PHASE 2: EMBODIMENT DESIGN (4 tháng)
├── Preliminary layout — all subsystems
├── Component selection (GPU, projector, encoders, motors)
├── BOM and cost analysis
├── DfX analysis (DfM, DfA, DfT)
├── Integration architecture
└── GATE: Layout approved

PHASE 3: DETAIL DESIGN + PROTOTYPE (6 tháng)
├── Detail drawings for weapon mock-up
├── Software development (rendering, ballistic, scoring)
├── Hardware integration
├── Unit testing per subsystem
└── GATE: Prototype ready for testing

PHASE 4: TESTING + QUALIFICATION (3 tháng)
├── Verification against requirements
├── User acceptance testing with Navy personnel
├── Training transfer study (sim performance vs live fire)
├── MIL-STD compliance testing
└── GATE: System qualified

TOTAL: ~18 months to first deliverable unit
```

### 12.2 Product Variants

| Variant | Description | Target Price | Market |
|---------|------------|-------------|--------|
| **LITE** | Single screen, 12.7mm, PC-based, no motion | $25-35K | Basic units, export |
| **STANDARD** | 3-screen, 12.7mm+14.5mm, instructor station | $50-70K | Main product |
| **ADVANCED** | 5-screen, multi-weapon, seat motion, AI coaching | $80-120K | Flag ships, academies |
| **LIVE-SIM** | STANDARD + target drone/USV interface | $70-90K + targets | Premium |

---

## 13. D-M-I-R REFLECTION <a name="13"></a>

### 13.1 Reverse Engineering Insights

| D-M-I-R Phase | What We Learned |
|---------------|-----------------|
| **Diagnosis** | Maritime C-UAV/USV training is a critical unmet need globally. Ukraine/Red Sea conflicts have made this urgent. Vietnamese Navy has no simulation capability for this threat. |
| **Modeling** | System architecture follows modular pattern: weapon interface + visual engine + target AI + scoring + instructor = complete system. The unique differentiator is live-sim hybrid. |
| **Intervention** | Workshop X portfolio synergy is the competitive moat: target drones, target USVs, AI cameras, acoustic detection, RCWS → all feed into this simulator product. |
| **Reflection** | This product fills a CRITICAL gap in CORTEX RANGE portfolio. It connects RANGE (training) with TARGET (drone/USV) and SHIELD (C-UAS). Classic IRONMESH OS integration. |

### 13.2 Known Unknowns — Cần Trả Lời Trước Phase 1

```
CRITICAL QUESTIONS FOR PHASE 1:
═══════════════════════════════

Q1: Cục Quân huấn có tiêu chuẩn huấn luyện bắn UAV/USV không?
    → Nếu chưa có → Workshop X đề xuất tiêu chuẩn (competitive advantage)

Q2: Xạ thủ hải quân hiện tại huấn luyện bắn UAV bằng cách nào?
    → Field visit cần thiết

Q3: Mô phỏng ship motion có bắt buộc không hay chỉ visual motion?
    → Ảnh hưởng lớn đến cost và complexity

Q4: Ngân sách cho 1 hệ thống? Fleet-wide deployment bao nhiêu bộ?
    → Quyết định variant nào phát triển trước

Q5: Game engine nào phù hợp? Unreal Engine 5 vs Unity vs custom?
    → Performance, licensing, maritime asset availability

Q6: Có thể dùng VR headset thay thế multi-screen projection không?
    → Giảm 80% chi phí display nhưng ảnh hưởng situational awareness

Q7: Kết nối với V-SMASH như thế nào? Same ballistic model? Same UI?
    → Synergy optimization
```

### 13.3 Risk Register (Preliminary)

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|-----------|
| R1 | 3D maritime rendering chưa có kinh nghiệm | HIGH | HIGH | Dùng game engine + asset store, hire game dev |
| R2 | Weapon mock-up không đủ realistic feel | MEDIUM | HIGH | Get real weapon for reference, user testing early |
| R3 | Ship motion sim complexity > estimated | MEDIUM | MEDIUM | Start with visual-only, add physical motion later |
| R4 | Customer requirements change | HIGH | MEDIUM | Agile development, regular stakeholder check |
| R5 | Game engine licensing cost | LOW | MEDIUM | Evaluate open-source (Godot) as backup |
| R6 | Training transfer validity uncertain | MEDIUM | HIGH | Early validation study with real gunners |

### 13.4 Next Steps

```
IMMEDIATE ACTIONS:
══════════════════

□ 1. APPROVE this Reverse Engineering analysis
□ 2. Proceed to Phase 1 Task Clarification
     → Build Requirements List v1.0
     → Use Pahl & Beitz 16-category checklist
     → Include Vietnamese military standards
□ 3. Schedule stakeholder interviews
     → Xạ thủ hải quân (actual gunners)
     → Huấn luyện viên (instructors)
     → Cục Quân huấn (training authority)
□ 4. Field visit to observe current training
□ 5. Benchmark: request demo from Zen Technologies
□ 6. Technical spike: evaluate game engines for maritime sim
□ 7. Assign project code in CORTEX RANGE portfolio
```

---

**Document version:** v1.0
**Created:** 02/04/2026
**Methodology:** D-M-I-R × Pahl & Beitz Systematic Design
**Author:** Workshop X Engineering Team
**Classification:** NỘI BỘ / INTERNAL

---

*"Mọi chiến binh trên mỗi con tàu phải sẵn sàng bắn hạ drone — và mô phỏng là con đường nhanh nhất, rẻ nhất, an toàn nhất để đạt được điều đó."*
