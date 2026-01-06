import assert from "node:assert";
import { test, describe, before, after } from "node:test";

import {caloriesBurned} from "../utils/caloriesBurn.js";

describe("Test calories burned", () => {
  test("conversion result is correct", () => {
    assert.equal(caloriesBurned(100, 60), 6216);
  });

  test("error no arguments", ()=>{
   assert.throws(()=>getDistanceInMeters(), Error)
  })

  test("error string and not number", ()=>{
   assert.throws(()=>getDistanceInMeters("hello world", 2), Error)
  })
});

