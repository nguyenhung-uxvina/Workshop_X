# VN-12.7MM-SIM-002: REQUIREMENTS LIST
## Phase 1: Task Clarification

**Document**: VN-12.7MM-SIM-002-REQ | **Version**: 1.3 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 1 - Task Clarification (Pahl & Beitz)

---

# 1. REQUIREMENTS LIST METHODOLOGY

## 1.1 Classification System

| Symbol | Meaning | Description |
|--------|---------|-------------|
| **D** | Demand (MUST) | Mandatory - system fails without it |
| **W** | Wish (WANT) | Desirable - enhances value if present |

## 1.2 Categories (Pahl & Beitz)

Following systematic categorization per Pahl & Beitz methodology:

1. Geometry
2. Kinematics
3. Forces
4. Energy
5. Material
6. Signals/Information
7. Safety
8. Ergonomics
9. Production
10. Quality Control
11. Assembly
12. Transport
13. Operation
14. Maintenance
15. Costs
16. Schedule

---

# 2. REQUIREMENTS LIST

## 2.1 Geometry Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| G-001 | D | Overall footprint (trainer station) | ≤3.0 × 3.0m | Measure |
| G-002 | D | Height from floor to eye position | 1,600-1,800mm | Measure |
| G-003 | D | Mount pedestal diameter | Match real (Ø400-500mm) | Compare |
| G-004 | D | Gun replica length | ±10% of real (1,600mm total) | Measure |
| G-005 | D | Grip spacing (spade grips) | Match real (380-420mm) | Measure |
| G-006 | W | Shield replica included | Match visual appearance | Visual |
| G-007 | D | Display viewing distance | 1,500-2,500mm | Measure |
| G-008 | W | Adjustable operator platform height | ±100mm | Measure |
| G-009 | D | Clearance for operator movement | 360° traverse arc clear | Inspection |
| G-010 | D | Ceiling height requirement | ≥2,800mm | Measure |

## 2.2 Kinematics Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| K-001 | D | Traverse range | 360° continuous | Measure |
| K-002 | D | Elevation range | -10° to +85° | Measure |
| K-003 | D | Maximum traverse rate | ≥60°/s | Test |
| K-004 | D | Maximum elevation rate | ≥40°/s | Test |
| K-005 | D | Control smoothness | Friction torque variation ≤10% across full traverse | Torque test |
| K-006 | W | Variable resistance (friction) | Adjustable 0-100% | Test |
| K-007 | D | Position accuracy (sensing) | ≤0.1° resolution | Calibration |
| K-008 | D | Traverse stop positions | Settable soft stops | Test |
| K-009 | W | Return-to-center capability | For training mode | Test |
| K-010 | D | Manual operation feel | Match real weapon ±20% | User test |

## 2.3 Forces Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| F-001 | D | Traverse operating torque | 5-15 Nm (adjustable) | Torque test |
| F-002 | D | Elevation operating force | 10-30 N at grip | Force test |
| F-003 | D | Trigger pull force | 30-50 N (match real) | Force test |
| F-004 | D | Structure load capacity | Support 150 kg operator + 80 kg weapon | Calculation |
| F-005 | W | Recoil simulation | Vibration feedback | User test |
| F-006 | D | Mount stability | Angular backlash ≤0.05° in both axes | Measurement |
| F-007 | D | Grip load capacity | 50 kg per grip | Test |
| F-008 | W | Anti-fatigue features | Arm rest option | Design review |

## 2.4 Energy Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| E-001 | D | Input power | 220VAC ±10%, 50Hz | Measure |
| E-002 | D | Maximum power consumption | ≤2,000W total | Measure |
| E-003 | D | Standby power | ≤100W | Measure |
| E-004 | W | UPS backup | 10 min graceful shutdown | Test |
| E-005 | D | No compressed air required | Simplify installation | Design |
| E-006 | D | No hydraulics required | Simplify installation | Design |
| E-007 | W | Low noise operation | ≤50 dB(A) at 1m | Measure |
| E-008 | D | Power budget per variant | Each variant (I-01, CTR, TAB, TAC) shall have documented power budget (peak, average, standby) | Design review |
| E-009 | D | CTR power source specification | Containerized variant: specify power source (shore power, generator, or hybrid) with capacity margin ≥20% | Design review |

