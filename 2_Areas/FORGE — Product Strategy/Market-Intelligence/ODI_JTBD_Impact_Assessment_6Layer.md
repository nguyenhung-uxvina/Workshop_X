# ODI / JOBS-TO-BE-DONE: TÁC ĐỘNG ĐẾN KHUNG 6 LỚP
## Đánh Giá Ảnh Hưởng Lên DMIR → BRIDGE × FORGE × HELIX → Execution → Learning

**Ngày:** 02/03/2026
**Câu hỏi:** ODI (Outcome-Driven Innovation) và JTBD (Jobs to be Done) framework có tác động gì đến kiến trúc 6 lớp, 46 skills hiện tại?

---

## I. JTBD/ODI TÓM TẮT QUA LENS WORKSHOP X

### Core Insight

```
JTBD: "Khách hàng không mua sản phẩm. Khách hàng thuê sản phẩm để HOÀN THÀNH MỘT CÔNG VIỆC."

Áp dụng HAI TẦNG cho Workshop X:

TẦNG 1 — KHÁCH HÀNG QUỐC PHÒNG (external customer):
  "Quân đội không mua V-SMASH. Quân đội thuê V-SMASH để HOÀN THÀNH
   công việc 'phát hiện và theo dõi mục tiêu trong mọi điều kiện'."
  
  → Desired outcomes: tốc độ phát hiện, độ chính xác, khả năng hoạt động
    ban đêm, khoảng cách phát hiện, tỉ lệ báo nhầm, v.v.
  → Mỗi outcome = measurable metric = basis for innovation

TẦNG 2 — WORKSHOP X NỘI BỘ (internal customer = team dùng skills):
  "CEO/engineer không 'dùng skill'. Họ thuê skill để HOÀN THÀNH
   một công việc cụ thể trong ngày làm việc."
  
  → "Tôi cần QUYẾT ĐỊNH sản phẩm nào dùng ACH" = job cho forge-shift
  → "Tôi cần BIẾT đang ở phase nào" = job cho helix-quality-gate
  → "Tôi cần PHÁT HIỆN rủi ro trước khi muộn" = job cho bridge-risk-radar

★ INSIGHT QUAN TRỌNG: Khung 6 lớp hiện tại thiết kế từ GÓC CUNG CẤP
  (supply-side: "hệ thống cần gì?"). JTBD đặt câu hỏi từ GÓC CẦU
  (demand-side: "người dùng cần hoàn thành JOB gì?").
```

### ODI Process (6 Steps)

```
1. DEFINE: Market = group of people + job-to-be-done (không phải product category)
2. DISCOVER: 100+ desired outcomes cho job đó (customer language, measurable)
3. ANALYZE: Importance × Satisfaction → Opportunity Algorithm
4. SEGMENT: Nhóm customers by unmet outcomes (không phải demographics)
5. STRATEGIZE: Chọn strategy dựa trên opportunity landscape
6. DESIGN: Create solution targeting underserved outcomes
```

---

## II. CHẨN ĐOÁN: KHUNG 6 LỚP THIẾU GÌ THEO LENS JTBD?

### 2.1 Lỗ Hổng #1: Không Có "Job Definition" Cho Khách Hàng Quốc Phòng

```
HIỆN TẠI trong FORGE:
  forge-scout: "Tìm cơ hội ACH" → technology-push
  forge-shift: "Đánh giá ACH Go/No-Go" → solution-centric
  forge-cost: "So sánh chi phí" → supplier-centric

THIẾU:
  "Job-to-be-done của KHÁCH HÀNG là gì?"
  "100+ desired outcomes họ measure success bằng gì?"
  "Outcome nào underserved (quan trọng nhưng chưa hài lòng)?"
  "Outcome nào overserved (sản phẩm hiện tại quá tốt → opportunity giảm giá)?"

VÍ DỤ — V-SMASH:
  Job: "Phát hiện và theo dõi mục tiêu di chuyển trong khu vực tác chiến"
  
  Desired outcomes (ví dụ, chưa đầy đủ):
  ├── Minimize thời gian từ xuất hiện mục tiêu đến phát hiện
  ├── Minimize tỉ lệ báo nhầm (false positive)  
  ├── Minimize tỉ lệ bỏ sót (false negative)
  ├── Minimize thời gian triển khai hệ thống tại vị trí mới
  ├── Minimize nhu cầu đào tạo trước khi vận hành
  ├── Minimize thời gian bảo dưỡng giữa các ca hoạt động
  ├── Minimize phụ thuộc vào điều kiện thời tiết/ánh sáng
  ├── Minimize trọng lượng hệ thống cần vận chuyển
  ├── Minimize số người cần để vận hành
  └── ... (có thể 50-100+ outcomes)

  Outcome nào UNDERSERVED? → đó là nơi Workshop X đầu tư.
  Outcome nào OVERSERVED? → đó là nơi ACH có thể giảm cost.
  
  ★ HIỆN TẠI: Workshop X thiết kế theo SPECS (MIL-STD requirements)
     JTBD nói: specs ≠ jobs. Requirements list (HELIX Phase 1) KHÔNG PHẢI job map.
     Requirements = nhà sản xuất viết. Jobs = khách hàng sống hàng ngày.
```

