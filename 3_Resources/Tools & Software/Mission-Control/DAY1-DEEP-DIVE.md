# Day 1 Deep Dive: Mission Control v0.1

**Date:** Sunday, February 1, 2026  
**Time available:** 2-3 hours evening (Vietnam time)  
**Goal:** Researcher agent running + responds to Telegram

---

## Pre-Session Checklist (Before starting)

Confirm you have:
- [ ] SSH access to Hetzner VPS
- [ ] Existing Clawdbot (Jarvis) running (`pm2 status` shows online)
- [ ] Anthropic API key (same one Jarvis uses)
- [ ] Airtable account (free tier OK)
- [ ] Telegram account

---

## Session Timeline

| Time | Task | Duration |
|------|------|----------|
| 0:00 | Create Telegram bot for Researcher | 5 min |
| 0:05 | Create Airtable base "Mission Control" | 15 min |
| 0:20 | Setup Researcher directory on VPS | 10 min |
| 0:30 | Configure Researcher agent | 15 min |
| 0:45 | Start Researcher with PM2 | 5 min |
| 0:50 | Test basic Telegram communication | 10 min |
| 1:00 | Update Jarvis SOUL.md for multi-agent | 10 min |
| 1:10 | Test Airtable read/write from both agents | 15 min |
| 1:25 | Setup heartbeat cron | 10 min |
| 1:35 | Create shared Telegram group | 5 min |
| 1:40 | Final testing + document | 20 min |
| 2:00 | Done |

---

## Part 1: Create Telegram Bot for Researcher (5 min)

### Step 1.1: Open BotFather

1. Open Telegram
2. Search for `@BotFather`
3. Start chat if first time

### Step 1.2: Create New Bot

Send these messages:

```
/newbot
```

BotFather asks: "Alright, a new bot. How are we going to call it?"

```
Workshop X Researcher
```

BotFather asks: "Good. Now let's choose a username..."

```
workshopx_researcher_bot
```

(If taken, try: `wx_researcher_bot` or add numbers)

### Step 1.3: Save the Token

BotFather responds with:
```
Done! Congratulations on your new bot...
Use this token to access the HTTP API:
7123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ SAVE THIS TOKEN** — Copy to a secure note

### Step 1.4: Get Your Telegram User ID

If you don't know your Telegram user ID:

1. Search for `@userinfobot` in Telegram
2. Send `/start`
3. It replies with your ID (number like `123456789`)

**Save this ID too** — needed for `allowedUsers` in config

### Checkpoint ✓
```
□ Bot token: 7123456789:AAHxxx...
□ Your user ID: 123456789
```

---

## Part 2: Create Airtable Base (15 min)

### Step 2.1: Login to Airtable

1. Go to https://airtable.com
2. Login (or create free account)

### Step 2.2: Create New Base

1. Click **"+ Create"** (top left)
2. Select **"Start from scratch"**
3. Name: `Mission Control`
4. Click **Create base**

### Step 2.3: Create Tasks Table

Default table is called "Table 1". Rename to **"Tasks"**

Add these fields (click + to add column):

| Field Name | Type | Configuration |
|------------|------|---------------|
| Title | Single line text | (default, already exists as "Name") |
| Description | Long text | Enable rich text |
| Status | Single select | Options: `inbox`, `assigned`, `in_progress`, `review`, `done`, `blocked` |
| Assignee | Single select | Options: `Jarvis`, `Researcher`, `Unassigned` |
| Priority | Single select | Options: `urgent`, `high`, `normal`, `low` |
| Tags | Multiple select | Options: `BB-01`, `research`, `documentation` |
| Due Date | Date | Include time |

**Rename "Name" to "Title":** Click on "Name" header → Customize field → Change name to "Title"

### Step 2.4: Create Messages Table

1. Click **"+ Add table"** (bottom left)
2. Name: `Messages`

Add fields:

| Field Name | Type | Configuration |
|------------|------|---------------|
| Task | Link to another record | Link to "Tasks" table |
| From Agent | Single select | Options: `KN`, `Jarvis`, `Researcher` |
| Content | Long text | Enable rich text |
| Mentions | Multiple select | Options: `@Jarvis`, `@Researcher`, `@KN`, `@all` |

(Created time is auto-added)

### Step 2.5: Create Agents Table

1. Click **"+ Add table"**
2. Name: `Agents`

Add fields:

| Field Name | Type | Configuration |
|------------|------|---------------|
| Name | Single line text | |
| Role | Single line text | |
| Status | Single select | Options: `idle`, `active`, `blocked`, `offline` |
| Last Heartbeat | Date time | |
| Session Key | Single line text | |

Add initial records:

| Name | Role | Status | Session Key |
|------|------|--------|-------------|
| Jarvis | Squad Lead | idle | agent:main:main |
| Researcher | Research & Analysis | offline | agent:researcher:main |

### Step 2.6: Get API Credentials

**Get API Key:**
1. Go to https://airtable.com/create/tokens
2. Click **"Create new token"**
3. Name: `Mission Control Bot`
4. Scopes: Check `data.records:read` and `data.records:write`
5. Access: Select your "Mission Control" base
6. Click **Create token**
7. **Copy the token** (starts with `pat...`)

**Get Base ID:**
1. Open your Mission Control base
2. Look at URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
3. The `appXXXXXXXXXXXXXX` part is your Base ID

### Checkpoint ✓
```
□ Base created with 3 tables: Tasks, Messages, Agents
□ API Token: patXXX...
□ Base ID: appXXX...
```

---

## Part 3: Setup Researcher Directory on VPS (10 min)

### Step 3.1: SSH to VPS

```bash
# From your computer
ssh root@YOUR_HETZNER_IP

