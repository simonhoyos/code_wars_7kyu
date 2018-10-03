function mapArray(_, index) {
  return index + 1;
}

function count(acc, num) {
  const isMultipleOf3Or5 = num % 3 === 0 || num % 5 === 0;

  if(isMultipleOf3Or5) {
    return acc + num;
  }

  return acc;
}

function findSum(n) {
  return Array.from({ length: n }, mapArray).reduce(count, 0);
}

module.exports = findSum;
