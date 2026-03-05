#!/usr/bin/env python3
"""
Delay Impact Calculator (L9)

Calculate the cost and impact of delays in feedback loops.
Helps quantify ROI of shortening information/response delays.

Usage:
    python delay_impact_calculator.py --current-delay 30 --proposed-delay 1 --cost-multiplier 100
    
    Or interactively:
    python delay_impact_calculator.py
"""

import argparse
import sys
import math


def calculate_delay_cost(
    base_cost: float,
    delay_days: float,
    cost_growth_rate: float = 0.1
) -> float:
    """
    Calculate cost of fixing an issue given delay.
    
    Cost typically grows exponentially with delay:
    - Immediate: $X
    - Days later: $X * e^(rate * days)
    
    Args:
        base_cost: Cost if caught immediately
        delay_days: Days before issue discovered
        cost_growth_rate: How fast cost grows per day
        
    Returns:
        Total cost including delay impact
    """
    return base_cost * math.exp(cost_growth_rate * delay_days)


def calculate_learning_impact(
    initial_skill: float,
    feedback_delay_days: float,
    learning_decay_rate: float = 0.05
) -> float:
    """
    Calculate learning retention given feedback delay.
    
    Longer delays reduce learning because:
    - Context is lost
    - Connection between action and consequence weakens
    - Mistakes get repeated
    
    Args:
        initial_skill: Skill gained from immediate feedback (0-1)
        feedback_delay_days: Days before feedback received
        learning_decay_rate: How fast learning decays per day
        
    Returns:
        Effective skill retention (0-1)
    """
    return initial_skill * math.exp(-learning_decay_rate * feedback_delay_days)


def optimal_delay_length(
    system_time_constant: float,
    feedback_cost_ratio: float
) -> float:
    """
    Calculate optimal delay for a feedback loop.
    
    Formula: sqrt(time_constant × cost_ratio)
    
    Args:
        system_time_constant: How fast system naturally changes (days)
        feedback_cost_ratio: Cost of delayed vs immediate feedback
        
    Returns:
        Optimal delay in days
    """
    return math.sqrt(system_time_constant * feedback_cost_ratio)


def roi_of_delay_reduction(
    current_delay_days: float,
    proposed_delay_days: float,
    incidents_per_month: int,
    base_cost: float,
    cost_growth_rate: float,
    implementation_cost: float
) -> dict:
    """Calculate ROI of reducing delay."""
    
    # Current cost per incident
    current_cost = calculate_delay_cost(base_cost, current_delay_days, cost_growth_rate)
    
    # Proposed cost per incident
    proposed_cost = calculate_delay_cost(base_cost, proposed_delay_days, cost_growth_rate)
    
    # Savings per incident
    savings_per_incident = current_cost - proposed_cost
    
    # Monthly and annual savings
    monthly_savings = savings_per_incident * incidents_per_month
    annual_savings = monthly_savings * 12
    
    # Payback period
    payback_months = implementation_cost / monthly_savings if monthly_savings > 0 else float('inf')
    
    # ROI
    roi_pct = (annual_savings / implementation_cost - 1) * 100 if implementation_cost > 0 else 0
    
    return {
        'current_cost_per_incident': current_cost,
        'proposed_cost_per_incident': proposed_cost,
        'savings_per_incident': savings_per_incident,
        'monthly_savings': monthly_savings,
        'annual_savings': annual_savings,
        'payback_months': payback_months,
        'roi_pct': roi_pct,
        'cost_reduction_pct': (savings_per_incident / current_cost) * 100
    }


def interactive_mode():
    """Run calculator in interactive mode."""
    print("=" * 70)
    print("Delay Impact Calculator (L9)")
    print("=" * 70)
    print("\nCalculate the cost of delays in feedback loops and ROI of improvements.")
    print("\nExamples:")
    print("  - Software bugs: Current = 30 days, Proposed = 1 day")
    print("  - Manufacturing defects: Current = 6 weeks, Proposed = 1 hour")
    print("  - Contract payments: Current = 90 days, Proposed = 7 days")
    print("  - Learning feedback: Current = 7 days, Proposed = same-day")
    print()
    
    print("SCENARIO SELECTION:")
    print("1. Software Bug Discovery")
    print("2. Manufacturing Quality")
    print("3. Custom Analysis")
    choice = input("\nSelect scenario (1-3): ").strip()
    
    if choice == "1":
        scenario_software_bugs()
    elif choice == "2":
        scenario_manufacturing()
    elif choice == "3":
        scenario_custom()
    else:
        print("Invalid choice.")
        sys.exit(1)


