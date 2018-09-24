function listToArray(list) {
  const arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  return arr;
}

module.exports = listToArray;
