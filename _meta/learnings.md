# Agent Learning Log

> Cross-session compound learning. Agent appends after significant tasks.
> Read at session start to build on previous work.

[2026-04-22] [RE v3.0] — FIELD mode (RE own products) = highest ROI vì zero hardware cost, 1064 units field data → feeds MAINT-KIT pricing + next-gen product definitions. Run FIELD trước external RE.
[2026-04-22] [Multi-Agent] — CEO-Hub topology = architecturally optimal cho small team (5.5% error drop vs 23.7% linear) → giữ one-block-per-turn, thêm multi-perspective TRONG block, KHÔNG thay đổi CEO checkpoint architecture.
[2026-04-22] [RE Stallion] — RE Paradox Law: study complex (tilt tricopter) → build simple (quadplane) = informed trade-off. Study complex vì ignorance ≠ study complex rồi chọn simple vì judgment. VDI 2225 quadplane thắng 4/5 scenarios.
[2026-04-22] [SBCE] — Parallel morphological matrix (3 domain agents explore WPs independently → merge) tìm 15-25% nhiều intersection solutions hơn sequential single-agent. Áp dụng cho BB (Search) + BD (Risk) blocks. KHÔNG áp dụng cho B0 (simple) + BE (CEO decision).

[2026-04-20] SESSION 76 — RE Simsek-K MECHA Pipeline (Stages 0→3, Concept D selected):

**Insights:**
- [PX4-over-ArduPilot-sovereignty] — PX4's POSIX-compliant architecture on FreeRTOS/NuttX allows Workshop X to write proprietary Vietnamese kamikaze terminal-dive logic as isolated, non-GPL modules. ArduPilot's monolithic ChibiOS codebase makes IP isolation legally difficult. → For ANY defense product requiring proprietary algorithms on open-source base: always choose POSIX-modular (PX4) over monolithic (ArduPilot).
- [dual-use-structural-gift] — Simsek-K was designed as loitering munition from day 1 (not target adapted to weapon). FoS > 1.5 for 15g RATO + kamikaze dive = structural margins FAR exceed pure target requirements. This over-engineering is a gift for WX: domestic VARTM composites with lower fiber fraction can still meet target-only structural requirements because original design has excess margin. → When RE reveals dual-use intent, check if the "secondary" mode's structural requirements EXCEED the primary mode's requirements — the delta is your manufacturing tolerance budget.
- [FADEC-CAN-solution-determining] — The single sub-function that determines concept viability = SF-09 (FCC software architecture) + SF-02 (FADEC CAN-bus integration). If latency > 10ms on CAN bus during throttle commands at Mach 0.63, engine suffers compressor stall = total loss. This MUST be physically verified via HIL bench BEFORE any flight test. → For any mechatronic product with high-RPM turbomachinery: prove control-to-engine latency budget FIRST. This is the "binding constraint" equivalent in control systems.

[2026-04-14] SESSION 70 — VN-CUAV-SIM-001 ICDM Pipeline CEO Review (B0→BE):

**CEO Corrections:**
- [solution-free-discipline] — AI wrote "pneumatic ≥25N" throughout BA/BB/BE when CEO specified "≥25N" as performance target. BC (Solution-Free Verification) passed but the very documents it verified had already been contaminated with solution-specific language. CEO caught: requirement = "≥25N", solution = TBD Phase 2. → Requirements must NEVER name a technology (pneumatic, solenoid, electromagnetic). State the performance target only. Check BC compliance BEFORE writing downstream blocks, not after.
- [one-block-per-turn-all-pipelines] — AI ran BB→BC→BD→BE in one turn without CEO checkpoint between blocks. CEO already established this rule for HELIX mega-skills (S69) but AI didn't apply it to ICDM pipeline. CEO had to re-review all 6 blocks from B0. Cost: full review cycle that could have been incremental. → Rule applies to ALL multi-block pipelines (HELIX, ICDM, FORGE, any sequential pipeline). After each block: present findings, flag decisions, STOP. No exceptions.

[2026-04-12] SESSION 66 — V5-MOTORIZED Phase 2 ICDM Pipeline (first complete run):

**Process:**
- [ICDM-complete-inputs] — First ICDM pipeline with 21/21 inputs (Phase 1 EQFD/CSR/WTP + FORGE HOQ + Phase 0 RE). CSR-weighted DQM evaluation produced quantitative concept ranking that survived sensitivity analysis (±5% weight perturbation → A always wins). Complete inputs = trustworthy output. → Never run ICDM without CSR functions + Group A/B split from Phase 1.
- [linear-actuator-trap] — Concept C (linear actuator for elevation) looked clean on paper but firming-up killed it on 3 fronts simultaneously: (a) el speed 28°/s < 30°/s target (COTS actuator too slow), (b) manual fallback degraded (screw friction), (c) actuator sees 50 kN axial recoil at high elevation (COTS rated 2-10 kN). Lesson: linear-to-rotary conversion adds hidden constraints. → Always check: speed at moment arm, back-drivability for fallback, force decomposition at extreme angles.
- [KG-convergence] — Same physical measurement (V1 worm shaft = KG-3) unblocks BOTH V5 BE concept selection AND N12 BC concept evaluation. One 30-minute disassembly serves two product pipelines. → Look for shared knowledge gaps across variants before ordering separate tests.

**CEO Corrections:**
- [carry-over-bias] — AI assumed F7.1 (az coupling) confirmed for V5 because CEO confirmed it for N12. CEO caught: "F7.1 - CEO no confirm." V5 is a NEW product — decisions don't carry over between variants without explicit confirmation. → Never inherit CEO decisions across variants. Re-validate each.

**Numbers:**
- 8 deliverables created in Phase2-Concept/V5-MOTORIZED/
- 52 WPs across 16 morpho rows, 4 concepts → 2 surviving (A recommended, B contingency)
- DQM: A=99%, B=94.5%. CFMA Rev SFD: A=111, B=173. TTM: A=8wk, B=10-11wk.
- P1 bench test components ORDERED — first physical action for V5/N12 motor program.

[2026-04-14] SESSION 68 — VDI 2206 Deep Research + HELIX System Architecture Integration + VN-XUONG-UUV Retro SA:

**Process:**
- [VDI-2206-layers] — VDI 2206 sits ABOVE VDI 2221, not beside or replacing it. System-level architecture (cross-domain) → domain-specific execution (P&B 4-phase). HELIX pipeline had this gap for 2+ years: no formal system design step between Phase 1 function structure and Phase 2 concept search. → Created `/helix-system-arch` skill (6 steps, 3 modes: FULL/QUICK/RETRO). Augmented 3 existing skills (p1-compile routing, p2-preflight verification, p3-integrate mode detection).
- [genset-kill-cascade] — 1 CEO decision (kill genset → battery-only LARS) cascaded through entire VN-XUONG-UUV architecture: -290 kg weight, -$43K cost, EMC risk R4 eliminated, silent LARS ops (tactical advantage), ELEC simplified 8→6 SFs. Validates [[Solution-Determining SF]] — a single component decision restructures the whole system. This is why system architecture must be established BEFORE Phase 2 concept search.
- [retro-shadow-assumptions] — Running /helix-system-arch --retro on VN-XUONG-UUV (already in Phase 2) found 7 shadow assumptions never documented. 2 are HIGH risk: (a) 24VDC marine winch 10 kN may not exist commercially, (b) UUV controller power spec unknown (BLOCKING). Without retroactive SA, these would surface at Phase 3 integration — 10× more expensive to fix. → Retroactive mode pays for itself even on advanced projects.

