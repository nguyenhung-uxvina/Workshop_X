# LOMAH System Comparison Framework

**Task:** task-002
**Worker:** worker-02 (analyst)
**Swarm:** swarm-20260206-1909
**Date:** 2026-02-06
**Status:** Complete

---

## 1. Methodology

### 1.1 Purpose

This document defines a structured comparison framework for benchmarking the **BB-01 LOMAH system** (under development, Vietnam) against the **top 10 LOMAH systems worldwide**. The framework enables systematic, parameter-by-parameter evaluation so that BB-01 design decisions can be grounded in competitive reality rather than isolated specification-writing.

### 1.2 Framework Structure

The framework organizes comparison across **6 categories** containing a total of **32 parameters**. Each parameter has:

- **Definition** -- what is being measured and how, so all systems are evaluated on the same basis
- **BB-01 Design Target** -- the specification value BB-01 is designed to achieve, extracted from the BB-01 constraints document (swarm-20260206-1220, task-003)
- **Source** -- where the BB-01 target originates (direct from constraints doc, derived, or TBD)

### 1.3 How to Use This Framework

1. **task-004 (researcher)** should populate the blank comparison table (Section 4) by researching each of the 10 competitor systems against the 32 defined parameters.
2. For each cell, enter the manufacturer-stated specification where available. Where not publicly available, mark as "N/P" (not published) or provide an estimate marked with "[est.]".
3. After population, the framework supports:
   - **Gap analysis** -- where does BB-01 meet, exceed, or fall short of the competitive field?
   - **Competitive positioning** -- where does BB-01 have a defensible advantage (e.g., cost, tropical hardening)?
   - **Design risk identification** -- which BB-01 targets are aggressive vs. conservative relative to the market?

### 1.4 Scoring Guidance (Optional, for Weighted Analysis)

If a weighted comparison is desired downstream, each parameter can be scored 0-4 per VDI 2225:

| Score | Meaning |
|-------|---------|
| 0 | Unacceptable / does not meet minimum |
| 1 | Just adequate / barely meets requirement |
| 2 | Satisfactory / meets requirement |
| 3 | Good / exceeds requirement |
| 4 | Excellent / significantly exceeds requirement |

### 1.5 Competitor Systems (10 Slots)

The following 10 systems are recommended for comparison. task-004 should confirm availability of public specifications and substitute if a system has insufficient public data.

| Slot | System | Manufacturer | Country | Rationale |
|------|--------|-------------|---------|-----------|
| SYS-01 | TrueZeroTarget | Steinert Sensing Systems | Norway | Most detailed public datasheet; direct benchmark for BB-01 constraints |
| SYS-02 | H-Bar LOMAH / PETS | Oakwood Controls | UK/USA | Widely deployed portable LOMAH; used in NATO training |
| SYS-03 | ETS-LOMAH | Bharat Electronics Limited (BEL) | India | Asian defense manufacturer; similar target market to BB-01 |
| SYS-04 | Smart Electronic Target | Zen Technologies | India | Commercially available Asian LOMAH; exportable |
| SYS-05 | LOMAH Target System | Theissen Training Systems | Germany | European NATO-standard; wired architecture reference |
| SYS-06 | LOMAH / EST | Polytronic International | Switzerland | Long-established electronic scoring; high-end reference |
| SYS-07 | LOMAH / HIT-MISS | SAAB Training & Simulation | Sweden | Major defense prime; integrated training systems |
| SYS-08 | SIUS LOMAH | SIUS AG | Switzerland | Olympic/competition scoring heritage; precision benchmark |
| SYS-09 | LOMAH System | Marathon Targets (or Australian equiv.) | Australia | Field-deployable; harsh-environment design |
| SYS-10 | LOMAH / ATS | Cubic Defense / Meggitt T&S | USA | US military standard; ITAR-controlled reference |

---

## 2. Category Definitions & Rationale

### Category 1: Technical Performance

