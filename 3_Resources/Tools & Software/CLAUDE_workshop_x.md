# CLAUDE.md — Workshop X Engineering

Workshop X develops indigenous defense/security products for the Vietnamese military and regional markets. This is a multi-project engineering company building hardware+software systems unified by IRONMESH OS. Engineering follows Pahl & Beitz systematic design methodology with D-M-I-R learning acceleration.

## Project Context

**Company identity**: Intelligent defense platform company (not just a hardware vendor). 5 mega-products (RANGE, NAVAL, SHIELD, BASE, TARGET) unified by IRONMESH OS and 6 AI Engines.

**Tech stack**: Python backend, Electron desktop apps, FreeCAD for CAD, CM4 IO Board prototyping, embedded Linux. Manufacturing partners: Hòa Phát, Nam Kim Steel, Vitaco.

**Active projects** (by maturity):
- V-SMASH 12.7mm C-UAS Fire Control — Phase 2 complete, V2 Baseline selected
- VN-AICAM-MDA-001 Maritime Domain Awareness — V3 Compact Autonomous selected
- VN-AST-MSL-001-R THÀNH TRÌ RADAR — advancing to CAD/manufacturing
- VN-AICC-001 AI Command & Control Console — Phase 2 started, CM4 IO Board
- CORTEX RANGE AI weapons training platform — 20-product roadmap
- VN-UAV-CATAPULT-001 — Phase 1 complete, 40-100kg UAV launches
- Multiple training simulators (B41, mortar, MANPADS, naval gunnery, artillery FOS)

**Design standards**: MIL-STD-810H (environmental), MIL-STD-461G (EMC), MIL-STD-882E (safety), STANAG (NATO), TCVN/QCVN (Vietnamese national)

**Target**: 60-75% local content, 40-60% cost reduction vs. imports, export-ready for SE Asia

## Engineering Design Process

All projects follow the 4-phase Pahl & Beitz systematic approach. When working on any product:

**Phase 1 — Task Clarification**: Build requirements list using 16 P&B categories (Geometry, Kinematics, Forces, Energy, Material, Signals, Safety, Ergonomics, Production, Quality, Assembly, Transport, Operation, Maintenance, Costs, Schedule). Every requirement must be MUST/WISH classified and quantified. Always check against MIL-STD and failure-mode scenarios (comms loss, power failure, safety boundaries). Use the 5-step abstraction process to find essential problems.

**Phase 2 — Conceptual Design**: Create function structures (energy/material/signal flows), morphological matrices for systematic solution search, then VDI 2225 weighted evaluation to select concepts. Always generate 3-6 variants before evaluating. Document evaluation rationale.

**Phase 3 — Embodiment Design**: Apply basic rules (clear force paths, matched deformations) and DfX guidelines (DfM, DfA, DfMaintenance, DfSafety). Material selection must account for Vietnamese supplier capabilities. Generate definitive layout with dimensions, materials, production methods.

**Phase 4 — Detail Design**: Production drawings, BOMs with Vietnamese supplier pricing, assembly instructions, verification plans mapping requirements to test methods.

## Design Pattern: AI-Compensates-Hardware (ACH)

Workshop X's key innovation pattern operates at three levels:
- **Replace**: Direct hardware-to-AI substitution (remove expensive sensor, use AI inference)
- **Augment**: Cheap hardware + AI = expensive hardware performance
- **Emerge**: AI creates capabilities impossible with hardware alone

Always consider ACH when evaluating concepts. It enables 40-60% cost reduction while maintaining performance.

## Code Patterns

When writing code for Workshop X projects:
- Python for backend processing, embedded control, data pipelines
- Use type hints and Pydantic for data validation (defense systems need strict typing)
- All configuration via JSON with sensible defaults and explicit error handling
- Logging at INFO level minimum for all system operations (audit trail matters)
- Graceful degradation: systems must handle missing dependencies, lost connections, power interrupts
- Never use bare `exit()` — always `sys.exit()` for PyInstaller compatibility

## Gotchas & Pitfalls

- **Shifting the Burden pattern**: AI/software requirements get attention while physical-world constraints (shock, vibration, temperature, EMC) get neglected. Military qualification testing emphasizes the physical. Always check MIL-STD-810 environmental requirements first.
- **Solution-first design**: Most dangerous pattern. Systematic methodology reveals ~14x more requirements than informal approaches. When tempted to jump to a solution, run the requirements checklist.
- **Vietnamese manufacturing constraints**: Don't specify materials or processes unavailable from local suppliers without explicit justification and import sourcing plan.
- **macOS packaging**: SIP + Electron hardened runtime strips `DYLD_LIBRARY_PATH` from child processes. Use HTTP/library APIs, not subprocess for operations that have API alternatives.

## D-M-I-R Learning Framework

Every significant work session should end with structured reflection:
1. **Diagnose**: What was the constraint blocking progress?
2. **Model**: What causal relationships were revealed?
3. **Intervene**: What high-leverage action was taken?
4. **Reflect**: What paradigm or assumption was challenged?

Track progress using evidence-based mastery levels. Engineering design capacity is the primary bottleneck — protect it.

## Project Naming Convention

All products follow: `VN-[CATEGORY]-[SEQUENCE]` (e.g., VN-LOMAH-AD-001, VN-TUAV-DEMO-001). Documents follow: `[PROJECT]_[Phase]_[Deliverable]_v[X.Y].md`

## Git Commit Guidelines

- No AI attribution in commits (no "Generated with Claude Code" or co-author tags)
- Conventional commit format: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
- Keep messages concise and focused on what changed
- Reference project codes in commits when applicable (e.g., `feat(V-SMASH): add VDI 2225 evaluation`)

## How to Verify Changes

- Run `python -m pytest tests/` for Python backend tests
- For Electron apps: dev mode (`npm start`) is NOT sufficient — rebuild DMG and test installed app
- Cold start test: kill all background processes and launch fresh
- Requirements changes must be validated against the full traceability matrix

## Domain Terminology

| Term | Meaning |
|------|---------|
| IRONMESH OS | Unified platform connecting all mega-products |
| ACH | AI-Compensates-Hardware design pattern |
| LOMAH | Location of Miss and Hit (shooting accuracy system) |
| C-UAS | Counter-Unmanned Aerial System |
| RCWS | Remote Controlled Weapon Station |
| VDI 2225 | German standard for systematic concept evaluation |
| P&B | Pahl & Beitz systematic design methodology |
| D-M-I-R | Diagnosis-Modeling-Intervention-Reflection framework |
| MP | Mega-Product (RANGE, NAVAL, SHIELD, BASE, TARGET) |
| Kill Chain | Detect → Classify → Engage → Assess cycle |

## Learnings Log

| Date | Category | Learning | Applied To |
|------|----------|----------|------------|
| 2025-ongoing | Process | Systematic methodology captures 14x more requirements than informal | All projects |
| 2025-ongoing | Architecture | ACH pattern enables 40-60% cost reduction vs pure hardware | V-SMASH, AICAM, CORTEX |
| 2025-ongoing | Gotcha | Physical-world requirements (MIL-STD-810) more critical than software for qualification | All defense products |
| 2026-02 | Architecture | 5 mega-product structure with 70% component reuse beats 13 separate products | IRONMESH restructuring |
