const evaporator = require('./index');

test('should return 22', () => {
  expect(evaporator(10,10,10)).toBe(22);
});
