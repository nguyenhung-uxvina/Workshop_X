# BB-01 LOMAH — Location of Miss and Hit

## Project Context
- Acoustic miss/hit detection system for shooting ranges
- Gate 2 (DfX — Design for Excellence) approaching
- Piezoelectric CONTACT sensors, NOT MEMS microphones
- Miss/hit detection ONLY — not general acoustics or sound monitoring

## Signal Chain
Piezo -> Charge Amp (Q->V, +/-5V dual) -> Bandpass (2-8kHz) -> Gain (10x, biased 1.65V) -> Clamp (0-3.3V) -> ADC (12-bit)

## Key Parameters
| Parameter | Value | Notes |
|-----------|-------|-------|
| Piezo sensitivity | 150 pC/N | 20mm PZT disc |
| Piezo capacitance | 500 pF | PZT-5A, 20mm, 1mm thick |
| Cf (charge amp) | 3.3 nF | Sized for 5000N -> ~76% ADC utilization |
| Rf (charge amp) | 10 MOhm | Low-freq pole at 4.8Hz |
| Analog supply | +5V / -5V | AMS1117-5.0 + ICL7660 charge pump |
| Bias voltage | 1.65V | Mid-rail bias for ADC-compatible output |
| Bandpass | 2-8 kHz, order 2 | Sallen-Key Butterworth |
| Gain stage | 10x | LM358, 1.1MHz GBW, single +5V supply |
| ADC | 12-bit, 3.3V, 200kSps | STM32F4 native |
| Impact model | 5000N, 50us half-sine | 7.62mm on steel plate |

## Hardware Constraints
- Charge amp (TL072): dual supply +/-5V, JFET input for low bias current
- Gain stage (LM358): single +5V supply, biased to 1.65V
- MEMS cannot handle SPL requirements
- Budget target: ~150,000 VND per channel (~$6 USD)
- Local sourcing: Nhat Tao / Dien Tu Thanh markets

## Key Commands
- python scripts/bb01_acoustic_sim.py
- python scripts/bom.py

## Coding Standards
- Python for simulation and tooling
- Vietnamese comments for team, English for docs
- Pahl-Beitz systematic design methodology
