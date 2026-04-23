#!/usr/bin/env python3
"""
VDI 2225 Concept Evaluation Calculator
Systematic concept evaluation for defense/security product development

Usage:
    python vdi2225_calculator.py                    # Interactive mode
    python vdi2225_calculator.py --example          # Run example evaluation
    python vdi2225_calculator.py --load FILE.json   # Load from JSON file
"""

import json
import argparse
from typing import Dict, List, Tuple
from dataclasses import dataclass
from datetime import datetime


@dataclass
class Criterion:
    """Evaluation criterion with weight"""
    name: str
    weight: float
    description: str = ""


@dataclass
class Concept:
    """Design concept with scores"""
    name: str
    scores: Dict[str, int]  # criterion_name -> score (0-4)
    description: str = ""


class VDI2225Evaluator:
    """
    VDI 2225 Concept Evaluation Calculator
    
    Scoring Scale:
        0 = Absolutely unsatisfactory (not acceptable)
        1 = Just tolerable (barely meets minimum)
        2 = Adequate (satisfactory)
        3 = Good (better than adequate)
        4 = Very good (close to ideal solution)
    """
    
    MAX_SCORE = 4
    
    def __init__(self, project_name: str = ""):
        self.project_name = project_name
        self.criteria: List[Criterion] = []
        self.concepts: List[Concept] = []
        
    def add_criterion(self, name: str, weight: float, description: str = ""):
        """Add evaluation criterion"""
        self.criteria.append(Criterion(name, weight, description))
        
    def add_concept(self, name: str, scores: Dict[str, int], description: str = ""):
        """Add concept to evaluate"""
        # Validate scores
        for criterion_name, score in scores.items():
            if score < 0 or score > self.MAX_SCORE:
                raise ValueError(f"Score must be 0-{self.MAX_SCORE}, got {score}")
        self.concepts.append(Concept(name, scores, description))
        
    def validate(self) -> List[str]:
        """Validate evaluation setup"""
        issues = []
        
        # Check weights sum to 1.0
        total_weight = sum(c.weight for c in self.criteria)
        if abs(total_weight - 1.0) > 0.01:
            issues.append(f"Criterion weights sum to {total_weight:.2f}, should be 1.0")
            
        # Check all concepts have scores for all criteria
        criterion_names = {c.name for c in self.criteria}
        for concept in self.concepts:
            missing = criterion_names - set(concept.scores.keys())
            if missing:
                issues.append(f"Concept '{concept.name}' missing scores for: {missing}")
                
        return issues
        
    def evaluate(self) -> Dict:
        """
        Perform VDI 2225 evaluation
        
        Returns dict with:
            - results: list of (concept_name, weighted_sum, percentage, decision)
            - ranking: ordered list by percentage
            - recommendation: best concept with rationale
        """
        # Validate first
        issues = self.validate()
        if issues:
            return {"error": issues}
            
        results = []
        max_possible = sum(c.weight * self.MAX_SCORE for c in self.criteria)
        
        for concept in self.concepts:
            weighted_sum = sum(
                c.weight * concept.scores.get(c.name, 0)
                for c in self.criteria
            )
            percentage = (weighted_sum / max_possible) * 100
            
            # Decision logic
            if percentage >= 80:
                decision = "EXCELLENT - Proceed with confidence"
            elif percentage >= 70:
                decision = "ACCEPTABLE - Proceed with monitoring"
            elif percentage >= 60:
                decision = "MARGINAL - Requires improvement"
            else:
                decision = "UNACCEPTABLE - Significant redesign needed"
                
            # Check for any zero scores (showstoppers)
            zeros = [name for name, score in concept.scores.items() if score == 0]
            if zeros:
                decision = f"SHOWSTOPPER - Zero score on: {zeros}"
                
            results.append({
                "concept": concept.name,
                "weighted_sum": round(weighted_sum, 3),
                "percentage": round(percentage, 1),
                "decision": decision,
                "scores": concept.scores
            })
            
        # Sort by percentage (descending)
        ranking = sorted(results, key=lambda x: x["percentage"], reverse=True)
        
        # Generate recommendation
        best = ranking[0]
        recommendation = {
            "selected": best["concept"],
            "score": best["percentage"],
            "rationale": f"Highest score at {best['percentage']}% - {best['decision']}"
        }
        
        return {
            "project": self.project_name,
            "timestamp": datetime.now().isoformat(),
            "criteria_count": len(self.criteria),
            "concept_count": len(self.concepts),
            "results": results,
            "ranking": [r["concept"] for r in ranking],
            "recommendation": recommendation
        }
        
    def sensitivity_analysis(self, criterion_name: str, 
                            weight_range: Tuple[float, float] = (0.05, 0.30),
                            steps: int = 6) -> Dict:
        """
        Analyze how changing one criterion's weight affects ranking
        """
        original_weight = next(
            (c.weight for c in self.criteria if c.name == criterion_name), 
            None
        )
        if original_weight is None:
            return {"error": f"Criterion '{criterion_name}' not found"}
            
        results = []
        step_size = (weight_range[1] - weight_range[0]) / (steps - 1)
        
        for i in range(steps):
            test_weight = weight_range[0] + i * step_size
            
            # Adjust weights proportionally
            other_total = 1.0 - original_weight
            for c in self.criteria:
                if c.name == criterion_name:
                    c.weight = test_weight
                else:
                    c.weight = c.weight * (1.0 - test_weight) / other_total
                    
            eval_result = self.evaluate()
            results.append({
                "weight": round(test_weight, 2),
                "ranking": eval_result["ranking"],
                "top_score": eval_result["results"][0]["percentage"] if eval_result["results"] else 0
            })
            
        # Restore original weights
        for c in self.criteria:
            if c.name == criterion_name:
                c.weight = original_weight
            else:
                c.weight = c.weight * (1.0 - original_weight) / other_total
                
        return {
            "criterion": criterion_name,
            "original_weight": original_weight,
            "range_tested": weight_range,
            "results": results,
            "stable": len(set(r["ranking"][0] for r in results)) == 1
        }
        
    def generate_report(self) -> str:
        """Generate formatted text report"""
        eval_result = self.evaluate()
        
        if "error" in eval_result:
            return f"EVALUATION ERROR:\n" + "\n".join(eval_result["error"])
            
        lines = [
            "=" * 70,
            f"VDI 2225 CONCEPT EVALUATION REPORT",
            f"Project: {self.project_name}",
            f"Date: {eval_result['timestamp']}",
            "=" * 70,
            "",
            "EVALUATION CRITERIA:",
            "-" * 40,
        ]
        
        for c in self.criteria:
            lines.append(f"  {c.name}: {c.weight:.2f} ({c.weight*100:.0f}%)")
            
        lines.extend([
            "",
            "EVALUATION MATRIX:",
            "-" * 70,
        ])
        
        # Header
        header = "Criterion".ljust(25) + "Weight"
        for concept in self.concepts:
            header += concept.name[:10].center(12)
        lines.append(header)
        lines.append("-" * 70)
        
        # Scores
        for criterion in self.criteria:
            row = criterion.name[:24].ljust(25) + f"{criterion.weight:.2f}".center(6)
            for concept in self.concepts:
                score = concept.scores.get(criterion.name, "?")
                row += str(score).center(12)
            lines.append(row)
            
        lines.append("-" * 70)
        
        # Totals
        row = "WEIGHTED SUM".ljust(31)
        for result in eval_result["results"]:
            row += f"{result['weighted_sum']:.2f}".center(12)
        lines.append(row)
        
        row = "PERCENTAGE (%)".ljust(31)
        for result in eval_result["results"]:
            row += f"{result['percentage']:.1f}%".center(12)
        lines.append(row)
        
        lines.extend([
            "",
            "RESULTS:",
            "-" * 40,
        ])
        
        for i, concept in enumerate(eval_result["ranking"], 1):
            result = next(r for r in eval_result["results"] if r["concept"] == concept)
            lines.append(f"  {i}. {concept}: {result['percentage']:.1f}% - {result['decision']}")
            
        lines.extend([
            "",
            "RECOMMENDATION:",
            "-" * 40,
            f"  Selected: {eval_result['recommendation']['selected']}",
            f"  Score: {eval_result['recommendation']['score']:.1f}%",
            f"  Rationale: {eval_result['recommendation']['rationale']}",
            "",
            "=" * 70,
        ])
        
        return "\n".join(lines)
        
    def to_json(self) -> str:
        """Export evaluation setup to JSON"""
        data = {
            "project_name": self.project_name,
            "criteria": [
                {"name": c.name, "weight": c.weight, "description": c.description}
                for c in self.criteria
            ],
            "concepts": [
                {"name": c.name, "scores": c.scores, "description": c.description}
                for c in self.concepts
            ]
        }
        return json.dumps(data, indent=2)
        
    @classmethod
    def from_json(cls, json_str: str) -> 'VDI2225Evaluator':
        """Load evaluation from JSON"""
        data = json.loads(json_str)
        evaluator = cls(data.get("project_name", ""))
        
        for c in data.get("criteria", []):
            evaluator.add_criterion(c["name"], c["weight"], c.get("description", ""))
            
        for c in data.get("concepts", []):
            evaluator.add_concept(c["name"], c["scores"], c.get("description", ""))
            
        return evaluator


