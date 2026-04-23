# V-SMASH REQUIREMENTS LIST — STRUCTURAL GAP ANALYSIS
## Cross-Reference Against P&B Figure 5.3 Standard Checklist
### Version 1.0 | February 2026

---

**Subject:** VN-VSMASH-001 (12.7mm C-UAS AI Fire Control System)  
**Current State:** 57 requirements across 15 categories  
**Benchmark 1:** P&B Figure 5.3 Standard — 16 categories  
**Benchmark 2:** VN-AIROBOT-001 (Reverse-Engineered) — 20 categories, 137 requirements  
**Benchmark 3:** VN-TUAV-DEMO-001 (Mature Defense RL) — 16 categories, 265 requirements  
**Prepared by:** KN Nguyen + Claude AI Mentor  
**Date:** 14 February 2026  

---

## 1. STRUCTURAL COMPARISON OVERVIEW

### 1.1 Category-by-Category Mapping

| # | P&B Fig 5.3 Standard | V-SMASH (57 req) | AIROBOT (137 req) | TUAV (265 req) | V-SMASH Status |
|---|---|---|---|---|---|
| 1 | **Geometry** | ✅ Physical/Geometry (5) | ✅ GEO (7) | ✅ Geometry (21) | PRESENT but thin |
| 2 | **Kinematics** | ✅ Integration/Kinematics (4) | ✅ KIN (8) | ✅ Kinematics (17) | PRESENT but thin |
| 3 | **Forces** | ⚠️ Partially (recoil in R12) | ✅ FOR (5) | ✅ Forces (16) | **WEAK — needs expansion** |
| 4 | **Energy** | ⚠️ Merged into Physical (R21-R22) | ✅ ENE (9) | ✅ Energy (31) | **WEAK — only 2 requirements** |
| 5 | **Material** | ❌ **MISSING** | ✅ MAT (4) | ✅ Material (22) | **GAP — zero requirements** |
| 6 | **Signals** | ✅ Signals/Data (4) | ✅ SIG (15) | ✅ Signals (29) | PRESENT but very thin |
| 7 | **Safety** | ✅ Safety (5) | ✅ SAF (9) | ✅ Safety (28) | PRESENT — good quality, needs expansion |
| 8 | **Ergonomics** | ✅ Ergonomics (3) | ✅ ERG (6) | ✅ Ergonomics (13) | PRESENT but thin |
| 9 | **Production** | ✅ Production (4) | ✅ PRD (6) | ✅ Production (7) | ADEQUATE |
| 10 | **Quality Control** | ✅ QC (2) | ✅ QC (4) | ✅ Quality Control (7) | PRESENT but thin |
| 11 | **Assembly** | ✅ Assembly (3) | ✅ ASM (5) | ✅ Assembly (7) | ADEQUATE |
| 12 | **Transport** | ✅ Transport/Storage (2) | ✅ TRN (4) | ✅ Transport (10) | PRESENT but thin |
| 13 | **Operation** | ⚠️ Merged into Maintenance (4) | ✅ OPR (9) | ✅ Operation (19) | **WEAK — not separated from Maintenance** |
| 14 | **Maintenance** | ⚠️ Merged above (4 total for both) | ✅ MNT (6) | ✅ Maintenance (16) | **WEAK — combined category** |
| 15 | **Recycling** | ✅ Recycling/Disposal (2) | ✅ EOL (3) | — | ADEQUATE for this stage |
| 16 | **Costs** | ⚠️ In Production (R41) | ✅ CST (5) | ✅ Costs (11) | **WEAK — only 1 cost requirement** |
| 17 | **Schedules** | ❌ **MISSING** | ✅ SCH (3) | ✅ Schedule (11) | **GAP — zero requirements** |
| — | *Legal/Regulatory* | ✅ Legal/Regulatory (2) | — | — | EXTRA (not in P&B Fig 5.3 but valuable) |
| — | *Performance* | ✅ Performance (4) | — | — | EXTRA (good — merged into Functional in others) |
| — | *Environmental* | ✅ Environmental (6) | ✅ ENV (8) | — | EXTRA (P&B puts in Operation; better separated) |
| — | *Communications* | — | ✅ COM (8) | — | N/A for V-SMASH (no cloud comms) |
| — | *Functional* | ✅ Functional (7) | ✅ FUN (13) | — | PRESENT |

