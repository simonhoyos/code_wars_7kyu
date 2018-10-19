function cupAndBalls(b, arr){
  const cups = [ 1, 2, 3 ];

  arr.forEach(([firstChange, secondChange]) => {
    const firstChangedValue = cups[firstChange - 1];
    const secondChangedValue = cups[secondChange - 1];

    cups[firstChange - 1] = secondChangedValue;
    cups[secondChange - 1] = firstChangedValue;
  });

  return cups.indexOf(b) + 1;
};

module.exports = cupAndBalls;
