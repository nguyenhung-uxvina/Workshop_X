# RE STAGE 2B-SF: SOLUTION-DETERMINING SUB-FUNCTION — InVeris FATS

**Date:** 2026-04-22

---

## CANDIDATE ANALYSIS

| SF | Why Solution-Determining? | If Changed, What Cascades? | WX Capability |
|----|--------------------------|---------------------------|-------------|
| SF-01 (Recoil) | Recoil mechanism drives weapon body design, power architecture, maintenance workflow | Magazine design, fill station, weapon form factor, training fidelity perception | HIGH — WX has solenoid (simpler, cheaper) |
| SF-02 (Aim tracking) | Tracking method determines hit detection architecture, scoring pipeline, multi-trainee capability | Camera system, OCR processor, calibration procedure, screen design | HIGH — WX encoder approach is independent |
| **SF-11 (Coaching)** | **Coaching capability determines ENTIRE data architecture: which sensors, what analytics, how feedback delivered, customer doctrine integration** | **Sensor suite design (FR-016/017/018), data pipeline, AAR structure, customer lock-in, competitive differentiation** | **LOW** — WX has basic AAR only |
| SF-04 (Handling quality) | Sensor suite determines what coaching can analyze | Weapon electronics, data bus bandwidth, coaching algorithm inputs | LOW — WX has no handling sensors |

---

## SELECTED SOLUTION-DETERMINING SF

### **SF-11: Provide Real-time Coaching** — FATS' Automatic Coaching Engine

**Rationale:** SF-11 is the architectural keystone of FATS' competitive moat:

1. **Sensor cascade:** SF-11 REQUIRES SF-03 (trigger pressure) + SF-04 (cant + stock weld) + SF-02 (aim tracking). Without coaching, those sensors have limited value. Coaching JUSTIFIES the sensor investment.

2. **Customer lock-in:** Coaching is configured to customer's doctrine manual. Once a military configures FATS with their doctrine → massive switching cost. This is how InVeris keeps 40+ countries as recurring customers.

3. **Data architecture:** Coaching defines what data to collect, how to analyze it, and how to present it. Everything downstream (AAR, analytics, reporting, doctrine compliance) flows from coaching design.

4. **Competitive differentiation:** Without coaching, FATS is "just a fancy projection system with a gas-powered toy gun." WITH coaching, it's a "training system that makes soldiers better shooters, measurably, per their own doctrine."

```
SF-11 CASCADE:

SF-11 (Coaching) REQUIRES:
  ├── SF-03 (Trigger pressure) → demands analog trigger sensor
  ├── SF-04 (Cant + stock weld) → demands IMU + force cells
  ├── SF-02 (Aim tracking) → demands continuous tracking (laser+camera OR encoder)
  ├── SF-05 (Ballistics) → demands accurate shot computation
  └── SF-06 (Hit detection) → demands reliable scoring

SF-11 (Coaching) ENABLES:
  ├── SF-12 (AAR) → coaching data enriches replay quality
  ├── Doctrine integration → customer lock-in
  ├── Certification capability → replaces live-fire qualification
  └── Recurring revenue → coaching content updates per doctrine revision

WITHOUT SF-11: FATS = projection + recoil = commodity ($50-100K)
WITH SF-11: FATS = training system = premium ($200-500K)
```

**Galaxy candidate:** "Coaching-as-Architecture Law" — in training simulators, the coaching/feedback system is solution-determining because it cascades sensor requirements upward and customer value downward. A simulator without coaching is hardware; with coaching, it's a training system. The coaching SF determines ~60% of total system architecture.

---

## WX IMPLICATION

FATS' solution-determining SF (Coaching) is WX's **#1 gap AND #1 ACH opportunity.**

| Path | Description | Timeline | Cost | Outcome |
|------|-------------|---------|------|---------|
| **A: Skip coaching (current)** | Ship LITE with AAR only, no real-time coaching | Phase 3 now | $0 additional | WX is "projection + recoil" = commodity risk |
| **B: Rule-based coaching** | Add trigger pressure + cant sensors, implement rule-based coaching engine (copy FATS approach) | Phase 3 + 3 months | ~$5K dev + $30/unit sensors | Matches FATS but doesn't exceed |
| **C: AI coaching (ACH LEAPFROG)** | Add sensors + build ML-based adaptive coaching that LEARNS from each trainee | Phase 3 + 6 months | ~$15K dev + $30/unit sensors | **EXCEEDS FATS** — personalized AI > static rules |

**CEO Decision (Stage 3):** Path A/B/C selection is the most consequential design decision for CUAV-SIM competitive positioning.
