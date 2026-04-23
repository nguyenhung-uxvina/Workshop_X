---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.1
project: VN-CUAV-SIM-001
status: approved
scope: PORTFOLIO
lead_product: LITE PA-2
variants_existing: 4 (LITE, FIXED, FULL, CORTEX)
variants_new: 5 (MOBILE, WEAPON-MOD, EXPORT-LITE, HYBRID-BRIDGE, AAR-SaaS)
variants_total: 9
variant_sequence: "LITE → FIXED (+Army) → FULL → WEAPON-MOD → MOBILE → CORTEX → EXPORT-LITE → AAR-SaaS → HYBRID-BRIDGE"
export: "EXPORT-LITE after 5+ domestic units delivered"
platform_reuse: "≥70% SW shared, ≥50% HW shared"
supersedes: VN_CUAV_SIM_001_Portfolio_Planning_v1.0.md
changelog: "v1.1 — Musk+Hwang --ex expansion. 4→9 products. ARMY merged into FIXED (scenario pack). DESKTOP eliminated. Layer 0 platform identified. CTF shared with VN-XUONG V9-TRAIN."
---

# Portfolio Planning — VN-CUAV-SIM-001 Training Platform

> Từ "Maritime Counter-UAV/USV Simulator" đến **"Human Motor Skill Training Platform with Visual Immersion + Performance Analytics"**
> Musk First Principles reframe: không phải C-UAV sim — là platform huấn luyện kỹ năng ngắm-bám-dẫn con người.

---

## 0. Strategic Reframe (Musk + Hwang)

### First Principles Deconstruction

Strip "C-UAV", "Maritime", "Simulator", "Navy" → core physics:

> **Hệ thống tạo kích thích thị giác/âm thanh/xúc giác thực tế để huấn luyện kỹ năng vận động con người (ngắm, bám, dẫn) chống mục tiêu di động, với đo lường hiệu suất tự động.**

Insight: UAV/USV chỉ là MỘT loại mục tiêu. Cùng platform phục vụ: mục tiêu trên không, mục tiêu mặt nước, mục tiêu mặt đất, mục tiêu tàu (chống hạm). "Weapon simulator" chỉ là ứng dụng hẹp của "motor skill training platform".

### Disruptive Innovation Map

```
INTERDEPENDENT ←────────────────────────────────────────→ MODULAR
CORTEX $300K+    FULL $150K     FIXED $70K    LITE $60K    MOBILE $5K
Multi-node WAN   360° deck      240° 2-stn    180° 1-stn   Tablet/VR
← sustaining ──────────────────────────── disruptive →
                                                    ↑
                                              Hwang disruption
                                              (non-consumption)
```

### 4-Layer Platform Architecture

```
Layer 0: CORE PLATFORM (shared by ALL 9 products)
  │   ├── Unity 6 LTS + HDRP render engine
  │   ├── V-SMASH 6DOF ballistic model
  │   ├── Scoring engine (ray-trace hit detection + 5-skill assessment)
  │   ├── AAR engine (3D replay + analytics + training profile)
  │   └── MWI interface protocol (weapon ↔ SW communication)
  │
  ├── Layer 1: HARDWARE MODULES
  │     ├── WEAPON-MOD     Standalone weapon mockup modules              $3-5K/module
  │     └── (MOTION-MOD    2-DOF motion platform — future standalone)
  │
  ├── Layer 2: INTEGRATED SYSTEMS (4 existing + FIXED Army expansion)
  │     ├── LITE    PA-2   3-screen 180°, 1 station, ship motion        $50-70K
  │     ├── FIXED   PA-8   4-screen 240°, 2 station, no motion          $55-80K
  │     │    └── +Army Scenario Pack (ground C-UAV, urban, checkpoint)   +$5-10K
  │     ├── FULL    PA-6   6-screen 360°, shared deck, 2-3 station      $120-200K
  │     └── CORTEX  PA-9   Multi-node WAN, C2 Hub                       $300-415K
  │
  ├── Layer 3: AI / CONTENT
  │     ├── ADAPTIVE-AI    AI instructor (ACH layer 6 mature)            SW upgrade
  │     ├── Army Pack      Ground C-UAV scenarios for FIXED              $5-10K add-on
  │     └── THREAT-UPDATE  New UAV/USV profiles subscription             $5K/yr
  │
  └── Layer 4: ECOSYSTEM
        ├── MOBILE          Tablet/VR individual trainer                  $3-5K
        ├── EXPORT-LITE     LITE international (English, generic)         $60-80K
        ├── AAR-SaaS        Standalone analytics subscription             $10-20K/yr
        ├── HYBRID-BRIDGE   BB-01 LOMAH integration (sim+live scoring)    $15-25K
        └── CTF             Common Training Framework (shared with VN-XUONG V9-TRAIN)
```

