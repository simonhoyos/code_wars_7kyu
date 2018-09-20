function sortArray(a, b) {
  return a - b;
}

function gimme(inputArray) {
  const sortedArray =
    Array.prototype.slice.call(inputArray).sort(sortArray);

  return inputArray.indexOf(sortedArray[1]);
}

module.exports = gimme;
