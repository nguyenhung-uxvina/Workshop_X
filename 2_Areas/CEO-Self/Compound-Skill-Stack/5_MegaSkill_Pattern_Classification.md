# 5 Mega-Skill Patterns — Phân Loại & Kiến Trúc Sub-Skills
## Bổ Sung Cho Skill Architect Workshop X MegaPrompt

**Ngày:** 01/03/2026
**Mục đích:** Xác định danh mục pattern cho mỗi mega-skill, map sub-skills (existing vs. cần tạo mới), và cập nhật kiến trúc hệ sinh thái skill.

---

## TỔNG QUAN: 5 MEGA-SKILL PATTERNS

| # | Mega-Skill | Pattern Type MỚI | Lý do cần pattern riêng |
|---|-----------|------------------|------------------------|
| 1 | Pahl-Beitz Design APPLICATION | **Execution** | Khác Mentoring — không dạy theory, mà DRIVE qua 4 phases với real product |
| 2 | Integration Architecture | **Governance** | Khác Procedural — quản lý cross-domain state liên tục, không phải 1 event |
| 3 | Decision Documentation & Teaching | **Compound** | Kết hợp 2 activities (ghi + dạy) vì chúng là cùng 1 feedback loop |
| 4 | AI Validation & Fallback Design | **Gate** | Khác Evaluative — binary go/no-go với safety implications |
| 5 | Signal Extraction & Knowledge System | **Pipeline** | Khác Procedural — continuous flow processing, không phải discrete events |

---

## BẢNG PATTERN MỚI — Bổ Sung Vào Mega-Prompt

| Loại | Ví dụ đã có | Ví dụ mới | Pattern |
|---|---|---|---|
| **Analytical** | stock-flow-mapper, feedback-loop-detector | — | Content → Framework application → Structured output |
| **Generative** | engineering-mnemonic-creator | — | Input concepts → Creative synthesis → Memorable output |
| **Evaluative** | engineering-concept-evaluation-assistant | — | Options → Criteria → Scoring → Recommendation |
| **Procedural** | quality-gate-reporter | — | Trigger event → Checklist → Log → Notify |
| **Mentoring** | pahl-beitz-mastery | — | Student state → Diagnose → Guide → Practice → Assess |
| **Orchestrating** | deep-content-analyzer | — | Content → Load sub-skills → Coordinate → Synthesize |
| **CAD/Technical** | cad-visualization-freecad | — | Description → 3D model → Documentation |
| **★ Execution** | — | `design-sprint-driver` | Goal → Phase gate → Artifact → Review → Next phase → DONE |
| **★ Governance** | — | `integration-architecture` ✅ | State → Monitor → Detect drift → Intervene → Update state → Loop |
| **★ Compound** | — | `decision-teaching-engine` | Action → Document → Teach → Feedback → Improve action → Loop |
| **★ Gate** | — | `ai-validation-gate` | Product → Checklist → Test → Pass/Fail → Deploy or Block |
| **★ Pipeline** | — | `signal-knowledge-pipeline` | Raw signal → Extract → Structure → Store → Retrieve → Compound |

---

## MEGA-SKILL 1: PAHL-BEITZ DESIGN APPLICATION

### Pattern: **Execution**
```
Execution Pattern:
  Goal (product + phase) → Enforce Design-First Hour
  → Generate artifact (requirements/function structure/concept/layout)
  → Review artifact (self + peer)
  → Phase gate check → Advance or iterate
  → Track: artifacts/week, phase completion, design:analysis ratio
```

### Sub-Skill Map

