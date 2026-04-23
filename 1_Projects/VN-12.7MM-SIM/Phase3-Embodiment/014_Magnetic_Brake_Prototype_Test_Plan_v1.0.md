# VN-12.7MM-SIM-014: MAGNETIC BRAKE PROTOTYPE TEST PLAN
## Phase 3: Embodiment Design -- Physical Gate Definition

**Document**: VN-12.7MM-SIM-014-PT | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 3 - Embodiment Design (Physical Gate)
**Scope**: I-01 (HONG HAI) -- Magnetic particle brake subsystem validation
**Classification**: [Core] -- CEO defines scope; [Offload] test execution planning

---

# 1. PURPOSE AND CONTEXT

## 1.1 Why This Test

The magnetic particle brake is the **single most critical unknown** in the V2 Standard concept:

- It is the primary solution for K-005 (friction torque variation <=10%) and F-006 (backlash <=0.05 deg)
- It has never been used in a Workshop X product before
- It is **single-source imported** -- no local alternative exists
- Risk R3 (concept evaluation): "Magnetic brake torque variation exceeds K-005 across temperature range"
- VN-12.7MM-SIM is **Tier 2** -- requires physical gate within 30 days to maintain status

## 1.2 Objectives

| # | Objective | Linked Requirement / Risk |
|---|-----------|---------------------------|
| O1 | Verify torque variation <=10% across full rotation | K-005 |
| O2 | Verify achievable torque range includes 5-15 Nm | F-001 |
| O3 | Measure backlash with brake + encoder shaft coupling | F-006 |
| O4 | Characterize torque-vs-temperature behavior (18-32 deg C) | R3, OP-017 |
| O5 | Evaluate operator feel with spade grip mock-up | K-010 (qualitative) |
| O6 | Confirm brake controllability (current-to-torque linearity) | F1.4.3 (adjustable resistance) |

## 1.3 Success Criteria (Go/No-Go)

| Criterion | Threshold | Method | Decision |
|-----------|-----------|--------|----------|
| **GO-1** | Torque variation <=10% at any fixed current, full 360 deg rotation | Torque sensor sweep | **MUST PASS** -- showstopper |
| **GO-2** | Torque range includes 5-15 Nm within rated current | Torque sensor at stepped currents | **MUST PASS** |
| **GO-3** | Backlash <=0.05 deg at coupling (brake shaft to encoder) | Dial indicator / encoder reversal test | **MUST PASS** |
| **GO-4** | Torque drift <=15% over 18-32 deg C temperature range | Heated enclosure test | **SHOULD PASS** (compensatable if <=20%) |
| **GO-5** | Operator feel rated "acceptable" by >=3/5 testers | Subjective A/B comparison with DShKM reference | **SHOULD PASS** (informational) |

**Decision rule:**
- GO-1, GO-2, GO-3 all PASS --> **PROCEED** to full embodiment design with magnetic brake
- Any MUST FAIL --> **STOP** -- evaluate servo motor (Sol-C) or hybrid approach
- GO-4 FAIL but <=20% --> **PROCEED** with firmware compensation plan
- GO-4 FAIL >20% --> **REVIEW** -- may need active temperature compensation hardware

---

# 2. TEST ARTICLE

## 2.1 Hardware Bill of Materials

| # | Item | Specification | Qty | Est. Cost | Source | Lead Time |
|---|------|--------------|-----|-----------|--------|-----------|
| 1 | Magnetic particle brake | 20 Nm rated, 24VDC, flange mount | 1 | $250-400 | Ogura OPB-N or Placid B5 | 2-3 weeks |
| 2 | DC power supply (adjustable) | 0-30V, 0-5A, CC/CV mode | 1 | $80-150 | Local (Hanker, Korad) | 3 days |
| 3 | Torque sensor (reaction type) | 0-50 Nm, USB output | 1 | $200-400 | Lorenz DR-2112 or PCE-TM 80 | 2-3 weeks |
| 4 | Optical encoder | 16-bit incremental, 65536 CPR | 1 | $100-150 | Omron E6B2 or Autonics E50S | 1 week |
| 5 | Shaft coupling (rigid) | Bore 10-15mm, zero-backlash clamp type | 2 | $30-50 | Misumi, local CNC | 1 week |
| 6 | Bearing housing + shaft | Steel shaft dia 12-15mm, 2x deep groove bearings | 1 set | $50-80 | Local machining | 1 week |
| 7 | Spade grip mock-up | Steel tube + grip shells, 400mm spacing | 1 | $40-60 | Workshop X fabrication | 3 days |
| 8 | Mounting plate (steel) | 300x300x10mm, drilled for brake + bearing | 1 | $20-30 | Workshop X | 2 days |
| 9 | Arduino/STM32 board | For encoder reading + brake PWM control | 1 | $15-30 | Local (Nhat Tao, CNC Electronics) | 1 day |
| 10 | Wiring, connectors, misc | 24V wiring, banana plugs, terminal blocks | 1 set | $20-30 | Local | 1 day |
| 11 | Dial indicator | 0.01mm resolution, magnetic base | 1 | $30-50 | Mitutoyo / local equiv. | In stock |
| | **TOTAL ESTIMATED** | | | **$835-1,430** | | |

