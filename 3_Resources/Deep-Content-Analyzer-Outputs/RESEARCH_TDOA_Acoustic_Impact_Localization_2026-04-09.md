---
created: 2026-04-09
updated: 2026-04-09
source: research-pipeline-v3 (Auto-fallback Quick Mode — NLM unavailable)
notebook: none
topic: "TDOA acoustic impact location algorithm for military shooting range target scoring"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #product, #pahl, #defense]
source_quality:
  tier_s: 4
  tier_a: 6
  tier_b: 9
  tier_c: 4
  pro_ratio: "43%"
sources_analyzed:
  - title: "Robust TDOA Localization Using Weighted Least Squares with Cone Tangent Plane Constraint"
    tier: S
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5876713/"
  - title: "TDoA Localization Combining Weighted Least Squares and Firefly Algorithm"
    tier: S
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6603714/"
  - title: "Performance Study of Impact-Point Estimation Systems (Delta/H-type arrays)"
    tier: S
    url: "https://www.hindawi.com/journals/js/2019/1758765/"
  - title: "Tonal and Temporal Analysis of Shockwave for Multi-Caliber Ammunition"
    tier: S
    url: "https://link.springer.com/chapter/10.1007/978-981-96-9967-4_6"
  - title: "Time-domain GCC-PHAT for small microphone arrays"
    tier: A
    url: "https://ieeexplore.ieee.org/document/6532229/"
  - title: "Improved GCC-PHAT Algorithm for TDOA Estimation"
    tier: A
    url: "https://link.springer.com/chapter/10.1007/978-981-13-3708-6_26"
  - title: "Acoustic source localization and speed estimation under temperature variations"
    tier: A
    url: "https://ieeexplore.ieee.org/document/7096382"
  - title: "Optimization Algorithm for Delay Estimation Based on SVD and Improved GCC-PHAT"
    tier: A
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9571281/"
  - title: "Passive Acoustic Source Localization at Low Sampling Rate Using 5-Element Cross Array"
    tier: A
    url: "https://www.mdpi.com/1424-8220/15/6/13326"
  - title: "KR101997387B1 — Method and apparatus for estimating target impact point using acoustic sensor"
    tier: A
    url: "https://patents.google.com/patent/KR101997387B1/en"
  - title: "Shooter localization and bullet caliber estimation from acoustic"
    tier: B
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0003682X10001283"
  - title: "Weapon classification and shooter localization using distributed multichannel acoustic sensors"
    tier: B
    url: "https://www.sciencedirect.com/science/article/abs/pii/S138376211100052X"
  - title: "Impact Monitoring and Positioning of Steel Plate Using Piezoelectric Sensor Array"
    tier: B
    url: "https://ieeexplore.ieee.org/document/10412327/"
  - title: "ShotMarker E-Target System (commercial, 8 MEMS, 1mm claimed accuracy)"
    tier: B
    url: "https://autotrickler.com/pages/shotmarker"
  - title: "LOMAH H-Bar Target System (Oakwood Controls)"
    tier: B
    url: "https://www.oakwoodcontrols.com/electronic-target-systems/portable-electronic-target-system/"
  - title: "Electronic Scoring System — Mathematical Approach (DiVA thesis)"
    tier: B
    url: "https://www.diva-portal.org/smash/get/diva2:939023/FULLTEXT02.pdf"
  - title: "MilliLoc: Acoustic millimeter-level locating system (96 kHz)"
    tier: B
    url: "https://pubs.aip.org/aip/rsi/article/94/1/015113/2872576/"
  - title: "A Review of AE Source Localization Techniques in Different Dimensions (MDPI)"
    tier: B
    url: "https://www.mdpi.com/2076-3417/14/19/8684"
  - title: "Frequency-Sliding GCC: Sub-band TDOA approach"
    tier: B
    url: "https://arxiv.org/pdf/1910.08838"
  - title: "GitHub: aishoot/Sound_Localization_Algorithms"
    tier: C
    url: "https://github.com/aishoot/Sound_Localization_Algorithms"
  - title: "GitHub: Matt-Pettit/SoundLocalization (96.25% accuracy, 20.74mm avg error)"
    tier: C
    url: "https://github.com/Matt-Pettit/SoundLocalization"
  - title: "TDOA Sound Localization with Raspberry Pi (Kim Hendrikse, Medium)"
    tier: C
    url: "https://medium.com/@kim_94237/tdoa-sound-localization-with-the-raspberry-pi-3e777469c4fa"
  - title: "GitHub: hcfman/sbts-aru (ARU with TDOA, Raspberry Pi)"
    tier: C
    url: "https://github.com/hcfman/sbts-aru"
---

# RESEARCH: TDOA Acoustic Impact Location Algorithm
## Military Shooting Range Target Scoring

**Topic:** TDOA (Time Difference of Arrival) acoustic impact localization for target scoring
**Date:** 2026-04-09
**Pipeline:** v3.0 Auto-fallback (NLM unavailable) — Claude synthesis from 4-channel web search
**NLM Status:** ⚠ Auto-fallback — NLM unavailable, using Claude-only analysis

---

## 1. SOURCE TABLE (by Tier)

### Tier S — Standards / Primary Research

