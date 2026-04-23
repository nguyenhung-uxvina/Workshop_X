---
project: V-SMASH-SLED
type: tooling-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
verification_ref: OV-6
nre_budget: $5,000 (estimated — TBD)
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P, V-R]
priority: HIGH — blocks Phase E field demonstration (T09, T10)
---

# V-SMASH-SLED — Drone Target Sled (Field Test Equipment)

## 1. Purpose

Motorized target presentation system for controlled-condition field testing of all V-SMASH variants. Provides a drone-sized target moving at known speed and range for:
- **T09 — AI detection & classification:** Pd measurement at 100-200m (VM-O06, O07, O08, O09, Y03, Y04)
- **T10 — Lead accuracy:** Lead indicator error measurement at 100-150m (VM-S06, K01)

**Without this system:** Field testing relies on live drone flights — uncontrolled speed/range, wind-dependent, not repeatable, unsafe for statistical verification (≥100 passes needed for binomial confidence).

**Verification Plan OV-6:** "Build or procure drone sled (motorized rail at 100-200m). Or use live drone flights (less controlled)."

---

## 2. Function Summary

| Function | Description |
|----------|-------------|
| **F1 — Present** | Carry a drone-scale target (≥30cm RCS equivalent) along a rail at controlled speed |
| **F2 — Range** | Operate at 100m–200m from the V-SMASH firing position |
| **F3 — Speed** | Traverse at 0–15 m/s (0–54 km/h), corresponding to ≥30°/s angular rate at 100m for VM-K01 |
| **F4 — Repeat** | Execute ≥100 passes per test session for statistical significance |
| **F5 — Record** | Log sled position/speed/time for correlation with V-SMASH data |
| **F6 — Safe** | Operate without live drone — no crash risk, no airspace restrictions |

---

## 3. Requirements (Derived from Verification Plan)

### 3.1 Performance Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-SL-01 | Target presentation range | VM-O06, O09 | 100m, 150m, 200m (3 range stations) |
| JR-SL-02 | Target angular velocity (at DUT) | VM-K01 | ≥30°/s at 100m → sled speed ≥52 m/s at 100m **OR** closer approach angle |
| JR-SL-03 | Target size | VM-O08 | ≥30cm wingspan (medium drone class) |
| JR-SL-04 | Target visual fidelity | T09 detection test | Realistic drone silhouette (not just geometric shape) |
| JR-SL-05 | Number of passes per session | VM-O09 (binomial) | ≥100 passes at each range (200m daylight, 150m daylight, 100m low-light) |
| JR-SL-06 | Speed control accuracy | T10 lead accuracy | ±5% of set speed (for lead angle calculation) |
| JR-SL-07 | Position logging | T10 correlation | GPS or encoder position ±0.5m, timestamp ±10ms |

### 3.2 Angular Velocity Analysis

**Problem:** VM-K01 requires ≥30°/s tracking. At 100m range, for a target crossing at 90°:

```
v_angular = v_linear / range
30°/s = 0.524 rad/s
v_linear = 0.524 × 100m = 52.4 m/s (189 km/h)
```

This is impractical for a rail sled. **Solution: approach angle geometry.**

At 45° approach angle and 100m range, the target appears at ~50m cross-range:
```
v_angular_max occurs at closest approach
For a target at 50m cross-range: v_angular = v / 50m
30°/s at 50m → v = 26.2 m/s (94 km/h) — still fast
```

**Practical approach:** Use shorter cross-range distance.

At 30m cross-range: v = 0.524 × 30 = 15.7 m/s (57 km/h) — achievable with motorized sled.

**Revised geometry:**
```
                 Sled rail (perpendicular)
                 ←─────── 60m ────────→
                         ┃ Target
    V-SMASH ─── 100m ───┃ (closest approach: 100m)
                         ┃
                         ┃ At 30m from center:
                         ┃ range = √(100²+30²) = 104m
                         ┃ angular rate ≈ v/104 × sin(θ)
```

