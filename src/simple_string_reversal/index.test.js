const solve = require('.');

describe('Simple string reversal', () => {
  it('Should reverse string and preserve white space positions', () => {
    expect(solve('our code')).toBe('edo cruo')
    expect(solve('your code rocks')).toBe('skco redo cruoy')
  })
})
