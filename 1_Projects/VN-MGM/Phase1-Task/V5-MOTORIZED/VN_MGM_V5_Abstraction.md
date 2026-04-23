---
created: 2026-04-11
type: abstraction
block: BC
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
feeds_to:
  - VN_MGM_V5_Essential_Problem.md
  - VN_MGM_V5_TVDT.md
---

# BC Abstraction — VN-MGM V5-MOTORIZED (ICDM)

## P&B 5-Step Abstraction (§6.1-6.2)

### Step 1: Eliminate personal preferences and brand bias

| Solution-biased term | Abstracted |
|---------------------|-----------|
| "BLDC motor" | Rotary electrical actuator |
| "Worm gearbox NMRV050" | Speed-reducing torque-amplifying transmission |
| "STM32F446 controller" | Embedded motion controller |
| "EM clutch NC 24V" | Automatic torque path disconnect device |
| "Industrial joystick 2-axis" | Proportional operator command interface |
| "RS485 Modbus + CANopen" | Digital position data interface |
| "Elastomer 60 Shore A" | Shock-isolating compliant coupling |
| "LiFePO4 UPS" | Transition energy storage |

### Step 2: Omit non-functional requirements

Functional core retained:
- **Drive** weapon in azimuth and elevation at angular rates exceeding human capability
- **Preserve** full manual aiming when power unavailable
- **Survive** repeated weapon recoil without degradation
- **Report** angular position to external systems

Omitted from essential problem (non-functional / implementation):
- IP65 sealing (environment — HOW to survive, not WHAT)
- STANAG bolt pattern (interface — WHERE to mount, not WHAT)
- BOM cost target (economics — HOW MUCH, not WHAT)
- Production batch size (operations)
- Training time (operations)

### Step 3: Transform quantitative → qualitative

| Quantitative | Qualitative Core |
|-------------|-----------------|
| ≥60°/s azimuth | Exceed human angular rate limitation |
| ≤1s clutch disengage | Instantaneous transition to manual |
| 50 kN recoil × 50,000 cycles | Survive lifetime weapon recoil loading |
| ±0.5° position accuracy | Sufficient precision for aimed fire |
| ≤100 kg total | Crew-portable on naval vessel |

### Step 4: Expand to broader scope

**V1 essential problem (proven):** "Enable a single operator to accurately direct a heavy weapon (25-55 kg) through full azimuth and elevation on a naval platform in tropical marine environment."

**V5 expands:** "...with POWERED assistance that exceeds human performance for fast-moving aerial threats, while GUARANTEEING fallback to proven manual capability on any power disruption, and ENABLING future autonomous capabilities without structural redesign."

### Step 5: Essential Problem Statement

> **Provide powered angular drive for a proven heavy weapon mount that: (1) exceeds human tracking capability for close-range fast-moving targets, (2) guarantees instantaneous reversion to full manual aiming on any power disruption, (3) survives weapon recoil loading without degradation, and (4) serves as an extensible platform for future sensing and autonomous capabilities — all while maintaining the proven mount's structural integrity, deck interface, and field serviceability.**

---

## Constraint Classification (P&B §6.2 — Genuine vs Fictitious)

| # | Constraint | Classification | Rationale |
|---|-----------|:--------------:|-----------|
| SC-V5-1 | EM clutch auto-disengage ≤1s on power loss | **GENUINE** | Physics + safety — weapon must never "die." Non-negotiable. |
| SC-V5-2 | Motor→manual ≤5s, 1 action, no tools | **GENUINE** | Tactical — 5s is already long in combat. Any longer = unacceptable. |
| SC-V5-3 | Manual mode ≥80% of V1 performance | **GENUINE** | Training — trắc thủ trained on V1. If manual mode feels different = training risk. |
| SC-V5-4 | Motor slew ≥60°/s both axes | **GENUINE** | Physics — FPV at 200m = 15.9°/s. 4× margin = 60°/s. Below this = V1 with extra weight. |
| SC-V5-5 | Position hold under recoil ≤0.5s | **GENUINE (RELAXED)** | CEO 2026-04-11: relaxed from 0.3s to 0.5s (aligned with N12). Bench test validates. |
| SC-V1-1 | ≥50 kN recoil, 50K cycles | **GENUINE** | Physics — weapon generates this. Structure must handle it. |
| SC-V1-3 | 1,000 hrs salt fog | **GENUINE** | Environment — tropical marine. Proven necessary by V1 field experience. |

**CEO Decision Required:** SC-V5-5 — is 0.3s a hard DEMAND or can it relax to 0.5s based on bench test results? (N12 uses 0.5s)

## Solution-Neutral Verification (≥3 solution classes)

The essential problem supports ≥3 fundamentally different solution classes:

| # | Solution Class | Fundamentally Different? | Notes |
|---|---------------|:------------------------:|-------|
| 1 | **Electric servo drive** (BLDC/DC motor + gearbox) | Baseline | Standard industrial approach. All RCWS use this. |
| 2 | **Hydraulic drive** (pump + cylinder/motor) | ✅ YES | High torque, smooth, heavy. Common in large turrets >200 kg. |
| 3 | **Pneumatic drive** (compressed air motor) | ✅ YES | Lightweight, no electrical noise. Used in some torpedo systems. |
| 4 | **Direct drive** (frameless torque motor, no gearbox) | ✅ YES | Highest precision, zero backlash. Used in precision instruments. Expensive. |

**Result: ≥4 classes exist.** Essential problem is sufficiently solution-neutral.

---

*BC Abstraction | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