### 2.2 Lỗ Hổng #2: Không Có "Internal Job Map" Cho User Của Skills

```
HIỆN TẠI:
  46 skills thiết kế từ "system needs this capability"
  → Đúng về mặt architecture
  → SAI về mặt adoption (user phải TÌM skill phù hợp → cognitive overhead)

JTBD HỎI:
  "CEO ngồi vào bàn sáng thứ Hai. JOB gì cần hoàn thành?"
  
  CEO's Jobs (ví dụ):
  ├── J1: "Biết team đang ở đâu" (status awareness)
  ├── J2: "Quyết định ưu tiên tuần này" (prioritization)
  ├── J3: "Phát hiện vấn đề trước khi bùng nổ" (risk detection)
  ├── J4: "Giải quyết block cho team" (unblocking)
  ├── J5: "Đánh giá cơ hội mới" (opportunity assessment)
  ├── J6: "Build relationship với customer" (trust building)
  └── J7: "Học và cải thiện hệ thống" (system improvement)
  
  Mỗi JOB → map to WHICH SKILLS? Hiện tại mapping này KHÔNG TỒN TẠI.
  
  J1 "biết team ở đâu" → bridge-dashboard + helix-quality-gate + forge-portfolio
  J2 "ưu tiên tuần này" → dmir-constrain + bridge-dashboard + forge-portfolio
  J3 "phát hiện vấn đề" → bridge-risk-radar + helix-integration-debt + forge-portfolio
  
  ★ User nghĩ theo JOB, không theo SKILL.
    Architecture nghĩ theo SKILL, không theo JOB.
    GAP = friction = low adoption = skills exist but unused.
```

### 2.3 Lỗ Hổng #3: Không Có Opportunity Algorithm

```
ODI's Opportunity Algorithm:
  Opportunity = Importance + max(Importance - Satisfaction, 0)
  
  → Cao: outcome rất quan trọng, khách hàng rất không hài lòng = ĐÁNH MẠNH
  → Thấp: outcome ít quan trọng hoặc khách hàng đã hài lòng = ĐỪNG ĐẦU TƯ

HIỆN TẠI trong FORGE:
  forge-scout: "scan portfolio for ACH opportunities"
  → DỰA TRÊN technology capability, KHÔNG dựa trên customer unmet outcomes

VỚI ODI:
  forge-scout + ODI: "scan customer jobs → find underserved outcomes →
                      THEN check if ACH can address those outcomes"
  
  Thứ tự đảo ngược:
    HIỆN TẠI: Technology → "tìm customer cho technology này"
    ODI:      Customer job → underserved outcome → "technology nào solve?"
    
  ★ Đây là L2 paradigm shift cho FORGE:
    Từ "chúng tôi có AI, dùng ở đâu?" → "khách hàng cần gì, AI có giúp được không?"
```

### 2.4 Lỗ Hổng #4: Không Có Job Map Cho Toàn Bộ Product Lifecycle