---

## 1. Portfolio Overview — All 9 Products

```
Price ($K)
  415 ┤                                              ● CORTEX
      │
  200 ┤                              ● FULL
      │
   80 ┤      ● FIXED (+Army)   ● EXPORT-LITE
   70 ┤          ● LITE
      │
   25 ┤                                   ● HYBRID-BRIDGE
   20 ┤                                        ● AAR-SaaS (/yr)
    5 ┤  ● WEAPON-MOD    ● MOBILE
    0 ├──────────────────────────────────────────────────────────
      LOW              MEDIUM              HIGH        VERY HIGH
                         Complexity
```

| ID | Tên | Mô tả | Layer | Price | Segment | Status |
|----|-----|-------|-------|-------|---------|--------|
| **LITE** | PA-2 Standard | 3-screen 180°, 1 station, 2-DOF motion | L2 | $50-70K | Lữ đoàn HQ, xuồng tuần tra | Phase 2 active |
| **FIXED** | PA-8 Coastal | 4-screen 240°, 2 station, no motion | L2 | $55-80K | Đảo, nhà giàn, cảng; **+Army pack cho lục quân** | Concept |
| **FULL** | PA-6 Warship | 6-screen 360°, shared deck, 2-3 station | L2 | $120-200K | Tàu chiến, hải đội | Concept |
| **CORTEX** | PA-9 Joint | Multi-node WAN, C2 Hub, 3-18 xạ thủ | L2 | $300-415K | Vùng HQ, Bộ TL HQ | Concept |
| **WEAPON-MOD** | HW Module | Standalone weapon mockup (MWI, 5 types) | L1 | $3-5K/mod | Bán kèm hoặc riêng, cho mọi Unity sim | **New** |
| **MOBILE** | Tablet/VR | Cá nhân, portable, gyro aim, no infra | L4 | $3-5K | Xạ thủ tự luyện, high volume | **New** |
| **EXPORT-LITE** | International | LITE + English UI + generic scenarios + intl cert | L4 | $60-80K | ASEAN navies, Africa | **New** |
| **AAR-SaaS** | Analytics | Standalone AAR analytics, subscription model | L4 | $10-20K/yr | Mọi đơn vị training (không chỉ WX sim) | **New** |
| **HYBRID-BRIDGE** | BB-01 Link | BB-01 LOMAH ↔ CUAV-SIM data bridge | L4 | $15-25K | Đơn vị có cả sim + live fire range | **New** |

---

## 2. Variant Details — New Products

### WEAPON-MOD: "Bộ Súng Mô Phỏng Lắp Rời" [Musk: Vertical Integration]

**Unique value:** MWI weapon mockup (CNC housing + rotary encoder + trigger + solenoid recoil + NFC auto-detect) bán riêng như hardware module. Bất kỳ Unity simulator nào cũng dùng được qua MWI protocol. WX tự sản xuất → vertical integration.

**5 module types:** DSHK 12.7mm ($4K), NSV 12.7mm ($4K), KPVT 14.5mm ($4.5K), ZU-23-2 23mm ($5K), PKM 7.62mm ($3K)

**Revenue logic:** Mỗi LITE/FIXED/FULL bán kèm 1-2 module. Đơn vị muốn đổi caliber → mua thêm module. VN-12.7MM-SIM (paused) scope HOÀN TOÀN được cover bởi WEAPON-MOD + LITE.

**HW shared with LITE:** 100% (cùng MWI design). **SW:** MWI protocol only. **NRE:** $10K (jig/fixture for CNC batch production).

### MOBILE: "Huấn Luyện Viên Bỏ Túi" [Hwang: Non-consumption]

**Unique value:** Tablet hoặc VR headset, $3-5K, xạ thủ tự luyện BẤT CỨ ĐÂU. Không cần phòng sim, không cần projector, không cần instructor. Gyroscope aim (tablet) hoặc controller aim (VR). Simplified V-SMASH ballistic. Auto-scoring + self-paced scenarios.