## 2.5 Material Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| M-001 | D | Structure material | Steel or aluminum | Inspection |
| M-002 | D | Corrosion resistance | Suitable for indoor use | Inspection |
| M-003 | D | Grip material | Match real (metal/rubber) | Feel test |
| M-004 | W | Gun replica material | Steel preferred for weight | Weigh |
| M-005 | D | Display material | Tempered glass or equiv. | Inspection |
| M-006 | D | Flammability | Non-flammable materials | Test |
| M-007 | D | No hazardous materials | RoHS compliant | Certificate |
| M-008 | W | Local material availability | 70%+ from Vietnam | BOM review |

## 2.6 Signals/Information Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| S-001 | D | Visual display resolution | ≥1920×1080 per channel | Spec |
| S-002 | D | Field of view | ≥90° horizontal | Measure |
| S-003 | D | Visual update rate | ≥60 fps | Measure |
| S-004 | D | System latency (input to display) | ≤50ms | Test |
| S-005 | D | Position sensing accuracy | ≤0.1° | Calibration |
| S-006 | D | Trigger sensing | ON/OFF digital | Test |
| S-007 | W | Trigger pressure sensing | Analog 0-100% | Test |
| S-008 | D | Audio feedback | Firing sound ≥90 dB(A) at operator, ≤120 dB(A); impact sounds directional | Test |
| S-009 | W | Spatial audio (5.1 surround) | Directional effects | Test |
| S-010 | D | Tracer visualization | Visible trajectory | Visual |
| S-011 | D | Impact visualization | Splash, hit effects | Visual |
| S-012 | D | HUD display (ammo count, etc.) | On-screen overlay | Visual |
| S-013 | D | Instructor interface | Separate monitor/control | Inspection |
| S-014 | D | Performance data logging | All events timestamped | Test |
| S-015 | W | Video recording of session | For AAR playback | Test |
| S-016 | D | Individual performance history | Store per-gunner performance data for ≥12 months | Test |
| S-017 | D | Skill trend reporting | Generate skill progression reports per gunner (improvement/degradation over time) | Test |
| S-018 | D | Performance data specification | Log per engagement: hit coordinates, lead error (°), reaction time (ms), burst pattern (spread), tracking smoothness, rounds expended | Test |
| S-019 | D | Data classification compliance | Training records with gunner PII handled per MoD data classification requirements | Audit |
| S-020 | D | ACH AI confidence calibration | AI coaching variant (ACH): define confidence calibration methodology for readiness predictions. Minimum training data volume threshold defined before ML activation. Rules-only fallback when confidence < threshold | Design review |
| S-021 | D | ACH rules-to-ML transition | ACH variant: define measurable criteria for transitioning from rule-based coaching to ML-based coaching. Transition threshold documented and testable | Test |

## 2.7 Safety Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| SF-001 | D | Emergency stop button | Within operator reach | Inspection |
| SF-002 | D | No pinch points | Guards on all moving parts | Inspection |
| SF-003 | D | Electrical safety | IEC 60950 compliance | Certificate |
| SF-004 | D | Software safety stop | Prevent over-travel | Test |
| SF-005 | D | Warning labels | Per ISO 7010 | Inspection |
| SF-006 | D | Grounding | Proper earth connection | Test |
| SF-007 | W | Fire extinguisher mount | Within 2m | Inspection |
| SF-008 | D | No live ammunition capable | Physically impossible | Design |
| SF-009 | D | Tip-over prevention | Base stability >1.5× | Calculation |
| SF-010 | D | Eye-safe display | No harmful emissions | Certificate |
| SF-011 | D | TCVN compliance | Applicable TCVN standards for training equipment identified and mapped | Audit |
| SF-012 | D | MIL-STD applicability | Map applicable MIL-STD (810G environmental, 461G EMI/EMC, 1472G human factors) to variant-specific requirements | Document review |

