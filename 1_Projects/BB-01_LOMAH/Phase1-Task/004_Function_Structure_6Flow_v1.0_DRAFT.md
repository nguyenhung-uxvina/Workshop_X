---
created: 2026-03-19
updated: 2026-03-19
type: design-analysis
phase: 1-task-clarification
project: BB-01_LOMAH
---

# BB-01 LOMAH — Function Structure (6-Flow Decomposition)

> **Pahl-Beitz Phase 1, Step 6**
>
> Decomposing the essential problem into sub-functions across **Energy, Material, Signal, Data, Computation, and Trust flows**

---

## OVERALL FUNCTION (One-liner)

**"Detect bullet impact on armored steel surface in marine environment and report hit/miss result in real-time"**

---

## 6-FLOW FRAMEWORK

Pahl-Beitz originally defined 3 flows (Energy, Material, Signal). For complex systems with AI/embedded processing, we extend to 6 flows:

| Flow | Description | Role in BB-01 |
|------|-------------|---------------|
| **ENERGY** | Power supply, conversion, dissipation | Battery → DC distribution → component power budgets |
| **MATERIAL** | Physical substance, structure, deformation | Steel target resonance → Piezo sensor output → PCB assembly |
| **SIGNAL** | Information-carrying transients | Impact acoustic event → electrical analog signal → ADC samples |
| **DATA** | Structured information flow | ADC samples → buffers → algorithm inputs |
| **COMPUTATION** | Processing, logic, decision | Real-time DSP → hit/miss classification → result encoding |
| **TRUST** | Confidence, reliability, fault handling | Algorithm confidence scores → false alarm detection → failsafe mode |

---

## LEVEL 0: System Boundary

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              [IMPACT EVENT]                [CONTROL STATION]   │
│                  ║                                   △          │
│                  ║ (Acoustic)                        │ (RF)    │
│                  ▼                                   │          │
│  ┌──────────────────────────────────────────────────┴───────┐  │
│  │                                                          │  │
│  │      BB-01 LOMAH SYSTEM                                │  │
│  │  (Piezo Impact Detection Unit)                        │  │
│  │                                                        │  │
│  │  Inputs:                                              │  │
│  │  • Mechanical vibration (impact + noise)             │  │
│  │  • Electrical power (LiFePO4 12V)                     │  │
│  │  • [Optional] Command from shore                      │  │
│  │                                                        │  │
│  │  Outputs:                                             │  │
│  │  • Hit/miss result (per target)                       │  │
│  │  • Status (battery, health, ready)                    │  │
│  │  • [Optional] Diagnostic telemetry                    │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Environmental Constraints:                                     │
│  • Sea State 3 motion (~0.5-1m waves)                         │
│  • Salt spray, high humidity                                  │
│  • Temperature 0-50°C                                         │
│  • Platform continuous operation ≥8 hours                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## LEVEL 1: Major Functions (4 Tiers)

```
┌────────────────────────────────────────────────────────────────────┐
│                 DETECT BULLET IMPACT                              │
│              (Essential Problem)                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                   │
│    ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐   │
│    │  ACQUIRE        │  │  PROCESS        │  │  REPORT      │   │
│    │  SENSOR SIGNAL  │  │  SIGNAL &       │  │  RESULT      │   │
│    │                 │  │  CLASSIFY       │  │              │   │
│    └────────┬────────┘  └────────┬────────┘  └──────┬───────┘   │
│             │                    │                   │            │
│      F1: Transduce acoustic  F2: Extract signal  F3: Transmit    │
│          event to voltage        features           result       │
│                                  F2a: Condition                   │
│                                  F2b: Detect pulse                │
│                                  F2c: Classify                    │
│                                      (hit/miss/target-ID)        │
│                                                                   │
│    ┌─────────────────┐                                           │
│    │  MANAGE         │                                           │
│    │  POWER &        │                                           │
│    │  SAFETY         │                                           │
│    └─────────────────┘                                           │
│             │                                                     │
│      F0: Supply energy, monitor health                            │
│                                                                   │
└────────────────────────────────────────────────────────────────────┘
```

---

