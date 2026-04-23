# VN-AIROBOT-001: AI-POWERED AUTONOMOUS EXPLORATION ROBOT
## Requirements List (Design Specification) — Reverse-Engineered
### Pahl & Beitz Systematic Approach — Phase 1: Task Clarification

---

**Project:** VN-AIROBOT-001 — AI-Powered Autonomous Ground Vehicle for Nature Exploration  
**User/Customer:** Research & Development (AI Embodiment Experiment)  
**Version:** 1.0 (Reverse-Engineered from Completed Prototype)  
**Date of Issue:** 14 February 2026  
**Date of Last Change:** 14 February 2026  
**Prepared by:** KN Nguyen (Workshop X Engineering)  
**Reviewed by:** Claude AI Mentor  
**Pages:** 1 of 1  

---

## 0. MENTORING NOTES — Before We Begin

### 0.1 Why Reverse-Engineer a Requirements List?

KN, this exercise serves three purposes:

**Purpose 1 — Methodology Practice:** You practice creating a complete requirements list using P&B's Figure 5.3 checklist on a real (not hypothetical) system. Every requirement you write can be verified against the actual hardware.

**Purpose 2 — Gap Revelation:** By systematically walking through ALL categories, you will discover requirements the original maker NEVER considered. These gaps are exactly the kind of failures that sink defense products. The discipline of completeness is the core skill.

**Purpose 3 — ACH Pattern Extraction:** For each sub-system, we will note where AI-Compensates-Hardware was applied (or could have been), reinforcing the design pattern from our previous session.

### 0.2 Key Difference: Reverse-Engineering vs. Forward Design

In forward design, requirements come from customer needs, standards, and stakeholder analysis BEFORE any solution exists. In reverse-engineering, we work backward from the solution to reconstruct what the requirements SHOULD have been. This reveals:

- **Implicit requirements** the maker satisfied unconsciously (e.g., "must not scare wildlife" — never stated but achieved by electric drive)
- **Missing requirements** the maker never considered (e.g., "what happens if battery dies mid-forest?" — no recovery plan)
- **Over-specified requirements** where the maker spent money unnecessarily
- **Under-specified requirements** where the maker got lucky

### 0.3 Verification Method Legend

| Code | Method | Description |
|------|--------|-------------|
| **A** | Analysis | Calculation, simulation, modeling |
| **I** | Inspection | Visual examination, dimensional measurement |
| **D** | Demonstration | Functional operation under controlled conditions |
| **T** | Test | Formal testing per specified procedures |

### 0.4 Requirements Classification

| Code | Meaning |
|------|---------|
| **M** | MUST (Demand) — System fails purpose without this |
| **W(H)** | WISH High Priority — Strong desire, significant value |
| **W(M)** | WISH Medium Priority — Nice to have, moderate value |
| **W(L)** | WISH Low Priority — Would be good, minimal value |

---

## 1. PROJECT CONTEXT AND STAKEHOLDER ANALYSIS

### 1.1 Problem Statement (From Original Project)

> "Test how an AI responds and survives when given full autonomy to move and explore nature, instead of only receiving human-curated data."

### 1.2 Stakeholder Analysis

| Stakeholder | Role | Key Concerns | Priority |
|---|---|---|---|
| Creator/Operator | Builds, deploys, monitors robot | Must work reliably, recoverable, affordable | HIGH |
| AI System (Claude) | Decision-maker, "brain" | Needs sensory input, actuation control, comms | HIGH |
| Environment (Nature) | Operating domain | Should not be harmed by robot | MEDIUM |
| Online Audience | Views content/results | Entertaining, insightful, visually compelling | MEDIUM |
| Wildlife | Passive entities in environment | Should not be disturbed or harmed | LOW |

**🔍 MENTOR NOTE:** The original maker identified stakeholder 1 and 2 implicitly but never formally analyzed stakeholders 3-5. In a defense context, missing a stakeholder (e.g., "maintenance crew" or "nearby civilians") can create entire categories of unaddressed requirements. The discipline of stakeholder analysis BEFORE requirements is what prevents this.

### 1.3 Operating Scenarios (Lifecycle Stages per P&B)

| Stage | Scenario | Implications for Requirements |
|---|---|---|
| **Assembly** | Indoor workspace, hand tools | Modular design, standard fasteners |
| **Transport** | Carried in vehicle trunk to field | Max weight, form factor, protection |
| **Deployment** | Placed on ground, systems activated | Boot time, self-check, GPS lock |
| **Operation** | Autonomous exploration in forest/snow | All-terrain, obstacle avoidance, weather |
| **Monitoring** | Remote via 4G control app | Reliable comms, status telemetry, video |
| **Recovery** | Walk to robot, pick up, carry back | Locatability (GPS), manageable weight |
| **Maintenance** | Charge battery, clean, update software | Accessible ports, standard charger, OTA |
| **Storage** | Indoor shelf between missions | Stable storage, no battery degradation |

