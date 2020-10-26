const noOdds = require('.');

describe('No oddities here', () => {
  it('should filter odd numbers', () => {
    expect(noOdds([0,1,2])).toMatchObject([0,2])
  })
})
