# VN-12.7MM-SIM-017: PRELIMINARY BILL OF MATERIALS
## Phase 3: Embodiment Design

**Document**: VN-12.7MM-SIM-017-BOM | **Version**: 1.1 | **Date**: 2026-03-20
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 3 - Embodiment Design
**Scope**: I-01 (HONG HAI) -- Single trainer station, unit cost at qty 1 (prototype) and qty 10 (initial production)
**Cost Target**: CO-001 <=USD 45,000 per unit
**Local Content Target**: PR-001 >=70% by value

---

# 1. BOM STRUCTURE

## 1.1 Cost Categories

| Category | Description |
|----------|------------|
| HW-MECH | Mechanical hardware (structure, bearings, fasteners) |
| HW-SENS | Sensors (encoders, FSR, e-stop) |
| HW-BRAKE | Resistance mechanism (magnetic brakes, PSU, drivers) |
| HW-COMP | Computing hardware (PC, GPU, storage) |
| HW-VIS | Visual subsystem (monitors, mounts) |
| HW-AUD | Audio subsystem (speakers, amp, sub) |
| HW-FEED | Feedback (vibration motor, LEDs) |
| HW-INST | Instructor station hardware |
| HW-ELEC | Electrical (cables, connectors, power distribution) |
| SW | Software development (amortized) |
| INT | Integration, assembly, and test labor |

---

# 2. DETAILED BOM

## 2.1 SS1: Mechanical (HW-MECH)

| # | Part | Specification | Qty | Source | Unit Cost (USD) | Extended | Lead |
|---|------|--------------|-----|--------|----------------|----------|------|
| 1 | Base frame | Steel S235JR, welded, 800x800mm, 4x leveling feet | 1 | Local fab | $200 | $200 | 1 wk |
| 2 | Pedestal column | Steel tube dia 400mm, L=900mm, powder coated | 1 | Local fab | $150 | $150 | 1 wk |
| 3 | Slewing ring bearing | 4-point contact, dia 300mm, M8 bolt circle | 1 | Import (Kaydon/Xuzhou) | $250 | $250 | 3 wk |
| 4 | Slip ring | **16 circuits** (v1.1), 2A/ch, gold contacts, flange mount | 1 | Import (Moflon/Senring) | $150 | $150 | 2 wk |
| 5 | Elevation shaft + bearings | Shaft dia 40mm, 2x needle bearings (HK4020) | 1 set | Local machining + import bearings | $80 | $80 | 1 wk |
| 6 | Gun barrel replica | Steel tube dia 25mm, L=1600mm, welded muzzle cap | 1 | Local fab | $60 | $60 | 1 wk |
| 7 | Receiver mockup | Sheet steel 2mm, bent + welded, powder coated | 1 | Local fab | $80 | $80 | 1 wk |
| 8 | Spade grips | Steel tube + rubber grips, 400mm spacing | 1 pair | Local fab | $40 | $40 | 3 days |
| 9 | Rear sight mockup | CNC aluminum, folding | 1 | Local CNC | $30 | $30 | 3 days |
| 10 | Traverse platform | Steel plate 10mm, welded, for elevation assy mount | 1 | Local fab | $60 | $60 | 1 wk |
| 11 | Shield mockup (W) | Sheet steel 3mm, bent, cosmetic only | 1 | Local fab | $50 | $50 | 1 wk |
| 12 | Fastener kit | M8, M10, M12 bolts/nuts/washers, assorted (<=5 types) | 1 set | Local | $30 | $30 | stock |
| 13 | Floor anchor kit | 4x M12 expansion anchors | 1 set | Local | $15 | $15 | stock |
| 14 | Counterbalance | Spring or counterweight for elevation (TBD-006) | 1 | Local fab | $40 | $40 | 1 wk |
| 15 | Pinch point guards | Sheet steel guards for traverse/elevation gaps | 1 set | Local fab | $30 | $30 | 1 wk |
| | **SS1 Subtotal** | | | | | **$1,265** | |

## 2.2 SS2: Sensing (HW-SENS)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 16 | Optical encoder (traverse) | 16-bit incremental, 65536 CPR, 5V, M12 connector | 1 | Import (Omron E6B2-CWZ6C) | $120 | $120 | 1 wk |
| 17 | Optical encoder (elevation) | Same as traverse | 1 | Import | $120 | $120 | 1 wk |
| 18 | Force sensor (FSR) | Interlink FSR-402, 0-100N, dia 18mm | 1 | Import | $15 | $15 | 1 wk |
| 19 | Emergency stop button | Mushroom head, NC contact, panel mount, 22mm | 1 | Local (Schneider VN) | $8 | $8 | stock |
| 20 | Shaft coupling (rigid, zero-backlash) | Bore 10-15mm, clamp type, aluminum | 4 | Import (Misumi) | $15 | $60 | 1 wk |
| | **SS2 Subtotal** | | | | | **$323** | |