**🔍 MENTOR NOTE:** The original maker skipped scenarios like "what if the robot falls into water?", "what if 4G signal is lost?", and "what if the robot gets stolen/lost?" These are exactly the scenarios a defense requirements engineer would capture. Adding them below.

---

## 2. REQUIREMENTS LIST

### 2.1 FUNCTIONAL REQUIREMENTS (FUN)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | FUN-01 | Autonomous ground navigation in unstructured outdoor terrain | Without human real-time control | — | D | Core mission | AI decides path |
| M | FUN-02 | Visual scene capture for AI processing | ≥6 frames per decision cycle | frames/cycle | T | AI perception | Journey Grid input |
| M | FUN-03 | AI-based decision-making for navigation | Response time ≤5 | s | T | Real-time ops | Cloud AI latency included |
| M | FUN-04 | Forward/reverse/turn actuation | All directions | — | D | Mobility | Via ESC controller |
| M | FUN-05 | Camera pan capability | ≥90° left/right from center | degrees | T | Situational awareness | Servo-driven |
| M | FUN-06 | Depth/distance estimation to obstacles | Range 0.5-10 | m | T | Collision avoidance | ACH: mono depth AI |
| M | FUN-07 | Obstacle avoidance and path replanning | Autonomous reroute on blocked path | — | D | Navigation safety | No human intervention |
| M | FUN-08 | Remote monitoring via control application | Real-time telemetry + camera feed | — | D | Operator awareness | Cyberpunk app |
| W(H) | FUN-09 | Autonomous "stuck" detection and recovery | ≥3 escape attempts before alert | attempts | D | Resilience | Observed behavior |
| W(H) | FUN-10 | Scene description/commentary by AI | Natural language text output | — | D | Experiment value | AI perspective |
| W(M) | FUN-11 | Waypoint navigation to specified coordinates | GPS accuracy ±5 | m | T | Directed exploration | Not implemented |
| W(M) | FUN-12 | Return-to-home on low battery | Autonomous return when battery <20% | % | T | Recovery | Not implemented |
| W(L) | FUN-13 | Multi-robot coordination | ≥2 robots cooperative exploration | — | D | Scalability | Future capability |

**🔍 MENTOR ANALYSIS — What the maker achieved vs. what P&B methodology would demand:**

The maker satisfied FUN-01 through FUN-10 — impressive for a first prototype. However, FUN-11 (waypoint navigation) and FUN-12 (return-to-home) are capabilities that ANY autonomous vehicle should have, and their absence creates real operational risk. In a defense context, a UGV without return-to-home is an unacceptable loss risk. The systematic checklist would have flagged these as MUST requirements from the start.

---

### 2.2 GEOMETRY (GEO)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | GEO-01 | Maximum overall length | ≤800 | mm | I | Transport, terrain clearance | RC car form factor |
| M | GEO-02 | Maximum overall width | ≤500 | mm | I | Trail passage | Must fit hiking trails |
| M | GEO-03 | Maximum overall height (incl. shell) | ≤400 | mm | I | Underbrush clearance | Crab shell adds height |
| M | GEO-04 | Ground clearance | ≥80 | mm | I | Terrain obstacles | Roots, rocks, snow |
| W(H) | GEO-05 | Camera mounting height above ground | ≥200 | mm | I | Field of view quality | Higher = better perspective |
| W(M) | GEO-06 | Form factor suggests living creature | Biomorphic design | — | I | Social acceptance | 3D printed crab shell |
| W(L) | GEO-07 | Modular payload bay | ≥100 × 100 × 50 | mm | I | Expandability | For additional sensors |

---

### 2.3 KINEMATICS (KIN)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | KIN-01 | Maximum speed on flat terrain | ≥5 | km/h | T | Exploration range | RC car capable of much more |
| M | KIN-02 | Minimum speed (precision maneuvering) | ≤0.5 | km/h | T | Obstacle navigation | ESC must support low speed |
| M | KIN-03 | Steering angle | ≥30° | degrees | I | Tight turns | Standard RC steering |
| M | KIN-04 | Capable of forward and reverse | Both directions | — | D | Stuck recovery | ESC bidirectional |
| M | KIN-05 | Camera pan rate | ≥45 | °/s | T | Scene scanning | Servo speed |
| W(H) | KIN-06 | Climb capability on slopes | ≥25 | degrees | T | Forest terrain | Dependent on tires/weight |
| W(H) | KIN-07 | Snow traversal depth | ≥50 | mm | T | Winter operation | Verified at -4°C |
| W(M) | KIN-08 | Obstacle step-over height | ≥40 | mm | T | Roots, small rocks | Tire diameter dependent |

