function convertToNumber(num) {
  return Number(num);
}

function sortList(a, b) {
  return a - b;
}

function findMissingNumber(sequence) {
  if(/[a-z]/i.test(sequence)) return 1;

  const arr = sequence.split(' ').map(convertToNumber).sort(sortList);

  if (arr[0] === 0) return 0;
  if (arr[0] !== 1) return 1;

  const lastIndex = arr.length - 1;

  for(let i = 0; i < lastIndex; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return 0;
}

module.exports = findMissingNumber;
