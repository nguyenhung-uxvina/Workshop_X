# Bộ Prompt NotebookLM chuyên sâu cho Reverse Engineering Workflow
## Defense Products — Vietnam Context (ITAR-Free, QPAN Compliance)

Chào KN, đây là bộ prompt được refine chuyên biệt cho reverse engineering (RE) defense products — kết hợp Pahl-Beitz systematic design methodology, VDI 2221/2206, và framework RE chuẩn (VDI 2209 - Reverse Engineering in product development). Bộ này được thiết kế dựa trên kinh nghiệm thực tế của KN với AK-630 fire control, VN-UWC, MR-123 Vympel, và 30mm naval gun systems.

Điểm khác biệt so với forward design: RE bắt đầu từ **physical artifact** hoặc **incomplete documentation** (thường là sản phẩm nước ngoài cần localize), và phải **reconstruct intent** trước khi redesign. Workflow này đặc biệt nhạy cảm với: IP concerns, incomplete information, material/process mystery, và domestic manufacturability constraints.

---

## Framework nền tảng: 3D-A-R-D Cycle cho RE

Trước khi vào các prompt cụ thể, đây là framework tích hợp mà các prompt sẽ reference:

**3D** (Deconstruct → Decode → Document) — Phase tiếp cận sản phẩm gốc
**A** (Abstract) — Trừu tượng hóa về design intent và functional requirements
**R** (Reconstruct) — Áp dụng P&B để redesign với domestic constraints
**D** (Deploy) — Transfer vào manufacturing với QA validation

---

## 1️⃣ Artifact Deconstructor: Phân tích vật lý sản phẩm gốc

> "Đóng vai Reverse Engineering Lead phân tích tài liệu/hình ảnh/CAD của sản phẩm gốc. Thực hiện deconstruction có hệ thống theo framework sau:
>
> **Layer 1 - Geometric & Dimensional Analysis:**
> - Overall envelope (LxWxH, mass, CG location nếu có)
> - Critical dimensions với tolerance stack-up inference
> - GD&T features quan sát được (datum structure, tolerance zones)
> - Surface finish requirements (Ra values estimation)
> - Non-obvious geometric features (cooling channels, stress relief, manufacturing witness marks)
>
> **Layer 2 - Material & Process Inference:**
> - Material candidates cho từng component (với confidence level %)
> - Manufacturing process evidence (casting marks, machining patterns, weld beads, heat treatment discoloration)
> - Surface treatment (anodizing, phosphating, plating, painting specs)
> - Joining methods (threaded, welded, bonded, riveted, press-fit)
>
> **Layer 3 - Functional Decomposition:**
> - Component inventory với suspected function
> - Power/signal flow paths
> - Kinematic chains và DOF analysis
> - Interface points (mechanical, electrical, fluid, thermal)
>
> **Layer 4 - Hidden Design Intent:**
> - Tại sao designer chọn geometry này mà không phải geometry khác?
> - Safety factors implied (ví dụ: over-sized bearings → high reliability requirement)
> - Manufacturing era signals (technology available at time of design)
> - Operational environment clues (sealing, corrosion protection, shock mounts)
>
> Output: **RE Deconstruction Report** với confidence levels (High/Medium/Low) cho mỗi inference, và **Unknown Items List** cần physical inspection/testing để verify. Flag các items có khả năng là **critical design decisions** không được ghi trong tài liệu."

---

## 2️⃣ Design Intent Decoder: Trích xuất requirements ngược

