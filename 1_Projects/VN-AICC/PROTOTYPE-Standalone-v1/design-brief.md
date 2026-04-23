---
created: 2026-03-05
updated: 2026-03-05
type: project
status: active
tags: [#type/project, #status/active]
---

# PROTOTYPE-AICC-Standalone-v1 — Design Brief

## Purpose
One-time circuit breaker to validate CM4 inference latency and break AICC-CORTEX circular dependency.
This is NOT a pivot from Musk Sequence — BB-01 remains #1. This is a time-boxed sprint.

## Critical Assumption to Validate
**CM4 inference latency** — can Raspberry Pi CM4 run the target AI model within acceptable latency for real-time coaching feedback?

## Scope (Standalone = No CORTEX dependency)
- CM4 board + camera module + minimal enclosure
- Single use case: one coaching scenario (e.g., marksmanship stance detection)
- Local inference only — no cloud, no ecosystem integration
- Success = measured latency number, not a product

## What This Is NOT
- Not a full AICC product prototype
- Not an IRONMESH ecosystem component
- Not Phase 3 embodiment — this is a **physical validation spike**

## Time Box
- Target: 2-4 weeks elapsed
- Exit condition: CM4 latency measured and documented → back to BB-01

## Physical Milestones
| # | Milestone | Target Date | Status |
|---|-----------|-------------|--------|
| 1 | CM4 + camera module acquired | TBD | pending |
| 2 | Test model deployed on CM4 | TBD | pending |
| 3 | Latency benchmark completed | TBD | pending |
| 4 | Decision: CM4 viable Y/N documented | TBD | pending |

## dP/dt Target
- 1 iteration (this is a single-shot validation, not iterative development)

## Decision After Sprint
- If CM4 viable → AICC architecture confirmed, park until Musk Sequence reaches it
- If CM4 not viable → pivot to alternative compute (Jetson Nano? cloud hybrid?) — document as design decision

## Link to Musk Sequence
This sprint is explicitly authorized as a circuit breaker exception to serial development.
BB-01 remains Musk Sequence #1. AICC standalone is not "starting AICC early" — it is "killing the biggest unknown before it blocks everything later."
