# ĐÁNH GIÁ 29 EXISTING SKILLS TRONG MÔ HÌNH 4 TẦNG
## DMIR → BRIDGE × FORGE × HELIX → Execution Layer

**Ngày:** 01/03/2026
**Câu hỏi:** 29 skills hiện tại fit ở đâu trong kiến trúc mới? Cái nào giữ, cái nào hấp thụ, cái nào retire?

---

## I. PHƯƠNG PHÁP ĐÁNH GIÁ

### 4 Verdicts

| Verdict | Nghĩa | Action |
|---------|--------|--------|
| **KEEP** | Skill phù hợp → giữ nguyên tại layer hiện tại | Thêm integration hooks vào architecture mới |
| **ABSORB** | Chức năng bị hấp thụ bởi skill mới → skill cũ dư thừa | Migrate logic vào skill mới, retire skill cũ |
| **MERGE** | 2+ skills cũ nên gộp thành 1 skill mới | Tạo skill hợp nhất, retire các skill thành phần |
| **EVOLVE** | Skill có giá trị nhưng cần redesign để fit architecture | Giữ nhưng refactor scope/trigger/integration |

### Assessment Criteria

```
Cho mỗi skill:
1. Chức năng chính → map vào layer nào? (DMIR / BRIDGE / FORGE / HELIX / Execution)
2. Overlap: chồng lấn bao nhiêu % với skill mới đã thiết kế?
3. Unique value: cung cấp gì mà skill mới CHƯA có?
4. Usage pattern: CEO/team dùng standalone hay chỉ khi được gọi bởi skill khác?
5. Verdict: KEEP / ABSORB / MERGE / EVOLVE
```

---

## II. ĐÁNH GIÁ TỪNG SKILL

---

### NHÓM A: CAD & DESIGN EXECUTION (4 skills)

**Đây là Execution Layer — skills thao tác trực tiếp với artifacts.**

#### 1. `cad-visualization-freecad`
```
Chức năng:  Tạo 3D model từ text description qua FreeCAD MCP
Layer:      EXECUTION (tạo artifact vật lý)
Overlap:    0% — không skill mới nào thay thế khả năng tạo CAD
Unique:     ★★★ Duy nhất có khả năng AI→CAD trực tiếp
Usage:      Được gọi bởi helix-embody-realize (Phase 3) và helix-detail-finalize (Phase 4)
```
**Verdict: KEEP ✅**
Giữ nguyên. Thêm integration: helix-embody-realize gọi skill này ở Step 5 (CAD modeling). forge-library cần output format chuẩn từ skill này.

#### 2. `cad-review-automation`
```
Chức năng:  Auto review DfX (DfM/DfA/DfR/DfT) cho bản vẽ CAD
Layer:      EXECUTION (kiểm tra artifact)
Overlap:    ~20% với helix-quality-gate (gate cũng check DfX nhưng ở mức checklist, không deep)
Unique:     ★★★ DfX analysis chi tiết — helix-quality-gate chỉ check pass/fail
Usage:      Được gọi bởi helix-embody-realize (Step 2: DfX review)
```
**Verdict: KEEP ✅**
Giữ nguyên. helix-quality-gate gọi skill này cho DfX verification. forge-fallback cần output từ skill này để verify fallback không vi phạm DfX.

#### 3. `cad-documentation-generator`
```
Chức năng:  Tạo tài liệu kỹ thuật từ CAD models (2D drawing, BOM, specs, assembly, inspection)
Layer:      EXECUTION (tạo document từ artifact)
Overlap:    ~15% với bridge-automate (automate doc generation) nhưng bridge-automate generic, skill này specific
Unique:     ★★★ Chuyên biệt CAD→document pipeline
Usage:      Được gọi bởi helix-detail-finalize (Step 2: generate manufacturing docs)
```
**Verdict: KEEP ✅**
Giữ nguyên. bridge-automate có thể orchestrate batch calls to skill này. HELIX Phase 4 dependency.

