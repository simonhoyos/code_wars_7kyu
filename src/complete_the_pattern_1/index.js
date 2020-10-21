function pattern(n) {
  if(n < 1) return ''
  if(n === 1) return '1'
  return pattern(n-1) + '\n' + `${n}`.repeat(n)
}

module.exports = pattern
