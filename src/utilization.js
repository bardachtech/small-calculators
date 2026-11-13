// Agency utilization rate and revenue gap
// Live calculator: https://tools.bardach-technologies.com/tool/agency-utilization-rate-calculator
// Input: one object with these fields (example values from the live page): {"people": 5, "hours": 160, "billable": 520, "rate": 120, "target": 75}
// Returns an object of results, or null when an input is out of range.

export function utilization(v) {
  if (!(v.people > 0 && v.hours > 0 && v.billable >= 0 && v.rate > 0 && v.target > 0 && v.target <= 100)) return null;
  var available = v.people * v.hours, target_hours = available * v.target / 100, gap_hours = target_hours - v.billable;
  return { available: available, utilization: v.billable / available * 100, nonbillable: available - v.billable,
           revenue: v.billable * v.rate, capacity_revenue: available * v.rate, target_hours: target_hours,
           target_revenue: target_hours * v.rate, gap_hours: gap_hours, gap_revenue: gap_hours * v.rate };
}
