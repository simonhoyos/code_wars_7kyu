function adjacentElementsProduct(array) {
  return array.reduce((max, num, i, src) => {
    if (i === src.length - 1) return max
    return Math.max(max, num * (src[i + 1]))
  }, -Infinity)
}

module.exports = adjacentElementsProduct

