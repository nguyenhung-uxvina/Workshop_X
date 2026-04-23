---
created: 2026-04-16
updated: 2026-04-16
type: phase2-select
variant: LITE-PA2
block: BE
pipeline: helix-concept-generate --icdm
selected-concept: C4 Cost-Optimized (R3 + M3) + 4 mitigations
ceo-decisions: SC-2 SOFT, accel sensor included, cost cap SOFT
---

# Block BE — Select & Handoff (LITE-PA2)

---

## 1. CEO Concept Selection (Core — Non-Delegable)

**Selected concept:** **C4 Cost-Optimized** (R3 Elastomer-damped solenoid + M3 Taper-pin cam lever)

**CEO decisions log:**
| # | Decision | Date | Rationale |
|---|---|---|---|
| CD-1 | SC-2 70% fidelity = SOFT target | 2026-04-16 | 50% fidelity acceptable for LITE tier; bench test will verify |
| CD-2 | C4 selected over C1/C2/C3 | 2026-04-16 | Best VDI 2225 + DQM composite; acceptable risk at AMBER |
| CD-3 | Accel sensor SH-3 included ($15) | 2026-04-16 | Fidelity condition monitoring enables early FM-2 detection |
| CD-4 | Pneumatic (R4) kept as LITE+ option | 2026-04-16 | If Scenario B occurs (bench fidelity <35%), C2 pneumatic path pre-approved at cost flex $80-90K |
| CD-5 | Cost cap $50-70K is SOFT target | 2026-04-16 | Upward flex possible; LITE remains reference at $50-55K target |

---

## 2. P02 QC Gate (5-Check Compliance)

| # | Check | Result | Evidence |
|---|---|:-:|---|
| P02-1 | Requirements traceability | ✅ PASS | LITE Reqs v1.0: 105 reqs (76D/29W), all 5 SCs traceable to C4 concept |
| P02-2 | Function structure coverage | ✅ PASS | 41 L2 SFs covered. 3 LITE-specific (LITE-01..03) traced to C4 hardware |
| P02-3 | Evaluation method applied | ✅ PASS | Pugh screening (Group A) + VDI 2225 (8-step) + ICDM DQM (Group A+B). Dual ranking: VDI 2225 = C4 #1, DQM = C4 #1 |
| P02-4 | Risk assessment documented | ✅ PASS | BD: 10 CFMA items, 7 assumptions, 4 shadows, 3 scenarios, SPOF check, EMV $68K |
| P02-5 | CEO judgment recorded | ✅ PASS | 5 CEO decisions logged with rationale |

**P02 Verdict: PASS (5/5)**

---

## 3. ICDM Step 5 — Evaluation Criteria Deliverable (LITE-Scoped)

### Group A Criteria (7, 79.4% weight) — used for Phase 3 design reviews

| ID | Criterion | Weight | Target Value (C4) | CSR Curve |
|---|---|:-:|---|---|
| A1 | Recoil fidelity peak | 22% | 40-55% of 12.7mm real (SOFT threshold 70%) | Linear above 30%, step bonus at 70% |
| A2 | Unit cost | 18% | $50-55K target, $70K cap (SOFT) | Linear 100%@$50K → 0%@$100K |
| A3 | Trigger→cue latency | 14% | <50ms | Step: <50ms=100%, >80ms=0% |
| A4 | Weapon swap time | 10% | 20-40s (taper-cam lever) | Linear 100%@<5s → 0%@60s |
| A5 | Noise envelope | 8% | <70 dB@1m (no compressor) | Step: <70dB=100%, >85dB=0% |
| A6 | Maintainability | 4% | 2-yr elastomer service, no field tools except Allen key | Qualitative 1-5 |
| A7 | Safety envelope | 3.4% | Current-limited solenoid, cam interlock, no pressure vessel | Binary pass/fail |

### Group B Extended Criteria (4, 18.8% weight) — used for Phase 3 detail reviews

| ID | Criterion | Weight | Target Value (C4) |
|---|---|:-:|---|
| B1 | Encoder accuracy (Az/El) | 6% | ±0.5° (dual-encoder redundancy) |
| B2 | Local content % | 5% | ≥60% (CNC cradle + assembly VN) |
| B3 | Mean Time Between Failure | 4.5% | >2000h (excluding elastomer service) |
| B4 | Packaging/transport | 3.3% | Single pelican case for SS1 weapon module |

