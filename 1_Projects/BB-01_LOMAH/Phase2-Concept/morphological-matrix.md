# Morphological Matrix: BB-01

> **Version**: 1.0
> **Date**: 2026-01-26
> **Phase**: Conceptual Design (PB2b)
> **Skill Used**: [[skills/pb2b-morphological-matrix]]
> **Input**: [[design/function-structure]]

---

## 1. Solution Principles

### F1: Detect Mechanical Impact

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Piezoelectric (PZT) | Simple, passive, no saturation, cheap | High impedance, needs buffer | High |
| 2 | MEMS Accelerometer | Digital output, multi-axis | Power needed, may saturate | High |
| 3 | Strain Gauge | Very precise, linear | Complex bridge circuit, drift | Medium |
| 4 | Electret Microphone | Off-shelf, cheap | SPL saturation at impact | Low |

**Selected for Matrix**: PZT, Accelerometer, Strain Gauge

### F2: Amplify Sensor Signal

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Charge Amplifier | Optimal for PZT, low noise | Specialized design | High |
| 2 | Instrumentation Amp | High CMRR, precise | Higher cost | High |
| 3 | Op-amp (TL074) | Cheap, available, flexible | Needs careful design | High |

**Selected for Matrix**: Charge Amp, Instr. Amp, Op-amp

### F3: Digitize Analog Signal

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | MCU Internal ADC | No extra parts, simple | Resolution limited | High |
| 2 | External ADC (ADS1115) | Higher resolution, I2C | Extra cost, latency | Medium |
| 3 | Comparator Only | Simplest, fast | No amplitude info | Medium |

**Selected for Matrix**: Internal ADC, External ADC, Comparator

### F4: Process Impact Data

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | STM32H7 | High performance, local supply | Complex | High |
| 2 | STM32F4 | Good balance, proven | Less headroom | High |
| 3 | ESP32 | WiFi/BLE built-in, cheap | Less deterministic | High |
| 4 | Arduino (ATmega) | Simple, easy | Limited processing | Medium |

**Selected for Matrix**: STM32H7, STM32F4, ESP32

### F5: Identify Target

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Dedicated Channel/Sensor | Simple, reliable | More hardware | High |
| 2 | Time-of-Arrival (ToA) | Fewer sensors | Complex algorithm | Medium |
| 3 | Amplitude Comparison | Simple algorithm | Less accurate | Medium |

**Selected for Matrix**: Dedicated Channel, ToA, Amplitude

### F7: Transmit Data Wirelessly

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | LoRa (SX1276) | Long range, low power | Low data rate | High |
| 2 | WiFi | High bandwidth, standard | Short range, power hungry | Medium |
| 3 | Cellular (4G) | Infrastructure-free | Cost, complexity | Low |
| 4 | 433MHz FSK | Simple, cheap | Less robust | Medium |

**Selected for Matrix**: LoRa, WiFi, 433MHz FSK

### F8: Store Electrical Energy

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | LiFePO4 | Safe, long life, marine-safe | Lower density | High |
| 2 | Li-ion (18650) | High density, cheap | Fire risk with water | Medium |
| 3 | Lead-acid (SLA) | Cheap, robust | Heavy, short life | Medium |
| 4 | Supercapacitor | Fast charge, long life | Low energy | Low |

**Selected for Matrix**: LiFePO4, Li-ion, Lead-acid

### F9: Convert Solar Energy

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Monocrystalline Panel | High efficiency | Higher cost | High |
| 2 | Polycrystalline Panel | Cheaper | Lower efficiency | High |
| 3 | None (Shore charge only) | Simplest, cheapest | Limited autonomy | High |

**Selected for Matrix**: Mono Panel, Poly Panel, None

### F10: Regulate Power Supply

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Buck Converter | Efficient, handles range | Switching noise | High |
| 2 | LDO | Simple, low noise | Heat at voltage drop | High |
| 3 | Buck-Boost | Handles under/over | More complex | Medium |

**Selected for Matrix**: Buck, LDO, Buck-Boost

### F11: Protect Electronics

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Sealed Enclosure (IP67) | Standard, serviceable | Larger, heavier | High |
| 2 | Potting Compound | Compact, rugged | Not serviceable | Medium |
| 3 | Conformal Coating | Light, allows access | Less protection | Medium |

**Selected for Matrix**: Sealed Enclosure, Potting, Conformal

### F12: Support Target Plates

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Chain Suspension | Free swing, acoustic-friendly | Inspection needed | High |
| 2 | Cable Suspension | Lighter, flexible | Less durable | Medium |
| 3 | Rigid Mount | Simple | Dampens vibration | Low |

**Selected for Matrix**: Chain, Cable, Rigid

### F13: Provide Platform Stability

