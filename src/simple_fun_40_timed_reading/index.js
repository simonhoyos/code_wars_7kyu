function timedReading(maxLength, text) {
  return (
    text
      .split(' ')
      .filter(word => {
        const wordWithoutSpecialChars = word.replace(/\W/g, '');

        return wordWithoutSpecialChars && wordWithoutSpecialChars.length <= maxLength;
      })
      .length
  );
}

module.exports = timedReading;
