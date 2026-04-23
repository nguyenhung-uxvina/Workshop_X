---
created: 2026-04-20
type: re-modified-task-clarification
source: /reverse-engineering --mode mecha --stage 3A
project: TARGET-DRONE-001
product: V5-JET-VN (Vietnamese variant of Simsek-K)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 3A: MODIFIED TASK CLARIFICATION — V5-JET-VN
## Vietnamese Variant Requirements | 2026-04-20

---

## Summary of Modifications

| Category | Keep | Adapt | Add | Remove | Total |
|----------|------|-------|-----|--------|-------|
| Functional (F) | 20 | 16 | 12 (N-series) | 4 | 48 |
| Performance (P) | 14 | 7 | — | 0 | 21 |
| Constraints (C) | 7 | 7 | — | 1 | 14 |
| **Total** | **41** | **30** | **12** | **5** | **83** |

**Net result: 83 requirements for V5-JET-VN** (vs 76 for Simsek-K: +12 VN additions, -5 removals)

---

## KEY MODIFICATIONS (from original Simsek-K)

### Environmental Adaptations (Bien Dong)
- C-001: MIL-STD-810F → TCVN Tropical Standards (90% humidity, 45°C deck temps)
- F-033: Maritime → Bien Dong EXTREME marine (South China Sea salt, typhoon)
- N-001: Thermal cycling 45°C→-25°C within 5 min (deck to 7600m altitude)
- N-006: 5-year unconditioned storage in 90% humidity coastal bunkers

### Sovereignty Adaptations
- F-001: Autonomous flight → via PX4/ArduPilot open-source stack
- F-020: Turkish AES datalink → VN domestic cryptography
- F-034: Turkish GNSS → BeiDou/GLONASS primary (anti-Chinese EW)
- N-005: GNSS spoofing resistance (Bien Dong EW threat)
- N-010: PX4/ArduPilot core base (modular VN apps on top)
- N-003: VN Navy CMS integration

### Manufacturing Adaptations
- F-035: Autoclave prepreg → VARTM process
- N-009: VARTM optimization (fiberglass primary, CFRP only wing spars)
- N-012: 0.4mm+ pitch PCBs for VN commercial SMT
- P-015: TSFC relaxed from 0.17 to ≤0.18 (commercial engine alternatives)
- P-016: Engine mass relaxed from 6.95 to ≤8 kg
- P-017: Engine diameter relaxed from 153.5 to ≤160mm

### Threat Profile Adaptations
- F-010: Generic evasive → YJ-83/BrahMos specific maneuver profiles
- F-012: Generic RCS → tuned to VN Navy X/S/Ku radar bands
- N-007: "Threat Profile A" button (YJ-83/C-802 sea-skim + pop-up)
- N-008: "Threat Profile B" button (BrahMos steep terminal dive approximation)

### Logistics Adaptations
- F-003: Turkish naval vessels → VN Gepard/Tarantul class deck compatibility
- F-027: JP-8 → JP-5/Jet-A1 (VN naval fuel)
- C-014: Field deploy → coastal/island deployment via VN military trucks
- N-002: Gepard/Tarantul aft deck launcher footprint constraint
- N-004: Vietnamese language GCS UI/UX

### Regulatory
- C-001/C-002: MIL-STD → TCVN/QCVN equivalents
- C-013: VN coastal range safety geofencing
- N-011: QPAN certification compliance

---

## REQUIREMENTS REMOVED (cost/complexity reduction)

| ID | Removed Requirement | Rationale | Savings |
|----|-------------------|-----------|---------|
| F-004 | Air-drop from UCAV | VN has no MALE UCAV fleet capable of 83kg underwing | Eliminates pylon interface + separation SW |
| F-014 | Counter-measures dispensing | Exceeds $80K cost cap; static Hot Nose sufficient | Removes pyrotechnic subsystem |
| F-038 | AI swarm technology | Requires inter-drone datalinks + massive processing | Removes multi-agent SW complexity |
| F-040 | Carrier platform decouple | Follows from F-004 removal | — |
| C-003 | Anka/Aksungur pylon mount | VN has no compatible carriers | Removes NATO 14" lug interface |

---

## 12 VN-SPECIFIC ADDITIONS (N-001 through N-012)

| ID | Requirement | Domain | Driver |
|----|------------|--------|--------|
| N-001 | Bien Dong thermal cycling (45°C→-25°C in 5 min) | Mech | Environment |
| N-002 | Gepard/Tarantul deck compatibility | Mech | Logistics |
| N-003 | VN Navy CMS integration | Sw | Operations |
| N-004 | Vietnamese language GCS | Sw | Operations |
| N-005 | GNSS spoofing resistance (BeiDou/GLONASS + IMU crosscheck) | Ctrl/Sw | EW threat |
| N-006 | 5-year humid unconditioned storage | Mech/Elec | Logistics |
| N-007 | YJ-83/C-802 kinematic profile (Threat A) | Ctrl | Training doctrine |
| N-008 | BrahMos steep dive approximation (Threat B) | Ctrl | Training doctrine |
| N-009 | VARTM-optimized structure (GFRP primary, CFRP spars only) | Mech | Manufacturing |
| N-010 | PX4/ArduPilot core base (VN modular apps) | Sw | Sovereignty |
| N-011 | QPAN/TCVN/QCVN certification | System | Regulatory |
| N-012 | 0.4mm+ pitch SMT PCB design | Elec | Manufacturing |

---

## RELAXED PERFORMANCE PARAMETERS

| ID | Original (TEI-TJ90) | V5-JET-VN | Rationale |
|----|---------------------|-----------|-----------|
| P-015 | TSFC 0.17 kg/(N·h) | ≤0.18 | Accommodate commercial engine alternatives |
| P-016 | Engine mass 6.95 kg | ≤8 kg | Heavier commercial alternators acceptable |
| P-017 | Engine dia 153.5 mm | ≤160 mm | Slightly larger envelope for alternative engines |

All other performance parameters (speed, range, endurance, ceiling, payload) = KEEP unchanged.

---

## CRITICAL FLAG

**Turbojet sourcing remains BLOCKING.** The relaxed envelope (≤160mm, ≤8kg, 390N, ≤0.18 TSFC) opens alternatives beyond TEI-TJ90 but candidates must be identified before Stage 3B morphological matrix.

Candidate engines to research for Stage 3B:
- TEI-TJ90 (import from TAI partnership)
- JetCat P400 Pro (commercial, ~390N, German)
- PBS TJ-100 (Czech, 1300N — oversized but proven)
- AMT Titan (Netherlands, ~390N class)
- KingTech K-370G (Chinese, 360N)
- PBS TJ-40 (Czech, ~400N class)

**ITAR status of each must be verified before inclusion.**
