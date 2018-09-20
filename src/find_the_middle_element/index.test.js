const gimme = require('./index');

test('should return 0', () => {
  expect(gimme([2, 3, 1])).toBe(0);
});

test('should return 1', () => {
  expect(gimme([5, 10, 14])).toBe(1);
});
