const foldTo = require('./index');

test('should return 42', () => {
  expect(foldTo(384000000)).toBe(42)
})

