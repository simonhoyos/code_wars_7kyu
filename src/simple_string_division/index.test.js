const solve = require('./index');

test('should return 23', () => {
  expect(solve('123', 1)).toBe(23);
});

test('should return 234', () => {
  expect(solve('1234', 1)).toBe(234);
});

test('should return 34', () => {
  expect(solve('1234', 2)).toBe(34);
});

test('should return 4', () => {
  expect(solve('1234', 3)).toBe(4);
});
