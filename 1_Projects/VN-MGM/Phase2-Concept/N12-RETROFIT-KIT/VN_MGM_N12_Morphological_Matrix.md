---
created: 2026-04-11
type: morphological-matrix
block: BB
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: N12-RETROFIT-KIT
design_type: ADAPTIVE
status: COMPLETE — CEO creative input requested
wp_count: 38 (across 12 SFs)
eliminated: 4 (DEMAND filter)
feeds_to:
  - VN_MGM_N12_Concept_Variants.md
  - VN_MGM_N12_Pugh_Screening.md (BC)
---

# BB Morphological Matrix — VN-MGM N12-RETROFIT-KIT

## Search Method Summary

| Method | Applied To | Yield |
|--------|-----------|:-----:|
| M1 Literature/standards | All SFs — IEC 61800, MIL-DTL connectors, slip ring catalogs | 12 WPs |
| M3 Known technical systems | V5 Reverse Engineering (8 competitors × 12 SFs) | 14 WPs |
| M5 Physical effects catalogue | F7.1, F8.1, F9.1, F10.3 — Koller/Roth catalogue routing | 6 WPs |
| M7 TRIZ principles | F8.1 (#24 Intermediary), F7.1 (#15 Dynamicity) | 4 WPs |
| M4 Analogies | Telescope motorization, antenna positioners, CNC rotary tables | 2 WPs |

---

## Pre-Morpho DEMAND Filter

Before DSO scoring, each WP checked against DEMAND requirements. Eliminated WPs:

| SF | WP | Eliminated By | Violation |
|----|-----|:------------:|-----------|
| F7.1 | Direct drive (frameless motor around pedestal) | SC-N12-1 | Requires V1 removal from deck to install motor ring |
| F8.1 | Internal worm replacement (motor replaces handwheel internally) | SC-N12-4 | Requires opening V1 worm housing → modifying V1 |
| F8.1 | Sector gear welded to elevation arm | SC-N12-4 | Welding on V1 |
| F10.3 | Through-bore wiring (cable through pedestal center) | SC-N12-1 | Requires V1 removal + pedestal drilling |

**4 WPs eliminated. 38 WPs proceed to matrix.**

---

## Morphological Matrix — 12 SFs × 2-5 WPs

### Structure α (Baseline — independent az + el modules)

Legend: **[Effect | Geometry | Material]** per 3-Component Rule. ★ = recommended. [HYB] = hybrid WP.

---

### ENERGY DOMAIN — Drive & Coupling

#### F7.1 — Couple motor torque to azimuth axis ★ SOLUTION-DETERMINING #1

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-A1** ★ | **Spur pinion → slewing ring external teeth** | Gear mesh (involute) | External spur pinion Ø30-40mm, 20° PA | Steel C45 hardened (pinion), existing V1 ring teeth | **14** | CEO confirmed. V1 has external teeth. Proven in all motorized mounts. |
| WP-A2 | Worm pinion → slewing ring | Worm-gear mesh (self-locking) | Worm on motor shaft → engages ring teeth | Steel/bronze | 10 | Self-locking advantage but requires tangential alignment to ring |
| WP-A3 | Rubber friction wheel → V1 pedestal OD | Friction (Hertzian contact) | Polyurethane wheel Ø60mm, spring preload | PU 90A wheel, spring steel preload | 7 | No gear mesh needed. Slip risk under rapid acceleration. Wears. |

**Selected for concept development: WP-A1 (primary), WP-A3 (alternative for Structure δ)**

#### F8.1 — Couple motor torque to elevation axis ★ SOLUTION-DETERMINING #2 — KEY OPEN QUESTION

| WP          | Working Principle                                         | Effect                                                | Geometry                                                                     | Material                                        |  DSO   | Notes                                                                                                                                                                        |
| ----------- | --------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------- | :----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **WP-E1** ★ | **Motor drives V1 worm input shaft (handwheel coupling)** | Gear mesh or flexible coupling to existing worm input | Jaw coupling or timing belt from motor to worm shaft extension               | Aluminum jaw + polyurethane spider, or GT2 belt | **15** | TRIZ #24 Intermediary. Uses V1's OWN worm gear as reducer. Motor replaces handwheel effort. V1 worm gear = proven. Requires worm shaft to extend past housing (CEO: verify). |
| WP-E2       | External sector gear clamped to elevation arm             | Gear mesh (pinion → sector)                           | Clamp-on sector gear (120° arc) wraps around elevation trunnion or arm       | Steel sector, split-ring clamp, SS316 bolts     |   11   | Like azimuth approach but for elevation. Requires accessible cylindrical surface on elevation trunnion.                                                                      |
| WP-E3       | Friction roller on elevation arc                          | Friction (roller contact)                             | Spring-loaded PU roller presses against gun cradle curved surface            | PU 90A roller Ø50mm, spring preload arm         |   8    | Simple, no gear. Slip risk under weapon weight + recoil. Limited torque capacity.                                                                                            |
| **WP-E4**   | **Linear actuator on elevation arm**                      | Screw-driven linear motion → rotary                   | Ball screw actuator, clevis mount between pedestal bracket and elevation arm | Steel actuator, aluminum clevis, SS pins        | **12** | [HYB] Converts linear→rotary. Self-locking (screw). Proven in antenna/solar positioners. Requires bracket on pedestal + pivot on elevation arm (both clamp-on).              |

**Selected for concept development: WP-E1 (primary), WP-E4 (alternative), WP-E2 (variant)**

#### F9.1 — Disengage motor from mount (clutch) ★ SOLUTION-DETERMINING #3

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-C1** ★ | **EM clutch NC (normally closed)** | Electromagnetic disc friction | Disc clutch 24V, 5-15 N·m capacity, inline between motor and gearbox | Steel plates + friction lining + electromagnet coil | **15** | UNIQUE to WX (no competitor has). NC = engaged under power, releases on power loss. Satisfies N-E04 (zero power manual) and N-SF03. Residual drag ≤0.1 N·m when released. |
| WP-C2 | One-way bearing (overrunning clutch) | Sprag/roller overrun | Inline sprag bearing, allows motor to drive but mount to freewheel | Hardened steel rollers + races | 9 | Motor drives in one direction; manual overrides by simply overpowering. No active control needed. BUT: cannot motor in both directions freely. Complex for bidirectional. |
| WP-C3 | Sliding gear engagement (dog clutch) | Mechanical interlock | Sliding sleeve actuated by lever or solenoid | Steel dogs + SS316 sleeve | 8 | Simple, zero drag when disengaged. BUT: requires alignment to engage, can't engage under load. Not fail-safe (needs active engagement). |

**Selected for concept development: WP-C1 (strongly preferred), WP-C2 (backup consideration)**

---

### MATERIAL/STRUCTURAL DOMAIN — Clamping & Isolation

#### F7.2 — Clamp azimuth motor module to V1 pedestal

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-CLA1** ★ | **Split-ring clamp with EPDM lining** | Friction grip (radial compression) | 2-piece split ring, bolted, fits V1 pedestal OD ±5mm | Al 6061-T6 clamp + EPDM rubber lining 3mm | **14** | Standard industrial practice. Adjustable via bolt torque. Rubber protects V1 coating (SC-N12-4). Torque wrench included in kit (SC-N12-5 relaxed). |
| WP-CLA2 | Band clamp (hose-clamp style) | Friction grip (circumferential tension) | SS band + worm-drive screw, wide band (50mm) | SS316 band + neoprene liner | 10 | Simpler, lighter. Less rigid than split-ring. May require 2 bands for stability. |

#### F8.2 — Clamp elevation motor module to V1 elevation arm

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-CLE1** ★ | **U-bolt saddle clamp** | Friction grip (clamping on rectangular/round section) | 2× U-bolts + saddle plate, fits el arm cross-section | SS316 U-bolts + Al 6061 saddle + EPDM pad | **13** | Standard for pipe/beam clamping. Adjustable, removable, standard tools. |
| WP-CLE2 | Hinge clamp (quick-release) | Friction + mechanical latch | Hinged bracket with over-center latch | Al 6061-T6 + SS316 hinge pin | 11 | Faster install/remove. Slightly less rigid. More complex to manufacture. |

#### F7.3 / F8.3 — Isolate motor from recoil vibration (both axes — same WP)

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-ISO1** ★ | **Elastomer bushing (4× per motor)** | Viscoelastic damping | Cylindrical bushing Ø20×30mm, 4 per motor bracket | EPDM 60 Shore A (good for marine + heat) | **14** | V5 RE Pattern 3: "elastomer coupling protects precision components." Proven approach. |
| WP-ISO2 | Wire rope isolator | Friction + elastic (wire rope) | 4× wire rope mounts, M8 bolt-through | SS wire rope in aluminum frame | 11 | Higher isolation than rubber. More expensive ($20-40 each). Overkill for N12 forces. |

---

### SIGNAL/CONTROL DOMAIN

#### F9.2 — Detect fault condition → trigger safe state

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-FD1** ★ | **Triple watchdog (overcurrent + overspeed + heartbeat)** | Threshold-based analog/digital detection | STM32 internal ADC + timer + watchdog peripheral | On-chip (no additional hardware) | **14** | Standard industrial servo safety. Three independent checks. HW E-stop relay = separate from software. |
| WP-FD2 | Dedicated safety PLC (SIL2) | Certified safety controller | Separate safety controller monitors motor parameters | Safety PLC module + sensors | 12 | Higher safety integrity. SIL2 certified. BUT: +$200-500, overkill for N12 (not autonomous weapon). |

#### F9.3 — Signal mode status to operator

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-MS1** ★ | **LED (green=motor, red=manual) + piezo beep** | Optical + acoustic indication | LED on joystick housing + piezo buzzer in controller | Standard LED + piezo disc | **14** | Simple, proven, low cost. Beep = audible confirmation even when not looking at joystick. |
| WP-MS2 | OLED display on joystick | Electroluminescent display | 0.96" OLED shows mode + angle + fault code | SSD1306 OLED module | 9 | More information. But: sunlight readability poor, higher power, fragile. Over-engineering for mode indication. |

#### F10.1 — Accept operator command (joystick → speed setpoint)

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-JS1** ★ | **2-axis analog joystick (industrial, IP65)** | Potentiometric position sensing | Standard 2-axis proportional, 5% deadband, spring return | Aluminum housing + rubber boot + metal gimbal | **15** | V5 RE confirmed. Industrial grade, ruggedized, proportional speed control. 10m cable (N-ER02). |
| WP-JS2 | Thumb joystick on handgrip | Miniature joystick on weapon grip | Thumb-operated mini joystick integrated into V1 handle area | Plastic housing + metal gimbal | 10 | Closer to weapon grip. BUT: space constrained on V1 handle, custom design needed, IP65 harder. |

#### F10.2 — Execute motor speed control loop

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-SC1** ★ | **PID servo (STM32 + 2× servo drives)** | Closed-loop PID speed control | STM32F4 master + 2× BLDC servo drives + 2× incremental encoders | PCB in IP65 enclosure 200×150×100mm | **15** | V5 RE confirmed. Standard industrial architecture. Each axis independent. STM32 for safety logic + data output. |
| WP-SC2 | Standalone servo drives (no master) | Independent drive-level control | 2× integrated servo drives with analog joystick input | Commercial servo drives in enclosure | 11 | Simpler (no STM32 needed). BUT: no centralized safety logic, no data output, no future expandability. Dead end for ACH upgrade. |

#### F10.3 — Route power and signal through 360° rotation

| WP | Working Principle | Effect | Geometry | Material | DSO | Notes |
|----|------------------|--------|----------|----------|:---:|-------|
| **WP-CR1** ★ | **Cable spiral (service loop)** | Mechanical compliance (cable flex) | 1.5-turn service loop, 6-conductor + 2-power cable, strain relief | PUR-jacketed flex cable, SS spring guard | **13** | Simple, cheap, proven. Allows ±540° rotation (1.5 turns). Limited by cable fatigue life (~100K cycles). Adequate for N12 duty cycle. |
| WP-CR2 | Slip ring (electrical rotary joint) | Sliding contact (brush/ring) | 6-circuit capsule slip ring Ø22mm, concentric with azimuth axis | Gold-plated rings + fiber brush | 12 | Unlimited rotation. Higher reliability for high-duty cycle. BUT: +$50-150, slight signal noise, installation requires access to azimuth center. May conflict with V1 bearing center. |
| WP-CR3 | Wireless power + data (inductive + BLE) | Electromagnetic induction + radio | Inductive coil pair (power) + BLE module (data) | Ferrite cores + copper coils + nRF52 BLE | 5 | No mechanical contact. BUT: power transfer ≤20W (motors need 300W peak). Latency. Unreliable. **Eliminated by N-E02 (600W peak).** |

**WP-CR3 eliminated by DEMAND (power capacity insufficient).**

---

## DSO Summary — All WPs Ranked

| Rank | SF | WP | DSO Score | Status |
|------|----|----|:---------:|:------:|
| 1 | F8.1 | WP-E1 (worm shaft coupling) | 15 | ★ |
| 1 | F9.1 | WP-C1 (EM clutch NC) | 15 | ★ |
| 1 | F10.1 | WP-JS1 (industrial joystick) | 15 | ★ |
| 1 | F10.2 | WP-SC1 (PID servo STM32) | 15 | ★ |
| 5 | F7.1 | WP-A1 (spur pinion) | 14 | ★ |
| 5 | F7.2 | WP-CLA1 (split-ring clamp) | 14 | ★ |
| 5 | F7.3 | WP-ISO1 (elastomer bushing) | 14 | ★ |
| 5 | F9.2 | WP-FD1 (triple watchdog) | 14 | ★ |
| 5 | F9.3 | WP-MS1 (LED+beep) | 14 | ★ |
| 10 | F8.2 | WP-CLE1 (U-bolt saddle) | 13 | ★ |
| 10 | F10.3 | WP-CR1 (cable spiral) | 13 | ★ |
| 12 | F8.1 | WP-E4 (linear actuator) | 12 | Alt |
| 12 | F9.2 | WP-FD2 (safety PLC) | 12 | Alt |
| 12 | F10.3 | WP-CR2 (slip ring) | 12 | Alt |
| 15 | F8.1 | WP-E2 (sector gear clamp) | 11 | Var |
| 15 | F8.2 | WP-CLE2 (hinge clamp) | 11 | Var |
| 15 | F7.3 | WP-ISO2 (wire rope) | 11 | Var |
| 15 | F10.2 | WP-SC2 (standalone drives) | 11 | Var |
| 19 | F7.2 | WP-CLA2 (band clamp) | 10 | Var |
| 19 | F7.1 | WP-A2 (worm pinion) | 10 | Var |
| 21 | F9.1 | WP-C2 (overrunning clutch) | 9 | Var |
| 21 | F10.1 | WP-JS2 (thumb joystick) | 10 | Var |
| 23 | F9.3 | WP-MS2 (OLED) | 9 | Var |
| 24 | F8.1 | WP-E3 (friction roller) | 8 | Var |
| 25 | F9.1 | WP-C3 (dog clutch) | 8 | Var |
| 26 | F7.1 | WP-A3 (friction wheel) | 7 | Var |

---

## Compatibility Check — Key WP Pairs

| WP Pair | Compatible? | Issue | Resolution |
|---------|:----------:|-------|-----------|
| WP-A1 (spur pinion) × WP-CLA1 (split clamp) | ✅ | Clamp must position pinion at correct center distance from ring teeth | Adjustable center distance via slotted mounting holes |
| WP-E1 (worm shaft) × WP-CLE1 (U-bolt saddle) | ✅ | U-bolt on elevation arm, motor bracket extends to worm shaft | Motor bracket integral with clamp |
| WP-E4 (linear actuator) × WP-CLE1 (U-bolt saddle) | ⚠️ | Actuator needs pivot point on pedestal AND on elevation arm | Requires 2 clamp points — more complex installation |
| WP-C1 (EM clutch) × WP-E1 (worm shaft) | ✅ | Clutch inline between motor and worm coupling | Standard configuration |
| WP-C1 (EM clutch) × WP-E4 (linear actuator) | ⚠️ | EM clutch in linear actuator = non-standard. Need rotary clutch before screw. | Possible but adds length to actuator assembly |
| WP-CR1 (cable spiral) × WP-A1 (spur pinion) | ✅ | Cable spiral routes alongside pedestal, clear of gear mesh | Standard routing |
| WP-CR2 (slip ring) × WP-A1 (spur pinion) | ⚠️ | Slip ring must be concentric with azimuth axis. V1 bearing center may be occupied | Check V1 bearing geometry — may need offset slip ring |
| WP-SC1 (STM32) × WP-C1 (EM clutch) | ✅ | STM32 controls clutch via relay/MOSFET | Standard industrial control |
| WP-ISO1 (elastomer) × 50 kN recoil | ✅ | 4× Ø20mm EPDM bushings at 60 Shore A handle ~5 kN each in shear | Motor bracket sees reduced recoil through bushings |

---

## Concept Variant Combinations

### Concept A: "WORM DRIVE" (baseline — lowest risk) ★ RECOMMENDED

| SF | WP Selected | Rationale |
|----|------------|-----------|
| F7.1 | WP-A1 Spur pinion → ring teeth | CEO confirmed, proven |
| F7.2 | WP-CLA1 Split-ring clamp | Standard, adjustable |
| F7.3 | WP-ISO1 Elastomer bushing | Proven, cheap |
| **F8.1** | **WP-E1 Motor → worm shaft** | **Uses V1's own worm as reducer. Simplest.** |
| F8.2 | WP-CLE1 U-bolt saddle | Standard |
| F8.3 | WP-ISO1 Elastomer bushing | Same as az |
| F9.1 | WP-C1 EM clutch NC | Fail-safe, unique |
| F9.2 | WP-FD1 Triple watchdog | Standard |
| F9.3 | WP-MS1 LED + beep | Simple, effective |
| F10.1 | WP-JS1 Industrial joystick | Ruggedized |
| F10.2 | WP-SC1 PID servo STM32 | Standard, expandable |
| F10.3 | WP-CR1 Cable spiral | Simple, cheap |

**Architecture:** 2 independent motor modules + 1 controller + 1 joystick. Az = pinion on ring. El = motor on worm shaft (through handwheel coupling). EM clutch per axis. Cable spiral for 360°.

**Key advantage:** Elevation drive uses V1's existing worm gear as the speed reducer — no separate gearbox needed for elevation. V1 worm = proven, self-locking, correct ratio.

**Key risk:** Worm shaft extension unknown. Must verify V1 has accessible shaft end. If not → fall to Concept B.

---

### Concept B: "LINEAR ACTUATOR" (alternative — robust fallback)

| SF | WP Selected | Rationale |
|----|------------|-----------|
| F7.1 | WP-A1 Spur pinion → ring teeth | Same as A |
| F7.2 | WP-CLA1 Split-ring clamp | Same as A |
| F7.3 | WP-ISO1 Elastomer bushing | Same as A |
| **F8.1** | **WP-E4 Linear actuator** | **Independent of V1 worm shaft. External push/pull.** |
| F8.2 | WP-CLE1 U-bolt saddle + pedestal bracket | 2 attachment points |
| F8.3 | WP-ISO1 Elastomer bushing | At clevis pivot |
| F9.1 | WP-C1 EM clutch NC (az only) + WP-C1 clutch in actuator | Clutch in rotary stage before screw |
| F9.2 | WP-FD1 Triple watchdog | Same as A |
| F9.3 | WP-MS1 LED + beep | Same as A |
| F10.1 | WP-JS1 Industrial joystick | Same as A |
| F10.2 | WP-SC1 PID servo STM32 | Same as A |
| F10.3 | WP-CR1 Cable spiral | Same as A |

**Architecture:** Az = same as A. El = linear actuator between pedestal bracket and elevation arm. Completely independent of V1 elevation mechanism.

**Key advantage:** Does NOT require access to V1 worm shaft. Works regardless of V1 internal geometry. Linear actuator = self-locking (ball screw).

**Key risk:** More complex installation (2 attachment points for el). Clutch integration in linear actuator is non-standard. Actuator length limits elevation range.

---

### Concept C: "SECTOR GEAR" (maximum commonality with azimuth)

| SF | WP Selected | Rationale |
|----|------------|-----------|
| F7.1 | WP-A1 Spur pinion → ring teeth | Same as A |
| F7.2 | WP-CLA1 Split-ring clamp | Same as A |
| F7.3 | WP-ISO1 Elastomer bushing | Same as A |
| **F8.1** | **WP-E2 Sector gear on trunnion** | **Same principle as az — pinion on gear teeth** |
| F8.2 | WP-CLE1 U-bolt saddle on trunnion | Clamp holds sector gear |
| F8.3 | WP-ISO1 Elastomer bushing | Same as A |
| F9.1 | WP-C1 EM clutch NC | Same as A |
| F9.2 | WP-FD1 Triple watchdog | Same as A |
| F9.3 | WP-MS1 LED + beep | Same as A |
| F10.1 | WP-JS1 Industrial joystick | Same as A |
| F10.2 | WP-SC1 PID servo STM32 | Same as A |
| F10.3 | WP-CR2 Slip ring | Unlimited rotation for symmetry |

**Architecture:** Both axes use same approach — pinion meshes with gear teeth. Az = existing ring teeth. El = added sector gear clamped to trunnion. Maximum parts commonality (same motor, same gearbox, same pinion, same bracket concept).

**Key advantage:** Parts commonality → lower BOM cost, simpler spares kit. Same WP for both axes = less design risk.

**Key risk:** Sector gear must be clamped to trunnion WITHOUT loosening under recoil. Limited elevation range (sector arc ≈120°). Adds weight/bulk to elevation area.

---

## CEO Creative Input Section

**CEO: Vui lòng xem xét và bổ sung:**

1. **F8.1 — V1 worm shaft:** Trục vít V1 có kéo dài ra ngoài hộp số không? Nếu CÓ → Concept A (Worm Drive) = strong favorite. Nếu KHÔNG → Concept B hoặc C.

2. **WP bổ sung:** Có working principle nào từ kinh nghiệm WX hoặc sản phẩm khác mà AI chưa liệt kê?

3. **Concept preference:** CEO nghiêng về concept nào?
   - A (Worm Drive): đơn giản nhất, tận dụng V1 worm gear
   - B (Linear Actuator): độc lập khỏi V1, robust
   - C (Sector Gear): commonality cao nhất

4. **Structure δ (External):** Có muốn giữ lại concept δ (motors off-mount) cho so sánh không? Hay eliminate luôn tại BB?

---

*BB Morphological Matrix | 12 SFs × 38 WPs | 4 eliminated by DEMAND | 3 concept variants | helix-concept-generate v3.1 | 2026-04-11*
