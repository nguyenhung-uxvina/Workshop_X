# Governance Framework — IRONMESH RANGE (VN-RANGE-001)
## Ethical Governance, Audit Trail, and Accountability Architecture

**Version:** 1.0
**Created:** 2026-02-20
**Skill:** Skill 5 — Ethics & Conflict Mitigation (7/10 → 9/10)
**Gap Closed:** "formal governance framework document" (agentic_ai_skills_analysis.md §4.2, line 711)
**Integrates with:** `sdk_pipeline_VN-RANGE-001.py`, `defense_ai_qc_checklist.md`, `cortex_state_machine.md`

---

## 0. PURPOSE

This document formalizes the governance architecture for AI-assisted defense systems
in the IRONMESH RANGE product. It answers four questions the existing pipeline
artifacts leave open:

1. **Who** approved each AI-assisted decision, and **what evidence** did they review?
2. **Which standard** (TCVN / MIL-STD) applies to each AI output, and how is compliance verified?
3. **How** does the system present Rules of Engagement context to human decision-makers?
4. **What** is the accountability chain when something goes wrong?

**Design principle:** Governance is not a layer added on top — it is baked into the
pipeline architecture (automation gradient), the QC checklist (categories 3-6), and
the CORTEX FSM (HITL events). This document makes implicit governance *explicit and auditable*.

---

## 1. AUDIT TRAIL DESIGN

### 1.1 Problem Statement

The current `log_decision()` function in `sdk_pipeline_VN-RANGE-001.py` records:
- timestamp, phase, phase_name, consequence, automation_pct, decision

This is **necessary but insufficient** for defense procurement audit. Missing:
- **Who** made the decision (identity, role, authority level)
- **What evidence** was reviewed before deciding
- **Why** this decision and not another (rationale capture)
- **Integrity** — tamper-evidence for the log itself

### 1.2 Enriched Audit Record Schema

Every decision point (HITL checkpoint, QC gate, CORTEX HITL_PAUSE) produces a record:

```json
{
  "record_id": "AUD-2026-0220-001",
  "timestamp": "2026-02-20T14:32:07+07:00",
  "timezone": "Asia/Ho_Chi_Minh",

  "context": {
    "system": "VN-RANGE-001",
    "phase": 2,
    "phase_name": "Architecture Review",
    "consequence_level": "MEDIUM",
    "automation_pct": 70
  },

  "actor": {
    "name": "<full name>",
    "role": "RO | RSO | KN | CO",
    "authority_level": "OPERATIONAL | SAFETY | COMMAND",
    "unit": "<military unit designation>"
  },

  "evidence_reviewed": [
    {"file": "architecture_review_VN-RANGE-001.md", "hash_sha256": "<hex>"},
    {"file": "requirements_VN-RANGE-001.md", "hash_sha256": "<hex>"}
  ],

  "qc_result": {
    "verdict": "PASS | WARN | FAIL",
    "detail": "Architecture readiness score 82/100",
    "validator_version": "validate_defense_ai_output.py v1.0"
  },

  "decision": {
    "action": "APPROVED | REVISE | PAUSED | CANCELLED",
    "rationale": "<free text: why this decision>",
    "conditions": "<any conditions attached to approval>",
    "dissent": "<any dissenting opinion recorded, or null>"
  },

  "integrity": {
    "prior_record_hash": "<sha256 of previous record — chain>",
    "signature_method": "HMAC-SHA256 | manual_sign"
  }
}
```

### 1.3 Audit Log Integrity

**Hash chain:** Each record includes `prior_record_hash` = SHA-256 of the preceding record.
This creates a tamper-evident chain (if any record is modified, all subsequent hashes break).

```
Record 1 → hash(R1) → Record 2 [prior_hash = hash(R1)] → hash(R2) → Record 3 ...
```

**Storage:**
- Primary: `pipeline_audit_log.jsonl` (local, enriched format)
- Backup: Copy to `vault/projects/VN-RANGE-001/audit/` after each session
- Retention: Minimum 10 years (Vietnamese MoD procurement record requirement)

