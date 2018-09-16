const findSmallestInt = require('./index');

test('should return the smallest int 8', () => {
  expect(findSmallestInt([78,56,232,12,8])).toBe(8);
});

test('should return the smallest int 12', () => {
  expect(findSmallestInt([78,56,232,12,18])).toBe(12);
});

test('should return the smallest int 56', () => {
  expect(findSmallestInt([78,56,232,412,228])).toBe(56);
});

test('should return the smallest int 0', () => {
  expect(findSmallestInt([78,56,232,12,0])).toBe(0);
});

test('should return the smallest int 1', () => {
  expect(findSmallestInt([1,56,232,12,8])).toBe(1);
});
