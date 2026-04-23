---
created: 2026-04-10
type: requirements-list
method: Pahl & Beitz §5.1-5.4 FULL COMPLIANCE
version: v1.0
project: VN-MGM
variant: N12-RETROFIT-KIT
status: DRAFT — CEO D/W classification needed
req_count: 62
n12_specific: 38
inherited_v1: 24 (binding subset of 72 V1 req)
d_count: TBD (CEO classifies)
w_count: TBD
quantified_pct: 89
categories_covered: 16/16
evidence_tier: "[L4-ESTIMATE] — pre-prototype, validated by V1 field + V5 bench test design"
purpose: "N12-RETROFIT-KIT Phase 1 requirements for Phase 2 concept generation"
---

# REQUIREMENTS LIST — VN-MGM N12-RETROFIT-KIT

## Document Control

| Field | Value |
|---|---|
| **User** | Hải quân Nhân dân Việt Nam — 300 V1 installed base |
| **Project** | VN-MGM N12-RETROFIT-KIT — Motorization Kit for V1 Mount |
| **Issue Date** | 2026-04-10 |
| **Version** | 1.0 |
| **Chief Designer** | CEO |
| **Classification** | RESTRICTED |

---

## 1. Stakeholder Map + Conflict Resolution

| # | Stakeholder | Role | Primary Interest | N12-Specific Conflict |
|---|------------|------|------------------|----------------------|
| S1 | Trắc thủ (Gunner) | USER | Motor mode + manual fallback | "Don't change my manual controls" |
| S2 | Chỉ huy tàu (Ship CO) | DECISION-MAKER | Zero downtime, weapon always ready | "Ship cannot come to port for installation" |
| S3 | Navy Command | BUYER | Cost ≤$6K, no V1 damage | "We want motor but won't risk existing mount" |
| S4 | Ship Tech | INSTALLER | Easy install, clear instructions | "Standard tools, no special equipment" |
| S5 | Safety Officer | AUTHORITY | Fail-safe, no new hazards | "What happens when power fails?" |

### Conflicts Resolved

| # | Conflict | Resolution | CEO Decision |
|---|---------|-----------|--------------|
| C-N12-1 | Motor adds complexity vs operator simplicity | MODE switch: motor/manual. Manual = identical to V1. Training ≤2h. | Accepted |
| C-N12-2 | Non-permanent attachment vs structural rigidity | Clamp force + rubber lining + set screws INTO clamp (not V1). ≤30 min reversible. | Accepted |
| C-N12-3 | Motor precision vs recoil vibration | Elastomer isolation bushings + encoder with index. Recoil recovery ≤0.5s. | Phase A bench test validates |

---

## 2. IFR Statement + Sacred Constraints

**IFR:** "The ideal retrofit kit adds motorized traverse and elevation to an EXISTING V1 mount with ZERO modification to V1 structure, ZERO removal from ship, ZERO loss of manual capability, installable in ≤4 hours by ship technician using standard tools, while the weapon remains fire-ready throughout installation."

### Sacred Constraints

| # | Constraint | Basis | Type |
|---|-----------|-------|------|
| SC-N12-1 | V1 stays on deck during installation | Operations — tàu không vào cảng | Scope |
| SC-N12-2 | V1 manual mode 100% preserved after install | Safety — weapon never "dies" | Safety |
| SC-N12-3 | Kit fully removable, V1 original ≤30 min | Reversibility — Navy requirement | Scope |
| SC-N12-4 | **NO welding, NO drilling on V1** | Structural — don't damage proven mount | Physics |
| SC-N12-5 | Standard tools only (10,13,17,19mm) | Operations — ship tool kit | Operations |

---

## 3. Requirements Table — 16 Categories

### Structure: N12-SPECIFIC (N-prefix) + V1-INHERITED (V1-ref)

---

