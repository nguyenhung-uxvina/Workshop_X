---
created: 2026-04-15
updated: 2026-04-15
type: phase3-layout
project: VN-CUAV-SIM-001
variant: LITE-PA2
pipeline: helix-embody-realize v3.2
block: BA
pahl-beitz: 7.1 Steps 2-6
---

# BA Preliminary Layout — VN-CUAV-SIM-001 LITE PA-2

> **P&B 7.1:** "The preliminary layout is the first step in giving form to the selected concept."
> **COD:** Layout creation = **Core (CEO)**. AI prepares constraints + template. CEO decides arrangement.

## 1. Bounding Constraints (from B0)

| Constraint | Value | Source |
|-----------|-------|--------|
| Room | 6 × 8 m, ceiling ≥3 m | G-01 |
| Weapon station + motion | ≤2 × 2 m footprint | G-04 |
| Screen | 4 m wide × 2 m tall, curved R~3 m | G-03 |
| Projector throw | ~3 m to screen, ≥2 m behind shooter (IEC 62471) | Safety |
| Transport | 4 cases, each ≤200 kg, pass 900×2100 mm door | Tr-01 |
| Power | 220V/20A single circuit, peak 2.0 kW | E-01/E-02 |
| Installation | Shore-based indoor, concrete floor, air-conditioned, darkened | B0 |
| Latency | ≤50 ms trigger-to-visual (ZERO margin) | S-01 / A6 CLIFF |

## 2. CEO Layout Decisions (6 decisions required)

### L1: Projection Type

| Option | Pros | Cons | Cost Impact |
|--------|------|------|-------------|
| **A: Front projection** | Simpler screen (opaque), cheaper, thinner room depth needed | Shooter shadow possible, ambient light sensitive | Baseline |
| B: Rear projection | No shadow, better contrast | Needs translucent screen + ~1.5m extra depth behind screen, more expensive | +$500-1,000 |

**B0 Recommendation:** Front projection (A) — simpler, cheaper screen. Shadow mitigated by projector placement above/behind shooter head height.

> **CEO Decision L1:** ___

### L2: Projector Mounting

| Option | Pros | Cons |
|--------|------|------|
| **A: Ceiling mount** | Floor clear, optimal throw angle, vibration-isolated | Needs ≥3m ceiling, installation effort |
| B: Shelf/bracket behind shooter | Easier install, adjustable | Takes floor space, may obstruct movement |
| C: Short-throw on screen frame | Minimal room depth | UST projectors expensive, limited models ≤17ms lag |

**B0 Recommendation:** Ceiling mount (A) — cleanest layout, best throw geometry. Requires ceiling ≥3m (already in G-01).

> **CEO Decision L2:** ___

### L3: Screen Construction

| Option | Pros | Cons |
|--------|------|------|
| **A: Rigid Al frame + stretched fabric** | Self-fabricated by WX, transportable (disassembles), precise curvature | Assembly time ~30 min |
| B: Pre-curved rigid panel | Perfect surface, quick setup | Expensive, fragile in transport, hard to fit through door |
| C: Inflatable curved screen | Lightest, fastest setup | Surface quality concerns, pumping noise |

**B0 Recommendation:** Rigid Al frame + fabric (A) — WX can fabricate, good surface quality, meets Tr-01.

> **CEO Decision L3:** ___

### L4: Platform-Weapon Coupling

| Option | Pros | Cons |
|--------|------|------|
| **A: Integrated base** (weapon pedestal bolted to motion platform) | Smallest footprint, single unit, simplified alignment | Heavier single module |
| B: Separate bases (weapon on floor, platform separate) | Lighter per module, simpler platform | Larger footprint, alignment between two bases |

**B0 Recommendation:** Integrated (A) — meets ≤2×2m, single bolt pattern, better rigidity.

> **CEO Decision L4:** ___

### L5: Electronics Packaging

| Option | Pros | Cons |
|--------|------|------|
| **A: Centralized rack** (1 flight case: render PC + instructor PC + UPS + PDU + audio amp + switch) | Single thermal zone, one power connection, easy maintenance | Heavy case (~80 kg), needs dolly |
| B: Distributed (render PC in one case, instructor desk separate, UPS separate) | Lighter per case, flexible placement | More cables, harder troubleshooting |

