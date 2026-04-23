---
created: 2026-03-19
updated: 2026-03-19
document-id: VN-AST-MSL-001-EMB-001
type: phase-3-initiation
status: in-progress
---

# PHASE 3 EMBODIMENT DESIGN INITIATION — VN-AST-MSL-001 "THANH TRI"

## Tóm Tắt Dự Án
| | |
|--|--|
| **Phase** | 3 — Embodiment Design |
| **Selected Concept** | C1 TRÒN HDPE (VDI 2225 score: 86.8%, no weak spots) |
| **Status** | Gate 2 PASSED (3.85/4.0) → Ready for Phase 3 |
| **Deadline** | Gate 3 target: 2026-04-05 |
| **Physical gate** | HDPE weld test coupon by 2026-04-07 (OI-1 from G2) |

---

## C1 TRÒN HDPE — Concept Overview

### Configuration
```
PLAN VIEW                          SIDE VIEW
      ┌──10 reflectors──┐            ▲ Mast H=3.5m
     ╱  ╲    ○    ╱  ╲               │
    │ ╲  ╱ Mast ╲  ╱ │           ┌───┤ Reflectors
    │   ○────○────○   │           │   │ (fold-down)
    │ ╱  ╲       ╱  ╲ │       ────┤   ├────  Deck
    │╱    ╲     ╱    ╲│       ████│   │████  HDPE ring
     ╲    ○─────○    ╱        ████│   │████  (foam-filled)
      ╲  ╱   V   ╲  ╱         ~~~~│   │~~~~  WL
       ─────bridle──           ~~~~└───┘~~~~
            ↓                      │
         Tow line            Chain/nylon
                                   │
  D = 6.0m                     Anchor
  2 halves (transport)         Draft ≈ 0.8m
```

### Key Specs (Phase 2 Approved)
| Attribute | Value | Unit | Notes |
|-----------|-------|------|-------|
| **Hull Material** | HDPE (PE100, foam-filled) | — | Unsinkable per R-B04, closes Galaxy: Foam-Filled HDPE |
| **Diameter** | 6.0 | m | Wide waterplane → high GM |
| **Height** | 3.5 | m | Reflector center height (R-A04 = 3.5m min) |
| **Draft** | ~0.8 | m | Shallow draw, favorable for tow stability |
| **Dry Weight Est.** | ~3,500 | kg | Blunt profile, R-B10 target ≤ 2,000 kg (stretch) |
| **RCS (boresight)** | ≥ 5,000 | m² | 10 trihedral reflectors, edge 0.9m, trihedrals yield ~410 m² each |
| **RCS (worst-case 360°)** | ≥ 1,000 | m² | R-A01b demand, derated for grazing angle |
| **Stability (GM)** | ~12.2 | m | Exceptional (R-C02 min 0.5m) per G2 resolution OI-3 |
| **Mooring System** | Chain/nylon hybrid | — | Option E selected (G2 OI-4): SS316 pipe + HDPE compression tubes, ESC risk = 0 |
| **Tow Drag @ 5 kt** | ~17 | kN | Blunt hull penalty, acceptable for 100 HP tug |
| **Fabrication Time** | ~6 | weeks | HDPE welding specialty, but learnable |
| **Local Content** | ≥ 85% | % | Meets R-H03 defense procurement threshold |
| **Cost Estimate** | 600–900 | M VND | Well within 2,000M budget (K9 = 4/4 score) |

### Design Principle
**Simplicity over sophistication.** HDPE ring hull = monolithic, no compartments, no moving parts, no corrosion. Foam-filled = inherent unsinkability. Symmetrical 6-fold reflector array (per Galaxy: 6-Fold Symmetry) enables omnidirectional RCS with fabrication economy.

---

## PHASE 3 WORKFLOW

### **Step 2: Human Creates Preliminary Layout** ← YOU ARE HERE

