function arithmetic(a, b, operator) {
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  }[operator];
}

module.exports = arithmetic;
