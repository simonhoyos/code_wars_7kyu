const removeDuplicateWords = require('./index');

test('should return alpha beta gamma delta', () => {
  expect(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')).toBe('alpha beta gamma delta');
});
