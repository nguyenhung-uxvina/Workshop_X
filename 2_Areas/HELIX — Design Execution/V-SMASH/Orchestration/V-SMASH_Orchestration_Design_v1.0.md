---
project: V-SMASH-L
type: orchestration-design (S2 practice — second application)
scope: Operational engagement orchestration — real-time counter-UAS engagement cycle
version: 1.0
created: 2026-02-20
skill_target: S2 Multi-Agent Orchestration — state machine pattern (contrast to VN-RANGE-001 pipeline)
source: V-SMASH-L_ODI_Report_v1.0.md — 22 outcomes, top Opp = O13 (18), O02 (17), O14 (16)
key_insight: Same S2 framework (master + sub-agents) produces STATE MACHINE not PIPELINE
             when time scale = milliseconds and human role = shooter not reviewer
---

# V-SMASH-L — Operational Orchestration Design v1.0
## Real-Time Counter-UAS Engagement: Master Agent × 5 Sub-Agents × 3 HITL Checkpoints

---

## SECTION 0: WHY THIS IS A DIFFERENT S2 PROBLEM

VN-RANGE-001 produced a linear deployment pipeline.
V-SMASH-L produces a real-time engagement state machine.

Same framework (master agent + sub-agents + HITL) — fundamentally different architecture.

| Dimension | VN-RANGE-001 | V-SMASH-L |
|-----------|-------------|--------------|
| Process structure | Linear pipeline (A→B→C) | Cyclic state machine |
| Time scale per step | Hours to days | Milliseconds to seconds |
| Agent types | Administrative (survey, doc, config) | Real-time inference (detect, track, IFF, fire control) |
| Human role at HITL | Reviewer — reads document, signs | Shooter — holds trigger under stress |
| "I'm not sure" response | Retry → escalate to KN | Route to operator IMMEDIATELY (no time for retry) |
| Fallback type | Retry 2× then escalate | Instant fallback to manual mode |
| State persistence | Weeks across sessions | Ephemeral per engagement, then logged |
| Highest consequence | Gate signed incorrectly | IFF misclassification → fratricide |

**The forcing function:** FPV drones travel 15–20m/sec. The engagement window may be 2–5 seconds.
No retry logic. No "escalate to KN." No document review. Every edge case resolves in real-time or falls back to manual mode.

---

## SECTION 1: DESIGN PRINCIPLES (V-SMASH-L specific)

### P1 — Operator Intention, AI Precision

```
WRONG: AI decides whether to fire (autonomous weapons)
WRONG: Operator decides exact fire timing (misses fast drone)
RIGHT: Operator decides to engage (HITL). AI decides precise moment within operator's window.
```

The operator holds the trigger = "I intend to fire at this threat."
The AI releases the gate = "now is the optimal moment within your intention."
This is the ACH (AI-Compensates-Hardware) principle applied to fire control.

### P2 — IFF Uncertainty Routes to Operator Immediately

```
WRONG: IFF uncertain → retry classification → delay → miss window
RIGHT: IFF uncertain → amber reticle → operator makes judgment call now
```

The IFF agent is the highest-consequence agent in the system (O02, Opp Score 17 — civilian misclassification).
"I'm not sure" from IFF never causes a delay or a retry. It immediately presents to the operator.
Only the operator can make an IFF decision under ambiguity in a combat environment.

### P3 — Fallback is Manual Mode, Not KN Escalation

```
VN-RANGE-001: System anomaly → retry → escalate to KN (human engineer)
V-SMASH-L: System anomaly → instant fallback to manual mode (operator takes over)
```

KN is not on the battlefield. The operator is. Every automated failure must produce a clean
handover to manual engagement — operator can still fire without AI assistance.
A system that fails closed (blocks engagement) is more dangerous than one that fails open (manual mode).

---

## SECTION 2: CONSEQUENCE MAP (from Step 1)

> "What fails if AI gets this wrong?" applied to the 8-step job map.
> This drives which agent handles each step and what the fallback is.