**Verification:** At any point, replay the hash chain to confirm no records were altered:
```bash
python validate_audit_chain.py pipeline_audit_log.jsonl
# Outputs: CHAIN VALID (N records, first=<date>, last=<date>)
# Or:      CHAIN BROKEN at record <id> — investigate
```

### 1.4 Decision Points Requiring Audit Records

| Decision Point | Source | Mandatory Record? |
|----------------|--------|-------------------|
| Pipeline Phase gate (APPROVE/REVISE/CANCEL) | `sdk_pipeline_VN-RANGE-001.py` HITL checkpoint | **YES** — always |
| QC FAIL override (if ever permitted) | Human overrides QC validator | **YES** — with rationale + CO countersign |
| CORTEX HITL_PAUSE resolution | `cortex_state_machine.md` S4 → E_RO_APPROVE/REJECT | **YES** — RO identity + evidence |
| CORTEX SAFETY_FAULT (E_RSO_HALT) | `cortex_state_machine.md` S5.3 | **YES** — RSO identity + incident report |
| Scoring dispute override | RO overrides AI scoring | **YES** — original score + override + reason |
| Qualification certificate issuance | CORTEX S3.7 (E_CERT_DONE) | **YES** — RO sign-off + full session log reference |
| System configuration change | Sensor threshold / calibration update | **YES** — KN identity + before/after values |

---

## 2. TCVN / MIL-STD COMPLIANCE MAPPING

### 2.1 Problem Statement

The QC checklist (§4) lists TCVN/MIL-STD checks as flat items. What's missing:
- Which **specific AI output** triggers which standard?
- Who has **authority** to certify compliance?
- What is the **verification method** (test, inspection, analysis, demonstration)?

### 2.2 Compliance Matrix

Each AI-generated or AI-assisted output is mapped to applicable standards:

| AI Output | Pipeline Phase | Applicable Standard | Verification Method | Authority to Certify | Evidence Required |
|-----------|---------------|--------------------|--------------------|---------------------|-------------------|
| Requirements specification | Phase 1 | TCVN doc format + MIL-STD-961 (spec format) | Inspection (human review) | KN (author) + RO (reviewer) | Signed requirements doc |
| Environmental ratings (IP/temp/humidity) | Phase 2 | MIL-STD-810G Methods 506.6, 509.7, 514.8 | Analysis (AI) + Test (physical) | KN (analysis) + Test Lab (physical) | Test report reference |
| Corrosion protection design | Phase 3 | MIL-STD-810G 509.7 + TCVN 7699-2-52 (salt mist) | Analysis (AI) + Test | KN (design) + Test Lab | Salt spray test report |
| Thermal management design | Phase 3 | MIL-STD-810G 501.7/502.7 + TCVN 7699-2-2 | Analysis (AI) + Test | KN (design) + Test Lab | Thermal cycling report |
| DfX gate review scores | Phase 4 | VDI 2225 (evaluation) + TCVN quality management | Analysis (AI + human) | KN + Domain Expert | Signed gate review doc |
| Safety fan calculations | Phase 5 | Range safety SOP + MIL-STD-882E (sys safety) | Analysis + Demonstration | RSO (sole authority) | Range safety certificate |
| Sensor calibration data | Runtime | TCVN metrological standards + MIL-STD-45662 (cal) | Test (calibration run) | KN (execution) + RO (verification) | Calibration certificate |
| Acoustic scoring results | Runtime | TCVN range scoring + weapon qualification SOP | Test + AI analysis | RO (authority) + CORTEX (assist) | Session log + cert |
| Visual scoring results | Runtime | TCVN range scoring + weapon qualification SOP | Test + AI analysis | RO (authority) + CORTEX (assist) | Session log + cert |
| Qualification certificate | Runtime | Weapon qualification SOP (unit-specific) | Demonstration (live fire) | CO (commanding officer) | Full audit trail |
| Training analytics report | Post-session | TCVN training records format | Analysis (AI-generated) | VN-TRN + RO (sign-off) | Archived session data |

