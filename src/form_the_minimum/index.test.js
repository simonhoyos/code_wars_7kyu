const minValue = require('./index');

test('should return 13', () => {
  expect(minValue([1, 3, 1])).toBe(13);
});

test('should return 457', () => {
  expect(minValue([4, 7, 5, 7])).toBe(457);
});

test('should return 148', () => {
  expect(minValue([4, 8, 1, 4])).toBe(148);
});

test('should return 579', () => {
  expect(minValue([5, 7, 9, 5, 7])).toBe(579);
});

test('should return 678', () => {
  expect(minValue([6, 7, 8, 7, 6, 6])).toBe(678);
});

test('should return 45679', () => {
  expect(minValue([5, 6, 9, 9, 7, 6, 4])).toBe(45679);
});

test('should return 134679', () => {
  expect(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])).toBe(134679);
});

test('should return 356789', () => {
  expect(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])).toBe(356789);
});

test('should return 1', () => {
  expect(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(1);
});

test('should return 0', () => {
  expect(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
});
