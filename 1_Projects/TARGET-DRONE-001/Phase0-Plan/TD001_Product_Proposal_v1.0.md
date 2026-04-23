---
created: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v1.0
project: TARGET-DRONE-001
status: approved
gate0: PASS
feeds_to:
  - FORGE: /odi, /shift, /portfolio
  - HELIX: /req (Phase 1), /init
---

# Product Proposal — TARGET-DRONE-001

## 1. Intended Functions (solution-neutral)

**Primary:**
- Present controlled electromagnetic signatures (radar, infrared, visual) at specified positions in airspace
- Enable air defense systems to practice detection, tracking, and engagement against realistic aerial threats

**Secondary:**
- Measure engagement accuracy (miss distance, azimuth) during live fire exercises
- Transmit real-time scoring and telemetry data to ground station
- Correlate live engagement data with simulator training performance

**Auxiliary:**
- Recover safely after mission for reuse
- Simulate multiple threat profiles (UAV, helicopter, slow aircraft) via configurable signature payloads
- Operate in coordinated groups to simulate swarm threats

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target Value |
|---|---|---|---|---|
| R01 | Performance | Sustained flight speed | D | 80-200 km/h (Class A) |
| R02 | Performance | Flight endurance per mission | D | ≥30 minutes |
| R03 | Performance | Operating altitude range | D | 50-2,000m AGL |
| R04 | Performance | Wind tolerance | D | ≥25 km/h sustained |
| R05 | Signature | Radar cross section (configurable) | D | 0.1-10 m² |
| R06 | Signature | Infrared signature generation | W | ≥100 W/sr @ MWIR band |
| R07 | Signature | Visual signature (smoke/flare) | W | Visible ≥2 km |
| R08 | Scoring | Miss distance measurement accuracy | W | ≤1 m (supersonic projectiles) |
| R09 | Scoring | Real-time telemetry to ground station | D | ≤100 ms latency |
| R10 | Operations | Launch without runway | D | Catapult or VTOL capable |
| R11 | Operations | Recovery system for reuse | D | ≥20 flights per airframe |
| R12 | Operations | Transport by standard military vehicle | D | Packed dimensions ≤ 2.5m × 1m × 0.5m |
| R13 | Environment | Operating temperature | D | 15-45°C (VN tropical) |
| R14 | Cost | Unit production cost | D | ≤$15K (Class A lead variant) |
| R15 | Sovereignty | Local content percentage | D | ≥60% by BOM value |

## 3. Cost Target

| Parameter | Target |
|---|---|
| Unit cost (V1-PROP-BASIC) | $8-15K [L4-ESTIMATE] |
| Development budget (V1) | $30-50K [L5-ASSUMPTION] |
| Production volume | 20-50 units/year [L5-ASSUMPTION] |
| Import reference | QinetiQ Banshee Whirlwind $30-50K |
| Cost advantage | 60-80% reduction [L4-ESTIMATE] |
| Local content | ≥60% |

## 4. Working Principle Suggestions (OPTIONS only)

### Airframe
- **Option A:** Conventional fixed-wing (high-wing, pusher prop) — advantage: proven, efficient, long endurance / risk: runway or catapult needed
- **Option B:** Flying wing/delta — advantage: simple structure, CNC-friendly, compact / risk: less stable, shorter endurance
- **Option C:** Multirotor (for VTOL variant) — advantage: no launcher needed, hover capable / risk: short endurance, low speed

### RCS Enhancement
- **Option A:** Corner reflector array (trihedral) — advantage: cheap, proven (VN-AST), high local content / risk: heavy for large RCS values
- **Option B:** Luneburg lens — advantage: omnidirectional, configurable 0.75-40 m² / risk: imported, fragile, expensive
- **Option C:** Reflective tape + geometry — advantage: cheapest, lightweight / risk: limited RCS enhancement (+3-6 dB only)

