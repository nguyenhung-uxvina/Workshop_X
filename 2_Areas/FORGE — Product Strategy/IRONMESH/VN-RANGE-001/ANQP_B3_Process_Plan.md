---
skill: S1-S5 Integration
artifact: B3 — Quy trình Công nghệ Sản xuất (Manufacturing Process Plan)
framework: TCCNQP + ISO 9001 + Law 38/2024 + TCVN Process Standards
slash_commands: /qtcn
type: prompt-library
version: 2.0
created: 2026-02-23
updated: 2026-03-04
schema: v3.0 (Workshop X Enhanced)
parent: Phase5_ANQP_Vietnam.md
prompt_ids: P62
---

# B3: Quy trình Công nghệ Sản xuất — S1-S5 Integration Framework

> **Purpose:** Comprehensive operational guide for generating, reviewing, and governing the Manufacturing Process Plan (B3) using all 5 agentic skills.
> **Artifact ID:** B3 in ANQP pipeline (Phase 1-4 parallel track)
> **Output:** Vietnamese-format manufacturing process plan ready for QMS integration and military customer review.

---

## HOW THIS FILE WORKS

```
SECTION 1 — PROMPT TEMPLATE     S1 AI Literacy    → P62 /qtcn DCTRS template
SECTION 2 — ORCHESTRATION       S2 Multi-Agent    → Agent pipeline + merge protocol
SECTION 3 — QC GATE             S3 Critical QC    → 14-point checklist + error patterns
SECTION 4 — AUTOMATION DESIGN   S4 Process Auto   → Consequence map + HITL + SDK pipeline
SECTION 5 — GOVERNANCE          S5 Ethical Gov    → TCVN matrix + audit trail + accountability
SECTION 6 — QUY TRÌNH           Process           → Step-by-step B3 generation workflow
SECTION 7 — CHECKLISTS          Operational       → Completeness, approval, readiness
SECTION 8 — ARTIFACT TEMPLATES  Output            → Tables, forms, diagrams to fill
```

---

## SECTION 1 — PROMPT TEMPLATE (S1: AI Literacy)

### P62 — Quy trình Công nghệ Sản xuất (`/qtcn`)
**Artifact:** B3 | **Use when:** Phase 4 BOM (P33) approved — manufacturing sequence can be defined
**Why it works:** Vietnamese military production requires a formal process plan (Quy trình Công nghệ) integrated into the company's QMS. Without B3, manufacturing is ad hoc — quality varies, audit fails, and Cục TC-ĐL-CL will not certify production readiness. This converts Pahl & Beitz Phase 3-4 output into a structured Vietnamese manufacturing document.

```
TASK: Generate Quy trình Công nghệ Sản xuất (Manufacturing Process Plan) for {{product_name}}
  Convert BOM, DfX analysis, and layout design into step-by-step manufacturing process.
  Vietnamese primary language, English technical terms in parentheses.
  Include: process flow, workstation assignment, tooling, QC checkpoints, cycle times.
  Return: Complete process plan ready for QMS integration and production floor use.

CONTEXT:
  product: {{product_name}} ({{product_code}})
  phase: ANQP parallel (generated alongside Phase 3-4)
  inputs:
    - BOM (P33): {{reference}}
    - DfX Analysis (P25): {{reference — DfM scores especially}}
    - Layout Design (P23): {{reference — assembly sequence}}
    - Material Selection (P24): {{reference — process compatibility}}
    - Standards Compliance Matrix (P51): {{reference — process standards}}
    - Cost Analysis (P35): {{reference — target manufacturing cost}}
  production_facility: {{factory name or TBD}}
  target_volume: {{units/year or batch size}}
  local_content_target: {{percentage, e.g., ≥50%}}

CONSTRAINTS:
  hard_limits:
    - Every BOM line item → ≥1 process step (zero orphan parts)
    - Every [SAFETY-CRITICAL] component → 100% inspection at QC hold point
    - Process sequence must match Phase 3 assembly order (no backwards dependencies)
    - Cycle time estimates numeric for ≥80% of process steps
    - Local vs import material routing explicit at each procurement stage
    - All process standards cited as TCVN equivalents where available
    - Every operation → references applicable B2 drawings (zero operations without drawing ref)
    - Process inspection checklist → covers every QC hold point with accept/reject criteria per drawing/spec
  reject_conditions:
    - BOM not approved — process plan depends on frozen BOM
    - DfX-Manufacturing score <2.0 — product not manufacturable as designed, redesign first
    - Target production facility unknown AND no generic process assumptions stated
    - No safety-critical items identified — implies Phase 1 requirements not reviewed
  prohibited_actions:
    - Never skip incoming inspection step for imported components
    - Never combine incompatible processes in same workstation (e.g., soldering + conformal coating)
    - Never specify equipment without marking availability status [CÓ SẴN / CẦN MUA / CẦN THUÊ]
    - Never set cycle time = 0 or TBD for safety-critical operations
    - Never fabricate Vietnamese process terminology — mark [KIỂM TRA thuật ngữ] if unsure
    - Never optimize cycle time at expense of operator safety margins

TOOLS_ALLOWED: ["read_file", "write_file", "calculate"]

HITL_CHECKPOINT:
  per_output: false — complete full process plan before review
  on_completion: true — "Process plan requires process engineer + QC manager sign-off"
  on_safety_flag: "IMMEDIATE" — any safety-critical process step without 100% inspection
  on_equipment_gap: true — "Any equipment marked [CẦN MUA] → procurement review before plan approval"
  on_dxf_conflict: true — "DfX score <3 for any process → flag for design review"
  trigger_note: "This document controls how the product is built. Errors here → systematic defects."

SAFETY_OVERRIDE: "If any process step involves hazardous materials (solvents, flux, lead) → PPE requirement MUST be specified. If operator exposure limit unclear → STOP, consult MSDS."

SUCCESS_CRITERIA:
  completeness: "100% BOM items traceable to process steps"
  sequence_validity: "Zero backwards dependencies in process flow"
  time_estimates: "≥80% steps have numeric cycle time"
  qc_coverage: "100% safety-critical items have QC hold points"
  local_routing: "Local content % calculable from process plan"
  standards_cited: "≥80% process steps reference applicable standard"
  vietnamese_quality: "All process names in correct Vietnamese technical terminology"
  drawing_coverage: "100% operations reference applicable B2 drawings — no orphan drawings in B2"
  inspection_checklist: "Every QC hold point has detailed inspection items with drawing/spec cross-reference"

FALLBACK_PROTOCOL:
  missing_process_data: "Mark [CẦN XÁC NHẬN — cần khảo sát nhà máy] — resolve with factory visit"
  unknown_tooling: "Flag [CẦN TƯ VẤN NHÀ CUNG CẤP] — vendor consultation required"
  dxf_conflict: "Flag process step with DfX conflict → include alternative approach"
  terminology_uncertain: "Mark [KIỂM TRA thuật ngữ] — native speaker review required"
  equipment_unavailable: "Propose alternative equipment or outsourcing option"
  unknown_error: "Save partial output, flag all incomplete sections, alert process engineer"

OUTPUT_FORMAT: markdown
UNCERTAINTY_FLAG: true — unverified process parameters tagged [GIẢ ĐỊNH]
EVIDENCE_REQUIRED: true — every standard citation includes source
LOG_LEVEL: detailed — full audit trail for QMS compliance
```

### P62 Output Structure

