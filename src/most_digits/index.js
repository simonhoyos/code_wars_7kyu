function findLongest(array){
  return array.reduce((mostDigitsNum, num) => `${mostDigitsNum}`.length >= `${num}`.length ? mostDigitsNum : num);
}

module.exports = findLongest;