**Rationale:** This is the primary category that determines whether BB-01 can compete functionally. LOMAH systems exist to accurately score shot placement -- accuracy, caliber range, and detection speed are the core value propositions. BB-01 must match or approach the accuracy of established systems (typically +-3 to +-9 mm) across Vietnamese military calibers (5.56 mm through 12.7 mm). Rate-of-fire handling matters because automatic weapons training is a key use case. Multi-lane capability is essential for range-scale deployment.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P01 | **Accuracy (center)** | Maximum localization error (mm) for shots passing through the center region of the scoring area, under nominal conditions. Stated as +- value. | +-3 mm | [Steinert] benchmark; BB-01 constraints doc Section 5.2 |
| P02 | **Accuracy (edge)** | Maximum localization error (mm) at the extreme edge of the scoring area. Typically degrades due to sensor geometry. | +-9 mm | [Steinert] benchmark; BB-01 constraints doc Section 5.2 |
| P03 | **Caliber range (minimum)** | Smallest bullet caliber the system can reliably detect and score. | .17 (4.3 mm) | [Steinert]; BB-01 constraints doc Section 5.1 |
| P04 | **Caliber range (maximum)** | Largest caliber or projectile type supported. | 84 mm | [Steinert]; BB-01 constraints doc Section 5.1 |
| P05 | **Minimum bullet velocity** | Lowest projectile velocity at the target face for which detection is reliable. Supersonic shockwave-based systems require Mach >1. | 440 m/s (Mach 1.3) | [Steinert], [Oakwood]; BB-01 constraints doc Section 5.1 |
| P06 | **Maximum rate of fire** | Minimum time between consecutive shots that the system can independently detect and score, expressed in RPM or ms between shots. | 600 RPM (100 ms between shots) | [Steinert]; BB-01 constraints doc Section 5.4 |
| P07 | **Scoring area (standard)** | Physical dimensions of the detection window for the standard target configuration. | 600 x 600 mm | [Steinert]; BB-01 constraints doc Section 3.1 |
| P08 | **Scoring area (maximum)** | Maximum detection window achievable through sensor array scaling. | 4,000 x 30,000 mm | [Steinert]; BB-01 constraints doc Section 3.1 |

### Category 2: Environmental Capability

**Rationale:** BB-01 is designed for Vietnamese military training ranges -- tropical climate with extreme heat, humidity approaching 100% RH, monsoon rain, and dusty/muddy field conditions. The system must operate year-round without environmental failure. This is a potential competitive differentiator for BB-01 over systems designed for temperate European climates. Solar heat soak on exposed metal targets in direct tropical sun can push component temperatures to 60-70 degrees C even when ambient is 40 degrees C. Bullet impacts create severe mechanical shock that sensors and electronics must survive across thousands of rounds per training day.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P09 | **IP rating** | Ingress Protection rating per IEC 60529. Determines dust and water resistance. IP66 = dust-tight + protected against powerful water jets. | IP66 minimum | [Steinert] benchmark; BB-01 constraints doc Section 2.2 |
| P10 | **Operating temperature range** | Minimum and maximum ambient temperature for rated operation, in degrees C. Note: component temperature may exceed ambient due to solar loading. | -10 C to +70 C | BB-01 constraints doc Section 2.1 (covers Vietnam + solar heat soak + margin) |
| P11 | **Humidity tolerance** | Maximum relative humidity for continuous operation without degradation. | 100% RH (condensing) | Derived from Vietnam climate: 84% average, approaching 100% in monsoon |
| P12 | **Shock/vibration rating** | Resistance to mechanical shock from bullet impacts on the target frame and transport vibration. Specify MIL-STD-810 or equivalent if available. | Survives repeated bullet impact shock + military truck transport (MIL-STD-810 equivalent, TBD) | BB-01 constraints doc Section 2.3 |
| P13 | **All-weather operation** | Whether the system is rated for continuous outdoor deployment in rain, direct sun, wind, and temperature cycling without shelter or cover. Yes/No plus any restrictions. | Yes -- continuous outdoor, tropical, unsheltered | Derived from deployment requirement |

### Category 3: System Architecture

