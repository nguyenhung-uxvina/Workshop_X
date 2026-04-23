---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2M — Cross-Domain Analysis (NLM)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
notebook: re-zenfac
---

# RE STAGE 2M: CROSS-DOMAIN ANALYSIS — Zen FAC Simulator

## ⚠️ CRITICAL INTEL

**Zen has "Counter-UAS Simulation Solution"** — I/ITSEC 2025 (Booth #1611).
Listed separately from FAC Sim in "Naval & Maritime Simulation Suite."
Described as "high-fidelity solution for training Counter-UAS operators using Zen's Battle-Proven Counter-UAS solution."

**NLM corrected:** Fog density / EW disruption adaptation = IADCS (air defense), NOT confirmed for FAC Sim.

---

## Cross-Domain Function Allocation

| Function | Mech | Elec | SW | Ctrl | Integration Risk |
|----------|:----:|:----:|:--:|:----:|:----------------:|
| Ship motion (SF-01) | 40% | 10% | 30% | 20% | HIGH |
| Visual rendering (SF-02) | 5% | 35% | 55% | 5% | MEDIUM |
| Weapon gunnery (SF-03) | 50% | 15% | 20% | 15% | MEDIUM |
| Ship dynamics (SF-04) | 0% | 0% | 95% | 5% | LOW |
| AI adaptive training (SF-06) | 0% | 5% | **90%** | 5% | LOW (SW-dominant) |
| Safety (SF-11) | 20% | 20% | 20% | 40% | **VERY HIGH** |
| **OVERALL** | **~20%** | **~17%** | **~48%** | **~15%** | |

## Domain Comparison: Zen FAC vs WX LITE

| Domain | Zen FAC | WX LITE (SA doc) | Delta |
|--------|:-------:|:----------------:|:-----:|
| Mechanical | ~20% | 34% | +14% (WX more mech-heavy) |
| Electronic | ~17% | 27% | +10% (WX more COTS electronics) |
| Software | ~48% | 46% | -2% (similar — both SW-dominant) |
| Control | ~15% | (in SW) | WX integrates into SW |

## AI Architecture (from NLM)

| Aspect | Finding | Confidence |
|--------|---------|:----------:|
| Functionality | Adaptive difficulty, live monitoring, weakness ID, module generation | H |
| Adaptation mechanism | Customizes difficulty to individual crew proficiency | H |
| Data flow | Trainee action → AI analysis → scenario adaptation | H |
| AI model type | **NOT SPECIFIED** — sources say "AI" but don't specify rule/ML/RL | L |
| Fog/EW adaptation | **IADCS only** — NOT confirmed for FAC Sim (NLM corrected) | H |

## Multi-Simulator Integration

Zen/ARI Naval & Maritime Simulation Suite (I/ITSEC 2025):
- Mini Bridge Simulator
- Fast Attack Craft Simulator (this product)
- Cyber Attack Simulator
- VR Submarine Periscope Simulator
- **Counter-UAS Simulation Solution** ⚠️
- All supported by AI-enabled scenario control
- Networked multi-simulator exercises capability

## Key Insight

**SF-06 (AI IOS) is 90% software → WX can match with SW investment alone.** No expensive hardware needed for AI coaching. WX's ACH approach (AI compensates for commodity HW) is architecturally sound — AI IS the product.
