function flattenAndSort(array) {
  let result = []
  array.forEach(arr => result.push(...arr))

  return result.sort((a,b) => a - b)
}

module.exports = flattenAndSort

