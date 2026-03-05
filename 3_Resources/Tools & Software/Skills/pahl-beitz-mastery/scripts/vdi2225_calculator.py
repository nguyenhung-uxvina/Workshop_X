#!/usr/bin/env python3
"""
VDI 2225 Concept Evaluation Calculator

Automates weighted scoring calculation for concept selection.
Supports multiple concepts and criteria with sensitivity analysis.
"""

import sys
import json
from typing import Dict, List, Tuple

class VDI2225Calculator:
    """Calculator for VDI 2225 technical-economic evaluation"""
    
    def __init__(self):
        self.criteria: List[Dict] = []
        self.concepts: List[Dict] = []
        
    def add_criterion(self, name: str, weight: float, description: str = ""):
        """Add evaluation criterion with weight (0-100%)"""
        if not 0 <= weight <= 100:
            raise ValueError(f"Weight must be 0-100%, got {weight}")
        
        self.criteria.append({
            'name': name,
            'weight': weight / 100.0,  # Convert to decimal
            'description': description
        })
    
    def add_concept(self, name: str, scores: Dict[str, float]):
        """
        Add concept with scores for each criterion
        
        Args:
            name: Concept identifier
            scores: Dict mapping criterion names to scores (0-10)
        """
        # Validate scores
        for criterion_name, score in scores.items():
            if not 0 <= score <= 10:
                raise ValueError(f"Score must be 0-10, got {score} for {criterion_name}")
        
        self.concepts.append({
            'name': name,
            'scores': scores
        })
    
    def calculate_weighted_values(self) -> Dict[str, float]:
        """Calculate weighted value for each concept"""
        results = {}
        
        for concept in self.concepts:
            weighted_value = 0.0
            
            for criterion in self.criteria:
                criterion_name = criterion['name']
                weight = criterion['weight']
                score = concept['scores'].get(criterion_name, 0)
                
                weighted_value += weight * score
            
            results[concept['name']] = round(weighted_value, 2)
        
        return results
    
    def rank_concepts(self) -> List[Tuple[str, float]]:
        """Return concepts ranked by weighted value (highest first)"""
        weighted_values = self.calculate_weighted_values()
        ranked = sorted(weighted_values.items(), key=lambda x: x[1], reverse=True)
        return ranked
    
    def sensitivity_analysis(self, weight_variation: float = 10.0) -> Dict:
        """
        Test if results change with weight variations
        
        Args:
            weight_variation: Percentage points to vary each weight (default 10%)
        
        Returns:
            Dict with sensitivity results
        """
        original_ranking = self.rank_concepts()
        original_winner = original_ranking[0][0]
        
        sensitive_criteria = []
        
        for i, criterion in enumerate(self.criteria):
            original_weight = criterion['weight']
            
            # Test increasing weight
            criterion['weight'] = min(1.0, original_weight + weight_variation/100)
            new_ranking = self.rank_concepts()
            if new_ranking[0][0] != original_winner:
                sensitive_criteria.append({
                    'criterion': criterion['name'],
                    'direction': 'increase',
                    'new_winner': new_ranking[0][0]
                })
            
            # Test decreasing weight
            criterion['weight'] = max(0.0, original_weight - weight_variation/100)
            new_ranking = self.rank_concepts()
            if new_ranking[0][0] != original_winner:
                sensitive_criteria.append({
                    'criterion': criterion['name'],
                    'direction': 'decrease',
                    'new_winner': new_ranking[0][0]
                })
            
            # Restore original weight
            criterion['weight'] = original_weight
        
        return {
            'original_winner': original_winner,
            'sensitive': len(sensitive_criteria) > 0,
            'sensitive_criteria': sensitive_criteria
        }
    
    def generate_report(self) -> str:
        """Generate formatted evaluation report"""
        report = []
        report.append("=" * 70)
        report.append("VDI 2225 CONCEPT EVALUATION REPORT")
        report.append("=" * 70)
        report.append("")
        
        # Criteria summary
        report.append("EVALUATION CRITERIA:")
        report.append("-" * 70)
        total_weight = sum(c['weight'] for c in self.criteria)
        for criterion in self.criteria:
            weight_pct = criterion['weight'] * 100
            report.append(f"  {criterion['name']:30s} {weight_pct:5.1f}%")
        report.append(f"  {'TOTAL':30s} {total_weight*100:5.1f}%")
        report.append("")
        
        # Detailed scoring matrix
        report.append("SCORING MATRIX:")
        report.append("-" * 70)
        
        # Header
        header = f"  {'Criterion':25s} | Weight |"
        for concept in self.concepts:
            header += f" {concept['name']:8s} |"
        report.append(header)
        report.append("  " + "-" * (len(header) - 2))
        
        # Rows
        for criterion in self.criteria:
            row = f"  {criterion['name']:25s} | {criterion['weight']*100:5.1f}% |"
            for concept in self.concepts:
                score = concept['scores'].get(criterion['name'], 0)
                row += f" {score:8.1f} |"
            report.append(row)
        
        report.append("")
        
        # Weighted values and ranking
        report.append("RESULTS:")
        report.append("-" * 70)
        ranked = self.rank_concepts()
        
        for rank, (concept_name, weighted_value) in enumerate(ranked, 1):
            marker = " ← SELECTED" if rank == 1 else ""
            report.append(f"  {rank}. {concept_name:20s} {weighted_value:6.2f}{marker}")
        
        report.append("")
        
        # Sensitivity analysis
        sensitivity = self.sensitivity_analysis()
        report.append("SENSITIVITY ANALYSIS:")
        report.append("-" * 70)
        
        if sensitivity['sensitive']:
            report.append(f"  WARNING: Result is SENSITIVE to weight changes!")
            report.append(f"  Winner may change if these criteria weights are adjusted:")
            for item in sensitivity['sensitive_criteria']:
                report.append(f"    - {item['criterion']} ({item['direction']}) → {item['new_winner']} wins")
        else:
            report.append(f"  ✓ Result is ROBUST - winner unchanged with ±10% weight variation")
        
        report.append("")
        report.append("=" * 70)
        
        return "\n".join(report)


