const findMissingNumber = require('./index');

test('should return 4', () => {
  expect(findMissingNumber("1 2 3 5")).toBe(4);
});

test('should return 2', () => {
  expect(findMissingNumber("1 3")).toBe(2);
});

test('should return 2', () => {
  expect(findMissingNumber("1 5")).toBe(2);
});

test('should return 0', () => {
  expect(findMissingNumber("")).toBe(0);
});

test('should return 0', () => {
  expect(findMissingNumber("1 2 3 4 5")).toBe(0);
});

test('should return 1', () => {
  expect(findMissingNumber("2 3 4 5")).toBe(1);
});

test('should return 1', () => {
  expect(findMissingNumber("2 6 4 5 3")).toBe(1);
});

test('should return 1', () => {
  expect(findMissingNumber("2 1 4 3 a")).toBe(1);
});
