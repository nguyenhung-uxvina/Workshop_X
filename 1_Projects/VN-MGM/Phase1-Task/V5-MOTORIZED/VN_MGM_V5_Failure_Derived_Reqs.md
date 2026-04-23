---
created: 2026-04-11
type: failure-derived-requirements
block: BB
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
new_reqs: 6
feeds_to:
  - VN_MGM_V5_Requirements_List_v2.0.md
---

# Failure-Derived Requirements — VN-MGM V5-MOTORIZED

## 1. Failure Mode Scan (V5 delta — motor/clutch/controller subsystem)

V1 failure modes are proven manageable (300 units). V5 introduces NEW failure modes from motor drive subsystem.

| # | Function | Failure Mode | Consequence | Severity | Existing Req? | New Req? |
|---|----------|-------------|-------------|:--------:|:-------------:|----------|
| FM-1 | Motor drive (az) | Motor runaway (controller fault) | Weapon swings uncontrolled | CRITICAL | SF-08 ✅ | — |
| FM-2 | Motor drive (el) | Motor stall under weapon weight | Elevation drops / can't aim up | HIGH | F-05 ✅ | — |
| FM-3 | EM clutch (az) | Clutch fails to release on power loss | Cannot switch to manual — WEAPON DEAD | CRITICAL | SF-01 ✅ | — |
| FM-4 | EM clutch | Clutch engages while mount is moving manually | Sudden stop / operator injury | HIGH | SF-06 ✅ | — |
| FM-5 | Controller | Firmware crash / lockup | Motors stop, unknown state | HIGH | S-08 partial | **FD-01** |
| FM-6 | Encoder | Encoder loses index after power cycle | Position unknown → inaccurate data output | MED | K-09 partial | **FD-02** |
| FM-7 | Gearbox | Worm gear wear → backlash increases over time | Aiming precision degrades silently | MED | K-10 partial | **FD-03** |
| FM-8 | Cable (joystick) | Cable snagged on deck equipment | Cable damaged / connector pulled | HIGH | — | **FD-04** |
| FM-9 | UPS battery | Battery deep-discharge / thermal runaway | Fire risk / no backup power | HIGH | E-05, E-06 | **FD-05** |
| FM-10 | Data port | Unauthorized external command via CAN/RS485 | Motor moves without operator intent | CRITICAL | — | **FD-06** |

## 2. New Failure-Derived Requirements

| ID | Requirement | Value/Limit | D/W | Verify | Source |
|---|---|---|---|---|---|
| FD-01 | **Watchdog reset recovery** | Controller must auto-recover from firmware crash ≤2s. If no recovery → safe state (motors off, clutch release). No manual intervention needed. | D | T | [FM-5] |
| FD-02 | **Encoder homing on power-up** | Automatic homing sequence at power-on using index pulse + limit switches. Position valid flag = FALSE until homing complete. Motor speed limited to ≤5°/s during homing. | D | T | [FM-6] |
| FD-03 | **Backlash monitoring** | Controller detects backlash increase >0.5° (via encoder analysis) → maintenance alert on fault LED. Not a motor stop — informational only. | W | T | [FM-7] |
| FD-04 | **Joystick cable strain relief + deck routing** | Cable must have strain relief at both ends (joystick + controller). Deck routing guide included in kit. Cable rated for ≥100,000 flex cycles. | D | I/T | [FM-8] |
| FD-05 | **UPS battery protection** | BMS with over-discharge (≤20V cutoff), over-charge, and over-temperature (≥60°C cutoff) protection. Fuse on battery output. LiFePO4 chemistry preferred (no thermal runaway). | D | T | [FM-9] |
| FD-06 | **Data port write protection** | External commands via RS485/CAN are READ-ONLY by default. WRITE (motor commands from external system) enabled ONLY by physical key switch on controller. [SAFETY-CRITICAL] | D | T | [FM-10] [IEC 62443] |

## 3. SPOF Check (V5 complete system)