**Hwang insight:** Hiện tại 100% xạ thủ VN Navy = non-consumption (chưa có sim nào). MOBILE serve cấp CÁ NHÂN — đơn vị không cần mua hệ thống $50K+. Volume potential: 100-500 units (mỗi xạ thủ 1 tablet).

**HW shared with LITE:** 0% (khác hardware hoàn toàn). **SW shared:** 60% (V-SMASH simplified, scoring subset, AAR mini). **NRE:** $25K (tablet/VR app development).

### EXPORT-LITE: "LITE Quốc Tế" [Hwang: New Market Disruption]

**Unique value:** LITE hardware + English UI + generic scenarios (không VN-specific) + international documentation. Target: ASEAN navies (Philippines, Indonesia, Myanmar, Thailand), African navies. WX = 60-90% rẻ hơn Zen/Saab/Cubic/Elbit.

**Delta from LITE:** UI localization + scenario pack + documentation + certification package. Hardware 100% identical.

**Timing:** After 5+ domestic LITE units delivered (reference customer proof). CEO confirmed deferred.

**HW shared:** 100%. **SW shared:** 95% (chỉ UI + scenario khác). **NRE:** $15K (localization + cert docs).

### HYBRID-BRIDGE: "Cầu Nối Sim-Thực" [Cross-pollination: BB-01 LOMAH]

**Unique value:** Data bridge giữa BB-01 LOMAH (scoring live fire trên mục tiêu thật) và VN-CUAV-SIM (scoring sim). Xạ thủ có 1 profile liên tục: AI so sánh sim accuracy vs live fire accuracy → detect training transfer, identify weak skills.

**Unique to WX:** Không competitor nào sở hữu cả simulator VÀ live fire scoring system. Đây là competitive moat thực sự.

**Technical:** API bridge (BB-01 JSON → CUAV-SIM scoring DB). Shared schema: gunner ID, session timestamp, weapon type, target type, hit/miss, accuracy metrics. Dashboard hiển thị sim vs live fire correlation.

**HW:** $5K (gateway device + networking). **SW:** $10-20K (API + dashboard). **NRE:** $15K.

### AAR-SaaS: "Phân Tích Huấn Luyện Đám Mây" [Hwang: Consumption Chain]

**Unique value:** Standalone AAR analytics platform. Subscription model. Connects to ANY training system (not just WX) via open API. Provides: long-term gunner performance tracking, unit readiness scoring, training optimization recommendations, comparison benchmarks.

**Hwang insight:** Trước dùng sim (LITE) → DURING training → sau training cần AAR. AAR-SaaS = post-consumption job. Recurring revenue.

**Business model:** $10-20K/yr per unit subscription. Install base grows with every LITE/FIXED/FULL/CORTEX sold. Year 5 với 20 units deployed → $200-400K/yr recurring.

**HW:** 0% (cloud/on-premise server). **SW shared with LITE:** 70% (AAR engine core). **NRE:** $20K (SaaS platform + API).

---

## 3. FIXED + Army Scenario Pack

ARMY (N2) merged into FIXED per CEO decision. FIXED hardware = no motion, multi-screen, 2+ stations — identical requirement for ground-based C-UAV training.

**Army Scenario Pack ($5-10K add-on for FIXED):**

| Scenario | Environment | Threats | Weapon Types |
|----------|-------------|---------|-------------|
| ARMY-01 | Urban checkpoint | FPV drone, recon quad | DSHK, PKM |
| ARMY-02 | Field position | Swarm 5-10, loitering munition | ZU-23-2, KPVT |
| ARMY-03 | Convoy escort | Suicide drone, recon fixed-wing | Vehicle-mounted DSHK |
| ARMY-04 | Base defense | Mixed swarm (air + ground USV analogue) | Multi-station coordination |

**Impact:** FIXED addressable market doubles — Navy coastal + Army ground defense. Same hardware, different scenarios = near-zero NRE.

---

## 4. Common Platform — Updated Reuse Matrix

### Layer 0 Reuse

