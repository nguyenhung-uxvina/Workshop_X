#!/usr/bin/env python3
"""
Reinforcing Loop Calculator (L7)

Calculate growth/decay rates for reinforcing feedback loops.
Helps quantify how fast problems compound or virtuous cycles accelerate.

Usage:
    python feedback_loop_calculator.py --initial 1000 --gain 0.05 --periods 20
    
    Or interactively:
    python feedback_loop_calculator.py
"""

import argparse
import sys
from typing import List, Tuple
import math


def calculate_reinforcing_loop(
    initial_value: float,
    gain: float,
    periods: int,
    external_input: float = 0.0
) -> List[Tuple[int, float]]:
    """
    Calculate values over time for a reinforcing feedback loop.
    
    Args:
        initial_value: Starting stock value
        gain: Reinforcement factor (0.05 = 5% growth per period)
        periods: Number of time periods to simulate
        external_input: Constant external addition per period
        
    Returns:
        List of (period, value) tuples
    """
    results = [(0, initial_value)]
    current_value = initial_value
    
    for period in range(1, periods + 1):
        # Reinforcing feedback: current_value × gain
        reinforcement = current_value * gain
        
        # Update value
        current_value = current_value + reinforcement + external_input
        
        results.append((period, current_value))
    
    return results


def calculate_doubling_time(gain: float) -> float:
    """
    Calculate how many periods until value doubles.
    
    Args:
        gain: Reinforcement factor
        
    Returns:
        Periods until doubling (or halving if negative gain)
    """
    if gain == 0:
        return float('inf')
    
    # ln(2) / ln(1 + gain) for exponential growth
    return math.log(2) / math.log(1 + abs(gain))


def classify_loop_severity(gain: float, doubling_time: float) -> str:
    """Classify how severe the reinforcing loop is."""
    if gain > 0:
        if doubling_time < 5:
            return "CRITICAL - Explosive growth, immediate intervention required"
        elif doubling_time < 15:
            return "HIGH - Rapid growth, urgent intervention needed"
        elif doubling_time < 50:
            return "MEDIUM - Significant growth, plan intervention soon"
        else:
            return "LOW - Slow growth, monitor and plan"
    else:
        if doubling_time < 5:
            return "CRITICAL - Rapid collapse, immediate intervention required"
        elif doubling_time < 15:
            return "HIGH - Fast decay, urgent intervention needed"
        elif doubling_time < 50:
            return "MEDIUM - Notable decay, plan intervention soon"
        else:
            return "LOW - Slow decay, monitor and plan"


def format_results(results: List[Tuple[int, float]], initial_value: float) -> str:
    """Format results for display."""
    output = []
    output.append("\nPeriod | Value     | Change    | % Change")
    output.append("-------|-----------|-----------|----------")
    
    for i, (period, value) in enumerate(results):
        if i == 0:
            output.append(f"{period:6d} | {value:9,.2f} | {0:9,.2f} | {0:8.1f}%")
        else:
            prev_value = results[i-1][1]
            change = value - prev_value
            pct_change = (change / prev_value) * 100 if prev_value != 0 else 0
            output.append(f"{period:6d} | {value:9,.2f} | {change:9,.2f} | {pct_change:8.1f}%")
    
    final_value = results[-1][1]
    total_change = final_value - initial_value
    total_pct = (total_change / initial_value) * 100 if initial_value != 0 else 0
    
    output.append("\n" + "=" * 50)
    output.append(f"Initial Value: {initial_value:,.2f}")
    output.append(f"Final Value:   {final_value:,.2f}")
    output.append(f"Total Change:  {total_change:,.2f} ({total_pct:+.1f}%)")
    
    return "\n".join(output)


