# Microphone Candidates for BB-01 LOMAH — 140 dB SPL Requirement

**Task:** task-001
**Worker:** worker-01 (researcher)
**Date:** 2026-02-06
**Status:** Complete

---

## 1. Context

The BB-01 LOMAH (Location of Miss and Hit) system detects supersonic bullet passage via acoustic shock wave. Microphones must handle peak SPL ≥140 dB without distortion, while covering the frequency band relevant to supersonic crack detection. Two technology families evaluated: **piezoelectric/ICP measurement microphones** and **MEMS microphones**.

---

## 2. Piezoelectric / ICP Candidates

### PIEZO-1: PCB Piezotronics 377C01

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | PCB Piezotronics (USA) | [pcb.com](https://www.pcb.com/products?m=377c01) |
| Part Number | 377C01 | — |
| Type | 1/4" prepolarized free-field condenser | — |
| Max SPL (3% THD) | **166 dB** re 20 µPa | PCB datasheet |
| Sensitivity | 2.0 mV/Pa (−54 dB re 1 V/Pa) ±3 dB | PCB datasheet |
| Frequency Response | 5.4 Hz – 80 kHz (±2 dB); 3 Hz – 100 kHz (+2/−3 dB) | PCB datasheet |
| Dynamic Range | ~131 dB (noise floor to max SPL) | Derived |
| SNR | N/A (measurement-grade; inherent noise ~35 dBA) | PCB datasheet |
| Power Supply | Prepolarized (0 V); requires external preamplifier (e.g., 426B03) | PCB datasheet |
| Package / Dimensions | 7.0 mm dia × 10.5 mm H (with grid); 6.4 mm dia without | PCB datasheet |
| Weight | 1.8 g (mic capsule only) | PCB datasheet |
| Operating Temp | −40 °C to +120 °C | PCB datasheet |
| Unit Cost (est.) | ~$800–1,500 (mic capsule); ~$2,000–3,000 (with preamp as 378C01 system) | Quote required |
| Lead Time | 4–8 weeks ARO; global distribution | PCB / distributors |

**Notes:** Excellent frequency range (80 kHz) covers supersonic crack spectrum. Very high max SPL (166 dB) gives 26 dB headroom above the 140 dB requirement. Small 1/4" form factor. Requires separate preamplifier which adds cost and bulk.

---

### PIEZO-2: GRAS 46BE

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | GRAS Sound & Vibration (Denmark) | [grasacoustics.com](https://www.grasacoustics.com/products/product/143-46BE) |
| Part Number | 46BE | — |
| Type | 1/4" CCP free-field standard microphone set | — |
| Max SPL (3% THD) | **160 dB** re 20 µPa | GRAS datasheet |
| Sensitivity | 4 mV/Pa | GRAS datasheet |
| Frequency Response | 4 Hz – 80 kHz | GRAS datasheet |
| Dynamic Range | 125 dB (35 dBA to 160 dB) | GRAS datasheet |
| SNR | ~125 dB (dynamic range) | Derived |
| Power Supply | CCP: 4 mA constant current, 24 V unloaded | GRAS datasheet |
| Package / Dimensions | 1/4" standard mic set (mic + preamp); 10-32 UNC microdot | GRAS datasheet |
| Weight | ~5 g (mic set) | GRAS datasheet (est.) |
| Operating Temp | −40 °C to +120 °C (typical for GRAS 1/4" CCP) | GRAS general specs |
| Unit Cost (est.) | **~$2,200 USD** (CAD 2,942 listed) | [cyth.com](https://www.cyth.com/product-page/gras-46be-782121-03) |
| Lead Time | 4–8 weeks; available through GRAS, NI | GRAS / NI |

**Notes:** Complete microphone set (mic + preamp integrated). IEC 61094 WS3F standardized. TEDS compatible (IEEE 1451.4). 80 kHz bandwidth matches 377C01. 20 dB headroom above 140 dB requirement. Higher cost than PCB equivalent.

---

### PIEZO-3: Endevco 2510

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | Endevco / Meggitt Sensing Systems (USA) | [endevco.com](https://endevco.com/contentstore/mktgcontent/endevco/datasheet/2510_ds_090719.pdf) |
| Part Number | 2510 | — |
| Type | Piezoelectric (charge output), hermetically sealed | — |
| Max SPL | **>180 dB** SPL | Endevco datasheet |
| Sensitivity | 31 pC rms @ 140 dB SPL; 1069 pC rms/psi | Endevco datasheet |
| Frequency Response | 1 Hz – 10 kHz (from amplitude response graph) | Endevco datasheet |
| Dynamic Range | >80 dB (100 to >180 dB SPL operational range) | Endevco datasheet |
| SNR | N/A (charge-mode device; requires external charge amplifier) | — |
| Power Supply | **Self-generating** — no external power required | Endevco datasheet |
| Package / Dimensions | ~19 mm dia (cylindrical); bracket mount | Endevco datasheet |
| Weight | 57 g | Endevco datasheet |
| Operating Temp | **−55 °C to +260 °C** | Endevco datasheet |
| Unit Cost (est.) | ~$500–1,000 | Quote required |
| Lead Time | 4–6 weeks; Endevco direct | Endevco |

**Notes:** Designed specifically for high-intensity acoustic measurement (blast, jet noise). Exceptional max SPL (>180 dB) and temperature range. **Major limitation:** frequency response tops out at 10 kHz — may be insufficient for supersonic crack detection which extends into the ultrasonic range. Charge output requires external charge amplifier (adds cost/complexity). Vibration-compensated design is good for range environments. Heavy (57 g) compared to MEMS.

---

### PIEZO-4: PCB Piezotronics 378A06 (Supplementary)

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | PCB Piezotronics (USA) | [pcb.com](https://www.pcb.com/products?m=378A06) |
| Part Number | 378A06 (system: 377A06 mic + 426E01 preamp) | — |
| Type | 1/2" prepolarized free-field ICP condenser system | — |
| Max SPL | **150 dB** (dynamic range); up to 160 dB with 377A06 mic | PCB datasheet |
| Sensitivity | 12.6 mV/Pa | PCB datasheet |
| Frequency Response | 3 Hz – 40 kHz (±2 dB) | PCB datasheet |
| Dynamic Range | 150 dB re 20 µPa | PCB datasheet |
| SNR | N/A (measurement-grade) | — |
| Power Supply | ICP (2–20 mA constant current excitation, 18–30 VDC) | PCB datasheet |
| Package / Dimensions | 1/2" dia (12.7 mm) standard mic + preamp | PCB datasheet |
| Weight | ~10 g (system) | PCB datasheet (est.) |
| Operating Temp | −40 °C to +120 °C (typical) | PCB general specs |
| Unit Cost (est.) | ~$1,500–2,500 (system) | Quote required |
| Lead Time | 4–8 weeks; global distribution | PCB / distributors |

**Notes:** Good balance of sensitivity (12.6 mV/Pa) and max SPL. 40 kHz upper frequency covers most of the supersonic crack band. ICP interface simplifies signal conditioning (single coaxial cable). 1/2" form factor is larger than 1/4" alternatives but still manageable for target integration.

---

## 3. MEMS Candidates

### MEMS-1: Vesper VM2020

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | Vesper Technologies (USA) | [vespermems.com](https://vespermems.com/products/vm2020/) |
| Part Number | VM2020 | — |
| Type | Piezoelectric MEMS, analog differential output | — |
| Max SPL (AOP, 10% THD) | **152 dB** SPL | [VM2020 datasheet](https://cdn.sparkfun.com/assets/5/6/9/4/b/VM2020_Datasheet-3.pdf) |
| Sensitivity | −63 dBV typical (−66 to −60 dBV) @ 94 dB SPL, 1 kHz | VM2020 datasheet |
| Frequency Response | 80 Hz – 10 kHz | VM2020 datasheet |
| Dynamic Range | 89 dB | VM2020 datasheet |
| SNR | 50 dBA (A-weighted, 20 Hz – 20 kHz) | VM2020 datasheet |
| Power Supply | 1.6 – 3.6 V; low current (~100 µA typ.) | VM2020 datasheet |
| Package / Dimensions | **3.76 × 2.95 × 1.3 mm** (bottom port SMD) | VM2020 datasheet |
| Weight | <0.1 g | Package-implied |
| Operating Temp | −40 °C to +100 °C | VM2020 datasheet |
| Unit Cost | **$4.18** (1 k qty) / **$11.41** (1-up) | [Chipmall](https://www.chipmall.com/products/detail/mems-microphones_vesper-vm2020_c99936258), [DigiKey](https://www.digikey.com/en/products/detail/vesper-technologies-inc/VM2020/10384433) |
| Lead Time | In stock; DigiKey, Mouser, SparkFun | Distributors |

**Notes:** Highest AOP of any MEMS microphone (152 dB). MEMS element itself survives >170 dB. Piezoelectric sensing (not capacitive) — inherently robust, no charge pump. Reflow-solderable with no sensitivity degradation. **Limitation:** 10 kHz upper frequency is low for supersonic crack detection — may miss high-frequency content above 10 kHz. Lowest cost option by far. Tiny form factor ideal for target integration. Differential output good for noise rejection on long cable runs.

---

### MEMS-2: sensiBel SBM100B

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | sensiBel (Norway) | [sensibel.com](https://www.sensibel.com/product) |
| Part Number | SBM100B | — |
| Type | Optical MEMS (laser interferometry), digital output | — |
| Max SPL (AOP) | **146 dB** SPL | [sensiBel product page](https://sensibel.com/sensibel-to-present-80-dba-snr-and-146-db-spl-aop-mems-microphone-audio-solutions-at-ces-2024/) |
| Sensitivity | Digital output — N/A (sensitivity encoded in digital gain) | — |
| Frequency Response | 20 Hz – 20 kHz (studio-quality claim; exact spec TBC) | sensiBel product brief |
| Dynamic Range | **132 dB** | sensiBel product page |
| SNR | **80 dBA** | sensiBel product page |
| Power Supply | Digital supply (exact voltage TBC) | — |
| Package / Dimensions | SMD bottom port reflow-solderable (exact dims TBC) | sensiBel product page |
| Weight | <0.1 g (SMD package implied) | — |
| Operating Temp | TBC (industrial-grade expected) | — |
| Unit Cost | TBC — contact sales@sensibel.com | sensiBel |
| Lead Time | Eval kits available Dec 2025; production ramp 2026 | [GlobeNewsWire Dec 2025](https://www.globenewswire.com/news-release/2025/12/10/3203054/0/en/sensiBel-Eval-Kits-Accelerate-Applications-of-World-s-First-Studio-quality-Optical-MEMS-Microphone.html) |

**Notes:** Best-in-class MEMS dynamic range (132 dB) and SNR (80 dBA). Novel optical readout technology avoids capacitive/piezoelectric limitations. Won EDN 2025 Product of the Year. Digital output (PDM/I2S/TDM8) simplifies multi-channel TDOA systems. **Risks:** Brand-new product (2025/2026 launch) — limited field history. Pricing and detailed specs not yet public. Single-source (no alternate supplier). May require custom integration work. Optical sensing adds complexity vs. traditional MEMS.

---

### MEMS-3: TDK InvenSense ICS-40638

| Parameter | Value | Source |
|-----------|-------|--------|
| Manufacturer | TDK / InvenSense (Japan/USA) | [invensense.tdk.com](https://invensense.tdk.com/products/analog/ics-40638/) |
| Part Number | ICS-40638 | — |
| Type | Capacitive MEMS, analog differential output | — |
| Max SPL (AOP, 10% THD) | **138 dB** SPL ⚠️ *(2 dB below 140 dB requirement)* | [ICS-40638 datasheet](http://invensense.tdk.com/wp-content/uploads/2020/05/DS-000281-ICS-40638-v1.1.pdf) |
| Sensitivity | −43 dBV ±1 dB @ 94 dB SPL | ICS-40638 datasheet |
| Frequency Response | 35 Hz – 20 kHz | ICS-40638 datasheet |
| Dynamic Range | 101 dB | ICS-40638 datasheet |
| SNR | 63 dBA | ICS-40638 datasheet |
| Power Supply | 1.52 – 3.63 V; **170 µA** (ultra-low power) | ICS-40638 datasheet |
| Package / Dimensions | **3.50 × 2.65 × 0.98 mm** (bottom port SMD) | ICS-40638 datasheet |
| Weight | <0.1 g | Package-implied |
| Operating Temp | −40 °C to **+105 °C** | ICS-40638 datasheet |
| Unit Cost | **~$1.60** (DigiKey, qty pricing) | [DigiKey](https://www.digikey.com/en/products/detail/tdk-invensense/ICS-40638/13143430) |
| Lead Time | In stock; DigiKey, Mouser, global | Distributors |

**Notes:** ⚠️ AOP is 138 dB — **2 dB below the 140 dB requirement**. Included because: (a) it is the highest-AOP capacitive MEMS available, (b) if sensor is positioned with any standoff from bullet path, actual SPL at sensor may be <140 dB, (c) excellent SNR (63 dBA) and tight sensitivity tolerance (±1 dB) benefit TDOA accuracy. Lowest cost ($1.60) and smallest package. Extended temp to 105 °C. Strong supply chain (TDK global, multi-distributor). Best frequency response of all MEMS candidates (35 Hz – 20 kHz). ±1 dB matched sensitivity is ideal for sensor arrays.

---

## 4. Summary Comparison Table

| Parameter | PIEZO-1 377C01 | PIEZO-2 46BE | PIEZO-3 2510 | PIEZO-4 378A06 | MEMS-1 VM2020 | MEMS-2 SBM100B | MEMS-3 ICS-40638 |
|-----------|-------|-------|-------|-------|-------|-------|-------|
| **Max SPL (dB)** | 166 | 160 | >180 | 150–160 | 152 | 146 | 138 ⚠️ |
| **Sensitivity** | 2 mV/Pa | 4 mV/Pa | 31 pC@140dB | 12.6 mV/Pa | −63 dBV | Digital | −43 dBV |
| **Freq. Range** | 5.4–80k Hz | 4–80k Hz | 1–10k Hz | 3–40k Hz | 80–10k Hz | 20–20k Hz | 35–20k Hz |
| **Dyn. Range (dB)** | ~131 | 125 | >80 | 150 | 89 | 132 | 101 |
| **SNR (dBA)** | — | — | — | — | 50 | 80 | 63 |
| **Power** | Ext preamp | CCP 4mA/24V | Self-gen | ICP 2-20mA | 1.6–3.6V | Digital | 1.52–3.63V |
| **Size (mm)** | 7 dia×10.5 | 1/4" set | 19 dia | 12.7 dia | 3.8×3.0×1.3 | SMD (TBC) | 3.5×2.7×1.0 |
| **Weight** | 1.8 g | ~5 g | 57 g | ~10 g | <0.1 g | <0.1 g | <0.1 g |
| **Temp (°C)** | −40 to +120 | −40 to +120 | −55 to +260 | −40 to +120 | −40 to +100 | TBC | −40 to +105 |
| **Unit Cost** | ~$800–1,500 | ~$2,200 | ~$500–1,000 | ~$1,500–2,500 | $4–11 | TBC | ~$1.60 |
| **Availability** | Quote/4-8 wk | Quote/4-8 wk | Quote/4-6 wk | Quote/4-8 wk | In stock | Eval 2026 | In stock |
| **Meets 140dB?** | ✅ Yes (+26) | ✅ Yes (+20) | ✅ Yes (+40) | ✅ Yes (+10–20) | ✅ Yes (+12) | ✅ Yes (+6) | ⚠️ No (−2) |

---

## 5. Key Observations for Analyst (task-002 / task-004)

1. **Frequency response is a critical differentiator.** Supersonic crack detection typically requires bandwidth up to 20–80 kHz. The piezo measurement mics (377C01, 46BE) reach 80 kHz. MEMS candidates top out at 10–20 kHz. The Endevco 2510, despite its extreme SPL capability, is limited to 10 kHz.

2. **Cost differs by 100–1000×.** MEMS ($1.60–$11) vs. piezo measurement mics ($500–$2,500). For a multi-sensor LOMAH array (typically 3–4 mics per target), MEMS cost advantage is decisive for production volumes.

3. **Form factor and integration.** MEMS sensors are SMD-mountable on a PCB and weigh <0.1 g. Piezo measurement mics require cables, preamps, and mounting hardware — challenging for a rugged, field-deployable target.

4. **Power.** MEMS run from 1.6–3.6 V at µA-level currents (battery-friendly). Piezo/ICP mics need 18–30 VDC constant current supplies or external charge amplifiers.

5. **The VM2020 is the only MEMS sensor that definitively meets 140 dB with significant margin (+12 dB).** sensiBel SBM100B meets it with +6 dB margin but is unproven/unavailable. ICS-40638 falls 2 dB short but offers the best all-round MEMS specs otherwise.

6. **Supply chain risk.** VM2020 (Vesper) is single-source. ICS-40638 (TDK) has the strongest global supply chain. sensiBel SBM100B is pre-production. Piezo measurement mics are niche/long-lead but from established vendors.

---

## 6. Sources

- [PCB Piezotronics 377C01](https://www.pcb.com/products?m=377c01)
- [PCB Piezotronics 378A06](https://www.pcb.com/products?m=378A06)
- [GRAS 46BE](https://www.grasacoustics.com/products/product/143-46BE)
- [GRAS 46BE Datasheet (NI)](https://www.ni.com/pdf/manuals/G.R.A.S._46BE.pdf)
- [Endevco 2510 Datasheet](https://endevco.com/contentstore/mktgcontent/endevco/datasheet/2510_ds_090719.pdf)
- [Vesper VM2020](https://vespermems.com/products/vm2020/)
- [VM2020 Datasheet (SparkFun)](https://cdn.sparkfun.com/assets/5/6/9/4/b/VM2020_Datasheet-3.pdf)
- [sensiBel SBM100B](https://www.sensibel.com/product)
- [TDK ICS-40638](https://invensense.tdk.com/products/analog/ics-40638/)
- [ICS-40638 Datasheet](http://invensense.tdk.com/wp-content/uploads/2020/05/DS-000281-ICS-40638-v1.1.pdf)
- [LOMAH Overview — Inveris Training](https://www.inveristraining.com/live-fire-training/military/lomah-location-of-miss-and-hit/)
- [LOMAH Explained — Shooting Academy](http://www.shooting-academy.com/media/LOMAH%20Explained.pdf)
