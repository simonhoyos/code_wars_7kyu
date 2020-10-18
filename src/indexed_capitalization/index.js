function capitalize(s,arr){
  return s
    .split('')
    .map((char, index) => arr.includes(index) ? char.toUpperCase() : char)
    .join('');
};

module.exports = capitalize

