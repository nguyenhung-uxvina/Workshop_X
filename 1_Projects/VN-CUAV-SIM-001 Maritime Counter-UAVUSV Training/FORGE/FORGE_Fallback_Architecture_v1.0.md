# FORGE FALLBACK ARCHITECTURE — VN-CUAV-SIM-001
## Defense-Grade Fallback Design — Level 2 Inherent
## Maritime Counter-UAV/USV Shooting Training Simulation

**Date:** 2026-04-07
**Method:** FORGE Fallback (Level 2 Graceful Degradation)
**Input:** SHIFT v1.0 (F=PASS, Level 2 Inherent), Validation Plan v1.0
**Decision:** SHIFT confirmed Level 2 sufficient — training system, NOT weapon system

---

## 1. WHY LEVEL 2 (NOT LEVEL 3)

| Factor | Assessment |
|--------|-----------|
| **Failure consequence** | Training session degraded or interrupted — NOT loss of life |
| **Safety path** | Physical safety (E-stop, hard stops) = hardware-only, no AI in safety loop |
| **Worst case** | "Gunner trains less effectively today" → reschedule, no lasting harm |
| **Level 3 cost** | Dual system would double HW cost (~+$15K) for minimal risk reduction |
| **Competitor standard** | No competitor training simulator uses Level 3 redundancy |

**Rule:** Level 3 Redundant Path is for **weapon systems** and **safety-critical** systems. A training simulator is **mission-useful**, not mission-critical or safety-critical.

---

## 2. FAILURE MODE ANALYSIS — 7 ACH LAYERS

| # | ACH Layer | Failure Mode | Prob | Severity | Detection Method | Trigger Condition |
|---|:---------:|-------------|:----:|:--------:|-----------------|-------------------|
| FM-1 | ACH-1 Ballistic | V-SMASH model output diverges from TM tables | Low | HIGH | Automated TM comparison on boot | Deviation >7% at any range |
| FM-2 | ACH-2 Targets | Unity target AI produces unrealistic behavior | Low | MED | Instructor observation + path anomaly check | Target exits world bounds OR speed >Mach 1 |
| FM-3 | ACH-3 Environment | Unity HDRP render failure (black screen, artifacts) | Low | HIGH | Frame watchdog (fps counter) | fps <30 for >5 seconds |
| FM-4 | ACH-4 Motion | Actuator fails / overheats / drifts | Med | MED | Position feedback vs command comparison | Error >2° sustained 3s |
| FM-5 | ACH-5 Scoring | Hit/miss classification error rate rises | Low | MED | Statistical monitoring per session | Accuracy <90% over 50 shots |
| FM-6 | ACH-6 Adaptive | AI recommendation nonsensical | Low | LOW | Instructor review before execution | Instructor rejects suggestion |
| FM-7 | ACH-7 Weapon | Solenoid recoil failure / NFC read failure | Med | LOW | Self-test on boot + NFC heartbeat | No recoil pulse OR NFC timeout >3s |

---

## 3. FALLBACK SPECIFICATION — PER FAILURE MODE

### FM-1: Ballistic Model Failure → DETERMINISTIC FALLBACK

```
PRIMARY:     V-SMASH 6DOF real-time computation
FALLBACK:    Pre-computed lookup table (TM-based, interpolated)
TRIGGER:     Deviation >7% at any range during boot self-test
SWITCH TIME: Automatic, <1s (table already loaded in memory)
DEGRADATION: Accuracy ±5% → ±8% (no wind compensation, simplified drag)
RECOVERY:    Fix V-SMASH model → re-run self-test → auto-restore
```

| Aspect | Primary (V-SMASH) | Fallback (TM Lookup) |
|--------|:-----------------:|:--------------------:|
| Accuracy | ≤5% error | ≤8% error |
| Wind compensation | ✅ Real-time | ❌ No wind model |
| Ship motion compensation | ✅ Full 6DOF | ⚠️ Simplified (add roll offset) |
| Multi-caliber | ✅ 5 weapon types | ✅ 5 lookup tables |
| Performance | GPU-computed | CPU table lookup (faster) |

**Implementation:** Pre-compute TM tables for 5 calibers × 15 ranges × 3 conditions = 225 data points. Store as JSON. Load at boot alongside V-SMASH. If V-SMASH self-test fails → swap pointer to lookup table. Zero additional hardware.

**Cost:** $0 HW, ~4h SW development (one-time).

---

### FM-2: Target AI Failure → SCRIPTED WAYPOINT MODE

```
PRIMARY:     AI behavior engine (flocking, evasion, tactics)
FALLBACK:    Pre-scripted waypoint paths (deterministic, no AI)
TRIGGER:     Target exits world bounds OR physics anomaly detected
SWITCH TIME: Automatic per-target, <100ms
DEGRADATION: Less realistic evasion, predictable paths
RECOVERY:    Restart scenario → AI re-initializes
```

