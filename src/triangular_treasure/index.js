function triangular(n) {
  if (n > 0) {
    return n + triangular(n - 1);
  }
  return 0;
}

module.exports = triangular;