**Skills Created/Upgraded:**
- NEW: `/helix-system-arch` — VDI 2206 System Design for mechatronic products (SA0-SA6, FULL/QUICK/RETRO modes)
- UPGRADED: `/helix-p1-compile` — added Step E4b Mechatronic Routing
- UPGRADED: `/helix-p2-preflight` — added System Architecture verification check
- UPGRADED: `/helix-p3-integrate` — added Step C0 Integration Mode Detection (VERIFICATION vs DISCOVERY)

**Galaxy Notes (+4):**
- #130: Concern Logic — V-Model Là Trình Tự Logic Không Phải Timeline
- #131: Three Strands — Orange Core + Yellow Requirements + Blue Modeling
- #132: MBSE-CAx Gap — SysML Không Mô Tả Được Hình Học Giải Pháp Cơ Khí
- #133: Siloed Engineering Trap — Tích Hợp Muộn = Tích Hợp Đau

**Research:**
- NLM notebook `vdi2206` (13 sources, 77% pro ratio)
- RESEARCH_VDI_2206_V-Model_Mechatronic_CPS_2026-04-12.md saved
- 12 ★★★ insights, 4 ★★, 2 ★

[2026-04-12] SESSION 67 — Firming-Up Skill + VDI 2221 Deep Research + AD Integration:

**Process:**
- [CRUMPLE-S-validated] — `/helix-p2-firmup` first real test on V5-MOTORIZED: 6 cheap calcs ($0, 12h) caught 2 show-stoppers (C ball screw 573N = 11× target, B sector tooth SF=0.88). P&B escalation rule "start cheap" saved weeks of bench test on dead concepts. → CRUMPLE-S method selection matrix works as designed.
- [AD-coupling-filter] — Axiomatic Design Independence Axiom integrated into Phase 2 pipeline as Step C1.5. FR×DP design matrix (30 min Excel) catches coupled designs BEFORE firming-up investment. VN-MGM-V5 Concept C = textbook coupled design (1 DP serving 2 incompatible FRs). → Filter Before Score = new standard step.

**Skills Created/Upgraded:**
- NEW: `/helix-p2-firmup` — standalone block skill, CRUMPLE-S method-guided, NLM-audited vs P&B 6.5.1
- UPGRADED: `/research` v3.1 — Source Quality Gate (Step 4G) + `--update` mode
- UPGRADED: `/learning` — Source Quality Gate (Step 1G) + `--mode update`
- UPGRADED: `/helix-p2-develop` — Step C1.5 AD Coupling Check added
- UPGRADED: `/helix-concept-generate` — orchestrator updated for BC2 + C1.5

**Galaxy:**
- #127: V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử
- #128: SME Adoption Paradox — Học Thuật Thống Trị, Thực Hành Thưa Thớt
- #129: Filter Before Score — AD Lọc Coupling Trước Khi VDI 2225 Chấm Điểm

**Research:**
- VDI 2221 deep research: 19 sources → 25 sources (--update), 5 Galaxy candidates → 3 promoted
- AD Independence Axiom: Three Laws extracted, pipeline change implemented

**Numbers:**
- 5 skills created/upgraded, 3 Galaxy notes, 2 research outputs, 1 learning output
- VN-MGM-V5 BC_Firming_Up.md: 6 Offload tasks complete, 3 Core pending (bench test)

[2026-04-10] SESSION 64 — VN-MGM FORGE+HELIX Pipeline + P&B Audit:

**Process:**
- [FORGE-before-HELIX] — FORGE pipeline (/forge-job-map, shift, cost, scout) MUST run before /helix-task-clarify. Without FORGE → Phase 1 missing customer outcome data (ODI), cost envelope, ACH assessment. CEO caught this gap when AI skipped straight to task-clarify. → Always check for Phase0-Forge/ inputs in Step 1.5
- [one-block-per-turn] — AI ran B0→BE in single turn without CEO checkpoints. Violates P&B iterative review principle. CEO enforced: execute 1 block → STOP → wait CEO approval. Even "chạy hết" = still stop with minimal checkpoint. → Hardcoded in 3 mega-skill SKILL.md files + feedback memory saved
- [variant-subfolder-convention] — Multi-variant products need Phase*/VARIANT-NAME/PREFIX_filename.md pattern (matching Phase0-Plan). Without this, V1/V5/N12 files mixed in same folder = confusion. → Applied to task-clarify, concept-generate, embody-realize

**P&B Compliance:**
- [pb-audit-method] — Spawn 3 parallel audit agents (Sonnet) reading Ch5/Ch6/Ch7 source + SKILL.md → gap reports. Effective: 3 audits in ~3 min vs sequential ~10 min. Coverage: task-clarify 46%, concept-generate 70%, embody-realize 17%. → Embody-realize = highest priority fix (DfCorrosion missing from --maritime!)
- [two-channel-ach] — VN-MGM ODI reveals Channel A (physical: motor/gyro) vs Channel B (information: sensor/AI) with ZERO overlap. Cleanest ACH separation possible. All ACH is ADDITIVE — base product works without AI. → Apply Two-Channel analysis to every new ACH assessment

**Numbers:**
- 34 files created across Phase0-Forge + Phase1-Task + Phase2-Concept for VN-MGM (V1 + N12)
- 3 skill upgrades × 4 changes = 12 surgical edits to HELIX mega-skills
- P&B audit: 85 ✅ / 43 ⚠️ / 39 ❌ across 3 skills → prompts saved for fix sessions

[2026-04-09] SESSION 62 — Portfolio Expansion Sprint (Musk + Hwang):

**Framework:**
- [portfolio-expansion] — Musk First Principles + Hwang Disruptive Innovation = repeatable `--ex` flag for /plan. 3 lenses: strip labels→physics, non-consumption scan, cross-pollination. Proven on 3 product lines. → /plan skill upgraded to v5, codified in plan.md
- [first-principles-reframe] — Stripping product labels to physics-level function expands addressable market 30-50%. "LARS" → "marine heavy-object transfer" (+5 variants). "C-UAV sim" → "motor skill training platform" (+5 products). → Apply to every new product line at portfolio stage
- [razor-blade-model] — AICC hardware margin modest ($255K/5yr) but IRONMESH subscription = $7.7M. HW is distribution vehicle for SW recurring revenue. → Evaluate subscription model for every platform product (VN-CUAV-SIM AAR-SaaS, BB-01 CORTEX)
- [ironmesh-absorption] — 15 original IRONMESH products → only 2 genuinely new (VN-MGM, TARGET-DRONE-001). 5 absorbed by evolved product lines, 6 archived. Lesson: portfolio naturally consolidates over time. Freeze Order was right to focus, but reframe was overdue. → Periodic portfolio audit (quarterly) to detect absorption

**Decisions:**
- [project-reprioritization] — 6→4→8 active projects in one session. VN-12.7MM-SIM absorbed by CUAV-SIM MWI. ACH-Thesis paused. VN-CUAV-SIM promoted T1. VN-AICC reactivated. IRONMESH unfrozen. → Musk Sequence still applies: sequential, not parallel. 8 projects ≠ 8 parallel efforts.
- [cross-product-ecosystem] — 4 product lines form closed loop: train (CUAV-SIM) → measure (BB-01) → target (VN-AST) → correlate (HYBRID-BRIDGE) → control (VN-AICC). No competitor owns all 5. → This ecosystem IS the moat. Protect cross-product integrations.

**Numbers:**
- 31 total products across 4 lines. $23.6M/5yr combined [L5]. 12 docs created, 10 updated.
- Platform ROI: XUONG 365%, CUAV 294%, BB-01 393%, AICC 113% (51,000%+ including subscription)

[2026-04-09] SESSION MEGA-SUMMARY — Skill consolidation + /plan framework built + 2 projects planned + 148 research sources:

**Skill Infrastructure (session start):**
- 45→25 skill items consolidated. 0→21 executable Claude Code commands (.claude/commands/)
- Taxonomy: MAKE(10) CHECK(4) THINK(8). Hooks: MAKE:THINK ratio tracking + Analyst Trap auto-warning
- NLM pipeline: 4 commands (/research, /nlm-query, /skill-upgrade, /first-principles)
- /req upgraded: +IFR +TVDT +Stakeholder +Standards (6 steps, was 2)

**VN-CUAV-SIM-001 (session middle):**
- /req v2.0 (102 reqs, Gate 1 APPROVE 3.70), /plan retroactive (test + 3-layer audit)
- 7 QC FLAGS found → all resolved. 4 deep research (SS2-SS5, 90 sources)
- Reverse MC: 6 competitors × 5 subsystems
- Portfolio Planning: 4 variants (LITE/FIXED/FULL/CORTEX), 5yr $5.9-8.2M [L4]

**BB-01 LOMAH (session end):**
- /plan retroactive + 3 research gaps (G1-G3, 58 sources)
- Contact piezo = orthogonal patent space. GCC-PHAT + Chan TSWLS. Simultaneous ADC hard constraint.
- Concept A selected (3.67/4.0). Product Proposal v2 P&B compliant.

**Skill evolution:**
- /plan: v1→v4 (SOLO/TEAM mode, PRODUCT/PORTFOLIO scope, §3.2 research-first 5a→5b→5c, v3.0 schema, /qc mandatory, /review-plan feedback loop, output artifacts, FORGE+HELIX integration)
- /morpho: +Step 0 RE audit (6-layer knowledge priority, competitor RE before ideas)
- /research: +NLM 4-option decision (NEW/UPDATE/FILE/CROSS-QUERY), +ingestion report
- /review-plan: NEW skill (8 P&B compliance checks, feedback loop: COMPLIANT→FLAG fix→FAIL /plan --fix)
- Key principle proven: "No brainstorming without bibliography" + "Ideas ONLY after research gaps closed"

**P&B §3.1 compliance lesson (CEO caught):**
- Functions must be solution-neutral (WHAT not HOW)
- Requirements must not name technology/brand
- Sacred Constraints must be physics/safety/budget — not technology choices
- Product Proposal = Phase 0 output, must NOT contain Phase 2-3 specs
- Cross-document consistency degrades over time — /review-plan catches this

[2026-04-09] SESSION 63 — Portfolio Completion Sprint (8 product lines × --ex):

[2026-04-10] SESSION 64 — VN-MGM Deep Dive + Strategic Reassessment + /req Upgrade:

[2026-04-10] WX = $3-6M defense manufacturer, NOT startup: CEO revealed 1,064 HW units + 8 sim systems shipped. Completely changed all portfolio analysis. 6/8 product lines = UPGRADES of shipped products, not new products. Revenue projections shifted from [L5-ASSUMPTION] to [L3-L4] (built from proven demand). → Memory saved. All future sessions must reference production history.

[2026-04-10] VN-AICC subscription $22.3M → $1.49M (SaaS hockey stick ≠ defense reality): Original subscription projection used 3,180 units × $3,500/yr for solo-engineer pre-revenue company = [L6-FANTASY]. Corrected to 660 units × $200-800 weighted avg = $1.08M/5yr subscription + $413K hardware = $1.49M total. Lesson: subscription revenue for defense companies must use 12-18 month sales cycle + solo-engineer capacity as constraints, NOT SaaS growth curves. CEO audit caught this → proves "Phán đoán không thể uỷ thác cho AI."

[2026-04-10] N12-RETROFIT trước V5-MOTORIZED — retrofit installed base before building new: For 300 V1 deployed, N12 ($3-6K kit) conversion 15-25% = 45-75 kits = $200-340K. V5 ($10-18K new) conversion 5% = 15 units = $210K. N12 wins: lower NRE ($10K vs $50K), faster revenue (8 wk vs 15 wk), higher adoption (3× cheaper), NO tàu vào cảng, N12 revenue funds V5 NRE, N12 field experience informs V5 design. Sequence changed: V1→N10→N12→V5 (was V1→...→V5→N12).

[2026-04-10] /req mega-skill upgrade — P&B §5.1-5.4 full compliance: Old /req had 4 steps, 8 columns, 4 audit checks. New mega-skill: 7 steps, 12 columns (+W Grade W+/W/W-, +Kano Basic/Perf/Attr, +Resp., +Changed), 7 audit checks (+solution-neutral, +W grading, +"obviously necessary" 14-item checklist), CFMA failure-derived requirements, partial requirements consolidation, change control metadata, [INHERITED]/[NEW]/[COMPAT] tags for variant products, 10 anti-patterns, 5 HITL gates. First test: V1 retroactive (72 reqs, 90% quantified, all [L1-FIELD]).

[2026-04-10] V1 base requirements retroactive = most valuable requirements list: 300-unit [L1-FIELD] evidence > any analysis. Every V1 requirement is PROVEN (not designed). When generating V5/N12 requirements, INHERIT from V1 base with clear tags. TVDT shows 0 technology gaps for V1 (TRL 9). This becomes the GOLD STANDARD for all VN-MGM variant requirements.

[2026-04-10] MAINT-KIT N10 = highest ROI product in entire WX portfolio: $1-2K NRE → $184K/5yr = 9,200%+ ROI. Core IP = 12-point maintenance CHECKLIST (quy trình > spare parts). Customer buys process confidence, not just grease + bolts. 2 variants: N10-A (12 tháng, $200-400) + N10-B (6 tháng, $100-200). Future: N10-M motor add-on for N12/V5. Bundle free N10-A with new V1 orders → create maintenance habit → recurring purchases.

[2026-04-10] Checklist = core IP — process > parts: No competitor sells maintenance checklist for VN Navy weapon mounts. WX OWNS the procedure. "Trước/Sau" photo card (good vs bad condition) = most valuable item in kit — not the grease. Teaching customers HOW to maintain = creates dependency on WX quality standard.

[2026-04-09] IRONMESH Product-First Law: Platform code should be EXTRACTED from working products, never built in isolation. CEO chose Option 3 (product-first) over full architecture (Option 2) or MVP platform (Option 1). Rationale: solo engineer cannot afford parallel platform engineering. Platform emerges when ≥2 products share same module in production AND code duplication is measurable AND interface is stable AND CEO judges extraction < duplication cost. IRONMESH moved from 1_Projects/ → 2_Areas/FORGE/ (governance artifact, not project). → Quarterly extraction trigger review defined, 7 modules tracked, 0 triggered.

[2026-04-09] VN-AICC Subscription Fantasy Trap: Original $22.3M/5yr subscription projection was [L6-FANTASY]. Installed base 3,180 units × $3,500/yr avg for solo-engineer pre-revenue defense startup = impossible. Revised to $1.08M/5yr (660 units × $200-800 weighted avg). Lesson: SaaS hockey-stick growth curves do NOT apply to defense companies with 12-18 month sales cycles and 1-person production capacity. Hardware revenue ($413K) is solid floor; subscription is realistic upside. → All future revenue models must use defense sales cycle + solo-engineer capacity as constraints. CEO audit caught this — proves "Phán đoán không thể uỷ thác cho AI."

[2026-04-09] VN-USV-SS-001 was missing from active project list — discovered when CEO requested /plan. Project existed since 2026-03-17 with extensive FORGE pipeline (8/8 skills) but was never added to progress.md active table during Session 62 reorganization. Physical gate was 8 days overdue (2026-04-17). → Reset to 2026-05-09. Lesson: when reorganizing portfolio, scan ALL project folders, not just the ones discussed.

[2026-04-09] Design paradigm naming per product line — each product's core physics constraint now named: ACOUSTIC (BB-01), SIGNATURE (VN-AST, TARGET-DRONE), FORCE (VN-MGM), STEALTH (VN-USV-SS-001), Human Motor Skill (VN-CUAV-SIM), Human-AI Interface (VN-AICC), Marine Heavy-Object Transfer (VN-XUONG). Naming the paradigm prevents solution drift — every design decision should reference back to the paradigm constraint.