```
--- QUY TRÌNH CÔNG NGHỆ SẢN XUẤT ---

PHẦN I — THÔNG TIN CHUNG (General Information)
  1.1 Tên sản phẩm (Product Name): {{VN}} ({{EN}})
  1.2 Mã sản phẩm (Product Code): {{code}}
  1.3 Phiên bản quy trình (Process Version): {{version}}
  1.4 BOM tham chiếu (Reference BOM): {{BOM version + date}}
  1.5 Sản lượng mục tiêu (Target Volume): {{units/year}}
  1.6 Nhà máy sản xuất (Production Facility): {{name or TBD}}
  1.7 Ngày ban hành (Issue Date): {{date}}
  1.8 Người phê duyệt (Approved By): {{process engineer + QC manager}}

PHẦN II — SƠ ĐỒ QUY TRÌNH (Process Flow Diagram)
  Visual flow: Nguyên liệu đầu vào → Các bước gia công → Kiểm tra → Thành phẩm
  Symbols per ISO 5807 / TCVN 7961:
    ○ = Bắt đầu/Kết thúc (Start/End)
    □ = Công đoạn (Operation)
    ◇ = Kiểm tra/Quyết định (Inspection/Decision)
    ▽ = Lưu kho (Storage)
    → = Hướng di chuyển (Flow direction)
  Color coding:
    🟢 = Tự động (Automated)
    🟡 = Bán tự động (Semi-automated)
    🔴 = Thủ công (Manual)
    ⚠ = Điểm kiểm soát an toàn (Safety QC Hold)

PHẦN III — BẢNG CÔNG ĐOẠN CHI TIẾT (Detailed Operation Table)
  Table: | STT | Mã CĐ | Tên công đoạn (VN) | Operation (EN) | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số | Thời gian | Tiêu chuẩn | QC | Ghi chú |
  STT = sequential number
  Mã CĐ = operation code (OP-010, OP-020, etc. — increment by 10)
  Trạm = workstation ID
  Thông số = key process parameters (temp, pressure, speed, torque)
  Thời gian = cycle time per unit (minutes)
  QC = inspection type: KT100% (100% check) / KTmẫu (sampling) / Không (none)

PHẦN IV — PHÂN CÔNG TRẠM SẢN XUẤT (Workstation Assignment)
  Table: | Mã trạm | Tên trạm | Công đoạn | Thiết bị chính | Thiết bị phụ | Nhân lực | Yêu cầu môi trường |
  Yêu cầu môi trường = temperature, humidity, ESD, clean room level if applicable

PHẦN V — DANH MỤC THIẾT BỊ VÀ DỤNG CỤ (Equipment & Tooling List)
  Table: | STT | Tên thiết bị | Mã thiết bị | Công đoạn sử dụng | Trạng thái | Hiệu chuẩn | Ghi chú |
  Trạng thái = [CÓ SẴN] / [CẦN MUA] / [CẦN THUÊ] / [CẦN SỬA CHỮA]
  Hiệu chuẩn = calibration due date + standard

PHẦN VI — ĐỊNH MỨC VẬT TƯ VÀ LUỒNG VẬT LIỆU (Material Routing)
  Table: | STT | Vật tư (BOM ref) | Nguồn gốc | Nhà cung cấp | Lead time | Kiểm tra đầu vào | Công đoạn sử dụng |
  Nguồn gốc = NỘI ĐỊA (local) / NHẬP KHẨU (import)
  Kiểm tra đầu vào = incoming inspection requirements

  Summary:
  - Tổng vật tư nội địa: {{count}} ({{%}} giá trị)
  - Tổng vật tư nhập khẩu: {{count}} ({{%}} giá trị)
  - Tỷ lệ nội địa hóa theo quy trình: {{%}}

PHẦN VII — ĐIỂM KIỂM SOÁT CHẤT LƯỢNG (Quality Control Points)
  Table: | STT | Mã QC | Sau công đoạn | Loại KT | Tiêu chí đạt/không đạt | Thiết bị đo | Tần suất | Người thực hiện | Biểu mẫu |
  Loại KT = KT100% / KTmẫu (n=?) / KTtự_động
  Safety-critical items: ⚠ prefix, MUST be KT100%

PHẦN VIII — XỬ LÝ KHÔNG PHÙ HỢP (Non-Conformance Handling)
  Per QC point:
  - Tiêu chí phân loại: Loại bỏ / Sửa chữa / Nhượng bộ (Scrap / Rework / Concession)
  - Quy trình sửa chữa (Rework procedure) — if applicable
  - Thẩm quyền quyết định (Decision authority) — operator / QC / engineer / management
  - Biểu mẫu NCR (Non-Conformance Report form reference)

PHẦN IX — AN TOÀN LAO ĐỘNG (Occupational Safety)
  Table: | Công đoạn | Nguy cơ | Biện pháp | PPE | Tiêu chuẩn |
  Nguy cơ = hazard identification per process step
  PPE = required personal protective equipment
  Tiêu chuẩn = Luật ATVSLĐ 2015 + specific TCVN

PHẦN X — THỜI GIAN CHU KỲ VÀ NĂNG LỰC (Cycle Time & Capacity)
  10.1 Tổng thời gian chu kỳ (Total Cycle Time): {{minutes/unit}}
  10.2 Công đoạn nút thắt (Bottleneck Operation): {{operation + time}}
  10.3 Năng lực sản xuất (Production Capacity): {{units/shift, units/day, units/month}}
  10.4 Cân bằng chuyền (Line Balance): {{efficiency %}} — target ≥85%
  10.5 Thời gian thiết lập (Setup Time): {{minutes per batch changeover}}

PHẦN XI — DANH MỤC BẢN VẼ THEO CÔNG ĐOẠN (Process Drawing Reference)
  Map B2 drawing package → process operations → workstations.
  Ensures correct controlled drawings available at each station before production.

  Table: | STT | Mã CĐ | Tên công đoạn | Mã BV (B2) | Tên bản vẽ | Loại BV | Rev | Bắt buộc | Ghi chú |

  Loại BV categories:
    - BV-LR  = Bản vẽ lắp ráp (Assembly drawing)
    - BV-CT  = Bản vẽ chi tiết (Detail/part drawing)
    - BV-ĐT  = Sơ đồ điện (Electrical schematic)
    - BV-PCB = Bản vẽ PCB layout
    - BV-DD  = Sơ đồ đấu dây (Wiring diagram)
    - BV-QH  = Bản vẽ quang học (Optical drawing)
    - BV-KT  = Bản vẽ kiểm tra (Inspection/test drawing)

  Summary table:
  | Trạm SX | Tổng BV tại trạm | BV bắt buộc | BV tham khảo |
  Cross-check rules:
    - Every B2 drawing → ≥1 process step (no orphan drawings)
    - Every operation with custom parts → ≥1 detail drawing
    - Safety-critical operations → inspection drawing (BV-KT) mandatory
    - Drawings at workstation must be controlled copies (☑ mark)

PHẦN XII — CHECKLIST KIỂM TRA THEO QUI TRÌNH (Process Inspection Checklist)
  Detailed shop-floor inspection checklist per production stage.
  More granular than Phần VII: QC hold points define WHERE to inspect;
  this checklist defines WHAT to inspect, against WHICH drawing/spec, and HOW.

  Grouped by production stage:
    Stage A: Kiểm tra đầu vào (Incoming Inspection)
    Stage B: Kiểm tra bán thành phẩm điện tử (Electronics Sub-assembly)
    Stage C: Kiểm tra bán thành phẩm cơ khí (Mechanical Sub-assembly)
    Stage D: Kiểm tra lắp ráp tổng thể (Final Assembly)
    Stage E: Kiểm tra chức năng & hiệu chuẩn (Functional Test & Calibration)
    Stage F: Kiểm tra cuối cùng & đóng gói (Final Inspection & Packaging)

  Table per stage:
  | STT | Hạng mục kiểm tra | BV/TC tham chiếu | Phương pháp | Dụng cụ đo | Giá trị chấp nhận | Hành động nếu KĐ | Ai KT | Biểu mẫu |

  Rules:
    - ⚠ Safety-critical items: mandatory 100% inspection, dual-signature
    - Each stage ends with: "Stage verdict: ĐẠT / KHÔNG ĐẠT → tiếp tục / giữ lại / sửa chữa"
    - Inspection items cross-reference B2 drawing numbers AND B1 YCKT requirement IDs
    - Measurement values recorded (not just pass/fail) for SPC baseline
    - Non-conformance → NCR per Phần VIII procedure

PHẦN XIII — KÝ DUYỆT (Approval)
  Kỹ sư quy trình (Process Engineer):    _____________ Ngày: _____
  Quản lý QC (QC Manager):               _____________ Ngày: _____
  Quản lý sản xuất (Production Manager):  _____________ Ngày: _____
  Giám đốc kỹ thuật (Technical Director): _____________ Ngày: _____
```

---

## SECTION 2 — MULTI-AGENT ORCHESTRATION (S2)

### Agent Pipeline Design

```
┌─────────────────────────────────────────────────────────────────┐
│  MASTER AGENT — B3 Process Plan Controller                      │
│  State: holds merged process plan, resolves conflicts           │
│  Route: dynamic — decides which agents needed per product       │
└──────────┬──────────┬──────────┬──────────┬─────────────────────┘
           │          │          │          │
     ┌─────▼────┐ ┌──▼────┐ ┌──▼────┐ ┌──▼──────┐
     │ Agent A  │ │Agent B│ │Agent C│ │ Agent D │
     │ BOM      │ │DfX    │ │Local  │ │Standards│
     │ Decomp   │ │Constr │ │Router │ │Mapper   │
     └─────┬────┘ └──┬────┘ └──┬────┘ └──┬──────┘
           │          │          │          │
           └──────────┴──────────┴──────────┘
                          │
                    ┌─────▼─────┐
                    │  MERGE &  │
                    │  CONFLICT │
                    │  RESOLVE  │
                    └─────┬─────┘
                          │
                    ┌─────▼─────┐
                    │ QC GATE   │  ← Section 3
                    │ (S3)      │
                    └─────┬─────┘
                          │
                    ┌─────▼─────┐
                    │  HITL     │  ← Section 4
                    │  REVIEW   │
                    └───────────┘
```

### MASTER AGENT — B3 Process Plan Controller (Detailed Specification)

