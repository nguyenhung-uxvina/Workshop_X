---
project: IRONMESH — Workshop X
type: audit-trail-system-design
version: 1.0
created: 2026-02-22
status: draft
skill: S5-Ethical-Governance
reusable: true
applies_to: [ALL Workshop X defense AI products]
dependencies: [IRONMESH_S5_Ethical_Governance_Framework_v1.0.md, Defense_AI_QC_Gate.md]
---

# Audit Trail System Design — Workshop X Defense AI Products

> **Purpose:** Architecture for logging, retaining, and auditing all AI-generated outputs across Workshop X defense products. Enables compliance with Luật An Ninh Mạng 2018 (Art. 35 annual audit), customer trust requirements, and internal governance framework.
>
> **Design constraint:** All audit data must remain on-premises (Vietnamese military network boundary). No cloud storage. No remote access. Air-gapped operation is the baseline.

---

## 1. What Gets Logged

### 1.1 Audit Event Categories

Every AI action that produces output consumed by a human operator or feeds into a decision is an auditable event. Four categories:

| Category | Description | Retention | Examples |
|----------|------------|-----------|----------|
| **A — Decision** | AI output that a human acts upon | **Permanent** | Scoring result, target classification, training assessment, qualification recommendation |
| **B — Recommendation** | AI suggestion that human may or may not follow | **2 years** | Ballistic computation, calibration suggestion, training program recommendation |
| **C — Diagnostic** | AI self-monitoring and system health | **90 days** (rolling) | Self-test results, sensor health, inference latency, fault detection |
| **D — Process** | Engineering design AI outputs (Claude Code) | **Project lifetime** | Requirements docs, BOM, verification plans, design analyses |

### 1.2 Mandatory Fields Per Audit Record

Every audit record contains these fields:

```yaml
audit_record:
  # Identity
  record_id: "AUD-{product}-{YYYYMMDD}-{sequence}"   # Unique, sequential
  timestamp: "2026-02-22T14:30:00+07:00"              # UTC+7 (Vietnam)
  product: "VN-RANGE-001"                              # Product generating the output
  product_version: "1.2.3"                             # Software/firmware version
  deployment_id: "DEP-VNR-001"                         # Specific deployment instance

  # Event
  category: "A"                                        # A/B/C/D per §1.1
  event_type: "scoring_result"                         # Enumerated event type
  consequence_level: "MISSION-IMPACT"                  # LETHAL/SAFETY-CRITICAL/MISSION-IMPACT/ADMIN

  # AI Output
  ai_model: "hailo8_yolov8n_v2.1"                     # Model identifier + version
  ai_input_hash: "sha256:abc123..."                    # Hash of input data (not the data itself)
  ai_output_summary: "Lane 3: 8/10 hits, 42 points"   # Human-readable summary
  ai_confidence: 0.94                                  # Confidence score [0.0–1.0]
  evidence_tier: "L1"                                  # L1–L5 per QC Gate CHECK 6

  # Human Review
  hitl_level: "H3"                                     # H0–H3 per Governance Framework §3
  reviewed_by: null                                    # null if H3 auto; name if H1/H2
  review_decision: null                                # APPROVED/REJECTED/MODIFIED/PENDING
  review_timestamp: null                               # When human reviewed (if applicable)

  # Governance
  data_classification: "RESTRICTED"                    # RESTRICTED/INTERNAL/PUBLIC
  red_line_check: "PASS"                               # PASS or {which red line flagged}
  qc_gate_result: null                                 # QC Gate result if applicable

  # Integrity
  record_hash: "sha256:def456..."                      # Hash of this record (tamper detection)
  previous_hash: "sha256:ghi789..."                    # Hash chain (blockchain-lite)
```

### 1.3 What Does NOT Get Logged

- Raw sensor data (too large; stored separately in data lake with cross-reference)
- Intermediate inference states (internal model activations)
- Operator biometric data (not collected)
- Personal conversations or non-system interactions

---

## 2. Architecture

### 2.1 Deployment Topology

