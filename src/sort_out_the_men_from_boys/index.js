function menFromBoys(arr){
  const men = []
  const boys = []

  new Set(arr).forEach(num => {
    if(num % 2 === 0) {
      men.push(num)
    } else {
      boys.push(num)
    }
  })

  return [...men.sort((a,b) => a - b), ...boys.sort((a,b) => b - a)]
}

module.exports = menFromBoys

