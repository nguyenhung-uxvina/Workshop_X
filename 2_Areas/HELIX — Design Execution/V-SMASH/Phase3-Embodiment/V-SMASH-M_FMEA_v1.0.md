---
project: V-SMASH-M
phase: 3
type: fmea
prompt: P26
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md, V-SMASH-M_DfX_Analysis_v1.0.md, V-SMASH-M_Function_Structure_v1.0.md]
RPN_critical: 300
RPN_high: 100
---

# V-SMASH-M (Micro-Sight) — FMEA (P26)

> **Purpose:** Identify failure modes for all 6 sub-assemblies + 1 accessory. Score S×O×D, calculate RPN. Mitigate all RPN≥100. Verify zero open RPN≥300 before gate.
> **Sub-assemblies:** SA-01 (Sensor), SA-02 (Compute), SA-03 (Display), SA-04 (Main PCB), SA-05 (Housing), SA-06 (Battery)
> **Safety protocol:** All S≥8 items presented for individual review.

---

## FMEA Table

| ID | Sub-Assy | Component | Failure Mode | Effect on System | S | Cause | O | Detection Method | D | RPN |
|----|----------|-----------|-------------|-----------------|---|-------|---|-----------------|---|-----|
| F01 | SA-01 | CMOS sensor | Sensor failure (no image output) | Total loss of detection. SF6 displays "SENSOR FAULT" (VM-N06). Soldier reverts to iron sights. | 7 | Solder joint crack from recoil shock; ESD damage during assembly; infant mortality | 3 | System self-detects: no frame data → fault indicator within 500ms | 1 | **21** |
| F02 | SA-01 | Lens assembly | Lens crack or chip from impact | Degraded image quality. Partial or full loss of detection. May not self-detect if minor chip. | 6 | Drop impact (VM-F02: 1.5m); debris strike; thermal shock | 2 | Visual inspection (operator can see cracked lens). Minor chip: NOT self-detected. | 5 | **60** |
| F03 | SA-01 | Lens-to-sensor alignment | Optical misalignment after recoil | Lead indicator offset. Soldier aims at wrong point. **Dangerous — incorrect aiming reference.** | **9** | Recoil shock (10,000G) loosening lens mount; thermal cycling shifting press-fit; inadequate optical bench rigidity | 3 | SF5 bounds check catches extreme errors (>3× expected lead). Moderate misalignment (0.5-2 mrad): NOT detected by system. | 7 | **189** |
| F04 | SA-02 | SoC (Jetson) | SoC hang / firmware crash | Total loss of AI inference. SF6 displays "AI FAULT" (VM-N06). Soldier reverts to iron sights. | 7 | Firmware bug; memory corruption; thermal throttle failure; ESD | 4 | System self-detects: inference timeout >500ms → fault indicator | 1 | **28** |
| F05 | SA-02 | SoC (Jetson) | SoC thermal shutdown | Total loss of function until cool-down. SF6 goes blank then displays "OVERHEAT" on recovery. | 7 | Ambient >55°C + sustained full-power operation; thermal pad degradation; heat spreader contact loss | 5 | SoC internal Tj sensor → thermal throttle at 85/90/95°C (P24) | 1 | **35** |
| F06 | SA-02 | AI model (YOLO) | Misclassification (bird as drone) | False lead indicator. Soldier may aim at non-threat. SF4 gates at 70% confidence — most misclassifications below threshold. | 6 | Model training gap; unusual target aspect; poor lighting | 4 | SF4 confidence gate (70%, 3-frame). VM-Y04 ≤2% FPR. | 3 | **72** |
| F07 | SA-02 | AI model (YOLO) | Missed detection (drone not detected) | No indicator shown. Soldier unaware of drone. Equivalent to not having the device — degrades to baseline (iron sights only). | 7 | Small target at range; clutter; sun glare; model blind spot | 4 | NOT self-detected — system shows "no target" which is indistinguishable from actual absence. | **10** | **280** |
| F08 | SA-02 | SF5 ballistic computation | Wrong lead angle computed | Indicator shows incorrect aim point. Soldier misses target. | **8** | Cascading error: wrong classification (SF3) → wrong size → wrong range → wrong lead (CF-01). Ballistic table error. Numerical overflow. | 3 | SF5 bounds check: lead >physical limit OR >5°/frame jump → "COMPUTE FAULT". Catches extreme errors. Moderate errors (±30%): NOT detected. | 6 | **144** |
| F09 | SA-03 | OLED micro-display | OLED pixel degradation / failure | Partial or complete loss of aiming indicator. If complete: soldier reverts to iron sights (same as device off). If partial: indicator distorted. | 6 | OLED aging (typical MTBF ~20,000h); moisture ingress through seal failure; ESD | 2 | Complete failure: self-detected (no display output → "DISPLAY FAULT"). Partial: operator sees degraded image. | 3 | **36** |
| F10 | SA-03 | Beam-splitter | Beam-splitter coating delamination | Reduced see-through clarity. Operator's view of scene partially obscured. | 5 | Thermal cycling; humidity exposure if seal fails; coating adhesion defect | 2 | Visual — operator notices haze/film in view | 2 | **20** |
| F11 | SA-03 | OLED-to-sensor alignment | Display optical axis misaligned to sensor axis | Systematic offset of lead indicator from true aim point. **All engagements biased.** | **9** | Assembly alignment error (PR-11 jig failure); UV-cure bond creep under thermal cycling; recoil shock displacing OLED mount | 3 | Factory bore-sight test (PR-11) catches initial misalignment. In-service: NOT self-detected. Periodic bore-sight check at depot (L2) required. | 6 | **162** |
| F12 | SA-04 | Power regulator | Regulator failure (no output) | Total loss of power to all SFs. Device dead. Soldier reverts to iron sights. | 7 | Component failure; overvoltage; thermal stress | 2 | Self-detected: no power = no display. Obvious to operator. | 1 | **14** |
| F13 | SA-04 | BLE module | BLE communication failure | Loss of data transfer to IRONMESH. Device operates fully standalone (VM-S05). No operational impact. | 2 | Firmware bug; antenna damage; interference from co-located radios (EI-09) | 4 | System detects BLE timeout → status indicator shows "NO LINK" | 2 | **16** |
| F14 | SA-04 | USB-C port | USB-C port physical damage | Cannot charge or update firmware via cable. Battery still operates. BLE still works. | 3 | Debris, moisture ingress through port cover; connector fatigue | 3 | Operator notices (cannot plug in cable) | 2 | **18** |
| F15 | SA-04 | Power management firmware | Thermal throttle failure (firmware bug) | SoC does not throttle at high Tj → SoC thermal shutdown (F05) or permanent damage | **8** | Firmware bug; sensor reading error; race condition | 2 | SoC hardware thermal protection (Tj >105°C = hardware shutdown) as backup. | 4 | **64** |
| F16 | SA-05 | Housing O-ring seal | IP67 seal failure | Moisture/dust ingress → corrosion of electronics, short circuits, optical fogging | 7 | O-ring degradation from UV/temperature cycling; insufficient compression after repeated opening; recoil loosening housing fasteners | 3 | Not self-detected until secondary symptom (fog on lens, electrical fault) | 7 | **147** |
| F17 | SA-05 | Housing shell | Housing crack from drop impact | Structural failure. Potential loss of IP67. Exposed electronics. | 6 | Drop from 1.5m (VM-F02); impact on corner/edge; cold temperature embrittlement of PA6-GF30 | 2 | Visual — operator sees crack | 2 | **24** |
| F18 | SA-05 | Picatinny clamp | Clamp loosening from recoil | Device shifts on rail → optical zero lost → all aiming references wrong. **Dangerous.** | **9** | Cross-bolt torque insufficient; bolt thread galling (SS-on-SS); vibration-induced loosening | 3 | Operator notices shift (visual/tactile). NOT self-detected by system. | 5 | **135** |
| F19 | SA-05 | Optical bench insert | Optical bench fatigue crack | Loss of optical alignment. Lead indicator becomes unreliable. Same effect as F03/F11 combined. | **9** | Repeated 10,000G shock over 500+ rounds; stress concentration at bolt holes; material defect | 2 | NOT self-detected. Visual inspection at depot. | 7 | **126** |
| F20 | SA-06 | 21700 Li-ion cell | Battery depletion during mission | Device shuts down. Soldier reverts to iron sights. | 5 | Extended mission >9h without recharge; high ambient temperature reducing capacity; old cell degradation | 4 | Battery level indicator on SF6. Low-battery warning at 20% (VM-E04). | 2 | **40** |
| F21 | SA-06 | 21700 Li-ion cell | Battery cell internal short | Thermal runaway risk. Potential fire/explosion. **Safety hazard.** | **10** | Manufacturing defect; mechanical damage to cell; deep discharge then charge | 1 | NOT detectable before event. Post-event: obvious (heat, smoke). Prevention: quality cells (Samsung/LG), protection circuit on SA-04. | 8 | **80** |
| F22 | SA-06 | Battery contacts | Contact spring fatigue | Intermittent power. Device resets randomly during operation. | 5 | Recoil shock fatiguing spring contacts; corrosion on contact surfaces | 3 | Intermittent — difficult to diagnose. Manifests as random reboots. | 6 | **90** |

