const smallEnough = require('./index');

it('should return true', () => {
  expect(smallEnough([66, 101], 200)).toBe(true);
});

it('should return false', () => {
  expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false);
});

it('should return true', () => {
  expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true);
});

it('should return true', () => {
  expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true);
});