### 1.2 Summary Scorecard

| Metric | V-SMASH | AIROBOT | TUAV | Assessment |
|---|---|---|---|---|
| **Total requirements** | 57 | 137 | 265 | V-SMASH is 4.6x thinner than mature defense RL |
| **P&B categories covered** | 13/16 | 16/16+ | 16/16 | V-SMASH missing 3 standard categories |
| **Categories completely MISSING** | 2 | 0 | 0 | Material, Schedule |
| **Categories critically WEAK** | 4 | 0 | 0 | Forces, Energy, Costs, Operation |
| **Demands (M/D)** | 43 (75%) | 75 (55%) | 234 (88%) | V-SMASH ratio is reasonable |
| **Wishes (W)** | 14 (25%) | 62 (45%) | 31 (12%) | V-SMASH under-explores wishes |
| **Avg reqs per category** | 3.8 | 6.9 | 16.6 | V-SMASH needs 2-3x more depth per category |

---

## 2. DETAILED GAP ANALYSIS BY CATEGORY

### 2.1 ❌ COMPLETELY MISSING CATEGORIES

#### GAP 1: MATERIAL (MAT) — Zero Requirements

**What P&B Figure 5.3 says:** "Flow and transport of materials. Physical and chemical properties of the initial and final product, auxiliary materials, prescribed materials (food regulations etc.)"

**Why this matters for V-SMASH:**

V-SMASH operates in harsh military environments and mounts directly on weapons that generate extreme vibration, heat, and chemical exposure (gunpowder residue, solvent). Material selection affects every aspect of reliability.

**Recommended additions:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | MAT-01 | Enclosure material | Aluminum alloy 6061-T6 or equivalent | I | Strength-to-weight, machinability, local sourcing |
| D | MAT-02 | Optical window material | Optical-grade glass or polycarbonate, AR coated | T | Scratch resistance + transmission >90% |
| D | MAT-03 | Material compatibility with gun cleaning solvents | Resistant to CLP, Hoppe's No.9, Ballistol | T | Field maintenance reality |
| D | MAT-04 | Material temperature stability | No dimensional change >0.1mm across -10°C to +55°C | A | Zero shift requirement |
| D | MAT-05 | Connector material | Gold-plated contacts (MIL-spec connectors) | I | Corrosion resistance in humid environments |
| W(H) | MAT-06 | RoHS compliance of materials | All materials RoHS 3 compliant | A | Export market requirement |
| W(H) | MAT-07 | Material local availability | ≥60% by mass from Vietnamese/Asian suppliers | A | Align with R39 local content target |
| W(M) | MAT-08 | EMI shielding material | Enclosure provides ≥40dB shielding at 1GHz | T | Supports R35 MIL-STD-461G compliance |

**Impact of this gap:** Without MAT-03 (solvent resistance), the first time a soldier cleans their weapon with the V-SMASH attached, chemical exposure could damage seals, cloud the optic window, or corrode connectors. This is a field failure waiting to happen that systematic methodology would have caught immediately.

---

#### GAP 2: SCHEDULE (SCH) — Zero Requirements

**What P&B Figure 5.3 says:** "End date of development, project planning and control, delivery date."

**Why this matters for V-SMASH:**

V-SMASH is a multi-variant product (X1 Handheld, X2 Clip-on, X3 Integrated, X4 RCWS) with phased development. Without schedule requirements, there's no formal commitment to milestones, no basis for resource planning, and no accountability for delays.

**Recommended additions:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | SCH-01 | Phase 2: Conceptual Design completion | Completed (v1.1) | Milestone | Done |
| D | SCH-02 | Phase 3: Embodiment Design completion | Month 6 from project start | Milestone | Layout + material + manufacturing |
| D | SCH-03 | Phase 4: Detail Design completion | Month 10 | Milestone | Production drawings + BOM |
| D | SCH-04 | First functional prototype (X1 variant) | Month 12 | Milestone | Benchtop demonstration |
| D | SCH-05 | AI model training dataset collected | ≥5,000 labeled images by Month 8 | Milestone | Training data is long lead item |
| D | SCH-06 | MIL-STD-810H environmental qualification | Complete by Month 18 | Test schedule | Prerequisite for acceptance |
| D | SCH-07 | MIL-STD-461G EMC qualification | Complete by Month 18 | Test schedule | Parallel with MIL-STD-810H |
| D | SCH-08 | Field trial with military unit | Month 20 | Milestone | User validation |
| W(H) | SCH-09 | LRIP (Low-Rate Initial Production) | Month 24 | Milestone | First deliverable units |
| W(M) | SCH-10 | X4 RCWS variant development start | Month 12 (after X1 proven) | Milestone | Variant sequencing |

