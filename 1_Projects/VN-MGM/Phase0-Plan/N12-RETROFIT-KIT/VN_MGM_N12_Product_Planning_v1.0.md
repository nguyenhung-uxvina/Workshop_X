---
created: 2026-04-10
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-MGM
variant: N12-RETROFIT-KIT
status: approved
base_product: V1-NAVAL-12.7 (300 shipped, TRL 9)
scope: PRODUCT (retrofit kit for existing V1 installed base)
strategic_role: "Monetize 300 installed V1s. Fund V5-MOTORIZED. Prove motor integration before V5."
---

# Product Planning — VN-MGM N12-RETROFIT-KIT (Motorization Kit for V1)

> **N12 = motor kit that bolts ON existing V1 mount. NOT a new mount. NOT V5.**
> **300 V1 deployed × 15-25% conversion = 45-75 kits = $200-340K revenue.**
> **Same components as V5 bench test → one R&D, two products.**

---

## 1. Stimulus Classification

| Source | Classification |
|---|---|
| **Market** | FPV threat urgent. 300 V1 manual mounts can't track FPV ≤300m. Fleet-wide V5 replacement ($10-18K × 300 = $3-5.4M) = impossible budget. N12 at $3-6K = affordable upgrade. |
| **Company** | Phase A bench test validates motor + clutch for BOTH N12 and V5. N12 ships first → revenue funds V5 NRE. Field experience from N12 → informs V5 design. |

---

## 2. IFR + Sacred Constraints

**IFR:** "The ideal retrofit kit adds motorized aiming to an EXISTING V1 mount with ZERO modification to deck interface, ZERO removal of V1 from ship, ZERO loss of V1 manual capability, using components that FIT on V1 without welding or permanent alteration."

### Sacred Constraints

| # | Constraint | Basis | Type |
|---|---|---|---|
| SC-N12-1 | V1 stays on deck — NO removal to install kit | Operations — tàu không vào cảng | Scope |
| SC-N12-2 | V1 manual mode 100% preserved after kit installation | Safety — weapon never "dies" | Safety |
| SC-N12-3 | Kit fully removable → V1 returns to original ≤30 minutes | Reversibility — Navy requires non-permanent | Scope |
| SC-N12-4 | **NO welding, NO drilling on V1 structure** | Structural integrity — don't damage proven mount | Physics |
| SC-N12-5 | Standard tools only (10,13,17,19mm wrenches) | Operations — ship tool kit | Operations |

---

## 3. Product Definition — What's In The Kit

### N12 Kit Contents (Bill of Kit)

```
N12-RETROFIT-KIT — 1 box, ≤15 kg total
├── AZIMUTH MOTOR MODULE (1×)
│   ├── BLDC motor + worm gearbox (pre-assembled)
│   ├── EM clutch NC 24V (integrated)
│   ├── Clamp bracket (fits V1 pedestal OD, adjustable)
│   ├── Elastomer isolation bushings (4×)
│   └── Incremental encoder + index
│
├── ELEVATION MOTOR MODULE (1×)
│   ├── BLDC motor + worm gearbox (pre-assembled)
│   ├── EM clutch NC 24V (integrated)
│   ├── Clamp bracket (fits V1 elevation arm, adjustable)
│   ├── Elastomer isolation bushings (4×)
│   └── Incremental encoder + index
│
├── CONTROLLER BOX (1×)
│   ├── STM32 master controller
│   ├── 2× servo drives
│   ├── Power input (24-48V DC, wide)
│   ├── E-stop relay
│   ├── Cable-cut watchdog
│   └── IP65 sealed enclosure, ≤200×150×100mm
│
├── JOYSTICK (1×)
│   ├── 2-axis analog, industrial grade
│   ├── Speed mode toggle (coarse/fine)
│   ├── E-stop button (red mushroom)
│   └── 10m cable with keyed connector
│
├── CABLES + CONNECTORS
│   ├── Motor cables (2× 2m, keyed)
│   ├── Encoder cables (2× 2m, shielded, keyed)
│   ├── Power cable (3m, with inline fuse)
│   └── All connectors IP67, keyed (cannot connect wrong)
│
├── MOUNTING HARDWARE
│   ├── Adjustable clamp set (fits V1 pedestal Ø300-350mm)
│   ├── Stainless bolts, washers, lock nuts
│   ├── Cable ties + marine-grade cable clips
│   └── Grounding strap (kit → V1 → deck)
│
└── DOCUMENTATION
    ├── Installation manual (Vietnamese + English, with photos)
    ├── Wiring diagram (laminated, fits in controller box)
    ├── Quick-start card (laminated, fits in joystick handle)
    └── Maintenance schedule card
```

