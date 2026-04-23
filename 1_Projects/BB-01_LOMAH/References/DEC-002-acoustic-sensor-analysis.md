# DEC-002: Acoustic Sensor Selection Analysis

**Date**: 2025-01-26
**Status**: ANALYSIS COMPLETE - Ready for Decision
**Related Requirements**: AS.01-AS.08, SP.01-SP.07

---

## Context

BB-01 LOMAH system requires sensors to detect bullet impact on chain-hung steel targets. The acoustic signature is a characteristic "CLANG" sound when projectiles strike AR400+ steel plates.

**Critical Requirements**:
| Spec | Value | Criticality |
|------|-------|-------------|
| AS.06 Frequency | 100Hz - 20kHz | HIGH |
| AS.07 SPL max | ≥140dB | **CRITICAL** |
| AS.08 SNR | ≥60dB | HIGH |
| SP.03 Latency | ≤100ms | HIGH |
| SP.04 False positive | ≤2% | HIGH |

---

## Options Analyzed

### Option 1: MEMS Microphone (Standard)
**Examples**: Infineon IM69D130, IM72D128, TDK ICS-43434

| Parameter | IM69D130 | IM72D128 | Requirement | Pass? |
|-----------|----------|----------|-------------|-------|
| SNR | 69dB(A) | 72dB(A) | ≥60dB | ✅ |
| AOP (SPL max) | 130dB | 128dB | ≥140dB | ❌ |
| Frequency | 28Hz-20kHz | 20Hz-20kHz | 100Hz-20kHz | ✅ |
| Dynamic range | 105dB | 104dB | - | ✅ |
| Interface | Digital PDM | Digital PDM | - | ✅ |
| Price | ~$2-3 | ~$3-4 | - | ✅ |

**Problem**: Standard MEMS microphones have AOP of 128-132dB, but requirement is ≥140dB. Bullet impact on steel can generate SPL >140dB at close range.

**Risk**: Microphone saturation or damage at high SPL events.

---

### Option 2: High-SPL MEMS Microphone
**Examples**: sensiBel SBM100B, NASA-modified Knowles SiSonic

| Parameter | SBM100B | NASA Knowles | Requirement | Pass? |
|-----------|---------|--------------|-------------|-------|
| SNR | 80dB(A) | ~70dB | ≥60dB | ✅ |
| AOP (SPL max) | 146dB | 150-160dB | ≥140dB | ✅ |
| Frequency | Full audio | 100Hz-100kHz | 100Hz-20kHz | ✅ |
| Availability | Limited | Custom/NASA | - | ⚠️ |
| Price | ~$10-20 | Unknown | - | ⚠️ |

**Advantage**: Meets all acoustic specs including 140dB requirement.

**Problem**: 
- SBM100B: Limited availability, higher cost, may not be available in Vietnam
- NASA-modified: Custom design, not commercially available

---

### Option 3: Piezoelectric Contact Sensor
**Examples**: PZT disk, PVDF film, commercial vibration sensors

| Parameter | PZT Disk | PVDF Film | Requirement | Pass? |
|-----------|----------|-----------|-------------|-------|
| SPL tolerance | Unlimited* | Unlimited* | ≥140dB | ✅ |
| Sensitivity | High | Medium-High | - | ✅ |
| Mounting | Contact | Adhesive | - | Different |
| Waterproofing | Easy | Moderate | IP65 | ✅ |
| Price | ~$0.5-2 | ~$1-5 | - | ✅ |

*Piezoelectric sensors detect mechanical vibration, not air pressure - no SPL limit

**Advantages**:
- No SPL saturation risk (detects vibration, not sound pressure)
- Proven for steel plate impact detection (academic research confirms)
- Direct contact = higher signal strength
- Naturally waterproof when potted
- Very low cost
- Available locally (standard components)

**Disadvantages**:
- Requires mechanical contact with target
- Output voltage can be high (±90V spikes) - needs conditioning
- Less directional than microphone
- Different signal processing than acoustic