**B0 Recommendation:** Centralized rack (A) — easier cooling, maintenance, single power point.

> **CEO Decision L5:** ___

### L6: Projector Model Selection (CRITICAL — A6 CLIFF)

**Requirement:** ≤17 ms input lag, ≥3000 lumens, short-throw ratio 0.8-1.0, 1920×1080 native.

| Model | Input Lag | Lumens | Throw | Price (est.) | Availability VN |
|-------|----------|--------|-------|-------------|----------------|
| Optoma ZU607TST | TBD — **must benchmark** | 6,500 | 0.8:1 | $1,500-2,500 | Yes (distributor) |
| Optoma GT2160HDR | ~16 ms (gaming) | 4,000 | 0.5:1 | $1,200-1,800 | Limited |
| BenQ LH820ST+ | ~16 ms | 4,000 | 0.9:1 | $1,500-2,000 | Yes |
| Epson EB-L265F | ~20 ms? | 4,600 | Std lens | $1,200-1,600 | Yes |

**KG-2 (HIGH):** Projector input lag MUST be benchmarked on actual unit. A6 CSR = CLIFF curve — any latency >50ms total → satisfaction collapse.

> **CEO Decision L6:** ___ (or "benchmark all 3 in Phase 3")

## 3. Room Layout — Plan View (CEO to confirm/modify)

```
═══════════════════════════════════════════════════════════
  ROOM LAYOUT — 6m (W) × 8m (D), ceiling 3m
  Shore-based, air-conditioned, darkened room
═══════════════════════════════════════════════════════════

  FRONT WALL (screen wall)
  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │   ┌─────────────────────────────────────┐       │
  │   │   CURVED SCREEN                     │       │
  │   │   4m W × 2m H, R~3m                │       │
  │   │   Al frame + matt white fabric      │       │
  │   │   Bottom edge ~0.5m from floor      │       │
  │   └─────────────────────────────────────┘       │
  │        P1 ●         P2 ●         P3 ●           │ ← 3× projectors
  │   (ceiling-mounted, ~0.5m in front of screen)   │   (front projection)
  │                                                 │
  │              ~3m throw distance                  │
  │                                                 │
  │    [SPK-FL]                      [SPK-FR]       │ ← front L/R speakers
  │                  [SPK-C]                        │ ← center (above screen)
  │                                                 │
  │         ┌───────────────────┐                   │
  │         │                   │                   │
  │         │  SS1 WEAPON STN   │                   │
  │         │  (on SS3 MOTION   │  ← 2×2m footprint │
  │         │   PLATFORM)       │     bolted to      │
  │         │                   │     concrete floor  │
  │         └───────────────────┘                   │
  │    [SPK-SL]      ↑          [SPK-SR]            │ ← surround L/R
  │              shooter                             │
  │              faces north                         │
  │                    [SUB] ← subwoofer             │
  │                                                 │
  │   ┌──────────────┐    ┌──────────────────┐      │
  │   │ INSTRUCTOR   │    │  ELECTRONICS     │      │
  │   │ DESK         │    │  RACK (M4)       │      │
  │   │ 2×27" mon    │    │  Render PC       │      │
  │   │              │    │  Instructor PC    │      │
  │   │  [E-STOP]    │    │  UPS 2kVA        │      │
  │   └──────────────┘    │  PDU + switch    │      │
  │                       │  Audio amp        │      │
  │     ← line of sight   └──────────────────┘      │
  │       to shooter            ↑ near wall          │
  │                             power inlet          │
  │                                                 │
  │   [DOOR 900×2100]   ← standard entry            │
  └─────────────────────────────────────────────────┘
  REAR WALL

  VERTICAL SECTION (side view):
  
  Ceiling 3.0m ─────────────────────────────────
                    ● Projector (ceiling mount)
                    ↓ throw ~3m at 15° down
  Screen top 2.5m ─ ┌──────────┐
                    │  SCREEN  │ 2m tall
  Screen bot 0.5m ─ └──────────┘
  Shooter eye 1.6m ─     ○ ← operator standing
  Platform 0.3m ────  ═══╪═══ ← motion platform
  Floor 0.0m ───────────────────────────────────
```

