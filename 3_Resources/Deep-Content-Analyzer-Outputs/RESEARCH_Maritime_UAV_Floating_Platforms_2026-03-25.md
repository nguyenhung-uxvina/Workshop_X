---
created: 2026-03-25
source: research-pipeline-v3
notebook: uav-float
topic: "Floating device — UAV hạ cánh/cất cánh từ mặt nước cho maritime ops"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_s: 5
  tier_a: 6
  tier_b: 8
  tier_c: 0
  pro_ratio: "52%"
sources_analyzed:
  - title: "Precision Landing Tests of Tethered Multicopter on Moving Landing Pad"
    tier: S
    url: "https://www.mdpi.com/1424-8220/23/4/2016"
  - title: "Drone Carrier: Integrated USV (4m×7m catamaran, 4 UAVs)"
    tier: S
    url: "https://arxiv.org/html/2501.12869v1"
  - title: "Autonomous UAV Landing Approach for Marine Operations"
    tier: S
    url: "https://ieeexplore.ieee.org/document/10244606/"
  - title: "Manipulator-Assisted Multiple UAV Landing System for USV"
    tier: S
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0029801824006437"
  - title: "US Patent 12,037,095 — Hybrid Aquatic UAV & Submersible"
    tier: S
    url: "https://patents.justia.com/patent/12037095"
  - title: "Airolit Floating Device for UAVs"
    tier: A
    url: "https://airolit.com/floating-device/"
  - title: "Teledyne FLIR SkyCarrier Autonomous UAS LARS"
    tier: A
    url: "https://defense.flir.com/about/news/teledyne-flir-defense-unveils-skycarrier-autonomous-uas-launch-and-recovery-platform-at-dsei-in-london/"
  - title: "Elistair Tethered Drone on USV — SMAUG Project"
    tier: A
    url: "https://www.defenseadvancement.com/news/elistair-tethered-drone-integrated-with-usv-for-maritime-surveillance-project/"
  - title: "STABLE AS Gyro-Stabilized Landing Pads"
    tier: A
    url: "https://www.unmannedsystemstechnology.com/company/stable-as/"
  - title: "SwellPro SplashDrone 4 (IP67, self-righting)"
    tier: A
    url: "https://www.swellpro.com/pages/splashdrone-4"
  - title: "Fly4Future Waterproof Drones for Maritime"
    tier: A
    url: "https://fly4future.com/development-and-prototyping/waterproof-drones-for-marine-operations/"
  - title: "Novielli Yachts Drone Support Boats"
    tier: B
    url: "https://novielliyachts.com/blogs/news/drone-launch-recovery-support-boats-unlocking-future-focused-government-missions"
  - title: "Aeromao VT Naut Water Landing Drone"
    tier: B
    url: "https://dronelife.com/2023/12/13/aeromaos-vt-naut-water-landing-drone-bridging-the-gap-between-land-and-sea/"
  - title: "HEISHA Auto-Stabilized Landing Platform"
    tier: B
    url: "https://heishatech.com/revolutionary-self-leveling-drone-landing-pad-unveiled-precision-docking-on-any-terrain/"
  - title: "Restube Automatic Floatation Device"
    tier: B
    url: "https://influentialdrones.com/products/restube-automatic-drone-payload-floatation-system"
  - title: "Elistair/SMAUG European Maritime Security"
    tier: B
    url: "https://elistair.com/company-news/an-autonomous-lookout-for-european-maritime-security/"
  - title: "JUMP 20 VTOL Landing on Navy Ship (YouTube)"
    tier: B
    url: "https://youtube.com/watch?v=KKEEu1ZUkgU"
  - title: "Autonomous Shipboard Landing (GWU Lab, YouTube)"
    tier: B
    url: "https://youtube.com/watch?v=_WXyo45Oo1Y"
  - title: "Drone Launch/Land While Solo Sailing (YouTube)"
    tier: B
    url: "https://youtube.com/watch?v=tYLTFNjuy1M"
---

# Research: Maritime UAV Floating Platforms — Water-Based Launch & Recovery

> 19 sources, --deep analysis, NLM notebook: uav-float
> Triggered by: Airolit LinkedIn post → CEO interest in floating device for maritime UAV ops

---

## 1. Core Design Principles (from 6-Question Deep Analysis)

