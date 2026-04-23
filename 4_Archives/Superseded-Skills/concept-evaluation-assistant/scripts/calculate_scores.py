#!/usr/bin/env python3
"""
VDI 2225 Calculator
Tính toán tự động điểm số và xếp hạng các phương án thiết kế
"""

import json
import sys
from typing import Dict, List, Tuple
from pathlib import Path


class VDI2225Calculator:
    def __init__(self, data: Dict):
        """
        Initialize calculator with evaluation data
        
        Args:
            data: Dictionary containing:
                - criteria: List of {name, weight}
                - alternatives: List of {name, scores, cost}
        """
        self.criteria = data.get('criteria', [])
        self.alternatives = data.get('alternatives', [])
        
        # Validate data
        self._validate_data()
    
    def _validate_data(self):
        """Validate input data"""
        # Check weights sum to 1.0
        total_weight = sum(c['weight'] for c in self.criteria)
        if abs(total_weight - 1.0) > 0.01:
            raise ValueError(f"Weights must sum to 1.0, got {total_weight}")
        
        # Check all alternatives have scores for all criteria
        n_criteria = len(self.criteria)
        for alt in self.alternatives:
            if len(alt['scores']) != n_criteria:
                raise ValueError(
                    f"Alternative '{alt['name']}' has {len(alt['scores'])} scores, "
                    f"expected {n_criteria}"
                )
    
    def calculate_scores(self) -> List[Dict]:
        """
        Calculate weighted scores and rankings
        
        Returns:
            List of alternatives with calculated scores and rankings
        """
        results = []
        
        for alt in self.alternatives:
            name = alt['name']
            scores = alt['scores']
            cost = alt['cost']
            
            # Calculate weighted score
            weighted_score = sum(
                w['weight'] * s 
                for w, s in zip(self.criteria, scores)
            )
            
            # Calculate value (score per unit cost)
            value = weighted_score / cost if cost > 0 else 0
            
            results.append({
                'name': name,
                'scores': scores,
                'cost': cost,
                'total_score': round(weighted_score, 2),
                'value': round(value, 4)
            })
        
        # Add rankings
        results.sort(key=lambda x: x['total_score'], reverse=True)
        for i, r in enumerate(results, 1):
            r['score_rank'] = i
        
        results.sort(key=lambda x: x['value'], reverse=True)
        for i, r in enumerate(results, 1):
            r['value_rank'] = i
        
        # Sort back by score for display
        results.sort(key=lambda x: x['total_score'], reverse=True)
        
        return results
    
    def print_results(self, results: List[Dict]):
        """Print results in formatted table"""
        print("\n" + "="*80)
        print("KẾT QUẢ ĐÁNH GIÁ VDI 2225")
        print("="*80)
        
        # Print criteria weights
        print("\nTRỌNG SỐ TIÊU CHÍ:")
        for i, c in enumerate(self.criteria, 1):
            print(f"  {i}. {c['name']}: {c['weight']:.2f}")
        
        # Print detailed scores
        print("\nĐIỂM CHI TIẾT:")
        print("-" * 80)
        header = f"{'Phương án':<20} | "
        for i in range(len(self.criteria)):
            header += f"TC{i+1:02d} | "
        header += "TỔNG | Chi phí | Giá trị | Xh.Đ | Xh.GT"
        print(header)
        print("-" * 80)
        
        for r in results:
            row = f"{r['name']:<20} | "
            for s in r['scores']:
                row += f"{s:^4} | "
            row += f"{r['total_score']:^4.2f} | "
            row += f"{r['cost']:>7.0f} | "
            row += f"{r['value']:>7.4f} | "
            row += f" #{r['score_rank']:^2d} | "
            row += f"  #{r['value_rank']:^2d}"
            print(row)
        
        # Print summary
        print("\n" + "="*80)
        print("TÓM TẮT XẾP HẠNG:")
        print("="*80)
        
        print("\nXếp hạng theo TỔNG ĐIỂM (Technical Merit):")
        sorted_by_score = sorted(results, key=lambda x: x['score_rank'])
        for r in sorted_by_score:
            print(f"  #{r['score_rank']}. {r['name']}: {r['total_score']:.2f} điểm")
        
        print("\nXếp hạng theo GIÁ TRỊ KT-KT (Cost-Effectiveness):")
        sorted_by_value = sorted(results, key=lambda x: x['value_rank'])
        for r in sorted_by_value:
            print(f"  #{r['value_rank']}. {r['name']}: {r['value']:.4f} điểm/tỷ VNĐ")
        
        print("\n" + "="*80)
        print("KHUYẾN NGHỊ:")
        print("="*80)
        
        best_score = sorted_by_score[0]
        best_value = sorted_by_value[0]
        
        if best_score['name'] == best_value['name']:
            print(f"\n✅ Phương án '{best_score['name']}' THẮNG cả về điểm lẫn giá trị!")
            print(f"   → Đề xuất chọn '{best_score['name']}'")
        else:
            print(f"\n⚠️  Có sự khác biệt giữa hai tiêu chí:")
            print(f"   - Tốt nhất về kỹ thuật: '{best_score['name']}' ({best_score['total_score']:.2f} điểm)")
            print(f"   - Hiệu quả nhất về chi phí: '{best_value['name']}' ({best_value['value']:.4f} điểm/tỷ)")
            print(f"\n   → Nếu ngân sách không hạn chế: Chọn '{best_score['name']}'")
            print(f"   → Nếu cần tối ưu chi phí: Chọn '{best_value['name']}'")
        
        print("\n" + "="*80 + "\n")
    
    def sensitivity_analysis(self, results: List[Dict]) -> Dict:
        """
        Perform sensitivity analysis
        
        Args:
            results: Results from calculate_scores()
        
        Returns:
            Dictionary with sensitivity analysis results
        """
        print("\n" + "="*80)
        print("PHÂN TÍCH ĐỘ NHẠY (Sensitivity Analysis)")
        print("="*80)
        
        baseline_winner = results[0]['name']
        sensitive_criteria = []
        
        print("\nKiểm tra thay đổi trọng số ±20%:")
        print("-" * 80)
        
        for i, criterion in enumerate(self.criteria):
            original_weight = criterion['weight']
            
            # Test +20%
            criterion['weight'] = original_weight * 1.2
            self._normalize_weights(i)
            test_results = self.calculate_scores()
            new_winner_plus = test_results[0]['name']
            
            # Test -20%
            criterion['weight'] = original_weight * 0.8
            self._normalize_weights(i)
            test_results = self.calculate_scores()
            new_winner_minus = test_results[0]['name']
            
            # Restore original
            criterion['weight'] = original_weight
            self._normalize_weights(i)
            
            # Check if winner changed
            is_sensitive = (new_winner_plus != baseline_winner or 
                          new_winner_minus != baseline_winner)
            
            status = "❌ NHẠY CẢM" if is_sensitive else "✅ Ổn định"
            print(f"{criterion['name']:<30} | {status}")
            
            if is_sensitive:
                sensitive_criteria.append(criterion['name'])
                if new_winner_plus != baseline_winner:
                    print(f"   └─ +20% → Thắng: '{new_winner_plus}'")
                if new_winner_minus != baseline_winner:
                    print(f"   └─ -20% → Thắng: '{new_winner_minus}'")
        
        print("\n" + "-" * 80)
        if sensitive_criteria:
            print(f"\n⚠️  Quyết định NHẠY CẢM với: {', '.join(sensitive_criteria)}")
            print("   → Cần xem xét kỹ hơn, có thể tham khảo thêm ý kiến chuyên gia")
        else:
            print(f"\n✅ Quyết định VỮNG CHẮC - không đổi khi thay đổi trọng số ±20%")
        
        print("\n" + "="*80 + "\n")
        
        return {
            'baseline_winner': baseline_winner,
            'sensitive_criteria': sensitive_criteria
        }
    
    def _normalize_weights(self, changed_index: int):
        """Normalize weights after changing one weight"""
        total = sum(c['weight'] for c in self.criteria)
        if abs(total - 1.0) < 0.01:
            return
        
        # Distribute difference to other criteria
        diff = 1.0 - total
        n_others = len(self.criteria) - 1
        
        for i, c in enumerate(self.criteria):
            if i != changed_index:
                c['weight'] += diff / n_others
    
    def export_to_json(self, results: List[Dict], filename: str):
        """Export results to JSON file"""
        output = {
            'criteria': self.criteria,
            'results': results
        }
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(output, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Kết quả đã xuất ra: {filename}")


def load_from_json(filename: str) -> Dict:
    """Load evaluation data from JSON file"""
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)


def main():
    """Main function"""
    if len(sys.argv) < 2:
        print("Usage: python calculate_scores.py <input.json>")
        print("\nInput JSON format:")
        print("""
{
  "criteria": [
    {"name": "Tiêu chí 1", "weight": 0.30},
    {"name": "Tiêu chí 2", "weight": 0.20},
    ...
  ],
  "alternatives": [
    {
      "name": "Phương án A",
      "scores": [3, 4, 2, ...],
      "cost": 100
    },
    ...
  ]
}
        """)
        sys.exit(1)
    
    input_file = sys.argv[1]
    
    try:
        # Load data
        data = load_from_json(input_file)
        
        # Calculate
        calc = VDI2225Calculator(data)
        results = calc.calculate_scores()
        
        # Print results
        calc.print_results(results)
        
        # Sensitivity analysis
        calc.sensitivity_analysis(results)
        
        # Export results
        output_file = Path(input_file).stem + "_results.json"
        calc.export_to_json(results, output_file)
        
    except Exception as e:
        print(f"❌ Lỗi: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
