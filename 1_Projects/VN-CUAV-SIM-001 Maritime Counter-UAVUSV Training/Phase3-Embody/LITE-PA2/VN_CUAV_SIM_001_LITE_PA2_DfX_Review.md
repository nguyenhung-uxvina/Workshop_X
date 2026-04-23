---
created: 2026-04-15
updated: 2026-04-15
type: phase3-dfx
project: VN-CUAV-SIM-001
variant: LITE-PA2
pipeline: helix-embody-realize v3.2
block: BB
pahl-beitz: 7.3-7.5
---

# BB DfX Review — VN-CUAV-SIM-001 LITE PA-2

> **P&B 7.3:** Basic Rules (Clarity, Simplicity, Safety)
> **P&B 7.4:** Design Principles (5 principles rapid audit)
> **P&B 7.5:** Design for X (lifecycle-oriented)
> **ICDM extension:** Robustool follow-up from Phase 2 BD

---

## PART 1: THREE BASIC RULES (P&B 7.3)

### Rule 1: CLARITY (Unambiguity)

**Question:** Is the layout free of ambiguity in function, force paths, and interfaces?

| Check | Result | Evidence |
|-------|--------|----------|
| Every component has a single, clear function | ✅ PASS | 7 main function carriers mapped (BA §7). No component serves ambiguous dual purposes. |
| Force paths are deterministic | ✅ PASS | BA½ verified all 6 force paths — continuous, metal-to-metal. |
| Interface definitions are unambiguous | ⚠️ WARN | IF-02e (solenoid peak current) still TBD. All other 23 interfaces fully specified in ICD v1.5. Acceptable — deferred to PoC 2026-05-07. |
| Assembly sequence is unambiguous | ✅ PASS | 12-step sequence in BA §5, each step has tools + time estimate. |
| Signal flow is traceable | ✅ PASS | Latency budget fully allocated per domain (ELEC ≤30ms, SW ≤20ms). |

**Clarity verdict: ✅ PASS (1 WARN — IF-02e deferred to PoC)**

### Rule 2: SIMPLICITY (Minimum complexity)

| Check | Result | Evidence |
|-------|--------|----------|
| Part count minimized | ✅ PASS | 4 modules, ~35 distinct parts. No redundant components (BA½ §2). |
| Standard parts preferred | ✅ PASS | Fasteners: M10 wing bolts, M12 anchors. Connectors: 12-pin MIL, USB, HDMI. All standard. |
| Number of different part types minimized | ✅ PASS | 3 fastener sizes (M5, M10, M12). 2 connector types (MIL, USB). Standardized. |
| Assembly operations minimized | ✅ PASS | 12 steps / 3.5h. Only hand tools + drill required. No special tooling. |
| Manufacturing processes minimized | ✅ PASS | 3 processes: CNC milling (Al), welding (steel), COTS assembly. All in WX capability. |
| Adjustment mechanisms avoided where possible | ✅ PASS | Only 2 adjustments: cradle height (3 fixed positions, pin-lock) + seat rail (3 positions). No continuous adjustment needed. |

**Simplicity verdict: ✅ PASS**

### Rule 3: SAFETY (Fail-safe design)

| Check | Result | Evidence |
|-------|--------|----------|
| **Fail-safe principle** | ✅ PASS | E-stop: NC relay → power cut → actuators stop → platform gravity-return to level. Dual redundancy: SW limit + mechanical hard stop (SF9). |
| Single-point-of-failure identified | ⚠️ WARN | GPU failure → 5/7 main functions stop. Known from Phase 2 (CFMA). Mitigation: instructor override panel (FORGE_Fallback_Architecture). Acceptable for Tier 1 prototype. |
| Human injury risk | ✅ PASS | No live ammunition (SC-1). Solenoid ≤60N (non-lethal). Motion ±12° with harness. Projector ≥2m from eyes (IEC 62471). |
| Electrical safety | ✅ PASS | All actuators 24VDC (safe voltage). 220V only in UPS/PDU (enclosed, fused). E-stop cuts 24V + motion. |
| Mechanical safety | ✅ PASS | Bolt-to-floor (no tip-over). Hard stops on traverse/elevation. 4-point harness on seat. Wing bolts accessible (no pinch points). |
| Fire safety | ✅ PASS | No flammable materials in system. Screen fabric = fire-retardant (spec in BOM). UPS has thermal protection. Room AC prevents overheating. |
| **Solenoid recoil safety** (Gate 2 C5) | ⚠️ WARN | ≤60N force at operator hand. Not injurious. But repeated impulse — add: duty cycle limiter in SW (max 10 min continuous firing → forced cool-down). **Add to DfU.** |