### IRL (Innovation Readiness Level) — LITE-PA2 C4

| Dimension | Score (1-5) | Note |
|---|:-:|---|
| Technology maturity | 3.5 | Solenoid + elastomer proven independently; combo needs bench |
| Market understanding | 4.0 | C-UAV niche validated via FORGE job map (63 outcomes) |
| Manufacturing capability | 4.0 | CNC cradle in-house, solenoid COTS, assembly WX shop |
| Team competence | 3.5 | Mechanical + electronics in-house; Unity SW needs SW engineer |
| IP/regulatory | 3.5 | No InVeris patent conflict (ray-trace scoring FTO); no pressure vessel cert (C4 avoids pneumatic) |
| **IRL Average** | **3.7/5** | Good. Phase 3 embodiment readiness confirmed. |

---

## 4. C4 LITE Final Configuration — Phase 3 Handoff

### SS1 Weapon Station — C4 Configuration

| Component | Spec | Source | BOM est. |
|---|---|---|:-:|
| CNC aluminum cradle body | 6061-T6, 400×250×150mm | WX PX2 (in-house CNC) | $120-180 |
| Taper-pin mount (2×) | Hardened steel 60 HRC, ∅12mm | VN machining vendor | $30-50 |
| Cam-lever clamp | Over-center, interlock microswitch | Standard tooling + switch | $25-40 |
| Solenoid actuator | Push-pull 40-60N, 24VDC, Ledex STA-12 or equiv | Import | $40-60 |
| Elastomer bumper | Shore 60A silicone, 10mm thick, replaceable insert | VN rubber vendor | $5-10 |
| MOSFET driver board + snubber | Custom PCB, TVS protection, current limit | WX PX3 (in-house) | $20-35 |
| Encoder (primary) | Incremental 2048 PPR, sealed, Az | Import | $30-50 |
| Encoder (backup/redundancy) | Same spec, El | Import | $30-50 |
| Accel sensor (fidelity monitor) | ADXL345 breakout, SPI | Import | $10-15 |
| Trigger assembly | Microswitch + solenoid trigger interlock | WX assembly | $15-20 |
| Cam interlock switch | Microswitch, NC → NO when cam locked | Standard | $5-10 |
| Wiring harness | 24V power + encoder + trigger + accel sensor | WX PX4 (in-house) | $15-25 |
| **SS1 Total (C4 + all mitigations)** | | | **$345-545** |

**Delta vs C1 Baseline ($200-330):** +$145-215 (dual encoder, hardened taper, interlock, accel sensor)

### SS1-SS5 System Total — LITE C4

| Subsystem | HW Cost | Notes |
|---|:-:|---|
| SS1 Weapon Station (C4) | $345-545 | C4 + all 4 mitigations |
| SS2 Visual & Engine | $8,450-12,100 | Unchanged from portfolio |
| SS3 Motion Platform | $1,580-2,420 | Unchanged |
| SS4+SS5 Scenario + Integration | $1,200-1,700 | Unchanged |
| **HW Subtotal** | **$11,575-16,765** | |
| SW Development (~6 PM) | $6,000-10,000 | |
| **TOTAL R&D** | **$17,575-26,765** | Margin: 53-68% @$50-55K sell |

---

## 5. Phase 3 Embodiment Handoff Package

### Inputs for `/helix-embody-realize LITE-PA2`

| Deliverable | File | Status |
|---|---|:-:|
| B0 Preflight | `LITE-PA2/VN_CUAV_SIM_001_LITE_B0_Preflight_Report.md` | ✅ |
| BA Problem Frame | `LITE-PA2/VN_CUAV_SIM_001_LITE_BA_Problem_Frame.md` | ✅ |
| BB WP Search | `LITE-PA2/VN_CUAV_SIM_001_LITE_BB_WP_Search.md` | ✅ |
| BC Develop (VDI 2225 + DQM) | `LITE-PA2/VN_CUAV_SIM_001_LITE_BC_Develop.md` | ✅ |
| BD Risk (CFMA + assumptions) | `LITE-PA2/VN_CUAV_SIM_001_LITE_BD_Risk.md` | ✅ |
| BE Select (this file) | `LITE-PA2/VN_CUAV_SIM_001_LITE_BE_Select.md` | ✅ |
| LITE Concept Description v1.0 | `LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_Concept_Description_v1.0.md` | ✅ |
| LITE TNKCT v1.1 | `LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_TNKCT_v1.1.md` | ✅ |
| LITE Requirements v1.0 | `LITE-PA2/VN_CUAV_SIM_001_LITE_PA2_Requirements_v1.0.md` | ✅ |
| Portfolio Morpho SS1-SS5 | `_portfolio/VN_CUAV_SIM_001_Morpho_SS*.md` | ✅ |
| Portfolio Function Structure | `_portfolio/VN_CUAV_SIM_001_Function_Structure_6Flow_v1.0.md` | ✅ |
| System Architecture (ICD v1.5) | `System-Arch/` | ✅ |