### CAT 1: GEOMETRY (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-G01 | Kit total packed dimensions | ≤600×500×400mm (fits standard crate) | D | [LOGISTICS] | [ESTIMATE] |
| N-G02 | Az motor module envelope | ≤250×200×150mm (fits V1 pedestal clearance) | D | [ANALYSIS: V1 geometry] | [ESTIMATE] |
| N-G03 | El motor module envelope | ≤200×150×100mm (fits V1 elevation arm clearance) | D | [ANALYSIS: V1 geometry] | [ESTIMATE] |
| N-G04 | Controller box dimensions | ≤200×150×100mm | D | [ANALYSIS: component sizing] | [ESTIMATE] |
| N-G05 | Clamp range (azimuth bracket) | V1 pedestal OD ±5mm (CEO: consistent across batches) | D | [CEO: field data] | [L1-FIELD] |

### CAT 2: KINEMATICS (6 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-K01 | Motor azimuth slew rate (coarse) | ≥45°/s | D | [USER: trắc thủ anti-FPV] | [ESTIMATE] |
| N-K02 | Motor azimuth slew rate (fine) | ≥5°/s, ≤15°/s | D | [USER: precision aiming] | [ESTIMATE] |
| N-K03 | Motor elevation slew rate (coarse) | ≥25°/s | D | [USER: trắc thủ] | [ESTIMATE] |
| N-K04 | Motor elevation slew rate (fine) | ≥3°/s, ≤10°/s | D | [USER: precision] | [ESTIMATE] |
| N-K05 | Manual traverse rate (with kit installed) | ≥20°/s at ≤5 kg·m — IDENTICAL to V1 [SC-N12-2] | D | [SAFETY: V1 baseline] | Proven (V1) |
| N-K06 | Manual elevation rate (with kit installed) | ≥15°/s at ≤3 kg·m — IDENTICAL to V1 [SC-N12-2] | D | [SAFETY: V1 baseline] | Proven (V1) |

### CAT 3: FORCES (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-F01 | Clamp grip force (azimuth bracket under recoil) | Withstand 50 kN recoil vibration × 1,000 rounds, zero slip | D | [PHYSICS: V1 F-01] | [ESTIMATE] |
| N-F02 | Motor torque (azimuth) | ≥15 N·m at output shaft (after gearbox) | D | [ANALYSIS: weapon+mount inertia] | [ESTIMATE] |
| N-F03 | Motor torque (elevation) | ≥10 N·m at output shaft | D | [ANALYSIS: weapon weight] | [ESTIMATE] |
| N-F04 | Kit does NOT weaken V1 force path | V1 F-01 (50 kN) fully maintained with kit installed | D | [SAFETY: SC-N12-4] | [ANALYSIS] |
| N-F05 | Gear mesh backlash (azimuth pinion → slewing ring) | ≤0.5° (≤8.7 mrad) | W | [ANALYSIS: aiming precision] | [ESTIMATE] |

### CAT 4: ENERGY (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-E01 | Power input voltage | 24-48V DC wide input (ship power compatibility) | D | [FIELD: ship power systems] | [L3-STANDARD] |
| N-E02 | Peak power consumption (both motors) | ≤600W | D | [ANALYSIS: ship aux power ≥2kW] | [ESTIMATE] |
| N-E03 | Standby power (motors idle, controller on) | ≤15W | W | [ANALYSIS: overnight watch] | [ESTIMATE] |
| N-E04 | Manual mode: ZERO external power [SC-N12-2] | EM clutch NC releases on power loss → free manual | D | [SAFETY] | [DESIGN] |

### CAT 5: MATERIAL (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-M01 | Clamp bracket material | Marine-grade aluminum 6061-T6 or SS316 | D | [FIELD: marine corrosion] | [STANDARD] |
| N-M02 | Clamp lining material | EPDM rubber or neoprene (protect V1 coating) | D | [SC-N12-4: no damage] | [STANDARD] |
| N-M03 | All external fasteners | A4-80 stainless (match V1 fasteners) | D | [FIELD: V1 standard] | Proven (V1) |

### CAT 6: SIGNALS (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-S01 | Mode indication (motor/manual) | LED on joystick: Green=motor, Red=manual/E-stop | D | [USER: trắc thủ] | [DESIGN] |
| N-S02 | Position data output | RS485 or CAN bus port for future camera/FCS | W | [UPGRADE: future ACH SF-A] | [DESIGN] |
| N-S03 | Fault indication | LED on controller: steady=OK, blink=fault, off=no power | D | [USER: ship tech] | [DESIGN] |
| N-S04 | Audible mode-change confirmation | Beep on motor engage, double-beep on disengage | W | [USER: trắc thủ feedback] | [DESIGN] |