### 2.3 AI-Specific Compliance Rules

**Rule 1: AI output is NEVER the compliance evidence by itself.**
Every AI output that references a standard must be paired with:
- The standard clause number (not just the standard name)
- A human-verified mapping (AI may cite wrong clause)
- Physical test data where verification method = Test

**Rule 2: Standard version control.**
- TCVN standards are updated periodically — system must track which version was applied
- If TCVN standard is updated mid-project: re-validate all affected AI outputs
- Pipeline stores `standard_version` in audit record

**Rule 3: Bilingual requirement.**
- All compliance documentation: Vietnamese (primary) + English (reference)
- AI generates English draft → human translates safety-critical content to Vietnamese
- Vietnamese version is the legally binding document

### 2.4 Non-Compliance Escalation Path

```
AI output fails TCVN/MIL-STD check
    │
    ├── Category 1-2 (Physics/Data): QC validator catches → FAIL → blocks APPROVE
    │       Action: REVISE phase, AI re-generates with corrected constraints
    │
    ├── Category 3 (Safety): Human-only review catches
    │       Action: RSO notified → HALT if safety-critical → incident report
    │
    ├── Category 4 (TCVN/MIL-STD): Human review catches
    │       Action: Document non-compliance → assess impact → remediation plan
    │       IF critical non-compliance: escalate to CO
    │
    └── Undiscovered (worst case): Non-compliant output reaches deployment
            Action: Mandatory incident review → root cause analysis →
            update QC checklist with new check → update validator if automatable
```

---

## 3. RULES OF ENGAGEMENT (ROE) INTERPRETATION SYSTEM

### 3.1 Problem Statement

From `agentic_ai_skills_analysis.md` §1.2 (Scenario A):
> "AI cannot interpret Rules of Engagement contextually."

The system must present ROE-relevant context to human decision-makers **without**
making ROE decisions. AI's role is **information assembly**, not **judgment**.

### 3.2 ROE Decision Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ROE INTERPRETATION BOUNDARY                       │
│                                                                      │
│   AI SIDE (assembly only)            │  HUMAN SIDE (judgment only)   │
│                                      │                               │
│   VN-CAM: target classification      │  Target identification        │
│   VN-SMASH: firing solution          │  Engagement authorization     │
│   VN-TRN: readiness assessment       │  Proportionality assessment   │
│   CORTEX: data fusion + flags        │  Legal authority confirmation │
│                                      │                               │
│   ───────── NEVER CROSSES ──────── → │                               │
│   AI NEVER recommends "engage"       │  Human ALWAYS decides action  │
│   AI NEVER interprets ROE clauses    │  Human ALWAYS cites ROE §     │
│   AI NEVER assesses proportionality  │  Human ALWAYS records reason  │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.3 Context Presentation Format

When CORTEX or the pipeline encounters a ROE-relevant situation, it presents a
**structured context card** — not a recommendation:

