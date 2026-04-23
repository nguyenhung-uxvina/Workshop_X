# BB-01 Decision Log

> **Purpose**: Track all significant design and project decisions
> **Format**: Most recent first

---

## DEC-006: Concept Selection (VDI 2225)

**Date**: 2026-01-26
**Status**: ✅ APPROVED
**Decision Maker**: Design Team
**Method**: VDI 2225 Technical-Economic Evaluation

### Context

Select final system concept from morphological matrix variants. Three viable concepts evaluated:
- V1: Baseline (current design per DEC-002 to DEC-005)
- V2: Cost-Optimized (minimum viable)
- V4: WiFi-Centric (alternative architecture)

### Evaluation Criteria

| ID | Criterion | Weight | Source |
|----|-----------|--------|--------|
| C1 | Hit Detection Accuracy | 18% | KPP.01 |
| C2 | Communication Range | 10% | KPP.05 |
| C3 | Sea State Capability | 10% | KSA.06 |
| C4 | Operating Autonomy | 12% | KSA.01 |
| C5 | Unit Cost | 15% | KSA.02 |
| C6 | Development Risk | 12% | TRL |
| C7 | Local Content | 11% | KSA.04 |
| C8 | Maintainability | 12% | MAINT.01-04 |

### Evaluation Results

| Concept | Weighted Score | Technical Value | Rating |
|---------|----------------|-----------------|--------|
| **V1 Baseline** | 3.63 | **90.8%** | Very Good |
| V2 Cost-Optimized | 2.94 | 73.5% | Good |
| V4 WiFi-Centric | 2.62 | 65.5% | Marginal |

### Decision

| Aspect | Selected |
|--------|----------|
| **Concept** | V1 Baseline |
| **Technical Value** | 90.8% |
| **Rating** | Very Good |
| **Confidence** | High (robust in all sensitivity tests) |

### Rationale

1. **Highest technical value** (90.8%) with 17+ point margin over V2
2. **Meets all KPPs** at Threshold or Objective level
3. **Proven technology** - validates DEC-002 through DEC-005
4. **Robust selection** - maintains lead in all 4 sensitivity tests
5. **No critical weaknesses** - balanced across all criteria

### V1 Baseline Configuration

| Function | Solution | Decision |
|----------|----------|----------|
| Detect impact | PZT Piezoelectric | DEC-002 |
| Process data | STM32H743 | DEC-005 |
| Transmit wireless | LoRa SX1276 | DEC-005 |
| Store energy | LiFePO4 12.8V 6Ah | DEC-004 |
| Solar convert | Mono 20W | DEC-004 |
| Support targets | Chain Suspension | MNT.01 |
| Platform stability | Catamaran | PLT.01 |

### Key Metrics

| Metric | V1 Value | Requirement |
|--------|----------|-------------|
| Hit Detection | ≥95% | 90% T / 95% O |
| Comm Range | 500m | 400m T / 600m O |
| Sea State | SS3 | SS3 T / SS4 O |
| Autonomy | 85 hours | 8hr T / 24hr O |
| Unit Cost | ~27M VND | ≤60M T / ≤30M O |
| Local Content | 70% | ≥50% T / ≥70% O |

### Sensitivity Analysis Summary

| Test | Winner | Margin |
|------|--------|--------|
| Baseline | V1 | +17.3% |
| Cost +15% | V1 | +7.5% |
| Range +10% | V1 | +23.3% |
| Equal weights | V1 | +18.7% |

### Trade-offs Accepted

| Trade-off | Mitigation |
|-----------|------------|
| Higher cost than V2 (27M vs 15M) | Still well under 60M budget |
| Sea State 3 only (not SS4) | Meets Threshold requirement |

### Fallback

**V2 Cost-Optimized** (73.5%) if:
- Budget severely constrained
- Only calm water (SS2) operation needed
- Short exercise duration (8hr) acceptable

### Implications

1. **Validates all prior decisions** (DEC-002 to DEC-005)
2. **Ready for Embodiment Design** (PB3)
3. **Prototype can proceed** with selected components
4. **BOM confirmed** at ~27M VND

### Related

- [[design/vdi-2225-evaluation]] - Full evaluation document
- [[design/morphological-matrix]] - Concept variants
- [[design/function-structure]] - Function decomposition
- DEC-002 to DEC-005 - Component decisions validated

---

## DEC-005: MCU Selection

**Date**: 2026-01-26
**Status**: ✅ APPROVED
**Decision Maker**: Design Team

### Context

Select main processing unit for BB-01 MCU Box. Must handle:
- 4× Piezoelectric sensor signal processing (via ADC)
- Impact detection algorithm (threshold + validation)
- LoRa communication (500m range to shore)
- System state management, logging
- Low power operation (target: <500mW)

Constraints:
- REL.01: MTBF ≥2,000 hours
- PWR.02: ≥8 hours runtime (power budget ~0.9W total system)
- ENV.02: Operating temp 0°C to +50°C
- Local availability preferred

### Options Considered

