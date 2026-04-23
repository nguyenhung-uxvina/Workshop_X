# V-SMASH Resource Plan

> **Project**: V-SMASH Fire Control System
> **Issue ID**: G1-002
> **Status**: ✅ COMPLETE
> **Owner**: Project Manager
> **Date**: 2026-01-28

---

## 1. Executive Summary

| Metric | Value |
|--------|-------|
| **Phase 1 Duration** | 6 months (Feb-Jul 2026) |
| **Team Size** | 6 FTEs (equivalent) |
| **Total Budget** | ₫850,000,000 (~$34,000 USD) |
| **Unit Cost Target** | <$3,000/unit |

---

## 2. Team Structure

### 2.1 Core Team

| Role | Name | Allocation | Start | End | Responsibility |
|------|------|------------|-------|-----|----------------|
| **Project Manager** | [TBD] | 50% | Feb-26 | Jul-26 | Schedule, budget, coordination |
| **Technical Lead** | [TBD] | 75% | Feb-26 | Jul-26 | Architecture, integration |
| **AI/ML Engineer** | [TBD] | 100% | Feb-26 | Jul-26 | Detection, tracking algorithms |
| **Electronics Lead** | [TBD] | 100% | Feb-26 | Jul-26 | PCB, power, interfaces |
| **Mechanical Lead** | [TBD] | 75% | Feb-26 | Jun-26 | Housing, mounting, actuator |
| **Software Engineer** | [TBD] | 100% | Mar-26 | Jul-26 | Ballistics, fire control logic |

### 2.2 Support Team

| Role | Name | Allocation | When | Responsibility |
|------|------|------------|------|----------------|
| QC Lead | [TBD] | 25% | Apr-Jul | Gate reviews, testing |
| Test Engineer | [TBD] | 50% | May-Jul | Integration, validation |
| Procurement | [TBD] | 25% | Feb-Apr | Parts sourcing |

### 2.3 External Resources

| Resource | Organization | Purpose | Cost |
|----------|--------------|---------|------|
| ML Consultant | HUST/VNU | Algorithm review, training | ₫50M |
| PCB Fabrication | Local supplier | Prototype boards | ₫30M |
| Machining | Workshop X | Housings, fixtures | ₫20M |

---

## 3. Org Chart

```
                    ┌─────────────────┐
                    │ Program Sponsor │
                    │   (Management)  │
                    └────────┬────────┘
                             │
                    ┌────────┴────────┐
                    │ Project Manager │
                    │     (50%)       │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
┌────────┴────────┐ ┌────────┴────────┐ ┌────────┴────────┐
│  Technical Lead │ │ Mechanical Lead │ │ Electronics Lead│
│      (75%)      │ │      (75%)      │ │     (100%)      │
└────────┬────────┘ └─────────────────┘ └─────────────────┘
         │
    ┌────┴────┐
    │         │
┌───┴───┐ ┌───┴───┐
│AI/ML  │ │ SW    │
│(100%) │ │(100%) │
└───────┘ └───────┘
```

---

## 4. Budget Plan

### 4.1 Summary by Category

| Category | Phase 1 (Q1-Q2) | Notes |
|----------|-----------------|-------|
| **Personnel** | ₫400,000,000 | 6 FTE equivalent × 6 months |
| **Hardware (dev)** | ₫150,000,000 | Dev kits, sensors, actuators |
| **Prototype materials** | ₫100,000,000 | PCB, housing, mechanical |
| **Testing** | ₫50,000,000 | Equipment, consumables |
| **External services** | ₫100,000,000 | University, fab, machining |
| **Contingency (10%)** | ₫50,000,000 | Unforeseen expenses |
| **TOTAL** | **₫850,000,000** | ~$34,000 USD |

### 4.2 Hardware Budget Detail