### P1: Active Motion Compensation ★★★
Platforms must counteract roll, pitch, heave. Gyro-stabilized mechanisms compensate up to 15-30°. STABLE AS uses computer-controlled electrical actuators. HEISHA compensates up to 15° slopes.
- **Source:** STABLE AS [Tier A], HEISHA [Tier B], SkyCarrier [Tier A]

### P2: Relative Multi-Sensor Localization ★★★
GNSS unreliable at sea → local coordinate tracking via UWB transceivers, LiDAR, downward-facing vision cameras (QR codes, AprilTags, NIR beacons). Drone Carrier (arXiv) uses 6 UWB transceivers + QR landing markers.
- **Source:** Drone Carrier arXiv [Tier S], SkyCarrier [Tier A], MDPI precision landing [Tier S]

### P3: Environmental Resilience & Buoyancy ★★★
IP67 waterproofing, anti-corrosion coatings (SeaShield), buoyancy features: integrated floats (SwellPro), self-righting, emergency CO2 flotation (Airolit, Restube).
- **Source:** SwellPro [Tier A], Airolit [Tier A], Fly4Future [Tier A], Restube [Tier B]

### P4: Autonomous Phase Management ★★
Transition between flight → docking must be automated. "Follow-me" modes, velocity-matching algorithms. SkyCarrier: 1 operator manages up to 16 drones.
- **Source:** SkyCarrier [Tier A], MDPI [Tier S]

---

## 2. System Archetypes

### Archetype A: "Drone in a Box" (DiaB)
Enclosed, self-leveling container on deck. Auto-deploy, act as hangar + charging station. SkyCarrier = flagship example. Needs ~1.2m × 0.8m min deck space.
- **Best for:** Ships ≥12m with dedicated drone ops area
- **NOT suitable for:** 8m LARS vessel (deck occupied by UUV + LARS)

### Archetype B: Amphibious / Water-Landing Drone
Bypass complex landing pads — drone lands directly on water, floats, retrieved by crew with net/hook. SwellPro SplashDrone 4 (IP67, self-righting). Fly4Future custom waterproof platforms.
- **Best for:** Small vessels, minimal deck space, intermittent ops
- **MOST SUITABLE for VN-XUONG-UUV** (zero deck space required)

### Archetype C: USV-UAV "Mothership" Team
USV acts as mobile carrier for drones. Drone Carrier (arXiv): 4m×7m catamaran, 4 DJI M300s, SS 3 capable, GNSS-denied. Elistair/SMAUG: tethered drone on USV for persistent surveillance.
- **Best for:** Dedicated UAV carrier platforms
- **Future option for WX:** Separate small USV as drone carrier alongside LARS vessel

### Archetype D: Float Kit Add-On (Emergency)
Retrofit float kit on existing drone. Airolit: pressure-triggered auto-inflate CO2, strobe light 24h, reusable. Restube: water-activated CO2 cartridge.
- **Best for:** Emergency recovery of non-waterproof drones
- **Complementary:** Add float kit to ANY drone as insurance

---

## 3. Failure Modes & Warnings

| # | Failure Mode | Consequence | Mitigation | Confidence |
|---|-------------|-------------|------------|------------|
| FM-1 | Roll/pitch + wind gusts during touchdown | Crash on deck, damage to LARS/UUV | Water landing bypasses deck entirely | ★★★ |
| FM-2 | GNSS denial/jamming at sea | Position loss, uncontrolled flight | UWB + visual markers (QR/AprilTag) | ★★★ |
| FM-3 | Manual catch on moving vessel | Crew injury, drone loss | Eliminate manual ops — water land or auto-dock | ★★★ |
| FM-4 | Saltwater corrosion on electronics | System failure within weeks | IP67 + SeaShield coating + freshwater rinse SOP | ★★ |
| FM-5 | Cable/rotor catch on LARS rigging | Drone + LARS damage | Water landing away from vessel, or tethered ops with clear arc | ★★ |

---

## 4. WX-Specific Analysis: Drone on VN-XUONG-UUV

### Recommended Approach: Waterproof Water-Landing Drone

**Rationale:**
- 8m vessel with 550kg UUV + LARS = NO free deck space for landing pad
- SS 3 = too rough for manual catch (FM-3)
- 3 crew already assigned (helmsman/LARS/UUV) — no spare hands for drone ops
- Water landing = zero deck footprint, zero integration risk with LARS

### COTS Options Under $10K

