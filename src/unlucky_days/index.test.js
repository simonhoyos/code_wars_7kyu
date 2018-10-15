const unluckyDays = require('./index');

test('should be: 1', () => {
  expect(unluckyDays(1586)).toBe(1);
});

test('should be: 3', () => {
  expect(unluckyDays(1001)).toBe(3);
});

test('should be: 2', () => {
  expect(unluckyDays(2819)).toBe(2);
});

test('should be: 2', () => {
  expect(unluckyDays(2792)).toBe(2);
});

test('should be: 2', () => {
  expect(unluckyDays(2723)).toBe(2);
});

test('should be: 1', () => {
  expect(unluckyDays(1909)).toBe(1);
});

test('should be: 2', () => {
  expect(unluckyDays(1812)).toBe(2);
});

test('should be: 2', () => {
  expect(unluckyDays(1618)).toBe(2);
});

test('should be: 1', () => {
  expect(unluckyDays(2132)).toBe(1);
});

test('should be: 3', () => {
  expect(unluckyDays(2065)).toBe(3);
});