| Aspect | Primary (AI) | Fallback (Waypoints) |
|--------|:----------:|:-------------------:|
| Evasion realism | High (adaptive) | Low (pre-set paths) |
| Swarm behavior | Flocking algorithm | Individual paths |
| Instructor control | AI + inject | Full manual scripting |
| Predictability | Low (good for training) | High (bad for training) |

**Implementation:** Every scenario already has waypoint data as starting positions. Fallback = disable AI perturbation layer, run raw waypoints. Already exists in scenario engine architecture.

**Cost:** $0 — inherent in architecture.

---

### FM-3: Render Failure → RESTART + SESSION RECOVERY

```
PRIMARY:     Unity 6 HDRP real-time render
FALLBACK:    Auto-restart Unity from last checkpoint
TRIGGER:     fps <30 for >5 seconds OR Unity process crash
SWITCH TIME: ~30-60s (Unity restart + scene load)
DEGRADATION: 30-60s training interruption
RECOVERY:    Auto-restart → load checkpoint → resume
```

**Implementation:** Unity checkpoint saves every 30 seconds: camera state, target positions, score, aim history. Watchdog process (separate from Unity) monitors fps and process alive. On failure: kill Unity → restart → load checkpoint → instructor confirms resume.

**Cost:** $0 HW, ~8h SW development (watchdog + checkpoint system).

---

### FM-4: Motion Platform Failure → VISUAL-ONLY MODE

```
PRIMARY:     2-DOF electric motion (LITE) / shared deck (FULL)
FALLBACK:    Motion disabled, training continues visual-only
TRIGGER:     Position error >2° sustained 3s OR E-stop activated
SWITCH TIME: <1s (E-stop is hardware, instant)
DEGRADATION: No physical ship motion feel (visual sway still renders)
RECOVERY:    Technician inspects → clear fault → restart motion
```

| Aspect | Primary (Motion) | Fallback (Visual-only) |
|--------|:---------------:|:---------------------:|
| Ship motion feel | Physical roll/pitch | Visual-only (screen tilts) |
| Training value | High (vestibular + visual) | Medium (visual cue only) |
| Safety | Active actuators | ✅ Safest (no moving parts) |
| Applicable variants | LITE, FULL | LITE, FULL, **FIXED already in this mode** |

**Key insight:** FIXED variant permanently operates in "visual-only" mode (no motion platform). This means visual-only fallback is a **validated operating mode**, not a degraded state.

**Implementation:** E-stop already designed (Sa-02). Add software flag: when motion fault detected → disable motion commands → show "Visual-Only Mode" badge on instructor screen. Training continues without interruption.

**Cost:** $0 — E-stop already required. Software flag = 2h development.

---

### FM-5: Scoring Failure → INSTRUCTOR MANUAL MODE

```
PRIMARY:     Automated collision-volume scoring (95%+ accuracy)
FALLBACK:    Instructor manual hit/miss override per shot
TRIGGER:     Scoring accuracy <90% over 50 shots (statistical test)
             OR instructor flags "scoring wrong" via GUI button
SWITCH TIME: Instant (instructor presses "Manual Scoring" button)
DEGRADATION: Instructor must watch screen and manually classify hits
RECOVERY:    Fix scoring algorithm → re-deploy → test → auto-restore
```

**Implementation:** Instructor GUI already has shot-by-shot review. Add "Override" button per shot: hit ↔ miss toggle. When in manual mode, instructor sees each shot highlighted for review. AAR replay still works (aim data logged regardless of scoring mode).

**Cost:** $0 HW, ~4h SW development (override UI).

---

### FM-6: Adaptive AI Failure → INSTRUCTOR-SELECTED PROGRESSION

```
PRIMARY:     AI recommends next exercise based on weakness analysis
FALLBACK:    Instructor manually selects from scenario library
TRIGGER:     Instructor rejects AI recommendation (human judgment)
SWITCH TIME: N/A — instructor always has manual selection
DEGRADATION: None — instructor's judgment replaces AI suggestion
RECOVERY:    Improve recommendation algorithm, redeploy
```

**This is the ONLY ACH layer where fallback = full human capability.** Instructor is the natural fallback for adaptive training — they've been doing this manually for decades.

**Cost:** $0 — manual mode is the default. AI adaptive is the upgrade.

---

### FM-7: Weapon Feel Failure → VISUAL-ONLY FEEDBACK

```
PRIMARY:     Solenoid recoil + magnetic brake resistance
FALLBACK:    Visual muzzle flash + audio crack (no physical feedback)
TRIGGER:     Solenoid self-test fail on boot OR no recoil pulse detected
             NFC read timeout >3s → manual weapon selection
SWITCH TIME: Automatic on boot (self-test) or instant (NFC timeout)
DEGRADATION: No physical recoil feel, reduced training transfer for weapon handling
             Aiming/tracking training still fully valid
RECOVERY:    Replace solenoid ($15) or NFC reader ($5) → re-test
```

