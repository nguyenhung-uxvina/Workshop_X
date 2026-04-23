---
project: V-SMASH-P
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
dependency_gate: DG-5 (V-L.Prototype.VALIDATED — PENDING)
---

# V-SMASH-P (PRO) — Product Proposal (P11)

> **Family position:** Full-capability variant. 24/7 thermal+CMOS fusion, advanced tracking, C4I networking.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-PRO |
| **Product code** | V-P |
| **Family position** | Premium — full-capability 24/7 fire control system |
| **Primary function** | All-weather AI-assisted fire control with thermal sensor fusion, multi-target tracking (IMM + Hungarian), and tactical data sharing |
| **Customer** | Vietnamese Army operations command, special operations, strategic asset defense |
| **End-user** | Professional C-UAS operator, designated marksman, squad leader |
| **Target market** | Operational units requiring 24/7 capability — night ops, border defense, VIP protection |

**One-sentence pitch:** Everything V-L does, but in total darkness, against 3g-maneuvering drones, while sharing target data with your squad.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | Full ACH expression — AI fuses CMOS + thermal + IMU for capability matching $18K+ imports |
| **IRONMESH** | Full connectivity: engagement data, fleet analytics, coaching data, C4I target sharing via CoT/UDP |
| **R2 loop** | Highest per-unit margin in handheld tier. Proves V-SMASH can compete with SMASH 2000+ on capability, not just cost. |
| **Local content** | **31%** — thermal sensor ($960) dominates BOM. Housing + assembly + SW local. Lowest local content in family. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Delta from V-L |
|---|-------------|--------|----------------|
| 1 | Detection range (day) | ≥300m | Same |
| 2 | Detection range (night/thermal) | ≥200m | NEW |
| 3 | Detection accuracy | ≥95% (day), ≥93% (night) | Night added |
| 4 | Tracking algorithm | IMM filter (CV+CA+CT models) | Upgraded from 6-state Kalman |
| 5 | Maneuver tracking | ≥3g sustained | Upgraded from 1.5g |
| 6 | Data association | Hungarian algorithm | Upgraded from Nearest-Neighbor |
| 7 | Sensor fusion | Weighted CMOS+LWIR blend, auto α-switching | NEW |
| 8 | C4I interface | CoT over UDP, AES-256, TAK-compatible | NEW |
| 9 | First-shot Pk @ 200m | ≥70% (day), ≥55% (night) | Improved from 60% |
| 10 | Sealing | IP67 | Upgraded from IP65 |
| 11 | Lens heater | 2W resistive (anti-fog) | NEW |
| 12 | Weight | ≤1.6 kg | Increased from 1.2kg |
| 13 | Battery life | ≥6 hours (3× 18650, 10200mAh) | Reduced from 8h (thermal power draw) |
| 14 | Unit cost | ≤$2,000 | 2.5× V-L |
| 15 | False positive rate | <5% | NEW (critical for premium tier) |
| 16 | **IFF: AI confidence gating** | FR-IFF-01/02/03/04 (family requirement — see P10) | Test + Analysis |

- **Cost target:** $1,920 unit cost / $5,000 price (28% of SMASH 2000+ Thermal at $18K)
- **Delivery target:** 12 months after V-L prototype validated (DG-5)
- **Key constraint:** Thermal sensor cost dominates BOM ($960 = 50% of materials). Local content at 31% — needs improvement plan for TCVN compliance.

---

## 4. WORKING PRINCIPLE OPTIONS

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: CMOS + FLIR Lepton 3.5 + IMM (Recommended)** | Proven thermal sensor, advanced tracking, full C4I | Known supply chain, good resolution/cost ratio | 31% local content, FLIR sole-source |
| B: CMOS + Infiray Core + IMM | Chinese thermal (better specs: 256×192) | Higher resolution, lower cost, shorter lead | Procurement resistance, dual-source concern |
| C: CMOS + LRF + Kalman (no thermal) | Laser rangefinder instead of thermal, precision ranging | Higher local content (~60%), no night gap | Loses 24/7 narrative, different product identity |

