const showSequence = require('./index').showSequence

test('should return numbers and sum as a string', () => {
  expect(showSequence(6)).toMatch('0+1+2+3+4+5+6 = 21')
})

test('should return 0=0 if count is zero', () => {
  expect(showSequence(0)).toMatch('0=0')
})

test('should return count is less than zero if count is negative', () => {
  expect(showSequence(-15)).toMatch('-15<0')
})

