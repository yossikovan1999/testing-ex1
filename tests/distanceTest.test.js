import assert from "node:assert";
import { test, describe, before, after } from "node:test";
import { getDistanceInMeters } from "../utils/metersCalculator.js";

describe("Test distance km to meters conversion", () => {
  test("conversion result is correct", () => {
    assert.equal(getDistanceInMeters(20), 20000);
  });

  test("error was thrown", ()=>{
   assert.throws(()=>getDistanceInMeters("hello world"), Error)
  })
});
