# HEARTBEAT.md — Agent Wake Protocol

## Overview

Every agent wakes every 15 minutes via cron. This document defines the exact checklist each agent follows.

## Schedule (Staggered)

| Minute | Agent | Session Key |
|--------|-------|-------------|
| :00, :15, :30, :45 | Jarvis | agent:main:main |
| :02, :17, :32, :47 | Researcher | agent:researcher:main |
| :04, :19, :34, :49 | DocAgent | agent:docagent:main |

Staggering prevents API rate limits and VPS load spikes.

## Heartbeat Checklist

### Phase 1: Context Restoration (30 seconds)

```
□ 1.1 Read memory/WORKING.md
      - What task was I working on?
      - What was my last status?
      - What were my next steps?

□ 1.2 Check if task still exists in Airtable
      - Task may have been reassigned/cancelled
      - If task gone, clear WORKING.md

□ 1.3 Restore relevant session memory
      - If complex task, search conversation history
```

### Phase 2: Check for Work (60 seconds)

```
□ 2.1 Query Airtable Tasks
      Filter: Assignee = [My Name] AND Status IN (assigned, in_progress)
      
□ 2.2 Query Airtable Messages for @mentions
      Filter: Mentions contains @[My Name] AND Timestamp > [Last Heartbeat]
      
□ 2.3 Check Telegram for direct messages
      - From KN with instructions
      - From other agents with requests
```

### Phase 3: Decision Point

```
IF tasks assigned:
    → Go to Phase 4 (Work)
    
ELSE IF @mentions:
    → Read and respond to mention
    → Go to Phase 4 if action required
    
ELSE:
    → Log "HEARTBEAT_OK" locally
    → Update Agents table: Last Heartbeat = now()
    → Exit (silent, no notification)
```

### Phase 4: Execute Work (Variable)

```
□ 4.1 Update task status
      Status = "in_progress"
      
□ 4.2 Update WORKING.md
      Current Task = [Task title]
      Task ID = [Airtable ID]
      Status = "Working..."
      
□ 4.3 Do the work
      - Research tasks: Find information
      - Writing tasks: Create content
      - Review tasks: Provide feedback
      
□ 4.4 If work complete in this heartbeat:
      → Post findings to Airtable Messages
      → Update task status to "review"
      → Post summary to Telegram group
      → Update WORKING.md: Task = None
      
□ 4.5 If work continues:
      → Save progress to WORKING.md
      → Post progress update to Airtable
      → Will continue next heartbeat
```

### Phase 5: Cleanup (15 seconds)

```
□ 5.1 Update Agents table
      Status = "idle" (or "active" if work continues)
      Last Heartbeat = now()
      
□ 5.2 Save daily notes
      Append to memory/YYYY-MM-DD.md:
      - Time
      - What was checked
      - What was done
      - Outcome
      
□ 5.3 Exit gracefully
```

## Heartbeat Message Template

When cron triggers, send this message to the agent:

```
HEARTBEAT CHECK — [Agent Name]
Time: [Current UTC time]

Execute heartbeat protocol:

1. RESTORE: Read memory/WORKING.md
2. CHECK: Query Airtable for assigned tasks and @mentions
3. DECIDE: Work exists? Continue. No work? Report OK and exit.
4. WORK: If tasks, do them. Update status. Post findings.
5. CLEANUP: Update Agents table, save notes, exit.

Begin.
```

## Error Handling

### Airtable Unreachable

```
1. Log error with timestamp
2. Try once more after 5 seconds
3. If still failing:
   - Check ~/shared/tasks.md as fallback
   - Post to Telegram: "⚠️ Airtable connectivity issue"
4. Continue with local work if possible
```

### Task Blocked

```
1. Update task status to "blocked"
2. Add comment explaining blocker
3. Post to Telegram: "🚫 [Task] blocked: [Reason]"
4. Tag @Jarvis for escalation
5. Continue with other tasks if any
```

### Long-Running Task

If task takes multiple heartbeats:

```
1. Each heartbeat: Post progress update to Airtable
2. Update WORKING.md with checkpoint
3. Don't mark complete until actually complete
4. If stuck > 3 heartbeats (45 min): Escalate to Jarvis
```

## Metrics to Track

Log these in Activity table:

| Metric | Description |
|--------|-------------|
| heartbeat_count | Total heartbeats today |
| tasks_completed | Tasks finished today |
| avg_response_time | Time from assignment to pickup |
| blocked_count | Tasks marked blocked |
| error_count | Errors encountered |

## Sample Heartbeat Log Entry

```markdown
## 14:32 UTC — Researcher Heartbeat

### Context Restored
- Previous task: None
- WORKING.md: Clean

### Work Checked
- Airtable Tasks: 1 assigned
  - "Research acoustic sensors for BB-01" (rec_xxx)
- @Mentions: 1 new
  - Jarvis: "Please prioritize marine-grade options"

### Action Taken
- Picked up task rec_xxx
- Updated status: assigned → in_progress
- Beginning research on MEMS microphones

### Next Heartbeat
- Will continue acoustic sensor research
- Target: Complete by 15:02 heartbeat
```
