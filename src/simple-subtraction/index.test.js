const solve = require('./index');

test('should return [6,7]', () => {
  expect(solve(6,19)).toMatchObject([6,7]);
});

test('should return [0,1]', () => {
  expect(solve(2,1)).toMatchObject([0,1]);
});

test('should return [0,1]', () => {
  expect(solve(22,5)).toMatchObject([0,1]);
});

test('should return [2,2]', () => {
  expect(solve(2,10)).toMatchObject([2,2]);
});

test('should return [4,3]', () => {
  expect(solve(100000000000,3)).toMatchObject([4,3]);
});
