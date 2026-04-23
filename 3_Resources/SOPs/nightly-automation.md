# Nightly Automation Setup

Guide for setting up automated compound loops that run overnight.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        DEPLOYMENT OPTIONS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Option A: VPS (Recommended)          Option B: Mac Local       │
│  ┌──────────────────────┐            ┌──────────────────────┐   │
│  │ Hetzner/DO/etc       │            │ macOS launchd        │   │
│  │ - Always on          │            │ - Needs caffeinate   │   │
│  │ - systemd timers     │            │ - Sleep interrupts   │   │
│  │ - Reliable           │            │ - Laptop-dependent   │   │
│  └──────────────────────┘            └──────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Option A: VPS Deployment (Recommended)

### Why VPS?
- No Mac sleep problems
- 24/7 availability
- Can integrate with existing infrastructure (Clawdbot, etc.)
- Production-grade reliability

### Prerequisites
- VPS with Claude Code CLI installed
- Git access to your repository
- API keys configured

### Step 1: Install Claude Code on VPS

```bash
# SSH to your VPS
ssh user@your-vps

# Install Claude Code (npm global)
npm install -g @anthropic-ai/claude-code

# Or via curl
curl -fsSL https://claude.ai/install.sh | sh

# Verify
claude --version
```

### Step 2: Configure Authentication

```bash
# Set API key (or use .env file)
export ANTHROPIC_API_KEY="sk-ant-..."

# Or create .env in project root
echo "ANTHROPIC_API_KEY=sk-ant-..." > ~/projects/your-project/.env
```

### Step 3: Create Scripts Directory

```bash
mkdir -p ~/projects/your-project/scripts/compound
cd ~/projects/your-project/scripts/compound
```

### Step 4: Create Compound Review Script

```bash
cat > daily-compound-review.sh << 'EOF'
#!/bin/bash
# daily-compound-review.sh
# Reviews threads from last 24h, extracts missed learnings

set -e

PROJECT_DIR="${PROJECT_DIR:-$HOME/projects/your-project}"
LOG_DIR="$PROJECT_DIR/logs"
LOG_FILE="$LOG_DIR/compound-review-$(date +%Y%m%d).log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Redirect all output to log
exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== Compound Review Started: $(date) ==="

cd "$PROJECT_DIR"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Run compound review via Claude
claude -p "Load the compound-engineering skill. Review all threads from the last 24 hours. For any thread where we did NOT compound learnings at the end, extract key insights now and update CLAUDE.md. Focus on: code patterns, gotchas, process learnings. Commit changes with message 'compound: daily review [date]' and push to main." \
  --dangerously-skip-permissions

echo "=== Compound Review Completed: $(date) ==="
EOF

chmod +x daily-compound-review.sh
```

### Step 5: Create Auto-Compound Script

```bash
cat > auto-compound.sh << 'EOF'
#!/bin/bash
# auto-compound.sh
# Picks top priority from backlog, implements, creates PR

set -e

PROJECT_DIR="${PROJECT_DIR:-$HOME/projects/your-project}"
LOG_DIR="$PROJECT_DIR/logs"
LOG_FILE="$LOG_DIR/auto-compound-$(date +%Y%m%d).log"
MAX_ITERATIONS="${MAX_ITERATIONS:-25}"

mkdir -p "$LOG_DIR"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "=== Auto-Compound Started: $(date) ==="

cd "$PROJECT_DIR"

# Fetch latest (including tonight's CLAUDE.md updates)
git fetch origin main
git reset --hard origin/main

# Check for priority backlog
BACKLOG_FILE="backlog/priorities.md"
if [ ! -f "$BACKLOG_FILE" ]; then
    echo "No priority backlog found at $BACKLOG_FILE"
    echo "Create a backlog with format:"
    echo "# Priorities"
    echo "1. [Top priority task]"
    echo "2. [Second priority]"
    exit 0
fi

# Extract top priority
PRIORITY=$(grep -m1 "^1\." "$BACKLOG_FILE" | sed 's/^1\. //')

if [ -z "$PRIORITY" ]; then
    echo "No #1 priority found in backlog"
    exit 0
fi

echo "Top Priority: $PRIORITY"

# Create feature branch
BRANCH_NAME="compound/$(date +%Y%m%d)-$(echo "$PRIORITY" | tr ' ' '-' | tr '[:upper:]' '[:lower:]' | head -c 50)"
git checkout -b "$BRANCH_NAME"

# Run implementation loop
echo "Starting implementation loop (max $MAX_ITERATIONS iterations)..."

claude -p "Implement this priority: '$PRIORITY'. 
1. First, read CLAUDE.md to understand project context and patterns.
2. Create a simple plan (3-5 steps max).
3. Implement step by step, testing after each.
4. When complete, compound learnings into CLAUDE.md.
5. Commit all changes with descriptive messages." \
  --dangerously-skip-permissions

# Push and create PR
git push -u origin "$BRANCH_NAME"

# Create draft PR using GitHub CLI
if command -v gh &> /dev/null; then
    gh pr create --draft \
        --title "Compound: $PRIORITY" \
        --body "Auto-implemented by compound-engineering overnight loop.

## Priority
$PRIORITY

## Review Notes
- [ ] Code quality check
- [ ] Tests pass
- [ ] CLAUDE.md updated with learnings

Generated: $(date)" \
        --base main
    echo "Draft PR created"
else
    echo "GitHub CLI not installed, PR not created"
    echo "Push completed to branch: $BRANCH_NAME"
fi

echo "=== Auto-Compound Completed: $(date) ==="
EOF

chmod +x auto-compound.sh
```

