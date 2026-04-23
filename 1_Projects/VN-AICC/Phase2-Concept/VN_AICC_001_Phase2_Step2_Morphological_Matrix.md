---
project: VN-AICC-001
phase: 2
type: morphological_matrix
version: 1.0
created: 2026-02-19
status: COMPLETE — Matrix + 3 Concept Variants defined
---

# VN-AICC-001: PHASE 2, STEP 2 — MORPHOLOGICAL MATRIX
## Conceptual Design: Solution Principles & Concept Variants (P&B §6.5)
### Version 1.0 (Matrix + Concept Variants) | 19/02/2026

---

**Document ID:** VN-AICC-001-P2-S2-v1.0
**Phase:** 2 — Conceptual Design
**Step:** 2 of 4 (Function Structure → **Morphological Matrix** → Concept Variants → VDI 2225 Evaluation)
**Input:** VN-AICC-001-P2-S1-v1.0 (Function Structure, 18 subfunctions)
**Method:** P&B §6.5 Morphological Matrix + §6.5.2 Combining Solution Principles

---

## 1. METHODOLOGY NOTES

### 1.1 P&B §6.5 Rules Applied

1. **Solution principles = working principles** — Describe HOW the function is fulfilled at the physical/logical principle level, not specific components or brands
2. **Solution-neutral** — No brand names, model numbers, or locked implementations
3. **2-4 principles per subfunction** — Sufficient variation to generate distinct concepts
4. **Focus variation on new development** — F2, F3, F4 (23-27% IRONMESH reuse) get 3-4 options; F1, F5 (70-93% reuse) get 1-2 options (already platform-constrained)
5. **Compatibility check before combining** — Not all principles are combinable; physical, timing, and architectural constraints apply

### 1.2 Matrix Strategy

| Function Group | Variation Strategy | Rationale |
|---|---|---|
| **F1 — Receive & Filter** | 1-2 options (constrained) | 93% IRONMESH reuse → platform locks most choices |
| **F2 — Process & Assess** | 3-4 options (maximize) | 27% reuse, F2.3 is keystone → drives architecture |
| **F3 — Present to Human** | 3-4 options (maximize) | 23% reuse, UI is AICC's unique value proposition |
| **F4 — Capture Decision** | 2-3 options (safety-bounded) | 23% reuse, but ≤200ms safety constraint limits choices |
| **F5 — Manage Resources** | 1-2 options (constrained) | 70% reuse → leverage proven IRONMESH solutions |

---

## 2. MORPHOLOGICAL MATRIX

### Legend

- **SP** = Solution Principle
- **[IM]** = IRONMESH-native (maximizes platform reuse)
- **[SA]** = Standalone-capable (no IRONMESH dependency)
- **[HY]** = Hybrid (works both modes)
- Bold text = recommended for at least one concept variant

---

### 2.1 F1: Receive & Filter Signals (Plug-in — Low Variation)

| Sub-function | SP-A | SP-B |
|---|---|---|
| **F1.1** Receive multi-source signals | **Native message bus** [IM]: Shared-memory IPC with IRONMESH CDM protocol stack; zero-copy message passing from OS networking layer; protocol-native agent discovery | **Generic pub/sub broker** [SA]: Lightweight publish-subscribe middleware (topic-based routing); protocol adapters per network interface; agent-agnostic message envelope |
| **F1.2** Filter & classify signals | **Rule-table classifier** [HY]: Static priority rule table loaded from configuration; pattern-match incoming messages against rule set; output = tagged priority stream | **Pipeline filter chain** [HY]: Chain-of-responsibility pattern; each filter stage adds metadata (source, type, priority); pluggable filter modules; order-dependent processing |
| **F1.3** Buffer & queue signals | **Priority-lane ring buffer** [HY]: Fixed-size circular buffer with N priority lanes; critical messages bypass lower lanes; oldest-first eviction within each lane | **Time-expiring priority queue** [HY]: Heap-based queue with per-message TTL; expired messages auto-discarded; prevents stale data accumulation under load |

**F1 Notes:**
- F1.1 is the primary differentiator between IRONMESH-native vs. standalone architectures
- F1.2 and F1.3 are implementation-agnostic — work with either F1.1 choice
- All F1 options meet ≤500ms latency requirement (PL.08, FN.01)

---

### 2.2 F2: Process & Assess Priority (AICC Soul — High Variation)

| Sub-function | SP-A | SP-B | SP-C | SP-D |
|---|---|---|---|---|
| **F2.1** Aggregate agent status | **Time-triggered polling** [HY]: Periodic sweep of all agent data at fixed interval (e.g., 100ms); builds complete snapshot each cycle; simple, deterministic timing | **Event-driven incremental update** [HY]: Agent status changes trigger updates; aggregated view maintained incrementally; lower CPU load but requires event infrastructure | **Hybrid poll + heartbeat** [HY]: Event-driven for changes + periodic heartbeat to detect silent failures; combines responsiveness with liveness detection | — |
| **F2.2** Assess urgency & risk | **Static priority matrix** [HY]: 2D lookup table (agent_type × event_severity); predefined priority levels; fast O(1) lookup; deterministic, auditable | **Multi-factor weighted scoring** [HY]: Real-time calculation from N factors (severity, recency, agent criticality, mission phase); dynamic priority; requires tuning | **Threshold escalation ladder** [HY]: Tiered alert levels (info → warning → critical → emergency); auto-escalation on time-without-response or repeated triggers | — |
| **F2.3** Maintain state machine | **Hierarchical State Machine (HSM)** [HY]: Nested states (e.g., ACTIVE contains sub-states MONITORING, ALERTING, DECIDING); state inheritance reduces transition complexity; supports concurrent regions for multi-agent tracking | **Flat Finite State Machine (FSM)** [HY]: Single-level state table (IDLE → ALERT → ACTION → CONFIRM → IDLE); explicit transition rules per state pair; simplest to verify and audit | **Event-driven actor model** [SA]: Each agent gets independent state actor; actors communicate via messages; no global state machine — emergent system behavior from actor interactions | **Dual-track synchronized FSM** [HY]: Two parallel state machines — operator FSM (human workflow) + system FSM (agent aggregate status); sync protocol keeps them coherent; separates human tempo from machine tempo |

