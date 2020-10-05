function containAllRots(strng, arr) {
  if(strng == "") return true

  return strng
    .split('')
    .every((_, i) => arr.indexOf(strng.slice(i) + strng.slice(0,i)) >= 0)
}

module.exports = containAllRots