```
ROLE: Central orchestrator — holds B3 state, routes tasks to sub-agents,
      merges outputs, resolves conflicts, escalates to HITL when needed.
      This is NOT a separate LLM — it is the main Claude session using Task() delegation.

─────────────────────────────────────────────────────────────
STATE MODEL
─────────────────────────────────────────────────────────────

The Master Agent maintains a B3 State Object throughout the generation pipeline:

  b3_state = {
    "product":        {{product_name}},
    "bom_version":    {{P33 version — frozen}},
    "status":         INIT | DECOMPOSE | PARALLEL | MERGE | QC | REVIEW | APPROVED | REJECTED,
    "operation_list": [],          ← populated by Agent A, annotated by B/C/D
    "conflicts":      [],          ← populated during merge
    "qc_result":      null,        ← populated by QC Gate
    "flags": {
      "safety_critical_items":  [], ← from Phase 1 requirements
      "dfm_below_3":            [], ← from Agent B
      "equipment_gaps":         [], ← from Agent A/B
      "tcvn_uncertain":         [], ← from Agent D
      "local_content_risk":     [], ← from Agent C
      "hitl_required":          []  ← accumulated from all agents
    },
    "outputs": {
      "agent_a": null,             ← BOM decomposition result
      "agent_b": null,             ← DfX constraints result
      "agent_c": null,             ← Material routing result
      "agent_d": null              ← Standards mapping result
    }
  }

─────────────────────────────────────────────────────────────
ROUTING DECISION TREE
─────────────────────────────────────────────────────────────

START → Validate inputs
  │
  ├─ BOM (P33) exists and APPROVED?
  │    NO → STOP: "BOM not approved — cannot generate B3"
  │    YES ↓
  │
  ├─ DfX (P25) exists?
  │    NO → WARN: "No DfX data — Agent B will be skipped, process risks unassessed"
  │           Set agent_b_skip = true
  │    YES ↓
  │
  ├─ Standards matrix (P51) exists?
  │    NO → WARN: "No standards data — Agent D will use generic mapping only"
  │    YES ↓
  │
  ├─ Product complexity assessment:
  │    BOM items ≤20  → SIMPLE: Agent A only, B/C/D optional
  │    BOM items 21-80 → MEDIUM: All 4 agents, standard pipeline
  │    BOM items >80   → COMPLEX: All 4 agents + split Agent A by sub-assembly
  │
  └─ Route decision:
       status = DECOMPOSE → delegate to Agent A
       WAIT for Agent A completion
       status = PARALLEL → delegate to Agents B + C + D simultaneously
       WAIT for all parallel agents
       status = MERGE → execute merge protocol
       status = QC → execute QC Gate (Section 3)
       status = REVIEW → present to HITL
       HITL decision → APPROVED or REJECTED (return to relevant step)

─────────────────────────────────────────────────────────────
DELEGATION PROMPTS (what Master sends to each agent)
─────────────────────────────────────────────────────────────

DELEGATION TO AGENT A:
  Task("BOM decomposition for B3",
    prompt = """
    Read the BOM at {{bom_path}}.
    For each BOM item, classify by manufacturing technology:
    SMT / THT / MECH / CABLE / SW / TEST.
    Build an assembly dependency graph (DAG).
    Output: JSON-structured operation list with fields:
      op_code, op_name_vn, op_name_en, technology, bom_refs[], depends_on[], est_time_min
    Flag any unclassifiable items with [PHÂN LOẠI THỦ CÔNG].
    """,
    subagent_type = "general-purpose"
  )

DELEGATION TO AGENT B (after Agent A completes):
  Task("DfX constraint extraction for B3",
    prompt = """
    Read the DfX Analysis at {{dfx_path}}.
    For each operation in the following list: {{agent_a_output.operation_list}}
    Extract manufacturing constraints:
    - DfM score and specific concerns (tolerance, process, material)
    - DfA score and assembly difficulty flags
    - DfT score and test access requirements
    For DfM <3: propose process mitigation (fixture, jig, tooling).
    For DfM <2: flag STOP — redesign needed.
    Output: constraint table with fields:
      op_code, dfm_score, dfm_concern, mitigation, dfa_flag, dft_flag
    """,
    subagent_type = "general-purpose"
  )

DELEGATION TO AGENT C (after Agent A completes):
  Task("Local content routing for B3",
    prompt = """
    Read the BOM at {{bom_path}} and Cost Analysis at {{cost_path}}.
    For each BOM item, determine:
    - Source: NỘI ĐỊA (local) or NHẬP KHẨU (import)
    - Supplier (if known from BOM/cost data)
    - Lead time estimate (local: 1-4 weeks, import: 4-12 weeks + 2 week customs buffer)
    - Incoming inspection level: KT100% for import first 3 batches, KTmẫu for established local
    - Export control flag if applicable
    Calculate: total local content % by value.
    Flag items where source is uncertain: [CẦN TÌM NHÀ CUNG CẤP].
    Output: material routing table with fields:
      bom_ref, material_name, source, supplier, lead_weeks, inspection_level, export_flag, value_usd
    Plus summary: local_pct, import_pct, local_content_target_met (bool)
    """,
    subagent_type = "general-purpose"
  )

DELEGATION TO AGENT D (after Agent A completes):
  Task("Standards mapping for B3 process steps",
    prompt = """
    Read the Standards Compliance Matrix at {{standards_path}}.
    For each operation in the following list: {{agent_a_output.operation_list}}
    Map to applicable process standard:
    - Prefer TCVN equivalent. If none exists, cite international + [chưa có TCVN tương đương].
    - For special processes (welding, soldering, coating): note operator certification required.
    - Check if company currently holds required certification.
    Flag gaps: [CẦN CHỨNG NHẬN].
    Never fabricate TCVN numbers — if uncertain, mark [KIỂM TRA].
    Output: standards table with fields:
      op_code, process_type, tcvn_standard, intl_standard, cert_required, cert_status, notes
    Plus gap list: certifications needed before production can start.
    """,
    subagent_type = "general-purpose"
  )

─────────────────────────────────────────────────────────────
MERGE ALGORITHM
─────────────────────────────────────────────────────────────

After all agents complete, Master Agent executes:

  STEP 1: VALIDATE agent outputs
    - Agent A: check all BOM items covered (completeness)
    - Agent B: check constraint table matches Agent A operation list
    - Agent C: check routing covers all BOM items
    - Agent D: check standards cover all operation types
    → If any agent output is incomplete → re-delegate with more specific prompt

  STEP 2: BUILD unified operation table
    FOR each operation in Agent A output:
      operation.constraints  = Agent B output for this op_code
      operation.materials    = Agent C output for BOM items in this operation
      operation.standards    = Agent D output for this op_code
      operation.qc_required  = determine from safety flags + standards
    → Result: complete operation table (Phần III of B3)

  STEP 3: DETECT conflicts
    FOR each operation:
      IF Agent B says "simplify" AND Agent D says "standard requires process":
        → conflicts.append({type: "DFX_VS_STANDARD", op_code, resolution: "STANDARD_WINS"})
      IF Agent C says "local" AND quality concern exists:
        → conflicts.append({type: "LOCAL_VS_QUALITY", op_code, resolution: depends on safety_critical})
      IF equipment in Agent A not available per factory data:
        → conflicts.append({type: "EQUIPMENT_GAP", op_code, resolution: "HITL_REQUIRED"})

  STEP 4: RESOLVE conflicts
    - Auto-resolve: types with deterministic rules (Section 2 Merge Rules 1-3)
    - Escalate to HITL: types without clear rule (Rule 4-5)
    - Log all resolutions in b3_state.conflicts[]

  STEP 5: GENERATE B3 document
    - Populate P62 template (Section 1 output structure)
    - All 11 sections (Phần I-XI)
    - Pass to QC Gate (Section 3)

─────────────────────────────────────────────────────────────
ERROR HANDLING & RECOVERY
─────────────────────────────────────────────────────────────

  AGENT FAILURE:
    Agent A fails → STOP entire pipeline (skeleton missing)
    Agent B fails → CONTINUE without DfX constraints + WARN
    Agent C fails → CONTINUE without material routing + WARN
    Agent D fails → CONTINUE without standards + WARN
    → Minimum viable B3 = Agent A output only (operations without annotations)
    → Full B3 = all 4 agents successful

  TIMEOUT:
    Agent timeout = 5 minutes per agent
    If agent times out → retry once with simplified prompt
    If retry fails → skip agent with WARNING flag

  STATE RECOVERY:
    b3_state is saved to file after each phase transition
    If session interrupted → resume from last saved state
    State file: projects/{{product}}/PHASE_4/B3_generation_state.json

─────────────────────────────────────────────────────────────
INTER-AGENT DATA FORMAT
─────────────────────────────────────────────────────────────

All agents communicate via structured markdown tables (not JSON in practice,
since Claude Code agents return markdown). Master Agent parses tables.

  Agent A → Master: Operation List Table
    | op_code | op_name_vn | op_name_en | tech | bom_refs | depends_on | est_min |

  Agent B → Master: Constraint Table
    | op_code | dfm_score | dfm_concern | mitigation | dfa_flag | dft_flag |

  Agent C → Master: Material Routing Table
    | bom_ref | name | source | supplier | lead_wk | inspection | export | value |

  Agent D → Master: Standards Table
    | op_code | process | tcvn | intl | cert_req | cert_status | notes |

  Master → B3 Document: Merged Operation Table (Phần III)
    All columns from A + B + C + D merged by op_code/bom_ref keys.
```

### Agent A — BOM Decomposition Agent

```
INPUT:  P33 BOM (full part list with hierarchy)
OUTPUT: Process tree — technology groups + assembly sequence

LOGIC:
  1. Parse BOM hierarchy → identify sub-assemblies
  2. Classify each part by manufacturing technology:
     - SMT (Surface Mount Technology): resistors, capacitors, ICs
     - THT (Through-Hole Technology): connectors, large components
     - MECH (Mechanical): enclosure, brackets, fasteners
     - CABLE (Cabling): wire harnesses, connectors
     - SW (Software): firmware loading, calibration
     - TEST (Testing): functional test, environmental test
  3. Generate assembly dependency graph:
     - PCB fabrication BEFORE component mounting
     - SMT BEFORE THT (reflow before wave)
     - Sub-assembly BEFORE final assembly
     - Firmware load BEFORE functional test
  4. Output: ordered operation list with BOM traceability

CONSTRAINTS:
  - Every BOM item must appear in ≥1 operation
  - Dependency graph must be DAG (no circular dependencies)
  - Group operations by technology for workstation efficiency

FALLBACK:
  - Unclassifiable part → tag [PHÂN LOẠI THỦ CÔNG — cần kỹ sư xác nhận]
  - Ambiguous dependency → conservative ordering (earlier is safer)
```

### Agent B — DfX Constraint Extraction Agent

```
INPUT:  P25 DfX Analysis (12 categories, scores + notes)
OUTPUT: Manufacturing constraints per sub-assembly

LOGIC:
  1. Extract DfM (Design for Manufacturing) scores per sub-assembly
  2. For DfM score <3: flag as manufacturing risk
     - Identify specific concern (tight tolerance, special process, exotic material)
     - Propose process mitigation (fixture, jig, special tooling)
  3. Extract DfA (Design for Assembly) scores
     - Assembly time estimates per sub-assembly
     - Identify difficult assembly operations (blind fastening, adhesive cure, press-fit)
  4. Extract DfT (Design for Test) scores
     - Test access points identified
     - Test fixture requirements
  5. Output: constraint table per operation

CONSTRAINTS:
  - Never ignore DfM score <2 — these are redesign triggers, not process fixes
  - Always include mitigation proposal for DfM 2-3 range

FALLBACK:
  - No DfX data → mark [KHÔNG CÓ DỮ LIỆU DfX — cần phân tích trước]
  - DfM <2 → STOP flag: "Product not manufacturable as designed"
```

