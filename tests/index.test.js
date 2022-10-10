/* eslint-disable */
const axios = require("axios");
const colors = require("colors");
const  {getDefinition, enforceMax, testSite} = require("../app/functions.cjs");
const datagood = require("./data_good.json");
const databad = require("./data_bad.json");
const {axios_response_good, axios_response_bad} = require("./axios_responses.js");

// Test Site Function
jest.mock("axios");
describe("Test TestSite():", () => {
  test("TestSite(): Returns True when Site Up.", async () => {
    axios.get.mockResolvedValueOnce(axios_response_good);
    const response = await testSite();
    expect(response).toBeTruthy();
  });

  test("TestSite(): Returns False on Anything Else.", async () => {
    axios.get.mockResolvedValueOnce(axios_response_bad);
    const response = await testSite();
    expect(response).toBeFalsy();
  });
});

// Get Definition Function
describe("Test GetDefinition()", () => {
  test("Test GetDefinition", async () => {
    const definition = await getDefinition();
    expect(definition).toBe();
  });
});

// Enforce Max Function
describe("Test EnforceMax():", () => {
  test("EnforceMax(): Always returns valid number.", async() => {
    const num = enforceMax([]);
    expect(num).toBeGreaterThanOrEqual(0);
  });

  test("EnforceMax(): Picks the first under Max Length.", async () => {
    const num = enforceMax(datagood);
    expect(num).toBe(2);
  });

  test("EnforceMax(): Returns 0 with nothing under Max Length.", async () => {
    const num = enforceMax(databad);
    expect(num).toBe(0);
  });
});
