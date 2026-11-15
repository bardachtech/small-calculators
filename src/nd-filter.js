// Drone ND filter (180-degree shutter rule)
// Live calculator: https://tools.bardach-technologies.com/tool/drone-nd-filter-calculator
// Input: one object with these fields (the live page's default values): {"fps": 30, "metered": 2000}
// Returns an object of results, or null when an input is out of range.

export function ndFilter(v) {
  if (!(v.fps > 0 && v.fps <= 1000 && v.metered > 0)) return null;
  var target = 2 * v.fps, factor = v.metered / target, stops = Math.log2(factor);
  var r = Math.floor(stops + 0.5), ndStops = stops < 1 ? 0 : Math.min(6, Math.max(2, r)), nd = Math.pow(2, ndStops);
  return { target_den: target, factor: factor, stops: stops, nd_stops: ndStops, nd: nd,
           shutter_den: v.metered / nd, off_stops: stops - ndStops, too_bright: stops - ndStops > 0.5 };
}