## 2.3 SS3: Resistance (HW-BRAKE)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 21 | Magnetic brake (traverse) | 20 Nm rated, 24VDC, flange mount | 1 | Import (Ogura OPB-N 20) | $350 | $350 | 3 wk |
| 22 | Magnetic brake (elevation) | 5 Nm rated, 24VDC, flange mount | 1 | Import (Ogura OPB-N 5) | $200 | $200 | 3 wk |
| 23 | 24V DC power supply | 24V/5A, 120W, DIN rail, CC/CV adjustable | 1 | Import (Mean Well) | $45 | $45 | 1 wk |
| 24 | MOSFET driver boards | IRLZ44N + flyback diode, 2-channel | 1 | Local assembly | $10 | $10 | 3 days |
| | **SS3 Subtotal** | | | | | **$605** | |

## 2.4 SS4: Computing (HW-COMP)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 25 | PC workstation | i7-12700 / Ryzen 7 5800X, 32GB DDR4, 1TB NVMe, 750W PSU | 1 | Import (assembled locally) | $1,200 | $1,200 | 1 wk |
| 26 | GPU | NVIDIA RTX 3060 12GB or RTX 4060 8GB | 1 | Import | $350 | $350 | 1 wk |
| 27 | I/O interface board | STM32 Nucleo-F446RE or Arduino Due + custom shield | 1 | Import board + local shield | $30 | $30 | 1 wk |
| 28 | USB cables | USB 2.0 Type-A to Type-B, 3m | 2 | Local | $5 | $10 | stock |
| | **SS4 Subtotal** | | | | | **$1,590** | |

## 2.5 SS5: Visual (HW-VIS)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 29 | Monitor 27" QHD | IPS, 2560x1440, 144Hz, <=5ms, thin bezel, DP 1.4 | 3 | Import (Samsung/LG VN factory) | $280 | $840 | 1 wk |
| 30 | Triple monitor arm | VESA 100x100, heavy-duty, adjustable height | 1 | Import or local fab | $120 | $120 | 1 wk |
| 31 | DisplayPort cables | DP 1.4, 3m | 3 | Local | $10 | $30 | stock |
| | **SS5 Subtotal** | | | | | **$990** | |

## 2.6 SS6: Audio (HW-AUD)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 32 | Front speakers | 2-way, 50W RMS, bookshelf | 3 | Local (Edifier/JBL VN) | $50 | $150 | stock |
| 33 | Surround speakers | 2-way, 30W RMS, wall-mount | 2 | Local | $30 | $60 | stock |
| 34 | Subwoofer | 8", 100W RMS, active | 1 | Import | $100 | $100 | 1 wk |
| 35 | 5.1 AVR / Amplifier | 5.1 channel, 300W, HDMI ARC or analog input | 1 | Import (Yamaha/Denon) | $200 | $200 | 1 wk |
| 36 | Speaker wire + connectors | 14 AWG, banana plugs, <=30m total | 1 set | Local | $20 | $20 | stock |
| | **SS6 Subtotal** | | | | | **$530** | |

## 2.7 SS7: Feedback (HW-FEED)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| ~~37~~ | ~~ERM vibration motor~~ | ~~Removed v1.1 — wrong location for mounted weapon (see Doc 022)~~ | -- | -- | -- | -- | -- |
| 38 | Status LED panel | 8x LED indicators (green/red), panel mount | 1 | Local assembly | $10 | $10 | 3 days |
| | **SS7 Subtotal** | | | | | **$10** | |

