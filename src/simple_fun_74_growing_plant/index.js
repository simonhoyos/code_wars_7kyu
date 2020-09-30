function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 0
  let curr = 0
  while(curr < desiredHeight) {
    count++
    curr += upSpeed

    if(curr >= desiredHeight) {
      return count
    }

    curr -= downSpeed
  }
}

module.exports = growingPlant