**🔍 MENTOR NOTE — Quantification gap:** The original maker never specified KIN-01 through KIN-08 numerically. The RC car was chosen because it looked capable ("khổng lồ, off-road"), not because it met quantified traversal requirements. In P&B, EVERY kinematic requirement should have a number. The numbers I've estimated here are based on the observed performance — but in forward design, these numbers should come from the operating environment analysis FIRST, then drive the platform selection.

---

### 2.4 FORCES (FOR)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | FOR-01 | Maximum system weight (fully loaded) | ≤8 | kg | I | Manual carry for recovery | Human carries back |
| M | FOR-02 | Payload capacity (electronics + shell) | ≥1.5 | kg | T | Computing + camera + 4G hat | On top of RC car |
| M | FOR-03 | Drive force sufficient for terrain | Traction on dirt, snow, leaves | — | T | All-terrain operation | Tire grip critical |
| W(H) | FOR-04 | Tip-over resistance | Stable on ≤25° side slope | degrees | T | Forest terrain | Center of gravity analysis |
| W(M) | FOR-05 | Impact resistance (minor falls) | Survive ≤0.3m drop onto soil | m | T | Rough terrain | Structural integrity |

---

### 2.5 ENERGY (ENE)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | ENE-01 | Operating endurance on single charge | ≥60 | min | T | Meaningful exploration | Battery capacity critical |
| M | ENE-02 | RPi 5 power supply voltage | 5.0 ±0.25 | V | T | Computing reliability | USB-C PD or buck converter |
| M | ENE-03 | Total power consumption (all systems) | ≤40 | W | A | Battery sizing | RPi + camera + servo + 4G + ESC |
| M | ENE-04 | Battery type | LiPo (RC standard) | — | I | Compatibility | Multi-cell pack |
| M | ENE-05 | Battery capacity | ≥5000 | mAh | I | Endurance target | Sufficient for ENE-01 |
| W(H) | ENE-06 | Battery level monitoring | Real-time % via telemetry | — | D | Low-battery warning | Critical for ENE-12 (FUN-12) |
| W(H) | ENE-07 | Separate power for compute vs. drive | Independent power paths | — | I | Reliability | Prevents motor stall killing RPi |
| W(M) | ENE-08 | Charging time | ≤120 | min | T | Turnaround time | Standard LiPo charger |
| W(M) | ENE-09 | Solar charging capability | ≥5W auxiliary panel | W | T | Extended operation | Not implemented |

**🔍 MENTOR NOTE — CRITICAL GAP IDENTIFIED:**

ENE-07 (separate power for compute vs. drive) is perhaps the single most important requirement the original maker may have missed. If the drive motors stall under load (stuck in deep snow), they can draw massive current → voltage drop → RPi brownout → AI brain dies → robot is now a brick in the forest with no way to call for help. 

In defense UGV design, this is a MUST requirement — always isolate computing power from actuation power. A simple voltage regulator + capacitor bank solves this for <$5, but you only know to add it if your requirements list flags it.

---

### 2.6 MATERIAL (MAT)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | MAT-01 | Shell material | Impact-resistant polymer | — | I | 3D printed shell | PLA, PETG, or ABS |
| M | MAT-02 | Shell UV resistance | Outdoor use ≥100 hours | hrs | T | Sun exposure | ABS or PETG preferred over PLA |
| W(H) | MAT-03 | Corrosion resistance of fasteners | Stainless steel or plated | — | I | Outdoor/wet conditions | Snow, rain, mud |
| W(M) | MAT-04 | Recyclability of materials | Non-toxic, recyclable | — | A | Environmental responsibility | Consumer-grade components |

---