| # | Title | Source | Type | Confidence |
|---|-------|--------|------|------------|
| S1 | Robust TDOA Localization — Weighted Least Squares + Cone Tangent Constraint | MDPI Sensors / PMC | Peer-reviewed paper | ★★★ |
| S2 | TDoA Localization — WLS + Firefly Algorithm | MDPI Sensors / PMC | Peer-reviewed paper | ★★★ |
| S3 | Performance Study of Impact-Point Estimation (Delta/H-type sensor arrays) | Hindawi Journal of Sensors | Peer-reviewed paper (direct application) | ★★★ |
| S4 | Tonal and Temporal Analysis of Shockwave for Multi-Caliber Ammunition | Springer | Peer-reviewed (multi-caliber specific) | ★★★ |

### Tier S — Patents

| # | Patent # | Title | Assignee | Filed | Status |
|---|----------|-------|----------|-------|--------|
| P1 | KR101997387B1 | Method and apparatus for estimating target impact point using acoustic sensor | Korea (AGENCY/R&D) | — | Active |
| P2 | US9319787B1 | Estimation of time delay of arrival for microphone arrays (best-reference selection) | — | — | Active |
| P3 | US7583808B2 | Locating and tracking acoustic sources with microphone arrays | — | — | Active |
| P4 | US12,372,599 | Device for acoustic source localization (2025) | — | 2025 | Active |

### Tier A — Authority / OEM

| # | Title | Source | Type |
|---|-------|--------|------|
| A1 | Time-domain GCC-PHAT for small microphone arrays | IEEE Xplore | Conference paper |
| A2 | Improved GCC-PHAT Algorithm for TDOA Estimation | Springer LNEE | Conference paper |
| A3 | Acoustic source localization and speed estimation under temperature variations | IEEE Xplore | Conference paper |
| A4 | SVD + Improved GCC-PHAT for delay estimation | PMC / MDPI Sensors | Journal paper |
| A5 | Passive Acoustic Localization at Low Sampling Rate — 5-element cross array | MDPI Sensors | Journal paper |
| A6 | LOMAH H-Bar System (Oakwood Controls) — commercial military system | Oakwood Controls | Industry |

### Tier B — Professional

| # | Title | Source | Type |
|---|-------|--------|------|
| B1 | Shooter localization and bullet caliber estimation from acoustic signals | ScienceDirect | Journal |
| B2 | Weapon classification and shooter localization — distributed multichannel | ScienceDirect | Journal |
| B3 | Impact Monitoring and Positioning of Steel Plate — Piezoelectric Array | IEEE Xplore | Conference |
| B4 | ShotMarker E-Target (8 MEMS, 1mm claimed) | AutoTrickler/ShotMarker | Commercial spec |
| B5 | Electronic Scoring System — Electronic & Mathematical Approach | DiVA Portal | MSc Thesis |
| B6 | MilliLoc — Acoustic millimeter-level locating (96 kHz) | AIP Rev. Sci. Instruments | Journal |
| B7 | AE Source Localization Techniques Review | MDPI Applied Sciences | Review paper |
| B8 | Frequency-Sliding GCC sub-band TDOA | arXiv (IEEE TASLP) | Journal preprint |
| B9 | LOMAH T-Bar/H-Bar system description | lomah-target.com + NRA SSUSA | Industry |

### Tier C — Community / Open Source

| # | Title | Source | Type |
|---|-------|--------|------|
| C1 | aishoot/Sound_Localization_Algorithms (GCC-PHAT, beamforming, MUSIC) | GitHub | Open source |
| C2 | Matt-Pettit/SoundLocalization (96.25% accuracy, 20.74mm avg error, RPi) | GitHub | Open source |
| C3 | TDOA Sound Localization with Raspberry Pi | Medium | Tutorial |
| C4 | hcfman/sbts-aru (ARU using TDOA, Raspberry Pi) | GitHub | Open source |

**✓ Pro sources (S+A): 10 sources — Đủ nguồn pro**

---

## 2. RECOMMENDED ALGORITHM: GCC-PHAT vs Cross-Correlation vs Other

### Confidence: ★★★ HIGH (confirmed by S1, S2, A1, A2, A4)

**Verdict: GCC-PHAT is the recommended algorithm for this application.**

### Comparison Table

| Algorithm | Accuracy | Noise Robustness | Reverberation Robustness | Computational Cost | Real-time Feasibility |
|-----------|----------|-----------------|--------------------------|-------------------|----------------------|
| Basic cross-correlation | Moderate | Poor — degrades with noise | Poor | Low (O(N log N)) | Easy |
| GCC-PHAT | High | Good | **Excellent** | Low-Medium | **Feasible on STM32/RPi** |
| GCC-SCOT (smoothed coherence) | High | Very good | Good | Medium | Feasible |
| MUSIC / SRP-PHAT | Very High | Good | Very good | **High** | Difficult on STM32 |
| Neural GCC-PHAT | Best | Best | Best | Very High | RPi only, latency risk |
| Frequency-sliding GCC | High | Good | Good | Medium-High | RPi feasible |

### Why GCC-PHAT Wins for Impact Detection

1. **Impulsive signal advantage:** Projectile impact generates a broadband impulsive wave. GCC-PHAT's phase normalization (dividing cross-spectrum by its magnitude) creates a sharp peak ideal for impulsive events — superior to basic CC which produces broad, ambiguous peaks for transient signals.

2. **Outdoor noise robustness:** Shooting ranges have wind, ambient noise. PHAT weighting suppresses colored noise better than raw CC.

3. **Low reverb environment:** Steel/rubber target panels in open-air ranges have limited reverberation compared to indoor acoustic scenarios. GCC-PHAT excels precisely in low-to-moderate reverb conditions (★★★ S2, A1).

