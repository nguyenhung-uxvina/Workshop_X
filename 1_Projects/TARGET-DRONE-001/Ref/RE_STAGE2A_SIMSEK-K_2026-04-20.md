---
created: 2026-04-20
type: re-requirements-reconstruction
source: /reverse-engineering --mode mecha --stage 2A
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 2A: DESIGN INTENT DECODER — Simsek-K
## Inverse Pahl-Beitz Task Clarification | 2026-04-20

---

## TABLE A — FUNCTIONAL REQUIREMENTS (40 reconstructed)

| ID | Requirement | D/W | Evidence | Conf | P&B Category |
|----|------------|------|---------|------|-------------|
| F-001 | Fully autonomous flight operations | D | "Tam Otonom Uçuş" (TUSAS official) | H | Operation |
| F-002 | Execute kamikaze terminal dive on ground targets | D | Warhead integration, first strike test Aug 2025 | H | Kinematics |
| F-003 | RATO launch from static ground/naval positions | D | First RATO ground launch Aug 2025 | H | Forces |
| F-004 | Air-drop launch from MALE UCAVs (Anka/Aksungur) | D | Launched from Anka 2020, Aksungur 2026 | H | Interface |
| F-005 | Catapult launch from ship decks or land | D | "Fırlatıcı ile kalkış" (TUSAS official) | H | Forces |
| F-006 | Parachute recovery for land or water | D | Parachute recovery system confirmed | H | Kinematics |
| F-007 | Absorb landing impact without catastrophic failure | D | "Reusable platform, damage easily repaired" | M | Materials |
| F-008 | Sustain Mach 0.63 to replicate cruise missiles | D | Published max speed specification | H | Kinematics |
| F-009 | Sea-skimming flight profiles (5-15m AGL) | D | Naval ASCM simulation role | H | Geometry |
| F-010 | Evasive maneuvers to simulate tactical threats | D | "High maneuverability and speed" | H | Forces |
| F-011 | Passive RCS augmentation (Luneberg lens) | D | Listed payload — "Pasif Radar İz Arttırıcı" | H | Signal |
| F-012 | Active RCS augmentation (5-18 GHz) | W | "Aktif Radar İz Arttırıcı" listed | H | Signal |
| F-013 | IR signature enhancement (Hot Nose) | D | "IR İz Arttırıcı" listed | H | Energy |
| F-014 | Counter-measures dispensing | W | CM dispensing system listed | H | Operation |
| F-015 | Miss distance indicator (MDI) scoring | D | "Skor Kaydedici Sistem" listed | H | Quality |
| F-016 | Tracking smoke generation | W | "İz Dumanı" listed | H | Signal |
| F-017 | AIS transponder | W | "OTS Otomatik Tanımlama Sistemi" | H | Signal |
| F-018 | Encrypted digital flight data recording | D | "Kriptolu sayısal uçuş verisi kaydetme" | H | Signal |
| F-019 | Mid-flight mission planning updates | D | In-flight replanning confirmed | H | Operation |
| F-020 | 150km LoS datalink with GCS | D | Published specification | H | Signal |
| F-021 | Real-time SA camera feed | W | SA cameras in payload options | H | Signal |
| F-022 | Radar altimetry for sea-skimming | D | Radar altimeter listed as payload | H | Signal |
| F-023 | Auto Return-to-Base on link loss | D | "Eve Dönüş" emergency mode | H | Safety |
| F-024 | Auto parachute deploy in emergency | D | Parachute at predefined coords on link loss | H | Safety |
| F-025 | Automatic landing sequences | D | "Otomatik İniş Modları" | H | Kinematics |
| F-026 | Internal electrical power from engine generator | D | Engine-driven 28VDC, 200-500W | H | Energy |
| F-027 | Direct kerosene start | D | TEI-TJ90 specification | H | Energy |
| F-028 | Electric start on launcher | D | TEI-TJ90 specification | H | Energy |
| F-029 | Engine telemetry via datalink to GCS | D | "ECU with ground station data link" | H | Signal |
| F-030 | Survive 8-15g RATO/catapult acceleration | D | TEI-TJ90 "Resistance to catapult-loads" | H | Forces |
| F-031 | Internal fuel storage (35L) | D | Published specification | H | Geometry |
| F-032 | Modular interchangeable payloads | D | "Modular payload flexibility" confirmed | H | Assembly |
| F-033 | Maritime corrosion resistance | D | Naval operations requirement | M | Materials |
| F-034 | Anti-jam GNSS (CRPA) | W | "CRPA Anti-Jam Anten Sistemi" listed | H | Safety |
| F-035 | Advanced composite airframe | D | "İleri kompozit teknolojileri" | H | Production |
| F-036 | Rapid field assembly and transport | D | "Hızlı İntikal ve Kurulum" | H | Transport |
| F-037 | Engine maintenance >25hr interval | D | TEI-TJ90 maintenance interval spec | H | Maintenance |
| F-038 | AI-supported swarm operations | W | "Yapay Zeka ile Sürü Teknolojisi" | H | Operation |
| F-039 | Electromechanical servo control surfaces | D | Required for Mach 0.63 trajectory control | H | Kinematics |
| F-040 | Clean separation from carrier platform | D | Anka/Aksungur air-launch demonstrated | H | Kinematics |

