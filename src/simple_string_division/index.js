function solve(str, k) {
  const options = Array.from({ length: k + 1}, (_, index) =>
  str.slice(index, str.length - k + index));

  return Math.max(...options);
}

module.exports = solve;
