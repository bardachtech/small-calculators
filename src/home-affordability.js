// Home affordability and monthly mortgage payment
// Live calculator: https://tools.bardach-technologies.com/tool/home-affordability-monthly-payment-calculator
// Input: one object with these fields (the live page's default values): {"price": 400000, "down": 20, "rate": 6.5, "years": 30, "taxrate": 1.1, "ins": 1800, "hoa": 0, "income": 120000, "debts": 500}
// Returns an object of results, or null when an input is out of range.

export function homeAffordability(v) {
  if (!(v.price > 0 && v.down >= 0 && v.down <= 100 && v.rate >= 0 && v.years > 0 && v.taxrate >= 0 && v.ins >= 0 &&
        v.hoa >= 0 && v.income >= 0 && v.debts >= 0)) return null;
  var n = v.years * 12;
  function perDollar(rate) {
    if (rate === 0) return 1 / n;
    var r = rate / 100 / 12; return r / (1 - Math.pow(1 + r, -n));
  }
  var loan = v.price * (1 - v.down / 100), pi = loan > 0 ? loan * perDollar(v.rate) : 0;
  var tax = v.price * v.taxrate / 100 / 12, ins = v.ins / 12, total = pi + tax + ins + v.hoa;
  var out = { loan: loan, down_amount: v.price - loan, payment_pi: pi, tax_month: tax, ins_month: ins, hoa_month: v.hoa,
              total_month: total, max_housing: null, max_price: null, max_loan: null, front_pct: null, back_pct: null, limit: null };
  if (!(v.income > 0)) return out;
  var m = v.income / 12, front = m * 0.28, back = m * 0.36 - v.debts, mh = Math.max(0, Math.min(front, back));
  var per = (1 - v.down / 100) * perDollar(v.rate) + v.taxrate / 100 / 12;
  var maxPrice = Math.max(0, (mh - ins - v.hoa) / per);
  out.max_housing = mh; out.max_price = maxPrice; out.max_loan = maxPrice * (1 - v.down / 100);
  out.front_pct = total / m * 100; out.back_pct = (total + v.debts) / m * 100; out.limit = front <= back ? "28" : "36";
  return out;
}
