const compare = require('.');

describe('Compare strings by sum of chars', () => {
  it('should return true if the sum is equal', () => {
    expect(compare('AD', 'BC')).toBeTruthy()
  })

  it('should return false if the sum is not equal', () => {
    expect(compare('AD', 'DD')).toBeFalsy()
  })

  it(
    'should consider as empty string if contains characters different from letters',
    () => expect(compare('zz1', '')).toBeTruthy()
  )

  it('should consider null as an empty string', () => {
    expect(compare(null, '')).toBeTruthy()
  })
})

