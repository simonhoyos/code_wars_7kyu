const isAnagram = require('./index');

test('foefet is an anagram of toffee', () => {
  expect(isAnagram('foefet', 'toffee')).toBeTruthy();
});

test('no is not an anagram of yes', () => {
  expect(isAnagram('no', 'yes')).toBeFalsy();
});