```
ODI Job Map (8 bước của customer khi "thuê" sản phẩm):
  1. DEFINE: xác định cần làm gì
  2. LOCATE: tìm input cần thiết
  3. PREPARE: chuẩn bị
  4. CONFIRM: xác nhận sẵn sàng
  5. EXECUTE: thực hiện
  6. MONITOR: theo dõi kết quả
  7. MODIFY: điều chỉnh nếu cần
  8. CONCLUDE: kết thúc

Áp dụng cho V-SMASH's customer (đơn vị quân đội):
  1. DEFINE: "Cần giám sát khu vực X trong thời gian Y"
  2. LOCATE: tìm V-SMASH trong kho, kiểm tra pin, phụ kiện
  3. PREPARE: vận chuyển đến vị trí, lắp đặt, canh chỉnh
  4. CONFIRM: test chức năng, kết nối mạng, calibrate
  5. EXECUTE: giám sát mục tiêu, theo dõi cảnh báo
  6. MONITOR: kiểm tra chất lượng hình ảnh, pin, kết nối
  7. MODIFY: điều chỉnh vùng giám sát, ngưỡng cảnh báo
  8. CONCLUDE: thu hồi, bảo dưỡng, báo cáo kết quả

  ★ Mỗi bước có desired outcomes riêng.
    Workshop X hiện chỉ focus bước 5 (EXECUTE).
    Nhưng JTBD nói: innovation opportunity nằm ở MỌI bước.
    
    Ví dụ: Bước 3 (PREPARE) — "minimize thời gian lắp đặt tại vị trí mới"
    → Đây có thể là outcome UNDERSERVED mà đối thủ cũng không giải quyết tốt
    → ACH opportunity: AI-assisted auto-calibration khi lắp đặt
    → Workshop X có thể thắng ở ĐÂY chứ không chỉ ở "detect better"
```

---

## III. TÁC ĐỘNG CỤ THỂ LÊN TỪNG LỚP

### Layer 1: DMIR Meta-Layer → MODERATE IMPACT

```
DMIR ĐÃ CÓ systems thinking, constraint analysis, leverage points.
JTBD BỔ SUNG: "constraint" không chỉ internal — còn là CUSTOMER OUTCOME constraint.

TÁC ĐỘNG:
├── dmir-constrain: thêm dimension "customer outcome constraint"
│   "Bottleneck không chỉ ở HELIX 29% — còn ở customer outcome #47 underserved"
│   → Constraint chain mở rộng: internal bottleneck + external opportunity gap
│
├── dmir-model: thêm demand-side modeling
│   "SD model không chỉ predict FORGE score — còn predict customer satisfaction"
│   → Model connects: internal capability → customer outcome satisfaction
│
├── dmir-paradigm: JTBD IS a paradigm shift (L2)
│   "Từ technology-push sang outcome-pull"
│   → dmir-paradigm cần formally challenge "technology-push" paradigm
│
└── dmir-cycle-plan: thêm JTBD cycle
    "Quarterly DMIR cycle nên bắt đầu bằng: re-assess customer jobs"
    → Cycle Plan Step 0: "Customer jobs changed? New unmet outcomes?"

VERDICT: Không cần skill mới. Enrich 4 existing DMIR skills with JTBD dimension.
```

### Layer 2: FORGE Product Strategy → HIGH IMPACT (★★★)

