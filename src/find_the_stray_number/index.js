function stray(numbers) {
  numbers.sort();
  return numbers[0] !== numbers[1] ? numbers[0] : numbers[numbers.length - 1];
}

module.exports = stray;
