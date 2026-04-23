---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: FORGE Product Line Architecture
version: v1.0
---

# VN-CUAV-SIM-001 — Product Line Architecture v1.0
## Maritime Counter-UAV/USV Shooting Training Simulation System

**Date:** 2026-04-07
**Version:** 1.2
**Decisions:**
- CEO — bổ sung FULL variant (2-3 stations, 360°, crew coordination)
- CEO — bổ sung FIXED variant (đảo, nhà giàn, cảng — phòng thủ cố định)
- CEO — CORTEX = liên quân (bờ + tàu) chống swarm đồng thời
- CEO — **FIXED = LITE HW (indoor) − motion + kịch bản đảo/nhà giàn/cảng. KHÔNG ruggedized.**
**PRESTUDY:** 7/7 GREEN — GO all variants

---

## 1. Product Line Overview

```
VN-CUAV-SIM-001 PRODUCT LINE — 4 VARIANTS + CORTEX
═══════════════════════════════════════════════════

                     ┌──────────────────────────────┐
                     │       COMMON PLATFORM         │
                     │  • MWI weapon modules (5 loại)│
                     │  • V-SMASH ballistic (6DOF)   │
                     │  • Unity 6 HDRP render engine  │
                     │  • Scoring + AAR engine        │
                     │  • Scenario library (shared)   │
                     │  • NFC auto-detect system      │
                     └──────────────┬────────────────┘
                                    │
         ┌──────────┬───────────────┼───────────────┬──────────┐
         │          │               │               │          │
    ┌────┴────┐ ┌───┴────┐   ┌─────┴─────┐   ┌────┴────┐     │
    │  LITE   │ │ FULL   │   │  FIXED    │   │ CORTEX  │     │
    │  (PA-2) │ │ (PA-6) │   │  (PA-8)   │   │ (PA-9)  │     │
    │         │ │        │   │           │   │         │     │
    │ 1 stn   │ │ 2-3stn │   │ 2 stn     │   │ Multi-  │     │
    │ 180°    │ │ 360°   │   │ 240°      │   │ node    │     │
    │ Xuồng   │ │ Tàu    │   │ NO motion │   │ Xuồng+  │     │
    │ motion  │ │ motion │   │ Đảo/Giàn/ │   │ Đảo+    │     │
    │         │ │ Shared │   │ Cảng scene│   │ Tàu     │     │
    │ 1 xạ thủ│ │ deck   │   │ 2 xạ thủ  │   │ Joint   │     │
    │         │ │ 2-3 kíp│   │ + chỉ huy │   │ SWARM   │     │
    │$50-70K  │ │$120-   │   │$55-80K    │   │ $300K+  │     │
    │         │ │  200K  │   │           │   │ /site   │     │
    └─────────┘ └────────┘   └───────────┘   └─────────┘     │
         │          │               │               │          │
         └──────────┴───────────────┴───────────────┘          │
                            │                                  │
                     ┌──────┴──────┐                           │
                     │ CORTEX C2   │◄──────────────────────────┘
                     │ Command Hub │
                     │ (Sở chỉ huy │
                     │  liên quân)  │
                     └─────────────┘
```

---

## 2. 4 Variants — Detailed Comparison

