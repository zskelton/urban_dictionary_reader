/* eslint-disable no-undef */
const sum = require("../app/sum");

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
