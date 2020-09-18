const wordValue = require('./index');

test('should return [88, 12, 225]', () => {
  expect(wordValue(['codewars', 'abc', 'xyz'])).toMatchObject([88, 12, 225])
})