**Impact of this gap:** Without SCH-05, nobody is tracking the AI training dataset — which is a 6-8 month lead time item. If this doesn't start early, the entire prototype schedule slips. This is a classic defense program risk that schedule requirements would surface immediately.

---

### 2.2 ⚠️ CRITICALLY WEAK CATEGORIES

#### WEAK 1: FORCES (FOR) — Only 1 Implicit Requirement

**Current state:** R12 mentions "MIL-STD-810H Method 514.8" (vibration) which implicitly covers some force requirements, but there is no dedicated Forces section.

**What's missing — V-SMASH-specific force requirements:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | FOR-01 | Recoil shock resistance (12.7mm) | ≥50g peak, 11ms pulse | T | MIL-STD-810H Method 516.8, Procedure I | 
| D | FOR-02 | Recoil shock resistance (7.62mm) | ≥15g peak, 11ms pulse | T | Handheld variant on assault rifle |
| D | FOR-03 | Continuous vibration (vehicle-mounted) | Per MIL-STD-810H 514.8 Cat 4 | T | RCWS on moving vehicle |
| D | FOR-04 | Mounting force on Picatinny rail | Withstand ≥200N pull-off force | T | Prevent detachment during firing |
| D | FOR-05 | Drop resistance | 1.5m drop onto concrete, any orientation | T | MIL-STD-810H Method 516.8 Procedure IV |
| D | FOR-06 | Optical zero retention after shock | Shift <0.5 MOA after 500 rounds | T | **CRITICAL** — the core value proposition |
| W(H) | FOR-07 | Sustained firing thermal load | Maintain function after 200 rounds continuous 12.7mm | T | Barrel heat transfer to device |
| W(H) | FOR-08 | Weight distribution balance | Center of gravity within 20mm of mounting axis | A | Weapon handling not degraded |

**Impact of this gap:** FOR-06 (zero retention after shock) is arguably the SINGLE MOST IMPORTANT requirement for any weapon sight. If V-SMASH's AI tracking offset drifts after recoil — even by 1 MOA — hit probability degrades. This requirement would drive material selection, mounting design, and optical system architecture. Its absence from the requirements list is a serious methodology gap.

---

#### WEAK 2: ENERGY (ENE) — Only 2 Requirements (R21, R22)

**Current state:** R21 (power consumption <10W) and R22 (battery life >6 hours) are in Physical/Geometry section, not their own Energy category.

**What's missing:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | ENE-01 | Operating voltage | 7-16V DC input range | T | Compatible with military batteries + vehicle 12V |
| D | ENE-02 | Power consumption (standby/detection mode) | ≤5W | T | Battery preservation when not engaging |
| D | ENE-03 | Power consumption (full tracking mode) | ≤15W peak | T | GPU inference + servo + display |
| D | ENE-04 | Battery type (internal) | Rechargeable Li-ion, military-grade | I | Standard logistics chain |
| D | ENE-05 | External power input (RCWS variant) | 12-28V DC from vehicle bus | T | NATO STANAG vehicle power |
| D | ENE-06 | Power-on to operational time | ≤15 seconds | T | Combat readiness |
| D | ENE-07 | Graceful shutdown on low battery | Save state + safe mode at ≤10% | D | Prevent data corruption |
| D | ENE-08 | Reverse polarity protection | No damage from reversed connection | T | Field wiring errors |
| W(H) | ENE-09 | Battery hot-swap without power loss | Capacitor hold-up ≥30 seconds | T | Continuous operation during battery change |
| W(H) | ENE-10 | Power consumption profiling by AI mode | Documented per engagement type | A | Battery planning for missions |
| W(M) | ENE-11 | Solar/vehicle charging compatibility | Standard charging via USB-C PD | D | Field sustainability |

