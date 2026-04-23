#!/bin/bash
# test-handoff.sh - Test task handoff between Jarvis and Researcher
#
# This script simulates the complete handoff flow:
# 1. Jarvis creates a task in Airtable
# 2. Researcher picks it up on heartbeat
# 3. Researcher completes and updates status
#
# Prerequisites:
# - Airtable base "Mission Control" created
# - Both agents running (Jarvis + Researcher)
# - AIRTABLE_API_KEY and AIRTABLE_BASE_ID set

set -e

# Configuration - UPDATE THESE
AIRTABLE_API_KEY="${AIRTABLE_API_KEY:-your_api_key}"
AIRTABLE_BASE_ID="${AIRTABLE_BASE_ID:-your_base_id}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "========================================"
echo "  Mission Control - Handoff Test"
echo "========================================"
echo ""

# Check prerequisites
echo "Checking prerequisites..."

if [ "$AIRTABLE_API_KEY" = "your_api_key" ]; then
    echo -e "${RED}❌ AIRTABLE_API_KEY not set${NC}"
    echo "   Export it: export AIRTABLE_API_KEY=your_key"
    exit 1
fi

if [ "$AIRTABLE_BASE_ID" = "your_base_id" ]; then
    echo -e "${RED}❌ AIRTABLE_BASE_ID not set${NC}"
    echo "   Export it: export AIRTABLE_BASE_ID=your_base_id"
    exit 1
fi

# Check if agents are running
if pm2 list | grep -q "clawdbot.*online"; then
    echo -e "${GREEN}✓ Jarvis (clawdbot) is running${NC}"
else
    echo -e "${YELLOW}⚠ Jarvis (clawdbot) may not be running${NC}"
fi

if pm2 list | grep -q "researcher.*online"; then
    echo -e "${GREEN}✓ Researcher is running${NC}"
else
    echo -e "${YELLOW}⚠ Researcher may not be running${NC}"
fi

echo ""

# Step 1: Create test task in Airtable
echo "Step 1: Creating test task in Airtable..."

TASK_DATA=$(cat <<EOF
{
  "fields": {
    "Title": "TEST: Research acoustic sensor specs",
    "Description": "This is a test task to verify handoff. Please find 3 MEMS microphones suitable for marine environment.",
    "Status": "assigned",
    "Assignee": "Researcher",
    "Priority": "normal",
    "Tags": ["BB-01", "research"],
    "Created By": "Jarvis"
  }
}
EOF
)

RESPONSE=$(curl -s -X POST "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/Tasks" \
  -H "Authorization: Bearer $AIRTABLE_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$TASK_DATA")

TASK_ID=$(echo "$RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$TASK_ID" ]; then
    echo -e "${GREEN}✓ Task created: $TASK_ID${NC}"
else
    echo -e "${RED}❌ Failed to create task${NC}"
    echo "$RESPONSE"
    exit 1
fi

# Step 2: Add handoff comment
echo ""
echo "Step 2: Adding handoff comment..."

COMMENT_DATA=$(cat <<EOF
{
  "fields": {
    "Task": ["$TASK_ID"],
    "From Agent": "Jarvis",
    "Content": "@Researcher - This is a test handoff. Please:\n1. Acknowledge receipt\n2. Find 3 MEMS microphones with IP67+ rating\n3. Update status to 'review' when done\n\nThis is automated test - respond via Airtable comment.",
    "Mentions": ["@Researcher"]
  }
}
EOF
)

COMMENT_RESPONSE=$(curl -s -X POST "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/Messages" \
  -H "Authorization: Bearer $AIRTABLE_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$COMMENT_DATA")

COMMENT_ID=$(echo "$COMMENT_RESPONSE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)

if [ -n "$COMMENT_ID" ]; then
    echo -e "${GREEN}✓ Comment added: $COMMENT_ID${NC}"
else
    echo -e "${RED}❌ Failed to add comment${NC}"
    echo "$COMMENT_RESPONSE"
fi

# Step 3: Wait and check
echo ""
echo "Step 3: Monitoring for handoff..."
echo ""
echo "Researcher heartbeat runs every 15 minutes at :02, :17, :32, :47"
echo "Current time: $(date '+%H:%M:%S')"
echo ""
echo "What to watch for:"
echo "  1. Researcher picks up task (Status → 'in_progress')"
echo "  2. Researcher posts findings in Airtable comments"
echo "  3. Researcher updates status to 'review'"
echo "  4. Researcher posts to Telegram group"
echo ""
echo "Commands to monitor:"
echo "  pm2 logs researcher --lines 50    # Watch Researcher logs"
echo "  Check Airtable Tasks view          # Watch status change"
echo "  Check Telegram Mission Control group"
echo ""

# Optional: Poll for status change
echo -e "${YELLOW}Polling for status change (Ctrl+C to stop)...${NC}"
echo ""

for i in {1..20}; do
    sleep 30
    
    TASK_STATUS=$(curl -s "https://api.airtable.com/v0/$AIRTABLE_BASE_ID/Tasks/$TASK_ID" \
      -H "Authorization: Bearer $AIRTABLE_API_KEY" | grep -o '"Status":"[^"]*"' | cut -d'"' -f4)
    
    echo "$(date '+%H:%M:%S') - Task status: $TASK_STATUS"
    
    if [ "$TASK_STATUS" = "in_progress" ]; then
        echo -e "${GREEN}✓ Researcher picked up the task!${NC}"
    fi
    
    if [ "$TASK_STATUS" = "review" ] || [ "$TASK_STATUS" = "done" ]; then
        echo -e "${GREEN}✓ Handoff complete! Status: $TASK_STATUS${NC}"
        echo ""
        echo "========================================"
        echo "  TEST PASSED ✓"
        echo "========================================"
        exit 0
    fi
done

echo ""
echo -e "${YELLOW}Timeout reached. Check manually:${NC}"
echo "  Airtable: https://airtable.com/$AIRTABLE_BASE_ID"
echo "  Task ID: $TASK_ID"
