---
created: 2026-03-06
updated: 2026-07-10
type: project
status: active
tags: [#type/project, #status/active]
tier: 1-prototype
---

# VN-XUONG-UUV — Status

## Current Phase
**Phase 2: Conceptual Design** (Gate 1 passed 2026-03-06, P12 issued 2026-03-07)

## Pahl-Beitz Progress
- [x] Phase 0: Pre-study (DONE — Gate 0 PASSED 2026-03-06)
- [x] Phase 1: Task Clarification (DONE — Gate 1 PASSED 2026-03-06, 3.80/4.0)
- [ ] Phase 2: Conceptual Design (IN PROGRESS — P12 issued 2026-03-07)
- [ ] Phase 3: Embodiment Design
- [ ] Phase 4: Detail Design

## Physical Validation
- **dP/dt this month:** 0 (project just started)
- **Next physical milestone:** TBD (after Phase 0 defines UUV target)
- **Next physical gate date:** TBD
- **Hardware on hand:** None yet

## Known Parameters
- **UUV: L=5000mm, D=400mm, W=550kg, H_max=850mm (tại anten)**
- UUV form factor: torpedo-profile (L/D=12.5), phù hợp reference designs
- **Cáp quang: 0.5 kg/km → 25 km = 12.5 kg (negligible). Cuộn cáp trong UUV [L2]**
- Sea State: 3-4 (ngoài khơi Biển Đông)
- Operations: Từ tàu mẹ (tender/work boat)
- Capacity: 1 UUV/chuyến
- Time target: 30-60 phút (launch + recovery)
- Launch method: Stern ramp/slipway
- Recovery method: Stern channel + rollers + permanent pendant winch (TRV proven)
- **Crane SWL tàu mẹ: 2.5t** → chỉ cho UUV loading (550kg)
- **Vessel baseline (Phase 2 decided):**
  - 8m aluminum 5083, twin outboard (2 x 70 HP — Yamaha F70)
  - **Tốc độ tối đa: 25 kts [L2]**
  - Electric LARS (VFD) + **battery bank 24V LiFePO4** (genset ELIMINATED 2026-04-14)
  - Permanent pendant winch (SA-02 resolved)
  - Crew 3: Helmsman / LARS op / UUV op
  - Towed alongside (primary) / self-transit (secondary)
  - ~$474K (revised from $517K — genset removed), SS 3 recovery
- Path 1 (aluminum on-deck) and Path 2 (RIB) eliminated

## Blocking Constraints
1. ~~UUV chưa xác định loại~~ → Đã xác định: 550kg compact
2. ~~Launch/recovery method chưa chọn~~ → Stern ramp + funnel (đã nghiên cứu)
3. ~~Chưa có reference design~~ → 4 analyses + cross-comparison done
4. ~~Solo engineer priority~~ → **Musk Sequence #1** (confirmed 2026-03-06)
5. ~~D=400mm custom cradle~~ → Requirements baselined (Doc 002)
6. ~~ICD Template chưa gửi cho UUV OEM~~ → SENT 2026-04-23 (v1.6 to Trần Thiện <vittel@gmail.com>)

## Key Decisions (Phase 2) — ALL RESOLVED
- PD-1: **Twin outboard** (2 x 70 HP — Yamaha F70) [L2] — DECIDED (revised 2026-04-23: 40-60 HP undersized cho 25 kts target, recalc → 70 HP minimum)
- PD-2: **Electric LARS** (VFD + battery 24V LiFePO4) — FORCED by PD-1; genset ELIMINATED 2026-04-14 per SA review
- PD-3: **Permanent pendant** (winch cable gắn cố định vào cradle) [L2] — DECIDED
- ~~PD-4: Cable drum location~~ — LOẠI (drum trong UUV)
- ~~PD-5: Cable routing vs LARS~~ — LOẠI (chỉ cable guide on deck)
- ~~PD-6: TMS-LARS sync~~ — LOẠI (UUV tự quản lý cáp)
- PD-7: **3 crew** (Helmsman / LARS op / UUV op) [L2] — DECIDED
- PD-8: **ACH = NO-GO** (vessel-level) — DECIDED 2026-04-23 via /forge-shift. Lý do: toàn bộ vessel là physical-force domain (ACH Boundary Rule violation), không có hardware đắt tiền để thay thế. HMI add-ons (USBL recovery assist, seakeeping coach) để dành Phase 4+ nếu cần, không thuộc SHIFT scope.

## Kanban

### Done (Phase 0 + Phase 1)
- [x] Phase 0: ODI, P09, P10, P11, Gate 0 PASSED
- [x] Phase 1: 6 docs + 4 templates, Gate 1 PASSED (3.80/4.0)
- [x] P12 Product Definition issued (2026-03-07)

### Done (Phase 2)
- [x] Morphological matrix v0.1 (35 sub-functions → working principles) — AI-DRAFT
- [x] 7 design decisions (PD-1 to PD-7) — ALL RESOLVED (4 decided, 3 eliminated)
- [x] ~~TMS concept~~ — LOẠI (drum trong UUV, không cần TMS trên xuồng)
- [x] Cable weight confirmed: 0.5 kg/km = 12.5 kg (negligible)
- [x] ~~VDI 2225 concept selection~~ — không cần (1 concept duy nhất, design space đóng)
- [x] TRV reference research: 12 US Navy + 4 international + 2 LARS systems
- [x] ICD Template updated v1.6 (streamlined, Section K, VN translation, DOCX exported)
- [x] 3 SOPs updated v1.1 (electric LARS, no TMS, permanent pendant, known values)
- [x] Preliminary stability check (Doc 009): GM = 1.52m >> 0.5m PASS
- [x] Function Structure v2.0 (Doc 006): 43→35 active SFs, all PD resolved, F5 collapsed
- [x] Concept Description v1.0 (Doc 010): full baseline concept documented
- [x] Gate 2 Pre-Assessment (Doc 011): 5 PASS, 3 CONDITIONAL, 0 FAIL

### Done (System Architecture — retroactive, 2026-04-14)
- [x] System Architecture retroactive (VDI 2206 QUICK mode)
- [x] SA0: Mechatronic Classification (QUICK — MECH dominant, ELEC minor)
- [x] SA2: Domain Allocation (35 SFs: 22 MECH, 5 ELEC, 2 OEM, 5 SHARED)
- [x] SA3: ICD v1.5 (9 internal + 7 external interfaces)
- [x] SA4: Domain Budgets (weight -290 kg, cost -$43K vs genset baseline)
- [x] SA6: Architecture Review (PENDING CEO approval)
- [x] **KEY DECISION: Genset ELIMINATED → Battery-only LARS power (24V LiFePO4)**
- [x] 7 shadow assumptions detected (2 HIGH: SA-02 winch voltage, SA-04 OEM controller power)

### In Progress (Phase 2 — Conceptual Design)
- [x] **Gửi ICD Template v1.6 cho UUV OEM** — DONE 2026-04-23 (sent to Trần Thiện <vittel@gmail.com>); 2-week response window → expected reply by 2026-05-07
- [x] **OEM ICD reply RECEIVED** — CEO xác nhận 2026-07-10 (ground-truth session). ⚠️ Nội dung reply CHƯA nạp vault — cần nạp ICD response vào `System-Arch/` để resolve SA-04 (OEM controller power) + interface TBDs
- [ ] **NEW BLOCKING:** Market survey 24VDC marine winch 10 kN (SA-02)

### To Do (Human Core — Gate 2 Critical Path)
- [ ] **Human review Doc 007 working principles** (~2 hrs) — unblocks G2-1
- [ ] **Draw GA sketch** (~4 hrs) — required evidence
- [x] **BOM local content classification** — DONE 2026-04-23 (Doc 013, VN% = 79.8%, unblocks G2-6)
- [ ] Stakeholder interviews S1, S2, S4
- [ ] Seakeeping assessment (partner)
- [ ] **Formal Gate 2 Review** (target: 2026-03-14 to 2026-03-21)

### Backlog (Post-Gate 2)
- [ ] **PD-1 cascade re-calc** — propagate 2×70 HP Yamaha F70 vào Doc 006/007/008/009/011/012 + 4 customer proposals + 2 templates. Cần Yamaha F70 datasheet + dealer quote VN. Deferred 2026-04-23.

### Completed (AI Offload — Phase 2)
- [x] Weight estimate v2 (Doc 008): lightship ~2,820 kg, loaded ~3,843 kg
- [x] Preliminary stability check (Doc 009): GM = 1.52m, stern trim 17cm — ALL PASS

## Phase 0 Planning (retroactive consolidation + expansion 2026-04-09)
- [x] Product Planning v1.0 — Steps 1-8 consolidated from P09-P12
- [x] Product Proposal v2.0 — solution-neutral v3.0 schema
- [x] ~~Portfolio Planning v1.0~~ → superseded by v1.1
- [x] **Portfolio Planning v1.1** — 8 variants (Musk First Principles + Hwang Disruptive Innovation)
- [x] /review-plan: COMPLIANT (0 FAIL, 0 FLAG)

**Portfolio v1.1 (reframed: "Marine Heavy-Object Transfer Platform"):**
- Sequence: V4→V2→V3→V6→V9→V7→V8
- 4-layer architecture: L0 Core Mechanism → L1 Modules → L2 Vessels → L3 Autonomy → L4 Ecosystem
- Common hull platform with VN-AST-MSL-001 (cross-pollination)
- 5-year projection: **$10.9M** across 9 products [L5-ASSUMPTION]
- Platform ROI: 365% (V1 NRE → $438K savings across 8 variants)

## Deadline
**Gate 2 target: 2026-04-18** (9 days remaining — 3 CEO actions blocking)
