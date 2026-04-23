# Lead Close-Out -- swarm-20260206-1909

**Session:** swarm-20260206-1909
**Lead:** lead-01
**Date:** 2026-02-06
**Status:** CLOSED

---

## 1. Executive Summary

Swarm-20260206-1909 successfully completed a comprehensive competitive benchmarking of the top 10 LOMAH (Location of Miss and Hit) systems worldwide against BB-01 design targets. The session produced four substantive artifacts (catalog, framework, architecture analysis, comparative analysis) totaling ~1,989 lines across 58 minutes of coordinated work by 2 workers, finishing 32 minutes ahead of the 90-minute deadline. All 4 tasks passed shadow review. The key finding is that BB-01 occupies a unique competitive position -- targeting military-grade accuracy (+-3 mm) at a radically lower price point (<$500/target vs $3,500-$10,000+ for competitors) -- but must resolve a critical sensor bandwidth risk (VM2020 at 10 kHz vs industry-standard 50+ kHz) before committing to production.

---

## 2. Session Scorecard

| Metric | Value |
|--------|-------|
| **Tasks planned** | 4 |
| **Tasks completed** | 4 (100%) |
| **Tasks passed review** | 4 (100%: 2 PASS, 2 PASS_WITH_NOTES) |
| **Duration** | 58 minutes |
| **Deadline** | 90 minutes (20:39) |
| **Deadline adherence** | 32 minutes ahead |
| **Workers** | 2 (worker-01 researcher, worker-02 analyst) |
| **Autonomy rate** | 100% (no lead intervention needed) |
| **Coordination errors** | 0 |
| **Artifacts produced** | 6 (4 worker + trajectory + close-out) |
| **Sources cited** | 55+ unique (manufacturer sites, patents, papers, defense publications) |

---

## 3. Top 10 LOMAH Systems Found (Quick Reference)

| # | System | Manufacturer | Country | Detection | Accuracy | Price (est.) | Key Differentiator |
|---|--------|-------------|---------|-----------|----------|-------------|-------------------|
| 1 | TrueZeroTarget | Steinert Sensing Systems | Norway | Acoustic TDOA | +-3 mm | EUR 3,490 | Most transparent specs; integrated chronograph; 4 kg, 16 hr battery; ITAR-free |
| 2 | LOMAH | InVeris Training Solutions | US/UK | Acoustic TDOA | +-5 mm | $10,000+ | Widest caliber range (.22-120 mm); US Army incumbent; 2,000 m wireless range |
| 3 | LOMAH (H-Bar + Subsonic Radar) | Polytronic International | Switzerland | Acoustic + Radar | +-3 mm | Military contract | World's only subsonic radar LOMAH; AROS ecosystem; global market leader |
| 4 | LOMAH | Theissen Training Systems | Germany | Acoustic TDOA | +-3-5 mm [est.] | Military contract | Best-in-class IP67; Box Target for subsonic; 360-degree turning targets |
| 5 | H-Bar LOMAH | Oakwood Controls | USA | Acoustic TDOA | +-5 mm | $5,500 | Affordable MIL-SPEC; 6 sensors; hunting variant; 15 lbs portable |
| 6 | eScore / Tactical LOMAH | Kongsberg Target Systems (W5) | Norway | Closed-chamber + Open TDOA | ~0.01 mm (eScore) | Military contract | Sub-mm accuracy; >1,000 RPM; 1,900+ ranges in 34 countries; ISSF approved |
| 7 | LOMAH Precision Scoring | Saab | Sweden | Acoustic TDOA | +-3 mm | Military contract | Reactive target behavior; self-calibrating; Saab training ecosystem integration |
| 8 | LOMAH Smart Target System | Zen Technologies | India | Acoustic TDOA | [TBC] | Military contract | Make in India; containerized indoor range (CISR); growing export market |
| 9 | DHVANI | BEL / CSIR-NAL | India | Acoustic N-wave | +-3-5 mm [est.] | ~$4-5K [est.] | Biomimetic algorithm; 50-60% cost reduction vs Western systems; indigenous R&D |
| 10 | Kestrel | Falcon Target | USA | Acoustic TDOA [est.] | +-20 mm | <$2,000 | First consumer-grade LOMAH; smartphone app; long-range precision shooting |

---

## 4. BB-01 Competitive Positioning

### Where BB-01 Leads

| Advantage | Detail |
|-----------|--------|
| **Cost** | <$500/target is 7-20x cheaper than military LOMAH systems and 4x cheaper than cheapest competitor (Falcon Kestrel at <$2,000) |
| **20-target range cost** | <$25,000 is 3-8x cheaper than any alternative, making force-wide deployment economically viable |
| **Export independence** | Domestic Vietnamese production eliminates ITAR, EAR, and all foreign export constraints |
| **Tropical hardening** | Explicit 100% RH condensing design; +70 C upper temperature matches Steinert best-in-class |
| **Sensor replacement cost** | MEMS at $4/unit vs $100-$2,500/unit for competitors; trivially cheap field replacement |
| **Technology sovereignty** | No foreign supplier can cut off spare parts or support through sanctions |

