const solve = require('.');

describe('Alphabet symmetry', () => {
  it('should return 4, 3, 1', () => {
    expect(solve(['abode', 'ABc', 'xyzD'])).toMatchObject([4,3,1])
  })
})

