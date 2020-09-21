const rowWeights = require('./index');

test('should return 62, 27', () => {
  expect(rowWeights([13, 27, 49])).toMatchObject([62, 27])
})

