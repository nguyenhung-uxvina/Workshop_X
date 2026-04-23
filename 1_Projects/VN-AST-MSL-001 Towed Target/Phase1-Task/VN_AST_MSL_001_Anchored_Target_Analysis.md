# UIEF v2.0 ANALYSIS: VN-AST-MSL-001 "THÀNH TRÌ"
## BIA CỐ ĐỊNH NEO CHO KIỂM TRA NGHIỆM THU TÊN LỬA TÀU CHIẾN

**Product Code:** VN-AST-MSL-001 (Anchored Stationary Target - Missile Test)  
**Product Name:** "THÀNH TRÌ" (Fortress) - Anchored Missile Acceptance Target  
**Date:** January 2026  
**Framework:** UIEF v2.0 with Full D-M-I-R Integration

---

# EXECUTIVE SUMMARY

## Paradigm Clarification: ANCHORED vs TOWED

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              CRITICAL PARADIGM: ANCHORED STATIONARY TARGET                    ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  OPERATIONAL CONCEPT:                                                         ║
║  ═══════════════════                                                         ║
║                                                                               ║
║  1. KÉO RA (Tow out)       2. THẢ NEO (Anchor)      3. BẮN (Fire)           ║
║                                                                               ║
║  ┌─────┐                    ┌─────┐                  ┌─────┐    💥           ║
║  │ TUG │══════════►         │ TGT │                  │ TGT │◄────🚀          ║
║  └─────┘    ┌─────┐         └──┬──┘                  └──┬──┘                 ║
║             │ TGT │            │                        │                    ║
║             └─────┘            ⚓                        ⚓                    ║
║                              ANCHOR                   ANCHOR                  ║
║                                                                               ║
║  Tow vessel:                Target stationary        Missile engages         ║
║  Kéo bia ra vị trí bắn     Bia cố định bằng neo     Bia bị phá hủy          ║
║                                                                               ║
║  KEY DIFFERENCE FROM TOWED TARGET:                                           ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  │ Factor          │ Towed Target       │ Anchored Target (THIS)  │         ║
║  │─────────────────│────────────────────│─────────────────────────│         ║
║  │ Motion          │ Moving 8-15 kn     │ STATIONARY             │         ║
║  │ Tow vessel      │ Present at firing  │ WITHDRAWN (safe)       │         ║
║  │ Stability       │ Cable dynamics     │ ANCHOR + WAVE only     │         ║
║  │ Position        │ Follows tow vessel │ FIXED GPS coordinates  │         ║
║  │ Safety zone     │ Around tow vessel  │ Around target only     │         ║
║  │ Complexity      │ Tow system critical│ ANCHOR system critical │         ║
║  │ Cost driver     │ Dyneema cable      │ Anchor + buoy system   │         ║
║  └─────────────────┴────────────────────┴─────────────────────────┘         ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## Essential Problem Statement (Revised)

> **"CUNG CẤP MỤC TIÊU CỐ ĐỊNH CÓ ĐẶC TÍNH RADAR VÀ HỒNG NGOẠI TƯƠNG ĐƯƠNG TÀU CHIẾN, ĐƯỢC NEO TẠI VỊ TRÍ XÁC ĐỊNH, CHO PHÉP TÀU CHIẾN BẮN TÊN LỬA NGHIỆM THU MÀ KHÔNG CẦN TÀU KÉO HIỆN DIỆN TRONG VÙNG NGUY HIỂM"**

> *"Provide a STATIONARY target with ship-equivalent radar and IR signatures, ANCHORED at designated position, enabling warship missile acceptance firing WITHOUT tow vessel presence in danger zone"*

---

# PART 1: OPERATIONAL ANALYSIS

## 1.1 Operational Sequence (Quy trình tác chiến)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│              OPERATIONAL SEQUENCE: ANCHORED TARGET DEPLOYMENT                 │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  PHASE 1: PREPARATION (Chuẩn bị) - At shore/depot                            │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  □ Load target onto deployment vessel (tug boat or barge)                    │
│  □ Verify signature systems (RCS reflectors, IR burner)                      │
│  □ Pre-set timer for IR ignition (T + deployment time + safety margin)       │
│  □ Check anchor system and buoyancy                                          │
│  □ Load GPS beacon, verify communication                                     │
│                                                                               │
│  Duration: 2-4 hours                                                         │
│                                                                               │
│  PHASE 2: TRANSIT (Di chuyển) - Shore to firing zone                         │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│        SHORE                         FIRING ZONE                             │
│         ┌─┐                              ×                                   │
│         │D│══════════════════════════════▶                                   │
│         │E│    Tow/transport            Target                               │
│         │P│    10-30 km                 position                             │
│         │O│    2-4 hours                                                     │
│         │T│                                                                  │
│         └─┘                                                                  │
│                                                                               │
│  Duration: 2-4 hours (depending on distance)                                 │
│                                                                               │
│  PHASE 3: DEPLOYMENT (Triển khai) - At firing position                       │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  Step 3.1: Position target at designated GPS coordinates                     │
│  Step 3.2: Deploy anchor (drop anchor, verify holding)                       │
│  Step 3.3: Release target from deployment vessel                             │
│  Step 3.4: Verify target stable, signatures ready                            │
│  Step 3.5: Activate GPS beacon                                               │
│  Step 3.6: Start IR timer countdown                                          │
│                                                                               │
│         ┌─────────┐                                                          │
│         │ DEPLOY  │                                                          │
│         │ VESSEL  │──────────▶ WITHDRAWS to safe distance (5+ km)           │
│         └─────────┘                                                          │
│              │                                                               │
│              │ Drop target                                                   │
│              ▼                                                               │
│         ┌─────────┐                                                          │
│         │ TARGET  │ ← Stationary, anchored                                  │
│         │   ⚓    │                                                          │
│         └─────────┘                                                          │
│                                                                               │
│  Duration: 30-60 minutes                                                     │
│                                                                               │
│  PHASE 4: ENGAGEMENT (Bắn) - Target stationary, all vessels clear           │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│                    SAFE ZONE (5+ km radius)                                  │
│         ┌──────────────────────────────────────────┐                        │
│         │                                          │                        │
│         │                  ┌─────┐                 │                        │
│         │                  │ TGT │                 │                        │
│         │                  │  ⚓  │                 │                        │
│         │                  └──┬──┘                 │                        │
│         │                     │                    │                        │
│         │                     │                    │                        │
│         └─────────────────────┼────────────────────┘                        │
│                               │                                             │
│                               │ 20-50 km                                    │
│                               │                                             │
│                          ┌────┴────┐                                        │
│                          │ WARSHIP │                                        │
│                          │   🚀    │ ← Fires missile                        │
│                          └─────────┘                                        │
│                                                                               │
│  IR timer activates → IR signature ON                                        │
│  Missile locks on target                                                    │
│  Missile impacts → Target destroyed                                         │
│                                                                               │
│  PHASE 5: CONFIRMATION (Xác nhận)                                            │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  □ Confirm target destruction (radar/visual)                                 │
│  □ GPS beacon stops transmitting (destroyed) or continues (miss)             │
│  □ Document results                                                          │
│  □ Clear debris if required                                                  │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 1.2 Key Advantages of Anchored Design