| Job Step | What AI Could Get Wrong | Consequence | Severity | Fallback |
|----------|------------------------|-------------|----------|----------|
| DEFINE | Misclassify drone type entering classification | Wrong ROE applied — wrong engagement decision | CRITICAL | Manual classification by operator |
| LOCATE | False positive (bird/debris flagged as drone) | Operator distracted, real threat missed | HIGH | Operator visually confirms before committing |
| PREPARE | Slow standby→ready transition (>500ms) | Miss engagement window on fast-approaching threat | HIGH | System pre-activates on motion cue |
| CONFIRM | IFF misclassifies civilian/friendly as HOSTILE | **Fratricide** — the worst possible outcome | **CRITICAL** | Amber reticle always on uncertainty; operator judgment |
| CONFIRM | IFF misclassifies HOSTILE as neutral | Threat not engaged — mission failure | HIGH | Amber reticle prompts operator attention |
| EXECUTE | Fire control gates too conservatively (no window) | Drone escapes engagement zone | HIGH | Operator releases trigger, re-acquires manually |
| EXECUTE | Fire control gates too early (poor solution) | Round misses, ammo wasted, position exposed | HIGH | Threshold tuning; never fire below quality floor |
| MONITOR | Hit/miss assessment wrong | Operator concludes when threat still active | CRITICAL | Visual confirmation by operator always final |
| MODIFY | Track re-acquisition fails after miss | Re-engagement window lost | HIGH | Manual re-acquisition by operator |
| CONCLUDE | Engagement data not captured | After-action review impossible, doctrine cannot improve | LOW | Partial log always written; completeness is secondary |

**Consequence gradient applied:**
- IFF = HIGHEST consequence → most HITL, lowest automation (amber on any uncertainty)
- Fire control = HIGH consequence → quality threshold enforced, never fire below floor
- Logging = LOW consequence → fully automated, operator never touches it

---

## SECTION 3: AGENT ARCHITECTURE

### 3.1 Master Agent — Engagement Controller

```
┌─────────────────────────────────────────────────────────────────┐
│  MASTER: Engagement Controller                                  │
│                                                                 │
│  State held: engagement_state, track_id, iff_result,           │
│              solution_quality, ammo_count, engagement_log       │
│                                                                 │
│  Responsibilities:                                              │
│  ├── Manages state machine transitions (see Section 4)          │
│  ├── Receives sub-agent outputs, evaluates against thresholds   │
│  ├── Drives reticle display (green/amber/red + indicators)      │
│  ├── Releases firing gate when solution_quality > threshold     │
│  │   AND operator is holding trigger                            │
│  ├── Logs all engagement events (timestamp, state, agent output)│
│  └── Triggers manual mode on any agent failure                  │
│                                                                 │
│  NEVER:                                                         │
│  ├── Fires without operator holding trigger                     │
│  ├── Retries IFF when operator needs a decision now             │
│  ├── Blocks engagement on agent uncertainty (→ manual mode)     │
│  └── Suppresses amber reticle to avoid operator burden          │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Sub-Agent Roster

| Agent | Domain | Runs in state | Output | Latency target | Fallback |
|-------|--------|--------------|--------|----------------|---------|
| **A-DETECT** | Detection | STANDBY, ALERT | `{detected, bearing, elevation, drone_type, confidence}` | < 100ms per frame | No detection = stay STANDBY |
| **A-TRACK** | Tracking | ALERT → CONCLUDED | `{track_id, position_3d, velocity_vector, track_confidence}` | < 50ms update | Track lost → ALERT state |
| **A-IFF** | Classification | ALERT, LOCKED | `{result: HOSTILE/NEUTRAL/UNKNOWN, confidence, basis[]}` | < 200ms | UNKNOWN → amber reticle immediately |
| **A-FC** | Fire control | LOCKED, READY | `{solution_quality: 0–100, window_open, lead_angle, hit_prob}` | < 50ms update | Quality below floor → gate stays closed |
| **A-LOG** | Data capture | All states | Continuous write to engagement_log | Background | Partial log if interrupted |

**Critical design rule:** Sub-agents output structured data to Master. They NEVER control the reticle, fire the weapon, or make engagement decisions. Master consumes their outputs and acts.

---

## SECTION 4: STATE MACHINE — ENGAGEMENT CYCLE

> Replaces the linear pipeline. V-SMASH-L cycles through states in real-time.
> Master Agent manages transitions. Operator can override any transition by lowering weapon.

```
                    ┌─────────────┐
                    │   STANDBY   │◄──────────────────────────┐
                    │  A-DETECT   │                           │
                    │  scanning   │                           │
                    └──────┬──────┘                           │
                           │ A-DETECT: detected=TRUE          │
                           │ confidence > 0.7                 │
                           ▼                                  │
                    ┌─────────────┐                           │
                    │    ALERT    │◄──── track lost ──────┐   │
                    │  A-TRACK    │◄──── IFF = NEUTRAL ───┘   │
                    │  A-IFF      │      (high confidence)     │
                    └──────┬──────┘                           │
                           │                                  │
               ┌───────────┴───────────┐                      │
               │ IFF = HOSTILE (>0.85) │ IFF = UNKNOWN         │
               │                       │ or NEUTRAL (<0.7)     │
               ▼                       ▼                      │
        ┌─────────────┐        ┌──────────────┐               │
        │   LOCKED    │        │ AMBER RETICLE│               │
        │  RED reticle│        │ Operator     │               │
        │  A-FC starts│        │ decides IFF  │               │
        └──────┬──────┘        └──────┬───────┘               │
               │                      │ operator               │
               │                      │ confirms hostile       │
               │◄─────────────────────┘                       │
               │ HITL-1: CONFIRM                              │
               │ Operator holds trigger                       │
               ▼                                              │
        ┌─────────────┐                                       │
        │    READY    │                                       │
        │  A-FC active│                                       │
        │  monitoring │                                       │
        │  window     │                                       │
        └──────┬──────┘                                       │
               │ A-FC: solution_quality > 85                  │
               │ AND window_open = TRUE                       │
               │ AND operator still holding trigger           │
               │ HITL-2: EXECUTE                              │
               ▼                                              │
        ┌─────────────┐                                       │
        │   ENGAGED   │                                       │
        │  Shot fired │                                       │
        │  A-TRACK    │                                       │
        │  A-LOG      │                                       │
        └──────┬──────┘                                       │
               │                                              │
    ┌──────────┴──────────┐                                   │
    │ A-TRACK: target     │ A-TRACK: target                   │
    │ still tracked       │ no longer tracked                 │
    │ (miss or partial)   │ + A-DETECT: no threat             │
    ▼                     ▼                                   │
