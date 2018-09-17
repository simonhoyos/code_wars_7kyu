const minMax = require('./index');

test('should return 1 and 5', () => {
  expect(minMax([1,2,3,4,5])).toMatchObject([1, 5]);
});

test('should return 5 and 2334454', () => {
  expect(minMax([2334454,5])).toMatchObject([5, 2334454]);
});
