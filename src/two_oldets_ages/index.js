function twoOldestAges(ages) {
  const [a, b] = ages.sort((a, b) => b - a)
  return [b, a]
}

module.exports = twoOldestAges

