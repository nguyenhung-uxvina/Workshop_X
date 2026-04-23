---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.1
project: VN-XUONG-UUV
status: approved
scope: PORTFOLIO
lead_product: VN-XUONG-UUV-001 (BASE)
variants: 8 (V2-AUTON, V3-HEAVY, V4-LARS-MOD, V4C-CIVIL, V6-TORP, V7-MULTI, V8-AUTO, V9-TRAIN)
variant_sequence: V4 → V2 → V3 → V6 → V9 → V7 → V8
export: deferred (revisit after 3+ domestic units)
platform_reuse: "≥70% SW shared, ≥50% HW shared"
supersedes: VN_XUONG_Portfolio_Planning_v1.0.md
changelog: "v1.1 — Musk First Principles + Hwang Disruptive Innovation expansion. 3→8 variants. Common hull platform with VN-AST-MSL-001. 4-layer architecture."
---

# Portfolio Planning — VN-XUONG-UUV Marine Transfer Platform

> Từ "Xuồng Thu/Thả UUV" đến **"Marine Heavy-Object Transfer Platform"** — Musk First Principles reframe.
> Không phải sản phẩm LARS. Là platform di chuyển vật thể nặng hình trụ giữa mặt nước và boong tàu.

---

## 0. Strategic Reframe (Musk + Hwang)

### First Principles Deconstruction (Musk)

Strip "LARS", "UUV", "Navy" → core physics:

> **Hệ thống di chuyển vật thể hình trụ nặng (≤1000 kg) giữa mặt nước và boong tàu, trong điều kiện sóng biển.**

Insight: UUV chỉ là MỘT loại payload. Cùng cơ cấu (ramp + funnel + winch + cradle) phục vụ: torpedo, sonar array, ROV, buoy, thiết bị lặn, thiết bị nghiên cứu biển, mục tiêu kéo.

### Disruptive Innovation Framing (Hwang/Christensen)

| Concept | Application |
|---------|-------------|
| **Non-consumption** | VN Navy có ZERO LARS. Nhiều hải quân ASEAN cũng vậy. $1-3M import = barrier tuyệt đối. |
| **Modular → Disruptive** | V4-LARS-MOD = modular architecture = disruption vehicle. "Good enough" ở 10-15% giá import. |
| **Related Jobs** | Thu hồi ngư lôi, triển khai sonar, thu hồi mục tiêu kéo = cùng job "move heavy thing between water and deck" |
| **Consumption chain** | Trước khi dùng LARS thật → cần training (V9). Sau khi dùng → cần bảo trì, nâng cấp (recurring revenue). |
| **Value network** | VN-AST-MSL-001 (mục tiêu kéo) cũng cần deploy/recover → cross-pollination trực tiếp. |

### 4-Layer Platform Architecture

```
Layer 0: CORE MECHANISM (ramp + funnel + winch + cradle)
  │      = "the cell" — thiết kế MỘT LẦN, dùng cho TẤT CẢ variants
  │
  ├── Layer 1: MODULES (bolt-on packages — Hwang disruption layer)
  │     ├── V4    LARS-MOD    Military UUV module
  │     ├── V4C   CIVIL       Civilian offshore/research module
  │     ├── V6    TORP        Torpedo recovery module
  │     └── V7    MULTI       Universal multi-payload module
  │
  ├── Layer 2: INTEGRATED VESSELS (hull + module — sustaining products)
  │     ├── V1    BASE        8m, tethered UUV          [LEAD — Phase 2 active]
  │     ├── V2    AUTON       8m, autonomous UUV
  │     └── V3    HEAVY       10m, heavy class ≤1000kg
  │
  ├── Layer 3: AUTONOMY (IRONMESH evolution — Musk "FSD" layer)
  │     └── V8    AUTO        Zero-crew autonomous LARS vessel
  │
  └── Layer 4: ECOSYSTEM
        ├── V9    TRAIN       Operator training system
        ├── Fleet management SW (future)
        ├── Maintenance/spares network (future)
        └── Common Hull Platform (shared with VN-AST-MSL-001)
```

