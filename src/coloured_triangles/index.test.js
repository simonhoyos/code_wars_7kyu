const triangle = require('./index');

test('should return G', () => {
  expect(triangle('RRGBRGBB')).toBe('G')
})