┌─────────────┐    ┌─────────────┐                            │
│  ASSESSING  │    │  CONCLUDED  │                            │
│             │    │  A-LOG      │                            │
│ HITL-3:     │    │  generates  │────────────────────────────┘
│ MODIFY or   │    │  report     │
│ CONCLUDE    │    └─────────────┘
└──────┬──────┘
       │ operator holds trigger again
       ▼
     LOCKED (re-engage path → A-TRACK re-acquires using trajectory prediction)
```

**State transition rules:**

| From | To | Trigger | Master action |
|------|----|---------|---------------|
| STANDBY | ALERT | A-DETECT confidence > 0.7 | Start A-TRACK + A-IFF |
| ALERT | LOCKED | A-IFF: HOSTILE > 0.85 | Red reticle, start A-FC |
| ALERT | AMBER | A-IFF: UNKNOWN or confidence < 0.7 | Amber reticle, operator judgment |
| AMBER | LOCKED | Operator confirms hostile (holds trigger) | Red reticle, start A-FC |
| AMBER | ALERT | Operator lowers weapon | Continue tracking, continue IFF |
| LOCKED | READY | Operator holds trigger | A-FC monitors window |
| LOCKED | ALERT | Operator lowers weapon | Stop A-FC, continue tracking |
| ALERT | STANDBY | Track lost (confidence < 0.3) | Stop A-TRACK, A-IFF |
| READY | ENGAGED | window_open + quality > 85 + trigger held | Release gate → weapon fires |
| READY | LOCKED | Operator releases trigger before window | Stop gate release, continue tracking |
| ENGAGED | ASSESSING | Shot sequence complete | A-TRACK monitors |
| ASSESSING | LOCKED | Target still tracked, operator holds trigger | Re-engage path |
| ASSESSING | CONCLUDED | Target no longer tracked | A-LOG generates report |
| CONCLUDED | STANDBY | Report written, system resets | Ready for next threat |

---

## SECTION 5: HITL ARCHITECTURE

> V-SMASH-L HITL is fundamentally different from VN-RANGE-001.
> No documents. No signatures. No 20-minute reviews.
> Every checkpoint: one glance → one action → immediate consequence.

### HITL-1: CONFIRM (ALERT → LOCKED or AMBER)

| Field | Detail |
|-------|--------|
| **Type** | E — Expert Judgment (IFF decision) |
| **Authority** | Operator (sole — no one else is present) |
| **State** | ALERT with IFF result |
| **Information to operator** | Reticle color: RED (hostile >0.85) / AMBER (uncertain) / GREEN (neutral) — classification label (FPV/quadcopter/fixed-wing) — range indicator — confidence % (small, corner display) |
| **Time budget** | 1–3 seconds |
| **Operator action** | Hold trigger = commit to engage → READY / Lower weapon = hold → ALERT continues |
| **AMBER reticle design rule** | AMBER must be visible and distinct from RED. Never suppress AMBER to reduce operator burden. Operator discomfort with AMBER is the correct design behavior — it means "you must decide." |
| **Consequence if wrong** | RED when should be AMBER → fratricide risk. AMBER when should be RED → missed engagement. |

### HITL-2: EXECUTE (READY → ENGAGED)

| Field | Detail |
|-------|--------|
| **Type** | Unique — Operator sets intention, AI gates moment |
| **Authority** | Shared — operator decides to fire, AI decides when |
| **State** | READY, operator holding trigger |
| **Information to operator** | Reticle pulse = window opening. No text. No numbers. One visual signal. |
| **Time budget** | 0–500ms (AI acts within window) |
| **Operator action** | Holding trigger = authorized. Release before window = abort. |
| **Quality floor** | A-FC: NEVER release gate if solution_quality < 85. Miss wastes ammo + exposes position. |
| **Override** | Operator can release trigger at any point before gate fires = clean abort, no shot |
| **Consequence if wrong** | Gate too early (low quality) → miss + ammo waste. Gate too conservative → drone escapes. |

### HITL-3: MODIFY or CONCLUDE (ASSESSING)

| Field | Detail |
|-------|--------|
| **Type** | E — Expert Judgment (re-engage or conclude) |
| **Authority** | Operator |
| **State** | ASSESSING after shot |
| **Information to operator** | Hit indicator (✓) or miss indicator (✗) — drone status indicator (still moving / stationary / gone) — ammo counter update |
| **Time budget** | 2–5 seconds |
| **Operator action** | Hold trigger = re-engage → LOCKED (A-TRACK re-acquires via trajectory prediction) / Lower weapon = conclude → CONCLUDED |
| **Consequence if wrong** | Conclude when threat still active → unengaged hostile. Re-engage when neutralized → ammo waste. |

### HITL Summary: Operator Cognitive Load Principle

```
VN-RANGE-001 HITL: Rich information → 20 min review → reasoned decision
V-SMASH-L HITL: Minimal signal → 1-3 sec decision → physical action