**This step is CORE — AI cannot generate the initial layout.** Design layout is human engineering judgment.

#### What You Need to Provide

Choose one path:

**Option A: Hand Sketch (Recommended for speed)**
- Draw/sketch on paper or whiteboard
- Take photo or scan
- Provide dimensions and key mounting points
- Enough detail for AI to understand:
  - HDPE hull profile (cross-section view)
  - Mast/tower attachment (where, how)
  - Reflector mounting locations (plan view with coordinates)
  - Mooring attachment point (single vs. distributed)
  - Tow attachment (V-bridle or single point?)
  - How hull splits for transport (2 halves? bolted flange locations?)

**Option B: CAD Sketch (If you have CAD capability)**
- 3D model or 2D GA (General Arrangement)
- Top-down plan view
- Side profile (port elevation)
- Cross-section through mast
- Approximate material thickness notes

#### Reference Inputs

From Phase 2 (approved):

**Reflector System (from R-A06 to R-A09):**
- 10× triangular trihedral corner reflectors
- Edge length: 0.9m (per G2 OI-2 resolution, derated from 1.0m for conservative RCS)
- Peak RCS per reflector: ~410 m² (boresight)
- Mounting height center: ≥ 3.5m (R-A04)
- Array pattern: 360° omnidirectional (no blind spot)
- Weight estimate: ~250 kg (reflectors + mast) per R-B02

**Hull Structure (from R-B01 to R-B13):**
- HDPE PE100 closed-cell foam-filled ring
- Corrosion-free (5 yr + per R-B01 + R-B09)
- Unsinkable (foam + R-B04)
- Diameter 6.0m → high GM, stable platform
- Payload capacity ≥ 350 kg (R-B02)
- Max single module ≤ 3.0m (R-B05 — truck transport)
- Transport mechanism: **Bolted flanges (2 halves) selected in G2** — no welding required for assembly/disassembly
- Mast height: 3.5m above deck
- Freeboard (deck above WL): ≥ 0.40m (R-C03)

**Mooring (from R-D01 to R-D08) — Already Locked (G2 OI-4):**
- Through-hull chain pipe: **Option E (SS316 + HDPE compression tubes + UHMWPE pads)**
- Hold force: 125 kN minimum
- Depth: ≥ 50m capable
- Duration: ≥ 24 hours
- Attachment: Through-hull to ring interior, dual-sided for symmetry (mooring eye on deck)

**Towing (from R-J01 to R-J12):**
- V-bridle (2-point): Each point sees ~37 kN (64 kN total ÷ 2)
- Bridle attachment: Hull sides, symmetric
- Tow load path: Hull must be load-tested per R-J08

---

### **Your Task: Create Preliminary Layout**

**Timing:** This should take 1–2 hours for a hand sketch.

**Deliverables (Commit to Phase3-Embodiment/):**
1. **Hand sketch or CAD drawing** (PDF or image)
2. **Layout description** (text document with):
   - Reflector placement (10 locations, coordinates, heights)
   - Mast attachment method (bolted/welded, location)
   - Hull split location (bolted flange between 2 halves)
   - Mooring eye location (deck-mounted, single or dual)
   - Tow bridle attachment (hull side mounting brackets)
   - Any special design decisions (e.g., "reflectors fold down for tow" vs. "fixed")
   - Assumptions made

**Quality Bar:** Enough detail that an AI system can run DfX checks and spot manufacturing issues.

#### Guidance: C1 Design Decisions You Control

1. **Reflector Mounting Attitude:**
   - Fixed at boresight angle? (simplest)
   - Foldable (reduce tow drag)? (adds complexity)
   - → Galaxy: Flexibility La Output, Khong Phai Input — optimize for tow performance or simplicity?

2. **Mast Attachment:**
   - Central pole (axial load on top of hull ring)?
   - Tripod / braced frame (distributes load)?
   - → Galaxy: Backing Plate Rule — need backing plate at hull penetration