```
FORGE CHỊU TÁC ĐỘNG LỚN NHẤT vì JTBD thay đổi fundamentally cách product strategy hoạt động.

TÁC ĐỘNG CHI TIẾT:

1. forge-scout → REDESIGN NEEDED
   HIỆN TẠI: "Scan portfolio for ACH opportunities" (technology-push)
   VỚI JTBD:  "Map customer jobs → find underserved outcomes →
               match with ACH capability" (outcome-pull)
   
   THÊM: Job Mapping step TRƯỚC technology scan
   ├── Step 0 (MỚI): 👤 Map customer's job-to-be-done (workshop with customer/user)
   ├── Step 0b (MỚI): 👤→🤖 Generate 50-100 desired outcome statements
   ├── Step 0c (MỚI): 👤 Survey/interview importance × satisfaction
   ├── Step 0d (MỚI): 🤖 Run Opportunity Algorithm → rank underserved outcomes
   └── Step 1 (UPDATED): 🤖 Cross-reference underserved outcomes × ACH capability
   
   ★ forge-scout trở thành: "find where ACH meets UNMET customer need"
     thay vì: "find where ACH can replace hardware"

2. forge-shift → ADD OUTCOME CRITERIA
   HIỆN TẠI: SHIFT checklist (Substitutable/Hybrid/Improvement/Fallback/Training data)
   VỚI JTBD: thêm "O" = OUTCOME-ALIGNED
   
   SHIFT → SHIFTO:
   S — Substitutable? (physics test)
   H — Hybrid possible?
   I — Improvement trajectory? (dA/dt > dH/dt?)
   F — Fallback feasible?
   T — Training data available?
   O — OUTCOME-ALIGNED? ★ MỚI
       ├── "ACH này address outcome nào?"
       ├── "Outcome đó underserved (opportunity score > threshold)?"
       ├── "Nếu ACH solve outcome → customer willingness to pay?"
       └── Score: ✅ addresses top-10 underserved / ⚠️ addresses mid-tier / ❌ no unmet outcome
   
   ★ SHIFTO filter bổ sung: "ACH có thể hoạt động, nhưng customer CÓ CẦN KHÔNG?"
     Ngăn: build technology nobody asked for

3. forge-validate → ADD OUTCOME METRICS
   HIỆN TẠI: Performance Envelope (lab → field → operational)
   VỚI JTBD: Performance Envelope MÀ CUSTOMER DEFINE
   
   ├── Stage 1-3 validate against TECHNICAL specs → giữ nguyên
   └── Stage 4 (MỚI): Validate against CUSTOMER DESIRED OUTCOMES
       ├── "Customer said 'minimize detection time' → measured: 2.3s → customer target: <3s → ✅"
       ├── "Customer said 'minimize false positives' → measured: 4% → customer target: <2% → ❌"
       └── Gap analysis: which outcomes STILL underserved after our solution?

4. forge-trust → NATURAL FIT
   HIỆN TẠI: Build trust evidence for customer
   VỚI JTBD: Trust evidence FRAMED IN CUSTOMER'S JOB LANGUAGE
   
   ├── Thay vì: "System accuracy 96%" (supplier language)
   └── Nói: "Giảm 70% thời gian xác định mục tiêu" (outcome language)
   
   ★ JTBD makes forge-trust dramatically more effective
     because evidence is framed in what CUSTOMER CARES ABOUT

5. forge-evolve → ADD MARKET STRATEGY
   ODI defines 5 growth strategies based on job landscape:
   ├── Differentiated: target underserved outcomes (charge premium)
   ├── Dominant: serve all outcomes (market leader)
   ├── Discrete: serve overserved → lower cost (disruption)
   ├── Sustaining: improve existing outcomes incrementally
   └── Disruptive: new platform gets MORE of job done
   
   forge-evolve nên include: "which strategy for each product?"
   → V-SMASH: Differentiated (ACH targets underserved detection outcomes)
   → LOMAH-AD: Dominant (cover all drone detection outcomes)
   → SCOREBOARD: Discrete (simplify overserved features, lower cost)

VERDICT: Không cần skill hoàn toàn mới. NHƯNG cần 1 SKILL BỔ SUNG + refactor 5 existing.
```

### Layer 2: BRIDGE Operations → LOW-MODERATE IMPACT

```
BRIDGE vận hành INTERNAL. JTBD primary value = EXTERNAL customer.
Nhưng JTBD Tầng 2 (internal jobs) có tác động:

TÁC ĐỘNG:
├── bridge-dashboard: organize by CEO JOB, không chỉ by METRIC
│   Thay vì: "7 metrics" → "7 metrics GROUPED BY CEO JOB"
│   J1 "status awareness" → metrics 1,3
│   J2 "prioritization" → metrics 5,6
│   J3 "risk detection" → metric 7
│
├── bridge-knowledge-base: thêm customer job data
│   KB Layer 2 thêm: per-product job map + outcome data
│   "V-SMASH: 87 desired outcomes, top 10 underserved: ..."
│
└── bridge-signal-extract: thêm customer outcome signals
    Source 3 (Customer/Field Interactions) → extract through JOB lens
    "Customer nói 'mất quá lâu để lắp đặt' = outcome 'minimize setup time' underserved"

VERDICT: Enrich existing skills. Không cần skill mới.
```

### Layer 2: HELIX Design Execution → MODERATE IMPACT

