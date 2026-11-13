// Client lifetime value, LTV:CAC and payback
// Live calculator: https://tools.bardach-technologies.com/tool/coaching-client-lifetime-value-calculator
// Input: one object with these fields (example values from the live page): {"fee": 300, "churn": 12.5, "margin": 80, "cac": 250}
// Returns an object of results, or null when an input is out of range.

export function clientLtv(v) {
  if (!(v.fee > 0 && v.churn > 0 && v.churn <= 100 && v.margin > 0 && v.margin <= 100 && v.cac >= 0)) return null;
  var months = 100 / v.churn, revenue = v.fee * months, mm = v.fee * v.margin / 100, ltv = revenue * v.margin / 100;
  return { months: months, revenue: revenue, ltv: ltv, margin_month: mm, ltv_cac: v.cac > 0 ? ltv / v.cac : null, payback: v.cac > 0 ? v.cac / mm : null };
}