```
┌─────────────────────────────────────────────────────────┐
│  DEPLOYMENT SITE (e.g., Trường bắn Suối Hai)           │
│                                                         │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐           │
│  │ Sensor 1 │   │ Sensor 2 │   │ Sensor N │           │
│  │ (LOMAH)  │   │ (Camera) │   │ (Radar)  │           │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘           │
│       │               │               │                 │
│       └───────────────┼───────────────┘                 │
│                       ▼                                 │
│  ┌─────────────────────────────────────┐               │
│  │         EDGE SERVER (CORTEX)         │               │
│  │                                      │               │
│  │  ┌──────────┐  ┌─────────────────┐  │               │
│  │  │ AI Engine│  │  Audit Logger   │  │               │
│  │  │ (Hailo-8)│→→│  (local SQLite  │  │               │
│  │  │          │  │   + hash chain) │  │               │
│  │  └──────────┘  └────────┬────────┘  │               │
│  │                         │           │               │
│  │  ┌──────────────────────▼────────┐  │               │
│  │  │    Audit Database (SQLite)    │  │               │
│  │  │    /data/audit/audit.db       │  │               │
│  │  │    + /data/audit/chain.log    │  │               │
│  │  └──────────────────────┬────────┘  │               │
│  │                         │           │               │
│  │  ┌──────────────────────▼────────┐  │               │
│  │  │    Encrypted Backup (USB)     │  │  ← Monthly   │
│  │  │    AES-256 + signed manifest  │  │    export     │
│  │  └───────────────────────────────┘  │               │
│  └─────────────────────────────────────┘               │
│                                                         │
│  Air-gapped — NO internet connection                    │
└─────────────────────────────────────────────────────────┘
```

### 2.2 Storage Design

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Primary store | SQLite 3 | Single-file DB, zero config, battle-tested, no server process |
| Hash chain | Append-only text log | Tamper-evident chain — each record hashes previous |
| Backup medium | Encrypted USB drive | Air-gapped export for annual audit |
| Encryption at rest | AES-256 (SQLCipher) | Luật ANMN Art. 26 compliance |
| Time source | Local RTC + NTP (if LAN available) | Timestamp accuracy for audit chain |

### 2.3 Storage Sizing

| Product | Events/day (est.) | Record size | Daily storage | Annual storage |
|---------|-------------------|-------------|---------------|----------------|
| VN-RANGE-001 (10 lanes) | ~500 (scoring) + 50 (diagnostic) | ~500 bytes | ~275 KB | ~100 MB |
| V-SMASH (per unit) | ~20 (ballistic) + 10 (diagnostic) | ~500 bytes | ~15 KB | ~5 MB |
| CORTEX RANGE (analytics) | ~100 (reports) + 50 (diagnostic) | ~1 KB | ~150 KB | ~55 MB |
| VN-CUAS-001 | ~1000 (detections) + 100 (diagnostic) | ~500 bytes | ~550 KB | ~200 MB |

**Total per deployment site:** < 500 MB/year. A 128 GB drive holds 250+ years. Storage is NOT a constraint.

---

## 3. Hash Chain — Tamper Detection

### 3.1 Design

Each audit record is hashed (SHA-256) with the previous record's hash to form a chain:

```
Record 1: hash_1 = SHA256(record_1_data + "GENESIS")
Record 2: hash_2 = SHA256(record_2_data + hash_1)
Record 3: hash_3 = SHA256(record_3_data + hash_2)
...
Record N: hash_N = SHA256(record_N_data + hash_{N-1})
```

### 3.2 Tamper Detection Verification

To verify chain integrity:

```python
def verify_chain(records):
    """Verify audit trail hash chain integrity."""
    previous_hash = "GENESIS"
    for record in records:
        expected_hash = sha256(record.data + previous_hash)
        if expected_hash != record.record_hash:
            return FAIL, record.record_id  # Tampered record identified
        if record.previous_hash != previous_hash:
            return FAIL, record.record_id  # Chain link broken
        previous_hash = record.record_hash
    return PASS, len(records)
```

