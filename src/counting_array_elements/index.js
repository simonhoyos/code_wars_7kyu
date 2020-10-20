function count(array){
  return array.reduce((map, el) => {
    map[el] = map[el] + 1 || 1;
    return map
  }, {})
}

module.exports = count