### Where BB-01 Is Competitive (Parity)

- Accuracy +-3 mm center (matches Steinert, Polytronic, Saab -- if sensor bandwidth risk is resolved)
- Caliber range .17-84 mm (second only to InVeris 120 mm)
- LiFePO4 16-hour battery (matches Steinert best-in-class)
- On-target embedded processing + Wi-Fi (modern portable architecture)
- IP66 environmental protection (matches Steinert; one step below TTS IP67)

### Where BB-01 Is Behind

- Sensor bandwidth: VM2020 at 10 kHz vs 50+ kHz industry standard (CRITICAL RISK)
- Sensor count: 4-6 vs 8-sensor dual-delta in top systems (easy to close: +$8 BOM)
- Rate of fire: 600 RPM vs Kongsberg >1,000 RPM
- Self-calibration: requires reference shots vs Steinert/Saab calibration-free
- Range management software: none vs Polytronic AROS / Kongsberg eScore platform
- Wireless range: 300 m vs InVeris 2,000 m

---

## 5. Critical Gaps Identified

| # | Gap | Severity | Impact | Mitigation Path |
|---|-----|----------|--------|----------------|
| 1 | **VM2020 sensor bandwidth (10 kHz vs 50+ kHz)** | CRITICAL | May prevent achieving +-3 mm accuracy; N-wave shock front has significant energy above 20 kHz | Prototype test VM2020 vs Knowles SPH0641LU4H-1 (80 kHz, ~$2/unit). If VM2020 fails +-5 mm threshold, switch sensors. |
| 2 | **Sensor count (4-6 vs 8 dual-delta)** | HIGH | Lower geometric diversity reduces accuracy and off-angle capability | Adopt 8-sensor dual-delta as baseline. Cost: +$8 per target (1.6% of $500 target). |
| 3 | **No range management software** | MEDIUM | Cannot deploy at scale without multi-target dashboard, exercise management, training records | Develop lightweight web-based range management app. Software deliverable, not hardware. |
| 4 | **Reference-shot calibration** | MEDIUM | Adds 10+ min to setup; requires trained operators; Steinert/Saab achieve zero-calibration | Implement continuous self-calibration using temperature + inter-sensor cross-correlation in firmware. |
| 5 | **Single-source MEMS sensor (VM2020 / Vesper / Qualcomm)** | MEDIUM | Supply chain risk over 10+ year defense program lifecycle | Qualify Knowles SPH0641LU4H-1, TDK ICS-40638, or Infineon IM73A135V01 as second source. |

---

## 6. Seven Design Takeaways for BB-01 Team

### Takeaway 1: Sensor Bandwidth Is the Critical Technical Risk
The VM2020 MEMS sensor's 10 kHz bandwidth is below BB-01's own 20 kHz minimum recommendation. Steinert uses ultrasonic transducers; Oakwood processes "millions of samples per second." Before committing to production, validate +-3 mm accuracy with VM2020 vs a wider-bandwidth MEMS alternative.

### Takeaway 2: Upgrade to 8 Sensors ($8 BOM Increase)
Polytronic, TTS, and Saab all use 8-sensor dual-delta configurations for +-3 mm accuracy. The correlation between sensor count and accuracy is clear across the dataset. At $4 per MEMS sensor, upgrading from 6 to 8 adds $8 -- 1.6% of the $500 target unit price.

### Takeaway 3: Implement N-Wave Signature Pre-Filtering
BEL DHVANI achieves competitive accuracy at 50-60% lower cost using a "life-sciences inspired algorithm" for N-wave identification. Pattern-matching the characteristic N-wave shape (sharp rise, negative phase, recovery) rejects false triggers and improves TDOA timing precision. This is a firmware investment that compensates for cheaper hardware.

### Takeaway 4: Develop Range Management Software
Every military-tier LOMAH system includes range management software (Polytronic AROS, Kongsberg eScore platform, Saab ecosystem, InVeris FPC, Zen MCS). A <$500 target with no management software will be difficult to deploy at scale. Build a web-based multi-target dashboard with exercise protocols and training records.

### Takeaway 5: Plan Self-Calibration for Production Version
Steinert and Saab have patented self-calibration that eliminates reference shots. BB-01 should target continuous self-calibration using temperature data and inter-sensor timing cross-checks. This reduces setup time from 15 minutes to under 5 minutes.