**Implementation:** If solenoid self-test fails → disable recoil channel → show "No Recoil Mode" warning. If NFC fails → instructor manually selects weapon type from dropdown.

**Cost:** $0 — visual/audio feedback always active regardless of solenoid state.

---

## 4. FALLBACK SUMMARY MATRIX

| # | Failure Mode | Fallback | Switch | Degradation | HW Cost | SW Cost | Test in Stage |
|---|:-----------:|----------|:------:|:-----------:|:-------:|:-------:|:------------:|
| FM-1 | Ballistic model | TM lookup table | Auto <1s | ±5%→±8% error | $0 | 4h | 1 (BA-06) |
| FM-2 | Target AI | Scripted waypoints | Auto <100ms | Less realistic | $0 | 0h | 2 (AE-03) |
| FM-3 | Render crash | Auto-restart + checkpoint | 30-60s | Interruption | $0 | 8h | 2 (AE-05) |
| FM-4 | Motion fail | Visual-only mode | Auto <1s | No physical feel | $0 | 2h | 1 (MP-04), 2 |
| FM-5 | Scoring error | Instructor manual | Instant | Manual effort | $0 | 4h | 2 (FU-02) |
| FM-6 | Adaptive AI | Instructor selects | N/A | None | $0 | 0h | N/A |
| FM-7 | Weapon feel | Visual/audio only | Auto (boot) | No recoil | $0 | 0h | 1 (WS-03) |
| | **TOTAL** | | | | **$0** | **~18h** | |

**Total fallback implementation cost: $0 hardware + ~18 hours SW = ~$300 dev cost.**

Every fallback is either **inherent in the architecture** or requires minimal SW. This is the benefit of a training simulator — the physical world is already simulated, so every physical failure simply removes one layer of immersion without breaking the core function.

---

## 5. ACTIVATION PROTOCOL

```
FALLBACK ACTIVATION — VN-CUAV-SIM-001

AUTOMATIC (no human intervention):
┌─────────────────────────────────────────────────────────┐
│ Boot Self-Test (≤2 min)                                 │
│ ├── V-SMASH model check → PASS/FALLBACK to TM lookup   │
│ ├── Solenoid pulse test → PASS/FALLBACK to visual-only  │
│ ├── NFC reader test    → PASS/FALLBACK to manual select │
│ ├── Motion actuator test→ PASS/FALLBACK to visual-only  │
│ ├── GPU render test    → PASS/FAIL (no fallback, fix)   │
│ └── Display test       → PASS/FAIL (no fallback, fix)   │
│                                                          │
│ During Operation (continuous monitoring):                 │
│ ├── fps <30 for 5s     → restart Unity + checkpoint     │
│ ├── Motion error >2°   → E-stop + visual-only mode      │
│ ├── Target anomaly     → per-target waypoint fallback    │
│ └── Scoring drift >10% → flag instructor                 │
└──────────────────────────────────────────────────────────┘

MANUAL (instructor decision):
┌──────────────────────────────────────────────────────────┐
│ Instructor GUI Fallback Controls:                        │
│ ├── [Manual Scoring ON/OFF]   → override hit/miss        │
│ ├── [Manual Weapon Select]    → bypass NFC               │
│ ├── [Visual-Only Mode]        → disable motion           │
│ ├── [Scripted Targets]        → disable AI behavior      │
│ └── [Report Issue]            → log for WX service       │
└──────────────────────────────────────────────────────────┘

RECOVERY (return to primary):
  1. Fault resolved (repair/restart/SW fix)
  2. Self-test re-run → PASS
  3. Instructor confirms "Resume Full Mode"
  4. System logs fallback event + duration for maintenance tracking
```

---

## 6. INSTRUCTOR GUI — FALLBACK STATUS PANEL

