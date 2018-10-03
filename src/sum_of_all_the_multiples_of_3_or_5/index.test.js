const findSum = require('./index');

test('should return 8', () => {
  expect(findSum(5)).toBe(8);
});

test('should return 33', () => {
  expect(findSum(10)).toBe(33);
});