# Switch to clawdbot user
su - clawdbot
```

### Step 3.2: Verify Jarvis is Running

```bash
pm2 status
```

Expected output:
```
┌─────┬──────────┬─────────────┬─────────┬─────────┬──────────┐
│ id  │ name     │ namespace   │ version │ mode    │ status   │
├─────┼──────────┼─────────────┼─────────┼─────────┼──────────┤
│ 0   │ clawdbot │ default     │ N/A     │ fork    │ online   │
└─────┴──────────┴─────────────┴─────────┴─────────┴──────────┘
```

If not running: `pm2 start clawdbot`

### Step 3.3: Create Researcher Directory

```bash
# Create directory structure
mkdir -p ~/researcher
mkdir -p ~/researcher/memory
mkdir -p ~/researcher/memory/sources
mkdir -p ~/researcher/logs
mkdir -p ~/researcher/outputs
mkdir -p ~/shared

# Verify
ls -la ~/researcher/
```

### Step 3.4: Copy Clawdbot Base Files

```bash
# Copy node modules and package files
cp -r ~/clawdbot/node_modules ~/researcher/
cp ~/clawdbot/package.json ~/researcher/
cp ~/clawdbot/package-lock.json ~/researcher/ 2>/dev/null || true

# Verify copy
ls ~/researcher/
```

Expected: `node_modules  package.json  package-lock.json  memory  logs  outputs`

### Checkpoint ✓
```
□ SSH connected as clawdbot user
□ Jarvis (clawdbot) showing online in pm2
□ ~/researcher directory created with node_modules
```

---

## Part 4: Configure Researcher Agent (15 min)

### Step 4.1: Create Environment File

```bash
cd ~/researcher

# Create .env file
nano .env
```

Paste this content (replace with YOUR values):

```bash
# Researcher Agent Environment Variables
# Created: 2026-02-01

# Anthropic API (same as Jarvis)
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Telegram Bot (from Part 1)
TELEGRAM_BOT_TOKEN=7123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Airtable (from Part 2)
AIRTABLE_API_KEY=patxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
```

Save: `Ctrl+O`, `Enter`, `Ctrl+X`

```bash
# Secure the file
chmod 600 .env
```

### Step 4.2: Create SOUL.md

```bash
nano SOUL.md
```

Paste:

```markdown
# SOUL.md — Researcher

