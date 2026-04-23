---
created: 2026-04-15
updated: 2026-04-15
type: phase2-frame
variant: LITE-PA2
block: BA
pipeline: helix-concept-generate --icdm
---

# Block BA — Problem Frame (LITE-PA2)

## 1. Solution-Determining Subfunction (SDSF)

**Law:** 1 subfunction cascades the entire concept (Galaxy "Solution-Determining SF"). Identify the function whose WP choice forces most downstream decisions for LITE.

### Candidate Scoring — Top 5 L2 Subfunctions

| Rank | Subfunction | Domain | Downstream Cascade | Cost | Risk | SDSF |
|:-:|---|:-:|:-:|:-:|:-:|:-:|
| 1 | **SF-SS1.3 Generate Recoil Impulse on Trigger** | M+E | Trigger HW, cradle dynamics, safety envelope, training transfer (SC-2) | $300-500 | HIGH ([L5] assumption) | **4.6** |
| 2 | SF-SS2.1 Render Ballistic Scene ≥30 ppd | SW+HW | Projector count/brightness, GPU, screen geometry | $8.5-12K | MED | 4.2 |
| 3 | SF-SS1.1 Accept Weapon Module Mount | M+E | MWI cradle, NFC detect, 5-weapon compat | $300-400 | MED | 3.8 |
| 4 | SF-SS1.2 Measure Aim (Az+El) | E+SW | Encoder choice, Unity ≥30 Hz rate | $150-250 | LOW-MED | 3.4 |
| 5 | SF-SS5.3 Score Lead-Angle Error | SW | Ray-trace vs analytic, AAR quality | $0 | MED | 3.2 |

### Verdict

**SDSF = SF-SS1.3 Generate Recoil Impulse**

Rationale:
- **Highest cascade:** Recoil method locks trigger HW, cradle structural design, operator ergonomics, safety envelope, and training transfer claim (SC-2 sacred).
- **Highest risk:** [L5-ASSUMPTION] — perceptibility not bench-tested. Physical gate 2026-05-07 is built around this function.
- **Downstream lock:** WP choice (solenoid vs inertial hammer vs elastomer hybrid) determines SS1 structure, power budget, noise envelope, and MWI mount points.

**Implication:** BB/BC depth concentrates on SF-SS1.3. Other SFs inherit from portfolio without re-search.

---

## 2. TRIZ Contradiction Analysis

### CN-1 — Recoil Fidelity vs Safety & Cost

**Technical Contradiction:**
- **IF** recoil peak ≥25N (CEO override) toward real-weapon fidelity
- **THEN** training transfer improves (SC-2, Galaxy "Recoil Fidelity Threshold 70%")
- **BUT** operator injury risk, solenoid wear, cost, noise all rise

**39×39 Matrix:**
- Improve: #14 Strength (recoil force)
- Worsen: #30 Harmful factors generated

**Recommended principles:** **35** (Parameter change) · **40** (Composite materials) · **28** (Mechanics substitution) · **18** (Mechanical vibration)

| # | Principle | LITE Application |
|---|---|---|
| 35 | Parameter change | **Pulse-shape solenoid current** — short sharp spike (≥25N peak, <30ms) vs sustained force. Perceptible, safer, cheaper. |
| 40 | Composite materials | Elastomer bumper at cradle-buttstock interface — absorbs overshoot energy. |
| 28 | Mechanics substitution | **Inertial hammer** (moving mass impact) — mechanical amplification, lower duty cycle. |
| 18 | Mech. vibration | Superimpose HF rattle pulse — perceptual realism without more force. |

**BB shortlist:**
- **WP-R1:** Pulse-shaped solenoid (baseline)
- **WP-R2:** Inertial hammer / moving mass (TRIZ-28)
- **WP-R3:** Elastomer-damped solenoid hybrid (TRIZ-35+40)
- **WP-R4:** Pneumatic short-stroke piston (TRIZ-29 Pneumatics/Hydraulics) — **CEO OVERRIDE 2026-04-16: KEEP in shortlist. Cost cap may flex upward if fidelity justifies.** Highest recoil fidelity ceiling (real-weapon impulse shape), proven in global trainers. LITE cost envelope reassessed in BC.

---

### CN-2 — Weapon Modularity vs Rigidity

**Technical Contradiction:**
- **IF** MWI accepts 5 weapon types, swap <5 min
- **THEN** revenue multiplied across 12.7mm/7.62mm variants (absorbed VN-12.7MM-SIM)
- **BUT** joint slop degrades encoder precision and recoil fidelity

**Parameters:** Improve #35 Adaptability / Worsen #13 Stability + #14 Strength

**Recommended principles:** **15** (Dynamization) · **28** (Mechanics substitution) · **37** (Thermal expansion) · **29** (Pneumatics — rejected for LITE)

| # | Principle | LITE Application |
|---|---|---|
| 15 | Dynamization | **Active locking** — solenoid-driven kinematic clamp engages after NFC detect. Zero slop locked, easy release. |
| 28 | Mech. substitution | **Kinematic 3-point mount** (Maxwell/Kelvin) — repeatable <0.1 mm, no user adjustment. |

