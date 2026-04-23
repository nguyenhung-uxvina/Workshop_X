---
created: 2026-04-09
updated: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3 (retroactive)
version: v2.0
project: BB-01_LOMAH
mode: SOLO
status: active
tags: [#type/project, #status/active]
---

# Product Planning — BB-01 LOMAH (Location of Miss and Hit)
## /plan retroactive — formalizing Phase 0 decisions đã được thực hiện

**Mode:** SOLO (CEO + AI)
**Note:** BB-01 đã ở Phase 1-4 với extensive artifacts. /plan này retroactively documents Phase 0 decisions và identifies gaps.

---

## 1. Stimulus Classification (Step 1)

| Source | Stimulus | Evidence |
|--------|----------|---------|
| **Market** (primary) | Trường bắn VN cần hệ thống chấm điểm tự động. Import LOMAH (Polytronic, SAAB) giá $15-30K/unit, không tương thích đạn VN | [WX: product domain knowledge, CEO experience] |
| **Company** (secondary) | WX có năng lực CNC, electronics, embedded SW. Piezo sensor + signal conditioning = core competence phù hợp | [WX: capability assessment] |
| **Environment** (tertiary) | Hiện đại hóa quân đội VN → nhu cầu trang bị trường bắn tiêu chuẩn tăng | [L3: defense procurement trend] |

---

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase
```
[INTRODUCTION] ← BB-01 ở đây (domestic VN)
     ↓
  Growth → Maturation → Saturation → Decline
```
**Product category LOMAH** globally: Maturation (50+ năm, Polytronic/SAAB dominant). Nhưng VN market: **Introduction** — chưa có sản phẩm nội địa.

### 2b. Product-Market Matrix (Ansoff)
```
                    EXISTING MARKETS       NEW MARKETS
EXISTING PRODUCTS   Penetration            Market Dev
NEW PRODUCTS        ★ PRODUCT DEVELOPMENT  Diversification
(BB-01 LOMAH)      (new product cho
                    existing VN military)
```
**Quadrant: Product Development (MEDIUM risk)** — new product, existing customer relationship.

### 2c. Company Competence Assessment

| Dimension | WX Current | Gap | Action |
|-----------|-----------|-----|--------|
| Technical | CNC ✓, PCB design ✓, embedded FW ✓, piezo signal chain = learning | Analog signal conditioning experience limited | NLM `lomah` notebook (12 sources) + research |
| Market | Vietnamese military training products ✓ | Specific trường bắn contacts needed | BD campaign via existing channels |
| Financial | Self-funded, low NRE (~$5K prototype) | OK — low investment threshold | ✓ |
| Production | CNC housing ✓, PCB assembly ✓, manual labor ✓ | Outdoor weatherproofing experience limited | DfX in Phase 3 |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|-----------|-----|---------|------|
| Piezo contact sensor detection | **4** | Proven physics principle, specific VN piezo samples not yet sourced | LOW |
| Charge amplifier (LM358/TL072) | **5** | Standard circuit, simulated in LTspice | LOW |
| Bandpass filter (active) | **5** | Standard analog design | LOW |
| TDOA hit location algorithm | **3** | Algorithm known, not implemented/tested | **MED** |
| LoRa 433MHz communication | **5** | Galaxy note: [[LoRa 433MHz]] proven WX | LOW |
| RPi5 / STM32 ADC interface | **5** | Standard platform | LOW |
| Outdoor weatherproof housing | **3** | Design concept only, no prototype | **MED** |
| IRONMESH CDM integration | **4** | Architecture defined, not integrated | LOW |

**PROCEED gate:** 6/8 TRL ≥4 ✓. 2 at TRL 3 (TDOA algorithm, housing) — both resolvable in Phase 2-3.

---

## 3. Need-Strength Matrix (Step 3)

```
                        WX STRENGTHS
                        Piezo/     Embedded   CNC        Software
                        Analog     FW         Mechanical (RPi/CDM)
CUSTOMER    ────────────────────────────────────────────────────
NEEDS       
HIGH        Accurate    ★★★       ★★         ★          ★★
            hit/miss    signal     ADC+algo   housing    scoring
            detection   chain

HIGH        Outdoor     ★          ★          ★★★       ★
            durability  (sensor    (conformal  IP65       (watchdog)
                        sealing)   coating)    housing

HIGH        Low cost    ★★★       ★★★       ★★★       ★★★
            (<$5K/unit) all VN     STM32      CNC local  open-source
                        components cheap

MED         Easy        ★          ★★         ★★         ★★★
            installation(sensor   (quick      (modular   (auto-config
                        mounting)  attach)     bracket)   SW)

MED         Network     ★          ★★         ○          ★★★
            scoring     (LoRa)     (LoRa FW)             CORTEX CDM

LOW         Multi-      ★★        ★★         ★          ★★★
            caliber     (wideband  (adaptive)  (same      (config
            support     piezo)                 housing)   profiles)
```

**Preferred search fields (★★★):** Low cost × all WX strengths (strongest advantage). Accurate detection × Piezo/Analog. Outdoor durability × CNC Mechanical.

---

## 4. Portfolio Assessment

| Product | Market Appeal (1-5) | WX Strength (1-5) | Score | Zone |
|---------|--------------------|--------------------|-------|------|
| **BB-01 LOMAH** | **4** (proven need, no VN solution) | **3** (learning curve in analog) | **12** | **DECISION** |
| VN-CUAV-SIM-001 | 5 | 4 | 20 | TARGET |
| VN-12.7MM-SIM | 4 | 5 | 20 | TARGET |
| VN-AST-MSL-001 | 4 | 3 | 12 | DECISION |
| VN-XUONG-UUV | 3 | 2 | 6 | EXIT |

**Score 12 → DECISION zone.** Not as strong as simulator products (WX core), but strategically important: LOMAH feeds into CORTEX RANGE ecosystem. Investment justified by portfolio synergy, not standalone merit.

**⏸️ CEO confirmed:** Tier 2 Product Dev, deadline 2026-09-05.

---

## 5. §3.2 Knowledge Audit + Idea Generation (Step 5)

### 5a. Research + RE Audit

| Sub-Function | RE? | RESEARCH? | NLM? | WX Cross? | Status |
|-------------|-----|-----------|------|-----------|--------|
| Piezo contact sensor | ✗ No competitor RE | ✓ RESEARCH_Piezo_LOMAH_Signal_Conditioning_2026-03-08 | ✓ NLM: lomah (12 sources) | ✓ Galaxy: [[Contact Piezo LOMAH]] | **Good** |
| Charge amplifier | ✗ | ✓ (within piezo research) | ✓ NLM: lomah | ✗ | **OK** |
| TDOA algorithm | ✗ | ✗ | ✓ NLM: lomah (partial) | ✗ | ⚠️ **Gap** |
| LoRa communication | ✗ | ✗ | ✗ | ✓ Galaxy: [[LoRa 433MHz]] | **OK** (WX proven) |
| Outdoor housing (IP65+) | ✗ | ✗ | ✗ | Partial: VN-AST housing | ⚠️ **Gap** |
| Scoring logic + CORTEX | ✗ | ✗ | ✗ | ✓ IRONMESH CDM architecture | **OK** |
| Competitor LOMAH systems | ✗ **No RE done** | ✗ | ✗ | ✗ | ⚠️ **Major Gap** |

**Gaps identified: 3**
1. **No competitor RE** — Polytronic, SAAB, Kongsberg LOMAH systems not reverse-engineered
2. **TDOA algorithm** — theoretical knowledge via NLM but no implementation research
3. **Outdoor housing** — IP65 enclosure design for military range environment

### 5b. Idea Generation (3D Space)

| # | Dimension | Variation | Idea |
|---|-----------|-----------|------|
| 1 | Function | Core | Acoustic contact LOMAH — piezo hit/miss detection | ← SELECTED |
| 2 | Function | Extended | + shot location (TDOA) on target face |
| 3 | Function | Extended | + shooter identification (acoustic signature matching) |
| 4 | Principle | Alternative | Optical LOMAH (camera-based hit detection) |
| 5 | Principle | Alternative | Radar-based projectile detection |
| 6 | Embodiment | Modular | Clip-on sensor modules for existing target frames |
| 7 | Embodiment | Integrated | Sensor-embedded target panel (disposable) |

### Solution Finding Methods Used:
- [x] NLM notebook query → `lomah` (12 sources on piezo LOMAH)
- [x] Prior RESEARCH_ file → Piezo signal conditioning
- [x] Galaxy knowledge → Contact Piezo LOMAH, LoRa 433MHz
- [ ] **D-M-I-R 4-layer RE → NOT DONE (gap)**
- [ ] **Reverse Morphological Chart → NOT DONE (gap)**
- [ ] `/research --deep` TDOA algorithm → NOT YET
- [ ] `/research --deep` outdoor housing → NOT YET
- [x] CEO domain knowledge [L2]

---

## 6. Idea Selection (Step 6)

### Pass 1: A-F Elimination

| Criterion | Acoustic Contact | Optical (Camera) | Radar | Clip-on Modular | Integrated Panel |
|-----------|-----------------|-------------------|-------|----------------|-----------------|
| A: Compatible? | + | + | - (cost) | + | + |
| B: Meets needs? | + | + | + | + | - (disposable = expensive) |
| C: Realisable? | + | ? (AI processing) | - (RF expertise) | + | + |
| D: Within cost? | + (<$5K) | ? ($8-15K with camera) | - ($20K+) | + | - |
| E: Safety? | + | + | + | + | + |
| F: WX fit? | + (analog expertise) | - (no CV expertise) | - (no RF expertise) | + | + |
| **Result** | **✓** | **?** | **✗** | **✓** | **✗** |

**Eliminated:** Radar (cost + no expertise), Integrated Panel (disposable cost).
**Proceed:** Acoustic Contact (primary), Clip-on Modular (embodiment variant).
**Info needed:** Optical — defer to Phase 2 as ACH upgrade path (camera = V-SMASH synergy).

### Pass 2: Weighted Selection

| Criterion | Weight | Acoustic Contact | Clip-on Modular |
|-----------|--------|-----------------|-----------------|
| Financial viability | 12% | 4 | 4 |
| Market growth | 10% | 4 | 3 |
| Functional advantage | 10% | 3 | 4 (flexibility) |
| Differentiation | 10% | 3 | 4 |
| Short-term opportunity | 8% | 4 | 3 |
| Local content | 5% | 4 | 4 |
| Know-how fit | 8% | 4 | 3 |
| Portfolio extension | 7% | 4 | 3 |
| Investment need (low=good) | 8% | 4 | 3 |
| Sourcing ease | 7% | 4 | 3 |
| Substitution risk | 4% | 3 | 3 |
| Competition | 4% | 3 | 3 |
| Sovereignty | 4% | 4 | 4 |
| Restrictions | 3% | 4 | 4 |
| **TOTAL** | **100%** | **3.72** | **3.38** |

**Winner: Acoustic Contact LOMAH (3.72)** — clip-on modular = embodiment decision for Phase 3.

---

## 6.5. s-Diagram — Skip (chỉ 1 idea survive → không cần Rt vs Re comparison)

---

## 7. Product Proposal → See separate file: `BB01_Product_Proposal_v1.0.md`

---

## 8. Gate 0 Quick Check

| Criterion | Check | Pass? |
|-----------|-------|-------|
| TRL ≥4 for key technologies? | 9/9 ≥ TRL 4 (updated after G1-G3 research: TDOA algorithm = TRL 4 proven in literature, housing = TRL 5 COTS Hammond) | ✓ |
| Local content ≥40%? | Estimate >80% (SW dev + assembly + local components dominate) | ✓ |
| Competitive advantage clear? | $3-5K vs $15-30K import = 70-80% cheaper | ✓ |
| Within WX financial capacity? | NRE ~$5K, self-funded | ✓ |
| Aligns with portfolio? | Feeds CORTEX RANGE ecosystem | ✓ |
| No IP/regulatory blockers? | No patents on basic TDOA. SAAB/Polytronic have specific implementations | ✓ |

**Gate 0: ✅ PROCEED** (CEO confirmed 2026-03-05, retroactively documented here)

---

## 9. QC Gate — Deferred (retroactive /plan, project already in Phase 1-4)

---

## Step 5b: Research Results (3 gaps filled — 2026-04-09)

| Gap | Research File | Sources | Key Finding |
|-----|-------------|---------|-------------|
| G1: Competitor RE | RESEARCH_LOMAH_Competitor_ReverseEngineering | 16 src, 56% pro | WX = orthogonal patent space (contact vs airborne). Rain immunity + subsonic = uncontested. ⚠ EP2040025A1 FTO |
| G2: TDOA Algorithm | RESEARCH_TDOA_Acoustic_Impact_Localization | 23 src, 43% pro | GCC-PHAT optimal. 4-corner H-layout. Simultaneous ADC mandatory. 2MHz for contact piezo. Chan TSWLS positioning |
| G3: IP65 Housing | RESEARCH_IP67_Enclosure_Tropical_Military | 19 src, 53% pro | COTS Hammond 1550 + modify ~$87/unit. Silicone VMQ O-ring. Dual IP66+IP67. ADC12 + chromate + powder coat |

**NLM Decision:** (b) CẬP NHẬT — add top S+A sources to existing `lomah` notebook (12 → ~25 sources).

---

## Step 5c: Idea Generation (research-backed — 2026-04-09)

| # | Idea | Source Tags | Selected? |
|---|------|-----------|-----------|
| 1+2+3 | Contact Piezo Clip-on: hit/miss + TDOA location + caliber classification | [G1: orthogonal] [G2: GCC-PHAT] [G2: spectral centroid] | ✅ Combined concept A |
| 4 | Air-borne MEMS array (traditional LOMAH) | [G1: all competitors use] | Compared, ranked #2 |
| 5 | Clip-on modular pack for existing frames | [G1: ShotMarker validated] [G3: Hammond ~$87] | ✅ Embodiment for A |
| 7 | Hybrid dual-mode (contact + air-borne) | [G1+G2: complementary] | Compared, ranked #3. Defer to v2.0 |

---

## Step 6: Selection (2026-04-09)

| Concept | Weighted Score | Rank | Weak Spots |
|---------|---------------|------|------------|
| **A: Contact Piezo Clip-on (1+2+3+5)** | **3.67** | **#1 ★ SELECTED** | None (all ≥3) |
| B: Air-borne MEMS | 2.87 | #2 | Differentiation=1, Competition=1, Substitution=1 |
| C: Hybrid Dual-mode | 2.82 | #3 | Investment=2, Sourcing=2, Know-how=2, Short-term=2 |

**CEO confirmed: Concept A (2026-04-09)**. Concept C = v2.0 upgrade path after contact validated.

---

## CEO Decisions Record

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-05 | BB-01 initiated, Tier 2 | LOMAH = foundational product for CORTEX RANGE |
| 2026-03-05 | Piezo CONTACT sensor (NOT MEMS) | SPL requirements exceed MEMS capability |
| 2026-03-05 | LM358/TL072 op-amps | Vietnam market availability |
| 2026-03-05 | RPi5 + STM32 ADC | Proven WX platforms |
| 2026-03-08 | Signal chain: Piezo→ChargeAmp→BPF→Gain→Clamp→ADC | Standard acoustic instrumentation chain |
| 2026-04-09 | /plan retroactive — formal Phase 0 documentation | Gap: no competitor RE, no TDOA research, no housing research |
| 2026-04-09 | 3 research gaps filled (G1+G2+G3, 58 sources total) | Research-first: ideas only after research complete |
| 2026-04-09 | **Concept A selected: Contact Piezo Clip-on** (3.67/4.0) | Orthogonal patent space, rain immune, subsonic capable, uncontested market |
| 2026-04-09 | Concept C (hybrid) = v2.0 upgrade path | Defer dual-mode to after contact validated on steel panels |
| 2026-04-09 | ⚠ ADC upgrade: ADS8688 external simultaneous ADC | G2 finding: STM32 sequential ADC insufficient for contact piezo TDOA |
| 2026-04-09 | ⚠ FTO: EP2040025A1 (piezo on target frame) | Safe domestically (VN). Blocks EU/NATO export. Commission NOIP search |
| 2026-04-09 | ⚠ FTO: KR101997387B1 (acoustic impact estimation) | Monitor. VN jurisdiction may not recognize |