## LEVEL 2: Sub-Functions (Detailed)

### **F0: Manage Power & System Health**

| Sub-Function | Input | Output | Flow Type | Domain |
|--------------|-------|--------|-----------|--------|
| **F0a** Supply DC voltage | Battery 12V | 3.3V, 5V regulated | ENERGY | Electrical |
| **F0b** Monitor battery health | Battery terminal voltage | SOC %, low-battery flag | DATA | Electrical/SW |
| **F0c** Monitor temperature | Temp sensor | Alert if >60°C | DATA | Electrical/SW |
| **F0d** Watchdog system reset | MCU heartbeat | Reset if watchdog expires | TRUST | Electrical/SW |

---

### **F1: Acquire Sensor Signal**

| Sub-Function | Input | Output | Flow Type | Domain |
|--------------|-------|--------|-----------|--------|
| **F1a** Sense mechanical vibration | Impact on steel (resonance) | Charge on Piezo element (pC range) | SIGNAL + MATERIAL | Mechanical/Electrical |
| **F1b** Amplify charge to voltage | Piezo output (pC) | Voltage (V range) via high-Z charge amp | SIGNAL | Electrical |
| **F1c** Bandpass filter | Analog voltage (0-10kHz) | Filtered signal (100Hz-10kHz) | SIGNAL | Electrical |
| **F1d** Programmable gain | Filtered signal (~mV) | Amplified signal (0-3.3V for ADC) | SIGNAL + ENERGY | Electrical |
| **F1e** Anti-alias filter & clamp | Conditioned signal | ADC-safe 0-3.3V | SIGNAL | Electrical |

**Signal Flow Diagram (F1):**
```
Impact [acoustic]
    ║ (stress wave)
    ▼
[Piezo CONTACT sensor] ──► Charge (pC)
    ║
    ▼
[Charge Amp] ──► Voltage (mV), high impedance
    ║             (10 MΩ input, Q→V conversion)
    ▼
[Bandpass Filter] ──► Filtered (100Hz-10kHz)
    ║                 (noise rejection)
    ▼
[Gain Stage] ──► Amplified (0-3.3V)
    ║             (40dB typical)
    ▼
[Anti-alias + Clamp] ──► ADC input ready
```

---

### **F2: Process Signal & Classify**

| Sub-Function | Input | Output | Flow Type | Domain |
|--------------|-------|--------|-----------|--------|
| **F2a** Digitize | Analog 0-3.3V | 12-bit samples @ 50kSPS | DATA | Electrical/SW |
| **F2b** Buffer & window | ADC stream | Segmented frames (e.g., 20ms windows) | DATA | SW |
| **F2c** Feature extraction | Raw ADC frames | Signal power, spectral centroid, pulse peak | COMPUTATION | SW |
| **F2d** Baseline estimation | Feature stream | Running noise floor (adaptive filter) | COMPUTATION | SW |
| **F2e** Threshold comparison | Features vs. baseline | Pulse detected? (Yes/No) | TRUST | SW |
| **F2f** Time-frequency analysis | Detected pulse | Dominant frequency, Q-factor, decay rate | COMPUTATION | SW |
| **F2g** Hit vs. Miss classification | Pulse features | Decision: HIT or MISS (confidence %) | TRUST | SW |
| **F2h** Target identification | Pulse amplitude & timing | Target ID: 1, 2, 3, or 4 | COMPUTATION | SW |

**Classification Decision Tree (F2g-h):**
```
INPUT: Pulse features {power, freq, Q, decay}
    ║
    ▼
Is power > (baseline + 15dB margin)?
    ├─ NO  → MISS (no impact signal)
    └─ YES ▼
          Is frequency ∈ [100Hz-10kHz]?
              ├─ NO  → NOISE (rejected)
              └─ YES ▼
                    Is Q-factor ∈ [5-20]?
                        ├─ NO  → ENVIRONMENTAL (wind, wave)
                        └─ YES ▼
                              HIT DETECTED ✓
                              │
                              └─ Compare pulse amplitude across 4 channels
                                 → Select max channel
                                 → TARGET ID determined
```

---

### **F3: Transmit Result**

