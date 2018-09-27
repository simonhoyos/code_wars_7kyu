function averages(nums) {
  if(nums == null || nums.length <= 1) return [];

  const [ number, ...restNums] = nums;

  return [ (number + restNums[0]) / 2, ...averages(restNums) ];
}

module.exports = averages;
