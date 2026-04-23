---
created: 2026-04-15
updated: 2026-04-15
type: phase3-error-check
project: VN-CUAV-SIM-001
variant: LITE-PA2
block: BA½
pahl-beitz: 7.1 Step 6
---

# BA½ Early Error Check — VN-CUAV-SIM-001 LITE PA-2

> **P&B 7.1 Step 6:** "Check for errors — simple, rough checks before detailed elaboration."
> Quick pass to catch layout-level problems. If FAIL → return to BA, don't proceed to DfX.

---

## 1. Force-Path Analysis

**Question:** Do all force paths have a clear, continuous load path from source to ground?

| Force Path | Source | Through | To Ground | Status |
|-----------|--------|---------|-----------|--------|
| Recoil impulse (15-60N) | Solenoid in weapon module → 12-pin MIL → cradle body → pedestal → platform → floor anchors | Al body → steel pedestal → steel frame → M12 anchors → concrete | ✅ CLEAR | Continuous metal-to-metal. No compliant joints in path. |
| Shooter weight (100 kg) | Feet on platform + hands on weapon | Platform frame → universal joint → actuators → floor anchors | ✅ CLEAR | Steel frame rated ≥130 kg. Universal joint is load-rated. |
| Motion actuator force (500N×2) | Actuator rod → pin joint → frame → universal joint → floor | Steel-to-steel. Pin joints rated. | ✅ CLEAR | Ball-screw = no backdrive. |
| Projector weight (6 kg×3) | Ceiling bracket → ceiling anchors | Standard ceiling mount. Need M8 expansion anchors (concrete ceiling). | ✅ CLEAR | Verify ceiling is concrete, not suspended tile. |
| Screen wind load | N/A — indoor, no wind | Frame bolted to wall or floor-standing with ballast | ✅ N/A | Indoor only. |
| Magnetic brake torque (10 Nm) | Brake → traverse shaft → bearing housing → cradle body → pedestal | Coaxial mounting, bearing handles radial + axial. | ✅ CLEAR | Standard bearing application. |

**Force-path verdict: ✅ PASS — No interrupted or ambiguous force paths.**

### Force-Path Concerns (minor, not blocking)

| # | Concern | Severity | Note |
|---|---------|----------|------|
| FP-1 | Weapon module ↔ cradle connection (4× M10 wing bolts) — repeated swap cycles may loosen | LOW | Wing bolts are hand-tight. Add torque spec (5 Nm) + locating pins prevent slip. Inspect every 100 swaps. |
| FP-2 | Universal joint wear over time (±12° roll, ±8° pitch, 50Hz cycling) | LOW | Spec ≥10M cycles. Add to maintenance schedule (grease every 6 months). |

---

## 2. Cost-Effectiveness Check

**Question:** Is the layout cost-effective? Any obvious over-engineering or missing cost traps?

| Check | Result | Notes |
|-------|--------|-------|
| BOM vs target | Est. $12.5-17.5K vs ≤$18K (A5) | ✅ Within envelope |
| Sell price margin | $50-70K sell, 60-80% gross margin | ✅ Healthy |
| Over-engineered components? | Welded steel pedestal for a 10 kg weapon — could Al profile suffice? | ⚠️ MINOR — steel is $50 more than Al profile but gives superior vibration damping. Keep steel. Justified by rigidity requirement. |
| Cost concentration risk | Projectors (42%) + GPU (20%) = 62% of HW | ⚠️ KNOWN — COTS components. Price-lock strategy needed. Not a layout error. |
| Redundant components? | No — each component has a single function | ✅ No waste |
| Manufacturing complexity | CNC cradle + CNC weapon modules + welded frame. All within WX capability. | ✅ In-house |
| Assembly labor (per unit) | ~3.5h × 2 technicians = 7 person-hours | ✅ Reasonable for $50-70K product |
| Hidden cost: calibration | Warp mesh + PID tuning + encoder mapping = 4-8h per install | ⚠️ MINOR — include in commissioning SOP. Factor into unit cost ($100-200). Already in SA_Domain_Budgets. |

**Cost-effectiveness verdict: ✅ PASS — No cost traps found. Known concentration (62% in 2 COTS items) is acceptable.**

---

## 3. Disturbing Factors Analysis (P&B 7.3.1)

**Question:** Are there disturbing influences that the layout doesn't address?

