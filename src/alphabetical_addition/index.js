function addLetters(...letters) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  const sum = letters.reduce((acc, letter) => {
    return acc + abc.indexOf(letter) + 1
  }, 25)

  return abc[sum % 26]
}

module.exports = addLetters
