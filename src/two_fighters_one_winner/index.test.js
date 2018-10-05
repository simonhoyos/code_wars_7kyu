const {
  Fighter,
  declareWinner,
} = require('./index');

test('should return Lew', () => {
  expect(declareWinner(
    new Fighter('Lew', 10, 2),
    new Fighter('Harry', 5, 4),
    'Lew')).toBe('Lew');
});

test('should return Harry', () => {
  expect(declareWinner(
    new Fighter('Lew', 10, 2),
    new Fighter('Harry', 5, 4),
    'Harry')).toBe('Harry');
});

test('should return Harold', () => {
  expect(declareWinner(
    new Fighter('Harald', 20, 5),
    new Fighter('Harry', 5, 4),
    'Harry')).toBe('Harald');
});

test('should return Harold', () => {
  expect(declareWinner(
    new Fighter('Harald', 20, 5),
    new Fighter('Harry', 5, 4),
    'Harald')).toBe('Harald');
});

test('should return Harold', () => {
  expect(declareWinner(
    new Fighter('Jerry', 30, 3),
    new Fighter('Harald', 20, 5),
    'Jerry')).toBe('Harald');
});

test('should return Harold', () => {
  expect(declareWinner(
    new Fighter('Jerry', 30, 3),
    new Fighter('Harald', 20, 5),
    'Harald')).toBe('Harald');
});