**Requirements confidence: 38/40 HIGH, 2/40 MEDIUM**
**D/W split: 33 Demand, 7 Wish**

---

## TABLE B — PERFORMANCE REQUIREMENTS (21 quantitative targets)

| ID | Parameter | Target Value | Inference | Verification | Conf |
|----|-----------|-------------|-----------|-------------|------|
| P-001 | Overall length | 2.4 m | Specified | CMM | H |
| P-002 | Wingspan | 1.5 m | Specified | CMM | H |
| P-003 | MTOW | 83 kg | Specified | Weight scale | H |
| P-004 | Payload capacity | ≤18 kg | Specified | Mass mockup flight | H |
| P-005 | Fuel capacity | 35 L | Specified | Volumetric test | H |
| P-006 | Max airspeed | Mach 0.63 (771 km/h) | Specified | Pitot/GPS flight test | H |
| P-007 | Min operating altitude | 15 m (50 ft) AGL | Specified for sea-skim | Radar alt HIL | H |
| P-008 | Max ceiling | 7,600 m (25,000 ft) | Specified | Flight envelope test | H |
| P-009 | Endurance | >45 min | Specified (validated by 1C calc) | Timed flight | H |
| P-010 | Datalink range | 150 km LoS | Specified | RF attenuation test | H |
| P-011 | Operational range | >500 km | Specified | TSFC calc verification | H |
| P-012 | Warhead mass (kamikaze) | ~5 kg | CEO interview | Ordnance integration | H |
| P-013 | Engine max thrust | 390±10 N | TEI datasheet | Dynamometer bench | H |
| P-014 | Engine max RPM | 96,000 | TEI datasheet | Laser tachometer | H |
| P-015 | Engine TSFC | 0.17 kg/(N·h) | TEI datasheet | Flow meter test | H |
| P-016 | Engine dry weight (w/ ECU) | 6.95 kg | TEI datasheet | Component weigh-in | H |
| P-017 | Engine diameter | 153.5 mm | TEI datasheet | Caliper | H |
| P-018 | RATO launch acceleration | 8-15 g | Derived from zero-length target launches | IMU telemetry | M |
| P-019 | Control loop inner rate | ≥400 Hz | Required for Mach 0.63 stability | SW execution timing | L |
| P-020 | Sensor-to-actuator latency | <10 ms | VDI 2206 budget for transonic UAV | HIL test | L |
| P-021 | Active RCS augmentation band | 5-18 GHz | Published specification | Anechoic chamber | H |

---

## TABLE C — CONSTRAINTS (15 boundaries)

