# VN-LOMAH (BB-01) — Product Context
## Location of Miss and Hit Detection System

---

## CRITICAL CONSTRAINTS — READ FIRST

```
╔══════════════════════════════════════════════════════════════╗
║  SENSOR TYPE: Piezoelectric CONTACT sensors                  ║
║  NOT MEMS microphones — MEMS cannot handle the SPL           ║
║  Detection: Miss/Hit ONLY — not acoustic monitoring          ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Signal Chain

```
Piezo Sensor → Charge Amplifier (Q→V) → Bandpass Filter → Gain Stage → Clamp → ADC
```

### Component Details

| Stage | Component | Notes |
|-------|-----------|-------|
| Sensor | Piezoelectric contact disc | Mounted on target frame |
| Charge Amp | LM358 or TL072 based | Vietnam market availability |
| Bandpass | Active filter (op-amp) | Tuned to impact frequency band |
| Gain | Adjustable gain stage | Configurable via config file |
| Clamp | Voltage clamp/limiter | Protect ADC input |
| ADC | 16-bit, on RPi5 or STM32 | Sample rate configurable |

### Op-Amp Selection Rationale
- **LM358:** Cheap, widely available in Vietnam, dual op-amp, single supply
- **TL072:** Better noise performance, JFET input, available in Vietnam
- Both suitable for the bandwidth needed in impact detection
- NOT using precision/instrumentation amps (cost, availability)

---

## System Architecture

```
[Piezo Array (4+ sensors)]
        │
[Analog Signal Chain (per channel)]
        │
[ADC — multichannel simultaneous sampling]
        │
[RPi5 — digital signal processing]
        │
[Scoring Logic — hit/miss/location]
        │
[IRONMESH CDM — logging, comms, display]
        │
[CORTEX integration — range management]
```

---

## Key Parameters (ALL must be configurable)

```yaml
sensor:
  count: 4          # minimum — NEVER assume single channel
  type: "piezoelectric_contact"
  mounting: "target_frame_direct"

signal_chain:
  charge_amp_gain: "[configurable]"
  bandpass_low_hz: "[configurable]"
  bandpass_high_hz: "[configurable]"
  gain_stage_db: "[configurable]"
  clamp_voltage_v: "[configurable — protect ADC]"

adc:
  resolution_bits: 16
  sample_rate_hz: "[configurable]"
  channels: 4       # match sensor count

processing:
  detection_threshold: "[configurable]"
  debounce_ms: "[configurable]"
  speed_of_sound_m_s: "[PARAMETERIZE for 20-45°C]"

environment:
  temperature_range_c: [25, 45]
  humidity_range_pct: [40, 100]
  power_source: "[grid | generator ±10% | battery]"
```

---

## What AI Can and Cannot Do for VN-LOMAH

### AI CAN:
- Generate boilerplate signal processing code (A1)
- Implement known detection algorithms from spec (A2)
- Pre-check code with PLAUSIBLE review (A3)
- Draft technical specifications from source data (B1)
- Analyze component reuse with other products (D2)

### AI CANNOT:
- Debug analog signal chain behavior (requires oscilloscope)
- Determine optimal bandpass frequencies (requires range testing)
- Validate detection accuracy (requires live-fire data)
- Assess physical mounting and weatherproofing (requires site visit)
- Know Vietnamese military qualification standards (KN domain knowledge)

---

## Common AI Mistakes for VN-LOMAH

1. **Assuming MEMS microphones** — Wrong sensor technology entirely
2. **Assuming single channel** — System has 4+ sensors
3. **Hardcoding speed of sound** — Must parameterize for 20-45°C
4. **Ignoring analog signal chain** — Digital-only solutions miss the physics
5. **Assuming clean power** — Military generators have ±10% voltage variation
6. **Assuming indoor conditions** — Outdoor range, full weather exposure