## 2.7a SS10: Recoil — RC-A Pneumatic (HW-RECOIL, v1.1)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 61 | Pneumatic cylinder | Double-acting, 54mm bore, 25mm stroke, 10 bar, M10 front flange | 1 | Local (Airtac/SMC VN) | $80 | $80 | 1 wk |
| 62 | Fast solenoid valve | 3/2, ≤15ms, 24VDC coil, 1/4" BSP | 1 | Import (Parker D311 / Festo MHJ) | $150 | $150 | 2 wk |
| 63 | Pressure regulator | 0-10 bar, with gauge, wall-mount, 1/4" BSP | 1 | Local (Airtac/SNS) | $40 | $40 | stock |
| 64 | Pressure transducer | 0-16 bar, 0-5V output, 1/4" BSP, 1 kHz response | 1 | Import (Honeywell/TE) | $50 | $50 | 1 wk |
| 65 | Exhaust muffler | Sintered bronze, 1/4" BSP | 2 | Local | $5 | $10 | stock |
| 66 | Pneumatic rotary union | 1/4" BSP, 10 bar, single passage, ≤0.1 bar drop | 1 | Import (Deublin/SMC) | $80 | $80 | 2 wk |
| 67 | PU tubing + fittings | 8mm OD (supply) + 6mm OD (station), push-fit, 20m total | 1 lot | Local | $30 | $30 | stock |
| 68 | Linkage assembly | Rod end + clevis + pin, adjustable stroke limit | 1 set | Local fab | $25 | $25 | 3 days |
| 69 | MOSFET driver board (solenoid) | IRLZ44N + flyback, 1-channel, same design as brake driver | 1 | Local assembly | $5 | $5 | 3 days |
| 70 | Cylinder mounting bracket | Steel, 4x M6, traverse platform mount | 1 | Local fab | $15 | $15 | 3 days |
| | **SS10 Subtotal (trainer station)** | | | | | **$485** | |
| | | | | | | | |
| 71 | Air compressor | 2 HP, 50L receiver, 8-10 bar, oil-free, low noise | 1 | Local (Puma/Đại Việt) | $300 | $300 | stock |
| 72 | Compressor air filter + dryer | Inline filter + desiccant dryer | 1 set | Local | $40 | $40 | stock |
| 73 | Supply hose (compressor → station) | 10mm OD PU, 15m, with quick-disconnect | 1 | Local | $25 | $25 | stock |
| | **SS10 Subtotal (facility)** | | | | | **$365** | |
| | **SS10 TOTAL** | | | | | **$850** | |

## 2.8 SS8: Instructor Station (HW-INST)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 39 | Monitor 24" FHD | IPS, 1920x1080, 60Hz | 1 | Local (Samsung/LG VN) | $150 | $150 | stock |
| 40 | Keyboard + mouse | USB, Vietnamese layout | 1 set | Local | $20 | $20 | stock |
| 41 | Ethernet cable | Cat6, 10m | 1 | Local | $5 | $5 | stock |
| | **SS8 Subtotal** | | | | | **$175** | |

## 2.9 Electrical / Cabling (HW-ELEC)

| # | Part | Specification | Qty | Source | Unit Cost | Extended | Lead |
|---|------|--------------|-----|--------|-----------|----------|------|
| 42 | Power strip | 6-outlet, surge protection, 16A | 1 | Local | $15 | $15 | stock |
| 43 | MCB + RCD | 16A MCB + 30mA RCD, DIN rail | 1 set | Local (Schneider VN) | $25 | $25 | stock |
| 44 | Signal cables | Shielded multi-core for encoder/sensor runs, 30m total | 1 lot | Local | $40 | $40 | stock |
| 45 | Connector kit | M12 circular, JST-XH, Molex Mini-Fit, terminal blocks | 1 lot | Local + import | $50 | $50 | 1 wk |
| 46 | Cable management | Trunking, ties, labels, grommets | 1 lot | Local | $30 | $30 | stock |
| 47 | Warning labels | ISO 7010, Vietnamese text, self-adhesive | 1 set | Local print | $10 | $10 | 3 days |
| | **HW-ELEC Subtotal** | | | | | **$170** | |

---

# 3. SOFTWARE COST (AMORTIZED)

| # | Item | Effort (months) | Monthly Rate | Total | Per Unit (qty 10) |
|---|------|-----------------|-------------|-------|-------------------|
| 48 | Unity simulation development | 4 | $3,000 | $12,000 | $1,200 |
| 49 | 6-DOF ballistics engine | 2 | $3,000 | $6,000 | $600 |
| 50 | Fire control + scoring | 1.5 | $3,000 | $4,500 | $450 |
| 51 | Target AI (behavior trees) | 1.5 | $3,000 | $4,500 | $450 |
| 52 | Instructor UI + AAR | 1 | $3,000 | $3,000 | $300 |
| 53 | I/O firmware (encoder/brake) | 0.5 | $3,000 | $1,500 | $150 |
| 54 | System management + BIST | 0.5 | $3,000 | $1,500 | $150 |
| 55 | Integration + test | 1 | $3,000 | $3,000 | $300 |
| | **SW Subtotal (NRE)** | **12 months** | | **$36,000** | **$3,600 /unit** |

---

# 4. INTEGRATION & ASSEMBLY LABOR

