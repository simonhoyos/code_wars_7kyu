const cupAndBalls = require('./index');

test('should return 1', () => {
  expect(cupAndBalls(2,[[1,2]])).toBe(1);
});

test('should return 1', () => {
  expect(cupAndBalls(1,[[2,3],[1,2],[1,2]])).toBe(1);
});

test('should return 3', () => {
  expect(cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]])).toBe(3);
});