**Rationale:** The underlying technology architecture determines what performance is physically achievable and what trade-offs are inherent. Acoustic TDOA systems (the dominant approach) vary significantly in sensor type, array geometry, sampling rate, and processing location. These architectural choices directly affect accuracy, cost, power consumption, and maintainability. Understanding competitor architectures helps BB-01 make informed design trade-offs -- for example, BB-01's selection of Vesper VM2020 MEMS sensors (10 kHz bandwidth, $4/unit) vs. competitors' use of measurement-grade piezoelectric microphones ($2,500/unit, 80 kHz bandwidth) is a fundamental architectural divergence with known performance implications.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P14 | **Sensor technology** | Type of acoustic sensor used: piezoelectric measurement mic, MEMS microphone, electret, or other. Include specific model if known. | Vesper VM2020 (piezoelectric MEMS) -- production; PCB 377C01 -- validation reference | mic-selection-recommendation.md Section 3.1 |
| P15 | **Sensors per target** | Number of acoustic sensors in each target unit. More sensors improve geometric diversity for TDOA but increase cost and complexity. | 4-6 (typical: 2 delta arrays of 3-4 sensors each) | BB-01 constraints doc Section 3.1 |
| P16 | **Sensor array geometry** | Physical arrangement and spacing of sensors on the target. Affects TDOA accuracy and scoring area coverage. | 600 mm standard spacing; configurable | BB-01 constraints doc Section 3.1 |
| P17 | **ADC sample rate** | Analog-to-digital converter sample rate per channel, in kHz or MHz. Higher rates improve TDOA timing resolution. | >=200 kHz minimum; >=500 kHz preferred (per channel) | BB-01 constraints doc Section 4.2 |
| P18 | **Detection algorithm** | Method used to compute shot location from sensor data: threshold-crossing TDOA, cross-correlation TDOA, pattern matching, neural network, or other. | Threshold-crossing TDOA with sub-sample interpolation | BB-01 constraints doc Section 4.2 + mic-selection-recommendation.md |
| P19 | **Processing location** | Where shot detection and scoring computation occurs: on-target (embedded processor), centralized (range computer), or hybrid. | On-target (embedded) | Derived from wireless architecture and [Steinert] approach |
| P20 | **Communication interface** | Data link between target unit and range control system: Wi-Fi, wired Ethernet, RS-485, fiber, proprietary radio, etc. | Wi-Fi IEEE 802.11 b/g (up to 300 m); wired Ethernet/RS-485 alternative | BB-01 constraints doc Section 4.3 |

### Category 4: Deployment & Flexibility

**Rationale:** Vietnamese military training ranges vary from permanent fixed installations to temporary field ranges set up for exercises. BB-01 must be deployable across this spectrum. Setup time affects training throughput -- a system that takes hours to calibrate wastes range time. Scalability from single-target zeroing to 20+ lane qualification ranges is essential. Compatibility with existing Vietnamese target lifter mechanisms (pop-up/turning targets) avoids costly range infrastructure replacement. Maximum engagement distance (shooter-to-target) determines which training scenarios are supported.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P21 | **Portable vs. fixed** | Whether the system is designed for permanent installation, man-portable field deployment, or both. | Both -- portable primary, fixed installation capable | Derived from Vietnamese military operational requirement |
| P22 | **Setup time** | Time from unpacking to first scored shot for a single target unit, including calibration. | <15 minutes per target (target) | Derived from training operations tempo |
| P23 | **Scalability** | Maximum number of target units in a single managed range system. How targets are added (plug-and-play vs. reconfiguration). | 20+ targets per range; plug-and-play addition via Wi-Fi | Derived from 20-target range requirement |
| P24 | **Target lifter compatibility** | Whether the LOMAH unit can be mounted on standard pop-up, turning, or bobbing target mechanisms without modification. | Compatible with Vietnamese military standard target lifters (TBD specific models) | Operational requirement |
| P25 | **Maximum range distance** | Maximum distance from shooter to target for which the system is rated. Limited by bullet velocity at target (must remain supersonic). | 25 m to 1,000+ m (caliber-dependent; limited by Mach 1.3 minimum at target) | Derived from 440 m/s velocity requirement + caliber ballistics |
| P26 | **Power source** | Primary power source for target units: battery type and life, wired power, solar, or hybrid. | 12V DC; LiFePO4 battery (16 hours continuous); wired alternative | BB-01 constraints doc Section 4.1 |