#### 4. `design-iteration-assistant`
```
Chức năng:  Đề xuất cải tiến thiết kế và thực hiện qua FreeCAD MCP
Layer:      EXECUTION (modify artifact)
Overlap:    ~40% với helix-embody-realize (Phase 3 design refinement loop)
Unique:     ★★ Change execution + version control (Rev A→B)
            Nhưng helix-embody-realize đã bao gồm iteration workflow
Usage:      Hoạt động TRONG Phase 3-4 loop. Không standalone.
```
**Verdict: EVOLVE ⚡**
Refactor: thu hẹp scope thành PURE EXECUTION tool (receive spec → execute change → report).
Loại bỏ: phần "propose improvements" (chồng với helix-embody-realize Step 2).
Giữ lại: phần version control, before/after comparison, change log.

---

### NHÓM B: SYSTEMS THINKING TOOLS (3 skills)

**Đây có thể thuộc DMIR Meta-Layer — tools cho hệ thống tư duy.**

#### 5. `stock-flow-mapper`
```
Chức năng:  Map stocks và flows trong bất kỳ hệ thống
Layer:      DMIR (diagnostic tool)
Overlap:    ~70% với dmir-map (CLD generation) + dmir-model (SD model)
Unique:     ★ Stand-alone mapping (dmir-map bao gồm stock-flow + causal links + loops)
            Nhưng: stock-flow-mapper tập trung hơn vào stocks/flows, dmir-map broader
Usage:      Được dùng bởi deep-content-analyzer (analytical framework)
            Có thể được gọi bởi dmir-map như sub-tool
```
**Verdict: ABSORB → `dmir-map` 🔄**
stock-flow-mapper's methodology hấp thụ vào dmir-map Step 1. dmir-map kế thừa templates stock-flow nhưng thêm causal links, loops, delays — broader capability.
**NHƯNG:** Nếu deep-content-analyzer vẫn dùng standalone → giữ cho analysis mode.
**Final:** KEEP for analytical use, nhưng operational use replaced by dmir-map.

#### 6. `feedback-loop-detector`
```
Chức năng:  Detect R/B loops, map dominance, identify archetypes
Layer:      DMIR (diagnostic tool)
Overlap:    ~80% với dmir-map (loop detection) + dmir-archetype (archetype ID)
Unique:     ★ Archetype library detail (8 archetypes with counter-strategies)
            Nhưng: dmir-archetype bao gồm đầy đủ + thêm Workshop X context
Usage:      Được dùng bởi deep-content-analyzer
```
**Verdict: ABSORB → `dmir-map` + `dmir-archetype` 🔄**
Loop detection → dmir-map. Archetype detection → dmir-archetype.
**Final:** KEEP for analytical use, operational use replaced.

#### 7. `meadows-leverage-analyzer`
```
Chức năng:  Identify 12 leverage points, rank, recommend interventions
Layer:      DMIR (intervention planning tool)
Overlap:    ~85% với dmir-lever (leverage point intervention design)
Unique:     ★ General-purpose (any system). dmir-lever specific to Workshop X operational context.
Usage:      Được dùng bởi deep-content-analyzer
```
**Verdict: ABSORB → `dmir-lever` 🔄**
**Final:** KEEP for analytical use, operational use replaced by dmir-lever.

**⚠️ Pattern cho Nhóm B:**
```
stock-flow-mapper, feedback-loop-detector, meadows-leverage-analyzer
= ANALYTICAL TOOLS cho deep-content-analyzer (content analysis mode)

Trong mô hình 4 tầng:
= OPERATIONAL TOOLS cho DMIR (system optimization mode)

GIẢI PHÁP: Giữ cả 3 cho analytical use (deep-content-analyzer gọi).
           dmir-* skills KẾ THỪA methodology nhưng thêm Workshop X operational context.
           Về lâu dài: 3 skills này CÓ THỂ retire nếu dmir-* skills đủ general.
           Về ngắn hạn: KEEP (dual use: analysis + operations).
```

