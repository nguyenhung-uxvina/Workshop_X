---
skill: S3 — Critical Reasoning / QC × S5 — Ethical Governance
phase: Cross-cutting — runs on ALL AI-generated outputs before human review
framework: Defense AI QC — 10 automated checks (physics / safety / compliance / context)
slash_commands: /qc
type: prompt-library
version: 1.2
created: 2026-02-20
updated: 2026-02-20
status: v1.2 — 12 checks + 6 sub-checks — estimated catch rate ~85%
target_impact: Reduce S3 manual QC from 5h/week → 2h/week (review only flagged items)
---

# Defense AI QC Gate

> **Why this exists:** AI produces confident-sounding output. In defense systems, "looks correct"
> and "IS correct" have different consequences. A fire control computer with a mathematically
> correct but tactically wrong solution is MORE dangerous than producing no solution, because
> operators trust the confidence.
>
> **This gate runs BEFORE human review** — it pre-screens AI outputs for the 10 most common
> failure modes. Human review focuses on flagged items only, not the full document.
>
> **Ship at 60% — iterate on misses.** A gate that catches 7/10 issues + human reviews flags
> is strictly better than no gate + human reviews everything.

---

## PROMPT INDEX

| # | Command | Name | Use When |
|---|---------|------|----------|
| P44 | `/qc` | Defense AI QC Gate | Before any AI-generated output is acted upon |

---

### P44 — Defense AI QC Gate (`/qc`)

**Use when:** Any AI-generated output for a Workshop X product is about to be acted upon:
requirements spec, design document, technical analysis, firing solution, architecture decision,
system recommendation, training report, scoring output, deployment plan.

**What it does NOT check:** Creativity, strategy, business decisions — those require human judgment.
It checks for the 10 recurring failure modes that AI gets wrong in defense context.