Design rule: Every HITL signal must be readable in one glance under combat stress.
             If operator needs to read text to make the decision → design failure.
             Color + shape only. No sentences. No numbers except range.
```

---

## SECTION 6: CONDITIONAL EDGE LOGIC (real-time, no retry)

> VN-RANGE-001 used: retry (2×) → escalate to KN.
> V-SMASH-L uses: instant fallback → manual mode. No KN on the battlefield.

### Detection Edges

```
A-DETECT confidence < 0.7 on initial detection
→ Stay STANDBY, do not alert. Low-confidence detection = false alarm risk.
→ Require 3 consecutive frames above threshold before triggering ALERT.
→ (Prevents false alarms on birds, debris, insects)

A-DETECT loses object during ALERT
→ Stay ALERT for 2 seconds (drone may be behind obstacle)
→ After 2 seconds with no re-detection → STANDBY
→ A-TRACK continues to predict position during 2-second hold

A-DETECT detects multiple objects simultaneously
→ Master prioritizes by: (1) IFF = HOSTILE first, (2) closest range, (3) highest speed
→ Secondary tracks queued — Master returns to ALERT for next threat after CONCLUDED
```

### IFF Edges

```
A-IFF returns UNKNOWN (cannot classify)
→ AMBER reticle immediately — no retry delay
→ Operator makes judgment call
→ This is the CORRECT behavior: uncertainty → human