### What N12 Does NOT Include

| NOT included | Why | Where to get |
|---|---|---|
| V1 mount | Customer already has it (300 deployed) | Already installed |
| Weapon | Customer already has DShK/NSV | Already on V1 |
| UPS battery | Optional add-on, keeps price low | Sell separately ($200-500) |
| Camera/optics | This is motor-only (Option A scope) | Future upgrade |
| Ship power supply | Use existing ship 24V DC | Ship infrastructure |

---

## 4. Key Design Challenge — SC-N12-4 (No Drilling, No Welding)

This is the DEFINING constraint. How to attach motor modules to V1 without modifying V1:

### 4a: Available Mounting Surfaces on V1

```
V1 MOUNT — attachment opportunities (NO new holes)

AZIMUTH MOTOR:
  ● V1 pedestal = cylindrical tube Ø300-350mm
  → CLAMP around pedestal (split-ring clamp, tighten with bolts)
  → Friction + clamping force holds motor bracket
  → Clamp lined with rubber (protect V1 coating, increase friction)

ELEVATION MOTOR:
  ● V1 elevation arm = rectangular section ~60×40mm
  → CLAMP around arm (U-bolt or saddle clamp)
  → Motor drives through gear meshing with existing V1 elevation gear
  OR: friction wheel pressing against V1 elevation arc

CONTROLLER BOX:
  ● V1 has existing bolt holes on pedestal base plate
  → Use EXISTING bolt holes (no new drilling)
  → Or: clamp to pedestal alongside azimuth motor bracket

CABLES:
  ● Route along V1 structure using cable ties + marine clips
  → No penetrations needed
```

### 4b: Drive Coupling Methods (No Permanent Modification)

| Method | Az Motor → V1 Traverse | El Motor → V1 Elevation | Removable? |
|---|---|---|---|
| **A: Friction wheel** | Rubber wheel presses against V1 slewing ring edge | Rubber wheel presses against V1 elevation arc | ✅ YES — loosen clamp → remove |
| **B: Gear mesh** | Pinion gear meshes with V1 slewing ring teeth (if toothed) | Pinion meshes with V1 elevation sector gear | ✅ YES — disengage pinion |
| **C: Belt/chain wrap** | Timing belt wraps around V1 pedestal | Chain wraps around V1 elevation arm | ✅ YES — remove belt/chain |

**Recommended: B (gear mesh) for azimuth if V1 slewing ring has external teeth. A (friction wheel) as fallback if V1 ring is smooth.**

**⏸️ CEO Decision needed during Phase A bench test:** Examine actual V1 slewing ring — does it have external gear teeth? This determines coupling method.

---

## 5. Requirements (Abbreviated — inherits V1 base)

### N12-Specific Requirements (delta from V1)

