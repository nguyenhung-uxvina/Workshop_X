#!/usr/bin/env python3
"""
Pahl & Beitz Mastery Progress Tracker

Tracks progression through systematic design methodology mastery using
evidence-based assessment across all 4 design phases.
"""

import json
import os
from datetime import datetime
from typing import Dict, List

class MasteryTracker:
    """Track mastery progression through P&B methodology"""
    
    # Mastery levels
    NOVICE = 1
    ADVANCED_BEGINNER = 2
    COMPETENT = 3
    PROFICIENT = 4
    EXPERT = 5
    
    LEVEL_NAMES = {
        1: "Novice",
        2: "Advanced Beginner",
        3: "Competent",
        4: "Proficient",
        5: "Expert"
    }
    
    def __init__(self, filepath: str = "mastery_progress.json"):
        self.filepath = filepath
        self.data = self._load_data()
    
    def _load_data(self) -> Dict:
        """Load existing progress data or initialize new"""
        if os.path.exists(self.filepath):
            with open(self.filepath, 'r') as f:
                return json.load(f)
        else:
            return {
                'created': datetime.now().isoformat(),
                'phases': {
                    'task_clarification': {'level': 1, 'evidence': []},
                    'conceptual_design': {'level': 1, 'evidence': []},
                    'embodiment_design': {'level': 1, 'evidence': []},
                    'detail_design': {'level': 1, 'evidence': []}
                },
                'projects': [],
                'reflections': [],
                'dmir_cycles': []
            }
    
    def _save_data(self):
        """Persist progress data"""
        with open(self.filepath, 'w') as f:
            json.dump(self.data, f, indent=2)
    
    def add_evidence(self, phase: str, evidence_type: str, description: str):
        """
        Add evidence of mastery for a phase
        
        Args:
            phase: One of 'task_clarification', 'conceptual_design', 'embodiment_design', 'detail_design'
            evidence_type: Type of evidence ('project', 'documentation', 'review', 'teaching')
            description: What was accomplished
        """
        if phase not in self.data['phases']:
            raise ValueError(f"Unknown phase: {phase}")
        
        evidence = {
            'date': datetime.now().isoformat(),
            'type': evidence_type,
            'description': description
        }
        
        self.data['phases'][phase]['evidence'].append(evidence)
        self._save_data()
        
        # Check if level should increase
        self._update_level(phase)
    
    def _update_level(self, phase: str):
        """Automatically update mastery level based on evidence"""
        evidence_count = len(self.data['phases'][phase]['evidence'])
        current_level = self.data['phases'][phase]['level']
        
        # Criteria for level advancement
        if evidence_count >= 15 and current_level < self.EXPERT:
            self.data['phases'][phase]['level'] = self.EXPERT
        elif evidence_count >= 10 and current_level < self.PROFICIENT:
            self.data['phases'][phase]['level'] = self.PROFICIENT
        elif evidence_count >= 6 and current_level < self.COMPETENT:
            self.data['phases'][phase]['level'] = self.COMPETENT
        elif evidence_count >= 3 and current_level < self.ADVANCED_BEGINNER:
            self.data['phases'][phase]['level'] = self.ADVANCED_BEGINNER
        
        self._save_data()
    
    def add_project(self, name: str, phases_completed: List[str], 
                   description: str, documentation_links: List[str] = None):
        """Record a completed project"""
        project = {
            'date': datetime.now().isoformat(),
            'name': name,
            'phases_completed': phases_completed,
            'description': description,
            'documentation': documentation_links or []
        }
        
        self.data['projects'].append(project)
        
        # Add evidence for each phase
        for phase in phases_completed:
            self.add_evidence(phase, 'project', f"Completed project: {name}")
        
        self._save_data()
    
    def add_reflection(self, content: str, insights: List[str]):
        """Add reflection from D-M-I-R cycle"""
        reflection = {
            'date': datetime.now().isoformat(),
            'content': content,
            'insights': insights
        }
        
        self.data['reflections'].append(reflection)
        self._save_data()
    
    def add_dmir_cycle(self, week: int, diagnosis: str, model: str, 
                      intervention: str, reflection: str, learned: str):
        """Record a completed D-M-I-R learning cycle"""
        cycle = {
            'week': week,
            'date': datetime.now().isoformat(),
            'diagnosis': diagnosis,
            'model': model,
            'intervention': intervention,
            'reflection': reflection,
            'learned': learned
        }
        
        self.data['dmir_cycles'].append(cycle)
        self._save_data()
    
    def get_current_status(self) -> Dict:
        """Get current mastery status across all phases"""
        status = {}
        
        for phase, data in self.data['phases'].items():
            level = data['level']
            evidence_count = len(data['evidence'])
            
            status[phase] = {
                'level': level,
                'level_name': self.LEVEL_NAMES[level],
                'evidence_count': evidence_count,
                'next_level': self.LEVEL_NAMES.get(level + 1, 'Expert (Max)')
            }
        
        return status
    
    def generate_report(self) -> str:
        """Generate comprehensive progress report"""
        report = []
        report.append("=" * 80)
        report.append("PAHL & BEITZ MASTERY PROGRESS REPORT")
        report.append("=" * 80)
        report.append(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
        report.append(f"Tracking since: {self.data['created'][:10]}")
        report.append("")
        
        # Overall summary
        total_projects = len(self.data['projects'])
        total_dmir_cycles = len(self.data['dmir_cycles'])
        avg_level = sum(p['level'] for p in self.data['phases'].values()) / 4
        
        report.append("OVERALL SUMMARY:")
        report.append("-" * 80)
        report.append(f"  Projects Completed: {total_projects}")
        report.append(f"  D-M-I-R Cycles: {total_dmir_cycles}")
        report.append(f"  Average Mastery Level: {avg_level:.1f} / 5.0")
        report.append("")
        
        # Phase-by-phase status
        report.append("MASTERY BY PHASE:")
        report.append("-" * 80)
        
        status = self.get_current_status()
        for phase, info in status.items():
            phase_name = phase.replace('_', ' ').title()
            level_bar = "█" * info['level'] + "░" * (5 - info['level'])
            
            report.append(f"  {phase_name:25s} [{level_bar}] {info['level_name']}")
            report.append(f"  {'':25s} Evidence items: {info['evidence_count']}")
            report.append(f"  {'':25s} Next level: {info['next_level']}")
            report.append("")
        
        # Recent projects
        if self.data['projects']:
            report.append("RECENT PROJECTS:")
            report.append("-" * 80)
            for project in self.data['projects'][-5:]:  # Last 5 projects
                report.append(f"  • {project['name']} ({project['date'][:10]})")
                report.append(f"    Phases: {', '.join(p.replace('_', ' ').title() for p in project['phases_completed'])}")
                report.append(f"    {project['description']}")
                report.append("")
        
        # Learning trajectory
        report.append("LEARNING RECOMMENDATIONS:")
        report.append("-" * 80)
        
        recommendations = self._generate_recommendations(status)
        for rec in recommendations:
            report.append(f"  • {rec}")
        
        report.append("")
        report.append("=" * 80)
        
        return "\n".join(report)
    
    def _generate_recommendations(self, status: Dict) -> List[str]:
        """Generate personalized learning recommendations"""
        recommendations = []
        
        # Find weakest phase
        weakest_phase = min(status.items(), key=lambda x: x[1]['level'])
        weakest_name = weakest_phase[0].replace('_', ' ').title()
        
        if weakest_phase[1]['level'] < 3:
            recommendations.append(
                f"Focus on {weakest_name} - currently {weakest_phase[1]['level_name']}. "
                f"Complete a project specifically targeting this phase."
            )
        
        # Check project count
        if len(self.data['projects']) < 3:
            needed = 3 - len(self.data['projects'])
            recommendations.append(
                f"Complete {needed} more project(s) to reach competence baseline (target: 3 projects minimum)"
            )
        
        # Check D-M-I-R cycle consistency
        if len(self.data['dmir_cycles']) < 4:
            recommendations.append(
                "Establish consistent weekly D-M-I-R cycles - currently below 4 weeks of tracked cycles"
            )
        
        # Check balance across phases
        levels = [p['level'] for p in status.values()]
        if max(levels) - min(levels) > 2:
            recommendations.append(
                "Mastery is unbalanced across phases. Work on weaker phases before advancing stronger ones."
            )
        
        # Advanced recommendations
        if all(p['level'] >= 3 for p in status.values()):
            recommendations.append(
                "✓ Reached competence across all phases! Consider: (1) Teaching others, "
                "(2) Complex multi-phase project, (3) Defense-specific advanced methods"
            )
        
        return recommendations


def example_usage():
    """Demonstrate tracker usage"""
    
    tracker = MasteryTracker("example_progress.json")
    
    # Add some example evidence
    tracker.add_evidence(
        'task_clarification',
        'documentation',
        'Created comprehensive requirements list for portable surveillance system with 25 requirements'
    )
    
    tracker.add_evidence(
        'conceptual_design',
        'project',
        'Developed 3 concepts with function structures and evaluated using VDI 2225'
    )
    
    # Add a project
    tracker.add_project(
        name="Weapon Mount Design",
        phases_completed=['task_clarification', 'conceptual_design', 'embodiment_design'],
        description="Designed universal weapon mount for vehicle application",
        documentation_links=["https://github.com/user/weapon-mount"]
    )
    
    # Add D-M-I-R cycle
    tracker.add_dmir_cycle(
        week=1,
        diagnosis="Constraint: Slow feedback on design decisions",
        model="Feedback latency = 3 weeks (mentor-dependent)",
        intervention="Installed AI-powered daily review + peer weekly check-in",
        reflection="Feedback cycles increased 10x (3 weeks → 2 days average)",
        learned="Fast feedback > more study time. System structure matters."
    )
    
    # Generate and print report
    print(tracker.generate_report())


if __name__ == "__main__":
    example_usage()
