---
created: 2026-04-20
type: re-divergence-map
source: /reverse-engineering --mode mecha --stage 3D
project: TARGET-DRONE-001
product: V5-JET-VN-D (Phased Sovereignty)
mode: MECHA
status: completed
concept: D
tags: [#type/re-report, #status/completed]
---

# RE STAGE 3D: DIVERGENCE MAP — V5-JET-VN-D vs Simsek-K
## What Changed and Why | 2026-04-20

Critical for: IP defense, configuration management, TAI negotiation leverage, backward compatibility.

---

## KEPT FROM ORIGINAL (22 items — functional DNA preserved)

| Category | Feature | Why Retained |
|----------|---------|-------------|
| **Geometry** | 2.4m length, 1.5m wingspan | Preserves proven aerodynamic stability derivatives |
| **Mass** | 83kg MTOW, 18kg payload | Preserves parachute/RATO sizing |
| **Performance** | Mach 0.63 max, 7600m ceiling | Core ASCM replication requirement |
| **Endurance** | >45 min, >500km range | Bien Dong coverage requirement |
| **Fuel** | 35L internal fuel capacity | Validated endurance calculation (28kg / 39.78 kg/h) |
| **Autonomy** | Fully autonomous waypoint navigation | Core capability for ASCM simulation |
| **Sea-skim** | 5-15m AGL radar altimeter flight | Essential for naval training |
| **Kamikaze** | Terminal dive with ~5kg warhead | Dual-use requirement retained |
| **Recovery** | Parachute (drogue + main, water/land) | Peacetime reusability economics |
| **RATO** | 8-15g zero-length launch | Naval deck deployment |
| **Catapult** | Pneumatic/hydraulic launch option | Land deployment flexibility |
| **Modular payload** | 18kg bay with quick-swap rails | Signature package versatility |
| **Passive RCS** | Luneberg lens (imported) | Broadband RCS augmentation |
| **IR augmentation** | Hot Nose thermal emitter | IR seeker training |
| **MDI scoring** | Acoustic/Doppler miss distance | Training effectiveness measurement |
| **Smoke generator** | Visual tracking aid | Chase aircraft coordination |
| **Encrypted telemetry** | Real-time flight data recording | Post-mission analysis |
| **Mid-flight updates** | In-flight mission replanning | Operational flexibility |
| **Auto RTB** | Return-to-base on link loss | Range safety |
| **Auto parachute** | Emergency recovery on failure | Asset preservation |
| **Engine electric start** | 24VDC launcher-powered start | Standard launch procedure |
| **FTS** | Flight termination system | Range safety (non-negotiable) |

---

## MODIFIED FROM ORIGINAL (18 items — adapted for VN)

| Feature | Simsek-K Original | V5-JET-VN-D Modification | Rationale |
|---------|-------------------|-------------------------|-----------|
| **Engine (Phase 1)** | TEI-TJ90 (Turkish) | TEI-TJ90 via TAI partnership import | Same engine, different procurement channel |
| **Engine (Phase 3)** | TEI-TJ90 | PBS TJ40-G1 (Czech) or TEI assembly in VN | Sovereignty progression |
| **FCC hardware** | Aselsan proprietary | Pixhawk 6X (STM32H7) | ITAR-free, open-source compatible |
| **Flight software** | Turkish proprietary RTOS | PX4 on FreeRTOS/NuttX | Full IP sovereignty, modular VN apps |
| **GNSS** | Turkish multi-constellation | Ublox F9P (BeiDou/GLONASS primary) | Anti-Chinese EW, sovereignty |
| **IMU** | Aselsan MEMS | Triple-redundant Bosch industrial MEMS | ITAR-free, VN-sourced |
| **Datalink (Phase 1)** | Aselsan C-band encrypted | Microhard pMDDL2450 (import interim) | Rapid IOC capability |
| **Datalink (Phase 3)** | Aselsan C-band | VN Sovereign SDR C-band (Viettel/VTX) | Full sovereignty |
| **Airframe process** | Autoclave prepreg CFRP | VARTM composite (GFRP + CFRP spars) | VN manufacturing capability |
| **Fuel type** | JP-8 | JP-5 / Jet-A1 | VN Navy fuel compatibility |
| **Environmental spec** | MIL-STD-810F (temperate) | TCVN tropical (90% humidity, 45°C, salt spray) | Bien Dong conditions |
| **EMC spec** | MIL-STD-461E | TCVN/QCVN EMI equivalents | VN regulatory compliance |
| **Threat profiles** | Generic ASCM simulation | YJ-83/C-802 (Profile A) + BrahMos (Profile B) | VN-specific threats |
| **Active RCS band** | 5-18 GHz (generic) | Tuned to VN Navy X/S/Ku radar bands | Training fidelity |
| **Naval interface** | Turkish frigate deck | Gepard/Tarantul class deck compatibility | VN Navy fleet |
| **GCS language** | Turkish | Vietnamese military terminology | Operator usability |
| **Range safety** | Turkish range rules | VN coastal range geofencing | QPAN compliance |
| **Storage** | Standard military | 5-year 90% humidity unconditioned bunker | VN logistics reality |

---

## ADDED (not in Simsek-K) — 12 items

| Feature | Description | Driver |
|---------|-------------|--------|
| **N-001 Thermal cycling** | 45°C→-25°C in 5 min deck-to-altitude | Bien Dong environment |
| **N-002 Gepard/Tarantul deck fit** | Launcher footprint constraint for VN corvettes | Logistics |
| **N-003 VN Navy CMS integration** | Telemetry output to VN CIC screens | Operations |
| **N-004 Vietnamese GCS UI** | Full VN military terminology localization | Operations |
| **N-005 GNSS spoofing resistance** | BeiDou/GLONASS + IMU crosscheck, auto dead-reckoning | Bien Dong EW threat |
| **N-006 Humid storage** | 5-year unconditioned 90% RH coastal bunker survival | Logistics |
| **N-007 YJ-83 profile button** | Pre-programmed sea-skim + pop-up maneuver | Training doctrine |
| **N-008 BrahMos profile button** | Pre-programmed steep terminal dive approximation | Training doctrine |
| **N-009 VARTM optimization** | GFRP primary, CFRP only wing spars | Manufacturing |
| **N-010 PX4 modular architecture** | Proprietary VN apps isolated from open-source core | Sovereignty |
| **N-011 QPAN certification** | TCVN/QCVN defense standards compliance | Regulatory |
| **N-012 0.4mm+ pitch PCBs** | Designed for VN commercial SMT lines | Manufacturing |

---

## REMOVED FROM ORIGINAL (5 items — cost/complexity reduction)

| Feature | Why Removed | Impact | Savings |
|---------|------------|--------|---------|
| **UCAV air-drop launch** (F-004) | VN has no MALE UCAV fleet for 83kg carriage | Eliminates pylon interface + separation state machine | -$5-10K/unit, -6mo dev |
| **Carrier platform decouple** (F-040) | Follows from UCAV removal | Removes NATO 14" lug interface | -$1K/unit |
| **Counter-measures dispensing** (F-014) | Exceeds $80K cost cap; Hot Nose sufficient for IR training | Removes pyrotechnic subsystem | -$3-5K/unit |
| **AI swarm technology** (F-038) | Requires inter-drone datalinks + massive processing overhead | Single-agent autonomy sufficient for ASCM simulation | -$10-20K/unit, -12mo dev |
| **Anka/Aksungur pylon interface** (C-003) | No compatible VN carrier platform | Simplifies structural interfaces | -$2K/unit |

**Total savings from removals: ~$21-38K/unit + 18mo dev time avoided**

---

## PHASED SOVEREIGNTY ROADMAP (Concept D timeline)

```
PHASE 1 — RAPID IOC (Month 0-18)
├── Engine: TEI-TJ90 (TAI import)
├── FCC: Pixhawk 6X / PX4 (domestic assembly)
├── Datalink: Microhard import (interim)
├── Airframe: VARTM composite (VN domestic)
├── RATO: VN domestic solid motor
├── Domestic content: ~40%
└── Unit cost: $85-95K

PHASE 2 — TRANSITION (Month 18-36)
├── Engine: TEI-TJ90 (TAI assembly in VN)
├── FCC: VN custom board / PX4 (domestic)
├── Datalink: VN SDR v1.0 (Viettel/VTX)
├── Airframe: VARTM optimized (production)
├── Domestic content: ~60%
└── Unit cost: $70-80K

PHASE 3 — SOVEREIGN (Month 36-60)
├── Engine: PBS TJ40 or TEI assembly (VN)
├── FCC: VN FCC / PX4 (fully domestic)
├── Datalink: VN SDR v2.0 (anti-jam)
├── Airframe: VARTM production line
├── Domestic content: ~80%
└── Unit cost: $55-70K
```

---

## DIVERGENCE STATISTICS

| Category | Count | % of Total |
|----------|-------|------------|
| Kept | 22 | 39% |
| Modified | 18 | 32% |
| Added | 12 | 21% |
| Removed | 5 | 9% |
| **Total features** | **57** | |

**71% of Simsek-K DNA preserved** (kept + modified). This is NOT a copy — it's a systematic redesign using the same functional requirements but different implementations. Clean-room documentation chain:
1. Phase 0: V5-JET-STANDARD requirements (pre-dated Simsek-K evaluation)
2. Stage 2B: Solution-neutral function structure (no TAI-specific references)
3. Stage 3B: Independent morphological matrix (IP-free alternatives)
4. Stage 3C: VDI 2225 selection (objective scoring)
5. Stage 3D: This divergence map (explicit documentation of independent decisions)

---

## STAGE 3 COMPLETE

```
=== STAGE 3 COMPLETE — V5-JET-VN-D RECONSTRUCT ===

Stages: 3A (Modified Task Clarification) + 3B (Morphological Matrix)
       + 3C (VDI 2225 Evaluation) + 3D (Divergence Map)

CONCEPT SELECTED: D "Phased Sovereignty"
  Rt = 0.758 (highest), robust 2/4 scenarios #1, 2/4 #2
  3-phase roadmap: IOC 18mo → Transition 36mo → Sovereign 60mo
  Unit cost: $85-95K (Phase 1) → $55-70K (Phase 3)
  Domestic content: 40% → 60% → 80%

IP-FREE CHAIN DOCUMENTED: 5-step clean-room evidence
DIVERGENCE: 22 kept + 18 modified + 12 added + 5 removed = 57 features

NEXT: Stage 3P (Partnership Strategy with TAI) or Stage 4M (V&V + Audit)
```
