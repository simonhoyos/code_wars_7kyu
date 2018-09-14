const dontGiveMeFive = require('./index');

test('count 8 numbers that doesn\'t include five from 1 to 9', () => {
  expect(dontGiveMeFive(1, 9)).toBe(8);
});

test('count 12 numbers that doesn\'t include five from 4 to 17', () => {
  expect(dontGiveMeFive(4, 17)).toBe(12);
});
