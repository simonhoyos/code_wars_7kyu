function buildCharMap(obj, char) {
  obj[char] = obj[char] + 1 || 1;

  return obj;
}

function orderedCount(input) {
  const charMap = input.split('').reduce(buildCharMap, {});

  const charTupples = Object.keys(charMap).map((char) => {
    return [ char, charMap[char] ]
  })

  return charTupples;
}

module.exports = orderedCount;