## 4. Module Breakdown (4 Transport Modules)

### M1: Weapon Station (SS1)

| Component | Dimensions (est.) | Weight (est.) | Notes |
|-----------|-------------------|---------------|-------|
| Universal cradle + pedestal | 600×400×1200 mm (W×D×H) | ~15 kg | CNC Al cradle + welded steel pedestal |
| Weapon module WM-01 DSHK | ~1200×300×400 mm | ~10 kg | CNC Al body + solenoid + trigger + NFC + sight |
| Weapon module WM-02 NSV | ~1000×250×350 mm | ~8 kg | Same architecture, lighter |
| Magnetic powder brake | Integrated in cradle | ~1 kg | Coaxial with traverse |
| Encoders ×2 | Integrated in cradle | ~0.2 kg | Hollow-shaft, coaxial |
| ESP32 + NFC reader | Inside pedestal base | ~0.1 kg | PCB + RC522 |
| Cables + connectors | Bundled | ~0.5 kg | 12-pin MIL, USB, 24VDC |
| **M1 total** | Flight case ~700×500×500 mm | **~35 kg** | 1-person carry ✅ |

### M2: Motion Platform (SS3)

| Component | Dimensions (est.) | Weight (est.) | Notes |
|-----------|-------------------|---------------|-------|
| Steel frame + universal joint | 1500×1500×300 mm | ~25 kg | Welded 60×40mm section |
| Racing seat + 4-point harness | 500×500×800 mm | ~8 kg | COTS |
| Linear actuators ×2 | 400 mm length each | ~8 kg | Ball-screw, 200mm stroke |
| ESP32 + BTS7960 driver | Under platform | ~0.3 kg | PID controller |
| Limit switches ×4 | Integrated | ~0.1 kg | Hard stop backup |
| E-stop relay module | Accessible | ~0.2 kg | NC circuit |
| **M2 total** | Flight case ~1600×800×500 mm | **~42 kg** | 2-person carry |

### M3: Visual System (SS2-HW)

| Component | Dimensions (est.) | Weight (est.) | Notes |
|-----------|-------------------|---------------|-------|
| Screen frame (Al profile, disassembled) | 4 sections, each ~1200mm | ~12 kg | Bolted assembly |
| Projection fabric (rolled) | 4200×2200 mm rolled | ~3 kg | Matt white, gain 1.0-1.3 |
| Projectors ×3 + ceiling mounts | 350×260×120 mm each | ~18 kg (6 kg each) | Short-throw, ≤17ms lag |
| HDMI cables ×3 (15m each) | Bundled | ~3 kg | High-speed certified |
| **M3 total** | Flight case ~1300×600×500 mm | **~36 kg** | 2-person carry (awkward shape) |

### M4: Electronics Rack (SS2-PC + SS5)

| Component | Dimensions (est.) | Weight (est.) | Notes |
|-----------|-------------------|---------------|-------|
| Render PC (RTX 4090, tower) | 500×220×480 mm | ~10 kg | Custom build |
| Instructor PC (mini-PC) | 200×200×50 mm | ~1 kg | + 2×27" monitors (separate) |
| Instructor monitors ×2 | 620×370×50 mm each | ~8 kg | 27" IPS |
| UPS 2 kVA | 350×190×360 mm | ~12 kg | APC/CyberPower |
| PDU (6-outlet, filtered) | 440×45×50 mm | ~1 kg | Rack-mount |
| Audio amp + 6 speakers | Various | ~5 kg | 5.1 system |
| Network switch (8-port GbE) | 200×100×30 mm | ~0.3 kg | Unmanaged |
| Cable kit (power, USB, HDMI, Ethernet, audio) | Bundled, labelled | ~5 kg | Pre-cut lengths |
| Spare fuses, tools, maintenance kit | Pouch | ~2 kg | Hex keys, screwdrivers |
| **M4 total** | Flight case (wheeled) ~600×500×600 mm | **~44 kg** | Wheeled dolly |

### Module Summary

