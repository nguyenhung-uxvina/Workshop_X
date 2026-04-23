---
created: 2026-03-17
updated: 2026-03-17
type: icd
status: skeleton
---

# ICD v0 — VN-USV-SS-001

> Interface Control Document — Phase 0 Skeleton
> Details populated during Phase 1 Task Clarification

## Domain Boundaries

| Domain | Scope |
|--------|-------|
| Co (Mechanical) | Hull (HDPE torpedo + open frame), mast, ballast tank, mounting, structural, sealing |
| Dien (Electrical) | Battery (LiFePO4 48V), BMS, ESC, sensors, power distribution, wiring, connectors |
| AI/Software | ArduSub firmware, ROS2 nodes, navigation, C2, payload software, GCS |

## Interface Register

| IF-ID | From | To | Type | Description | Status |
|-------|------|----|------|-------------|--------|
| IF-001 | Co | Dien | Physical | Thruster mounting → hull penetration (×2), seal spec | TBD |
| IF-002 | Co | Dien | Physical | Battery compartment → hull internal rails, pressure equalization | TBD |
| IF-003 | Dien | AI | Data | Sensor signals (GPS, IMU, depth, leak) → Pixhawk/Jetson | TBD |
| IF-004 | AI | Dien | Control | ESC commands → thruster PWM, ballast pump/valve control | TBD |
| IF-005 | Co | AI | Thermal | Compute module heat → hull dissipation path | TBD |
| IF-006 | Co | Dien | Physical | Mast → antenna mounting, cable pass-through, waterproof seal | TBD |
| IF-007 | Dien | Co | Power | Solar panel (optional) → mounting on mast/deck, cable routing | TBD |
| IF-008 | AI | Dien | Data | Camera/payload data → onboard storage + comms transmission | TBD |
| IF-009 | System | Environment | Environmental | IP67/68 sealing, salt fog, UV, SS 5 survival loads | TBD |
| IF-010 | Co | Co | Structural | Payload mounting plate → open frame, load paths | TBD |

## Constraints Inherited from Technical Stack

- Ballast NC valve = fail-safe surface (safety-critical interface IF-001 area)
- Mast height trade-off: comms range vs RCS (IF-006)
- Battery compartment sealed + pressure-equalized (IF-002)
- All penetrations must maintain IP68 at 2m depth (IF-009)

## ICD Evolution Plan

| Version | Phase | Content |
|---------|-------|---------|
| v0 | Phase 0 | This skeleton — domains + interface register |
| v1 | Phase 1 | Requirements allocated to domains, interfaces specified |
| v2 | Phase 2 | Concept-specific interfaces, working principle selections |
| v3 | Phase 3 | Frozen for embodiment — change control active |
