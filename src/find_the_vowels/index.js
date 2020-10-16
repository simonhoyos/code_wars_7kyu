function vowelIndices(word){
  let res = []
  word.split('').forEach((char, i) => {
    if('aeiouy'.includes(char.toLowerCase())) {
      res.push(i + 1)
    }
  })

  return res
}

module.exports = vowelIndices

