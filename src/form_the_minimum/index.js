function filterDuplicates(value, index, values) {
  return values.indexOf(value) === index;
}

function sortDigits(a, b) {
  return a - b;
}

function minValue(values) {
  return (
    +values
      .filter(filterDuplicates)
      .sort(sortDigits)
      .join('')
  );
}

module.exports = minValue;
