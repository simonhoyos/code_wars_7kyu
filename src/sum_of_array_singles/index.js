function repeats(arr){
  let nums = []
  return arr.reduce((sum,num) => {
    if(nums.includes(num)) return sum - num
    nums.push(num)
    return sum + num
  }, 0)
};

module.exports = repeats