| Component | LITE | FIXED | FULL | CORTEX | WEAPON-MOD | MOBILE | EXPORT | AAR-SaaS | HYBRID | Shared |
|-----------|------|-------|------|--------|-----------|--------|--------|---------|---------|--------|
| Unity 6 render | ✓ | = | = | = | — | simplified | = | — | — | **6/9** |
| V-SMASH 6DOF | ✓ | = | = | = | — | simplified | = | — | API bridge | **6/9** |
| Scoring engine | ✓ | = | = | = | — | subset | = | **core** | API bridge | **8/9** |
| AAR engine | ✓ | = | = | = | — | mini | = | **core** | API bridge | **8/9** |
| MWI protocol | ✓ | = | = | = | **core** | gyro alt | = | — | — | **6/9** |

### Platform Reuse Summary (9 products)

| Product | HW Shared | SW Shared | NRE Savings |
|---------|-----------|-----------|-------------|
| LITE (lead) | reference | reference | — |
| FIXED | 70% | 85% | 55% |
| FULL | 50% | 80% | 45% |
| CORTEX | 30% | 70% | 35% |
| **WEAPON-MOD** | 100% (MWI) | 10% (protocol) | 80% |
| **MOBILE** | 0% | 60% | 50% |
| **EXPORT-LITE** | 100% | 95% | 85% |
| **AAR-SaaS** | 0% | 70% (AAR core) | 55% |
| **HYBRID-BRIDGE** | 10% | 30% (API) | 40% |

**Platform reuse target ≥70% SW: 6/9 products achieve. MOBILE (60%) and HYBRID-BRIDGE (30%) below target — accepted (different platform types).**

---

## 5. Lộ Trình Phát Triển — Updated

### Sequence: LITE → FIXED (+Army) → FULL → WEAPON-MOD → MOBILE → CORTEX → EXPORT-LITE → AAR-SaaS → HYBRID-BRIDGE

```
2026    Q3   Q4  │ 2027  Q1   Q2   Q3   Q4  │ 2028  Q1   Q2   Q3   Q4  │ 2029
──────────────┼───────────────────────────┼───────────────────────────┼──────
LITE PA-2     │                           │                           │
  Ph2-3 █████ │ Ph4 █ Proto █ Delivery ●  │                           │
              │    ↓ Platform proven      │                           │
              │ FIXED PA-8 (+Army pack)   │                           │
              │    Delta █ Proto █ ●       │                           │
              │    WEAPON-MOD             │                           │
              │    CNC setup █ Batch ●     │                           │
              │         ↓ Modules selling  │                           │
              │              FULL PA-6     │                           │
              │              Design ████ Proto █ ●                     │
              │                    MOBILE  │                           │
              │                    App dev ██ ●                        │
              │                           │ CORTEX PA-9               │
              │                           │ Design ████ Proto ████ ●  │
              │                           │      EXPORT-LITE          │
              │                           │      Localize █ ●         │
              │                           │           AAR-SaaS        │
              │                           │           Platform ██ ●   │
              │                           │                HYBRID-BRIDGE
              │                           │                BB-01 link █│█ ●
```

| #   | Product           | Start Trigger               | Duration         | Delivery | Notes                                                |
| --- | ----------------- | --------------------------- | ---------------- | -------- | ---------------------------------------------------- |
| 1   | **LITE**          | Active (Phase 2)            | 10-12 months     | Q1 2027  | Lead product. Layer 0 proven here.                   |
| 2   | **FIXED** (+Army) | LITE prototype OK           | 3-4 months delta | Q2 2027  | Same SW, 4-screen, add Army pack.                    |
| 3   | **WEAPON-MOD**    | LITE MWI design frozen      | 2-3 months       | Q2 2027  | CNC batch production setup. Can parallel with FIXED. |
| 4   | **FULL**          | FIXED validated             | 6-8 months       | Q4 2027  | New: shared deck, 360° projection.                   |
| 5   | **MOBILE**        | V-SMASH simplified ready    | 3-4 months       | Q4 2027  | Tablet/VR app. Can parallel with FULL (SW engineer). |
| 6   | **CORTEX**        | FULL validated              | 6-9 months       | Q3 2028  | New: WAN sync, C2 Hub. Highest complexity.           |
| 7   | **EXPORT-LITE**   | 5+ domestic LITE delivered  | 2-3 months       | Q4 2028  | LITE + localization. Near-zero NRE.                  |
| 8   | **AAR-SaaS**      | AAR engine proven in LITE   | 3-4 months       | Q4 2028  | SaaS platform build.                                 |
| 9   | **HYBRID-BRIDGE** | BB-01 LOMAH prototype ready | 3-4 months       | 2029     | Depends on BB-01 timeline.                           |