| Hạng mục             | LITE (PA-2)           | FULL (PA-6)           | FIXED (PA-8)                                              | CORTEX (PA-9)                |
| -------------------- | --------------------- | --------------------- | --------------------------------------------------------- | ---------------------------- |
| **Vị trí bắn**       | 1                     | 2-3                   | **2** (phòng thủ 2 hướng)                                 | N nodes (LITE + FIXED + FULL) |
| **Xạ thủ**           | 1                     | 2-3 + chỉ huy         | **2 + chỉ huy**                                            | Multi-kíp + Sở chỉ huy       |
| **FOV**              | 180°                  | 360°                  | **240°** (4 projector, phủ 2 sectors)                      | Per node                     |
| **Nơi lắp đặt**      | Phòng huấn luyện 6×8m | Phòng 10×10m          | **Phòng huấn luyện 8×8m**                                  | Multi-site                   |
| **Weapon modules**   | MWI 5 loại            | Mỗi station riêng     | **MWI 5 loại** — mỗi station riêng                        | Per node                     |
| **Motion**           | 2-DOF seat (xuồng)    | Shared deck (tàu)     | **KHÔNG** — cơ sở cố định (không lắc)                      | Per node type                |
| **Kịch bản đặc thù** | Anti-UAV/USV từ **xuồng nhỏ** | Anti-UAV/USV từ **tàu chiến** (crew coordination) | Anti-UAV/USV từ **đảo/nhà giàn/cảng** (2 xạ thủ phối hợp) | **Phối hợp xuồng + đảo + tàu** (tổng hợp) |
| **Render**           | 1× RTX 4090           | 1-2× RTX 4080/4090    | **1× RTX 4090** (4 viewport 240°)                          | Per node + C2 server         |
| **Audio**            | 5.1                   | 7.1                   | **5.1** + outdoor ambience (sóng, gió đảo)                | Per node                     |
| **Instructor**       | 1 PC, 2 mon           | 1 PC, 3 mon           | **1 PC, 2 mon**                                            | **C2 Hub: tổng chỉ huy**     |
| **Swarm**            | 4-8                   | 12-20                 | **8-12** (+ seaborne approach patterns)                    | **20-50 shared battlespace** |
| **Scoring**          | Individual            | Crew composite        | **Crew coordination + defense outcome**                    | **Joint force composite**    |
| **Ruggedized**       | Indoor tiêu chuẩn     | Indoor tiêu chuẩn     | **Indoor tiêu chuẩn**                                      | Mixed                        |
| **Network**          | Standalone            | LAN internal          | **Standalone**                                              | **WAN encrypted (VPN/VSAT)** |
| **Giá**              | $50-70K               | $120-200K             | **$55-80K**                                                | $300K+/site                  |

---

## 3. FULL Architecture — PA-6

### 3.1 Bố Trí Vật Lý (Top View)

```
              ┌──────────────────────────────────┐
              │        10m × 10m ROOM             │
              │                                   │
              │   ╔═══════════════════════════╗    │
              │   ║ 360° CURVED SCREEN        ║   │
              │   ║ (8m diameter, 2m height)   ║   │
              │   ║                            ║   │
              │   ║    ┌────┐                  ║   │
              │   ║    │ ST3│ ← Lái phải       ║   │
              │   ║    │KPVT│   (120-240°)     ║   │
              │   ║    └────┘                  ║   │
              │   ║                            ║   │
              │   ║  ┌────┐        ┌────┐      ║   │
              │   ║  │ ST1│        │ ST2│      ║   │
              │   ║  │DSHK│        │ZU23│      ║   │
              │   ║  │Mũi │        │Lái │      ║   │
              │   ║  └────┘        └────┘      ║   │
              │   ║  (300-60°)    (150-270°)   ║   │
              │   ║                            ║   │
              │   ║    ┌───────────────┐       ║   │
              │   ║    │SHARED MOTION  │       ║   │
              │   ║    │DECK PLATFORM  │       ║   │
              │   ║    │   3m × 4m     │       ║   │
              │   ║    └───────────────┘       ║   │
              │   ╚═══════════════════════════╝    │
              │                                    │
              │   ┌──────────────┐                 │
              │   │ INSTRUCTOR   │                 │
              │   │ + COMMANDER  │                 │
              │   │ STATION      │                 │
              │   └──────────────┘                 │
              └────────────────────────────────────┘
```

### 3.2 Sector Assignment (Tương Tự Bố Trí Tàu Thực)

| Station | Vị trí | Sector chính | Sector phụ | Weapon mặc định |
|---------|--------|-------------|-----------|-----------------|
| ST1 — Mũi | Phía trước | 300°-060° (120°) | 270°-090° khi cần | DSHK 12.7mm |
| ST2 — Lái trái | Phía sau trái | 150°-270° (120°) | 120°-300° khi cần | ZU-23-2 23mm |
| ST3 — Lái phải (optional) | Phía sau phải | 120°-240° (120°) | 060°-300° khi cần | KPVT 14.5mm |