| Sub-Skill | Status | Pattern Type | Vai trò trong Mega-Skill |
|-----------|--------|-------------|--------------------------|
| `pahl-beitz-mastery` | ✅ EXISTS | Mentoring | Theory + methodology guidance |
| `requirements-abstraction-mentor` | ✅ EXISTS | Mentoring | Phase 1: Task Clarification |
| `engineering-concept-evaluation-assistant` | ✅ EXISTS | Evaluative | Phase 2: VDI 2225 + coupling |
| `cad-visualization-freecad` | ✅ EXISTS | CAD/Technical | Phase 3: Embodiment → 3D model |
| `cad-review-automation` | ✅ EXISTS | Evaluative | Phase 3: DfX checking |
| `cad-documentation-generator` | ✅ EXISTS | Generative | Phase 4: Technical drawings |
| `design-iteration-assistant` | ✅ EXISTS | CAD/Technical | Phase 3-4: Design improvement |
| `engineering-design-review-mentor` | ✅ EXISTS | Mentoring | Cross-phase: Review quality |
| **`design-sprint-driver`** | ❌ NEW | **Execution** | **ORCHESTRATOR — drives through phases** |

### `design-sprint-driver` — Skill Cần Tạo

**Core function:** Enforce Design-First Hour. Drive 1 real product through Pahl-Beitz 4 phases. Track progress. Prevent Analyst Trap.

**Khác với `pahl-beitz-mastery`:** pahl-beitz-mastery DẠY methodology. design-sprint-driver DRIVES execution — nó là coach trên sân, không phải giáo viên trong lớp.

**Decision logic:**
```
IF user starts session AND has active design sprint:
  Load current phase + product + last artifact
  "Tiếp tục [product] Phase [N]. Artifact tiếp theo: [X]. Bắt đầu."
  BLOCK: "Hãy phân tích bài viết..." → "Design-First Hour. Phân tích sau."

IF user has NO active sprint:
  "Chọn sản phẩm cho Design Sprint: BB-01 / MTB-20 / LOMAH-AD / [other]"
  Initialize sprint tracker

IF artifact completed:
  Run self-assessment rubric → Score → Phase gate check
  IF pass → advance phase
  IF fail → iterate with specific feedback
```

**Metrics tracked:**
- Design artifacts/tuần (target: ≥3)
- Design:Analysis ratio (target: ≥60:40)
- Phase completion velocity
- Analyst Trap detector: consecutive sessions without design artifact = RED FLAG

---

## MEGA-SKILL 2: INTEGRATION ARCHITECTURE

### Pattern: **Governance**
```
Governance Pattern:
  System state (ICD + Integration Debt) → Continuous monitoring
  → Detect: new interfaces, assumption mismatches, debt trend ↑
  → Intervene: sync point, conflict resolution, freeze progression
  → Update state → Loop
  → Escalate: debt ↑ 2 consecutive syncs → HALT features
```

### Sub-Skill Map

| Sub-Skill | Status | Pattern Type | Vai trò trong Mega-Skill |
|-----------|--------|-------------|--------------------------|
| **`integration-architecture`** | ✅ JUST CREATED | **Governance** | **ORCHESTRATOR — ICD, sync, coupling, debt** |
| `stock-flow-mapper` | ✅ EXISTS | Analytical | Integration Debt as stock model |
| `engineering-concept-evaluation-assistant` | ✅ EXISTS | Evaluative | Coupling analysis within VDI 2225 |
| `cad-review-automation` | ✅ EXISTS | Evaluative | DfX checks at interfaces |
| `quality-gate-reporter` | ✅ EXISTS | Procedural | Integration gates at sync points |
| `cad-documentation-generator` | ✅ EXISTS | Generative | ICD as formal technical document |
| **`6-flow-function-builder`** | ❌ NEW | **Analytical** | **Generate 6-flow diagrams, find D/C/T gaps** |

### `6-flow-function-builder` — Skill Cần Tạo

**Core function:** Tạo function structure 6-flow (E/M/S/D/C/T) cho bất kỳ sản phẩm nào. Tự động flag interfaces crossing domain boundaries. Tự động scan ACH opportunities (C×S overlap).