## Identity

**Name:** Researcher  
**Role:** Deep Research & Information Gathering  
**Session Key:** agent:researcher:main  

## Core Personality

You are the Researcher agent for Workshop X. You go deep where others go wide.

**Voice:** Thorough, evidence-based, precise. Every claim comes with sources.

## What You're Good At

- Deep technical research
- Finding specifications, datasheets, standards
- Synthesizing multiple sources
- Identifying what's NOT known (gaps)

## Operating Rules

1. On each heartbeat, check Airtable "Tasks" for assigned work
2. Update task status when starting (in_progress) and completing (review)
3. Post findings as comments in Airtable Messages
4. Every fact needs a source

## Context

Workshop X projects: BB-01 (LOMAH acoustic detection), V-SMASH, MTB-20, TDR
KN's time zone: Vietnam (UTC+7)
```

Save and exit.

### Step 4.3: Create config.yaml

```bash
nano config.yaml
```

Paste:

```yaml
# Researcher Agent Configuration
# Port 18790 (Jarvis uses 18789)

llm:
  provider: anthropic
  model: claude-sonnet-4-20250514
  apiKey: ${ANTHROPIC_API_KEY}

agent:
  name: "Researcher"
  sessionKey: "agent:researcher:main"

gateway:
  port: 18790
  host: "127.0.0.1"

interfaces:
  telegram:
    enabled: true
    token: ${TELEGRAM_BOT_TOKEN}
    allowedUsers:
      - YOUR_TELEGRAM_USER_ID  # Replace with actual ID from Part 1

memory:
  enabled: true
  provider: local
  path: "./memory"

mcpServers:
  airtable:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-airtable"]
    env:
      AIRTABLE_API_KEY: ${AIRTABLE_API_KEY}
  filesystem:
    command: "npx"
    args: ["-y", "@anthropics/mcp-server-filesystem", "/home/clawdbot/researcher", "/home/clawdbot/shared"]

systemPrompt:
  files:
    - "./SOUL.md"

logging:
  level: info
  file: "./logs/researcher.log"
```

**⚠️ IMPORTANT:** Replace `YOUR_TELEGRAM_USER_ID` with actual number from Part 1

Save and exit.

### Step 4.4: Create Initial WORKING.md

```bash
nano memory/WORKING.md
```

Paste:

```markdown
# WORKING.md — Researcher

## Current Task
None

## Status
Ready for work. Awaiting first assignment.

## Next Steps
1. Check Airtable for assigned tasks
2. Await assignment from Jarvis

## Last Updated
2026-02-01T19:00:00+0700
```

Save and exit.

### Checkpoint ✓
```
□ .env created with all 4 variables
□ SOUL.md created
□ config.yaml created (with your Telegram user ID)
□ memory/WORKING.md created
```

---

## Part 5: Start Researcher with PM2 (5 min)

### Step 5.1: Start the Process

```bash
cd ~/researcher

# Start with PM2
pm2 start npm --name "researcher" -- start

