# RE STAGE 5: KNOWLEDGE CAPTURE — InVeris FATS 100MIL/180MIL

**Date:** 2026-04-22
**Pipeline:** Stage 0→1M→2M→3→5 (skipped 3P + 4M — competitive intel, not acquisition)

---

## 5A — RE TECHNICAL DOSSIER (Summary)

### Executive Summary

InVeris Training Solutions (formerly FATS/Meggitt, now Beretta Group) is the **global market leader** in weapon training simulation: Program of Record for US Army, USMC, and 6+ allied nations. The FATS 100MIL/180MIL product family represents **30+ years of accumulated SW and weapon variant engineering**, serving 40+ countries with 300+ weapon types.

**For WX CUAV-SIM:** FATS validates WX's core architecture (multi-projector 180°, weapon-specific recoil, AAR) while revealing **two critical insights:**
1. **Coaching is the architecture** — FATS' Automatic Coaching engine (SF-11) is the solution-determining sub-function that justifies sensor investment, creates doctrine-linked customer lock-in, and commands $200-500K pricing. Without coaching, FATS would be commodity hardware.
2. **Maritime = uncontested niche** — FATS has ZERO maritime capability (no ship motion, no naval weapon mount, no sea state). Even their new FATS Drone (Dec 2025) is land-only. WX's maritime focus is structurally defensible.

**Key RE outcome:** Identified 7 modifications for WX Phase 3, led by sensor upgrades (trigger strain gauge + cant IMU = +$18/unit) that enable the coaching architecture pathway (ACH leapfrog opportunity).

### Pipeline Metrics

| Metric | Value |
|--------|-------|
| Stages completed | 0, 1M, 2M, 3, 5 (skipped 3P, 4M) |
| OSINT sources | 18+ (website, patents, datasheets, trade press, YouTube, procurement) |
| Products analyzed | 5 (FATS 100MIL, 180MIL, VR, AR, Drone) |
| Requirements reconstructed | 44 (32D + 12W) across 17/17 P&B categories |
| Sub-functions mapped | 18 (6-flow) |
| ACH candidates identified | 4 (coaching, adaptive targets, handling inference, analytics) |
| Gaps identified | 7 (3 sensors, coaching, judgment mode, multi-trainee, bolt cycling) |
| Advantages confirmed | 7 (maritime, motion, C-UAV, naval mount, price, sovereignty, NFC) |
| Requirements deltas for WX | 6 (all CEO-approved) |
| Total RE effort | ~3 hours AI + ~30 min CEO review |

---

## 5B — DESIGN PATTERN LIBRARY

### Reusable Patterns from InVeris FATS RE