> "Từ tài liệu sản phẩm gốc, thực hiện **reverse requirements engineering** — tái tạo Requirements List gốc mà designer có thể đã làm việc với.
>
> **Phương pháp: Inverse P&B Task Clarification**
>
> Tạo 3 bảng requirements list với cấu trúc P&B chuẩn (D = Demand, W = Wish):
>
> **Bảng A - Functional Requirements (đã được thỏa mãn bởi sản phẩm gốc):**
> | ID | Requirement | D/W | Evidence in Artifact | Confidence | Page/Drawing Ref |
>
> **Bảng B - Performance Requirements (inferred từ design choices):**
> | ID | Parameter | Estimated Value | Inference Method | Verification Needed | Confidence |
>
> **Bảng C - Constraints (environment, interface, regulatory):**
> | ID | Constraint Type | Description | Evidence | Impact on Design |
>
> **Critical inference questions:**
> - Operational environment: temperature range, humidity, shock, vibration, EMI (evidence từ material choice, sealing, component rating)
> - Interface constraints: mounting, power, signal, communication protocols
> - Lifecycle requirements: MTBF, MTTR, shelf life, field maintenance philosophy
> - Performance envelope: loads, speeds, accuracies, ranges
> - Regulatory compliance: MIL-STD testing likely passed (810G environmental, 461G EMC, 704 power)
>
> **Red flags cần đặc biệt chú ý:**
> - Over-designed features → có thể là reliability/safety critical
> - Under-designed features → có thể là cost-driven compromise hoặc known limitation
> - Unusual design choices → có thể là patent avoidance hoặc specific operational requirement
>
> Kết thúc với **Requirements Confidence Matrix**: requirements có High confidence (bắt buộc giữ) vs Low confidence (có thể re-evaluate trong redesign phase)."

---

## 3️⃣ IP & Legal Navigator: Ràng buộc pháp lý cho RE

> "Đóng vai IP/Legal advisor cho dự án RE defense product trong bối cảnh Việt Nam. Phân tích tài liệu và xác định:
>
> **Phần A - IP Landscape:**
> - Patents có thể relevant (nếu có patent numbers trong tài liệu, infer patent families)
> - Trade secrets indicators (proprietary formulations, undocumented processes)
> - Design patents vs utility patents implications
> - Patent expiration status và jurisdictional coverage
>
> **Phần B - Export Control Implications:**
> - ITAR categories có thể áp dụng (USML Category I-XXI)
> - EAR classifications (ECCN) nếu là dual-use
> - Wassenaar Arrangement controls
> - Country of origin của sản phẩm gốc và sanctions considerations
>
> **Phần C - Vietnam Legal Framework:**
> - Luật Công nghiệp Quốc phòng 2024 requirements cho technology acquisition
> - Law 32/2021/QH15 procurement procedures
> - Intellectual Property Law Vietnam 2022 amendments
> - Technology transfer agreements requirements
>
> **Phần D - RE Legality Assessment:**
> - Clean-room RE vs contaminated RE implications
> - Documentation của independent development process
> - Third-party source of product (legal chain of custody)
> - Publication và distribution restrictions của RE results
>
> **Phần E - Safer Path Recommendations:**
> - Focus areas ít risk nhất (ví dụ: non-patented mechanical interfaces)
> - Design-around strategies để avoid IP conflicts
> - Documentation practices để prove independent creation
> - Collaboration options (licensing, joint development) thay vì pure RE
>
> Output: **RE Risk Assessment Matrix** với likelihood × impact cho từng risk category, và **Go/No-Go recommendation** cho từng component/subsystem."

---

## 4️⃣ Functional Abstraction Engine: Từ artifact đến function structure