# Check status
pm2 status
```

Expected:
```
┌─────┬────────────┬─────────────┬─────────┬─────────┬──────────┐
│ id  │ name       │ namespace   │ version │ mode    │ status   │
├─────┼────────────┼─────────────┼─────────┼─────────┼──────────┤
│ 0   │ clawdbot   │ default     │ N/A     │ fork    │ online   │
│ 1   │ researcher │ default     │ N/A     │ fork    │ online   │
└─────┴────────────┴─────────────┴─────────┴─────────┴──────────┘
```

### Step 5.2: Check Logs for Errors

```bash
pm2 logs researcher --lines 30
```

Look for:
- ✅ "Gateway started on port 18790"
- ✅ "Telegram bot connected"
- ❌ Any red error messages

### Step 5.3: Save PM2 Configuration

```bash
pm2 save
```

This ensures Researcher restarts on VPS reboot.

### Troubleshooting

**If status shows "errored":**
```bash
pm2 logs researcher --err --lines 50
```

Common fixes:
- Wrong Telegram token → Check .env
- Port conflict → Change port in config.yaml
- Missing node_modules → `cd ~/researcher && npm install`

### Checkpoint ✓
```
□ pm2 status shows both clawdbot and researcher as "online"
□ No errors in pm2 logs researcher
□ pm2 save completed
```

---

## Part 6: Test Telegram Communication (10 min)

### Step 6.1: Find Your Researcher Bot

1. Open Telegram
2. Search for the bot name you created (e.g., `@workshopx_researcher_bot`)
3. Click **Start** if prompted

### Step 6.2: Send Test Message

Send:
```
Hello, are you working?
```

Expected response: Researcher introduces itself and confirms it's online.

### Step 6.3: Test Basic Capability

Send:
```
What is your name and role?
```

Expected: Should respond based on SOUL.md content.

### Step 6.4: Test Memory Write

Send:
```
Please update your WORKING.md to note that we completed initial testing successfully.
```

Verify on VPS:
```bash
cat ~/researcher/memory/WORKING.md
```

Should show updated content.

### Troubleshooting

**Bot doesn't respond:**
1. Check `pm2 logs researcher` for errors
2. Verify your Telegram user ID in config.yaml matches exactly
3. Restart: `pm2 restart researcher`

**Bot responds but seems confused:**
- Check SOUL.md loaded correctly
- Try: `pm2 restart researcher`

### Checkpoint ✓
```
□ Bot responds to "Hello"
□ Bot knows its name/role from SOUL.md
□ Bot can write to memory files
```

---

## Part 7: Update Jarvis for Multi-Agent (10 min)

### Step 7.1: Edit Jarvis SOUL.md

```bash
nano ~/clawdbot/SOUL.md
```

Add this section (keep existing content, add at bottom):

```markdown
## Multi-Agent Awareness

You are now part of a team. Other agents exist:

| Agent | Role | Session Key |
|-------|------|-------------|
| Researcher | Deep research, information gathering | agent:researcher:main |

### How to Delegate

1. Create task in Airtable "Mission Control" base, Tasks table
2. Set Assignee to "Researcher"
3. Add context in Description
4. Researcher picks up on next heartbeat (every 15 min)

### How to Check on Researcher

- Check Airtable Tasks table for status
- Researcher posts findings to Airtable Messages
- Ask directly via Telegram (separate bot)
```

Save and exit.

### Step 7.2: Add Airtable MCP to Jarvis

Check if Jarvis config already has Airtable MCP:
```bash
grep -A5 "airtable" ~/clawdbot/config.yaml
```

If not present, add to mcpServers section:
```bash
nano ~/clawdbot/config.yaml
```

Add under mcpServers:
```yaml
  airtable:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-airtable"]
    env:
      AIRTABLE_API_KEY: ${AIRTABLE_API_KEY}