def example_defense_surveillance():
    """Example: Defense surveillance system concept evaluation"""
    
    calc = VDI2225Calculator()
    
    # Define criteria
    calc.add_criterion("Detection Range", 25, "Maximum target detection distance")
    calc.add_criterion("Reliability (MTBF)", 20, "Mean time between failures")
    calc.add_criterion("Manufacturing Cost", 15, "Estimated production cost")
    calc.add_criterion("Power Consumption", 15, "Average power draw")
    calc.add_criterion("Weight/Portability", 10, "System weight")
    calc.add_criterion("Environmental Tolerance", 10, "MIL-STD-810 performance")
    calc.add_criterion("Maintenance Complexity", 5, "Field maintainability")
    
    # Define concepts with scores
    calc.add_concept("Concept A - Passive IR", {
        "Detection Range": 8,
        "Reliability (MTBF)": 7,
        "Manufacturing Cost": 5,
        "Power Consumption": 6,
        "Weight/Portability": 7,
        "Environmental Tolerance": 8,
        "Maintenance Complexity": 6
    })
    
    calc.add_concept("Concept B - Active Radar", {
        "Detection Range": 6,
        "Reliability (MTBF)": 9,
        "Manufacturing Cost": 7,
        "Power Consumption": 5,
        "Weight/Portability": 4,
        "Environmental Tolerance": 6,
        "Maintenance Complexity": 8
    })
    
    calc.add_concept("Concept C - Hybrid IR/Radar", {
        "Detection Range": 9,
        "Reliability (MTBF)": 6,
        "Manufacturing Cost": 4,
        "Power Consumption": 8,
        "Weight/Portability": 8,
        "Environmental Tolerance": 7,
        "Maintenance Complexity": 5
    })
    
    # Generate report
    print(calc.generate_report())


def interactive_mode():
    """Interactive command-line interface for VDI 2225 evaluation"""
    
    calc = VDI2225Calculator()
    
    print("VDI 2225 Interactive Calculator")
    print("=" * 50)
    print()
    
    # Input criteria
    print("STEP 1: Define Evaluation Criteria")
    print("-" * 50)
    num_criteria = int(input("Number of criteria: "))
    
    for i in range(num_criteria):
        print(f"\nCriterion {i+1}:")
        name = input("  Name: ")
        weight = float(input("  Weight (%): "))
        calc.add_criterion(name, weight)
    
    # Input concepts
    print("\n\nSTEP 2: Define Concepts and Scores")
    print("-" * 50)
    num_concepts = int(input("Number of concepts to evaluate: "))
    
    for i in range(num_concepts):
        print(f"\nConcept {i+1}:")
        concept_name = input("  Name: ")
        
        scores = {}
        for criterion in calc.criteria:
            score = float(input(f"  Score for '{criterion['name']}' (0-10): "))
            scores[criterion['name']] = score
        
        calc.add_concept(concept_name, scores)
    
    # Generate and display report
    print("\n\n")
    print(calc.generate_report())


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--interactive":
        interactive_mode()
    else:
        # Run example
        print("Running example: Defense surveillance system evaluation\n")
        example_defense_surveillance()
        print("\n\nTo use interactive mode, run: python vdi2225_calculator.py --interactive")
