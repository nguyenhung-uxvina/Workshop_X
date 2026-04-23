# RE STAGE 2A: REQUIREMENTS RECONSTRUCTION — InVeris FATS 100MIL/180MIL

**Date:** 2026-04-22
**Input:** RE_InVeris-FATS_S1M_Deconstruct.md (verified present)
**Method:** Inverse P&B Task Clarification from OSINT

---

## RECONSTRUCTED REQUIREMENTS LIST (17 P&B Categories)

Confidence: H=High (from datasheet/patent), M=Medium (inferred from behavior), L=Low (speculative)

| Cat# | P&B Category | ID | Requirement | D/W | Evidence | Conf | WX LITE Has? |
|------|-------------|-----|-------------|-----|----------|------|-------------|
| **1** | **Geometry** | FR-001 | Weapon simulator maintains form/fit of real weapon ±2mm at grip points | D | "form, fit, and function of over 300 firearm variants" | H | **PARTIAL** — ±5mm (G-02). FATS converts real weapon → higher fidelity |
| 1 | Geometry | FR-002 | System fits room ≥ 6m × 8m × 3m (180MIL: 10ft ceiling min) | D | "at least a 10-foot-tall ceiling" (180MIL spec) | H | YES — G-01 same |
| 1 | Geometry | FR-003 | 3× screens 3.8m × 2.14m, 16:9, borderless | D | 180MIL datasheet: "150 by 84 inches" | H | SIMILAR — WX 4m × 2m curved |
| 1 | Geometry | FR-004 | Portable config: fits mil-spec transport cases | W | "self-contained mil spec storage case" | H | DIFFERENT — WX: ≤4 cases ≤200kg (Tr-01) |
| **2** | **Kinematics** | FR-005 | Weapon traverse: continuous 360° (or ±170° with stops) | D | Small arms = hand-held, natural aiming | M | YES — K-01 traverse ≥60°/s |
| 2 | Kinematics | FR-006 | Weapon elevation: full natural range of hand-held weapon | D | Inferred from marksmanship mode | M | YES — K-02 elevation -10°→+87° |
| 2 | Kinematics | FR-007 | Bolt/slide cycling at weapon-specific ROF | D | Gas blowback patent: "functioning a hammer/trigger mechanism" | H | **PARTIAL** — WX solenoid fires but no bolt cycle |
| **3** | **Forces** | FR-008 | Recoil impulse ≥ 60% of real weapon recoil | D | "simulate about 60 percent of a realistic recoil impulse" | H | **TARGETING HIGHER** — WX ≥25N (≥70% for 12.7mm) |
| 3 | Forces | FR-009 | Recoil "sufficient to disturb officer sight picture" | D | "sufficient to disturb the officer sight picture, requiring students to reacquire the target" | H | YES — F-01 recoil disrupts aim |
| 3 | Forces | FR-010 | Trigger pull force matches real weapon | D | Inferred from "form, fit, function" doctrine | M | YES — F-05 adjustable 1.5-4kg |
| **4** | **Energy** | FR-011 | Recoil energy: compressed air, rechargeable magazine | D | Patent EP1546831A4: regulated gas system | H | DIFFERENT — WX: 24VDC solenoid |
| 4 | Energy | FR-012 | Weapon operates wireless (battery powered) | W | BlueFire wireless operation | H | NO — WX wired (by design for naval mount) |
| 4 | Energy | FR-013 | System power ≤ standard facility outlet | D | Rack or portable config implies standard power | M | YES — E-02 ≤5kW |
| **5** | **Material** | FR-014 | Weapon body: real weapon host + simulator conversion kit | D | "Convert from Live Weapon to BlueFire simulator and back in minutes" (MAAWS) | H | DIFFERENT — WX CNC aluminum replica |
| 5 | Material | FR-015 | Screen material: specialized projection surface, borderless | D | "borderless projection surface" | H | SIMILAR — WX matt white fabric |
| **6** | **Signals** | FR-016 | **Trigger pressure sensor** (analog force measurement) | D | "how the trainee manipulates the trigger" | H | **NO** — WX microswitch only |
| 6 | Signals | FR-017 | **Buttstock pressure sensor** (cheek/shoulder weld force) | D | "how much pressure is applied to the buttstock" | H | **NO** — WX has no stock sensor |
| 6 | Signals | FR-018 | **Weapon cant sensor** (gyro/accelerometer tilt) | D | "how the weapon is canted" | H | **NO** — WX encoder gives az/el only |
| 6 | Signals | FR-019 | Continuous laser emitter (aim tracking, always on, records on trigger) | D | "continual laser operation that only records when the trigger is pulled" | H | DIFFERENT — WX uses encoder-based tracking |
| 6 | Signals | FR-020 | Fire control / safety selector sensor | D | "safety/fire control sensor" | H | YES — S-04 single/burst mode |
| 6 | Signals | FR-021 | 2-way weapon↔system communication (Bluetooth wireless) | D | "two-way, weapon-to-system communication" | H | DIFFERENT — WX wired USB/serial |
| 6 | Signals | FR-022 | Hit detection via 3 cameras → OCR real-time processor | D | "three digital cameras that interface directly with the OCR processor" | H | DIFFERENT — WX encoder + ray-trace |
| **7** | **Safety** | FR-023 | Eye safety: projector beam safe per IEC 62471 | D | Inferred from UST projectors (beam behind trainees) | M | YES — Sa-04 |
| 7 | Safety | FR-024 | No live ammunition can chamber in simulator weapon | D | Simulator conversion prevents live rounds | H | YES — CNC replica cannot fire |
| 7 | Safety | FR-025 | Emergency stop accessible | D | Inferred from military training standards | M | YES — Sa-05 hard stops + E-stop |
| **8** | **Ergonomics** | FR-026 | Trainee capacity: up to 15 concurrent (100MIL) / 5 concurrent (180MIL) | D | "up to 60 weapons assigned for up to 15 trainees" | H | DIFFERENT — WX LITE = 1 trainee |
| 8 | Ergonomics | FR-027 | Instructor can stand next to trainee with tablet coaching | W | "Instructors can now stand next to the trainees" | H | PARTIAL — WX instructor at separate station |
| 8 | Ergonomics | FR-028 | Weapon conversion: live ↔ simulator in minutes | D | "Convert from Live Weapon to BlueFire simulator and back in minutes" | H | N/A — WX uses dedicated replica |
| **9** | **Production** | FR-029 | 300+ weapon variant support on same platform | D | "form, fit, and function of over 300 firearm variants" | H | DIFFERENT — WX 5 weapons (naval focus) |
| 9 | Production | FR-030 | Shared OCR processor across product family | W | 180MIL uses "same OCR processor as FATS 100" | H | LEARNING — WX should share scoring module |
| **10** | **Quality** | FR-031 | Shot placement accuracy sufficient for marksmanship certification | D | Used for US Army/USMC qualification | M | YES — Q-01 ≤1 mrad @ 1000m |
| **11** | **Assembly** | FR-032 | Portable system: field-deployable by 2 personnel | W | Mil-spec transport case config | M | YES — A-01 ≤8h, 2 personnel |
| **12** | **Transport** | FR-033 | Mil-spec ruggedized transport cases | W | "mil spec storage case for portability and protection" | H | SIMILAR — Tr-01 ≤4 cases |
| **13** | **Operation** | FR-034 | 3 training modes: 3D Marksmanship + VBS3 Collective + HD Video Judgmental | D | "3D marksmanship, collective training, and judgmental HD video scenarios" | H | **PARTIAL** — WX has marksmanship + scenario. Missing: judgment mode |
| 13 | Operation | FR-035 | **Automatic Coaching**: real-time doctrine-referenced feedback | D | "coaching techniques pulled from the organization's official training doctrine" | H | **NO** — WX has post-session AAR only |
| 13 | Operation | FR-036 | AAR with shot-by-shot replay, weapon trace, grouping analysis | D | "show exact shot placement, improper weapon handling, weapon trace" | H | **PARTIAL** — WX has AAR but less sensor data |
| 13 | Operation | FR-037 | Doctrine-agnostic: coaching configurable per customer's training manual | D | "coaching techniques pulled from the organization's official training doctrine" | H | **NO** — WX not doctrine-configurable yet |
| 13 | Operation | FR-038 | Scenario authoring by instructor (non-programmer) | W | Inferred from military training workflow | M | YES — Er-06 ≤15min scenario creation |
| **14** | **Maintenance** | FR-039 | Magazine recharge via fill station (compressed air) | D | "rechargeable magazine of compressed breathable air via a proprietary fill station" | H | N/A — WX solenoid = no recharge needed |
| 14 | Maintenance | FR-040 | Weapon simulator hot-swappable (replace faulty unit immediately) | W | 300+ variants implies fleet management | M | YES — MWI ≤5min swap |
| **15** | **Recycling** | FR-041 | Compressed air: breathable grade (no hazardous materials) | W | "compressed breathable air" | H | N/A |
| **16** | **Cost** | FR-042 | System sell price supports $200-500K+ per unit | D | Government procurement data | M | DIFFERENT — WX $50-70K |
| 16 | Cost | FR-043 | Recurring revenue: weapon variant kits, software updates, training content | D | Business model: 300+ weapons = kit sales | M | SIMILAR — WX MWI weapon modules |
| **17** | **Schedule** | FR-044 | Program of Record: long-term support (20+ year lifecycle) | D | US Army/USMC PoR since 1980s | H | LEARNING — WX building for longevity |

