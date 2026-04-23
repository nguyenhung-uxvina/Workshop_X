---
project: VN-XUONG-UUV
phase: 2
type: concept-description
document: "010"
version: 1.0
created: 2026-03-07
updated: 2026-03-07
status: AI-DRAFT
data_confidence: MEDIUM (30% L2, 30% L4, 40% L5)
changelog:
  - version: v1.0
    date: 2026-03-07
    author: AI (T2)
    changes: "Initial concept description. Single baseline concept — design space closed after Path 1/2 elimination."
---

# VN-XUONG-UUV — Doc 010: Concept Description v1.0

[AI-DRAFT v1]

## 1. Concept Overview

**Tên:** Xuồng Triển Khai & Thu Hồi UUV (LARS Vessel)
**Mã:** VN-XUONG-UUV
**Loại:** 8m aluminum work boat với stern ramp LARS, điện hóa hoàn toàn

### 1.1 One-Paragraph Description

Xuồng nhôm 5083 dài 8m, trang bị hệ thống LARS điện (winch VFD 10 kN + linear actuator + genset riêng 5-8 kW), sử dụng twin outboard 2×40-60 HP. Xuồng triển khai và thu hồi 1 UUV tethered 550 kg qua stern ramp 15° với V-funnel recovery channel. Cuộn cáp tether (25 km) nằm bên trong UUV — xuồng chỉ có cable routing (~4-5m) từ đuôi đến bộ điều khiển suitcase controller. Ekip 3 người: Helmsman, LARS Operator, UUV Controller Operator. Vận hành chính: kéo sát mạn tàu mẹ; phụ: tự hành 25 kts. Thu hồi UUV đạt SS 3, thiết kế cho SS 3-4 Biển Đông.

### 1.2 Design Philosophy

| Principle | Application |
|-----------|-------------|
| **Simplicity** | Electric LARS (no hydraulic system), permanent pendant (no manual hook), drum in UUV (no TMS) |
| **Proven technology** | Stern ramp + V-funnel recovery (TRV heritage, 30+ years US Navy), aluminum 5083 hull |
| **Minimum crew** | 3 operators with clear role separation — no multi-tasking during LARS ops |
| **Maintainability** | COTS outboards (Yamaha/Mercury), standard marine electrical, VN-available components |
| **Robustness** | SS 3-4 design envelope, 10% weight margin, GM = 3× requirement |

---

## 2. Concept Architecture

### 2.1 System Breakdown

```
VN-XUONG-UUV
|
+-- HULL: 8m aluminum 5083, semi-planing V-hull, B >= 2.6m
|   +-- Lightship: ~2,820 kg (incl. 10% margin)
|   +-- Full load: ~3,843 kg
|   +-- Freeboard (full): ~0.655m
|
+-- PROPULSION: Twin outboard 2x40-60 HP diesel
|   +-- Max speed: 25 kts [L2]
|   +-- LARS ops speed: 2-5 kts
|   +-- Steering: differential thrust + outboard deflection
|
+-- LARS SYSTEM (electric):
|   +-- Stern ramp: 15 deg (adj. 12-18), aluminum + UHMWPE liner
|   +-- Ramp tilt: Electric linear actuator
|   +-- Winch: 10 kN electric, VFD speed control
|   +-- Pendant: Permanent (always attached to cradle)
|   +-- Recovery channel: ~550-650mm wide, UHMWPE rollers x8-10
|   +-- V-funnel: Passive, UHMWPE lined, flared entry
|   +-- Cradle: UHMWPE saddle, toggle clamps x4
|
+-- POWER:
|   +-- Genset: 5-8 kW diesel (Kubota/Yanmar class)
|   +-- Battery: 24 VDC (2x12V marine), nav/comms/sensors
|   +-- Shore power: 220 VAC outlet for UUV controller
|
+-- CABLE ROUTING:
|   +-- Stern fairlead + deck clips (~4-5m path)
|   +-- No drum on vessel (drum inside UUV)
|   +-- Cable: fiber optic, 0.5 kg/km, 25 km = 12.5 kg (negligible)
|
+-- UUV CONTROL STATION:
|   +-- Suitcase controller (OEM furnished)
|   +-- Mounting bracket on console/bulkhead
|   +-- Rain shelter / canopy
|   +-- Seated position for UUV operator
|
+-- CREW STATIONS:
    +-- Helm (forward): Helmsman — navigation, station-keeping
    +-- Midship: LARS Operator — winch, ramp, cradle operations
    +-- Console: UUV Operator — controller, tether monitoring
```

