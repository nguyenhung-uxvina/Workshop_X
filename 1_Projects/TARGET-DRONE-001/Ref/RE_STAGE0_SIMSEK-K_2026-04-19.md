---
created: 2026-04-19
type: re-legal-gate
source: /reverse-engineering --mode mecha --stage 0
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
decision: CONDITIONAL GO
tags: [#type/re-report, #status/completed]
---

# RE STAGE 0: IP & LEGAL GATE — Simsek-K (TAI)
## /reverse-engineering "Simsek-K" --mode mecha | 2026-04-19

---

## CEO Decision: CONDITIONAL GO

Conditions:
1. ITAR STATUS: Obtain written confirmation from TAI that Simsek-K (including TEI TJ-90) is ITAR-free
2. TURKPATENT SEARCH: Complete Turkish-language patent search before Stage 1 physical analysis
3. CLEAN-ROOM PROTOCOL: All RE work documented as independent development
4. SOFTWARE BOUNDARY: RE limited to L1-L2 (external observation + interface analysis)
5. PARTNERSHIP PARALLEL: RE proceeds in parallel with TAI partnership negotiation

---

## 0A — IP Landscape

| Category | Finding | Risk | Confidence |
|----------|---------|------|------------|
| Utility patents | No Simsek-specific patents found in Google Patents / Espacenet. TAI (state-owned) likely relies on trade secrets + government classification | LOW | Medium |
| Design patents | No design patents surfaced for Simsek airframe | LOW | Medium |
| Trade secrets | Likely in: TEI TJ-90 metallurgy, flight control algorithms, MDI scoring, RCS augmentation design | MEDIUM | High |
| Patent expiration | N/A — no relevant patents identified | — | — |
| Jurisdictional coverage | Turkey (TURKPATENT), no international PCT filings found | LOW | Medium |

Patent fence around jet target drones is weak globally. Product category is mature (BQM-34 Firebee, 1951). Primary IP risk is in subsystem trade secrets, not patents.

---

## 0B — Export Control

| Regime | Applicability | Risk |
|--------|--------------|------|
| ITAR (US) | Turkey NOT subject to ITAR for domestic products. If TEI TJ-90 contains US-origin components → re-export restrictions. ENGINE ORIGIN = SINGLE BIGGEST UNKNOWN. | UNKNOWN → must verify |
| Wassenaar | Turkey IS member. Simsek-K = ML10 (military aircraft). Export requires TAREKS license. | MEDIUM |
| MTCR | Turkey IS member. Simsek-K (500km range, 83kg MTOW, 18kg payload) → Category II. Exportable with notification. | MEDIUM |
| EU | No EU arms embargo on Turkey. N/A for TAI→VN direct. | LOW |
| UN | Neither Turkey nor Vietnam under embargo. | NEGLIGIBLE |

Mitigation: Demand ITAR-free certification from TAI as condition of procurement.

---

## 0C — Vietnam Legal Framework

| Law | Relevance | Implication |
|-----|-----------|-------------|
| Luat CNQP 2024 | Defense production, TT, import | Import license + TT agreement required |
| Law 32/2021/QH15 | Government procurement | WX must be named as Vietnamese partner |
| IP Law VN 2022 | Trade secret protection | Clean-room RE legally recognized |
| Decree 69/2018 | Technology transfer | MoD + MoST approval for defense TT |
| VN-Turkey bilateral | Defense MOU 2010, renewed | GREEN — legal pathway exists |

No legal barrier to procurement or RE through proper channels (QPAN approval).

---

## 0D — RE Legality Assessment

| Dimension | Assessment | Risk |
|-----------|-----------|------|
| Clean-room vs contaminated | Legal if purchased; check contract if licensed | LOW (purchased) |
| Independent development | V5-JET-STANDARD Phase 0 completed before Simsek-K evaluation | LOW |
| Third-party sources | All OSINT publicly available | LOW |
| Publication | Internal WX only | NEGLIGIBLE |
| Code/firmware | L1-L2 safe, L3-L4 high risk | HIGH for deep SW RE |

---

## 0E — Safer Path Recommendations

| Strategy | Risk | WX Fit |
|----------|------|--------|
| 1. Partnership/license (preferred) | LOWEST | Best — aligns with COMPARE Option 3 |
| 2. Clean-room RE of purchased unit | LOW-MEDIUM | Good complement to partnership |
| 3. Functional benchmarking only | LOWEST | Slower but cleanest IP |
| 4. Subsystem cherry-pick RE | LOW | Practical — highest-value for WX |

**Selected: Strategies 1 + 4 combined.**

### Safe RE Areas
- Aerodynamic configuration (publicly observable)
- Launch/recovery system (mechanical, low-IP)
- Ground support equipment (standard engineering)
- RCS augmentation devices (physics-based)
- Parachute recovery system (commodity technology)

### Restricted RE Areas (require TT agreement)
- TEI TJ-90 turbojet internals
- Flight control firmware/algorithms
- Encrypted datalink protocols
- MDI scoring algorithms (if proprietary)

---

## IP Risk Matrix

| Risk Category | Likelihood | Impact | Rating | Mitigation |
|---------------|-----------|--------|--------|------------|
| Patent infringement | LOW | HIGH | YELLOW | Complete TURKPATENT search |
| ITAR contamination (engine) | MEDIUM | CRITICAL | RED | ITAR-free cert from TAI |
| Trade secret misappropriation | LOW | HIGH | YELLOW | Clean-room protocol |
| Software copyright | MEDIUM | HIGH | ORANGE | L1-L2 only, independent SW dev |
| Export control (MTCR) | LOW | CRITICAL | YELLOW | Formal QPAN channel |
| VN regulatory | LOW | MEDIUM | GREEN | Standard process |
| Contract restriction | MEDIUM | HIGH | ORANGE | Negotiate TT terms first |

---

## Next: Stage 1M — MECHA Deconstruction
- NLM notebook setup (CEO source selection)
- 4-domain decomposition (Mech/Elec/Sw/Ctrl)
- OSINT-based physical analysis (pre-physical-access)