## 2.8 Ergonomics Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| ER-001 | D | Operator height range | 1,550-1,850mm (5th-95th %ile VN) | User test |
| ER-002 | D | Standing operation position | Feet flat, arms at shoulder | User test |
| ER-003 | D | Sight line alignment | Natural head position | User test |
| ER-004 | D | Control reach | Within arm's length | User test |
| ER-005 | W | Adjustable components | Height, reach | Inspection |
| ER-006 | D | Operation duration capability | ≥2 hours continuous | User test |
| ER-007 | D | Ambient lighting compatibility | Normal room lighting | Test |
| ER-008 | W | Climate comfort | 18-32°C operation | Test |
| ER-009 | D | Control labeling | Vietnamese language | Inspection |
| ER-010 | W | Accessibility features | Left/right hand config | Design |

## 2.9 Production Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| PR-001 | D | Local content | ≥70% by value (I-01/TAC/TAB/ACH); ≥50% for CTR (SC-006 resolution) | BOM review |
| PR-002 | D | Standard components | 80%+ off-the-shelf | BOM review |
| PR-003 | D | Manufacturing methods | CNC, welding, standard | Design review |
| PR-004 | W | Production rate capability | ≥2 units/month | Plan review |
| PR-005 | D | No specialized tooling | Use standard equipment | Design review |
| PR-006 | D | Assembly skill level | Technician (not engineer) | Procedure review |
| PR-007 | W | Kit assembly option | For distributed production | Design review |

## 2.10 Quality Control Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| QC-001 | D | Incoming inspection | All critical components | Procedure |
| QC-002 | D | Functional test | 100% before delivery | Procedure |
| QC-003 | D | Calibration procedure | Position, force sensors | Procedure |
| QC-004 | D | Acceptance test protocol | Standardized ATP | Document |
| QC-005 | W | Statistical process control | For serial production | Plan |
| QC-006 | D | Traceability | Serial numbers, lot tracking | System |

## 2.11 Assembly Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| AS-001 | D | Assembly time | ≤8 hours (2 technicians) | Time study |
| AS-002 | D | Standard tools only | No special tools | Procedure |
| AS-003 | D | Modular sub-assemblies | ≤5 major modules | Design review |
| AS-004 | D | Alignment features | Self-aligning where possible | Design review |
| AS-005 | W | Reversible assembly | For maintenance | Procedure |
| AS-006 | D | Fastener standardization | ≤5 fastener types | BOM |

## 2.12 Transport Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| TR-001 | D | Transportable by truck | Fit standard cargo truck | Dimension check |
| TR-002 | D | Maximum shipping weight | ≤500 kg total | Weigh |
| TR-003 | W | Crated dimensions | Fit through standard door | Measure |
| TR-004 | D | Lifting points | 4-point lift capability | Design review |
| TR-005 | D | Vibration resistance (transport) | No damage in transit | Test |
| TR-006 | W | Relocatable after install | 2-person move capable | User test |

## 2.13 Operation Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| OP-001 | D | Startup time | ≤5 minutes cold start | Test |
| OP-002 | D | Operating hours | ≥12 hours/day continuous | Test |
| OP-003 | D | Scenario library | ≥20 pre-built scenarios | Count |
| OP-004 | D | Difficulty levels | 5 levels (beginner to expert) | Test |
| OP-005 | D | Target types | Surface, air, shore | Test |
| OP-006 | D | Environmental conditions | Day, night, weather | Test |
| OP-007 | D | Performance scoring | Automated, quantified | Test |
| OP-008 | D | After-action review | Replay capability | Test |
| OP-009 | W | Scenario editor | Create custom scenarios | Test |
| OP-010 | D | User interface language | Vietnamese primary | Inspection |
| OP-011 | W | English language option | For international | Test |
| OP-012 | D | Instructor override | Pause, reset, inject | Test |
| OP-013 | D | Ballistic model accuracy | ≤5% trajectory error | Calculation |
| OP-014 | D | Target behavior realism | AI-driven movement | Test |
| OP-015 | W | Multiplayer capability | 2 trainers networked | Test |
| OP-016 | D | Shore-based deployment | Operable in training center without ship availability, ammo allocation, or firing zone clearance | Inspection |
| OP-017 | D | Deployment scope | Shore-based training center only (indoor, 18-32°C, grid power). Shipboard deployment requires separate environmental qualification per MIL-STD-810 | Design review |
| OP-019 | D | CTR environmental qualification | CTR only: -10°C to +55°C operational, 0-95% RH, salt spray per MIL-STD-810H Method 509.7, transport vibration per Method 514.8 | Test |
| OP-020 | D | TAC EMI/EMC compliance | Tactical variant (3-station wired): EMI/EMC between stations shall not degrade performance. Test per MIL-STD-461G CE102/RE102 | Test |
| OP-018 | D | On-demand training access | Simulator available for use within 1 working day of request (no multi-week scheduling) | Procedure |