```
┌─────────────────────────────────────────────┐
│ SYSTEM STATUS            [CUAV-SIM PA-2]    │
├─────────────────────────────────────────────┤
│ Ballistic Engine    [■ V-SMASH]    ✅ OK    │
│ Target AI           [■ AI Mode]    ✅ OK    │
│ Render Engine       [■ HDRP]      ✅ OK    │
│ Motion Platform     [■ Active]    ✅ OK    │
│ Scoring             [■ Auto]      ✅ OK    │
│ Weapon Module       [■ WM-01 DSHK] ✅ NFC  │
│ Recoil              [■ Active]    ✅ OK    │
├─────────────────────────────────────────────┤
│ Active Fallbacks: NONE                      │
│ Last Fallback Event: —                      │
│ System Health: ████████████████████ 100%    │
└─────────────────────────────────────────────┘

DEGRADED EXAMPLE:
┌─────────────────────────────────────────────┐
│ SYSTEM STATUS            [CUAV-SIM PA-2]    │
├─────────────────────────────────────────────┤
│ Ballistic Engine    [■ V-SMASH]    ✅ OK    │
│ Target AI           [■ AI Mode]    ✅ OK    │
│ Render Engine       [■ HDRP]      ✅ OK    │
│ Motion Platform     [■ VISUAL-ONLY] ⚠️ FB  │
│ Scoring             [■ MANUAL]     ⚠️ FB   │
│ Weapon Module       [■ WM-02 NSV]  ✅ NFC  │
│ Recoil              [■ Disabled]   ⚠️ FB   │
├─────────────────────────────────────────────┤
│ Active Fallbacks: 3 (Motion, Scoring, Recoil)│
│ Last Event: 14:23 — Motion actuator fault   │
│ System Health: ██████████░░░░░░░░░░  55%    │
│ [TRAINING CONTINUES — Degraded Mode]        │
└─────────────────────────────────────────────┘
```

---

## 7. VARIANT-SPECIFIC NOTES

| Variant | Fallbacks Active | Special Consideration |
|---------|:---------------:|----------------------|
| **LITE** | All 7 (FM-1→FM-7) | Baseline fallback architecture |
| **FIXED** | FM-1,2,3,5,6,7 (no FM-4) | **No motion = no motion fallback needed.** Simplest system. |
| **FULL** | All 7 + FM-8 (crew network) | FM-8: if LAN fails between stations → independent single-station mode (each station runs standalone scenario). Crew scoring unavailable. |
| **CORTEX** | All + FM-8 + FM-9 (WAN) | FM-9: if WAN disconnects between nodes → each node falls back to standalone operation. C2 Hub shows "Node Offline." When WAN restores → auto-rejoin shared battlespace. |

### FM-8: Crew Network Failure (FULL only)

```
PRIMARY:   LAN sync between 2-3 weapon stations + instructor
FALLBACK:  Each station runs independent scenario (standalone mode)
TRIGGER:   Station heartbeat lost >2s
SWITCH:    Automatic per-station, <2s
LOSS:      Crew coordination, shared targets, crew scoring
RECOVERY:  Network restored → auto-rejoin → instructor confirms
```

### FM-9: WAN Failure (CORTEX only)

```
PRIMARY:   WAN sync between nodes + C2 Hub (shared battlespace)
FALLBACK:  Each node runs local scenario (node-standalone mode)
TRIGGER:   Node heartbeat lost >5s at C2 Hub
SWITCH:    Automatic, <5s
LOSS:      Shared battlespace, cross-node handoff, joint scoring
RECOVERY:  WAN restored → state reconciliation → C2 confirms rejoin
```

---

## 8. INTEGRATION → HELIX ICD

| New Interface | Between | Type | Notes |
|--------------|---------|------|-------|
| IF-FB-STATUS | Watchdog → Instructor GUI | SW (UDP) | Fallback status broadcast 1Hz |
| IF-FB-SWITCH | Watchdog → Each subsystem | SW (flag) | Enable/disable fallback per subsystem |
| IF-FB-LOG | All subsystems → SQLite | SW (write) | Fallback event logging for maintenance |
| IF-FB-ESTOP | E-stop button → Motion controller | HW (NC relay) | Hardwired, no SW in path |

**Weight/cost impact:** $0 HW, ~18h SW. No physical weight change. No BOM change.

---

## 9. FORGE ROUTING

```
forge-fallback FEEDS:
├── forge-validate → FM-1 through FM-9 tested in Stage 1-2
│   (Validation Plan already includes fallback trigger tests)
├── forge-trust → "Level 2 fallback verified, $0 additional HW"
├── helix-embody-realize → IF-FB interfaces added to ICD
├── helix-detail-finalize → Watchdog process in SW architecture
└── helix-quality-gate → Gate 3 checklist: all fallbacks tested
```

---

## 10. CEO DECISION

**👤 CEO: Level 2 Graceful Degradation formalized. 9 failure modes covered.**

Key facts:
- **$0 hardware cost** for all fallbacks
- **~18h SW development** (~$300)
- Every fallback either inherent or trivial to implement
- FIXED variant = simplest (no motion, no network fallbacks)
- CORTEX = most complex (9 failure modes incl. WAN)
- Instructor always has manual override panel

**Confirm: Fallback architecture APPROVED / MODIFY / REJECT?**

**FORGE Pipeline remaining:**
- `/forge-trust` — customer evidence package
- `/forge-library` — register V-SMASH as WX-BAL-001
- `/forge-flywheel` — data flywheel plan
- `/forge-evolve` — moat assessment + identity score