```
FILL GUIDE:
  {{product_name}}:     Product or system name (e.g. V-SMASH-L, VN-RANGE-001, RCWS-127-NAVAL)
  {{output_type}}:      What kind of AI output: requirements / design / analysis /
                        recommendation / firing_solution / architecture / training_report / other
  {{ai_output}}:        Paste the AI-generated content to be reviewed (or describe it)
  {{domain}}:           One of: engagement / training / surveillance / maritime / logistics
  {{phase}}:            Design phase: ODI / Phase1 / Phase2 / Phase3 / Phase4 / deployment / operations

TASK: Run Defense AI QC Gate on the provided AI output.
  Execute all 10 checks. Score each PASS / FLAG / FAIL.
  Return: structured QC report with gate decision and specific findings.

--- 10 CHECKS ---

CHECK 1: PHYSICS PLAUSIBILITY
  Extract all numerical claims: range, velocity, energy, mass, power, accuracy, timing.
  For each: is it physically possible for the stated system in the stated conditions?
  Reference table:
    12.7mm HMG effective range: ≤2,000m (max range ≠ effective range)
    7.62mm effective range: ≤800m
    Quadcopter FPV drone speed: 15–25 m/s typical, 40+ m/s racing
    Small UAS detection (naked eye): ≤100m typical
    AI inference latency (Hailo-8 class): 5–50ms per frame
    Battery life claims: verify against stated power draw
  PASS:  All numbers within physical limits for the specified system and conditions.
  FLAG:  Number near edge of physical limit, or conditional on unstated assumptions.
  FAIL:  Physically impossible claim (e.g., claimed range > physical maximum for that round).

CHECK 2: HITL SAFETY ENFORCEMENT
  For any AI output involving an AI system that can influence a physical action:
  Question: Does any recommendation allow AI to autonomously SELECT AND ENGAGE a target
  without a human pressing a trigger or giving an explicit enable command?
  Test: "Must a human press the trigger or issue explicit enable?"
    YES → PASS. NO → FAIL.
  Sub-checks:
    - Are HITL checkpoints architecturally enforced (not just mentioned)?
    - Is the autonomous zone explicitly bounded (what AI can do WITHOUT human)?
    - Is a safety interlock / dead-man switch defined?
    - Is there an emergency abort path that bypasses AI?
  PASS:  HITL architecturally enforced. AI gates timing only; human initiates action.
  FLAG:  HITL mentioned but mechanism not specified; or boundary of autonomous zone unclear.
  FAIL:  AI can select and engage target without explicit human trigger press.
         Any claim of autonomous engagement capability without HITL architecture.

CHECK 3: TCVN / REGULATORY COMPLIANCE
  For the stated domain and system type, which Vietnamese standards apply?
  Common applicable standards:
    Weapons/training systems: TCVN ranges + MIL-STD equivalents + MoD procurement specs
    Electronic systems: TCVN 7699 series (EMC/EMI), IEC equivalents
    Environmental: TCVN 7699-2-1 (thermal), TCVN 7699-2-6 (vibration)
    Optics/sighting: MIL-STD-810 equivalent conditions
    Software safety: IEC 61508 risk assessment (if AI governs physical action)
  Check: Are relevant standards cited with specific clauses?
  PASS:  Relevant TCVN/MIL-STD standards cited with clause references for safety parameters.
  FLAG:  Standards mentioned by category but no specific clause; or partial coverage.
  FAIL:  Safety-critical parameters with NO standards reference.
         Any "comply with applicable standards" without naming them.

CHECK 4: ROE CONTEXT BOUNDARY
  Does the AI output include any target identification, threat classification,
  or engagement authorization that requires Rules of Engagement interpretation?
  ROE is ALWAYS a human judgment — AI can surface information, never make ROE decisions.
  Sub-checks:
    - Does the output classify a target as hostile/neutral/friendly?
    - Does it recommend engagement with a specific target?
    - Is IFF (Identification Friend or Foe) verification required before any action?
    - Are civilian proximity / collateral damage considerations addressed?
  PASS:  AI provides information only. ROE interpretation explicitly routed to human.
  FLAG:  Target classified as "threat" without explicit IFF check or ROE reference.
         Engagement recommended without noting ROE authority requirement.
  FAIL:  AI autonomously authorizes engagement without ROE check.
         Output omits IFF requirement for any potentially-lethal recommendation.

CHECK 5: ENVIRONMENTAL QUALIFICATION
  Are the performance claims qualified to an operating environment?
  Defense systems operate in conditions far outside consumer product specs.
  Required qualifications to check:
    Temperature: tropical (VN: 25–45°C, 80–100% RH) + cold storage
    Dust/sand: IP rating specified? (IP54 minimum for field; IP65 for exposed)
    Vibration: transport and operational vibration profiles
    EMI/EMC: radio frequency environment (other radios, radar, jammers)
    Maritime (if applicable): salt spray, wave shock, corrosion
    Night operations: performance at 0% illumination specified?
  PASS:  Operating envelope explicitly defined with performance limits per condition.
  FLAG:  Performance claimed without environmental qualification ("works in all conditions").
         IP rating not specified for field-deployed hardware.
  FAIL:  Safety-critical performance claimed as environment-independent.
         No environmental spec for a system intended for field/maritime deployment.

CHECK 6: AI CONFIDENCE CALIBRATION
  AI confidence scores must be matched to evidence quality. High confidence
  from low-quality evidence is the most dangerous failure mode in defense AI.
  Evidence quality tiers (from ODI prompt library):
    L1: Direct field observation / interview — justifies high confidence
    L2: Field exercise reports / AAR documents — justifies medium-high confidence
    L3: Doctrine, standards, manuals — justifies medium confidence
    L4: Competitive product analysis — justifies medium-low confidence
    L5: [ASSUMPTION] — justifies LOW confidence only
  Check: For safety-critical claims, what evidence level supports the confidence score?
  PASS:  Confidence scores matched to evidence quality. Safety claims use L1/L2 evidence.
         [ASSUMPTION] items explicitly flagged with validation plan.
  FLAG:  High confidence (>90%) based on L3/L4 evidence only.
         Confidence stated without evidence basis.
  FAIL:  Safety-critical parameter with [ASSUMPTION] evidence and NO validation plan.
         Confidence score presented without disclosure of training data relevance.

CHECK 7: FALLBACK PROTOCOL COMPLETENESS
  Every automated step in a defense system needs a defined fallback.
  The rule: if no fallback defined → do NOT automate that step.
  Check for each automated component in the output:
    - What happens if this AI component fails or times out?
    - Is there a manual fallback mode?
    - Is the fallback path tested (or at minimum defined)?
    - Is degraded-mode performance specified?
  Sub-checks (added v1.1):
    - Is total agent failure mode defined? Does the operator receive a fault signal
      rather than silent degradation? (Catches: IFF-fails-GREEN pattern)
    - For real-time systems: are energy, thermal, and time limits defined per state?
    - Is the feedback mechanism specified (file, format, reader), not just the feedback intent?
      (Catches: "Master consumes D-M-I-R output" without defining the mechanism)
  Sub-check (added v1.2):
    - For systems that claim to hold persistent state: is the state persistence mechanism
      defined? (file format, reader, session-opening protocol)
      PASS: State files named, formats defined, session-opening protocol specified.
      FLAG: State persistence described as intent but mechanism not defined.
      FAIL: State claimed as persistent but exists ONLY within a single AI session with
            no externalization and no session-opening checklist.
  PASS:  Every automated step has explicit fallback. Degraded-mode performance defined.
  FLAG:  Fallback mentioned ("manual override available") but not specified (how? who? when?).
  FAIL:  Automated step with NO fallback defined.
         Single-point failure in safety-critical path with no redundancy.

CHECK 8: DETECTION SYSTEM DUAL-ERROR RATE
  For any detection/classification/scoring AI:
  AI detection systems have TWO error directions, both matter:
    False Positive (Type I): AI says threat/hit when there isn't one
      → wastes resources, may cause unintended engagement, erodes trust
    False Negative (Type II): AI misses a real threat/hit
      → safety failure, operational failure
  In defense: for threat detection, False Negatives are usually more critical.
  For qualification scoring, False Positives are more critical (inflates pass rates).
  Check: Are BOTH false positive AND false negative rates specified?
  PASS:  Both rates specified, appropriate to the system's risk profile.
         Trade-off rationale documented (why this FP/FN balance was chosen).
  FLAG:  Only one error direction specified. Or rates claimed without test conditions.
  FAIL:  Detection AI with NO error rate specification.
         Safety-critical detection with only accuracy % (hides error direction asymmetry).

CHECK 9: POWER AND LOGISTICS BUDGET
  Field-deployed defense systems are limited by supply chain, not lab conditions.
  Check:
    Battery life: claimed duration vs power draw at peak load (not idle)
    Operating temperature effect on battery (Li-ion loses 20–40% capacity at 0°C)
    Resupply interval: can the unit operate between realistic resupply cycles?
    Spare parts: are critical failure-prone components identified + sourced locally?
    Calibration interval: does the system require periodic calibration, and who does it?
  PASS:  Power budget calculated at peak load. Resupply/maintenance cycle realistic for VN field ops.
  FLAG:  Battery life stated at typical load but peak load not addressed.
         Calibration requirement present but interval/responsibility not specified.
  FAIL:  Power claims based on lab conditions only with no field-degradation factor.
         System requires specialized maintenance with no identified VN capability.

CHECK 10: LOCAL CONTENT AND SUPPLY CHAIN RISK

  Vietnamese defense procurement requirement: ≥60% local content by value.
  Supply chain resilience: avoid single-source critical components (especially import-only).
  Check:
    - Is local content % estimated?
    - Are import-only components identified?
    - Are there single-source components with no local alternative?
    - Are critical components subject to export control (ITAR, EAR, Wassenaar)?
  PASS:  Local content ≥60% by value. No unmitigated single-source critical components.
  FLAG:  Local content unestimated; or 50–60% range (borderline).
         Import component identified but no alternative sourcing plan.
  FAIL:  Local content <60% by value with no mitigation plan.
         ITAR/export-controlled component with no license/alternative identified.

CHECK 11: ACCOUNTABILITY INDEPENDENCE
  Is any single role both the deliverer AND the sole judge of acceptance for a gate?
  Conflicts of interest in accountability chains produce systematic pass bias —
  especially in Vietnamese military/procurement contexts where social dynamics
  override technical criteria (vendor grading vendor's own output = always passes).
  Check for each HITL checkpoint:
    - Is the person approving the output independent from the person who produced it?
    - If the same person both delivers and evaluates: are criteria objective and auditable?
    - Is the acceptance record signed by both parties (deliverer + receiver)?
    - Can the acceptance record be reviewed by a third party post-facto?
  PASS:  Independent evaluator, or objective/auditable criteria with dual signature.
  FLAG:  Same role delivers and evaluates with evaluative (not objective) criteria.
  FAIL:  Single person delivers, evaluates, and signs without auditable criteria.
         Vendor-only acceptance of safety-critical delivery.

CHECK 12: NO PLACEHOLDER CONTENT
  AI-generated documents frequently produce plausible structure with empty content —
  referenced lists, checklists, and criteria that are named but not specified.
  This is the most common AI failure mode in engineering documents.
  Placeholder examples:
    "12-item checklist" (items not listed)
    "relevant standards" (standards not named)
    "appropriate threshold" (value not stated)
    "standard fallback protocol" (protocol not described)
    "as required by regulation" (regulation not cited)
  Check every reference to a list, checklist, standard, threshold, or protocol:
    Is the content explicitly stated, or is it referenced without content?
  Sub-check (added v1.2):
    For state machines: are ALL expected operational states defined?
    Check for missing states that arise in realistic operation:
      - Pause/suspend state (mid-process interruption due to resource constraints)
      - Error/fault state (unexpected component failure)
      - Degraded mode state (reduced capability operation)
    PASS: Common operational interruptions have named states and defined behaviors.
    FLAG: One or more realistic states missing but low-probability.
    FAIL: Pause/interrupt state missing from a state machine where resource
          constraints or external events would predictably cause mid-process stops.
  PASS:  All referenced items explicitly enumerated. No "see relevant standards."
  FLAG:  1–3 placeholders; low-severity (administrative items).
  FAIL:  Placeholder in safety-critical path (FAT checklist, calibration procedure,
         acceptance criteria for a gate, threshold value for a detection system).

--- OUTPUT FORMAT ---

After running all 10 checks, produce this report:

═══════════════════════════════════════════════════════════════
DEFENSE AI QC GATE — REPORT v1.0
═══════════════════════════════════════════════════════════════
Product:       {{product_name}}
Input type:    {{output_type}}
Domain:        {{domain}}
Phase:         {{phase}}
Review date:   {{date}}
───────────────────────────────────────────────────────────────
CHECK RESULTS:
  01 Physics Plausibility ........... [PASS / FLAG / FAIL]
  02 HITL Safety Enforcement ........ [PASS / FLAG / FAIL]
  03 TCVN / Regulatory Compliance ... [PASS / FLAG / FAIL]
  04 ROE Context Boundary ........... [PASS / FLAG / FAIL]
  05 Environmental Qualification .... [PASS / FLAG / FAIL]
  06 AI Confidence Calibration ...... [PASS / FLAG / FAIL]
  07 Fallback Protocol .............. [PASS / FLAG / FAIL]
  08 Detection Dual-Error Rate ....... [PASS / FLAG / FAIL]
  09 Power / Logistics Budget ....... [PASS / FLAG / FAIL]
  10 Local Content / Supply Chain ... [PASS / FLAG / FAIL]
  11 Accountability Independence ..... [PASS / FLAG / FAIL]
  12 No Placeholder Content .......... [PASS / FLAG / FAIL]
───────────────────────────────────────────────────────────────
GATE DECISION:
  PROCEED          — All checks PASS
  HUMAN REVIEW     — 1+ FLAGs, no FAILs (review flagged items only)
  BLOCKED          — 1+ FAILs (must resolve before proceeding)
───────────────────────────────────────────────────────────────
FINDINGS:
[For each FLAG or FAIL: check number, specific finding, what to fix]
───────────────────────────────────────────────────────────────
REQUIRED ACTIONS:
  BLOCKING (resolve before proceeding):
    [ ] [specific action for each FAIL]
  REVIEW (human judgment required):
    [ ] [specific item for each FLAG]
───────────────────────────────────────────────────────────────
TIME SAVED: [estimate hours this pre-screening saved vs full manual review]
═══════════════════════════════════════════════════════════════

HITL_CHECKPOINT: false — this gate is itself automated. It feeds human review, not replaces it.
SAFETY_OVERRIDE: "If Check 2 (HITL) returns FAIL on any output — halt immediately.
  Do not continue processing. Escalate to KN for manual review before any further action."
```