> "Biến physical artifact thành abstract function structure theo VDI 2221, sử dụng inverse methodology:
>
> **Step 1 - Black Box Analysis:**
> Identify overall function với 3 flows (Energy, Material, Signal/Information):
> - Input energy/material/signal → Output energy/material/signal
> - Define system boundary
> - Operational states (modes of operation)
>
> **Step 2 - White Box Decomposition:**
> Break down thành sub-functions, mỗi sub-function có:
> - Verb-noun formulation (e.g., 'transmit force', 'measure angle', 'dissipate heat')
> - Quantified inputs/outputs nếu có thể infer
> - Physical components thực hiện function (mapping to artifact)
>
> **Step 3 - Function Structure Diagram:**
> Tạo structure text-based thể hiện:
> - Function hierarchy (main function → sub-functions → elementary functions)
> - Flow connections giữa các functions
> - Parallel vs sequential relationships
>
> **Step 4 - Solution-Neutral Reformulation:**
> CRITICAL STEP cho RE — tách function khỏi specific solution:
> - Function gốc: 'Convert 24VDC to actuator motion using BLDC motor with planetary gearbox'
> - Solution-neutral: 'Convert electrical energy to mechanical rotational motion with specified torque/speed profile'
>
> Điều này cho phép trong Reconstruct phase có thể explore alternative solutions không infringe IP.
>
> **Step 5 - Function-Component Matrix:**
> | Function | Original Component | Function Criticality | Alternative Components Possible |
>
> **Step 6 - Hidden Functions Detection:**
> Quét các components không đóng góp rõ ràng vào main function → có thể là:
> - Safety functions (redundancy, failsafe)
> - Reliability functions (damping, thermal management)
> - Manufacturing functions (assembly aids, tooling features)
> - Legacy functions (historical artifact, not actually needed)
>
> Output: Complete function structure document ready cho conceptual redesign phase."

---

## 5️⃣ Material & Process Detective: Giải mã manufacturing secrets

> "Đóng vai Material Scientist + Manufacturing Engineer. Từ tài liệu/hình ảnh sản phẩm gốc, infer toàn bộ material và process specifications với confidence analysis:
>
> **Bảng A - Material Identification:**
> | Component | Visual Evidence | Material Candidates | Most Likely Material | Confidence % | Verification Method |
>
> Visual evidence checklist:
> - Color và surface appearance (machined aluminum vs anodized, steel vs stainless, brass vs bronze)
> - Weight estimation (density inference)
> - Magnetic response (ferromagnetic vs austenitic vs non-ferrous)
> - Corrosion patterns
> - Thermal discoloration
> - Fracture patterns (nếu có)
>
> **Bảng B - Manufacturing Process Inference:**
> | Feature | Process Evidence | Process Candidates | Alternative Processes for VN | Cost/Quality Trade-off |
>
> Process evidence checklist:
> - Tool marks (milling patterns, turning marks, grinding striations)
> - Parting lines (casting vs forging vs machining)
> - Heat-affected zones (welding, brazing, heat treatment)
> - Surface texture transitions
> - Drafts và radii (casting/forging indicators)
> - Secondary operations evidence (deburring, chamfering patterns)
>
> **Bảng C - Surface Treatment Analysis:**
> | Surface | Treatment Evidence | Specification Estimate | VN-Available Alternative |
>
> **Bảng D - Heat Treatment Inference:**
> | Component | Evidence (color, hardness marks) | Likely HT Process | Alternative HT Process Available in VN |
>
> **Critical deliverable - Vietnam Manufacturing Capability Gap:**
> Với mỗi material/process identified, classify:
> - ✅ Available in Vietnam (suppliers, capability level)
> - ⚠️ Available but limited (capability gaps, quality concerns)
> - ❌ Not available (must import or develop)
> - 🔄 Alternative available (domestic substitute với performance trade-off)
>
> **Recommendation matrix:**
> | Component | Original Spec | VN Alternative | Performance Impact | Cost Impact | Localization Priority |
>
> Flag các items có thể là **strategic bottlenecks** cho technology sovereignty và đề xuất R&D investments."

---

## 6️⃣ Tolerance & Performance Reverser: Giải mã critical dimensions

