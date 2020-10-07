function halvingSum(n) {
  if(n < 1) return 0
  return n + halvingSum(Math.floor(n / 2))
}

module.exports = halvingSum

