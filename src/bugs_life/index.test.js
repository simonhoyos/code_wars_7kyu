const shortestDistance = require('./index');

test('should return 4.242640687119285', () => {
  expect(shortestDistance(1, 2, 3)).toBe(4.242640687119285);
});

test('should return 2.23606797749979', () => {
  expect(shortestDistance(1, 1, 1)).toBe(2.23606797749979);
});

test('should return 262.47380821712477', () => {
  expect(shortestDistance(134, 191.5, 45.5)).toBe(262.47380821712477)
});
