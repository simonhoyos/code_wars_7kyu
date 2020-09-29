function alphabetWar(fight) {
  const left = { 'w': 4, 'p': 3, 'b': 2, 's': 1 }
  const right = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 }
  const sum = [0, 0]

  for(const char of fight) {
    sum[0] = sum[0] + (left[char] || 0)
    sum[1] = sum[1] + (right[char] || 0)
  }

  if(sum[0] === sum[1]) return 'Let\'s fight again!'
  if(sum[0] > sum[1]) return 'Left side wins!'
  return 'Right side wins!'
}

module.exports = alphabetWar