| Disturbing Factor | Source | Effect on Layout | Mitigation in Layout? | Status |
|-------------------|--------|-----------------|----------------------|--------|
| **Heat** (GPU + projectors) | Render PC: 500W, Projectors: 900W = 1.4kW heat | Room temp rise ~5°C in 6×8×3m room without AC | Room spec requires AC. Rack case needs ventilation. | ✅ ADDRESSED — AC required in B0 |
| **Noise** (projector fans + audio) | Projectors ~35 dB each × 3, audio ≥85 dB | Projector noise masked by audio. Instructor position must be tolerable. | ✅ OK — instructor desk ~4m from projectors. Audio is intentional. |
| **Vibration** (motion platform) | 2-DOF platform, period 4-8s, ±12° roll | Could transmit through floor to projector ceiling mounts | ⚠️ CHECK — M12 floor anchors isolate platform from building. Ceiling mounts on separate structure (ceiling, not floor). Vibration path is long + damped. **LOW risk** but verify at commissioning. |
| **EMI** (solenoid PWM switching) | 24VDC solenoid, MOSFET switching at ROF | Could interfere with encoder USB signal | ⚠️ CHECK — solenoid power wires should be twisted pair + shielded. Separate from signal cables. Route in different trunking channels. **Add to BB DfX.** |
| **Light leaks** (darkened room) | Door gaps, AC vents, indicator LEDs | Reduces projection contrast, especially in night scenarios | ⚠️ MINOR — blackout curtains + door seal. Dim/cover all equipment LEDs. Standard for projection rooms. |
| **Dust** (projector lens contamination) | Vietnam tropical, construction dust | Projector brightness degradation over months | ⚠️ MINOR — add dust filter to rack case, projector lens cleaning in monthly maintenance SOP. |
| **Ambient light bleed onto screen** | Instructor monitors, equipment LEDs | Reduces FOV edge contrast | ✅ OK — instructor desk behind shooter, monitors face away from screen. Hoods if needed. |
| **USB cable length** (5m, weapon→rack) | Long USB → signal integrity | USB 2.0 spec: ≤5m without hub. ESP32 is USB device. | ⚠️ CHECK — exactly at USB 2.0 limit. Use quality shielded cable. If unreliable, add USB hub at platform base. **LOW risk.** |
| **HDMI cable length** (8m, ceiling route) | Long HDMI → signal loss at 4K | We use 3×FHD (1920×1080), not 4K. HDMI 2.0 supports FHD at ≥15m. | ✅ OK — well within spec at 8m. Use certified cables. |
| **Thermal cycling** (AC on/off) | Room cools overnight, heats up during operation | Condensation risk on cold projector lenses when room heats up | ⚠️ MINOR — power on AC 30 min before operation. Standard for AV rooms in tropics. Add to SOP. |

**Disturbing factors verdict: ✅ PASS — No blocking issues. 3 items flagged for BB DfX (EMI, vibration, USB). 3 minor items for SOP.**

---

## 4. Layout Geometry Sanity Check

| Check | Required | Layout Provides | Status |
|-------|----------|----------------|--------|
| Room footprint | 6 × 8 m | Layout fits in 6 × 8 m | ✅ |
| Ceiling height | ≥3 m | Projectors at ~2.8m, screen top at 2.5m | ✅ |
| Shooter-to-screen | ~3 m | Layout shows ~3 m | ✅ |
| Projector-to-shooter | ≥2 m (IEC 62471) | Ceiling mount ~0.5m ahead of shooter at 2.8m height → >2m slant distance | ✅ |
| FOV at 3m from 4m screen | arctan(2/3) × 2 ≈ 67° per projector, 3× overlap → ~180° | Matches G-03 | ✅ |
| Weapon station + platform | ≤2 × 2 m | 1.5 × 1.5 m platform + pedestal centered | ✅ |
| All cases through door | 900 × 2100 mm | Largest case M2: 1600×800 → long axis through door | ✅ |
| Instructor line-of-sight | Must see shooter | Behind shooter, offset left, ~3m away | ✅ |
| E-stop reach | Arm's reach of instructor | On instructor desk | ✅ |

**Geometry verdict: ✅ PASS**

---

## 5. Summary

| Check | Result | Issues Found |
|-------|--------|-------------|
| Force paths | ✅ PASS | 2 minor concerns (wing bolt torque, U-joint wear) |
| Cost-effectiveness | ✅ PASS | No traps. Known COTS concentration. |
| Disturbing factors | ✅ PASS | 3 for DfX (EMI, vibration, USB), 3 for SOP |
| Geometry sanity | ✅ PASS | All dimensions verified |

### Items to Carry Forward to BB (DfX)

| # | Item | DfX Category | Priority |
|---|------|-------------|----------|
| DF-1 | EMI from solenoid PWM → encoder signal | DfEMC (within DfR) | MEDIUM |
| DF-2 | Platform vibration → projector mount | DfR (reliability) | LOW |
| DF-3 | USB 5m cable limit | DfR (reliability) | LOW |
| DF-4 | Thermal cycling condensation | DfR + DfDurability | LOW |
| DF-5 | Wing bolt torque spec + inspection interval | DfM + DfA | LOW |
| DF-6 | Dust management for projectors | DfDurability | LOW |

```
╔══════════════════════════════════════════════╗
║  BA½ EARLY ERROR CHECK: ✅ PASS              ║
║  No blocking errors. Layout proceeds to BB.  ║
║  6 items flagged for detailed DfX review.    ║
╚══════════════════════════════════════════════╝
```
