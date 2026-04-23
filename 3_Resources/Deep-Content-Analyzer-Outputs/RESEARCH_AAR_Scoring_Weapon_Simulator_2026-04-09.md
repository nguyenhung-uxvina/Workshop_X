---
created: 2026-04-09
type: research
status: active
tier_breakdown: "13S + 7A + 5B + 2C = 27 sources"
pro_ratio: "70% (20 S+A / 27 total)"
project: VN-CUAV-SIM-001
subsystem: SS5 AAR & Scoring
tags: [#type/research, #status/active, #topic/technology]
---

# RESEARCH: AAR & Automated Scoring for Weapon Training Simulators

**Date:** 2026-04-09 | **Sources:** 27 | **Pro ratio:** 70% S+A

## Key Findings

### 1. Essential AAR Metrics for C-UAV/USV Gunnery

**Per-shot:** Hit/miss classification, miss distance (mrad), lead angle error (critical for moving targets), TTFS (time-to-first-shot), weapon cant (<3°), aim trace speed S1 (<50mm/s stable), trigger pull profile
**Per-session:** Pk (hit probability), mean TTFS ± σ, burst efficiency (rounds/kill), Pk by target category
**C-UAV specific:** Bearing rate tracking error, engagement initiation angle, elevation engagement window

### 2. Coaching Algorithm — InVeris Patent Analysis

WO2015142940A1 (Meggitt/InVeris) — ACTIVE patent covers:
- 5-layer architecture: sensor → reference bank → classifier → error attribution → feedback
- Error types: trigger jerk, flinch, cant, unstable hold
- **⚠ FTO concern: "reference bank + ML classifier" approach is patented**
- **Design-around: use deterministic threshold rules per metric (SCATT approach — no FTO risk)**

### 3. Ray-Trace Scoring Algorithm (recommended)

```
Muzzle position + barrel vector + target position/velocity + ammo params
  → Ballistic trajectory (gravity + drag)
  → CEP dispersion (bivariate Gaussian)
  → Detached-Displacement Correction (target moves during TOF — CRITICAL for C-UAV)
  → Ray-target intersection at time-stepped simulation
  → Hit/miss classification (miss_distance vs lethal_radius)
  → Pk aggregation sliced by target type, range, angle
```

**Key insight:** Laser/IR physically cannot teach lead angle (straight-line only). Ray-trace ballistic is REQUIRED for moving C-UAV/USV targets.

### 4. Adaptive Difficulty (evidence-based)

| State | Rolling Pk (last 10) | Action |
|-------|---------------------|--------|
| STRUGGLING | <30% | Reduce difficulty −1 |
| DEVELOPING | 30-60% | Maintain (ZPD zone) |
| PROFICIENT | 60-80% | Maintain or +1 if 5 consecutive hits |
| EXPERT | >80% | Increase +1 |

Difficulty params: speed (20→120+ km/h), size (large→micro), approach (head-on→evasive), targets (1→4), window (30s→8s)

Phase 1: Behavior-Based Scaling (deterministic, explainable)
Phase 2: Imitation + Adversarial RL (personalized evasion per trainee)

### 5. AAR UI Design

- Primary: 3D god's-eye + 2D tactical overlay
- Timeline: DVR scrub bar + color-coded event markers
- Shot overlay: aim trace (3s), ballistic arc, miss distance vector, lead angle error
- Navigation: jump-to-worst-miss, jump-to-bookmark, 0.25×-4× speed + single-frame step
- Critical: instructor bookmarks during live session (1 key), AAR opens at first bookmark

### 6. Patent Landscape

| Patent | Status | Risk |
|--------|--------|------|
| WO2015142940A1 (InVeris coaching) | ACTIVE | ⚠ FTO — design around with threshold rules |
| US4781593A (Lead angle correction) | EXPIRED | Free to use |
| US20120183931A1 (Laser hit detection) | Active | Not applicable (HW laser, not SW ray-trace) |

## Sources (Top 12)

| # | Source | Tier |
|---|--------|------|
| 1 | ResearchGate: Automated AAR State-of-the-Art Review | S |
| 2 | IEEE: AAR in military training simulations | S |
| 3 | IEEE: Current/future AAR methodologies | S |
| 4 | ResearchGate: STRATEGIC project — AI AAR tools | S |
| 5 | Figshare: Detached-Displacement Synthetic Hit Algorithm | S |
| 6 | DTIC: Unit Simulation Training System AAR | S |
| 7 | WO2015142940A1: InVeris coaching patent | S |
| 8 | US4781593A: Lead angle correction (expired) | S |
| 9 | IEEE: Dynamic Difficulty Adjustment | S |
| 10 | InVeris FATS 100MIL product docs | A |
| 11 | Lockheed Martin AGTS specs | A |
| 12 | PMC: Adaptive difficulty empirical test (46% error reduction) | A |

## Implications for VN-CUAV-SIM-001

- Lead angle error = #1 metric for C-UAV gunnery (NOT hit/miss alone)
- Detached-Displacement Correction MANDATORY in ray-trace algorithm (standard ray-cast fails for moving targets)
- InVeris coaching patent: design around with deterministic thresholds (SCATT-style)
- Adaptive difficulty proven: 46% error reduction in submarine training study → implement Phase 1 behavior-based
- AAR bookmarking during live session is critical UX feature — instructor marks events with 1 key

## Galaxy Candidates (CEO review)

1. "Lead Angle Error Là Metric Cốt Lõi Cho Gunnery C-UAV" → Cluster G+H
2. "Detached-Displacement Correction — Hit Detection Cho Moving Targets" → Cluster G
3. "Coaching Algorithm — Good/Bad Reference Bank Approach" → Cluster I+G
4. "ZPD + Flow Zone — Khung Lý Thuyết Cho Adaptive Difficulty" → Cluster I+C
