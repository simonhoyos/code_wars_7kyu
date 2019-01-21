function maxRot(n) {
  let str = String(n);
  let result = n;

  for (let i = 0; i < str.length - 2; i++) {
    str = (str.slice(0, i) + str.slice(i + 1) + str.slice(i, i + 1));
    result = result >= str ? result : str;
  }
  return +result;
}

module.exports = maxRot;