**Impact of this gap:** ENE-01 (voltage range) is critical — if V-SMASH only accepts one specific voltage, it cannot integrate with different military vehicle power buses (12V truck vs. 24V APC vs. battery pack). This single missing requirement could eliminate 50% of platform integration opportunities. ENE-06 (boot time) directly affects combat responsiveness — a 2-minute boot time means the soldier misses the engagement. ENE-08 (reverse polarity protection) prevents a $5,000 device being destroyed by a $0.10 wiring mistake.

---

#### WEAK 3: COSTS (CST) — Only 1 Requirement (R41)

**Current state:** R41 states unit cost target <$5,000 for LITE variant (Wish).

**What's missing:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | CST-01 | Unit production cost (X1 Handheld) | ≤$3,000 at 100-unit lot | A | Export competitiveness |
| D | CST-02 | Unit production cost (X4 RCWS) | ≤$8,000 at 50-unit lot | A | Vehicle integration variant |
| D | CST-03 | NRE (non-recurring engineering) budget | ≤$150,000 total development | A | Resource allocation |
| D | CST-04 | AI model training cost | ≤$10,000 (compute + data labeling) | A | One-time cost |
| W(H) | CST-05 | Cost advantage vs. imported alternatives | ≥40% cheaper than equivalent | A | Value proposition |
| W(H) | CST-06 | Lifecycle cost (10-year TCO) | ≤$500/year per unit (maintenance + SW updates) | A | Sustainment affordability |
| W(M) | CST-07 | Spare parts cost | ≤5% of unit cost annually | A | Logistics budget |
| W(M) | CST-08 | Cost scaling with variant complexity | X1:X2:X3:X4 = 1:1.2:1.5:2.5 ratio | A | Portfolio planning |

**Impact of this gap:** Without CST-03 (NRE budget), there's no formal constraint on development spending. Without CST-05 (cost advantage vs. imports), the fundamental business case is unquantified. Without CST-06 (lifecycle cost), the customer cannot compare total ownership cost against alternatives.

---

#### WEAK 4: OPERATION (OPR) — Merged with Maintenance, Under-specified

**Current state:** V-SMASH has "Maintenance/Operation" combined (4 requirements: R46-R49). These cover maintenance access, MTBF, software update, and self-test — all good but all maintenance-focused. OPERATION (how the soldier actually uses it in the field) is almost absent.

**What's missing — Operational requirements:**

| D/W | ID | Requirement | Value | Verification | Rationale |
|-----|-----|-------------|-------|--------------|-----------|
| D | OPR-01 | Zeroing procedure | ≤5 minutes, no special tools | D | Field boresight |
| D | OPR-02 | Mode switching time (standby → tracking) | ≤3 seconds | T | Combat responsiveness |
| D | OPR-03 | Target acquisition time (first detection) | ≤2 seconds from target entry in FOV | T | Engagement speed |
| D | OPR-04 | Continuous operation duration | ≥12 hours without restart | T | Extended mission |
| D | OPR-05 | Number of operators required | 1 (single soldier) | D | Manpower efficiency |
| D | OPR-06 | Training time for proficient operation | ≤4 hours classroom + 2 hours practical | D | Force multiplication |
| D | OPR-07 | Night operation | Functional with NVG-compatible display | D | 24-hour capability |
| D | OPR-08 | AI model retraining in field | Not required (factory-trained model) | A | Logistic simplicity |
| W(H) | OPR-09 | Engagement data recording | All tracking + firing events logged | D | After-action review (links to CORTEX RANGE!) |
| W(H) | OPR-10 | Multi-target prioritization | Track ≥3 targets, engage highest threat | D | Swarm defense |
| W(M) | OPR-11 | Operator fatigue mitigation | Audio/vibration alert on target detection | D | Reduce continuous vigilance burden |

**Impact of this gap:** OPR-01 (zeroing procedure) is operationally critical — if zeroing takes 30 minutes with special equipment, combat units won't use V-SMASH. OPR-06 (training time) directly determines adoption rate. OPR-09 (engagement recording) creates a natural bridge to the CORTEX RANGE data flywheel. These are all requirements that a systematic approach would have surfaced during stakeholder analysis with actual soldiers.

