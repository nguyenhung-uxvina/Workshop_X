---
created: 2026-04-16
updated: 2026-04-16
type: phase2-risk
variant: LITE-PA2
block: BD
pipeline: helix-concept-generate --icdm
shortlisted-concept: C4 Cost-Optimized (R3 Elastomer hybrid + M3 Taper-cam)
ceo-decision: SC-2 70% treated as SOFT target, not hard constraint
---

# Block BD — Risk Analysis (LITE-PA2, C4 Shortlist)

**Shortlisted Concept:** C4 Cost-Optimized
- **SS1 Recoil:** WP-R3 Elastomer-damped pulse-shaped solenoid (peak 40-60N, elastomer Shore 60A, thickness 8-12mm)
- **SS1 MWI:** WP-M3 Taper-pin + cam lever (swap 20-40s)
- **SS2-SS5:** Inherited from portfolio (3× projector + Unity + 2-DOF motion + BT scenario + ray-trace AAR)
- **CEO decision:** SC-2 70% fidelity is SOFT; measured fidelity 40-55% accepted as floor for LITE tier

---

## 1. Cross-Domain Coupling Analysis (Mech × Elec × SW)

| Coupling | Risk Level | Description |
|---|:-:|---|
| **M↔E: Solenoid ↔ driver board** | 🟡 MED | Flyback inductive spike (~100V) may damage MOSFET if snubber under-sized. Elastomer bumper adds no electrical coupling. **Mitigation:** TVS diode + RC snubber + current-limit resistor. |
| **M↔E: Taper-pin cam ↔ encoder mount** | 🟡 MED | Taper wear over cycles may drift encoder zero-reference. **Mitigation:** Periodic re-zero routine in SW; hard-stop mechanical reference. |
| **E↔SW: Encoder ↔ Unity** | 🟢 LOW | Inherited from portfolio — CAN bus or USB HID @ 30-100 Hz, proven pattern. |
| **E↔SW: Trigger → solenoid fire** | 🟡 MED | Latency budget <50ms (TESE rhythms concern from BA). Trigger sense → MCU → solenoid driver → visual flash → audio sync must all land in 50ms window. **Mitigation:** MCU priority interrupt + Unity UDP trigger event + audio pre-load; verify with oscilloscope in physical gate. |
| **M↔SW: Elastomer aging ↔ perceived fidelity** | 🟡 MED | Elastomer hardens with age and heat cycling → pulse tail shortens → perceived recoil drops over time. **Mitigation:** Service manual mandates 2-yr replacement; SW auto-detect via accel sensor on cradle (future). |
| **M↔E: Cradle ↔ motion platform attach** | 🟢 LOW | 2-DOF motion < 8°/100ms, well below recoil impulse duration — no resonance coupling. |

---

## 2. Conceptual FMEA (CFMA)

10 failure modes ranked by RPN (Severity × Occurrence × Detection, each 1-10).

| # | Failure Mode | Cause | Effect | S | O | D | RPN | Mitigation |
|---|---|---|---|:-:|:-:|:-:|:-:|---|
| FM-1 | Solenoid fails to fire | MOSFET fault / driver short | No recoil — training session interrupted | 6 | 2 | 2 | **24** | TVS protection, diagnostic LED, hot-swap driver PCB |
| FM-2 | Elastomer hardens prematurely | Thermal cycling + UV | Fidelity drops below acceptable | 5 | 4 | 6 | **120** | Enclosed cabin, 2-yr service interval, spare elastomer shipped with unit |
| FM-3 | Taper-pin wear | Repeated 5+ weapon swaps/day × 5 yr | Alignment drift, encoder zero error | 5 | 5 | 4 | **100** | Hardened steel taper (60 HRC), wear indicator groove |
| FM-4 | Cam lever fails to hold | User forgets to engage cam | Weapon falls off during session | **9** | 3 | 2 | **54** | Interlock switch on cam → SW disables trigger if cam not locked |
| FM-5 | Recoil peak exceeds spec (>60N) | Driver voltage transient | Operator surprise, possible soft-tissue bruising | **8** | 2 | 5 | **80** | Current-limit resistor, fuse, safety test in acceptance |
| FM-6 | Encoder drift from taper wear | FM-3 cascade | Aim readings off — negative training transfer (SC-2 risk!) | **9** | 4 | 5 | **180** | Routine re-zero + hard mechanical reference + SW drift alert |
| FM-7 | Unity trigger-event lost | Network jitter (UDP) | Visual flash without recoil, or vice versa | 6 | 3 | 3 | **54** | TCP fallback, event sequence ID, watchdog timer |
| FM-8 | Solenoid overheating | Rapid fire >5 shots/sec | Force drops, fidelity variable | 4 | 4 | 4 | **64** | Duty-cycle limit in SW, temp sensor on solenoid body |
| FM-9 | NFC reader fails (N/A for C4 — no NFC) | — | — | — | — | — | — | N/A (C4 uses manual cam, not M2 NFC) |
| FM-10 | Cradle structural failure under cumulative recoil | Fatigue at mount brackets | Catastrophic cradle detach | **9** | 2 | 6 | **108** | FEA fatigue analysis Phase 3, 2× safety factor, periodic inspection |

