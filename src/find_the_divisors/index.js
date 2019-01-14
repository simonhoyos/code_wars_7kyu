function divisors(integer) {
  const answer = [];

  for(let i = 2; i < integer; i++) {
    if(!(integer % i)) {
      answer.push(i);
    }
  }

  return answer.length ? answer : `${integer} is prime`;
}

module.exports = divisors;