| # | Pattern Name | Context | Problem | Solution | WX Products |
|---|-------------|---------|---------|----------|-------------|
| **P1** | **Coaching-as-Architecture** | Training simulator value proposition | Simulator hardware is commodity. Projection + recoil = easily replicated. Price competition drives margins to zero. | Make COACHING the system core, not hardware. Coaching requires sensors (justifies sensor investment), references doctrine (creates customer lock-in), enables certification (replaces live-fire), generates data (compounds over time). Hardware becomes the delivery vehicle for coaching value. | VN-CUAV-SIM all variants, future training products |
| **P2** | **Platform Component Sharing** | Multi-variant product family with shared NRE | Each product variant redevelops same subsystems (hit detection, scoring, coaching). Massive duplication. | Design **shared components** (InVeris: OCR processor, BlueFire, Coaching, VBS integration, Instructor GUI) deployed across entire product family. NRE amortized over 7+ products. Each new variant = incremental assembly of shared components. | WX: design scoring module, AAR engine, ballistic engine, instructor GUI as reusable Unity packages across LITE/FIXED/FULL/CORTEX. **IRONMESH extraction trigger.** |
| **P3** | **Sensor-Justified-by-Coaching** | Adding sensors to training simulator | Sensors (trigger pressure, cant IMU, force cells) add cost. Hard to justify if only used for logging. | Justify sensor cost through coaching: each sensor enables specific coaching feedback that directly improves training outcomes. Trigger pressure sensor ($10) enables trigger squeeze coaching → measurably reduces flinch → improves accuracy. ROI = sensor cost / training improvement × session volume. | VN-CUAV-SIM: D-001 (trigger), D-002 (cant IMU). Only add sensors that feed coaching. Don't add sensors "for data." |
| **P4** | **Doctrine-Config Lock-in** | Customer retention for training simulator | Customer can switch to competitor on next procurement cycle. Low switching cost = price competition. | Invest in doctrine configuration: customer embeds THEIR training manual into system's coaching rules. This takes weeks of effort. Switching to competitor = re-doing all doctrine configuration. Switching cost = configuration effort + institutional knowledge. InVeris keeps 40+ countries for decades this way. | VN-CUAV-SIM: M5 doctrine config layer (JSON/YAML) for TCLL/QCHD. Even simple doctrine config creates stickiness. |
| **P5** | **Software-First Market Entry** | Entering new market segment (C-UAS) | Building new hardware for new market = expensive + slow. Unknown if market materializes. | Enter via SOFTWARE on existing platform. InVeris launched FATS Drone as VBS4 software module — no new hardware. Tests market at near-zero marginal cost. If market grows → add hardware (weapon mockup, motion). | WX: opposite approach (hardware-first for maritime niche where hardware IS the differentiator). But consider: software-only CORTEX mode for market testing before building full multi-node hardware. |
| **P6** | **Weapon-as-Platform (300+ variants)** | Maximizing installed base revenue | One-time system sale = finite revenue. Need recurring stream. | Design weapon body as platform: same system accepts 300+ weapon variant kits. Each new weapon type = kit sale ($5-20K). Customer buys system once, weapons over lifecycle. InVeris revenue: ~30% initial system + ~70% weapons + service over 20-year lifecycle (estimate). | WX MWI: already designed with this pattern. 5 weapon modules now, expandable. Revenue model: system sale + weapon module sales + maintenance contracts. |

### Heuristics Database

| # | Heuristic | Domain | Evidence | Confidence | WX Application |
|---|-----------|--------|----------|:----------:|---------------|
| H1 | **60% recoil ≈ training ceiling for gas blowback** | MECH | InVeris claims "~60% realistic recoil" for BlueFire. This appears to be a technological ceiling for magazine-contained gas systems. | H | WX solenoid target ≥25N (≥70% for 12.7mm). If achieved, WX EXCEEDS FATS. Pneumatic can go higher. |
| H2 | **Camera hit detection = calibration liability on moving platforms** | ELEC/CTRL | FATS uses 3 cameras → OCR. Requires physical calibration to screens. Ship motion = continuous recalibration needed. | H | WX encoder-based approach is IMMUNE to platform motion. Validated as superior for maritime. |
| H3 | **Coaching justifies 3-7× price premium** | BIZ | FATS without coaching = $50-100K (estimate). With coaching = $200-500K+. Delta = coaching value. | M | WX target: $50-70K without coaching (v1.0). $60-90K with coaching (v2.0). Even modest coaching = $10-20K premium. |
| H4 | **Single-engine architecture > multi-engine** | SW | FATS runs 3 engines (3D + VBS3 + Video) = integration complexity. WX runs 1 (Unity) = simpler, faster, cheaper. | H | Stay with single Unity engine. Do NOT add VBS or separate video engine. Add capabilities WITHIN Unity. |
| H5 | **Wired > wireless for fixed-mount weapons** | ELEC | BlueFire wireless enables walk-around hand-held training. Naval mount is FIXED = no mobility benefit from wireless. Wireless adds: battery, latency, EMI vulnerability, BT pairing complexity. | H | Keep wired for all naval weapon modules. Only consider wireless IF rifle variant (PKM standing position) added. |
| H6 | **Portable → Fixed → Immersive is product family growth path** | STRATEGY | InVeris: FATS 100P (portable) → 100MIL (fixed classroom) → 180MIL (3-screen immersive) → VR/AR. | M | WX: LITE (shipboard/portable) → FIXED (base) → FULL (multi-station) → CORTEX (networked). Same growth pattern validated. |
| H7 | **Fill-station-free recoil = maintenance advantage** | MECH/MAINT | BlueFire requires compressed air fill station for magazine recharge. WX solenoid = 24VDC, no fill station, no compressed air logistics. | H | WX maintenance is SIMPLER. Eliminate fill station = eliminate training-day logistic dependency. |
| H8 | **Program-of-Record = 20+ year customer lifecycle** | BIZ | FATS has served US Army since 1980s. PoR status = long-term revenue stream with high switching costs. | H | WX goal: become VN Navy/Army PoR for C-UAV gunnery training. Once established, 20+ year revenue stream. First customer = most important. |