| Factor | Anchored Target | Towed Target | Advantage |
|--------|-----------------|--------------|-----------|
| **Safety** | No vessel in danger zone | Tow vessel at 500-1000m | **MUCH SAFER** |
| **Stability** | Only wave motion | Wave + tow dynamics | **MORE STABLE RCS** |
| **Position accuracy** | Fixed GPS coordinate | Moving, variable | **PREDICTABLE** |
| **Tow vessel cost** | Transit only, withdraws | Must remain throughout | **LOWER OPEX** |
| **Signature consistency** | No tow-induced roll | Cable tension varies | **MORE RELIABLE** |
| **Sea state tolerance** | Better (no cable) | Limited by cable | **WIDER ENVELOPE** |

---

# PART 2: CUSTOMER DISCOVERY (D₀-M₀-I₀-R₀)

## 2.1 D₀: Revised Customer Diagnosis

### Job-to-be-Done Statement (Anchored Context)

**Core Job:**
> "Khi nghiệm thu hệ thống tên lửa chống tàu, tôi muốn **BẮN VÀO MỤC TIÊU CỐ ĐỊNH TẠI TỌA ĐỘ XÁC ĐỊNH** để **ĐÁNH GIÁ TOÀN BỘ CHUỖI TÁC CHIẾN** (phát hiện → bắt bám → bắn → dẫn → trúng) mà không cần **TÀU KÉO HIỆN DIỆN TRONG VÙNG NGUY HIỂM**"

### 2.2 M₀: Revised Outcome Database

| # | Job Step | Outcome Statement | Est. Imp | Est. Sat | OpSc |
|---|----------|-------------------|----------|----------|------|
| 1 | CONFIRM | **Minimize likelihood missile seeker fails to acquire STATIONARY target** | 9.8 | 4.0 | **15.6** |
| 2 | DEPLOY | **Minimize time from anchor drop to target ready** | 8.5 | 4.5 | **12.5** |
| 3 | DEPLOY | **Minimize position drift after anchoring** | 9.0 | 5.0 | **13.0** |
| 4 | CONFIRM | **Increase reliability of target radar signature at fixed position** | 9.5 | 4.5 | **14.5** |
| 5 | PREPARE | **Minimize number of personnel required for deployment** | 7.5 | 5.0 | **10.0** |
| 6 | EXECUTE | **Minimize cost per acceptance test** | 9.2 | 3.5 | **15.0** |
| 7 | CONFIRM | **Increase IR signature visibility from all approach angles** | 9.0 | 4.0 | **14.0** |
| 8 | DEPLOY | **Minimize sea state dependency for deployment** | 8.0 | 5.5 | **10.5** |
| 9 | DEPLOY | **Minimize anchor system complexity** | 7.5 | 5.0 | **10.0** |
| 10 | CONCLUDE | **Increase certainty of hit/miss determination** | 8.5 | 5.5 | **11.5** |
| 11 | PREPARE | **Minimize pre-deployment preparation time at depot** | 7.0 | 6.0 | **8.0** |
| 12 | SAFETY | **Maximize safe distance for deployment vessel** | 9.5 | 7.0 | **12.0** |

### Opportunity Landscape (Revised for Anchored)

```
EXTREME OPPORTUNITIES (OpSc > 14):
══════════════════════════════════════════════════════════════

1. Seeker acquisition of STATIONARY target (OpSc 15.6)
   → RCS must be sufficient at ZERO relative motion
   → Doppler shift = 0 (different from moving target!)

2. Cost per engagement (OpSc 15.0)
   → Expendable target, no recovery
   → Simplified anchor system

3. Radar signature at fixed position (OpSc 14.5)
   → ALL aspect angles (360°) since target orientation may rotate
   → Anchor swing changes aspect to firing ship

4. IR signature from all angles (OpSc 14.0)
   → Cannot predict which side faces firing ship
   → 360° IR coverage needed

>>> CRITICAL DIFFERENCE: 360° COVERAGE REQUIRED <<<
>>> (Towed target only needs bow-aspect coverage) <<<
```

