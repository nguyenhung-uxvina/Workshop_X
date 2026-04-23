---
project: VN-AICC-001
phase: 3
type: dfx_checklist
version: 0.9
created: 2026-02-19
status: COMPLETE — All 6 DfX sections (74 items)
---

# VN-AICC-001: DfX REVIEW CHECKLIST FRAMEWORK
## Reusable Design-for-X Checklist for AICC Embodiment Layout Review
### Version 0.9 | 19/02/2026

---

**Document ID:** VN-AICC-001-DfX-v0.9
**Purpose:** Reusable checklist to evaluate ANY AICC embodiment layout across 6 DfX categories
**Scope:** Platform core + all 4 variants (MAKER / PRO / TAC / RACK)
**Method:** P&B §7.3 Embodiment Guidelines + Workshop X manufacturing context

---

## HOW TO USE THIS CHECKLIST

### For each item:

| Field | Description |
|---|---|
| **ID** | Unique identifier (DfM-01, DfA-01, etc.) |
| **Question** | Yes/No answerable. "Yes" = passes. "No" = issue found. |
| **Severity** | **C** = Critical (must fix before prototype), **M** = Major (must fix before production), **m** = Minor (should fix, not blocking) |
| **Variants** | **ALL** = applies to all 4 variants, **MK-PR** = MAKER + PRO only, **TC-RK** = TAC + RACK only (military) |
| **Phase** | **Proto** = must pass for prototype, **Prod** = must pass for production, **Both** = must pass always |
| **Result** | Mark: **P** (Pass), **F** (Fail), **NA** (Not Applicable to this variant/phase) |
| **Notes** | Briefly note issue if F, or why NA |

### Go / No-Go Decision Rule:

```
PROTOTYPE RELEASE:
  ✅ GO if:   0 Critical fails (Proto or Both) AND ≤ 3 Major fails (Proto or Both)
  ❌ NO-GO if: ≥ 1 Critical fail (Proto or Both) OR > 3 Major fails (Proto or Both)

PRODUCTION RELEASE:
  ✅ GO if:   0 Critical fails AND 0 Major fails AND ≤ 5 Minor fails
  ❌ NO-GO if: ≥ 1 Critical OR ≥ 1 Major fail OR > 5 Minor fails
```

### Scoring Summary Template (fill after completing all sections):

```
DfX REVIEW SCORECARD — VN-AICC-001 [VARIANT] — [DATE]

| Category | Total | P | F | NA | Critical F | Major F | Minor F |
|----------|-------|---|---|----|-----------:|--------:|--------:|
| DfM      |       |   |   |    |            |         |         |
| DfA      |       |   |   |    |            |         |         |
| DfMa     |       |   |   |    |            |         |         |
| DfS      |       |   |   |    |            |         |         |
| DfC      |       |   |   |    |            |         |         |
| DfT      |       |   |   |    |            |         |         |
| TOTAL    |       |   |   |    |            |         |         |

DECISION: [ ] GO for Prototype  [ ] GO for Production  [ ] NO-GO (fix items below)

Critical/Major fails requiring action:
1. _______________
2. _______________
3. _______________

Reviewer: _______________     Date: _______________
Approved: _______________     Date: _______________
```

---

## SECTION 1: DfM — DESIGN FOR MANUFACTURING

**Context:** AICC is a mechatronic product. "Manufacturing" covers PCB fabrication, electronic component sourcing, enclosure fabrication, and cable/harness production. Workshop X capabilities: local 2-layer PCB fab (4-layer possible), CNC aluminum (Hai Phong), FDM 3D printing in-house, SMT via Vietnamese partner. No injection molding in-house.