### 2.2 General Arrangement — Key Layout

```
BOW                                                    STERN
  +---+------------------------------------------------+---+
  |   |  HELM    |  UUV OP   | LARS OP  | RAMP + LARS |   |
  |   | Console  | Controller| Winch    | Channel     |   |
  |   | + Seat   | + Seat    | Console  | V-Funnel    |   |
  |   |          |           |          | Cradle      |   |
  +---+----------+-----------+----------+-----========+---+
  |                                           RAMP 15 deg |
  |  Port                              Starboard          |
  |                                                        |
  +---- Genset (below deck or P/S) ----+                  |
  |                                     |                  |
  +---- Fuel tank (center, low) -------+                  |
  |                                                        |
  +--- Twin OB ---+--- Twin OB ---+                       |
                                   +--- Stern ramp exit ---+

(NOTE: GA sketch là Core task — human vẽ. Sơ đồ trên chỉ minh họa layout concept)
```

---

## 3. Key Parameters

### 3.1 Vessel

| Parameter | Value | Unit | Confidence | Source |
|-----------|-------|------|------------|--------|
| LOA | 8.0 | m | [L2] | User confirmed |
| Beam (target) | 2.6 - 3.2 | m | [L5] | Phase 3 confirm |
| Hull material | Aluminum 5083 | — | [L2] | User confirmed |
| Hull type | Semi-planing V-hull | — | [L5] | Reference designs |
| Lightship | ~2,820 | kg | [L5] | Doc 008 |
| Full load displacement | ~3,843 | kg | [L5] | Doc 008 |
| Max speed | 25 | kts | [L2] | User confirmed |
| LARS ops speed | 2-5 | kts | [L4] | TRV reference |
| Propulsion | Twin OB 2×40-60 HP | — | [L2] | PD-1 |
| Crew | 3 | persons | [L2] | PD-7 |
| Design sea state | 3-4 | SS | [L2] | User confirmed |
| Endurance | ≥ 5 hrs at max speed | — | [L5] | Requirement OP-14 |

### 3.2 LARS

| Parameter | Value | Unit | Confidence | Source |
|-----------|-------|------|------------|--------|
| Winch capacity | 10 | kN | [L4] | LARS sizing |
| Winch type | Electric VFD | — | [L2] | PD-2 |
| Ramp angle | 15 (adj. 12-18) | deg | [L4] | Reference designs |
| Recovery channel width | 550-650 | mm | [L5] | UUV D=400mm + clearance |
| Pendant type | Permanent | — | [L2] | PD-3 |
| Genset | 5-8 | kW | [L5] | LARS power budget |
| UUV weight on ramp | ~1,918 | N total pull | [L5] | Doc 008 §6.4 |
| Winch safety factor | 5.2× | — | [L5] | 10,000N / 1,918N |

### 3.3 UUV (Customer Furnished)

| Parameter | Value | Unit | Confidence | Source |
|-----------|-------|------|------------|--------|
| Length | 5,000 | mm | [L2] | User confirmed |
| Diameter | 400 | mm | [L2] | User confirmed |
| Height (incl. antenna) | 850 | mm | [L2] | User confirmed |
| Dry weight | 550 | kg | [L2] | User confirmed |
| Tether cable | 25,000 | m | [L2] | User confirmed |
| Cable weight | 0.5 | kg/km | [L2] | User confirmed |
| Cable drum | Inside UUV | — | [L2] | User confirmed |

### 3.4 Stability (Doc 009)

