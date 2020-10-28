const solve = require('.');

describe('Array element parity', () => {
  it('should find the element with no match in the array', () => {
    expect(solve([1,-1,2,-2,3])).toBe(3)
    expect(solve([-3,1,2,3,-1,-4,-2])).toBe(-4)
    expect(solve([1,-1,2,-2,3,3])).toBe(3)
  })
})
