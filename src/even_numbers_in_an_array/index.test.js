const evenNumbers = require('.');

describe('Even numbers in an array', () => {
  it('should filter array and return the required number of elements', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toMatchObject([4, 6, 8])
  })
})
