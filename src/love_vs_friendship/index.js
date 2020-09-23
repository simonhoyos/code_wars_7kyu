function wordsToMarks(string){
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  let res = 0

  for(const char of string) {
    res += abc.indexOf(char) + 1
  }

  return res
}

module.exports = wordsToMarks

