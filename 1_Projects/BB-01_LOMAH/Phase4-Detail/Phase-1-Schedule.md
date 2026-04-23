# V-SMASH Phase 1 Schedule

> **Project**: V-SMASH Fire Control System
> **Issue ID**: G1-003
> **Status**: ✅ COMPLETE
> **Phase**: 1 (Foundation)
> **Duration**: 6 months (Feb - Jul 2026)
> **Date**: 2026-01-28

---

## 1. Phase 1 Overview

```
PHASE 1: FOUNDATION (6 months)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Feb          Mar          Apr          May          Jun          Jul
 │            │            │            │            │            │
 ▼            ▼            ▼            ▼            ▼            ▼
┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
│Setup │──▶│Detect│──▶│Track │──▶│Build │──▶│Integ │──▶│Valid │
│ Dev  │   │ Demo │   │ Demo │   │Proto │   │ Test │   │ Test │
└──────┘   └──────┘   └──────┘   └──────┘   └──────┘   └──────┘
    │          │          │          │          │          │
   M1         M2         M3         M4         M5         M6
  Gate 1    Detect     Track      Gate 2    Proto     Gate 3
  Close     Working   Working    (DfX)     Done       Prep

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 2. Milestones

| ID | Milestone | Target Date | Exit Criteria | Status |
|----|-----------|-------------|---------------|--------|
| M1 | Gate 1 Closure | 2026-02-09 | All G1 conditions met | 🟡 |
| M2 | Detection Demo | 2026-03-01 | HOG+SVM detecting targets on Jetson | 🟡 |
| M3 | Tracking Demo | 2026-03-31 | Kalman filter tracking targets | 🟡 |
| M4 | Gate 2 (DfX) | 2026-04-15 | DfX review passed | 🟡 |
| M5 | Prototype Complete | 2026-05-31 | First unit assembled, powered | 🟡 |
| M6 | Gate 3 Prep | 2026-07-15 | Validation complete, ready for pre-prod | 🟡 |

---

## 3. Detailed Schedule

### Month 1: February 2026 - Setup & Foundation

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W1** | Project kickoff | Kickoff minutes, team assigned | PM | - |
| W1 | Procure Jetson Xavier NX (3) | Dev kits ordered | Procurement | Budget |
| W1 | Setup development environment | JetPack 5.x installed | AI Lead | Hardware |
| **W2** | Camera integration start | Camera streaming to Jetson | HW Lead | Dev kit |
| W2 | HOG+SVM research & setup | OpenCV HOG working | AI Lead | Dev env |
| W2 | Gate 1 closure docs finalized | Risk, Resource, Schedule approved | PM | - |
| **W3** | HOG feature extraction working | Detect shapes on test images | AI Lead | W2 |
| W3 | Mechanical design kickoff | Initial housing CAD | Mech Lead | - |
| W3 | Power system design start | Power architecture defined | EE Lead | - |
| **W4** | HOG+SVM baseline on laptop | Detection demo (laptop) | AI Lead | W3 |
| W4 | Camera-Jetson streaming stable | 30 FPS achieved | HW Lead | W2 |
| W4 | **M1: Gate 1 Closure** | All conditions closed | PM | All |

**Month 1 Deliverables**:
- ✅ Dev environment ready
- ✅ Camera streaming
- ✅ HOG+SVM prototype (laptop)
- ✅ Gate 1 closed

---

### Month 2: March 2026 - Detection Development

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W5** | Port HOG+SVM to Jetson | Detection on Jetson | AI Lead | M1 |
| W5 | Kalman filter research | Algorithm selected | AI Lead | - |
| W5 | Carrier board schematic start | Schematic v0.1 | EE Lead | - |
| **W6** | Optimize HOG on Jetson | <50ms per frame | AI Lead | W5 |
| W6 | IMU integration | Orientation data to Jetson | HW Lead | Dev kit |
| W6 | Housing rough design | Concept CAD | Mech Lead | - |
| **W7** | Kalman filter implementation | Tracking on simulated data | AI Lead | W5 |
| W7 | Ballistic model start | Point-mass model coded | SW Eng | - |
| W7 | PCB layout start | Layout v0.1 | EE Lead | W5 |
| **W8** | **M2: Detection Demo** | Detect + Display on Jetson | AI Lead | W6 |
| W8 | Kalman + detection integration | Track synthetic targets | AI Lead | W7 |
| W8 | Gate 2 prep kickoff | DfX checklist started | QC | - |

**Month 2 Deliverables**:
- ✅ Detection on Jetson (<50ms)
- ✅ Kalman filter prototype
- ✅ Ballistic model v0.1
- ✅ PCB layout started

---

### Month 3: April 2026 - Tracking & Ballistics

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W9** | Kalman filter tuning | Track real camera feed | AI Lead | M2 |
| W9 | Ballistic model complete | Trajectory calculation | SW Eng | W7 |
| W9 | Carrier board review | Schematic reviewed | EE Lead | W7 |
| **W10** | Fire control logic start | Gate timing coded | SW Eng | W9 |
| W10 | Solenoid driver design | Driver circuit tested | EE Lead | - |
| W10 | Housing detail design | Housing CAD complete | Mech Lead | W6 |
| **W11** | Integration demo #1 | Full pipeline on Jetson | Team | W10 |
| W11 | DfM analysis | Manufacturing review | QC | W10 |
| W11 | Optic housing design | Lens mount CAD | Mech Lead | W10 |
| **W12** | **M3: Tracking Demo** | Track moving target smoothly | AI Lead | W11 |
| W12 | DfA, DfT, DfR analysis | DfX complete | QC | W11 |
| W12 | **M4: Gate 2 (DfX)** | DfX Review passed | Team | All |

**Month 3 Deliverables**:
- ✅ Tracking on real feed
- ✅ Fire control logic v1
- ✅ DfX review complete
- ✅ Gate 2 passed

---

### Month 4: May 2026 - Prototype Build

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W13** | PCB fabrication order | Gerbers sent | EE Lead | M4 |
| W13 | Housing fabrication | Parts ordered | Mech Lead | M4 |
| W13 | Actuator final selection | Solenoid/pneumatic decided | Mech Lead | Testing |
| **W14** | Software integration | All modules linked | SW Eng | W12 |
| W14 | Cable harness design | Harness drawings | EE Lead | W13 |
| W14 | Assembly fixture design | Fixture CAD | Mech Lead | W13 |
| **W15** | PCB assembly (3 units) | Boards stuffed | EE Lead | W13 |
| W15 | Housing machining | Parts received | Mech Lead | W13 |
| W15 | Test procedure draft | Test plan v1 | QC | W12 |
| **W16** | Unit 1 assembly | First prototype assembled | Team | W15 |
| W16 | Power-on test | Basic function verified | EE Lead | W16 |
| W16 | Software load | Firmware flashed | SW Eng | W16 |

**Month 4 Deliverables**:
- ✅ 3× PCBs fabricated
- ✅ Housing parts ready
- ✅ Unit 1 assembled
- ✅ Power-on verified

---

### Month 5: June 2026 - Integration Testing

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W17** | Unit 1 functional test | All functions working | Test Eng | W16 |
| W17 | Unit 2 assembly | Second prototype | Team | W15 |
| W17 | Debug & fixes | Issues resolved | Team | W17 |
| **W18** | **M5: Prototype Complete** | 2 units ready for testing | Team | W17 |
| W18 | Indoor tracking test | Detection accuracy measured | AI Lead | M5 |
| W18 | Timing validation | <100ms end-to-end verified | SW Eng | M5 |
| **W19** | Environmental test prep | Chamber reserved | QC | - |
| W19 | Temperature testing | -10°C to +55°C | Test Eng | W18 |
| W19 | Data collection for YOLO | Image dataset started | AI Lead | W18 |
| **W20** | Unit 3 assembly | Third prototype | Team | W15 |
| W20 | Power consumption test | <10W verified | EE Lead | W18 |
| W20 | Reliability test start | HALT/HASS planning | QC | W18 |

**Month 5 Deliverables**:
- ✅ 2 prototypes functional
- ✅ <100ms timing verified
- ✅ Temperature tested
- ✅ Dataset collection started

---

### Month 6: July 2026 - Validation & Gate 3 Prep

| Week | Task | Deliverable | Owner | Deps |
|------|------|-------------|-------|------|
| **W21** | Outdoor field test | Detection in real environment | AI Lead | M5 |
| W21 | MTB-20 interface test | Communication verified | HW Lead | Spec |
| W21 | Bug fixes & refinement | SW updated | SW Eng | W21 |
| **W22** | Accuracy validation | Detection >95% day, >90% night | AI Lead | W21 |
| W22 | Solenoid life test | 10,000 cycle test | Mech Lead | - |
| W22 | Documentation update | All docs current | PM | All |
| **W23** | Gate 3 package prep | Review package ready | PM | W22 |
| W23 | Customer demo prep | Demo system ready | Team | W22 |
| W23 | Phase 2 planning | Phase 2 plan drafted | PM | - |
| **W24** | **M6: Gate 3 Prep** | Ready for pre-production review | Team | All |
| W24 | Customer demo | Demonstration conducted | Team | W23 |
| W24 | Phase 1 closure | Lessons learned documented | PM | All |

**Month 6 Deliverables**:
- ✅ Field tested
- ✅ Accuracy validated
- ✅ Gate 3 ready
- ✅ Phase 1 complete

---

## 4. Critical Path

```
Critical Path (longest dependency chain):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dev Kit → Camera Stream → HOG on Jetson → Kalman Integration
    │                                           │
    W1                                         W8
                                                │
                                                ▼
                        Detection Demo (M2) → DfX Review (M4)
                                                │
                                                ▼
                        PCB Fab → Assembly → Integration Test
                           │                      │
                          W13                    W17
                                                  │
                                                  ▼
                                    Prototype Complete (M5)
                                                  │
                                                  ▼
                                    Field Test → Gate 3 (M6)