---

## Gate Calibration Log

> Track false negatives (issues the gate MISSED that human review caught) here.
> After 3+ gate runs, patterns of misses → improve specific checks.

| Date | Product | Check # | Issue Missed | Fix Applied |
|------|---------|---------|-------------|------------|
| 2026-02-20 | V-SMASH-L Orchestration | 07 (new sub-check) | Silent IFF failure mode: total agent failure shows GREEN (operator unaware). No IFF FAULT indicator. | Add sub-check to 07: "Is total agent failure mode defined? Does operator receive a fault signal rather than silent degradation?" |
| 2026-02-20 | V-SMASH-L Orchestration | 07 (new sub-check) | LOCKED state has no timeout. Energy/thermal/operator fatigue accumulate silently. | Add sub-check to 07: "For real-time systems: are energy, thermal, and time limits defined per state?" |
| 2026-02-20 | VN-RANGE-001 Orchestration | New Check 11 | C16 range officer training: KN both delivers and grades practical test. Social dynamics override objective criteria in Vietnamese military context. | Added Check 11: Accountability Independence |
| 2026-02-20 | Framework Orchestration | 07 (new sub-check) | D-M-I-R feedback mechanism unspecified — "Master reconfigures routing" describes intent, not mechanism. Loop only as consistent as undocumented Friday discipline. | Add sub-check to 07: "Is the feedback mechanism specified (file, format, reader), not just the feedback intent?" |
| 2026-02-20 | VN-RANGE-001 Orchestration | New Check 12 | FAT checklist "12 items" referenced but never enumerated. Safety-critical acceptance step is a placeholder. | Added Check 12: No Placeholder Content |
| 2026-02-20 | Framework Orchestration | 04 (new sub-check) | A-ODI recommends strategy for defense portfolio with no ethical boundary on what product categories are recommendable. | Add sub-check to 04: "Does ODI output include product category ethical review before strategy proceeds to planning?" |
| 2026-02-20 | Framework Orchestration (deep dive) | 07 (new sub-check v1.2) | "Master holds all state" — state is session-bound in Claude Code. No persistence mechanism defined for projects[], allocation{}, dmir_log[]. Master operates blind in new sessions if files not read. | Add sub-check to 07: "Is state persistence mechanism defined? (file format, reader, session-opening protocol)" |
| 2026-02-20 | Framework Orchestration (deep dive) | 12 (new sub-check v1.2) | Mid-phase PAUSED state missing from project state machine. Resource constraints regularly cause mid-phase stops but only gate-level PAUSE is defined. | Add sub-check to 12: "State machines: are realistic operational interruption states defined? (PAUSED, FAULT, DEGRADED)" |
| 2026-02-20 | Framework Orchestration (deep dive) | 07 (persists) | A-QC own failure/timeout mode undefined. If QC gate errors, unclear whether default is PROCEED (dangerous) or HALT (conservative). | Add to 07: "If QC gate itself errors → default HALT. Retry once. Escalate on second failure." |
| 2026-02-20 | VN-RANGE-001 Phase A artifacts | 12 (candidate sub-check) | FAT test script (A4 §3) calls `curl http://localhost:5432/health` but PostgreSQL port 5432 speaks binary protocol, not HTTP. Script would fail on execution. Gate checks document content but not test script correctness. | Candidate sub-check for 12: "Are embedded test scripts syntactically executable? (port/protocol mismatch, missing dependencies, platform assumptions)" |
| 2026-02-20 | VN-RANGE-001 Phase A artifacts | 09 (scope gap) | Clawdbot AI assistant listed in BOM at $0 (software) but requires recurring LLM API calls. Operational cost not budgeted anywhere. Check 09 covers power/logistics but not recurring software service costs. | Candidate expansion of 09: "For AI-as-a-service components: is recurring operational cost (API calls, compute, bandwidth) budgeted?" |
| 2026-02-20 | VN-RANGE-001 Phase A artifacts | None (statistical) | FAT tests 3 of 10 sensors. At 10% defect rate, P(3 pass) = 72%. No statistical justification for sample size. Mitigated by B10 on-site test. | Observation only — low priority. B10 catches remaining defects on-site. |
| 2026-02-22 | V-SMASH-M Phase 1 | None (scope gap) | No cybersecurity/INFOSEC requirements for device with BLE 5.0 radio and USB-C firmware update path. No BLE pairing security, no firmware signing, no model integrity verification. Adversary could spoof BLE or inject corrupted AI model via physical USB. | Candidate Check 13: Cybersecurity/INFOSEC baseline — communication interfaces (BLE, WiFi, USB, OTA) without security requirements? Model provenance/integrity for AI-on-edge devices? |
| 2026-02-22 | V-SMASH-M Phase 1 | 01 (binding gap) | Detection range (200m) + sensor resolution (2MP) not bound through optical system specification. No FOV, focal length, or f-number requirement exists. Gate checks individual physics claims but does not verify that coupled parameters are bound through intermediary specs. | Observation — Check 01 should verify that coupled performance claims (range × resolution × optics) have binding requirements for all intermediary parameters. |
| 2026-03-02 | V-SMASH-M V&V Master Plan | 01 (test design) | L2 thermal test point set at 100°C (1°C below shutdown threshold of 101°C) rather than at throttle trigger (85°C). Tests near operational boundaries without safety margin create fragile test designs — 2°C drift triggers shutdown instead of the intended throttle test. | Candidate sub-check for 01: "Are test points set with margin from boundary conditions? (avoid testing at ±5% of shutdown/saturation thresholds)" |
| 2026-03-02 | V-SMASH-M V&V Master Plan | 08/11 combined | VM-Y04 (AI FPR ≤2%, safety-critical) was not visible in the master plan §8 acceptance criteria table, AND T09 field test (which verifies VM-Y04) had no independent evaluator requirement. Safety-critical AI performance criterion hidden in sub-documents + no independent witness = compounding accountability gap. | Combined Check 08+11 finding: when a safety-critical AI performance metric is tested in field conditions by the developer (not external lab), both the metric visibility AND the independence requirement must be enforced at master plan level. Added explicit row to §8 and dual-signature requirement to OI-VnV-03. |
| 2026-03-03 | V-SMASH-SW System SRS+SAD | 01 (marginal) | System SRS "≥30 Hz nominal" claim vs SAD typical T-AI cycle 35–45 ms (→ 22–28 Hz AI output rate). Gate catches the tension between stated performance target and architecture timing data in same document set. | Candidate sub-check for 01: "When a system-level performance claim and an architectural timing budget appear in the same document set, verify they are mutually achievable at the same operating point (not one at best-case, other at typical)." |
| 2026-03-03 | V-SMASH-SW System SRS+SAD | 08 (scope gap) | Safety-critical AI detection metrics (Pd ≥90%, FPR ≤2%) only appear in child module SRS, not in system-level SRS. A reviewer of only the System SRS cannot determine detection performance. Pattern: system-level docs inherit safety performance by reference without re-stating it. | Pattern rule: for safety-critical AI performance metrics, always surface at BOTH module level AND system level. Restating at system level is not redundancy — it is integration-level accountability. |
| 2026-03-03 | V-SMASH-SW System SRS+SAD | 11 (recurring) | System-level SAFETY-CRITICAL requirements (SWR-SYS-S02, S05) do not name an independent V&V authority. Child SRSs specify "independent V&V" but system integration level inherits this without naming who. Same accountability gap pattern as VN-RANGE-001 C16 (Check 11 original) — social dynamics at system level also apply. | Pattern: whenever a document elevates a requirement to SAFETY-CRITICAL, the same document must name the independent V&V authority or explicitly delegate to a named child document that does. "Inherited from module SRS" is not sufficient. |

