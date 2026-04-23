---
created: 2026-04-19
type: re-tolerance-performance
source: /reverse-engineering --mode mecha --stage 1C
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 1C: TOLERANCE & PERFORMANCE REVERSE — Simsek-K
## OSINT-Based Analysis | 2026-04-19

---

## SECTION 1 — TOLERANCE HIERARCHY

| Feature | Tier | Tolerance Est. | Rationale | Verification | Confidence |
|---------|------|---------------|-----------|-------------|------------|
| Engine mounting bore | 1 Functional | ±0.02 mm | TJ-90 at 96,000 RPM, 153.5mm dia — misalignment = catastrophic vibration | CMM | HIGH |
| RATO attachment points | 1 Functional | ±0.05 mm | 8-15g axial shock loads during rocket ignition | Laser tracker | MEDIUM |
| FCC/IMU mounts | 1 Functional | ±0.05 mm | Rigid coupling prevents IMU resonance and control loop phase lag | CMM | LOW |
| Servo mounts | 1 Functional | ±0.05 mm | Control surface authority at Mach 0.63 dynamic pressure | CMM | MEDIUM |
| Wing-fuselage junction | 2 Interface | ±0.1 mm | Aerodynamic symmetry, transonic drag divergence prevention | 3D laser scan | HIGH |
| Payload bay interface rails | 2 Interface | ±0.1 mm | 18kg modular payloads must seat securely, quick-change | Go/No-Go gauges | HIGH |
| Tail attachment | 2 Interface | ±0.1 mm | Aerodynamic alignment, structural load path | 3D laser scan | MEDIUM |
| Radome-fuselage seal | 2 Interface | ±0.1 mm | RF transparency + weather sealing | Gap gauges | MEDIUM |
| Parachute bay door | 3 Assembly | ±0.2 mm | Reliable pyrotechnic/spring deployment clearance | Feeler gauges | HIGH |
| Access panels | 3 Assembly | ±0.2 mm | Maintenance access, flush aerodynamic surface | Feeler gauges | HIGH |
| Wiring pass-throughs | 3 Assembly | ±0.3 mm | Clearance for PTFE harness, anti-chafe under vibration | Calipers | HIGH |
| Fuel tank mounting | 3 Assembly | ±0.3 mm | Bladder tank positioning within fuselage | Calipers | MEDIUM |
| Outer fairings | 4 Cosmetic | ±0.5 mm+ | Non-structural aerodynamic covers | Visual / profilometer | HIGH |
| Antenna covers | 4 Cosmetic | ±0.5 mm+ | RF-transparent, non-structural | Visual | HIGH |

---

## SECTION 2 — DATUM STRUCTURE (Inferred)

```
PRIMARY DATUM (A): Fuselage longitudinal centerline (aerodynamic X-axis)
  → Master reference for IMU coordinate frame, FCC state estimation
  → All subsystems referenced to this axis

SECONDARY DATUM (B): Engine mounting face (aft bulkhead)
  → Thrust vector alignment
  → Payload bay and RATO booster referenced back to B for CG management

TERTIARY DATUM (C): Wing root leading edge
  → Establishes Y-axis (pitch) and Z-axis (yaw)
  → Control surface hinge lines referenced from C
```

**CG management critical during:**
- Booster separation (mass shift ~15-25kg at 8-15g)
- Payload configuration changes (0-18kg in payload bay)
- Fuel burn (28kg → 0 over 42+ min)

---

## SECTION 3 — CRITICAL PERFORMANCE PARAMETERS

### Structural

| Parameter | Value | Calculation | Confidence |
|-----------|-------|-------------|------------|
| Wing loading (W/S) | ~184 kg/m² | 83 kg / ~0.45 m² (est. wing area from 1.5m span) | LOW — chord unknown |
| Thrust-to-weight (T/W) | 0.48 | 39.7 kgf / 83 kg | HIGH |
| Max load factor | +10g / -4g (ultimate) | Inferred from RATO (8-15g) + kamikaze terminal dive | MEDIUM |
| Safety factor | 1.5× | Standard aerospace (ultimate/limit = 1.5) | MEDIUM |
| Drag rise Mach | ~0.65 | Max speed Mach 0.63 suggests non-supercritical airfoil hitting drag divergence | MEDIUM |