---

### NHÓM C: META-LEARNING SKILLS (12 skills)

**Nhóm lớn nhất. Nhiều skill nhỏ, highly overlapping, cần consolidation.**

#### 8. `pahl-beitz-mastery`
```
Chức năng:  Comprehensive mentoring system cho P&B methodology
Layer:      Không rõ — LEARNING (không phải Execution, không phải Operations)
Overlap:    ~60% với HELIX phase skills (helix-task-clarify, concept-generate, etc.)
Unique:     ★★ TEACHING focus — how to LEARN the methodology, not how to EXECUTE it
            HELIX = execute design. pahl-beitz-mastery = learn to design.
Usage:      Standalone learning. Được dùng bởi engineering-learning-architecture-builder.
```
**Verdict: EVOLVE ⚡**
Refactor: Scope = LEARNING ONLY. Không còn hướng dẫn thực hiện (HELIX làm).
Mới: "Khi engineer mới cần LEARN P&B → pahl-beitz-mastery. Khi team cần EXECUTE → HELIX."

#### 9. `requirements-abstraction-mentor`
```
Chức năng:  Guide through P&B 5-step abstraction process
Layer:      EXECUTION (task clarification sub-tool)
Overlap:    ~75% với helix-task-clarify Step 3 (abstraction)
Unique:     ★★ Deep abstraction methodology (5-step process detail)
            helix-task-clarify broader (full Phase 1) nhưng abstraction step less detailed
Usage:      Được gọi bởi helix-task-clarify Step 3
```
**Verdict: KEEP as sub-tool ✅**
Giữ. helix-task-clarify gọi skill này cho abstraction step. Skill này là DEEP TOOL cho một bước cụ thể.

#### 10. `engineering-concept-evaluation-assistant`
```
Chức năng:  VDI 2225 + Pugh Matrix cho concept selection
Layer:      EXECUTION (concept evaluation sub-tool)
Overlap:    ~70% với helix-concept-generate Step 3 (evaluation)
Unique:     ★★ VDI 2225 calculation detail + ACH criteria integration
Usage:      Được gọi bởi helix-concept-generate Step 3 + forge-shift (ACH evaluation)
```
**Verdict: KEEP as sub-tool ✅**
Giữ. Cần EVOLVE: thêm ACH-specific criteria (Fallback Level, Reuse Potential, Data Availability) vào VDI 2225 template.

#### 11. `engineering-design-review-mentor`
```
Chức năng:  Critique and improve defense engineering designs
Layer:      Trùng giữa EXECUTION và HELIX
Overlap:    ~65% với helix-quality-gate (phase gate review) + cad-review-automation (DfX)
Unique:     ★ General review mentoring. Nhưng helix-quality-gate + cad-review cụ thể hơn.
Usage:      Standalone — nhưng trong mô hình mới, review = helix-quality-gate gọi cad-review
```
**Verdict: ABSORB → `helix-quality-gate` + `cad-review-automation` 🔄**
Review capability phân phối: technical check → cad-review. Phase gate → helix-quality-gate. Không cần skill riêng.

#### 12. `engineering-systems-mapper`
```
Chức năng:  Visualize defense design problems as interconnected systems
Layer:      DMIR (diagnostic)
Overlap:    ~85% với dmir-map (CLD) — gần như identical purpose
Unique:     ★ Design-specific language (vs dmir-map general). Nhưng dmir-map đã bao gồm design scope.
Usage:      Ít dùng standalone. dmir-map replaces.
```
**Verdict: ABSORB → `dmir-map` 🔄**

#### 13-22. Engineering Learning Sub-Skills (10 skills)

