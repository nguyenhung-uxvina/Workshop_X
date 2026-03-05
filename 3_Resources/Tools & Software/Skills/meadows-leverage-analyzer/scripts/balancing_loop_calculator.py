#!/usr/bin/env python3
"""
Balancing Loop (L8) Calculator
Analyzes goal-seeking dynamics and feedback strength optimization
"""

import math
from typing import Tuple, List

def simulate_balancing_loop(
    initial_value: float,
    target: float,
    gain: float,
    periods: int
) -> List[Tuple[int, float, float]]:
    """
    Simulate balancing loop: dX/dt = -k*(X - Target)
    
    Args:
        initial_value: Starting value
        target: Goal/setpoint
        gain: Feedback strength (0 < gain < 2 for stability)
        periods: Number of time periods
    
    Returns:
        List of (time, value, error) tuples
    """
    results = []
    current = initial_value
    
    for t in range(periods + 1):
        error = current - target
        results.append((t, current, error))
        
        # Update: move toward target proportional to error
        correction = -gain * error
        current = current + correction
    
    return results


def calculate_settling_time(gain: float, tolerance: float = 0.05) -> float:
    """
    Calculate time to reach within tolerance of target
    
    For system X(t) = Target + Error_0 * (1-k)^t
    Settling time when error < tolerance * initial_error
    
    Args:
        gain: Feedback strength
        tolerance: Acceptable error (fraction of initial)
    
    Returns:
        Time periods to settle
    """
    if gain <= 0 or gain >= 2:
        return float('inf')  # Unstable
    
    return math.log(tolerance) / math.log(abs(1 - gain))


def analyze_stability(gain: float, delay: int = 0) -> dict:
    """
    Analyze stability of balancing loop with optional delay
    
    Args:
        gain: Feedback strength
        delay: Number of periods delay in feedback
    
    Returns:
        Dictionary with stability analysis
    """
    # Without delay
    if delay == 0:
        if gain <= 0:
            status = "Unstable (negative feedback inverted)"
        elif gain < 1:
            status = "Underdamped (slow approach)"
        elif gain == 1:
            status = "Critically damped (optimal)"
        elif gain < 2:
            status = "Overdamped (oscillation)"
        else:
            status = "Unstable (divergent oscillation)"
    else:
        # With delay, stability criteria more complex
        # Rough approximation: stable if gain * delay < π/2
        stability_product = gain * delay
        if stability_product < math.pi / 2:
            status = "Stable (but may oscillate)"
        else:
            status = "Likely unstable"
    
    return {
        'gain': gain,
        'delay': delay,
        'status': status,
        'stability_product': gain * delay if delay > 0 else 0,
        'settling_time': calculate_settling_time(gain) if 0 < gain < 2 else float('inf')
    }


def inventory_control_system(
    initial_inventory: float,
    target_inventory: float,
    demand_rate: float,
    order_gain: float,
    lead_time: int,
    periods: int
) -> List[Tuple[int, float, float, float]]:
    """
    Simulate inventory management balancing loop
    
    Model:
        Inventory(t+1) = Inventory(t) + Receipts(t) - Demand(t)
        Order(t) = Demand(t) + order_gain * (Target - Inventory(t))
        Receipts(t) = Order(t - lead_time)
    
    Args:
        initial_inventory: Starting inventory level
        target_inventory: Desired inventory level
        demand_rate: Customer demand per period
        order_gain: Aggressiveness of reordering
        lead_time: Delay between order and receipt
        periods: Number of time periods
    
    Returns:
        List of (time, inventory, order, receipts) tuples
    """
    results = []
    inventory = initial_inventory
    order_history = [0] * lead_time  # Pre-fill with zeros for lead time
    
    for t in range(periods + 1):
        # Calculate receipts from past order
        receipts = order_history[0] if t > 0 else 0
        
        # Current state
        results.append((t, inventory, 0 if t == 0 else order_history[-1], receipts))
        
        # Place new order
        inventory_error = target_inventory - inventory
        order = demand_rate + order_gain * inventory_error
        order = max(0, order)  # Can't order negative
        
        # Update inventory
        inventory = inventory + receipts - demand_rate
        
        # Update order history (shift and add new order)
        order_history.pop(0)
        order_history.append(order)
    
    return results


def quality_control_loops(
    initial_defects: float,
    periods: int
) -> dict:
    """
    Simulate multiple quality control loops at different stages
    
    Args:
        initial_defects: Defects introduced per period
        periods: Number of time periods
    
    Returns:
        Dictionary with results from each control loop
    """
    results = {
        'design_review': [],
        'first_article': [],
        'in_process': [],
        'final_inspection': [],
        'field_failures': []
    }
    
    defects = initial_defects
    
    for t in range(periods + 1):
        # Loop 1: Design Review (80% catch rate, week delay)
        after_design = defects * 0.20  # 80% caught
        
        # Loop 2: First Article (60% of remaining)
        after_first_article = after_design * 0.40
        
        # Loop 3: In-Process (50% of remaining)
        after_in_process = after_first_article * 0.50
        
        # Loop 4: Final Inspection (catches some but late)
        after_final = after_in_process * 0.30  # 70% caught but expensive
        
        # Loop 5: Field failures (what customers see)
        field_failures = after_final
        
        results['design_review'].append((t, after_design))
        results['first_article'].append((t, after_first_article))
        results['in_process'].append((t, after_in_process))
        results['final_inspection'].append((t, after_final))
        results['field_failures'].append((t, field_failures))
    
    return results


