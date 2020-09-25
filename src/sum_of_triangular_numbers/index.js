function sumTriangularNumbers(n) {
  let past = 0
  let sum = 0

  for(let i = 1; i <= n; i++) {
    sum += i + past
    past += i
  }

  return sum
}

module.exports = sumTriangularNumbers

