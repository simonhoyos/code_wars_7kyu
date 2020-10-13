const repeater = require('.');

describe('Thinkful string drills repeater', () => {
  it('should return aaaaa', () => {
    expect(repeater('a', 5)).toBe('aaaaa')
  })
})

