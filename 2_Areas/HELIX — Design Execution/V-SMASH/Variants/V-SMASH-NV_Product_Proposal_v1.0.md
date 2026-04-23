---
project: V-SMASH-NV
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
dependency_gate: DG-4 (V-L.Prototype.VALIDATED — PENDING)
---

# V-SMASH-NV (Night Vision) — Product Proposal (P11)

> **Family position:** Night capability add-on. Bridges V-L (daylight) and V-P (full 24/7). Dedicated thermal variant.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-NV (Night Vision) |
| **Product code** | V-NV |
| **Family position** | Night-capable variant — V-L + uncooled thermal sensor |
| **Primary function** | AI-assisted fire control with thermal imaging for 24/7 drone engagement |
| **Customer** | Vietnamese Army operations command (night ops units, border defense) |
| **End-user** | Infantry soldier on night patrol, border guard on watch duty |
| **Target market** | Units requiring night C-UAS capability at lower cost than V-P (PRO) |

**One-sentence pitch:** The same AI that kills drones in daylight — now it sees them in the dark.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | V-L AI core + thermal sensor integration. Thermal R&D is reusable by V-P (declared as opportunity, not dependency). |
| **IRONMESH** | Same connectivity as V-L. Night engagement data is highest-value training data for family AI. |
| **R2 loop** | Higher ASP ($4,500) than V-L ($3,000). Thermal addresses high-value military need (night ops = operational, not just training). |
| **Local content** | **55-60%** — thermal sensor is imported (FLIR Lepton 3.5 or Infiray T2S, $400-600). Housing and integration local. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Delta from V-L |
|---|-------------|--------|----------------|
| 1 | Detection range (daylight) | ≥300m | Same as V-L |
| 2 | Detection range (night/thermal) | ≥200m | NEW — thermal LWIR |
| 3 | Thermal resolution | ≥160×120 pixels (LWIR 8-14µm) | NEW |
| 4 | Sensor fusion | Auto-switch CMOS↔thermal based on ambient light | NEW |
| 5 | Detection accuracy (night) | ≥90% | Lower than day (thermal resolution limit) |
| 11 | **IFF: AI confidence gating** | FR-IFF-01/02/03/04 (family requirement — see P10) | Test + Analysis |
| 6 | First-shot Pk @ 200m (night) | ≥45% | Lower than day (≥60%) — reduced image quality |
| 7 | Weight | ≤1.5 kg (V-L 1.2kg + thermal module) | +0.3kg |
| 8 | Battery life | ≥6 hours (thermal draws additional power) | Reduced from 8h |
| 9 | Unit cost | ≤$1,400 ($784 V-L base + $400-600 thermal) | +80% vs V-L |
| 10 | Environmental | IP65, -10°C to +55°C (same as V-L) | Same |

- **Cost target:** ≤$1,400 unit cost
- **Price target:** $4,500 (1.5× V-L, reflects night capability premium)
- **Delivery target:** 8 months after V-L prototype validated (DG-4)
- **Key constraint:** Thermal sensor procurement (sole-source FLIR, 12-week lead) and night training data collection (≥2,000 thermal drone images for YOLO retraining)

---

## 4. WORKING PRINCIPLE OPTIONS

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: Clip-on thermal module** | Separate thermal module clips onto V-L. V-L detachable, usable standalone in day. | Maximum modularity, V-L stays unchanged, customer buys upgrade later | Two pieces to carry, alignment risk, heavier total |
| **B: Integrated dual-sensor (Recommended)** | Single housing with CMOS + thermal side-by-side. Auto-switching. | Clean UX, better fusion, lighter than clip-on total | New housing design, cannot separate V-L |
| C: Thermal-only (no CMOS) | Pure thermal sight, no visible camera | Simplest, lightest | Loses daylight advantage, thermal resolution insufficient for classification |

**Recommended: Option B** — integrated dual-sensor is the V-NV identity. Option A is "V-L + accessory" which confuses product positioning. V-NV should be a standalone product.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | **MEDIUM** | Night AI model needs retraining on thermal imagery. Thermal drone signatures differ from visible (shape → heat blob). ≥2,000 labeled thermal images required. |
| **Schedule** | MEDIUM | 8 months development. FLIR Lepton lead time (12 weeks) is on critical path. Order sensors before DG-4 approval (risk buy). |
| **Market** | LOW | Night ops capability is explicitly requested by Vietnamese military. No Vietnamese night-capable C-UAS exists. |
| **Supply** | **HIGH** | FLIR Lepton 3.5 is sole-source (FLIR/Teledyne). Infiray T2S (Chinese) is alternative but may face procurement resistance for military use. Need dual-source strategy. |

**Kill condition:** Night detection accuracy <80% after thermal model v2 (retrained on 2,000+ images). If thermal resolution is fundamentally insufficient for drone classification at 200m, V-NV thesis fails — customer should wait for V-P (higher-res thermal).

---

## 6. NEXT STEP

- **If PROCEED:** Cannot start until DG-4 (V-L prototype validated). Pre-Phase 0 action: begin thermal sensor evaluation (order samples of FLIR Lepton 3.5 + Infiray T2S for bench testing). Begin night drone image collection using V-L prototype as capture platform.
- **If PAUSE:** Natural pause — DG-4 not yet met. Resume when V-L DVT passes.

---

## Thermal Sensor Trade Study (Pre-Phase 0)

| Sensor | Resolution | NETD | Price | Lead Time | Risk |
|--------|-----------|------|-------|-----------|------|
| **FLIR Lepton 3.5** | 160×120 | <50mK | $400-500 | 12 weeks | Sole-source, US export |
| **Infiray T2S** | 256×192 | <40mK | $350-450 | 8 weeks | Chinese origin, procurement concern |
| **Seek Thermal Compact** | 206×156 | <70mK | $250-300 | 6 weeks | Consumer-grade, durability unknown |

**Recommendation:** Evaluate FLIR + Infiray in parallel. Infiray has better specs and lower cost, but military procurement may resist Chinese thermal sensors. Decision at DG-4 gate.

---

## Reuse Opportunity

V-NV thermal integration (sensor mounting, fusion algorithm, thermal AI model) is directly reusable by V-P (PRO). This is declared as **opportunity**, not dependency:
- V-P can proceed independently with its own thermal integration
- If V-NV completes thermal work first, V-P reuses it (saves ~2 months)
- If V-P reaches Phase 2 before V-NV, V-P does its own (no waiting)
