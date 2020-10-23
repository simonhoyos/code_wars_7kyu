function solve(s){
  return Math.max(...s.match(/\d+/g))
}

module.exports = solve
