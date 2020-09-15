const predictAge = require('./index');

test('should return 86', () => {
  expect(predictAge(65,60,75,55,60,63,64,45)).toBe(86)
})
