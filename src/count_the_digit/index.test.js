const nbDig = require('./index');

test('should return 4700', () => {
  expect(nbDig(5750, 0)).toBe(4700);
});

test('should return 9481', () => {
  expect(nbDig(11011, 2)).toBe(9481);
});

test('should return 7733', () => {
  expect(nbDig(12224, 8)).toBe(7733);
});

test('should return 11905', () => {
  expect(nbDig(11549, 1)).toBe(11905);
});
