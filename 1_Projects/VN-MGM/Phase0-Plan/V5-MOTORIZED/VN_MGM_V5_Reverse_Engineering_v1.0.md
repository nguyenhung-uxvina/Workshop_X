---
created: 2026-04-10
type: reverse-engineering
method: D-M-I-R 4-Layer RE + Reverse Morphological Chart
version: v1.0
project: VN-MGM
variant: V5-MOTORIZED
status: complete
sources: "3 MetaLearning files [L3], VN-RCWS archive [L4], V-SMASH-R proposal [L4], 8 competitor products [L4], web research [L4]"
---

# Reverse Engineering — Motorized Weapon Mounts & Light RCWS

> **Purpose:** Understand how existing products solve "motorized weapon pointing" to inform V5-MOTORIZED design.
> **Scope:** Products between V1-MANUAL ($3-5K) and full RCWS ($100-500K) — the "pre-RCWS" gap.

---

## 1. Market Hierarchy — Where V5 Sits

```
COMPLEXITY / COST

$500K+ ┤ LEVEL 4: AUTONOMOUS (AI targeting)
       │   Elbit iFeel, ASELSAN SARP AI
       │
$100-  ┤ LEVEL 3: FULL RCWS (remote + stabilized + optics + FCS)
$500K  │   Kongsberg CROWS II, Rafael Samson, ASELSAN SARP
       │   FN deFNder, Saab TrackFire, Rheinmetall Guardian
       │
$20-   ┤ LEVEL 2.5: LIGHT RCWS (remote + basic optics, no gyro)
$100K  │   Önder Defense, Valhalla Midgard, V-SMASH-R (WX planned)
       │
$10-   ┤ ★ LEVEL 2: MOTORIZED MOUNT (servo drive, no optics/FCS) ← V5 HERE
$20K   │   ★ NO KNOWN PRODUCT IN THIS EXACT NICHE ★
       │
$5-    ┤ LEVEL 1.5: PROTECTED MOUNT (manual + armor)
$20K   │   Cupola, gun shield, enclosed turret
       │
$1-5K  ┤ LEVEL 1: MANUAL MOUNT (no motor, no armor)
       │   VN-MGM V1 (300 shipped), standard pintle/pedestal
       │
    $0 ┤
```

**Critical finding:** Level 2 "motorized mount without optics/FCS" = **MARKET GAP.** All manufacturers jump from manual mount directly to full RCWS. Nobody sells "just add motors to your existing mount." V5-MOTORIZED fills this gap.

---

## 2. Competitor Products — Reverse Morphological Chart

### 2.1 Full RCWS Benchmark (Level 3 — what V5 is NOT, but learns from)

| Sub-Function | Kongsberg CROWS II | ASELSAN SARP | FN deFNder Med | Saab TrackFire | Rafael Samson |
|---|---|---|---|---|---|
| **Az drive** | DC servo + harmonic gearbox | Servo + planetary | Servo + worm | Servo + belt | Servo + direct |
| **El drive** | DC servo + linear actuator | Servo + sector gear | Servo + screw | Servo + belt | Servo + rack |
| **Az rate** | 60°/s | 90°/s | 80°/s | 100°/s | 60°/s |
| **El rate** | 30°/s | 45°/s | 40°/s | 50°/s | 30°/s |
| **Az range** | 360° continuous | 360° | 360° | 360° | 360° |
| **El range** | -20°/+60° | -20°/+60° | -40°/+85° | -20°/+60° | -20°/+60° |
| **Stabilization** | 2-axis gyro | 2-axis gyro | 2-axis gyro | SILOS (independent) | 2-axis gyro |
| **Sensor** | Day CCD + thermal + LRF | Day + thermal | Day + thermal | Day + thermal + LRF | Day + thermal + LRF |
| **FCS** | Ballistic computer | Auto-track + FCS | FCS | Auto-track + FCS | FCS + missile |
| **Recoil mgmt** | Recoil absorber 85% | 80% | 85% | Soft mount | Recoil absorber |
| **Manual backup** | ❌ No manual mode | ❌ No | ❌ No | ❌ No | ❌ No |
| **Fail-safe** | E-stop + power-off safe | E-stop | E-stop + lock | E-stop | E-stop + lock |
| **Weight** | 172 kg | 145 kg | 200 kg | 130 kg | 180 kg |
| **Power** | 24V DC, ~500W | 24V DC | 28V DC | 24V DC | 28V DC |
| **Price** | $150-250K | $100-200K | $150-250K | $120-200K | $200-400K |

