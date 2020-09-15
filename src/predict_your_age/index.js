function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
  const sum = Array.from(arguments).reduce((sum, age) => {
    return sum += age ** 2
  }, 0);

  return Math.floor(Math.sqrt(sum) / 2);
}

module.exports = predictAge

