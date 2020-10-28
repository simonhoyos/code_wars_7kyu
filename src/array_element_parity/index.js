function solve(arr){
  for(const num of arr) {
    if(arr.indexOf(-num) < 0) {
      return num
    }
  }
}

module.exports = solve
