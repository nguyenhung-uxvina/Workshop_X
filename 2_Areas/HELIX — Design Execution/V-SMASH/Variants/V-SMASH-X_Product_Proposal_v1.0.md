---
project: V-SMASH-X
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
dependency_gate: DG-1 (V-L.Phase3.LOCKED — MET)
---

# V-SMASH-X (Export) — Product Proposal (P11)

> **Family position:** First export variant. Feature-removed V-L for ASEAN markets.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-X (Export) |
| **Product code** | V-X |
| **Family position** | Export derivative — V-L with capability downgrade for uncontrolled export |
| **Primary function** | AI-assisted fire control for counter-UAS engagement — reduced AI model, no IRONMESH connectivity |
| **Customer** | ASEAN military procurement agencies (Philippines, Indonesia, Thailand, Myanmar) |
| **End-user** | Infantry soldier in partner nation armies |
| **Target market** | Southeast Asian militaries seeking affordable C-UAS capability without Israeli/Western import dependency |

**One-sentence pitch:** The world's most affordable AI fire control sight — proven Vietnamese technology at a price ASEAN armies can actually deploy at scale.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | Same V-L manufacturing line. Feature removal (not addition) = fastest variant to market. |
| **IRONMESH** | **Removed** — IRONMESH fleet data stays within Vietnam's defense ecosystem. Export variant operates standalone only. |
| **R2 loop** | Export revenue funds V-SMASH family R&D. No IRONMESH subscription (data stays domestic). |
| **Local content** | 75% (higher than V-L — no IRONMESH SW module reduces import dependency). |
| **Export compliance** | A-EXPORT agent reviews every design decision. Jetson Nano INT8 model (<100MB) below EAR threshold. No ITAR components. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Delta from V-L |
|---|-------------|--------|----------------|
| 1 | Drone detection range | ≥250m (daylight) | Reduced from 300m (smaller model) |
| 2 | Detection accuracy | ≥90% | Reduced from 95% (pruned model) |
| 3 | First-shot Pk @ 200m | ≥50% | Reduced from 60% |
| 4 | System latency | ≤120ms | Relaxed from 100ms |
| 5 | AI model | YOLOv8-pico (further quantized, 3 classes max) | Reduced from nano |
| 6 | IRONMESH connectivity | **REMOVED** | Key export differentiation |
| 7 | Data export | microSD log only (no wireless) | No fleet telemetry |
| 8 | Tracking | 3 simultaneous targets (reduced) | Down from 5 |
| 9 | Unit cost | ≤$700 | Lower than V-L (removed SW module) |
| 10 | Weight | ≤1.1 kg | Slightly lighter (no wireless module) |

- **Cost target:** ≤$700 unit cost
- **Price target:** $2,500 (export pricing — lower than domestic V-L to win volume)
- **Delivery target:** 3-4 months after V-L Phase 3 lock (DG-1 already met)
- **Key constraint:** Must pass Workshop X export compliance review + Vietnam export licensing

---

## 4. WORKING PRINCIPLE OPTIONS

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: V-L minus features (Recommended)** | Same hardware, pruned AI model, no IRONMESH SW, reduced track pool | Fastest to market, shared BOM, proven design | Still requires export compliance review |
| B: Simplified hardware | Remove solenoid fire gate, lead indicator only (like V-M) | Maximum simplification, lowest export risk | Different product identity, confuses positioning vs V-M |
| C: Alternative processor | Replace Jetson Nano with non-NVIDIA processor to avoid any EAR concern | Eliminates NVIDIA supply chain dependency | 6+ months additional development, unproven |

**Recommended: Option A** — V-L is confirmed not EAR-controlled at LITE tier. Feature removal is software-only, hardware BOM shared.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | LOW | Feature removal, not addition. V-L design proven. |
| **Schedule** | LOW | 3-4 months. Shared hardware line, SW delta only. |
| **Market** | **MEDIUM** | ASEAN procurement cycles are long (12-18 months from first contact to PO). Need early engagement. |
| **Export/Legal** | **HIGH** | Vietnam export licensing for defense products. First Workshop X export — process unknown, timeline uncertain. Must engage legal counsel early. |

**Kill condition:** Vietnam export license denied or delayed >12 months. Also kill if ASEAN competing product (Chinese) enters at <$1,500 before V-X reaches market — margin insufficient.

---

## 6. NEXT STEP

- **If PROCEED:** Begin Phase 1 — derive V-X requirements from V-L list (subtract features). Parallel: engage legal counsel on Vietnam defense export process. ~60-70 requirements.
- **If PAUSE:** Resume when V-L prototype validates shared hardware (Q3'26). V-X can start Phase 0/1 now since DG-1 is met.

---

## Export Compliance Checklist (A-EXPORT)

| Item | Status | Action |
|------|--------|--------|
| Jetson Nano EAR classification | Not controlled (commercial COTS) | Confirmed |
| AI model size | <100MB (INT8 quantized) | Below threshold |
| ITAR components in BOM | None identified | Confirmed |
| Vietnam defense export license | **NOT ASSESSED** | Engage legal counsel |
| ASEAN import regulations per country | **NOT ASSESSED** | Country-specific review needed |
| IRONMESH data segregation | Removed from V-X by design | Confirmed |