**Safety verdict: ✅ PASS (2 WARN — GPU SPOF known, solenoid duty cycle to add)**

### Basic Rules Summary

| Rule | Result |
|------|--------|
| Clarity | ✅ PASS (1 WARN) |
| Simplicity | ✅ PASS |
| Safety | ✅ PASS (2 WARN) |
| **Overall** | **✅ PASS** |

---

## PART 2: FIVE DESIGN PRINCIPLES RAPID AUDIT (P&B 7.4)

| # | Principle | Check | Result |
|---|-----------|-------|--------|
| 1 | **Function division** — clear allocation of functions to components | Each of 41 sub-functions allocated to specific SS (BA §7). No orphan functions. | ✅ OK |
| 2 | **Self-help** — system assists its own function | NFC auto-detect → auto-configure (F7.3-7.4). Self-test at boot (SS5). Motion PID self-correcting. | ✅ OK |
| 3 | **Stability and bi-stability** — preferred operating states | Platform has gravity-return to neutral (stable). Weapon traverse has friction (stable at any position). No unintended bi-stable states. | ✅ OK |
| 4 | **Simplicity of form** — avoid unnecessary complexity | 4 rectangular modules. Rectilinear frame. Standard cross-sections (60×40mm tube). No compound curves except screen (functional). | ✅ OK |
| 5 | **Safety factor** — margins against failure | Power: 59% margin. Weight: all modules well under 200kg. Latency: 0% margin (⚠️ — but this is the design driver, not an oversight). Force: actuators 500N for 130kg load (3.8× static margin). | ⚠️ NOTE — latency zero margin is accepted per A6 CLIFF design decision |

**Principles verdict: ✅ PASS (latency margin note carried forward)**

---

## PART 3: DESIGN FOR X — 10 DfX CATEGORIES

### DfM — Design for Manufacturing

| Check | Result | Notes |
|-------|--------|-------|
| All parts manufacturable by WX | ✅ OK | CNC Al: WX CNC center. Welding: WX welding shop. Assembly: WX technicians. |
| Tolerances achievable | ✅ OK | CNC ±0.1mm (WX capability). Weapon body ±5mm (relaxed). Encoder mount ±0.05mm (CNC). |
| Material availability in VN | ✅ OK | Al 6061 rod/plate: Saigon Steel. Steel tube 60×40: local supplier. |
| Surface finish specified | ⚠️ WARN | CNC Al parts need anodizing spec (hard anodize or clear?) for wear resistance on weapon modules. **Add spec.** |
| Manufacturing sequence clear | ✅ OK | CNC body → anodize → assemble solenoid+trigger+NFC → test → package. |

**DfM verdict: ✅ OK (1 WARN — add anodizing spec)**

### DfA — Design for Assembly

| Check | Result | Notes |
|-------|--------|-------|
| Assembly direction consistency | ✅ OK | Top-down assembly: platform → pedestal → cradle → weapon. All vertical. |
| Self-aligning features | ✅ OK | Locating pins on weapon interface plate. Pin joints on actuators. |
| Fastener accessibility | ✅ OK | Wing bolts (hand-accessible). M12 floor anchors (wrench from above). |
| Minimum fastener types | ✅ OK | 3 types: M5 (internal), M10 (weapon swap), M12 (floor anchor). |
| Assembly time per unit | ✅ OK | 3.5h × 2 technicians. Acceptable for $50-70K product. |
| Disassembly for transport | ✅ OK | Reverse of assembly. Screen frame → 4 sections. All fit in cases. |

**DfA verdict: ✅ OK**

### DfR — Design for Reliability