**Overlapping sectors = realistic crew coordination training.**
Chỉ huy kíp phân công: "ST1 bắn UAV mũi, ST2 bắn USV lái!" → huấn luyện communication + threat prioritization.

### 3.3 360° Display Options

| Option | **A: Cylindrical Projection** ★ | B: Multi-Screen Array | C: Mixed (180° proj + VR) |
|--------|---|---|---|
| Hardware | 6× projector short-throw trên trụ screen 360° Ø8m | 6-8× LCD 65" xếp thành vòng | 3× proj (LITE) + VR headset cho station 2-3 |
| FOV | 360° liên tục ✓ | ~340° (khe bezel) | 360° mixed |
| Immersion | Cao nhất | Trung bình | Khác biệt giữa stations |
| Cost | $8-12K (6 proj + fabric) | $10-16K (6-8 màn) | $5-8K |
| WX khả thi | Tự chế khung + vải ✓ | Mua sẵn ✓ | Mixed ✓ |

**★ Chọn Option A:** Cylindrical projection — 6 máy chiếu short-throw chiếu lên trụ vải hình trụ Ø8m × 2m. Tất cả xạ thủ nhìn cùng scene (crew coordination). Instructor nhìn từ ngoài vào.

### 3.4 Shared Deck Platform vs Independent Platforms

| | **A: Shared Deck** ★ | B: Independent × 3 |
|---|---|---|
| Nguyên lý | 1 platform lớn 3×4m, 4-6 actuators, tất cả nghiêng cùng | 3 platform nhỏ riêng lẻ |
| Cùng ship motion | ✓ Tất cả cảm nhận cùng sóng (realistic) | ✓ Nhưng sync phải chính xác |
| Cost | $4,000-6,000 (1 platform lớn) | $5,000-7,500 (3× $1,700-2,500) |
| Space | Hiệu quả hơn | Cần khoảng cách giữa platforms |
| Installation | Phức tạp hơn (nặng, bolt nhiều) | Dễ hơn (modular) |
| Realistic | **Đúng thực tế** — trên tàu tất cả cùng deck | Không realistic — mỗi người nghiêng riêng |

**★ Chọn Option A:** Shared Deck — tất cả xạ thủ trên cùng platform, cảm nhận cùng sóng. Đây là differentiator lớn: không ai khác làm shared deck cho multi-station naval sim ở tầm giá này.

### 3.5 Crew Coordination Features (FULL-exclusive)

| Feature | Mô tả |
|---------|-------|
| **Threat Assignment** | Chỉ huy kíp assign target cho từng station (voice + GUI) |
| **Sector Overlay** | Mỗi xạ thủ thấy sector mình (xanh) + sector đồng đội (vàng) |
| **Fire Discipline** | Cảnh báo nếu bắn vào sector đồng đội (friendly fire zone) |
| **Kill Confirmation** | Broadcast "target down" cho cả kíp khi 1 station hit |
| **Swarm Saturation** | 12-20 targets đồng thời, vượt khả năng 1 station → buộc phối hợp |
| **Communication Log** | Ghi voice commands (optional mic) → AAR replay có voice |
| **Crew Score** | Composite: individual scores + coordination bonus + penalty (sector violations, friendly fire) |

### 3.6 Networking Architecture

