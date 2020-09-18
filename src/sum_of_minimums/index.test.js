const sumOfMinimums = require('./index');

test('should return 26', () => {
  expect(
    sumOfMinimums(
      [
        [1, 2, 3, 4, 5],
        [5, 6, 7, 8, 9],
        [20, 21, 34, 56, 100]
      ]
    )
  ).toBe(26)
})