### 2.2 Light RCWS / Simplified Systems (Level 2.5 — closest to V5)

| Sub-Function | Önder Defense 12.7mm | Valhalla Loki | V-SMASH-R LITE (WX planned) | Rheinmetall Guardian |
|---|---|---|---|---|
| **Az drive** | Electric servo | Electric servo | DC servo | Electric servo |
| **El drive** | Electric servo | Electric servo | DC servo | Electric servo |
| **Az rate** | ~40-60°/s [L4] | ~30-45°/s [L5] | ≥20°/s | ~60°/s |
| **El range** | -30°/+60° | Unknown | -20°/+60° | ±20° |
| **Stabilization** | None | None | 2-axis gyro (passive opt.) | None/optional |
| **Sensor** | Day camera (basic) | Iron sight + camera opt. | Day camera + thermal opt. | Day + thermal |
| **Manual backup** | ✅ Yes (manual + remote) | ✅ Yes | ✅ Yes (tripod fallback) | Unknown |
| **Recoil** | Mount absorbs | Mount absorbs | Soft mount | Mount absorbs |
| **Weight** | <250 kg | Lightweight [L5] | ≤10 kg (LITE config) | 200-400 kg |
| **Power** | 24V DC | 24V DC | Battery (portable) | 24V DC |
| **Price** | $30-80K [L5] | $20-50K [L5] | $3-8K (LITE) | $50-100K [L5] |

### 2.3 Manual Mounts (Level 1 — what V5 upgrades from)

| Sub-Function | VN-MGM V1 (WX, 300 shipped) | Standard M3 Tripod (US) | PKM Cradle | DShK Wheel Mount |
|---|---|---|---|---|
| **Az drive** | Manual (hand crank) | Manual (traverse handle) | Manual (shoulder) | Manual (handles) |
| **El drive** | Manual (hand crank) | Manual (T&E mechanism) | Manual (shoulder) | Manual (gear) |
| **Az rate** | ~30°/s (human limit) | ~20-30°/s | ~60°/s (shoulder, light) | ~20°/s (heavy) |
| **Manual backup** | N/A (IS manual) | N/A | N/A | N/A |
| **Recoil** | Rigid mount, 50 kN | Tripod + soft mount | Bipod + body | Cradle + springs |
| **Weight** | ≤75 kg | 20 kg (tripod only) | 9 kg | 25 kg |
| **Price** | $3-5K | $1-2K | $200-500 | $500-2K |

---

## 3. Key Design Patterns Extracted

### Pattern 1: Drive Architecture

```
OBSERVED PATTERNS:

A. FULL RCWS (Kongsberg, ASELSAN, FN):
   Motor → Harmonic/Planetary Gearbox → Slewing Ring → Weapon
   Ratio: 100:1 to 500:1
   Torque: 50-200 Nm output
   Key: High ratio for precision + high torque for stabilization loads

B. LIGHT RCWS (Önder, Valhalla):
   Motor → Worm/Spur Gearbox → Pintle/Bearing → Weapon
   Ratio: 30:1 to 100:1
   Torque: 20-80 Nm output
   Key: Self-locking worm gear → no brake needed when stopped

C. V5-MOTORIZED APPROACH (WX proposed):
   Motor → Worm Gear → EM Clutch → Slewing Ring → Weapon
                              ↕
                     Manual Handcrank (bypass)
   Key: EM clutch is UNIQUE — no competitor has motor↔manual switch
   This is V5's differentiator vs all RCWS: TRUE DUAL-MODE OPERATION
```

### Pattern 2: Manual Backup (CRITICAL GAP IN INDUSTRY)

