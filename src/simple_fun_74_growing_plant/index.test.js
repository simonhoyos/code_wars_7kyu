const growingPlant = require('./index');

test('should return 10', () => {
  expect(growingPlant(100,10,910)).toBe(10)
})

