const divisors = require('./index');

test('should return 3, 5', () => {
  expect(divisors(15)).toMatchObject([3, 5]);
});

test('should return 2, 3, 4, 6', () => {
  expect(divisors(12)).toMatchObject([2, 3, 4, 6]);
});

test('should return 13 is prime', () => {
  expect(divisors(13)).toBe("13 is prime");
});