---

# PART 3: REQUIREMENTS TRANSFORMATION

## 3.1 Outcome → Requirement (Anchored-Specific)

| Outcome | OpSc | Requirement (Anchored) | D/W |
|---------|------|------------------------|-----|
| Seeker acquisition (stationary) | 15.6 | RCS ≥ 150 m² from ANY aspect (360°) | **D** |
| Position drift | 13.0 | Position hold ±50m in SS 3 | **D** |
| Radar consistency | 14.5 | RCS variation ≤ ±3 dB through 360° rotation | **D** |
| IR from all angles | 14.0 | IR emission visible 360° azimuth | **D** |
| Cost per engagement | 15.0 | Unit cost ≤ $40,000 | **D** |
| Deployment time | 12.5 | Anchor + ready in ≤ 30 minutes | **D** |
| Sea state | 10.5 | Deploy in SS 0-3, survive SS 4 | D |
| Safe distance | 12.0 | Deployment vessel clears 5+ km | D |

## 3.2 Critical Design Implication: 360° Signature

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              CRITICAL: 360° SIGNATURE REQUIREMENT                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║  WHY 360° IS REQUIRED FOR ANCHORED TARGET:                                   ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║                                                                               ║
║  TOWED TARGET:                     ANCHORED TARGET:                          ║
║  ─────────────                     ───────────────                           ║
║                                                                               ║
║      WARSHIP                           WARSHIP                               ║
║         │                                 │                                  ║
║         │                                 │                                  ║
║         │ Missile                         │ Missile                          ║
║         ▼                                 ▼                                  ║
║      ┌─────┐                          ┌─────┐                               ║
║      │ TGT │ ←── Always bow-on        │ TGT │ ←── May swing on anchor       ║
║      └──┬──┘     to tow direction     └──┬──┘     ANY ORIENTATION!          ║
║         │                                │                                   ║
║         │ Tow cable                      ⚓ Anchor                            ║
║         ▼                                │                                   ║
║      TOW VESSEL                    Wind/current rotates target              ║
║                                                                               ║
║  → Only need ±35° aspect           → Need FULL 360° coverage                ║
║  → 6 reflectors at bow             → Reflectors around perimeter            ║
║  → IR at bow                       → IR visible from all sides              ║
║                                                                               ║
║  DESIGN IMPACT:                                                              ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • RCS: Omnidirectional reflector arrangement (not bow-focused)             ║
║  • IR: Central elevated position OR multiple emitters                       ║
║  • Hull: Symmetric (no "bow" preference)                                    ║
║  • Cost: More reflectors, but simpler tow system                            ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# PART 4: FUNCTION STRUCTURE (Anchored Target)

## 4.1 Overall Function

```
┌──────────────────────────────────────────────────────────────────────────────┐
│              FUNCTION STRUCTURE: VN-AST-MSL-001 ANCHORED TARGET              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  OVERALL FUNCTION:                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────┐│
│  │ Provide STATIONARY ship-signature target at fixed position               ││
│  │ for missile acceptance testing                                           ││
│  └─────────────────────────────────────────────────────────────────────────┘│
│                                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │ F1: TRANSPORT   │  │ F2: ANCHOR      │  │ F3: GENERATE    │              │
│  │ TO POSITION     │  │ AT POSITION     │  │ 360° RADAR SIG  │              │
│  │                 │  │                 │  │                 │              │
│  │ F1.1 Tow from   │  │ F2.1 Deploy     │  │ F3.1 Reflect    │              │
│  │      shore      │  │      anchor     │  │      X-band 360°│              │
│  │ F1.2 Navigate   │  │ F2.2 Hold       │  │ F3.2 Reflect    │              │
│  │      to GPS     │  │      position   │  │      Ku-band    │              │
│  │ F1.3 Release    │  │ F2.3 Resist     │  │ F3.3 Maintain   │              │
│  │      from tug   │  │      drift      │  │      consistency│              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
│                                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │ F4: GENERATE    │  │ F5: FLOAT       │  │ F6: ENABLE      │              │
│  │ 360° IR SIG     │  │ STABLE          │  │ CONFIRMATION    │              │
│  │                 │  │                 │  │                 │              │
│  │ F4.1 Emit MWIR  │  │ F5.1 Maintain   │  │ F6.1 Transmit   │              │
│  │      all angles │  │      buoyancy   │  │      position   │              │
│  │ F4.2 Timer      │  │ F5.2 Resist     │  │ F6.2 Indicate   │              │
│  │      ignition   │  │      capsize    │  │      hit/miss   │              │
│  │ F4.3 Duration   │  │ F5.3 Limit      │  │ F6.3 Visual     │              │
│  │      30+ min    │  │      roll/pitch │  │      marker     │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
│                                                                               │
│  CRITICAL FUNCTIONS:                                                         │
│  • F2 (Anchor) - NEW vs towed: Must hold position without tow vessel        │
│  • F3 (360° RCS) - DIFFERENT vs towed: All-aspect not bow-only              │
│  • F4 (360° IR) - DIFFERENT vs towed: All-aspect coverage                   │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 5: MORPHOLOGICAL MATRIX (Anchored)

## 5.1 Morphological Matrix

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ MORPHOLOGICAL MATRIX: VN-AST-MSL-001 ANCHORED TARGET                         │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ Sub-         │ Solution 1        │ Solution 2        │ Solution 3          │
│ function     │                   │                   │                     │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F1: Transport│ Tow by tug boat   │ Self-deploy barge │ Helicopter sling    │
│ to position  │ (simple, cheap)   │ (autonomous)      │ (fast, expensive)   │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F2: Anchor   │ Single anchor     │ 3-point mooring   │ Sea anchor (drogue) │
│ system       │ + chain           │ spread            │ (drift limited)     │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F2: Anchor   │ Danforth (sand)   │ Mushroom (mud)    │ Concrete block      │
│ type         │                   │                   │ (any bottom)        │
│              │      [○]          │      [○]          │      [●]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F3: RCS      │ Central mast      │ Perimeter array   │ Octahedral          │
│ 360° config  │ 4 reflectors      │ 8 reflectors      │ reflector           │
│              │      [○]          │      [●]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F3: Reflector│ Trihedral corner  │ Mesh panels       │ Luneberg lens       │
│ type         │ (simple, proven)  │ (lighter)         │ (omni, expensive)   │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F4: IR 360°  │ Central elevated  │ 4 emitters at     │ Rotating emitter    │
│ configuration│ emitter           │ corners           │ (complex)           │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F4: IR source│ Propane burner    │ Electric heater   │ IR flares (pyro)    │
│              │ (high output)     │ (controllable)    │ (very high)         │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F5: Hull     │ Circular pontoon  │ Square barge      │ Catamaran           │
│ configuration│ (omni stable)     │ (simple build)    │ (directional)       │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F5: Hull     │ Steel pontoon     │ HDPE rotomold     │ Inflatable          │
│ material     │ (local, heavy)    │ (light, local)    │ (light, fragile)    │
│              │      [○]          │      [●]          │      [○]            │
│ ─────────────┼───────────────────┼───────────────────┼─────────────────────│
│              │                   │                   │                     │
│ F6: Position │ GPS beacon        │ Radar transponder │ Visual marker only  │
│ indication   │ (simple)          │ (active)          │ (cheapest)          │
│              │      [●]          │      [○]          │      [○]            │
│ ─────────────┴───────────────────┴───────────────────┴─────────────────────│
│                                                                               │
│ SELECTED COMBINATION: [●] markers                                            │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Concept Variants (Anchored)

### Variant A: Minimal Anchored Target

```
VARIANT A: MINIMAL ANCHORED TARGET
══════════════════════════════════════════════════════════════