### Category 5: Logistics & Support

**Rationale:** A LOMAH system that cannot be maintained in the field by Vietnamese military technicians is operationally useless regardless of its technical performance. BB-01 must be designed for the maintenance reality of the Vietnamese Armed Forces: limited access to OEM service centers, technicians trained to intermediate maintenance level, and a logistics chain that may not support rapid spare parts delivery from overseas. Built-in diagnostics reduce dependence on specialized test equipment. Long MTBF reduces maintenance burden. Field-replaceable modules (versus return-to-factory repair) are essential for operational availability.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P27 | **Built-in test (BIT)** | Self-diagnostic capabilities: what the system can test and report without external equipment. Examples: sensor health, supply voltage, firmware version, hit count, error log. | BIT: firmware version, supply voltage, error messages, sensor status, hit count | [Steinert]; BB-01 constraints doc Section 5.3 |
| P28 | **Calibration method** | How accuracy calibration is performed: automatic temperature compensation, known-position reference shots, factory calibration, or combination. | Continuous temperature compensation + acoustic calibration via known-position shots | [Steinert], [Oakwood]; BB-01 constraints doc Section 5.3 |
| P29 | **Field-replaceable components** | Which modules/components can be swapped in the field without returning the unit to the manufacturer. | Sensor modules, battery, communication module -- tool-free or simple-tool swap | BB-01 constraints doc Section 5.3 |
| P30 | **MTBF / service life** | Mean time between failures (hours) or expected service life (years) for the electronics. Sensor replacement cycle if different. | 10+ years for electronics; sensor replacement as needed | BB-01 constraints doc Section 5.3 |
| P31 | **Training requirements** | Level of training needed for operators (basic use) and maintainers (field repair/calibration). | Operator: 1-day familiarization; Maintainer: 3-day intermediate course (target) | Derived from Vietnamese military training structure |

### Category 6: Cost & Availability

**Rationale:** BB-01 is a Vietnamese defense program with cost sensitivity that differs fundamentally from NATO procurement. A system costing $10,000+ per target (typical for Western LOMAH) would limit BB-01 to showcase ranges rather than force-wide deployment. BB-01's competitive thesis is that MEMS-based acoustic sensing ($4/sensor vs. $2,500/sensor for measurement-grade piezo) enables a 10x-50x cost reduction per target while maintaining acceptable accuracy. Understanding competitor pricing validates this thesis. Export restrictions (ITAR/EAR for US-origin systems) affect which competitors BB-01 is actually competing against in the Vietnamese procurement context, since ITAR-controlled systems may not be available to Vietnam.

**Parameters:**

| # | Parameter | Definition | BB-01 Design Target | Source |
|---|-----------|-----------|---------------------|--------|
| P32 | **Unit price per target** | Price for a single LOMAH target unit (sensors + electronics + housing), excluding range infrastructure. In USD. | <$500 per target (production, target) | Derived from MEMS sensor cost ($334 for 80 sensors) + electronics/housing estimate |
| P33 | **System price (20-target range)** | Total system cost for a complete 20-lane range including targets, control system, cabling/networking, display, and installation. In USD. | <$25,000 for 20-target range (target) | Derived from $500/target + infrastructure |
| P34 | **Lead time** | Typical delivery time from order to receipt, in weeks. | 4-8 weeks (target, domestic production) | Derived from VM2020 availability (in-stock at distributors) + local assembly |
| P35 | **Export restrictions** | Whether the system is subject to ITAR (US), EAR (US), or other export control regimes that would restrict sale to Vietnam. | None -- domestic Vietnamese production; no ITAR/EAR components | Design requirement |
| P36 | **Manufacturer country** | Country of origin for the system manufacturer. Affects geopolitical procurement considerations. | Vietnam | -- |

---

## 3. BB-01 Design Targets Summary

This table consolidates all BB-01 design targets in a single reference view for quick comparison.

