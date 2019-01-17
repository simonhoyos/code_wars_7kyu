const maxProduct = require("./index");

test("should return 20", () => {
  expect(maxProduct([4, 3, 5], 2)).toBe(20);
});

test("should return 720", () => {
  expect(maxProduct([10, 8, 7, 9], 3)).toBe(720);
});

test("should return 288", () => {
  expect(maxProduct([8, 6, 4, 6], 3)).toBe(288);
});

test("should return 9600", () => {
  expect(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)).toBe(9600);
});

test("should return 247895375", () => {
  expect(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)).toBe(
    247895375
  );
});

test("should return 4", () => {
  expect(maxProduct([-4, -27, -15, -6, -1], 2)).toBe(4);
});

test("should return 136", () => {
  expect(maxProduct([-17, -8, -102, -309], 2)).toBe(136);
});

test("should return 30", () => {
  expect(maxProduct([10, 3, -27, -1], 3)).toBe(-30);
});

test("should return 253344", () => {
  expect(maxProduct([14, 29, -28, 39, -16, -48], 4)).toBe(-253344);
});

test("should return1 ", () => {
  expect(maxProduct([1], 1)).toBe(1);
});
