const timedReading = require('./index');

test('should return 7', () => {
  expect(timedReading(4,"The Fox asked the stork, 'How is the soup?'")).toBe(7);
});

test('should return 0', () => {
  expect(timedReading(1,"...")).toBe(0);
});

test('should return 3', () => {
  expect(timedReading(3,"This play was good for us.")).toBe(3);
});

test('should return 5', () => {
  expect(timedReading(3,"Suddenly he stopped, and glanced up at the houses")).toBe(5);
});

test('should return 11', () => {
  expect(timedReading(6,"Zebras evolved among the Old World horses within the last four million years.")).toBe(11);
});

test('should return 6', () => {
  expect(timedReading(5,"Although zebra species may have overlapping ranges, they do not interbreed.")).toBe(6);
});

test('should return 0', () => {
  expect(timedReading(1,"Oh!")).toBe(0);
});

test('should return 14', () => {
  expect(timedReading(5,"Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain.")).toBe(14);
});
