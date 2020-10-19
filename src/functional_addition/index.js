function add(n) {
  return function(num) {
    return n + num;
  }
}

module.exports = add