### 2.7 SIGNALS / AI PROCESSING (SIG)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | SIG-01 | Camera resolution | ≥16 | MP | I | Scene detail for AI | 16MP module selected |
| M | SIG-02 | Camera field of view | ≥100 | degrees | I | Wide-angle perception | Wide-angle lens |
| M | SIG-03 | Image capture rate | ≥1 | fps | T | Journey Grid creation | 6 images per cycle |
| M | SIG-04 | AI model capability | Multimodal (image + text) | — | D | Scene understanding | Claude 4.5 Opus |
| M | SIG-05 | AI response latency (end-to-end) | ≤5 | s | T | Real-time navigation | Cloud API round-trip |
| M | SIG-06 | Depth estimation range | 0.5 to 10 | m | T | Obstacle avoidance | Apple Depth Pro |
| M | SIG-07 | Depth estimation accuracy | ±20% at 5m | — | T | Reliable obstacle detection | Monocular estimation limits |
| M | SIG-08 | Cellular data connection | 4G LTE | — | D | Cloud AI access | 4G hat on RPi |
| M | SIG-09 | Data throughput for AI queries | ≥1 | Mbps uplink | T | Image upload + response | 6 images per cycle |
| M | SIG-10 | Journey Grid composite generation | 6 sequential images → 1 composite | — | D | AI temporal understanding | **ACH Level 2: AUGMENT** |
| W(H) | SIG-11 | Local AI fallback (edge inference) | Basic obstacle detection without cloud | — | D | Connectivity loss survival | Not implemented |
| W(H) | SIG-12 | GPS position reporting | ±5m accuracy | m | T | Location tracking + recovery | RPi GPS module |
| W(M) | SIG-13 | IMU data (acceleration, gyroscope) | 6-axis | — | T | Tilt detection, orientation | Not implemented |
| W(M) | SIG-14 | Audio capture (ambient sounds) | Mono microphone | — | D | Environmental awareness | Not implemented |
| W(L) | SIG-15 | Temperature/humidity sensing | Operating environment data | — | D | Environmental logging | Not implemented |

**🔍 MENTOR NOTE — ACH Pattern Instances:**

This section contains the richest examples of the ACH design pattern in the entire project:

**SIG-06/07 (Depth estimation):** Traditional approach requires LIDAR ($500+) or stereo camera ($200+). ACH solution uses monocular camera ($25) + Apple Depth Pro AI = Level 2 AUGMENT. Cost ratio ~1:20.

**SIG-10 (Journey Grid):** Traditional approach requires video processing AI ($1000+ GPU or video-capable edge device). ACH solution uses still images ($25 camera) + composite algorithm + Claude multimodal = Level 2 AUGMENT. This is the most innovative ACH instance in the project.

**SIG-11 (Local AI fallback):** This is a CRITICAL missing requirement. If 4G drops, the robot becomes blind. A simple edge AI model (e.g., MobileNet obstacle detector on RPi) would provide degraded-but-functional navigation. This is the "Hybrid ACH" pattern from our design principle: Primary = Cloud AI, Fallback = Edge AI.

---

### 2.8 SAFETY (SAF)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | SAF-01 | No sharp edges on exterior | Rounded edges, recessed fasteners | — | I | Human/animal contact | 3D printed shell helps |
| M | SAF-02 | Battery protection from short circuit | Fused battery leads | — | I | Fire prevention | LiPo fire risk |
| M | SAF-03 | Emergency stop capability | Remote kill switch via app | — | D | Operator control | Must override AI |
| M | SAF-04 | Maximum speed limit in AI mode | ≤10 | km/h | T | Collision safety | Software-limited |
| M | SAF-05 | LiPo battery enclosed in fireproof container | Metal or fireproof enclosure | — | I | Fire containment | LiPo can thermal runaway |
| W(H) | SAF-06 | Geofence boundary | Configurable radius ≤500m from start | m | T | Prevent loss | GPS-based |
| W(H) | SAF-07 | Automatic stop on tip-over detection | IMU-triggered motor cutoff | — | T | Prevent damage/fire | Requires IMU (SIG-13) |
| W(H) | SAF-08 | Visual/audio indicator when moving | LED or buzzer active during motion | — | I | Alert nearby animals/people | Not implemented |
| W(M) | SAF-09 | Environmentally non-toxic materials | No oils, fluids leak risk | — | I | Nature preservation | Electric drive = clean |

**🔍 MENTOR NOTE — CRITICAL GAPS:**

**SAF-03 (Emergency stop):** The original project description does not mention a kill switch. For ANY autonomous vehicle — civilian or military — a remote emergency stop is an absolute MUST requirement (Demand, not Wish). If the AI decides to drive the robot off a cliff, into a river, or toward a road, the operator MUST be able to stop it instantly. This is equivalent to MIL-STD-882E hazard severity Category II (Critical).

**SAF-05 (LiPo containment):** LiPo batteries in an outdoor robot exposed to impacts and temperature extremes are a real fire hazard. The original project likely has a bare LiPo pack. A $5 fireproof LiPo bag is trivial but critical.

