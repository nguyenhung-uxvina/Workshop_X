# LOMAH Comparative Analysis & BB-01 Benchmarks

**Document ID:** task-004 / swarm-20260206-1909
**Prepared by:** worker-02 (analyst)
**Date:** 2026-02-06
**Classification:** UNCLASSIFIED
**Status:** Complete

---

## Table of Contents

- [A. Completed Comparison Tables (P01-P36)](#a-completed-comparison-tables)
  - [A.1 Technical Performance (P01-P08)](#a1-technical-performance-p01-p08)
  - [A.2 Environmental Capability (P09-P13)](#a2-environmental-capability-p09-p13)
  - [A.3 System Architecture (P14-P20)](#a3-system-architecture-p14-p20)
  - [A.4 Deployment & Flexibility (P21-P26)](#a4-deployment--flexibility-p21-p26)
  - [A.5 Logistics & Support (P27-P31)](#a5-logistics--support-p27-p31)
  - [A.6 Cost & Availability (P32-P36)](#a6-cost--availability-p32-p36)
- [B. Best-in-Class Summary](#b-best-in-class-summary)
- [C. Technology Landscape Map](#c-technology-landscape-map)
- [D. BB-01 Gap Analysis](#d-bb-01-gap-analysis)
- [E. Key Takeaways for BB-01 Design Team](#e-key-takeaways-for-bb-01-design-team)
- [Appendix: Data Sources & Confidence Notes](#appendix-data-sources--confidence-notes)

---

## A. Completed Comparison Tables

### Notation

- Values in **bold** indicate best-in-class for that parameter.
- `[TBC]` = not publicly confirmed; `[est.]` = estimated from indirect evidence; `N/P` = not published; `N/A` = not applicable.
- BB-01 Gap column uses: `++` exceeds field, `+` competitive (top 3), `=` at parity with median, `-` below median, `--` significantly below, `*` unique structural advantage.

---

### A.1 Technical Performance (P01-P08)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P01 | Accuracy (center) | +-3 mm | +-3 mm | +-5 mm [TBC] | +-3 mm | +-3-5 mm [est.] | +-5 mm | **~0.01 mm** (eScore) | +-3 mm | [TBC] | +-3-5 mm [est.] | +-20 mm | Kongsberg eScore (~0.01 mm) | + (competitive with open-array leaders; closed-chamber is different class) |
| P02 | Accuracy (edge) | +-9 mm | +-9 mm | [TBC] | [TBC] | [TBC] | +-5 mm (uniform) | [TBC] | +-3 mm (uniform) | [TBC] | [TBC] | [TBC] | **Saab +-3 mm uniform** | = (+-9 mm is adequate for training; Saab's uniform +-3 mm is superior) |
| P03 | Caliber min | .17 (4.3 mm) | **.17 (4.3 mm)** | .22 (5.6 mm) | 5.56 mm [est.] | Supersonic only [TBC] | Supersonic only [TBC] | **.177 (4.5 mm)** | .22 (5.6 mm) [est.] | 5.56 mm [est.] | 5.56 mm [est.] | [TBC] | Steinert / Kongsberg (.17-.177) | ++ (matches best-in-class at .17) |
| P04 | Caliber max | 84 mm | 84 mm | **120 mm** | 12.7 mm [est.] | Supersonic [TBC] | Supersonic [TBC] | .50 BMG (12.7 mm) | .50 cal (12.7 mm) [est.] | 12.7 mm [est.] | 12.7 mm [est.] | [TBC] | InVeris (120 mm) | + (84 mm is second only to InVeris 120 mm; exceeds all others) |
| P05 | Min bullet velocity | 440 m/s | 440 m/s | **~350 m/s** | 440 m/s (acoustic); none (radar) | 440 m/s | 366 m/s | Supersonic (open); subsonic OK (closed) | **350 m/s** | ~440 m/s [est.] | Supersonic [TBC] | Supersonic [est.] | InVeris / Saab (~350 m/s) for open acoustic; Polytronic (none) for radar | = (440 m/s is median for acoustic TDOA; InVeris/Saab achieve 350 m/s) |
| P06 | Max rate of fire | 600 RPM | 600 RPM [est.] | Burst fire capable [TBC] | [TBC] | [TBC] | [TBC] | **>1,000 RPM** (>95% at 900 RPM) | [TBC] | [TBC] | [TBC] | [TBC] | Kongsberg (>1,000 RPM) | + (600 RPM adequate for most auto weapons; Kongsberg exceeds) |
| P07 | Scoring area (std) | 600x600 mm | 600x600 mm | [TBC] | [TBC] | [TBC] | [TBC] | 1400x2400 mm (tactical) | [TBC] | [TBC] | [TBC] | [TBC] | **Kongsberg 1400x2400 mm** (tactical) | = (600x600 mm is standard for marksmanship targets) |
| P08 | Scoring area (max) | 4000x30000 mm | **4000x30000 mm** | [TBC] | [TBC] | [TBC] | [TBC] | 4000x3000 mm (near-miss) | [TBC] | [TBC] | [TBC] | [TBC] | Steinert (4000x30000 mm scalable) | ++ (matches Steinert's industry-leading scalable array) |

**Category P01-P08 Summary:** BB-01 targets are competitive across technical performance. The +-3 mm center accuracy matches the best open-array systems (Steinert, Polytronic, Saab). The .17 to 84 mm caliber range is second only to InVeris (120 mm) and far exceeds most competitors. The 600 RPM rate-of-fire target is adequate for standard automatic weapons but does not reach Kongsberg's >1,000 RPM machine-gun capability. The 440 m/s minimum velocity is standard for acoustic TDOA but higher than InVeris/Saab (350 m/s), meaning some marginal-supersonic engagements at long range could be missed.

---

### A.2 Environmental Capability (P09-P13)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P09 | IP rating | IP66 | IP66 | [TBC] | [TBC] | **IP67** | NEMA 4X (~IP66) | [TBC] | [TBC] | Rugged [TBC] | Ruggedized [TBC] | [TBC] | TTS (IP67) | + (IP66 meets most mil requirements; TTS IP67 adds immersion protection) |
| P10 | Operating temp range | -10 to +70 C | **-30 to +70 C** | [TBC] | [TBC] | -25 to +65 C | [TBC] | -30 to +50 C | [TBC] | [TBC] | [TBC] | [TBC] | Steinert (-30 to +70 C = 100 C span) | = (+70 C high end matches Steinert best; -10 C low end is narrower but sufficient for Vietnam) |
| P11 | Humidity tolerance | 100% RH (condensing) | IP66 implies high humidity tolerance | [TBC] | [TBC] | IP67 implies condensing capable | NEMA 4X implies high humidity | [TBC] | [TBC] | Tropical design [TBC] | Tropical trials [TBC] | [TBC] | **BB-01 (explicit 100% RH condensing design)** | * (unique: explicit tropical-hardened design for monsoon conditions) |
| P12 | Shock/vibration | MIL-STD-810 equiv. (TBD) | [TBC] | MIL-SPEC implied (US Army fielded) | [TBC] | [TBC] | **MIL-SPEC** (explicit) | [TBC] | [TBC] | Rugged [TBC] | [TBC] | [TBC] | Oakwood / InVeris (MIL-SPEC) | = (MIL-STD-810 equiv. matches field; needs formal qualification) |
| P13 | All-weather operation | Yes (unsheltered tropical) | Yes (arctic + desert) | Yes (US Army deployed) | Yes (UAE desert deployed) | Yes (NATO deployed) | Yes (portable field use) | Yes (Kongsberg eScore weather-sealed chamber) | Yes (Nordic deployment) | Yes (Indian tropical/desert) | Yes (Indian field trials) | [TBC] | Multiple (all military systems) | = (all military systems claim all-weather; BB-01's tropical focus is niche advantage) |

**Category P09-P13 Summary:** BB-01's environmental targets are competitive. The IP66 rating matches Steinert and Oakwood but is one step below TTS (IP67). The explicit 100% RH condensing-humidity design target is a potential unique advantage -- no competitor explicitly specifies this, though several operate in tropical environments. The +70 C upper temperature limit matches Steinert's best-in-class. The -10 C lower limit is sufficient for Vietnam but narrower than Steinert (-30 C) and Kongsberg (-30 C); this is a deliberate scope decision, not a gap.

---

### A.3 System Architecture (P14-P20)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P14 | Sensor technology | Vesper VM2020 (piezo MEMS) $4/unit | Piezo ultrasonic transducer [inf.] | Electret/MEMS ruggedized [inf.] | Acoustic mics + radar transceiver | Electret [inf.] / enclosed (box) | Piezo/electret [inf.] | Electret in sealed chamber [inf.] | Electret/piezo [inf.] | Electret [inf.] | MEMS/electret [inf.] | **MEMS [inf.]** | Depends on metric -- Kongsberg sensors enable 0.01 mm; MEMS enables lowest cost | * (MEMS at $4/unit is 100-600x cheaper than measurement piezo at $2,500; deliberate cost/performance trade) |
| P15 | Sensors per target | 4-6 | 4-6 [est.] | 4+ modular | **8** (acoustic) + radar | **8** (LOMAH) / 3 (Box) | 6 | 4 (eScore) | **8** (dual delta) | 4-8 [est.] | 4-8 [est.] | 3-4 [est.] | Polytronic / TTS / Saab (8 sensors) | = (4-6 is functional minimum; 8-sensor systems achieve better off-angle and redundancy) |
| P16 | Array geometry | 600 mm spacing, configurable | Linear bar, 600 mm | Configurable topology | Dual delta (4+4) | Dual delta | H-type [inf.] | 4-corner rectangular (eScore) | **Dual delta (4+4)** | Delta/H-type [est.] | Predetermined orientation | Simplified [est.] | Dual delta is industry standard for military accuracy | = (600 mm configurable matches standard; should support dual-delta upgrade path) |
| P17 | ADC sample rate | >=200 kHz (>=500 kHz pref.) | 100-200 kHz [est.] | N/P | N/P | N/P | **"Millions of samples/sec"** (~200-500 kHz/ch) | Multi-MHz [est. for 0.01 mm] | N/P | N/P | N/P | N/P | Kongsberg (implied multi-MHz for 0.01 mm); Oakwood ("millions") | + (200 kHz minimum is adequate for +-5 mm; 500 kHz preferred puts BB-01 in top tier) |
| P18 | Detection algorithm | TDOA threshold + sub-sample interpolation | TDOA + temp comp + chronograph | TDOA triangulation | TDOA (acoustic) + Doppler (radar) | TDOA + enclosed acoustic | TDOA + temp comp | Sealed-chamber acoustic + 3D AI auto-cal | TDOA self-calibrating (patented) | TDOA | **TDOA + biomimetic N-wave ID** | TDOA | BEL DHVANI (biomimetic N-wave pre-filter is unique); Saab (patented self-cal) | = (threshold + interpolation is standard; should consider N-wave ID pre-filter per DHVANI) |
| P19 | Processing location | On-target (embedded) | **On-target embedded** | Centralized (FPC) | Centralized (AROS) | Centralized (range) | **On-target embedded** | On-target + eScore SW | Centralized (Saab RCS) | Centralized (MCS) | Near-target wireless | **On-target embedded** | Steinert / Oakwood / Falcon (on-target = portable-friendly) | + (on-target is correct for portable architecture; matches modern trend) |
| P20 | Communication | Wi-Fi 802.11 b/g (300 m) | Wi-Fi 802.11 b/g (300 m) | Ethernet / Wi-Fi (**2,000 m**) | Wired to AROS | Hardwired | Wi-Fi long-range | Ethernet | Saab range network | Wired / Wireless | Wireless | Wi-Fi/BLE to smartphone | InVeris (2,000 m wireless range) | = (300 m Wi-Fi is adequate for most ranges; InVeris 2,000 m is far superior for large ranges) |

**Category P14-P20 Summary:** BB-01's MEMS-based architecture is a deliberate cost/performance trade-off. The VM2020 at $4/unit versus industry-standard measurement microphones at $2,500/unit represents a 600:1 cost advantage per sensor, but with 10 kHz bandwidth versus 80+ kHz. This bandwidth gap is the core technical risk. The on-target embedded processing and Wi-Fi architecture match the modern portable trend (Steinert, Oakwood, Falcon). The 4-6 sensor count is adequate but below the 8-sensor dual-delta configurations used by the highest-accuracy military systems (Polytronic, TTS, Saab). ADC sample rate targets are competitive.

---

### A.4 Deployment & Flexibility (P21-P26)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P21 | Portable vs fixed | Both | **Both** (portable primary) | Both (fixed primary, portable option) | Fixed only | Both (fixed primary) | **Portable** primary | Fixed (eScore); tactical [TBC] | Both (fixed primary) | Both | Outdoor/portable | **Portable** only | Steinert / BB-01 (both, portable-primary) | + (portable-primary with fixed capability matches Steinert) |
| P22 | Setup time | <15 min | <15 min [est. based on plug-and-play claim] | [TBC] | N/A (permanent) | [TBC] | **Simple setup** [est. <15 min] | N/A (permanent eScore) | [TBC] | [TBC] | [TBC] | **Simple setup** [TBC] | Steinert / Oakwood / Falcon (<15 min, plug-and-play) | + (matches portable-system leaders) |
| P23 | Scalability | 20+ targets, plug-and-play | Modular/scalable (Wi-Fi) | Range-scale (multi-lane) | **Hundreds** (AROS ecosystem) | Range-scale | Single-target focus | **1,900+ ranges, 34 countries** (ecosystem scale) | Range-scale (Saab ecosystem) | Multi-lane MCS | Multi-lane MCS | Single-target | Polytronic / Kongsberg (range-ecosystem scale) | + (20+ via Wi-Fi is practical; lacks deep range-management software of Polytronic/Kongsberg) |
| P24 | Lifter compatibility | Vietnamese standard lifters | N/A (standalone bar) | InVeris lifters (retrofit capable) | Polytronic target family | TTS turning targets (360-deg) | N/A (standalone) | Kongsberg target mechanisms | Saab pop-up/moving targets | Zen pop-up targets | Multifunction target movements | N/A (standalone) | InVeris (retrofit-capable for third-party lifters) | * (must validate against specific Vietnamese lifter models; unique requirement) |
| P25 | Max range distance | 25-1,000+ m | 25-1,000+ m [caliber-dependent] | 25-1,000+ m [est.] | 25-600+ m [est.] | [TBC] | [TBC] | [TBC] | [TBC] | 100-500 m | 100-500 m | [TBC] | Steinert / InVeris (caliber-dependent, 1,000+ m) | + (matches leaders; limited by bullet remaining supersonic at distance) |
| P26 | Power source | 12V LiFePO4, 16 hr | **LiFePO4 3.2V 12Ah, 16 hr** | Li battery, 10 hr (portable) | Range power (N/A) | Range power [TBC] | Rechargeable, **6 hr** | Range power | Range power [TBC] | 230V AC / DC battery | [TBC] | Battery [TBC] | Steinert (LiFePO4, 16 hr) | ++ (matches Steinert best-in-class; LiFePO4 is optimal chemistry) |

**Category P21-P26 Summary:** BB-01's deployment targets closely mirror Steinert's portable-primary architecture. The 16-hour LiFePO4 battery life matches the best-in-class. The portable + fixed dual capability is strong. The 20+ target Wi-Fi scalability is practical but lacks the deep range-management software ecosystems of Polytronic (AROS) and Kongsberg (eScore platform). Vietnamese lifter compatibility is a unique requirement that no competitor has validated -- this is both a risk and a potential differentiator.

---

### A.5 Logistics & Support (P27-P31)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P27 | BIT / diagnostics | Sensor health, voltage, errors, hit count | **FW version, voltage, errors, sensor status, hit count** | [TBC] | AROS system diagnostics [TBC] | [TBC] | [TBC] | eScore software diagnostics | [TBC] | MCS data storage/print | [TBC] | App diagnostics [est.] | Steinert (most transparent BIT specification) | + (matches Steinert; BIT is critical for Vietnamese field maintenance) |
| P28 | Calibration method | Temp comp + reference shots | **Temp comp + self-calibrating (patented)** | [TBC] | [TBC] | [TBC] | Temp comp | Temp shields + sealed chamber | **Self-calibrating (patented)** | [TBC] | [TBC] | [TBC] | Steinert / Saab (self-calibrating, no external reference needed) | = (temp comp + ref shots is standard; Steinert/Saab eliminate ref shots entirely) |
| P29 | Field-replaceable parts | Sensors, battery, comms module | Sensor bar is modular unit | **Modular sensor modules** (individual swap) | [TBC] | [TBC] | [TBC] | **Acoustic sensor microphone** (field-replaceable consumable) | [TBC] | [TBC] | [TBC] | [TBC] | InVeris / Kongsberg (individual sensor-level field replacement) | + (MEMS sensors at $4 make replacement trivially cheap vs $2,500 piezo) |
| P30 | MTBF / service life | 10+ years (electronics) | No consumables (published) | US Army fielded (long service) | Decades of proven reliability | [TBC] | [TBC] | [TBC] | Norwegian Armed Forces framework (multi-year) | [TBC] | [TBC] | [TBC] | Polytronic ("decades of reliability") / InVeris (US Army proven) | = (10+ years is standard mil-spec; MEMS sensors have no moving parts, aiding longevity) |
| P31 | Training requirements | 1-day operator / 3-day maintainer | Plug-and-play (minimal training) | Military training pipeline | Complex range system | [TBC] | Simple setup | Complex eScore system | Complex Saab ecosystem | MCS operator training | [TBC] | Consumer self-service | **Steinert / Falcon** (minimal training, plug-and-play) | + (1-day/3-day target is achievable given Wi-Fi + smartphone display simplicity) |

**Category P27-P31 Summary:** BB-01's logistics targets are well-positioned. The MEMS sensor architecture provides a unique maintenance advantage: at $4 per sensor, field replacement is trivially inexpensive compared to competitors using sensors costing hundreds to thousands of dollars. The built-in-test specification matches Steinert's transparency. The calibration method (temp comp + reference shots) is standard but does not reach the self-calibrating capability of Steinert and Saab. Training requirements are achievable for a portable Wi-Fi system.

---

### A.6 Cost & Availability (P32-P36)

| ID | Parameter | BB-01 Target | Steinert | InVeris | Polytronic | TTS | Oakwood | Kongsberg | Saab | Zen | BEL DHVANI | Falcon Kestrel | Best-in-Class | BB-01 Gap |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| P32 | Unit price per target | **<$500** | EUR 3,490 (~$3,800) | $10,000+ [est.] | [TBC] (mil contract) | [TBC] (mil contract) | $5,500 | [TBC] (mil contract) | [TBC] (mil contract) | [TBC] (mil contract) | ~$4,000-5,000 [est.] | **<$2,000** | Falcon Kestrel (<$2,000 consumer) | ++ (BB-01 at <$500 would be 4x cheaper than cheapest competitor; order-of-magnitude cheaper than military systems) |
| P33 | 20-target range price | **<$25,000** | ~$76,000 (20x EUR 3,490) [est.] | $200,000+ [est.] | [TBC] | [TBC] | $110,000 (20x $5,500) | [TBC] | [TBC] | [TBC] | ~$80,000-100,000 [est.] | N/A (consumer single-target) | BEL DHVANI (~$80K-100K for 20 est.) | ++ (BB-01 at <$25K would be 3-8x cheaper than any 20-target alternative) |
| P34 | Lead time | 4-8 weeks | [TBC] | Government contract timeline | [TBC] | [TBC] | [TBC] | [TBC] | [TBC] | [TBC] | [TBC] | [TBC] | Steinert (commercial availability, likely 4-8 weeks) | + (domestic production enables fast lead times vs import procurement) |
| P35 | Export restrictions | **None (domestic)** | ITAR-free (Norway) | **ITAR-controlled** (US) | Swiss export controls | German export controls | US export applicable | Norwegian export controls | Swedish export controls | Indian export controls | Indian export controls | US export applicable | **Steinert (ITAR-free)** for export markets | * (domestic production eliminates ALL export/import constraints for Vietnam) |
| P36 | Manufacturer country | **Vietnam** | Norway | US/UK | Switzerland | Germany | USA | Norway | Sweden | India | India | USA | N/A (depends on buyer's perspective) | * (domestic production = no FX risk, no sanctions risk, local support, tech sovereignty) |

**Category P32-P36 Summary:** Cost and availability is BB-01's decisive competitive advantage. The <$500 per target unit price is 7-20x cheaper than Western military systems and 4x cheaper than the lowest-cost competitor (Falcon Kestrel at <$2,000, which achieves only +-20 mm accuracy). The <$25,000 for a 20-target range is 3-8x cheaper than any alternative. Domestic Vietnamese production eliminates export restrictions, foreign exchange costs, and import dependencies -- a structural advantage no imported system can match. This cost advantage is enabled by the MEMS sensor architecture ($4/sensor vs $2,500/sensor) and local production economics.

---

## B. Best-in-Class Summary

| Category | Best-in-Class System | Key Metric | Why They Lead | Runner-Up | BB-01 Position |
|---|---|---|---|---|---|
| **1. Technical Performance** | **Kongsberg eScore** | ~0.01 mm accuracy; >1,000 RPM fire rate | Sealed-chamber architecture eliminates environmental noise; 4-corner sensor geometry in controlled acoustic environment enables sub-millimeter precision. Dual portfolio covers sport (eScore) and military (tactical LOMAH). | **Steinert TrueZeroTarget** (+-3 mm, .17-84 mm caliber, integrated chronograph) | Competitive with open-array leaders; matches Steinert on accuracy and caliber range |
| **2. Environmental Capability** | **TTS (Theissen)** | IP67; -25 to +65 C | Only system with IP67 (temporary immersion protection); wide temperature range covers arctic and desert. Proven in NATO field deployments. | **Steinert TrueZeroTarget** (IP66; -30 to +70 C widest temp span) | Competitive; IP66 matches Steinert; +70 C top end ties for best; 100% RH explicit target is unique |
| **3. System Architecture** | **Polytronic** | Hybrid acoustic + radar; 8-sensor dual-delta; AROS ecosystem | Only system scoring both supersonic (acoustic) and subsonic (radar) ammunition in open air. 8-sensor dual-delta provides best-in-class geometric diversity. AROS software manages entire range complexes. | **Kongsberg eScore** (sealed chamber enables subsonic without radar; 3D AI auto-calibration) | Differentiated; MEMS architecture is unique cost/performance trade-off; lower sensor count and bandwidth are deliberate concessions |
| **4. Deployment & Flexibility** | **Steinert TrueZeroTarget** | 4 kg, 16 hr battery, Wi-Fi, plug-and-play, scalable to 4000x30000 mm | Lightest portable LOMAH (4 kg) with longest battery life (16 hr) and widest scalability range. True plug-and-play with no infrastructure required. | **InVeris Portable LOMAH** (2,000 m wireless range; US Army fielded portable) | Strong match; mirrors Steinert's architecture closely; 20+ target Wi-Fi scale is practical |
| **5. Logistics & Support** | **Steinert TrueZeroTarget** | Self-calibrating, no consumables, BIT diagnostics, ITAR-free | Most transparent public specifications enable independent maintenance. Self-calibrating eliminates reference-shot dependency. "No consumables" claim reduces lifecycle cost. | **InVeris** (modular sensor replacement; US Army maintenance doctrine) | Competitive; MEMS at $4/sensor makes replacement trivially cheap; should adopt self-calibration |
| **6. Cost & Availability** | **BB-01** (target) | <$500/target; <$25,000/20-target range; domestic production | If targets are met, BB-01 would be the most cost-effective LOMAH system ever produced -- 7-20x cheaper than military systems while targeting comparable accuracy. Domestic production eliminates import constraints. | **Falcon Kestrel** (<$2,000 consumer, but +-20 mm accuracy) / **BEL DHVANI** (~$4-5K, 50-60% cheaper than Western) | Leader (by design); cost is BB-01's primary competitive thesis |

---

## C. Technology Landscape Map

The 10 LOMAH systems and BB-01 are positioned on two axes:

- **X-axis:** Architecture type, from Open Acoustic TDOA (left) through Closed Chamber (center) to Radar/Hybrid (right)
- **Y-axis:** Market segment, from Consumer (bottom) through Institutional (middle) to Military-Contract (top)

```
    MILITARY-     |                                              |
    CONTRACT      |   InVeris          TTS(LOMAH)     Polytronic |
                  |   Saab             TTS(Box)  ------(Hybrid)  |
                  |                    Kongsberg                  |
                  |                    (Tactical)                 |
                  |                                              |
    INSTITUTIONAL |   Zen              Kongsberg                  |
                  |   BEL DHVANI       (eScore)                   |
                  |                                              |
                  |       * BB-01 *                               |
                  |                                              |
    MID-RANGE     |   Steinert                                   |
                  |   Oakwood                                    |
                  |                                              |
    CONSUMER      |   Falcon Kestrel                             |
                  |                                              |
                  +----------------------------------------------+
                    Open Acoustic    Closed         Radar/Hybrid
                    TDOA             Chamber
```

### Map Key

| Position | Systems | Characteristics |
|---|---|---|
| **Top-Left (Military, Open Acoustic)** | InVeris, Saab | Large defense primes; wired/centralized; range-ecosystem integration; highest per-unit cost; ITAR/export controlled |
| **Top-Center (Military, Closed/Dual)** | TTS (both modes), Kongsberg Tactical | NATO-standard; IP67; fixed-range; dual supersonic/subsonic capability via enclosed chambers |
| **Top-Right (Military, Hybrid)** | Polytronic | Only radar-based subsonic LOMAH; complete AROS ecosystem; global market leader by installed base |
| **Center-Left (Institutional, Open Acoustic)** | Zen, BEL DHVANI | Asian defense manufacturers; cost-optimized; growing export markets; less public specification data |
| **Center (Institutional, Closed)** | Kongsberg eScore | Competition/sport heritage; sub-mm accuracy; sealed chamber; 1,900+ installations |
| **Mid-Left (Mid-Range, Open Acoustic)** | Steinert, Oakwood | Portable-primary; battery-powered; Wi-Fi; accessible pricing ($3,500-$5,500); transparent specs |
| **Bottom-Left (Consumer, Open Acoustic)** | Falcon Kestrel | First consumer LOMAH; smartphone app; <$2,000; lower accuracy (+-20 mm) |

### BB-01 Positioning

BB-01 sits in the **center-left** quadrant -- an **institutional-grade open acoustic TDOA system** with a **cost structure** that approaches the consumer tier. This is a unique position: no current system combines military-grade accuracy targets (+-3 mm) with consumer-tier pricing (<$500/unit). The closest comparable positioning is BEL DHVANI, which also targets cost-optimized military-grade performance for a developing-country defense market. However, BB-01's target price is 8-10x lower than even DHVANI's estimated cost.

BB-01's architecture (MEMS acoustic TDOA, on-target embedded, Wi-Fi) aligns most closely with the Steinert/Oakwood portable architecture family, but at a radically different cost point enabled by the MEMS sensor selection and Vietnamese production economics.

---

## D. BB-01 Gap Analysis

### D.1 Technical Performance (P01-P08)

**Where BB-01 is COMPETITIVE (equal or better than median):**

- **P01 Accuracy (center): +-3 mm** -- matches Steinert, Polytronic, Saab, and the open-array industry standard. The +-3 mm target is achievable with 4-6 sensors at >=200 kHz ADC sample rate with sub-sample interpolation, provided the VM2020 sensor bandwidth (10 kHz) can capture sufficient N-wave timing information. This is the single largest technical risk in BB-01's design.
- **P03 Caliber min: .17 (4.3 mm)** -- matches Steinert's best-in-class. The N-wave from a .17 HMR at 750+ m/s should be detectable by VM2020 sensors, though at lower SNR than larger calibers.
- **P04 Caliber max: 84 mm** -- second only to InVeris (120 mm), and exceeds all other systems. Large-caliber N-waves are very high amplitude, so detection is not a concern.
- **P08 Scoring area (max): 4000x30000 mm** -- matches Steinert's scalable architecture.

**Where BB-01 is BEHIND (below median or missing capability):**

- **P05 Min bullet velocity: 440 m/s** vs InVeris/Saab at 350 m/s -- BB-01's Mach 1.3 threshold is standard but not best-in-class. InVeris and Saab detect at ~Mach 1.02-1.07, enabling scoring of marginal-supersonic rounds at long range. **Implication:** BB-01 may fail to score 5.56 mm rounds at 600+ m ranges where velocity drops below 440 m/s but remains supersonic. Consider investigating whether the VM2020 can detect weaker shockwaves down to 350-400 m/s.
- **P06 Max rate of fire: 600 RPM** vs Kongsberg >1,000 RPM -- BB-01 can handle assault rifle automatic fire but may struggle with belt-fed machine guns (PKM at 650-750 RPM, M2 at 450-600 RPM). Kongsberg's >1,000 RPM capability with >95% reliability at 900 RPM sets a high bar. **Implication:** For Vietnamese 7.62 mm machine gun training (RPD/PKM), 600 RPM is marginal. Consider 800 RPM target.
- **P01/P02 Accuracy (sensor bandwidth risk):** The VM2020's 10 kHz bandwidth versus the 50-100 kHz bandwidth of measurement-grade piezoelectric sensors is the core technical risk. The supersonic N-wave shock front has sub-microsecond rise time with significant energy above 20 kHz. A 10 kHz bandwidth sensor will "smooth" this shock front, reducing TDOA timing precision. The BB-01 constraints document recommends >=20 kHz, >=50 kHz preferred. **What top systems do differently:** Steinert uses proprietary ultrasonic transducers optimized for the N-wave frequency range. Oakwood claims "millions of acoustic samples per second." Kongsberg achieves 0.01 mm through a sealed chamber that eliminates noise and uses precision time-to-digital conversion. **BB-01 implication:** The +-3 mm accuracy target may require: (a) higher sensor count (6-8 vs 4) to compensate for per-sensor timing uncertainty, (b) aggressive sub-sample interpolation in the DSP pipeline, or (c) selecting a wider-bandwidth MEMS sensor (e.g., Knowles SPH0641LU4H-1 with flat response to 80 kHz, ~$2/unit at volume).

**What top systems do differently that BB-01 should consider:**

1. **Steinert's integrated chronograph** -- uses the same acoustic data to measure bullet velocity at the target with 1% accuracy. This provides the Mach angle correction needed for optimal TDOA computation and is a valuable dual-use of existing sensors. BB-01 should implement velocity estimation from the TDOA data as a firmware feature.
2. **Polytronic's 8-sensor dual-delta geometry** -- 8 sensors provide geometric redundancy and off-angle capability. BB-01's 4-6 sensor target is the minimum viable; upgrading to 8 sensors adds ~$16 in MEMS cost but could significantly improve accuracy and robustness.
3. **Kongsberg's >1,000 RPM detection rate** -- achieved through high-speed processing pipeline optimized for burst fire discrimination. BB-01 should architect the DSP pipeline for future burst-fire upgrade even if initial target is 600 RPM.

---

### D.2 Environmental Capability (P09-P13)

**Where BB-01 is COMPETITIVE:**

- **P10 upper temperature: +70 C** -- matches Steinert's best-in-class. Critical for tropical deployment with solar heat soak on exposed metal.
- **P11 Humidity: 100% RH condensing** -- this is a potential unique advantage. No competitor explicitly specifies condensing humidity tolerance. BB-01's tropical-hardened design for monsoon conditions is a genuine differentiator for Southeast Asian markets.
- **P13 All-weather: Yes (unsheltered tropical)** -- matches all military systems.

**Where BB-01 is BEHIND:**

- **P09 IP rating: IP66 vs TTS IP67** -- IP66 handles powerful water jets; IP67 adds temporary immersion protection (30 min at 1 m depth). In muddy, flooded field conditions, IP67 provides meaningful additional protection. **Implication:** Consider targeting IP67 if cost/complexity is manageable. The incremental engineering effort for IP66-to-IP67 (primarily improved sealing and connector gaskets) is modest.
- **P10 lower temperature: -10 C vs Steinert -30 C / Kongsberg -30 C** -- BB-01's lower limit is sufficient for Vietnam but limits export potential to cold-climate countries. **Implication:** Not a gap for the primary Vietnamese market. If future export to ASEAN highland regions or ROK is considered, -20 C would provide margin.

**What top systems do differently:**

- **TTS IP67** is achieved through premium gasket design, sealed connectors, and conformal coating on PCBs. This adds ~$10-30 per unit in manufacturing cost but provides genuine "drop it in a mud puddle" survivability.
- **Steinert's -30 C lower limit** uses LiFePO4 battery chemistry (rated to -20 C discharge, -30 C storage) and cold-rated electronic components. BB-01's LiFePO4 selection already supports this; the limiting factor is likely the MEMS sensor and PCB components.

---

### D.3 System Architecture (P14-P20)

**Where BB-01 is COMPETITIVE:**

- **P19 On-target embedded processing** -- matches Steinert, Oakwood, Falcon. Correct architecture for portable Wi-Fi system.
- **P20 Wi-Fi 802.11 b/g (300 m)** -- matches Steinert exactly. Adequate for most range configurations.
- **P17 ADC >=200 kHz** -- adequate for +-5 mm accuracy; >=500 kHz preferred puts BB-01 in the top tier.

**Where BB-01 is BEHIND:**

- **P14 Sensor bandwidth: VM2020 at 10 kHz vs industry-standard >50 kHz** -- this is the most significant architectural gap. The BB-01 constraints document itself recommends >=20 kHz minimum, >=50 kHz preferred. The VM2020 does not meet even the minimum recommendation. **What top systems do differently:** Steinert uses ultrasonic transducers with bandwidth extending well above 20 kHz. Measurement-grade piezoelectric microphones (PCB 377C01 class) have flat response to 80+ kHz. Even the BEL DHVANI system, targeting similar cost optimization, likely uses sensors with wider bandwidth (their "life-sciences algorithm" compensates for cheaper hardware but still needs the frequency content to be captured). **BB-01 implication:** This is a MUST-ADDRESS gap. Options: (1) validate that +-3 mm is achievable with 10 kHz bandwidth through prototype testing; (2) switch to a wider-bandwidth MEMS sensor; (3) accept reduced accuracy (+-5-8 mm) which may still be adequate for training.
- **P15 Sensors per target: 4-6 vs 8 (Polytronic, TTS, Saab)** -- 8-sensor dual-delta systems achieve better accuracy, redundancy, and off-angle capability. At $4 per MEMS sensor, the cost of upgrading from 6 to 8 sensors is only $8. **BB-01 implication:** Strongly consider 8-sensor configuration as baseline. The cost is negligible; the accuracy and robustness improvement is meaningful.
- **P20 Communication range: 300 m vs InVeris 2,000 m** -- for large military ranges (600 m, 1,000 m firing distances), 300 m Wi-Fi may not reach from target to firing point. **BB-01 implication:** Offer directional antenna option or Wi-Fi relay/mesh for extended range. Standard 802.11 b/g with directional antenna can reach 1-2 km line-of-sight.

**What top systems do differently:**

- **BEL DHVANI's biomimetic N-wave identification algorithm** compensates for lower-cost hardware through smarter signal processing. BB-01 should invest in a similar software-driven approach: use the characteristic N-wave pressure signature (sharp rise, negative phase, recovery) as a pre-filter to reject noise and improve TDOA timing precision.
- **Saab's patented self-calibration** eliminates the need for reference shots by using sensor geometry and temperature data to continuously self-calibrate. BB-01 should implement continuous self-calibration rather than requiring manual reference-shot calibration.
- **Polytronic's radar subsonic LOMAH** is unique and cannot be replicated at BB-01's cost point. However, the TTS/Kongsberg sealed-chamber approach provides a future pathway for subsonic capability at lower complexity than radar.

---

### D.4 Deployment & Flexibility (P21-P26)

**Where BB-01 is COMPETITIVE:**

- **P21 Both portable + fixed** -- matches Steinert and InVeris.
- **P22 <15 min setup** -- matches portable-system leaders.
- **P25 25-1,000+ m range** -- matches best-in-class.
- **P26 LiFePO4, 16 hr** -- matches Steinert best-in-class. Significantly better than Oakwood (6 hr) and InVeris portable (10 hr).

**Where BB-01 is BEHIND:**

- **P23 Scalability: 20+ via Wi-Fi vs Polytronic/Kongsberg ecosystem-scale** -- BB-01 lacks a range-management software platform comparable to Polytronic's AROS or Kongsberg's eScore software. For force-wide deployment across Vietnamese military ranges, a centralized range management, exercise control, and data analytics platform is needed. **BB-01 implication:** Develop or acquire a lightweight range management application (web-based or mobile) that can manage 20+ targets, run standard qualification exercises, and export training records. This is a software deliverable, not a hardware limitation.
- **P24 Lifter compatibility: Vietnamese standard lifters** -- this is an untested interface. No competitor has validated against Vietnamese military target lifters. **BB-01 implication:** Early physical prototyping of the sensor bar mount on actual Vietnamese pop-up and turning target mechanisms is critical. Define the mechanical interface early.

---

### D.5 Logistics & Support (P27-P31)

**Where BB-01 is COMPETITIVE:**

- **P27 BIT diagnostics** -- matches Steinert; critical for field maintenance without OEM support.
- **P29 Field-replaceable parts** -- MEMS at $4/sensor makes replacement trivially cheap. This is a significant lifecycle cost advantage over competitors using sensors costing $100-$2,500 each.
- **P31 Training: 1-day/3-day** -- achievable for a portable Wi-Fi system with smartphone display.

**Where BB-01 is BEHIND:**

- **P28 Calibration: temp comp + ref shots vs Steinert/Saab self-calibrating** -- requiring reference shots adds setup time and complexity. Steinert and Saab have patented self-calibration that eliminates this step. **BB-01 implication:** Invest in developing continuous self-calibration using temperature data and inter-sensor timing cross-checks. This is a firmware feature, not a hardware change.
- **P30 MTBF: 10+ years** -- achievable in principle (MEMS sensors have no moving parts), but BB-01 has zero field-deployment data. Competitors like Polytronic ("decades of reliability") and InVeris (US Army fielded) have extensive operational track records. **BB-01 implication:** Plan an accelerated reliability test program (thermal cycling, humidity exposure, vibration) to generate MTBF data before procurement decisions.

---

### D.6 Cost & Availability (P32-P36)

**Where BB-01 LEADS:**

- **P32 <$500/target** -- 7-20x cheaper than any military system; 4x cheaper than cheapest competitor (Falcon Kestrel <$2,000). This is BB-01's decisive advantage.
- **P33 <$25,000 for 20-target range** -- 3-8x cheaper than any alternative. Makes force-wide deployment economically viable for Vietnam's defense budget.
- **P35 No export restrictions** -- domestic production eliminates ITAR, EAR, and all foreign export control dependencies. Vietnam cannot be cut off from spare parts or support by foreign government sanctions decisions.
- **P36 Vietnamese production** -- local manufacturing, local maintenance, local spare parts, no foreign exchange costs. Unique structural advantage.

**Where BB-01 has RISK:**

- **P34 Lead time: 4-8 weeks** -- achievable for production units if VM2020 MEMS sensors remain commercially available from distributors (currently in-stock). Risk: VM2020 is a single-source component from Vesper (now part of Qualcomm). A second-source MEMS sensor should be identified for supply chain resilience.

---

## E. Key Takeaways for BB-01 Design Team

### Takeaway 1: Sensor Bandwidth Is the Critical Technical Risk

**Insight:** The VM2020 MEMS sensor's 10 kHz bandwidth is below the minimum 20 kHz recommended in BB-01's own constraints document and significantly below the 50+ kHz bandwidth typical of competitor sensors.

**Evidence:** Steinert achieves +-3 mm with proprietary ultrasonic transducers optimized for the N-wave frequency range (significant energy at 3-100 kHz per IEEE/Maher studies). Oakwood achieves +-5 mm with "millions of samples per second" suggesting high-bandwidth sensors. The BB-01 constraints document (Section 1.1) states the N-wave shock front has "significant spectral energy well above 20 kHz" and recommends ">=20 kHz minimum, >=50 kHz preferred."

**BB-01 implication:** Before committing to production, conduct a hardware validation test comparing TDOA accuracy with VM2020 (10 kHz) versus a wider-bandwidth MEMS sensor (e.g., Knowles SPH0641LU4H-1, flat to 80 kHz, ~$2/unit). If VM2020 cannot achieve +-5 mm accuracy in testing, switch sensors immediately. The cost difference is negligible ($2-4 per sensor) but the performance difference could be decisive.

---

### Takeaway 2: Upgrade to 8 Sensors for Minimal Cost, Maximum Benefit

**Insight:** The highest-accuracy military LOMAH systems (Polytronic, TTS, Saab) all use 8-sensor dual-delta configurations, while BB-01 targets 4-6 sensors.

**Evidence:** Polytronic uses 8 acoustic sensors in two delta arrays of 4 each, achieving +-3 mm accuracy with angled-shot capability. TTS uses 8 sensors for its LOMAH mode. Saab uses 8 sensors in dual delta. Oakwood uses 6 sensors and achieves +-5 mm (less accurate). Falcon uses 3-4 sensors and achieves +-20 mm (much less accurate). The correlation between sensor count and accuracy is clear.

**BB-01 implication:** At $4 per VM2020 sensor, upgrading from 6 to 8 sensors adds $8 to the BOM. This is 1.6% of the $500 target unit price. The accuracy, redundancy, off-angle capability, and fault-tolerance gains far outweigh this negligible cost. Adopt 8-sensor dual-delta as the baseline configuration.

---

### Takeaway 3: Implement N-Wave Signature Pre-Filtering in Firmware

**Insight:** Advanced signal processing can compensate for lower-cost sensor hardware, enabling competitive accuracy at radically lower price points.

**Evidence:** BEL DHVANI achieves "comparable to the best in the world" accuracy at 50-60% lower cost using a "life-sciences inspired algorithm" for N-wave identification. The DHVANI acronym itself -- "Detection and Hit Visualization using Acoustic N-wave Identification" -- emphasizes N-wave recognition as the key algorithmic innovation. This suggests a pattern-matching approach that identifies the characteristic N-wave pressure signature (sharp positive rise, negative phase, recovery) before performing TDOA, rejecting false triggers and improving timing precision.

**BB-01 implication:** Invest in developing an N-wave signature detection pre-filter for the BB-01 firmware. This should: (1) detect the characteristic N-wave shape to reject non-bullet acoustic events (wind, rain, adjacent-lane muzzle blast), (2) identify the precise shock front arrival time within the N-wave for optimal TDOA timing, and (3) estimate bullet velocity from the N-wave characteristics (per Steinert's integrated chronograph approach). This is a software/firmware investment that can compensate for the VM2020's bandwidth limitation.

---

### Takeaway 4: Develop a Lightweight Range Management Software Platform

**Insight:** The market-leading military LOMAH systems are sold as complete range ecosystems, not standalone hardware. Software differentiates systems at the institutional and military-contract level.

**Evidence:** Polytronic's AROS manages hundreds of targets across range complexes. Kongsberg's eScore platform is installed in 1,900+ ranges across 34 countries. Saab's LOMAH integrates with their BT46 and GAMER training ecosystem. InVeris provides Firing Point Computer software with exercise management. Even Zen Technologies offers a Master Control Station for multi-lane monitoring.

**BB-01 implication:** A <$500 target unit with no range management software will be difficult to deploy at scale. Develop a web-based or mobile-app range management platform that provides: (a) multi-target dashboard showing all 20+ lanes, (b) standard Vietnamese military qualification exercise protocols, (c) shooter training records with export capability, (d) system health monitoring for all targets. This software is the "invisible" deliverable that determines whether BB-01 succeeds as a force-wide training tool versus a one-off demonstration.

---

### Takeaway 5: Plan for Self-Calibration to Eliminate Reference-Shot Dependency

**Insight:** The best portable LOMAH systems eliminate manual calibration entirely, enabling true plug-and-play operation. Reference-shot calibration adds setup time and requires trained operators.

**Evidence:** Steinert advertises "patented system eliminates the need for an extra reference measurement." Saab describes "calibration-free acoustic scoring system" with a "patented system [that] eliminates the need for an extra reference measurement commonly required by other systems to gauge the current speed of sound." Kongsberg's eScore uses temperature shields and 3D AI for auto-calibration.

**BB-01 implication:** BB-01's current plan (temperature compensation + reference shots) is standard but not best-in-class. Target self-calibration for the production version: use the precision temperature sensor to continuously compute speed of sound, and use inter-sensor cross-correlation during operation to verify and correct the calibration model without requiring dedicated reference shots. This reduces setup time from 15 minutes to under 5 minutes and reduces operator training burden.

---

### Takeaway 6: Validate Vietnamese Target Lifter Compatibility Early

**Insight:** Mechanical integration with existing range infrastructure is a procurement requirement that no competitor has addressed for the Vietnamese market.

**Evidence:** InVeris designs LOMAH to retrofit onto their own target lifter product line. Polytronic integrates with their static, moving, and robotic target families. TTS integrates with their 360-degree turning targets. Saab integrates with BT46 pop-up targets. Each major manufacturer designs for their own ecosystem. No manufacturer has validated compatibility with Vietnamese military standard target lifters.

**BB-01 implication:** Conduct an early-phase mechanical interface study: (1) document the specific pop-up and turning target models deployed at Vietnamese military ranges, (2) measure the mounting interfaces, dimensions, and load capacities, (3) design BB-01's sensor bar mounting bracket to be compatible without modifications to existing lifters. If BB-01 can mount on existing Vietnamese target infrastructure without range modifications, this eliminates a major deployment barrier that imported systems would face.

---

### Takeaway 7: Secure a Second-Source MEMS Sensor for Supply Chain Resilience

**Insight:** Single-source component dependency is a critical risk for a defense program. The VM2020 is manufactured by Vesper (now part of Qualcomm), with no direct pin-compatible second source.

**Evidence:** The BB-01 constraints document specifies VM2020 as the production sensor. Task-001 notes VM2020 is "in-stock at distributors" currently, but defense programs operate on 10+ year timescales. Qualcomm's acquisition of Vesper introduces corporate strategy risk -- product lines may be discontinued, reprioritized, or export-restricted. No other LOMAH manufacturer publicly documents their specific sensor part numbers, precisely because single-sourcing is a known risk that they mitigate through supplier agreements or dual-qualification.

**BB-01 implication:** Identify and qualify at least one second-source MEMS microphone (e.g., Knowles SPH0641LU4H-1, TDK ICS-40638, or Infineon IM73A135V01). Design the sensor interface PCB to accommodate multiple MEMS sensor footprints with minimal rework. Maintain a strategic inventory of VM2020 sensors (6-12 months of production demand) to buffer against supply disruption. This is standard defense procurement practice and should be in the program plan from day one.

---

## Appendix: Data Sources & Confidence Notes

### Source Documents

| Document | Location | Role in This Analysis |
|---|---|---|
| Top 10 LOMAH Catalog | `D:\UxV\Swarm-Orchestration\sessions\outputs\lomah-top10-catalog.md` | Primary source for system specifications (task-001) |
| Comparison Framework | `D:\UxV\Swarm-Orchestration\sessions\outputs\lomah-comparison-framework.md` | Defines 36 parameters and BB-01 targets (task-002) |
| Architecture Deep-Dive | `D:\UxV\Swarm-Orchestration\sessions\outputs\lomah-architectures.md` | Sensor, algorithm, and processing details (task-003) |
| BB-01 Constraints | `D:\UxV\Swarm-Orchestration\sessions\outputs\bb01-lomah-constraints.md` | BB-01 design requirements (previous swarm) |

### Data Confidence Assessment

| System | Confidence Level | Notes |
|---|---|---|
| **Steinert TrueZeroTarget** | HIGH | Most detailed public datasheet; primary benchmark |
| **InVeris LOMAH** | MEDIUM | US military incumbent; some specs via ARCAT; many TBC from government contracts |
| **Polytronic LOMAH** | MEDIUM | Key capabilities confirmed (subsonic radar); many implementation details proprietary |
| **TTS (Theissen)** | MEDIUM | IP67 and temp range confirmed; accuracy and sensor details TBC |
| **Oakwood H-Bar** | MEDIUM-HIGH | Pricing, weight, accuracy published; sensor specifics inferred |
| **Kongsberg eScore/LOMAH** | MEDIUM-HIGH | eScore manuals provide detail; tactical LOMAH specs limited |
| **Saab LOMAH** | MEDIUM | Accuracy confirmed; most specs via third-party (Air Target Sweden/FNY) |
| **Zen Technologies** | LOW | Minimal public specifications; "high accuracy" unquantified |
| **BEL DHVANI** | LOW-MEDIUM | Cost advantage confirmed; accuracy claimed but unquantified; algorithm described but not detailed |
| **Falcon Kestrel** | LOW | Consumer startup; limited public data; accuracy and specs from marketing materials |
| **BB-01** | N/A (design targets) | All values are design targets, not measured performance |

### Framework Alignment Note

The comparison framework (task-002) originally listed 10 system slots (SYS-01 through SYS-10) with some names that differ from the actual 10 systems cataloged in task-001 (e.g., framework listed SIUS AG and Marathon Targets; catalog includes InVeris and Kongsberg instead). This analysis uses the **actual 10 systems from the task-001 catalog**, which were researched and documented with available data, rather than the framework's placeholder names. The framework's SYS-08 (SIUS), SYS-09 (Marathon), and SYS-10 (Cubic/Meggitt) were replaced by InVeris, Kongsberg, and Falcon Kestrel respectively, as these are the systems for which substantive data was collected by the researcher. InVeris (formerly Meggitt Training Systems) subsumes the framework's SYS-10 Cubic/Meggitt slot. The parameter definitions (P01-P36) are unchanged.

---

*End of comparative analysis. This document is the capstone deliverable of swarm-20260206-1909. All claims reference specific system data from the input artifacts (task-001 catalog, task-002 framework, task-003 architecture deep-dive, bb01-lomah-constraints). The BB-01 team should use Sections D (Gap Analysis) and E (Key Takeaways) as the primary input for design-decision meetings.*