| Check | Result | Notes |
|-------|--------|-------|
| MTBF target ≥500h (Ma-01) | ⚠️ WARN | Weakest link: projector lamp/LED — typically 20,000h. Mechanical parts (bearings, actuators) >50,000h. Electronics >100,000h. System MTBF estimated ≥2,000h (well above target). But **solenoid lifetime unknown** — add to PoC test. |
| Single-point failures mitigated | ⚠️ WARN | GPU = SPOF (known). Mitigation: instructor override + system restart SOP (<5min). Not fully redundant — acceptable for Tier 1. |
| EMI (from BA½ DF-1) | ⚠️ WARN | Solenoid PWM switching → potential encoder noise. **Mitigation: twisted pair + shielded cable for solenoid power. Separate trunking from signal cables. Add ferrite bead on solenoid leads.** |
| Vibration (from BA½ DF-2) | ✅ OK | Platform vibration → projector mount: different structural paths (floor vs ceiling). Frequency separation: platform 0.13-0.25 Hz vs building resonance >5 Hz. OK. |
| USB reliability (from BA½ DF-3) | ⚠️ WARN | 5m = USB 2.0 limit. **Mitigation: use active USB cable (built-in repeater) OR add powered USB hub at platform base.** Cost: +$10. |
| Connector reliability | ✅ OK | 12-pin MIL bayonet: >5,000 mate cycles. NFC: contactless, no wear. USB: >10,000 cycles. |

**DfR verdict: ⚠️ WARN (4 items — solenoid life, SPOF, EMI, USB)**

### DfT — Design for Test

| Check | Result | Notes |
|-------|--------|-------|
| Boot self-test covers all subsystems | ✅ OK | Encoder check → trigger check → NFC read → projector signal → motion limit → audio → network → PASS/FAIL dashboard. |
| Test points accessible | ✅ OK | ESP32 USB = debug console. Instructor screen = system status. LEDs on motor driver. |
| Calibration procedure defined | ⚠️ WARN | Warp mesh, PID tuning, encoder offset — procedures exist conceptually but **no formal calibration SOP document yet**. Create in Phase 4. |
| Field diagnostics without special tools | ✅ OK | All diagnostics via instructor screen GUI. Error codes in Vietnamese. Log file on USB export. |

**DfT verdict: ✅ OK (1 WARN — calibration SOP needed)**

### DfW — Design for (Weight) Transport

| Check | Result | Notes |
|-------|--------|-------|
| All modules ≤200 kg | ✅ OK | Heaviest: M4 = 44 kg. |
| All modules pass 900×2100 door | ✅ OK | Largest: M2 = 1600×800mm (long axis through). |
| 2-person carry max | ✅ OK | Heaviest 2-person: M2 = 42 kg (21 kg/person). |
| Road transport survivability | ⚠️ WARN | Flight cases with foam inserts for projectors + PCs. **Specify case foam density + shock rating (MIL-STD-810H Method 516.8, 40g half-sine).** |
| Stack-able cases | ✅ OK | Standard flight cases with stacking feet. |

**DfW verdict: ✅ OK (1 WARN — case shock spec)**

### DfU — Design for Upgradeability

| Check | Result | Notes |
|-------|--------|-------|
| MWI weapon module expansion | ✅ OK | Universal cradle accepts any weapon module with 12-pin MIL + NFC. Phase 2 modules (WM-03, WM-04) = plug-and-play. |
| PA-2 → PA-3 upgrade path (3-DOF) | ✅ OK | Platform frame has mounting point for 3rd actuator (heave). Frame stress OK for +1 actuator per SA_Domain_Budgets. |
| GPU upgrade | ✅ OK | Standard PCIe slot in tower PC. RTX 4090 → next gen = same form factor. |
| Software update (no internet) | ✅ OK | USB drive update. Pre-imaged SSD swap for major versions. |
| CORTEX network upgrade | ✅ OK | LAN port on render PC + instructor PC. CORTEX SW module = software-only upgrade. |
| **Solenoid duty cycle limiter** (Safety §3) | **ADD** | SW limiter: max 10 min continuous firing → 2 min cool-down. Configurable per weapon profile. Instructor override available. |
| **DfU-06 to DfU-09 (Gate 3 requirement)** | | |
| DfU-06: Update mechanism exists | ✅ OK | USB drive update path. |
| DfU-07: Rollback capability | ⚠️ WARN | SSD swap = full rollback. But **no in-place version rollback** in SW. Add: dual-boot partition (A/B) for safe update. |
| DfU-08: Monitoring for update health | ⚠️ WARN | Self-test at boot verifies components. But **no post-update validation test**. Add: auto-run self-test after USB update. |
| DfU-09: Lifecycle documentation | ⚠️ WARN | Not yet created. Create update SOP + version log template in Phase 4. |