| Module | Weight | Persons | Case Size (mm) | Transport |
|--------|--------|---------|----------------|-----------|
| M1 Weapon Station | ~35 kg | 1 | 700×500×500 | ✅ door, truck, container |
| M2 Motion Platform | ~42 kg | 2 | 1600×800×500 | ✅ door (long axis through) |
| M3 Visual System | ~36 kg | 2 | 1300×600×500 | ✅ door |
| M4 Electronics Rack | ~44 kg | 1 (wheeled) | 600×500×600 | ✅ door, wheeled |
| **TOTAL** | **~157 kg** | | 4 cases | All pass 900×2100 door ✅ |

**Tr-01 check:** All cases ≤200 kg ✅. Total system ~157 kg ✅.

## 5. Assembly Sequence (2 technicians, target ≤4 hours)

| Step | Time | Action | Tools |
|------|------|--------|-------|
| 1 | 15 min | Position M4 rack near wall power outlet. Connect power. UPS self-test. | Power cable |
| 2 | 30 min | Assemble M3 screen frame (4 sections → bolted arch). Stretch fabric. | Hex wrench, level |
| 3 | 20 min | Mount 3 projectors on ceiling brackets. Connect HDMI to render PC. | Drill, anchors, HDMI |
| 4 | 15 min | Position M2 motion platform at design point (~3m from screen). Bolt to floor (4× M12 expansion anchors). | Drill, M12 anchors |
| 5 | 10 min | Mount M1 weapon station on M2 platform. 4× M10 bolts. Connect USB + 24VDC. | Wrench |
| 6 | 10 min | Attach weapon module WM-01 to cradle. 4× wing bolts. 12-pin MIL connect. NFC auto-detect. | Hand |
| 7 | 15 min | Position speakers (5 + sub). Connect audio cables to amp. | Cable ties |
| 8 | 20 min | Connect all cables: render PC → projectors (HDMI), render PC → ESP32 (USB), instructor PC → LAN, audio. | Cable ties, labels |
| 9 | 30 min | Projector alignment: keystone, edge-blend, warp mesh calibration (Unity tool). | Software |
| 10 | 15 min | Motion platform calibration: PID tuning, limit switch verify, E-stop test. | Software + manual |
| 11 | 10 min | System self-test (boot → diagnostics → all green). | Software |
| 12 | 10 min | Instructor training run: 1 scenario start-to-finish verification. | — |
| **TOTAL** | **~3.5 h** | | **Target: ≤4 h ✅** |

## 6. Subsystem Layout Details

### 6.1 SS1 Weapon Station — Internal Layout

```
  TOP VIEW (universal cradle)
  ┌──────────────────────────────┐
  │                              │
  │   TRAVERSE AXIS ─────────── │ ← slip clutch + encoder + mag brake
  │        │                     │      (coaxial, inside bearing housing)
  │        │                     │
  │   ┌────┴────┐                │
  │   │ WEAPON  │ ← quick-release plate (4× M10 wing bolts)
  │   │ MODULE  │   12-pin MIL connector (bayonet)
  │   │ MOUNT   │   NFC reader (flush, reads through 3mm Al)
  │   │ PLATE   │                │
  │   └────┬────┘                │
  │        │                     │
  │   ELEVATION AXIS ─────────  │ ← free rotation + encoder
  │                              │      (counterweight in weapon module)
  │                              │
  │   ┌──────────┐               │
  │   │ PEDESTAL │ ← welded steel, 3-height (155/170/185cm)
  │   │ (steel)  │   4× M12 base bolts to platform
  │   │          │   ESP32 + NFC reader inside base
  │   │          │   cable routing through internal channel
  │   └──────────┘               │
  └──────────────────────────────┘

  SIDE VIEW (weapon module WM-01 DSHK)
  
  ← MUZZLE (front)                    REAR →
  
  ┌───────────────────────────────────────┐
  │  CNC Al 6061 body (±5mm vs real)     │
  │                                       │
  │  [REPLICA SIGHT]  [TRIGGER GUARD]     │
  │                    └─ microswitch      │
  │                       + adj. spring    │
  │                                       │
  │  [COUNTERWEIGHT]   [SOLENOID 24VDC]   │
  │   (rear, for       └─ recoil actuator │
  │    elevation         15-20N, PWM      │
  │    balance)                           │
  │                    [NFC TAG]          │
  │                    └─ NTAG215, flush  │
  │                       weapon ID +     │
  │                       cal offsets +   │
  │                       round count     │
  └───────────────────────────────────────┘
       ↓
  [12-PIN MIL CONNECTOR]
  Pin-out: 2×encoder, 2×trigger, 2×solenoid,
           2×NFC, 2×brake, 2×spare
```