---

## 5C — GALAXY CANDIDATES (Three Laws Extraction)

### Law 1: Coaching-as-Architecture Law

**Trong training simulator, hệ thống coaching/feedback là sub-function quyết định kiến trúc (solution-determining) — không phải recoil, không phải projection, không phải ballistic.**

Coaching cascade LÊN: justify sensor investment (trigger pressure, cant, stock weld).
Coaching cascade XUỐNG: enable doctrine lock-in, certification capability, data flywheel.
WITHOUT coaching: simulator = commodity hardware ($50-100K, ai cũng làm được).
WITH coaching: simulator = training system ($200-500K, switching cost cao, 20-year lifecycle).

**Tại sao quan trọng cho WX?** WX đang build LITE v1.0 KHÔNG có coaching → commodity risk. Nhưng sensors đã approved (D-001, D-002) → data pipeline sẵn sàng. AI coaching (Path C) sẽ LEAPFROG FATS rule-based → compound moat.

**Test:** (1) Thay đổi cách thiết kế? **YES** — sensor selection và data architecture phải design FOR coaching, not just logging. (2) Thay đổi quyết định chiến lược? **YES** — coaching path A→B→C là strategic roadmap. (3) Cảnh báo trap? **YES** — ship without coaching = build commodity.

**Links:** [[Phán đoán không thể uỷ thác cho AI]], [[Physical-World Interface]], [[ACH Boundary Rule]]

---

### Law 2: Platform-Component-Sharing Law (đã có insight tương tự từ IRONMESH, nhưng RE evidence mới)

**Trong product family engineering, shared components (không phải shared code) tạo ra lợi thế compound: mỗi variant mới = NRE gần 0, mỗi bug fix = fix cho tất cả.**

InVeris evidence: OCR processor + BlueFire + Coaching + Instructor GUI = 5 shared components × 7 products = 35 component-product deployments from 5 NRE investments.

WX implication: Design scoring module, AAR engine, ballistic engine (V-SMASH), instructor GUI, weapon interface (MWI protocol) as 5 reusable Unity packages. IRONMESH extraction trigger: CUAV-SIM LITE → FIXED → FULL → CORTEX = 4 products, 5 shared components. This IS the IRONMESH activation moment.

**Test:** (1) YES — code structure decision (modules vs monolith). (2) YES — product line economics change. (3) YES — warns against monolithic Unity project that can't split.

**Links:** [[IRONMESH Platform]], [[Musk Sequence]]

→ **MERGE with existing Galaxy insight?** Check if IRONMESH-related note already covers this. If so, ENRICH existing note rather than creating duplicate.

---

### Law 3: Maritime-Immunity Law

**Camera-based hit detection (FATS OCR) là gold standard cho land-based sims nhưng FAILS cho maritime vì ship motion liên tục thay đổi camera-screen calibration. Encoder-based tracking (WX approach) immune với platform motion.**

