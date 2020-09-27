function balancedNum(number) {
    const strNum = `${number}`
    const isOddLength = strNum.length % 2 !== 0;
    const mid = Math.floor(strNum.length / 2);

    const results = strNum.split('').reduce((acc, num, index) => {
      if(isOddLength && index === mid) return acc
      if(!isOddLength && (index === mid || index === mid - 1)) return acc
      let i = index < mid ? 0 : 1
      acc[i] += +num;
      return acc;
    }, [0, 0]);

    return results[0] === results[1] ? "Balanced" : "Not Balanced"
}

module.exports = balancedNum

