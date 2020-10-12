function encode(str,  n) {
  const abc = '.abcdefghijklmnopqrstuvwxyz'
  const key = `${n}`
  const res = []

  for(let i = 0; i < str.length; i++) {
    res.push(abc.indexOf(str[i]) + +key[i % key.length])
  }

  return res;
}

module.exports = encode

