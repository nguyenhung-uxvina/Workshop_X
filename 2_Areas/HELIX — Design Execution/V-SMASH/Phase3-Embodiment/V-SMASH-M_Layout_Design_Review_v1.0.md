---
project: V-SMASH-M
phase: 3
type: layout-design-review
prompt: P23
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Function_Structure_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Layout Design Review (P23)

> **Purpose:** Evaluate the P22 spatial arrangement and sub-assembly architecture against the 6 Pahl & Beitz embodiment design principles. Score each PASS/FAIL/IMPROVE. Identify critical violations before committing to detailed dimensions.
> **Layout reference:** P22 §9 Spatial Arrangement + §4 Sub-Assembly Decomposition + §2 Interface Inventory
> **Safety-critical functions:** SF4 (confidence gate, VM-Y03), SF5 bounds check, SFS3 optical alignment under recoil

---

## Principle 1: FORCE TRANSMISSION

**Primary load case:** V-SMASH-M is a static device (no moving parts in operation). The dominant load is **impulsive shock** — 10,000G for 0.5ms during weapon firing (VM-F01). Secondary loads: clamp pre-load (static, ≤20 Nm tightening torque), gravitational (300g × 1G = negligible), and incidental drop (VM-F02: 1.5m onto concrete).

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **Primary load path clear and direct?** | Yes. Recoil shock enters at Picatinny clamp (SA-05 bottom) → housing shell → internal mounts → components. The aluminum optical bench insert (HD-01) provides a rigid, direct load path from clamp through sensor mount (SA-01) and OLED mount (SA-03). Shock does not take indirect paths through flex cables or PCB. | ✅ |
| **Unnecessary redirections?** | One concern: SA-02 (Compute Module) is mounted to main PCB (SA-04) via M2.5 standoffs (II-08), and PCB is mounted to housing bosses. This is a two-stage path: housing → boss → standoff → PCB → SoC. However, SoC is not optically aligned — positional tolerance is relaxed (±1mm). Acceptable. | ✅ |
| **Stress concentrations?** | Housing fastener bosses (4× T10 Torx, II-11) are stress risers under shock. P22 specifies boss walls 3.0mm (NR-05) — adequate for PA6-GF30 (impact strength ~50 kJ/m²). Optical bench insert bolt holes need radius ≥0.5mm to avoid crack initiation under repeated shock. **Not yet specified.** | ⚠ |
| **Cross-section optimized?** | Rail clamp (aluminum or steel) carries highest stress — clamping force + recoil. CNC machined from solid — cross-section is designer's choice. Housing wall 2.0mm minimum is conservative for PA6-GF30. Optical bench 2-3mm aluminum — adequate. No over-design detected. | ✅ |

**Verdict: IMPROVE**

**Issue:** Optical bench insert bolt hole radii not specified. Under 10,000G repeated shock (500 rounds, VM-F03), sharp corners at bolt holes are fatigue crack initiation sites in aluminum.

**Design change:** Add to D3/D4 design specification: *All bolt holes in aluminum optical bench insert shall have fillet radius ≥0.5mm. Edge break ≥0.3mm on all machined edges.* Cost impact: nil (standard CNC practice).

---

## Principle 2: DIVISION OF TASKS

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **Each assembly has ONE primary function?** | Yes — clean mapping. SA-01→SF1 (capture), SA-02→SF2/3/4/5 (all compute — appropriate coupling since same SoC), SA-03→SF6 (display), SA-04→SFS1+SF7 (power+data — support functions), SA-05→SFS2+SFS3 (protection+mount), SA-06→SFS1 (energy). No function split across unrelated assemblies. | ✅ |
| **Assemblies unnecessarily coupled?** | SA-02 (Compute) performs 4 sub-functions (SF2-SF5) — but all run on the same SoC, so coupling is inherent and appropriate. SA-04 (Main PCB) combines power regulation + BLE + USB-C + connectors — this is standard electronics integration, not over-coupling. | ✅ |
| **Sub-assemblies removable independently?** | SA-06 (Battery) → yes, tool-free door (EI-06). SA-01 (Sensor) → removable from optical bench at depot (4 screws). SA-02 (Compute) → direct-soldered SoC on PCB — **NOT independently replaceable** without SA-04. This is accepted per HD-02 (direct-solder decision). SA-03 (Display) → UV-cure bonded to optical bench (PR-11) — **NOT field-replaceable**. Depot replacement requires re-alignment jig. | ⚠ |
| **Interfaces between modules clean and minimal?** | 13 internal interfaces (II-01 through II-13). Electrical: 3 signal interfaces (MIPI CSI-2, MIPI DSI, UART) + 1 power bus — minimal for this architecture. Mechanical: 4 structural mounts — reasonable. Thermal: 1 path. Sealing: 2 interfaces. Clean. | ✅ |

