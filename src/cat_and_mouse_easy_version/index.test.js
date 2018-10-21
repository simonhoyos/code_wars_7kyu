const catMouse = require('./index');

test('should return Escaped!', () => {
  expect(catMouse('C....m')).toBe('Escaped!');
});

test('should return Caught!', () => {
  expect(catMouse('C..m')).toBe('Caught!');
});

test('should return Escaped!', () => {
  expect(catMouse('C.....m')).toBe('Escaped!');
});