| Product | Manual Backup? | Method | Transition Time |
|---|---|---|---|
| Kongsberg CROWS II | ❌ NO | Power off → weapon locked | N/A — must restore power |
| ASELSAN SARP | ❌ NO | E-stop → weapon locked | N/A |
| FN deFNder | ❌ NO | E-stop → lock | N/A |
| Saab TrackFire | ❌ NO | E-stop → lock | N/A |
| Rafael Samson | ❌ NO | E-stop → lock | N/A |
| **Önder Defense** | ✅ YES | Manual + remote dual mode | Unknown |
| V-SMASH-R LITE | ✅ YES | Folding tripod (detach from vehicle) | ~30-60s |
| **VN-MGM V5** | ✅ **YES** | **EM clutch auto-disengage → manual crank** | **≤1s (auto), ≤5s (manual)** |

**MASSIVE COMPETITIVE INSIGHT:** All premium RCWS (CROWS, SARP, deFNder, TrackFire, Samson) have **NO MANUAL BACKUP.** Power loss = weapon dead. V5's EM clutch fallback is **UNIQUE in the market** and directly addresses a real operational gap.

**Vietnamese Navy operational reality:** Ship power is unreliable (generators, switching, combat damage). Manual backup is not a "nice to have" — it's a **survival feature.**

### Pattern 3: Recoil Management

| Approach | Products | Recoil Reduction | Complexity |
|---|---|---|---|
| **Rigid mount** | VN-MGM V1, DShK wheel | 0% (full transmission to platform) | Lowest |
| **Elastomer dampers** | Önder, Valhalla | 30-50% | Low |
| **Recoil absorber** (hydraulic/spring) | CROWS, deFNder, Samson | 80-85% | High |
| **Soft mount** (elastomeric cradle) | TrackFire, V-SMASH-R | 40-60% | Medium |

**V5 decision:** Inherit V1 rigid mount (proven 50 kN, 300 units). Add elastomer coupling between motor/gearbox and mount structure → protect motor from recoil shock without redesigning mount. **Cost: +$50-100 per unit.** This is Pattern 1B + Pattern 3B hybrid.

### Pattern 4: Control Architecture

```
LEVEL 3 RCWS (sophisticated):
  Joystick → FCS Computer → Servo Drive → Motor → Weapon
  + Gyro IMU → FCS (stabilization compensation)
  + Camera → FCS (auto-track)
  + Ballistic computer → FCS (lead angle)
  Latency: 5-20ms total loop

LEVEL 2.5 LIGHT RCWS (simplified):
  Joystick → Controller → Servo Drive → Motor → Weapon
  + Camera (display only, no auto-track)
  Latency: 10-30ms

★ V5-MOTORIZED (Level 2, pre-RCWS):
  Joystick → STM32 → Servo Drive → Motor → [EM Clutch] → Weapon
  + Encoder (position feedback for hold + data output)
  No camera, no FCS, no stabilization
  Latency: 10-30ms (adequate for manual aim)
  
  DATA PORT: RS485/CAN → future camera/FCS/AICC connection
  This is the "UPGRADE PORT" — V5 becomes RCWS by adding peripherals
```

### Pattern 5: Weapon Interchange

| Product | Multi-weapon? | Method | Swap Time |
|---|---|---|---|
| CROWS II | ✅ (M2, MK19, M240, M249) | Cradle adapter + quick-release | 15-30 min |
| SARP | ✅ (multiple) | Modular cradle | 10-20 min |
| deFNder | ✅ (7.62-40mm) | Cradle system | 15-30 min |
| Önder | ✅ (12.7, 7.62, 40mm) | Modular config | Unknown |
| **VN-MGM V5** | ✅ | **V3-ADAPTER-KIT** (already designed) | **<5 min** (bolt-on) |

V5 inherits V1's weapon interface + V3-ADAPTER-KIT → multi-weapon from day 1. Advantage: WX already has 300 V1 mounts with same interface → V5 is backward-compatible.

---

## 4. Technology Decision Matrix — Informed by RE

Based on RE analysis, recommended V5 configuration:

| Sub-Function | Options Observed | V5 Selection | Rationale |
|---|---|---|---|
| **Az motor** | DC brushed / BLDC / stepper | **BLDC** | Long life (no brushes), marine-suitable, WX USV experience |
| **El motor** | DC brushed / BLDC / linear actuator | **BLDC** | Same as azimuth (commonality, spares) |
| **Az gearbox** | Harmonic / planetary / worm / belt / direct | **Worm** | Self-locking (critical!), high ratio, quiet, V1 elevation precedent |
| **El gearbox** | Sector / screw / worm / belt | **Worm** | Self-locking, commonality with azimuth |
| **Clutch** | None (all RCWS) / mechanical / **EM NC** | **EM NC** | UNIQUE: fail-safe auto-manual. No competitor has this. |
| **Encoder** | Incremental / absolute / resolver | **Incremental + index** | CUAV-SIM SS1 proven, cost-effective, adequate for V5 |
| **Controller** | PLC / servo drive / custom FPGA | **Dual servo drive + STM32 master** | Modular, each axis independent, STM32 for logic + safety |
| **Joystick** | Analog 2-axis / proportional / game controller | **Industrial 2-axis + speed toggle** | Ruggedized, proportional, variable speed (coarse/fine) |
| **Power** | 24V / 28V / 48V | **24-48V wide input** | Ship compatibility, V1 customers have 24V or 48V systems |
| **Recoil protect** | None / elastomer / hydraulic / soft mount | **Elastomer coupling** motor↔mount | Protect motor from V1's 50 kN rigid mount recoil. Simple, proven. |
| **Data output** | None / RS485 / CAN / Ethernet | **RS485 + CAN dual** | Future upgrade port for camera/FCS/AICC. CAN = military vehicle standard. |
| **Manual backup** | None / mechanical lever / EM clutch | **EM clutch auto + manual button** | SC-V5-1 mandatory. Auto on power loss. Manual button for elective switch. |

---

## 5. Competitor Cost Structure Analysis

### 5.1 BOM Decomposition (estimated from RE)

| Component | Full RCWS ($150K) | Light RCWS ($50K) | V5-MOTORIZED ($14K) |
|---|---|---|---|
| Mount structure | $5-10K | $3-5K | **$2.5-4K** (= V1, proven) |
| Servo motors (×2) | $5-15K | $2-5K | **$0.5-1.5K** (COTS BLDC) |
| Gearbox (×2) | $5-15K | $2-5K | **$0.3-1K** (COTS worm) |
| EM Clutch (×2) | N/A | N/A | **$0.2-0.5K** (COTS EM) |
| Encoders (×2) | $1-3K | $0.5-1K | **$0.1-0.3K** (COTS incremental) |
| Controller + drives | $5-15K | $2-5K | **$0.3-0.8K** (STM32 + servo drives) |
| Joystick + cable | $1-3K | $0.5-2K | **$0.1-0.3K** (COTS industrial) |
| Optics (day + thermal) | $20-50K | $5-15K | **$0** (none — Option A) |
| Fire control computer | $10-30K | $2-5K | **$0** (none — Option A) |
| Stabilization (gyro) | $10-20K | $0-5K | **$0** (none — Option A) |
| Cables + connectors | $1-3K | $0.5-1K | **$0.2-0.5K** |
| Sealing (IP65) | $2-5K | $1-2K | **$0.3-0.8K** |
| UPS battery | $0.5-2K | $0.3-1K | **$0.2-0.5K** |
| **TOTAL BOM** | **$65-170K** | **$18-50K** | **$5-10K** |
| **Sell price** | $150-500K | $30-100K | **$10-18K** |
| **Margin** | 50-70% | 40-60% | **50-55%** |

### 5.2 WX Cost Advantage Sources

| Factor | Import RCWS | V5-MOTORIZED | Savings |
|---|---|---|---|
| No optics/FCS | $30-80K | $0 | **100%** (not needed for pre-RCWS) |
| No stabilization | $10-20K | $0 | **100%** (added in N11-STABILIZED later) |
| V1 mount reuse | $5-10K (new) | $2.5-4K (proven, amortized) | **50%** |
| VN labor cost | Western rates | VN rates | **80%** CNC/assembly |
| COTS components | Mil-spec custom | Industrial COTS | **60-80%** motor/gearbox/encoder |
| No middleman | Importer markup | Direct from WX | **20-40%** |

**V5 at $10-18K is NOT "cheap RCWS." It's "motorized V1" — completely different product category.** Competitors who sell $100K+ RCWS cannot/will not make a $14K motorized-only mount. Different margin structure, different sales channel, different support model.

---

## 6. Lessons Learned from RE (Design Implications)

### 6.1 DO (proven patterns to adopt)