### 6.2 SS3 Motion Platform — Internal Layout

```
  TOP VIEW
  ┌────────────────────────────────────┐
  │            1500 × 1500 mm          │
  │                                    │
  │   ┌────────────────────────┐       │
  │   │    RACING SEAT         │       │
  │   │    + 4-point harness   │       │
  │   │    (3-position rail)   │       │
  │   └────────────────────────┘       │
  │                                    │
  │   [WEAPON PEDESTAL MOUNT]          │
  │   4× M12 threaded inserts          │
  │   (centered in front of seat)      │
  │                                    │
  │ ACT-L ●────── UNIVERSAL ──────● ACT-R
  │  (roll)       JOINT            (pitch)
  │               (center)                 │
  │                                    │
  │   [ESP32]  [BTS7960×2]  [RELAY]    │
  │   └── under platform, accessible   │
  │                                    │
  │   [LIMIT SW ×4]  [E-STOP BUTTON]  │
  │                                    │
  └────┬──────────┬──────────┬─────────┘
       │          │          │
  4× M12 floor anchors (expansion bolts into concrete)

  SIDE VIEW
  
  Seat back ─────┐
                 │  operator ~1.6m eye height
  Seat ──────────┤  (standing: uses weapon station)
                 │  (seated: uses seat + harness)
  Platform ══════╪══════ ← 300mm above floor
         ACT──/  \──ACT   ← 2× linear actuators
              UNIVERSAL     200mm stroke
              JOINT         ±12° roll, ±8° pitch
  Floor ─────────────────
         ↑↑↑↑
    4× M12 anchors
```

### 6.3 SS2 Visual — Projection Geometry

```
  SIDE VIEW (projection geometry)
  
  Ceiling 3.0m ──────●──────────────────
                     │ projector mount
                     │ (ceiling bracket)
                     │
                     │ throw ~3m
                     │ angle ~15° down
                     ↓
  Screen top 2.5m ── ┌────────┐
                     │        │
                     │ SCREEN │ 2.0m tall
                     │  R~3m  │ 
                     │        │
  Screen bot 0.5m ── └────────┘
  
  
  Shooter eye 1.6m ──── ○ ← ~3m from screen
                        │
  Platform 0.3m ──── ═══╪═══
  Floor 0.0m ────────────────

  TOP VIEW (3-projector overlap)
  
              ┌─────────────────────────────────────┐
              │            CURVED SCREEN             │
              │      4m wide, R~3m curvature         │
              └──┬──────────┬──────────┬─────────────┘
                 │   ~10%   │   ~10%   │
                 │ overlap  │ overlap  │
                 P1         P2         P3
              (60° left)  (60° center) (60° right)
                 \          |          /
                  \         |         /
                   \        |        /
                    \       |       /
                     ○ SHOOTER (180° total FOV)
  
  Edge-blend zones: ≥10% overlap (IF-05b)
  Luminance variation: ≤2% across seams
  Warp mesh: Unity custom shader, calibrated per install
```

## 7. Main Function Carriers (P&B 7.1 Step 3)

Identifying which physical components carry the main functions:

| Main Function | Primary Carrier | Secondary | Domain |
|--------------|----------------|-----------|--------|
| F1: Sense weapon input | Universal cradle (encoders, trigger, NFC) | ESP32 MCU | MECH+ELEC |
| F2: Simulate environment | Render PC (Unity 6 + RTX 4090) | GPU | SW+ELEC |
| F3: Display scene | 3× Projectors + curved screen | HDMI cables, audio system | ELEC+MECH |
| F4: Motion ship | 2× Linear actuators + platform frame | ESP32 PID, universal joint | MECH+ELEC |
| F5: Evaluate performance | Render PC (scoring engine) | SQLite DB | SW |
| F6: Control session | Instructor PC + 2×27" monitors | LAN switch | SW+ELEC |
| F7: Swap weapon module | Quick-release plate + 12-pin MIL + NFC | Wing bolts, locating pins | MECH+ELEC |