### Step 6: Setup systemd Timers

```bash
# Create compound-review service
sudo cat > /etc/systemd/system/compound-review.service << EOF
[Unit]
Description=Compound Engineering Daily Review
After=network.target

[Service]
Type=oneshot
User=$USER
WorkingDirectory=$HOME/projects/your-project
ExecStart=$HOME/projects/your-project/scripts/compound/daily-compound-review.sh
Environment="PATH=/usr/local/bin:/usr/bin:/bin"
Environment="HOME=$HOME"

[Install]
WantedBy=multi-user.target
EOF

# Create compound-review timer (22:30)
sudo cat > /etc/systemd/system/compound-review.timer << EOF
[Unit]
Description=Run Compound Review at 22:30 daily

[Timer]
OnCalendar=*-*-* 22:30:00
Persistent=true

[Install]
WantedBy=timers.target
EOF

# Create auto-compound service
sudo cat > /etc/systemd/system/auto-compound.service << EOF
[Unit]
Description=Compound Engineering Auto Implementation
After=network.target compound-review.service

[Service]
Type=oneshot
User=$USER
WorkingDirectory=$HOME/projects/your-project
ExecStart=$HOME/projects/your-project/scripts/compound/auto-compound.sh
Environment="PATH=/usr/local/bin:/usr/bin:/bin"
Environment="HOME=$HOME"

[Install]
WantedBy=multi-user.target
EOF

# Create auto-compound timer (23:00)
sudo cat > /etc/systemd/system/auto-compound.timer << EOF
[Unit]
Description=Run Auto-Compound at 23:00 daily

[Timer]
OnCalendar=*-*-* 23:00:00
Persistent=true

[Install]
WantedBy=timers.target
EOF
```

### Step 7: Enable and Start Timers

```bash
# Reload systemd
sudo systemctl daemon-reload

# Enable timers (start on boot)
sudo systemctl enable compound-review.timer
sudo systemctl enable auto-compound.timer

# Start timers now
sudo systemctl start compound-review.timer
sudo systemctl start auto-compound.timer

# Verify
systemctl list-timers | grep compound
```

### Step 8: Manual Testing

```bash
# Test compound review manually
sudo systemctl start compound-review.service
journalctl -u compound-review.service -f

# Test auto-compound manually
sudo systemctl start auto-compound.service
journalctl -u auto-compound.service -f
```

---

## Option B: macOS launchd

### Warning
macOS launchd won't wake sleeping Mac. Requires caffeinate or always-on Mac.

### Step 1: Create Launch Agents Directory

```bash
mkdir -p ~/Library/LaunchAgents
```

### Step 2: Create Compound Review plist