```
HELIX execution = Pahl-Beitz methodology. JTBD bổ sung ở Phase 1.

TÁC ĐỘNG:
├── helix-task-clarify → SIGNIFICANT ENHANCEMENT
│   HIỆN TẠI: Requirements list từ standards + customer spec
│   VỚI JTBD: Requirements list ENRICHED BY customer desired outcomes
│   
│   Step 2 (MỚI): Import customer job data từ forge-scout
│   ├── "forge-scout đã identify 15 underserved outcomes cho job này"
│   ├── Convert underserved outcomes → design requirements
│   │   "Outcome: minimize setup time → Requirement: setup < 5 min"
│   └── Priority: underserved outcomes = MUST-HAVE requirements
│   
│   ★ HIỆN TẠI: Requirements = what engineer THINKS customer needs
│     VỚI JTBD: Requirements = what customer MEASURED as important but unsatisfied
│   
│   This is L5 change: rule "requirements come from customer jobs, not just specs"
│
├── helix-concept-generate → minor impact
│   Concept evaluation (VDI 2225) thêm criteria: "how many underserved outcomes addressed?"
│   Concept A addresses 8/15 underserved outcomes → score higher than Concept B (5/15)
│
└── helix-6flow-mapper → no change (internal design tool, JTBD is external)

VERDICT: Significant enhancement to helix-task-clarify. Minor to others.
```

### Layer 3: Execution → NO IMPACT

```
Execution skills (cad-viz, cad-review, cad-doc-gen, etc.) = TOOLS.
JTBD doesn't change HOW you use a CAD tool.
JTBD changes WHAT you design with it (upstream decisions).

VERDICT: No change needed.
```

### Layer 4: Learning → LOW IMPACT

```
Learning skills focus on mastering P&B methodology.
JTBD adds: "also learn how to capture customer jobs"
→ Minor addition to curriculum, not structural change.

VERDICT: Add JTBD module to pahl-beitz-mastery. No new skills.
```

### Layer 5: Personal Analytical → LOW IMPACT

```
deep-content-analyzer already has Missing Dimensions checklist.
JTBD could be added as additional dimension.

VERDICT: Add to dimension checklist. No structural change.
```

---

## IV. ĐỀ XUẤT: 1 SKILL MỚI + ENRICH EXISTING

### 4.1 Skill Mới: `forge-job-map` — Customer Job Mapping

```
Lý do cần skill MỚI thay vì chỉ enrich forge-scout:
  forge-scout = TECHNOLOGY scan → thêm JTBD vào = scope quá rộng
  Job mapping = MỘT HOẠT ĐỘNG RIÊNG BIỆT cần workshop, survey, analysis
  Frequency: 1-2 lần/năm per product (không phải continuous)
  Output: feeds into forge-scout, forge-shift, helix-task-clarify
```

**Stage:** 0 (trước forge-scout — input cho toàn bộ FORGE)
**Trigger:** "job map", "customer needs", "desired outcomes", "ODI", "JTBD", "khách hàng cần gì?"

**Workflow:**

```
Input: Product/market + access to customers/users
  │
  ▼
Step 1: 👤 Define job-to-be-done
  │     ├── "What job is the customer hiring this product to do?"
  │     ├── Job statement: [Action verb] + [object] + [contextual clarifier]
  │     │   Ví dụ: "Phát hiện và theo dõi mục tiêu di chuyển trong khu vực tác chiến"
  │     ├── ★ CEO/product lead phải gặp ACTUAL USER (lính, sĩ quan vận hành)
  │     │   Không phải procurement officer (buyer ≠ user)
  │     └── Map job chain: core job + related jobs + emotional/social jobs
  │
  ▼
Step 2: 👤→🤖 Build Job Map (8 steps)
  │     ├── 👤 Workshop with 6-12 users: walk through how they DO the job today
  │     ├── 🤖 Structure into 8-step job map (Define→Locate→Prepare→Confirm→
  │     │   Execute→Monitor→Modify→Conclude)
  │     └── For each step: what could go wrong? what would make it perfect?
  │
  ▼
Step 3: 👤→🤖 Generate Desired Outcome Statements
  │     ├── 👤 Interview users: "what do you measure success by?"
  │     ├── 🤖 Format into standard outcome statements:
  │     │   "[Minimize/Maximize] + [metric] + [context]"
  │     │   Ví dụ: "Minimize the time it takes to set up the system at a new position"
  │     ├── Target: 50-100 outcomes per product
  │     └── 🤖 Deduplicate, categorize by job map step
  │
  ▼
Step 4: 👤 Survey: Importance × Satisfaction
  │     ├── Survey 15-30 users (minimum for statistical significance)
  │     ├── For each outcome: "How important?" (1-5) + "How satisfied with current?" (1-5)
  │     └── ★ Defense context: users may be restricted → use structured interviews instead
  │
  ▼
Step 5: 🤖 Opportunity Algorithm
  │     ├── Score = Importance + max(Importance - Satisfaction, 0)
  │     ├── Rank all outcomes by opportunity score
  │     ├── Top 10-15 = UNDERSERVED → innovation targets
  │     ├── Bottom 10-15 = OVERSERVED → cost reduction candidates (ACH!)
  │     └── Generate Opportunity Landscape visualization
  │
  ▼
Step 6: 🤖→👤 Strategic implications
  │     ├── UNDERSERVED outcomes → "invest here, differentiate here"
  │     ├── OVERSERVED outcomes → "ACH can reduce cost here without losing value"
  │     ├── Map: underserved outcomes × ACH capability → forge-scout input
  │     ├── Map: underserved outcomes → requirements → helix-task-clarify input
  │     └── Strategy recommendation: differentiated / dominant / discrete / disruptive?
  │
  ▼
Output: Job Map + 50-100 Outcomes + Opportunity Landscape + Strategy recommendation
        → forge-scout, forge-shift, forge-trust, helix-task-clarify
```

