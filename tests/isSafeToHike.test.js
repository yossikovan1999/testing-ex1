import assert from "node:assert";
import { test, describe, before, after } from "node:test";
import app from "../app.js";

let appServer;

const clientFunction = async (temperature, windSpeed) => {
  
  const response = await fetch("http://localhost:3000/check-weather", {
    method: "POST",
    body: JSON.stringify({ temperature, windSpeed }),
    headers: {
    "Content-Type": "application/json",
  }
  });

  const data = await response.json();
  return data;
};

const unsafeObject = { safe: false, message: "Too windy to hike!" };
const successObject = {
  safe: true,
  message: "All conditions are good for hiking!",
};


  before(() => {
    appServer = app.listen(3000, () => {
      console.log("server started.");
    });
  });

  after(async ()=>{
    await appServer.close()
  })

  test("conversion result is correct", async () => {
    const result = await clientFunction(-1, 60);
    console.log(result);
    
    assert.deepEqual(result, unsafeObject);
  });

  test("conversion result is correct", async () => {
    const result = await clientFunction(20, 20);
    console.log(result);
    assert.deepEqual(result, successObject);
  });