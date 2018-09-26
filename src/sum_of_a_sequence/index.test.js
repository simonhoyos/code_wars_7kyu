const sequenceSum = require('./index');

test('should return 12', () => {
  expect(sequenceSum(2, 6, 2)).toBe(12);
});

test('should return 15', () => {
  expect(sequenceSum(1, 5, 1)).toBe(15);
});

test('should return 5', () => {
  expect(sequenceSum(1, 5, 3)).toBe(5);
});
