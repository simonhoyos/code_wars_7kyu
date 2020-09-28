function maxNumber(n) {
  return +`${n}`.split('').sort((a,b) => b - a).join('')
}

module.exports = maxNumber