**FORGE Integration:**
```
forge-job-map FEEDS:
├── forge-scout: underserved outcomes as ACH opportunity filter
├── forge-shift: "O" in SHIFTO (outcome-aligned?)
├── forge-validate: customer-defined outcome metrics for validation
├── forge-trust: evidence framed in outcome language
├── forge-evolve: growth strategy based on opportunity landscape
└── forge-cost: overserved outcomes = cost reduction candidates

forge-job-map READS FROM:
├── bridge-knowledge-base: existing customer data, field feedback
├── bridge-signal-extract: customer interaction signals (outcome language)
└── HELIX: existing product capabilities (what outcomes currently served?)
```

### 4.2 Enrich Existing Skills

```
ENRICH (không cần tạo mới, chỉ thêm vào workflow):

1. forge-scout Step 0:        Import forge-job-map output (add to existing)
2. forge-shift:               SHIFT → SHIFTO (add O criteria)
3. forge-validate Stage 4:    Validate vs. customer outcomes (add stage)
4. forge-trust:               Frame evidence in outcome language (reframe)
5. forge-evolve:              Add ODI growth strategy (add section)
6. helix-task-clarify Step 2: Import underserved outcomes as requirements (add step)
7. helix-concept-generate:    Add "outcomes addressed" to VDI 2225 criteria (add criteria)
8. bridge-dashboard:          Group metrics by CEO jobs (restructure view)
9. bridge-signal-extract S3:  Extract through job lens (enhance protocol)
10. bridge-knowledge-base L2: Add customer job data per product (extend schema)
11. dmir-constrain:           Add customer outcome constraint dimension (extend)
12. dmir-paradigm:            Add "technology-push vs outcome-pull" as paradigm challenge
```

---

## V. REVISED ARCHITECTURE: 6 LỚP + JTBD

```
TRƯỚC JTBD:
  Architecture driven by: "What capabilities does Workshop X need?"
  Skills organized by: system function (B-R-I-D-G-E, F-O-R-G-E, HELIX phases)
  Customer voice: enters at helix-task-clarify (Phase 1 requirements)
  → LATE in the process. FILTERED through specs. SUPPLIER language.

SAU JTBD:
  Architecture driven by: "What jobs do customers + internal users need done?"
  Skills organized by: still system function BUT with job-mapping input layer
  Customer voice: enters at forge-job-map (BEFORE any design decision)
  → EARLY in the process. UNFILTERED. CUSTOMER language.

STRUCTURAL CHANGE:
  ┌─────────────────────────────────────────────────────┐
  │ forge-job-map (MỚI)                                  │
  │ "Customer job → outcomes → opportunity landscape"     │
  │ Frequency: 1-2×/year per product                     │
  └────────────┬────────────────────────────────────────┘
               │ feeds EVERYTHING downstream
               ▼
  ┌─────────────────────────────────────────────────────┐
  │ FORGE Stage 0: scout (enriched)                     │
  │ "Underserved outcomes × ACH capability = opportunity"│
  └────────────┬────────────────────────────────────────┘
               │
               ▼
  (rest of FORGE → HELIX → Execution unchanged structurally,
   but enriched with outcome data flowing through)
```