Configuration:
• Circular HDPE pontoon, 5m diameter
• Single concrete block anchor (200 kg)
• 4 corner reflectors on central mast (0.4m each)
• Single propane burner, elevated center
• GPS beacon
• No superstructure

Estimated Cost: $22,000
RCS: 150-200 m² (omnidirectional)
IR: 200°C, 20 min duration
Position hold: ±100m in SS 3
Indigenous: 95%
```

### Variant B: Enhanced Anchored Target (RECOMMENDED)

```
VARIANT B: ENHANCED ANCHORED TARGET
══════════════════════════════════════════════════════════════

Configuration:
• Circular HDPE pontoon, 6m diameter
• Single concrete block anchor (300 kg) + chain
• 8 corner reflectors perimeter array (0.4m each)
• Central elevated propane burner (360° visible)
• GPS beacon + visual marker flag
• Foam-filled for damage tolerance
• Superstructure silhouette (foam block)

Estimated Cost: $32,000
RCS: 250-350 m² (omnidirectional, consistent)
IR: 250°C, 30 min duration
Position hold: ±50m in SS 3
Indigenous: 90%
```

### Variant C: Premium Anchored Target

```
VARIANT C: PREMIUM ANCHORED TARGET
══════════════════════════════════════════════════════════════

Configuration:
• Hexagonal steel pontoon, 7m diameter
• 3-point mooring system (3 anchors)
• 12 corner reflectors + 2 Luneberg lenses
• Dual propane burners + electric backup
• GPS + radar transponder + telemetry
• Full ship silhouette structure