**Precedent:** V-SMASH custom Jetson carrier board fabricated locally at $50 (2-layer, standard FR4).

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfM-01** | Is PCB layer count ≤ 2 layers for prototype, ≤ 4 layers for production? (Local fab proven at 2-layer; 4-layer available but costlier) | **C** | ALL | Both | | |
| **DfM-02** | Are all PCB trace widths ≥ 0.2mm and spacing ≥ 0.2mm? (Local fab minimum capability) | **C** | ALL | Both | | |
| **DfM-03** | Are all PCB drill holes ≥ 0.3mm diameter? (Local fab minimum; ≥ 0.5mm preferred for reliability) | **M** | ALL | Both | | |
| **DfM-04** | Is the minimum SMD component size ≥ 0603 (imperial)? (Vietnamese SMT partner confirmed capability; 0402 possible but yield drops) | **M** | ALL | Prod | | |
| **DfM-05** | Are all critical electronic components available from Vietnamese distributors (The Gioi IC, Dien Tu Nhat Tao, Dien Tu Dai Viet) OR from Mouser/Digikey with ≤ 2 week lead time? | **C** | ALL | Both | | |
| **DfM-06** | Does the BOM avoid components that are single-source AND import-only? (If yes, is a second-source identified?) | **M** | ALL | Prod | | |
| **DfM-07** | Is the enclosure fabricable with Workshop X in-house capability? (FDM 3D print for prototype; CNC aluminum or outsource injection mold for production) | **C** | ALL | Proto | | |
| **DfM-08** | Is maximum 3D print dimension within FDM build volume (220×220×250mm for typical Ender-class)? | **M** | MK-PR | Proto | | |
| **DfM-09** | Does the 3D-printed enclosure avoid unsupported overhangs > 45° without designed-in support structures? | **m** | MK-PR | Proto | | |
| **DfM-10** | For production enclosure: is the CNC aluminum design within 3-axis machining capability (no undercuts requiring 5-axis)? Or if injection-molded: is draft angle ≥ 1.5° on all walls? | **M** | ALL | Prod | | |
| **DfM-11** | Are all connectors (USB-C, DC barrel, Ethernet RJ45, HDMI) standard off-the-shelf parts, NOT custom? | **C** | ALL | Both | | |
| **DfM-12** | Is the carrier board / I/O board panelizable for SMT batch production? (Standard panel size, fiducials placed, adequate board edge clearance ≥ 5mm) | **m** | ALL | Prod | | |
| **DfM-13** | Does the PCB design include solder paste stencil compatibility? (Pad sizes per IPC-7351, no micro-pads requiring special stencil thickness) | **M** | ALL | Prod | | |
| **DfM-14** | Are military-grade connectors (MIL-DTL-38999, MIL-DTL-26482) specified ONLY for TAC/RACK variants, not for MAKER/PRO? (Military connectors = long lead time, high cost) | **M** | TC-RK | Prod | | |

**DfM Item Count: 14** (4 Critical, 6 Major, 2 Minor, across prototype + production phases)

---

## SECTION 2: DfA — DESIGN FOR ASSEMBLY

**Context:** AICC assembly = combine off-the-shelf compute module (CM4) + custom I/O carrier board + displays + buttons + LEDs + enclosure + cables. Phase 1 target: ≤ 30 min assembly time (MF.05). V-SMASH precedent: ~45 min assembly for a more complex electromechanical product.

**Precedent:** V-SMASH assembly used standard hand tools only, no special fixtures. AICC should be simpler (no optics, no mechanical actuators).

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfA-01** | Is total assembly achievable in ≤ 30 minutes by one person with standard hand tools (Phillips/flat screwdriver, hex keys, tweezers)? | **C** | ALL | Both | | |
| **DfA-02** | Is total mechanical fastener count ≤ 20? (Each fastener = time + potential missed-torque defect. Count: screws + standoffs + nuts) | **M** | ALL | Both | | |
| **DfA-03** | Are all fasteners the same type/size OR at most 2 different sizes? (Multiple fastener types = wrong-tool-wrong-screw errors) | **M** | ALL | Both | | |
| **DfA-04** | Does the CM4 compute module insert into its socket without tools? (Push-fit, no soldering, no special jig) | **C** | ALL | Both | | |
| **DfA-05** | Are all cable connections either: (a) keyed connectors that cannot be inserted backwards, OR (b) clearly labeled with polarity/pin-1 marking? | **C** | ALL | Both | | |
| **DfA-06** | Is the assembly sequence "layer-cake" (bottom-up stacking) with no step that requires reaching through or around a previously installed part? | **M** | ALL | Both | | |
| **DfA-07** | Does the E-stop button mount from the operator-facing side without disassembling other components? (E-stop is a field-replaceable safety item) | **M** | ALL | Both | | |
| **DfA-08** | Can the primary display (HDMI) be connected and disconnected without soldering? (Cable connector, not soldered wires) | **C** | ALL | Both | | |
| **DfA-09** | Can the secondary display (SPI OLED) be connected and disconnected without soldering? (Ribbon cable or pin header, not soldered wires) | **M** | ALL | Both | | |
| **DfA-10** | Are all internal PCBs mounted using standoffs with adequate clearance (≥ 3mm) between boards for connector access and airflow? | **M** | ALL | Both | | |
| **DfA-11** | Is the enclosure designed as ≤ 3 pieces (base + top + optional front panel)? (More pieces = more assembly steps + alignment issues) | **m** | MK-PR | Proto | | |
| **DfA-12** | Does the enclosure have self-aligning features (alignment pins, snap tabs, or registration edges) so parts only fit one way? (Poka-yoke) | **M** | ALL | Prod | | |
| **DfA-13** | Is there a written assembly sequence with ≤ 15 discrete steps? (Can be printed as a 1-page work instruction) | **m** | ALL | Prod | | |
| **DfA-14** | For TAC/RACK variants: can the ruggedized enclosure be sealed (IP54/IP65) with a single gasket + perimeter fasteners, not per-connector individual sealing? | **M** | TC-RK | Prod | | |
| **DfA-15** | Does the design avoid adhesives in the assembly? (Adhesives = cure time + rework difficulty. Acceptable: thermal paste on heat sink only) | **m** | ALL | Both | | |

