const stray = require('./index');

test('should return 2', () => {
  expect(stray([1, 1, 2])).toBe(2);
});

test('should return 2', () => {
  expect(stray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
});