```
engineering-feynman               → Feynman technique for P&B concepts
engineering-chunking-breakdown    → Break complex topics into learning chunks
engineering-focus-session-optimizer → Pomodoro + time slicing for design work
engineering-interleaving-scheduler → Mix multiple design topics in study
engineering-learning-architecture-builder → Design complete learning pathways
engineering-learning-journal-keeper → Structured reflection on learning
engineering-mnemonic-creator      → Memory aids for design concepts
engineering-project-progress-tracker → Track mastery progression
engineering-self-assessment-rubric-generator → Generate assessment rubrics
engineering-targeted-drill-master → Practice drills for weak areas
```

**Collective Assessment:**

```
Layer:      KHÔNG FIT vào bất kỳ layer nào trong mô hình operational 4 tầng
            Đây là LEARNING/PERSONAL DEVELOPMENT tools
            
Overlap với mô hình mới:
  - engineering-learning-journal-keeper ≈ 40% helix-design-journal + dmir-reflect
  - engineering-project-progress-tracker ≈ 30% bridge-dashboard (metrics tracking)
  - engineering-focus-session-optimizer → CEO protocol đã thiết kế trong 4 architectures
  - Các skill khác → KHÔNG overlap vì mô hình mới không có learning layer

Unique value:
  - ★★★ cho LEARNING use case (khi engineer mới cần master P&B)
  - ★ cho OPERATIONAL use case (CEO/team đã biết P&B, cần execute)

Usage pattern:
  - Dùng bởi deep-content-analyzer cho meta-learning analysis
  - Dùng standalone khi KN hoặc team member ĐANG HỌC
  - KHÔNG dùng trong daily operational workflow
```

**Verdict: CONSOLIDATE + KEEP cho learning use case 🔄**

```
HIỆN TẠI: 10 skills riêng rẽ → confusing, overlap, hard to trigger correctly

ĐỀ XUẤT: Gộp thành 2-3 skills:

  1. "learn-methodology" (gộp: feynman, chunking, mnemonic, architecture-builder)
     → "Tôi cần HỌC concept X" → skill chọn technique phù hợp
     
  2. "learn-practice" (gộp: drill-master, interleaving-scheduler, focus-session)
     → "Tôi cần LUYỆN TẬP skill Y" → skill thiết kế practice plan
     
  3. "learn-track" (gộp: journal-keeper, progress-tracker, rubric-generator)
     → "Tôi đang ở đâu trong learning journey?" → skill đánh giá + log

  Hoặc đơn giản hơn:
  
  1. "learn-pahl-beitz" (gộp pahl-beitz-mastery + 10 learning skills)
     → MỘT skill duy nhất cho learning use case
     → Chọn technique tự động based on learner's question
```

---

### NHÓM D: ANALYTICAL / META SKILLS (5 skills)

#### 23. `dmir-defense-systems-mentor` (current)
```
Chức năng:  Full DMIR 4-phase analytical framework
Layer:      DMIR meta-layer
Overlap:    ~90% với 8 dmir-* skills mới
Unique:     ★ Monolithic — tất cả 4 phases trong 1 skill. Mới: phân tách thành 8.
Usage:      Replaced entirely by dmir-map/archetype/model/constrain/lever/reflect/paradigm/cycle-plan
```
**Verdict: ABSORB → 8 `dmir-*` skills mới 🔄**
Retire sau khi 8 skills mới implement. Giữ references/ folder (diagnosis-guide, sd-modeling-guide, toc-implementation, system-archetypes, leverage-points-hierarchy) — chuyển thành shared resources.

#### 24. `deep-content-analyzer`
```
Chức năng:  Multi-framework analysis of articles/content (fV/vA/vB/vC/vD modes)
Layer:      KHÔNG thuộc operational architecture — đây là ANALYTICAL TOOL cho CEO learning
Overlap:    ~10% với DMIR (dùng stock-flow, feedback-loop, leverage tools)
Unique:     ★★★ Content analysis + debate + ARCHITECT framework generation
            Không skill operational nào thay thế khả năng phân tích content
Usage:      Standalone — CEO dùng khi đọc article/book/podcast và muốn deep analysis
```
**Verdict: KEEP ✅ (outside operational architecture)**
Giữ nguyên. deep-content-analyzer không thuộc mô hình 4 tầng — nó là PERSONAL ANALYTICAL TOOL. Nó gọi systems thinking skills (stock-flow, feedback-loop, meadows) như sub-tools. Trong tương lai có thể gọi dmir-* skills thay thế.

