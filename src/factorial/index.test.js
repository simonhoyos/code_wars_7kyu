const factorial = require('./index');

test('should return 1', () => {
  expect(factorial(0)).toBe(1);
});

test('should return 1', () => {
  expect(factorial(1)).toBe(1);
});

test('should return 2', () => {
  expect(factorial(2)).toBe(2);
});

test('should return 6', () => {
  expect(factorial(3)).toBe(6);
});