A-IFF confidence oscillates (crossing threshold repeatedly)
→ Amber reticle until confidence stable for 500ms
→ Prevents reticle flicker under stress (would confuse operator)

A-IFF classifies as NEUTRAL (high confidence)
→ GREEN reticle
→ Master stays in ALERT, continues tracking
→ Operator does NOT engage (system signal = stand down)
→ Operator override: if operator holds trigger despite GREEN → Master does NOT release gate
  (this is the IFF SAFETY_OVERRIDE — human cannot override a GREEN classification to fire)
```

### Fire Control Edges

```
A-FC solution_quality < 85 during READY
→ Gate stays closed. Window indicator stays off.
→ Continue tracking. Wait for better solution.
→ If no quality solution in 5 seconds while operator holds trigger:
  → Display: window indicator flashes (amber) = "no good window available"
  → Operator can: hold and wait / release trigger = abort

A-FC track uncertainty too high (drone maneuvering aggressively)
→ quality drops below floor → gate closes
→ Stay READY if operator still holding trigger
→ If track confidence drops below 0.5 → ALERT (re-classify)

A-FC predicts engagement window beyond safe zone boundary
→ Gate does NOT open regardless of solution quality
→ Safety fan violation: LOCKED state with RED X indicator
→ Master NEVER releases gate if shot trajectory exits safe zone
```

### System Failure Edges

```
Any agent latency > 2× target (compute overload)
→ Master degrades gracefully:
  Priority 1: Maintain A-TRACK output (keep lock)
  Priority 2: Keep A-IFF running (IFF is highest consequence)
  Priority 3: Pause A-FC computation if needed (miss window rather than wrong data)
  Priority 4: A-LOG can lag — write on next cycle

A-TRACK fails completely (loss of track data)
→ ALERT state → A-DETECT continues scanning → manual acquisition by operator

Battery below 10%
→ Display: low-battery warning
→ System continues running — operator decides whether to break off engagement
→ Master does NOT auto-shutdown during active engagement

Thermal limit reached
→ Display: thermal warning
→ System continues 30 seconds → if unresolved: display "MANUAL MODE"
→ Master hands off cleanly: operator can fire manually, reticle stays as crosshair
```

---

## SECTION 7: PATTERN COMPARISON — VN-RANGE-001 vs V-SMASH-L

> The core S2 insight from applying the same framework to both products.

```
IRONMESH ORCHESTRATION PATTERN — TWO IMPLEMENTATIONS
═══════════════════════════════════════════════════════════════════

PATTERN ELEMENT        VN-RANGE-001              V-SMASH-L
───────────────────────────────────────────────────────────────────
Master Agent role      Holds deployment state,    Holds engagement state,
                       routes admin tasks         manages state machine

Sub-agent scope        Single admin domain        Single inference domain
                       (doc, config, test)        (detect, track, IFF, FC)

Process structure      Linear pipeline            Cyclic state machine
                       A→B→C (one direction)      STANDBY⇄ALERT⇄LOCKED...

Time per step          Hours to days              Milliseconds to seconds

HITL checkpoint        Review document            One-glance signal
information            (4 items, 20 min)          (color + shape, 1-3 sec)

"I'm uncertain"        Retry (2×) → escalate KN  Amber → operator now
response               (there is time)            (there is no time)

Fallback               Retry → KN escalation      Instant → manual mode

Gate authority         Both parties sign          Operator holds trigger

Highest consequence    Gate without both sigs     IFF: civilian classified
                       = unclear accountability   as hostile = fratricide

Logging                Active (A-DOC generates)   Passive (A-LOG always on)
                       per HITL approval          no operator involvement

Safety override        SAFETY_OVERRIDE:           SAFETY_OVERRIDE:
                       KN clears only             safe zone boundary = gate
                                                  never opens, no override

