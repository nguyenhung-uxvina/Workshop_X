---
created: 2026-02-01
updated: 2026-04-09
type: product-proposal
method: Pahl & Beitz §3.1
version: v1.0
project: VN-AICC
status: approved
gate0: PASS (conditional — CM4 latency sprint)
feeds_to:
  - FORGE: /shift (ACH assessment), /portfolio
  - HELIX: Phase 1 done, Phase 2 done, Phase 3 paused
note: "Retroactive v3.0 schema. Solution-neutral enforcement applied."
---

# Product Proposal — VN-AICC (AI Command & Control Console)

═══════════════════════════════════════════════════════

## 1. Intended Functions (solution-neutral)

**Primary:**
- Provide a dedicated physical interface for human operators to monitor autonomous AI systems
- Enable human decision authority over AI-recommended actions with confirmation workflow
- Maintain an auditable record of all human decisions and AI recommendations

**Secondary:**
- Present real-time situational awareness from multiple AI agents simultaneously
- Escalate alerts through multi-sensory cascade to reduce operator fatigue
- Provide emergency override capability for immediate system intervention

**Auxiliary:**
- Support over-the-air software updates for field-deployed units
- Monitor own system health and degrade gracefully under component failure

> **Solution-neutral check:** Zero technology names (no CM4, no IRONMESH, no LoRa). Functions describe WHAT, not HOW. ✓

## 2. Preliminary Requirements (top 15, solution-neutral)

| # | Category | Requirement | D/W | Target Value |
|---|----------|------------|-----|-------------|
| R1 | Latency | Emergency override response time | D | ≤ 200ms |
| R2 | Capacity | Simultaneous AI agent monitoring | D | ≥ 4 agents |
| R3 | Operation | Continuous operation without restart | D | ≥ 24 hours |
| R4 | Startup | Boot to operational state | D | ≤ 30 seconds |
| R5 | Safety | Hardware-level emergency stop | D | Independent of software state |
| R6 | Audit | Decision logging with timestamp and context | D | 100% decisions captured |
| R7 | Environment | Operating temperature range | D | -10°C to +55°C |
| R8 | Durability | Ingress protection for field deployment | W | IP65 minimum |
| R9 | Power | Operate from standard field power sources | D | 12-48V DC input |
| R10 | Display | Present multi-agent status simultaneously | D | ≥ 4 zones visible |
| R11 | Input | Positive confirmation for high-severity actions | D | Physical button + visual confirm |
| R12 | Alert | Multi-sensory escalation for operator attention | W | Visual + audio + haptic |
| R13 | Cost | Unit cost competitive for volume deployment | D | ≤ $500 (field variant) |
| R14 | Update | Remote software update without physical access | W | OTA capable |
| R15 | Degradation | Graceful degradation under component failure | D | Core functions maintained |

## 3. Cost Target + Production Volume

| Field | Value | Evidence |
|-------|-------|---------|
| Unit BOM range | $50-400 (varies by form factor) | [L5-ASSUMPTION] |
| Retail price range | $99-899 (4 form factors) | [L5-ASSUMPTION] |
| Target margin | 50-60% | [L5-ASSUMPTION] |
| Production volume Y1 | ~77 units | [L5-ASSUMPTION] |
| Production volume Y3 | ~345 units | [L5-ASSUMPTION] |
| Local content | ~55-65% (enclosure, assembly, SW) | [L5-ASSUMPTION] |
| Development NRE | ~$30-50K total across 4 variants | [L5-ASSUMPTION] |
| Recurring revenue | IRONMESH OS subscription $3-10K/yr/unit | [L5-ASSUMPTION] |

## 4. Working Principle Suggestions (OPTIONS only)

### 4a. Compute Platform
| Option | Advantage | Risk |
|--------|-----------|------|
| Single-board computer (SBC) with AI accelerator | Low cost, small form factor, proven ecosystem | AI inference latency unvalidated for real-time use |
| Industrial embedded PC | High reliability, wide I/O, certified | Higher cost, larger form factor |
| FPGA-based | Deterministic latency, customizable | Higher NRE, specialized skills needed |

### 4b. State Machine Architecture
| Option | Advantage | Risk |
|--------|-----------|------|
| Dual-track FSM (operator + system) | Clear separation of human vs AI state, auditable | Implementation complexity, synchronization |
| Single unified FSM | Simpler implementation, faster development | Human and system states entangled |
| Event-driven (no explicit FSM) | Flexible, handles unexpected scenarios | Less auditable, harder to certify |

### 4c. Safety Architecture
| Option | Advantage | Risk |
|--------|-----------|------|
| Hardware interrupt E-stop + watchdog | Sub-millisecond response, independent of SW | Additional HW cost, board complexity |
| Software-only safety | Simpler HW, lower cost | SW failure = safety failure |
| Redundant dual-channel | Highest safety, certifiable to SIL | Double cost, double complexity |

### 4d. Form Factor Strategy
| Option | Advantage | Risk |
|--------|-----------|------|
| Multi form-factor family (desk → field → rack) | Addressable market maximized, platform reuse | Development effort × N form factors |
| Single universal form factor | Lowest NRE, simplest logistics | Compromise: too big for desk, too fragile for field |
| Modular core + swappable shells | Best of both: one electronics, many enclosures | Shell interface adds engineering |

## 5. Risk Assessment + Fallbacks

| # | Risk | P | I | Fallback |
|---|------|---|---|---------|
| R1 | CM4 inference latency too high for real-time | MED | HIGH | Switch to Hailo-8 accelerator; or move inference to server-side |
| R2 | IRONMESH ecosystem not mature enough | MED | HIGH | AICC as standalone with REST API (decouple from IRONMESH) |
| R3 | Military certification complexity (EMC, MIL-STD) | MED | MED | Start with MAKER/PRO (no mil cert); add TAC/RACK when proven |
| R4 | AICC-CORTEX circular dependency | HIGH | MED | Circuit breaker: standalone prototype validates independently |
| R5 | UX complexity for military operators | MED | MED | Fixed multi-zone layout (no customization = simpler learning) |
| R6 | Solo engineer capacity for 4 form factors | HIGH | MED | Sequential: MAKER → PRO → TAC → RACK. Only 1 active at a time. |

## 6. Sacred Constraints

| # | Constraint | Basis |
|---|-----------|-------|
| SC-1 | Human must have physical override independent of software state | Safety: software failure must not prevent emergency stop |
| SC-2 | Every AI-recommended action must have human confirmation before execution | Accountability: military requires human-in-the-loop for weapon/mission decisions |
| SC-3 | All decisions must be logged with full context for audit | Compliance: military procurement requires accountability trail |
| SC-4 | System must degrade gracefully, never fail silently | Safety: operator must always know system state |

> **Sacred constraint check:** All based on safety/accountability/compliance — zero technology names. ✓

## 7. Gate 0 Result

| Gate | Result | Date | Score |
|------|--------|------|-------|
| Gate 0 | **PASS** (conditional — CM4 latency sprint) | 2026-02 (retroactive) | — |
| Gate 1 | **PASS** (Quality Gate) | 2026-02 | — |
| Gate 2 | **PASS** (Hybrid C+ 0.730) | 2026-02 | 0.730 |

═══════════════════════════════════════════════════════

*Product Proposal v1.0 | VN-AICC | P&B §3.1 solution-neutral | 2026-04-09*
