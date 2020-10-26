function strong(n) {
  function factorial(num) {
    if(num <= 1) return 1
    return num * factorial(num - 1)
  }

  const sum = `${n}`.split('').reduce((acc, el) => acc + factorial(el), 0)

  return sum === n ? "STRONG!!!!" : "Not Strong !!"
}

module.exports = strong
