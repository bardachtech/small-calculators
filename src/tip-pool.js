// Tip pool split by hours and points
// Live calculator: https://tools.bardach-technologies.com/tool/tip-pool-calculator
// Input: one object with these fields (example values from the live page): {"pool": 1200, "h1": 8, "p1": 3, "h2": 6, "p2": 3, "h3": 7, "p3": 2, "h4": 6, "p4": 1, "h5": 4, "p5": 1, "h6": 0, "p6": 0}
// Returns an object of results, or null when an input is out of range.

export function tipPool(v) {
  if (!(v.pool > 0)) return null;
  var units = 0, i, h, p, shares = [], hourly = [];
  for (i = 1; i <= 6; i++) {
    h = v["h" + i]; p = v["p" + i];
    if (!(h >= 0 && p >= 0)) return null;
    units += h * p;
  }
  if (!(units > 0)) return null;
  var per = v.pool / units;
  for (i = 1; i <= 6; i++) {
    h = v["h" + i]; p = v["p" + i];
    shares.push(h * p * per); hourly.push(h * p > 0 ? h * p * per / h : null);
  }
  return { units: units, per_unit: per, shares: shares, hourly: hourly };
}