## 2.2 Test Rig Assembly

```
TOP VIEW:
                        Spade grip mock-up
                        (400mm spacing)
                             |
    ┌─────────┐     ┌───────┴───────┐     ┌──────────┐
    │ Encoder │==== │   Shaft       │==== │  Brake   │
    │ (sense) │rigid│   + Bearing   │rigid│ (resist) │
    │         │coup.│   Housing     │coup.│          │
    └────┬────┘     └───────┬───────┘     └────┬─────┘
         │                  │                   │
    Encoder                 │              24VDC PSU
    signal              Torque             (adjustable
    to MCU              sensor             current)
                        (inline)

SIDE VIEW:
         Grip arm (lever)
              │
    ┌────┐  ┌─┴──┐  ┌──────┐
    │Enc │──│Shft│──│Brake │      All mounted on
    └────┘  └─┬──┘  └──────┘      300x300mm steel plate
              │
         ┌────┴────┐
         │Mounting │
         │  Plate  │
         └─────────┘
         (clamped to bench)
```

## 2.3 Single-Axis Only

This prototype tests **traverse axis only** (horizontal rotation). Rationale:
- Traverse is the higher-torque axis (F-001: 5-15 Nm vs F-002: 10-30 N at grip)
- 360 deg continuous rotation is the harder requirement
- If brake meets spec on traverse, elevation axis behavior is predictable (smaller brake, partial arc)

---

# 3. TEST PROCEDURES

## 3.1 Test T1: Torque Uniformity (GO-1)

**Objective**: Verify friction torque variation <=10% across full 360 deg rotation at constant current.

**Setup**:
- Set brake current to produce ~10 Nm (mid-range target)
- Allow 5 min thermal stabilization
- Attach torque sensor inline

**Procedure**:
1. Slowly rotate grip handle through full 360 deg (approx 10 deg/s)
2. Record torque continuously at >=10 Hz sample rate
3. Repeat 3 full rotations
4. Calculate: T_max, T_min, T_mean per rotation
5. Compute variation: (T_max - T_min) / T_mean x 100%
6. Repeat at 3 current levels: 5 Nm, 10 Nm, 15 Nm

**Pass criterion**: Variation <=10% at all 3 torque levels, all 3 rotations.

**Data output**: CSV file with columns [timestamp, angle_deg, torque_Nm, current_A]

## 3.2 Test T2: Torque Range Characterization (GO-2)

**Objective**: Map current-to-torque relationship. Verify 5-15 Nm achievable.

**Procedure**:
1. Sweep brake current from 0 to rated max in 10 steps
2. At each step: hold current 30s, measure steady-state torque (3 measurements)
3. Record: [current_A, torque_Nm_1, torque_Nm_2, torque_Nm_3, mean, stdev]
4. Plot torque vs. current curve
5. Check linearity (R-squared of linear fit)

**Pass criterion**: 5 Nm and 15 Nm both achievable within rated current range. Linearity R-squared >=0.95.

## 3.3 Test T3: Backlash Measurement (GO-3)

**Objective**: Measure angular play in brake + coupling + shaft assembly.