**Updated Skill Count:**
```
Layer 0: Meta-infrastructure (2) — unchanged
Layer 1: DMIR meta (8) — enriched, not changed
Layer 2: BRIDGE (10) + FORGE (10+1) + HELIX (10) = 31 skills — +1 forge-job-map
Layer 3: Execution (7) — unchanged
Layer 4: Learning (3-4) — minor addition (JTBD module)
Layer 5: Personal analytical (1+3) — add JTBD dimension
─────────────────
TOTAL: 54-56 skills (+1 new, rest enriched)
OPERATIONAL CORE: 47 skills
```

---

## VI. DEEPER ANALYSIS: ĐÂU LÀ L2 PARADIGM SHIFT?

### 6.1 JTBD Challenge to Current Paradigm

```
PARADIGM HIỆN TẠI (Workshop X):
  "Chúng tôi là defense engineering company.
   Chúng tôi nhận specs từ quân đội.
   Chúng tôi thiết kế sản phẩm đáp ứng specs.
   Chúng tôi delivery sản phẩm."
   
   → PRODUCT = đầu ra. SPECS = đầu vào. CUSTOMER = người mua.

PARADIGM JTBD:
  "Khách hàng có JOB cần hoàn thành.
   Chúng tôi hiểu job sâu hơn ai hết.
   Chúng tôi thiết kế solution tốt nhất cho job.
   Customer measures success bằng desired outcomes."
   
   → OUTCOME = đầu ra. JOB = đầu vào. CUSTOMER = người dùng (≠ người mua).

★ KHÁC BIỆT THEN CHỐT CHO DEFENSE:
  Specs do procurement officer viết.
  Jobs do operator/lính trải nghiệm hàng ngày.
  Specs OFTEN DIVERGE from actual jobs.
  
  Ví dụ: Spec yêu cầu "detect at 5km range" (measurable, contractual)
  Nhưng operator's JOB cần: "setup in under 5 min" (KHÔNG trong spec)
  → Product đạt spec nhưng FAIL at job → operator ghét dùng → product thất bại

  Workshop X's advantage: xưởng chế thử NHỎ → CÓ THỂ gặp operator trực tiếp
  Big defense companies: bureaucracy → KHÔNG bao giờ gặp actual user
  → JTBD is Workshop X's UNFAIR ADVANTAGE in defense market
```

### 6.2 JTBD × ACH: Compound Insight

```
ACH NÓI: "Thay hardware đắt bằng AI + hardware rẻ"
JTBD NÓI: "Chỉ invest vào outcomes customer cares about"

COMPOUND:
  "Dùng ACH để address UNDERSERVED outcomes (invest AI where it matters)
   VÀ dùng ACH để reduce cost trên OVERSERVED outcomes (cut where it doesn't)"

VÍ DỤ V-SMASH:
  UNDERSERVED: "minimize detection time in low-light" → INVEST AI here (better algorithms)
  OVERSERVED: "high-resolution camera for daytime" → ACH: use cheaper camera + AI upscale
  
  → ACH + JTBD together = PRECISE resource allocation
  → Without JTBD: ACH applied everywhere (scatter)
  → With JTBD: ACH targeted at maximum opportunity (focused)
  
  ★ JTBD makes FORGE's SHIFT checklist dramatically more effective
    by answering: "ACH for WHAT outcome? Is that outcome UNDERSERVED?"
```

### 6.3 Impact on 9 Operating Laws

```
JTBD không thay đổi 9 Laws — nó STRENGTHENS Law #6 (Identity Law):

Law 6 HIỆN TẠI:
  "ACH as checklist = 20%, as identity = 100%"

Law 6 + JTBD:
  "ACH as checklist = 20%, 
   ACH as identity = 60%,
   ACH TARGETED BY CUSTOMER OUTCOMES = 100%"
   
  Thêm nuance: identity shift chưa đủ nếu build AI for outcomes nobody cares about.
  JTBD ensures identity shift produces CUSTOMER VALUE, not just internal capability.

PROPOSED Law #10: The Job Law
  "Technology without a job is waste. ACH without an underserved outcome is gold-plating.
   Always ask: which JOB does this serve? Which OUTCOME is underserved?"
```

