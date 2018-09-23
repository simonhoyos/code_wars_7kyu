const f = require('./index');

test('should return 5050', () => {
  expect(f(100)).toBe(5050);
});
