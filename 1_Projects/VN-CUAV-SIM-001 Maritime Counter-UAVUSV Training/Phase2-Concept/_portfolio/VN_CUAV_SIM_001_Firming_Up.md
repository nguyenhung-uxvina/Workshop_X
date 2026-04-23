---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: BC (consolidated)
method: Pahl & Beitz §6.5.2 Firming Up — 9 Properties per Concept
---

# Firming Up — VN-CUAV-SIM-001
## 9 P&B Properties × 4 Concept Variants (±30% accuracy)

**Ngày:** 2026-04-14
**Sources:** TNKCT v1.0-1.1, Concept Descriptions v1.0, FORGE Cost Analysis, ICDM CDTC, System-Arch Domain Budgets

---

## Consolidated Property Table

| # | Property | LITE PA-2 | FIXED PA-8 | FULL PA-6 | CORTEX PA-9 (C2 Hub) | Confidence | Source |
|---|----------|:---------:|:----------:|:---------:|:--------------------:|:----------:|--------|
| 1 | **Performance** (DQM) | 93.2% | 93.5%* | 97.1% | 91.8% | HIGH | ICDM CSR evaluation |
| 2 | **Reliability** (MTBF est.) | **≥500h** (Ma-01 req) | ≥600h (no motion = fewer wear parts) | ≥400h (shared deck adds complexity) | ≥1000h (SW-dominated, COTS server) | LOW (±30%) | MTBF prediction pending Phase 3. Estimates based on component count + duty cycle. |
| 3 | **Fault susceptibility** | LOW — 11 coupling score. Single-point: GPU failure → system down. | LOW — 11 coupling. Single-point: GPU. | **MEDIUM** — 16 coupling. Shared deck vibration + 6-proj calibration drift. | LOW — 14 coupling. WAN loss → graceful standalone fallback. | MEDIUM | BD Coupling Analysis |
| 4 | **Size (L×W×H)** | Room 6×8×3m. Weapon stn 2×2m. Motion platform 1.5×1.5×0.6m. Total footprint ~20m². | Room 8×8×3m. 2 weapon stns 2×2m + 1.5m gap. Screen 6×2m. Footprint ~30m². | Room **10×10×3m**. Shared deck 3×4m. Cylindrical screen Ø8×2m. Footprint ~60m². | C2 Hub: 1 rack (0.6×0.8×1.8m) + 4×55" monitors. Room 4×6m. Per-node: same as variant. | HIGH | Concept Descriptions |
| 5 | **Weight (est.)** | Weapon stn ~25kg. Motion platform ~40kg. Screen frame ~15kg. Electronics ~20kg. **Total ~100kg** (excl. packaging). | 2× weapon stns ~50kg. Screen frame 6m ~25kg. Electronics ~25kg. **Total ~100kg**. | 2-3× weapon stns ~60-75kg. Shared deck ~120kg. Screen frame ~30kg. Electronics ~35kg. **Total ~245-260kg**. | C2 Hub: server ~15kg + 4 monitors ~80kg + rack ~20kg. **Total ~115kg**. | LOW (±30%) | Estimates from component specs. Phase 3 BOM will refine. |
| 6 | **Unit cost (BOM ±30%)** | **$12,560-17,550** | **$10,860-14,860** | **$28,000-38,000** (3-stn) | **$26,000-35,000** (C2 Hub only) | HIGH | TNKCT + FORGE Cost Analysis |
| 7 | **Service life** | **10 years** (L-01). GPU/SW mid-life upgrade at year 5. Projector lamp ~10,000h (replace at ~5yr). Motion actuators ~15,000h. | 10 years. Same as LITE minus motion wear. Projector ×4 lamp replacement at ~5yr. | 10 years. Shared deck actuators ×4-6 = higher maintenance. 6 projector lamps. | 10 years (server) + SW updates every 6 months (L-02 CORTEX). | MEDIUM | L-01 requirement + component lifecycle estimates |
| 8 | **VN manufacturability** | **HIGH.** WX CNC + welding for SS1/SS3. COTS electronics (encoder, ESP32, projector). Unity SW = VN developer pool. P-01: ~62% local content. | HIGH. Same as LITE + 1 extra cradle. No motion = simpler. | **MEDIUM.** Shared deck = custom heavy fabrication. 6-proj calibration = specialist skill. Matrox sourcing = import. | **LOW for C2 Hub** (COTS server + import monitors). HIGH for Node Agent (SW only). | HIGH | P-01, P-02 analysis |
| 9 | **ACH readiness** (FORGE SHIFT) | **GO UNCONDITIONAL.** 7 ACH layers identified. IRL 3.4. Target AI Layer 4 (adaptive) = ACH opportunity. | GO. Same ACH layers. IRL 3.4. | GO. Crew coordination scoring = additional ACH layer (crew performance prediction). | GO. Joint force analytics = highest ACH potential (multi-node pattern detection). | HIGH | FORGE SHIFT Assessment |

*FIXED adjusted: A7 motion removed from DQM

---

## Property Gap Assessment

| Property | Data Quality | Phase 3 Action |
|----------|:----------:|----------------|
| Performance (DQM) | ✅ Quantified | Refine after recoil PoC (B3 haptic TBD → actual CSR) |
| Reliability (MTBF) | ⚠️ Estimate only | MIL-HDBK-217F prediction calculation in Phase 3 |
| Fault susceptibility | ✅ Scored (coupling) | FMEA (component-level) in Phase 3 |
| Size | ✅ Defined | Layout drawings in Phase 3 BA |
| Weight | ⚠️ Estimate ±30% | Detailed BOM weight in Phase 3 BD |
| Unit cost | ✅ Within ±30% | Detailed BOM costing in Phase 3 BD |
| Service life | ⚠️ Based on L-01 + component specs | Reliability prediction + maintenance schedule in Phase 3 |
| VN manufacturability | ✅ Assessed | Make/buy decision per component in Phase 3 |
| ACH readiness | ✅ FORGE SHIFT scored | ACH implementation plan in Phase 3+ |

**3 properties need Phase 3 refinement** (MTBF, weight, service life). All within ±30% accuracy threshold required by P&B §6.5.2.

---

*Consolidated from TNKCT v1.0-1.1, Concept Descriptions, FORGE, ICDM. VDI 2221:2019 §6.5.2 compliant.*
