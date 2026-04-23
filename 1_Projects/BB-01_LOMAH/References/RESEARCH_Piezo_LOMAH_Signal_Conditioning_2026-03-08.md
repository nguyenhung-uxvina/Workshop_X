---
created: 2026-03-08
source: research-pipeline
notebook: lomah
topic: "Piezo contact sensor signal conditioning for bullet impact detection"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox, #topic/electronics]
videos_analyzed:
  - "Oakwood Controls H-Bar Target System"
  - "Air Target Miss Distance Indicator Training Equipment"
  - "Tachus Electronic Target Scoring System"
  - "TRAINSHOT Electronic Training System"
  - "The Electronic Target Experience"
  - "ShotMarker Electronic Target"
  - "MEAS Piezo Film Vibration Sensor Demo"
  - "Charge amplifier selection explained in 4 min"
  - "Kongsberg Indoor Electronic Targets"
web_sources:
  - "Kistler Charge Amplifier Glossary"
  - "PCB Piezotronics Signal Conditioning"
  - "Wikipedia: Location of miss and hit"
---

# Research: Piezo Contact Sensor Signal Conditioning for BB-01 LOMAH

**Pipeline output #3/5** | NLM notebook: `lomah` (12 sources)

---

## 1. Competitive Landscape — Commercial Electronic Target Technologies

### Sensing Technologies in Use

| Technology | Products | Principle | Pros | Cons |
|-----------|----------|-----------|------|------|
| **Acoustic (LOMAH)** | Oakwood H-Bar, Air Target 12-sector | Triangulate supersonic shockwave arrival time | No target consumption, low cost, X/Y coordinates | Requires supersonic rounds, outdoor only |
| **Optical/Laser** | Kongsberg Mr. Target | Cameras + laser grid triangulate pellet position | Very high precision (0.1mm), indoor | Expensive, fragile, airgun only |
| **Electrical circuit closure** | TRAINSHOT | Bullet penetrates electrochromatic paint + aluminum layer, closes circuit | Simple, Bluetooth readout, 16M samples/sec | Target consumed on hit, no miss detection |
| **Acoustic + app** | ShotMarker | Acoustic sensors on target frame | Long-range wireless, per-shot tracking | $400+/sensor, supersonic only |
| **Piezo contact** | (BB-01 concept) | PZT/PVDF on steel panel detects impact vibration | Direct hit detection, subsonic compatible | No miss detection, location accuracy TBD |

### Key Finding: Market Gap
- Acoustic LOMAH = dominant technology for military training (supersonic)
- NO commercial contact-piezo LOMAH exists in the market — BB-01 would be novel
- Contact approach advantage: works with subsonic rounds, simpler triangulation math
- Contact approach disadvantage: cannot detect misses (acoustic can)

### Commercial System Issues (from competition shooters)
- Calibration drift: electronic display shifts vs actual paper holes
- False negatives: systems fail to register shots → standardized penalties applied
- Scoring ambiguity: X vs 10-ring misclassification
- **Design lesson:** Reliability > precision for military use

---

## 2. Signal Conditioning Chain — Design Parameters

### BB-01 Signal Chain Architecture
```
PZT disk → Charge Amp (Q→V) → Bandpass Filter → Gain → Clamp → ADC → MCU
```

### A. Piezoelectric Sensor Selection

**PZT disk (lead zirconate titanate)** recommended over PVDF film for bullet impact:
- PZT sensitivity: ~2-5 pC/N (charge mode)
- PVDF sensitivity: ~20-30 pC/N but mechanically fragile
- Bullet impact force: 5,000-30,000 N (depending on caliber, 5.56mm to 12.7mm)
- Expected charge output: **10,000-150,000 pC** (10-150 nC) — large signal
- PZT disk size: 20-27mm diameter, 2-3mm thick (standard industrial)

**Mounting:** Epoxy-bonded to rear of steel target panel (6-10mm AR500 steel)

### B. Charge Amplifier Design

**Topology:** Inverting op-amp with capacitive feedback (classic charge amplifier)

```
        Cf (feedback capacitor)
    ┌──────┤├──────┐
    │      Rf       │
    │  ┌───/\/\/──┐ │
    │  │          │ │
Vin─┤──┴──[─]     ├──Vout
    │      [+]────┘
    │       │
    └───────┴── GND
```

**Key parameters:**
- **Cf (feedback capacitor):** 1-10 nF
  - Gain = Q_in / Cf → with 100 nC input and Cf = 10 nF → Vout = 10V (good)
  - Cf = 1 nF → Vout = 100V (saturates!) → use 10-22 nF for bullet impact
- **Rf (feedback resistor):** 1-10 MΩ
  - Sets low-frequency cutoff: f_low = 1/(2π·Rf·Cf)
  - Rf = 10 MΩ, Cf = 10 nF → f_low = 1.6 Hz (good — rejects DC drift)
  - Rf = 1 MΩ, Cf = 10 nF → f_low = 16 Hz (also acceptable)
