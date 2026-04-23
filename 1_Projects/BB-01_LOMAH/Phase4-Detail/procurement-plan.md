# V-SMASH Procurement Plan

> **Document**: PROC-VSMASH-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Status**: ✅ APPROVED
> **Gap Closed**: G1-005
> **Risk Mitigated**: R03 (Import Restrictions)

---

## 1. Procurement Summary

| Category | Items | Total Value (VND) | Status |
|----------|-------|-------------------|--------|
| Computing Hardware | 7 | 78,750,000 | 🟡 Priority |
| Sensors & Modules | 40+ | 10,250,000 | 🟡 Priority |
| Development Equipment | 3 | 90,000,000 | 🟡 M1-M2 |
| Software Licenses | 4 | 111,000,000 | 🟡 M1 |
| Prototype Materials | Multiple | 130,000,000 | M5-M9 |
| Test Equipment | 4 | 80,000,000 | M8-M10 |
| **TOTAL** | | **~500,000,000** | |

---

## 2. Long-Lead Items (Critical Path)

### Priority 1: Order Immediately (Week 1)

| Item | Qty | Unit Cost | Lead Time | Supplier | Alternative |
|------|-----|-----------|-----------|----------|-------------|
| Jetson Nano 4GB Dev Kit | 5 | 3,750K | 2-3 weeks | NVIDIA Store | Seeed Studio |
| Jetson Xavier NX Dev Kit | 1 | 10,000K | 2-3 weeks | NVIDIA Store | Arrow Electronics |
| Development PC (RTX 4090) | 1 | 50,000K | 1-2 weeks | Local vendor | Phong Vũ, An Phát |
| CAD Software (SolidWorks) | 2 | 15,000K | 1 week | Reseller | Fusion 360 (free) |
| Altium Designer | 1 | 20,000K | 1 week | Reseller | KiCAD (free) |

**Total Priority 1: 128,750,000 VND**

### Priority 2: Order Week 2

| Item | Qty | Unit Cost | Lead Time | Supplier | Alternative |
|------|-----|-----------|-----------|----------|-------------|
| IMX290 Camera Module | 10 | 750K | 3-4 weeks | Leopard Imaging | ArduCam, Waveshare |
| BMI160 IMU Module | 10 | 125K | 2-3 weeks | Mouser/Digikey | MPU6050 (local) |
| FSR402 Trigger Sensor | 20 | 75K | 2-3 weeks | Interlink | Local equivalent |
| Office 365 Business | 7 users | 11,000K | Instant | Microsoft | Google Workspace |

**Total Priority 2: 20,750,000 VND**

---

## 3. Detailed Procurement Schedule

### Month 1 (M1)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | Jetson Nano Dev Kit | 5 | Order | Procurement |
| W1 | Jetson Xavier NX | 1 | Order | Procurement |
| W1 | Development PC | 1 | Order | HW Lead |
| W1 | SolidWorks license | 2 | Order | PM |
| W1 | Office 365 | 7 | Activate | PM |
| W2 | IMX290 camera | 10 | Order | Procurement |
| W2 | BMI160 IMU | 10 | Order | Procurement |
| W2 | FSR402 sensors | 20 | Order | Procurement |
| W3 | Receive Jetson kits | - | QC check | HW Lead |
| W4 | Receive cameras | - | QC check | HW Lead |

### Month 2 (M2)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | Oscilloscope | 1 | Order | HW Lead |
| W1 | Power supply, lab equip | 1 lot | Order | HW Lead |
| W2 | Verify all M1 items | - | Inventory | Procurement |

### Month 4 (M4)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | Altium Designer | 1 | Order | HW Lead |
| W2 | Cloud GPU allocation | 200 hrs | Setup | SW Lead |

### Month 5 (M5)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | PCB fabrication | 10 | Order | HW Lead |
| W2 | Electronic components | 1 lot | Order | HW Lead |

### Month 6-7 (M6-M7)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| M6 W1 | Solenoids & actuators | 10 | Order | HW Lead |
| M6 W2 | Batteries & power | 10 | Order | HW Lead |
| M7 W1 | CNC housing | 5 | Order | HW Lead |
| M7 W2 | Optics components | 5 sets | Order | HW Lead |