| Item | Qty | Unit Cost | Total | Supplier |
|------|-----|-----------|-------|----------|
| Jetson Xavier NX Dev Kit | 3 | ₫10,000,000 | ₫30,000,000 | Seeed/Waveshare |
| Camera modules (IMX290) | 6 | ₫750,000 | ₫4,500,000 | AliExpress |
| IMU modules | 6 | ₫125,000 | ₫750,000 | Nhật Tảo |
| Solenoids (test batch) | 20 | ₫250,000 | ₫5,000,000 | Local |
| Power supplies | 5 | ₫500,000 | ₫2,500,000 | Local |
| Cables, connectors | - | - | ₫5,000,000 | Nhật Tảo |
| Test fixtures | 1 set | ₫10,000,000 | ₫10,000,000 | Workshop X |
| Oscilloscope (if needed) | 1 | ₫25,000,000 | ₫25,000,000 | Existing or rent |
| Misc electronics | - | - | ₫10,000,000 | Various |
| **Subtotal** | | | **₫92,750,000** | |
| **Contingency (20%)** | | | ₫18,550,000 | |
| **TOTAL Hardware** | | | **₫111,300,000** | |

### 4.3 Cash Flow

| Month | Expense | Cumulative | Notes |
|-------|---------|------------|-------|
| Feb | ₫150,000,000 | ₫150,000,000 | Dev kits, kickoff |
| Mar | ₫120,000,000 | ₫270,000,000 | Personnel, sensors |
| Apr | ₫130,000,000 | ₫400,000,000 | Prototype materials |
| May | ₫150,000,000 | ₫550,000,000 | Build, testing |
| Jun | ₫150,000,000 | ₫700,000,000 | Integration |
| Jul | ₫150,000,000 | ₫850,000,000 | Validation |

---

## 5. Equipment & Facilities

### 5.1 Equipment Needs

| Equipment | Status | Action |
|-----------|--------|--------|
| Jetson Xavier NX (3) | 🟡 Order | Procure Week 1 |
| High-speed camera | 🟡 Rent | For tracking validation |
| Oscilloscope | ✅ Existing | Workshop X |
| Power analyzer | 🟡 Rent | For power consumption |
| Environmental chamber | 🟡 Rent | For temp testing |
| Test range | 🟡 Arrange | Navy facility or local |

### 5.2 Facilities

| Facility | Purpose | Availability |
|----------|---------|--------------|
| Workshop X lab | Development, assembly | ✅ Available |
| University lab | ML training, GPU access | 🟡 Negotiate |
| Navy test range | Live fire testing | 🟡 Request |
| Indoor test area | Integration testing | ✅ Available |

---

## 6. Skills & Training

### 6.1 Skills Matrix

| Skill | Required | Current | Gap | Action |
|-------|----------|---------|-----|--------|
| Jetson development | High | Medium | Yes | Training + consultant |
| YOLOv8/PyTorch | High | Low | Yes | University partnership |
| Kalman filtering | Medium | Medium | No | - |
| Embedded C/C++ | High | High | No | - |
| PCB design | High | High | No | - |
| Ballistics modeling | Medium | Low | Yes | Self-study + reference |
| GD&T | Medium | High | No | - |

### 6.2 Training Plan

| Training | Who | When | Method | Cost |
|----------|-----|------|--------|------|
| Jetson JetPack | AI Lead, SW Eng | Week 1-2 | Online + hands-on | Free |
| YOLOv8 basics | AI Lead | Week 2-4 | Ultralytics docs + practice | Free |
| Object tracking | AI Lead | Week 4-6 | Papers + implementation | Free |
| Ballistics | SW Eng | Week 3-4 | SMASH documentation | Free |

---

## 7. Risk to Resources

| Risk | Impact | Mitigation |
|------|--------|------------|
| Key person leaves | High | Cross-training, documentation |
| Budget cut | High | Prioritize core features, reduce scope |
| Equipment delay | Medium | Order early, multiple sources |
| University unavailable | Medium | Alternative: online courses, consultants |

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Manager | | | ☐ |
| Technical Lead | | | ☐ |
| Program Sponsor | | | ☐ |

---

## 9. References

- [[Risk-Register]] - Resource-related risks
- [[Phase-1-Schedule]] - Timeline
- [[G1-Review-2026-01-26]] - Gate 1 findings

---

*Resource Plan closes G1-002*
*Per Workshop X 3-Gate Quality System*