**Total: 44 reconstructed requirements (32 Demand, 12 Wish)**

---

## D/W CLASSIFICATION — CEO VALIDATION

| ID | Requirement (short) | AI D/W | Rationale |
|----|-------------------|--------|-----------|
| FR-008 | Recoil ≥60% real | D | Safety + training transfer critical |
| FR-016 | Trigger pressure sensor | D | Core coaching capability |
| FR-017 | Buttstock pressure sensor | D | Core coaching capability |
| FR-018 | Weapon cant sensor | D | Core coaching capability |
| FR-035 | Automatic real-time coaching | D | Primary differentiation vs. competition |
| FR-037 | Doctrine-configurable coaching | D | Customer lock-in mechanism |

**CEO: Validate D/W. Đặc biệt FR-016/017/018 — nếu FATS classify là D (must-have), WX nên đánh giá thêm sensor suite cho Phase 3.**

---

## GAPS IDENTIFIED (FATS has, WX lacks)

| # | Gap | FATS | WX LITE-PA2 | Severity | Remediation |
|---|-----|------|------------|----------|-------------|
| **G1** | Trigger pressure sensor | Analog force (N) | Microswitch (on/off) | **HIGH** — limits coaching quality | Add strain gauge to trigger mechanism (~$10/unit) |
| **G2** | Weapon cant sensor | MEMS IMU (3-axis) | None | **MEDIUM** — cant correction is standard marksmanship coaching | Add MEMS IMU to weapon module (~$15/unit) |
| **G3** | Buttstock pressure sensor | Force cell | None | **LOW** for naval mount — operator stands behind weapon, not cheek-weld rifle | May skip for naval mount. Revisit for rifle variant. |
| **G4** | Real-time coaching | Doctrine-linked auto-coaching | Post-session AAR only | **HIGH** — WX AAR delays feedback by minutes/hours | ACH opportunity: AI real-time coaching (LEAPFROG potential) |
| **G5** | Judgment training mode | HD video branching scenarios | None | **LOW** for C-UAV scope — naval gunnery is engagement, not judgment-heavy | Future CORTEX variant could add |
| **G6** | Multi-trainee support | 15 concurrent | 1 (LITE) | **BY DESIGN** — LITE is single-station. FULL/CORTEX address this. | Not a gap, different product tier. |
| **G7** | Bolt cycling simulation | Gas blowback cycles bolt/slide | Solenoid impulse only | **LOW** — naval crew-served weapons don't have visible bolt cycle to operator | Acceptable for naval mount. |

### WX ADVANTAGES (WX has, FATS lacks)

| # | Advantage | WX LITE-PA2 | FATS | Strategic Value |
|---|-----------|------------|------|----------------|
| **A1** | Maritime environment | Ship motion, sea state, naval scenarios | **NONE** | **CRITICAL** — uncontested niche |
| **A2** | Motion platform | 2-DOF (roll ±12°, pitch ±8°) | **NONE** | HIGH — physical immersion |
| **A3** | C-UAV/USV purpose-built | 5 UAV groups + 3 USV profiles, naval gunnery | FATS Drone (land-only, bolt-on) | **HIGH** — WX is specialist |
| **A4** | Crew-served weapon mount | Authentic naval pedestal mount + traverse resistance | Hand-held weapon simulation | HIGH — different training paradigm |
| **A5** | Price | $50-70K | $200-500K+ | **CRITICAL** — 3-7× cheaper |
| **A6** | Software sovereignty | Unity on-premise, no foreign server | VBS3/4 licensed (BIS) | HIGH — VN defense sovereignty |
| **A7** | NFC auto-detect weapon swap | MWI with NFC tag | Manual weapon selection in software | MEDIUM — faster swap, less error |