### Agent C — Local Content Router

```
INPUT:  BOM local/import flags + supplier data + cost analysis (P35)
OUTPUT: Material flow diagram with procurement timeline

LOGIC:
  1. Classify each BOM item: NỘI ĐỊA (local) / NHẬP KHẨU (import)
  2. For local items:
     - Identify Vietnamese supplier(s)
     - Estimate lead time (typically 1-4 weeks)
     - Define incoming inspection level: KTmẫu (sampling) for established suppliers
  3. For import items:
     - Identify source country + supplier
     - Estimate lead time (typically 4-12 weeks)
     - Define incoming inspection level: KT100% for first 3 batches
     - Flag export-controlled items: [KIỂM SOÁT XUẤT KHẨU]
  4. Calculate local content % from process plan perspective
  5. Output: material routing table + procurement Gantt

CONSTRAINTS:
  - Import lead times must include customs clearance buffer (+2 weeks)
  - Export-controlled items → separate procurement track with compliance check
  - Local content calculation must match BOM methodology (by value)

FALLBACK:
  - Unknown supplier → mark [CẦN TÌM NHÀ CUNG CẤP]
  - Lead time unknown → use conservative estimate + [GIẢ ĐỊNH]
```

### Agent D — Standards Mapper

```
INPUT:  P51 Standards Compliance Matrix + TCVN process standards database
OUTPUT: Required process certifications and standard references per operation

LOGIC:
  1. Map each process type to applicable standards:
     - Hàn thiếc (Soldering): IPC-A-610 [chưa có TCVN tương đương], IPC J-STD-001
     - Hàn (Welding): TCVN 1691:1975, TCVN 6834:2001
     - Phủ bảo vệ (Conformal coating): IPC-A-610 Section 10
     - Gia công cơ khí (Machining): TCVN 2244-series (surface finish)
     - Lắp ráp (Assembly): manufacturer-specific torque specs
     - Kiểm tra (Testing): TCVN 7699-series (environmental), MIL-STD-810H
  2. For each standard: check if company has current certification
  3. Flag gaps: [CẦN CHỨNG NHẬN — certification needed before production]
  4. Output: standards reference table per operation + certification gap list

CONSTRAINTS:
  - Never fabricate TCVN numbers — mark [KIỂM TRA] if uncertain
  - Where no TCVN exists: cite international standard with note
  - Special processes (welding, soldering, coating) → operator certification required

FALLBACK:
  - No TCVN mapping found → use international equivalent + [chưa có TCVN]
  - Certification expired → flag [HẾT HẠN — cần gia hạn trước khi sản xuất]
```

### Merge & Conflict Resolution Protocol

```
MASTER AGENT MERGE RULES:

1. SEQUENCE PRIORITY: Agent A output defines operation order
   → Agents B/C/D annotate operations, never reorder

2. CONFLICT TYPE 1: DfX says simplify ↔ Standards say specific process
   RULE: Standards WIN. Compliance is non-negotiable.
   ACTION: Keep required process, optimize within standard constraints.
   EXAMPLE: Agent B suggests "skip conformal coating — DfM improvement"
            Agent D says "MIL-STD-810H requires moisture protection"
            → KEEP coating, optimize application method

3. CONFLICT TYPE 2: Local supplier ↔ Quality concern
   RULE: Quality WINS for safety-critical. Local WINS for non-critical.
   ACTION: If [SAFETY-CRITICAL] → use best-quality source regardless of origin.
           If non-critical → prefer local with adequate incoming inspection.

4. CONFLICT TYPE 3: Cycle time target ↔ QC thoroughness
   RULE: QC WINS for safety-critical. Balance for non-critical.
   ACTION: Never reduce inspection for safety items.
           For non-critical: propose sampling plan to reduce time.

5. CONFLICT TYPE 4: Equipment availability ↔ Process specification
   RULE: Flag for HITL decision. Do not auto-substitute equipment.
   ACTION: Document both options, present to process engineer.

MERGE OUTPUT: Unified B3 draft → QC Gate (Section 3)
```

---

## SECTION 3 — QC GATE (S3: Critical Reasoning)

### B3 QC Gate — 14-Point Checklist

| # | Check | Method | Pass Criteria | Severity |
|---|-------|--------|---------------|----------|
| Q1 | **BOM Traceability** | Cross-ref BOM vs operation table | Every BOM item → ≥1 operation. Zero orphans. | CRITICAL |
| Q2 | **Sequence Validity** | Dependency graph analysis | Zero backwards dependencies. DAG verified. | CRITICAL |
| Q3 | **Safety QC Coverage** | Scan [SAFETY-CRITICAL] items | 100% have QC hold point with KT100% | CRITICAL |
| Q4 | **Cycle Time Completeness** | Count numeric vs TBD | ≥80% operations have numeric time | MAJOR |
| Q5 | **Standards Citation** | Scan standards column | ≥80% operations reference applicable standard | MAJOR |
| Q6 | **Equipment Status** | Scan equipment list | All items have status [CÓ SẴN/CẦN MUA/CẦN THUÊ] | MAJOR |
| Q7 | **Local Content Calculable** | Check material routing | Local % derivable from process plan data | MAJOR |
| Q8 | **Vietnamese Terminology** | Native speaker spot-check | No [KIỂM TRA thuật ngữ] tags remaining | MINOR |
| Q9 | **NCR Procedure Complete** | Scan QC points | Every QC point has rework/scrap/concession path | MAJOR |
| Q10 | **Safety Hazards Covered** | Cross-ref hazard table vs operations | Every hazardous operation has PPE + measures listed | CRITICAL |
| Q11 | **Capacity Calculation** | Verify math | Bottleneck time × target volume = feasible capacity | MAJOR |
| Q12 | **DfX Conflict Resolved** | Scan DfX flags | No unresolved DfM <3 flags remaining | MAJOR |
| Q13 | **Drawing Reference Complete** | Cross-ref B2 drawings vs operations | Every operation → ≥1 B2 drawing. Every B2 drawing → ≥1 operation. | MAJOR |
| Q14 | **Inspection Checklist Coverage** | Cross-ref checklist vs QC hold points | Every QC hold point (Phần VII) has ≥1 detailed inspection item in Phần XII | MAJOR |

**Scoring:**
- CRITICAL fail → **REJECT** — do not approve process plan
- ≥2 MAJOR fails → **REVISE** — return for correction
- MINOR fails → **APPROVE with conditions** — fix before production start

### Common AI Error Patterns in B3

| # | Error Pattern | How AI Gets It Wrong | QC Catch Method |
|---|--------------|---------------------|-----------------|
| E1 | **Ghost Operation** | AI invents process step with no BOM basis | Q1: Cross-ref every operation → BOM item |
| E2 | **Sequence Violation** | AI puts test before assembly complete | Q2: Topological sort on dependency graph |
| E3 | **Fantasy Tooling** | AI names specific machine not available in Vietnam | Q6: Equipment status verification |
| E4 | **Over-specification** | AI copies aerospace-grade process for training device | Consequence check: is this control level justified? |
| E5 | **Missing Rework Loop** | AI assumes 100% first-pass yield | Q9: Every QC point needs disposition path |
| E6 | **TCVN Hallucination** | AI fabricates non-existent TCVN standard number | Q5: Verify every TCVN citation against known list |
| E7 | **Cycle Time Fantasy** | AI estimates impossibly fast or slow times | Q11: Sanity check against industry benchmarks |
| E8 | **Safety Blind Spot** | AI omits PPE for hazardous chemical process | Q10: Cross-ref MSDS data vs safety table |
| E9 | **Terminology Drift** | AI uses colloquial Vietnamese instead of technical terms | Q8: Native speaker review + TCVN vocabulary cross-check |
| E10 | **Local Content Inflation** | AI counts assembly labor as "local" content by value | Q7: LC calculation must follow BOM methodology (material value) |

### QC Gate Execution Protocol

```
STEP 1: Auto-scan (S1 delegation — AI performs Q1-Q7, Q9, Q11-Q14)
  → AI returns: pass/fail per check + evidence

STEP 2: Human review (HITL — engineer performs Q8, Q10, validates Q1-Q7)
  → Engineer confirms or overrides AI findings

STEP 3: Gate decision
  IF all CRITICAL pass AND ≤1 MAJOR fail → APPROVE (conditional)
  IF any CRITICAL fail → REJECT → return to Master Agent for revision
  IF ≥2 MAJOR fail → REVISE → specific items flagged for correction

STEP 4: Record gate result
  → QC Gate log entry: date, reviewer, score, conditions, next action
```

---

## SECTION 4 — AUTOMATION DESIGN (S4: Process Automation)

### Consequence Mapping — B3 Generation

| Task in B3 Generation | What Fails If AI Gets Wrong? | Consequence Domain | Max Auto % |
|-----------------------|-----------------------------|--------------------|-----------|
| Process sequence from BOM | Wrong build order → rework, scrap, schedule slip | MISSION-IMPACT | 70% |
| Cycle time estimation | Capacity miscalculation → delivery failure | ADMIN | 80% |
| QC checkpoint placement | Missed safety check → defective product ships | SAFETY-CRITICAL | 30% |
| Tooling selection | Wrong tool → quality defects, rework | MISSION-IMPACT | 50% |
| Material routing | Wrong source → supply chain failure, LC non-compliance | MISSION-IMPACT | 60% |
| Process parameters | Wrong temp/pressure → scrap, safety hazard | SAFETY-CRITICAL | 40% |
| Vietnamese documentation | Wrong terms → confusion on shop floor | MISSION-IMPACT | 50% |
| NCR procedure design | Wrong disposition → defective product accepted | SAFETY-CRITICAL | 30% |
| Safety/PPE specification | Missing PPE → worker injury | SAFETY-CRITICAL | 20% |
| Equipment availability check | Plan uses unavailable equipment → production blocked | ADMIN | 90% |