**SAF-06 (Geofence):** Without a geofence, the AI could theoretically navigate the robot onto a road, into private property, or into a dangerous area (cliff, water). This is the autonomous vehicle equivalent of "friendly fire boundary" in military systems.

---

### 2.9 ERGONOMICS (ERG)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | ERG-01 | Control app usability | Single-screen status overview | — | D | Operator efficiency | Cyberpunk app |
| M | ERG-02 | Deployment by single person | No tools required for field startup | — | D | Operational simplicity | Power on + place |
| M | ERG-03 | Carry weight for retrieval | ≤8 | kg | I | Single-person recovery | Includes all components |
| W(H) | ERG-04 | Carry handle on robot | Ergonomic grip point | — | I | Easy pickup | Not obvious on RC car |
| W(M) | ERG-05 | Status LEDs visible from ≥5m | Power, comms, AI status | m | T | Quick visual check | Not implemented |
| W(M) | ERG-06 | App notifications on phone | Push alerts for anomalies | — | D | Passive monitoring | Not mentioned |

---

### 2.10 PRODUCTION (PRD)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | PRD-01 | Shell producible by FDM 3D printing | Standard desktop printer (≥200mm bed) | — | D | Maker accessibility | PLA/PETG filament |
| M | PRD-02 | All electronics commercially available (COTS) | No custom PCB required | — | I | Rapid prototyping | Off-the-shelf modules |
| M | PRD-03 | Assembly with standard hand tools | Screwdrivers, Allen keys, soldering iron | — | I | Maker workshop | No specialized equipment |
| W(H) | PRD-04 | Total bill of materials cost | ≤2,000 | USD | A | Budget constraint | RC car dominates cost |
| W(M) | PRD-05 | Assembly time (excluding 3D print) | ≤16 | hours | D | Weekend project | Wiring is most complex |
| W(L) | PRD-06 | Reproducible by others from documentation | Open-source design files | — | I | Community value | Sharing project |

---

### 2.11 QUALITY CONTROL (QC)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | QC-01 | System self-test on power-up | Camera, 4G, GPS, servo, ESC check | — | D | Pre-mission validation | Software-implemented |
| M | QC-02 | AI connectivity verified before autonomous mode | Cloud API ping successful | — | D | Prevent deaf-blind operation | Gateway check |
| W(H) | QC-03 | Telemetry data logging | All sensor data + AI decisions logged | — | D | Post-mission analysis | SD card or cloud |
| W(M) | QC-04 | Journey replay capability | Reconstruct path from logs | — | D | Debugging + content | GPS + image log |

---

### 2.12 ASSEMBLY (ASM)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | ASM-01 | RPi + 4G hat stackable without modification | Standard HAT pinout | — | I | Plug-and-play | GPIO header |
| M | ASM-02 | Camera cable length sufficient for mounting | ≥200 | mm | I | Flexible placement | CSI ribbon cable |
| M | ASM-03 | ESC replaceable without disassembling chassis | Accessible mounting location | — | D | Field repair | Original ESC replaced |
| W(H) | ASM-04 | Tool-free shell removal | Clips or thumbscrews | — | D | Quick access to electronics | Not specified |
| W(M) | ASM-05 | Color-coded wiring | Signal vs. power distinguished | — | I | Assembly error prevention | Best practice |

---

### 2.13 TRANSPORT (TRN)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | TRN-01 | Fits in standard car trunk | ≤800 × 500 × 400 | mm | I | Transport to field | With shell attached |
| M | TRN-02 | No hazardous materials shipping restrictions | Standard ground transport | — | A | Logistics | LiPo rules may apply |
| W(H) | TRN-03 | Protective carry case | Foam-lined case for transport | — | I | Component protection | Pelican-style recommended |
| W(M) | TRN-04 | Battery removable for separate transport | Tool-free disconnect | — | D | Airline/safety compliance | LiPo air transport rules |

---

### 2.14 OPERATION (OPR)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | OPR-01 | Operating temperature range | -10 to +40 | °C | T | Multi-season outdoor use | Verified at -4°C |
| M | OPR-02 | Rain/splash resistance | IPX4 minimum | — | T | Outdoor reliability | Light rain, splashes |
| M | OPR-03 | Boot time from power-on to autonomous ready | ≤120 | s | T | Deployment speed | RPi boot + system init |
| M | OPR-04 | Continuous autonomous operation | ≥45 | min | T | Meaningful exploration | Battery-limited |
| M | OPR-05 | Terrain types supported | Dirt, gravel, grass, snow, leaves | — | D | Multi-terrain | Tire selection critical |
| W(H) | OPR-06 | Night operation capability | IR illumination or low-light camera | — | T | Extended hours | Not implemented |
| W(H) | OPR-07 | Wind resistance | Stable operation in ≤30 | km/h | T | Open terrain | Shell acts as sail? |
| W(M) | OPR-08 | Dust/mud resistance | Sealed electronics enclosure | — | T | Trail conditions | Current design exposed |
| W(L) | OPR-09 | Noise level | ≤50 | dBA at 2m | T | Wildlife disturbance | Electric = quiet |