| Option | MCU | Core | RAM | Flash | ADC | Price | Power | Availability |
|--------|-----|------|-----|-------|-----|-------|-------|--------------|
| A | **STM32H743** | Cortex-M7 480MHz | 1MB | 2MB | 3×16-bit | $12 | 300mW | ✅ LCSC, Mouser |
| B | STM32F407 | Cortex-M4 168MHz | 192KB | 1MB | 3×12-bit | $8 | 200mW | ✅ Excellent |
| C | ESP32-S3 | Dual Xtensa 240MHz | 512KB | 8MB | 2×12-bit | $4 | 250mW | ✅ Excellent |
| D | STM32L476 | Cortex-M4 80MHz | 128KB | 1MB | 3×12-bit | $6 | 80mW | ✅ Good |
| E | RP2040 | Dual Cortex-M0+ 133MHz | 264KB | 2MB ext | 4×12-bit | $1 | 100mW | ✅ Excellent |

### Evaluation Matrix

| Criteria | Weight | A: H743 | B: F407 | C: ESP32 | D: L476 | E: RP2040 |
|----------|--------|---------|---------|----------|---------|-----------|
| **Processing power** | 20% | 5 | 3 | 3 | 2 | 2 |
| **ADC quality** | 20% | 5 | 3 | 2 | 3 | 2 |
| **Power efficiency** | 15% | 2 | 3 | 3 | 5 | 4 |
| **Peripherals** | 15% | 5 | 4 | 4 | 4 | 3 |
| **Cost** | 15% | 2 | 3 | 5 | 4 | 5 |
| **Ecosystem/tools** | 10% | 5 | 5 | 4 | 5 | 3 |
| **Future headroom** | 5% | 5 | 3 | 3 | 2 | 2 |
| **Weighted Score** | 100% | **3.85** | 3.35 | 3.25 | 3.35 | 2.85 |

### Decision

| Aspect | Selected |
|--------|----------|
| **MCU** | STM32H743VIT6 |
| **Package** | LQFP100 (hand-solderable) |
| **Clock** | 480 MHz (Cortex-M7) |

### Rationale

**STM32H743VIT6**

1. **ADC Quality**: 16-bit ADC với oversampling
   - Critical cho piezoelectric signal detection
   - 3.6 MSPS max rate
   - Hardware oversampling → effective 19-bit resolution
   - Better SNR than 12-bit alternatives

2. **Processing Headroom**: 480MHz Cortex-M7
   - DSP instructions cho signal filtering
   - Room for future features (FFT analysis, pattern recognition)
   - Single-cycle 32-bit multiply

3. **Memory**: 1MB SRAM + 2MB Flash
   - Đủ cho event logging (1000+ impacts)
   - No external memory needed
   - Firmware update via LoRa possible

4. **Peripherals**: Rich set
   - Hardware timers cho precise timestamping
   - DMA cho ADC → minimal CPU intervention
   - Multiple UARTs (debug + LoRa)

5. **Ecosystem**: Mature tooling
   - STM32CubeIDE free
   - Extensive HAL libraries
   - Large community, many examples
   - Team familiarity

### Trade-offs Accepted

| Trade-off | Mitigation |
|-----------|------------|
| Higher power (300mW vs 80mW) | 85hr runtime still 10× requirement |
| Higher cost ($12 vs $4-6) | Small % of total BOM ($23) |
| Overkill for current scope | Future features, easier development |

### Technical Specifications

```yaml
mcu:
  part_number: "STM32H743VIT6"
  manufacturer: "STMicroelectronics"
  core: "ARM Cortex-M7"
  frequency: "480 MHz"
  flash: "2 MB"
  sram: "1 MB (864KB + 128KB DTCM + 64KB ITCM)"
  package: "LQFP100 (14×14mm)"

adc_config:
  adc_used: "ADC1, ADC2"
  resolution: "16-bit"
  channels: "4 (one per PZT sensor)"
  sample_rate: "100 kSPS per channel"
  trigger: "Timer-based continuous"
  dma: "Circular buffer mode"

power:
  vdd: "3.3V"
  current_run: "~90mA @ 480MHz"
  current_sleep: "~25µA (Stop mode)"
  power_typical: "~300mW running"

interfaces:
  uart1: "LoRa SX1276 (115200 baud)"
  uart2: "Debug console"
  spi1: "Reserved (future expansion)"
  gpio: "Status LEDs, power control"
  adc: "4× PZT inputs via ADS1115"

operating_conditions:
  temp_range: "-40°C to +85°C"
  voltage_range: "1.71V to 3.6V"
```

### Why NOT External ADC (ADS1115)?

DfX review mentioned ADS1115, but re-evaluation shows:

| Aspect | STM32H743 Internal | ADS1115 External |
|--------|-------------------|------------------|
| Resolution | 16-bit | 16-bit |
| Sample rate | 3.6 MSPS | 860 SPS ❌ |
| Channels | Up to 20 | 4 |
| Latency | <1µs | ~1ms (I²C) |
| Cost | Included | +$3×2 |
| Complexity | Simpler | I²C bus, extra IC |

**Verdict**: Internal ADC sufficient. ADS1115 only needed if:
- Higher precision required (not our case)
- Isolation needed (not our case)

→ **Remove ADS1115 from BOM** (simplification opportunity)

### Updated BOM (MCU Subsystem)