### Phase 3 Priority Actions (from BD risk)

| # | Action | Owner | Deadline | Blocks |
|---|---|---|---|---|
| 1 | **Bench-test solenoid peak + elastomer tail** | CEO + PX3 | 2026-05-07 | AS-1, AS-2 (gating) |
| 2 | FEA cradle fatigue analysis | AI (Offload) | Phase 3 B-dfx | FM-10 |
| 3 | Cam-lever ergonomic check (SH-2) | CEO (layout) | Phase 3 B-layout | FM-4 |
| 4 | Unity trigger latency oscilloscope test | PX3 | Phase 3 B-integrate | AS-4 |
| 5 | Dual-encoder wiring + re-zero protocol | PX3 + SW | Phase 3 B-integrate | FM-6 |
| 6 | Elastomer outgassing test (SH-1) | PX3 | Phase 3 B-dfx | SH-1 |
| 7 | Operator swap-time acceptance | CEO | First customer demo | AS-5 |

### Requirements Delta Log — C4 Selection

New requirements generated from BD risk analysis, to be added to LITE Requirements v2.0:

| ID | New Requirement | D/W | Source |
|---|---|:-:|---|
| LITE-04 | Dual-encoder redundancy: backup El encoder | D | FM-6 + SPOF |
| LITE-05 | Hardened taper-pin (60 HRC) + wear indicator groove | D | FM-3, FM-6 |
| LITE-06 | Cam-lever interlock switch disables trigger if cam not locked | D | FM-4 |
| LITE-07 | Accel sensor on cradle for fidelity condition monitoring | D | SH-3, FM-2 |
| LITE-08 | Solenoid current-limit <2A + TVS protection | D | FM-5 |
| LITE-09 | Elastomer service interval ≤2 yr, spare in ship kit | W | FM-2 |
| LITE-10 | SW re-zero routine accessible by operator (menu/button) | D | FM-6 |

---

## 6. Escalation & Contingency Path

**If bench test 2026-05-07 shows solenoid fidelity <35%:**
- CEO has pre-approved (CD-4) LITE+ variant with pneumatic C2 kit
- Re-enter BC at C2 Fidelity concept, update BOM + TNKCT
- Price LITE+ at $80-90K, offer LITE (C4) as "training-class" and LITE+ as "tactical-class"
- Phase 3 embodiment continues on C4 regardless (parallel paths)

**If taper-pin wear accelerates beyond spec (AS-3 fails):**
- Swap WP-M3 taper → WP-M1 kinematic mount ($60-80 BOM delta)
- Retrofit kit for deployed LITE units

---

## 7. Pipeline Summary — LITE-PA2 ICDM Complete

| Block | Status | Key Output |
|---|:-:|---|
| B0 Preflight | ✅ | Inputs stable, Adaptive 2.0/5, scope frozen |
| BA Frame | ✅ | SDSF = SF-SS1.3 Recoil, 3 TRIZ contradictions, pneumatic re-admitted |
| BB Search | ✅ | 4 recoil WPs + 3 MWI WPs, SS2-SS5 inherited, 4 concept variants |
| BC Develop | ✅ | VDI 2225: C4 #1, DQM: C4 #1, threshold CSR: C2 only >70% |
| BD Risk | ✅ | AMBER, FM-6 top (RPN 180), 4 mitigations, EMV $68K |
| **BE Select** | ✅ | **C4 Cost-Opt selected. P02 5/5. IRL 3.7. +7 new reqs. Handoff package ready.** |

**Next steps:**
- `/helix-embody-realize VN-CUAV-SIM-001 LITE-PA2` — Phase 3 embodiment
- Physical gate 2026-05-07 — SS1 PoC bench test (gating evidence for AS-1, AS-2)
- LITE Requirements v2.0 — incorporate LITE-04..10 from BD risk
