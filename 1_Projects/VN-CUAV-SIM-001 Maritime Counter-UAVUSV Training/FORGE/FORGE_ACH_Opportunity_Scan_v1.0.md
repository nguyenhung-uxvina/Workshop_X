---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #acq]
method: forge-scout (ACH Opportunity Scan)
source: FORGE_Job_Map_v1.0.md §6 + FORGE_SHIFT_Assessment_v1.0.md
pipeline: forge-scout → ICDM Step 1.5 input
version: 1.0
---

# FORGE ACH Opportunity Scan — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Source:** FORGE Job Map v1.0 §6 + SHIFT Assessment v1.0 (extracted + consolidated)
**ACH Verdict:** **GO — UNCONDITIONAL** (SHIFT 6/6 PASS)
**Product nature:** Entire product line IS ACH at its core — SW simulation compensates for impossibility/cost of live C-UAV/USV training

---

## 1. ACH DEFINITION FOR THIS PRODUCT

**ACH (AI-Compensates-Hardware):** Software intelligence replaces physical hardware/ammunition/infrastructure that would otherwise be needed for the training mission.

| What HW would be needed without ACH | What SW replaces it | Savings |
|-------------------------------------|-------------------|---------|
| Live ammunition (12.7mm, 14.5mm, 23mm) | Ballistic simulation engine (V-SMASH 6DOF) | $250-1500/h → $5/h |
| Target drones (physical UAV/USV) | AI-generated target behaviors | $5K-50K per target drone |
| Live-fire range (outdoor, weather-dependent) | Indoor projection environment | $0 range fees, 24/7 availability |
| Being at sea (ship for ship motion) | 2-DOF electric motion platform | No ship fuel, no sea state dependency |
| Night vision equipment + actual darkness | SW rendering (day/dusk/night modes) | No NVG wear, no schedule constraint |
| Instructor memory + paper logbooks | Digital scoring + 3D replay + database | Objective, persistent, searchable |

---

## 2. ACH CANDIDATES — Outcome Level

| Outcome | ACH Opportunity | ACH Type | Priority | Implementation |
|---------|----------------|:--------:|:--------:|----------------|
| O-29 Ballistic accuracy | V-SMASH SW model replaces live ammunition | **Pure ACH** | ★★★ | SS2 SF5: 6DOF ballistic engine |
| O-36 Swarm targets | AI-generated target behaviors replace physical drones | **Pure ACH** | ★★★ | SS4 SF3: Flocking + tactics AI |
| O-30 Hit/miss classification | Collision volume mesh replaces LOMAH/observer | **Pure ACH** | ★★★ | SS2 SF5: Ray-trace scoring |
| O-42 Night engagement | SW rendering replaces NVG + actual darkness | **Pure ACH** | ★★ | SS2 SF3: Lighting engine |
| O-59 AAR replay | Digital replay replaces instructor memory | **Pure ACH** | ★★ | SS5 SF1: 3D replay engine |
| O-34 Ship motion | 2-DOF electric replaces being-at-sea | **Partial ACH** | ★★ | SS3: Simplified motion (not full 6DOF) |
| O-44 Aim trace | 10Hz digital tracking replaces visual observation | **Pure ACH** | ★★ | SS5 SF2: Aim trace overlay |
| O-43 Mixed attack | Multi-target scenario replaces coordinated live targets | **Pure ACH** | ★★ | SS4 SF4: Scenario manager |
| O-33 FPV tracking | Simulated FPV profiles replace actual FPV drones | **Pure ACH** | ★★ | SS4 SF3: FPV behavior model |
| O-56 Objective scoring | Algorithm replaces subjective instructor judgment | **Pure ACH** | ★ | SS5 SF1: 5-skill scoring |
| O-61 Auto-recommend | AI adaptive difficulty → automatic syllabus | **Future ACH** | ★ | Post-MVP (PA-3+) |
| O-51 Adapt to weakness | AI-driven scenario adaptation | **Future ACH** | ★ | Post-MVP (PA-3+) |

### ACH Coverage Summary

| ACH Type | Count | % of Top 15 Outcomes | Note |
|----------|:-----:|:-------------------:|------|
| **Pure ACH** | 9 | 60% | SW fully replaces HW |
| **Partial ACH** | 1 | 7% | SW partially replaces (motion simplified) |
| **Future ACH** | 2 | — | Planned for later variants |
| **Not ACH** | 3 | 20% | O-10, O-13, O-14 = system architecture decisions, not AI |
| **TOTAL scored** | 12 | — | |

---

## 3. ACH LAYER ARCHITECTURE

> From SHIFT Assessment v1.0 — 7 ACH layers identified.