| # | Solution | Pros | Cons | Feasibility |
|---|----------|------|------|-------------|
| 1 | Catamaran | Very stable, wide deck | Complex build | High |
| 2 | Trimaran | Good stability | More hulls | Medium |
| 3 | Monohull + Outriggers | Simpler hull | Less stable | Medium |
| 4 | Pontoon Raft | Simplest | Limited sea state | Medium |

**Selected for Matrix**: Catamaran, Trimaran, Pontoon

---

## 2. Morphological Matrix

| Function | Sol 1 | Sol 2 | Sol 3 |
|----------|-------|-------|-------|
| F1: Detect impact | **PZT** | Accelerometer | Strain Gauge |
| F2: Amplify signal | **Charge Amp** | Instr. Amp | Op-amp |
| F3: Digitize signal | **Internal ADC** | External ADC | Comparator |
| F4: Process data | **STM32H7** | STM32F4 | ESP32 |
| F5: Identify target | **Dedicated Ch** | ToA | Amplitude |
| F7: Transmit wireless | **LoRa** | WiFi | 433MHz FSK |
| F8: Store energy | **LiFePO4** | Li-ion | Lead-acid |
| F9: Solar convert | **Mono Panel** | Poly Panel | None |
| F10: Regulate power | **Buck** | LDO | Buck-Boost |
| F11: Protect electronics | **Enclosure** | Potting | Conformal |
| F12: Support targets | **Chain** | Cable | Rigid |
| F13: Platform stability | **Catamaran** | Trimaran | Pontoon |

---

## 3. Compatibility Analysis

| Combination | Compatible? | Notes |
|-------------|-------------|-------|
| PZT + Charge Amp | ✅ Yes | Optimal pairing |
| PZT + Op-amp | ✅ Yes | Needs high-Z input buffer |
| Accelerometer + Charge Amp | ❌ No | Accel has voltage output |
| STM32H7 + Internal ADC | ✅ Yes | 16-bit ADC built-in |
| ESP32 + LoRa | ⚠️ Possible | Needs external SX1276 |
| ESP32 + WiFi | ✅ Yes | Built-in WiFi |
| LiFePO4 + Marine | ✅ Yes | Safe chemistry for water |
| Li-ion + Marine | ⚠️ Risk | Fire risk if water ingress |
| Chain + Acoustic | ✅ Yes | Free swing enables detection |
| Rigid + Acoustic | ❌ No | Dampens impact vibration |
| Catamaran + Sea State 3 | ✅ Yes | Designed for stability |
| Pontoon + Sea State 3 | ⚠️ Marginal | May be unstable |

---

## 4. Concept Variants

### V1: Baseline (Current Design)
*Proven technologies per existing decisions*

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1: Detect impact | PZT | DEC-002 selected |
| F2: Amplify signal | Op-amp (TL074) | DEC-005 selected |
| F3: Digitize signal | Internal ADC | STM32H7 16-bit |
| F4: Process data | STM32H743 | DEC-005 selected |
| F5: Identify target | Dedicated Channel | 4 sensors, 4 channels |
| F7: Transmit wireless | LoRa SX1276 | DEC-005 selected |
| F8: Store energy | LiFePO4 12.8V 6Ah | DEC-004 selected |
| F9: Solar convert | Mono 20W | DEC-004 selected |
| F10: Regulate power | Buck (MP1584) | DEC-005 selected |
| F11: Protect electronics | Sealed Enclosure IP67 | Standard approach |
| F12: Support targets | Chain Suspension | MNT.01 requirement |
| F13: Platform stability | Catamaran | PLT.01 requirement |

**Character**: Proven design based on completed Gate 1 decisions. PZT sensors, STM32H7 processing, LoRa communication, LiFePO4 power with solar. All components locally available.

**Est. cost**: ~27M VND (~$1,076)
**Key risk**: PZT signal conditioning complexity

---

### V2: Cost-Optimized
*Minimum viable product*

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1: Detect impact | PZT | Cheapest sensor |
| F2: Amplify signal | Op-amp (LM358) | Cheapest amp |
| F3: Digitize signal | Internal ADC | No extra parts |
| F4: Process data | STM32F4 | Cheaper MCU |
| F5: Identify target | Dedicated Channel | Simple |
| F7: Transmit wireless | 433MHz FSK | Cheapest radio |
| F8: Store energy | Lead-acid 12V 7Ah | Cheapest battery |
| F9: Solar convert | None | Shore charge only |
| F10: Regulate power | LDO (7805) | Cheapest regulator |
| F11: Protect electronics | Conformal Coating | Cheapest protection |
| F12: Support targets | Chain Suspension | Required |
| F13: Platform stability | Pontoon Raft | Simplest build |

**Character**: Stripped-down version for budget-constrained deployment. Sacrifices autonomy (no solar), range (433MHz vs LoRa), and sea state capability (pontoon). Suitable for calm water training only.

**Est. cost**: ~15M VND (~$600)
**Key risk**: Limited sea state capability (SS2 max), shorter range

---