def interactive_mode():
    """Run calculator in interactive mode."""
    print("=" * 60)
    print("Reinforcing Loop Calculator (L7)")
    print("=" * 60)
    print("\nThis calculates how quickly reinforcing feedback compounds.")
    print("Examples:")
    print("  - Technical debt accumulation (bad loop)")
    print("  - Skill building with practice (good loop)")
    print("  - Bug count spiral (bad loop)")
    print("  - Network effects (good loop)")
    print()
    
    try:
        initial = float(input("Initial value (e.g., 1000): "))
        gain = float(input("Gain per period (e.g., 0.05 for 5% growth): "))
        periods = int(input("Number of periods to simulate (e.g., 20): "))
        external = float(input("External input per period (0 if none): ") or "0")
        
        # Calculate
        results = calculate_reinforcing_loop(initial, gain, periods, external)
        doubling_time = calculate_doubling_time(gain)
        severity = classify_loop_severity(gain, doubling_time)
        
        # Display results
        print(format_results(results, initial))
        print()
        print("=" * 60)
        print("ANALYSIS")
        print("=" * 60)
        print(f"Doubling/Halving Time: {doubling_time:.1f} periods")
        print(f"Severity: {severity}")
        print()
        
        if gain > 0:
            print("INTERPRETATION (Growth Loop):")
            print(f"  Every period, value increases by {gain*100:.1f}% of current value")
            print(f"  Value doubles every {doubling_time:.1f} periods")
            print()
            print("INTERVENTION OPTIONS:")
            print("  1. SLOW THE LOOP - Reduce the gain (change rules, add friction)")
            print("  2. BREAK THE LOOP - Interrupt the feedback connection")
            print("  3. ADD BALANCING LOOP - Introduce correction mechanism (L8)")
            
            if doubling_time < 10:
                print()
                print("⚠️  WARNING: This loop is compounding rapidly!")
                print("   Immediate intervention required to prevent runaway growth.")
        else:
            print("INTERPRETATION (Decay Loop):")
            print(f"  Every period, value decreases by {abs(gain)*100:.1f}% of current value")
            print(f"  Value halves every {doubling_time:.1f} periods")
            print()
            print("INTERVENTION OPTIONS:")
            print("  1. SLOW THE DECAY - Reduce the loss rate")
            print("  2. BREAK THE LOOP - Remove cause of deterioration")
            print("  3. REVERSE THE LOOP - Create positive reinforcement instead")
            
            if doubling_time < 10:
                print()
                print("⚠️  WARNING: This loop is decaying rapidly!")
                print("   Urgent intervention needed to prevent collapse.")
        
    except (ValueError, KeyboardInterrupt):
        print("\nInvalid input or cancelled.")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Calculate reinforcing feedback loop dynamics (L7)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Technical debt spiral: starts at 1000 hours, grows 5% per week
  python feedback_loop_calculator.py --initial 1000 --gain 0.05 --periods 20
  
  # Skill building: starts at level 3, improves 10% per practice session
  python feedback_loop_calculator.py --initial 3 --gain 0.10 --periods 30
  
  # Bug accumulation: 50 bugs, increasing 8% per sprint, plus 5 new bugs/sprint
  python feedback_loop_calculator.py --initial 50 --gain 0.08 --periods 15 --external 5
        """
    )
    
    parser.add_argument('--initial', type=float, help='Initial value')
    parser.add_argument('--gain', type=float, help='Reinforcement gain per period')
    parser.add_argument('--periods', type=int, help='Number of periods to simulate')
    parser.add_argument('--external', type=float, default=0.0, 
                       help='External input per period (default: 0)')
    
    args = parser.parse_args()
    
    # If no arguments provided, run interactive mode
    if not all([args.initial, args.gain, args.periods]):
        interactive_mode()
    else:
        # Run with provided arguments
        results = calculate_reinforcing_loop(
            args.initial, args.gain, args.periods, args.external
        )
        doubling_time = calculate_doubling_time(args.gain)
        severity = classify_loop_severity(args.gain, doubling_time)
        
        print(format_results(results, args.initial))
        print()
        print(f"Doubling/Halving Time: {doubling_time:.1f} periods")
        print(f"Severity: {severity}")


if __name__ == "__main__":
    main()
