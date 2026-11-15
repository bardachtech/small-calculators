# Small calculators, plain JavaScript

**Live demo:** https://bardachtech.github.io/small-calculators/ runs every function below in your browser, with the test inputs. Change a number and the result updates.

Ten pure functions behind the free calculators on tools.bardach-technologies.com: mortgage payment and the 28/36
rule, late-invoice interest, a drone ND filter from the 180-degree shutter rule, a tip pool split, client lifetime value,
a commission split, freelance rates, a recruiting funnel, membership churn and agency utilization.

Each file exports one function that takes an object of numbers and returns an object of results (or `null` when an
input is out of range). No dependencies, no build step, no network, no storage.

| function | what it computes | source | live page |
|---|---|---|---|
| `homeAffordability` | Home affordability and monthly mortgage payment | [`src/home-affordability.js`](src/home-affordability.js) | [try it](https://tools.bardach-technologies.com/tool/home-affordability-monthly-payment-calculator?utm_source=github) |
| `lateFee` | Late invoice interest and fee | [`src/late-fee.js`](src/late-fee.js) | [try it](https://tools.bardach-technologies.com/tool/late-invoice-interest-calculator?utm_source=github) |
| `ndFilter` | Drone ND filter (180-degree shutter rule) | [`src/nd-filter.js`](src/nd-filter.js) | [try it](https://tools.bardach-technologies.com/tool/drone-nd-filter-calculator?utm_source=github) |
| `tipPool` | Tip pool split by hours and points | [`src/tip-pool.js`](src/tip-pool.js) | [try it](https://tools.bardach-technologies.com/tool/tip-pool-calculator?utm_source=github) |
| `clientLtv` | Client lifetime value, LTV:CAC and payback | [`src/client-ltv.js`](src/client-ltv.js) | [try it](https://tools.bardach-technologies.com/tool/coaching-client-lifetime-value-calculator?utm_source=github) |
| `commissionSplit` | Real estate commission split | [`src/commission-split.js`](src/commission-split.js) | [try it](https://tools.bardach-technologies.com/tool/real-estate-commission-split-calculator?utm_source=github) |
| `freelanceRate` | Freelance hourly and day rate | [`src/freelance-rate.js`](src/freelance-rate.js) | [try it](https://tools.bardach-technologies.com/tool/freelance-hourly-rate-calculator?utm_source=github) |
| `recruitingFunnel` | Recruiting funnel: candidates to source per hire | [`src/recruiting-funnel.js`](src/recruiting-funnel.js) | [try it](https://tools.bardach-technologies.com/tool/recruiting-funnel-calculator?utm_source=github) |
| `churnRevenue` | Membership churn and monthly revenue | [`src/churn-revenue.js`](src/churn-revenue.js) | [try it](https://tools.bardach-technologies.com/tool/membership-churn-revenue-calculator?utm_source=github) |
| `utilization` | Agency utilization rate and revenue gap | [`src/utilization.js`](src/utilization.js) | [try it](https://tools.bardach-technologies.com/tool/agency-utilization-rate-calculator?utm_source=github) |

```js
import { ndFilter } from "./src/nd-filter.js";
console.log(ndFilter({ fps: 30, metered: 2000 }));
// stops ≈ 5.06 above 1/60 s → ND32 (5 stops), shutter 1/62.5 s
```

## Tests

`node --test` (Node 18+). The expected values in `test/vectors.json` come from a separate Python
re-implementation of each formula, so the tests compare two independent implementations.

## Limits

The mortgage function leaves out mortgage insurance and closing costs; the late-fee function uses simple daily
interest on a 365-day year.

## Licence

MIT. Built by Bardach Technologies; every formula is checked by the tests above.
