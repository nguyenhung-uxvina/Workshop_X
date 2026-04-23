#!/usr/bin/env python3
"""
Swarm Orchestration - Session Initializer
Creates a new swarm-state.json from mission parameters.
Usage: python init_swarm.py "Mission objective" --workers researcher,analyst --output ./sessions/
"""

import json
import argparse
import os
from datetime import datetime, timezone, timedelta

VN_TZ = timezone(timedelta(hours=7))

WORKER_ROLES = {
    "researcher": {
        "specialization": "Find, extract, and organize technical information",
        "mcp_tools": ["web_search", "filesystem"]
    },
    "analyst": {
        "specialization": "Evaluate, score, and recommend based on criteria",
        "mcp_tools": ["filesystem", "airtable"]
    },
    "cad-modeler": {
        "specialization": "Create and modify 3D models and technical drawings",
        "mcp_tools": ["freecad", "filesystem"]
    },
    "doc-writer": {
        "specialization": "Create professional technical documentation",
        "mcp_tools": ["filesystem"]
    },
    "qc-checker": {
        "specialization": "Verify quality compliance against standards",
        "mcp_tools": ["airtable", "filesystem"]
    }
}


def create_swarm_state(mission: str, workers: list, success_criteria: list = None, deadline_minutes: int = 120):
    now = datetime.now(VN_TZ)
    swarm_id = f"swarm-{now.strftime('%Y%m%d-%H%M')}"
    deadline = now + timedelta(minutes=deadline_minutes)

    worker_agents = []
    for i, role in enumerate(workers, 1):
        worker_agents.append({
            "id": f"worker-{i:02d}",
            "role": role,
            "specialization": WORKER_ROLES.get(role, {}).get("specialization", role),
            "mcp_tools": WORKER_ROLES.get(role, {}).get("mcp_tools", []),
            "status": "idle",
            "last_heartbeat": now.isoformat(),
            "current_task": None,
            "progress_pct": 0,
            "blockers": [],
            "outputs": []
        })

    state = {
        "swarm_id": swarm_id,
        "created_at": now.isoformat(),
        "mission": {
            "objective": mission,
            "success_criteria": success_criteria or ["Complete all assigned tasks", "Pass shadow review"],
            "deadline": deadline.isoformat(),
            "priority": "HIGH"
        },
        "agents": {
            "lead": {
                "id": "lead-01",
                "status": "active",
                "last_heartbeat": now.isoformat(),
                "current_action": "initializing",
                "message_queue_depth": 0,
                "tasks_assigned": 0,
                "tasks_verified": 0
            },
            "workers": worker_agents,
            "shadow": {
                "id": "shadow-01",
                "status": "watching",
                "last_heartbeat": now.isoformat(),
                "reviews_pending": [],
                "reviews_completed": [],
                "issues_found": 0
            }
        },
        "task_board": {
            "backlog": [],
            "in_progress": [],
            "review": [],
            "done": []
        },
        "message_log": [
            {
                "timestamp": now.isoformat(),
                "from": "system",
                "to": "all",
                "type": "STATUS",
                "content": f"Swarm {swarm_id} initialized. Mission: {mission}. {len(workers)} workers + 1 lead + 1 shadow.",
                "requires_response": False
            }
        ],
        "shared_context": {
            "key_decisions": [],
            "artifacts_created": [],
            "blockers_active": [],
            "lessons_learned": []
        },
        "health": {
            "swarm_uptime_minutes": 0,
            "agents_alive": len(workers) + 2,  # workers + lead + shadow
            "agents_total": len(workers) + 2,
            "last_failure": None,
            "coordination_errors": 0
        }
    }

    return swarm_id, state


def load_past_trajectories(trajectory_dir: str, max_recent: int = 3):
    """Load recent trajectories for Lead's context."""
    trajectories = []
    if os.path.exists(trajectory_dir):
        files = sorted(
            [f for f in os.listdir(trajectory_dir) if f.endswith('.json')],
            reverse=True
        )[:max_recent]
        for f in files:
            with open(os.path.join(trajectory_dir, f)) as fh:
                traj = json.load(fh)
                trajectories.append({
                    "id": traj.get("trajectory_id", f),
                    "mission": traj.get("mission", ""),
                    "lessons": traj.get("retrospective", {}).get("coordination_lessons", []),
                    "patterns": traj.get("patterns_for_future", [])
                })
    return trajectories


def main():
    parser = argparse.ArgumentParser(description="Initialize a swarm session")
    parser.add_argument("mission", help="Mission objective")
    parser.add_argument("--workers", default="researcher,analyst",
                        help="Comma-separated worker roles")
    parser.add_argument("--criteria", nargs="*",
                        help="Success criteria (list)")
    parser.add_argument("--deadline", type=int, default=120,
                        help="Deadline in minutes (default: 120)")
    parser.add_argument("--output", default="./sessions",
                        help="Output directory")
    parser.add_argument("--trajectories", default="./trajectories",
                        help="Past trajectories directory")

    args = parser.parse_args()
    workers = [w.strip() for w in args.workers.split(",")]

    swarm_id, state = create_swarm_state(
        mission=args.mission,
        workers=workers,
        success_criteria=args.criteria,
        deadline_minutes=args.deadline
    )

    # Load past trajectories for context
    past = load_past_trajectories(args.trajectories)
    if past:
        state["past_trajectories_summary"] = past
        print(f"📚 Loaded {len(past)} past trajectories for context")

    # Write state file
    os.makedirs(args.output, exist_ok=True)
    output_path = os.path.join(args.output, f"{swarm_id}-state.json")
    with open(output_path, 'w') as f:
        json.dump(state, f, indent=2, ensure_ascii=False)

    print(f"🐝 Swarm initialized: {swarm_id}")
    print(f"📋 Mission: {args.mission}")
    print(f"👷 Workers: {', '.join(workers)}")
    print(f"👁️ Shadow: active")
    print(f"⏱️ Deadline: {args.deadline} minutes")
    print(f"📁 State file: {output_path}")
    print()
    print("Next steps:")
    print("  1. Lead reads state file and decomposes mission into tasks")
    print("  2. Workers pick up tasks from task_board.backlog")
    print("  3. Shadow reviews all HANDOFFs")
    print("  4. Lead verifies and closes tasks")

    return output_path


if __name__ == "__main__":
    main()
