---
project: VN-RANGE-001
type: deployment-state (Master Agent external state — FR-01 fix)
deployment_id: DEP-VNR-001
customer: Trường bắn Suối Hai — E12/D3, SĐ 302, Ba Vì, Hà Nội
scope: CORTEX RANGE P0 (CDM) + P1 (SCOREBOARD + PULSE)
version: 1.0
created: 2026-02-20
updated: 2026-02-20
status: PHASE_A_IN_PROGRESS
read_when: Session open — before any routing or Task() delegation
---

# VN-RANGE-001 — Deployment State Tracker

> **Master Agent reads this file at every session start.**
> This IS the deployment state. If it's not in this file, it doesn't exist.
>
> Update protocol: after EVERY step completion or HITL decision, update this file BEFORE proceeding.

---

## Current State

| Field | Value |
|-------|-------|
| **current_step** | PHASE_A_COMPLETE — awaiting Phase B |
| **phase** | A → B transition |
| **status** | PHASE_A_COMPLETE |
| **HITL_pending** | NONE |
| **blockers** | F1 (power outlets) — POC action item before install |
| **last_updated** | 2026-02-20 |

---

## Completed Steps

| Step | Result | HITL Decision | Timestamp | Notes |
|------|--------|--------------|-----------|-------|
| A1 | COMPLETE — 5 flags (1 HIGH, 3 MED, 1 LOW) | A1-H: APPROVED | 2026-02-20 | F1 power outlets = POC action item |
| A2 | COMPLETE — BOM $5,776 cost / $25K price / 77% margin | A2-H: APPROVED+SEND | 2026-02-20 | Contract + BOM sent to POC |
| A3 | COMPLETE — full config spec, 10 sensors + EDGE + network + calibration | A3-H: APPROVED→FAT | 2026-02-20 | Config ready for flash |
| A4 | FAT PASS — 44/45 checks pass, T22 (4G SIM) deferred to on-site | A4-H: FAT PASS | 2026-02-20 | FAT certificate signed, shipping approved |
| A5 | COMPLETE — packing list verified, pre-arrival sent to POC | No HITL (routine) | 2026-02-20 | Equipment shipped to Ba Vì |

---

## Gate Status

| Gate | Status | Signatories | Date | Notes |
|------|--------|------------|------|-------|
| B11 — Installation Complete | PENDING | KN + Commander | — | — |
| C15 — System Validation | PENDING | KN + Range Command | — | — |
| C18 — Go-Live Authorization | PENDING | Commander (sole) | — | — |

---

## Flags / Anomalies

| # | Step | Severity | Description | Resolution | Status |
|---|------|----------|-------------|------------|--------|
| F1 | A1 | HIGH | Only 2 power outlets at firing line — need 5 for 10 lanes | POC installs 3 more before install OR battery fallback | OPEN — POC action |
| F2 | A1 | MEDIUM | No cable conduit — exposed cable run | Route along roof edge + cable protectors in BOM | RESOLVED — H05 in BOM |
| F3 | A1 | MEDIUM | Adjacent range 200m — acoustic interference risk | Schedule C12 calibration when neighbor range is cold | OPEN — C12 planning |
| F4 | A1 | MEDIUM | 4G signal "average" for commander remote view | Include 4G modem + external antenna in BOM; test on-site | RESOLVED — H12 in BOM; on-site test at B6 |
| F5 | A1 | LOW | No power at target line | Not needed for P0-P1; flag for P2 OVERWATCH | DEFERRED — P2 |
| F6 | A4 | LOW | T22 4G modem: no SIM at FAT — SIM configured on-site | Insert Viettel SIM at B6 on-site prerequisites | OPEN — B6 |

---

## Deployment Configuration

> Populated from A1 survey + A3 config. Empty until A1 completes.