**F2 Notes — KEYSTONE ANALYSIS (F2.3):**

| F2.3 Principle | Complexity | Auditability | Multi-agent Scalability | Standalone Viability | ≤200ms Safety Path Impact |
|---|---|---|---|---|---|
| SP-A: HSM | Medium-High | Good (hierarchical trace) | Good (concurrent regions) | Yes | Medium (nested transition lookup) |
| SP-B: Flat FSM | Low | Excellent (flat table = fully traceable) | Limited (state explosion with N agents) | Yes | Best (O(1) lookup) |
| SP-C: Actor model | High | Difficult (distributed state) | Excellent (linear scaling) | Yes (but complex) | Uncertain (message latency) |
| SP-D: Dual-track FSM | Medium | Good (two simple tables) | Good (agent states separate) | Yes | Good (operator FSM is simple) |

> **Architectural implication:** F2.3 choice drives F4.3 (validation needs state context), F3.1 (dashboard needs state for display logic), and F5.4 (fail-safe needs state for safe shutdown). Choose F2.3 first, then check compatibility downstream.

---

### 2.3 F3: Present to Human (AICC Soul — High Variation)

| Sub-function | SP-A | SP-B | SP-C |
|---|---|---|---|
| **F3.1** Render visual dashboard | **Widget-tile grid** [HY]: Composable grid of independent widget tiles (agent card, alert banner, action queue, map); user/config can rearrange; each widget renders independently | **Priority-driven adaptive layout** [HY]: Display auto-reflows based on current urgency; critical alerts expand to fill screen; normal operation shows balanced overview; layout driven by F2.2 output | **Fixed multi-zone layout** [HY]: Static screen zones (top: alert bar, center: agent grid, bottom: action queue, side: status); content dynamic within fixed zones; most predictable for operator training |
| **F3.2** Render status summary | **Scrolling text ticker** [HY]: Sequential text display of key metrics on secondary screen; cycles through system health, connection status, mode; simple, low-bandwidth | **Icon-based status matrix** [HY]: Grid of symbolic icons with color coding on secondary screen; each icon = one metric; compact, at-a-glance readability | **Mirrored KPI bar** [HY]: Secondary screen shows 4-6 key performance indicators from primary dashboard; always-visible critical subset; no scrolling needed |
| **F3.3** Generate multi-modal alerts | **Simultaneous multi-channel** [HY]: All alert modalities fire at once (visual flash + audio tone + haptic pulse); alert level determines intensity across all channels | **Escalating cascade** [HY]: Alert starts visual-only → adds audio after T1 seconds → adds haptic after T2 seconds; reduces false-alarm fatigue; gives operator time to notice quietly | **Context-aware routing** [HY]: Alert modality selected by situation (day = visual+audio, night = visual+haptic, high-noise = haptic-dominant); adapts to operating environment |
| **F3.4** Indicate agent state | **Dedicated per-agent LED** [HY]: One RGB LED per agent; color = status (green/yellow/red/blue); always visible without display; direct 1:1 mapping | **Encoded multiplexed pattern** [HY]: Fewer LEDs with blink patterns encoding agent + status; saves hardware but requires pattern literacy | **LED + display co-indication** [HY]: LEDs show summary (which agent needs attention); display shows detail; redundant channels reinforce each other |

**F3 Notes:**
- F3.1 choice significantly impacts operator training time and cognitive load
- F3.3 must meet FN.03 (multi-modal alert); all three SPs comply, differ in presentation strategy
- F3.4 SP-A (dedicated LED) requires ≥4 RGB LEDs (matches SI.04 requirement directly)

---

### 2.4 F4: Capture Human Decision (AICC Soul — Safety-Bounded Variation)

| Sub-function | SP-A | SP-B | SP-C |
|---|---|---|---|
| **F4.1** Detect physical input | **GPIO direct read** [HY]: MCU reads button state via GPIO pins; software debounce; simplest implementation; polling-based with configurable scan rate | **I2C I/O expander** [HY]: Centralized I/O expander IC on I2C bus; single bus connection to compute module; scales to many buttons with minimal wiring | **Hardware interrupt-driven** [HY]: Dedicated interrupt line per critical button (E-stop minimum); hardware debounce circuit; lowest latency for safety-critical inputs |
| **F4.2** Interpret user intent | **Fixed function mapping** [HY]: Each physical button = one permanent function regardless of state (e.g., Button 1 = always "approve"); simple, zero ambiguity; limited flexibility | **State-dependent mapping** [HY]: Button function changes based on current state from F2.3 (e.g., Button 1 in ALERT = "acknowledge", in ACTION = "approve"); flexible but requires on-screen labels | **Layered mapping with visual guide** [HY]: State-dependent mapping + real-time on-screen button legend showing current function of each button; combines flexibility with clarity |
| **F4.3** Validate & confirm decision | **Timeout-guarded single action** [HY]: Single press executes after countdown timer; auto-cancels if no second confirmation within T seconds; prevents abandoned half-decisions | **Two-step sequential (preview → confirm)** [HY]: First press shows preview/impact on display; second press within window confirms; clear separation of intent and commitment | **Graduated confirmation difficulty** [HY]: Confirmation difficulty scales with consequence; info actions = single press; warning = two-step; critical = two-step + hold duration; E-stop = immediate (no confirmation) |
| **F4.4** Transmit decision to agents | **CDM direct command** [IM]: Format decision as IRONMESH CDM command message; transmit via native protocol stack; audit log as CDM metadata; tightest integration | **Abstracted command broker** [SA]: Protocol-agnostic command abstraction layer; translates decisions to target protocol (CDM, REST, MQTT, custom); supports non-IRONMESH agents |

