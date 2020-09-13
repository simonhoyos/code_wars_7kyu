const twoOldestAges = require('./index');

test('should return 45, 87 when [1,5,87,45,8,8]', () => {
  expect(twoOldestAges([1,5,87,45,8,8])).toMatchObject([45, 87])
})