```
FULL System — Network Topology
═══════════════════════════════

  ┌────────────┐     ┌────────────┐     ┌────────────┐
  │ WEAPON MCU │     │ WEAPON MCU │     │ WEAPON MCU │
  │ Station 1  │     │ Station 2  │     │ Station 3  │
  │ (ESP32)    │     │ (ESP32)    │     │ (ESP32)    │
  └──────┬─────┘     └──────┬─────┘     └──────┬─────┘
         │ USB              │ USB              │ USB
         │                  │                  │
  ┌──────┴──────────────────┴──────────────────┴──────┐
  │              RENDER SERVER                         │
  │       Unity 6 + HDRP Multi-Viewport                │
  │       RTX 4090 (6 viewports → 6 projectors)       │
  │       OR 2× RTX 4080 (3+3 split)                  │
  │       V-SMASH × 3 instances (per station ballistic)│
  │       Swarm AI (12-20 targets, flocking+tactics)   │
  │       Crew scoring engine                          │
  └──────┬──────────────────┬──────────────────┬──────┘
         │ HDMI×6           │ UDP              │ LAN
         │                  │                  │
    6× Projector      Motion MCU        Instructor PC
    (360° cylinder)   (ESP32, shared    (3 monitors:
                       deck platform)    tactical map +
                                         3× trainee mirror)
```

---

## 3B. FIXED Architecture — PA-8 (Đảo / Nhà Giàn / Cảng)

### Concept

FIXED = **2 stations, 240° FOV, MWI, indoor** + **kịch bản Anti-UAV/USV từ vị trí cố định** + **KHÔNG có motion platform**.

Hệ thống lắp đặt trong phòng huấn luyện (8×8m). 2 xạ thủ phối hợp phòng thủ đảo/nhà giàn/cảng — mô phỏng bố trí 2 ụ súng trên đảo/giàn. Cả 4 variant đều huấn luyện Anti-UAV/USV — khác nhau ở **quy mô platform**: xuồng (LITE, 1 stn) → đảo/giàn/cảng (FIXED, 2 stn) → tàu chiến (FULL, 2-3 stn) → phối hợp liên quân (CORTEX).

### Khác Biệt So Với LITE

| Hạng mục | LITE (PA-2) | FIXED (PA-8) |
|----------|-------------|--------------|
| Stations | 1 station, 180° | **2 stations, 240°** (4 projector) |
| Xạ thủ | 1 | **2 + chỉ huy** |
| Motion platform | 2-DOF (xuồng roll/pitch) | **KHÔNG** — mô phỏng vị trí cố định |
| Kịch bản | Anti-UAV/USV từ **xuồng nhỏ** | Anti-UAV/USV từ **đảo/nhà giàn/cảng** |
| Approach pattern | Mọi hướng (xuồng di động) | **Seaborne approach** — UAV/USV đến từ biển |
| Environment render | Boat-based (deck xuồng, horizon tilt) | **Shore-based** (đảo san hô, nhà giàn DK1, cảng quân sự) |
| Audio ambience | Sóng + engine xuồng | **Sóng + gió đảo + alarm** (không engine) |
| Nơi lắp đặt | Phòng huấn luyện 6×8m | **Phòng huấn luyện 8×8m** |
| Ruggedized | Indoor tiêu chuẩn | Indoor tiêu chuẩn |
| Network | Standalone | Standalone |
| Scoring | Individual | **Crew coordination + defense outcome** |

### Kịch Bản FIXED-Exclusive

| # | Tên | Mục tiêu |
|---|-----|----------|
| FXD-01 | Single UAV recon đảo | Phát hiện + tiêu diệt UAV trinh sát bay quanh đảo |
| FXD-02 | FPV kamikaze tấn công nhà giàn | UAV lao thẳng, thời gian phản ứng < 10s |
| FXD-03 | USV tiếp cận cảng | USV explosive approach từ 3 hướng |
| FXD-04 | Swarm 4 UAV tấn công đảo | 4 UAV phân tán từ nhiều góc |
| FXD-05 | Mixed UAV+USV tấn công nhà giàn DK1 | 2 UAV + 1 USV đồng thời |
| FXD-06 | Night defense — cảng | Ban đêm, tầm nhìn hạn chế, 2 FPV |
| FXD-07 | Decoy + real attack | 3 decoy drone + 1 USV explosive ẩn |

### 3D Environment Presets (FIXED)