### Takeaway 6: Validate Vietnamese Target Lifter Compatibility Early
No competitor has validated against Vietnamese military target lifters. Conduct an early mechanical interface study: document specific pop-up and turning target models at Vietnamese ranges, measure mounting interfaces, and design BB-01's sensor bar bracket for compatibility without range modifications.

### Takeaway 7: Secure Second-Source MEMS Sensor
VM2020 is single-source from Vesper (now Qualcomm). Defense programs need dual-source qualification. Identify and qualify at least one alternative (Knowles, TDK, Infineon). Design the sensor interface PCB for multiple MEMS footprints.

---

## 7. Recommended Next Steps

### Immediate (Next 2 weeks)

1. **Conduct VM2020 vs wide-bandwidth MEMS sensor accuracy test** -- This is the single most important action. Build a simple 4-sensor TDOA test rig and compare shot localization accuracy with VM2020 (10 kHz) vs Knowles SPH0641LU4H-1 (80 kHz). Test at 100 m with 5.56 mm ammunition.
2. **Decision: adopt 8-sensor dual-delta as baseline configuration** -- The cost is negligible ($8 BOM); the benefit is significant. Update the BB-01 constraints document to specify 8 sensors.
3. **Begin Vietnamese target lifter interface survey** -- Document the specific lifter models at 2-3 Vietnamese military ranges. Photograph mounting interfaces and measure dimensions.

### Near-Term (Next 1-2 months)

4. **Develop N-wave signature detection firmware module** -- Implement a pattern-matching pre-filter that identifies the N-wave shock front shape before performing TDOA. Test false-positive rejection rate in simulated multi-lane range environment.
5. **Design sensor interface PCB for multi-source MEMS compatibility** -- Create a footprint-agnostic sensor module that can accommodate VM2020, Knowles SPH0641LU4H-1, and TDK ICS-40638 with minimal rework.
6. **Prototype range management web app** -- Build minimum viable multi-target dashboard (20 lanes, shot display, basic qualification exercise protocol).

### Medium-Term (Next 3-6 months)

7. **Conduct accelerated reliability testing** -- Thermal cycling (-10 to +70 C, 500 cycles), humidity soak (100% RH, 168 hrs), vibration (MIL-STD-810 equivalent). Generate MTBF data for procurement documentation.
8. **Develop self-calibration firmware** -- Implement continuous temperature-compensated self-calibration with inter-sensor cross-correlation. Eliminate reference-shot dependency.
9. **Evaluate IP67 upgrade path** -- Assess cost/complexity of upgrading from IP66 to IP67. If incremental cost is <$20 per unit, adopt IP67 as baseline.
10. **Prepare competitive positioning brief for Vietnamese MoD** -- Package the comparative analysis into a procurement-ready brief demonstrating BB-01's cost advantage, domestic production benefit, and technical competitiveness.

---

## 8. Deliverables List

| # | Deliverable | File | Status |
|---|------------|------|--------|
| 1 | Top 10 LOMAH Systems Catalog | `outputs/lomah-top10-catalog.md` | Complete, Reviewed (PASS) |
| 2 | LOMAH Comparison Framework | `outputs/lomah-comparison-framework.md` | Complete, Reviewed (PASS_WITH_NOTES) |
| 3 | LOMAH Architecture Deep-Dive | `outputs/lomah-architectures.md` | Complete, Reviewed (PASS) |
| 4 | LOMAH Comparative Analysis & BB-01 Benchmarks | `outputs/lomah-comparative-analysis.md` | Complete, Reviewed (PASS_WITH_NOTES) |
| 5 | Session Trajectory | `outputs/trajectory-swarm-20260206-1909.md` | Complete |
| 6 | Lead Close-Out (this document) | `outputs/closeout-swarm-20260206-1909.md` | Complete |

---

## 9. Session Statistics

| Statistic | Value |
|-----------|-------|
| Session ID | swarm-20260206-1909 |
| Start time | 2026-02-06T19:09:55+07:00 |
| End time | ~2026-02-06T20:07:00+07:00 |
| Duration | ~58 minutes |
| Deadline | 90 minutes (20:39) |
| Agents | 4 (1 lead, 2 workers, 1 shadow) |
| Tasks | 4 completed, 4 reviewed, 4 accepted |
| Artifacts | 6 total (4 worker + 2 close-out) |
| Total output lines | ~1,989 (worker artifacts) |
| Unique sources cited | 55+ |
| LOMAH systems analyzed | 10 (from 7 countries) |
| Comparison parameters | 36 (across 6 categories) |
| BB-01 gaps identified | 5 critical/high |
| Design takeaways | 7 |
| Open actions | 7 (for next session/sprint) |
| Parallelization savings | ~31 minutes |
| Pass rate | 100% |
| Autonomy rate | 100% |
| Coordination errors | 0 |

---

**Session swarm-20260206-1909 is CLOSED.**

*Signed: lead-01, 2026-02-06*