[2026-04-09] --ex completion: all 8 product lines now have Musk + Hwang portfolio expansion. Total: 79 products, $29.5M/5yr [L5]. Consistent pattern across all lines: Layer -1 (consumable/foam) + Layer 0 (core cell/OEM) + Layer 1 (product variants) + Layer 2 (new markets). N10-MAINT-KIT archetype ($200-500 annual consumable, near-zero NRE, 75-80% margin) appears in 4/8 product lines — universal razor-blade pattern for installed base monetization.

[2026-04-09] BB-01 LOMAH /plan complete (Step 5a→5b→5c→Step 6): 3 research gaps (G1 competitor RE 16src, G2 TDOA 23src, G3 IP65 housing 19src = 58 sources total). Key discoveries: (1) WX contact piezo = orthogonal patent space vs all competitors (airborne acoustic), (2) GCC-PHAT + Chan TSWLS = optimal algorithm, (3) simultaneous ADC is HARD CONSTRAINT — STM32 sequential NOT suitable → ADS8688, (4) temp compensation mandatory (66mm error uncorrected), (5) rain immunity = #1 VN tropical differentiator, (6) subsonic detection = uncontested gap at ≤$5K. Concept A (Contact Piezo Clip-on) selected 3.67/4.0 — zero weak spots. Concept C (hybrid) deferred to v2. FTO: EP2040025A1 (EU, safe VN domestic) + KR101997387B1 (Korea). /plan Step 5a→5b→5c enforcement validated: ideas generated ONLY after all 3 research gaps closed.

[2026-04-09] /plan v3 output spec: added Output Artifacts section (master doc + Product Proposal as separate formal handoff), file structure (Phase0-Plan/ folder), FORGE pipeline integration (/odi, /shift, /portfolio feed from Product Proposal), HELIX pipeline integration (Product Proposal → /req → /morpho → /eval), data flow diagram BRIDGE↔FORGE↔HELIX, 6 diagram types to generate. Key insight: Product Proposal = BRIDGE document between strategic planning and engineering execution. Previously /plan output was conversation-only (not saved). Now mandates 2 files + diagrams.