**Musk insight:** Layer 0 NRE = one-time. Mỗi layer trên = revenue multiplier với NRE giảm dần.
**Hwang insight:** Layer 1 (modules) = disruptive entry. Layer 2 = sustaining. Layer 3-4 = growth engines.

---

## 1. Portfolio Overview — All 9 Products

```
Price ($K)
  800 ┤                                                        ● V8-AUTO
  700 ┤                                              ● V3-HEAVY
  600 ┤                               ● V6-TORP (vessel)
  550 ┤                    ● V7-MULTI (vessel)
  517 ┤                  ● V1-BASE
  400 ┤                         ● V2-AUTON
  250 ┤      ● V6-TORP (module)
  200 ┤  ● V4-MOD  ● V7-MULTI (module)
  150 ┤     ● V4C-CIVIL
   50 ┤ ● V9-TRAIN
    0 ├──────────────────────────────────────────────────────────
      LOW              MEDIUM              HIGH        VERY HIGH
                         Complexity
```

| ID | Tên | Mô tả ngắn | Layer | Price | Segment |
|----|-----|-------------|-------|-------|---------|
| **V1** | **BASE** | 8m aluminum, tethered 550kg UUV, electric LARS + TMS | L2 Vessel | $517K | Navy UUV Ops |
| **V4** | **LARS-MOD** | Bolt-on LARS module cho tàu hiện có (military) | L1 Module | $150-200K | Navy (existing boats) |
| **V2** | **AUTON** | 8m, autonomous UUV, no TMS | L2 Vessel | ~$400K | Navy autonomous + Research |
| **V3** | **HEAVY** | 10m, hydraulic, UUV ≤1000kg | L2 Vessel | ~$700K | Navy MCM |
| **V6** | **TORP** | Thu hồi ngư lôi tập (D=533mm, ≤800kg) | L1 Module / L2 Vessel | $250K (mod) / $600K (vessel) | Navy torpedo units |
| **V9** | **TRAIN** | LARS operator training simulator (desktop/VR) | L4 Ecosystem | $30-50K | Training command, export |
| **V7** | **MULTI** | Universal multi-payload (UUV, torpedo, sonar, buoy, towed target) | L1 Module / L2 Vessel | $200K (mod) / $550K (vessel) | Any Navy unit, VN-AST |
| **V8** | **AUTO** | Autonomous LARS vessel, zero crew, IRONMESH full autonomy | L3 Autonomy | ~$800K | Long-term 2029+ |
| **V4C** | **CIVIL** | V4 adapted cho civilian (offshore, survey, research), BV/DNV cert | L1 Module | $120-150K | Offshore, research |

---

## 2. Variant Comparison Matrix

| Attribute | V1 BASE | V4 MOD | V2 AUTON | V3 HEAVY | V6 TORP | V7 MULTI | V4C CIVIL | V8 AUTO | V9 TRAIN |
|-----------|---------|--------|----------|----------|---------|----------|-----------|---------|----------|
| **Vessel** | 8m Al | Existing | 8m Al | 10m Al | 8m Al or existing | 8m Al or existing | Existing (civilian) | 8m Al | N/A |
| **Payload** | UUV 550kg tethered | UUV ≤550kg | UUV ≤550kg autonomous | ≤1000kg any | Torpedo ≤800kg | Any cylindrical ≤800kg | Any ≤550kg | UUV ≤550kg | Simulated |
| **Payload D** | 400mm | ≤400mm | ≤400mm | ≤600mm | 533mm | Adjustable 300-600mm | ≤400mm | 400mm | N/A |
| **Winch** | 10kN electric | 10kN electric | 10kN electric | 20kN hydraulic | 15kN electric | 15kN electric | 10kN electric | 10kN electric | N/A |
| **TMS** | Yes (25km) | Optional | No | Optional (30km) | No | No | No | Optional | N/A |
| **USBL** | Yes | Optional | Yes | Yes | Optional | Optional | Optional | Yes + autonomy | Simulated |
| **Crew** | 3 | 1-2 | 2 | 3-4 | 2-3 | 2-3 | 1-2 | **0** | 1 (trainee) |
| **Certification** | Military | Military | Military | Military | Military | Military | **BV/DNV** | Military | N/A |
| **IRONMESH** | LARS control | LARS subset | LARS (no TMS) | LARS + hydraulic | LARS adapted | LARS universal | LARS civilian | **Full autonomy** | Training SW |
| **Price** | $517K | $175K | $400K | $700K | $250K mod | $200K mod | $135K | $800K | $40K |
| **Dev status** | Phase 2 | Concept | Concept | Concept | Concept | Concept | Concept | Vision 2029+ | Concept |