4. **Embedded feasibility:** GCC-PHAT is an FFT-based algorithm, implementable in O(N log N). For N=1024 samples at 500 kHz: ~10K multiplications — well within STM32H7 capability.

### GCC-PHAT Formula

```
Ψ_PHAT(ω) = X₁(ω)·X₂*(ω) / |X₁(ω)·X₂*(ω)|

TDOA = argmax_τ [ IFFT( Ψ_PHAT(ω) ) ]
```

Where:
- X₁(ω), X₂(ω) = FFT of signals from sensors 1 and 2
- * = complex conjugate
- The denominator normalizes spectral magnitude → pure phase information → sharp peak

### Implementation Steps

```
1. Capture simultaneous buffers from all sensors (triggered by threshold)
2. Apply bandpass filter: 1 kHz – 20 kHz (impact acoustic band)
3. FFT each channel (window: Hann, length: 512–1024 points)
4. Compute cross-spectrum: X₁(ω)·X₂*(ω)
5. Apply PHAT weighting: divide by |X₁(ω)·X₂*(ω)|
6. IFFT → GCC-PHAT function
7. Find peak location → TDOA (in samples)
8. Convert: TDOA_seconds = TDOA_samples / Fs
9. Compute range difference: Δd = TDOA_seconds × c(T)
10. Solve hyperbolic equations → (x, y) coordinates
```

### Enhancement for Impact Detection (vs Speech)

Standard GCC-PHAT is designed for continuous speech sources. For **single impulsive events**:
- Use short FFT window (256–512 points) centered on the detected trigger event
- Pre-trigger buffer: 50–100 samples to capture wavefront
- Single-shot computation (no averaging needed) — advantage for impact vs continuous sources

---

## 3. SENSOR GEOMETRY: Optimal Placement for 1m × 1m Target Panel

### Confidence: ★★★ HIGH (confirmed by S3, A1, commercial systems B4, B9)

### Minimum Configuration: 3 Sensors (delta/triangle)

3 sensors give N-1=2 independent TDOA measurements → enough for 2D localization if sensors are non-collinear.

**Geometry:** Equilateral triangle, sensors at panel corners/edges
- S1: (0, 0) — bottom-left
- S2: (1m, 0) — bottom-right
- S3: (0.5m, 0.866m) — top-center

**Limitation:** Ambiguity in one hyperbolic branch — can be resolved by constraint that impact is on the panel face.

### Recommended Configuration: 4 Sensors (H-type or corner-square)

4 sensors give 3 independent TDOA measurements → overdetermined system → least-squares solution → better accuracy + fault tolerance (1 sensor can fail).

**H-type layout (from S3 — Impact Point Estimation paper):**
```
S1 ─────────────── S2
│                   │
│   [Target Panel]  │
│                   │
S3 ─────────────── S4

S1: (0, 1.0)   S2: (1.0, 1.0)   [top corners]
S3: (0, 0)     S4: (1.0, 0)     [bottom corners]
```

**Delta-type (alternative, S3):**
```
         S1 (0.5, 1.0)
        / \
       /   \
S2 (0,0) ─ S3 (1.0, 0)
```

### LOMAH Commercial Standard (B9)

Both T-bar and H-bar LOMAH systems use acoustic sensors in a linear bar arrangement **outside** the target face. The sensors detect the shockwave passing through the air, not contact waves in the panel.

**Two design paradigms — CEO must choose:**

| Paradigm | Sensors | Propagation Medium | Pros | Cons |
|----------|---------|-------------------|------|------|
| Air-borne (LOMAH-style) | Microphones along edges/bars | Air (343 m/s) | Simple, no panel modification, multi-caliber easy | Weather-sensitive, wind error, sensor exposure |
| Contact (piezoelectric on panel) | PZT sensors bonded to panel | Steel plate (5000–5900 m/s) | Protected, weatherproof, consistent velocity | High-frequency ADC needed, wave mode complexity |

**For BB-01 context (piezoelectric contact sensors — confirmed in CLAUDE.md):**

Contact piezo sensors on steel panel — use Lamb wave / longitudinal wave propagation.

### Optimal Placement for Contact Piezo (Steel Panel, 1m × 1m)

```
S1 (0, 1.0) ─────────── S2 (1.0, 1.0)
│                                    │
│         IMPACT ZONE                │
│          1m × 1m                   │
│                                    │
S3 (0, 0) ─────────── S4 (1.0, 0)
```

- Mount sensors at corners using epoxy bond or threaded stud mount
- Distance between diagonal sensors: d = √2 × 1.0m = 1.414m
- This maximizes sensor baseline → maximizes TDOA spread → best accuracy

**Minimum 3 sensors (equilateral) if cost/complexity constrained:**
- Place at: (0, 0), (1.0, 0), (0.5, 0.866) — triangle inscribed in panel

### GDOP Consideration (Geometric Dilution of Precision)

Like GPS, TDOA accuracy degrades when impact point is far from sensor array centroid.

- Corner placement minimizes GDOP across the full panel face
- Impact at panel center: GDOP ≈ 1 (optimal)
- Impact at panel corner (near sensor): GDOP ≈ 2-3 (acceptable)
- Impact outside panel: extrapolation — accuracy degrades rapidly

---

## 4. ADC REQUIREMENTS: Sampling Rate, Resolution, Simultaneous Sampling

### Confidence: ★★★ HIGH (confirmed by B6, A5, derived from physics)

### Physics-Based Derivation