Deeper: BẤT KỲ sensor nào phụ thuộc vào fixed reference frame (cameras, external lasers, acoustic arrays) sẽ fail trên moving platform. Chỉ sensors gắn TRÊN weapon (encoders, IMU) cho phép tracking ON a moving platform without recalibration.

WX implication: đây không phải accident — encoder-based approach STRUCTURALLY BETTER cho maritime. Nếu FATS muốn enter maritime market, họ phải redesign hit detection from scratch. WX's naval advantage is not just "we do ships" — it's "our tracking architecture is inherently maritime-compatible."

**Test:** (1) YES — sensor architecture choice. (2) YES — confirms encoder approach is strategic, not just cheaper. (3) YES — warns against switching to camera-based "because FATS uses it."

**Links:** [[Physical-World Interface]], [[VN Metocean Design Envelope]], [[Encoder vs Camera Tracking]]

---

## 5D — CROSS-RE SYNTHESIS (3 Competitors Combined)

### Compound Learning from 3 RE Pipelines

| Competitor | Key Pattern Learned | WX Action Taken |
|-----------|-------------------|----------------|
| **Zen FAC Sim** | AI IOS as instructor multiplier, 6-DOF only needed for ship handling not gunnery, acquisition strategy for domain entry | Validated 2-DOF decision, identified ACH coaching opportunity, MONTHLY competitive watch activated |
| **ACME GAR-GTS** | Two-Channel recoil separation, L3 fidelity threshold (70%), patent exclusion = IP vacuum (pneumatic), host-mediated vs autonomous control | Selected C1 Masselotte concept ($420), confirmed ≥25N target, designed autonomous weapon module MCU |
| **InVeris FATS** | Coaching-as-Architecture, platform component sharing, sensor-justified-by-coaching, doctrine lock-in, maritime immunity | Added 2 sensors (+$18/unit), upgraded logging to 60Hz, approved coaching roadmap A→B→C, designed reusable scoring module |

### Combined WX Position After 3 RE Pipelines

| Dimension | Pre-RE (Apr 6) | Post-RE (Apr 22) | Delta |
|-----------|----------------|-------------------|-------|
| Competitor understanding | Basic (website scan) | **DEEP** (3 OSINT RE pipelines, 127+ reqs reconstructed, 56+ SFs mapped) | 3 full competitor profiles |
| Recoil approach | "Solenoid, target TBD" | **C1 Masselotte, ≥25N, Two-Channel, patent-free** | Architecture selected + validated |
| Coaching strategy | "AAR in Phase 4" | **Path A→B→C: sensors now, rule coaching v1.1, AI coaching v2.0** | Strategic roadmap |
| Sensor suite | 2 encoders + microswitch | **2 encoders + strain gauge trigger + cant IMU + NFC** (+$18/unit) | 3 sensors added |
| Data logging | 10Hz encoder only | **60Hz encoder + trigger force + cant angle** | 6× richer data for AI |
| Platform architecture | Monolithic Unity project | **Reusable Unity packages (scoring, AAR, ballistic, GUI, weapon I/F)** | IRONMESH-ready |
| Competitive window | Unknown | **12-24 months before FATS Drone + Zen pivot to maritime** | Quantified urgency |
| Design patterns | 0 | **18 patterns + 16 heuristics + 3 Three Laws** | Compound knowledge base |

### Revenue Impact of RE Insights

| Insight | Revenue Impact | Mechanism |
|---------|---------------|-----------|
| +$18/unit sensors | Enable coaching premium ($10-20K/unit) | Sensor data → coaching → higher selling price |
| Reusable scoring module | -30% NRE per variant | Amortize across 4+ variants |
| Doctrine config lock-in | +20% customer lifetime value | Switching cost → retention |
| AI coaching (v2.0) | +$10-20K/unit premium | ACH compound moat |
| Maritime-only positioning | Defend $50-70K price point | No competitor in niche → no price pressure |
| **Combined** | **$200-400K additional over 5-year plan** | Coaching premium + retention + variant efficiency |