**DfU verdict: ⚠️ WARN (3 items — rollback, post-update test, lifecycle doc)**

### DfQC — Design for Quality Control

| Check | Result | Notes |
|-------|--------|-------|
| Incoming inspection criteria for COTS | ⚠️ WARN | Need: projector input lag test (KG-2), GPU benchmark, encoder resolution test, actuator force test. **Create incoming QC checklist.** |
| In-process inspection points | ✅ OK | CNC: dimensional check after machining. Assembly: torque check on M10/M12. Weld: visual inspection. |
| Final acceptance test | ✅ OK | Boot self-test + 1 full scenario run + all 5 success criteria from Physical Gate. |
| NFC tag verification | ✅ OK | Auto-read + verify weapon ID + calibration date + round count at every swap. |

**DfQC verdict: ⚠️ WARN (1 item — incoming QC checklist)**

### DfThermal — Design for Thermal Management

| Check | Result | Notes |
|-------|--------|-------|
| Heat sources identified | ✅ OK | GPU 500W, Projectors 900W, Instructor PC 200W = 1.6kW total heat. |
| Room heat load | ✅ OK | 1.6kW in 6×8×3=144m³ room. With AC (typical 3.5kW cooling) → ΔT < 5°C. |
| Component cooling | ✅ OK | GPU: tower case with fans. Projectors: internal fans. ESP32: passive. |
| Rack case ventilation | ⚠️ WARN | Centralized rack (M4) has GPU + UPS in same case = 650W heat. **Spec: perforated case panels + 2× 120mm exhaust fans. Max internal temp ≤45°C.** |
| Solenoid thermal (BA½ DF-4) | ⚠️ WARN | Solenoid at 600 RPM duty cycle: ~5% on-time. Max coil temp TBD. **Add: thermal fuse on solenoid (75°C cutoff). Test at PoC.** |

**DfThermal verdict: ⚠️ WARN (2 items — rack ventilation spec, solenoid thermal fuse)**

### DfDurability — Design for Durability

| Check | Result | Notes |
|-------|--------|-------|
| Design life ≥10 years (Ma-05) | ✅ OK | Mechanical: steel/Al structure >20 years. Electronics: replace COTS every 3-5 years (planned). |
| Wear items identified | ✅ OK | Bearing (traverse/elevation), actuator ball-screw, solenoid plunger, trigger microswitch, projection fabric. |
| Wear item replacement | ✅ OK | All accessible without major disassembly. Bearings: press-fit, 2h replacement. Microswitch: 10M cycles, screw-in. |
| Dust (BA½ DF-6) | ⚠️ WARN | Projector lens + air filter. **Monthly: clean projector filter. Quarterly: clean lens. Add to maintenance SOP.** |
| UV degradation | ✅ OK | Indoor installation. No UV exposure. Screen fabric: indoor-rated. |

**DfDurability verdict: ✅ OK (1 WARN — dust maintenance SOP)**

### DfTransport — Design for Transport

| Check | Result | Notes |
|-------|--------|-------|
| 4 flight cases ≤200 kg each | ✅ OK | Max 44 kg (M4). |
| Vietnam road conditions | ⚠️ WARN | Need shock-rated cases. See DfW WARN. |
| 20ft container compatible | ✅ OK | 4 cases total ~0.5 m³. Container = 33 m³. Fits easily. |
| Air transport (optional) | ✅ OK | All cases <32 kg airline limit except M4 (44 kg — split into 2 if needed for air). |

**DfTransport verdict: ✅ OK (1 WARN — shock rating spec)**

---

## PART 4: DfX SUMMARY MATRIX

