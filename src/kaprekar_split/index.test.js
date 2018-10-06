const kaprekarSplit = require('./index');

test('should return 0', () => {
  expect(kaprekarSplit(1)).toBe(0);
});

test('should return 1', () => {
  expect(kaprekarSplit(9)).toBe(1);
});

test('should return 2', () => {
  expect(kaprekarSplit(45)).toBe(2);
});

test('should return 3', () => {
  expect(kaprekarSplit(2223)).toBe(3);
});

test('should return 4', () => {
  expect(kaprekarSplit(5050)).toBe(4);
});

test('should return -1', () => {
  expect(kaprekarSplit(5051)).toBe(-1);
});