**F4 Notes — SAFETY CRITICAL PATH ANALYSIS:**

**Requirement:** F4.1 (E-stop detect) → F4.3 (validate) → F4.4 (transmit halt) ≤ 200ms

| Path Combination | Estimated Latency | Meets ≤200ms? |
|---|---|---|
| F4.1-A (GPIO poll 10ms) → F4.3-A (timeout, ~0ms for E-stop bypass) → F4.4-A (CDM ~50ms) | ~60ms | ✅ Yes |
| F4.1-B (I2C poll 20ms) → F4.3-B (two-step, but E-stop bypasses) → F4.4-A (CDM ~50ms) | ~70ms | ✅ Yes |
| F4.1-C (HW interrupt <1ms) → F4.3-C (graduated, E-stop = immediate) → F4.4-A (CDM ~50ms) | ~51ms | ✅ Best |
| F4.1-C (HW interrupt <1ms) → F4.3-C (graduated, E-stop = immediate) → F4.4-B (broker ~80ms) | ~81ms | ✅ Yes |
| F4.1-A (GPIO 10ms) → F4.3-B (two-step) → F4.4-B (broker ~80ms) | ~90ms | ✅ Yes (for E-stop path only if bypass built in) |

> **All combinations meet ≤200ms** for the E-stop path, provided E-stop bypasses the normal confirmation flow (which all SP-C and SP-B support by design). Non-E-stop decisions are not latency-constrained.

> **Constraint:** Any F4.3 solution MUST implement E-stop bypass — confirmation applies only to operator-initiated decisions, not emergency halt.

---

### 2.5 F5: Manage System Resources (Plug-in — Low Variation)

| Sub-function | SP-A | SP-B |
|---|---|---|
| **F5.1** Regulate & distribute power | **Single-rail buck converter** [HY]: One main regulated rail (5V); on-board LDOs for lower voltages (3.3V, 1.8V); simple, proven; minimal components | **Multi-rail PMIC** [HY]: Dedicated power management IC with multiple regulated outputs; sequenced startup; current monitoring per rail; more complex but production-optimized |
| **F5.2** Monitor system health | **OS-integrated health daemon** [IM]: IRONMESH OS health monitoring service; CPU/RAM/temp/network metrics; existing implementation, zero new development | **Independent hardware watchdog + daemon** [HY]: Hardware watchdog timer + software health daemon; watchdog resets system if daemon fails; defense-in-depth for safety |
| **F5.3** Manage system configuration | **File-based static config** [HY]: Configuration files read at boot; changes require restart; simple, predictable, debuggable | **Runtime key-value store** [HY]: Live-modifiable configuration; changes take effect immediately; supports mode switching without reboot; more complex state management |
| **F5.4** Handle faults & fail-safe | **Immediate halt-all** [HY]: Any detected fault → all agents receive halt command → system enters safe state; conservative, maximally safe; zero fault tolerance | **Graduated degradation** [HY]: Classify fault severity; minor faults → warning + continue; major faults → disable affected subsystem; critical faults → halt-all; balances safety with availability | **Watchdog + auto-recovery** [HY]: Hardware watchdog detects hang → attempt auto-recovery → if recovery fails → halt-all; adds resilience layer before fail-safe |

**F5 Notes:**
- F5.2 SP-B (watchdog + daemon) is recommended for any variant that includes SF.01 (fail-safe) as Demand requirement
- F5.4 choice interacts with F2.3 (state machine must support fault transitions)

---

## 3. COMPATIBILITY CONSTRAINTS

Before combining solution principles into concept variants, these constraints must be respected:

### 3.1 Hard Constraints (Violations = infeasible concept)

| Constraint | Affected SPs | Rule |
|---|---|---|
| **C1: E-stop ≤200ms** | F4.1, F4.3, F4.4 | E-stop MUST bypass normal confirmation flow; all F4 combinations satisfy this if bypass is designed in |
| **C2: State context required** | F2.3 ↔ F4.2, F4.3 | If F4.2 = state-dependent mapping (SP-B or SP-C), F2.3 MUST provide accessible state query interface |
| **C3: Actor model + flat FSM incompatible** | F2.3-C ↔ F4.3 | Actor model (F2.3-C) has no global state to query for confirmation validation — requires different validation approach or custom adapter |
| **C4: CDM dependency** | F1.1-A, F4.4-A | If F1.1-A (native bus) AND F4.4-A (CDM direct), IRONMESH OS is a hard dependency — standalone mode requires fallback protocol layer |

### 3.2 Soft Constraints (Violations = suboptimal but feasible)

| Constraint | Affected SPs | Preference |
|---|---|---|
| **S1: Audit consistency** | F2.3 ↔ F4.4 | State machine + command transmission should use same logging format for coherent audit trail |
| **S2: Cognitive load** | F3.1 ↔ F4.2 | If F3.1 = adaptive layout (SP-B), operator has more cognitive load → F4.2 should be simpler (SP-A or SP-C with visual guide) |
| **S3: Alert-to-action coherence** | F3.3 ↔ F4.3 | Escalating alerts (F3.3-B) pair naturally with graduated confirmation (F4.3-C) — matching escalation metaphors |
| **S4: IRONMESH reuse cluster** | F1.1-A, F4.4-A, F5.2-A | These three form a coherent "IRONMESH-native" cluster — mixing native and generic in the same data path adds integration complexity |

---

## 4. MATRIX VISUAL SUMMARY