```
╔══════════════════════════════════════════════════════════════╗
║  ROE CONTEXT CARD — Requires Human Decision                  ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  SITUATION:                                                  ║
║    [Factual description of what sensors detected]            ║
║    Source: VN-LOMAH acoustic + VN-CAM visual                 ║
║    Confidence: [X]% acoustic, [Y]% visual                   ║
║    Timestamp: [ISO-8601 +07:00]                              ║
║                                                              ║
║  ENVIRONMENT:                                                ║
║    Location: [grid ref or range designation]                 ║
║    Sea state: [N]  |  Visibility: [km]  |  Wind: [m/s dir]  ║
║    Nearby: [any detected objects/vessels/aircraft]            ║
║                                                              ║
║  AI FLAGS (informational only):                              ║
║    ⚠ [list any anomalies, confidence drops, conflicts]       ║
║    ⚠ [sensor disagreements]                                  ║
║    ⚠ [out-of-distribution data warnings]                     ║
║                                                              ║
║  DOES NOT CONTAIN:                                           ║
║    ✗ No engagement recommendation                            ║
║    ✗ No ROE clause interpretation                            ║
║    ✗ No threat classification                                ║
║    ✗ No proportionality assessment                           ║
║                                                              ║
║  REQUIRES:                                                   ║
║    → Human decision by: [RSO | RO | CO — per authority §4]  ║
║    → Cite applicable ROE section in decision record          ║
║    → Decision logged to audit trail                          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

### 3.4 ROE Conflict Resolution Protocol

When AI outputs conflict with ROE context (detected by human, not by AI):

| Conflict Type | Example | Resolution | Authority | Audit |
|---------------|---------|------------|-----------|-------|
| AI optimizes wrong metric | VN-TRN: "increase tempo" but barrel life exceeded | Human overrides AI → manual limit applied | RO | Override record + rationale |
| AI ignores exclusion zone | Firing solution in civilian shipping lane | HALT all AI recommendations → manual mode | RSO | Incident report + root cause |
| Sensor data conflicts | LOMAH: 7 hits, CAM: 5 hits (Scenario C) | Human resolves using environmental knowledge | RO | Override record with physics explanation |
| AI confidence miscalibrated | 94% confidence on out-of-distribution data | Reduce trust, revert to manual scoring | RO + KN | Calibration note + retraining flag |
| AI proposes illegal action | Engagement violates ROE §4.2 | Reject entirely — no partial acceptance | CO | Full incident record, escalate to legal |

### 3.5 Training Range vs. Combat System Boundary

**IRONMESH RANGE is a training system, not a combat engagement system.**

This distinction is critical for governance:

| Aspect | Training Range (VN-RANGE-001) | Combat System (RCWS-127-NAVAL) |
|--------|-------------------------------|-------------------------------|
| ROE applicability | Range safety SOP — controls scoring and safety | Full ROE — controls engagement authorization |
| AI decision scope | Scoring, analytics, qualification threshold | Target classification, firing solution |
| Lethal decision | No (scoring only) | Yes (fire/no-fire) |
| Minimum HITL | RO approval for qualification cert | CO approval for engagement + 2-person rule |
| Governance tier | Tier 2 (this document) | Tier 1 (requires separate RCWS governance doc) |

**Tier structure prevents governance creep:**
- Tier 1: Lethal systems — maximum governance, minimum automation (0-20%)
- Tier 2: Safety-critical training — moderate governance, graduated automation (0-90%)
- Tier 3: Support tools (logistics, documentation) — standard governance, high automation (80-100%)

VN-RANGE-001 is **Tier 2**. If any IRONMESH component is integrated into a
Tier 1 system (e.g., VN-SMASH fire control), the higher governance tier applies
to all shared components.

---

## 4. ACCOUNTABILITY CHAIN

### 4.1 Problem Statement

When the CORTEX system produces an incorrect scoring result, or when a safety
incident occurs during AI-assisted training, who is accountable?

**Principle: AI is a tool, not an actor.** Accountability always rests with a human.

### 4.2 Accountability Matrix

| Decision Type | Primary Accountable | Secondary | AI Role | Can AI Override Human? |
|---------------|--------------------|-----------|---------|-----------------------|
| **Range safety** (HALT, resume, clear) | RSO | CO (if RSO incapacitated) | Sensor data only | **NEVER** |
| **Scoring** (hit/miss/score) | RO | RSO (dispute escalation) | Automated scoring + confidence | **NEVER** — RO can always override AI score |
| **Qualification** (pass/fail) | RO | CO (certification authority) | Analytics + threshold check | **NEVER** — RO signs cert, not AI |
| **System config** (thresholds, cal) | KN | RO (approval for safety-affecting changes) | Suggest optimal settings | **NEVER** — KN applies, RO approves |
| **Pipeline phase gate** | KN (Phase 1-3) | RO (Phase 4-5) | Draft outputs + QC validation | **NEVER** — human approves gate |
| **Equipment safety** (barrel life, ammo) | RSO | Armorer (technical) | Track round count, flag limits | **NEVER** — RSO makes go/no-go call |
| **Incident response** | RSO (immediate) | CO (investigation) | Log preservation only | **NEVER** — RSO has absolute authority |

### 4.3 Authority Hierarchy

```
AUTHORITY CHAIN — VN-RANGE-001 OPERATIONS
══════════════════════════════════════════════════════════════

    ┌──────────────────────────┐
    │  Commanding Officer (CO) │  Authority: Certification, incident investigation,
    │  (Highest Authority)     │  policy override, legal responsibility
    └────────────┬─────────────┘
                 │
    ┌────────────▼─────────────┐
    │  Range Safety Officer    │  Authority: HALT (overrides all), resume, safety
    │  (RSO)                   │  clearance, exclusion zone enforcement
    │  VETO POWER: absolute    │  Can halt system from ANY state (CORTEX E_RSO_HALT)
    └────────────┬─────────────┘
                 │
    ┌────────────▼─────────────┐
    │  Range Officer (RO)      │  Authority: Scoring decisions, session management,
    │                          │  qualification sign-off, HITL approvals
    └────────────┬─────────────┘
                 │
    ┌────────────▼─────────────┐
    │  System Operator (KN)    │  Authority: System configuration, pipeline execution,
    │                          │  technical maintenance, calibration
    └────────────┬─────────────┘
                 │
    ┌────────────▼─────────────┐
    │  CORTEX / AI System      │  Authority: NONE — tool only
    │  (No decision authority) │  Role: data processing, scoring assist, logging
    └──────────────────────────┘
