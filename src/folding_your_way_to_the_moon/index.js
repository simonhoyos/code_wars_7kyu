function foldTo(distance) {
  if(distance < 0) return null

  let folds = 0
  let count = 0.0001

  while(count < distance) {
    count *= 2
    folds++
  }

  return folds
}

module.exports = foldTo