| ID | Type | Description | Evidence | Design Impact |
|----|------|-------------|----------|---------------|
| C-001 | Environmental | MIL-STD-810F compliance | TUSAS brochure | Ruggedized connectors, conformal coated PCBs, salt-fog composites |
| C-002 | EMI/EMC | MIL-STD-461E compliance | TUSAS brochure + TEI TJ-90 | Shielded harnesses, conductive mesh in composite bays |
| C-003 | Interface | NATO 14-inch underwing pylon compatibility | Anka/Aksungur air-launch | Standard suspension lugs + umbilical data interface |
| C-004 | Physical | Survive catapult/RATO shock loads | TEI "catapult-loads" spec | Heavy reinforcement at launch hardpoints (Al-7075/steel) |
| C-005 | Fuel | JP-8/kerosene compatible | TEI "direct kerosene start" | Fuel pump, bladder material, combustor geometry |
| C-006 | Recovery | Survive saltwater immersion | "Paraşüt ile denize iniş" | Watertight avionics seals, buoyant design, SS fasteners |
| C-007 | Economic | Expendable/attritable unit cost | Dual-role kamikaze/target | Single-string avionics, commercial-grade electronics |
| C-008 | Export | ITAR-free for exportability | Turkish defense strategy | Indigenous TJ-90, Aselsan FCC, indigenous crypto |
| C-009 | Form Factor | 2.4m length envelope | Official dimensions | Dense internal packaging, fuel limited to 35L |
| C-010 | Security | Encrypted real-time telemetry | "Kriptolu sayısal uçuş verisi" | Cryptographic coprocessors in FCC + datalink |
| C-011 | Propulsion | 153.5mm diameter engine boundary | TEI-TJ90 dimension | Precludes turbofan → forces high-RPM centrifugal turbojet |
| C-012 | Payload | Rapid field-swap ≤18kg payloads | "Modular payload flexibility" | Standardized rails + unified power/CAN connectors |
| C-013 | Safety | Flight termination on datalink loss | Emergency RTB/parachute logic | Deterministic RTOS state machine, engine-cut-before-chute |
| C-014 | Logistics | No permanent infrastructure needed | "Hızlı İntikal ve Kurulum" | Mobile trailer launchers + ruggedized GCS |
| C-015 | Control | Full autonomy (no stick-and-rudder) | "Tam Otonom Uçuş" | High-fidelity GPS/INS EKF + inner-loop PID |

---

## RED FLAGS — Over-Design & Under-Design

### OVER-DESIGNED (reveals hidden priority)
1. **Structural margins** — Airframe surviving 8-15g RATO + kamikaze terminal dive requires FoS >1.5, typical of tactical cruise missiles. **Hidden intent: designed from the start as dual-use munition, not adapted later.**
2. **Multiple launch modes** — RATO + catapult + air-drop from 3 different carrier types. Excessive for a pure training target. **Hidden intent: operational flexibility for surprise/survivability in combat deployment.**

### UNDER-DESIGNED (reveals cost compromise)
1. **Single-string avionics** — No redundant FCC or IMU. FCC failure = vehicle loss. Acceptable for expendable/attritable asset. **Trade-off: unit cost < reliability.**
2. **25hr engine maintenance** — Short interval for a "reusable" platform. Implies disposable-ish engine philosophy — cheaper to replace than overhaul. **Trade-off: engine unit cost < lifecycle cost.**
3. **Mach 0.63 speed cap** — Non-supercritical airfoil hits drag rise ~0.65. Cannot emulate supersonic threats. **Trade-off: cost/simplicity > threat fidelity.**

### INTEGRATION RED FLAGS (for WX redesign)
1. **FADEC↔FCC CAN bus** — Proprietary protocol, unknown packet structure. Highest integration risk if using open-source FCC.
2. **Engine shutdown → parachute timing** — 500ms window between engine RPM=0 and drogue deploy. Software state machine must be deterministically provable.
3. **CG management during booster separation** — 15-25kg mass change at 8-15g. Autopilot must handle extreme trim transient.

---

## Requirements Confidence Matrix

| Category | High Conf | Medium | Low | Total |
|----------|-----------|--------|-----|-------|
| Functional (F) | 38 | 2 | 0 | 40 |
| Performance (P) | 18 | 1 | 2 | 21 |
| Constraints (C) | 15 | 0 | 0 | 15 |
| **TOTAL** | **71** | **3** | **2** | **76** |

93% of reconstructed requirements are HIGH confidence — strong OSINT baseline for Stage 3 redesign.

---

## CEO ACTIONS REQUIRED (Core — non-delegable)

1. **D/W Validation** — Review 33D/7W split. Any requirements CEO wants to reclassify?
2. **Missing requirements** — Any VN-specific operational requirements not captured from Simsek-K?
   - VN-specific threat profiles to emulate?
   - VN-specific operational environment (Bien Dong / South China Sea)?
   - VN-specific logistics constraints?
3. **Priority for Stage 3** — Which requirements are MOST important for VN variant?
