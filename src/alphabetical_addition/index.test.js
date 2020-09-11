const addLetters = require('./index');

test('should return z by default', () => {
  expect(addLetters()).toBe('z')
})

test('should return d when adding y, c, and b', () => {
  expect(addLetters('y', 'c', 'b')).toBe('d')
})
