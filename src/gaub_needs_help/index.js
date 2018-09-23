function f(n){
  if (typeof(n) !== "number" || n <= 0 || !Number.isInteger(n)) {
    return false;
  }

  return Array
    .from({ length: n }, (_, i) => i + 1)
    .reduce((sum, num) => { return sum + num }, 0);
};

module.exports = f;
