function kaprekarSplit(n) {
  const squared = n * n;
  const numberString = String(squared);
  const numberArray = numberString.split('');
  let result = -1;

  numberArray.forEach((_, index) => {
    const firstSplit = Number(numberString.slice(0, index));
    const secondSplit = Number(numberString.slice(index));

    const shouldUpdateResult =
      firstSplit + secondSplit === n && result < 0;

    if(shouldUpdateResult) {
      result = index;
    }
  });

  return result;
}

module.exports = kaprekarSplit;