Estimated Cost: $55,000
RCS: 400-500 m² (omnidirectional)
IR: 300°C, 45 min duration
Position hold: ±20m in SS 4
Indigenous: 60%
```

---

# PART 6: VDI 2225 EVALUATION (Anchored Variants)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ VDI 2225 EVALUATION: VN-AST-MSL-001 ANCHORED TARGET                          │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ SCALE: 0 (Unacceptable) - 1 (Tolerable) - 2 (Adequate) - 3 (Good) - 4 (Ideal)│
│                                                                               │
│ CRITERION                      │ Weight │ Var A │ Var B │ Var C             │
│ ──────────────────────────────┼────────┼───────┼───────┼───────────────────│
│                                │        │       │       │                   │
│ O1: 360° Seeker Acquisition    │  0.20  │   2   │   3   │     4             │
│     (RCS sufficient all angles)│        │       │       │                   │
│                                │        │       │       │                   │
│ O2: Position Hold (drift)      │  0.15  │   2   │   3   │     4             │
│     (±50m in SS 3)             │        │       │       │                   │
│                                │        │       │       │                   │
│ O3: Cost per Engagement        │  0.18  │   4   │   3   │     2             │
│     (< $40K target)            │        │       │       │                   │
│                                │        │       │       │                   │
│ O4: 360° IR Signature          │  0.15  │   2   │   3   │     4             │
│     (visible all angles)       │        │       │       │                   │
│                                │        │       │       │                   │
│ O5: Deployment Simplicity      │  0.10  │   4   │   3   │     2             │
│     (single anchor, fast)      │        │       │       │                   │
│                                │        │       │       │                   │
│ O6: Sea State Tolerance        │  0.07  │   2   │   3   │     4             │
│     (deploy SS 3, survive SS 4)│        │       │       │                   │
│                                │        │       │       │                   │
│ O7: Indigenous Content         │  0.10  │   4   │   4   │     2             │
│     (> 85% target)             │        │       │       │                   │
│                                │        │       │       │                   │
│ O8: RCS Consistency (360°)     │  0.05  │   2   │   3   │     4             │
│     (≤ ±3 dB variation)        │        │       │       │                   │
│ ──────────────────────────────┼────────┼───────┼───────┼───────────────────│
│                                │        │       │       │                   │
│ WEIGHTED TECHNICAL SUM         │  1.00  │ 2.67  │ 3.07  │   3.20            │
│                                │        │       │       │                   │
│ ──────────────────────────────┼────────┼───────┼───────┼───────────────────│
│                                │        │       │       │                   │
│ COST ASSESSMENT:               │        │       │       │                   │
│ Unit Cost                      │        │ $22K  │ $32K  │   $55K            │
│ Cost Index (rel. to min)       │        │ 1.00  │ 1.45  │   2.50            │
│                                │        │       │       │                   │
│ VALUE INDEX (Tech/Cost)        │        │ 2.67  │ 2.12  │   1.28            │
│                                │        │       │       │                   │
│ ══════════════════════════════════════════════════════════════════════════ │
│                                                                               │
│ WEAK SPOT ANALYSIS:                                                          │
│                                                                               │
│ Variant A:                                                                   │
│ • Score 2 on O1 (360° RCS) - only 4 reflectors, gaps in coverage            │
│ • Score 2 on O4 (360° IR) - single emitter may be blocked                   │
│ • Score 2 on O2 (position) - light anchor, more drift                       │
│ → Multiple weak spots on CRITICAL criteria                                  │
│                                                                               │
│ Variant B:                                                                   │
│ • All critical criteria at 3 (Good) - no weak spots                          │
│ • Within budget at $32K < $40K limit                                         │
│ • High indigenous content (90%)                                              │
│                                                                               │
│ Variant C:                                                                   │
│ • Best technical scores but over budget                                      │
│ • 3-point mooring complex to deploy                                          │
│ • Low indigenous content (import dependent)                                  │
│                                                                               │
│ ══════════════════════════════════════════════════════════════════════════ │
│                                                                               │
│ DECISION: VARIANT B - ENHANCED ANCHORED TARGET                               │
│                                                                               │
│ Rationale:                                                                   │
│ 1. No weak spots on critical criteria (all scores ≥ 3)                       │
│ 2. Within budget ($32K < $40K)                                              │
│ 3. Simple single-anchor deployment                                           │
│ 4. 90% indigenous content                                                    │
│ 5. 8-reflector perimeter provides true 360° RCS coverage                    │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 7: SELECTED CONCEPT SPECIFICATION

## VN-AST-MSL-001 "THÀNH TRÌ" Specification

```
╔══════════════════════════════════════════════════════════════════════════════╗
║         VN-AST-MSL-001 "THÀNH TRÌ" (FORTRESS)                                ║
║         ANCHORED STATIONARY MISSILE ACCEPTANCE TARGET                        ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                              TOP VIEW                                        ║
║                          ┌─────────────┐                                     ║
║                         /   ◢  ◣  ◢   \                                     ║
║                        /  ◢         ◣  \    ← 8 reflectors                  ║
║                       │ ◣     🔥     ◢ │      around perimeter              ║
║                       │      IR        │                                     ║
║                       │ ◢   BURNER   ◣ │    ← Central elevated              ║
║                        \  ◣         ◢  /      propane burner                ║
║                         \   ◣  ◢  ◣   /                                     ║
║                          └─────────────┘                                     ║
║                               │                                              ║
║                               │ Chain                                        ║
║                               │                                              ║
║                              ⚓                                               ║
║                         Concrete anchor                                      ║
║                            (300 kg)                                          ║
║                                                                               ║
║  DIMENSIONS:                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Platform diameter: 6.0 m (circular pontoon)                              ║
║  • Platform height: 0.6 m (freeboard 0.4 m)                                 ║
║  • Superstructure height: 2.5 m (foam block silhouette)                     ║
║  • Total height above water: 3.0 m                                          ║
║  • Displacement: 800 kg (loaded)                                            ║
║                                                                               ║
║  ANCHOR SYSTEM:                                                              ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Anchor type: Concrete block, 300 kg                                      ║
║  • Chain: 12mm galvanized, 50m length                                       ║
║  • Scope ratio: 5:1 minimum (for 10m depth)                                 ║
║  • Position hold: ±50m in SS 3, ±100m in SS 4                               ║
║  • Bottom types: Sand, mud, rock (concrete universal)                       ║
║                                                                               ║
║  RADAR SIGNATURE (360°):                                                     ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Configuration: 8 trihedral corner reflectors, 45° spacing                ║
║  • Reflector size: 0.4m sides each                                          ║
║  • Individual RCS: ~100 m² per reflector @ X-band                           ║
║  • Combined RCS: 250-350 m² from ANY aspect angle                           ║
║  • RCS variation: ≤ ±2 dB through 360° rotation                             ║
║  • Frequency coverage: X-band (9-10 GHz), Ku-band (13-17 GHz)               ║
║                                                                               ║
║  INFRARED SIGNATURE (360°):                                                  ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Configuration: Single elevated burner on 2.5m mast                       ║
║  • Emitter: Propane burner with heat shield/diffuser                        ║
║  • Apparent temperature: 250°C equivalent blackbody                         ║
║  • Emission band: 3-5 μm (MWIR)                                             ║
║  • Aspect coverage: 360° azimuth (elevated above platform)                  ║
║  • Duration: 30 minutes (2 kg propane tank)                                 ║
║  • Ignition: Timer-based, preset at deployment                              ║
║                                                                               ║
║  DEPLOYMENT:                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Tow to position: By tug boat or patrol vessel                            ║
║  • Transit speed: 5-8 knots                                                 ║
║  • Anchor deployment: Drop anchor, verify holding                           ║
║  • Time to ready: 30 minutes from arrival at position                       ║
║  • Crew required: 3-4 personnel (tug crew)                                  ║
║  • Sea state for deployment: SS 0-3                                         ║
║                                                                               ║
║  POSITION REPORTING:                                                         ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • GPS beacon: Waterproof, buoyant                                          ║
║  • Position accuracy: ±5 m                                                  ║
║  • Update rate: 1 Hz                                                        ║
║  • Battery life: 8 hours                                                    ║
║  • Visual marker: Orange flag on 3m pole                                    ║
║                                                                               ║
║  MISSILE COMPATIBILITY:                                                      ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • C-802 / YJ-82 (Chinese): X-band active radar + IR                        ║
║  • Kh-35 Uran (Russian): X-band active radar                                ║
║  • Exocet (French): X/Ku-band active radar                                  ║
║  • Other X/Ku-band active radar seekers                                     ║
║  • IR-guided variants (with IR signature active)                            ║
║                                                                               ║
║  COST:                                                                       ║
║  ─────────────────────────────────────────────────────────────────────────  ║
║  • Development cost: $150,000                                               ║
║  • Unit production cost: $32,000 (@ 10 units)                               ║
║  • Unit cost @ 50 units: $25,000                                            ║
║  • Indigenous content: 90%                                                  ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# PART 8: COMPONENT BREAKDOWN

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ COMPONENT BREAKDOWN: VN-AST-MSL-001 "THÀNH TRÌ"                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ COMPONENT                  │ QTY │ UNIT COST │ TOTAL  │ INDIGENOUS │         │
│ ───────────────────────────┼─────┼───────────┼────────┼────────────┼─────────│
│                            │     │           │        │            │         │
│ PLATFORM SYSTEM            │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ Circular pontoon (HDPE 6m) │  1  │   $5,000  │ $5,000 │    100%    │ Local   │
│ Foam filling               │ lot │   $1,500  │ $1,500 │    100%    │ Local   │
│ Deck plating               │  1  │   $1,000  │ $1,000 │    100%    │ Local   │
│ Superstructure (foam block)│  1  │     $800  │   $800 │    100%    │ Local   │
│                            │     │           │        │            │         │
│ ANCHOR SYSTEM              │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ Concrete anchor block 300kg│  1  │     $200  │   $200 │    100%    │ Local   │
│ Anchor chain 12mm × 50m    │  1  │     $500  │   $500 │    100%    │ Local   │
│ Swivel + shackles          │  1  │     $150  │   $150 │    100%    │ Local   │
│ Chain stopper              │  1  │     $100  │   $100 │    100%    │ Local   │
│                            │     │           │        │            │         │
│ RCS SYSTEM (360°)          │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ Corner reflectors 0.4m     │  8  │   $1,000  │ $8,000 │     90%    │ Local+Al│
│ Reflector mounts           │  8  │     $100  │   $800 │    100%    │ Local   │
│ Central mast (steel 2.5m)  │  1  │     $300  │   $300 │    100%    │ Local   │
│                            │     │           │        │            │         │
│ IR SYSTEM (360°)           │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ Propane burner assembly    │  1  │   $2,000  │ $2,000 │     80%    │ Local   │
│ Propane tank (2 kg)        │  1  │     $100  │   $100 │    100%    │ Local   │
│ Timer ignition system      │  1  │     $300  │   $300 │    100%    │ Local   │
│ Heat shield/diffuser       │  1  │     $200  │   $200 │    100%    │ Local   │
│                            │     │           │        │            │         │
│ POSITION SYSTEM            │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ GPS beacon (waterproof)    │  1  │   $1,500  │ $1,500 │     20%    │ Import  │
│ Visual marker flag + pole  │  1  │     $100  │   $100 │    100%    │ Local   │
│                            │     │           │        │            │         │
│ FINISHING                  │     │           │        │            │         │
│ ─────────────────────────  │     │           │        │            │         │
│ Marine paint               │ lot │     $400  │   $400 │    100%    │ Local   │
│ Fasteners/hardware         │ lot │     $300  │   $300 │    100%    │ Local   │
│ Lifting eyes               │  4  │      $50  │   $200 │    100%    │ Local   │
│ Tow attachment point       │  1  │     $150  │   $150 │    100%    │ Local   │
│ ───────────────────────────┼─────┼───────────┼────────┼────────────┼─────────│
│ SUBTOTAL (Materials)       │     │           │$23,600 │            │         │
│ Labor (assembly 60 hrs)    │     │           │ $3,000 │    100%    │         │
│ QC/Testing                 │     │           │ $2,000 │    100%    │         │
│ RCS measurement            │     │           │ $1,500 │    100%    │         │
│ Packaging/transport        │     │           │   $500 │    100%    │         │
│ Margin (5%)                │     │           │ $1,400 │            │         │
│ ───────────────────────────┼─────┼───────────┼────────┼────────────┼─────────│
│ TOTAL UNIT COST            │     │           │$32,000 │     90%    │         │
│                            │     │           │        │            │         │
│ IMPORT COMPONENTS: GPS module only                                           │
│ NO DYNEEMA CABLE NEEDED (vs towed target)                                    │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 9: COMPARISON - ANCHORED vs TOWED

