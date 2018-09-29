function partlist(arr) {
  let result = [];
  for(let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')]);
  }
  return result;
}

module.exports = partlist;
