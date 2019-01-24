const roundToNext5 = require('./index');

test('should return 0', () => {
  expect(roundToNext5(0)).toBe(0);
});

test('should return 5', () => {
  expect(roundToNext5(1)).toBe(5);
});

test('should return 5', () => {
  expect(roundToNext5(3)).toBe(5);
});

test('should return 5', () => {
  expect(roundToNext5(5)).toBe(5);
});

test('should return 10', () => {
  expect(roundToNext5(7)).toBe(10);
});

test('should return 40', () => {
  expect(roundToNext5(39)).toBe(40);
});