```
╔══════════════════════════════════════════════════════════════════════════════╗
║           MORPHOLOGICAL MATRIX — VN-AICC-001 PLATFORM CORE                  ║
╠═══════════╦═══════════════════╦═══════════════════╦═══════════════════╦═════╣
║ Sub-fn    ║     SP-A          ║     SP-B          ║     SP-C          ║ SP-D║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F1 — RECEIVE & FILTER (Plug-in, 93% reuse)                                 ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F1.1 Recv ║ Native msg bus[IM]║ Pub/sub broker[SA]║                   ║     ║
║ F1.2 Filt ║ Rule-table class. ║ Pipeline chain    ║                   ║     ║
║ F1.3 Buff ║ Priority ring buf ║ Time-expire queue ║                   ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F2 — PROCESS & ASSESS (AICC Soul, 27% reuse) ★ HIGHEST VARIATION           ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F2.1 Aggr ║ Time-triggered    ║ Event-driven      ║ Hybrid poll+HB   ║     ║
║           ║ polling           ║ incremental       ║                   ║     ║
║ F2.2 Asse ║ Static priority   ║ Multi-factor      ║ Threshold         ║     ║
║           ║ matrix            ║ weighted score    ║ escalation ladder ║     ║
║ F2.3 Stat ║ Hierarchical SM   ║ Flat FSM          ║ Actor model  [SA] ║Dual-║
║  ★KEY     ║ (HSM)             ║                   ║                   ║track║
║           ║                   ║                   ║                   ║ FSM ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F3 — PRESENT TO HUMAN (AICC Soul, 23% reuse) ★ UX DIFFERENTIATOR           ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F3.1 Dash ║ Widget-tile grid  ║ Priority-adaptive ║ Fixed multi-zone  ║     ║
║ F3.2 Stat ║ Scrolling ticker  ║ Icon status matrix║ Mirrored KPI bar  ║     ║
║ F3.3 Alrt ║ Simultaneous      ║ Escalating cascade║ Context-aware     ║     ║
║           ║ multi-channel     ║                   ║ routing           ║     ║
║ F3.4 LED  ║ Dedicated per-agt ║ Encoded multiplex ║ LED+display co-   ║     ║
║           ║                   ║                   ║ indication        ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F4 — CAPTURE DECISION (AICC Soul, 23% reuse) ★ SAFETY-BOUNDED              ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F4.1 Detc ║ GPIO direct read  ║ I2C I/O expander  ║ HW interrupt-     ║     ║
║           ║                   ║                   ║ driven            ║     ║
║ F4.2 Intr ║ Fixed function    ║ State-dependent   ║ Layered + visual  ║     ║
║           ║ mapping           ║ mapping           ║ guide             ║     ║
║ F4.3 Vald ║ Timeout-guarded   ║ Two-step preview  ║ Graduated         ║     ║
║           ║ single action     ║ → confirm         ║ difficulty        ║     ║
║ F4.4 Tran ║ CDM direct   [IM] ║ Abstracted broker  ║                   ║     ║
║           ║                   ║ [SA]              ║                   ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F5 — MANAGE RESOURCES (Plug-in, 70% reuse)                                 ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F5.1 Powr ║ Single-rail buck  ║ Multi-rail PMIC   ║                   ║     ║
║ F5.2 Hlth ║ OS health daemon  ║ HW watchdog+daemon║                   ║     ║
║           ║ [IM]              ║                   ║                   ║     ║
║ F5.3 Conf ║ File-based static ║ Runtime KV store  ║                   ║     ║
║ F5.4 Falt ║ Immediate halt-all║ Graduated degrade ║ Watchdog+recovery ║     ║
╚═══════════╩═══════════════════╩═══════════════════╩═══════════════════╩═════╝
```

---

## 5. SOLUTION PRINCIPLE COUNT SUMMARY

| Group | Subfunctions | Total SPs | Avg SPs/Function | Variation Level |
|---|---|---|---|---|
| F1 — Receive & Filter | 3 | 6 | 2.0 | Low (constrained) |
| F2 — Process & Assess | 3 | 10 | 3.3 | **High** |
| F3 — Present to Human | 4 | 12 | 3.0 | **High** |
| F4 — Capture Decision | 4 | 10 | 2.5 | Medium (safety-bounded) |
| F5 — Manage Resources | 4 | 9 | 2.3 | Low (constrained) |
| **TOTAL** | **18** | **47** | **2.6** | |

Theoretical combination space: 2×2×2 × 3×3×4 × 3×3×3×3 × 3×3×3×2 × 2×2×2×3 = **~25 million** combinations

After applying compatibility constraints (Section 3): **practical space ≈ 50-100** feasible combinations → will select **3-4 representative concept variants** in next step.

---

## 6. CONCEPT VARIANTS (P&B §6.5.2 — Combining Solution Principles)

### 6.1 Combination Strategy

Three concept variants generated, each with:
- A **unique F2.3 keystone** (state machine architecture) that drives the variant's character
- A **distinct design philosophy** targeting different evaluation criteria
- **Full internal compatibility** verified against Section 3 constraints

| Variant | Codename | F2.3 Keystone | Philosophy | Primary Optimization Target |
|---|---|---|---|---|
| **A** | Platform Express | Flat FSM (SP-B) | Speed through simplicity | C6 IRONMESH Reuse, C11 Speed, C10 Cost |
| **B** | Autonomous Architect | Hierarchical SM (SP-A) | Independence through abstraction | C7 Standalone, C8 Scalability, C9 Extensibility |
| **C** | Defense Sentinel | Dual-track FSM (SP-D) | Safety through separation | C2 Safety, C5 Testability, C4 Auditability |

A 4th variant using F2.3-C (Actor model) was evaluated and **rejected** — see Section 7.

---

### 6.2 VARIANT A: "PLATFORM EXPRESS"

> *Maximum IRONMESH reuse. Fastest to build. Simplest architecture. Deploy earliest, learn earliest.*

**Keystone:** F2.3-B Flat FSM — single-level transition table, O(1) lookup, fully enumerable states, simplest to implement and audit.