| # | Parameter | BB-01 Target | Priority | Notes |
|---|-----------|-------------|----------|-------|
| P01 | Accuracy (center) | +-3 mm | MUST | Matches Steinert benchmark |
| P02 | Accuracy (edge) | +-9 mm | SHOULD | Acceptable for training LOMAH |
| P03 | Caliber min | .17 (4.3 mm) | SHOULD | Steinert benchmark; Vietnamese military primarily 5.56 mm+ |
| P04 | Caliber max | 84 mm | SHOULD | Steinert benchmark; Vietnamese need 12.7 mm minimum |
| P05 | Min bullet velocity | 440 m/s (Mach 1.3) | MUST | Supersonic shockwave detection threshold |
| P06 | Max rate of fire | 600 RPM (100 ms) | MUST | Automatic weapons training requirement |
| P07 | Scoring area (standard) | 600 x 600 mm | MUST | Standard target size |
| P08 | Scoring area (max) | 4,000 x 30,000 mm | SHOULD | Scalable array configuration |
| P09 | IP rating | IP66 | MUST | Tropical rain + dust |
| P10 | Operating temp | -10 C to +70 C | MUST | Vietnam climate + solar heat soak |
| P11 | Humidity tolerance | 100% RH | MUST | Monsoon conditions |
| P12 | Shock/vibration | MIL-STD-810 equiv. (TBD) | SHOULD | Bullet impact + transport |
| P13 | All-weather operation | Yes | MUST | Unsheltered tropical deployment |
| P14 | Sensor technology | Vesper VM2020 (piezo MEMS) | -- | Production sensor selection |
| P15 | Sensors per target | 4-6 | MUST | TDOA geometric requirement |
| P16 | Sensor array geometry | 600 mm spacing, configurable | MUST | Standard LOMAH geometry |
| P17 | ADC sample rate | >=200 kHz (>=500 kHz pref.) | MUST | +-5 mm TDOA accuracy |
| P18 | Detection algorithm | Threshold-crossing TDOA + interpolation | -- | Architecture decision |
| P19 | Processing location | On-target (embedded) | -- | Architecture decision |
| P20 | Communication | Wi-Fi 802.11 b/g (300 m) | SHOULD | Wireless primary |
| P21 | Portable vs fixed | Both | SHOULD | Operational flexibility |
| P22 | Setup time | <15 min per target | SHOULD | Training tempo |
| P23 | Scalability | 20+ targets, plug-and-play | MUST | Range-scale deployment |
| P24 | Lifter compatibility | Vietnamese standard lifters | MUST | Infrastructure reuse |
| P25 | Max range distance | 25-1,000+ m | SHOULD | Caliber-dependent |
| P26 | Power source | 12V DC, LiFePO4, 16 hr | MUST | Battery-powered field use |
| P27 | BIT / diagnostics | Sensor health, voltage, errors, hit count | SHOULD | Field maintainability |
| P28 | Calibration method | Temp compensation + reference shots | MUST | Accuracy assurance |
| P29 | Field-replaceable parts | Sensors, battery, comms module | SHOULD | Military maintainability |
| P30 | MTBF / service life | 10+ years (electronics) | SHOULD | Defense lifecycle |
| P31 | Training requirements | 1-day operator / 3-day maintainer | SHOULD | Vietnamese military context |
| P32 | Unit price per target | <$500 | HIGH | Cost competitive thesis |
| P33 | 20-target range price | <$25,000 | HIGH | Program viability |
| P34 | Lead time | 4-8 weeks | SHOULD | Domestic production |
| P35 | Export restrictions | None (domestic) | MUST | Procurement independence |
| P36 | Manufacturer country | Vietnam | -- | -- |

---

## 4. Blank Comparison Table

### Instructions for task-004

- Fill each cell with the manufacturer-stated specification where publicly available.
- Use "N/P" where the specification is not published.
- Use "[est.]" suffix for values estimated from indirect sources (e.g., "[est.] +-5 mm" means estimated from imagery or inference, not datasheet).
- Use "N/A" where a parameter does not apply to the system architecture.
- Leave cells blank only if research has not yet been attempted.

---