### V3: Performance-Optimized
*Maximum capability*

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1: Detect impact | PZT + Accelerometer | Redundant sensing |
| F2: Amplify signal | Charge Amp | Optimal for PZT |
| F3: Digitize signal | External ADC (24-bit) | Best resolution |
| F4: Process data | STM32H7 | Highest performance |
| F5: Identify target | ToA + Dedicated | Dual method |
| F7: Transmit wireless | LoRa + WiFi | Dual radio |
| F8: Store energy | LiFePO4 12.8V 12Ah | Double capacity |
| F9: Solar convert | Mono 40W | Double solar |
| F10: Regulate power | Buck-Boost | Full voltage range |
| F11: Protect electronics | Potting | Maximum protection |
| F12: Support targets | Chain Suspension | Required |
| F13: Platform stability | Catamaran (larger) | Sea State 4+ |

**Character**: Over-engineered for maximum reliability and capability. Redundant sensors, dual radio, extended battery life (170+ hours), Sea State 4 capable. Suitable for open ocean deployment.

**Est. cost**: ~55M VND (~$2,200)
**Key risk**: Complexity, maintainability (potted electronics)

---

### V4: WiFi-Centric
*Alternative architecture*

| Function | Solution | Rationale |
|----------|----------|-----------|
| F1: Detect impact | Accelerometer | Digital output |
| F2: Amplify signal | (Not needed) | Digital sensor |
| F3: Digitize signal | (In sensor) | Digital sensor |
| F4: Process data | ESP32 | Built-in WiFi |
| F5: Identify target | Dedicated Channel | Simple |
| F7: Transmit wireless | WiFi (ESP32) | High bandwidth |
| F8: Store energy | Li-ion 11.1V 6Ah | Higher density |
| F9: Solar convert | Poly 20W | Cost-effective |
| F10: Regulate power | Buck | Standard |
| F11: Protect electronics | Sealed Enclosure | Standard |
| F12: Support targets | Chain Suspension | Required |
| F13: Platform stability | Catamaran | Required |

**Character**: Modern IoT approach using digital sensors and WiFi. Simpler signal chain (no analog conditioning). Limited range (~200m) requires shore station proximity. Higher data throughput for future features (waveform capture).

**Est. cost**: ~22M VND (~$880)
**Key risk**: WiFi range limitation, accelerometer saturation at impact

---

## 5. Variant Comparison

| Aspect | V1 Baseline | V2 Cost | V3 Perf | V4 WiFi |
|--------|-------------|---------|---------|---------|
| **Cost** | ~27M | ~15M | ~55M | ~22M |
| **Range** | 500m | 300m | 600m+ | 200m |
| **Sea State** | SS3 | SS2 | SS4 | SS3 |
| **Autonomy** | 85hr | 8hr | 170hr | 40hr |
| **Complexity** | Medium | Low | High | Low |
| **Local Content** | 70% | 80% | 60% | 65% |
| **TRL** | 6 | 7 | 4 | 5 |
| **Risk** | Low | Medium | High | Medium |

---

## 6. Variant Visualization

```
                    Cost
                     ▲
                     │
            V2 ●     │
           (15M)     │
                     │     ● V4
                     │    (22M)
                     │         ● V1
                     │        (27M)
                     │
                     │                    ● V3
                     │                   (55M)
                     └────────────────────────► Performance
                    Low                       High
```

---

## 7. Recommendation for VDI 2225

Proceed to VDI 2225 evaluation with:

| Variant | Include? | Rationale |
|---------|----------|-----------|
| V1 Baseline | ✅ Yes | Current design, balanced |
| V2 Cost | ✅ Yes | Budget alternative |
| V3 Performance | ⚠️ Maybe | Only if budget allows |
| V4 WiFi | ✅ Yes | Alternative architecture |

**Primary comparison**: V1 vs V2 vs V4
**V3 considered only if**: Customer requires Sea State 4 or extended autonomy

---

## 8. Next Steps

- [ ] Proceed to VDI 2225 evaluation (PB2c)
- [ ] Define evaluation criteria from KPPs/KSAs
- [ ] Weight criteria with stakeholders
- [ ] Score variants and select winner

---

---

## Related Documents

### Inputs
- [[design/function-structure]] - Function decomposition (PB2a)
- [[requirements/srs-v2.0]] - System requirements

### Outputs
- [[design/vdi-2225-evaluation]] - Concept evaluation (PB2c)
- [[decisions/log]] - DEC-006 concept selection

### Component Decisions
- [[decisions/log#DEC-002]] - PZT sensor selection
- [[decisions/log#DEC-003]] - Frame material
- [[decisions/log#DEC-004]] - Power system
- [[decisions/log#DEC-005]] - MCU selection

---

*Morphological Matrix v1.0*
*BB-01 Naval Target System*
*4 concept variants generated*
*Ready for VDI 2225 evaluation*