| Parameter | Value | Source |
|-----------|-------|--------|
| Range ID | `SUOIHAI-E12` | A1 survey |
| Range name | Trường bắn Suối Hai | A1 §1.3 |
| Lane count | 10 | A1 §2.1 |
| Lane width | 1.5m | A1 §2.2 |
| Distances | 25, 50, 100m | A1 §2.3 |
| Primary distance | 100m | A1 §2.4 |
| Target type | paper + steel | A1 §2.7 |
| Ammo type | 7.62×39mm (AK/AKM) | A1 §7.4 |
| Sensor count | 10 (1 per lane) | derived |
| Mount type | bolt (steel Ø48mm, M8) | A1 §5.1 |
| Power source | grid 220V + 5kW gen backup | A1 §3.1 |
| Network mode | self_wifi (no existing LAN) | A1 §4.1 |
| Edge location | command post (locked cabinet) | A1 §5.6 |
| Cable run | 25m max | A1 §5.9 |
| Environment | semi-outdoor, IP65 | A1 §6.1 |
| Scoring standard | TCVN military infantry | A1 §7.5 |
| PULSE remote | yes (4G LTE) | A1 §7.7 |
| Data retention | 365 days | A1 §7.8 |
| Sensor config | VN-LOMAH v2.1.0, 192kHz, -40dB threshold | A3 §3 |
| Edge node IP | 192.168.10.1 | A3 §2 |
| Software version | CDM v1.0 + SCOREBOARD v1.0 + PULSE v1.0 + Clawdbot | A3 §4 |
| PULSE URL | http://cortex.range (local) + 4G remote | A3 §4 |

---

## HITL Decision Log

> Every HITL checkpoint decision recorded here. Append-only.

| Checkpoint | Authority | Decision | Rationale | Timestamp |
|------------|-----------|----------|-----------|-----------|
| A1-H | KN | APPROVED | Survey complete, 5 flags acceptable — F1 HIGH (power) is POC action item, F2-F4 mitigated via BOM additions | 2026-02-20 |
| A2-H | KN | APPROVED+SEND | BOM complete with flag mitigations, pricing at $2,500/lane, contract template ready | 2026-02-20 |
| A3-H | KN | APPROVED→FAT | Config traces to A1 survey, validation matrix clean, spot-check gate embedded | 2026-02-20 |
| A4-H | KN | FAT PASS | 44/45 pass, T22 4G SIM = on-site config not hardware defect, all CRITICAL/HIGH pass | 2026-02-20 |

---

## Sub-Agent Task Log

> Every Task() call from Master → sub-agent recorded here.

| # | Step | Agent | Task Description | Result | Duration |
|---|------|-------|-----------------|--------|----------|
| 1 | A1 | A-SURVEY | Deliver site survey to Thiếu tá Trần Văn Hùng (E12 POC) | COMPLETE — 5 flags | ~20 min (POC fill) |
| 2 | A2 | A-DOC | Generate BOM + contract from approved survey | COMPLETE — BOM 21 items, contract template | ~30 min |
| 3 | A3 | A-CONFIG | Generate equipment config from signed BOM + survey | COMPLETE — full config spec + flash checklist | ~45 min |
| 4 | A4 | A-TEST | FAT: 45 checks (24 sensor + 9 EDGE + 6 network + 6 integration) | FAT PASS — 44/45 (T22 deferred) | ~2h |
| 5 | A5 | A-CONFIG | Generate packing list from BOM | COMPLETE — 4 boxes, 29kg | ~15 min |
| 6 | A5 | A-DOC | Send pre-arrival checklist to POC (Zalo) | COMPLETE — 8-item checklist sent | ~10 min |

---

## Escalation Log

| # | Step | Trigger | Escalated To | Resolution | Status |
|---|------|---------|-------------|------------|--------|
| — | — | — | — | — | — |

---

*VN-RANGE-001 Deployment State v1.0 — Master Agent external state file*
*Protocol: read at session start, update after every step/HITL/anomaly*