| # | Item | Hours | Rate ($/hr) | Total | Per Unit |
|---|------|-------|-------------|-------|----------|
| 56 | Mechanical assembly | 8 | $15 | $120 | $120 |
| 57 | Electrical wiring | 4 | $15 | $60 | $60 |
| 58 | Software installation + calibration | 4 | $25 | $100 | $100 |
| 59 | System test (ATP) | 8 | $25 | $200 | $200 |
| 60 | Documentation + packaging | 4 | $15 | $60 | $60 |
| | **INT Subtotal** | **28 hrs** | | **$540** | **$540 /unit** |

---

# 5. COST SUMMARY

## 5.1 Unit Cost at Qty 1 (Prototype)

| Category | Cost | v1.0 | Delta |
|----------|------|------|-------|
| HW-MECH | $1,265 | $1,235 | +$30 (16-ckt slip ring) |
| HW-SENS | $323 | $323 | -- |
| HW-BRAKE | $605 | $605 | -- |
| HW-COMP | $1,590 | $1,590 | -- |
| HW-VIS | $990 | $990 | -- |
| HW-AUD | $530 | $530 | -- |
| HW-FEED | $10 | $25 | -$15 (ERM removed) |
| **HW-RECOIL (SS10 station)** | **$485** | -- | **+$485 (new)** |
| **HW-RECOIL (SS10 facility)** | **$365** | -- | **+$365 (new, one-time)** |
| HW-INST | $175 | $175 | -- |
| HW-ELEC | $170 | $170 | -- |
| **Hardware Total** | **$6,508** | $5,643 | **+$865** |
| SW (NRE, full cost on prototype) | $36,500 | $36,000 | +$500 (recoil firmware) |
| Integration + Assembly | $600 | $540 | +$60 (recoil assembly) |
| **Prototype Total** | **$43,608** | $42,183 | **+$1,425** |

**Note:** Facility cost ($365 compressor + filter + hose) is one-time — amortized across all units at that facility. Per-unit recoil cost at qty 10 = $485 (station only).

## 5.2 Unit Cost at Qty 10 (Initial Production)

| Category | Cost | v1.0 | Delta |
|----------|------|------|-------|
| Hardware Total (station only, no facility) | $6,143 | $5,643 | +$500 |
| SW (amortized over 10) | $3,650 | $3,600 | +$50 |
| Integration + Assembly | $600 | $540 | +$60 |
| Contingency (10%) | $1,039 | $978 | +$61 |
| **Unit Cost at Qty 10** | **$11,432** | $10,761 | **+$671** |

## 5.3 Cost Compliance Check

| Metric | Target | Actual (Qty 1) | Actual (Qty 10) | Status |
|--------|--------|----------------|-----------------|--------|
| CO-001 Unit cost | <=45,000 | $43,608 | $11,432 | **PASS** (prototype 3.1% margin) |
| CO-002 Volume cost (W) | <=35,000 at 20+ | -- | ~$10,200 at qty 20 | **PASS** |
| CO-003 Maintenance/yr | <=3,000 | Est. $1,800 | $1,800 | **PASS** (+$300 for pneumatic seals/filter) |
| CO-004 Training cost/hr | <=20/trainee-hr | ~$9/hr (at 2000 hr/yr amortization) | ~$3.50/hr | **PASS** |

**CRITICAL NOTE (v1.1)**: Prototype cost increased from $42,183 to $43,608 (+$1,425) with recoil subsystem. CO-001 margin reduced from 6.3% to **3.1%** — still compliant but tight. Cost-reduction options in Section 8 can recover $350-710 if needed. The recoil subsystem provides the L2→L3 fidelity upgrade that differentiates from competitors at ~$200K price point — high ROI for $850 added cost.

---

# 6. LOCAL CONTENT ANALYSIS

## 6.1 By Value

| Source | Items | Value | % |
|--------|-------|-------|---|
| **Local fabrication** | Mechanical structure, guards, grips, wiring, assembly, cable mgmt, labels, LED panel, MOSFET drivers, connectors, pneumatic cylinder, regulator, compressor, plumbing, brackets, linkage | $2,590 | 39.8% |
| **Local purchase (imported brand, VN factory/dealer)** | Monitors (Samsung VN), speakers (JBL/Edifier), E-stop (Schneider VN), power strip, MCB/RCD, keyboard/mouse | $553 | 8.5% |
| **Software development** (in-house, VN labor) | Unity sim, ballistics, firmware, recoil control, integration | $3,650 (at qty 10) | -- |
| **Import** | Encoders, brakes, PC, GPU, I/O board, AVR, subwoofer, FSR, slip ring, slewing ring, couplings, monitor arm, fast solenoid valve, pressure transducer, rotary union | $3,365 | 51.7% |
| **Total hardware** | | **$6,508** | **100%** |