| Parameter | Value | Requirement | Status |
|-----------|-------|-------------|--------|
| GM (full load) | 1.52 m | ≥ 0.5 m | **PASS (3× margin)** |
| GM (lightship) | 2.14 m | ≥ 0.5 m | PASS |
| Stern trim (recovery) | 0.17 m | Freeboard > 0.4m | PASS (0.57m) |
| Crew heel (2 crew one side) | 1.6° | < 5° | PASS |

---

## 4. Concept Variant Analysis

### 4.1 Why Single Concept

Standard Pahl-Beitz Phase 2 requires ≥2 concept variants for VDI 2225 evaluation. VN-XUONG-UUV has a single viable concept because:

1. **Path 1 (Aluminum on-deck crane LARS)** — Eliminated Phase 1: 8m vessel too small for deck crane + UUV + crew
2. **Path 2 (RIB/inflatable)** — Eliminated Phase 1: cannot support 550 kg UUV + electric LARS structural loads
3. **Path 3 (Stern ramp aluminum workboat)** — Only viable path → baseline concept

Design space further collapsed when cable drum confirmed inside UUV, eliminating TMS-related variants.

### 4.2 Sub-System Variants Evaluated

Design decisions (PD-1 to PD-7) represent sub-system variant selection within the single concept:

| Decision | Options Evaluated | Selected | Rationale |
|----------|-------------------|----------|-----------|
| PD-1 Propulsion | Inboard diesel / Twin outboard | Twin outboard | Simplicity, VN maintainability, lower cost, deck space |
| PD-2 LARS power | Hydraulic (PTO) / Electric (VFD+genset) | Electric | Forced by PD-1 (no PTO on outboards), simpler, cleaner |
| PD-3 Pendant | Detachable hook / Permanent pendant | Permanent | Crew safety (SA-02), faster recovery, no stern exposure |
| PD-7 Crew | 2 crew / 3 crew / 4 crew | 3 crew | Minimum for 3 simultaneous roles during LARS ops |

---

## 5. Operational Concept

### 5.1 Mission Profile

```
Phase A: Transit (30-60 min)
  Tow alongside mother ship OR self-transit at 25 kts
  → Arrive at operating area

Phase B: Prepare & Launch (20 min setup + 15 min launch = 35 min)
  Mount UUV controller → Power up genset → Connect tether
  Receive UUV from mother ship crane (550 kg, SWL 2.5t)
  → Secure in cradle → Deploy down ramp → UUV waterborne

Phase C: UUV Mission (hours — variable)
  UUV operator controls via tether (25 km range)
  Vessel station-keeps or transits slowly
  Cable pays out from UUV internal drum automatically

Phase D: Recovery (30 min)
  UUV operator commands UUV return
  Cable reels in automatically (UUV internal drum)
  Vessel approaches UUV stern-first
  → Guide into V-funnel → Capture in cradle
  → Winch up ramp (permanent pendant) → Secure

Phase E: Return (30-60 min)
  Transfer UUV to mother ship via crane
  → Tow alongside or self-transit back
```

### 5.2 Crew Roles

| Role | Station | Responsibilities |
|------|---------|------------------|
| **CMDR / Helmsman** | Helm (forward) | Navigation, station-keeping, vessel safety, abort decision |
| **OP1 / LARS Operator** | Midship | Winch VFD control, ramp actuator, cradle clamps, deck ops |
| **OP2 / UUV Controller Op** | Console | UUV commands via controller, tether monitoring, telemetry |

### 5.3 Mother Ship Interface

| Aspect | Detail |
|--------|--------|
| Loading | Crane (SWL 2.5t) lifts UUV (550 kg) onto xuồng — OK |
| Xuồng transfer | **Cannot be craned** (lightship 2,820 kg > crane 2.5t) |
| Primary mode | Towed alongside mother ship |
| Secondary mode | Self-transit (25 kts capability) |
| Communications | VHF radio |

---

## 6. Cost Estimate (Preliminary)