For T10 lead accuracy test, slower controlled speed (5-10 m/s) at 100-150m range is more appropriate — measuring lead indicator accuracy, not maximum tracking rate. VM-K01 (≥30°/s) can be tested separately with a closer-range short-rail setup.

### 3.3 Revised Performance Envelope

| Parameter | T09 Detection Test | T10 Lead Accuracy | VM-K01 Tracking Rate |
|-----------|-------------------|-------------------|---------------------|
| Range | 100m, 150m, 200m | 100-150m | 25-50m |
| Speed | 2-5 m/s (walking to jogging) | 5-10 m/s (cycling) | 10-15 m/s |
| Rail length | 30-60m | 30-60m | 15-30m (short rail) |
| Passes | ≥100 per range | ≥50 | ≥20 |
| Angular rate at DUT | 0.6-2.9°/s (detection) | 1.9-5.7°/s (tracking) | ≥30°/s at closest |

---

## 4. Conceptual Design Options

### Option A: Motorized Cable Sled (Recommended)

```
     Anchor A ────── Steel cable (Ø4mm) ────── Anchor B
                     ←──── 60m ────→
                          ┃
                     ┌────┴────┐
                     │ TROLLEY │  (motor-driven, cable-pulled)
                     │ + target│
                     │ on mast │
                     └─────────┘
                          │
                    DC motor + VFD
                    (at Anchor A)
```

- **Steel cable** (Ø4mm galvanized) between two anchored posts, 60m span
- **Trolley:** Wheeled carriage on cable, carries target on 1.5m mast
- **Drive:** DC motor + variable frequency drive (VFD) at one end, cable loop
- **Speed:** 0–15 m/s, ±5% accuracy via encoder feedback
- **Target:** 3D-printed drone replica (30cm wingspan) mounted on carbon fiber mast
- **Position logging:** Rotary encoder on motor shaft → position + speed
- **Reversible:** Sled runs both directions
- **Pros:** Simple, robust, low cost, no track alignment needed, field-deployable
- **Cons:** Cable sag at center (~0.5m at 60m span), limited to straight-line traverse

### Option B: Rail Track Sled

- Aluminum extrusion rail (60m), wheeled trolley, belt-driven
- **Pros:** Precise position control, no sag
- **Cons:** Expensive (~$15K+), difficult to transport and install, rail alignment critical

### Option C: RC Car on Marked Track

- RC car with target mast, driving along marked lane
- **Pros:** Cheapest ($500), uses existing RC car
- **Cons:** Speed inconsistent, position logging difficult, terrain-dependent, not repeatable

**Recommendation:** Option A (cable sled). Best balance of cost, repeatability, and field deployability. Budget: ~$3-5K.

---

## 5. Bill of Materials (Conceptual — Option A)

| # | Item | Source | Est. Cost |
|---|------|--------|-----------|
| 1 | DC motor (24V, 500W, with encoder) | Import | $200 |
| 2 | Motor controller / VFD (speed control, reversible) | Import | $150 |
| 3 | Steel cable Ø4mm galvanized, 150m (incl. loop + spare) | Local | $80 |
| 4 | Cable anchor posts ×2 (steel tube, ground anchors) | Local fabrication | $200 |
| 5 | Cable tensioner (turnbuckle + snatch block) | Local | $50 |
| 6 | Trolley carriage (4 wheels, cable-riding, aluminum frame) | Local CNC/fabrication | $300 |
| 7 | Target mast (carbon fiber tube, 1.5m, with drone replica mount) | Import + local | $80 |
| 8 | Drone target replicas ×5 (3D-printed, 30cm wingspan, painted) | In-house (3D printer) | $50 |
| 9 | Non-drone targets ×5 (bird, debris, aircraft silhouettes) | In-house (3D printer) | $50 |
| 10 | Battery pack (24V 20Ah LiFePO4, field-portable) | Import | $200 |
| 11 | Control box (motor controller + encoder readout + wireless trigger) | Local assembly | $150 |
| 12 | Wireless remote (433MHz, start/stop/speed/reverse) | Import | $40 |
| 13 | Position/speed data logger (Arduino + SD card + GPS) | Import | $60 |
| 14 | Carrying cases ×2 (motor + control box, cable + trolley) | Local | $100 |
| 15 | Range markers (reflective posts at 100m, 150m, 200m) | Local | $30 |
| 16 | Assembly + field testing + calibration | WX | $300 |
| | **Total** | | **~$2,040** |
| | **Contingency (40%)** — higher for first-of-kind field equipment | | **$820** |
| | **Budget** | | **$2,860** |