| Sub-Function | Input | Output | Flow Type | Domain |
|--------------|-------|--------|-----------|--------|
| **F3a** Encode hit/miss result | Decision {HIT/MISS, target-ID, confidence} | Packet (target-ID + timestamp) | DATA | SW |
| **F3b** LoRa modulation | Packet data | RF modulation 433 MHz | SIGNAL | RF/Electrical |
| **F3c** Transmit & retry | Modulated signal | Transmit packet, monitor ACK | SIGNAL + ENERGY | RF/SW |
| **F3d** Heartbeat beacon | Timer expiry | Status packet every 60s | DATA | SW |

**Communication Protocol (F3a-c):**
```
Result: {HIT, Target=2, Confidence=98%}
    ║
    ▼
[Encode Packet]
    ┌─────────────────┐
    │ Target ID: 2    │ (1 byte)
    │ Timestamp: xxxx │ (4 bytes)
    │ Event type: HIT │ (1 byte)
    │ SNR: 18dB       │ (1 byte)
    │ Checksum        │ (2 bytes)
    └─────────────────┘
         ║
         ▼
[LoRa SX1276 Modulation]
    Frequency: 433.1 MHz
    Bandwidth: 125 kHz
    Spreading Factor: SF8 (moderate range/speed trade)
         ║
         ▼
[Transmit 100ms]
     Range: ≥500m (LoS)
     Power: +20 dBm
     Duration: ~1s for SF8 packet
         ║
         ▼
[Monitor for ACK from shore station]
     If no ACK after 2s → Retry 2× (exponential backoff)
     If ACK received → Log success + go idle
```

---

## LEVEL 2: Flow Interaction Matrix

### Cross-Domain Dependencies

| Function | ENERGY Dep. | MATERIAL Dep. | SIGNAL Dep. | DATA Dep. | COMPUTATION Dep. | TRUST Dep. |
|----------|-------------|---------------|------------|-----------|------------------|-----------|
| **F0a** Supply | *root* | - | - | reports to F2d | - | failsafe if fault |
| **F1a** Sense | piezo piezo piezo needs bias | Steel resonance affects freq | Vibration → Charge | - | - | - |
| **F1b** Charge-Amp | Op-amp power (3.3V) | - | Piezo output | - | Gain setting → F2c | SNR margin check |
| **F1c** Bandpass | Passive components | - | Frequency response | - | Filter coefficients | - |
| **F1d** Gain | Op-amp power | - | Input level | - | Gain stage = 40dB | ADC clipping detection |
| **F2a** Digitize | ADC power | - | Analog input | → ADC samples | Sampling rate 50kSPS | Quantization noise |
| **F2c** Features | - | - | Raw samples | feature vectors | DSP computation | - |
| **F2d** Baseline | - | - | Current signal | buffered frames | Adaptive filter algorithm | Alert if baseline unstable |
| **F2e** Threshold | - | - | Feature power | Decision input | Threshold algorithm | Confidence calculation |
| **F2g** Hit/Miss | - | - | Pulse characteristics | Extracted features | ML/DSP classifier | Confidence ≥90% required |
| **F2h** Target-ID | - | - | Pulse amplitude (4 ch) | Channel selection | Arg-max 4 channels | Cross-talk rejection |
| **F3a** Encode | - | - | - | Hit/miss result | Packet format | CRC checksum |
| **F3b** LoRa-TX | RF power (LoRa module) | - | Signal modulation | Packet bytes | SF selection | TX power control |

---

## ENERGY FLOW

```
LiFePO4 Battery (12V, 10Ah)
         │
         ▼ [F0a]
    [Buck Converter]
         │
    ┌────┴────────────────┐
    │                     │
    ▼                     ▼
  3.3V Rail             5V Rail
    │ (MCU, ADC,        │ (Op-amps,
    │  LoRa, sensors)   │  analog circuits)
    │                   │
    ├──→ STM32H743      │
    ├──→ SX1276 LoRa    │
    ├──→ Op-amps (LM358,├──→ Charge amp
    │   TL072)         ├──→ Bandpass active
    ├──→ ADC channels  └──→ Gain + Clamp
    └──→ Status LEDs

Power Budget (F0a responsibility):
    MCU + ADC:        ~0.3W
    Charge amp:       ~0.1W
    LoRa TX (average):~0.17W  (TX every 1s)
    Passive/misc:     ~0.32W
    ─────────────────────
    TOTAL:            ~0.9W

Runtime: 76.8 Wh ÷ 0.9W ≈ 85 hours (✅ meets ≥8h)
```