## 2.14 Maintenance Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| MT-001 | D | MTBF | ≥500 hours | Field data |
| MT-002 | D | MTTR | ≤4 hours | Test |
| MT-003 | D | Preventive maintenance interval | ≥200 hours | Procedure |
| MT-004 | D | On-site maintainability | No factory return needed | Design review |
| MT-005 | D | Spare parts availability | Stocked locally | Logistics |
| MT-006 | D | Diagnostic capability | Built-in self-test | Test |
| MT-007 | W | Remote diagnostics | Network capability | Test |
| MT-008 | D | Maintenance skill level | Technician (trained) | Procedure |
| MT-009 | D | Maintenance documentation | Vietnamese language | Document |
| MT-010 | W | Video maintenance guides | For complex tasks | Document |

## 2.15 Cost Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| CO-001 | D | Unit production cost | ≤$45,000 | BOM + labor |
| CO-002 | W | Target unit cost (volume) | ≤$35,000 at 20+ units | Estimate |
| CO-003 | D | Annual maintenance cost | ≤$3,000/year | Estimate |
| CO-004 | D | Training cost per hour | ≤$20/trainee-hour | Calculate |
| CO-005 | D | Consumables | ≤$500/year | Estimate |
| CO-006 | W | Upgrade cost (future) | ≤$5,000 per upgrade | Estimate |
| CO-007 | D | Payback period | ≤2 years | Calculate |

## 2.16 Schedule Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| SCH-001 | D | Prototype delivery | ≤12 months from start | Schedule |
| SCH-002 | D | Production ready | ≤18 months from start | Schedule |
| SCH-003 | W | First unit delivery | 6 months after prototype | Schedule |
| SCH-004 | D | Design review gates | PDR, CDR, EDR | Schedule |

---

# 3. TRAINING EFFECTIVENESS REQUIREMENTS

## 3.1 Skill Transfer Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| TE-001 | D | Control feel similarity | ≥80% user rating | Survey |
| TE-002 | D | Target acquisition skill transfer | ≥15% hit rate improvement after 20h sim training vs control group | Live-fire test |
| TE-003 | D | Lead calculation skill transfer | ≥20% reduction in lead error (deg) after 20h sim training | Live-fire test |
| TE-004 | D | Burst control skill transfer | ≥15% reduction in dispersion area after 20h sim training | Live-fire test |
| TE-005 | D | Stress inoculation effectiveness | Stress survey score improvement ≥1 point (5-point scale) | Survey |
| TE-006 | W | Qualification rate improvement | From 65% to 90%+ | Statistics |
| TE-007 | D | Training time reduction | 30%+ faster qualification | Statistics |
| TE-008 | D | Scoring false-hit rate | Max false-positive rate (sim scores hit when live-fire would miss) ≤5% | Statistical test |
| TE-009 | D | Scoring false-miss rate | Max false-negative rate (sim scores miss when live-fire would hit) ≤10% | Statistical test |
| TE-010 | D | Sim-to-live correlation | Sim qualification scores predict live-fire results: r² ≥ 0.75 | Statistical test |
| TE-011 | W | Sim-to-live correlation (stretch) | r² ≥ 0.85 correlation between sim and live-fire scores | Statistical test |

