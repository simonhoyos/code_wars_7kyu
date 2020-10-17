const adjacentElementsProduct = require('.');

describe('Maximum product', () => {
  it('should return 6', () => {
    expect(adjacentElementsProduct([1, 2, 3])).toBe(6)
  })
})
