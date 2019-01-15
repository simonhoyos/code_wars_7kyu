const oddOrEven = require('./index');

test('should return even', () => {
  expect(oddOrEven([0])).toBe('even');
});

test('should return odd', () => {
  expect(oddOrEven([1])).toBe('odd');
});

test('should return even', () => {
  expect(oddOrEven([])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([0, 1, 5])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([0, 1, 3])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([1023, 1, 2])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([0, -1, -5])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([0, -1, -3])).toBe('even');
});

test('should return even', () => {
  expect(oddOrEven([-1023, 1, -2])).toBe('even');
});

test('should return odd', () => {
  expect(oddOrEven([0, 1, 2])).toBe('odd');
});

test('should return odd', () => {
  expect(oddOrEven([0, 1, 4])).toBe('odd');
});

test('should return odd', () => {
  expect(oddOrEven([1023, 1, 3])).toBe('odd');
});

test('should return odd', () => {
  expect(oddOrEven([0, -1, 2])).toBe('odd');
});

test('should return odd', () => {
  expect(oddOrEven([0, 1, -4])).toBe('odd');
});

test('should return odd', () => {
  expect(oddOrEven([-1023, -1, 3])).toBe('odd');
});
