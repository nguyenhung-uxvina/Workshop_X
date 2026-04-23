# Day 1 Quickstart: Your First Parallel Swarm
## Tonight's Goal: 2 agents coordinating via shared state (not sequential handoff)

**Time needed**: 2-3 hours
**What you'll prove**: Agents can self-coordinate by reading shared state instead of waiting for instructions

---

## Step 1: Initialize Swarm (5 minutes)

```bash
cd swarm-orchestration
python scripts/init_swarm.py \
  "Compare piezoelectric vs MEMS microphone candidates for BB-01 LOMAH 140dB SPL requirement" \
  --workers researcher,analyst \
  --deadline 90 \
  --output ./sessions/
```

This creates `sessions/swarm-YYYYMMDD-HHMM-state.json` with:
- 1 Lead (you guide it)
- 1 Researcher worker (finds sensor specs)  
- 1 Analyst worker (builds VDI 2225 evaluation)
- 1 Shadow (reviews outputs)

## Step 2: Lead Decomposes Mission (10 minutes)

Open the state file. As Lead, add tasks to `task_board.backlog`:

```json
{
  "task_board": {
    "backlog": [
      {
        "task_id": "task-001",
        "title": "Extract sensor specifications",
        "assigned_to": "worker-01",
        "description": "Find 3-4 piezoelectric and 2-3 MEMS microphone candidates that can handle 140dB SPL. Extract: sensitivity, frequency range, max SPL, power requirements, size, cost estimate for Vietnam procurement.",
        "success_criteria": [
          "Minimum 5 sensor candidates identified",
          "All 6 parameters extracted per sensor",
          "Source datasheets referenced",
          "Vietnam supply chain availability noted"
        ],
        "estimated_minutes": 30,
        "dependencies": []
      },
      {
        "task_id": "task-002", 
        "title": "Build VDI 2225 evaluation matrix",
        "assigned_to": "worker-02",
        "description": "Create weighted evaluation matrix for acoustic sensor selection. Criteria: SPL handling (must-have), sensitivity, frequency range, power consumption, size/form factor, cost, Vietnam availability. Weight criteria based on BB-01 requirements.",
        "success_criteria": [
          "All criteria defined with weights summing to 1.0",
          "Must-have criteria identified (elimination criteria)",
          "Scoring scale defined (0-4 per VDI 2225)",
          "Ready to populate once worker-01 delivers specs"
        ],
        "estimated_minutes": 20,
        "dependencies": ["task-001 for final scoring"]
      }
    ]
  }
}
```

**KEY INSIGHT**: These tasks are **parallel-safe**. Worker-01 researches sensors while Worker-02 builds the evaluation framework. Worker-02 only needs Worker-01's data for the FINAL scoring step — the matrix structure can be built independently.

## Step 3: Run Workers in Parallel (60 minutes)

### Worker-01 (Researcher) — Start first
Open a Claude session. Give it the worker-template context + its task:

```
You are worker-01 (researcher) in a multi-agent swarm.

YOUR TASK (from task_board):
[paste task-001 here]

COORDINATION RULES:
- Post STATUS updates every 2-3 minutes to the message log
- If you need information from worker-02, post a REQUEST directly to them
- When complete, create a HANDOFF message with completion evidence
- Write outputs to ./outputs/sensor-specs-v1.md

SHARED STATE: Read ./sessions/[swarm-state].json for context.
Start now. Post your first STATUS message.
```

### Worker-02 (Analyst) — Start simultaneously
Open a SECOND Claude session. Give it:

```
You are worker-02 (analyst) in a multi-agent swarm.

YOUR TASK (from task_board):
[paste task-002 here]

COORDINATION RULES:
- Post STATUS updates every 2-3 minutes to the message log
- You can build the evaluation framework WITHOUT waiting for worker-01
- When you need worker-01's data for scoring, post a REQUEST to them
- When complete, create a HANDOFF message with completion evidence
- Write outputs to ./outputs/vdi-2225-matrix-v1.md

SHARED STATE: Read ./sessions/[swarm-state].json for context.
Start now. Post your first STATUS message.
```

