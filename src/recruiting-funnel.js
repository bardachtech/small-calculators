// Recruiting funnel: candidates to source per hire
// Live calculator: https://tools.bardach-technologies.com/tool/recruiting-funnel-calculator
// Input: one object with these fields (example values from the live page): {"hires": 1, "accept": 85, "offer": 25, "interview": 40, "reply": 20, "minutes": 5}
// Returns an object of results, or null when an input is out of range.

export function recruitingFunnel(v) {
  var rates = [v.accept, v.offer, v.interview, v.reply];
  if (!(v.hires >= 1 && Math.floor(v.hires) === v.hires && v.minutes >= 0)) return null;
  for (var i = 0; i < rates.length; i++) { if (!(rates[i] > 0 && rates[i] <= 100)) return null; }
  var up = function (x) { return Math.ceil(Math.round(x * 1e9) / 1e9); };
  var offers = up(v.hires / (v.accept / 100)), interviews = up(offers / (v.offer / 100));
  var screens = up(interviews / (v.interview / 100)), sourced = up(screens / (v.reply / 100));
  return { offers: offers, interviews: interviews, screens: screens, sourced: sourced,
           sourcing_hours: sourced * v.minutes / 60, sourced_per_hire: sourced / v.hires };
}