**Solution-determining main function carrier:** Render PC (RTX 4090) — carries F2+F3+F5, consumes 24% of power, 20% of cost, and is on the critical latency path (S-01). If this component fails, 5 of 7 main functions stop.

## 8. Interface Physical Realization

Mapping ICD v1.5 interfaces to physical layout:

| IF Group | Physical Realization | Cable/Connection | Length (est.) |
|----------|---------------------|-----------------|---------------|
| IF-01 (MECH↔ELEC, weapon) | Inside cradle body, internal channels | Internal wiring, 12-pin MIL breakout | <1 m |
| IF-02 (ELEC↔SW, sensors) | ESP32 USB → Render PC | USB 2.0 cable | ~5 m (cradle → rack) |
| IF-03 (MECH↔ELEC, motion) | Under platform, actuator leads | Power cable + limit switch wires | <2 m |
| IF-04 (SW↔ELEC, motion ctrl) | Render PC → ESP32 (motion) | Ethernet UDP (via switch) | ~5 m |
| IF-05 (MECH↔SW, projection) | Screen geometry → Unity warp mesh | Calibration data (software) | N/A (config file) |
| IF-05c (projector mount) | Ceiling bracket → projector | HDMI cable | ~8 m (ceiling route) |
| Audio | Render PC → amp → 6 speakers | RCA/optical + speaker wire | ~10 m total |
| Power | Wall outlet → UPS → PDU → all devices | IEC C13/C14 cables | ~3 m max |

**Cable routing strategy:** All signal cables (USB, HDMI, Ethernet) routed along wall + ceiling trunking. No cables crossing floor (trip hazard, especially for darkened room). Power cables along wall at floor level with cable covers.

## 9. Unresolved ICD Interfaces → Phase 3 Resolution

| # | Interface | What's Missing | Resolution in BA |
|---|-----------|---------------|-----------------|
| 1 | IF-01a Encoder model | Mounting dims TBD | **Propose: AMT103 (CUI Devices)** — hollow shaft, 0.09° resolution, $30-50, available VN. Shaft ⌀8mm. |
| 2 | IF-05a Screen curvature radius | R not specified | **Propose: R = 3.0 m** — matches throw ratio 0.8-1.0 for short-throw projectors at 3m distance. 180° arc = 4.0m screen × π×3/π = chord ~4m. |
| 3 | IF-02e Solenoid peak current | Driver circuit TBD | **Defer to PoC 2026-05-07** — measure actual current draw at 25N force. Estimate: 2-4A @ 24VDC. MOSFET driver (IRLZ44N). |
| 4 | IF-04b Feedback packet format | Motion feedback undefined | **Propose:** `{ts_ms: uint32, roll_deg: float32, pitch_deg: float32, status: uint8}` = 13 bytes @ 50Hz UDP. Status: 0=OK, 1=limit, 2=fault. |

---

## 10. CEO Decisions Required

**Please confirm or modify each decision below:**

| # | Decision | B0/AI Recommendation | CEO Decision |
|---|----------|---------------------|-------------|
| L1 | Projection type | Front projection | ___ |
| L2 | Projector mounting | Ceiling mount | ___ |
| L3 | Screen construction | Rigid Al frame + fabric | ___ |
| L4 | Platform-weapon coupling | Integrated base | ___ |
| L5 | Electronics packaging | Centralized rack | ___ |
| L6 | Projector model | Benchmark 3 models (KG-2) | ___ |
| IF-01a | Encoder model | AMT103 (CUI Devices) | ___ |
| IF-05a | Screen radius | R = 3.0 m | ___ |
| IF-02e | Solenoid current | Defer to PoC | ___ |
| IF-04b | Feedback packet | 13-byte UDP @ 50Hz | ___ |

**Additional CEO input welcomed:**
- Specific room dimensions at target installation site?
- Preferred projector brand/model from past experience?
- Any layout constraints from customer (military base facilities)?
- Standing or seated operation preferred for LITE?