def project_schedule_control(
    initial_slip: float,
    target_slip: float,
    response_gains: List[float],
    periods: int
) -> dict:
    """
    Compare different project control strategies
    
    Args:
        initial_slip: Initial schedule slip (weeks)
        target_slip: Acceptable slip (usually 0)
        response_gains: List of different gain values to compare
        periods: Number of time periods
    
    Returns:
        Dictionary mapping gain to simulation results
    """
    all_results = {}
    
    for gain in response_gains:
        results = simulate_balancing_loop(
            initial_value=initial_slip,
            target=target_slip,
            gain=gain,
            periods=periods
        )
        
        # Calculate metrics
        max_overshoot = max(abs(val - target_slip) for _, val, _ in results)
        final_error = abs(results[-1][1] - target_slip)
        settling = calculate_settling_time(gain)
        
        all_results[gain] = {
            'simulation': results,
            'max_overshoot': max_overshoot,
            'final_error': final_error,
            'settling_time': settling
        }
    
    return all_results


def optimal_feedback_gain(
    system_delay: int,
    tolerance: float = 0.05
) -> float:
    """
    Estimate optimal feedback gain given system constraints
    
    Args:
        system_delay: Inherent delay in system response
        tolerance: Acceptable settling tolerance
    
    Returns:
        Recommended feedback gain
    """
    # Without delay: gain ~ 1.0 is optimal
    # With delay: must reduce gain to maintain stability
    # Rule of thumb: gain * delay < π/2 for stability
    
    if system_delay == 0:
        return 1.0
    
    # Conservative: aim for gain * delay = π/4 (half the stability limit)
    optimal = (math.pi / 4) / system_delay
    return min(optimal, 1.0)  # Don't exceed 1.0 even for short delays


if __name__ == "__main__":
    print("=== Balancing Loop Calculator ===\n")
    
    # Example 1: Different Feedback Strengths
    print("Example 1: Effect of Feedback Gain")
    print("-" * 60)
    gains = [0.3, 0.7, 1.0, 1.5]
    initial = 100
    target = 50
    periods = 10
    
    print(f"System: Start at {initial}, target {target}")
    print(f"\nGain | Period 2 | Period 5 | Period 10 | Settling Time")
    print("-" * 60)
    
    for gain in gains:
        sim = simulate_balancing_loop(initial, target, gain, periods)
        p2 = sim[2][1]
        p5 = sim[5][1]
        p10 = sim[10][1]
        settling = calculate_settling_time(gain)
        print(f"{gain:4.1f} | {p2:8.1f} | {p8.1f} | {p10:9.1f} | {settling:13.1f}")
    
    print("\nInterpretation:")
    print("- Gain too low (0.3): Slow to reach target")
    print("- Gain optimal (1.0): Fast, no overshoot")
    print("- Gain too high (1.5): Oscillates around target")
    print("- L8 intervention: Tune gain to ~1.0")
    
    # Example 2: Inventory Control
    print("\n\nExample 2: Inventory Management")
    print("-" * 60)
    inv_sim = inventory_control_system(
        initial_inventory=100,
        target_inventory=200,
        demand_rate=10,
        order_gain=0.5,
        lead_time=3,
        periods=20
    )
    
    print("Week | Inventory | Orders | Receipts")
    print("-" * 40)
    for t, inv, order, receipts in inv_sim[::4]:  # Every 4 weeks
        print(f"{t:4d} | {inv:9.0f} | {order:6.0f} | {receipts:8.0f}")
    
    print("\nKey Insights:")
    print("- Lead time (3 weeks) creates lag in correction")
    print("- Order gain (0.5) prevents oscillation")
    print("- If gain too high + lead time: bullwhip effect")
    print("- L9 intervention: Reduce lead time")
    print("- L8 intervention: Tune order gain")
    
    # Example 3: Quality Control Loops
    print("\n\nExample 3: Multiple Quality Control Loops")
    print("-" * 60)
    quality = quality_control_loops(
        initial_defects=100,
        periods=1
    )
    
    print("Control Stage      | Defects Remaining | % Caught")
    print("-" * 60)
    stages = [
        ('Initial', 100, 0),
        ('Design Review', quality['design_review'][0][1], 80),
        ('First Article', quality['first_article'][0][1], 60),
        ('In-Process', quality['in_process'][0][1], 50),
        ('Final Inspection', quality['final_inspection'][0][1], 70),
        ('Field Failures', quality['field_failures'][0][1], 0)
    ]
    
    for stage, remaining, caught in stages:
        print(f"{stage:18} | {remaining:17.1f} | {caught:7d}%")
    
    print("\nInterpretation:")
    print("- Early loops (design review) are HIGH leverage")
    print("- Late loops (final inspection) catch less, cost more")
    print("- Field failures are most expensive")
    print("- L8 intervention: Strengthen early loops, reduce reliance on late loops")
    print("- L6 intervention: Faster feedback from field to design")
    
    # Example 4: Stability Analysis
    print("\n\nExample 4: Stability Analysis")
    print("-" * 60)
    test_cases = [
        (0.5, 0),
        (1.0, 0),
        (1.5, 0),
        (0.5, 3),
        (1.0, 3),
    ]
    
    print("Gain | Delay | Status")
    print("-" * 60)
    for gain, delay in test_cases:
        analysis = analyze_stability(gain, delay)
        print(f"{gain:4.1f} | {delay:5d} | {analysis['status']}")
    
    print("\nKey Principle:")
    print("- Gain × Delay product determines stability")
    print("- High gain + long delay = oscillation/instability")
    print("- Must reduce one if other is fixed")
    print("- L8: Reduce gain")
    print("- L9: Reduce delay")