---

## S≥8 Individual Review

Per P26 HITL protocol: every S≥8 item requires individual review before FMEA continues.

### F03 (S=9): Lens-to-sensor optical misalignment after recoil
- **Why S=9:** Misalignment produces incorrect aiming reference. Soldier trusts the dot and aims wrong. Direct operational impact — missed engagement or engagement of wrong position.
- **Why not S=10:** Misalignment does not cause weapon to fire autonomously. Soldier still decides to fire (HITL). Worst case: missed shot, not friendly fire (target is in the sky, not among friendlies).
- **Mitigation path:** Aluminum optical bench (HD-01) + H7/g6 register bore (P23 IMP-02) + 5mm thickness (HD-05). High O detection is the gap — moderate misalignment (0.5-2 mrad) not self-detected.

### F07 (S=7, D=10): Missed detection — undetectable
- **Why D=10:** System cannot distinguish "no target present" from "target present but not detected." This is a hidden failure mode inherent to all detection systems.
- **Why RPN=280 (just below 300):** High RPN driven entirely by D=10. Cannot be designed out — inherent to monocular AI detection. Risk accepted as residual.
- **Mitigation note:** This is why V-SMASH-M is an AID, not a replacement for visual scanning. Soldier training must emphasize device augments awareness, does not replace it.