| Item | Qty | Unit Cost | Total | Notes |
|------|-----|-----------|-------|-------|
| STM32H743VIT6 | 1 | $12 | $12 | LCSC |
| Crystal 25MHz | 1 | $0.30 | $0.30 | |
| Crystal 32.768kHz | 1 | $0.20 | $0.20 | RTC |
| LDO 3.3V (AMS1117) | 1 | $0.20 | $0.20 | |
| Decoupling caps | 20 | $0.02 | $0.40 | |
| Reset circuit | 1 | $0.10 | $0.10 | |
| Debug header (SWD) | 1 | $0.50 | $0.50 | |
| **TOTAL** | | | **~$14** | |

**Note**: This REPLACES ADS1115 ($6) → net change +$8 but simpler design.

### Block Diagram Update

```
┌─────────────────────────────────────────────────────────────┐
│                      STM32H743                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │  ADC1   │  │  ADC2   │  │  UART1  │  │  GPIO   │        │
│  │  Ch0-1  │  │  Ch0-1  │  │  LoRa   │  │  LEDs   │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
└───────┼────────────┼────────────┼────────────┼──────────────┘
        │            │            │            │
        ▼            ▼            ▼            ▼
   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
   │ PZT 1-2 │  │ PZT 3-4 │  │ SX1276  │  │ Status  │
   │ preamps │  │ preamps │  │  LoRa   │  │  LEDs   │
   └─────────┘  └─────────┘  └─────────┘  └─────────┘
```

### Firmware Architecture

```
┌─────────────────────────────────────────┐
│            Application Layer            │
│  • Impact detection state machine       │
│  • Event logging                        │
│  • Communication protocol               │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│            Processing Layer             │
│  • Signal filtering (IIR bandpass)      │
│  • Threshold detection                  │
│  • Debounce / validation                │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│              HAL Layer                  │
│  • ADC DMA driver                       │
│  • UART (LoRa AT commands)              │
│  • GPIO, Timers                         │
└─────────────────────────────────────────┘
```

### Verification Plan

| Test | Method | Pass Criteria |
|------|--------|---------------|
| ADC noise floor | Shorted input, 1000 samples | <2 LSB RMS |
| Sample timing | Scope on GPIO toggle | 100kSPS ±1% |
| Power consumption | Current meter | <100mA @ 3.3V |
| Temp range | Chamber test | Function at 0°C, 50°C |
| Flash endurance | 10K write cycles | No errors |

### Implications

1. **BOM Update**: Remove ADS1115, add STM32H743
2. **PCB Redesign**: Simpler (fewer ICs), but H743 needs more decoupling
3. **Firmware**: Use STM32CubeIDE, HAL libraries
4. **DfX Update**: MTBF recalculate (remove ADS1115 FIT)
5. **Prototype**: Order H743 dev board (NUCLEO-H743ZI2, ~$25)

### Related

- [[quality/dfx-review-mcu-box]] - Update BOM and MTBF
- DEC-002: PZT sensors connect to ADC inputs
- DEC-004: Power budget includes MCU at 300mW
- [[requirements/v1.4-summary]] - REL.01 MTBF requirement

---

## DEC-004: Power Distribution Architecture

**Date**: 2026-01-26
**Status**: ✅ APPROVED
**Decision Maker**: Design Team

### Context
Design power system for floating target platform. Must power:
- 4× Piezoelectric sensor preamps
- 1× Main processor (STM32 or ESP32)
- 1× Wireless transceiver (LoRa 500m range)
- Status LEDs, optional buzzer

Constraints from requirements:
- PWR.01: LiFePO4 battery (marine safe, no thermal runaway)
- PWR.02: ≥8 hours continuous operation
- PWR.03: Shore power + solar charging
- ENV.01: IP65+ enclosure

### Power Budget Analysis

| Subsystem | Voltage | Current | Power | Duty | Avg Power |
|-----------|---------|---------|-------|------|-----------|
| PZT preamps (4×) | 5V | 10mA×4 | 200mW | 100% | 200mW |
| STM32H7 processor | 3.3V | 150mA | 500mW | 100% | 500mW |
| LoRa SX1276 (TX) | 3.3V | 120mA | 400mW | 5% | 20mW |
| LoRa SX1276 (RX) | 3.3V | 12mA | 40mW | 95% | 38mW |
| Status LEDs | 5V | 20mA | 100mW | 10% | 10mW |
| DC-DC losses | - | - | ~15% | - | 115mW |
| **TOTAL** | | | | | **~900mW** |

**Runtime calculation**: 8hr × 0.9W = 7.2Wh minimum

### Options Considered

**Battery Chemistry**

| Option | Chemistry | Energy | Weight | Cost | Safety | Cycles |
|--------|-----------|--------|--------|------|--------|--------|
| A | **LiFePO4 12V 6Ah** | 72Wh | 0.9kg | 400K | ✅ Excellent | 2000+ |
| B | Li-ion 18650 3S2P | 44Wh | 0.3kg | 150K | ⚠️ Medium | 500 |
| C | Lead-acid 12V 7Ah | 84Wh | 2.5kg | 200K | ✅ Good | 300 |
| D | Li-polymer 11.1V 5Ah | 55Wh | 0.4kg | 250K | ⚠️ Low | 300 |

**Charging Architecture**

| Option | Method | Complexity | Cost | Pros | Cons |
|--------|--------|------------|------|------|------|
| 1 | Shore charger only | Low | 100K | Simple | No field extend |
| 2 | **Solar + shore** | Medium | 350K | Field autonomy | Panel mounting |
| 3 | Generator backup | High | 1M+ | Unlimited runtime | Noise, fuel, weight |

