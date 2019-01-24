var findLongest = require('./index');

test('should return 100', () => {
  expect(findLongest([1, 10, 100])).toBe(100);
});

test('should return 9000', () => {
  expect(findLongest([9000, 8, 800])).toBe(9000);
});

test('should return 900', () => {
  expect(findLongest([8, 900, 500])).toBe(900);
});
