const repeats = require('.');

describe('Sum of array singles', () => {
  it('should return 15', () => {
    expect(repeats([4,5,7,5,4,8])).toBe(15)
  })
})