```
╔══════════════════════════════════════════════════════════════════════════════╗
║         COMPARISON: ANCHORED vs TOWED MISSILE TARGET                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║                        │ ANCHORED (VN-AST)    │ TOWED (Previous)             ║
║ ───────────────────────┼──────────────────────┼──────────────────────────────║
║                        │                      │                              ║
║ OPERATIONAL            │                      │                              ║
║ ─────────              │                      │                              ║
║ Target motion          │ STATIONARY           │ Moving 10-15 kn              ║
║ Position               │ FIXED (GPS)          │ Variable (follows tow)       ║
║ Tow vessel at firing   │ NO (withdrawn)       │ YES (500-1000m away)         ║
║ Safety zone            │ Around target only   │ Around target + tow vessel   ║
║                        │                      │                              ║
║ SIGNATURE              │                      │                              ║
║ ──────────             │                      │                              ║
║ RCS coverage           │ 360° (anchor swing)  │ ±35° (bow aspect)            ║
║ IR coverage            │ 360° (central mast)  │ ±40° (bow mounted)           ║
║ Reflector count        │ 8 (perimeter)        │ 6 (bow cluster)              ║
║ Stability              │ BETTER (no tow)      │ Tow-induced motion           ║
║                        │                      │                              ║
║ COMPLEXITY             │                      │                              ║
║ ───────────            │                      │                              ║
║ Tow cable              │ NOT NEEDED           │ 750m Dyneema ($2,250)        ║
║ Bridle system          │ NOT NEEDED           │ Y-bridle + swivel            ║
║ Anchor system          │ REQUIRED ($950)      │ Not needed                   ║
║ Overall complexity     │ SIMPLER              │ More complex                 ║
║                        │                      │                              ║
║ COST                   │                      │                              ║
║ ─────                  │                      │                              ║
║ Unit cost              │ $32,000              │ $35,000                      ║
║ Tow cable savings      │ +$2,250              │ -                            ║
║ Anchor system cost     │ -$950                │ -                            ║
║ Net difference         │ $3,000 CHEAPER       │ -                            ║
║                        │                      │                              ║
║ OPERATIONAL COST       │                      │                              ║
║ ────────────────       │                      │                              ║
║ Tow vessel during test │ NOT NEEDED           │ REQUIRED (risk pay)          ║
║ Deployment time        │ ~4 hours             │ ~4 hours                     ║
║ Crew risk              │ LOWER                │ Higher (vessel in zone)      ║
║                        │                      │                              ║
║ ADVANTAGES             │                      │                              ║
║ ────────────           │                      │                              ║
║ Anchored wins:         │ ✓ Safer operation    │                              ║
║                        │ ✓ Simpler system     │                              ║
║                        │ ✓ Lower cost         │                              ║
║                        │ ✓ Better stability   │                              ║
║                        │ ✓ No cable risk      │                              ║
║                        │                      │                              ║
║ Towed wins:            │                      │ ✓ Moving target realism      ║
║                        │                      │ ✓ Speed/maneuver test        ║
║                        │                      │                              ║
║ ═══════════════════════════════════════════════════════════════════════════ ║
║                                                                               ║
║ CONCLUSION: For ACCEPTANCE TEST (verify seeker works), ANCHORED is better   ║
║ For TACTICAL TRAINING (engage maneuvering target), TOWED would be better    ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# PART 10: IMPLEMENTATION ROADMAP

```
┌──────────────────────────────────────────────────────────────────────────────┐
│               VN-AST-MSL-001 DEVELOPMENT TIMELINE                            │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  PHASE 1: DESIGN & PROTOTYPE (Months 1-3)                                    │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  Month 1              Month 2              Month 3                           │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐              │
│  │ Detailed Design │  │ Fabrication     │  │ Assembly +      │              │
│  │                 │  │                 │  │ Initial Test    │              │
│  │ • CAD model     │  │ • HDPE pontoon  │  │ • Integrate     │              │
│  │ • RCS simulation│  │ • Reflectors    │  │ • RCS measure   │              │
│  │ • Anchor calc   │  │ • Burner system │  │ • Float test    │              │
│  │ • Procurement   │  │ • Anchor block  │  │ • Anchor test   │              │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘              │
│                                                                               │
│  PHASE 2: VALIDATION (Months 4-5)                                            │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  Month 4                              Month 5                                │
│  ┌────────────────────────────────┐  ┌────────────────────────────────────┐ │
│  │ Sea Trial                      │  │ Seeker Compatibility Test          │ │
│  │                                │  │                                    │ │
│  │ • Deploy at test location      │  │ • Present to actual missile seeker │ │
│  │ • Anchor holding test (SS 2-3) │  │ • Verify acquisition from all angles│ │
│  │ • 360° RCS measurement         │  │ • IR lock verification             │ │
│  │ • IR signature verification    │  │ • Document performance             │ │
│  │ • Position drift monitoring    │  │                                    │ │
│  └────────────────────────────────┘  └────────────────────────────────────┘ │
│                                                                               │
│  PHASE 3: PRODUCTION (Months 6-10)                                           │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  Month 6-7                        Month 8-10                                 │
│  ┌────────────────────────────┐  ┌────────────────────────────────────────┐ │
│  │ Production Setup           │  │ Initial Production (10 units)          │ │
│  │                            │  │                                        │ │
│  │ • Finalize drawings        │  │ • Build 10-unit batch                  │ │
│  │ • Supply chain confirm     │  │ • Quality control each unit            │ │
│  │ • Train production team    │  │ • RCS verification per unit            │ │
│  │ • Jigs and fixtures        │  │ • Customer acceptance                  │ │
│  └────────────────────────────┘  └────────────────────────────────────────┘ │
│                                                                               │
│  ═══════════════════════════════════════════════════════════════════════════│
│                                                                               │
│  MILESTONES:                                                                 │
│  M1: Design complete                    Month 1                              │
│  M2: Prototype complete                 Month 3                              │
│  M3: Sea trial passed                   Month 4                              │
│  M4: Seeker compatibility confirmed     Month 5                              │
│  M5: Production ready                   Month 7                              │
│  M6: First batch delivered              Month 10                             │
│                                                                               │
│  BUDGET SUMMARY:                                                             │
│  • Development (Phases 1-2): $150,000                                       │
│  • First production batch (10 units): $320,000                              │
│  • TOTAL PROGRAM: $470,000                                                  │
│                                                                               │
│  >>> $60,000 LESS than towed target program ($530,000) <<<                  │
│                                                                               │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 11: 4-LEVEL REFLECTION

