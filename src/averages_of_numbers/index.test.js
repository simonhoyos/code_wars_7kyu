const averages = require('./index');

test('should return 2, 2, 2, 2', () => {
  expect(averages([2, 2, 2, 2, 2])).toMatchObject([2, 2, 2, 2]);
});

test('should return 2, -1, 2, -1, 2', () => {
  expect(averages([2, -2, 2, -2, 2])).toMatchObject([0, 0, 0, 0]);
});

test('should return 1, 3, 5, 1, -10', () => {
  expect(averages([1, 3, 5, 1, -10])).toMatchObject([2, 4, 3, -4.5]);
});