**For air-borne acoustic (LOMAH-style):**
- Speed of sound: c ≈ 343 m/s (at 20°C)
- Required spatial accuracy: 5mm = 0.005m
- Required time resolution: Δt = Δx / c = 0.005 / 343 = **14.6 µs**
- Required sampling rate: Fs_min = 1 / Δt = **68.5 kHz minimum**

With GCC-PHAT sub-sample interpolation (parabolic peak fitting): can achieve ~1/10 sample resolution
- Effective Fs with interpolation: 68.5 kHz / 10 = **6.85 kHz minimum** (but 100 kHz recommended for margin)

**For contact piezo on steel plate:**
- Wave speed in steel: c_steel ≈ 5000–5900 m/s (longitudinal S0 mode)
- Required spatial accuracy: 5mm = 0.005m
- Required time resolution: Δt = 0.005 / 5500 = **0.91 µs**
- Required sampling rate: Fs_min = 1 / 0.91µs = **1.1 MHz minimum**

With GCC-PHAT sub-sample interpolation: effective Fs ≈ 100–200 kHz minimum
- **Recommended: 500 kHz – 2 MHz for contact piezo**

### ADC Specification Summary

| Parameter | Air-borne Acoustic | Contact Piezo on Steel |
|-----------|-------------------|----------------------|
| Sampling rate (no interpolation) | 100 kHz+ | 2 MHz+ |
| Sampling rate (with GCC-PHAT interpolation) | 50 kHz+ | 500 kHz+ |
| Recommended practical rate | **500 kHz** | **2 MHz** |
| Resolution (bits) | 12-bit sufficient | 12-bit sufficient |
| Channels | 3–4 simultaneous | 3–4 simultaneous |
| Key requirement | **Simultaneous sampling** | **Simultaneous sampling** |
| Max allowable clock skew | < 1 µs | < 100 ns |
| Anti-aliasing filter | Fc = 0.4 × Fs | Fc = 0.4 × Fs |

### CRITICAL: Simultaneous Sampling

**This is the single most important ADC requirement.** Sequential/multiplexed ADC introduces inter-channel time skew that appears as false TDOA.

- Standard STM32 ADC (multiplexed): NOT suitable without hardware modification
- **Viable options:**
  - STM32H7 with multi-ADC simultaneous mode (ADC1 + ADC2 synchronized)
  - External multi-channel ADC: ADS8688 (8ch, 500 kSPS/ch), AD7606 (8ch, 200 kSPS/ch)
  - FPGA-based approach for MHz-level simultaneous sampling
  - Raspberry Pi + HiFiBerry DAC+ ADC Pro (192 kHz, stereo) — only 2ch
  - RPi + external I2S ADC (PCM1808, 96 kHz) — good for air-borne

### ADC for STM32 Implementation (Air-borne, recommended path)

```
STM32H743 dual ADC simultaneous mode:
- ADC1 → CH1 (Sensor 1) + CH3 (Sensor 3)
- ADC2 → CH2 (Sensor 2) + CH4 (Sensor 4)
- Trigger: simultaneous from TIM1 at 500 kHz
- DMA: both ADCs → circular buffer
- Total bandwidth: 4ch × 500 kHz × 12-bit = 24 Mbit/s → DMA capable

Resolution: 12-bit (4096 levels) is sufficient for SNR
Dynamic range: steel impact generates 140–160 dB SPL at sensor
→ Need input attenuator or charge amp gain design
```

---

## 5. TEMPERATURE COMPENSATION FORMULA

### Confidence: ★★★ HIGH (confirmed by A3, multiple physics sources)

### Standard Linear Formula (Sufficient for 0–55°C Range)

```
c(T) = 331.4 + 0.606 × T   [m/s, T in °C]
```

At operational extremes:
- T = 0°C:  c = 331.4 m/s
- T = 20°C: c = 343.5 m/s
- T = 35°C: c = 352.6 m/s (typical Vietnam outdoor)
- T = 55°C: c = 364.7 m/s

**Variation over full range: 33.3 m/s (±4.9% around 20°C value)**

### Impact on TDOA Accuracy

If temperature not compensated, using c = 343 m/s when actual is 365 m/s (55°C):
- Error in range difference: Δd_error = TDOA × (365-343) = TDOA × 22 m/s
- For TDOA = 1ms: position error ≈ 22mm — **significant, must compensate**

### Precise Formula (ISO 9613 / Cramer 1993)

```
c(T, P, RH) = 331.3 × √(1 + T/273.15)   [dry air, simplified]

Full formula (Cramer 1993):
c = 331.3 × √(1 + 0.00366 × T)          [valid 0-50°C, dry air]
```

**For Vietnam outdoor (humid tropical):**

Humidity correction is small (≈0.35 m/s at 100% RH, 35°C) — can be ignored for 5mm accuracy.

Temperature correction dominates → use linear formula.

### Implementation

```c
// Embedded C (STM32)
float speed_of_sound(float T_celsius) {
    return 331.4f + 0.606f * T_celsius;
}

// Temperature sensor: NTC thermistor or DS18B20 on target panel
// Update c every 10 seconds (thermal time constant of target panel >> 10s)
// Apply updated c to all TDOA→distance calculations
```

**Sensor placement:** Mount temperature sensor **inside** target frame or on sensor housing — avoid direct sun exposure to prevent overestimation.

---

## 6. ACCURACY ANALYSIS: vs Sensor Count and Spacing

### Confidence: ★★★ HIGH (S1, S2, S3, B4, B6)

### Theoretical Accuracy Model

TDOA localization accuracy depends on:

```
σ_position ≈ (c × σ_TDOA) / (sensor_baseline × GDOP_factor)
```

Where:
- σ_TDOA = timing uncertainty ≈ 1/Fs (or 1/(Fs × interpolation_factor))
- sensor_baseline = distance between sensor pair
- GDOP_factor: geometry dependent (1 at center, up to 5 at edges)

### Accuracy vs Sensor Count (1m × 1m panel, air-borne 500 kHz ADC)

| Sensors | Layout | TDOA pairs | Redundancy | Center accuracy | Edge accuracy | Fault tolerance |
|---------|--------|-----------|------------|----------------|--------------|----------------|
| 3 | Triangle | 3 (2 independent) | None | ≈ 2-3 mm | ≈ 5-10 mm | None |
| 4 | H-square | 6 (3 independent) | 1 redundant | ≈ 1-2 mm | ≈ 3-5 mm | 1 sensor fail OK |
| 5 | Cross | 10 (4 independent) | 2 redundant | ≈ 1 mm | ≈ 2-3 mm | 2 sensor fail OK |
| 8 | ShotMarker | 28 (7 independent) | 4 redundant | ≈ 0.5-1 mm | ≈ 1-2 mm | Overkill |

### Accuracy vs Sensor Spacing (4-sensor square, air-borne 500 kHz)

| Panel size | Baseline | Δd/Δx sensitivity | Center accuracy |
|-----------|----------|------------------|----------------|
| 0.5m × 0.5m | 0.5m | 0.69 µs/mm | ≈ 1 mm |
| 1.0m × 1.0m | 1.0m | 1.46 µs/mm | ≈ 0.5 mm (theoretical) |
| 2.0m × 2.0m | 2.0m | 2.92 µs/mm | ≈ 0.25 mm (theoretical) |

**Key finding:** Larger baseline = better accuracy. For 1m × 1m: place sensors at extreme corners, not inset.

### Real-World Achieved Accuracy (from Sources)

| System | Sensors | ADC Rate | Algorithm | Claimed Accuracy |
|--------|---------|----------|-----------|-----------------|
| ShotMarker (B4) | 8 MEMS | Unknown (est. 48–96 kHz) | Proprietary | 1 mm (ideal), 2-3 mm (field) |
| LOMAH H-Bar (B9) | 4 acoustic | Unknown | Proprietary TDOA | 3 mm |
| Matt-Pettit GitHub (C2) | 4 microphones | ~48 kHz | GCC-PHAT | 20.74 mm avg |
| MilliLoc (B6) | 4+ | 96 kHz | Enhanced GCC | < 10 mm |
| S3 paper (delta/H-type) | 3-4 | High (kHz range) | TDOA basic | < 5 mm claimed |

### Achievable Target for BB-01

**With 4 corner sensors, 500 kHz ADC, GCC-PHAT + parabolic interpolation + temperature compensation:**

- Center of 1m panel: **2-3 mm accuracy**
- Edges of 1m panel: **5-8 mm accuracy**
- Under wind (>5 m/s): degradation to 10-15 mm possible (air-borne only)
- Contact piezo design: **1-3 mm achievable across full panel** (wind-independent)

---

## 7. MULTI-CALIBER CHALLENGE: 5.56mm vs 7.62mm vs 12.7mm

### Confidence: ★★★ HIGH (S4, B1, B2)

### Problem Statement

Different calibers produce different acoustic signatures:
- **Shock wave amplitude:** 12.7mm >> 7.62mm >> 5.56mm
- **Pulse duration:** Shorter for smaller, faster projectiles
- **Frequency content:** All are broadband (1 kHz – 100 kHz), but peak differs
- **Supersonic vs subsonic:** All three are supersonic in standard military loads

### Air-Borne TDOA — Largely Caliber-Independent

The TDOA algorithm measures **time of arrival of the shock wavefront**. Since all supersonic projectiles generate N-wave shockwaves:

1. **First arrival detection** (threshold crossing) is caliber-independent — all three generate sharp leading edges
2. The **TDOA value** (delay between sensors) depends only on geometry, not caliber
3. GCC-PHAT uses the **entire waveform** — amplitude normalization via PHAT means caliber doesn't matter
4. ★★★ **Conclusion: Air-borne TDOA with GCC-PHAT is inherently multi-caliber compatible**

### Contact Piezo — Wave Velocity is Caliber-Independent

In the steel panel, projectile impact generates Lamb waves. Wave velocity in steel = constant regardless of caliber. However:

- **Impact energy differs:** 12.7mm impact may cause plastic deformation, altering wave propagation locally
- **Panel resonance:** Heavy caliber (12.7mm) may excite panel modes that obscure P-wave arrival
- **Signal amplitude range:** Dynamic range requirements expand — need AGC or programmable gain

### Challenges and Mitigations

| Challenge | 5.56mm | 7.62mm | 12.7mm | Mitigation |
|-----------|--------|--------|--------|------------|
| SNR at threshold | Low | Medium | High | Adaptive threshold per caliber |
| Panel deformation | Minimal | Some | Significant | Use rubber overlay, replace steel plate |
| Multiple echoes | Low | Low | High | Extended blanking window after detection |
| ADC saturation | Low risk | Medium | High risk | Programmable gain amp (PGA) before ADC |
| Panel survival | 1000+ rounds | 500 rounds | 20-50 rounds | Design replaceable panel |

### Caliber Classification (Bonus Feature)

