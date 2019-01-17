function maxProduct(numbers, size) {
  if (numbers.length < size) false;

  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, num) => acc * num, 1);
}

module.exports = maxProduct;
