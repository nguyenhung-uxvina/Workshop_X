#!/usr/bin/env python3
"""
Trajectory Generator - Extract compound learning from swarm sessions.
Reads a swarm-state.json and generates a trajectory document.
Usage: python generate_trajectory.py ./sessions/swarm-20260206-1900-state.json --output ./trajectories/
"""

import json
import argparse
import os
from datetime import datetime, timezone, timedelta

VN_TZ = timezone(timedelta(hours=7))


def extract_trajectory(state: dict) -> dict:
    now = datetime.now(VN_TZ)
    swarm_id = state.get("swarm_id", "unknown")
    
    # Extract team composition
    workers = state.get("agents", {}).get("workers", [])
    team = {
        "lead": state.get("agents", {}).get("lead", {}).get("id", "lead-01"),
        "workers": [f"{w['id']} ({w['role']})" for w in workers],
        "shadow": state.get("agents", {}).get("shadow", {}).get("id", "shadow-01"),
        "total_agents": len(workers) + 2
    }

    # Extract chapters from message log
    messages = state.get("message_log", [])
    chapters = []

    # Chapter 1: Setup decisions
    setup_events = []
    for msg in messages:
        if msg.get("type") == "STATUS" and msg.get("from") in ["system", "lead-01"]:
            setup_events.append({
                "type": "decision",
                "content": msg.get("content", ""),
                "reasoning": "",
                "significance": "medium"
            })
        if len(setup_events) >= 5:
            break
    chapters.append({"title": "Mission Setup", "events": setup_events})

    # Chapter 2: Execution events (key STATUS and REQUEST messages)
    exec_events = []
    for msg in messages:
        if msg.get("type") == "REQUEST":
            exec_events.append({
                "type": "coordination",
                "content": f"{msg['from']} → {msg['to']}: {msg.get('content', '')}",
                "reasoning": msg.get("request_type", ""),
                "significance": "high" if msg.get("urgency") in ["high", "critical"] else "medium"
            })
        elif msg.get("type") == "HANDOFF":
            exec_events.append({
                "type": "completion",
                "content": f"{msg['from']} completed: {msg.get('work_completed', '')}",
                "reasoning": "",
                "significance": "high"
            })
    chapters.append({"title": "Execution", "events": exec_events})

    # Chapter 3: Coordination incidents
    incidents = []
    health = state.get("health", {})
    if health.get("coordination_errors", 0) > 0:
        incidents.append({
            "type": "incident",
            "content": f"{health['coordination_errors']} coordination errors during session",
            "reasoning": "",
            "significance": "high"
        })
    if health.get("last_failure"):
        incidents.append({
            "type": "incident",
            "content": f"Last failure: {health['last_failure']}",
            "reasoning": "",
            "significance": "critical"
        })
    # Check for blocked workers
    for w in workers:
        if w.get("blockers"):
            incidents.append({
                "type": "blocker",
                "content": f"{w['id']} blocked by: {', '.join(w['blockers'])}",
                "reasoning": "",
                "significance": "high"
            })
    chapters.append({"title": "Coordination Incidents", "events": incidents})

    # Extract outcomes
    task_board = state.get("task_board", {})
    tasks_done = len(task_board.get("done", []))
    tasks_total = sum(len(task_board.get(k, [])) for k in ["backlog", "in_progress", "review", "done"])
    
    artifacts = state.get("shared_context", {}).get("artifacts_created", [])

    outcomes = {
        "mission_success": tasks_done == tasks_total and tasks_total > 0,
        "artifacts_produced": artifacts,
        "quality_score": 0,  # To be filled by human review
        "tasks_completed": tasks_done,
        "tasks_total": tasks_total
    }

    # Extract coordination metrics
    lead = state.get("agents", {}).get("lead", {})
    shadow = state.get("agents", {}).get("shadow", {})
    
    # Count autonomous worker completions (HANDOFFs without Lead intervention)
    total_handoffs = len([m for m in messages if m.get("type") == "HANDOFF"])
    lead_interventions = len([m for m in messages if m.get("from") == "lead-01" and m.get("type") == "REQUEST"])
    autonomy_rate = ((total_handoffs - lead_interventions) / max(total_handoffs, 1)) * 100

    coord_metrics = {
        "lead_message_queue_max": lead.get("message_queue_depth", 0),
        "worker_autonomy_rate_pct": round(autonomy_rate),
        "shadow_issues_caught": shadow.get("issues_found", 0),
        "false_completions_detected": 0,  # Extracted from shadow reviews
        "agent_failures": health.get("agents_total", 0) - health.get("agents_alive", 0),
        "recovery_time_seconds": 0,
        "longest_block_minutes": 0
    }

    # Extract lessons from shared context
    lessons = state.get("shared_context", {}).get("lessons_learned", [])

    trajectory = {
        "trajectory_id": f"traj-{now.strftime('%Y%m%d-%H%M')}",
        "session_date": now.isoformat(),
        "duration_minutes": health.get("swarm_uptime_minutes", 0),
        "mission": state.get("mission", {}).get("objective", ""),
        "team_composition": team,
        "chapters": chapters,
        "outcomes": outcomes,
        "coordination_metrics": coord_metrics,
        "retrospective": {
            "what_worked": [],
            "what_broke": [],
            "coordination_lessons": lessons,
            "architecture_improvements": [],
            "confidence": 0.0
        },
        "patterns_for_future": [],
        "tags": [state.get("mission", {}).get("priority", ""), swarm_id]
    }

    return trajectory


def main():
    parser = argparse.ArgumentParser(description="Generate trajectory from swarm session")
    parser.add_argument("state_file", help="Path to swarm-state.json")
    parser.add_argument("--output", default="./trajectories", help="Output directory")

    args = parser.parse_args()

    with open(args.state_file) as f:
        state = json.load(f)

    trajectory = extract_trajectory(state)

    os.makedirs(args.output, exist_ok=True)
    output_path = os.path.join(args.output, f"{trajectory['trajectory_id']}.json")
    
    with open(output_path, 'w') as f:
        json.dump(trajectory, f, indent=2, ensure_ascii=False)

    print(f"📝 Trajectory generated: {trajectory['trajectory_id']}")
    print(f"📋 Mission: {trajectory['mission']}")
    print(f"✅ Tasks: {trajectory['outcomes']['tasks_completed']}/{trajectory['outcomes']['tasks_total']}")
    print(f"🔍 Shadow issues: {trajectory['coordination_metrics']['shadow_issues_caught']}")
    print(f"🤖 Worker autonomy: {trajectory['coordination_metrics']['worker_autonomy_rate_pct']}%")
    print(f"📁 Saved to: {output_path}")
    print()
    print("⚠️  Review and fill in:")
    print("  - retrospective.what_worked")
    print("  - retrospective.what_broke")
    print("  - retrospective.architecture_improvements")
    print("  - patterns_for_future")
    print("  These compound into future session context.")


if __name__ == "__main__":
    main()
