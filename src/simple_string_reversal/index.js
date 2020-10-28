function solve(str){
  const rev = str.replace(/\s/g, '').split('').reverse()
  for(let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
      rev.splice(i,0,' ')
    }
  }
  return rev.join('')
}

module.exports = solve
