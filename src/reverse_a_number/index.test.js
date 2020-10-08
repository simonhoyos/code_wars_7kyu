const reverseNumber = require('.');

describe('Reverse a number', () => {
  test('should return 321', () => {
    expect(reverseNumber(123)).toBe(321)
  })

  test('should return -654', () => {
    expect(reverseNumber(-456)).toBe(-654)
  })
})