| Scene | Mô tả |
|-------|-------|
| **ISLAND-01** | Đảo san hô Trường Sa — bãi cát, bê tông, radar, cọc tiêu |
| **ISLAND-02** | Đảo đá — vách đá, cầu cảng nhỏ, lô cốt |
| **DK1-01** | Nhà giàn DK1 — platform steel, 4 chân, helipad, sóng lớn |
| **PORT-01** | Cảng quân sự — cầu tàu, kho, cẩu, tàu neo đậu |
| **PORT-02** | Cảng dân sự — container, bến phà, vùng cấm bắn (IFF training) |

### Chi Phí FIXED (PA-8)

| Hạng mục | So với LITE | Chi phí |
|----------|-------------|---------|
| SS1 Weapon station × 2 (cradle + WM) | ×2 so với LITE | $2,660 |
| SS2 Display (4 proj 240° + screen) | +1 projector so với LITE | $5,200-6,700 |
| SS2 Render PC | Giống LITE (4 viewport thay 3) | $3,500 |
| SS3 Motion | **LOẠI BỎ** | **$0** (tiết kiệm ~$1,600-2,400 so với LITE) |
| SS4+SS5 Scenario + Integration | +crew coordination SW | $1,500-2,000 |
| 3D content (5 island/port scenes) | Mới — chỉ SW, 1 lần cho toàn product line | $2,000-3,000 (SW dev) |
| **TOTAL FIXED R&D** | | **~$14,860-17,860** |
| **Sell price** | | **$55-80K** |
| **Margin** | | **73-81%** |

**FIXED vs LITE:** +1 weapon station (+$1,330), +1 projector (+$1,300), +crew scoring SW (+$300), −motion (−$1,600-2,400 HW, −$1,500 SW), +3D scene content ($2-3K, dùng chung). Net: FIXED R&D thấp hơn FULL nhưng cao hơn LITE do 2 stations.

---

## 3C. CORTEX Architecture — PA-9 (Liên Quân Bờ + Tàu)

### Concept

CORTEX = **nhiều node** (FULL trên tàu + FIXED trên đảo/cảng) kết nối qua **WAN encrypted** vào **C2 Command Hub** (Sở chỉ huy). Huấn luyện phòng thủ liên quân chống swarm UAV/USV tấn công đồng thời nhiều mục tiêu.

### CORTEX Topology

```
                    ┌─────────────────────────┐
                    │     C2 COMMAND HUB       │
                    │  (Sở chỉ huy Vùng)      │
                    │                         │
                    │  • Tactical overview     │
                    │  • Force allocation      │
                    │  • Joint AAR             │
                    │  • Swarm distribution    │
                    │  • 4× large displays     │
                    └─────────┬───────────────┘
                              │ WAN Encrypted
                              │ (VPN / VSAT / fiber)
              ┌───────────────┼───────────────┐
              │               │               │
     ┌────────┴────┐  ┌──────┴──────┐  ┌─────┴──────┐
     │  NODE A     │  │  NODE B     │  │  NODE C    │
     │  FULL       │  │  FIXED      │  │  LITE      │
     │  (Tàu TT400)│  │  (Đảo TS)  │  │  (Xuồng)  │
     │  3 stations │  │  1 station  │  │  1 station │
     │  360°, deck │  │  180°, no   │  │  180°,     │
     │  motion     │  │  motion     │  │  motion    │
     └─────────────┘  └─────────────┘  └────────────┘
              │               │               │
              └───────────────┴───────────────┘
                    SHARED BATTLESPACE
                    20-50 targets (swarm)
                    Real-time sync ~100ms
```

### CORTEX-Exclusive Features

| Feature | Mô tả |
|---------|-------|
| **Shared Battlespace** | Tất cả nodes nhìn cùng swarm — target bị tiêu diệt ở Node A biến mất ở Node B |
| **Swarm Distribution** | C2 Hub phân bổ swarm targets vào battlespace — 20 UAV + 10 USV cùng lúc |
| **Force Allocation** | Chỉ huy phân công: "Node A lo sector Bắc, Node C lo cảng phía Nam" |
| **Cross-Node Handoff** | Target bay từ sector Node B → Node A → tự động handoff tracking |
| **Joint Scoring** | Combined: individual station + node crew + **joint force effectiveness** |
| **Joint AAR** | Replay toàn battlespace từ mọi node, synchronized timeline |
| **Communication** | Voice intercom giữa nodes (encrypted, simulated radio protocol) |
| **Latency Budget** | WAN sync ≤ 100ms node-to-node (acceptable cho swarm — not twitch) |