### Parallel Opportunities (exceptions to sequential rule)
- **WEAPON-MOD** = HW manufacturing → can parallel with FIXED (different skill: CNC vs SW)
- **MOBILE** = tablet/VR app → can parallel with FULL (different developer)
- **EXPORT-LITE** = localization only → near-zero engineering overlap
- **AAR-SaaS** = SaaS platform → can parallel with CORTEX (different developer)

---

## 6. Phạm Vi Ứng Dụng — Expanded

### By Customer Segment

| Segment | LITE | FIXED | FULL | CORTEX | WPN-MOD | MOBILE | EXPORT | AAR | HYBRID |
|---------|------|-------|------|--------|---------|--------|--------|-----|--------|
| Lữ đoàn HQ (xuồng) | ★★★ | ★ | ★★ | ★ | ★★★ | ★★ | — | ★★ | ★★ |
| Đảo/nhà giàn/cảng | ★ | ★★★ | ★ | ★ | ★★ | ★★ | — | ★★ | ★ |
| Tàu chiến | ★★ | ★ | ★★★ | ★★ | ★★★ | ★ | — | ★★ | ★★ |
| Vùng HQ / Bộ TL | ★ | ★ | ★★ | ★★★ | ★ | ★ | — | ★★★ | ★ |
| **Lục quân (Army)** | ★ | **★★★** | ★ | ★ | ★★ | ★★★ | — | ★★ | ★ |
| **Biên phòng/CSB** | ★ | **★★★** | **★★★** | ★ | ★★ | ★★ | — | ★★ | ★ |
| Xạ thủ cá nhân | ✗ | ✗ | ✗ | ✗ | ✗ | ★★★ | — | ★ | ✗ |
| ASEAN navies | ★★ | ★★ | ★★ | ★ | ★★ | ★★ | ★★★ | ★★ | ✗ |
| BB-01 live fire units | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ★★ | ★★★ |

### By Training Mode

| Mode | Products |
|------|----------|
| Individual skill (aim, track, lead) | LITE, MOBILE, WEAPON-MOD |
| Station coordination (2-3 gunners) | FIXED, FULL |
| Command & crew (kíp chiến đấu) | FULL, CORTEX |
| Joint force (multi-unit exercise) | CORTEX |
| Self-paced (no instructor) | MOBILE, AAR-SaaS |
| Continuous assessment (sim + live) | HYBRID-BRIDGE + AAR-SaaS |
| Ground defense (Army C-UAV) | FIXED + Army Pack |

---

## 7. Revenue Model — Expanded

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection (2027-2031)

| Year | LITE | FIXED | FULL | CORTEX | WPN-MOD | MOBILE | EXPORT | AAR-SaaS | HYBRID | Total |
|------|------|-------|------|--------|---------|--------|--------|---------|--------|-------|
| 2027 | $180K (3) | $70K (1) | — | — | $20K (5) | — | — | — | — | **$270K** |
| 2028 | $180K (3) | $210K (3) | $150K (1) | — | $30K (8) | $25K (5) | — | — | — | **$595K** |
| 2029 | $120K (2) | $210K (3) | $300K (2) | — | $30K (8) | $50K (10) | $70K (1) | $30K (2) | — | **$810K** |
| 2030 | $120K (2) | $140K (2) | $300K (2) | $350K (1) | $25K (6) | $75K (15) | $140K (2) | $60K (4) | $20K (1) | **$1,230K** |
| 2031 | $60K (1) | $140K (2) | $150K (1) | $350K (1) | $20K (5) | $100K (20) | $210K (3) | $100K (6) | $40K (2) | **$1,170K** |
| **Total** | **$660K** | **$770K** | **$900K** | **$700K** | **$125K** | **$250K** | **$420K** | **$190K** | **$60K** | **$4,075K** |

### v1.0 → v1.1 Revenue Delta

| Metric | v1.0 (4 variants) | v1.1 (9 products) | Delta |
|--------|-------------------|-------------------|-------|
| 5-year revenue | $3,030K | **$4,075K** | **+$1,045K (+34%)** |
| Products | 4 | 9 | +5 |
| Recurring revenue (Y5) | ~$100K | **~$240K** | +140% (AAR-SaaS drives) |
| Volume (units Y5) | ~5 | ~40+ (MOBILE drives) | 8× volume |

