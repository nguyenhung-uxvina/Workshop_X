#!/usr/bin/env python3
"""
Delay (L9) Calculator
Analyzes impact of information and response delays on system behavior
"""

import math
from typing import List, Tuple

def simulate_with_delay(
    initial_value: float,
    target: float,
    gain: float,
    delay: int,
    periods: int
) -> List[Tuple[int, float, float]]:
    """
    Simulate system with information or response delay
    
    Model: X(t+1) = X(t) - gain * (X(t-delay) - Target)
    
    Args:
        initial_value: Starting value
        target: System goal
        gain: Feedback strength
        delay: Number of periods of delay
        periods: Simulation duration
    
    Returns:
        List of (time, value, error) tuples
    """
    # Initialize history with starting value
    history = [initial_value] * (delay + 1)
    results = []
    
    for t in range(periods + 1):
        current = history[-1]
        delayed_value = history[0] if t >= delay else initial_value
        error = delayed_value - target
        
        results.append((t, current, error))
        
        # Calculate correction based on delayed information
        correction = -gain * error
        next_value = current + correction
        
        # Update history
        history.pop(0)
        history.append(next_value)
    
    return results


def calculate_delay_impact(
    gain: float,
    delay: int
) -> dict:
    """
    Analyze impact of delay on system stability
    
    Args:
        gain: Feedback strength
        delay: Delay periods
    
    Returns:
        Dictionary with impact metrics
    """
    # Stability criterion (approximate): gain * delay < π/2
    stability_product = gain * delay
    stability_limit = math.pi / 2
    
    if delay == 0:
        impact = "No delay - system can respond immediately"
    elif stability_product < stability_limit * 0.5:
        impact = "Stable - delay manageable"
    elif stability_product < stability_limit:
        impact = "Marginally stable - may oscillate"
    else:
        impact = "Unstable - oscillation or divergence likely"
    
    # Approximate settling time increase due to delay
    # Rule of thumb: each period of delay adds ~2-3 periods to settling
    settling_increase = delay * 2.5
    
    return {
        'gain': gain,
        'delay': delay,
        'stability_product': stability_product,
        'stability_limit': stability_limit,
        'impact': impact,
        'settling_increase': settling_increase
    }


def supply_chain_delay_cascade(
    customer_demand: float,
    order_gains: List[float],
    lead_times: List[int],
    periods: int
) -> dict:
    """
    Simulate bullwhip effect in multi-tier supply chain
    
    Args:
        customer_demand: Base demand level
        order_gains: Ordering aggressiveness at each tier
        lead_times: Delay at each tier (retailer → distributor → manufacturer)
        periods: Simulation duration
    
    Returns:
        Dictionary with demand at each tier
    """
    num_tiers = len(lead_times)
    
    # Initialize inventories and order histories
    inventories = [customer_demand * 10] * num_tiers  # Start with 10 periods inventory
    order_histories = [[customer_demand] * lt for lt in lead_times]
    
    results = {f'tier_{i}': [] for i in range(num_tiers)}
    results['customer'] = []
    
    for t in range(periods + 1):
        # Customer demand (assume constant for simplicity)
        demand = customer_demand
        results['customer'].append((t, demand))
        
        # Propagate through supply chain
        for tier in range(num_tiers):
            # Receive shipment from supplier (delayed order)
            receipts = order_histories[tier][0]
            
            # Update inventory
            if tier == 0:
                # Retailer sees customer demand
                inventories[tier] = inventories[tier] + receipts - demand
                upstream_demand = demand
            else:
                # Higher tiers see orders from downstream
                inventories[tier] = inventories[tier] + receipts - upstream_demand
            
            # Place order based on inventory position
            target_inventory = demand * 10  # Simple policy: maintain 10 periods
            inventory_error = target_inventory - inventories[tier]
            order = upstream_demand + order_gains[tier] * inventory_error
            order = max(0, order)  # Can't order negative
            
            # Store order for this tier
            results[f'tier_{tier}'].append((t, order))
            
            # This tier's order becomes next tier's demand
            upstream_demand = order
            
            # Update order history
            order_histories[tier].pop(0)
            order_histories[tier].append(order)
    
    return results


