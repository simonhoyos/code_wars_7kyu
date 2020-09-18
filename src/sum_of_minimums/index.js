function sumOfMinimums(arr) {
  return arr.reduce((sum, row) => sum + Math.min(...row), 0)
}

module.exports = sumOfMinimums

