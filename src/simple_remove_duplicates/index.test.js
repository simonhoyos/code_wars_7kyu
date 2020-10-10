const solve = require('./index');

describe('Simple remove duplicates', () => {
  it('should return 4, 6, 3', () => {
    expect(solve([3, 4, 4, 3, 6, 3 ])).toMatchObject([4, 6, 3])
  })
})