#### 25. `compound-engineering`
```
Chức năng:  Extract learnings from work sessions, compound knowledge into CLAUDE.md
Layer:      BRIDGE (bridge-flywheel / bridge-cross-learn territory)
Overlap:    ~50% với bridge-flywheel (learning extraction) + bridge-knowledge-base (KB update)
Unique:     ★★ Automated nightly review loop — bridge-flywheel manual hơn
            Self-improving agent system — bridge-* skills require human trigger
Usage:      Background automation — CÓ THỂ complement bridge-flywheel
```
**Verdict: EVOLVE ⚡**
Refactor: compound-engineering trở thành AUTOMATION ENGINE cho bridge-flywheel. bridge-flywheel = framework + measurement. compound-engineering = automated extraction mechanism.

#### 26. `skills-mastery-system`
```
Chức năng:  Systems-based skill mastery using leverage points
Layer:      Learning (personal development)
Overlap:    ~40% với engineering learning skills, ~20% với dmir-lever
Unique:     ★ General skill mastery (not P&B-specific). Uses Meadows leverage for learning.
Usage:      Rare standalone — mostly superseded by more specific learning skills
```
**Verdict: ABSORB → consolidated learning skill 🔄**

#### 27. `quality-gate-reporter`
```
Chức năng:  Automate 3-Gate Quality System reporting (Gate 1/2/3 cho MTB-20, TDR, BB-01)
Layer:      EXECUTION (manufacturing quality reporting)
Overlap:    ~40% với helix-quality-gate (design phase gates ≠ manufacturing quality gates)
Unique:     ★★★ MANUFACTURING quality — completely different from DESIGN quality
            helix-quality-gate = "design ready for next phase?"
            quality-gate-reporter = "manufactured batch passes inspection?"
Usage:      Production workflow — Airtable integration, Lark notifications
```
**Verdict: KEEP ✅**
Giữ nguyên. KHÁC BIỆT RÕ: helix-quality-gate (design), quality-gate-reporter (manufacturing). Cả hai cần tồn tại. quality-gate-reporter có thể được gọi bởi forge-validate (Stage 3: production validation).

---

### NHÓM E: INFRASTRUCTURE SKILLS (2 skills)

#### 28. `agent-team-builder`
```
Chức năng:  Build multi-agent teams, D-M-I-R cycles, handoff protocols
Layer:      META-INFRASTRUCTURE (how to BUILD the skill system itself)
Overlap:    ~20% với dmir-cycle-plan (planning cycles)
Unique:     ★★★ Agent architecture — needed to IMPLEMENT the 38-skill system
Usage:      Used when BUILDING new skills, not when USING them
```
**Verdict: KEEP ✅ (meta-infrastructure)**
Giữ. agent-team-builder là tool để IMPLEMENT bộ 38 skills mới. Nó ở NGOÀI operational architecture — giống như compiler không thuộc program nó compile.

#### 29. `ai-infra-security-hardening`
```
Chức năng:  Secure AI infrastructure (Clawdbot, Claude Code, MCP)
Layer:      META-INFRASTRUCTURE (security)
Overlap:    0% — không skill nào trong architecture mới handle security
Unique:     ★★ Defense context — security critical cho defense manufacturing
Usage:      Periodic — khi deploy hoặc audit AI infrastructure
```
**Verdict: KEEP ✅ (meta-infrastructure)**
Giữ. Security is non-negotiable trong defense context.

---

## III. TỔNG HỢP: VERDICT MAP

