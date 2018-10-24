const circleOfNumbers = require('./index');

test('should return 7', () => {
  expect(circleOfNumbers(10,2)).toBe(7);
});

test('should return 2', () => {
  expect(circleOfNumbers(10,7)).toBe(2);
});

test('should return 3', () => {
  expect(circleOfNumbers(4,1)).toBe(3);
});

test('should return 0', () => {
  expect(circleOfNumbers(6,3)).toBe(0);
});
