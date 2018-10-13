const battle = require('./index');

test('should return "Z"', () => {
  expect(battle("AAA", "Z")).toBe("Z");
});

test('should return "TWO"', () => {
  expect(battle("ONE", "TWO")).toBe("TWO");
});

test('should return "Tie!"', () => {
  expect(battle("ONE", "NEO")).toBe("Tie!");
});

test('should return "FOUR"', () => {
  expect(battle("FOUR", "FIVE")).toBe("FOUR");
});