def development_cycle_delay(
    requirements_volatility: float,
    cycle_time: int,
    periods: int
) -> List[Tuple[int, float, float, float]]:
    """
    Simulate effect of long development cycle on requirements match
    
    Args:
        requirements_volatility: How much requirements change per period
        cycle_time: Development cycle duration
        periods: Simulation duration
    
    Returns:
        List of (time, requirement, delivered_capability, gap) tuples
    """
    results = []
    current_requirement = 100  # Baseline
    
    # Track what's being developed (requirement from cycle_time ago)
    development_queue = [current_requirement] * cycle_time
    
    for t in range(periods + 1):
        # What gets delivered this period (from cycle_time ago)
        delivered = development_queue[0]
        
        # Current requirement (has evolved)
        gap = current_requirement - delivered
        
        results.append((t, current_requirement, delivered, gap))
        
        # Start development on current requirement
        development_queue.pop(0)
        development_queue.append(current_requirement)
        
        # Requirements evolve
        current_requirement = current_requirement + requirements_volatility
    
    return results


def feedback_delay_learning(
    initial_quality: float,
    learning_rate: float,
    feedback_delays: List[int],
    periods: int
) -> dict:
    """
    Compare learning rates with different feedback delays
    
    Args:
        initial_quality: Starting quality level
        learning_rate: How much improvement per feedback cycle
        feedback_delays: List of delays to compare
        periods: Simulation duration
    
    Returns:
        Dictionary mapping delay to quality over time
    """
    results = {}
    
    for delay in feedback_delays:
        quality_history = [initial_quality] * (delay + 1)
        quality_over_time = []
        
        for t in range(periods + 1):
            current_quality = quality_history[-1]
            quality_over_time.append((t, current_quality))
            
            # Learning occurs based on delayed feedback
            if t >= delay:
                delayed_quality = quality_history[0]
                # Quality improvement based on seeing past mistakes
                improvement = learning_rate * (100 - delayed_quality)
                next_quality = current_quality + improvement
                next_quality = min(100, next_quality)  # Cap at 100%
            else:
                next_quality = current_quality
            
            # Update history
            quality_history.pop(0)
            quality_history.append(next_quality)
        
        results[delay] = quality_over_time
    
    return results


def optimal_delay_reduction(
    current_delay: int,
    reduction_cost_per_period: float,
    value_per_period_saved: float
) -> dict:
    """
    Calculate ROI of delay reduction investment
    
    Args:
        current_delay: Current delay in periods
        reduction_cost_per_period: Cost to reduce delay by 1 period
        value_per_period_saved: Value of reducing delay by 1 period
    
    Returns:
        Dictionary with analysis for each possible reduction
    """
    results = {}
    
    for target_delay in range(current_delay):
        reduction = current_delay - target_delay
        cost = reduction * reduction_cost_per_period
        annual_value = reduction * value_per_period_saved * 12  # Assume monthly periods
        payback = cost / annual_value if annual_value > 0 else float('inf')
        
        results[target_delay] = {
            'reduction': reduction,
            'cost': cost,
            'annual_value': annual_value,
            'payback_years': payback
        }
    
    return results