**Khác với `integration-architecture`:** integration-architecture QUẢN LÝ toàn bộ integration. 6-flow-function-builder là CÔNG CỤ tạo 1 artifact cụ thể (function structure).

**Decision logic:**
```
IF user provides product name/description:
  Generate 6-flow function structure (top-level → sub-functions)
  FOR each function:
    Annotate all 6 flows (E/M/S/D/C/T)
    FLAG domain boundary crossings → ICD candidates
    FLAG C×S overlaps → ACH opportunities
  Output: 6-flow diagram + ICD candidate list + ACH register
```

---

## MEGA-SKILL 3: DECISION DOCUMENTATION & TEACHING

### Pattern: **Compound**
```
Compound Pattern:
  CEO makes decision → Document (DECISIONS.md: what, why, alternatives, risks)
  → Teach to mentee (Feynman: explain simply → discover gaps)
  → Mentee feedback reveals blind spots → Improve next decision
  → Teaching creates organizational knowledge → Reduces single-person risk
  → Document improves → Better teaching → Better decisions → COMPOUND
```

### Sub-Skill Map

| Sub-Skill | Status | Pattern Type | Vai trò trong Mega-Skill |
|-----------|--------|-------------|--------------------------|
| `engineering-feynman` | ✅ EXISTS | Mentoring | Teaching technique |
| `engineering-learning-journal-keeper` | ✅ EXISTS | Procedural | Reflection structure |
| `engineering-design-review-mentor` | ✅ EXISTS | Mentoring | Review quality standards |
| `compound-engineering` | ✅ EXISTS | Orchestrating | Extract learnings from sessions |
| **`decision-teaching-engine`** | ❌ NEW | **Compound** | **ORCHESTRATOR — document + teach + compound** |
| **`mentoring-session-runner`** | ❌ NEW | **Mentoring** | **Structure 1:1 teaching sessions** |

### `decision-teaching-engine` — Skill Cần Tạo

**Core function:** Mỗi khi CEO ra quyết định quan trọng → auto-generate DECISIONS.md entry → suggest teaching moment → track knowledge transfer.

**Decision logic:**
```
IF user describes a decision made:
  Generate DECISIONS.md entry:
    - Decision: [what]
    - Context: [why this matters]
    - Alternatives rejected: [what else was considered]
    - Risks accepted: [what could go wrong]
    - Compound stack dimensions used: [which unique knowledge enabled this]
  
  THEN suggest teaching opportunity:
    "Quyết định này dùng [ACH principle + customer context]. 
     Mentee có thể học: [specific lesson]. 
     Feynman prompt: 'Giải thích tại sao chọn camera + transfer learning 
     thay vì radar classifier cho LOMAH-AD.'"

IF user runs teaching session:
  Structure session: problem → student attempt → gap reveal → correct → practice
  Log: what mentee understood, what gaps remain, next session topic
```

### `mentoring-session-runner` — Skill Cần Tạo

**Core function:** Structure 1:1 Pahl-Beitz mentoring sessions (30 min). Progressive curriculum. Track mentee progress.

**Decision logic:**
```
IF first session with mentee:
  Assess baseline: what do they know about systematic design?
  Create learning path (from engineering-learning-architecture-builder)
  Start with: "Draw a function structure for [familiar product]"

IF ongoing mentee:
  Load mentee progress from previous session
  Select topic based on: curriculum sequence + recent project needs
  Run: problem → attempt → feedback → practice drill assignment
  Log progress for next session
```

---

## MEGA-SKILL 4: AI VALIDATION & FALLBACK DESIGN

### Pattern: **Gate**
```
Gate Pattern:
  Product reaches deployment milestone → Trigger gate checklist
  → Test: fallback exists? Performance envelope defined? Worst-case tested?
  → Binary: PASS (deploy) or FAIL (block + specific requirements)
  → No negotiation on safety items
  → Log gate result → Update product status
```

### Sub-Skill Map