| Component | If It Fails | Redundancy? | SPOF? | Mitigated By |
|-----------|-----------|:-----------:|:-----:|-------------|
| Controller (STM32) | Motor mode lost | No | **SPOF for motor mode** | SF-01: clutch releases → V1 manual. FD-01: watchdog auto-recovery. |
| EM clutch az | Stuck engaged → can't go manual az | No | **SPOF for az manual** | NC design: power loss = release. SF-01. Hardwired E-stop cuts clutch power independently of controller. |
| EM clutch el | Stuck engaged → can't go manual el | No | **SPOF for el manual** | Same as az. NC design. |
| Servo drive (az) | Az motor dead | No | **SPOF for az motor** | Manual fallback. Spare drive in maintenance kit (MA-02: swap ≤30 min). |
| Servo drive (el) | El motor dead | No | **SPOF for el motor** | Manual fallback. Spare drive. |
| Joystick | Cannot command motor | No | **SPOF for motor input** | S-08: cable-cut detection → safe state. Manual fallback. |
| Ship power | All motor functions lost | UPS (10 min) | Mitigated | E-05/E-06: UPS provides transition time. After UPS depletes: manual (zero power). |
| Encoder (az) | Position data lost for az | No | **SPOF for az position data** | FD-02: homing sequence. Motor operates in speed mode (no position feedback needed for manual joystick). Data output degrades but weapon still works. |

**Key insight: Every V5 SPOF degrades to V1 MANUAL mode, which is proven (300 units). No V5 failure makes the weapon inoperable.** Same architecture as N12 — ACH Boundary Rule compliant.

## 4. ICDM Gap Analysis

### 4a. Innovation-Critical Gaps

| # | Gap | ICDM Impact | Resolution |
|---|-----|-------------|-----------|
| IG-1 | No requirement for design review WITH N12 team | Platform divergence risk — V5 and N12 may select incompatible components | IM-05 added (cross-product review) |
| IG-2 | No requirement for field data FORMAT | Data collected but unusable if format undefined | IX-02 covers protocol. Add: IM-01 must specify CSV/JSON log format. |
| IG-3 | Data port security undefined | CAN bus = broadcast by default → any node can send motor commands | FD-06 added (physical key switch for write access) |

### 4b. TRIZ Resource Inventory (ICDM extension)

| Resource | Present? | Available? | How to Use |
|----------|:--------:|:----------:|-----------|
| V1 slewing ring external teeth | ✅ | 300 units | Az motor coupling (pinion mesh) — CEO confirmed |
| V1 worm gear (elevation) | ✅ | 300 units | El motor coupling option (WP-E1 from N12 morpho) |
| V1 STANAG bolt pattern | ✅ | 300 units | V5 bolt-on compatibility — zero deck modification |
| V1 pedestal cylindrical surface | ✅ | 300 units | N12 clamp reference. V5: motor bracket attachment. |
| Ship 24V/48V DC | ✅ | All ships | Motor power source |
| Gravity (weapon weight) | ✅ | Always | Helps az clamp friction (downward force). Opposes el lift. |
| Recoil vibration (harmful) | ✅ | During fire | Could use for: looseness detection (IM-01 data), health monitoring |
| V1 coating (harmful to modify) | ✅ | 300 units | Must protect — EPDM lining on clamps, no welding |
| CUAV-SIM encoder experience | ✅ | WX team | Transfer SS1 encoder integration to V5 |
| VN-USV BLDC experience | ✅ | WX team | Transfer thruster motor control to V5 servo |

---

## 5. Updated Requirement Count

| Source | Count | D | W |
|--------|:-----:|:-:|:-:|
| v1.0 base | 86 | 58 | 28 |
| ICDM extension (BA) | 18 | 9 | 9 |
| Failure-derived (BB) | 6 | 5 | 1 |
| D/W upgrades (BA) | — | +2 | -2 |
| **TOTAL v2.0** | **110** | **74** | **36** |

## 6. BB Summary

| Check | Result |
|-------|:------:|
| Failure mode scan | ✅ 10 FMs analyzed, 6 new reqs |
| SPOF check | ✅ Every SPOF → V1 manual fallback |
| ICDM gap analysis | ✅ 3 gaps identified and resolved |
| TRIZ resource inventory | ✅ 10 resources mapped |
| D/W audit (ICDM reqs) | ✅ 14D / 4W for ICDM+FD combined |
| Total requirements v2.0 | ✅ 110 (74D / 36W) |

**BB VERDICT: Requirements validated. Ready for v2.0 merge and BC (Abstraction).**

---

*BB Failure-Derived + ICDM Validation | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