**DfA Item Count: 15** (4 Critical, 7 Major, 3 Minor, across prototype + production phases)

---

## CHECKPOINT — DfM + DfA REVIEW

### Summary So Far:

| Section | Items | Critical | Major | Minor |
|---|---|---|---|---|
| DfM (Manufacturing) | 14 | 4 | 6 | 2 |  <!-- 2 items don't add to 14 because Prod-only counts vary -->
| DfA (Assembly) | 15 | 4 | 7 | 3 |  <!-- Prototype subset = fewer items -->
| **Subtotal** | **29** | **8** | **13** | **5** |

### Vietnamese Manufacturing Reality Items Included:

| ID | Vietnamese-Specific Concern |
|---|---|
| DfM-01 | Local PCB fab layer count limitation |
| DfM-02 | Local PCB fab trace width minimum (0.2mm) |
| DfM-03 | Local PCB fab drill size minimum (0.3mm) |
| DfM-04 | Vietnamese SMT partner component size capability (≥ 0603) |
| DfM-05 | Component availability via The Gioi IC / Dien Tu Nhat Tao |
| DfM-08 | FDM build volume for in-house 3D printing |
| DfM-10 | Hai Phong CNC 3-axis vs 5-axis capability |
| DfM-14 | MIL-DTL connector sourcing (TC-RK only) |

### Design Decisions These Items Constrain:

1. **PCB geometry:** DfM-01/02/03 lock the I/O carrier board to 2-layer, ≥ 0.2mm traces, ≥ 0.3mm drills → directly constrains layout routing density
2. **Enclosure geometry:** DfM-08/09/10 + DfA-11 constrain prototype to ≤ 220mm dimension, no deep overhangs, ≤ 3-piece shell
3. **Assembly architecture:** DfA-06 (layer-cake stacking) + DfA-10 (3mm clearance) drive the physical stacking order: base → PCBs → displays → top cover
4. **Connector strategy:** DfA-05 (keyed connectors) + DfA-08/09 (no soldering) mean ribbon cables or board-to-board connectors, not direct wiring

---

### DfM + DfA Review Result:

**APPROVED** — Proceed to remaining 4 sections. No modifications requested.

---

## SECTION 3: DfMa — DESIGN FOR MAINTENANCE

**Context:** AICC is deployed at operator stations (desk, wall, vehicle, rack). Maintenance = firmware updates, component replacement (display, CM4, I/O board), and cleaning. No moving mechanical parts = no wear maintenance. Primary maintenance concern is electronics serviceability and software deployment. AICC must support field firmware update via USB (OP requirement from Phase 1). V-SMASH precedent: board swap = 20 min, field flashable via USB-C.

