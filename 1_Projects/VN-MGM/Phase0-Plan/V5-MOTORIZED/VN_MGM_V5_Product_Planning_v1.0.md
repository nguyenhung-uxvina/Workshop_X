---
created: 2026-04-10
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-MGM
variant: V5-MOTORIZED
status: approved
base_product: V1-NAVAL-12.7 (300 shipped, TRL 9)
scope: PRODUCT (single variant, not portfolio)
---

# Product Planning — VN-MGM V5-MOTORIZED (Pre-RCWS Motorized Mount)

> **Delta from V1-NAVAL-12.7 (300 shipped).** V5 = V1 + servo motors + controller + EM clutch fallback.
> **Strategic role:** Bridge product từ mount manufacturer → weapon system integrator.

---

## 1. Stimulus Classification

| Source | Classification |
|---|---|
| **Market** | C-UAV/FPV threat — V1 manual mount KHÔNG THEO KỊP FPV ở ≤300m (angular rate 15.9°/s > manual 30°/s limit khi mệt). 300 existing customers need upgrade. |
| **Environment** | FPV drone warfare paradigm (Ukraine, Houthi, Myanmar) → VN Navy cần upgraded weapon response. |
| **Company** | 300 V1 shipped = proven base. VN-RCWS Phase 1 research done (archived). WX CNC + electronics capability. |

**Stimulus:** FPV drone threat tạo urgent demand cho motorized mount — manual mount mất mục tiêu ở cự ly gần. 300 existing customers = ready market. V5 = lowest-risk path to motorized capability.

---

## 2. Situation Analysis

### 2a. Life Cycle Phase
Manual mount: Maturation. Motorized/RCWS: Growth (global C-UAV demand accelerating). VN domestic motorized: **Pre-Introduction** (zero supply).

### 2b. Ansoff Matrix
**Product Development** — new product (motorized) cho existing customer (Navy đã mua 300 V1). LOW risk.

### 2c. Company Competence

| Dimension | WX Capability | Gap | Evidence |
|---|---|---|---|
| CNC mechanical | **EXCELLENT** | None | 300 mounts shipped [L1-FIELD] |
| Slewing ring / bearing | **EXCELLENT** | None | 300 mounts proven [L1-FIELD] |
| Recoil structure | **EXCELLENT** | None | 300 mounts, 50 kN validated [L1-FIELD] |
| Marine coating | **EXCELLENT** | None | Field-proven VN tropical [L1-FIELD] |
| Servo motor integration | **NEW** | Motor selection, gearbox, control loop | [GAP-1] — VN-RCWS research exists [L4] |
| Controller / encoder | **PARTIAL** | CUAV-SIM SS1 uses encoders. Controller = new. | [GAP-2] — sim experience transferable |
| EM clutch mechanism | **NEW** | Clutch selection, integration, fail-safe test | [GAP-3] — COTS EM clutches available |
| Power supply integration | **PARTIAL** | 24-48V ship power interface | [GAP-4] — standard marine electrical |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|---|---|---|---|
| V1 mount structure (base) | **TRL 9** | 300 shipped [L1-FIELD] | None |
| Slewing ring bearing | **TRL 9** | 300 shipped [L1-FIELD] | None |
| Recoil absorption (50 kN) | **TRL 9** | 300 shipped [L1-FIELD] | None |
| Marine corrosion protection | **TRL 9** | Field-proven [L1-FIELD] | None |
| STANAG 4568 deck interface | **TRL 9** | 300 shipped [L1-FIELD] | None |
| Servo motor (COTS) | TRL 6 | COTS industrial servos available [L3-STANDARDS] | Low |
| Gearbox (worm/planetary) | TRL 6 | COTS industrial gearboxes [L3-STANDARDS] | Low |
| Rotary encoder | TRL 7 | Used in VN-CUAV-SIM SS1 weapon station [L2-PROTOTYPE] | Low |
| EM clutch (fail-safe) | TRL 6 | COTS electromagnetic clutches [L3-STANDARDS] | Medium |
| Motor controller (custom) | TRL 4 | VN-RCWS Phase 1 research [L4-ESTIMATE] | Medium |
| Joystick interface | TRL 7 | COTS industrial joystick [L3-STANDARDS] | Low |
| 24-48V power integration | TRL 6 | Standard marine electrical [L3-STANDARDS] | Low |