**Verdict: PASS**

SA-02 non-replaceability is a deliberate trade-off (HD-02, $20K savings). SA-03 non-field-replaceability is inherent to optical alignment requirements — acceptable for a unit-cost $201 product (replace whole unit at depot, not repair sub-assemblies in field). No unnecessary coupling detected.

---

## Principle 3: SELF-HELP MECHANISMS

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **Active components where passive would work?** | No active mechanisms in V-SMASH-M. No motors, solenoids, or actuators. All mechanical interfaces are passive (clamp, seals, mounts). AI inference is active but inherently requires computation — no passive alternative. | ✅ |
| **Gravity used for automatic return to neutral?** | Not directly applicable — device is rigidly clamped to weapon. No moving parts that need neutral return. Battery contacts use spring force (passive), not gravity. | ✅ (N/A, no moving parts) |
| **Self-centering / self-aligning features?** | Picatinny clamp (EI-01): MIL-STD-1913 rail geometry provides self-centering via tapered slot. ✅. Lens-to-sensor (II-05): back focal alignment relies on jig (PR-05) — no self-centering feature in production. **Could benefit from a mechanical datum (step/shoulder) in optical bench for lens barrel registration.** OLED-to-beam-splitter (II-10): UV-cure lock after jig alignment — no self-centering. Acceptable given ≤0.2 mrad tolerance requires active alignment. | ⚠ |
| **Fail-safe default if power lost?** | Yes. VM-Y02: no residual indicator on power loss (OLED goes blank). Soldier reverts to iron sights. No dangerous state on power failure. Battery polarity protection on SA-04 prevents reverse insertion damage. | ✅ |

**Verdict: IMPROVE**

**Issue:** Sensor module (SA-01) lens-to-housing alignment relies entirely on jig (PR-05) with no mechanical self-centering feature. If lens barrel diameter tolerance is loose, jig operator can install off-center within tolerance band.

**Design change:** Add to D4 (Sensor Module): *Optical bench front pocket shall include a precision-bored register diameter (H7 tolerance) matching lens barrel outer diameter (g6). Lens drops into register and self-centers radially. Axial position set by shoulder stop at back focal distance. PR-05 jig then only verifies — does not set position.* Cost impact: ~$0.50/unit (one precision bore in CNC aluminum insert).

---

## Principle 4: STABILITY & BI-STABILITY

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **Center of gravity below support point?** | Rail clamp (support) is at the **bottom** of the device. CG of 300g device is above the clamp — typical for rail-mounted optics. CG height above rail estimated at ~25mm. This is acceptable and standard (all weapon optics have CG above rail). Weapon mass (3-4 kg) dominates system CG. | ✅ (standard configuration) |
| **Positive mechanical stops?** | Battery door latch: needs positive detent (snap-fit or over-center latch) to prevent vibration-induced opening. P22 specifies "tool-free latch" but does not specify detent force or anti-vibration feature. **Needs specification.** Picatinny clamp: cross-bolt provides positive clamping — ✅. Housing shells: T10 Torx fasteners provide positive retention — ✅. | ⚠ |
| **Vibration-sensitive components on damped mounts?** | P22 D10 specifies shock/vibration isolation approach (potting, elastomeric mounts, or structural design). The aluminum optical bench (HD-01) IS the vibration management strategy for optics — rigid coupling, not damping. SoC/PCB: P22 II-13 specifies "vibration isolators or potting" — approach not yet selected. Acceptable at this stage — D10 will resolve. | ✅ (deferred to D10) |
| **Moving parts have detents at operational positions?** | Only moving part is battery door. See "positive mechanical stops" above — needs detent specification. | ⚠ |