**Design principle:** Every choice defaults to the simpler, more proven option. Where IRONMESH provides a solution, use it without modification. New development only where AICC-specific function demands it.

| Sub-fn | Selected SP | Tag | Selection Rationale |
|---|---|---|---|
| F1.1 | **SP-A:** Native message bus | [IM] | 100% IRONMESH reuse, zero new development |
| F1.2 | **SP-A:** Rule-table classifier | [HY] | Deterministic, fast; IRONMESH CDM parser reusable (80%) |
| F1.3 | **SP-A:** Priority-lane ring buffer | [HY] | Predictable memory, proven pattern |
| F2.1 | **SP-C:** Hybrid poll + heartbeat | [HY] | Detects silent agent failures via heartbeat; simple implementation |
| F2.2 | **SP-A:** Static priority matrix | [HY] | O(1) lookup, deterministic, zero tuning; auditable |
| F2.3 | **SP-B:** Flat FSM ★ | [HY] | **Keystone.** Simplest, fastest to implement, fully testable, best safety path O(1) |
| F3.1 | **SP-C:** Fixed multi-zone layout | [HY] | Most predictable for operator; lowest cognitive load; aligns with flat FSM simplicity |
| F3.2 | **SP-B:** Icon status matrix | [HY] | Compact, at-a-glance; low SPI bandwidth |
| F3.3 | **SP-A:** Simultaneous multi-channel | [HY] | Simplest alert implementation; all modalities fire at once |
| F3.4 | **SP-A:** Dedicated per-agent LED | [HY] | 1:1 mapping, zero ambiguity |
| F4.1 | **SP-B:** I2C I/O expander | [HY] | Centralized, scales on IRONMESH I2C bus, minimal wiring |
| F4.2 | **SP-B:** State-dependent mapping | [HY] | More functions per button; flat FSM provides clear state context |
| F4.3 | **SP-B:** Two-step sequential | [HY] | Proven preview → confirm pattern; meets SF.05 directly |
| F4.4 | **SP-A:** CDM direct command | [IM] | Maximum reuse, proven reliability |
| F5.1 | **SP-A:** Single-rail buck | [HY] | Simple, fewer failure modes |
| F5.2 | **SP-A:** OS health daemon | [IM] | 100% IRONMESH reuse |
| F5.3 | **SP-A:** File-based static config | [HY] | Predictable, debuggable |
| F5.4 | **SP-B:** Graduated degradation | [HY] | Better availability than immediate halt-all |

**Compatibility verification:**
- ✅ C1 (E-stop): I2C poll ~20ms + two-step bypass + CDM ~50ms = ~70ms ≤ 200ms
- ✅ C2 (State context): Flat FSM provides accessible state query for F4.2 state-dependent mapping
- ✅ C4 (CDM dependency): F1.1-A + F4.4-A = IRONMESH hard dependency. Standalone fallback = deferred (accepted tradeoff)
- ✅ S2 (Cognitive): Fixed zones (low load) + state-dependent mapping (some ambiguity) = manageable
- ✅ S4 (IRONMESH cluster): F1.1-A + F4.4-A + F5.2-A = coherent native cluster

**Estimated IRONMESH reuse: ~65%** (all F1, F4.4, F5.1, F5.2 from IRONMESH; F2/F3/F4 core = new)

**Expected scoring profile:**
```
              LOW ◄─────────────────────► HIGH
C1  Function  ├───────────████████░░░░░░░░┤  Adequate (flat FSM limits complex workflows)
C2  Safety    ├───────────████████░░░░░░░░┤  Good (proven code, but no HW interrupt, no defense-in-depth WDT)
C3  Cog.Load  ├───────────██████████░░░░░░┤  Good (fixed zones + simple alerts)
C4  Audit     ├───────────██████████░░░░░░┤  Good (flat FSM = fully traceable)
C5  Test      ├───────────██████████░░░░░░┤  Good (flat = enumerable, but no BIST)
C6  Reuse     ├───────────████████████░░░░┤  Very Good (~65% reuse)
C7  Standalone├───████░░░░░░░░░░░░░░░░░░░░┤  Low (CDM-dependent, no broker)
C8  Scale     ├───████████░░░░░░░░░░░░░░░░┤  Adequate (flat FSM state explosion at N>8)
C9  Extend    ├───████████░░░░░░░░░░░░░░░░┤  Adequate (fixed zones need redesign per form factor)
C10 Cost      ├───────────████████████░░░░┤  Very Good (minimal BOM, max reuse)
C11 Speed     ├───────────██████████████░░┤  Excellent (fastest to prototype)
```

---

### 6.3 VARIANT B: "AUTONOMOUS ARCHITECT"

> *Protocol-agnostic. Extensible by design. Future-proof architecture. IRONMESH is optional, not required.*

**Keystone:** F2.3-A Hierarchical State Machine (HSM) — nested states with inheritance, concurrent regions for multi-agent tracking, structured complexity with good auditability via hierarchy trace.

**Design principle:** Every choice defaults to the most abstracted, protocol-independent option. Build for the market beyond IRONMESH. Accept higher development cost as investment in platform longevity and addressable market.

