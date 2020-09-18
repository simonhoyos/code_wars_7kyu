function wordValue(a) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  return a.map((str, ind) => {
    return str.split('').reduce((acc, char) => {
      return acc + abc.indexOf(char) + 1
    }, 0) * (ind + 1)
  });
}

module.exports = wordValue
