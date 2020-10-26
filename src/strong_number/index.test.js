const strong = require('.');

describe('Strong number', () => {
  it('should return STRONG!!!! if it is a strong number', () => {
    expect(strong(1)).toBe("STRONG!!!!")
    expect(strong(2)).toBe("STRONG!!!!")
    expect(strong(145)).toBe("STRONG!!!!")
  })

  it('should retunrn not strong if it is not a strong number', () => {
    expect(strong(7)).toBe('Not Strong !!')
    expect(strong(93)).toBe('Not Strong !!')
  })
})