```

Also add to Jarvis .env if not present:
```bash
echo "AIRTABLE_API_KEY=patxxxxxxxxxxxxxxx" >> ~/clawdbot/.env
echo "AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX" >> ~/clawdbot/.env
```

### Step 7.3: Restart Jarvis

```bash
pm2 restart clawdbot
pm2 logs clawdbot --lines 20
```

Verify no errors.

### Checkpoint ✓
```
□ Jarvis SOUL.md updated with multi-agent section
□ Jarvis has Airtable MCP configured
□ Jarvis restarted without errors
```

---

## Part 8: Test Airtable Integration (15 min)

### Step 8.1: Create Test Task via Airtable Web UI

1. Go to your Airtable "Mission Control" base
2. Open "Tasks" table
3. Click "+ Add record"
4. Fill in:
   - Title: `TEST: Verify Researcher can read Airtable`
   - Description: `This is a test task. Researcher should acknowledge receipt.`
   - Status: `assigned`
   - Assignee: `Researcher`
   - Priority: `normal`

### Step 8.2: Ask Researcher to Check Tasks

In Telegram (Researcher bot), send:
```
Please check Airtable for any tasks assigned to you. List what you find.
```

Expected: Researcher finds and describes the test task.

### Step 8.3: Ask Researcher to Update Status

Send:
```
Please update the test task status to "in_progress" in Airtable.
```

Verify in Airtable web UI that status changed.

### Step 8.4: Ask Researcher to Post Comment

Send:
```
Please add a comment to the test task in Airtable Messages table saying "Researcher has picked up this task and confirmed Airtable integration is working."
```

Check Airtable "Messages" table for new record.

### Step 8.5: Test from Jarvis Side

In Telegram (Jarvis bot), send:
```
Please check the Mission Control Airtable base and tell me the status of all tasks.
```

Expected: Jarvis reads and reports task status.

### Troubleshooting

**"Airtable not available" error:**
- Check AIRTABLE_API_KEY in .env is correct
- Check API token has read/write permissions
- Check Base ID is correct

**Can read but not write:**
- Token missing `data.records:write` scope
- Regenerate token with correct permissions

### Checkpoint ✓
```
□ Researcher can read tasks from Airtable
□ Researcher can update task status
□ Researcher can create messages
□ Jarvis can read from same Airtable base
```

---

## Part 9: Setup Heartbeat Cron (10 min)

### Step 9.1: Create Heartbeat Script

```bash
nano ~/researcher/heartbeat.sh
```

Paste:

```bash
#!/bin/bash
# Researcher Heartbeat Script
# Runs every 15 minutes via cron

cd /home/clawdbot/researcher

# Log timestamp
echo "$(date -Iseconds) - Heartbeat triggered" >> logs/heartbeat.log

# Send heartbeat message to Researcher via Clawdbot CLI
# This wakes the agent and triggers the heartbeat protocol
clawdbot sessions send \
  --session "agent:researcher:main" \
  --message "HEARTBEAT CHECK

Execute heartbeat protocol:
1. Read memory/WORKING.md for context
2. Check Airtable Tasks for tasks assigned to Researcher
3. Check Airtable Messages for @Researcher mentions
4. If work exists, do it and update status
5. If no work, log HEARTBEAT_OK

Begin." \
  >> logs/heartbeat.log 2>&1

echo "$(date -Iseconds) - Heartbeat complete" >> logs/heartbeat.log
```

Save and make executable:
```bash
chmod +x ~/researcher/heartbeat.sh
```

### Step 9.2: Test Heartbeat Manually

```bash
~/researcher/heartbeat.sh
```

Check log:
```bash
cat ~/researcher/logs/heartbeat.log
```

### Step 9.3: Add Cron Job

```bash
crontab -e
```

Add this line (runs at :02, :17, :32, :47 each hour):
```
2,17,32,47 * * * * /home/clawdbot/researcher/heartbeat.sh
```

Save and exit.

Verify cron:
```bash
crontab -l
```

### Step 9.4: Verify Cron Executes

Wait until next scheduled minute (e.g., if it's 19:14, wait until 19:17).

Then check:
```bash
tail -20 ~/researcher/logs/heartbeat.log
```

Should show heartbeat entries.

### Checkpoint ✓
```
□ heartbeat.sh created and executable
□ Manual test runs without errors
□ Cron job added
□ Cron executes at scheduled time
```

---

## Part 10: Create Shared Telegram Group (5 min)

### Step 10.1: Create Group

1. Open Telegram
2. Tap hamburger menu → "New Group"
3. Add both bots:
   - Your Jarvis bot
   - Your Researcher bot
4. Name: `Workshop X Mission Control`
5. Create group

### Step 10.2: Get Group Chat ID

Send any message in the group.

Then check Researcher logs:
```bash
pm2 logs researcher --lines 10
```

Look for "chat_id" in the log - it's a negative number like `-1001234567890`

Or use @RawDataBot:
1. Add @RawDataBot to the group temporarily
2. It posts the chat ID
3. Remove @RawDataBot

### Step 10.3: Configure Bots to Post to Group (Optional)

For now, agents can post manually when instructed. Automatic posting can be added later.

### Checkpoint ✓
```
□ Telegram group created with both bots
□ Group chat ID noted (for future use)
```

---

## Part 11: Final Testing + Documentation (20 min)

### Step 11.1: End-to-End Handoff Test

**In Jarvis Telegram:**
```
Please create a task in Airtable Mission Control:
- Title: "Research MEMS microphones for BB-01"
- Description: "Find 3 options with IP67+ rating for marine environment"
- Assignee: Researcher
- Priority: normal
- Tags: BB-01, research
```

**Wait for next heartbeat (max 15 min), or manually trigger:**
```bash
~/researcher/heartbeat.sh
```

**Check Researcher picked up:**
- Airtable: Task status should change to "in_progress"
- Researcher Telegram: Should see activity
- Airtable Messages: Should see acknowledgment

### Step 11.2: Document What You Built

Create a summary note:

```bash
nano ~/MISSION_CONTROL_STATUS.md
```

```markdown
# Mission Control v0.1 - Setup Complete

