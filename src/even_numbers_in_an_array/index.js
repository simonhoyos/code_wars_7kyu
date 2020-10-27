function evenNumbers(array, number) {
  return array.filter(n => n%2 === 0).slice(-number)
}

module.exports = evenNumbers
