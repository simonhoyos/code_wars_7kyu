function cubeOdd(arr) {
  return arr.reduce((acc, num, i, src) => {
    if(Number.isNaN(+num)) {
      src.splice(1)
      return undefined
    }

    if(num % 2 !== 0) return (num ** 3) + acc

    return acc
  }, 0)
}

module.exports = cubeOdd