---

### 2.3 ✅ ADEQUATE BUT IMPROVABLE CATEGORIES

#### Signals/Data (SIG) — 4 Requirements, Needs ~10 More

**Current state is thin.** V-SMASH is fundamentally an AI signal processing system — this should be the LARGEST category. Current requirements cover interfaces (USB-C, HDMI, CAN bus, storage) but miss core AI/sensor performance:

| D/W | ID | Priority Addition | Rationale |
|-----|-----|---|---|
| D | SIG-NEW-01 | AI inference frame rate: ≥30 fps | Core tracking performance |
| D | SIG-NEW-02 | Detection range per target class (drone @300m, person @500m, vehicle @1000m) | Performance specification |
| D | SIG-NEW-03 | False positive rate: ≤1 per hour in operational conditions | Prevents operator alarm fatigue |
| D | SIG-NEW-04 | Classification accuracy: ≥90% across trained classes | Threat identification reliability |
| D | SIG-NEW-05 | Tracking accuracy at max range: ≤2 MOA error | Fire solution quality |
| D | SIG-NEW-06 | AI model update mechanism: signed firmware via USB | Cybersecurity |
| W(H) | SIG-NEW-07 | Multi-sensor fusion readiness (IR, radar data input) | Future WATCHDOG integration |
| W(H) | SIG-NEW-08 | Data export format: CORTEX CDM compatible | Ecosystem integration |

#### Safety (SAF) — 5 Requirements, Needs ~5 More

**Current safety is well-conceived** (HITL, fail-safe, mode indication, no inadvertent discharge, EMC) but misses:

| D/W | ID | Priority Addition | Rationale |
|-----|-----|---|---|
| D | SAF-NEW-01 | AI engagement boundary: ≤elevation limits, ≥minimum range | Prevent firing at friendlies / close targets |
| D | SAF-NEW-02 | System hazard analysis per MIL-STD-882E | Formal safety assessment |
| D | SAF-NEW-03 | Cybersecurity: AI model tamper detection | Prevent adversarial AI manipulation |
| W(H) | SAF-NEW-04 | IFF (Identification Friend/Foe) integration readiness | Future coalition interop |
| W(H) | SAF-NEW-05 | AI decision audit trail: all track/fire decisions logged with confidence score | Accountability + debugging |

---

## 3. QUANTITATIVE GAP SUMMARY

### 3.1 Requirements Density by Category

| Category | V-SMASH Now | Recommended Minimum | Gap | Priority |
|---|---|---|---|---|
| Functional | 7 | 7 | 0 | ✅ Adequate |
| Performance | 4 | 6 | -2 | Add AI performance specs |
| Environmental | 6 | 6 | 0 | ✅ Adequate |
| Physical/Geometry | 5 | 7 | -2 | Add CG location, thermal envelope |
| Kinematics/Integration | 4 | 6 | -2 | Add tracking dynamics |
| **Forces** | **1** | **8** | **-7** | **🔴 CRITICAL — recoil, drop, vibration, zero retention** |
| **Energy** | **2** | **11** | **-9** | **🔴 CRITICAL — voltage, power modes, boot time** |
| **Material** | **0** | **8** | **-8** | **🔴 MISSING — enclosure, optics, solvents, EMI** |
| Signals/Data | 4 | 12 | -8 | 🟡 Add AI performance, data format |
| Safety | 5 | 10 | -5 | 🟡 Add engagement boundaries, cyber |
| Ergonomics | 3 | 5 | -2 | Add one-hand operation details |
| Production | 4 | 4 | 0 | ✅ Adequate |
| Quality Control | 2 | 4 | -2 | Add acceptance test protocol |
| Assembly | 3 | 3 | 0 | ✅ Adequate |
| Transport/Storage | 2 | 3 | -1 | Minor |
| **Operation** | **0** | **11** | **-11** | **🔴 CRITICAL — zeroing, modes, training, night ops** |
| Maintenance | 4 | 6 | -2 | Add calibration interval, depot repair |
| **Costs** | **1** | **8** | **-7** | **🔴 CRITICAL — NRE, lifecycle, variant scaling** |
| **Schedule** | **0** | **10** | **-10** | **🔴 MISSING — milestones, dataset, qualification** |
| Legal/Regulatory | 2 | 2 | 0 | ✅ Adequate |
| Recycling/Disposal | 2 | 2 | 0 | ✅ Adequate |
| **TOTAL** | **57** | **~128** | **~-71** | **V-SMASH needs ~71 more requirements** |