```
╔═══════════════════════════════════════════════════════════════════════╗
║                    29 EXISTING SKILLS → VERDICT                      ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  KEEP ✅ (giữ nguyên, thêm integration hooks):              9 skills ║
║  ├── cad-visualization-freecad     (Execution: CAD modeling)         ║
║  ├── cad-review-automation         (Execution: DfX checking)         ║
║  ├── cad-documentation-generator   (Execution: doc generation)       ║
║  ├── requirements-abstraction-mentor (Execution: abstraction tool)   ║
║  ├── engineering-concept-evaluation-assistant (Execution: VDI 2225)  ║
║  ├── quality-gate-reporter         (Execution: manufacturing QC)     ║
║  ├── deep-content-analyzer         (Personal: content analysis)      ║
║  ├── agent-team-builder            (Meta: skill construction)        ║
║  └── ai-infra-security-hardening   (Meta: security)                  ║
║                                                                       ║
║  ABSORB 🔄 (chức năng hấp thụ vào skill mới):             7 skills  ║
║  ├── dmir-defense-systems-mentor   → 8 dmir-* skills mới            ║
║  ├── engineering-design-review-mentor → helix-quality-gate + cad-rev ║
║  ├── engineering-systems-mapper    → dmir-map                        ║
║  ├── skills-mastery-system         → consolidated learning skill     ║
║  ├── stock-flow-mapper*            → dmir-map (keep for analysis)    ║
║  ├── feedback-loop-detector*       → dmir-archetype (keep for anal.) ║
║  └── meadows-leverage-analyzer*    → dmir-lever (keep for analysis)  ║
║      * dual-use: KEEP for deep-content-analyzer, REPLACE for ops     ║
║                                                                       ║
║  EVOLVE ⚡ (giữ nhưng refactor scope):                     3 skills  ║
║  ├── design-iteration-assistant    → narrow to pure execution        ║
║  ├── pahl-beitz-mastery            → narrow to LEARNING only         ║
║  └── compound-engineering          → become bridge-flywheel engine   ║
║                                                                       ║
║  CONSOLIDATE 🔄 (gộp nhiều → ít):                        10 skills  ║
║  ├── engineering-feynman                    ┐                        ║
║  ├── engineering-chunking-breakdown         │                        ║
║  ├── engineering-mnemonic-creator           ├→ "learn-methodology"   ║
║  ├── engineering-learning-architecture-builder ┘                     ║
║  ├── engineering-targeted-drill-master      ┐                        ║
║  ├── engineering-interleaving-scheduler     ├→ "learn-practice"      ║
║  ├── engineering-focus-session-optimizer    ┘                        ║
║  ├── engineering-learning-journal-keeper    ┐                        ║
║  ├── engineering-project-progress-tracker   ├→ "learn-track"         ║
║  └── engineering-self-assessment-rubric-gen ┘                        ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## IV. KIẾN TRÚC SAU MIGRATION

```
TRƯỚC: 29 skills (flat, no hierarchy, overlapping)
SAU:   46 skills across 5 layers (clear hierarchy, minimal overlap)