**Note:** v1.0 used optimistic pricing ($5.9-8.2M over 5 years). v1.1 uses conservative pricing aligned with FORGE Cost Analysis confirmed numbers. The $4.1M is realistic conservative; optimistic range remains $5.9-8.2M for existing 4 variants + ~$1.5M from new 5 = $7.4-9.7M.

### Revenue by Layer

| Layer | Products | 5-Year Revenue | % |
|-------|----------|---------------|---|
| L2 Systems (LITE, FIXED, FULL, CORTEX) | 4 | $3,030K | 74% |
| L1 Modules (WEAPON-MOD) | 1 | $125K | 3% |
| L4 Ecosystem (MOBILE, EXPORT, AAR, HYBRID) | 4 | $920K | 23% |
| **Total** | **9** | **$4,075K** | **100%** |

### Recurring Revenue (Year 5 steady-state)

| Stream | Annual Est. |
|--------|-----------|
| AAR-SaaS subscriptions (6 units) | $100K/yr |
| Maintenance contracts (5% of installed base) | $60K/yr |
| WEAPON-MOD replacement/new calibers | $20K/yr |
| THREAT-UPDATE content subscription | $30K/yr |
| Army Scenario Packs | $15K/yr |
| **Total recurring** | **~$225K/yr** |

---

## 8. Development Efficiency — Updated

### NRE per Product

| Product | Standalone NRE | Platform NRE | Savings % |
|---------|---------------|-------------|-----------|
| LITE (lead) | $80K | $80K (reference) | — |
| FIXED | $60K | $25K | 58% |
| FULL | $100K | $50K | 50% |
| CORTEX | $120K | $75K | 38% |
| **WEAPON-MOD** | $30K | $10K | 67% |
| **MOBILE** | $50K | $25K | 50% |
| **EXPORT-LITE** | $25K | $5K | 80% |
| **AAR-SaaS** | $40K | $20K | 50% |
| **HYBRID-BRIDGE** | $35K | $15K | 57% |
| **Total** | **$540K** | **$305K** | **43% avg** |

**Platform investment ROI:**
- LITE NRE = $80K
- Platform savings across 8 products = $235K
- **ROI: 294%** (v1.0 was ~200% with 3 variants → +47% improvement)

---

## 9. Risk per Product — New Variants

| Product | Primary Risk | P | I | Fallback |
|---------|-------------|---|---|---------|
| WEAPON-MOD | Solenoid recoil fidelity unproven [TRL-UNVERIFIED] | MED | MED | Sell without recoil (encoder + trigger only, -$500/unit) |
| MOBILE | Tablet gyro accuracy insufficient for training transfer | MED | MED | VR headset with controller (better tracking, +$1K cost) |
| EXPORT-LITE | No international reference customer | HIGH | MED | Bundle demo unit with first 5 domestic LITE for ASEAN pitch |
| AAR-SaaS | Subscription model unfamiliar in VN military procurement | HIGH | LOW | One-time license option ($50K) instead of subscription |
| HYBRID-BRIDGE | BB-01 LOMAH timeline uncertain (Phase 0→1) | MED | LOW | Defer until BB-01 has working prototype. Zero NRE until then. |
| FIXED +Army | Army doctrine acceptance of Navy-origin simulator | MED | MED | Demo to Army C-UAV unit. If rejected → Army pack stays as content, no loss. |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| LITE fails → entire portfolio delayed | CRITICAL | WEAPON-MOD can sell independently. MOBILE can proceed on V-SMASH alone. |
| 9 products = complexity overload for solo CEO | HIGH | Sequential dev. MOBILE/AAR delegatable to SW developer. EXPORT = LITE delta. |
| Cannibalization: MOBILE ($5K) takes LITE ($60K) sales | MED | Different segments: MOBILE = individual, LITE = unit. Complementary, not substitute. |
| Unity licensing risk (sovereignty concern) | LOW | Runtime standalone OK (CEO confirmed). Worst case: Godot migration path. |

---

## 10. Cross-Product Platform — CTF + HYBRID

### Common Training Framework (CTF) — VN-CUAV-SIM × VN-XUONG V9-TRAIN