[2026-04-09] VN-CUAV-SIM-001 §3.2 deep research completed: 5 deliverables (D1-D5), 90 sources total across 4 subsystems. D1: Reverse MC (6 competitors × 5 SS — proven combos + uncontested gaps). D2: SS2 Display (30ppd military threshold — 3×FHD marginally meets, Optoma ZU607TST recommended $10.5K). D3: SS3 Motion (2-DOF validated, JONSWAP γ=2.0 for VN waters NOT 3.3, washout algorithm + heave injection, $2.5-3.5K). D4: SS4 UAV (BT architecture for 5 UAV + 3 USV types, FPV kamikaze profiles from Ukraine, Houthi Toofan-1 USV specs, ⚠ FTO US9816783B1 patent). D5: SS5 AAR (lead angle error = #1 metric, ⚠ FTO WO2015142940A1 InVeris coaching patent → design-around with threshold rules, Detached-Displacement Correction mandatory for moving targets, adaptive difficulty 46% error reduction). Key Three Laws candidates: "Psychological Fidelity > Physical Fidelity", "Scripted Target = Near Transfer Only", "30 PPD Threshold". §3.2 pipeline proven: RE first → research gaps → /research --deep parallel → 4 agents, total ~30 min.

[2026-04-09] §3.2 Research-First Rule embedded into /morpho + /plan: Step 0 Research Audit added to /morpho — for each sub-function, check existing RESEARCH_ files (16), NLM notebooks (15), project RE docs BEFORE proposing working principles. No research → /research --deep mandatory (CEO can override with [L2-PROTOTYPE] experience). Every matrix option now tagged with source: [RESEARCH: file], [NLM: alias], [WX: project], [L5-ASSUMPTION]. Options tagged [L5-ASSUMPTION] = higher risk flag in /eval. Same rule added to /plan Step 5. Key principle: "No brainstorming without bibliography" — P&B §3.2 Conventional Methods (literature, existing systems, analogies) run BEFORE intuitive/discursive methods.

[2026-04-09] /plan upgraded v2: 3-layer audit (P&B compliance 9/12→12/12, S1-S5 3/5→5/5, QC Gate 7 FLAGs identified). Added: v3.0 schema (CONSTRAINTS/SUCCESS_CRITERIA/FALLBACK_PROTOCOL), per-step HITL triggers (6 embedded checkpoints), Step 6.5 s-Diagram (Rt vs Re, §3.3), Step 9 mandatory /qc gate before CEO approval, §3.2 solution method traceability checklist, Objectives Tree reference for complex products. Key lesson: QC Gate (P44) MUST run on AI-generated planning outputs — not just design outputs. Defense AI QC applies to ALL AI output in the pipeline.

[2026-04-09] /research-to-skill: P&B Ch3.1-3.3 → /plan command created. Sources: Ch3.1 7-Step Product Planning, Ch3.2 Solution Finding Methods, Ch3.3 Selection & Evaluation. Gap analysis: Need-Strength Matrix, Portfolio Matrix, Ansoff Matrix, 3D Idea Space, A-F Selection Chart, Objectives Tree — all MISSING from EDS Phase 0. Created /plan (MAKE tier) as unified Phase 0 workflow: stimulus→situation→portfolio→ideas→selection→proposal→gate0. WX adaptations: solo CEO (no brainstorming/Method 635), added sovereignty/local-content to selection weights. Total commands: 20 (.claude/commands/).

[2026-04-08] Skill consolidation + upgrade: 45→25 skill items, 0→19 executable Claude Code commands (.claude/commands/). Taxonomy: MAKE(8) > CHECK(3) > THINK(8). 5 duplicates deleted, 5 superseded skills archived. Hooks upgraded: track-skill-usage.sh logs MAKE/CHECK/THINK tier, session-briefing.sh warns when THINK>MAKE (Analyst Trap auto-detection). /req upgraded via /skill-upgrade: +Step 0 Stakeholder Mapping (P12), +Step 0.5 IFR Sacred Constraints (TRIZ-adv), +Step 1.5 TVDT Value Decomposition (Weiss 2015), +Step 3 Standards Quick-Map, +Output Structure template, +Anti-Patterns section. Pipeline: surgical Edit (4 insertions, 0 existing content modified).

[2026-03-26] VN-XUONG-UUV R5 REDESIGN — Major architectural change: recovery FROM ramp-winch TO alongside+davit (PD-11 NEW). PD-2 revised: genset LOẠI BỎ → battery 24VDC only. PD-10 v3: V-saddle → 3 V-blocks on rails + tail overhang (zero fin/prop contact). Cost $517K→$365K (-29%), 8 CFMA critical modes eliminated, genset SPOF removed. PD-9 FINAL: head-first confirmed 4 lần (cable exit → fins>saddle → turn-around risk → cable bend radius). CEO caught 2 practical constraints AI missed: (1) UUV 180° turn with 25km tether = tangle, (2) fiber optic bend radius at ramp lip. Galaxy #125 Cognitive Obesity, #126 Cable Bend Radius Law. Catamaran Concept D PARKED after research (recovery 550kg between hulls = no precedent at this scale). Research-to-skill pipeline: Step 1.5 CEO NLM Review gate tested 3× successfully.

[2026-03-26] EQFD (Enriched QFD) COMPLETE (/research-to-skill UPGRADE): 16 sources (6 Tier S, 5 Tier A, 4 Tier B, 1 Tier C), 15 ingested to NLM eqfd notebook. forge-job-map HOQ section UPGRADED: (1) EQFD simplification principles (15-20 needs × 20-25 DPs, single best competitor), (2) 4-level roof symbols (++/+/-/-- replacing +/0/-), (3) Competitive benchmarking (right wall customer 1-5 + bottom technical values), (4) CDTC Conceptual Design to Cost (Hari 2008 — cost as DP, Pareto ≤9 factors, WTP Essential/Beneficial/Luxurious), (5) Defense AHP prioritization (Goderstad & Haskins 2016 — pairwise Saaty 1-9, CR<0.10), (6) 4-phase QFD cascade reference (HOQ-1→2→3→4). Key insight: EQFD TVDT = already exists in helix-task-clarify Step 5.5 (validated independently). Sources: Hari & Weiss 2015 (EQFD), Hari 2008 (CDTC), Goderstad & Haskins 2016 (defense QFD), DoD Producibility Guide 2024.

[2026-03-26] CFMA Deep Research COMPLETE (/research-to-skill UPGRADE): 15 sources (8 Tier S, 4 Tier A, 3 Tier B), 19 ingested to NLM cfma notebook. 6 gaps filled across 3 HELIX skills: (1) helix-concept-generate Step 5.5 UPGRADED — failure mode taxonomy (5 categories: A-mechanical, B-electrical, C-training fidelity, D-ACH/AI, E-environmental VN), 6-flow propagation cascade check, S≥9 mandatory action rule from MIL-STD-1629. (2) helix-embody-realize Step 3c NEW — CFMA→DFMEA transition (carry S, re-evaluate O/D, MIL-STD-1629 criticality optional). (3) helix-task-clarify Step 6.5 NEW — Requirements Risk Assessment (FCR 1-5, single-point-of-failure identification). Key sources: Weiss & Hari 2015, Tumer & Stone 2003 (FFDM), Kurtoglu & Tumer 2008 (FFIP), Genter 2024 (INCOSE), MIL-STD-1629A. Pipeline with new Step 1.5 CEO NLM Review gate tested successfully.

[2026-03-26] TRIZ Advanced COMPLETE (11/11 tools): Steps 2.5+3 finished. 3 surgical edits: (1) helix-concept-generate Step 1c TESE — 8-trend evolution scorecard before morphological matrix, defense constraints on Trends 7/8, (E)-tagged WP generation. (2) helix-task-clarify Step 4.5 IFR — 4-step ideal final result with Sacred Constraints gate (defense can't-eliminate list), resource substitution table, physical contradiction resolution. (3) helix-embody-realize Step 5.5 Trimming — 6 rules (A/X/B/C/D/E) with Cannot-Trim defense gate, functional analysis → trim decisions → BOM reduction. WX adaptations: Sacred Constraints (IFR), Cannot-Trim list (Trimming), defense ceiling on Trends 7/8 (TESE). All 3 tools adapted for solo CEO + VN defense context. Pipeline: /research --deep → NLM triz-adv (13 sources) → first-principles adapt → surgical Edit. TRIZ integration now: 11/11 (Steps 0, 0.5, 1c, 4.5-task, 4.5-concept, 5.5-concept, 5.5-embody + CFMA + Innovation Level + TESE + IFR + Trimming).

[2026-03-26] Skill upgrade helix-concept-generate + helix-quality-gate: ALL 8 ICDM tools now integrated. Added: DSO (Step 3.5a), Roobustool (Step 5.6), Two-stage eval (Step 4A Pugh + 4B VDI 2225), DQM with CSR (Step 9) in concept-generate. RTA Knowledge Gap (A12) in quality-gate Gate 2. ICDM integration: 8/8 COMPLETE. NLM notebook: icdm (11 sources). Source: Hari & Weiss (Technion/RAFAEL), Mayda & Börklü 2014. Pipeline: /research --deep → /skill-from-research UPGRADE → surgical Edit (no rewrite).

## [2026-03-25] Session 61 — First-Principles Construction Method + Plate-First Deep Research + FORGE Pipeline Start

- [First-principles: construction] Plate-first > frames-first cho 8m V-hull aluminum — 3 bedrock reasons: V-hull developable (Gaussian curvature ≈ 0), nhôm dẫn nhiệt 4× thép (butt before fillet), tôn nhẹ 1/3 (không cần skeleton). Galaxy #115 created: Distortion Sequence Law.
- [First-principles: MPF vs Kasten Hybrid] Kasten Hybrid (interleaved bottom frames before topside) tối ưu cho yacht < 7m (tight access). VN-XUONG-UUV 8m (1.85m internal, accessible) → MPF (Modified Plate-First) 3-phase sequential tốt hơn: ALL butt/seam → ALL fillet/frame → completion. KEY RULE: KHÔNG interleave butt + fillet phases.
- [Jig research] Deep research via /research pipeline: 23 sources in NLM skill-alboat. Key findings: strongback thép hộp 100×60mm, bolt to floor, tack hull to jig (critical first build), CNC MDF molds với egg-crate self-aligning, keel bar 300-500mm off floor, build right-side-up + flip once, Come-A-Long 2T cho bow panel tension, tack 80-100mm ở bow (not 150mm standard).
- [FORGE pipeline] VN-XUONG-UUV ODI Report v1.0 đã tồn tại (26 outcomes, greenfield Sat=1). Full FORGE pipeline identified: 13 stages from pre-study to portfolio. /reverse-mc (Stage 0.5) = next — 4 reference designs chưa map vào competitive morphological chart.
- [NLM] skill-alboat: 19→23 sources, custom persona set (6/6 notebooks total). Kevin Morin Glen-L thread = richest single source (86+ posts, Davis Jig, aluminum cutting, 1/64" hand accuracy).

## [2026-03-24] Session 60 — /helm-aluminum-boat NDT Upgrade via /skill-from-research UPGRADE mode

- [Skill upgrade] `/helm-aluminum-boat` upgraded: 4-row NDT summary → comprehensive NDT section with VT acceptance table, PT 7-step procedure (ASTM E165), RT acceptance criteria, UT full procedure (equipment/calibration/scanning), escalation rules (5 classification societies), NDT report template, 3 aluminum-specific gotchas. NLM notebook `skill-alboat` 12→16 sources (+4 NDT-specific). Trigger keywords expanded (+5 NDT terms).
- [NDT key insight] AWS D1.2 specific numeric limits NOT freely available in open sources — NLM sources reference the standard but don't reproduce tables. Workaround: used AS/NZS 1665 (undercut <0.5mm, zero cracks) + ASME Sec VIII (cracks/LOF/IP always reject) + classification society rules as practical substitutes. For production: must purchase AWS D1.2 codebook.
- [PT aluminum gotcha] Oil-based penetrant residue MUST be completely removed before repair welding — penetrant trapped in surface = guaranteed porosity when re-welded. This is the #1 NDT-specific failure mode for aluminum.
- [UT aluminum limitation] Aluminum grain structure creates standing waves + velocity changes → false readings. Mitigation: lower frequency (2 MHz), higher gain, cross-check with RT when uncertain. UT on aluminum requires more experience than on steel.
- [First-principles: recoil] /first-principles test on VN-12.7MM-SIM pneumatic recoil: RC-A Pneumatic CONFIRMED by bedrock physics (P×A=F tunable, fast solenoid 10 Hz). Only 2 survivors from zero-build: pneumatic + cam-spring. Convention "pneumatic = best" is NOT blind — matches physics. 2 new insights: (1) cam-spring = $200 backup for CTR portable variant, (2) "statistical recoil" hypothesis (70-80% shots get kick, rest dropout) untested — add to OT-3 validation.
- [First-principles: launch orientation] /first-principles on VN-XUONG-UUV launch direction: "nose-first" is CONVENTION from torpedo tubes (30 kts entry — irrelevant at 0.5 m/s ramp speed). Actual determinant: cable exit point + pendant attachment point on UUV → decides orientation for both launch AND recovery. Design gap found: ICD v1.7 doesn't ask OEM for cable exit position. → Galaxy #114 created.
- [Galaxy #114] "Launch Orientation Law — Cable Exit + Pendant Quyết Định, Không Phải Convention" — Cluster H, 3 links (Solution-Determining SF, Physical-World Interface, Data-First Design). First note generated directly from /first-principles skill output.
- [NLM] Custom Instructions set for top 5 notebooks (lomah, 127sim, ast, ach, stability) — each has project-specific persona, constraints, and response style. Audio deep dive generated for ach ("Teaching Machines How to Go to War") — commute learning ready.

## [2026-03-23] Session 59 — Social Media Extract Pipeline + NLM Upgrade + Skill-from-Research Pipeline

- [NLM+Claude integration] — 4 architectural patterns identified (Offsite RAG, Self-Improving Memory Loop, Ground-and-Build, Autonomous Iterative Research). WX already implements patterns 1-3. MCP-based integration > CLI > Skill for robustness. → notebooklm-mcp v0.5.5 installed (disabled by default in .mcp.json to save context). /nlm upgraded v2.0→v2.1 (+persona, +deep-research, +audio modes, +artifact routing, 21→23 aliases).
- [Social media extract pipeline] — 5 new extract skills created in 1 session: /chat-extract (WhatsApp+Zalo+Viber), /fb-extract (Facebook Reels), /yt-extract (YouTube Shorts), /x-extract (X/Twitter), /linkedin-extract (LinkedIn). All follow same pattern: scrape→classify→extract→CEO validate→route. Zalo+WhatsApp Desktop KHÔNG có Export Chat — phải capture thủ công. LinkedIn hay bị login wall.
- [/skill-from-research pipeline] — First pipeline proven: NLM Deep Research → 6-Question Knowledge Extraction → SKILL.md Generation → Validation → Deploy. First product: /helm-aluminum-boat (12 NLM sources, 48KB extracted, 8-step manufacturing + 10-test sea trial + 7 failure modes). Pipeline time ~15 min per skill.
- [C-UAS Pre-Study] — YouTube viral video (13M views) triggered /forge-pre-study. Result: 4 GREEN / 3 YELLOW / 0 RED. ACH fit cực mạnh NHƯNG Viettel đã có VCUS/E → PARK (relationship constraint). Decision: chờ Viettel approach hoặc facility protection opportunity.
- [/first-principles] — 5-step First Principles stack skill từ Inbox article. Strip→Simplify→Question→Invert→Rebuild. Integrated with WX pipeline: Step 5 output routes to /helix-concept-generate hoặc /forge-pre-study.
- [Community skill marketplaces] — Scanned skillsmp.com (571K) + aitmpl.com (701). Kết luận: 100% software dev focused, KHÔNG có defense engineering/Pahl-Beitz/hardware skills. WX đang ở vị trí unique — có thể publish, không cần consume.
- [X articles evaluated] — @leopardracer (Skills 2.0): beginner guide, WX đã ahead. @MitcheIl (20 agents): content pipeline, not applicable. @shannholmberg (3 moats): taste+distribution+agency = Domain Multiplier + Phán đoán Galaxy notes already exist. @JulianGoldieSEO (Channels): SEO spam, discard.

## [2026-03-23] Session 58 — TRIZ/QFD/ICDM Integration + CEO Health Update

**Source:** Mayda & Borklu 2014 (JSME), Weiss & Hari 2015 (CIRP), HBV DNA result 9.65×10⁶
**Mode:** Skill infrastructure upgrade + health record update

### Learnings
1. [TRIZ] TRIZ dry run VN-12.7MM-SIM: 4/4 essential problems matched actual design decisions — TRIZ validates expert intuition, real value is for NEW products without Galaxy knowledge base
2. [CFMA] CFMA catches risks DURING concept evaluation (r² SFD=160), not AFTER like Risk Register — timing > content for design decisions
3. [DfW] DfW-04: encoder data (traverse/elevation) not captured for AI coaching — every sensor has a second purpose, DfX-Waste systematically checks this
4. [FORGE] forge-pre-study (PRESTUDY 7-question filter) fills gap between BRIDGE signal detection and FORGE full ODI analysis — 30 min max, GO/PARK/KILL
5. [Health] Sỏi thận ≠ TDF contraindication — cơ chế hoàn toàn khác (kết tinh vs ống thận gần). Reasoning error corrected: đánh đồng "thận có vấn đề" là sai lầm phân tích

### Skill Changes (8 upgrades from 2 papers)
- HELIX: +CFMA Step 5.5, +TVDT Step 5.5 (task-clarify), +DfW (embody), +Gate 2 A7/A8/A9
- FORGE: +HOQ formalization, +I-Level portfolio, +forge-pre-study (new skill #12)
- BRIDGE: +L1b TRIZ Applied Patterns layer
- Galaxy: 107→113 (+3 health, +2 simulator, +1 TRIZ×P&B)

## [2026-03-22] Session 56 — CEO Health Learning Pipeline

**Source:** 6 xét nghiệm (17-20/03/2026) + 80+ nguồn khoa học (AASLD 2025, EASL 2025, WHO 2024, ADA 2025)
**Mode:** Full learning pipeline (7 steps)

**Three Laws extracted:**
1. **Vicious Cycle Law** — HBV × ĐTĐ × Lipid = reinforcing loop, phải phá vòng đồng thời
2. **Organ-Protection-First Law** — Chọn thuốc theo bảo vệ cơ quan (SGLT2i/GLP-1 RA > Metformin khi ALT cao; Statin = hepatoprotective HR 0.56 HCC)
3. **Golden Window Law** — HbA1C 6.6% = cửa sổ can thiệp tối ưu; trì hoãn = xơ gan 8-20%/5 năm

**Key insights:**
- WHO 2024: ĐTĐ = chỉ định antiviral HBV ngay, không cần chờ viral load
- Statin KHÔNG chống chỉ định bệnh gan — meta-analysis 17 studies: giảm 44% HCC, 46% xơ gan
- SGLT2i: excellent safety + liver benefit (JAMA 2024)
- ĐTĐ tăng 2× nguy cơ xơ gan ở bệnh nhân HBV (aHR 2.02)
- TDF > TAF khi có rối loạn lipid (TDF giảm lipid, TAF tăng LDL)
- Bệnh nhân ĐTĐ: 34% sỏi là acid uric (vs 6% không ĐTĐ) — cần kiểm pH niệu
- MBSR thiền: giảm HbA1c 0.44% (meta-analysis 9 RCTs)

**Decision:** DR-2026-03-22-01 — Sức khỏe CEO = binding constraint mới, ưu tiên ngang Tier 1 project
**DMIR Cycle:** 12 tuần (3 giai đoạn × 4 tuần), daily protocol established
**Galaxy candidates:** 3 (Vicious Cycle, Organ-Protection-First, Golden Window) — awaiting CEO promotion

**Deliverables:**
- `2_Areas/SUC-KHOE/KQ_Xet_Nghiem_Tong_Hop_2026-03.md` — số hóa toàn bộ 6 file xét nghiệm
- `3_Resources/Deep-Content-Analyzer-Outputs/LEARN_CEO_Health_HBV_DM2_Lipid_2026-03-22.md` — full analysis
- `2_Areas/CEO-Self/Learning-Architecture/DMIR_CEO_Health_2026-03-22.md` — DMIR 12-week plan

Format: `[YYYY-MM-DD] [session/topic] — [insight] → [action taken]`

---

[2026-03-15] Session 47 — NLM F1 prune fixed: `nlm source delete` takes only source_id, NOT notebook_id + source_id. Previous session's 118 deletes all failed silently due to wrong CLI syntax. → Fixed in prune_nlm.py, F1 pruned 203→85 successfully.

[2026-03-15] Session 47 — IPARAG AI OS Phase 1: Gap analysis showed 70% of Integration doc proposals already implemented (30 skills, CLAUDE.md, Galaxy 66 notes, NLM). Remaining 30% is Layer 2 (behavior rules) and compound learning infrastructure. → Created `_meta/` and `.claude/rules/`.

[2026-03-16] Session 49 — `.claude/` was in `.gitignore` which blocked tracking hooks/rules/settings. Fix: replace blanket `.claude/` ignore with specific exclusions (`settings.local.json`, flag files). Now hooks and rules are git-tracked. → Updated `.gitignore`, committed Phase 1 rules retroactively.

[2026-03-16] Session 49 — IPARAG Phase 2 complete: 2 hooks + 4 guard rail slash commands + 1 path rule. SessionStart hook fires briefing with warnings only (50-200 tokens). Stop hook uses date-stamped flag file for once-per-day reminder. → All verified end-to-end.

[2026-03-16] Session 49 — VN-XUONG-UUV: Đưa thông tin tối thiểu để chốt với đối tác (đề xuất KT, tính năng KCT, bản chào giá) — tránh thiết kế quá kỹ khi chưa thống nhất phương thức và cách làm. → 3 documents issued, unblock partner alignment trước khi đầu tư thêm engineering effort.

[2026-03-16] Session 50 — Obsidian plugin: `claude -p '/command'` hangs in print mode vì slash commands trigger interactive skill loading. Fix: đọc `.md` skill file content, pass as prompt via stdin. Permission mode phải là `acceptEdits` (không phải `dontAsk` — cái đó DENY tool use). Windows cần `shell: true` cho `.cmd` files (ENOENT fix). → obsidian-claude-bridge plugin v1.0 deployed, 29 commands, stream-json progress tracking.

[2026-03-16] Session 50 — CHIẾN LƯỢC reassessment: I₁ (AI Delegation) = 4/5 nhưng I₂ (Human Delegation) = 0/5. 30 skills + IPARAG OS 3 phases built while dP/dt = 0. Infrastructure without team = overhead, not leverage. New archetype B1b: Infrastructure Trap (Analyst Trap + Founder's Trap compound). → Added P layer, split I, updated framework. **Action: STOP infrastructure, EXECUTE physically, HIRE.**

[2026-03-16] Session 50 — NLM bulk prune: `nlm source delete` cần `--confirm` flag (không có thì "Aborted"). cp1252 crash khi delete thành công là cosmetic (exit code 1 nhưng source thực sự bị xóa). → 76 sources deleted across 6 notebooks (F1 85→50, F2 61→50, F4 55→50, F6 58→50, F9 65→50, RCS 53→50). Prune script updated with `--confirm` + cp1252 detection.

[2026-03-16] Session 50 — Zettelkasten × IPARAG deep analysis: Galaxy links hiện tại là semantic similarity (cùng topic), không phải argument chains (Folgezettel = bước tiếp theo của tư duy). dD/dt (chiều sâu) quan trọng hơn dV/dt (số lượng). Output Loop: mỗi physical delivery phải sinh Galaxy note quay về vault. → 4 Galaxy notes created (66→70). Shift Galaxy target: "≥3 notes/tuần" → "≥1 deep note/tuần (30+ min)."

[2026-03-16] Session 50 — Autoresearch prototype PROVEN: analyst-trap skill 86%→100% trong 1 self-improvement iteration. Pattern: evals.json (binary assertions) + run-eval.sh + --improve flag → Claude tự sửa skill.md. Giải B1b: skills tự maintain qua evals thay vì CEO manual edit. → `_meta/evals/` infrastructure deployed. Next: evals cho 36 remaining skills + `/loop` overnight.

[2026-03-17] Session 51 — HELIX Upgrade Roadmap v3 hoàn thành trong 1 session (planned 4 sessions): 6 skills upgraded + 2 new skills (shadow-dev, dfach). NLM source add CLI broken (returns "may have been added" nhưng source list = empty) — cần investigate nlm-cli hoặc dùng web UI. → HELIX 10→12 skills, all P1-P4 done. NLM CLI unreliable for source management.

[2026-03-19] Session 52 — Semi-sub USV research: shallow water drag penalty 3× cho narrow hull (CFD confirmed), pitch instability >6 kn bắt buộc active stabilization hoặc chấp nhận speed limit, WPA dilemma là balancing loop stealth↔stability (không có best-of-both-worlds). Wide-beam shallow-draft hull + waterjet = giải pháp cho VN coastal ops. NLM CLI source add đã hoạt động lại (Session 51 issue = transient). → 4 Galaxy notes (73→77), research saved to DCA outputs.

[2026-03-19] Session 52 — FORGE SHIFT VN-USV-SS-001: ACH GO. T=MARGINAL acceptable khi có lab demonstrator gate ($140) trước Phase 2 lock — demonstrator generates first real semi-sub control data, fills training gap. Key: NC ballast valve = Level 2 fallback inherent in design (auto-surface on fault). Economics: 97% cost reduction ($300 vs $10K+). → Decision logged to _meta/decisions.md.

[2026-03-19] Session 52 — Pattern Library → Skill Upgrades: 9 upgrades across HELIX/FORGE/BRIDGE, 0 new skills. Key insight: Pattern Library (SOP, Feb 2026) đã có DCTRS + PLAUSIBLE + Anti-Patterns + Time Budget + Governance docs — tất cả đều CHƯA operationalized vào skills. Cross-reference SOP ↔ skills phát hiện gaps mà không cần tạo thêm skills mới. → 9 skills upgraded: quality-gate +PLAUSIBLE, library +component reuse, deploy-gate +governance, detail +TechSpec, portfolio +time budget, dashboard +DCTRS, journal +failure log, cost +reuse credit, automate +anti-pattern audit.

[2026-03-19] Session 52 — HDPE torpedo hull research: V-seam extrusion welding = 19.29 MPa optimal (37% stronger than hot gas). Temperature derating MANDATORY cho VN tropical (shear modulus -80% at 65°C → dùng black PE100, over-engineer wall). Pipe vs sheet trade-off: pipe cho lab demonstrator (fast, cheap), sheet cho production (flexible). IRClass 2024 classification rules exist nhưng KHÔNG có empirical data cho HDPE pipe as semi-sub pressure hull. → 3 Galaxy notes, NLM notebook `hdpe-hull` (19 sources).

[2026-03-19] Session 52 — ACH Technical Stack từ Archives: 13 archived projects reveal IRONMESH platform = ACH compound mechanism (50-93% reuse). 8-layer tech stack (thêm L3a IRONMESH Platform). 5 insights mới: hybrid cloud-edge ACH (VN-AIROBOT), solution bias removal (VN-AICAM), CM4 inference latency risk (VN-AICC), IRONMESH = R5 activation mechanism, L3 EMERGE > cost optimization. → 4 Galaxy notes, tech stack roadmap v1.0 + ACH thesis synthesis v1.0.

[2026-03-20] Session 53 — Autoresearch eval infrastructure proven: 5 binary evals written (research, task-clarify, concept-generate, embody, quality-gate). 3 rounds autoresearch: task-clarify 86→100%, embody 86→100%, quality-gate 71→86%. Pattern confirmed: "MANDATORY + explicit output section" always works. `claude -p` eval runner has ceiling — interactive skills fail tool-dependent checks in headless mode → need `--headless` flag for assertions. Changelog Compound Law: lịch sử thử nghiệm giá trị hơn kết quả (Galaxy #89).

[2026-03-20] Session 53 — Skill infrastructure upgrades: (1) research.md → research/SKILL.md + 2 references (source-tiers, notebooks), (2) HELIX Phase 0-4 skills got P&B references (5 files from Ch3-Ch7), (3) research gotchas added (5th skill, all 5/5 complete), (4) UserPromptSubmit hook tracks /command usage to _meta/skill-usage.csv, (5) Ole Lehmann autoresearch article analyzed → REFINE framework + 3 Laws (Eval Primacy, Goodhart Gradient, Changelog Compound). → Galaxy 88→89, evals 1→6 skills.

[2026-03-20] Session 53 — Blueprint gap analysis: 4 Inbox docs (DMIR, E2E Workflow, Execution Layer, ODI/JTBD) from March 1-2 reviewed against current state. Key finding: DMIR 8/8 covered by existing flat skills, 7 ABSORB + 3 EVOLVE skills never existed as CLI files (blueprint proposed actions on skills that were never built). Actual implementation took different path — 30 B/F/H skills superseded all proposals. New: forge-job-map (JTBD/ODI Stage 0), SHIFT→SHIFTO (+O outcome), forge-scout Step 0 (outcome-first), 10 engineering-*→3 learn-* consolidation. → FORGE 10→11 skills, 4 blueprints archived to Old-Analyses.

[2026-03-20] Session 54 (continued) — VN-AIA-128 initialized (Tier 1, HD128 Hải quân): OpenClaw + NemoClaw selected as platform (85.7% VDI → revised 77.8% after security deep analysis). CRITICAL: OpenClaw has CVE-2026-25253 + 800 malicious skills — NemoClaw fixes 60%, WX must hardening 40% (SHIELD framework: Sandbox, Human-in-loop, Isolate network, Evidence, Limit scope, Data gate). 3 Galaxy notes: Air-Gap Law (#93), Citation-or-Silence Law (#94), Security Retrofit Trap (#95). Galaxy 92→95. WX-KPIPE-001 archived (G4 MET). Key Three Laws: (1) Air-Gap = mandatory for military AI, (2) Citation or Silence = never hallucinate in defense, (3) Security Retrofit ≠ Security by Design.

[2026-03-20] Session 54 — First end-to-end FORGE pipeline execution: forge-job-map → scout → shift → validate → trust → cost → library → flywheel. 17 deliverables, 9 CEO decisions. Key insight: Two-Channel decomposition (Channel A brake + Channel B pneumatic) revealed that top 8 underserved outcomes = physical (I-01 HW) and #9-20 = information (I-08 ACH) with ZERO overlap — cleanest possible ACH separation. $50 pressure transducer enables 7 ACH outcomes worth $144K/yr revenue (82× ROI). forge-job-map outcome data made SHIFTO "O" dimension actionable — without it, SHIFT is technology-push only. → Docs 001 v2.0, 002 v1.4, 015 v2.1, 016 v1.1, 017 v1.1, 018 v1.1, 022 v1.1, 023-025 new. Portfolio ACH Matrix + Model Library + Flywheel Health in FORGE area.

[2026-03-20] Session 53 — AI-Orchestration S1-S5 integration: S1-S5 là 5 Agentic Skills (AI Literacy, Orchestration, QC, Automation, Governance), không phải orchestration stages. AI-Orchestration folder was EMPTY → populated with dashboard. S1 Prompt Library (56 P-templates) now referenced in all 5 HELIX phase skills via prompt-templates.md. P02 QC 5-check embedded for Phase 1-2. Compliance tracking per gate added. Obsidian plugin updated 47→53 commands (+forge-job-map, +helix-sync-protocol, +3 learn-* skills, +learning group). → AI-Orchestration no longer empty, HELIX skills have 3 reference layers (P&B + prompt-templates + gotchas).

[2026-03-21] Session 55 — 2 deep research pipelines (37 sources, 24 insights, 2 NLM notebooks): (1) Nemotron VN + NemoClaw YAML: Vietnamese KHÔNG có trong 19 ngôn ngữ Nemotron, VMLU không có Nemotron entry → phải swap sang Qwen2.5/QwQ. NemoClaw local inference = "experimental" (marketing vs docs gap). Full OpenShell YAML policy schema documented. NIM air-gap deployment = Docker-based. (2) Trợ lý ảo nội bộ QLĐH DN: Agentic Enterprise = bước nhảy từ chatbot (10-30%) sang nhân viên số (80-95%). Five-Pillar Law cho triển khai. Sovereign AI = con đường duy nhất cho quốc phòng (on-prem air-gap + Vietnamese LLM). Vendor hype gap: MISA "80-95% automation" vs Forrester "12-18 tháng pilot stuck". VN landscape: Viettel > VNPT > FPT > MISA cho quốc phòng. → Galaxy 95→98 (+3: Agentic Enterprise, Five-Pillar Law, Sovereign AI Law). WX-AIA sub-scope created (dog-food VN-AIA-128 bằng dữ liệu WX). Architecture decision: Hybrid (Viettel MVP → Private LLM long-term). Gửi bảng kế hoạch làm việc cho HD128.

[2026-04-16] Session — VN-CUAV-SIM-001 LITE-PA2 ICDM per-variant pipeline + Practice-ICDM kickoff: (1) ICDM B0→BE for LITE-PA2: C4 Cost-Optimized selected (R3 elastomer + M3 taper-cam). CEO decisions: SC-2 70% SOFT, pneumatic re-admitted as LITE+ contingency, cost cap SOFT. VDI 2225 #1 + DQM 80.7%. Risk AMBER (FM-6 encoder drift RPN 180). +7 new reqs (LITE-04..10). (2) Phase2-Concept reorganized: 4 variant subfolders (LITE-PA2/FIXED-PA8/FULL-PA6/CORTEX-PA9) + _portfolio/ for shared files. Status.md paths updated. (3) Practice-ICDM project created (Tier 3, 6 weeks, 14h, anchor CUAV-SIM LITE). 2 drills completed: DSO Pre-Ranking (9/9 match, Dreyfus 1→3) + Robustool (20/20, 1 Critical No A4 thermal, Dreyfus 2→3). Key learning: DSO overrides familiarity bias — systematic scoring TRƯỚC tổ hợp prevents intuitive suboptimal choice. VDI 2225 Winner ≠ Robust Winner — Robustool exposed A4 thermal weakness VDI 2225 missed. Galaxy backlog: 2 candidates (DSO Bias Override, VDI≠Robust).

[2026-03-21] Session 55 (continued) — P&B Deep Mastery learning pipeline: Deep Analysis 10 key files (6-question framework) → 7 core principles, 5 failure modes (FM-1 Solution Bias = #1), 6 hidden assumptions, 6 missing dimensions extracted. Three Laws THẬT extracted from analysis (not assumed): (1) Abstraction-Gate — skip = design cho bài toán sai, (2) Loop-Size — within-phase good cross-phase catastrophe, (3) Solution-Determining SF — 1 SF cascade toàn bộ design. Galaxy 98→107 (+9: Solution-Determining SF, Loop-Size Law, D/W Structural, Field-DfA, Self-Help χ, VDI 2221 Evolution, Variation vs Simplification, Method Politics, P&B Predicts Novices). Practice-PB project created (Tier 3, 6 tuần × 21h = 126h, anchor VN-12.7MM-SIM, 7 real deliverables). 4 NLM notebooks integrated (pb-textbook + pb-mastery + pb-mechai + pb-defense-ai). Research P&B Systematic Design: 17 sources, VDI 2221 evolved waterfall→adaptive, P&B = variation (not simplification), method politics = real. Pipeline compliance lesson: first draft 3/7 → CEO caught → fixed to 7/7. THỊNH practiced: T(6 captures) H(12 Galaxy) I(avg 6.9 links) N(CLAUDE.md fixed) H(8 actions mapped). VN-12.7MM 🔴 BLOCKING: must instrument live 12.7mm firing for force-time curve before all design decisions.
