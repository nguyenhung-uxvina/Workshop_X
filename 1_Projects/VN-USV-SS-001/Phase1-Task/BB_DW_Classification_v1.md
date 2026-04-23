---
created: 2026-04-22
type: helix-block
block: BB-validate
pipeline: helix-task-clarify
project: VN-USV-SS-001
version: v1.0
status: awaiting-ceo-review
---

# Block BB: D/W Classification — VN-USV-SS-001

> **Pipeline:** helix-task-clarify | **Block:** BB Validate
> **Date:** 2026-04-22 | **COD:** **Core (C)** — D/W classification is non-delegable
> **Input:** BA_Requirements_List_v1.md (87 requirements)

## Instructions for CEO

Mark each requirement **D** (Demand — must satisfy, design fails without it) or **W** (Wish — desirable, trade-off allowed). AI recommendation provided as starting point — override freely.

**Rules:**
- D requirements become hard gates at concept evaluation (VDI 2225 pass/fail)
- W requirements become scored criteria (0-4 scale, weighted)
- If unsure → mark **D** (safer to relax later than to miss a critical requirement)
- HC-derived requirements should almost always be D

---

## GROUP 1: CLEAR D — Safety & Hard Constraints (AI confident, expect CEO agreement)

| ID | Requirement | AI Rec | CEO |
|----|------------|:------:|:---:|
| R-001 | LOA 2.5–4.0 m | D | |
| R-002 | Hull diameter 300–500 mm | D | |
| R-009 | Cruise speed ≥ 3 kts | D | |
| R-014 | Depth hold ± 50 mm | D | |
| R-015 | Dry weight 30–80 kg | D | |
| R-016 | Max payload 15–40 kg | D | |
| R-022 | Endurance ≥ 12 h at cruise | D | |
| R-023 | Battery 50–100 Ah @ 48V | D | |
| R-030 | Hull material HDPE | D | |
| R-034 | Indigenous content ≥ 50% prototype | D | |
| R-036 | LoRa range ≥ 10 km | D | |
| R-040 | GPS accuracy ≤ 2.5 m CEP | D | |
| R-045 | Auto-surface on critical fault (NC valve) | D | |
| R-046 | Auto-surface on comms loss (300 s timeout) | D | |
| R-047 | Auto-surface on low battery (≤ 15% SOC) | D | |
| R-050 | LiFePO4 battery chemistry | D | |
| R-051 | Pressure test 2 m × 24 h zero leak | D | |
| R-052 | Ballast valve redundancy (2 paths to surface) | D | |
| R-060 | Prototype cost $2,900–$6,500 | D | |
| R-062 | WX producibility (within PX capability) | D | |
| R-065 | Pressure test every unit | D | |
| R-066 | Ballast valve function test every unit | D | |
| R-076 | Operational SS 3 | D | |
| R-077 | Survival SS 5 | D | |
| R-078 | Operating temp 10–50 °C | D | |
| R-087 | Prototype ≤ 12 months | D | |

**Count: 26 D** (all from HC, safety standards, or fundamental physics)

## GROUP 2: CLEAR W — Nice-to-Have (AI confident W)

| ID | Requirement | AI Rec | CEO |
|----|------------|:------:|:---:|
| R-005 | Mast height 800–1200 mm surface mode | W | |
| R-008 | Payload mounting M6 pattern | W | |
| R-012 | Turning radius ≤ 3× LOA | W | |
| R-029 | Solar supplement ≥ 20 W | W | |
| R-032 | Mast material carbon fiber or Al | W | |
| R-037 | 4G communication (cellular dependent) | W | |
| R-048 | Emergency locator (strobe + buzzer) | W | |
| R-049 | No sharp edges ≥ 3 mm radius | W | |
| R-053 | COLREGS lights (exempt if <7 m) | W | |
| R-057 | Operator training ≤ 2 days | W | |
| R-058 | Single-screen GCS | W | |
| R-064 | Batch rate ≥ 2 units/month | W | |
| R-068 | GPS/compass calibration verify | W | |
| R-071 | Assembly without special tools | W | |
| R-082 | Post-mission rinse within 2 h | W | |
| R-083 | Maintenance interval ≥ 200 h | W | |
| R-085 | Spares VN-sourceable ≤ 14 days | W | |
| R-086 | Battery disposal per VN regulations | W | |

**Count: 18 W**

## GROUP 3: CEO JUDGMENT NEEDED — Could go either way

These 43 requirements need CEO decision. AI provides rationale for both sides.