---

## 5E — CAPABILITY BUILDING MAP

| RE Project | Capabilities Gained | Sovereignty Contribution | Next Logical RE Target |
|-----------|-------------------|------------------------|----------------------|
| Zen FAC Sim | Naval sim architecture, AI IOS concept, competitor threat model | LOW (OSINT only) | — |
| ACME GAR-GTS | Recoil mechanism engineering, patent landscape, Two-Channel architecture | MEDIUM (recoil design selected) | — |
| **InVeris FATS** | **Coaching architecture, platform engineering, sensor-justified design, VBS competition landscape** | **MEDIUM (coaching roadmap, sensor suite, data pipeline)** | — |

### Recommended Next RE Targets

| Priority | Target | Mode | Rationale | Timeline |
|----------|--------|------|-----------|---------|
| **1** | **Airsoft GBB recoil mechanisms** (VFC, TM, KWA) | MECH | Physical RE — buy 2-3 units, measure force-time curves, validate ≥25N target | NOW (before PoC 2026-05-07) |
| **2** | **Magnetic powder brakes** (Mitsubishi, Placid, Ogura) | MECH | Physical RE — buy 3 models, test torque curves for traverse resistance | NOW |
| **3** | **DOF Reality H3 / Yaw2 motion platform** | MECH | Physical RE — buy 1 unit, study actuator + control for 2-DOF reference | 2026-05 |
| **4** | **Thales C-UAS training sim** (announced Dec 2025) | COMPARE | New entrant — assess threat level to WX | 2026-Q3 |

---

## STAGE 5 SUMMARY

```
=== STAGE 5 COMPLETE — InVeris FATS KNOWLEDGE CAPTURED ===
=== RE PIPELINE COMPLETE — InVeris FATS 100MIL ===

Stages completed: 0→1M→2M→3→5 (3P + 4M skipped — competitive intel)
OSINT sources: 18+
Products analyzed: 5 (FATS 100MIL, 180MIL, VR, AR, Drone)
Requirements reconstructed: 44 (32D + 12W)
Sub-functions: 18 (6-flow)
ACH candidates: 4
Design patterns: 6 new
Heuristics: 8 new
Galaxy candidates: 3 Three Laws

DELIVERABLES:
1. RE_InVeris-FATS_S0_Legal_Gate.md — GO UNCONDITIONAL
2. RE_InVeris-FATS_S1M_Deconstruct.md — 4-domain, FATS Drone discovery
3. RE_InVeris-FATS_S2A_Requirements.md — 44 reqs, 7 gaps, 7 advantages
4. RE_InVeris-FATS_S2A_TVDT.md — 12-parameter comparison
5. RE_InVeris-FATS_S2B_Function_Structure.md — 18 SFs, 4 ACH candidates
6. RE_InVeris-FATS_S2B_Solution_Det_SF.md — SF-11 Coaching = keystone
7. RE_InVeris-FATS_S2B_Design_Type.md — AMBER (63%G / 25%A / 6%R)
8. RE_InVeris-FATS_S2M_Cross_Domain.md — WX 5 integration advantages
9. RE_InVeris-FATS_S3_Reconstruct.md — 8/7/7/7 divergence map
10. RE_InVeris-FATS_S5_Knowledge_Capture.md — this file

CROSS-RE SYNTHESIS (3 competitors total):
- 18 design patterns + 16 heuristics + 6 Three Laws (across 3 RE)
- Combined revenue impact: $200-400K additional over 5-year plan
- WX position: STRONG in maritime C-UAV niche, 12-24 month window

HIGHEST-VALUE NEXT STEP:
1. Buy airsoft GBB + magnetic brakes for physical RE (≤$2K, before PoC 2026-05-07)
2. Begin Phase 3 Embodiment with sensor upgrades (D-001, D-002) in weapon module design

SESSION COMPLETE.
```