### 4.1 Technical Performance (P01-P08)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P01: Accuracy (center) | +-3 mm | | | | | | | | | | |
| P02: Accuracy (edge) | +-9 mm | | | | | | | | | | |
| P03: Caliber min | .17 (4.3 mm) | | | | | | | | | | |
| P04: Caliber max | 84 mm | | | | | | | | | | |
| P05: Min bullet velocity | 440 m/s | | | | | | | | | | |
| P06: Max rate of fire | 600 RPM | | | | | | | | | | |
| P07: Scoring area (std) | 600x600 mm | | | | | | | | | | |
| P08: Scoring area (max) | 4000x30000 mm | | | | | | | | | | |

### 4.2 Environmental Capability (P09-P13)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P09: IP rating | IP66 | | | | | | | | | | |
| P10: Operating temp | -10 to +70 C | | | | | | | | | | |
| P11: Humidity tolerance | 100% RH | | | | | | | | | | |
| P12: Shock/vibration | MIL-STD-810 eq. | | | | | | | | | | |
| P13: All-weather operation | Yes | | | | | | | | | | |

### 4.3 System Architecture (P14-P20)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P14: Sensor technology | VM2020 (piezo MEMS) | | | | | | | | | | |
| P15: Sensors per target | 4-6 | | | | | | | | | | |
| P16: Array geometry | 600 mm spacing | | | | | | | | | | |
| P17: ADC sample rate | >=200 kHz | | | | | | | | | | |
| P18: Detection algorithm | TDOA threshold + interp. | | | | | | | | | | |
| P19: Processing location | On-target | | | | | | | | | | |
| P20: Communication | Wi-Fi 802.11 b/g | | | | | | | | | | |

### 4.4 Deployment & Flexibility (P21-P26)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P21: Portable vs fixed | Both | | | | | | | | | | |
| P22: Setup time | <15 min | | | | | | | | | | |
| P23: Scalability | 20+ targets | | | | | | | | | | |
| P24: Lifter compatibility | VN standard | | | | | | | | | | |
| P25: Max range distance | 25-1000+ m | | | | | | | | | | |
| P26: Power source | 12V LiFePO4, 16 hr | | | | | | | | | | |

### 4.5 Logistics & Support (P27-P31)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P27: BIT / diagnostics | Sensor, voltage, errors | | | | | | | | | | |
| P28: Calibration method | Temp comp + ref shots | | | | | | | | | | |
| P29: Field-replaceable parts | Sensors, battery, comms | | | | | | | | | | |
| P30: MTBF / service life | 10+ years | | | | | | | | | | |
| P31: Training requirements | 1d operator / 3d maint. | | | | | | | | | | |

### 4.6 Cost & Availability (P32-P36)

| Parameter | BB-01 Target | SYS-01 Steinert | SYS-02 Oakwood | SYS-03 BEL | SYS-04 Zen | SYS-05 Theissen | SYS-06 Polytronic | SYS-07 SAAB | SYS-08 SIUS | SYS-09 Marathon | SYS-10 Cubic |
|-----------|-------------|-----------------|----------------|------------|------------|----------------|-------------------|------------|------------|----------------|-------------|
| P32: Unit price per target | <$500 | | | | | | | | | | |
| P33: 20-target range price | <$25,000 | | | | | | | | | | |
| P34: Lead time | 4-8 weeks | | | | | | | | | | |
| P35: Export restrictions | None (domestic) | | | | | | | | | | |
| P36: Manufacturer country | Vietnam | | | | | | | | | | |

---

## 5. Analysis Templates

### 5.1 Gap Analysis Template (to be completed after table population)

For each parameter, classify BB-01's competitive position:

| Position | Symbol | Definition |
|----------|--------|------------|
| Exceeds field | ++ | BB-01 target is better than the best competitor |
| Competitive | + | BB-01 target is within the top 3 competitors |
| At parity | = | BB-01 target matches the market median |
| Below field | - | BB-01 target is below the market median |
| Significantly below | -- | BB-01 target is below the worst competitor |
| Unique advantage | * | Parameter where BB-01 has a structural advantage (e.g., no ITAR restrictions, tropical hardening, domestic production cost) |

