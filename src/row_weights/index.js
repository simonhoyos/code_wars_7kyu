function rowWeights(array){
  return array.reduce((weights, person, pos) => {
    weights[pos % 2] += person
    return weights
  }, [0, 0])
}

module.exports = rowWeights