---

## 3. Điểm Khác Biệt — Per Variant

### V4-LARS-MOD: "Bộ LARS Lắp Rời" (Military)
**Unique:** LARS capability WITHOUT new vessel. Lowest entry cost. 10-15× cheaper than import. Hwang "disruptive entry point."
**Critical assumption:** [L5] Existing Navy workboats have adequate stern structure for ~500kg module + 550kg UUV.

### V2-AUTON: "Xuồng LARS UUV Tự Hành"
**Unique:** Same V1 hull, no TMS. Simpler, lighter, cheaper. 2 crew only.
**Critical assumption:** [L5] VN Navy will acquire autonomous UUVs. Market timing uncertain.

### V3-HEAVY: "Xuồng LARS Hạng Nặng"
**Unique:** 2× payload capacity (1000kg). Hydraulic power. SS 3-4 recovery. Targets MCM-class UUVs.
**Critical assumption:** [L5] VN Navy MCM modernization will require heavy-class UUV LARS.

### V6-TORP: "Thu Hồi Ngư Lôi Tập"
**Unique:** Adapted cradle cho torpedo profile (D=533mm, cylindrical, ≤800kg). Ngư lôi tập giá $500K-2M mỗi quả — PHẢI thu hồi. Hiện tại VN Navy dùng tàu kéo + lưới + thợ lặn = chậm, unsafe, hư hỏng ngư lôi.
**First Principles insight:** Cùng physics — vật thể hình trụ nặng từ nước lên boong. Chỉ khác kích thước cradle.
**Critical assumption:** [L5] VN Navy có nhu cầu thu hồi ngư lôi tập. Cần xác nhận quy mô (bao nhiêu quả/năm).

### V7-MULTI: "LARS Đa Năng"
**Unique:** Universal cradle (adjustable V-blocks) cho nhiều loại payload: UUV, torpedo, sonar array, buoy, ROV, **towed target (VN-AST-MSL-001)**. Một module phục vụ nhiều đơn vị khác nhau.
**Cross-pollination:** VN-AST-MSL-001 cũng cần deploy/recover platform mục tiêu từ biển. V7 TRỰC TIẾP serve nhu cầu này.
**Hwang insight:** Universal = modular architecture ultimate form. Một sản phẩm → nhiều job.
**Critical assumption:** [L5] Adjustable cradle có thể handle nhiều payload profiles mà không compromise an toàn.

### V4C-CIVIL: "LARS Module Dân Sự"
**Unique:** V4 stripped of military specs + add commercial certification (BV/DNV). Target: dầu khí offshore (deploy/recover ROV, sensors), survey/research (oceanographic instruments), aquaculture (heavy equipment).
**Hwang New Market Disruption:** Civilian market hiện tại KHÔNG dùng LARS (quá đắt). V4C ở $120-150K = accessible cho lần đầu tiên.
**Critical assumption:** [L5] Civilian demand exists và sẵn sàng trả $120-150K. Cần market validation.

