# Swarm Orchestration Package
## Multi-Agent Coordination for Defense R&D

**Purpose**: Enable parallel multi-agent swarms using shared state coordination.
**Evolution from**: Sequential D-M-I-R handoffs → Parallel Hub-Spoke with shared state.
**Built on**: Existing Clawdbot + MCP infrastructure + agent-team-builder skill.

---

## Architecture: The Paradigm Shift

```
BEFORE (Sequential):                    AFTER (Parallel Shared State):
                                        
D → M → I → R                          ┌─── Worker-01 (Researcher) ───┐
(each waits for previous)               │         reads/writes          │
                                        │                               │
                                   Lead ─┼── SHARED STATE ──────── Shadow
                                        │    (swarm-state.json)         │
                                        │         reads/writes          │
                                        └─── Worker-02 (Analyst) ──────┘
                                        
Time: 4 × T (sequential)               Time: max(T1, T2) + review
                                        Speedup: 2-4x immediate
```

## File Structure

```
swarm-orchestration/
├── README.md                      ← You are here
├── DAY1-QUICKSTART.md             ← START HERE tonight
├── schemas/
│   ├── swarm-state.json           ← Shared state template (core innovation)
│   ├── message-protocol.json      ← 3 message types: STATUS, REQUEST, HANDOFF
│   └── trajectory.json            ← Compound learning schema
├── agents/
│   ├── lead-agent.md              ← Lead: assigns, resolves, verifies (ONLY)
│   ├── worker-template.md         ← Worker: autonomous executor with role configs
│   └── shadow-agent.md            ← Shadow: quality reviewer catches lazy work
├── scripts/
│   ├── init_swarm.py              ← Initialize new swarm session
│   └── generate_trajectory.py     ← Auto-generate trajectory from session
├── sessions/                      ← Active swarm state files (created per session)
└── trajectories/                  ← Compound learning archive (grows over time)
```

## Key Concepts

### 1. Shared State > Sequential Handoffs
All agents read and write `swarm-state.json`. No agent waits for another to finish before starting. Workers coordinate through the shared state, not through Lead instructions.

### 2. Lead Does NOT Execute
Lead has exactly 3 jobs: assign tasks, resolve conflicts, verify completion. If Lead is doing research or analysis, the architecture is wrong.

### 3. Shadow Catches Lazy Work
Every HANDOFF goes through Shadow review before Lead accepts. Shadow checks: evidence exists, criteria met, outputs consistent, no stubs.

### 4. Trajectories Compound
Each session generates a trajectory. Future sessions read past trajectories. Session #14 has 13 sessions of institutional knowledge. This is the 15x multiplier.

### 5. Worker-to-Worker > Worker-to-Lead
Workers request data from each other directly. Only escalate to Lead for decisions, conflicts, or dead workers. This prevents Lead bottleneck (the B1 coordination collapse from the mastery plan).

## Quick Commands

```bash
# Initialize a new swarm
python scripts/init_swarm.py "Your mission here" --workers researcher,analyst

# With custom deadline and workers
python scripts/init_swarm.py "BB-01 DfX review preparation" \
  --workers researcher,analyst,qc-checker \
  --deadline 180 \
  --output ./sessions/

# Generate trajectory after session
python scripts/generate_trajectory.py ./sessions/swarm-XXXXX-state.json

# Available worker roles:
#   researcher, analyst, cad-modeler, doc-writer, qc-checker
```

## Integration with Existing Infrastructure

| Existing Tool | How It Integrates |
|---------------|-------------------|
| **Clawdbot** | Workers can be Clawdbot instances on Telegram |
| **Airtable MCP** | QC-checker and analyst workers read/write Airtable |
| **FreeCAD MCP** | CAD-modeler worker creates/modifies 3D models |
| **Obsidian** | Trajectories stored in Second Brain under /agent-trajectories/ |
| **D-M-I-R agents** | Existing agents become specialized workers in swarm |
| **QC Agent v3.0** | Shadow agent role extends QC Agent's quality checking |

## 14-Day Progression

| Day | Milestone | Agents |
|-----|-----------|--------|
| 1 | First parallel 2-worker swarm | 1L + 2W + 1S |
| 2 | Heartbeat + failure detection | 1L + 2W + 1S |
| 3 | Real BB-01 task with 3 agents | 1L + 2W + 1S |
| 4 | Shadow agent catches quality issues | 1L + 2W + 1S |
| 5-7 | Production defense R&D tasks | 1L + 3W + 1S |
| 8 | First autonomous overnight run | 1L + 3W + 1S |
| 9 | Review & refine from trajectories | - |
| 10-12 | Scale to 5 workers | 1L + 4-5W + 1S |
| 13 | Document as reusable skill | - |
| 14 | Full production deployment | 1L + 5W + 1S |