| Category | Estimate | % | Notes |
|----------|----------|---|-------|
| Hull + structure | $150K | 29% | 8m aluminum 5083, VN shipyard |
| Propulsion | $30K | 6% | Twin outboard 2×60 HP (import) |
| LARS system | $120K | 23% | Winch + ramp + channel + cradle + actuator |
| Genset + electrical | $40K | 8% | 5-8 kW diesel genset + batteries + wiring |
| Nav + comms + safety | $15K | 3% | GPS, VHF, lights, PFDs |
| Outfitting + fittings | $20K | 4% | Deck hardware, fenders, cleats |
| Engineering + design | $80K | 15% | Workshop X design + supervision |
| Testing (FAT + SAT) | $40K | 8% | Factory + sea trials |
| Contingency (10%) | $22K | 4% | — |
| **TOTAL** | **~$517K** | **100%** | |

**Local content target:** ≥50% by value (hull, outfitting, engineering = VN sources)

---

## 7. Risk Register

| # | Risk | Probability | Impact | Mitigation |
|---|------|-------------|--------|------------|
| R1 | Recovery capture rate < 80% at SS 3 | Medium | High | V-funnel geometry optimization (Phase 3), operator training |
| R2 | UUV OEM ICD response delayed | High | Medium | Send ICD Template immediately (BLOCKING) |
| R3 | Hull weight > estimate by 20% | Medium | Medium | Validate with shipyard quote, 10% margin included |
| R4 | Genset + LARS EMI affects UUV controller | Low | High | EMC shielding, cable routing separation (Phase 3) |
| R5 | Stern flooding in SS 4+ | Medium | High | Self-draining stern design, scupper sizing (Phase 3) |
| R6 | Stability in dynamic conditions (rolling) | Low | Medium | Seakeeping partner assessment (Phase 2/3) |
| R7 | Twin outboard steering authority insufficient for station-keeping | Low | Medium | Differential thrust + joystick control (proven on workboats) |

---

## 8. Comparison with Alternatives

### 8.1 Why Not Other Approaches

| Alternative | Why Eliminated |
|-------------|---------------|
| RIB (inflatable) | Cannot support 550 kg UUV + LARS structural loads on inflatable hull |
| On-deck crane LARS | 8m too small for crane boom + UUV + crew workspace |
| Hydraulic LARS | No PTO on outboards; separate hydraulic system = weight, complexity, maintenance |
| Detachable hook | Crew exposure at stern in sea state — safety risk (SA-02) |
| Cable drum on vessel | Drum is inside UUV — vessel has no drum, no TMS needed |
| Larger vessel (12m+) | Exceeds mother ship crane SWL, higher cost, unnecessary for 1 UUV |

### 8.2 Benchmark: TRV (US Navy Reference)

| Parameter | TRV | VN-XUONG-UUV | Notes |
|-----------|-----|--------------|-------|
| LOA | 8m | 8m | = |
| Hull | RIB | Aluminum 5083 | Al heavier but more durable |
| Lightship | 2,700 kg | 2,820 kg | +4.4% — acceptable |
| Speed | 30 kts | 25 kts | Lower — lighter engines OK |
| Crew | up to 11 | 3 | Much leaner — tethered UUV simpler ops |
| LARS | Channel + winch | Channel + winch + genset | Similar approach |
| UUV capacity | Multiple configs | 1 × 550 kg | Simpler, dedicated |

---

## 9. Open Items (Pending for Phase 2 Closure / Phase 3)

| # | Item | Owner | Dependency |
|---|------|-------|------------|
| 1 | **Send ICD Template v1.3 to UUV OEM** | Human | **BLOCKING** |
| 2 | Human review Doc 007 working principles | Human (Core) | — |
| 3 | Preliminary GA sketch | Human (Core) | — |
| 4 | Stakeholder interviews S1, S2, S4 | Human (Core) | — |
| 5 | Seakeeping assessment | Partner | — |
| 6 | Beam confirmation (2.6-3.2m) | Phase 3 | Shipyard input |
| 7 | Outboard model selection | Phase 3 | Dealer quotes |
| 8 | Genset model selection | Phase 3 | Dealer quotes |
| 9 | V-funnel geometry detail | Phase 3 | — |
| 10 | Gate 2 Review | Human (Core) | Items 1-5 complete |

---

*Doc 010 Concept Description v1.0 | VN-XUONG-UUV Phase 2 Conceptual Design | COD: Offload (O2) — AI drafted, human review + approve*
