---
created: 2026-04-11
type: morphological-matrix
block: BB
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
design_type: ADAPTIVE
status: COMPLETE — CEO creative input requested
wp_count: 52 (across 16 rows)
eliminated: 3 (DEMAND filter)
structures: α (Symmetric) + δ (Asymmetric)
feeds_to:
  - VN_MGM_V5_Concept_Variants.md
  - VN_MGM_V5_VDI_2225_Evaluation.md (BC)
---

# BB Morphological Matrix — VN-MGM V5-MOTORIZED (ICDM)

## Search Method Summary

| Method | Applied To | Yield |
|--------|-----------|:-----:|
| M1 Literature/standards | All SFs — IEC 61800, MIL-DTL, slewing drive catalogs, IEC 62443 | 16 WPs |
| M3 Known technical systems | RE v1.0 (8 competitors × 12 SFs) + N12 morpho (38 WPs) | 18 WPs |
| M4 Analogies | Solar tracker drives, antenna positioners, telescope mounts, CNC rotary tables | 6 WPs |
| M5 Physical effects catalogue | F7.1, F8.1 — Koller/Roth: gear mesh, friction, belt, screw, direct drive | 8 WPs |
| M7 TRIZ principles | F7.1 (#5 Merging → integrated drive), F8.1 (#24 Intermediary), TC-3 (#11 Cushioning) | 4 WPs |

**Total: 52 WPs across 16 rows (after 3 eliminated by DEMAND).**

---

## DEMAND Filter — Eliminated WPs

| Row | WP | Eliminated By | Violation |
|-----|-----|:------------:|-----------|
| F7.1 | Belt drive around ring (360° closed loop) | K-01 | 360° continuous belt requires infinite belt or orbit mechanism — not feasible for full continuous rotation |
| F7.1 | Direct drive frameless motor (replace V1 bearing) | SC-V1-1 | Frameless motor cannot handle 50 kN recoil through rotor/stator air gap — structural failure |
| F10.3 | Wireless power + BLE data | E-03 | Power transfer ≤20W, motors need 400W peak. Latency violates S-06 (≤30ms) |

---

## Morphological Matrix — 16 Rows

### Legend
- **[Effect | Geometry | Material]** per 3-Component Rule
- **Q** = Quality (1-4): CSR target satisfaction. **R** = Risk (1-4): maturity. **DSO = Q×R** (1-16)
- ★ = recommended (DSO ≥12). [HYB] = hybrid WP. [N12] = shared with N12-RETROFIT-KIT.
- Columns sorted LEFT→RIGHT by DSO (highest first)

---

### ENERGY DOMAIN — Drive & Coupling

#### Row 1: F7.1 — Couple motor to azimuth ★★ SOLUTION-DETERMINING (DEEP)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-A1** ★ | **Spur pinion → V1 ring external teeth** | Involute gear mesh | External spur pinion Ø30-40mm, M2-3, 20° PA | C45 hardened pinion, V1 ring teeth (existing) | 4 | 4 | **16** | [N12] All motorized mounts use this. V1 ring teeth = ready. Backlash adjustable via center distance. |
| **WP-A5** | **Integrated slewing drive (replace V1 ring)** | Worm-in-ring (self-lock) | COTS SE-series Ø200-300mm, integrated motor+worm+ring | Steel housing, bronze worm wheel, hardened worm | 4 | 3 | **12** | COTS from Coresun/IMO/Liebherr. Single unit = motor+gearbox+bearing+ring. Fewest parts. BUT: replaces V1 ring → changes pedestal interface. Not N12-compatible. |
| WP-A2 | Worm pinion → V1 ring teeth | Worm-gear mesh | Worm tangential to ring, 90° offset | Steel worm, V1 ring teeth | 3 | 3 | 9 | Self-locking advantage. Harder to align tangentially to large ring. Lower efficiency (40-60%). |
| WP-A3 | Friction wheel on V1 ring OD | Hertzian friction | PU wheel Ø60mm, spring preload against ring | PU 90A wheel, spring steel preload arm | 2 | 3 | 6 | No gear mesh. Slip under rapid accel. Wears. Low torque capacity. |

**V5 vs N12:** N12 locked to WP-A1 (must keep V1 ring intact). V5 can choose WP-A5 (integrated drive, replace ring) because V5 is a new product.

#### Row 2: F7.4 — Azimuth speed reduction (gearbox)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-G1** ★ | **Worm gearbox (NMRV050, 1:80)** | Worm-gear reduction + self-lock | COTS NMRV050 flange mount, 1:60-1:100 | Aluminum housing, steel worm, bronze wheel | 4 | 4 | **16** | [N12] Self-locking = holds position without brake. 1:80 with 3000rpm motor → 37.5 rpm → 90°/s for Ø30mm pinion. COTS $100-200. |
| WP-G2 | Planetary gearbox (1:50-100) | Epicyclic reduction | COTS inline planetary Ø60mm | Steel gears, aluminum housing | 4 | 4 | **16** | Higher efficiency (95% vs worm 60%). NOT self-locking → needs brake or back-drive consideration. More expensive ($300-500). Used in SARP. |
| WP-G3 | Harmonic drive (1:100-200) | Flex-spline wave | COTS CSG-20-100 or equiv. | Special steel flex-spline | 4 | 3 | **12** | Zero backlash. Highest precision. BUT: $1-3K per unit. Overkill for V5. Used in CROWS II. |
| WP-G4 | Integrated in WP-A5 | Worm inside slewing drive | N/A (part of integrated unit) | N/A | 4 | 3 | **12** | Only valid if F7.1 = WP-A5. No separate gearbox needed. |

**Note:** If F7.1 = WP-A5 (integrated slewing drive), Row 2 = WP-G4 (built-in). Otherwise WP-G1 or WP-G2.

#### Row 3: F8.1 — Couple motor to elevation ★★ SOLUTION-DETERMINING (DEEP)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-E1** ★ | **Motor → V1 worm input shaft (coupling)** | Jaw/belt coupling to existing worm | Jaw coupling (Ø25-30mm) or GT3 timing belt to worm shaft stub | Al jaw + PU spider, or GT3 belt + pulleys | 4 | 3 | **12** | [N12] TRIZ #24 Intermediary. Uses V1's OWN worm as reducer. Elegant. V5: can REDESIGN worm housing to ensure shaft extends. N12: depends on existing shaft. |
| **WP-E2** | **Sector gear on elevation trunnion** | Gear mesh (pinion → sector arc) | Clamp-on or bolted sector (120° arc) on trunnion | Steel sector, bolts/clamp to trunnion | 3 | 3 | **9** | [N12] Same principle as azimuth but limited arc. V5: can bolt sector (N12: must clamp). Requires separate gearbox. |
| **WP-E4** | **Linear actuator (ball screw)** | Screw-driven linear→rotary | COTS actuator 12-24V, 200-500mm stroke, clevis mount | Steel tube, ball screw, DC/BLDC internal motor | 3 | 4 | **12** | [N12] Structure δ. Self-locking (screw). Proven in antenna/solar positioners. Requires 2 mounting points (pedestal bracket + el arm). Range limited by stroke. |
| **WP-E5** | **Redesigned worm drive (motor-integrated)** | Motor + worm in new housing replacing V1 handwheel | Custom housing: motor flange → worm → V1 worm wheel interface | Steel worm, bronze wheel, Al housing | 4 | 2 | **8** | V5-only. Clean integration — motor IS the worm drive. BUT: custom housing design + manufacture (NRE). Not N12-compatible. |
| WP-E3 | Friction roller on elevation arc | Roller friction | Spring-loaded PU roller on gun cradle curve | PU 90A roller Ø50mm | 2 | 3 | 6 | [N12] Slip under weapon weight + recoil. Limited torque. Marginal. |

**V5 advantage over N12:** V5 can redesign V1 worm housing (WP-E5) or bolt sector gear (WP-E2) — options N12 doesn't have. WP-E1 is strongest IF V5 designs the shaft extension into the new worm housing.

#### Row 4: F8.4 — Elevation speed reduction (CONDITIONAL)

| Condition | Gearbox Needed? | WP |
|-----------|:--------------:|-----|
| F8.1 = WP-E1 (worm shaft) | **NO** — V1 worm IS the reducer (typically 1:40-1:80) | V1 worm gear (existing) |
| F8.1 = WP-E2 (sector gear) | **YES** — need gearbox between motor and pinion | WP-G1 (worm) or WP-G2 (planetary) — same as Row 2 |
| F8.1 = WP-E4 (linear actuator) | **NO** — screw pitch IS the reducer (built into actuator) | Integrated in actuator |
| F8.1 = WP-E5 (redesigned worm) | **NO** — worm IS the reducer (designed into housing) | Custom worm (designed in) |

**Row 4 only generates new WP selection when F8.1 = WP-E2.** Otherwise absorbed by F8.1 WP choice.

---

### MATERIAL/STRUCTURAL DOMAIN — Mounting & Isolation

#### Row 5: F7.2 — Mount azimuth motor to pedestal (V5: PERMANENT)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-MA1** ★ | **Welded bracket on pedestal** | Fusion bond | Steel bracket welded to V1 pedestal OD, motor flange bolted to bracket | S355 steel bracket, AWS D1.1 weld | 4 | 4 | **16** | Strongest. Permanent. Zero loosening under recoil. WX has welding capability (V1 production). |
| **WP-MA2** | **Bolted bracket with through-bolts** | Friction grip + mechanical interlock | Bracket bolted through V1 pedestal wall (2-4 holes) | Al 6061-T6 or S355 bracket, SS316 bolts | 4 | 4 | **16** | Strong. Removable if needed. Requires drilling V1 pedestal (P-05 WISH allows). |
| WP-MA3 | Split-ring clamp (N12 approach) | Friction grip | 2-piece split ring on pedestal OD | Al 6061-T6 + EPDM liner | 3 | 4 | **12** | [N12] Removable, no V1 modification. But: can slip under sustained recoil if torque loosens. Adequate for N12 (lower duty), marginal for V5 (permanent). |
| WP-MA4 | Integrated in WP-A5 | N/A — motor inside slewing drive | N/A | N/A | 4 | 3 | **12** | Only if F7.1 = WP-A5. No separate bracket needed — motor is inside ring unit. |

**V5 vs N12:** N12 must use WP-MA3 (clamp, no modification). V5 can weld or bolt (WP-MA1/MA2) for permanent strength.

#### Row 6: F8.2 — Mount elevation motor to structure

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-ME1** ★ | **Bolted bracket on elevation frame** | Friction + mechanical interlock | L-bracket bolted to V1 elevation housing (2-3 bolts through existing or new holes) | S355 or Al 6061-T6 | 4 | 4 | **16** | V5: allowed to modify V1. Strongest for permanent mount. Bracket CNC'd by WX. |
| WP-ME2 | Welded bracket on elevation arm | Fusion bond | Steel bracket welded to elevation arm | S355, AWS D1.1 | 3 | 3 | **9** | Strong but tricky — welding on elevation arm may distort alignment. Heat-affected zone near bearing surfaces. |
| WP-ME3 | U-bolt saddle clamp (N12 approach) | Friction grip | 2× U-bolts + saddle plate | SS316 U-bolts + Al saddle + EPDM | 3 | 4 | **12** | [N12] Removable. Adequate for lower loads. V5: acceptable if bolted option isn't feasible. |
| WP-ME4 | Integrated in WP-E5 | N/A — motor housing replaces V1 handwheel housing | N/A | N/A | 4 | 2 | **8** | Only if F8.1 = WP-E5. Custom housing IS the mount. |

#### Row 7: F7.3 + F8.3 — Recoil isolation (both axes, same WP)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-ISO1** ★ | **Elastomer bushing (4× per motor)** | Viscoelastic damping | Cylindrical Ø20×30mm, 4 per bracket, bolt-through | EPDM 60 Shore A | 4 | 4 | **16** | [N12] RE Pattern 3. Proven approach. ≥40% attenuation at 50 kN (TG-2 bench validates). Low freq rigid, high freq compliant. |
| WP-ISO2 | Wire rope isolator | Steel wire friction damping | 4× wire rope mounts, M8 bolt | SS wire rope in Al frame | 3 | 3 | **9** | Higher isolation. $20-40 each. Overkill for V5 force levels. |
| WP-ISO3 | Integrated in WP-A5 housing | Internal damping in slewing drive | Elastomer ring between worm wheel and output flange | Varies by manufacturer | 3 | 2 | **6** | Only if F7.1 = WP-A5. Most COTS slewing drives don't have shock isolation — may need custom. |

---

### SIGNAL/CONTROL DOMAIN

#### Row 8: F9.1 — Clutch disengage (motor↔manual) ★ SOLUTION-DETERMINING

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-C1** ★ | **EM clutch NC (normally closed)** | Electromagnetic disc friction | 24V, 5-15 N·m, inline between motor output and gearbox input | Steel plates + friction lining + EM coil | 4 | 4 | **16** | [N12] SC-V5-1 LOCKS this choice. NC = engaged under power, releases on power loss → auto-manual. UNIQUE to WX. Residual drag ≤0.1 N·m released. COTS $50-100. |
| WP-C2 | Overrunning clutch (sprag) | Sprag roller overrun | Inline sprag bearing | Hardened steel rollers | 2 | 3 | **6** | Motor drives one direction; manual overrides by overpowering. BUT: bidirectional = 2 sprags + switch = complex. |
| WP-C3 | Dog clutch (sliding sleeve) | Mechanical interlock | Solenoid-actuated sliding sleeve | Steel dogs + sleeve | 2 | 3 | **6** | Zero drag disengaged. BUT: requires alignment, can't engage under load, NOT fail-safe (needs power to engage). Violates SC-V5-1. |

**SC-V5-1 effectively eliminates WP-C2 and WP-C3 as primary.** WP-C1 is the only WP that satisfies "auto-disengage on power loss."

#### Row 9: F9.2 — Fault detection → safe state

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-FD1** ★ | **Triple watchdog (overcurrent + overspeed + heartbeat)** | Threshold detection | STM32 ADC + timer + IWDG | On-chip | 4 | 4 | **16** | [N12] Standard industrial servo safety. HW E-stop relay separate from SW. |
| WP-FD2 | Dedicated safety PLC (SIL2) | Certified safety controller | Separate safety module | Safety PLC | 3 | 4 | **12** | SIL2 certified. +$200-500. Overkill for non-autonomous weapon. |

#### Row 10: F9.3 — Mode status indication

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-MS1** ★ | **LED (green/red) + piezo beep** | Optical + acoustic | LED on joystick + buzzer in controller | Standard LED + piezo | 4 | 4 | **16** | [N12] Simple, proven, daylight visible. Beep for eyes-off confirmation. |
| WP-MS2 | OLED display on joystick | Electroluminescent | 0.96" OLED, mode + angle + fault | SSD1306 OLED | 3 | 3 | **9** | More info. Poor sunlight readability. Fragile. Over-engineering. |

#### Row 11: F10.1 — Operator command interface

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-JS1** ★ | **2-axis analog joystick (industrial, IP65)** | Potentiometric sensing | 2-axis proportional, spring return, speed toggle, 10m cable | Al housing + rubber boot + metal gimbal | 4 | 4 | **16** | [N12] RE confirmed. Industrial, ruggedized, proportional. PC-06 commonality. |
| WP-JS2 | Thumb joystick on handgrip | Miniature joystick | Integrated into weapon grip area | Plastic + metal gimbal | 3 | 2 | **6** | Space constrained. Custom design. IP65 harder. |
| WP-JS3 | Gamepad-style controller | Dual thumbstick | Modified game controller in ruggedized case | Plastic + rubber | 2 | 2 | **4** | Familiar to young operators. NOT ruggedized. Not IP65. Novelty only. |

#### Row 12: F10.2 — Motor control architecture

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-SC1** ★ | **STM32 master + 2× BLDC servo drives** | Closed-loop PID | STM32F446 board + 2× BLDC drives + 2× encoders in IP65 box | PCB + Al enclosure 300×200×150mm | 4 | 4 | **16** | [N12] Standard. Independent axis control. STM32 handles safety + data + comms. Modular SW (IX-01). PC-04 commonality. |
| WP-SC2 | Standalone servo drives (no master) | Drive-level control | 2× integrated drives, analog joystick input | Commercial drives | 3 | 4 | **12** | Simpler. No STM32 needed. BUT: no centralized safety, no data port, no ICDM platform. Violates IX-01, S-04. |
| WP-SC3 | PLC-based control | Industrial PLC | Compact PLC + servo modules | PLC hardware | 3 | 3 | **9** | Industrial standard. Higher cost. Overkill for 2-axis system. |

#### Row 13: F10.3 — Power/signal through 360° rotation

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-CR1** ★ | **Cable spiral (service loop)** | Cable flex compliance | 1.5-turn loop, 6+2 conductor PUR cable, strain relief | PUR jacket, tinned copper, SS spring guard | 4 | 4 | **16** | [N12] Simple, cheap ($20-50). ±540° (1.5 turns). Fatigue life ~100K cycles = adequate for V5 duty. |
| **WP-CR2** | **Slip ring (capsule)** | Brush/ring sliding contact | 6-circuit + 2-power capsule Ø22mm, concentric with az axis | Gold-plated rings + fiber brush | 4 | 3 | **12** | [N12] Unlimited rotation. Higher reliability at high duty. +$50-150. Signal noise possible (filter needed). Needs access to az center. |
| WP-CR4 | Mercury-wetted slip ring | Liquid contact | 8-circuit mercury capsule | Mercury + SS contacts | 4 | 2 | **8** | Zero noise, unlimited rotation. BUT: mercury = hazmat, temperature limited, expensive ($200-500). Environmental concern. |

---

### ICDM PLATFORM DOMAIN (V5-only — NOT in N12)

#### Row 14: F11.1 + F11.2 — Position encoding + data interface

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-PD1** ★ | **Incremental encoder (4096 CPR) + STM32 Modbus/CAN** | Optical/magnetic incremental + digital protocol | 2× encoders on motor shafts + STM32 Modbus RTU + CANopen DS301 | Standard encoder + existing STM32 | 4 | 4 | **16** | Encoder = $20-50 each. Resolution ±0.09° (exceeds K-09 ±0.5°). Requires homing on power-up (FD-02). |
| WP-PD2 | Absolute encoder (SSI/BiSS) | Optical/magnetic absolute | 2× absolute encoders + STM32 SSI interface | Absolute encoder ($100-200 each) | 4 | 3 | **12** | No homing needed — knows position at power-on. Higher cost. More complex interface. |
| WP-PD3 | Resolver | Electromagnetic angular | 2× resolvers, R/D converter on STM32 | Resolver ($50-150 each) | 3 | 3 | **9** | Military standard. EMI resistant. More complex signal processing. |

#### Row 15: F11.3 — Data port write protection (security)

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-DS1** ★ | **Physical key switch (2-position)** | Mechanical contact | Key switch on controller box: READ-ONLY / READ-WRITE | Standard 2-pos key switch | 4 | 4 | **16** | FD-06 specified this. Simple, tamper-evident. No software bypass. IEC 62443 compliant. |
| WP-DS2 | Software authentication | Digital credential | Password/certificate over Modbus/CAN | Software-only | 3 | 3 | **9** | More flexible. BUT: software can be bypassed. Requires key management. |
| WP-DS3 | Hardware DIP switch (inside enclosure) | Mechanical contact | DIP switch on PCB, accessible only when enclosure opened | Standard DIP switch | 3 | 4 | **12** | Requires breaking IP65 seal to change. Good security. Inconvenient for authorized access. |

#### Row 16: F12.1 + F12.2 — UPS battery + operational logging

| WP | Working Principle | Effect | Geometry | Material | Q | R | DSO | Notes |
|----|------------------|--------|----------|----------|:-:|:-:|:---:|-------|
| **WP-UP1** ★ | **LiFePO4 12V 10Ah + SD card logging** | Electrochemical storage + flash memory | 1S4P LiFePO4 pack in controller box + micro SD slot on PCB | LiFePO4 cells + micro SD | 4 | 4 | **16** | LiFePO4 = wide temp (-20°C to +60°C), safe chemistry, 2000+ cycles. SD card = removable, standard, download via card reader. Cost: $30-50 battery + $2 SD slot. |
| WP-UP2 | Lead-acid SLA + internal flash | Electrochemical + NOR flash | 12V 7Ah SLA brick + 8MB flash on STM32 | Lead-acid + on-chip flash | 3 | 4 | **12** | Cheaper battery ($15-25). Heavier (2.3 kg vs 1.2 kg). Internal flash = not removable, download via serial port only. Temperature range narrower. |
| WP-UP3 | Supercapacitor + USB drive | Electrostatic + flash memory | 48V 10F supercap module + USB-A port on enclosure | Maxwell/Eaton supercap + USB flash drive | 3 | 2 | **6** | Fast charge (30s). BUT: limited runtime (~30s at idle, not 10 min). USB drive = field-removable but environmental risk (dust, water). |

---

## DSO Summary — Top WPs by Row

| Row | SF | ★ Top WP | DSO | 2nd WP | DSO | 3rd WP | DSO |
|-----|-----|---------|:---:|--------|:---:|--------|:---:|
| 1 | F7.1 Az coupling | WP-A1 (pinion) | 16 | WP-A5 (integrated drive) | 12 | WP-A2 (worm) | 9 |
| 2 | F7.4 Az gearbox | WP-G1 (worm) | 16 | WP-G2 (planetary) | 16 | WP-G3 (harmonic) | 12 |
| 3 | F8.1 El coupling | WP-E1 (worm shaft) | 12 | WP-E4 (linear act.) | 12 | WP-E2 (sector) | 9 |
| 4 | F8.4 El gearbox | (conditional on F8.1) | — | — | — | — | — |
| 5 | F7.2 Az mount | WP-MA1 (weld) | 16 | WP-MA2 (bolt) | 16 | WP-MA3 (clamp) | 12 |
| 6 | F8.2 El mount | WP-ME1 (bolt) | 16 | WP-ME3 (U-bolt) | 12 | WP-ME2 (weld) | 9 |
| 7 | Recoil isolation | WP-ISO1 (elastomer) | 16 | WP-ISO2 (wire rope) | 9 | — | — |
| 8 | F9.1 Clutch | WP-C1 (EM NC) | 16 | — (locked by SC) | — | — | — |
| 9 | F9.2 Fault detect | WP-FD1 (triple WD) | 16 | WP-FD2 (safety PLC) | 12 | — | — |
| 10 | F9.3 Mode status | WP-MS1 (LED+beep) | 16 | WP-MS2 (OLED) | 9 | — | — |
| 11 | F10.1 Joystick | WP-JS1 (industrial) | 16 | WP-JS2 (thumb) | 6 | — | — |
| 12 | F10.2 Controller | WP-SC1 (STM32+drives) | 16 | WP-SC2 (standalone) | 12 | — | — |
| 13 | F10.3 Rotation pass | WP-CR1 (cable spiral) | 16 | WP-CR2 (slip ring) | 12 | — | — |
| 14 | F11 Position data | WP-PD1 (incr+Modbus) | 16 | WP-PD2 (absolute) | 12 | WP-PD3 (resolver) | 9 |
| 15 | F11.3 Security | WP-DS1 (key switch) | 16 | WP-DS3 (DIP switch) | 12 | WP-DS2 (software) | 9 |
| 16 | F12 UPS+logging | WP-UP1 (LiFePO4+SD) | 16 | WP-UP2 (SLA+flash) | 12 | WP-UP3 (supercap) | 6 |

**Left-path concept (all DSO-16 WPs):** A1+G1+E1+MA1+ME1+ISO1+C1+FD1+MS1+JS1+SC1+CR1+PD1+DS1+UP1 = maximum baseline.

---

## Compatibility Check — Critical WP Pairs

| WP-X | WP-Y | Compatible? | Issue | Resolution |
|------|------|:----------:|-------|-----------|
| WP-A1 (pinion) | WP-MA1/MA2 (weld/bolt bracket) | ✅ | Bracket must position pinion at correct center distance | Adjustable via slotted holes or shim |
| WP-A5 (integrated drive) | WP-MA1/MA2 | ❌ | Integrated drive IS the bearing — replaces V1 ring. No separate bracket. | Use WP-MA4 (integrated) |
| WP-A5 (integrated drive) | WP-CR1 (cable spiral) | ⚠️ | Cable routing path changes — spiral must clear integrated unit | Check OD of integrated unit vs space envelope |
| WP-E1 (worm shaft) | WP-ME1 (bolted bracket) | ✅ | Motor bracket extends from el housing to worm shaft stub | Bracket integral with motor mount |
| WP-E4 (linear actuator) | WP-C1 (EM clutch) | ⚠️ | Clutch in linear system = rotary clutch before screw (adds length) | Clutch between motor and screw input shaft |
| WP-E4 (linear actuator) | WP-ME1 (bracket) | ⚠️ | Actuator needs 2 pivot points (pedestal + el arm) | 2 brackets: 1 on pedestal (clevis), 1 on el arm (pin) |
| WP-E4 (linear actuator) | K-02 (-15°/+85°) | ⚠️ | 100° arc needs stroke ≥ R×sin(100°) depending on geometry | Verify actuator stroke ≥ 300mm for typical moment arm |
| WP-A5 (integrated drive) | PC-01 to PC-06 | ⚠️ | Integrated drive ≠ N12 motor module → breaks commonality | Accept trade-off: fewer parts vs less N12 sharing |
| WP-G2 (planetary) | WP-C1 (EM clutch) | ⚠️ | Planetary is NOT self-locking → mount drifts when motor off + clutch engaged | Need brake or accept drift. Self-locking worm avoids this. |
| WP-SC1 (STM32) | All ICDM rows (14-16) | ✅ | STM32 handles Modbus/CAN, SD card, key switch GPIO | Single controller for all ICDM functions |

---

## Concept Variant Combinations

### Concept A: "PINION-WORM" (α Symmetric, max N12 commonality) ★ LEFT-PATH

| Row | SF | WP Selected | Rationale |
|-----|-----|------------|-----------|
| 1 | F7.1 | **WP-A1** Spur pinion → V1 ring teeth | Proven, all RCWS use this |
| 2 | F7.4 | **WP-G1** Worm gearbox (NMRV050, 1:80) | Self-locking, COTS, [N12] |
| 3 | F8.1 | **WP-E1** Motor → V1 worm shaft (coupling) | Uses V1 worm as reducer. V5 designs shaft extension. |
| 4 | F8.4 | V1 worm (existing) | No separate gearbox needed |
| 5 | F7.2 | **WP-MA1** Welded bracket | Permanent, strongest |
| 6 | F8.2 | **WP-ME1** Bolted bracket | Strong, V5 can modify V1 |
| 7 | Isolation | **WP-ISO1** Elastomer bushing | Proven, cheap |
| 8 | F9.1 | **WP-C1** EM clutch NC | SC-V5-1 mandatory |
| 9 | F9.2 | **WP-FD1** Triple watchdog | Standard |
| 10 | F9.3 | **WP-MS1** LED + beep | Simple |
| 11 | F10.1 | **WP-JS1** Industrial joystick | Ruggedized, [N12] |
| 12 | F10.2 | **WP-SC1** STM32 + 2× drives | Standard, [N12] |
| 13 | F10.3 | **WP-CR1** Cable spiral | Simple, cheap |
| 14 | F11 | **WP-PD1** Incremental + Modbus/CAN | Standard, cheap |
| 15 | F11.3 | **WP-DS1** Key switch | FD-06 specified |
| 16 | F12 | **WP-UP1** LiFePO4 + SD card | Best temp range, removable log |

**Architecture:** Both axes = motor → worm gearbox → EM clutch → coupling to V1. Az = pinion on ring. El = jaw coupling to V1 worm shaft. Identical motor modules (PC-01 to PC-06 fully satisfied).

**Key advantage:** Maximum commonality with N12. V1 worm = proven reducer for elevation. Fewest new parts. Lowest BOM (~$5-7K).

**Key risk:** V5 must design worm shaft extension into new housing. If V1 worm ratio is wrong for motor speed → may need gearbox before coupling.

---

### Concept B: "PINION-SECTOR" (α Symmetric, same coupling principle both axes)

| Row | SF | WP Selected | Difference from A |
|-----|-----|------------|-------------------|
| 1 | F7.1 | **WP-A1** Spur pinion → ring teeth | Same |
| 2 | F7.4 | **WP-G1** Worm gearbox | Same |
| 3 | F8.1 | **WP-E2** Sector gear on trunnion | **DIFFERENT** — pinion on sector (like az) |
| 4 | F8.4 | **WP-G1** Worm gearbox (same as az) | **ADDED** — sector needs separate gearbox |
| 5 | F7.2 | **WP-MA2** Bolted bracket | Slightly different — bolt preferred for adjustability |
| 6 | F8.2 | **WP-ME1** Bolted bracket + sector clamp | Bracket holds motor + sector gear |
| 7-16 | | Same as Concept A | — |

**Architecture:** Both axes use pinion → gear teeth. Az = pinion on ring (existing teeth). El = pinion on sector gear (bolted to trunnion). Both axes share identical motor+gearbox+clutch+pinion assemblies.

**Key advantage:** MAXIMUM parts commonality. Identical motor module for both axes (not just same motor — same gearbox, same pinion). Spares = 1 SKU covers everything.

**Key risk:** Sector gear must survive 50 kN recoil on trunnion. Limited arc (120°) must cover -15° to +85° (100° needed). Sector adds weight/bulk to elevation area.

---

### Concept C: "PINION + LINEAR ACTUATOR" (δ Asymmetric)

| Row | SF | WP Selected | Difference from A |
|-----|-----|------------|-------------------|
| 1 | F7.1 | **WP-A1** Spur pinion → ring teeth | Same |
| 2 | F7.4 | **WP-G1** Worm gearbox | Same |
| 3 | F8.1 | **WP-E4** Linear actuator (ball screw) | **DIFFERENT** — linear push/pull |
| 4 | F8.4 | Integrated in actuator | Screw pitch = reducer |
| 5 | F7.2 | **WP-MA1** Welded bracket | Same |
| 6 | F8.2 | **2× brackets** (pedestal clevis + el arm pin) | **DIFFERENT** — 2 mounting points |
| 8 | F9.1 | **WP-C1** Az EM clutch + **actuator clutch** | Clutch before screw in actuator |
| 7, 9-16 | | Same as Concept A | — |

**Architecture:** Az = rotary motor on ring (same as A). El = COTS linear actuator between pedestal bracket and elevation arm. Different mechanisms per axis.

**Key advantage:** Independent of V1 elevation mechanism. Linear actuator = self-locking (ball screw). Proven in antenna positioners, solar trackers. Works regardless of V1 worm configuration.

**Key risk:** Less commonality (az ≠ el motors). Actuator stroke limits el range — verify. Clutch in linear path is non-standard. 2 mounting points for el = more complex installation.

---

### Concept D: "INTEGRATED SLEWING DRIVE" (α Symmetric, clean-sheet az)

| Row | SF | WP Selected | Difference from A |
|-----|-----|------------|-------------------|
| 1 | F7.1 | **WP-A5** Integrated slewing drive | **DIFFERENT** — replaces V1 ring entirely |
| 2 | F7.4 | **WP-G4** Built into slewing drive | No separate gearbox |
| 3 | F8.1 | **WP-E1** Motor → worm shaft | Same concept as A for elevation |
| 5 | F7.2 | **WP-MA4** Integrated (motor inside ring) | No separate bracket |
| 7 | Isolation | ⚠️ **WP-ISO3** (may need custom) | Integrated drive may not have recoil isolation |
| 13 | F10.3 | **WP-CR2** Slip ring (integrated in unit) | Some slewing drives include slip ring |
| Others | | Same as Concept A | — |

**Architecture:** Azimuth = single COTS integrated slewing drive (motor+worm+ring+bearing all-in-one). Replaces V1 slewing ring. Elevation = same as Concept A.

**Key advantage:** Fewest discrete parts for azimuth. Single unit from catalog. Self-locking worm built in. Some units include slip ring. COTS reliability data available.

**Key risk:** Replaces V1 ring → changes pedestal interface (V1 turntable bolt pattern changes). NOT compatible with N12 (N12 must keep V1 ring). Recoil isolation uncertain — COTS slewing drives not designed for 50 kN weapon recoil. ICDM commonality (PC-01 to PC-06) partially violated.

---

## ICDM Platform Commonality Check per Concept

| ICDM Req | A (Pinion-Worm) | B (Pinion-Sector) | C (Pinion+LinAct) | D (Integrated) |
|----------|:---------------:|:-----------------:|:-----------------:|:--------------:|
| PC-01 Motor commonality V5↔N12 | ✅ Same | ✅ Same | ⚠️ Az same, el different | ❌ Az different |
| PC-02 Gearbox commonality | ✅ Same | ✅ Same (both axes!) | ⚠️ Az same, el N/A | ❌ Az built-in |
| PC-03 EM clutch commonality | ✅ Same | ✅ Same | ⚠️ Az same, el modified | ✅ Same (el) |
| PC-04 Controller commonality | ✅ Same | ✅ Same | ✅ Same | ✅ Same |
| PC-05 Spares commonality | ✅ High | ✅★ Highest | ⚠️ Medium | ❌ Low |
| PC-06 Joystick commonality | ✅ Same | ✅ Same | ✅ Same | ✅ Same |
| **PC Score** | **6/6** | **6/6** | **3.5/6** | **2.5/6** |

---

## CEO Creative Input Section

**CEO: Vui lòng xem xét và bổ sung:**

1. **F7.1 — Azimuth coupling:** V5 sử dụng V1 ring teeth (WP-A1) hay integrated slewing drive (WP-A5)?
   - WP-A1: proven, N12 compatible, keep V1 structure
   - WP-A5: fewer parts, clean design, BUT changes V1 base, breaks N12 commonality

2. **F8.1 — Elevation coupling:** WP-E1 (worm shaft coupling) hay WP-E4 (linear actuator) hay WP-E2 (sector gear)?
   - E1: simplest IF V5 designs shaft extension
   - E2: maximum symmetry with azimuth
   - E4: independent of V1 worm, proven in other domains

3. **WP bổ sung:** Có working principle nào từ kinh nghiệm WX chưa được liệt kê?

4. **Concept preference sơ bộ:** CEO nghiêng về concept nào?
   - A (Pinion-Worm): simplest, max N12 commonality, lowest BOM
   - B (Pinion-Sector): max parts commonality (identical modules both axes)
   - C (Pinion+Linear): robust fallback, independent of V1 el mechanism
   - D (Integrated Drive): fewest parts, clean, but changes V1 base

5. **Có nên giữ Concept D không?** D breaks N12 commonality (PC score 2.5/6) and requires 50 kN recoil validation of COTS slewing drive (high risk). Recommend: keep D only if CEO sees strategic value in clean-sheet V5.

---

*BB Morphological Matrix | 16 rows × 52 WPs | 3 eliminated DEMAND | 4 concepts (A/B/C/D) | helix-concept-generate v3.1 (ICDM) | 2026-04-11*