### 5.2 Competitive Positioning Hypothesis

Based on the BB-01 constraints and known competitor characteristics, the expected competitive positioning is:

| Category | Expected BB-01 Position | Rationale |
|----------|------------------------|-----------|
| Technical Performance | At parity to slightly below | MEMS sensor bandwidth (10 kHz vs. 80 kHz in measurement mics) may limit accuracy vs. premium systems; rate-of-fire and caliber range should be competitive |
| Environmental Capability | Competitive to exceeding | Tropical-hardened design; IP66; competitors designed for temperate climates may not match humidity/heat tolerance |
| System Architecture | Differentiated | MEMS-based architecture is a deliberate cost/performance trade-off vs. piezoelectric measurement mic norm; on-target processing with Wi-Fi is modern vs. wired legacy systems |
| Deployment & Flexibility | Competitive | Portable + battery-powered + Wi-Fi aligns with modern portable LOMAH trend (Steinert, Oakwood) |
| Logistics & Support | Potential advantage | Domestic production, simple MEMS sensor replacement, no specialized OEM service dependency |
| Cost & Availability | Significant advantage | 10x-50x lower target unit cost vs. Western systems; no export restrictions for Vietnamese procurement |

---

## 6. References

### 6.1 Source Documents (This Swarm)

| Document | Path | Content |
|----------|------|---------|
| BB-01 Constraints | `D:\UxV\Swarm-Orchestration\sessions\outputs\bb01-lomah-constraints.md` | System constraints and integration requirements from swarm-20260206-1220, task-003 |
| Mic Selection Recommendation | `D:\UxV\Swarm-Orchestration\sessions\outputs\mic-selection-recommendation.md` | Sensor selection analysis from swarm-20260206-1220, task-004 |
| Sensor Candidates Specs | `D:\UxV\Swarm-Orchestration\sessions\outputs\sensor-candidates-specs.md` | Raw sensor specifications from swarm-20260206-1220, task-001 |
| Evaluation Matrix Template | `D:\UxV\Swarm-Orchestration\sessions\outputs\evaluation-matrix-template.md` | VDI 2225 evaluation methodology from swarm-20260206-1220, task-002 |

### 6.2 Competitor System Sources (for task-004 research)

| System | Primary Source URL | Notes |
|--------|-------------------|-------|
| Steinert TrueZeroTarget | https://www.steinertsensingsystems.com/product-details/truezerotarget/ | Most detailed public datasheet; primary benchmark |
| Oakwood H-Bar LOMAH | https://www.oakwoodcontrols.com/electronic-target-systems/portable-electronic-target-system/ | NATO-deployed portable system |
| BEL ETS-LOMAH | https://bel-india.in/product/electronic-target-system-lomah-system/ | Indian defense manufacturer |
| Zen Technologies | https://www.zentechnologies.com/lomah-smart-electronic-target-system.php | Indian commercial LOMAH |
| Theissen Training | https://theissentraining.com/products/lomah-target-system/ | German NATO-standard |
| Polytronic International | https://www.polytronic.ch/ | Swiss electronic scoring |
| SAAB Training | https://www.saab.com/products/training-and-simulation | Swedish defense prime |
| SIUS AG | https://www.sius.com/ | Swiss Olympic scoring heritage |
| Marathon Targets | https://www.marathontargets.com/ | Australian robotic/field targets |
| Cubic / Meggitt T&S | https://www.cubic.com/defense | US military standard |

### 6.3 Technical References

- SA80 Acoustic Study, University of Southampton: https://eprints.soton.ac.uk/390601/1/SA80manuscript_3.pdf
- Ballistic Wave from Projectiles, Marchiano et al., HAL: https://hal.science/hal-01852518/document
- Acoustic Gunshot Recordings, Maher, IEEE DSP 2006: https://www.montana.edu/rmaher/publications/maher_ieeedsp_0906_257-261.pdf
- Survey of Bullet Shock Waves, IEEE Xplore: https://ieeexplore.ieee.org/document/1161921/

---

*End of framework document. Ready for task-004 to populate comparison data.*
