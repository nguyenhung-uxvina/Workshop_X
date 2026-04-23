---
created: 2026-03-25
source: research-pipeline-v3
notebook: uav-float
topic: "Stabilized UAV Landing Pads: STABLE AS + SkyCarrier + SANLAB — Naval Vessel Integration"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_s: 8
  tier_a: 7
  tier_b: 7
  tier_c: 0
  pro_ratio: "68%"
---

# Research: Stabilized UAV Landing Pads — STABLE AS vs SkyCarrier vs SANLAB

> 22 sources, --deep analysis, NLM notebook: uav-float (cumulative 36 sources)
> Follow-up from: Maritime UAV Floating Platforms research (same session)

---

## 1. Specifications Comparison ★★★

| Feature | STABLE AS | Teledyne FLIR SkyCarrier | SANLAB |
|---------|-----------|--------------------------|--------|
| **Dimensions** | Euro Pallet base (1.2×0.8m), customizable | Free-flight: 1.6×0.75×0.8m. Tethered: 1.2m wide | Not specified |
| **Weight** | "Lightweight" (unspecified — custom) | Free-flight: **120 kg**. Tethered: **170 kg** | Not specified |
| **Payload Capacity** | **200-300 kg** drones | SkyRanger R70 (5 kg) + SkyRaider R80D (4.5 kg) | **20-100 kg** |
| **Motion Compensation** | **Up to 30°** (roll, pitch, sideways). Yaw+heave optional | **Up to 20°** | **±15°** (roll & pitch only) |
| **Power** | **12V or 24V DC** (low consumption) | **120V/230V AC** (generator/external) | Not specified |
| **Price** | Not published (custom quote) | Not published (defense procurement) | Not published |
| **Sea State** | "Hostile weather" (unspecified SS #) | Operates at vessel speed ≤50 km/h | "Harsh, high vibration" |
| **Smallest Vessel** | **<5m** (TideWise USV Tupan, 2020) | **7m + 9m RHIB** (Zodiac Milpro) + CB90 | ULAQ KAMA USV |
| **Compliance** | Custom | MIL-810G/H, IP65 | MIL-STD810 compatible |
| **Autonomy** | Fully autonomous with USV | 1 operator → 16 drones, Follow-Me, AIR | Stabilization only |
| **Country** | **Norway** (since 2002) | **USA** (Teledyne FLIR Defense) | **Turkey** |

---

## 2. Small Vessel Integration (<10m) ★★★

### STABLE AS — Best proven for small boats
- **TideWise USV Tupan (<5m):** Delivered 2020, autonomous UAV landing for oil spill detection
- Euro Pallet footprint strapped to deck, weather-protective curtain
- 12/24V DC = no generator needed
- "Lightweight" = key for small vessel stability
- **Quote from TideWise:** "STABLE platform removed most rolling and pitching motions for securing a successful landing"

### SkyCarrier — Proven on RHIB 7-9m
- Tested on Zodiac Milpro 7m/9m + CB90 fast attack craft
- **BUT: 120 kg (free-flight) or 170 kg (tethered)** — significant VCG impact on 8m vessel
- **REQUIRES 120V/230V AC** — needs generator or inverter
- MIL-810G/H, IP65, -20°C to +50°C — military grade
- Fully enclosed box = best weather protection
- **Deliveries Q2 2026** — Norwegian MoD, US Air Force

### SANLAB — Limited small vessel data
- ±15° compensation = weakest of three
- MIL-STD810 compatible
- Integrated on ULAQ KAMA (Turkish armed USV) — larger vessel
- Better suited for medium vessels/land vehicles

---

## 3. Technology Differences ★★★

| Approach | STABLE AS | SkyCarrier | SANLAB |
|----------|-----------|------------|--------|
| **Stabilization** | Sensor-estimated motion + electrical actuators (derived from offshore crane heave compensation) | Active compensation under pad + AI visual markers (NIR beacons, QR, AprilTag) | 2DOF gyro-stabilized, real-time roll/pitch |
| **Drone guidance** | Relies on drone's own navigation | Integrated: NIR beacons + QR + AprilTag + computer vision + dead reckoning | External (drone's responsibility) |
| **Enclosure** | Open platform + weather curtain, or integrated with 3rd party DiaB | Fully enclosed ruggedized box with thermal management | Open platform |
| **Best for** | **High sea states on small vessels** (30° compensation, lightweight, 12/24V) | **Military persistent ops** (16 drones, AIR, GPS-denied, tethered) | **Medium platforms** (radar, antenna, general stabilization) |

### Key Trade-off: Platform Intelligence vs Simplicity
- **SkyCarrier** = "complete system" (pad + drone + C2 + charging + thermal) — highest capability but heaviest, most expensive, needs AC power
- **STABLE AS** = "platform only" (stabilized surface) — works with ANY drone, simplest integration, lightest, lowest power
- **SANLAB** = "stabilizer only" (2DOF mechanism) — most generic, least specialized for maritime

---

## 4. Failure Modes ★★

| System | Failure Mode | Consequence | Severity |
|--------|-------------|-------------|----------|
| STABLE AS | Platform not aligned to drone angle at touchdown → drone slides off | Drone damage/loss | MEDIUM |
| STABLE AS | Data processing latency → platform lag behind vessel motion | Unstable surface during rapid pitch | LOW-MED |
| SkyCarrier | 20° inclination exceeded (SS 4+ on small vessel) → landing rejected | Mission abort, drone loiter | MEDIUM |
| SkyCarrier | AC power loss → system shutdown | Complete loss of drone ops | HIGH |
| SANLAB | ±10°/s velocity exceeded (violent wave impact) → motors overwhelmed | Platform fails to compensate | HIGH on small vessel |
| ALL | Saltwater ingress into actuators/electronics | System failure | MEDIUM (IP65/curtain mitigate) |