**High-RPN items (>100):** FM-6 encoder drift (180), FM-2 elastomer aging (120), FM-10 cradle fatigue (108), FM-3 taper wear (100).

**Top risk:** **FM-6 encoder drift cascade from taper wear** — this is the #1 concern because it directly threatens SC-2 (negative training transfer from incorrect aim). Must be addressed in Phase 3 embodiment with routine re-zero protocol + hard mechanical reference.

---

## 3. Assumption Register + Shadow Assumptions

### Declared Assumptions (7)

| ID | Assumption | L-tag | Risk if wrong | Test |
|---|---|:-:|---|---|
| AS-1 | Solenoid pulse-shape reaches 40-55% perceived fidelity | L5 | Concept fails SC-2 even soft | Physical gate 2026-05-07 bench |
| AS-2 | Elastomer Shore 60A × 10mm produces smooth pulse tail | L4 | Perceived recoil jerky | Bench rig with accel sensor |
| AS-3 | Taper-pin mount holds <0.3mm repeatability over 5000 swaps | L4 | Encoder drift accelerates | Accelerated wear test |
| AS-4 | Latency <50ms achievable with MCU + Unity UDP | L3 | Multi-modal cue desync | Oscilloscope timing test |
| AS-5 | Operator accepts cam-lever swap (20-40s) vs <5s premium | L5 | Customer rejects slow swap | Operator interview in acceptance |
| AS-6 | LITE small-boat AC budget <200W steady (no compressor) | L3 | Integration issue with vessel | Vessel AC audit |
| AS-7 | SS2-SS5 inherited unchanged from portfolio | L2 | Rework if SS1 forces interface change | SA ICD review (confirmed OK) |

### Shadow Assumptions (Hidden, 4) — from SA retroactive work

| ID | Shadow Assumption | Why hidden | Impact |
|---|---|---|---|
| SH-1 | Elastomer outgassing won't affect projector optics | Nobody owns air quality spec | Optics fog over 1-2 yr |
| SH-2 | Cam lever won't be bumped by operator knee in small cockpit | Ergonomic study not done | FM-4 occurrence rises |
| SH-3 | Accel sensor on cradle not required for C4 (only C2 pneumatic) | Spec says "fidelity" but no measurement | Cannot detect FM-2 aging drift |
| SH-4 | Unity audio latency on instructor PC matches render PC | Audio on instructor PC (AAR) vs render PC (live flash) timing assumed synced | Audio-visual desync (TESE rhythms risk) |

**Shadow owner assignment:**
- SH-1 → Phase 3 DfX (air-tightness between cabin and projector housing)
- SH-2 → Phase 3 Layout (cam lever position ergonomic check)
- SH-3 → **Consider adding low-cost accel sensor to C4 for condition monitoring** (CEO decision — ~$15 BOM)
- SH-4 → Phase 3 Integration (single-PC sync or hardware audio trigger)

---

## 4. Three-Scenario Evaluation

Per P&B 6.4 risk discipline — evaluate C4 under 3 futures.

### Scenario A — "Happy Path"
- Bench test 2026-05-07 shows solenoid fidelity ~50%, elastomer tail smooth
- Operators accept 20-40s swap, SC-2 SOFT threshold confirmed
- FM-6 encoder drift controlled by routine re-zero
- **Outcome:** C4 LITE produces at $50-55K, margin healthy, 80% training-transfer measured (within SOFT tolerance)
- **Probability:** 45%

### Scenario B — "Fidelity Shortfall"
- Bench test shows fidelity only 30-35% (below elastomer model expectation)
- Early customer feedback: "feels like a toy, not like 12.7mm"
- Three options surface:
  - (i) Upgrade to C3 inertial hammer mid-production (~$400 BOM add)
  - (ii) Accept downgrade to desk trainer segment (competes on price)
  - (iii) Premium "LITE+" offered with pneumatic C2 kit at $80-90K (CEO cost flex earlier decision)
- **Outcome:** Product line bifurcates into LITE (C4, $50-55K) + LITE+ (C2, $85K) at Phase 3 cost re-evaluation
- **Probability:** 35%

