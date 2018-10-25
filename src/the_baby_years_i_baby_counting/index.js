function babyCount(x) {
  const charMatch = x.toLowerCase().match(/[baby]/g) || [];
  const { a = 0, b = 0, y = 0 } = charMatch.reduce((map, char) => {
    return {
      ...map,
      [char]: map[char] + 1 || 1,
    }
  }, {});

  return Math.min(a, Math.floor(b / 2), y) || "Where's the baby?!";
}

module.exports = babyCount;