═══════════════════════════════════════════════════════════════════
SAME FRAMEWORK. DIFFERENT PATTERN. Both correct for their context.
═══════════════════════════════════════════════════════════════════
```

---

## SECTION 8: ODI OUTCOMES → ORCHESTRATION TRACEABILITY

> Every top UNDERSERVED outcome from the ODI report must be addressed by the orchestration.

| Outcome | Opp Score | Which agent addresses it | How |
|---------|-----------|------------------------|-----|
| O13: First-shot hit probability | 18 | A-FC (Fire Control) | Quality threshold = 85 minimum; lead angle computed from A-TRACK trajectory |
| O02: Civilian/friendly misclassification | 17 | A-IFF + Master | AMBER on any uncertainty; GREEN blocks gate (no operator override); never retry — present to human |
| O14: Reaction time lock → window | 16 | A-TRACK + A-FC | A-TRACK < 50ms updates; A-FC parallel computation in LOCKED state (ready before operator commits) |
| O04: Detection range at low altitude | 16 | A-DETECT | YOLOv8-nano tuned for low-altitude silhouette; 3-frame confirmation threshold |
| O01: Time to classify threat | 15 | A-IFF | < 200ms target; runs in parallel with A-TRACK from first ALERT |
| O05: Time from alert to target in sight | 15 | Master + reticle | State transition STANDBY→ALERT→LOCKED as fast as agents confirm; no admin steps |
| O15: Rounds to neutralize | 15 | A-FC quality gate | Only fire above quality floor; O15 and O13 are the same solution |
| O06: Track stability in clutter | 14 | A-TRACK | 2-second hold on track loss; trajectory prediction during occlusion |
| O19: Re-acquisition time after miss | 14 | A-TRACK | Trajectory prediction from pre-shot data; re-acquire without full re-detect cycle |
| O10: HITL — AI must never fire autonomously | 14 | Master design | Gate = trigger held + window open + quality > floor. Three conditions. All must be true. |

**Traceability rule:** Every UNDERSERVED outcome with Opp Score ≥ 14 must be addressable by a named agent or Master behavior. If not → gap in orchestration design.

---

## SECTION 9: REUSABLE PATTERN — REAL-TIME WEAPONS SYSTEM ORCHESTRATION

```yaml
pattern: IRONMESH_REALTIME_WEAPONS_ORCHESTRATION
version: 1.0
applies_to: Any IRONMESH product with real-time sensor→track→engage→log cycle

MASTER_AGENT:
  type: state_machine_controller (not pipeline manager)
  state: [engagement_state, active_track, iff_result, solution_quality, safety_status]
  transition_trigger: sub-agent output evaluated against threshold
  HITL_trigger: IFF uncertainty OR gate decision OR conclusion decision

SUB_AGENT_PATTERN:
  type: real-time inference pipeline (not admin task executor)
  state: stateless per frame (Master holds engagement state)
  latency_target: defined per agent (detect <100ms, track <50ms, IFF <200ms, FC <50ms)
  fallback: degrade gracefully, never block engagement, never halt Master

HITL_PATTERN:
  information: one-glance signal only (color, shape, minimal text)
  time_budget: 1–5 seconds (not 15–45 minutes)
  operator_action: physical (hold trigger / lower weapon), not administrative (sign/type)
  uncertainty_routing: IMMEDIATELY to operator — no retry delay
  override_rule: IFF GREEN cannot be overridden to fire (safety-critical boundary)

FALLBACK_HIERARCHY:
  agent_failure: degrade to lower-quality output (not halt)
  track_loss: return to previous state (ALERT, not STANDBY)
  system_failure: manual mode handover (operator capability preserved)
  never: block engagement during active threat / auto-shutdown mid-engagement

SAFETY_OVERRIDE:
  safe_zone_boundary: gate NEVER opens if trajectory exits safe zone
  IFF_GREEN: gate NEVER opens regardless of operator trigger state
  both: Master enforces — no sub-agent can override
```

---

*V-SMASH-L Orchestration Design v1.0 — 2026-02-20*
*S2 practice: second application — state machine pattern vs pipeline pattern*
*Source ODI: 22 outcomes, 14 UNDERSERVED — top Opp O13 (18) + O02 (17)*
*Next step: validate against actual Hailo-8 latency specs when hardware available*