**Procedure**:
1. Set brake to mid-torque (~10 Nm)
2. Apply CW torque until shaft stops moving. Record encoder position P1.
3. Apply CCW torque (same magnitude). Record encoder position P2.
4. Backlash = |P1 - P2|
5. Repeat at 4 angular positions (0, 90, 180, 270 deg)
6. Method B (dial indicator): mount indicator at grip radius, measure arc play

**Pass criterion**: Backlash <=0.05 deg at all 4 positions.

**Note**: If backlash exceeds spec, identify source (coupling, bearing, or brake internal). Rigid clamp couplings should contribute <0.01 deg. If brake internal play is the issue, contact manufacturer for tighter-tolerance unit.

## 3.4 Test T4: Temperature Sensitivity (GO-4)

**Objective**: Characterize torque drift across operating temperature range (18-32 deg C).

**Procedure**:
1. Condition test rig at 18 deg C (air-conditioned room, early morning)
2. Set brake to 10 Nm at 18 deg C. Record current and torque.
3. Gradually warm enclosure to 25 deg C (use heat gun on enclosure, thermometer on brake body)
4. At 25 deg C: record torque at SAME current setting
5. Continue to 32 deg C: record torque at SAME current setting
6. Calculate drift: (T_32C - T_18C) / T_18C x 100%

**Pass criterion**: Drift <=15% (SHOULD). If 15-20%, document compensation approach. If >20%, escalate.

**Alternative** (if environmental chamber unavailable): Run brake continuously for 2 hours under load. Measure brake body temperature rise and torque change over time. Extrapolate to full temp range.

## 3.5 Test T5: Operator Feel Evaluation (GO-5)

**Objective**: Qualitative assessment of brake "feel" compared to real DShKM friction.

**Procedure**:
1. Mount spade grip mock-up on test rig
2. Set brake to approximate DShKM traverse torque (~8-10 Nm based on available data)
3. Invite 3-5 persons with DShKM handling experience (ideally gunners; alternatively Workshop X staff who have operated the weapon)
4. Each person:
   a. Rotate grip through 180 deg arc (left-right-left), 3 times
   b. Rate smoothness: 1-5 scale (1=jerky, 5=very smooth)
   c. Rate resistance level: "too light / about right / too heavy"
   d. Rate overall feel match to DShKM: 1-5 scale
   e. Free-form comments

**Pass criterion**: Average feel match rating >=3.0/5.0 from >=3 testers. This is informational -- a low score does not block the project but informs firmware tuning requirements.

**Data output**: Evaluation form per tester (paper), summarized in test report.

---

# 4. SCHEDULE

## 4.1 Timeline (30-Day Physical Gate)

**Start date**: 2026-03-06 (tomorrow)
**Physical gate deadline**: 2026-04-05

| Week | Days | Activity | Owner | Deliverable |
|------|------|----------|-------|-------------|
| W1 | D1-D3 | Procure local items (PSU, Arduino, couplings, plate, grips) | CEO | Parts on bench |
| W1 | D1-D3 | Order brake + torque sensor (longest lead items) | CEO | PO confirmed, tracking # |
| W1 | D3-D5 | Machine shaft, bearing housing, mounting plate | Workshop X | Mechanical parts ready |
| W1 | D5-D7 | Fabricate spade grip mock-up | Workshop X | Grip assembly ready |
| W2 | D8-D10 | Write firmware: encoder read + brake PWM + serial logging | CEO / Eng | Firmware v0.1 |
| W2-W3 | D10-D18 | **WAIT for brake + torque sensor delivery** | -- | Delivery confirmed |
| W3 | D18-D20 | Assemble test rig: mount brake, shaft, encoder, grips | Workshop X | Rig assembled |
| W3 | D20-D21 | Commission: verify encoder reads, brake responds, torque reads | CEO | Rig functional |
| W4 | D22 | **Test T1**: Torque uniformity (3 levels x 3 rotations) | CEO | GO-1 data |
| W4 | D22 | **Test T2**: Torque range sweep | CEO | GO-2 data |
| W4 | D23 | **Test T3**: Backlash measurement | CEO | GO-3 data |
| W4 | D23-D24 | **Test T4**: Temperature sensitivity | CEO | GO-4 data |
| W4 | D25-D27 | **Test T5**: Operator feel evaluation (schedule testers) | CEO | GO-5 forms |
| W4-W5 | D27-D29 | Compile test report, photos, data analysis | CEO | Test report v1.0 |
| W5 | D30 | **PHYSICAL GATE REVIEW** | CEO | Go/No-Go decision |