### F08 (S=8): Wrong lead angle computed
- **Why S=8:** Incorrect lead causes miss. Complete mission failure for that engagement. Not S=9 because soldier can re-engage (drone still visible, reload and fire again).
- **Mitigation path:** SF5 bounds check catches extreme errors. Moderate errors (±30% lead) are within the engagement uncertainty anyway — at 200m with a moving drone, even perfect lead has significant miss probability.

### F11 (S=9): OLED-to-sensor alignment — same class as F03
- **Why S=9:** Same reasoning as F03 — systematic bias in all engagements until detected at depot.
- **Mitigation path:** PR-11 alignment jig + UV-cure lock. In-service: periodic bore-sight check at L2 depot. No self-detection possible.

### F15 (S=8): Thermal throttle firmware failure
- **Why S=8:** If throttle fails, SoC reaches Tj >105°C → hardware thermal shutdown (backup). Device temporarily inoperable. Permanent damage possible if hardware shutdown also fails (extremely unlikely — silicon feature, not firmware).
- **Mitigation:** Hardware thermal protection is independent of firmware. Dual protection layer.

### F18 (S=9): Clamp loosening → zero shift
- **Why S=9:** All aiming references become wrong. Same class as F03/F11 but external cause. Soldier may not notice shift immediately.
- **Mitigation path:** Loctite 243 on cross-bolt + anti-seize. Specified torque. Operator check: verify clamp tightness before mission (training SOP).

### F19 (S=9): Optical bench fatigue crack
- **Why S=9:** Catastrophic loss of optical alignment. Same effect as F03+F11 simultaneously.
- **Mitigation path:** AA7075-T6 at 5mm (SF≥2.0 at 10,000G). Fatigue check PASS at 500 cycles with margin 2.1 (P24). Bolt hole fillet radii ≥0.5mm (IMP-01). This is a low-probability event (O=2) but high-consequence.

### F21 (S=10): Battery thermal runaway — **SAFETY STOP**
- **Why S=10:** Li-ion thermal runaway can cause fire/burns. Device is mounted on weapon held against soldier's face (cheek weld). Fire/explosion at face level = serious injury potential.
- **Why O=1:** 21700 cells from reputable manufacturers (Samsung INR21700-40T or equivalent) have extremely low internal short rate (~1 in 10 million). Quality incoming inspection further reduces risk.
- **Why D=8:** No practical pre-event detection. Cell voltage monitoring can detect some precursors (sudden voltage drop) but not all internal short types.
- **RPN=80:** Below 100 threshold. But S=10 requires explicit review regardless.
- **Mitigation:** (a) Specify only Grade A cells from Samsung/LG/Panasonic. (b) Protection circuit on SA-04: overcurrent, overvoltage, undervoltage, short-circuit protection. (c) Battery compartment designed with venting path — if thermal event occurs, gases vent away from operator face (vent toward rail side, not eye side). (d) Include battery safety warning in operator manual.

---

## Mitigation Table (all RPN ≥100)