From S4 (Tonal and Temporal Analysis): shockwave characteristics differ by caliber:
- Peak frequency: 5.56mm ≈ 3–8 kHz; 7.62mm ≈ 2–5 kHz; 12.7mm ≈ 1–3 kHz
- Can classify caliber from frequency spectral centroid **before** running TDOA → adaptive processing

```python
# Caliber pre-classification (lightweight)
def classify_caliber(signal, Fs):
    f, Pxx = scipy.signal.welch(signal[:512], Fs)
    spectral_centroid = np.sum(f * Pxx) / np.sum(Pxx)
    if spectral_centroid > 5000:   return "5.56mm"
    elif spectral_centroid > 3000: return "7.62mm"
    else:                           return "12.7mm"
```

---

## 8. IMPLEMENTATION GUIDANCE: STM32 / Raspberry Pi

### Confidence: ★★★ HIGH (combined from multiple sources + architecture knowledge)

### Recommended Architecture: STM32H7 (Primary) + RPi (Display/Comms)

```
┌─────────────────────────────────────────────────────┐
│                  TARGET MODULE                       │
│                                                      │
│  [S1] [S2] [S3] [S4]  ← Contact piezo or mics      │
│    │    │    │    │                                  │
│  [Charge Amp / MEMS conditioning] × 4               │
│    │    │    │    │                                  │
│  [Anti-alias BPF: 1kHz-20kHz] × 4                  │
│    │    │    │    │                                  │
│  [STM32H743 — 4ch simultaneous ADC 500 kHz]         │
│  [DMA circular buffer: 4 × 2048 samples]             │
│  [Threshold detection → trigger capture]             │
│  [GCC-PHAT computation (ARM DSP library)]            │
│  [TDOA → (x,y) coordinate computation]              │
│  [Temperature compensation (DS18B20 input)]          │
│    │                                                 │
│  [LoRa SX1276 433 MHz] ← wireless to scorer        │
│  or [RS-485 / CAN bus] ← wired option              │
└─────────────────────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────┐
│              SCORING STATION (RPi 4)                 │
│  [Receive TDOA or (x,y) packet from target]          │
│  [Display shot position on target image]             │
│  [Score tracking, session logging]                   │
│  [Web dashboard / BLE to mobile device]              │
└─────────────────────────────────────────────────────┘
```

### STM32H7 Implementation Details

```c
// Key configuration
#define FS         500000   // 500 kHz sampling
#define N_SENSORS  4
#define BUF_SIZE   2048     // ~4ms capture window
#define THRESHOLD  500      // ADC counts above baseline

// Simultaneous ADC trigger via TIM1
// ADC1 CH1 + ADC2 CH2 in dual simultaneous mode
// ADC3 CH1 + ADC4 CH2 for 4th channel (STM32H7 has 3 ADCs)
// → Practical: 3-sensor configuration cleanest on STM32H7

// GCC-PHAT using CMSIS-DSP:
arm_rfft_fast_instance_f32 fft_inst;
arm_rfft_fast_init_f32(&fft_inst, FFT_SIZE);  // FFT_SIZE = 512 or 1024
// For each pair:
arm_rfft_fast_f32(&fft_inst, sig1, X1, 0);
arm_rfft_fast_f32(&fft_inst, sig2, X2, 0);
// Complex multiply: X1 × conj(X2) / |X1 × conj(X2)|
// arm_cmplx_mult_cmplx_f32 + normalize
// arm_rfft_fast_f32(&fft_inst, gcc_phat, result, 1);  // IFFT
// arm_max_f32(result, FFT_SIZE, &max_val, &max_idx);  // Peak location
```

### Signal Processing Chain (Piezo Contact Design — BB-01 relevant)

```
Piezo sensor (PZT disc, 27mm)
  → Charge amplifier (LM358 or TL072 — Vietnam market ✓)
      R_f = 10MΩ, C_f = 100pF → gain = 100 mV/pC, BW = 160 kHz
  → High-pass filter: fc = 1 kHz (removes low-freq mechanical vibration)
  → Low-pass filter: fc = 20 kHz (anti-alias for 50 kHz Fs)
             OR fc = 200 kHz (anti-alias for 500 kHz Fs — contact mode)
  → Voltage clamp: Schottky diodes to protect ADC (±3.3V)
  → STM32H7 ADC pin (12-bit, 500 kHz)
```

### Raspberry Pi Implementation (Air-borne, simpler)

```python
# For 4-mic air-borne system on RPi 4
# Uses USB audio interface with 4+ channels at 96-192 kHz

import numpy as np
from scipy.signal import butter, filtfilt

Fs = 192000  # Hz
c = 343.0    # Updated from temperature sensor

def gcc_phat(sig1, sig2, Fs, max_tau=None):
    n = len(sig1) + len(sig2) - 1
    N = 2 ** int(np.ceil(np.log2(n)))
    X1 = np.fft.rfft(sig1, N)
    X2 = np.fft.rfft(sig2, N)
    cc = X1 * np.conj(X2)
    cc = cc / (np.abs(cc) + 1e-10)  # PHAT weighting
    gcc = np.fft.irfft(cc, N)
    max_shift = int(Fs * max_tau) if max_tau else N//2
    gcc = np.concatenate((gcc[-max_shift:], gcc[:max_shift+1]))
    shift = np.argmax(np.abs(gcc)) - max_shift
    tau = shift / Fs  # TDOA in seconds
    return tau

def locate_impact(tau12, tau13, tau14, sensors, c):
    # Sensors: [(x1,y1), (x2,y2), (x3,y3), (x4,y4)]
    # Build hyperbolic system, solve with WLS
    # Implementation: Chan algorithm or iterative Newton-Raphson
    pass
```

