const cubeOdd = require('.');

describe('Sum of odd cubed number', () => {
  it('should return 28 if all values are numbers', () => {
    expect(cubeOdd([1, 2, 3, 4])).toBe(28)
  })

  it('should return undefined if any value is not a number', () => {
    expect(cubeOdd(['a', 12, 9, 'z', 42])).toBeUndefined()
  })
})