---

### 2.15 MAINTENANCE (MNT)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | MNT-01 | Battery replaceable without tools | Plug connector, accessible bay | — | D | Field battery swap | Quick turnaround |
| M | MNT-02 | Software updatable remotely | SSH access via 4G or WiFi | — | D | Bug fixes, AI updates | RPi standard |
| M | MNT-03 | No scheduled maintenance <100 operating hours | Maintenance-free initial period | — | A | Ease of ownership | Brushless motor advantage |
| W(H) | MNT-04 | Tire replacement without full disassembly | Removable wheels | — | D | Wear item | RC car standard |
| W(M) | MNT-05 | Cleaning procedure documented | Brush/air clean after mud/snow | — | I | Longevity | Post-mission routine |
| W(M) | MNT-06 | Spare parts availability | All components orderable online | — | A | Sustainment | COTS advantage |

---

### 2.16 COMMUNICATIONS (COM)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | COM-01 | Cellular data connectivity | 4G LTE Cat 4 minimum | — | T | Cloud AI access | 4G HAT on RPi |
| M | COM-02 | Data uplink bandwidth | ≥1 | Mbps | T | Image upload to AI | 6×16MP images per cycle |
| M | COM-03 | Data downlink bandwidth | ≥0.5 | Mbps | T | AI commands reception | Text-based commands |
| M | COM-04 | Connectivity status indicator | Visual + telemetry | — | D | Operator awareness | App + LED |
| W(H) | COM-05 | WiFi connectivity (backup/local) | 802.11ac | — | T | Workshop testing | RPi built-in WiFi |
| W(H) | COM-06 | Offline operation mode on comms loss | Stop and wait, or basic local nav | — | D | **CRITICAL: Graceful degradation** | Not implemented |
| W(M) | COM-07 | Antenna external/elevated | Improved reception in forest canopy | — | T | Forest signal issues | Tree cover attenuates 4G |
| W(L) | COM-08 | Bluetooth for short-range control | Manual override within 10m | — | T | Close-range recovery | RPi built-in BT |

**🔍 MENTOR NOTE — CRITICAL GAP:**

**COM-06 (Offline operation)** should be MUST, not W(H). If 4G drops in a dense forest (highly probable), the robot currently has NO fallback behavior. It would continue executing the last command — potentially driving into a ravine. The minimum acceptable behavior is:

1. Detect comms loss (no API response for >30 seconds)
2. Stop all movement
3. Record GPS position
4. Attempt reconnection for 5 minutes
5. If still no connection → execute return-to-home (FUN-12)
6. If no GPS/return-to-home → power down and activate beacon

This is equivalent to the "lost link" procedure for military UAVs (MIL-HDBK-516C, §14.4). The principle applies identically to UGVs. The original maker never considered this scenario — systematic requirements engineering would have caught it.

---

### 2.17 ENVIRONMENTAL RESISTANCE (ENV)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | ENV-01 | Operating temperature | -10 to +40 | °C | T | Multi-season | Verified -4°C |
| M | ENV-02 | Storage temperature | -20 to +60 | °C | T | Car trunk in summer/winter | Standard electronics |
| M | ENV-03 | Humidity tolerance | ≤95% non-condensing | % RH | T | Forest/rain environment | Electronics protection |
| M | ENV-04 | Water resistance | IPX4 (splash from any direction) | — | T | Rain, wet ground, snow | Critical for outdoor ops |
| W(H) | ENV-05 | Mud/debris resistance | Sealed electronics compartment | — | T | Trail conditions | Current design: exposed |
| W(H) | ENV-06 | Snow operation depth | ≥50 | mm | T | Winter exploration | Verified in field |
| W(M) | ENV-07 | UV resistance (shell + exposed components) | ≥200 hours outdoor exposure | hrs | T | Sun degradation | ABS/PETG preferred |
| W(L) | ENV-08 | Salt spray resistance | Not required for inland use | — | — | Coastal ops not in scope | Future consideration |

---