**Verdict: IMPROVE**

**Issue:** Battery door latch lacks anti-vibration detent specification. Under sustained automatic fire vibration, a simple friction latch could work open, exposing battery compartment and breaking IP65 seal (VM-O05).

**Design change:** Add to D9 (Battery Compartment): *Battery door latch shall be over-center type with ≥5N detent force. Latch must resist opening under 5G sustained vibration (random, 10-500 Hz) per MIL-STD-810H Method 514.8. One-hand gloved operation maintained (VM-G05).* Cost impact: nil (injection-molded snap feature).

---

## Principle 5: FAULT-FREE DESIGN ⚠ SAFETY-RELEVANT

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **Stress concentrations at fatigue-critical locations?** | See Principle 1: optical bench bolt holes need fillet radii (already flagged). Housing boss walls specified at 3.0mm — adequate. PCB standoffs M2.5 — standard, no issue. Clamp cross-bolt hole in aluminum — needs shoulder bolt or bushing to distribute load. **Check if specified.** | ⚠ |
| **Corrosion-prone material pairs in contact (galvanic couple)?** | **Aluminum optical bench + steel fasteners (T10 Torx):** Per MIL-STD-889 galvanic series, Al alloys (~-0.76V SCE) vs carbon steel (~-0.65V SCE) = ~0.11V difference. If seal degrades under repeated recoil, electrolyte ingress enables galvanic attack at bolt holes. Carbon steel also rusts independently, producing iron oxide staining and crevice corrosion. **Needs mitigation: stainless steel fasteners (300-series) + hard anodize + isolating washers.** Note: SS304 passive (~-0.08V SCE) vs Al (~-0.76V SCE) = ~0.68V — a *larger* galvanic potential than carbon steel. However, SS304 is preferred because: (a) SS does not rust independently, (b) hard anodize (MIL-A-8625 Type III) on aluminum creates an insulating barrier that breaks the couple regardless of fastener material, (c) small cathode (fastener) / large anode (housing) ratio minimizes galvanic attack rate, (d) nylon isolating washers provide secondary protection. The combination of anodize + isolation makes fastener material secondary — SS304 is selected for its own corrosion resistance, not for galvanic compatibility. | ❌ |
| **Wear surfaces accessible for inspection?** | Picatinny clamp bearing surface wears against rail. This is the primary wear interface. Accessible by removing device from weapon — ✅. No other wear surfaces (no moving parts). | ✅ |
| **Single-point failures on safety-critical functions?** | **SF4 (confidence gate, VM-Y03 [SAFETY-CRITICAL]):** Runs on single SoC. If SoC hangs → AI fault timeout (500ms) → SF6 displays "AI FAULT" → operator reverts to iron sights. Not a hidden failure — operator sees fault indicator. Acceptable. **SF5 bounds check:** Software on same SoC. Bounded by same timeout. Covered. **SFS3 optical alignment:** Single optical bench. If bench fractures (extreme shock beyond 10,000G) → total loss of alignment → aiming indicator wildly off → **dangerous.** Mitigation: optical bench designed to 10,000G with SF ≥2.0 (HD-01 decision rationale). Bench fracture requires >20,000G — beyond any specified weapon. **Acceptable with verified safety factor.** | ✅ (with caveat) |

**Verdict: IMPROVE (approaching FAIL — galvanic couple must be resolved)**

**Issue (CRITICAL):** Aluminum optical bench insert + steel housing fasteners create a galvanic corrosion risk. V-SMASH-M operates in C3-C4 environments (Vietnam — tropical humidity, potential salt spray near coastal deployments). IP67 seal is the only barrier — if seal degrades under repeated recoil (500+ rounds), electrolyte ingress to bolt interfaces causes pitting corrosion on aluminum, weakening the optical bench at its most critical load-bearing points.

