function compare(s1, s2) {
  function getSum(str) {
    const chars = (str || '').split('')
    return chars.reduce((acc, char) => {
      const code = char.toUpperCase().charCodeAt(0)

      if(code < 65 || code > 90) {
        chars.splice(0)
        return 0
      }

      return acc + code
    }, 0)
  }

  return getSum(s1) === getSum(s2)
}

module.exports = compare

