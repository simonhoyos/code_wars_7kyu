function solve(arr){
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  return arr.map(el => {
    return el.toLowerCase().split('').reduce((count, char, i) => {
      if(i !== abc.indexOf(char)) return count
      return count + 1
    }, 0)
  })
};

module.exports = solve