**Voltage Architecture**

| Option | Rails | Efficiency | Complexity |
|--------|-------|------------|------------|
| 1 | Single 5V (LDO from 12V) | ~40% | Low |
| 2 | **12V→5V→3.3V (buck cascade)** | ~85% | Medium |
| 3 | Multiple isolated DC-DC | ~90% | High |

### Decision

| Aspect | Selected |
|--------|----------|
| **Battery** | LiFePO4 12.8V 6Ah (Option A) |
| **Charging** | Solar 20W + Shore charger (Option 2) |
| **Voltage rails** | 12V→5V buck, 5V→3.3V LDO (Option 2) |

### Rationale

**LiFePO4 12.8V 6Ah**

1. **Safety**: Không cháy nổ khi ngập nước hoặc bị đạn bắn trúng
   - Thermal runaway temp: >270°C (vs Li-ion 150°C)
   - Meets PWR.01 requirement

2. **Runtime**: 72Wh ÷ 0.9W = **80 hours** (10× requirement)
   - Huge margin for display additions, GPS, etc.
   - Full day operation even with 50% degradation

3. **Cycle life**: 2000+ cycles vs 500 for Li-ion
   - 5+ years at daily use
   - Lower lifetime cost

4. **Availability**: Standard 12V form factor
   - Compatible with automotive/marine chargers
   - Drop-in replacement available

**Solar 20W Panel**

1. **Field autonomy**: Extend operation indefinitely on sunny days
   - 20W panel → ~15W usable → 16× system consumption
   - Can operate continuously without shore return

2. **Size**: 20W panel ~400×350mm
   - Fits on catamaran deck
   - Won't affect stability significantly

**Buck Converter Architecture**

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  LiFePO4    │     │  Buck DC-DC  │     │    LDO      │
│  12.8V 6Ah  │────►│  12V → 5V    │────►│  5V → 3.3V  │
└─────────────┘     │  (MP1584)    │     │  (AMS1117)  │
                    └──────────────┘     └─────────────┘
       │                   │                    │
       │                   │                    │
       ▼                   ▼                    ▼
  Direct 12V          5V Rail              3.3V Rail
  (future use)     • PZT preamps         • STM32H7
                   • Status LEDs         • LoRa SX1276
```

### Technical Specifications

```yaml
battery:
  type: "LiFePO4 (Lithium Iron Phosphate)"
  voltage: "12.8V nominal (4S configuration)"
  capacity: "6Ah (76.8Wh)"
  form_factor: "Standard 12V battery case"
  bms: "Built-in BMS with cell balancing"
  protection: "Over-charge, over-discharge, short circuit"
  operating_temp: "-20°C to +60°C"

solar:
  panel: "Monocrystalline 20W"
  voltage: "18V Vmp"
  dimensions: "400 × 350 × 25mm"
  controller: "PWM charge controller with LiFePO4 profile"

shore_charger:
  type: "LiFePO4 specific (14.6V CC/CV)"
  current: "2A (full charge in 3 hours)"
  connector: "XT60 or Anderson PowerPole"

power_distribution:
  main_switch: "Waterproof toggle with LED indicator"
  fuse: "5A blade fuse"
  buck_12v_5v:
    ic: "MP1584EN"
    efficiency: "92% @ 500mA"
    output: "5V 3A max"
  ldo_5v_3v3:
    ic: "AMS1117-3.3"
    dropout: "1.2V"
    output: "3.3V 1A max"

enclosure:
  type: "IP67 ABS junction box"
  size: "200 × 150 × 100mm"
  mounting: "Bolted to frame cross-member"
  cable_glands: "PG9 nylon (×6)"
