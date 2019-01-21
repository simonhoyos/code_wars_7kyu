const maxRot = require('./index');

test('should return 85821534', () => {
  expect(maxRot(38458215)).toBe(85821534);
});

test('should return 988103115', () => {
  expect(maxRot(195881031)).toBe(988103115);
});

test('should return 962193428', () => {
  expect(maxRot(896219342)).toBe(962193428);
});

test('should return 94183076', () => {
  expect(maxRot(69418307)).toBe(94183076);
});
