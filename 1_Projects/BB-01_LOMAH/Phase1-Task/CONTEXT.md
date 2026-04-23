# Current Context

> **Purpose**: Quick snapshot of what's happening NOW
> **Update**: Daily or when context shifts significantly

---

## Active Work Session

**Date**: 2026-01-27
**Focus**: BB-01 Gate 2 + V-SMASH Planning Complete

### What I'm Working On

**BB-01** ✅ COMPLETE
1. DfX 100% - All 16 issues closed
2. Gate 2 prep documentation finalized
3. Ready for Gate 2 review meeting

**V-SMASH** ✅ COMPLETE
1. Risk Register v1.1 - All G1 items closed, 10/12 risks mitigated
2. Resource Plan v1.1 - Team assigned, university partnerships detailed
3. Procurement Plan v1.0 - NEW (63% local content, import risk mitigated)
4. Phase 1 Schedule v1.1 - M7-M12 weekly detail added
5. Phase 1 Budget v1.1 - University partnership budget (G1-004)

### Key Questions/Blockers
- None - **BOTH PROJECTS READY FOR NEXT PHASE**

---

## Project Status Snapshot

### BB-01 (Naval Target Hit Detection)

| Attribute | Value |
|-----------|-------|
| **Phase** | **Gate 2 READY** ✅ |
| **SRS Version** | v2.0 (Defense Standard) |
| **Selected Concept** | V1 Baseline (90.8% VDI score) |
| **Sensor Type** | PZT Piezoelectric (DEC-002) |
| **MTBF** | 2,817 hours (exceeds 2,000hr req) |
| **Unit Cost** | ~27M VND (under 60M budget) |
| **DfX Score** | **100% COMPLETE** (16/16 issues closed) |

**Key Decisions Complete**:
- [x] DEC-002: PZT sensor (not microphone) - 58% cost savings
- [x] DEC-003: Steel + hot-dip galvanize frame
- [x] DEC-004: LiFePO4 12.8V 6Ah + 20W solar (85hr runtime)
- [x] DEC-005: STM32H743 MCU (internal 16-bit ADC)
- [x] DEC-006: V1 Baseline concept selected

**Documentation Complete**:
- [x] SRS v2.0 (46 requirements, KPP/KSA format)
- [x] Function structure (PB2a)
- [x] Morphological matrix (PB2b)
- [x] VDI 2225 evaluation (PB2c)
- [x] DfX review (100% - all 16 issues closed)
- [x] FMEA (53 failure modes, 21 high-risk)
- [x] Assembly work instructions (WI-BB01-MCU-001)
- [x] PZT installation work instructions (WI-BB01-PZT-001)
- [x] Test procedure checklist (TP-BB01-MCU-001)
- [x] Acceptance test procedure (ATP-BB01-001)
- [x] LRU maintainability strategy (DfR-002)
- [x] Marine coating specification (DfR-003)
- [x] Cable strain relief specification (DfA-002)
- [x] LoRa test receiver design (DfT-002)
- [x] MTBF improvement plan (v1→v2)

**Next Steps**:
- [ ] **Schedule Gate 2 review meeting** ← READY
- [ ] Procure STM32H743 (3 week lead time)
- [ ] Prototype fabrication

**Quick Links**: [[domains/bb-01/README]]

---

### V-SMASH (AI Fire Control System)

| Attribute | Value |
|-----------|-------|
| **Phase** | **Gate 1 PASSED** - Ready for Phase 1 |
| **Gate 1 Score** | **96.3% PASS** ✅ |
| **Selected Concept** | V4: Phased Development (85% VDI score) |
| **Phase 1 Period** | Feb 2026 - Jan 2027 (12 months) |
| **Budget** | 2.5B VND (~$100K) Phase 1 |
| **Local Content** | 63% (exceeds 60% target) |
| **Risk Status** | 10/12 mitigated, 2 monitor, 0 action |

