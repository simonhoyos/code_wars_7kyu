const count = require('.');

describe('Counting array elements', () => {
  it('should return a: 2, b: 1', () => {
    expect(count(['a', 'b', 'a'])).toMatchObject({ a: 2, b: 1 })
  })
})
