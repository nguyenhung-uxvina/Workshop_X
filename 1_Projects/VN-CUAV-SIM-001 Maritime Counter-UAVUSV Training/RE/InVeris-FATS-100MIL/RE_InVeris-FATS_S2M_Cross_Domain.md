# RE STAGE 2M: CROSS-DOMAIN ANALYSIS — InVeris FATS

**Date:** 2026-04-22

---

## 2M-1: CROSS-DOMAIN FUNCTION ALLOCATION

| Function | Mech % | Elec % | Sw % | Ctrl % | Rationale |
|----------|--------|--------|------|--------|-----------|
| SF-01 Recoil | **70** | 15 | 10 | 5 | Gas piston = mechanical core, valves = electrical trigger, timing = software |
| SF-02 Aim tracking | 5 | **50** | 25 | **20** | Cameras+OCR = electronic, processing = SW+CTRL |
| SF-03 Trigger | 30 | **40** | 15 | 15 | Mechanical trigger + electronic sensor + SW processing |
| SF-04 Handling quality | 10 | **40** | **30** | **20** | Sensors = electronic, fusion = SW, coaching loop = CTRL |
| SF-05 Ballistics | — | 5 | **85** | 10 | Pure computation |
| SF-06 Hit detection | — | 20 | **45** | **35** | Camera→OCR→collision = mostly SW+CTRL pipeline |
| SF-07 Visual rendering | 10 | 15 | **65** | 10 | GPU = electronic, engine = SW |
| SF-08 Projection | **40** | **50** | 10 | — | Screens = mech, projectors = elec, edge-blend = SW |
| SF-09 Audio | 15 | **50** | **30** | 5 | Speakers = elec, spatial audio = SW |
| SF-10 Target AI | — | — | **70** | **30** | Pure SW+CTRL |
| SF-11 Coaching | — | 10 | **60** | **30** | Sensor inputs (elec), analysis (SW), feedback loop (CTRL) |
| SF-12 AAR | — | 5 | **85** | 10 | Data logging + replay = mostly SW |
| SF-13 Scenario mgmt | — | — | **90** | 10 | GUI + authoring = SW |
| SF-14 Weapon ID | 5 | **40** | **45** | 10 | BT hardware (elec) + protocol (SW) |
| SF-16 Calibration | 15 | 30 | **40** | 15 | Physical alignment + camera registration + SW computation |
| **OVERALL** | **15%** | **25%** | **45%** | **15%** | SW-dominated system |

## ALLOCATION DRIVER ANALYSIS

| Driver Type | FATS Choice | WX LITE Choice | Gap/Opportunity |
|-------------|------------|---------------|----------------|
| **Technology era** | 1980s origin → evolved through 4 decades. Camera-based hit detection = pre-encoder era. Gas blowback = mature mechanical. | 2026 design → modern COTS. Encoder-based = 2020s approach. Solenoid = simplest. | WX benefits from modern components at lower cost |
| **Physical** | Hand-held weapons → wireless required → Bluetooth + battery + gas magazine | Naval mount → wired OK → simpler, more reliable | Different constraint → different solution |
| **Strategic** | US military PoR → maximum fidelity, cost secondary. 300+ weapons → platform economy. | VN startup → cost-effective, focused niche. 5 weapons → quality over quantity. | Both valid strategies for different markets |
| **Operational** | Classroom/range → many trainees, short sessions | Ship/base → few trainees, long sessions, harsh environment | Maritime durability > trainee throughput for WX |

## 2M-2: CONTROL LAW COMPARISON

### FATS Hit Detection Control Loop

```
FATS HIT DETECTION (camera-based):

Trigger pull → laser activates →
  Camera 1,2,3 capture laser spot on screen →
  OCR processor: multi-camera triangulation →
  Screen coordinate (x,y) of impact →
  Scenario engine: map (x,y) to 3D world coordinate →
  Ballistic engine: apply projectile trajectory →
  Collision detection: hit/miss on target mesh →
  Result: HIT (damage model) or MISS (miss distance)

Timing: Unknown — but "real-time" claim suggests < 50ms total
Multi-trainee: OCR disambiguates multiple laser spots simultaneously
Weakness: Requires calibrated cameras → sensitive to vibration/movement
```

