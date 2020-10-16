const vowelIndices = require('.');

describe('Find the vowels', () => {
  it('should return 2, 5', () => {
    expect(vowelIndices('Hello')).toMatchObject([2, 5])
  })
})