| Sub-Skill | Status | Pattern Type | Vai trò trong Mega-Skill |
|-----------|--------|-------------|--------------------------|
| `quality-gate-reporter` | ✅ EXISTS | Procedural | Gate logging + notification |
| `cad-review-automation` | ✅ EXISTS | Evaluative | DfX including DfR (reliability) |
| `engineering-concept-evaluation-assistant` | ✅ EXISTS | Evaluative | Concept-level ACH assessment |
| **`ai-validation-gate`** | ❌ NEW | **Gate** | **ORCHESTRATOR — FORGE-F Gate + Performance Envelope** |
| **`fallback-designer`** | ❌ NEW | **Generative** | **Design fallback mechanisms per ACH function** |
| **`performance-envelope-tester`** | ❌ NEW | **Evaluative** | **Define + test worst-case AI performance** |

### `ai-validation-gate` — Skill Cần Tạo

**Core function:** FORGE-F Gate. CEO signs off trước MỌI field test. Binary pass/fail.

**Gate checklist (non-negotiable):**
```
FORGE-F GATE — AI DEPLOYMENT READINESS

□ Fallback mechanism designed and documented?
□ Fallback tested independently (without AI running)?
□ Switching criterion defined (WHEN does fallback activate)?
□ Switching time specified (HOW FAST does fallback activate)?
□ Operator informed about fallback mode? Trained on it?
□ Performance Envelope defined (worst-case across operational conditions)?
□ Tested at extremes (MIL-STD temperature, max vibration, adversarial)?
□ Tested in degraded mode (sensor at 50%, compute throttled)?
□ MIL-STD-882E risk assessment includes BOTH AI and fallback modes?
□ Data pipeline for field performance monitoring active?
□ Model update mechanism (DfU) specified?
□ Dependency stack documented (PyTorch, CUDA, Linux versions)?

RESULT: ALL checked = PASS → Deploy
        ANY unchecked = FAIL → Block + specify what's missing
```

### `fallback-designer` — Skill Cần Tạo

**Core function:** Cho 1 ACH function, thiết kế fallback mechanism theo 4 levels.

**Decision logic:**
```
INPUT: ACH function description (e.g., "YOLO target detection on camera")

OUTPUT: Fallback design for each level:
  Level 0: NO FALLBACK (❌ unacceptable for defense)
  Level 1: GRACEFUL DEGRADATION
    → [specific mechanism: e.g., operator-guided mode]
    → Switching criterion: [e.g., confidence < 60% for 3 consecutive frames]
    → Switching time: [e.g., < 500ms]
  Level 2: REDUNDANT PATH  
    → [specific mechanism: e.g., simple threshold detection backup]
    → Independent of primary AI path
  Level 3: ANTI-FRAGILE
    → [mechanism: failure captured → retrain → model improves]
    → Requires data pipeline + model update infrastructure
    
RECOMMENDATION: Minimum Level [X] for this function, because [safety rationale]
```

### `performance-envelope-tester` — Skill Cần Tạo

**Core function:** Define và test AI performance across operational envelope. Replace "average performance" with "worst-case guaranteed performance."

**Process:**
```
1. Define operational envelope dimensions:
   - Temperature range (MIL-STD-810)
   - Vibration (MIL-STD-810)
   - Lighting conditions (dawn/dusk/rain/fog/dust)
   - Sensor degradation (lens dirty, partial occlusion)
   - Compute degradation (thermal throttling)
   - Adversarial conditions (camouflage, decoys)

2. For EACH dimension: test AI at 10th, 50th, 90th, 99th percentile
3. Generate Performance Envelope Map:
   | Condition | P10 | P50 | P90 | P99 | Acceptable? |
4. Identify: where does performance drop below threshold?
5. For each failure zone: does fallback cover it?
```

---

## MEGA-SKILL 5: SIGNAL EXTRACTION & KNOWLEDGE SYSTEM