| Shared Module | VN-CUAV-SIM | VN-XUONG V9-TRAIN | CTF Design |
|--------------|-------------|-------------------|-----------|
| Unity render engine | Maritime + C-UAV scenes | Marine LARS operations | Shared render pipeline, different scene assets |
| AAR framework | Gunner performance scoring | LARS operator scoring | Shared AAR core, different skill metrics |
| Training profile | Gunner ID + weapon + accuracy | Operator ID + LARS proficiency | Shared schema, different domains |
| Scenario engine | UAV/USV threats, environmental | Sea state, UUV approach | Shared event system, different content |
| Reporting | Unit readiness dashboard | LARS qualification tracking | Shared dashboard framework |

**CTF NRE saving:** If designed as shared framework → saves ~$15-20K per product (render pipeline, AAR, reporting reuse).

**Action:** When VN-XUONG V9-TRAIN enters Phase 0, design CTF architecture jointly with VN-CUAV-SIM AAR engine.

### HYBRID-BRIDGE — VN-CUAV-SIM × BB-01 LOMAH

```
BB-01 LOMAH (live fire)              VN-CUAV-SIM (simulation)
  │ Hit detection (piezo)               │ Hit detection (ray-trace)
  │ Real bullets on real target         │ Virtual bullets on virtual target
  │                                     │
  └──── HYBRID-BRIDGE API ────────────┘
              │
              ▼
        Unified Gunner Profile
        ├── Sim accuracy (per session)
        ├── Live fire accuracy (per session)
        ├── Training transfer coefficient
        ├── Skill trajectory over time
        └── AI recommendation: sim focus areas
```

**Unique WX moat:** No competitor owns both simulation AND live-fire scoring. This integration = data flywheel unique to Workshop X.

**Action:** When BB-01 reaches Phase 3 (prototype), design HYBRID-BRIDGE API schema jointly.

---

## 11. CEO Decisions — Record

### v1.0 Decisions (maintained)

| # | Decision | Choice | Date |
|---|----------|--------|------|
| D1 | 4 variants (LITE/FIXED/FULL/CORTEX) | Approved | 2026-04-07 |
| D2 | LITE = lead product | Approved | 2026-04-07 |
| D3 | Platform reuse ≥70% SW / ≥50% HW | Confirmed | 2026-04-09 |

### v1.1 Decisions (new — Musk + Hwang expansion)

| # | Decision | CEO Choice | Date | Framework |
|---|----------|-----------|------|-----------|
| D4 | DESKTOP eliminated | Loại — target dùng FIXED/FULL | 2026-04-09 | Hwang: existing products serve segment |
| D5 | ARMY merged into FIXED | Gộp — Army Scenario Pack add-on | 2026-04-09 | Musk: same HW, different content |
| D6 | MOBILE included | Yes | 2026-04-09 | Hwang: Non-consumption (individual soldier) |
| D7 | WEAPON-MOD included | Yes | 2026-04-09 | Musk: Vertical integration |
| D8 | EXPORT-LITE included | Yes (after 5+ domestic) | 2026-04-09 | Hwang: New market disruption |
| D9 | HYBRID-BRIDGE included | Yes (explore with BB-01) | 2026-04-09 | Cross-pollination: unique WX moat |
| D10 | AAR-SaaS included | Yes | 2026-04-09 | Hwang: Consumption chain job |
| D11 | CTF shared with VN-XUONG V9-TRAIN | Explore | 2026-04-09 | Musk: Cross-pollination |
| D12 | Sequence updated | LITE→FIXED(+Army)→FULL→WPN-MOD→MOBILE→CORTEX→EXPORT→AAR→HYBRID | 2026-04-09 | Sequential + parallel exceptions |

---

## TNKCT Status

| Product | TNKCT | Reference |
|---------|-------|-----------|
| LITE PA-2 | ✓ v1.1 | `Phase2-Concept/` |
| FIXED PA-8 | ✓ v1.0 | `Phase2-Concept/` |
| FULL PA-6 | ✓ v1.0 | `Phase2-Concept/` |
| CORTEX PA-9 | ✓ v1.0 | `Phase2-Concept/` |
| WEAPON-MOD | Pending | Delta from LITE MWI section |
| MOBILE | Pending | New (different platform) |
| EXPORT-LITE | Pending | Delta from LITE (localization) |
| AAR-SaaS | Pending | New (SaaS product) |
| HYBRID-BRIDGE | Pending | New (integration product) |

---

*Portfolio Planning v1.1 | VN-CUAV-SIM-001 Training Platform | Musk First Principles + Hwang Disruptive Innovation | 2026-04-09*