### Propulsion (TEI-TJ90)

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|------------|
| Engine T/W (alone) | 5.7 | 390N / (6.95kg × 9.81) | HIGH |
| TSFC | 0.17 kg/(N·h) | TEI datasheet | HIGH |
| Cruise thrust (est.) | ~234 N | ~60% of max for Mach 0.6 cruise | MEDIUM |
| Fuel flow at cruise | 39.78 kg/h | 0.17 × 234 | MEDIUM |
| Fuel mass | ~28 kg | 35L × 0.8 kg/L (JP-8 density) | HIGH |
| **Calculated endurance** | **42.2 min** | 28 / 39.78 × 60 | HIGH |
| Stated endurance | >45 min | TAI official | HIGH |
| **Validation** | **PASS** — within 7% (likely cruise at <60% thrust) | — | — |

### Aerodynamic (Estimated)

| Parameter | Value | Method | Confidence |
|-----------|-------|--------|------------|
| L/D ratio (cruise) | ~8-10 | Typical for this class cruise missile config | LOW |
| Stall speed | ~120-150 km/h | Estimated from W/S and CL_max ~1.2 | LOW |
| Parachute deploy speed | ~200-250 km/h | Engine shutdown → deceleration → drogue at safe speed | LOW |
| Aspect ratio | ~5 | 1.5² / ~0.45 m² wing area | LOW |

### Thermal

| Zone | Temperature Est. | Risk | Confidence |
|------|-----------------|------|------------|
| Engine bay | 200-400°C (casing radiation) | Composite matrix degradation if insufficient insulation | MEDIUM |
| Exhaust plume | 600-800°C | Parachute bay proximity — engine shutdown timing CRITICAL | MEDIUM |
| Electronics bay | 40-60°C (ambient + self-heating) | Standard for enclosed avionics at altitude | MEDIUM |

### Electrical Power Budget

| Consumer | Est. Power (W) | Priority |
|----------|---------------|----------|
| FCC + Navigation | 15-30 | Critical |
| Datalink modem (Tx) | 50-100 | Critical |
| Servo actuators (×4) | 50-150 (peak during maneuvers) | Critical |
| GNSS receiver | 5-10 | Critical |
| Radar altimeter | 10-20 | Mission |
| Active payload (RCS/IR/EW) | 50-200 | Mission |
| Misc (sensors, BIT, FTS) | 10-20 | Safety |
| **TOTAL** | **190-530 W** | — |
| Generator output (est.) | 300-500 W | — |
| **Margin** | **Tight — active payloads may exceed budget** | ⚠️ |

**Cross-domain risk:** Active payloads (EW jammer, active RCS repeater) may exceed generator capacity. Likely requires payload-specific power management — only one active payload at a time.

---

## SECTION 4 — MANUFACTURING CAPABILITY REQUIREMENTS

| Tolerance Tier | Manufacturing Equipment | Metrology Equipment | NDT Required | VN Status |
|---------------|----------------------|--------------------|--------------|---------| 
| **Tier 1** (±0.02-0.05mm) | 5-axis CNC (aerospace grade), precision grinding | Bridge CMM (μm accuracy), X-ray CT (engine internals) | Ultrasonic, X-ray for critical joints | ⚠️ CNC available; CMM limited; X-ray CT gap |
| **Tier 2** (±0.1mm) | 3-axis CNC, VARTM composite tooling, bonding jigs | Portable 3D laser scanner (FaroArm class), UT for composite | Ultrasonic NDT for composite delamination | ⚠️ CNC available; 3D scanner gap; UT expanding |
| **Tier 3** (±0.2-0.3mm) | 3-axis CNC routing, standard sheet metal, SMT lines | Calipers, micrometers, AOI for PCBs | Visual, dye penetrant | ✅ Fully available |
| **Tier 4** (±0.5mm+) | Hand layup, basic machining | Visual, profilometer | None required | ✅ Fully available |

**Metrology investment needed for WX:**
1. **CMM** — bridge-type, μm accuracy for Tier 1 features (~$50-100K)
2. **Portable 3D scanner** — FaroArm or similar for Tier 2 composite verification (~$30-60K)
3. **Ultrasonic NDT** — phased array for composite inspection (~$20-40K)
4. X-ray CT — for engine component inspection (only if doing engine assembly, $200K+)

**Total metrology investment for Tier 1-2 capability: ~$100-200K** (excluding X-ray CT).
If engine remains imported: $100-200K sufficient.
If engine assembly in VN: add $200-400K for X-ray CT + engine test bench.