### HITL Checkpoint Design — B3 on Manufacturing Floor

```
NGUYÊN VẬT LIỆU ĐẦU VÀO (Incoming Material)
    │
    ├──→ [HITL-01] Kiểm tra đầu vào (Incoming Inspection)
    │    WHO: QC inspector
    │    WHAT: Verify material vs purchase order, visual + dimensional + cert check
    │    IMPORTED: 100% inspection first 3 batches, then sampling
    │    LOCAL: Sampling per AQL (Acceptable Quality Level) TCVN 7790-1
    │    DECISION: Accept / Reject / Hold for engineering review
    │
CHUẨN BỊ LINH KIỆN (Component Preparation)
    │
    ├──→ [AUTO] Lập trình Pick-and-Place (P&P programming from BOM)
    │    AUTOMATION: 90% — verified by first-article placement
    │
LẮP RÁP SMT (SMT Assembly)
    │
    ├──→ [AUTO] In kem hàn (Solder paste printing)
    │    AUTOMATION: 85% — SPI (Solder Paste Inspection) automated
    │
    ├──→ [AUTO] Đặt linh kiện (Component placement)
    │    AUTOMATION: 90% — AOI (Automated Optical Inspection) after
    │
    ├──→ [AUTO] Hàn reflow (Reflow soldering)
    │    AUTOMATION: 95% — profile from datasheet, monitored
    │
    ├──→ [HITL-02] Kiểm tra sản phẩm đầu tiên (First Article Inspection)
    │    WHO: Operator + QC inspector
    │    WHAT: Visual + dimensional + solder quality check on first board
    │    DECISION: Continue batch / Adjust process / Stop line
    │
LẮP RÁP THT (THT Assembly)
    │
    ├──→ [SEMI-AUTO] Hàn wave/selective (Wave/selective soldering)
    │    AUTOMATION: 70% — manual touch-up may be required
    │
    ├──→ [HITL-03] Kiểm tra mối hàn (Solder Joint Inspection)
    │    WHO: QC inspector (IPC-A-610 certified)
    │    WHAT: Visual inspection per IPC-A-610 Class 2 or 3
    │    SAFETY-CRITICAL joints: 100% inspection, magnification ≥4x
    │
LẮP RÁP CƠ KHÍ (Mechanical Assembly)
    │
    ├──→ [HITL-04] Kiểm tra mô-men xoắn (Torque Verification)
    │    WHO: Assembly technician + QC
    │    WHAT: Verify torque on all safety-critical fasteners
    │    TOOL: Calibrated torque wrench
    │    RECORD: Actual torque value per fastener
    │
NẠP FIRMWARE (Firmware Loading)
    │
    ├──→ [AUTO] Nạp firmware + hiệu chuẩn (Firmware flash + calibration)
    │    AUTOMATION: 80% — automated flash, manual calibration verification
    │
    ├──→ [HITL-05] Xác nhận phiên bản (Version Confirmation)
    │    WHO: Software/firmware engineer
    │    WHAT: Confirm correct firmware version + calibration parameters
    │
KIỂM TRA CHỨC NĂNG (Functional Test)
    │
    ├──→ [SEMI-AUTO] Chạy test script (Execute test script from P34)
    │    AUTOMATION: 75% — automated test, human interprets edge cases
    │
    ├──→ [HITL-06] Đánh giá kết quả (Result Evaluation)
    │    WHO: Test engineer
    │    WHAT: Review all test results, pass/fail decision
    │    SAFETY-CRITICAL tests: engineer must sign each result
    │    DECISION: Pass / Fail-Rework / Fail-Scrap
    │
KIỂM TRA CUỐI CÙNG (Final Inspection)
    │
    ├──→ [HITL-07] Kiểm tra tổng thể (Overall Inspection)
    │    WHO: Senior QC inspector
    │    WHAT: Visual + functional + cosmetic + labeling + packaging
    │    DECISION: Ship / Hold / Rework
    │
ĐÓNG GÓI (Packaging)
    │
    ├──→ [AUTO] In nhãn + đóng gói (Label printing + packaging)
    │    AUTOMATION: 85% — auto label from BOM data, manual packing
    │
    └──→ [HITL-08] Xác nhận lô hàng (Batch Release)
         WHO: QC Manager
         WHAT: Review batch summary, release for shipment
         RECORD: Batch release certificate
```

### SDK Pipeline — Conceptual B3 Auto-Generation

```python
# Conceptual pipeline — NOT implementation code
# Shows automation gradient for B3 document generation

b3_pipeline = {
    "phase_1_input": {
        "task": "Collect inputs (BOM, DfX, layout, standards)",
        "auto": 90,  # file reading
        "hitl": "Confirm all inputs are approved versions",
        "fallback": "List missing inputs → STOP"
    },
    "phase_2_decompose": {
        "task": "Agent A: BOM → process tree",
        "auto": 70,
        "hitl": "Engineer validates technology classification",
        "fallback": "Unclassified parts → manual classification"
    },
    "phase_3_parallel": {
        "task": "Agents B+C+D in parallel",
        "auto": 60,
        "hitl": "Review conflicts between agents",
        "fallback": "Per-agent fallback protocols"
    },
    "phase_4_merge": {
        "task": "Master agent merges + resolves conflicts",
        "auto": 50,
        "hitl": "Engineer resolves any HITL-flagged conflicts",
        "fallback": "Present both options if auto-resolution fails"
    },
    "phase_5_draft": {
        "task": "Generate full B3 document (P62 structure)",
        "auto": 70,
        "hitl": "Review Vietnamese terminology",
        "fallback": "Partial output with [CẦN XÁC NHẬN] tags"
    },
    "phase_6_qc": {
        "task": "QC Gate (12-point, Section 3)",
        "auto": 80,  # auto-scan Q1-Q7
        "hitl": "Engineer validates Q8-Q10",
        "fallback": "Flag all issues → REVISE"
    },
    "GATE": {
        "task": "Process engineer + QC manager approval",
        "auto": 0,   # NEVER automated
        "hitl": "MANDATORY sign-off",
        "fallback": "N/A — human decides"
    }
}

# Rule: Every phase has explicit fallback
# Rule: GATE is always 0% automated
# Rule: Total pipeline auto ≈ 60% — remainder is HITL
```

---

## SECTION 5 — GOVERNANCE & COMPLIANCE (S5: Ethical Governance)

### TCVN / Legal Compliance Matrix for B3

| Requirement | Standard / Law | B3 Application | Verification |
|------------|---------------|----------------|-------------|
| QMS controlled document | TCVN ISO 9001:2015 §7.5 | B3 has version control, approval, distribution list | QMS audit |
| Process validation | TCVN ISO 9001:2015 §8.5.1 | Special processes documented with validation records | Process audit |
| Welding quality | TCVN 6834:2001 | Welding operations reference standard + operator qualification | Cert check |
| Surface finish | TCVN 2244-series | Machined parts: Ra values specified per operation | Inspection |
| Environmental testing | TCVN 7699-series ≡ IEC 60068 | Test parameters in operations reference TCVN | Cross-ref |
| Sampling inspection | TCVN 7790-1 ≡ ISO 2859-1 | AQL levels defined for incoming and in-process inspection | QC plan review |
| Measurement uncertainty | TCVN 9595-3 ≡ ISO/IEC Guide 98-3 | Measurement equipment calibration referenced per QC point | Calibration records |
| Worker safety | Luật ATVSLĐ 2015 | PPE and safety measures per hazardous operation | Safety audit |
| Environmental protection | TCVN ISO 14001:2015 | Waste handling for chemicals, solvents, packaging | Env audit |
| Defense production | Luật 38/2024 Art. 22-25 | Facility capability meets defense production requirements | TCCNQP audit |
| Data sovereignty | Luật ANMN 2018 Art. 23 | Process IP stored on domestic servers only | IT audit |
| Traceability | TCVN ISO 9001:2015 §8.5.2 | Serial number tracking from material to finished product | Lot traceability check |

### Audit Trail Requirements

```
MỖI TÀI LIỆU B3 (Every B3 Document Instance):
├── Phiên bản (Version): Major.Minor — increment on any change
├── Lịch sử thay đổi (Change History):
│   └── Table: | Rev | Ngày | Thay đổi | Lý do | Người duyệt |
├── Danh sách phân phối (Distribution List):
│   └── Controlled copies: who has which version
└── Lưu trữ (Archival): Retain for product lifetime + 10 years (defense requirement)

MỖI LÔ SẢN XUẤT (Every Production Batch):
├── Hồ sơ sản xuất (Production Record):
│   ├── Ai thực hiện (Who) — operator ID per operation
│   ├── Khi nào (When) — start/end timestamp per operation
│   ├── Thiết bị (Equipment) — machine ID + calibration status
│   ├── Vật tư (Material) — lot/serial numbers per input
│   ├── Kết quả đo (Measurements) — actual values at QC points
│   ├── Đạt/Không đạt (Pass/Fail) — per QC point + signature
│   └── NCR (if any) — non-conformance report number + disposition
├── Chứng nhận lô (Batch Certificate):
│   └── Summary: quantity produced, passed, failed, reworked, scrapped
└── Truy xuất ngược (Backward Traceability):
    └── From any finished product → all input materials, operations, operators, test results
```

### Accountability Chain for B3