Total Critical Path: 24 weeks (no float)
```

---

## 5. Dependencies

| ID | Dependency | Impact if Delayed | Mitigation |
|----|------------|-------------------|------------|
| D1 | Jetson dev kit arrival | Blocks all development | Order Week 1, multiple sources |
| D2 | Camera integration | Blocks detection work | Start parallel with simulation |
| D3 | Gate 2 approval | Blocks prototype build | Early DfX engagement |
| D4 | PCB fabrication | Blocks assembly | Local fab, 2-week lead |
| D5 | Machined parts | Blocks assembly | Parallel path: 3D print |

---

## 6. Resource Loading

```
TEAM ALLOCATION BY MONTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        Feb   Mar   Apr   May   Jun   Jul
        ───   ───   ───   ───   ───   ───
PM      ██    ██    ██    ██    ██    ███
Tech    ███   ███   ███   ███   ███   ██
AI      ████  ████  ████  ███   ███   ███
EE      ███   ████  ████  ████  ███   ██
Mech    ███   ███   ████  ███   ██    ██
SW      ─     ███   ████  ████  ████  ███
Test    ─     ─     ██    ███   ████  ████
QC      ─     ██    ███   ██    ██    ███

Legend: █ = 25% allocation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 7. Risks to Schedule

| Risk | Impact | Mitigation |
|------|--------|------------|
| Jetson delivery delay | 2-4 weeks | Multiple suppliers, order early |
| HOG accuracy insufficient | 2 weeks | Parallel YOLO development |
| PCB respins needed | 2 weeks | Thorough review, use eval boards first |
| Integration issues | 2-4 weeks | Early integration, continuous testing |
| Weather delays testing | 1-2 weeks | Indoor test capability, flexible schedule |

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Manager | | | ☐ |
| Technical Lead | | | ☐ |
| Program Sponsor | | | ☐ |

---

## 9. References

- [[Resource-Plan]] - Team and budget
- [[Risk-Register]] - Schedule risks
- [[G1-Review-2026-01-26]] - Gate 1 requirements

---

*Phase 1 Schedule closes G1-003*
*Per Workshop X 3-Gate Quality System*