### V8-AUTO: "Xuồng LARS Tự Hành" (Vision 2029+)
**Unique:** Zero crew. IRONMESH full autonomy: tự hành đến vị trí, tự deploy UUV, tự recover, tự quay về. Musk "FSD for boats" analogy.
**Musk Platform Layer 3:** Autonomy = software layer trên hardware đã proven (V1 hull + V4 LARS). Giống Tesla: bán xe trước, thêm FSD sau.
**Critical assumption:** [L5] Autonomous maritime ops regulation cho phép. Technology maturity 2029+. IRONMESH phải đạt TRL 7+ cho autonomous LARS.

### V9-TRAIN: "Hệ Thống Huấn Luyện LARS"
**Unique:** Desktop/VR simulator cho LARS operator qualification. Huấn luyện trước khi chạm hardware thật. Giá thấp nhất ($30-50K), volume cao nhất, export-friendly (no ITAR vì không có hardware quân sự).
**Hwang Consumption Chain Job:** Trước khi "hire" LARS thật → cần "hire" training system.
**Cross-pollination:** Cùng domain simulation với VN-CUAV-SIM-001. Shared Unity/UE engine, shared training methodology.
**Critical assumption:** [L5] Navy chấp nhận simulator training cho LARS ops. Cần doctrine validation.

---

## 4. Common Platform — 4-Layer Reuse

### 4.1 Layer 0: Core Mechanism Reuse

| Component | V1 | V4 | V2 | V3 | V6 | V7 | V4C | V8 | V9 | Shared? |
|-----------|----|----|----|----|----|----|-----|----|----|---------|
| Ramp mechanism | ✓ | = | = | scaled | = | = | = | = | sim | **8/9** |
| V-funnel geometry | ✓ | = | = | wider | adapted 533mm | adjustable | = | = | sim | **8/9** |
| Cradle + rail | ✓ | = | = | larger | D533 cradle | adjustable V-blocks | = | = | sim | **8/9** |
| Electric winch 10kN | ✓ | = | = | — (hydraulic) | 15kN variant | 15kN variant | = | = | — | **6/9** |
| IRONMESH core SW | ✓ | subset | no TMS | + hydraulic | adapted | universal | civilian UI | + autonomy | training SW | **9/9** |

**Layer 0 design once, deploy 9 times.**

### 4.2 Platform Reuse Summary

| Variant | HW Shared with V1 | SW Shared with V1 | NRE Savings vs Standalone |
|---------|-------------------|-------------------|--------------------------|
| **V4-LARS-MOD** | 80% | 70% | 63% |
| **V2-AUTON** | 85% | 80% | 75% |
| **V3-HEAVY** | 40% | 60% | 40% |
| **V6-TORP** | 70% (cradle differs) | 70% | 55% |
| **V9-TRAIN** | 0% (software only) | 30% (sim engine) | 50% (shared SW framework) |
| **V7-MULTI** | 65% (adjustable cradle) | 75% | 55% |
| **V4C-CIVIL** | 90% (same as V4 + cert docs) | 80% (civilian UI) | 70% |
| **V8-AUTO** | 80% (same hull + LARS) | 50% (new autonomy layer) | 45% |

### 4.3 Common Hull Platform — VN-XUONG-UUV × VN-AST-MSL-001

| Shared Element | VN-XUONG-UUV (8m) | VN-AST-MSL-001 (6m HDPE) | Common Platform Opportunity |
|---------------|-------------------|--------------------------|---------------------------|
| Naval architecture methodology | Yes | Yes | **Shared design tools, hydrostatic software** |
| Al 5083 construction | Yes | Future Al variant possible | **Shared shipyard, shared material specs** |
| Marine electrical systems | Yes | Yes (simpler) | **Standard marine electrical package** |
| IRONMESH control SW | LARS control | Target control | **Shared SW platform, different modules** |
| Mooring/towing hardware | Tow alongside mother ship | Mooring at sea | **Shared marine hardware sourcing** |
| Shipyard relationships | Ba Son, Z189, Song Thu | Same | **100% shared — volume leverage** |
| Deploy/recover need | V1 is the LARS | **VN-AST NEEDS LARS to deploy/recover targets** | **V7-MULTI directly serves VN-AST** |
| Tropical durability | Marine coatings, cathodic protection | Same | **Shared corrosion engineering** |