| DfX Category | Verdict | FAIL-H | WARN | OK | Items to Resolve |
|-------------|---------|--------|------|-----|-----------------|
| DfM | ✅ OK | 0 | 1 | 4 | Anodizing spec |
| DfA | ✅ OK | 0 | 0 | 6 | — |
| DfR | ⚠️ WARN | 0 | 4 | 2 | Solenoid life, SPOF, EMI shielding, USB active cable |
| DfT | ✅ OK | 0 | 1 | 3 | Calibration SOP |
| DfW | ✅ OK | 0 | 1 | 4 | Case shock spec |
| DfU | ⚠️ WARN | 0 | 3 | 5 | Rollback A/B, post-update test, lifecycle doc |
| DfQC | ⚠️ WARN | 0 | 1 | 3 | Incoming QC checklist |
| DfThermal | ⚠️ WARN | 0 | 2 | 3 | Rack ventilation, solenoid thermal fuse |
| DfDurability | ✅ OK | 0 | 1 | 4 | Dust maintenance SOP |
| DfTransport | ✅ OK | 0 | 1 | 4 | Shock rating spec |
| **TOTAL** | | **0** | **15** | **38** | |

**0 FAIL-H items → No blocking DfX issues. 15 WARN items to track.**

---

## PART 5: ICDM EXTENSION — Robustool Follow-Up

Phase 2 BD (ICDM_BD_Platform_Innovation) identified illegitimate operation risks. Checking embodiment addresses them:

| Robustool Risk | Phase 2 Finding | Phase 3 Layout Addresses? | Status |
|---------------|----------------|--------------------------|--------|
| Misuse: wrong weapon module installed | NFC auto-detect rejects unknown tag | ✅ YES — NFC + 12-pin connector. Unknown module → system rejects, instructor alert. | OK |
| Misuse: operation without harness | Harness interlock? | ⚠️ NO — add harness buckle sensor → SW interlock. Motion platform disabled until harness confirmed. | **ADD** |
| Overload: >130 kg on platform | Structural OK for 150 kg. Actuator force margin 3.8×. | ✅ YES — structure handles overload. Motion may slow. | OK |
| Overload: continuous 8h operation | Power 2.0kW sustained. AC required. | ✅ YES — all components rated for continuous duty. AC handles thermal. | OK |
| Upgrade: new weapon module (future) | MWI architecture. NFC + 12-pin standard. | ✅ YES — any new module just needs correct connector + NFC tag. | OK |
| Upgrade: 3rd actuator for PA-3 | Frame mounting point pre-designed | ✅ YES — mount point in platform frame (BA §6.2). | OK |
| Upgrade: CORTEX networking | LAN port available | ✅ YES — render PC + instructor PC both have Gigabit Ethernet. | OK |

**ICDM Platform Requirements (IX-01 to IX-07):**

| IX | Requirement | Physically Embodied? | Status |
|----|------------ |---------------------|--------|
| IX-01 | Universal cradle (swap weapons) | ✅ Quick-release plate + 12-pin MIL + NFC | OK |
| IX-02 | Software-only scenario update | ✅ USB drive update path | OK |
| IX-03 | Hardware upgrade path (PA-2→PA-3→PA-4) | ✅ 3rd actuator mount + modular weapon | OK |
| IX-04 | Network-ready (CORTEX) | ✅ LAN port + SW agent module | OK |
| IX-05 | Content expansion (new targets/scenarios) | ✅ SQLite DB + Unity AssetBundle | OK |
| IX-06 | Multi-weapon ballistic tables | ✅ NFC auto-select per weapon type | OK |
| IX-07 | Instructor station scalable | ⚠️ WARN — current: 1 trainee. LAN supports ≤4. But instructor GUI needs multi-station mode. SW task for Phase 3-4. | WARN |

**Robustool verdict: 1 item to ADD (harness interlock), 1 WARN (IX-07 multi-station GUI)**

---

## PART 6: PLAUSIBLE 9-CHECK (on BB DfX output itself)