```

### Bill of Materials (Power System)

| Item | Qty | Unit Cost | Total | Source |
|------|-----|-----------|-------|--------|
| LiFePO4 12.8V 6Ah | 1 | 400K | 400K | Local/Lazada |
| Solar panel 20W | 1 | 200K | 200K | Local solar shop |
| PWM charge controller | 1 | 80K | 80K | Local |
| Shore charger 14.6V 2A | 1 | 120K | 120K | Import |
| MP1584 buck module | 2 | 15K | 30K | Nhật Tảo |
| AMS1117-3.3 module | 2 | 10K | 20K | Nhật Tảo |
| IP67 enclosure 200×150 | 1 | 100K | 100K | Local |
| Cable glands PG9 | 6 | 5K | 30K | Local |
| XT60 connectors | 4 | 10K | 40K | Nhật Tảo |
| Blade fuse holder + fuses | 1 | 20K | 20K | Local |
| Wiring, terminals | 1 | 50K | 50K | Local |
| **TOTAL** | | | **1,090K VND** | (~$44 USD) |

### Power Budget Summary

| Metric | Value |
|--------|-------|
| System consumption | ~0.9W average |
| Battery capacity | 76.8Wh |
| Runtime (no solar) | **85 hours** |
| Solar input (peak) | 15W usable |
| Solar equilibrium | System runs indefinitely |
| Charge time (shore) | 3 hours (0→100%) |

### Safety Features

| Feature | Implementation |
|---------|----------------|
| Battery protection | Built-in BMS (over-charge, over-discharge, short) |
| Reverse polarity | Schottky diode on input |
| Overcurrent | 5A blade fuse |
| Water ingress | IP67 enclosure, cable glands |
| Low battery warning | MCU monitors voltage, LED + LoRa alert |
| Thermal | LiFePO4 inherently safe, no thermal runaway |

### Verification Plan

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Runtime | Discharge at 1W load | ≥8 hours (PWR.02) |
| Solar charge | Full sun, measure current | ≥1A charge rate |
| IP67 | 30min submersion 1m | No water ingress |
| Voltage stability | Load step 0→1A | <5% droop |
| Low temp | Operation at 0°C | System functional |

### Implications

1. **Weight**: Battery 0.9kg + panel 1.5kg + enclosure 0.5kg = ~3kg added
2. **Mounting**: Solar panel needs clear sky view on catamaran
3. **Maintenance**: Annual battery health check
4. **Spares**: Keep spare fuses, one backup battery

### Related
- [[requirements/v1.3-summary]] - PWR.01-PWR.05 requirements
- DEC-002: PZT sensors power via 5V rail
- DEC-003: Frame must support electronics enclosure + solar panel

---

## DEC-003: Frame Material Selection

**Date**: 2026-01-26
**Status**: ✅ APPROVED
**Decision Maker**: Design Team

### Context
Select material for target mounting frame. Frame must:
- Support 4 steel target plates (bia 7e ×2, 6c ×1, số 10 ×1)
- Survive marine environment (salt spray, UV, waves)
- Mount on catamaran pontoons (3.5-4.0m spacing)
- Allow chain-suspended targets to swing freely
- Be manufacturable locally in Vietnam
- Meet budget constraints (total system ≤60M VND)

### Options Considered

| Option | Material | Cost/m | Weight | Corrosion | Local Fab | Pros | Cons |
|--------|----------|--------|--------|-----------|-----------|------|------|
| A | **Steel (SS400) + Hot-dip galvanize** | 80K VND | Heavy (7.8 kg/m³) | Good (15-20yr) | ✅ Dễ | Rẻ nhất, dễ hàn, sẵn có | Nặng, cần bảo trì sơn |
| B | **Aluminum 6061-T6** | 350K VND | Light (2.7 kg/m³) | Excellent | ⚠️ TIG weld | Nhẹ, không gỉ | Đắt 4x, hàn khó hơn |
| C | **Stainless 316** | 450K VND | Heavy (8.0 kg/m³) | Excellent | ⚠️ Khó hàn | Không gỉ, bền | Đắt nhất, nặng |
| D | **HDPE plastic** | 200K VND | Light (0.95 kg/m³) | Excellent | ❌ Khó gia công | Không gỉ, nhẹ | Yếu, không hàn được |
| E | **Composite/FRP** | 300K VND | Light (1.8 kg/m³) | Excellent | ⚠️ Cần khuôn | Nhẹ, không gỉ | Khó sửa chữa, cần khuôn |

### Evaluation Matrix

| Criteria | Weight | A: Steel+Galv | B: Alu 6061 | C: SS316 | D: HDPE | E: FRP |
|----------|--------|---------------|-------------|----------|---------|--------|
| **Cost** | 25% | 4 | 2 | 1 | 3 | 2 |
| **Corrosion resistance** | 20% | 3 | 4 | 4 | 4 | 4 |
| **Local manufacturability** | 20% | 4 | 2 | 2 | 1 | 2 |
| **Strength/rigidity** | 15% | 4 | 3 | 4 | 1 | 3 |
| **Weight** | 10% | 1 | 4 | 1 | 4 | 3 |
| **Repairability** | 10% | 4 | 3 | 2 | 1 | 1 |
| **Weighted Score** | 100% | **3.45** | 2.75 | 2.30 | 2.35 | 2.45 |

### Decision

| Aspect | Selected |
|--------|----------|
| **Primary structure** | Option A: Steel SS400 + Hot-dip galvanize |
| **Hardware** | Stainless 316 bolts/nuts (prevent galvanic corrosion) |
| **Coating** | Marine epoxy primer + polyurethane topcoat |

### Rationale

**Steel SS400 + Hot-dip Galvanize**

1. **Cost leadership**: 80K VND/m vs 350K+ for alternatives
   - Frame estimate: ~20m of 50×50×3mm box section
   - Steel: 1.6M VND vs Aluminum: 7M VND = **77% savings**

2. **Local capability**: Mọi xưởng cơ khí đều hàn được
   - No special equipment needed (MIG/MAG standard)
   - Hot-dip galvanizing available in HCMC, Hanoi, Đà Nẵng

3. **Proven in marine**: Thousands of fishing boats use galvanized steel
   - 15-20 year lifespan with proper maintenance
   - Easy touch-up with cold galvanizing spray

4. **Rigidity**: Won't flex under wave motion
   - Important for consistent sensor readings
   - Aluminum would need larger sections for same stiffness

5. **Repairability**: Field-weldable if damaged
   - Any shipyard can repair
   - No special alloys or techniques

### Trade-offs Accepted

| Trade-off | Mitigation |
|-----------|------------|
| Heavy (~50kg frame) | Catamaran provides buoyancy margin |
| Requires maintenance | Annual inspection, touch-up protocol |
| Not "high-tech" | Appropriate technology for application |

### Technical Specifications

```yaml
frame_material:
  primary: "Steel SS400 (JIS) / A36 (ASTM)"
  section: "Box tube 50×50×3mm"
  finish: "Hot-dip galvanize (TCVN 5408:2007)"

