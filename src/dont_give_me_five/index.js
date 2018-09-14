function dontGiveMeFive(start, end) {
  const arrayLength = end - start + 1;
  const listOfNumbers = Array.from({ length: arrayLength }, function mapNumbers(_, index) {
    return index + start
  });

  const fiteredList = listOfNumbers.filter(function removeFives(num) {
    return !(/5/g.test(num));
  });

  return fiteredList.length;
}

module.exports = dontGiveMeFive;