3. **Hull Ring Cross-Section:**
   - Solid HDPE ring with foam void inside (heaviest)?
   - Hollow HDPE pipe (lighter, risk: water ingress if damaged)?
   - → Morphological Matrix preferred: hollow pipe with foam-fill ensures buoyancy margin

4. **Transport Module Split:**
   - 2 halves (simpler bolted joint, larger piece ~3m at one point)?
   - 3 segments (easier to handle, more joints, 2.0m max width)?
   - → OI-5 from G2 is RESOLVED: 3 segments (120° arcs) to meet R-G03 (≤ 2.4m width)

5. **Mooring Attachment:**
   - Single eye (simpler, but eccentric loading)?
   - Dual eyes (symmetric, balanced)?
   - Through-hull or deck-mounted?
   - → G2 OI-4 locked on chain pipe, but placement is your call

---

### **Steps 3–8: AI-Driven Embodiment Analysis**

Once you provide the preliminary layout, I will execute:

#### Step 3: Maritime Auto-Invoke (P50 + P51)
Since this is a **maritime platform**, I will automatically run:
- **P51 Weight Estimate** — Bottom-up breakdown [L1-L5] confidence per subsystem
  - Structure, propulsion (none), electrical, payload (reflectors), outfit
  - Target ≤ 2,000 kg per R-B10 (stretch from 3,500 est.)
  - **P50/P51 GATE:** GM ≥ 0.5m ALL conditions + Weight ≤ SWL → PASS/FAIL decision

- **P50 Stability Check** — GM calculation for all loading cases
  - Lightship, half-load, full-load, worst-case recovery
  - Per your layout: hull diameter + freeboard + CG location → compute GM
  - Beam sensitivity at B_min, B_working, B_max
  - Worst-case trim (reflectors at stern extreme) + freeboard check

#### Step 3: DfX Review (5 Categories)
Systematic design-for-manufacturability, assembly, reliability, test, update (DfU):
- **DfM** — HDPE welding, sheet availability, tolerance stack
- **DfA** — Assembly sequence, fastener count, cable routing
- **DfR** — Sealing (IP rating), corrosion protection, MTBF
- **DfT** — Test points, functional test early
- **DfU** — Firmware update ports, AI model swap capability, computational headroom (mandatory for AI products)

#### Step 3b: PLAUSIBLE 9-Check
Cross-check embodiment against 9 dimensions (Physics, Logic, Assumptions, Units, Scale, Integration, Boundary, Lethality, Endurance).

#### Step 4: Integration Check
Verify interfaces against ICD v2 (from Phase 0):
- Mooring interface (chain pipe through-hull)
- Tow interface (bridle attachment brackets)
- Reflector mounting (load path to hull)
- Electrical harness routing
- Thermal dissipation

#### Step 5: Human Resolves Trade-Offs
For each DfX WARN/FAIL, AI proposes options with trade-offs. You decide.

#### Step 6: Cross-Domain Sync (S5)
Confirm first hardware available date, what AI can test on hardware, ICD v3 freeze readiness.

#### Step 7: Draft BOM
Component list with Vietnam vendors, cost estimates, lead times.

#### Step 8: Compile Phase 3 Deliverables
- DfX_Review.md
- Integration_Check.md
- Design_Decisions.md (your resolutions)
- BOM_Draft.md
- ICD_v3.md (frozen interfaces)

Update Status.md → Phase 3 complete, ready for Gate 3.

---

## OPEN ITEMS FROM G2 (Still Active)

| # | Item | Priority | Status | Dependency on Phase 3 |
|:--|:-----|:--------:|:---------|:---|
| OI-1 | **HDPE weld test coupons** | HIGH | **Pending (CEO action)** | Phase 3 layout must specify weld joints → coupon test plan derived from layout |
| OI-6 | ICD v0 → v1 update | Medium | Pending | Phase 3 Integration Check → triggers ICD v3 freeze (v2 already done) |
| OI-7 | Tow trial planning | Low | Pending | Phase 3 layout + P50 stability → tow trial test plan |

