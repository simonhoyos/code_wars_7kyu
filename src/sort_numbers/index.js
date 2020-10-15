function solution(nums){
  if (!nums || nums.length === 0) return [];
  return nums.sort((a,b)=> a-b);
}

module.exports = solution

