const isPowerOfTwo = require('.');

describe('Power of two', () => {
  it('should return true if num is power of two', () => {
    expect(isPowerOfTwo(4294967296)).toBeTruthy()
  })

  it('should return false if num is less than or equal to 0', () => {
    expect(isPowerOfTwo(-1)).toBeFalsy()
  })

  it('should return false if num is not a power of two', () => {
    expect(isPowerOfTwo(3)).toBeFalsy()
  })
})
