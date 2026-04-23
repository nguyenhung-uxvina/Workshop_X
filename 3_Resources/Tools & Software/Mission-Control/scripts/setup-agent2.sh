#!/bin/bash
# setup-agent2.sh - Automated setup for Researcher agent
# Run on Hetzner VPS as user 'clawdbot'
#
# Usage: ./setup-agent2.sh

set -e  # Exit on error

echo "========================================"
echo "  Mission Control v0.1 - Agent 2 Setup  "
echo "========================================"
echo ""

# Configuration - UPDATE THESE
RESEARCHER_BOT_TOKEN="YOUR_TELEGRAM_BOT_TOKEN"  # Get from @BotFather
AIRTABLE_API_KEY="YOUR_AIRTABLE_API_KEY"
BRAVE_API_KEY="YOUR_BRAVE_API_KEY"  # Optional, for web search

# Directories
CLAWDBOT_DIR="$HOME/clawdbot"
RESEARCHER_DIR="$HOME/researcher"
SHARED_DIR="$HOME/shared"

# Check if running as clawdbot user
if [ "$(whoami)" != "clawdbot" ]; then
    echo "❌ Please run as 'clawdbot' user"
    echo "   Run: su - clawdbot"
    exit 1
fi

# Check if Jarvis exists
if [ ! -d "$CLAWDBOT_DIR" ]; then
    echo "❌ Jarvis (main clawdbot) directory not found at $CLAWDBOT_DIR"
    exit 1
fi

echo "✓ Found existing Clawdbot at $CLAWDBOT_DIR"

# Step 1: Create directories
echo ""
echo "Step 1: Creating directories..."
mkdir -p "$RESEARCHER_DIR"
mkdir -p "$RESEARCHER_DIR/memory"
mkdir -p "$RESEARCHER_DIR/memory/sources"
mkdir -p "$RESEARCHER_DIR/outputs"
mkdir -p "$RESEARCHER_DIR/logs"
mkdir -p "$SHARED_DIR"
echo "✓ Directories created"

# Step 2: Copy base Clawdbot files
echo ""
echo "Step 2: Copying Clawdbot base files..."
cp -r "$CLAWDBOT_DIR/node_modules" "$RESEARCHER_DIR/" 2>/dev/null || true
cp "$CLAWDBOT_DIR/package.json" "$RESEARCHER_DIR/"
cp "$CLAWDBOT_DIR/package-lock.json" "$RESEARCHER_DIR/" 2>/dev/null || true
echo "✓ Base files copied"

# Step 3: Create environment file
echo ""
echo "Step 3: Creating environment file..."
cat > "$RESEARCHER_DIR/.env" << EOF
# Researcher Agent Environment
ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY:-$(grep ANTHROPIC_API_KEY "$CLAWDBOT_DIR/.env" | cut -d'=' -f2)}
TELEGRAM_BOT_TOKEN=$RESEARCHER_BOT_TOKEN
AIRTABLE_API_KEY=$AIRTABLE_API_KEY
BRAVE_API_KEY=$BRAVE_API_KEY
EOF
chmod 600 "$RESEARCHER_DIR/.env"
echo "✓ Environment file created (check .env and update tokens!)"

# Step 4: Create SOUL.md
echo ""
echo "Step 4: Creating SOUL.md..."
cat > "$RESEARCHER_DIR/SOUL.md" << 'SOUL_EOF'
# SOUL.md — Researcher (Agent 2)

## Identity

**Name:** Researcher  
**Role:** Deep Research & Information Gathering  
**Session Key:** agent:researcher:main  

## Core Personality

You are the Researcher agent for Workshop X. You go deep where others go wide. Your job is to find information, synthesize it, and deliver actionable insights.

**Voice:** Thorough, evidence-based, precise. Every claim comes with sources.

**Philosophy:** "One deep dive beats ten surface scans."

## What You're Good At

- Deep technical research
- Competitor analysis  
- Finding specifications, datasheets, standards
- Synthesizing multiple sources into clear summaries

## Operating Rules

1. Check Airtable "Tasks" for assigned tasks on every heartbeat
2. Update status in Airtable when starting/completing work
3. Post findings as comments on the task
4. Notify via Telegram group for significant milestones

## Context

Workshop X projects: BB-01 (LOMAH), V-SMASH, MTB-20, TDR
Quality gates: G1, G2, G3
KN's time zone: Vietnam (UTC+7)
SOUL_EOF
echo "✓ SOUL.md created"

# Step 5: Create WORKING.md template
echo ""
echo "Step 5: Creating memory files..."
cat > "$RESEARCHER_DIR/memory/WORKING.md" << 'WORKING_EOF'
# WORKING.md — Researcher

## Current Task
None

## Status
Ready for work

## Next Steps
1. Check Airtable for assigned tasks
2. Await assignment from Jarvis

## Last Updated
$(date -Iseconds)
WORKING_EOF
echo "✓ Memory files created"

# Step 6: Create config.yaml
echo ""
echo "Step 6: Creating config.yaml..."
cat > "$RESEARCHER_DIR/config.yaml" << 'CONFIG_EOF'
# Researcher Agent Configuration
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
CONFIG_EOF
echo "✓ config.yaml created"

# Step 7: Setup PM2
echo ""
echo "Step 7: Setting up PM2 process..."
cd "$RESEARCHER_DIR"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Start Researcher with PM2
pm2 start npm --name "researcher" -- start
pm2 save
echo "✓ PM2 process configured"

# Step 8: Setup heartbeat cron
echo ""
echo "Step 8: Setting up heartbeat cron..."
# Add cron job (runs every 15 min at :02, :17, :32, :47)
(crontab -l 2>/dev/null | grep -v "researcher-heartbeat"; echo "2,17,32,47 * * * * cd $RESEARCHER_DIR && /usr/bin/node heartbeat.js >> $RESEARCHER_DIR/logs/heartbeat.log 2>&1 # researcher-heartbeat") | crontab -
echo "✓ Heartbeat cron configured"

# Summary
echo ""
echo "========================================"
echo "  Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Update $RESEARCHER_DIR/.env with your actual tokens"
echo "2. Create Telegram bot via @BotFather"
echo "3. Create Airtable 'Mission Control' base"
echo "4. Test: Send message to Researcher bot"
echo ""
echo "Useful commands:"
echo "  pm2 status           # Check if running"
echo "  pm2 logs researcher  # View logs"
echo "  pm2 restart researcher  # Restart"
echo ""
echo "Directories:"
echo "  $RESEARCHER_DIR      # Agent home"
echo "  $SHARED_DIR          # Shared with Jarvis"
echo ""