---

## Gate Evolution Roadmap

- **v1.0:** 10 checks, manual paste of AI output — establishes baseline
- **v1.1 (2026-02-20):** 12 checks + 4 new sub-checks added from S3 practice session (3 documents):
  - Check 11: Accountability Independence (catches vendor-only gate acceptance)
  - Check 12: No Placeholder Content (catches enumeration placeholders in safety-critical paths)
  - Check 04 sub-check: ODI ethical boundary for defense product recommendations
  - Check 07 sub-checks: silent failure modes + timeout/energy limits for real-time systems
  - Check 07 sub-check: feedback mechanism specified (not just feedback intent)
- **v1.2 (current — 2026-02-20):** 2 new sub-checks from S3 deep dive (Framework Orchestration):
  - Check 07 sub-check: state persistence mechanism (catches session-bound vs claimed-persistent state)
  - Check 12 sub-check: missing state machine states (catches absent PAUSED/FAULT/DEGRADED states)
  - Calibration log entries 7-10 added (4 new findings from deep dive run)
  - Check 13 CANDIDATE noted (Intent vs Mechanism Completeness — validate over next 5 runs)
  - Estimated catch rate: ~85% (from ~43% at v1.0). Layer 2 critical reasoning covers remaining ~15%.
- **v1.2 run 2 (2026-02-20):** Batch run on VN-RANGE-001 Phase A artifacts (8 files). Result: 4 PASS, 8 FLAG, 0 FAIL = HUMAN REVIEW. 3 new calibration entries (script correctness, recurring AI cost, sampling statistics). Total gate runs: 5 (3× S3 practice + 1× deep dive + 1× Phase A batch).
- **v1.2 run 3 (2026-02-22):** Run on V-SMASH-M Phase 1 package (4 files, 68 requirements). Result: 1 PASS, 11 FLAG, 0 FAIL = HUMAN REVIEW. 2 new calibration entries (cybersecurity/INFOSEC scope gap, coupled-parameter binding gap). Total gate runs: 12. Check 13 candidate strengthened (cybersecurity now surfaced in 2 different product types — IRONMESH infra + edge AI device).
- **v1.2 run 32 (2026-03-02):** Run on V-SMASH-M V&V Master Plan + FAT Procedure. Master Plan: 6 FLAG, 0 FAIL. FAT: 3 FLAG, 0 FAIL. Combined = HUMAN REVIEW. 2 new calibration entries: (1) test design fragility at boundary conditions (Check 01); (2) safety-critical AI performance metric hidden in sub-documents + no independent witness for field test (Check 08+11 combined). Applied 4 fixes directly: thermal test point corrected, VM-Y04 added to §8, T09 dual-signature requirement, FAT-06 ESR cross-reference.
- **v1.3 (target after 10 total runs):** Domain-specific variants (maritime / land / training / engagement)
- **v2.0 (target after 20 total runs):** Automated trigger — runs on every `/odi`, `/req`, `/eval` output automatically before saving. Measured (not estimated) calibration data.

---

*Defense AI QC Gate v1.2 — 2026-02-20*
*Prompt: P44 | Target: S3 manual QC time 5h/week → 2h/week*
*v1.1: +2 checks (11, 12) +4 sub-checks from 3-document S3 run*
*v1.2: +2 sub-checks (07 state persistence, 12 missing states) from Framework deep dive*
*Check 13 candidate: Intent vs Mechanism Completeness — validate over next 5 runs*