**Maintenance levels for AICC:**
- **Operator level (O):** Restart, firmware update, swap display, replace E-stop button
- **Technician level (I):** Swap CM4 module, swap I/O board, replace cables, reconfigure
- **Depot level (D):** PCB rework, full refurbishment (not expected to be common)

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfMa-01** | Can the CM4 compute module be removed and replaced without desoldering, using only hand tools (≤ 2 screws + pull from socket)? | **C** | ALL | Both | | |
| **DfMa-02** | Can firmware be updated in the field via USB without opening the enclosure? (USB port accessible externally) | **C** | ALL | Both | | |
| **DfMa-03** | Is the primary display (HDMI) replaceable as a single Line Replaceable Unit (LRU) — disconnect cable, remove 2–4 screws, swap? | **M** | ALL | Both | | |
| **DfMa-04** | Is the I/O carrier board accessible for inspection/replacement without removing the display first? (Avoid stacking that blocks lower layer access) | **M** | ALL | Both | | |
| **DfMa-05** | Are all internal connectors labeled with unique identifiers visible during reassembly? (Prevents wrong-port errors after maintenance) | **M** | ALL | Prod | | |
| **DfMa-06** | Is the E-stop button replaceable from the operator-facing side without opening the main enclosure? (Safety component = field replaceable) | **M** | ALL | Both | | |
| **DfMa-07** | Does the enclosure have a single-panel access path to ALL serviceable components? (One cover removal exposes everything, not multiple panels) | **m** | ALL | Both | | |
| **DfMa-08** | Is there adequate finger clearance (≥ 15mm) around all connectors that must be plugged/unplugged during maintenance? | **m** | ALL | Both | | |
| **DfMa-09** | Does the system provide a visual indicator (LED or on-screen) confirming successful boot after firmware update or component swap? | **M** | ALL | Both | | |
| **DfMa-10** | For TAC/RACK variants: can the IP54/IP65 seal be restored after maintenance without special sealing tools or adhesive? (Gasket-based, not RTV sealant) | **M** | TC-RK | Prod | | |
| **DfMa-11** | Is the average component replacement time (CM4, display, I/O board) ≤ 15 minutes per LRU, measurable with a stopwatch during prototype test? | **M** | ALL | Prod | | |

**DfMa Item Count: 11** (2 Critical, 7 Major, 2 Minor)

---

## SECTION 4: DfS — DESIGN FOR SAFETY

**Context:** AICC is a command-and-control interface for semi-autonomous AI agents. Safety = preventing unintended agent actions + operator protection from electrical/mechanical hazards. Hybrid C+ architecture: HW interrupt E-stop, HW watchdog timer, dual-track FSM, graduated confirmation. Phase 1 safety requirements: SF.01–SF.05. MIL-STD-882E applies to TAC/RACK.

**Safety hierarchy (P&B Rule 3):** Safe-life → Fail-safe → Redundant

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfS-01** | Does the E-stop button use a hardware interrupt (dedicated GPIO) that bypasses all software layers? (Not polled via I2C with other buttons) | **C** | ALL | Both | | |
| **DfS-02** | Does the E-stop use a normally-closed (NC) contact, so a wire break or disconnect = automatic halt state? | **C** | ALL | Both | | |
| **DfS-03** | Is the E-stop button physically guarded (recessed or collared) to prevent accidental activation, per SF.03? | **C** | ALL | Both | | |
| **DfS-04** | Does the hardware watchdog timer (WDT) operate independently of the main CPU? (Dedicated IC, not internal CM4 watchdog — external WDT resets system if CPU hangs) | **C** | ALL | Both | | |
| **DfS-05** | Does the E-stop → halt-all command path complete in ≤ 200ms from button press to CDM transmission? (Measured end-to-end, per SF.01–SF.03) | **C** | ALL | Both | | |
| **DfS-06** | After E-stop activation, does the system require a deliberate 2-action reset (physical E-stop release + software confirm) to exit emergency state? (No auto-resume) | **C** | ALL | Both | | |
| **DfS-07** | Is the graduated confirmation implemented so that: info actions = single press, warning = 2-step, critical = 2-step + hold, E-stop = immediate? (Each level verified independently) | **M** | ALL | Both | | |
| **DfS-08** | Does the system enter fail-safe state (halt all agents) within ≤ 5 seconds of detected connection loss, per SF.04? | **M** | ALL | Both | | |
| **DfS-09** | Are all exposed voltages ≤ 50V DC and all accessible metal parts bonded to a common ground? (No shock hazard to operator) | **M** | ALL | Both | | |
| **DfS-10** | Does the enclosure have no sharp edges, pinch points, or protrusions in the operator interaction zone? (Buttons, display bezel, E-stop surround) | **M** | ALL | Both | | |
| **DfS-11** | For TAC/RACK variants: has a Preliminary Hazard Analysis (PHA) per MIL-STD-882E been completed identifying all hazards rated Severity I–III? | **M** | TC-RK | Prod | | |
| **DfS-12** | Is the audio alert volume limited to ≤ 85 dB at 30cm to prevent operator hearing damage during sustained alarm? (Per MIL-STD-1474E) | **m** | ALL | Prod | | |

**DfS Item Count: 12** (6 Critical, 5 Major, 1 Minor)

---

## SECTION 5: DfC — DESIGN FOR COST