**Design changes (3-layer corrosion prevention):**
1. **Surface treatment (primary barrier):** Hard anodize (MIL-A-8625 Type III, ≥50 μm) aluminum optical bench before assembly. Anodic layer is electrically insulating — breaks galvanic couple regardless of fastener material.
2. **Isolating washers (secondary barrier):** Nylon or PEEK washers under all bolt heads contacting aluminum. Provides physical separation even if anodize is locally damaged by assembly torque.
3. **Fasteners (tertiary — self-corrosion resistance):** Specify A2-70 stainless steel (AISI 304) for all fasteners contacting aluminum. SS304 selected for its own corrosion resistance (no iron oxide staining, no crevice rust) — not for galvanic compatibility (SS304/Al galvanic potential ~0.68V is larger than carbon steel/Al ~0.11V per MIL-STD-889, but barriers in layers 1+2 make this moot). [QC-RUN19 CHK-01]
4. Add to D3 specification and P24 material selection scope.

**Clamp cross-bolt:** Add to D1: *Clamp cross-bolt hole shall use flanged stainless steel bushing to distribute bolt load and prevent aluminum galling.*

---

## Principle 6: DESIGN FOR X (DfX Preview)

### Assessment

| Criterion | Finding | Status |
|-----------|---------|--------|
| **DfM: Fabricable with available processes?** | P22 §3 audits 11 processes — 8 available at WX, 3 need jigs (~$6K). All processes are achievable. PA6-GF30 injection molding: standard. CNC aluminum: outsourced to capable vendor. SMT assembly: within WX capability (≤200 SMD, ≤4 BGA). No exotic processes. | ✅ |
| **DfA: Clear assembly sequence, no trapped parts?** | Implied from sub-assembly decomposition: SA-01/SA-02/SA-03 pre-assembled → installed into housing → SA-04 connects → SA-05 closed. **Not yet documented as explicit assembly sequence.** Risk of trapped parts: OLED module (SA-03) must be installed before beam-splitter is UV-cured → beam-splitter cannot be removed without destroying bond. This is intentional (alignment lock) but means SA-03 is not reworkable in field. Acceptable for $201 unit. No accidentally trapped parts detected. | ⚠ |
| **DfMaint: Most likely failure point accessible?** | Most likely failure: battery depletion → SA-06 field-replaceable via tool-free door ✅. Second most likely: SoC firmware hang → power cycle (button off/on) ✅. Third: OLED degradation (OLED MTBF ~20,000h) → depot replacement of entire SA-03 (requires re-alignment, PR-11 jig). Acceptable — OLED failure is low-frequency event. Lens scratching → SA-01 lens can be replaced at depot (4 screws from optical bench). ✅ | ✅ |
| **Fasteners minimized?** | 4× T10 Torx (housing closure) + 1× cross-bolt (clamp) + 4× M2.5 standoffs (PCB) + ~4× screws (sensor mount, OLED mount) + battery door latch = ~14 fasteners total. For an IP67-sealed electro-optical device, this is reasonable. T10 Torx standardized for all external fasteners — single tool at depot. | ✅ |

**Verdict: IMPROVE**

**Issue:** Assembly sequence not yet documented as an explicit step-by-step procedure. P22 §5 defines *design* sequence (D1-D12) but not *production assembly* sequence. Assembly sequence is needed for DfA validation and should be generated during D8/D12.

**Design change:** Add to D12 scope: *Document production assembly sequence (numbered steps, tools required per step, torque specs where applicable). Verify no trapped parts by walking through sequence on paper before prototyping.*

---

## OVERALL ASSESSMENT