### Month 8 (M8)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | DJI Mini drones | 3 | Order | Test Lead |
| W2 | Target frames | 1 lot | Order | Test Lead |

### Month 10 (M10)

| Week | Item | Qty | Action | Owner |
|------|------|-----|--------|-------|
| W1 | High-speed camera | 1 | Rental | Test Lead |
| W1 | Chronograph | 1 | Order | Test Lead |
| W2 | Ammunition | 1 lot | Requisition | Test Lead |

---

## 4. Supplier Matrix

### Computing Hardware

| Item | Primary Supplier | Alternative 1 | Alternative 2 | Local Option |
|------|------------------|---------------|---------------|--------------|
| Jetson Nano | NVIDIA Direct | Seeed Studio | Arrow | Nhật Tảo (stock varies) |
| Jetson Xavier NX | NVIDIA Direct | Arrow | Mouser | Import only |
| Development PC | Phong Vũ | An Phát | GearVN | ✅ Local |

### Sensors & Modules

| Item | Primary Supplier | Alternative 1 | Alternative 2 | Local Option |
|------|------------------|---------------|---------------|--------------|
| IMX290 Camera | Leopard Imaging | ArduCam | Waveshare | Nhật Tảo |
| BMI160 IMU | Mouser | Digikey | LCSC | MPU6050 (local) |
| FSR402 | Interlink | SparkFun | - | Nhật Tảo equivalent |

### Software

| Item | Primary | Alternative (Free) | Notes |
|------|---------|-------------------|-------|
| SolidWorks | Dassault reseller | Fusion 360, FreeCAD | Paid preferred |
| Altium | Altium reseller | KiCAD | KiCAD acceptable |
| Cloud GPU | AWS | Google Colab Pro | Colab for backup |

---

## 5. Import Risk Mitigation (R03)

### Export Control Assessment

| Item | ECCN | Risk Level | Mitigation |
|------|------|------------|------------|
| Jetson Nano | EAR99 | Low | Consumer product, no restriction |
| Jetson Xavier NX | 4A994 | Medium | Check end-use, standard dev kit OK |
| IMX290 | EAR99 | Low | Consumer sensor |
| BMI160 | EAR99 | Low | Consumer IMU |

### Local Content Strategy

| Component | Import | Local | Target |
|-----------|--------|-------|--------|
| Processing | Jetson (import) | - | Import |
| Camera | IMX290 (import) | OV2710 (local) | Import preferred |
| IMU | BMI160 (import) | MPU6050 (local) | Local backup |
| Housing | - | CNC (local) | ✅ Local |
| PCB | - | Local fab | ✅ Local |
| Assembly | - | Local | ✅ Local |
| **Total** | 37% | **63%** | >60% ✅ |

### Contingency Suppliers

| Scenario | Primary | Contingency | Impact |
|----------|---------|-------------|--------|
| Jetson unavailable | NVIDIA | Rockchip RK3588 | +2 months SW port |
| IMX290 unavailable | Leopard | OV2718 (local) | Slight quality drop |
| Import delays | Direct | Singapore distributor | +1 week, +10% cost |

---

## 6. Vendor Qualification

### Approved Vendor List

| Vendor | Category | Location | Status | Contact |
|--------|----------|----------|--------|---------|
| NVIDIA Store | Computing | USA | ✅ Approved | Direct |
| Seeed Studio | Electronics | China | ✅ Approved | seeed.cc |
| Mouser Electronics | Components | USA | ✅ Approved | mouser.com |
| Digikey | Components | USA | ✅ Approved | digikey.com |
| LCSC | Components | China | ✅ Approved | lcsc.com |
| Nhật Tảo Market | Local parts | HCMC | ✅ Approved | Multiple |
| Phong Vũ | PC/Equipment | Vietnam | ✅ Approved | phongvu.vn |
| Leopard Imaging | Cameras | USA | ✅ Approved | leopardimaging.com |

### New Vendor Qualification Checklist

| Check | Required |
|-------|----------|
| ☐ Business registration verified | Yes |
| ☐ References checked (2 minimum) | Yes |
| ☐ Sample quality verified | Yes (components) |
| ☐ Payment terms agreed | Yes |
| ☐ Lead time confirmed | Yes |
| ☐ RMA policy reviewed | Yes |