## 3.2 Scenario Requirements

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| SC-001 | D | Surface target: Patrol boat | Speed 0-40 knots | Test |
| SC-002 | D | Surface target: Jet ski | Speed 0-60 knots | Test |
| SC-003 | D | Surface target: Floating mine | Stationary/drifting | Test |
| SC-004 | D | Air target: Helicopter | Speed 0-150 knots | Test |
| SC-005 | D | Air target: UAV | Speed 0-100 knots | Test |
| SC-006 | W | Air target: Fixed-wing | Speed 100-300 knots | Test |
| SC-007 | D | Shore target: Bunker | Stationary | Test |
| SC-008 | D | Shore target: Vehicle | Speed 0-30 kph | Test |
| SC-009 | D | Multiple simultaneous targets | ≥5 targets | Test |
| SC-010 | D | Day conditions | Sunny, overcast, haze | Test |
| SC-011 | D | Night conditions | Moonlit, dark, flare | Test |
| SC-012 | W | Weather effects | Rain, fog, spray | Test |
| SC-013 | D | Sea state simulation | Calm to moderate (SS 0-4) | Test |
| SC-014 | W | Ship motion integration | Platform movement | Test |

---

# 4. BALLISTIC MODEL REQUIREMENTS

## 4.1 Ammunition Modeling

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| BM-001 | D | Ammunition types | API-T, Ball, Incendiary | Test |
| BM-002 | D | Muzzle velocity | 850 m/s (API-T) | Model |
| BM-003 | D | Projectile mass | 48.3 g (B-32 API) | Model |
| BM-004 | D | Drag coefficient modeling | Siacci method or 4th-order polynomial fit, error ≤2% vs measured data | Model |
| BM-005 | D | Trajectory calculation | 6-DOF (gravity, drag, wind) | Test |
| BM-006 | D | Effective range modeling | 2,000m accurate | Test |
| BM-007 | W | Extended range modeling | To 3,500m | Test |
| BM-008 | D | Dispersion modeling | ≤3.0 MOA at 500m (match DShKM spec ±20%) | Test |
| BM-009 | D | Tracer burnout | Burnout at 1,500m ±100m (match 12.7mm API-T spec) | Visual |
| BM-010 | D | Time of flight accuracy | ≤5% error | Calculate |

## 4.2 Fire Control Modeling

| ID | D/W | Requirement | Value/Range | Verification |
|----|-----|-------------|-------------|--------------|
| FC-001 | D | Lead angle calculation | Lead angle error ≤0.5° for targets at 200-1500m, 0-40kn | Test |
| FC-002 | D | Superelevation modeling | Superelevation error ≤0.2° at all ranges 200-2000m | Test |
| FC-003 | D | Wind correction | Wind 0-30 m/s in 1 m/s increments, 360° direction | Test |
| FC-004 | D | Rate of fire | 600 rpm cyclic | Test |
| FC-005 | D | Burst length | 3-50 round bursts | Test |
| FC-006 | D | Reload simulation | 8-12 seconds reload time (match trained crew) | Test |
| FC-007 | W | Malfunction simulation | Jam, feed failure | Test |
| FC-008 | D | Ammunition count | Track rounds expended | Test |
| FC-009 | D | Overheat modeling | Barrel temp rise ~3°C/round, warning at 300 rounds, mandatory cool at 500 | Test |

---

# 5. REQUIREMENTS SUMMARY

## 5.1 Statistics

| Category | MUST (D) | WISH (W) | Total |
|----------|----------|----------|-------|
| Geometry | 9 | 2 | 11 |
| Kinematics | 8 | 2 | 10 |
| Forces | 6 | 2 | 8 |
| Energy | 7 | 2 | 9 |
| Material | 7 | 2 | 9 |
| Signals | 19 | 2 | 21 |
| Safety | 11 | 1 | 12 |
| Ergonomics | 7 | 3 | 10 |
| Production | 5 | 2 | 7 |
| Quality | 5 | 1 | 6 |
| Assembly | 5 | 1 | 6 |
| Transport | 5 | 1 | 6 |
| Operation | 17 | 3 | 20 |
| Maintenance | 8 | 2 | 10 |
| Cost | 5 | 2 | 7 |
| Schedule | 3 | 1 | 4 |
| Training Effectiveness | 9 | 2 | 11 |
| Scenario | 11 | 3 | 14 |
| Ballistics | 16 | 3 | 19 |
| **TOTAL** | **164** | **37** | **201** |

