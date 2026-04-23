# VN-12.7MM-SIM-018: POWER BUDGET ANALYSIS
## Phase 3: Embodiment Design

**Document**: VN-12.7MM-SIM-018-PWR | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Scope**: I-01 (HONG HAI) -- resolves MC-005 from Phase 2 Gate Review
**Requirements**: E-001 (220VAC ±10% 50Hz), E-002 (<=2000W total), E-003 (<=100W standby), E-008 (documented power budget)

---

# 1. POWER BUDGET BY SUBSYSTEM

## 1.1 Operating Mode (Full Simulation)

| Subsystem | Component | Peak (W) | Typical (W) | Standby (W) | Notes |
|-----------|-----------|----------|-------------|-------------|-------|
| **SS4 Computing** | | | | | |
| | PC CPU (i7-12700) | 180 | 120 | 15 | PL2 boost vs sustained |
| | GPU (RTX 3060) | 170 | 130 | 10 | 3x QHD rendering load |
| | RAM 32GB | 10 | 10 | 5 | |
| | SSD + fans + MB | 30 | 25 | 10 | |
| | PSU efficiency loss (85%) | 69 | 50 | 7 | 15% overhead at load |
| | *SS4 subtotal* | *459* | *335* | *47* | |
| **SS5 Visual** | | | | | |
| | 3x 27" QHD monitor | 135 | 105 | 3 | 45W peak, 35W typ each |
| | *SS5 subtotal* | *135* | *105* | *3* | |
| **SS6 Audio** | | | | | |
| | 5.1 AVR/Amplifier | 300 | 80 | 5 | Peak during gunfire audio |
| | *SS6 subtotal* | *300* | *80* | *5* | |
| **SS3 Resistance** | | | | | |
| | Traverse brake (20Nm) | 48 | 24 | 0 | 24V x 2A max; typ 50% duty |
| | Elevation brake (5Nm) | 24 | 12 | 0 | 24V x 1A max; typ 50% duty |
| | 24V PSU efficiency loss | 11 | 5 | 1 | ~85% efficient |
| | *SS3 subtotal* | *83* | *41* | *1* | |
| **SS7 Feedback** | | | | | |
| | Vibration motor | 6 | 2 | 0 | 12V x 0.5A, intermittent |
| | Status LEDs | 1 | 1 | 0.5 | 8 LEDs x 20mA x 5V |
| | *SS7 subtotal* | *7* | *3* | *0.5* | |
| **SS2 Sensing** | | | | | |
| | I/O board (STM32/Arduino) | 2 | 2 | 1 | USB powered |
| | 2x Encoders | 0.5 | 0.5 | 0 | 5V x 50mA each |
| | FSR + conditioning | 0.01 | 0.01 | 0 | Negligible |
| | *SS2 subtotal* | *2.5* | *2.5* | *1* | |
| **SS8 Instructor** | | | | | |
| | 24" FHD monitor | 30 | 25 | 1 | |
| | Keyboard + mouse | 1 | 1 | 0 | USB powered from PC |
| | *SS8 subtotal* | *31* | *26* | *1* | |

## 1.2 Summary Table

| Condition | Total Power (W) | Requirement | Status |
|-----------|----------------|-------------|--------|
| **Peak** (all max simultaneously) | **1,018 W** | E-002: <=2,000W | **PASS** (49% margin) |
| **Typical** (normal training session) | **592 W** | -- | -- |
| **Standby** (powered, no simulation) | **58 W** | E-003: <=100W | **PASS** (42% margin) |

---

# 2. MARGIN ANALYSIS

## 2.1 Power Supply Sizing

| Supply | Rated | Peak Load | Utilization | Margin | Status |
|--------|-------|-----------|-------------|--------|--------|
| PC PSU (ATX) | 750W | 459W | 61% | 39% (291W) | **PASS** (>=20%) |
| 24V PSU | 120W (24V/5A) | 83W | 69% | 31% (37W) | **PASS** (>=20%) |
| AC mains | 2200W (10A @ 220V) | 1018W | 46% | 54% | **PASS** |

All supplies have >=20% margin as required.

## 2.2 Thermal Dissipation