| Sub-fn | Selected SP | Tag | Selection Rationale |
|---|---|---|---|
| F1.1 | **SP-B:** Generic pub/sub broker | [SA] | Protocol-agnostic; CDM via adapter; any other protocol also supported |
| F1.2 | **SP-B:** Pipeline filter chain | [HY] | Pluggable filter modules; extensible for new agent types/protocols |
| F1.3 | **SP-B:** Time-expiring priority queue | [HY] | Auto-discards stale data; cleaner under variable-load conditions |
| F2.1 | **SP-B:** Event-driven incremental | [HY] | Lower CPU; natural fit with pub/sub event model |
| F2.2 | **SP-B:** Multi-factor weighted scoring | [HY] | Dynamic priority; adaptable to different agent types and mission profiles |
| F2.3 | **SP-A:** Hierarchical SM (HSM) ★ | [HY] | **Keystone.** Concurrent regions handle N agents without state explosion; nested states reduce transition complexity; hierarchy trace for audit |
| F3.1 | **SP-A:** Widget-tile grid | [HY] | Composable, display-size-agnostic; add widgets for N agents; extensible |
| F3.2 | **SP-C:** Mirrored KPI bar | [HY] | Always-visible critical metrics; no scrolling; complements widget grid |
| F3.3 | **SP-C:** Context-aware alert routing | [HY] | Adapts to environment (day/night/noise); most sophisticated UX |
| F3.4 | **SP-C:** LED + display co-indication | [HY] | Redundant channels; defense-in-depth awareness |
| F4.1 | **SP-C:** Hardware interrupt-driven | [HY] | Lowest E-stop latency (<1ms); defense-grade input |
| F4.2 | **SP-C:** Layered mapping + visual guide | [HY] | Maximum flexibility + clarity; on-screen labels prevent wrong-button errors |
| F4.3 | **SP-C:** Graduated confirmation difficulty | [HY] | Consequence-proportional; most nuanced safety approach |
| F4.4 | **SP-B:** Abstracted command broker | [SA] | Multi-protocol; CDM is one option among many |
| F5.1 | **SP-B:** Multi-rail PMIC | [HY] | Production-optimized; proper power sequencing for complex system |
| F5.2 | **SP-B:** HW watchdog + daemon | [HY] | Defense-in-depth; hardware safety net |
| F5.3 | **SP-B:** Runtime KV store | [HY] | Live mode switching; no-reboot reconfiguration |
| F5.4 | **SP-C:** Watchdog + auto-recovery | [HY] | Attempt recovery before halt; maximizes uptime |

**Compatibility verification:**
- ✅ C1 (E-stop): HW interrupt <1ms + graduated bypass + broker ~80ms = ~81ms ≤ 200ms
- ✅ C2 (State context): HSM provides rich state hierarchy queryable by F4.2 layered mapping
- ✅ No C4 conflict: F1.1-B + F4.4-B = fully standalone, no IRONMESH dependency
- ✅ S2 (Cognitive): Widget grid (moderate load) + visual guide (compensates) = balanced
- ✅ S3 (Alert-action): Context-aware routing + graduated confirmation = both adapt to situation

**Estimated IRONMESH reuse: ~25%** (only via pub/sub CDM adapter + partial F5 reuse)

**Expected scoring profile:**
```
              LOW ◄─────────────────────► HIGH
C1  Function  ├───────────████████████░░░░┤  Very Good (HSM handles complex workflows)
C2  Safety    ├───────────████████░░░░░░░░┤  Good (HW interrupt + WDT, but HSM harder to exhaustively verify)
C3  Cog.Load  ├───────────████████░░░░░░░░┤  Good (visual guide helps, but widget grid + context-aware = more to learn)
C4  Audit     ├───────────██████░░░░░░░░░░┤  Adequate (HSM hierarchy trace good, but nested state = longer audit chains)
C5  Test      ├───────────██████░░░░░░░░░░┤  Adequate (nested states harder to enumerate exhaustively)
C6  Reuse     ├───████░░░░░░░░░░░░░░░░░░░░┤  Low (~25% reuse; most infrastructure rebuilt)
C7  Standalone├───────────████████████████┤  Excellent (zero IRONMESH dependency)
C8  Scale     ├───────────██████████████░░┤  Very Good (HSM concurrent regions, widget grid scales)
C9  Extend    ├───────────██████████████░░┤  Very Good (abstracted everywhere)
C10 Cost      ├───────████████░░░░░░░░░░░░┤  Adequate (more hardware, more custom code)
C11 Speed     ├───████████░░░░░░░░░░░░░░░░┤  Low-Adequate (most new development, longest to prototype)
```

---

### 6.4 VARIANT C: "DEFENSE SENTINEL"

> *Safety and verifiability above all. Every choice answers: "Can we PROVE this system is safe?" Designed for defense procurement where safety certification is the gate.*

**Keystone:** F2.3-D Dual-track synchronized FSM — two parallel flat state machines: Operator FSM (human workflow state) and System FSM (agent aggregate state). Each is simple and independently testable. Synchronization protocol defines their interaction points. Separation ensures operator cannot be put in an invalid state by agent behavior, and vice versa.

**Design principle:** Provable correctness over elegance. Deterministic behavior over flexibility. Proven components where safety demands it; purpose-built components where existing solutions are unverifiable. Hardware safety mechanisms as backstop for software.

