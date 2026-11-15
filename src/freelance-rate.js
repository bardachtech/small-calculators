// Freelance hourly and day rate
// Live calculator: https://tools.bardach-technologies.com/tool/freelance-hourly-rate-calculator
// Input: one object with these fields (the live page's default values): {"income": 60000, "tax": 25, "costs": 6000, "off": 6, "hours": 40, "billable": 60, "day": 8}
// Returns an object of results, or null when an input is out of range.

export function freelanceRate(v) {
  if (!(v.tax >= 0 && v.tax < 100 && v.billable > 0 && v.billable <= 100 && v.hours > 0 && v.off >= 0 && v.off < 52 && v.income >= 0 && v.costs >= 0)) return null;
  var revenue = v.income / (1 - v.tax / 100) + v.costs;
  var hours = (52 - v.off) * v.hours * v.billable / 100;
  var hourly = revenue / hours;
  return { revenue: revenue, hours: hours, hourly: hourly, day: hourly * (v.day > 0 ? v.day : 8) };
}