**Key cross-pollination:** V7-MULTI LARS module có thể deploy/recover VN-AST-MSL-001 towed target platform (1200kg, hình hộp — cần wider cradle). Nếu V7 cradle adjustable đủ range → một module phục vụ cả UUV ops VÀ towed target ops.

**Action item:** Khi V7 vào Phase 0, include VN-AST-MSL-001 payload profile trong requirements.

---

## 5. Lộ Trình Phát Triển (Roadmap) — Updated

### Sequence: V4 → V2 → V3 → V6 → V9 → V7 → V8

```
2026    Q2   Q3   Q4  │ 2027  Q1   Q2   Q3   Q4  │ 2028  Q1   Q2   Q3   Q4  │ 2029+
────────────────────┼───────────────────────────┼───────────────────────────┼──────
V1-BASE             │                           │                           │
  Ph2 ██ Ph3 ████ Ph4│██ Build ████ Sea Trial ●  │                           │
                    │    ↓ LARS mechanism proven│                           │
                    │ V4-LARS-MOD               │                           │
                    │    Design █ Build █ Test ● │                           │
                    │         ↓ Module proven   │                           │
                    │              V2-AUTON     │                           │
                    │              Design █ Build█ Test ●                    │
                    │                           │ V3-HEAVY                  │
                    │                           │ Design ████ Build ████ ●  │
                    │                           │      V6-TORP              │
                    │                           │      Design ██ Build █ ●  │
                    │                           │           V9-TRAIN        │
                    │                           │           Dev ██ ●        │
                    │                           │                V7-MULTI   │
                    │                           │                Design ████│██ ●
                    │                           │                           │V8-AUTO
                    │                           │                           │Research██
```

| # | Variant | Start Trigger | Duration | Prototype | Notes |
|---|---------|--------------|----------|-----------|-------|
| 1 | **V1-BASE** | Active (Phase 2) | 10 months | Q4 2026 | Lead product. LARS mechanism = Layer 0 proven here. |
| 2 | **V4-LARS-MOD** | V1 LARS proven | 3-4 months | Q2 2027 | Adapter plate + installation eng. Lowest NRE. |
| 3 | **V2-AUTON** | V4 validated + autonomous UUV signal | 5-6 months | Q4 2027 | Same hull as V1, remove TMS. |
| 4 | **V3-HEAVY** | Market demand (MCM) | 8-10 months | Q3 2028 | New hull + hydraulic. Highest NRE. |
| 5 | **V6-TORP** | Navy torpedo recovery need confirmed | 4-5 months | Q3-Q4 2028 | Cradle adaptation for D=533mm. Can overlap V3 if different engineer. |
| 6 | **V9-TRAIN** | Any time after V1 sea trial | 3-4 months | Q4 2028 | Software-only. Can be developed by SW engineer (not solo CEO). |
| 7 | **V7-MULTI** | After V6 proves multi-cradle concept | 5-6 months | Q2 2029 | Universal cradle. Include VN-AST payload profile. |
| 8 | **V8-AUTO** | IRONMESH autonomy TRL ≥7 | 8-12 months | 2030+ | Autonomy layer on proven V1/V2 hull. Regulation-dependent. |

### Sequential Rule + Exceptions

- **Default:** Sequential (solo engineer). Only 1 variant in active development.
- **Exception 1:** V9-TRAIN is software-only → can be developed by separate SW engineer in parallel.
- **Exception 2:** V4C-CIVIL = V4 + certification docs → can be done as V4 delta, near-zero additional engineering.
- **Exception 3:** V6-TORP cradle adaptation is small scope → can overlap with V3 hull design if different engineer handles cradle.

---

