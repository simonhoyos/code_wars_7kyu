const add = require('.');

describe('Functional addition', () => {
  it('should return 7', () => {
    expect(add(4)(3)).toBe(7)
  })
})