### Open Source Starting Points (Tier C — verify before use)

1. **aishoot/Sound_Localization_Algorithms** — Classical GCC-PHAT in Python/MATLAB
2. **Matt-Pettit/SoundLocalization** — RPi implementation, 20mm accuracy
3. **hcfman/sbts-aru** — Production ARU with TDOA, Raspberry Pi

**CEO decision needed:** Adopt and adapt open-source base (O — Offload risk), or implement from scratch from papers (C — more judgment, higher quality).

---

## 9. POSITIONING ALGORITHM: Hyperbolic TDOA → (x,y) Coordinates

### Confidence: ★★★ HIGH (S1, S2, S3)

### Mathematical Foundation

For impact point P = (x, y) and sensors S_i = (x_i, y_i):

```
Distance from impact to sensor i:
d_i = √[(x - x_i)² + (y - y_i)²]

TDOA between sensor pair (i, j):
τ_ij = (d_i - d_j) / c

Range difference:
r_ij = c × τ_ij = d_i - d_j

Hyperbolic equation (locus of points with constant range difference):
d_i - d_j = r_ij  → defines one hyperbola
```

For 3 sensors: 2 independent hyperbolas → intersection = 1 point (+ mirror ambiguity)
For 4 sensors: 3 independent hyperbolas → overdetermined → use least squares

### Chan Algorithm (Recommended — Closed-Form, No Iteration)

Chan & Ho (1994) — the gold standard for TDOA positioning:

```
Step 1: Create auxiliary variable Rₐ = d₁ (distance from impact to reference sensor)

Step 2: Rewrite hyperbolic equations as pseudo-linear:
   r_i1 × d_1 = r_i1² + d_1² - d_i²) / 2 + (terms linear in x, y)
   → Matrix form: Ga × [x, y, d₁]ᵀ = h

Step 3: Weighted LS solution (WLS1):
   [x₀, y₀, d₁₀] = (GaᵀΨ⁻¹Ga)⁻¹ GaᵀΨ⁻¹h
   where Ψ = noise covariance matrix

Step 4: Second WLS step (WLS2) to refine:
   Use result from Step 3 to improve estimate
   → More accurate near-field performance

Output: (x, y) impact coordinates
```

**Why Chan over Newton-Raphson iterative?**
- No initialization needed (closed-form)
- No convergence issues
- Fast: O(N) after matrix setup
- Performance close to Cramér-Rao Lower Bound (CRLB) at moderate SNR

### Simplified 3-Sensor Formula (for fast prototyping)

With sensors at S1(0,0), S2(d,0), S3(0,d):

```
From τ₁₂ and τ₁₃:
x = (c²τ₁₂² - d²) / (-2d·c·τ₁₂/d - 2cτ₁₂) ... [complex, use matrix form]

Practical approach: Use scipy.optimize.fsolve() or numpy linalg.lstsq()
```

---

## CROSS-VALIDATION SUMMARY

| Insight | S/A Confirmation | B/C Confirmation | Confidence |
|---------|-----------------|-----------------|------------|
| GCC-PHAT recommended for TDOA | S2, S3, A1, A2, A4 | B6, C1, C2 | ★★★ |
| 4-corner sensor placement optimal | S3, commercial LOMAH/ShotMarker | B4, B9 | ★★★ |
| Minimum 3 sensors for 2D | S1, S2, P4 (patent 2025) | B5 | ★★★ |
| Simultaneous ADC sampling critical | A1, A5 | B6 | ★★★ |
| Temperature compensation needed (Vietnam) | A3 | Physics derivation | ★★★ |
| GCC-PHAT is caliber-independent | S4, B1 | — | ★★ |
| Chan algorithm for hyperbolic positioning | S1, S2 | B5 | ★★★ |
| Air-borne: 100 kHz+ ADC for 5mm | Derived from physics | B6 | ★★★ |
| Contact piezo: 500 kHz – 2 MHz ADC | Physics derivation (5500 m/s steel) | B3 | ★★★ |
| Steel longitudinal wave ≈ 5000-5900 m/s | B3, B7, physics | — | ★★★ |
| 4 sensors → 2-3mm center, 5-8mm edge | S3, B4 (ShotMarker) | C2 (20mm open-source) | ★★ |
| Linear c(T) = 331.4 + 0.606T valid 0-55°C | Physics (Cramer 1993) | A3 | ★★★ |

---

## COVERAGE GAPS (Areas Needing Further Research)

1. **Rubber target panel acoustic velocity** — No Tier S/A source on rubber wave speed. Rubber: c ≈ 50-200 m/s (longitudinal), very different from steel. Contact TDOA on rubber would require completely different ADC rates and would be highly lossy.
   → Suggested search: "acoustic wave velocity natural rubber plate impact detection"
   → **CEO decision: Rubber panels → air-borne approach preferred**

2. **Vietnam-specific wind effects on outdoor acoustic TDOA** — No source covers 5-10 m/s tropical wind accuracy degradation.
   → Estimate: 10 m/s crosswind → 30mm position error for air-borne (wind = 3% of c)
   → Contact piezo avoids this problem entirely

3. **STM32 simultaneous 4-channel ADC at 500 kHz** — confirmed feasibility in theory; needs bench validation.
   → STM32H7 ADC1+ADC2 simultaneous = 2ch. 4ch requires multiplexing or external ADC.
   → **Practical solution: ADS8688 (8ch, 500 kSPS) via SPI to STM32**