| Check | Result | Notes |
|-------|--------|-------|
| **P** Physics | ✅ PASS | All forces, thermal loads, power budgets within physical limits. 500N actuator for 130kg = 3.8× margin. |
| **L** Logic | ✅ PASS | DfX checks follow from layout decisions in BA. Each WARN has traceable source. |
| **A** Assumptions | ⚠️ FLAG | Solenoid lifetime assumed >1M cycles (no data). Projector input lag assumed achievable ≤17ms (no benchmark yet). Both flagged in KG-1, KG-2. |
| **U** Units | ✅ PASS | Consistent: N, mm, °C, ms, W, kg, m throughout. |
| **S** Scale | ✅ PASS | Design works for 1 unit (prototype) and scales to 20+ units (same BOM). |
| **I** Integration | ✅ PASS | All DfX findings compatible with ICD v1.5. No new interfaces needed. |
| **B** Boundary | ✅ PASS | Boundaries checked: 0°C startup (OK — indoor AC), 55°C component max (thermal fuse), 0 targets (idle OK), 8 targets max (GPU tested). |
| **L** Lethality | ✅ PASS | No live ammo (SC-1). Solenoid ≤60N. E-stop. Harness interlock to be added. |
| **E** Endurance | ⚠️ FLAG | GPU/projector EOL yr3-5 (Gate 2 C4). DfU rollback mechanism flagged. Solenoid longevity unknown. |

**PLAUSIBLE: 7 PASS + 2 FLAG + 0 REJECT**

---

## PART 7: ACTION ITEMS CONSOLIDATED

### Must resolve before Gate 3 (H = High priority)

| # | Item | DfX Source | Action | Owner | Deadline |
|---|------|-----------|--------|-------|----------|
| BB-H1 | Solenoid ≥25N validation | DfR, KG-1 | PoC physical test | CEO | 2026-05-07 |
| BB-H2 | Projector ≤17ms benchmark | DfR, KG-2 | Test 3 models | CEO+AI | Phase 3 BA→BC |
| BB-H3 | EMI shielding solenoid → encoder | DfR, DF-1 | Twisted pair + ferrite + separate trunking | ELEC | BD (BOM) |
| BB-H4 | USB active cable or hub | DfR, DF-3 | Add active USB 5m or hub at platform | ELEC | BD (BOM) |
| BB-H5 | Harness interlock sensor | Robustool | Buckle sensor → SW interlock for motion | MECH+SW | BC (ICD) |
| BB-H6 | Rack ventilation spec | DfThermal | 2× 120mm fans, perforated panels, ≤45°C | MECH | BD (BOM) |
| BB-H7 | Solenoid thermal fuse | DfThermal | 75°C cutoff + duty cycle SW limiter | ELEC+SW | BD (BOM) |

### Should resolve before Phase 4 (M = Medium priority)

| # | Item | DfX Source | Action | Owner | Deadline |
|---|------|-----------|--------|-------|----------|
| BB-M1 | Anodizing spec for Al parts | DfM | Hard anodize Type III for weapon modules, clear for cradle | MECH | Phase 4 |
| BB-M2 | Calibration SOP | DfT | Warp mesh + PID + encoder mapping procedure | SW+MECH | Phase 4 |
| BB-M3 | Incoming QC checklist | DfQC | Projector lag test, GPU benchmark, encoder resolution | QC | Phase 4 |
| BB-M4 | Flight case shock spec | DfW+DfTransport | MIL-STD-810H Method 516.8, 40g, foam density | MECH | Phase 4 |
| BB-M5 | DfU rollback (A/B partition) | DfU | Dual-boot SSD for safe SW update | SW | Phase 4 |
| BB-M6 | Post-update validation | DfU | Auto self-test after USB update | SW | Phase 4 |
| BB-M7 | Lifecycle documentation | DfU | Update SOP + version log template | SW | Phase 4 |
| BB-M8 | Dust maintenance SOP | DfDurability | Monthly projector filter, quarterly lens clean | OPS | Phase 4 |

```
╔══════════════════════════════════════════════════╗
║  BB DfX REVIEW: ✅ PASS                          ║
║  Basic Rules: 3/3 PASS                           ║
║  5 Principles: 5/5 OK                            ║
║  DfX: 0 FAIL-H, 15 WARN (all tractable)         ║
║  PLAUSIBLE: 7 PASS + 2 FLAG + 0 REJECT          ║
║  Robustool: 1 ADD (harness interlock)            ║
║  Action items: 7 High + 8 Medium                 ║
╚══════════════════════════════════════════════════╝
```
