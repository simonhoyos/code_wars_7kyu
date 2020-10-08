function reverseNumber(n) {
  const isNegative = n < 0

  const reverse = `${Math.abs(n)}`.split('').reverse().join('')
  return isNegative ? -reverse : +reverse
}

module.exports = reverseNumber

