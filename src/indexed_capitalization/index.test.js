const capitalize = require('.');

describe('Indexed capitalization', () => {
  it('should return aBCdeF', () => {
    expect(capitalize('abcdef', [1, 2, 5])).toBe('aBCdeF')
  })
})