```
╔══════════════════════════════════════════════════════════════════════════════╗
║ R₅ STRATEGIC REFLECTION: ANCHORED TARGET ANALYSIS                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ LEVEL 1: OPERATIONAL                                                         ║
║ ─────────────────────────────────────────────────────────────────────────── ║
║ What changed with clarification:                                             ║
║ • "Kéo ra vị trí, cố định bằng neo" → Completely different system           ║
║ • No tow cable needed during engagement                                      ║
║ • 360° signature required (vs bow-aspect for towed)                          ║
║                                                                               ║
║ LEVEL 2: TACTICAL                                                            ║
║ ─────────────────────────────────────────────────────────────────────────── ║
║ Design implications:                                                         ║
║ • Circular platform (not catamaran) for omni-directional stability          ║
║ • Perimeter reflector array (not bow cluster)                               ║
║ • Central elevated IR (not bow-mounted)                                     ║
║ • Concrete anchor + chain (not Dyneema tow cable)                           ║
║                                                                               ║
║ LEVEL 3: STRATEGIC                                                           ║
║ ─────────────────────────────────────────────────────────────────────────── ║
║ Value proposition change:                                                    ║
║ • SAFER: No vessel in danger zone during firing                             ║
║ • SIMPLER: No complex tow system                                            ║
║ • CHEAPER: $32K vs $35K per unit                                            ║
║ • MORE RELIABLE: Stationary = consistent signature                          ║
║                                                                               ║
║ LEVEL 4: PARADIGM                                                            ║
║ ─────────────────────────────────────────────────────────────────────────── ║
║                                                                               ║
║ PARADIGM CORRECTION:                                                         ║
║ ┌─────────────────────────────────────────────────────────────────────────┐║
║ │ WRONG ASSUMPTION: "Towed target" = target being towed during engagement │║
║ │                                                                          │║
║ │ CORRECT UNDERSTANDING: "Towed to position" ≠ "Towed during engagement" │║
║ │                                                                          │║
║ │ The target is:                                                           │║
║ │ • TOWED to the firing zone (transport)                                  │║
║ │ • ANCHORED at the firing position                                        │║
║ │ • STATIONARY during missile engagement                                   │║
║ │ • DESTROYED on impact                                                    │║
║ └─────────────────────────────────────────────────────────────────────────┘║
║                                                                               ║
║ LISTENING LESSON:                                                            ║
║ Customer said "kéo từ bờ ra vị trí bắn, cố định bằng neo"                   ║
║ • "Kéo từ bờ ra" = tow from shore (TRANSPORT mode)                          ║
║ • "Cố định bằng neo" = anchored fixed (ENGAGEMENT mode)                     ║
║                                                                               ║
║ → Two different operational phases, two different designs                   ║
║ → Initial analysis assumed "towed target" = moving during engagement        ║
║ → Correct interpretation: anchored stationary target                        ║
║                                                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

# SUMMARY: VN-AST-MSL-001 "THÀNH TRÌ"

| Specification | Value |
|---------------|-------|
| **Product Name** | VN-AST-MSL-001 "THÀNH TRÌ" (Fortress) |
| **Type** | Anchored Stationary Missile Acceptance Target |
| **Platform** | Circular HDPE pontoon, 6m diameter |
| **RCS** | 250-350 m², 360° coverage, 8 corner reflectors |
| **IR** | 250°C MWIR, 360° from central elevated burner |
| **Anchor** | 300 kg concrete block + 50m chain |
| **Position hold** | ±50m in SS 3 |
| **Unit cost** | $32,000 (@ 10 units) |
| **Indigenous content** | 90% |
| **Development** | 5 months, $150,000 |
| **Total program** | $470,000 (10 units) |

---

**Key Insight:** Bia cố định neo (Anchored Stationary Target) là giải pháp **đơn giản hơn, an toàn hơn, và rẻ hơn** so với bia kéo di chuyển (Towed Moving Target) cho mục đích **kiểm tra nghiệm thu tên lửa**.

---

*"Đơn giản là đỉnh cao của tinh vi - Bia cố định đạt mục tiêu với ít phức tạp hơn."*

*"Simplicity is the ultimate sophistication - The anchored target achieves the objective with less complexity."*
