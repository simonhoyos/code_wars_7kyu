const movie = require('./index');

test('should return 43', () => {
  expect(movie(500, 15, 0.9)).toBe(43)
})

