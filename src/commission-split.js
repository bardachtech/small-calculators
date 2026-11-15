// Real estate commission split
// Live calculator: https://tools.bardach-technologies.com/tool/real-estate-commission-split-calculator
// Input: one object with these fields (the live page's default values): {"price": 450000, "rate": 5.5, "side": 50, "split": 70, "fees": 495}
// Returns an object of results, or null when an input is out of range.

export function commissionSplit(v) {
  if (!(v.price > 0 && v.rate > 0 && v.rate <= 100 && v.side > 0 && v.side <= 100 && v.split >= 0 && v.split <= 100 && v.fees >= 0)) return null;
  var gross = v.price * v.rate / 100, side = gross * v.side / 100, agent = side * v.split / 100, net = agent - v.fees;
  return { gross: gross, side_gross: side, agent_gross: agent, brokerage: side - agent, net: net, net_pct: net / v.price * 100 };
}