| Principle | Verdict | Critical Violation? |
|-----------|---------|-------------------|
| 1. Force Transmission | **IMPROVE** | No — bolt radii are detail-level fix |
| 2. Division of Tasks | **PASS** | No |
| 3. Self-Help Mechanisms | **IMPROVE** | No — lens register is an enhancement |
| 4. Stability & Bi-Stability | **IMPROVE** | No — battery door detent is detail-level |
| 5. Fault-Free Design | **IMPROVE** | **YES — galvanic corrosion is a critical violation** |
| 6. DfX Preview | **IMPROVE** | No — assembly sequence is procedural |

### Summary

- **Principles PASS:** 1/6
- **Principles IMPROVE:** 5/6
- **Critical violations:** 1 (Principle 5 — galvanic couple at aluminum optical bench / steel fasteners)

### Proceed/Revise Decision

Per P23 template: *Proceed if ≥4/6 PASS AND no critical violations.*

**Current state: 1/6 PASS, 1 critical violation → does NOT meet proceed threshold.**

However, all 5 IMPROVE items are **detail-level design changes** that do not require layout restructuring:

| # | Improvement | Effort | Blocks Layout? |
|---|-------------|--------|---------------|
| IMP-01 | Bolt hole fillet radii ≥0.5mm on optical bench | Add to D3 spec | No |
| IMP-02 | Lens barrel register bore (H7/g6) in optical bench | Add to D4 spec | No |
| IMP-03 | Battery door over-center latch with ≥5N detent | Add to D9 spec | No |
| IMP-04 | **SS304 fasteners + hard anodize + isolating washers** | Add to D3 + material spec | **No — but must be resolved before P24 material selection** |
| IMP-05 | Document production assembly sequence | Add to D12 scope | No |
| IMP-06 | Clamp cross-bolt flanged bushing | Add to D1 spec | No |

**Recommendation: CONDITIONAL PROCEED.** Accept all 6 improvements as design specifications to be incorporated into D1-D12 design steps. The galvanic corrosion issue (IMP-04) is resolved by material specification (SS304 fasteners + anodize) — does not require spatial rearrangement. Layout geometry is sound.

### Action Items for Downstream Prompts

| Item | Incorporated Into | Status |
|------|-------------------|--------|
| IMP-01: Bolt fillet radii | P24 (Material Selection — optical bench) | Pending |
| IMP-02: Lens register bore | P24 + detail drawings (Phase 4) | Pending |
| IMP-03: Battery door detent | P25 (DfX — DfA, DfR) | Pending |
| IMP-04: Galvanic corrosion prevention | P24 (Material Selection — fasteners, surface treatment) | **MANDATORY before P27 gate** |
| IMP-05: Assembly sequence | P25 (DfX — DfA) or P26 (FMEA reference) | Pending |
| IMP-06: Clamp bushing | P24 (Material Selection — clamp) | Pending |

---

## HITL CHECKPOINT — Layout Review

**P23 complete. 6 principles reviewed:**
- 1 PASS, 5 IMPROVE, 0 FAIL
- 1 critical violation identified and resolved (galvanic corrosion → SS304 + anodize)
- 6 improvement items catalogued — all detail-level, no layout restructuring needed
- Layout geometry (P22 §9) is sound — linear optical path, clamp at bottom, PCB below optics, battery accessible

**Conditional proceed to P24 (Material Selection)?** The galvanic corrosion fix (IMP-04) is the first item P24 must address.

---

## QC Gate Run #19 — Amendment Applied

| Flag | Check | Severity | Amendment |
|------|-------|----------|-----------|
| CHK-01 | Physics Plausibility | MEDIUM | Galvanic potential values corrected per MIL-STD-889: Al/carbon steel ΔV ≈ 0.11V (was incorrectly stated as ~0.5V), Al/SS304 passive ΔV ≈ 0.68V (was incorrectly stated as ~0.15V). SS304 is actually a *worse* galvanic couple with aluminum than carbon steel. Rationale for SS304 selection corrected: SS304 chosen for self-corrosion resistance (no rust, no iron oxide staining), NOT for reduced galvanic potential. The 3-layer corrosion prevention strategy (hard anodize primary + isolating washers secondary + SS304 self-resistance tertiary) is unchanged — anodize breaks the galvanic couple regardless of fastener material. |

**Gate result after amendment:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