### What to Watch For (as Lead)
Monitor both sessions. Copy their STATUS messages into the shared state file's `message_log`. This is manual for Day 1 — you'll automate this later.

**Good signs:**
- Workers start immediately without asking Lead for permission
- Worker-02 builds matrix structure while Worker-01 is still researching
- Worker-02 posts REQUEST to Worker-01 for data (not to Lead)
- Workers reference each other's STATUS messages

**Bad signs:**
- Workers ask Lead "what should I do?" (means task isn't clear enough)
- Workers wait for each other instead of working on parallel parts
- No STATUS messages for >5 minutes (means they forgot the protocol)

## Step 4: Shadow Review (15 minutes)

When both workers HANDOFF, open a third Claude session as Shadow:

```
You are shadow-01 (quality reviewer) in a multi-agent swarm.

REVIEW PROTOCOL:
1. Evidence Check: Do the artifacts actually exist? Do claims match content?
2. Completeness Check: All success criteria met? Any TODO stubs?
3. Consistency Check: Do the two outputs agree with each other?
4. Specificity Check: Real data with sources, or generic templates?

WORKER-01 HANDOFF:
[paste worker-01's HANDOFF message]

WORKER-02 HANDOFF:
[paste worker-02's HANDOFF message]

Review both. Give each a verdict: PASS / FAIL / PASS_WITH_NOTES.
List all issues found.
```

## Step 5: Generate Trajectory (10 minutes)

```bash
python scripts/generate_trajectory.py ./sessions/[swarm-state].json --output ./trajectories/
```

Then manually fill in the retrospective:

```json
{
  "retrospective": {
    "what_worked": ["e.g., parallel task execution saved 20 min vs sequential"],
    "what_broke": ["e.g., manual message copying is slow"],
    "coordination_lessons": ["e.g., worker-02 could start scoring earlier if task was split differently"],
    "architecture_improvements": ["e.g., need auto-sync for message_log"]
  }
}
```

**This trajectory is trajectory #001. Every future session starts by reading it.**

---

## Day 1 Success Criteria

| Criterion | How to Measure |
|-----------|---------------|
| ✅ 2 agents ran in parallel | Both produced output simultaneously, not sequentially |
| ✅ Shared state used for coordination | At least 1 worker-to-worker data exchange via log |
| ✅ Lead didn't execute work | Lead only assigned tasks and verified — no research or analysis |
| ✅ Shadow caught something | Shadow review found at least 1 issue or verified quality |
| ✅ Trajectory captured | trajectory-001.json exists with filled retrospective |

## Day 1 → Day 2 Bridge

After tonight, you'll know:
- Does shared state coordination WORK for your setup?
- What's the actual message flow pattern?
- Where are the friction points?

Day 2 adds: **heartbeat automation** and **failure detection** (what happens when a worker gets stuck).

---

## Quick Reference: Message Copy Templates

When a worker gives you a STATUS update, add this to swarm-state.json message_log:
```json
{
  "timestamp": "[current time ISO]",
  "from": "worker-01",
  "to": "log",
  "type": "STATUS",
  "content": "[paste their update]",
  "requires_response": false
}
```

When a worker asks for something from another worker:
```json
{
  "timestamp": "[current time ISO]",
  "from": "worker-02",
  "to": "worker-01",
  "type": "REQUEST",
  "content": "[paste their request]",
  "request_type": "data",
  "urgency": "medium",
  "requires_response": true,
  "response_deadline_minutes": 5
}
```

When a worker declares complete:
```json
{
  "timestamp": "[current time ISO]",
  "from": "worker-01",
  "to": "shadow-01",
  "type": "HANDOFF",
  "content": "[summary]",
  "task_id": "task-001",
  "work_completed": "[what they did]",
  "key_outputs": ["[list]"],
  "completion_evidence": ["[how to verify]"],
  "requires_response": false
}
```