galvanizing:
  standard: "TCVN 5408:2007 / ISO 1461"
  thickness: "≥85 µm (heavy duty)"
  supplier: "Local galvanizing plant"

secondary_coating:
  primer: "Zinc-rich epoxy primer"
  topcoat: "2K polyurethane (white/safety orange)"
  purpose: "UV protection, visibility"

hardware:
  bolts: "Stainless 316, M10/M12"
  nuts: "Stainless 316 with nylon insert"
  washers: "Neoprene-backed SS316"
  reason: "Prevent galvanic corrosion at joints"

frame_geometry:
  width: "4.0m (match catamaran spacing)"
  height: "2.5m (clear of waves)"
  depth: "0.5m (stability)"
  target_spacing: "0.8m center-to-center"
```

### Bill of Materials (Frame)

| Item | Qty | Unit | Unit Cost | Total | Source |
|------|-----|------|-----------|-------|--------|
| Steel box 50×50×3mm | 25 | m | 65K | 1,625K | Local steel |
| Cutting, welding | 1 | job | 500K | 500K | Local shop |
| Hot-dip galvanize | 50 | kg | 15K | 750K | HCMC galv plant |
| Marine epoxy primer | 2 | L | 150K | 300K | Local paint |
| PU topcoat | 2 | L | 200K | 400K | Local paint |
| SS316 hardware set | 1 | set | 300K | 300K | Import |
| Chain + shackles | 8 | m | 50K | 400K | Local marine |
| **TOTAL** | | | | **4,275K VND** | (~$170 USD) |

### Maintenance Plan

| Interval | Action |
|----------|--------|
| After each use | Freshwater rinse if possible |
| Monthly | Visual inspection for rust spots |
| 6 months | Touch-up any damaged galvanizing |
| Annually | Full inspection, repaint if needed |
| 5 years | Consider re-galvanizing or replacement |

### Verification Plan

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Weld quality | Visual + dye penetrant | No cracks, full penetration |
| Galvanize thickness | Magnetic gauge | ≥85 µm |
| Load test | 2× target weight | No permanent deformation |
| Salt spray | 500hr ASTM B117 (sample) | No red rust |

### Implications

1. **Weight budget**: Frame ~50kg, add to buoyancy calculation
2. **Transport**: Can disassemble into 2m sections for truck
3. **Assembly**: Bolt-together joints (no field welding needed)
4. **Spares**: Keep cold galvanizing spray + touch-up paint on site

### Related
- [[requirements/v1.3-summary]] - PLT platform requirements
- [[design/mechanical-frame]] - Detailed frame design (to be created)
- DEC-002: Impact sensor mounting locations

---

## DEC-002: Impact Sensor Selection (Supersedes DEC-001)

**Date**: 2026-01-26
**Status**: ✅ APPROVED
**Decision Maker**: Design Team

### Context
Re-evaluate sensor approach for bullet impact detection. DEC-001 selected MEMS microphone, but deeper analysis revealed fundamental limitation.

### Key Insight: Mental Model Shift

```
OLD ASSUMPTION: "Need microphone for acoustic detection"
NEW INSIGHT:    "Need IMPACT DETECTOR - piezoelectric is better fit"
```

The 140dB SPL requirement (AS.07) was the **binding constraint** that standard MEMS couldn't meet. Piezoelectric sensors solve this by detecting **vibration instead of sound pressure** - no SPL limit applies.

### Options Re-evaluated

| Criteria | MEMS (IM69D130) | Piezoelectric (PZT) |
|----------|-----------------|---------------------|
| **140dB SPL (AS.07)** | ❌ 130dB max | ✅ No limit (vibration-based) |
| **SNR 60dB** | ✅ 69dB | ✅ High signal (direct contact) |
| **Cost** | $3-4/unit | **$0.5-2/unit** |
| **Availability** | Import only | **Local (Nhật Tảo)** |
| **Waterproof** | Difficult (acoustic port) | **Easy (epoxy potting)** |
| **Mounting** | Needs acoustic path | Direct to steel plate |
| **Verdict** | ❌ Fails AS.07 | ✅ **RECOMMENDED** |

### Decision

| Aspect | Selected |
|--------|----------|
| **Sensor Type** | Piezoelectric (PZT) disc |
| **Mounting** | Epoxy-bonded to steel target plate |
| **Quantity** | 1 per target (4 total) |

### Rationale

1. **No SPL Limit**: PZT detects mechanical vibration, not air pressure
   - Bullet impact → plate vibration → voltage signal
   - No saturation possible at any impact energy

2. **Superior Signal**: Direct mechanical coupling to target
   - Higher SNR than air-coupled microphone
   - Less affected by wind/wave noise

3. **Cost**: 80% cheaper ($2 vs $5)
   - Local sourcing from Nhật Tảo market
   - Reduces import dependency

4. **Waterproofing**: Trivial
   - Fully encapsulate in marine epoxy
   - No acoustic port to seal

5. **Simplicity**: Fewer failure modes
   - No MEMS diaphragm to damage
   - No acoustic membrane to degrade

### Technical Specifications

```yaml
sensor_type: "Piezoelectric ceramic disc"
material: "PZT (Lead Zirconate Titanate)"
diameter: "20-35mm"
resonant_freq: "2-4 kHz typical"
output: "Analog voltage (mV range)"

