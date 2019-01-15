function oddOrEven(array) {
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return sum % 2 ? 'odd' : 'even';
}

module.exports = oddOrEven;