| Role | Trách nhiệm (Responsibility) | AI Boundary |
|------|------------------------------|-------------|
| **Kỹ sư Quy trình** (Process Engineer) | Design process, validate sequence, set parameters | AI drafts → engineer validates and approves |
| **Quản lý QC** (QC Manager) | Define inspection criteria, approve QC plan | AI suggests → QC manager decides criteria and frequency |
| **Quản lý SX** (Production Manager) | Resource allocation, scheduling, line setup | AI calculates capacity → manager decides resource plan |
| **Công nhân** (Operator) | Execute process steps per B3 instructions | AI provides clear instructions → operator follows and records |
| **Kỹ sư An toàn** (Safety Engineer) | Hazard identification, PPE requirements | AI identifies hazardous processes → safety engineer validates measures |
| **Giám đốc KT** (Technical Director) | Final approval of B3 for production release | Reviews complete B3 package → signs off |

**Ranh giới AI (AI Boundaries):**

| AI CAN | AI CANNOT |
|--------|-----------|
| Draft process sequence from BOM | Approve process plan for production |
| Calculate cycle times and capacity | Override safety inspection requirements |
| Suggest QC checkpoints | Decide non-conformance disposition for safety items |
| Map standards to operations | Certify operator qualifications |
| Generate Vietnamese terminology | Substitute equipment without engineer approval |
| Flag DfX conflicts | Reduce inspection frequency for safety-critical items |
| Estimate material lead times | Commit to supplier delivery dates |

### Ethical Considerations Specific to B3

| Concern | Principle | Application |
|---------|-----------|-------------|
| **Worker Safety** | P1: Sovereignty + Accountability | AI must NEVER optimize cycle time at expense of operator safety margins. PPE always mandatory. |
| **Skill Preservation** | P3: Transparency | Process plan should develop, not eliminate, Vietnamese manufacturing skills. Document training requirements. |
| **Supply Chain Integrity** | P2: Beneficence | Local content claims in B3 must be verifiable. No "paper compliance" — actual material flow audited. |
| **IP Protection** | P4: Security | Manufacturing process know-how is core IP. Distribution controlled. No foreign-server storage. No unauthorized copying. |
| **Fair Labor** | P1: Sovereignty | Cycle time must include reasonable rest/breaks. Never plan 100% utilization — operator fatigue degrades quality. |
| **Environmental** | P2: Beneficence | Chemical handling per TCVN ISO 14001. Waste disposal documented. Solvent recovery where feasible. |

---

## SECTION 6 — QUY TRÌNH (Step-by-Step B3 Generation Process)

### Quy trình Tạo B3 — Overview

```
BƯỚC 1 ──→ THU THẬP ĐẦU VÀO          (Collect Inputs)           ~1h
BƯỚC 2 ──→ PHÂN TÍCH BOM              (BOM Decomposition)        ~2h
BƯỚC 3 ──→ XÂY DỰNG TRÌNH TỰ         (Build Process Sequence)   ~3h
BƯỚC 4 ──→ THIẾT KẾ TRẠM              (Workstation Design)       ~2h
BƯỚC 5 ──→ XÁC ĐỊNH QC               (Define QC Points)          ~2h
BƯỚC 6 ──→ ĐÁNH GIÁ NĂNG LỰC         (Capacity Assessment)      ~1h
BƯỚC 7 ──→ SOẠN TÀI LIỆU             (Draft Document)           ~3h
BƯỚC 8 ──→ QC GATE                    (Quality Check)             ~1h
BƯỚC 9 ──→ PHÊ DUYỆT                 (Approval)                  ~1h
                                                          Total: ~16h
```

### Detailed Steps

**BƯỚC 1 — Thu thập Đầu vào (Collect Inputs)**

| Input | Source | Status Required |
|-------|--------|----------------|
| BOM (P33) | Phase 4 | APPROVED (frozen) |
| DfX Analysis (P25) | Phase 3 | COMPLETE |
| Layout Design (P23) | Phase 3 | APPROVED |
| Material Selection (P24) | Phase 3 | COMPLETE |
| Standards Matrix (P51) | Phase 1 | COMPLETE |
| Cost Analysis (P35) | Phase 4 | APPROVED |
| Factory capability data | Site visit / survey | AVAILABLE (or flag [CẦN KHẢO SÁT]) |

> **Gate:** ALL inputs APPROVED? → Proceed. ANY input missing? → STOP, resolve first.

**BƯỚC 2 — Phân tích BOM (BOM Decomposition)**

```
Action: Run Agent A (BOM Decomposition)
Input:  P33 BOM
Output: Technology groups + assembly dependency graph

Checklist:
□ All BOM items classified by technology (SMT/THT/MECH/CABLE/SW/TEST)
□ Sub-assemblies identified from BOM hierarchy
□ Dependency graph generated (DAG — no cycles)
□ Unclassifiable items flagged [PHÂN LOẠI THỦ CÔNG]

AI role:  70% auto — classify parts, build dependency graph
Human:    Validate classifications, resolve ambiguous items
Duration: ~2h (1h AI + 1h review)
```

**BƯỚC 3 — Xây dựng Trình tự (Build Process Sequence)**

```
Action: Run Agents B+C+D in parallel, then merge
Input:  Agent A output + DfX + supplier data + standards
Output: Unified operation sequence with constraints

Checklist:
□ Agent B: DfX constraints extracted per sub-assembly
□ Agent C: Material routing (local/import) mapped per item
□ Agent D: Standards referenced per process type
□ Conflicts identified and resolved per merge protocol
□ Operation codes assigned (OP-010, OP-020, etc.)

AI role:  60% auto — parallel agent execution + merge
Human:    Resolve conflicts, validate sequence logic
Duration: ~3h (1.5h AI + 1.5h review + conflict resolution)
```

**BƯỚC 4 — Thiết kế Trạm (Workstation Design)**

```
Action: Group operations → workstations, assign equipment
Input:  Operation sequence + factory capability data
Output: Workstation assignment table + equipment list

Checklist:
□ Operations grouped by technology affinity
□ Each workstation has: equipment, tooling, environment requirements
□ Equipment status checked: [CÓ SẴN/CẦN MUA/CẦN THUÊ]
□ Line layout sketch (if factory known)
□ ESD requirements identified for electronic workstations

AI role:  50% auto — grouping logic + equipment matching
Human:    Validate against actual factory layout, confirm equipment
Duration: ~2h (0.5h AI + 1.5h engineer review + factory coordination)
```

**BƯỚC 5 — Xác định QC (Define QC Points)**

```
Action: Place QC checkpoints, define criteria
Input:  Operation sequence + safety-critical item list + standards
Output: QC point table with pass/fail criteria

Checklist:
□ Every [SAFETY-CRITICAL] component → 100% inspection (KT100%)
□ QC after each technology transition (SMT→THT, electronics→mechanical)
□ First article inspection after setup
□ Final inspection before packaging
□ Pass/fail criteria numeric where possible
□ Non-conformance disposition defined per QC point
□ Inspection equipment identified with calibration requirements

AI role:  30% auto — suggest placements based on safety flags
Human:    QC manager validates every checkpoint and criteria
Duration: ~2h (0.5h AI + 1.5h QC manager review)
```

**BƯỚC 6 — Đánh giá Năng lực (Capacity Assessment)**

```
Action: Calculate cycle times, bottleneck, capacity
Input:  Operation table with time estimates + target volume
Output: Capacity analysis (Part X of B3)

Checklist:
□ Cycle time per operation estimated (≥80% numeric)
□ Bottleneck operation identified
□ Line balance calculated (target ≥85%)
□ Capacity vs demand: sufficient? If not → flag for shift planning
□ Setup time per batch changeover estimated

AI role:  80% auto — arithmetic + bottleneck analysis
Human:    Sanity check times against experience, validate bottleneck
Duration: ~1h (0.5h AI + 0.5h review)
```

**BƯỚC 7 — Soạn Tài liệu (Draft B3 Document)**

```
Action: Compile all outputs → P62 structure (Phần I-XI)
Input:  Steps 2-6 outputs
Output: Complete B3 draft in Vietnamese

Checklist:
□ All 13 sections (Phần I-XIII) populated
□ Vietnamese terminology correct (no [KIỂM TRA] tags remaining)
□ All tables populated with no blank cells (mark [N/A] if not applicable)
□ Process flow diagram drawn with correct symbols
□ Safety section (Phần IX) complete — every hazardous operation covered
□ Drawing reference (Phần XI) — every operation maps to B2 drawings
□ Inspection checklist (Phần XII) — 6 stages, every QC point has detailed items
□ Approval block (Phần XIII) — names, roles, signature lines

AI role:  70% auto — document assembly + formatting
Human:    Vietnamese language review, safety section review
Duration: ~3h (2h AI drafting + 1h review/correction)
```

**BƯỚC 8 — QC Gate**

```
Action: Execute Section 3 QC Gate (12-point checklist)
Input:  Complete B3 draft
Output: QC Gate score — APPROVE / REVISE / REJECT

Duration: ~1h (0.5h auto-scan + 0.5h human review)
See Section 3 for full protocol.
```

**BƯỚC 9 — Phê duyệt (Approval)**

```
Action: Route for approval signatures per Phần XI
Input:  QC-passed B3 document
Output: Approved B3 — controlled document in QMS

Approval chain:
1. Kỹ sư Quy trình (Process Engineer) — technical accuracy
2. Quản lý QC (QC Manager) — inspection plan adequacy
3. Quản lý SX (Production Manager) — resource feasibility
4. Giám đốc KT (Technical Director) — final release

Rule: ALL 4 signatures required. Any rejection → return to relevant step.
Duration: ~1h (routing + signing — may take longer if corrections needed)
```

---

## SECTION 7 — CHECKLISTS

### Checklist 7.1 — B3 Completeness (Pre-QC Gate)

