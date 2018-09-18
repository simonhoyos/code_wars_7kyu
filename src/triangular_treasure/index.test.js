const triangular = require('./index');

test('should return 3', () => {
  expect(triangular(2)).toBe(3);
});

test('should return 10', () => {
  expect(triangular(4)).toBe(10);
});
