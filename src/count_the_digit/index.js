function mapArrayElements(_, index) {
  return index * index;
}

function nbDig(n, d) {
  const listOfDigits = Array.from({ length: n + 1 }, mapArrayElements).join('');
  const digitMatcher = RegExp(`(${d})`, 'g');
  const digitCount = listOfDigits.match(digitMatcher).length;
  return digitCount;
}

module.exports = nbDig;
