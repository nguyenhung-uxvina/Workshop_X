---
created: 2026-04-12
type: cfma
block: BD
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "ICDM CFMA (Conceptual Failure Mode Analysis) + Robustool (Hari & Weiss)"
status: COMPLETE
concepts_analyzed: 2 (A, B)
feeds_to:
  - VN_MGM_V5_ICDM_Final_Selection.md (BE)
---

# BD CFMA + Robustool — VN-MGM V5-MOTORIZED (ICDM)

## 1. CFMA — Conceptual Failure Mode Analysis

> **CFMA = function-level failure analysis.** Unlike FMEA (component-based), CFMA evaluates loss of system FUNCTIONS, not component failures. Scored by SFD = Severity × Frequency × Detection.

### 1.1 CFMA — Concept A "Pinion-Worm"

| # | System Function | Potential Failure Mode | Failure Cause | Failure Effect | S | F | D | SFD | Action Items | Rev S | Rev F | Rev D | Rev SFD |
|---|----------------|----------------------|---------------|---------------|:-:|:-:|:-:|:---:|-------------|:-----:|:-----:|:-----:|:-------:|
| 1 | F7.1 Drive azimuth | Loss of az motor drive | Motor burnout (overcurrent, overtemp) | Weapon can only traverse manually (V1 mode). Mission degraded, NOT failed. | 5 | 2 | 3 | **30** | Overcurrent protection (FD1). Motor thermal sensor. Derating at >50°C. | 5 | 1 | 2 | **10** |
| 2 | F8.1 Drive elevation | Loss of el motor drive | Worm shaft coupling failure (jaw spider fatigue) | Weapon can only elevate manually (V1 mode). Mission degraded. | 5 | 3 | 4 | **60** | Dual-spider jaw coupling (redundant). Spare spider in MAINT-KIT. Visual inspection interval. | 5 | 2 | 2 | **20** |
| 3 | F9.1 Motor↔Manual transition | **Clutch fails to disengage** | EM coil short circuit (clutch stays engaged on power loss) | **Weapon LOCKED in motor mode. No manual fallback. SAFETY-CRITICAL.** | **10** | 2 | 3 | **60** | HW relay cuts clutch power (independent of coil). E-stop cuts ALL power. Annual clutch test. Spare clutch in MAINT-KIT. | **10** | 1 | 1 | **10** |
| 4 | F9.1 Motor↔Manual transition | Clutch fails to engage | EM coil open circuit (clutch always released) | Motor drive unavailable. Weapon = V1 manual only. Mission degraded, NOT failed. | 4 | 2 | 3 | **24** | Clutch status feedback (current sense). LED indication. Spare clutch. | 4 | 2 | 1 | **8** |
| 5 | F10.2 Motor control | Controller failure (STM32 crash) | Firmware bug, EMI, power spike | Motors stop (watchdog timeout). Clutch releases (NC). Weapon = V1 manual. | 5 | 3 | 3 | **45** | IWDG watchdog (HW, cannot disable). Power filtering. Conformal coating. Firmware field update (IX-07). | 5 | 2 | 2 | **20** |
| 6 | F10.3 Power through 360° | Cable spiral fatigue failure | Flex cable break after >100K rotation cycles | Az motor/signal lost. El still works. Manual fallback works. | 4 | 3 | 5 | **60** | Cable rated 200K+ cycles. Inspection interval. Spare cable in MAINT-KIT. Strain relief design. | 4 | 2 | 2 | **16** |
| 7 | F11.2 Position data output | Data port failure | RS485 transceiver damage (ESD, surge) | No position data to external systems. Motor control unaffected (internal encoder). Future camera/FCS cannot connect. | 3 | 2 | 4 | **24** | TVS diode on RS485/CAN lines. Galvanic isolation. Spare transceiver on PCB (swap). | 3 | 1 | 2 | **6** |
| 8 | F12.1 UPS battery | Battery depleted / failed | Calendar aging, deep discharge, high temp | No backup power for graceful shutdown. Clutch releases immediately on power loss (still safe). | 3 | 3 | 4 | **36** | Battery health monitor (voltage + temp). Low battery warning LED. Annual replacement. | 3 | 2 | 2 | **12** |
| 9 | F7.1 + F8.1 Both drives | **Simultaneous loss of BOTH motor drives** | Common cause: ship power failure, controller failure | Weapon = V1 manual mode (proven 300 units). **NOT a safety failure — designed behavior.** | 3 | 3 | 2 | **18** | This IS the design intent. EM clutch NC releases. V1 = fully operational. | 3 | 3 | 1 | **9** |

**Concept A — SFD Summary:**

| Metric | Before Actions | After Actions |
|--------|:-------------:|:------------:|
| Max SFD | 60 (items 2, 3, 6) | **20** (items 2, 5) |
| Total SFD | 357 | **111** |
| SAFETY-CRITICAL items | 1 (item 3: clutch fails locked) | **Mitigated** (HW relay, E-stop, annual test) |

### 1.2 CFMA — Concept B "Pinion-Sector"