> "Thực hiện **Inverse Tolerance Analysis** — từ observed performance và geometry của sản phẩm gốc, reverse-engineer tolerance stack và critical design parameters.
>
> **Phần A - Tolerance Hierarchy Analysis:**
> Phân loại dimensions theo criticality:
> - **Tier 1 (Functional Critical):** Dimensions directly affecting function performance (tolerance thường ±0.01-0.05mm)
> - **Tier 2 (Interface Critical):** Mating surfaces, alignment features (tolerance ±0.02-0.1mm)
> - **Tier 3 (Assembly Critical):** Clearances, access dimensions (tolerance ±0.1-0.3mm)
> - **Tier 4 (Cosmetic):** Non-functional surfaces (tolerance ±0.5mm+)
>
> **Phần B - Datum Structure Reverse:**
> - Identify primary datum (largest stable surface, usually machined)
> - Secondary datum (perpendicular, typically smaller precision surface)
> - Tertiary datum (point/feature)
> - Datum-Reference-Frame (DRF) cho assembly
>
> **Phần C - GD&T Inference:**
> Với mỗi critical feature, infer GD&T callouts có thể có trong drawing gốc:
> - Form tolerances (flatness, straightness, circularity, cylindricity)
> - Orientation tolerances (parallelism, perpendicularity, angularity)
> - Location tolerances (position, concentricity, symmetry)
> - Runout tolerances (circular, total)
>
> **Phần D - Fits & Clearances Analysis:**
> | Mating Pair | Observed Behavior | Likely Fit (ISO 286) | Calculated Clearance Range | Verification Test |
>
> **Phần E - Critical Performance Parameters Reverse:**
> Từ function analysis và geometry, calculate backwards:
> - Expected loads (static + dynamic)
> - Stress levels (using observed material)
> - Safety factors implied
> - Fatigue life estimation
> - Thermal operating range
> - Natural frequencies (nếu có vibration mounts)
>
> **Phần F - Manufacturing Capability Requirements:**
> Based on inferred tolerances, machinery capability needed:
> - CNC milling: 3-axis vs 5-axis, accuracy grade
> - Turning: precision lathe capability
> - Grinding: surface vs cylindrical, tolerance grade
> - Measurement: CMM, optical, specialized gauging
>
> Flag dimensions có thể là **Quality Gate critical** cho inspection checklist sau này."

---

## 7️⃣ Redesign Strategist: Từ RE sang P&B forward design

> "Đóng vai Chief Design Engineer transitioning từ RE phase sang Redesign phase. Áp dụng P&B systematic design cho redesign với Vietnam constraints.
>
> **Phase I - Modified Task Clarification:**
>
> Tạo Updated Requirements List khác với original requirements list:
> | ID | Requirement | Original | Modified for VN | Rationale |
>
> Modification drivers:
> - Vietnam operational environment (tropical, coastal, seismic considerations)
> - Vietnam manufacturing capability constraints
> - ITAR-free component sourcing
> - Domestic MRO capability requirements
> - Cost optimization for domestic budget
> - Standardization với existing VN military inventory
>
> **Phase II - Conceptual Design Alternatives:**
>
> Với mỗi critical function từ function structure, tạo Morphological Matrix:
> | Function | Original Solution | Alt 1 (VN-optimized) | Alt 2 (Cost-optimized) | Alt 3 (Capability-extended) |
>
> Criteria cho exploring alternatives:
> - Patent/IP-free implementations
> - Domestic supply chain solutions
> - Performance equivalent hoặc tốt hơn
> - Manufacturing capability fit
>
> **Phase III - VDI 2225 Concept Selection:**
>
> Evaluation criteria phù hợp cho defense RE context:
> - Technical performance (35%): function fulfillment, reliability, performance margins
> - Manufacturability (25%): fit với VN capability, tooling, workforce skills
> - Sovereignty (20%): ITAR-free, domestic content %, supply chain resilience
> - Cost (10%): unit cost, lifecycle cost, tooling investment
> - Time-to-deploy (10%): development time, qualification time
>
> Generate weighted scoring matrix với sensitivity analysis.
>
> **Phase IV - Design Decisions Log:**
> | Decision | Original Approach | Chosen Approach | Rationale | Trade-offs Accepted | Risk Mitigation |
>
> **Phase V - Divergence Map:**
> Document rõ ràng:
> - Features giữ nguyên từ original (why)
> - Features modified (how, why)
> - Features added (what, why)
> - Features removed (what, why)
>
> Điều này quan trọng cho: IP defense, configuration management, backward compatibility."