- **Time constant:** τ = Rf × Cf = 10 ms to 100 ms (pulse capture window)

**Op-amp selection (Vietnam market):**
| Op-amp | GBW | Slew Rate | Supply | Notes |
|--------|-----|-----------|--------|-------|
| **TL072** | 3 MHz | 13 V/µs | ±5 to ±18V | JFET input, low noise — **preferred** |
| LM358 | 1 MHz | 0.3 V/µs | 3-32V | Slow slew rate — marginal for fast impacts |
| LM324 | 1 MHz | 0.5 V/µs | 3-32V | Quad version of LM358 |

**Recommendation:** TL072 strongly preferred. LM358 slew rate (0.3 V/µs) may distort fast impact pulses (<100 µs rise time). TL072's 13 V/µs handles it easily.

### C. Bandpass Filter

**Bullet impact frequency content:**
- Impact pulse duration: 50-500 µs → dominant frequency: 1-20 kHz
- Steel panel resonance: 500 Hz - 5 kHz (depends on panel size/thickness)
- Useful signal band: **1 kHz - 20 kHz**

**Noise sources to reject:**
| Noise Source | Frequency | Rejection Method |
|-------------|-----------|-----------------|
| Wind/weather | < 100 Hz | High-pass at 500 Hz |
| Handling/vibration | < 200 Hz | High-pass at 500 Hz |
| Rain drops | 100 Hz - 2 kHz | Amplitude threshold (rain << bullet) |
| EMI (power line) | 50/60 Hz | High-pass + layout |
| Sensor resonance ring | > 50 kHz | Low-pass at 20-30 kHz |

**Recommended filter:**
- **High-pass:** 500 Hz, 2nd order Sallen-Key (TL072)
- **Low-pass:** 20 kHz, 2nd order Sallen-Key (TL072)
- Combined bandpass: **500 Hz - 20 kHz**
- Alternative: single 4th-order bandpass centered at ~5 kHz, Q ≈ 2

### D. Gain Stage
- Post-filter gain: 1-10x adjustable (trimpot)
- Purpose: normalize signal to ADC input range (0-3.3V for STM32)
- **Clamp circuit:** Schottky diodes to 3.3V rail to protect ADC

### E. Threshold Detection
- **Hardware comparator:** LM393, threshold set by trimpot (adjustable for caliber)
- **Or software:** ADC sampling at 100 kHz, peak detection in firmware
- Rain rejection: require minimum pulse energy (integral of V²·dt) not just peak voltage
- **Debounce:** 5-10 ms lockout after trigger to prevent echo detection

---

## 3. Acoustic LOMAH vs Contact Piezo — Comparison for BB-01

| Parameter | Acoustic LOMAH | Contact Piezo (BB-01) |
|-----------|---------------|----------------------|
| Detects misses | YES (primary purpose) | NO |
| Detects hits | YES (by inference) | YES (direct) |
| Subsonic rounds | NO | YES |
| Location accuracy | ±50mm typical | ±100mm (TBD, depends on sensor array) |
| Target consumables | None | Steel panel (reusable) |
| Cost per unit | $5,000-15,000 | Target: <$1,000 |
| Complexity | High (DSP + timing) | Medium (analog + MCU) |
| Weather sensitivity | Wind affects acoustic | Rain may false trigger |
| Required sensors | 3-4 microphones | 4+ PZT disks per panel |

**BB-01 strategic position:** Low-cost hit detection for Vietnamese military training ranges where miss detection is not required. Complementary to acoustic LOMAH, not competing.

---

## 4. Key Design Decisions for BB-01 (CEO Core)

1. **PZT vs PVDF?** → PZT recommended (more robust, higher force tolerance)
2. **TL072 vs LM358?** → TL072 (slew rate critical for impact pulses)
3. **Analog threshold vs software peak detection?** → Software preferred (flexible, caliber-adaptive)
4. **Number of sensors per panel?** → 4 minimum (corners) for impact location via TDOA
5. **ADC sampling rate?** → 100 kHz minimum (Nyquist for 20 kHz signal band)

---

## 5. NLM Source References

### Videos
1. Oakwood Controls H-Bar Target System — acoustic LOMAH operation demo
2. Air Target Miss Distance Indicator Training Equipment — 12-sector acoustic system
3. Tachus Electronic Target Scoring System — commercial electronic target
4. TRAINSHOT Electronic Training System — electrochromatic paint + circuit closure
5. The Electronic Target Experience — competition shooter perspective on electronic target issues
6. ShotMarker Electronic Target — acoustic wireless target system
7. MEAS Piezo Film Vibration Sensor Demo — PVDF piezo film basics
8. Charge Amplifier Selection Explained — Kistler charge amp selection methodology
9. Kongsberg Indoor Electronic Targets — optical/laser precision targeting

### Web Sources
10. Kistler Charge Amplifier Glossary — charge amp theory and product selection
11. PCB Piezotronics Signal Conditioning — ICP/IEPE vs charge mode comparison
12. Wikipedia: Location of miss and hit — LOMAH technology overview
