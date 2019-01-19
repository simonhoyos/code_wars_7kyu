const arithmetic = require("./index");

test("add should return the two numbers added together!", () => {
  expect(arithmetic(1, 2, "add")).toBe(3);
});

test("subtract should return a minus b!", () => {
  expect(arithmetic(8, 2, "subtract")).toBe(6);
});

test("multiply should return a multiplied by b!", () => {
  expect(arithmetic(5, 2, "multiply")).toBe(10);
});

test("divide should return a divided by b!", () => {
  expect(arithmetic(8, 2, "divide")).toBe(4);
});