| Product | Type | Price Est. | Key Specs | WX Fit |
|---------|------|-----------|-----------|--------|
| **SwellPro SplashDrone 4** | Waterproof multirotor | ~$2,000-3,500 | IP67, self-righting, 30 min flight, 2 kg payload, float on water | ★★★ HIGH |
| **Fly4Future custom** | Waterproof multirotor | ~$5,000-8,000 | IP67, EO/IR payload, float kit integrated, saltwater rated | ★★ MED |
| **DJI M300 + Airolit Float Kit** | Standard drone + float | ~$8,000-10,000 | Professional platform, CO2 auto-inflate backup, not waterproof native | ★ LOW (float = emergency only) |
| **Restube floatation add-on** | Float kit for any drone | ~$200-400 | CO2 auto-inflate, reusable, add to existing drone | ★★ COMPLEMENT |

### Integration with LARS Vessel

| Concern | Risk | Solution |
|---------|------|----------|
| Deck space | NONE | Drone launches from water or hand-launched by OP2, lands on water |
| Power | LOW | Charge batteries from vessel 24V system (existing) |
| Storage | LOW | Waterproof case in cabin or under console |
| Cable interference | MEDIUM | Launch/recover drone AWAY from stern (LARS zone) — forward or beam |
| Crew workload | MEDIUM | OP2 (UUV operator) doubles as drone pilot during transit phases only |
| EMI with UUV controller | LOW-MEDIUM | Standard 2.4 GHz drone vs tether signal — test required |

### Operational Concept

```
DRONE OPS ON VN-XUONG-UUV (secondary mission)
==============================================

Phase A: TRANSIT (drone useful)
  OP2 hand-launches waterproof drone from midship
  Drone provides aerial surveillance of ops area
  Drone lands on water when needed → float → OP2 retrieves with net

Phase B: LARS OPS (drone NOT useful — stow)
  During UUV launch/recovery: drone STOWED in case
  All crew focused on LARS — no drone ops
  Exception: tethered drone for overwatch (future, needs Elistair)

Phase E: RETURN (drone useful)
  Post-mission area survey / documentation
  Drone water-lands alongside vessel → retrieve
```

---

## 5. Technology Evolution Direction

- **Moving from:** Manual piloting, GNSS-dependent, single-drone, weather-limited
- **Moving toward:** Fully autonomous swarms, GNSS-denied capable, multi-domain (air+water+sub), persistent tethered ops
- **Key trend:** USV-UAV "mothership" teams (Elistair/SMAUG, Drone Carrier arXiv)
- **WX opportunity:** VN-XUONG-UUV is ALREADY a USV-UUV team. Adding UAV = triple-domain heterogeneous system (USV + UUV + UAV) — unique in VN defense market.

---

## 6. Patent Landscape

| Patent | Title | Assignee | Filed | Status | FTO Risk |
|--------|-------|----------|-------|--------|----------|
| US 12,037,095 | Hybrid aquatic UAV & submersible vehicle | N/A | 2024 | Active | LOW — covers air-water-sub transition, not WX's use case (separate drone + UUV) |

**FTO Assessment:** LOW risk. WX is adding a COTS waterproof drone to an existing vessel — no patentable integration. The hybrid patent covers single-vehicle air-water transition, which WX is NOT pursuing.

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 21 |
| Selected by CEO | 19 |
| Tier S (Papers + Patents) | 5 |
| Tier A (OEM/Authority) | 6 |
| Tier B (Professional) | 8 |
| Tier C (Community) | 0 |
| Pro ratio (S+A/total) | 58% |
| Insights extracted | 14 |
| ★★★ HIGH confidence | 6 |
| ★★ MED confidence | 5 |
| ★ LOW confidence | 3 |
| Galaxy candidates | 2 ready, 1 needs verification |
| NLM notebook | uav-float (19 sources) |
| NLM gaps | 0 |

### Coverage Gaps
- **Pricing data:** Most OEM product pages don't list prices. SwellPro is best-documented. Others need dealer inquiry.
- **Vietnam-specific:** No VN defense drone-from-vessel operations found. WX would be first mover.
- **Tethered drone on small vessel:** Elistair only tested on USVs and larger ships. 8m vessel tethered ops = unknown.

---

*Research Pipeline v3.0 --deep | 19 sources | NLM notebook: uav-float | 2026-03-25*