### 3.2 Coverage Heatmap

```
Category Coverage Score (V-SMASH requirements ÷ recommended minimum):

Functional        ████████████████████  100%  ✅
Performance       █████████████░░░░░░░   67%  🟡
Environmental     ████████████████████  100%  ✅
Geometry          ███████████████░░░░░   71%  🟡
Kinematics        █████████████░░░░░░░   67%  🟡
Forces            ██░░░░░░░░░░░░░░░░░░   13%  🔴 CRITICAL
Energy            ████░░░░░░░░░░░░░░░░   18%  🔴 CRITICAL
Material          ░░░░░░░░░░░░░░░░░░░░    0%  🔴 MISSING
Signals           ███████░░░░░░░░░░░░░   33%  🟡
Safety            ██████████░░░░░░░░░░   50%  🟡
Ergonomics        ████████████░░░░░░░░   60%  🟡
Production        ████████████████████  100%  ✅
QC                ██████████░░░░░░░░░░   50%  🟡
Assembly          ████████████████████  100%  ✅
Transport         █████████████░░░░░░░   67%  🟡
Operation         ░░░░░░░░░░░░░░░░░░░░    0%  🔴 MISSING
Maintenance       █████████████░░░░░░░   67%  🟡
Costs             ██░░░░░░░░░░░░░░░░░░   13%  🔴 CRITICAL
Schedule          ░░░░░░░░░░░░░░░░░░░░    0%  🔴 MISSING
Legal/Regulatory  ████████████████████  100%  ✅
Recycling         ████████████████████  100%  ✅

OVERALL: 57/128 = 45% coverage
```

---

## 4. ROOT CAUSE ANALYSIS — Why These Gaps Exist

### 4.1 Pattern Recognition

The gaps are not random. They cluster into three patterns:

**Pattern A: "Soldier-facing requirements" are absent** (Operation, Ergonomics expansion, Training time)

Root cause: The requirements list was written from an ENGINEER's perspective, not a SOLDIER's perspective. The engineer asks "what must the system DO?" The soldier asks "how do I USE this thing under fire at 3am in the rain?" Systematic stakeholder analysis with end-users would have surfaced OPR-01 through OPR-11 in the first workshop.

**Pattern B: "Physical world requirements" are thin** (Forces, Energy, Material)

Root cause: V-SMASH's conceptual design was heavily focused on the AI/software architecture (YOLO, Kalman filter, ballistic model). This is natural for an AI-centric product — but the device must SURVIVE physical reality. A 12.7mm DShK produces 50g recoil shock. A soldier drops equipment. Gun cleaning solvents dissolve cheap plastics. These are the requirements that turn a working prototype into a combat-qualified product.

**Pattern C: "Program management requirements" are missing** (Schedule, Costs, NRE)

Root cause: The requirements list was treated as a purely technical document. P&B explicitly includes Schedule and Costs as requirements categories because they constrain every design decision. Without CST-03 (NRE budget), there's no formal basis for saying "we can't afford titanium enclosure" — which is a design-driving constraint.

### 4.2 System Archetype: "Shifting the Burden"

The gap pattern reveals the "Shifting the Burden" archetype:

```
SYMPTOM: "We need to finalize the AI architecture"
    ↓
SYMPTOMATIC SOLUTION: Focus all requirements on AI/software subsystem
    ↓
SIDE EFFECT: Physical/soldier-facing/program requirements get deferred
    ↓
FUNDAMENTAL SOLUTION (neglected): Systematic P&B checklist walk-through
    ↓
CONSEQUENCE: Requirements gaps discovered during embodiment/qualification
    ↓
COST: Expensive redesign and schedule slip
```

The fix is straightforward: **always run the complete P&B Figure 5.3 checklist, even when the product seems "mostly software."** The checklist exists precisely to prevent domain-bias blindness.

---

## 5. PRIORITY ACTION PLAN

