const removeUrlAnchor = require('./index');

test('should remove anchor', () => {
  expect(removeUrlAnchor('www.codewars.com#about')).toMatch('www.codewars.com')
})
