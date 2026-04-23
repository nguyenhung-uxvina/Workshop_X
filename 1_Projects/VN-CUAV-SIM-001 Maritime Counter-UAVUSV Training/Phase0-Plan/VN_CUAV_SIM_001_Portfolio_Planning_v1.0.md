---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 Product Line Extension
version: v1.0
project: VN-CUAV-SIM-001
status: active
lead_product: PA-2 LITE
variants: [LITE, FIXED, FULL, CORTEX]
tags: [#type/project, #status/active]
---

# Portfolio Planning — VN-CUAV-SIM-001 Product Line
## Maritime Counter-UAV/USV Shooting Training System Family

---

## 1. Portfolio Overview

### Product Line Philosophy
Một nền tảng chung (Common Platform) → 4 biến thể phục vụ 4 phân khúc khách hàng khác nhau. Mỗi biến thể chia sẻ ≥70% SW và ≥50% HW với lead product (LITE).

### Product Line Map

```
              COMPLEXITY / PRICE
    LOW ◄────────────────────────────► HIGH
     │                                  │
     │  LITE        FIXED    FULL       │  CORTEX
     │  $50-70K     $55-80K  $120-200K  │  $300K+
     │  ●───────────●────────●──────────│──●
     │  1 stn       2 stn   2-3 stn    │  N nodes
     │  xuồng       đảo/cảng tàu chiến │  liên quân
     │  individual  pair     crew       │  joint force
     │                                  │
    SINGLE OPERATOR ◄──────────────► MULTI-SITE EXERCISE
```

---

## 2. Variant Comparison Matrix

| | **LITE (PA-2)** | **FIXED (PA-8)** | **FULL (PA-6)** | **CORTEX (PA-9)** |
|---|---|---|---|---|
| **Tên gọi** | Bệ bắn đơn | Trạm phòng thủ cố định | Hệ thống tàu chiến | Trung tâm liên quân |
| **Khách hàng** | Lữ đoàn HQ, trung đội | Đảo, nhà giàn, cảng quân sự | Tàu chiến (frigate, corvette) | Vùng HQ, Bộ TL HQ |
| **Xạ thủ** | 1 | 2 + chỉ huy | 2-3 + chỉ huy kíp | Multi-kíp + sở chỉ huy |
| **FOV** | 180° (3 screen) | 240° (4 screen) | 360° (6 screen cylindrical) | Per node |
| **Motion** | 2-DOF seat (ship roll/pitch) | KHÔNG (cố định, không lắc) | Shared deck platform (tàu) | Per node type |
| **Vũ khí** | MWI 1 module | MWI 2 modules | MWI 2-3 modules | Per node |
| **Kịch bản** | Anti-UAV/USV từ xuồng nhỏ | Phòng thủ đảo/giàn/cảng 2 hướng | Crew coordination trên tàu | Joint: bờ + tàu chống swarm |
| **Swarm** | 4-8 targets | 8-12 targets | 12-20 targets | 20-50 shared battlespace |
| **Scoring** | Individual | Pair coordination | Crew composite | Joint force composite |
| **Network** | Standalone | Standalone | LAN internal | WAN encrypted (VPN/VSAT) |
| **Phòng** | 6×8m | 8×8m | 10×10m | Multi-site |
| **Giá** | **$50-70K** | **$55-80K** | **$120-200K** | **$300K+/site** |
| **Revenue model** | Unit sale + MWI modules | Unit sale + scenarios | Unit + annual support | System + CLS contract |

---

## 3. Điểm Khác Biệt Giữa Các Variant

### 3a. LITE vs FIXED
| | LITE | FIXED |
|---|---|---|
| **Giống** | MWI weapon system, scoring engine, scenario library, Unity render | Same |
| **Khác: Hardware** | 2-DOF motion platform | KHÔNG có motion (đảo cố định) |
| **Khác: Kịch bản** | Ship-based (sóng, di chuyển) | Shore-based (cố định, UAV đến từ biển) |
| **Khác: Đào tạo** | Bắn trên tàu đang chuyển động | Phòng thủ điểm cố định, phối hợp 2 xạ thủ |
| **Khác: FOV** | 180° (1 hướng đe dọa) | 240° (2 sectors phòng thủ) |
| **Conversion** | LITE + 1 station + 1 projector = FIXED | Remove motion, add 2nd station + 4th projector |

### 3b. LITE vs FULL
| | LITE | FULL |
|---|---|---|
| **Giống** | MWI, ballistic, Unity, scoring | Same |
| **Khác: Scale** | 1 xạ thủ | 2-3 xạ thủ + chỉ huy kíp |
| **Khác: Display** | 3-screen flat 180° | 6-projector cylindrical 360° |
| **Khác: Motion** | Individual 2-DOF seat | Shared deck platform (all feel same ship motion) |
| **Khác: Training** | Individual skill | **Crew coordination** (communication, threat prioritization) |
| **Khác: Cost** | $50-70K | $120-200K (2-3× HW, shared deck + cylindrical screen) |

### 3c. CORTEX — Khác biệt bản chất
CORTEX không phải là variant — là **hệ thống liên kết** nhiều nodes (LITE + FIXED + FULL) qua WAN:
- C2 Hub: sở chỉ huy liên quân, real-time shared battlespace
- Synchronized scenario: cùng swarm attack, mỗi node đối phó từ vị trí khác
- Joint force scoring: đánh giá phối hợp giữa tàu + đảo + xuồng

---

## 4. Common Platform — Shared Components

| Component | Shared Across | Variant-Specific |
|-----------|---------------|-----------------|
| **MWI weapon modules** (5 types: DSHK, NSV, KPVT, ZU-23-2, PKM) | ✓ All variants | Mounting bracket differs |
| **NFC auto-detect** | ✓ All | — |
| **V-SMASH ballistic engine** | ✓ All | Weapon params differ |
| **Unity render engine** | ✓ All | Scene assets differ (ship vs island vs dock) |
| **Scoring + AAR engine** | ✓ All | Individual vs crew vs joint modes |
| **Scenario library** | ✓ All (shared base) | Variant-specific scenarios added |
| **Instructor station SW** | ✓ All | Multi-station management for FULL/CORTEX |
| **LoRa/network protocol** | ✓ All | CORTEX adds WAN layer |

**Platform reuse estimate:** SW ~80% shared, HW ~50% shared (weapon modules + electronics + compute).

---

## 5. Lộ Trình Phát Triển (Roadmap)

```
2026         2027              2028              2029
──────────── ──────────────── ──────────────── ────────────
Q2  Q3  Q4   Q1  Q2  Q3  Q4   Q1  Q2  Q3  Q4

LITE ████████ ████
     Phase2-3  Phase4  PRODUCTION ──────────────────────►
     Prototype  FAT     First delivery

FIXED              ████████
                   Phase2-4  (reuse LITE platform - motion)
                   Prototype PRODUCTION ────────────────►

FULL                         ████████████
                             Phase2-4 (shared deck + 360°)
                             Prototype  PRODUCTION ─────►

CORTEX                                      ████████████
                                            Phase2-4 (WAN + C2)
                                            Pilot     PRODUCTION
```

### Roadmap Logic
1. **LITE first** — lead product, validates platform, generates revenue
2. **FIXED second** — lowest delta from LITE (remove motion, add station) → fastest variant
3. **FULL third** — requires shared deck platform + 360° screen → more R&D
4. **CORTEX last** — requires LITE + FIXED + FULL deployed, then network layer → Phase 2+ of ecosystem

### Milestone Gates per Variant

| Variant | Gate 0 | Gate 1 | Gate 2 | Gate 3 | Gate 4 | First Delivery |
|---------|--------|--------|--------|--------|--------|---------------|
| LITE | ✅ PASS | ✅ APPROVE 3.70 | Pending | — | — | 2027 Q1 |
| FIXED | ✅ PASS (implied) | 2026 Q4 | 2027 Q1 | 2027 Q2 | 2027 Q3 | 2027 Q4 |
| FULL | ✅ PASS (implied) | 2027 Q1 | 2027 Q2 | 2027 Q3 | 2027 Q4 | 2028 Q1 |
| CORTEX | Concept only | 2027 Q4 | 2028 Q1 | 2028 Q2 | 2028 Q3 | 2028 Q4 |

---

## 6. Phạm Vi Ứng Dụng (Application Scope)

### 6a. Theo Đơn Vị Quân Đội

| Đơn vị | LITE | FIXED | FULL | CORTEX |
|--------|------|-------|------|--------|
| Lữ đoàn HQ (167, 171, 125) | ✓ | — | ✓ | ✓ |
| Hải đội tàu chiến | ✓ | — | ✓ | ✓ |
| Đảo, nhà giàn DK1 | — | ✓ | — | ✓ |
| Cảng quân sự (Cam Ranh, Vũng Tàu) | — | ✓ | — | ✓ |
| Vùng HQ (1-5) | — | — | — | ✓ |
| Bộ Tư lệnh HQ | — | — | — | ✓ |
| Trường Sĩ quan HQ | ✓ | ✓ | ✓ | — |

### 6b. Theo Kịch Bản Huấn Luyện

| Kịch bản | LITE | FIXED | FULL | CORTEX |
|----------|------|-------|------|--------|
| FPV kamikaze drone attack | ✓ | ✓ | ✓ | ✓ |
| Explosive USV straight approach | ✓ | ✓ | ✓ | ✓ |
| USV zigzag jinking | ✓ | ✓ | ✓ | ✓ |
| Drone swarm (4-8) | ✓ | ✓ | ✓ | ✓ |
| Large swarm (12-20) | — | ✓ | ✓ | ✓ |
| Multi-vector air+sea simultaneous | — | ✓ | ✓ | ✓ |
| Crew coordination (multi-station) | — | ✓ | ✓ | ✓ |
| Night/NVG operations | ✓ | ✓ | ✓ | ✓ |
| FLIR/thermal target acquisition | Phase 2 | Phase 2 | Phase 2 | Phase 2 |
| Joint force C-UAV exercise | — | — | — | ✓ |
| Saturated swarm (20-50) defense | — | — | — | ✓ |

### 6c. Theo Thị Trường

| Thị trường | LITE | FIXED | FULL | CORTEX |
|-----------|------|-------|------|--------|
| **VN Hải quân** (primary) | ✓ | ✓ | ✓ | ✓ |
| VN Biên phòng (coastal) | ✓ | ✓ | — | — |
| VN Cảnh sát biển | ✓ | — | — | — |
| **Export ASEAN** (future) | ✓ | ✓ | ✓ | — |
| Export Middle East/Africa | ✓ | ✓ | — | — |

---

## 7. Revenue Model per Variant

| Revenue Stream | LITE | FIXED | FULL | CORTEX |
|---------------|------|-------|------|--------|
| **Unit sale** | $50-70K | $55-80K | $120-200K | $300K+/site |
| **MWI weapon modules** ($3-5K each, 5 types) | ✓ | ✓ | ✓ | ✓ |
| **Scenario packs** ($5-10K/pack) | ✓ | ✓ | ✓ | ✓ |
| **Annual SW update** ($3-5K/yr) | ✓ | ✓ | ✓ | ✓ |
| **CLS contract** (maintenance + support) | Optional | Optional | Included | Included |
| **Training service** (instructor course) | $2-5K | $2-5K | $5-10K | $10-20K |

### 5-Year Revenue Projection [L4-ESTIMATE]

| Year | LITE units | FIXED | FULL | CORTEX | Revenue |
|------|-----------|-------|------|--------|---------|
| 2027 | 5 | — | — | — | $300-350K |
| 2028 | 10 | 3 | 1 | — | $900K-1.2M |
| 2029 | 15 | 5 | 2 | 1 | $1.8-2.5M |
| 2030 | 10 | 5 | 3 | 1 | $1.5-2.2M |
| 2031 | 8 | 4 | 2 | 2 | $1.4-2.0M |
| **5yr total** | **48** | **17** | **8** | **4** | **$5.9-8.2M** |

---

## 8. Development Efficiency — Platform Leverage

| Variant | Delta từ LITE | Estimated NRE | Time to Market (sau LITE) |
|---------|--------------|---------------|--------------------------|
| **LITE** (lead) | Baseline | $18-28K | Baseline (12-15 tháng) |
| **FIXED** | −motion +1station +1projector +island scenes | ~$8-12K | 3-4 tháng |
| **FULL** | +shared deck +360° screen +crew SW +multi-station | ~$25-40K | 6-9 tháng |
| **CORTEX** | +WAN layer +C2 hub +joint scoring +shared battlespace | ~$40-60K | 9-12 tháng |

**Total portfolio NRE: ~$91-140K** (vs building each from scratch: ~$300-400K)
**Platform savings: ~60-65%**

---

## 9. Risk per Variant

| Variant | Primary Risk | Mitigation |
|---------|-------------|------------|
| LITE | Maritime visual TRL 3 | Asset store + custom shader dev |
| FIXED | Market: đảo/giàn là niche nhỏ | Bundle with CORTEX for Vùng HQ contract |
| FULL | Shared deck platform complexity | 2-DOF individual seats as fallback (same as 3× LITE) |
| CORTEX | WAN latency for real-time shared battlespace | Accept 100ms sync delay (non-critical for training) |

---

## 10. CEO Decisions for Portfolio

| Decision | Status | Date |
|----------|--------|------|
| 4-variant product line confirmed | ✅ | 2026-04-07 |
| LITE = lead product | ✅ | 2026-04-06 |
| FIXED = LITE indoor − motion | ✅ | 2026-04-07 |
| FULL = shared deck + 360° | ✅ | 2026-04-07 |
| CORTEX = multi-node WAN | ✅ | 2026-04-07 |
| Common Platform architecture | ✅ | 2026-04-07 |
| MWI 5 weapon types shared | ✅ | 2026-04-07 |
| FIXED second, FULL third, CORTEX last | Pending CEO confirm | — |
| Export market timing | Pending | — |

---

*Portfolio Planning VN-CUAV-SIM-001 v1.0*
*Extends Product Planning (single product) → Product Line strategy (4 variants)*
*Source: Product_Line_Architecture_v1.2 + FORGE pipeline + 4 TNKCT documents*