**Recommended: Option A** — V-P is the 24/7 product. Thermal is the identity. Option C is a different product (maps to original PRO-X marksman variant, could be V-P-X sub-variant).

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | **MEDIUM** | Sensor fusion algorithm (CMOS + thermal alignment, auto-switching) is new engineering. No V-L precedent. |
| **Schedule** | MEDIUM | 12 months development. IMM filter implementation + thermal fusion + C4I stack = significant SW effort. |
| **Market** | LOW | 24/7 capability explicitly requested. Competing with $18K imports at $5K. |
| **Local content** | **HIGH** | 31% is below 60% TCVN target. Must develop local content improvement plan (local thermal assembly, local PCB, local packaging) to reach ≥45%. |

**Kill condition:** Night Pk < 35% at 200m after thermal model v2 + IMM tuning. If thermal + advanced tracking cannot deliver meaningful night capability improvement over V-NV simpler approach, V-P premium pricing is unjustified. Also kill if local content cannot reach ≥45% within 24 months — TCVN compliance failure blocks military procurement.

---

## 6. NEXT STEP

- **If PROCEED:** Cannot start until DG-5 (V-L prototype validated). Pre-Phase 0: begin IMM filter algorithm development (SW work, no hardware dependency). Evaluate FLIR + Infiray thermal sensors (shared with V-NV).
- **If PAUSE:** Natural pause — DG-5 not met. Resume when V-L DVT passes.

---

## Local Content Improvement Plan

### Current Gap Analysis

V-P at 31% local content is the lowest in the V-SMASH family and below the 60% TCVN procurement threshold. Root cause: thermal sensor ($960) = 50% of materials BOM and 100% imported.

**QC FLAG-01 resolution: WAIVER + PHASED IMPROVEMENT**

V-P is accepted with a local content waiver for initial production, with a binding 3-phase improvement roadmap:

### Phase 1: Immediate (31% → 45%) — achievable at V-P launch

| Action | Current | Target | Delta | Method |
|--------|---------|--------|-------|--------|
| Local thermal module assembly | 0% | 15% | +15% | Contract local optics shop (Hòa Phát) for thermal module integration + alignment |
| Local PCB + carrier board fabrication | Partial | 100% | +5% | Vietnam Circuit Co. for all PCBs including carrier board |
| Local final assembly + test | 100% | 100% | — | Already local |
| Software | 100% | 100% | — | Already local |
| **Total** | **31%** | **~45%** | **+14pp** | |

### Phase 2: Medium-term (45% → 55%) — within 12 months of V-P production

| Action | Target | Method |
|--------|--------|--------|
| Local lens assembly | +5% | Contract Vietnamese optical workshop for lens grinding + coating |
| Increased housing content | +3% | Larger V-P housing (IP67) = more local CNC + anodize value |
| Local cable assembly | +2% | Shielded cable fabrication (available domestically) |
| **Total** | **~55%** | |

### Phase 3: Long-term (55% → 60%+) — requires strategic investment

| Action | Target | Method |
|--------|--------|--------|
| Local uncooled thermal detector fabrication | +8-10% | Partnership with Vietnamese research institute (VIELINA or NACENTECH). 3-5 year horizon. |
| Alternative: increase mechanical/SW value ratio | +5-8% | Redesign housing for more local machining content, add local testing fixtures |
| **Total** | **≥60%** | |

### Waiver Justification

1. **No Vietnamese alternative exists** — there is no domestic uncooled thermal detector manufacturer. Importing is the only option for Phase 1.
2. **V-P fills a critical capability gap** — 24/7 C-UAS is explicitly requested by Vietnamese military. Delaying V-P until 60% is achievable means years without night capability.
3. **V-NV provides a higher-local-content night option** — V-NV at 55-60% gives customers a TCVN-compliant night capability while V-P improves.
4. **Improvement roadmap is binding** — 31% → 45% at launch, 55% within 12 months, 60%+ on 3-5 year horizon.
5. **Precedent:** Vietnamese military has approved <60% local content for products with no domestic alternative (e.g., thermal optics, advanced semiconductors) when an improvement roadmap is filed.

### Kill condition (updated)

Local content < 45% at V-P production start → DELAY launch until Phase 1 improvement complete. Local content < 55% at 12 months post-launch → escalate to strategic review.