**Significantly under the $5K estimated budget.** Savings can fund a second short-rail setup for VM-K01 high angular rate testing (~$1K additional).

---

## 6. Test Configurations

### Configuration 1: T09 Detection Test (Pd measurement)

```
  Sled rail (60m)
  ←────────────────→
       ┃ Target
       ┃ (2-5 m/s)
       ┃
  ─────┃───── 100m ─────── V-SMASH on tripod + weapon
       ┃                    (operator aims, records P/F)
       ┃
  ─────┃───── 150m ─────── V-SMASH on tripod
       ┃
  ─────┃───── 200m ─────── V-SMASH on tripod
```

- Target: Drone replica (30cm) at each range
- ≥100 passes per range (alternate drone/non-drone presentations)
- Record: detect/no-detect, classification, confidence (via BLE log)
- Daylight + dusk/dawn sessions (VM-O07)

### Configuration 2: T10 Lead Accuracy Test

```
  Sled rail (60m)
  ←────────────────→
       ┃ Target (5-10 m/s)
       ┃
  ─────┃───── 100-150m ───── V-SMASH on weapon + bore-sight camera
       ┃                      (camera records lead indicator position)
       ┃                      (sled logger records target position/speed)
```

- Post-process: compute ideal lead angle from sled data + ballistic model
- Compare V-SMASH displayed lead vs ideal → error in mrad
- ≥50 passes, statistical analysis

### Configuration 3: VM-K01 High Angular Rate Test

```
  Short rail (15m)
  ←────────→
       ┃ Target (10-15 m/s)
       ┃
  ─────┃───── 25-50m ───── V-SMASH
       ┃
  At closest approach: angular rate = v/25m ≈ 30°/s at 13 m/s
```

- Short-rail dedicated setup
- Verify indicator tracks without dropout for 5s (VM-K01)

---

## 7. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| Field range access | VN-RANGE-001 or equivalent | PARTIALLY AVAILABLE | Need 200m clear line-of-sight, safe backstop |
| V-SMASH-M prototype | V-SMASH-M production | BLOCKED (no prototype yet) | Cannot run T09/T10 without DUT |
| AI model confidence thresholds | V-SMASH-M firmware spec | AVAILABLE | 70% gating threshold (VM-Y03) |
| Ballistic model for lead calculation | V-SMASH-M software | AVAILABLE (in firmware) | Reference for T10 accuracy comparison |
| Target drone appearance database | V-SMASH-M AI training data | AVAILABLE | 3D print targets matching training classes |

**Critical path:** V-SMASH-M prototype must exist before field testing. Sled can be built and tested independently (with dummy DUT) beforehand.

---

## 8. Reusability Across V-SMASH Family

