function solve(arr){
  return arr.filter((num, i, src) => i === src.lastIndexOf(num))
}

module.exports = solve

