const solution = require('.');

describe('Sort numbers', () => {
  it('should return an empty array if nums is null', () => {
    expect(solution(null)).toMatchObject([])
  })

  it('should return an empty array if nums is empty', () => {
    expect(solution([])).toMatchObject([])
  })

  it('should return a sorted array', () => {
    expect(solution([1, 10, 6, 3])).toMatchObject([1, 3, 6, 10])
  })
})