def run_example():
    """Run example evaluation for defense surveillance system"""
    
    evaluator = VDI2225Evaluator("VN-SURV-001: Maritime Surveillance System")
    
    # Add criteria (weights must sum to 1.0)
    evaluator.add_criterion("Detection range", 0.20, "Max detection range in km")
    evaluator.add_criterion("Accuracy", 0.15, "Position accuracy in meters")
    evaluator.add_criterion("MTBF", 0.15, "Mean time between failures")
    evaluator.add_criterion("Local content", 0.10, "% Vietnamese production")
    evaluator.add_criterion("Unit cost", 0.15, "Cost at lot size 50")
    evaluator.add_criterion("Dev time", 0.10, "Development duration")
    evaluator.add_criterion("Survivability", 0.15, "Environmental/combat resilience")
    
    # Add concepts
    evaluator.add_concept(
        "Concept A: Radar-Primary",
        {
            "Detection range": 3,
            "Accuracy": 4,
            "MTBF": 2,
            "Local content": 3,
            "Unit cost": 2,
            "Dev time": 4,
            "Survivability": 3
        },
        "Radar-based with camera secondary"
    )
    
    evaluator.add_concept(
        "Concept B: EO/IR-Primary",
        {
            "Detection range": 4,
            "Accuracy": 3,
            "MTBF": 3,
            "Local content": 2,
            "Unit cost": 3,
            "Dev time": 2,
            "Survivability": 4
        },
        "Electro-optical with radar secondary"
    )
    
    evaluator.add_concept(
        "Concept C: Hybrid Fusion",
        {
            "Detection range": 4,
            "Accuracy": 4,
            "MTBF": 2,
            "Local content": 4,
            "Unit cost": 2,
            "Dev time": 1,
            "Survivability": 3
        },
        "Multi-sensor fusion approach"
    )
    
    # Generate and print report
    print(evaluator.generate_report())
    
    # Sensitivity analysis
    print("\n" + "=" * 70)
    print("SENSITIVITY ANALYSIS: Unit Cost Weight")
    print("-" * 70)
    sensitivity = evaluator.sensitivity_analysis("Unit cost", (0.05, 0.30))
    for r in sensitivity["results"]:
        print(f"  Weight {r['weight']:.2f}: Winner = {r['ranking'][0]}")
    print(f"\nRanking stable: {sensitivity['stable']}")