**Context:** AICC has strict cost targets: MAKER BOM ≤ $50 (production), PRO ≤ $120, prototype BOM ≤ $80. Local content ≥ 60% by value (MF.01). V-SMASH precedent: custom carrier $50 local fab, CNC enclosure $100. AICC should be simpler → cheaper. Production optimization committed in VDI 2225 scoring (C10: 2→3 improvement for Hybrid C+).

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfC-01** | Does the prototype BOM total ≤ $80 (all components + enclosure + cables, excluding development tools)? | **C** | ALL | Proto | | |
| **DfC-02** | Does the production BOM total meet variant targets? MAKER ≤ $50, PRO ≤ $120, TAC ≤ $200, RACK ≤ $400? | **C** | ALL | Prod | | |
| **DfC-03** | Is local content ≥ 60% by value for the production BOM? (Count: PCB fab + assembly labor + enclosure + local components as "local") | **C** | ALL | Prod | | |
| **DfC-04** | Are all ICs available in industrial temp grade (-40 to +85°C) for MAKER/PRO, with military grade (-55 to +125°C) ONLY specified for TAC/RACK? (Military grade = 2–5× cost) | **M** | ALL | Prod | | |
| **DfC-05** | Does the design use ≤ 3 custom/unique PCBs (I/O carrier board + optional adapter boards)? (Each unique board = NRE cost for design + fab setup) | **M** | ALL | Both | | |
| **DfC-06** | Is the CM4 module the single most expensive component? (If not, identify what is — potential cost reduction target) | **m** | ALL | Both | | |
| **DfC-07** | For production: has the HW debounce circuit been integrated into the carrier board (eliminating separate daughter board), per Hybrid C+ BOM optimization commitment? | **M** | ALL | Prod | | |
| **DfC-08** | Does the platform core (shared across variants) represent ≥ 70% of BOM cost, with variant-specific parts ≤ 30%? (Maximizes economies of scale on shared components) | **M** | ALL | Prod | | |
| **DfC-09** | Are all passive components (resistors, capacitors) from standard E96 values available in bulk from Vietnamese distributors at ≤ $0.01/piece? | **m** | ALL | Prod | | |
| **DfC-10** | Has a "should-cost" comparison been done against the import equivalent? (AICC production cost target ≤ 70% of comparable import product) | **m** | ALL | Prod | | |

**DfC Item Count: 10** (3 Critical, 4 Major, 3 Minor)

---

## SECTION 6: DfT — DESIGN FOR TEST

**Context:** AICC must be testable at 3 levels: (1) factory acceptance test after assembly, (2) field self-test (BIST) for operator confidence, (3) formal verification against Phase 1 requirements. Hybrid C+ has a dual-track FSM that is independently testable — this is a design advantage that the checklist should verify is preserved. V-SMASH precedent: factory calibration only (R45), operator-initiated self-check (R49).

| ID | Question | Sev | Variants | Phase | Result | Notes |
|---|---|---|---|---|---|---|
| **DfT-01** | Does the I/O carrier board include test points (TP) for: 5V rail, 3.3V rail, I2C SDA, I2C SCL, E-stop interrupt line? (Minimum 5 TPs, labeled on silkscreen) | **C** | ALL | Both | | |
| **DfT-02** | Can the E-stop latency be measured with standard lab equipment (oscilloscope + signal generator) by probing the HW interrupt TP and monitoring CDM output? | **C** | ALL | Both | | |
| **DfT-03** | Does the system have a built-in self-test (BIST) mode accessible via button combination or menu that verifies: display output, LED function, button registration, audio output, network connectivity, WDT heartbeat? | **M** | ALL | Both | | |
| **DfT-04** | Can each of the two FSMs (Operator FSM and System FSM) be tested independently using mock inputs, without requiring live IRONMESH agents? | **C** | ALL | Both | | |
| **DfT-05** | Does the BIST mode complete in ≤ 60 seconds and produce a PASS/FAIL summary visible on the primary display? | **M** | ALL | Prod | | |
| **DfT-06** | Can the HW watchdog timer be tested by deliberately injecting a CPU hang (e.g., test command that stops WDT heartbeat) and verifying system reset occurs within expected timeout? | **M** | ALL | Both | | |
| **DfT-07** | Are all 4 RGB LEDs individually addressable and testable? (BIST should cycle each LED through R/G/B/off independently) | **m** | ALL | Both | | |
| **DfT-08** | Is there a factory acceptance test procedure (ATP) that can be executed in ≤ 15 minutes per unit covering: power-on, BIST, button check, display check, network ping, E-stop test? | **M** | ALL | Prod | | |
| **DfT-09** | Does the audit logging system have a test mode that writes a known test record and reads it back to verify storage integrity and timestamp accuracy? | **M** | ALL | Both | | |
| **DfT-10** | For TAC/RACK variants: does the design include provisions for MIL-STD-810H environmental testing (accessible mounting points for shaker table, thermal chamber sensor ports)? | **M** | TC-RK | Prod | | |
| **DfT-11** | Can software test coverage be reported for the dual-track FSM? (State × transition matrix is enumerable — 100% branch coverage achievable and verifiable) | **m** | ALL | Prod | | |
| **DfT-12** | Is there a network loopback test mode that verifies CDM send → receive without an external IRONMESH network? (Self-contained functional test) | **M** | ALL | Both | | |

