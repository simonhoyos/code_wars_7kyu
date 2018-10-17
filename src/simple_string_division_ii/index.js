function filterDivisibleByK(number, k) {
  return function (num) {
    const concatenatedNumber = number + num;

    return concatenatedNumber % k === 0;
  }
}

function getNumberOfElementsDivisibleByK(listOfNumbers, k) {
  return function (counter, number, index, numbers) {
    const newNumbers = listOfNumbers.slice(0, index).concat(numbers.slice(index + 1));

    return newNumbers.filter(filterDivisibleByK(number, k)).length + counter;
  }
}

function solve(s,k) {
  const numbers = s.split(' ');

  return numbers.reduce(getNumberOfElementsDivisibleByK(numbers, k), 0);
}

module.exports = solve;