## 4.2 Critical Path

```
Order brake (D1) ──[2-3 weeks]──> Receive (D18) ──> Assemble (D20) ──> Test (D22-D27)
       │
       └── While waiting: machine parts (W1), write firmware (W2), prep grip mock-up (W1)
```

**Critical path item**: Brake delivery (2-3 weeks). Order MUST be placed by D1.

## 4.3 Procurement Contingency

If brake delivery exceeds 3 weeks:
- **Option A**: Source from AliExpress/Taobao (Ogura-compatible Chinese units, 1-week delivery) for initial testing. Re-test with genuine unit when it arrives.
- **Option B**: Extend gate deadline by 1 week (max). Document reason in Status.md.

---

# 5. BUDGET

| Category | Items | Est. Cost |
|----------|-------|-----------|
| Hardware (BOM Section 2.1) | Brake, torque sensor, encoder, PSU, mechanical parts | $835-1,430 |
| Machining labor | Shaft, bearing housing, mounting plate, grip mock-up | $100-200 |
| Shipping (express for brake/torque sensor) | DHL/FedEx from Japan/US | $80-150 |
| Misc (consumables, wiring, unexpected) | 15% contingency | $150-250 |
| **TOTAL** | | **$1,165-2,030** |

**Budget approval**: This is a Tier 2 prototype expenditure. CEO approval required.

---

# 6. RISK REGISTER (PROTOTYPE-SPECIFIC)

| # | Risk | Prob. | Impact | Mitigation |
|---|------|-------|--------|-----------|
| P1 | Brake delivery delayed >3 weeks | Medium | High (schedule) | Order immediately; identify AliExpress backup source |
| P2 | Torque sensor not available locally | Low | Medium | PCE instruments has Vietnam dealer; alternatively use spring scale + lever arm method |
| P3 | Torque uniformity FAILS (>10%) | Low-Med | High (design) | Contact manufacturer for better-grade unit; evaluate servo motor fallback (adds $500-1500 to unit cost, 2-month design delay) |
| P4 | Backlash FAILS at coupling | Low | Medium | Switch to bellows coupling or Oldham coupling with tighter tolerance |
| P5 | No DShKM-experienced testers available for T5 | Medium | Low | Defer T5 to consolidated gunnery instructor interview (FLAG-TAB-01) |

---

# 7. DELIVERABLES

| # | Deliverable | Format | Due |
|---|-------------|--------|-----|
| D1 | Assembled test rig (photos) | JPEG | D20 |
| D2 | Test data (T1-T4) | CSV + analysis spreadsheet | D27 |
| D3 | Operator feel forms (T5) | Scanned PDF | D27 |
| D4 | Prototype test report (015_Magnetic_Brake_Test_Report_v1.0.md) | Markdown | D29 |
| D5 | Go/No-Go decision record | In test report Section "Decision" | D30 |
| D6 | Updated Status.md with physical gate result | Markdown | D30 |

---

# 8. RELATION TO EMBODIMENT DESIGN

This prototype test is **gate-blocking** for Phase 3 embodiment design:

- If **GO**: Proceed with magnetic brake in system architecture. Brake specifications (torque curve, mounting dimensions, thermal behavior) feed directly into mechanical layout and electronics design.
- If **NO-GO**: Must re-evaluate resistance mechanism before continuing Phase 3. Fallback options:
  1. Servo motor direct drive (Sol-C from morphological matrix) -- adds $500-1500/unit, requires real-time servo controller
  2. Friction brake + torque sensor compensation (hybrid) -- complex, unproven
  3. Higher-grade magnetic brake from different manufacturer

The prototype test rig is also **reusable** for:
- Elevation axis brake sizing (smaller unit, same test procedures)
- Encoder accuracy validation (same shaft + encoder setup)
- Firmware development for brake control algorithms

---

# 9. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN | Initial release -- physical gate definition for Tier 2 compliance |

---

**NEXT ACTION**: Order magnetic particle brake (longest lead item) -- Day 1 priority.

---

*VN-12.7MM-SIM-014 Magnetic Brake Prototype Test Plan v1.0*
*Phase 3: Embodiment Design -- Physical Gate*
