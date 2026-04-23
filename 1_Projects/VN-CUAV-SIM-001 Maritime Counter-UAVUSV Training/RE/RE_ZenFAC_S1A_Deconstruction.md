---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 1A — Artifact Deconstruction (OSINT)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
pipeline: reverse-engineering v3.0 --mode mecha
---

# RE STAGE 1A: ARTIFACT DECONSTRUCTION — Zen FAC Simulator
## 4-Layer Analysis (OSINT-based, no physical artifact)

**Date:** 2026-04-20
**Confidence disclaimer:** All inferences from public marketing/press. No physical inspection.

---

## Layer 1 — Geometric & Dimensional (OSINT-inferred)

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|:----------:|
| Installation footprint | ~40-60 m² (360° projection + 6-DOF platform + IOS) | Industry norm for 360° cylindrical sim | L |
| Projection cylinder diameter | ~4-6 m (360° immersive, crew of 2-4 inside) | Similar systems (Kongsberg, CAE) | L |
| Motion platform size | ~2×2 m base, 6-DOF Stewart platform | Industry standard for ship sim | M |
| Weapon station envelope | ~1.5×1.0×1.5 m (MMG mount + seat) | Zen MMG Sim product photos | M |
| Overall system weight | ~2,000-5,000 kg (platform + structure + projection) | Industry estimate | L |
| Ceiling height required | ~3.5-4.5 m (projection dome clearance) | 360° cylindrical requirement | M |

## Layer 2 — Material & Process Inference

| Component | Material (inferred) | Process | Confidence |
|-----------|-------------------|---------|:----------:|
| Motion platform frame | Welded steel (S355/equivalent) | CNC + welding | M |
| Weapon replica body | Cast aluminum or CNC aluminum | CNC machining | M |
| Projection screen | Rear-projection seamless cylindrical screen | Specialty supplier | M |
| Control console | Sheet metal + CNC + marine-grade switches | Standard fabrication | M |
| Motion actuators | Electric linear actuators (6×) | Precision assembly | H |
| Haptic controls | Custom electromechanical (helm, throttle) | Precision machining | M |
| Recoil mechanism | Electromechanical (motor/cam or solenoid array) | Precision assembly | M |
| Electrical cabinets | Standard 19" rack, sheet metal | Standard | H |

## Layer 3 — Functional Decomposition (24 Components)

| ID | Component | Function | Domain | Criticality |
|----|-----------|----------|:------:|:-----------:|
| C01 | 6-DOF Stewart motion platform | Ship motion simulation | MECH | HIGH |
| C02 | 360° cylindrical projection system | Visual immersion | ELEC | HIGH |
| C03 | Multiple projectors (6-8 est.) | Image generation for 360° | ELEC | HIGH |
| C04 | Render cluster (multi-GPU) | Real-time scene rendering | SW | HIGH |
| C05 | MMG weapon replica | Crew-served weapon handling | MECH | HIGH |
| C06 | RWS weapon station replica | Remote weapon station training | MECH+ELEC | HIGH |
| C07 | Electromechanical recoil system | Recoil force simulation | MECH+ELEC | MEDIUM |
| C08 | Haptic helm control | Ship steering feedback | MECH+ELEC | MEDIUM |
| C09 | Haptic throttle control | Propulsion control feedback | MECH+ELEC | MEDIUM |
| C10 | EO/IR sensor replica | Electro-optical targeting | ELEC+SW | MEDIUM |
| C11 | Navigation console | Nav instruments simulation | ELEC+SW | MEDIUM |
| C12 | Communication console | Radio/intercom simulation | ELEC+SW | LOW |
| C13 | AI Instructor Operator Station | Adaptive training management | SW | HIGH |
| C14 | Scenario generation engine | Dynamic scenario creation | SW | HIGH |
| C15 | Ballistic computation module | Projectile trajectory | SW | HIGH |
| C16 | Ship dynamics model | Hydrodynamic behavior | SW | HIGH |
| C17 | Sea state generator | Wave, wind, current modeling | SW | MEDIUM |
| C18 | Sound system | Ambient + weapon sound | ELEC | LOW |
| C19 | Motion control computer | 6-DOF platform servo control | CTRL | HIGH |
| C20 | Weapon control interface | Encoder/switch → sim engine | CTRL | HIGH |
| C21 | Safety system | E-stop, motion limits, overload | CTRL | HIGH |
| C22 | Power distribution | UPS + PDU + grounding | ELEC | MEDIUM |
| C23 | Network backbone | Internal LAN | ELEC | MEDIUM |
| C24 | Data recording system | Session recording + AAR | SW | MEDIUM |

**Total: 24 components (estimated ~40-60 actual including sub-components)**

## Layer 4 — Hidden Design Intent

| Observation | Inferred Design Intent | Conf. | WX Relevance |
|------------|----------------------|:-----:|:------------:|
| 6-DOF motion (not 2-DOF) | FULL ship handling training — motion is PRIMARY, weapon SECONDARY | H | HIGH — WX LITE uses 2-DOF (gunnery-first) |
| AI-enabled IOS | Reduce instructor dependency — target unmanned training centers | H | HIGH — WX ACH aligns |
| Haptic controls (helm + throttle) | Multi-role training — same sim for helmsman + gunner + navigator | M | MEDIUM — WX is weapon-focused |
| 360° projection (not VR) | Crew coordination — multiple trainees see same scene, instructor observes | H | HIGH — validates WX projection choice |
| EO/IR sensor replica | Night/thermal engagement — FAC operates day+night | M | MEDIUM — WX Phase 1 day-only |
| Modified in-service weapons (AWeSim) | Authenticity maximization — use REAL weapon modified for sim | H | HIGH — WX uses CNC replica (cheaper) |
| ARI acquisition (76%→100%) | Vertical integration — buy expertise, not build (speed > build) | H | HIGH — WX builds internally (slower, full IP) |
