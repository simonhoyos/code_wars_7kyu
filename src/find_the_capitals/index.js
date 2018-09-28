function capitals(word) {
  const result = [];

  const letters = word.split('');
  letters.forEach((letter, index) => {
    if(letter == letter.toUpperCase()) {
      result.push(index);
    }
  });

  return result;
}

module.exports = capitals;