### 3.3 Chain Properties

| Property | Value |
|----------|-------|
| Tamper detection | Any modification to any record breaks the chain from that point forward |
| Insertion detection | Inserting a record requires re-hashing all subsequent records |
| Deletion detection | Deleting a record breaks the chain at the gap |
| Non-repudiation | Records cannot be denied — they exist in the chain with timestamp |
| Audit-friendly | Verifier tool runs in < 1 second for 1 year of records |

> **Limitation:** This is NOT a distributed blockchain. A single compromised edge server could re-compute the entire chain. Mitigation: monthly USB backup creates an independent copy that can be compared. If main chain and backup chain diverge → tamper detected.

---

## 4. Access Control

### 4.1 Roles

| Role | Permissions | Assigned To |
|------|------------|-------------|
| **SYSTEM** | Write audit records (automated) | AI Engine process only |
| **OPERATOR** | Read own session records | Range Officer, crew |
| **AUDITOR** | Read all records + run verification | Customer IT officer, KN (during maintenance) |
| **ADMIN** | Read all + export + manage retention | Customer unit commander or designated IT |
| **NONE** | No access | Workshop X (after handover) — NO remote access |

### 4.2 Access Enforcement

- RBAC enforced by SQLite user functions + application-layer authentication
- All access to audit DB is logged (who, when, what query)
- Export function requires ADMIN role + physical USB insertion + PIN entry
- No DELETE capability exists in the application layer — records are append-only
- Database file permissions: read-only for all except SYSTEM process

---

## 5. Audit Procedures

### 5.1 Automated Self-Audit (Daily)

Runs at 02:00 local time (system idle period):

| Check | Action if Fail |
|-------|---------------|
| Hash chain integrity verification | Alert: "AUDIT CHAIN INTEGRITY FAILURE" → SEV-2 incident |
| Record count vs expected (based on uptime) | Alert: "AUDIT RECORD GAP DETECTED" → SEV-4 |
| Storage space check (< 80% capacity) | Alert: "AUDIT STORAGE WARNING" → operator notification |
| Timestamp monotonicity (no backwards jumps) | Alert: "AUDIT TIMESTAMP ANOMALY" → SEV-3 |

### 5.2 Monthly Export

1. ADMIN inserts encrypted USB drive
2. System exports all records since last export + full chain for verification
3. System signs the export with deployment-specific key
4. ADMIN verifies export hash matches system display
5. USB stored in unit's secure document safe (per existing military SOP)
6. Export event logged in audit trail itself

### 5.3 Annual Security Audit (Luật ANMN Art. 35)

Scope per legal requirement:

| Audit Area | Audit Method | Evidence Source |
|------------|-------------|----------------|
| Data at rest encryption | Verify SQLCipher configuration | System config + test decryption |
| Access control | Review role assignments + access logs | Audit DB access log table |
| Data integrity | Full hash chain verification | Automated verifier tool |
| Data retention compliance | Check records exist per retention schedule | Record date range query |
| Network isolation | Verify no external connections | Network traffic capture (24h) |
| Incident log review | Review all SEV-1 through SEV-3 incidents | Governance Decision Log |

---

## 6. Engineering Design Audit Trail (Category D)

### 6.1 Scope

All AI-generated engineering documents (Claude Code outputs) used in Workshop X product development. This covers the design pipeline from Phase 0 through Phase 4.

### 6.2 What Gets Logged

| Event | Logged Data | Storage Location |
|-------|------------|------------------|
| AI generates design document | Document name, prompt hash, model version, QC Gate result | Git commit + progress.md |
| HITL gate review decision | Decision (A/B/C/D), reviewer, rationale | Gate review document + progress.md |
| QC Gate run | All 12 check results, gate decision | QC report appended to document or standalone |
| Requirement change | Requirement ID, old value, new value, reason | Requirements list version diff (git) |
| Design decision | Decision, alternatives considered, rationale | Design document + Governance Decision Log |