## 6. Phạm Vi Ứng Dụng — Expanded

### By Military Unit

| Unit Type | V1 | V4 | V2 | V3 | V6 | V7 | V4C | V8 | V9 |
|-----------|----|----|----|----|----|----|-----|----|----|
| UUV Ops (tethered) | ★★★ | ★★ | ✗ | ★★ | ✗ | ★★ | ✗ | ★★★ | ★★ |
| UUV Ops (autonomous) | ✗ | ★ | ★★★ | ★★ | ✗ | ★★ | ✗ | ★★★ | ★★ |
| MCM Unit | ★ | ★★ | ★★ | ★★★ | ✗ | ★★ | ✗ | ★★ | ★ |
| Torpedo Unit | ✗ | ✗ | ✗ | ✗ | ★★★ | ★★ | ✗ | ✗ | ★ |
| Towed Target (VN-AST) | ✗ | ✗ | ✗ | ✗ | ✗ | ★★★ | ✗ | ✗ | ✗ |
| Research Institute | ★ | ★★ | ★★★ | ✗ | ✗ | ★★ | ★★★ | ★ | ★ |
| Training Command | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ★★★ |
| Coast Guard | ✗ | ★ | ★★ | ✗ | ✗ | ★ | ✗ | ★★ | ✗ |

### By Market

| Market | Best Variants | Entry Product |
|--------|--------------|---------------|
| VN Navy (primary) | V1, V4, V2, V3, V6, V7, V8, V9 | V1 (flagship) + V4 (fast adoption) |
| VN Civilian (offshore, research) | V4C, V2 | V4C (lowest barrier) |
| Export ASEAN (deferred) | V4, V9 | V9 (no ITAR, software only, $40K) |
| Training market | V9 | V9 (universal, standalone) |

---

## 7. Revenue Model — Expanded

**Evidence tier: [L5-ASSUMPTION] — all projections are estimates.**

### 5-Year Revenue Projection (2027-2031)

| Year | V1 | V4 | V2 | V3 | V6 | V9 | V7 | V4C | V8 | Total |
|------|----|----|----|----|----|----|----|----|----|----|
| 2027 | $517K (1) | $350K (2) | — | — | — | — | — | — | — | **$867K** |
| 2028 | $517K (1) | $525K (3) | $400K (1) | — | — | — | — | $135K (1) | — | **$1,577K** |
| 2029 | $517K (1) | $350K (2) | $800K (2) | $700K (1) | $250K (1 mod) | $80K (2) | — | $135K (1) | — | **$2,832K** |
| 2030 | $517K (1) | $350K (2) | $400K (1) | $700K (1) | $600K (1 vessel) | $120K (3) | $200K (1 mod) | $270K (2) | — | **$3,157K** |
| 2031 | — | $350K (2) | $400K (1) | $700K (1) | $250K (1 mod) | $120K (3) | $550K (1 vessel) | $135K (1) | R&D | **$2,505K** |
| **Total** | **$2,068K** | **$1,925K** | **$2,000K** | **$2,100K** | **$1,100K** | **$320K** | **$750K** | **$675K** | **—** | **$10,938K** |

**v1.0 → v1.1 delta: $7.4M → $10.9M (+$3.5M, +48%)** — from 5 new variants leveraging same core mechanism.

### Revenue by Layer

| Layer | Products | 5-Year Revenue | % of Total |
|-------|----------|---------------|------------|
| L2 Vessels (V1, V2, V3) | 3 | $6,168K | 56% |
| L1 Modules (V4, V6-mod, V7-mod, V4C) | 4 | $4,100K | 38% |
| L4 Ecosystem (V9) | 1 | $320K | 3% |
| L3 Autonomy (V8) | 1 | R&D phase | — |
| Recurring (maintenance, spares, SW) | All | ~$350K | 3% |
| **Total** | **9** | **~$10.9M** | **100%** |

**Hwang insight confirmed:** Layer 1 (modules) = 38% of revenue at much lower NRE. Disruptive layer pulls its weight.