### 2.18 COSTS (CST)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | CST-01 | Total hardware BOM | ≤2,000 | USD | A | Personal project budget | RC car = $1,100 (55%) |
| M | CST-02 | Recurring AI API cost per mission (1hr) | ≤5 | USD | A | Sustainable operation | Claude API usage |
| M | CST-03 | Cellular data cost per mission | ≤2 | USD | A | Data plan | ~500MB per hour estimated |
| W(H) | CST-04 | Total development time | ≤4 weeks part-time | weeks | A | Personal project scope | "Weeks of chaos" |
| W(M) | CST-05 | Annual operating cost (50 missions) | ≤500 | USD | A | Hobby sustainability | API + data + battery replacement |

---

### 2.19 SCHEDULE (SCH)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| M | SCH-01 | Concept to first field test | ≤6 | weeks | A | Project timeline | Maker pace |
| W(H) | SCH-02 | First autonomous exploration | ≤8 | weeks from start | A | Milestone | Demonstrated |
| W(M) | SCH-03 | Content publication | ≤10 | weeks from start | A | Audience engagement | Project documentation |

---

### 2.20 RECYCLING / END OF LIFE (EOL)

| D/W | ID | Requirement | Value/Range | Unit | Verification | Source | Remarks |
|-----|-----|-------------|-------------|------|--------------|--------|---------|
| W(H) | EOL-01 | LiPo battery proper disposal | Per local electronics recycling | — | A | Environmental | Hazardous material |
| W(M) | EOL-02 | Electronics components recoverable | RPi, camera, servo reusable in other projects | — | I | Maker reuse | Modular design helps |
| W(L) | EOL-03 | 3D printed shell recyclable | PLA compostable, PETG recyclable | — | A | Environmental | Material choice |

---

## 3. REQUIREMENTS SUMMARY STATISTICS

| Category | Code | Demands (M) | Wishes | Total |
|---|---|---|---|---|
| Functional | FUN | 8 | 5 | 13 |
| Geometry | GEO | 4 | 3 | 7 |
| Kinematics | KIN | 5 | 3 | 8 |
| Forces | FOR | 3 | 2 | 5 |
| Energy | ENE | 5 | 4 | 9 |
| Material | MAT | 2 | 2 | 4 |
| Signals / AI Processing | SIG | 10 | 5 | 15 |
| Safety | SAF | 5 | 4 | 9 |
| Ergonomics | ERG | 3 | 3 | 6 |
| Production | PRD | 3 | 3 | 6 |
| Quality Control | QC | 2 | 2 | 4 |
| Assembly | ASM | 3 | 2 | 5 |
| Transport | TRN | 2 | 2 | 4 |
| Operation | OPR | 5 | 4 | 9 |
| Maintenance | MNT | 3 | 3 | 6 |
| Communications | COM | 4 | 4 | 8 |
| Environmental | ENV | 4 | 4 | 8 |
| Costs | CST | 3 | 2 | 5 |
| Schedule | SCH | 1 | 2 | 3 |
| Recycling/EOL | EOL | 0 | 3 | 3 |
| **TOTAL** | — | **75** | **62** | **137** |

---

## 4. CRITICAL GAPS ANALYSIS — What P&B Methodology Would Have Caught

### 4.1 Top 10 Most Critical Missing Requirements

| Rank | ID | Requirement | Severity | Why Critical |
|---|---|---|---|---|
| 1 | COM-06 | **Offline operation / lost-link procedure** | CRITICAL | Robot becomes uncontrolled brick in forest if 4G drops |
| 2 | SAF-03 | **Remote emergency stop** | CRITICAL | No way to halt AI decisions that lead to danger |
| 3 | FUN-12 | **Return-to-home on low battery** | HIGH | Robot stranded in forest, manual retrieval required |
| 4 | SAF-06 | **Geofence boundary** | HIGH | AI could navigate robot onto roads, private property, cliffs |
| 5 | ENE-07 | **Separate compute/drive power** | HIGH | Motor stall can kill RPi → total system loss |
| 6 | SIG-11 | **Local AI fallback (edge inference)** | HIGH | Single point of failure on cloud connectivity |
| 7 | SAF-05 | **LiPo fire containment** | MEDIUM | Thermal runaway risk in outdoor/impact environment |
| 8 | ENV-04 | **Water resistance IPX4** | MEDIUM | Rain/wet ground destroys exposed electronics |
| 9 | SAF-07 | **Tip-over auto-shutoff** | MEDIUM | Inverted robot with spinning wheels = fire/damage risk |
| 10 | QC-01 | **Power-on self-test** | MEDIUM | Deploying with dead camera or no 4G = wasted mission |

### 4.2 Pattern Recognition: Why These Were Missed

All 10 critical gaps share a common root cause: **they are failure-mode requirements, not success-mode requirements.**