### 6.3 Implementation for Claude Code Workflow

The engineering audit trail is already partially implemented via:

1. **Git version control** — every file change tracked with commit hash
2. **progress.md** — session checkpoint with decisions and rationale
3. **Gate review documents** — formal HITL decisions recorded
4. **QC Gate (P44)** — structured review with 12 checks

**Gap to close:** Add explicit traceability fields to progress.md:

```markdown
### Audit Trail — Session [N]
| Record | AI Model | Output | QC Result | Reviewer | Decision |
|--------|----------|--------|-----------|----------|----------|
| D-001  | claude-opus-4-6 | V-SMASH-M_BOM_v1.0.md | P44: 10/12 PASS | KN | APPROVED |
| D-002  | claude-opus-4-6 | V-SMASH-M_Verification_Plan_v1.0.md | P44: pending | KN | PENDING |
```

---

## 7. Compliance Evidence Package

For annual audit or customer due diligence, Workshop X produces a compliance evidence package:

| Document | Source | Proves |
|----------|--------|--------|
| Audit chain verification report | Automated verifier tool | Data integrity (no tampering) |
| Access log summary | Audit DB | Access control enforcement |
| Incident log | Governance Decision Log | Incident response compliance |
| Retention compliance report | Record date range query | Data retention per policy |
| Network isolation evidence | 24h traffic capture | Air-gap enforcement |
| Encryption verification | SQLCipher config audit | Data at rest protection |
| HITL compliance summary | Gate review documents | Human oversight enforcement |
| Red line verification results | Phase 4 test reports | Ethical boundary enforcement |

> **Package format:** Printed + signed PDF on encrypted USB. Vietnamese military auditors typically require physical documents with stamps (con dấu) in addition to digital evidence.

---

## 8. Implementation Roadmap

| Phase | Deliverable | Timeline | Effort |
|-------|-------------|----------|--------|
| **V1 — Minimum** | SQLite audit logger + hash chain for VN-RANGE-001 | Deployment Phase B | 3 days dev |
| **V2 — RBAC** | Access control + automated daily self-audit | Deployment Phase C | 2 days dev |
| **V3 — Export** | Monthly USB export + annual audit package generator | Post-commissioning | 2 days dev |
| **V4 — Cross-product** | Generalize audit schema for V-SMASH, VN-CUAS | Product Phase 4 | 1 day per product |

### V1 Minimum Viable Audit Trail

For VN-RANGE-001 initial deployment, the MVP audit trail is:

1. SQLite DB with audit record schema per §1.2
2. SHA-256 hash chain per §3
3. Category A (scoring decisions) + Category C (diagnostics) logged
4. Append-only (no delete function in codebase)
5. Manual USB export (no RBAC yet — single-user system initially)

**This ships with VN-RANGE-001 Phase B.** RBAC and automated audit come in Phase C.

---

## 9. Relationship to Other S5 Documents

```
IRONMESH_S5_Ethical_Governance_Framework_v1.0.md
  │
  ├── Defines: accountability model, HITL levels, red lines, data classification
  │   → Audit Trail implements: logging these decisions + enabling verification
  │
  ├── Defines: consequence levels (LETHAL → ADMIN)
  │   → Audit Trail implements: consequence_level field in every record
  │
  └── Defines: incident response severity (SEV-1 through SEV-5)
      → Audit Trail implements: self-audit alerts trigger incident response

IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md
  │
  ├── Defines: Luật ANMN 2018 requirements (Art. 23, 26, 35)
  │   → Audit Trail implements: storage, encryption, annual audit procedure
  │
  └── Defines: NĐ 13/2023 personal data protection
      → Audit Trail implements: RBAC, audit logging, deletion capability

Defense_AI_QC_Gate.md (P44)
  │
  └── Defines: 12 checks for AI output quality
      → Audit Trail logs: QC Gate results per output (qc_gate_result field)
```

---

*System designed by: KN Nguyen | Next review: 2026-05-22*
*Implementation target: VN-RANGE-001 Phase B (V1 MVP)*