def scenario_software_bugs():
    """Pre-configured scenario for software bugs."""
    print("\n" + "=" * 70)
    print("SOFTWARE BUG DISCOVERY DELAY")
    print("=" * 70)
    
    current_delay = float(input("\nCurrent delay (days until bug discovered): ") or "30")
    proposed_delay = float(input("Proposed delay (days): ") or "1")
    bugs_per_month = int(input("Bugs discovered per month: ") or "10")
    
    # Typical costs for software bugs
    base_cost = 500  # $500 if caught immediately
    cost_growth_rate = 0.15  # 15% cost increase per day
    implementation_cost = 50000  # $50K for CI/CD improvements
    
    print("\n📊 Using typical software bug costs:")
    print(f"   Base cost (immediate): ${base_cost:,.0f}")
    print(f"   Cost growth: {cost_growth_rate*100:.0f}% per day")
    print(f"   Implementation cost: ${implementation_cost:,.0f}")
    
    calculate_and_display_roi(
        current_delay, proposed_delay, bugs_per_month,
        base_cost, cost_growth_rate, implementation_cost
    )


def scenario_manufacturing():
    """Pre-configured scenario for manufacturing quality."""
    print("\n" + "=" * 70)
    print("MANUFACTURING DEFECT DETECTION DELAY")
    print("=" * 70)
    
    current_delay = float(input("\nCurrent delay (days until defect found): ") or "42")  # 6 weeks
    proposed_delay = float(input("Proposed delay (days): ") or "0.04")  # 1 hour
    defects_per_month = int(input("Defects per month: ") or "5")
    
    # Typical costs for manufacturing
    base_cost = 500  # $500 part cost
    cost_growth_rate = 0.20  # 20% per day (production continues)
    implementation_cost = 100000  # $100K for SPC system
    
    print("\n📊 Using typical manufacturing costs:")
    print(f"   Base cost (immediate): ${base_cost:,.0f}")
    print(f"   Cost growth: {cost_growth_rate*100:.0f}% per day")
    print(f"   Implementation cost: ${implementation_cost:,.0f}")
    
    calculate_and_display_roi(
        current_delay, proposed_delay, defects_per_month,
        base_cost, cost_growth_rate, implementation_cost
    )


def scenario_custom():
    """Custom scenario with user inputs."""
    print("\n" + "=" * 70)
    print("CUSTOM DELAY ANALYSIS")
    print("=" * 70)
    
    try:
        current_delay = float(input("\nCurrent delay (days): "))
        proposed_delay = float(input("Proposed delay (days): "))
        incidents_per_month = int(input("Incidents per month: "))
        base_cost = float(input("Cost if caught immediately ($): "))
        cost_growth_rate = float(input("Cost growth rate per day (e.g., 0.1 for 10%): "))
        implementation_cost = float(input("Cost to implement improvement ($): "))
        
        calculate_and_display_roi(
            current_delay, proposed_delay, incidents_per_month,
            base_cost, cost_growth_rate, implementation_cost
        )
        
    except (ValueError, KeyboardInterrupt):
        print("\nInvalid input or cancelled.")
        sys.exit(1)