---

## 5. VN-XUONG-UUV Assessment ★★★

### Decision Matrix for 8m LARS Vessel

| Criterion | STABLE AS | SkyCarrier | SANLAB | Weight |
|-----------|:---------:|:----------:|:------:|:------:|
| **Power compatible (24V DC, no genset)** | ✅ 12/24V DC | ❌ 120/230V AC | ❓ Unknown | Critical |
| **Weight impact (<50 kg target)** | ✅ "Lightweight" custom | ❌ 120-170 kg | ❓ Unknown | Critical |
| **Motion compensation (SS 3 = ~15-20° roll on 8m)** | ✅ 30° | ⚠️ 20° | ❌ 15° | High |
| **Proven on <10m vessel** | ✅ <5m Tupan | ✅ 7m RHIB | ⚠️ ULAQ (larger) | High |
| **Deck space (stern occupied by LARS)** | ✅ Euro pallet, bow/cabin | ⚠️ 1.6×0.75m box | ❓ Custom | Medium |
| **Autonomous operation** | ✅ Full | ✅ Full (best) | ⚠️ Stabilization only | Medium |
| **Cost (defense budget <$10K for add-on)** | ❓ Custom quote | ❌ Likely >$50K (MIL-grade) | ❓ Custom quote | Medium |
| **TOTAL** | **Best fit** | Overkill for 8m | Insufficient |

### Recommendation

> **STABLE AS is the ONLY viable option for VN-XUONG-UUV** if a stabilized pad is required.
>
> - 12/24V DC native — works with existing vessel power
> - Proven on vessel SMALLER than VN-XUONG-UUV (<5m vs 8m)
> - 30° compensation > 20° SkyCarrier > 15° SANLAB
> - "Lightweight" custom design = minimal VCG impact
> - Euro Pallet footprint can mount on forward deck or cabin roof
> - Works with ANY drone (not locked to Teledyne ecosystem)
>
> **HOWEVER:** Previous research concluded that a **waterproof water-landing drone (SwellPro, ~$2-3.5K) is more practical** for VN-XUONG-UUV because it needs ZERO deck space, ZERO power, ZERO weight. STABLE AS pad only makes sense if:
> (a) WX offers drone ops as a **product feature** (not just internal use), OR
> (b) Customer requires persistent tethered overwatch capability, OR
> (c) Future vessel (>10m) designed with drone pad from Phase 0

### Cost Comparison: Two Approaches

| Approach | Equipment Cost | Weight Added | Deck Space | Power | Complexity |
|----------|---------------|-------------|------------|-------|------------|
| **SwellPro water-landing** | ~$2-3.5K | 0 kg | 0 m² | 0 W | LOW |
| **STABLE AS pad + standard drone** | ~$15-40K (est.) | 30-60 kg (est.) | ~1 m² | 50-100W DC | MEDIUM |
| **SkyCarrier + SkyRanger** | ~$80-200K (est.) | 120-170 kg | 1.2 m² | 500W+ AC | HIGH |

---

## 6. Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 22 |
| Tier S (Papers + Patents) | 8 |
| Tier A (OEM/Authority) | 7 |
| Tier B (Professional) | 7 |
| Pro ratio (S+A/total) | 68% |
| Insights extracted | 12 |
| ★★★ HIGH confidence | 5 |
| ★★ MED confidence | 4 |
| ★ LOW confidence | 3 |
| NLM notebook | uav-float (36 sources cumulative) |
| NLM gaps | 5 (ScienceDirect paywalls + YouTube shorts) |

### Coverage Gaps
- **STABLE AS pricing** — not published. Need direct inquiry: sales@stableonboard.com
- **STABLE AS weight specs** — "lightweight" is marketing, no kg number. Critical for VN-XUONG-UUV stability check.
- **SANLAB pricing and weight** — insufficient data for comparison
- **Sea State rating for STABLE AS** — "hostile weather" is vague, need SS number

---

## Galaxy Candidates (THỊNH H — Hóa)

### ★★★ — Ready for Promotion

| # | Insight | Proposed Title | Cluster |
|---|---------|---------------|---------|
| 1 | Stabilized landing pads have 3 tiers: ±15° (budget), ±20° (military standard), ±30° (extreme). 8m vessel SS 3 needs ≥20° → eliminates budget tier. But the REAL question is whether pad is needed at all — water-landing drone bypasses entire problem for 1/10 cost. | **Stabilization Tier Law — 15°/20°/30° Quyết Định Platform Size, Không Phải Budget** | G (Pahl-Beitz Technical) |

### ★★ — Needs More Evidence

| # | Insight | Missing |
|---|---------|---------|
| 1 | SkyCarrier AC power requirement = hard blocker for small vessels without generator. Power architecture (AC vs DC) is a solution-determining constraint that most OEM marketing doesn't highlight. | Need: more OEM comparisons to confirm this as universal pattern |

---

**CEO decisions needed:**
1. Galaxy promote "Stabilization Tier Law"?
2. Contact STABLE AS for pricing/weight specs? (if drone pad is strategic for WX)
3. Park stabilized pad → proceed with SwellPro water-landing for prototype?

*Research Pipeline v3.0 --deep | 22 sources | NLM notebook: uav-float (36 total) | 2026-03-25*
