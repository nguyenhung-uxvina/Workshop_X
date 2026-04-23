---
created: 2026-04-19
updated: 2026-04-19
type: technical-reference
version: v1.0
source: "Strategy Doc 2 Part II — Signature Generation Technology Foundation"
status: active
relevance: "UTT-Towed, VN-AST TRON, BB-01, future UTT-Mine, STT-B"
---

# Signature Generation Technology — Reference

> **Purpose:** Technical reference cho multi-domain signature generation. Applicable across TTS product family.
> **Use:** Khi thiết kế signature modules cho bất kỳ training target nào.

---

## 1. SIGNATURE TAXONOMY

| Signature | Detection Range | Primary Applications | WX Product Relevance |
|---|---|---|---|
| **Magnetic** | 5-200m | Mine warfare, submarine detection | UTT-Mine (future), UTT-Towed |
| **Acoustic** | 100m-50km | Submarine detection, sonar | UTT-Towed, BB-01 (measurement), VN-AST |
| **RCS (Radar)** | 1-100km | Anti-ship, anti-missile, anti-UAV | VN-AST TRON, TARGET-DRONE, STT-B |
| **Thermal/IR** | 1-20km | IR missiles, surveillance | VN-AST TRON, STT-B (future) |
| **Optical/visual** | 1-10km | Gunnery, visual ID | Towed Targets (current), VN-AST |
| **Pressure** | 10-100m | Mine triggering, torpedo proximity | UTT-Mine P variant (future) |
| **Seismic** | 10-500m | Bottom mine detection | UTT-Mine P variant (future) |
| **Electric** | 5-50m | Specialized submarine detection | Future advanced UTT |

---

## 2. MAGNETIC SIGNATURE GENERATION

### 2.1 Physics Foundation
- Real ships distort Earth's magnetic field (ferromagnetic steel)
- Signature: 10⁴-10⁶ A·m² dipole moment, 100-1000 nT at close range
- Sensors detect anomaly against Earth's field (~50,000 nT)

### 2.2 Design Approach
- **Method:** 3-axis coil array with programmable current drivers
- **Peak currents:** 10-20A per axis
- **Field output:** 500-2000 nT at 10m range
- **Patterns:** Dynamic, programmable to simulate different vessel types

### 2.3 Design Challenges
| Challenge | Difficulty | Notes |
|---|---|---|
| Thermal management | High | Sealed enclosure + high currents → heat buildup |
| Non-magnetic construction | High | Aluminum + composites ONLY — no steel fasteners |
| Battery life | Medium | High current draw reduces endurance |
| Signature fidelity | High | Must match real ship patterns convincingly |
| Self-calibration | Medium | Field varies with temperature, orientation |

### 2.4 WX Application
- **First target:** UTT-Towed (add magnetic coil to existing towed body)
- **Advantage:** Existing towed target HDPE hull = non-magnetic foundation
- **Risk:** Thermal management in sealed HDPE hull

---

## 3. ACOUSTIC SIGNATURE GENERATION

### 3.1 Physics Foundation
- Ships radiate 10 Hz to 20 kHz
- Characteristic spectra: machinery tonals, propeller blade rate, broadband noise
- Source levels: 150-190 dB re 1 μPa @ 1m

### 3.2 Design Approach
- **Method:** Multi-band transducers (low/mid/high frequency)
- **Total power:** 100-600W peak, 20-100W average
- **Frequency range:** 50 Hz to 20 kHz
- **Source level:** 150-180 dB re 1 μPa @ 1m
- **Content:** Signature library (recorded) + synthesized patterns

### 3.3 Design Challenges
| Challenge | Difficulty | Notes |
|---|---|---|
| Transducer efficiency | High | Only 5-30% typical — most power → heat |
| Battery drain | High | Acoustic = most power-hungry signature type |
| Pressure compensation | Medium | Transducers must work at depth |
| Own-noise rejection | Medium | Platform vibration contaminates signal |
| Matching network | Medium | Impedance matching for efficiency |

### 3.4 WX Application
- **BB-01 connection:** Acoustic measurement expertise → validates generated signatures
- **First target:** UTT-Towed acoustic variant
- **Synergy:** BB-01 measures what UTT-Towed generates → closed validation loop

---

## 4. RADAR CROSS-SECTION (RCS) SIGNATURE

### 4.1 Methods
- **Passive:** Shaping + corner reflectors → 10-100 m² RCS
- **Active:** RCS augmentation → 1,000-10,000 m² equivalent
- **Frequency:** X-band (8-12 GHz), S-band (2-4 GHz)

### 4.2 WX Application
- **VN-AST TRON:** Already surface target — add corner reflectors for RCS enhancement
- **TARGET-DRONE:** Potential RCS augmentation for anti-missile training
- **Galaxy note:** [[Trihedral Corner Reflector]], [[RCS Scaling Law]] — existing knowledge

---

## 5. THERMAL/IR SIGNATURE

### 5.1 Methods
- Controlled heating elements in hull
- Active IR flare generation (engine exhaust simulation)
- Temperature: 60-200°C above ambient
- Power: 200-1000W required
- Spectral range: mid-IR (3-5 μm), LWIR (8-14 μm)

### 5.2 WX Application
- **STT-B (future):** Surface target with IR signature for anti-ship missile training
- **VN-AST TRON:** Potential IR enhancement for integrated training
- **Power budget:** Significant — requires dedicated battery or generator

---

## 6. MULTI-SIGNATURE COORDINATION

### 6.1 Architecture
```
Unified Signature Controller
├── Magnetic module (programmable current)
├── Acoustic module (transducer array)
├── RCS module (active augmentor)
├── Thermal module (heating elements)
└── Synchronization + power management
```

### 6.2 Key Requirements
- Synchronized activation across modules
- Power budget management (total envelope limited by battery)
- Thermal interactions managed (heat from all sources)
- Telemetry uplink coordinated
- Scenario-based programming (simulate specific vessel types)

### 6.3 WX Differentiator
**Multi-signature coordination across domains = key technical moat.** Competitors typically offer single-signature products. WX can offer coherent multi-signature training targets leveraging cross-product expertise.

---

## 7. APPLICABLE WX PRODUCTS — QUICK REFERENCE

| Product | Magnetic | Acoustic | RCS | Thermal | Visual | Priority |
|---|---|---|---|---|---|---|
| UTT-Towed (new) | Add | Add | — | — | — | **Phase 1** |
| VN-AST TRON | — | Potential | Add reflectors | Potential | Existing | **Phase 1** |
| BB-01 LOMAH | — | Measurement | — | — | — | Supporting |
| UTT-Mine (future) | Primary | Secondary | — | — | — | Phase 2 |
| STT-B (future) | — | Secondary | Primary | Add | Add | Phase 2 |
| TARGET-DRONE | — | — | Potential | Potential | Primary | Opportunistic |

---

*Reference document. Update when signature technology decisions are made for specific products.*