def calculate_and_display_roi(
    current_delay: float,
    proposed_delay: float,
    incidents_per_month: int,
    base_cost: float,
    cost_growth_rate: float,
    implementation_cost: float
):
    """Calculate and display ROI analysis."""
    
    roi = roi_of_delay_reduction(
        current_delay, proposed_delay, incidents_per_month,
        base_cost, cost_growth_rate, implementation_cost
    )
    
    print("\n" + "=" * 70)
    print("COST ANALYSIS")
    print("=" * 70)
    
    print(f"\nCurrent State (Delay: {current_delay:.1f} days):")
    print(f"  Cost per incident: ${roi['current_cost_per_incident']:,.2f}")
    print(f"  Monthly cost ({incidents_per_month} incidents): ${roi['current_cost_per_incident'] * incidents_per_month:,.2f}")
    
    print(f"\nProposed State (Delay: {proposed_delay:.1f} days):")
    print(f"  Cost per incident: ${roi['proposed_cost_per_incident']:,.2f}")
    print(f"  Monthly cost: ${roi['proposed_cost_per_incident'] * incidents_per_month:,.2f}")
    
    print("\n" + "=" * 70)
    print("SAVINGS & ROI")
    print("=" * 70)
    
    print(f"\nSavings per incident: ${roi['savings_per_incident']:,.2f}")
    print(f"Cost reduction: {roi['cost_reduction_pct']:.1f}%")
    print(f"\nMonthly savings: ${roi['monthly_savings']:,.2f}")
    print(f"Annual savings: ${roi['annual_savings']:,.2f}")
    print(f"\nImplementation cost: ${implementation_cost:,.2f}")
    print(f"Payback period: {roi['payback_months']:.1f} months")
    print(f"Annual ROI: {roi['roi_pct']:,.1f}%")
    
    print("\n" + "=" * 70)
    print("RECOMMENDATION")
    print("=" * 70)
    
    if roi['payback_months'] < 3:
        print("✅ HIGHLY RECOMMENDED - Payback in <3 months")
        print("   This is a no-brainer investment. Implement immediately.")
    elif roi['payback_months'] < 12:
        print("✅ RECOMMENDED - Payback within 1 year")
        print("   Strong ROI. Prioritize this improvement.")
    elif roi['payback_months'] < 24:
        print("⚠️  CONSIDER - Payback in 1-2 years")
        print("   Positive ROI but longer horizon. Evaluate alternatives.")
    else:
        print("❌ NOT RECOMMENDED - Long payback period")
        print("   Consider other interventions or reduce implementation cost.")
    
    print("\n💡 INTERPRETATION:")
    print(f"   By reducing delay from {current_delay:.0f} days to {proposed_delay:.0f} days,")
    print(f"   you save ${roi['savings_per_incident']:,.0f} per incident")
    print(f"   ({roi['cost_reduction_pct']:.0f}% cost reduction)")
    
    # Learning impact if applicable
    if current_delay > 7:
        current_learning = calculate_learning_impact(1.0, current_delay, 0.05)
        proposed_learning = calculate_learning_impact(1.0, proposed_delay, 0.05)
        print(f"\n📚 LEARNING IMPACT:")
        print(f"   Current delay retains {current_learning*100:.0f}% of learning value")
        print(f"   Proposed delay retains {proposed_learning*100:.0f}% of learning value")
        print(f"   Learning improvement: {(proposed_learning - current_learning)*100:.0f} percentage points")


def main():
    parser = argparse.ArgumentParser(
        description="Calculate delay impact and ROI (L9)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Software bugs: 30-day → 1-day delay
  python delay_impact_calculator.py --current-delay 30 --proposed-delay 1 \\
    --incidents 10 --base-cost 500 --growth 0.15 --implementation 50000
  
  # Manufacturing defects: 42-day → 1-hour delay
  python delay_impact_calculator.py --current-delay 42 --proposed-delay 0.04 \\
    --incidents 5 --base-cost 500 --growth 0.20 --implementation 100000
        """
    )
    
    parser.add_argument('--current-delay', type=float, help='Current delay in days')
    parser.add_argument('--proposed-delay', type=float, help='Proposed delay in days')
    parser.add_argument('--incidents', type=int, help='Incidents per month')
    parser.add_argument('--base-cost', type=float, help='Cost if immediate')
    parser.add_argument('--growth', type=float, help='Cost growth rate per day')
    parser.add_argument('--implementation', type=float, help='Implementation cost')
    
    args = parser.parse_args()
    
    if not all([
        args.current_delay, args.proposed_delay, args.incidents,
        args.base_cost, args.growth, args.implementation
    ]):
        interactive_mode()
    else:
        calculate_and_display_roi(
            args.current_delay, args.proposed_delay, args.incidents,
            args.base_cost, args.growth, args.implementation
        )


if __name__ == "__main__":
    main()
