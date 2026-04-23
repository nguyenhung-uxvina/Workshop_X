# AGENTS.md — Shared Operating Instructions

All agents in the Workshop X Mission Control system follow these protocols.

## Core Principles

1. **KN's time is the constraint** — Protect it. Don't ask unnecessary questions. Make decisions within your domain.
2. **Deploy to learn** — Action over analysis. Minimum viable solutions that ship.
3. **Write it down** — If you want to remember, write to a file. Mental notes don't survive restarts.
4. **Coordinate via Airtable** — The single source of truth for tasks and status.
5. **Telegram for visibility** — Post milestones and blockers to shared group.

## File System Structure

```
~/[agent-name]/
├── SOUL.md              # Your identity (read-only)
├── AGENTS.md            # This file (read-only)
├── memory/
│   ├── WORKING.md       # Current task state (read/write)
│   ├── YYYY-MM-DD.md    # Daily notes (append-only)
│   └── sources/         # Saved materials
├── config/
│   └── config.yaml      # Clawdbot config
└── outputs/             # Deliverables to share
```

## Airtable Integration

### Base: "Mission Control"

**Tables:**

1. **Tasks**
   - Title, Description, Status, Assignee, Priority, Tags, Due Date
   - Status flow: inbox → assigned → in_progress → review → done

2. **Messages**
   - Task ID (linked), From Agent, Content, Timestamp
   - Use for task-specific comments and updates

3. **Activity**
   - Agent, Action Type, Details, Timestamp
   - Auto-logged for visibility

4. **Agents**
   - Name, Role, Status (idle/active/blocked), Current Task

### Reading Tasks

```bash
# Via MCP Airtable integration
airtable list-records "Mission Control" "Tasks" --filter "Assignee = 'Researcher'"
```

### Updating Tasks

```bash
# Update task status
airtable update-record "Mission Control" "Tasks" RECORD_ID --field "Status=in_progress"

# Add comment
airtable create-record "Mission Control" "Messages" --data '{"Task": ["TASK_ID"], "From Agent": "Researcher", "Content": "Starting research..."}'
```

## Heartbeat Protocol

Every 15 minutes, each agent wakes via cron:

```
1. Load WORKING.md — Remember what you were doing
2. Check Airtable "Tasks" — Any assigned to you?
3. Check Airtable "Messages" — Any @mentions?
4. If work exists:
   - Update status to "in_progress"
   - Do the work (may take multiple heartbeats)
   - Update status when done
   - Post to Telegram group
5. If no work:
   - Log "HEARTBEAT_OK" locally (no notification)
   - Sleep until next heartbeat
```

## WORKING.md Format

```markdown
# WORKING.md — [Agent Name]

## Current Task
[Task title from Airtable]
Task ID: [Airtable record ID]

## Status
[What's done, what's in progress, what's blocked]

## Next Steps
1. [Immediate next action]
2. [Following action]
3. [...]

## Notes
[Anything to remember across heartbeats]

## Last Updated
[Timestamp]
```

## Telegram Integration

### Group: "Workshop X Mission Control"

All agents post to this group for visibility.

**When to post:**
- Task started (brief)
- Task completed (with summary)
- Blocker encountered
- Important finding that affects others

**Format:**
```
🤖 [Agent Name]
📋 [Task Title]
Status: [started/completed/blocked]
---
[Brief details, 2-3 lines max]
```

**When NOT to post:**
- Routine heartbeat checks (silent)
- Minor status updates (use Airtable)
- Questions for KN (use direct message to KN's Telegram)

## @Mention System

To alert a specific agent, use @AgentName in Airtable comments:

- `@Jarvis` — Squad lead attention needed
- `@Researcher` — Research request
- `@DocAgent` — Documentation request (Week 2+)
- `@all` — Everyone's attention

Agents check for @mentions during heartbeat.

## Handoff Protocol

When passing work to another agent:

1. Create/update task in Airtable
2. Set Assignee to target agent
3. Add comment with context:
   ```
   Handoff from [Your Name]:
   
   Context: [Why this task exists]
   What's done: [Your contributions]
   What's needed: [Specific ask]
   References: [Links, files, prior research]
   ```
4. Target agent picks up on next heartbeat

## Error Handling

**If Airtable is down:**
- Write to `~/shared/tasks.md` as fallback
- Post to Telegram: "⚠️ Airtable offline, using file fallback"

**If stuck on task:**
- Update status to "blocked"
- Add blocker reason in comments
- Post to Telegram with @Jarvis
- Continue other work if possible

**If uncertain about scope:**
- Default to smaller scope
- Deliver minimum viable output
- Ask in comments if more is needed

## Security Reminder

- Never post API keys, passwords, or sensitive data
- Defense project details stay within approved channels
- When in doubt, ask KN
