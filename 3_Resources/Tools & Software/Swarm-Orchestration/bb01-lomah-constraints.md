# BB-01 LOMAH System Constraints & Integration Requirements

**Task:** task-003
**Worker:** worker-01 (researcher)
**Date:** 2026-02-06
**Status:** Complete

---

## 0. Methodology Note

BB-01 is a development-stage system. Where BB-01-specific data is not available, constraints are derived from **comparable LOMAH systems** and marked with the source:

- **[Steinert]** — Steinert Sensing Systems TrueZeroTarget (Norway) — most detailed public datasheet
- **[Oakwood]** — Oakwood Controls H-Bar LOMAH (USA/UK)
- **[BEL]** — Bharat Electronics Limited ETS-LOMAH (India)
- **[Zen]** — Zen Technologies Smart Electronic Target (India)
- **[Theissen]** — Theissen Training Systems LOMAH (Germany)
- **[Lit.]** — Published academic/technical literature

---

## 1. Acoustic Environment

### 1.1 Expected SPL at Sensor from Supersonic Projectiles

| Caliber | Typical Muzzle Velocity | Estimated Peak SPL at Sensor (miss distance ~0.3 m) | Source |
|---------|------------------------|------------------------------------------------------|--------|
| 5.56×45 mm NATO | 940 m/s (M855) | **148–151 dB(C)** | [Lit.] SA80 study, Southampton Univ. ([eprints.soton.ac.uk](https://eprints.soton.ac.uk/390601/1/SA80manuscript_3.pdf)) |
| 7.62×51 mm NATO | 850 m/s (M80) | **153–158 dB(C)** (est.) | [Lit.] Higher than 5.56 by ~5 dB per Southampton study |
| 12.7×99 mm (.50 BMG) | 890 m/s | **160–170 dB** (est.) | [Lit.] Extrapolation; N-wave amplitude scales with projectile diameter |
| 20–40 mm cannon | 800–1,000 m/s | **165–175 dB** (est.) | [Lit.] Large-caliber extrapolation |

**Key physics:**
- N-wave overpressure decays as **r^(−3/4)** with perpendicular miss distance r ([hal.science](https://hal.science/hal-01852518/document))
- At miss distances typical for LOMAH (sensor 0.1–0.5 m from bullet path), SPL ranges from **140–170 dB** depending on caliber and proximity
- The 140 dB requirement corresponds to the **lower bound** for small-caliber (.22 / 5.56 mm) at moderate miss distance (~0.5 m)

**N-wave frequency content:**
- Primary energy: **3–7 kHz** ([Maher, IEEE DSP 2006](https://www.montana.edu/rmaher/publications/maher_ieeedsp_0906_257-261.pdf))
- Shock front rise time: sub-microsecond → significant spectral energy **well above 20 kHz** ([IEEE Xplore](https://ieeexplore.ieee.org/document/1161921/))
- Theoretical spectrum extends to >1 MHz, but practical energy above 100 kHz is low
- **Design bandwidth recommendation: ≥20 kHz minimum, ≥50 kHz preferred for ±5 mm TDOA accuracy**

### 1.2 Background Noise Profile

| Source | Level | Notes |
|--------|-------|-------|
| Quiet outdoor range (no firing) | 40–50 dBA | Rural/open terrain, light wind |
| Wind noise at microphone (10–15 km/h) | 50–65 dBA | Depends on windscreen design |
| Adjacent lane firing (50 m lateral) | 120–140 dB peak | Muzzle blast + reflected shockwave |
| Range PA system / vehicles | 60–80 dBA | Intermittent |

**Design implication:** Sensor must discriminate supersonic N-wave (140+ dB, 3–7 kHz, <1 ms duration) from background noise. Threshold-crossing detection on the shock front is the primary algorithm — high SNR improves timing reliability.

---

## 2. Environmental Conditions

### 2.1 Temperature

| Parameter | Value | Source |
|-----------|-------|--------|
| **Vietnam ambient range** | 5 °C (highland winter) to 44.2 °C (record, Nghe An 2023) | [Wikipedia — Climate of Vietnam](https://en.wikipedia.org/wiki/Climate_of_Vietnam) |
| **Typical operational range** | 10 °C to 42 °C | [Lit.] Vietnam military training typically Apr–Nov |
| **Target frame solar heat soak** | Up to **60–70 °C** on exposed aluminum/steel in direct tropical sun | Engineering estimate; black steel in 40 °C ambient + solar gain |
| **Cold storage / transport** | Down to **0 °C** (northern highlands) | — |
| **Comparable system spec** | **−30 °C to +70 °C** | **[Steinert]** TrueZeroTarget operating range |
| **BB-01 design target** | **−10 °C to +70 °C** (recommended minimum) | Derived: covers Vietnam operational + solar heat soak + margin |

### 2.2 Humidity & Moisture

| Parameter | Value | Source |
|-----------|-------|--------|
| Average relative humidity | **84%** year-round | [Vietnam climate data](https://www.climatestotravel.com/climate/vietnam) |
| Wet season peak | Approaches **100% RH** | [Lit.] Southeast Asian monsoon |
| Rain exposure | Tropical downpours, 1,500–3,000 mm/year | [Climate of Vietnam] |
| **IP rating requirement** | **IP66 minimum** (dust-tight, protected against powerful water jets) | **[Steinert]** TrueZeroTarget is IP66 |

### 2.3 Vibration & Mechanical Shock

| Parameter | Value | Source |
|-----------|-------|--------|
| Bullet impact on target frame | **High-intensity impulse shock** — varies by caliber and hit location | — |
| Repeated mechanical stress | Thousands of impacts per training day; sensor must survive without drift | — |
| Transport vibration | Military truck transport over unpaved roads | — |
| **Design implication** | Sensor must be vibration-compensated or inherently insensitive to mechanical shock. Endevco 2510's vibration compensation is relevant. MEMS sensors are inherently low-mass and shock-tolerant. |

---

## 3. Physical Integration

### 3.1 Sensor Array Geometry

| Parameter | Value | Source |
|-----------|-------|--------|
| **Sensors per target** | **4–6** (typical: 2 × delta array of 3–4 sensors each) | **[Oakwood]** two delta arrays, 4 sensors each; **[Steinert]** configurable |
| **Sensor spacing** | **600 mm** (standard); scalable | **[Steinert]** 60 cm standard spacing |
| **Detection window** | **600 × 600 mm** (standard); scalable to **4,000 × 30,000 mm** | **[Steinert]** |
| **Sensor mounting location** | Below or behind target face, inside ballistic protection channel | **[Oakwood]**, **[Theissen]** |
| **Mounting method** | On aluminum sensor bar (H-bar or flat bar profile) | **[Oakwood]** H-Bar LOMAH |

### 3.2 Available Volume per Sensor

| Parameter | Value | Source |
|-----------|-------|--------|
| Sensor bar cross-section | ~40 × 40 mm to 120 × 106 mm (full housing) | **[Steinert]** housing: 700 × 120 × 106 mm for 600 mm model |
| Per-sensor volume budget | ~**30 × 30 × 30 mm** (measurement mic with mount) or **PCB-mounted** (MEMS) | Engineering estimate based on sensor bar dimensions and 4–6 sensor count |
| Cable routing | Inside sensor bar / aluminum channel; max run **0.5–1.0 m** sensor-to-electronics | Typical LOMAH construction |

### 3.3 System-Level Dimensions & Weight

| Parameter | Value | Source |
|-----------|-------|--------|
| Full target unit dimensions | **700 × 120 × 106 mm** (Steinert 600 mm model) | **[Steinert]** |
| Full target unit weight | **4.0 kg** (including housing, sensors, electronics, battery) | **[Steinert]** |
| Sensor weight budget (per sensor) | **< 20 g** recommended (4–6 sensors × 20 g = 80–120 g sensor budget) | Derived from total weight budget |

---

## 4. Electrical Integration

### 4.1 Power Supply

| Parameter | Value | Source |
|-----------|-------|--------|
| **Primary power** | **12 V DC** (battery or wired) | **[Oakwood]** 12V cabling; **[BEL]** 230V AC or DC battery |
| **Battery type** | LiFePO4 3.2V 12,000 mAh (built-in) | **[Steinert]** |
| **Battery life** | Up to **16 hours** continuous operation | **[Steinert]** |
| **Sensor supply voltage** | **3.3 V** or **5.0 V** derived from 12V rail (DC-DC converter) | Standard embedded practice |
| **Current budget per sensor** | **< 5 mA** preferred for battery-powered operation (4–6 sensors = 20–30 mA total) | Derived from 16h battery life constraint |
| **Design implication** | ICP/CCP sensors requiring 18–30 V at 2–20 mA are feasible from 12V rail with boost converter, but add power supply complexity. MEMS sensors at 1.6–3.6V / <1 mA are direct-compatible. |

### 4.2 ADC & Signal Conditioning

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| **Sample rate (minimum)** | **200 kHz** per channel | For ±5 mm accuracy: Δt = 5 mm / 346 m/s = **14.5 µs**. At 200 kHz (5 µs/sample), sub-sample interpolation achieves ~1 µs effective resolution → **±0.35 mm** theoretical precision |
| **Sample rate (recommended)** | **500 kHz – 1 MHz** per channel | Direct sampling without interpolation; captures shock front rise time for clean threshold crossing |
| **ADC resolution** | **12-bit minimum**; 16-bit preferred | 12-bit at 3.3V = 0.8 mV/LSB. With −43 dBV mic sensitivity (7.1 mV/Pa), 140 dB SPL = ~1.4 V peak → good quantization. 16-bit provides margin for dynamic range. |
| **Simultaneous sampling** | **Required** — all channels must sample at the same instant | TDOA demands <1 µs inter-channel skew. Sequential-sampling ADCs introduce unacceptable skew at high sample rates. |
| **Input interface** | Differential analog preferred (noise rejection on 0.5–1.0 m cable runs) | Matches MEMS differential output (VM2020, ICS-40638) directly |
| **Minimum between shots** | **100 ms** (= 600 RPM max fire rate) | **[Steinert]** |

### 4.3 Communication

| Parameter | Value | Source |
|-----------|-------|--------|
| Target-to-control link | **Wi-Fi IEEE 802.11 b/g**, up to 300 m | **[Steinert]** |
| Alternative | Wired Ethernet or RS-485 for fixed installations | **[Theissen]**, **[BEL]** |
| Data per shot | X,Y coordinate + timestamp + confidence → ~50 bytes | — |
| Latency requirement | < 500 ms shot-to-display | Shooter feedback requirement |

---

## 5. Operational Requirements

### 5.1 Caliber Compatibility

| Parameter | Value | Source |
|-----------|-------|--------|
| **Minimum caliber** | **.17 (4.3 mm)** | **[Steinert]** |
| **Maximum caliber** | **84 mm** | **[Steinert]** |
| **Vietnamese military calibers of interest** | 5.56×45 mm (M16/M4), 7.62×39 mm (AK), 7.62×51 mm (M60/M240), 12.7×99 mm (.50 M2) | Vietnamese military inventory |
| **Minimum bullet velocity at target** | **440 m/s (Mach 1.3)** | **[Steinert]**, **[Oakwood]** (1,200 ft/s) |

### 5.2 Accuracy

| Parameter | Value | Source |
|-----------|-------|--------|
| **Accuracy at center** | **±3 mm** | **[Steinert]** |
| **Accuracy at edge** | **±9 mm** (at extreme edge of 600 mm target) | **[Steinert]** |
| **Typical spec** | **±5 mm** throughout scoring area | **[Oakwood]** |

### 5.3 Service Life & Maintenance

| Parameter | Value | Source |
|-----------|-------|--------|
| **Expected service life** | **10+ years** for electronics; sensor replacement as needed | Typical defense training equipment lifecycle |
| **Maintenance interval** | Annual calibration check (acoustic + temperature compensation) | **[Steinert]** BIT diagnostic suggests routine field checks |
| **Built-in diagnostics** | BIT (Built-In-Test): firmware version, supply voltage, error messages, sensor status, hit count | **[Steinert]** |
| **Field replacement** | Sensor modules should be field-replaceable without special tools | Design requirement for military maintainability |
| **Calibration method** | Temperature sensor compensation (continuous); acoustic calibration via known-position shots | **[Steinert]**, **[Oakwood]** both reference temperature sensors |

### 5.4 Rate of Fire

| Parameter | Value | Source |
|-----------|-------|--------|
| **Minimum time between shots** | **100 ms** (600 RPM) | **[Steinert]** |
| **Implication** | Processing pipeline must complete shot detection + TDOA computation + reporting within 100 ms | — |

---

## 6. Derived Design Constraints Summary

| Constraint | Value | Priority | Rationale |
|------------|-------|----------|-----------|
| **Sensor max SPL** | **≥140 dB** (≥160 dB preferred for 12.7 mm) | MUST | BB-01 spec requirement; 5.56 mm at 0.5 m miss distance |
| **Sensor bandwidth** | **≥20 kHz** (≥50 kHz preferred) | SHOULD | TDOA timing precision for ±5 mm accuracy |
| **Operating temp** | **−10 °C to +70 °C** minimum | MUST | Vietnam climate + solar heat soak |
| **IP rating** | **IP66** minimum | MUST | Tropical rain + dust exposure |
| **Sensor supply voltage** | **3.3 V or 5.0 V** from 12V DC rail | SHOULD | Battery-powered target, standard logic levels |
| **Current per sensor** | **< 5 mA** preferred | SHOULD | Battery life (16h target) |
| **ADC sample rate** | **≥200 kHz** per channel (≥500 kHz preferred) | MUST | ±5 mm TDOA accuracy |
| **Simultaneous sampling** | Required (< 1 µs inter-channel skew) | MUST | TDOA validity |
| **Sensors per target** | 4–6 | MUST | Geometric coverage for X,Y localization |
| **Sensor weight** | < 20 g each | SHOULD | Target weight budget |
| **Sensor volume** | < 30 × 30 × 30 mm | SHOULD | Sensor bar integration |
| **Unit cost (production)** | Minimize — 60–80 sensors for 20-target range | HIGH | Programmatic viability |
| **Field replaceability** | Tool-free or simple-tool swap | SHOULD | Military maintainability |
| **Min. bullet velocity** | 440 m/s (Mach 1.3) | MUST | Supersonic shockwave detection threshold |

---

## 7. Sources

- [SA80 Acoustic Study — University of Southampton](https://eprints.soton.ac.uk/390601/1/SA80manuscript_3.pdf)
- [Ballistic Wave from Projectiles — Marchiano et al., HAL](https://hal.science/hal-01852518/document)
- [Acoustic Gunshot Recordings — Maher, IEEE DSP 2006](https://www.montana.edu/rmaher/publications/maher_ieeedsp_0906_257-261.pdf)
- [Survey of Bullet Shock Waves — IEEE Xplore](https://ieeexplore.ieee.org/document/1161921/)
- [Steinert TrueZeroTarget](https://www.steinertsensingsystems.com/product-details/truezerotarget/)
- [Oakwood Controls H-Bar LOMAH](https://www.oakwoodcontrols.com/electronic-target-systems/portable-electronic-target-system/)
- [BEL India ETS-LOMAH](https://bel-india.in/product/electronic-target-system-lomah-system/)
- [Zen Technologies LOMAH](https://www.zentechnologies.com/lomah-smart-electronic-target-system.php)
- [Theissen Training Systems LOMAH](https://theissentraining.com/products/lomah-target-system/)
- [Climate of Vietnam — Wikipedia](https://en.wikipedia.org/wiki/Climate_of_Vietnam)
- [Vietnam Climate — Climates to Travel](https://www.climatestotravel.com/climate/vietnam)
