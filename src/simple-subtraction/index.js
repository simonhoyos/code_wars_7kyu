function solve(a, b) {
  while (a && b) {
    if (a >= (2 * b)) {
      a %= 2 * b;
    } else if (b >= (2 * a)) {
      b %= 2 * a;
    } else {
      return [a, b];
    }
  }
  return [a, b];
}

module.exports = solve;