### Pattern: **Pipeline**
```
Pipeline Pattern:
  Raw signal (interaction/review/meeting) → Capture (AI transcribe)
  → Extract (decisions, risks, assumptions, actions)
  → Structure (DECISIONS.md, STATUS.md, Airtable)
  → Store (PARA × Obsidian vault)
  → Retrieve (Claude reads VAULT_MAP.md at session start)
  → Compound (cross-project insights, reuse)
  → Loop: better retrieval → better decisions → richer signals
```

### Sub-Skill Map

| Sub-Skill | Status | Pattern Type | Vai trò trong Mega-Skill |
|-----------|--------|-------------|--------------------------|
| `compound-engineering` | ✅ EXISTS | Orchestrating | Extract learnings from sessions |
| `engineering-learning-journal-keeper` | ✅ EXISTS | Procedural | Session reflection |
| **`signal-knowledge-pipeline`** | ❌ NEW | **Pipeline** | **ORCHESTRATOR — capture → extract → store → retrieve** |
| **`meeting-signal-extractor`** | ❌ NEW | **Analytical** | **Auto-extract decisions/risks from transcripts** |
| **`vault-session-manager`** | ❌ NEW | **Procedural** | **VAULT_MAP read at start, /update-obsidian at end** |

### `signal-knowledge-pipeline` — Skill Cần Tạo

**Core function:** Orchestrate toàn bộ knowledge pipeline. Manage PARA × Obsidian × Claude integration.

**Modes:**
```
Mode 1: SESSION START
  Read VAULT_MAP.md → Load active project context
  Read DECISIONS.md + STATUS.md of relevant project
  DO NOT read _ai-generated/ (anti echo chamber)

Mode 2: MEETING EXTRACTION
  Input: transcript or meeting notes
  Extract: decisions (numbered) + open items (owner, deadline) 
           + risks (severity, mitigation) + assumptions (verified/unverified)
  Output: structured summary → Airtable + KB update

Mode 3: SESSION END
  /update-obsidian → write to project/_ai-generated/
  If decision made → propose DECISIONS.md entry → inbox/ai-proposals/
  If project status changed → update VAULT_MAP.md

Mode 4: WEEKLY REVIEW (10 min)
  PARA (5 min): sort inbox, review ai-proposals, archive completed
  VAULT (5 min): VAULT_MAP accurate? Cross-project links this week?
  Quality check: Capture/Distill ratio, Echo Chamber indicator
```

### `meeting-signal-extractor` — Skill Cần Tạo

**Core function:** Từ transcript/notes cuộc họp → extract structured output.

**Output per meeting type:**

| Meeting Type | Extract | Output Format |
|---|---|---|
| Design Review | Decisions + trade-offs + risks + actions | DECISIONS.md entries + Airtable rows |
| Test Event | Pass/fail + anomalies + root cause + patterns | Quality gate log + KB Layer 2 update |
| Integration Meeting | Conflicts + assumptions + resolutions + dependencies | ICD update + Integration Debt delta |
| Field Feedback | User experience + environmental conditions + failures + workarounds | Product backlog items + KB Layer 3 |
| Supplier Interaction | Lead times + quality issues + risks + alternatives | Procurement tracker update |
| Customer Meeting | Requirement changes + priorities + trust level + feedback | Requirements delta + relationship notes |

### `vault-session-manager` — Skill Cần Tạo

**Core function:** Automate PARA × Obsidian session protocol. Read vault at start, write at end.

**Ba Quy Luật encoded:**
1. **Judgment Law:** Store reasoning, not just data. DECISIONS.md > STATUS.md.
2. **Ignition Law:** 1 project deep > 4 projects shallow. Focus context loading.
3. **Dual-Namespace Law:** AI writes to `_ai-generated/`. AI does NOT read own output as truth.

---

## KIẾN TRÚC TỔNG THỂ — CẬP NHẬT