---

## 8️⃣ Validation & Testing Strategist: Chứng minh redesign equivalent

> "Đóng vai Test & Evaluation Lead. Thiết kế comprehensive validation strategy chứng minh redesign performs ≥ original.
>
> **Level 1 - Component Testing:**
>
> Bảng test matrix cho từng critical component:
> | Component | Original Spec | Redesign Spec | Test Method | Acceptance Criteria | MIL-STD Reference |
>
> Test categories:
> - Dimensional verification (CMM, optical)
> - Material property verification (tensile, hardness, chemistry)
> - Surface quality (Ra, corrosion resistance, adhesion)
> - Non-destructive testing (ultrasonic, dye penetrant, X-ray nếu cần)
>
> **Level 2 - Subsystem Testing:**
>
> Performance envelope testing:
> - Load testing (static, dynamic, fatigue)
> - Environmental testing (MIL-STD-810G): temperature, humidity, vibration, shock, salt fog
> - EMC testing (MIL-STD-461G) nếu electronic
> - Reliability testing (MTBF verification)
>
> **Level 3 - System Integration Testing:**
>
> Full-up testing trong representative environment:
> - Function verification end-to-end
> - Interface compatibility với existing systems
> - Operational scenarios replication
> - Side-by-side comparison với original product (nếu có)
>
> **Level 4 - Field Validation:**
>
> User trials và operational assessment:
> - Trial unit deployment
> - User feedback collection protocol
> - Failure mode monitoring
> - MTBF/MTTR verification in field
>
> **Special consideration - Defense Acceptance Testing:**
>
> Theo quy trình nghiệm thu sản phẩm quốc phòng VN:
> - Thử nghiệm xuất xưởng (factory acceptance)
> - Thử nghiệm nghiệm thu cấp Bộ (ministry-level acceptance)
> - Thử nghiệm chiến đấu hoặc thử nghiệm sử dụng (combat/operational trials)
>
> **Acceptance Criteria Framework:**
>
> | Criterion Type | Definition | Measurement Method | Pass/Fail Threshold |
>
> Types:
> - Functional equivalence (must demonstrate ≥ original)
> - Performance envelope (must cover ≥ original envelope)
> - Interface compatibility (must integrate với existing systems)
> - Reliability (must demonstrate ≥ original MTBF với statistical confidence)
> - Safety (must not introduce new hazards)
>
> **Risk-based Testing Prioritization:**
>
> Với limited resources, prioritize testing theo:
> - Highest uncertainty (low confidence inferences)
> - Highest impact (mission-critical functions)
> - Highest novelty (features với biggest divergence từ original)
> - Regulatory required (MIL-STD mandatory tests)
>
> Output: **Test Plan Matrix** với resource estimates, timeline, và go/no-go decision points."

---

## 9️⃣ Knowledge Capture Architect: Tổ chức learning cho tổ chức

