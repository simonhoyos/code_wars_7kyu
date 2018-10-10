const orderedCount = require('./index');

test('should return [["a", 5], ["b", 2], ["r", 2], ["c", 1], ["d", 1]]', () => {
  expect(orderedCount('abracadabra')).toMatchObject([['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
});

test('should return [["C", 1], ["o", 1], ["d", 1], ["e", 1], [" ", 1], ["W", 1], ["a", 1], ["r", 1], ["s", 1]]', () => {
  expect(orderedCount('Code Wars')).toMatchObject([['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
});