| ID | Requirement | Value/Limit | D/W | Source |
|---|---|---|---|---|
| N12-01 | Kit total weight | ≤15 kg (1-person carry) | D | [SC-N12-1] |
| N12-02 | Installation time (2 persons, on ship) | ≤4 hours, V1 stays on deck | D | [SC-N12-1] [USER: ship tech] |
| N12-03 | Removal time (V1 back to original) | ≤30 minutes | D | [SC-N12-3] |
| N12-04 | No welding on V1 | ZERO welds on existing V1 structure | D | [SC-N12-4] |
| N12-05 | No drilling on V1 | ZERO new holes on existing V1 structure | D | [SC-N12-4] |
| N12-06 | V1 manual mode after kit install | 100% of V1-MANUAL slew rate + effort | D | [SC-N12-2] |
| N12-07 | Motor slew rate (azimuth) | ≥45°/s (coarse), ≥5°/s (fine) | D | [USER: trắc thủ] |
| N12-08 | Motor slew rate (elevation) | ≥25°/s (coarse), ≥3°/s (fine) | D | [USER: trắc thủ] |
| N12-09 | EM clutch auto-disengage on power loss | ≤1 second → manual free [SC-N12-2] | D | [SAFETY] |
| N12-10 | E-stop hardwired | Cuts motor power ≤50ms [SAFETY-CRITICAL] | D | [SAFETY] |
| N12-11 | Cable-cut safe state | Signal loss >200ms → motor stop + clutch release [SAFETY-CRITICAL] | D | [SAFETY] |
| N12-12 | V1 revision compatibility | Must fit V1 units from all production batches (≥3 revisions tested) | D | [FIELD: 300 units, multiple batches] |
| N12-13 | Adjustable clamp range | Fits V1 pedestal Ø300-350mm (covers all V1 revisions) | D | [FIELD: V1 dimension survey] |
| N12-14 | No motor/kit in weapon recoil path | ≥50mm clearance from recoil zone after installation | D | [SAFETY] |
| N12-15 | Kit withstands 50 kN recoil vibration | Clamps maintain grip, no loosening after 1,000 rounds | D | [PHYSICS] |
| N12-16 | IP65 controller box | Sealed against rain + spray | D | [FIELD: marine environment] |
| N12-17 | All connectors keyed + IP67 | Cannot connect wrong cable. Waterproof. | D | [SAFETY: "obviously necessary"] |
| N12-18 | Grounding strap (kit → V1 → deck) | ≤0.1Ω resistance | D | [STANDARD: ship electrical] |
| N12-19 | Unit cost (kit BOM + labor) | ≤$2.5K | D | [ANALYSIS: margin target] |
| N12-20 | Sell price | $3-6K (baseline $4.5K) | D | [ANALYSIS: market] |
| N12-21 | NRE (total development) | ≤$15K | D | [ANALYSIS: budget] |
| N12-22 | Time to first kit delivery | ≤8 weeks from Phase A bench test pass | W | W+ | [ANALYSIS: timeline] |
| N12-23 | Installation manual in Vietnamese | With photos, step-by-step, laminated | D | [USER: ship tech] |
| N12-24 | Training time (installer) | ≤2 hours for ship tech to learn installation | W | W+ | [USER: ship tech] |
| N12-25 | Training time (operator — motor mode) | ≤2 hours for V1-experienced trắc thủ | W | W+ | [USER: trắc thủ] |
| N12-26 | Recoil recovery (motor mode) | ≤0.5s to aim point after 3-round burst | D | [USER: trắc thủ] |
| N12-27 | Position data output | RS485 or CAN bus (for future camera/FCS add-on) | W | W | [RE: upgrade port] |
| N12-28 | Power input | 24-48V DC wide input, from ship power | D | [FIELD: ship power systems] |

### Inherited from V1 (unchanged — see V1 Requirements List v1.0)

All V1 requirements (72 items) remain valid. N12 kit ADDS capability — doesn't change V1 base requirements. Key inherited:
- G-01: STANAG 4568 deck interface (unchanged)
- F-01: 50 kN recoil (V1 handles this, kit must not weaken)
- OP-01 to OP-06: All environmental (kit must survive same conditions)
- SF-01 to SF-08: All V1 safety (kit must not violate any)
- MA-01 to MA-06: V1 maintenance (kit adds own maintenance, doesn't change V1's)

---

## 6. Risk Assessment

| Risk | P | I | Fallback |
|---|---|---|---|
| **Clamp slips under recoil** | MED | HIGH | Higher clamp torque + rubber lining + test at 1,000 rounds. If still slips → add set screws into non-structural V1 surface (minimal modification, CEO approve). |
| **V1 revision incompatibility** | MED | HIGH | Adjustable slot-hole brackets. Survey ≥3 V1 revisions before kit production. Field installer carries shim set. |
| **Motor coupling backlash (friction wheel)** | MED | MED | Spring-loaded friction wheel maintains contact. Or: switch to gear mesh if V1 has external teeth. |
| **Recoil damages motor/encoder** | MED | HIGH | Elastomer isolation bushings. Same solution as V5 (TG-2). Phase A bench test validates. |
| **Ship 24V power insufficient for 2 motors** | LOW | MED | Peak draw ≤600W. Most patrol boats have ≥2kW aux power. Add inline fuse + voltage monitor. |
| **Operator confused by 2 control modes** | LOW | MED | Joystick has MODE LED (green=motor, red=manual). Training ≤2 hours. Manual mode = identical to V1 they already know. |
| **Kit gets in way of weapon operation** | MED | MED | Clearance check (N12-14: ≥50mm from recoil path). Install manual has "clearance verification checklist." |

