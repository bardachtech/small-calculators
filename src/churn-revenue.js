// Membership churn and monthly revenue
// Live calculator: https://tools.bardach-technologies.com/tool/membership-churn-revenue-calculator
// Input: one object with these fields (example values from the live page): {"members": 120, "fee": 90, "churn": 5, "joins": 8}
// Returns an object of results, or null when an input is out of range.

export function churnRevenue(v) {
  if (!(v.members >= 0 && v.fee > 0 && v.churn > 0 && v.churn <= 100 && v.joins >= 0 && v.members + v.joins > 0)) return null;
  var c = v.churn / 100, x = v.members, revenue = 0, lost = 0, path = [];
  for (var i = 0; i < 12; i++) { lost += x * c; x = x * (1 - c) + v.joins; revenue += x * v.fee; path.push(x * v.fee); }
  var steady = v.joins / c;
  return { mrr_now: v.members * v.fee, members_12: x, mrr_12: x * v.fee, revenue_12: revenue, lost_12: lost,
           steady_members: steady, steady_mrr: steady * v.fee, path: path };
}