> "Thiết kế comprehensive knowledge management system capture toàn bộ learnings từ RE project để compound với future projects.
>
> **Artifact 1 - RE Technical Dossier:**
>
> Structured document với sections:
> - Executive Summary (1 page)
> - Original Product Analysis (deconstruction findings)
> - Requirements Reconstruction
> - Function Structure Analysis
> - Material & Process Analysis
> - Tolerance & Performance Analysis
> - IP & Legal Analysis
> - Redesign Rationale
> - Validation Results
> - Lessons Learned
>
> **Artifact 2 - Design Pattern Library:**
>
> Reusable patterns identified trong RE:
> | Pattern Name | Context | Problem | Solution | Consequences | Reference Product |
>
> Examples for defense products:
> - Shock mounting pattern cho naval equipment
> - Sealing pattern cho tropical humidity
> - Thermal management pattern cho desert operation
> - EMI shielding pattern cho sensitive electronics
>
> **Artifact 3 - Heuristics Database:**
>
> Rules of thumb extracted từ observed designs:
> | Heuristic | Domain | Evidence | Confidence | Application Constraints |
>
> **Artifact 4 - Failure Mode Catalog:**
>
> Failures observed (nếu có sản phẩm gốc failed) hoặc predicted:
> | Failure Mode | Root Cause | Detection | Prevention in Redesign |
>
> **Artifact 5 - Supplier Capability Map:**
>
> Vietnam ecosystem documentation:
> | Capability | Suppliers | Capacity | Quality Level | Strategic Rating |
>
> **Artifact 6 - Lessons Learned Register:**
>
> Structured theo:
> - What went well
> - What went wrong
> - What we would do differently
> - What we need to investigate further
>
> **Compound Engineering Integration:**
>
> Workflow cho future RE projects:
> 1. Query knowledge base trước khi start new RE
> 2. Apply existing patterns và heuristics
> 3. Capture new learnings
> 4. Update knowledge base post-project
> 5. Cross-pollinate giữa different RE projects
>
> **Strategic Capability Building:**
>
> Map RE projects to capability development:
> | RE Project | Capabilities Gained | Technology Sovereignty Contribution | Next Logical Project |
>
> Output format: Structured knowledge base ready for import vào Notion/Airtable/PLM system với consistent taxonomy và cross-references."

---

## 🔟 Adversarial RE Auditor: Stress-test redesign trước deployment

> "Đóng vai Red Team Auditor — aggressively challenge RE output trước khi go-to-production. Mục tiêu: find flaws trước khi field discovers them.
>
> **Challenge 1 - Requirements Completeness Audit:**
>
> Stress-test Requirements List reverse-engineered:
> - Missing requirements nào có thể đã bị overlook?
> - Implicit requirements nào chưa được articulate?
> - Environmental extremes nào chưa được considered?
> - Interface requirements nào chưa được documented?
> - Lifecycle requirements nào chưa được addressed?
>
> Specifically probe:
> - Transportation và storage requirements
> - Maintenance accessibility
> - Disposal và end-of-life
> - Training và documentation
> - Spare parts strategy
>
> **Challenge 2 - Function Structure Audit:**
>
> Question every function:
> - Tại sao function này tồn tại? (5-Why drilling)
> - Có function nào redundant?
> - Có function nào missing?
> - Functional allocation đúng không? (right component doing right function)
> - Edge cases: failure modes, degraded operation, emergency scenarios
>
> **Challenge 3 - Design Decision Audit:**
>
> Với mỗi design decision trong redesign:
> - What evidence supports this decision?
> - What alternatives were considered?
> - What biases might have influenced decision?
>   - Anchoring bias (stuck với original design)
>   - Availability heuristic (chose familiar solution)
>   - Sunk cost (committed to approach)
>   - Confirmation bias (ignored contrary evidence)
> - What could falsify this decision?
>
> **Challenge 4 - Manufacturability Audit:**
>
> From production floor perspective:
> - Can VN workforce actually build this?
> - What training is needed?
> - What tooling is needed?
> - What's the yield rate realistically?
> - Where will quality issues likely emerge?
> - What happens when key supplier fails?
>
> **Challenge 5 - Operational Audit:**
>
> From end-user (quân đội) perspective:
> - Usability trong field conditions
> - Maintenance complexity vs current doctrine
> - Training burden
> - Logistics tail (spare parts, specialized tools)
> - Compatibility với existing equipment/procedures
>
> **Challenge 6 - Adversary Audit:**
>
> Think như enemy trying to defeat this system:
> - Vulnerability points
> - Counter-measures có thể có
> - Degradation in contested environment
> - Vulnerability to specific threats (EW, cyber, kinetic)
>
> **Challenge 7 - Regulatory Audit:**
>
> Compliance verification:
> - MIL-STD coverage complete?
> - STANAG compliance (nếu cần interoperability)
> - Vietnam regulatory framework
> - Export control implications (nếu có future export plans)
>
> **Challenge 8 - Strategic Audit:**
>
> Higher-level questions:
> - Does this RE effort advance national technology sovereignty?
> - Is this the right RE target (opportunity cost vs other projects)?
> - What's the obsolescence timeline (will this be outdated soon)?
> - Does it create dependencies we didn't have before?
>
> **Output Format:**
>
> **Audit Findings Report:**
> | Finding ID | Severity | Description | Evidence | Recommendation | Owner | Due Date |
>
> Severity levels:
> - 🔴 Critical: Must fix before production (show-stopper)
> - 🟠 High: Must fix before field deployment
> - 🟡 Medium: Should fix, manage risk
> - 🟢 Low: Consider for future improvement
>
> **Go/No-Go Recommendation:**
> - Overall readiness score (1-10)
> - Top 5 blockers
> - Conditional go với mitigations
> - Timeline impact of addressing findings
>
> Deliver recommendations với brutal honesty — mục tiêu là catch problems early, không phải approve feelgood."