| # | System Function | Potential Failure Mode | Failure Cause | Failure Effect | S | F | D | SFD | Action Items | Rev SFD |
|---|----------------|----------------------|---------------|---------------|:-:|:-:|:-:|:---:|-------------|:-------:|
| 1-5 | Same as A items 1, 3-5, 9 | Same | Same | Same | — | — | — | Same | Same | Same |
| **B1** | F8.1 Drive elevation | **Sector gear clamp loosens under recoil** | Bolt torque relaxation (vibration, thermal cycling, recoil) | El motor drives sector but trunnion doesn't follow. El precision lost. Weapon still aims manually. | **7** | **4** | **4** | **112** | Through-bolt (not clamp). Nord-Lock washers. Torque marking. 500-round retorque check. | **7** | 2 | 2 | **28** |
| **B2** | F8.1 Drive elevation | Sector gear tooth damage | Recoil shock through pinion-sector mesh. Concentrated load on 2-3 teeth. | Elevation drive noise → eventual tooth failure → motor drive lost for el. Manual still works. | 6 | 3 | 4 | **72** | FEA on tooth stress at 50 kN. Hardened sector teeth. Wider face width for load distribution. | 6 | 2 | 2 | **24** |
| **B3** | F8.1 Drive elevation | Sector arc limit → weapon hits stop | Operator drives el beyond sector arc (120°). Motor stalls or pinion overrides sector end. | Motor overcurrent → shutdown. Possible pinion damage if no soft stop. | 5 | 3 | 3 | **45** | Software el limits (±2° before sector end). Mechanical hard stops with rubber buffers. | 5 | 1 | 2 | **10** |

**Concept B — SFD Summary:**

| Metric | Before Actions | After Actions |
|--------|:-------------:|:------------:|
| Max SFD | **112** (B1: sector clamp loosen) | **28** (B1) |
| Total SFD (B-specific items only) | 229 | 62 |
| Total SFD (all items incl. shared) | ~490 | ~173 |
| SAFETY-CRITICAL items | 1 (item 3: same as A) + B1 (operational risk) | Mitigated |

**Key difference:** B has **higher residual risk** (Rev SFD 173 vs A's 111) due to sector gear recoil loading (B1, B2). These are inherent to the sector gear architecture.

---

## 2. Robustool — Illegitimate Operation Analysis

### 2.1 Concept A

| Scenario | What Happens | Tolerable? | Design Response |
|----------|------------|:----------:|----------------|
| **Misuse: Wrong power (12V instead of 24V)** | Under-voltage → motors weak/stall. Controller may not boot. Clutch still powered (12V sufficient for NC release). No damage. | ✅ | Wide-input PSU (24-48V). Under-voltage alarm. |
| **Misuse: Wrong weapon (14.5mm KPVT, 80 kN)** | Recoil exceeds 50 kN spec by 60%. V1 structure rated for it (V3-D adapter). Motor elastomer isolation marginal — higher shock at motor. | ⚠️ | V3-D adapter restricts to pedestal/motorized only. Increase elastomer stiffness for V5+KPVT variant. |
| **Misuse: Sustained fire (200 rounds continuous)** | Motor temp rise. Gearbox oil temp rise. Elastomer temp rise. If motor >120°C → thermal shutdown. Clutch releases → manual. | ✅ | Motor thermal protection. Duty cycle: 50 rounds → 30s pause (SOP). Thermal sensor on motor. |
| **Overload: Sea state 5 (heavy roll)** | Platform motion adds dynamic load to motors. PID compensates. If exceeded → motor current limit → reduced response. | ✅ | V5 not stabilized (no gyro). Operator adjusts manually. Spec = sea state 3. |
| **Upgrade: Camera add-on via data port** | Camera receives position data. No control of motors (key switch = READ-ONLY). Power from IX-03 headroom. | ✅ | Designed for this (ICDM IX-01 to IX-07). |
| **Upgrade: FCS + auto-track (future)** | FCS sends commands via CAN. Key switch = READ-WRITE (authorized). STM32 accepts setpoints. | ✅ | Designed for this. Modular SW (IX-01). |

**Concept A Robustool: ✅ PASS** (1 ⚠️ for KPVT — addressable by variant-specific elastomer)

### 2.2 Concept B — Additional Scenarios

| Scenario | What Happens | Tolerable? | Design Response |
|----------|------------|:----------:|----------------|
| **Misuse: Operator drives el beyond sector arc** | Pinion overrides sector end teeth. Teeth damaged. Motor stalls/overcurrent. | ⚠️ | SW + HW limits (B3 action). Critical that limits are robust. |
| **Overload: Recoil loosens sector bolts** | Progressive bolt relaxation → sector shifts → gear mesh degrades → noise → failure | ⚠️ | Through-bolts + Nord-Lock + 500-round retorque. Maintenance burden. |
| **Upgrade: Same as A** | Same — data port identical | ✅ | Same |

**Concept B Robustool: ⚠️ CONDITIONAL PASS** (2 ⚠️ scenarios requiring operational procedures)

---

## 3. Robustool Summary

| Concept | Pass | Conditional | Fail | Status |
|---------|:----:|:----------:|:----:|:------:|
| A | 5 | 1 (KPVT variant) | 0 | ✅ PASS |
| B | 4 | 2 (sector arc + bolt retorque) | 0 | ⚠️ CONDITIONAL |

---

*BD CFMA + Robustool | Concepts A & B | SFD: A=111, B=173 | helix-concept-generate v3.1 (ICDM) | 2026-04-12*