```bash
cat > ~/Library/LaunchAgents/com.compound.daily-review.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.compound.daily-review</string>
    
    <key>ProgramArguments</key>
    <array>
        <string>/Users/YOUR_USER/projects/your-project/scripts/compound/daily-compound-review.sh</string>
    </array>
    
    <key>WorkingDirectory</key>
    <string>/Users/YOUR_USER/projects/your-project</string>
    
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>22</integer>
        <key>Minute</key>
        <integer>30</integer>
    </dict>
    
    <key>StandardOutPath</key>
    <string>/Users/YOUR_USER/projects/your-project/logs/compound-review.log</string>
    
    <key>StandardErrorPath</key>
    <string>/Users/YOUR_USER/projects/your-project/logs/compound-review.log</string>
    
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
    </dict>
</dict>
</plist>
EOF

# Replace YOUR_USER
sed -i '' "s/YOUR_USER/$USER/g" ~/Library/LaunchAgents/com.compound.daily-review.plist
```

### Step 3: Create Caffeinate plist

```bash
cat > ~/Library/LaunchAgents/com.compound.caffeinate.plist << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.compound.caffeinate</string>
    
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/caffeinate</string>
        <string>-i</string>
        <string>-t</string>
        <string>32400</string>
    </array>
    
    <!-- Start at 5pm, keep awake for 9 hours (until 2am) -->
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>17</integer>
        <key>Minute</key>
        <integer>0</integer>
    </dict>
</dict>
</plist>
EOF
```

### Step 4: Load Agents

```bash
launchctl load ~/Library/LaunchAgents/com.compound.daily-review.plist
launchctl load ~/Library/LaunchAgents/com.compound.caffeinate.plist

# Verify
launchctl list | grep compound
```

---

## Integration with Clawdbot (Hung's Setup)

If using Clawdbot on Hetzner for Telegram interface:

### Option: Telegram-Triggered Compound

```python
# Add to Clawdbot handlers

@bot.command("compound")
async def trigger_compound(ctx):
    """Manually trigger compound review"""
    await ctx.send("Starting compound review...")
    
    result = subprocess.run(
        ["bash", "/path/to/daily-compound-review.sh"],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        await ctx.send("✅ Compound review completed")
    else:
        await ctx.send(f"❌ Error: {result.stderr[:500]}")

@bot.command("status")
async def compound_status(ctx):
    """Check last compound run status"""
    log_file = "/path/to/logs/compound-review-latest.log"
    # Return last 10 lines of log
```

### Option: Scheduled via Clawdbot

```python
# In Clawdbot scheduler

from apscheduler.schedulers.asyncio import AsyncIOScheduler

scheduler = AsyncIOScheduler()

@scheduler.scheduled_job('cron', hour=22, minute=30)
async def nightly_compound_review():
    """Run compound review at 22:30"""
    subprocess.run(["bash", "/path/to/daily-compound-review.sh"])

@scheduler.scheduled_job('cron', hour=23, minute=0)
async def nightly_auto_compound():
    """Run auto-compound at 23:00"""
    subprocess.run(["bash", "/path/to/auto-compound.sh"])

scheduler.start()
```

---

## Monitoring & Alerts

### Log Rotation

```bash
# /etc/logrotate.d/compound-engineering
/home/user/projects/*/logs/compound-*.log {
    daily
    rotate 14
    compress
    delaycompress
    missingok
    notifempty
}
```

### Slack/Telegram Notifications

Add to end of scripts:

```bash
# Slack webhook
SLACK_WEBHOOK="https://hooks.slack.com/services/..."
curl -X POST -H 'Content-type: application/json' \
    --data '{"text":"✅ Compound review completed"}' \
    "$SLACK_WEBHOOK"

# Telegram bot
TELEGRAM_TOKEN="..."
TELEGRAM_CHAT_ID="..."
curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_TOKEN/sendMessage" \
    -d chat_id="$TELEGRAM_CHAT_ID" \
    -d text="✅ Compound review completed"
```

---

## Troubleshooting

### Job didn't run

```bash
# Check timer status
systemctl status compound-review.timer

# Check service logs
journalctl -u compound-review.service --since today

# Check if timer is active
systemctl list-timers | grep compound
```

### Claude CLI errors

```bash
# Test CLI directly
claude --version
claude -p "echo hello" --dangerously-skip-permissions

# Check API key
echo $ANTHROPIC_API_KEY

# Check network
curl -I https://api.anthropic.com
```

### Git push fails

```bash
# Check SSH key
ssh -T git@github.com

# Check remote
git remote -v

# Try push manually
git push origin main
```
