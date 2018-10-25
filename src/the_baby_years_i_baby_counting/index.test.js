const babyCount = require('./index');

it('should return 1', () => {
  expect(babyCount('baby')).toBe(1);
});

it('should return 1', () => {
  expect(babyCount('abby')).toBe(1);
});

it('should return 3', () => {
  expect(babyCount('baby baby baby')).toBe(3);
});

it('should return 1', () => {
  expect(babyCount('Why the hell are there so many babies?!')).toBe(1);
});

it('should return 1', () => {
  expect(babyCount('Anyone remember life before babies?')).toBe(1);
});

it('should return 2', () => {
  expect(babyCount('Happy babies boom ba by?')).toBe(2);
});

it('should return 1', () => {
  expect(babyCount('b a b y')).toBe(1);
});

it('should return Where\'s the baby?!', () => {
  expect(babyCount('')).toBe('Where\'s the baby?!');
});

it('should return Where\'s the baby?!', () => {
  expect(babyCount('none here')).toBe('Where\'s the baby?!');
});