## 5.2 Critical Requirements Summary

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    CRITICAL REQUIREMENTS (Top Priority)                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  TRAINING EFFECTIVENESS (Must achieve to justify investment):                      │
│  TE-001: Control feel similarity ≥80%                                              │
│  TE-002: Target acquisition skill transfer - measurable                           │
│  TE-006: Qualification rate improvement to 90%+                                   │
│                                                                                     │
│  REALISM (Must achieve for effective training):                                    │
│  K-001/K-002: Full traverse/elevation range                                       │
│  K-010: Manual operation feel match ±20%                                          │
│  S-004: System latency ≤50ms                                                      │
│  BM-005: 6-DOF trajectory calculation                                             │
│                                                                                     │
│  COST (Must achieve for program viability):                                        │
│  CO-001: Unit cost ≤$45,000                                                       │
│  CO-007: Payback ≤2 years                                                         │
│                                                                                     │
│  RELIABILITY (Must achieve for operational use):                                   │
│  MT-001: MTBF ≥500 hours                                                          │
│  MT-002: MTTR ≤4 hours                                                            │
│                                                                                     │
│  LOCAL CONTENT (Must achieve for program approval):                                │
│  PR-001: Local content ≥70%                                                       │
│                                                                                     │
│  SCORING VALIDITY (ODI gap — added v1.1):                                         │
│  TE-008: Scoring false-hit rate ≤5% (critical error direction)                    │
│  TE-010: Sim-to-live correlation r² ≥ 0.75                                        │
│                                                                                     │
│  TRAINING ACCESSIBILITY (ODI gap — added v1.1):                                   │
│  OP-016: Shore-based deployment (no ship/ammo/weather dependency)                 │
│  S-016: Individual performance history ≥12 months                                 │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 6. REQUIREMENTS TRACEABILITY MATRIX (Preview)

| Requirement | Verification Method | Test Phase | Acceptance Criteria |
|-------------|--------------------| -----------|---------------------|
| K-001 Traverse 360° | Measurement | Integration | ≥360° continuous |
| K-002 Elevation -10° to +85° | Measurement | Integration | Full range achieved |
| S-004 Latency ≤50ms | Instrumented test | System test | <50ms 95th percentile |
| TE-001 Feel similarity | User survey | Acceptance | ≥80% positive rating |
| CO-001 Unit cost | BOM audit | Production | ≤$45,000 |

*Full traceability matrix to be developed in Detail Design phase*

---

# 7. DOCUMENT CONTROL

## 7.1 Change History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial release |
| 1.1 | 2026-02-20 | KN (ODI-informed) | +12 requirements from ODI gap analysis: O19 shore-based accessibility (OP-016/017/018), O18 data retention (S-016/017/018/019), FLAG-08 dual-error scoring (TE-008/009/010/011). QC Gate v1.2 reviewed. Total: 181→193. |
| 1.2 | 2026-03-05 | KN (QC Gate Phase 0) | +8 requirements from Defense AI QC Gate: SF-011/012 (TCVN/MIL-STD mapping), E-008/009 (power budget per variant, CTR power source), OP-019/020 (CTR environmental qual, TAC EMI/EMC), S-020/021 (ACH AI confidence calibration, rules-to-ML transition). Total: 193→201. |
| 1.3 | 2026-03-05 | KN (Phase 1 Gate Audit) | Resolved 13 HIGH quantification gaps (TE-002/003/004/005, BM-008/009, FC-001/002/003/006/009, K-005, F-006) + 4 MEDIUM (BM-004, S-008, OP-019). Fixed SC-001 ID collision (Schedule SC→SCH). Relaxed PR-001 local content for CTR to ≥50% per SC-006 resolution. Total: 201 (unchanged). |

## 7.2 Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Engineering Lead | | | |
| Customer Representative | | | |
| Quality Assurance | | | |

---

**NEXT DOCUMENT**: VN-12.7MM-SIM-003 - Function Structure (Phase 2 Conceptual Design)

---

*VN-12.7MM-SIM-002 Requirements List v1.0*
*Phase 1: Task Clarification Complete*
