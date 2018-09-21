const reverse = require('./index');

test('should return dlrow olleh', () => {
  expect(reverse('hello world')).toBe('dlrow olleh');
});

test('should return dcba', () => {
  expect(reverse('abcd')).toBe('dcba');
});

test('should return 54321', () => {
  expect(reverse('12345')).toBe('54321');
});