if __name__ == "__main__":
    print("=== Delay (L9) Impact Calculator ===\n")
    
    # Example 1: Delay Impact on Stability
    print("Example 1: Effect of Delay on System Stability")
    print("-" * 70)
    print("Gain | Delay | Stability Product | Impact")
    print("-" * 70)
    
    test_cases = [
        (1.0, 0),
        (1.0, 1),
        (1.0, 2),
        (1.0, 3),
        (0.5, 3),
    ]
    
    for gain, delay in test_cases:
        analysis = calculate_delay_impact(gain, delay)
        print(f"{gain:4.1f} | {delay:5d} | {analysis['stability_product']:17.2f} | "
              f"{analysis['impact']}")
    
    print("\nInterpretation:")
    print("- No delay (0): System stable with gain = 1.0")
    print("- With delay: Must reduce gain or accept oscillation")
    print("- L9 intervention: Reduce delay")
    print("- L8 intervention: Reduce gain to compensate")
    
    # Example 2: Supply Chain Bullwhip Effect
    print("\n\nExample 2: Supply Chain Bullwhip Effect")
    print("-" * 70)
    
    bullwhip = supply_chain_delay_cascade(
        customer_demand=100,
        order_gains=[0.3, 0.3, 0.3],  # 3 tiers
        lead_times=[2, 3, 4],  # Increasing delays
        periods=20
    )
    
    print("Period | Customer | Retailer | Distributor | Manufacturer")
    print("-" * 70)
    for t in range(0, 21, 5):  # Every 5 periods
        customer_order = bullwhip['customer'][t][1]
        retailer_order = bullwhip['tier_0'][t][1]
        distributor_order = bullwhip['tier_1'][t][1]
        manufacturer_order = bullwhip['tier_2'][t][1]
        print(f"{t:6d} | {customer_order:8.0f} | {retailer_order:8.0f} | "
              f"{distributor_order:11.0f} | {manufacturer_order:12.0f}")
    
    print("\nKey Insights:")
    print("- Customer demand: Constant at 100")
    print("- Each tier amplifies variation (bullwhip effect)")
    print("- Caused by: Delays (L9) + Inventory policies (L8)")
    print("- Solution: Reduce delays, share demand information (L6)")
    
    # Example 3: Development Cycle Delays
    print("\n\nExample 3: Long Development Cycles")
    print("-" * 70)
    
    dev_delays = development_cycle_delay(
        requirements_volatility=2.0,  # Requirements grow 2 units/period
        cycle_time=12,  # 12-month development cycle
        periods=24
    )
    
    print("Month | Requirement | Delivered | Gap")
    print("-" * 50)
    for t, req, delivered, gap in dev_delays[::6]:  # Every 6 months
        print(f"{t:5d} | {req:11.0f} | {delivered:9.0f} | {gap:3.0f}")
    
    print("\nInterpretation:")
    print("- Requirements evolve while system is being built")
    print("- 12-month delay = delivered capability lags requirements")
    print("- Gap widens over time if requirements volatile")
    print("- L9 intervention: Reduce cycle time (agile, spiral development)")
    print("- L4 intervention: Build evolvable systems")
    
    # Example 4: Feedback Delay Impact on Learning
    print("\n\nExample 4: Feedback Delay Impact on Quality Learning")
    print("-" * 70)
    
    learning_comparison = feedback_delay_learning(
        initial_quality=50,  # Start at 50% quality
        learning_rate=0.15,  # 15% improvement per cycle
        feedback_delays=[0, 3, 6, 12],
        periods=24
    )
    
    print("Feedback Delay | Quality at 12 Months | Quality at 24 Months")
    print("-" * 70)
    for delay in [0, 3, 6, 12]:
        q_12 = learning_comparison[delay][12][1]
        q_24 = learning_comparison[delay][24][1]
        print(f"{delay:14d} | {q_12:20.1f}% | {q_24:20.1f}%")
    
    print("\nKey Insights:")
    print("- Faster feedback = faster learning")
    print("- 12-month delay severely limits improvement")
    print("- L9 intervention: Accelerated testing, simulation")
    print("- L6 intervention: Direct engineer-to-field feedback")
    
    # Example 5: Delay Reduction ROI
    print("\n\nExample 5: ROI of Delay Reduction")
    print("-" * 70)
    
    roi_analysis = optimal_delay_reduction(
        current_delay=12,  # 12-month feedback cycle
        reduction_cost_per_period=50000,  # $50K per month of reduction
        value_per_period_saved=30000  # $30K/month value
    )
    
    print("Target | Reduction | Investment | Annual Value | Payback")
    print("Delay  | (months)  | ($K)       | ($K)         | (years)")
    print("-" * 70)
    for target in [9, 6, 3, 1]:
        if target in roi_analysis:
            r = roi_analysis[target]
            print(f"{target:6d} | {r['reduction']:9d} | ${r['cost']/1000:10.0f} | "
                  f"${r['annual_value']/1000:12.0f} | {r['payback_years']:7.1f}")
    
    print("\nInterpretation:")
    print("- Reducing delay from 12 to 3 months costs $450K")
    print("- But generates $324K/year in value")
    print("- Payback in 1.4 years")
    print("- L9 interventions often have strong ROI")
    print("- Faster feedback enables faster improvement (L8 loop)")
    
    print("\n\n=== Key Principles for L9 Interventions ===")
    print("-" * 70)
    print("1. Delays interact with feedback gains (L8)")
    print("   - High gain + long delay = instability")
    print("   - Must reduce one if other is fixed")
    print("")
    print("2. Delays compound through tiers")
    print("   - Supply chain: Each tier adds delay")
    print("   - Information chain: Each handoff adds delay")
    print("   - L9 solution: Shorten delays at each stage")
    print("")
    print("3. Delays prevent learning")
    print("   - Long feedback delays = slow learning")
    print("   - Quality improvement requires fast feedback")
    print("   - L9 + L6: Fast information + right information")
    print("")
    print("4. Delay reduction often has strong ROI")
    print("   - Cost is one-time investment")
    print("   - Value is recurring benefit")
    print("   - Unlike L12 (parameters), L9 changes structure")