---

## MATERIAL FLOW

```
Impact Event (Bullet strike on steel)
         │
         ▼
    [Steel target AR400+ plate]
         │ (resonance excitation)
         │ Frequency: 2-4 kHz primary
         │ Stress wave propagation
         ▼
    [Mounting point: Epoxy potting]
         │ (transfers vibration to piezo)
         ▼
    [Piezo CONTACT ceramic disc]
         │ (stress → charge generation)
         │ Material: PZT-5H or similar
         │ Size: 27mm diameter, 1-2mm thick
         ▼
    [Output signal delivered to electronics]

Key Constraint: Piezo CONTACT required
  • NOT MEMS (microphone) → avoids SPL saturation
  • Direct stress coupling → strong signal
  • Mechanical mounting critical (epoxy quality)
```

---

## SIGNAL FLOW (Detailed)

```
ACOUSTIC SIGNAL PATH:

1. TRANSDUCTION (F1a-b):
   Impact vibration → Piezo charge (pC) → Charge-amp voltage (mV)

2. CONDITIONING (F1c-e):
   Analog signal path →
   Bandpass (100Hz-10kHz) →
   Programmable gain (40dB) →
   Anti-alias filter →
   Clamp to 0-3.3V →
   ADC input ready

3. DIGITIZATION (F2a):
   Continuous 50 kSPS sampling
   12-bit resolution (ADC LSB ~805µV)
   4-5 channels (1-4 targets + reference)

4. BUFFERING (F2b):
   Circular buffer in MCU RAM
   Frame size: 20ms @ 50kSPS = 1000 samples/frame

5. FEATURE EXTRACTION (F2c):
   • RMS power (dB relative to noise floor)
   • Spectral centroid (frequency of max energy)
   • Q-factor (damping ratio)
   • Peak amplitude (V units)
   • Pulse width (ms)

6. CLASSIFICATION (F2g):
   Features → Decision boundary
   Output: {HIT, MISS} with confidence %

7. TRANSMISSION (F3):
   Result → Packet → LoRa 433 MHz → Shore station
```

---

## COMPUTATION FLOW (DSP Layer)

```
REAL-TIME ALGORITHM (MCU STM32H743):

LOOP (every 20ms):
   ┌─────────────────────────────────┐
   │ 1. Read ADC (1000 samples)      │
   ├─────────────────────────────────┤
   │ 2. Feature extraction (~10ms)   │
   │    • Compute RMS/FFT            │
   │    • Compare to baseline        │
   ├─────────────────────────────────┤
   │ 3. Decision logic (~5ms)        │
   │    IF (power > threshold + SNR) │
   │       Pulse detected            │
   │    ELSE                         │
   │       Continue monitoring       │
   ├─────────────────────────────────┤
   │ 4. Target ID (if pulse)         │
   │    → Arg-max 4 channels         │
   │    → Spatial discrimination     │
   ├─────────────────────────────────┤
   │ 5. Report & radio TX            │
   │    → Encode packet              │
   │    → Queue LoRa transmission    │
   ├─────────────────────────────────┤
   │ 6. Update adaptive baseline     │
   │    → Moving average noise floor │
   └─────────────────────────────────┘

Latency Budget (must be ≤200ms total):
   ADC acquisition:      20ms
   Feature extraction:   10ms
   Decision logic:        5ms
   Target ID:             5ms
   Packet encode:         5ms
   LoRa modulation/TX:  100-200ms ← dominated by RF
   ─────────────────────────────────
   TOTAL:              140-245ms ✅ (within 200ms spec)
```

---

## TRUST FLOW (Fault Handling & Confidence)

