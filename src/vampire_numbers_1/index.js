function sort(a, b) {
  return a - b;
}

function vampireTest(a, b){
  const arr = a < b ? a + "" + b : b + "" + a;
  const newArr = arr.split('').sort(sort).join('');
  const vampireNumber =
    String((a * b)).split('').sort(sort).join('');

  return newArr === vampireNumber;
}

module.exports = vampireTest;