**BB shortlist:**
- **WP-M1:** Kinematic 3-point + manual latch (baseline, low cost)
- **WP-M2:** Solenoid active clamp + NFC trigger (BA innovation)
- **WP-M3:** Taper-pin + cam lever (simpler, cheapest)

---

### CN-3 — Immersion Fidelity vs LITE Cost Cap

**Technical Contradiction:**
- **IF** FOV increased toward 240°/360°
- **THEN** immersion + peripheral detection improve
- **BUT** LITE cost cap $70K violated (+$8-20K projector/PC)

**Parameters:** Improve #33 Ease of operation + #25 Waste of time / Worsen #39 Productivity

**Recommended principles:** **2** (Taking out) · **23** (Feedback) · **35** (Parameter change) · **25** (Self-service)

| # | Principle | LITE Application |
|---|---|---|
| 2 | Taking out | **Visual cue assist** UAV >250m — already adopted Gate 1 (2026-04-08) |
| 23 | Feedback | HUD lead-angle feedback post-shot — faster training without FOV HW |
| 35 | Parameter change | Brightness 6000→7500 lm instead of more screens |

**Verdict:** CN-3 already resolved in baseline. Confirms LITE stays 180°. **No new BB shortlist.**

---

## 3. TESE Stalled Trends Check

| TESE Law | LITE Status | Stalled? | Innovation Lever |
|---|---|:-:|---|
| Increasing ideality | $50-70K, 80-90% of FIXED perf | 🟡 | AAR-SaaS recurring (portfolio v1.1 leap) |
| Non-uniform evolution of parts | SS1 lags SS2 maturity | 🔴 | **SS1 = bottleneck, focus BB** |
| Increasing dynamization | Rigid cradle + fixed screens | 🟡 | MWI dynamized; motion 2-DOF static once set |
| Transition to micro-level | Macro mechanical recoil | 🟢 | Not needed for LITE |
| Coordination of rhythms | Trigger→recoil→flash→audio <50ms | 🔴 | **Latency budget tight — explicit BC design** |
| Transition to super-system | Standalone trainer | 🟡 | CORTEX handles this; LITE standalone |

**Stalled targets for BB/BC:**
1. **SS1 recoil maturity catch-up** (non-uniform evolution)
2. **Multi-modal cue coordination <50ms** (rhythms) — BC must budget explicitly

---

## 4. ICDM Innovation Context Frame (LITE)

| Dimension | Score | Rationale |
|---|:-:|---|
| Technology novelty | 3 | Solenoid pulse-shape + MWI NFC (moderate) |
| Market novelty | 4 | C-UAV maritime — no VN competitor |
| Business model novelty | 2 | LITE unit-sale only (SaaS separate) |
| **LITE Overall** | **3.0/5** | Below portfolio 3.3 |

**WTP preview for BE:**
- LITE Essential set unchanged (72 E inherited)
- **Essential differentiator:** SS1 recoil fidelity justifies $50-70K price vs software-only trainer

---

## 5. BA Handoff to BB

**BB Search priorities:**
1. **SS1 Recoil — DEEP** (3 WPs: pulse solenoid, inertial hammer, elastomer hybrid)
2. **SS1 MWI Mount — MEDIUM** (3 WPs: kinematic+latch, solenoid clamp+NFC, taper-cam)
3. **SS2/SS3/SS4/SS5 — SHALLOW** (reuse `_portfolio/Morpho_SS2..SS5`)

**Frozen (do not re-open):** FOV 180°, Unity engine, visual cue assist, 2-DOF motion

**UNFROZEN 2026-04-16:** LITE cost cap $50-70K is now a **soft target**, not a hard constraint. CEO will re-evaluate price envelope in BC after recoil WP trade-study (solenoid vs inertial vs pneumatic). Upward flex may be justified if pneumatic delivers training-transfer fidelity that closes SC-2 sacred constraint risk.

**Flagged for BD risk / BC develop:**
- Recoil latency coordination budget <50ms (BD)
- 3-screen + MWI wiring crossings (BD function-structure review)
- Solenoid L5→L2 bench test (physical gate 2026-05-07 is the transition)

---

## 6. Key Findings

1. **SDSF = SF-SS1.3 Generate Recoil Impulse** — cascade driver for LITE. All BB/BC depth here.
2. **CN-1 Recoil:** 4 viable WPs for BB (pulse solenoid · inertial hammer · elastomer hybrid · pneumatic). **Pneumatic RE-ADMITTED per CEO override 2026-04-16 — cost cap flexible.**
3. **CN-2 Modularity:** 3 MWI mount WPs (kinematic+latch · solenoid clamp+NFC · taper-cam).
4. **CN-3 FOV:** already resolved in Gate 1 via visual cue assist — 180° locked.
5. **TESE stalled** at SS1 non-uniform evolution + multi-modal cue coordination <50ms.
6. **LITE innovation 3.0/5** — below portfolio 3.3 (no SaaS in LITE unit).
