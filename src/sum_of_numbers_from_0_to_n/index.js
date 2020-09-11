const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count === 0) return '0=0'
    if(count < 0) return `${count}<0`

    let sum = 0
    let str = ''

    for(let i = 0; i <= count; i++) {
      str += i === 0 ? i : `+${i}`
      sum += i
    }

    return `${str} = ${sum}`
  }

  return SequenceSum
})()

module.exports = SequenceSum

