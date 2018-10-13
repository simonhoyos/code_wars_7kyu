function getValues(word) {
  return (
    word
      .split('')
      .map((char) => char.charCodeAt() - 64)
      .reduce((sum, num) => sum + num, 0)
  );
}

function battle(x, y) {
 const firstFighter = getValues(x);
 const secondFighter = getValues(y);

 if(firstFighter === secondFighter) return 'Tie!'

 return firstFighter > secondFighter ? x : y;
}

module.exports = battle;