### Scenario C — "Encoder Drift Emergence"
- 6-12 months post-delivery, taper-pin wear causes FM-6 in 2-3 field units
- Customer complains about negative training transfer (shots land wrong despite visible aim)
- Recall risk / service visit cost / reputation damage
- **Outcome:** Emergency redesign to kinematic M1 mount (~$60 BOM delta, retrofit kit)
- **Probability:** 20%

**Expected risk-weighted cost impact:**
- Scenario A: $0
- Scenario B: ~$150K NRE for LITE+ path (if pursued)
- Scenario C: ~$80K retrofit campaign (20-30 units)
- **EMV risk overhead:** ~$68K over 5-yr portfolio horizon

---

## 5. SPOF Check (Single Point of Failure)

| SPOF | Subsystem | Mitigation Status |
|---|---|---|
| Solenoid driver PCB | SS1 | Hot-swap PCB, spare in ship kit |
| Render PC GPU | SS2 | RTX 4070 COTS, swap in <2h |
| Instructor PC | SS4/SS5 | Session-save checkpoint every 60s, swap |
| Encoder | SS1 | Dual-encoder (primary + quadrature backup) — **ADD to Phase 3 BOM** |
| Unity application | SS2/SS4/SS5 | Auto-restart watchdog, session recovery |
| 24V power supply | All | Redundant PSU + UPS inherited from portfolio |

**New SPOF mitigation for C4:** Dual-encoder redundancy on MWI mount. Cost ~$40 BOM add, addresses FM-6 + taper wear concern.

---

## 6. P&B 11-Guideline Re-check (Function Structure Minimum Crossings)

Per B0 flag, re-check Guideline 4 for LITE C4 wiring:

- 3× projector DVI/DP cables → PC (back of rack) ✅ direct routing, no crossings
- Encoder USB → Unity PC ✅ single cable, no crossings
- Solenoid driver 24V → MCU → solenoid ✅ short run, no crossings
- Instructor PC ↔ Render PC Ethernet ✅ direct
- Trigger button → MCU ✅ direct

**Verdict:** No wiring crossings violate Guideline 4 for C4 concept. The earlier concern was about MWI NFC reader (C2/C3 only), which does NOT apply to C4 (manual cam). **Guideline 4 PASS for C4.**

---

## 7. Risk Dashboard — LITE C4

| Dimension | Status | Notes |
|---|:-:|---|
| Cross-domain coupling | 🟡 | 4 MED risks all with mitigations |
| CFMA top RPN | 🔴 | FM-6 encoder drift cascade (180) — highest priority Phase 3 action |
| Declared assumptions | 🟡 | 7 total, 3 at L4-L5 needing empirical confirmation |
| Shadow assumptions | 🟡 | 4 hidden, owners assigned |
| Scenario EMV | 🟢 | $68K over 5yr — acceptable |
| SPOF | 🟢 | All addressed; dual-encoder NEW ADD |
| Guideline 4 crossings | 🟢 | PASS (no NFC complication) |

**Overall BD risk posture for C4:** 🟡 **AMBER — acceptable with mitigations**, top priority = FM-6 encoder drift + SH-3 accel sensor for fidelity monitoring.

---

## 8. BD Handoff to BE

**Confirm C4 shortlisted** — risk-acceptable with 4 required mitigations:
1. **Dual-encoder redundancy** (SPOF, FM-6) — $40 BOM add
2. **Hardened steel taper-pin** (60 HRC minimum) + wear groove indicator
3. **Cam-lever interlock switch** (FM-4) — $10 BOM add
4. **Optional accel sensor for fidelity monitoring** (SH-3) — $15 BOM add, CEO decision

**Pre-BE gating evidence required:**
- Physical gate 2026-05-07 SS1 PoC: measure solenoid pulse peak + elastomer tail shape (AS-1, AS-2)
- Operator acceptance of 20-40s swap time (AS-5) — deferred to first customer demo

**New LITE BOM delta from C4 selection:** +$65-80 (dual encoder + hardened taper + interlock + optional accel sensor)

---

## 9. Key Findings

1. **C4 risk posture AMBER** — acceptable with mitigations, no showstopper.
2. **Top risk: FM-6 encoder drift from taper-pin wear (RPN 180)** — directly threatens SC-2. Requires dual-encoder + routine re-zero + hardened taper.
3. **FM-2 elastomer aging (RPN 120)** — 2-yr service interval mandated, spare included.
4. **4 shadow assumptions** identified; SH-3 recommends adding $15 accel sensor for fidelity monitoring.
5. **Scenario B (35% probability)** may force LITE+ variant with pneumatic kit — CEO cost-flex decision already enables this path.
6. **New BOM delta +$65-80** for C4 risk mitigations; LITE cost envelope absorbs comfortably.