## Date: 2026-02-01

## Components Running

| Component | Status | Port | Notes |
|-----------|--------|------|-------|
| Jarvis | ✅ Online | 18789 | Main agent |
| Researcher | ✅ Online | 18790 | Research agent |
| Airtable | ✅ Connected | - | Mission Control base |
| Heartbeat Cron | ✅ Active | - | Every 15 min |

## Credentials Location

- ~/clawdbot/.env - Jarvis
- ~/researcher/.env - Researcher
- Airtable token in both .env files

## Key Commands

```
pm2 status                    # Check agents
pm2 logs researcher           # View Researcher logs
pm2 restart researcher        # Restart Researcher
~/researcher/heartbeat.sh     # Manual heartbeat
crontab -l                    # View cron jobs
```

## Next Steps (Day 2-3)

1. Complete first real research task
2. Observe heartbeat behavior over 24 hours
3. Refine SOUL.md based on actual behavior
4. Plan DocAgent for Week 2
```

### Step 11.3: Verify Everything Works

Final checklist:

```bash
# Both agents online
pm2 status

# Both agents have logs (no errors)
pm2 logs clawdbot --lines 5
pm2 logs researcher --lines 5

# Cron is scheduled
crontab -l | grep heartbeat

# Airtable has data
# (Check web UI)
```

---

## Day 1 Complete! 🎉

### What You Achieved

1. ✅ **Researcher agent** running as second Clawdbot instance
2. ✅ **Airtable "Mission Control"** as shared database
3. ✅ **Both agents** can read/write to same Airtable
4. ✅ **Heartbeat cron** wakes Researcher every 15 minutes
5. ✅ **Telegram group** for visibility

### What's Different from Single-Agent

| Before (Single Agent) | After (Multi-Agent) |
|-----------------------|---------------------|
| Jarvis does everything | Jarvis delegates research |
| No shared state | Airtable = single source of truth |
| Manual triggers only | Heartbeat = autonomous wakeup |
| One conversation | Multiple specialists |

### Day 2 Preview

- [ ] Complete first real BB-01 research task
- [ ] Observe overnight heartbeat behavior
- [ ] Tune heartbeat message for better task pickup
- [ ] Start planning DocAgent (Agent 3)

---

## Troubleshooting Reference

### Researcher Won't Start
```bash
pm2 logs researcher --err --lines 50
# Check for: port conflict, missing env vars, invalid config
```

### Airtable Connection Failed
```bash
# Test API manually
curl "https://api.airtable.com/v0/YOUR_BASE_ID/Tasks" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### Heartbeat Not Running
```bash
# Check cron daemon
service cron status

# Check cron log
grep CRON /var/log/syslog | tail -20

# Test script manually
bash -x ~/researcher/heartbeat.sh
```

### Agents Can't See Each Other's Work
- Both must use same AIRTABLE_BASE_ID
- Both must use same table names (case-sensitive)
- Check API token has access to base
