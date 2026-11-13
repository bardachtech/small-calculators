// Late invoice interest and fee
// Live calculator: https://tools.bardach-technologies.com/tool/late-invoice-interest-calculator
// Input: one object with these fields (example values from the live page): {"amount": 2400, "rate": 12, "days": 45, "fee": 25}
// Returns an object of results, or null when an input is out of range.

export function lateFee(v) {
  if (!(v.amount > 0 && v.rate >= 0 && v.rate <= 100 && v.days >= 0 && v.fee >= 0)) return null;
  var daily = v.amount * v.rate / 100 / 365, interest = daily * v.days;
  return { daily: daily, interest: interest, total: v.amount + interest + v.fee, monthly_pct: v.rate / 12 };
}