```
CONFIDENCE ESTIMATION & FAILSAFE:

Event detected → Confidence calculation:
   ┌──────────────────────────────┐
   │ Base score: Power margin     │
   │  (dB above threshold)        │
   └──────────────┬───────────────┘
                  ▼
   ┌──────────────────────────────┐
   │ Spectral match: Is freq      │
   │  in [100Hz-10kHz] impact band?│
   │  • YES: +20% confidence      │
   │  • NO:  -20% confidence      │
   └──────────────┬───────────────┘
                  ▼
   ┌──────────────────────────────┐
   │ Temporal coherence:          │
   │  Q-factor [5-20]?            │
   │  • YES: +15% confidence      │
   │  • MAYBE: +5%                │
   │  • NO: -15%                  │
   └──────────────┬───────────────┘
                  ▼
   ┌──────────────────────────────┐
   │ Cross-target coherence:      │
   │  Signal on only 1 target?    │
   │  • YES: +10% (localized)     │
   │  • NO: -10% (broad noise)    │
   └──────────────┬───────────────┘
                  ▼
   FINAL: Is Confidence ≥ 90%?
   ├─ YES → Report HIT ✓
   └─ NO  → Suppress (treat as MISS)
             Log low-confidence event
             Alert operator if pattern

FALSE ALARM DETECTION:
   ├─ >1 FP per hour → Flag ("noisy environment")
   ├─ All sensors FP  → Flag ("common-mode noise")
   └─ Battery failing → Alert ("LOW POWER")

WATCHDOG & RESET:
   ├─ MCU heartbeat fails → Reset
   ├─ ADC stuck → Reset
   ├─ LoRa TX stuck → Reset
   └─ Any HardFault → Failsafe reboot
```

---

## CROSS-DOMAIN SYNC S1 Checklist

**After Phase 1, before Gate 1, verify:**

| Interface | Electrical | Software | Mechanical |
|-----------|-----------|----------|-----------|
| **Sensor → Charge Amp** | Op-amp input impedance ≥10MΩ | ADC input range calibrated | Piezo bond stress ≤50% yield |
| **Charge Amp → Bandpass** | Impedance matching (1kΩ < Z < 10kΩ) | Filter coefficients tuned | - |
| **Bandpass → Gain** | DC offset compensation | Baseline drift algorithm | - |
| **Gain → ADC** | 0-3.3V clamp at 99th percentile | ADC saturation detection | - |
| **ADC → MCU** | ADC clock stable (SPI/I²C) | Sample rate jitter <1% | - |
| **MCU → LoRa** | Voltage rail stable ±5% | Packet timing reproducible | RF antenna clearance |
| **LoRa → Shore** | TX power stable | Modulation waveform correct | Antenna orientation free |
| **Power → All** | Voltage regulation stable | Startup sequencing correct | Thermal dissipation adequate |

---

## Sub-Function Verification Methods

| Sub-Function | Verification Method |
|--------------|-------------------|
| **F0a, F0b** Supply & monitoring | Bench: DC power supply, oscilloscope |
| **F1a** Piezo sensing | Lab: Impact test on steel plate, oscilloscope capture |
| **F1b** Charge amp | LTspice simulation + bench measurement |
| **F1c** Bandpass filter | Network analyzer or FFT sweep |
| **F1d** Gain stage | Bench: Function generator input sweep |
| **F1e** Anti-alias & clamp | Oscilloscope at ADC input |
| **F2a** ADC digitization | Bench: Compare ADC output to analog input |
| **F2c-f** Features & classification | MATLAB/Python offline analysis on test data |
| **F2g** Hit/Miss decision | Validation matrix: TP, FP, TN, FN rates |
| **F2h** Target ID | Bench: Sequential impacts on each target |
| **F3a-d** Encoding & transmission | Range test: Transmit to shore receiver |

---

## Next Phase: Phase 2 Conceptual Design

Once S1 is complete, proceed to:
1. **Morphological matrix** for each sub-function (F1a-F3d)
2. **VDI 2225 scoring** of alternative solutions
3. **Concept selection** (best combination of sub-solutions)
4. **Gate 1 review** before Phase 2 begins