```
═══════════════════════════════════════════════════════════
                 WORKSHOP X SKILL ECOSYSTEM v2.0
═══════════════════════════════════════════════════════════

LAYER 4: CEO OPERATING SYSTEM (5 Mega-Skills)
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ① design-sprint-driver [EXECUTION]                     │
│     "Design-First Hour — drive products through phases" │
│                                                         │
│  ② integration-architecture [GOVERNANCE] ✅              │
│     "ICD + Sync Points + Debt Tracking + 6-Flow"        │
│                                                         │
│  ③ decision-teaching-engine [COMPOUND]                  │
│     "Document decisions + teach mentees + compound"     │
│                                                         │
│  ④ ai-validation-gate [GATE]                            │
│     "FORGE-F Gate + Performance Envelope + Fallback"    │
│                                                         │
│  ⑤ signal-knowledge-pipeline [PIPELINE]                 │
│     "Capture → Extract → Store → Retrieve → Compound"  │
│                                                         │
└───┬─────────┬──────────┬──────────┬──────────┬──────────┘
    │         │          │          │          │
    ▼         ▼          ▼          ▼          ▼

LAYER 3: DOMAIN FRAMEWORKS
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ HELIX (Method) │ │ FORGE (Product)│ │ BRIDGE (Ops)   │
│ pahl-beitz-    │ │ 6-flow-func-   │ │ meeting-signal-│
│   mastery      │ │   builder ❌   │ │   extractor ❌ │
│ requirements-  │ │ fallback-      │ │ vault-session- │
│   abstraction  │ │   designer ❌  │ │   manager ❌   │
│ engineering-*  │ │ performance-   │ │ compound-      │
│   (15 skills)  │ │   envelope ❌  │ │   engineering  │
│ design-sprint- │ │ quality-gate-  │ │                │
│   driver ❌    │ │   reporter     │ │                │
└────────────────┘ └────────────────┘ └────────────────┘

LAYER 2: ANALYTICAL ENGINE
┌────────────────────────────────────────────────────────┐
│ deep-content-analyzer [ORCHESTRATOR]                    │
│   ├── stock-flow-mapper         [Analytical]            │
│   ├── feedback-loop-detector    [Analytical]            │
│   ├── meadows-leverage-analyzer [Analytical]            │
│   └── skills-mastery-system     [Mentoring]             │
└────────────────────────────────────────────────────────┘

LAYER 1: CAD & TECHNICAL
┌────────────────────────────────────────────────────────┐
│ cad-visualization-freecad    [CAD/Technical]            │
│ cad-review-automation        [Evaluative]               │
│ cad-documentation-generator  [Generative]               │
│ design-iteration-assistant   [CAD/Technical]            │
└────────────────────────────────────────────────────────┘

LAYER 0: INFRASTRUCTURE
┌────────────────────────────────────────────────────────┐
│ agent-team-builder           [Orchestrating]            │
│ ai-infra-security-hardening  [Procedural]               │
│ dmir-defense-systems-mentor  [Mentoring]                │
│ skill-creator (examples/)    [Meta]                     │
└────────────────────────────────────────────────────────┘
```

**Legend:** ✅ = exists, ❌ = cần tạo mới

---

## TỔNG KẾ: SKILLS CẦN TẠO

| # | Skill Name | Pattern | Mega-Skill | Priority | Effort |
|---|-----------|---------|-----------|----------|--------|
| 1 | `design-sprint-driver` | Execution | #1 P&B Application | ★★★★★ | Medium |
| 2 | `6-flow-function-builder` | Analytical | #2 Integration | ★★★★☆ | Medium |
| 3 | `decision-teaching-engine` | Compound | #3 Documentation | ★★★★☆ | Medium |
| 4 | `mentoring-session-runner` | Mentoring | #3 Teaching | ★★★☆☆ | Low |
| 5 | `ai-validation-gate` | Gate | #4 Validation | ★★★☆☆ | Low |
| 6 | `fallback-designer` | Generative | #4 Fallback | ★★★☆☆ | Medium |
| 7 | `performance-envelope-tester` | Evaluative | #4 Validation | ★★☆☆☆ | High |
| 8 | `signal-knowledge-pipeline` | Pipeline | #5 Knowledge | ★★★☆☆ | High |
| 9 | `meeting-signal-extractor` | Analytical | #5 Extraction | ★★☆☆☆ | Medium |
| 10 | `vault-session-manager` | Procedural | #5 PARA/Obsidian | ★★☆☆☆ | Medium |