### Geometry & Kinematics

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-003 | Max beam ≤ 1.2 m | W | Transport constraint is hard | Could relax if open frame folds | |
| R-004 | Mast height 300–600 mm (semi-sub) | D | Directly drives RCS (HC-1) | Could be tuned in Phase 2 | |
| R-006 | Waterplane area ≤ 0.05 m² (semi-sub) | D | HC-1 low-observable is demand | No formal RCS spec exists — proxy metric | |
| R-007 | Payload bay ≥ 15 L | W | Modular payload is nice-to-have | Mission-critical if ISR = primary | |
| R-010 | Transit speed ≥ 6 kts | W | Endurance-critical is cruise, not transit | Fast deploy to patrol zone matters | |
| R-011 | Depth transition ≤ 60 s | W | Could be slower and still work | Tactical: 60s exposed during transition | |
| R-013 | Waypoint accuracy ≤ 5 m CEP | D | ArduSub baseline delivers this | Could relax to 10 m for patrol | |

### Forces & Energy

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-017 | Buoyancy reserve ≥ 15% | D | Safety standard | Could trade for weight savings | |
| R-018 | Ballast capacity for mast-only profile | D | Core function of semi-sub | Already implied by R-014 depth hold | |
| R-019 | Survive SS 5 beam seas — no structural failure | D | HC-5 | Already covered by R-077 | |
| R-020 | Handling load ≤ 40 kg for 2-person | D | ODI O-11/O-12 = top underserved | Could accept 3-person instead | |
| R-021 | Thruster force ≥ 15 N each | W | Derived from drag estimate, rough | Could be refined in Phase 2 | |
| R-024 | Cruise power ≤ 200 W | D | Drives R-022 endurance directly | Could be higher if battery larger | |
| R-025 | Transit power ≤ 600 W | W | Not endurance-critical | Limits motor selection | |
| R-026 | Hotel load ≤ 30 W | W | Secondary to propulsion | Payload cameras could exceed this | |
| R-027 | Charge time ≤ 6 h | W | ODI O-06 high but achievable | LiFePO4 charge rate limited by BMS | |
| R-028 | Battery cycle life ≥ 2000 | D | LiFePO4 delivers this inherently | Could accept 1500 if cost savings | |

### Material

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-031 | Frame Al 6061 or 5083 | D | Marine grade mandatory | Could allow SS316 stainless | |
| R-033 | 5-year saltwater corrosion resistance | D | Service life standard | Could accept 3 years for prototype | |
| R-035 | UV resistance 5 years | W | Important but testable later | Prototype won't last 5 years anyway | |

### Signals

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-038 | Comms auto-reconnect ≤ 30 s | D | ODI O-23 = #1 underserved (Opp 10.0) | Timeout triggers auto-surface anyway | |
| R-039 | Telemetry ≥ 1 Hz pos, ≥ 0.2 Hz video | W | Standard ArduSub default | Could reduce for bandwidth savings | |
| R-041 | Depth sensor ± 10 mm | D | R-014 (±50 mm hold) needs ±10 mm sensor | Could relax to ±20 mm | |
| R-042 | Leak detection within 5 s | D | Safety-critical for sealed hull | Single binary sensor is simple | |
| R-043 | Heading ≤ 2° RMS | W | Pixhawk delivers this | Could relax for cost | |
| R-044 | Camera ≥ 1080p day, ≥ 720p night | W | ODI O-25 high but COTS dependent | Could accept 720p for both | |

### Ergonomics & Production

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-055 | Launch ≤ 2 persons | D | ODI O-11 (Opp 9.0) + đồn reality | Could accept 3 for heavy variant | |
| R-056 | Recovery ≤ 2 persons | D | ODI O-45 (Opp 8.0) | Recovery harder — could accept 3 | |
| R-054 | Lifting point rated ≥ 2× weight | D | Safety standard | Could accept 1.5× for prototype | |
| R-059 | Emergency recall single-button | D | ODI O-42 + safety | ArduSub RTL already exists | |
| R-061 | Production cost $2,000–$4,000 | W | Production target, not prototype gate | Important for business case | |
| R-063 | Lead time ≤ 90 days from BOM | W | Aspirational for prototype | Could accept 120 days | |

### Assembly & Transport

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-069 | Hull penetrations ≤ 6 | W | Leak risk reduction | May need 8+ for sensors/thrusters | |
| R-070 | Module replacement ≤ 30 min | W | Field maintenance nice-to-have | Prototype can accept longer | |
| R-072 | Fits pickup truck (2.5m × 1.5m × 0.8m) | D | Biên phòng logistics reality | Could disassemble for transport | |
| R-073 | Transport weight ≤ 100 kg total | D | ODI O-12 (Opp 9.5) — 2-person carry | Could accept vehicle-assisted only | |
| R-074 | Shore launch from beach/pier/boat | D | Biên phòng has all 3 scenarios | Could limit to pier-only initially | |
| R-075 | No crane required | D | Đồn has no crane | Fundamental deployment constraint | |