### Kịch Bản CORTEX-Exclusive

| # | Tên | Nodes | Mục tiêu |
|---|-----|-------|----------|
| CTX-01 | Coordinated island defense | 2 FIXED (2 đảo) | 8 UAV swarm tấn công 2 đảo cùng lúc |
| CTX-02 | Ship + shore defense | 1 FULL + 1 FIXED | 10 UAV + 4 USV — tàu bảo vệ đảo |
| CTX-03 | Port saturation attack | 2 FIXED (cảng + đảo gác) | 20 targets — cảng là mục tiêu chính |
| CTX-04 | Full joint exercise | 1 FULL + 2 FIXED | 30 targets, 3 waves, 30 phút liên tục |
| CTX-05 | C2 overload test | 1 FULL + 2 FIXED | 50 targets — test khả năng chỉ huy phân bổ |
| CTX-06 | Night joint defense | All nodes | Ban đêm, communications only (NVG + voice) |

### C2 Command Hub Hardware

| Hạng mục | Chi phí |
|----------|---------|
| Server: Xeon/EPYC + RTX 4080 + 128GB RAM | $5,000-8,000 |
| 4× Display 55" (tactical map + 3 node mirrors) | $3,000-5,000 |
| Network: managed switch + VPN router + VSAT (if remote) | $2,000-5,000 |
| Voice intercom server (encrypted) | $1,000-2,000 |
| CORTEX software license (per node connection) | $5,000/node |
| **C2 Hub total** | **~$16,000-25,000** |
| **Per node software upgrade** (CORTEX-ready) | **+$5,000** |

### Chi Phí CORTEX Deployment (Ví dụ: 1 FULL + 2 FIXED)

| Component | Chi phí |
|-----------|---------|
| 1× FULL node (PA-6, 3-station) | $150-200K |
| 2× FIXED node (PA-8) | 2× $45-65K = $90-130K |
| 1× C2 Command Hub | $16-25K |
| CORTEX software (3 nodes) | 3× $5K = $15K |
| WAN infrastructure (VPN/VSAT) | $5-15K |
| **TOTAL CORTEX deployment** | **~$276-385K** |

---

## 4. Cost Estimate — FULL (PA-6)

### 4.1 Hardware BOM

| Hạng mục | LITE (PA-2) | FULL 2-station | FULL 3-station |
|----------|-------------|----------------|----------------|
| **SS1 Cradle** | 1× $780 | 2× $780 = $1,560 | 3× $780 = $2,340 |
| **SS1 Weapon modules** | 2× WM (Phase 1) $1,385 | 2× WM $1,385 | 3× WM $2,085 |
| **SS2 Projectors** | 3× $1,200 = $3,600 | 6× $1,200 = $7,200 | 6× $1,200 = $7,200 |
| **SS2 Screen** | 1× curved 4m $400 | 1× cylinder Ø8m $800 | 1× cylinder Ø8m $800 |
| **SS2 Render PC** | 1× $3,500 | 1× $4,500 (4090) | 2× $3,000 (4080×2) = $6,000 |
| **SS2 Audio** | 5.1 $500 | 7.1 $700 | 7.1 $700 |
| **SS3 Platform** | 1× 2-DOF $2,000 | Shared deck $4,500 | Shared deck $5,500 |
| **SS3 Seats** | 1× $350 | 2× $350 = $700 | 3× $350 = $1,050 |
| **SS5 Instructor PC** | 1× $1,750 | 1× $2,200 (3 mon) | 1× $2,200 (3 mon) |
| **SS5 UPS** | 1× $400 | 1× $600 (3kVA) | 1× $800 (3kVA) |
| **SS5 Network + rack** | $350 | $500 | $600 |
| **SS5 Flight cases** | 4× $150 = $600 | 6× $150 = $900 | 7× $150 = $1,050 |
| **HW TOTAL** | **~$14,615** | **~$24,545** | **~$30,325** |
| **SW dev (incremental from LITE)** | $8,000 | +$8,000 (networking + crew) | +$10,000 |
| **TOTAL R&D** | **~$22,615** | **~$32,545** | **~$40,325** |

