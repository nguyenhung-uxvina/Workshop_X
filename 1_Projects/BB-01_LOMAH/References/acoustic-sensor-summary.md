# BB-01 Acoustic Sensor Research - Executive Summary

**Date**: 2026-01-26
**Research Question**: MEMS vs Electret microphone cho BB-01 LOMAH?
**Recommendation**: **ECM (Electret Condenser Microphone)**
**Confidence**: 85%

---

## TL;DR

| Criterion | ECM | MEMS | Winner |
|-----------|-----|------|--------|
| SPL Handling (120+ dB) | ✅ | ✅ | Tie |
| Marine Protection (IP67) | ✅ Easy | ⚠️ Needs membrane | **ECM** |
| Cost | $1.50-2.80 | $1.20-3.50 + membrane | **ECM** |
| Local Availability | ✅ Nhật Tảo | ⚠️ Import | **ECM** |
| Size | 4-6mm dia | 3-4mm | MEMS |
| Integration | Simple | Simpler (digital) | MEMS |

**Final Score**: ECM 4, MEMS 2

---

## Key Finding: 140 dB Requirement May Be Excessive

```
                    SPL ATTENUATION ANALYSIS
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  At Muzzle (7.62mm): ~155 dB SPL                           │
│         │                                                   │
│         ▼ -30 to -40 dB attenuation                        │
│                                                             │
│  At 150m (MIN range): ~115-125 dB SPL ◄── TYPICAL CASE    │
│         │                                                   │
│         ▼ -15 to -20 dB                                    │
│                                                             │
│  At 400m (MAX range): ~100-110 dB SPL                      │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  Requirement AS.07: ≥140 dB SPL                            │
│  Actual at sensor:  ~110-125 dB SPL                        │
│  ─────────────────────────────────────────────────────────  │
│  CONCLUSION: 125 dB AOP is sufficient                      │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## Recommended Part

**Primary**: PUI Audio AOM-5024L-HD-F-R
- IP65 rated
- AOP: 120 dB
- SNR: 62 dB
- Sensitivity: -38 dB
- Price: ~$2.50/unit

**Backup**: CUI CME-1538-100LB
- IP67 rated
- AOP: 115 dB
- SNR: 58 dB
- Price: ~$1.50/unit

**If 140 dB truly required**: Vesper VM2020
- IP57 inherent
- AOP: 140+ dB (piezoelectric)
- Price: ~$3.50/unit
- Lead time: 3-4 weeks

---

## Action Items

| # | Action | Owner | Priority |
|---|--------|-------|----------|
| 1 | Review AS.07 requirement (140 dB → 125 dB?) | Design Lead | High |
| 2 | Order samples: AOM-5024L, CME-1538 | Procurement | Medium |
| 3 | Design acoustic housing (rear-facing port) | Mech Lead | Medium |
| 4 | Plan live-fire SPL measurement | Test Lead | High |

---

## Full Research

See: [[acoustic-sensor-research]] (full D-M-I-R analysis)

---

*Research conducted using D-M-I-R methodology*
*Skills used: research-workflow*