**Gate 1 Actions - ALL CLOSED** ✅:
- [x] G1-001: Resource plan detail → `resource-plan.md` v1.1
- [x] G1-002: Budget breakdown → `phase-1-budget.md` v1.1
- [x] G1-003: Team member names → 7 roles assigned
- [x] G1-004: University MoU → HUST/VNU partnerships budgeted
- [x] G1-005: Procurement plan → `procurement-plan.md` v1.0 NEW
- [x] G1-006: Test range Q4 → Reserved

**Planning Documents Complete**:
- [x] Resource Plan v1.1 (7 team members, contact matrix)
- [x] Phase 1 Budget v1.1 (2.5B VND, university partnerships)
- [x] Phase 1 Schedule v1.1 (M1-M12 weekly detail, 6 milestones)
- [x] Procurement Plan v1.0 (long-lead items, supplier matrix)
- [x] Risk Register v1.1 (12 risks, 10 mitigated)

**University Partnerships (G1-004)**:
| Partner | Cash | In-Kind | Deliverable |
|---------|------|---------|-------------|
| HUST | 50M | 100M | GPU cluster, ML training |
| VNU | 50M | 75M | 5000 images, 5 interns |

**Next Steps**:
- [ ] Phase 1 kickoff (M1 W1 = Feb 2026)
- [ ] Order Jetson dev kits (Priority 1)
- [ ] Sign HUST MoU

**Quick Links**: [[domains/v-smash/README]]

---

### SMB Consulting

| Attribute | Value |
|-----------|-------|
| **Phase** | Setup |
| **Status** | Placeholder created |

**Quick Links**: [[domains/smb-consulting/README]]

---

## Vault Structure

```
obsidian-vault/
├── domains/
│   ├── bb-01/        ← Gate 2 Ready (100% DfX)
│   ├── v-smash/      ← Gate 1 Passed (96.3%), Phase 1 Ready
│   └── smb-consulting/
├── skills/           ← PB workflow, DMIR, DfX, etc.
├── templates/        ← Decision record, project README
├── _inbox/           ← Capture area
├── CONTEXT.md        ← You are here
└── INDEX.md          ← Navigation hub
```

---

## Key Contacts & Resources

| Who/What | Context |
|----------|---------|
| **Workshop X** | Production facility |
| **Naval Institute** | BB-01 customer |
| **HUST - Dr. Nguyễn Thị H** | V-SMASH ML partnership (MoU drafted) |
| **VNU - Prof. Trần Văn I** | V-SMASH dataset partnership (LOI received) |
| **Military Range - Cpt. Lê Văn K** | V-SMASH Q4 range (reserved) |
| **Nhật Tảo Market** | Electronics procurement (PZT, LoRa, Jetson) |
| **LCSC/Mouser** | STM32H743, Jetson import |

---

## Upcoming Deadlines

| Date | Item | Project | Status |
|------|------|---------|--------|
| 2026-02 | **Gate 2 Review** | BB-01 | ✅ Ready |
| 2026-02-01 | **Phase 1 Kickoff (M1 W1)** | V-SMASH | 🟡 Next |
| 2026-02-08 | Jetson dev kits ordered | V-SMASH | 🟡 Priority 1 |
| 2026-04 | Prototype complete | BB-01 | ⏳ |
| 2026-06 | Sea trials | BB-01 | ⏳ |
| 2026-07 | **MS-03 PDR** | V-SMASH | ⏳ |
| 2026-11 | **MS-05 CDR** | V-SMASH | ⏳ |
| 2027-01 | **MS-06 Gate 2** | V-SMASH | ⏳ |

---

## Parking Lot (Ideas to Process Later)

- [ ] SMB consulting pricing model
- [ ] Obsidian → GitHub backup automation
- [ ] MTB-20 integration requirements deep-dive
- [ ] BB-01 v2 redundancy implementation (per MTBF plan)

---

*Updated: 2026-01-27*
