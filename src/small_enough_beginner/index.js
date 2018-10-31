function smallEnough(a, limit){
  return a.every(number => number <= limit);
}

module.exports = smallEnough;