**Hardware local content: 48.3%** -- BELOW 70% target (PR-001). Improved from 45.6% (v1.0) due to pneumatic local sourcing.

## 6.2 Including Software + Labor (adjusted calculation)

VN defense procurement counts domestic labor (assembly, integration, software) toward local content:

| Source | Value (qty 10 unit basis) |
|--------|--------------------------|
| Local hardware + fabrication | $3,143 |
| Software (100% VN labor) | $3,650 |
| Assembly + integration labor (100% VN) | $600 |
| **Local total** | **$7,393** |
| Import hardware | $3,365 |
| Contingency (split 50/50) | $520 / $520 |
| **Grand total** | **$11,432** (excl. facility one-time) |
| **Local content %** | **69.2%** |

**With SW + labor: 69.2%** -- improved from 66.9% (v1.0), still 0.8% below 70%. Remediation options below close the gap.

## 6.3 Remediation Options (to reach 70%)

| Option | Action | Impact on Local % | Cost Impact |
|--------|--------|-------------------|-------------|
| A | Source monitors from Samsung VN factory (count as 100% local) | +$840 local → 74.7% | None |
| B | Local CNC for monitor arms instead of import | +$120 local → 68.0% | +$30 |
| C | Assemble PC locally from components (local value-add) | +$400 local → 70.6% | +$50 |
| D | A + C combined | → 78.4% | +$50 |

**Recommendation**: Option A (Samsung VN monitors as local content) + Option C (local PC assembly). This achieves **74-78% local content** with minimal cost impact. Requires documentation that Samsung VN production qualifies as "local content" per MoD procurement rules.

---

# 7. LONG-LEAD AND CRITICAL ITEMS

| Item                       | Lead Time | Order By (for Month 5 assembly) | Single Source?                   |
| -------------------------- | --------- | ------------------------------- | -------------------------------- |
| Magnetic brake (traverse)  | 3 weeks   | Month 4 week 1                  | YES -- Ogura/Placid only         |
| Magnetic brake (elevation) | 3 weeks   | Month 4 week 1                  | YES -- same                      |
| Slewing ring bearing       | 3 weeks   | Month 4 week 1                  | No -- multiple Chinese suppliers |
| Slip ring                  | 2 weeks   | Month 4 week 2                  | No -- Moflon/Senring             |
| Optical encoders           | 1 week    | Month 4 week 3                  | No -- Omron/Autonics             |

| Fast solenoid valve        | 2 weeks   | Month 4 week 2                  | YES -- Parker/Festo specific      |
| Pneumatic rotary union     | 2 weeks   | Month 4 week 2                  | No -- Deublin/SMC/generic         |
| Pressure transducer        | 1 week    | Month 4 week 3                  | No -- Honeywell/TE/generic        |

**Single-source risk**: Magnetic brakes and fast solenoid valve are single-source items. Mitigation: brake — identify Chinese equivalent (Warner Electric, Chanling). Valve — test both Parker and Festo; either acceptable if ≤15ms spec met.

---

# 8. COST-REDUCTION OPPORTUNITIES

| Opportunity | Savings | Risk |
|-------------|---------|------|
| Downgrade monitors from QHD to FHD (1920x1080) | -$300 (3x $100) | Still meets S-001 but lower visual quality |
| Use stereo speakers instead of 5.1 (drop S-009 wish) | -$350 | Loses spatial audio; S-009 is a Wish |
| Use Arduino Due instead of STM32 Nucleo | -$10 | Minimal; Arduino has sufficient I/O |
| Use FHD instructor monitor (already spec'd) | $0 | Already lowest spec |
| Negotiate encoder volume pricing at qty 10 | -$50 ($10/unit on 2 encoders x 10) | Requires batch order |
| **Total available savings** | **$350-710** | |

---

# 9. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN (Phase 3 Embodiment) | Initial release. 60 line items. Prototype cost $42,183 (6.3% under CO-001). Local content 66.9% before remediation, 74-78% after. |
| 1.1 | 2026-03-20 | KN + AI | Added SS10 Recoil (13 line items #61-73). Removed ERM (#37). Slip ring 12→16 ckt (#4). Prototype $43,608 (+$1,425, 3.1% margin). Local content 69.2% (+2.3%). Added 3 long-lead items. |

---

**NEXT**: Document 018 -- Power Budget Analysis v1.1

---

*VN-12.7MM-SIM-017 Preliminary BOM v1.1*
*Phase 3: Embodiment Design -- I-01 (HONG HAI) Base Variant*
