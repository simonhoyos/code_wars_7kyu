function reverse(str) {
  const stringLength = str.length;
  const stringLastIndex = stringLength - 1;

  if (stringLength > 1) {
    return str[stringLastIndex] + reverse(str.slice(0, stringLastIndex));
  }

  return str[0];
}

module.exports = reverse;