def interactive_mode():
    """Run interactive evaluation session"""
    print("\n" + "=" * 50)
    print("VDI 2225 CONCEPT EVALUATION - INTERACTIVE MODE")
    print("=" * 50 + "\n")
    
    project_name = input("Project name: ")
    evaluator = VDI2225Evaluator(project_name)
    
    # Add criteria
    print("\nEnter evaluation criteria (empty name to finish):")
    total_weight = 0
    while True:
        name = input("  Criterion name: ").strip()
        if not name:
            break
        weight = float(input("  Weight (0.0-1.0): "))
        evaluator.add_criterion(name, weight)
        total_weight += weight
        print(f"  Added. Total weight so far: {total_weight:.2f}")
        
    if abs(total_weight - 1.0) > 0.01:
        print(f"\nWARNING: Weights sum to {total_weight:.2f}, should be 1.0")
        
    # Add concepts
    print("\nEnter concepts to evaluate (empty name to finish):")
    while True:
        name = input("  Concept name: ").strip()
        if not name:
            break
        scores = {}
        print(f"  Enter scores (0-4) for {name}:")
        for c in evaluator.criteria:
            score = int(input(f"    {c.name}: "))
            scores[c.name] = score
        evaluator.add_concept(name, scores)
        print(f"  Added concept: {name}")
        
    # Generate report
    print("\n" + evaluator.generate_report())
    
    # Save option
    save = input("\nSave to JSON file? (y/n): ")
    if save.lower() == 'y':
        filename = input("Filename (without .json): ") + ".json"
        with open(filename, 'w') as f:
            f.write(evaluator.to_json())
        print(f"Saved to {filename}")


def main():
    parser = argparse.ArgumentParser(description="VDI 2225 Concept Evaluation Calculator")
    parser.add_argument("--example", action="store_true", help="Run example evaluation")
    parser.add_argument("--load", type=str, help="Load evaluation from JSON file")
    args = parser.parse_args()
    
    if args.example:
        run_example()
    elif args.load:
        with open(args.load) as f:
            evaluator = VDI2225Evaluator.from_json(f.read())
        print(evaluator.generate_report())
    else:
        interactive_mode()


if __name__ == "__main__":
    main()
