# StenoAI → Workshop X: CLAUDE.md Mastery Guide
## Applying D-M-I-R × Pahl & Beitz to Claude Code Configuration

**Version:** 1.0 | **Date:** 2026-02-16
**Framework:** D-M-I-R Unified Model × Pahl & Beitz Systematic Design × Compound Engineering

---

## PART 1: DIAGNOSIS — Understanding the StenoAI Reference

### 1.1 What StenoAI Is

StenoAI is a privacy-first meeting transcription app built with:
- **Python backend** (audio recording via sounddevice, Whisper transcription, Ollama summarization)
- **Electron desktop app** (macOS, DMG distribution)
- **Local-first architecture** (no cloud dependencies)
- **CLI + GUI dual interface** (simple_recorder.py + app/main.js)

### 1.2 Architecture Pattern Analysis

```
StenoAI Architecture (Reference Pattern):
┌────────────────────────────────┐
│     Electron GUI (main.js)     │  ← Frontend: HTML/JS, 2737 lines
├────────────────────────────────┤
│     IPC Bridge (spawn/exec)    │  ← Communication: Process spawning
├────────────────────────────────┤
│  Python Backend (PyInstaller)  │  ← Backend: Bundled executable
│  ├─ audio_recorder.py          │    Audio capture
│  ├─ transcriber.py             │    Whisper STT
│  ├─ summarizer.py              │    Ollama LLM inference
│  ├─ ollama_manager.py          │    Service lifecycle
│  ├─ config.py                  │    Settings persistence
│  └─ models.py                  │    Data validation (Pydantic)
├────────────────────────────────┤
│  External Services (Local)     │
│  ├─ Ollama (LLM server)       │    Bundled binary
│  ├─ Whisper (STT model)       │    Downloaded on first run
│  └─ ffmpeg (audio processing) │    Bundled binary
└────────────────────────────────┘
```

### 1.3 What Makes Their CLAUDE.md Effective

The StenoAI CLAUDE.md (121 lines) follows best practices documented by the community:

**Strengths (to preserve in adaptation):**
- Clear project overview in first 3 lines
- Explicit project structure map
- Runnable development commands with copy-paste snippets
- Production readiness checklist (DMG testing, cold start)
- Specific gotchas discovered through pain (macOS SIP, PyInstaller `exit()`)
- Git commit guidelines (keeps agent output clean)
- Session logging protocol (compound engineering pattern)

**Gaps (to fill for Workshop X):**
- No engineering methodology framework
- No domain terminology glossary
- No multi-project coordination
- No standards compliance guidance
- No design pattern documentation
- No learning acceleration framework

### 1.4 System Archetype: Compound Knowledge Loop

```
The CLAUDE.md Compound Loop (Reinforcing):

  Session Work → Discoveries → Update CLAUDE.md → Better Next Session
       ↑                                                ↓
       └──────────── COMPOUNDS OVER TIME ──────────────┘

WITHOUT CLAUDE.md: Every session starts from zero.
WITH CLAUDE.md: Every session builds on all previous sessions.
```

This is a classic **Reinforcing Loop (R1)** that either spirals up (compound learning)
or stays flat (no compounding). The leverage point is L6 (Information Flow) — making
implicit knowledge explicit and persistent.

---

## PART 2: MODELING — Mapping Workshop X Requirements to CLAUDE.md Structure

### 2.1 Workshop X vs. StenoAI: Complexity Comparison

| Dimension | StenoAI | Workshop X | Multiplier |
|-----------|---------|------------|------------|
| Products | 1 | 13+ (5 mega-products) | 13x |
| Languages | Python + JS | Python + JS + Embedded C + FPGA | 2x |
| Standards | None | MIL-STD, STANAG, TCVN, QCVN | Critical |
| Design methodology | Ad hoc | Pahl & Beitz systematic | Fundamental |
| Hardware integration | Audio devices | Weapons, sensors, vehicles, naval | 10x |
| Team coordination | Solo developer | Multi-discipline team | 5x |
| Regulatory | App Store only | Military qualification | 100x |
| Supply chain | npm/pip | Vietnamese defense manufacturers | Complex |