---

## VII. ĐỀ XUẤT THỰC THI: CHO WORKSHOP X DEFENSE CONTEXT

### Defense-Specific Adaptation

```
THÁCH THỨC JTBD TRONG QUỐC PHÒNG:

1. ACCESS TO USERS: Lính/sĩ quan bận, classified context, bureaucratic approval
   → Adapt: shorter interviews (30 min), on-site observation, structured questionnaire
   → Workshop X advantage: SMALL company → personal relationships → easier access

2. SURVEY SIZE: ODI suggests 180+ respondents. Defense may have 15-20 users.
   → Adapt: qualitative job mapping + expert-weighted importance (not statistical survey)
   → Validate with 3-5 deep interviews instead of 180 surveys

3. DUAL CUSTOMER: Procurement officer (buyer) ≠ Operator (user)
   → Map BOTH: buyer's financial outcomes + user's functional outcomes
   → Innovation targets: user's underserved functional outcomes
   → Messaging: translated into buyer's procurement language (forge-trust)

4. CLASSIFIED OUTCOMES: Some desired outcomes may be classified
   → Work within security boundaries
   → Focus on unclassified operational outcomes (setup, maintenance, training)
   → These "mundane" outcomes are often the MOST underserved
```

### Implementation: 3 Steps

```
Step 1 (Tháng 1): V-SMASH pilot
  ├── Map V-SMASH customer's job-to-be-done
  ├── Generate 30-50 desired outcomes (defense-adapted, smaller scale)
  ├── Assess importance × satisfaction with 5-10 key users
  ├── Run Opportunity Algorithm → identify top 10 underserved
  └── Cross-reference with ACH capability → validated forge-scout input

Step 2 (Tháng 2-3): Integrate into FORGE workflow
  ├── forge-scout: add outcome filter
  ├── forge-shift: add SHIFTO "O" criterion
  ├── forge-validate: add customer outcome metrics
  └── helix-task-clarify: add outcome-derived requirements

Step 3 (Tháng 4-6): Expand to portfolio
  ├── Job map for LOMAH-AD, SCOREBOARD, MTB-20
  ├── Cross-product outcome analysis: shared underserved outcomes?
  └── Portfolio strategy: differentiated/dominant/discrete per product
```

---

## VIII. TÓM TẮT TÁC ĐỘNG

```
╔═══════════════════════════════════════════════════════════════╗
║               JTBD/ODI IMPACT ASSESSMENT                     ║
╠═══════════════╦═════════════╦════════════════════════════════╣
║ Layer         ║ Impact      ║ Action                        ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ DMIR (meta)   ║ ★★ Moderate ║ Enrich 4 skills with outcome  ║
║               ║             ║ dimension                      ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ FORGE         ║ ★★★ HIGH   ║ +1 NEW skill (forge-job-map)  ║
║ (product)     ║             ║ Enrich 5 skills. SHIFT→SHIFTO ║
║               ║             ║ L2 paradigm shift potential    ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ BRIDGE (ops)  ║ ★★ Moderate ║ Enrich 3 skills with job lens ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ HELIX (design)║ ★★ Moderate ║ Enrich task-clarify + concept ║
║               ║             ║ evaluation with outcome data   ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ Execution     ║ ★ Low      ║ No change (tools = tools)      ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ Learning      ║ ★ Low      ║ Add JTBD module                ║
╠═══════════════╬═════════════╬════════════════════════════════╣
║ ARCHITECTURE  ║ ★★★ HIGH   ║ Paradigm: supply-push →        ║
║ (overall)     ║             ║ outcome-pull. forge-job-map    ║
║               ║             ║ becomes INPUT to entire FORGE  ║
║               ║             ║ → HELIX pipeline.              ║
╚═══════════════╩═════════════╩════════════════════════════════╝

NET CHANGE: +1 new skill, 12 enriched skills, 0 removed
            Architecture structurally sound, JTBD adds demand-side input
            
BIGGEST INSIGHT: JTBD is Workshop X's UNFAIR ADVANTAGE in defense
  Big companies can't access users. Workshop X CAN.
  JTBD + ACH = "invest AI where customer outcomes are underserved"
  = precision targeting instead of scatter bombing
```