```

### 4.4 Escalation Rules

**Rule 1: Authority flows up, never down.**
- KN cannot override RO decision
- RO cannot override RSO safety decision
- RSO cannot override CO policy decision
- CO cannot override legal/regulatory requirements

**Rule 2: AI cannot escalate past its handler.**
- CORTEX flags anomaly → presented to RO (not directly to CO)
- RO decides whether to escalate to RSO/CO
- Exception: E_SAFETY (safety fan violation) → direct HALT, RSO notified automatically

**Rule 3: Silence is not approval.**
- If a HITL checkpoint times out without response → system PAUSES (not proceeds)
- CORTEX FSM: no transition exists from S4 (HITL_PAUSE) without an explicit human event
- Pipeline: `input()` blocks indefinitely — no timeout-to-approve

**Rule 4: Delegation of authority.**
- RO may delegate scoring authority to KN for routine sessions (documented in session log)
- RSO may NOT delegate safety authority — RSO must be physically present
- CO may delegate certification signing to RO for routine qualifications (standing order required)
- All delegations recorded in audit trail with delegation order reference

### 4.5 Incident Accountability Protocol

When something goes wrong:

```
INCIDENT DETECTED
    │
    ├── IMMEDIATE (0-60 seconds)
    │   ├── RSO: E_RSO_HALT → system stops
    │   ├── CORTEX: preserves all logs, freezes session state
    │   └── KN: secures equipment, prevents data loss
    │
    ├── SHORT-TERM (1-60 minutes)
    │   ├── RSO: initial assessment, personnel safety confirmed
    │   ├── RO: session data preserved, witnesses identified
    │   └── KN: export full audit trail + CORTEX state dump
    │
    ├── INVESTIGATION (1-7 days)
    │   ├── CO: convenes investigation board
    │   ├── Evidence: audit trail (hash-chain verified), sensor logs, video
    │   ├── Root cause: was AI output a contributing factor?
    │   │   ├── YES → which QC check should have caught it?
    │   │   │        → update defense_ai_qc_checklist.md
    │   │   │        → update validate_defense_ai_output.py if automatable
    │   │   └── NO  → human error or equipment failure → separate process
    │   └── Report: formal incident report filed per MoD requirements
    │
    └── REMEDIATION (1-30 days)
        ├── QC checklist updated with new check
        ├── Validator updated if root cause was automatable
        ├── Training updated if human error
        ├── Equipment repaired/replaced if hardware failure
        └── Governance framework updated if process gap identified
