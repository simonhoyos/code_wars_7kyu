function factorial(n) {
  if(n < 0 || n > 12) {
    throw new RangeError('Parameter must be greater than 0');
  }

  return n > 0 ? n * factorial(n - 1) : 1;
}

module.exports = factorial;
