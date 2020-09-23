const wordsToMarks = require('./index');

test('should return 100', () => {
  expect(wordsToMarks('attitude')).toBe(100)
})

