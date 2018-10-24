function circleOfNumbers(n, firstNumber) {
  const halfCircle = n / 2;

  return firstNumber < halfCircle
    ? firstNumber + halfCircle
    : firstNumber - halfCircle;
}

module.exports = circleOfNumbers;
