const alphabetWar = require('./index');

test('should return let\'s fight again!', () => {
  expect(alphabetWar('zdqmwpbs')).toMatch('fight again')
})