**Gate 3 Prerequisite:** OI-1 (coupon coupons) **must have test results** before Phase 4 lock. Start procurement now.

---

## Next Action

**FOR YOU (Human — Core):**
1. Review C1 concept summary above
2. Create preliminary layout (hand sketch or CAD)
   - Save to `Phase3-Embodiment/01_Preliminary_Layout.[pdf/jpg/dwg]`
   - Add `02_Layout_Description.md` with dimensions + design decisions
3. Respond with layout + description

**FOR ME (AI — Offload):**
Once layout received:
1. Run P50 (Stability Check) + P51 (Weight Estimate) → gate pass/fail
2. Execute DfX Review (5 categories + PLAUSIBLE 9)
3. Integration Check vs ICD v2
4. Trade-off options for any issues
5. Draft BOM with Vietnam vendors
6. Compile all to Phase3-Embodiment/ folder

---

## Phase 3 Folder Structure (Ready)

```
1_Projects/VN-AST-MSL-001 Towed Target/Phase3-Embodiment/
├── 000_Phase3_Initiation_Guide.md          ← YOU ARE HERE
├── 01_Preliminary_Layout.[pdf/cad]         ← AWAIT YOUR INPUT
├── 02_Layout_Description.md                ← AWAIT YOUR INPUT
├── P50_Stability_Check.md                  ← AI OUTPUT (after layout)
├── P51_Weight_Estimate.md                  ← AI OUTPUT (after layout)
├── DfX_Review.md                           ← AI OUTPUT (after P50/P51 PASS)
├── Integration_Check.md                    ← AI OUTPUT
├── Design_Decisions.md                     ← HUMAN CHOICE / AI PROPOSE
├── BOM_Draft.md                            ← AI OUTPUT
├── ICD_v3.md                               ← HUMAN APPROVAL / AI DRAFT
└── [existing from G2]
    ├── F4_Mooring_Hull_Interface_v1.0.md
    └── OI5_Transport_Module_Verification_v1.0.md
```

---

## References (Ready from Phase 2)

- **Morphological Matrix v1.0** — C1 sketches, working principles, compatibility analysis
- **VDI 2225 Evaluation v1.0** — C1 VDI score 86.8%, zero weak spots, risk register (HDPE weld QC = top risk)
- **Requirements List v2.0** — 103 requirements baselined (A–K domains)
- **G2 Resolution OI-2** — RCS derated 1.0m → 0.9m edge, σ_peak still 4,095 m² (exceeds R-A01a)
- **G2 Resolution OI-3** — Stability: GM = 12.234m, all loading cases PASS, IMO 2008 compliant
- **G2 Resolution OI-4** — Mooring Option E locked: SS316 through-hull pipe + HDPE compression tubes, ESC = 0
- **G2 Resolution OI-5** — Transport: 3-segment ring (120° arcs) meets R-G03 (≤ 2.4m width, ≤ 1,000 kg module)

---

## Success Criteria for Phase 3

✅ Layout sketch/CAD provided with dimensions + design decisions
✅ P50/P51 GATE PASS (stability + weight)
✅ DfX REVIEW PASS (no critical FAILS)
✅ PLAUSIBLE 9-check PASS (no lethality flag)
✅ Integration Check verifies all ICD v2 interfaces are achievable
✅ BOM lists all components with Vietnam vendors + lead times
✅ ICD v3 frozen (human approval on interfaces)
✅ OI-1 (HDPE coupon) procurement plan derived from layout
✅ Status.md updated → ready for Gate 3

---

*VN-AST-MSL-001 Phase 3 Initiation Guide | 2026-03-19*
*"From concept to embodiment: layout, DfX, BOM, go."*