### IR Signature
- **Option A:** Propane hot nose burner — advantage: 200 W/sr, realistic / risk: fuel system adds complexity + weight
- **Option B:** Electric resistance heater — advantage: simple, safe / risk: limited to 50-100 W/sr
- **Option C:** No IR (radar-only training) — advantage: simplest / risk: cannot train MANPADS crews

### Miss Distance Indicator (MDI)
- **Option A:** Acoustic microphone array (12-sector) — advantage: proven, ±0.5m accuracy / risk: supersonic projectiles only
- **Option B:** Radar Doppler MDI — advantage: works with all projectile speeds / risk: complex, heavy, expensive
- **Option C:** No onboard MDI (ground-based scoring) — advantage: lightest drone / risk: lower accuracy, limited to gun scoring

### Recovery
- **Option A:** Ballistic parachute — advantage: proven, reliable / risk: drift in wind, landing damage
- **Option B:** Parachute + airbag — advantage: soft landing protects electronics / risk: heavier, more complex
- **Option C:** Net recovery (ship/ground net) — advantage: precise landing zone / risk: needs recovery infrastructure

### Launch
- **Option A:** Pneumatic catapult — advantage: compact, reliable / risk: compressed air logistics
- **Option B:** Bungee/elastic launcher — advantage: simplest, cheapest / risk: limited to lighter aircraft
- **Option C:** Rocket-assisted takeoff (RATO) — advantage: high energy, any weight / risk: pyrotechnic safety

## 5. Risk Assessment + Fallbacks

| Risk | Type | P | I | Fallback |
|---|---|---|---|---|
| Airframe structural failure during recovery | Technical | MED | HIGH | Conservative load factor design (4g+). Test with ballast before live electronics. |
| RCS doesn't match target spec | Technical | LOW | MED | Corner reflector is well-understood physics. Calibrate with ground measurement. |
| IR signature insufficient for MANPADS training | Technical | MED | MED | Start radar-only (V1). Add IR in V4-PROP-FULL after validation. |
| Autopilot reliability in AD environment | Technical | MED | HIGH | Use proven ArduPilot stack. Redundant GPS + IMU. Auto-return on link loss. |
| VN military drone regulations unclear | Market | MED | MED | Coordinate with MOD early. Operate within existing military range airspace. |
| QinetiQ or Chinese competitor undercuts price | Market | LOW | MED | WX advantage = ecosystem (sim↔live integration). Not competing on drone alone. |
| Solo engineer cannot sustain flight test program | Schedule | HIGH | HIGH | Partner with VN university aero lab for flight testing. Outsource airframe to local RC aircraft manufacturer. |

## 6. Sacred Constraints (from physics/safety/budget)

| # | Constraint | Basis |
|---|---|---|
| SC-1 | Must be RECOVERABLE (not expendable) for lead variant | Budget — reuse enables affordable training |
| SC-2 | Must NOT carry weapons or weapon-like payloads | Safety + legal — this is a TARGET, not a weapon |
| SC-3 | Must have autonomous return-to-base on link loss | Safety — uncontrolled drone over military range is unacceptable |
| SC-4 | Scoring data must reach ground in real-time | Training effectiveness — delayed scoring defeats purpose |
| SC-5 | Must be operable by 2-person crew | Operations — VN military teams are small |

## 7. Gate 0 Result

**PASS** — All 6 criteria met. Proceed to Phase 1 (/req).

## 8. Design Paradigm

**SIGNATURE-CENTERED** — Unlike BB-01 (acoustic-centered) or CUAV-SIM (haptic-centered). Core design challenge is signature fidelity across radar + IR + visual spectra while maintaining affordable reusability.

Vietnamese mnemonic: **CHỮ-HIỆN-CHẤM** (Signature-Present-Score)
- CHỮ = Chữ ký đặc trưng (generate signatures)
- HIỆN = Hiện diện mục tiêu (present threat)
- CHẤM = Chấm điểm kết quả (score engagement)