```

---

## 5. INTEGRATION MAP

### 5.1 How This Framework Connects to Existing Artifacts

```
governance_framework_VN-RANGE-001.md (THIS DOCUMENT)
    │
    ├── §1 Audit Trail ←→ sdk_pipeline_VN-RANGE-001.py log_decision()
    │   Enhancement: enrich log_decision() to emit §1.2 schema
    │
    ├── §2 TCVN Mapping ←→ defense_ai_qc_checklist.md Category 4
    │   Enhancement: QC Cat 4 checks now reference §2.2 compliance matrix
    │
    ├── §3 ROE System ←→ defense_ai_qc_checklist.md Category 5
    │   Enhancement: ROE context card format replaces flat checklist
    │
    ├── §4 Accountability ←→ cortex_state_machine.md §3.3 HITL Events
    │   Enhancement: each HITL event now mapped to authority level
    │
    └── SDK Pipeline Integration:
        ├── Phase 1-3: KN authority (operational)
        ├── Phase 4: RO authority (gate review)
        ├── Phase 5: RSO authority (safety validation)
        └── All phases: CO authority for policy exceptions
```

### 5.2 Implementation Priority

| Enhancement | Effort | Impact | Priority |
|-------------|--------|--------|----------|
| Enrich `log_decision()` with §1.2 schema fields | Low | High — enables audit | **P1** |
| Add `validate_audit_chain.py` script | Low | Medium — integrity check | P2 |
| ROE context card template in CORTEX | Medium | High — operational safety | **P1** |
| TCVN compliance matrix in pipeline prompts | Low | Medium — documentation | P2 |
| Tier 1 governance doc for RCWS-127-NAVAL | High | Critical — but separate product | P3 (future) |

---

## 6. GOVERNANCE ANTI-PATTERNS

Lessons learned and patterns to avoid (to be updated as system matures):

| Anti-Pattern | Why It's Wrong | Correct Pattern |
|--------------|---------------|-----------------|
| "AI recommended it" as justification | AI has no authority — human must own the decision | Human cites evidence + rationale in audit record |
| Rubber-stamping HITL checkpoints | Defeats purpose of HITL — becomes theatre | Require specific rationale text, reject empty approvals |
| Skipping QC on "routine" phases | Routine is where complacency breeds errors | QC runs on every phase, no exceptions |
| Timeout-to-approve | Absence of rejection ≠ approval | Timeout = PAUSE, not PROCEED |
| Single point of accountability | RSO sick = no safety authority | Delegation rules + backup designation required |
| Governance-as-afterthought | Adding governance post-deployment = retrofitting seatbelts | Governance baked into pipeline from Phase 1 (this document) |
| Over-governing low-consequence steps | Requiring CO sign-off on requirements draft = bottleneck | Match governance tier to consequence level (automation gradient) |

---

## 7. VERSIONING AND REVIEW

This governance framework is a **living document**. Review triggers:

| Trigger | Action | Authority |
|---------|--------|-----------|
| Incident involving AI output | Review §1-4, update as needed | CO-directed |
| TCVN standard update | Review §2 compliance matrix | KN identifies, RO approves |
| New product integrated into IRONMESH | Assess governance tier (§3.5) | KN proposes, CO decides |
| Quarterly review | Full framework review | KN + RO |
| QC checklist update | Verify §2 mappings still current | KN |
| Pipeline architecture change | Verify §1 audit points still current | KN |

**Version history:**
- v1.0 (2026-02-20): Initial governance framework — audit trail, TCVN mapping, ROE system, accountability chain