```
□ PHẦN I    Thông tin chung — all fields populated
□ PHẦN II   Sơ đồ quy trình — flow diagram present with correct symbols
□ PHẦN III  Bảng công đoạn — all operations listed, BOM traceability complete
□ PHẦN IV   Phân công trạm — workstations assigned, environment specified
□ PHẦN V    Danh mục thiết bị — all equipment listed with status
□ PHẦN VI   Luồng vật liệu — local/import routing, local content % calculated
□ PHẦN VII  Điểm QC — all safety-critical items have KT100%
□ PHẦN VIII Xử lý KPH — NCR procedure per QC point
□ PHẦN IX   An toàn LĐ — PPE per hazardous operation
□ PHẦN X    Thời gian + năng lực — cycle times, bottleneck, capacity
□ PHẦN XI   Danh mục bản vẽ — every operation references B2 drawings, no orphans
□ PHẦN XII  Checklist kiểm tra — detailed inspection items per production stage
□ PHẦN XIII Ký duyệt — approval block with correct names/roles
```

### Checklist 7.2 — B3 Approval Readiness

```
□ QC Gate PASSED (≥12/14 checks, zero CRITICAL fails)
□ All [CẦN XÁC NHẬN] tags resolved or accepted with justification
□ All [KIỂM TRA thuật ngữ] tags resolved by native speaker
□ Equipment procurement plan ready for [CẦN MUA] items
□ Safety section reviewed by safety engineer (if hazardous processes exist)
□ Process engineer has signed
□ QC manager has signed
□ Production manager has confirmed resource availability
□ Technical director has reviewed and approved
□ Document registered in QMS with version number and distribution list
```

### Checklist 7.3 — B3 Production Readiness (Pre-Series "0")

```
□ All equipment [CÓ SẴN] — procured, installed, calibrated
□ Operators trained on B3 procedures — training records on file
□ Incoming material inspection procedure active (TCVN 7790-1)
□ QC inspection equipment calibrated — certificates current
□ NCR forms and procedures in place
□ First article inspection protocol ready
□ Production record forms available at each workstation
□ Safety equipment and PPE available at all stations
□ Waste handling procedures in place for chemicals/solvents
□ Trial run (dry run) completed — 1-2 units before formal Series "0"
```

---

## SECTION 8 — ARTIFACT TEMPLATES

### Template 8.1 — Bảng Công đoạn Chi tiết (Detailed Operation Table)

```markdown
| STT | Mã CĐ | Tên công đoạn | Operation | Mô tả | Trạm | Thiết bị | Dụng cụ | Thông số | T (phút) | Tiêu chuẩn | QC | BOM Ref | Ghi chú |
|-----|--------|--------------|-----------|-------|------|----------|---------|----------|----------|----------|----|---------|---------|
| 1 | OP-010 | Kiểm tra đầu vào | Incoming inspection | Kiểm tra NVL vs PO | QC-01 | — | — | — | 5 | TCVN 7790-1 | KT100% | ALL | Import items |
| 2 | OP-020 | In kem hàn | Solder paste print | In kem lên PCB | SMT-01 | DEK printer | Stencil S-01 | Áp lực: 5kg, Tốc độ: 25mm/s | 1 | IPC J-STD-001 | SPI auto | PCB-001 | |
| 3 | OP-030 | Đặt linh kiện SMT | SMT placement | Đặt R/C/IC lên PCB | SMT-01 | P&P machine | Feeder set F-01 | — | 3 | — | AOI auto | SM-* | |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
```

### Template 8.2 — Phân công Trạm Sản xuất (Workstation Assignment)

```markdown
| Mã trạm | Tên trạm | Công đoạn (OP codes) | Thiết bị chính | Thiết bị phụ | Nhân lực | Yêu cầu MT | Ghi chú |
|---------|----------|---------------------|---------------|-------------|---------|-----------|---------|
| SMT-01 | Trạm SMT | OP-020, OP-030, OP-040 | DEK printer, P&P, Reflow oven | SPI, AOI | 1 operator | Temp: 23±3°C, RH: 40-60%, ESD | |
| THT-01 | Trạm hàn THT | OP-050, OP-060 | Selective solder | Soldering station | 1 operator | ESD, fume extraction | |
| MECH-01 | Trạm lắp ráp CK | OP-070, OP-080 | — | Torque wrench set | 1 technician | — | |
| TEST-01 | Trạm kiểm tra | OP-090, OP-100 | Test fixture TF-01 | Oscilloscope, DMM | 1 engineer | ESD, calibrated instruments | |
| QC-01 | Trạm QC | OP-010, OP-110 | — | Magnifier 4x, calipers | 1 QC inspector | Lighting ≥500 lux | |
```

### Template 8.3 — Điểm Kiểm soát Chất lượng (QC Hold Point)

```markdown
| STT | Mã QC | Sau CĐ | Tên kiểm tra | Loại | Tiêu chí ĐẠT | Tiêu chí KHÔNG ĐẠT | Thiết bị đo | Tần suất | Người KT | Biểu mẫu | Xử lý KPH |
|-----|-------|--------|-------------|------|-------------|-------------------|------------|---------|---------|---------|-----------|
| 1 | QC-01 | OP-010 | KT đầu vào | KT100% | Đúng mã, đúng SL, cert hợp lệ | Sai mã, thiếu SL, cert hết hạn | — | 100% lô | QC | FM-IQC-01 | Trả NCC |
| 2 | QC-02 | OP-030 | KT sau SMT | KT tự động | AOI pass, zero defect | AOI flag ≥1 defect | AOI camera | 100% board | Auto+QC | FM-AOI-01 | Sửa chữa → KT lại |
| 3 | QC-03 | OP-060 | ⚠ KT mối hàn an toàn | KT100% | IPC-A-610 Class 2 pass | Bất kỳ lỗi nào trên joint [SC] | Kính 4x | 100% joint | QC cert | FM-SOL-01 | ⚠ Kỹ sư quyết định |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |
```

> ⚠ = Safety-critical. KPH xử lý bởi kỹ sư, không phải operator.

### Template 8.3b — Danh mục Bản vẽ theo Công đoạn (Process Drawing Reference)

```markdown
| STT | Mã CĐ | Tên công đoạn | Mã BV (B2) | Tên bản vẽ | Loại BV | Rev | Bắt buộc | Ghi chú |
|-----|--------|--------------|-----------|-----------|--------|-----|---------|---------|
| 1 | OP-010 | Kiểm tra đầu vào | VM-0000-DWG-100 | BV tổng thể sản phẩm | BV-LR | A | ☑ | Đối chiếu NVL vs BOM |
| 2 | OP-020 | In kem hàn | VM-0100-DWG-201 | PCB layout — mặt trên | BV-PCB | B | ☑ | Vị trí stencil |
| 3 | OP-030 | Đặt linh kiện SMT | VM-0100-DWG-201 | PCB layout — mặt trên | BV-PCB | B | ☑ | Định hướng IC |
| | | | VM-0100-DWG-202 | PCB layout — mặt dưới | BV-PCB | B | ☑ | Nếu 2 mặt |
| 4 | OP-060 | ⚠ Hàn THT an toàn | VM-0100-DWG-301 | Sơ đồ mạch điện | BV-ĐT | A | ☑ | Xác nhận giá trị |
| | | | VM-0100-DWG-KT01 | BV kiểm tra mối hàn [SC] | BV-KT | A | ☑ | IPC-A-610 ref |
| 5 | OP-070 | Lắp ráp cơ khí | VM-0200-DWG-401 | BV lắp ráp vỏ | BV-LR | A | ☑ | Mô-men siết |
| | | | VM-0200-DWG-101 | BV chi tiết vỏ CNC | BV-CT | B | | Tham khảo |
| ... | ... | ... | ... | ... | ... | ... | ... | ... |

TÓM TẮT BẢN VẼ THEO TRẠM:
| Trạm SX | Tổng BV tại trạm | BV bắt buộc (☑) | BV tham khảo |
|---------|------------------|-----------------|-------------|
| SMT-01 | 4 | 3 | 1 |
| THT-01 | 3 | 3 | 0 |
| MECH-01 | 5 | 3 | 2 |
| TEST-01 | 2 | 2 | 0 |
| QC-01 | 3 | 3 | 0 |

KIỂM TRA CHÉO B2 ↔ B3:
  □ Mỗi BV trong B2 → tham chiếu bởi ≥1 công đoạn (không có BV mồ côi)
  □ Mỗi công đoạn có chi tiết tùy chỉnh → ≥1 BV chi tiết (BV-CT)
  □ Mỗi công đoạn an toàn ⚠ → có BV kiểm tra (BV-KT)
  □ Tất cả BV tại trạm = bản sao kiểm soát (controlled copy ☑)
```

### Template 8.3c — Checklist Kiểm tra theo Qui trình (Process Inspection Checklist)