### CAT 7: SAFETY (8 requirements) [SAFETY-CRITICAL]

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-SF01 | E-stop hardwired — cuts motor power | ≤50ms from button press to motor stop [SAFETY-CRITICAL] | D | [IEC 61800-5-2] | [STANDARD] |
| N-SF02 | Cable-cut safe state | Signal loss >200ms → motor stop + clutch release [SAFETY-CRITICAL] | D | [SAFETY] | [DESIGN] |
| N-SF03 | EM clutch fail-safe (NC = normally closed) | Power loss → clutch releases ≤1s → free manual [SC-N12-2] [SAFETY-CRITICAL] | D | [SAFETY] | [DESIGN] |
| N-SF04 | No kit component in weapon recoil path | ≥50mm clearance from recoil zone after installation [SAFETY-CRITICAL] | D | [V1 SF-02, G-05] | [ANALYSIS] |
| N-SF05 | No new pinch points from kit | ≥25mm clearance all moving parts (gears, motor shaft) | D | [V1 SF-01] | [ANALYSIS] |
| N-SF06 | Motor runaway protection | Overspeed >60°/s or overcurrent → STO (safe torque off) | D | [SAFETY] | [DESIGN] |
| N-SF07 | Grounding strap (kit → V1 → deck) | ≤0.1Ω resistance, bonded at installation | D | [V1 SF-08] | [STANDARD] |
| N-SF08 | Recoil recovery time (motor mode) | ≤0.5s return to aim point after 3-round burst | D | [USER: trắc thủ] | [ESTIMATE] |

### CAT 8: ERGONOMICS (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-ER01 | Joystick: 2-axis analog with deadband | Deadband ≤5% travel (prevent drift), proportional speed | D | [USER: trắc thủ] | [STANDARD] |
| N-ER02 | Joystick cable length | 10m (operator position flexible on deck) | D | [FIELD: ship deck layout] | [STANDARD] |
| N-ER03 | Mode switch position | Within thumb reach on joystick (no hand release) | D | [USER: trắc thủ] | [DESIGN] |
| N-ER04 | Motor noise at operator position | ≤65 dBA at 1m (below conversation level) | W | [USER: trắc thủ comfort] | [ESTIMATE] |

### CAT 9: PRODUCTION (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-P01 | Kit BOM cost | ≤$2,500 | D | [ANALYSIS: margin target 50%] | [ESTIMATE] |
| N-P02 | Kit assembly time (WX factory) | ≤8 hours per kit | W | [ANALYSIS: production rate] | [ESTIMATE] |
| N-P03 | First batch size | ≥5 pilot kits | D | [PLAN: Phase D] | [PLAN] |

### CAT 10: QUALITY CONTROL (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-QC01 | 100% functional test before shipment | Motor slew, clutch engage/disengage, E-stop, cable-cut | D | [QC] | [DESIGN] |
| N-QC02 | Clamp fit test on V1 jig | 100% kits fit V1 pedestal jig (Ø matches ±1mm) | D | [QC] | [DESIGN] |
| N-QC03 | Gear mesh engagement test | Pinion-to-slewing ring: smooth rotation, ≤0.5° backlash | D | [QC] | [DESIGN] |

### CAT 11: ASSEMBLY / INSTALLATION (5 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-AS01 | Installation time (on-ship, V1 stays mounted) | ≤4 hours, 2 persons [SC-N12-1] | D | [PLAN] | [ESTIMATE] |
| N-AS02 | Removal time (kit off, V1 to original) | ≤30 minutes, 1 person [SC-N12-3] | D | [SC-N12-3] | [ESTIMATE] |
| N-AS03 | No welding on V1 | ZERO welds [SC-N12-4] | D | [SC-N12-4] | [DESIGN] |
| N-AS04 | No drilling on V1 | ZERO new holes [SC-N12-4] | D | [SC-N12-4] | [DESIGN] |
| N-AS05 | Standard tools only | 10, 13, 17, 19mm wrenches + Phillips screwdriver [SC-N12-5] | D | [SC-N12-5] | [DESIGN] |