**Key insight**: Workshop X CLAUDE.md must be ~3x longer than StenoAI's but still under
80 lines of ACTIONABLE content (per HumanLayer's research on instruction following limits).
The solution: hierarchical CLAUDE.md files per project subdirectory.

### 2.2 CLAUDE.md Architecture for Workshop X

```
Workshop X CLAUDE.md Hierarchy:
═══════════════════════════════

~/.claude/CLAUDE.md                    ← Personal: KN's preferences (15 lines max)
  "Prefer Pahl & Beitz terminology"
  "Always check MIL-STD compliance"
  "Vietnamese language for stakeholder docs"

workshop-x/
├── CLAUDE.md                          ← Root: Company context (60-80 lines)
│   "Company identity, tech stack, naming conventions"
│   "Design methodology overview"
│   "Common gotchas, domain terminology"
│
├── projects/
│   ├── v-smash/
│   │   └── CLAUDE.md                  ← Project: V-SMASH specifics
│   │       "Phase 2 complete, V2 Baseline selected"
│   │       "12.7mm ballistics constraints"
│   │       "VDI 2225 evaluation criteria used"
│   │
│   ├── cortex-range/
│   │   └── CLAUDE.md                  ← Project: CORTEX RANGE specifics
│   │       "20-product roadmap, 8 phases"
│   │       "LOMAH integration requirements"
│   │
│   ├── ironmesh-os/
│   │   └── CLAUDE.md                  ← Project: IRONMESH OS specifics
│   │       "Platform architecture, 5-layer stack"
│   │       "AI engine integration protocols"
│   │
│   └── [each-project]/
│       └── CLAUDE.md
│
├── docs/
│   ├── design-methodology.md          ← Reference: P&B quick guide
│   ├── mil-std-checklist.md           ← Reference: Standards compliance
│   ├── ach-pattern.md                 ← Reference: ACH design pattern
│   └── vdi-2225-template.md           ← Reference: Concept evaluation
│
└── .claude/
    └── local.md                       ← Local: Machine-specific settings
```

**Why hierarchical?** Claude Code loads CLAUDE.md files on demand — only when working
in that directory. This keeps each context window lean and relevant.

### 2.3 Critical Content Mapping

**From StenoAI CLAUDE.md (what to keep as patterns):**

| StenoAI Section | Workshop X Equivalent | Priority |
|-----------------|----------------------|----------|
| Project Overview | Company + product identity | P0 |
| Project Structure | Multi-project structure map | P0 |
| Development Commands | Per-project build/test commands | P0 |
| Production Readiness | Military qualification checklist | P0 |
| Code Style | Defense code standards (stricter) | P1 |
| Git Commit Guidelines | Same pattern, add project codes | P1 |
| Brand Colors | Not applicable | Skip |
| Session Logging | D-M-I-R reflection protocol | P0 |

**Workshop X additions (not in StenoAI):**

| New Section | Purpose | Priority |
|-------------|---------|----------|
| Engineering Design Process | P&B phase guidance per project | P0 |
| Domain Terminology | Defense/military glossary | P0 |
| Standards Compliance | MIL-STD, STANAG quick reference | P0 |
| ACH Design Pattern | Innovation methodology | P1 |
| D-M-I-R Framework | Learning acceleration protocol | P1 |
| Vietnamese Manufacturing | Supplier constraints and capabilities | P1 |
| Learnings Log | Compound engineering table | P2 |

---

## PART 3: INTERVENTION — Implementation Plan

### 3.1 Immediate Actions (Today)

**Step 1: Install the root CLAUDE.md**
Copy `CLAUDE_workshop_x.md` to your workshop-x project root as `CLAUDE.md`.

**Step 2: Create global preferences**
```bash
mkdir -p ~/.claude
cat > ~/.claude/CLAUDE.md << 'EOF'
# KN Nguyen — Claude Code Preferences

Vietnamese defense systems engineer at Workshop X.
Apply Pahl & Beitz systematic design methodology to all engineering work.
Use D-M-I-R framework for structured reflection.
Check MIL-STD compliance before finalizing any defense product design.
Prefer quantified requirements over vague descriptions.
When in doubt, search project knowledge before web search.
EOF
```

**Step 3: Create per-project CLAUDE.md files**
For each active project, create a CLAUDE.md in its directory with:
- Current phase and status
- Key requirements/constraints specific to that project
- Build/test commands
- Known gotchas discovered during development

### 3.2 Compound Engineering Integration

At the end of each significant Claude Code session:

```
"Compound learnings from this session into CLAUDE.md"
```

The agent should:
1. Review what was accomplished
2. Identify P&B methodology insights (what phase, what was missed, what worked)
3. Capture defense-specific gotchas (MIL-STD findings, supplier issues)
4. Update the relevant CLAUDE.md (root or project-specific)
5. Add to Learnings Log table

### 3.3 D-M-I-R Session Protocol

**Start of session:**
```
"I'm working on [PROJECT] Phase [N]. Current constraint: [X]. Load context."
```
Claude Code reads the project CLAUDE.md and picks up where you left off.

**During session:**
Apply P&B methodology to the current phase. Claude Code should reference:
- Requirements list categories (Phase 1)
- Function structure + morphological matrix (Phase 2)
- DfX guidelines + material selection (Phase 3)
- Production documentation templates (Phase 4)

**End of session:**
```
"Reflect on this session. What did we learn? Update CLAUDE.md."
```

### 3.4 StenoAI Patterns to Adopt Directly

Several patterns from StenoAI's codebase translate directly to Workshop X:

**Config management pattern** (from `src/config.py`):
```python
# Singleton config with JSON persistence — use this for all Workshop X tools
class Config:
    SUPPORTED_MODELS = {...}  # → SUPPORTED_STANDARDS = {...}
    def _get_default_config(self): ...
    def get(self, key, default=None): ...
```

**Graceful dependency fallback** (from `simple_recorder.py`):
```python
# Always handle missing dependencies — defense systems must degrade gracefully
try:
    from src.sensor_fusion import FusionEngine
except ImportError:
    FusionEngine = None
```

**Production readiness checklist** (from CLAUDE.md):
- Dev mode is NOT sufficient — test the packaged/deployed system
- Cold start test — kill everything and launch fresh
- Never shell out when an API exists (SIP/hardened runtime issues)

---

## PART 4: REFLECTION — Meta-Learning and Next Steps

### 4.1 What This Exercise Reveals

The process of adapting StenoAI's CLAUDE.md to Workshop X is itself a D-M-I-R cycle:

**Diagnosis**: Workshop X projects lose context between Claude Code sessions. Each session
starts from scratch, repeating explanations of P&B methodology, project status, standards
requirements. This is the "flat learning curve" anti-pattern.

**Model**: The CLAUDE.md compound loop (R1) shows that persistent context → better outputs →
more discoveries → richer context. Without it, the loop doesn't activate.

**Intervention**: Installing the hierarchical CLAUDE.md system activates the compound loop
at L6 (Information Flow). This is a medium-leverage intervention that should show immediate
results in session quality.

**Reflection**: The deeper insight is that CLAUDE.md is not just a config file — it's the
knowledge stock that accumulates Workshop X's engineering methodology. Over time, it becomes
the institutional memory that makes Claude Code genuinely understand your defense engineering
context without re-explanation.

### 4.2 Leverage Point Analysis

| Leverage | What CLAUDE.md Enables | Expected Impact |
|----------|----------------------|-----------------|
| L2 (Paradigm) | "Claude Code understands P&B methodology" | Agent designs systematically |
| L3 (Goals) | "Build defense products, not just code" | Architecture-aware outputs |
| L5 (Rules) | "Always check MIL-STD" | Compliance by default |
| L6 (Information) | "Project status, constraints, gotchas" | No repeated explanations |
| L7 (Feedback) | "Compound learnings at session end" | Improving quality over time |

### 4.3 Progressive Improvement Path

**Week 1-2**: Install root CLAUDE.md + 2-3 project CLAUDE.md files. Start compounding.
**Week 3-4**: Add reference docs (mil-std-checklist.md, vdi-2225-template.md).
**Month 2**: Create custom slash commands for common workflows (/review-design, /check-mil-std).
**Month 3**: Set up agent teams (using agent-team-builder skill) for parallel D-M-I-R cycles.
**Month 4+**: Automated nightly compound review on VPS.

### 4.4 Success Metrics

| Metric | Baseline (no CLAUDE.md) | Target (with CLAUDE.md) |
|--------|------------------------|------------------------|
| Context setup time per session | 5-10 min explaining | 0 min (automatic) |
| Methodology compliance | Ad hoc | Systematic P&B every time |
| Repeated gotcha encounters | Frequent | < 10% recurrence |
| Cross-session continuity | None | Full project awareness |
| Learnings captured per week | 0 | 5+ compound entries |

---

## APPENDIX A: Full Root CLAUDE.md for Workshop X

See file: `CLAUDE_workshop_x.md` (created alongside this document)

## APPENDIX B: Example Project-Level CLAUDE.md

```markdown
# CLAUDE.md — V-SMASH 12.7mm C-UAS Fire Control System

VN-VSMASH-001. Counter-UAS fire control for 12.7mm machine guns.
Phase 2 Conceptual Design complete. V2 "Baseline" selected via VDI 2225.
Next: Phase 3 Embodiment Design — portable configuration.

## Current Status
- 57 requirements captured (Phase 1)
- 4 concepts evaluated, V2 selected (weighted score: highest)
- Stakeholder review materials delivered
- Ready for embodiment design decisions

## Key Constraints
- Weight: < 15kg (portable requirement)
- Power: 24V vehicle or battery pack
- Environment: MIL-STD-810H Method 500.6 (temperature -32°C to +49°C)
- EMC: MIL-STD-461G for vehicle-mounted configuration
- Target engagement range: 500-2000m against Group 1-2 UAS

## Build & Test
- Requirements analysis: `python tools/requirements_analyzer.py v-smash`
- VDI 2225 evaluation: `python scripts/vdi2225_calculator.py --project v-smash`
- CAD files: FreeCAD project at `cad/v-smash/`

## Gotchas
- Recoil forces at 12.7mm exceed typical servo mount ratings — need custom dampening
- Vietnamese 12.7mm ammunition (DShK) has different ballistic profile than NATO .50 BMG
- Battery pack thermal management critical in tropical climate (>40°C ambient)

## ACH Opportunities
- Replace: Expensive laser rangefinder → AI-based range estimation from video
- Augment: Basic camera + AI tracking = performance of $50K+ stabilized sight
- Emerge: Predictive engagement (AI anticipates drone trajectory, pre-aims)
```

## APPENDIX C: Example Custom Slash Command

Create `.claude/commands/review-design.md`:
```markdown
Review the current design work against Pahl & Beitz methodology:

1. Identify which phase this work belongs to (Task Clarification / Conceptual / Embodiment / Detail)
2. Check completeness against P&B phase outputs
3. Verify methodology application (requirements quantified? function structure complete? VDI 2225 used?)
4. Check MIL-STD compliance for all applicable standards
5. Evaluate ACH pattern opportunities
6. Provide specific actionable feedback with P&B references

Format: Strengths → Issues → Actions
```