**PROCEED gate:**
- TRL ≥4: ✅ ALL components
- Local content ≥40%: ✅ (structure + assembly + integration = local. Motor/encoder/clutch = import COTS)
- Competitive advantage: ✅ ($10-18K vs import RCWS $50-200K = 70-90% cheaper)

---

## 3. Need-Strength Matrix

```
                         WX STRENGTHS
                    CNC      Servo    Marine    Electronics  Customers
                    Mount    (new)    Protect   (encoder)    (300 V1)
TRẮC THỦ  ─────────────────────────────────────────────────────────────
NEEDS
Bám FPV nhanh      │ ★★★   │ ★★★   │  ★★    │  ★★       │ ★★★    │
(>30°/s)           │        │        │        │            │         │
Không mệt          │  ★     │ ★★★   │   ○    │   ○        │ ★★★    │
Fail-safe          │ ★★★   │  ★     │  ★★    │  ★★       │ ★★★    │
(manual backup)    │        │        │        │            │         │
Dễ bảo trì         │ ★★    │  ★     │  ★★    │  ★        │ ★★     │
(đồn xa)           │        │        │        │            │         │
```

**Preferred fields (★★★):** Bám FPV × servo + CNC + customers. WX strongest where need is highest.

---

## 4. Portfolio Assessment

| Product | Market (1-5) | WX Strength (1-5) | Score | Zone |
|---|---|---|---|---|
| V5-MOTORIZED | 5 (C-UAV urgent) | 4 (proven base + new servo) | **20 TARGET** | Invest |
| V1-MANUAL (comparison) | 3 (declining vs FPV) | 5 (300 shipped) | 15 TARGET | Maintain |
| Import RCWS (competitor) | 4 | 1 (not WX) | 4 EXIT | — |

---

## 5a. Knowledge Audit

| Domain | Source | Status | Action |
|---|---|---|---|
| Mount structure (mechanical) | 300 V1 shipped [L1-FIELD] | **PROVEN** | Direct reuse |
| Recoil dynamics | 300 V1 field data [L1-FIELD] | **PROVEN** | Direct reuse |
| Servo motor selection | VN-RCWS Phase 1 [L4] | **Researched** | Reference archive |
| Encoder integration | VN-CUAV-SIM SS1 morpho [L2] | **Designed** | Reference CUAV-SIM |
| EM clutch design | None | **GAP** | Accept [L3] — COTS well-documented |
| Controller (closed-loop position) | None WX-specific | **GAP** | Accept [L4] — standard control theory |
| Joystick ergonomics | None | **GAP** | Accept [L3] — COTS industrial joystick |
| Marine electrical (24-48V) | VN-AST, VN-XUONG experience | **Partial** | Reference |

No /research --deep needed. Gaps are COTS integration, not unknown physics.

---

## 5c. Idea Generation — 3D Space

V5-MOTORIZED is a defined variant (not concept selection needed). Ideas focus on **HOW to motorize:**