mounting:
  method: "Epoxy bond to back of steel plate"
  epoxy: "Marine-grade 2-part epoxy"
  location: "Center of each target"

signal_conditioning:
  preamp: "High-impedance buffer (10MΩ input)"
  filter: "Bandpass 500Hz - 10kHz"
  threshold: "Adjustable, calibrated per target"

sourcing:
  location: "Nhật Tảo Electronics Market, HCMC"
  cost: "15,000 - 40,000 VND/piece"
  availability: "Stock items"
```

### Updated BOM (Impact Detection Subsystem)

| Item | Qty | Unit Cost | Total | Source |
|------|-----|-----------|-------|--------|
| PZT disc 27mm | 4 | $1.50 | $6 | Nhật Tảo |
| Marine epoxy | 1 | $5 | $5 | Local |
| Shielded cable | 8m | $1/m | $8 | Local |
| Op-amp preamp PCB | 1 | $10 | $10 | Local fab |
| Connector (M8) | 4 | $3 | $12 | Import |
| **TOTAL** | | | **$41** | |

**Cost reduction**: $98 (MEMS) → $41 (PZT) = **58% savings**

### Trade-offs Accepted

- Narrower frequency response than MEMS (acceptable - impact is wideband)
- Requires calibration per target (one-time setup)
- Less standardized than MEMS (mitigated by simple interface)

### Implications

1. **DEC-001 SUPERSEDED**: MEMS approach abandoned
2. **Requirements update**: AS.01 change "Microphone" → "Impact sensor (Piezoelectric)"
3. **Simpler electronics**: No PDM codec needed, analog signal path
4. **Local sourcing**: Reduces import dependency, faster prototyping
5. **Array config**: Simplified to 1 sensor per target (no TDOA needed)

### Verification Plan

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Impact detection | Fire all calibers at 200m | ≥95% detection |
| False positive | 1 hour sea state 3, no fire | <5% false triggers |
| Waterproof | 24hr submersion | No degradation |
| Durability | 1000 impacts | Sensor functional |

### Lessons Learned

> **"Question the problem framing before solving"**
>
> DEC-001 assumed "acoustic = microphone" without questioning whether sound pressure was the right physical quantity to measure. The constraint (140dB SPL) should have triggered re-examination of the sensing principle.

### Related
- [[requirements/v1.3-summary]] - AS.01 needs update
- DEC-001 - Superseded by this decision

---

## DEC-001: Acoustic Sensor Selection

**Date**: 2026-01-26
**Status**: ⚠️ SUPERSEDED by DEC-002
**Decision Maker**: Design Team

### Context
Select microphone type for bullet impact detection on floating naval target system. Critical requirements:
- Detect impacts from 5.56mm, 7.62×39mm, 7.62×54mmR at 150-400m
- Survive marine environment (salt spray, humidity, waves)
- Achieve SNR ≥20dB in Sea State 3 conditions
- Handle SPL ≥140dB without saturation

### Options Considered

**Microphone Type**
| Option | Type | Cost | SPL Max | Freq Range | Pros | Cons |
|--------|------|------|---------|------------|------|------|
| A | MEMS (ICS-40730) | $3 | 130 dB | 50Hz-20kHz | Compact, cheap, digital output | Lower SPL max |
| B | MEMS (SPH0641LU4H) | $5 | 140 dB | 50Hz-20kHz | High SPL, digital PDM | Slightly higher cost |
| C | Electret (POM-2246P) | $2 | 145 dB | 20Hz-16kHz | Highest SPL, proven | Analog, needs preamp, larger |
| D | Piezo contact | $4 | >150 dB | 100Hz-10kHz | Directly mounted, very high SPL | Narrow bandwidth, mounting complexity |

**Mounting Configuration**
| Option | Config | Mics/Target | Total | Pros | Cons |
|--------|--------|-------------|-------|------|------|
| 1 | Single mic per target | 1 | 4 | Lowest cost, simple | No redundancy |
| 2 | Dual mic per target | 2 | 8 | Redundancy, cross-check | Higher cost, wiring |
| 3 | Shared array | 4-5 shared | 5 | Impact localization possible | Complex processing |

### Decision

| Aspect | Selected | Part Number |
|--------|----------|-------------|
| **Microphone Type** | Option B | Knowles SPH0641LU4H-1 |
| **Mounting Config** | Option 3 | 5-mic shared array |

### Rationale

**SPH0641LU4H-1 MEMS Microphone**
- **140 dB SPL**: Meets AS.07 requirement exactly, no saturation on impact
- **Digital PDM output**: Noise-immune signal path to processor, no analog preamp needed
- **50Hz-20kHz**: Exceeds AS.06 requirement (100Hz-20kHz)
- **Small package**: 3.5×2.65×0.98mm, easy waterproof enclosure
- **$5 cost**: Acceptable for 5-unit array ($25 total)
- **Wide availability**: Stocked at Mouser, Digi-Key, LCSC

**5-Microphone Shared Array**
- Enables **time-difference-of-arrival (TDOA)** impact localization
- Can distinguish which target was hit even with near-simultaneous impacts
- Provides redundancy (system works with 4/5 mics)
- Future upgrade path: miss detection with triangulation

### Trade-offs Accepted
- SPH0641LU4H costs $3 more than basic MEMS ($5 vs $2) - accepted for 140dB SPL
- 5-mic array more complex than 1-per-target - accepted for localization capability
- MEMS less proven than electret in military - mitigated by waterproof enclosure design

### Technical Specifications

```yaml
selected_part:
  manufacturer: "Knowles"
  part_number: "SPH0641LU4H-1"
  type: "MEMS PDM microphone"