---

## 7. Procurement Budget Tracking

| Category | Budget (VND) | Committed | Spent | Available |
|----------|--------------|-----------|-------|-----------|
| Dev Hardware | 129,000,000 | 0 | 0 | 129,000,000 |
| Prototype Materials | 130,000,000 | 0 | 0 | 130,000,000 |
| Test Equipment | 80,000,000 | 0 | 0 | 80,000,000 |
| Software | 111,000,000 | 0 | 0 | 111,000,000 |
| Consumables | 30,000,000 | 0 | 0 | 30,000,000 |
| **TOTAL** | **480,000,000** | **0** | **0** | **480,000,000** |

*Updated: 2026-01-27*

---

## 8. Procurement Process

### Standard Purchase Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROCUREMENT PROCESS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. REQUEST        2. APPROVE         3. ORDER                  │
│  ┌─────────┐      ┌─────────┐       ┌─────────┐                │
│  │ Engineer │ ──► │PM/Lead  │ ──►   │Procure- │                │
│  │ submits  │      │approves │       │ment     │                │
│  │ PR form  │      │(<5M VND)│       │orders   │                │
│  └─────────┘      └─────────┘       └─────────┘                │
│                         │                  │                     │
│                         ▼                  ▼                     │
│                   ┌─────────┐       ┌─────────┐                │
│                   │Finance  │       │Receive  │                │
│                   │approves │       │& QC     │                │
│                   │(≥5M VND)│       │check    │                │
│                   └─────────┘       └─────────┘                │
│                                           │                     │
│                                           ▼                     │
│                                    ┌─────────┐                  │
│                                    │ Issue   │                  │
│                                    │to team  │                  │
│                                    └─────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

### Approval Thresholds

| Amount (VND) | Approver | Timeline |
|--------------|----------|----------|
| <1,000,000 | Team Lead | Same day |
| 1M - 5M | Project Lead | 1 day |
| 5M - 50M | PM + Finance | 2 days |
| >50M | Management | 5 days |

---

## 9. Inventory Management

### Stock Levels (Critical Items)

| Item | Minimum Stock | Reorder Point | Max Stock |
|------|---------------|---------------|-----------|
| Jetson Nano | 2 | 2 | 5 |
| IMX290 camera | 3 | 3 | 10 |
| BMI160 IMU | 3 | 3 | 10 |
| PCB (carrier) | 2 | 2 | 10 |

### Storage Requirements

| Category | Location | Conditions |
|----------|----------|------------|
| Electronics | ESD cabinet | <60% RH, 20-25°C |
| Batteries | Fire-safe cabinet | Ventilated |
| Chemicals | Chemical storage | Per MSDS |
| General | Stockroom | Clean, dry |

---

## 10. Key Procurement Milestones

| Milestone | Date | Items | Status |
|-----------|------|-------|--------|
| M1 W1 | 2026-02-01 | Jetson kits, PC ordered | 🟡 Ready |
| M1 W3 | 2026-02-15 | Jetson kits received | ⏳ Pending |
| M1 W4 | 2026-02-22 | All sensors received | ⏳ Pending |
| M2 W4 | 2026-03-22 | Lab equipment complete | ⏳ Pending |
| M5 W2 | 2026-06-15 | PCBs received | ⏳ Pending |
| M7 W4 | 2026-08-22 | Prototypes complete | ⏳ Pending |
| M8 W2 | 2026-09-15 | Test equipment ready | ⏳ Pending |

---

## 11. Related Documents

### Planning
- [[planning/phase-1-budget]] - Budget details (G1-002)
- [[planning/phase-1-schedule]] - Schedule alignment
- [[planning/resource-plan]] - Team assignments

### Quality
- [[quality/risk-register]] - R03 Import risk
- [[quality/gate-1-review]] - G1-005 closure

### External
- Vendor contracts (when signed)
- Purchase orders (tracking spreadsheet)

---

## 12. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial release, G1-005 closed |

---

## 13. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Lead | Nguyễn Văn A | | ☐ |
| Procurement | | | ☐ |
| Finance | | | ☐ |

---

*Procurement Plan PROC-VSMASH-001*
*Gap G1-005 CLOSED*
*Risk R03 (Import) Mitigated - 63% Local Content*