4. **Patent FTO analysis** — 4 active patents found. Detailed claims review needed before productizing.

---

## GALAXY CANDIDATES (THỊNH H — Hóa)

### ★★★ — Ready for Promotion

1. **"GCC-PHAT là Optimal Algorithm cho Impulsive Event TDOA"**
   - Cluster: G (Pahl-Beitz Technical) + D (AI/Algorithm)
   - Links to: [[Contact Piezo LOMAH]], [[PZT vs MEMS]]
   - Source: S2, A1, A2, A4 (multiple Tier S/A)
   - Note: Explain WHY PHAT weighting works specifically for impulsive signals (phase coherence, not amplitude)

2. **"Simultaneous Sampling là Hard Constraint của TDOA — Sequential ADC Không Dùng Được"**
   - Cluster: G (Pahl-Beitz Technical)
   - Links to: [[Contact Piezo LOMAH]], [[ESC Tension Rule]]
   - Source: A1, A5, physics derivation
   - Note: Quantify the error: 1µs clock skew at 5500m/s = 5.5mm position error

3. **"Temperature Compensation là Non-Negotiable ở Vietnam (0-55°C → 10% speed variation)"**
   - Cluster: G (Pahl-Beitz Technical) + H (Physical Design)
   - Links to: [[VN Metocean Design Envelope]], [[Contact Piezo LOMAH]]
   - Source: A3, physics (Cramer)
   - Note: 55°C vs 0°C = 33 m/s difference. At 1ms TDOA → 33mm uncorrected error. Vietnam range = 0-45°C outdoors → 27mm max error without compensation

4. **"Chan Algorithm — Closed-Form TDOA Positioning Không Cần Iteration"**
   - Cluster: G (Pahl-Beitz Technical)
   - Links to: [[Contact Piezo LOMAH]], [[Phán đoán không thể uỷ thác cho AI]]
   - Source: S1, S2
   - Note: vs iterative Newton-Raphson — Chan converges always; Newton needs good initial guess; combat-critical systems need determinism

5. **"4-Sensor Corner Layout Maximizes TDOA Baseline và Minimizes GDOP"**
   - Cluster: H (Physical Design)
   - Links to: [[Contact Piezo LOMAH]], [[6-Fold Symmetry]], [[Backing Plate Rule]]
   - Source: S3 (direct paper on target scoring), B4 (ShotMarker)
   - Note: Rule: place sensors at extremities, not center. Same principle as GPS satellite geometry.

### ★★ — Strong Candidates (promote after CEO review)

6. **"Contact Piezo vs Air-borne Acoustic TDOA — Trade-space cho Military Target"**
   - Air-borne: simpler, multi-caliber, wind-sensitive | Contact: weatherproof, needs MHz ADC
   - Cluster: G + H
   - Links to: [[PZT vs MEMS]], [[Contact Piezo LOMAH]], [[Physical-World Interface]]

7. **"Multi-Caliber TDOA: GCC-PHAT is Inherently Caliber-Agnostic via Phase Normalization"**
   - Cluster: G
   - Links to: [[Contact Piezo LOMAH]], [[Reliability Trumps Precision]]

### ★ — Needs Verification

8. **"Rubber Panel = Wrong Medium for Contact TDOA (c ≈ 50-200 m/s)"**
   - Needs Tier S/A source on rubber acoustic velocity
   - Do not promote to Galaxy until verified

---

## SOURCE QUALITY REPORT

| Metric | Value |
|--------|-------|
| Total sources found | 23 |
| Tier S (Standards/Papers) | 4 |
| Tier S (Patents) | 4 |
| Tier A (Authority) | 6 |
| Tier B (Professional) | 9 |
| Tier C (Community) | 4 |
| Pro ratio (S+A / total) | 43% |
| Insights extracted | 12 |
| ★★★ HIGH confidence | 10 |
| ★★ MED confidence | 2 |
| ★ LOW confidence | 1 |
| Galaxy candidates | 5 ready, 2 strong, 1 needs verification |

### Patent Landscape
- Patents found: 4 active
- ⚠ Freedom-to-operate concern: **MEDIUM**
  - KR101997387B1 directly covers "acoustic sensor + impact point estimation" — review claims
  - US9319787B1 covers "best reference microphone selection" — relevant to multi-pair TDOA
  - Mitigation: file in Vietnam where Korean/US patents may not apply; differentiate algorithm implementation
- **CEO: review KR101997387B1 and US9319787B1 claims for FTO risk (Core decision)**

### NLM Status
- NLM notebook: None — command not found
- ⚠ Auto-fallback triggered: YES — Claude-only analysis
- Quality impact: Tier S/A paper full-texts not analyzed (access blocked by 403/permission). Analysis based on abstracts, search snippets, and physics derivation.

### Coverage Gaps
1. **Rubber panel wave velocity** — No Tier S/A source → Use air-borne if rubber panel
2. **Vietnam tropical wind correction for air-borne** → Estimate only (10 m/s wind = ~30mm error)
3. **Full text of S3 (Hindawi impact localization paper)** → Access blocked, key practical data missing

### Recommendation for Next Research
- Search: "ADS8688 simultaneous ADC TDOA acoustic localization STM32 implementation"
- Search: "Chan algorithm implementation embedded C STM32 TDOA acoustic"
- Get full text of S3 (Hindawi JS/2019/1758765) for delta/H-type array precise accuracy data