---

## 🎯 Meta-Framework: Tích hợp bộ prompt vào RE Workflow

Sequential application flow cho một dự án RE hoàn chỉnh:

**Stage 0 - Project Initiation (Tuần 1):**
- Prompt 3 (IP & Legal Navigator) → quyết định go/no-go từ legal perspective

**Stage 1 - Deconstruction (Tuần 2-4):**
- Prompt 1 (Artifact Deconstructor) → physical analysis
- Prompt 5 (Material & Process Detective) → manufacturing analysis
- Prompt 6 (Tolerance & Performance Reverser) → dimensional analysis

**Stage 2 - Abstraction (Tuần 5-6):**
- Prompt 2 (Design Intent Decoder) → requirements reconstruction
- Prompt 4 (Functional Abstraction Engine) → function structure

**Stage 3 - Reconstruction (Tuần 7-12):**
- Prompt 7 (Redesign Strategist) → P&B forward design với modifications

**Stage 4 - Validation (Tuần 13-16):**
- Prompt 8 (Validation & Testing Strategist) → test planning và execution
- Prompt 10 (Adversarial RE Auditor) → red team review

**Stage 5 - Knowledge Capture (Continuous):**
- Prompt 9 (Knowledge Capture Architect) → compound learnings

---

## Điểm mạnh của bộ prompt này cho Vietnam defense context:

**Technology sovereignty focus** — mỗi prompt đều có component đánh giá VN manufacturing capability và ITAR-free alternatives.

**QPAN compliance awareness** — tích hợp Luật Công nghiệp Quốc phòng 2024 và quy trình nghiệm thu Bộ Quốc phòng.

**Reverse IP protection** — Prompt 3 và 10 giúp defensive posture cho IP concerns, specifically cho clean-room RE practices.

**Compound learning** — Prompt 9 kết nối với compound engineering system mà KN đã setup trên Hetzner VPS.

**Defense-specific validation** — Prompt 8 map với MIL-STD testing và VN acceptance procedures thực tế.

---

Claude có thể giúp KN chi tiết hóa thêm phần nào? Một vài hướng có thể extend:

- **Template cụ thể** cho từng deliverable (RE Dossier, Function Structure Document, VDI 2225 Scorecard tùy chỉnh cho defense RE) dưới dạng file .md hoặc .docx
- **Specialized prompts** cho specific RE targets của KN: AK-630 fire control RE, VN-UWC controller RE, 30mm naval gun RE — mỗi cái có unique challenges riêng
- **Prompt cho mechatronic systems RE** theo VDI 2206 V-model — đặc biệt cho target drones và UAVs
- **Workflow automation** tích hợp với FreeCAD MCP + Airtable để tự động populate từ prompt outputs