### 4.2 Pricing Strategy

| Variant | Cost | Sell Price | Margin |
|---------|------|-----------|--------|
| **LITE** (1 station, 2 modules) | ~$23K | $50-70K | 55-73% |
| **FULL-2** (2 stations, 2 modules) | ~$33K | $120-150K | 64-78% |
| **FULL-3** (3 stations, 3 modules) | ~$40K | $150-200K | 73-80% |
| **Weapon module add-on** | $500-900 | $3,000-3,500 | 75-85% |

**Business model:** Bán LITE trước (demo, build trust) → upsell FULL cho training centers.

---

## 5. Kịch Bản FULL-Exclusive

| # | Tên | Mục tiêu huấn luyện | Loại |
|---|-----|---------------------|------|
| CREW-01 | Single UAV — sector handoff | Mục tiêu bay qua 2 sectors, xạ thủ phải handoff | Phối hợp |
| CREW-02 | USV approach — primary + backup | 1 USV thẳng vào mũi, ST1 chính, ST2 backup | Phối hợp |
| CREW-03 | Dual threat — split attention | 1 UAV + 1 USV cùng lúc, 2 hướng khác nhau | Phân công |
| CREW-04 | Swarm 8 — sector defense | 8 UAV swarm từ nhiều hướng, phải phân vùng bắn | Phối hợp |
| CREW-05 | Swarm 12 — saturation | 12 targets vượt khả năng → buộc prioritize + let go | Stress test |
| CREW-06 | Swarm 20 — overload | 20 targets, test communication breakdown | Extreme |
| CREW-07 | Night mixed — FPV + USV | 3 FPV kamikaze + 2 USV ban đêm | Multi-threat |
| CREW-08 | Decoy + main attack | 4 UAV decoy + 1 USV real threat ẩn | Judgment |
| CREW-09 | Friendly fire discipline | Helicopter bay qua sector — KHÔNG BẮN | IFF training |
| CREW-10 | Full mission — 30 phút liên tục | Nhiều wave, tăng dần khó, kíp phải rotate focus | Endurance |

---

## 6. IRONMESH Platform Reuse

| Component | LITE → FULL | Reuse % |
|-----------|-------------|---------|
| MWI weapon modules | 100% — same modules, same NFC | 100% |
| V-SMASH ballistic engine | Multi-instance — 1 per station | 100% |
| Scenario engine | Extended — crew scenarios layer on top | 80% |
| Scoring engine | Extended — add crew composite score | 70% |
| AAR system | Extended — multi-station replay + voice | 60% |
| Motion controller | Shared deck = new firmware, same MCU | 50% |
| Instructor station | Extended — 3 monitors + tactical map | 40% |

**Estimated 70% code reuse LITE → FULL.** Major new: networking layer + crew scoring + 360° render + tactical map.

---

## 7. Development Timeline

```
LITE (PA-2)                     FULL (PA-6)
═══════════                     ═══════════
Month 0-12: LITE dev            
Month 6: LITE PoC demo         
Month 12: LITE delivery        Month 12-18: FULL dev (parallel from month 6)
                               Month 15: FULL integration test
                               Month 18: FULL delivery
```

**Critical path FULL:** 360° projection calibration + shared deck motion + crew networking. Start research at LITE month 6 (after single-station PoC validated).

---

## 8. Full Product Line — Upgrade Path

