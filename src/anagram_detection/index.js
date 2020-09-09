function isAnagram(test, original) {
  const str1 = test.toLowerCase().split('').sort().join('');
  const str2 = original.toLowerCase().split('').sort().join('');

  return str1 === str2;
}

module.exports = isAnagram;