### Recurring Revenue (Year 5 steady-state, all variants deployed)

| Stream | Annual Est. |
|--------|-----------|
| Maintenance contracts (5% of unit price) | ~$150K/yr |
| Spare parts | ~$60K/yr |
| IRONMESH SW upgrades | ~$50K/yr |
| V9 training licenses | ~$40K/yr |
| **Total recurring** | **~$300K/yr** |

---

## 8. Development Efficiency — Updated

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---------|---------------|-------------|-----------|
| V1-BASE (lead) | $120K | $120K (reference) | — |
| V4-LARS-MOD | $80K | $30K | 63% |
| V2-AUTON | $100K | $25K | 75% |
| V3-HEAVY | $150K | $90K | 40% |
| V6-TORP | $90K | $40K | 56% |
| V9-TRAIN | $60K | $30K | 50% |
| V7-MULTI | $100K | $45K | 55% |
| V4C-CIVIL | $40K | $12K (V4 + cert docs) | 70% |
| V8-AUTO | $200K | $110K | 45% |
| **Total** | **$940K** | **$502K** | **47% avg** |

**Platform investment ROI:**
- V1 NRE = $120K
- Platform savings across 8 variants = $438K
- **ROI: 365%** (v1.0 was 154% with 3 variants → 2.4× improvement from portfolio expansion)

### Engineer-Hours Summary

| Variant | Total Hours | Calendar (25h/wk) |
|---------|------------|-------------------|
| V1-BASE | 1,000 h | ~10 months |
| V4-LARS-MOD | 300 h | ~3 months |
| V2-AUTON | 500 h | ~5 months |
| V3-HEAVY | 800 h | ~8 months |
| V6-TORP | 400 h | ~4 months |
| V9-TRAIN | 300 h | ~3 months (SW engineer) |
| V7-MULTI | 500 h | ~5 months |
| V4C-CIVIL | 100 h | ~1 month (V4 delta) |
| V8-AUTO | 800 h | ~8 months |
| **Total pipeline** | **4,700 h** | **~47 months sequential** |

**Note:** 47 months sequential = ~4 years. With V9 parallel (SW engineer) and V4C as delta → effective ~40 months = 3.3 years to full portfolio (2027-2030).

---

## 9. Risk per Variant — Updated

| Variant | Primary Risk | P | I | Fallback |
|---------|-------------|---|---|---------|
| V1-BASE | LARS+TMS integration | MED | HIGH | Simplify TMS if UUV OEM takes cable drum |
| V4-MOD | Existing vessels lack stern structure | MED | HIGH | Structural reinforcement package (+$20-30K) |
| V2-AUTON | Autonomous UUV market timing | HIGH | MED | Sell to research (Seg C) earlier |
| V3-HEAVY | Hydraulic = new capability for WX | MED | MED | Stay electric, accept 750kg limit |
| V6-TORP | Navy torpedo recovery demand unconfirmed | MED | MED | Pivot to V7-MULTI (torpedo = one payload type) |
| V9-TRAIN | Doctrine acceptance of sim training for LARS | MED | LOW | Bundle free with V1/V4 sales as value-add |
| V7-MULTI | Adjustable cradle = compromise vs specialized | MED | MED | Offer cradle inserts per payload type (+$10-20K) |
| V4C-CIVIL | Civilian demand at $120-150K unproven | HIGH | LOW | Market V4C through PetroVietnam/VAST contacts |
| V8-AUTO | Regulation + IRONMESH autonomy TRL | HIGH | HIGH | Semi-autonomous (1 crew remote supervision) instead of zero crew |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| V1 fails → entire portfolio delayed | CRITICAL | V4 module can proceed if LARS mechanism itself works but vessel integration fails. Layer 0 ≠ Layer 2. |
| Solo engineer bottleneck | HIGH | V9 delegatable to SW engineer. V4C is V4 delta. Consider contract for V3 hull. |
| 9 variants = portfolio complexity overload | MED | Sequential development. Only 1 active at a time. Layer 0 is the moat, not variant count. |
| Competitor enters VN market | MED | V4 + V9 = fast deployment. Module price ($175K) + training ($40K) = $215K total entry. No import can match. |