| Code | Tên | Stations | FOV | Motion | Nơi lắp | Price |
|------|-----|----------|-----|--------|---------|-------|
| PA-2 | **LITE STANDARD** | 1 | 180° | 2-DOF seat | Phòng HL | $50-70K |
| PA-2+ | LITE + Weapon Pack | 1 | 180° | 2-DOF seat | Phòng HL | $56-77K |
| PA-3 | LITE ENHANCED | 1 | 180° | 3-DOF + heave | Phòng HL | $70-90K |
| **PA-6** | **FULL 2-STATION** | **2** | **360°** | **Shared deck** | Phòng HL lớn | **$120-150K** |
| **PA-6+** | **FULL 3-STATION** | **3** | **360°** | **Shared deck** | Phòng HL lớn | **$150-200K** |
| **PA-8** | **FIXED** | **1** | **180°** | **Không** | **Đảo/nhà giàn/cảng** | **$45-65K** |
| **PA-9** | **CORTEX** | **N nodes** | **Per node** | **Per node** | **Multi-site** | **$300K+** |

### Product Line Logic

```
Tàu chiến ──→ LITE (1 xạ thủ) ──→ FULL (kíp bắn 2-3) ──┐
                                                           │
Đảo/Nhà giàn/Cảng ──→ FIXED (1 xạ thủ, cố định) ────────┤
                                                           │
                                              ┌────────────┘
                                              ▼
                                     CORTEX (liên quân)
                                     Tàu + Đảo + Cảng
                                     Shared battlespace
                                     20-50 swarm targets
                                     C2 Command Hub
```

### Revenue Model

```
Phase 1: LITE demo ($50-70K) → build trust
Phase 2: FIXED deploy đảo/cảng ($45-65K × 5-10 units)  → volume
Phase 3: FULL upsell training centers ($120-200K)       → high-value
Phase 4: CORTEX joint exercise ($300K+)                  → flagship
         + weapon modules ($3-3.5K each)                 → recurring
         + annual scenario updates                       → recurring
         + CORTEX node licenses ($5K/node)               → recurring
```

---

## 9. Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-07 | **Product line split: LITE + FULL** | FULL = crew coordination 360° swarm, tương tự bố trí tàu chiến thực. PRESTUDY 7/7 GREEN. 70% reuse từ LITE. |
| 2026-04-07 | Shared deck platform (not independent) | Realistic — trên tàu tất cả cùng deck. Differentiator vs competitors. Cost-effective. |
| 2026-04-07 | 360° cylindrical projection (FULL only) | Crew cần shared visual space. 6 projectors on fabric cylinder Ø8m. |
| 2026-04-07 | **FIXED variant (PA-8)** | 1 station (giống LITE) lắp trong phòng huấn luyện. Không motion (mô phỏng vị trí cố định). Kịch bản phòng thủ đảo/cảng. 5 scene presets (Trường Sa, DK1, cảng). |
| 2026-04-07 | **CORTEX variant (PA-9)** | Liên quân bờ + tàu. Multi-node (FULL + FIXED) qua WAN. Shared battlespace 20-50 targets. C2 Command Hub. Joint scoring + AAR. |
| 2026-04-07 | FIXED = 1 station (CEO clarification) | FIXED giống LITE hardware, khác ở: không motion, kịch bản cố định (đảo/nhà giàn/cảng). **KHÔNG ruggedized — cùng indoor standard.** |
| 2026-04-07 | Naming: PA-8 (FIXED), PA-9 (CORTEX) | PA-2/3 = LITE, PA-6/6+ = FULL, PA-8 = FIXED, PA-9 = CORTEX |
| 2026-04-07 | **FIXED = 2 stn, 240°, indoor, no motion** | CEO xác nhận: FIXED lắp trong phòng (indoor), 2 stations 240° FOV (4 projectors), không motion (cố định). Mô phỏng bố trí 2 ụ súng trên đảo/nhà giàn/cảng. Giá $55-80K. |
| 2026-04-07 | **Product line = quy mô platform** | CEO xác nhận: cả 4 variant đều Anti-UAV/USV, phân biệt theo quy mô: LITE = xuồng nhỏ (1 stn), FIXED = đảo/nhà giàn/cảng (2 stn), FULL = tàu chiến (2-3 stn), CORTEX = phối hợp xuồng + đảo + tàu (tổng hợp). |
