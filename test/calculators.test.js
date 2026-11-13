import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const vectors = JSON.parse(readFileSync(new URL("./vectors.json", import.meta.url), "utf8"));
const TOLERANCE = 1e-9;

for (const [name, v] of Object.entries(vectors)) {
  test(`${v.fn} matches the independent reference on the example inputs`, async () => {
    const mod = await import(`../src/${name}.js`);
    const got = mod[v.fn](v.input);
    assert.ok(got, `${v.fn} returned null for the example inputs`);
    for (const [key, want] of Object.entries(v.expect)) {
      assert.ok(Math.abs(got[key] - want) <= TOLERANCE * Math.max(1, Math.abs(want)), `${key}: got ${got[key]}, want ${want}`);
    }
  });

  test(`${v.fn} returns null for a negative first input`, async () => {
    const mod = await import(`../src/${name}.js`);
    const first = Object.keys(v.input)[0];
    assert.equal(mod[v.fn]({ ...v.input, [first]: -1 }), null);
  });
}
