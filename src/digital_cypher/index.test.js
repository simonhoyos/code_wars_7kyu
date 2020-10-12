const encode = require('.');

describe('Digital cypher', () => {
  it('should return 20 12 18 30 21', () => {
    expect(encode('scout', 1939)).toMatchObject([20, 12, 18, 30, 21])
  })
})