| Dimension | Variation | Option | Source |
|---|---|---|---|
| **Motor type** | DC brushed | Cheap, simple, brushes wear | [L3-STANDARDS] |
| | **DC brushless (BLDC)** | Longer life, efficient, proven VN-USV | [WX: VN-USV-SS thrusters] |
| | Stepper | Precise positioning, no encoder needed | [L3-STANDARDS] |
| **Gearbox** | **Worm gear** | Self-locking (important!), high reduction | [WX: V1 elevation mechanism] |
| | Planetary | Compact, high torque, not self-locking | [L3-STANDARDS] |
| | Direct drive | Simple, fast, needs brake | [L3-STANDARDS] |
| **Clutch** | **Electromagnetic (NC)** | Fail-safe: power off = disengage = manual | [SC-V5-1] |
| | Mechanical lever | Manual disengage, simple | [L3-STANDARDS] |
| | Overrunning | Auto-select motor or manual | [L3-STANDARDS] |
| **Controller** | Arduino/STM32 + PID | Simple, proven, open source | [L3-STANDARDS] |
| | **Industrial servo drive** | Robust, tuned, off-shelf | [L3-STANDARDS] |
| | Custom FPGA | Overkill for this application | Reject |
| **Joystick** | 2-axis analog | Simple, cheap | [L3-STANDARDS] |
| | **2-axis + speed mode button** | Variable speed (coarse + fine) | [L4-ESTIMATE] |
| | Game controller | Cheap, familiar to young soldiers | [L5-ASSUMPTION] |
| **Power** | 24V DC (ship standard) | Most common | [L3-STANDARDS] |
| | **24-48V DC (wide input)** | Compatible with more ships | [WX: VN-XUONG] |
| | Battery backup (UPS) | 10-15 min if ship power fails | [L4-ESTIMATE] |

---

## 6. Idea Selection — Pre-Selected (Not Competing Concepts)

V5-MOTORIZED is a defined upgrade path. Selection is on **implementation approach**, not product concept.

**Recommended configuration (from audit + trắc thủ analysis):**

| Subsystem | Selected | Rationale |
|---|---|---|
| Motor | BLDC (×2: azimuth + elevation) | WX has BLDC experience (VN-USV). Long life, no brushes, marine-suitable. |
| Gearbox | Worm gear (self-locking) | V1 elevation already uses worm concept. Self-lock = gun stays put when motor stops. Critical for safety. |
| Clutch | **Electromagnetic NC** (×2) | SC-V5-1: fail-safe mandatory. Power off → clutch releases → manual mode auto-activates. |
| Encoder | Incremental + index (×2) | VN-CUAV-SIM SS1 proven. ±0.1° resolution. |
| Controller | Industrial servo drive (×2) + master controller (STM32) | Servo drive handles motor commutation + PID. STM32 handles joystick input + mode logic + safety interlocks. |
| Joystick | 2-axis analog + speed toggle (coarse/fine) + trigger pass-through | Variable speed: coarse = fast slew (60-90°/s), fine = precise aim (5-10°/s). |
| Power | 24-48V DC wide input + 10-min battery UPS | Ship power varies. UPS = 10 min backup for power transition. |

**⏸️ HITL:** Configuration validated by CEO? (confirmed via trắc thủ analysis alignment)

---

## 7. Product Proposal — V5-MOTORIZED

### 7.1 Intended Functions (solution-neutral)

**Primary:**
- Aim weapon in azimuth and elevation using electrical drive with speed ≥60°/s (both axes)
- Maintain full manual aiming capability when electrical power is unavailable

**Secondary:**
- Accept commands from handheld controller with variable speed (coarse traverse + fine aim)
- Report angular position to external systems for scoring or fire control integration

**Auxiliary:**
- Accept future upgrade to remote/automated control without structural modification
- Provide position data interface for training simulation systems

### 7.2 Preliminary Requirements