| Sub-fn | Selected SP | Tag | Selection Rationale |
|---|---|---|---|
| F1.1 | **SP-A:** Native message bus | [IM] | Proven, field-tested, known failure modes; safety = proven code |
| F1.2 | **SP-A:** Rule-table classifier | [HY] | Deterministic, fully auditable; every classification traceable |
| F1.3 | **SP-A:** Priority-lane ring buffer | [HY] | Predictable memory; no GC or allocation surprises |
| F2.1 | **SP-C:** Hybrid poll + heartbeat | [HY] | Heartbeat = active liveness detection; catches silent failures that pure events miss |
| F2.2 | **SP-C:** Threshold escalation ladder | [HY] | Clear escalation path (info→warn→critical→emergency); each transition auditable; auto-escalation catches unacknowledged alerts |
| F2.3 | **SP-D:** Dual-track FSM ★ | [HY] | **Keystone.** Operator FSM + System FSM run in parallel. Each is a flat FSM (fully testable independently). Sync protocol = defined interaction points. Operator state independent of agent state → safer |
| F3.1 | **SP-C:** Fixed multi-zone layout | [HY] | Critical info always in same place; reduces misread under stress |
| F3.2 | **SP-B:** Icon status matrix | [HY] | At-a-glance symbolic; minimal interpretation |
| F3.3 | **SP-B:** Escalating cascade | [HY] | Visual → audio → haptic progression; reduces alert fatigue; gives operator time to notice; **S3 synergy** with F4.3-C graduated confirmation |
| F3.4 | **SP-A:** Dedicated per-agent LED | [HY] | 1:1 mapping; hardware indicator visible even if display fails; safety backup |
| F4.1 | **SP-C:** Hardware interrupt-driven | [HY] | Fastest E-stop (<1ms); dedicated debounce circuit; safety path starts at hardware |
| F4.2 | **SP-C:** Layered mapping + visual guide | [HY] | Reduces wrong-button risk; on-screen labels = operator confirms intent before action |
| F4.3 | **SP-C:** Graduated confirmation difficulty | [HY] | Consequence-proportional: info=single, warn=two-step, critical=two-step+hold, E-stop=immediate. **S3 synergy** with F3.3-B escalating cascade |
| F4.4 | **SP-A:** CDM direct command | [IM] | Proven transmission; known latency; safety path uses proven code |
| F5.1 | **SP-A:** Single-rail buck | [HY] | Fewer failure modes; simpler power = fewer safety-relevant components |
| F5.2 | **SP-B:** HW watchdog + daemon | [HY] | **Defense-in-depth:** hardware WDT resets if daemon hangs; critical for SF.01 |
| F5.3 | **SP-A:** File-based static config | [HY] | No runtime config changes = no accidental mid-operation reconfiguration |
| F5.4 | **SP-C:** Watchdog + auto-recovery | [HY] | HW WDT → software recovery attempt → if fail → halt-all; maximizes safety window |

**Compatibility verification:**
- ✅ C1 (E-stop): HW interrupt <1ms + graduated E-stop bypass + CDM ~50ms = ~51ms ≤ 200ms (**fastest path**)
- ✅ C2 (State context): Dual-track operator FSM provides clear state for F4.2 layered mapping
- ✅ C4 (CDM dependency): F1.1-A + F4.4-A = IRONMESH-dependent. Standalone = limited (accepted: safety > independence)
- ✅ S2 (Cognitive): Fixed zones (low load) + visual guide (clarity) = lowest error rate
- ✅ S3 (Alert-action synergy): Escalating cascade (F3.3-B) + graduated confirmation (F4.3-C) = **matching escalation metaphors** — operator experiences coherent "increasing urgency" across alert and action channels
- ✅ S4 (IRONMESH cluster): F1.1-A + F4.4-A = proven native cluster for safety-critical path

**Estimated IRONMESH reuse: ~55%** (F1 + F4.4 + F5.1 from IRONMESH; F2/F3/F4 core = new but uses proven I/O patterns)

**Expected scoring profile:**
```
              LOW ◄─────────────────────► HIGH
C1  Function  ├───────────████████████░░░░┤  Very Good (dual-track handles complex workflows + separation)
C2  Safety    ├───────────██████████████░░┤  Excellent (HW interrupt + dual-track + WDT + graduated confirm)
C3  Cog.Load  ├───────────██████████░░░░░░┤  Good (fixed zones + visual guide + coherent escalation metaphor)
C4  Audit     ├───────────████████████████┤  Excellent (two flat FSMs = fully traceable; every transition logged)
C5  Test      ├───────────████████████████┤  Excellent (each FSM independently testable; sync protocol verifiable)
C6  Reuse     ├───────────████████░░░░░░░░┤  Good (~55% reuse; proven code for safety-critical paths)
C7  Standalone├───████░░░░░░░░░░░░░░░░░░░░┤  Low (CDM-dependent; safety priority > independence)
C8  Scale     ├───────████████░░░░░░░░░░░░┤  Adequate (dual-track adds sync overhead per agent group)
C9  Extend    ├───────████████░░░░░░░░░░░░┤  Adequate (fixed zones + CDM coupling limit flexibility)
C10 Cost      ├───────────████████░░░░░░░░┤  Good (HW interrupt debounce circuit adds BOM, but overall moderate)
C11 Speed     ├───────████████░░░░░░░░░░░░┤  Adequate (dual-track FSM + sync protocol = moderate new development)
```

---

### 6.5 VARIANT PATH VISUALIZATION

Solution principle selections traced through the morphological matrix:

```
╔══════════════════════════════════════════════════════════════════════════════╗
║  VARIANT PATHS THROUGH MORPHOLOGICAL MATRIX                                 ║
║                                                                             ║
║  ─── A: Platform Express    ═══ B: Autonomous Architect    ─·─ C: Defense   ║
║                                                             Sentinel        ║
╠═══════════╦═══════════════════╦═══════════════════╦═══════════════════╦═════╣
║ Sub-fn    ║     SP-A          ║     SP-B          ║     SP-C          ║ SP-D║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║           ║                   ║                   ║                   ║     ║
║ F1.1 Recv ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
║ F1.2 Filt ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
║ F1.3 Buff ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F2.1 Aggr ║                   ║                   ║ ──A── ═══B═══     ║     ║
║           ║                   ║                   ║       ──C──       ║     ║
║ F2.2 Asse ║ ──A──             ║                   ║           ──C──   ║     ║
║           ║                   ║ ═══B═══           ║                   ║     ║
║ F2.3 ★KEY ║                   ║ ──A──             ║                   ║     ║
║           ║ ═══B═══           ║                   ║                   ║──C──║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F3.1 Dash ║ ═══B═══           ║                   ║ ──A── ──C──       ║     ║
║ F3.2 Stat ║                   ║ ──A── ──C──       ║           ═══B═══ ║     ║
║ F3.3 Alrt ║ ──A──             ║                   ║       ──C──       ║     ║
║           ║                   ║                   ║ ═══B═══           ║     ║
║ F3.4 LED  ║ ──A── ──C──       ║                   ║ ═══B═══           ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F4.1 Detc ║                   ║ ──A──             ║ ═══B═══ ──C──     ║     ║
║ F4.2 Intr ║                   ║ ──A──             ║ ═══B═══ ──C──     ║     ║
║ F4.3 Vald ║                   ║ ──A──             ║ ═══B═══ ──C──     ║     ║
║ F4.4 Tran ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
╠═══════════╬═══════════════════╬═══════════════════╬═══════════════════╬═════╣
║ F5.1 Powr ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
║ F5.2 Hlth ║ ──A──             ║ ═══B═══ ──C──     ║                   ║     ║
║ F5.3 Conf ║ ──A── ──C──       ║ ═══B═══           ║                   ║     ║
║ F5.4 Falt ║                   ║ ──A──             ║ ═══B═══ ──C──     ║     ║
╚═══════════╩═══════════════════╩═══════════════════╩═══════════════════╩═════╝

VARIANT PATHS SUMMARY:
  A (Platform Express):    14 SP-A, 3 SP-B, 1 SP-C, 0 SP-D  → Clusters left
  B (Autonomous Architect): 0 SP-A, 6 SP-B, 12 SP-C, 0 SP-D → Clusters right
  C (Defense Sentinel):     8 SP-A, 2 SP-B, 5 SP-C, 1 SP-D  → Spans wide
```