| # | Lesson | Source | V5 Application |
|---|---|---|---|
| 1 | **Worm gear for self-lock** — every Level 2-3 product uses self-locking mechanism | All RCWS | Use worm gear, not planetary |
| 2 | **24V DC power standard** — universal across military vehicles/ships | All RCWS | 24-48V wide input |
| 3 | **Modular weapon interface** — quick-change cradle is standard | CROWS, SARP, deFNder | V3-ADAPTER-KIT compatible |
| 4 | **E-stop as HW interrupt** — every system has hardwired emergency stop | All RCWS | HW E-stop, not software |
| 5 | **Elastomer coupling for recoil** — protects precision components | TrackFire soft mount | Elastomer between motor/gearbox and mount |
| 6 | **Data bus for future upgrade** — RS485/CAN on every modern system | CROWS (1553), SARP (CAN) | RS485 + CAN dual port |

### 6.2 DON'T (failure modes to avoid)

| # | Lesson | Source | V5 Avoidance |
|---|---|---|---|
| 1 | **No manual backup = operational failure** — all premium RCWS lock weapon on power loss | CROWS, SARP, deFNder | **SC-V5-1: EM clutch mandatory** |
| 2 | **Over-engineering drives** — harmonic gearbox is $3-5K per axis, overkill for V5 | CROWS | Use $100-300 worm gear instead |
| 3 | **Cable-cut = weapon unsafe** — if joystick cable breaks, weapon must safe | V-SMASH-R safety | Add cable-cut detection → motor stop + clutch release |
| 4 | **Recoil damages encoder** — shock loads break encoder if rigidly mounted | Known RCWS issue | Vibration-isolate encoder, or use shock-rated encoder |
| 5 | **Water ingress through cable glands** — #1 field failure in marine mounts | Field experience [L2-CEO] | Use marine-grade cable glands, test at IP65 |

### 6.3 V5 UNIQUE FEATURES (no competitor has)

| # | Feature | Why Unique | Value |
|---|---|---|---|
| 1 | **EM clutch dual-mode** (motor ↔ manual) | All RCWS are motor-ONLY. No fallback. | Weapon NEVER dies — power loss = auto manual |
| 2 | **Backward-compatible with V1** | No competitor upgrades manual to motorized in-field | 300 existing mounts can be retrofitted (N12-RETROFIT-KIT) |
| 3 | **No optics = no ITAR/export restriction** | Optics/FCS trigger export controls. Motor-only = unrestricted. | Export to ASEAN without license complexity |
| 4 | **Upgrade port (RS485 + CAN)** | Purpose-built for future camera/FCS/AICC add-on | Customer buys V5 now, upgrades to RCWS later (incremental spend) |
| 5 | **$10-18K price point** | Gap between $5K manual and $50K+ RCWS = nobody competes here | New market category |

---

## 7. Reverse Morphological Chart — V5 Design Space

| Sub-Function | VN-MGM V1 (WX) | CROWS II (Kongsberg) | SARP (ASELSAN) | Önder 12.7 | V-SMASH-R LITE | **V5-MOTOR (WX)** |
|---|---|---|---|---|---|---|
| Az drive | Manual crank | DC servo + harmonic | Servo + planetary | Electric servo | DC servo | **BLDC + worm** |
| El drive | Manual crank | DC servo + linear | Servo + sector | Electric servo | DC servo | **BLDC + worm** |
| Az rate | ~30°/s (human) | 60°/s | 90°/s | ~40-60°/s | ≥20°/s | **60-90°/s** |
| Manual backup | N/A (IS manual) | ❌ None | ❌ None | ✅ Yes | ✅ Tripod detach | **✅ EM clutch auto** |
| Recoil | Rigid 50 kN | Absorber 85% | Absorber 80% | Mount absorbs | Soft mount | **Rigid + elastomer coupling** |
| Weapon swap | V3-ADAPTER-KIT | Cradle adapter | Modular cradle | Modular | Bolt-on | **V3-ADAPTER-KIT** |
| Sensor | Iron sight | Day + thermal + LRF | Day + thermal | Day camera | Day camera opt. | **Iron sight (none)** |
| FCS | None | Ballistic computer | Auto-track + FCS | None | V-SMASH FCS | **None (upgrade port)** |
| Stabilization | None | 2-axis gyro | 2-axis gyro | None | Passive + gyro opt. | **None (upgrade port)** |
| Controller | None | FCS computer | FCS computer | Controller | STM32 | **STM32 + dual servo drive** |
| Data output | None | MIL-STD-1553 | CAN bus | Unknown | CAN bus | **RS485 + CAN (upgrade port)** |
| E-stop | None | HW interrupt | HW interrupt | Unknown | Cable-cut safe | **HW interrupt + cable-cut safe** |
| Power | None | 24V DC ~500W | 24V DC | 24V DC | Battery | **24-48V DC + 10 min UPS** |
| IP rating | IP65 (marine) | IP67 | IP67 | Unknown | IP54 | **IP65 (marine)** |
| Weight | ≤75 kg | 172 kg | 145 kg | <250 kg | ≤10 kg | **≤100 kg** |
| Price | $3-5K | $150-250K | $100-200K | $30-80K | $3-8K | **$10-18K** |