| Source | Heat Output (W, typical) | Cooling Method |
|--------|-------------------------|---------------|
| PC workstation | 335W | Internal fans (forced convection) |
| Monitors (3x) | 105W | Passive (panel rear) |
| Amplifier | 80W | Internal fan or passive (AVR) |
| Brakes | 41W | Passive (brake body heat sink) |
| Total room heat load | **561W** | Room HVAC must handle ~2,000 BTU/hr |

**Note**: Room HVAC is facility-provided (OP-017: 18-32 deg C). 561W is modest for a 3x3m room. No additional cooling required within the trainer station.

---

# 3. POWER SEQUENCE

```
STARTUP SEQUENCE (<=5 min, OP-001):
═══════════════════════════════════

T=0s    AC mains ON
        │
T=5s    PC boots (BIOS → OS → Unity autostart)
        Monitors wake from standby → full brightness
        24V PSU energizes → brakes de-energized (0 current = free rotation)
        │
T=60s   Unity loaded, BIST starts
        I/O board enumerated (USB HID)
        BIST: encoder check, brake pulse test, display test, audio test
        │
T=120s  BIST complete → System Ready
        Instructor UI available
        │
T=180s  Scenario loaded → Training Ready
        Brakes energized to default resistance profile

TOTAL STARTUP: ~3 minutes (meets OP-001 <=5 min)


SHUTDOWN SEQUENCE:
═══════════════════

T=0s    Instructor selects "Shutdown" or Ctrl+Shift+Q
        Session data saved
        │
T=5s    Brakes de-energized (safe: free rotation)
        Unity closes gracefully
        │
T=15s   OS shutdown initiated
        Monitors enter standby (3W total)
        24V PSU standby
        │
T=30s   System in standby (58W)

EMERGENCY STOP:
═══════════════

E-stop pressed → 24V rail cut IMMEDIATELY (hardware)
        → Brakes de-energize → free rotation → SAFE
        → Software detects E-stop via I/O board (digital input)
        → Unity pauses simulation
        → Status LED: E-STOP ACTIVE (red flash)
        → Recovery: release E-stop, software resume prompt
```

---

# 4. UPS CONSIDERATION (WISH: E-004)

**Requirement**: E-004 (W) -- UPS for 10 min graceful shutdown.

| Parameter | Value |
|-----------|-------|
| Load to protect | PC + I/O board only (~350W) |
| UPS sizing | 350W x 10 min = 58 Wh → >=500VA UPS |
| UPS model | APC Back-UPS 600VA or CyberPower 650VA |
| Cost | $80-120 |
| Decision | **DEFER to production.** Prototype will use direct AC. UPS is a Wish requirement. |

---

# 5. VARIANT POWER COMPARISON (E-008)

| Variant | Peak (W) | Typical (W) | Standby (W) | Power Source | Notes |
|---------|----------|-------------|-------------|-------------|-------|
| I-01 Standard | 1,018 | 592 | 58 | 220VAC grid | This document |
| I-02 CTR | ~1,200 | ~700 | ~80 | Shore power or 3kW generator (E-009) | +environmental control, +ruggedized PSU |
| I-06 TAC | ~2,500 | ~1,500 | ~150 | 220VAC grid | 3 stations (3x SS4, 3x SS5) |
| I-08 ACH | ~1,100 | ~650 | ~65 | 220VAC grid | +ML inference GPU |
| I-09 TAB | ~200 | ~120 | ~15 | USB-C PD (laptop) | Reduced: single monitor, no brakes |

**CTR power source (E-009)**: Shore power preferred. Generator backup: 3kW diesel/petrol with 20% margin (3.6kW nominal). Auto-transfer switch for seamless handover.

---

# 6. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN (Phase 3 Embodiment) | Initial release. Resolves MC-005. Peak 1018W (49% margin vs E-002). Standby 58W (42% margin vs E-003). All PSUs >=20% margin. |

---

**NEXT**: Document 019 -- DfX Review

---

*VN-12.7MM-SIM-018 Power Budget v1.0*
*Phase 3: Embodiment Design -- I-01 (HONG HAI) Base Variant*
