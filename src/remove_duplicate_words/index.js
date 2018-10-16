function filterDuplicates(word, index, words) {
  return words.indexOf(word) === index;
}

function removeDuplicateWords(s) {
  return s.split(' ').filter(filterDuplicates).join(' ');
}

module.exports = removeDuplicateWords;