specifications:
  spl_max: "140 dB"
  snr: "65 dB (A-weighted)"
  frequency_range: "50 Hz - 20 kHz"
  sensitivity: "-26 dBFS @ 1kHz, 94dB SPL"
  output: "PDM digital"
  supply_voltage: "1.6V - 3.6V"
  current: "600 µA typical"
  package: "3.5 × 2.65 × 0.98 mm"
  operating_temp: "-40°C to +100°C"

array_configuration:
  total_mics: 5
  placement:
    - "MIC1: Left edge of frame"
    - "MIC2: Center-left (between target 1 & 2)"
    - "MIC3: Center (between target 2 & 3)"
    - "MIC4: Center-right (between target 3 & 4)"
    - "MIC5: Right edge of frame"
  spacing: "~1m between adjacent mics"

processing:
  algorithm: "TDOA triangulation"
  sample_rate: "48 kHz per mic"
  detection_window: "10ms after threshold trigger"
  processor: "STM32H7 or equivalent"
```

### Waterproofing Design

| Component | Protection | Method |
|-----------|------------|--------|
| Microphone | IP67 | Acoustic vent membrane (Gore-Tex style) |
| Connector | IP68 | M8 circular connector, sealed |
| Cable | Marine grade | Polyurethane jacket, UV resistant |
| Enclosure | IP65 | ABS housing, O-ring sealed |

### Bill of Materials (Acoustic Subsystem)

| Item | Qty | Unit Cost | Total | Source |
|------|-----|-----------|-------|--------|
| SPH0641LU4H-1 | 5 | $5 | $25 | Mouser/LCSC |
| Acoustic membrane | 5 | $2 | $10 | Import |
| Mic enclosure (ABS) | 5 | $3 | $15 | Local 3D print |
| M8 connector pair | 5 | $4 | $20 | Import |
| Cable (per meter) | 10m | $2 | $20 | Local |
| PDM-to-I2S codec | 1 | $8 | $8 | Import |
| **TOTAL** | | | **$98** | |

### Verification Plan

| Test | Method | Pass Criteria |
|------|--------|---------------|
| SPL handling | Fire at 2m from mic | No saturation/clipping |
| SNR | Measure at Sea State 3 | ≥20 dB (AS.08) |
| Detection accuracy | 100 rounds, all calibers | ≥95% hit detection (AS.09) |
| False positive | 1 hour no-fire monitoring | <5% false triggers (AS.10) |
| Waterproof | IP67 submersion test | No water ingress |
| Localization | Fire at each target | Correct target ID ≥90% |

### Implications
- PCB design must include PDM interface (clock + data per mic)
- Need STM32H7 or similar for multi-channel PDM processing
- Enclosure design requires acoustic membrane integration
- Software: implement TDOA algorithm for impact localization
- Calibration procedure needed for array geometry

### Related
- [[requirements/v1.3-summary]] - AS.01-AS.11 acoustic requirements
- [[design/acoustic-system]] - Detailed acoustic system design
- DEC-002: Processing platform selection (pending)

---

## Decision Template

```markdown
## DEC-XXX: [Title]

**Date**: YYYY-MM-DD
**Status**: 🟡 PENDING / ✅ APPROVED / ❌ REJECTED
**Decision Maker**: [Name/Role]

### Context
[Why this decision is needed]

### Options Considered
1. [Option A] - [Pros/Cons]
2. [Option B] - [Pros/Cons]

### Decision
**[Selected option]**

### Rationale
[Why this option was selected]

### Trade-offs Accepted
[What we gave up]

### Implications
[What changes as a result]

### Related
- [Links to related decisions/documents]
```

---

---

## Related Documents

### Requirements
- [[requirements/srs-v2.0]] - Source requirements for decisions
- [[requirements/requirements-summary]] - Quick reference

### Design (Decision Outputs)
- [[design/function-structure]] - Function decomposition
- [[design/morphological-matrix]] - Concept variants
- [[design/vdi-2225-evaluation]] - Concept evaluation (DEC-006 source)
- [[design/mtbf-improvement-plan]] - v2 reliability roadmap

### Quality
- [[quality/gate-2-prep]] - Gate 2 status
- [[quality/dfx-review-mcu-box]] - DfX analysis
- [[quality/fmea-bb01]] - Failure mode analysis

### Detailed Decision Records
- [[decisions/DEC-002-acoustic-sensor-analysis]] - Full sensor analysis

---

*Last updated: 2026-01-27*
*DEC-006 added: Concept Selection (V1 Baseline at 90.8%)*
*Decisions: DEC-001 (superseded) → DEC-002 (PZT) → DEC-003 (Steel) → DEC-004 (LiFePO4) → DEC-005 (STM32H7) → DEC-006 (V1 Concept)*