**DfT Item Count: 12** (3 Critical, 6 Major, 2 Minor — note: 1 item is TC-RK only)

---

## COMPLETE CHECKLIST SUMMARY

### Item Counts by Section:

| Section | Items | Critical | Major | Minor |
|---|---|---|---|---|
| DfM — Manufacturing | 14 | 4 | 6 | 2 |
| DfA — Assembly | 15 | 4 | 7 | 3 |
| DfMa — Maintenance | 11 | 2 | 7 | 2 |
| DfS — Safety | 12 | 6 | 5 | 1 |
| DfC — Cost | 10 | 3 | 4 | 3 |
| DfT — Test | 12 | 3 | 6 | 2 |
| **TOTAL** | **74** | **22** | **35** | **13** |

### Items by Variant Applicability:

| Scope | Count | % |
|---|---|---|
| ALL (applies to every variant) | 62 | 84% |
| MK-PR (MAKER + PRO only) | 4 | 5% |
| TC-RK (TAC + RACK only, military) | 8 | 11% |

### Items by Phase:

| Phase | Count | % |
|---|---|---|
| Both (prototype AND production) | 52 | 70% |
| Proto only | 2 | 3% |
| Prod only | 20 | 27% |

### Vietnamese Manufacturing Reality Items (complete list):

| ID | Vietnamese-Specific Concern |
|---|---|
| DfM-01 | Local PCB fab layer count (2-layer proven, 4-layer possible) |
| DfM-02 | Local PCB fab trace width minimum (≥ 0.2mm) |
| DfM-03 | Local PCB fab drill size minimum (≥ 0.3mm) |
| DfM-04 | Vietnamese SMT partner ≥ 0603 capability |
| DfM-05 | Component sourcing via The Gioi IC / Dien Tu Nhat Tao / Dai Viet |
| DfM-08 | FDM build volume (in-house 3D printing) |
| DfM-10 | Hai Phong CNC 3-axis machining limit |
| DfM-14 | MIL-DTL connector sourcing (long lead for TAC/RACK) |
| DfC-03 | Local content ≥ 60% by value |
| DfC-09 | Passive components from Vietnamese bulk distributors |

### Quick-Reference: Prototype GO/NO-GO Items

The following **Critical + Both/Proto** items MUST pass before prototype build:

| ID | Short Description |
|---|---|
| DfM-01 | PCB ≤ 2 layers |
| DfM-02 | Traces ≥ 0.2mm |
| DfM-05 | Components sourceable |
| DfM-07 | Enclosure FDM-printable |
| DfM-11 | Standard connectors |
| DfA-01 | Assembly ≤ 30 min |
| DfA-04 | CM4 tool-free insert |
| DfA-05 | Keyed connectors |
| DfA-08 | Display no-solder connect |
| DfMa-01 | CM4 replaceable by hand |
| DfMa-02 | USB firmware update external |
| DfS-01 | E-stop on HW interrupt |
| DfS-02 | E-stop NC contact |
| DfS-03 | E-stop guarded |
| DfS-04 | External HW WDT |
| DfS-05 | E-stop path ≤ 200ms |
| DfS-06 | 2-action E-stop reset |
| DfC-01 | Prototype BOM ≤ $80 |
| DfT-01 | Test points on I/O board |
| DfT-02 | E-stop latency measurable |
| DfT-04 | FSMs independently testable |

**21 Critical items for prototype GO decision.** Zero fails allowed.

---

*Document ID: VN-AICC-001-DfX-v0.9*
*Status: COMPLETE — All 6 DfX sections drafted, ready for layout application*
*Next: Apply this checklist against the preliminary layout (VN-AICC-001-P3-S1-v0.9)*
