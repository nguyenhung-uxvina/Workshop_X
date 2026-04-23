---
project: V-SMASH-M
phase: 3
type: assembly-sequence
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md, V-SMASH-M_Layout_Design_Review_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Production Assembly Sequence

> **Purpose:** Step-by-step production assembly sequence with tools, times, and QC checks per step. Extracted from P27 Gate Review §C for standalone use on the production floor.
> **Resolves:** P23 IMP-05 (assembly sequence not documented).

---

## Assembly Sequence (23 Steps)

| Step | Operation | Sub-Assembly | Tools | Time | QC Check |
|------|-----------|-------------|-------|------|----------|
| 1 | Populate main PCB (SMT + through-hole) | SA-04 | SMT line, wave solder | 15 min | AOI + ICT |
| 2 | Solder SoC to main PCB (BGA reflow) | SA-02 → SA-04 | Reflow oven, BGA rework station | 10 min | X-ray (sample) |
| 3 | Apply conformal coating to populated PCB | SA-04 | Spray booth | 5 min + 2h cure | Visual (IPC-CC-830) |
| 4 | Assemble lens + sensor into lens mount ring | SA-01 | PR-05 jig (V-block + collimated target) | 5 min | FOV center ±5px |
| 5 | Assemble OLED + beam-splitter + relay lens into display mount | SA-03 | PR-11 jig (bore-sight) | 8 min | ≤0.2 mrad alignment, UV-cure lock |
| 6 | Press heat-set inserts into housing bottom shell | SA-05 | Heat press (M2.5 inserts) | 3 min | Pull-out sample ≥200N |
| 7 | Install aluminum optical bench insert into housing bottom shell | SA-05 | M3 cap screws (A2-70) + nylon washers + Loctite 243 + torque driver | 3 min | Torque verified |
| 8 | Mount SA-01 (sensor module) to optical bench front pocket | SA-01 → SA-05 | M2 cap screws + nylon washers + Loctite 243 | 2 min | Seated in H7 register bore |
| 9 | Mount SA-03 (display module) to optical bench rear pocket | SA-03 → SA-05 | M2 cap screws + nylon washers + Loctite 243 | 2 min | Alignment check (bore-sight verify) |
| 10 | Apply thermal pad to SoC location on PCB | SA-04 | Manual placement | 1 min | Pad centered on SoC |
| 11 | Install heat spreader on housing wall (inside) | SA-05 | Thermal paste + press fit | 1 min | Contact verified |
| 12 | Install PCB assembly (SA-04 + SA-02) onto housing standoffs | SA-04 → SA-05 | M2.5 standoffs + cap screws + Loctite 243 | 3 min | Torque verified. SoC thermal pad contacts spreader. |
| 13 | Connect flex cables: MIPI CSI-2 (SA-01→SA-04), MIPI DSI (SA-04→SA-03) | — | ZIF connector clips | 2 min | Cable seated, clips locked |
| 14 | Install battery contacts (spring + flat) | SA-06 interface | Solder or crimp to SA-04 | 2 min | Continuity check |
| 15 | Place O-ring in housing bottom groove | SA-05 | Manual + silicone grease | 1 min | O-ring seated, no twists |
| 16 | Close housing: place top shell onto bottom shell | SA-05 | Alignment pins | 1 min | Shells fully seated |
| 17 | Install 4× T10 Torx housing closure screws | SA-05 | T10 Torx driver + Loctite 243 | 2 min | Torque verified (~1.5 Nm) |
| 18 | Install battery door with gasket | SA-05 | Manual snap (tool-free latch) | 0.5 min | Over-center click felt |
| 19 | Attach Picatinny clamp to housing bottom | SA-05 | Pre-assembled clamp + M6 cross-bolt + nylon washer + anti-seize | 2 min | Clamp aligned, bolt snug |
| 20 | **EOL functional test** | Whole unit | PR-10 test jig | 5 min | Power-on ✓, AI detect ✓, OLED indicator ✓, BLE handshake ✓, thermal sensor reads ✓ |
| 21 | Apply surface markings (serial number, markings) | SA-05 | Pad printer | 2 min | Legibility check |
| 22 | Insert battery, verify power-on | SA-06 | Manual | 1 min | Device powers on, battery level shows |
| 23 | Package with accessories (ACC-01) | — | Box, foam insert | 2 min | Packing list verified |

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| Total steps | 23 |
| Total assembly time | ~77 min/unit (excluding SMT/conformal coat cure) |
| Bottleneck step | Step 5 — OLED alignment (8 min, requires PR-11 jig) |
| Unique tools required | T10 Torx, torque driver, heat press, PR-05 jig, PR-10 jig, PR-11 jig |
| External fastener tool | T10 Torx only (single tool for depot/field) |

---

## Trapped Parts Check

Reviewing sequence — no part is installed that blocks access to a later part:
- Flex cables (Step 13) connected after all modules mounted
- O-ring (Step 15) placed before shell closure (Step 16)
- PCB (Step 12) installed after optical modules (Steps 8-9) — PCB is below optical path, does NOT trap optics

**Result: ✅ No trapped parts.**

---

## Scaling Assessment (500 → 2,000 units/year)

| Volume | Bottleneck | Mitigation |
|--------|-----------|------------|
| 500/year (~2/day) | Step 5 (OLED alignment, 8 min) — single PR-11 jig sufficient | None needed |
| 2,000/year (~8/day) | Step 5 saturates at ~8 units/shift. Mold cycle time (60s/part × 3 shells) becomes relevant. | Add 2nd PR-11 jig ($2K). Consider multi-cavity mold ($6K→$12K). |

---

## Assembly Flow Diagram

```
PARALLEL PRE-ASSEMBLY:
  ┌─ SA-04: PCB populate (Steps 1-3) ──────────────────────┐
  ├─ SA-01: Sensor module (Step 4) ─────────────────────────┤
  ├─ SA-03: Display module (Step 5) ────────────────────────┤
  └─ SA-05: Housing prep (Step 6) ─────────────────────────┤
                                                             │
SEQUENTIAL INTEGRATION (Steps 7-19):                         ▼
  Housing ← optical bench ← SA-01 ← SA-03 ← thermal ← PCB ← cables ← battery contacts ← seal ← close ← clamp
                                                             │
FINAL (Steps 20-23):                                         ▼
  EOL test → markings → battery insert → package
```
