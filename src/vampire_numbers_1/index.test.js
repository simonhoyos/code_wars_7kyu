const vampireTest = require('./index');

test('should return true', () => {
  expect(vampireTest(21,6)).toBe(true);
});

test('should return true', () => {
  expect(vampireTest(204,615)).toBe(true);
});

test('should return true', () => {
  expect(vampireTest(30,-51)).toBe(true);
});

test('should return false', () => {
  expect(vampireTest(-246,-510)).toBe(false);
});

test('should return true', () => {
  expect(vampireTest(2947050,8469153)).toBe(true);
});

test('should return false', () => {
  expect(vampireTest(2947051,8469153)).toBe(false);
});