╔══════════════════════════════════════════════════════════════════════════╗
║ LAYER 0: META-INFRASTRUCTURE (không đổi)                                ║
║   agent-team-builder, ai-infra-security-hardening                       ║
║   → Dùng để BUILD và SECURE hệ thống skill                             ║
╠══════════════════════════════════════════════════════════════════════════╣
║ LAYER 1: DMIR META-LAYER (8 skills MỚI, thay thế 1 cũ)               ║
║   dmir-map, dmir-archetype, dmir-model, dmir-constrain,                ║
║   dmir-lever, dmir-reflect, dmir-paradigm, dmir-cycle-plan             ║
║   Replaces: dmir-defense-systems-mentor, engineering-systems-mapper     ║
║   Absorbs from: stock-flow-mapper, feedback-loop-detector, meadows-*   ║
╠══════════════════════════════════════════════════════════════════════════╣
║ LAYER 2: OPERATIONAL (30 skills MỚI)                                   ║
║   BRIDGE (10): knowledge-base, deploy-gate, signal-extract, automate,  ║
║                judgment, flywheel, risk-radar, cross-learn, dashboard,  ║
║                talent-map                                               ║
║   FORGE (10):  scout, shift, fallback, validate, trust, library,       ║
║                flywheel, portfolio, cost, evolve                        ║
║   HELIX (10):  project-init, task-clarify, concept-generate,           ║
║                embody-realize, detail-finalize, sync-protocol,          ║
║                integration-debt, quality-gate, 6flow-mapper,            ║
║                design-journal                                           ║
║   Absorbs from: compound-engineering → bridge-flywheel engine           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ LAYER 3: EXECUTION (7 skills KEEP + 1 EVOLVE = 8)                     ║
║   cad-visualization-freecad ✅                                          ║
║   cad-review-automation ✅                                               ║
║   cad-documentation-generator ✅                                         ║
║   design-iteration-assistant ⚡ (refactored: execution only)            ║
║   requirements-abstraction-mentor ✅                                     ║
║   engineering-concept-evaluation-assistant ✅ (+ ACH criteria)          ║
║   quality-gate-reporter ✅                                               ║
║   (7 → confirmed as correct Execution Layer)                            ║
╠══════════════════════════════════════════════════════════════════════════╣
║ LAYER 4: LEARNING (3 consolidated + 1 evolved = 4)                     ║
║   learn-methodology (NEW: gộp feynman+chunking+mnemonic+architecture)  ║
║   learn-practice (NEW: gộp drill+interleaving+focus-session)           ║
║   learn-track (NEW: gộp journal+progress+rubric)                       ║
║   pahl-beitz-mastery ⚡ (refactored: learning only)                     ║
╠══════════════════════════════════════════════════════════════════════════╣
║ LAYER 5: PERSONAL ANALYTICAL (1 KEEP)                                  ║
║   deep-content-analyzer ✅ (+ 3 systems thinking tools for analysis)   ║
║   stock-flow-mapper (kept for analytical use)                           ║
║   feedback-loop-detector (kept for analytical use)                      ║
║   meadows-leverage-analyzer (kept for analytical use)                   ║
╚══════════════════════════════════════════════════════════════════════════╝

TỔNG: 
  Layer 0: 2 (meta-infrastructure)
  Layer 1: 8 (DMIR meta)
  Layer 2: 30 (BRIDGE + FORGE + HELIX operational)
  Layer 3: 7-8 (execution tools)
  Layer 4: 3-4 (learning)
  Layer 5: 1+3 (personal analytical)
  ─────────────────
  TOTAL: 53-55 skills (nhưng Layer 4+5 = personal use, Layer 0 = build-time)
  OPERATIONAL CORE: Layer 1+2+3 = 45-46 skills (CEO + team daily use)
```

---

## V. GAP ANALYSIS — CÒN THIẾU GÌ?

```
SAU MIGRATION, CÁC GAP CÒN LẠI:

1. ❌ KHÔNG CÓ: Supply chain management skill
   Cần: Track suppliers, lead times, sanctions risk, alternative sources
   Thuộc: FORGE cross-stage hoặc BRIDGE cross-stage
   Priority: MEDIUM (critical khi production scales)

2. ❌ KHÔNG CÓ: Customer relationship management skill
   forge-trust bao gồm trust evidence nhưng CHƯA có full CRM
   Cần: Contact log, engagement timeline, proposal tracking
   Priority: LOW (CEO handles manually, manageable at current scale)

3. ❌ KHÔNG CÓ: Manufacturing process planning skill
   quality-gate-reporter covers QC nhưng KHÔNG plan manufacturing process
   Cần: Process routing, machine scheduling, capacity planning
   Priority: LOW-MEDIUM (relevant when Workshop X scales production)

