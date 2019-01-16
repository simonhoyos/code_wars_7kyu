function solution(digits){
  const series = [];

  for (let i = 0; i <= digits.length - 5; i++) {
    series.push(digits.slice(i, i + 5));
  }

  return Math.max(...series);
}

module.exports = solution;
