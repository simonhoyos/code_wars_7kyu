const countRedBeads = require('.');

describe('Simple beads count', () => {
  it('should count red beads correctly', () => {
    expect(countRedBeads(5)).toBe(8)
    expect(countRedBeads(0)).toBe(0)
  })
})