### 5.1 Immediate Actions (This Week)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🔴 P1 | Add FOR-06 (zero retention after shock) | Prevents fundamental performance failure | 1 hour |
| 🔴 P1 | Add ENE-01 (voltage range) + ENE-06 (boot time) | Enables platform integration + combat readiness | 1 hour |
| 🔴 P1 | Add OPR-01 (zeroing procedure) + OPR-03 (acquisition time) | Defines operational performance | 1 hour |
| 🔴 P1 | Add complete MAT section (8 requirements) | Prevents field failure from material incompatibility | 2 hours |

### 5.2 Near-Term Actions (This Month)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🟡 P2 | Add complete SCH section (10 requirements) | Enables program planning + resource allocation | 2 hours |
| 🟡 P2 | Add complete CST section (8 requirements) | Quantifies business case + constrains design | 2 hours |
| 🟡 P2 | Expand SIG section with AI performance specs | Defines testable acceptance criteria for AI | 2 hours |
| 🟡 P2 | Separate Operation from Maintenance | Reveals soldier-facing gaps | 1 hour |

### 5.3 Medium-Term Actions (Before Embodiment Design)

| Priority | Action | Impact | Effort |
|---|---|---|---|
| 🟢 P3 | Stakeholder workshop with military end-users | Surfaces implicit soldier requirements | 1 day |
| 🟢 P3 | FOR section expansion with MIL-STD-810H test methods | Maps to qualification test plan | 3 hours |
| 🟢 P3 | SAF section expansion with MIL-STD-882E hazard analysis | Formal safety case | 4 hours |
| 🟢 P3 | Complete ENE section with all power modes and variants | Drives power architecture design | 2 hours |

### 5.4 Expected Outcome After All Actions

```
BEFORE:  57 requirements, 45% category coverage, 3 missing categories
AFTER:  ~128 requirements, >90% category coverage, 0 missing categories

Category coverage improvement:
  Forces:     13% → 100%  (+7 requirements)
  Energy:     18% → 100%  (+9 requirements)
  Material:    0% → 100%  (+8 requirements)
  Operation:   0% → 100%  (+11 requirements)
  Costs:      13% → 100%  (+7 requirements)
  Schedule:    0% → 100%  (+10 requirements)
  Signals:    33% → 100%  (+8 requirements)
  Safety:     50% → 100%  (+5 requirements)
```

---

## 6. D-M-I-R REFLECTION

### 6.1 What This Exercise Reveals About Your Requirements Engineering Skill

**Strength:** You already have good instincts for functional, safety, environmental, and production requirements. The V-SMASH list quality within the categories it covers is solid — quantified, testable, properly classified D/W.

**Growth area:** The gap pattern (missing physical-world, soldier-facing, and program-management categories) is extremely common among AI/software-focused engineers designing physical products. The antidote is simple but requires discipline: print P&B Figure 5.3, tape it to your wall, and FORCE yourself to write at least 3 requirements per category before moving on. Even "I think there are no requirements here" should be documented as a conscious decision, not an oversight.

### 6.2 Cross-Project Pattern

Compare V-SMASH (57 req, AI fire control) vs. VN-TUAV-DEMO-001 (265 req, tethered UAV). The TUAV list has 4.6× more requirements because it was written later in your methodology learning journey. The categories are complete, the quantification is thorough, and the coverage is dense. **Your requirements engineering skill has measurably improved.** This exercise will accelerate that improvement further by making the gap patterns explicit.

### 6.3 The Fundamental Lesson

> **A requirements list is not complete when you've written everything you can think of. It's complete when you've systematically checked every P&B category and consciously decided what belongs there — including failure modes, user operations, physical constraints, and program boundaries.**

The difference between 57 requirements and 128 requirements is not "more paperwork." It's the difference between discovering problems during conceptual design (cheap to fix) versus discovering them during qualification testing (expensive and schedule-destroying).

---

*Document: VN-VSMASH-001-GAP-ANALYSIS v1.0*  
*Classification: INTERNAL — Workshop X Engineering*  
*Cross-Reference: VN-VSMASH-001 Conceptual Design v1.1*  
*Cross-Reference: VN-AIROBOT-001-RL v1.0 (Benchmark)*  
*Methodology: Pahl & Beitz Figure 5.3 Checklist*
