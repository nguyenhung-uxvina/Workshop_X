# Mission Control v0.1 - Multi-Agent Clawdbot Setup

## Overview

This is a minimal viable multi-agent system using your existing Clawdbot infrastructure.

**Architecture**:
```
┌─────────────────────────────────────────────────────────────────┐
│                     HETZNER VPS                                  │
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Jarvis     │    │  Researcher  │    │   DocAgent   │       │
│  │  (existing)  │    │   (new)      │    │   (week 2)   │       │
│  │  Port 18789  │    │  Port 18790  │    │  Port 18791  │       │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘       │
│         │                   │                   │                │
│         └───────────┬───────┴───────────────────┘                │
│                     │                                            │
│              ┌──────▼──────┐                                     │
│              │   Airtable  │  ← Mission Control Database         │
│              │  (via MCP)  │                                     │
│              └─────────────┘                                     │
│                                                                  │
│              ┌─────────────┐                                     │
│              │  Telegram   │  ← Visibility Layer                 │
│              │   Group     │                                     │
│              └─────────────┘                                     │
└─────────────────────────────────────────────────────────────────┘
```

## Week 1 Goal

Two agents (Jarvis + Researcher) successfully:
1. Share context via Airtable
2. Post status to shared Telegram group
3. Complete one task handoff

## Files in This Package

```
mission-control-v01/
├── README.md                    # This file
├── agents/
│   ├── jarvis/
│   │   └── SOUL.md              # Updated Jarvis personality
│   ├── researcher/
│   │   └── SOUL.md              # New Researcher agent
│   └── AGENTS.md                # Shared operating instructions
├── config/
│   ├── researcher-config.yaml   # Clawdbot config for Agent 2
│   └── heartbeat-cron.sh        # Cron setup script
├── airtable/
│   └── schema.md                # Airtable base structure
└── scripts/
    ├── setup-agent2.sh          # Automated setup script
    └── test-handoff.sh          # Test task handoff
```

## Quick Start (Tonight - 30 min)

### Step 1: Create Researcher Directory (5 min)

```bash
# SSH to Hetzner VPS
ssh root@your-hetzner-ip
su - clawdbot

# Create parallel directory for Agent 2
mkdir -p ~/researcher
cp -r ~/clawdbot/* ~/researcher/

# Update config (use researcher-config.yaml from this package)
```

### Step 2: Update SOUL Files (10 min)

Copy the SOUL.md files to respective directories.

### Step 3: Setup Airtable Base (10 min)

Create "Mission Control" base with schema from airtable/schema.md

### Step 4: Start Agent 2 (5 min)

```bash
cd ~/researcher
pm2 start npm --name "researcher" -- start
pm2 save
```

### Step 5: Test Basic Communication

Send message to Researcher via Telegram (use separate bot token).

## Detailed Setup Guides

See individual files for detailed instructions.