```markdown
## STAGE A: KIỂM TRA ĐẦU VÀO (Incoming Inspection)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| A-01 | Kiểm tra mã vật tư vs PO | BOM (P33) | So sánh trực quan | — | Đúng mã, đúng NSX | Trả NCC | QC | FM-IQC-01 |
| A-02 | Kiểm tra số lượng | PO | Đếm/cân | Cân điện tử | ±0% vs PO | Thông báo NCC | QC | FM-IQC-01 |
| A-03 | Kiểm tra chứng nhận NVL | Spec sheet | Đối chiếu tài liệu | — | Cert hợp lệ, còn hạn | Giữ lại, yêu cầu cert | QC | FM-IQC-01 |
| A-04 | KT ngoại quan PCB trần | VM-0100-DWG-201 | Kính phóng đại | Kính 4x | Không xước, không oxi hóa | Trả NCC | QC | FM-IQC-02 |

→ Stage A verdict: ĐẠT / KHÔNG ĐẠT → Nhập kho / Giữ lại / Trả NCC

## STAGE B: KIỂM TRA BÁN THÀNH PHẨM ĐIỆN TỬ (Electronics Sub-Assembly)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| B-01 | KT kem hàn sau in | IPC J-STD-001 | SPI tự động | SPI machine | Thể tích kem ±25% | Lau sạch, in lại | Auto | FM-SPI-01 |
| B-02 | KT vị trí linh kiện | VM-0100-DWG-201 | AOI tự động | AOI camera | Đúng vị trí, đúng hướng | Sửa chữa thủ công | Auto+QC | FM-AOI-01 |
| B-03 | ⚠ KT mối hàn [SC] | VM-0100-DWG-KT01 + IPC-A-610 | Kính phóng đại | Kính 4x, 10x | Class 2 pass, không cold joint | ⚠ KS quyết định | QC cert | FM-SOL-01 |
| B-04 | KT ngắn mạch / hở mạch | VM-0100-DWG-301 (sơ đồ) | Đo điện trở | DMM | Thông mạch theo sơ đồ | Sửa chữa → KT lại | Tech | FM-PCB-01 |

→ Stage B verdict: ĐẠT / KHÔNG ĐẠT → Tiếp tục lắp ráp / Sửa chữa / Loại bỏ

## STAGE C: KIỂM TRA BÁN THÀNH PHẨM CƠ KHÍ (Mechanical Sub-Assembly)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| C-01 | KT kích thước vỏ CNC | VM-0200-DWG-101 | Đo trực tiếp | Thước cặp, mic | Theo dung sai BV | Gia công lại / loại bỏ | QC | FM-DIM-01 |
| C-02 | KT bề mặt sau xử lý | VM-0200-DWG-101 | So sánh mẫu | Thước đo Ra | Ra ≤ 1.6 µm (hoặc theo BV) | Xử lý lại | QC | FM-SRF-01 |
| C-03 | ⚠ KT mô-men siết [SC] | VM-0200-DWG-401 | Cờ-lê lực | Torque wrench cal. | Theo bảng mô-men (Phụ lục A) | Siết lại đúng lực | Tech+QC | FM-TRQ-01 |

→ Stage C verdict: ĐẠT / KHÔNG ĐẠT → Tiếp tục lắp ráp / Gia công lại / Loại bỏ

## STAGE D: KIỂM TRA LẮP RÁP TỔNG THỂ (Final Assembly)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| D-01 | KT lắp đặt PCB vào vỏ | VM-0000-DWG-100 | Trực quan | — | PCB cố định, không cong | Tháo ra, kiểm tra | Tech | FM-ASM-01 |
| D-02 | KT kết nối cáp | VM-0100-DWG-DD01 (đấu dây) | Trực quan + kéo nhẹ | — | Đúng connector, chắc chắn | Cắm lại / thay cáp | Tech | FM-ASM-01 |
| D-03 | KT kín nước (nếu có) | B1 YCKT (IP rating) | Thử nghiệm IP | Buồng IP test | Theo spec YCKT | Tháo ra, tìm rò rỉ | KS | FM-IPR-01 |

→ Stage D verdict: ĐẠT / KHÔNG ĐẠT → Chuyển sang test / Tháo ra sửa / Loại bỏ

## STAGE E: KIỂM TRA CHỨC NĂNG & HIỆU CHUẨN (Functional Test & Calibration)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| E-01 | KT firmware version | Release note | Đọc qua USB-C | PC + CLI tool | Đúng version release | Nạp lại firmware | KS SW | FM-FW-01 |
| E-02 | KT chức năng cơ bản | P34 test script | Chạy test tự động | Test fixture TF-01 | 100% test pass | Chẩn đoán → sửa | KS Test | FM-FT-01 |
| E-03 | ⚠ KT hiệu chuẩn quang | VM-0300-DWG-QH01 | Bắn bia chuẩn | Bia + giá + thước | Sai số ≤ spec YCKT | ⚠ Hiệu chuẩn lại (L3) | KS QH | FM-CAL-01 |
| E-04 | KT tiêu thụ điện năng | B1 YCKT (power spec) | Đo dòng/áp | Power analyzer | ≤ spec YCKT | Chẩn đoán mạch | KS ĐT | FM-PWR-01 |

→ Stage E verdict: ĐẠT / KHÔNG ĐẠT → Chuyển sang KT cuối / Sửa chữa / Loại bỏ

## STAGE F: KIỂM TRA CUỐI CÙNG & ĐÓNG GÓI (Final Inspection & Packaging)

| STT | Hạng mục kiểm tra | BV/TC tham chiếu | PP kiểm tra | Dụng cụ đo | Giá trị chấp nhận | Nếu KHÔNG ĐẠT | Ai KT | Biểu mẫu |
|-----|-------------------|-----------------|------------|-----------|-------------------|--------------|-------|---------|
| F-01 | KT ngoại quan tổng thể | VM-0000-DWG-100 | Trực quan | — | Không xước, đúng màu, nhãn rõ | Sửa chữa ngoại quan | QC Sr | FM-FIN-01 |
| F-02 | KT phụ kiện đi kèm | BOM (packing list) | Đếm, đối chiếu | — | Đủ SL, đúng loại | Bổ sung thiếu | QC | FM-FIN-01 |
| F-03 | KT tài liệu đi kèm | B4 (HDSD), warranty card | Trực quan | — | Đúng version, đúng ngôn ngữ | Thay tài liệu | QC | FM-FIN-01 |
| F-04 | KT đóng gói | Packaging spec | Trực quan | — | Chống sốc, chống ẩm, nhãn lô | Đóng gói lại | Packing | FM-PKG-01 |

→ Stage F verdict: ĐẠT / KHÔNG ĐẠT → Nhập kho thành phẩm / Mở gói sửa / Giữ lại
```

> **Note:** Inspection items marked ⚠ are safety-critical — require 100% inspection and dual-signature (KTV + KCS/giám sát). Never skip or convert to sampling.

### Template 8.4 — Luồng Vật liệu (Material Routing)

```markdown
| STT | Vật tư | Mã BOM | Nguồn | Nhà CC | Lead (tuần) | KT đầu vào | CĐ sử dụng | Tồn kho tối thiểu | Ghi chú |
|-----|--------|--------|-------|--------|------------|-----------|------------|-------------------|---------|
| 1 | PCB 4-layer | PCB-001 | NỘI ĐỊA | ABC Electronics, HCM | 2 | KTmẫu AQL 1.0 | OP-020 | 20 pcs | |
| 2 | Jetson Orin Nano | IC-001 | NHẬP KHẨU | NVIDIA via distrib | 8 | KT100% | OP-030 | 5 pcs | [KIỂM SOÁT XK] |
| 3 | Vỏ nhôm CNC | ENC-001 | NỘI ĐỊA | Cơ khí Hòa Phát, HN | 3 | KT100% first 3 batches | OP-070 | 10 pcs | |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

TÓM TẮT NỘI ĐỊA HÓA:
  Vật tư nội địa:  {{X}} mục = {{Y%}} giá trị
  Vật tư nhập khẩu: {{X}} mục = {{Y%}} giá trị
  Tỷ lệ nội địa hóa (theo giá trị): {{Z%}} — Mục tiêu: ≥{{target}}%
```

### Template 8.5 — Biểu mẫu NCR (Non-Conformance Report)

```markdown
# PHIẾU BÁO CÁO KHÔNG PHÙ HỢP (NCR)
## NCR No: NCR-{{YYYY}}-{{NNN}}

| Mục | Nội dung |
|-----|---------|
| Sản phẩm | {{product name}} ({{code}}) |
| Lô sản xuất (Batch) | {{batch number}} |
| Đơn vị sản phẩm (Unit S/N) | {{serial number}} |
| Công đoạn phát hiện (Found at) | {{OP code + name}} |
| Ngày phát hiện (Date found) | {{date}} |
| Người phát hiện (Found by) | {{name + role}} |

### Mô tả Không phù hợp (Description)
{{Detailed description of non-conformance — what, where, how detected}}

### Phân loại (Classification)
□ Nghiêm trọng (Critical) — ảnh hưởng an toàn / chức năng chính
□ Lớn (Major) — ảnh hưởng chức năng phụ / ngoại quan nghiêm trọng
□ Nhỏ (Minor) — ngoại quan nhẹ / không ảnh hưởng chức năng

### Xử lý (Disposition)
□ Loại bỏ (Scrap)          Người quyết định: ___________
□ Sửa chữa (Rework)        Quy trình sửa: ____________
□ Nhượng bộ (Concession)    Lý do: ____________________
□ Trả NCC (Return to supplier)

### Phân tích Nguyên nhân (Root Cause)
{{5-Why or Fishbone analysis}}

### Hành động Khắc phục (Corrective Action)
{{What will be done to prevent recurrence}}

### Xác nhận Đóng (Close-out Verification)
Ngày đóng: _________  Người xác nhận: _________  Chữ ký: _________
```

---

## DEPENDENCY MAP — B3 vs Other ANQP Artifacts

```
A2 (QMS) ──────→ B3 uses QMS document control procedures
P33 (BOM) ─────→ B3 INPUT: part list defines what to manufacture
P25 (DfX) ─────→ B3 INPUT: manufacturability constraints
P23 (Layout) ──→ B3 INPUT: assembly sequence
P24 (Materials)→ B3 INPUT: material compatibility
P51 (Standards)→ B3 INPUT: process standards

B3 ────→ B4 (User Manual): references operating procedures
B3 ────→ B5 (Maintenance Manual): references maintenance access points
B3 ────→ C1 (Factory Test): test fixtures defined in B3
B3 ────→ C7 (Acceptance Dossier): B3 is mandatory document #4
B3 ────→ C11 (Series "0" Plan): B3 is the process baseline
B3 ────→ C12 (QA Plan): B3 QC points define inspection plan
```

---

*Created: 2026-02-23 | Updated: 2026-02-23 | Artifact: B3 — Quy trình Công nghệ SX | S1-S5 Integration Framework v1.1 | Prompt: P62 /qtcn | Sections: 8 (13 Phần + 14-point QC)*