### WX Hit Detection Control Loop

```
WX HIT DETECTION (encoder-based):

Trigger pull → encoder reads azimuth + elevation →
  Serial/USB → Unity: weapon angles at trigger moment →
  Ballistic engine (V-SMASH): compute 6DOF trajectory →
  Ray-trace: project from muzzle along trajectory →
  Collision detection: hit/miss on target mesh →
  Result: HIT (damage model) or MISS (miss distance)

Timing: Measured 46ms budget (encoder 2ms → USB 3ms → Unity 4ms → render 12ms → ...)
Multi-trainee: Each station has own encoders → no disambiguation needed
Strength: No camera calibration, works in any lighting, VR-ready
```

### Key Difference

| Aspect | FATS (camera) | WX (encoder) |
|--------|-------------|-------------|
| Calibration | Requires camera alignment + screen registration | Encoder zero only |
| Ambient light sensitivity | YES — camera may struggle in bright/dark | NO — encoder is light-independent |
| Accuracy source | Camera resolution + OCR algorithm | Encoder resolution (0.1°) + ballistic model |
| VR migration path | POOR — camera needs physical screen | **GOOD** — encoder works with any display |
| Multi-trainee | Complex (OCR must disambiguate spots) | Simple (each station independent) |
| Moving platform | POOR — camera calibration disrupted by ship motion | **GOOD** — encoder relative to weapon mount |

**WX encoder approach is BETTER for maritime (moving platform) and VR migration.** FATS camera approach is BETTER for walk-around hand-held weapons.

## 2M-3: SOFTWARE ARCHITECTURE COMPARISON

| Layer | FATS | WX LITE |
|-------|------|---------|
| Render engine | Custom/proprietary (30+ years evolution) | Unity 6 LTS + HDRP |
| Tactical engine | VBS3/VBS4 (licensed from BIS) | N/A (not needed for gunnery) |
| Ballistic engine | Proprietary | V-SMASH (WX IP, proven) |
| Coaching engine | Proprietary Automatic Coaching | **NONE** (gap → ACH opportunity) |
| AAR engine | Proprietary replay + analytics | Unity replay + custom analytics |
| Scenario authoring | Proprietary editor | Unity Scene Editor + custom UI |
| Weapon interface | BlueFire protocol (BT, proprietary) | Serial/USB + NFC (simple, open) |
| OS/platform | Unknown (likely Windows) | Windows 11 + Unity standalone |
| Networking | Proprietary multi-station | UDP/TCP (standard) |

**Software maturity gap:** FATS has **30+ years** of SW accumulation across 40+ countries. WX starts from scratch but on **modern foundation** (Unity 6) with **no legacy debt**.

## CROSS-DOMAIN INTEGRATION CONCERNS

| # | Concern | FATS Risk | WX Risk | Notes |
|---|---------|-----------|---------|-------|
| 1 | Recoil timing sync | HIGH (gas valve delay variable with temperature/pressure) | LOW (solenoid response < 5ms, deterministic) | **WX advantage: electric > pneumatic for timing** |
| 2 | Camera/projector alignment | HIGH (physical calibration, drift with heat/vibration) | N/A (encoder-based, no cameras) | **WX advantage: simpler calibration** |
| 3 | Multi-engine integration | HIGH (3D + VBS3 + Video = 3 engines to coordinate) | LOW (single Unity engine) | **WX advantage: single engine** |
| 4 | Bluetooth latency | MEDIUM (wireless latency + reliability) | N/A (wired) | **WX advantage: wired = deterministic** |
| 5 | Motion platform sync | N/A (no motion) | MEDIUM (2-DOF sync with visual at 50Hz) | WX-specific challenge |
| 6 | Sensor data fusion | HIGH (multiple sensors per weapon × multiple weapons) | LOW (2 encoders + 1 trigger per station) | **WX advantage: simpler data pipeline** |
| 7 | SW licensing risk | HIGH (VBS3/4 license dependency on BIS) | LOW (Unity free for <$1M) | **WX advantage: no license dependency** |

**Summary:** WX has **5 integration advantages** over FATS, primarily from simpler architecture. FATS' 30-year accumulation creates integration complexity that WX avoids by modern clean-sheet design.