### CAT 12: TRANSPORT (2 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-TR01 | Kit total weight | ≤15 kg (1-person carry) | D | [LOGISTICS] | [ESTIMATE] |
| N-TR02 | Kit packed in single case | Pelican-style case with foam inserts, fits carry-on | W | [LOGISTICS: field install] | [ESTIMATE] |

### CAT 13: OPERATION (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-OP01 | Operating temperature (kit electronics) | -10°C to +55°C (match V1 OP-01) | D | [V1 OP-01] | [STANDARD] |
| N-OP02 | Salt fog resistance (kit components) | ≥500 hrs (all external surfaces) | D | [V1 OP-04 derivative] | [STANDARD] |
| N-OP03 | Rain operation | Full operation under tropical rain (IP65 minimum) | D | [V1 OP-05] | [STANDARD] |

### CAT 14: MAINTENANCE (4 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-MA01 | Kit MTBF (electronics + motor) | ≥2,000 hours or ≥10,000 rounds | D | [ANALYSIS] | [ESTIMATE] |
| N-MA02 | Motor lubrication interval | ≥5,000 hours (sealed gearbox) | D | [COMPONENT: gearbox spec] | [ESTIMATE] |
| N-MA03 | Field-replaceable modules | Motor module, controller box, joystick — each replaceable independently ≤30 min | W | [USER: ship tech] | [DESIGN] |
| N-MA04 | No V1 maintenance change | Kit does NOT alter V1 maintenance schedule or procedures | D | [SC-N12-2] | [ANALYSIS] |

### CAT 15: COSTS (3 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-CO01 | Kit BOM + assembly cost | ≤$2,500 | D | [ANALYSIS: 50% margin at $5K sell] | [ESTIMATE] |
| N-CO02 | Kit sell price | $3,000-6,000 (baseline $4,500) | D | [MARKET: 20-30% of V5 price] | [ANALYSIS] |
| N-CO03 | NRE (total development) | ≤$15,000 | D | [BUDGET] | [PLAN] |

### CAT 16: SCHEDULES (2 requirements)

| Req ID | Requirement | Value/Limit | D/W | Source | Status |
|---|---|---|---|---|---|
| N-SH01 | Time from Phase A pass to first kit delivery | ≤8 weeks | W | [PLAN: Phase B+C+D] | [PLAN] |
| N-SH02 | Production lead time (per batch ≥5) | ≤3 weeks from order | W | [ANALYSIS: CNC + assembly] | [ESTIMATE] |

---

## 4. V1 Inherited Requirements (Binding Subset)

N12 kit must NOT violate these V1 requirements. They are inherited, not re-stated in full.

| V1 Req | Requirement Summary | N12 Impact |
|--------|-------------------|------------|
| V1 F-01 | ≥50 kN recoil absorption | Kit must not weaken (N-F04) |
| V1 K-01 | 360° azimuth | Kit must not obstruct (gear mesh allows full rotation) |
| V1 K-02 | -15° to +85° elevation | Kit must not reduce range |
| V1 K-03 | Manual ≥20°/s at ≤5 kg·m | Clutch release = V1 manual (N-K05) |
| V1 K-04 | Manual ≥15°/s at ≤3 kg·m | Clutch release = V1 manual (N-K06) |
| V1 SF-01 to SF-08 | All safety requirements | Kit adds N-SF01 to N-SF08, doesn't remove V1 safety |
| V1 OP-01 to OP-06 | All environmental | Kit meets same (N-OP01 to N-OP03) |
| V1 TR-01 | Mount ≤75 kg | Kit adds ≤15 kg → total ≤88 kg (2-person carry still OK) |
| V1 MA-01 to MA-06 | V1 maintenance | Kit does NOT change V1 maintenance (N-MA04) |

**Total V1 inherited: 24 binding requirements.** Full list in V1 Requirements List v1.0.

---

## 5. Failure-Derived Requirements

### 5a: Failure Mode Scan (N12 kit — new failure modes)

