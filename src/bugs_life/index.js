function calcHypotenuse(a, b) {
  return(
    Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  );
}

function shortestDistance(a, b, c) {
  const distanceOne = calcHypotenuse(a, b + c);
  const distanceTwo = calcHypotenuse(a + b, c);
  const distanceThree = calcHypotenuse(a + c, b);

  return Math.min(distanceOne, distanceTwo, distanceThree);
}

module.exports = shortestDistance;
