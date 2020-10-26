function noOdds( values ){
  return values.filter((n) => n%2 === 0)
}

module.exports = noOdds