| # | Category | Requirement | D/W | Target Value |
|---|---|---|---|---|
| R01 | Performance | Azimuth slew rate (motor) | D | ≥60°/s (target: 90°/s) |
| R02 | Performance | Elevation slew rate (motor) | D | ≥30°/s (target: 45°/s) |
| R03 | Performance | Azimuth range | D | 360° continuous |
| R04 | Performance | Elevation range | D | -15° to +85° |
| R05 | Performance | Position accuracy (encoder) | D | ±0.5° |
| R06 | Performance | Position hold under recoil (50 kN) | D | Return to aim point ≤0.3s after burst |
| R07 | **Safety** | **Manual fallback activation time** | **D** | **≤5 seconds, 1 action, no tools** |
| R08 | **Safety** | **Auto-fallback on power loss** | **D** | **EM clutch disengage ≤1 second** |
| R09 | Safety | Manual mode performance | D | ≥80% of V1-MANUAL capability |
| R10 | Safety | Emergency stop (E-stop) | D | HW interrupt, cuts motor power immediately |
| R11 | Structural | Recoil absorption | D | ≥50 kN peak, ≥80 kN with 14.5mm adapter |
| R12 | Structural | Total weight | D | ≤100 kg (V1 = 75 kg + motor/gearbox/clutch ≤25 kg) |
| R13 | Structural | Design life | D | ≥50,000 rounds + ≥100,000 motor cycles |
| R14 | Environment | Marine corrosion | D | ≥1,000 hrs salt fog (motor + clutch sealed) |
| R15 | Environment | Temperature | D | -10°C to +55°C |
| R16 | Environment | IP rating (motor + controller) | D | IP65 |
| R17 | Interface | Deck mounting | D | STANAG 4568 (identical to V1) |
| R18 | Interface | Weapon interchange | D | V1 + V3-ADAPTER-KIT compatible |
| R19 | Interface | Power input | D | 24-48V DC wide input |
| R20 | Interface | Position data output | W | RS485 or CAN bus (for future fire control) |
| R21 | Interface | Joystick cable length | D | ≥10m (operator can stand away from weapon) |
| R22 | Operations | Motorized setup time | D | ≤20 min, 2 persons |
| R23 | Operations | Joystick speed modes | D | ≥2 (coarse: ≥60°/s, fine: 5-10°/s) |
| R24 | Cost | Unit production cost | D | ≤$18K |
| R25 | Sovereignty | Local content | D | ≥60% (structure local, motor/encoder COTS import) |
| R26 | Maintenance | Motor service interval | W | ≥2,000 hours or ≥10,000 rounds |
| R27 | Maintenance | Clutch service interval | W | ≥5,000 engage/disengage cycles |
| R28 | Power | Battery backup duration | W | ≥10 minutes (motor operation on UPS) |

### 7.3 Cost Target

| Parameter | Target |
|---|---|
| Unit cost V5-MOTORIZED | $10-18K [L4-ESTIMATE] |
| Delta from V1 | +$5-10K (motors + gearboxes + clutches + controller + UPS + sealing) |
| Development budget | $50K [L5-ASSUMPTION] |
| Production volume | 15-30 units/year (5% of 300 V1 customers upsell + new orders) |
| Import RCWS reference | $50-200K |
| Cost advantage vs import | **70-90%** [L4] |
| Local content | ≥60% |

### 7.4 Working Principle Suggestions (OPTIONS — not decisions)

**Motor drive:**
- Option A: BLDC + worm gear — advantage: self-lock, long life, VN-USV experience / risk: worm efficiency 40-60%
- Option B: Stepper + planetary — advantage: precise, no encoder needed / risk: not self-locking, resonance at some speeds
- Option C: DC brushed + spur gear — advantage: cheapest / risk: brush wear, marine hostile

**Fail-safe clutch:**
- Option A: Electromagnetic NC (normally coupled) — advantage: fail-safe by physics / risk: power draw when engaged
- Option B: Electromagnetic NO (normally open) — advantage: no power when manual / risk: NOT fail-safe (power loss = motor engaged with dead motor = locked)
- Option C: Spring-return mechanical — advantage: simple / risk: slower disengage

**Controller architecture:**
- Option A: Dual servo drive + master STM32 — advantage: modular, each axis independent / risk: 3 boards to seal
- Option B: Single integrated controller — advantage: compact / risk: single point of failure
- Option C: PLC industrial — advantage: proven, robust / risk: expensive, overkill