4. ❌ KHÔNG CÓ: Test planning / test automation skill
   forge-validate includes test plan nhưng high-level
   Cần: Detailed test case generation, automated test execution, regression
   Priority: MEDIUM (especially for AI model testing)

5. ⚠️ WEAK: Financial modeling skill
   forge-cost covers ACH economics nhưng KHÔNG full financial model
   Cần: Cash flow projection, investment ROI, budget vs actual
   Priority: LOW (CEO handles, CFO territory)
```

---

## VI. MIGRATION ROADMAP

```
PHASE 1 (Tuần 1-2): QUICK WINS — không cần build skill mới
───────────────────────────────────────────────────────────
✅ Confirm 9 KEEP skills — add integration hooks in descriptions
⚡ Refactor design-iteration-assistant trigger/scope
⚡ Refactor pahl-beitz-mastery scope to "learning only"
📝 Document: "skill X is called by new skill Y at step Z"

PHASE 2 (Tuần 3-4): BUILD DMIR + consolidate learning
──────────────────────────────────────────────────────
🆕 Implement 3 priority DMIR skills (constrain, archetype, cycle-plan)
🔄 Consolidate 10 learning skills → 3 (learn-methodology, practice, track)
🔄 Retire engineering-design-review-mentor
🔄 Retire engineering-systems-mapper

PHASE 3 (Tuần 5-8): BUILD OPERATIONAL CORE
──────────────────────────────────────────
🆕 Implement BRIDGE priority 1-3 (knowledge-base, signal-extract, dashboard)
🆕 Implement FORGE priority 1-3 (shift, portfolio, fallback)
🆕 Implement HELIX priority 1-3 (project-init, sync-protocol, integration-debt)
🔄 Evolve compound-engineering → bridge-flywheel automation engine

PHASE 4 (Tuần 9-12): COMPLETE + INTEGRATE
─────────────────────────────────────────
🆕 Implement remaining 21 operational skills
🆕 Implement remaining 5 DMIR skills
🔄 Retire dmir-defense-systems-mentor (replaced by 8 new dmir-*)
📝 Full integration test: call chains verified end-to-end
```

---

## VII. ANSWER TO ORIGINAL QUESTION

**"8 existing Execution Layer skills — mức độ phù hợp?"**

```
ĐÁNH GIÁ: 7/8 PHÙ HỢP TỐT, 1 CẦN REFACTOR

✅ cad-visualization-freecad     → PERFECT fit. Duy nhất tạo CAD. Giữ nguyên.
✅ cad-review-automation         → PERFECT fit. DfX checking. Giữ nguyên.
✅ cad-documentation-generator   → PERFECT fit. Doc generation. Giữ nguyên.
⚡ design-iteration-assistant    → 60% fit. Cần thu hẹp scope (loại "propose", giữ "execute").
✅ quality-gate-reporter         → PERFECT fit. Manufacturing QC ≠ design QC. Giữ nguyên.
✅ pahl-beitz-mastery            → WRONG LAYER — di chuyển sang Learning Layer. Vẫn hữu ích.
✅ requirements-abstraction-mentor → GOOD fit. Sub-tool cho helix-task-clarify.
✅ engineering-concept-evaluation → GOOD fit. Sub-tool cho helix-concept-generate. Cần thêm ACH criteria.

KẾT LUẬN: Execution Layer đúng 7 skills (+ 1 refactor).
          Nhưng pahl-beitz-mastery thuộc Learning Layer, không phải Execution.
          Vậy THỰC TẾ Execution = 6 KEEP + 1 EVOLVE = 7 skills.
          + pahl-beitz-mastery → Learning Layer (1 skill).
```

---

*Assessment hoàn tất. 29 skills → 9 KEEP + 7 ABSORB + 3 EVOLVE + 10 CONSOLIDATE.*
*Kiến trúc mới: 6 layers, 53-55 total skills, operational core 45-46.*
*Migration: 12 tuần, 4 phases, backward-compatible (KEEP skills work throughout).*
