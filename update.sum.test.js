const sum = require("./sum");
test("adds 6 + 4 to equal 10", () => {
  expect(sum(6, 4)).toBe(10);
});
test("adds 5 + 7 to equal 12", () => {
  expect(sum(5, 7)).toBe(12);
});
