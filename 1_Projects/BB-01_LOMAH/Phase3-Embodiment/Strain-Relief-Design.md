# Strain Relief Design - BB-01 Microphone Cables

> **Issue ID**: DfA-002
> **Status**: ✅ COMPLETE
> **Date**: 2026-01-28

---

## 1. Problem Statement

| Issue | Impact | Root Cause |
|-------|--------|------------|
| No strain relief for mic cables | Cable fatigue → Open circuit | Vibration + wave motion |
| FMEA RPN | **252** (High) | M04 in [[FMEA-MCU-Box]] |

**Requirement**: Cables must withstand marine vibration without connector stress.

---

## 2. Design Solution

### 2.1 Strain Relief System

```
┌─────────────────────────────────────────────────────────────────┐
│              STRAIN RELIEF DESIGN                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  EXTERNAL (Cable Gland)                                         │
│  ━━━━━━━━━━━━━━━━━━━━━                                         │
│                                                                  │
│       ┌─────────────┐                                           │
│       │ Cable Gland │ ← IP68 M12, compression seal              │
│       │   (M12)     │                                           │
│       └──────┬──────┘                                           │
│              │                                                   │
│              │ Cable (2 per gland)                              │
│              │                                                   │
│  ════════════╪════════════════════════════════ Enclosure wall   │
│              │                                                   │
│              ▼                                                   │
│  INTERNAL (Strain Relief Clamp)                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━                                 │
│                                                                  │
│       ┌─────────────────────────────────┐                       │
│       │     Strain Relief Clamp         │                       │
│       │  ┌─────┐  ┌─────┐              │                       │
│       │  │Cable│  │Cable│  ← 2 cables  │                       │
│       │  └──┬──┘  └──┬──┘   clamped    │                       │
│       └─────┼───────┼───────────────────┘                       │
│             │       │                                            │
│             │  50mm │  ← Service loop                           │
│             │       │                                            │
│       ┌─────┴───────┴─────┐                                     │
│       │   Cable Clips     │ ← Every 100mm                       │
│       └─────┬───────┬─────┘                                     │
│             │       │                                            │
│             ▼       ▼                                            │
│       ┌─────────────────┐                                       │
│       │  PCB Connector  │ ← Zero tension on connector           │
│       │   (J3-J8)       │                                       │
│       └─────────────────┘                                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Components

| Item | Part | Qty/Unit | Purpose |
|------|------|----------|---------|
| Strain relief clamp | SR-CLAMP-6MM | 3 | Primary strain relief |
| Cable clips | CLIP-ADHESIVE-6MM | 6 | Route cables |
| Service loop | - | 50mm | Absorb movement |

---

## 3. Detailed Specifications

### 3.1 Strain Relief Clamp

| Parameter | Value |
|-----------|-------|
| Type | Saddle clamp with screw |
| Material | Nylon PA66 (UV stabilized) |
| Cable diameter | 4-6mm (fits mic cable) |
| Mounting | 2× M3 screws to enclosure |
| Position | 50mm from cable gland entry |

**Part Options**:
- Heyco SR-6 Strain Relief
- HellermannTyton T50R
- Local equivalent (Nhật Tảo)

### 3.2 Cable Clips

| Parameter | Value |
|-----------|-------|
| Type | Adhesive-backed clip |
| Material | Nylon |
| Cable diameter | 5-7mm |
| Spacing | 100mm apart |
| Quantity | 6 per unit |

### 3.3 Service Loop

| Parameter | Value |
|-----------|-------|
| Length | 50mm minimum |
| Purpose | Absorb vibration, allow connector removal |
| Location | Between clamp and PCB connector |

---

## 4. Installation Procedure

Added to [[WI-MCU-Box-Assembly]] Step 5:

```
5.3 Install strain relief clamps
    → Position clamp 50mm from cable gland entry point
    → Route both cables through clamp saddle
    → Secure with M3×6 screws (torque: 0.3 Nm)
    → Verify cables can move slightly but not pull on PCB

5.4 Install cable clips
    → Peel adhesive backing
    → Press firmly to enclosure wall
    → Space clips every 100mm along cable path
    → Ensure 50mm service loop before PCB connector

5.5 Verify strain relief
    → Gently tug cables at gland entry
    → PCB connector should NOT move
    → If connector moves, re-adjust clamp
```

---

## 5. Verification Test

### 5.1 Pull Test

| Test | Method | Pass Criteria |
|------|--------|---------------|
| Axial pull | Apply 2kg force to cable at gland | No connector movement |
| Flex test | Bend cable ±30° at gland, 100 cycles | No damage |
| Vibration | 10-500Hz, 1g, 8 hours | No intermittent |

### 5.2 FMEA Update

| ID | Failure Mode | Before | After | Change |
|----|--------------|--------|-------|--------|
| M04 | Cable open circuit | RPN 252 | RPN 84 | -67% |

**Calculation**:
- Severity: 7 (unchanged)
- Occurrence: 6 → 3 (with strain relief)
- Detection: 6 → 4 (visual inspection of clamp)
- New RPN: 7 × 3 × 4 = **84** ✅

---

## 6. BOM Update

| Item | Qty | Unit Cost | Total |
|------|-----|-----------|-------|
| Strain relief clamp | 3 | $0.50 | $1.50 |
| Cable clips | 6 | $0.10 | $0.60 |
| M3×6 screws | 6 | $0.02 | $0.12 |
| **Total** | | | **$2.22** |

**BOM Impact**: $110 → $112.22 (+2%)

---

## 7. Drawing Reference

Enclosure drawing to be updated:
- Add 6× M3 threaded inserts for strain relief clamps
- Add cable routing path annotation
- Add service loop callout

---

## 8. References

- [[FMEA-MCU-Box]] - M04 failure mode
- [[WI-MCU-Box-Assembly]] - Installation procedure
- [[DfX-Review-MCU-Box]] - Original issue

---

*Design closes DfA-002*
*Per Workshop X 3-Gate Quality System*
