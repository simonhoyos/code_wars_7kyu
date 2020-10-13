function repeater(string, n){
  let res = ''
  let i = 0

  while(i < n) {
    res += string
    i++
  }

  return res
}

module.exports = repeater