| Layer | Function | ACH Mechanism | Maturity |
|-------|----------|--------------|:--------:|
| L1 | Target Generation | AI behavior models (flocking, evasion, tactics) | TRL 4-5 |
| L2 | Ballistic Simulation | 6DOF V-SMASH engine (replaces live ammo) | TRL 6 |
| L3 | Environment Rendering | Maritime visual + weather + day/night (replaces being-at-sea) | TRL 5-6 |
| L4 | Motion Compensation | 2-DOF electric (replaces ship motion) | TRL 5 |
| L5 | Haptic Feedback | Solenoid recoil (replaces weapon recoil) | TRL 3-4 |
| L6 | Scoring & Assessment | Ray-trace hit detection + 5-skill scoring (replaces observer/LOMAH) | TRL 4-5 |
| L7 | Adaptive Training | AI difficulty adjustment + syllabus recommendation | TRL 2-3 |

### Layer Interdependencies

```
L1 Target AI ──→ L2 Ballistic ──→ L6 Scoring
       │                │
       ▼                ▼
L3 Environment ←──→ L4 Motion
       │
       ▼
L5 Haptic ──→ L7 Adaptive (future)
```

**Critical path:** L1 → L2 → L6. If Target AI or Ballistic engine fails, scoring is meaningless.

---

## 4. SHIFT SCORECARD SUMMARY

> Full details in FORGE_SHIFT_Assessment_v1.0.md

| SHIFT Criterion | Score | Verdict |
|----------------|:-----:|:-------:|
| **S** — Sensor data available? | PASS | Encoders (az/el), trigger, NFC |
| **H** — Hardware commodity? | PASS | Projectors, PC, encoders = COTS |
| **I** — Information creates value? | PASS | 5-skill scoring + progression tracking |
| **F** — Feedback loop possible? | PASS | Real-time aim trace + AAR replay |
| **T** — Training data obtainable? | PASS | Every session generates labeled data |
| **+** — Economic case? | PASS | 76% margin, break-even < 6 months |
| **OVERALL** | **6/6** | **ACH GO — UNCONDITIONAL** |

---

## 5. ACH vs HARDWARE COST COMPARISON

| Solution | Setup Cost | Operating Cost/hr | 200h/yr Cost | 5-Year TCO |
|----------|:---------:|:-----------------:|:------------:|:----------:|
| Live fire (baseline) | $0 | $250-1500 | $50K-300K | $250K-1.5M |
| Foreign simulator (Zen, L3Harris) | $200-500K | $10-20 | $2K-4K | $250-600K |
| **VN-CUAV-SIM LITE (ACH)** | **$50-70K** | **≤$5** | **$1K** | **$55-75K** |

**ACH ROI:** 82× cost reduction vs live fire at 200h/yr. Payback < 1 year.

---

## 6. ACH RISKS & MITIGATIONS

| Risk | Impact | Probability | Mitigation |
|------|:------:|:-----------:|-----------|
| Ballistic model diverges from reality (O-29) | HIGH | MED | V&V against TM tables, field correlation with BB-01 LOMAH |
| Negative training transfer (O-37) | HIGH | LOW | 70% recoil fidelity threshold (Galaxy note), instructor oversight |
| Target AI too predictable | MED | MED | Procedural generation + Houthi/FPV behavior profiles from OSINT |
| Motion sickness from latency (O-32) | MED | LOW | ≤50ms latency budget (DD-1 binding constraint from SA) |
| Customer rejects "just a game" perception | HIGH | MED | HYBRID-BRIDGE integration (BB-01 live fire correlation data) |

---

## 7. DOWNSTREAM ROUTING

```
FORGE_ACH_Opportunity_Scan_v1.0
│
├── ICDM Step 1.5 → Input validation (ACH context for requirements)
│
├── Phase 2 Concept → ACH layers inform concept variant selection
│   "Which layers does each PA variant implement?"
│
├── Phase 3 DfACH → Design-for-ACH checklist per subsystem
│   "SS2 = L2+L3, SS4 = L1+L6, SS3 = L4, SS1 = L5"
│
├── forge-validate → ACH-specific validation criteria
│   "L2 ballistic: ≤5% error vs TM tables"
│   "L5 haptic: ≥70% recoil fidelity (Galaxy threshold)"
│
├── forge-trust → ACH evidence framing for customer demos
│   "Live fire vs sim correlation data (HYBRID-BRIDGE)"
│
└── forge-flywheel → Field data pipeline design
    "Every training session = labeled data for L7 future ACH"
```

---

*Consolidated from FORGE Job Map v1.0 §6 + SHIFT Assessment v1.0. CEO-confirmed: ACH GO UNCONDITIONAL.*