### Operation & Maintenance

| ID | Requirement | AI Rec | D case | W case | CEO |
|----|------------|:------:|--------|--------|:---:|
| R-067 | Thruster balance ≤ 5% differential | W | Straight-line tracking quality | Autopilot compensates anyway | |
| R-079 | Autonomy L2 → L3 upgradeable | D | HC-6 core requirement | L2 sufficient for initial deploy | |
| R-080 | Pre-mission check ≤ 10 min | W | ODI O-18 moderate priority | Could accept 15 min | |
| R-081 | Abort → surface ≤ 30 s | D | Safety-critical response time | NC valve makes this near-instant | |
| R-084 | 4 field-replaceable modules | W | Nice-to-have for maintainability | Could start with 2 (battery + thruster) | |

**Count: 43 requiring CEO judgment**

---

## Gap Analysis (AI-identified)

| Gap | Description | Recommendation |
|-----|------------|---------------|
| G-1 | No acoustic signature requirement | Add R-088: underwater noise ≤ X dB at 100 m? Low-observable = not just RCS |
| G-2 | No electromagnetic signature requirement | Add R-089: EMI from motors ≤ X dBμV? Could compromise comms |
| G-3 | No towing/being-towed requirement | Semi-sub may need tow-in capability for long transit |
| G-4 | No multi-vehicle coordination | Future fleet ops — W for now |
| G-5 | No cybersecurity requirement | Comms encryption, command authentication — increasingly important |

## Failure-Derived Requirements

| Failure Scenario | Existing Coverage | Gap? |
|-----------------|-------------------|------|
| Total power loss underwater | R-045, R-052 (NC valve → surface) | Covered |
| Single thruster failure | None | **ADD: R-090 — limp-home on single thruster** |
| GPS loss | R-013 waypoint, but no dead-reckoning req | **ADD: R-091 — DR navigation ≥ 30 min without GPS** |
| Mast damage (collision/wave) | None | **ADD: R-092 — comms/GPS antenna backup or waterproof main unit** |
| Payload failure | Not safety-critical → no req needed | OK |
| BMS failure | R-050 LiFePO4 inherent safety | Covered |
| Software crash | ArduSub watchdog → auto-surface | Covered by R-045 |

## SPOF Check (Single Points of Failure)

| Component | SPOF? | Mitigation | Req Coverage |
|-----------|:-----:|------------|-------------|
| Pixhawk flight controller | YES | No backup FC planned | **GAP — accept for prototype?** |
| Ballast pump | YES | NC valve is backup (surface) | R-045, R-052 |
| GPS antenna (on mast) | YES | See R-092 above | Gap |
| Battery pack | YES | Single pack, no redundancy | Accept — 2-pack adds weight/cost |
| LoRa radio | PARTIAL | 4G backup (R-037) | Covered |

## IFR Statement (Ideal Final Result)

> **The ideal semi-submersible USV provides persistent low-observable maritime surveillance from any shore in Vietnam, requiring zero specialized infrastructure, zero in-water personnel, and returns itself safely on any fault — while costing less than one month of a patrol boat crew's salary.**

## Sacred Constraints (NEVER compromise)

1. **HC-2: Auto-surface on fault** — NC ballast valve, always. This is the safety invariant.
2. **HC-1: Low-observable** — if it's easy to detect, it's just a bad surface USV.
3. **HC-4: Indigenous content ≥ 50%** — defense procurement non-negotiable.
4. **2-person ops** — if it needs 4 people and a crane, biên phòng won't use it.

---

## CEO Checkpoint

```
═══ BLOCK BB D/W CLASSIFICATION — AWAITING CEO ═══

Group 1 (Clear D): 26 requirements — AI recommends all D
Group 2 (Clear W): 18 requirements — AI recommends all W
Group 3 (CEO judgment): 43 requirements — need your D/W mark

Gaps identified: 5 (acoustic, EMI, tow, multi-vehicle, cybersecurity)
Failure-derived additions: 3 (R-090 limp-home, R-091 DR nav, R-092 antenna backup)
SPOFs: 2 unmitigated (Pixhawk, GPS antenna)
IFR: drafted
Sacred constraints: 4

CEO ACTION:
(1) Mark D/W on the 43 Group 3 requirements
(2) Accept/reject 5 gap additions + 3 failure-derived additions
(3) Accept/reject IFR + sacred constraints
(4) Any requirements to ADD or REMOVE?

After CEO marks D/W → compile final Requirements List v2.0
```
