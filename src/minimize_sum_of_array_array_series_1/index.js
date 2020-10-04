function minSum(arr) {
  let sortedArr = arr.slice().sort((a,b) => a-b)
  let len = sortedArr.length;
  let sum = 0;
  for(let i = 0; i < sortedArr.length / 2; i++) {
    sum += sortedArr[i] * sortedArr[len - 1 - i]
  }
  return sum
}

module.exports = minSum