| Variant | Reusable? | Adaptation Needed |
|---------|-----------|-------------------|
| V-SMASH-L | **YES** — identical T09/T10 requirements (larger detection range) | Extended range station at 300m |
| V-SMASH-D | **YES** — detection test only (no lead/tracking test) | Simpler config (T09 only) |
| V-SMASH-X | **YES** — same tests as V-L (feature-removed) | None |
| V-SMASH-T | **YES** — same detection + laser verification | Add laser target measurement |
| V-SMASH-NV | **YES** — add thermal target (heated) | Heated target body ($200 addon) for thermal detection test |
| V-SMASH-P | **YES** — extended range (up to 500m for V-P) | Longer range station, same sled |
| V-SMASH-R | **YES** — vehicle-mounted test | Mount sled at range, V-R on vehicle test platform |

**Reuse factor:** 8/8 — ALL variants use the drone sled for T09/T10. This is the highest-reuse tooling item in the family. NRE amortized across entire product line.

---

## 9. Verification of the Sled Itself

| Check | Method | Criteria | Frequency |
|-------|--------|----------|-----------|
| Speed calibration | Laser speed gun measurement over 20m | ±5% of set speed at all speed settings | Before each test campaign |
| Position accuracy | GPS + optical rangefinder spot-check | ±0.5m at 3 positions along rail | Before each test campaign |
| Target height consistency | Spirit level on mast + height measurement | 1.5m ±50mm above ground (drone flight altitude sim) | Installation |
| Cable sag measurement | String line + measuring tape at center | ≤0.8m sag at 60m span | Installation + annually |
| Reliability (continuous run) | 200 passes without mechanical failure | ≤1 unplanned stop per 200 passes | Before production test campaign |

---

## 10. Timeline

| Phase | Activity | Duration | Depends On |
|-------|----------|----------|------------|
| Design | Mechanical design (trolley, posts, mast) | 2 weeks | Range dimensions confirmed |
| Procurement | Motor, controller, cable, electronics | 3 weeks (parallel) | Budget approved |
| Fabrication | Anchor posts, trolley, control box | 3 weeks (parallel with procurement) | Design complete |
| 3D Print | Target replicas (drone + non-drone, 10 total) | 1 week | AI training data for shape reference |
| Assembly | Cable stringing + motor installation + wiring | 2 days (field, requires range access) | All parts ready |
| Testing | Dry run (100 passes), speed calibration, reliability check | 2 days | Assembly complete |
| **Total** | | **~5 weeks** (3 weeks critical path with parallel procurement/fabrication) | |

**Note:** Sled can be built well before V-SMASH-M prototype exists. Recommend building during prototype build phase to have it ready for Phase E field demo.

---

## 11. Alternative: Live Drone Flights

If the sled is not built, T09/T10 can be conducted with live drone flights:

| Attribute | Cable Sled | Live Drone |
|-----------|-----------|------------|
| Repeatability | HIGH (±5% speed, known track) | LOW (wind-dependent, GPS variance) |
| Statistical quality | HIGH (100+ controlled passes) | MEDIUM (limited battery time per flight) |
| Cost per test campaign | $50 (power only) | $500+ (pilot, drone, batteries) |
| Safety | NONE (ground-level, no airspace) | MEDIUM (airspace, crash risk) |
| Regulatory | NONE | CAAV flight approval needed |
| Weather dependency | LOW (rain cancels, wind OK) | HIGH (wind >15 km/h cancels) |
| Range control | EXACT (100m/150m/200m markers) | APPROXIMATE (GPS, ±3m) |
| Speed control | EXACT (encoder feedback) | APPROXIMATE (GPS-derived, ±10%) |
| Non-drone targets | EASY (swap target replica) | IMPOSSIBLE (it's always a drone) |

**Verdict:** Live drone flights are acceptable for preliminary testing but insufficient for formal qualification (T09 requires ≥100 passes with statistical analysis). **Cable sled is required for C-series qualification.**

---

*Sub-project of V-SMASH Product Family — Field Test Equipment*
*Cross-reference: [[V-SMASH-M_Verification_Plan_v1.0|OV-6, T09, T10, VM-K01, VM-O06-O09, VM-S06]], [[V-SMASH-M_B1_YCKT_v1.0|Detection & tracking requirements]]*