---

### Option 4: Hybrid Approach
**Configuration**: Piezoelectric primary + MEMS backup

Use piezoelectric sensor for impact detection (high SPL tolerance) with optional MEMS microphone for audio verification or environmental monitoring.

| Aspect | Piezo | MEMS | Combined |
|--------|-------|------|----------|
| Detection | Primary | Backup | Redundant |
| SPL range | Unlimited | <130dB | Full range |
| Signal type | Vibration | Acoustic | Both |
| Cost | $1-2 | $3-4 | $4-6 |

---

## Recommendation

### Primary: **Option 3 - Piezoelectric Contact Sensor**

**Rationale**:
1. **Meets 140dB requirement**: No saturation risk since it detects vibration, not sound pressure
2. **Proven technology**: Academic research confirms piezoelectric sensors work for steel plate impact detection
3. **Cost-effective**: $0.5-2 per sensor vs $10+ for high-SPL MEMS
4. **Locally available**: Standard PZT disks available at Nhật Tảo, Hà Đông electronics markets
5. **Simple waterproofing**: Pot in epoxy = IP67+ easily achieved
6. **Chain-hung targets advantage**: Free vibration of chain-hung targets creates strong mechanical signature detectable by contact sensor

**Implementation**:
- Mount PZT disk on rear face of each steel target (same location as originally planned for microphone)
- Use voltage divider + clamping circuit to condition high-voltage spikes
- Connect to ADC input on MCU
- Simple threshold + time-of-arrival algorithm for detection

### Fallback: **Option 1 - Standard MEMS with Attenuation**

If piezoelectric approach fails testing, use IM69D130 with:
- Acoustic attenuation (foam/mesh cover) to reduce SPL at sensor
- Accept risk of saturation on direct hits
- Tune detection algorithm for saturated signals

---

## Trade-offs Accepted

| What We Gain | What We Sacrifice |
|--------------|-------------------|
| 140dB+ tolerance | Acoustic frequency analysis |
| Lower cost | "Pure" acoustic detection |
| Local availability | Premium MEMS features |
| Simple waterproofing | Omnidirectional pickup |

---

## Next Steps

1. **Prototype test**: Mount PZT disk on AR400 sample, fire test rounds
2. **Signal conditioning**: Design voltage divider/clamping circuit
3. **Algorithm development**: Threshold + debounce logic
4. **Waterproofing test**: Epoxy potting, IP65 verification
5. **Comparison test**: Piezo vs MEMS side-by-side if needed

---

## Bill of Materials (Prototype)

| Component | Quantity | Est. Cost (VND) | Source |
|-----------|----------|-----------------|--------|
| PZT disk 20mm | 5 | 50,000 | Nhật Tảo |
| Op-amp (LM358) | 2 | 10,000 | Nhật Tảo |
| Resistors/caps | Kit | 30,000 | Local |
| Epoxy potting | 1 tube | 50,000 | Local |
| Prototype PCB | 2 | 40,000 | Local CNC |
| **Total** | - | **~180,000** | (~$7 USD) |

---

## Related Documents

- [[decisions/log]] - DEC-002 decision record (final selection)
- [[requirements/srs-v2.0]] - SEN.01-08 sensor requirements
- [[design/function-structure]] - F1: Detect mechanical impact
- [[design/morphological-matrix]] - Sensor solution options
- [[quality/dfx-review-mcu-box]] - PZT preamp design review
- [[quality/fmea-bb01]] - DET-01 to DET-12 sensor failure modes

---

## References

- [MDPI: Impact Force Detection with Piezoelectric Sensing](https://www.mdpi.com/1424-8220/22/14/5167)
- [Infineon IM69D130 Datasheet](https://www.infineon.com/part/IM69D130)
- [sensiBel SBM100B Technology](https://www.sensibel.com/technology)
- [Analog Devices: Understanding Microphone Sensitivity](https://www.analog.com/en/analog-dialogue/articles/understanding-microphone-sensitivity.html)