---

## 8. V5 Upgrade Path — From RE Analysis

```
CUSTOMER UPGRADE JOURNEY (Musk + Hwang incremental):

STEP 0: Customer has V1-MANUAL (300 deployed)
        ↓ $3-6K N12-RETROFIT-KIT (bolt motor onto V1)
        or $10-18K V5 (new motorized mount)
        
STEP 1: V5-MOTORIZED (motor + joystick + encoder)
        Customer gets: +speed, +endurance, +accuracy, fail-safe backup
        WX gets: $10-18K + installed base for upgrade path
        ↓ $3-8K camera module add-on (future)
        
STEP 2: V5 + DAY CAMERA (add-on)
        Customer gets: remote viewing, below-deck operation capability
        ↓ $5-15K thermal camera + FCS module (future)
        
STEP 3: V5 + THERMAL + FCS = LIGHT RCWS
        Customer gets: night capability, AI-assisted aiming
        = V-SMASH-R integration point
        ↓ $5-10K gyro stabilization module (future)
        
STEP 4: V5 + THERMAL + FCS + GYRO = FULL RCWS
        Customer gets: fire-on-the-move, stabilized platform
        = Competitive with CROWS/SARP at 1/10 the price
        
TOTAL CUSTOMER SPEND: $10K → $18K → $26K → $41K → $51K
vs BUYING CROWS UPFRONT: $150-250K
                     
WX CAPTURES: $51K over 3-5 years from 1 customer
             vs $0 if customer can't afford $150K RCWS
```

**This is Hwang disruption in action:** Customer who CAN'T buy a $150K RCWS CAN buy a $14K V5. Then upgrades incrementally. By the time they reach "full RCWS" they've spent $51K with WX — still 70% cheaper than import — and WX has had 3-5 years of relationship + data + field feedback.

---

## 9. Key Takeaways for V5 Development

| # | Takeaway | Impact on V5 |
|---|---|---|
| 1 | **V5 is a NEW market category** — no one sells "motorized-only, no optics" | First-mover advantage. Price the gap ($10-18K). |
| 2 | **EM clutch = killer feature** — no RCWS has manual fallback | Lead with this in sales: "your weapon NEVER dies" |
| 3 | **Upgrade port is strategic** — RS485/CAN enables future revenue from same customer | Design controller with expandable I/O from day 1 |
| 4 | **Worm gear is correct** — self-locking solves "gun drift" when motor stops | Confirm worm efficiency ≥40% (bench test) |
| 5 | **Elastomer coupling is essential** — 50 kN recoil WILL damage motor without isolation | Source 60-70 Shore A elastomer bushings, test at 50 kN |
| 6 | **N12-RETROFIT-KIT serves 300 existing V1** — lower barrier than full V5 | Design V5 motor bracket to fit V1 bolt pattern |
| 7 | **No optics = no ITAR** — V5 can export freely to ASEAN | Export advantage vs all RCWS competitors |
| 8 | **V1 + motor ≠ RCWS in procurement terms** — different budget line | Navy can procure V5 as "mount upgrade," not "weapon system" = faster procurement |

---

*Reverse Engineering v1.0 | VN-MGM V5-MOTORIZED | 8 competitor products × 12 sub-functions | Sources: [L3] MetaLearning, [L4] Archive + Web | 2026-04-10*