### 7.5 Risk Assessment + Fallbacks

| Risk | Type | P | I | Fallback |
|---|---|---|---|---|
| Motor torque insufficient under recoil | Technical | MED | HIGH | Over-size motor 1.5×. Bench test with recoil simulator BEFORE integration. |
| EM clutch engagement shock (sudden transition manual→motor) | Technical | MED | MED | Soft-start ramp in controller. Clutch engages at low speed only. |
| Encoder loses reference after power cycle | Technical | LOW | MED | Index pulse + limit switches for homing sequence at power-on. |
| Joystick cable damage in combat | Operations | MED | HIGH | **Wired + wireless backup** (simple RF joystick as spare). Or: manual fallback (clutch disengage). |
| Salt water ingress to motor/controller | Environment | MED | HIGH | IP65 sealed enclosures. Conformal coating on PCB. Marine-grade connectors. |
| Motor/gearbox noise reveals position | Operations | LOW | LOW | Worm gear = quiet. BLDC = quieter than brushed. Acceptable. |
| 300 V1 customers resist upgrade cost ($10-18K on top of $3-5K already spent) | Market | MED | MED | Offer **N12-RETROFIT-KIT** ($3-6K) as cheaper alternative. Motor kit bolts onto existing V1. |
| Recoil fatigue on motor/gearbox (50K cycles) | Technical | MED | HIGH | Elastomer coupling between motor and gearbox absorbs shock. Accelerated life test before delivery. |

### 7.6 Sacred Constraints

| # | Constraint | Basis |
|---|---|---|
| **SC-V5-1** | **PHẢI có chế độ manual fallback khi mất điện — EM clutch auto-disengage ≤1s** | Safety — vũ khí không bao giờ "chết" vì mất nguồn |
| **SC-V5-2** | Chuyển motor → manual: ≤5 giây, 1 hành động, không cần công cụ | Thời gian phản ứng chiến thuật |
| **SC-V5-3** | Manual mode ≥80% hiệu suất V1-MANUAL | Trắc thủ phải bắn được, không chỉ quay được |
| **SC-V5-4** | Motor slew ≥60°/s cả 2 trục | Physics — FPV angular rate ở 200m = 15.9°/s, cần margin 4× |
| **SC-V5-5** | Position hold under recoil ≤0.3s recovery | Accuracy — burst fire phải duy trì hướng |
| SC-V1-1 | ≥50 kN recoil, 50K cycles (inherited from V1) | Physics — unchanged |
| SC-V1-3 | 1,000 hrs salt fog (inherited from V1) | Environment — unchanged |

### 7.7 Gate 0 Quick Check

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4 for key technologies? | All TRL ≥4 (base TRL 9, motors/clutch TRL 6) | ✅ |
| Local content ≥40%? | Structure (local) + COTS motors (import) = ~60% | ✅ |
| Competitive advantage? | $10-18K vs import RCWS $50-200K = 70-90% cheaper | ✅ |
| Within WX financial capacity? | $50K NRE, self-funded | ✅ |
| Portfolio alignment? | Upsell to 300 existing customers, path to RCWS | ✅ |
| No IP/regulatory blockers? | No restricted technology (COTS motors, standard control) | ✅ |

**Gate 0: PROCEED**

---

## 8. Development Approach

### 8.1 Build Sequence