---

## 10. CEO Decisions — Record

### v1.0 Decisions (maintained)

| # | Decision | CEO Choice | Date |
|---|----------|-----------|------|
| D1 | Original 3 variants | V2, V3, V4 | 2026-04-09 |
| D2 | Original sequence | V4 → V2 → V3 | 2026-04-09 |
| D3 | Export timing | Deferred | 2026-04-09 |
| D4 | Platform reuse target | ≥70% SW, ≥50% HW | 2026-04-09 |

### v1.1 Decisions (new — Musk + Hwang expansion)

| # | Decision | CEO Choice | Date | Framework |
|---|----------|-----------|------|-----------|
| D6 | V6-TORP included | Yes | 2026-04-09 | Musk First Principles (same physics, different payload) |
| D7 | V7-MULTI included | Yes (serves VN-AST too) | 2026-04-09 | Musk Cross-pollination + Hwang Related Jobs |
| D8 | V4C-CIVIL included | Yes | 2026-04-09 | Hwang New Market Disruption (non-consumption) |
| D9 | V8-AUTO included | Yes (2029+ vision) | 2026-04-09 | Musk Autonomy Layer (FSD analogy) |
| D10 | V9-TRAIN included | Yes | 2026-04-09 | Hwang Consumption Chain Job |
| D11 | Updated sequence | V4→V2→V3→V6→V9→V7→V8 | 2026-04-09 | V9 can parallel. V4C = V4 delta. |
| D12 | Common hull platform with VN-AST | Explore | 2026-04-09 | Musk Vertical Integration + Cross-pollination |

### Pending Decisions

| # | Decision | Trigger | Timeline |
|---|---------|---------|----------|
| P1 | V4 target Navy vessel types | V1 LARS proven | After V1 sea trial |
| P2 | V2 start (autonomous UUV signal) | Navy procurement | Market-dependent |
| P3 | V3 start (MCM modernization) | Navy MCM program | Market-dependent |
| P4 | V6 Navy torpedo recovery demand | Stakeholder interview | Next Navy contact |
| P5 | V9 development resource (SW engineer hire?) | V1 sea trial | Q1 2027 |
| P6 | V7 payload profiles (include VN-AST-MSL-001?) | V6 cradle proven | After V6 |
| P7 | V4C civilian market validation | PetroVietnam/VAST contact | Q3 2027 |
| P8 | V8 IRONMESH autonomy roadmap | IRONMESH TRL assessment | 2028+ |
| P9 | Common hull platform formal design | V1 + VN-AST both in production | 2028 |

---

## TNKCT (Tính Năng Kỹ Chiến Thuật) — Per Variant

| Variant | TNKCT Status | Reference |
|---------|-------------|-----------|
| V1-BASE | ✓ Exists | `Phase2-Concept/` |
| V4-LARS-MOD | Pending (at V4 Phase 0) | Delta from V1 |
| V2-AUTON | Pending | Delta from V1 (remove TMS) |
| V3-HEAVY | Pending | New (different vessel + hydraulic) |
| V6-TORP | Pending | Delta from V4 (D=533mm cradle) |
| V9-TRAIN | Pending | New (software product, different format) |
| V7-MULTI | Pending | Delta from V4 (adjustable cradle) |
| V4C-CIVIL | Pending | Delta from V4 (+ BV/DNV cert requirements) |
| V8-AUTO | Pending | Delta from V1 (+ autonomy requirements) |

---

*Portfolio Planning v1.1 | VN-XUONG-UUV Marine Transfer Platform | Pahl & Beitz §3.1 + Musk First Principles + Hwang Disruptive Innovation | 2026-04-09*