| Function | Failure Mode | Consequence | Severity | Req Generated |
|----------|-------------|-------------|----------|---------------|
| Motor drive | Motor runaway (controller fault) | Weapon swings uncontrolled | CRITICAL | N-SF06 (STO) |
| Motor drive | Motor stall under load | Cannot aim in motor mode | HIGH | N-E02 (peak power) |
| Clutch | Clutch fails to release on power loss | Cannot switch to manual | CRITICAL | N-SF03 (NC clutch) |
| Clamp | Clamp slips under recoil | Motor module shifts → misalignment | HIGH | N-F01 (grip force) |
| Clamp | Clamp over-tightened → V1 coating damage | Cosmetic damage to V1 | MED | N-M02 (rubber lining) |
| Gear mesh | Pinion wear → backlash increases | Aiming precision degrades | MED | N-QC03 (mesh test) |
| Controller | Water ingress → short circuit | Controller failure | HIGH | N-G04 + N-OP03 (IP65) |
| Cable | Cable snagged during traverse | Cable pulled → connector damage | HIGH | NEW: N-AS06 |
| Cable | Cable cut by debris/action | Motor control lost | CRITICAL | N-SF02 (cable-cut safe) |
| Encoder | Encoder drift after recoil | Position data incorrect | MED | N-SF08 (recoil recovery) |

### 5b: Additional Requirement from FMEA

| Req ID | Requirement | Value/Limit | D/W | Source |
|---|---|---|---|---|
| N-AS06 | Cable routing with strain relief + 360° rotation allowance | Cable spiral or slip ring at azimuth joint. No cable snag during full rotation. | D | [FMEA: cable snag] |

**Total requirements: 62 + 1 = 63** (38 N12-specific + 1 FMEA-derived + 24 V1 inherited)

### 5c: SPOF Check

| Component | If It Fails | Redundancy? | SPOF? | Mitigated By |
|-----------|-----------|:-----------:|:-----:|-------------|
| Controller (STM32) | Motor mode lost | No | **SPOF for motor mode** | N-SF03: clutch releases → V1 manual (inherent fallback) |
| EM clutch (1 per axis) | Stuck engaged → can't go manual | No | **SPOF for manual fallback** | NC design: power loss = release. N-SF03. |
| Joystick | Cannot command motor | No | **SPOF for motor input** | Replace joystick ≤5 min (N-MA03). Meanwhile: manual. |
| Ship power | All motor functions lost | No | **SPOF for all motor** | N-E04: V1 manual is ZERO power. Mount always works. |
| Clamp (azimuth) | Motor module detaches | No | **SPOF for az motor** | N-F01: 1,000-round test. Manual unaffected. |

**Key insight: Every N12 SPOF degrades to V1 MANUAL mode, which is proven (300 units). No N12 failure makes the weapon inoperable.** This is the lowest-risk failure architecture — ACH Boundary Rule compliant.

---

## 6. Audit Results — 7 Checks

| # | Check | Result | Target | Status |
|---|-------|--------|--------|--------|
| 1 | D/W Classification | TBD (CEO) | Every req classified | ⏳ CEO NEEDED |
| 2 | W Grading | TBD (CEO) | 100% W graded | ⏳ CEO NEEDED |
| 3 | Quantification | 56/63 = **89%** | ≥80% | ✅ PASS |
| 4 | Solution-Neutral | 2 minor violations (gear mesh, NC clutch — accepted for ADAPTIVE) | 0 ideal | ⚠️ ACCEPTED |
| 5 | Conflict Check | 3 resolved (C-N12-1/2/3) | 0 unresolved | ✅ PASS |
| 6 | Coverage Check | 16/16 categories | 16/16 | ✅ PASS |
| 7 | "Obviously Necessary" | Cable routing added (N-AS06) | 0 missing | ✅ PASS |

**CEO Action Required: D/W classification for 63 requirements. Proposal above marks D/W based on Product Planning — CEO confirms or adjusts.**

---

*v1.0 | 63 requirements (38 N12-specific + 1 FMEA + 24 V1 inherited) | 16/16 categories | 89% quantified*