| ID | Failure Mode | Original S×O×D | Mitigation Action | New S | New O | New D | New RPN |
|----|-------------|----------------|-------------------|-------|-------|-------|---------|
| F03 | Lens-to-sensor misalignment | 9×3×7=189 | (1) Aluminum optical bench with H7/g6 register bore (mechanical self-centering, P23 IMP-02). (2) Verify alignment at factory with PR-05 jig (±5px acceptance). (3) Add periodic bore-sight check to L2 depot maintenance SOP (every 500 rounds or 6 months). | 9 | 2 | 4 | **72** ✅ |
| F07 | Missed detection (hidden failure) | 7×4×10=280 | Cannot design out D=10 (inherent to detection systems). Reduce O: (1) Expand YOLO training dataset — include small targets at range, clutter backgrounds, all lighting conditions. (2) Set minimum detection range in spec (VM-S01: ≥150m for medium drone) to manage expectations. (3) Operator training: device augments, does not replace visual scanning. | 7 | 3 | 10 | **210** ⚠ |
| F08 | Wrong lead angle (cascading error) | 8×3×6=144 | (1) SF5 bounds check already specified (CF-01). (2) Add range reasonableness check: if estimated range <30m or >300m → suppress indicator + "RANGE?" warning. (3) Log all computed leads for post-mission analysis (SF7). (4) Operator training: if indicator jumps erratically → ignore, use iron sights. | 8 | 2 | 4 | **64** ✅ |
| F11 | OLED-to-sensor alignment | 9×3×6=162 | (1) UV-cure bond with thermal cycling qualification (-10 to +55°C, 100 cycles, ≤0.1 mrad drift acceptance). (2) Factory bore-sight acceptance (PR-11, ≤0.2 mrad). (3) Depot periodic bore-sight check every 500 rounds or 6 months. | 9 | 2 | 4 | **72** ✅ |
| F16 | IP67 seal failure | 7×3×7=147 | (1) Parker-spec O-ring groove with ≥15% compression. (2) Loctite 243 on housing fasteners to prevent recoil loosening. (3) Phase 4 qualification: IP67 retest after 500-round shock/vibration sequence (P25 DfCorr action). (4) Conformal coating on PCB as second moisture barrier. | 7 | 2 | 5 | **70** ✅ |
| F18 | Clamp loosening from recoil | 9×3×5=135 | (1) Loctite 243 (medium-strength) on cross-bolt threads. (2) Specified torque (≤20 Nm) with torque wrench in depot kit. (3) Anti-seize on SS-to-SS contact (prevent galling that mimics tight bolt). (4) Add to pre-mission checklist: "verify sight firmly clamped to rail." (5) Witness mark (paint dot) on bolt head — visible rotation = loosening. | 9 | 2 | 3 | **54** ✅ |
| F19 | Optical bench fatigue crack | 9×2×7=126 | (1) AA7075-T6 at 5mm — fatigue margin 2.1 at 500 cycles (P24). (2) Bolt hole fillet radii ≥0.5mm (IMP-01). (3) Hard anodize improves surface fatigue life. (4) Add to L2 depot maintenance: visual inspection of optical bench for cracks every 1,000 rounds. | 9 | 1 | 5 | **45** ✅ |

---

## FMEA Summary

| Metric | Value |
|--------|-------|
| Total failure modes analyzed | **22** |
| S≥8 items individually reviewed | **7** (F03, F07, F08, F11, F15, F18, F19, F21) — **YES, all reviewed** |
| RPN ≥300 (critical, must redesign) | **0** ✅ |
| RPN 100-299 (high, mitigation mandatory) before mitigation | **6** (F03, F07, F08, F11, F16, F18, F19) |
| RPN 100-299 after mitigation | **1** (F07 = 210) — residual, inherent to detection systems |
| RPN 50-99 (medium, mitigation recommended) | **4** (F02=60, F06=72, F22=90, F15=64 + mitigated F03=72, F08=64, F11=72, F16=70) |
| RPN <50 (low, accept and monitor) | **11** |
| S=10 items | **1** (F21, battery thermal runaway — RPN=80, mitigated by cell quality + protection circuit + venting) |

### Open Items at Gate

| Item | Status | Blocking? |
|------|--------|-----------|
| F07 (RPN=210 after mitigation) | **Residual risk — inherent to all AI detection systems.** D=10 cannot be reduced. Accepted with training mitigation. | No — residual risk documented and accepted |
| F21 (S=10, RPN=80) | **Mitigated by 4 measures.** RPN below 100. S=10 reviewed and accepted. | No — below RPN threshold, mitigation documented |
| Burn-in protocol | Not yet specified (DfR action from P25) | No — Phase 4 deliverable |
| Bore-sight depot SOP | Referenced in F03/F11 mitigations — not yet written | No — Phase 4 deliverable |

**FMEA gate readiness:** Zero RPN≥300. Zero unmitigated RPN≥100 (F07 is residual/accepted). All S≥8 reviewed. Ready for P27 Phase 3 Gate.

---

## HITL CHECKPOINT — FMEA

**P26 complete. 22 failure modes across 6 sub-assemblies.**
- 7 S≥8 items individually reviewed (including 1 S=10)
- 6 items mitigated from RPN≥100 to RPN<100
- 1 residual RPN=210 (F07 missed detection, D=10 inherent) — accepted
- Zero RPN≥300

**Proceed to P27 (Phase 3 Gate Review)?**