**Build order recommendation (theo leverage × dependency):**
1. `design-sprint-driver` — pump cho toàn bộ hệ thống
2. `ai-validation-gate` — safety-critical, low effort
3. `decision-teaching-engine` — compounds everything
4. `6-flow-function-builder` — tool cho integration-architecture
5. `fallback-designer` — tool cho ai-validation-gate
6-10: còn lại theo nhu cầu

---

## ĐOẠN BỔ SUNG CHO MEGA-PROMPT

Thay thế section "VÍ DỤ: CÁC LOẠI SKILL THƯỜNG TẠO" bằng:

```markdown
## CÁC LOẠI SKILL PATTERN

| Loại | Ví dụ | Pattern | Khi nào dùng |
|---|---|---|---|
| **Analytical** | stock-flow-mapper, 6-flow-function-builder | Content → Framework → Structured output | Phân tích, mapping, detection |
| **Generative** | engineering-mnemonic-creator, fallback-designer | Input → Creative synthesis → Novel output | Tạo artifacts mới |
| **Evaluative** | concept-evaluation-assistant, performance-envelope-tester | Options → Criteria → Score → Recommend | So sánh, đánh giá, ranking |
| **Procedural** | quality-gate-reporter, vault-session-manager | Event → Checklist → Log → Notify | Quy trình lặp lại, 1 event |
| **Mentoring** | pahl-beitz-mastery, mentoring-session-runner | State → Diagnose → Guide → Practice → Assess | Dạy, develop people |
| **Orchestrating** | deep-content-analyzer, compound-engineering | Input → Load sub-skills → Coordinate → Synthesize | Điều phối nhiều skills |
| **CAD/Technical** | cad-visualization-freecad, design-iteration-assistant | Description → Model/Drawing → Documentation | CAD, FreeCAD MCP |
| **★ Execution** | design-sprint-driver | Goal → Phase gate → Artifact → Review → Next → DONE | Drive qua milestones, chống procrastination |
| **★ Governance** | integration-architecture | State → Monitor → Detect drift → Intervene → Loop | Quản lý state liên tục, cross-domain |
| **★ Compound** | decision-teaching-engine | Act → Document → Teach → Feedback → Improve → Loop | 2+ activities tạo thành 1 reinforcing loop |
| **★ Gate** | ai-validation-gate | Product → Checklist → Test → Pass/Fail binary | Go/no-go, safety-critical, không thương lượng |
| **★ Pipeline** | signal-knowledge-pipeline | Raw → Capture → Extract → Structure → Store → Retrieve | Continuous flow processing, knowledge compound |
```

---

## CẢNH BÁO ANALYST TRAP

Document này phân loại 10 skills cần tạo. Tạo tất cả 10 sẽ mất ~2-3 tuần effort. Nhưng:

**Skill #1 (design-sprint-driver) tồn tại để PHÁ Analyst Trap.**

Nếu bạn dành 3 tuần tạo 10 skills thay vì 3 tuần Design-First Hour → Analyst Trap thắng.

**Recommended approach:**
1. Tạo `design-sprint-driver` NGAY (1-2 giờ) — vì nó enforce Design-First Hour
2. Tạo `ai-validation-gate` NGAY (1 giờ) — vì safety-critical
3. CÁC SKILL KHÁC: tạo khi CẦN, không tạo trước

> "Build the tool when you need the tool, not before."
> Đây chính là Application > Analysis.