---

## 7. Development Approach

```
Phase A: BENCH TEST (shared with V5) — 4 weeks, $600-1,500
  Motor + gearbox + EM clutch + controller + joystick on test bench
  Gate A: Motor moves, clutch works, fail-safe verified
  → SERVES BOTH N12 AND V5

Phase B: V1 FIT TEST — 2 weeks, $500-1,000
  Mount kit components on ACTUAL V1 (borrow from stock)
  Design + iterate clamp brackets (WX CNC)
  Test: clamp holds under hand-simulated recoil (push/pull test)
  Verify: 3 V1 revisions compatibility
  Gate B: Kit fits all V1 revisions, clamps hold

Phase C: LIVE FIRE TEST — 2 weeks, $500-1,000
  Install kit on V1 at military range
  Fire 500 rounds motor mode
  Fire 100 rounds → pull power → manual mode (SC-N12-2 validation)
  Measure: clamp slip, recoil recovery, motor temp, encoder drift
  Gate C: 500 rounds no failure, manual fallback works, trắc thủ approves

Phase D: FIRST 5 KITS — 2 weeks, $5K materials
  Produce 5 pilot kits
  Install on 5 V1 mounts at 2-3 different ships
  30-day field trial
  Gate D: 0 failures in 30 days → production go

TOTAL: 10 weeks, ~$8-10K (including 5 pilot kits)
```

---

## 8. Revenue Model

| Scenario | Conversion | Units/yr | Revenue/yr | 5-Year |
|---|---|---|---|---|
| Conservative (10%) | 30 kits | 6/yr sustain | $135K + $27K/yr | **$243K** |
| Base (15%) | 45 kits | 9/yr sustain | $203K + $41K/yr | **$367K** |
| Optimistic (25%) | 75 kits | 15/yr sustain | $338K + $68K/yr | **$610K** |

**Plus:** Each kit installed = 1× N10-MAINT-KIT/year ($300/yr) for motor maintenance.

---

## 9. N12 vs V5 — CEO Summary

| Metric | N12-RETROFIT | V5-MOTORIZED |
|---|---|---|
| Target customer | **300 V1 existing** | New customers |
| Price | $3-6K | $10-18K |
| NRE | $10-15K | $50K |
| Time to revenue | **8-10 weeks** | 15+ weeks |
| Conversion rate | **15-25%** | 5% |
| Performance vs V5 | **80-85%** | 100% |
| Kit weight | **≤15 kg** (add-on) | ≤100 kg (complete mount) |
| V1 modification | **ZERO** (clamp-on) | N/A (replaces V1) |
| Strategic role | **Fund V5 + prove motor** | Premium product |

---

## 10. Gate 0

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4? | Motor TRL 6, kit integration TRL 3 → Phase A resolves | ✅ (with bench test) |
| Local content ≥40%? | Brackets + assembly local, motor/encoder COTS | ✅ (~55%) |
| Competitive advantage? | No competitor offers "bolt-on motorization for existing mount" | ✅ UNIQUE |
| Within WX capacity? | $10-15K NRE, shared with V5 bench test | ✅ |
| Portfolio alignment? | Monetizes 300 installed base, funds V5 | ✅ |
| No IP/regulatory blockers? | COTS motors, standard control — no restrictions | ✅ |

**Gate 0: PROCEED**

---

## CEO Decisions Record

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | N12 BEFORE V5 in sequence | 2026-04-10 | Retrofit 300 base first, fund V5 with N12 revenue |
| 2 | SC-N12-4: NO welding/drilling on V1 | 2026-04-10 | Don't damage proven structure |
| 3 | SC-N12-3: Kit fully removable ≤30 min | 2026-04-10 | Navy requires non-permanent modification |
| 4 | Conflicts C-N12-1 + C-N12-2 accepted | 2026-04-10 | Adjustable brackets + WX warrants combined system |
| 5 | Phase A bench test serves BOTH N12 and V5 | 2026-04-10 | One R&D, two products |

---

*Product Planning v1.0 | VN-MGM N12-RETROFIT-KIT | For 300 V1 installed base | Pahl & Beitz §3.1 | 2026-04-10*
