const solve = require('./index');

test('should return 16', () => {
  expect(solve("1 2 36 4 8",2)).toBe(16);
});

test('should return 8', () => {
  expect(solve("1 2 36 4 8",3)).toBe(8);
});

test('should return 11', () => {
  expect(solve("1 2 36 4 8",4)).toBe(11);
});

test('should return 4', () => {
  expect(solve("1 2 36 4 8",8)).toBe(4);
});
