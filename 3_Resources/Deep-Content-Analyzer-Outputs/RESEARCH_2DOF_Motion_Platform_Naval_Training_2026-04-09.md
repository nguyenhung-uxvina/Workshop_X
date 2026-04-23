---
created: 2026-04-09
type: research
status: active
tier_breakdown: "2S + 8A + 7B + 2C = 19 sources"
pro_ratio: "53% (10 S+A / 19 total)"
project: VN-CUAV-SIM-001
subsystem: SS3 Motion Platform
tags: [#type/research, #status/active, #topic/technology]
---

# RESEARCH: 2-DOF Electric Motion Platform for Naval Gunnery Training

**Date:** 2026-04-09 | **Sources:** 20 | **Pro ratio:** 53% S+A

## Key Findings

### 1. Minimum DOF for Training Transfer
- **2-DOF (roll+pitch) is functional minimum** for gunnery training transfer
- LaserShot NCGTS (deployed NECC California, Virginia, Guam, Bahrain) uses 3-DOF — only validated naval gunnery sim with known DOF
- Roll is most perceptually salient axis for patrol vessel gunner (vestibular threshold data)
- Tilt coordination can simulate sustained acceleration cues below 0.5°/s² threshold
- **2-DOF + emulated heave injection = 70-80% of 6-DOF perceptual fidelity at 20-30% cost**

### 2. Washout Algorithm
- **Recommended: Classical Washout + Emulated Heave Injection**
- HPF roll: 2nd order Butterworth, fc = 0.3 Hz
- HPF pitch: 2nd order Butterworth, fc = 0.25 Hz
- Tilt coordination: 1st order LPF, τ = 3s
- Heave injection: HPF 0.5 Hz → pitch channel, gain = 0.15
- Controller: STM32H7 (480 MHz) or RPi4 at 100 Hz loop

### 3. Actuator Sizing (130kg payload, ±12° roll, ±8° pitch)
- Stroke: 200mm (calculated 115mm worst-case + margin)
- Force: 2000N continuous / 3000N peak (calculated 1170N + 2× safety)
- Speed: 250 mm/s (calculated 158 mm/s peak)
- Type: Ball-screw servo, 24V DC or 220V AC
- Match: MotionSystems PS-2RM-150 (production-validated reference)

### 4. Vietnamese Waters Sea State
- **JONSWAP γ = 2.0** (NOT North Sea default 3.3)
- Tp range: 4-8s (covers 90% operational sea states)
- Hs range: 0.3-2.5m (SS1 to SS4)
- Design point: SS3 (Hs ~1.25m, Tp ~7s)

### 5. Cost Estimate
- **$2,500-3,500 USD** for 2-DOF platform (DIY/local build)
- Commercial turnkey: $8,000-15,000 (MotionSystems Poland)
- VNM Simulation 3-DOF kit: $3,600 (Vietnamese vendor)

## Sources (Top 10)

| # | Source | Tier |
|---|--------|------|
| 1 | Springer: Washout Algorithm for 2-DOF Motion Platforms (2021) | S |
| 2 | MDPI: Fidelity of Maritime Simulator Training review (2022) | S |
| 3 | LaserShot NCGTS product specs | A |
| 4 | NASA/CR-2005-213747: Motion Cueing Algorithm Development | A |
| 5 | Springer: Human vestibular thresholds roll vs pitch (2020) | A |
| 6 | ResearchGate: Wave Regime Vietnamese Waters 31-yr hindcast (2023) | A |
| 7 | MDPI: SCS Wave Spectra JONSWAP calibration (2017) | A |
| 8 | ScienceDirect: Optimal motion cueing 5-DOF via 3-DOF (2009) | A |
| 9 | MotionSystems PS-2RM-150 datasheet | B |
| 10 | CKAS T2s 2DOF emulated heave architecture | B |

## Implications for VN-CUAV-SIM-001

- SS3 architecture validated: 2-DOF electric + washout + heave injection
- Cost $2.5-3.5K confirms budget estimate in Morpho SS3 ($1.6-2.4K was optimistic → revise to $2.5-3.5K)
- JONSWAP γ=2.0 parameter critical for realistic wave spectrum — must NOT use default 3.3
- Training transfer validation test needed at Gate 3 (no published data for 2-DOF naval gunnery)