---

### 6.6 VARIANT COMPARISON MATRIX

| Dimension | A: Platform Express | B: Autonomous Architect | C: Defense Sentinel |
|---|---|---|---|
| **F2.3 Keystone** | Flat FSM | Hierarchical SM | Dual-track FSM |
| **Philosophy** | Speed through simplicity | Independence through abstraction | Safety through separation |
| **IRONMESH reuse** | ~65% | ~25% | ~55% |
| **Standalone?** | No (CDM-dependent) | Yes (protocol-agnostic) | No (CDM for safety) |
| **E-stop latency** | ~70ms (I2C poll) | ~51ms (HW interrupt) | ~51ms (HW interrupt) |
| **State testability** | Excellent (flat = enumerable) | Adequate (nested = harder) | Excellent (two flat FSMs) |
| **Agent scalability** | Limited (state explosion >8) | Good (concurrent regions) | Moderate (sync overhead) |
| **Display flexibility** | Low (fixed zones) | High (widget grid) | Low (fixed zones) |
| **Alert philosophy** | Simultaneous blast | Context-adaptive | Escalating cascade |
| **Confirmation approach** | Two-step preview | Graduated difficulty | Graduated difficulty |
| **Unique strength** | Fastest to market | Broadest market | Highest safety confidence |
| **Unique weakness** | Standalone = none | Slowest to build | Scalability limited |
| **Est. dev time** | 3–5 weeks | 10–14 weeks | 6–9 weeks |
| **Est. BOM delta** | Baseline ($0) | +$10–15 (PMIC, debounce) | +$3–5 (debounce circuit) |
| **New code estimate** | ~35% of total codebase | ~75% of total codebase | ~50% of total codebase |

---

## 7. REJECTED VARIANT: ACTOR MODEL (F2.3-C)

### 7.1 Why It Was Considered

F2.3-C (Event-driven actor model) offers **best-in-class scalability**: each agent gets an independent state actor, actors communicate via messages, no global state machine. Scales linearly with N agents.

### 7.2 Why It Was Rejected

Per compatibility constraint **C3** from Section 3.1:

> "Actor model (F2.3-C) has no global state to query for confirmation validation"

**Critical conflict with AICC essential problem:**

1. **F4.3 (Validate & confirm decision)** needs to check: "Is this decision valid in the CURRENT system state?" The actor model has no single queryable "current state" — state is distributed across actors.

2. **Auditability (C4):** Distributed state = harder to reconstruct decision context. "What was the system state when the operator pressed approve?" requires aggregating actor states, introducing timing ambiguity.

3. **Testability (C5):** Emergent behavior from actor interactions is difficult to exhaustively verify. For a safety-critical HITL system, "we can't enumerate all possible states" is disqualifying.

4. **AICC's core function is centralized human authority over distributed agents.** The actor model decentralizes the very thing AICC is designed to centralize. The architectural metaphor conflicts with the product purpose.

**Bottom line:** The actor model is excellent for autonomous multi-agent coordination (where no human is in the loop). It's fundamentally misaligned with a system whose essential problem is providing **dedicated human decision authority** over agents.

---

## 8. NEXT STEP: VDI 2225 EVALUATION

### 8.1 Evaluation Ready

The three concept variants are now ready to be scored using the VDI 2225 evaluation framework (VN-AICC-001-P2-S3-v1.0):

- **11 criteria** with approved weights (Safety #1 at 0.175)
- **0–4 scoring rubric** per criterion
- **Blank evaluation matrix** template
- **Sensitivity check** template

### 8.2 Expected Differentiation

Based on the expected scoring profiles, the variants should separate primarily on:

| Criterion | Most Likely Winner | Most Likely Loser |
|---|---|---|
| C2: Safety (0.175) | **C: Defense Sentinel** | A: Platform Express |
| C6: IRONMESH Reuse (0.088) | **A: Platform Express** | B: Autonomous Architect |
| C7: Standalone (0.063) | **B: Autonomous Architect** | A & C (tied low) |
| C11: Dev Speed (0.125) | **A: Platform Express** | B: Autonomous Architect |

The evaluation will reveal whether Safety's 0.175 weight is enough to overcome Speed's 0.125 advantage for Variant A, or whether the balanced profile of Variant C carries the day.

---

*Document ID: VN-AICC-001-P2-S2-v1.0*
*Method: P&B §6.5 — Morphological Matrix + §6.5.2 Combining Solution Principles*
*Status: ✅ COMPLETE — Matrix + 3 Concept Variants defined*
*Next: VDI 2225 evaluation using framework VN-AICC-001-P2-S3-v1.0*