The maker designed for the happy path: "AI sees forest, AI decides direction, robot moves, beautiful exploration." The systematic methodology (P&B Figure 5.3 checklist + lifecycle scenario analysis) forces you to also design for:

- What if the connection fails?
- What if the battery dies?
- What if the robot tips over?
- What if the robot catches fire?
- What if the AI makes a bad decision?

**This is the core value of systematic requirements engineering for defense products.** In defense, the failure modes are not "robot stuck in forest" — they are "weapon system fires on friendly forces" or "surveillance system goes blind during enemy approach." The discipline to systematically capture failure-mode requirements is what separates hobbyist engineering from defense-grade engineering.

---

## 5. ACH PATTERN INSTANCES IN THIS PROJECT

| ID | Sub-function | Traditional HW | ACH Solution Used | ACH Level | Cost Savings |
|---|---|---|---|---|---|
| SIG-06 | Depth estimation | LIDAR ($500+) | Mono camera + Depth Pro AI | Level 2: AUGMENT | ~90% |
| SIG-10 | Temporal scene understanding | Video processor ($200+) | Still camera + Journey Grid algorithm | Level 2: AUGMENT | ~95% |
| FUN-06 | Obstacle detection | Ultrasonic array ($50+) | Vision + AI inference | Level 1: REPLACE | ~80% |
| FUN-07 | Path planning | GPS + pre-mapped routes | AI real-time decision from images | Level 3: EMERGE | ∞ |
| FUN-09 | Stuck recovery | Differential lock + high torque | AI persistence logic | Level 3: EMERGE | ∞ |
| FUN-10 | Environmental commentary | N/A (not possible with HW) | LLM natural language generation | Level 3: EMERGE | ∞ |

**Total ACH instances: 6 (2× Level 1/2 REPLACE/AUGMENT, 1× Level 2, 3× Level 3 EMERGE)**

This confirms the project is heavily ACH-driven. The Level 3 instances (path planning from images, stuck recovery persistence, natural language commentary) represent capabilities that literally CANNOT be purchased as hardware at any price — they only exist through AI processing. This is the strongest validation of the ACH design principle.

---

## 6. D-M-I-R REFLECTION: What Did We Learn?

### 6.1 Requirements Engineering Skill Assessment

| Competency | Before This Exercise | After This Exercise |
|---|---|---|
| Using P&B Figure 5.3 checklist systematically | Could list categories | Can populate ALL 20 categories with quantified requirements |
| Distinguishing M vs. W(H/M/L) | Intuitive feel | Formal criteria: "system fails purpose without this" = M |
| Failure-mode requirements | Focused on success path | Systematically capture failure scenarios per lifecycle stage |
| Quantification discipline | "Fast enough," "big enough" | Every requirement has a number with units |
| Verification method assignment | Not practiced | A/I/D/T mapped to every requirement |
| ACH pattern recognition | Understood concept | Can identify 3 levels (Replace/Augment/Emerge) in any system |

### 6.2 Key Takeaways for Defense Product Development

**Takeaway 1:** A maker project with ~10 implicit requirements becomes a 137-requirement specification when systematically analyzed. The ratio is roughly 1:14. This means for every requirement a maker naturally thinks of, 13 more exist that need systematic methodology to discover.

**Takeaway 2:** The most dangerous gaps are always in the failure-mode categories: Safety, Communications loss, Power failure, Environmental extremes. These are also the categories most likely to kill a defense product during qualification testing (MIL-STD-810H, MIL-STD-882E).

**Takeaway 3:** The ACH pattern is not just a cost optimization — it's a capability multiplier. The 3 Level 3 EMERGE instances in this project create capabilities that do not exist in any hardware catalog. This is the strongest argument for AI-native defense product design.

### 6.3 Next Steps

1. **Practice forward design:** Take one of KN's actual defense projects and create a requirements list from scratch using this template, BEFORE looking at any solutions.
2. **Cross-reference with existing lists:** Compare this 137-requirement list structure against V-SMASH (57 requirements) and VN-RC-TX-001-D — identify category gaps.
3. **Develop failure-mode requirements habit:** For every future product, add a "What if X fails?" column to each requirements category.

---

*Document: VN-AIROBOT-001-RL v1.0*  
*Classification: TRAINING EXERCISE — Workshop X Engineering*  
*Methodology: Pahl & Beitz Systematic Design, Chapter 5 (Task Clarification)*  
*Reference: Figure 5.3 Checklist for Setting Up a Requirements List*  
*ACH Cross-Reference: WX-DP-ACH-001 v1.0*