```
Phase A: BENCH TEST (4 weeks, $3-5K)
  Week 1-2: Source motor + gearbox + EM clutch (COTS)
  Week 2-3: Mount on test bench (NOT on V1 mount yet)
  Week 3-4: Controller development (STM32 + servo drive)
            Test: motor speed, torque, clutch engage/disengage, joystick
  Gate A:   Motor moves, clutch works, joystick controls
            EM clutch fail-safe verified (pull power → manual mode ≤1s)

Phase B: INTEGRATION (4 weeks, $5-8K)
  Week 5-6: Integrate motor + gearbox + clutch onto V1 mount
  Week 7-8: Full system test: motor drive + manual fallback + recoil test
            Joystick cable test (10m)
            Encoder resolution verification
  Gate B:   V5 mount complete, both modes verified

Phase C: RECOIL TEST (2-3 weeks, $2-3K)
  Week 9-10: Live fire test at military range
             50-round burst: motor position hold under recoil
             Manual fallback during firing: clutch disengage + resume manual
             Endurance: 500 rounds motor mode
  Week 11:  Fix issues, re-test if needed
  Gate C:   Live fire PASS → ready for customer demo

Phase D: CUSTOMER DEMO + FIRST ORDER (4 weeks)
  Week 12:  Demo to 3-5 top V1 customers (existing Navy contacts)
  Week 13-16: First PO → first delivery
```

**Total: 11-15 weeks, $10-16K prototype cost**

### 8.2 Comparison with V1 Development

| Aspect | V1 (original, from scratch) | V5 (motorized upgrade) |
|---|---|---|
| Design from zero | 100% new | **35% new** (motor + clutch + controller only) |
| Manufacturing new | All parts | Motor bracket, clutch housing, controller box |
| Testing | Full qualification | **Delta test** (motor + clutch + recoil only) |
| Time | 6-12 months | **3-4 months** |
| NRE | $45K | **$50K** (similar — motor/clutch qualification) |

---

## 9. Trắc Thủ Operation Analysis (Summary)

### V5 Operational Improvement vs V1

| Metric | V1-MANUAL | V5-MOTORIZED | Improvement |
|---|---|---|---|
| Time to engage / target | 26-44s | 14-23s | **-43%** |
| Effective engagement zone | 300-2000m | 100-2000m | **+200m close-range** |
| Aiming accuracy | ±2-5 mrad | ±0.5-2 mrad | **+2-3×** |
| Combat endurance | 30-60 min | 2-4 hours | **+3-5×** |
| Swarm defense (3 FPV) | 1.25/3 kill | 2.1/3 kill | **+68%** |
| Crew rotation | Every 30-60 min | Every 2-4 hours | **-2-4× manning** |

### V5 Operation Modes

```
MODE 1: MOTORIZED (normal)
  Joystick → Controller → Motor → Mount → Weapon
  Speed: 60-90°/s (coarse) / 5-10°/s (fine)
  EM clutch: ENGAGED (motor connected to mount)

MODE 2: MANUAL (fallback — automatic on power loss)
  Hand crank → Gear → Mount → Weapon
  Speed: ≤30°/s (same as V1)
  EM clutch: DISENGAGED (motor disconnected)
  Activation: automatic (power loss) or manual (clutch button)

MODE TRANSITION:
  Motor → Manual: ≤1s (automatic) or ≤5s (manual button)
  Manual → Motor: ≤3s (power on + clutch engage + homing)
```

---

## Appendix: CEO Decisions Record

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | V5 scope = Option A (Pre-RCWS, motor only, no optics/FC) | 2026-04-10 | Musk Sequence — prove motor before adding complexity |
| 2 | SC-V5-1 confirmed: EM clutch mandatory fallback | 2026-04-10 | Trắc thủ analysis — mất điện = mất vũ khí nếu không có fallback |
| 3 | BLDC + worm gear recommended | 2026-04-10 | Self-locking critical, VN-USV BLDC experience |
| 4 | Target: upsell 5% of 300 V1 customers | 2026-04-10 | 15 units × $14K avg = $210K |
| 5 | N12-RETROFIT-KIT as cheaper alternative ($3-6K) | 2026-04-10 | For customers who can't afford full V5 |

---

*Product Planning v1.0 | VN-MGM V5-MOTORIZED | Delta from V1-NAVAL (300 shipped) | Pahl & Beitz §3.1 | 2026-04-10*
