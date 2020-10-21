const pattern = require('.');

describe('Complete the pattern #1', () => {
  it('should return the correct pattern', () => {
    expect(pattern(3)).toBe('1\n22\n333')
  })

  it('should return an empty pattern if number is less than equal zero', () => {
    expect(pattern(-1)).toBe('')
    expect(pattern(0)).toBe('')
  })
})
