const flattenAndSort = require('./index');

test('should return the correct array', () => {
  expect(
    flattenAndSort([[3, 2, 1], [7, 8, 9], [6, 4, 5]])
  ).toMatchObject([1,2,3,4,5,6,7,8,9])
})

